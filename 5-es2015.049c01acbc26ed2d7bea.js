(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"R+Sl":function(n,o,t){"use strict";t.r(o),t.d(o,"ComponentWayModuleNgFactory",function(){return y});var l=t("8Y7J");class e{}var c=t("pMnS"),r=t("SVse");class s{constructor(n){this.core=n,this.position="right",this.theme="gray",this.mode="classic",this.show=!1}set symbol(n){console.error(`NgxScrollTop: You are trying to set \`${n}\` as your symbol but Input \`[symbol]="'\u2191'"\` is deprecated now.\n\r`,"Use `Content projection` method, like this:\n\r\n\r",`<ngx-scrolltop>${n}</ngx-scrolltop>\n\r\n\r`,"More info: https://github.com/bartholomej/ngx-scrolltop#symbol")}onWindowScroll(){this.show=this.core.onWindowScroll(this.mode)}scrollToTop(){this.core.scrollToTop()}}var g=t("O6uP"),u=l.rb({encapsulation:0,styles:[["button[_ngcontent-%COMP%]{outline:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.scrolltop-button[_ngcontent-%COMP%]{position:fixed;display:flex;justify-content:center;align-items:center;border-radius:50%;width:40px;height:40px;right:20px;bottom:20px;cursor:pointer;border:none;transition:opacity .1 linear;z-index:10000;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.scrolltop-button[_ngcontent-%COMP%]:hover{opacity:.92}.scrolltop-button[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:15px}.scrolltop-button[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{transform:translateY(10%);width:50%;vertical-align:baseline}.scrolltop-button.black[_ngcontent-%COMP%]{background-color:#000;color:#fff}.scrolltop-button.black[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.black[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}.scrolltop-button.black[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fff}.scrolltop-button.white[_ngcontent-%COMP%]{background-color:#fff;color:#000}.scrolltop-button.white[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.white[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#000}.scrolltop-button.white[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#000}.scrolltop-button.gray[_ngcontent-%COMP%]{background-color:#212121;color:#fafafa}.scrolltop-button.gray[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.gray[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fafafa}.scrolltop-button.gray[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fafafa}.scrolltop-button.grey[_ngcontent-%COMP%]{background-color:#212121;color:#fafafa}.scrolltop-button.grey[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.grey[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fafafa}.scrolltop-button.grey[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fafafa}.scrolltop-button.brown[_ngcontent-%COMP%]{background-color:#3e2723;color:#efebe9}.scrolltop-button.brown[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.brown[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#efebe9}.scrolltop-button.brown[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#efebe9}.scrolltop-button.deeporange[_ngcontent-%COMP%]{background-color:#bf360c;color:#fbe9e7}.scrolltop-button.deeporange[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.deeporange[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fbe9e7}.scrolltop-button.deeporange[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fbe9e7}.scrolltop-button.orange[_ngcontent-%COMP%]{background-color:#ff6d00;color:#fff3e0}.scrolltop-button.orange[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.orange[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff3e0}.scrolltop-button.orange[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fff3e0}.scrolltop-button.yellow[_ngcontent-%COMP%]{background-color:#ffd600;color:#fffde7}.scrolltop-button.yellow[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.yellow[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fffde7}.scrolltop-button.yellow[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fffde7}.scrolltop-button.green[_ngcontent-%COMP%]{background-color:#1b5e20;color:#e8f5e9}.scrolltop-button.green[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.green[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#e8f5e9}.scrolltop-button.green[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#e8f5e9}.scrolltop-button.blue[_ngcontent-%COMP%]{background-color:#2962ff;color:#e3f2fd}.scrolltop-button.blue[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.blue[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#e3f2fd}.scrolltop-button.blue[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#e3f2fd}.scrolltop-button.purple[_ngcontent-%COMP%]{background-color:#4a148c;color:#f3e5f5}.scrolltop-button.purple[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.purple[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#f3e5f5}.scrolltop-button.purple[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#f3e5f5}.scrolltop-button.deeppurple[_ngcontent-%COMP%]{background-color:#311b92;color:#ede7f6}.scrolltop-button.deeppurple[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.deeppurple[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ede7f6}.scrolltop-button.deeppurple[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#ede7f6}.scrolltop-button.pink[_ngcontent-%COMP%]{background-color:#880e4f;color:#fce4ec}.scrolltop-button.pink[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.pink[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fce4ec}.scrolltop-button.pink[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fce4ec}.scrolltop-button.red[_ngcontent-%COMP%]{background-color:#b71c1c;color:#ffebee}.scrolltop-button.red[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.red[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ffebee}.scrolltop-button.red[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#ffebee}.scrolltop-button.indigo[_ngcontent-%COMP%]{background-color:#1a237e;color:#e8eaf6}.scrolltop-button.indigo[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.indigo[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#e8eaf6}.scrolltop-button.indigo[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#e8eaf6}.scrolltop-button.lightblue[_ngcontent-%COMP%]{background-color:#01579b;color:#e1f5fe}.scrolltop-button.lightblue[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.lightblue[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#e1f5fe}.scrolltop-button.lightblue[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#e1f5fe}.scrolltop-button.cyan[_ngcontent-%COMP%]{background-color:#006064;color:#e0f7fa}.scrolltop-button.cyan[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.cyan[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#e0f7fa}.scrolltop-button.cyan[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#e0f7fa}.scrolltop-button.teal[_ngcontent-%COMP%]{background-color:#004d40;color:#e0f2f1}.scrolltop-button.teal[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.teal[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#e0f2f1}.scrolltop-button.teal[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#e0f2f1}.scrolltop-button.lightgreen[_ngcontent-%COMP%]{background-color:#33691e;color:#f1f8e9}.scrolltop-button.lightgreen[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.lightgreen[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#f1f8e9}.scrolltop-button.lightgreen[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#f1f8e9}.scrolltop-button.lime[_ngcontent-%COMP%]{background-color:#827717;color:#f9fbe7}.scrolltop-button.lime[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.lime[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#f9fbe7}.scrolltop-button.lime[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#f9fbe7}.scrolltop-button.amber[_ngcontent-%COMP%]{background-color:#ff6f00;color:#fff8e1}.scrolltop-button.amber[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.amber[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff8e1}.scrolltop-button.amber[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fff8e1}.scrolltop-button.bluegrey[_ngcontent-%COMP%]{background-color:#263238;color:#eceff1}.scrolltop-button.bluegrey[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.bluegrey[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#eceff1}.scrolltop-button.bluegrey[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#eceff1}"]],data:{}});function b(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,1,":svg:svg",[["aria-hidden","true"],["focusable","false"],["role","img"],["viewBox","0 0 448 512"],["xmlns","http://www.w3.org/2000/svg"]],[[4,"fill",null]],null,null,null,null)),(n()(),l.tb(1,0,null,null,0,":svg:path",[["d","M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"]],null,null,null,null,null))],null,function(n,o){n(o,0,0,o.component.symbolColor)})}function a(n){return l.Nb(0,[(n()(),l.tb(0,0,[["scrollTopButton",1]],null,6,"button",[["aria-label","Scroll to top of the page"],["class","scrolltop-button"],["role","button"],["tabindex","0"],["type","button"]],[[4,"left",null],[4,"backgroundColor",null],[4,"width","px"],[4,"height","px"]],[[null,"click"]],function(n,o,t){var l=!0;return"click"===o&&(l=!1!==n.component.scrollToTop()&&l),l},null,null)),l.sb(1,278528,null,0,r.h,[l.t,l.u,l.l,l.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),l.tb(2,0,null,null,4,"div",[["class","symbol-container"]],null,null,null,null,null)),(n()(),l.tb(3,0,[["ref",1]],null,1,"span",[],null,null,null,null,null)),l.Gb(null,0),(n()(),l.cb(16777216,null,null,1,null,b)),l.sb(6,16384,null,0,r.j,[l.P,l.M],{ngIf:[0,"ngIf"]},null)],function(n,o){n(o,1,0,"scrolltop-button",o.component.theme),n(o,6,0,0===l.Hb(o,3).childNodes.length)},function(n,o){var t=o.component;n(o,0,0,"left"===t.position?"20px":"",t.backgroundColor,t.size,t.size)})}function i(n){return l.Nb(0,[(n()(),l.cb(16777216,null,null,1,null,a)),l.sb(1,16384,null,0,r.j,[l.P,l.M],{ngIf:[0,"ngIf"]},null)],function(n,o){n(o,1,0,o.component.show)},null)}class p{}var C=l.rb({encapsulation:0,styles:[[""]],data:{}});function M(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),l.Lb(-1,null,["Component"])),(n()(),l.tb(2,0,null,null,6,"ol",[],null,null,null,null,null)),(n()(),l.tb(3,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),l.Lb(-1,null,["Scroll down"])),(n()(),l.tb(5,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),l.Lb(-1,null,["Watch right bottom corner"])),(n()(),l.tb(7,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),l.Lb(-1,null,["Use it"])),(n()(),l.tb(9,0,null,null,1,"ngx-scrolltop",[["position","right"],["theme","gray"]],null,[["window","scroll"]],function(n,o,t){var e=!0;return"window:scroll"===o&&(e=!1!==l.Hb(n,10).onWindowScroll()&&e),e},i,u)),l.sb(10,49152,null,0,s,[g.a],{backgroundColor:[0,"backgroundColor"],symbolColor:[1,"symbolColor"],size:[2,"size"],position:[3,"position"],theme:[4,"theme"],mode:[5,"mode"]},null),(n()(),l.tb(11,0,null,null,6,"a",[["class","card"],["href","https://github.com/bartholomej/ngx-scrolltop/tree/master/projects/example/src/app/component-way"],["rel","noopener"],["target","_blank"]],null,null,null,null,null)),(n()(),l.tb(12,0,null,null,1,":svg:svg",[["aria-hidden","true"],["class","material-icons"],["data-icon","github"],["data-prefix","fab"],["focusable","false"],["height","24"],["role","img"],["viewBox","0 0 496 512"],["width","24"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(n()(),l.tb(13,0,null,null,0,":svg:path",[["d","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"],["fill","#ffffff"]],null,null,null,null,null)),(n()(),l.tb(14,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),l.Lb(-1,null,["Show Component code"])),(n()(),l.tb(16,0,null,null,1,":svg:svg",[["class","material-icons"],["height","24"],["viewBox","0 0 24 24"],["width","24"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(n()(),l.tb(17,0,null,null,0,":svg:path",[["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],null,null,null,null,null))],function(n,o){n(o,10,0,"#212121","#fafafa",40,"right","gray","classic")},null)}function f(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,1,"app-component-way",[],null,null,null,M,C)),l.sb(1,49152,null,0,p,[],null,null)],null,null)}var P=l.pb("app-component-way",p,f,{},{},[]),O=t("t/jl"),_=t("iInd");class m{}var y=l.qb(e,[],function(n){return l.Eb([l.Fb(512,l.j,l.V,[[8,[c.a,P]],[3,l.j],l.y]),l.Fb(4608,r.l,r.k,[l.v]),l.Fb(4608,g.a,g.a,[r.c]),l.Fb(1073742336,r.b,r.b,[]),l.Fb(1073742336,O.a,O.a,[]),l.Fb(1073742336,_.m,_.m,[[2,_.r],[2,_.k]]),l.Fb(1073742336,m,m,[]),l.Fb(1073742336,e,e,[]),l.Fb(1024,_.i,function(){return[[{path:"",component:p}]]},[])])})}}]);