(self.webpackChunk=self.webpackChunk||[]).push([[3905],{6423:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return T}});var s,a=r(22122),o=r(85061),i=r(96156),n=r(6610),l=r(5991),c=r(63349),p=r(10379),u=r(46070),d=r(77608),m=r(67294),g=r(46066),h=r(49e3),v=r(32543),f=r(32465),y=r(71893),b=r(32360),k=y.ZP.div(s||(s=(0,f.Z)(["\n& .altrp-carousel-slide{\n","\n}\n& .slick-current .altrp-carousel-slide{\n","\n}"])),(function(e){var t="",r=e.settings,s=r.border_color_slides_style,a=r.border_width_slides_style,o=r.border_type_slide;return s&&(t+="border-color:".concat(s.color,";")),o&&(t+="border-style:".concat(o,";")),a&&(t+=(0,b.borderWidthStyled)(a)),t}),(function(e){var t="",r=e.settings,s=(0,v.getResponsiveSetting)(r,"border_color_slides_style",".active"),a=(0,v.getResponsiveSetting)(r,"border_width_slides_style",".active"),o=(0,v.getResponsiveSetting)(r,"border_type_slide",".active");return s&&(t+="border-color:".concat(s.color,";")),o&&(t+="border-style:".concat(o,";")),a&&(t+=(0,b.borderWidthStyled)(a)),t}));function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E=function(e){return m.createElement("svg",e,m.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"1.03",d:"M13 16l-6-6 6-6"}))};E.defaultProps={width:"38",height:"38",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},r.e(3473).then(r.bind(r,63473)),r.e(4853).then(r.bind(r,34853)),Promise.all([r.e(2845),r.e(8071)]).then(r.bind(r,88071));var N=window.altrpHelpers.TemplateLoader,T=function(e){(0,p.Z)(i,e);var t,r,s=(t=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,s=(0,d.Z)(t);if(r){var a=(0,d.Z)(this).constructor;e=Reflect.construct(s,arguments,a)}else e=s.apply(this,arguments);return(0,u.Z)(this,e)});function i(e){var t;return(0,n.Z)(this,i),(t=s.call(this,e)).next=t.next.bind((0,c.Z)(t)),t.previous=t.previous.bind((0,c.Z)(t)),t.state={activeSlide:0,openLightBox:!1,sliderImages:[]},t}return(0,l.Z)(i,[{key:"componentDidMount",value:function(){var e=this;this.props.slides_repeater.forEach((function(t){e.setState((function(e){var r=S({},t.image_slides_repeater)||{};return r.url=r.url||"/img/nullImage.png",e.sliderImages.push(r.url),S({},e)}))}))}},{key:"componentDidUpdate",value:function(e){var t=this;if(this.props.slides_repeater!==e.slides_repeater&&"custom"!==(0,v.getResponsiveSetting)(this.props,"slides_item_source","","custom")){var r=[];this.props.slides_repeater.forEach((function(e){var t=S({},e.image_slides_repeater)||{};t.url=t.url||"/img/nullImage.png",r.push(t.url)})),this.setState((function(e){return S(S({},e),{},{sliderImages:r})}))}if("path"===(0,v.getResponsiveSetting)(this.props,"slides_item_source","","custom")){var s=(0,v.getDataByPath)((0,v.getResponsiveSetting)(this.props,"slides_path"));!_.isArray(s)&&_.isObject(s)?s=[s]:_.isArray(s)||(s=[]),s=s.map((function(e){return _.get(e,"media.url")?_.get(e,"media.url"):e.url})),_.isEqual(s,this.state.sliderImages)||this.setState((function(e){return S(S({},e),{},{sliderImages:s})}))}var a=this.props.synchronized_id;a&&(a=a.split(",")).forEach((function(e){var r=(0,v.getComponentByElementId)(e);r&&t.pushSliderToSynchronize(r)}))}},{key:"pushSliderToSynchronize",value:function(e){var t=this;if(_.isArray(e))return this.carouselsToSynchronize=(0,o.Z)(e),void(this.carouselsToSynchronize=this.carouselsToSynchronize.filter((function(e){return e!==t})));var r=this.carouselsToSynchronize||[];(e=_.get(e,"elementRef.current.carousel.current"))&&-1===r.indexOf(e)&&(r.push(e),r.push(this),r.forEach((function(e){e.pushSliderToSynchronize(r)})))}},{key:"setSlide",value:function(e){this.slider.slickGoTo(e)}},{key:"next",value:function(){this.slider.slickNext()}},{key:"previous",value:function(){this.slider.slickPrev()}},{key:"render",value:function(){var e=this,t="altrp-carousel-container";t+=this.props.arrows_navigation_content?"":" altrp-carousel-container-no-arrow";var r=(0,v.getResponsiveSetting)(this.props,"slides_repeater","",[]),s="altrp-carousel-dots",o="altrp-carousel-slides";if(this.props.dots_navigation_content)switch(this.props.dots_position_navigation_content){case"topLeft":s+=" altrp-carousel-dots-top-left",o+=" altrp-carousel-slides-dots-top";break;case"top":s+=" altrp-carousel-dots-top",o+=" altrp-carousel-slides-dots-top";break;case"topRight":s+=" altrp-carousel-dots-top-right",o+=" altrp-carousel-slides-dots-top";break;case"bottomLeft":s+=" altrp-carousel-dots-bottom-left",o+=" altrp-carousel-slides-dots-bottom";break;case"bottom":o+=" altrp-carousel-slides-dots-bottom";break;case"bottomRight":s+=" altrp-carousel-dots-bottom-right",o+=" altrp-carousel-slides-dots-bottom"}var i,n={arrows:!1,customPaging:function(t){var r=!1;return e.slider&&(r=e.slider.innerSlider.state.currentSlide===t),m.createElement("a",null,m.createElement("div",{className:"altrp-carousel-paging "+(r?"active":"")}))},dotsClass:s,dots:this.props.dots_navigation_content,infinite:this.props.infinite_loop_additional_content,pauseOnHover:this.props.pause_on_interaction_loop_additional_content,autoplay:this.props.autoplay_additional_content,className:o,autoplaySpeed:Number(this.props.transition_autoplay_duration_additional_content),speed:Number(this.props.transition_duration_additional_content),slidesToShow:Number(this.props.per_view_slides_content),slidesToScroll:Number(this.props.to_scroll_slides_content),rows:Number(this.props.per_row_slides_content),afterChange:function(t){return e.setState({activeSlide:t})},beforeChange:function(t,r){e.carouselsToSynchronize&&e.carouselsToSynchronize.forEach((function(e){e.setSlide(r)}))},adaptiveHeight:!0};switch((0,v.getResponsiveSetting)(this.props,"slides_item_source","","custom")){case"custom":i=r.map((function(t,r){var s=t.switch_slides_repeater||!1,a=t.image_slides_repeater?S({},t.image_slides_repeater):{};a.url=a.url||"/img/nullImage.png",a.name=a.name||"null",a.assetType=a.assetType||"mediaBackground","media"===a.assetType&&(a.assetType="mediaBackground");var o=(0,v.renderAsset)(a,{className:"altrp-carousel-slide-img"});return!0===s&&(o=m.createElement(N,{templateId:t.card_slides_repeater})),m.createElement("div",{className:"altrp-carousel-slide",key:r,onClick:function(){e.slider.slickGoTo(r)},onDoubleClick:function(){e.slider.slickGoTo(r),e.props.lightbox_slides_content&&e.setState((function(e){return S(S({},e),{},{openLightBox:!0})}))}},o,"text"===e.props.overlay_select_heading_additional_content?m.createElement("div",{className:"altrp-carousel-slide-overlay"},m.createElement("p",{className:"altrp-carousel-slide-overlay-text"},t.overlay_text_repeater)):null)}));break;case"path":(0,v.isEditor)()?i=[m.createElement("div",{className:"altrp-carousel-slide",key:1},(0,v.renderAsset)({url:"/img/nullImage.png",assetType:"mediaBackground"},{key:1,className:"altrp-carousel-slide-img"})),m.createElement("div",{className:"altrp-carousel-slide",key:2},(0,v.renderAsset)({url:"/img/nullImage.png",assetType:"mediaBackground"},{key:1,className:"altrp-carousel-slide-img"})),m.createElement("div",{className:"altrp-carousel-slide",key:3},(0,v.renderAsset)({url:"/img/nullImage.png",assetType:"mediaBackground"},{key:1,className:"altrp-carousel-slide-img"})),m.createElement("div",{className:"altrp-carousel-slide",key:4},(0,v.renderAsset)({url:"/img/nullImage.png",assetType:"mediaBackground"},{key:1,className:"altrp-carousel-slide-img"})),m.createElement("div",{className:"altrp-carousel-slide",key:5},(0,v.renderAsset)({url:"/img/nullImage.png",assetType:"mediaBackground"},{key:1,className:"altrp-carousel-slide-img"})),m.createElement("div",{className:"altrp-carousel-slide",key:6},(0,v.renderAsset)({url:"/img/nullImage.png",assetType:"mediaBackground"},{key:1,className:"altrp-carousel-slide-img"}))]:(i=(0,v.getDataByPath)((0,v.getResponsiveSetting)(this.props,"slides_path")),!_.isArray(i)&&_.isObject(i)?i=[i]:_.isArray(i)||(i=[]),i=i.map((function(t,r){_.isObject(t.media)&&(t=t.media),t.url=t.url||"/img/nullImage.png",t.name=t.name||"null",t.assetType=t.assetType||"mediaBackground","media"===t.assetType&&(t.assetType="mediaBackground");var s=(0,v.renderAsset)(t,{className:"altrp-carousel-slide-img"});return m.createElement("div",{className:"altrp-carousel-slide",key:r,onClick:function(){e.slider.slickGoTo(r)},onDoubleClick:function(){e.slider.slickGoTo(r),e.props.lightbox_slides_content&&e.setState((function(e){return S(S({},e),{},{openLightBox:!0})}))}},s)})))}var l,c,p="";switch(this.props.arrows_position_navigation_content){case"topLeft":p+=" altrp-carousel-arrow-top-left altrp-carousel-arrow-top-wrapper";break;case"top":p+=" altrp-carousel-arrow-top altrp-carousel-arrow-top-wrapper";break;case"topRight":p+=" altrp-carousel-arrow-top-right altrp-carousel-arrow-top-wrapper";break;case"bottomLeft":p+=" altrp-carousel-arrow-bottom-left altrp-carousel-arrow-bottom-wrapper";break;case"bottom":p+=" altrp-carousel-arrow-bottom altrp-carousel-arrow-bottom-wrapper";break;case"bottomRight":p+=" altrp-carousel-arrow-bottom-right altrp-carousel-arrow-bottom-wrapper"}l=this.props.arrows_navigation_content?m.createElement("div",{className:"altrp-carousel-arrow-prev altrp-carousel-arrow",onClick:this.previous},m.createElement(E,null)):"",c=this.props.arrows_navigation_content?m.createElement("div",{className:"altrp-carousel-arrow-next altrp-carousel-arrow",onClick:this.next},m.createElement(E,null)):"";var u="";if(this.props.lightbox_slides_content){var d=this.props.slides_repeater.map((function(e){return e.image_slides_repeater?e.image_slides_repeater.url:"/img/nullImage.png"}));u=this.state.openLightBox?m.createElement(h.Z,{images:d,current:this.state.activeSlide,settings:{onCloseRequest:function(){return e.setState({openLightBox:!1})}},color:this.props.color_lightbox_style}):""}return m.createElement(k,{settings:S({},this.props),className:"altrp-carousel"},this.props.lightbox_slides_content?u:"","center"===this.props.arrows_position_navigation_content?l:"",m.createElement("div",{className:t},"center"!==this.props.arrows_position_navigation_content?m.createElement("div",{className:"altrp-carousel-arrows-container"+p},l,c):"",m.createElement(g.Z,(0,a.Z)({ref:function(t){return e.slider=t}},n),i)),"center"===this.props.arrows_position_navigation_content?c:"")}}]),i}(m.Component)}}]);
//# sourceMappingURL=3905.editor.js.map