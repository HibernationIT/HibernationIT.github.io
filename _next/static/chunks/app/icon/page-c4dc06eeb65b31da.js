(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[162],{5105:function(e,n,t){Promise.resolve().then(t.bind(t,7615)),Promise.resolve().then(t.bind(t,8361)),Promise.resolve().then(t.t.bind(t,7433,23))},7615:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});var o=t(7437),a=t(2265);async function r(e,n){let t=await fetch("./".concat(e)),o=await t.blob(),a=window.URL.createObjectURL(o),r=document.createElement("a");document.body.appendChild(r),r.download=n,r.href=a,r.click(),document.body.removeChild(r),window.URL.revokeObjectURL(a)}var c=t(8302),l=t.n(c);function s(e){let{name:n,png:t,svg:c}=e,[s,d]=(0,a.useState)(!1);return(0,o.jsxs)("div",{className:l().card,children:[(0,o.jsx)("button",{onClick:()=>d(!0),children:(0,o.jsx)("img",{src:"./".concat(c),alt:n})}),(0,o.jsx)("p",{children:n}),(0,o.jsxs)("div",{className:"".concat(l().download," ").concat(s?l().open:""),onClick:()=>d(!1),children:[(0,o.jsx)("img",{src:"/images/icon/cancel.svg",alt:"cancel"}),(0,o.jsx)("button",{className:l().downloadBtn,onClick:()=>r(t,n),children:"PNG"}),(0,o.jsx)("button",{className:l().downloadBtn,onClick:()=>r(c,n),children:"SVG"})]})]})}},8361:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var o=t(7437),a=t(2265),r=t(4518),c=t.n(r);function l(){return(0,a.useEffect)(()=>{let e=()=>{try{let{adsbygoogle:e}=window;e.push({})}catch(e){console.error(e)}},n=setInterval(()=>{window.adsbygoogle&&(e(),clearInterval(n))},500);return()=>{clearInterval(n)}},[]),(0,o.jsx)("section",{className:c().adbox,children:(0,o.jsx)("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4998422659731294","data-ad-slot":"6878857551","data-ad-format":"auto","data-full-width-responsive":"true"})})}},8302:function(e){e.exports={card:"card_card__DfQKD",download:"card_download__M1Cbu",downloadBtn:"card_downloadBtn__T4ED_",open:"card_open__gAv61"}},4518:function(e){e.exports={adbox:"adBox_adbox__V7Zv9"}},7433:function(e){e.exports={template:"template_template__ez80O"}},622:function(e,n,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=t(2265),a=Symbol.for("react.element"),r=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,t){var o,s={},d=null,i=null;for(o in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(i=n.ref),n)r.call(n,o)&&!l.hasOwnProperty(o)&&(s[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===s[o]&&(s[o]=n[o]);return{$$typeof:a,type:e,key:d,ref:i,props:s,_owner:c.current}}n.jsx=s,n.jsxs=s},7437:function(e,n,t){"use strict";e.exports=t(622)}},function(e){e.O(0,[971,864,744],function(){return e(e.s=5105)}),_N_E=e.O()}]);