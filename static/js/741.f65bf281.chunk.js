(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[741],{148:function(e,n,t){"use strict";t.d(n,{JN:function(){return u},M1:function(){return f},ME:function(){return a},TP:function(){return s},tx:function(){return p}});var r=t(7),o=t.n(r),c="https://api.themoviedb.org/3/",i="dd2eacab57962d131eb2537d52aeafc3";function u(){return fetch("".concat(c,"trending/movie/day?api_key=").concat(i)).then((function(e){if(!e.ok)throw new Error;return e.json()}))}function a(e){return fetch("".concat(c,"search/movie?api_key=").concat(i,"&query=").concat(e,"&include_adult=false")).then((function(e){if(!e.ok)throw new Error;return e.json()}))}function s(e){return fetch("".concat(c,"movie/").concat(e,"?api_key=").concat(i)).then((function(e){if(!e.ok)throw new Error;return e.json()}))}function f(e){return fetch("".concat(c,"movie/").concat(e,"/credits?api_key=").concat(i)).then((function(e){if(!e.ok)throw new Error;return e.json()}))}function p(e){return fetch("".concat(c,"movie/").concat(e,"/reviews?api_key=").concat(i)).then((function(e){if(!e.ok)throw new Error;return e.json()}))}a.propTypes={search:o().string.isRequired},s.propTypes={id:o().number.isRequired},f.propTypes={id:o().number.isRequired},p.propTypes={id:o().number.isRequired}},741:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var r,o,c=t(439),i=t(791),u=t(87),a=t(689),s=t(148),f=t(168),p=t(444),h=p.ZP.div(r||(r=(0,f.Z)(["\n  padding: 20px 0;\n"]))),l=p.ZP.input(o||(o=(0,f.Z)(["\n  min-width: 250px;\n"]))),d=t(184);function m(){var e=(0,i.useState)(null),n=(0,c.Z)(e,2),t=n[0],r=n[1],o=(0,i.useState)(""),f=(0,c.Z)(o,2),p=f[0],m=f[1],y=(0,u.lr)(),v=(0,c.Z)(y,2),k=v[0],b=v[1],w=k.get("query"),_=(0,a.TH)();(0,i.useEffect)((function(){null!==w&&""!==w&&(0,s.ME)(w).then((function(e){var n=e.results;n&&r(n)})).catch((function(e){m(e)}))}),[w]);return(0,d.jsxs)(h,{children:[(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=e.currentTarget;n.elements.searchMovie.value.trim()?b({query:n.elements.searchMovie.value.trim()}):b({}),n.reset()},children:[(0,d.jsx)(l,{type:"text",name:"searchMovie"}),(0,d.jsx)("button",{type:"submit",children:"Search"})]}),t&&0===t.length&&(0,d.jsx)("p",{children:"Nothing found for your request"}),(0,d.jsx)("ul",{children:t&&t.map((function(e){var n=e.id,t=e.title;return(0,d.jsx)("li",{children:(0,d.jsx)(u.rU,{to:"".concat(n),state:{from:_},children:t})},n)}))}),p&&(0,d.jsx)("p",{children:"Oops, something goes wrong"})]})}},888:function(e,n,t){"use strict";var r=t(47);function o(){}function c(){}c.resetWarningCache=o,e.exports=function(){function e(e,n,t,o,c,i){if(i!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:c,resetWarningCache:o};return t.PropTypes=t,t}},7:function(e,n,t){e.exports=t(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=741.f65bf281.chunk.js.map