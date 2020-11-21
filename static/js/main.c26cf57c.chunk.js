(this["webpackJsonpd-movie"]=this["webpackJsonpd-movie"]||[]).push([[0],{82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"getConfiguration",(function(){return R}));var c={};n.r(c),n.d(c,"getGenres",(function(){return I}));var r={};n.r(r),n.d(r,"discoverMovies",(function(){return L})),n.d(r,"getMovie",(function(){return V})),n.d(r,"getCredits",(function(){return G})),n.d(r,"getVideos",(function(){return U}));var i={};n.r(i),n.d(i,"getPerson",(function(){return A}));var s={};n.r(s),n.d(s,"searchMovies",(function(){return D}));var o={};n.r(o),n.d(o,"default",(function(){return q})),n.d(o,"getConfiguration",(function(){return Q}));var u={};n.r(u),n.d(u,"default",(function(){return K})),n.d(u,"getGenres",(function(){return J}));var l={};n.r(l),n.d(l,"default",(function(){return ae})),n.d(l,"openStack",(function(){return ce})),n.d(l,"closeStack",(function(){return re})),n.d(l,"updateVideoState",(function(){return ie})),n.d(l,"openToast",(function(){return se})),n.d(l,"closeToast",(function(){return oe}));var d={};n.r(d),n.d(d,"default",(function(){return fe})),n.d(d,"SEARCH_MOVIES_SUCCESS",(function(){return ve})),n.d(d,"updateFilter",(function(){return ge})),n.d(d,"updateQuery",(function(){return be})),n.d(d,"searchMovies",(function(){return me}));var v={};n.r(v),n.d(v,"default",(function(){return ye})),n.d(v,"GET_CREDITS_SUCCESS",(function(){return pe})),n.d(v,"discoverMovies",(function(){return Ne})),n.d(v,"getMovie",(function(){return _e})),n.d(v,"getCredits",(function(){return Ce})),n.d(v,"getVideos",(function(){return Te}));var j={};n.r(j),n.d(j,"default",(function(){return Re})),n.d(j,"getPerson",(function(){return Le}));var f={};n.r(f),n.d(f,"default",(function(){return De})),n.d(f,"changeLanguage",(function(){return Fe}));var g={};n.r(g),n.d(g,"getGenres",(function(){return Ke}));var b={};n.r(b),n.d(b,"getMovies",(function(){return Je})),n.d(b,"getCast",(function(){return Be})),n.d(b,"getDirector",(function(){return Xe})),n.d(b,"getYouTubeVideos",(function(){return Ze})),n.d(b,"filterMovies",(function(){return $e})),n.d(b,"getResults",(function(){return et}));var m={};n.r(m),n.d(m,"isLoading",(function(){return tt}));var O=n(0),h=n(1),p=n.n(h),x=n(12),E=n.n(x),y=n(20),S=n(11),k=n(37),N=(n(53),n(2)),_=n(38),C=n.n(_),T=function(e){return C()(Object(N.a)(Object(N.a)({},e),{},{url:"https://api.themoviedb.org/3"+e.url,params:Object(N.a)(Object(N.a)({},e.params||{}),{},{api_key:"0d350753f143701136974b765ca31ac5"})}))},w=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return function(a){return e({type:t,payload:Object(N.a)(Object(N.a)({},n),{},{data:a.data})})}},M=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return function(a){var c=(a.response||{data:{}}).data;return e({type:t,payload:Object(N.a)(Object(N.a)({},n),{},{error:c.error})})}},R=function(){return T({method:"GET",url:"/configuration"})},I=function(e){var t=e.language;return T({method:"GET",url:"/genre/movie/list",params:{language:t}})},L=function(e){var t=e.page,n=e.language;return T({method:"GET",url:"/discover/movie",params:{page:t,language:n}})},V=function(e){var t=e.id,n=e.language;return T({method:"GET",url:"/movie/".concat(t),params:{language:n}})},G=function(e){var t=e.id;return T({method:"GET",url:"/movie/".concat(t,"/credits")})},U=function(e){var t=e.id,n=e.language;return T({method:"GET",url:"/movie/".concat(t,"/videos"),params:{language:n}})},A=function(e){var t=e.personId,n=e.language;return T({method:"GET",url:"/person/".concat(t),params:{language:n}})},D=function(e){var t=e.query,n=e.language;return T({method:"GET",url:"/search/movie",params:{query:t,language:n}})},F={config:a,genre:c,movie:r,person:i,search:s},P="config/GET_CONFIGURATION_SUCCESS",Y={images:{}};function q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case P:var c=a.data.images;return{images:c};default:return e}}var Q=function(){return function(e){return e({type:"config/GET_CONFIGURATION_REQUEST",meta:F.config.getConfiguration().then(w(e,P)).catch(M(e,"config/GET_CONFIGURATION_FAILURE"))})}},W=n(5),H="genre/GET_GENRES_SUCCESS",z={genres:{}};function K(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case H:var c=a.data.genres;return{genres:c.reduce((function(e,t){return Object(N.a)(Object(N.a)({},e),{},Object(W.a)({},t.id,t))}),{})};default:return e}}var J=function(e){return function(t){return t({type:"genre/GET_GENRES_REQUEST",meta:F.genre.getGenres(e).then(w(t,H)).catch(M(t,"genre/GET_GENRES_FAILURE"))})}},B=n(13),X="layout/OPEN_STACK",Z="layout/CLOSE_STACK",$="layout/UPDATE_VIDEO_STATE",ee="layout/OPEN_TOAST",te="layout/CLOSE_TOAST",ne={stack:[],playingVideo:!1,toast:{open:!1,message:null}};function ae(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case X:var c=a.namespace,r=a.props;return Object(N.a)(Object(N.a)({},e),{},{stack:[].concat(Object(B.a)(e.stack),[{namespace:c,props:r||{}}])});case Z:return Object(N.a)(Object(N.a)({},e),{},{stack:e.stack.slice(0,-1)});case $:return Object(N.a)(Object(N.a)({},e),{},{playingVideo:a.playing});case ee:return Object(N.a)(Object(N.a)({},e),{},{toast:{open:!0,message:a.message}});case te:return Object(N.a)(Object(N.a)({},e),{},{toast:ne.toast});default:return e}}var ce=function(e){return function(t){return function(n){return n({type:X,payload:{namespace:e,props:t}})}}},re=function(){return function(e){return e({type:Z})}},ie=function(e){return function(t){return t({type:$,payload:e})}},se=function(e){return function(t){return t({type:ee,payload:e})}},oe=function(){return function(e){return e({type:te})}},ue="search/UPDATE_QUERY",le="search/UPDATE_FILTER",de="search/SEARCH_MOVIES_REQUEST",ve="search/SEARCH_MOVIES_SUCCESS",je={query:"",filter:{rating:null},results:{},loading:{}};function fe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case ue:return Object(N.a)(Object(N.a)({},e),{},{query:a.query});case le:return Object(N.a)(Object(N.a)({},e),{},{filter:Object(N.a)(Object(N.a)({},e.filter),a)});case de:return Object(N.a)(Object(N.a)({},e),{},{loading:Object(N.a)(Object(N.a)({},e.loading),{},Object(W.a)({},a.query,!0))});case ve:var c=a.query,r=a.data.results;return Object(N.a)(Object(N.a)({},e),{},{loading:Object(N.a)(Object(N.a)({},e.loading),{},Object(W.a)({},c,!1)),results:Object(N.a)(Object(N.a)({},e.results),{},Object(W.a)({},c,r.map((function(e){return e.id}))))});default:return e}}var ge=function(e){return function(t){return t({type:le,payload:e})}},be=function(e){return function(t){return t({type:ue,payload:e})}},me=function(e){return function(t){return t({type:de,payload:e,meta:F.search.searchMovies(e).then(w(t,ve,e)).catch(M(t,"search/SEARCH_MOVIES_FAILURE"))})}},Oe="movie/DISCOVER_MOVIES_SUCCESS",he="movie/GET_MOVIE_SUCCESS",pe="movie/GET_CREDITS_SUCCESS",xe="movie/GET_VIDEOS_SUCCESS",Ee={list:[],movies:{},credits:{},videos:{}};function ye(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case Oe:var c=a.data.results,r=c.map((function(e){return e.id}));return Object(N.a)(Object(N.a)({},e),{},{list:1===a.page?r:Object(B.a)(new Set([].concat(Object(B.a)(e.list),Object(B.a)(r)))),movies:ke({state:e,results:c})});case ve:var i=a.data.results;return Object(N.a)(Object(N.a)({},e),{},{movies:ke({state:e,results:i})});case he:var s=a.id,o=a.data;return Object(N.a)(Object(N.a)({},e),{},{movies:Object(N.a)(Object(N.a)({},e.movies),{},Object(W.a)({},s,Object(N.a)(Object(N.a)({},e.movies[s]),Se(o))))});case pe:var u=a.id,l=a.data;return Object(N.a)(Object(N.a)({},e),{},{credits:Object(N.a)(Object(N.a)({},e.credits),{},Object(W.a)({},u,l))});case xe:var d=a.id,v=a.language,j=a.data.results;return Object(N.a)(Object(N.a)({},e),{},{videos:Object(N.a)(Object(N.a)({},e.videos),{},Object(W.a)({},d,Object(N.a)(Object(N.a)({},e.videos[d]||{}),{},Object(W.a)({},v,j))))});default:return e}}var Se=function(e){var t={id:e.id,title:e.title,poster_path:e.poster_path,backdrop_path:e.backdrop_path,original_language:e.original_language,genre_ids:e.genre_ids||(e.genres||[]).map((function(e){return e.id})),vote_average:e.vote_average,overview:e.overview,release_date:e.release_date};return e.runtime&&(t.runtime=e.runtime),t},ke=function(e){var t=e.state;return e.results.reduce((function(e,n){return Object(N.a)(Object(N.a)({},e),{},Object(W.a)({},n.id,Object(N.a)(Object(N.a)({},t.movies[n.id]||{}),Se(n))))}),Object(N.a)({},t.movies))},Ne=function(e){return function(t){return t({type:"movie/DISCOVER_MOVIES_REQUEST",meta:F.movie.discoverMovies(e).then(w(t,Oe,e)).catch(M(t,"movie/DISCOVER_MOVIES_FAILURE"))})}},_e=function(e){return function(t){return t({type:"movie/GET_MOVIE_REQUEST",meta:F.movie.getMovie(e).then(w(t,he,e)).catch(M(t,"movie/GET_MOVIE_FAILURE"))})}},Ce=function(e){return function(t){return t({type:"movie/GET_CREDITS_REQUEST",meta:F.movie.getCredits(e).then(w(t,pe,e)).catch(M(t,"movie/GET_CREDITS_FAILURE"))})}},Te=function(e){return function(t){return t({type:"movie/GET_VIDEOS_REQUEST",meta:F.movie.getVideos(e).then(w(t,xe,e)).catch(M(t,"movie/GET_VIDEOS_FAILURE"))})}},we="person/GET_PERSON_SUCCESS",Me={persons:{}};function Re(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case we:return{persons:Object(N.a)(Object(N.a)({},e.persons),{},Object(W.a)({},a.personId,a.data))};case pe:var c=a.data;return{persons:c.cast.reduce((function(e,t){return Object(N.a)(Object(N.a)({},e),{},Object(W.a)({},t.id,{id:t.id,name:t.name,profile_path:t.profile_path}))}),Object(N.a)({},e.persons))};default:return e}}var Ie,Le=function(e){return function(t){return t({type:"person/GET_PERSON_REQUEST",meta:F.person.getPerson(e).then(w(t,we,e)).catch(M(t,"person/GET_PERSON_FAILURE"))})}},Ve=n(4),Ge={loading:{},success:{},failure:{}};var Ue="user/CHANGE_LAGUAGE",Ae={language:(null===(Ie=navigator.language)||void 0===Ie?void 0:Ie.substr(0,2))||"en"};function De(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case Ue:return Object(N.a)(Object(N.a)({},e),{},{language:a.language});default:return e}}var Fe=function(e){return function(t){return t({type:Ue,payload:e})}},Pe=Object(S.c)({config:q,genre:K,layout:ae,movie:ye,person:Re,search:fe,status:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=(t.payload,/(\w+)\/(\w+)_(REQUEST|SUCCESS|ERROR)/.exec(n));if(!a)return e;var c=Object(Ve.a)(a,4),r=c[1],i=c[2],s=c[3],o="".concat(r,"/").concat(i);return Object(N.a)(Object(N.a)({},e),{},{loading:Object(N.a)(Object(N.a)({},e.loading),{},Object(W.a)({},o,"REQUEST"===s)),success:Object(N.a)(Object(N.a)({},e.success),{},Object(W.a)({},o,"SUCCESS"===s)),failure:Object(N.a)(Object(N.a)({},e.failure),{},Object(W.a)({},o,"FAILURE"===s))})},user:De}),Ye=[k.a];var qe=Object(S.e)(Pe,function(){try{return JSON.parse(window.localStorage.getItem("d-movie-state"))||{}}catch(e){return{}}}(),S.d.apply(void 0,[S.a.apply(void 0,Ye)].concat([])));qe.subscribe((function(){var e=qe.getState();!function(e){try{window.localStorage.setItem("d-movie-state",JSON.stringify(e))}catch(t){}}({config:e.config,genres:e.genres})}));var Qe=qe,We=n(3),He=n.n(We),ze=n(10),Ke=Object(ze.a)((function(e){return e.genre.genres}),(function(e){return e.movie.movies}),(function(e){return e.id}),(function(e,t,n){return t[n].genre_ids.map((function(t){return e[t]}))})),Je=Object(ze.a)((function(e){return e.movie}),(function(e){return(e.list||[]).map((function(t){return e.movies[t]}))})),Be=Object(ze.a)((function(e){return e.movie.credits}),(function(e){return e.id}),(function(e,t){return e[t]?e[t].cast:[]})),Xe=Object(ze.a)((function(e){return e.movie.credits}),(function(e){return e.id}),(function(e,t){return e[t]?e[t].crew.find((function(e){return"Director"===e.job})):null})),Ze=Object(ze.a)((function(e){return e.movie.videos}),(function(e){return e.user.language}),(function(e){return e.id}),(function(e,t,n){return(e[n]&&e[n][t]||[]).filter((function(e){return"YouTube"===e.site}))})),$e=Object(ze.a)((function(e){return e.movies}),(function(e){return e.rating}),(function(e,t){return e.filter((function(e){var n=e.vote_average;return n&&n>t-2&&n<=t}))})),et=Object(ze.a)((function(e){return e.movie}),(function(e){var t=e.search;return[t.query,t.filter.rating,t.results]}),(function(e,t){var n,a=Object(Ve.a)(t,3),c=a[0],r=a[1],i=a[2];return n=c?(i[c]||[]).map((function(t){return e.movies[t]})):Je({movie:e}),null!==r&&(n=$e({movies:n,rating:r})),n.slice(0,20)})),tt=Object(ze.a)((function(e){return e.status.loading}),(function(e){return Object.values(e).some((function(e){return e}))})),nt={genre:g,movie:b,status:m},at={config:o,genre:u,layout:l,movie:v,person:j,search:d,user:f},ct=function(e,t,n){return Object(y.b)(e,t&&function(e){return Object(S.b)(t,e)})(n)},rt=function(e){var t=e.language,n=e.size;return Object(O.jsx)("div",{className:He()("ui-lang",n),children:t})},it=ct((function(e){return{language:e.user.language}}),{openLanguage:at.layout.openStack("language"),openSearch:at.layout.openStack("search")},(function(e){var t=e.language,n=e.openLanguage,a=e.openSearch;return Object(O.jsxs)("div",{className:"ui-header",children:[Object(O.jsx)("div",{className:"ui-header-title",children:Object(O.jsx)("h1",{children:"MUST WATCH"})}),Object(O.jsxs)("div",{className:"ui-header-nav",children:[Object(O.jsx)("div",{className:"ui-header-language ui-clickable",onClick:function(){return n()},children:Object(O.jsx)(rt,{language:t})}),Object(O.jsx)("div",{className:"ui-header-search ui-clickable",onClick:function(){return a()},children:Object(O.jsx)("i",{className:"icon-search"})})]})]})})),st=n(19),ot=n(84),ut=function(e){var t=e.namespace,n=e.active,a=e.hidden,c=e.children,r=Object(st.a)(e,["namespace","active","hidden","children"]),i=Object(h.useRef)(null);return Object(O.jsx)(ot.a,Object(N.a)(Object(N.a)({nodeRef:i,timeout:{enter:400,exit:250}},r),{},{children:Object(O.jsx)("div",{ref:i,className:He()("ui-layer",t,{active:n,hidden:a}),children:c})}))},lt=n(85),dt=function(e){var t=e.children;return Object(O.jsx)(lt.a,{component:null,children:t})},vt=function(e,t,n){var a=Object(h.useState)(0),c=Object(Ve.a)(a,2),r=c[0],i=c[1];return Object(h.useEffect)((function(){i(0)}),[i]),Object(h.useEffect)((function(){var a=t.current,c=null,r=null,s=!1,o=!1,u=!0,l=function(e){var t=e.touches;c=t[0].clientY,o=0===a.scrollTop||c<45,u=!0},d=function(e){var t=e.touches;if(o&&!s)if(null===r&&(r=t[0].clientY),r<c)o=!1;else{var a=r-t[0].clientY;if(a<0){u&&document.activeElement&&(document.activeElement.blur(),u=!1);var l=Math.abs(a)/800;i(l),l>.25&&!s&&(n(),s=!0)}}},v=function(){r=null,o=!1,s||i(0)},j=e.current;if(j)return j.addEventListener("touchstart",l),j.addEventListener("touchmove",d),j.addEventListener("touchend",v),function(){j.removeEventListener("touchstart",l),j.removeEventListener("touchmove",d),j.removeEventListener("touchend",v)}}),[e,t,i,n]),r},jt=function(e,t){Object(h.useEffect)((function(){if(e){var n=function(e){27===e.keyCode&&t()};return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)}}}),[e,t])},ft=n(25),gt=function(e){Object(h.useEffect)((function(){var t=e.current;if(t)return Object(ft.a)(t,{allowTouchMove:function(e){return e.matches(".scroll-lock-ignore")||e.closest(".scroll-lock-ignore")}}),function(){Object(ft.b)(t)}}),[e])},bt=function(e){Object(h.useEffect)((function(){var t=document.title;return document.title="".concat(e," - Must Watch"),function(){document.title=t}}),[e])},mt=function(e){var t=Object(h.useState)({value:e,original:e}),n=Object(Ve.a)(t,2),a=n[0],c=n[1];return Object(h.useEffect)((function(){e!==a.value&&c(Object(N.a)(Object(N.a)({},a),{},{value:e}))}),[e,a,c]),e!==a.original},Ot=function(e){var t=e.active,n=e.loading,a=e.closeStack,c=e.children,r=Object(h.useRef)(null),i=Object(h.useRef)(null);gt(i),jt(t,a);var s=vt(r,i,a);return Object(O.jsx)("div",{className:He()("ui-stack-wrap",{closing:0!==s}),style:{transform:"scale(".concat(1-s,") translate3d(0,0,0)")},children:Object(O.jsxs)("div",{ref:r,className:"ui-stack",children:[Object(O.jsx)("div",{className:He()("ui-stack-indicator",{loading:n})}),Object(O.jsx)("div",{className:"ui-stack-close ui-clickable",onClick:a,children:Object(O.jsx)("i",{className:"icon-close"})}),Object(O.jsx)("div",{ref:i,className:"ui-stack-content",children:c})]})})},ht=["en","es","pt"],pt={en:"English",es:"Espa\xf1ol",pt:"Portugu\xeas"},xt=ct((function(e){return{language:e.user.language}}),{changeLanguage:at.user.changeLanguage,closeStack:at.layout.closeStack},(function(e){var t=e.language,n=e.changeLanguage,a=e.closeStack;return Object(O.jsx)("div",{className:"language-stack",children:Object(O.jsx)("ul",{children:ht.map((function(e){return Object(O.jsxs)("li",{className:"ui-clickable",onClick:function(){n({language:e}),a()},children:[Object(O.jsx)("div",{className:"language-stack-lang",children:Object(O.jsx)(rt,{language:e,size:"x38"})}),Object(O.jsx)("div",{className:He()("language-stack-name",{active:t===e}),children:pt[e]})]},e)}))})})})),Et=function(e){var t=e.onLoad,n=Object(st.a)(e,["onLoad"]),a=Object(h.useState)(!1),c=Object(Ve.a)(a,2),r=c[0],i=c[1],s=Object(h.useState)(!1),o=Object(Ve.a)(s,2),u=o[0],l=o[1];return Object(O.jsx)("img",Object(N.a)({alt:"",className:He()("ui-image",{loaded:r,error:u}),onLoad:function(){i(!0),t&&t()},onError:function(){l(!0)}},n))},yt=ct((function(e,t){var n=e.config,a=e.movie,c=t.id;return{movie:a.movies[c],config:n.images}}),null,(function(e){var t=e.movie,n=t.title,a=t.poster_path,c=e.config,r=e.onClick,i=e.size,s=void 0===i?"w500":i,o=[c.secure_base_url,s,a].join("");return Object(O.jsx)("div",{className:"ui-poster",onClick:r,children:Object(O.jsxs)("div",{className:He()("ui-poster-content",{"no-image":!a}),children:[a&&Object(O.jsx)(Et,{src:o}),!a&&Object(O.jsx)("div",{className:"ui-poster-title",children:n})]})})})),St=Object(B.a)(Array(5).keys()),kt=function(e){var t=e.voteAverage,n=e.onChange;return Object(O.jsx)("div",{className:"ui-rating",children:St.map((function(e){return Object(O.jsx)("i",{onClick:function(){n&&n(e)},"data-rating":t,className:He()("icon-star-outline",{"icon-star-half":null!==t&&t>2*e,"icon-star-rate":null!==t&&t>=2*e+1,"ui-clickable":n})},e)}))})},Nt=function(e,t,n){var a=2*(e+1);n({rating:a===t.rating?null:a})},_t=ct((function(e){var t=e.user,n=e.search,a=e.movie;return{language:t.language,query:n.query,filter:n.filter,loading:n.loading[n.query],results:nt.movie.getResults({movie:a,search:n})}}),{updateFilter:at.search.updateFilter,updateQuery:at.search.updateQuery,searchMovies:at.search.searchMovies,openMovie:at.layout.openStack("movie")},(function(e){var t=e.language,n=e.query,a=e.filter,c=e.loading,r=e.results,i=e.updateQuery,s=e.updateFilter,o=e.searchMovies,u=e.openMovie;return bt("Search"),Object(h.useEffect)((function(){n&&o({query:n,language:t})}),[n,t,o]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"search-stack-head",children:Object(O.jsxs)("div",{className:"search-stack-input-wrapper",children:[Object(O.jsx)("input",{autoFocus:!0,type:"text",placeholder:"search movies",value:n,onChange:function(e){return i({query:e.target.value})},className:"search-stack-input"}),Object(O.jsx)("i",{className:"icon-search"}),Object(O.jsx)("div",{className:"search-stack-input-rating",children:Object(O.jsx)(kt,{voteAverage:a.rating,onChange:function(e){return Nt(e,a,s)}})})]})}),!c&&!r.length&&Object(O.jsx)("div",{className:"search-stack-empty fade-in",children:Object(O.jsx)("p",{children:"No movies found"})}),r.length>0&&Object(O.jsx)("div",{className:"search-stack-grid",children:r.map((function(e){var t=e.id;return Object(O.jsx)("div",{className:"search-stack-grid-item",children:Object(O.jsx)(yt,{id:t,size:"w342",onClick:function(){return u({id:t})}})},t)}))})]})})),Ct=function(e){var t=e.lineClamp,n=void 0===t?"x3":t,a=e.className,c=e.children,r=Object(h.useState)(!1),i=Object(Ve.a)(r,2),s=i[0],o=i[1];return Object(O.jsx)("p",{onClick:function(){return o(!0)},className:He()("ui-text-clamp",n,a,{"show-all":s}),children:c})},Tt=ct((function(e){return{config:e.config.images}}),null,(function(e){var t=e.movie,n=t.backdrop_path,a=t.poster_path,c=n||a,r=[e.config.secure_base_url,"w1280",c].join("");return Object(O.jsx)("div",{className:"ui-backdrop",children:c&&Object(O.jsx)(Et,{src:r})})})),wt=n(14),Mt=n.n(wt),Rt=function(e){var t=e.releaseDate,n=e.originalLanguage,a=e.runTime,c=mt(a),r=[];if(t&&r.push(Object(O.jsx)("span",{children:Mt()(t).format("Y")},t)),n&&r.push(Object(O.jsx)("span",{children:n.toUpperCase()},n)),a>0){var i=Math.floor(a/60),s=Math.floor(a%60%60);r.push(Object(O.jsxs)("span",{className:He()({"fade-in":c}),children:[i>0&&"".concat(i,"h")," ",s>0&&"".concat(s,"m")]},a))}return Object(O.jsx)("div",{className:"ui-info",children:r.reduce((function(e,t){return[e," / ",t]}))})},It=function(e){var t=e.genres;return Object(O.jsx)("div",{className:"ui-genres",children:t.map((function(e){return e.name})).reduce((function(e,t){return[e,", ",t]}))})},Lt=function(e){var t=e.title,n=e.value;return Object(O.jsxs)("div",{className:"ui-credits",children:[Object(O.jsx)("div",{className:"ui-credits-title",children:t}),Object(O.jsx)("div",{className:"ui-credits-value",children:n})]})},Vt=function(e){var t=e.name,n=e.videoKey,a=e.openVideo;return Object(O.jsxs)("div",{className:"ui-videos-item-wrap",onClick:function(){return a({title:t,videoKey:n})},children:[Object(O.jsx)("div",{className:"ui-videos-item",children:Object(O.jsx)("div",{className:"ui-videos-item-thumb",children:Object(O.jsx)(Et,{src:"https://img.youtube.com/vi/".concat(n,"/hqdefault.jpg")})})}),Object(O.jsx)("div",{className:"ui-videos-item-name",title:t,children:t})]})},Gt=ct(null,{openVideo:at.layout.openStack("video")},(function(e){var t=e.videos,n=e.openVideo;return Object(O.jsx)("div",{className:"ui-videos",children:t.map((function(e){var t=e.id,a=e.name,c=e.key;return Object(O.jsx)(Vt,{name:a,videoKey:c,openVideo:n},t)}))})})),Ut=ct((function(e,t){var n=e.user,a=e.movie,c=e.genre,r=e.status,i=t.id;return{language:n.language,movie:a.movies[i],genres:nt.genre.getGenres({genre:c,movie:a,id:i}),cast:nt.movie.getCast({movie:a,id:i}),director:nt.movie.getDirector({movie:a,id:i}),videos:nt.movie.getYouTubeVideos({movie:a,user:n,id:i}),loadingCredits:r.loading["movie/GET_CREDITS"]}}),{getMovie:at.movie.getMovie,getCredits:at.movie.getCredits,getVideos:at.movie.getVideos,openCast:at.layout.openStack("cast")},(function(e){var t=e.id,n=e.language,a=e.movie,c=e.genres,r=e.cast,i=e.director,s=e.videos,o=e.loadingCredits,u=e.getMovie,l=e.getCredits,d=e.getVideos,v=e.openCast,j=a.title,f=a.vote_average,g=a.release_date,b=a.runtime,m=a.overview,p=a.original_language;bt(j),Object(h.useEffect)((function(){u({id:t,language:n})}),[t,n,u]),Object(h.useEffect)((function(){l({id:t})}),[t,l]),Object(h.useEffect)((function(){d({id:t,language:n})}),[t,n,d]);var x=Object(h.useMemo)((function(){var e=r.slice(0,3).map((function(e){return e.name}));return e.length!==r.length&&e.push("+".concat(r.length-e.length)),e}),[r]),E=mt(x.length),y=mt(null===i||void 0===i?void 0:i.name),S=mt(s.length);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"movie-stack-backdrop",children:[Object(O.jsx)(Tt,{movie:a}),Object(O.jsx)("img",{className:"thanks-themoviedb",src:"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg",alt:""})]}),Object(O.jsxs)("div",{className:"movie-stack-content",children:[Object(O.jsxs)("div",{className:"ui-stack-head",children:[Object(O.jsx)("h1",{className:"movie-stack-title",children:j}),f>0&&Object(O.jsx)("div",{className:"movie-stack-rating",children:Object(O.jsx)(kt,{voteAverage:f})}),(g||p||b>0)&&Object(O.jsx)("div",{className:"movie-stack-info",children:Object(O.jsx)(Rt,{releaseDate:g,originalLanguage:p,runTime:b})})]}),m&&Object(O.jsx)("div",{className:"show-up-primary",children:Object(O.jsx)("div",{className:"movie-stack-overview",children:Object(O.jsx)(Ct,{lineClamp:"x4",children:m})})}),Object(O.jsx)("div",{className:"show-up-secondary",children:c.length>0&&Object(O.jsx)("div",{className:"movie-stack-genres",children:Object(O.jsx)(It,{genres:c})})}),Object(O.jsxs)("div",{className:"show-up-tertiary",children:[r.length>0&&Object(O.jsx)("div",{onClick:function(){return v({id:t})},className:He()("movie-stack-credits ui-tapable",{"fade-in":E}),children:Object(O.jsx)(Lt,{title:"Cast",value:x.reduce((function(e,t){return[e,", ",t]}))})}),i&&Object(O.jsx)("div",{className:He()("movie-stack-credits",{"fade-in":y}),children:Object(O.jsx)(Lt,{title:"Director",value:i.name})}),(r.length>0||i||!o)&&s.length>0&&Object(O.jsxs)("div",{className:He()("movie-stack-videos",{"fade-in":S}),children:[Object(O.jsx)("div",{className:"movie-stack-videos-title",children:"Videos"}),Object(O.jsx)("div",{className:"movie-stack-videos-wrap scroll-lock-ignore",children:Object(O.jsx)(Gt,{videos:s})})]})]})]})]})})),At=n(39),Dt=function(e){var t=e.playerRef,n=Object(h.useState)(0),a=Object(Ve.a)(n,2),c=a[0],r=a[1];return Object(h.useEffect)((function(){var e=t.current;if(e){var n=e.getDuration()||1,a=setInterval((function(){r(e.getCurrentTime()/n*100)}),500);return function(){return clearInterval(a)}}}),[t,r]),Object(O.jsx)("div",{className:"video-progress",children:Object(O.jsx)("div",{className:"video-progress-fill",style:{transform:"translate3d(-".concat(100-c,"%, 0, 0)")}})})},Ft=ct((function(e){return{playingVideo:e.layout.playingVideo}}),{updateVideoState:at.layout.updateVideoState,openToast:at.layout.openToast,closeStack:at.layout.closeStack},(function(e){var t=e.title,n=e.videoKey,a=e.playingVideo,c=e.updateVideoState,r=e.openToast,i=e.closeStack,s=Object(h.useRef)(null),o=Object(h.useState)(!1),u=Object(Ve.a)(o,2),l=u[0],d=u[1];Object(h.useEffect)((function(){return function(){c({playing:!1})}}),[c]);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(At.a,{videoId:n,containerClassName:"video-stack",className:He()("video-stack-frame",{ready:l,playing:a}),onReady:function(e){s.current=e.target,s.current.setVolume(100),d(!0)},onPlay:function(){return c({playing:!0})},onEnd:function(){return i()},onError:function(){i(),r({message:"Video unavailable, try again later"})},opts:{title:"".concat(t," - Must Watch"),width:"100%",height:"100%",playerVars:{autoplay:1,modestbranding:1,iv_load_policy:3,rel:0,controls:0}}}),Object(O.jsx)("div",{className:"video-stack-overlay",onClick:function(){s.current&&l&&(1!==s.current.getPlayerState()&&s.current.playVideo())},children:a&&Object(O.jsx)(Dt,{playerRef:s})})]})})),Pt={x50:"w185",x185:"h632"},Yt=ct((function(e){return{config:e.config.images}}),null,(function(e){var t=e.person.profile_path,n=e.config,a=e.size,c=void 0===a?"x50":a,r=e.placeholder,i=Object(h.useState)(t),s=Object(Ve.a)(i,1)[0],o=[n.secure_base_url,Pt[r],s].join(""),u=[n.secure_base_url,Pt[c],t].join("");return Object(O.jsxs)("div",{className:He()("ui-person-picture",c,{"no-image":!t}),children:[r&&Object(O.jsx)(Et,{src:o}),t&&Object(O.jsx)(Et,{src:u})]})})),qt={language:xt,search:_t,movie:Ut,video:Ft,cast:ct((function(e,t){var n=e.movie,a=t.id;return{title:n.movies[a].title,credits:n.credits[a]}}),{openPerson:at.layout.openStack("person")},(function(e){var t=e.credits,n=e.title,a=e.openPerson;return Object(O.jsxs)("div",{className:"cast-stack",children:[Object(O.jsxs)("div",{className:"ui-stack-head",children:[Object(O.jsx)("h2",{children:n}),Object(O.jsx)("div",{className:"cast-stack-subtitle",children:"Cast"})]}),Object(O.jsx)("div",{className:"show-up-primary",children:Object(O.jsx)("div",{className:"cast-stack-list",children:t.cast.map((function(e){return Object(O.jsxs)("div",{className:"cast-stack-item ui-tapable",onClick:function(){return a({personId:e.id})},children:[Object(O.jsx)("div",{className:"cast-stack-item-picture",children:Object(O.jsx)(Yt,{person:e})}),Object(O.jsxs)("div",{className:"cast-stack-item-info",children:[Object(O.jsx)("div",{className:"cast-stack-item-name",children:e.name}),e.character&&Object(O.jsx)("div",{className:"cast-stack-item-character",children:e.character})]})]},e.id)}))})})]})})),person:ct((function(e,t){var n=e.user,a=e.person,c=t.personId;return{person:a.persons[c],language:n.language}}),{getPerson:at.person.getPerson},(function(e){var t=e.personId,n=e.language,a=e.person,c=e.getPerson;Object(h.useEffect)((function(){c({personId:t,language:n})}),[t,n,c]);var r=mt(a.biography);return Object(O.jsxs)("div",{className:"person-stack",children:[Object(O.jsx)("div",{className:"ui-stack-head",children:Object(O.jsx)("h1",{className:"person-stack-name",children:a.name})}),Object(O.jsx)("div",{className:"show-up-primary",children:Object(O.jsx)("div",{className:"person-stack-picture",children:Object(O.jsx)(Yt,{person:a,size:"x185",placeholder:"x50"})})}),Object(O.jsx)("div",{className:"show-up-secondary",children:Object(O.jsxs)("dl",{className:He()({"fade-in":r}),children:[(a.birthday||a.place_of_birth)&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("dt",{children:"Born"}),Object(O.jsxs)("dd",{children:[a.birthday&&Object(O.jsxs)("div",{children:[Mt()(a.birthday).format("MMMM D, YYYY")," ",!a.deathday&&"(age ".concat(Mt()().diff(a.birthday,"years"),")")]}),a.place_of_birth&&Object(O.jsx)("div",{children:a.place_of_birth})]})]}),a.deathday&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("dt",{children:"Died"}),Object(O.jsxs)("dd",{children:[Mt()(a.deathday).format("MMMM D, YYYY")," (aged ",Mt()(a.deathday).diff(a.birthday,"years"),")"]})]}),a.biography&&Object(O.jsx)("dd",{className:"person-stack-bio",children:Object(O.jsx)(Ct,{children:a.biography})})]})})]})}))},Qt=ct((function(e){var t=e.layout,n=e.status;return{stack:t.stack,loading:nt.status.isLoading({status:n})}}),{closeStack:at.layout.closeStack},(function(e){var t=e.stack,n=e.closeStack,a=e.loading;return Object(O.jsx)(dt,{children:t.map((function(e,c){var r=e.namespace,i=e.props,s=t.length===c+1,o=t.length>c+2,u=qt[r];return Object(O.jsx)(ut,{namespace:r,active:s,hidden:o,children:Object(O.jsx)(Ot,{active:s,loading:s&&a,closeStack:n,children:Object(O.jsx)(u,Object(N.a)({},i))})},r)}))})})),Wt=function(e){var t=e.message,n=e.closeToast;return Object(h.useEffect)((function(){var e=setTimeout(n,4e3);return function(){clearTimeout(e)}}),[n]),Object(O.jsx)("div",{className:"ui-toast",onClick:n,children:Object(O.jsx)("p",{className:"ui-toast-message",children:t})},t)},Ht=ct((function(e){return{toast:e.layout.toast}}),{closeToast:at.layout.closeToast},(function(e){var t=e.toast,n=e.closeToast;return Object(O.jsx)(dt,{children:t.open&&Object(O.jsx)(ut,{active:!0,namespace:"ui-toast-layer",children:Object(O.jsx)(Wt,{message:t.message,closeToast:n})})})})),zt=function(e){e.toast,e.closeToast;var t=Object(h.useState)(!1),n=Object(Ve.a)(t,2),a=n[0],c=n[1];return Object(h.useEffect)((function(){var e=function(){return c(!0)},t=function(){return c(!1)};return window.addEventListener("offline",e),window.addEventListener("online",t),function(){window.removeEventListener("offline",e),window.removeEventListener("online",t)}}),[c]),Object(O.jsx)(dt,{children:a&&Object(O.jsx)(ut,{active:!0,namespace:"ui-offline-layer",children:Object(O.jsx)("div",{className:"ui-offline"})})})},Kt=ct((function(e){var t=e.layout;return{stackOpen:t.stack.length>0,playingVideo:t.playingVideo,hasVideoStack:t.stack.find((function(e){return"video"===e.namespace}))}}),null,(function(e){var t=e.stackOpen,n=e.hasVideoStack,a=e.playingVideo,c=e.children;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("main",{className:He()("ui-main",{"stack-open":t,"playing-video":a,"has-video-stack":n}),children:[Object(O.jsx)("div",{className:"ui-main-header",children:Object(O.jsx)(it,{})}),Object(O.jsx)("div",{className:"ui-main-content",children:c})]}),Object(O.jsx)(Qt,{}),Object(O.jsx)(Ht,{}),Object(O.jsx)(zt,{})]})})),Jt=ct((function(e){var t=e.user,n=e.movie;return{language:t.language,movies:nt.movie.getMovies({movie:n})}}),{getConfiguration:at.config.getConfiguration,getGenres:at.genre.getGenres,discoverMovies:at.movie.discoverMovies,openMovie:at.layout.openStack("movie")},(function(e){var t=e.movies,n=e.language,a=e.getConfiguration,c=e.getGenres,r=e.discoverMovies,i=e.openMovie,s=Object(h.useRef)(null),o=Object(h.useState)(1),u=Object(Ve.a)(o,2),l=u[0],d=u[1],v=Object(h.useState)(0),j=Object(Ve.a)(v,2),f=j[0],g=j[1];Object(h.useEffect)((function(){a()}),[a]),Object(h.useEffect)((function(){c({language:n})}),[n,c]),Object(h.useEffect)((function(){r({page:l,language:n})}),[l,n,r]),Object(h.useEffect)((function(){var e=function(){document.hidden||r({page:l,language:n})};return document.addEventListener("visibilitychange",e),function(){document.removeEventListener("visibilitychange",e)}}),[l,n,r]);var b=Object(h.useMemo)((function(){return t.length}),[t]),m=20,p=window.innerWidth>768?40:20;Object(h.useEffect)((function(){var e=Math.max(b-((f||1)*m+40),0),t=(b-e)/m,n=s.current,a=f+1===l,c=function(e){var n=e.target,c=(n.scrollLeft+window.innerWidth)/(n.scrollWidth||1)*t-f;0===n.scrollLeft&&d(1),c>=.6&&a&&(d(l+1),a=!1)};if(n)return n.addEventListener("scroll",c),function(){n.removeEventListener("scroll",c)}}),[f,l,d,s,b]),Object(h.useLayoutEffect)((function(){var e=s.current,t=Math.max(b-((f||1)*m+40),0),n=b-t,a=function(e){var t=e.target,a=(t.scrollLeft+window.innerWidth)/(t.scrollWidth||1),c=Math.floor(a*n/m);c!==f&&g(c)};if(e)return e.addEventListener("scroll",a),function(){e.removeEventListener("scroll",a)}}),[f,g,b,s]);var x=Math.max((f-1)*m,0),E=x,y=Math.min(x+60,b),S=Array.from({length:y-E},(function(e,t){return t+E})),k=window.innerWidth-p,N=window.innerWidth>768?.3*(k+p):.85*(k+p);return Object(O.jsx)("div",{ref:s,className:"main",children:Object(O.jsxs)("div",{className:"movie-grid",style:{width:(x+S.length)*N},children:[Object(O.jsx)("div",{style:{minWidth:x*N,minHeight:1}}),S.map((function(e,n){var a=t[e];if(!a)return null;var c=a.id,r=e+4>=f*m&&e-4<f*m+m;return Object(O.jsx)("div",{className:"movie-grid-item","data-index":e+1,children:r&&Object(O.jsx)(yt,{id:c,onClick:function(){return i({id:c})}})},n)}))]})})})),Bt=(n(82),function(){return Object(O.jsx)(y.a,{store:Qe,children:Object(O.jsx)(Kt,{children:Object(O.jsx)(Jt,{})})})}),Xt=document.getElementById("root");E.a.render(Object(O.jsx)(p.a.StrictMode,{children:Object(O.jsx)(Bt,{})}),Xt),setTimeout((function(){return Xt.classList.add("ready")}),1500)}},[[83,1,2]]]);