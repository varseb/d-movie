(this["webpackJsonpd-movie"]=this["webpackJsonpd-movie"]||[]).push([[0],{65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"getConfiguration",(function(){return _}));var c={};n.r(c),n.d(c,"getGenres",(function(){return T}));var i={};n.r(i),n.d(i,"discoverMovies",(function(){return M})),n.d(i,"getMovie",(function(){return R})),n.d(i,"getCredits",(function(){return I}));var a={};n.r(a),n.d(a,"searchMovies",(function(){return G}));var o={};n.r(o),n.d(o,"getConfiguration",(function(){return F})),n.d(o,"default",(function(){return D}));var s={};n.r(s),n.d(s,"getGenres",(function(){return Q})),n.d(s,"default",(function(){return H}));var u={};n.r(u),n.d(u,"openStack",(function(){return K})),n.d(u,"closeStack",(function(){return Y})),n.d(u,"default",(function(){return W}));var d={};n.r(d),n.d(d,"SEARCH_MOVIES_SUCCESS",(function(){return $})),n.d(d,"updateFilter",(function(){return te})),n.d(d,"updateQuery",(function(){return ne})),n.d(d,"searchMovies",(function(){return re})),n.d(d,"default",(function(){return ce}));var l={};n.r(l),n.d(l,"discoverMovies",(function(){return ue})),n.d(l,"getMovie",(function(){return de})),n.d(l,"getCredits",(function(){return le})),n.d(l,"default",(function(){return ve}));var v={};n.r(v),n.d(v,"getGenres",(function(){return pe}));var f={};n.r(f),n.d(f,"getMovies",(function(){return Ee})),n.d(f,"getCast",(function(){return ye})),n.d(f,"getDirector",(function(){return Se})),n.d(f,"filterMovies",(function(){return ke})),n.d(f,"getResults",(function(){return xe}));var m=n(1),j=n(0),O=n.n(j),h=n(9),b=n.n(h),g=n(16),p=n(8),E=n(32),y=(n(46),n(2)),S=n(33),k=n.n(S),x=function(e){return k()(Object(y.a)(Object(y.a)({},e),{},{url:"https://api.themoviedb.org/3"+e.url,params:Object(y.a)(Object(y.a)({},e.params||{}),{},{api_key:"0d350753f143701136974b765ca31ac5"})}))},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){return Oe.dispatch({type:e,payload:Object(y.a)(Object(y.a)({},t),{},{data:n.data})})}},N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){var r=(n.response||{data:{}}).data;return Oe.dispatch({type:e,payload:Object(y.a)(Object(y.a)({},t),{},{error:r.error})})}},_=function(){return x({method:"GET",url:"/configuration"})},T=function(){return x({method:"GET",url:"/genre/movie/list"})},M=function(){return x({method:"GET",url:"/discover/movie"})},R=function(e){var t=e.id;return x({method:"GET",url:"/movie/".concat(t)})},I=function(e){var t=e.id;return x({method:"GET",url:"/movie/".concat(t,"/credits")})},G=function(e){var t=e.query;return x({method:"GET",url:"/search/movie",params:{query:t}})},U={config:r,genre:c,movie:i,search:a},A="config/GET_CONFIGURATION_SUCCESS",w={images:{}},F=function(){return function(e){return e({type:"config/GET_CONFIGURATION_REQUEST",meta:U.config.getConfiguration().then(C(A)).catch(N("config/GET_CONFIGURATION_FAILURE"))})}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case A:var c=r.data.images;return{images:c};default:return e}},V=n(7),q="genre/GET_GENRES_SUCCESS",L={genres:{}},Q=function(){return function(e){return e({type:"genre/GET_GENRES_REQUEST",meta:U.genre.getGenres().then(C(q)).catch(N("genre/GET_GENRES_FAILURE"))})}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case q:var c=r.data.genres;return{genres:c.reduce((function(e,t){return Object(y.a)(Object(y.a)({},e),{},Object(V.a)({},t.id,t))}),{})};default:return e}},P=n(17),J="layout/OPEN_STACK",z="layout/CLOSE_STACK",B={stack:[]},K=function(e){return function(t){return function(n){return n({type:J,payload:{namespace:e,props:t}})}}},Y=function(e){return function(){return function(t){return t({type:z,payload:{namespace:e}})}}},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case J:var c=r.namespace,i=r.props;return Object(y.a)(Object(y.a)({},e),{},{stack:[].concat(Object(P.a)(e.stack),[{namespace:c,props:i||{}}])});case z:return Object(y.a)(Object(y.a)({},e),{},{stack:e.stack.filter((function(e){return e.namespace!==r.namespace}))});default:return e}},X="search/UPDATE_QUERY",Z="search/UPDATE_FILTER",$="search/SEARCH_MOVIES_SUCCESS",ee={query:"",filter:{rating:null},results:{}},te=function(e){return function(t){return t({type:Z,payload:e})}},ne=function(e){return function(t){t({type:X,payload:e}),e.query&&t(re(e))}},re=function(e){return function(t){return t({type:"search/SEARCH_MOVIES_REQUEST",meta:U.search.searchMovies(e).then(C($,e)).catch(N("search/SEARCH_MOVIES_FAILURE"))})}},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case X:return Object(y.a)(Object(y.a)({},e),{},{query:r.query});case Z:return Object(y.a)(Object(y.a)({},e),{},{filter:Object(y.a)(Object(y.a)({},e.filter),r)});case $:var c=r.query,i=r.data.results;return Object(y.a)(Object(y.a)({},e),{},{results:Object(y.a)(Object(y.a)({},e.results),{},Object(V.a)({},c,i.map((function(e){return e.id}))))});default:return e}},ie="movie/DISCOVER_MOVIES_SUCCESS",ae="movie/GET_MOVIE_SUCCESS",oe="movie/GET_CREDITS_SUCCESS",se={list:[],movies:{},credits:{}},ue=function(){return function(e){return e({type:"movie/DISCOVER_MOVIES_REQUEST",meta:U.movie.discoverMovies().then(C(ie)).catch(N("movie/DISCOVER_MOVIES_FAILURE"))})}},de=function(e){return function(t){return t({type:"movie/GET_MOVIE_REQUEST",meta:U.movie.getMovie(e).then(C(ae,e)).catch(N("movie/GET_MOVIE_FAILURE"))})}},le=function(e){return function(t){return t({type:"movie/GET_CREDITS_REQUEST",meta:U.movie.getCredits(e).then(C(oe,e)).catch(N("movie/GET_CREDITS_FAILURE"))})}},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case ie:var c=r.data.results;return Object(y.a)(Object(y.a)({},e),{},{list:c.map((function(e){return e.id})),movies:c.reduce((function(e,t){return Object(y.a)(Object(y.a)({},e),{},Object(V.a)({},t.id,t))}),Object(y.a)({},e.movies))});case $:var i=r.data.results;return Object(y.a)(Object(y.a)({},e),{},{movies:i.reduce((function(e,t){return Object(y.a)(Object(y.a)({},e),{},Object(V.a)({},t.id,t))}),Object(y.a)({},e.movies))});case ae:var a=r.id,o=r.data;return Object(y.a)(Object(y.a)({},e),{},{movies:Object(y.a)(Object(y.a)({},e.movies),{},Object(V.a)({},a,Object(y.a)(Object(y.a)({},e.movies[a]),o)))});case oe:var s=r.id,u=r.data;return Object(y.a)(Object(y.a)({},e),{},{credits:Object(y.a)(Object(y.a)({},e.credits),{},Object(V.a)({},s,u))});default:return e}},fe=Object(p.c)({config:D,genre:H,layout:W,movie:ve,search:ce}),me=[E.a];var je=Object(p.e)(fe,function(){try{return JSON.parse(window.localStorage.getItem("state"))||{}}catch(e){return{}}}(),p.d.apply(void 0,[p.a.apply(void 0,me)].concat([])));je.subscribe((function(){var e=je.getState();!function(e){try{window.localStorage.setItem("state",JSON.stringify(e))}catch(t){}}({config:e.config,genres:e.genres})}));var Oe=je,he=n(6),be=n.n(he),ge=n(10),pe=Object(ge.a)((function(e){return e.genre.genres}),(function(e){return e.movie.movies}),(function(e){return e.id}),(function(e,t,n){return t[n].genre_ids.map((function(t){return e[t]}))})),Ee=Object(ge.a)((function(e){return e.movie}),(function(e){return(e.list||[]).map((function(t){return e.movies[t]}))})),ye=Object(ge.a)((function(e){return e.movie.credits}),(function(e){return e.id}),(function(e,t){return e[t]?e[t].cast.slice(0,3):[]})),Se=Object(ge.a)((function(e){return e.movie.credits}),(function(e){return e.id}),(function(e,t){return e[t]?e[t].crew.find((function(e){return"Director"===e.job})):null})),ke=Object(ge.a)((function(e){return e.movies}),(function(e){return e.rating}),(function(e,t){return e.filter((function(e){var n=e.vote_average;return n&&n>=t&&n<t+2}))})),xe=Object(ge.a)((function(e){return e.movie}),(function(e){return e.search}),(function(e,t){var n,r=t.query,c=t.filter.rating,i=t.results;return n=r?(i[r]||[]).map((function(t){return e.movies[t]})):Ee({movie:e}),null!==c?ke({movies:n,rating:c}):n})),Ce={genre:v,movie:f},Ne={config:o,genre:s,layout:u,movie:l,search:d},_e=function(e,t,n){return Object(g.b)(e,t&&function(e){return Object(p.b)(t,e)})(n)},Te=_e(null,{openSearch:Ne.layout.openStack("search")},(function(e){var t=e.openSearch;return Object(m.jsxs)("div",{className:"ui-header",children:[Object(m.jsx)("div",{className:"ui-header-title",children:Object(m.jsx)("h1",{children:"MUST WATCH"})}),Object(m.jsx)("div",{className:"ui-header-search",onClick:function(){return t()},children:Object(m.jsx)("i",{className:"icon-search"})})]})})),Me=n(69),Re=n(68),Ie=function(e){var t=e.className,n=e.children,r=Object(j.useRef)(null),c=O.a.Children.toArray(n);return Object(m.jsx)(Me.a,{component:null,children:c.map((function(e,n){return Object(m.jsx)(Re.a,{nodeRef:r,timeout:400,children:Object(m.jsx)("div",{ref:r,className:be()("layer-wrap",t,{active:n===c.length-1}),children:e})},e.key)}))})},Ge=n(34),Ue=n.n(Ge),Ae=function(){Object(j.useEffect)((function(){return document.body.style.overflow="hidden",function(){return document.body.removeAttribute("style")}}))},we=function(e){var t=e.className,n=e.closeStack,r=e.children;return Ae(),Object(m.jsxs)("div",{className:be()("ui-stack",t),children:[Object(m.jsx)("div",{className:"ui-stack-close",onClick:n,children:Object(m.jsx)("i",{className:"icon-close"})}),r]})},Fe=n(35),De=_e((function(e,t){var n=e.config,r=e.movie,c=t.id;return{movie:r.movies[c],config:n.images}}),null,(function(e){var t=e.size,n=void 0===t?"w500":t,r=e.backdrop,c=void 0!==r&&r,i=e.onClick,a=void 0===i?null:i,o=e.movie,s=o.backdrop_path,u=o.poster_path,d=e.config,l=Object(j.useState)(!1),v=Object(Fe.a)(l,2),f=v[0],O=v[1],h=[d.base_url,n,c&&s||u].join("");return Object(m.jsx)("div",{onClick:a,className:be()("ui-poster",{backdrop:c,"has-click":a}),children:Object(m.jsx)("img",{alt:"",className:be()({loaded:f}),src:h,onLoad:function(){O(!0)}})})})),Ve=Object(P.a)(Array(5).keys()),qe=function(e){var t=e.voteAverage,n=e.onChange;return Object(m.jsx)("div",{className:"ui-rating",children:Ve.map((function(e){return Object(m.jsx)("i",{onClick:function(){n&&n(e)},className:be()("icon-star-outline",{"icon-star-rate":null!==t&&t>=2*e})},e)}))})},Le={movie:_e((function(e,t){var n=e.movie,r=e.genre,c=t.id;return{movie:n.movies[c],genres:Ce.genre.getGenres({genre:r,movie:n,id:c}),cast:Ce.movie.getCast({movie:n,id:c}),director:Ce.movie.getDirector({movie:n,id:c})}}),{getMovie:Ne.movie.getMovie,getCredits:Ne.movie.getCredits,closeStack:Ne.layout.closeStack("movie")},(function(e){var t=e.id,n=e.movie,r=e.genres,c=e.cast,i=e.director,a=e.getMovie,o=e.getCredits,s=e.closeStack;return Object(j.useEffect)((function(){a({id:t}),o({id:t})}),[t,a,o]),Object(m.jsxs)(we,{className:"movie-stack",closeStack:s,children:[Object(m.jsx)("div",{className:"movie-stack-backdrop",children:Object(m.jsx)(De,{id:t,size:"w1280",backdrop:!0})}),Object(m.jsxs)("div",{className:"movie-stack-content",children:[Object(m.jsx)("h1",{className:"movie-stack-title",children:n.title}),n.vote_average>0&&Object(m.jsx)("div",{className:"movie-stack-rating",children:Object(m.jsx)(qe,{voteAverage:n.vote_average})}),(n.release_date||n.runtime)&&Object(m.jsxs)("div",{className:"movie-stack-date",children:[n.release_date&&Object(m.jsx)("span",{children:Ue()(n.release_date).format("Y")})," ","-"," ",n.runtime>0&&Object(m.jsxs)("span",{className:"fade-in",children:[Math.floor(n.runtime/60),"h ",Math.floor(n.runtime%60%60),"m"]})]}),Object(m.jsx)("p",{className:"movie-stack-overview",children:n.overview}),r.length>0&&Object(m.jsx)("div",{className:"movie-stack-genres",children:Object(m.jsx)("ul",{children:r.map((function(e){var t=e.id,n=e.name;return Object(m.jsx)("li",{children:n},t)}))})}),c.length>0&&Object(m.jsxs)("div",{className:"movie-stack-credits fade-in",children:[Object(m.jsx)("div",{className:"movie-stack-credits-title",children:"Cast"}),Object(m.jsx)("div",{className:"movie-stack-credits-value",children:c.map((function(e){return e.name})).reduce((function(e,t){return[e,", ",t]}))})]}),i&&Object(m.jsxs)("div",{className:"movie-stack-credits fade-in",children:[Object(m.jsx)("div",{className:"movie-stack-credits-title",children:"Director"}),Object(m.jsx)("div",{className:"movie-stack-credits-value",children:i.name})]})]})]})})),search:_e((function(e){var t=e.search,n=e.movie;return{query:t.query,filter:t.filter,results:Ce.movie.getResults({movie:n,search:t})}}),{updateFilter:Ne.search.updateFilter,updateQuery:Ne.search.updateQuery,closeStack:Ne.layout.closeStack("search"),openMovie:Ne.layout.openStack("movie")},(function(e){var t=e.query,n=e.filter,r=e.results,c=e.updateQuery,i=e.updateFilter,a=e.openMovie,o=e.closeStack;return Object(m.jsxs)(we,{className:"search-stack",closeStack:o,children:[Object(m.jsx)("div",{className:"search-stack-head",children:Object(m.jsxs)("div",{className:"search-stack-input-wrapper",children:[Object(m.jsx)("input",{autoFocus:!0,type:"text",placeholder:"search movies",value:t,onChange:function(e){return c({query:e.target.value})},className:"search-stack-input"}),Object(m.jsx)("i",{className:"icon-search"}),Object(m.jsx)("div",{className:"search-stack-input-rating",children:Object(m.jsx)(qe,{voteAverage:n.rating,onChange:function(e){var t=2*e;i({rating:t===n.rating?null:t})}})})]})}),r.length>0&&Object(m.jsx)("div",{className:"search-stack-grid",children:r.map((function(e){var t=e.id;return Object(m.jsx)("div",{className:"search-stack-grid-item",children:Object(m.jsx)(De,{id:t,size:"w342",onClick:function(){return a({id:t})}})},t)}))})]})}))},Qe=_e((function(e){return{stack:e.layout.stack}}),null,(function(e){var t=e.stack;e.closeStack;return Object(m.jsx)(Ie,{className:"ui-stack-layer",children:t.map((function(e){var t=e.namespace,n=e.props,r=Le[t];return r?Object(m.jsx)(r,Object(y.a)({},n),t):null}))})})),He=_e((function(e){return{stackOpen:e.layout.stack.length>0}}),null,(function(e){var t=e.stackOpen,n=e.children;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("main",{className:be()("layer-main",{"stack-open":t}),children:[Object(m.jsx)("div",{className:"layer-main-header",children:Object(m.jsx)(Te,{})}),Object(m.jsx)("div",{className:"layer-main-content",children:n})]}),Object(m.jsx)(Qe,{})]})})),Pe=_e((function(e){var t=e.movie;return{movies:Ce.movie.getMovies({movie:t})}}),{discoverMovies:Ne.movie.discoverMovies,getConfiguration:Ne.config.getConfiguration,getGenres:Ne.genre.getGenres,openMovie:Ne.layout.openStack("movie")},(function(e){var t=e.movies,n=e.discoverMovies,r=e.getConfiguration,c=e.getGenres,i=e.openMovie;return Object(j.useEffect)((function(){n()}),[n]),Object(j.useEffect)((function(){r()}),[r]),Object(j.useEffect)((function(){c()}),[c]),Object(m.jsx)("div",{className:"movie-grid",children:t.map((function(e){var t=e.id;e.title;return Object(m.jsx)("div",{className:"movie-grid-item",children:Object(m.jsx)(De,{id:t,onClick:function(){return i({id:t})}})},t)}))})})),Je=(n(65),function(){return Object(m.jsx)(g.a,{store:Oe,children:Object(m.jsx)(He,{children:Object(m.jsx)(Pe,{})})})}),ze=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))},Be=document.getElementById("root");b.a.render(Object(m.jsx)(O.a.StrictMode,{children:Object(m.jsx)(Je,{})}),Be),setTimeout((function(){return Be.classList.add("ready")}),1e3),ze()}},[[66,1,2]]]);
//# sourceMappingURL=main.fb171898.chunk.js.map