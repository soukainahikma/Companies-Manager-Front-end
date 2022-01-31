<template>
    <span style="margin-top: 40px;">
        <div v-for="company in companies" :key="company.id">
            <Company @delete-company="$emit('delete-company', company.id)" :company="company" />
        </div>
    </span>
</template>

<script>
import Company from "./Company.vue"

export default {
    name: "Companies",
    components: {
        Company
    },
    props: {
        companies: Array
    },
    emits: ['delete-company']
}
</script>

<style scoped>

</style>