(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"05c8":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("q-page",{staticClass:"flex flex-center",attrs:{id:"login"}},[a("div",{staticClass:"q-pa-md"},[a("q-form",{staticClass:"q-gutter-md",on:{submit:t.onSubmit,reset:t.onReset}},[a("q-input",{staticClass:"input",attrs:{clearable:"",filled:"",label:"輸入帳號"},model:{value:t.account,callback:function(s){t.account=s},expression:"account"}}),a("div"),a("q-input",{staticClass:"input",attrs:{clearable:"",filled:"",type:t.isPwd?"password":"text",label:"輸入密碼"},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwd?"visibility_off":"visibility"},on:{click:function(s){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.password,callback:function(s){t.password=s},expression:"password"}}),a("q-btn",{attrs:{color:"blue",label:"註冊",type:"submit"}}),a("q-btn",{attrs:{label:"重設",type:"reset"}})],1)],1)])},n=[],o={name:"Login",data(){return{account:"",password:"",isPwd:!0}},methods:{onSubmit(){this.$axios.post("https://miniattic.herokuapp.com/users",{account:this.account,password:this.password}).then(t=>{const s=t.data;s.success?alert("註冊成功"):alert(s.message)}).catch(t=>{alert(t.response.data.message)})},onReset(){this.account="",this.password=""}}},i=o,c=a("2877"),l=a("9989"),r=a("0378"),u=a("27f9"),p=a("0016"),d=a("9c40"),b=a("eebe"),m=a.n(b),w=Object(c["a"])(i,e,n,!1,null,null,null);s["default"]=w.exports;m()(w,"components",{QPage:l["a"],QForm:r["a"],QInput:u["a"],QIcon:p["a"],QBtn:d["a"]})}}]);