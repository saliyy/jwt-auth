<template>
  <div class="center">
    <el-card shadow="always">
      <div slot="header">
        <span>Registration</span>
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
        <el-input
          placeholder="Your name"
          clearable
          style="margin-top: 20px"
          v-model="name"
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
        <el-button type="primary" plain style="width: 100%" @click="signUp"
          >Go!</el-button
        >
      </div>
      <el-button type="text" @click="$router.push({ name: 'login' })"
        >Have account?</el-button
      >
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Registration",
  data() {
    return {
      password: "",
      email: "",
      name: "",
      errors: [],
    };
  },
  methods: {
    signUp() {
      this.$store
        .dispatch("registration", {
          email: this.email,
          password: this.password,
          name: this.name,
        })
        .then((res) => {
          this.$router.push({ path: "/" });
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
