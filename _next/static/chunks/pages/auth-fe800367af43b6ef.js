(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2473],{2304:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth",function(){return r(55545)}])},10466:function(e,t,r){"use strict";r.d(t,{d:function(){return CapacitorInput}});var n=r(85893),i=r(68949),s=r(23164),o=r(88766),a=r(10256),c=r(26988);let CapacitorInput=e=>(0,o.W)()?(0,n.jsx)(CapacitorInputNative,{...e}):(0,n.jsx)(CapacitorInputWeb,{...e}),CapacitorInputNative=e=>{let{onFocus:t,...r}=e,o=(0,s.ze)(),u=(0,c.L)(),scrollToInput=async e=>{let t=null==u?void 0:u.current,r=e.target,n=r.getBoundingClientRect();await (0,i.when)(()=>"exact"===o.keyboardHeight.type),await (0,a.Z)(100);let s=window.innerHeight-o.keyboardHeight.value,c=n.bottom+75-s;c>0&&(null==t||t.scrollBy({top:c,behavior:"smooth"}))};return(0,n.jsx)("input",{...r,onFocus:e=>{scrollToInput(e),null==t||t(e)}})},CapacitorInputWeb=e=>(0,n.jsx)("input",{...e})},83768:function(e,t,r){"use strict";r.d(t,{O:function(){return DarkLoadingIndicator}});var n=r(85893);r(67294);var i=r(9037);let DarkLoadingIndicator=e=>{let{duration:t=100,startAt:r=.1}=e;return(0,n.jsx)("div",{className:"dark",children:(0,n.jsx)("div",{className:"absolute inset-0 flex items-center justify-center bg-gradient-to-b from-bluegray-900 to-near-black",children:(0,n.jsxs)("div",{className:"flex flex-col items-center space-y-5",children:[(0,n.jsx)(i.P,{duration:t,startAt:r}),(0,n.jsx)("div",{className:"hidden text-near-white opacity-50",children:"Loading..."})]})})})}},18731:function(e,t,r){"use strict";r.d(t,{k:function(){return ProgressBar}});var n=r(85893);r(67294);let ProgressBar=e=>{let{progress:t}=e;return(0,n.jsx)("div",{className:" h-3 w-60 overflow-hidden rounded-md bg-coolgray-200 media-dark:bg-white/5 dark:bg-white/5 ",style:{maskImage:"radial-gradient(white, black)"},children:(0,n.jsx)("div",{className:" duration-250 h-full w-full rounded-md bg-coolgray-400 transition-all duration-200 ease-linear media-dark:bg-primary dark:bg-primary ",style:{transform:"translate3d(".concat(-((1-t)*100),"%, 0, 0)")}})})}},9037:function(e,t,r){"use strict";r.d(t,{P:function(){return PseudoProgressBar}});var n=r(85893),i=r(67294),s=r(18731);let PseudoProgressBar=e=>{let{duration:t,startAt:r=0}=e,[o,a]=(0,i.useState)(r);return(0,i.useEffect)(()=>{let e=setInterval(()=>{a(t=>t>=1?(clearInterval(e),1):t+.01)},t/100);return()=>clearInterval(e)},[]),(0,n.jsx)(s.k,{progress:o})}},62061:function(e,t,r){"use strict";r.d(t,{nv:function(){return SiteFooter},Re:function(){return o.R}});var n=r(85893),i=r(41664),s=r.n(i);function SiteFooter(){return(0,n.jsx)("footer",{className:"shrink-0 space-y-3 px-6 py-16",children:(0,n.jsxs)("div",{className:"mx-auto flex max-w-6xl flex-col items-center space-y-5 text-center",children:[(0,n.jsxs)("ul",{className:"flex space-x-6 text-sm text-white text-opacity-80 transition duration-300 hover:text-opacity-100",children:[(0,n.jsx)("li",{children:(0,n.jsx)(s(),{href:"https://reflect.app/discord",prefetch:!1,children:"Discord"})}),(0,n.jsx)("li",{children:(0,n.jsx)(s(),{href:"https://twitter.com/reflectnotes",prefetch:!1,children:"Twitter"})}),(0,n.jsx)("li",{children:(0,n.jsx)(s(),{href:"/terms",prefetch:!1,children:"Terms"})}),(0,n.jsx)("li",{children:(0,n.jsx)(s(),{href:"/privacy",prefetch:!1,children:"Privacy"})})]}),(0,n.jsx)("div",{className:"text-sm text-[#B1B2DD]",children:"Reflect App, LLC. All rights reserved."})]})})}r(67294),r(31020);var o=r(96426)},31020:function(e,t,r){"use strict";r.d(t,{E:function(){return SiteLogoImageAlt},n:function(){return SiteLogoImage}});var n=r(85893),i=r(25675),s=r.n(i);r(67294);let SiteLogoImage=e=>{let{width:t=32,height:r=32,className:i}=e;return(0,n.jsx)(s(),{alt:"Reflect",src:"/site/icons/1024x1024.png",className:i,width:t,height:r,quality:100})},SiteLogoImageAlt=e=>{let{width:t=384,height:r=240,className:i}=e;return(0,n.jsx)(s(),{alt:"Reflect",src:"/site/logo-alt.png",className:i,width:t,height:r,quality:100})}},96426:function(e,t,r){"use strict";r.d(t,{R:function(){return SiteModal}});var n=r(85893),i=r(25675),s=r.n(i);r(67294);var o=r(78789);let SiteModal=e=>{let{children:t}=e;return(0,n.jsx)(o.r,{open:!0,children:(0,n.jsxs)("div",{className:"flex flex-1 flex-col items-center justify-center",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s(),{alt:"Reflect",src:"/site/logo-alt.png",width:384,height:240})}),(0,n.jsx)("div",{className:"mt-8 text-center text-white",children:t})]})})}},44380:function(e,t,r){"use strict";r.d(t,{oH:function(){return getAuthState},oJ:function(){return setAuthState}});let n="auth-state",i=window.localStorage;function setAuthState(e){try{null==i||i.setItem(n,JSON.stringify(e))}catch(e){console.error(e)}}function getAuthState(){try{let e=null==i?void 0:i.getItem(n);return e?JSON.parse(e):{}}catch(e){return console.error(e),null}}},88766:function(e,t,r){"use strict";r.d(t,{W:function(){return isCapacitor}});var n=r(29895);function isCapacitor(){return n.dV.isNativePlatform()}},91425:function(e,t,r){"use strict";r.d(t,{KF:function(){return currentEnvironment},Y8:function(){return isTest},yG:function(){return isDevelopment}});var n=r(34155);function currentEnvironment(){let e=null==n?void 0:"production";return"development"===e?"development":"production"===e?"production":"test"===e?"test":void 0}function isDevelopment(){return"development"===currentEnvironment()}function isTest(){return"test"===currentEnvironment()}},61518:function(e,t,r){"use strict";r.d(t,{N:function(){return useIndexCookie},z:function(){return setIndexCookie}});var n=r(62286),i=r(67294);function setIndexCookie(){(0,n.setCookie)(null,"indexApp","1",{maxAge:93312e4,path:"/"})}function useIndexCookie(){(0,i.useEffect)(()=>{setIndexCookie()},[])}},6890:function(e,t,r){"use strict";r.d(t,{AC:function(){return jsonFetch},C8:function(){return jsonPost},Cy:function(){return catchNetworkError}});let JsonFetchError=class JsonFetchError extends Error{constructor(e,t){super(e),this.name="JsonFetchError",this.status=t}};async function jsonFetch(e){let{url:t,method:r,body:n,headers:i,searchParams:s,bearerAuth:o,tokenAuth:a,throwOnHttpError:c=!0}=e,u={method:r||(n?"POST":"GET"),headers:{...n?{"Content-Type":"application/json"}:{},...o?{Authorization:"Bearer ".concat(o)}:{},...a?{Authorization:"Token ".concat(a)}:{},...null!=i?i:{}},body:n?JSON.stringify(n):void 0};if(s){let e=new URL(t);for(let[t,r]of Object.entries(s))e.searchParams.append(t,String(r));t=e.toString()}let l=await fetch(t,u);if(500===l.status||c&&!l.ok){let e=t.replace(/\?.*$/,"?hidden_for_logging");throw new JsonFetchError("Request failed for ".concat(u.method," ").concat(e,": ").concat(l.status," ").concat(l.statusText,": ").concat(await l.text()),l.status)}return l.json()}async function jsonPost(e,t){return await jsonFetch({url:e,body:t,method:"POST"})}function catchNetworkError(e,t){if(e instanceof JsonFetchError)console.warn(t);else throw e}},10256:function(e,t){"use strict";t.Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise(t=>{setTimeout(t,e)})}},55545:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return pages_auth}});var n=r(85893),i=r(46670),s=r(25675),o=r.n(s),a=r(41386),c=r(42310),u=r(11163),l=r(67294),h=r(83768),d=r(77004);let AuthButton=e=>{let{children:t}=e;return(0,n.jsx)("button",{type:"submit",className:"block w-full transform rounded-lg bg-gradient-to-b from-home-button-lg to-home-button-rg px-4 py-2 text-lg font-semibold text-white shadow-inner-white drop-shadow-lg transition duration-100 active:translate-y-0.5 active:opacity-90",children:t})};var p=r(97582),f=r(35137),m=r(29895),g=r(91259),x=r(68949),v=r(44380),w=r(61518),y=r(10256),j=r(97197),b=r(88766),A=r(91425),N=r(26655),S=r(98930),I=r(25152);async function authWithEmail(e){try{let t="".concat((0,b.W)()&&(0,A.yG)()?"https://app.reflect.app":location.origin,"/auth/callback/email"),r=function(){if(!(0,b.W)())return;let e=(0,I.ob)();return e===I.t4.Mobile?"app.reflect.ReflectMobile":e===I.t4.Web?"app.reflect.ReflectIpad":void 0}(),n=(0,b.W)()?(0,A.yG)()?"reflectmobile.page.link":"l.reflect.app":void 0;return await S.lX.sendSignInLinkToEmail(N.I8,e,{handleCodeInApp:!0,url:t,iOS:r?{bundleId:r}:void 0,dynamicLinkDomain:n}),{type:"success"}}catch(e){return{type:"error",error:e}}}var k=r(86458);async function authThroughNative(e){if("google"===e)return await authWithGoogle();if("apple"===e)return await authWithApple();throw Error("Unknown provider: ".concat(e))}async function authWithGoogle(){let e;try{e=await k.N.signInWithGoogle()}catch(e){return{type:"error",error:e}}if(!e.credential)return{type:"error",error:Error("No credential returned from Google")};let{idToken:t}=e.credential,r=S.lX.GoogleAuthProvider.credential(t),n=await S.lX.signInWithCredential(N.I8,r);return{type:"success",result:n}}async function authWithApple(){var e,t;let r;try{r=await k.N.signInWithApple()}catch(e){return{type:"error",error:e}}if(!r.credential)return{type:"error",error:Error("No credential returned from Apple")};let{idToken:n,nonce:i}=r.credential;if(!n||!i)return{type:"error",error:Error("No idToken or nonce returned from Apple")};let s=S.lX.OAuthProvider.credentialFromJSON({providerId:"apple.com",signInMethod:"apple.com",idToken:null===(e=r.credential)||void 0===e?void 0:e.idToken,nonce:null===(t=r.credential)||void 0===t?void 0:t.nonce,pendingToken:null}),o=await S.lX.signInWithCredential(N.I8,s);return{type:"success",result:o}}async function authThroughWeb(e){let t=function(e){if("apple"===e){let e=new S.lX.OAuthProvider("apple.com");return N.vc.appleScopes.forEach(t=>e.addScope(t)),e}if("google"===e){let e=new S.lX.GoogleAuthProvider;return N.vc.googleScopes.forEach(t=>e.addScope(t)),e.setCustomParameters({prompt:"select_account"}),e}throw Error("Unknown provider type: ".concat(e))}(e);try{return await S.lX.signInWithRedirect(N.I8,t),{type:"success"}}catch(e){return{type:"error",error:e}}}let AuthFormView=class AuthFormView{dispose(){this.listeners.forEach(e=>e())}setEmail(e){this.email=e}setAuthStatus(e){this.status=e}setErrorMessage(e){this.errorMessage=e}resetStatus(){this.setAuthStatus(null),this.setErrorMessage(null)}get redirectQuery(){return this.router.query.redirect||null}get clientTokenQuery(){return this.router.query.client_token||null}async authWithEmail(){this.syncAuthState(),this.setAuthStatus("email");let e=await authWithEmail(this.email);if("error"===e.type){var t;this.setAuthStatus("error"),this.setErrorMessage(null===(t=e.error)||void 0===t?void 0:t.message)}}async authWithProvider(e){m.dV.isNativePlatform()?await this.authWithNativeProvider(e):await this.authWithWebProvider(e)}async authWithNativeProvider(e){let t=await authThroughNative(e);if("error"===t.type){var r;this.setAuthStatus("error"),this.setErrorMessage(null===(r=t.error)||void 0===r?void 0:r.message)}else"success"===t.type&&t.result.user&&(this.setAuthStatus("success"),this.setErrorMessage(null),await this.onAuthWithProviderSuccess())}async authWithWebProvider(e){this.syncAuthState();let t=await authThroughWeb(e);"error"===t.type&&(this.setAuthStatus("error"),this.setErrorMessage(t.error.message))}syncAuthState(){let e=window.document.referrer;(0,v.oJ)({redirect:"back"===this.redirectQuery?e:this.redirectQuery,clientToken:this.clientTokenQuery,email:this.email})}async checkRedirectResult(){this.setAuthStatus("pending");let e=null;try{e=await (0,g.getRedirectResult)(N.I8)}catch(e){this.setAuthStatus("error"),this.setErrorMessage(null==e?void 0:e.message)}(null==e?void 0:e.user)?await this.onAuthWithProviderSuccess():this.setAuthStatus(null)}async onAuthWithProviderSuccess(){(0,w.z)(),this.clientTokenQuery?(await (0,j._)(this.clientTokenQuery),await (0,y.Z)(2e3),this.setAuthStatus("success")):"back"===this.redirectQuery?this.router.back():await this.router.push("/app")}async observeCapacitorDeepLink(){if(!m.dV.isPluginAvailable("App"))return;let e=await f.g.addListener("appUrlOpen",async e=>{let t=new URL(e.url),r=t.pathname+t.search;console.log("[Capacitor] requested to open url",e.url),t.protocol.startsWith("http")&&await this.router.push(r)});this.listeners.push(()=>e.remove())}constructor({router:e}){this.listeners=[],this.email="",this.status=null,this.errorMessage=null,this.router=e,(0,x.makeObservable)(this),this.observeCapacitorDeepLink()}};(0,p.gn)([x.observable],AuthFormView.prototype,"email",void 0),(0,p.gn)([x.observable],AuthFormView.prototype,"status",void 0),(0,p.gn)([x.observable],AuthFormView.prototype,"errorMessage",void 0),(0,p.gn)([x.action],AuthFormView.prototype,"setEmail",null),(0,p.gn)([x.action],AuthFormView.prototype,"setAuthStatus",null),(0,p.gn)([x.action],AuthFormView.prototype,"setErrorMessage",null);var E=r(90512),P=r(10466);let AuthInput=e=>{let{className:t,...r}=e;return(0,n.jsx)(P.d,{className:(0,E.Z)("block w-full appearance-none rounded-lg border border-bluegray-800 bg-bluegray-900 bg-opacity-50 px-4 py-3 text-center text-base placeholder-bluegray-400 shadow-sm transition duration-300 focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-500 focus:ring-opacity-50",t),...r})},T=(0,i.Pi)(()=>{let e=(0,u.useRouter)(),t=(0,d.D)(()=>new AuthFormView({router:e}),[e]);if((0,l.useEffect)(()=>{e.isReady&&t.checkRedirectResult()},[e.isReady]),!e.isReady)return(0,n.jsx)(h.O,{});switch(t.status){case"pending":return(0,n.jsx)(AuthStatusPending,{});case"error":return(0,n.jsx)(F,{auth:t});case"success":return(0,n.jsx)(W,{auth:t});case"email":return(0,n.jsx)(AuthStatusEmail,{});default:return(0,n.jsx)(C,{auth:t})}}),C=(0,i.Pi)(e=>{let{auth:t}=e;return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"text-base font-medium text-white",children:"Sign in/up with"}),(0,n.jsxs)("div",{className:"mt-4 grid grid-cols-2 gap-3",children:[(0,n.jsx)("div",{children:(0,n.jsx)("a",{onClick:()=>t.authWithProvider("google"),title:"Sign in with Google",className:"inline-flex w-full transform cursor-pointer items-center justify-center rounded-lg bg-gradient-to-b from-home-button-lg to-home-button-rg px-4 py-3 text-center text-lg font-semibold text-white shadow-inner-white drop-shadow-lg transition duration-100 active:translate-y-0.5 active:opacity-90",children:(0,n.jsx)(a.S,{width:28,height:28})})}),(0,n.jsx)("div",{children:(0,n.jsx)("a",{onClick:()=>t.authWithProvider("apple"),title:"Sign in with Apple",className:"inline-flex w-full transform cursor-pointer items-center justify-center rounded-lg bg-gradient-to-b from-home-button-lg to-home-button-rg px-4 py-3 text-center text-lg font-semibold text-white shadow-inner-white drop-shadow-lg transition duration-100 active:translate-y-0.5 active:opacity-90",children:(0,n.jsx)(c.Z,{width:28,height:28})})})]})]}),(0,n.jsxs)("div",{className:"relative mt-10",children:[(0,n.jsx)("div",{className:"absolute inset-0 flex items-center",children:(0,n.jsx)("div",{className:"w-full border-t border-bluegray-800"})}),(0,n.jsx)("div",{className:"relative flex justify-center text-base",children:(0,n.jsx)("span",{className:"rounded-lg bg-home-black px-3 py-1 text-white text-opacity-80",children:"or continue with"})})]})]}),(0,n.jsx)("div",{className:"mt-8",children:(0,n.jsxs)("form",{onSubmit:e=>{e.preventDefault(),t.authWithEmail()},className:"space-y-3",children:[(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"mt-1",children:(0,n.jsx)(AuthInput,{value:t.email,onChange:e=>t.setEmail(e.currentTarget.value),placeholder:"your@email.com",name:"email",type:"email",autoComplete:"email",required:!0})})}),(0,n.jsx)("div",{children:(0,n.jsx)(AuthButton,{children:"Continue"})})]})})]})});function AuthStatusPending(){return(0,n.jsx)("h4",{className:"pt-10 text-center text-lg",children:"Processing..."})}function AuthStatusEmail(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h4",{className:"pt-10 text-center text-4xl",children:"You've got mail"}),(0,n.jsx)("p",{className:"pt-10 text-center text-2xl",children:"We've emailed you a secure login link."})]})}let W=(0,i.Pi)(e=>{let{auth:t}=e;return(0,n.jsx)("div",{className:"space-y-4",children:t.clientTokenQuery?(0,n.jsxs)("div",{className:"space-y-4 pt-10",children:[(0,n.jsx)("h2",{className:"text-xl",children:"Signed in successfully"}),(0,n.jsx)("p",{className:"text-center text-sm",children:"You may close this window."})]}):(0,n.jsx)("h4",{className:"pt-10 text-center text-lg",children:"Processing..."})})}),F=(0,i.Pi)(e=>{let{auth:t}=e;return(0,n.jsxs)("div",{className:"space-y-4",children:[(0,n.jsx)("h2",{className:"text-3xl text-red-400",children:"Error signing in"}),(0,n.jsx)("p",{className:"text-center",children:t.errorMessage||"Something went wrong."}),(0,n.jsx)("div",{className:"pt-5",children:(0,n.jsx)(AuthButton,{children:"Try again"})})]})});var _=r(26988),R=r(70670),O=r(62061);let M=(0,i.Pi)(()=>(0,n.jsx)(R.S,{className:"bg-home-black text-white",children:(0,n.jsx)(_.X,{children:(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("section",{className:"relative shrink-0",children:(0,n.jsx)("div",{className:"mx-auto max-w-6xl px-4 sm:px-6",children:(0,n.jsx)("div",{className:"pt-16 pb-12",children:(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)(o(),{alt:"",src:"/site/logo-alt.png",width:384,height:240,className:"inline-flex"}),(0,n.jsx)("div",{className:"mx-auto max-w-3xl",children:(0,n.jsx)("div",{className:"mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center md:mt-5",children:(0,n.jsx)("div",{className:"min-h-80 min-w-72",children:(0,n.jsx)(T,{})})})})]})})})}),(0,n.jsx)(O.nv,{})]})})}));var J=r(94541),pages_auth=function(){return(0,n.jsx)(J.F0,{children:(0,n.jsx)(M,{})})}},97197:function(e,t,r){"use strict";r.d(t,{_:function(){return createAccessToken},w:function(){return signOut}});var n=r(26655),i=r(40127);async function createAccessToken(e){let t=await (0,i.lI)();return fetch("/api/auth/client-token",{method:"POST",headers:{Authorization:"Firebase ".concat(t),"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({client_token:e,id_token:t})})}async function signOut(){let{resetDatabases:e=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};await n.I8.signOut(),e&&window.location.replace("/sign-out?confirm=true")}},40127:function(e,t,r){"use strict";r.d(t,{$Q:function(){return authedJsonGet},AZ:function(){return authedJsonFetch},Aj:function(){return onAuthStateChanged},g0:function(){return getAuthHeaders},i1:function(){return waitForAuthUser},lI:function(){return getIdToken},lN:function(){return authedJsonDelete},nX:function(){return getAuthUser},tC:function(){return authedJsonPost}});var n=r(6890),i=r(26655);function onAuthStateChanged(e){return i.I8.onAuthStateChanged(e)}function getAuthUser(){return new Promise(e=>{i.I8.currentUser?e(i.I8.currentUser):new Promise(e=>{let t=i.I8.onAuthStateChanged(r=>{t(),e(r)})}).then(e)})}function waitForAuthUser(){return new Promise(e=>{i.I8.currentUser?e(i.I8.currentUser):new Promise(e=>{let t=i.I8.onAuthStateChanged(r=>{r&&(t(),e(r))})}).then(e)})}async function getIdToken(){let e=await waitForAuthUser();return e.getIdToken()}async function getAuthHeaders(){let e=await getIdToken();return{Authorization:"Firebase ".concat(e)}}async function authedJsonPost(e,t){return authedJsonFetch({url:e,body:t,method:"POST"})}async function authedJsonGet(e){return authedJsonFetch({url:e,method:"GET"})}async function authedJsonDelete(e){return authedJsonFetch({url:e,method:"DELETE"})}async function authedJsonFetch(e){let t=await getAuthHeaders();return await (0,n.AC)({...e,headers:{...t,...e.headers}})}},98930:function(e,t,r){"use strict";r.d(t,{IG:function(){return s},RZ:function(){return n},lX:function(){return i}}),r(83977);var n=r(39828),i=r(91259),s=r(86650)},26655:function(e,t,r){"use strict";r.d(t,{I8:function(){return m},vc:function(){return u},db:function(){return f},tO:function(){return g}});var n=r(83977),i=r(34155);let s='{"apiKey":"AIzaSyD5tmpwG6ZbTQcMznYMf4_YQgVBqPtfc2w","databaseURL":"https://reflect-prod.firebaseio.com","projectId":"reflect-prod","storageBucket":"reflect-prod.appspot.com","messagingSenderId":"188725225641","appId":"1:188725225641:web:93e4f14c15713f2372a1b8","measurementId":"G-TDJCZM4HVX"}',o=i.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_HOST,a=i.env.NEXT_PUBLIC_FIRESTORE_EMULATOR_HOST;if(!s)throw Error("missing NEXT_PUBLIC_FIREBASE_AUTH_JSON env var");let c=JSON.parse(s),u={authDomain:window.location.host,...c,clientID:"188725225641-n0tkosc6bsjc5lponcr9sjec1ifn38b2.apps.googleusercontent.com",appleScopes:["email","name"],googleScopes:["email","profile"]};var l=r(91259),h=r(39828),d=r(86650);let p=function(){var e;let t=(0,n.C6)();return null!==(e=t[0])&&void 0!==e?e:(0,n.ZF)(u,void 0)}(),f=function(e){let t=!!window.indexedDB,r=(0,h.initializeFirestore)(e,{...t?{localCache:(0,h.persistentLocalCache)({tabManager:(0,h.persistentMultipleTabManager)(),cacheSizeBytes:h.CACHE_SIZE_UNLIMITED})}:{}});if(a){let[e,t]=a.split(":");(0,h.connectFirestoreEmulator)(r,e,Number(t))}return r}(p),m=function(e){let t=(0,l.getAuth)(e);return o&&!t.emulatorConfig&&(0,l.connectAuthEmulator)(t,"http://".concat(o),{disableWarnings:!0}),t}(p),g=function(e){let t=(0,d.getStorage)(e);return t.maxUploadRetryTime=0,t}(p)},25152:function(e,t,r){"use strict";var n,i;r.d(t,{HM:function(){return isIpad},Ky:function(){return currentAgent},d:function(){return isElectron},ob:function(){return currentPlatform},qx:function(){return isIphone},t4:function(){return n}}),(i=n||(n={})).App="app",i.Web="web",i.Mobile="mobile";let isElectron=()=>void 0!==window.electron,isIphone=()=>navigator.userAgent.match(/iphone/i),isIpad=()=>navigator.userAgent.match(/ipad/i);function currentPlatform(){return isElectron()?"app":"web"}function currentAgent(){return isIphone()?"iphone":isIpad()?"ipad":"browser"}}},function(e){e.O(0,[2016,786,461,3418,7115,8161,4596,385,5675,1664,8266,198,9774,2888,179],function(){return e(e.s=2304)}),_N_E=e.O()}]);