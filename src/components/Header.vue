<template>
    <header>
        <!-- <p>{{ title }}</p> -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/companies">Conpanies</router-link>
                        </li>
                        <li v-if="true" class="nav-item">
                            <router-link class="nav-link" to="/users">Users</router-link>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
    </header>
</template>

<script>
export default {
    name: "Header",
    props: {
        title: String
    }
}
</script>

<style scoped>
header {
    display: flex; 
    justify-content: space-between;
    color: rgb(206, 198, 198);
    background-color: rgb(55, 55, 206);
    align-items: center;
    align-self: center;
    margin-bottom: 40px;
    text-align: center;
    font-size: 30px;
    width: 100%;
}

</style>