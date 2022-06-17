import { createApp } from 'vue'
import App from './App.vue'
import './global.css'
import { setLocale, localize } from '@vee-validate/i18n';
import { configure } from 'vee-validate';
import pt_BR from '@vee-validate/i18n/dist/locale/pt_BR.json';

configure({
  generateMessage: localize({
    pt_BR
  }),
});
createApp(App).mount('#app')
