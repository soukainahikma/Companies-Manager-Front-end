<template>
    <span class="user_header">
      <h1> {{ title }} </h1>
      <Button @show-add-user-trigger="$emit('show-add-user-trigger')" color="green" text="Add User" />
    </span>
</template>

<script>
import Button from "./Button.vue"

export default {
    name: "UserList",
    components: {
      Button
    },
    props: {
      title: String
    }
}
</script>