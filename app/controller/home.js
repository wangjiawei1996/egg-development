'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('home', {
      csrf: this.ctx.csrf,
    });
  }
  async add() {
    console.log(this.ctx.request.body);
    this.ctx.body = this.ctx.request.body;
  }
}

module.exports = HomeController;
