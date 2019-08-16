(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{"5Odz":function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),n=t.n(l),r=t("JRaF"),s=t("YFqc"),c=t.n(s),m={url:"how-to-reduce-boilerplate-in-redux",id:"reduxpattern",type:"post",title:"How to reduce boilerplate in Redux",date:"2018-12-13",tags:["redux","typescript","cyclejs"],author:"david",excerpt:"Exploring a pattern that lets us group related logic and reduce boilerplate in Redux apps",folder:"/Users/davidwaller/Documents/gitreps/priv/blog2/sources/2018-12-13_reduxpattern",hasStaticContent:!1};a.default=function(){return n.a.createElement(r.a,{kind:"post",data:m,title:"How to reduce boilerplate in Redux",summary:"Exploring a pattern that lets us group related logic and reduce boilerplate in Redux apps"},n.a.createElement("p",null,"Tags: ",n.a.createElement(c.a,{href:"/tags/redux"},n.a.createElement("a",null,"redux"))," ",n.a.createElement(c.a,{href:"/tags/typescript"},n.a.createElement("a",null,"typescript"))," ",n.a.createElement(c.a,{href:"/tags/cyclejs"},n.a.createElement("a",null,"cyclejs"))),n.a.createElement("div",{className:"post","data-postid":"reduxpattern"},n.a.createElement("h3",{id:"premise"},"Premise"),n.a.createElement("p",null,n.a.createElement("a",{href:"https://redux.js.org/"},"Redux")," is frequently bemoaned for forcing you to write a fair bit of boilerplate. Sometimes that critisism is not fair as the code in question is actually necessary, but definitely Redux app can often feel very verbose."),n.a.createElement("p",null,"In October I attended ",n.a.createElement("a",{href:"http://cycleconf.com/"},"CycleConf"),", the yearly conference for the ",n.a.createElement("a",{href:"https://cycle.js.org/"},"CycleJS")," framework. There I got to play with ",n.a.createElement("a",{href:"https://cycle.js.org/api/state.html"},"Cycle State"),", a new API where each component gets the current state as an input stream, and returns a stream of reducers to calculate the next state."),n.a.createElement("p",null,"CycleJS is of course very (very) different from a Redux-driven app, but I realised that the same pattern can be applied to Redux nonetheless! And doing so means less boilerplate and better grouping of related logic."),n.a.createElement("p",null,"In this post we'll explore a TypeScript-driven example, where we'll first write \"traditional\" Redux code, and then refactor it to the pattern in question."),n.a.createElement("p",null,"For brevity's sake I'll be cutting some corners, so neither logic nor modelling will be optimal with regards to perfomance and convenience."),n.a.createElement("h3",{id:"the-data-model"},"The data model"),n.a.createElement("p",null,"Imagine that we have an app with ",n.a.createElement("em",null,"users")," and ",n.a.createElement("em",null,"posts"),":"),n.a.createElement("pre",null,n.a.createElement("code",{className:"hljs language-typescript"},n.a.createElement("span",{className:"hljs-keyword"},"type")," User = {",n.a.createElement("br",null),"  name: ",n.a.createElement("span",{className:"hljs-built_in"},"string"),";",n.a.createElement("br",null),"  postIds: ",n.a.createElement("span",{className:"hljs-built_in"},"string"),"[];",n.a.createElement("br",null),"};",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("span",{className:"hljs-keyword"},"type")," Post = {",n.a.createElement("br",null),"  title: ",n.a.createElement("span",{className:"hljs-built_in"},"string"),";",n.a.createElement("br",null),"  content: ",n.a.createElement("span",{className:"hljs-built_in"},"string"),";",n.a.createElement("br",null),"  authorId: ",n.a.createElement("span",{className:"hljs-built_in"},"string"),";",n.a.createElement("br",null),"};")),n.a.createElement("p",null,"They each live in a top-level prop in our ",n.a.createElement("em",null,"app state"),":"),n.a.createElement("pre",null,n.a.createElement("code",{className:"hljs language-typescript"},n.a.createElement("span",{className:"hljs-keyword"},"type")," UserState = { [ID: ",n.a.createElement("span",{className:"hljs-built_in"},"string"),"]: User };",n.a.createElement("br",null),n.a.createElement("span",{className:"hljs-keyword"},"type")," PostState = { [ID: ",n.a.createElement("span",{className:"hljs-built_in"},"string"),"]: Post };",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("span",{className:"hljs-keyword"},"type")," AppState = {",n.a.createElement("br",null),"  users: UserState;",n.a.createElement("br",null),"  posts: PostState;",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-comment"},"// ...probably more stuff here too"),n.a.createElement("br",null),"};")),n.a.createElement("h3",{id:"creating-actions"},"Creating actions"),n.a.createElement("p",null,"We'll be using the popular action format where all additional data are collected in a ",n.a.createElement("code",null,"payload")," prop:"),n.a.createElement("pre",null,n.a.createElement("code",{className:"hljs language-typescript"},n.a.createElement("span",{className:"hljs-keyword"},"type")," ActionBlueprint<T, P> = {",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-keyword"},"type"),": T;",n.a.createElement("br",null),"  payload: P;",n.a.createElement("br",null),"};")),n.a.createElement("p",null,"For our experiment, let's make up two actions - we want to ",n.a.createElement("em",null,"delete posts")," and ",n.a.createElement("em",null,"add posts"),"!"),n.a.createElement("pre",null,n.a.createElement("code",{className:"hljs language-typescript"},n.a.createElement("span",{className:"hljs-keyword"},"type")," NewPostPayload = {",n.a.createElement("br",null),"  title: ",n.a.createElement("span",{className:"hljs-built_in"},"string"),";",n.a.createElement("br",null),"  content: ",n.a.createElement("span",{className:"hljs-built_in"},"string"),";",n.a.createElement("br",null),"  authorId: ",n.a.createElement("span",{className:"hljs-built_in"},"string"),";",n.a.createElement("br",null),"  postId: ",n.a.createElement("span",{className:"hljs-built_in"},"string"),";",n.a.createElement("br",null),"};",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("span",{className:"hljs-keyword"},"type")," NewPostAction = ActionBlueprint<",n.a.createElement("span",{className:"hljs-string"},'"NEW_POST"'),", NewPostPayload>;",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("span",{className:"hljs-keyword"},"type")," DeletePostPayload = {",n.a.createElement("br",null),"  postId: ",n.a.createElement("span",{className:"hljs-built_in"},"string"),";",n.a.createElement("br",null),"};",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("span",{className:"hljs-keyword"},"type")," DeletePostAction = ActionBlueprint<",n.a.createElement("span",{className:"hljs-string"},'"DELETE_POST"'),", DeletePostPayload>;")),n.a.createElement("p",null,"We'll also make an ",n.a.createElement("code",null,"AppAction")," type that's simply the union of all existing actions in our app:"),n.a.createElement("pre",null,n.a.createElement("code",{className:"hljs language-typescript"},n.a.createElement("span",{className:"hljs-keyword"},"type")," AppAction = NewPostAction | DeletePostAction; ",n.a.createElement("span",{className:"hljs-comment"},"// ..."))),n.a.createElement("p",null,"Creating a ",n.a.createElement("em",null,"new post action")," could be done something like this:"),n.a.createElement("pre",null,n.a.createElement("code",{className:"hljs language-typescript"},n.a.createElement("span",{className:"hljs-keyword"},"const")," NewPostActionCreator = (",n.a.createElement("br",null),"  title: ",n.a.createElement("span",{className:"hljs-built_in"},"string"),",",n.a.createElement("br",null),"  content: ",n.a.createElement("span",{className:"hljs-built_in"},"string"),",",n.a.createElement("br",null),"  authorId: ",n.a.createElement("span",{className:"hljs-built_in"},"string"),",",n.a.createElement("br",null),"  postId: ",n.a.createElement("span",{className:"hljs-built_in"},"string"),n.a.createElement("br",null),"): ",n.a.createElement("span",{className:"hljs-function"},n.a.createElement("span",{className:"hljs-params"},"NewPostAction")," =>")," ({",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-keyword"},"type"),": ",n.a.createElement("span",{className:"hljs-string"},'"NEW_POST"'),",",n.a.createElement("br",null),"  payload: {",n.a.createElement("br",null),"    title,",n.a.createElement("br",null),"    content,",n.a.createElement("br",null),"    authorId,",n.a.createElement("br",null),"    postId",n.a.createElement("br",null),"  }",n.a.createElement("br",null),"});")),n.a.createElement("p",null,"And here's how we create ",n.a.createElement("em",null,"delete post actions"),":"),n.a.createElement("pre",null,n.a.createElement("code",{className:"hljs language-typescript"},n.a.createElement("span",{className:"hljs-keyword"},"const")," DeletePostActionCreator = (postId: PostId): ",n.a.createElement("span",{className:"hljs-function"},n.a.createElement("span",{className:"hljs-params"},"DeletePostAction")," =>")," ({",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-keyword"},"type"),": ",n.a.createElement("span",{className:"hljs-string"},'"DELETE_POST"'),",",n.a.createElement("br",null),"  payload: { postId }",n.a.createElement("br",null),"});")),n.a.createElement("h3",{id:"reducer-take-one"},"Reducer, take one"),n.a.createElement("p",null,"In a traditional Redux app we'd create a subreducer for ",n.a.createElement("code",null,"appState.posts"),":"),n.a.createElement("pre",null,n.a.createElement("code",{className:"hljs language-typescript"},n.a.createElement("span",{className:"hljs-keyword"},"const")," postReducer = (postState: PostState, action: AppAction): ",n.a.createElement("span",{className:"hljs-function"},n.a.createElement("span",{className:"hljs-params"},"PostState")," =>")," {",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-keyword"},"switch")," (action.type) {",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-keyword"},"case")," ",n.a.createElement("span",{className:"hljs-string"},'"NEW_POST"'),":",n.a.createElement("br",null),"      ",n.a.createElement("span",{className:"hljs-keyword"},"return")," {",n.a.createElement("br",null),"        ...postState,",n.a.createElement("br",null),"        [action.payload.postId]: {",n.a.createElement("br",null),"          title: action.payload.title,",n.a.createElement("br",null),"          content: action.payload.content,",n.a.createElement("br",null),"          authorId: action.payload.authorId",n.a.createElement("br",null),"        }",n.a.createElement("br",null),"      };",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-keyword"},"case")," ",n.a.createElement("span",{className:"hljs-string"},'"DELETE_POST"'),": {",n.a.createElement("br",null),"      ",n.a.createElement("span",{className:"hljs-keyword"},"const")," { [action.payload.postId]: DELETE_ME, ...keepUs } = postState;",n.a.createElement("br",null),"      ",n.a.createElement("span",{className:"hljs-keyword"},"return")," keepUs;",n.a.createElement("br",null),"    }",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-keyword"},"default"),":",n.a.createElement("br",null),"      ",n.a.createElement("span",{className:"hljs-keyword"},"return")," postState;",n.a.createElement("br",null),"  }",n.a.createElement("br",null),"};")),n.a.createElement("p",null,"The subreducer for ",n.a.createElement("code",null,"appState.users")," also has to deal with both actions, in order to keep the user postlists up to date:"),n.a.createElement("pre",null,n.a.createElement("code",{className:"hljs language-typescript"},n.a.createElement("span",{className:"hljs-keyword"},"const")," userReducer = (userState: UserState, action: AppAction): ",n.a.createElement("span",{className:"hljs-function"},n.a.createElement("span",{className:"hljs-params"},"UserState")," =>")," {",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-keyword"},"switch")," (action.type) {",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-keyword"},"case")," ",n.a.createElement("span",{className:"hljs-string"},'"NEW_POST"'),": {",n.a.createElement("br",null),"      ",n.a.createElement("span",{className:"hljs-keyword"},"const")," author = userState[action.payload.authorId];",n.a.createElement("br",null),"      ",n.a.createElement("span",{className:"hljs-keyword"},"return")," {",n.a.createElement("br",null),"        ...userState,",n.a.createElement("br",null),"        [author.userId]: {",n.a.createElement("br",null),"          ...author,",n.a.createElement("br",null),"          postIds: author.postIds.concat(action.payload.postId)",n.a.createElement("br",null),"        }",n.a.createElement("br",null),"      };",n.a.createElement("br",null),"    }",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-keyword"},"case")," ",n.a.createElement("span",{className:"hljs-string"},'"DELETE_POST"'),":",n.a.createElement("br",null),"      ",n.a.createElement("span",{className:"hljs-keyword"},"return")," ",n.a.createElement("span",{className:"hljs-built_in"},"Object"),".keys(userState).reduce(",n.a.createElement("br",null),"        ",n.a.createElement("span",{className:"hljs-function"},"(",n.a.createElement("span",{className:"hljs-params"},"mem, userId"),") =>")," {",n.a.createElement("br",null),"          ",n.a.createElement("span",{className:"hljs-keyword"},"const")," user = userState[userId];",n.a.createElement("br",null),"          ",n.a.createElement("span",{className:"hljs-keyword"},"return")," {",n.a.createElement("br",null),"            ...mem,",n.a.createElement("br",null),"            [userId]: {",n.a.createElement("br",null),"              ...user,",n.a.createElement("br",null),"              postIds: user.postIds.filter(",n.a.createElement("span",{className:"hljs-function"},n.a.createElement("span",{className:"hljs-params"},"pid")," =>")," pid !== action.payload.postId)",n.a.createElement("br",null),"            }",n.a.createElement("br",null),"          };",n.a.createElement("br",null),"        },",n.a.createElement("br",null),"        {} ",n.a.createElement("span",{className:"hljs-keyword"},"as")," UserState",n.a.createElement("br",null),"      );",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-keyword"},"default"),":",n.a.createElement("br",null),"      ",n.a.createElement("span",{className:"hljs-keyword"},"return")," userState;",n.a.createElement("br",null),"  }",n.a.createElement("br",null),"};")),n.a.createElement("p",null,"The reducer for our entire app state is merely just putting the subreducers together:"),n.a.createElement("pre",null,n.a.createElement("code",{className:"hljs language-typescript"},n.a.createElement("span",{className:"hljs-keyword"},"type")," Reducer = ",n.a.createElement("span",{className:"hljs-function"},"(",n.a.createElement("span",{className:"hljs-params"},"state: AppState, action: AppAction"),") =>")," AppState;",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("span",{className:"hljs-keyword"},"const")," reducer: Reducer = ",n.a.createElement("span",{className:"hljs-function"},"(",n.a.createElement("span",{className:"hljs-params"},"state, action"),") =>")," ({",n.a.createElement("br",null),"  users: userReducer(currentState.users, action),",n.a.createElement("br",null),"  posts: postReducer(currentState.posts, action)",n.a.createElement("br",null),"});")),n.a.createElement("p",null,"Normally you'd use ",n.a.createElement("code",null,"Redux.combineReducers"),", but that amounts to the same thing."),n.a.createElement("h3",{id:"intermission"},"Intermission"),n.a.createElement("p",null,"So far the traditional approach. What's wrong with it?"),n.a.createElement("p",null,"Well, some would say we've written a fair bit of boilerplate. I'm not sure I fully agree, but definitely it feels verbose."),n.a.createElement("p",null,"A worse thing is the shattering of related logic. If you're new to the codebase and want to read up on how post deletion works, you have to look in three places:"),n.a.createElement("ul",null,n.a.createElement("li",null,"the delete action creator"),n.a.createElement("li",null,"the user reducer"),n.a.createElement("li",null,"the post reducer")),n.a.createElement("p",null,"And in reality it is worse - you have to look in the action creator and in ALL subreducers, because you don't really know which ones might have interest in the action!"),n.a.createElement("h3",{id:"actions-20"},"Actions 2.0"),n.a.createElement("p",null,"The pattern we're exploring in this post has a very simple solution to this problem - we ",n.a.createElement("em",null,"move all related reducing into the action objects"),"!"),n.a.createElement("p",null,"An action, apart from the payload, may therefore also include reducers for whatever state domain it wants to affect! Thus we extend our action type accordingly:"),n.a.createElement("pre",null,n.a.createElement("code",{className:"hljs language-typescript"},n.a.createElement("span",{className:"hljs-keyword"},"type")," ActionBlueprint<T, P> = {",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-keyword"},"type"),": T;",n.a.createElement("br",null),"  payload: P;",n.a.createElement("br",null),"  reduceUsers?(userState: UserState, payload: P): UserState;",n.a.createElement("br",null),"  reducePosts?(postState: PostState, payload: P): PostState;",n.a.createElement("br",null),"};")),n.a.createElement("p",null,"Here's what the ",n.a.createElement("code",null,"DeletePostActionCreator")," could look like in this modern take:"),n.a.createElement("pre",null,n.a.createElement("code",{className:"hljs language-typescript"},n.a.createElement("span",{className:"hljs-keyword"},"const")," DeletePostActionCreator = (postId: ",n.a.createElement("span",{className:"hljs-built_in"},"string"),"): ",n.a.createElement("span",{className:"hljs-function"},n.a.createElement("span",{className:"hljs-params"},"DeletePostAction")," =>")," ({",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-keyword"},"type"),": ",n.a.createElement("span",{className:"hljs-string"},'"DELETE_POST"'),",",n.a.createElement("br",null),"  payload: { postId },",n.a.createElement("br",null),"  reducePosts(postState, payload) {",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-keyword"},"const")," { [payload.postId]: DELETE_ME, ...keepUs } = postState;",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-keyword"},"return")," keepUs;",n.a.createElement("br",null),"  },",n.a.createElement("br",null),"  reduceUsers(userState, payload) {",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-keyword"},"return")," ",n.a.createElement("span",{className:"hljs-built_in"},"Object"),".keys(userState).reduce(",n.a.createElement("br",null),"      ",n.a.createElement("span",{className:"hljs-function"},"(",n.a.createElement("span",{className:"hljs-params"},"mem, userId"),") =>")," {",n.a.createElement("br",null),"        ",n.a.createElement("span",{className:"hljs-keyword"},"const")," user = userState[userId];",n.a.createElement("br",null),"        ",n.a.createElement("span",{className:"hljs-keyword"},"return")," {",n.a.createElement("br",null),"          ...mem,",n.a.createElement("br",null),"          [userId]: {",n.a.createElement("br",null),"            ...user,",n.a.createElement("br",null),"            postIds: user.postIds.filter(",n.a.createElement("span",{className:"hljs-function"},n.a.createElement("span",{className:"hljs-params"},"pid")," =>")," pid !== payload.postId)",n.a.createElement("br",null),"          }",n.a.createElement("br",null),"        };",n.a.createElement("br",null),"      },",n.a.createElement("br",null),"      {} ",n.a.createElement("span",{className:"hljs-keyword"},"as")," UserState",n.a.createElement("br",null),"    );",n.a.createElement("br",null),"  }",n.a.createElement("br",null),"});")),n.a.createElement("p",null,"The logic inside the minireducers is what used to live inside individual ",n.a.createElement("code",null,"case"),":s in the old subreducers."),n.a.createElement("p",null,"And the ",n.a.createElement("code",null,"NewPostActionCreator")," for completion's sake:"),n.a.createElement("pre",null,n.a.createElement("code",{className:"hljs language-typescript"},n.a.createElement("span",{className:"hljs-keyword"},"const")," NewPostActionCreator = (",n.a.createElement("br",null),"  title: ",n.a.createElement("span",{className:"hljs-built_in"},"string"),",",n.a.createElement("br",null),"  content: ",n.a.createElement("span",{className:"hljs-built_in"},"string"),",",n.a.createElement("br",null),"  authorId: ",n.a.createElement("span",{className:"hljs-built_in"},"string"),",",n.a.createElement("br",null),"  postId: ",n.a.createElement("span",{className:"hljs-built_in"},"string"),n.a.createElement("br",null),"): ",n.a.createElement("span",{className:"hljs-function"},n.a.createElement("span",{className:"hljs-params"},"NewPostAction")," =>")," ({",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-keyword"},"type"),": ",n.a.createElement("span",{className:"hljs-string"},'"NEW_POST"'),",",n.a.createElement("br",null),"  payload: {",n.a.createElement("br",null),"    title,",n.a.createElement("br",null),"    content,",n.a.createElement("br",null),"    authorId,",n.a.createElement("br",null),"    postId",n.a.createElement("br",null),"  },",n.a.createElement("br",null),"  reducePosts(postState, payload) {",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-keyword"},"return")," {",n.a.createElement("br",null),"      ...postState,",n.a.createElement("br",null),"      [payload.postId]: {",n.a.createElement("br",null),"        title: payload.title,",n.a.createElement("br",null),"        content: payload.content,",n.a.createElement("br",null),"        authorId: payload.authorId",n.a.createElement("br",null),"      }",n.a.createElement("br",null),"    };",n.a.createElement("br",null),"  },",n.a.createElement("br",null),"  reduceUsers(userState, payload) {",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-keyword"},"const")," author = userState[payload.authorId];",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-keyword"},"return")," {",n.a.createElement("br",null),"      ...userState,",n.a.createElement("br",null),"      [author.userId]: {",n.a.createElement("br",null),"        ...author,",n.a.createElement("br",null),"        postIds: author.postIds.concat(payload.postId)",n.a.createElement("br",null),"      }",n.a.createElement("br",null),"    };",n.a.createElement("br",null),"  }",n.a.createElement("br",null),"});")),n.a.createElement("p",null,"Note that we don't pass in the full action object to the reducers. Why would we? We are inside a specific creator, so we know what type it is!"),n.a.createElement("h3",{id:"reducer-20"},"Reducer 2.0"),n.a.createElement("p",null,"What about the reducers in this brave new world? Well, first off there are no subreducers anymore. The various cases from their switches instead lives in the individual action creators, as you just saw."),n.a.createElement("p",null,"The main reducer is simply a matter of applying whatever reducers the action in question happen to have:"),n.a.createElement("pre",null,n.a.createElement("code",{className:"hljs language-typescript"},n.a.createElement("span",{className:"hljs-keyword"},"type")," Reducer = (",n.a.createElement("br",null),"  state: AppState,",n.a.createElement("br",null),"  action: ActionBlueprint<",n.a.createElement("span",{className:"hljs-built_in"},"string"),", ",n.a.createElement("span",{className:"hljs-built_in"},"any"),">",n.a.createElement("br",null),") => AppState;",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("span",{className:"hljs-keyword"},"const")," reducer: Reducer = ",n.a.createElement("span",{className:"hljs-function"},"(",n.a.createElement("span",{className:"hljs-params"},"state, action"),") =>")," ({",n.a.createElement("br",null),"  users: action.reduceUsers",n.a.createElement("br",null),"    ? action.reduceUsers(state.users, action.payload)",n.a.createElement("br",null),"    : state.users,",n.a.createElement("br",null),"  posts: action.reducePosts",n.a.createElement("br",null),"    ? action.reducePosts(state.posts, action.payload)",n.a.createElement("br",null),"    : state.posts",n.a.createElement("br",null),"});")),n.a.createElement("h3",{id:"taking-score"},"Taking score"),n.a.createElement("p",null,"So, did we reduce the amount of boilerplate? I think so! The string matching with ",n.a.createElement("code",null,"action.type")," is completely gone, and the Redux-typical switches are nowhere to be seen."),n.a.createElement("p",null,"But the big win in my mind is the colocation of related logic. Each action creator file will contain the full truth about how that particular action affects the state."),n.a.createElement("p",null,"A third, less obvious win is that we get a clearer separation between actions and thunks. Normally it is very common for the former to be created inline in the latter, but now that the actions carry the reducers it is more obvious that they are their own thing."),n.a.createElement("h3",{id:"actions-30"},"Actions 3.0"),n.a.createElement("p",null,"But, waitaminue - why are we splitting up the reducing by state domain? Why don't we just do everything in a single reducer for the full state in one fell swoop?"),n.a.createElement("pre",null,n.a.createElement("code",{className:"hljs language-typescript"},n.a.createElement("span",{className:"hljs-keyword"},"type")," ActionBlueprint<T, P> = {",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-keyword"},"type"),": T;",n.a.createElement("br",null),"  payload: P;",n.a.createElement("br",null),"  reducer: ",n.a.createElement("span",{className:"hljs-function"},"(",n.a.createElement("span",{className:"hljs-params"},"state: AppState, payload: P"),") =>")," AppState;",n.a.createElement("br",null),"};")),n.a.createElement("p",null,"The ",n.a.createElement("code",null,"NewPostActionCreator")," can then be streamlined to this..."),n.a.createElement("pre",null,n.a.createElement("code",{className:"hljs language-typescript"},n.a.createElement("span",{className:"hljs-keyword"},"const")," NewPostActionCreator = (",n.a.createElement("br",null),"  title: ",n.a.createElement("span",{className:"hljs-built_in"},"string"),",",n.a.createElement("br",null),"  content: ",n.a.createElement("span",{className:"hljs-built_in"},"string"),",",n.a.createElement("br",null),"  authorId: UserId,",n.a.createElement("br",null),"  postId: PostId",n.a.createElement("br",null),"): ",n.a.createElement("span",{className:"hljs-function"},n.a.createElement("span",{className:"hljs-params"},"NewPostAction")," =>")," ({",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-keyword"},"type"),": ",n.a.createElement("span",{className:"hljs-string"},'"NEW_POST"'),",",n.a.createElement("br",null),"  payload: {",n.a.createElement("br",null),"    postId,",n.a.createElement("br",null),"    title,",n.a.createElement("br",null),"    content,",n.a.createElement("br",null),"    authorId",n.a.createElement("br",null),"  },",n.a.createElement("br",null),"  reducer(state, payload) {",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-keyword"},"const")," author = state.users[payload.authorId];",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-keyword"},"return")," {",n.a.createElement("br",null),"      ...state,",n.a.createElement("br",null),"      posts: {",n.a.createElement("br",null),"        ...state.posts,",n.a.createElement("br",null),"        [payload.postId]: {",n.a.createElement("br",null),"          title: payload.title,",n.a.createElement("br",null),"          content: payload.content,",n.a.createElement("br",null),"          authorId: payload.authorId",n.a.createElement("br",null),"        }",n.a.createElement("br",null),"      },",n.a.createElement("br",null),"      users: {",n.a.createElement("br",null),"        ...state.users,",n.a.createElement("br",null),"        [author.userId]: {",n.a.createElement("br",null),"          ...author,",n.a.createElement("br",null),"          posts: author.posts.concat(payload.postId)",n.a.createElement("br",null),"        }",n.a.createElement("br",null),"      }",n.a.createElement("br",null),"    };",n.a.createElement("br",null),"  }",n.a.createElement("br",null),"});")),n.a.createElement("p",null,"...and ",n.a.createElement("code",null,"DeletePostActionCreator")," becomes very short and sweet:"),n.a.createElement("pre",null,n.a.createElement("code",{className:"hljs language-typescript"},n.a.createElement("span",{className:"hljs-keyword"},"const")," DeletePostActionCreator3 = (postId: PostId): ",n.a.createElement("span",{className:"hljs-function"},n.a.createElement("span",{className:"hljs-params"},"DeletePostAction")," =>")," ({",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-keyword"},"type"),": ",n.a.createElement("span",{className:"hljs-string"},'"DELETE_POST"'),",",n.a.createElement("br",null),"  payload: { postId },",n.a.createElement("br",null),"  reducer(state, payload) {",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-keyword"},"const")," { [payload.postId]: postToDelete, ...postsToKeep } = state.posts;",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-keyword"},"const")," author = state.users[postToDelete.authorId];",n.a.createElement("br",null),"    ",n.a.createElement("span",{className:"hljs-keyword"},"return")," {",n.a.createElement("br",null),"      ...state,",n.a.createElement("br",null),"      posts: postsToKeep,",n.a.createElement("br",null),"      users: {",n.a.createElement("br",null),"        ...state.users,",n.a.createElement("br",null),"        [postToDelete.authorId]: {",n.a.createElement("br",null),"          ...author,",n.a.createElement("br",null),"          posts: author.posts.filter(",n.a.createElement("span",{className:"hljs-function"},n.a.createElement("span",{className:"hljs-params"},"pid")," =>")," pid !== payload.postId)",n.a.createElement("br",null),"        }",n.a.createElement("br",null),"      }",n.a.createElement("br",null),"    };",n.a.createElement("br",null),"  }",n.a.createElement("br",null),"});")),n.a.createElement("p",null,"Another cute advantage is that we can now make our action type work for any app by adding the app state type to the generic parameters:"),n.a.createElement("pre",null,n.a.createElement("code",{className:"hljs language-typescript"},n.a.createElement("span",{className:"hljs-keyword"},"type")," ActionBlueprint<T, P, S> = {",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-keyword"},"type"),": T;",n.a.createElement("br",null),"  payload: P;",n.a.createElement("br",null),"  reducer: ",n.a.createElement("span",{className:"hljs-function"},"(",n.a.createElement("span",{className:"hljs-params"},"state: S, payload: P"),") =>")," S;",n.a.createElement("br",null),"};",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("span",{className:"hljs-keyword"},"type")," NewPostAction = ActionBlueprint<",n.a.createElement("span",{className:"hljs-string"},'"NEW_POST"'),", NewPostPayload, AppState>;",n.a.createElement("br",null),n.a.createElement("span",{className:"hljs-keyword"},"type")," DeletePostAction = ActionBlueprint<",n.a.createElement("br",null),"  ",n.a.createElement("span",{className:"hljs-string"},'"DELETE_POST"'),",",n.a.createElement("br",null),"  DeletePostPayload,",n.a.createElement("br",null),"  AppState",n.a.createElement("br",null),">;")),n.a.createElement("h3",{id:"reducer-30"},"Reducer 3.0"),n.a.createElement("p",null,'Now that each action just has one reducer, the "real" reducer becomes even simpler to define:'),n.a.createElement("pre",null,n.a.createElement("code",{className:"hljs language-typescript"},n.a.createElement("span",{className:"hljs-keyword"},"const")," reducer: Reducer = ",n.a.createElement("span",{className:"hljs-function"},"(",n.a.createElement("span",{className:"hljs-params"},"state, action"),") =>"),n.a.createElement("br",null),"  action.reducer ? action.reducer(state, action.payload) : state;")),n.a.createElement("p",null,"We still need to check that a reducer exists on the action, since Redux fires its own actions that won't have a built-in reducer."),n.a.createElement("h3",{id:"wrapping-up"},"Wrapping up"),n.a.createElement("p",null,"I really like how putting the reducing logic inside the action groups all related code together in one place. And you'll find that employing this pattern means less cruft and boilerplate."),n.a.createElement("p",null,"The only downside I can see with the pattern we just explored is that it might surprise developers used to the traditional approach. Other than that it is all wins in my book!"),n.a.createElement("p",null,"What do ",n.a.createElement("em",null,"you")," think?")),n.a.createElement("hr",null))}},S30p:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/how-to-reduce-boilerplate-in-redux",function(){var e=t("5Odz");return{page:e.default||e}}])}},[["S30p",1,0]]]);