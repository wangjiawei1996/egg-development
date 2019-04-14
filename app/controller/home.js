'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // console.log(this.config.api);
    const list = await this.service.news.getNewsList();
    const user = await this.service.user.getUserInfo();
    await this.ctx.render('home', {
      list,
      user
    }
  }
}

module.exports = HomeController;
