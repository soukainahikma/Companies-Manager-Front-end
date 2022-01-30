<template>
  <div>
    <div class="wrapper">
      <div class="card">
        <CompanyList @show-add-company-trigger="triggerAddCompany" title="Companies Tracker" />
        <div v-if="showAddCompanies">
          <AddCompany @add-company="addCompany"/>
        </div>
        <Companies @delete-company="deleteCompanyGlobal " :companies="companies" />
      </div>
    </div>
  </div>
</template>

<script>
import CompanyList from "../components/CompanyList.vue";
import Companies from "../components/Companies.vue";
import AddCompany from "../components/AddCompany.vue"


export default {
  name: 'Comps',
  components: {
    CompanyList,
    Companies,
    AddCompany,
  },
  data() {
    return {
      showAddCompanies: false,
      companies: []
    }
  },
  methods: {
    deleteCompanyGlobal(id) {
      if (confirm("Are you sure?"))
      {
        console.log("delete the company => ", id);
        this.companies = this.companies.filter((company) => company.id !== id);
      }
    },
    addCompany(company) {
      this.companies = [...this.companies, company];
    },
    triggerAddCompany(){
      this.showAddCompanies = !this.showAddCompanies;
    }
  },
  created() {
    
    this.companies = [
      {
        id: 1,
        company_name: "Company 1",
        address: "Address very long so it looks cool",
        email: "string@string.com",
        start_date: "1/2/2022",
        fiscal_date: "1/2/2022",
        status: true
      },
      {
        id: 2,
        company_name: "Company 2",
        address: "Address very long so it looks cool",
        email: "string@string.com",
        start_date: "1/2/2022",
        fiscal_date: "1/2/2022",
        status: true
      },
      {
        id: 3,
        company_name: "Company 3",
        address: "Address very long so it looks cool",
        email: "string@string.com",
        start_date: "1/2/2022",
        fiscal_date: "1/2/2022",
        status: true
      },
    ];
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.card {
  max-width: 500px;
  margin: auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.company_header {
  display: flex;
  justify-content: space-between;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}

.btn:hover {
  color: rgb(194, 189, 189);
}

.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>