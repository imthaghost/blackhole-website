(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9483],{69483:function(t,r,n){/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/t.exports=(function e(t,r,n){function s(a,i){if(!r[a]){if(!t[a]){if(o)return o(a,!0);var c=Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var u=r[a]={exports:{}};t[a][0].call(u.exports,function(r){return s(t[a][1][r]||r)},u,u.exports,e,t,r,n)}return r[a].exports}for(var o=void 0,a=0;a<n.length;a++)s(n[a]);return s})({1:[function(t,r,o){(function(t){"use strict";var n,o,a=t.MutationObserver||t.WebKitMutationObserver;if(a){var i=0,c=new a(nextTick),u=t.document.createTextNode("");c.observe(u,{characterData:!0}),n=function(){u.data=i=++i%2}}else if(t.setImmediate||void 0===t.MessageChannel)n="document"in t&&"onreadystatechange"in t.document.createElement("script")?function(){var r=t.document.createElement("script");r.onreadystatechange=function(){nextTick(),r.onreadystatechange=null,r.parentNode.removeChild(r),r=null},t.document.documentElement.appendChild(r)}:function(){setTimeout(nextTick,0)};else{var f=new t.MessageChannel;f.port1.onmessage=nextTick,n=function(){f.port2.postMessage(0)}}var l=[];function nextTick(){o=!0;for(var t,r,n=l.length;n;){for(r=l,l=[],t=-1;++t<n;)r[t]();n=l.length}o=!1}r.exports=function(t){1!==l.push(t)||o||n()}}).call(this,void 0!==n.g?n.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(t,r,n){"use strict";var o=t(1);function INTERNAL(){}var a={},i=["REJECTED"],c=["FULFILLED"],u=["PENDING"];function Promise(t){if("function"!=typeof t)throw TypeError("resolver must be a function");this.state=u,this.queue=[],this.outcome=void 0,t!==INTERNAL&&safelyResolveThenable(this,t)}function QueueItem(t,r,n){this.promise=t,"function"==typeof r&&(this.onFulfilled=r,this.callFulfilled=this.otherCallFulfilled),"function"==typeof n&&(this.onRejected=n,this.callRejected=this.otherCallRejected)}function unwrap(t,r,n){o(function(){var o;try{o=r(n)}catch(r){return a.reject(t,r)}o===t?a.reject(t,TypeError("Cannot resolve promise with itself")):a.resolve(t,o)})}function getThen(t){var r=t&&t.then;if(t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof r)return function(){r.apply(t,arguments)}}function safelyResolveThenable(t,r){var n=!1;function onError(r){n||(n=!0,a.reject(t,r))}function onSuccess(r){n||(n=!0,a.resolve(t,r))}var o=tryCatch(function(){r(onSuccess,onError)});"error"===o.status&&onError(o.value)}function tryCatch(t,r){var n={};try{n.value=t(r),n.status="success"}catch(t){n.status="error",n.value=t}return n}r.exports=Promise,Promise.prototype.catch=function(t){return this.then(null,t)},Promise.prototype.then=function(t,r){if("function"!=typeof t&&this.state===c||"function"!=typeof r&&this.state===i)return this;var n=new this.constructor(INTERNAL);return this.state!==u?unwrap(n,this.state===c?t:r,this.outcome):this.queue.push(new QueueItem(n,t,r)),n},QueueItem.prototype.callFulfilled=function(t){a.resolve(this.promise,t)},QueueItem.prototype.otherCallFulfilled=function(t){unwrap(this.promise,this.onFulfilled,t)},QueueItem.prototype.callRejected=function(t){a.reject(this.promise,t)},QueueItem.prototype.otherCallRejected=function(t){unwrap(this.promise,this.onRejected,t)},a.resolve=function(t,r){var n=tryCatch(getThen,r);if("error"===n.status)return a.reject(t,n.value);var o=n.value;if(o)safelyResolveThenable(t,o);else{t.state=c,t.outcome=r;for(var i=-1,u=t.queue.length;++i<u;)t.queue[i].callFulfilled(r)}return t},a.reject=function(t,r){t.state=i,t.outcome=r;for(var n=-1,o=t.queue.length;++n<o;)t.queue[n].callRejected(r);return t},Promise.resolve=function(t){return t instanceof this?t:a.resolve(new this(INTERNAL),t)},Promise.reject=function(t){var r=new this(INTERNAL);return a.reject(r,t)},Promise.all=function(t){var r=this;if("[object Array]"!==Object.prototype.toString.call(t))return this.reject(TypeError("must be an array"));var n=t.length,o=!1;if(!n)return this.resolve([]);for(var i=Array(n),c=0,u=-1,f=new this(INTERNAL);++u<n;)(function(t,u){r.resolve(t).then(function(t){i[u]=t,++c!==n||o||(o=!0,a.resolve(f,i))},function(t){o||(o=!0,a.reject(f,t))})})(t[u],u);return f},Promise.race=function(t){var r=this;if("[object Array]"!==Object.prototype.toString.call(t))return this.reject(TypeError("must be an array"));var n=t.length,o=!1;if(!n)return this.resolve([]);for(var i=-1,c=new this(INTERNAL);++i<n;)(function(t){r.resolve(t).then(function(t){o||(o=!0,a.resolve(c,t))},function(t){o||(o=!0,a.reject(c,t))})})(t[i]);return c}},{1:1}],3:[function(t,r,o){(function(r){"use strict";"function"!=typeof r.Promise&&(r.Promise=t(2))}).call(this,void 0!==n.g?n.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2}],4:[function(t,r,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(t){return}}();function createBlob(t,r){t=t||[],r=r||{};try{return new Blob(t,r)}catch(a){if("TypeError"!==a.name)throw a;for(var n=new("undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder),o=0;o<t.length;o+=1)n.append(t[o]);return n.getBlob(r.type)}}"undefined"==typeof Promise&&t(3);var i=Promise;function executeCallback(t,r){r&&t.then(function(t){r(null,t)},function(t){r(t)})}function executeTwoCallbacks(t,r,n){"function"==typeof r&&t.then(r),"function"==typeof n&&t.catch(n)}function normalizeKey(t){return"string"!=typeof t&&(console.warn(t+" used as a key, but it is not a string."),t=String(t)),t}function getCallback(){if(arguments.length&&"function"==typeof arguments[arguments.length-1])return arguments[arguments.length-1]}var c="local-forage-detect-blob-support",u=void 0,f={},l=Object.prototype.toString,d="readonly",v="readwrite";function _deferReadiness(t){var r=f[t.name],n={};n.promise=new i(function(t,r){n.resolve=t,n.reject=r}),r.deferredOperations.push(n),r.dbReady?r.dbReady=r.dbReady.then(function(){return n.promise}):r.dbReady=n.promise}function _advanceReadiness(t){var r=f[t.name].deferredOperations.pop();if(r)return r.resolve(),r.promise}function _rejectReadiness(t,r){var n=f[t.name].deferredOperations.pop();if(n)return n.reject(r),n.promise}function _getConnection(t,r){return new i(function(n,o){if(f[t.name]=f[t.name]||createDbContext(),t.db){if(!r)return n(t.db);_deferReadiness(t),t.db.close()}var i=[t.name];r&&i.push(t.version);var u=a.open.apply(a,i);r&&(u.onupgradeneeded=function(r){var n=u.result;try{n.createObjectStore(t.storeName),r.oldVersion<=1&&n.createObjectStore(c)}catch(n){if("ConstraintError"===n.name)console.warn('The database "'+t.name+'" has been upgraded from version '+r.oldVersion+" to version "+r.newVersion+', but the storage "'+t.storeName+'" already exists.');else throw n}}),u.onerror=function(t){t.preventDefault(),o(u.error)},u.onsuccess=function(){var r=u.result;r.onversionchange=function(t){t.target.close()},n(r),_advanceReadiness(t)}})}function _isUpgradeNeeded(t,r){if(!t.db)return!0;var n=!t.db.objectStoreNames.contains(t.storeName),o=t.version<t.db.version,a=t.version>t.db.version;if(o&&(t.version!==r&&console.warn('The database "'+t.name+"\" can't be downgraded from version "+t.db.version+" to version "+t.version+"."),t.version=t.db.version),a||n){if(n){var i=t.db.version+1;i>t.version&&(t.version=i)}return!0}return!1}function _decodeBlob(t){return createBlob([function(t){for(var r=t.length,n=new ArrayBuffer(r),o=new Uint8Array(n),a=0;a<r;a++)o[a]=t.charCodeAt(a);return n}(atob(t.data))],{type:t.type})}function _isEncodedBlob(t){return t&&t.__local_forage_encoded_blob}function _fullyReady(t){var r=this,n=r._initReady().then(function(){var t=f[r._dbInfo.name];if(t&&t.dbReady)return t.dbReady});return executeTwoCallbacks(n,t,t),n}function createTransaction(t,r,n,o){void 0===o&&(o=1);try{var a=t.db.transaction(t.storeName,r);n(null,a)}catch(a){if(o>0&&(!t.db||"InvalidStateError"===a.name||"NotFoundError"===a.name))return i.resolve().then(function(){if(!t.db||"NotFoundError"===a.name&&!t.db.objectStoreNames.contains(t.storeName)&&t.version<=t.db.version)return t.db&&(t.version=t.db.version+1),_getConnection(t,!0)}).then(function(){return(function(t){_deferReadiness(t);for(var r=f[t.name],n=r.forages,o=0;o<n.length;o++){var a=n[o];a._dbInfo.db&&(a._dbInfo.db.close(),a._dbInfo.db=null)}return t.db=null,_getConnection(t,!1).then(function(r){return(t.db=r,_isUpgradeNeeded(t))?_getConnection(t,!0):r}).then(function(o){t.db=r.db=o;for(var a=0;a<n.length;a++)n[a]._dbInfo.db=o}).catch(function(r){throw _rejectReadiness(t,r),r})})(t).then(function(){createTransaction(t,r,n,o-1)})}).catch(n);n(a)}}function createDbContext(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}var h={_driver:"asyncStorage",_initStorage:function(t){var r=this,n={db:null};if(t)for(var o in t)n[o]=t[o];var a=f[n.name];a||(a=createDbContext(),f[n.name]=a),a.forages.push(r),r._initReady||(r._initReady=r.ready,r.ready=_fullyReady);var c=[];function ignoreErrors(){return i.resolve()}for(var u=0;u<a.forages.length;u++){var l=a.forages[u];l!==r&&c.push(l._initReady().catch(ignoreErrors))}var d=a.forages.slice(0);return i.all(c).then(function(){return n.db=a.db,_getConnection(n,!1)}).then(function(t){return(n.db=t,_isUpgradeNeeded(n,r._defaultConfig.version))?_getConnection(n,!0):t}).then(function(t){n.db=a.db=t,r._dbInfo=n;for(var o=0;o<d.length;o++){var i=d[o];i!==r&&(i._dbInfo.db=n.db,i._dbInfo.version=n.version)}})},_support:function(){try{if(!a||!a.open)return!1;var t="undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),r="function"==typeof fetch&&-1!==fetch.toString().indexOf("[native code");return(!t||r)&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(t){return!1}}(),iterate:function(t,r){var n=this,o=new i(function(r,o){n.ready().then(function(){createTransaction(n._dbInfo,d,function(a,i){if(a)return o(a);try{var c=i.objectStore(n._dbInfo.storeName).openCursor(),u=1;c.onsuccess=function(){var n=c.result;if(n){var o=n.value;_isEncodedBlob(o)&&(o=_decodeBlob(o));var a=t(o,n.key,u++);void 0!==a?r(a):n.continue()}else r()},c.onerror=function(){o(c.error)}}catch(t){o(t)}})}).catch(o)});return executeCallback(o,r),o},getItem:function(t,r){var n=this;t=normalizeKey(t);var o=new i(function(r,o){n.ready().then(function(){createTransaction(n._dbInfo,d,function(a,i){if(a)return o(a);try{var c=i.objectStore(n._dbInfo.storeName).get(t);c.onsuccess=function(){var t=c.result;void 0===t&&(t=null),_isEncodedBlob(t)&&(t=_decodeBlob(t)),r(t)},c.onerror=function(){o(c.error)}}catch(t){o(t)}})}).catch(o)});return executeCallback(o,r),o},setItem:function(t,r,n){var o=this;t=normalizeKey(t);var a=new i(function(n,a){var f;o.ready().then(function(){var t;return(f=o._dbInfo,"[object Blob]"===l.call(r))?(t=f.db,"boolean"==typeof u?i.resolve(u):new i(function(r){var n=t.transaction(c,v),o=createBlob([""]);n.objectStore(c).put(o,"key"),n.onabort=function(t){t.preventDefault(),t.stopPropagation(),r(!1)},n.oncomplete=function(){var t=navigator.userAgent.match(/Chrome\/(\d+)/);r(navigator.userAgent.match(/Edge\//)||!t||parseInt(t[1],10)>=43)}}).catch(function(){return!1}).then(function(t){return u=t})).then(function(t){return t?r:new i(function(t,n){var o=new FileReader;o.onerror=n,o.onloadend=function(n){t({__local_forage_encoded_blob:!0,data:btoa(n.target.result||""),type:r.type})},o.readAsBinaryString(r)})}):r}).then(function(r){createTransaction(o._dbInfo,v,function(i,c){if(i)return a(i);try{var u=c.objectStore(o._dbInfo.storeName);null===r&&(r=void 0);var f=u.put(r,t);c.oncomplete=function(){void 0===r&&(r=null),n(r)},c.onabort=c.onerror=function(){var t=f.error?f.error:f.transaction.error;a(t)}}catch(t){a(t)}})}).catch(a)});return executeCallback(a,n),a},removeItem:function(t,r){var n=this;t=normalizeKey(t);var o=new i(function(r,o){n.ready().then(function(){createTransaction(n._dbInfo,v,function(a,i){if(a)return o(a);try{var c=i.objectStore(n._dbInfo.storeName).delete(t);i.oncomplete=function(){r()},i.onerror=function(){o(c.error)},i.onabort=function(){var t=c.error?c.error:c.transaction.error;o(t)}}catch(t){o(t)}})}).catch(o)});return executeCallback(o,r),o},clear:function(t){var r=this,n=new i(function(t,n){r.ready().then(function(){createTransaction(r._dbInfo,v,function(o,a){if(o)return n(o);try{var i=a.objectStore(r._dbInfo.storeName).clear();a.oncomplete=function(){t()},a.onabort=a.onerror=function(){var t=i.error?i.error:i.transaction.error;n(t)}}catch(t){n(t)}})}).catch(n)});return executeCallback(n,t),n},length:function(t){var r=this,n=new i(function(t,n){r.ready().then(function(){createTransaction(r._dbInfo,d,function(o,a){if(o)return n(o);try{var i=a.objectStore(r._dbInfo.storeName).count();i.onsuccess=function(){t(i.result)},i.onerror=function(){n(i.error)}}catch(t){n(t)}})}).catch(n)});return executeCallback(n,t),n},key:function(t,r){var n=this,o=new i(function(r,o){if(t<0){r(null);return}n.ready().then(function(){createTransaction(n._dbInfo,d,function(a,i){if(a)return o(a);try{var c=i.objectStore(n._dbInfo.storeName),u=!1,f=c.openKeyCursor();f.onsuccess=function(){var n=f.result;if(!n){r(null);return}0===t?r(n.key):u?r(n.key):(u=!0,n.advance(t))},f.onerror=function(){o(f.error)}}catch(t){o(t)}})}).catch(o)});return executeCallback(o,r),o},keys:function(t){var r=this,n=new i(function(t,n){r.ready().then(function(){createTransaction(r._dbInfo,d,function(o,a){if(o)return n(o);try{var i=a.objectStore(r._dbInfo.storeName).openKeyCursor(),c=[];i.onsuccess=function(){var r=i.result;if(!r){t(c);return}c.push(r.key),r.continue()},i.onerror=function(){n(i.error)}}catch(t){n(t)}})}).catch(n)});return executeCallback(n,t),n},dropInstance:function(t,r){r=getCallback.apply(this,arguments);var n,o=this.config();if((t="function"!=typeof t&&t||{}).name||(t.name=t.name||o.name,t.storeName=t.storeName||o.storeName),t.name){var c=t.name===o.name&&this._dbInfo.db?i.resolve(this._dbInfo.db):_getConnection(t,!1).then(function(r){var n=f[t.name],o=n.forages;n.db=r;for(var a=0;a<o.length;a++)o[a]._dbInfo.db=r;return r});n=t.storeName?c.then(function(r){if(r.objectStoreNames.contains(t.storeName)){var n=r.version+1;_deferReadiness(t);var o=f[t.name],c=o.forages;r.close();for(var u=0;u<c.length;u++){var l=c[u];l._dbInfo.db=null,l._dbInfo.version=n}return new i(function(r,o){var i=a.open(t.name,n);i.onerror=function(t){i.result.close(),o(t)},i.onupgradeneeded=function(){i.result.deleteObjectStore(t.storeName)},i.onsuccess=function(){var t=i.result;t.close(),r(t)}}).then(function(t){o.db=t;for(var r=0;r<c.length;r++){var n=c[r];n._dbInfo.db=t,_advanceReadiness(n._dbInfo)}}).catch(function(r){throw(_rejectReadiness(t,r)||i.resolve()).catch(function(){}),r})}}):c.then(function(r){_deferReadiness(t);var n=f[t.name],o=n.forages;r.close();for(var c=0;c<o.length;c++)o[c]._dbInfo.db=null;return new i(function(r,n){var o=a.deleteDatabase(t.name);o.onerror=function(){var t=o.result;t&&t.close(),n(o.error)},o.onblocked=function(){console.warn('dropInstance blocked for database "'+t.name+'" until all open connections are closed')},o.onsuccess=function(){var t=o.result;t&&t.close(),r(t)}}).then(function(t){n.db=t;for(var r=0;r<o.length;r++)_advanceReadiness(o[r]._dbInfo)}).catch(function(r){throw(_rejectReadiness(t,r)||i.resolve()).catch(function(){}),r})})}else n=i.reject("Invalid arguments");return executeCallback(n,r),n}},b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",y=/^~~local_forage_type~([^~]+)~/,p="__lfsc__:",g=p.length,m="arbf",_="blob",I="si08",S="ui08",w="uic8",E="si16",x="si32",C="ur16",N="ui32",k="fl32",T="fl64",R=g+m.length,j=Object.prototype.toString;function stringToBuffer(t){var r,n,o,a,i,c=.75*t.length,u=t.length,f=0;"="===t[t.length-1]&&(c--,"="===t[t.length-2]&&c--);var l=new ArrayBuffer(c),d=new Uint8Array(l);for(r=0;r<u;r+=4)n=b.indexOf(t[r]),o=b.indexOf(t[r+1]),a=b.indexOf(t[r+2]),i=b.indexOf(t[r+3]),d[f++]=n<<2|o>>4,d[f++]=(15&o)<<4|a>>2,d[f++]=(3&a)<<6|63&i;return l}function bufferToString(t){var r,n=new Uint8Array(t),o="";for(r=0;r<n.length;r+=3)o+=b[n[r]>>2]+b[(3&n[r])<<4|n[r+1]>>4]+b[(15&n[r+1])<<2|n[r+2]>>6]+b[63&n[r+2]];return n.length%3==2?o=o.substring(0,o.length-1)+"=":n.length%3==1&&(o=o.substring(0,o.length-2)+"=="),o}var D={serialize:function(t,r){var n="";if(t&&(n=j.call(t)),t&&("[object ArrayBuffer]"===n||t.buffer&&"[object ArrayBuffer]"===j.call(t.buffer))){var o,a=p;t instanceof ArrayBuffer?(o=t,a+=m):(o=t.buffer,"[object Int8Array]"===n?a+=I:"[object Uint8Array]"===n?a+=S:"[object Uint8ClampedArray]"===n?a+=w:"[object Int16Array]"===n?a+=E:"[object Uint16Array]"===n?a+=C:"[object Int32Array]"===n?a+=x:"[object Uint32Array]"===n?a+=N:"[object Float32Array]"===n?a+=k:"[object Float64Array]"===n?a+=T:r(Error("Failed to get type for BinaryArray"))),r(a+bufferToString(o))}else if("[object Blob]"===n){var i=new FileReader;i.onload=function(){r(p+_+("~~local_forage_type~"+t.type)+"~"+bufferToString(this.result))},i.readAsArrayBuffer(t)}else try{r(JSON.stringify(t))}catch(n){console.error("Couldn't convert value into a JSON string: ",t),r(null,n)}},deserialize:function(t){if(t.substring(0,g)!==p)return JSON.parse(t);var r,n=t.substring(R),o=t.substring(g,R);if(o===_&&y.test(n)){var a=n.match(y);r=a[1],n=n.substring(a[0].length)}var i=stringToBuffer(n);switch(o){case m:return i;case _:return createBlob([i],{type:r});case I:return new Int8Array(i);case S:return new Uint8Array(i);case w:return new Uint8ClampedArray(i);case E:return new Int16Array(i);case C:return new Uint16Array(i);case x:return new Int32Array(i);case N:return new Uint32Array(i);case k:return new Float32Array(i);case T:return new Float64Array(i);default:throw Error("Unkown type: "+o)}},stringToBuffer:stringToBuffer,bufferToString:bufferToString};function createDbTable(t,r,n,o){t.executeSql("CREATE TABLE IF NOT EXISTS "+r.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],n,o)}function tryExecuteSql(t,r,n,o,a,i){t.executeSql(n,o,a,function(t,c){c.code===c.SYNTAX_ERR?t.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[r.storeName],function(t,u){u.rows.length?i(t,c):createDbTable(t,r,function(){t.executeSql(n,o,a,i)},i)},i):i(t,c)},i)}function _setItem(t,r,n,o){var a=this;t=normalizeKey(t);var c=new i(function(i,c){a.ready().then(function(){void 0===r&&(r=null);var u=r,f=a._dbInfo;f.serializer.serialize(r,function(r,l){l?c(l):f.db.transaction(function(n){tryExecuteSql(n,f,"INSERT OR REPLACE INTO "+f.storeName+" (key, value) VALUES (?, ?)",[t,r],function(){i(u)},function(t,r){c(r)})},function(r){if(r.code===r.QUOTA_ERR){if(o>0){i(_setItem.apply(a,[t,u,n,o-1]));return}c(r)}})})}).catch(c)});return executeCallback(c,n),c}var A={_driver:"webSQLStorage",_initStorage:function(t){var r=this,n={db:null};if(t)for(var o in t)n[o]="string"!=typeof t[o]?t[o].toString():t[o];var a=new i(function(t,o){try{n.db=openDatabase(n.name,String(n.version),n.description,n.size)}catch(t){return o(t)}n.db.transaction(function(a){createDbTable(a,n,function(){r._dbInfo=n,t()},function(t,r){o(r)})},o)});return n.serializer=D,a},_support:"function"==typeof openDatabase,iterate:function(t,r){var n=this,o=new i(function(r,o){n.ready().then(function(){var a=n._dbInfo;a.db.transaction(function(n){tryExecuteSql(n,a,"SELECT * FROM "+a.storeName,[],function(n,o){for(var i=o.rows,c=i.length,u=0;u<c;u++){var f=i.item(u),l=f.value;if(l&&(l=a.serializer.deserialize(l)),void 0!==(l=t(l,f.key,u+1))){r(l);return}}r()},function(t,r){o(r)})})}).catch(o)});return executeCallback(o,r),o},getItem:function(t,r){var n=this;t=normalizeKey(t);var o=new i(function(r,o){n.ready().then(function(){var a=n._dbInfo;a.db.transaction(function(n){tryExecuteSql(n,a,"SELECT * FROM "+a.storeName+" WHERE key = ? LIMIT 1",[t],function(t,n){var o=n.rows.length?n.rows.item(0).value:null;o&&(o=a.serializer.deserialize(o)),r(o)},function(t,r){o(r)})})}).catch(o)});return executeCallback(o,r),o},setItem:function(t,r,n){return _setItem.apply(this,[t,r,n,1])},removeItem:function(t,r){var n=this;t=normalizeKey(t);var o=new i(function(r,o){n.ready().then(function(){var a=n._dbInfo;a.db.transaction(function(n){tryExecuteSql(n,a,"DELETE FROM "+a.storeName+" WHERE key = ?",[t],function(){r()},function(t,r){o(r)})})}).catch(o)});return executeCallback(o,r),o},clear:function(t){var r=this,n=new i(function(t,n){r.ready().then(function(){var o=r._dbInfo;o.db.transaction(function(r){tryExecuteSql(r,o,"DELETE FROM "+o.storeName,[],function(){t()},function(t,r){n(r)})})}).catch(n)});return executeCallback(n,t),n},length:function(t){var r=this,n=new i(function(t,n){r.ready().then(function(){var o=r._dbInfo;o.db.transaction(function(r){tryExecuteSql(r,o,"SELECT COUNT(key) as c FROM "+o.storeName,[],function(r,n){t(n.rows.item(0).c)},function(t,r){n(r)})})}).catch(n)});return executeCallback(n,t),n},key:function(t,r){var n=this,o=new i(function(r,o){n.ready().then(function(){var a=n._dbInfo;a.db.transaction(function(n){tryExecuteSql(n,a,"SELECT key FROM "+a.storeName+" WHERE id = ? LIMIT 1",[t+1],function(t,n){r(n.rows.length?n.rows.item(0).key:null)},function(t,r){o(r)})})}).catch(o)});return executeCallback(o,r),o},keys:function(t){var r=this,n=new i(function(t,n){r.ready().then(function(){var o=r._dbInfo;o.db.transaction(function(r){tryExecuteSql(r,o,"SELECT key FROM "+o.storeName,[],function(r,n){for(var o=[],a=0;a<n.rows.length;a++)o.push(n.rows.item(a).key);t(o)},function(t,r){n(r)})})}).catch(n)});return executeCallback(n,t),n},dropInstance:function(t,r){r=getCallback.apply(this,arguments);var n,o=this.config();(t="function"!=typeof t&&t||{}).name||(t.name=t.name||o.name,t.storeName=t.storeName||o.storeName);var a=this;return executeCallback(n=t.name?new i(function(r){var n;r((n=t.name===o.name?a._dbInfo.db:openDatabase(t.name,"","",0),t.storeName)?{db:n,storeNames:[t.storeName]}:new i(function(t,r){n.transaction(function(o){o.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(r,o){for(var a=[],i=0;i<o.rows.length;i++)a.push(o.rows.item(i).name);t({db:n,storeNames:a})},function(t,n){r(n)})},function(t){r(t)})}))}).then(function(t){return new i(function(r,n){t.db.transaction(function(o){for(var a=[],c=0,u=t.storeNames.length;c<u;c++)a.push(function(t){return new i(function(r,n){o.executeSql("DROP TABLE IF EXISTS "+t,[],function(){r()},function(t,r){n(r)})})}(t.storeNames[c]));i.all(a).then(function(){r()}).catch(function(t){n(t)})},function(t){n(t)})})}):i.reject("Invalid arguments"),r),n}};function _getKeyPrefix(t,r){var n=t.name+"/";return t.storeName!==r.storeName&&(n+=t.storeName+"/"),n}var B={_driver:"localStorageWrapper",_initStorage:function(t){var r={};if(t)for(var n in t)r[n]=t[n];return(r.keyPrefix=_getKeyPrefix(t,this._defaultConfig),!function(){var t="_localforage_support_test";try{return localStorage.setItem(t,!0),localStorage.removeItem(t),!1}catch(t){return!0}}()||localStorage.length>0)?(this._dbInfo=r,r.serializer=D,i.resolve()):i.reject()},_support:function(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&!!localStorage.setItem}catch(t){return!1}}(),iterate:function(t,r){var n=this,o=n.ready().then(function(){for(var r=n._dbInfo,o=r.keyPrefix,a=o.length,i=localStorage.length,c=1,u=0;u<i;u++){var f=localStorage.key(u);if(0===f.indexOf(o)){var l=localStorage.getItem(f);if(l&&(l=r.serializer.deserialize(l)),void 0!==(l=t(l,f.substring(a),c++)))return l}}});return executeCallback(o,r),o},getItem:function(t,r){var n=this;t=normalizeKey(t);var o=n.ready().then(function(){var r=n._dbInfo,o=localStorage.getItem(r.keyPrefix+t);return o&&(o=r.serializer.deserialize(o)),o});return executeCallback(o,r),o},setItem:function(t,r,n){var o=this;t=normalizeKey(t);var a=o.ready().then(function(){void 0===r&&(r=null);var n=r;return new i(function(a,i){var c=o._dbInfo;c.serializer.serialize(r,function(r,o){if(o)i(o);else try{localStorage.setItem(c.keyPrefix+t,r),a(n)}catch(t){("QuotaExceededError"===t.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.name)&&i(t),i(t)}})})});return executeCallback(a,n),a},removeItem:function(t,r){var n=this;t=normalizeKey(t);var o=n.ready().then(function(){var r=n._dbInfo;localStorage.removeItem(r.keyPrefix+t)});return executeCallback(o,r),o},clear:function(t){var r=this,n=r.ready().then(function(){for(var t=r._dbInfo.keyPrefix,n=localStorage.length-1;n>=0;n--){var o=localStorage.key(n);0===o.indexOf(t)&&localStorage.removeItem(o)}});return executeCallback(n,t),n},length:function(t){var r=this.keys().then(function(t){return t.length});return executeCallback(r,t),r},key:function(t,r){var n=this,o=n.ready().then(function(){var r,o=n._dbInfo;try{r=localStorage.key(t)}catch(t){r=null}return r&&(r=r.substring(o.keyPrefix.length)),r});return executeCallback(o,r),o},keys:function(t){var r=this,n=r.ready().then(function(){for(var t=r._dbInfo,n=localStorage.length,o=[],a=0;a<n;a++){var i=localStorage.key(a);0===i.indexOf(t.keyPrefix)&&o.push(i.substring(t.keyPrefix.length))}return o});return executeCallback(n,t),n},dropInstance:function(t,r){if(r=getCallback.apply(this,arguments),!(t="function"!=typeof t&&t||{}).name){var n,o=this.config();t.name=t.name||o.name,t.storeName=t.storeName||o.storeName}var a=this;return executeCallback(n=t.name?new i(function(r){r(t.storeName?_getKeyPrefix(t,a._defaultConfig):t.name+"/")}).then(function(t){for(var r=localStorage.length-1;r>=0;r--){var n=localStorage.key(r);0===n.indexOf(t)&&localStorage.removeItem(n)}}):i.reject("Invalid arguments"),r),n}},includes=function(t,r){for(var n,o=t.length,a=0;a<o;){if((n=t[a])===r||"number"==typeof n&&"number"==typeof r&&isNaN(n)&&isNaN(r))return!0;a++}return!1},L=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},O={},F={},P={INDEXEDDB:h,WEBSQL:A,LOCALSTORAGE:B},z=[P.INDEXEDDB._driver,P.WEBSQL._driver,P.LOCALSTORAGE._driver],M=["dropInstance"],q=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(M),U={description:"",driver:z.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function extend(){for(var t=1;t<arguments.length;t++){var r=arguments[t];if(r)for(var n in r)r.hasOwnProperty(n)&&(L(r[n])?arguments[0][n]=r[n].slice():arguments[0][n]=r[n])}return arguments[0]}var K=new(function(){function LocalForage(t){for(var r in function(t,r){if(!(t instanceof r))throw TypeError("Cannot call a class as a function")}(this,LocalForage),P)if(P.hasOwnProperty(r)){var n=P[r],o=n._driver;this[r]=o,O[o]||this.defineDriver(n)}this._defaultConfig=extend({},U),this._config=extend({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return LocalForage.prototype.config=function(t){if((void 0===t?"undefined":o(t))==="object"){if(this._ready)return Error("Can't call config() after localforage has been used.");for(var r in t){if("storeName"===r&&(t[r]=t[r].replace(/\W/g,"_")),"version"===r&&"number"!=typeof t[r])return Error("Database version must be a number.");this._config[r]=t[r]}return!("driver"in t)||!t.driver||this.setDriver(this._config.driver)}return"string"==typeof t?this._config[t]:this._config},LocalForage.prototype.defineDriver=function(t,r,n){var o=new i(function(r,n){try{var o=t._driver,a=Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!t._driver){n(a);return}for(var c=q.concat("_initStorage"),u=0,f=c.length;u<f;u++){var l=c[u];if((!includes(M,l)||t[l])&&"function"!=typeof t[l]){n(a);return}}!function(){for(var methodNotImplementedFactory=function(t){return function(){var r=Error("Method "+t+" is not implemented by the current driver"),n=i.reject(r);return executeCallback(n,arguments[arguments.length-1]),n}},r=0,n=M.length;r<n;r++){var o=M[r];t[o]||(t[o]=methodNotImplementedFactory(o))}}();var setDriverSupport=function(n){O[o]&&console.info("Redefining LocalForage driver: "+o),O[o]=t,F[o]=n,r()};"_support"in t?t._support&&"function"==typeof t._support?t._support().then(setDriverSupport,n):setDriverSupport(!!t._support):setDriverSupport(!0)}catch(t){n(t)}});return executeTwoCallbacks(o,r,n),o},LocalForage.prototype.driver=function(){return this._driver||null},LocalForage.prototype.getDriver=function(t,r,n){var o=O[t]?i.resolve(O[t]):i.reject(Error("Driver not found."));return executeTwoCallbacks(o,r,n),o},LocalForage.prototype.getSerializer=function(t){var r=i.resolve(D);return executeTwoCallbacks(r,t),r},LocalForage.prototype.ready=function(t){var r=this,n=r._driverSet.then(function(){return null===r._ready&&(r._ready=r._initDriver()),r._ready});return executeTwoCallbacks(n,t,t),n},LocalForage.prototype.setDriver=function(t,r,n){var o=this;L(t)||(t=[t]);var a=this._getSupportedDrivers(t);function setDriverToConfig(){o._config.driver=o.driver()}function extendSelfWithDriver(t){return o._extend(t),setDriverToConfig(),o._ready=o._initStorage(o._config),o._ready}var c=null!==this._driverSet?this._driverSet.catch(function(){return i.resolve()}):i.resolve();return this._driverSet=c.then(function(){var t=a[0];return o._dbInfo=null,o._ready=null,o.getDriver(t).then(function(t){o._driver=t._driver,setDriverToConfig(),o._wrapLibraryMethodsWithReady(),o._initDriver=function(){var t=0;return function driverPromiseLoop(){for(;t<a.length;){var r=a[t];return t++,o._dbInfo=null,o._ready=null,o.getDriver(r).then(extendSelfWithDriver).catch(driverPromiseLoop)}setDriverToConfig();var n=Error("No available storage method found.");return o._driverSet=i.reject(n),o._driverSet}()}})}).catch(function(){setDriverToConfig();var t=Error("No available storage method found.");return o._driverSet=i.reject(t),o._driverSet}),executeTwoCallbacks(this._driverSet,r,n),this._driverSet},LocalForage.prototype.supports=function(t){return!!F[t]},LocalForage.prototype._extend=function(t){extend(this,t)},LocalForage.prototype._getSupportedDrivers=function(t){for(var r=[],n=0,o=t.length;n<o;n++){var a=t[n];this.supports(a)&&r.push(a)}return r},LocalForage.prototype._wrapLibraryMethodsWithReady=function(){for(var t=0,r=q.length;t<r;t++)!function(t,r){t[r]=function(){var n=arguments;return t.ready().then(function(){return t[r].apply(t,n)})}}(this,q[t])},LocalForage.prototype.createInstance=function(t){return new LocalForage(t)},LocalForage}());r.exports=K},{3:3}]},{},[4])(4)}}]);