<template>
    <span class="company_header">
      <h1> {{ title }} </h1>
      <Button @show-add-company-trigger="$emit('show-add-company-trigger')" color="green" text="Add Company" />
    </span>
</template>

<script>
import Button from "./Button.vue"

export default {
    name: "CompanyList",
    components: {
      Button
    },
    props: {
      title: String
    }
}
</script>