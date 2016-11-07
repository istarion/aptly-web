from flask_restful import Resource, reqparse
from flask_restful import abort
from aptlyweb.resources import pyptly_api

class LocalPackage(Resource):
    @staticmethod
    def get(name):
        parser = reqparse.RequestParser()
        parser.add_argument('q')
        args = parser.parse_args()
        return pyptly_api.show_repo_packages(name, format='details', **args)
