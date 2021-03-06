import time
from flask import request, session
from flask_restful import Resource, reqparse
from flask_restful import abort
from aptlyweb.resources import pyptly_api, error_check
from flask_security import login_required, roles_accepted
from flask_security import current_user


class LocalRepo(Resource):
    method_decorators = [login_required]

    @staticmethod
    def get(name=''):
        if name == '':
            repos_list = pyptly_api.get_local_repos
            repos_list.sort(key=lambda tup: tup["Name"])
            return repos_list
        else:
            return pyptly_api.show_local_repo(name)

    @staticmethod
    @roles_accepted('admin')
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
    @roles_accepted('admin')
    def delete(name):
        result = pyptly_api.delete_local_repo(name)
        if isinstance(result, dict) or 'error' not in result[0]:
            return {'result': 'Repository deleted'}
        else:
            abort(422, error=result[0]['error'])


class DiffWithSnapshot(Resource):
    method_decorators = [login_required]

    @staticmethod
    def get(left_item, right_item):
        try:
            left_snap = pyptly_api.create_snapshot_from_repo(left_item, Name='tmp_' + str(int(time.time()*1000)))
            error_check(left_snap)
            result = pyptly_api.snapshots_diff(left_snap["Name"], right_item)
            error_check(result)
            for record in result:
                if record["Left"]:
                    record["Left"] = record["Left"].split(' ')
                else:
                    record["Left"] = [None, None, None]
                if record["Right"]:
                    record["Right"] = record["Right"].split(' ')
                else:
                    record["Right"] = [None, None, None]
        finally:
            if left_snap and isinstance(left_snap, dict):
                pyptly_api.delete_snapshot(left_snap["Name"])
        return result


class DiffWithRepo(Resource):
    method_decorators = [login_required]

    @staticmethod
    def get(left_item, right_item):
        try:
            left_snap = pyptly_api.create_snapshot_from_repo(left_item, Name='tmp_l_' + str(int(time.time()*1000)))
            right_snap = pyptly_api.create_snapshot_from_repo(right_item, Name='tmp_r_' + str(int(time.time() * 1000)))
            error_check(left_snap)
            error_check(right_snap)
            result = pyptly_api.snapshots_diff(left_snap["Name"], right_snap["Name"])
            error_check(result)
            for record in result:
                if record["Left"]:
                    record["Left"] = record["Left"].split(' ')
                else:
                    record["Left"] = [None, None, None]
                if record["Right"]:
                    record["Right"] = record["Right"].split(' ')
                else:
                    record["Right"] = [None, None, None]
        finally:
            if left_snap and isinstance(left_snap, dict):
                pyptly_api.delete_snapshot(left_snap["Name"])
            if right_snap and isinstance(right_snap, dict):
                pyptly_api.delete_snapshot(right_snap["Name"])
        return result


class AddPackageByKey(Resource):
    @staticmethod
    @login_required
    @roles_accepted('admin')
    def post(name):
        parser = reqparse.RequestParser()
        parser.add_argument('PackageRefs')
        args = parser.parse_args()
        args['PackageRefs'] = args['PackageRefs'].split(',')
        result = pyptly_api.add_pkg_bykey(name, **args)
        return result


class DelPackageByKey(Resource):
    @staticmethod
    @login_required
    @roles_accepted('admin')
    def post(name):
        parser = reqparse.RequestParser()
        parser.add_argument('PackageRefs')
        args = parser.parse_args()
        args['PackageRefs'] = args['PackageRefs'].split(',')
        result = pyptly_api.delete_pkg_bykey(name, **args)
        return result


class AddPackageFromUpload(Resource):
    @staticmethod
    @login_required
    @roles_accepted('admin')
    def post(name):
        parser = reqparse.RequestParser()
        parser.add_argument('filename')
        args = parser.parse_args()
        result = pyptly_api.add_uploaded_pkg(name, 'web-upload', **args)
        return result
