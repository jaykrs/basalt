define("@widget/SUBSCRIBE/bs-subscribe3-subscribe-form-7c684d5a.js",["exports","~/c/bs-subscribe-form"],(function(e,t){"use strict";class o extends t.S{constructor(e){super(e)}render(){const{confirmationMessage:e,staticContent:o,category:c,section:a,background:s,couponConfirmationMessage:i,couponDiscount:n,couponDiscountMessage:r}=this.props,{verificationText:u}=o,g=s&&s.image?"accent":c,l=s&&s.image?"overlay":a;if(this.state.formSubmitted)return(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Base,{category:g,section:l},(global.React||guac.react).createElement(t.F,{formSuccessMessage:this.shouldShowCoupon()?i:e,verificationText:u,olsConfigHost:this.getOlsConfigHost(),showCoupon:this.shouldShowCoupon(),couponDiscount:n,couponDiscountMessage:r}));const b=(global.Core||guac["@wsb/guac-widget-core"]).UX2.Component.Grid;return(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Base,{category:g,section:l},(global.React||guac.react).createElement(b,{bottom:!1,inset:!0,"data-aid":t.D.SUBSCRIBE_INNER_FORM_REND},(global.React||guac.react).createElement(b.Cell,null,this.renderDescriptionSection(),(global.React||guac.react).createElement(t.I,t._({formSubmitHost:this.getFormSubmitHost(),onSubmit:this.onSubmit},this.props)))))}}e.default=o,Object.defineProperty(e,"__esModule",{value:!0})})),"undefined"!=typeof window&&(window.global=window);
//# sourceMappingURL=bs-subscribe3-subscribe-form-7c684d5a.js.map
