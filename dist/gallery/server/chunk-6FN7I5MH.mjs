import './polyfills.server.mjs';
import{B as k,D as j,E as F,F as S,I as T,O as z,a as l,b as _,c as v,d,e as f,f as C,g as u,h as w,i as x,j as y,k as P,l as a,m as c,n as m,o as M,p,q as s,r as h,s as g,t as b,y as O}from"./chunk-SRRFQBSC.mjs";var N=t=>({highlight:t});function U(t,e){if(t&1){let r=M();a(0,"img",9),p("click",function(){_(r);let i=s().$implicit,o=s();return v(o.i=o.image.indexOf(i))}),c()}if(t&2){let r=s().$implicit,n=s();u("src",r,d)("ngClass",b(2,N,r==n.image[n.i]))}}function B(t,e){if(t&1&&C(0,U,1,4,"img",8),t&2){let r=e.$implicit,n=s();w(r==n.image[n.i]||r==n.image[n.i+1]||r==n.image[n.i-1]?0:-1)}}var D=(()=>{let e=class e{constructor(){this.image=["../../../../../photo_5886513843700613019_y.jpg","../../../../../photo_5893389686909551107_y.jpg","../../../../../photo_5895220648647703593_y.jpg","../../../../../photo_5947286037506145952_y.jpg","../../../../../photo_5947286037506145953_y.jpg"],this.i=0}next(){this.i++,this.i>this.image.length-1&&(this.i=0),console.log(this.i)}previous(){this.i==0?this.i=this.image.length-1:this.i--,console.log(this.i)}ngOnInit(){}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=l({type:e,selectors:[["app-preview"]],standalone:!0,features:[g],decls:12,vars:1,consts:[[1,"container"],[1,"previous-container"],[1,"previous",3,"click"],[1,"image-container"],["alt","no pic","draggable","false",1,"main-image",3,"src"],[1,"next-container"],[1,"next",3,"click"],[1,"preview"],["alt","","draggable","false",3,"src","ngClass"],["alt","","draggable","false",3,"click","src","ngClass"]],template:function(i,o){i&1&&(a(0,"div",0)(1,"div",1)(2,"button",2),p("click",function(){return o.previous()}),h(3," < "),c()(),a(4,"div",3),m(5,"img",4),c(),a(6,"div",5)(7,"button",6),p("click",function(){return o.next()}),h(8," > "),c()(),a(9,"div",7),y(10,B,1,1,null,null,x),c()()),i&2&&(f(5),u("src",o.image[o.i],d),f(5),P(o.image))},dependencies:[j],styles:["*[_ngcontent-%COMP%]{margin:0;overflow-y:hidden;overflow-x:hidden}button[_ngcontent-%COMP%]:hover{cursor:pointer}.container[_ngcontent-%COMP%]{padding-top:2rem;width:100vw;height:100vh;outline:none;outline-offset:none;background-color:#36454f;display:grid;grid-template-columns:3fr 3fr 3fr;grid-template-rows:8fr 3fr;align-items:center}.image-container[_ngcontent-%COMP%]{display:grid;margin:0;border:0;width:33vw;height:62vh;object-fit:cover;grid-column-start:2;grid-column-end:3;grid-row:1 / 2;align-items:center;justify-content:center;position:relative}div[_ngcontent-%COMP%]   .main-image[_ngcontent-%COMP%]{position:relative;justify-self:center;align-self:center;object-fit:cover;max-height:100%}.slide[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_slide;animation-duration:.5s}.previous-container[_ngcontent-%COMP%]{display:grid;margin:0;border:0;width:30vw;height:33vh;grid-row:1 / 2;grid-column:1 / 2;align-items:stretch;justify-content:end;padding-left:2rem;z-index:2}.next-container[_ngcontent-%COMP%]{display:grid;margin:0;border:0;width:30vw;height:33vh;grid-row:1 / 2;grid-column:3 /4;align-items:stretch;justify-content:start;z-index:2}.previous[_ngcontent-%COMP%], .next[_ngcontent-%COMP%]{color:#f5f5f5;background-color:transparent;font-size:5rem;border:none;opacity:.4}.previous[_ngcontent-%COMP%]:hover, .next[_ngcontent-%COMP%]:hover{background-color:#979696da;color:#000;opacity:1}.preview[_ngcontent-%COMP%]{display:flex;position:absolute;background-color:#00000083;gap:1rem;align-items:center;justify-content:center;align-self:flex-end;width:100svw;height:10rem;flex-wrap:nowrap;z-index:6;padding-bottom:2rem}.preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:5rem;height:5rem;opacity:.6;padding-top:.4rem}.preview[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%]{margin-bottom:1.5rem;width:7rem;height:7rem;opacity:1;align-self:center}@keyframes _ngcontent-%COMP%_slide{0%{transform:translate(0)}20%{transform:translate(70%)}50%{transform:translate(100%)}to{transform:translate(200%)}}"]});let t=e;return t})();var E=(()=>{let e=class e{constructor(){this.title="gallery"}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=l({type:e,selectors:[["app-root"]],standalone:!0,features:[g],decls:1,vars:0,template:function(i,o){i&1&&m(0,"app-preview")},dependencies:[D],styles:["*[_ngcontent-%COMP%]{margin:0;border:0;outline:0;outline-offset:0}"]});let t=e;return t})();var A=[];var I={providers:[O({eventCoalescing:!0}),z(A),S()]};var H={providers:[T()]},R=k(I,H);var Z=()=>F(E,R),le=Z;export{le as a};