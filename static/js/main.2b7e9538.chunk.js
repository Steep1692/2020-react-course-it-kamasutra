(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{100:function(e,t,n){e.exports=n.p+"static/media/profileAvatar.c9041f3f.png"},151:function(e,t,n){e.exports=n(238)},156:function(e,t,n){},238:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(43),c=n.n(u);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(60),o=n(61),s=n(63),l=n(62),f=n(14),d=(n(156),n(18)),p=n(11);function m(){var e=Object(f.a)(["\n    text-align: right;\n"]);return m=function(){return e},e}function h(){var e=Object(f.a)(["\n    grid-area: header;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n\n    background-color: #2a712d;\n    box-shadow: 0px 0px 2px 0px #000;\n    \n    img {\n        max-height: 50px;\n    }\n"]);return h=function(){return e},e}var v=p.b.div(h()),g=Object(p.b)(v)(m()),b=function(e){var t=e.login,n=e.id,r=e.isAuth,u=e.logout,c="/profile/".concat(n);return a.a.createElement(v,null,a.a.createElement("div",null,a.a.createElement("a",{href:"/"},a.a.createElement("img",{src:"#!",alt:"Logotype"}))),a.a.createElement(g,null,r&&a.a.createElement("div",null,a.a.createElement("a",{href:c},t)," - ",a.a.createElement("button",{onClick:u},"Logout")),!r&&a.a.createElement(d.b,{to:"/login"},"Login")))},E=n(19),O=n(25),j=n(44),S={authMe:O.a,logout:O.d},T=Object(E.b)((function(e){return{login:Object(j.c)(e),id:Object(j.a)(e),isAuth:Object(j.b)(e)}}),S)((function(e){var t=e.login,n=e.id,r=e.logout,u=e.isAuth;return a.a.createElement(b,{isAuth:u,login:t,id:n,logout:r})})),w=n(6),y=n(36);function x(){var e=Object(f.a)(["\n    overflow: hidden;\n    grid-area: content;\n    border-radius: 8px;\n\n    background-color: #fff;\n    box-shadow: 0px 0px 2px 0px #000;\n"]);return x=function(){return e},e}var I=p.b.div(x()),A=a.a.lazy((function(){return n.e(7).then(n.bind(null,323))})),k=a.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,322))})),N=a.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,321))})),_=a.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,324))})),C=function(){var e=function(){return a.a.createElement(N,null)};return a.a.createElement(I,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(y.a,null)},a.a.createElement(w.b,{exact:!0,path:"/",render:e}),a.a.createElement(w.b,{exact:!0,path:"/login",render:function(){return a.a.createElement(_,null)}}),a.a.createElement(w.b,{path:"/profile/:userId?",render:e}),a.a.createElement(w.b,{path:"/dialogs",render:function(){return a.a.createElement(k,null)}}),a.a.createElement(w.b,{path:"/users",render:function(){return a.a.createElement(A,null)}})))},L=n(56),U=n.n(L),P=n(57),F=n.n(P),D=function(e){var t=e.linkItem,n=t.to,r=t.name;return a.a.createElement(d.b,{to:n,className:F.a.navLinkItem,activeClassName:F.a.active},r)},R=function(e){var t=e.navBar.links.map((function(e,t){return a.a.createElement("li",{className:U.a.listItem,key:t},a.a.createElement(D,{linkItem:e}))}));return a.a.createElement("nav",{className:U.a.nav},a.a.createElement("h3",null,"Navigation"),a.a.createElement("ul",null,t))},B=n(99),M=n.n(B),G=n(58),z=n.n(G),H=n(65),W=function(e){var t=e.friendItem,n=t.id,r=t.name,u=t.photos,c="/profile/".concat(n),i=u.small||u.large;return a.a.createElement("div",{className:z.a.friendItem},a.a.createElement(d.b,{to:c},a.a.createElement("div",{className:z.a.wrapAvatar},a.a.createElement(H.a,{image:i})),a.a.createElement("span",null,r)))},J=function(e){var t=e.friendsBlock.friends.map((function(e,t){return a.a.createElement("li",{key:t},a.a.createElement(W,{friendItem:e}))}));return a.a.createElement("div",{className:M.a.friendsBlock},a.a.createElement("h3",null,"Friends"),a.a.createElement("ul",null,t))};function V(){var e=Object(f.a)(["\n    padding: 16px\n    border-radius: 8px\n\n    grid-area: aside\n\n    background-color: #fff\n    box-shadow: 0px 0px 2px 0px #000\n"]);return V=function(){return e},e}var K=p.b.div(V()),X=Object(E.b)((function(e){return{navBar:(n=e,n.sidebarReducer.navBar),friendsBlock:(t=e,t.sidebarReducer.friendsBlock)};var t,n}),{})((function(e){var t=e.navBar,n=e.friendsBlock;return a.a.createElement(K,null,a.a.createElement(R,{navBar:t}),a.a.createElement(J,{friendsBlock:n}))})),Z=n(2),q={isAppInitialized:!0,errors:[]},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-IS-APP-INITIALIZED":return Object(Z.a)(Object(Z.a)({},e),{},{isAppInitialized:t.data.flag});default:return e}},$={colors:{main:"#4caf50",secondary:"#8bc34a"}};function Q(){var e=Object(f.a)(['\n    display: grid;\n    width: 1200px;\n    margin: 0 auto;\n\n    grid-template-areas: "header header" "aside content";\n    grid-template-rows: 60px 1fr;\n    grid-template-columns: 2fr 10fr;\n    grid-gap: 10px;\n']);return Q=function(){return e},e}var ee=p.b.div(Q()),te={setIsAppInitialized:function(e){return{type:"APP/SET-IS-APP-INITIALIZED",data:{flag:e}}},authMe:O.a},ne=Object(E.b)((function(e){return{isAppInitialized:e.app.isAppInitialized}}),te)(function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.authMe().then((function(){e.props.setIsAppInitialized(!0)}))}},{key:"render",value:function(){return this.props.isAppInitialized?a.a.createElement(d.a,null,a.a.createElement(p.a,{theme:$},a.a.createElement(ee,null,a.a.createElement(T,null),a.a.createElement(X,null),a.a.createElement(C,null)))):a.a.createElement(y.a,null)}}]),n}(a.a.Component)),re=n(26),ae=n(101),ue=n(91),ce=n(72),ie=n(84),oe={navBar:{links:[{to:"/profile",name:"Profile"},{to:"/dialogs",name:"Messages"},{to:"/users",name:"Users"}]},friendsBlock:{friends:[{name:"Mock name",id:1,uniqueUrlName:null,photos:{small:null,large:null},status:"mock status",followed:!1}]}},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;t.type,t.data;return e},le=n(90),fe=n(45),de=Object(re.c)({profileReducer:ce.b,dialogsReducer:ie.a,sidebarReducer:se,usersReducer:le.a,auth:O.b,app:Y,security:fe.a,form:ue.a}),pe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||re.d,me=Object(re.e)(de,pe(Object(re.a)(ae.a)));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(E.a,{store:me},a.a.createElement(ne,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},25:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return E})),n.d(t,"d",(function(){return O}));var r=n(4),a=n.n(r),u=n(8),c=n(2),i=n(7),o=function(){return i.a.get("auth/me").then((function(e){return e.data}))},s=function(e){return i.a.post("auth/login",e).then((function(e){return e.data}))},l=function(){return i.a.delete("auth/login")},f=n(35),d=n(97),p=n(30),m=n(45),h={email:null,login:null,id:null,isAuth:!1},v=function(e){return{type:"auth/SET_AUTH_DATA",data:{authData:e}}},g=function(e){return{type:"auth/SET_IS_AUTH",data:{flag:e}}},b=function(){return function(){var e=Object(u.a)(a.a.mark((function e(t){var n,r,u,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:n=e.sent,r=n.data,n.resultCode===p.a.SUCCESS&&(u=r.id,c=r.login,i=r.email,t(v({id:u,login:c,email:i})),t(g(!0)));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){var r,u,c,i,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s(e);case 3:r=t.sent,u=r.resultCode,c=r.messages,i=r.data,u===p.a.SUCCESS?(o=i.userId,n(v({id:o,email:null,login:null})),n(g(!0))):u===p.a.ANTI_BOT&&n(Object(m.b)()),n(Object(f.a)("login",{_error:c.join("\n")})),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n(Object(f.a)("login",{_error:d.nointernet}));case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},O=function(){return function(){var e=Object(u.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:n=h.isAuth,t(v({id:h.id,login:h.login,email:h.email})),t(g(n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_AUTH_DATA":return Object(c.a)(Object(c.a)({},e),t.data.authData);case"auth/SET_IS_AUTH":return Object(c.a)(Object(c.a)({},e),{},{isAuth:t.data.flag});default:return e}}},30:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e[e.SUCCESS=0]="SUCCESS",e[e.ANTI_BOT=10]="ANTI_BOT"}(r||(r={}))},36:function(e,t,n){"use strict";var r=n(0),a=n.n(r),u=n(98),c=n.n(u);t.a=function(){return a.a.createElement("div",{className:c.a.preLoader},"LOADING...")}},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u}));var r=function(e){return e.auth.id},a=function(e){return e.auth.isAuth},u=function(e){return e.auth.login}},45:function(e,t,n){"use strict";n.d(t,"b",(function(){return f}));var r=n(4),a=n.n(r),u=n(8),c=n(2),i=n(7),o=function(){return i.a.get("security/get-captcha-url")},s={captchaUrl:null},l=function(e){return{type:"security/SET-CAPTCHA-URL",data:{url:e}}},f=function(){return function(){var e=Object(u.a)(a.a.mark((function e(t){var n,r,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:n=e.sent,r=n.data,u=r.url,t(l(u));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.data;switch(n){case"security/SET-CAPTCHA-URL":return Object(c.a)(Object(c.a)({},e),{},{captchaUrl:r.url});default:return e}}},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return u}));var r=n(2),a=function(e,t,n,a){return e.map((function(e){return e[t]===n?Object(r.a)(Object(r.a)({},e),a):e}))},u=function(e,t){return e===t||!e&&!t}},56:function(e,t,n){e.exports={nav:"Navbar_nav__3WIx8"}},57:function(e,t,n){e.exports={navLinkItem:"NavLinkItem_navLinkItem__mEIwt",active:"NavLinkItem_active__pi9Ng"}},58:function(e,t,n){e.exports={friendItem:"FriendItem_friendItem__1jmse",wrapAvatar:"FriendItem_wrapAvatar__101pr"}},65:function(e,t,n){"use strict";var r=n(14),a=n(0),u=n.n(a),c=n(100),i=n.n(c),o=n(11);function s(){var e=Object(r.a)(["\n    max-width: 100%;\n    height: 100%;\n"]);return s=function(){return e},e}function l(){var e=Object(r.a)(["\n    overflow: hidden;\n    height: 100%;\n    border-radius: 50%;\n"]);return l=function(){return e},e}var f=o.b.div(l()),d=Object(o.b)(f)(s());t.a=function(e){var t=e.image,n=void 0===t?null:t;return u.a.createElement(f,null,u.a.createElement(d,{as:"img",src:n||i.a,alt:"Avatar"}))}},7:function(e,t,n){"use strict";var r=n(96),a=n.n(r);t.a=a.a.create({baseURL:"https://social-network.samuraijs.com/api/1.0"})},72:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"e",(function(){return b})),n.d(t,"c",(function(){return E})),n.d(t,"d",(function(){return O})),n.d(t,"h",(function(){return j})),n.d(t,"f",(function(){return S})),n.d(t,"g",(function(){return T}));var r=n(4),a=n.n(r),u=n(8),c=n(27),i=n(2),o=n(7),s=function(e){return o.a.get("profile/".concat(e))},l=function(e){return o.a.put("profile/",e)},f=function(e){return o.a.get("profile/status/".concat(e))},d=function(e){return o.a.put("profile/status?status=".concat(e))},p=function(e){var t=new FormData;return t.append("image",e),o.a.put("profile/photo",t,{headers:{"content-type":"multipart/form-data"}})},m=n(30),h="profile/ADD-POST",v={profile:{aboutMe:"",contacts:{facebook:null,website:null,vk:null,twitter:null,instagram:null,youtube:null,github:null,mainLink:null},lookingForAJob:!1,lookingForAJobDescription:"",fullName:"",userId:null,photos:{small:null,large:null}},status:"",posts:[{message:"I don't take this too seriously!",author:"Dmitry",likesCount:12},{message:"No way!",author:"Dmitry",likesCount:55}]},g=function(e){return{type:h,data:{postText:e}}},b=function(e){return{type:"profile/SET-USER-PROFILE",data:{profile:e}}},E=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){var r,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s(e);case 2:r=t.sent,u=r.data,n(b(u));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){var r,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:r=t.sent,u=r.data,n({type:"profile/SET-USER-STATUS",data:{status:u}});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){var r,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e);case 2:r=t.sent,u=r.data,console.log(u);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){var r,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(e);case 2:r=t.sent,u=r.data,n({type:"profile/SET-USER-STATUS",data:{photos:u}});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},T=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:r=t.sent,r.data.resultCode===m.a.SUCCESS&&E(e.userId);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.data;switch(n){case h:var a=r.postText;return Object(i.a)(Object(i.a)({},e),{},{posts:[{id:5,message:a,author:"Dmitry",likesCount:5}].concat(Object(c.a)(e.posts))});case"profile/SET-USER-PROFILE":var u=r.profile;return Object(i.a)(Object(i.a)({},e),{},{profile:u});case"profile/SET-USER-STATUS":var o=r.status;return Object(i.a)(Object(i.a)({},e),{},{status:o});case"profile/UPDATE-AVATAR-SUCCESS":var s={small:"fds",large:"fds"};return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:s})});default:return e}}},84:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var r=n(27),a=n(2),u={dialogs:[{name:"Ti",id:1,message:"What's the point?"},{name:"Kony",id:2,message:"Need this asap."}],dialog:{id:1,interlocutor:"Ti",messages:[{message:"This is rather a suggestive comment",author:"Dmitry"},{message:"You are lucky!",author:"Ti"},{message:"What's the point?",author:"Dmitry"}]}},c=function(e){return{type:"dialog/SEND-MESSAGE",data:{messageText:e}}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialog/SEND-MESSAGE":var n=t.data.messageText;return Object(a.a)(Object(a.a)({},e),{},{dialog:Object(a.a)(Object(a.a)({},e.dialog),{},{messages:[].concat(Object(r.a)(e.dialog.messages),[{message:n,author:"Dmitry"}])})});default:return e}}},90:function(e,t,n){"use strict";n.d(t,"d",(function(){return b})),n.d(t,"c",(function(){return S})),n.d(t,"e",(function(){return T})),n.d(t,"b",(function(){return w}));var r=n(4),a=n.n(r),u=n(8),c=n(27),i=n(2),o=n(7),s=function(e){return o.a.post("/follow/".concat(e))},l=function(e){return o.a.delete("/follow/".concat(e))},f=function(e,t){return o.a.get("users?count=".concat(e,"&page=").concat(t)).then((function(e){return e.data}))},d=n(52),p="users/FOLLOW",m={users:[],currentPage:1,itemsPerPage:5,totalItemsCount:0,isDataFetching:!1,isFollowingFetching:!1,followingFetchingList:[]},h=function(e){return{type:p,data:{id:e}}},v=function(e){return{type:"users/UNFOLLOW",data:{id:e}}},g=function(e){return{type:"users/SET-USERS",data:{users:e}}},b=function(e){return{type:"users/SET-CURRENT-PAGE",data:{page:e}}},E=function(e){return{type:"users/SET-DATA-FETCHING",data:{flag:e}}},O=function(e,t){return{type:"users/SET-IS-FOLLOWING-FETCHING",data:{flag:e,id:t}}},j=function(){var e=Object(u.a)(a.a.mark((function e(t,n,r,u){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(O(!0,u)),e.prev=1,e.next=4,n(u);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:r(u),t(O(!1,u));case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t,n,r,a){return e.apply(this,arguments)}}(),S=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(n,s,h,e);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},T=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(n,l,v,e);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e,t){return function(){var n=Object(u.a)(a.a.mark((function n(r){var u,c,i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(E(!0)),n.next=3,f(e,t);case 3:u=n.sent,c=u.items,i=u.totalCount,r(E(!1)),r(g(c)),r({type:"users/SET-TOTAL-ITEMS-COUNT",data:{count:i}}),r(b(t));case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.data;switch(n){case p:return Object(i.a)(Object(i.a)({},e),Object(d.a)(e.users,"id",r.id,{followed:!0}));case"users/UNFOLLOW":return Object(i.a)(Object(i.a)({},e),Object(d.a)(e.users,"id",r.id,{followed:!1}));case"users/SET-USERS":return Object(i.a)(Object(i.a)({},e),{},{users:r.users});case"users/SET-CURRENT-PAGE":return Object(i.a)(Object(i.a)({},e),{},{currentPage:r.page});case"users/SET-ITEMS-PER-PAGE":return Object(i.a)(Object(i.a)({},e),{},{itemsPerPage:r.count});case"users/SET-TOTAL-ITEMS-COUNT":return Object(i.a)(Object(i.a)({},e),{},{totalItemsCount:r.count});case"users/SET-DATA-FETCHING":return Object(i.a)(Object(i.a)({},e),{},{isDataFetching:r.flag});case"users/SET-IS-FOLLOWING-FETCHING":var a=r.flag,u=a?[].concat(Object(c.a)(e.followingFetchingList),[r.id]):e.followingFetchingList.filter((function(e){return e!==r.id}));return Object(i.a)(Object(i.a)({},e),{},{isFollowingFetching:a,followingFetchingList:Object(c.a)(u)});default:return e}}},97:function(e){e.exports=JSON.parse('{"nointernet":"No internet connection!"}')},98:function(e,t,n){e.exports={form:"PreLoader_form__1KiUV"}},99:function(e,t,n){e.exports={friendsBlock:"FriendsBlock_friendsBlock__1O8cg"}}},[[151,2,3]]]);
//# sourceMappingURL=main.2b7e9538.chunk.js.map