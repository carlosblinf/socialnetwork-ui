import{r as i,y as h,j as e,b as s}from"./index.eec40bbb.js";import{a as t}from"./index.esm.5bb7819e.js";function p({filter:r}){const[n,c]=i.exports.useState([]);let d=r==="recently"?"a":"",l=r==="followers"?"b":"",o=r==="friendrequest"?"c":"",m=h.filter(a=>a.firstName.toLowerCase().indexOf(d.toLowerCase())!==-1&&a.lastName.toLowerCase().indexOf(l.toLowerCase())!==-1&&a.username.toLowerCase().indexOf(o.toLowerCase())!==-1);return i.exports.useEffect(()=>{c(m)},[r]),e("div",{className:"friendCard",children:s("div",{className:"friendCardContainer",children:[s("div",{className:"item cardW hoverScale",children:[s("div",{className:"friendContent",children:[e("img",{src:"https://randomuser.me/api/portraits/men/47.jpg",alt:"friend"}),s("div",{className:"friendData",children:[e("span",{children:"Michel Figueiras Anache"}),e("span",{children:"57 commun friends"})]})]}),e("div",{className:"actions",children:e("button",{children:e(t,{})})})]}),n.map(a=>s("div",{className:"item cardW hoverScale",children:[s("div",{className:"friendContent",children:[e("img",{src:a.avatar,alt:"friend"}),s("div",{className:"friendData",children:[e("span",{children:`${a.firstName} ${a.lastName}`}),s("span",{children:[a.communFriends," commun friends"]})]})]}),e("div",{className:"actions",children:e("button",{children:e(t,{})})})]},a.id))]})})}export{p as F};