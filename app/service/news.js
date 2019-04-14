'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList() {
    console.log('--------');
    console.log(this.config.api);
    const list = [ '111', '2222', '33333', '55555' ];
    const user = this.service.user.getUserInfo();
    console.log(user);
    return list;
  }
}

module.exports = NewsService;
