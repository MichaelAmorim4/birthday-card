(function(){"use strict";var t={9835:function(t,n,o){o(6992),o(8674),o(9601),o(7727);var i=o(9567),e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticStyle:{"background-color":"#51e857"},attrs:{id:"app"}},[i("BouncingPictures",{staticStyle:{position:"absolute"}}),i("div",{attrs:{id:"card-container"}},[i("div",{staticClass:"card"},[i("img",{staticClass:"birthday",attrs:{src:o(6492),alt:"birthday"}}),i("div",{staticClass:"text"},[i("BirthdayText")],1)]),i("input",{attrs:{id:"button",type:"button",value:"Restart Confetti"},on:{click:t.restartConfetti}})])],1)},r=[],s=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"hello"},[t._m(0),t._m(1),t._m(2),o("h3",{staticStyle:{width:"60%","margin-left":"auto","margin-right":"auto"}},[t._v(" I look forward to witnessing everything you are going to do and building upon this friendship! Hopefully we can get to know each other more this year and do more things together; both online and in person. I wish you all the best and I hope you have a wonderful day and rest of your year! ")]),o("img",{staticStyle:{"margin-top":"10px"},attrs:{src:t.dab}}),o("img",{staticStyle:{"margin-top":"10px"},attrs:{src:t.heart}}),o("img",{staticStyle:{"margin-top":"10px"},attrs:{src:t.dab}})])},a=[function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("h1",[t._v("Happy 22"),o("span",{staticClass:"ordinal"},[t._v("nd")]),t._v(" Birthday Karen")])},function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("h2",[t._v("I hope you have an amazing birthday"),o("br"),t._v("as well as a wonderful year!! 😸😸")])},function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("h3",{staticStyle:{width:"60%","margin-left":"auto","margin-right":"auto"}},[t._v(" You bring people joy and entertainment with your amazing personality"),o("br"),t._v(" and overall atmosphere you bring to everything you do. I am excited to see"),o("br"),t._v(" where this year takes you and how you are going to make it better for everyone around you!"),o("br")])}],c="";c="birthday-card/";var h={name:"BirthdayText",data:function(){return{dab:"../".concat(c,"bunni_dab.png"),heart:"../".concat(c,"bunni_heart.png")}}},u=h,p=o(1001),d=(0,p.Z)(u,s,a,!1,null,"1d39a044",null),l=d.exports,_=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("div",{style:t.dvdLogoStyle_1},[o("img",{style:t.dvdLogoImageStyle,attrs:{src:t.picture_1}})]),o("div",{style:t.dvdLogoStyle_2},[o("img",{style:t.dvdLogoImageStyle,attrs:{src:t.picture_2}})])])},g=[],f=(o(2222),"");f="birthday-card/";var v=["../".concat(f,"picture1.gif"),"../".concat(f,"picture2.png"),"../".concat(f,"picture3.png"),"../".concat(f,"picture4.png"),"../".concat(f,"picture5.png"),"../".concat(f,"picture6.gif"),"../".concat(f,"picture7.gif"),"../".concat(f,"picture8.gif"),"../".concat(f,"picture9.gif"),"../".concat(f,"picture10.gif")],y=function(t){return Math.floor(Math.random()*t)},m=function(t,n){return Math.random()*(n-t)+t},w=function(){return"rgb(".concat(y(256),", ").concat(y(256),", ").concat(y(256),")")},b=1,Y=1,x=300,S=200,C=10;window.innerWidth<600||window.innerHeight<640?(x=150,S=100,b=.75,Y=.5,C=5,C=5):(window.innerWidth<1250||window.innerHeight<650)&&(x=250,S=166.666667,b=.75,Y=.75,C=8.33333333);var X=b,k=Y,L=-b,I=-Y,O={name:"DvdLogo",props:["dvdLogoProps"],data:function(){return{dvdLogoStyle_1:{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",width:"".concat(x,"px"),height:"".concat(S,"px"),backgroundColor:w(),transform:"translate(0px, 0px)"},dvdLogoImageStyle:{width:"".concat(x-C,"px"),height:"".concat(S-C,"px")},picture_1:v[y(v.length)],posX_1:0,posY_1:y(window.innerHeight-S-10),dvdLogoStyle_2:{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",width:"".concat(x,"px"),height:"".concat(S,"px"),backgroundColor:"rgb(0, 0, 255)",transform:"translate(0px, 0px)"},picture_2:v[y(v.length)],posX_2:window.innerWidth-x,posY_2:y(window.innerHeight-S)+10}},mounted:function(){var t=this;setInterval((function(){t.movePic1(),t.movePic2()}),10)},methods:{movePic1:function(){this.posX_1+=m(X>0?X-.25:X+.25,X),this.posY_1+=m(k?k-.25:k+.25,k);var t=this.posX_1>=window.innerWidth-x,n=this.posX_1<=0,o=this.posY_1<=0,i=this.posY_1>=window.innerHeight-S,e=n||t,r=o||i;this.posX_1<this.posX_2+x&&this.posX_1+x>this.posX_2&&this.posY_1<this.posY_2+S&&this.posY_1+S>this.posY_2&&(this.posY_1+S-this.posY_2<=2&&this.posY_1+S-this.posY_2>=-2||this.posY_2+S-this.posY_1<=2&&this.posY_2+S-this.posY_1>=-2?k*=-1:X*=-1,this.picture_1=v[y(v.length)],this.dvdLogoStyle_1.backgroundColor=w()),e&&(this.posX_1=n?0:window.innerWidth-x,X*=-1,this.picture_1=v[y(v.length)],this.dvdLogoStyle_1.backgroundColor=w()),r&&(this.posY_1=o?0:window.innerHeight-S,k*=-1,this.picture_1=v[y(v.length)],this.dvdLogoStyle_1.backgroundColor=w()),this.dvdLogoStyle_1.transform="translate(".concat(this.posX_1,"px, ").concat(this.posY_1,"px)")},movePic2:function(){this.posX_2+=m(L>0?L-.25:L+.25,L),this.posY_2+=m(I?I-.25:I+.25,I);var t=this.posX_2>=window.innerWidth-x,n=this.posX_2<=0,o=this.posY_2<=0,i=this.posY_2>=window.innerHeight-S,e=n||t,r=o||i;this.posX_1<this.posX_2+x&&this.posX_1+x>this.posX_2&&this.posY_1<this.posY_2+S&&this.posY_1+S>this.posY_2&&(this.posY_1+S-this.posY_2<=2&&this.posY_1+S-this.posY_2>=-2||this.posY_2+S-this.posY_1<=2&&this.posY_2+S-this.posY_1>=-2?I*=-1:L*=-1,this.picture_2=v[y(v.length)],this.dvdLogoStyle_2.backgroundColor=w()),e&&(this.posX_2=n?0:window.innerWidth-x,L*=-1,this.picture_2=v[y(v.length)],this.dvdLogoStyle_2.backgroundColor=w()),r&&(this.posY_2=o?0:window.innerHeight-S,I*=-1,this.picture_2=v[y(v.length)],this.dvdLogoStyle_2.backgroundColor=w()),this.dvdLogoStyle_2.transform="translate(".concat(this.posX_2,"px, ").concat(this.posY_2,"px)")}}},$=O,H=(0,p.Z)($,_,g,!1,null,"cc44fefe",null),j=H.exports,P=o(7231),T=o.n(P);i.Z.use(T());var E={name:"App",components:{BirthdayText:l,BouncingPictures:j},mounted:function(){var t=this;this.$confetti.start(),setTimeout((function(){t.$confetti.stop()}),3e3)},methods:{restartConfetti:function(){var t=this;this.$confetti.start(),setTimeout((function(){t.$confetti.stop()}),3e3)}}},W=E,B=(0,p.Z)(W,e,r,!1,null,null,null),Z=B.exports;i.Z.config.productionTip=!1,new i.Z({render:function(t){return t(Z)}}).$mount("#app")},6492:function(t,n,o){t.exports=o.p+"img/melody.629f10aa.png"}},n={};function o(i){var e=n[i];if(void 0!==e)return e.exports;var r=n[i]={id:i,loaded:!1,exports:{}};return t[i](r,r.exports,o),r.loaded=!0,r.exports}o.m=t,function(){var t=[];o.O=function(n,i,e,r){if(!i){var s=1/0;for(u=0;u<t.length;u++){i=t[u][0],e=t[u][1],r=t[u][2];for(var a=!0,c=0;c<i.length;c++)(!1&r||s>=r)&&Object.keys(o.O).every((function(t){return o.O[t](i[c])}))?i.splice(c--,1):(a=!1,r<s&&(s=r));if(a){t.splice(u--,1);var h=e();void 0!==h&&(n=h)}}return n}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[i,e,r]}}(),function(){o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,{a:n}),n}}(),function(){o.d=function(t,n){for(var i in n)o.o(n,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){o.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){o.p="/birthday-card/"}(),function(){var t={143:0};o.O.j=function(n){return 0===t[n]};var n=function(n,i){var e,r,s=i[0],a=i[1],c=i[2],h=0;if(s.some((function(n){return 0!==t[n]}))){for(e in a)o.o(a,e)&&(o.m[e]=a[e]);if(c)var u=c(o)}for(n&&n(i);h<s.length;h++)r=s[h],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(u)},i=self["webpackChunkhappy_birthday"]=self["webpackChunkhappy_birthday"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=o.O(void 0,[998],(function(){return o(9835)}));i=o.O(i)})();
//# sourceMappingURL=app-legacy.7e35dd36.js.map