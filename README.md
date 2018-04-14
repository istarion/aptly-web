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
ln -s $APTLYWEB$/static/dist/index.html
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

## Frontend File Structure
```
client
⋅⋅app/
⋅⋅⋅⋅app.js * app entry file
⋅⋅⋅⋅app.html * app template
⋅⋅⋅⋅common/ * functionality pertinent to several components propagate into this directory
⋅⋅⋅⋅components/ * where components live
⋅⋅⋅⋅⋅⋅components.js * components entry file
⋅⋅⋅⋅⋅⋅component-name/ * component
⋅⋅⋅⋅⋅⋅⋅⋅component-name.js * component entry file (routes, configurations, and declarations occur here)
⋅⋅⋅⋅⋅⋅⋅⋅component-name.component.js * component "directive"
⋅⋅⋅⋅⋅⋅⋅⋅component-name.controller.js * component controller
⋅⋅⋅⋅⋅⋅⋅⋅component-name.styl * component styles
⋅⋅⋅⋅⋅⋅⋅⋅component-name.html * component template
```

### Generating Components
Following a consistent directory structure between components offers us the certainty of predictability. We can take advantage of this certainty by creating a gulp task to automate the "instantiation" of our components. The component boilerplate task generates this:
```
⋅⋅⋅⋅⋅⋅componentName/
⋅⋅⋅⋅⋅⋅⋅⋅componentName.js // entry file where all its dependencies load
⋅⋅⋅⋅⋅⋅⋅⋅componentName.component.js
⋅⋅⋅⋅⋅⋅⋅⋅componentName.controller.js
⋅⋅⋅⋅⋅⋅⋅⋅componentName.html
⋅⋅⋅⋅⋅⋅⋅⋅componentName.styl // scoped to affect only its own template
```

You may, of course, create these files manually, every time a new module is needed, but that gets quickly tedious.
To generate a component, run `gulp component --name componentName`.

The parameter following the `--name` flag is the name of the component to be created. Ensure that it is unique or it will overwrite the preexisting identically-named component.

The component will be created, by default, inside `client/app/components`. To change this, apply the `--parent` flag, followed by a path relative to `client/app/components/`.

For example, running `gulp component --name signup --parent auth` will create a `signup` component at `client/app/components/auth/signup`.  

Running `gulp component --name footer --parent ../common` creates a `footer` component at `client/app/common/footer`.  

Because the argument to `--name` applies to the folder name **and** the actual component name, make sure to camelcase the component names.
