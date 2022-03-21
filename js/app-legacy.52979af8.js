(function(){"use strict";var t={3359:function(t,n,i){i(6992),i(8674),i(9601),i(7727);var o=i(9567),e=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticStyle:{"background-color":"#51e857"},attrs:{id:"app"}},[o("BouncingPictures",{staticStyle:{position:"absolute"}}),o("div",{attrs:{id:"card-container"}},[o("div",{staticClass:"card"},[o("img",{staticClass:"birthday",attrs:{src:i(6492),alt:"birthday"}}),o("div",{staticClass:"text"},[o("BirthdayText")],1)]),o("input",{attrs:{id:"button",type:"button",value:"Restart Confetti"},on:{click:t.restartConfetti}})])],1)},r=[],s=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"hello"},[t._m(0),t._m(1),t._m(2),i("h3",{staticStyle:{width:"60%","margin-left":"auto","margin-right":"auto"}},[t._v(" I look forward to witnessing everything you are going to do and building upon this friendship! Hopefully we can get to know each other more this year and do more things together; both online and in person. I wish you all the best and I hope you have a wonderful day and rest of your year! ")]),i("img",{staticStyle:{"margin-top":"10px"},attrs:{src:"../bunni_dab.png"}}),i("img",{staticStyle:{"margin-top":"10px"},attrs:{src:"../bunni_heart.png"}}),i("img",{staticStyle:{"margin-top":"10px"},attrs:{src:"../bunni_dab.png"}})])},a=[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("h1",[t._v("Happy 22"),i("span",{staticClass:"ordinal"},[t._v("nd")]),t._v(" Birthday Karen")])},function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("h2",[t._v("I hope you have an amazing birthday"),i("br"),t._v("as well as a wonderful year!! 😸😸")])},function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("h3",{staticStyle:{width:"60%","margin-left":"auto","margin-right":"auto"}},[t._v(" You bring people joy and entertainment with your amazing personality"),i("br"),t._v(" and overall atmosphere you bring to everything you do. I am excited to see"),i("br"),t._v(" where this year takes you and how you are going to make it better for everyone around you!"),i("br")])}],c={name:"BirthdayText"},h=c,p=i(1001),u=(0,p.Z)(h,s,a,!1,null,"cf713ee8",null),d=u.exports,l=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",[i("div",{style:t.dvdLogoStyle_1},[i("img",{style:t.dvdLogoImageStyle,attrs:{src:t.picture_1}})]),i("div",{style:t.dvdLogoStyle_2},[i("img",{style:t.dvdLogoImageStyle,attrs:{src:t.picture_2}})])])},_=[],g=(i(2222),["../picture1.gif","../picture2.png","../picture3.png","../picture4.png","../picture5.png","../picture6.gif","../picture7.gif","../picture8.gif","../picture9.gif","../picture10.gif"]),f=function(t){return Math.floor(Math.random()*t)},v=function(t,n){return Math.random()*(n-t)+t},y=function(){return"rgb(".concat(f(256),", ").concat(f(256),", ").concat(f(256),")")},m=1,w=1,b=300,Y=200,x=10;window.innerWidth<600||window.innerHeight<640?(b=150,Y=100,m=.75,w=.5,x=5,x=5):(window.innerWidth<1250||window.innerHeight<650)&&(b=250,Y=166.666667,m=.75,w=.75,x=8.33333333);var S=m,C=w,X=-m,k=-w,L={name:"DvdLogo",props:["dvdLogoProps"],data:function(){return{dvdLogoStyle_1:{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",width:"".concat(b,"px"),height:"".concat(Y,"px"),backgroundColor:y(),transform:"translate(0px, 0px)"},dvdLogoImageStyle:{width:"".concat(b-x,"px"),height:"".concat(Y-x,"px")},picture_1:g[f(g.length)],posX_1:0,posY_1:f(window.innerHeight-Y-10),dvdLogoStyle_2:{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",width:"".concat(b,"px"),height:"".concat(Y,"px"),backgroundColor:"rgb(0, 0, 255)",transform:"translate(0px, 0px)"},picture_2:g[f(g.length)],posX_2:window.innerWidth-b,posY_2:f(window.innerHeight-Y)+10}},mounted:function(){var t=this;setInterval((function(){t.movePic1(),t.movePic2()}),10)},methods:{movePic1:function(){this.posX_1+=v(S>0?S-.25:S+.25,S),this.posY_1+=v(C?C-.25:C+.25,C);var t=this.posX_1>=window.innerWidth-b,n=this.posX_1<=0,i=this.posY_1<=0,o=this.posY_1>=window.innerHeight-Y,e=n||t,r=i||o;this.posX_1<this.posX_2+b&&this.posX_1+b>this.posX_2&&this.posY_1<this.posY_2+Y&&this.posY_1+Y>this.posY_2&&(this.posY_1+Y-this.posY_2<=2&&this.posY_1+Y-this.posY_2>=-2||this.posY_2+Y-this.posY_1<=2&&this.posY_2+Y-this.posY_1>=-2?C*=-1:S*=-1,this.picture_1=g[f(g.length)],this.dvdLogoStyle_1.backgroundColor=y()),e&&(this.posX_1=n?0:window.innerWidth-b,S*=-1,this.picture_1=g[f(g.length)],this.dvdLogoStyle_1.backgroundColor=y()),r&&(this.posY_1=i?0:window.innerHeight-Y,C*=-1,this.picture_1=g[f(g.length)],this.dvdLogoStyle_1.backgroundColor=y()),this.dvdLogoStyle_1.transform="translate(".concat(this.posX_1,"px, ").concat(this.posY_1,"px)")},movePic2:function(){this.posX_2+=v(X>0?X-.25:X+.25,X),this.posY_2+=v(k?k-.25:k+.25,k);var t=this.posX_2>=window.innerWidth-b,n=this.posX_2<=0,i=this.posY_2<=0,o=this.posY_2>=window.innerHeight-Y,e=n||t,r=i||o;this.posX_1<this.posX_2+b&&this.posX_1+b>this.posX_2&&this.posY_1<this.posY_2+Y&&this.posY_1+Y>this.posY_2&&(this.posY_1+Y-this.posY_2<=2&&this.posY_1+Y-this.posY_2>=-2||this.posY_2+Y-this.posY_1<=2&&this.posY_2+Y-this.posY_1>=-2?k*=-1:X*=-1,this.picture_2=g[f(g.length)],this.dvdLogoStyle_2.backgroundColor=y()),e&&(this.posX_2=n?0:window.innerWidth-b,X*=-1,this.picture_2=g[f(g.length)],this.dvdLogoStyle_2.backgroundColor=y()),r&&(this.posY_2=i?0:window.innerHeight-Y,k*=-1,this.picture_2=g[f(g.length)],this.dvdLogoStyle_2.backgroundColor=y()),this.dvdLogoStyle_2.transform="translate(".concat(this.posX_2,"px, ").concat(this.posY_2,"px)")}}},I=L,O=(0,p.Z)(I,l,_,!1,null,"547e8457",null),$=O.exports,H=i(7231),j=i.n(H);o.Z.use(j());var P={name:"App",components:{BirthdayText:d,BouncingPictures:$},mounted:function(){var t=this;this.$confetti.start(),setTimeout((function(){t.$confetti.stop()}),3e3)},methods:{restartConfetti:function(){var t=this;this.$confetti.start(),setTimeout((function(){t.$confetti.stop()}),3e3)}}},T=P,E=(0,p.Z)(T,e,r,!1,null,null,null),W=E.exports;o.Z.config.productionTip=!1,new o.Z({render:function(t){return t(W)}}).$mount("#app")},6492:function(t,n,i){t.exports=i.p+"img/melody.629f10aa.png"}},n={};function i(o){var e=n[o];if(void 0!==e)return e.exports;var r=n[o]={id:o,loaded:!1,exports:{}};return t[o](r,r.exports,i),r.loaded=!0,r.exports}i.m=t,function(){var t=[];i.O=function(n,o,e,r){if(!o){var s=1/0;for(p=0;p<t.length;p++){o=t[p][0],e=t[p][1],r=t[p][2];for(var a=!0,c=0;c<o.length;c++)(!1&r||s>=r)&&Object.keys(i.O).every((function(t){return i.O[t](o[c])}))?o.splice(c--,1):(a=!1,r<s&&(s=r));if(a){t.splice(p--,1);var h=e();void 0!==h&&(n=h)}}return n}r=r||0;for(var p=t.length;p>0&&t[p-1][2]>r;p--)t[p]=t[p-1];t[p]=[o,e,r]}}(),function(){i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,{a:n}),n}}(),function(){i.d=function(t,n){for(var o in n)i.o(n,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){i.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){i.p="/birthday-card/"}(),function(){var t={143:0};i.O.j=function(n){return 0===t[n]};var n=function(n,o){var e,r,s=o[0],a=o[1],c=o[2],h=0;if(s.some((function(n){return 0!==t[n]}))){for(e in a)i.o(a,e)&&(i.m[e]=a[e]);if(c)var p=c(i)}for(n&&n(o);h<s.length;h++)r=s[h],i.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return i.O(p)},o=self["webpackChunkhappy_birthday"]=self["webpackChunkhappy_birthday"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=i.O(void 0,[998],(function(){return i(3359)}));o=i.O(o)})();
//# sourceMappingURL=app-legacy.52979af8.js.map