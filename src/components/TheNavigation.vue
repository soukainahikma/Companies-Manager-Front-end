<template>
	<nav class=" wrapper navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item">
						<router-link class="nav-link" to="/">Home</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/login">Sign-in</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/signup">Sign-up</router-link>
					</li>
					<li class="nav-item">
                            <router-link class="nav-link" to="/companies">Conpanies</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/users">Users</router-link>
                        </li>
				</ul>
			</div>
		</div>
	</nav>
</template>
<script>
 export default {
	name: 'TheNavigation',
	methods: {
		async isAdmin() {
			if (document.cookie.split('=')[1])
				await fetch(`http://localhost:3000/users/${document.cookie.split('=')[1]}`)
				.then(response =>{
				return response.json()})
				.then(data => {
					if (data.statusCode === 400)
					{
						this.$router.push('/login');
						return false;
					}
					if (data.role !== "admin")
						return (false);
					else
						return (true);
				});
			else
				return (false);
		},
		async isLoggedIn() {
			if (document.cookie.split('=')[1])
				await fetch(`http://localhost:3000/users/${document.cookie.split('=')[1]}`)
				.then(response =>{
				return response.json()})
				.then(data => {
					console.log(data)
					if (data.statusCode === 400)
					{
						this.$router.push('/login');
						return false;
					}
						return (true);
				});
			else
				return (false);
		}
	},
 }
</script>

<style scoped>
.wrapper {
	margin-bottom: 40px;
}
</style>
