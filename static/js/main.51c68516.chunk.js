(this["webpackJsonppractice-react"]=this["webpackJsonppractice-react"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(4),r=a.n(c),s=(a(11),a(2));function m(e){var t=e.likes,a=e.id,n=e.dispatch,c=e.liked,r=e.setLiked;return i.a.createElement("div",null,c?i.a.createElement("span",{onClick:function(){n({type:"POST_DISLIKE",id:a}),r(!c)}},i.a.createElement("img",{src:"https://www.transparentpng.com/download/instagram-heart/CYXrdl-instagram-heart-hd-photo-png.png",alt:"",className:"red-heart-post"})):i.a.createElement("span",{onClick:function(){n({type:"POST_LIKE",id:a}),r(!c)}},i.a.createElement("img",{src:"https://www.transparentpng.com/download/instagram-heart/OtpLVC-heart-shaped-instagram-transparent-image.png",alt:"",className:"heart-post"}))," ",i.a.createElement("span",null,i.a.createElement("img",{src:"https://static.thenounproject.com/png/638755-200.png",alt:"",className:"comment-img"})),i.a.createElement("div",{className:"post-likes"},t," likes"))}function o(e){var t=e.id,a=e.dispatch,c=Object(n.useState)(""),r=Object(s.a)(c,2),m=r[0],o=r[1];return i.a.createElement("div",{className:"add-form"},i.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a({type:"ADD_COMMENT",id:t,text:m}),o("")}},i.a.createElement("input",{type:"text",placeholder:"Add a comment...",onChange:function(e){o(e.target.value)},value:m,required:!0}),i.a.createElement("button",{className:"add-btn"},"Post")))}function l(e){var t=e.postId,a=e.id,c=e.likes,r=e.dispatch,m=Object(n.useState)(!1),o=Object(s.a)(m,2),l=o[0],d=o[1];return i.a.createElement("div",null,l?i.a.createElement("span",null,i.a.createElement("img",{onClick:function(){r({type:"COMMENT_DISLIKE",id:t,commentId:a}),d(!l)},src:"https://www.transparentpng.com/download/instagram-heart/CYXrdl-instagram-heart-hd-photo-png.png",alt:"",className:"red-heart-comment"})):i.a.createElement("span",null,i.a.createElement("img",{onClick:function(){r({type:"COMMENT_LIKE",id:t,commentId:a}),d(!l)},src:"https://www.transparentpng.com/download/instagram-heart/OtpLVC-heart-shaped-instagram-transparent-image.png",alt:"",className:"heart-comment"})),i.a.createElement("div",{className:"comment-like"},c," likes"))}function d(e){var t=e.id,a=e.dispatch,n=e.postId;return i.a.createElement("div",null,i.a.createElement("button",{className:"delete-comment",onClick:function(){return a({type:"DELETE_COMMENT",id:n,commentId:t})}},"Delete"))}function p(e){var t=e.id,a=e.comments,n=e.dispatch;return i.a.createElement("div",{className:"comment-section"},i.a.createElement("div",null,a.map((function(e){return i.a.createElement("div",{key:e.id,className:"comment"},i.a.createElement("img",{className:"comment-image",src:e.img,alt:""})," ",i.a.createElement("span",{className:"text"},e.text),i.a.createElement(l,Object.assign({},e,{postId:t,dispatch:n})),i.a.createElement(d,Object.assign({},e,{dispatch:n,postId:t})))}))),i.a.createElement(o,Object.assign({},e,{dispatch:n})))}function u(e){var t=e.img,a=e.id,c=e.dispatch,r=Object(n.useState)(!1),o=Object(s.a)(r,2),l=o[0],d=o[1];return i.a.createElement("div",{className:"post"},i.a.createElement("img",{className:"post-img",onDoubleClick:function(){return function(e){l?(d(!l),c({type:"POST_DISLIKE",id:e})):(d(!l),c({type:"POST_LIKE",id:e}))}(a)},src:t,alt:""}),i.a.createElement(m,Object.assign({},e,{liked:l,setLiked:d})),i.a.createElement(p,e))}var g=a(5),h=a(1),E=function(e,t){switch(t.type){case"POST_LIKE":return e.map((function(e){return t.id===e.id?Object(h.a)({},e,{likes:e.likes+1}):e}));case"POST_DISLIKE":return e.map((function(e){return t.id===e.id?Object(h.a)({},e,{likes:e.likes-1}):e}));case"COMMENT_LIKE":return e.map((function(e){return t.id===e.id?Object(h.a)({},e,{comments:e.comments.map((function(e){return t.commentId===e.id?Object(h.a)({},e,{likes:e.likes+1}):e}))}):e}));case"COMMENT_DISLIKE":return e.map((function(e){return t.id===e.id?Object(h.a)({},e,{comments:e.comments.map((function(e){return t.commentId===e.id?Object(h.a)({},e,{likes:e.likes-1}):e}))}):e}));case"ADD_COMMENT":var a=Math.floor(50*Math.random()+1);return e.map((function(e){return t.id===e.id?Object(h.a)({},e,{comments:[].concat(Object(g.a)(e.comments),[{likes:0,text:t.text,id:a,img:"https://i.pravatar.cc/20?img="+a}])}):e}));case"DELETE_COMMENT":return e.map((function(e){return t.id===e.id?Object(h.a)({},e,{comments:e.comments.filter((function(e){return t.commentId!==e.id}))}):e}));default:return e}},k=[{id:4,userId:1,img:"https://i.pravatar.cc/300?img=18",likes:80,comments:[{id:1,userId:3,img:"https://i.pravatar.cc/20?img=47",likes:9,text:"Who are you talking with? :)"},{id:2,userId:6,img:"https://i.pravatar.cc/20?img=42",likes:5,text:"Noooo waay"}]},{id:3,userId:1,img:"https://i.pravatar.cc/300?img=46",likes:48,comments:[{id:1,userId:8,img:"https://i.pravatar.cc/20?img=14",likes:3,text:"Nice pic"},{id:2,userId:25,img:"https://i.pravatar.cc/20?img=6",likes:6,text:"Impressive"}]},{id:2,userId:1,img:"https://i.pravatar.cc/300?img=55",likes:63,comments:[]},{id:1,userId:1,img:"https://i.pravatar.cc/300?img=51",likes:52,comments:[{id:1,userId:3,img:"https://i.pravatar.cc/20?img=36",likes:45,text:"Nice hat"},{id:2,userId:6,img:"https://i.pravatar.cc/20?img=24",likes:31,text:"Looking good with this suit"}]}];function v(){var e=Object(n.useReducer)(E,k),t=Object(s.a)(e,2),a=t[0],c=t[1];return i.a.createElement("div",null,a.map((function(e){return i.a.createElement(u,Object.assign({key:e.id},e,{dispatch:c}))})))}a(12);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement((function(){return i.a.createElement("div",{className:"App"},i.a.createElement("img",{className:"logo",src:"https://www.transparentpng.com/download/logo-instagram/g3tCwR-logo-instagram-high-quality-pictures.png",alt:""}),i.a.createElement("h2",{className:"title"},"\ud835\udcd8\ud835\udcf7\ud835\udcfc\ud835\udcfd\ud835\udcea\ud835\udcf0\ud835\udcfb\ud835\udcea\ud835\udcf6"),i.a.createElement("div",{className:"wall"},i.a.createElement(v,null)))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.51c68516.chunk.js.map