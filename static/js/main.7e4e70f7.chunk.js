(this["webpackJsonpreact-data-bouncer-example"]=this["webpackJsonpreact-data-bouncer-example"]||[]).push([[0],{10:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);n(10);var r=n(0),s=n.n(r),a=n(6),o=n.n(a),c=n(1),u=n(2),i=n(5),p=n(4),l=n(3),h=n(8),b=function(e){Object(p.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={toy:{owner:{}}},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)({},this.state);e.toy.owner=this.props.user,console.log(this.props.user,"props inside mount should contain user"),this.setState(e)}},{key:"render",value:function(){return console.log(this.state),s.a.createElement("div",null,this.props.user.name||"Rodrigo")}}]),n}(r.Component),d=n(7),m=function(e){Object(p.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={mounted:!1},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;Object.keys(this.props).map((function(t){var n;"function"===typeof e.props[t]&&(e.props["".concat(t,"Args")]?(n=e.props)[t].apply(n,Object(d.a)(e.props["".concat(t,"Args")])):e.props[t]())})),this.setState({mounted:!0})}},{key:"render",value:function(){return this.state.mounted&&this.props.children}}]),n}(s.a.Component),f={id:1,name:"Jeff",age:17,purchases:[]},v=["1","2"],j=function(e){Object(p.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={user:{}},e.setUser=e.setUser.bind(Object(i.a)(e)),e}return Object(u.a)(n,[{key:"setUser",value:function(e,t){e.purchases=t,this.setState({user:e})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(m,{setUser:this.setUser,setUserArgs:[f,v]},s.a.createElement(b,{user:this.state.user})))}}]),n}(r.Component);o.a.render(s.a.createElement(j,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.7e4e70f7.chunk.js.map