import route from "../module/route/index.vue" //带子路由
import module from "../module/module.js" //子路由下的模块配置
import vue from "../module/vue/index.vue"
import es6 from "../module/es6/index.vue"
import es5 from "../module/es5/index.vue"
import h5 from "../module/html/index.vue"
import css3 from "../module/css3/index.vue"
import less from "../module/less/index.vue"
import sass from "../module/sass/index.vue"
import components from "../components/index.vue"
import index from "../module/index/index.vue"
import vuex from "../module/vuex/vuex.vue"
import canvas from "../module/canvas/index.vue"
import http from "../module/http/index.vue"
import practice from "../module/practice/index.vue"
import demo from "../module/practice/demo.vue"
import plugin from "../module/plugin/index.vue"
import iview from "../module/iview/index.vue"
import jsdesign from "../module/jsdesign/index.vue"
import skill from "../module/skill/index.vue"

var routes = [
  {
    name: "route",
    // path: "/route/:id",
    path: "/route",
    component: route,
    children: [
      {
        name: "apple",
        path: "apple",
        component: module.apple,
        beforeEnter(to,from,next){  //进入该路由之前，先进路由独享守卫
          console.log("2.再走局部路由独享守卫");
          next();
        }
      },
      {
        name: "orange",
        path: "orange",
        alias: "o",
        component: module.orange
      },
      {
        name: "banana",
        path: "banana/:id",
        component: module.banana,
        meta: {record:"元信息"} //元信息
      },
      {
        name: 'pass',
        path: 'pass/:id',
        component: module.pass,
        props: true
      }
    ]
  },
  {
    path: "/index",
    component: index
  },
  {
    path: "*",  //当访问不存在时，跳到首页
    redirect: "/index"
  },
  {
    path: "/vue",
    component: vue
  },
  {
    path: "/es6",
    component: es6
  },
  {
    path: "/es5",
    component: es5
  },
  {
    path: "/h5",
    component: h5
  },
  {
    path: "/css3",
    component: css3
  },
  {
    path: "/less",
    component: less
  },
  {
    path: "/sass",
    component: sass
  },
  {
    path: "/components",
    component: components
  },
  {
    path: "/vuex",
    component: vuex
  },
  {
    path: "/http",
    component: http
  },
  {
    path: "/canvas",
    component: canvas
  },
  {
    path: "/practice",
    component: practice
  },
  {
    path: "/demo",
    component: demo
  },
  {
    path: "/plugin",
    component: plugin
  },
  {
    path: "/iview",
    component: iview
  },
  {
    path: "/jsdesign",
    component: jsdesign
  },
  {
    path: "/skill",
    component: skill
  },
];

export default routes
