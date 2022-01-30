<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Company Name</label>
      <input type="text" v-model="company_name" name="text" placeholder="Add Company Name" />
    </div>
    <div class="form-control">
      <label>Email</label>
      <input type="email" v-model="email" name="email" placeholder="Add Email" />
    </div>
    <div class="form-control">
      <label>Address</label>
      <input type="text" v-model="address" name="address" placeholder="Add Address" />
    </div>
    <div class="form-control form-control-check">
      <label>Start Date</label>
      <Datepicker v-model="start_date"></Datepicker>
    </div>
    <div class="form-control form-control-check">
      <label>Fiscal Date</label>
      <Datepicker v-model="fiscal_date"></Datepicker>
    </div>
    <div class="form-control form-control-check">
      <label>Is it active?</label>
      <input type="checkbox" v-model="status" name="reminder" />
    </div>
    <input type="submit" value="Save Company" class="btn btn-block" />
  </form>
</template>

<script>
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css'

export default {
  name: 'AddCompany',
  components: {
      Datepicker
  },
  data() {
    return {
      company_name: "",
      address: "",
      email: "",
      start_date: null,
      fiscal_date: null,
      status: true
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      if (!this.company_name) {
        alert('Please add a company name')
        return
      }
      const newCompany = {
        company_name: this.company_name,
        address: this.company_name,
        email: this.email,
        start_date: this.start_date,
        fiscal_date: this.fiscal_date,
        status: this.status,
      }
      this.$emit('add-company', newCompany)
      this.text = ''
      this.day = ''
      this.reminder = false
    },
  },
}
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>
