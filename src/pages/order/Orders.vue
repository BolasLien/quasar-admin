<template>
  <div id="products">
  <div class="q-pa-md">
    <q-table
      title="訂單列表"
      :data="data"
      :columns="columns"
      row-key="name"
      :pagination="initialPagination"
    >
    <template v-slot:top>
      <div class="text-h4">
        訂單列表
      </div>
      <q-space></q-space>
        <!-- <q-btn push color="positive" label="新增商品" @click="add = true"></q-btn> -->
    </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="item" :props="props">
              <div class="text-subtitle1 text-center">
              {{ props.row.item }}
              </div>
          </q-td>
          <q-td key="products" :props="props">
              <div class="text-subtitle1 text-center">
              共 {{ props.row.products.length }} 件商品
              </div>
          </q-td>
          <q-td key="paymnet" :props="props">
            <q-badge color="warning">
              {{props.row.payment.name}}
            </q-badge>
          </q-td>
          <q-td key="orderPrice" :props="props">
              <div class="text-negative">
              NT$&ensp;{{ props.row.orderPrice }}
              </div>
          </q-td>
                    <q-td key="remark" :props="props">
              <div class="text-subtitle1 text-center">
              {{ props.row.remark }}
              </div>
          </q-td>
                    <q-td key="status" :props="props">
              <div class="text-subtitle1 text-center">
              {{ status.find(e=>e.value === props.row.status).label }}
              </div>
          </q-td>
          <q-td key="action" :props="props">
            <q-btn push color="primary" label="編輯內容" @click="editOrder(props.row)"></q-btn>
            <!-- <q-btn push color="positive" label="預覽" @click="newProdouct = true"></q-btn> -->
            <q-btn push color="negative" label="刪除" @click="removeOrder(props.row)"></q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>

  <!-- 新增商品的彈窗 -->
    <q-dialog v-model="add" persistent>
      <q-card style="min-width: 500px">
        <q-card-section>
          <div class="text-h6">新增商品</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input class="text" v-model="addData.name" outlined placeholder="商品名稱" />
          <!-- <q-select outlined v-model="addData.class" :options="options" :emit-value="true" label="分類" /> -->
          <q-input class="text" v-model="addData.subheading" outlined placeholder="副標題" />
          <q-input class="text" v-model="addData.intro" outlined placeholder="簡述" />
          <q-input prefix="$" class="text" v-model="addData.price" outlined placeholder="價格" />
          <q-input class="text" v-model="addData.description" type="textarea" outlined placeholder="介紹" />
        <q-toggle
          v-model="addData.show"
          checked-icon="check"
          color="green"
          unchecked-icon="clear"
          label="是否上架"
        />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="取消" v-close-popup />
          <q-btn flat label="送出" v-close-popup @click="create(addData)" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- 編輯商品的彈窗 -->
    <q-dialog v-model="edit" persistent>
      <q-card style="min-width: 500px">
        <q-card-section>
          <div class="text-h6">訂單編輯</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <p>會員帳號：{{editData.account}}</p>
          <div class="row" v-for="(item, index) in editData.products" :key="index">
            <div class="col-3">
              <q-img :src="item.src" ></q-img>
            </div>
            <div class="col-1">
            </div>
            <div class="col-8">
              <p>{{ item.name}}</p>
              <p>x{{ item.amount}}</p>
              <p>{{ item.price}}</p>
            </div>
            <hr>
          </div>

          <!-- <q-input class="text" v-model="editData.name" outlined placeholder="商品名稱" /> -->
          <q-select v-model="editData.status" outlined :options="status" :emit-value="true" label="訂單狀態" />
          <!-- <q-input class="text" v-model="editData.subheading" outlined placeholder="副標題" /> -->
          <!-- <q-input class="text" v-model="editData.intro" outlined placeholder="簡述" /> -->
          <!-- <q-input prefix="$" class="text" v-model="editData.price" outlined placeholder="價格" /> -->
          <!-- <q-input class="text" v-model="editData.description" type="textarea" outlined placeholder="介紹" /> -->
        <!-- <q-toggle
          v-model="editData.show"
          checked-icon="check"
          color="green"
          unchecked-icon="clear"
          label="是否上架"
        /> -->
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="取消" v-close-popup @click="edit=false"/>
          <q-btn flat label="送出" v-close-popup @click="update(editData)" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  inject: ['upload', 'reload'],
  data () {
    return {
      initialPagination: {
        sortBy: 'item',
        descending: false,
        page: 1,
        rowsPerPage: 10
        // rowsNumber: xx if getting data from a server
      },
      columns: [
        { name: 'item', field: 'item', align: 'center', label: '訂單編號' },
        { name: 'products', field: 'products', align: 'center', label: '訂單內容' },
        { name: 'paymnet', field: 'paymnet', align: 'center', label: '付款方式' },
        { name: 'orderPrice', field: 'orderPrice', align: 'center', label: '總金額' },
        { name: 'remark', field: 'remark', align: 'center', label: '備註' },
        { name: 'status', field: 'status', align: 'center', label: '訂單狀態' },
        { name: 'action', field: 'action', align: 'center', label: '操作' }
      ],
      data: [],
      add: false,
      addData: {
        class: '',
        name: '',
        show: true,
        subheading: '',
        intro: '',
        price: '',
        description: ''
      },

      // 編輯商品彈窗的參數
      edit: false,
      editData: {
        class: '',
        name: '',
        show: '',
        subheading: '',
        intro: '',
        price: '',
        description: ''
      },
      status: [
        {
          label: '尚未付款',
          value: 0
        },
        {
          label: '待出貨',
          value: 1
        },
        {
          label: '出貨中',
          value: 2
        },
        {
          label: '已送達',
          value: 3
        }
      ],
      model: ''
    }
  },
  computed: {
    token () {
      return this.$store.getters.token
    }
  },
  methods: {
    editOrder (data) {
      this.edit = true
      this.editData = data
    },
    update (data) {
      this.$axios.patch(process.env.API + '/orders/' + data.item, data, { headers: { Authorization: `Bearer ${this.token}` } })
        .then(response => {
          this.reload()
          alert(response.data.message)
        })
        .catch(error => {
          alert(error.response.data.message)
        })
    },
    create (data) {
      this.$axios.post(process.env.API + '/back/orders/', {
        class: data.class,
        name: data.name,
        subheading: data.subheading,
        intro: data.intro,
        price: data.price,
        description: data.description,
        show: data.show
      }, { headers: { Authorization: `Bearer ${this.token}` } })
        .then(response => {
          this.reload()
          alert(response.data.message)
        })
        .catch(error => {
          alert(error.response.data.message)
        })
    },
    remove (data) {
      this.$axios.delete(process.env.API + '/orders/' + data.item, { headers: { Authorization: `Bearer ${this.token}` } })
        .then(response => {
          this.reload()
          this.$q.dialog({
            title: 'ok',
            message: response.data.message
          })
        })
        .catch(error => {
          console.log(error)
          this.$q.dialog({
            title: 'error',
            message: '伺服器錯誤'
          })
        })
    },
    removeOrder (data) {
      this.$q.dialog({
        title: 'Prompt',
        message: '請輸入訂單編號',
        prompt: {
          model: '',
          type: 'text' // optional
        },
        cancel: true,
        persistent: true
      }).onOk(input => {
        this.remove(input === data.item ? data : 0)
        // console.log('>>>> OK, received', data)
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }
  },
  mounted () {
    this.$axios.get(process.env.API + '/orders', { headers: { Authorization: `Bearer ${this.token}` } })
      .then((response) => {
        this.data = response.data.datas
        this.data.map(e => { e.products.map(item => { item.src = process.env.API + '/image/' + item.src }) })
      }).catch((error) => {
        console.log(error.response.data)
      })
  }
}
</script>
