<script setup>
import { reactive } from 'vue'
import HeadingVue from '@/components/HeadingVue.vue'
import { toast } from 'vue3-toastify'

const form = reactive({
    email: '',
    password: '',
})

const submitForm = (e) => {
    const passwordPattern = /^[a-zA-Z0-9$#@-_]*$/
    if (passwordPattern.test(form.password)) {
        toast("Login successful", {
            autoClose: 1000,
            type: toast.TYPE.SUCCESS,
            theme: toast.THEME.DARK,
            icon: "🚀",
        });

        // Fetch the information from the database
    } else {
        toast("Ooops... Something wrong happened!", { autoClose: 1000, type: toast.TYPE.ERROR, });
    }
    e.target.reset()
    form.email = ''
    form.password = ''
}


</script>


<template>
    <div>
        <HeadingVue heading="My Account" path="Home . Pages . My Account" />
        <form @submit.prevent="submitForm" class="form-wrapper text-center">
            <div class="">
                <h1>Login</h1>
                <p>Please login using account detail bellow.</p>
            </div>
            <div class="mb-3">
                <input class="form-control" type="email" id="email" v-model="form.email" placeholder="Email" required />
            </div>
            <div class="mb-3">
                <input class="form-control" type="password" id="password" v-model="form.password" placeholder="Password"
                    required />
            </div>
            <div class="mb-3 form-text">
                <a href="#" class="text-decoration-none">Forgot your password?</a>
            </div>
            <div class="mb-3 ">
                <button @keyup.enter="submitForm" class="btn btn-primary">Sign In</button> <br>
                <p class="form-text">Don’t have an Account?
                    <a href="#" class="text-decoration-none">Create account</a>
                </p>
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
