import time

from flask_restful import Resource, reqparse
from flask_restful import abort
from aptlyweb.resources import pyptly_api, error_check


class LocalRepo(Resource):
    @staticmethod
    def get(name=''):
        if name == '':
            repos_list = pyptly_api.get_local_repos
            repos_list.sort(key=lambda tup: tup["Name"])
            return repos_list
        else:
            return pyptly_api.show_local_repo(name)

    @staticmethod
    def post(name=''):
        parser = reqparse.RequestParser()
        parser.add_argument('Name')
        parser.add_argument('Comment')
        parser.add_argument('DefaultDistribution')
        parser.add_argument('DefaultComponent')
        args = parser.parse_args()
        test = pyptly_api.show_local_repo(name)
        if isinstance(test, dict):
            result = pyptly_api.edit_local_repo(name, **args)
        else:
            result = pyptly_api.create_local_repo(name, **args)
        if isinstance(result, dict) or 'error' not in result[0]:
            return result
        else:
            abort(422, error=result[0]['error'])

    @staticmethod
    def delete(name):
        result = pyptly_api.delete_local_repo(name)
        if isinstance(result, dict) or 'error' not in result[0]:
            return {'result': 'Repository deleted'}
        else:
            abort(422, error=result[0]['error'])

class DiffWithSnapshot(Resource):
    @staticmethod
    def get(left_item, right_item):
        left_snap = pyptly_api.create_snapshot_from_repo(left_item, Name='tmp_' + str(int(time.time()*1000)))
        error_check(left_snap)
        result = pyptly_api.snapshots_diff(left_snap["Name"], right_item)
        error_check(result)
        pyptly_api.delete_snapshot(left_snap["Name"])
        for record in result:
            if record["Left"]:
                record["Left"] = record["Left"].split(' ')
            else:
                record["Left"] = [None, None, None]
            if record["Right"]:
                record["Right"] = record["Right"].split(' ')
            else:
                record["Right"] = [None, None, None]
        return result


class DiffWithRepo(Resource):
    @staticmethod
    def get(left_item, right_item):
        left_snap = pyptly_api.create_snapshot_from_repo(left_item, Name='tmp_l_' + str(int(time.time()*1000)))
        error_check(left_snap)
        right_snap = pyptly_api.create_snapshot_from_repo(right_item, Name='tmp_r_' + str(int(time.time() * 1000)))
        error_check(right_snap)
        result = pyptly_api.snapshots_diff(left_snap["Name"], right_snap["Name"])
        error_check(result)
        pyptly_api.delete_snapshot(left_snap["Name"])
        pyptly_api.delete_snapshot(right_snap["Name"])
        for record in result:
            if record["Left"]:
                record["Left"] = record["Left"].split(' ')
            else:
                record["Left"] = [None, None, None]
            if record["Right"]:
                record["Right"] = record["Right"].split(' ')
            else:
                record["Right"] = [None, None, None]
        return result
