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
					<li v-if="true" class="nav-item">
                            <router-link class="nav-link" to="/companies">Conpanies</router-link>
                        </li>
                        <li v-if="true" class="nav-item">
                            <router-link class="nav-link" to="/users">Users</router-link>
                        </li>
				</ul>
			</div>
		</div>
	</nav>
</template>
<script>
 export default {}
</script>

<style scoped>
.wrapper {
	margin-bottom: 40px;
}
</style>
