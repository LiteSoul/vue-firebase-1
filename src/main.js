// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import fbconfig from './fbconfig.js'

Vue.config.productionTip = false

// Initialize Firebase
firebase.initializeApp(fbconfig)

firebase.auth().onAuthStateChanged(function (user) {
	if (user) {
		// User is signed in.
		new Vue({
			el: '#app',
			template: '<App/>',
			components: { App },
			router
		})
	} else {
		// No user is signed in.
		new Vue({
			el: '#app',
			template: '<App/>',
			components: { App },
			router
		})
	}
})
