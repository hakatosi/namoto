(self.webpackChunk=self.webpackChunk||[]).push([[1487,227],{6610:function(t,e,n){"use strict";function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,{Z:function(){return c}})},5991:function(t,e,n){"use strict";function c(t,e){for(var n=0;n<e.length;n++){var c=e[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,c.key,c)}}function a(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}n.d(e,{Z:function(){return a}})},32465:function(t,e,n){"use strict";function c(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}n.d(e,{Z:function(){return c}})},20171:function(t,e,n){"use strict";n.r(e);var c=n(6610),a=n(5991),r=n(63349),s=n(10379),o=n(46070),i=n(77608);var u=function(t){(0,s.Z)(l,t);var e,n,u=(e=l,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,c=(0,i.Z)(e);if(n){var a=(0,i.Z)(this).constructor;t=Reflect.construct(c,arguments,a)}else t=c.apply(this,arguments);return(0,o.Z)(this,t)});function l(t){var e;return(0,c.Z)(this,l),(e=u.call(this,t)).state={baseEmailRender:window.baseEmailRender},e.emailTemplate=React.createRef(),window.emailTemplatesRenderer=(0,r.Z)(e),e}return(0,a.Z)(l,[{key:"render",value:function(){if(!this.props.currentEmailTemplate||!this.state.baseEmailRender)return null;var t=window.altrpHelpers.mbParseJSON(this.props.currentEmailTemplate.data);(t=window.frontElementsFabric.parseData(t)).templateType="email";var e=React.createElement(t.componentClass,{element:t,children:t.children,baseRender:this.state.baseEmailRender});return React.createElement("table",{id:"altrp-email-renderer",style:{width:"100%",display:"none"},ref:this.emailTemplate},React.createElement("tbody",null,React.createElement("tr",null,React.createElement("td",null,e))))}}]),l}(window.Component);e.default=window.reactRedux.connect((function(t){return{altrpresponses:t.altrpresponses,formsStore:t.formsStore,currentDataStorage:t.currentDataStorage,currentModel:t.currentModel,currentUser:t.currentUser,altrpMeta:t.altrpMeta,altrpPageState:t.altrpPageState,currentEmailTemplate:t.currentEmailTemplate}}))(u)},46843:function(t,e,n){"use strict";n.r(e);var c=n(28481),a=n(96156),r=n(92137),s=n(6610),o=n(5991),i=n(10379),u=n(46070),l=n(77608),p=n(87757),f=n.n(p),b=n(64593),g=n(76593);function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,c)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){(0,a.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Z=function(t){(0,i.Z)(d,t);var e,n,a,p=(n=d,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=(0,l.Z)(n);if(a){var c=(0,l.Z)(this).constructor;t=Reflect.construct(e,arguments,c)}else t=e.apply(this,arguments);return(0,u.Z)(this,t)});function d(t){var e;return(0,s.Z)(this,d),(e=p.call(this,t)).state={fonts:[]},e.helmetRef=React.createRef(),window.helmetRef=e.helmetRef,e}return(0,o.Z)(d,[{key:"componentDidMount",value:(e=(0,r.Z)(f().mark((function t(){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,g.delay)(1e3);case 2:this.setState((function(t){return m(m({},t),{},{renderFonts:!0})}));case 3:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"componentDidUpdate",value:function(t,e){if(this.state.renderFonts){var n=new Set;_.toPairs(this.props.altrpFonts.getData()).forEach((function(t){var e=(0,c.Z)(t,2),a=(e[0],e[1]);n.add(a)})),n=_.toArray(n),_.isEqual(n,this.state.fonts)||this.setState((function(t){return m(m({},t),{},{fonts:n})}))}}},{key:"render",value:function(){var t=this.state.fonts;return React.createElement(b.q,{ref:this.helmetRef},t.map(g.renderFontLink))}}]),d}(Component);e.default=window.reactRedux.connect((function(t){return{altrpFonts:t.altrpFonts}}))(Z)},22793:function(t,e,n){"use strict";n.r(e);var c,a=n(32465),r=n(56911),s=n(6238),o=n(50040),i=n(65339),u=n(3030),l=n(73783),p=n(70226),f=n(21466),b=n(74378),g=n(4627),d=n(34399),m=n(95597),Z=n(5911),h=n(39070),k=n(7727),w=n(4314),y=n(78524),v=n(37310),R=n(80610),O=n(14215),E=n(51469),S=n(22873),j=n(61007),P=n(29738),x=n(45149),D=n(98936),F=n(40660),T=n(86844),C=n(24033),M=n(78071),B=n(94366),U=n(21850),q=n(36653),z=n(73988),H=n(3670),L=n(2e4),N=n(93569),A=n(76593),G=n(64324),J=n(48745),V=n(25763),X=n(54303),I=window.altrpHelpers.isEditor,K=createGlobalStyle(c||(c=(0,a.Z)(["",""])),(function(t){var e=t.elementsSettings,n=t.areas,c="";n&&(c+=(0,j.Z)(n));var a="altrp-element";return _.each(e,(function(t,e){if(t){switch(t.name){case"image-lightbox":c+=(0,T.Z)(t.settings,e);break;case"diagram":c+=".".concat(a).concat(e," {").concat((0,F.Z)(t.settings),"}");break;case"tabs-switcher":c+=".".concat(a).concat(e," {").concat((0,D.Z)(t.settings),"}");break;case"button":c+=".".concat(a).concat(e," {").concat((0,g.Z)(t.settings),"}");break;case"carousel":c+=".".concat(a).concat(e," {").concat((0,d.Z)(t.settings),"}");break;case"gallery":c+=".".concat(a).concat(e," {").concat((0,m.Z)(t.settings),"}");break;case"divider":c+=".".concat(a).concat(e," {").concat((0,Z.Z)(t.settings),"}");break;case"video":c+=".".concat(a).concat(e," {").concat((0,h.Z)(t.settings),"}");break;case"list":c+=".".concat(a).concat(e," {").concat((0,k.Z)(t.settings),"}");break;case"accordion":c+=".".concat(a).concat(e," {").concat((0,S.Z)(t.settings),"}");break;case"section":case"section_widget":c+=".".concat(a).concat(e," {").concat((0,v.Z)(t.settings,t.childrenLength||1),"}");break;case"column":c+=".".concat(a).concat(e," {").concat((0,R.Z)(t.settings),"}");break;case"dropbar":c+=".".concat(a).concat(e," {").concat((0,O.Z)(t.settings),"}");break;case"dashboard":c+=".".concat(a).concat(e," {").concat((0,w.Z)(t.settings),"}");break;case"image":c+=(0,l.Z)(t.settings,e);break;case"tabs":c+=(0,p.Z)(t.settings,e);break;case"menu":c+=(0,f.Z)(t.settings,e);break;case"breadcrumbs":c+=(0,b.Z)(t.settings,e);break;case"heading":c+=(0,r.e)(t.settings,e);break;case"heading-type-animating":c+=(0,s.o)(t.settings,e);break;case"table":c+=(0,i.V)(t.settings,e);break;case"text":c+=(0,o.m)(t.settings,e);break;case"posts":c+=(0,u.X)(t.settings,e);break;case"input-select2":c+=".".concat(a).concat(e," {").concat(E.Z.FormComponent(t.settings,e),"}"),c+="".concat(E.Z.select2Options(t.settings,e),"}");break;case"input-date":c+=(0,C.Z)(t.settings,e,a),c+="".concat((0,M.Z)(t.settings,e));break;case"input-checkbox":c+=".".concat(a).concat(e," {").concat((0,B.Z)(t.settings,e),"}");break;case"input-slider":c+=".".concat(a).concat(e," {").concat((0,H.Z)(t.settings),"}");break;case"input-range-slider":c+=".".concat(a).concat(e," {").concat((0,G.Z)(t.settings),"}");break;case"input-text-common":c+=".".concat(a).concat(e," {").concat((0,U.Z)(t.settings,e),"}");break;case"input-select":c+=".".concat(a).concat(e," {").concat((0,q.Z)(t.settings,e),"}"),c+="".concat((0,q.N)(t.settings,e));break;case"input-multi-select":c+=".".concat(a).concat(e," {").concat((0,X.Z)(t.settings,e),"}"),c+="".concat((0,X.E)(t.settings,e));break;case"input-radio":c+=(0,z.Z)(t.settings,e,a);break;case"input-text":case"input-password":case"input-number":case"input-email":case"input-tel":case"input-file":c+=".".concat(a).concat(e," {").concat((0,L.Z)(t.settings,e),"}");break;case"input-gallery":c+=".".concat(a).concat(e," {").concat((0,N.Z)(t.settings,e),"}");break;case"template":c+=".".concat(a).concat(e," {").concat((0,J.Z)(t.settings,e),"}");break;case"input-image-select":case"input-accept":case"input-textarea":case"input-wysiwyg":c+=".".concat(a).concat(e," {").concat(E.Z.FormComponent(t.settings,e),"}");break;case"map":c+=".".concat(a).concat(e," {").concat((0,P.Z)(t.settings),"}");break;case"map_builder":c+=".".concat(a).concat(e," {").concat((0,x.Z)(t.settings),"}")}c+="div.".concat(a).concat(e,".").concat(a).concat(e," {").concat((0,y.Z)(t.settings),"}"),"never"!==(t.settings.tooltip_show_type||"never")&&(c+=".altrp-tooltip".concat(e," {").concat((0,V.Z)(t.settings),"}"));var n=(0,A.getResponsiveSetting)(t.settings,"element_css_editor");_.isString(n)&&(c+=n.replace(/__selector__/g,"".concat(a).concat(e)))}})),c+="} ",window.globalDefaults&&(c+=window.globalDefaults.join("")),c}));e.default=window.reactRedux.connect((function(t){return I()?{}:{elementsSettings:t.elementsSettings,areas:t.areas,currentScreen:t.currentScreen}}))(K)}}]);
//# sourceMappingURL=EmailTemplatesRenderer.9efbb35b1e012ab71a3d.bundle.js.map