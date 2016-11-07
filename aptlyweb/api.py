import flask_restful

from aptlyweb import app
from aptlyweb.resources.aptly import AptlyVersion
from aptlyweb.resources.repo import LocalRepo
from aptlyweb.resources.snapshot import Snapshot, SnapshotsDiff
from aptlyweb.resources.local_package import LocalPackage
from aptlyweb.resources.snapshot_package import SnapshotPackage


def init_api():
    api = flask_restful.Api(app)

    api.add_resource(AptlyVersion, '/version', endpoint='version')

    # Repos api
    api.add_resource(LocalRepo, '/repos/', endpoint='local_repos')
    api.add_resource(LocalRepo, '/repos/<string:name>', endpoint='local_repo')

    api.add_resource(Snapshot, '/snapshots/', endpoint='snapshots')
    api.add_resource(Snapshot, '/snapshots/<string:name>', endpoint='snapshot')

    api.add_resource(LocalPackage, '/repos/<string:name>/packages', endpoint='local_package')
    api.add_resource(SnapshotPackage, '/snapshots/<string:name>/packages', endpoint='snapshot_package')

    api.add_resource(SnapshotsDiff, '/snapshots/diff/<string:left_snap>/<string:right_snap>', endpoint='snapshots_diff')



