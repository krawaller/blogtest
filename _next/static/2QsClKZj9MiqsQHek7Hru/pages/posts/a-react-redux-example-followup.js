(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{"+pr8":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/a-react-redux-example-followup",function(){var e=t("x8Wg");return{page:e.default||e}}])},x8Wg:function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),n=t.n(l),s=t("JRaF"),r=t("YFqc"),c=t.n(r),m={url:"a-react-redux-example-followup",id:"reduxorganisation",type:"post",title:"A React-Redux example followup",date:"2017-01-06",tags:["react","redux"],author:"david",excerpt:"Following up on our React-Redux example, discussing what logic goes where",folder:"/Users/davidwaller/Documents/gitreps/priv/blog2/sources/2017-01-04_reduxorganisation",hasStaticContent:!0};a.default=function(){return n.a.createElement(s.a,{kind:"post",data:m,title:"A React-Redux example followup",summary:"Following up on our React-Redux example, discussing what logic goes where"},n.a.createElement("p",null,"Tags: ",n.a.createElement(c.a,{href:"/tags/react"},n.a.createElement("a",null,"react"))," ",n.a.createElement(c.a,{href:"/tags/redux"},n.a.createElement("a",null,"redux"))),n.a.createElement("div",{className:"post","data-postid":"reduxorganisation"},n.a.createElement("h3",{id:"the-premise"},"The premise"),n.a.createElement("p",null,"In October 2015 we posted ",n.a.createElement(c.a,{href:"/posts/a-react-redux-example-app",prefetch:!0},n.a.createElement("a",null,"A React-Redux example app")),", still one of the most-read posts on this blog. Which, as is always the case when old code is scrutinized, feels increasingly embarrassing."),n.a.createElement("p",null,"Even more so when Samuel Bleckley wrote a ",n.a.createElement("a",{href:"http://blog.krawaller.se/posts/a-react-redux-example-app/#comment-3035129301"},"comment pointing out a pretty severe bug")," in the example app! This blog post explains the bug and solves it, giving us a good excuse to discuss where to put logic in a Redux app:"),n.a.createElement("ol",null,n.a.createElement("li",null,"In the view?"),n.a.createElement("li",null,"In the action creator?"),n.a.createElement("li",null,"In the reducer?"),n.a.createElement("li",null,"Somewhere else entirely?")),n.a.createElement("h3",{id:"reacquainting-ourselves-with-the-example"},"Reacquainting ourselves with the example"),n.a.createElement("p",null,"The ",n.a.createElement("a",{href:"https://github.com/krawaller/riastart2015"},"old source code")," is running in the iframe below (you can also access it directly at ",n.a.createElement("a",{href:"http://blog.krawaller.se/riastart2015/"},"http://blog.krawaller.se/riastart2015/"),")."),n.a.createElement("iframe",{src:"https://blog.krawaller.se/riastart2015/index.html",style:{height:500,width:"100%"}}),n.a.createElement("p",null,"You're assumed to have read ",n.a.createElement("a",{href:"a-react-redux-example-app/"},"the old blog post"),", but here's a whirlwind recap. The app state has two parts to it:"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("code",null,"heroes")," holds persistent information for each hero, such as number of kills total"),n.a.createElement("li",null,n.a.createElement("code",null,"battlefield")," holds the state of the currently ongoing battle")),n.a.createElement("p",null,"As usual with Redux, each of these top-level keys has a reducer of its own, thus we have a ",n.a.createElement("code",null,"heroesReducer")," and a ",n.a.createElement("code",null,"battlefieldReducer"),"."),n.a.createElement("p",null,"You can see this more clearly by peeking at the ",n.a.createElement("a",{href:"https://github.com/krawaller/riastart2015/blob/gh-pages/src/initialstate.js"},"old initial state")," code:"),n.a.createElement("pre",null,n.a.createElement("code",{className:"hljs language-javascript"},n.a.createElement("span",{className:"hljs-built_in"},"module"),".exports = ",n.a.createElement("span",{className:"hljs-function"},n.a.createElement("span",{className:"hljs-keyword"},"function"),"(",n.a.createElement("span",{className:"hljs-params"}),") "),"{",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-keyword"},"return")," {",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-comment"},'// "persistent" data on heroes'),n.a.createElement("br",null),"    heroes: {",n.a.createElement("br",null),"      ",n.a.createElement("span",{className:"hljs-attr"},"batman"),": {",n.a.createElement("br",null),"        ",n.a.createElement("span",{className:"hljs-attr"},"quote"),": ",n.a.createElement("span",{className:"hljs-string"},'"I\'m batman."'),",",n.a.createElement("br",null),"        ",n.a.createElement("span",{className:"hljs-attr"},"kills"),": ",n.a.createElement("span",{className:"hljs-number"},"0"),n.a.createElement("br",null),"      },",n.a.createElement("br",null),"      ",n.a.createElement("span",{className:"hljs-attr"},"superman"),": {",n.a.createElement("br",null),"        ",n.a.createElement("span",{className:"hljs-attr"},"quote"),": ",n.a.createElement("span",{className:"hljs-string"},'"I can fly!"'),",",n.a.createElement("br",null),"        ",n.a.createElement("span",{className:"hljs-attr"},"kills"),": ",n.a.createElement("span",{className:"hljs-number"},"0"),n.a.createElement("br",null),"      },",n.a.createElement("br",null),"      ",n.a.createElement("span",{className:"hljs-attr"},"spiderman"),": {",n.a.createElement("br",null),"        ",n.a.createElement("span",{className:"hljs-attr"},"quote"),": ",n.a.createElement("span",{className:"hljs-string"},'"Why don\'t you love me, Lois?"'),",",n.a.createElement("br",null),"        ",n.a.createElement("span",{className:"hljs-attr"},"kills"),": ",n.a.createElement("span",{className:"hljs-number"},"0"),n.a.createElement("br",null),"      },",n.a.createElement("br",null),"      ",n.a.createElement("span",{className:"hljs-string"},'"he-man"'),": {",n.a.createElement("br",null),"        ",n.a.createElement("span",{className:"hljs-attr"},"quote"),": ",n.a.createElement("span",{className:"hljs-string"},'"By the power of Grayskull!"'),",",n.a.createElement("br",null),"        ",n.a.createElement("span",{className:"hljs-attr"},"kills"),": ",n.a.createElement("span",{className:"hljs-number"},"0"),n.a.createElement("br",null),"      }",n.a.createElement("br",null),"    },",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-comment"},"// data on the current battle"),n.a.createElement("br",null),"    battlefield: {",n.a.createElement("br",null),"      ",n.a.createElement("span",{className:"hljs-attr"},"doing"),": {",n.a.createElement("br",null),"        ",n.a.createElement("span",{className:"hljs-attr"},"batman"),": C.WAITING,",n.a.createElement("br",null),"        ",n.a.createElement("span",{className:"hljs-attr"},"superman"),": C.WAITING,",n.a.createElement("br",null),"        ",n.a.createElement("span",{className:"hljs-attr"},"spiderman"),": C.WAITING,",n.a.createElement("br",null),"        ",n.a.createElement("span",{className:"hljs-string"},'"he-man"'),": C.WAITING",n.a.createElement("br",null),"      },",n.a.createElement("br",null),"      ",n.a.createElement("span",{className:"hljs-attr"},"standing"),": ",n.a.createElement("span",{className:"hljs-number"},"4"),",",n.a.createElement("br",null),"      ",n.a.createElement("span",{className:"hljs-attr"},"log"),": [",n.a.createElement("span",{className:"hljs-string"},'"Ready.... fight!"'),"]",n.a.createElement("br",null),"    }",n.a.createElement("br",null),"  };",n.a.createElement("br",null),"};")),n.a.createElement("p",null,"To see the persistent stats for a particular hero, simply click his name:"),n.a.createElement("p",null,n.a.createElement("img",{src:"../static/posts/a-react-redux-example-followup/img/reduxexampleherodetail.gif",alt:""})),n.a.createElement("h3",{id:"the-bug"},"The bug"),n.a.createElement("p",null,"The bug that Samuel Bleckley found is the embarrassing fact that kills are recorded even for shots that fail to take out their target. This happens if"),n.a.createElement("ul",null,n.a.createElement("li",null,"the target is ducking"),n.a.createElement("li",null,"the target was killed by someone else first"),n.a.createElement("li",null,"the shooter got taken out while aiming")),n.a.createElement("p",null,"Here you can see it in action - After the 2 second aiming period Batman gets a kill recorded even though Superman is ducking:"),n.a.createElement("p",null,n.a.createElement("img",{src:"../static/posts/a-react-redux-example-followup/img/reactreduxexamplebug.gif",alt:""})),n.a.createElement("p",null,"The explanation as to why this happens is pretty straightforward. Here is the ",n.a.createElement("a",{href:"https://github.com/krawaller/riastart2015/blob/gh-pages/src/actions.js#L24-L32"},"action creator")," that is called when we click a kill button:"),n.a.createElement("pre",null,n.a.createElement("code",{className:"hljs language-javascript"},"aimAt: ",n.a.createElement("span",{className:"hljs-function"},n.a.createElement("span",{className:"hljs-keyword"},"function"),"(",n.a.createElement("span",{className:"hljs-params"},"killer,victim"),")"),"{",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-keyword"},"return")," ",n.a.createElement("span",{className:"hljs-function"},n.a.createElement("span",{className:"hljs-keyword"},"function"),"(",n.a.createElement("span",{className:"hljs-params"},"dispatch,getState"),")"),"{",n.a.createElement("br",null),"    dispatch({",n.a.createElement("span",{className:"hljs-attr"},"type"),":constants.AIM_AT,",n.a.createElement("span",{className:"hljs-attr"},"killer"),":killer,",n.a.createElement("span",{className:"hljs-attr"},"victim"),":victim});",n.a.createElement("br",null),"    setTimeout(",n.a.createElement("span",{className:"hljs-function"},n.a.createElement("span",{className:"hljs-keyword"},"function"),"(",n.a.createElement("span",{className:"hljs-params"}),")"),"{",n.a.createElement("br",null),"      dispatch({",n.a.createElement("span",{className:"hljs-attr"},"type"),":constants.KILL_HERO,",n.a.createElement("span",{className:"hljs-attr"},"killer"),":killer,",n.a.createElement("span",{className:"hljs-attr"},"victim"),":victim});",n.a.createElement("br",null),"    },",n.a.createElement("span",{className:"hljs-number"},"2000"),");",n.a.createElement("br",null),"  };",n.a.createElement("br",null),"}")),n.a.createElement("p",null,"It synchronously dispatches ",n.a.createElement("code",null,"AIM_AT"),", and then 2 seconds later, ",n.a.createElement("code",null,"KILL_HERO"),". The effect of ",n.a.createElement("code",null,"KILL_HERO")," is calculated in the ",n.a.createElement("a",{href:"https://github.com/krawaller/riastart2015/blob/gh-pages/src/reducers/battlefield.js#L26-L52"},n.a.createElement("code",null,"battlefieldReducer")),":"),n.a.createElement("pre",null,n.a.createElement("code",{className:"hljs language-javascript"},n.a.createElement("span",{className:"hljs-keyword"},"case")," C.KILL_HERO:",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-keyword"},"if")," (state.doing[action.killer] === C.DEAD){",n.a.createElement("br",null),"    newstate.log.push(",n.a.createElement("span",{className:"hljs-string"},'"The trigger finger twitches on "'),"+action.killer+",n.a.createElement("span",{className:"hljs-string"},'"\'s corpse"'),");",n.a.createElement("br",null),"  } ",n.a.createElement("span",{className:"hljs-keyword"},"else")," {",n.a.createElement("br",null),"    newstate.doing[action.killer] = C.WAITING; ",n.a.createElement("span",{className:"hljs-comment"},"// whatever happens we should no longer be aiming"),n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-comment"},"// the target is ducking"),n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-keyword"},"if")," (state.doing[action.victim] === C.DUCKING) {",n.a.createElement("br",null),"      newstate.log.push(action.victim+",n.a.createElement("span",{className:"hljs-string"},'" dodges a blast from "'),"+action.killer+",n.a.createElement("span",{className:"hljs-string"},'"!"'),");",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-comment"},"// the target has already been killed"),n.a.createElement("br",null),"    } ",n.a.createElement("span",{className:"hljs-keyword"},"else")," ",n.a.createElement("span",{className:"hljs-keyword"},"if")," (state.doing[action.victim] === C.DEAD) {",n.a.createElement("br",null),"      newstate.log.push(action.killer+",n.a.createElement("span",{className:"hljs-string"},'" blasts "'),"+action.victim+",n.a.createElement("span",{className:"hljs-string"},'"\'s corpse."'),");",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-comment"},"// we kill the target!"),n.a.createElement("br",null),"    } ",n.a.createElement("span",{className:"hljs-keyword"},"else")," {",n.a.createElement("br",null),"      ",n.a.createElement("span",{className:"hljs-keyword"},"if")," (state.doing[action.victim]===C.AIMING){",n.a.createElement("br",null),"        newstate.log.push(action.killer+",n.a.createElement("span",{className:"hljs-string"},'" killed "'),"+action.victim+",n.a.createElement("span",{className:"hljs-string"},'" before he got his shot off!"'),");",n.a.createElement("br",null),"      } ",n.a.createElement("span",{className:"hljs-keyword"},"else")," {",n.a.createElement("br",null),"        newstate.log.push(action.killer+",n.a.createElement("span",{className:"hljs-string"},'" killed "'),"+action.victim+",n.a.createElement("span",{className:"hljs-string"},'"!"'),");",n.a.createElement("br",null),"      }",n.a.createElement("br",null),"      newstate.doing[action.victim] = C.DEAD;",n.a.createElement("br",null),"      newstate.standing = newstate.standing - ",n.a.createElement("span",{className:"hljs-number"},"1"),";",n.a.createElement("br",null),"      ",n.a.createElement("span",{className:"hljs-keyword"},"if")," (newstate.standing === ",n.a.createElement("span",{className:"hljs-number"},"1"),"){",n.a.createElement("br",null),"        newstate.log.push(action.killer+",n.a.createElement("span",{className:"hljs-string"},'" WINS!!"'),");",n.a.createElement("br",null),"      }",n.a.createElement("br",null),"    }",n.a.createElement("br",null),"  }",n.a.createElement("br",null),n.a.createElement("span",{className:"hljs-keyword"},"return")," newstate;")),n.a.createElement("p",null,"Zooming out, here's a map of the logic happening when we fire:"),n.a.createElement("p",null,n.a.createElement("img",{src:"../static/posts/a-react-redux-example-followup/diagrams/reactreduxexampleflow.svg",alt:""})),n.a.createElement("p",null,"But since we branch between a valid kill and a spam message inside ",n.a.createElement("code",null,"battlefieldReducer"),", there's no way for anyone else to distinguish between a kill and an attempted kill!"),n.a.createElement("p",null,"And this is our problem. The ",n.a.createElement("a",{href:"https://github.com/krawaller/riastart2015/blob/gh-pages/src/reducers/heroes.js"},n.a.createElement("code",null,"heroesReducer"))," simply listens for the ",n.a.createElement("code",null,"KILL_HERO")," action to register a kill:"),n.a.createElement("pre",null,n.a.createElement("code",{className:"hljs language-javascript"},n.a.createElement("span",{className:"hljs-keyword"},"var")," newstate = ",n.a.createElement("span",{className:"hljs-built_in"},"Object"),".assign({}, state);",n.a.createElement("br",null),n.a.createElement("span",{className:"hljs-keyword"},"switch")," (action.type) {",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-keyword"},"case")," constants.KILL_HERO:",n.a.createElement("br",null),"    newstate[action.killer].kills += ",n.a.createElement("span",{className:"hljs-number"},"1"),";",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-keyword"},"return")," newstate;",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-keyword"},"default"),":",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-keyword"},"return")," state || initialState().heroes;",n.a.createElement("br",null),"}")),n.a.createElement("p",null,"Initially there was no ",n.a.createElement("code",null,"AIM_AT")," and no ducking - when you clicked kill, you instakilled your target. At that point in time, everything worked as expected. Then I added the 2-second aiming period and ducking, essentially ",n.a.createElement("em",null,"changing the meaning of the ",n.a.createElement("code",null,"KILL_HERO")," action to ",n.a.createElement("code",null,"MAYBE_KILL")),"."),n.a.createElement("p",null,"With the current setup, there isn't really a simple way to solve this! The ",n.a.createElement("code",null,"heroesReducer")," only cares about actual kills, but cannot easily differentiate those since the branching is done inside the ",n.a.createElement("code",null,"battlefieldReducer"),"."),n.a.createElement("h3",{id:"solving-the-problem"},"Solving the problem"),n.a.createElement("p",null,"Here's a fixed version of the app! Note how failed shots won't register as kills here."),n.a.createElement("iframe",{src:"https://blog.krawaller.se/reactreduxexamplev2/index.html",style:{height:500,width:"100%"}}),n.a.createElement("p",null,"The new source code - which, apart from the bug fix, also has updated dependencies, an ES6 makeover and some reorganisation - is available at ",n.a.createElement("a",{href:"https://github.com/krawaller/reactreduxexamplev2"},"https://github.com/krawaller/reactreduxexamplev2"),"."),n.a.createElement("p",null,"We squashed the bug by updating the ",n.a.createElement("a",{href:"https://github.com/krawaller/reactreduxexamplev2/blob/gh-pages/src/actions.js#L25-L51"},"action creator"),", making it host the main branching logic:"),n.a.createElement("pre",null,n.a.createElement("code",{className:"hljs language-javascript"},n.a.createElement("span",{className:"hljs-keyword"},"if")," (state.doing[killer] === C.DEAD) {",n.a.createElement("br",null),"  dispatch({ ",n.a.createElement("span",{className:"hljs-attr"},"type"),": C.TWITCH_FINGER, ",n.a.createElement("span",{className:"hljs-attr"},"who"),": killer });",n.a.createElement("br",null),"} ",n.a.createElement("span",{className:"hljs-keyword"},"else")," {",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-comment"},"// the target is ducking"),n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-keyword"},"if")," (state.doing[victim] === C.DUCKING) {",n.a.createElement("br",null),"    dispatch({ ",n.a.createElement("span",{className:"hljs-attr"},"type"),": C.MISS_SHOT, killer, victim });",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-comment"},"// the target has already been killed"),n.a.createElement("br",null),"  } ",n.a.createElement("span",{className:"hljs-keyword"},"else")," ",n.a.createElement("span",{className:"hljs-keyword"},"if")," (state.doing[victim] === C.DEAD) {",n.a.createElement("br",null),"    dispatch({ ",n.a.createElement("span",{className:"hljs-attr"},"type"),": C.BLAST_CORPSE, killer, victim });",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-comment"},"// we kill the target!"),n.a.createElement("br",null),"  } ",n.a.createElement("span",{className:"hljs-keyword"},"else")," {",n.a.createElement("br",null),"    dispatch({ ",n.a.createElement("span",{className:"hljs-attr"},"type"),": C.KILL_HERO, killer, victim });",n.a.createElement("br",null),"  }",n.a.createElement("br",null),"}")),n.a.createElement("p",null,"The ",n.a.createElement("code",null,"battlefieldReducer")," has corresponding ",n.a.createElement("a",{href:"https://github.com/krawaller/reactreduxexamplev2/blob/gh-pages/src/store/reducers/battlefield.js#L29-L39"},"new action cases"),"..."),n.a.createElement("pre",null,n.a.createElement("code",{className:"hljs language-javascript"},n.a.createElement("span",{className:"hljs-keyword"},"case")," C.TWITCH_FINGER:",n.a.createElement("br",null),"  newstate.log.push(",n.a.createElement("span",{className:"hljs-string"},'"The trigger finger twitches on "'),"+action.who+",n.a.createElement("span",{className:"hljs-string"},'"\'s corpse"'),");",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-keyword"},"return")," newstate;",n.a.createElement("br",null),n.a.createElement("span",{className:"hljs-keyword"},"case")," C.MISS_SHOT:",n.a.createElement("br",null),"  newstate.doing[action.killer] = C.WAITING;",n.a.createElement("br",null),"  newstate.log.push(action.victim+",n.a.createElement("span",{className:"hljs-string"},'" dodges a blast from "'),"+action.killer+",n.a.createElement("span",{className:"hljs-string"},'"!"'),");",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-keyword"},"return")," newstate;",n.a.createElement("br",null),n.a.createElement("span",{className:"hljs-keyword"},"case")," C.BLAST_CORPSE:",n.a.createElement("br",null),"  newstate.doing[action.killer] = C.WAITING;",n.a.createElement("br",null),"  newstate.log.push(action.killer+",n.a.createElement("span",{className:"hljs-string"},'" blasts "'),"+action.victim+",n.a.createElement("span",{className:"hljs-string"},'"\'s corpse."'),");",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-keyword"},"return")," newstate;")),n.a.createElement("p",null,"...and an ",n.a.createElement("a",{href:"https://github.com/krawaller/reactreduxexamplev2/blob/gh-pages/src/store/reducers/battlefield.js#L40-L52"},"updated ",n.a.createElement("code",null,"KILL_HERO")," case"),":"),n.a.createElement("pre",null,n.a.createElement("code",{className:"hljs language-javascript"},n.a.createElement("span",{className:"hljs-keyword"},"case")," C.KILL_HERO:",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-keyword"},"if")," (state.doing[action.victim]===C.AIMING){",n.a.createElement("br",null),"    newstate.log.push(action.killer+",n.a.createElement("span",{className:"hljs-string"},'" killed "'),"+action.victim+",n.a.createElement("span",{className:"hljs-string"},'" before he got his shot off!"'),");",n.a.createElement("br",null),"  } ",n.a.createElement("span",{className:"hljs-keyword"},"else")," {",n.a.createElement("br",null),"    newstate.log.push(action.killer+",n.a.createElement("span",{className:"hljs-string"},'" killed "'),"+action.victim+",n.a.createElement("span",{className:"hljs-string"},'"!"'),");",n.a.createElement("br",null),"  }",n.a.createElement("br",null),"  newstate.doing[action.victim] = C.DEAD;",n.a.createElement("br",null),"  newstate.doing[action.killer] = C.WAITING;",n.a.createElement("br",null),"  newstate.standing = newstate.standing - ",n.a.createElement("span",{className:"hljs-number"},"1"),";",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-keyword"},"if")," (newstate.standing === ",n.a.createElement("span",{className:"hljs-number"},"1"),"){",n.a.createElement("br",null),"    newstate.log.push(action.killer+",n.a.createElement("span",{className:"hljs-string"},'" WINS!!"'),");",n.a.createElement("br",null),"  }",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-keyword"},"return")," newstate;")),n.a.createElement("p",null,"Now ",n.a.createElement("code",null,"KILL_HERO")," actually means what it says again."),n.a.createElement("h3",{id:"discussing-our-options"},"Discussing our options"),n.a.createElement("p",null,"Looking again at our four options for placing logic in Redux:"),n.a.createElement("ol",null,n.a.createElement("li",null,"In the view?"),n.a.createElement("li",null,"In the action creator?"),n.a.createElement("li",null,"In the reducer?"),n.a.createElement("li",null,"Somewhere else entirely?")),n.a.createElement("p",null,"Option 1 is almost always wrong. We want to keep our views simple and as decoupled from the business logic as possible. You should be able to switch framework without doing any business logic reworkings at all!"),n.a.createElement("p",null,"Option 2 is often right, especially when you aren't sure. Don't be afraid to have fat action creators and small reducers! See the sum of them as your business logic. I saw a quote which I cannot find now, but which said that"),n.a.createElement("blockquote",null,n.a.createElement("p",null,"You should be able to fully understand an app by looking at its [Redux] reducers.")),n.a.createElement("p",null,"I disagree - the quote should be"),n.a.createElement("blockquote",null,n.a.createElement("p",null,"You should be able to fully understand an app by looking at its [Redux] reducers and action creators.")),n.a.createElement("p",null,"In the case of my little example app, option 3 was wrong for the shot consequence calculation. Because a reducer cared about the goings-on inside another reducer I had painted myself into a corner."),n.a.createElement("p",null,"What about option 4? Recently I made a web version of the print & play demo of the board game ",n.a.createElement("a",{href:"https://boardgamegeek.com/boardgame/201921/tiny-epic-quest"},"Tiny Epic Quest"),", to support its ",n.a.createElement("a",{href:"https://www.kickstarter.com/projects/coe/tiny-epic-quest-introducing-itemeeplestm/"},"Kickstarter campaign"),". Here you can see the web app in action:"),n.a.createElement("p",null,n.a.createElement("img",{src:"../static/posts/a-react-redux-example-followup/img/teqdemo.gif",alt:""})),n.a.createElement("p",null,"Each player commands a group of adventurers that roam around the map, solve quests, gain items, adventure into temples, battle goblins, etc. You can probably imagine that the business logic for this is very complex!"),n.a.createElement("p",null,"Before I sat out, I naturally expected the Redux parts of my app to be very heavy. Yet here is my entire ",n.a.createElement("code",null,"battleReducer"),":"),n.a.createElement("pre",null,n.a.createElement("code",{className:"hljs"},n.a.createElement("span",{className:"hljs-keyword"},"function")," battle",n.a.createElement("span",{className:"hljs-constructor"},"Reducer(",n.a.createElement("span",{className:"hljs-params"},"currentstate"),",",n.a.createElement("span",{className:"hljs-params"},"action"),")"),"{",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-keyword"},"let")," newstate = augment",n.a.createElement("span",{className:"hljs-constructor"},"Battle(",n.a.createElement("span",{className:"hljs-params"},"cloneDeep"),"(",n.a.createElement("span",{className:"hljs-params"},"currentstate")," ",n.a.createElement("span",{className:"hljs-operator"},"||")," ",n.a.createElement("span",{className:"hljs-params"},"initialState"),".",n.a.createElement("span",{className:"hljs-params"},"battle"),")"),")",n.a.createElement("br",null),"  switch(action.",n.a.createElement("span",{className:"hljs-keyword"},"type"),"){",n.a.createElement("br",null),"    case C.START_GAME: return console.log('act',action)",n.a.createElement("span",{className:"hljs-operator"}," || "),"go",n.a.createElement("span",{className:"hljs-constructor"},"ToMode(",n.a.createElement("span",{className:"hljs-params"},"startBattle"),"(",n.a.createElement("span",{className:"hljs-params"},"action"),".",n.a.createElement("span",{className:"hljs-params"},"seating"),", ",n.a.createElement("span",{className:"hljs-params"},"action"),".",n.a.createElement("span",{className:"hljs-params"},"layout"),", ",n.a.createElement("span",{className:"hljs-params"},"action"),".",n.a.createElement("span",{className:"hljs-params"},"startingQuests"),")"),",C.MODE_GENERATE_BOARD)",n.a.createElement("br",null),"    case C.SELECT_TRAVEL: return make",n.a.createElement("span",{className:"hljs-constructor"},"Choice(",n.a.createElement("span",{className:"hljs-params"},"newstate"),", '",n.a.createElement("span",{className:"hljs-params"},"travel"),"', ",n.a.createElement("span",{className:"hljs-params"},"action"),".",n.a.createElement("span",{className:"hljs-params"},"travel"),")"),n.a.createElement("br",null),"    case C.SELECT_UNIT: return make",n.a.createElement("span",{className:"hljs-constructor"},"Choice(",n.a.createElement("span",{className:"hljs-params"},"newstate"),", '",n.a.createElement("span",{className:"hljs-params"},"unit"),"', ",n.a.createElement("span",{className:"hljs-params"},"action"),".",n.a.createElement("span",{className:"hljs-params"},"unit"),")"),n.a.createElement("br",null),"    case C.SELECT_SECTION: return make",n.a.createElement("span",{className:"hljs-constructor"},"Choice(",n.a.createElement("span",{className:"hljs-params"},"newstate"),", '",n.a.createElement("span",{className:"hljs-params"},"section"),"', ",n.a.createElement("span",{className:"hljs-params"},"action"),".",n.a.createElement("span",{className:"hljs-params"},"section"),")"),n.a.createElement("br",null),"    case C.SELECT_GOBLIN: return make",n.a.createElement("span",{className:"hljs-constructor"},"Choice(",n.a.createElement("span",{className:"hljs-params"},"newstate"),", '",n.a.createElement("span",{className:"hljs-params"},"goblin"),"', ",n.a.createElement("span",{className:"hljs-params"},"action"),".",n.a.createElement("span",{className:"hljs-params"},"goblin"),")"),n.a.createElement("br",null),"    case C.SELECT_QUEST: return make",n.a.createElement("span",{className:"hljs-constructor"},"Choice(",n.a.createElement("span",{className:"hljs-params"},"newstate"),", '",n.a.createElement("span",{className:"hljs-params"},"quest"),"', ",n.a.createElement("span",{className:"hljs-params"},"action"),".",n.a.createElement("span",{className:"hljs-params"},"quest"),")"),n.a.createElement("br",null),"    case C.SELECT_COMMAND: return newstate.commands",n.a.createElement("span",{className:"hljs-literal"},"[",n.a.createElement("span",{className:"hljs-identifier"},"action"),".",n.a.createElement("span",{className:"hljs-identifier"},"command"),"]"),".effect(newstate,action.arg)",n.a.createElement("br",null),"    default: return newstate;",n.a.createElement("br",null),"  }",n.a.createElement("br",null),"};",n.a.createElement("br",null))),n.a.createElement("p",null,"As you might gather, the actions correspond to interactions with the UI - this is a list of all the different categories of items that a user can click on. Which also means that the action creators are similarly simple. So, then, where is the logic?"),n.a.createElement("p",null,"It lives in a gargantuan object of \"modes\". Each mode is a specific point in the game, and defines what input it requires, what commands are available and what happens when they are called. As an example, here's the mode for when we've visited a mushroom village to get some help battling goblins:"),n.a.createElement("pre",null,n.a.createElement("code",{className:"hljs language-javascript"},"[C.MODE_VILLAGE_HIT2]: {",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-attr"},"setup"),": ",n.a.createElement("span",{className:"hljs-function"},n.a.createElement("span",{className:"hljs-params"},"b"),"=>")," {",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-keyword"},"if")," (!",n.a.createElement("span",{className:"hljs-built_in"},"Object"),".keys(activeGoblinTargets(b)).length){",n.a.createElement("br",null),"      ",n.a.createElement("span",{className:"hljs-keyword"},"return")," goToMode(b,C.MODE_CHECK_QUESTS)",n.a.createElement("br",null),"    }",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-keyword"},"return")," b",n.a.createElement("br",null),"  },",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-attr"},"instruction"),": ",n.a.createElement("span",{className:"hljs-function"},n.a.createElement("span",{className:"hljs-params"},"b"),"=>")," ",n.a.createElement("span",{className:"hljs-string"},'"Deal 2 dmg to a goblin one of your heroes are fighting!"'),",",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-attr"},"options"),": {",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-attr"},"goblin"),": activeGoblinTargets",n.a.createElement("br",null),"  },",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-attr"},"commands"),": ",n.a.createElement("span",{className:"hljs-function"},"(",n.a.createElement("span",{className:"hljs-params"},"b"),")=>")," ({",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-attr"},"hit"),": {",n.a.createElement("br",null),"      ",n.a.createElement("span",{className:"hljs-attr"},"available"),": ",n.a.createElement("span",{className:"hljs-function"},n.a.createElement("span",{className:"hljs-params"},"b"),"=>")," b.choices.goblin,",n.a.createElement("br",null),"      ",n.a.createElement("span",{className:"hljs-attr"},"effect"),": ",n.a.createElement("span",{className:"hljs-function"},n.a.createElement("span",{className:"hljs-params"},"b"),"=>")," {",n.a.createElement("br",null),"        b = pokeGoblin(b)",n.a.createElement("br",null),"        ",n.a.createElement("span",{className:"hljs-keyword"},"return")," goToMode(b,C.MODE_CHECK_QUESTS)",n.a.createElement("br",null),"      }",n.a.createElement("br",null),"    },",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-attr"},"skip"),": {",n.a.createElement("br",null),"      ",n.a.createElement("span",{className:"hljs-attr"},"effect"),": ",n.a.createElement("span",{className:"hljs-function"},n.a.createElement("span",{className:"hljs-params"},"b"),"=>")," goToMode(b,C.MODE_CHECK_QUESTS)",n.a.createElement("br",null),"    }",n.a.createElement("br",null),"  })",n.a.createElement("br",null),"}")),n.a.createElement("p",null,"In other words, the business logic is spearated not just from the views (React), but also from the data layer (Redux)! In a bout of nostalgia I could switch out Redux for Reflux, and I wouldn't have to touch my business code."),n.a.createElement("h3",{id:"wrapping-up"},"Wrapping up"),n.a.createElement("p",null,"Now, I'm not saying that option 4 rulez all, and that you should go forth to separate the business logic from Redux like this. But there are times when it has merits, and I think there is value just in realising that there ",n.a.createElement("em",null,"are")," 4 options and not just 3!"),n.a.createElement("p",null,"And, again - don't be afraid of fat action creators!")),n.a.createElement("hr",null))}}},[["+pr8",1,0]]]);