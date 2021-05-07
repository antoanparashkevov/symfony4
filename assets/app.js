/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
import './bootstrap';

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

import Vue from 'vue';

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// import VueRouter from 'vue-router';
import Form from './Form.vue';
// Vue.use(VueRouter);
// export default new VueRouter({
//     mode:"history",
//     routers:[
//         {
//             path:"/",
//             component:example
//         }
//     ]
// })

new Vue({
// components:{App}
    render: h => h(Form)
}).$mount("#app");

// start the Stimulus application


// import { VueLoaderPlugin } from 'vue-loader';

