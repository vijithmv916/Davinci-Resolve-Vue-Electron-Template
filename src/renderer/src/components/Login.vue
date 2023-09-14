<template>
  <div max-w-md mx-a my-a border="2px solid slate-7" text-center font-sans rounded-lg mt-40>
    <h1>Login</h1>
    <div flex="1 col" m3 mr-6 justify-center>
      <input type="text" v-model="username"
        class="w-full h8 pl2 b-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 "
        placeholder="Username">
      <input type="password" v-model="password" mt4
        class="w-full h8 pl2 b-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 "
        placeholder="Password">
      <button w32 h12 rounded-md text-lg font-bold mt-5 @click.prevent="login">Login</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')

const login = () => {
  console.log('login', username.value, password.value)
}
</script>