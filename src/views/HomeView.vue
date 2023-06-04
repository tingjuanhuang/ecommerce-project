<template>
  <NavBar></NavBar>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <form-box v-slot="{ errors, values, validate }" @submit="onSubmit" >
      {{ errors }} {{ values }}

      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <field-box id="email" name="email" type="email" class="form-control" :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="email|required" v-model="user.email"></field-box>
        <error-message-box name="email" class="invalid-feedback"></error-message-box>
      </div>
      <button class="btn me-2 btn-outline-primary" type="button" @click="validate">驗證</button>
      <button class="btn btn-primary" type="submit">Submit</button>
    </form-box> -->
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  },
  // data () {
  //   return {
  //     user: {}
  //   }
  // },
  // methods: {
  //   onSubmit () {
  //     console.log(this.user)
  //   }
  // },
  created () {
    console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH)
  }
}
</script>
