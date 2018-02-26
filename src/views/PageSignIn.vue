<template>
  <div></div>
</template>

<script>
  export default {
    data() {
      return {
        msg: '',
        token: '',
      }
    },
    mounted() {
      this.$store.commit(types.TITLE, 'Login')
    },
    methods: {
      login() {
        if (this.token) {
          this.$store.commit(types.LOGIN, this.token);
          let redirect = decodeURIComponent(this.$route.query.redirect || '/');
          this.$router.push({
            path: redirect
          })
        }
      }
    }
  }
</script>

<style scoped>

</style>
