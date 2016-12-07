#!/usr/bin/env python

import os
import sys
os.chdir(os.path.dirname(os.path.abspath(__file__)))
WORK_DIR = os.path.dirname(os.path.abspath(__file__))

WORK_DIR = '/'.join(WORK_DIR.split('/')[0:-1])
sys.path.append(WORK_DIR)
from aptlyweb import app as application, db


def init_db():
    db.create_all(app=application)
    application.user_datastore.create_role(name='admin', description='Aptly administrator')
    db.session.commit()
    print('Done!')
    exit(0)


def set_admin():
    db.create_all(app=application)
    # Fix Python 2.x.
    try:
        input = raw_input
    except NameError:
        pass

    email = input('Enter email: ')

    application.user_datastore.add_role_to_user(application.user_datastore.find_user(email=email),
                                                application.user_datastore.find_role('admin'))
    db.session.commit()
    print('Done!')
    exit(0)


def main():
    application.run(threaded=True, host='0.0.0.0', port=5001)

if __name__ == '__main__':
    main()
