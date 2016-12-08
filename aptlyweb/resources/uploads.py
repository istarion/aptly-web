from flask_restful import Resource, reqparse, request
from flask_restful import abort
from aptlyweb.resources import pyptly_api
from flask_security import login_required
from tempfile import NamedTemporaryFile


class Upload(Resource):
    method_decorators = [login_required]

    @staticmethod
    def get():
        return pyptly_api.get_files('web-upload')

    @staticmethod
    def post():
        tempfile = NamedTemporaryFile(suffix='_' + request.files["package"].filename)
        request.files["package"].save(tempfile)

        return pyptly_api.upload_files('web-upload', tempfile.name)