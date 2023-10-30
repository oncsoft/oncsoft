"use strict";(self.webpackChunkonc_react_ui=self.webpackChunkonc_react_ui||[]).push([[81],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _toConsumableArray}});var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.Z)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/components/UploadImage/UploadImage.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Docs:function(){return Docs},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return UploadImage_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),utils_theme=__webpack_require__("./src/utils/theme.js"),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),Grid=__webpack_require__("./src/components/Grid/Grid.js"),Button=__webpack_require__("./src/components/Button/Button.js"),Icons=__webpack_require__("./src/components/Icons/index.js"),UploadImage_module={gallery:"UploadImage_gallery__2OWpA",imageContainer:"UploadImage_imageContainer__06zsy",active:"UploadImage_active__BVD6U"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),UploadImage=function UploadImage(_ref){var _ref$value=_ref.value,value=void 0===_ref$value?[]:_ref$value,onChange=_ref.onChange,_ref$label=_ref.label,label=void 0===_ref$label?"Resim Yükle":_ref$label,_ref$isMultiple=_ref.isMultiple,isMultiple=void 0!==_ref$isMultiple&&_ref$isMultiple,_useState=(0,react.useState)(value),_useState2=(0,slicedToArray.Z)(_useState,2),selectedImages=_useState2[0],setSelectedImages=_useState2[1],_useState3=(0,react.useState)(0),_useState4=(0,slicedToArray.Z)(_useState3,2),currentImageIndex=_useState4[0],setCurrentImageIndex=_useState4[1],inputRef=(0,react.useRef)(null),theme=(0,utils_theme.F)(),styleVariables={"--primaryColor":theme.primaryColor};return(0,jsx_runtime.jsxs)(Grid.Z,{container:!0,direction:"column",children:[(0,jsx_runtime.jsx)(Grid.Z,{children:(0,jsx_runtime.jsx)("div",{className:UploadImage_module.gallery,children:selectedImages.map((function(image,index){return(0,jsx_runtime.jsxs)("div",{className:UploadImage_module.imageContainer,style:styleVariables,children:[(0,jsx_runtime.jsx)("img",{src:image.src,alt:"Selected ".concat(index),className:UploadImage_module[currentImageIndex===index?"active":""],onClick:function onClick(){return setCurrentImageIndex(index)}}),(0,jsx_runtime.jsx)(Button.Z,{style:{position:"absolute",top:0,left:0,width:"100%",background:theme.errorColor},icon:(0,jsx_runtime.jsx)(Icons.ThrashSvg,{}),onClick:function onClick(){return function handleRemoveImage(index){var newImages=(0,toConsumableArray.Z)(selectedImages);newImages.splice(index,1),setSelectedImages(newImages),onChange(newImages)}(index)}})]},index)}))})}),(0,jsx_runtime.jsxs)(Grid.Z,{children:[(0,jsx_runtime.jsx)(Button.Z,{onClick:function handleOpenFileInput(){inputRef.current.click()},icon:(0,jsx_runtime.jsx)(Icons.UploadSvg,{}),style:{width:"100%"},label:"  "+label}),(0,jsx_runtime.jsx)("input",{ref:inputRef,type:"file",accept:"image/*",multiple:isMultiple,style:{display:"none"},onChange:function handleImageChange(e){for(var files=e.target.files,imageArray=[],i=0;i<files.length;i++){var file=files[i];if(file){var reader=new FileReader;reader.onload=function(event){imageArray.push({src:event.target.result}),imageArray.length===files.length&&(setSelectedImages(imageArray),onChange(imageArray))},reader.readAsDataURL(file)}}}})]})]})};UploadImage.__docgenInfo={description:"",methods:[],displayName:"UploadImage",props:{value:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1},label:{defaultValue:{value:"'Resim Yükle'",computed:!1},description:"",type:{name:"string"},required:!1},isMultiple:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onChange:{description:"",type:{name:"func"},required:!1}}};var _Docs$parameters,_Docs$parameters2,_Docs$parameters2$doc,UploadImage_UploadImage=UploadImage,UploadImage_stories={title:"UploadImage",component:UploadImage_UploadImage,parameters:{},tags:["autodocs"],argTypes:{}},Docs=function Story(args){return(0,jsx_runtime.jsx)(utils_theme.Z,{children:(0,jsx_runtime.jsx)(UploadImage_UploadImage,(0,objectSpread2.Z)({},args))})}.bind({});Docs.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Docs.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Docs$parameters=Docs.parameters)||void 0===_Docs$parameters?void 0:_Docs$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => {\n  return <ThemeProvider>\n      <UploadImage {...args}></UploadImage>\n    </ThemeProvider>;\n}"},null===(_Docs$parameters2=Docs.parameters)||void 0===_Docs$parameters2||null===(_Docs$parameters2$doc=_Docs$parameters2.docs)||void 0===_Docs$parameters2$doc?void 0:_Docs$parameters2$doc.source)})});var __namedExportsOrder=["Docs"]},"./src/components/Button/Button.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Button_Button}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),utils_theme=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/utils/theme.js")),Button_module={button:"Button_button__wiIYs",icon:"Button_icon__KeIH3",primary:"Button_primary__XYgy-",secondary:"Button_secondary__QwN49",transparent:"Button_transparent__33FBX",rounded:"Button_rounded__+9j5O"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),sizes={sm:{paddingSize:.5,fontSize:.75},md:{paddingSize:.75,fontSize:1},lg:{paddingSize:1,fontSize:1.2}},Button=function Button(_ref){var _ref$label=_ref.label,label=void 0===_ref$label?"Button":_ref$label,size=_ref.size,onClick=_ref.onClick,disabled=_ref.disabled,type=_ref.type,rounded=_ref.rounded,icon=_ref.icon,noShadow=_ref.noShadow,_ref$style=_ref.style,style=void 0===_ref$style?{}:_ref$style,ref=_ref.ref,theme=(0,utils_theme.F)(),styles=(0,objectSpread2.Z)((0,objectSpread2.Z)({},style),{},{"--primaryColor":theme.primaryColor,"--secondaryColor":theme.secondaryColor,"--paddingSize":sizes[null!=size?size:"md"].paddingSize,"--fontSize":sizes[null!=size?size:"md"].fontSize,"--shadowColor":noShadow?"transparent":theme.shadowColor,"--disabledColor":theme.disabledColor});return(0,jsx_runtime.jsxs)("button",{ref:ref,className:"".concat(Button_module.button," ").concat(Button_module[null!=type?type:"primary"]," ").concat(rounded?Button_module.rounded:""," ").concat(icon?Button_module.icon:""),style:styles,onClick:onClick,disabled:disabled,children:[icon,label]})};Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{label:{defaultValue:{value:"'Button'",computed:!1},description:"",type:{name:"string"},required:!1},style:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},size:{description:"",type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1}]},required:!1},onClick:{description:"",type:{name:"func"},required:!1},disabled:{description:"",type:{name:"bool"},required:!1},type:{description:"",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'transparent'",computed:!1}]},required:!1},rounded:{description:"",type:{name:"bool"},required:!1},icon:{description:"",type:{name:"any"},required:!1},noShadow:{description:"",type:{name:"bool"},required:!1},ref:{description:"",type:{name:"custom",raw:"PropTypes.ref"},required:!1}}};var Button_Button=Button}}]);