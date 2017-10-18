<template>
	<div class="login">
		<h3>Sign In</h3>
		<input type="text" name="" id="" placeholder="Email">
		<input type="password" name="" id="" placeholder="Password">
		<button>Connect</button>
		<p>Don't have an account? Create one</p>
	</div>
</template>

<script>
export default {
	name: 'login',
	data () {
		return {}
	},
	methods: {}
}
</script>

<style scoped>
.login {
	margin-top: 40px
}

input {
	margin: 10px 0;
	width: 20%;
	padding: 15px
}

button {
	margin-top: 20px;
	width: 10%;
	cursor: pointer;
}

p {
	margin-top: 40px;
	font-size: 13px
}

p a {
	text-decoration: underline;
	cursor: pointer;
}
</style>
