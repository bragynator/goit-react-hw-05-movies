"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[597],{597:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(885),i=n(791),c=n(501),o=n(871),s=n(565),a="MovieCard_title__mQEBM",u="MovieCard_wrapper__UNKq4",h="MovieCard_infoWrapper__L1SLc",d=n(184);function l(e){var t=e.movie,n=t.title,r=t.poster_path,i=t.overview,c=t.tagline,o=t.vote_average,s=t.release_date,l=Math.round(10*o),f=new Date(s).getFullYear();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h2",{className:a,children:n}),(0,d.jsxs)("div",{className:u,children:[(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(r),alt:c&&n}),(0,d.jsxs)("div",{className:h,children:[(0,d.jsxs)("p",{children:["Year: ",f]}),(0,d.jsxs)("p",{children:["User score: ",l,"%"]}),(0,d.jsx)("p",{children:"OVERVIEW:"}),(0,d.jsx)("p",{children:i})]})]})]})}var f=n(424),v="MovieDetails_backLink__dzd-p",p="MovieDetails_addInfoList__rUVXv";function m(){var e,t,n=(0,o.UO)().movieId,a=(0,i.useState)({}),u=(0,r.Z)(a,2),h=u[0],m=u[1],_=null!==(e=null===(t=(0,o.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,i.useEffect)((function(){(0,s.Pg)(n).then(m)}),[n]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(c.rU,{to:_,className:v,children:"Back"}),0!==Object.keys(h).length&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l,{movie:h}),(0,d.jsx)("h4",{children:"Additional Information"}),(0,d.jsxs)("ul",{className:p,children:[(0,d.jsx)("li",{children:(0,d.jsx)(c.rU,{to:"cast",state:{from:_},children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(c.rU,{to:"reviews",state:{from:_},children:"Reviews"})})]})]}),(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)(f.$,{}),children:(0,d.jsx)(o.j3,{})})]})}},565:function(e,t,n){n.d(t,{Df:function(){return i},M1:function(){return s},Pg:function(){return o},ZF:function(){return c},tx:function(){return a}});var r="fadee9dfff8cb6b1bff36771479589d6",i=function(){return fetch("\nhttps://api.themoviedb.org/3/trending/movie/day?api_key=".concat(r)).then((function(e){return e.json()}))},c=function(e){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(r,"&query=").concat(e)).then((function(e){return e.json()}))},o=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(r)).then((function(e){return e.json()}))},s=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(r)).then((function(e){return e.json()}))},a=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(r)).then((function(e){return e.json()}))}}}]);
//# sourceMappingURL=597.5647d55c.chunk.js.map