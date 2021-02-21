
# Mashroom Demo Portal Enhancement Plugins

Plugin for [Mashroom Server](https://www.mashroom-server.com), a **Integration Platform for Microfrontends**.

Adds a couple of plugins to demonstrate Mashroom Portal app enhancement and page enhancement plugins.

It adds:

 * A page enhancement plugin that adds scripts and css. It also installs a global "service" that can be used by the test Portal App
 * An app enhancement plugin that adds an *info* property to the appConfig that will be shown by the test Portal App
 * A test Portal App that uses the *info* property added by the app enhancement plugin and the custom service added by
   the page enhancement plugin (on button click)

## Usage

Add the package path (or the parent) to the *pluginPackageFolders* in the Mashroom Server config.

Then add the *Portal App Enhancement Test App* to an arbitrary Mashroom Portal page.

