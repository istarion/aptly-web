from flask_restful import Resource, reqparse
from flask_restful import abort
from aptlyweb.resources import pyptly_api
from flask_security import login_required


class LocalPackages(Resource):
    method_decorators = [login_required]

    @staticmethod
    def get(name):
        parser = reqparse.RequestParser()
        parser.add_argument('q')
        args = parser.parse_args()
        return pyptly_api.show_repo_packages(name, format='details', **args)
