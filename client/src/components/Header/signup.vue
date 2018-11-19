<template>
        <!-- Modal -->
    <div class="signup">
        <div class="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Join G<i class="fas fa-smile-wink"></i>-BLOG!</h5>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Full Name</label>
                            <input type="text" class="form-control" aria-describedby="nameHelp" v-model="name" autofocus>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control"  aria-describedby="emailHelp" v-model="email" >
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" v-model="password">
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input">
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" @click.prevent="doSignup" class="btn btn-dark">Submit</button>
                    </form>   
                </div>
                <div class="modal-footer">
                    <small id="emailHelp" class="form-text text-muted">Create an account to personalize your homepage, follow your favorite authors and publications, applaud stories you love, and more.</small>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">close</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'SignUp',
    data(){
        return{
            name: '',
            email: '',
            password: '',
        }
    },
    methods:{
        doSignup (){
            axios({
                url: `${this.$baseUrl}/users/signup`,
                method: 'POST',
                data: {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }
            })
            .then(response =>{
                console.log(response);
            })
            .catch(err =>{
                console.log(err);
            })
        }
    }
}
</script>

<style>

</style>
