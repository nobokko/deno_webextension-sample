// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

var q = Object.create;
var v = Object.defineProperty;
var U = Object.getOwnPropertyDescriptor;
var z = Object.getOwnPropertyNames;
var Z = Object.getPrototypeOf, G = Object.prototype.hasOwnProperty;
var H = (m)=>v(m, "__esModule", {
        value: !0
    })
;
var V = (m, t)=>()=>(t || m((t = {
            exports: {}
        }).exports, t), t.exports)
;
var K = (m, t, u, b)=>{
    if (t && typeof t == "object" || typeof t == "function") for (let o of z(t))!G.call(m, o) && (u || o !== "default") && v(m, o, {
        get: ()=>t[o]
        ,
        enumerable: !(b = U(t, o)) || b.enumerable
    });
    return m;
}, _ = (m, t)=>K(H(v(m != null ? q(Z(m)) : {}, "default", !t && m && m.__esModule ? {
        get: ()=>m.default
        ,
        enumerable: !0
    } : {
        value: m,
        enumerable: !0
    })), m)
;
var P = V((T, F)=>{
    (function(m, t) {
        if (typeof define == "function" && define.amd) define("webextension-polyfill", [
            "module"
        ], t);
        else if (typeof T != "undefined") t(F);
        else {
            var u = {
                exports: {}
            };
            t(u), m.browser = u.exports;
        }
    })(typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : T, function(m) {
        "use strict";
        if (typeof browser == "undefined" || Object.getPrototypeOf(browser) !== Object.prototype) {
            let t = "The message port closed before a response was received.", u = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)", b = (o)=>{
                let k = {
                    alarms: {
                        clear: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        clearAll: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        get: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        getAll: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    },
                    bookmarks: {
                        create: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        get: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getChildren: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getRecent: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getSubTree: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getTree: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        move: {
                            minArgs: 2,
                            maxArgs: 2
                        },
                        remove: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeTree: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        search: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        update: {
                            minArgs: 2,
                            maxArgs: 2
                        }
                    },
                    browserAction: {
                        disable: {
                            minArgs: 0,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        enable: {
                            minArgs: 0,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        getBadgeBackgroundColor: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getBadgeText: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getPopup: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getTitle: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        openPopup: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        setBadgeBackgroundColor: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        setBadgeText: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        setIcon: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        setPopup: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        setTitle: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        }
                    },
                    browsingData: {
                        remove: {
                            minArgs: 2,
                            maxArgs: 2
                        },
                        removeCache: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeCookies: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeDownloads: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeFormData: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeHistory: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeLocalStorage: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removePasswords: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removePluginData: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        settings: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    },
                    commands: {
                        getAll: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    },
                    contextMenus: {
                        remove: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeAll: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        update: {
                            minArgs: 2,
                            maxArgs: 2
                        }
                    },
                    cookies: {
                        get: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getAll: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getAllCookieStores: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        remove: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        set: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    devtools: {
                        inspectedWindow: {
                            eval: {
                                minArgs: 1,
                                maxArgs: 2,
                                singleCallbackArg: !1
                            }
                        },
                        panels: {
                            create: {
                                minArgs: 3,
                                maxArgs: 3,
                                singleCallbackArg: !0
                            },
                            elements: {
                                createSidebarPane: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            }
                        }
                    },
                    downloads: {
                        cancel: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        download: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        erase: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getFileIcon: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        open: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        pause: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeFile: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        resume: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        search: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        show: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        }
                    },
                    extension: {
                        isAllowedFileSchemeAccess: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        isAllowedIncognitoAccess: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    },
                    history: {
                        addUrl: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        deleteAll: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        deleteRange: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        deleteUrl: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getVisits: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        search: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    i18n: {
                        detectLanguage: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getAcceptLanguages: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    },
                    identity: {
                        launchWebAuthFlow: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    idle: {
                        queryState: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    management: {
                        get: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getAll: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        getSelf: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        setEnabled: {
                            minArgs: 2,
                            maxArgs: 2
                        },
                        uninstallSelf: {
                            minArgs: 0,
                            maxArgs: 1
                        }
                    },
                    notifications: {
                        clear: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        create: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        getAll: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        getPermissionLevel: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        update: {
                            minArgs: 2,
                            maxArgs: 2
                        }
                    },
                    pageAction: {
                        getPopup: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getTitle: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        hide: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        setIcon: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        setPopup: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        setTitle: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        show: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        }
                    },
                    permissions: {
                        contains: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getAll: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        remove: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        request: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    runtime: {
                        getBackgroundPage: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        getPlatformInfo: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        openOptionsPage: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        requestUpdateCheck: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        sendMessage: {
                            minArgs: 1,
                            maxArgs: 3
                        },
                        sendNativeMessage: {
                            minArgs: 2,
                            maxArgs: 2
                        },
                        setUninstallURL: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    sessions: {
                        getDevices: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        getRecentlyClosed: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        restore: {
                            minArgs: 0,
                            maxArgs: 1
                        }
                    },
                    storage: {
                        local: {
                            clear: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            get: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getBytesInUse: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            set: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        managed: {
                            get: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getBytesInUse: {
                                minArgs: 0,
                                maxArgs: 1
                            }
                        },
                        sync: {
                            clear: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            get: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getBytesInUse: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            set: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        }
                    },
                    tabs: {
                        captureVisibleTab: {
                            minArgs: 0,
                            maxArgs: 2
                        },
                        create: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        detectLanguage: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        discard: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        duplicate: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        executeScript: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        get: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getCurrent: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        getZoom: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        getZoomSettings: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        goBack: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        goForward: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        highlight: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        insertCSS: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        move: {
                            minArgs: 2,
                            maxArgs: 2
                        },
                        query: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        reload: {
                            minArgs: 0,
                            maxArgs: 2
                        },
                        remove: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeCSS: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        sendMessage: {
                            minArgs: 2,
                            maxArgs: 3
                        },
                        setZoom: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        setZoomSettings: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        update: {
                            minArgs: 1,
                            maxArgs: 2
                        }
                    },
                    topSites: {
                        get: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    },
                    webNavigation: {
                        getAllFrames: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getFrame: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    webRequest: {
                        handlerBehaviorChanged: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    },
                    windows: {
                        create: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        get: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        getAll: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        getCurrent: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        getLastFocused: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        remove: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        update: {
                            minArgs: 2,
                            maxArgs: 2
                        }
                    }
                };
                if (Object.keys(k).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");
                class S extends WeakMap {
                    constructor(r, n = void 0){
                        super(n);
                        this.createItem = r;
                    }
                    get(r) {
                        return this.has(r) || this.set(r, this.createItem(r)), super.get(r);
                    }
                }
                let L = (e)=>e && typeof e == "object" && typeof e.then == "function"
                , M = (e, r)=>(...n)=>{
                        o.runtime.lastError ? e.reject(new Error(o.runtime.lastError.message)) : r.singleCallbackArg || n.length <= 1 && r.singleCallbackArg !== !1 ? e.resolve(n[0]) : e.resolve(n);
                    }
                , h = (e)=>e == 1 ? "argument" : "arguments"
                , B = (e, r)=>function(g, ...i) {
                        if (i.length < r.minArgs) throw new Error(`Expected at least ${r.minArgs} ${h(r.minArgs)} for ${e}(), got ${i.length}`);
                        if (i.length > r.maxArgs) throw new Error(`Expected at most ${r.maxArgs} ${h(r.maxArgs)} for ${e}(), got ${i.length}`);
                        return new Promise((A, l)=>{
                            if (r.fallbackToNoCallback) try {
                                g[e](...i, M({
                                    resolve: A,
                                    reject: l
                                }, r));
                            } catch (s) {
                                console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, s), g[e](...i), r.fallbackToNoCallback = !1, r.noCallback = !0, A();
                            }
                            else r.noCallback ? (g[e](...i), A()) : g[e](...i, M({
                                resolve: A,
                                reject: l
                            }, r));
                        });
                    }
                , R = (e, r, n)=>new Proxy(r, {
                        apply (g, i, A) {
                            return n.call(i, e, ...A);
                        }
                    })
                , p = Function.call.bind(Object.prototype.hasOwnProperty), w = (e, r = {}, n = {})=>{
                    let g = Object.create(null), i = {
                        has (l, s) {
                            return s in e || s in g;
                        },
                        get (l, s, c) {
                            if (s in g) return g[s];
                            if (!(s in e)) return;
                            let a = e[s];
                            if (typeof a == "function") if (typeof r[s] == "function") a = R(e, e[s], r[s]);
                            else if (p(n, s)) {
                                let d = B(s, n[s]);
                                a = R(e, e[s], d);
                            } else a = a.bind(e);
                            else if (typeof a == "object" && a !== null && (p(r, s) || p(n, s))) a = w(a, r[s], n[s]);
                            else if (p(n, "*")) a = w(a, r[s], n["*"]);
                            else return Object.defineProperty(g, s, {
                                configurable: !0,
                                enumerable: !0,
                                get () {
                                    return e[s];
                                },
                                set (d) {
                                    e[s] = d;
                                }
                            }), a;
                            return g[s] = a, a;
                        },
                        set (l, s, c, a) {
                            return s in g ? g[s] = c : e[s] = c, !0;
                        },
                        defineProperty (l, s, c) {
                            return Reflect.defineProperty(g, s, c);
                        },
                        deleteProperty (l, s) {
                            return Reflect.deleteProperty(g, s);
                        }
                    }, A = Object.create(e);
                    return new Proxy(A, i);
                }, y = (e)=>({
                        addListener (r, n, ...g) {
                            r.addListener(e.get(n), ...g);
                        },
                        hasListener (r, n) {
                            return r.hasListener(e.get(n));
                        },
                        removeListener (r, n) {
                            r.removeListener(e.get(n));
                        }
                    })
                , W = new S((e)=>typeof e != "function" ? e : function(n) {
                        let g = w(n, {}, {
                            getContent: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        });
                        e(g);
                    }
                ), N = !1, $ = new S((e)=>typeof e != "function" ? e : function(n, g, i) {
                        let A = !1, l, s = new Promise((f)=>{
                            l = function(x) {
                                N || (console.warn(u, new Error().stack), N = !0), A = !0, f(x);
                            };
                        }), c;
                        try {
                            c = e(n, g, l);
                        } catch (f1) {
                            c = Promise.reject(f1);
                        }
                        let a = c !== !0 && L(c);
                        if (c !== !0 && !a && !A) return !1;
                        let d = (f)=>{
                            f.then((x)=>{
                                i(x);
                            }, (x)=>{
                                let E;
                                x && (x instanceof Error || typeof x.message == "string") ? E = x.message : E = "An unexpected error occurred", i({
                                    __mozWebExtensionPolyfillReject__: !0,
                                    message: E
                                });
                            }).catch((x)=>{
                                console.error("Failed to send onMessage rejected reply", x);
                            });
                        };
                        return d(a ? c : s), !0;
                    }
                ), D = ({ reject: e , resolve: r  }, n)=>{
                    o.runtime.lastError ? o.runtime.lastError.message === t ? r() : e(new Error(o.runtime.lastError.message)) : n && n.__mozWebExtensionPolyfillReject__ ? e(new Error(n.message)) : r(n);
                }, O = (e, r, n, ...g)=>{
                    if (g.length < r.minArgs) throw new Error(`Expected at least ${r.minArgs} ${h(r.minArgs)} for ${e}(), got ${g.length}`);
                    if (g.length > r.maxArgs) throw new Error(`Expected at most ${r.maxArgs} ${h(r.maxArgs)} for ${e}(), got ${g.length}`);
                    return new Promise((i, A)=>{
                        let l = D.bind(null, {
                            resolve: i,
                            reject: A
                        });
                        g.push(l), n.sendMessage(...g);
                    });
                }, I = {
                    devtools: {
                        network: {
                            onRequestFinished: y(W)
                        }
                    },
                    runtime: {
                        onMessage: y($),
                        onMessageExternal: y($),
                        sendMessage: O.bind(null, "sendMessage", {
                            minArgs: 1,
                            maxArgs: 3
                        })
                    },
                    tabs: {
                        sendMessage: O.bind(null, "sendMessage", {
                            minArgs: 2,
                            maxArgs: 3
                        })
                    }
                }, C = {
                    clear: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    get: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    set: {
                        minArgs: 1,
                        maxArgs: 1
                    }
                };
                return k.privacy = {
                    network: {
                        "*": C
                    },
                    services: {
                        "*": C
                    },
                    websites: {
                        "*": C
                    }
                }, w(o, I, k);
            };
            if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) throw new Error("This script should only be loaded in a browser extension.");
            m.exports = b(chrome);
        } else m.exports = browser;
    });
});
var j = _(P()), J = _(P()), { default: Q , ...X } = J, ee = (j.default ?? Q) ?? X;
const storage = ee.storage;
if (storage) {
    storage.local.get({
        url: "(none)"
    }).then((prev_url)=>{
        const url = globalThis.location.href;
        console.log({
            prev_url,
            url
        });
        storage.local.set({
            url
        });
    });
} else {
    console.log({
        storage
    });
}
