<template>
  <div>
    <div class="wrapper">
      <div class="card">
        <CompanyList @show-add-company-trigger="triggerAddCompany" title="Companies Tracker" />
        <div v-if="showAddCompanies">
          <AddCompany @add-company="addCompany"/>
          <p style="text-align: center; color: red;"> {{this.err_msg}} </p>
        </div>
        <Companies @delete-company="deleteCompanyGlobal " :companies="companies" />
      </div>
    </div>
  </div>
</template>

<script>
import CompanyList from "../components/Companies/CompanyList.vue";
import Companies from "../components/Companies/Companies.vue";
import AddCompany from "../components/Companies/AddCompany.vue"


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
      err_msg: '',
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
    async addCompany(company) {
      // this.companies = [...this.companies, company];
      await fetch(`http://localhost:3000/users/${document.cookie.split('=')[1]}/companies`,{
          method: 'POST', 
          mode: 'cors',
          headers: {
          'Content-Type': 'application/json'
          },
          body: JSON.stringify(company)
        })
     .then(res => res.json())
     .then(comps => {
       console.log(comps)
       if (comps.statusCode)
        this.err_msg = comps.message;
       else
        this.companies = [...this.companies, comps]
     }).catch(err => console.log(err))
    },
    triggerAddCompany(){
      this.showAddCompanies = !this.showAddCompanies;
    }
  },
  async created() {
    // document.cookie.split('=')[1];
    if (document.cookie.split('=')[1])
      await fetch(`http://localhost:3000/users/${document.cookie.split('=')[1]}`,  { 
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
          }
        })
        .then(response => response.text()
          .then(text => {
            let data = text === "" ? {} : JSON.parse(text);
            if (data.statusCode === 400)
            {
              this.$router.push('/login');
              return ;
            }
          })
        );
    else
    {
      this.$router.push('/login');
      return ;
    }
    await fetch(`http://localhost:3000/users/${document.cookie.split('=')[1]}/companies`)
     .then(res => res.json())
     .then(comps => {
       this.companies = [...comps]
     }).catch(err => console.log(err))
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
  margin-bottom: 20px;
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