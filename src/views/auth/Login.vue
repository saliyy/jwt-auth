<template>
  <div class="center">
    <el-card shadow="always">
      <div slot="header">
        <span>Login</span>
      </div>
      <div v-if="errors.length">
        <div v-for="(error, i) in errors" :key="i">
          <el-alert
            style="margin-bottom: 10px"
            :title="error"
            type="error"
            :closable="false"
          />
        </div>
      </div>
      <div class="card-body">
        <el-input
          placeholder="Your email"
          suffix-icon="el-icon-message"
          v-model="email"
        />
        <div style="margin-top: 20px">
          <el-input
            placeholder="Your password"
            v-model="password"
            show-password
          ></el-input>
        </div>
      </div>
      <div style="margin-top: 20px">
        <el-button type="primary" plain style="width: 100%" @click="login"
          >Log in</el-button
        >
      </div>
      <el-button type="text" @click="$router.push({ name: 'registration' })"
        >Don't have an account? sign in right now</el-button
      >
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      password: "",
      email: "",
      errors: [],
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", { email: this.email, password: this.password })
        .then((res) => {
          this.$router.push("/");
        });
    },
  },
};
</script>

<style lang="scss">
.center {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
