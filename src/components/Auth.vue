<template>
  <div class="auth">
    <h1>LeadHit</h1>
    <div class="form">
      <input
        v-model="siteId"
        type="text">
      <button
        @click="sendClick"
      >Войти</button>
    </div>
  </div>
</template>

<script>
import authService from '../services/auth.service'
export default {
  name: 'AuthComponent',
  data() {
    return {
      siteId: ''
    }
  },
  methods: {
    sendClick() {
      authService.login(this.siteId)
        .then(() => {
          this.$store.commit('setSiteId', this.siteId)
          this.$router.push('/')
          console.log(this.$router);
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  width: 300px;
  margin: auto;
}
.form input {
  height: 25px;
  padding: 0 15px;
  margin-bottom: 5px;
  border-radius: 5px;
  outline: none;
  border: 1px solid gray;
}
.form button {
  height: 35px;
  border-radius: 5px;
  border: 1px solid gray;
  background: rgb(98, 109, 139);
  color: white;
}
.form button:hover {
  background: rgb(144, 152, 175);
}
</style>
