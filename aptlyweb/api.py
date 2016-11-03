import flask_restful

from aptlyweb import app
from aptlyweb.resources.aptly import AptlyVersion
from aptlyweb.resources.repos import LocalRepo


def init_api():
    api = flask_restful.Api(app)

    api.add_resource(AptlyVersion, '/version', endpoint='version')

    # Repos api
    api.add_resource(LocalRepo, '/repos/local_repos/', endpoint='local_repos')
    api.add_resource(LocalRepo, '/repos/local_repos/<string:name>', endpoint='local_repo')



