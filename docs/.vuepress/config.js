/*
 * @Author: KokoTa
 * @Date: 2023-10-09 17:54:55
 * @LastEditTime: 2024-03-28 15:10:30
 * @LastEditors: KokoTa
 * @Description:
 */
module.exports = {
  base: '/blog/',
  title: "KokoTa's Blog",
  description: 'Just playing around',
  themeConfig: {
    lastUpdated: 'Last Updated',
    sidebar: [
      {
        title: '前端知识点汇总',
        path: '/front/',
        children: [
          '/front/HTML',
          '/front/CSS',
          '/front/JavaScript',
          '/front/盒模型与BFC与布局',
          '/front/事件与类型',
          '/front/原型',
          '/front/类与继承',
          '/front/HTTP',
          '/front/HTTPS',
          '/front/通信与安全',
          '/front/渲染与运行与性能与监控',
          '/front/Cookie与Session与Token',
          '/front/跨域',
          '/front/移动端适配',
          '/front/JS精度问题',
          '/front/服务端踩坑日记',
          '/front/微信开发',
          '/front/JS的this',
          '/front/缓存',
          '/front/MVVM',
          '/front/直播',
          '/front/内网穿透',
          '/front/杂项',
          '/front/Vue2基础',
          '/front/Vue2原理',
          '/front/Vue3相关',
          '/front/React基础',
          '/front/React原理',
          '/front/ReactHook',
          '/front/Webpack与Babel',
          '/front/跨端开发',
          '/front/微服务',
          '/front/项目设计',
          '/front/算法相关',
          '/front/前端问题汇总',
          '/front/掘金文章',
        ]
      },
      {
        title: '前端其他知识点汇总',
        path: '/question/',
        children: [
          {
            title: 'html',
            collapsable: true,
            children: ['/question/html/tag', '/question/html/browser']
          },
          {
            title: 'css',
            collapsable: true,
            children: [
              '/question/css/attribute',
              '/question/css/unit',
              '/question/css/layout',
              '/question/css/other'
            ]
          },
          {
            title: 'javascript',
            collapsable: true,
            children: [
              '/question/js/api',
              '/question/js/es6',
              '/question/js/node',
              '/question/js/webpack',
              '/question/js/other'
            ]
          },
          {
            title: 'net',
            collapsable: true,
            children: [
              '/question/net/http',
              '/question/net/tcp',
              '/question/net/other'
            ]
          },
          '/question/vue/',
          '/question/mongodb/',
          '/question/weixin/',
          '/question/other',
          '/question/interview'
        ]
      }
    ]
  }
}
