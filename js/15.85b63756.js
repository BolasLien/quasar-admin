(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{a2a5:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"products"}},[e("div",{staticClass:"q-pa-md"},[e("q-table",{attrs:{title:"訂單列表",data:t.data,columns:t.columns,"row-key":"name",pagination:t.initialPagination},scopedSlots:t._u([{key:"top",fn:function(){return[e("div",{staticClass:"text-h4"},[t._v("\n      訂單列表\n    ")]),e("q-space")]},proxy:!0},{key:"body",fn:function(a){return[e("q-tr",{attrs:{props:a}},[e("q-td",{key:"item",attrs:{props:a}},[e("div",{staticClass:"text-subtitle1 text-center"},[t._v("\n            "+t._s(a.row.item)+"\n            ")])]),e("q-td",{key:"products",attrs:{props:a}},[e("div",{staticClass:"text-subtitle1 text-center"},[t._v("\n            共 "+t._s(a.row.products.length)+" 件商品\n            ")])]),e("q-td",{key:"paymnet",attrs:{props:a}},[e("q-badge",{attrs:{color:"warning"}},[t._v("\n            "+t._s(a.row.payment.name)+"\n          ")])],1),e("q-td",{key:"orderPrice",attrs:{props:a}},[e("div",{staticClass:"text-negative"},[t._v("\n            NT$ "+t._s(a.row.orderPrice)+"\n            ")])]),e("q-td",{key:"remark",attrs:{props:a}},[e("div",{staticClass:"text-subtitle1 text-center"},[t._v("\n            "+t._s(a.row.remark)+"\n            ")])]),e("q-td",{key:"status",attrs:{props:a}},[e("div",{staticClass:"text-subtitle1 text-center"},[t._v("\n            "+t._s(t.status.find((function(t){return t.value===a.row.status})).label)+"\n            ")])]),e("q-td",{key:"action",attrs:{props:a}},[e("q-btn",{attrs:{push:"",color:"primary",label:"編輯內容"},on:{click:function(e){return t.editOrder(a.row)}}}),e("q-btn",{attrs:{push:"",color:"negative",label:"刪除"},on:{click:function(e){return t.removeOrder(a.row)}}})],1)],1)]}}])})],1),e("q-dialog",{attrs:{persistent:""},model:{value:t.add,callback:function(a){t.add=a},expression:"add"}},[e("q-card",{staticStyle:{"min-width":"500px"}},[e("q-card-section",[e("div",{staticClass:"text-h6"},[t._v("新增商品")])]),e("q-card-section",{staticClass:"q-pt-none"},[e("q-input",{staticClass:"text",attrs:{outlined:"",placeholder:"商品名稱"},model:{value:t.addData.name,callback:function(a){t.$set(t.addData,"name",a)},expression:"addData.name"}}),e("q-input",{staticClass:"text",attrs:{outlined:"",placeholder:"副標題"},model:{value:t.addData.subheading,callback:function(a){t.$set(t.addData,"subheading",a)},expression:"addData.subheading"}}),e("q-input",{staticClass:"text",attrs:{outlined:"",placeholder:"簡述"},model:{value:t.addData.intro,callback:function(a){t.$set(t.addData,"intro",a)},expression:"addData.intro"}}),e("q-input",{staticClass:"text",attrs:{prefix:"$",outlined:"",placeholder:"價格"},model:{value:t.addData.price,callback:function(a){t.$set(t.addData,"price",a)},expression:"addData.price"}}),e("q-input",{staticClass:"text",attrs:{type:"textarea",outlined:"",placeholder:"介紹"},model:{value:t.addData.description,callback:function(a){t.$set(t.addData,"description",a)},expression:"addData.description"}}),e("q-toggle",{attrs:{"checked-icon":"check",color:"green","unchecked-icon":"clear",label:"是否上架"},model:{value:t.addData.show,callback:function(a){t.$set(t.addData,"show",a)},expression:"addData.show"}})],1),e("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"取消"}}),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"送出"},on:{click:function(a){return t.create(t.addData)}}})],1)],1)],1),e("q-dialog",{attrs:{persistent:""},model:{value:t.edit,callback:function(a){t.edit=a},expression:"edit"}},[e("q-card",{staticStyle:{"min-width":"500px"}},[e("q-card-section",[e("div",{staticClass:"text-h6"},[t._v("訂單編輯")])]),e("q-card-section",{staticClass:"q-pt-none"},[e("p",[t._v("會員帳號："+t._s(t.editData.account))]),t._l(t.editData.products,(function(a,s){return e("div",{key:s,staticClass:"row"},[e("div",{staticClass:"col-3"},[e("q-img",{attrs:{src:a.src}})],1),e("div",{staticClass:"col-1"}),e("div",{staticClass:"col-8"},[e("p",[t._v(t._s(a.name))]),e("p",[t._v("x"+t._s(a.amount))]),e("p",[t._v(t._s(a.price))])]),e("hr")])})),e("q-select",{attrs:{outlined:"",options:t.status,"emit-value":!0,label:"訂單狀態"},model:{value:t.editData.status,callback:function(a){t.$set(t.editData,"status",a)},expression:"editData.status"}})],2),e("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"取消"},on:{click:function(a){t.edit=!1}}}),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"送出"},on:{click:function(a){return t.update(t.editData)}}})],1)],1)],1)],1)},i=[],r=(e("e01a"),{inject:["upload","reload"],data(){return{initialPagination:{sortBy:"item",descending:!1,page:1,rowsPerPage:10},columns:[{name:"item",field:"item",align:"center",label:"訂單編號"},{name:"products",field:"products",align:"center",label:"訂單內容"},{name:"paymnet",field:"paymnet",align:"center",label:"付款方式"},{name:"orderPrice",field:"orderPrice",align:"center",label:"總金額"},{name:"remark",field:"remark",align:"center",label:"備註"},{name:"status",field:"status",align:"center",label:"訂單狀態"},{name:"action",field:"action",align:"center",label:"操作"}],data:[],add:!1,addData:{class:"",name:"",show:!0,subheading:"",intro:"",price:"",description:""},edit:!1,editData:{class:"",name:"",show:"",subheading:"",intro:"",price:"",description:""},status:[{label:"尚未付款",value:0},{label:"待出貨",value:1},{label:"出貨中",value:2},{label:"已送達",value:3}],model:""}},computed:{token(){return this.$store.getters.token}},methods:{editOrder(t){this.edit=!0,this.editData=t},update(t){this.$axios.patch("http://localhost:3000/orders/"+t.item,t,{headers:{Authorization:"Bearer "+this.token}}).then(t=>{this.reload(),alert(t.data.message)}).catch(t=>{alert(t.response.data.message)})},create(t){this.$axios.post("http://localhost:3000/back/orders/",{class:t.class,name:t.name,subheading:t.subheading,intro:t.intro,price:t.price,description:t.description,show:t.show},{headers:{Authorization:"Bearer "+this.token}}).then(t=>{this.reload(),alert(t.data.message)}).catch(t=>{alert(t.response.data.message)})},remove(t){this.$axios.delete("http://localhost:3000/orders/"+t.item,{headers:{Authorization:"Bearer "+this.token}}).then(t=>{this.reload(),this.$q.dialog({title:"ok",message:t.data.message})}).catch(t=>{console.log(t),this.$q.dialog({title:"error",message:"伺服器錯誤"})})},removeOrder(t){this.$q.dialog({title:"Prompt",message:"請輸入訂單編號",prompt:{model:"",type:"text"},cancel:!0,persistent:!0}).onOk(a=>{this.remove(a===t.item?t:0)}).onCancel(()=>{}).onDismiss(()=>{})}},mounted(){this.$axios.get("http://localhost:3000/orders",{headers:{Authorization:"Bearer "+this.token}}).then(t=>{this.data=t.data.datas,this.data.map(t=>{t.products.map(t=>{t.src="http://localhost:3000/image/"+t.src})})}).catch(t=>{console.log(t.response.data)})}}),n=r,o=e("2877"),l=e("eaac"),d=e("2c91"),c=e("9c40"),p=e("bd08"),u=e("db86"),m=e("58a81"),h=e("24e8"),v=e("f09f"),b=e("a370"),g=e("27f9"),k=e("ddd8"),f=e("9564"),q=e("4b7e"),x=e("068f"),w=e("7f67"),D=e("eebe"),C=e.n(D),_=Object(o["a"])(n,s,i,!1,null,null,null);a["default"]=_.exports;C()(_,"components",{QTable:l["a"],QSpace:d["a"],QBtn:c["a"],QTr:p["a"],QTd:u["a"],QBadge:m["a"],QDialog:h["a"],QCard:v["a"],QCardSection:b["a"],QInput:g["a"],QSelect:k["a"],QToggle:f["a"],QCardActions:q["a"],QImg:x["a"]}),C()(_,"directives",{ClosePopup:w["a"]})}}]);