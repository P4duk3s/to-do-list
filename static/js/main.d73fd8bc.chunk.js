(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(1),c=n.n(i),a=n(3),s=n.n(a),o=(n(13),n(6)),l=n(4),u=n(5),r=n(8),d=n(7),h=(n(14),n(0)),j=function(t){Object(r.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(l.a)(this,n),(t=e.call(this)).onChangeValue=function(e){t.setState({value:e.target.value})},t.onAddItem=function(){t.setState((function(t){return{value:"",list:[t.value].concat(Object(o.a)(t.list))}}))},t.onRemoveItem=function(e){t.setState((function(t){return{list:t.list.filter((function(t,n){return e!==n}))}}))},t.state={value:"",list:[]},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"app-title",children:"TO DO LIST"}),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("input",{type:"text",placeholder:"Give me a task!",onChange:this.onChangeValue,value:this.state.value}),Object(h.jsx)("button",{className:"add-btn",type:"button",onClick:this.onAddItem,disabled:!this.state.value.length,children:"+"}),Object(h.jsx)("ul",{children:this.state.list.map((function(e,n){return Object(h.jsxs)("li",{children:[e,Object(h.jsx)("button",{className:"btn",onClick:function(){return t.onRemoveItem(n)},children:"X"})]},e)}))})]})]})}}]),n}(i.Component),b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),i(t),c(t),a(t),s(t)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(j,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.d73fd8bc.chunk.js.map