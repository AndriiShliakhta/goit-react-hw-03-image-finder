(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a.n(n),c=a(3),i=a(4),s=a(6),o=a(5),m=a(2),l=a(0),u=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={imageName:""},e.handleChange=function(t){var a=t.currentTarget;e.setState({imageName:a.value})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.imageName.trim()&&(e.props.onSubmit(e.state.imageName),e.setState({imageName:""}))},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(l.jsx)("header",{className:"Searchbar",children:Object(l.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(l.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(l.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(l.jsx)("input",{className:"SearchForm-input",type:"text",placeholder:"Search images and photos",value:this.state.imageName,onChange:this.handleChange})]})})}}]),a}(m.Component),h=u,b=a(19),j=a.n(b);var g=function(e){var t=e.webformatURL;return Object(l.jsx)("li",{className:"ImageGalleryItem",children:Object(l.jsx)("img",{src:t,alt:"",className:"ImageGalleryItem-image"})})},p=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={images:null,loading:!1,error:null,page:1},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;e.imageName!==this.props.imageName&&(this.setState({loading:!0,images:null}),j.a.get("https://pixabay.com/api/?q=".concat(this.props.imageName,"&page=").concat(this.state.page,"&key=23115860-3b173cd8cbd28dc69cb35b572&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){a.setState({images:e.data.hits})})).catch((function(e){return a.setState({error:e})})).finally(this.setState({loading:!1})))}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.loading,n=e.error;return Object(l.jsxs)("ul",{className:"ImageGallery",children:[n&&Object(l.jsx)("h1",{children:n.message}),a&&Object(l.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044e..."}),t&&t.map((function(e){return Object(l.jsx)(g,{webformatURL:e.webformatURL},e.id)}))]})}}]),a}(m.Component),d=p,f=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(l.jsx)("button",{type:"button",children:"Load More"})}}]),a}(m.Component),O=f,v=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={imageName:""},e.formSubmit=function(t){e.setState({imageName:t})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(h,{onSubmit:this.formSubmit}),Object(l.jsx)(d,{imageName:this.state.imageName}),Object(l.jsx)(O,{})]})}}]),a}(m.Component),y=v;a(43),a(44);r.a.render(Object(l.jsx)(y,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.3f96eb4c.chunk.js.map