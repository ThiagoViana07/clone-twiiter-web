<template>
  <Home v-if="user"/>

  <SignUp v-else-if="pathname === '/signup'" @signInUser="signInUser"/>
  <Login @signInUser="signInUser" v-else/>

</template>

<script>
import { defineComponent, ref, computed } from "vue";
import Home from './Home/Home.vue'
import Login from './Login/Login.vue'
import SignUp from './SignUp/SignUp.vue'

export default defineComponent({
 components:{
    Home,
    Login,
    SignUp
  },
  setup(){
    const user = ref(null)

    const pathname = computed(() => window.location.pathname)

    const signInUser = (data) => {
      user.value = data
    }

    return {
      user,
      signInUser,
      pathname
    }
  }
 
})
</script>

<style>

</style>