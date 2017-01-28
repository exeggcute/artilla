webpackJsonp([0],{100:function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.ArtActions=void 0;var a=r(99),u=n(a);t.ArtActions=u},101:function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function u(){return o.default.createElement(c.Provider,{store:h},o.default.createElement(_.default,null))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var i=r(5),o=a(i),l=r(25),c=r(32),s=r(56),f=a(s),d=r(117),m=n(d),p=r(103),_=a(p),h=(0,l.createStore)((0,l.combineReducers)(m),(0,l.applyMiddleware)(f.default))},102:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(5),c=n(l),s=r(25),f=r(32),d=r(100),m=r(111),p=r(58),_=function(e){function t(e){return a(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),o(t,[{key:"componentDidMount",value:function(){this.props.actions.fetchArtInfo(this.props.artId)}},{key:"render",value:function(){var e=this;return this.props.apiStatus.isFetching?c.default.createElement(p.Loader,null):this.props.apiStatus.error?c.default.createElement(p.Error,{error:this.props.apiStatus.error}):this.props.art?c.default.createElement("div",{className:"container page-art"},c.default.createElement(m.Search,null),c.default.createElement("div",{id:"js-searchContainer"},c.default.createElement(m.ArtInfo,{art:this.props.art}),c.default.createElement("div",{className:"art-section art-section--secondary"},["provenance","exhibition","literature"].map(function(t){return c.default.createElement(m.ArtRecord,{key:t,type:t,art:e.props.art})})))):null}}]),t}(l.Component);t.default=(0,f.connect)(function(e,t){var r=t.artId,n=e.art.arts[t.artId],a=e.art.apiStatus;return{artId:r,art:n,apiStatus:a}},function(e){return{actions:(0,s.bindActionCreators)(d.ArtActions,e)}})(_)},103:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(){return i.default.createElement("div",null,i.default.createElement(o.Header,null),i.default.createElement("div",{className:"container"},i.default.createElement(c.default,{artId:"CAA-KZA"})),i.default.createElement(o.Footer,null))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var u=r(5),i=n(u),o=r(58),l=r(102),c=n(l)},104:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){return i.default.createElement("div",{className:"error"},i.default.createElement("i",{className:"fa fa-exclamation-triangle error__icon"}),i.default.createElement("span",{className:"error__text"},e.error.message))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var u=r(5),i=n(u)},105:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(){return i.default.createElement("footer",{className:"footer"},i.default.createElement("i",{className:"fa fa-smile-o"}))}Object.defineProperty(t,"__esModule",{value:!0});var u=r(5),i=n(u);t.default=a},106:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(){return i.default.createElement("header",{className:"header"},i.default.createElement("div",{className:"header__brand"},"Artilla"))}Object.defineProperty(t,"__esModule",{value:!0});var u=r(5),i=n(u);t.default=a},107:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(){return i.default.createElement("div",{className:"loader"},i.default.createElement("i",{className:"fa fa-circle-o-notch fa-spin loader__icon"}),i.default.createElement("span",{className:"loader__text"},"Loading"))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var u=r(5),i=n(u)},108:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){return i.default.createElement("div",{className:"art-section art-section--primary"},i.default.createElement("div",{className:"art-image"},i.default.createElement("img",{src:e.art.image,title:e.art.name,alt:"Image of "+e.art.name})),i.default.createElement("div",{className:"art-info"},i.default.createElement("h1",{className:"art-name"},e.art.name),i.default.createElement("ul",{className:"art-meta-list"},i.default.createElement("li",{className:"art-meta-list__item"},i.default.createElement("span",{className:"type"},"Artist"),e.art.artist.getFullName()," (",e.art.artist.lifetime,")"),i.default.createElement("li",{className:"art-meta-list__item"},i.default.createElement("span",{className:"type"},"Creation Time"),e.art.creationTime),i.default.createElement("li",{className:"art-meta-list__item"},i.default.createElement("span",{className:"type"},"Medium"),e.art.medium),i.default.createElement("li",{className:"art-meta-list__item"},i.default.createElement("span",{className:"type"},"Dimensions"),e.art.getDimensionsString()),i.default.createElement("li",{className:"art-meta-list__item"},i.default.createElement("span",{className:"type"},"Signature"),e.art.signature)),i.default.createElement("button",{className:"btn art-action"},"View entire catalogue")))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var u=r(5),i=n(u)},109:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=e.type,r=null;switch(t){case"provenance":r="Provenance";break;case"exhibition":r="Exhibitions";break;case"literature":r="Literature"}var n=e.art.getRecordsByType(t);return n.length&&r?i.default.createElement("div",{className:"art-record"},i.default.createElement("h3",{className:"art-record__title"},r),i.default.createElement("ul",{className:"art-record__list"},n.map(function(e,t){return i.default.createElement("li",{key:t,className:"art-record__list__item"},e.displayText)}))):null}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var u=r(5),i=n(u)},110:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(5),c=n(l),s=r(112),f=n(s),d=function(e){function t(e){a(this,t);var r=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.onSearchInput=r.onSearchInput.bind(r),r.state={isSearchActive:!1,count:99},r}return i(t,e),o(t,[{key:"onSearchInput",value:function(e){var t=this,r=e.target.value,n={query:r.length>=3?r:"",highlightClass:"fts-highlight",searchContainer:document.getElementById("js-searchContainer")};(0,f.default)(n,function(e){t.setState({isSearchActive:r.length>=3,count:e})})}},{key:"render",value:function(){return c.default.createElement("div",{className:"search-container"},c.default.createElement("div",{className:"search-input-wrapper"},c.default.createElement("input",{type:"text",placeholder:"Search in this page",className:"search-input",onChange:this.onSearchInput}),c.default.createElement("span",{className:"search-result"},this.state.isSearchActive?this.state.count+" found":"")))}}]),t}(l.PureComponent);t.default=d},111:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Search=t.ArtRecord=t.ArtInfo=void 0;var a=r(108),u=n(a),i=r(109),o=n(i),l=r(110),c=n(l);t.ArtInfo=u.default,t.ArtRecord=o.default,t.Search=c.default},112:function(e,t){"use strict";function r(e,t){var r=document.getElementById(e)?document.getElementById(e):e,n=void 0;return r.currentStyle?n=r.currentStyle[t]:window.getComputedStyle&&(n=document.defaultView.getComputedStyle(r,null).getPropertyValue(t)),n}function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"fts-highlight",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document.body;for(a=a.firstChild;a;a=a.nextSibling)if(3===a.nodeType){var i=a,o=i.nodeValue.toLowerCase().indexOf(e.toLowerCase());if(o>-1){var l=i.nodeValue.substr(0,o),c=i.nodeValue.substr(o,e.length),s=document.createTextNode(i.nodeValue.substr(o+e.length)),f=document.createElement("span");f.className=t,f.appendChild(document.createTextNode(c)),i.nodeValue=l,i.parentNode.insertBefore(s,i.nextSibling),i.parentNode.insertBefore(f,i.nextSibling),u.push(f),a=a.nextSibling}}else 1!==a.nodeType||r(a,"visibility").match(/hidden/i)||r(a,"display").match(/none/i)||n(e,t,a)}function a(){u.forEach(function(e){var t=e.firstChild,r=e.parentNode;r&&(r.replaceChild(t,e),r.normalize())}),u=[]}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){try{if(a(),""===e.query)return void t(0);n(e.query,e.highlightClass,e.searchContainer),t(u.length)}catch(e){throw t(0),e}};var u=[]},113:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(59),i=function(){function e(t){n(this,e),this.id=t.permanent_id,this.name=t.name,this.medium=t.medium,this.creationTime=t.creation.string,this.dimensions=t.dimensions,this.signature=t.signature,this.image=t.image_pyramid_urls.orig.img,this.artist=new u.Artist(t.artist),this.records=t.record_set.map(function(e){return new u.ArtRecord(e)})}return a(e,[{key:"getRecordsByType",value:function(e){return this.records.filter(function(t){return t.type.toLowerCase()===e.toLowerCase()})}},{key:"getDimensionsString",value:function(){return this.dimensions.width+"in x "+this.dimensions.height+"in"}}]),e}();t.default=i},114:function(e,t){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function e(t){r(this,e),this.type=t.type,this.displayText=t.display_text||t.full_text};t.default=n},115:function(e,t){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=function(){function e(t){r(this,e),this.id=t.permanent_id,this.fname=t.first_names,this.lname=t.last_name,this.lifetime=t.lifetime}return n(e,[{key:"getFullName",value:function(){return this.fname+" "+this.lname}}]),e}();t.default=a},116:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments[1],r=void 0,n=void 0;switch(t.type){case o.default.UPDATE_API_STATE:return n=u({},e.apiStatus),n=u({},n,{isFetching:t.isFetching,error:t.error}),u({},e,{apiStatus:n});case o.default.STORE_ART_INFO:return r=u({},e.arts),r[t.id]=t.art,u({},e,{arts:r});default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default=a;var i=r(57),o=n(i),l={apiStatus:{isFetching:!1,error:null},arts:{}}},117:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.art=void 0;var a=r(116),u=n(a);t.art=u.default},118:function(e,t){},236:function(e,t,r){e.exports=r(98)},57:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={STORE_ART_INFO:"STORE_ART_INFO",UPDATE_API_STATE:"UPDATE_API_STATE"};t.default=r},58:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Error=t.Loader=t.Footer=t.Header=void 0;var a=r(106),u=n(a),i=r(105),o=n(i),l=r(107),c=n(l),s=r(104),f=n(s);t.Header=u.default,t.Footer=o.default,t.Loader=c.default,t.Error=f.default},59:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Art=t.Artist=t.ArtRecord=void 0;var a=r(114),u=n(a),i=r(115),o=n(i),l=r(113),c=n(l);t.ArtRecord=u.default,t.Artist=o.default,t.Art=c.default},98:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var a=r(5),u=n(a),i=r(55),o=r(101),l=n(o);r(118),(0,i.render)(u.default.createElement(l.default,null),document.getElementById("appRoot"))},99:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{type:l.default.UPDATE_API_STATE,isFetching:e,error:t}}function u(e,t){return{type:l.default.STORE_ART_INFO,id:e,art:t}}function i(e){return function(t){return t(a(!0)),window.fetch("https://gist.githubusercontent.com/jstaffans/2dd13eaeef667a5ea8cd7b1ac8d39b6c/raw/aa3722ed73fe5836a8c5353476bb34f3a7a2a1a0/"+e+".json").then(function(e){return e.json()}).then(function(r){t(a(!1)),t(u(e,new c.Art(r)))}).catch(function(e){t(a(!1,e))})}}Object.defineProperty(t,"__esModule",{value:!0}),t.updateApiState=a,t.storeArtInfo=u,t.fetchArtInfo=i;var o=r(57),l=n(o),c=r(59)}},[236]);
//# sourceMappingURL=app.js.map