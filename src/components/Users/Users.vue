<template>
    <span style="margin-top: 40px;">
        <div v-for="user in users" :key="user.id">
            <User @delete-user="$emit('delete-user', user.id)" :user="user" />
        </div>
    </span>
</template>

<script>
import User from "./User.vue"

export default {
    name: "Users",
    components: {
        User
    },
    props: {
        users: Array
    },
    emits: ['delete-user']
}
</script>

<style scoped>

</style>