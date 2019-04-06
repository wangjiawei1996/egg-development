'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '欢egg';
  }
  async news() {
    const { ctx } = this;
    ctx.body = '你好news';
  }
}

module.exports = HomeController;
