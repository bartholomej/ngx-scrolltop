import{$a as _o,Ca as go,Ea as fo,Ga as $,L as ro,R as _,Ra as uo,Sa as z,Ta as U,Ua as S,Va as T,Wa as bo,Xa as mo,Y as co,Ya as w,Z as io,Za as k,_ as so,_a as Co,ab as Po,db as E,ha as b,ia as ao,ob as Mo,ra as x,ta as po,vb as Oo,za as m}from"./chunk-4WKHXQGF.js";var B=o=>o===void 0||o==="auto"||o==="instant"||o==="smooth";function ho(o,t){this.scrollLeft=o,this.scrollTop=t}var G=(o,t,n="cannot convert to dictionary.")=>`Failed to execute '${o}' on '${t}': ${n}`,V=(o,t,n)=>G(o,t,`The provided value '${n}' is not a valid enum value of type ScrollBehavior.`),d=(o,t,n)=>{var e;let l=`__SEAMLESS.BACKUP$${t}`;return!o[l]&&o[t]&&!(!((e=o[t])===null||e===void 0)&&e.__isPolyfill)&&(o[l]=o[t]),o[l]||n},D=o=>{let t=typeof o;return o!==null&&(t==="object"||t==="function")},M=o=>"scrollBehavior"in window.document.documentElement.style&&o?.forcePolyfill!==!0,q=o=>{Object.defineProperty(o,"__isPolyfill",{value:!0})},O=(o,t)=>{q(t),[HTMLElement.prototype,SVGElement.prototype,Element.prototype].forEach(n=>{d(n,o),n[o]=t})},v=o=>o.ownerDocument.scrollingElement||o.ownerDocument.documentElement;function yo(o){if(typeof Event=="function")return new Event("scrollend",{bubbles:o,cancelable:!1});let t=document.createEvent("Event");return t.initEvent("scrollend",o,!1),t}var Yo=o=>.5*(1-Math.cos(Math.PI*o));function H(){var o;let t;return!((o=window.performance)===null||o===void 0)&&o.now?t=()=>window.performance.now():t=()=>window.Date.now(),H=t,t()}var Ro=500,K=o=>{let n=(H()-o.timeStamp)/(o.duration||Ro);if(n>1){o.method(o.targetX,o.targetY),o.callback();return}let e=(o.timingFunc||Yo)(n),l=o.startX+(o.targetX-o.startX)*e,r=o.startY+(o.targetY-o.startY)*e;o.method(l,r),o.rafId=window.requestAnimationFrame(()=>{K(o)})};var L=o=>isFinite(o)?Number(o):0,$o=o=>{var t;return(t=o.isConnected)!==null&&t!==void 0?t:!o.ownerDocument||!(o.ownerDocument.compareDocumentPosition(o)&1)},zo=(o,t,n)=>{var e,l;if(!$o(o))return;let r=o.scrollLeft,i=o.scrollTop,p=L((e=t.left)!==null&&e!==void 0?e:r),s=L((l=t.top)!==null&&l!==void 0?l:i);if(p===r&&s===i)return;let C=d(HTMLElement.prototype,"scroll",ho),a=d(Object.getPrototypeOf(o),"scroll",C).bind(o);if(t.behavior!=="smooth"){a(p,s);return}let g=()=>{window.removeEventListener("wheel",c),window.removeEventListener("touchmove",c)},u=()=>{g();let y=o.nodeType===9;o.dispatchEvent(yo(y))},f=Object.assign(Object.assign({},n),{timeStamp:H(),startX:r,startY:i,targetX:p,targetY:s,rafId:0,method:a,callback:u}),c=()=>{window.cancelAnimationFrame(f.rafId),g()};window.addEventListener("wheel",c,{passive:!0,once:!0}),window.addEventListener("touchmove",c,{passive:!0,once:!0}),K(f)},Uo=o=>o.window===o,J=o=>(t,n,e)=>{let[l,r]=Uo(t)?[v(t.document.documentElement),"Window"]:[t,"Element"],i=n??{};if(!D(i))throw new TypeError(G(o,r));if(!B(i.behavior))throw new TypeError(V(o,r,i.behavior));o==="scrollBy"&&(i.left=L(i.left)+l.scrollLeft,i.top=L(i.top)+l.scrollTop),zo(l,i,e)},Q=J("scroll"),wo=J("scrollTo"),vo=J("scrollBy"),xo=Q;var Eo=o=>{switch(o){case"horizontal-tb":case"lr":case"lr-tb":case"rl":case"rl-tb":return 0;case"vertical-rl":case"tb":case"tb-rl":return 1;case"vertical-lr":case"tb-lr":return 2;case"sideways-rl":return 3;case"sideways-lr":return 4}return 0},Bo=(o,t,n,e)=>{let l=0;switch(t||(l^=2),o){case 0:l=l>>1|(l&1)<<1,[n,e]=[e,n];break;case 1:case 3:l^=1;break;case 4:l^=2;break}return[l,n,e]},Go=o=>(Bo(Eo(o.writingMode),o.direction!=="rtl",void 0,void 0)[0]&1)===1,qo=(o,t,n)=>{let[e,l,r]=Bo(t,n,o.block||"start",o.inline||"nearest");return[l,r].map((i,p)=>{switch(i){case"center":return 1;case"nearest":return 0;default:{let s=e>>p&1;return i==="start"==!s?2:3}}})},So=(o,t,n,e,l,r,i)=>o!==0?o:l<t&&r>n||l>t&&r<n?null:l<=t&&i<=e||r>=n&&i>=e?2:r>n&&i<e||l<t&&i>e?3:null,To=o=>o!=="visible"&&o!=="clip",Ko=o=>{var t;try{return((t=o.ownerDocument.defaultView)===null||t===void 0?void 0:t.frameElement)||null}catch{return null}},Jo=(o,t)=>o.clientHeight<o.scrollHeight||o.clientWidth<o.scrollWidth?To(t.overflowY)||To(t.overflowX)||o===v(o):!1,ko=o=>{let t=o.parentNode,n=o.parentElement;if(n===null&&t!==null){if(t.nodeType===11)return t.host;if(t.nodeType===9)return Ko(o)}return n},Z=(o,t,n)=>o<t?t:o>n?n:o,Qo=o=>["scroll-margin","scroll-snap-margin"].filter(t=>t in o.documentElement.style)[0],Zo=(o,t,n)=>{let{top:e,right:l,bottom:r,left:i}=t,p=Qo(o.ownerDocument);if(!p)return[e,l,r,i];let s=C=>{let a=n.getPropertyValue(`${p}-${C}`);return parseInt(a,10)||0};return[e-s("top"),l+s("right"),r+s("bottom"),i-s("left")]},N=(o,t,n)=>{switch(o){case 1:return(t+n)/2;case 3:return n;case 2:case 0:return t}},ot=(o,t)=>{var n,e,l;let r=(n=o.ownerDocument.defaultView)===null||n===void 0?void 0:n.visualViewport,[i,p,s,C]=o===v(o)?[0,0,(e=r?.width)!==null&&e!==void 0?e:o.clientWidth,(l=r?.height)!==null&&l!==void 0?l:o.clientHeight]:[t.left,t.top,o.clientWidth,o.clientHeight],a=i+o.clientLeft,g=p+o.clientTop,u=a+s,f=g+C;return[g,u,f,a]},tt=(o,t)=>{let n=[],e=o.ownerDocument,l=e.defaultView;if(!l)return n;let r=window.getComputedStyle(o),i=r.direction!=="rtl",p=Eo(r.writingMode||r.getPropertyValue("-webkit-writing-mode")||r.getPropertyValue("-ms-writing-mode")),[s,C]=qo(t,p,i),[a,g,u,f]=Zo(o,o.getBoundingClientRect(),r);for(let c=ko(o);c!==null;c=ko(c)){if(e!==c.ownerDocument){if(e=c.ownerDocument,l=e.defaultView,!l)break;let{left:eo,top:lo}=c.getBoundingClientRect();a+=lo,g+=eo,u+=lo,f+=eo}let y=l.getComputedStyle(c);if(y.position==="fixed")break;if(!Jo(c,y))continue;let Ao=c.getBoundingClientRect(),[W,I,F,j]=ot(c,Ao),A=So(s,j,I,c.clientWidth,f,g,g-f),X=So(C,W,F,c.clientHeight,a,u,u-a),no=A===null?0:N(A,f,g)-N(A,j,I),Xo=X===null?0:N(X,a,u)-N(X,W,F),Y=Go(y)?Z(no,-c.scrollWidth+c.clientWidth-c.scrollLeft,-c.scrollLeft):Z(no,-c.scrollLeft,c.scrollWidth-c.clientWidth-c.scrollLeft),R=Z(Xo,-c.scrollTop,c.scrollHeight-c.clientHeight-c.scrollTop);n.push([c,{left:c.scrollLeft+Y,top:c.scrollTop+R,behavior:t.behavior}]),a=Math.max(a-R,W),g=Math.min(g-Y,I),u=Math.min(u-R,F),f=Math.max(f-Y,j)}return n},nt=(o,t,n)=>{let e=t||{};if(!B(e.behavior))throw new TypeError(V("scrollIntoView","Element",e.behavior));tt(o,e).forEach(([r,i])=>{xo(r,i,n)})},oo=nt;var h=(o,t)=>n=>{if(M(n))return;let e={scroll:Q,scrollTo:wo,scrollBy:vo}[o];t(o,function(){let l=arguments;if(arguments.length===1){e(this,l[0],n);return}let r=l[0],i=l[1];e(this,{left:r,top:i})})},Vo=h("scroll",O),Do=h("scrollTo",O),Ho=h("scrollBy",O),to=(o,t)=>{q(t),d(window,o),window[o]=t},Lo=h("scroll",to),No=h("scrollTo",to),Wo=h("scrollBy",to);function et(o){oo(this,{block:o??!0?"start":"end",inline:"nearest"})}var Io=o=>{if(M(o))return;let t=d(window.HTMLElement.prototype,"scrollIntoView",et);O("scrollIntoView",function(){let e=arguments,l=e[0];if(e.length===1&&D(l)){oo(this,l,o);return}t.apply(this,e)})};var Fo=o=>{M(o)||(Vo(o),Do(o),Ho(o),Io(o),Lo(o),No(o),Wo(o))};var P=(()=>{class o{constructor(){this.scrolledFromTop=m(!1),this.scrollOffset=m(0),this.isBrowser=typeof window<"u",this.alreadyActivated=m(!1),this.document=_(Mo)}onWindowScroll(n){let e=this.document.documentElement?.scrollTop||this.document.scrollingElement?.scrollTop;switch(n){case"classic":return this.classicMode(e);case"smart":return this.smartMode(e)}}classicMode(n){return!!(this.isBrowser&&n>window.innerHeight)}smartMode(n){let e=!1;return n===0&&(e=!1,this.scrolledFromTop.set(!1)),this.scrolledFromTop()&&this.scrollOffset()>n&&(e=!0),this.isBrowser&&n>window.innerHeight*2&&(this.scrolledFromTop.set(!0),this.scrollOffset.set(n)),e}scrollToTop(){this.isBrowser&&(this.alreadyActivated()||(Fo(),this.alreadyActivated.set(!0)),window.scroll({top:0,left:0,behavior:"smooth"}))}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275prov=ro({token:o,factory:o.\u0275fac})}}return o})();var lt=["*"];function rt(o,t){if(o&1&&(so(),S(0,"svg",6),bo(1,"path",7),T()),o&2){let n=k(2);z("fill",n.symbolColor())}}function ct(o,t){if(o&1){let n=mo();S(0,"button",3,0),w("click",function(){co(n);let l=k();return io(l.scrollToTop())}),S(2,"div",4)(3,"span",null,1),_o(5),T(),$(6,rt,2,2,":svg:svg",5),T()()}if(o&2){let n=Po(4),e=k();z("left",e.position()==="left"?"20px":"")("background-color",e.backgroundColor())("width",e.size(),"px")("height",e.size(),"px"),uo("ngClass",e.theme()),po(6),U(n.childNodes.length===0?6:-1)}}var jt=(()=>{class o{constructor(){this.backgroundColor=b(),this.symbolColor=b(),this.size=b(),this.position=b("right"),this.theme=b("gray"),this.mode=b("classic"),this.show=m(!1),this.core=_(P)}onWindowScroll(){let n=this.core.onWindowScroll(this.mode());this.show()!==n&&this.show.set(n)}scrollToTop(){this.core.scrollToTop()}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275cmp=go({type:o,selectors:[["ngx-scrolltop"]],hostBindings:function(e,l){e&1&&w("scroll",function(){return l.onWindowScroll()},!1,x)},inputs:{backgroundColor:[1,"backgroundColor"],symbolColor:[1,"symbolColor"],size:[1,"size"],position:[1,"position"],theme:[1,"theme"],mode:[1,"mode"]},features:[E([P])],ngContentSelectors:lt,decls:1,vars:1,consts:[["scrollTopButton",""],["ref",""],["type","button","role","button","aria-label","Scroll to top of the page","tabindex","0",1,"scrolltop-button",3,"ngClass","left","backgroundColor","width","height"],["type","button","role","button","aria-label","Scroll to top of the page","tabindex","0",1,"scrolltop-button",3,"click","ngClass"],[1,"symbol-container"],["aria-hidden","true","focusable","false","role","img","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 448 512",3,"fill"],["aria-hidden","true","focusable","false","role","img","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 448 512"],["d","M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"]],template:function(e,l){e&1&&(Co(),$(0,ct,7,10,"button",2)),e&2&&U(l.show()?0:-1)},dependencies:[Oo],styles:["button[_ngcontent-%COMP%]{outline:0;-webkit-user-select:none;user-select:none}.scrolltop-button[_ngcontent-%COMP%]{position:fixed;display:flex;justify-content:center;align-items:center;border-radius:50%;padding:0;width:40px;height:40px;right:20px;bottom:20px;cursor:pointer;border:none;transition:opacity .1s linear;z-index:10000;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.scrolltop-button[_ngcontent-%COMP%]:hover{opacity:.92}.scrolltop-button[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:15px}.scrolltop-button[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:empty{display:none}.scrolltop-button[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{display:inline-flex;transform:translateY(10%);width:35%;vertical-align:baseline}.scrolltop-button.black[_ngcontent-%COMP%]{background-color:#000;color:#fff}.scrolltop-button.black[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.black[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}.scrolltop-button.black[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fff}.scrolltop-button.white[_ngcontent-%COMP%]{background-color:#fff;color:#000}.scrolltop-button.white[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.white[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#000}.scrolltop-button.white[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#000}.scrolltop-button.gray[_ngcontent-%COMP%]{background-color:#212121;color:#fafafa}.scrolltop-button.gray[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.gray[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fafafa}.scrolltop-button.gray[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fafafa}.scrolltop-button.grey[_ngcontent-%COMP%]{background-color:#212121;color:#fafafa}.scrolltop-button.grey[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.grey[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fafafa}.scrolltop-button.grey[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fafafa}.scrolltop-button.brown[_ngcontent-%COMP%]{background-color:#3e2723;color:#efebe9}.scrolltop-button.brown[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.brown[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#efebe9}.scrolltop-button.brown[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#efebe9}.scrolltop-button.deeporange[_ngcontent-%COMP%]{background-color:#bf360c;color:#fbe9e7}.scrolltop-button.deeporange[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.deeporange[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fbe9e7}.scrolltop-button.deeporange[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fbe9e7}.scrolltop-button.orange[_ngcontent-%COMP%]{background-color:#ff6d00;color:#fff3e0}.scrolltop-button.orange[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.orange[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff3e0}.scrolltop-button.orange[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fff3e0}.scrolltop-button.yellow[_ngcontent-%COMP%]{background-color:#ffd600;color:#fffde7}.scrolltop-button.yellow[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.yellow[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fffde7}.scrolltop-button.yellow[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fffde7}.scrolltop-button.green[_ngcontent-%COMP%]{background-color:#1b5e20;color:#e8f5e9}.scrolltop-button.green[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.green[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#e8f5e9}.scrolltop-button.green[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#e8f5e9}.scrolltop-button.blue[_ngcontent-%COMP%]{background-color:#2962ff;color:#e3f2fd}.scrolltop-button.blue[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.blue[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#e3f2fd}.scrolltop-button.blue[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#e3f2fd}.scrolltop-button.purple[_ngcontent-%COMP%]{background-color:#4a148c;color:#f3e5f5}.scrolltop-button.purple[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.purple[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#f3e5f5}.scrolltop-button.purple[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#f3e5f5}.scrolltop-button.deeppurple[_ngcontent-%COMP%]{background-color:#311b92;color:#ede7f6}.scrolltop-button.deeppurple[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.deeppurple[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ede7f6}.scrolltop-button.deeppurple[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#ede7f6}.scrolltop-button.pink[_ngcontent-%COMP%]{background-color:#880e4f;color:#fce4ec}.scrolltop-button.pink[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.pink[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fce4ec}.scrolltop-button.pink[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fce4ec}.scrolltop-button.red[_ngcontent-%COMP%]{background-color:#b71c1c;color:#ffebee}.scrolltop-button.red[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.red[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ffebee}.scrolltop-button.red[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#ffebee}.scrolltop-button.indigo[_ngcontent-%COMP%]{background-color:#1a237e;color:#e8eaf6}.scrolltop-button.indigo[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.indigo[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#e8eaf6}.scrolltop-button.indigo[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#e8eaf6}.scrolltop-button.lightblue[_ngcontent-%COMP%]{background-color:#01579b;color:#e1f5fe}.scrolltop-button.lightblue[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.lightblue[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#e1f5fe}.scrolltop-button.lightblue[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#e1f5fe}.scrolltop-button.cyan[_ngcontent-%COMP%]{background-color:#006064;color:#e0f7fa}.scrolltop-button.cyan[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.cyan[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#e0f7fa}.scrolltop-button.cyan[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#e0f7fa}.scrolltop-button.teal[_ngcontent-%COMP%]{background-color:#004d40;color:#e0f2f1}.scrolltop-button.teal[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.teal[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#e0f2f1}.scrolltop-button.teal[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#e0f2f1}.scrolltop-button.lightgreen[_ngcontent-%COMP%]{background-color:#33691e;color:#f1f8e9}.scrolltop-button.lightgreen[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.lightgreen[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#f1f8e9}.scrolltop-button.lightgreen[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#f1f8e9}.scrolltop-button.lime[_ngcontent-%COMP%]{background-color:#827717;color:#f9fbe7}.scrolltop-button.lime[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.lime[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#f9fbe7}.scrolltop-button.lime[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#f9fbe7}.scrolltop-button.amber[_ngcontent-%COMP%]{background-color:#ff6f00;color:#fff8e1}.scrolltop-button.amber[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.amber[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff8e1}.scrolltop-button.amber[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fff8e1}.scrolltop-button.bluegrey[_ngcontent-%COMP%]{background-color:#263238;color:#eceff1}.scrolltop-button.bluegrey[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.bluegrey[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#eceff1}.scrolltop-button.bluegrey[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#eceff1}"],changeDetection:0})}}return o})();var zt=(()=>{class o{constructor(){this.mode=b("classic",{alias:"ngxScrollTopMode"}),this.show=m(!1),this.el=_(ao),this.core=_(P),this.hideElement()}onWindowScroll(){let n=this.core.onWindowScroll(this.mode());this.show()!==n&&(n?this.showElement():this.hideElement(),this.show.set(n))}onClick(){this.scrollToTop()}hideElement(){this.el.nativeElement.style.display="none"}showElement(){this.el.nativeElement.style.display=""}scrollToTop(){this.core.scrollToTop()}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275dir=fo({type:o,selectors:[["","ngxScrollTop",""]],hostBindings:function(e,l){e&1&&w("scroll",function(){return l.onWindowScroll()},!1,x)("click",function(){return l.onClick()})},inputs:{mode:[1,"ngxScrollTopMode","mode"]},features:[E([P])]})}}return o})();export{jt as a,zt as b};
