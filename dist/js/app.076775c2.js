(function(){"use strict";var t={6318:function(t,n,o){var i=o(6369),e=function(){var t=this,n=t._self._c;return n("div",{staticClass:"id"},[n("LuckyWheel",{ref:"myLucky",staticClass:"zhuan",attrs:{width:"600px",height:"600px",prizes:t.prizes,blocks:t.blocks,buttons:t.buttons},on:{start:t.startCallback,end:t.endCallback}}),n("imgdiv",{directives:[{name:"show",rawName:"v-show",value:t.imgbox,expression:"imgbox"}],staticClass:"imgbox",attrs:{Boximg:t.img},on:{imgdel:t.imgBtn}})],1)},s=[],r=function(){var t=this,n=t._self._c;return n("div",{staticClass:"imgapp"},[n("div",{staticClass:"del",on:{click:t.del}},[t._v("X")]),n("h1",[t._v("遇事不决，可问春风")]),n("img",{attrs:{src:t.Boximg,width:"700px",height:"600px"}})])},g=[],u={name:"ImgDiv",props:["Boximg"],methods:{del(){this.$emit("imgdel",!1)}}},a=u,c=o(1001),p=(0,c.Z)(a,r,g,!1,null,null,null),m=p.exports,f={components:{imgdiv:m},data(){return{imgbox:!1,img:"",blocks:[{padding:"13px",background:"#617df2"}],prizes:[{fonts:[{text:"陈平安",top:"10%",img:"https://wx4.sinaimg.cn/mw690/0078w6L9gy1hgsupuv0r0j30mo14g41x.jpg"}],background:"#e9e8fe"},{fonts:[{text:"宁姚",top:"10%",img:"https://wx2.sinaimg.cn/mw690/0078w6L9gy1hgsupulu62j31401z6gv7.jpg"}],background:"#b8c5f2"},{fonts:[{text:"绣虎",top:"10%",img:"https://wx4.sinaimg.cn/mw690/0078w6L9gy1hgsupwjkbbj30mo14gjvn.jpg"}],background:"#e9e8fe"},{fonts:[{text:"阮秀",top:"10%",img:"https://wx2.sinaimg.cn/mw690/0078w6L9gy1hgsuptgtx3j30mo14gn33.jpg"}],background:"#b8c5f2"},{fonts:[{text:"李宝瓶",top:"10%",img:"https://wx3.sinaimg.cn/mw690/0078w6L9gy1hgsupt39h1j30mo14gdj0.jpg"}],background:"#e9e8fe"},{fonts:[{text:"马兰花",top:"10%",img:"https://wx2.sinaimg.cn/mw690/0078w6L9gy1hgsupwx26bj30mo14ggoa.jpg"}],background:"#b8c5f2"},{fonts:[{text:"苏心斋",top:"10%",img:"https://wx2.sinaimg.cn/mw690/0078w6L9gy1hgsupvxk06j30mo14g0wk.jpg"}],background:"#e9e8fe"},{fonts:[{text:"裴钱",top:"10%",img:"https://wx1.sinaimg.cn/mw690/0078w6L9gy1hgsupva481j30mo14gaf5.jpg"}],background:"#b8c5f2"},{fonts:[{text:"陈念秀",top:"10%",img:"https://wx2.sinaimg.cn/mw690/0078w6L9gy1hgsupwx26bj30mo14ggoa.jpg"}],background:"#e9e8fe"},{fonts:[{text:"陈暖树",top:"10%",img:"https://wx2.sinaimg.cn/mw690/0078w6L9gy1hgsupw7pczj30mo14gtcu.jpg"}],background:"#b8c5f2"}],buttons:[{radius:"50px",background:"#617df2"},{radius:"45px",background:"#afc8ff"},{radius:"40px",background:"#869cfa",pointer:!0,fonts:[{text:"开始\n抽奖",top:"-20px"}]}]}},methods:{startCallback(){this.$refs.myLucky.play(),setTimeout((()=>{this.randomInt=Math.floor(Math.random()*(this.prizes.length-1-0+1))+0;const t=this.randomInt;this.$refs.myLucky.stop(t)}),3e3)},endCallback(t){this.img=t.fonts[0].img,setTimeout((()=>{this.imgbox=!0}),1e3)},imgBtn(t){this.imgbox=t}}},h=f,l=(0,c.Z)(h,e,s,!1,null,null,null),d=l.exports,b=o(1925);i.ZP.use(b.ZP),i.ZP.config.productionTip=!1,new i.ZP({render:t=>t(d)}).$mount("#app")}},n={};function o(i){var e=n[i];if(void 0!==e)return e.exports;var s=n[i]={exports:{}};return t[i].call(s.exports,s,s.exports,o),s.exports}o.m=t,function(){var t=[];o.O=function(n,i,e,s){if(!i){var r=1/0;for(c=0;c<t.length;c++){i=t[c][0],e=t[c][1],s=t[c][2];for(var g=!0,u=0;u<i.length;u++)(!1&s||r>=s)&&Object.keys(o.O).every((function(t){return o.O[t](i[u])}))?i.splice(u--,1):(g=!1,s<r&&(r=s));if(g){t.splice(c--,1);var a=e();void 0!==a&&(n=a)}}return n}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[i,e,s]}}(),function(){o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,{a:n}),n}}(),function(){o.d=function(t,n){for(var i in n)o.o(n,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};o.O.j=function(n){return 0===t[n]};var n=function(n,i){var e,s,r=i[0],g=i[1],u=i[2],a=0;if(r.some((function(n){return 0!==t[n]}))){for(e in g)o.o(g,e)&&(o.m[e]=g[e]);if(u)var c=u(o)}for(n&&n(i);a<r.length;a++)s=r[a],o.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return o.O(c)},i=self["webpackChunkvue2_choujiang"]=self["webpackChunkvue2_choujiang"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=o.O(void 0,[998],(function(){return o(6318)}));i=o.O(i)})();
//# sourceMappingURL=app.076775c2.js.map