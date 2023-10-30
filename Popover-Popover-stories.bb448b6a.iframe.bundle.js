/*! For license information please see Popover-Popover-stories.bb448b6a.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkonc_react_ui=self.webpackChunkonc_react_ui||[]).push([[388],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){var obj,key,value;obj=e,key=r,value=t[r],(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/components/Popover/Popover.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Docs:function(){return Docs},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Popover_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),utils_theme=__webpack_require__("./src/utils/theme.js"),useOutsideClick=__webpack_require__("./src/hooks/useOutsideClick.js"),Popover_module={popoverContainer:"Popover_popoverContainer__KCDS2",popover:"Popover_popover__CluWb","top-left":"Popover_top-left__iLj5s","top-right":"Popover_top-right__XWpyM","bottom-left":"Popover_bottom-left__cjbSc","bottom-right":"Popover_bottom-right__+Fzsc"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Popover=function Popover(_ref){var children=_ref.children,position=_ref.position,open=_ref.open,setOpen=_ref.setOpen,targetRef=_ref.targetRef,delayClose=_ref.delayClose,_ref$style=_ref.style,style=void 0===_ref$style?{}:_ref$style,theme=(0,utils_theme.F)(),stylesVariables={"--primaryColor":theme.primaryColor,"--secondaryColor":theme.secondaryColor,"--shadowColor":theme.shadowColor},_useState=(0,react.useState)({top:0,left:0}),_useState2=(0,slicedToArray.Z)(_useState,2),popoverPosition=_useState2[0],setPopoverPosition=_useState2[1],popoverRef=(0,react.useRef)(null),setOpenStatus=function setOpenStatus(status){return function(){setOpen(status)}};delayClose||((0,useOutsideClick.Z)(targetRef,setOpenStatus(!1)),(0,useOutsideClick.Z)(popoverRef,setOpenStatus(!1))),(0,react.useEffect)((function(){if(open&&delayClose){var closeTimer=setTimeout((function(){setOpen(!1)}),delayClose);return function(){return clearTimeout(closeTimer)}}}),[open,delayClose]),(0,react.useLayoutEffect)((function(){if(popoverRef.current&&targetRef.current){var triggerRect=targetRef.current.getBoundingClientRect(),popoverRect=popoverRef.current.getBoundingClientRect(),top=0,left=0;switch(position){case"top-left":default:top=triggerRect.top-popoverRect.height,left=triggerRect.left;break;case"top-right":top=triggerRect.top-popoverRect.height,left=triggerRect.right-popoverRect.width;break;case"bottom-left":top=triggerRect.bottom,left=triggerRect.left;break;case"bottom-right":top=triggerRect.bottom,left=triggerRect.right-popoverRect.width}setPopoverPosition({top:top,left:left})}}),[]);var popoverContent=open&&(0,jsx_runtime.jsx)("div",{className:"".concat(Popover_module.popover," ").concat(Popover_module[position]),ref:popoverRef,style:(0,objectSpread2.Z)((0,objectSpread2.Z)({top:popoverPosition.top,left:popoverPosition.left},stylesVariables),style),children:children});return(0,jsx_runtime.jsx)("div",{className:"".concat(Popover_module.popoverContainer),style:stylesVariables,children:popoverContent})};Popover.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{style:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"custom",raw:"PropTypes.style"},required:!1},targetRef:{description:"",type:{name:"custom",raw:"PropTypes.ref"},required:!1},children:{description:"",type:{name:"object"},required:!1},position:{description:"",type:{name:"enum",value:[{value:"'top-left'",computed:!1},{value:"'top-right'",computed:!1},{value:"'bottom-left'",computed:!1},{value:"'bottom-right'",computed:!1}]},required:!1},open:{description:"",type:{name:"bool"},required:!1},setOpen:{description:"",type:{name:"func"},required:!1},delayClose:{description:"",type:{name:"number"},required:!1}}};var _Docs$parameters,_Docs$parameters2,_Docs$parameters2$doc,Popover_Popover=Popover,Button=__webpack_require__("./src/components/Button/Button.js"),Popover_stories={title:"Popover",component:Popover_Popover,parameters:{},argTypes:{}},Docs=function Story(args){var _useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),open=_useState2[0],setOpen=_useState2[1],ref=(0,react.useRef)();return(0,jsx_runtime.jsxs)(utils_theme.Z,{children:[(0,jsx_runtime.jsx)(Button.Z,{ref:ref,label:"Popover Aç",style:{width:"100%"},onClick:function onClick(){return setOpen(!0)}}),(0,jsx_runtime.jsx)(Popover_Popover,(0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{targetRef:ref,open:open,setOpen:setOpen,position:"bottom-right",children:"Popover deneme"}))]})}.bind({});Docs.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Docs.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Docs$parameters=Docs.parameters)||void 0===_Docs$parameters?void 0:_Docs$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => {\n  const [open, setOpen] = useState(false);\n  const ref = useRef();\n  return <ThemeProvider>\n      <Button ref={ref} label={'Popover Aç'} style={{\n      width: '100%'\n    }} onClick={() => setOpen(true)}></Button>\n      <Popover {...args} targetRef={ref} open={open} setOpen={setOpen} position=\"bottom-right\">\n        Popover deneme\n      </Popover>\n    </ThemeProvider>;\n}"},null===(_Docs$parameters2=Docs.parameters)||void 0===_Docs$parameters2||null===(_Docs$parameters2$doc=_Docs$parameters2.docs)||void 0===_Docs$parameters2$doc?void 0:_Docs$parameters2$doc.source)})});var __namedExportsOrder=["Docs"]},"./src/components/Button/Button.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Button_Button}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),utils_theme=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/utils/theme.js")),Button_module={button:"Button_button__wiIYs",icon:"Button_icon__KeIH3",primary:"Button_primary__XYgy-",secondary:"Button_secondary__QwN49",transparent:"Button_transparent__33FBX",rounded:"Button_rounded__+9j5O"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),sizes={sm:{paddingSize:.5,fontSize:.75},md:{paddingSize:.75,fontSize:1},lg:{paddingSize:1,fontSize:1.2}},Button=function Button(_ref){var _ref$label=_ref.label,label=void 0===_ref$label?"Button":_ref$label,size=_ref.size,onClick=_ref.onClick,disabled=_ref.disabled,type=_ref.type,rounded=_ref.rounded,icon=_ref.icon,noShadow=_ref.noShadow,_ref$style=_ref.style,style=void 0===_ref$style?{}:_ref$style,ref=_ref.ref,theme=(0,utils_theme.F)(),styles=(0,objectSpread2.Z)((0,objectSpread2.Z)({},style),{},{"--primaryColor":theme.primaryColor,"--secondaryColor":theme.secondaryColor,"--paddingSize":sizes[null!=size?size:"md"].paddingSize,"--fontSize":sizes[null!=size?size:"md"].fontSize,"--shadowColor":noShadow?"transparent":theme.shadowColor,"--disabledColor":theme.disabledColor});return(0,jsx_runtime.jsxs)("button",{ref:ref,className:"".concat(Button_module.button," ").concat(Button_module[null!=type?type:"primary"]," ").concat(rounded?Button_module.rounded:""," ").concat(icon?Button_module.icon:""),style:styles,onClick:onClick,disabled:disabled,children:[icon,label]})};Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{label:{defaultValue:{value:"'Button'",computed:!1},description:"",type:{name:"string"},required:!1},style:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},size:{description:"",type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1}]},required:!1},onClick:{description:"",type:{name:"func"},required:!1},disabled:{description:"",type:{name:"bool"},required:!1},type:{description:"",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'transparent'",computed:!1}]},required:!1},rounded:{description:"",type:{name:"bool"},required:!1},icon:{description:"",type:{name:"any"},required:!1},noShadow:{description:"",type:{name:"bool"},required:!1},ref:{description:"",type:{name:"custom",raw:"PropTypes.ref"},required:!1}}};var Button_Button=Button},"./src/hooks/useOutsideClick.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),useOutsideClick=function useOutsideClick(ref,callback){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var handleClick=function handleClick(event){!function handleClickOutside(event){ref.current&&!ref.current.contains(event.target)&&callback()}(event)};return document.addEventListener("mousedown",handleClick),function(){document.removeEventListener("mousedown",handleClick)}}),[ref,callback])};useOutsideClick.propTypes={ref:prop_types__WEBPACK_IMPORTED_MODULE_1___default().ref,callback:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func},__webpack_exports__.Z=useOutsideClick},"./src/utils/defaultTheme.js":function(__unused_webpack_module,__webpack_exports__){__webpack_exports__.Z={primaryColor:"#6bb8e6",secondaryColor:"#282c34",shadowColor:"#1c1d1d",errorColor:"red",disabledColor:"#393737"}},"./src/utils/theme.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{F:function(){return useTheme}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_defaultTheme_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/defaultTheme.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ThemeContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(),useTheme=function useTheme(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext)},ThemeProvider=function ThemeProvider(_ref){var children=_ref.children,selectedTheme=_ref.theme||_defaultTheme_js__WEBPACK_IMPORTED_MODULE_1__.Z;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((function(){var root=document.documentElement;root.style.setProperty("--primary",selectedTheme.primaryColor),root.style.setProperty("--secondary",selectedTheme.secondaryColor)}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ThemeContext.Provider,{value:selectedTheme,children:children})};ThemeProvider.__docgenInfo={description:"",methods:[],displayName:"ThemeProvider",props:{children:{description:"",type:{name:"object"},required:!1},theme:{description:"",type:{name:"object"},required:!1}}},__webpack_exports__.Z=ThemeProvider},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);