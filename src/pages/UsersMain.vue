<template>
  <div>
    <div class="wrapper">
      <div class="card">
        <UserList @show-add-user-trigger="triggerAddUser" title="Users Tracker" />
        <div v-if="showAddUsers">
          <AddUser @add-user="addUser"/>
          <p style="text-align: center; color: red;"> {{this.err_msg}} </p>
        </div>
        <Users @delete-user="deleteUserGlobal " :users="usersArr" />
      </div>
    </div>
  </div>
</template>

<script>
import UserList from "../components/Users/UserList.vue";
import Users from "../components/Users/Users.vue";
import AddUser from "../components/Users/AddUser.vue"


export default {
  name: 'UsersMain',
  components: {
    UserList,
    Users,
    AddUser,
  },
  data() {
    return {
      showAddUsers: false,
      err_msg: '',
      usersArr: []
    }
  },
  methods: {
    deleteUserGlobal(id) {
      if (confirm("Are you sure?"))
      {
        console.log("delete the user => ", id);
        this.usersArr = this.usersArr.filter((user) => user.id !== id);
      }
    },
    async addUser(user) {
      // this.users = [...this.users, company];
      await fetch(`http://localhost:3000/users/`,{
          method: 'POST', 
          mode: 'cors',
          headers: {
          'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        })
     .then(res => res.json())
     .then(user => {
       if (user.statusCode)
        this.err_msg = user.message;
       else
        this.usersArr = [...this.usersArr, user]
     }).catch(err => console.log(err))
    },
    triggerAddUser(){
      this.showAddUsers = !this.showAddUsers;
    }
  },
  async created() {
    // document.cookie.split('=')[1];
    console.log(`http://localhost:3000/users/${document.cookie.split('=')[1]}`)
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
    await fetch(`http://localhost:3000/users/`)
     .then(res => res.json())
     .then(users => {
       console.log(users)
       this.usersArr = [...users]
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