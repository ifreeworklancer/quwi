(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3],{371:function(t,e,r){"use strict";r.r(e);r(40),r(25),r(33),r(69),r(39),r(70);var o=r(31),n=r(71);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={data:function(){return{isLoading:!1,formData:{title:"",description:""},formRules:{title:[{required:!0,message:"Please input Title",trigger:"change"}]}}},methods:c(c({},Object(n.b)({createCollection:"collection/create"})),{},{sendForm:function(){var t=this;this.isLoading=!0,this.$refs.formCollectionCreate.validate((function(e){e?t.createCollection(t.formData).then((function(){t.resetFormData(),t.$notify({title:"Success",message:"Collection created successful",type:"success"}),t.isLoading=!1})).catch((function(){t.$message({type:"error",message:"Oops, something went wrong!",duration:5e3}),t.isLoading=!1})):t.isLoading=!1}))},resetFormData:function(){this.$refs.formCollectionCreate.resetFields()}})},m=r(19),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-form",{ref:"formCollectionCreate",staticClass:"form",attrs:{model:t.formData,rules:t.formRules}},[r("div",{staticClass:"form-body"},[r("el-form-item",{attrs:{label:"Title",prop:"title"}},[r("el-input",{model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"Description",prop:"description"}},[r("el-input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:8}},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1)],1),t._v(" "),r("div",{staticClass:"form-footer"},[r("el-button",{attrs:{type:"primary",loading:t.isLoading},on:{click:function(e){return e.preventDefault(),t.sendForm(e)}}},[t._v("\n      Submit\n    ")])],1)])}),[],!1,null,null,null);e.default=component.exports},373:function(t,e,r){"use strict";r.r(e);var o={},n=r(19),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"section section--full-height section--center"},[r("div",{staticClass:"container"},[r("el-row",[r("el-col",{attrs:{span:24}},[r("h1",{staticClass:"page-title"},[t._v("Create Collection")])]),t._v(" "),r("el-col",{attrs:{span:10,xs:24,sm:16,lg:12,xl:10}},[r("CollectionFormCreate")],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CollectionFormCreate:r(371).default})}}]);