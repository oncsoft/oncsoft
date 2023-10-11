/*! For license information please see Grid-Grid-stories.2d3f8f29.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkonc_react_ui=self.webpackChunkonc_react_ui||[]).push([[322],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){var obj,key,value;obj=e,key=r,value=t[r],(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}})},"./src/components/Grid/Grid.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Docs:function(){return Docs},__namedExportsOrder:function(){return __namedExportsOrder}});var _Docs$parameters,_Docs$parameters2,_Docs$parameters2$doc,_Users_oncsoftwaredesignosmanasar_nurselcansuozkan_onc_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Grid__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Grid/Grid.js")),_utils_defaultTheme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/defaultTheme.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Grid System",component:_Grid__WEBPACK_IMPORTED_MODULE_1__.Z,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{container:{description:"container ana gridtir.item prosu eklenmemelidir"},justifyContent:{control:{type:"select",options:["flex-start","center","flex-end"]}},alignItems:{control:{type:"select",options:["flex-start","center","flex-end"]}}}};var Docs=function Story(args){var style={border:"3px solid black",color:"white",fontSize:20};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__.Z,(0,_Users_oncsoftwaredesignosmanasar_nurselcansuozkan_onc_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_Users_oncsoftwaredesignosmanasar_nurselcansuozkan_onc_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({container:!0,direction:"row",style:{background:_utils_defaultTheme__WEBPACK_IMPORTED_MODULE_2__.Z.primaryColor,width:600,height:100}},args),{},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_1__.Z,{item:1,style:style,children:"1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_1__.Z,{item:2,style:style,children:"2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_1__.Z,{item:9,style:style,children:"3"})]}))}.bind({});Docs.parameters=(0,_Users_oncsoftwaredesignosmanasar_nurselcansuozkan_onc_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_Users_oncsoftwaredesignosmanasar_nurselcansuozkan_onc_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},Docs.parameters),{},{docs:(0,_Users_oncsoftwaredesignosmanasar_nurselcansuozkan_onc_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_Users_oncsoftwaredesignosmanasar_nurselcansuozkan_onc_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_Docs$parameters=Docs.parameters)||void 0===_Docs$parameters?void 0:_Docs$parameters.docs),{},{source:(0,_Users_oncsoftwaredesignosmanasar_nurselcansuozkan_onc_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:"args => {\n  const style = {\n    border: '3px solid black',\n    color: 'white',\n    fontSize: 20\n  };\n  return <Grid container direction={'row'} style={{\n    background: defaultTheme.primaryColor,\n    width: 600,\n    height: 100\n  }} {...args}>\n      <Grid item={1} style={style}>\n        1\n      </Grid>\n      <Grid item={2} style={style}>\n        2\n      </Grid>\n      <Grid item={9} style={style}>\n        3\n      </Grid>\n    </Grid>;\n}"},null===(_Docs$parameters2=Docs.parameters)||void 0===_Docs$parameters2||null===(_Docs$parameters2$doc=_Docs$parameters2.docs)||void 0===_Docs$parameters2$doc?void 0:_Docs$parameters2$doc.source)})});var __namedExportsOrder=["Docs"]},"./src/components/Grid/Grid.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Grid_Grid}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),Grid_module=(__webpack_require__("./node_modules/react/index.js"),{container:"Grid_container__ymXVK",gridItem:"Grid_gridItem__Y5opQ",row:"Grid_row__ql-JB",column:"Grid_column__bbAHN"}),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Grid=function Grid(_ref){var container=_ref.container,direction=_ref.direction,justifyContent=_ref.justifyContent,alignItems=_ref.alignItems,spacing=_ref.spacing,item=_ref.item,_ref$style=_ref.style,style=void 0===_ref$style?{}:_ref$style,children=_ref.children,styles=(0,objectSpread2.Z)((0,objectSpread2.Z)({},style),{},{"--spacing":null!=spacing?spacing:0,"--justifyContent":justifyContent,"--alignItems":alignItems,"--item":null!=item?item:1});return(0,jsx_runtime.jsx)("div",{className:"".concat(item?Grid_module.gridItem:""," ").concat(container?Grid_module.container:""," ").concat(direction?Grid_module[direction]:""),style:styles,children:children})};Grid.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{style:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},container:{description:"",type:{name:"bool"},required:!1},direction:{description:"",type:{name:"enum",value:[{value:"'row'",computed:!1},{value:"'column'",computed:!1}]},required:!1},justifyContent:{description:"",type:{name:"enum",value:[{value:"'flex-start'",computed:!1},{value:"'center'",computed:!1},{value:"'flex-end'",computed:!1}]},required:!1},alignItems:{description:"",type:{name:"enum",value:[{value:"'flex-start'",computed:!1},{value:"'center'",computed:!1},{value:"'flex-end'",computed:!1}]},required:!1},spacing:{description:"",type:{name:"number"},required:!1},item:{description:"",type:{name:"number"},required:!1},children:{description:"",type:{name:"object"},required:!1}}};var Grid_Grid=Grid},"./src/utils/defaultTheme.js":function(__unused_webpack_module,__webpack_exports__){__webpack_exports__.Z={primaryColor:"#6bb8e6",secondaryColor:"#282c34",shadowColor:"#1c1d1d",errorColor:"red",disabledColor:"#393737"}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);