module.exports = {

"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_require__("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    searchParams.forEach((value, key)=>{
        if (typeof query[key] === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(query[key])) {
            ;
            query[key].push(value);
        } else {
            query[key] = [
                query[key],
                value
            ];
        }
    });
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(urlQuery) {
    const result = new URLSearchParams();
    Object.entries(urlQuery).forEach((param)=>{
        let [key, value] = param;
        if (Array.isArray(value)) {
            value.forEach((item)=>result.append(key, stringifyUrlQueryParam(item)));
        } else {
            result.set(key, stringifyUrlQueryParam(value));
        }
    });
    return result;
}
function assign(target) {
    for(var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        searchParamsList[_key - 1] = arguments[_key];
    }
    searchParamsList.forEach((searchParams)=>{
        Array.from(searchParams.keys()).forEach((key)=>target.delete(key));
        searchParams.forEach((value, key)=>target.append(key, value));
    });
    return target;
} //# sourceMappingURL=querystring.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-ssr] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? "[" + hostname + "]" : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && "?" + query || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return "" + protocol + host + pathname + search + hash;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn("Unknown key passed via urlObject into url.format: " + key);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}}),
"[project]/node_modules/next/dist/client/request-idle-callback.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    cancelIdleCallback: null,
    requestIdleCallback: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    cancelIdleCallback: function() {
        return cancelIdleCallback;
    },
    requestIdleCallback: function() {
        return requestIdleCallback;
    }
});
const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return self.setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-idle-callback.js.map
}}),
"[project]/node_modules/next/dist/client/use-intersection.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useIntersection", {
    enumerable: true,
    get: function() {
        return useIntersection;
    }
});
const _react = __turbopack_require__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
const _requestidlecallback = __turbopack_require__("[project]/node_modules/next/dist/client/request-idle-callback.js [app-ssr] (ecmascript)");
const hasIntersectionObserver = typeof IntersectionObserver === 'function';
const observers = new Map();
const idList = [];
function createObserver(options) {
    const id = {
        root: options.root || null,
        margin: options.rootMargin || ''
    };
    const existing = idList.find((obj)=>obj.root === id.root && obj.margin === id.margin);
    let instance;
    if (existing) {
        instance = observers.get(existing);
        if (instance) {
            return instance;
        }
    }
    const elements = new Map();
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            const callback = elements.get(entry.target);
            const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
            if (callback && isVisible) {
                callback(isVisible);
            }
        });
    }, options);
    instance = {
        id,
        observer,
        elements
    };
    idList.push(id);
    observers.set(id, instance);
    return instance;
}
function observe(element, callback, options) {
    const { id, observer, elements } = createObserver(options);
    elements.set(element, callback);
    observer.observe(element);
    return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        // Destroy observer when there's nothing left to watch:
        if (elements.size === 0) {
            observer.disconnect();
            observers.delete(id);
            const index = idList.findIndex((obj)=>obj.root === id.root && obj.margin === id.margin);
            if (index > -1) {
                idList.splice(index, 1);
            }
        }
    };
}
function useIntersection(param) {
    let { rootRef, rootMargin, disabled } = param;
    const isDisabled = disabled || !hasIntersectionObserver;
    const [visible, setVisible] = (0, _react.useState)(false);
    const elementRef = (0, _react.useRef)(null);
    const setElement = (0, _react.useCallback)((element)=>{
        elementRef.current = element;
    }, []);
    (0, _react.useEffect)(()=>{
        if (hasIntersectionObserver) {
            if (isDisabled || visible) return;
            const element = elementRef.current;
            if (element && element.tagName) {
                const unobserve = observe(element, (isVisible)=>isVisible && setVisible(isVisible), {
                    root: rootRef == null ? void 0 : rootRef.current,
                    rootMargin
                });
                return unobserve;
            }
        } else {
            if (!visible) {
                const idleCallback = (0, _requestidlecallback.requestIdleCallback)(()=>setVisible(true));
                return ()=>(0, _requestidlecallback.cancelIdleCallback)(idleCallback);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isDisabled,
        rootMargin,
        rootRef,
        visible,
        elementRef.current
    ]);
    const resetVisible = (0, _react.useCallback)(()=>{
        setVisible(false);
    }, []);
    return [
        setElement,
        visible,
        resetVisible
    ];
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-intersection.js.map
}}),
"[project]/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ACTION_HMR_REFRESH: null,
    ACTION_NAVIGATE: null,
    ACTION_PREFETCH: null,
    ACTION_REFRESH: null,
    ACTION_RESTORE: null,
    ACTION_SERVER_ACTION: null,
    ACTION_SERVER_PATCH: null,
    PrefetchCacheEntryStatus: null,
    PrefetchKind: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION_HMR_REFRESH: function() {
        return ACTION_HMR_REFRESH;
    },
    ACTION_NAVIGATE: function() {
        return ACTION_NAVIGATE;
    },
    ACTION_PREFETCH: function() {
        return ACTION_PREFETCH;
    },
    ACTION_REFRESH: function() {
        return ACTION_REFRESH;
    },
    ACTION_RESTORE: function() {
        return ACTION_RESTORE;
    },
    ACTION_SERVER_ACTION: function() {
        return ACTION_SERVER_ACTION;
    },
    ACTION_SERVER_PATCH: function() {
        return ACTION_SERVER_PATCH;
    },
    PrefetchCacheEntryStatus: function() {
        return PrefetchCacheEntryStatus;
    },
    PrefetchKind: function() {
        return PrefetchKind;
    }
});
const ACTION_REFRESH = 'refresh';
const ACTION_NAVIGATE = 'navigate';
const ACTION_RESTORE = 'restore';
const ACTION_SERVER_PATCH = 'server-patch';
const ACTION_PREFETCH = 'prefetch';
const ACTION_HMR_REFRESH = 'hmr-refresh';
const ACTION_SERVER_ACTION = 'server-action';
var PrefetchKind = /*#__PURE__*/ function(PrefetchKind) {
    PrefetchKind["AUTO"] = "auto";
    PrefetchKind["FULL"] = "full";
    PrefetchKind["TEMPORARY"] = "temporary";
    return PrefetchKind;
}({});
var PrefetchCacheEntryStatus = /*#__PURE__*/ function(PrefetchCacheEntryStatus) {
    PrefetchCacheEntryStatus["fresh"] = "fresh";
    PrefetchCacheEntryStatus["reusable"] = "reusable";
    PrefetchCacheEntryStatus["expired"] = "expired";
    PrefetchCacheEntryStatus["stale"] = "stale";
    return PrefetchCacheEntryStatus;
}({});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer-types.js.map
}}),
"[project]/node_modules/next/dist/client/use-merged-ref.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_require__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(()=>{});
    const cleanupB = (0, _react.useRef)(()=>{});
    return (0, _react.useMemo)(()=>{
        if (!refA || !refB) {
            return refA || refB;
        }
        return (current)=>{
            if (current === null) {
                cleanupA.current();
                cleanupB.current();
            } else {
                cleanupA.current = applyRef(refA, current);
                cleanupB.current = applyRef(refB, current);
            }
        };
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/utils.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return protocol + "//" + hostname + (port ? ':' + port : '');
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? "?" + urlParts.slice(1).join('?') : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        var _App_prototype;
        if ((_App_prototype = App.prototype) == null ? void 0 : _App_prototype.getInitialProps) {
            const message = '"' + getDisplayName(App) + '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.';
            throw new Error(message);
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
        throw new Error(message);
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn("" + getDisplayName(App) + " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps");
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = "Cannot find module for page: " + page;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = "Failed to load static file for page: " + page + " " + message;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = "Cannot find the middleware module";
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/parse-path.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parsePath", {
    enumerable: true,
    get: function() {
        return parsePath;
    }
});
function parsePath(path) {
    const hashIndex = path.indexOf('#');
    const queryIndex = path.indexOf('?');
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : '',
            hash: hashIndex > -1 ? path.slice(hashIndex) : ''
        };
    }
    return {
        pathname: path,
        query: '',
        hash: ''
    };
} //# sourceMappingURL=parse-path.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addPathPrefix", {
    enumerable: true,
    get: function() {
        return addPathPrefix;
    }
});
const _parsepath = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/parse-path.js [app-ssr] (ecmascript)");
function addPathPrefix(path, prefix) {
    if (!path.startsWith('/') || !prefix) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    return "" + prefix + pathname + query + hash;
} //# sourceMappingURL=add-path-prefix.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "removeTrailingSlash", {
    enumerable: true,
    get: function() {
        return removeTrailingSlash;
    }
});
function removeTrailingSlash(route) {
    return route.replace(/\/$/, '') || '/';
} //# sourceMappingURL=remove-trailing-slash.js.map
}}),
"[project]/node_modules/next/dist/client/normalize-trailing-slash.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "normalizePathTrailingSlash", {
    enumerable: true,
    get: function() {
        return normalizePathTrailingSlash;
    }
});
const _removetrailingslash = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js [app-ssr] (ecmascript)");
const _parsepath = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/parse-path.js [app-ssr] (ecmascript)");
const normalizePathTrailingSlash = (path)=>{
    if (!path.startsWith('/') || process.env.__NEXT_MANUAL_TRAILING_SLASH) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=normalize-trailing-slash.js.map
}}),
"[project]/node_modules/next/dist/client/add-base-path.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addBasePath", {
    enumerable: true,
    get: function() {
        return addBasePath;
    }
});
const _addpathprefix = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js [app-ssr] (ecmascript)");
const _normalizetrailingslash = __turbopack_require__("[project]/node_modules/next/dist/client/normalize-trailing-slash.js [app-ssr] (ecmascript)");
const basePath = ("TURBOPACK compile-time value", "") || '';
function addBasePath(path, required) {
    return (0, _normalizetrailingslash.normalizePathTrailingSlash)(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : (0, _addpathprefix.addPathPrefix)(path, basePath));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-base-path.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/utils/warn-once.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "warnOnce", {
    enumerable: true,
    get: function() {
        return warnOnce;
    }
});
let warnOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const warnings = new Set();
    warnOnce = (msg)=>{
        if (!warnings.has(msg)) {
            console.warn(msg);
        }
        warnings.add(msg);
    };
} //# sourceMappingURL=warn-once.js.map
}}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
const _formaturl = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-ssr] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_require__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/app-router-context.js [app-ssr] (ecmascript)");
const _useintersection = __turbopack_require__("[project]/node_modules/next/dist/client/use-intersection.js [app-ssr] (ecmascript)");
const _routerreducertypes = __turbopack_require__("[project]/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-ssr] (ecmascript)");
const _usemergedref = __turbopack_require__("[project]/node_modules/next/dist/client/use-merged-ref.js [app-ssr] (ecmascript)");
const _utils = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/utils.js [app-ssr] (ecmascript)");
const _addbasepath = __turbopack_require__("[project]/node_modules/next/dist/client/add-base-path.js [app-ssr] (ecmascript)");
const _warnonce = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/utils/warn-once.js [app-ssr] (ecmascript)");
function prefetch(router, href, options) {
    if (typeof window === 'undefined') {
        return;
    }
    const doPrefetch = async ()=>{
        // note that `appRouter.prefetch()` is currently sync,
        // so we have to wrap this call in an async function to be able to catch() errors below.
        return router.prefetch(href, options);
    };
    // Prefetch the page if asked (only in the client)
    // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch
    doPrefetch().catch((err)=>{
        if (("TURBOPACK compile-time value", "development") !== 'production') {
            // rethrow to show invalid URL errors
            throw err;
        }
    });
}
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll) {
    const { nodeName } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === 'A';
    if (isAnchorNodeName && isModifiedEvent(e)) {
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    const navigate = ()=>{
        // If the router is an NextRouter instance it will have `beforePopState`
        const routerScroll = scroll != null ? scroll : true;
        if ('beforePopState' in router) {
            router[replace ? 'replace' : 'push'](href, as, {
                shallow,
                scroll: routerScroll
            });
        } else {
            router[replace ? 'replace' : 'push'](as || href, {
                scroll: routerScroll
            });
        }
    };
    _react.default.startTransition(navigate);
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
/**
 * A React component that extends the HTML `<a>` element to provide [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation between routes.
 *
 * It is the primary way to navigate between routes in Next.js.
 *
 * Read more: [Next.js docs: `<Link>`](https://nextjs.org/docs/app/api-reference/components/link)
 */ const Link = /*#__PURE__*/ _react.default.forwardRef(function LinkComponent(props, forwardedRef) {
    let children;
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    /**
     * The possible states for prefetch are:
     * - null: this is the default "auto" mode, where we will prefetch partially if the link is in the viewport
     * - true: we will prefetch if the link is visible and prefetch the full page, not just partially
     * - false: we will not prefetch if in the viewport at all
     */ const appPrefetchKind = prefetchProp === null ? _routerreducertypes.PrefetchKind.AUTO : _routerreducertypes.PrefetchKind.FULL;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return new Error("Failed prop type: The prop `" + args.key + "` expects a " + args.expected + " in `<Link>`, but got `" + args.actual + "` instead." + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : ''));
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch' || key === 'legacyBehavior') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw new Error("Dynamic href `" + href + "` found in <Link> while using the `/app` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href");
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo(()=>{
        const resolvedHref = formatStringOrUrl(hrefProp);
        return {
            href: resolvedHref,
            as: asProp ? formatStringOrUrl(asProp) : resolvedHref
        };
    }, [
        hrefProp,
        asProp
    ]);
    const previousHref = _react.default.useRef(href);
    const previousAs = _react.default.useRef(as);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn('"onClick" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link');
            }
            if (onMouseEnterProp) {
                console.warn('"onMouseEnter" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link');
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw new Error("No children were passed to <Link> with `href` of `" + hrefProp + "` but one child is required https://nextjs.org/docs/messages/link-no-children");
                }
                throw new Error("Multiple children were passed to <Link> with `href` of `" + hrefProp + "` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children" + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : ''));
            }
        } else {
            "TURBOPACK unreachable";
        }
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ((children == null ? void 0 : children.type) === 'a') {
                throw new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor');
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    const [setIntersectionRef, isVisible, resetVisible] = (0, _useintersection.useIntersection)({
        rootMargin: '200px'
    });
    const setIntersectionWithResetRef = _react.default.useCallback((el)=>{
        // Before the link getting observed, check if visible state need to be reset
        if (previousAs.current !== as || previousHref.current !== href) {
            resetVisible();
            previousAs.current = as;
            previousHref.current = href;
        }
        setIntersectionRef(el);
    }, [
        as,
        href,
        resetVisible,
        setIntersectionRef
    ]);
    const setRef = (0, _usemergedref.useMergedRef)(setIntersectionWithResetRef, childRef);
    // Prefetch the URL if we haven't already and it's visible.
    _react.default.useEffect(()=>{
        // in dev, we only prefetch on hover to avoid wasting resources as the prefetch will trigger compiling the page.
        if ("TURBOPACK compile-time truthy", 1) {
            return;
        }
        "TURBOPACK unreachable";
    }, [
        as,
        href,
        isVisible,
        prefetchEnabled,
        router,
        appPrefetchKind
    ]);
    const childProps = {
        ref: setRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw new Error('Component rendered inside next/link has to pass click event to "onClick" prop.');
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, router, href, as, replace, shallow, scroll);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            "TURBOPACK unreachable";
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            prefetch(router, href, {
                kind: appPrefetchKind
            });
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user.
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    return legacyBehavior ? /*#__PURE__*/ _react.default.cloneElement(child, childProps) : /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
        ...restProps,
        ...childProps,
        children: children
    });
});
const _default = Link;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}}),
"[project]/node_modules/lenis/dist/lenis.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Lenis)
});
function clamp(t, i, e) {
    return Math.max(t, Math.min(i, e));
}
class Animate {
    constructor(){
        this.isRunning = !1, this.value = 0, this.from = 0, this.to = 0, this.duration = 0, this.currentTime = 0;
    }
    advance(t) {
        var i;
        if (!this.isRunning) return;
        let e = !1;
        if (this.duration && this.easing) {
            this.currentTime += t;
            const i = clamp(0, this.currentTime / this.duration, 1);
            e = i >= 1;
            const s = e ? 1 : this.easing(i);
            this.value = this.from + (this.to - this.from) * s;
        } else this.lerp ? (this.value = function damp(t, i, e, s) {
            return function lerp(t, i, e) {
                return (1 - e) * t + e * i;
            }(t, i, 1 - Math.exp(-e * s));
        }(this.value, this.to, 60 * this.lerp, t), Math.round(this.value) === this.to && (this.value = this.to, e = !0)) : (this.value = this.to, e = !0);
        e && this.stop(), null === (i = this.onUpdate) || void 0 === i || i.call(this, this.value, e);
    }
    stop() {
        this.isRunning = !1;
    }
    fromTo(t, i, { lerp: e, duration: s, easing: o, onStart: n, onUpdate: l }) {
        this.from = this.value = t, this.to = i, this.lerp = e, this.duration = s, this.easing = o, this.currentTime = 0, this.isRunning = !0, null == n || n(), this.onUpdate = l;
    }
}
class Dimensions {
    constructor({ wrapper: t, content: i, autoResize: e = !0, debounce: s = 250 } = {}){
        this.width = 0, this.height = 0, this.scrollWidth = 0, this.scrollHeight = 0, this.resize = ()=>{
            this.onWrapperResize(), this.onContentResize();
        }, this.onWrapperResize = ()=>{
            this.wrapper === window ? (this.width = window.innerWidth, this.height = window.innerHeight) : this.wrapper instanceof HTMLElement && (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight);
        }, this.onContentResize = ()=>{
            this.wrapper === window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : this.wrapper instanceof HTMLElement && (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth);
        }, this.wrapper = t, this.content = i, e && (this.debouncedResize = function debounce(t, i) {
            let e;
            return function() {
                let s = arguments, o = this;
                clearTimeout(e), e = setTimeout(function() {
                    t.apply(o, s);
                }, i);
            };
        }(this.resize, s), this.wrapper === window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize();
    }
    destroy() {
        var t, i;
        null === (t = this.wrapperResizeObserver) || void 0 === t || t.disconnect(), null === (i = this.contentResizeObserver) || void 0 === i || i.disconnect(), window.removeEventListener("resize", this.debouncedResize, !1);
    }
    get limit() {
        return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height
        };
    }
}
class Emitter {
    constructor(){
        this.events = {};
    }
    emit(t, ...i) {
        let e = this.events[t] || [];
        for(let t = 0, s = e.length; t < s; t++)e[t](...i);
    }
    on(t, i) {
        var e;
        return (null === (e = this.events[t]) || void 0 === e ? void 0 : e.push(i)) || (this.events[t] = [
            i
        ]), ()=>{
            var e;
            this.events[t] = null === (e = this.events[t]) || void 0 === e ? void 0 : e.filter((t)=>i !== t);
        };
    }
    off(t, i) {
        var e;
        this.events[t] = null === (e = this.events[t]) || void 0 === e ? void 0 : e.filter((t)=>i !== t);
    }
    destroy() {
        this.events = {};
    }
}
const t = 100 / 6;
class VirtualScroll {
    constructor(i, { wheelMultiplier: e = 1, touchMultiplier: s = 1 }){
        this.lastDelta = {
            x: 0,
            y: 0
        }, this.windowWidth = 0, this.windowHeight = 0, this.onTouchStart = (t)=>{
            const { clientX: i, clientY: e } = t.targetTouches ? t.targetTouches[0] : t;
            this.touchStart.x = i, this.touchStart.y = e, this.lastDelta = {
                x: 0,
                y: 0
            }, this.emitter.emit("scroll", {
                deltaX: 0,
                deltaY: 0,
                event: t
            });
        }, this.onTouchMove = (t)=>{
            var i, e, s, o;
            const { clientX: n, clientY: l } = t.targetTouches ? t.targetTouches[0] : t, r = -(n - (null !== (e = null === (i = this.touchStart) || void 0 === i ? void 0 : i.x) && void 0 !== e ? e : 0)) * this.touchMultiplier, h = -(l - (null !== (o = null === (s = this.touchStart) || void 0 === s ? void 0 : s.y) && void 0 !== o ? o : 0)) * this.touchMultiplier;
            this.touchStart.x = n, this.touchStart.y = l, this.lastDelta = {
                x: r,
                y: h
            }, this.emitter.emit("scroll", {
                deltaX: r,
                deltaY: h,
                event: t
            });
        }, this.onTouchEnd = (t)=>{
            this.emitter.emit("scroll", {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: t
            });
        }, this.onWheel = (i)=>{
            let { deltaX: e, deltaY: s, deltaMode: o } = i;
            e *= 1 === o ? t : 2 === o ? this.windowWidth : 1, s *= 1 === o ? t : 2 === o ? this.windowHeight : 1, e *= this.wheelMultiplier, s *= this.wheelMultiplier, this.emitter.emit("scroll", {
                deltaX: e,
                deltaY: s,
                event: i
            });
        }, this.onWindowResize = ()=>{
            this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight;
        }, this.element = i, this.wheelMultiplier = e, this.touchMultiplier = s, this.touchStart = {
            x: null,
            y: null
        }, this.emitter = new Emitter, window.addEventListener("resize", this.onWindowResize, !1), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, {
            passive: !1
        }), this.element.addEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }), this.element.addEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }), this.element.addEventListener("touchend", this.onTouchEnd, {
            passive: !1
        });
    }
    on(t, i) {
        return this.emitter.on(t, i);
    }
    destroy() {
        this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, !1), this.element.removeEventListener("wheel", this.onWheel), this.element.removeEventListener("touchstart", this.onTouchStart), this.element.removeEventListener("touchmove", this.onTouchMove), this.element.removeEventListener("touchend", this.onTouchEnd);
    }
}
class Lenis {
    constructor({ wrapper: t = window, content: i = document.documentElement, wheelEventsTarget: e = t, eventsTarget: s = e, smoothWheel: o = !0, syncTouch: n = !1, syncTouchLerp: l = .075, touchInertiaMultiplier: r = 35, duration: h, easing: a = (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t)), lerp: c = .1, infinite: d = !1, orientation: u = "vertical", gestureOrientation: p = "vertical", touchMultiplier: m = 1, wheelMultiplier: v = 1, autoResize: g = !0, prevent: w, virtualScroll: S, __experimental__naiveDimensions: f = !1 } = {}){
        this.__isScrolling = !1, this.__isStopped = !1, this.__isLocked = !1, this.userData = {}, this.lastVelocity = 0, this.velocity = 0, this.direction = 0, this.onPointerDown = (t)=>{
            1 === t.button && this.reset();
        }, this.onVirtualScroll = (t)=>{
            if ("function" == typeof this.options.virtualScroll && !1 === this.options.virtualScroll(t)) return;
            const { deltaX: i, deltaY: e, event: s } = t;
            if (this.emitter.emit("virtual-scroll", {
                deltaX: i,
                deltaY: e,
                event: s
            }), s.ctrlKey) return;
            const o = s.type.includes("touch"), n = s.type.includes("wheel");
            this.isTouching = "touchstart" === s.type || "touchmove" === s.type;
            if (this.options.syncTouch && o && "touchstart" === s.type && !this.isStopped && !this.isLocked) return void this.reset();
            const l = 0 === i && 0 === e, r = "vertical" === this.options.gestureOrientation && 0 === e || "horizontal" === this.options.gestureOrientation && 0 === i;
            if (l || r) return;
            let h = s.composedPath();
            h = h.slice(0, h.indexOf(this.rootElement));
            const a = this.options.prevent;
            if (h.find((t)=>{
                var i, e, s, l, r;
                return t instanceof Element && ("function" == typeof a && (null == a ? void 0 : a(t)) || (null === (i = t.hasAttribute) || void 0 === i ? void 0 : i.call(t, "data-lenis-prevent")) || o && (null === (e = t.hasAttribute) || void 0 === e ? void 0 : e.call(t, "data-lenis-prevent-touch")) || n && (null === (s = t.hasAttribute) || void 0 === s ? void 0 : s.call(t, "data-lenis-prevent-wheel")) || (null === (l = t.classList) || void 0 === l ? void 0 : l.contains("lenis")) && !(null === (r = t.classList) || void 0 === r ? void 0 : r.contains("lenis-stopped")));
            })) return;
            if (this.isStopped || this.isLocked) return void s.preventDefault();
            if (!(this.options.syncTouch && o || this.options.smoothWheel && n)) return this.isScrolling = "native", void this.animate.stop();
            s.preventDefault();
            let c = e;
            "both" === this.options.gestureOrientation ? c = Math.abs(e) > Math.abs(i) ? e : i : "horizontal" === this.options.gestureOrientation && (c = i);
            const d = o && this.options.syncTouch, u = o && "touchend" === s.type && Math.abs(c) > 5;
            u && (c = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + c, Object.assign({
                programmatic: !1
            }, d ? {
                lerp: u ? this.options.syncTouchLerp : 1
            } : {
                lerp: this.options.lerp,
                duration: this.options.duration,
                easing: this.options.easing
            }));
        }, this.onNativeScroll = ()=>{
            if (clearTimeout(this.__resetVelocityTimeout), delete this.__resetVelocityTimeout, this.__preventNextNativeScrollEvent) delete this.__preventNextNativeScrollEvent;
            else if (!1 === this.isScrolling || "native" === this.isScrolling) {
                const t = this.animatedScroll;
                this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - t, this.direction = Math.sign(this.animatedScroll - t), this.isScrolling = "native", this.emit(), 0 !== this.velocity && (this.__resetVelocityTimeout = setTimeout(()=>{
                    this.lastVelocity = this.velocity, this.velocity = 0, this.isScrolling = !1, this.emit();
                }, 400));
            }
        }, window.lenisVersion = "1.1.9", t && t !== document.documentElement && t !== document.body || (t = window), this.options = {
            wrapper: t,
            content: i,
            wheelEventsTarget: e,
            eventsTarget: s,
            smoothWheel: o,
            syncTouch: n,
            syncTouchLerp: l,
            touchInertiaMultiplier: r,
            duration: h,
            easing: a,
            lerp: c,
            infinite: d,
            gestureOrientation: p,
            orientation: u,
            touchMultiplier: m,
            wheelMultiplier: v,
            autoResize: g,
            prevent: w,
            virtualScroll: S,
            __experimental__naiveDimensions: f
        }, this.animate = new Animate, this.emitter = new Emitter, this.dimensions = new Dimensions({
            wrapper: t,
            content: i,
            autoResize: g
        }), this.updateClassName(), this.userData = {}, this.time = 0, this.velocity = this.lastVelocity = 0, this.isLocked = !1, this.isStopped = !1, this.isScrolling = !1, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1), this.options.wrapper.addEventListener("pointerdown", this.onPointerDown, !1), this.virtualScroll = new VirtualScroll(s, {
            touchMultiplier: m,
            wheelMultiplier: v
        }), this.virtualScroll.on("scroll", this.onVirtualScroll);
    }
    destroy() {
        this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1), this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown, !1), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName();
    }
    on(t, i) {
        return this.emitter.on(t, i);
    }
    off(t, i) {
        return this.emitter.off(t, i);
    }
    setScroll(t) {
        this.isHorizontal ? this.rootElement.scrollLeft = t : this.rootElement.scrollTop = t;
    }
    resize() {
        this.dimensions.resize();
    }
    emit() {
        this.emitter.emit("scroll", this);
    }
    reset() {
        this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity = 0, this.animate.stop();
    }
    start() {
        this.isStopped && (this.isStopped = !1, this.reset());
    }
    stop() {
        this.isStopped || (this.isStopped = !0, this.animate.stop(), this.reset());
    }
    raf(t) {
        const i = t - (this.time || t);
        this.time = t, this.animate.advance(.001 * i);
    }
    scrollTo(t, { offset: i = 0, immediate: e = !1, lock: s = !1, duration: o = this.options.duration, easing: n = this.options.easing, lerp: l = this.options.lerp, onStart: r, onComplete: h, force: a = !1, programmatic: c = !0, userData: d = {} } = {}) {
        if (!this.isStopped && !this.isLocked || a) {
            if ("string" == typeof t && [
                "top",
                "left",
                "start"
            ].includes(t)) t = 0;
            else if ("string" == typeof t && [
                "bottom",
                "right",
                "end"
            ].includes(t)) t = this.limit;
            else {
                let e;
                if ("string" == typeof t ? e = document.querySelector(t) : t instanceof HTMLElement && (null == t ? void 0 : t.nodeType) && (e = t), e) {
                    if (this.options.wrapper !== window) {
                        const t = this.rootElement.getBoundingClientRect();
                        i -= this.isHorizontal ? t.left : t.top;
                    }
                    const s = e.getBoundingClientRect();
                    t = (this.isHorizontal ? s.left : s.top) + this.animatedScroll;
                }
            }
            if ("number" == typeof t && (t += i, t = Math.round(t), this.options.infinite ? c && (this.targetScroll = this.animatedScroll = this.scroll) : t = clamp(0, t, this.limit), t !== this.targetScroll)) {
                if (this.userData = d, e) return this.animatedScroll = this.targetScroll = t, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), null == h || h(this), void (this.userData = {});
                c || (this.targetScroll = t), this.animate.fromTo(this.animatedScroll, t, {
                    duration: o,
                    easing: n,
                    lerp: l,
                    onStart: ()=>{
                        s && (this.isLocked = !0), this.isScrolling = "smooth", null == r || r(this);
                    },
                    onUpdate: (t, i)=>{
                        this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = t - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = t, this.setScroll(this.scroll), c && (this.targetScroll = t), i || this.emit(), i && (this.reset(), this.emit(), null == h || h(this), this.userData = {}, this.preventNextNativeScrollEvent());
                    }
                });
            }
        }
    }
    preventNextNativeScrollEvent() {
        this.__preventNextNativeScrollEvent = !0, requestAnimationFrame(()=>{
            delete this.__preventNextNativeScrollEvent;
        });
    }
    get rootElement() {
        return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
    }
    get limit() {
        return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
    }
    get isHorizontal() {
        return "horizontal" === this.options.orientation;
    }
    get actualScroll() {
        return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
    }
    get scroll() {
        return this.options.infinite ? function modulo(t, i) {
            return (t % i + i) % i;
        }(this.animatedScroll, this.limit) : this.animatedScroll;
    }
    get progress() {
        return 0 === this.limit ? 1 : this.scroll / this.limit;
    }
    get isScrolling() {
        return this.__isScrolling;
    }
    set isScrolling(t) {
        this.__isScrolling !== t && (this.__isScrolling = t, this.updateClassName());
    }
    get isStopped() {
        return this.__isStopped;
    }
    set isStopped(t) {
        this.__isStopped !== t && (this.__isStopped = t, this.updateClassName());
    }
    get isLocked() {
        return this.__isLocked;
    }
    set isLocked(t) {
        this.__isLocked !== t && (this.__isLocked = t, this.updateClassName());
    }
    get isSmooth() {
        return "smooth" === this.isScrolling;
    }
    get className() {
        let t = "lenis";
        return this.isStopped && (t += " lenis-stopped"), this.isLocked && (t += " lenis-locked"), this.isScrolling && (t += " lenis-scrolling"), "smooth" === this.isScrolling && (t += " lenis-smooth"), t;
    }
    updateClassName() {
        this.cleanUpClassName(), this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim();
    }
    cleanUpClassName() {
        this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim();
    }
}
;
 //# sourceMappingURL=lenis.mjs.map
}}),
"[project]/node_modules/locomotive-scroll/dist/locomotive-scroll.modern.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>c)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lenis/dist/lenis.mjs [app-ssr] (ecmascript)");
;
function s() {
    return s = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), s.apply(null, arguments);
}
class e {
    constructor({ scrollElements: t, rootMargin: s = "-1px -1px -1px -1px", IORaf: e }){
        this.scrollElements = void 0, this.rootMargin = void 0, this.IORaf = void 0, this.observer = void 0, this.scrollElements = t, this.rootMargin = s, this.IORaf = e, this._init();
    }
    _init() {
        this.observer = new IntersectionObserver((t)=>{
            t.forEach((t)=>{
                const s = this.scrollElements.find((s)=>s.$el === t.target);
                t.isIntersecting ? (s && (s.isAlreadyIntersected = !0), this._setInview(t)) : s && s.isAlreadyIntersected && this._setOutOfView(t);
            });
        }, {
            rootMargin: this.rootMargin
        });
        for (const t of this.scrollElements)this.observe(t.$el);
    }
    destroy() {
        this.observer.disconnect();
    }
    observe(t) {
        t && this.observer.observe(t);
    }
    unobserve(t) {
        t && this.observer.unobserve(t);
    }
    _setInview(t) {
        const s = this.scrollElements.find((s)=>s.$el === t.target);
        this.IORaf && (null == s || s.setInteractivityOn()), !this.IORaf && (null == s || s.setInview());
    }
    _setOutOfView(t) {
        const s = this.scrollElements.find((s)=>s.$el === t.target);
        this.IORaf && (null == s || s.setInteractivityOff()), !this.IORaf && (null == s || s.setOutOfView()), null != s && s.attributes.scrollRepeat || this.IORaf || this.unobserve(t.target);
    }
}
function i(t, s, e, i, r) {
    return e + ((r - t) / (s - t) * (i - e) || 0);
}
function r(t, s) {
    return t.reduce((t, e)=>Math.abs(e - s) < Math.abs(t - s) ? e : t);
}
class l {
    constructor({ $el: t, id: s, modularInstance: e, subscribeElementUpdateFn: i, unsubscribeElementUpdateFn: r, needRaf: l, scrollOrientation: n }){
        var o, a, c, h, d;
        this.$el = void 0, this.id = void 0, this.needRaf = void 0, this.attributes = void 0, this.scrollOrientation = void 0, this.isAlreadyIntersected = void 0, this.intersection = void 0, this.metrics = void 0, this.currentScroll = void 0, this.translateValue = void 0, this.progress = void 0, this.lastProgress = void 0, this.modularInstance = void 0, this.progressModularModules = void 0, this.isInview = void 0, this.isInteractive = void 0, this.isInFold = void 0, this.isFirstResize = void 0, this.subscribeElementUpdateFn = void 0, this.unsubscribeElementUpdateFn = void 0, this.$el = t, this.id = s, this.needRaf = l, this.scrollOrientation = n, this.modularInstance = e, this.subscribeElementUpdateFn = i, this.unsubscribeElementUpdateFn = r, this.attributes = {
            scrollClass: null != (o = this.$el.dataset.scrollClass) ? o : "is-inview",
            scrollOffset: null != (a = this.$el.dataset.scrollOffset) ? a : "0,0",
            scrollPosition: null != (c = this.$el.dataset.scrollPosition) ? c : "start,end",
            scrollModuleProgress: null != this.$el.dataset.scrollModuleProgress,
            scrollCssProgress: null != this.$el.dataset.scrollCssProgress,
            scrollEventProgress: null != (h = this.$el.dataset.scrollEventProgress) ? h : null,
            scrollSpeed: null != this.$el.dataset.scrollSpeed ? parseFloat(this.$el.dataset.scrollSpeed) : null,
            scrollRepeat: null != this.$el.dataset.scrollRepeat,
            scrollCall: null != (d = this.$el.dataset.scrollCall) ? d : null,
            scrollCallSelf: null != this.$el.dataset.scrollCallSelf,
            scrollIgnoreFold: null != this.$el.dataset.scrollIgnoreFold,
            scrollEnableTouchSpeed: null != this.$el.dataset.scrollEnableTouchSpeed
        }, this.intersection = {
            start: 0,
            end: 0
        }, this.metrics = {
            offsetStart: 0,
            offsetEnd: 0,
            bcr: {}
        }, this.currentScroll = "vertical" === this.scrollOrientation ? window.scrollY : window.scrollX, this.translateValue = 0, this.progress = 0, this.lastProgress = null, this.progressModularModules = [], this.isInview = !1, this.isInteractive = !1, this.isAlreadyIntersected = !1, this.isInFold = !1, this.isFirstResize = !0, this._init();
    }
    _init() {
        this.needRaf && (this.modularInstance && this.attributes.scrollModuleProgress && this._getProgressModularModules(), this._resize());
    }
    onResize({ currentScroll: t }) {
        this.currentScroll = t, this._resize();
    }
    onRender({ currentScroll: t, smooth: s }) {
        const e = "vertical" === this.scrollOrientation ? window.innerHeight : window.innerWidth;
        if (this.currentScroll = t, this._computeProgress(), this.attributes.scrollSpeed && !isNaN(this.attributes.scrollSpeed)) if (this.attributes.scrollEnableTouchSpeed || s) {
            if (this.isInFold) {
                const t = Math.max(0, this.progress);
                this.translateValue = t * e * this.attributes.scrollSpeed * -1;
            } else {
                const t = i(0, 1, -1, 1, this.progress);
                this.translateValue = t * e * this.attributes.scrollSpeed * -1;
            }
            this.$el.style.transform = "vertical" === this.scrollOrientation ? `translate3d(0, ${this.translateValue}px, 0)` : `translate3d(${this.translateValue}px, 0, 0)`;
        } else this.translateValue && (this.$el.style.transform = "translate3d(0, 0, 0)"), this.translateValue = 0;
    }
    setInview() {
        if (this.isInview) return;
        this.isInview = !0, this.$el.classList.add(this.attributes.scrollClass);
        const t = this._getScrollCallFrom();
        this.attributes.scrollCall && this._dispatchCall("enter", t);
    }
    setOutOfView() {
        if (!this.isInview || !this.attributes.scrollRepeat) return;
        this.isInview = !1, this.$el.classList.remove(this.attributes.scrollClass);
        const t = this._getScrollCallFrom();
        this.attributes.scrollCall && this._dispatchCall("leave", t);
    }
    setInteractivityOn() {
        this.isInteractive || (this.isInteractive = !0, this.subscribeElementUpdateFn(this));
    }
    setInteractivityOff() {
        this.isInteractive && (this.isInteractive = !1, this.unsubscribeElementUpdateFn(this), null != this.lastProgress && this._computeProgress(r([
            0,
            1
        ], this.lastProgress)));
    }
    _resize() {
        this.metrics.bcr = this.$el.getBoundingClientRect(), this._computeMetrics(), this._computeIntersection(), this.isFirstResize && (this.isFirstResize = !1, this.isInFold && this.setInview());
    }
    _computeMetrics() {
        const { top: t, left: s, height: e, width: i } = this.metrics.bcr, r = "vertical" === this.scrollOrientation ? window.innerHeight : window.innerWidth, l = "vertical" === this.scrollOrientation ? e : i;
        this.metrics.offsetStart = this.currentScroll + ("vertical" === this.scrollOrientation ? t : s) - this.translateValue, this.metrics.offsetEnd = this.metrics.offsetStart + l, this.isInFold = this.metrics.offsetStart < r && !this.attributes.scrollIgnoreFold;
    }
    _computeIntersection() {
        const t = "vertical" === this.scrollOrientation ? window.innerHeight : window.innerWidth, s = "vertical" === this.scrollOrientation ? this.metrics.bcr.height : this.metrics.bcr.width, e = this.attributes.scrollOffset.split(","), i = null != e[0] ? e[0].trim() : "0", r = null != e[1] ? e[1].trim() : "0", l = this.attributes.scrollPosition.split(",");
        let n = null != l[0] ? l[0].trim() : "start";
        const o = null != l[1] ? l[1].trim() : "end", a = i.includes("%") ? t * parseInt(i.replace("%", "").trim()) * .01 : parseInt(i), c = r.includes("%") ? t * parseInt(r.replace("%", "").trim()) * .01 : parseInt(r);
        switch(this.isInFold && (n = "fold"), n){
            case "start":
            default:
                this.intersection.start = this.metrics.offsetStart - t + a;
                break;
            case "middle":
                this.intersection.start = this.metrics.offsetStart - t + a + .5 * s;
                break;
            case "end":
                this.intersection.start = this.metrics.offsetStart - t + a + s;
                break;
            case "fold":
                this.intersection.start = 0;
        }
        switch(o){
            case "start":
                this.intersection.end = this.metrics.offsetStart - c;
                break;
            case "middle":
                this.intersection.end = this.metrics.offsetStart - c + .5 * s;
                break;
            default:
                this.intersection.end = this.metrics.offsetStart - c + s;
        }
        if (this.intersection.end <= this.intersection.start) switch(o){
            case "start":
            default:
                this.intersection.end = this.intersection.start + 1;
                break;
            case "middle":
                this.intersection.end = this.intersection.start + .5 * s;
                break;
            case "end":
                this.intersection.end = this.intersection.start + s;
        }
    }
    _computeProgress(t) {
        const s = null != t ? t : (e = i(this.intersection.start, this.intersection.end, 0, 1, this.currentScroll)) < 0 ? 0 : e > 1 ? 1 : e;
        var e;
        if (this.progress = s, s != this.lastProgress) {
            if (this.lastProgress = s, this.attributes.scrollCssProgress && this._setCssProgress(s), this.attributes.scrollEventProgress && this._setCustomEventProgress(s), this.attributes.scrollModuleProgress) for (const t of this.progressModularModules)this.modularInstance && this.modularInstance.call("onScrollProgress", s, t.moduleName, t.moduleId);
            s > 0 && s < 1 && this.setInview(), 0 === s && this.setOutOfView(), 1 === s && this.setOutOfView();
        }
    }
    _setCssProgress(t = 0) {
        this.$el.style.setProperty("--progress", t.toString());
    }
    _setCustomEventProgress(t = 0) {
        const s = this.attributes.scrollEventProgress;
        if (!s) return;
        const e = new CustomEvent(s, {
            detail: {
                target: this.$el,
                progress: t
            }
        });
        window.dispatchEvent(e);
    }
    _getProgressModularModules() {
        if (!this.modularInstance) return;
        const t = Object.keys(this.$el.dataset).filter((t)=>t.includes("module")), s = Object.entries(this.modularInstance.modules);
        if (t.length) for (const e of t){
            const t = this.$el.dataset[e];
            if (!t) return;
            for (const e of s){
                const [s, i] = e;
                t in i && this.progressModularModules.push({
                    moduleName: s,
                    moduleId: t
                });
            }
        }
    }
    _getScrollCallFrom() {
        const t = r([
            this.intersection.start,
            this.intersection.end
        ], this.currentScroll);
        return this.intersection.start === t ? "start" : "end";
    }
    _dispatchCall(t, s) {
        var e, i;
        const r = null == (e = this.attributes.scrollCall) ? void 0 : e.split(","), l = null == (i = this.attributes) ? void 0 : i.scrollCallSelf;
        if (r && r.length > 1) {
            var n;
            const [e, i, o] = r;
            let a;
            a = l ? this.$el.dataset[`module${i.trim()}`] : o, this.modularInstance && this.modularInstance.call(e.trim(), {
                target: this.$el,
                way: t,
                from: s
            }, i.trim(), null == (n = a) ? void 0 : n.trim());
        } else if (r) {
            const [e] = r, i = new CustomEvent(e, {
                detail: {
                    target: this.$el,
                    way: t,
                    from: s
                }
            });
            window.dispatchEvent(i);
        }
    }
}
const n = [
    "scrollOffset",
    "scrollPosition",
    "scrollModuleProgress",
    "scrollCssProgress",
    "scrollEventProgress",
    "scrollSpeed"
];
class o {
    constructor({ $el: t, modularInstance: s, triggerRootMargin: e, rafRootMargin: i, scrollOrientation: r }){
        this.$scrollContainer = void 0, this.modularInstance = void 0, this.triggerRootMargin = void 0, this.rafRootMargin = void 0, this.scrollElements = void 0, this.triggeredScrollElements = void 0, this.RAFScrollElements = void 0, this.scrollElementsToUpdate = void 0, this.IOTriggerInstance = void 0, this.IORafInstance = void 0, this.scrollOrientation = void 0, t ? (this.$scrollContainer = t, this.modularInstance = s, this.scrollOrientation = r, this.triggerRootMargin = null != e ? e : "-1px -1px -1px -1px", this.rafRootMargin = null != i ? i : "100% 100% 100% 100%", this.scrollElements = [], this.triggeredScrollElements = [], this.RAFScrollElements = [], this.scrollElementsToUpdate = [], this._init()) : console.error("Please provide a DOM Element as scrollContainer");
    }
    _init() {
        const t = this.$scrollContainer.querySelectorAll("[data-scroll]"), s = Array.from(t);
        this._subscribeScrollElements(s), this.IOTriggerInstance = new e({
            scrollElements: [
                ...this.triggeredScrollElements
            ],
            rootMargin: this.triggerRootMargin,
            IORaf: !1
        }), this.IORafInstance = new e({
            scrollElements: [
                ...this.RAFScrollElements
            ],
            rootMargin: this.rafRootMargin,
            IORaf: !0
        });
    }
    destroy() {
        this.IOTriggerInstance.destroy(), this.IORafInstance.destroy(), this._unsubscribeAllScrollElements();
    }
    onResize({ currentScroll: t }) {
        for (const s of this.RAFScrollElements)s.onResize({
            currentScroll: t
        });
    }
    onRender({ currentScroll: t, smooth: s }) {
        for (const e of this.scrollElementsToUpdate)e.onRender({
            currentScroll: t,
            smooth: s
        });
    }
    removeScrollElements(t) {
        const s = t.querySelectorAll("[data-scroll]");
        if (s.length) {
            for(let t = 0; t < this.triggeredScrollElements.length; t++){
                const e = this.triggeredScrollElements[t];
                Array.from(s).indexOf(e.$el) > -1 && (this.IOTriggerInstance.unobserve(e.$el), this.triggeredScrollElements.splice(t, 1));
            }
            for(let t = 0; t < this.RAFScrollElements.length; t++){
                const e = this.RAFScrollElements[t];
                Array.from(s).indexOf(e.$el) > -1 && (this.IORafInstance.unobserve(e.$el), this.RAFScrollElements.splice(t, 1));
            }
            s.forEach((t)=>{
                const s = this.scrollElementsToUpdate.find((s)=>s.$el === t), e = this.scrollElements.find((s)=>s.$el === t);
                s && this._unsubscribeElementUpdate(s), e && (this.scrollElements = this.scrollElements.filter((t)=>t.id != e.id));
            });
        }
    }
    addScrollElements(t) {
        const s = t.querySelectorAll("[data-scroll]"), e = [];
        this.scrollElements.forEach((t)=>{
            e.push(t.id);
        });
        const i = Math.max(...e, 0) + 1, r = Array.from(s);
        this._subscribeScrollElements(r, i, !0);
    }
    _subscribeScrollElements(t, s = 0, e = !1) {
        for(let i = 0; i < t.length; i++){
            const r = t[i], n = this._checkRafNeeded(r), o = new l({
                $el: r,
                id: s + i,
                scrollOrientation: this.scrollOrientation,
                modularInstance: this.modularInstance,
                subscribeElementUpdateFn: this._subscribeElementUpdate.bind(this),
                unsubscribeElementUpdateFn: this._unsubscribeElementUpdate.bind(this),
                needRaf: n
            });
            this.scrollElements.push(o), n ? (this.RAFScrollElements.push(o), e && (this.IORafInstance.scrollElements.push(o), this.IORafInstance.observe(o.$el))) : (this.triggeredScrollElements.push(o), e && (this.IOTriggerInstance.scrollElements.push(o), this.IOTriggerInstance.observe(o.$el)));
        }
    }
    _unsubscribeAllScrollElements() {
        this.scrollElements = [], this.RAFScrollElements = [], this.triggeredScrollElements = [], this.scrollElementsToUpdate = [];
    }
    _subscribeElementUpdate(t) {
        this.scrollElementsToUpdate.push(t);
    }
    _unsubscribeElementUpdate(t) {
        this.scrollElementsToUpdate = this.scrollElementsToUpdate.filter((s)=>s.id != t.id);
    }
    _checkRafNeeded(t) {
        let s = [
            ...n
        ];
        const e = (t)=>{
            s = s.filter((s)=>s != t);
        };
        if (t.dataset.scrollOffset) {
            if ("0,0" != t.dataset.scrollOffset.split(",").map((t)=>t.replace("%", "").trim()).join(",")) return !0;
            e("scrollOffset");
        } else e("scrollOffset");
        if (t.dataset.scrollPosition) {
            if ("top,bottom" != t.dataset.scrollPosition.trim()) return !0;
            e("scrollPosition");
        } else e("scrollPosition");
        if (t.dataset.scrollSpeed && !isNaN(parseFloat(t.dataset.scrollSpeed))) return !0;
        e("scrollSpeed");
        for (const e of s)if (e in t.dataset) return !0;
        return !1;
    }
}
class a {
    constructor({ resizeElements: t, resizeCallback: s = ()=>{} }){
        this.$resizeElements = void 0, this.isFirstObserve = void 0, this.observer = void 0, this.resizeCallback = void 0, this.$resizeElements = t, this.resizeCallback = s, this.isFirstObserve = !0, this._init();
    }
    _init() {
        this.observer = new ResizeObserver((t)=>{
            var s;
            !this.isFirstObserve && (null == (s = this.resizeCallback) || s.call(this)), this.isFirstObserve = !1;
        });
        for (const t of this.$resizeElements)this.observer.observe(t);
    }
    destroy() {
        this.observer.disconnect();
    }
}
class c {
    constructor({ lenisOptions: t = {}, modularInstance: s, triggerRootMargin: e, rafRootMargin: i, autoResize: r = !0, autoStart: l = !0, scrollCallback: n = ()=>{}, initCustomTicker: o, destroyCustomTicker: a } = {}){
        this.rafPlaying = void 0, this.lenisInstance = void 0, this.coreInstance = void 0, this.lenisOptions = void 0, this.modularInstance = void 0, this.triggerRootMargin = void 0, this.rafRootMargin = void 0, this.rafInstance = void 0, this.autoResize = void 0, this.autoStart = void 0, this.ROInstance = void 0, this.initCustomTicker = void 0, this.destroyCustomTicker = void 0, this._onRenderBind = void 0, this._onResizeBind = void 0, this._onScrollToBind = void 0;
        for (const [s] of Object.entries(t))[
            "wrapper",
            "content",
            "infinite"
        ].includes(s) && console.warn(`Warning: Key "${s}" is not possible to edit in Locomotive Scroll.`);
        Object.assign(this, {
            lenisOptions: t,
            modularInstance: s,
            triggerRootMargin: e,
            rafRootMargin: i,
            autoResize: r,
            autoStart: l,
            scrollCallback: n,
            initCustomTicker: o,
            destroyCustomTicker: a
        }), this._onRenderBind = this._onRender.bind(this), this._onScrollToBind = this._onScrollTo.bind(this), this._onResizeBind = this._onResize.bind(this), this.rafPlaying = !1, this._init();
    }
    _init() {
        var e;
        this.lenisInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](s({}, this.lenisOptions, {
            wrapper: window,
            content: document.documentElement,
            infinite: !1
        })), null == (e = this.lenisInstance) || e.on("scroll", this.scrollCallback), document.documentElement.setAttribute("data-scroll-orientation", this.lenisInstance.options.orientation), requestAnimationFrame(()=>{
            this.coreInstance = new o({
                $el: this.lenisInstance.rootElement,
                modularInstance: this.modularInstance,
                triggerRootMargin: this.triggerRootMargin,
                rafRootMargin: this.rafRootMargin,
                scrollOrientation: this.lenisInstance.options.orientation
            }), this._bindEvents(), this.initCustomTicker && !this.destroyCustomTicker ? console.warn("initCustomTicker callback is declared, but destroyCustomTicker is not. Please pay attention. It could cause trouble.") : !this.initCustomTicker && this.destroyCustomTicker && console.warn("destroyCustomTicker callback is declared, but initCustomTicker is not. Please pay attention. It could cause trouble."), this.autoStart && this.start();
        });
    }
    destroy() {
        var t;
        this.stop(), this._unbindEvents(), this.lenisInstance.destroy(), null == (t = this.coreInstance) || t.destroy(), requestAnimationFrame(()=>{
            var t;
            null == (t = this.coreInstance) || t.destroy();
        });
    }
    _bindEvents() {
        this._bindScrollToEvents(), this.autoResize && ("ResizeObserver" in window ? this.ROInstance = new a({
            resizeElements: [
                document.body
            ],
            resizeCallback: this._onResizeBind
        }) : window.addEventListener("resize", this._onResizeBind));
    }
    _unbindEvents() {
        this._unbindScrollToEvents(), this.autoResize && ("ResizeObserver" in window ? this.ROInstance && this.ROInstance.destroy() : window.removeEventListener("resize", this._onResizeBind));
    }
    _bindScrollToEvents(t) {
        const s = t || this.lenisInstance.rootElement, e = null == s ? void 0 : s.querySelectorAll("[data-scroll-to]");
        (null == e ? void 0 : e.length) && e.forEach((t)=>{
            t.addEventListener("click", this._onScrollToBind, !1);
        });
    }
    _unbindScrollToEvents(t) {
        const s = t || this.lenisInstance.rootElement, e = null == s ? void 0 : s.querySelectorAll("[data-scroll-to]");
        (null == e ? void 0 : e.length) && e.forEach((t)=>{
            t.removeEventListener("click", this._onScrollToBind, !1);
        });
    }
    _onResize() {
        requestAnimationFrame(()=>{
            var t;
            null == (t = this.coreInstance) || t.onResize({
                currentScroll: this.lenisInstance.scroll
            });
        });
    }
    _onRender() {
        var t, s;
        null == (t = this.lenisInstance) || t.raf(Date.now()), null == (s = this.coreInstance) || s.onRender({
            currentScroll: this.lenisInstance.scroll,
            smooth: this.lenisInstance.options.smoothWheel
        });
    }
    _onScrollTo(t) {
        var s;
        t.preventDefault();
        const e = null != (s = t.currentTarget) ? s : null;
        if (!e) return;
        const i = e.getAttribute("data-scroll-to-href") || e.getAttribute("href"), r = e.getAttribute("data-scroll-to-offset") || 0, l = e.getAttribute("data-scroll-to-duration") || this.lenisInstance.options.duration;
        i && this.scrollTo(i, {
            offset: "string" == typeof r ? parseInt(r) : r,
            duration: "string" == typeof l ? parseInt(l) : l
        });
    }
    start() {
        var t;
        this.rafPlaying || (null == (t = this.lenisInstance) || t.start(), this.rafPlaying = !0, this.initCustomTicker ? this.initCustomTicker(this._onRenderBind) : this._raf());
    }
    stop() {
        var t;
        this.rafPlaying && (null == (t = this.lenisInstance) || t.stop(), this.rafPlaying = !1, this.destroyCustomTicker ? this.destroyCustomTicker(this._onRenderBind) : this.rafInstance && cancelAnimationFrame(this.rafInstance));
    }
    removeScrollElements(t) {
        var s;
        t ? (this._unbindScrollToEvents(t), null == (s = this.coreInstance) || s.removeScrollElements(t)) : console.error("Please provide a DOM Element as $oldContainer");
    }
    addScrollElements(t) {
        var s;
        t ? (null == (s = this.coreInstance) || s.addScrollElements(t), requestAnimationFrame(()=>{
            this._bindScrollToEvents(t);
        })) : console.error("Please provide a DOM Element as $newContainer");
    }
    resize() {
        this._onResizeBind();
    }
    scrollTo(t, s) {
        var e;
        null == (e = this.lenisInstance) || e.scrollTo(t, {
            offset: null == s ? void 0 : s.offset,
            lerp: null == s ? void 0 : s.lerp,
            duration: null == s ? void 0 : s.duration,
            immediate: null == s ? void 0 : s.immediate,
            lock: null == s ? void 0 : s.lock,
            force: null == s ? void 0 : s.force,
            easing: null == s ? void 0 : s.easing,
            onComplete: null == s ? void 0 : s.onComplete
        });
    }
    _raf() {
        this._onRenderBind(), this.rafInstance = requestAnimationFrame(()=>this._raf());
    }
}
;
 //# sourceMappingURL=locomotive-scroll.modern.mjs.map
}}),
"[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}}),

};

//# sourceMappingURL=08b5e_f15d3c._.js.map