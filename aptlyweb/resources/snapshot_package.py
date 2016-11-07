from flask_restful import Resource, reqparse
from flask_restful import abort
from aptlyweb.resources import pyptly_api

class SnapshotPackage(Resource):
    @staticmethod
    def get(name):
        parser = reqparse.RequestParser()
        parser.add_argument('q')
        args = parser.parse_args()
        return pyptly_api.show_snapshot_packages(name, format='details', **args)
