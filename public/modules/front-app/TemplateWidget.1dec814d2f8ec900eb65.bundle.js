(self.webpackChunk=self.webpackChunk||[]).push([[9515],{81352:function(e,t,n){"use strict";n.r(t),n.d(t,{TemplateLoader:function(){return u}});var r=n(92137),a=n(6610),o=n(5991),i=n(87757),s=n.n(i),l=n(38773),c=n(71743),p=n(85009),u=function(){function e(){(0,a.Z)(this,e),this.resource=new l.Z({route:"/ajax/templates"}),this.templatesCache=new c.Z(_.get(window.__altrp_settings__,"templates_data",{}))}var t,n;return(0,o.Z)(e,[{key:"loadTemplate",value:(n=(0,r.Z)(s().mark((function t(n){var r,a,o,i=arguments;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=i.length>1&&void 0!==i[1]&&i[1],a=r,n=Number(n)?Number(n):n,a||(a=!this.templatesCache.hasProperty(n)),"loading"!==_.get(e,"statuses.".concat(n))){t.next=6;break}return t.abrupt("return",new Promise((function(t,r){e.pendingCallbacks[n]=e.pendingCallbacks[n]||[],e.pendingCallbacks[n].push(t)})));case 6:if(e.statuses[n]="loading",t.prev=7,o=null,!a){t.next=16;break}return t.next=12,this.resource.get(n);case 12:o=t.sent,this.templatesCache.setProperty(n,o),t.next=17;break;case 16:o=this.templatesCache.getProperty(n);case 17:return _.isArray(e.pendingCallbacks[n])&&e.pendingCallbacks[n].forEach((function(e){e(o)})),e.statuses[n]="loaded",e.pendingCallbacks[n]=[],t.abrupt("return",o);case 23:return t.prev=23,t.t0=t.catch(7),_.isArray(e.pendingCallbacks[n])&&e.pendingCallbacks[n].forEach((function(e){e(null)})),e.statuses[n]="loaded",e.pendingCallbacks[n]=[],t.abrupt("return",null);case 29:case"end":return t.stop()}}),t,this,[[7,23]])}))),function(e){return n.apply(this,arguments)})},{key:"loadParsedTemplate",value:(t=(0,r.Z)(s().mark((function e(t){var n,r,a=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.length>1&&void 0!==a[1]&&a[1],t){e.next=3;break}return e.abrupt("return",null);case 3:return t=Number(t)?Number(t):t,e.t0=_,e.next=7,this.loadTemplate(t,n);case 7:return e.t1=e.sent,r=e.t0.get.call(e.t0,e.t1,"data"),r=JSON.parse(r),e.abrupt("return",p.default.parseData(r));case 11:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"mbGetParsedTemplate",value:function(e){if(!this.templatesCache.hasProperty(e))return null;var t=_.get(this.templatesCache.getProperty(e),"data");return t=JSON.parse(t),p.default.parseData(t)}}]),e}();u.statuses={},u.pendingCallbacks={},window.templateLoader=new u,t.default=window.templateLoader},55022:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(6610),a=n(5991),o=n(63349),i=n(10379),s=n(46070),l=n(77608),c=n(96156),p=n(92137),u=n(87757),d=n.n(u),f=(n(81352),n(11914)),m=n(85009);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(e){(0,i.Z)(u,e);var t,n,o,c=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,l.Z)(n);if(o){var r=(0,l.Z)(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return(0,s.Z)(this,e)});function u(e){var t;(0,r.Z)(this,u),t=c.call(this,e);var n=window.templateLoader.mbGetParsedTemplate(t.props.settings.template);return n&&(n=m.default.cloneElement(n)),t.state={template:n,templateGUID:t.props.settings.template},t.template=n,t}return(0,a.Z)(u,[{key:"componentDidMount",value:function(){this.updateTemplate()}},{key:"componentDidUpdate",value:function(){this.updateTemplate()}},{key:"updateTemplate",value:(t=(0,p.Z)(d().mark((function e(){var t,n;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=this.props.settings.template)===this.state.templateGUID&&(this.state.template||this.loading)){e.next=13;break}if(t){e.next=6;break}return e.abrupt("return");case 6:return this.loading=!0,e.next=9,window.templateLoader.loadParsedTemplate(t);case 9:n=e.sent,this.loading=!1,this.template=null;case 12:this.setState((function(e){return g(g({},e),{},{template:n,templateGUID:t})}));case 13:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"render",value:function(){if(!this.props.settings.template)return null;if(_.get(this.state,"template.componentClass")){var e=this.template||m.default.cloneElement(this.state.template);return this.template=e,React.createElement("div",{className:"altrp-posts"},React.createElement("div",{className:"altrp-post"},React.createElement(e.componentClass,{element:e,ElementWrapper:f.default,children:e.children})))}return null}}]),u}(Component);var v=function(e){(0,i.Z)(p,e);var t,n,c=(t=p,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,l.Z)(t);if(n){var a=(0,l.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,s.Z)(this,e)});function p(e){var t;return(0,r.Z)(this,p),(t=c.call(this,e)).state={templateGUID:t.props.element.getSettings("template")},window.elementDecorator&&window.elementDecorator((0,o.Z)(t)),e.baseRender&&(t.render=e.baseRender((0,o.Z)(t))),t}return(0,a.Z)(p,[{key:"render",value:function(){return React.createElement(y,{settings:this.props.element.getSettings()||{}})}}]),p}(Component)},85009:function(e,t,n){"use strict";n.r(t);var r=n(96156),a=n(6610),o=n(5991),i=n(67576);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw o}}}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,[{key:"parseData",value:function(e,t,n,r){var a=[],o=new i.default(e);if(n&&o.addModelInfo({modelName:"page",modelId:n}),_.isArray(r)){var s,p=c(r);try{for(p.s();!(s=p.n()).done;){var u=s.value;o.addModelInfo(l({},u))}}catch(e){p.e(e)}finally{p.f()}}if(e.children&&e.children.length){var d,f=c(e.children);try{for(f.s();!(d=f.n()).done;){var m=d.value;window.frontElementsManager.checkElementExists(m.name)&&a.push(this.parseData(m,o))}}catch(e){f.e(e)}finally{f.f()}}return o.id=e.id,o.lastElement=e.lastElement,o.children=a,o.settings=e.settings,o.name=e.name,o.type=e.type,o.dynamicContentSettings=e.dynamicContentSettings,t&&o.setParent(t),o.update(),o}},{key:"cloneElement",value:function(e){if(!e)return null;var t=_.cloneDeep(e);return this.updateParents(t),t}},{key:"updateParents",value:function(e){var t=this;_.isArray(e.children)&&e.children.forEach((function(n){n.setParent(e),t.updateParents(n)}))}}]),e}();window.frontElementsFabric=new u,t.default=window.frontElementsFabric},11914:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r,a=n(22122),o=n(96156),i=n(6610),s=n(5991),l=n(63349),c=n(10379),p=n(46070),u=n(77608),d=n(5977),f=n(1196),m=n(16455),h=n(61113),g=n(32465),y=n(76593),v=styled.div(r||(r=(0,g.Z)(["",""])),(function(e){var t=e.settings,n="";n+="&.altrp-column{";var r=(0,y.getResponsiveSetting)(t,"layout_column_width");return r&&(Number(r)?n+="width:".concat(r,"%;"):n+="width:".concat(r,";")),n+"}"})),S=n(90628),b=["input","input-select","input-multi-select","input-select2","input-radio","input-checkbox","input-wysiwyg","input-textarea","input-slider","input-range-slider","input-image-select","input-accept","input-text","input-text-common","input-password","input-number","input-tel","input-email","input-date","input-hidden","input-file","input-gallery","breadcrumbs","map","map_builder","menu","diagram","input","nav","dashboards","tour","icon","export","template","gallery","dropbar","posts","table","tabs","heading-type-animating"];function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D,E=window.altrpHelpers,O=E.altrpCompare,R=E.altrpRandomId,P=E.conditionsChecker,C=E.isEditor,Z=E.replaceContentWithData,j=E.setTitle,M=function(e){(0,c.Z)(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,u.Z)(t);if(n){var a=(0,u.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,p.Z)(this,e)});function o(e){var t;return(0,i.Z)(this,o),(t=r.call(this,e)).updateStore=function(){t.state.currentModel!==appStore.getState().currentModel&&t.setState((function(e){return k(k({},e),{},{currentModel:appStore.getState().currentModel})})),t.state.currentUser!==appStore.getState().currentUser&&t.setState((function(e){return k(k({},e),{},{currentModel:appStore.getState().currentUser})})),t.state.currentDataStorage!==appStore.getState().currentDataStorage&&t.setState((function(e){return k(k({},e),{},{currentDataStorage:appStore.getState().currentDataStorage})}))},t.state={elementDisplay:!t.props.element.getSettings("default_hidden")},t.reactElement=t.props.element.getSettings("react_element"),t.elementId=t.props.element.getId(),t.settings=t.props.element.getSettings(),e.element.wrapper=(0,l.Z)(t),t.elementWrapperRef=React.createRef(),t.elementRef=React.createRef(),C()||appStore.dispatch((0,f.MN)((0,l.Z)(t))),t}return(0,s.Z)(o,[{key:"componentDidCatch",value:function(e,t){this.setState((function(n){return k(k({},n),{},{error:e,errorInfo:t})}))}},{key:"componentDidMount",value:function(){var e,t;!C()&&(null===(e=window)||void 0===e||null===(t=e.frontApp)||void 0===t||t.onWidgetMount()),_.isFunction(this.props.element.update)&&(this.props.element.update(),this.props.element.updateFonts()),this.checkElementDisplay()}},{key:"getStylesHTMLElement",value:function(){return _.get(window,"stylesModule.stylesContainer.current")&&window.stylesModule.stylesContainer.current.getElementsByClassName("altrp-styles".concat(this.props.element.getId()))[0]||null}},{key:"componentDidUpdate",value:function(e,t){if(this.checkElementDisplay(),appStore.getState().currentModel.getProperty("altrpModelUpdated")&&appStore.getState().currentDataStorage.getProperty("currentDataStorageLoaded")&&!C()&&"section"===this.props.element.getName()){var n=appStore.getState().currentTitle;n=Z(n),appStore.getState().altrpPage.getProperty("title")!==n&&appStore.dispatch((0,h.qs)("title",n)),j(n)}}},{key:"updateElement",value:function(){this.setState((function(e){return k(k({},e),{},{updateToken:R()})}))}},{key:"checkElementDisplay",value:function(e,t){var n=this.props.element;if(n.getSettings("conditional_other")){var r=n.getSettings("conditions",[]);r=r.map((function(e){return{modelField:e.conditional_model_field,operator:e.conditional_other_operator,value:e.conditional_other_condition_value}}));var a=P(r,"AND"===n.getSettings("conditional_other_display"),this.props.element.getCurrentModel(),!0);this.state.elementDisplay!==a&&this.setState((function(e){return k(k({},e),{},{elementDisplay:a})}))}}},{key:"toggleElementDisplay",value:function(){this.setState((function(e){return k(k({},e),{},{elementDisplay:!e.elementDisplay})}))}},{key:"inputIsDisplay",value:function(){var e=this.state.formsStore,t=this.props.element.getSettings("form_id",""),n=this.props.element.getSettings("form_condition_display_on","AND"),r=this.props.element.getSettings("form_conditions",[]),a=!0;return r.forEach((function(r){"AND"===n?a*=O(_.get(e,"".concat(t,".").concat(r.field_id)),r.value,r.operator):a+=O(_.get(e,"".concat(t,".").concat(r.field_id)),r.value,r.operator)})),a}},{key:"render",value:function(){var e=this.props.element,t=e.settings,n=t.hide_on_wide_screen,r=t.hide_on_desktop,o=t.hide_on_laptop,i=t.hide_on_tablet,s=t.hide_on_big_phone,l=t.hide_on_small_phone,c=(t.hide_on_trigger,t.isFixed),p=t.tooltip_position,u=e.settings.tooltip_text,d="altrp-element altrp-element".concat(e.getId()," altrp-element_").concat(e.getType());if(d+=e.getPrefixClasses()+" ","widget"===e.getType()&&(d+=" altrp-widget_".concat(e.getName())),this.props.element.getResponsiveSetting("css_class")&&(d+=" ".concat(Z(this.props.element.getResponsiveSetting("css_class"),this.props.element.getCurrentModel().getData())," ")),n&&(d+=" hide_on_wide_screen"),r&&(d+=" hide_on_desktop"),o&&(d+=" hide_on_laptop"),i&&(d+=" hide_on_tablet"),s&&(d+=" hide_on_big_phone"),l&&(d+=" hide_on_small_phone"),c&&(d+=" fixed-section"),this.state.errorInfo)return React.createElement("div",{className:"altrp-error","data-eltype":e.getType()},React.createElement("h2",null,"Something went wrong."),React.createElement("details",{style:{whiteSpace:"pre-wrap"}},this.state.error&&this.state.error.toString(),React.createElement("br",null),this.state.errorInfo.componentStack));var f={};e.getResponsiveSetting("layout_column_width")&&(Number(e.getResponsiveSetting("layout_column_width"))?f.width=e.getResponsiveSetting("layout_column_width")+"%":f.width=e.getResponsiveSetting("layout_column_width")),this.state.elementDisplay||(f.display="none");var h=e.getSettings("advanced_element_id","");h=Z(h,e.getCurrentModel().getData()),this.CSSId!==h&&(this.CSSId=h);var g=frontElementsManager.getComponentClass(e.getName()),y=React.createElement(g,{ref:this.elementRef,rootElement:this.props.rootElement,ElementWrapper:this.props.ElementWrapper,element:e,children:e.getChildren(),match:this.props.match,currentModel:this.props.currentModel,currentUser:this.props.currentUser,currentDataStorage:this.props.currentDataStorage,altrpresponses:this.props.altrpresponses,formsStore:this.props.formsStore,elementDisplay:this.state.elementDisplay,altrpPageState:this.props.altrpPageState,altrpMeta:this.props.altrpMeta,updateToken:this.state.updateToken,currentScreen:this.props.currentScreen,baseRender:this.props.baseRender,history:this.props.history,appStore:appStore});if("email"===e.getTemplateType())return this.state.elementDisplay?React.createElement(React.Fragment,null,y):null;var w=v;switch(e.getName()){case"nav":w=S.Z}u=Z(u,e.getCurrentModel().getData());var k={className:d,ref:this.elementWrapperRef,elementId:this.elementId,settings:this.settings,style:f,id:this.CSSId};return(this.reactElement||-1!==b.indexOf(e.getName()))&&(k["data-react-element"]=e.getId()),_.isEmpty(e.getResponsiveSetting("wrapper_click_actions"))||(k["data-altrp-wrapper-click-actions"]=e.getId()),_.isEmpty(e.getResponsiveSetting("sticky"))||(k["data-altrp-sticky"]=e.getResponsiveSetting("sticky"),k["data-altrp-sticky-spacing"]=e.getResponsiveSetting("st_spacing"),k["data-margin-top"]=e.getResponsiveSetting("st_spacing")||0),k["data-altrp-id"]=e.getId(),React.createElement(w,(0,a.Z)({},k,{element:e.getId()}),y,u&&React.createElement(m.Z,{position:p},u))}}]),o}(Component);D=window["h-altrp"]?M:(0,d.EN)(M);var x=window.reactRedux.connect((function(e){return{altrpresponses:e.altrpresponses,formsStore:e.formsStore,currentDataStorage:e.currentDataStorage,currentModel:e.currentModel,currentUser:e.currentUser,altrpMeta:e.altrpMeta,altrpPageState:e.altrpPageState,currentScreen:e.currentScreen}}),null,null,{forwardRef:!0})(D)},1196:function(e,t,n){"use strict";n.d(t,{FQ:function(){return r},ME:function(){return a},MN:function(){return o},L2:function(){return i}});var r="ADD_ELEMENT",a="CLEAR_ELEMENTS";function o(e){return{type:r,elementComponent:e}}function i(){return{type:a}}}}]);
//# sourceMappingURL=TemplateWidget.1dec814d2f8ec900eb65.bundle.js.map