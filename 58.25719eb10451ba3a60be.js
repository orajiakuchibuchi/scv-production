(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{qCuA:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_popover",(function(){return Popover}));var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("wEJo"),_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("E/Mt"),_framework_delegate_94e770cc_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("spDm"),_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("f9PN"),_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("74mu"),_index_a7711c1e_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("qb1Q"),_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("Kfhc");__webpack_require__("W6o/"),__webpack_require__("B4Jq");const iosEnterAnimation=(baseEl,ev)=>{let originY="top",originX="left";const contentEl=baseEl.querySelector(".popover-content"),contentDimentions=contentEl.getBoundingClientRect(),contentWidth=contentDimentions.width,contentHeight=contentDimentions.height,bodyWidth=baseEl.ownerDocument.defaultView.innerWidth,bodyHeight=baseEl.ownerDocument.defaultView.innerHeight,targetDim=ev&&ev.target&&ev.target.getBoundingClientRect(),targetTop=null!=targetDim&&"top"in targetDim?targetDim.top:bodyHeight/2-contentHeight/2,targetLeft=null!=targetDim&&"left"in targetDim?targetDim.left:bodyWidth/2,targetWidth=targetDim&&targetDim.width||0,targetHeight=targetDim&&targetDim.height||0,arrowEl=baseEl.querySelector(".popover-arrow"),arrowDim=arrowEl.getBoundingClientRect(),arrowWidth=arrowDim.width,arrowHeight=arrowDim.height;null==targetDim&&(arrowEl.style.display="none");const arrowCSS={top:targetTop+targetHeight,left:targetLeft+targetWidth/2-arrowWidth/2},popoverCSS={top:targetTop+targetHeight+(arrowHeight-1),left:targetLeft+targetWidth/2-contentWidth/2};let checkSafeAreaLeft=!1,checkSafeAreaRight=!1;popoverCSS.left<POPOVER_IOS_BODY_PADDING+25?(checkSafeAreaLeft=!0,popoverCSS.left=POPOVER_IOS_BODY_PADDING):contentWidth+POPOVER_IOS_BODY_PADDING+popoverCSS.left+25>bodyWidth&&(checkSafeAreaRight=!0,popoverCSS.left=bodyWidth-contentWidth-POPOVER_IOS_BODY_PADDING,originX="right"),targetTop+targetHeight+contentHeight>bodyHeight&&targetTop-contentHeight>0?(arrowCSS.top=targetTop-(arrowHeight+1),popoverCSS.top=targetTop-contentHeight-(arrowHeight-1),baseEl.className=baseEl.className+" popover-bottom",originY="bottom"):targetTop+targetHeight+contentHeight>bodyHeight&&(contentEl.style.bottom=POPOVER_IOS_BODY_PADDING+"%"),arrowEl.style.top=arrowCSS.top+"px",arrowEl.style.left=arrowCSS.left+"px",contentEl.style.top=popoverCSS.top+"px",contentEl.style.left=popoverCSS.left+"px",checkSafeAreaLeft&&(contentEl.style.left=`calc(${popoverCSS.left}px + var(--ion-safe-area-left, 0px))`),checkSafeAreaRight&&(contentEl.style.left=`calc(${popoverCSS.left}px - var(--ion-safe-area-right, 0px))`),contentEl.style.transformOrigin=originY+" "+originX;const baseAnimation=Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__.a)(),backdropAnimation=Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__.a)(),wrapperAnimation=Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__.a)();return backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation.addElement(baseEl.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),baseAnimation.addElement(baseEl).easing("ease").duration(100).addAnimation([backdropAnimation,wrapperAnimation])},POPOVER_IOS_BODY_PADDING=5,iosLeaveAnimation=baseEl=>{const baseAnimation=Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__.a)(),backdropAnimation=Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__.a)(),wrapperAnimation=Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__.a)();return backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation.addElement(baseEl.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),baseAnimation.addElement(baseEl).easing("ease").duration(500).addAnimation([backdropAnimation,wrapperAnimation])},mdEnterAnimation=(baseEl,ev)=>{const doc=baseEl.ownerDocument,isRTL="rtl"===doc.dir;let originY="top",originX=isRTL?"right":"left";const contentEl=baseEl.querySelector(".popover-content"),contentDimentions=contentEl.getBoundingClientRect(),contentWidth=contentDimentions.width,contentHeight=contentDimentions.height,bodyWidth=doc.defaultView.innerWidth,bodyHeight=doc.defaultView.innerHeight,targetDim=ev&&ev.target&&ev.target.getBoundingClientRect(),targetTop=null!=targetDim&&"bottom"in targetDim?targetDim.bottom:bodyHeight/2-contentHeight/2,targetHeight=targetDim&&targetDim.height||0,popoverCSS={top:targetTop,left:null!=targetDim&&"left"in targetDim?isRTL?targetDim.left-contentWidth+targetDim.width:targetDim.left:bodyWidth/2-contentWidth/2};popoverCSS.left<12?(popoverCSS.left=12,originX="left"):contentWidth+12+popoverCSS.left>bodyWidth&&(popoverCSS.left=bodyWidth-contentWidth-12,originX="right"),targetTop+targetHeight+contentHeight>bodyHeight&&targetTop-contentHeight>0?(popoverCSS.top=targetTop-contentHeight-targetHeight,baseEl.className=baseEl.className+" popover-bottom",originY="bottom"):targetTop+targetHeight+contentHeight>bodyHeight&&(contentEl.style.bottom="12px");const baseAnimation=Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__.a)(),backdropAnimation=Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__.a)(),wrapperAnimation=Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__.a)(),contentAnimation=Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__.a)(),viewportAnimation=Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__.a)();return backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation.addElement(baseEl.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),contentAnimation.addElement(contentEl).beforeStyles({top:popoverCSS.top+"px",left:popoverCSS.left+"px","transform-origin":`${originY} ${originX}`}).fromTo("transform","scale(0.001)","scale(1)"),viewportAnimation.addElement(baseEl.querySelector(".popover-viewport")).fromTo("opacity",.01,1),baseAnimation.addElement(baseEl).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([backdropAnimation,wrapperAnimation,contentAnimation,viewportAnimation])},mdLeaveAnimation=baseEl=>{const baseAnimation=Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__.a)(),backdropAnimation=Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__.a)(),wrapperAnimation=Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__.a)();return backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation.addElement(baseEl.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),baseAnimation.addElement(baseEl).easing("ease").duration(500).addAnimation([backdropAnimation,wrapperAnimation])},Popover=class{constructor(hostRef){Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.o)(this,hostRef),this.didPresent=Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.g)(this,"ionPopoverDidPresent",7),this.willPresent=Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.g)(this,"ionPopoverWillPresent",7),this.willDismiss=Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.g)(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.g)(this,"ionPopoverDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=ev=>{ev.stopPropagation(),ev.preventDefault(),this.dismiss()},this.onBackdropTap=()=>{this.dismiss(void 0,_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__.a)},this.onLifecycle=modalEvent=>{const el=this.usersElement,name=LIFECYCLE_MAP[modalEvent.type];if(el&&name){const event=new CustomEvent(name,{bubbles:!1,cancelable:!1,detail:modalEvent.detail});el.dispatchEvent(event)}}}connectedCallback(){Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__.f)(this.el)}async present(){if(this.presented)return;const container=this.el.querySelector(".popover-content");if(!container)throw new Error("container is undefined");const data=Object.assign(Object.assign({},this.componentProps),{popover:this.el});return this.usersElement=await Object(_framework_delegate_94e770cc_js__WEBPACK_IMPORTED_MODULE_2__.a)(this.delegate,container,this.component,["popover-viewport",this.el["s-sc"]],data),await Object(_index_a7711c1e_js__WEBPACK_IMPORTED_MODULE_5__.f)(this.usersElement),Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__.e)(this,"popoverEnter",iosEnterAnimation,mdEnterAnimation,this.event)}async dismiss(data,role){const shouldDismiss=await Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__.g)(this,data,role,"popoverLeave",iosLeaveAnimation,mdLeaveAnimation,this.event);return shouldDismiss&&await Object(_framework_delegate_94e770cc_js__WEBPACK_IMPORTED_MODULE_2__.b)(this.delegate,this.usersElement),shouldDismiss}onDidDismiss(){return Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__.h)(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__.h)(this.el,"ionPopoverWillDismiss")}render(){const mode=Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.b)(this),{onLifecycle:onLifecycle,htmlAttributes:htmlAttributes}=this;return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c,Object.assign({"aria-modal":"true","no-router":!0,tabindex:"-1"},htmlAttributes,{style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__.b)(this.cssClass)),{[mode]:!0,"popover-translucent":this.translucent}),onIonPopoverDidPresent:onLifecycle,onIonPopoverWillPresent:onLifecycle,onIonPopoverWillDismiss:onLifecycle,onIonPopoverDidDismiss:onLifecycle,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap}),Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("div",{tabindex:"0"}),Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("div",{class:"popover-wrapper ion-overlay-wrapper"},Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("div",{class:"popover-arrow"}),Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("div",{class:"popover-content"})),Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("div",{tabindex:"0"}))}get el(){return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.k)(this)}},LIFECYCLE_MAP={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};Popover.style={ios:'.sc-ion-popover-ios-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios::after,[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after,[dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{top:-6px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios,.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:".sc-ion-popover-md-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md,[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md,[dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:100ms;transition-delay:100ms}"}}}]);