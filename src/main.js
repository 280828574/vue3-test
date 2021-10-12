import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import scripts from './scripts';
const app = createApp(App);
app.config.globalProperties.$scripts = scripts;
app
  .use(store)
  .use(router)
  .mount('#app');
