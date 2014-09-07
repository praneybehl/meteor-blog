Package.describe({
  summary: " \* Easy blog package *\ ",
  version: "0.0.1",
  git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1');
  api.addFiles('lib.js');
  api.addFiles('index.js');
  api.addFiles('index.html');
  api.use('aldeed:simple-schema');
  api.use('aldeed:collection2');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.addFiles('lib.js');
  api.addFiles('index.js');
  api.addFiles('index.html');
  api.use('aldeed:simple-schema');
  api.use('aldeed:collection2');
});
