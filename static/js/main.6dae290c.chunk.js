(this["webpackJsonprs-client"]=this["webpackJsonprs-client"]||[]).push([[0],{42:function(n,t,e){},67:function(n,t,e){"use strict";e.r(t);var c=e(0),r=e.n(c),a=e(30),o=e.n(a),i=(e(42),e(13)),s=e(14),b=e(36),l=e(2),h=e(1);var j,d,u,x,p=function(){return Object(h.jsx)("div",{children:"Free"})},O=e(8),g=e(3),f=e(4),k=g.c.div(j||(j=Object(O.a)(["\n    width: 100%;\n    min-height: 70vh;\n\n    display: flex;\n    flex-direction: ",";\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n"])),Object(f.a)({flex:"column"},"column","row")),m=Object(g.c)(k)(d||(d=Object(O.a)(["\n    height: 50px;\n    min-height: 60px;\n    \n    font-size: 16px;\n    font-weight: 600;\n    line-height: 20px;\n"]))),w=g.c.img(u||(u=Object(O.a)(["\n    width: ","px;\n    height: ","px;\n"])),Object(f.b)("width",240),Object(f.b)("width",240)),v=function(n){var t=n.width;return Object(h.jsx)(w,{width:t,src:"./images/logo.png",alt:"logo"})},C=e(34),F=e.n(C).a.create({baseURL:"https://rs-go.herokuapp.com"}),y=g.c.img(x||(x=Object(O.a)(["\n    cursor: pointer;\n    width: 250px;\n"]))),S=function(n){var t=n.dark;return Object(h.jsx)(y,{src:"./images/naver-login-".concat(t?"dark":"light",".png"),alt:"\ub85c\uadf8\uc778",onClick:function(){var n,t;(n="/naver/login",F.get(n,t)).then((function(n){n.data.success&&(window.location.href=n.data.redirectUrl)}))}})},M={lightMode:{titleColor:"black",bgColor:"white"},darkMode:{titleColor:"white",bgColor:"black"}},T=Object(c.createContext)({isDark:!1,darkToggler:function(){}}),D=function(n){var t=n.children,e=Object(c.useState)("dark"===window.localStorage.getItem("rs_theme")),r=Object(s.a)(e,2),a=r[0],o=r[1];return Object(h.jsx)(T.Provider,{value:{isDark:a,darkToggler:function(){o(!a),window.localStorage.setItem("rs_theme",a?"light":"dark")}},children:Object(h.jsx)(g.a,{theme:a?M.darkMode:M.lightMode,children:t})})};var _=function(){var n=Object(c.useContext)(T).isDark;return Object(h.jsxs)(k,{flex:"column",children:[Object(h.jsx)(v,{}),Object(h.jsx)(S,{dark:n})]})},A=function(n){var t=n.role,e=n.name;return Object(h.jsxs)(k,{flex:"column",children:[Object(h.jsx)(v,{}),t&&t>9?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"\uc548\ub155\ud558\uc138\uc694 \uac00\uc871 \uc5ec\ub7ec\ubd84!"}),Object(h.jsxs)("h2",{children:["\ub2f9\uc2e0\uc740 ",e,"\ub2d8\uc774\uad70\uc694!"]})]}):Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("h1",{children:"Welcome!"})})]})};var I,P,U,X=function(n){return Object(h.jsx)(b.a,{basename:"/rs-client",children:Object(h.jsxs)(l.c,{children:[n.isAuth?Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(l.a,{exact:!0,path:"/",component:function(){return Object(h.jsx)(A,Object(i.a)({},n))}})}):Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(l.a,{exact:!0,path:"/",component:_})}),Object(h.jsx)(l.a,{exact:!0,path:"/free",component:p})]})})},z=g.c.button(I||(I=Object(O.a)(["\n    all: unset;\n    cursor: pointer;\n\n    width: ","px;\n    height: ","px;\n\n    border: 2px solid ",";\n    border-radius: ","px;\n    box-sizing: border-box;\n\n    color: ",";\n    \n    margin: 5px;\n    transition: 0.5s all;\n\n    text-align: center;\n    font-weight: 600;\n\n    &:hover {\n        background-color: ",";\n        color: ",";\n    }\n"])),Object(f.b)("width",100),Object(f.b)("height",40),Object(f.b)("base","black"),Object(f.a)("round",Object(f.c)("height",(function(n){return n?n/2:20})),0),Object(f.b)("base","black"),Object(f.b)("base","black"),Object(f.b)("sub","white")),E=g.c.label(P||(P=Object(O.a)(['\n    margin: 5px 15px 5px 15px;\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 26px;\n\n    input {\n        opacity: 0;\n        width: 0;\n        height: 0;\n    }\n    span {\n        position: absolute;\n        cursor: pointer;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: gray;\n        -webkit-transition: .4s;\n        transition: .4s;\n        border-radius: 34px;\n    }\n    span:before {\n        position: absolute;\n        content: "";\n        height: 20px;\n        width: 20px;\n        left: 3px;\n        bottom: 3px;\n        background-color: white;\n        -webkit-transition: .4s;\n        transition: .4s;\n        border-radius: 50%;\n    }\n    input:checked + span {\n      background-color: #FFF2CC;\n    }\n    input:focus + span {\n      box-shadow: 0 0 1px #FFF2CC;\n    }\n    input:checked + span:before {\n      -webkit-transform: translateX(34px);\n      -ms-transform: translateX(34px);\n      transform: translateX(34px);\n      background-color: black;\n    }\n']))),J=e(37),L="rs_n_a",R=new J.a,B=function(n){var t=n.dark;return Object(h.jsx)(z,{onClick:function(){R.remove(L,{path:"/"}),alert("\ub85c\uadf8\uc544\uc6c3 \ub418\uc5c8\uc2b5\ub2c8\ub2e4!"),window.location.href="/rs-client/"},base:t?"black":"white",sub:t?"white":"black",children:"\ub85c\uadf8\uc544\uc6c3"})},W=function(n){var t=Object(c.useContext)(T),e=t.isDark,r=t.darkToggler;return Object(h.jsxs)(m,{children:["\ud14c\ub9c8 \ubcc0\uacbd",Object(h.jsxs)(E,{children:[Object(h.jsx)("input",{type:"checkbox",checked:e,onChange:r}),Object(h.jsx)("span",{})]}),n.isAuth?Object(h.jsx)(B,{dark:e}):null]})},q=Object(g.b)(U||(U=Object(O.a)(["\n  body {\n    background: ",";\n    color: ",";\n    transition: all 0.50s linear;\n  }\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.titleColor}));var G=function(){var n=Object(c.useState)(),t=Object(s.a)(n,2),e=t[0],r=t[1],a=function(){var n=new URL(window.location.href),t={code:n.searchParams.get("code"),state:n.searchParams.get("state"),accessToken:R.get(L)};(function(n,t){return F.post(n,t)})("/naver/auth",t).then((function(n){var e;r(n.data),n.data.isAuth&&(e=n.data.accessToken,R.set(L,e,{path:"/"})),(t.code||t.state)&&window.history.pushState({},document.title,"/rs-client/")}))};return Object(c.useEffect)((function(){a()}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(q,{}),Object(h.jsx)(W,Object(i.a)({},e)),e?Object(h.jsx)(X,Object(i.a)({},e)):null]})};o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(D,{children:Object(h.jsx)(G,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.6dae290c.chunk.js.map