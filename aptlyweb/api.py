import flask_restful

from aptlyweb import app
from aptlyweb.resources.aptly import AptlyVersion
from aptlyweb.resources.repo import LocalRepo
from aptlyweb.resources.local_package import LocalPackage


def init_api():
    api = flask_restful.Api(app)

    api.add_resource(AptlyVersion, '/version', endpoint='version')

    # Repos api
    api.add_resource(LocalRepo, '/repos/local_repos/', endpoint='local_repos')
    api.add_resource(LocalRepo, '/repos/local_repos/<string:name>', endpoint='local_repo')

    api.add_resource(LocalPackage, '/repos/local_repos/<string:name>/packages', endpoint='local_package')



