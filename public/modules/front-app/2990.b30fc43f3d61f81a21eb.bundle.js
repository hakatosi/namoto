(self.webpackChunk=self.webpackChunk||[]).push([[2990],{4916:function(e,t,n){"use strict";var r=n(96156),a=n(92137),o=n(6610),i=n(5991),s=n(10379),l=n(46070),c=n(77608),p=n(87757),u=n.n(p),d=n(67294),g=n(75429),f=n(38773),m=n(91902),h=n(31298);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n(76593);var b=function(e){return d.createElement(h.$B,{autoHeight:!0},e.children)},S=function(e){(0,s.Z)(h,e);var t,n,r,p=(n=h,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,c.Z)(n);if(r){var a=(0,c.Z)(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return(0,l.Z)(this,e)});function h(e){var t;return(0,o.Z)(this,h),(t=p.call(this,e)).loadOptions=function(){var e=(0,a.Z)(u().mark((function e(n,r){var a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=[],!t.optionsResource){e.next=5;break}return e.next=4,t.optionsResource.search(n);case 4:a=e.sent;case 5:return t.setState((function(e){return y(y({},e),{},{options:a})})),e.abrupt("return",r(a));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),t.state={options:e.options||[]},e.optionsRoute&&(t.optionsResource=new f.Z({route:e.optionsRoute})),t.selectRef=d.createRef(),t}return(0,i.Z)(h,[{key:"componentDidMount",value:(t=(0,a.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})},{key:"onChange",value:function(){}},{key:"render",value:function(){var e={control:function(e,t){return y(y({},e),{},{boxShadow:"none",borderColor:(t.isFocused,"hsl(0,0%,80%)"),"&:hover":{borderColor:"hsl(0,0%,80%)"}})},menuPortal:function(e){return y(y({},e),{},{zIndex:99999})}},t={onChange:this.onChange,options:this.state.options||[],placeholder:this.props.placeholder,loadOptions:this.loadOptions,noOptionsMessage:this.props.noOptionsMessage||function(){return"not found"},styles:e,menuPortalTarget:document.body,menuPlacement:"auto",menuPosition:"absolute",onKeyDown:this.onKeyDown,components:{MenusList:b},captureMenuScroll:!1,isDisabled:this.state.isDisabled,ref:this.selectRef};return _.assign(t,this.props),_.isArray(t.value)&&(t.value=t.value.map((function(e){var n={label:"",value:""};if(_.isString(e)||_.isNumber(e))n.value=e,n.label=e;else if(_.isObject(e))return e;return _.isArray(t.options)&&t.options.forEach((function(e){e.value===n.value&&(n=y({},e))})),n}))),t.value&&!_.isObject(t.value)&&(t.value=t.options.find((function(e){return e.value==t.value}))),this.optionsResource?d.createElement(g.ZP,t):d.createElement(m.ZP,t)}}]),h}(d.Component);t.Z=S},81352:function(e,t,n){"use strict";n.r(t),n.d(t,{TemplateLoader:function(){return u}});var r=n(92137),a=n(6610),o=n(5991),i=n(87757),s=n.n(i),l=n(38773),c=n(71743),p=n(85009),u=function(){function e(){(0,a.Z)(this,e),this.resource=new l.Z({route:"/ajax/templates"}),this.templatesCache=new c.Z(_.get(window.__altrp_settings__,"templates_data",{}))}var t,n;return(0,o.Z)(e,[{key:"loadTemplate",value:(n=(0,r.Z)(s().mark((function t(n){var r,a,o,i=arguments;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=i.length>1&&void 0!==i[1]&&i[1],a=r,n=Number(n)?Number(n):n,a||(a=!this.templatesCache.hasProperty(n)),"loading"!==_.get(e,"statuses.".concat(n))){t.next=6;break}return t.abrupt("return",new Promise((function(t,r){e.pendingCallbacks[n]=e.pendingCallbacks[n]||[],e.pendingCallbacks[n].push(t)})));case 6:if(e.statuses[n]="loading",t.prev=7,o=null,!a){t.next=16;break}return t.next=12,this.resource.get(n);case 12:o=t.sent,this.templatesCache.setProperty(n,o),t.next=17;break;case 16:o=this.templatesCache.getProperty(n);case 17:return _.isArray(e.pendingCallbacks[n])&&e.pendingCallbacks[n].forEach((function(e){e(o)})),e.statuses[n]="loaded",e.pendingCallbacks[n]=[],t.abrupt("return",o);case 23:return t.prev=23,t.t0=t.catch(7),_.isArray(e.pendingCallbacks[n])&&e.pendingCallbacks[n].forEach((function(e){e(null)})),e.statuses[n]="loaded",e.pendingCallbacks[n]=[],t.abrupt("return",null);case 29:case"end":return t.stop()}}),t,this,[[7,23]])}))),function(e){return n.apply(this,arguments)})},{key:"loadParsedTemplate",value:(t=(0,r.Z)(s().mark((function e(t){var n,r,a=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.length>1&&void 0!==a[1]&&a[1],t){e.next=3;break}return e.abrupt("return",null);case 3:return t=Number(t)?Number(t):t,e.t0=_,e.next=7,this.loadTemplate(t,n);case 7:return e.t1=e.sent,r=e.t0.get.call(e.t0,e.t1,"data"),r=JSON.parse(r),e.abrupt("return",p.default.parseData(r));case 11:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"mbGetParsedTemplate",value:function(e){if(!this.templatesCache.hasProperty(e))return null;var t=_.get(this.templatesCache.getProperty(e),"data");return t=JSON.parse(t),p.default.parseData(t)}}]),e}();u.statuses={},u.pendingCallbacks={},window.templateLoader=new u,t.default=window.templateLoader},49825:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(85061),a=n(76593);function o(e){var t=e.index,n=e.pageIndex,r=e.gotoPage;return React.createElement("button",{className:"altrp-pagination-pages__item ".concat(t===n?"active":""),onClick:function(){return r(t)}},t+1)}var i,s=n(4916),l=n(32465),c=n(71893).ZP.div(i||(i=(0,l.Z)(["\n& .altrp-pagination-pages__item{\n","\n}\n"])),(function(e){var t=e.settings,n="",r=(0,a.getResponsiveSetting)(t,"width_count_item"),o=(0,a.getResponsiveSetting)(t,"height_count_item");return r?r.size&&r.unit&&(n+="width: ".concat(r.size).concat(r.unit,";"),n+="padding-left: 0;",n+="padding-right: 0;"):(n+="width: 35px;",n+="padding-left: 0;",n+="padding-right: 0;"),o?o.size&&o.unit&&(n+="height: ".concat(o.size).concat(o.unit,";"),n+="padding-top: 0;",n+="padding-bottom: 0;"):(n+="height: 35px;",n+="padding-top: 0;",n+="padding-bottom: 0;"),n}));function p(e){var t=e.settings,n=e.nextPage,i=e.previousPage,l=e.setPageSize,p=e.pageIndex,u=e.pageCount,d=e.pageSize,g=e.widgetId,f=e.gotoPage,m=t.inner_page_count_options,h=t.inner_page_type,v=t.current_page_text,y=t.inner_page_count,b=t.next_icon,S=t.prev_icon,w=t.first_last_buttons_count,R=t.middle_buttons_count,E=t.posts_pagination_type,k=t.is_with_ellipsis,P=React.useMemo((function(){var e=null;return m&&(e=(e=m.split("\n")).map((function(e){return{value:Number(e),label:Number(e)}}))),e}),[m]),O=React.useMemo((function(){var e=v||"Current Page: {{page}}";return e=e.replace("{{page}}",p+1).replace("{{page_count}}",u),"pages"===h||"pages"===E?React.createElement("div",{className:"altrp-pagination-pages"},u>2*w+R&&w&&R?(0,a.generateButtonsArray)(p,u,w,R).map((function(e,t){return"ellipsis"===e?k?React.createElement("div",{key:e+t,className:"altrp-pagination__ellipsis"},"..."):React.createElement("span",null," "):React.createElement(o,{key:e,index:e,pageIndex:p,gotoPage:f})})):(0,r.Z)(Array(u)).map((function(e,t){return React.createElement(o,{key:t,index:t,pageIndex:p,gotoPage:f})}))):e}),[v,p,u,h,y,t]);return"none"===h?null:React.createElement(c,{className:"altrp-pagination",settings:t},!t.hide_pre_page_button&&React.createElement("button",{className:"altrp-pagination__previous",onClick:function(){i()},disabled:0===p},React.createElement("span",{dangerouslySetInnerHTML:{__html:_.isString(t.prev_text)?t.prev_text:"Previous Page"}}),(0,a.renderAssetIcon)(S)),!t.hide_pages_buttons_button&&React.createElement("div",{className:"altrp-pagination__count"},O),!t.hide_next_page_button&&React.createElement("button",{className:"altrp-pagination__next",onClick:function(){n()},disabled:u===p+1},React.createElement("span",{dangerouslySetInnerHTML:{__html:_.isString(t.next_text)?t.next_text:"Next Page"}}),(0,a.renderAssetIcon)(b)),!t.hide_page_input&&React.createElement("input",{className:"altrp-pagination__goto-page",type:"number",defaultValue:p+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;f(t)}}),!t.hide_pagination_select&&P&&React.createElement(s.Z,{className:"altrp-pagination__select-size",options:P,classNamePrefix:g+" altrp-field-select2",value:P.find((function(e){return e.value===d})),isSearchable:!1,onChange:function(e){l(e.value)}}))}},85009:function(e,t,n){"use strict";n.r(t);var r=n(96156),a=n(6610),o=n(5991),i=n(67576);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw o}}}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,[{key:"parseData",value:function(e,t,n,r){var a=[],o=new i.default(e);if(n&&o.addModelInfo({modelName:"page",modelId:n}),_.isArray(r)){var s,p=c(r);try{for(p.s();!(s=p.n()).done;){var u=s.value;o.addModelInfo(l({},u))}}catch(e){p.e(e)}finally{p.f()}}if(e.children&&e.children.length){var d,g=c(e.children);try{for(g.s();!(d=g.n()).done;){var f=d.value;window.frontElementsManager.checkElementExists(f.name)&&a.push(this.parseData(f,o))}}catch(e){g.e(e)}finally{g.f()}}return o.id=e.id,o.lastElement=e.lastElement,o.children=a,o.settings=e.settings,o.name=e.name,o.type=e.type,o.dynamicContentSettings=e.dynamicContentSettings,t&&o.setParent(t),o.update(),o}},{key:"cloneElement",value:function(e){if(!e)return null;var t=_.cloneDeep(e);return this.updateParents(t),t}},{key:"updateParents",value:function(e){var t=this;_.isArray(e.children)&&e.children.forEach((function(n){n.setParent(e),t.updateParents(n)}))}}]),e}();window.frontElementsFabric=new u,t.default=window.frontElementsFabric},11914:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z}});var r,a=n(22122),o=n(96156),i=n(6610),s=n(5991),l=n(63349),c=n(10379),p=n(46070),u=n(77608),d=n(5977),g=n(1196),f=n(16455),m=n(61113),h=n(32465),v=n(76593),y=styled.div(r||(r=(0,h.Z)(["",""])),(function(e){var t=e.settings,n="";n+="&.altrp-column{";var r=(0,v.getResponsiveSetting)(t,"layout_column_width");return r&&(Number(r)?n+="width:".concat(r,"%;"):n+="width:".concat(r,";")),n+"}"})),b=n(90628),S=["input","input-select","input-multi-select","input-select2","input-radio","input-checkbox","input-wysiwyg","input-textarea","input-slider","input-range-slider","input-image-select","input-accept","input-text","input-text-common","input-password","input-number","input-tel","input-email","input-date","input-hidden","input-file","input-gallery","breadcrumbs","map","map_builder","menu","diagram","input","nav","dashboards","tour","icon","export","template","gallery","dropbar","posts","table","tabs","heading-type-animating"];function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E,k=window.altrpHelpers,P=k.altrpCompare,O=k.altrpRandomId,D=k.conditionsChecker,C=k.isEditor,x=k.replaceContentWithData,M=k.setTitle,N=function(e){(0,c.Z)(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,u.Z)(t);if(n){var a=(0,u.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,p.Z)(this,e)});function o(e){var t;return(0,i.Z)(this,o),(t=r.call(this,e)).updateStore=function(){t.state.currentModel!==appStore.getState().currentModel&&t.setState((function(e){return R(R({},e),{},{currentModel:appStore.getState().currentModel})})),t.state.currentUser!==appStore.getState().currentUser&&t.setState((function(e){return R(R({},e),{},{currentModel:appStore.getState().currentUser})})),t.state.currentDataStorage!==appStore.getState().currentDataStorage&&t.setState((function(e){return R(R({},e),{},{currentDataStorage:appStore.getState().currentDataStorage})}))},t.state={elementDisplay:!t.props.element.getSettings("default_hidden")},t.reactElement=t.props.element.getSettings("react_element"),t.elementId=t.props.element.getId(),t.settings=t.props.element.getSettings(),e.element.wrapper=(0,l.Z)(t),t.elementWrapperRef=React.createRef(),t.elementRef=React.createRef(),C()||appStore.dispatch((0,g.MN)((0,l.Z)(t))),t}return(0,s.Z)(o,[{key:"componentDidCatch",value:function(e,t){this.setState((function(n){return R(R({},n),{},{error:e,errorInfo:t})}))}},{key:"componentDidMount",value:function(){var e,t;!C()&&(null===(e=window)||void 0===e||null===(t=e.frontApp)||void 0===t||t.onWidgetMount()),_.isFunction(this.props.element.update)&&(this.props.element.update(),this.props.element.updateFonts()),this.checkElementDisplay()}},{key:"getStylesHTMLElement",value:function(){return _.get(window,"stylesModule.stylesContainer.current")&&window.stylesModule.stylesContainer.current.getElementsByClassName("altrp-styles".concat(this.props.element.getId()))[0]||null}},{key:"componentDidUpdate",value:function(e,t){if(this.checkElementDisplay(),appStore.getState().currentModel.getProperty("altrpModelUpdated")&&appStore.getState().currentDataStorage.getProperty("currentDataStorageLoaded")&&!C()&&"section"===this.props.element.getName()){var n=appStore.getState().currentTitle;n=x(n),appStore.getState().altrpPage.getProperty("title")!==n&&appStore.dispatch((0,m.qs)("title",n)),M(n)}}},{key:"updateElement",value:function(){this.setState((function(e){return R(R({},e),{},{updateToken:O()})}))}},{key:"checkElementDisplay",value:function(e,t){var n=this.props.element;if(n.getSettings("conditional_other")){var r=n.getSettings("conditions",[]);r=r.map((function(e){return{modelField:e.conditional_model_field,operator:e.conditional_other_operator,value:e.conditional_other_condition_value}}));var a=D(r,"AND"===n.getSettings("conditional_other_display"),this.props.element.getCurrentModel(),!0);this.state.elementDisplay!==a&&this.setState((function(e){return R(R({},e),{},{elementDisplay:a})}))}}},{key:"toggleElementDisplay",value:function(){this.setState((function(e){return R(R({},e),{},{elementDisplay:!e.elementDisplay})}))}},{key:"inputIsDisplay",value:function(){var e=this.state.formsStore,t=this.props.element.getSettings("form_id",""),n=this.props.element.getSettings("form_condition_display_on","AND"),r=this.props.element.getSettings("form_conditions",[]),a=!0;return r.forEach((function(r){"AND"===n?a*=P(_.get(e,"".concat(t,".").concat(r.field_id)),r.value,r.operator):a+=P(_.get(e,"".concat(t,".").concat(r.field_id)),r.value,r.operator)})),a}},{key:"render",value:function(){var e=this.props.element,t=e.settings,n=t.hide_on_wide_screen,r=t.hide_on_desktop,o=t.hide_on_laptop,i=t.hide_on_tablet,s=t.hide_on_big_phone,l=t.hide_on_small_phone,c=(t.hide_on_trigger,t.isFixed),p="altrp-element altrp-element".concat(e.getId()," altrp-element_").concat(e.getType());if(p+=e.getPrefixClasses()+" ","widget"===e.getType()&&(p+=" altrp-widget_".concat(e.getName())),this.props.element.getResponsiveSetting("css_class")&&(p+=" ".concat(x(this.props.element.getResponsiveSetting("css_class"),this.props.element.getCurrentModel().getData())," ")),n&&(p+=" hide_on_wide_screen"),r&&(p+=" hide_on_desktop"),o&&(p+=" hide_on_laptop"),i&&(p+=" hide_on_tablet"),s&&(p+=" hide_on_big_phone"),l&&(p+=" hide_on_small_phone"),c&&(p+=" fixed-section"),this.state.errorInfo)return React.createElement("div",{className:"altrp-error","data-eltype":e.getType()},React.createElement("h2",null,"Something went wrong."),React.createElement("details",{style:{whiteSpace:"pre-wrap"}},this.state.error&&this.state.error.toString(),React.createElement("br",null),this.state.errorInfo.componentStack));var u={};e.getResponsiveSetting("layout_column_width")&&(Number(e.getResponsiveSetting("layout_column_width"))?u.width=e.getResponsiveSetting("layout_column_width")+"%":u.width=e.getResponsiveSetting("layout_column_width")),this.state.elementDisplay||(u.display="none");var d=e.getSettings("advanced_element_id","");d=x(d,e.getCurrentModel().getData()),this.CSSId!==d&&(this.CSSId=d);var g=frontElementsManager.getComponentClass(e.getName()),m=React.createElement(g,{ref:this.elementRef,rootElement:this.props.rootElement,ElementWrapper:this.props.ElementWrapper,element:e,children:e.getChildren(),match:this.props.match,currentModel:this.props.currentModel,currentUser:this.props.currentUser,currentDataStorage:this.props.currentDataStorage,altrpresponses:this.props.altrpresponses,formsStore:this.props.formsStore,elementDisplay:this.state.elementDisplay,altrpPageState:this.props.altrpPageState,altrpMeta:this.props.altrpMeta,updateToken:this.state.updateToken,currentScreen:this.props.currentScreen,baseRender:this.props.baseRender,history:this.props.history,appStore:appStore});if("email"===e.getTemplateType())return this.state.elementDisplay?React.createElement(React.Fragment,null,m):null;var h=y;switch(e.getName()){case"nav":h=b.Z}var v={className:p,ref:this.elementWrapperRef,elementId:this.elementId,settings:this.settings,style:u,id:this.CSSId};(this.reactElement||-1!==S.indexOf(e.getName()))&&(v["data-react-element"]=e.getId()),_.isEmpty(e.getResponsiveSetting("wrapper_click_actions"))||(v["data-altrp-wrapper-click-actions"]=e.getId()),_.isEmpty(e.getResponsiveSetting("sticky"))||(v["data-altrp-sticky"]=e.getResponsiveSetting("sticky"),v["data-altrp-sticky-spacing"]=e.getResponsiveSetting("st_spacing"),v["data-margin-top"]=e.getResponsiveSetting("st_spacing")||0),v["data-altrp-id"]=e.getId();var w=this.props.element.getResponsiveSetting("tooltip_position"),R=this.props.element.getResponsiveSetting("tooltip_text");R=x(R,e.getCurrentModel().getData());var E=this.props.element.getResponsiveSetting("tooltip_minimal"),k=this.props.element.getResponsiveSetting("tooltip_show_type"),P=this.props.element.getResponsiveSetting("tooltip_horizontal_offset"),O=this.props.element.getResponsiveSetting("tooltip_vertical_offset");return React.createElement(h,(0,a.Z)({},v,{element:e.getId()}),k&&"never"!==k?React.createElement(f.Z,{position:w,id:this.props.element.getId(),state:k,minimal:E,horizontal:P,vertical:O,text:R},m):m)}}]),o}(Component);E=window["h-altrp"]?N:(0,d.EN)(N);var Z=window.reactRedux.connect((function(e){return{altrpresponses:e.altrpresponses,formsStore:e.formsStore,currentDataStorage:e.currentDataStorage,currentModel:e.currentModel,currentUser:e.currentUser,altrpMeta:e.altrpMeta,altrpPageState:e.altrpPageState,currentScreen:e.currentScreen}}),null,null,{forwardRef:!0})(E)},1196:function(e,t,n){"use strict";n.d(t,{FQ:function(){return r},ME:function(){return a},MN:function(){return o},L2:function(){return i}});var r="ADD_ELEMENT",a="CLEAR_ELEMENTS";function o(e){return{type:r,elementComponent:e}}function i(){return{type:a}}}}]);
//# sourceMappingURL=2990.b30fc43f3d61f81a21eb.bundle.js.map