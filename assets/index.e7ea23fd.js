import{a as h,d as s,j as t,g as d,h as m,i as v,b as f,A as N,k as p,M as C,B as k,r as o}from"./index.74ad95db.js";import{B as x}from"./index.esm.c6e5169c.js";function $(){const{authUser:e}=h();return s("div",{className:"write",children:[t("img",{src:e==null?void 0:e.avatar,alt:"profile"}),t("textarea",{}),t("button",{type:"button",children:"send"})]})}function g({comment:e}){return s("div",{className:"comment",children:[t("img",{src:e.author.avatar,alt:"avatar"}),s("div",{className:"commentContent",children:[t("div",{children:d(e.author)}),t("div",{children:e.text})]}),t("span",{className:"date",children:m(e.date)})]})}function P(){return t("div",{className:"commemts",children:s("div",{className:"containerComment",children:[t($,{}),v.map(e=>t(g,{comment:e},e.id))]})})}function b({author:e,date:a}){return s("div",{className:"header",children:[s("div",{className:"postAuthor",children:[t("div",{children:t("img",{src:e.avatar,alt:e.firstName})}),s("div",{className:"div",children:[t("p",{className:"postUser",children:d(e)}),t("p",{className:"postDate",children:m(a)})]})]}),t("div",{className:"actions",children:t(x,{})})]})}function y({images:e}){const{changeImages:a,openModal:r}=f(),i=n=>n===1?"fullWith":n===3?"resize":n>4?"gallery":"";function c(n,l){return n>4&&l===3}if(!e)return null;function u(n){a(n),r()}return t("div",{className:`images ${i(e.length||0)}`,children:e.map((n,l)=>c(e.length,l)?t("div",{onClick:()=>u(e),className:"image",style:{background:`url(${n.url}) center / cover`},children:s("span",{children:["+ ",e.length-l-1]})},n.id):t("div",{className:"image",style:{background:`url(${n.url}) center / cover`}},n.id))})}function A({liked:e,setLiked:a,showComments:r,setShowComments:i}){const c=()=>{};return s("div",{className:"reactions",children:[s("div",{className:"item",onClick:()=>a(!e),children:[e?t(N,{}):t(p,{}),"12 Likes"]}),s("div",{className:"item",onClick:()=>i(!r),children:[t(C,{}),"Comments"]}),s("div",{className:"item",onClick:()=>c(),children:[t(k,{}),"Share"]})]})}function H({post:e}){const[a,r]=o.exports.useState(!1),[i,c]=o.exports.useState(!1);return s("div",{className:"post card",children:[t(b,{author:e.author,date:e.date}),t("p",{className:"postText",children:e.text}),t(y,{images:e.images}),t(A,{liked:i,setLiked:c,showComments:a,setShowComments:r}),a&&t(P,{})]})}function L({posts:e}){return t("div",{className:"posts",children:[...e].sort((a,r)=>a.date<r.date?1:a.date>r.date?-1:0).map(a=>t(H,{post:a},a.id))})}export{L as P};
