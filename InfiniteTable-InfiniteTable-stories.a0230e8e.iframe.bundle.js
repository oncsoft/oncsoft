"use strict";(self.webpackChunkonc_react_ui=self.webpackChunkonc_react_ui||[]).push([[287],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _toConsumableArray}});var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.Z)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/components/InfiniteTable/InfiniteTable.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Docs:function(){return Docs},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return InfiniteTable_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),theme=__webpack_require__("./src/utils/theme.js"),InfiniteScroll=__webpack_require__("./src/components/InfiniteScroll/InfiniteScroll.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),InfiniteTable_InfiniteTable=function InfiniteTable(_ref){var _ref$data=_ref.data,data=void 0===_ref$data?[]:_ref$data,_ref$columns=_ref.columns,columns=void 0===_ref$columns?[]:_ref$columns,fetchData=_ref.fetchData,_ref$itemHeight=_ref.itemHeight,itemHeight=void 0===_ref$itemHeight?50:_ref$itemHeight,_ref$containerHeight=_ref.containerHeight,containerHeight=void 0===_ref$containerHeight?300:_ref$containerHeight,_ref$loadingText=_ref.loadingText,loadingText=void 0===_ref$loadingText?"Loading...":_ref$loadingText,_ref$virtualized=_ref.virtualized,virtualized=void 0===_ref$virtualized||_ref$virtualized,_ref$spinner=_ref.spinner,spinner=void 0===_ref$spinner||_ref$spinner,_useState=(0,react.useState)([]),_useState2=(0,slicedToArray.Z)(_useState,2),columnRefs=_useState2[0],setColumnRefs=_useState2[1];(0,react.useEffect)((function(){if(columns.length>0&&data.length>0){var refs=columns.map((function(){return data.map((function(){return react.createRef()}))}));setColumnRefs(refs)}}),[columns,data]);return(0,jsx_runtime.jsxs)("div",{className:"table-container",children:[(0,jsx_runtime.jsx)("div",{className:"table-header",children:columns.map((function(column,columnIndex){return(0,jsx_runtime.jsx)("div",{className:"table-cell",children:column.header},columnIndex)}))}),data.length>0&&(0,jsx_runtime.jsx)(InfiniteScroll.Z,{data:data,renderItem:function renderItem(item,rowIndex){var itemRefs=columns.map((function(){return react.createRef()}));return(0,jsx_runtime.jsx)("div",{className:"table-row",children:columns.map((function(column,columnIndex){var ref=itemRefs[columnIndex];return columnRefs.length&&(columnRefs[columnIndex][rowIndex]=ref),(0,jsx_runtime.jsx)("div",{className:"table-cell",title:item[column.key],ref:ref,children:(0,jsx_runtime.jsx)("span",{children:item[column.key]})},columnIndex)}))})},itemHeight:itemHeight,containerHeight:containerHeight,fetchData:fetchData,loadingText:loadingText,virtualized:virtualized,spinner:spinner})]})};InfiniteTable_InfiniteTable.__docgenInfo={description:"",methods:[],displayName:"InfiniteTable",props:{data:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1},columns:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1},itemHeight:{defaultValue:{value:"50",computed:!1},description:"",type:{name:"number"},required:!1},containerHeight:{defaultValue:{value:"300",computed:!1},description:"",type:{name:"number"},required:!1},loadingText:{defaultValue:{value:"'Loading...'",computed:!1},description:"",type:{name:"string"},required:!1},virtualized:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},spinner:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},fetchData:{description:"",type:{name:"func"},required:!1}}};var _Docs$parameters,_Docs$parameters2,_Docs$parameters2$doc,components_InfiniteTable_InfiniteTable=InfiniteTable_InfiniteTable,InfiniteTable_stories={title:"InfiniteTable",component:components_InfiniteTable_InfiniteTable,parameters:{},tags:["autodocs"],argTypes:{}},Docs=function Story(args){var _useState=(0,react.useState)([{id:1,name:"John Doesadasdsa sadasda sdsadas dasd sda sa d sa",email:"john@example.com",age:30},{id:2,name:"Jane Smith",email:"jane@example.com",age:25},{id:1,name:"John Doesadasdsa sadasda sdsadas dasd sda sa d sa",email:"john@example.com",age:30},{id:2,name:"Jane Smith",email:"jane@example.com",age:25},{id:1,name:"John Doesadasdsa sadasda sdsadas dasd sda sa d sa",email:"john@example.com",age:30},{id:2,name:"Jane Smith",email:"jane@example.com",age:25}]),_useState2=(0,slicedToArray.Z)(_useState,2),sampleData=_useState2[0],setSampleData=_useState2[1],sampleData2=[{id:1,name:"John Doe",email:"john@example.com",age:30},{id:2,name:"Jane Smith",email:"jane@example.com",age:25}];return(0,jsx_runtime.jsx)(theme.Z,{children:(0,jsx_runtime.jsx)(components_InfiniteTable_InfiniteTable,(0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{data:sampleData,columns:[{key:"id",header:"ID"},{key:"name",header:"Name"},{key:"email",header:"Email"},{key:"age",header:"Age"}],fetchData:function fetchMoreData(){var newData=[{id:3,name:"Alice Johnson",email:"alice@example.com",age:28},{id:4,name:"Bob Wilsonsadasd asdasdasdasdsadad asdsadasdsasdad",email:"bob@example.com",age:35}];setSampleData((function(current){return[].concat((0,toConsumableArray.Z)(current),sampleData2,newData)}))}}))})}.bind({});Docs.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Docs.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Docs$parameters=Docs.parameters)||void 0===_Docs$parameters?void 0:_Docs$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => {\n  const [sampleData, setSampleData] = useState([{\n    id: 1,\n    name: 'John Doesadasdsa sadasda sdsadas dasd sda sa d sa',\n    email: 'john@example.com',\n    age: 30\n  }, {\n    id: 2,\n    name: 'Jane Smith',\n    email: 'jane@example.com',\n    age: 25\n  }, {\n    id: 1,\n    name: 'John Doesadasdsa sadasda sdsadas dasd sda sa d sa',\n    email: 'john@example.com',\n    age: 30\n  }, {\n    id: 2,\n    name: 'Jane Smith',\n    email: 'jane@example.com',\n    age: 25\n  }, {\n    id: 1,\n    name: 'John Doesadasdsa sadasda sdsadas dasd sda sa d sa',\n    email: 'john@example.com',\n    age: 30\n  }, {\n    id: 2,\n    name: 'Jane Smith',\n    email: 'jane@example.com',\n    age: 25\n  }\n  // Add more data here...\n  ]);\n\n  // Sample data\n  const sampleData2 = [{\n    id: 1,\n    name: 'John Doe',\n    email: 'john@example.com',\n    age: 30\n  }, {\n    id: 2,\n    name: 'Jane Smith',\n    email: 'jane@example.com',\n    age: 25\n  }\n  // Add more data here...\n  ];\n\n  // Define columns for the table\n  const columns = [{\n    key: 'id',\n    header: 'ID'\n  }, {\n    key: 'name',\n    header: 'Name'\n  }, {\n    key: 'email',\n    header: 'Email'\n  }, {\n    key: 'age',\n    header: 'Age'\n  }\n  // Add more columns here...\n  ];\n\n  // Function to simulate fetching more data\n  const fetchMoreData = () => {\n    // Simulate an API call or data fetching logic here\n    // For this example, we'll just add more sample data\n    const newData = [{\n      id: 3,\n      name: 'Alice Johnson',\n      email: 'alice@example.com',\n      age: 28\n    }, {\n      id: 4,\n      name: 'Bob Wilsonsadasd asdasdasdasdsadad asdsadasdsasdad',\n      email: 'bob@example.com',\n      age: 35\n    }\n    // Add more data here...\n    ];\n\n    setSampleData(current => [...current, ...sampleData2, ...newData]);\n  };\n  return <ThemeProvider>\n      <InfiniteTable {...args} data={sampleData} columns={columns} fetchData={fetchMoreData} />\n    </ThemeProvider>;\n}"},null===(_Docs$parameters2=Docs.parameters)||void 0===_Docs$parameters2||null===(_Docs$parameters2$doc=_Docs$parameters2.docs)||void 0===_Docs$parameters2$doc?void 0:_Docs$parameters2$doc.source)})});var __namedExportsOrder=["Docs"]},"./src/components/Icon/Icon.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Icon_Icon}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),utils_theme=__webpack_require__("./src/utils/theme.js"),Icon_module={icon:"Icon_icon__zcHyd",primary:"Icon_primary__p6Qbk",secondary:"Icon_secondary__2K93I",error:"Icon_error__Gh8lN",disabled:"Icon_disabled__LXMVP"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Icon=(0,react.forwardRef)((function(_ref,ref){var _ref$size=_ref.size,size=void 0===_ref$size?"1rem":_ref$size,type=_ref.type,children=_ref.children,className=_ref.className,theme=(0,utils_theme.F)(),styleVariables={"--primaryColor":theme.primaryColor,"--errorColor":theme.errorColor,"--disabledColor":theme.disabledColor};return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:react.Children.map(children,(function(child){return react.isValidElement(child)?react.cloneElement(child,{ref:ref,width:size,height:size,style:(0,objectSpread2.Z)({},styleVariables),className:"".concat(Icon_module.icon," ").concat(Icon_module[type]," ").concat(className),preserveAspectRatio:"none",version:"1.1"}):null}))})}));Icon.displayName="Icon",Icon.defaultProps={type:"primary"},Icon.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{size:{defaultValue:{value:"'1rem'",computed:!1},description:"",type:{name:"string"},required:!1},type:{defaultValue:{value:"'primary'",computed:!1},description:"",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'disabled'",computed:!1},{value:"'error'",computed:!1}]},required:!1},className:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"object"},required:!1}}};var Icon_Icon=(0,react.memo)(Icon)},"./src/components/InfiniteScroll/InfiniteScroll.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return InfiniteScroll_InfiniteScroll}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),InfiniteScroll_module_infiniteScrollContainer="InfiniteScroll_infiniteScrollContainer__6-4IN",InfiniteScroll_module_child="InfiniteScroll_child__2Te+9",Spinner=__webpack_require__("./src/components/Spinner/Spinner.js"),utils_theme=__webpack_require__("./src/utils/theme.js"),useInView=__webpack_require__("./src/hooks/useInView.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),InfiniteScroll=function InfiniteScroll(_ref){var _useInView,_ref$data=_ref.data,data=void 0===_ref$data?[]:_ref$data,renderItem=_ref.renderItem,itemHeight=_ref.itemHeight,containerHeight=_ref.containerHeight,fetchData=_ref.fetchData,_ref$loadingText=_ref.loadingText,loadingText=void 0===_ref$loadingText?"Yükleniyor...":_ref$loadingText,_ref$virtualized=_ref.virtualized,virtualized=void 0!==_ref$virtualized&&_ref$virtualized,_ref$spinner=_ref.spinner,spinner=void 0===_ref$spinner||_ref$spinner,lastItemRef=(0,react.useRef)(),theme=(0,utils_theme.F)(),isIntersecting=null!==(_useInView=(0,useInView.useInView)(lastItemRef,{threshold:.1,rootMargin:"1px"}))&&void 0!==_useInView&&_useInView,styleVariables={"--secondaryColor":theme.secondaryColor},_useState=(0,react.useState)(0),_useState2=(0,slicedToArray.Z)(_useState,2),startIndex=_useState2[0],setStartIndex=_useState2[1],_useState3=(0,react.useState)(Math.floor(containerHeight/itemHeight)),_useState4=(0,slicedToArray.Z)(_useState3,2),endIndex=_useState4[0],setEndIndex=_useState4[1],containerRef=(0,react.useRef)(),visibleData=virtualized?data.slice(startIndex,endIndex):data;(0,react.useEffect)((function(){isIntersecting&&requestAnimationFrame(loadMoreItems)}),[isIntersecting]),(0,react.useEffect)((function(){handleScroll()}),[data,containerHeight,itemHeight]);var loadMoreItems=function loadMoreItems(){fetchData()},handleScroll=function handleScroll(){if(containerRef.current&&virtualized){var scrollTop=containerRef.current.scrollTop;setStartIndex(Math.floor(scrollTop/itemHeight)),setEndIndex(Math.min(data.length,startIndex+Math.ceil(containerHeight/itemHeight)))}};return(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("div",{ref:containerRef,onScroll:handleScroll,style:{height:containerHeight,overflow:"auto"},children:(0,jsx_runtime.jsxs)("div",{className:InfiniteScroll_module_infiniteScrollContainer,style:(0,objectSpread2.Z)({height:visibleData.length<containerHeight/itemHeight-1?containerHeight:data.length*itemHeight,position:"relative",paddingTop:virtualized?startIndex*itemHeight:0},styleVariables),children:[visibleData.map((function(item,index){return(0,jsx_runtime.jsx)("div",{className:InfiniteScroll_module_child,style:{height:itemHeight},children:renderItem(item,index)},index)})),(0,jsx_runtime.jsx)("div",{ref:lastItemRef,children:spinner&&(0,jsx_runtime.jsx)(Spinner.Z,{text:loadingText,type:"spot",style:{position:"unset"}})})]})})})};InfiniteScroll.__docgenInfo={description:"",methods:[],displayName:"InfiniteScroll",props:{data:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1},loadingText:{defaultValue:{value:"'Yükleniyor...'",computed:!1},description:"",type:{name:"string"},required:!1},virtualized:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},spinner:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},renderItem:{description:"",type:{name:"func"},required:!1},itemHeight:{description:"",type:{name:"number"},required:!1},containerHeight:{description:"",type:{name:"number"},required:!1},fetchData:{description:"",type:{name:"func"},required:!1}}};var InfiniteScroll_InfiniteScroll=InfiniteScroll},"./src/components/Spinner/Spinner.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Spinner_Spinner}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),Spinner_module=(__webpack_require__("./node_modules/react/index.js"),{spinnerContainer:"Spinner_spinnerContainer__vzmN8",svgIcon:"Spinner_svgIcon__W0Nk4",spin:"Spinner_spin__Q9zsz",text:"Spinner_text__vwuWc",spot:"Spinner_spot__N30F5",spotlight:"Spinner_spotlight__Uhfpu"}),Icon=__webpack_require__("./src/components/Icon/Icon.js"),Icons=__webpack_require__("./src/components/Icons/index.js"),utils_theme=__webpack_require__("./src/utils/theme.js"),Grid=__webpack_require__("./src/components/Grid/Grid.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Spinner=function Spinner(_ref){var text=_ref.text,_ref$type=_ref.type,type=void 0===_ref$type?"default":_ref$type,_ref$size=_ref.size,size=void 0===_ref$size?"1rem":_ref$size,style=_ref.style,theme=(0,utils_theme.F)(),styleVariables={"--primaryColor":theme.primaryColor,"--secondaryColor":theme.secondaryColor,"--size":size},styles=(0,objectSpread2.Z)((0,objectSpread2.Z)({},style),styleVariables);return(0,jsx_runtime.jsxs)(Grid.Z,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",className:"".concat(Spinner_module.spinnerContainer),style:styles,children:[(0,jsx_runtime.jsx)(Grid.Z,{children:(0,jsx_runtime.jsx)(Icon.Z,{size:size,className:"".concat(Spinner_module.svgIcon),children:(0,jsx_runtime.jsx)(Icons.SpinnerSvg,{})})}),(0,jsx_runtime.jsx)(Grid.Z,{className:"".concat(Spinner_module[type]," ").concat(Spinner_module.text),style:styleVariables,children:text})]})};Spinner.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{type:{defaultValue:{value:"'default'",computed:!1},description:"",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'spot'",computed:!1}]},required:!1},size:{defaultValue:{value:"'1rem'",computed:!1},description:"",type:{name:"enum",value:[{value:"'1rem'",computed:!1},{value:"'2rem'",computed:!1},{value:"'3rem'",computed:!1}]},required:!1},text:{description:"",type:{name:"string"},required:!1},style:{description:"",type:{name:"custom",raw:"PropTypes.style"},required:!1}}};var Spinner_Spinner=Spinner},"./src/hooks/useInView.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){__webpack_require__("./node_modules/react/index.js")}}]);