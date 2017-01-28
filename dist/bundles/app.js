webpackJsonp([0],{

/***/ 101:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';var _react=__webpack_require__(6);var _react2=_interopRequireDefault(_react);var _reactDom=__webpack_require__(60);var _App=__webpack_require__(104);var _App2=_interopRequireDefault(_App);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}__webpack_require__(119);(0,_reactDom.render)(_react2.default.createElement(_App2.default,null),document.getElementById('appRoot'));

/***/ },

/***/ 102:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.updateApiState=updateApiState;exports.storeArtInfo=storeArtInfo;exports.fetchArtInfo=fetchArtInfo;var _ActionConstants=__webpack_require__(62);var _ActionConstants2=_interopRequireDefault(_ActionConstants);var _models=__webpack_require__(64);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function updateApiState(isFetching){var error=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;return{type:_ActionConstants2.default.UPDATE_API_STATE,isFetching:isFetching,error:error}}function storeArtInfo(id,art){return{type:_ActionConstants2.default.STORE_ART_INFO,id:id,art:art}}function fetchArtInfo(id){return function(dispatch){dispatch(updateApiState(true));return window.fetch('https://gist.githubusercontent.com/jstaffans/2dd13eaeef667a5ea8cd7b1ac8d39b6c/raw/aa3722ed73fe5836a8c5353476bb34f3a7a2a1a0/'+id+'.json').then(function(res){return res.json()}).then(function(data){dispatch(updateApiState(false));dispatch(storeArtInfo(id,new _models.Art(data)))}).catch(function(err){dispatch(updateApiState(false,err))})}}

/***/ },

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.ArtActions=undefined;var _ArtActions=__webpack_require__(102);var ArtActions=_interopRequireWildcard(_ArtActions);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key]}}newObj.default=obj;return newObj}}exports.ArtActions=ArtActions;

/***/ },

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.default=App;var _react=__webpack_require__(6);var _react2=_interopRequireDefault(_react);var _redux=__webpack_require__(26);var _reactRedux=__webpack_require__(35);var _reduxThunk=__webpack_require__(61);var _reduxThunk2=_interopRequireDefault(_reduxThunk);var _reducers=__webpack_require__(118);var reducers=_interopRequireWildcard(_reducers);var _Container=__webpack_require__(106);var _Container2=_interopRequireDefault(_Container);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key]}}newObj.default=obj;return newObj}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var store=(0,_redux.createStore)((0,_redux.combineReducers)(reducers),(0,_redux.applyMiddleware)(_reduxThunk2.default));function App(){return _react2.default.createElement(_reactRedux.Provider,{store:store},_react2.default.createElement(_Container2.default,null))}

/***/ },

/***/ 105:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _react=__webpack_require__(6);var _react2=_interopRequireDefault(_react);var _redux=__webpack_require__(26);var _reactRedux=__webpack_require__(35);var _actions=__webpack_require__(103);var _modules=__webpack_require__(113);var _common=__webpack_require__(63);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return call&&(typeof call==='object'||typeof call==='function')?call:self}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var ArtPage=function(_Component){_inherits(ArtPage,_Component);function ArtPage(props){_classCallCheck(this,ArtPage);return _possibleConstructorReturn(this,(ArtPage.__proto__||Object.getPrototypeOf(ArtPage)).call(this,props))}_createClass(ArtPage,[{key:'componentDidMount',value:function componentDidMount(){this.props.actions.fetchArtInfo(this.props.artId)}},{key:'render',value:function render(){var _this2=this;if(this.props.apiStatus.isFetching){return _react2.default.createElement(_common.Loader,null)}if(this.props.apiStatus.error){return _react2.default.createElement(_common.Error,{error:this.props.apiStatus.error})}if(!this.props.art){return null}return _react2.default.createElement('div',{className:'container page-art'},_react2.default.createElement(_modules.Search,null),_react2.default.createElement('div',{id:'js-searchContainer'},_react2.default.createElement(_modules.ArtInfo,{art:this.props.art}),_react2.default.createElement('div',{className:'art-section art-section--secondary'},['provenance','exhibition','literature'].map(function(r){return _react2.default.createElement(_modules.ArtRecord,{key:r,type:r,art:_this2.props.art})}))))}}]);return ArtPage}(_react.Component);exports.default=(0,_reactRedux.connect)(function(state,props){var artId=props.artId;var art=state.art.arts[props.artId];var apiStatus=state.art.apiStatus;return{artId:artId,art:art,apiStatus:apiStatus}},function(dispatch){return{actions:(0,_redux.bindActionCreators)(_actions.ArtActions,dispatch)}})(ArtPage);

/***/ },

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.default=Container;var _react=__webpack_require__(6);var _react2=_interopRequireDefault(_react);var _common=__webpack_require__(63);var _ArtPage=__webpack_require__(105);var _ArtPage2=_interopRequireDefault(_ArtPage);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function Container(){return _react2.default.createElement('div',null,_react2.default.createElement(_common.Header,null),_react2.default.createElement('div',{className:'container'},_react2.default.createElement(_ArtPage2.default,{artId:'CAA-KZA'})),_react2.default.createElement(_common.Footer,null))}

/***/ },

/***/ 107:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=Error;var _react=__webpack_require__(6);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function Error(props){return _react2.default.createElement("div",{className:"error"},_react2.default.createElement("i",{className:"fa fa-exclamation-triangle error__icon"}),_react2.default.createElement("span",{className:"error__text"},props.error.message))}

/***/ },

/***/ 108:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _react=__webpack_require__(6);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function Footer(){return _react2.default.createElement("footer",{className:"footer"},_react2.default.createElement("i",{className:"fa fa-smile-o"}))}exports.default=Footer;

/***/ },

/***/ 109:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _react=__webpack_require__(6);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function Header(){return _react2.default.createElement("header",{className:"header"},_react2.default.createElement("div",{className:"header__brand"},"Artilla"))}exports.default=Header;

/***/ },

/***/ 110:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=Loader;var _react=__webpack_require__(6);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function Loader(){return _react2.default.createElement("div",{className:"loader"},_react2.default.createElement("i",{className:"fa fa-circle-o-notch fa-spin loader__icon"}),_react2.default.createElement("span",{className:"loader__text"},"Loading"))}

/***/ },

/***/ 111:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=ArtInfo;var _react=__webpack_require__(6);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function ArtInfo(props){return _react2.default.createElement("div",{className:"art-section art-section--primary"},_react2.default.createElement("div",{className:"art-image"},_react2.default.createElement("img",{src:props.art.image,title:props.art.name,alt:"Image of "+props.art.name})),_react2.default.createElement("div",{className:"art-info"},_react2.default.createElement("h1",{className:"art-name"},props.art.name),_react2.default.createElement("ul",{className:"art-meta-list"},_react2.default.createElement("li",{className:"art-meta-list__item"},_react2.default.createElement("span",{className:"type"},"Artist"),props.art.artist.getFullName()," (",props.art.artist.lifetime,")"),_react2.default.createElement("li",{className:"art-meta-list__item"},_react2.default.createElement("span",{className:"type"},"Creation Time"),props.art.creationTime),_react2.default.createElement("li",{className:"art-meta-list__item"},_react2.default.createElement("span",{className:"type"},"Medium"),props.art.medium),_react2.default.createElement("li",{className:"art-meta-list__item"},_react2.default.createElement("span",{className:"type"},"Dimensions"),props.art.getDimensionsString()),_react2.default.createElement("li",{className:"art-meta-list__item"},_react2.default.createElement("span",{className:"type"},"Signature"),props.art.signature)),_react2.default.createElement("button",{className:"btn art-action"},"View entire catalogue")))}

/***/ },

/***/ 112:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.default=ArtRecord;var _react=__webpack_require__(6);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function ArtRecord(props){var recordType=props.type;var title=null;switch(recordType){case'provenance':title='Provenance';break;case'exhibition':title='Exhibitions';break;case'literature':title='Literature';break;default:break;}var records=props.art.getRecordsByType(recordType);if(!records.length||!title){return null}return _react2.default.createElement('div',{className:'art-record'},_react2.default.createElement('h3',{className:'art-record__title'},title),_react2.default.createElement('ul',{className:'art-record__list'},records.map(function(r,i){return _react2.default.createElement('li',{key:i,className:'art-record__list__item'},r.displayText)})))}

/***/ },

/***/ 113:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.Search=exports.ArtRecord=exports.ArtInfo=undefined;var _ArtInfo=__webpack_require__(111);var _ArtInfo2=_interopRequireDefault(_ArtInfo);var _ArtRecord=__webpack_require__(112);var _ArtRecord2=_interopRequireDefault(_ArtRecord);var _Search=__webpack_require__(252);var _Search2=_interopRequireDefault(_Search);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}exports.ArtInfo=_ArtInfo2.default;exports.ArtRecord=_ArtRecord2.default;exports.Search=_Search2.default;

/***/ },

/***/ 114:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _models=__webpack_require__(64);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}var Art=function(){function Art(art){_classCallCheck(this,Art);this.id=art.permanent_id;this.name=art.name;this.medium=art.medium;this.creationTime=art.creation.string;this.dimensions=art.dimensions;this.signature=art.signature;this.image=art.image_pyramid_urls.orig.img;this.artist=new _models.Artist(art.artist);this.records=art.record_set.map(function(r){return new _models.ArtRecord(r)})}_createClass(Art,[{key:'getRecordsByType',value:function getRecordsByType(type){return this.records.filter(function(r){return r.type.toLowerCase()===type.toLowerCase()})}},{key:'getDimensionsString',value:function getDimensionsString(){return this.dimensions.width+'in x '+this.dimensions.height+'in'}}]);return Art}();exports.default=Art;

/***/ },

/***/ 115:
/***/ function(module, exports) {

"use strict";
"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}var ArtRecord=function ArtRecord(record){_classCallCheck(this,ArtRecord);this.type=record.type;this.displayText=record.display_text||record.full_text};exports.default=ArtRecord;

/***/ },

/***/ 116:
/***/ function(module, exports) {

"use strict";
"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}var Artist=function(){function Artist(artist){_classCallCheck(this,Artist);this.id=artist.permanent_id;this.fname=artist.first_names;this.lname=artist.last_name;this.lifetime=artist.lifetime}_createClass(Artist,[{key:"getFullName",value:function getFullName(){return this.fname+" "+this.lname}}]);return Artist}();exports.default=Artist;

/***/ },

/***/ 117:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};exports.default=form;var _ActionConstants=__webpack_require__(62);var _ActionConstants2=_interopRequireDefault(_ActionConstants);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var initialState={apiStatus:{isFetching:false,error:null},arts:{}};function form(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];var arts=void 0;var apiStatus=void 0;switch(action.type){case _ActionConstants2.default.UPDATE_API_STATE:apiStatus=_extends({},state.apiStatus);apiStatus=_extends({},apiStatus,{isFetching:action.isFetching,error:action.error});return _extends({},state,{apiStatus:apiStatus});case _ActionConstants2.default.STORE_ART_INFO:arts=_extends({},state.arts);arts[action.id]=action.art;return _extends({},state,{arts:arts});default:return state;}}

/***/ },

/***/ 118:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.art=undefined;var _art=__webpack_require__(117);var _art2=_interopRequireDefault(_art);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}exports.art=_art2.default;

/***/ },

/***/ 119:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(101);


/***/ },

/***/ 251:
/***/ function(module, exports) {

"use strict";
'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.default=function(opts,cb){try{unhighlight();if(opts.query===''){cb(0);return}highlight(opts.query,opts.highlightClass,opts.searchContainer);cb(highlights.length)}catch(err){cb(0);throw err}};var highlights=[];function _getStyle(el,styleProp){var x=document.getElementById(el)?document.getElementById(el):el;var y=void 0;if(x.currentStyle){y=x.currentStyle[styleProp]}else if(window.getComputedStyle){y=document.defaultView.getComputedStyle(x,null).getPropertyValue(styleProp)}return y}function highlight(word){var highlightClass=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'fts-highlight';var node=arguments.length>2&&arguments[2]!==undefined?arguments[2]:document.body;for(node=node.firstChild;node;node=node.nextSibling){if(node.nodeType===3){var n=node;var position=n.nodeValue.toLowerCase().indexOf(word.toLowerCase());if(position>-1){var before=n.nodeValue.substr(0,position);var middle=n.nodeValue.substr(position,word.length);var after=document.createTextNode(n.nodeValue.substr(position+word.length));var highlightElem=document.createElement('span');highlightElem.className=highlightClass;highlightElem.appendChild(document.createTextNode(middle));n.nodeValue=before;n.parentNode.insertBefore(after,n.nextSibling);n.parentNode.insertBefore(highlightElem,n.nextSibling);highlights.push(highlightElem);node=node.nextSibling}}else if(node.nodeType===1&&!_getStyle(node,'visibility').match(/hidden/i)&&!_getStyle(node,'display').match(/none/i)){highlight(word,highlightClass,node)}}}function unhighlight(){highlights.forEach(function(node){var textNode=node.firstChild;var parentNode=node.parentNode;if(parentNode){parentNode.replaceChild(textNode,node);parentNode.normalize()}});highlights=[]}

/***/ },

/***/ 252:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _react=__webpack_require__(6);var _react2=_interopRequireDefault(_react);var _Highlighter=__webpack_require__(251);var _Highlighter2=_interopRequireDefault(_Highlighter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return call&&(typeof call==='object'||typeof call==='function')?call:self}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var Search=function(_PureComponent){_inherits(Search,_PureComponent);function Search(props){_classCallCheck(this,Search);var _this=_possibleConstructorReturn(this,(Search.__proto__||Object.getPrototypeOf(Search)).call(this,props));_this.onSearchInput=_this.onSearchInput.bind(_this);_this.state={isSearchActive:false,count:99};return _this}_createClass(Search,[{key:'onSearchInput',value:function onSearchInput(e){var _this2=this;var query=e.target.value;var opts={query:query.length>=3?query:'',highlightClass:'fts-highlight',searchContainer:document.getElementById('js-searchContainer')};(0,_Highlighter2.default)(opts,function(count){_this2.setState({isSearchActive:query.length>=3,count:count})})}},{key:'render',value:function render(){return _react2.default.createElement('div',{className:'search-container'},_react2.default.createElement('div',{className:'search-input-wrapper'},_react2.default.createElement('input',{type:'text',placeholder:'Search in this page',className:'search-input',onChange:this.onSearchInput}),_react2.default.createElement('span',{className:'search-result'},this.state.isSearchActive?this.state.count+' found':'')))}}]);return Search}(_react.PureComponent);exports.default=Search;

/***/ },

/***/ 62:
/***/ function(module, exports) {

"use strict";
'use strict';Object.defineProperty(exports,'__esModule',{value:true});var actions={STORE_ART_INFO:'STORE_ART_INFO',UPDATE_API_STATE:'UPDATE_API_STATE'};exports.default=actions;

/***/ },

/***/ 63:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.Error=exports.Loader=exports.Footer=exports.Header=undefined;var _Header=__webpack_require__(109);var _Header2=_interopRequireDefault(_Header);var _Footer=__webpack_require__(108);var _Footer2=_interopRequireDefault(_Footer);var _Loader=__webpack_require__(110);var _Loader2=_interopRequireDefault(_Loader);var _Error=__webpack_require__(107);var _Error2=_interopRequireDefault(_Error);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}exports.Header=_Header2.default;exports.Footer=_Footer2.default;exports.Loader=_Loader2.default;exports.Error=_Error2.default;

/***/ },

/***/ 64:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.Art=exports.Artist=exports.ArtRecord=undefined;var _ArtRecord=__webpack_require__(115);var _ArtRecord2=_interopRequireDefault(_ArtRecord);var _Artist=__webpack_require__(116);var _Artist2=_interopRequireDefault(_Artist);var _Art=__webpack_require__(114);var _Art2=_interopRequireDefault(_Art);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}exports.ArtRecord=_ArtRecord2.default;exports.Artist=_Artist2.default;exports.Art=_Art2.default;

/***/ }

},[246]);
//# sourceMappingURL=app.js.map