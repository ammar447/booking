<template>
  <div class="home">
  <login/>  
  </div>
</template>

<script>
 import login from '../components/Auth/login.vue'

export default {
  name: "HomeView",
  components: {
    login,
  },
};
</script>
