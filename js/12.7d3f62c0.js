(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{f30a:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"calltoaction"}},[a("div",{staticClass:"row"},t._l(t.datas,(function(e,i){return a("div",{key:i,staticClass:"edit col-lg-4 col-sm-12"},[a("p",[t._v(t._s(e.item))]),a("img",{attrs:{src:e.src}}),a("p",[t._v("圖片上傳")]),a("q-file",{attrs:{color:"primary",filled:"",label:"選擇圖片",accept:".jpg",hint:"限.jpg, 1M以下"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"cloud_upload"}})]},proxy:!0}],null,!0),model:{value:e.file,callback:function(a){t.$set(e,"file",a)},expression:"data.file"}}),a("q-btn",{attrs:{push:"",color:"primary",label:"上傳"},on:{click:function(a){return t.upload(e,"page")}}}),a("hr"),a("p",[t._v("內容編輯")]),a("q-input",{staticClass:"text",attrs:{outlined:"",placeholder:"標題",hint:e.description1},model:{value:e.description1Model,callback:function(a){t.$set(e,"description1Model",a)},expression:"data.description1Model"}}),a("q-input",{staticClass:"text",attrs:{outlined:"",placeholder:"副標題",hint:e.description2},model:{value:e.description2Model,callback:function(a){t.$set(e,"description2Model",a)},expression:"data.description2Model"}}),a("q-input",{staticClass:"text",attrs:{outlined:"",placeholder:"按鈕文字",hint:e.description3},model:{value:e.description3Model,callback:function(a){t.$set(e,"description3Model",a)},expression:"data.description3Model"}}),a("q-input",{staticClass:"text",attrs:{outlined:"",placeholder:"超連結",hint:e.link},model:{value:e.linkModel,callback:function(a){t.$set(e,"linkModel",a)},expression:"data.linkModel"}}),a("q-toggle",{attrs:{"checked-icon":"check",color:"green","unchecked-icon":"clear",label:"是否顯示"},model:{value:e.show,callback:function(a){t.$set(e,"show",a)},expression:"data.show"}}),a("br"),a("q-btn",{attrs:{push:"",color:"primary",label:"保存"},on:{click:function(a){return t.submit(e)}}})],1)})),0)])},l=[],o={inject:["reload","submit","upload"],data(){return{datas:[]}},mounted(){this.$axios.get("https://miniattic.herokuapp.com/pages/calltoaction").then(t=>{this.title=t.data.datas.filter(t=>t.item.includes("title"))[0],this.datas=t.data.datas.filter(t=>!t.item.includes("title")),this.datas.map(t=>{t.src="https://miniattic.herokuapp.com/image/"+t.src})}).catch(t=>{alert(t.response.data.message)})}},s=o,n=a("2877"),c=a("7d53"),r=a("0016"),d=a("9c40"),p=a("27f9"),u=a("9564"),h=a("eebe"),m=a.n(h),f=Object(n["a"])(s,i,l,!1,null,null,null);e["default"]=f.exports;m()(f,"components",{QFile:c["a"],QIcon:r["a"],QBtn:d["a"],QInput:p["a"],QToggle:u["a"]})}}]);