(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),s=n.n(o),c=(n(14),n(1)),i=n(2),l=n(4),h=n(3),u=n(6),m=n(5),d=(n(15),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(this.props.monster.id,"?set=set2")}),r.a.createElement("h2",null," ",this.props.monster.name," "),r.a.createElement("p",null," ",this.props.monster.email," "))}}]),t}(a.Component)),p=(n(16),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card-list"},this.props.monsters.map((function(e){return r.a.createElement(d,{key:e.id,monster:e})})))}}]),t}(a.Component)),f=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),b=(n(18),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(h.a)(t).call(this))).state={monsters:[],searchField:""},e.handleChange=e.handleChange.bind(Object(u.a)(e)),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"handleChange",value:function(e){this.setState({searchField:e.target.value})}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null," Monsters Rolodex "),r.a.createElement(f,{placeholder:"Search Monsters",handleChange:this.handleChange}),r.a.createElement(p,{monsters:a}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.8b1079ea.chunk.js.map