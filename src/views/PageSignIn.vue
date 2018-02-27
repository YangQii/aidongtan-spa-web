<template>
  <div class="login-wrap">
    <div class="login-container" id="loginPage">
      <form v-on:submit.prevent="handleLogin">
        <ul>
          <li>
            <input type="text" class="input-login" placeholder="请输入邮箱地址" v-model="user.email" />
          </li>
          <li>
            <input type="password" class="input-login" placeholder="请输入密码" v-model="user.password" />
          </li>
        </ul>
        <div class="rem-container clearfix">
          <div class="ga-checkbox fl">
            <input id="remember_me" type="checkbox" class="ng-pristine ng-valid" checked="" />
            <b></b>
          </div>
        </div>
        <button class="btn-login clearfix">登录</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: '',
        token: '',
        user: {
          mobile: '',
          password: '',
        }
      }
    },
    // mounted() {
    //   this.$store.commit(types.TITLE, 'Login')
    // },
    methods: {
      // login() {
      //   if (this.token) {
      //     this.$store.commit(types.LOGIN, this.token);
      //     let redirect = decodeURIComponent(this.$route.query.redirect || '/');
      //     this.$router.push({
      //       path: redirect
      //     })
      //   }
      // },
      handleLogin() {
        const self = this;
        const url = 'http://39.106.151.4:8080/love-move/userCtrl/login.do';
        this.$http.post(url + '?mobile=' + this.user.mobile + '&loginType=PC' + '&password=' + this.user.password)
          .then(
          function (res) {
            console.log(res);
            if (res.code == '104') {
              alert("账户或密码错误！")
            } else {
              window.sessionStorage['token'] = res.data.token;
              // TODO
              window.location.href = '/#/overview?token=' + res.data.token;
              this.msg = res.data.msg;
            }
          }
        )
      }
    }
  }
</script>

<style scoped>

</style>
