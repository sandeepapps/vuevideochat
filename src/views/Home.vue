<template>
  <div class="home">
    <img alt="App logo" src="../assets/logo.png">
    <signupform></signupform>
  </div>
</template>

<script>
// @ is an alias to /src
import signupform from '@/components/SignUpForm.vue'

export default {
  name: 'home',
  components: {
    signupform
  }
}
</script>

<style lang="scss">
  .home{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .join {
    width: 100%;
    max-width: 400px;
  }
</style>
