<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Name</label>
      <input type="text" v-model="name" name="text" placeholder="Name" />
    </div>
    <div class="form-control">
      <label>Email</label>
      <input type="email" v-model="email" name="email" placeholder="Email" />
    </div>
    <div class="form-control">
      <label>Password</label>
      <input type="password" v-model="password" name="password" placeholder="Password" />
    </div>
    <div class="form-group">
      <label>Role</label>
      <select name="role" v-model="role" id="role" class="form-control">
          <option value="manager">Manager</option>
          <option value="consultant">Consultant</option>
      </select>
    </div>
    <input type="submit" value="Save User" class="btn btn-block" />
  </form>
</template>

<script>

export default {
  name: 'AddUser',
  data() {
    return {
      id: '',
      name: '',
      email: '',
      password: '',
      role: ''
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      if (!this.name) {
        alert('Please add a user name')
        return
      }
      const newUser = {
        id: -1,
        name: this.name,
        email: this.email,
        password: this.password,
        role: this.role
      }
      this.$emit('add-user', newUser)
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
