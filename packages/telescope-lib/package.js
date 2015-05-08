Package.describe({
  name: 'telescope:lib',
  summary: 'Telescope libraries.',
  version: '0.3.1'
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);
  
  var packages = [
    'standard-app-packages',
    'service-configuration',
    'accounts-ui',
    'accounts-base',
    'accounts-password',
    'accounts-twitter',
    'reactive-var',
    'http',
    'email',
    'aldeed:simple-schema@1.3.2',
    'aldeed:collection2@2.3.3',
    'aldeed:autoform@5.1.2',
    'tap:i18n@1.4.1',
    'fourseven:scss@2.1.1',
    'iron:router@1.0.5',
    // 'meteorhacks:flow-router@1.5.0',
    // 'meteorhacks:flow-layout@1.1.1',
    'matb33:collection-hooks@0.7.11',
    'chuangbo:marked@0.3.5',
    'meteorhacks:fast-render@2.3.2',
    'meteorhacks:subs-manager@1.3.0',
    'percolatestudio:synced-cron@1.1.0',
    'useraccounts:unstyled@1.8.1',
    'manuelschoebel:ms-seo@0.4.1',
    'aramk:tinycolor@1.1.0_1',
    'momentjs:moment@2.10.3',
    'sacha:spin@0.2.4',
    'aslagle:reactive-table@0.7.3',
    'bengott:avatar@0.7.6',
    'fortawesome:fontawesome@4.3.0',
    'ccan:cssreset@1.0.0',
    'djedi:sanitize-html@1.6.1',
    'dburles:collection-helpers@1.0.3',
    'jparker:gravatar@0.3.1'
  ];

  api.use(packages);

  api.imply(packages);

  api.addFiles([
    'lib/core.js',
    'lib/utils.js',
    'lib/callbacks.js',
    'lib/collections.js',
    'lib/modules.js',
    'lib/config.js',
    'lib/deep.js',
    'lib/deep_extend.js',
    'lib/autolink.js',
    'lib/themes.js',
    'lib/menus.js',
    'lib/base.js',
    'lib/colors.js',
    'lib/icons.js'
  ], ['client', 'server']);

  api.addFiles(['lib/client/jquery.exists.js'], ['client']);

  api.export([
    'Telescope',
    '_',

    'getTemplate',
    'templates',

    'themeSettings',

    'getVotePower'
  ]);

});