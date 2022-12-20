import{a as g,b as s,j as e,f,t as N,d as y,e as C,A as L,g as S,M as $,B as b,r as m,h as I,F as R,v as p,i as w,k as A}from"./index.52b92868.js";import{B as F}from"./index.esm.f54470ad.js";function O(){const{authUser:t}=g();return s("div",{className:"write",children:[e("img",{src:t==null?void 0:t.avatar,alt:"profile"}),e("textarea",{}),e("button",{type:"button",children:"send"})]})}function j({comment:t}){return s("div",{className:"comment",children:[e("img",{src:t.author.avatar,alt:"avatar"}),s("div",{className:"commentContent",children:[e("div",{children:f(t.author)}),e("div",{children:t.text})]}),e("span",{className:"date",children:N(t.date)})]})}function D(){return e("div",{className:"commemts",children:s("div",{className:"containerComment",children:[e(O,{}),y.map(t=>e(j,{comment:t},t.id))]})})}function H({author:t,date:a}){return s("div",{className:"header",children:[s("div",{className:"postAuthor",children:[e("div",{children:e("img",{src:t.avatar,alt:t.firstName})}),s("div",{className:"div",children:[e("p",{className:"postUser",children:f(t)}),e("p",{className:"postDate",children:N(a)})]})]}),e("div",{className:"actions",children:e(F,{})})]})}function T({images:t}){const{changeImages:a,openModal:i}=C(),c=n=>n===1?"fullWith":n===3?"resize":n>4?"gallery":"";function l(n,o){return n>4&&o===3}if(!t)return null;function h(n){a(n),i()}return e("div",{className:`images ${c(t.length||0)}`,children:t.map((n,o)=>l(t.length,o)?e("div",{onClick:()=>h(t),className:"image",style:{background:`url(${n.url}) center / cover`},children:s("span",{children:["+ ",t.length-o-1]})},n.id):e("div",{className:"image",style:{background:`url(${n.url}) center / cover`}},n.id))})}function W({liked:t,setLiked:a,showComments:i,setShowComments:c}){const l=()=>{};return s("div",{className:"reactions",children:[s("div",{className:"item",onClick:()=>a(!t),children:[t?e(L,{}):e(S,{}),"12 Likes"]}),s("div",{className:"item",onClick:()=>c(!i),children:[e($,{}),"Comments"]}),s("div",{className:"item",onClick:()=>l(),children:[e(b,{}),"Share"]})]})}function B({post:t}){const[a,i]=m.exports.useState(!1),[c,l]=m.exports.useState(!1);return s("div",{className:"post card",children:[e(H,{author:t.author,date:t.date}),e("p",{className:"postText",children:t.text}),e(T,{images:t.images}),e(W,{liked:c,setLiked:l,showComments:a,setShowComments:i}),a&&e(D,{})]})}function z({posts:t}){return e("div",{className:"posts",children:t.length?[...t].sort((a,i)=>a.date<i.date?1:a.date>i.date?-1:0).map(a=>e(B,{post:a},a.id)):e("span",{className:"noPost card",children:"You don't have any post, please Post it!"})})}function G(){const{authUser:t}=g(),[a,i]=m.exports.useState([]),{changeImages:c,openModal:l}=C(),h=I(),n=m.exports.useRef(null);m.exports.useEffect(()=>{},[a]);const o=({currentTarget:{files:r}})=>{r&&r.length&&i(d=>[...d,...r])},u=()=>a.map((r,d)=>({id:p(),url:URL.createObjectURL(r)})),x=()=>{a&&a.length&&(c(u()),l())},v=()=>{i([]),c([])},k=()=>{var d;const r=(d=n.current)==null?void 0:d.value;if(r&&(r==null?void 0:r.length)>0){const P={id:p(),author:t,date:new Date().toISOString(),text:r,images:[...u()]};h(w(P)),v(),n.current.value=""}else A.show({title:"Error",content:"Empty post text, share something"})};return e("div",{className:"share",children:s("div",{className:"container",children:[s("div",{className:"top",children:[s("div",{className:"left",children:[e("img",{src:t==null?void 0:t.avatar,alt:"user"}),e("input",{type:"text",placeholder:`What's new, ${t==null?void 0:t.firstName}?`,ref:n})]}),e("div",{className:"right",children:a.length>0&&s(R,{children:[e("img",{alt:"file",src:URL.createObjectURL(a[a.length-1]),onClick:()=>x()}),e("span",{onClick:()=>v(),children:"\xD7"})]})})]}),e("hr",{}),s("div",{className:"bottom",children:[s("div",{className:"left",children:[e("input",{type:"file",id:"file",style:{display:"none"},onChange:o}),e("label",{htmlFor:"file",children:s("div",{className:"item",children:[e("img",{src:"/image-svgrepo-com.svg",alt:"addImage"}),e("span",{children:"Add Image"})]})}),s("div",{className:"item",children:[e("img",{src:"/map-svgrepo-com.svg",alt:"place"}),e("span",{children:"Add Place"})]}),s("div",{className:"item",children:[e("img",{src:"/add-user-svgrepo-com.svg",alt:"tag friends"}),e("span",{children:"Tag Friends"})]})]}),e("div",{className:"right",children:e("button",{onClick:k,children:"Post it!"})})]})]})})}export{z as P,G as S};
