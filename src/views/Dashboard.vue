<template>
 Dashboard
</template>

<script>
export default {
  // 取出 Cookie 裡的 Token
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)loginToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    console.log(token)
    // 透過 Vue axios 套件把 axios 加到 Vue 裡，直接呼叫它，將 Token 加入到 Headers
    this.$http.defaults.headers.common.Authorization = token
    // 觸發 API(檢查用戶是否仍持續登入)
    const api = `${process.env.VUE_APP_API}api/user/check`
    // 使用 axios 的 post 方法送出 API
    this.$http.post(api, this.user) // 參數：API 路徑、夾帶的資料
      .then((res) => {
        // console.log(res)
        // 若登入失敗執行以下
        if (!res.data.success) {
          // 轉址
          this.$router.push('/login')
        }
      })
  }
}
</script>
