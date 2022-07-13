var defaults = require("./wdio-bstack.conf.js");
var _ = require("lodash");

var overrides = {
  specs: [
    "./test/specs/doSearch.ts",
  ],

  capabilities: [
    {
      maxInstances: 2,
      device: "Samsung Galaxy A51",
      os_version: "10.0",
      app: "My_Sky_App_iOS",
      autoGrantPermissions: true,
      platformName: "Android",
    },
    {
      maxInstances: 2,
      device: "iPhone 12 Pro",
      platformName: "iOS",
      os_version: "14",
      gpsEnabled: "true",
      automationName: "XCUITest",
      app: process.env.BROWSERSTACK_ANDROID_APP_ID || 'My_Sky_App_Android',
    },
  ],
};

const tmpConfig = _.defaultsDeep(overrides, defaults.config);

tmpConfig.capabilities.forEach((caps) => {
  for (const i in tmpConfig.commonCapabilities)
    caps[i] = caps[i] || tmpConfig.commonCapabilities[i];
});

exports.config = tmpConfig;
