(self.webpackChunk=self.webpackChunk||[]).push([[3825],{41788:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(14665);function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,(0,r.Z)(e,t)}},14665:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,{Z:function(){return r}})},32465:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{Z:function(){return r}})},11914:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z}});var r,o=n(22122),a=n(96156),i=n(6610),s=n(5991),p=n(63349),c=n(10379),l=n(46070),u=n(77608),d=n(5977),g=n(1196),m=n(16455),h=n(61113),f=n(32465),S=n(76593),y=styled.div(r||(r=(0,f.Z)(["",""])),(function(e){var t=e.settings,n="";n+="&.altrp-column{";var r=(0,S.getResponsiveSetting)(t,"layout_column_width");return r&&(Number(r)?n+="width:".concat(r,"%;"):n+="width:".concat(r,";")),n+"}"})),v=n(90628),w=["input","input-select","input-multi-select","input-select2","input-radio","input-checkbox","input-wysiwyg","input-textarea","input-slider","input-range-slider","input-image-select","input-accept","input-text","input-text-common","input-password","input-number","input-tel","input-email","input-date","input-hidden","input-file","input-gallery","breadcrumbs","map","map_builder","menu","diagram","input","nav","dashboards","tour","icon","export","template","gallery","dropbar","posts","table","tabs","heading-type-animating"];function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b,E=window.altrpHelpers,k=E.altrpCompare,M=E.altrpRandomId,O=E.conditionsChecker,C=E.isEditor,P=E.replaceContentWithData,I=E.setTitle,N=function(e){(0,c.Z)(a,e);var t,n,r=(t=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,u.Z)(t);if(n){var o=(0,u.Z)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return(0,l.Z)(this,e)});function a(e){var t;return(0,i.Z)(this,a),(t=r.call(this,e)).updateStore=function(){t.state.currentModel!==appStore.getState().currentModel&&t.setState((function(e){return D(D({},e),{},{currentModel:appStore.getState().currentModel})})),t.state.currentUser!==appStore.getState().currentUser&&t.setState((function(e){return D(D({},e),{},{currentModel:appStore.getState().currentUser})})),t.state.currentDataStorage!==appStore.getState().currentDataStorage&&t.setState((function(e){return D(D({},e),{},{currentDataStorage:appStore.getState().currentDataStorage})}))},t.state={elementDisplay:!t.props.element.getSettings("default_hidden")},t.reactElement=t.props.element.getSettings("react_element"),t.elementId=t.props.element.getId(),t.settings=t.props.element.getSettings(),e.element.wrapper=(0,p.Z)(t),t.elementWrapperRef=React.createRef(),t.elementRef=React.createRef(),C()||appStore.dispatch((0,g.MN)((0,p.Z)(t))),t}return(0,s.Z)(a,[{key:"componentDidCatch",value:function(e,t){this.setState((function(n){return D(D({},n),{},{error:e,errorInfo:t})}))}},{key:"componentDidMount",value:function(){var e,t;!C()&&(null===(e=window)||void 0===e||null===(t=e.frontApp)||void 0===t||t.onWidgetMount()),_.isFunction(this.props.element.update)&&(this.props.element.update(),this.props.element.updateFonts()),this.checkElementDisplay()}},{key:"getStylesHTMLElement",value:function(){return _.get(window,"stylesModule.stylesContainer.current")&&window.stylesModule.stylesContainer.current.getElementsByClassName("altrp-styles".concat(this.props.element.getId()))[0]||null}},{key:"componentDidUpdate",value:function(e,t){if(this.checkElementDisplay(),appStore.getState().currentModel.getProperty("altrpModelUpdated")&&appStore.getState().currentDataStorage.getProperty("currentDataStorageLoaded")&&!C()&&"section"===this.props.element.getName()){var n=appStore.getState().currentTitle;n=P(n),appStore.getState().altrpPage.getProperty("title")!==n&&appStore.dispatch((0,h.qs)("title",n)),I(n)}}},{key:"updateElement",value:function(){this.setState((function(e){return D(D({},e),{},{updateToken:M()})}))}},{key:"checkElementDisplay",value:function(e,t){var n=this.props.element;if(n.getSettings("conditional_other")){var r=n.getSettings("conditions",[]);r=r.map((function(e){return{modelField:e.conditional_model_field,operator:e.conditional_other_operator,value:e.conditional_other_condition_value}}));var o=O(r,"AND"===n.getSettings("conditional_other_display"),this.props.element.getCurrentModel(),!0);this.state.elementDisplay!==o&&this.setState((function(e){return D(D({},e),{},{elementDisplay:o})}))}}},{key:"toggleElementDisplay",value:function(){this.setState((function(e){return D(D({},e),{},{elementDisplay:!e.elementDisplay})}))}},{key:"inputIsDisplay",value:function(){var e=this.state.formsStore,t=this.props.element.getSettings("form_id",""),n=this.props.element.getSettings("form_condition_display_on","AND"),r=this.props.element.getSettings("form_conditions",[]),o=!0;return r.forEach((function(r){"AND"===n?o*=k(_.get(e,"".concat(t,".").concat(r.field_id)),r.value,r.operator):o+=k(_.get(e,"".concat(t,".").concat(r.field_id)),r.value,r.operator)})),o}},{key:"render",value:function(){var e=this.props.element,t=e.settings,n=t.hide_on_wide_screen,r=t.hide_on_desktop,a=t.hide_on_laptop,i=t.hide_on_tablet,s=t.hide_on_big_phone,p=t.hide_on_small_phone,c=(t.hide_on_trigger,t.isFixed),l=t.tooltip_position,u=e.settings.tooltip_text,d="altrp-element altrp-element".concat(e.getId()," altrp-element_").concat(e.getType());if(d+=e.getPrefixClasses()+" ","widget"===e.getType()&&(d+=" altrp-widget_".concat(e.getName())),this.props.element.getResponsiveSetting("css_class")&&(d+=" ".concat(P(this.props.element.getResponsiveSetting("css_class"),this.props.element.getCurrentModel().getData())," ")),n&&(d+=" hide_on_wide_screen"),r&&(d+=" hide_on_desktop"),a&&(d+=" hide_on_laptop"),i&&(d+=" hide_on_tablet"),s&&(d+=" hide_on_big_phone"),p&&(d+=" hide_on_small_phone"),c&&(d+=" fixed-section"),this.state.errorInfo)return React.createElement("div",{className:"altrp-error","data-eltype":e.getType()},React.createElement("h2",null,"Something went wrong."),React.createElement("details",{style:{whiteSpace:"pre-wrap"}},this.state.error&&this.state.error.toString(),React.createElement("br",null),this.state.errorInfo.componentStack));var g={};e.getResponsiveSetting("layout_column_width")&&(Number(e.getResponsiveSetting("layout_column_width"))?g.width=e.getResponsiveSetting("layout_column_width")+"%":g.width=e.getResponsiveSetting("layout_column_width")),this.state.elementDisplay||(g.display="none");var h=e.getSettings("advanced_element_id","");h=P(h,e.getCurrentModel().getData()),this.CSSId!==h&&(this.CSSId=h);var f=frontElementsManager.getComponentClass(e.getName()),S=React.createElement(f,{ref:this.elementRef,rootElement:this.props.rootElement,ElementWrapper:this.props.ElementWrapper,element:e,children:e.getChildren(),match:this.props.match,currentModel:this.props.currentModel,currentUser:this.props.currentUser,currentDataStorage:this.props.currentDataStorage,altrpresponses:this.props.altrpresponses,formsStore:this.props.formsStore,elementDisplay:this.state.elementDisplay,altrpPageState:this.props.altrpPageState,altrpMeta:this.props.altrpMeta,updateToken:this.state.updateToken,currentScreen:this.props.currentScreen,baseRender:this.props.baseRender,history:this.props.history,appStore:appStore});if("email"===e.getTemplateType())return this.state.elementDisplay?React.createElement(React.Fragment,null,S):null;var R=y;switch(e.getName()){case"nav":R=v.Z}u=P(u,e.getCurrentModel().getData());var D={className:d,ref:this.elementWrapperRef,elementId:this.elementId,settings:this.settings,style:g,id:this.CSSId};return(this.reactElement||-1!==w.indexOf(e.getName()))&&(D["data-react-element"]=e.getId()),_.isEmpty(e.getResponsiveSetting("wrapper_click_actions"))||(D["data-altrp-wrapper-click-actions"]=e.getId()),_.isEmpty(e.getResponsiveSetting("sticky"))||(D["data-altrp-sticky"]=e.getResponsiveSetting("sticky"),D["data-altrp-sticky-spacing"]=e.getResponsiveSetting("st_spacing"),D["data-margin-top"]=e.getResponsiveSetting("st_spacing")||0),D["data-altrp-id"]=e.getId(),React.createElement(R,(0,o.Z)({},D,{element:e.getId()}),S,u&&React.createElement(m.Z,{position:l},u))}}]),a}(Component);b=window["h-altrp"]?N:(0,d.EN)(N);var Z=window.reactRedux.connect((function(e){return{altrpresponses:e.altrpresponses,formsStore:e.formsStore,currentDataStorage:e.currentDataStorage,currentModel:e.currentModel,currentUser:e.currentUser,altrpMeta:e.altrpMeta,altrpPageState:e.altrpPageState,currentScreen:e.currentScreen}}),null,null,{forwardRef:!0})(b)},1196:function(e,t,n){"use strict";n.d(t,{FQ:function(){return r},ME:function(){return o},MN:function(){return a},L2:function(){return i}});var r="ADD_ELEMENT",o="CLEAR_ELEMENTS";function a(e){return{type:r,elementComponent:e}}function i(){return{type:o}}},54534:function(e,t,n){"use strict";n.d(t,{$:function(){return r},z:function(){return o}});var r="TRIGGER_POPUP",o=function(e){return{type:r,payload:e}}}}]);
//# sourceMappingURL=FrontPopup.bc7226e740de7bfb5e64.bundle.js.map