<template>
	<div class="sign-up">
		<p>Create a new account</p>
		<form action="">
			<input type="text" name="" v-model="email" placeholder="Email">
			<input type="password" name="" v-model="password" placeholder="Password">
			<button type="submit" v-on:click="signUp">Sign Up</button>
			<span>or go back to
				<router-link to="/login">login</router-link>
			</span>
		</form>
		
	</div>
</template>

<script>
/* eslint-disable */
import firebase from "firebase";
/* eslint-enable */

export default {
  name: 'signUp',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          () => this.$router.replace('hello'),
          err => alert('Oops. ' + err.message)
        )
    }
  }
}
</script>

<style scoped>
.signUp {
  margin-top: 40px;
}

input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}

button {
  margin-top: 10px;
  width: 10%;
  cursor: pointer;
}

span {
  display: block;
  margin-top: 20px;
  font-size: 13px;
}
</style>
