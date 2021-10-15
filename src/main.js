import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import scripts from './scripts';
import api from './api';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
const app = createApp(App);
app.config.globalProperties.$scripts = scripts;
app.config.globalProperties.$api = api;
app.use(ElementPlus);
app
  .use(store)
  .use(router)
  .mount('#app');
