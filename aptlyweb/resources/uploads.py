import os

from flask_restful import Resource, reqparse, request
from flask_restful import abort
from aptlyweb.resources import pyptly_api
from flask_security import login_required, roles_accepted
from tempfile import NamedTemporaryFile


class Upload(Resource):
    method_decorators = [login_required]

    @staticmethod
    def get():
        return pyptly_api.get_files('web-upload')

    @staticmethod
    def post():
        # tempfile = NamedTemporaryFile(suffix='_' + request.files["package"].filename)
        # request.files["package"].save(tempfile)
        # fix this
        try:
            tempfile = open('./' + request.files["package"].filename, 'wb')
            request.files["package"].save(tempfile)
            tempfile.flush()
            tempfile.close()
            result = pyptly_api.upload_files('web-upload', tempfile.name)
        finally:
            os.remove('./' + request.files["package"].filename)
            return result


class CleanUploads(Resource):
    method_decorators = [login_required]

    @staticmethod
    @roles_accepted('admin')
    def get():
        for file in pyptly_api.get_files('web-upload'):
            pyptly_api.delete_file('web-upload', file)
        return 'DONE!'