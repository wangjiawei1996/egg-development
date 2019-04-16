'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    const username = this.ctx.session.username;
    const userinfo = this.ctx.session.userinfo;
    // this.ctx.session.maxAge = 5000;
    console.log(userinfo);
    await this.ctx.render('news', {
      username,
    });
  }
}

module.exports = NewsController;
