(self.webpackChunk=self.webpackChunk||[]).push([[493],{39493:function(e,t,n){"use strict";n.r(t);var a=n(96156),r=n(92137),s=n(6610),c=n(5991),i=n(10379),l=n(46070),u=n(77608),o=n(87757),d=n.n(o),m=n(67294),p=n(14494),f=n(60257),g=n(3925),b=n(94006),h=n(57925),w=n(10096);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=m.lazy((function(){return n.e(538).then(n.bind(n,91538))})),y=function(e){(0,i.Z)(_,e);var t,n,a,o,p=(a=_,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,u.Z)(a);if(o){var n=(0,u.Z)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return(0,l.Z)(this,e)});function _(e){var t;return(0,s.Z)(this,_),(t=p.call(this,e)).toggleDebug=function(){var e=(0,r.Z)(d().mark((function e(n){var a;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.target.checked,e.next=3,new g.default({route:"/admin/ajax/settings"}).put("altrp_debug",{value:a});case 3:t.setState((function(e){return v(v({},e),{},{debugOn:a})}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.toggleLoadingOption=function(){var e=(0,r.Z)(d().mark((function e(n){var a;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.target.checked,e.next=3,new g.default({route:"/admin/ajax/settings"}).put("altrp_user_load",{value:a});case 3:t.setState((function(e){return v(v({},e),{},{loadByUser:a})}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.deleteAllTemplatesReviews=function(){var e=(0,r.Z)(d().mark((function e(t){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,confirm("Are You Sure");case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return w.default.dispatch((0,b.gy)()),e.next=8,new g.default({route:"/admin/ajax/reviews"}).delete();case 8:if(!e.sent.success){e.next=12;break}return e.next=12,alert("success");case 12:w.default.dispatch((0,b._H)());case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.clearAllCache=function(){var e=(0,r.Z)(d().mark((function e(t){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,confirm("Are You Sure");case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,new g.default({route:"/admin/ajax/clear_cache"}).delete();case 7:e.sent;case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.updateAllBackendResources=function(){var e=(0,r.Z)(d().mark((function e(t){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,confirm("Are You Sure");case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return w.default.dispatch((0,b.gy)()),e.next=8,new g.default({route:"/admin/ajax/update-all-resources"}).post({});case 8:if(!e.sent.success){e.next=12;break}return e.next=12,alert("success");case 12:w.default.dispatch((0,b._H)());case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.updateAllSiteJavascript=(0,r.Z)(d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new g.default({route:"/admin/ajax/settings"}).put("all_site_js",{value:t.state.allSiteJavascript,encrypt:!0});case 2:case"end":return e.stop()}}),e)}))),t.state={allSiteJavascript:"",debugOn:!1},t}return(0,c.Z)(_,[{key:"componentDidMount",value:(n=(0,r.Z)(d().mark((function e(){var t,n,a;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new g.default({route:"/admin/ajax/settings"}).get("all_site_js?decrypt=true");case 2:if(e.t0=e.sent.all_site_js,e.t0){e.next=5;break}e.t0="";case 5:return t=e.t0,e.next=8,new g.default({route:"/admin/ajax/settings"}).get("altrp_debug");case 8:return n=!!e.sent.altrp_debug,e.next=11,new g.default({route:"/admin/ajax/settings"}).get("altrp_user_load");case 11:a=!!e.sent.altrp_user_load,this.setState((function(e){return v(v({},e),{},{allSiteJavascript:t,debugOn:n,loadByUser:a})}));case 13:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"changeAdminLogo",value:(t=(0,r.Z)(d().mark((function e(t){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new g.default({route:"/admin/ajax/settings"}).put("admin_logo",{value:JSON.stringify(t)});case 2:this.dispatch((0,f.a)(t));case 3:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this;return m.createElement("div",{className:"admin-styles-settings"},m.createElement("table",null,m.createElement("tbody",{className:"admin-settings-table-row"},m.createElement("tr",{className:"admin-settings-table-row"},m.createElement("td",{className:"admin-settings-table__td row-text",width:"10%"},m.createElement("label",{htmlFor:"settings-container-width"},"Admin Logo:")),m.createElement("td",{className:"admin-settings-table__td"},m.createElement(m.Suspense,{fallback:"Loading"},m.createElement(x,{onChange:this.changeAdminLogo,value:this.props.adminLogo})))),m.createElement("tr",{className:"admin-settings-table-row"},m.createElement("td",{className:"admin-settings-table__td row-text",width:"10%"},"Clear All Templates History"),m.createElement("td",{className:"admin-settings-table__td"},m.createElement("button",{className:"btn btn_success",onClick:this.deleteAllTemplatesReviews},"Clear"))),m.createElement("tr",{className:"admin-settings-table-row"},m.createElement("td",{className:"admin-settings-table__td row-text",width:"10%"},"Update All Backend Resources"),m.createElement("td",{className:"admin-settings-table__td"},m.createElement("button",{className:"btn btn_success",onClick:this.updateAllBackendResources},"Update"))),m.createElement("tr",{className:"admin-settings-table-row"},m.createElement("td",{className:"admin-settings-table__td row-text",width:"10%"},"Clear All Cache"),m.createElement("td",{className:"admin-settings-table__td"},m.createElement("button",{className:"btn btn_success",onClick:this.clearAllCache},"Clear"))),m.createElement("tr",{className:"admin-settings-table-row"},m.createElement("td",{className:"admin-settings-table__td row-text",width:"10%"},"Add Custom Javascript on All Site Pages"),m.createElement("td",{className:"admin-settings-table__td"},m.createElement(h.Z,{value:this.state.allSiteJavascript,mode:"javascript",onChange:function(t){return e.setState({allSiteJavascript:t})}}),m.createElement("button",{className:"btn btn_success",onClick:this.updateAllSiteJavascript},"Update"))),m.createElement("tr",{className:"admin-settings-table-row"},m.createElement("td",{className:"admin-settings-table__td row-text",width:"10%"},"Debug Altrp App"),m.createElement("td",{className:"admin-settings-table__td"},m.createElement("input",{className:"admin-table__td_check",onChange:this.toggleDebug,checked:this.state.debugOn,type:"checkbox"}))),m.createElement("tr",{className:"admin-settings-table-row"},m.createElement("td",{className:"admin-settings-table__td row-text",width:"10%"},"Load App on User Action"),m.createElement("td",{className:"admin-settings-table__td"},m.createElement("input",{className:"admin-table__td_check",onChange:this.toggleLoadingOption,checked:this.state.loadByUser,type:"checkbox"}))))))}}]),_}(m.Component);t.default=(0,p.$j)((function(e){return{adminLogo:e.adminLogo}}))(y)}}]);
//# sourceMappingURL=493.admin.js.map