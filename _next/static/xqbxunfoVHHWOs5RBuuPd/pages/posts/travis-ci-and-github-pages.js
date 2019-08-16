(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"2Nm1":function(e,a,t){"use strict";t.r(a);var s=t("q1tI"),l=t.n(s),n=t("JRaF"),r=t("YFqc"),c=t.n(r),m={url:"travis-ci-and-github-pages",id:"travisandghpages",title:"Travis CI and Github Pages",author:"david",tags:["travis","testing","jasmine","sinon"],date:"2014-08-08",excerpt:"How to set up Travis CI and testing for a ghpages app",type:"post",folder:"/Users/davidwaller/Documents/gitreps/priv/blog2/sources/2014-08-08_travisandghpages",hasStaticContent:!0};a.default=function(){return l.a.createElement(n.a,{kind:"post",data:m,title:"Travis CI and Github Pages",summary:"How to set up Travis CI and testing for a ghpages app"},l.a.createElement("p",null,"Tags: ",l.a.createElement(c.a,{href:"/tags/travis"},l.a.createElement("a",null,"travis"))," ",l.a.createElement(c.a,{href:"/tags/testing"},l.a.createElement("a",null,"testing"))," ",l.a.createElement(c.a,{href:"/tags/jasmine"},l.a.createElement("a",null,"jasmine"))," ",l.a.createElement(c.a,{href:"/tags/sinon"},l.a.createElement("a",null,"sinon"))),l.a.createElement("div",{className:"post","data-postid":"travisandghpages"},l.a.createElement("h3",{id:"the-what"},"The what"),l.a.createElement("p",null,"In this post I'll walk through how to set up Travis Continuous integration with Jasmine+Sinon testing for an app published to Github Pages. This is mainly directed at students taking the Linnaeus RIA course, but it might serve as a good approach for other developers too."),l.a.createElement("p",null,"The definition of continuous integration can be more complex, but in this context we merely aim to make our test suite run automatically whenever we push new code to the github repo. That's what ",l.a.createElement("a",{href:"https://travis-ci.org/"},"Travis CI")," does for us. After setting up Travis to watch our repo, we can navigate to ",l.a.createElement("code",null,"http://travis-ci.org/<githubusername>/<reponame>")," to see the results for each build:"),l.a.createElement("p",null,l.a.createElement("a",{href:"https://travis-ci.org/krawaller/algol3/builds"},l.a.createElement("img",{src:"../static/posts/travis-ci-and-github-pages/img/travisresults.png",alt:"travis result"}))),l.a.createElement("h3",{id:"the-why"},"The why"),l.a.createElement("p",null,"Having Travis running the test suite whenever we push code to Github is not a very big win in itself. After all, if I have a test suite, I'm most likely running it on my own machine, and will catch errors before pushing the code to Github."),l.a.createElement("p",null,"But Github has a Travis hook for pull requests, which means that whenever someone creates a pull request to my repo, the Travis results will be shown right in the pull request:"),l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/krawaller/algol3/pull/1/files"},l.a.createElement("img",{src:"../static/posts/travis-ci-and-github-pages/img/sillypullrequest.png",alt:"silly pull request"}))),l.a.createElement("p",null,"Clicking the warning will take us to a log dump at Travis, where we can see exactly what went wrong:"),l.a.createElement("p",null,l.a.createElement("a",{href:"https://travis-ci.org/krawaller/algol3/jobs/32018043"},l.a.createElement("img",{src:"../static/posts/travis-ci-and-github-pages/img/travisfail.png",alt:"travis fail"}))),l.a.createElement("p",null,"Apparently, the proposed change is a very bad idea. Without Travis I'd have to run the requested change on my machine to see if the test suite held up, but now I'm immediately (well, after a few minutes) warned by Travis."),l.a.createElement("h3",{id:"the-how"},"The how"),l.a.createElement("p",null,"First off we need to tell Travis to watch our repository. We do that by signing in to ",l.a.createElement("a",{href:"http://travis-ci.org"},"http://travis-ci.org")," (note that ",l.a.createElement("a",{href:"http://travis-ci.com"},"http://travis-ci.com")," is for private repoes) using our Github credentials, and then flicking the switch for the repo in question:"),l.a.createElement("p",null,l.a.createElement("img",{src:"../static/posts/travis-ci-and-github-pages/img/travisflick.png",alt:"travis activation"})),l.a.createElement("p",null,"By default Travis will run the ",l.a.createElement("code",null,"test")," script specified in ",l.a.createElement("code",null,"package.json")," in the root of our repo. Here's the relevant parts of that file for Algol3:"),l.a.createElement("pre",null,l.a.createElement("code",{className:"hljs language-json"},"{",l.a.createElement("br",null),"  ",l.a.createElement("span",{className:"hljs-attr"},'"dependencies"'),": {",l.a.createElement("br",null),"    ",l.a.createElement("span",{className:"hljs-attr"},'"lodash"'),": ",l.a.createElement("span",{className:"hljs-string"},'">=2.4.1"'),l.a.createElement("br",null),"  },",l.a.createElement("br",null),"  ",l.a.createElement("span",{className:"hljs-attr"},'"scripts"'),": {",l.a.createElement("br",null),"    ",l.a.createElement("span",{className:"hljs-attr"},'"test"'),": ",l.a.createElement("span",{className:"hljs-string"},'"jasmine-node test"'),l.a.createElement("br",null),"  },",l.a.createElement("br",null),"  ",l.a.createElement("span",{className:"hljs-attr"},'"devDependencies"'),": {",l.a.createElement("br",null),"    ",l.a.createElement("span",{className:"hljs-attr"},'"jasmine-node"'),": ",l.a.createElement("span",{className:"hljs-string"},'">=1.14.5"'),",",l.a.createElement("br",null),"    ",l.a.createElement("span",{className:"hljs-attr"},'"jasmine-sinon"'),": ",l.a.createElement("span",{className:"hljs-string"},'"=0.3.2"'),",",l.a.createElement("br",null),"    ",l.a.createElement("span",{className:"hljs-attr"},'"sinon"'),": ",l.a.createElement("span",{className:"hljs-string"},'">=1.10.3"'),l.a.createElement("br",null),"  }",l.a.createElement("br",null),"}",l.a.createElement("br",null))),l.a.createElement("p",null,"Here we see that the command Travis will run is ",l.a.createElement("code",null,"jasmine-node test"),". All dependencies will be automatically installed by Travis using npm."),l.a.createElement("p",null,"But we also need some Travis-specific settings. These are housed in a ",l.a.createElement("code",null,".travis.yml")," file, also to be put in the root of the repo:"),l.a.createElement("pre",null,l.a.createElement("code",{className:"hljs language-yaml"},l.a.createElement("span",{className:"hljs-attr"},"language:")," ",l.a.createElement("span",{className:"hljs-string"},"node_js"),l.a.createElement("br",null),l.a.createElement("span",{className:"hljs-attr"},"node_js:"),l.a.createElement("br",null),l.a.createElement("span",{className:"hljs-bullet"},"  -")," ",l.a.createElement("span",{className:"hljs-string"},'"0.11"'),l.a.createElement("br",null),l.a.createElement("span",{className:"hljs-bullet"},"  -")," ",l.a.createElement("span",{className:"hljs-string"},'"0.10"'),l.a.createElement("br",null),l.a.createElement("span",{className:"hljs-bullet"},"  -")," ",l.a.createElement("span",{className:"hljs-string"},'"0.8"'),l.a.createElement("br",null),l.a.createElement("span",{className:"hljs-attr"},"before_install:"),l.a.createElement("br",null),l.a.createElement("span",{className:"hljs-bullet"},"  -")," ",l.a.createElement("span",{className:"hljs-string"},'"npm i -g jasmine-node"'),l.a.createElement("br",null),l.a.createElement("span",{className:"hljs-attr"},"branches:"),l.a.createElement("br",null),l.a.createElement("span",{className:"hljs-attr"},"  only:"),l.a.createElement("br",null),l.a.createElement("span",{className:"hljs-bullet"},"    -")," ",l.a.createElement("span",{className:"hljs-string"},"gh-pages"))),l.a.createElement("p",null,"Although pretty self-explanatory, here are some quick notes:"),l.a.createElement("ul",null,l.a.createElement("li",null,"The ",l.a.createElement("code",null,"language")," setting is needed as Travis supports loads of different platforms besides node; Ruby, Java, etc."),l.a.createElement("li",null,"As Node's API is still under constant development it can be important to run the tests using different versions of node. These are specified using the ",l.a.createElement("code",null,"node_js")," setting. Each version of Node will be run for each build, and the results can be individually browsed."),l.a.createElement("li",null,"We have to use the ",l.a.createElement("code",null,"before_script")," hook to make sure ",l.a.createElement("code",null,"jasmine-node")," is globally installed. Merely including it in our ",l.a.createElement("code",null,"package.json")," will just copy the code to the ",l.a.createElement("code",null,"node_module")," directory which enables us to ",l.a.createElement("code",null,"require")," it in our code, but here we need to be able to execute the binary."),l.a.createElement("li",null,"By default Travis is wired to ignore the gh-pages branch of a repo, as that traditionally is used to hold a static about page. The rather verbose ",l.a.createElement("code",null,"branches")," setting here is needed to tell Travis that we are indeed using the gh-pages branch.")),l.a.createElement("p",null,"An image badge is automatically generated representing the Travis result for the latest build. The URL is ",l.a.createElement("code",null,"https://img.shields.io/travis/<githubusername>/<reponame>/<repobranch>.svg"),". It is customary to use it in the project ",l.a.createElement("code",null,"README.md")," file as a link to the project Travis page. Here's what that looks like for Algol3:"),l.a.createElement("pre",null,l.a.createElement("code",{className:"hljs language-markdown"},l.a.createElement("span",{className:"hljs-section"},"# Algol3"),l.a.createElement("br",null),l.a.createElement("br",null),"Third time's the charm!",l.a.createElement("br",null),l.a.createElement("br",null),"[",l.a.createElement("span",{className:"hljs-string"},"![Build Status"),"](",l.a.createElement("span",{className:"hljs-link"},"https://img.shields.io/travis/krawaller/algol3/gh-pages.svg"),")](",l.a.createElement("span",{className:"hljs-link"},"https://travis-ci.org/krawaller/algol3"),")")),l.a.createElement("p",null,"Which then looks like this:"),l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/krawaller/algol3/blob/gh-pages/README.md"},l.a.createElement("img",{src:"../static/posts/travis-ci-and-github-pages/img/readmewithtravisbadge.png",alt:"readme with travis badge"}))),l.a.createElement("h3",{id:"supporting-node-and-the-browser"},"Supporting Node and the browser"),l.a.createElement("p",null,"The students are required to publish their app using Github Pages, which means it must be runnable in a browser. But Travis uses Node to run the test suite, which means the app must support Node too! This means we have to deal with requirements and exporting accordingly. Algol3 has lodash as a dependency, which is handled (admittedly not very gracefully) at the top of ",l.a.createElement("code",null,"algol.js"),":"),l.a.createElement("pre",null,l.a.createElement("code",{className:"hljs language-javascript"},l.a.createElement("span",{className:"hljs-keyword"},"var")," Algol = {},",l.a.createElement("br",null),"    _ = (",l.a.createElement("span",{className:"hljs-keyword"},"typeof")," ",l.a.createElement("span",{className:"hljs-built_in"},"require")," !== ",l.a.createElement("span",{className:"hljs-string"},'"undefined"')," ? ",l.a.createElement("span",{className:"hljs-built_in"},"require"),"(",l.a.createElement("span",{className:"hljs-string"},'"./lodashmixins"'),") : ",l.a.createElement("span",{className:"hljs-built_in"},"window"),"._);")),l.a.createElement("p",null,"At the bottom of the same file we export ",l.a.createElement("code",null,"Algol")," for both Node and the browser:"),l.a.createElement("pre",null,l.a.createElement("code",{className:"hljs language-javascript"},l.a.createElement("span",{className:"hljs-keyword"},"if")," (",l.a.createElement("span",{className:"hljs-keyword"},"typeof")," ",l.a.createElement("span",{className:"hljs-built_in"},"module")," !== ",l.a.createElement("span",{className:"hljs-string"},"'undefined'")," && ",l.a.createElement("span",{className:"hljs-keyword"},"typeof")," ",l.a.createElement("span",{className:"hljs-built_in"},"module"),".exports !== ",l.a.createElement("span",{className:"hljs-string"},"'undefined'"),")",l.a.createElement("br",null),"    ",l.a.createElement("span",{className:"hljs-built_in"},"module"),".exports = Algol;",l.a.createElement("br",null),l.a.createElement("span",{className:"hljs-keyword"},"else"),l.a.createElement("br",null),"    ",l.a.createElement("span",{className:"hljs-built_in"},"window"),".Algol = Algol;")),l.a.createElement("p",null,"In the RIA course, the students are also required to have the tests runnable in a browser! This has two big advantages;"),l.a.createElement("ul",null,l.a.createElement("li",null,"You don't have to have Node locally to be able to run the test suite"),l.a.createElement("li",null,"If you aren't the project owner you can see the results of the test suite on Github Pages, without having to clone the repo to your machine.")),l.a.createElement("p",null,"Maintaining tests are expensive, so I am a firm believer of making those tests as available as possible. Not having Node as a requirement to running them goes a long way towards achieving that."),l.a.createElement("p",null,"Having the tests support the browsers means our spec files must handle dependencies in much the same way as the app itself. Here's the top of one of the spec files for Algol:"),l.a.createElement("pre",null,l.a.createElement("code",{className:"hljs language-javascript"},l.a.createElement("span",{className:"hljs-keyword"},"if")," (",l.a.createElement("span",{className:"hljs-keyword"},"typeof")," ",l.a.createElement("span",{className:"hljs-built_in"},"require")," === ",l.a.createElement("span",{className:"hljs-string"},"'function'")," && ",l.a.createElement("span",{className:"hljs-keyword"},"typeof")," ",l.a.createElement("span",{className:"hljs-built_in"},"module")," === ",l.a.createElement("span",{className:"hljs-string"},"'object'"),") {",l.a.createElement("br",null),"    ",l.a.createElement("span",{className:"hljs-keyword"},"var")," sinon = ",l.a.createElement("span",{className:"hljs-built_in"},"require"),"(",l.a.createElement("span",{className:"hljs-string"},"'sinon'"),"),",l.a.createElement("br",null),"        jasmineSinon = ",l.a.createElement("span",{className:"hljs-built_in"},"require"),"(",l.a.createElement("span",{className:"hljs-string"},"'jasmine-sinon'"),"),",l.a.createElement("br",null),"        Algol = ",l.a.createElement("span",{className:"hljs-built_in"},"require"),"(",l.a.createElement("span",{className:"hljs-string"},'"../../algol.js"'),"),",l.a.createElement("br",null),"        _ = ",l.a.createElement("span",{className:"hljs-built_in"},"require"),"(",l.a.createElement("span",{className:"hljs-string"},'"../../lodashmixins.js"'),");",l.a.createElement("br",null),"}")),l.a.createElement("p",null,"The tests are then made available through the standard html-runner file:"),l.a.createElement("pre",null,l.a.createElement("code",{className:"hljs language-html"},l.a.createElement("span",{className:"hljs-meta"},"<!DOCTYPE html>"),l.a.createElement("br",null),l.a.createElement("span",{className:"hljs-tag"},"<",l.a.createElement("span",{className:"hljs-name"},"html"),">"),l.a.createElement("br",null),"    ",l.a.createElement("span",{className:"hljs-tag"},"<",l.a.createElement("span",{className:"hljs-name"},"head"),">"),l.a.createElement("br",null),"        ",l.a.createElement("span",{className:"hljs-tag"},"<",l.a.createElement("span",{className:"hljs-name"},"title"),">"),"demo tests",l.a.createElement("span",{className:"hljs-tag"},"</",l.a.createElement("span",{className:"hljs-name"},"title"),">"),l.a.createElement("br",null),"        ",l.a.createElement("span",{className:"hljs-tag"},"<",l.a.createElement("span",{className:"hljs-name"},"link")," ",l.a.createElement("span",{className:"hljs-attr"},"rel"),"=",l.a.createElement("span",{className:"hljs-string"},'"stylesheet"')," ",l.a.createElement("span",{className:"hljs-attr"},"type"),"=",l.a.createElement("span",{className:"hljs-string"},'"text/css"')," ",l.a.createElement("span",{className:"hljs-attr"},"href"),"=",l.a.createElement("span",{className:"hljs-string"},'"html/jasmine/jasmine.css"'),">"),l.a.createElement("br",null),"    ",l.a.createElement("span",{className:"hljs-tag"},"</",l.a.createElement("span",{className:"hljs-name"},"head"),">"),l.a.createElement("br",null),"    ",l.a.createElement("span",{className:"hljs-tag"},"<",l.a.createElement("span",{className:"hljs-name"},"body"),">"),l.a.createElement("br",null),"        ",l.a.createElement("span",{className:"hljs-tag"},"<",l.a.createElement("span",{className:"hljs-name"},"script")," ",l.a.createElement("span",{className:"hljs-attr"},"type"),"=",l.a.createElement("span",{className:"hljs-string"},'"text/javascript"')," ",l.a.createElement("span",{className:"hljs-attr"},"src"),"=",l.a.createElement("span",{className:"hljs-string"},'"html/jasmine/jasmine.js"'),">"),l.a.createElement("span",{className:"hljs-tag"},"</",l.a.createElement("span",{className:"hljs-name"},"script"),">"),l.a.createElement("br",null),"        ",l.a.createElement("span",{className:"hljs-tag"},"<",l.a.createElement("span",{className:"hljs-name"},"script")," ",l.a.createElement("span",{className:"hljs-attr"},"type"),"=",l.a.createElement("span",{className:"hljs-string"},'"text/javascript"')," ",l.a.createElement("span",{className:"hljs-attr"},"src"),"=",l.a.createElement("span",{className:"hljs-string"},'"html/jasmine/jasmine-html.js"'),">"),l.a.createElement("span",{className:"hljs-tag"},"</",l.a.createElement("span",{className:"hljs-name"},"script"),">"),l.a.createElement("br",null),"        ",l.a.createElement("span",{className:"hljs-tag"},"<",l.a.createElement("span",{className:"hljs-name"},"script")," ",l.a.createElement("span",{className:"hljs-attr"},"type"),"=",l.a.createElement("span",{className:"hljs-string"},'"text/javascript"')," ",l.a.createElement("span",{className:"hljs-attr"},"src"),"=",l.a.createElement("span",{className:"hljs-string"},'"html/sinon.js"'),">"),l.a.createElement("span",{className:"hljs-tag"},"</",l.a.createElement("span",{className:"hljs-name"},"script"),">"),l.a.createElement("br",null),"        ",l.a.createElement("span",{className:"hljs-tag"},"<",l.a.createElement("span",{className:"hljs-name"},"script")," ",l.a.createElement("span",{className:"hljs-attr"},"type"),"=",l.a.createElement("span",{className:"hljs-string"},'"text/javascript"')," ",l.a.createElement("span",{className:"hljs-attr"},"src"),"=",l.a.createElement("span",{className:"hljs-string"},'"html/jasmine-sinon.js"'),">"),l.a.createElement("span",{className:"hljs-tag"},"</",l.a.createElement("span",{className:"hljs-name"},"script"),">"),l.a.createElement("br",null),"        ",l.a.createElement("span",{className:"hljs-tag"},"<",l.a.createElement("span",{className:"hljs-name"},"script")," ",l.a.createElement("span",{className:"hljs-attr"},"type"),"=",l.a.createElement("span",{className:"hljs-string"},'"text/javascript"')," ",l.a.createElement("span",{className:"hljs-attr"},"src"),"=",l.a.createElement("span",{className:"hljs-string"},'"html/lodash.js"'),">"),l.a.createElement("span",{className:"hljs-tag"},"</",l.a.createElement("span",{className:"hljs-name"},"script"),">"),l.a.createElement("br",null),"        ",l.a.createElement("span",{className:"hljs-tag"},"<",l.a.createElement("span",{className:"hljs-name"},"script")," ",l.a.createElement("span",{className:"hljs-attr"},"type"),"=",l.a.createElement("span",{className:"hljs-string"},'"text/javascript"')," ",l.a.createElement("span",{className:"hljs-attr"},"src"),"=",l.a.createElement("span",{className:"hljs-string"},'"../lodashmixins.js"'),">"),l.a.createElement("span",{className:"hljs-tag"},"</",l.a.createElement("span",{className:"hljs-name"},"script"),">"),l.a.createElement("br",null),l.a.createElement("br",null),"        ",l.a.createElement("span",{className:"hljs-tag"},"<",l.a.createElement("span",{className:"hljs-name"},"script")," ",l.a.createElement("span",{className:"hljs-attr"},"type"),"=",l.a.createElement("span",{className:"hljs-string"},'"text/javascript"')," ",l.a.createElement("span",{className:"hljs-attr"},"src"),"=",l.a.createElement("span",{className:"hljs-string"},'"../algol.js"'),">"),l.a.createElement("span",{className:"hljs-tag"},"</",l.a.createElement("span",{className:"hljs-name"},"script"),">"),l.a.createElement("br",null),l.a.createElement("br",null),"        ",l.a.createElement("span",{className:"hljs-tag"},"<",l.a.createElement("span",{className:"hljs-name"},"script")," ",l.a.createElement("span",{className:"hljs-attr"},"type"),"=",l.a.createElement("span",{className:"hljs-string"},'"text/javascript"')," ",l.a.createElement("span",{className:"hljs-attr"},"src"),"=",l.a.createElement("span",{className:"hljs-string"},'"specs/time.spec.js"'),">"),l.a.createElement("span",{className:"hljs-tag"},"</",l.a.createElement("span",{className:"hljs-name"},"script"),">"),l.a.createElement("br",null),"        ",l.a.createElement("span",{className:"hljs-tag"},"<",l.a.createElement("span",{className:"hljs-name"},"script")," ",l.a.createElement("span",{className:"hljs-attr"},"type"),"=",l.a.createElement("span",{className:"hljs-string"},'"text/javascript"')," ",l.a.createElement("span",{className:"hljs-attr"},"src"),"=",l.a.createElement("span",{className:"hljs-string"},'"specs/generators.spec.js"'),">"),l.a.createElement("span",{className:"hljs-tag"},"</",l.a.createElement("span",{className:"hljs-name"},"script"),">"),l.a.createElement("br",null),"        ",l.a.createElement("span",{className:"hljs-tag"},"<",l.a.createElement("span",{className:"hljs-name"},"script")," ",l.a.createElement("span",{className:"hljs-attr"},"type"),"=",l.a.createElement("span",{className:"hljs-string"},'"text/javascript"')," ",l.a.createElement("span",{className:"hljs-attr"},"src"),"=",l.a.createElement("span",{className:"hljs-string"},'"specs/board.spec.js"'),">"),l.a.createElement("span",{className:"hljs-tag"},"</",l.a.createElement("span",{className:"hljs-name"},"script"),">"),l.a.createElement("br",null),l.a.createElement("br",null),"        ",l.a.createElement("span",{className:"hljs-tag"},"<",l.a.createElement("span",{className:"hljs-name"},"script")," ",l.a.createElement("span",{className:"hljs-attr"},"type"),"=",l.a.createElement("span",{className:"hljs-string"},'"text/javascript"'),">"),l.a.createElement("span",{className:"actionscript"},l.a.createElement("br",null),"            ",l.a.createElement("span",{className:"hljs-keyword"},"var")," jasmineEnv = jasmine.getEnv();",l.a.createElement("br",null),"            jasmineEnv.updateInterval = ",l.a.createElement("span",{className:"hljs-number"},"1000"),";",l.a.createElement("br",null),"            ",l.a.createElement("span",{className:"hljs-keyword"},"var")," htmlReporter = ",l.a.createElement("span",{className:"hljs-keyword"},"new")," jasmine.HtmlReporter();",l.a.createElement("br",null),"            jasmineEnv.addReporter(htmlReporter);",l.a.createElement("br",null),"            jasmineEnv.specFilter = ",l.a.createElement("span",{className:"hljs-function"},l.a.createElement("span",{className:"hljs-keyword"},"function"),l.a.createElement("span",{className:"hljs-params"},"(spec)")," "),"{",l.a.createElement("br",null),"                ",l.a.createElement("span",{className:"hljs-keyword"},"return")," htmlReporter.specFilter(spec);",l.a.createElement("br",null),"            };",l.a.createElement("br",null),"            jasmineEnv.execute();",l.a.createElement("br",null),"        "),l.a.createElement("span",{className:"hljs-tag"},"</",l.a.createElement("span",{className:"hljs-name"},"script"),">"),l.a.createElement("br",null),"    ",l.a.createElement("span",{className:"hljs-tag"},"</",l.a.createElement("span",{className:"hljs-name"},"body"),">"),l.a.createElement("br",null),l.a.createElement("span",{className:"hljs-tag"},"</",l.a.createElement("span",{className:"hljs-name"},"html"),">"))),l.a.createElement("p",null,"There's a trap here; when using node to run the test suite, ",l.a.createElement("code",null,"jasmine-node")," will automatically find all ",l.a.createElement("code",null,"*.spec.js")," files and run them. In the HTML runner, we must add each spec file manually, which is easy to forget to do as we create new ones."),l.a.createElement("p",null,"Note I haven't managed to used the same dependencies as Node, instead the html runner has it's own copies of jasmine, sinon and lodash inside an ",l.a.createElement("code",null,"html")," directory. This is a potential danger as we might be using different versions of the code when running the tests in the browser when compared to Node. But the alternative, adding ",l.a.createElement("code",null,"node_modules")," to the repo and linking to code there with script tags, has its own sets of head aches."),l.a.createElement("p",null,"But the spec files and the app are all the same, which means we can somewhat reliably run the tests in the browser..."),l.a.createElement("p",null,l.a.createElement("a",{href:"http://krawaller.github.io/algol3/test/suite.html"},l.a.createElement("img",{src:"../static/posts/travis-ci-and-github-pages/img/browsertestresults.png",alt:"html tests"}))),l.a.createElement("p",null,"...getting the same results as if we ran ",l.a.createElement("code",null,"jasmine-node test")," locally:"),l.a.createElement("p",null,l.a.createElement("img",{src:"../static/posts/travis-ci-and-github-pages/img/nodetests.png",alt:"node tests"}))),l.a.createElement("hr",null))}},z6tM:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/travis-ci-and-github-pages",function(){var e=t("2Nm1");return{page:e.default||e}}])}},[["z6tM",1,0]]]);