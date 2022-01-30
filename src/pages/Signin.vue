<template>
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div>
                <div>
                    <h3>Sign-in</h3>
                    <hr/>
                </div>
                <form @submit="onSignIn">
                    <div class="form-group">
                        <label>Email</label>
                        <input type="text" v-model="email" name="email" id="email" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" v-model="password" name="password" id="password" class="form-control"/>
                    </div>
                    <div class="my-3">
                        <button type="submit" class="btn btn-primary">
                            Sign-in
                        </button>
                        <p style="text-align: center; color: red">{{ err_msg }}</p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'Signin',
    data() {
        return {
        email: '',
        password: '',
        err_msg: ''
        }
    },
    methods: {
        async onSignIn(e) {
            e.preventDefault();
            const loginObject = {
                email: this.email,
                password: this.password
            }
            await fetch('http://localhost:3000/users/login', {
                method: 'POST', 
                mode: 'cors',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginObject)
            })
            .then(res => res.json().then(data => {
                if (data.statusCode)
                    this.err_msg = data.message;
                console.log(data)
                document.cookie = `user_id=${data.id}`;
                this.$router.push('/companies')
            }))
            .catch(err => console.log(err))
        }
    }
}
</script>
