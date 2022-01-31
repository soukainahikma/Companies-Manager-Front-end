<template>
    <div :class="[company.status ? 'active' : 'not_active ', 'company']" :key="company.text">
        <h3> {{ company.company_name }}
            <i @click="$emit('delete-company', company.id)" class="fas fa-times"></i>
        </h3>
        <p>Email: {{ company.email }}</p>
        <p>Address: {{ company.address }}</p>
        <p>Start Date: {{ company.start_date }}</p>
        <p>Fiscal Date: {{ company.fiscal_date }}</p>
        <p>Status: {{ company.status ? 'Active' : 'Disabled' }}</p>
    </div>
</template>

<script>

export default {
    name: "Company",
    props: {
        company: Object
    }
}
</script>

<style scoped>
    .company {
        background: #f4f4f4;
        margin: 5px;
        padding: 10px 20px;
    }
    .active {
        border-left: 5px green solid;
    }

    .not_active {
        border-left: 5px red solid;
    }

    .fas {
        color: red;
        cursor: pointer;
    }

    .company h3 {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

</style>