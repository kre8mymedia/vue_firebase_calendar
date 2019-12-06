import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyAZlWiwe3qpictQZG3rcwPxXWGrEXraQWk",
  authDomain: "tmgcoreofficecalendar.firebaseapp.com",
  databaseURL: "https://tmgcoreofficecalendar.firebaseio.com",
  projectId: "tmgcoreofficecalendar",
  storageBucket: "tmgcoreofficecalendar.appspot.com",
  messagingSenderId: "140998933680",
  appId: "1:140998933680:web:f494aefb27f9b6bae4cf75",
  measurementId: "G-4477ZH91DF"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
