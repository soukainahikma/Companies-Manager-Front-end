<template>
    <div :class="['active', 'company']" :key="user.id">
        <h3> {{ user.name }}
            <i  class="fas fa-times"></i>
        </h3>
        <p>Email: {{ user.email }}</p>
        <p>role: {{ company.address }}</p>
    </div>
</template>

<script>

export default {
    name: "User",
    props: {
        user: Object
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