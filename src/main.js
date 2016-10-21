/*import Vue from 'vue'
import App from './App'*/
var Vue=require("vue");
var App=require("./App");

var VueRouter=require("vue-router");
Vue.use(VueRouter);
var router=new VueRouter();
// console.log(VueRouter);
var RouterConfig=require("./config");
RouterConfig(router);

// var one=require("./one");
// var two=require("./two");
// console.log(router)


// router.map({
// 	"/onePage/:id":{
// 		name:"one",
// 		component:one
// 	},
// 	"/twoPage":{
// 		component:two
// 	}
// })
// router.redirect({
// 	"*":"/twoPage"
// })
router.start(App,"#adds")
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
