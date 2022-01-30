<template>
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div>
                <div>
                    <h3>Signup</h3>
                    <hr/>
                </div>
                <form @submit="onSubmit">
                    <div class="form-group">
                        <label>Email</label>
                        <input type="text" v-model="email" name="email" id="email" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" v-model="password" name="password" id="password" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" v-model="name" name="name" id="name" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>Role</label>
                        <select name="role" v-model="role" id="role" class="form-control">
                            <option value="manager">Manager</option>
                            <option value="consultant">Consultant</option>
                        </select>
                    </div>
                    <div class="my-3">
                        <button type="submit" class="btn btn-primary">
                            Signup
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'Signup',
    data() {
        return {
            email: '',
            password: '',
            name: '',
            role: ''
        }
    },
    methods: {
        async onSubmit(e) {
            e.preventDefault();
            const newUser = {
                email: this.email,
                password: this.password,
                name: this.name,
                role: this.role,
            }
            await fetch('http://localhost:3000/users/', {
                method: 'POST', 
                mode: 'cors',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
            .then(response => response.json().then(data => {
                console.log(data)
                document.cookie = `user_id=${data.id}`;
                this.$router.push('/companies')   
            }))
            .catch(err => console.log(err));
        }
    }
}
</script>
