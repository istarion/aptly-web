from flask_restful import Resource
from aptlyweb.resources import pyptly_api


class AptlyVersion(Resource):
    def get(self):
        return pyptly_api.aptly_version


