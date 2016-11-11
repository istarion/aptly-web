import flask_restful

from aptlyweb import app
from aptlyweb.resources.aptly import AptlyVersion
from aptlyweb.resources.repo import LocalRepo, DiffWithSnapshot, DiffWithRepo
from aptlyweb.resources.snapshot import Snapshot, SnapshotsDiff
from aptlyweb.resources.local_package import LocalPackage
from aptlyweb.resources.snapshot_package import SnapshotPackage


def init_api():
    api = flask_restful.Api(app)

    api.add_resource(AptlyVersion, '/api/version', endpoint='version')

    # Repos api
    api.add_resource(LocalRepo, '/api/repos/', endpoint='local_repos')
    api.add_resource(LocalRepo, '/api/repos/<string:name>', endpoint='local_repo')

    api.add_resource(Snapshot, '/api/snapshots/', endpoint='snapshots')
    api.add_resource(Snapshot, '/api/snapshots/<string:name>', endpoint='snapshot')

    api.add_resource(LocalPackage, '/api/repos/<string:name>/packages', endpoint='local_package')
    api.add_resource(SnapshotPackage, '/api/snapshots/<string:name>/packages', endpoint='snapshot_package')

    api.add_resource(SnapshotsDiff, '/api/snapshots/diff/<string:left_item>/<string:right_item>', endpoint='snapshots_diff')
    api.add_resource(DiffWithSnapshot, '/api/repos/diff_snap/<string:left_item>/<string:right_item>', endpoint='repo_snap_diff')
    api.add_resource(DiffWithRepo, '/api/repos/diff_repo/<string:left_item>/<string:right_item>', endpoint='repo_srepo_diff')



