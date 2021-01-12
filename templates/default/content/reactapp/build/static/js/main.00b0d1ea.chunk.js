(this["webpackJsonpreactapp"] = this["webpackJsonpreactapp"] || []).push([[0],{

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(8);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./src/blog.css
var blog = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 5 modules
var slicedToArray = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(23);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js
var index_es = __webpack_require__(66);

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.es.js
var free_solid_svg_icons_index_es = __webpack_require__(68);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Dialog/Dialog.js + 9 modules
var Dialog = __webpack_require__(152);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(151);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(150);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/List/List.js
var List = __webpack_require__(149);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AppBar/AppBar.js
var AppBar = __webpack_require__(146);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js
var Toolbar = __webpack_require__(147);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(148);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Close.js
var Close = __webpack_require__(67);
var Close_default = /*#__PURE__*/__webpack_require__.n(Close);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Slide/Slide.js
var Slide = __webpack_require__(144);

// CONCATENATED MODULE: ./src/Blog_menu.js
var useStyles=Object(makeStyles["a" /* default */])(function(theme){return{appBar:{position:'relative',backgroundColor:'#df0000'},title:{marginLeft:theme.spacing(2),flex:1}};});var Blog_menu_Transition=/*#__PURE__*/Object(react["forwardRef"])(function Transition(props,ref){return/*#__PURE__*/Object(jsx_runtime["jsx"])(Slide["a" /* default */],Object(objectSpread2["a" /* default */])({direction:"up",ref:ref},props));});var Blog_menu_Blog_menu=function Blog_menu(props){var mounted=Object(react["useRef"])();var testpath='index.php?m=link&c=index&a=menu';var _useState=Object(react["useState"])(null),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),jsondata=_useState2[0],datachange=_useState2[1];var classes=useStyles();var _useState3=Object(react["useState"])(false),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),open=_useState4[0],setOpen=_useState4[1];var handleClickOpen=function handleClickOpen(){setOpen(true);};var handleClose=function handleClose(){setOpen(false);};var history=Object(react_router["f" /* useHistory */])();var pagelink=function pagelink(url){history.push(url);setOpen(false);};Object(react["useEffect"])(function(){if(!mounted.current){//componentDidMount
mounted.current=true;axios_default.a.get(testpath,{}).then(function(response){var res=response.data;datachange(res.data);}).catch(function(err){console.log(err);});}else{//componentDidUpdate
}},[props,jsondata]);return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])(Dialog["a" /* default */],{fullScreen:true,open:open,onClose:handleClose,TransitionComponent:Blog_menu_Transition,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(AppBar["a" /* default */],{className:classes.appBar,children:/*#__PURE__*/Object(jsx_runtime["jsxs"])(Toolbar["a" /* default */],{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(IconButton["a" /* default */],{edge:"start",color:"inherit",onClick:handleClose,"aria-label":"close",children:/*#__PURE__*/Object(jsx_runtime["jsx"])(Close_default.a,{})}),/*#__PURE__*/Object(jsx_runtime["jsx"])(Typography["a" /* default */],{variant:"h6",className:classes.title,children:"MENU"})]})}),/*#__PURE__*/Object(jsx_runtime["jsx"])(List["a" /* default */],{children:jsondata===null?"":Object.entries(jsondata).map(function(t,k){return t[1].typeid==54?/*#__PURE__*/Object(jsx_runtime["jsx"])(ListItem["a" /* default */],{button:true,onClick:function onClick(e){return pagelink(t[1].url);},children:/*#__PURE__*/Object(jsx_runtime["jsx"])(ListItemText["a" /* default */],{primary:t[1].name})},t[0]):'';})})]}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"w-100 blogheader",children:/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"container bloglogo pt-3 pb-3",children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"row justify-content-end d-lg-none",children:/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"menubtn",onClick:handleClickOpen,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(index_es["a" /* FontAwesomeIcon */],{icon:free_solid_svg_icons_index_es["a" /* fas */].faAlignJustify,size:"2x",color:"#afafaf"})," "]})}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"row justify-content-end d-none d-lg-flex",children:jsondata===null?"":Object.entries(jsondata).map(function(t,k){return t[1].typeid==54?/*#__PURE__*/Object(jsx_runtime["jsx"])(react_router_dom["b" /* Link */],{to:t[1].url,children:/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"ml-3 mr-3",children:t[1].name})},t[0]):'';})})]})}),props.children]});};/* harmony default export */ var src_Blog_menu = (Blog_menu_Blog_menu);
// CONCATENATED MODULE: ./src/empty.jpg
/* harmony default export */ var empty = (__webpack_require__.p + "static/media/empty.bac9d7f0.jpg");
// CONCATENATED MODULE: ./src/Blog_index.js
var Blog_index_Blog_index=function Blog_index(props){var mounted=Object(react["useRef"])();var testpath='index.php?m=content&c=index&a=getallnewsp2';var _useState=Object(react["useState"])(null),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),jsondata=_useState2[0],datachange=_useState2[1];Object(react["useEffect"])(function(){if(!mounted.current){//componentDidMount
console.log("初始化");mounted.current=true;axios_default.a.get(testpath,{}).then(function(response){var res=response.data;datachange(res.data);}).catch(function(err){console.log(err);});}else{//componentDidUpdate
console.log(jsondata);console.log('觸發內容更動function');}},[props,jsondata]);return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"center1200",children:/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"container",children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"row mt-4",children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"col-12",children:/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"specialtitle",children:"\u5C08\u984C\u65B0\u805E"})}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"col-12 col-lg-6 p-1",children:jsondata===null?"":Object.entries(jsondata[0].data).map(function(t,k){return k==0?/*#__PURE__*/Object(jsx_runtime["jsx"])(react_router_dom["b" /* Link */],{to:'/Blog_detail?id='+t[1].id,children:/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"col heimax fullimg",style:{backgroundImage:"url(".concat(t[1].thumb==''?empty:t[1].thumb,")")},children:/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"txtbg",children:t[1].title})},t[0])},t[0]):'';})}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"col-12 col-lg-6",children:/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"row",children:jsondata===null?"":Object.entries(jsondata[0].data).map(function(t,k){return k>0&&k<5?/*#__PURE__*/Object(jsx_runtime["jsx"])(react_router_dom["b" /* Link */],{to:'/Blog_detail?id='+t[1].id,children:/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"col-6 p-1 heimin",children:/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"fulldiv fullimg",style:{backgroundImage:"url(".concat(t[1].thumb==''?empty:t[1].thumb,")")},children:/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"txtbg",children:t[1].title})})},t[0])},t[0]):'';})})})]}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"row mt-4 mb-4",children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"col-12 col-lg-8",children:/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"row",children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"col-12",children:/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"specialtitle",children:"\u71B1\u9580\u65B0\u805E"})}),jsondata===null?"":Object.entries(jsondata[1].data).map(function(t,k){return/*#__PURE__*/Object(jsx_runtime["jsx"])(react_router_dom["b" /* Link */],{to:'/Blog_detail?id='+t[1].id,children:/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"col-4 p-1 heimin",children:/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"fulldiv fullimg",style:{backgroundImage:"url(".concat(t[1].thumb==''?empty:t[1].thumb,")")},children:/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"txtbg",children:t[1].title})})},t[0])},t[0]);})]})}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"col-12 col-lg-4",children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"col-12",children:/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"specialtitle",children:"\u570B\u5916\u65B0\u805E"})}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"setlists",children:/*#__PURE__*/Object(jsx_runtime["jsx"])("ul",{children:jsondata===null?"":Object.entries(jsondata[3].data).map(function(t,k){return/*#__PURE__*/Object(jsx_runtime["jsx"])(react_router_dom["b" /* Link */],{to:'/Blog_detail?id='+t[1].id,children:/*#__PURE__*/Object(jsx_runtime["jsx"])("li",{children:t[1].title},t[0])},t[0]);})})})]})]})]})})});};/* harmony default export */ var src_Blog_index = (Blog_index_Blog_index);
// CONCATENATED MODULE: ./src/try.png
/* harmony default export */ var src_try = (__webpack_require__.p + "static/media/try.e026cca0.png");
// CONCATENATED MODULE: ./src/try2.png
/* harmony default export */ var try2 = (__webpack_require__.p + "static/media/try2.b59cb9ac.png");
// CONCATENATED MODULE: ./src/try3.png
/* harmony default export */ var try3 = (__webpack_require__.p + "static/media/try3.b04b1a0f.png");
// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(43);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);

// CONCATENATED MODULE: ./src/Blog_detail.js
var _this=undefined;var Blog_detail_Blog_detail=function Blog_detail(props){var mounted=Object(react["useRef"])();var _useState=Object(react["useState"])(null),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),jsondata=_useState2[0],datachange=_useState2[1];var _useState3=Object(react["useState"])(props.location.search.replace('?id=','')),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),pageid=_useState4[0],idchange=_useState4[1];var _useState5=Object(react["useState"])(props.location.search.replace('?id=','')),_useState6=Object(slicedToArray["a" /* default */])(_useState5,2),_pageid=_useState6[0],_idchange=_useState6[1];var history=Object(react_router["f" /* useHistory */])();var createMarkup=function createMarkup(str){return{__html:str};};var pagelink=function pagelink(id){history.push("/Blog_detail?id="+id);};var getapi=function getapi(){axios_default.a.get('index.php?m=content&c=index&a=show&catid=6&id='+pageid,{}).then(function(response){var res=response.data;datachange(res.data);}).catch(function(err){console.log(err);});};Object(react["useEffect"])(function(){var self=_this;if(!mounted.current){//componentDidMount
mounted.current=true;console.log(pageid);getapi();}else{//componentDidUpdate
console.log('觸發內容更動function');idchange(props.location.search.replace('?id=',''));if(pageid!=_pageid){console.log("pageid有變動");_idchange(props.location.search.replace('?id=',''));getapi();}}},[props,jsondata,pageid]);return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"center1200",children:/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"container",children:/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"row mt-4 mb-4",children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"col-12 col-lg-8",children:/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"contentnews row",children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"col-12 pagetitle",children:jsondata==null?'':jsondata.title}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"col-12",dangerouslySetInnerHTML:jsondata==null?createMarkup(''):createMarkup(jsondata.content)}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"col-12",children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:jsondata!=null&&jsondata.prev.title=='empty'?'pagebtn float-right col-4 d-none':'pagebtn float-right col-4',onClick:function onClick(e){return pagelink(jsondata==null?'':jsondata.prev.id,e);},children:jsondata==null?'':jsondata.prev.title}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:jsondata!=null&&jsondata.next.title=='empty'?'pagebtn float-left col-4 d-none':'pagebtn float-left col-4',onClick:function onClick(e){return pagelink(jsondata==null?'':jsondata.next.id,e);},children:jsondata==null?'':jsondata.next.title})]})]})}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"col-4 rightbar d-none d-lg-block",children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])("img",{src:src_try})}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])("img",{src:try2})}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])("img",{src:try3})})]})]})})})});};/* harmony default export */ var src_Blog_detail = (Blog_detail_Blog_detail);
// CONCATENATED MODULE: ./src/Blog_footer.js
var Blog_footer_Blog_footer=function Blog_footer(props){return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"w-100 footerbg",children:/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"container",children:/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"row",children:/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"col-12",children:/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"row justify-content-center footerright",children:"@2020 Trang web gi\u1EA3i tr\xED b\u1EA3n quy\u1EC1n gi\u1EA5y ph\xE9p \u0111\u01B0\u1EE3c ch\u1EE9ng nh\u1EADn c\u1EE7a PAGCOR Philippines"})})})})})});};/* harmony default export */ var src_Blog_footer = (Blog_footer_Blog_footer);
// CONCATENATED MODULE: ./src/Blog_list.js
var Blog_list_this=undefined;var Blog_list_Blog_detail=function Blog_detail(props){var mounted=Object(react["useRef"])();var _useState=Object(react["useState"])(null),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),jsondata=_useState2[0],datachange=_useState2[1];var _useState3=Object(react["useState"])(null),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),catid=_useState4[0],idchange=_useState4[1];var _useState5=Object(react["useState"])(null),_useState6=Object(slicedToArray["a" /* default */])(_useState5,2),_catid=_useState6[0],_idchange=_useState6[1];var _useState7=Object(react["useState"])(null),_useState8=Object(slicedToArray["a" /* default */])(_useState7,2),pageid=_useState8[0],pageidchange=_useState8[1];var _useState9=Object(react["useState"])(null),_useState10=Object(slicedToArray["a" /* default */])(_useState9,2),_pageid=_useState10[0],_pageidchange=_useState10[1];var getapi=function getapi(){console.log(catid);axios_default()({method:'get',url:'index.php?m=content&c=index&a=getallnewsp3',params:{'catid':catid,'page':pageid}}).then(function(response){var res=response.data;datachange(res.data);}).catch(function(err){console.log(err);});};var createMarkup=function createMarkup(str){return{__html:str};};var checkurl=function checkurl(string){var obj=new Object();if(string.indexOf("?")!=-1){var string=string.substr(string.indexOf("?")+1);var strs=string.split("&");for(var i=0;i<strs.length;i++){var tempArr=strs[i].split("=");obj[tempArr[0]]=tempArr[1];}}return obj;};Object(react["useEffect"])(function(){var self=Blog_list_this;var url=checkurl(window.location.href);if(!mounted.current){//componentDidMount
mounted.current=true;idchange(url.id);pageidchange(url.page);//getapi();
}else{//componentDidUpdate
var url=checkurl(window.location.href);idchange(url.id);pageidchange(url.page);console.log('觸發內容更動function');if(catid!=_catid||pageid!=_pageid){console.log("catid有變動");_idchange(url.id);_pageidchange(url.page);getapi();}}},[props,jsondata,catid,pageid]);return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"center1200",children:/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"container",children:/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"row mt-4 mb-4",children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"col-12",children:/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"specialtitle",children:[catid==9?'專題新聞':'',catid==10?'熱門新聞':'',catid==6?'國外新聞':'']})}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"col-12 col-lg-8",children:/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"contentnews row",children:[jsondata===null?"":Object.entries(jsondata.data).map(function(t,k){return/*#__PURE__*/Object(jsx_runtime["jsx"])(react_router_dom["b" /* Link */],{to:'/Blog_detail?id='+t[1].id,children:/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"col-12 onelist",children:/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"row",children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"col-12 col-lg-3",children:/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"oneimg fullimg",style:{backgroundImage:"url(".concat(t[1].thumb==''?empty:t[1].thumb,")")}})}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"col-12 col-lg-9",children:/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"row",children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"col-12 p-2",children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"imgtitle",children:t[1].title}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"imgdetail",children:[t[1].description,"..."]})]}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"imgmore",children:"\u8A73\u5168\u6587"})]})})]})})},t[0]);}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"pages",dangerouslySetInnerHTML:jsondata===null?createMarkup(''):createMarkup(jsondata.pages)})]})}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"col-4 rightbar d-none d-lg-block",children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])("img",{src:src_try})}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])("img",{src:try2})}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])("img",{src:try3})})]})]})})})});};/* harmony default export */ var Blog_list = (Blog_list_Blog_detail);
// EXTERNAL MODULE: ./src/Layout.css
var Layout = __webpack_require__(108);

// CONCATENATED MODULE: ./src/FirstPage.js
var FirstPage_FirstPage=function FirstPage(props){var StyleSheet={width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"};var testpath='index.php?m=content&c=index&a=reacttest';console.log(props);var history=Object(react_router["f" /* useHistory */])();var handleClick=function handleClick(){history.push("/second?id=1");changeNum(10);jquery_default()(".testbox").css("marginLeft",150);axios_default.a.get(testpath,{}).then(function(response){var res=response.data;console.log(res);}).catch(function(err){console.log(err);});};var mounted=Object(react["useRef"])();var _useState=Object(react["useState"])(0),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),num=_useState2[0],changeNum=_useState2[1];Object(react["useEffect"])(function(){if(!mounted.current){//componentDidMount
console.log("初始化");mounted.current=true;}else{//componentDidUpdate
console.log('state植被換掉');}},[props,num]);return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{style:StyleSheet,children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("h1",{style:{color:"#000",fontFamily:"Microsoft JhengHei"},children:["\u6211\u662F\u7B2C\u4E00\u9801",num]}),/*#__PURE__*/Object(jsx_runtime["jsx"])(react_router_dom["b" /* Link */],{to:"/second",style:{marginLeft:"20px"},children:"\u9EDE\u6211\u9023\u5230\u7B2C\u4E8C\u9801"}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"mybtn",onClick:handleClick,children:"js\u9023\u6211\u7981\u57302\u8449"}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"mybtn",onClick:props.changefather,children:["\u547C\u53EB\u8CE6\u6539PORT",props.id]}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"testbox"})]});};/* harmony default export */ var src_FirstPage = (FirstPage_FirstPage);
// CONCATENATED MODULE: ./src/SecondPage.js
var SecondPage_SecondPage=function SecondPage(props){var StyleSheet={width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"};console.log(props);console.log(props.match.params);return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{style:StyleSheet,children:/*#__PURE__*/Object(jsx_runtime["jsx"])("h1",{style:{color:"#000",fontFamily:"Microsoft JhengHei"},children:"\u6211\u662F\u7B2C\u4E8C\u9801"})});};/* harmony default export */ var src_SecondPage = (SecondPage_SecondPage);
// CONCATENATED MODULE: ./src/Blog.js
var Blog_Blog=function Blog(){var _useState=Object(react["useState"])(0),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),pageid=_useState2[0],changeid=_useState2[1];return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(react_router_dom["a" /* HashRouter */],{children:/*#__PURE__*/Object(jsx_runtime["jsx"])(react_router["c" /* Switch */],{children:/*#__PURE__*/Object(jsx_runtime["jsxs"])(src_Blog_menu,{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(react_router["a" /* Route */],{exact:true,path:"/",render:function render(){return/*#__PURE__*/Object(jsx_runtime["jsx"])(src_Blog_index,{});}}),/*#__PURE__*/Object(jsx_runtime["jsx"])(react_router["a" /* Route */],{path:"/Blog_detail",component:src_Blog_detail}),/*#__PURE__*/Object(jsx_runtime["jsx"])(react_router["a" /* Route */],{path:"/Blog_list",component:Blog_list})]})})}),/*#__PURE__*/Object(jsx_runtime["jsx"])(src_Blog_footer,{})]});};/* harmony default export */ var src_Blog = (Blog_Blog);
// CONCATENATED MODULE: ./src/reportWebVitals.js
var reportWebVitals=function reportWebVitals(onPerfEntry){if(onPerfEntry&&onPerfEntry instanceof Function){__webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 153)).then(function(_ref){var getCLS=_ref.getCLS,getFID=_ref.getFID,getFCP=_ref.getFCP,getLCP=_ref.getLCP,getTTFB=_ref.getTTFB;getCLS(onPerfEntry);getFID(onPerfEntry);getFCP(onPerfEntry);getLCP(onPerfEntry);getTTFB(onPerfEntry);});}};/* harmony default export */ var src_reportWebVitals = (reportWebVitals);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.css
var bootstrap = __webpack_require__(109);

// CONCATENATED MODULE: ./src/index.js
react_dom_default.a.render(/*#__PURE__*/ /*<React.StrictMode>
  <App />
</React.StrictMode>,*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])(src_Blog,{})}),document.getElementById('root'));// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
src_reportWebVitals();

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[110,1,2]]]);
//# sourceMappingURL=main.00b0d1ea.chunk.js.map