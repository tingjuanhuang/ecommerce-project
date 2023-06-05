<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
          <a class="navbar-brand" href="#">範例作品</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#/dashboard/products">產品</a>
                <a class="nav-link" href="#">訂單</a>
                <a class="nav-link" href="#">優惠券</a>
                <a class="nav-link" href="#" @click.prevent="logout">登出</a>
            </div>
          </div>
      </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_API}logout`
      this.$http.post(api, this.user).then((res) => {
        console.log(res)
        if (res.data.success) {
          // 回到登入頁
          this.$router.push('/login')
        }
      })
    }
  }
}
</script>
