# Weather App

## About

This is a demo weather app written in Django and Angular that makes use of [Weather Underground](http://wunderground.com)'s free weather & autocomplete apis.

This app uses Django as an intermediary that takes the apis exposed by Weather Underground and exposes api endpoints for the client-side app to then hit the backend.  This prevents the api key from being exposed, and allows the client to avoid having to resort to JSONP ugliness.

On the frontend, Angular was used, as well as [UI Router](https://github.com/angular-ui/ui-router) and [UI Bootstrap](https://github.com/angular-ui/bootstrap).  There is usage of the `ui-sref` and `ui-sref-active` directives from UI Router, and the `typeahead` directive from UI Bootstrap.  Bootstrap was used purely for the CSS, with UI Bootstrap being an excellent JS substitute for the jQuery plugin when Angular is present.

## How to Install

*  Install Python & Django
*  Install [Node.js](http://nodejs.org)
*  Run `(sudo) npm install -g bower`
*  Navigate to the root directory of the cloned repo & run `bower install`
*  Run the server via `python manage.py runserver`
*  Access the website in your browser at `http://localhost:8000`

## Criticisms

There are some things that could be improved here given more time.  The site routes should be put in a better location such as the main module, so that the weather module could be cleaner & not contain central app information.

Ideally, Less or Sass would be used to allow greater flexibility with theming/styling the site, including picking & choosing Bootstrap components to use and to use mixins to clean the presentation up, as well as cleaner style management with nesting.

The usage of flexbox here was pure experimentation, so it may not be used optimally.

The styling is very basic - wish I had the time to think about the design & implement something more attractive.

It would be better to use Grunt to compile all of the client-side scripts into one minified file, including usage of [grunt-ngmin](https://github.com/btford/grunt-ngmin) to handle automatic injection of services without manually using the array injection notation or `inject`.

In general, a (mostly) clean separation of the client-side code from most server-side templating is better for development - the usage of Django templates is unnecessary here.

This app was created with minimal knowledge of Django and not great knowledge of Python.