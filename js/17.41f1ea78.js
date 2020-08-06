(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{cd36:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"category"}},[e("div",{staticClass:"row q-ma-md"},[e("q-table",{staticClass:"col-lg-6 col-sm-12",attrs:{title:"分類列表",data:t.data,columns:t.columns,"row-key":"name"},scopedSlots:t._u([{key:"top",fn:function(){return[e("div",{staticClass:"text-h4"},[t._v("\n        分類列表\n      ")]),e("q-space"),e("q-btn",{attrs:{push:"",color:"positive",label:"新增分類"},on:{click:function(a){t.add=!0}}})]},proxy:!0},{key:"body",fn:function(a){return[e("q-tr",{attrs:{props:a}},[e("q-td",{key:"itemId",attrs:{props:a}},[e("div",{staticClass:"text-subtitle1 text-center"},[t._v("\n              "+t._s(a.row.item)+"\n              ")])]),e("q-td",{key:"name",attrs:{props:a}},[e("div",{staticClass:"text-subtitle1 text-center"},[t._v("\n              "+t._s(a.row.name)+"\n              ")])]),e("q-td",{key:"show",attrs:{props:a}},[e("q-badge",{attrs:{color:a.row.show?"positive":"nagative"}},[t._v("\n              "+t._s(a.row.show)+"\n            ")])],1),e("q-td",{key:"action",attrs:{props:a}},[e("q-btn",{attrs:{push:"",color:"primary",label:"編輯內容"},on:{click:function(e){return t.editCategory(a.row)}}}),e("q-btn",{attrs:{push:"",color:"negative",label:"刪除"},on:{click:function(e){return t.remove(a.row)}}})],1)],1)]}}])}),e("q-dialog",{attrs:{persistent:""},model:{value:t.add,callback:function(a){t.add=a},expression:"add"}},[e("q-card",{staticStyle:{"min-width":"500px"}},[e("q-card-section",[e("div",{staticClass:"text-h6"},[t._v("新增分類")])]),e("q-card-section",{staticClass:"q-pt-none"},[e("q-input",{staticClass:"text",attrs:{outlined:"",placeholder:"序號"},model:{value:t.addData.item,callback:function(a){t.$set(t.addData,"item",a)},expression:"addData.item"}}),e("q-input",{staticClass:"text",attrs:{outlined:"",placeholder:"分類名稱"},model:{value:t.addData.name,callback:function(a){t.$set(t.addData,"name",a)},expression:"addData.name"}}),e("q-toggle",{attrs:{"checked-icon":"check",color:"green","unchecked-icon":"clear",label:"是否顯示"},model:{value:t.addData.show,callback:function(a){t.$set(t.addData,"show",a)},expression:"addData.show"}})],1),e("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"取消"}}),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"送出"},on:{click:function(a){return t.create(t.addData)}}})],1)],1)],1),e("q-dialog",{attrs:{persistent:""},model:{value:t.edit,callback:function(a){t.edit=a},expression:"edit"}},[e("q-card",{staticStyle:{"min-width":"500px"}},[e("q-card-section",[e("div",{staticClass:"text-h6"},[t._v("編輯分類")])]),e("q-card-section",{staticClass:"q-pt-none"},[e("q-input",{staticClass:"text",attrs:{outlined:"",placeholder:"商品名稱"},model:{value:t.editData.name,callback:function(a){t.$set(t.editData,"name",a)},expression:"editData.name"}}),e("q-toggle",{attrs:{"checked-icon":"check",color:"green","unchecked-icon":"clear",label:"是否上架"},model:{value:t.editData.show,callback:function(a){t.$set(t.editData,"show",a)},expression:"editData.show"}})],1),e("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"取消"},on:{click:function(a){t.edit=!1}}}),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"送出"},on:{click:function(a){return t.update(t.editData)}}})],1)],1)],1)],1)])},o=[],n={inject:["reload"],data(){return{columns:[{name:"itemId",field:"itemId",align:"center",label:"序號",sortable:!0,sort:(t,a)=>parseInt(t,10)-parseInt(a,10)},{name:"name",field:"name",align:"center",label:"分類名稱"},{name:"show",field:"show",align:"center",label:"是否顯示",sortable:!0,sort:(t,a)=>parseInt(t,10)-parseInt(a,10)},{name:"action",field:"action",align:"center",label:"操作"}],data:[],add:!1,addData:{},edit:!1,editData:{}}},methods:{editCategory(t){this.edit=!0,this.editData=t},create(t){this.$axios.post("https://miniattic.herokuapp.com/categorys",{item:t.item,name:t.name,show:t.show}).then(t=>{this.reload(),alert(t.data.message)}).catch(t=>{alert(t.response.data.message)})},update(t){this.$axios.patch("https://miniattic.herokuapp.com/categorys/"+t.item,{name:t.name,show:t.show}).then(t=>{this.reload(),alert(t.data.message)}).catch(t=>{alert(t.response.data.message)})},remove(t){this.$axios.delete("https://miniattic.herokuapp.com/categorys/"+t.item).then(t=>{this.reload(),console.log(t.data),alert(t.data.message)}).catch(t=>{console.log(t)})}},mounted(){this.$axios.get("https://miniattic.herokuapp.com/categorys").then(t=>{this.data=t.data.datas}).catch(t=>{console.log(t.response.data)})}},i=n,c=e("2877"),l=e("eaac"),r=e("2c91"),d=e("9c40"),p=e("bd08"),m=e("db86"),u=e("58a81"),h=e("24e8"),b=e("f09f"),g=e("a370"),v=e("27f9"),w=e("9564"),f=e("4b7e"),q=e("7f67"),k=e("eebe"),x=e.n(k),y=Object(c["a"])(i,s,o,!1,null,null,null);a["default"]=y.exports;x()(y,"components",{QTable:l["a"],QSpace:r["a"],QBtn:d["a"],QTr:p["a"],QTd:m["a"],QBadge:u["a"],QDialog:h["a"],QCard:b["a"],QCardSection:g["a"],QInput:v["a"],QToggle:w["a"],QCardActions:f["a"]}),x()(y,"directives",{ClosePopup:q["a"]})}}]);