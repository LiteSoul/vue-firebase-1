<template>
	<div class="login">
		<h3>Sign In</h3>
		<input type="text" name="" v-model="email" placeholder="Email">
		<input type="password" name="" v-model="password" placeholder="Password">
		<button v-on:click="signIn">Connect</button>
		<p>Don't have an account?
			<router-link to="/sign-up">Create one</router-link>
		</p>
	</div>
</template>

<script>
/* eslint-disable */
import firebase from "firebase";
/* eslint-enable */
export default {
  name: 'login',
  data: function() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    // signIn: function(){
    // 	firebase.auth().signInWithEmailAndPassword(email, password)
    // 		.catch(function(error) {
    // 			// Handle Errors here.
    // 			var errorCode = error.code;
    // 			var errorMessage = error.message;
    // 			if (errorCode === 'auth/wrong-password') {
    // 				alert('Wrong password.');
    // 			} else {
    // 				alert(errorMessage);
    // 			}
    // 			console.log(error);
    //		});
    // }
    signIn: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => alert('You are now connected' + user),
          err => alert('Oops. ' + err.message)
        )
    }
  }
}
</script>

<style scoped>
.login {
  margin-top: 40px;
}

input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}

button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}

p {
  margin-top: 40px;
  font-size: 13px;
}

p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
