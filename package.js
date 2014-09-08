Package.describe({
  summary: " \* Easy blog package *\ ",
  version: "0.0.1",
  git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
  api.use([
    'templating'
    ],'client');
  api.use([
    'aldeed:simple-schema@0.7.0',
    'aldeed:collection2@0.4.6',
    'aldeed:autoform@0.17.1',
    'iron:router@0.9.3'
    ], ['client', 'server']); 
  
  api.versionsFrom('METEOR@0.9.1');
  
  api.addFiles([
    'lib.js',
    'client/routes.js'
  ]);
  api.addFiles([
    'client/form.html',
    'client/form.js',
    'client/show.html',
    'client/show.js',
    'client/index.html',
    'client/index.js',
    'client/routes.js'
    ], 'client' );
  api.addFiles([
    'server/server.js',
    ], 'server' );

  api.export('Posts');
  api.export('BlogSettings');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.addFiles('lib.js');
  api.use('aldeed:simple-schema');
  api.use('aldeed:collection2');
});
