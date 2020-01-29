import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "./components/HelloWorld";
import Other from "./components/Other";

import App from "./App.vue";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: HelloWorld
    },
    {
      path: "/other",
      name: "Other",
      component: Other
    }
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
