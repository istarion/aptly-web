# Web UI for Aptly

> Currently under development. 

## How to build static:
```
cd aptlyweb/static
sudo npm install -g gulp
npm install
gulp webpack
```

## Provide symlink to static
```
ln -s $APTLYWEB$/static/dist/index.html $APTLYWEB$/templates/index.html
```

## How to build wheel:
```
python setup.py bdist_wheel --universal
```

## How to install from wheel:
```
1. virtualenv venv
2. source ./venv/bin/activate
3. pip install aptlyweb-x.x-py2.py3-none-any.whl
4. export APTLYWEB_SETTINGS=/path/to/config
5. ./venv/bin/aptlyweb_init_db
6. ./venv/bin/aptlyweb_start
```

## Config example:
```
SECRET_KEY = 'ChangeThis'

APTLY_URL = 'localhost:8080'

SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:foobar@localhost/aptlyweb'
SQLALCHEMY_TRACK_MODIFICATIONS = True

SECURITY_USER_IDENTITY_ATTRIBUTES = 'email'

#Ldap config, reference: http://flask-ldap3-login.readthedocs.io/en/latest/configuration.html
LDAP_HOST = 'ldap://48.151.62.34'
LDAP_PORT = 3268
LDAP_BASE_DN = 'DC=company,DC=com'
LDAP_BIND_DIRECT_CREDENTIALS = True
```

Frontend: [Angular](https://angularjs.org), [ES6](https://git.io/es6features), [Webpack](http://webpack.github.io/) 
and [Angular Material](material.angularjs.org) 

Backend: [Python3](https://www.python.org/), [Flask](http://flask.pocoo.org/), [pyptly](https://github.com/repelista/pyptly)

