"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{148:function(e,t,n){n.d(t,{JN:function(){return o},M1:function(){return a},ME:function(){return i},TP:function(){return s},tx:function(){return u}});var r="https://api.themoviedb.org/3/",c="dd2eacab57962d131eb2537d52aeafc3";function o(){return fetch("".concat(r,"trending/movie/day?api_key=").concat(c)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}function i(e){return fetch("".concat(r,"search/movie?api_key=").concat(c,"&query=").concat(e,"&include_adult=false")).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}function s(e){return fetch("".concat(r,"movie/").concat(e,"?api_key=").concat(c)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}function a(e){return fetch("".concat(r,"movie/").concat(e,"/credits?api_key=").concat(c)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}function u(e){return fetch("".concat(r,"movie/").concat(e,"/reviews?api_key=").concat(c)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}},884:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(439),c=n(791),o=n(689),i=n(87),s=n(148),a=n(184);function u(){var e,t,n=(0,o.UO)().id,u=(0,o.TH)(),h=(0,c.useRef)(null!==(e=null===(t=u.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies"),l=(0,c.useState)(""),d=(0,r.Z)(l,2),f=d[0],j=d[1],v=(0,c.useState)(""),p=(0,r.Z)(v,2),w=p[0],m=p[1],x=(0,c.useState)(""),k=(0,r.Z)(x,2),_=k[0],g=k[1],S=(0,c.useState)(null),b=(0,r.Z)(S,2),y=b[0],E=b[1],Z=(0,c.useState)([]),U=(0,r.Z)(Z,2),C=U[0],M=U[1],T=(0,c.useState)(null),O=(0,r.Z)(T,2),P=O[0],R=O[1];return console.log(n),(0,c.useEffect)((function(){(0,s.TP)(n).then((function(e){e&&(j(e.title),m(e.poster_path),g(e.overview),E(e.vote_average),M(e.genres),R(e.release_date))}))}),[n]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.rU,{to:h.current,children:"Back"}),(0,a.jsxs)("h2",{children:[f," (",null===P||void 0===P?void 0:P.slice(0,4),")"]}),(0,a.jsx)("img",{src:w&&"https://image.tmdb.org/t/p/w500/".concat(w),width:"240",alt:f}),(0,a.jsxs)("p",{children:["User Score: ",Math.round(10*y),"%"]}),(0,a.jsx)("h3",{children:"Overview"}),(0,a.jsx)("p",{children:_}),(0,a.jsx)("h3",{children:"Genres"}),(0,a.jsx)("p",{children:C.map((function(e){return e.name})).join(" ")}),(0,a.jsx)("p",{children:"Additional information"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(i.rU,{to:"cast",children:"Cast"})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.rU,{to:"reviews",children:"Reviews"})})]}),(0,a.jsx)(c.Suspense,{fallback:(0,a.jsx)("div",{children:"Loading..."}),children:(0,a.jsx)(o.j3,{})})]})}}}]);
//# sourceMappingURL=884.87807fec.chunk.js.map