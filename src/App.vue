<template>
<TheNavigation/>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div>
					<router-view></router-view>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue'
export default {
	name: 'App',
	components: {
		TheNavigation
	}

	//"serve": "export NODE_OPTIONS=--openssl-legacy-provider;vue-cli-service serve",

}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* text-align: center; */
	color: #2c3e50;
	/* margin-top: 60px; */
}
</style>
