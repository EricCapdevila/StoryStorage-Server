(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t){},28:function(e,t,n){e.exports=n(56)},33:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(26),c=n.n(o),i=n(58),s=n(2),l=n(3),u=n(5),m=n(4),p=n(6),h=n(60),d=n(61),g=(n(33),n(57)),v=n(14),f=n.n(v),b=new(function(){function e(){Object(s.a)(this,e),this.auth=f.a.create({baseURL:"https://story-storage.herokuapp.com/",withCredentials:!0})}return Object(l.a)(e,[{key:"signup",value:function(e){var t=e.username,n=e.password;return this.auth.post("/auth/signup",{username:t,password:n}).then(function(e){return e.data})}},{key:"login",value:function(e){var t=e.username,n=e.password;return this.auth.post("/auth/login",{username:t,password:n}).then(function(e){return e.data})}},{key:"logout",value:function(){return this.auth.post("/auth/logout",{}).then(function(e){return e.data})}},{key:"me",value:function(){return this.auth.get("/auth/me").then(function(e){return e.data})}}]),e}()),E=r.a.createContext(),j=E.Consumer,O=E.Provider,y=function(e){return function(t){function n(){return Object(s.a)(this,n),Object(u.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(p.a)(n,t),Object(l.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement(j,null,function(n){return r.a.createElement(e,Object.assign({login:n.login,signup:n.signup,user:n.user,logout:n.logout,isLoggedin:n.isLoggedin},t.props))})}}]),n}(a.Component)},C=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isLoggedin:!1,user:null,isLoading:!0},n.signup=function(e){var t=e.username,a=e.password;b.signup({username:t,password:a}).then(function(e){n.setState({isLoggedin:!0,user:e})}).catch(function(e){var t=e.response.data;n.setState({message:t.statusMessage})})},n.login=function(e){var t=e.username,a=e.password;b.login({username:t,password:a}).then(function(e){n.setState({isLoggedin:!0,user:e})}).catch(function(){})},n.logout=function(){b.logout().then(function(){n.setState({isLoggedin:!1,user:null})}).catch(function(){})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.me().then(function(t){e.setState({isLoggedin:!0,user:t,isLoading:!1})}).catch(function(){e.setState({isLoggedin:!1,user:null,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.isLoggedin,a=e.user;return t?r.a.createElement("div",null,"Loading"):r.a.createElement(O,{value:{isLoggedin:n,user:a,login:this.login,logout:this.logout,signup:this.signup}},this.props.children)}}]),t}(a.Component),N=y(function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.user,n=e.logout,a=e.isLoggedin;return r.a.createElement("div",null,a?r.a.createElement("div",{className:"drop-down-styles"},r.a.createElement("p",{className:"drop-items"},"Loged in as: ",t.username),r.a.createElement("button",{className:"button drop-items",onClick:n},"Logout")):r.a.createElement("div",{className:"drop-down-styles"},r.a.createElement(g.a,{to:"/login",className:"drop-items"},"Login"),r.a.createElement(g.a,{to:"/signup",className:"drop-items"},"Signup")))}}]),t}(a.Component)),k=function(){return r.a.createElement("div",{className:"dropdown-content"},r.a.createElement(N,null))},S=y(function(){return r.a.createElement("nav",{className:"nav-style"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:"logoBright.png",alt:"StoryStorage Logo"})),r.a.createElement("div",{className:"nav-top-left"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(g.a,{to:"/projects",className:"link"},"Projects")),r.a.createElement("li",{className:"dropdown"},r.a.createElement(k,null),r.a.createElement("img",{src:"user.png",alt:"user"})))))}),P=n(12),w=y(function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},n.handleFormSubmit=function(e){e.preventDefault();var t=n.state,a=t.username,r=t.password;n.props.signup({username:a,password:r})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(P.a)({},a,r))},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return r.a.createElement("div",{className:"authBox"},r.a.createElement("form",{onSubmit:this.handleFormSubmit,className:"auth-form"},r.a.createElement("h2",null,"Signup"),r.a.createElement("hr",null),r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:t,onChange:this.handleChange}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:n,onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Signup",className:"button"}),r.a.createElement("p",{className:"underButton"},"Already have account?",r.a.createElement(g.a,{to:"/login"}," Login"))))}}]),t}(a.Component)),L=y(function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},n.handleFormSubmit=function(e){e.preventDefault();var t=n.state,a=t.username,r=t.password;n.props.login({username:a,password:r})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(P.a)({},a,r))},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return r.a.createElement("div",{className:"authBox"},r.a.createElement("form",{onSubmit:this.handleFormSubmit,className:"auth-form"},r.a.createElement("h2",null,"Login"),r.a.createElement("hr",null),r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:t,className:"input-text",onChange:this.handleChange}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:n,className:"input-text",onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Login",className:"button"})))}}]),t}(a.Component)),x=n(17),F=n(59);var R=y(function(e){var t=e.component,n=e.isLoggedin,a=Object(x.a)(e,["component","isLoggedin"]);return r.a.createElement(d.a,Object.assign({},a,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(F.a,{to:"/login"})}}))});var A=y(function(e){var t=e.component,n=e.isLoggedin,a=Object(x.a)(e,["component","isLoggedin"]);return r.a.createElement(d.a,Object.assign({},a,{render:function(e){return n?r.a.createElement(F.a,{to:"/projects"}):r.a.createElement(t,e)}}))}),D=new(function(){function e(){Object(s.a)(this,e),this.projects=f.a.create({baseURL:"https://story-storage.herokuapp.com/",withCredentials:!0})}return Object(l.a)(e,[{key:"getAll",value:function(){return this.projects.get("/projects/").then(function(e){return e.data})}},{key:"getOne",value:function(e){return this.projects.get("/projects/".concat(e)).then(function(e){return e.data})}},{key:"deleteOne",value:function(e){return this.projects.delete("/projects/".concat(e)).then(function(e){return console.log("res",e),e}).catch(function(e){return console.log(e)})}},{key:"updateOne",value:function(e,t){var n=t.title,a=t.genre,r=t.summary,o=t.chapters,c=t.characters,i=t.locations,s=t.timeline,l=t.misc,u=t.author,m=t.opinions,p=t.isPrivate;return this.projects.put("/projects/".concat(e),{title:n,genre:a,summary:r,chapters:o,characters:c,locations:i,timeline:s,misc:l,author:u,opinions:m,isPrivate:p}).then(function(e){return e.data}).catch(function(e){return console.log(e)})}},{key:"addOne",value:function(e){var t=e.title,n=e.genre,a=e.summary,r=e.isPrivate;return this.projects.post("/projects/",{title:t,genre:n,summary:a,isPrivate:r})}}]),e}()),M=y(function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault(),n.state.title,n.state.genre,n.state.summary?D.addOne(n.state).then(function(){n.setState({title:"",genre:"Other",summary:"",isPrivate:!1}),n.props.getProjects(),n.props.toggleForm()}):n.setState({title:"You need a title",genre:"Other",summary:"you need a description"})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(P.a)({},a,r))},n.handleRadioChange=function(e){n.setState({isPrivate:!n.state.isPrivate})},n.state={title:"",genre:"Other",summary:"",isPrivate:!1},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:this.handleFormSubmit,className:"auth-form absolute"},r.a.createElement("label",null,"Title:"),r.a.createElement("input",{type:"text",name:"title",value:this.state.title,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Summary:"),r.a.createElement("div",null,r.a.createElement("textarea",{maxLength:"300",name:"summary",value:this.state.summary,onChange:function(t){return e.handleChange(t)},cols:40,rows:10})),r.a.createElement("div",{className:"genre-private"},r.a.createElement("div",{className:"form-section"},r.a.createElement("label",null,"Genre:"),r.a.createElement("select",{name:"genre",value:this.state.genre,onChange:function(t){return e.handleChange(t)}},r.a.createElement("option",null,"--Choose One--"),r.a.createElement("option",{value:"Science Fiction"},"Science Fiction"),r.a.createElement("option",{value:"Fantasy"},"Fantasy"),r.a.createElement("option",{value:"Romance"},"Romance"),r.a.createElement("option",{value:"Historical"},"Historical"),r.a.createElement("option",{value:"Horror"},"Horror"),r.a.createElement("option",{value:"Crime"},"Crime"),r.a.createElement("option",{value:"Other"},"Other"))),r.a.createElement("div",{className:"form-section"},r.a.createElement("label",null,"Private:"),r.a.createElement("input",{type:"checkbox",className:"checkbox",onChange:function(t){return e.handleRadioChange(t)}}))),r.a.createElement("input",{type:"submit",value:"submit",class:"button"}))}}]),t}(a.Component)),U=y(function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).getMyProjects=function(){console.log("hola"),D.getAll().then(function(e){var t=e.filter(function(e){return e.author._id===n.props.user._id});n.setState({myProjects:t,originalProjects:t})})},n.toggleForm=function(){n.setState({showingForm:!n.state.showingForm})},n.state={myProjects:[],showingForm:!1},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getMyProjects()}},{key:"render",value:function(){return r.a.createElement("div",{className:"bookpage-background"},0===!this.state.myProjects.length?r.a.createElement("div",null,"There are no objects to display"):r.a.createElement("div",{className:"myProjects"},this.state.myProjects.map(function(e){return r.a.createElement("div",{key:e._id},r.a.createElement(g.a,{to:"/projects/".concat(e._id)},r.a.createElement("span",{className:"projectCards"},r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.summary," "))))})),this.state.showingForm?r.a.createElement("div",{className:"popup-back"},r.a.createElement("button",{onClick:this.toggleForm,className:"ex-button"},"x"),r.a.createElement(M,{getProjects:this.getMyProjects,toggleForm:this.toggleForm})):r.a.createElement("button",{onClick:this.toggleForm,className:"plus-button"},"+"))}}]),t}(a.Component)),H=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){var n=e.state.opinions.findIndex(function(e){return e._id===t}),a=e.state.opinions;a.splice(n,1),D.updateOne(e.props.id,{opinions:a}).then(function(t){e.setState({opinions:t.opinions})})},e.state={opinions:[]},e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;D.getOne(this.props.id).then(function(t){e.setState({opinions:t.opinions})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"general-opinions"},0===this.state.opinions.length?r.a.createElement("div",{className:"no-opinions"},r.a.createElement("p",null,"No one rated your project :( ")):r.a.createElement("div",{className:"opinions"},this.state.opinions.map(function(t){return r.a.createElement("div",{className:"oneOpinion"},r.a.createElement("p",{className:"user"},t.user),r.a.createElement("p",{className:"comment"},t.comment),r.a.createElement("p",{className:"rating"},t.rating),r.a.createElement("button",{className:"delete-opinion delete",onClick:function(){return e.handleChange(t._id)}},"x"))})))}}]),t}(a.Component),_=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={titlePlaceholder:"",title:"",summaryPlaceholder:"",summary:"",genre:"",isPrivate:"",doRedirect:!1},n.sendUpdates=function(e){e.preventDefault();var t=n.state,a={title:t.title,summary:t.summary,genre:t.genre,isPrivate:t.isPrivate};n.props.updateGeneral(a),n.props.sent()},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(P.a)({},a,r))},n.handleRadioChange=function(e){n.setState({isPrivate:!n.state.isPrivate})},n.privateValue=function(){return n.state.isPrivate},n.deleteProject=function(){n.props.deleteProject(n.props.id).then(function(){n.setState({doRedirect:!0})})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=document.querySelector("#title");t.addEventListener("input",function(n){e.setState({title:t.innerText})});var n=document.querySelector("#summary");n.addEventListener("input",function(t){e.setState({summary:n.innerText})});var a=this.props.project;this.setState({titlePlaceholder:a.title,summaryPlaceholder:a.summary,title:a.title,summary:a.summary,genre:a.genre,isPrivate:a.isPrivate})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"project-component"},r.a.createElement("form",{onSubmit:function(t){return e.sendUpdates(t)}},r.a.createElement("div",{className:"save-delete"},r.a.createElement("button",{type:"submit",value:"Save Changes",className:"editor-button save"},"Save"),r.a.createElement("button",{href:"/projects",onClick:this.deleteProject,className:"editor-button delete"},"Delete")),r.a.createElement("div",{className:"editable-box"},r.a.createElement("h1",{id:"title",contentEditable:!0},this.state.titlePlaceholder),r.a.createElement("p",{id:"summary",contentEditable:!0,className:"editable-long-text"},this.state.summaryPlaceholder),r.a.createElement("div",{className:"form-section"},r.a.createElement("label",null,"Private:"),r.a.createElement("input",{type:"checkbox",className:"checkbox",checked:this.privateValue(),onChange:function(t){return e.handleRadioChange(t)}})),r.a.createElement("div",{className:"form-section"},r.a.createElement("label",null,"Genre:"),r.a.createElement("select",{name:"genre",value:this.state.genre,onChange:function(t){return e.handleChange(t)}},r.a.createElement("option",null,"--Choose One--"),r.a.createElement("option",{value:"Science Fiction"},"Science Fiction"),r.a.createElement("option",{value:"Fantasy"},"Fantasy"),r.a.createElement("option",{value:"Romance"},"Romance"),r.a.createElement("option",{value:"Historical"},"Historical"),r.a.createElement("option",{value:"Horror"},"Horror"),r.a.createElement("option",{value:"Crime"},"Crime"),r.a.createElement("option",{value:"Other"},"Other"))))),r.a.createElement(H,{id:this.props.id}),this.state.doRedirect?r.a.createElement(F.a,{to:"/projects"}):null)}}]),t}(a.Component),T=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"YOU ARE IN THE Characters page"))}}]),t}(a.Component),B=n(27),G=n.n(B),I=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"LOCATIONS"))}}]),t}(a.Component),q=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Timeline"))}}]),t}(a.Component),J=function(e){function t(e){var n;Object(s.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).updateDB=function(){n.state.updatesReceived&&(D.updateOne(n.state.id,n.state.project).then(function(e){n.setState({project:e})}),n.setState({updatesReceived:!1}))},n.updateGeneral=function(e){n.setState({project:e})},n.delete=function(e){return D.deleteOne(e)},n.handleEditor=function(e){n.setState({render:e})},n.toggleUpdatesReceived=function(){n.setState({updatesReceived:!0})};var a=n.props.match.params.id;return n.state={project:null,id:a,render:"general",updatesReceived:!1},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;D.getOne(this.state.id).then(function(t){e.setState({project:t})})}},{key:"componentDidUpdate",value:function(){this.updateDB()}},{key:"render",value:function(){var e={project:this.state.project,updateGeneral:this.updateGeneral,deleteProject:this.delete,sent:this.toggleUpdatesReceived,id:this.props.match.params.id},t=this.state.render;switch(t){case"general":t=r.a.createElement(_,e);break;case"chapters":t=r.a.createElement(G.a,e);break;case"characters":t=r.a.createElement(T,e);break;case"locations":t=r.a.createElement(I,e);break;case"timeline":t=r.a.createElement(q,e)}return r.a.createElement("div",{className:"project-editor"},this.state.project?t:r.a.createElement("h2",null,"No Project to display"))}}]),t}(r.a.Component),V=n(19),Y=y(function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).checkAnonymus=function(){return n.props.isLoggedin?n.props.user.username:"Anonymus User"},n.handleChange=function(e){var t=Object(V.a)({},n.state.newOpinion,{user:n.checkAnonymus()}),a=e.target,r=a.value;t[a.name]=r,n.setState({newOpinion:Object(V.a)({},t)})},n.updateArray=function(){var e=n.state.opinions.concat(n.state.newOpinion);n.setState({opinions:e})},n.handleFormSubmit=function(e){n.state.newOpinion.comment&&(e.preventDefault(),D.updateOne(n.props.project._id,n.state)),n.setState({newOpinion:n.state.emptyFields})},n.state={opinions:[],newOpinion:{user:"",comment:"",rating:""},emptyFields:{user:"",comment:"",rating:""}},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({opinions:this.props.project.opinions})}},{key:"render",value:function(){var e=this,t=this.props.project,n=t.title,a=t.summary,o=t.genre,c=t.author;return r.a.createElement("section",{className:"project-comment-card"},r.a.createElement("div",{className:"project-description"},r.a.createElement("p",null,o),r.a.createElement("h3",null,n),r.a.createElement("p",null,"by ",c.username),r.a.createElement("p",null,a)),r.a.createElement("div",{className:"project-comments"},r.a.createElement("div",{className:"comments-only"},this.state.opinions.map(function(e){return r.a.createElement("div",{className:"oneOpinion",key:e._id},r.a.createElement("p",{className:"user"},e.user),r.a.createElement("p",{className:"comment"},e.comment),r.a.createElement("p",{className:"rating"},e.rating))})),r.a.createElement("div",null,r.a.createElement("form",{className:"add-comment",onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Rate"),r.a.createElement("input",{type:"number",name:"rating",max:"10",min:"0",onChange:function(t){return e.handleChange(t)},className:"input-text",value:this.state.newOpinion.rate}),r.a.createElement("label",null,"Comment"),r.a.createElement("input",{type:"text",name:"comment",onChange:function(t){return e.handleChange(t)},className:"input-text",value:this.state.newOpinion.comment}),r.a.createElement("button",{action:"submit",onClick:this.updateArray},"\u221a")))))}}]),t}(a.Component)),z=y(function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).getProjects=function(){D.getAll().then(function(e){var t=e.filter(function(e){return!e.isPrivate});n.setState({PublicProjects:t})})},n.state={PublicProjects:[]},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getProjects()}},{key:"render",value:function(){return console.log("publicProjects",this.state.publicProjects),r.a.createElement("div",{className:"bookshelf-background"},0===!this.state.PublicProjects.length?r.a.createElement("div",null,"There are no objects to display"):r.a.createElement("div",{className:"mainPage"},this.state.PublicProjects.map(function(e){return r.a.createElement(Y,{key:e._id,project:e})})))}}]),t}(a.Component)),K=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(C,null,r.a.createElement(S,null),r.a.createElement(h.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:z}),r.a.createElement(A,{path:"/signup",component:w}),r.a.createElement(A,{path:"/login",component:L}),r.a.createElement(R,{exact:!0,path:"/projects",component:U}),r.a.createElement(R,{path:"/projects/:id",component:J})))}}]),t}(a.Component);c.a.render(r.a.createElement(i.a,null,r.a.createElement(K,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.2bf00818.chunk.js.map