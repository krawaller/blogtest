(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{NJi9:function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),s=t.n(l),n=t("JRaF"),r=t("YFqc"),m=t.n(r),c={url:"creating-a-metalsmith-tag-plugin",id:"metalsmithtagplugin",title:"Creating a Metalsmith tag plugin",author:"david",tags:["metalsmith","handlebars"],date:"2014-08-09",excerpt:"A walkthrough of creating a tag plugin for Metalsmith and some accompanying Handlebars helpers",type:"post",folder:"/Users/davidwaller/Documents/gitreps/priv/blog2/sources/2014-08-09_metalsmithtagplugin",hasStaticContent:!0};a.default=function(){return s.a.createElement(n.a,{kind:"post",data:c,title:"Creating a Metalsmith tag plugin",summary:"A walkthrough of creating a tag plugin for Metalsmith and some accompanying Handlebars helpers"},s.a.createElement("p",null,"Tags: ",s.a.createElement(m.a,{href:"/tags/metalsmith"},s.a.createElement("a",null,"metalsmith"))," ",s.a.createElement(m.a,{href:"/tags/handlebars"},s.a.createElement("a",null,"handlebars"))),s.a.createElement("div",{className:"post","data-postid":"metalsmithtagplugin"},s.a.createElement("h3",{id:"metalsmith"},"Metalsmith"),s.a.createElement("p",null,"Metalsmith is mostly used as a static site generator, but it is really an all-purpose tool for iterating over files in a folder structure and doing something with them. Everything you want to do is a plugin. Here's what the Metalsmith code looks like for generating this blog:"),s.a.createElement("pre",null,s.a.createElement("code",{className:"hljs language-javascript"},"Metalsmith(__dirname)",s.a.createElement("br",null),"  .use(collections({",s.a.createElement("span",{className:"hljs-attr"},"articles"),": {",s.a.createElement("span",{className:"hljs-attr"},"pattern"),":",s.a.createElement("span",{className:"hljs-string"},"'posts/*.md'"),",",s.a.createElement("span",{className:"hljs-attr"},"sortBy"),":",s.a.createElement("span",{className:"hljs-string"},'"date"'),",",s.a.createElement("span",{className:"hljs-attr"},"reverse"),":",s.a.createElement("span",{className:"hljs-literal"},"true"),"}}))",s.a.createElement("br",null),"  .use(tags({",s.a.createElement("span",{className:"hljs-attr"},"path"),":",s.a.createElement("span",{className:"hljs-string"},'"tags/"'),"}))",s.a.createElement("br",null),"  .use(metallic({",s.a.createElement("span",{className:"hljs-attr"},"classPrefix"),":",s.a.createElement("span",{className:"hljs-string"},"''"),"}))",s.a.createElement("br",null),"  .use(markdown())",s.a.createElement("br",null),"  .use(sass({",s.a.createElement("span",{className:"hljs-attr"},"outputStyle"),":",s.a.createElement("span",{className:"hljs-string"},'"expanded"'),"}))",s.a.createElement("br",null),"  .use(permalinks({",s.a.createElement("span",{className:"hljs-attr"},"pattern"),": ",s.a.createElement("span",{className:"hljs-string"},"'posts/:title'"),"}))",s.a.createElement("br",null),"  .use(templates({",s.a.createElement("span",{className:"hljs-attr"},"engine"),": ",s.a.createElement("span",{className:"hljs-string"},"'handlebars'"),",",s.a.createElement("span",{className:"hljs-attr"},"directory"),": ",s.a.createElement("span",{className:"hljs-string"},"'./templates'"),"}))",s.a.createElement("br",null),"  .source(",s.a.createElement("span",{className:"hljs-string"},"'./files'"),")",s.a.createElement("br",null),"  .destination(",s.a.createElement("span",{className:"hljs-string"},"'../.'"),")",s.a.createElement("br",null),"  .build(",s.a.createElement("span",{className:"hljs-function"},s.a.createElement("span",{className:"hljs-keyword"},"function"),"(",s.a.createElement("span",{className:"hljs-params"},"e,h"),")"),"{",s.a.createElement("span",{className:"hljs-keyword"},"if")," (e){",s.a.createElement("span",{className:"hljs-keyword"},"throw")," e;}});")),s.a.createElement("p",null,"Each ",s.a.createElement("code",null,"use")," call is a plugin. Abstracting the actual file transformations to plugins is a very conscious call made by Metalsmith creators, serving to keep the Metalsmith API very small and lean."),s.a.createElement("p",null,"When we first set up this blog, there was no tag plugin for Metalsmith. Now there is a ",s.a.createElement("a",{href:"https://github.com/totocaster/metalsmith-tags"},"pretty solid-looking one"),", but we had to roll our own. This post walks through that code, serving mostly as a rundown of how to create a Metalsmith plugin."),s.a.createElement("p",null,"Note the second row, ",s.a.createElement("code",null,".use(tags({...}))"),". That's our plugin!"),s.a.createElement("h3",{id:"plugin-structure"},"Plugin structure"),s.a.createElement("p",null,"As you saw earlier, each plugin is a function that takes an options object as an argument. Here's the skeleton of a plugin's code:"),s.a.createElement("pre",null,s.a.createElement("code",{className:"hljs language-javascript"},"tags = ",s.a.createElement("span",{className:"hljs-function"},s.a.createElement("span",{className:"hljs-keyword"},"function"),"(",s.a.createElement("span",{className:"hljs-params"},"opts"),")"),"{",s.a.createElement("br",null),s.a.createElement("br",null),"  ",s.a.createElement("span",{className:"hljs-comment"},"// commonly set default options here"),s.a.createElement("br",null),s.a.createElement("br",null),"  ",s.a.createElement("span",{className:"hljs-comment"},"// return the function to be given to the `.use` call."),s.a.createElement("br",null),"  ",s.a.createElement("span",{className:"hljs-keyword"},"return")," ",s.a.createElement("span",{className:"hljs-function"},s.a.createElement("span",{className:"hljs-keyword"},"function"),"(",s.a.createElement("span",{className:"hljs-params"},"files, metalsmith, done"),")"),"{",s.a.createElement("br",null),s.a.createElement("br",null),"    ",s.a.createElement("span",{className:"hljs-comment"},"// ...do something with `files` here..."),s.a.createElement("br",null),s.a.createElement("br",null),"    done();",s.a.createElement("br",null),"  };",s.a.createElement("br",null),"};")),s.a.createElement("p",null,"The function returned by the plugin, which then is what is passed to ",s.a.createElement("code",null,"use"),", is given three arguments:"),s.a.createElement("ul",null,s.a.createElement("li",null,"The ",s.a.createElement("code",null,"files")," object given to the plugin function contains information of all processed files so far. The keys are the paths to the files. A plugin commonly loops through all these files, editing them accordingly. "),s.a.createElement("li",null,"The ",s.a.createElement("code",null,"metalsmith")," object exposes the Metalsmith API. A common usecase is to access the metadata through ",s.a.createElement("code",null,"metalsmith.metadata()")," and read/edit that."),s.a.createElement("li",null,"To allow plugins to do asynchronous stuff, control isn't handed back to Metalsmith until the ",s.a.createElement("code",null,"done")," callback is called.")),s.a.createElement("p",null,"Each ",s.a.createElement("code",null,"file")," object contains the contents of the file, and also information from optional YAML frontmatter. For example, below is the YAML for this very blog post. Note the ",s.a.createElement("code",null,"tags")," data - that's of course meant to be consumed by our tags plugin!"),s.a.createElement("pre",null,s.a.createElement("code",{className:"hljs language-yaml"},s.a.createElement("span",{className:"hljs-attr"},"title:")," ",s.a.createElement("span",{className:"hljs-string"},"Creating")," ",s.a.createElement("span",{className:"hljs-string"},"a")," ",s.a.createElement("span",{className:"hljs-string"},"Metalsmith")," ",s.a.createElement("span",{className:"hljs-string"},"tag")," ",s.a.createElement("span",{className:"hljs-string"},"plugin"),s.a.createElement("br",null),s.a.createElement("span",{className:"hljs-attr"},"author:")," ",s.a.createElement("span",{className:"hljs-string"},"David"),s.a.createElement("br",null),s.a.createElement("span",{className:"hljs-attr"},"tags:")," ",s.a.createElement("span",{className:"hljs-string"},"[metalsmith]"),s.a.createElement("br",null),s.a.createElement("span",{className:"hljs-attr"},"date:")," ",s.a.createElement("span",{className:"hljs-number"},"2014"),s.a.createElement("span",{className:"hljs-bullet"},"-08"),s.a.createElement("span",{className:"hljs-bullet"},"-09"),s.a.createElement("br",null),s.a.createElement("span",{className:"hljs-attr"},"excerpt:")," ",s.a.createElement("span",{className:"hljs-string"},"A")," ",s.a.createElement("span",{className:"hljs-string"},"walkthrough")," ",s.a.createElement("span",{className:"hljs-string"},"of")," ",s.a.createElement("span",{className:"hljs-string"},"creating")," ",s.a.createElement("span",{className:"hljs-string"},"a")," ",s.a.createElement("span",{className:"hljs-string"},"tag")," ",s.a.createElement("span",{className:"hljs-string"},"plugin")," ",s.a.createElement("span",{className:"hljs-string"},"for")," ",s.a.createElement("span",{className:"hljs-string"},"Metalsmith"),s.a.createElement("br",null),s.a.createElement("span",{className:"hljs-attr"},"template:")," ",s.a.createElement("span",{className:"hljs-string"},"post.html"))),s.a.createElement("h3",{id:"creating-the-tags-plugin"},"Creating the tags plugin"),s.a.createElement("p",null,"First we need to consider what we actually want our plugin to do. What we need are two things;"),s.a.createElement("ul",null,s.a.createElement("li",null,"We want to add a page for each tag, listing all posts for that tag. These files need to be generated by the plugin."),s.a.createElement("li",null,"We want to add a page listing all tags found in the blog, along with a post count for each tag. The plugin could generate this file, or simply expose data making such a file easy to set up. We've elected to go with the latter, as there's too many decisions going into creating such a file.")),s.a.createElement("p",null,"Here's the full code for our tag plugin, meeting the needs outlined above:"),s.a.createElement("pre",null,s.a.createElement("code",{className:"hljs language-javascript"},"tags = ",s.a.createElement("span",{className:"hljs-function"},s.a.createElement("span",{className:"hljs-keyword"},"function"),"(",s.a.createElement("span",{className:"hljs-params"},"opts"),")"),"{",s.a.createElement("br",null),"  opts = _.defaults(opts||{},{",s.a.createElement("span",{className:"hljs-attr"},"path"),":",s.a.createElement("span",{className:"hljs-string"},'"tags/"'),",",s.a.createElement("span",{className:"hljs-attr"},"yaml"),":{",s.a.createElement("span",{className:"hljs-attr"},"template"),":",s.a.createElement("span",{className:"hljs-string"},'"tag.html"'),"}});",s.a.createElement("br",null),"  ",s.a.createElement("span",{className:"hljs-keyword"},"return")," ",s.a.createElement("span",{className:"hljs-function"},s.a.createElement("span",{className:"hljs-keyword"},"function"),"(",s.a.createElement("span",{className:"hljs-params"},"files, metalsmith, done"),")"),"{",s.a.createElement("br",null),"    meta = metalsmith.metadata();",s.a.createElement("br",null),s.a.createElement("br",null),"    ",s.a.createElement("span",{className:"hljs-comment"},"// loop through all files, building an object with data about all tags"),s.a.createElement("br",null),"    ",s.a.createElement("span",{className:"hljs-keyword"},"var")," tags = _.reduce(files,",s.a.createElement("span",{className:"hljs-function"},s.a.createElement("span",{className:"hljs-keyword"},"function"),"(",s.a.createElement("span",{className:"hljs-params"},"memo,file,path"),")"),"{",s.a.createElement("br",null),"      ",s.a.createElement("span",{className:"hljs-comment"},"// make sure all tags are lower case, to prevent distinction between `Backbone` and `backbone`."),s.a.createElement("br",null),"      file.tags = file.tags ? _.map(file.tags,",s.a.createElement("span",{className:"hljs-function"},s.a.createElement("span",{className:"hljs-keyword"},"function"),"(",s.a.createElement("span",{className:"hljs-params"},"t"),")"),"{",s.a.createElement("span",{className:"hljs-keyword"},"return")," t.toLowerCase();}) : [];",s.a.createElement("br",null),"      ",s.a.createElement("span",{className:"hljs-comment"},"// loop through all tags found in the `tags` YAML data for this file"),s.a.createElement("br",null),"      _.each(file.tags,",s.a.createElement("span",{className:"hljs-function"},s.a.createElement("span",{className:"hljs-keyword"},"function"),"(",s.a.createElement("span",{className:"hljs-params"},"tag"),")"),"{",s.a.createElement("br",null),"        ",s.a.createElement("span",{className:"hljs-comment"},"// build a path for where the file for this tag is supposed to go"),s.a.createElement("br",null),"        key = opts.path+tag+",s.a.createElement("span",{className:"hljs-string"},'"/index.html"'),";",s.a.createElement("br",null),"        memo[key] = _.defaults({},memo[key],{",s.a.createElement("span",{className:"hljs-attr"},"tag"),":tag,",s.a.createElement("span",{className:"hljs-attr"},"posts"),":[],",s.a.createElement("span",{className:"hljs-attr"},"contents"),":",s.a.createElement("span",{className:"hljs-string"},'""'),"},opts.yaml);",s.a.createElement("br",null),"        memo[key].posts = _.sortBy(memo[key].posts.concat(file),",s.a.createElement("span",{className:"hljs-string"},'"date"'),").reverse();",s.a.createElement("br",null),"      });",s.a.createElement("br",null),"      ",s.a.createElement("span",{className:"hljs-keyword"},"return")," memo;",s.a.createElement("br",null),"    },{});",s.a.createElement("br",null),s.a.createElement("br",null),"    ",s.a.createElement("span",{className:"hljs-comment"},"// add this data to the files object, causing Metalsmith to create these files"),s.a.createElement("br",null),"    _.extend(files,tags);",s.a.createElement("br",null),s.a.createElement("br",null),"    ",s.a.createElement("span",{className:"hljs-comment"},"// add a taglist array to the metadata, to be consumed by a tagcloud type page"),s.a.createElement("br",null),"    meta.taglist = _.sortBy(_.reduce(tags,",s.a.createElement("span",{className:"hljs-function"},s.a.createElement("span",{className:"hljs-keyword"},"function"),"(",s.a.createElement("span",{className:"hljs-params"},"memo,tag"),")"),"{",s.a.createElement("br",null),"      ",s.a.createElement("span",{className:"hljs-keyword"},"return")," memo.concat({",s.a.createElement("span",{className:"hljs-attr"},"tag"),":tag.tag,",s.a.createElement("span",{className:"hljs-attr"},"count"),":tag.posts.length,",s.a.createElement("span",{className:"hljs-attr"},"posts"),":tag.posts});",s.a.createElement("br",null),"    },[]),",s.a.createElement("span",{className:"hljs-string"},'"count"'),").reverse();",s.a.createElement("br",null),s.a.createElement("br",null),"    ",s.a.createElement("span",{className:"hljs-comment"},"// also add the same data but with tagnames as key, for use by individual tag pages"),s.a.createElement("br",null),"    meta.tags = _.reduce(tags,",s.a.createElement("span",{className:"hljs-function"},s.a.createElement("span",{className:"hljs-keyword"},"function"),"(",s.a.createElement("span",{className:"hljs-params"},"memo,tag"),")"),"{",s.a.createElement("br",null),"      memo[tag.tag] = {",s.a.createElement("span",{className:"hljs-attr"},"tag"),":tag.tag,",s.a.createElement("span",{className:"hljs-attr"},"count"),":tag.posts.length,",s.a.createElement("span",{className:"hljs-attr"},"posts"),":tag.posts};",s.a.createElement("br",null),"      ",s.a.createElement("span",{className:"hljs-keyword"},"return")," memo;",s.a.createElement("br",null),"    },{});",s.a.createElement("br",null),s.a.createElement("br",null),"    ",s.a.createElement("span",{className:"hljs-comment"},"// note metalsmith that we are done!"),s.a.createElement("br",null),"    done();",s.a.createElement("br",null),"  };",s.a.createElement("br",null),"};")),s.a.createElement("h3",{id:"consuming-the-plugin"},"Consuming the plugin"),s.a.createElement("p",null,"First off, individual blog posts will print out their tags by simply reading from the YAML ",s.a.createElement("code",null,"tags")," array. All YAML data are available as local variables:"),s.a.createElement("pre",null,s.a.createElement("code",{className:"hljs language-html"},s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"div")," ",s.a.createElement("span",{className:"hljs-attr"},"class"),"=",s.a.createElement("span",{className:"hljs-string"},'"tags"'),">"),s.a.createElement("br",null),"Tags:",s.a.createElement("br",null),"{{#each tags}}",s.a.createElement("br",null),"  ",s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"span"),">"),s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"a")," ",s.a.createElement("span",{className:"hljs-attr"},"href"),"=",s.a.createElement("span",{className:"hljs-string"},"'../../tags/{{this}}/'"),">"),"{{this}}",s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"a"),">"),s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"span"),">"),s.a.createElement("br",null),"{{/each}}",s.a.createElement("br",null),s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"div"),">"))),s.a.createElement("p",null,"Our taglist page contains this code, using the ",s.a.createElement("code",null,"taglist")," metadata added by our plugin:"),s.a.createElement("pre",null,s.a.createElement("code",{className:"hljs language-html"},s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"div")," ",s.a.createElement("span",{className:"hljs-attr"},"class"),"=",s.a.createElement("span",{className:"hljs-string"},"'tags'"),">"),s.a.createElement("br",null),"  Tags:",s.a.createElement("br",null),"  {{#each this.taglist}}",s.a.createElement("br",null),"  ",s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"span"),">"),s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"a")," ",s.a.createElement("span",{className:"hljs-attr"},"href"),"=",s.a.createElement("span",{className:"hljs-string"},"'../tags/{{tag}}/'"),">"),"{{tag}} ({{count}})",s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"a"),">"),s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"span"),">"),s.a.createElement("br",null),"  {{/each}}",s.a.createElement("br",null),s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"div"),">"))),s.a.createElement("p",null,"The main code powering the individual tag pages will be in the html template file. Note that we added a default to the ",s.a.createElement("code",null,"opts")," object, telling Metalsmith to use a ",s.a.createElement("code",null,"tags.html")," template file for these pages. The ",s.a.createElement("code",null,"contents")," was merely set to an empty string. Even though there are no contents to the individual tag files we need to have a contents specification, otherwise Metalsmith will simply skip over generating a file."),s.a.createElement("p",null,"When the template file is used to create a tag file, it will have the tag name in a local ",s.a.createElement("code",null,"tag")," variable. Thus we can do the following in the template:"),s.a.createElement("pre",null,s.a.createElement("code",{className:"hljs language-html"},s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"div")," ",s.a.createElement("span",{className:"hljs-attr"},"class"),"=",s.a.createElement("span",{className:"hljs-string"},'"container"'),">"),s.a.createElement("br",null),"  Posts about {{tag}}:",s.a.createElement("br",null),s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"div"),">"))),s.a.createElement("h3",{id:"utilizing-handlebars-helpers"},"Utilizing Handlebars helpers"),s.a.createElement("p",null,"For the actual post list we created a Handlebars helper, to avoid having to put too much logic into the template file. Here's how we consume it in the template:"),s.a.createElement("pre",null,s.a.createElement("code",{className:"hljs language-html"},"{{#tagPosts tag}}",s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"article")," ",s.a.createElement("span",{className:"hljs-attr"},"class"),"=",s.a.createElement("span",{className:"hljs-string"},'"{{post_class}}"'),">"),s.a.createElement("br",null),"  ",s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"header")," ",s.a.createElement("span",{className:"hljs-attr"},"class"),"=",s.a.createElement("span",{className:"hljs-string"},'"post-header"'),">"),s.a.createElement("br",null),"    ",s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"h2")," ",s.a.createElement("span",{className:"hljs-attr"},"class"),"=",s.a.createElement("span",{className:"hljs-string"},'"post-title"'),">"),s.a.createElement("br",null),"      ",s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"a")," ",s.a.createElement("span",{className:"hljs-attr"},"href"),"=",s.a.createElement("span",{className:"hljs-string"},'"../../{{path}}"'),">"),"{{{title}}}",s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"a"),">"),s.a.createElement("br",null),"      ",s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"span")," ",s.a.createElement("span",{className:"hljs-attr"},"class"),"=",s.a.createElement("span",{className:"hljs-string"},'"post-meta"'),">"),s.a.createElement("br",null),"        ",s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"time")," ",s.a.createElement("span",{className:"hljs-attr"},"datetime"),"=",s.a.createElement("span",{className:"hljs-string"},'"{{date}}"'),">"),"{{moment date 'MMM Do YYYY'}}",s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"time"),">")," ",s.a.createElement("br",null),"      ",s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"span"),">"),s.a.createElement("br",null),"    ",s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"h2"),">"),s.a.createElement("br",null),"      ",s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"div")," ",s.a.createElement("span",{className:"hljs-attr"},"class"),"=",s.a.createElement("span",{className:"hljs-string"},"'tags'"),">"),s.a.createElement("br",null),"        By: ",s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"span"),">"),s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"a")," ",s.a.createElement("span",{className:"hljs-attr"},"href"),"=",s.a.createElement("span",{className:"hljs-string"},"'../../author/{{toLowerCase author}}'"),">"),"{{author}}",s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"a"),">"),s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"span"),">"),s.a.createElement("br",null),"      ",s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"div"),">"),s.a.createElement("br",null),"      ",s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"div")," ",s.a.createElement("span",{className:"hljs-attr"},"class"),"=",s.a.createElement("span",{className:"hljs-string"},'"tags"'),">"),s.a.createElement("br",null),"        Tags:",s.a.createElement("br",null),"        {{#each tags}}",s.a.createElement("br",null),"          ",s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"span"),">"),s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"a")," ",s.a.createElement("span",{className:"hljs-attr"},"href"),"=",s.a.createElement("span",{className:"hljs-string"},"'../../tags/{{this}}/'"),">"),"{{this}}",s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"a"),">"),s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"span"),">"),s.a.createElement("br",null),"        {{/each}}",s.a.createElement("br",null),"      ",s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"div"),">"),s.a.createElement("br",null),"  ",s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"header"),">"),s.a.createElement("br",null),"  ",s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"section")," ",s.a.createElement("span",{className:"hljs-attr"},"class"),"=",s.a.createElement("span",{className:"hljs-string"},'"post-excerpt"'),">"),s.a.createElement("br",null),"    ",s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"p"),">"),"{{excerpt}}",s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"p"),">"),s.a.createElement("br",null),"  ",s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"section"),">"),s.a.createElement("br",null),s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"article"),">"),s.a.createElement("br",null),s.a.createElement("br",null),"{{/tagPosts}}")),s.a.createElement("p",null,"And here's the source for the ",s.a.createElement("code",null,"tagPosts")," helper. It is run in the context of the Metalsmith session, which means that ",s.a.createElement("code",null,"this")," points to the metadata. Our tag plugin added a ",s.a.createElement("code",null,"tags")," option with tagname keys, so we can use that to access the post list for our particular tag:"),s.a.createElement("pre",null,s.a.createElement("code",{className:"hljs language-javascript"},"Handlebars.registerHelper(",s.a.createElement("span",{className:"hljs-string"},"'tagPosts'"),", ",s.a.createElement("span",{className:"hljs-function"},s.a.createElement("span",{className:"hljs-keyword"},"function"),"(",s.a.createElement("span",{className:"hljs-params"},"tagname, options"),") "),"{",s.a.createElement("br",null),"  ",s.a.createElement("span",{className:"hljs-keyword"},"return")," _.reduce(",s.a.createElement("span",{className:"hljs-keyword"},"this"),".tags[tagname].posts,",s.a.createElement("span",{className:"hljs-function"},s.a.createElement("span",{className:"hljs-keyword"},"function"),"(",s.a.createElement("span",{className:"hljs-params"},"memo,post"),")"),"{",s.a.createElement("br",null),"    ",s.a.createElement("span",{className:"hljs-keyword"},"return")," memo+options.fn(post);",s.a.createElement("br",null),"  },",s.a.createElement("span",{className:"hljs-string"},'""'),");",s.a.createElement("br",null),"});")),s.a.createElement("p",null,"For each call to ",s.a.createElement("code",null,"options.fn"),", our helper will use the given html in the context of a post object."),s.a.createElement("h3",{id:"author-portraits"},"Author portraits"),s.a.createElement("p",null,"While we're talking Handlebars, let's also look at how we deal with the author portraits! Each author on this blog has their own page with a short bio and a listing of that person's posts. This is generated from markdown files for all authors in the source directory that Metalsmith iterates over:"),s.a.createElement("p",null,s.a.createElement("img",{src:"../static/posts/creating-a-metalsmith-tag-plugin/img/authorfiles.png",alt:"author files"})),s.a.createElement("p",null,"Here's what the author file looks like for me (David):"),s.a.createElement("pre",null,s.a.createElement("code",{className:"hljs language-markdown"},"---",s.a.createElement("br",null),"template: author.html",s.a.createElement("br",null),s.a.createElement("span",{className:"hljs-section"},"portrait: David",s.a.createElement("br",null),"---"),s.a.createElement("br",null),s.a.createElement("span",{className:"xml"},s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"img")," ",s.a.createElement("span",{className:"hljs-attr"},"src"),"=",s.a.createElement("span",{className:"hljs-string"},"'./static/img/david.png'")," ",s.a.createElement("span",{className:"hljs-attr"},"class"),"=",s.a.createElement("span",{className:"hljs-string"},"'leftimg'")," />")),s.a.createElement("br",null),"David shares his time between working as a maths teacher for the Swedish Prison and Probation service, and working as a web programmer. His duties as the latter includes teaching a yearly course in advanced JavaScript at Linnaeus University.")),s.a.createElement("p",null,"Notice we're storing the author name in a ",s.a.createElement("code",null,"portrait")," YAML variable, and sending the contents to an ",s.a.createElement("code",null,"author.html")," template. Here's the relevant part of that template:"),s.a.createElement("pre",null,s.a.createElement("code",{className:"hljs language-html"},s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"section")," ",s.a.createElement("span",{className:"hljs-attr"},"class"),"=",s.a.createElement("span",{className:"hljs-string"},'"post-content"'),">"),"{{{contents}}}",s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"section"),">"),s.a.createElement("br",null),s.a.createElement("br",null),"{{#authorPosts portrait}}",s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"article")," ",s.a.createElement("span",{className:"hljs-attr"},"class"),"=",s.a.createElement("span",{className:"hljs-string"},'"{{post_class}}"'),">"),s.a.createElement("br",null),"  ",s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"header")," ",s.a.createElement("span",{className:"hljs-attr"},"class"),"=",s.a.createElement("span",{className:"hljs-string"},'"post-header"'),">"),s.a.createElement("br",null),"    ",s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"h2")," ",s.a.createElement("span",{className:"hljs-attr"},"class"),"=",s.a.createElement("span",{className:"hljs-string"},'"post-title"'),">"),s.a.createElement("br",null),"      ",s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"a")," ",s.a.createElement("span",{className:"hljs-attr"},"href"),"=",s.a.createElement("span",{className:"hljs-string"},'"../../{{path}}"'),">"),"{{{title}}}",s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"a"),">"),s.a.createElement("br",null),"      ",s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"span")," ",s.a.createElement("span",{className:"hljs-attr"},"class"),"=",s.a.createElement("span",{className:"hljs-string"},'"post-meta"'),">"),s.a.createElement("br",null),"        ",s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"time")," ",s.a.createElement("span",{className:"hljs-attr"},"datetime"),"=",s.a.createElement("span",{className:"hljs-string"},'"{{date}}"'),">"),"{{moment date 'MMM Do YYYY'}}",s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"time"),">")," ",s.a.createElement("br",null),"      ",s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"span"),">"),s.a.createElement("br",null),"    ",s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"h2"),">"),s.a.createElement("br",null),"      ",s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"div")," ",s.a.createElement("span",{className:"hljs-attr"},"class"),"=",s.a.createElement("span",{className:"hljs-string"},"'tags'"),">"),s.a.createElement("br",null),"        By: ",s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"span"),">"),s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"a")," ",s.a.createElement("span",{className:"hljs-attr"},"href"),"=",s.a.createElement("span",{className:"hljs-string"},"'../../author/{{toLowerCase author}}'"),">"),"{{author}}",s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"a"),">"),s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"span"),">"),s.a.createElement("br",null),"      ",s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"div"),">"),s.a.createElement("br",null),"      ",s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"div")," ",s.a.createElement("span",{className:"hljs-attr"},"class"),"=",s.a.createElement("span",{className:"hljs-string"},'"tags"'),">"),s.a.createElement("br",null),"        Tags:",s.a.createElement("br",null),"        {{#each tags}}",s.a.createElement("br",null),"          ",s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"span"),">"),s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"a")," ",s.a.createElement("span",{className:"hljs-attr"},"href"),"=",s.a.createElement("span",{className:"hljs-string"},"'../../tags/{{this}}/'"),">"),"{{this}}",s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"a"),">"),s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"span"),">"),s.a.createElement("br",null),"        {{/each}}",s.a.createElement("br",null),"      ",s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"div"),">"),s.a.createElement("br",null),"  ",s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"header"),">"),s.a.createElement("br",null),"  ",s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"section")," ",s.a.createElement("span",{className:"hljs-attr"},"class"),"=",s.a.createElement("span",{className:"hljs-string"},'"post-excerpt"'),">"),s.a.createElement("br",null),"    ",s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"p"),">"),"{{excerpt}}",s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"p"),">"),s.a.createElement("br",null),"  ",s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"section"),">"),s.a.createElement("br",null),s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"article"),">"),s.a.createElement("br",null),s.a.createElement("br",null),"{{else}}",s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("span",{className:"hljs-tag"},"<",s.a.createElement("span",{className:"hljs-name"},"section")," ",s.a.createElement("span",{className:"hljs-attr"},"class"),"=",s.a.createElement("span",{className:"hljs-string"},'"post-content"'),">"),"{{portrait}} hasn't written any posts yet!",s.a.createElement("span",{className:"hljs-tag"},"</",s.a.createElement("span",{className:"hljs-name"},"section"),">"),s.a.createElement("br",null),s.a.createElement("br",null),"{{/authorPosts}}")),s.a.createElement("p",null,"First we print the bio content using the ",s.a.createElement("code",null,"contents")," variable, and then we call an ",s.a.createElement("code",null,"authorPosts")," Handlebars helper. Note how we send two chunks of html to the helper - one to be used normally, then a fallback ",s.a.createElement("code",null,"else")," chunk. In the first chunk, we assume having access to a single post by this author."),s.a.createElement("p",null,"Here's the source code for this helper:"),s.a.createElement("pre",null,s.a.createElement("code",{className:"hljs language-javascript"},"Handlebars.registerHelper(",s.a.createElement("span",{className:"hljs-string"},"'authorPosts'"),", ",s.a.createElement("span",{className:"hljs-function"},s.a.createElement("span",{className:"hljs-keyword"},"function"),"(",s.a.createElement("span",{className:"hljs-params"},"authorname, options"),") "),"{",s.a.createElement("br",null),"  ",s.a.createElement("span",{className:"hljs-keyword"},"return")," _.reduce(",s.a.createElement("span",{className:"hljs-keyword"},"this"),".articles,",s.a.createElement("span",{className:"hljs-function"},s.a.createElement("span",{className:"hljs-keyword"},"function"),"(",s.a.createElement("span",{className:"hljs-params"},"memo,post"),")"),"{",s.a.createElement("br",null),"    ",s.a.createElement("span",{className:"hljs-keyword"},"return")," post.author === authorname ? memo + options.fn(post) : memo;",s.a.createElement("br",null),"  },",s.a.createElement("span",{className:"hljs-string"},'""'),") || options.inverse(",s.a.createElement("span",{className:"hljs-keyword"},"this"),");",s.a.createElement("br",null),"});")),s.a.createElement("p",null,"We loop through all posts, which thanks to the collection plugin can be accessed at ",s.a.createElement("code",null,"this.articles"),". Then for all posts who has the name of our author in the YAML author variable, we send that post to the first html chunk through ",s.a.createElement("code",null,"options.fn"),"."),s.a.createElement("p",null,"If there were no matching posts, we instead use the second html chunk through a call to ",s.a.createElement("code",null,"options.inverse"),". Notice how we're sending ",s.a.createElement("code",null,"this")," as a context, giving us access to the YAML ",s.a.createElement("code",null,"portrait")," variable in the second chunk.")),s.a.createElement("hr",null))}},akmO:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/creating-a-metalsmith-tag-plugin",function(){var e=t("NJi9");return{page:e.default||e}}])}},[["akmO",1,0]]]);