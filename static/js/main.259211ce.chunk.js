(this["webpackJsonppractice-react"]=this["webpackJsonppractice-react"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(4),r=a.n(c),s=(a(11),a(5)),m=a(1),l=a(2);function o(e){var t=e.likes,a=e.id,n=e.handlePostDislike,c=e.handlePostLike,r=e.liked,s=e.setLiked;return i.a.createElement("div",null,r?i.a.createElement("span",{onClick:function(){n(a),s(!r)}},i.a.createElement("img",{src:"https://www.transparentpng.com/download/instagram-heart/CYXrdl-instagram-heart-hd-photo-png.png",alt:"",className:"red-heart-post"})):i.a.createElement("span",{onClick:function(){c(a),s(!r)}},i.a.createElement("img",{src:"https://www.transparentpng.com/download/instagram-heart/OtpLVC-heart-shaped-instagram-transparent-image.png",alt:"",className:"heart-post"}))," ",i.a.createElement("span",null,i.a.createElement("img",{src:"https://static.thenounproject.com/png/638755-200.png",alt:"",className:"comment-img"})),i.a.createElement("div",{className:"post-likes"},t," likes"))}function d(e){var t=e.id,a=e.handleAddComment,c=Object(n.useState)(""),r=Object(l.a)(c,2),s=r[0],m=r[1];return i.a.createElement("div",{className:"add-form"},i.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(t,s),m("")}},i.a.createElement("input",{type:"text",placeholder:"Add a comment...",onChange:function(e){m(e.target.value)},value:s,required:!0}),i.a.createElement("button",{className:"add-btn"},"Post")))}function u(e){var t=e.postId,a=e.id,c=e.likes,r=e.handleLiked,s=e.handleDisliked,m=Object(n.useState)(!1),o=Object(l.a)(m,2),d=o[0],u=o[1];return i.a.createElement("div",null,d?i.a.createElement("span",null,i.a.createElement("img",{onClick:function(){s(t,a),u(!d)},src:"https://www.transparentpng.com/download/instagram-heart/CYXrdl-instagram-heart-hd-photo-png.png",alt:"",className:"red-heart-comment"})):i.a.createElement("span",null,i.a.createElement("img",{onClick:function(){r(t,a),u(!d)},src:"https://www.transparentpng.com/download/instagram-heart/OtpLVC-heart-shaped-instagram-transparent-image.png",alt:"",className:"heart-comment"})),i.a.createElement("div",{className:"comment-like"},c," likes"))}function p(e){var t=e.id,a=e.handleDelete,n=e.postId;return i.a.createElement("div",null,i.a.createElement("button",{className:"delete-comment",onClick:function(){return a(n,t)}},"Delete"))}function g(e){var t=e.id,a=e.comments,n=e.handleCommentLike,c=e.handleCommentDislike,r=e.handleDeleteComment;return i.a.createElement("div",{className:"comment-section"},i.a.createElement("div",null,a.map((function(e){return i.a.createElement("div",{key:e.id,className:"comment"},i.a.createElement("img",{className:"comment-image",src:e.img,alt:""})," ",i.a.createElement("span",{className:"text"},e.text),i.a.createElement(u,Object.assign({},e,{postId:t,handleLiked:n,handleDisliked:c})),i.a.createElement(p,Object.assign({},e,{handleDelete:r,postId:t})))}))),i.a.createElement(d,e))}function h(e){var t=e.img,a=e.handlePostLike,c=e.handlePostDislike,r=e.id,s=Object(n.useState)(!1),m=Object(l.a)(s,2),d=m[0],u=m[1];return i.a.createElement("div",null,i.a.createElement("img",{onDoubleClick:function(){return function(e){d?(u(!d),c(e)):(u(!d),a(e))}(r)},src:t,alt:""}),i.a.createElement(o,Object.assign({},e,{liked:d,setLiked:u})),i.a.createElement(g,e))}var k=[{id:4,userId:1,img:"https://i.pravatar.cc/300?img=18",likes:80,comments:[{id:1,userId:3,img:"https://i.pravatar.cc/20?img=47",likes:9,text:"Who are you talking with? :)"},{id:2,userId:6,img:"https://i.pravatar.cc/20?img=42",likes:5,text:"Noooo waay"}]},{id:3,userId:1,img:"https://i.pravatar.cc/300?img=46",likes:48,comments:[{id:1,userId:8,img:"https://i.pravatar.cc/20?img=14",likes:3,text:"Nice pic"},{id:2,userId:25,img:"https://i.pravatar.cc/20?img=6",likes:6,text:"Impressive"}]},{id:2,userId:1,img:"https://i.pravatar.cc/300?img=55",likes:63,comments:[]},{id:1,userId:1,img:"https://i.pravatar.cc/300?img=51",likes:52,comments:[{id:1,userId:3,img:"https://i.pravatar.cc/20?img=36",likes:45,text:"Nice hat"},{id:2,userId:6,img:"https://i.pravatar.cc/20?img=24",likes:31,text:"Looking good with this suit"}]}];function f(){var e=Object(n.useState)(k),t=Object(l.a)(e,2),a=t[0],c=t[1],r=function(e){c(a.map((function(t){return e===t.id?Object(m.a)({},t,{likes:t.likes+1}):t})))},o=function(e){c(a.map((function(t){return e===t.id?Object(m.a)({},t,{likes:t.likes-1}):t})))},d=function(e,t){console.log(e,t),c(a.map((function(a){return e===a.id?Object(m.a)({},a,{comments:a.comments.map((function(e){return t===e.id?Object(m.a)({},e,{likes:e.likes+1}):e}))}):a})))},u=function(e,t){console.log(e,t),c(a.map((function(a){return e===a.id?Object(m.a)({},a,{comments:a.comments.map((function(e){return t===e.id?Object(m.a)({},e,{likes:e.likes-1}):e}))}):a})))},p=Math.floor(50*Math.random()+1),g=function(e,t){c(a.map((function(a){return e===a.id?Object(m.a)({},a,{comments:[].concat(Object(s.a)(a.comments),[{likes:0,text:t,id:p,img:"https://i.pravatar.cc/20?img="+p}])}):a})))},f=function(e,t){console.log(e,t),c(a.map((function(a){return e===a.id?Object(m.a)({},a,{comments:a.comments.filter((function(e){return t!==e.id}))}):a})))};return i.a.createElement("div",null,a.map((function(e){return i.a.createElement(h,Object.assign({key:e.id},e,{handlePostDislike:o,handlePostLike:r,handleCommentLike:d,handleCommentDislike:u,handleAddComment:g,handleDeleteComment:f}))})))}a(12);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement((function(){return i.a.createElement("div",{className:"App"},i.a.createElement("img",{className:"logo",src:"https://www.transparentpng.com/download/logo-instagram/g3tCwR-logo-instagram-high-quality-pictures.png",alt:""}),i.a.createElement("h2",{className:"title"},"\ud835\udcd8\ud835\udcf7\ud835\udcfc\ud835\udcfd\ud835\udcea\ud835\udcf0\ud835\udcfb\ud835\udcea\ud835\udcf6"),i.a.createElement("div",{className:"wall"},i.a.createElement(f,null)))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.259211ce.chunk.js.map