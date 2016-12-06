from flask_restful import Resource, reqparse
from flask_restful import abort
from aptlyweb.resources import pyptly_api
from flask_security import login_required


class PackageSearch(Resource):

    @staticmethod
    def get(query):
        result = []
        for rep in pyptly_api.get_local_repos:
            repo_found = pyptly_api.show_repo_packages(rep["Name"], q="Name (~ .*{QUERY}.*)".format(QUERY=query))
            if repo_found:
                result.append({
                    "repo": rep["Name"],
                    "packages": repo_found
                })
        for snap in pyptly_api.get_snapshots():
            snap_found = pyptly_api.show_snapshot_packages(snap["Name"], q="Name (~ .*{QUERY}.*)".format(QUERY=query))
            if snap_found:
                result.append({
                    "snap": snap["Name"],
                    "packages": snap_found
                })

        return result


class PackageAdvancedSearch(Resource):

    @staticmethod
    def get(query):
        result = []
        for rep in pyptly_api.get_local_repos:
            repo_found = pyptly_api.show_repo_packages(rep["Name"], q=query)
            if repo_found:
                result.append({
                    "repo": rep["Name"],
                    "packages": repo_found
                })
        for snap in pyptly_api.get_snapshots():
            snap_found = pyptly_api.show_snapshot_packages(snap["Name"], q=query)
            if snap_found:
                result.append({
                    "snap": snap["Name"],
                    "packages": snap_found
                })

        return result
