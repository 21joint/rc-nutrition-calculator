(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e){e.exports={b:[{id:"peanut",title:"PB & Jelly Get in My Belly",img:"/images/mixes/mix-peanut.png",shop_url:"https://proteinbarmix.com/products/protein-bar-mix",standard_servings:8,stats:{cals:1280,fats:64,carbs:112,fiber:40,sugar:40,protein:96}},{id:"peas",title:"Peas, Love, & Cocoa",img:"/images/mixes/mix-peas.png",shop_url:"https://proteinbarmix.com/products/vegan-protein-bar-mix-peas-love-chocolate",standard_servings:8,stats:{cals:1360,fats:88,carbs:88,fiber:48,sugar:16,protein:96}},{id:"whey",title:"Whey Hip Chocolate Chip",img:"/images/mixes/mix-whey.png",shop_url:"https://proteinbarmix.com/products/primal-protein-bar-mix-whey-hip-chocolate-chip",standard_servings:8,stats:{cals:1440,fats:88,carbs:72,fiber:32,sugar:24,protein:112}},{id:"cocoa",title:"Cocoa for Coconuts",img:"/images/mixes/mix-cocoa.png",shop_url:"https://proteinbarmix.com//products/paleo-energy-bites-mix-cocoa-for-coconuts",standard_servings:12,stats:{cals:960,fats:72,carbs:60,fiber:36,sugar:12,protein:84}},{id:"oat",title:"Oat Yes! Chocolate Chip",img:"/images/mixes/mix-oat.png",shop_url:"https://proteinbarmix.com/products/oats-energy-bar-mix-oat-yeah-chocolate-chip",standard_servings:12,stats:{cals:1320,fats:84,carbs:144,fiber:36,sugar:24,protein:72}}],a:{liquids:[{label:"water",value:"water",cals:0,fats:0,carbs:0,fiber:0,sugar:0,protein:0},{label:"almond milk",value:"almond milk",cals:110,fats:9,carbs:3,fiber:2,sugar:1,protein:5},{label:"whole milk",value:"whole milk",cals:160,fats:9,carbs:12,fiber:0,sugar:11,protein:8},{label:"mashed bananas",value:"mashed bananas",cals:200,fats:.75,carbs:50,fiber:6,sugar:27,protein:3},{label:"apple juice",value:"apple juice",cals:101,fats:0,carbs:22,fiber:0,sugar:21,protein:1},{label:"greek yogurt",value:"greek yogurt",cals:220,fats:12,carbs:9,fiber:1,sugar:7,protein:20},{label:"low-fat yogurt",value:"low-fat yogurt",cals:154,fats:3.8,carbs:17,fiber:0,sugar:17,protein:13}],fats:[{label:"almond butter",value:"almond butter",cals:1521,fats:144,carbs:48,fiber:24,sugar:8,protein:56},{label:"peanut butter",value:"peanut butter",cals:1680,fats:128,carbs:48,fiber:16,sugar:16,protein:72},{label:"sunflower butter",value:"sunflower butter",cals:1761,fats:160,carbs:40,fiber:16,sugar:8,protein:56},{label:"sweetened nut butter",value:"sweetened nut butter",cals:1439,fats:112,carbs:64,fiber:24,sugar:32,protein:48},{label:"coconut oil",value:"coconut oil",cals:1945,fats:216,carbs:0,fiber:0,sugar:0,protein:0},{label:"coconut butter",value:"coconut butter",cals:1761,fats:160,carbs:64,fiber:32,sugar:16,protein:16},{label:"ghee",value:"ghee",cals:2160,fats:240,carbs:0,fiber:0,sugar:0,protein:0},{label:"grass-fed butter",value:"grass-fed butter",cals:1600,fats:176,carbs:0,fiber:0,sugar:0,protein:0}],sweeteners:[{label:"agave",value:"agave",cals:960,fats:1,carbs:256,fiber:0,sugar:256,protein:0},{label:"honey",value:"honey",cals:980,fats:0,carbs:279,fiber:1,sugar:278,protein:1},{label:"maple",value:"maple",cals:800,fats:0,carbs:192,fiber:0,sugar:192,protein:0},{label:"mashed bananas",value:"mashed bananas",cals:200,fats:.75,carbs:50,fiber:6,sugar:27,protein:3},{label:"coconut nectar",value:"coconut nectar",cals:881,fats:0,carbs:208,fiber:0,sugar:208,protein:0},{label:"date syrup",value:"date syrup",cals:864,fats:0,carbs:224,fiber:0,sugar:208,protein:0},{label:"molasses",value:"molasses",cals:977,fats:0,carbs:252,fiber:0,sugar:252,protein:0},{label:"sugar-free syrup",value:"sugar-free syrup",cals:120,fats:0,carbs:72,fiber:24,sugar:0,protein:0}]},c:[{label:"1 cup",value:1},{label:"3/4 cup",value:.75},{label:"2/3 cup",value:.6666666667},{label:"1/2 cup",value:.5},{label:"1/3 cup",value:.3333333333},{label:"1/4 cup",value:.25},{label:"2 tbsp.",value:.125}]}},184:function(e,t,a){},186:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(13),r=a.n(i),s=a(17),l=a(8),c=a(9),d=a(12),u=a(10),p=a(11),m=a(83),b=a.n(m),v=(a(97),function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:this.props.loading?"app-is--loading":""},o.a.createElement("section",{className:"app-section app-loader"},o.a.createElement("div",{className:"app-loading-container"},o.a.createElement("div",{className:"app-loading-animation"}),o.a.createElement("h3",null,"Loading"))))}}]),t}(n.Component)),h=a(15),f=a(29),g="/"+f.a,E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).isProductSelected=function(e){return JSON.stringify(a.props.selectedProduct)===JSON.stringify(e)},a.title=e.title,a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"product-grid"},h.b.map(function(t,a){return o.a.createElement("article",{key:a,onClick:function(){e.props.onProductSelect(t,e.props.goToStep)},id:"product--"+t.id,className:"product ".concat(e.props.isProductSelected(t)?"selected":"")},o.a.createElement("div",{className:"product__img"},o.a.createElement("img",{src:g+t.img,alt:t.title})),o.a.createElement("div",{className:"product__title"},t.title))}))}}]),t}(n.Component),y=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.type,a=this.props.activeAddons[t];return o.a.createElement("div",{id:"mixinsCtrlGroup__".concat(t),className:"mixins-controls-group--".concat(t," mixins-controls-group ").concat(t.indexOf("liquids")>-1&&"required")},o.a.createElement("div",{className:"mixins-controls-header"},o.a.createElement("div",{class:"mixin-controls-header__graphic"},o.a.createElement("img",{src:"".concat(this.props.baseUrl,"/images/icons/icon-").concat(t,".png"),className:"mixins-controls-header__img",alt:t})),o.a.createElement("h4",null,t),o.a.createElement("button",{onClick:function(){return e.props.openModal(t)},type:"button",className:"text-button ".concat(a.length<1?"disabled":"")},"Edit")),a.length>1||1===a.length&&null!==a[0].addon?o.a.createElement("div",{className:"mixins-controls-list"},o.a.createElement("ul",{className:"mixins-ingredients-list"},a.map(function(e,t){return null!==e.addon&&o.a.createElement("li",{key:t},e.quantity.label?e.quantity.label:""," ",e.addon&&e.addon.label)}))):o.a.createElement("button",{className:"button--add button--outline",onClick:function(){return e.props.openModal(t)}},"Add ",t))}}]),t}(n.Component),w=(a(99),a(40)),N=a.n(w),S=a(59),_=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.type,a=this.props.id,n=h.a[t];return o.a.createElement("div",{className:"addon-row row row-".concat(a)},o.a.createElement("div",{className:"addon-row__amount col-sm"},o.a.createElement(S.a,{classNamePrefix:"app-select",options:h.c,value:this.props.selectedQuantity,onChange:this.props.onSelectQuantity(t,a),placeholder:"Select Quantity"})),o.a.createElement("div",{className:"addon-row__of col-sm-auto p-0"},"of"),o.a.createElement("div",{className:"addon-row__type col-sm"},o.a.createElement(S.a,{classNamePrefix:"app-select",options:n,onChange:this.props.onSelectAddon(t,a),value:this.props.selectedAddon,placeholder:"Choose a ".concat(t&&t.slice(0,-1))})),o.a.createElement("div",{className:"addon-row__remove col-sm-auto"},o.a.createElement("button",{onClick:function(){return e.props.removeAddonRow(t,a)},className:"button button-remove--addonrow"},o.a.createElement("svg",{width:"12px",height:"12px",version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48"},o.a.createElement("g",{id:"Close"},o.a.createElement("path",{fill:"#cdcdcd",d:"M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88 c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242 C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879 s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"}))))))}}]),t}(n.Component);N.a.setAppElement("#root"),N.a.defaultStyles.overlay.backgroundColor="rgba(0,0,0,.45)";var k={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",fontSize:"1.6rem",padding:"50px",overflow:"visible",width:"640px",maxWidth:"100%"},h2:{fontSize:"28px"}},A=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).onModalCancel=function(){a.props.closeModal()},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(N.a,{style:k,isOpen:this.props.modalIsOpen,onAfterOpen:this.props.afterOpenModal,onRequestClose:this.props.closeModal,contentLabel:"Add ".concat(this.props.type," to your mix")},o.a.createElement("div",{className:"app-modal"},o.a.createElement("div",{className:"app-modal--header"},o.a.createElement("h2",{className:"app-modal--title"},"Add"," ",this.props.type&&this.props.type.replace(this.props.type.charAt(0),this.props.type.charAt(0).toUpperCase())," ","to Your Recipe"),o.a.createElement("img",{className:"app-modal--img",src:"".concat(this.props.baseUrl,"/images/icons/icon-").concat(this.props.type,".png"),alt:this.props.type})),o.a.createElement("div",{className:"app-modal--body"},this.props.modalAddons[this.props.type].map(function(t,a){return o.a.createElement(_,{id:a,key:a,type:e.props.type,selectedAddon:t.addon,selectedQuantity:t.quantity,removeAddonRow:e.props.removeAddonRow,onSelectQuantity:e.props.onSelectQuantity,onSelectAddon:e.props.onSelectAddon})}),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement("button",{type:"button",className:"btn btn-add--row ".concat(this.props.modalAddons[this.props.type].length<3?"":"visually-hidden"),onClick:function(){return e.props.addNewAddonRow(e.props.type)}},"Add another"," ",this.props.type&&this.props.type.slice(0,-1)," +")))),o.a.createElement("div",{className:"app-modal--footer"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-auto"},o.a.createElement("button",{className:"button",type:"button",onClick:function(){e.props.onSubmitModal(e.props.type,e.props.modalAddons,e.props.closeModal)}},"Update Recipe")),o.a.createElement("div",{className:"col-auto"},o.a.createElement("button",{className:"button button--outline button--outline--gray",type:"button",onClick:this.onModalCancel},"Cancel")))))))}}]),t}(n.Component),x="/"+f.a,O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).openModal=function(e){a.setState({modal:{open:!0,type:e}})},a.afterOpenModal=function(){},a.closeModal=function(){a.setState({modal:{open:!1,type:null}})},a.title=e.title,a.state={modal:{open:!1,type:null,modalAddons:[e.modalAddons]}},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.selectedProduct;return o.a.createElement("section",null,o.a.createElement("div",{className:"product-details"},o.a.createElement("div",{className:"product-details__img"},o.a.createElement("img",{src:x+t.img,alt:t.title})),o.a.createElement("div",{className:"product-details__info"},o.a.createElement("h2",null,t.title,o.a.createElement("a",{href:t.shop_url},"Shop Now")),o.a.createElement("div",{className:"product-nutrition"},o.a.createElement("div",{className:"nutrition-item--cals nutrition-item"},o.a.createElement("div",{className:"nutrition-item__label"},"Calories"),o.a.createElement("div",{className:"nutrition-item__value"},t.stats.cals/t.standard_servings)),o.a.createElement("div",{className:"nutrition-item--fats nutrition-item"},o.a.createElement("div",{className:"nutrition-item__label"},"Fats"),o.a.createElement("div",{className:"nutrition-item__value"},t.stats.fats/t.standard_servings)),o.a.createElement("div",{className:"nutrition-item--carbs nutrition-item"},o.a.createElement("div",{className:"nutrition-item--carbs__total"},o.a.createElement("div",{className:"nutrition-item__label"},"Total Carbs"),o.a.createElement("div",{className:"nutrition-item__value"},t.stats.carbs/t.standard_servings)),o.a.createElement("div",{className:"nutrition-item--carbs__breakdown"},o.a.createElement("div",{className:"carbs-breakdown-item"},t.stats.fiber/t.standard_servings,o.a.createElement("span",null,"G Fiber")),o.a.createElement("div",{className:"carbs-breakdown-item"},t.stats.sugar/t.standard_servings,o.a.createElement("span",null,"G Sugars")))),o.a.createElement("div",{className:"nutrition-item--protein nutrition-item"},o.a.createElement("div",{className:"nutrition-item__label"},"Protein"),o.a.createElement("div",{className:"nutrition-item__value"},t.stats.protein/t.standard_servings))))),o.a.createElement("div",{className:"app-mixins"},o.a.createElement("div",{className:"app-mixins-title"},o.a.createElement("h3",null,"Now, Add Your Mixins")),o.a.createElement("div",{className:"app-mixins-controls"},Object.keys(this.props.allAddons).map(function(t,a){return o.a.createElement(y,{key:a,type:t,modalAddons:e.props.modalAddons[t],activeAddons:e.props.activeAddons,openModal:e.openModal.bind(e),baseUrl:x})}),function(){var t=e.state.modal.type;if(t)return o.a.createElement(A,{type:t,modalAddons:e.props.modalAddons,activeAddons:e.props.activeAddons,openModal:e.openModal.bind(e),closeModal:e.closeModal.bind(e),modalIsOpen:e.state.modal.open,onSelectAddon:e.props.onSelectAddon,onSelectQuantity:e.props.onSelectQuantity,addNewAddonRow:e.props.addNewAddonRow,removeAddonRow:e.props.removeAddonRow,onSubmitModal:e.props.onSubmitModal,baseUrl:x})}()),o.a.createElement("div",{className:"app-mixins-legend text-center"},o.a.createElement("legend",null,"Select at least one liquid to proceed ")),o.a.createElement("div",{className:"app-mixins-cta"},o.a.createElement("div",{className:"app-mixins-cta-block"},o.a.createElement("div",{className:"servings-form"},o.a.createElement("span",null,"Divided into"),o.a.createElement("input",{type:"number",id:"servings-input",min:0,max:40,onChange:this.props.onDividedByChange,defaultValue:t.standard_servings}),o.a.createElement("span",null,"bars / balls")),o.a.createElement("button",{type:"button",className:"button",disabled:this.props.activeAddons.liquids.length<1||1===this.props.activeAddons.liquids.length&&!this.props.activeAddons.liquids[0].addon,onClick:function(){e.props.onViewBreakdown(e.props.goToStep)}},"View Nutrition Breakdown")))))}}]),t}(n.Component),C=(a(117),a(87)),j=a.n(C),M=a(43),B=a(89),P=a.n(B),R=a(90),q=a.n(R),L="/"+f.a,T=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){console.log("onChange ".concat(e)),a.setState({activeKey:e})},a.title=e.title,a.state={activeKey:"1",start:0},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log(document.body.innerHTML)}},{key:"render",value:function(){var e=this.state.start,t=this.props.finalRows,a=[{title:"Per Serving",multiplier:this.props.dividedBy},{title:"Recipe Total",multiplier:1}],n=this.props.dividedBy,i=t.filter(function(e){return e.source.indexOf("addon")>-1}),r={};t.map(function(e){Object.keys(e).map(function(t){"number"===typeof e[t]&&(void 0!==r[t]?r[t]=e[t]:r[t]+=e[t])})});var s,l=function(e){var t=e.id,a=e.dividedBy;return o.a.createElement("div",{key:t},o.a.createElement("div",{className:"app-breakdown__details"},o.a.createElement("div",{className:"product-nutrition"},o.a.createElement("div",{className:"nutrition-item--cals nutrition-item"},o.a.createElement("div",{className:"nutrition-item__label"},"Calories"),o.a.createElement("div",{className:"nutrition-item__value"},(r.cals*(1/a)).toFixed(1))),o.a.createElement("div",{className:"nutrition-item--fats nutrition-item"},o.a.createElement("div",{className:"nutrition-item__label"},"Fats"),o.a.createElement("div",{className:"nutrition-item__value"},(r.fats*(1/a)).toFixed(1))),o.a.createElement("div",{className:"nutrition-item--carbs nutrition-item"},o.a.createElement("div",{className:"nutrition-item--carbs__total"},o.a.createElement("div",{className:"nutrition-item__label"},"Total Carbs"),o.a.createElement("div",{className:"nutrition-item__value"},(r.carbs*(1/a)).toFixed(1))),o.a.createElement("div",{className:"nutrition-item--carbs__breakdown"},o.a.createElement("div",{className:"carbs-breakdown-item"},(r.fiber*(1/a)).toFixed(1)," ",o.a.createElement("span",null,"G Fiber")),o.a.createElement("div",{className:"carbs-breakdown-item"},(r.sugar*(1/a)).toFixed(1)," ",o.a.createElement("span",null,"G Sugars")))),o.a.createElement("div",{className:"nutrition-item--protein nutrition-item"},o.a.createElement("div",{className:"nutrition-item__label"},"Protein"),o.a.createElement("div",{className:"nutrition-item__value"},(r.protein*(1/a)).toFixed(1))))))};return o.a.createElement("section",{className:"app-section-3"},o.a.createElement("div",{className:"app-breakdown--peanut app-breakdown"},o.a.createElement("div",{className:"app-breakdown__main"},o.a.createElement("div",{className:"app-breakdown__product-img-wrap"},o.a.createElement("div",{className:"app-breakdown__product-img"},o.a.createElement("img",{src:L+this.props.selectedProduct.img,alt:this.props.selectedProduct.title}))),o.a.createElement("div",{className:"app-breakdown__titles"},o.a.createElement("h2",{className:"h1"},this.props.selectedProduct.title),o.a.createElement("div",{className:"breakdown-mixins-description"},"with"," ",(s="",i.map(function(e,t){s+=(t>0?", ":"")+e.quantity.label+" "+e.label}),o.a.createElement("span",null,s))),o.a.createElement("div",{className:"breakdown-servings"},"Split Into ",n," Servings")),o.a.createElement(M.b,{renderTabBar:function(){return o.a.createElement(q.a,null)},renderTabContent:function(){return o.a.createElement(P.a,{animatedWithMargin:!0})},navWrapper:function(e){return o.a.createElement(j.a,null,e)},activeKey:this.state.activeKey,onChange:this.onChange},o.a.createElement(M.a,{tab:"".concat(a[e].title),key:"0"},o.a.createElement(l,{id:e,resultTypes:a,dividedBy:n})),o.a.createElement(M.a,{tab:"".concat(a[e+1].title),key:"1"},o.a.createElement(l,{id:e+1,resultTypes:a,dividedBy:"1"})))),o.a.createElement("div",{className:"app-breakdown__share"},o.a.createElement("h4",null,"Save Your Nutrition Breakdown"),o.a.createElement("form",{className:"form--share"},o.a.createElement("input",{type:"email",placeholder:"Your email address"}),o.a.createElement("button",{className:"button--send button"},"Send")))))}}]),t}(n.Component);E.title="Pick Your Mix",O.title="What\u2019s Your Recipe",T.title="Nutrition Breakdown";var W={Step1:E,Step2:O,Step3:T},F=(a(184),a(34)),Q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).handleStepChange=function(e){null!==a.props.selectedProduct&&a.props.goToStep(e)},a.handleStepChange=a.handleStepChange.bind(Object(F.a)(Object(F.a)(a))),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=this,t=[],a=this.props.currentStep,n=function(n){var i=a>=n;t.push(o.a.createElement("li",{className:"progress-step-".concat(n," ").concat(i?"active":""),key:n},o.a.createElement("button",{type:"button",onClick:function(){return e.handleStepChange(n)},className:null===e.props.selectedProduct&&n>1?"disabled":""},n,". ",e.props.steps[n-1].title)))},i=1;i<=this.props.totalSteps;i+=1)n(i);return o.a.createElement("div",null,o.a.createElement("nav",{className:"app-progress-bar"},o.a.createElement("ul",null,t)),o.a.createElement("div",{className:"app-title"},o.a.createElement("h2",null,"Step ",a,": ",this.props.steps[a-1].title,this.props.steps.map(function(e){return e.active&&e.id+": "+e.title})),o.a.createElement("h1",null,1===a?"Recipe Nutrition Calculator":2===a?"What\u2019s Your Recipe":"Your Nutrition Breakdown"),a<=1?"":o.a.createElement("button",{onClick:function(){return e.props.goToStep(a-1)},className:"button--text app-back--button"},o.a.createElement("span",{className:"btn-icon btn-icon--left"},o.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 63.336 63.336",width:"11px",height:"11px",xmlSpace:"preserve"},o.a.createElement("path",{fill:"#f05a5c",d:"M14.924,34.879l30.822,27.938c0.383,0.348,0.864,0.519,1.344,0.519c0.545,0,1.087-0.222,1.482-0.657 c0.741-0.818,0.68-2.083-0.139-2.824l-29.642-26.87L45.66,3.342c0.742-0.818,0.68-2.083-0.139-2.824 c-0.817-0.742-2.082-0.679-2.824,0.139L14.758,31.48c-0.439,0.485-0.59,1.126-0.475,1.723 C14.224,33.811,14.436,34.438,14.924,34.879z"}))),o.a.createElement("span",{className:"btn-text"},"Back"))))}}]),t}(n.Component),U=function(e){function t(){var e;Object(l.a)(this,t),(e=Object(d.a)(this,Object(u.a)(t).call(this))).handleStepChange=function(t){e.setState({currentStep:t.activeStep})},e.onDividedByChange=function(t){t.preventDefault(),t.target.value<=t.target.getAttribute("max")&&t.target.value>=t.target.getAttribute("min")&&e.setState({dividedBy:t.target.value})},e.isProductSelected=function(t){return JSON.stringify(e.state.selected.product)==JSON.stringify(t)},e.onProductSelect=function(t,a){e.setState({selected:{product:e.isProductSelected(t)?null:t}},function(){null!==this.state.selected.product&&a(this.state.currentStep+1)})},e.onSelectQuantity=function(t,a){return function(n){e.setState(function(e){var o=Object(s.a)({},e);return o.modalAddons[t][a].quantity=n,o})}},e.onSelectAddon=function(t,a){return function(n){e.setState(function(e){var o=Object(s.a)({},e);return o.modalAddons[t][a].addon=n,o})}},e.addNewAddonRow=function(t){e.setState(function(e){var a=e.modalAddons.length,n=Object(s.a)({},e);return n.modalAddons[t].push({id:a,quantity:h.c[0],addon:null}),n})},e.removeAddonRow=function(t,a){e.setState(function(n){var o=Object(s.a)({},n);return e.state.modalAddons[t].length>1?o.modalAddons[t].splice(a-1,1):1===e.state.modalAddons[t].length&&(o.modalAddons[t][0]={id:1,quantity:h.c[0],addon:null}),o})},e.onSubmitModal=function(t,a,n){e.setState({loading:!0}),e.setState(function(e){var n=Object(s.a)({},e);return n.activeAddons[t]=a[t],n}),e.setState(function(e){return Object(s.a)({},e).loading=!1,{loading:!1,modal:{open:!1,type:null}}}),"function"===typeof n&&n()},e.FinalCalculation=function(){var t=e.state.selected.product.stats,a=e.state.activeAddons,n=[Object(s.a)({},t,{source:"product"})];Object.keys(a).map(function(e){a[e].map(function(e){n.push(Object(s.a)({quantity:e.quantity},e.addon,{source:"addon"}))})}),e.setState({finalRows:n})},e.onViewBreakdown=function(t){e.FinalCalculation(),"function"===typeof t&&t(e.state.currentStep+1)};var a={},n={};return Object.keys(h.a).map(function(e,t){a[e]=[],n[e]=[{id:1,quantity:h.c[0],addon:null}]}),e.state={loading:!0,currentStep:1,modal:{open:!1,type:null},activeAddons:a,modalAddons:n,finalRows:[],selected:{product:null},dividedBy:12},e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({loading:!1})}},{key:"render",value:function(){return o.a.createElement("div",{id:"appContent"},o.a.createElement(v,{loading:this.state.loading}),o.a.createElement(b.a,{nav:o.a.createElement(Q,{selectedProduct:this.state.selected.product,steps:[W.Step1,W.Step2,W.Step3],currentStep:this.state.currentStep}),onStepChange:this.handleStepChange,isLazyMount:!0},o.a.createElement(W.Step1,{currentStep:this.state.currentStep,selectedProduct:this.state.selected.product,onProductSelect:this.onProductSelect,isProductSelected:this.isProductSelected}),o.a.createElement(W.Step2,{currentStep:this.state.currentStep,selectedProduct:this.state.selected.product,dividedBy:this.state.dividedBy,onDividedByChange:this.onDividedByChange,onSelectAddon:this.onSelectAddon,onSelectQuantity:this.onSelectQuantity,onSubmitModal:this.onSubmitModal,allAddons:h.a,modalAddons:this.state.modalAddons,activeAddons:this.state.activeAddons,addNewAddonRow:this.addNewAddonRow,removeAddonRow:this.removeAddonRow,onViewBreakdown:this.onViewBreakdown,requiredMixin:{type:"liquids",min:1}}),o.a.createElement(W.Step3,{currentStep:this.state.currentStep,selectedProduct:this.state.selected.product,activeAddons:this.state.activeAddons,finalRows:this.state.finalRows,dividedBy:this.state.dividedBy})))}}]),t}(n.Component),Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(U,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/rc-nutrition-calculator",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/rc-nutrition-calculator","/service-worker.js");Y?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):D(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):D(t,e)})}}()},29:function(e){e.exports={a:"rc-nutrition-calculator"}},92:function(e,t,a){e.exports=a(186)},97:function(e,t,a){},99:function(e,t,a){}},[[92,2,1]]]);
//# sourceMappingURL=main.cd6731d0.chunk.js.map