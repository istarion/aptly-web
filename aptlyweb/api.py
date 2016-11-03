import flask_restful

from aptlyweb import app
from aptlyweb.resources.aptly import AptlyVersion
from aptlyweb.resources.repos import GetLocalRepos, CreateLocalRepo, ShowLocalRepo, ShowRepoPackages, EditLocalRepo, \
    DeleteLocalRepo


def init_api():
    api = flask_restful.Api(app)

    api.add_resource(AptlyVersion, '/version', endpoint='version')

    # Repos api
    api.add_resource(GetLocalRepos, '/repos/get_local_repos', endpoint='local_repos')
    api.add_resource(CreateLocalRepo, '/repos/create_local_repo')
    api.add_resource(ShowLocalRepo, '/repos/show_local_repo')
    api.add_resource(ShowRepoPackages, '/repos/show_repo_packages')
    api.add_resource(EditLocalRepo, '/repos/edit_repo_packages')
    api.add_resource(DeleteLocalRepo, '/repos/delete_repo_packages')


