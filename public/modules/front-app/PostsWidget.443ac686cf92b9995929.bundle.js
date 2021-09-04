(self.webpackChunk=self.webpackChunk||[]).push([[1197],{14665:function(t,e,n){"use strict";function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n.d(e,{Z:function(){return s}})},46790:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return w}});var s,a=n(6610),r=n(5991),o=n(63349),i=n(10379),p=n(46070),u=n(77608),c=n(71614),l=n(76593),d=n(96156),f=n(92137),g=n(87757),m=n.n(g),h=n(67294),v=n(74374),y=n(81352),O=n(85009),P=n(71743),b=n(11914),E=n(32465),Z=n(71893).ZP.div(s||(s=(0,E.Z)(["{\n  grid-template-columns: repeat(",", 1fr);\n  display: grid;    \n  ","\n"])),(function(t){return t.columnsCount}),(function(t){var e=t.posts_columns_gap,n=t.posts_rows_gap,s="";return e&&!Number(e)?s+="grid-column-gap:".concat(e,";"):Number(e)&&(s+="grid-column-gap:".concat(e,"px;")),n&&!Number(n)?s+="grid-row-gap:".concat(n,";"):Number(n)&&(s+="grid-row-gap:".concat(n,"px;")),s})),C=n(49825);function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(Object(n),!0).forEach((function(e){(0,d.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n.e(350).then(n.bind(n,90350)),n.e(8102).then(n.bind(n,48102));var x=function(t){(0,i.Z)(d,t);var e,n,s,o,c=(s=d,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=(0,u.Z)(s);if(o){var n=(0,u.Z)(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return(0,p.Z)(this,t)});function d(t){var e;return(0,a.Z)(this,d),(e=c.call(this,t)).renderPost=function(t){var n=_.get(e.props.settings,"posts_card_hover_template",null),s=_.get(e.props.settings,"posts_transition_type",null),a=_.cloneDeep(e.props.data[t]||e.props.data),r=a.component||"";if(e.state.simpleTemplate&&!_.get(e.postsComponents,"".concat(e.state.simpleTemplate,".").concat(t))){var o=O.default.cloneElement(e.state.simpleTemplate);o.setCardModel(new P.Z(a),t),r=h.createElement(o.componentClass,{element:o,ElementWrapper:b.default,children:o.children}),_.set(e.postsComponents,"".concat(e.state.simpleTemplate,".").concat(t),r)}else _.get(e.postsComponents,"".concat(e.state.simpleTemplate,".").concat(t))&&(r=_.get(e.postsComponents,"".concat(e.state.simpleTemplate,".").concat(t)));return h.createElement(h.Fragment,{key:a.id||a.altrpIndex},h.createElement("div",{className:"altrp-post"},r,n&&h.createElement("div",{className:"altrp-post altrp-post--hover altrp-post--hover--".concat(s)},r)))},e.state={simpleTemplate:"",simpleTemplateId:null,currentPage:1},e.postsComponents={},e}return(0,r.Z)(d,[{key:"componentDidMount",value:(n=(0,f.Z)(m().mark((function t(){var e,n,s=this;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.props.settings,!(n=_.get(e,"posts_card_template"))){t.next=6;break}if(n){t.next=5;break}return t.abrupt("return");case 5:this.setState((function(t){return k(k({},t),{},{simpleTemplateId:n})}),(0,f.Z)(m().mark((function t(){var e;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.default.loadParsedTemplate(n);case 2:e=t.sent,s.setState((function(t){return k(k({},t),{},{simpleTemplate:e})}));case 4:case"end":return t.stop()}}),t)}))));case 6:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"shouldComponentUpdate",value:function(t,e){return!((0,l.isEditor)()&&this.props.settings===t.settings&&_.isEqual(this.state.simpleTemplate,e.simpleTemplate)&&_.isEqual(this.state.simpleTemplateId,e.simpleTemplateId)&&_.isEqual(this.props.data,t.data)&&this.state.currentPage===e.currentPage)}},{key:"componentDidUpdate",value:(e=(0,f.Z)(m().mark((function t(e){var n,s,a,r=this;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.props.settings,s=this.state.simpleTemplateId,a=_.get(n,"posts_card_template",s),_.isEqual(e.data,this.props.data)||this.setState((function(t){return k(k({},t),{},{posts:r.props.data})})),a===s){t.next=8;break}if(a){t.next=7;break}return t.abrupt("return");case 7:this.setState((function(t){return k(k({},t),{},{simpleTemplateId:a})}),(0,f.Z)(m().mark((function t(){var e;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.default.loadParsedTemplate(a);case 2:e=t.sent,r.setState((function(t){return k(k({},t),{},{simpleTemplate:e})}));case 4:case"end":return t.stop()}}),t)}))));case 8:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})},{key:"getPageCount",value:function(){var t=this.props.data,e=Number((0,l.getResponsiveSetting)(this.props.settings,"posts_per_page"))||12;return e&&_.get(t,"length")?Math.ceil(t.length/e):1}},{key:"setPage",value:function(t){(t=Number(t))||(t=1),t<0&&(t=0),t>this.getPageCount()&&(t=this.getPageCount()),this.state.currentPage!==t&&this.setState((function(e){return k(k({},e),{},{currentPage:t})}))}},{key:"renderPagination",value:function(){var t=this,e=k({},this.props.settings);if(!this.props.data.length&&!(0,l.isEditor)())return null;var n=(0,l.getResponsiveSetting)(this.props.settings,"posts_pagination_type")||"";if(n){var s=this.state.currentPage,a=this.getPageCount();if("pages"===n){e.hide_pagination_select=!0,e.hide_page_input=!0;var r={settings:e,pageCount:a,pageIndex:this.state.currentPage-1,nextPage:function(){t.setPage(t.state.currentPage+1)},previousPage:function(){t.setPage(t.state.currentPage-1)},gotoPage:function(e){t.setPage(e+1)},pageSize:this.props.element.getResponsiveSetting("posts_per_page"),widgetId:this.props.element.getId()};return h.createElement(C.Z,r)}return"prev_next"===n?h.createElement("div",{className:"altrp-pagination-pages"},h.createElement("button",{className:"altrp-pagination__previous "+(s<=1?"state-disabled":""),disabled:s<=1,onClick:function(){t.setPage(s-1)}},h.createElement("span",null,e.posts_prev_text||""),(0,l.renderAssetIcon)(e.prev_icon)),h.createElement("button",{className:"altrp-pagination__next "+(s===a?"state-disabled":""),disabled:s===a,onClick:function(){t.setPage(s+1)}},h.createElement("span",null,e.posts_next_text||""),(0,l.renderAssetIcon)(e.next_icon))):h.createElement("div",{className:"altrp-pagination"},!e.hide_pre_page_button&&h.createElement("button",{className:"altrp-pagination__previous",onClick:function(){return t.setPage(s-1)},disabled:s<=1},h.createElement("span",{dangerouslySetInnerHTML:{__html:e.prev_text||"Previous Page"}}),(0,l.renderAssetIcon)(e.prev_icon)),!e.hide_pages_buttons_button&&h.createElement("div",{className:"altrp-pagination__count"},e.pageText),!e.hide_next_page_button&&h.createElement("button",{className:"altrp-pagination__next",onClick:function(){return t.setPage(s+1)},disabled:s===a},h.createElement("span",{dangerouslySetInnerHTML:{__html:e.next_text||"Next Page"}}),(0,l.renderAssetIcon)(e.next_icon)))}return null}},{key:"render",value:function(){var t=this,e=this.state.currentPage,n=Number((0,l.getResponsiveSetting)(this.props.settings,"posts_per_page"))||12,s=this.props.data;!_.isArray(s)&&_.isObject(s)&&(s=[s]),_.isArray(s)||(s=[]);var a=0;n&&Number(n)&&(e>1&&(a=(e-1)*n),s=s.slice(a,a+n));var r=Number((0,l.getResponsiveSetting)(this.props.settings,"posts_columns"))||1,o=(0,l.getResponsiveSetting)(this.props.settings,"posts_columns_gap")||"",i=(0,l.getResponsiveSetting)(this.props.settings,"posts_rows_gap")||"";return h.createElement(h.Fragment,null,h.createElement(Z,{columnsCount:r,posts_columns_gap:o,posts_rows_gap:i,className:"altrp-posts"},s.map((function(e,n){return t.renderPost(a+n)}))),this.renderPagination())}}]),d}(h.Component),R=function(t){return"datasource"===t.settings.choose_datasource?((0,l.isEditor)()&&((t=k({},t)).settings=k({},t.settings),t.data=Array.from({length:100},(function(){return{}})),(0,l.setAltrpIndex)(t.data)),h.createElement(x,t)):h.createElement(v.Z,t,h.createElement(x,null))};var w=function(t){(0,i.Z)(d,t);var e,n,s=(e=d,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,s=(0,u.Z)(e);if(n){var a=(0,u.Z)(this).constructor;t=Reflect.construct(s,arguments,a)}else t=s.apply(this,arguments);return(0,p.Z)(this,t)});function d(t){var e;return(0,a.Z)(this,d),(e=s.call(this,t)).state={settings:t.element.getSettings()},t.element.component=(0,o.Z)(e),window.elementDecorator&&window.elementDecorator((0,o.Z)(e)),t.baseRender&&(e.render=t.baseRender((0,o.Z)(e))),e}return(0,r.Z)(d,[{key:"showPosts",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"datasource"===this.props.element.getSettings("choose_datasource")||!(!t.modelName&&!t.dataSource)}},{key:"render",value:function(){if(!this.props.currentModel.getProperty("altrpModelUpdated"))return"";var t=new c.Z(this.props.element.getSettings().table_query||{},this);if(!this.showPosts(t))return React.createElement("div",{children:"Please Choose Source"});var e=t.getFromModel(this.state.modelData)||[];if("datasource"===this.props.element.getSettings("choose_datasource")){var n=this.props.element.getSettings("posts_datasource","");n=n.replace(/}}/g,"").replace(/{{/g,""),e=(0,l.getDataByPath)(n,[],this.props.element.getCurrentModel().getData())}return React.createElement(R,{query:t,currentModel:this.props.currentModel,data:e,element:this.props.element,settings:this.props.element.getSettings()})}}]),d}(Component)},75429:function(t,e,n){"use strict";var s=n(81253),a=n(22122),r=n(6610),o=n(5991),i=n(10379),p=n(46070),u=n(77608),c=n(67294),l=(n(22368),n(73935),n(53569)),d=n(75912);var f,g,m,h=(0,(n(81144),n(35639),n(61085)).m)(d.S),v=(f=h,m=g=function(t){(0,i.Z)(g,t);var e,n,d=(e=g,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,s=(0,u.Z)(e);if(n){var a=(0,u.Z)(this).constructor;t=Reflect.construct(s,arguments,a)}else t=s.apply(this,arguments);return(0,p.Z)(this,t)});function g(t){var e;return(0,r.Z)(this,g),(e=d.call(this)).select=void 0,e.lastRequest=void 0,e.mounted=!1,e.optionsCache={},e.handleInputChange=function(t,n){var s=e.props,a=s.cacheOptions,r=s.onInputChange,o=(0,l.G)(t,n,r);if(!o)return delete e.lastRequest,void e.setState({inputValue:"",loadedInputValue:"",loadedOptions:[],isLoading:!1,passEmptyOptions:!1});if(a&&e.optionsCache[o])e.setState({inputValue:o,loadedInputValue:o,loadedOptions:e.optionsCache[o],isLoading:!1,passEmptyOptions:!1});else{var i=e.lastRequest={};e.setState({inputValue:o,isLoading:!0,passEmptyOptions:!e.state.loadedInputValue},(function(){e.loadOptions(o,(function(t){e.mounted&&(t&&(e.optionsCache[o]=t),i===e.lastRequest&&(delete e.lastRequest,e.setState({isLoading:!1,loadedInputValue:o,loadedOptions:t||[],passEmptyOptions:!1})))}))}))}return o},e.state={defaultOptions:Array.isArray(t.defaultOptions)?t.defaultOptions:void 0,inputValue:void 0!==t.inputValue?t.inputValue:"",isLoading:!0===t.defaultOptions,loadedOptions:[],passEmptyOptions:!1},e}return(0,o.Z)(g,[{key:"componentDidMount",value:function(){var t=this;this.mounted=!0;var e=this.props.defaultOptions,n=this.state.inputValue;!0===e&&this.loadOptions(n,(function(e){if(t.mounted){var n=!!t.lastRequest;t.setState({defaultOptions:e||[],isLoading:n})}}))}},{key:"UNSAFE_componentWillReceiveProps",value:function(t){t.cacheOptions!==this.props.cacheOptions&&(this.optionsCache={}),t.defaultOptions!==this.props.defaultOptions&&this.setState({defaultOptions:Array.isArray(t.defaultOptions)?t.defaultOptions:void 0})}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"focus",value:function(){this.select.focus()}},{key:"blur",value:function(){this.select.blur()}},{key:"loadOptions",value:function(t,e){var n=this.props.loadOptions;if(!n)return e();var s=n(t,e);s&&"function"==typeof s.then&&s.then(e,(function(){return e()}))}},{key:"render",value:function(){var t=this,e=this.props,n=(e.loadOptions,e.isLoading),r=(0,s.Z)(e,["loadOptions","isLoading"]),o=this.state,i=o.defaultOptions,p=o.inputValue,u=o.isLoading,l=o.loadedInputValue,d=o.loadedOptions,g=o.passEmptyOptions?[]:p&&l?d:i||[];return c.createElement(f,(0,a.Z)({},r,{ref:function(e){t.select=e},options:g,isLoading:u||n,onInputChange:this.handleInputChange}))}}]),g}(c.Component),g.defaultProps={cacheOptions:!1,defaultOptions:!1,filterOption:null,isLoading:!1},m);e.ZP=v}}]);
//# sourceMappingURL=PostsWidget.443ac686cf92b9995929.bundle.js.map