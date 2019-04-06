'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async index() {
    //koa 给用户响应的
    // ctx.body="用户管理"
    console.log(this);
    //egg 给用户响应的
    this.ctx.body="用户管理";
  }
}

module.exports = AdminController;
