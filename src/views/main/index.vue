<template>
  <div>
    <navbar />
    {{ userName }}
    <el-button @click="get">123</el-button>
    <router-view/>
  </div>
</template>


<script>
import Navbar from "../Layout/Navbar";
export default {
    name: "Main",
  components: {Navbar},
  data() {
        return {

        }
    },
    computed: {
      userName() {
        return this.$store.getters.getUserName
      },
  },
  created() {
     // this.get()
  },
  methods: {
      get() {
        this.$api.get('api/testJWTmiddleware').then((res) => {
          console.log(res)
        })
      }
  }
}
</script>
