<template>
<div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">G<i class="fas fa-smile-wink"></i>-BLOG <i class="fab fa-vuejs"></i></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link to="/" class="nav-item nav-link active">Home</router-link> <span class="sr-only">(current)</span>
                    <router-link to="/articles" class="nav-item nav-link active">Article</router-link>
                    <!-- <router-link to="/about" class="nav-item nav-link active">About</router-link> -->
                </div>
            </div>
            <Button target="#loginModal" button="signin"/>
            <Button target="#signupModal" button="get started"/>
        </div>
    </nav>
        <ModalLogin/> <ModalSignUp/>
</div>
</template>

<script>

import Button from '@/components/button.vue'
import ModalLogin from '@/components/Header/login.vue'
import ModalSignUp from '@/components/Header/signup.vue'

export default {
    name: 'Navbar',
    components: {
        Button, ModalLogin, ModalSignUp
    }
}
</script>

<style>

</style>


