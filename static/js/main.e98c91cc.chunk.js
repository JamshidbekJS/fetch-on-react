(this["webpackJsonp3-dars"]=this["webpackJsonp3-dars"]||[]).push([[0],{12:function(e,s,c){},15:function(e,s,c){"use strict";c.r(s);var t=c(1),n=c.n(t),r=c(6),a=c.n(r),d=c(2),l=c.n(d),i=c(3),j=c(4),o=(c(12),c(13),c(0));var b=function(){var e=Object(t.useState)([]),s=Object(j.a)(e,2),c=s[0],n=s[1],r=Object(t.useState)([]),a=Object(j.a)(r,2),d=a[0],b=a[1],m=Object(t.useState)([]),h=Object(j.a)(m,2),u=h[0],p=h[1];Object(t.useEffect)(Object(i.a)(l.a.mark((function e(){var s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return s=e.sent,e.next=5,s.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)}))));var x=function(){var e=Object(i.a)(l.a.mark((function e(s){var c,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts?userId=".concat(s.target.dataset.id));case 2:return c=e.sent,e.next=5,c.json();case 5:t=e.sent,b(t);case 7:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),O=function(){var e=Object(i.a)(l.a.mark((function e(s){var c,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts/".concat(s.target.dataset.id,"/comments"));case 2:return c=e.sent,e.next=5,c.json();case 5:t=e.sent,p(t);case 7:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"h2 text-center mt-3",children:"Users API"}),Object(o.jsxs)("div",{className:"row py-3 border border-2 border-secondary my-5",children:[Object(o.jsxs)("div",{className:"col-4",children:[Object(o.jsx)("h2",{className:"h3 m-0",children:"Users"}),Object(o.jsx)("p",{className:"user-count m-0 mb-2",children:"Count of users: "}),Object(o.jsx)("ul",{className:"list-unstyled",children:c.map((function(e){return Object(o.jsxs)("li",{className:"border border-info ps-2 border-2 mb-2 rounded list-unstyled",children:[Object(o.jsx)("a",{className:"user__name fw-bold fs-4","data-id":e.id,onClick:x,children:e.name}),Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"fw-bold",children:"email: "}),Object(o.jsx)("a",{className:"user__email",href:"",children:e.email})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"fw-bold",children:"country: "}),Object(o.jsx)("span",{className:"user__country",children:e.address.city})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"fw-bold",children:"company: "}),Object(o.jsx)("span",{className:"user__company",children:e.company.name})]})]})}))})]}),Object(o.jsxs)("div",{className:"col-4 border-start border-end border-secondary border-3",children:[Object(o.jsx)("h2",{className:"h3 m-0",children:"Posts"}),Object(o.jsx)("p",{className:"post-count m-0 mb-2",children:"Select user"}),Object(o.jsx)("ul",{className:"js-posts-list p-0 list-unstyled",children:d.map((function(e){return Object(o.jsxs)("li",{className:"border border-info ps-2 border-2 mb-2 rounded",children:[Object(o.jsx)("a",{className:"post__title fw-bold fs-4","data-id":e.id,onClick:O,children:e.title}),Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"fw-bold",children:"userId: "}),Object(o.jsx)("span",{className:"post__id",children:e.userId})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"fw-bold",children:"post: "}),Object(o.jsx)("span",{className:"user__post",children:e.body})]})]})}))})]}),Object(o.jsxs)("div",{className:"col-4",children:[Object(o.jsx)("h2",{className:"h3 m-0",children:"Comments"}),Object(o.jsx)("p",{className:"comment-count m-0 mb-2",children:"Select post"}),Object(o.jsx)("ul",{className:"js-comments-list list-unstyled",children:u.map((function(e){return Object(o.jsxs)("li",{className:"border border-info ps-2 border-2 mb-2 rounded",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"fw-bold",children:"title: "}),Object(o.jsx)("span",{className:"comment__name",children:e.name})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"fw-bold",children:"postId: "}),Object(o.jsx)("span",{children:e.postId})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"fw-bold",children:"email: "}),Object(o.jsx)("a",{href:"",children:e.email})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"fw-bold",children:"post: "}),Object(o.jsx)("span",{children:e.body})]})]})}))})]})]})]})};a.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e98c91cc.chunk.js.map