(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{KcjN:function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),n=t.n(l),s=t("JRaF"),r=t("YFqc"),c=t.n(r),m={url:"a-react-app-demonstrating-css3-flexbox",id:"flexdemo",title:"A React app demonstrating CSS3 flexbox",author:"david",tags:["css","css3","flexbox","react","case study","underscore"],date:"2015-03-29",excerpt:"Presenting and dissecting a React-built CSS flexbox demonstration app",type:"post",folder:"/Users/davidwaller/Documents/gitreps/priv/blog2/sources/2015-03-29_flexdemo",hasStaticContent:!0};a.default=function(){return n.a.createElement(s.a,{kind:"post",data:m,title:"A React app demonstrating CSS3 flexbox",summary:"Presenting and dissecting a React-built CSS flexbox demonstration app"},n.a.createElement("p",null,"Tags: ",n.a.createElement(c.a,{href:"/tags/css"},n.a.createElement("a",null,"css"))," ",n.a.createElement(c.a,{href:"/tags/css3"},n.a.createElement("a",null,"css3"))," ",n.a.createElement(c.a,{href:"/tags/flexbox"},n.a.createElement("a",null,"flexbox"))," ",n.a.createElement(c.a,{href:"/tags/react"},n.a.createElement("a",null,"react"))," ",n.a.createElement(c.a,{href:"/tags/case_study"},n.a.createElement("a",null,"case study"))," ",n.a.createElement(c.a,{href:"/tags/underscore"},n.a.createElement("a",null,"underscore"))),n.a.createElement("div",{className:"post","data-postid":"flexdemo"},n.a.createElement("h3",{id:"exploring-flexbox"},"Exploring Flexbox"),n.a.createElement("p",null,"Like everyone else I've been playing around with the newly released ",n.a.createElement("a",{href:"http://facebook.github.io/react-native/"},"React Native"),". Buckets of fun! But I was quickly made aware that I still haven't really understood ",n.a.createElement("a",{href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/"},"flexbox"),", which React Native uses for layout."),n.a.createElement("p",null,"In order to alleviate that I built an interactive demo app where you can change the related props for the container and the children, and see first hand what the resulting layout looks like. This helped me a lot, so I share it here hoping it can help you too! You can try it out below, and it is also published ",n.a.createElement("a",{href:""},"here"),"."),n.a.createElement("iframe",{src:"https://blog.krawaller.se/flexboxdemo/index.html",style:{height:440,width:"100%"}}),n.a.createElement("p",null,"Putting the demo app together was a lot of fun! I used React (of course), and it turned out to be a great fit for this particular project. Throughout the rest of this post I'll walk through the ",n.a.createElement("a",{href:""},"source code"),"."),n.a.createElement("h3",{id:"components"},"Components"),n.a.createElement("p",null,"The app is made up by four components:"),n.a.createElement("p",null,n.a.createElement("img",{src:"../static/posts/a-react-app-demonstrating-css3-flexbox/img/flexboxcomp.jpg",alt:"components"})),n.a.createElement("p",null,"The top level ",n.a.createElement("code",null,"Demo")," component uses ",n.a.createElement("code",null,"Child")," to display the flex children. It also renders the two ",n.a.createElement("code",null,"Form"),"s, who in turn uses ",n.a.createElement("code",null,"Dropdown")," for each individual control."),n.a.createElement("h3",{id:"demo"},"Demo"),n.a.createElement("p",null,"Let's first look at the ",n.a.createElement("code",null,"Demo")," component. The file (",n.a.createElement("a",{href:"https://github.com/krawaller/flexboxdemo/blob/gh-pages/src/demo.js"},"demo.js"),") contains the regular class definition as well as the flex data blueprint:"),n.a.createElement("pre",null,n.a.createElement("code",{className:"hljs language-javascript"},n.a.createElement("span",{className:"hljs-keyword"},"var")," parentoptions = {",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-attr"},"flexDirection"),": [",n.a.createElement("span",{className:"hljs-string"},'"row"'),",",n.a.createElement("span",{className:"hljs-string"},'"row-reverse"'),",",n.a.createElement("span",{className:"hljs-string"},'"column"'),",",n.a.createElement("span",{className:"hljs-string"},'"column-reverse"'),"],",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-attr"},"justifyContent"),": [",n.a.createElement("span",{className:"hljs-string"},'"flex-start"'),",",n.a.createElement("span",{className:"hljs-string"},'"flex-end"'),",",n.a.createElement("span",{className:"hljs-string"},'"center"'),",",n.a.createElement("span",{className:"hljs-string"},'"space-between"'),",",n.a.createElement("span",{className:"hljs-string"},'"space-around"'),"],",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-attr"},"alignItems"),": [",n.a.createElement("span",{className:"hljs-string"},'"flex-start"'),",",n.a.createElement("span",{className:"hljs-string"},'"flex-end"'),",",n.a.createElement("span",{className:"hljs-string"},'"center"'),",",n.a.createElement("span",{className:"hljs-string"},'"stretch"'),",",n.a.createElement("span",{className:"hljs-string"},'"baseline"'),"],",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-attr"},"flexWrap"),": [",n.a.createElement("span",{className:"hljs-string"},'"nowrap"'),",",n.a.createElement("span",{className:"hljs-string"},'"wrap"'),",",n.a.createElement("span",{className:"hljs-string"},'"wrap-reverse"'),"],",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-attr"},"alignContent"),": [",n.a.createElement("span",{className:"hljs-string"},'"flex-start"'),",",n.a.createElement("span",{className:"hljs-string"},'"flex-end"'),",",n.a.createElement("span",{className:"hljs-string"},'"center"'),",",n.a.createElement("span",{className:"hljs-string"},'"stretch"'),",",n.a.createElement("span",{className:"hljs-string"},'"space-between"'),",",n.a.createElement("span",{className:"hljs-string"},'"space-around"'),"]",n.a.createElement("br",null),"};",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("span",{className:"hljs-keyword"},"var")," childoptions = {",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-attr"},"alignSelf"),": [",n.a.createElement("span",{className:"hljs-string"},'"auto"'),",",n.a.createElement("span",{className:"hljs-string"},'"flex-start"'),",",n.a.createElement("span",{className:"hljs-string"},'"flex-end"'),",",n.a.createElement("span",{className:"hljs-string"},'"center"'),",",n.a.createElement("span",{className:"hljs-string"},'"baseline"'),",",n.a.createElement("span",{className:"hljs-string"},'"stretch"'),"],",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-attr"},"flexGrow"),": _.range(",n.a.createElement("span",{className:"hljs-number"},"0"),",",n.a.createElement("span",{className:"hljs-number"},"6"),"),",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-attr"},"order"),": _.range(",n.a.createElement("span",{className:"hljs-number"},"-10"),",",n.a.createElement("span",{className:"hljs-number"},"11"),")",n.a.createElement("br",null),"};",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("span",{className:"hljs-keyword"},"var")," Demo = React.createClass({",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-attr"},"getInitialState"),": ",n.a.createElement("span",{className:"hljs-function"},n.a.createElement("span",{className:"hljs-keyword"},"function"),"(",n.a.createElement("span",{className:"hljs-params"}),")"),"{...},",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-attr"},"setValue"),": ",n.a.createElement("span",{className:"hljs-function"},n.a.createElement("span",{className:"hljs-keyword"},"function"),"(",n.a.createElement("span",{className:"hljs-params"}),")"),"{...},",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-attr"},"render"),": ",n.a.createElement("span",{className:"hljs-function"},n.a.createElement("span",{className:"hljs-keyword"},"function"),"(",n.a.createElement("span",{className:"hljs-params"}),")"),"{...}",n.a.createElement("br",null),"});")),n.a.createElement("p",null,"These are used to build the initial state of the component:"),n.a.createElement("pre",null,n.a.createElement("code",{className:"hljs language-javascript"},"getInitialState: ",n.a.createElement("span",{className:"hljs-function"},n.a.createElement("span",{className:"hljs-keyword"},"function"),"(",n.a.createElement("span",{className:"hljs-params"}),")"),"{",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-keyword"},"return")," {",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-attr"},"parent"),": _.mapValues(parentoptions,_.first),",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-attr"},"children"),": _.range(",n.a.createElement("span",{className:"hljs-number"},"1"),",",n.a.createElement("span",{className:"hljs-number"},"5"),").map(",n.a.createElement("span",{className:"hljs-function"},n.a.createElement("span",{className:"hljs-keyword"},"function"),"(",n.a.createElement("span",{className:"hljs-params"},"n"),")"),"{",n.a.createElement("br",null),"      ",n.a.createElement("span",{className:"hljs-keyword"},"return")," _.extend(_.mapValues(childoptions,_.first),{ ",n.a.createElement("span",{className:"hljs-attr"},"ID"),": n, ",n.a.createElement("span",{className:"hljs-attr"},"order"),": ",n.a.createElement("span",{className:"hljs-number"},"0"),", ",n.a.createElement("span",{className:"hljs-attr"},"flexGrow"),": ",n.a.createElement("span",{className:"hljs-number"},"0")," });",n.a.createElement("br",null),"    }),",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-attr"},"selectedId"),": ",n.a.createElement("span",{className:"hljs-number"},"0"),n.a.createElement("br",null),"  };",n.a.createElement("br",null),"}")),n.a.createElement("p",null,"As you can see we have three state variables:"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("code",null,"parent")," contains the currently selected container options. To begin with we select the first option from each array of property values."),n.a.createElement("li",null,n.a.createElement("code",null,"children")," contains an array with an option object for each child. Again we use the first option as default except for ",n.a.createElement("code",null,"flexGrow")," and ",n.a.createElement("code",null,"order"),". Each child is also given a unique id."),n.a.createElement("li",null,n.a.createElement("code",null,"selectedId")," contains the position of the currently selected child.")),n.a.createElement("p",null,"The app implements a bare-bones cursor, similar to ",n.a.createElement("a",{href:"https://github.com/dustingetz/react-cursor"},"React cursor")," or ",n.a.createElement("a",{href:"https://github.com/mquan/cortex"},"Cortex"),". The child components will get callbacks that when called update ",n.a.createElement("code",null,"Demo"),"'s state. This is implemented through the ",n.a.createElement("code",null,"setValues")," method:"),n.a.createElement("pre",null,n.a.createElement("code",{className:"hljs language-javascript"},"setValue: ",n.a.createElement("span",{className:"hljs-function"},n.a.createElement("span",{className:"hljs-keyword"},"function"),"(",n.a.createElement("span",{className:"hljs-params"}),")"),"{",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-keyword"},"var")," arr = ",n.a.createElement("span",{className:"hljs-built_in"},"Array"),".prototype.slice.call(",n.a.createElement("span",{className:"hljs-built_in"},"arguments"),"),",n.a.createElement("br",null),"      val = arr.pop(),",n.a.createElement("br",null),"      prop = arr.pop(),",n.a.createElement("br",null),"      clone = _.cloneDeep(",n.a.createElement("span",{className:"hljs-keyword"},"this"),".state),",n.a.createElement("br",null),"      pointer = clone;",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-keyword"},"while"),"(arr.length) pointer = pointer[arr.shift()];",n.a.createElement("br",null),"  pointer[prop] = _.isFinite(",n.a.createElement("span",{className:"hljs-built_in"},"parseInt"),"(val)) ? ",n.a.createElement("span",{className:"hljs-built_in"},"parseInt"),"(val) : val;",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-keyword"},"this"),".setState(clone);",n.a.createElement("br",null),"}")),n.a.createElement("p",null,"If we did ",n.a.createElement("code",null,'setValue("children",0,"alignSelf","stretch")'),", then that would equal ",n.a.createElement("code",null,'this.state["children"][0]["alignSelf"] = "stretch"'),"."),n.a.createElement("p",null,"Inside the ",n.a.createElement("code",null,"render")," method of ",n.a.createElement("code",null,"Demo")," we pass callbacks to the child components tied to ",n.a.createElement("code",null,"setValue"),", with the arguments partly prefilled."),n.a.createElement("pre",null,n.a.createElement("code",{className:"hljs language-javascript"},"  render: ",n.a.createElement("span",{className:"hljs-function"},n.a.createElement("span",{className:"hljs-keyword"},"function"),"(",n.a.createElement("span",{className:"hljs-params"}),")"),"{",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-keyword"},"var")," s = ",n.a.createElement("span",{className:"hljs-keyword"},"this"),".state, child = s.selectedId, cbmaker = ",n.a.createElement("span",{className:"hljs-built_in"},"Function"),".prototype.bind.bind(",n.a.createElement("span",{className:"hljs-keyword"},"this"),".setValue,",n.a.createElement("span",{className:"hljs-keyword"},"this"),");",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-keyword"},"return")," (",n.a.createElement("br",null),'      <div className="wrapper" key={Date()}>',n.a.createElement("br",null),'        <div className="explanation">...</div>',n.a.createElement("br",null),'        <div className="forms">',n.a.createElement("br",null),'          <Form title="container" options={parentoptions} values={s.parent} callback={cbmaker("parent")} />',n.a.createElement("br",null),'          <Form title={"child #"+(child+1)} options={childoptions} values={s.children[child]} callback={cbmaker("children",child)} />',n.a.createElement("br",null),"        </div>",n.a.createElement("br",null),'        <div className="container" style={s.parent}>',n.a.createElement("br",null),"          {s.children.map(function(c,n){",n.a.createElement("br",null),'            return <Child key={c.ID} def={c} selected={n===child} callback={cbmaker("selectedId",n)} />;',n.a.createElement("br",null),"          },this)}",n.a.createElement("br",null),"        </div>",n.a.createElement("br",null),"      </div>",n.a.createElement("br",null),"    );",n.a.createElement("br",null),"  }")),n.a.createElement("p",null,"Yes, I did feel rather smug when using ",n.a.createElement("code",null,"bind")," on ",n.a.createElement("code",null,"bind")," to define ",n.a.createElement("code",null,"cbmaker"),". :)"),n.a.createElement("h3",{id:"child"},"Child"),n.a.createElement("p",null,"The ",n.a.createElement("a",{href:"https://github.com/krawaller/flexboxdemo/blob/gh-pages/src/child.js"},n.a.createElement("code",null,"Child")," component")," is rather simple - it receives an object of styles which it should apply, and also write out."),n.a.createElement("pre",null,n.a.createElement("code",{className:"hljs language-javascript"},n.a.createElement("span",{className:"hljs-keyword"},"var")," Child = React.createClass({",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-attr"},"propTypes"),": {",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-attr"},"def"),": ptypes.objectOf(ptypes.oneOfType([ptypes.string, ptypes.number]))",n.a.createElement("br",null),"      .isRequired,",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-attr"},"selected"),": ptypes.bool,",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-attr"},"callback"),": ptypes.func.isRequired",n.a.createElement("br",null),"  },",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-attr"},"render"),": ",n.a.createElement("span",{className:"hljs-function"},n.a.createElement("span",{className:"hljs-keyword"},"function"),"(",n.a.createElement("span",{className:"hljs-params"}),") "),"{",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-keyword"},"var")," p = ",n.a.createElement("span",{className:"hljs-keyword"},"this"),".props;",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-keyword"},"return")," (",n.a.createElement("br",null),"      ",n.a.createElement("span",{className:"xml"},n.a.createElement("span",{className:"hljs-tag"},"<",n.a.createElement("span",{className:"hljs-name"},"div"),n.a.createElement("br",null),"        ",n.a.createElement("span",{className:"hljs-attr"},"onClick"),"=",n.a.createElement("span",{className:"hljs-string"},"{_.ary(p.callback,")," ",n.a.createElement("span",{className:"hljs-attr"},"0"),")}",n.a.createElement("br",null),"        ",n.a.createElement("span",{className:"hljs-attr"},"style"),"=",n.a.createElement("span",{className:"hljs-string"},"{p.def}"),n.a.createElement("br",null),"        ",n.a.createElement("span",{className:"hljs-attr"},"className"),"=",n.a.createElement("span",{className:"hljs-string"},"{"),'"',n.a.createElement("span",{className:"hljs-attr"},"child"),'" + (',n.a.createElement("span",{className:"hljs-attr"},"p.selected"),' ? " ',n.a.createElement("span",{className:"hljs-attr"},"selectedchild"),'" ',n.a.createElement("span",{className:"hljs-attr"},":"),' "")}',n.a.createElement("br",null),"      >"),n.a.createElement("br",null),"        {_.map(",n.a.createElement("br",null),"          p.def,",n.a.createElement("br",null),"          function(val, key) {",n.a.createElement("br",null),"            return (",n.a.createElement("br",null),"              ",n.a.createElement("span",{className:"hljs-tag"},"<",n.a.createElement("span",{className:"hljs-name"},"div")," ",n.a.createElement("span",{className:"hljs-attr"},"key"),"=",n.a.createElement("span",{className:"hljs-string"},"{key}"),">"),n.a.createElement("br",null),"                {key}: {val}",n.a.createElement("br",null),"              ",n.a.createElement("span",{className:"hljs-tag"},"</",n.a.createElement("span",{className:"hljs-name"},"div"),">"),n.a.createElement("br",null),"            );",n.a.createElement("br",null),"          },",n.a.createElement("br",null),"          this",n.a.createElement("br",null),"        )}",n.a.createElement("br",null),"      ",n.a.createElement("span",{className:"hljs-tag"},"</",n.a.createElement("span",{className:"hljs-name"},"div"),">")),n.a.createElement("br",null),"    );",n.a.createElement("br",null),"  }",n.a.createElement("br",null),"});")),n.a.createElement("p",null,"Notice how we must do ",n.a.createElement("code",null,"_.ary(p.callback,0)")," to prevent the click event from being passed along, messing up the ",n.a.createElement("code",null,"setValue")," call in ",n.a.createElement("code",null,"Demo"),"."),n.a.createElement("h3",{id:"form"},"Form"),n.a.createElement("p",null,"The ",n.a.createElement("a",{href:"https://github.com/krawaller/flexboxdemo/blob/gh-pages/src/form.js"},n.a.createElement("code",null,"Form")," component")," take an ",n.a.createElement("code",null,"options")," object, a ",n.a.createElement("code",null,"values")," object containing the currently selected options, a ",n.a.createElement("code",null,"title")," and a ",n.a.createElement("code",null,"callback"),". It will then use a ",n.a.createElement("code",null,"Dropdown")," component for each property in ",n.a.createElement("code",null,"options"),"/",n.a.createElement("code",null,"values"),"."),n.a.createElement("pre",null,n.a.createElement("code",{className:"hljs language-javascript"},n.a.createElement("span",{className:"hljs-keyword"},"var")," Form = React.createClass({",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-attr"},"propTypes"),": {",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-attr"},"options"),": ptypes.objectOf(",n.a.createElement("br",null),"      ptypes.arrayOf(ptypes.oneOfType([ptypes.string, ptypes.number]))",n.a.createElement("br",null),"    ).isRequired,",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-attr"},"values"),": ptypes.objectOf(ptypes.oneOfType([ptypes.string, ptypes.number]))",n.a.createElement("br",null),"      .isRequired,",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-attr"},"title"),": ptypes.string.isRequired,",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-attr"},"callback"),": ptypes.func.isRequired",n.a.createElement("br",null),"  },",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-attr"},"render"),": ",n.a.createElement("span",{className:"hljs-function"},n.a.createElement("span",{className:"hljs-keyword"},"function"),"(",n.a.createElement("span",{className:"hljs-params"}),") "),"{",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-keyword"},"var")," p = ",n.a.createElement("span",{className:"hljs-keyword"},"this"),".props;",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-keyword"},"return")," (",n.a.createElement("br",null),"      ",n.a.createElement("span",{className:"xml"},n.a.createElement("span",{className:"hljs-tag"},"<",n.a.createElement("span",{className:"hljs-name"},"div")," ",n.a.createElement("span",{className:"hljs-attr"},"className"),"=",n.a.createElement("span",{className:"hljs-string"},'"form"'),">"),n.a.createElement("br",null),"        ",n.a.createElement("span",{className:"hljs-tag"},"<",n.a.createElement("span",{className:"hljs-name"},"strong")," ",n.a.createElement("span",{className:"hljs-attr"},"key"),"=",n.a.createElement("span",{className:"hljs-string"},'"title"'),">"),"{p.title}",n.a.createElement("span",{className:"hljs-tag"},"</",n.a.createElement("span",{className:"hljs-name"},"strong"),">"),n.a.createElement("br",null),"        {_.mapValues(",n.a.createElement("br",null),"          p.options,",n.a.createElement("br",null),"          function(opts, name) {",n.a.createElement("br",null),"            return (",n.a.createElement("br",null),"              ",n.a.createElement("span",{className:"hljs-tag"},"<",n.a.createElement("span",{className:"hljs-name"},"div")," ",n.a.createElement("span",{className:"hljs-attr"},"key"),"=",n.a.createElement("span",{className:"hljs-string"},"{name}")," ",n.a.createElement("span",{className:"hljs-attr"},"className"),"=",n.a.createElement("span",{className:"hljs-string"},'"formrow"'),">"),n.a.createElement("br",null),"                ",n.a.createElement("span",{className:"hljs-tag"},"<",n.a.createElement("span",{className:"hljs-name"},"span"),">"),"{name}: ",n.a.createElement("span",{className:"hljs-tag"},"</",n.a.createElement("span",{className:"hljs-name"},"span"),">"),n.a.createElement("br",null),"                ",n.a.createElement("span",{className:"hljs-tag"},"<",n.a.createElement("span",{className:"hljs-name"},"Dropdown"),n.a.createElement("br",null),"                  ",n.a.createElement("span",{className:"hljs-attr"},"options"),"=",n.a.createElement("span",{className:"hljs-string"},"{opts}"),n.a.createElement("br",null),"                  ",n.a.createElement("span",{className:"hljs-attr"},"current"),"=",n.a.createElement("span",{className:"hljs-string"},"{p.values[name]}"),n.a.createElement("br",null),"                  ",n.a.createElement("span",{className:"hljs-attr"},"callback"),"=",n.a.createElement("span",{className:"hljs-string"},"{p.callback.bind(this,")," ",n.a.createElement("span",{className:"hljs-attr"},"name"),")}",n.a.createElement("br",null),"                />"),n.a.createElement("br",null),"              ",n.a.createElement("span",{className:"hljs-tag"},"</",n.a.createElement("span",{className:"hljs-name"},"div"),">"),n.a.createElement("br",null),"            );",n.a.createElement("br",null),"          },",n.a.createElement("br",null),"          this",n.a.createElement("br",null),"        )}",n.a.createElement("br",null),"      ",n.a.createElement("span",{className:"hljs-tag"},"</",n.a.createElement("span",{className:"hljs-name"},"div"),">"),n.a.createElement("br",null),"    );",n.a.createElement("br",null),"  }",n.a.createElement("br",null),"});"))),n.a.createElement("p",null,"Note how it passes ",n.a.createElement("code",null,"callback")," along to each ",n.a.createElement("code",null,"Dropdown")," but curries it further with the property name."),n.a.createElement("h3",{id:"dropdown"},"Dropdown"),n.a.createElement("p",null,"Finally, the ",n.a.createElement("code",null,"Dropdown")," component renders a ",n.a.createElement("code",null,"select")," control with the given values."),n.a.createElement("pre",null,n.a.createElement("code",{className:"hljs language-javascript"},n.a.createElement("span",{className:"hljs-keyword"},"var")," Dropdown = React.createClass({",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-attr"},"propTypes"),": {",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-attr"},"options"),": ptypes.arrayOf(ptypes.oneOfType([ptypes.string, ptypes.number]))",n.a.createElement("br",null),"      .isRequired,",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-attr"},"current"),": ptypes.oneOfType([ptypes.string, ptypes.number]).isRequired,",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-attr"},"callback"),": ptypes.func.isRequired",n.a.createElement("br",null),"  },",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-attr"},"changeOption"),": ",n.a.createElement("span",{className:"hljs-function"},n.a.createElement("span",{className:"hljs-keyword"},"function"),"(",n.a.createElement("span",{className:"hljs-params"},"e"),") "),"{",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-keyword"},"this"),".props.callback(",n.a.createElement("span",{className:"hljs-keyword"},"this"),".refs.sel.getDOMNode().value);",n.a.createElement("br",null),"  },",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-attr"},"render"),": ",n.a.createElement("span",{className:"hljs-function"},n.a.createElement("span",{className:"hljs-keyword"},"function"),"(",n.a.createElement("span",{className:"hljs-params"}),") "),"{",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-keyword"},"return")," (",n.a.createElement("br",null),"      ",n.a.createElement("span",{className:"xml"},n.a.createElement("span",{className:"hljs-tag"},"<",n.a.createElement("span",{className:"hljs-name"},"select"),n.a.createElement("br",null),"        ",n.a.createElement("span",{className:"hljs-attr"},"ref"),"=",n.a.createElement("span",{className:"hljs-string"},'"sel"'),n.a.createElement("br",null),"        ",n.a.createElement("span",{className:"hljs-attr"},"onChange"),"=",n.a.createElement("span",{className:"hljs-string"},"{this.changeOption}"),n.a.createElement("br",null),"        ",n.a.createElement("span",{className:"hljs-attr"},"defaultValue"),"=",n.a.createElement("span",{className:"hljs-string"},"{"),'"" + ',n.a.createElement("span",{className:"hljs-attr"},"this.props.current"),"}",n.a.createElement("br",null),"      >"),n.a.createElement("br",null),"        {this.props.options.map(function(o) {",n.a.createElement("br",null),"          return (",n.a.createElement("br",null),"            ",n.a.createElement("span",{className:"hljs-tag"},"<",n.a.createElement("span",{className:"hljs-name"},"option")," ",n.a.createElement("span",{className:"hljs-attr"},"key"),"=",n.a.createElement("span",{className:"hljs-string"},"{o}")," ",n.a.createElement("span",{className:"hljs-attr"},"value"),"=",n.a.createElement("span",{className:"hljs-string"},"{o}"),">"),n.a.createElement("br",null),"              {o}",n.a.createElement("br",null),"            ",n.a.createElement("span",{className:"hljs-tag"},"</",n.a.createElement("span",{className:"hljs-name"},"option"),">"),n.a.createElement("br",null),"          );",n.a.createElement("br",null),"        })}",n.a.createElement("br",null),"      ",n.a.createElement("span",{className:"hljs-tag"},"</",n.a.createElement("span",{className:"hljs-name"},"select"),">")),n.a.createElement("br",null),"    );",n.a.createElement("br",null),"  }",n.a.createElement("br",null),"});")),n.a.createElement("p",null,"Calling ",n.a.createElement("code",null,"callback")," with the updated value will result in a curried call to ",n.a.createElement("code",null,"setValue"),"."),n.a.createElement("h3",{id:"wrapping-up"},"Wrapping up"),n.a.createElement("p",null,"Since the demo app by its very nature needed to cascade data changes, it turned out to be a great fit for React. Then again, most apps are!"),n.a.createElement("p",null,"And although flexbox can seem intimidating at first, the model at its heart is really rather simple! Yet hugely powerful, and I think it was a stroke of genious to give it the task of layout in React Native. I've done my fare share of Titanium development, but feel that using flexbox seems superior in every way.")),n.a.createElement("hr",null))}},"sGQ/":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/a-react-app-demonstrating-css3-flexbox",function(){var e=t("KcjN");return{page:e.default||e}}])}},[["sGQ/",1,0]]]);