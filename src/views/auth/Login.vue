<template>
  <div class="center">
      <el-card shadow="always">
          <div slot="header">
              <span>Login</span>
          </div>
          <div class="card-body">
                <el-input placeholder="Your email" suffix-icon="el-icon-message" v-model="email" />
                <div style="margin-top: 20px">
                    <el-input placeholder="Your password" v-model="password" show-password></el-input>
                </div>
          </div>
          <div style="margin-top: 20px">
              <el-button type="primary" plain style="width: 100%" @click="login">Log in</el-button>
          </div>
           <el-button type="text" @click="this.$router.push({ name: 'Registration' })">Don't have an account? sign in right now</el-button>
      </el-card>
  </div>
</template>

<script>
import AuthService from "../../services/auth-service"
export default {
    name: 'Login',
    data() { 
        return {
            password: '',
            email: ''
        }
    },
    methods: {
        login() {
            AuthService.login(this.email, this.password).then((user) => {
                alert("вы успешно вошли в систему, у ассаламу алейкум дорогой брат " + user.name)
            })
        }
    }
}
</script>

<style lang="scss">
.center {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}


</style>