import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';
import config from '../config';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false
var apiKey = config.apiKey;

firebase.initializeApp({
  apiKey: apiKey,
  authDomain: "vue-calendar-26eb9.firebaseapp.com",
  databaseURL: "https://vue-calendar-26eb9.firebaseio.com",
  projectId: "vue-calendar-26eb9",
  storageBucket: "vue-calendar-26eb9.appspot.com",
  messagingSenderId: "724146296664",
  appId: "1:724146296664:web:d0f91593251bf18006b72d"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
