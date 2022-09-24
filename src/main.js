import { createApp } from 'vue'
import App from './App.vue'
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
createApp(App).component("vSelect", vSelect).mount('#app')
