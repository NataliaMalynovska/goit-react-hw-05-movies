"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[975],{9413:function(e,n,t){t.d(n,{$h:function(){return u},Gi:function(){return a},YS:function(){return c},Zm:function(){return r}});var r="https://image.tmdb.org/t/p/w500/",a="https://feb.kuleuven.be/drc/LEER/visiting-scholars-1/image-not-available.jpg/image",c="https://europix.cc/no-poster.png",u="9a43726339c4236fb0854a5ef7e228c8"},5975:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var r,a,c,u,o=t(5861),s=t(885),i=t(7757),p=t.n(i),l=t(2791),f=t(7689),v=t(4390),h=t(9457),d=t(168),g=t(6444),m=g.ZP.ul(r||(r=(0,d.Z)(["\n  margin: 0px auto;\n  padding: 0px;\n"]))),x=g.ZP.iframe(a||(a=(0,d.Z)(["\n  border: none;\n"]))),b=g.ZP.h4(c||(c=(0,d.Z)(["\n  padding-top: 16px;\n  padding-bottom: 16px;\n\n"]))),w=g.ZP.p(u||(u=(0,d.Z)(["\npadding-bottom: 16px;\n"]))),y=t(184),k=function(){var e=(0,l.useState)([]),n=(0,s.Z)(e,2),t=n[0],r=n[1],a=(0,f.UO)().movieId;return(0,l.useEffect)((function(){function e(){return(e=(0,o.Z)(p().mark((function e(){var n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.oO)(a);case 3:n=e.sent,r(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]),console.log(t),(0,y.jsx)(h.x,{mt:"16px",mb:"26px",children:(0,y.jsx)(m,{children:t.length>0?t.slice(0,3).map((function(e){var n=e.id,t=e.published_at,r=e.name,a=e.key;return(0,y.jsxs)("li",{children:[(0,y.jsxs)(b,{children:[" ",r]}),(0,y.jsxs)(w,{children:["published at: ",t.slice(0,10)]}),(0,y.jsx)(x,{width:"560",height:"315",src:"https://www.youtube.com/embed/"+a,title:"YouTube video player",allowfullscreen:!0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",sandbox:!0})]},n)})):(0,y.jsx)("p",{children:"There are no videos at this movie"})})})}},4390:function(e,n,t){t.d(n,{Hx:function(){return v},Mc:function(){return l},bI:function(){return p},oO:function(){return h},uV:function(){return f},wr:function(){return i}});var r=t(5861),a=t(7757),c=t.n(a),u=t(4569),o=t.n(u),s=t(9413);o().defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("/trending/movie/day?api_key=".concat(s.$h));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("search/movie",{params:{api_key:s.$h,query:n,language:"en - US",page:1,include_adult:!1}});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("movie/".concat(n,"?api_key=").concat(s.$h,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("movie/".concat(n,"/credits?api_key=").concat(s.$h,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("movie/".concat(n,"/reviews?api_key=").concat(s.$h,"&language=en-US&page=1"));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("movie/".concat(n,"/videos?api_key=").concat(s.$h,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=975.79d13364.chunk.js.map