<script setup>
import { reactive } from 'vue';
import HeadingVue from '@/components/HeadingVue.vue';

const form = reactive({
    email: '',
    password: '',
})

const submitForm = (e) => {
    const passwordPattern  = /^[a-zA-Z0-9$#@-_]*$/
    if (passwordPattern.test(form.password)) {
        alert("Login successful")
        // Fetch the information from the database
    } else {
        alert("Incorrect password")
    }
    e.target.reset()
    form.email = ''
    form.password = ''
}


</script>


<template>
    <div>
        <HeadingVue heading="My Account" path="Home . Pages . My Account" />
        <form @submit.prevent="submitForm">
            <h1>Login</h1>
            <p>Please login using account detail bellow.</p>
            <div class="form-control">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="form.email" placeholder="Email" required />
            </div>
            <div class="form-control">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="form.password" placeholder="Password" required />
            </div>
            <div class="form-control">
                <p>Forgot your password?</p>
            </div>
            <div class="form-control">
                <button @keyup.enter="submitForm">Sign In</button>
                <p>Don’t have an Account? Create account</p>
            </div>
        </form>
    </div>
</template>


<style lang="scss" scoped>
form {
    width: 544px;
    padding: 50px;
    margin: 20px auto;
    box-shadow: 0 8px 16px $darker-violet;
}
</style>
