<template>
	<div class="sign-up">
		<p>Create a new account</p>
		<input type="text" name="" v-model="email" placeholder="Email">
		<input type="password" name="" v-model="password" placeholder="Password">
		<button type="submit" v-on:click="signUp">Sign Up</button>
		<span>or go back to
			<router-link to="/login">login</router-link>
		</span>
	</div>
</template>

<script>
export default {
  name: "signUp",
  data() {
    return {};
  },
  methods: {
    // signUp: function(){
    // 	firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
    // 		.catch(function(error) {
    // 			// Handle Errors here.
    // 			var errorCode = error.code;
    // 			var errorMessage = error.message;
    // 			if (errorCode == 'auth/weak-password') {
    // 				alert('The password is too weak.');
    // 			} else {
    // 				alert(errorMessage);
    // 			}
    // 			console.log(error);
    // 		});
    // 		.then??
    // }
    signUp: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          function(user) {
            alert("Your account has been created!");
          },
          function(err) {
            alert("Oopsy. " + err.message);
          }
        );
    }
  }
};
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
