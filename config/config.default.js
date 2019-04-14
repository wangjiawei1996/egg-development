/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1554483055026_1852';

  // add your middleware config here
  config.middleware = [ 'auth' ];
  //配置模板引擎
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };
  config.api = "www.baidu.com/api";
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
