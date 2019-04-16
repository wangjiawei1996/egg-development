'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
  //   // 设置一个值
  //   this.ctx.cookies.set('username', 'jiawei', {
  //     maxAge: 1000 * 3600 * 24,
  //     httpOnly: true,
  //     signed: true,
  //     encrypt: true,
  //   });
  //   // cookie加密以后可以设置成中文
  //   this.ctx.cookies.set('userinfo', '嘉巍', {
  //     maxAge: 1000 * 3600 * 24,
  //     httpOnly: true,
  //     signed: true,
  //     encrypt: true,
  //   });
  //   await this.ctx.render('home');
  // }
  // // 清理cookie
  // async loginOut() {
  //   this.ctx.cookies.set('username', null);
  //   // 路由跳转
  //   this.ctx.redirect('/news');
  // 设置session
    this.ctx.session.username = '张三';
    this.ctx.session.userinfo = {
      name: '李四',
      age: 20,
    };
    await this.ctx.render('home');
  }
}

module.exports = HomeController;
