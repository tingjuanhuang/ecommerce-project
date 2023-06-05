<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
    <h1 class="h2">產品列表</h1>
    <div class="text-end">
      <button class="btn btn-primary" type="button" @click="openModal(true)">新增產品</button>
    </div>
  </div>

    <table class="table table-striped mt-4">
        <thead>
            <tr>
                <th width="120">分類</th>
                <th>產品名稱</th>
                <th width="120">原價</th>
                <th width="120">售價</th>
                <th width="100">是否啟用</th>
                <th width="200">編輯</th>
            </tr>
        </thead>
        <tbody class="table-group-divider">
            <tr v-for="item in products" :key="item.id">
                <td>{{ item.category }}</td>
                <td>{{ item.title }}</td>
                <td class="text-right">{{ item.origin_price }}</td>
                <td class="text-right">{{ item.price }}</td>
                <td>
                    <span class="text-success" v-if="item.is_enabled">啟用</span>
                    <span class="text-muted" v-else>未啟用</span>
                </td>
                <td>
                    <div class="btn-group">
                    <button class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">編輯</button>
                    <button class="btn btn-outline-danger btn-sm" @click="openDelProductModal(item)">刪除</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <ProductModal ref="productModal" :product="tempProduct" @update-product="updateProduct"></ProductModal>
    <DelModal ref="delModal" :item="tempProduct" @del-item="delProduct"></DelModal>
</template>

<script>
import ProductModal from '../components/ProductModal.vue'
import DelModal from '../components/DelModal.vue'

export default {
  data () {
    return {
      // 接收 API [產品]資料
      products: [],
      // 接收 API [分頁]資料
      pagination: {},
      // 向內層傳遞的資料
      tempProduct: {},
      // 判斷是否為新增狀態
      isNew: false
    }
  },
  // 區域註冊
  components: {
    ProductModal,
    DelModal
  },
  methods: {
    // 取得產品資料
    getProducts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products`
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          // console.log(res.data)
          this.products = res.data.products
          this.pagination = res.data.pagination
        }
      })
    },
    // 打開 Modal
    openModal (isNew, item) {
      // console.log(isNew, item)
      if (isNew) {
        this.tempProduct = {}
      } else {
        this.tempProduct = { ...item }
      }
      this.isNew = isNew
      const productComponent = this.$refs.productModal
      productComponent.showModal()
    },
    // 更新產品資料
    updateProduct (item) {
      this.tempProduct = item
      // 新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethod = 'post'

      // 編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        httpMethod = 'put'
      }

      const productComponent = this.$refs.productModal
      this.$http[httpMethod](api, { data: this.tempProduct }).then((res) => {
        console.log(res)
        productComponent.hideModal()
        // 重新取得列表資料
        this.getProducts()
      })
    },
    // 打開 Delete Modal
    openDelProductModal (item) {
      // eslint-disable-next-line no-undef
      this.tempProduct = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    // 刪除產品資料
    delProduct () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
      this.$http.delete(url).then((res) => {
        // console.log(res.data)
        const delComponent = this.$refs.delModal
        delComponent.hideModal()
        this.getProducts()
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
