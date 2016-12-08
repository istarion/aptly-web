from flask_restful import Resource, reqparse
from flask_restful import abort
from aptlyweb.resources import pyptly_api
from flask_security import login_required
from tempfile import NamedTemporaryFile


class Upload(Resource):
    method_decorators = [login_required]

    @staticmethod
    def get():
        return pyptly_api.get_files('web-upload')

    # @staticmethod
    # def post():
    #     return pyptly_api.upload_files('web-upload', file)