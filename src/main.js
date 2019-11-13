import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyDItez2B1XwZ9U-G4uaHzdpX6WhjWUjT-0",
  authDomain: "vue-calendar-90337.firebaseapp.com",
  databaseURL: "https://vue-calendar-90337.firebaseio.com",
  projectId: "vue-calendar-90337",
  storageBucket: "vue-calendar-90337.appspot.com",
  messagingSenderId: "582726998955",
  appId: "1:582726998955:web:d862c89ca6ecadda4190ee"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
