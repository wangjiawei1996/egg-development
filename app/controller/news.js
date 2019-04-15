'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    const username = this.ctx.cookies.get('userinfo', {
      encrypt: true,
    });
    await this.ctx.render('news', {
      username,
    });
  }
}

module.exports = NewsController;
