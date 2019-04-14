'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    // this.ctx.body = "这是新闻111";
    var msg='ejs';
    var list = await this.service.news.getNewsList();
    await this.ctx.render('news', {
      msg,
      list
    });
  }
  async content() {
    //egg,js获取get传值
    var query = this.ctx.query;
    console.log(query)
    this.ctx.body = "新闻详情页";
  }
  async newslist() {
    var params = this.ctx.params;
    console.log(params);
    this.ctx.body="新闻列表"
  }
}

module.exports = NewsController;
