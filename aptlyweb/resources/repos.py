from flask_restful import Resource, reqparse
from aptlyweb.resources import pyptly_api


class GetLocalRepos(Resource):
    def get(self):
        repos_list = pyptly_api.get_local_repos
        repos_list.sort(key=lambda tup: tup["Name"])
        return repos_list


class CreateLocalRepo(Resource):
    @staticmethod
    def get():
        parser = reqparse.RequestParser()
        parser.add_argument('name')
        parser.add_argument('comment')
        parser.add_argument('default_distribution')
        parser.add_argument('default_component')
        args = parser.parse_args()
        return pyptly_api.create_local_repo(**args)


class ShowLocalRepo(Resource):
    @staticmethod
    def get():
        parser = reqparse.RequestParser()
        parser.add_argument('name')
        args = parser.parse_args()
        return pyptly_api.show_local_repo(**args)


class ShowRepoPackages(Resource):
    @staticmethod
    def get():
        parser = reqparse.RequestParser()
        parser.add_argument('name')
        args = parser.parse_args()
        return pyptly_api.show_repo_packages(**args)


class EditLocalRepo(Resource):
    @staticmethod
    def get():
        parser = reqparse.RequestParser()
        parser.add_argument('name')
        parser.add_argument('comment')
        parser.add_argument('default_distribution')
        parser.add_argument('default_component')
        args = parser.parse_args()
        return pyptly_api.edit_local_repo(**args)


class DeleteLocalRepo(Resource):
    @staticmethod
    def get():
        parser = reqparse.RequestParser()
        parser.add_argument('name')
        args = parser.parse_args()
        return pyptly_api.delete_local_repo(**args)
