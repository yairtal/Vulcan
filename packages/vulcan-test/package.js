Package.describe({
  name: 'vulcan:test',
  summary: 'Vulcan test helpers',
  version: '1.14.0',
  git: 'https://github.com/VulcanJS/Vulcan.git'
});

Package.onUse(function (api) {

  api.versionsFrom('1.6.1');

  api.use([
    'vulcan:core@=1.14.0',
    'vulcan:lib@=1.14.0',
  ]);

  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');

});
