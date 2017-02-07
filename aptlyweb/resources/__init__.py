from aptlyweb import app
from flask_restful import abort
import pyptly


pyptly_api = pyptly.Aptly(app.aptly_url, auth=(app.aptly_auth_user, app.aptly_auth_password))


def error_check(result):
    if isinstance(result, list) and len(result) > 0 and 'error' in result[0]:
        abort(422, error=result[0]['error'])
