var defaults = require("./wdio-bstack.conf.js");
var _ = require("lodash");

var overrides = {
  specs: ["./test/specs/doSearch.ts"],

  capabilities: [
    {
      maxInstances: 1,
      device: "Samsung Galaxy S22",
      os_version: "12.0",
      app: process.env.BROWSERSTACK_ANDROID_APP_ID || 'My_Sky_App_Android',
      autoGrantPermissions: true,
      platformName: "Android",
    },
  ],
};

const tmpConfig = _.defaultsDeep(overrides, defaults.config);

tmpConfig.capabilities.forEach((caps) => {
  for (const i in tmpConfig.commonCapabilities)
    caps[i] = caps[i] || tmpConfig.commonCapabilities[i];
});

exports.config = tmpConfig;
