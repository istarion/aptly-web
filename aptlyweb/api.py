import flask_restful

from aptlyweb import app
from aptlyweb.resources.aptly import AptlyVersion
from aptlyweb.resources.repo import LocalRepo, DiffWithSnapshot, DiffWithRepo, AddPackageByKey, DelPackageByKey
from aptlyweb.resources.snapshot import Snapshot, SnapshotsDiff
from aptlyweb.resources.local_package import PackageList, Package
from aptlyweb.resources.snapshot_package import SnapshotPackages
from aptlyweb.resources.package_search import PackageSearch, PackageAdvancedSearch


def init_api():
    api = flask_restful.Api(app, prefix='/api')

    api.add_resource(AptlyVersion, '/version', endpoint='version')

    # Repos api
    api.add_resource(LocalRepo, '/repos/', endpoint='local_repos')
    api.add_resource(LocalRepo, '/repos/<string:name>', endpoint='local_repo')
    api.add_resource(AddPackageByKey, '/repos/<string:name>/add_pkg')
    api.add_resource(DelPackageByKey, '/repos/<string:name>/del_pkg')

    api.add_resource(Snapshot, '/snapshots/', endpoint='snapshots')
    api.add_resource(Snapshot, '/snapshots/<string:name>', endpoint='snapshot')

    api.add_resource(PackageList, '/repos/<string:name>/packages', endpoint='local_packages')
    api.add_resource(SnapshotPackages, '/snapshots/<string:name>/packages', endpoint='snapshot_packages')

    api.add_resource(Package, '/package/<string:key>')
    api.add_resource(PackageSearch, '/search/<string:query>', endpoint='search_packages')
    api.add_resource(PackageAdvancedSearch, '/advanced_search/<string:query>', endpoint='advanced_search_packages')

    api.add_resource(SnapshotsDiff, '/snapshots/diff/<string:left_item>/<string:right_item>', endpoint='snapshots_diff')
    api.add_resource(DiffWithSnapshot, '/repos/diff_snap/<string:left_item>/<string:right_item>', endpoint='repo_snap_diff')
    api.add_resource(DiffWithRepo, '/repos/diff_repo/<string:left_item>/<string:right_item>', endpoint='repo_srepo_diff')



