from flask_restful import Resource, reqparse
from flask_restful import abort
from aptlyweb.resources import pyptly_api

class Snapshot(Resource):
    @staticmethod
    def get(name=''):
        if name == '':
            snapshots_list = pyptly_api.get_snapshots()
            return snapshots_list
        else:
            return pyptly_api.show_snapshot(name)

    @staticmethod
    def post(name):
        parser = reqparse.RequestParser()
        parser.add_argument('repoName')
        args = parser.parse_args()
        args["Name"] = name
        result = pyptly_api.create_snapshot_from_repo(args['repoName'], **args)
        if isinstance(result, dict) or 'error' not in result[0] and 'error' not in result:
            return result
        else:
            abort(422, error=result[0]['error'])

    @staticmethod
    def delete(name):
        result = pyptly_api.delete_snapshot(name)
        if isinstance(result, dict) or 'error' not in result[0]:
            return {'result': 'Snapshot deleted'}
        else:
            abort(422, error=result[0]['error'])


class SnapshotsDiff(Resource):
    @staticmethod
    def get(left_snap, right_snap):
        result = pyptly_api.snapshots_diff(left_snap, right_snap)
        return result