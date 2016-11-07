from flask_restful import Resource, reqparse
from flask_restful import abort
from aptlyweb.resources import pyptly_api


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



class EditLocalRepo(Resource):
    @staticmethod
    def get():
        parser = reqparse.RequestParser()
        parser.add_argument('Name')
        parser.add_argument('Comment')
        parser.add_argument('DefaultDistribution')
        parser.add_argument('DefaultComponent')
        args = parser.parse_args()
        return pyptly_api.edit_local_repo(**args)

