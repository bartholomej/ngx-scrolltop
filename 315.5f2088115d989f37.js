"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[315],{315:(P,s,l)=>{l.r(s),l.d(s,{ComponentWayModule:()=>M});var r=l(808),a=l(935),g=l(367),n=l(96),b=l(796);function i(o,c){if(1&o&&(n.O4$(),n.TgZ(0,"svg",6),n._UZ(1,"path",7),n.qZA()),2&o){const t=n.oxw(2);n.Udp("fill",t.symbolColor)}}function p(o,c){if(1&o){const t=n.EpF();n.TgZ(0,"button",1,2),n.NdJ("click",function(){return n.CHM(t),n.oxw().scrollToTop()}),n.TgZ(2,"div",3),n.TgZ(3,"span",null,4),n.Hsn(5),n.qZA(),n.YNc(6,i,2,2,"svg",5),n.qZA(),n.qZA()}if(2&o){const t=n.MAs(4),e=n.oxw();n.Udp("left","left"===e.position?"20px":"")("background-color",e.backgroundColor)("width",e.size,"px")("height",e.size,"px"),n.Q6J("ngClass",e.theme),n.xp6(6),n.Q6J("ngIf",0===t.childNodes.length)}}const C=["*"];let f=(()=>{class o{constructor(t,e){this.core=t,this.cdr=e,this.position="right",this.theme="gray",this.mode="classic",this.show=!1}onWindowScroll(){const t=this.core.onWindowScroll(this.mode);this.show!==t&&(this.show=t,this.cdr.markForCheck())}ngOnChanges(t){t.symbol&&console.error(`NgxScrollTop: You are trying to set \`${t.symbol.currentValue}\` as your symbol but Input \`[symbol]="'\u2191'"\` is deprecated now.\n\r`,"Use `Content projection` method, like this:\n\r\n\r",`<ngx-scrolltop>${t.symbol.currentValue}</ngx-scrolltop>\n\r\n\r`,"More info: https://github.com/bartholomej/ngx-scrolltop#symbol")}scrollToTop(){this.core.scrollToTop()}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(b.X),n.Y36(n.sBO))},o.\u0275cmp=n.Xpm({type:o,selectors:[["ngx-scrolltop"]],hostBindings:function(t,e){1&t&&n.NdJ("scroll",function(){return e.onWindowScroll()},!1,n.Jf7)},inputs:{backgroundColor:"backgroundColor",symbolColor:"symbolColor",size:"size",symbol:"symbol",position:"position",theme:"theme",mode:"mode"},features:[n.TTD],ngContentSelectors:C,decls:1,vars:1,consts:[["type","button","role","button","aria-label","Scroll to top of the page","tabindex","0","class","scrolltop-button",3,"ngClass","left","backgroundColor","width","height","click",4,"ngIf"],["type","button","role","button","aria-label","Scroll to top of the page","tabindex","0",1,"scrolltop-button",3,"ngClass","click"],["scrollTopButton",""],[1,"symbol-container"],["ref",""],["aria-hidden","true","focusable","false","role","img","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 448 512",3,"fill",4,"ngIf"],["aria-hidden","true","focusable","false","role","img","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 448 512"],["d","M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"]],template:function(t,e){1&t&&(n.F$t(),n.YNc(0,p,7,10,"button",0)),2&t&&n.Q6J("ngIf",e.show)},directives:[r.O5,r.mk],styles:["button[_ngcontent-%COMP%]{outline:0;-webkit-user-select:none;-moz-user-select:none;user-select:none}.scrolltop-button[_ngcontent-%COMP%]{position:fixed;display:flex;justify-content:center;align-items:center;border-radius:50%;width:40px;height:40px;right:20px;bottom:20px;cursor:pointer;border:none;transition:opacity .1 linear;z-index:10000;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.scrolltop-button[_ngcontent-%COMP%]:hover{opacity:.92}.scrolltop-button[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:15px}.scrolltop-button[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{transform:translateY(10%);width:50%;vertical-align:baseline}.scrolltop-button.black[_ngcontent-%COMP%]{background-color:#000;color:#fff}.scrolltop-button.black[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.black[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}.scrolltop-button.black[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fff}.scrolltop-button.white[_ngcontent-%COMP%]{background-color:#fff;color:#000}.scrolltop-button.white[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.white[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#000}.scrolltop-button.white[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#000}.scrolltop-button.gray[_ngcontent-%COMP%]{background-color:#212121;color:#fafafa}.scrolltop-button.gray[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.gray[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fafafa}.scrolltop-button.gray[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fafafa}.scrolltop-button.grey[_ngcontent-%COMP%]{background-color:#212121;color:#fafafa}.scrolltop-button.grey[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.grey[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fafafa}.scrolltop-button.grey[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fafafa}.scrolltop-button.brown[_ngcontent-%COMP%]{background-color:#3e2723;color:#efebe9}.scrolltop-button.brown[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.brown[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#efebe9}.scrolltop-button.brown[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#efebe9}.scrolltop-button.deeporange[_ngcontent-%COMP%]{background-color:#bf360c;color:#fbe9e7}.scrolltop-button.deeporange[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.deeporange[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fbe9e7}.scrolltop-button.deeporange[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fbe9e7}.scrolltop-button.orange[_ngcontent-%COMP%]{background-color:#ff6d00;color:#fff3e0}.scrolltop-button.orange[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.orange[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff3e0}.scrolltop-button.orange[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fff3e0}.scrolltop-button.yellow[_ngcontent-%COMP%]{background-color:#ffd600;color:#fffde7}.scrolltop-button.yellow[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.yellow[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fffde7}.scrolltop-button.yellow[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fffde7}.scrolltop-button.green[_ngcontent-%COMP%]{background-color:#1b5e20;color:#e8f5e9}.scrolltop-button.green[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.green[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#e8f5e9}.scrolltop-button.green[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#e8f5e9}.scrolltop-button.blue[_ngcontent-%COMP%]{background-color:#2962ff;color:#e3f2fd}.scrolltop-button.blue[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.blue[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#e3f2fd}.scrolltop-button.blue[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#e3f2fd}.scrolltop-button.purple[_ngcontent-%COMP%]{background-color:#4a148c;color:#f3e5f5}.scrolltop-button.purple[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.purple[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#f3e5f5}.scrolltop-button.purple[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#f3e5f5}.scrolltop-button.deeppurple[_ngcontent-%COMP%]{background-color:#311b92;color:#ede7f6}.scrolltop-button.deeppurple[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.deeppurple[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ede7f6}.scrolltop-button.deeppurple[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#ede7f6}.scrolltop-button.pink[_ngcontent-%COMP%]{background-color:#880e4f;color:#fce4ec}.scrolltop-button.pink[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.pink[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fce4ec}.scrolltop-button.pink[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fce4ec}.scrolltop-button.red[_ngcontent-%COMP%]{background-color:#b71c1c;color:#ffebee}.scrolltop-button.red[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.red[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ffebee}.scrolltop-button.red[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#ffebee}.scrolltop-button.indigo[_ngcontent-%COMP%]{background-color:#1a237e;color:#e8eaf6}.scrolltop-button.indigo[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.indigo[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#e8eaf6}.scrolltop-button.indigo[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#e8eaf6}.scrolltop-button.lightblue[_ngcontent-%COMP%]{background-color:#01579b;color:#e1f5fe}.scrolltop-button.lightblue[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.lightblue[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#e1f5fe}.scrolltop-button.lightblue[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#e1f5fe}.scrolltop-button.cyan[_ngcontent-%COMP%]{background-color:#006064;color:#e0f7fa}.scrolltop-button.cyan[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.cyan[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#e0f7fa}.scrolltop-button.cyan[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#e0f7fa}.scrolltop-button.teal[_ngcontent-%COMP%]{background-color:#004d40;color:#e0f2f1}.scrolltop-button.teal[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.teal[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#e0f2f1}.scrolltop-button.teal[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#e0f2f1}.scrolltop-button.lightgreen[_ngcontent-%COMP%]{background-color:#33691e;color:#f1f8e9}.scrolltop-button.lightgreen[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.lightgreen[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#f1f8e9}.scrolltop-button.lightgreen[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#f1f8e9}.scrolltop-button.lime[_ngcontent-%COMP%]{background-color:#827717;color:#f9fbe7}.scrolltop-button.lime[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.lime[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#f9fbe7}.scrolltop-button.lime[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#f9fbe7}.scrolltop-button.amber[_ngcontent-%COMP%]{background-color:#ff6f00;color:#fff8e1}.scrolltop-button.amber[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.amber[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff8e1}.scrolltop-button.amber[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fff8e1}.scrolltop-button.bluegrey[_ngcontent-%COMP%]{background-color:#263238;color:#eceff1}.scrolltop-button.bluegrey[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.bluegrey[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#eceff1}.scrolltop-button.bluegrey[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#eceff1}"],changeDetection:0}),o})();const _=[{path:"",component:(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-component-way"]],decls:17,vars:4,consts:[["position","right","theme","gray",3,"backgroundColor","symbolColor","size","mode"],["target","_blank","rel","noopener","href","https://github.com/bartholomej/ngx-scrolltop/tree/master/projects/demo/src/app/component-way","target","_blank",1,"card"],["aria-hidden","true","width","24","height","24","focusable","false","data-prefix","fab","data-icon","github","role","img","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 496 512",1,"material-icons"],["fill","#ffffff","d","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24",1,"material-icons"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(t,e){1&t&&(n.TgZ(0,"h1"),n._uU(1,"Component"),n.qZA(),n.TgZ(2,"ol"),n.TgZ(3,"li"),n._uU(4,"Scroll down"),n.qZA(),n.TgZ(5,"li"),n._uU(6,"Watch right bottom corner"),n.qZA(),n.TgZ(7,"li"),n._uU(8,"Use it"),n.qZA(),n.qZA(),n._UZ(9,"ngx-scrolltop",0),n.TgZ(10,"a",1),n.O4$(),n.TgZ(11,"svg",2),n._UZ(12,"path",3),n.qZA(),n.kcU(),n.TgZ(13,"span"),n._uU(14,"Show Component code"),n.qZA(),n.O4$(),n.TgZ(15,"svg",4),n._UZ(16,"path",5),n.qZA(),n.qZA()),2&t&&(n.xp6(9),n.Q6J("backgroundColor","#212121")("symbolColor","#fafafa")("size",40)("mode","classic"))},directives:[f],styles:[""]}),o})()}];let u=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[g.Bz.forChild(_)],g.Bz]}),o})(),M=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[a.J,r.ez,u]]}),o})()}}]);