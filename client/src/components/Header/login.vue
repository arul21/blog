<template>
        <!-- Modal -->
    <div class="login">
        <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Welcome back!</h5>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control"  aria-describedby="emailHelp" v-model="email" required autofocus >
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" v-model="password">
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" >
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-dark" @click.prevent="doLogin" >submit</button>
                        <!-- <Button @click.prevent="doLogin" button="signin"/> -->
                    </form>   
                </div>
                <div class="modal-footer">
                    <small id="emailHelp" class="form-text text-muted">Sign in to access your personalized homepage, follow authors and topics you love, and clap for stories that matter to you.</small>
                    <Button data-dismiss="modal" button="close"/>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
import Button from '@/components/button.vue'

export default {
    components: {
        Button
    },
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
        }   
    },
    methods: {
        doLogin() {
            console.log(`.......`);
            
            axios({
                url:`${this.$baseUrl}/users/signin`,
                method: 'POST',
                data: {
                    email: this.email,
                    password: this.password
                }
            })
            .then(response =>{
                let token = response.data.token
                localStorage.setItem('token', token)
                // window.location = '/'
                this.email = ''
                this.password = ''
                // this.$emit('login', data)
            })
        }
    }
}
</script>

<style>

</style>
