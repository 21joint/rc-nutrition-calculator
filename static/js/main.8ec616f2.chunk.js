(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e){e.exports={a:"rc-nutrition-calculator"}},31:function(e,t,a){e.exports=a(60)},36:function(e,t,a){},38:function(e,t,a){},58:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),l=a.n(r),i=a(10),s=a(2),c=a(3),d=a(5),u=a(4),p=a(6),m=a(25),b=a.n(m),v=(a(36),function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:this.props.loading?"app-is--loading":""},o.a.createElement("section",{className:"app-section app-loader"},o.a.createElement("div",{className:"app-loading-container"},o.a.createElement("div",{className:"app-loading-animation"}),o.a.createElement("h3",null,"Loading"))))}}]),t}(n.Component)),h=a(8),f="/"+a(26).a,g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).isProductSelected=function(e){return a.props.selectedProduct==e},a.onProductSelected=function(e){a.isProductSelected(e)&&a.props.goToStep(a.props.currentStep+1)},a.title=e.title,a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"product-grid"},h.b.map(function(t,a){return o.a.createElement("article",{key:a,onClick:function(){e.props.onProductSelect(t),e.onProductSelected()},id:"product--"+t.id,className:"product ".concat(e.props.isProductSelected(t)?"selected":"")},o.a.createElement("div",{className:"product__img"},o.a.createElement("img",{src:f+t.img,alt:t.title})),o.a.createElement("div",{className:"product__title"},t.title))}))}}]),t}(n.Component),E=a(12),N=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.type,a=this.props.activeAddons;return o.a.createElement("div",{id:"mixinsCtrlGroup__".concat(t),className:"mixins-controls-group--".concat(t," mixins-controls-group ").concat(t.indexOf("liquids")>-1&&"required")},o.a.createElement("div",{className:"mixins-controls-header"},o.a.createElement("img",{src:"/images/icons/icon-".concat(t,".png"),className:"mixins-controls-header__img"}),o.a.createElement("h4",null,t),o.a.createElement("button",{onClick:function(){return e.props.openModal(t)},type:"button",className:"text-button ".concat(a.length<1?"disabled":"")},"Edit")),a.length>=1?o.a.createElement("div",{className:"mixins-controls-list"},o.a.createElement("ul",{className:"mixins-ingredients-list"},a.map(function(e,t){return o.a.createElement("li",{key:t},e.quantity.label," ",e.addon.label)}))):o.a.createElement("button",{className:"button--add button--outline",onClick:function(){return e.props.openModal(t)}},"Add ",t))}}]),t}(n.Component),y=(a(38),a(13)),w=a.n(y),S=a(17),_=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.type,a=this.props.id,n=h.a[t];return o.a.createElement("div",{className:"row row-".concat(a," align-items-center")},o.a.createElement("div",{className:"col-sm"},o.a.createElement(S.a,{classNamePrefix:"app-select",options:h.c,defaultValue:this.props.selectedQuantity,onChange:this.props.onSelectQuantity(t,a),placeholder:"Select Quantity"})),o.a.createElement("div",{className:"col-sm-auto p-0"},"of"),o.a.createElement("div",{className:"col-sm"},o.a.createElement(S.a,{classNamePrefix:"app-select",options:n,onChange:this.props.onSelectAddon(t,a),defaultValue:this.props.selectedAddon,placeholder:"Choose a ".concat(t&&t.slice(0,-1))})),o.a.createElement("div",{className:"col-sm-auto p-0"},o.a.createElement("button",{onClick:function(){return e.props.removeAddonRow(t,a)},className:"button button-remove--addonrow"},o.a.createElement("svg",{width:"12px",height:"12px",version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 212.982 212.982"},o.a.createElement("g",{id:"Close"},o.a.createElement("path",{fill:"#d2d2d2",d:"M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312 c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312 l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937 c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z"}))))))}}]),t}(n.Component);w.a.setAppElement("#root"),w.a.defaultStyles.overlay.backgroundColor="rgba(0,0,0,.45)";var A={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",fontSize:"1.6rem",padding:"50px",overflow:"visible",width:"640px",maxWidth:"100%"},h2:{fontSize:"28px"}},k=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(w.a,{style:A,isOpen:this.props.modalIsOpen,onAfterOpen:this.props.afterOpenModal,onRequestClose:this.props.closeModal,contentLabel:"Add ".concat(this.props.type," to your mix")},o.a.createElement("div",{className:"app-modal"},o.a.createElement("div",{className:"app-modal--header"},o.a.createElement("h2",{className:"app-modal--title"},"Add"," ",this.props.type&&this.props.type.replace(this.props.type.charAt(0),this.props.type.charAt(0).toUpperCase())," ","to Your Recipe"),o.a.createElement("img",{className:"app-modal--img",src:"/images/icons/icon-".concat(this.props.type,".png"),alt:this.props.type})),o.a.createElement("div",{className:"app-modal--body"},this.props.modalAddons[this.props.type].map(function(t,a){return o.a.createElement(_,{id:a,key:a,type:e.props.type,selectedAddon:t.addon,selectedQuantity:t.quantity,removeAddonRow:e.props.removeAddonRow,onSelectQuantity:e.props.onSelectQuantity,onSelectAddon:e.props.onSelectAddon})}),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement("button",{type:"button",className:"btn btn-add--row",onClick:function(){return e.props.addNewAddonRow(e.props.type)}},"Add Another"," ",this.props.type&&this.props.type.slice(0,-1)," +")))),o.a.createElement("div",{className:"app-modal--footer"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-auto"},o.a.createElement("button",{className:"button",type:"button",onClick:function(){return e.props.onSubmitModal(e.props.type,e.props.modalAddons,e.props.closeModal)}},"Update Recipe")))))))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).openModal=function(e){a.setState({modal:{open:!0,type:e}})},a.afterOpenModal=function(){},a.closeModal=function(){a.setState({modal:{open:!1,type:null}})},a.title=e.title,a.state={modal:{open:!1,type:null,modalAddons:[e.modalAddons]}},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.selectedProduct;return o.a.createElement("section",null,o.a.createElement("div",{className:"product-details"},o.a.createElement("div",{className:"product-details__img"},o.a.createElement("img",{src:t.img,alt:t.title})),o.a.createElement("div",{className:"product-details__info"},o.a.createElement("h2",null,t.title,o.a.createElement("a",{href:t.shop_url},"Shop Now")),o.a.createElement("div",{className:"product-nutrition"},o.a.createElement("div",{className:"nutrition-item--cals nutrition-item"},o.a.createElement("div",{className:"nutrition-item__label"},"Calories"),o.a.createElement("div",{className:"nutrition-item__value"},t.stats.cals)),o.a.createElement("div",{className:"nutrition-item--fats nutrition-item"},o.a.createElement("div",{className:"nutrition-item__label"},"Fats"),o.a.createElement("div",{className:"nutrition-item__value"},t.stats.fats)),o.a.createElement("div",{className:"nutrition-item--carbs nutrition-item"},o.a.createElement("div",{className:"nutrition-item--carbs__total"},o.a.createElement("div",{className:"nutrition-item__label"},"Total Carbs"),o.a.createElement("div",{className:"nutrition-item__value"},t.stats.total_carbs)),o.a.createElement("div",{className:"nutrition-item--carbs__breakdown"},o.a.createElement("div",{className:"carbs-breakdown-item"},t.stats.fiber,o.a.createElement("span",null,"G Fiber")),o.a.createElement("div",{className:"carbs-breakdown-item"},t.stats.sugar,o.a.createElement("span",null,"G Sugars")))),o.a.createElement("div",{className:"nutrition-item--protein nutrition-item"},o.a.createElement("div",{className:"nutrition-item__label"},"Protein"),o.a.createElement("div",{className:"nutrition-item__value"},t.stats.protein))))),o.a.createElement("div",{className:"app-mixins"},o.a.createElement("div",{className:"app-mixins-title"},o.a.createElement("h3",null,"Now, Add Your Mixins")),o.a.createElement("div",{className:"app-mixins-controls"},Object.keys(this.props.allAddons).map(function(t,a){return o.a.createElement(N,{key:a,type:t,modalAddons:e.props.modalAddons[t],activeAddons:e.props.activeAddons[t],openModal:e.openModal.bind(e)})}),function(){var t=e.state.modal.type;if(t)return o.a.createElement(k,Object(E.a)({type:t,modalAddons:e.props.modalAddons,typeActiveAddons:e.props.activeAddons[t],openModal:e.openModal.bind(e),closeModal:e.closeModal.bind(e),modalIsOpen:e.state.modal.open,onSelectAddon:e.props.onSelectAddon,onSelectQuantity:e.props.onSelectQuantity,addNewAddonRow:e.props.addNewAddonRow,removeAddonRow:e.props.removeAddonRow,onSubmitModal:e.props.onSubmitModal},"removeAddonRow",e.props.removeAddonRow))}()),o.a.createElement("div",{className:"app-mixins-legend text-center"},o.a.createElement("legend",null,"Select at least one liquid to proceed ")),o.a.createElement("div",{className:"app-mixins-cta"},o.a.createElement("div",{className:"app-mixins-cta-block"},o.a.createElement("div",{className:"servings-form"},o.a.createElement("span",null,"Divided into"),o.a.createElement("input",{type:"number",id:"servings-input",min:0,max:40,onChange:this.props.onDividedByChange,defaultValue:this.props.dividedBy}),o.a.createElement("span",null,"bars / balls")),o.a.createElement("button",{className:"button"},"View Nutrition Breakdown")))))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).title=e.title,a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("section",{className:"app-section-3"},o.a.createElement("div",{className:"app-breakdown--peanut app-breakdown"},o.a.createElement("div",{className:"app-breakdown__main"},o.a.createElement("div",{className:"app-breakdown__product-img-wrap"},o.a.createElement("div",{className:"app-breakdown__product-img"})),o.a.createElement("div",{className:"app-breakdown__titles"},o.a.createElement("h2",{className:"h1"},"PB & Jelly Get in My Belly"),o.a.createElement("div",{className:"breakdown-mixins-description"},"with 1 cup water, 2 oz. mashed bananas, 2 oz. sunflower butter, and 1 oz. agave"),o.a.createElement("div",{className:"breakdown-servings"},"Split Into 8 Servings")),o.a.createElement("div",{className:"app-breakdown__toggle"},o.a.createElement("div",{className:"toggle"},o.a.createElement("span",{className:"toggle-control--serving toggle-control","data-app-toggle-active":!0},"Per Serving"),o.a.createElement("span",{className:"toggle-control--total toggle-control"},"Recipe Total"))),o.a.createElement("div",{className:"app-breakdown__details"},o.a.createElement("div",{className:"product-nutrition"},o.a.createElement("div",{className:"nutrition-item--cals nutrition-item"},o.a.createElement("div",{className:"nutrition-item__label"},"Calories"),o.a.createElement("div",{className:"nutrition-item__value"},"160")),o.a.createElement("div",{className:"nutrition-item--fats nutrition-item"},o.a.createElement("div",{className:"nutrition-item__label"},"Fats"),o.a.createElement("div",{className:"nutrition-item__value"},"8")),o.a.createElement("div",{className:"nutrition-item--carbs nutrition-item"},o.a.createElement("div",{className:"nutrition-item--carbs__total"},o.a.createElement("div",{className:"nutrition-item__label"},"Total Carbs"),o.a.createElement("div",{className:"nutrition-item__value"},"7")),o.a.createElement("div",{className:"nutrition-item--carbs__breakdown"},o.a.createElement("div",{className:"carbs-breakdown-item"},"3 ",o.a.createElement("span",null,"G Fiber")),o.a.createElement("div",{className:"carbs-breakdown-item"},"2 ",o.a.createElement("span",null,"G Sugars")))),o.a.createElement("div",{className:"nutrition-item--protein nutrition-item"},o.a.createElement("div",{className:"nutrition-item__label"},"Protein"),o.a.createElement("div",{className:"nutrition-item__value"},"12"))))),o.a.createElement("div",{className:"app-breakdown__share"},o.a.createElement("h4",null,"Save Your Nutrition Breakdown"),o.a.createElement("form",{className:"form--share"},o.a.createElement("input",{type:"email",placeholder:"Your email address"}),o.a.createElement("button",{className:"button--send button"},"Send")))))}}]),t}(n.Component);g.title="Pick Your Mix",O.title="What's Your Recipe",j.title="Nutrition Breakdown";var x={Step1:g,Step2:O,Step3:j},C=(a(58),a(11)),P=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).handleStepChange=function(e){null!==a.props.selectedProduct&&a.props.goToStep(e)},a.handleStepChange=a.handleStepChange.bind(Object(C.a)(Object(C.a)(a))),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=this,t=[],a=this.props.currentStep,n=function(n){var r=a>=n;t.push(o.a.createElement("li",{className:"progress-step-".concat(n," ").concat(r?"active":""),key:n},o.a.createElement("button",{type:"button",onClick:function(){return e.handleStepChange(n)},className:null===e.props.selectedProduct&&n>1?"disabled":""},n,". ",e.props.steps[n-1].title)))},r=1;r<=this.props.totalSteps;r+=1)n(r);return o.a.createElement("div",null,o.a.createElement("nav",{className:"app-progress-bar"},o.a.createElement("ul",null,t)),o.a.createElement("div",{className:"app-title"},o.a.createElement("h2",null,"Step ",a,": ",this.props.steps[a-1].title,this.props.steps.map(function(e){return e.active&&e.id+": "+e.title})),o.a.createElement("h1",null,1===a?"Recipe Nutrition Calculator":2===a?"What's Your Recipe":"Your Nutrition Brakedown"),a<=1?"":o.a.createElement("button",{onClick:function(){return e.props.goToStep(a-1)},className:"app-back--button"},o.a.createElement("i",{className:"fas fa-angle-left"}),"Back")))}}]),t}(n.Component),M=function(e){function t(){var e;Object(s.a)(this,t),(e=Object(d.a)(this,Object(u.a)(t).call(this))).handleStepChange=function(t){e.setState({currentStep:t.activeStep})},e.onDividedByChange=function(t){t.preventDefault(),t.target.value<=t.target.getAttribute("max")&&t.target.value>=t.target.getAttribute("min")&&e.setState({dividedBy:t.target.value})},e.isProductSelected=function(t){return JSON.stringify(e.state.selected.product)===JSON.stringify(t)},e.onProductSelect=function(t){e.setState(function(e){return{selected:{product:null!==e.selected.product?null:t},loading:!0}}),setTimeout(function(){e.setState({loading:!1})},200)},e.onSelectQuantity=function(t,a){return function(n){e.setState(function(e){var o=Object(i.a)({},e);return o.modalAddons[t][a].quantity=n,o})}},e.onSelectAddon=function(t,a){return function(n){e.setState(function(e){var o=Object(i.a)({},e);return o.modalAddons[t][a].addon=n,o})}},e.addNewAddonRow=function(t){e.setState(function(e){var a=e.modalAddons.length,n=Object(i.a)({},e);return n.modalAddons[t].push({id:a,quantity:h.c[0],addon:null,active:!1}),n})},e.removeAddonRow=function(t,a){e.state.modalAddons[t].length-1>0&&e.setState(function(e){var n=Object(i.a)({},e);return delete n.modalAddons[t][a],n})},e.onSubmitModal=function(t,a,n){e.setState({loading:!0}),e.setState(function(e){var n=Object(i.a)({},e);return n.activeAddons[t]=a[t],n}),setTimeout(function(){e.setState(function(e){return Object(i.a)({},e).loading=!1,{loading:!1,modal:{open:!1,type:null}}}),console.log(e.state),"function"===typeof n&&n()},100)};var a={},n={};return Object.keys(h.a).map(function(e,t){a[e]=[],n[e]=[{id:1,quantity:h.c[0],addon:null}]}),e.state={loading:!0,stats:{},currentStep:1,modal:{open:!1,type:null},activeAddons:a,modalAddons:n,selected:{product:null},dividedBy:12},e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({loading:!1})})}},{key:"render",value:function(){return o.a.createElement("div",{id:"appContent"},o.a.createElement(v,{loading:this.state.loading}),o.a.createElement(b.a,{nav:o.a.createElement(P,{selectedProduct:this.state.selected.product,steps:[x.Step1,x.Step2,x.Step3]}),onStepChange:this.handleStepChange,isLazyMount:!0},o.a.createElement(x.Step1,{currentStep:this.state.currentStep,selectedProduct:this.state.selected.product,onProductSelect:this.onProductSelect,isProductSelected:this.isProductSelected}),o.a.createElement(x.Step2,{currentStep:this.state.currentStep,selectedProduct:this.state.selected.product,dividedBy:this.state.dividedBy,onDividedByChange:this.onDividedByChange,onSelectAddon:this.onSelectAddon,onSelectQuantity:this.onSelectQuantity,onSubmitModal:this.onSubmitModal,allAddons:h.a,modalAddons:this.state.modalAddons,activeAddons:this.state.activeAddons,addNewAddonRow:this.addNewAddonRow,removeAddonRow:this.removeAddonRow}),o.a.createElement(x.Step3,{currentStep:this.state.currentStep,selectedProduct:this.state.selected.product})))}}]),t}(n.Component),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(o.a.createElement(M,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/rc-nutrition-calculator",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/rc-nutrition-calculator","/service-worker.js");R?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):B(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):B(t,e)})}}()},8:function(e){e.exports={b:[{id:"peanut",title:"PB & Jelly Get in My Belly",img:"/images/mixes/mix-peanut.png",shop_url:"https://proteinbarmix.com/products/protein-bar-mix",stats:{cals:160,fats:8,total_carbs:14,fiber:3,sugar:2,protein:12}},{id:"peas",title:"Peas, Love, & Cocoa",img:"/images/mixes/mix-peas.png",shop_url:"https://proteinbarmix.com/products/vegan-protein-bar-mix-peas-love-chocolate",stats:{cals:250,fats:11,total_carbs:11,fiber:6,sugar:2,protein:12}},{id:"whey",title:"Whey Hip Chocolate Chip",img:"/images/mixes/mix-whey.png",shop_url:"https://proteinbarmix.com/products/primal-protein-bar-mix-whey-hip-chocolate-chip",stats:{cals:240,fats:11,total_carbs:9,fiber:4,sugar:3,protein:14}},{id:"cocoa",title:"Cocoa for Coconuts",img:"/images/mixes/mix-cocoa.png",shop_url:"https://proteinbarmix.com//products/paleo-energy-bites-mix-cocoa-for-coconuts",stats:{cals:120,fats:6,total_carbs:5,fiber:3,sugar:1,protein:7}},{id:"oat",title:"Oat Yes! Chocolate Chip",img:"/images/mixes/mix-oat.png",shop_url:"https://proteinbarmix.com/products/oats-energy-bar-mix-oat-yeah-chocolate-chip",stats:{cals:160,fats:7,total_carbs:12,fiber:3,sugar:2,protein:6}}],a:{liquids:[{label:"water",value:"water",cals:0,fat:0,carbs:0,fiber:0,sugars:0,protein:0},{label:"almond milk",value:"almond milk",cals:110,fat:9,carbs:3,fiber:2,sugars:1,protein:5},{label:"whole milk",value:"whole milk",cals:160,fat:9,carbs:12,fiber:0,sugars:11,protein:8},{label:"mashed bananas",value:"mashed bananas",cals:200,fat:.75,carbs:50,fiber:6,sugars:27,protein:3},{label:"apple juice",value:"apple juice",cals:101,fat:0,carbs:22,fiber:0,sugars:21,protein:1},{label:"greek yogurt",value:"greek yogurt",cals:220,fat:12,carbs:9,fiber:1,sugars:7,protein:20},{label:"low-fat yogurt",value:"low-fat yogurt",cals:154,fat:3.8,carbs:17,fiber:0,sugars:17,protein:13}],fats:[{label:"almond butter",value:"almond butter",cals:1521,fat:144,carbs:48,fiber:24,sugars:8,protein:56},{label:"peanut butter",value:"peanut butter",cals:1680,fat:128,carbs:48,fiber:16,sugars:16,protein:72},{label:"sunflower butter",value:"sunflower butter",cals:1761,fat:160,carbs:40,fiber:16,sugars:8,protein:56},{label:"sweetened nut butter",value:"sweetened nut butter",cals:1439,fat:112,carbs:64,fiber:24,sugars:32,protein:48},{label:"coconut oil",value:"coconut oil",cals:1945,fat:216,carbs:0,fiber:0,sugars:0,protein:0},{label:"coconut butter",value:"coconut butter",cals:1761,fat:160,carbs:64,fiber:32,sugars:16,protein:16},{label:"ghee",value:"ghee",cals:2160,fat:240,carbs:0,fiber:0,sugars:0,protein:0},{label:"butter",value:"butter",cals:1600,fat:176,carbs:0,fiber:0,sugars:0,protein:0}],sweeteners:[{label:"agave",value:"agave",cals:960,fat:1,carbs:256,fiber:0,sugars:256,protein:0},{label:"honey",value:"honey",cals:980,fat:0,carbs:279,fiber:1,sugars:278,protein:1},{label:"maple",value:"maple",cals:800,fat:0,carbs:192,fiber:0,sugars:192,protein:0},{label:"coconut nectar",value:"coconut nectar",cals:881,fat:0,carbs:208,fiber:0,sugars:208,protein:0},{label:"date syrup",value:"date syrup",cals:864,fat:0,carbs:224,fiber:0,sugars:208,protein:0},{label:"molasses",value:"molasses",cals:977,fat:0,carbs:252,fiber:0,sugars:252,protein:0},{label:"sugar-free syrup",value:"sugar-free syrup",cals:120,fat:0,carbs:72,fiber:24,sugars:0,protein:0}]},c:[{label:"1 cup",value:1},{label:"3/4 cup",value:.75},{label:"2/3 cup",value:.6666666667},{label:"1/2 cup",value:.5},{label:"1/3 cup",value:.3333333333},{label:"1/4 cup",value:.25},{label:"2 Tbls",value:.125}]}}},[[31,2,1]]]);
//# sourceMappingURL=main.8ec616f2.chunk.js.map