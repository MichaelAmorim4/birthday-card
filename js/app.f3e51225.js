(function(){"use strict";var t={4953:function(t,i,o){var e=o(8935),n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticStyle:{"background-color":"#51e857"},attrs:{id:"app"}},[e("BouncingPictures",{staticStyle:{position:"absolute"}}),e("div",{attrs:{id:"card-container"}},[e("div",{staticClass:"card"},[e("img",{staticClass:"birthday",attrs:{src:o(6492),alt:"birthday"}}),e("div",{staticClass:"text"},[e("BirthdayText")],1)]),e("input",{attrs:{id:"button",type:"button",value:"Restart Confetti"},on:{click:t.restartConfetti}})])],1)},r=[],s=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"hello"},[t._m(0),t._m(1),t._m(2),o("h3",{staticStyle:{width:"60%","margin-left":"auto","margin-right":"auto"}},[t._v(" I look forward to witnessing everything you are going to do and building upon this friendship! Hopefully we can get to know each other more this year and do more things together; both online and in person. I wish you all the best and I hope you have a wonderful day and rest of your year! ")]),o("img",{staticStyle:{"margin-top":"10px"},attrs:{src:"../bunni_dab.png"}}),o("img",{staticStyle:{"margin-top":"10px"},attrs:{src:"../bunni_heart.png"}}),o("img",{staticStyle:{"margin-top":"10px"},attrs:{src:"../bunni_dab.png"}})])},a=[function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("h1",[t._v("Happy 22"),o("span",{staticClass:"ordinal"},[t._v("nd")]),t._v(" Birthday Karen")])},function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("h2",[t._v("I hope you have an amazing birthday"),o("br"),t._v("as well as a wonderful year!! 😸😸")])},function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("h3",{staticStyle:{width:"60%","margin-left":"auto","margin-right":"auto"}},[t._v(" You bring people joy and entertainment with your amazing personality"),o("br"),t._v(" and overall atmosphere you bring to everything you do. I am excited to see"),o("br"),t._v(" where this year takes you and how you are going to make it better for everyone around you!"),o("br")])}],h={name:"BirthdayText"},p=h,u=o(1001),d=(0,u.Z)(p,s,a,!1,null,"cf713ee8",null),c=d.exports,l=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",[o("div",{style:t.dvdLogoStyle_1},[o("img",{style:t.dvdLogoImageStyle,attrs:{src:t.picture_1}})]),o("div",{style:t.dvdLogoStyle_2},[o("img",{style:t.dvdLogoImageStyle,attrs:{src:t.picture_2}})])])},_=[];let g="";g="birthday-card/";const f=[`../${g}picture1.gif`,`../${g}picture2.png`,`../${g}picture3.png`,`../${g}picture4.png`,`../${g}picture5.png`,`../${g}picture6.gif`,`../${g}picture7.gif`,`../${g}picture8.gif`,`../${g}picture9.gif`,`../${g}picture10.gif`],y=t=>Math.floor(Math.random()*t),v=(t,i)=>Math.random()*(i-t)+t,m=()=>`rgb(${y(256)}, ${y(256)}, ${y(256)})`;let w=1,b=1,Y=300,x=200,$=10;window.innerWidth<600||window.innerHeight<640?(Y=150,x=100,w=.75,b=.5,$=5,$=5):(window.innerWidth<1250||window.innerHeight<650)&&(Y=250,x=166.666667,w=.75,b=.75,$=8.33333333);let S=w,C=b,X=-w,k=-b;var L={name:"DvdLogo",props:["dvdLogoProps"],data(){return{dvdLogoStyle_1:{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",width:`${Y}px`,height:`${x}px`,backgroundColor:m(),transform:"translate(0px, 0px)"},dvdLogoImageStyle:{width:Y-$+"px",height:x-$+"px"},picture_1:f[y(f.length)],posX_1:0,posY_1:y(window.innerHeight-x-10),dvdLogoStyle_2:{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",width:`${Y}px`,height:`${x}px`,backgroundColor:"rgb(0, 0, 255)",transform:"translate(0px, 0px)"},picture_2:f[y(f.length)],posX_2:window.innerWidth-Y,posY_2:y(window.innerHeight-x)+10}},mounted(){setInterval((()=>{this.movePic1(),this.movePic2()}),10)},methods:{movePic1(){this.posX_1+=v(S>0?S-.25:S+.25,S),this.posY_1+=v(C?C-.25:C+.25,C);const t=this.posX_1>=window.innerWidth-Y,i=this.posX_1<=0,o=this.posY_1<=0,e=this.posY_1>=window.innerHeight-x,n=i||t,r=o||e;this.posX_1<this.posX_2+Y&&this.posX_1+Y>this.posX_2&&this.posY_1<this.posY_2+x&&this.posY_1+x>this.posY_2&&(this.posY_1+x-this.posY_2<=2&&this.posY_1+x-this.posY_2>=-2||this.posY_2+x-this.posY_1<=2&&this.posY_2+x-this.posY_1>=-2?C*=-1:S*=-1,this.picture_1=f[y(f.length)],this.dvdLogoStyle_1.backgroundColor=m()),n&&(this.posX_1=i?0:window.innerWidth-Y,S*=-1,this.picture_1=f[y(f.length)],this.dvdLogoStyle_1.backgroundColor=m()),r&&(this.posY_1=o?0:window.innerHeight-x,C*=-1,this.picture_1=f[y(f.length)],this.dvdLogoStyle_1.backgroundColor=m()),this.dvdLogoStyle_1.transform=`translate(${this.posX_1}px, ${this.posY_1}px)`},movePic2(){this.posX_2+=v(X>0?X-.25:X+.25,X),this.posY_2+=v(k?k-.25:k+.25,k);const t=this.posX_2>=window.innerWidth-Y,i=this.posX_2<=0,o=this.posY_2<=0,e=this.posY_2>=window.innerHeight-x,n=i||t,r=o||e;this.posX_1<this.posX_2+Y&&this.posX_1+Y>this.posX_2&&this.posY_1<this.posY_2+x&&this.posY_1+x>this.posY_2&&(this.posY_1+x-this.posY_2<=2&&this.posY_1+x-this.posY_2>=-2||this.posY_2+x-this.posY_1<=2&&this.posY_2+x-this.posY_1>=-2?k*=-1:X*=-1,this.picture_2=f[y(f.length)],this.dvdLogoStyle_2.backgroundColor=m()),n&&(this.posX_2=i?0:window.innerWidth-Y,X*=-1,this.picture_2=f[y(f.length)],this.dvdLogoStyle_2.backgroundColor=m()),r&&(this.posY_2=o?0:window.innerHeight-x,k*=-1,this.picture_2=f[y(f.length)],this.dvdLogoStyle_2.backgroundColor=m()),this.dvdLogoStyle_2.transform=`translate(${this.posX_2}px, ${this.posY_2}px)`}}},I=L,O=(0,u.Z)(I,l,_,!1,null,"cc44fefe",null),H=O.exports,j=o(7231),P=o.n(j);e.Z.use(P());var T={name:"App",components:{BirthdayText:c,BouncingPictures:H},mounted(){this.$confetti.start(),setTimeout((()=>{this.$confetti.stop()}),3e3)},methods:{restartConfetti(){this.$confetti.start(),setTimeout((()=>{this.$confetti.stop()}),3e3)}}},E=T,W=(0,u.Z)(E,n,r,!1,null,null,null),B=W.exports;e.Z.config.productionTip=!1,new e.Z({render:t=>t(B)}).$mount("#app")},6492:function(t,i,o){t.exports=o.p+"img/melody.629f10aa.png"}},i={};function o(e){var n=i[e];if(void 0!==n)return n.exports;var r=i[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,function(){var t=[];o.O=function(i,e,n,r){if(!e){var s=1/0;for(u=0;u<t.length;u++){e=t[u][0],n=t[u][1],r=t[u][2];for(var a=!0,h=0;h<e.length;h++)(!1&r||s>=r)&&Object.keys(o.O).every((function(t){return o.O[t](e[h])}))?e.splice(h--,1):(a=!1,r<s&&(s=r));if(a){t.splice(u--,1);var p=n();void 0!==p&&(i=p)}}return i}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[e,n,r]}}(),function(){o.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(i,{a:i}),i}}(),function(){o.d=function(t,i){for(var e in i)o.o(i,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:i[e]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)}}(),function(){o.p="/birthday-card/"}(),function(){var t={143:0};o.O.j=function(i){return 0===t[i]};var i=function(i,e){var n,r,s=e[0],a=e[1],h=e[2],p=0;if(s.some((function(i){return 0!==t[i]}))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);if(h)var u=h(o)}for(i&&i(e);p<s.length;p++)r=s[p],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(u)},e=self["webpackChunkhappy_birthday"]=self["webpackChunkhappy_birthday"]||[];e.forEach(i.bind(null,0)),e.push=i.bind(null,e.push.bind(e))}();var e=o.O(void 0,[998],(function(){return o(4953)}));e=o.O(e)})();
//# sourceMappingURL=app.f3e51225.js.map