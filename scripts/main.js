function l(b,a,c,d){b.i.ma(b.R,a,c,d,void 0)}function m(b,a,c,d){b.i.u?l(b,a,c,d):b.i.ob()._OnMessageFromDOM({type:"event",component:b.R,handler:a,dispatchOpts:d||null,data:c,responseId:null})}function q(b,a,c){b.i.g(b.R,a,c)}function aa(b,a){for(const [c,d]of a)q(b,c,d)}window.ka=class{constructor(b,a){this.i=b;this.R=a}Ga(){}};window.Tb=class{constructor(){}};"use strict";class ba{constructor(b){this.ta=b;this.va=!1;this.ya=!0}}
function ca(b,a){const c=a.elementId,d=b.N(c,a),e=new ba(d);b.S.set(c,e);d.style.boxSizing="border-box";d.style.display="none";e.ya=!!a.isVisible;a=b.oa(d);a.addEventListener("focus",()=>{r(b,"elem-focused",c)});a.addEventListener("blur",()=>{r(b,"elem-blurred",c)});b.ca&&document.body.appendChild(d)}function t(b,a,c){q(b,a,d=>{const e=u(b,d.elementId);return c(e,d)})}function u(b,a){b=b.S.get(a);if(!b)throw Error(`no element with id ${a}`);return b.ta}
function r(b,a,c,d){d||(d={});d.elementId=c;l(b,a,d)}function v(b,a,c,d){d||(d={});d.elementId=c;m(b,a,d)}
window.$=class extends self.ka{constructor(b,a){super(b,a);this.S=new Map;this.ca=!0;aa(this,[["create",c=>ca(this,c)],["destroy",c=>{c=c.elementId;const d=u(this,c);this.ca&&d.parentElement.removeChild(d);this.S.delete(c)}],["set-visible",c=>{if(this.ca){var d=this.S.get(c.elementId),e=d.ta;d.va?e.style.display=c.isVisible?"":"none":d.ya=!!c.isVisible}}],["update-position",c=>{if(this.ca){var d=this.S.get(c.elementId),e=d.ta;e.style.left=c.left+"px";e.style.top=c.top+"px";e.style.width=c.width+"px";
e.style.height=c.height+"px";c=c.fontSize;null!==c&&(e.style.fontSize=c+"em");d.va||(d.va=!0,d.ya&&(e.style.display=""))}}],["update-state",c=>{const d=u(this,c.elementId);this.v(d,c)}],["focus",c=>{const d=this.oa(u(this,c.elementId));c.focus?d.focus():d.blur()}],["set-css-style",c=>{const d=u(this,c.elementId),e=c.prop;c=c.val;e.startsWith("--")?d.style.setProperty(e,c):d.style[e]=c}],["set-attribute",c=>{u(this,c.elementId).setAttribute(c.name,c.val)}],["remove-attribute",c=>{u(this,c.elementId).removeAttribute(c.name)}]]);
t(this,"get-element",c=>c)}N(){throw Error("required override");}v(){throw Error("required override");}oa(b){return b}};"use strict";const da=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent),w=/android/i.test(navigator.userAgent);let ea=0;
function x(b){const a=document.createElement("script");a.async=!1;a.type="module";return b.Jb?new Promise(c=>{const d="c3_resolve_"+ea;++ea;self[d]=c;a.textContent=b.Nb+`\n\nself["${d}"]();`;document.head.appendChild(a)}):new Promise((c,d)=>{a.onload=c;a.onerror=d;a.src=b;document.head.appendChild(a)})}let fa=!1,ha=!1;function ia(){if(!fa){try{new Worker("blob://",{get type(){ha=!0}})}catch(b){}fa=!0}return ha}let y=new Audio;
const ja={"audio/webm; codecs=opus":!!y.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!y.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!y.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!y.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!y.canPlayType("audio/mp4"),"audio/mpeg":!!y.canPlayType("audio/mpeg")};y=null;async function la(b){b=await ma(b);return(new TextDecoder("utf-8")).decode(b)}
function ma(b){return new Promise((a,c)=>{const d=new FileReader;d.onload=e=>a(e.target.result);d.onerror=e=>c(e);d.readAsArrayBuffer(b)})}const z=[];let A=0;window.RealFile=window.File;const B=[],C=new Map,E=new Map;let na=0;const oa=[];self.runOnStartup=function(b){if("function"!==typeof b)throw Error("runOnStartup called without a function");oa.push(b)};const pa=new Set(["cordova","playable-ad","instant-games"]);let qa=!1;
window.D=class b{constructor(a){this.u=a.Pb;this.V=null;this.m="";this.J=a.Mb;this.Z={};this.Aa=this.L=null;this.da=[];this.j=this.X=null;this.Ua=!1;this.T=null;this.I=-1;this.Eb=()=>this.vb();this.Da=[];this.h=a.Xa;this.xa="file"===location.protocol.substr(0,4);!this.u||"undefined"!==typeof OffscreenCanvas&&navigator.userActivation&&ia()||(this.u=!1);if("playable-ad"===this.h||"instant-games"===this.h)this.u=!1;if("cordova"===this.h&&this.u)if(w){const c=/Chrome\/(\d+)/i.exec(navigator.userAgent);
c&&90<=parseInt(c[1],10)||(this.u=!1)}else this.u=!1;this.ea=this.B=null;"html5"!==this.h||window.isSecureContext||console.warn("[Construct] Warning: the browser indicates this is not a secure context. Some features may be unavailable. Use secure (HTTPS) hosting to ensure all features are available.");this.g("runtime","cordova-fetch-local-file",c=>this.rb(c));this.g("runtime","create-job-worker",()=>this.sb());"cordova"===this.h?document.addEventListener("deviceready",()=>this.La(a)):this.La(a)}bb(){return da&&
"cordova"===this.h}la(){const a=navigator.userAgent;return da&&pa.has(this.h)||navigator.standalone||/crios\/|fxios\/|edgios\//i.test(a)}$a(){return w}Ia(){return w&&pa.has(this.h)}async La(a){"macos-wkwebview"===this.h&&this.zb();if("playable-ad"===this.h){this.B=self.c3_base64files;this.ea={};await this.kb();for(let d=0,e=a.M.length;d<e;++d){var c=a.M[d];this.ea.hasOwnProperty(c)?a.M[d]={Jb:!0,Nb:this.ea[c]}:this.B.hasOwnProperty(c)&&(a.M[d]=URL.createObjectURL(this.B[c]))}a.ha=[]}if("nwjs"===this.h&&
self.nw&&self.nw.App.manifest["c3-steam-mode"]){let d=0;this.gb(()=>{d++;document.body.style.opacity=0===d%2?"1":"0.999"})}a.Lb?this.m=a.Lb:(c=location.origin,this.m=("null"===c?"file:///":c)+location.pathname,c=this.m.lastIndexOf("/"),-1!==c&&(this.m=this.m.substr(0,c+1)));a.Rb&&(this.Z=a.Rb);c=new MessageChannel;this.V=c.port1;this.V.onmessage=d=>this._OnMessageFromRuntime(d.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(d=>this.ub(d));this.T=new self.cb(this);await ra(this.T);
"object"===typeof window.StatusBar&&window.StatusBar.hide();if("object"===typeof window.AndroidFullScreen)try{await new Promise((d,e)=>{window.AndroidFullScreen.immersiveMode(d,e)})}catch(d){console.error("Failed to enter Android immersive mode: ",d)}this.u?await this.qb(a,c.port2):await this.pb(a,c.port2)}pa(a){a=this.Z.hasOwnProperty(a)?this.Z[a]:a.endsWith("/workermain.js")&&this.Z.hasOwnProperty("workermain.js")?this.Z["workermain.js"]:"playable-ad"===this.h&&this.B.hasOwnProperty(a)?this.B[a]:
a;a instanceof Blob&&(a=URL.createObjectURL(a));return a}async ja(a,c,d){if(a.startsWith("blob:"))return new Worker(a,d);if("cordova"===this.h&&this.xa)return a=await this.ia(d.Ib?a:this.J+a),new Worker(URL.createObjectURL(new Blob([a],{type:"application/javascript"})),d);a=new URL(a,c);if(location.origin!==a.origin){a=await fetch(a);if(!a.ok)throw Error("failed to fetch worker script");a=await a.blob();return new Worker(URL.createObjectURL(a),d)}return new Worker(a,d)}A(){return Math.max(window.innerWidth,
1)}s(){return Math.max(window.innerHeight,1)}Ka(a){var c=this.m,d=location.href,e=this.A(),f=this.s(),g=window.devicePixelRatio,h=b.O(),k=a.Xb,n=window.cr_previewImageBlobs||this.B,p=window.cr_previewProjectFileBlobs,Ea=window.cr_previewProjectFiles,Fa=window.Vb||"";a=a.Xa;var Ga=(new URLSearchParams(self.location.search)).has("debug"),Q=this.T;return{runtimeBaseUrl:c,previewUrl:d,windowInnerWidth:e,windowInnerHeight:f,devicePixelRatio:g,isFullscreen:h,projectData:k,previewImageBlobs:n,previewProjectFileBlobs:p,
previewProjectFileSWUrls:Ea,swClientId:Fa,exportType:a,isDebug:Ga,ife:!!self.Wb,jobScheduler:{inputPort:Q.wa,outputPort:Q.Ca,maxNumWorkers:Q.Cb},supportedAudioFormats:ja,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.J+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.J+"opus.wasm.wasm",isFileProtocol:this.xa,isiOSCordova:this.bb(),isiOSWebView:this.la(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async qb(a,c){const d=this.pa(a.Qb);"preview"===this.h?(this.L=new Worker("previewworker.js",
{type:"module",name:"Runtime"}),await new Promise((h,k)=>{const n=p=>{this.L.removeEventListener("message",n);p.data&&"ok"===p.data.type?h():k()};this.L.addEventListener("message",n);this.L.postMessage({type:"construct-worker-init","import":(new URL(d,this.m)).toString()})})):this.L=await this.ja(d,this.m,{type:"module",name:"Runtime",Ib:!0});this.j=document.createElement("canvas");this.j.style.display="none";const e=this.j.transferControlToOffscreen();document.body.appendChild(this.j);window.c3canvas=
this.j;self.C3_InsertHTMLPlaceholders&&self.C3_InsertHTMLPlaceholders();let f=a.ha||[],g=a.M;f=await Promise.all(f.map(h=>this.H(h)));g=await Promise.all(g.map(h=>this.H(h)));if("cordova"===this.h)for(let h=0,k=a.ga.length;h<k;++h){const n=a.ga[h],p=n[0];if(p===a.Fa||"scriptsInEvents.js"===p||p.endsWith("/scriptsInEvents.js"))n[1]=await this.H(p)}this.L.postMessage(Object.assign(this.Ka(a),{type:"init-runtime",isInWorker:!0,messagePort:c,canvas:e,workerDependencyScripts:f,engineScripts:g,projectScripts:a.ga,
mainProjectScript:a.Fa,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[c,e,...sa(this.T)]);this.da=B.map(h=>new h(this));this.Ja();ta(this.X);self.c3_callFunction=(h,k)=>{var n=this.X;return n.i.eb(n.R,{name:h,params:k})};"preview"===this.h&&(self.goToLastErrorScript=()=>this.ma("runtime","go-to-last-error-script"))}async pb(a,c){this.j=document.createElement("canvas");this.j.style.display="none";document.body.appendChild(this.j);window.c3canvas=this.j;self.C3_InsertHTMLPlaceholders&&self.C3_InsertHTMLPlaceholders();
this.da=B.map(g=>new g(this));this.Ja();var d=a.M.map(g=>"string"===typeof g?(new URL(g,this.m)).toString():g);Array.isArray(a.ha)&&d.unshift(...a.ha);d=await Promise.all(d.map(g=>this.H(g)));await Promise.all(d.map(g=>x(g)));d=self.C3_ProjectScriptsStatus;const e=a.Fa,f=a.ga;for(let [g,h]of f)if(h||(h=g),g===e)try{h=await this.H(h),await x(h),"preview"!==this.h||d[g]||this.Na(g,"main script did not run to completion")}catch(k){this.Na(g,k)}else if("scriptsInEvents.js"===g||g.endsWith("/scriptsInEvents.js"))h=
await this.H(h),await x(h);"preview"===this.h&&"object"!==typeof self.Sb.Ub?(this.ba(),console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):(a=Object.assign(this.Ka(a),{isInWorker:!1,messagePort:c,canvas:this.j,runOnStartupFunctions:oa}),ta(this.X),this.Ma(),this.Aa=self.C3_CreateRuntime(a),await self.C3_InitRuntime(this.Aa,
a))}Na(a,c){this.ba();console.error(`[Preview] Failed to load project main script (${a}): `,c);alert(`Failed to load project main script (${a}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)}Ma(){this.ba()}ba(){const a=window.Gb;a&&(a.parentElement.removeChild(a),window.Gb=null)}async sb(){const a=await ua(this.T);return{outputPort:a,transferables:[a]}}ob(){if(this.u)throw Error("not available in worker mode");return this.Aa}ma(a,c,d,e,f){this.V.postMessage({type:"event",
component:a,handler:c,dispatchOpts:e||null,data:d,responseId:null},f)}eb(a,c){const d=na++,e=new Promise((f,g)=>{E.set(d,{resolve:f,reject:g})});this.V.postMessage({type:"event",component:a,handler:"js-invoke-function",dispatchOpts:null,data:c,responseId:d},void 0);return e}_OnMessageFromRuntime(a){const c=a.type;if("event"===c)return this.tb(a);if("result"===c)this.wb(a);else if("runtime-ready"===c)this.xb();else if("alert-error"===c)this.ba(),alert(a.message);else if("creating-runtime"===c)this.Ma();
else throw Error(`unknown message '${c}'`);}tb(a){const c=a.component,d=a.handler,e=a.data,f=a.responseId;if(a=C.get(c))if(a=a.get(d)){var g=null;try{g=a(e)}catch(h){console.error(`Exception in '${c}' handler '${d}':`,h);null!==f&&this.aa(f,!1,""+h);return}if(null===f)return g;g&&g.then?g.then(h=>this.aa(f,!0,h)).catch(h=>{console.error(`Rejection from '${c}' handler '${d}':`,h);this.aa(f,!1,""+h)}):this.aa(f,!0,g)}else console.warn(`[DOM] No handler '${d}' for component '${c}'`);else console.warn(`[DOM] No event handlers for component '${c}'`)}aa(a,
c,d){let e;d&&d.transferables&&(e=d.transferables);this.V.postMessage({type:"result",responseId:a,isOk:c,result:d},e)}wb(a){const c=a.responseId,d=a.isOk;a=a.result;const e=E.get(c);d?e.resolve(a):e.reject(a);E.delete(c)}g(a,c,d){let e=C.get(a);e||(e=new Map,C.set(a,e));if(e.has(c))throw Error(`[DOM] Component '${a}' already has handler '${c}'`);e.set(c,d)}static G(a){if(B.includes(a))throw Error("DOM handler already added");B.push(a)}Ja(){for(const a of this.da)if("runtime"===a.R){this.X=a;return}throw Error("cannot find runtime DOM handler");
}ub(a){this.ma("debugger","message",a)}xb(){for(const a of this.da)a.Ga()}static O(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||qa)}static Oa(a){qa=!!a}gb(a){this.Da.push(a);this.ra()}ra(){-1===this.I&&this.Da.length&&(this.I=requestAnimationFrame(this.Eb))}ib(){-1!==this.I&&(cancelAnimationFrame(this.I),this.I=-1)}vb(){this.I=-1;for(const a of this.Da)a();this.ra()}qa(){this.X.qa()}fb(){this.Ua=!0}Za(a){return/^(?:[a-z\-]+:)?\/\//.test(a)||
"data:"===a.substr(0,5)||"blob:"===a.substr(0,5)}ab(a){return!this.Za(a)}async H(a){return"cordova"===this.h&&(a.startsWith("file:")||this.xa&&this.ab(a))?(a.startsWith(this.m)&&(a=a.substr(this.m.length)),a=await this.ia(a),URL.createObjectURL(new Blob([a],{type:"application/javascript"}))):a}async rb(a){const c=a.filename;switch(a.as){case "text":return await this.Ya(c);case "buffer":return await this.ia(c);default:throw Error("unsupported type");}}Ha(a){const c=window.cordova.file.applicationDirectory+
"www/"+a;return new Promise((d,e)=>{window.resolveLocalFileSystemURL(c,f=>{f.file(d,e)},e)})}async Ya(a){a=await this.Ha(a);return await la(a)}na(){if(z.length&&!(8<=A)){A++;var a=z.shift();this.lb(a.filename,a.Ob,a.Hb)}}ia(a){return new Promise((c,d)=>{z.push({filename:a,Ob:e=>{A--;this.na();c(e)},Hb:e=>{A--;this.na();d(e)}});this.na()})}async lb(a,c,d){try{const e=await this.Ha(a),f=await ma(e);c(f)}catch(e){d(e)}}zb(){var a={type:"ready"};if("windows-webview2"===this.h)window.chrome.webview.postMessage(JSON.stringify(a));
else if("macos-wkwebview"===this.h)window.webkit.messageHandlers.C3Wrapper.postMessage(JSON.stringify(a));else throw Error("cannot send wrapper message");}async kb(){const a=[];for(const [c,d]of Object.entries(this.B))a.push(this.jb(c,d));await Promise.all(a)}async jb(a,c){if("object"===typeof c)this.B[a]=new Blob([c.str],{type:c.type}),this.ea[a]=c.str;else{let d=await this.nb(c);d||(d=this.mb(c));this.B[a]=d}}async nb(a){try{return await (await fetch(a)).blob()}catch(c){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",
c),null}}mb(a){a=this.yb(a);return this.hb(a.data,a.Kb)}yb(a){var c=a.indexOf(",");if(0>c)throw new URIError("expected comma in data: uri");var d=a.substring(c+1);c=a.substring(5,c).split(";");a=c[0]||"";const e=c[2];d="base64"===c[1]||"base64"===e?atob(d):decodeURIComponent(d);return{Kb:a,data:d}}hb(a,c){var d=a.length;let e=d>>2,f=new Uint8Array(d),g=new Uint32Array(f.buffer,0,e),h,k;for(k=h=0;h<e;++h)g[h]=a.charCodeAt(k++)|a.charCodeAt(k++)<<8|a.charCodeAt(k++)<<16|a.charCodeAt(k++)<<24;for(d&=
3;d--;)f[k]=a.charCodeAt(k),++k;return new Blob([f],{type:c})}};"use strict";const F=self.D;function va(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}const wa=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),G={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},xa={dispatchUserScriptEvent:!0},H={dispatchRuntimeEvent:!0};
function ya(b){return new Promise((a,c)=>{const d=document.createElement("link");d.onload=()=>a(d);d.onerror=e=>c(e);d.rel="stylesheet";d.href=b;document.head.appendChild(d)})}function za(b){return new Promise((a,c)=>{const d=new Image;d.onload=()=>a(d);d.onerror=e=>c(e);d.src=b})}async function I(b){b=URL.createObjectURL(b);try{return await za(b)}finally{URL.revokeObjectURL(b)}}
function Aa(b){return new Promise((a,c)=>{let d=new FileReader;d.onload=e=>a(e.target.result);d.onerror=e=>c(e);d.readAsText(b)})}
async function Ba(b,a,c){if(!/firefox/i.test(navigator.userAgent))return await I(b);var d=await Aa(b);d=(new DOMParser).parseFromString(d,"image/svg+xml");const e=d.documentElement;if(e.hasAttribute("width")&&e.hasAttribute("height")){const f=e.getAttribute("width"),g=e.getAttribute("height");if(!f.includes("%")&&!g.includes("%"))return await I(b)}e.setAttribute("width",a+"px");e.setAttribute("height",c+"px");d=(new XMLSerializer).serializeToString(d);b=new Blob([d],{type:"image/svg+xml"});return await I(b)}
function J(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}const Ca=new Set(["input","textarea","datalist","select"]),Da=new Set(["canvas","body","html"]);function K(b){b.target.tagName&&Da.has(b.target.tagName.toLowerCase())&&b.preventDefault()}function Ha(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}
self.C3_GetSvgImageSize=async function(b){b=await I(b);if(0<b.width&&0<b.height)return[b.width,b.height];b.style.position="absolute";b.style.left="0px";b.style.top="0px";b.style.visibility="hidden";document.body.appendChild(b);const a=b.getBoundingClientRect();document.body.removeChild(b);return[a.width,a.height]};self.C3_RasterSvgImageBlob=async function(b,a,c,d,e){b=await Ba(b,a,c);const f=document.createElement("canvas");f.width=d;f.height=e;f.getContext("2d").drawImage(b,0,0,a,c);return f};
let L=!1;document.addEventListener("pause",()=>L=!0);document.addEventListener("resume",()=>L=!1);function ta(b){b.Sa=!0;b.za=b.i.A();b.U=b.i.s()}async function Ia(b){await Promise.all(b.webfonts.map(async a=>{a=new FontFace(a.name,`url('${a.url}')`);document.fonts.add(a);await a.load()}))}
async function Ja(b){var a=b.imageBitmapOpts;b=await self.C3_RasterSvgImageBlob(b.blob,b.imageWidth,b.imageHeight,b.surfaceWidth,b.surfaceHeight);a=a?await createImageBitmap(b,a):await createImageBitmap(b);return{imageBitmap:a,transferables:[a]}}async function Ka(b){return await self.C3_GetSvgImageSize(b.blob)}function La(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}
function Ma(b){self.setTimeout(()=>{b.Ra=!0},1E3);"cordova"===b.i.h?(document.addEventListener("pause",()=>M(b,!0)),document.addEventListener("resume",()=>M(b,!1))):document.addEventListener("visibilitychange",()=>M(b,document.hidden));return{isSuspended:!(!document.hidden&&!L)}}
function Na(b){b.Qa||(b.Qa=!0,window.addEventListener("deviceorientation",a=>{b.l||l(b,"deviceorientation",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp,webkitCompassHeading:a.webkitCompassHeading,webkitCompassAccuracy:a.webkitCompassAccuracy},G)}),window.addEventListener("deviceorientationabsolute",a=>{b.l||l(b,"deviceorientationabsolute",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp},G)}))}
function Oa(b){b.Pa||(b.Pa=!0,window.addEventListener("devicemotion",a=>{if(!b.l){var c=null,d=a.acceleration;d&&(c={x:d.x||0,y:d.y||0,z:d.z||0});d=null;var e=a.accelerationIncludingGravity;e&&(d={x:e.x||0,y:e.y||0,z:e.z||0});e=null;var f=a.rotationRate;f&&(e={alpha:f.alpha||0,beta:f.beta||0,gamma:f.gamma||0});l(b,"devicemotion",{acceleration:c,accelerationIncludingGravity:d,rotationRate:e,interval:a.interval,timeStamp:a.timeStamp},G)}}))}async function Pa(b){await ya(b.url)}
function Qa(b,a){b.Ta=a.message;-1===b.ua&&(b.ua=setTimeout(()=>{b.ua=-1;const c=document.getElementById("exportToVideoMessage");c&&(c.textContent=b.Ta)},250))}function N(b){if(!b.l){var a=F.O();a&&"any"!==b.Ea&&Ra(b);l(b,"fullscreenchange",{isFullscreen:a,innerWidth:b.A(),innerHeight:b.s()})}}function O(b,a){console.warn("[Construct] Fullscreen request failed: ",a);l(b,"fullscreenerror",{isFullscreen:F.O(),innerWidth:b.A(),innerHeight:b.s()})}
function M(b,a){a?b.i.ib():b.i.ra();l(b,"visibilitychange",{hidden:a})}function Sa(b,a,c){"Backspace"===c.key&&K(c);if(!b.l){var d=wa.get(c.code)||c.code;m(b,a,{code:d,key:c.key,which:c.which,repeat:c.repeat,altKey:c.altKey,ctrlKey:c.ctrlKey,metaKey:c.metaKey,shiftKey:c.shiftKey,timeStamp:c.timeStamp},G)}}
function P(b,a,c,d){b.l||va(c)||m(b,a,{button:c.button,buttons:c.buttons,clientX:c.clientX,clientY:c.clientY+b.o,pageX:c.pageX,pageY:c.pageY+b.o,movementX:c.movementX||0,movementY:c.movementY||0,timeStamp:c.timeStamp},d)}function R(b){window!==window.top&&window.focus();Ta(b.target)&&document.activeElement&&!Ta(document.activeElement)&&document.activeElement.blur()}
function S(b,a,c){if(!b.l){var d=0;"mouse"===c.pointerType&&(d=b.W);m(b,a,{pointerId:c.pointerId,pointerType:c.pointerType,button:c.button,buttons:c.buttons,lastButtons:d,clientX:c.clientX,clientY:c.clientY+b.o,pageX:c.pageX,pageY:c.pageY+b.o,movementX:c.movementX||0,movementY:c.movementY||0,width:c.width||0,height:c.height||0,pressure:c.pressure||0,tangentialPressure:c.tangentialPressure||0,tiltX:c.tiltX||0,tiltY:c.tiltY||0,twist:c.twist||0,timeStamp:c.timeStamp},G);"mouse"===c.pointerType&&(d="mousemove",
"pointerdown"===a?d="mousedown":"pointerup"===a&&(d="mouseup"),P(b,d,c,xa),b.W=c.buttons)}}
function T(b,a,c){if(!b.l&&!va(c)){var d=b.W;"pointerdown"===a&&0!==d?a="pointermove":"pointerup"===a&&0!==c.buttons&&(a="pointermove");m(b,a,{pointerId:1,pointerType:"mouse",button:c.button,buttons:c.buttons,lastButtons:d,clientX:c.clientX,clientY:c.clientY+b.o,pageX:c.pageX,pageY:c.pageY+b.o,movementX:c.movementX||0,movementY:c.movementY||0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:c.timeStamp},G);b.W=c.buttons;P(b,c.type,c,xa)}}
function U(b,a,c){if(!b.l)for(let d=0,e=c.changedTouches.length;d<e;++d){const f=c.changedTouches[d];m(b,a,{pointerId:f.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:f.clientX,clientY:f.clientY+b.o,pageX:f.pageX,pageY:f.pageY+b.o,movementX:c.movementX||0,movementY:c.movementY||0,width:2*(f.radiusX||f.webkitRadiusX||0),height:2*(f.radiusY||f.webkitRadiusY||0),pressure:f.force||f.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:f.rotationAngle||0,timeStamp:c.timeStamp},
G)}}function V(b,a,c){document.body.style.transform="";b.o=0;if(0<c){var d=document.activeElement;d&&(d=d.getBoundingClientRect(),a=(d.top+d.bottom)/2-(a-c)/2,a>c&&(a=c),0>a&&(a=0),0<a&&(document.body.style.transform=`translateY(${-a}px)`,b.o=a))}}function Ua(b,a,c,d){const e=b.A(),f=b.s();b.K=-1;e!=a||f!=c?l(b,"window-resize",{innerWidth:e,innerHeight:f,devicePixelRatio:window.devicePixelRatio,isFullscreen:F.O()}):10>d&&Va(b,e,f,d+1)}
function Va(b,a,c,d){-1!==b.K&&clearTimeout(b.K);b.K=setTimeout(()=>Ua(b,a,c,d),48)}
function Ra(b){b=b.Ea;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(b).catch(a=>console.warn("[Construct] Failed to lock orientation: ",a));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(b):screen.webkitLockOrientation?a=screen.webkitLockOrientation(b):screen.mozLockOrientation?a=screen.mozLockOrientation(b):screen.msLockOrientation&&(a=screen.msLockOrientation(b));a||console.warn("[Construct] Failed to lock orientation")}catch(a){console.warn("[Construct] Failed to lock orientation: ",a)}}
function Ta(b){return!b||b===document||b===window||b===document.body||"canvas"===b.tagName.toLowerCase()}
F.G(class extends self.ka{constructor(b){super(b,"runtime");this.Va=!0;this.Sa=!1;this.K=-1;this.Ea="any";this.Pa=this.Qa=!1;this.fa=document.createElement("div");this.fa.className="c3-screen-reader-text";this.fa.setAttribute("aria-live","polite");document.body.appendChild(this.fa);this.F=null;this.l=!1;this.Ta="";this.ua=-1;this.Ra=!1;this.za=b.A();this.U=b.s();this.o=this.Y=0;b.g("canvas","update-size",d=>{var e=this.i;e.Ua||(e=e.j,e.style.width=d.styleWidth+"px",e.style.height=d.styleHeight+"px",
e.style.marginLeft=d.marginLeft+"px",e.style.marginTop=d.marginTop+"px",document.documentElement.style.setProperty("--construct-scale",d.displayScale),this.Va&&(e.style.display="",this.Va=!1))});b.g("runtime","invoke-download",d=>{const e=d.url;d=d.filename;const f=document.createElement("a"),g=document.body;f.textContent=d;f.href=e;f.download=d;g.appendChild(f);f.click();g.removeChild(f)});b.g("runtime","load-webfonts",d=>Ia(d));b.g("runtime","raster-svg-image",d=>Ja(d));b.g("runtime","get-svg-image-size",
d=>Ka(d));b.g("runtime","set-target-orientation",d=>{this.Ea=d.targetOrientation});b.g("runtime","register-sw",()=>{window.C3_RegisterSW&&window.C3_RegisterSW()});b.g("runtime","post-to-debugger",d=>La(d));b.g("runtime","go-to-script",d=>La(d));b.g("runtime","before-start-ticking",()=>Ma(this));b.g("runtime","debug-highlight",d=>{if(d.show){this.F||(this.F=document.createElement("div"),this.F.id="inspectOutline",document.body.appendChild(this.F));var e=this.F;e.style.display="";e.style.left=d.left-
1+"px";e.style.top=d.top-1+"px";e.style.width=d.width+2+"px";e.style.height=d.height+2+"px";e.textContent=d.name}else this.F&&(this.F.style.display="none")});b.g("runtime","enable-device-orientation",()=>Na(this));b.g("runtime","enable-device-motion",()=>Oa(this));b.g("runtime","add-stylesheet",d=>Pa(d));b.g("runtime","script-create-worker",d=>{const e=d.port2;(new Worker(d.url,d.opts)).postMessage({type:"construct-worker-init",port2:e},[e])});b.g("runtime","alert",d=>{alert(d.message)});b.g("runtime",
"screen-reader-text",d=>{var e=d.type;"create"===e?(e=document.createElement("p"),e.id="c3-sr-"+d.id,e.textContent=d.text,this.fa.appendChild(e)):"update"===e?(e=document.getElementById("c3-sr-"+d.id))?e.textContent=d.text:console.warn(`[Construct] Missing screen reader text with id ${d.id}`):"release"===e?(e=document.getElementById("c3-sr-"+d.id))?e.remove():console.warn(`[Construct] Missing screen reader text with id ${d.id}`):console.warn(`[Construct] Unknown screen reader text update '${e}'`)});
b.g("runtime","hide-cordova-splash",()=>{navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()});b.g("runtime","set-exporting-to-video",d=>{this.l=!0;const e=document.createElement("h1");e.id="exportToVideoMessage";e.textContent=d.message;document.body.prepend(e);document.body.classList.add("exportingToVideo");this.i.j.style.display="";this.i.fb()});b.g("runtime","export-to-video-progress",d=>Qa(this,d));b.g("runtime","exported-to-video",d=>{window.Fb({type:"exported-video",
blob:d.blob,time:d.time})});b.g("runtime","exported-to-image-sequence",d=>{window.Fb({type:"exported-image-sequence",blobArr:d.blobArr,time:d.time,gif:d.gif})});const a=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",d=>{const e=d.target;a.has(e.tagName.toLowerCase())||J(e)||d.preventDefault()});const c=b.j;window.addEventListener("selectstart",K);window.addEventListener("gesturehold",K);c.addEventListener("selectstart",K);c.addEventListener("gesturehold",K);window.addEventListener("touchstart",
K,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",K,{passive:!1}),c.addEventListener("pointerdown",K)):c.addEventListener("touchstart",K);this.W=0;window.addEventListener("mousedown",d=>{1===d.button&&d.preventDefault()});window.addEventListener("mousewheel",Ha,{passive:!1});window.addEventListener("wheel",Ha,{passive:!1});window.addEventListener("resize",()=>{a:{if(!this.l&&this.Sa){var d=this.A();var e=this.s();if(this.i.Ia()){if(this.Ra){if(this.za===d&&e<
this.U){this.Y=this.U-e;V(this,this.U,this.Y);d=void 0;break a}0<this.Y&&(this.Y=0,V(this,e,this.Y))}this.za=d;this.U=e}l(this,"window-resize",{innerWidth:d,innerHeight:e,devicePixelRatio:window.devicePixelRatio,isFullscreen:F.O()});this.i.la()&&(-1!==this.K&&clearTimeout(this.K),Ua(this,d,e,0))}d=void 0}return d});window.addEventListener("fullscreenchange",()=>N(this));window.addEventListener("webkitfullscreenchange",()=>N(this));window.addEventListener("mozfullscreenchange",()=>N(this));window.addEventListener("fullscreenerror",
d=>O(this,d));window.addEventListener("webkitfullscreenerror",d=>O(this,d));window.addEventListener("mozfullscreenerror",d=>O(this,d));if(b.la())if(window.visualViewport){let d=Infinity;window.visualViewport.addEventListener("resize",()=>{const e=window.visualViewport.height;e>d&&(document.scrollingElement.scrollTop=0);d=e})}else window.addEventListener("focusout",()=>{{const f=document.activeElement;if(f){var d=f.tagName.toLowerCase();var e=new Set("email number password search tel text url".split(" "));
d="textarea"===d?!0:"input"===d?e.has(f.type.toLowerCase()||"text"):J(f)}else d=!1}d||(document.scrollingElement.scrollTop=0)});self.C3WrapperOnMessage=d=>{"entered-fullscreen"===d?(F.Oa(!0),N(this)):"exited-fullscreen"===d?(F.Oa(!1),N(this)):console.warn("Unknown wrapper message: ",d)};this.Ba=new Set;this.Db=new WeakSet;this.Bb=!1}Ga(){window.addEventListener("focus",()=>{l(this,"window-focus",null,H)});window.addEventListener("blur",()=>{try{var a=window.parent&&window.parent.document.hasFocus()}catch(c){a=
!1}l(this,"window-blur",{parentHasFocus:a},H);this.W=0});window.addEventListener("focusin",a=>{a=a.target;(Ca.has(a.tagName.toLowerCase())||J(a))&&l(this,"keyboard-blur",null,H)});window.addEventListener("keydown",a=>Sa(this,"keydown",a));window.addEventListener("keyup",a=>Sa(this,"keyup",a));window.addEventListener("dblclick",a=>P(this,"dblclick",a,G));window.addEventListener("wheel",a=>{this.l||l(this,"wheel",{clientX:a.clientX,clientY:a.clientY+this.o,pageX:a.pageX,pageY:a.pageY+this.o,deltaX:a.deltaX,
deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},G)});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",a=>{R(a);S(this,"pointerdown",a)}),this.i.u&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?window.addEventListener("pointerrawupdate",a=>{S(this,"pointermove",a)}):window.addEventListener("pointermove",a=>S(this,"pointermove",a)),window.addEventListener("pointerup",a=>S(this,"pointerup",a)),window.addEventListener("pointercancel",
a=>S(this,"pointercancel",a))):(window.addEventListener("mousedown",a=>{R(a);T(this,"pointerdown",a)}),window.addEventListener("mousemove",a=>T(this,"pointermove",a)),window.addEventListener("mouseup",a=>T(this,"pointerup",a)),window.addEventListener("touchstart",a=>{R(a);U(this,"pointerdown",a)}),window.addEventListener("touchmove",a=>U(this,"pointermove",a)),window.addEventListener("touchend",a=>U(this,"pointerup",a)),window.addEventListener("touchcancel",a=>U(this,"pointercancel",a)));const b=
()=>this.qa();window.addEventListener("pointerup",b,!0);window.addEventListener("touchend",b,!0);window.addEventListener("click",b,!0);window.addEventListener("keydown",b,!0);window.addEventListener("gamepadconnected",b,!0);this.i.$a()&&!this.i.Ia()&&navigator.virtualKeyboard&&(navigator.virtualKeyboard.overlaysContent=!0,navigator.virtualKeyboard.addEventListener("geometrychange",()=>{V(this,this.s(),navigator.virtualKeyboard.boundingRect.height)}))}A(){return this.i.A()}s(){return this.i.s()}qa(){var b=
[...this.Ba];this.Ba.clear();if(!this.Bb)for(const a of b)(b=a.play())&&b.catch(()=>{this.Db.has(a)||this.Ba.add(a)})}});"use strict";async function ra(b){if(b.Ab)throw Error("already initialised");b.Ab=!0;var a=b.C.pa(("playable-ad"===b.C.h?b.C.J:"")+"dispatchworker.js");b.sa=await b.C.ja(a,b.P,{name:"DispatchWorker"});a=new MessageChannel;b.wa=a.port1;b.sa.postMessage({type:"_init","in-port":a.port2},[a.port2]);b.Ca=await ua(b)}function sa(b){return[b.wa,b.Ca]}
async function ua(b){const a=b.Wa.length;var c=b.C.pa(("playable-ad"===b.C.h?b.C.J:"")+"jobworker.js");c=await b.C.ja(c,b.P,{name:"JobWorker"+a});const d=new MessageChannel,e=new MessageChannel;b.sa.postMessage({type:"_addJobWorker",port:d.port1},[d.port1]);c.postMessage({type:"init",number:a,"dispatch-port":d.port2,"output-port":e.port2},[d.port2,e.port2]);b.Wa.push(c);return e.port1}
self.cb=class{constructor(b){this.C=b;this.P=b.m;this.P="preview"===b.h?this.P+"workers/":this.P+b.J;this.Cb=Math.min(navigator.hardwareConcurrency||2,16);this.sa=null;this.Wa=[];this.Ca=this.wa=null}};"use strict";window.C3_IsSupported&&(window.c3_runtimeInterface=new self.D({Pb:!0,Qb:"workermain.js",M:["scripts/c3runtime.js"],ga:[],Fa:"",Mb:"scripts/",ha:[],Xa:"scirra-arcade"}));"use strict";
async function Wa(b,a){a=a.type;let c=!0;0===a?c=await Xa():1===a&&(c=await Ya());l(b,"permission-result",{type:a,result:c})}async function Xa(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{return"granted"===await self.DeviceOrientationEvent.requestPermission()}catch(b){return console.warn("[Touch] Failed to request orientation permission: ",b),!1}}
async function Ya(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{return"granted"===await self.DeviceMotionEvent.requestPermission()}catch(b){return console.warn("[Touch] Failed to request motion permission: ",b),!1}}self.D.G(class extends self.ka{constructor(b){super(b,"touch");q(this,"request-permission",a=>Wa(this,a))}});"use strict";function W(b){b.stopPropagation()}
self.D.G(class extends self.${constructor(b){super(b,"file-chooser");t(this,"click",a=>{a.click()});t(this,"clear",a=>{a.value=""})}N(b,a){const c=document.createElement("input");c.type="file";c.style.position="absolute";c.style.userSelect="none";c.style.webkitUserSelect="none";c.addEventListener("pointerdown",W);c.addEventListener("pointermove",W);c.addEventListener("pointerrawupdate",W);c.addEventListener("pointerup",W);c.addEventListener("mousedown",W);c.addEventListener("mouseup",W);c.addEventListener("change",
()=>r(this,"change",b,{files:Array.from(c.files)}));a.id&&(c.id=a.id);a.className&&(c.className=a.className);this.v(c,a);return c}v(b,a){b.setAttribute("accept",a.accept);a.isMultiSelect?b.setAttribute("multiple",""):b.removeAttribute("multiple")}});"use strict";function X(b){b.stopPropagation()}function Za(b){13!==b.which&&27!==b.which&&b.stopPropagation()}
self.D.G(class extends self.${constructor(b){super(b,"text-input");t(this,"scroll-to-bottom",a=>{a.scrollTop=a.scrollHeight})}N(b,a){let c;const d=a.type;"textarea"===d?(c=document.createElement("textarea"),c.style.resize="none"):(c=document.createElement("input"),c.type=d);c.style.position="absolute";c.autocomplete="off";c.addEventListener("pointerdown",X);c.addEventListener("pointermove",X);c.addEventListener("pointerrawupdate",X);c.addEventListener("pointerup",X);c.addEventListener("mousedown",
X);c.addEventListener("mouseup",X);c.addEventListener("keydown",Za);c.addEventListener("keyup",Za);c.addEventListener("click",e=>{e.stopPropagation();v(this,"click",b)});c.addEventListener("dblclick",e=>{e.stopPropagation();v(this,"dblclick",b)});c.addEventListener("input",()=>r(this,"change",b,{text:c.value}));a.id&&(c.id=a.id);a.className&&(c.className=a.className);this.v(c,a);return c}v(b,a){b.value=a.text;b.placeholder=a.placeholder;b.title=a.title;b.disabled=!a.isEnabled;b.readOnly=a.isReadOnly;
b.spellcheck=a.spellCheck;a=a.maxLength;0>a?b.removeAttribute("maxlength"):b.setAttribute("maxlength",a)}});"use strict";function Y(b){b.stopPropagation()}function $a(b){const a=document.createElement("option");a.text=b;return a}function ab(b){const a=b.selectedIndex,c=[];for(let d=0,e=b.length;d<e;++d)b.options[d].selected&&c.push(d);return{selectedIndex:a,selectedIndices:c}}
self.D.G(class extends self.${constructor(b){super(b,"list");t(this,"set-selected-index",(a,c)=>{a.selectedIndex=c.selectedIndex});t(this,"add-item",(a,c)=>{const d=c.index;c=$a(c.text);0>d?a.add(c):a.add(c,d)});t(this,"remove-item",(a,c)=>{a.remove(c.index)});t(this,"set-item",(a,c)=>{a.options[c.index].text=c.text});t(this,"clear",a=>{a.innerHTML=""});t(this,"load-state",(a,c)=>{a.innerHTML="";for(const d of c.items)a.add($a(d));a.selectedIndex=c.selectedIndex;for(const d of c.selectedIndices)if(c=
a.options[d])c.selected=!0})}N(b,a){const c=a.isDropdown,d=a.isMultiSelect,e=a.items,f=document.createElement("select");f.style.position="absolute";f.style.userSelect="none";f.style.webkitUserSelect="none";f.multiple=d;c||(f.size=2);for(const g of e)f.add($a(g));f.addEventListener("pointerdown",Y);f.addEventListener("pointermove",Y);f.addEventListener("pointerrawupdate",Y);f.addEventListener("pointerup",Y);f.addEventListener("mousedown",Y);f.addEventListener("mouseup",Y);f.addEventListener("click",
g=>{g.stopPropagation();v(this,"click",b,ab(f))});f.addEventListener("dblclick",g=>{g.stopPropagation();v(this,"dblclick",b,ab(f))});f.addEventListener("change",()=>r(this,"change",b,ab(f)));a.id&&(f.id=a.id);a.className&&(f.className=a.className);this.v(f,a);return f}v(b,a){b.title=a.title;b.disabled=!a.isEnabled;b.multiple=!!a.isMultiSelect}});"use strict";function Z(b){b.stopPropagation()}
self.D.G(class extends self.${constructor(b){super(b,"button")}N(b,a){const c=document.createElement("input");var d=c;a.isCheckbox?(c.type="checkbox",d=document.createElement("label"),d.appendChild(c),d.appendChild(document.createTextNode("")),d.style.fontFamily="sans-serif",d.style.userSelect="none",d.style.webkitUserSelect="none",d.style.display="inline-block",d.style.color="black"):c.type="button";d.style.position="absolute";d.addEventListener("pointerdown",Z);d.addEventListener("pointermove",
Z);d.addEventListener("pointerrawupdate",Z);d.addEventListener("pointerup",Z);d.addEventListener("mousedown",Z);d.addEventListener("mouseup",Z);d.addEventListener("keydown",Z);d.addEventListener("keyup",Z);c.addEventListener("click",()=>v(this,"click",b,{isChecked:c.checked}));a.id&&(c.id=a.id);a.className&&(c.className=a.className);this.v(d,a);return d}oa(b){return"input"===b.tagName.toLowerCase()?b:b.firstChild}v(b,a){const c="input"===b.tagName.toLowerCase()?b:b.firstChild;c.checked=a.isChecked;
c.disabled=!a.isEnabled;b.title=a.title;b===c?c.value=a.text:b.lastChild.textContent=a.text}});
