# Web UI for Aptly

> Currently under development. 

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
