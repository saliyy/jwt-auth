<template>
  <div>
    <span>You successfuly authorized! </span>{{ userName }}
    <el-button @click="get">test auth middleware</el-button>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {};
  },
  computed: {
    userName() {
      return this.$store.getters.getUserName;
    },
  },
  created() {
    // this.get()
  },
  methods: {
    get() {
      this.$api.get("testJWTmiddleware").then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
