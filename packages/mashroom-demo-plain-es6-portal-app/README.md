
# Mashroom Demo Plain ES6 Portal App

Plugin for [Mashroom Server](https://www.mashroom-server.com), a **Integration Platform for Microfrontends**.

Adds a demo portal app (SPA) based on plain ES6 (modules) to the _Mashroom Portal_.
This requires Mashroom >= 2.3.0 to work.

**NOTE**: This approach is not very efficient because the browser has to load a lot of small files which aren't minified.
For a real world App you should use a bundler like webpack or rollup.

## Usage

Add the package path (or the parent) to the *pluginPackageFolders* in the Mashroom Server config.

