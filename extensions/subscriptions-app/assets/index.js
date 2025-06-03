function Eb(l, r) {
  for (var u = 0; u < r.length; u++) {
    const o = r[u];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const s in o)
        if (s !== "default" && !(s in l)) {
          const f = Object.getOwnPropertyDescriptor(o, s);
          f && Object.defineProperty(l, s, f.get ? f : {
            enumerable: !0,
            get: () => o[s]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }));
}
function vv(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var ws = { exports: {} }, Fr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cp;
function wb() {
  if (Cp) return Fr;
  Cp = 1;
  var l = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function u(o, s, f) {
    var d = null;
    if (f !== void 0 && (d = "" + f), s.key !== void 0 && (d = "" + s.key), "key" in s) {
      f = {};
      for (var m in s)
        m !== "key" && (f[m] = s[m]);
    } else f = s;
    return s = f.ref, {
      $$typeof: l,
      type: o,
      key: d,
      ref: s !== void 0 ? s : null,
      props: f
    };
  }
  return Fr.Fragment = r, Fr.jsx = u, Fr.jsxs = u, Fr;
}
var Rp;
function Ab() {
  return Rp || (Rp = 1, ws.exports = wb()), ws.exports;
}
var E = Ab(), As = { exports: {} }, be = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mp;
function Cb() {
  if (Mp) return be;
  Mp = 1;
  var l = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), d = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), y = Symbol.iterator;
  function S(x) {
    return x === null || typeof x != "object" ? null : (x = y && x[y] || x["@@iterator"], typeof x == "function" ? x : null);
  }
  var w = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, R = Object.assign, A = {};
  function O(x, G, J) {
    this.props = x, this.context = G, this.refs = A, this.updater = J || w;
  }
  O.prototype.isReactComponent = {}, O.prototype.setState = function(x, G) {
    if (typeof x != "object" && typeof x != "function" && x != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, x, G, "setState");
  }, O.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate");
  };
  function T() {
  }
  T.prototype = O.prototype;
  function j(x, G, J) {
    this.props = x, this.context = G, this.refs = A, this.updater = J || w;
  }
  var z = j.prototype = new T();
  z.constructor = j, R(z, O.prototype), z.isPureReactComponent = !0;
  var q = Array.isArray, Y = { H: null, A: null, T: null, S: null, V: null }, Z = Object.prototype.hasOwnProperty;
  function X(x, G, J, $, ee, ge) {
    return J = ge.ref, {
      $$typeof: l,
      type: x,
      key: G,
      ref: J !== void 0 ? J : null,
      props: ge
    };
  }
  function V(x, G) {
    return X(
      x.type,
      G,
      void 0,
      void 0,
      void 0,
      x.props
    );
  }
  function te(x) {
    return typeof x == "object" && x !== null && x.$$typeof === l;
  }
  function I(x) {
    var G = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(J) {
      return G[J];
    });
  }
  var ne = /\/+/g;
  function ae(x, G) {
    return typeof x == "object" && x !== null && x.key != null ? I("" + x.key) : G.toString(36);
  }
  function se() {
  }
  function de(x) {
    switch (x.status) {
      case "fulfilled":
        return x.value;
      case "rejected":
        throw x.reason;
      default:
        switch (typeof x.status == "string" ? x.then(se, se) : (x.status = "pending", x.then(
          function(G) {
            x.status === "pending" && (x.status = "fulfilled", x.value = G);
          },
          function(G) {
            x.status === "pending" && (x.status = "rejected", x.reason = G);
          }
        )), x.status) {
          case "fulfilled":
            return x.value;
          case "rejected":
            throw x.reason;
        }
    }
    throw x;
  }
  function ce(x, G, J, $, ee) {
    var ge = typeof x;
    (ge === "undefined" || ge === "boolean") && (x = null);
    var ue = !1;
    if (x === null) ue = !0;
    else
      switch (ge) {
        case "bigint":
        case "string":
        case "number":
          ue = !0;
          break;
        case "object":
          switch (x.$$typeof) {
            case l:
            case r:
              ue = !0;
              break;
            case g:
              return ue = x._init, ce(
                ue(x._payload),
                G,
                J,
                $,
                ee
              );
          }
      }
    if (ue)
      return ee = ee(x), ue = $ === "" ? "." + ae(x, 0) : $, q(ee) ? (J = "", ue != null && (J = ue.replace(ne, "$&/") + "/"), ce(ee, G, J, "", function(Ce) {
        return Ce;
      })) : ee != null && (te(ee) && (ee = V(
        ee,
        J + (ee.key == null || x && x.key === ee.key ? "" : ("" + ee.key).replace(
          ne,
          "$&/"
        ) + "/") + ue
      )), G.push(ee)), 1;
    ue = 0;
    var me = $ === "" ? "." : $ + ":";
    if (q(x))
      for (var ve = 0; ve < x.length; ve++)
        $ = x[ve], ge = me + ae($, ve), ue += ce(
          $,
          G,
          J,
          ge,
          ee
        );
    else if (ve = S(x), typeof ve == "function")
      for (x = ve.call(x), ve = 0; !($ = x.next()).done; )
        $ = $.value, ge = me + ae($, ve++), ue += ce(
          $,
          G,
          J,
          ge,
          ee
        );
    else if (ge === "object") {
      if (typeof x.then == "function")
        return ce(
          de(x),
          G,
          J,
          $,
          ee
        );
      throw G = String(x), Error(
        "Objects are not valid as a React child (found: " + (G === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : G) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ue;
  }
  function D(x, G, J) {
    if (x == null) return x;
    var $ = [], ee = 0;
    return ce(x, $, "", "", function(ge) {
      return G.call(J, ge, ee++);
    }), $;
  }
  function P(x) {
    if (x._status === -1) {
      var G = x._result;
      G = G(), G.then(
        function(J) {
          (x._status === 0 || x._status === -1) && (x._status = 1, x._result = J);
        },
        function(J) {
          (x._status === 0 || x._status === -1) && (x._status = 2, x._result = J);
        }
      ), x._status === -1 && (x._status = 0, x._result = G);
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var k = typeof reportError == "function" ? reportError : function(x) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var G = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof x == "object" && x !== null && typeof x.message == "string" ? String(x.message) : String(x),
        error: x
      });
      if (!window.dispatchEvent(G)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", x);
      return;
    }
    console.error(x);
  };
  function W() {
  }
  return be.Children = {
    map: D,
    forEach: function(x, G, J) {
      D(
        x,
        function() {
          G.apply(this, arguments);
        },
        J
      );
    },
    count: function(x) {
      var G = 0;
      return D(x, function() {
        G++;
      }), G;
    },
    toArray: function(x) {
      return D(x, function(G) {
        return G;
      }) || [];
    },
    only: function(x) {
      if (!te(x))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return x;
    }
  }, be.Component = O, be.Fragment = u, be.Profiler = s, be.PureComponent = j, be.StrictMode = o, be.Suspense = p, be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y, be.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(x) {
      return Y.H.useMemoCache(x);
    }
  }, be.cache = function(x) {
    return function() {
      return x.apply(null, arguments);
    };
  }, be.cloneElement = function(x, G, J) {
    if (x == null)
      throw Error(
        "The argument must be a React element, but you passed " + x + "."
      );
    var $ = R({}, x.props), ee = x.key, ge = void 0;
    if (G != null)
      for (ue in G.ref !== void 0 && (ge = void 0), G.key !== void 0 && (ee = "" + G.key), G)
        !Z.call(G, ue) || ue === "key" || ue === "__self" || ue === "__source" || ue === "ref" && G.ref === void 0 || ($[ue] = G[ue]);
    var ue = arguments.length - 2;
    if (ue === 1) $.children = J;
    else if (1 < ue) {
      for (var me = Array(ue), ve = 0; ve < ue; ve++)
        me[ve] = arguments[ve + 2];
      $.children = me;
    }
    return X(x.type, ee, void 0, void 0, ge, $);
  }, be.createContext = function(x) {
    return x = {
      $$typeof: d,
      _currentValue: x,
      _currentValue2: x,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, x.Provider = x, x.Consumer = {
      $$typeof: f,
      _context: x
    }, x;
  }, be.createElement = function(x, G, J) {
    var $, ee = {}, ge = null;
    if (G != null)
      for ($ in G.key !== void 0 && (ge = "" + G.key), G)
        Z.call(G, $) && $ !== "key" && $ !== "__self" && $ !== "__source" && (ee[$] = G[$]);
    var ue = arguments.length - 2;
    if (ue === 1) ee.children = J;
    else if (1 < ue) {
      for (var me = Array(ue), ve = 0; ve < ue; ve++)
        me[ve] = arguments[ve + 2];
      ee.children = me;
    }
    if (x && x.defaultProps)
      for ($ in ue = x.defaultProps, ue)
        ee[$] === void 0 && (ee[$] = ue[$]);
    return X(x, ge, void 0, void 0, null, ee);
  }, be.createRef = function() {
    return { current: null };
  }, be.forwardRef = function(x) {
    return { $$typeof: m, render: x };
  }, be.isValidElement = te, be.lazy = function(x) {
    return {
      $$typeof: g,
      _payload: { _status: -1, _result: x },
      _init: P
    };
  }, be.memo = function(x, G) {
    return {
      $$typeof: h,
      type: x,
      compare: G === void 0 ? null : G
    };
  }, be.startTransition = function(x) {
    var G = Y.T, J = {};
    Y.T = J;
    try {
      var $ = x(), ee = Y.S;
      ee !== null && ee(J, $), typeof $ == "object" && $ !== null && typeof $.then == "function" && $.then(W, k);
    } catch (ge) {
      k(ge);
    } finally {
      Y.T = G;
    }
  }, be.unstable_useCacheRefresh = function() {
    return Y.H.useCacheRefresh();
  }, be.use = function(x) {
    return Y.H.use(x);
  }, be.useActionState = function(x, G, J) {
    return Y.H.useActionState(x, G, J);
  }, be.useCallback = function(x, G) {
    return Y.H.useCallback(x, G);
  }, be.useContext = function(x) {
    return Y.H.useContext(x);
  }, be.useDebugValue = function() {
  }, be.useDeferredValue = function(x, G) {
    return Y.H.useDeferredValue(x, G);
  }, be.useEffect = function(x, G, J) {
    var $ = Y.H;
    if (typeof J == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return $.useEffect(x, G);
  }, be.useId = function() {
    return Y.H.useId();
  }, be.useImperativeHandle = function(x, G, J) {
    return Y.H.useImperativeHandle(x, G, J);
  }, be.useInsertionEffect = function(x, G) {
    return Y.H.useInsertionEffect(x, G);
  }, be.useLayoutEffect = function(x, G) {
    return Y.H.useLayoutEffect(x, G);
  }, be.useMemo = function(x, G) {
    return Y.H.useMemo(x, G);
  }, be.useOptimistic = function(x, G) {
    return Y.H.useOptimistic(x, G);
  }, be.useReducer = function(x, G, J) {
    return Y.H.useReducer(x, G, J);
  }, be.useRef = function(x) {
    return Y.H.useRef(x);
  }, be.useState = function(x) {
    return Y.H.useState(x);
  }, be.useSyncExternalStore = function(x, G, J) {
    return Y.H.useSyncExternalStore(
      x,
      G,
      J
    );
  }, be.useTransition = function() {
    return Y.H.useTransition();
  }, be.version = "19.1.0", be;
}
var Op;
function df() {
  return Op || (Op = 1, As.exports = Cb()), As.exports;
}
var C = df();
const De = /* @__PURE__ */ vv(C), gv = /* @__PURE__ */ Eb({
  __proto__: null,
  default: De
}, [C]);
var Cs = { exports: {} }, Jr = {}, Rs = { exports: {} }, Ms = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tp;
function Rb() {
  return Tp || (Tp = 1, function(l) {
    function r(D, P) {
      var k = D.length;
      D.push(P);
      e: for (; 0 < k; ) {
        var W = k - 1 >>> 1, x = D[W];
        if (0 < s(x, P))
          D[W] = P, D[k] = x, k = W;
        else break e;
      }
    }
    function u(D) {
      return D.length === 0 ? null : D[0];
    }
    function o(D) {
      if (D.length === 0) return null;
      var P = D[0], k = D.pop();
      if (k !== P) {
        D[0] = k;
        e: for (var W = 0, x = D.length, G = x >>> 1; W < G; ) {
          var J = 2 * (W + 1) - 1, $ = D[J], ee = J + 1, ge = D[ee];
          if (0 > s($, k))
            ee < x && 0 > s(ge, $) ? (D[W] = ge, D[ee] = k, W = ee) : (D[W] = $, D[J] = k, W = J);
          else if (ee < x && 0 > s(ge, k))
            D[W] = ge, D[ee] = k, W = ee;
          else break e;
        }
      }
      return P;
    }
    function s(D, P) {
      var k = D.sortIndex - P.sortIndex;
      return k !== 0 ? k : D.id - P.id;
    }
    if (l.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      l.unstable_now = function() {
        return f.now();
      };
    } else {
      var d = Date, m = d.now();
      l.unstable_now = function() {
        return d.now() - m;
      };
    }
    var p = [], h = [], g = 1, y = null, S = 3, w = !1, R = !1, A = !1, O = !1, T = typeof setTimeout == "function" ? setTimeout : null, j = typeof clearTimeout == "function" ? clearTimeout : null, z = typeof setImmediate < "u" ? setImmediate : null;
    function q(D) {
      for (var P = u(h); P !== null; ) {
        if (P.callback === null) o(h);
        else if (P.startTime <= D)
          o(h), P.sortIndex = P.expirationTime, r(p, P);
        else break;
        P = u(h);
      }
    }
    function Y(D) {
      if (A = !1, q(D), !R)
        if (u(p) !== null)
          R = !0, Z || (Z = !0, ae());
        else {
          var P = u(h);
          P !== null && ce(Y, P.startTime - D);
        }
    }
    var Z = !1, X = -1, V = 5, te = -1;
    function I() {
      return O ? !0 : !(l.unstable_now() - te < V);
    }
    function ne() {
      if (O = !1, Z) {
        var D = l.unstable_now();
        te = D;
        var P = !0;
        try {
          e: {
            R = !1, A && (A = !1, j(X), X = -1), w = !0;
            var k = S;
            try {
              t: {
                for (q(D), y = u(p); y !== null && !(y.expirationTime > D && I()); ) {
                  var W = y.callback;
                  if (typeof W == "function") {
                    y.callback = null, S = y.priorityLevel;
                    var x = W(
                      y.expirationTime <= D
                    );
                    if (D = l.unstable_now(), typeof x == "function") {
                      y.callback = x, q(D), P = !0;
                      break t;
                    }
                    y === u(p) && o(p), q(D);
                  } else o(p);
                  y = u(p);
                }
                if (y !== null) P = !0;
                else {
                  var G = u(h);
                  G !== null && ce(
                    Y,
                    G.startTime - D
                  ), P = !1;
                }
              }
              break e;
            } finally {
              y = null, S = k, w = !1;
            }
            P = void 0;
          }
        } finally {
          P ? ae() : Z = !1;
        }
      }
    }
    var ae;
    if (typeof z == "function")
      ae = function() {
        z(ne);
      };
    else if (typeof MessageChannel < "u") {
      var se = new MessageChannel(), de = se.port2;
      se.port1.onmessage = ne, ae = function() {
        de.postMessage(null);
      };
    } else
      ae = function() {
        T(ne, 0);
      };
    function ce(D, P) {
      X = T(function() {
        D(l.unstable_now());
      }, P);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(D) {
      D.callback = null;
    }, l.unstable_forceFrameRate = function(D) {
      0 > D || 125 < D ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : V = 0 < D ? Math.floor(1e3 / D) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return S;
    }, l.unstable_next = function(D) {
      switch (S) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = S;
      }
      var k = S;
      S = P;
      try {
        return D();
      } finally {
        S = k;
      }
    }, l.unstable_requestPaint = function() {
      O = !0;
    }, l.unstable_runWithPriority = function(D, P) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var k = S;
      S = D;
      try {
        return P();
      } finally {
        S = k;
      }
    }, l.unstable_scheduleCallback = function(D, P, k) {
      var W = l.unstable_now();
      switch (typeof k == "object" && k !== null ? (k = k.delay, k = typeof k == "number" && 0 < k ? W + k : W) : k = W, D) {
        case 1:
          var x = -1;
          break;
        case 2:
          x = 250;
          break;
        case 5:
          x = 1073741823;
          break;
        case 4:
          x = 1e4;
          break;
        default:
          x = 5e3;
      }
      return x = k + x, D = {
        id: g++,
        callback: P,
        priorityLevel: D,
        startTime: k,
        expirationTime: x,
        sortIndex: -1
      }, k > W ? (D.sortIndex = k, r(h, D), u(p) === null && D === u(h) && (A ? (j(X), X = -1) : A = !0, ce(Y, k - W))) : (D.sortIndex = x, r(p, D), R || w || (R = !0, Z || (Z = !0, ae()))), D;
    }, l.unstable_shouldYield = I, l.unstable_wrapCallback = function(D) {
      var P = S;
      return function() {
        var k = S;
        S = P;
        try {
          return D.apply(this, arguments);
        } finally {
          S = k;
        }
      };
    };
  }(Ms)), Ms;
}
var _p;
function Mb() {
  return _p || (_p = 1, Rs.exports = Rb()), Rs.exports;
}
var Os = { exports: {} }, ht = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Np;
function Ob() {
  if (Np) return ht;
  Np = 1;
  var l = df();
  function r(p) {
    var h = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        h += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return "Minified React error #" + p + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function u() {
  }
  var o = {
    d: {
      f: u,
      r: function() {
        throw Error(r(522));
      },
      D: u,
      C: u,
      L: u,
      m: u,
      X: u,
      S: u,
      M: u
    },
    p: 0,
    findDOMNode: null
  }, s = Symbol.for("react.portal");
  function f(p, h, g) {
    var y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: y == null ? null : "" + y,
      children: p,
      containerInfo: h,
      implementation: g
    };
  }
  var d = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(p, h) {
    if (p === "font") return "";
    if (typeof h == "string")
      return h === "use-credentials" ? h : "";
  }
  return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, ht.createPortal = function(p, h) {
    var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
      throw Error(r(299));
    return f(p, h, null, g);
  }, ht.flushSync = function(p) {
    var h = d.T, g = o.p;
    try {
      if (d.T = null, o.p = 2, p) return p();
    } finally {
      d.T = h, o.p = g, o.d.f();
    }
  }, ht.preconnect = function(p, h) {
    typeof p == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, o.d.C(p, h));
  }, ht.prefetchDNS = function(p) {
    typeof p == "string" && o.d.D(p);
  }, ht.preinit = function(p, h) {
    if (typeof p == "string" && h && typeof h.as == "string") {
      var g = h.as, y = m(g, h.crossOrigin), S = typeof h.integrity == "string" ? h.integrity : void 0, w = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
      g === "style" ? o.d.S(
        p,
        typeof h.precedence == "string" ? h.precedence : void 0,
        {
          crossOrigin: y,
          integrity: S,
          fetchPriority: w
        }
      ) : g === "script" && o.d.X(p, {
        crossOrigin: y,
        integrity: S,
        fetchPriority: w,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0
      });
    }
  }, ht.preinitModule = function(p, h) {
    if (typeof p == "string")
      if (typeof h == "object" && h !== null) {
        if (h.as == null || h.as === "script") {
          var g = m(
            h.as,
            h.crossOrigin
          );
          o.d.M(p, {
            crossOrigin: g,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
            nonce: typeof h.nonce == "string" ? h.nonce : void 0
          });
        }
      } else h == null && o.d.M(p);
  }, ht.preload = function(p, h) {
    if (typeof p == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
      var g = h.as, y = m(g, h.crossOrigin);
      o.d.L(p, g, {
        crossOrigin: y,
        integrity: typeof h.integrity == "string" ? h.integrity : void 0,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0,
        type: typeof h.type == "string" ? h.type : void 0,
        fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
        referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
        imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
        imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
        media: typeof h.media == "string" ? h.media : void 0
      });
    }
  }, ht.preloadModule = function(p, h) {
    if (typeof p == "string")
      if (h) {
        var g = m(h.as, h.crossOrigin);
        o.d.m(p, {
          as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
          crossOrigin: g,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0
        });
      } else o.d.m(p);
  }, ht.requestFormReset = function(p) {
    o.d.r(p);
  }, ht.unstable_batchedUpdates = function(p, h) {
    return p(h);
  }, ht.useFormState = function(p, h, g) {
    return d.H.useFormState(p, h, g);
  }, ht.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, ht.version = "19.1.0", ht;
}
var Dp;
function yv() {
  if (Dp) return Os.exports;
  Dp = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (r) {
        console.error(r);
      }
  }
  return l(), Os.exports = Ob(), Os.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jp;
function Tb() {
  if (jp) return Jr;
  jp = 1;
  var l = Mb(), r = df(), u = yv();
  function o(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function f(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function d(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (f(e) !== e)
      throw Error(o(188));
  }
  function p(e) {
    var t = e.alternate;
    if (!t) {
      if (t = f(e), t === null) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var n = e, a = t; ; ) {
      var i = n.return;
      if (i === null) break;
      var c = i.alternate;
      if (c === null) {
        if (a = i.return, a !== null) {
          n = a;
          continue;
        }
        break;
      }
      if (i.child === c.child) {
        for (c = i.child; c; ) {
          if (c === n) return m(i), e;
          if (c === a) return m(i), t;
          c = c.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== a.return) n = i, a = c;
      else {
        for (var v = !1, b = i.child; b; ) {
          if (b === n) {
            v = !0, n = i, a = c;
            break;
          }
          if (b === a) {
            v = !0, a = i, n = c;
            break;
          }
          b = b.sibling;
        }
        if (!v) {
          for (b = c.child; b; ) {
            if (b === n) {
              v = !0, n = c, a = i;
              break;
            }
            if (b === a) {
              v = !0, a = c, n = i;
              break;
            }
            b = b.sibling;
          }
          if (!v) throw Error(o(189));
        }
      }
      if (n.alternate !== a) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? e : t;
  }
  function h(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = h(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var g = Object.assign, y = Symbol.for("react.element"), S = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), j = Symbol.for("react.consumer"), z = Symbol.for("react.context"), q = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), te = Symbol.for("react.activity"), I = Symbol.for("react.memo_cache_sentinel"), ne = Symbol.iterator;
  function ae(e) {
    return e === null || typeof e != "object" ? null : (e = ne && e[ne] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var se = Symbol.for("react.client.reference");
  function de(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === se ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case R:
        return "Fragment";
      case O:
        return "Profiler";
      case A:
        return "StrictMode";
      case Y:
        return "Suspense";
      case Z:
        return "SuspenseList";
      case te:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case w:
          return "Portal";
        case z:
          return (e.displayName || "Context") + ".Provider";
        case j:
          return (e._context.displayName || "Context") + ".Consumer";
        case q:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case X:
          return t = e.displayName || null, t !== null ? t : de(e.type) || "Memo";
        case V:
          t = e._payload, e = e._init;
          try {
            return de(e(t));
          } catch {
          }
      }
    return null;
  }
  var ce = Array.isArray, D = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, W = [], x = -1;
  function G(e) {
    return { current: e };
  }
  function J(e) {
    0 > x || (e.current = W[x], W[x] = null, x--);
  }
  function $(e, t) {
    x++, W[x] = e.current, e.current = t;
  }
  var ee = G(null), ge = G(null), ue = G(null), me = G(null);
  function ve(e, t) {
    switch ($(ue, t), $(ge, e), $(ee, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Ih(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Ih(t), e = ep(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    J(ee), $(ee, e);
  }
  function Ce() {
    J(ee), J(ge), J(ue);
  }
  function ke(e) {
    e.memoizedState !== null && $(me, e);
    var t = ee.current, n = ep(t, e.type);
    t !== n && ($(ge, e), $(ee, n));
  }
  function Me(e) {
    ge.current === e && (J(ee), J(ge)), me.current === e && (J(me), Xr._currentValue = k);
  }
  var le = Object.prototype.hasOwnProperty, Re = l.unstable_scheduleCallback, He = l.unstable_cancelCallback, We = l.unstable_shouldYield, yt = l.unstable_requestPaint, Qe = l.unstable_now, Qt = l.unstable_getCurrentPriorityLevel, st = l.unstable_ImmediatePriority, Wt = l.unstable_UserBlockingPriority, It = l.unstable_NormalPriority, Fa = l.unstable_LowPriority, Yl = l.unstable_IdlePriority, xi = l.log, Si = l.unstable_setDisableYieldValue, vl = null, ft = null;
  function en(e) {
    if (typeof xi == "function" && Si(e), ft && typeof ft.setStrictMode == "function")
      try {
        ft.setStrictMode(vl, e);
      } catch {
      }
  }
  var it = Math.clz32 ? Math.clz32 : $a, kn = Math.log, Ja = Math.LN2;
  function $a(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (kn(e) / Ja | 0) | 0;
  }
  var mn = 256, ql = 4194304;
  function hn(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Vl(e, t, n) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var i = 0, c = e.suspendedLanes, v = e.pingedLanes;
    e = e.warmLanes;
    var b = a & 134217727;
    return b !== 0 ? (a = b & ~c, a !== 0 ? i = hn(a) : (v &= b, v !== 0 ? i = hn(v) : n || (n = b & ~e, n !== 0 && (i = hn(n))))) : (b = a & ~c, b !== 0 ? i = hn(b) : v !== 0 ? i = hn(v) : n || (n = a & ~e, n !== 0 && (i = hn(n)))), i === 0 ? 0 : t !== 0 && t !== i && (t & c) === 0 && (c = i & -i, n = t & -t, c >= n || c === 32 && (n & 4194048) !== 0) ? t : i;
  }
  function gl(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function hu(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Wa() {
    var e = mn;
    return mn <<= 1, (mn & 4194048) === 0 && (mn = 256), e;
  }
  function Ei() {
    var e = ql;
    return ql <<= 1, (ql & 62914560) === 0 && (ql = 4194304), e;
  }
  function Xl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Hn(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function wi(e, t, n, a, i, c) {
    var v = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var b = e.entanglements, M = e.expirationTimes, L = e.hiddenUpdates;
    for (n = v & ~n; 0 < n; ) {
      var Q = 31 - it(n), F = 1 << Q;
      b[Q] = 0, M[Q] = -1;
      var B = L[Q];
      if (B !== null)
        for (L[Q] = null, Q = 0; Q < B.length; Q++) {
          var H = B[Q];
          H !== null && (H.lane &= -536870913);
        }
      n &= ~F;
    }
    a !== 0 && Ai(e, a, 0), c !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(v & ~t));
  }
  function Ai(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - it(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 4194090;
  }
  function Ia(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var a = 31 - it(n), i = 1 << a;
      i & t | e[a] & t && (e[a] |= t), n &= ~i;
    }
  }
  function Ql(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function er(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Gf() {
    var e = P.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : bp(e.type));
  }
  function f0(e, t) {
    var n = P.p;
    try {
      return P.p = e, t();
    } finally {
      P.p = n;
    }
  }
  var Gn = Math.random().toString(36).slice(2), dt = "__reactFiber$" + Gn, bt = "__reactProps$" + Gn, Zl = "__reactContainer$" + Gn, pu = "__reactEvents$" + Gn, d0 = "__reactListeners$" + Gn, m0 = "__reactHandles$" + Gn, Yf = "__reactResources$" + Gn, tr = "__reactMarker$" + Gn;
  function vu(e) {
    delete e[dt], delete e[bt], delete e[pu], delete e[d0], delete e[m0];
  }
  function Kl(e) {
    var t = e[dt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Zl] || n[dt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = ap(e); e !== null; ) {
            if (n = e[dt]) return n;
            e = ap(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Pl(e) {
    if (e = e[dt] || e[Zl]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function nr(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Fl(e) {
    var t = e[Yf];
    return t || (t = e[Yf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function nt(e) {
    e[tr] = !0;
  }
  var qf = /* @__PURE__ */ new Set(), Vf = {};
  function yl(e, t) {
    Jl(e, t), Jl(e + "Capture", t);
  }
  function Jl(e, t) {
    for (Vf[e] = t, e = 0; e < t.length; e++)
      qf.add(t[e]);
  }
  var h0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Xf = {}, Qf = {};
  function p0(e) {
    return le.call(Qf, e) ? !0 : le.call(Xf, e) ? !1 : h0.test(e) ? Qf[e] = !0 : (Xf[e] = !0, !1);
  }
  function Ci(e, t, n) {
    if (p0(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function Ri(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function pn(e, t, n, a) {
    if (a === null) e.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + a);
    }
  }
  var gu, Zf;
  function $l(e) {
    if (gu === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        gu = t && t[1] || "", Zf = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + gu + e + Zf;
  }
  var yu = !1;
  function bu(e, t) {
    if (!e || yu) return "";
    yu = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var F = function() {
                throw Error();
              };
              if (Object.defineProperty(F.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(F, []);
                } catch (H) {
                  var B = H;
                }
                Reflect.construct(e, [], F);
              } else {
                try {
                  F.call();
                } catch (H) {
                  B = H;
                }
                e.call(F.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (H) {
                B = H;
              }
              (F = e()) && typeof F.catch == "function" && F.catch(function() {
              });
            }
          } catch (H) {
            if (H && B && typeof H.stack == "string")
              return [H.stack, B.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var i = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      i && i.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var c = a.DetermineComponentFrameRoot(), v = c[0], b = c[1];
      if (v && b) {
        var M = v.split(`
`), L = b.split(`
`);
        for (i = a = 0; a < M.length && !M[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; i < L.length && !L[i].includes(
          "DetermineComponentFrameRoot"
        ); )
          i++;
        if (a === M.length || i === L.length)
          for (a = M.length - 1, i = L.length - 1; 1 <= a && 0 <= i && M[a] !== L[i]; )
            i--;
        for (; 1 <= a && 0 <= i; a--, i--)
          if (M[a] !== L[i]) {
            if (a !== 1 || i !== 1)
              do
                if (a--, i--, 0 > i || M[a] !== L[i]) {
                  var Q = `
` + M[a].replace(" at new ", " at ");
                  return e.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", e.displayName)), Q;
                }
              while (1 <= a && 0 <= i);
            break;
          }
      }
    } finally {
      yu = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? $l(n) : "";
  }
  function v0(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return $l(e.type);
      case 16:
        return $l("Lazy");
      case 13:
        return $l("Suspense");
      case 19:
        return $l("SuspenseList");
      case 0:
      case 15:
        return bu(e.type, !1);
      case 11:
        return bu(e.type.render, !1);
      case 1:
        return bu(e.type, !0);
      case 31:
        return $l("Activity");
      default:
        return "";
    }
  }
  function Kf(e) {
    try {
      var t = "";
      do
        t += v0(e), e = e.return;
      while (e);
      return t;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  function zt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Pf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function g0(e) {
    var t = Pf(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    ), a = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var i = n.get, c = n.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return i.call(this);
        },
        set: function(v) {
          a = "" + v, c.call(this, v);
        }
      }), Object.defineProperty(e, t, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(v) {
          a = "" + v;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function Mi(e) {
    e._valueTracker || (e._valueTracker = g0(e));
  }
  function Ff(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), a = "";
    return e && (a = Pf(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Oi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var y0 = /[\n"\\]/g;
  function Ut(e) {
    return e.replace(
      y0,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function xu(e, t, n, a, i, c, v, b) {
    e.name = "", v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? e.type = v : e.removeAttribute("type"), t != null ? v === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + zt(t)) : e.value !== "" + zt(t) && (e.value = "" + zt(t)) : v !== "submit" && v !== "reset" || e.removeAttribute("value"), t != null ? Su(e, v, zt(t)) : n != null ? Su(e, v, zt(n)) : a != null && e.removeAttribute("value"), i == null && c != null && (e.defaultChecked = !!c), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? e.name = "" + zt(b) : e.removeAttribute("name");
  }
  function Jf(e, t, n, a, i, c, v, b) {
    if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.type = c), t != null || n != null) {
      if (!(c !== "submit" && c !== "reset" || t != null))
        return;
      n = n != null ? "" + zt(n) : "", t = t != null ? "" + zt(t) : n, b || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? i, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = b ? e.checked : !!a, e.defaultChecked = !!a, v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" && (e.name = v);
  }
  function Su(e, t, n) {
    t === "number" && Oi(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function Wl(e, t, n, a) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < n.length; i++)
        t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && a && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + zt(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          e[i].selected = !0, a && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function $f(e, t, n) {
    if (t != null && (t = "" + zt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + zt(n) : "";
  }
  function Wf(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(o(92));
        if (ce(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), t = n;
    }
    n = zt(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a);
  }
  function Il(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var b0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function If(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || b0.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function ed(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (e = e.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var i in t)
        a = t[i], t.hasOwnProperty(i) && n[i] !== a && If(e, i, a);
    } else
      for (var c in t)
        t.hasOwnProperty(c) && If(e, c, t[c]);
  }
  function Eu(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var x0 = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), S0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ti(e) {
    return S0.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var wu = null;
  function Au(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var ea = null, ta = null;
  function td(e) {
    var t = Pl(e);
    if (t && (e = t.stateNode)) {
      var n = e[bt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (xu(
            e,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + Ut(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var i = a[bt] || null;
                if (!i) throw Error(o(90));
                xu(
                  a,
                  i.value,
                  i.defaultValue,
                  i.defaultValue,
                  i.checked,
                  i.defaultChecked,
                  i.type,
                  i.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              a = n[t], a.form === e.form && Ff(a);
          }
          break e;
        case "textarea":
          $f(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && Wl(e, !!n.multiple, t, !1);
      }
    }
  }
  var Cu = !1;
  function nd(e, t, n) {
    if (Cu) return e(t, n);
    Cu = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (Cu = !1, (ea !== null || ta !== null) && (po(), ea && (t = ea, e = ta, ta = ea = null, td(t), e)))
        for (t = 0; t < e.length; t++) td(e[t]);
    }
  }
  function lr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = n[bt] || null;
    if (a === null) return null;
    n = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function")
      throw Error(
        o(231, t, typeof n)
      );
    return n;
  }
  var vn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ru = !1;
  if (vn)
    try {
      var ar = {};
      Object.defineProperty(ar, "passive", {
        get: function() {
          Ru = !0;
        }
      }), window.addEventListener("test", ar, ar), window.removeEventListener("test", ar, ar);
    } catch {
      Ru = !1;
    }
  var Yn = null, Mu = null, _i = null;
  function ld() {
    if (_i) return _i;
    var e, t = Mu, n = t.length, a, i = "value" in Yn ? Yn.value : Yn.textContent, c = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++) ;
    var v = n - e;
    for (a = 1; a <= v && t[n - a] === i[c - a]; a++) ;
    return _i = i.slice(e, 1 < a ? 1 - a : void 0);
  }
  function Ni(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Di() {
    return !0;
  }
  function ad() {
    return !1;
  }
  function xt(e) {
    function t(n, a, i, c, v) {
      this._reactName = n, this._targetInst = i, this.type = a, this.nativeEvent = c, this.target = v, this.currentTarget = null;
      for (var b in e)
        e.hasOwnProperty(b) && (n = e[b], this[b] = n ? n(c) : c[b]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? Di : ad, this.isPropagationStopped = ad, this;
    }
    return g(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Di);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Di);
      },
      persist: function() {
      },
      isPersistent: Di
    }), t;
  }
  var bl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ji = xt(bl), rr = g({}, bl, { view: 0, detail: 0 }), E0 = xt(rr), Ou, Tu, ir, zi = g({}, rr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Nu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== ir && (ir && e.type === "mousemove" ? (Ou = e.screenX - ir.screenX, Tu = e.screenY - ir.screenY) : Tu = Ou = 0, ir = e), Ou);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Tu;
    }
  }), rd = xt(zi), w0 = g({}, zi, { dataTransfer: 0 }), A0 = xt(w0), C0 = g({}, rr, { relatedTarget: 0 }), _u = xt(C0), R0 = g({}, bl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), M0 = xt(R0), O0 = g({}, bl, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), T0 = xt(O0), _0 = g({}, bl, { data: 0 }), id = xt(_0), N0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, D0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, j0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function z0(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = j0[e]) ? !!t[e] : !1;
  }
  function Nu() {
    return z0;
  }
  var U0 = g({}, rr, {
    key: function(e) {
      if (e.key) {
        var t = N0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Ni(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? D0[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Nu,
    charCode: function(e) {
      return e.type === "keypress" ? Ni(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Ni(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), L0 = xt(U0), B0 = g({}, zi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), od = xt(B0), k0 = g({}, rr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Nu
  }), H0 = xt(k0), G0 = g({}, bl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Y0 = xt(G0), q0 = g({}, zi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), V0 = xt(q0), X0 = g({}, bl, {
    newState: 0,
    oldState: 0
  }), Q0 = xt(X0), Z0 = [9, 13, 27, 32], Du = vn && "CompositionEvent" in window, or = null;
  vn && "documentMode" in document && (or = document.documentMode);
  var K0 = vn && "TextEvent" in window && !or, ud = vn && (!Du || or && 8 < or && 11 >= or), cd = " ", sd = !1;
  function fd(e, t) {
    switch (e) {
      case "keyup":
        return Z0.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function dd(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var na = !1;
  function P0(e, t) {
    switch (e) {
      case "compositionend":
        return dd(t);
      case "keypress":
        return t.which !== 32 ? null : (sd = !0, cd);
      case "textInput":
        return e = t.data, e === cd && sd ? null : e;
      default:
        return null;
    }
  }
  function F0(e, t) {
    if (na)
      return e === "compositionend" || !Du && fd(e, t) ? (e = ld(), _i = Mu = Yn = null, na = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return ud && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var J0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function md(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!J0[e.type] : t === "textarea";
  }
  function hd(e, t, n, a) {
    ea ? ta ? ta.push(a) : ta = [a] : ea = a, t = So(t, "onChange"), 0 < t.length && (n = new ji(
      "onChange",
      "change",
      null,
      n,
      a
    ), e.push({ event: n, listeners: t }));
  }
  var ur = null, cr = null;
  function $0(e) {
    Ph(e, 0);
  }
  function Ui(e) {
    var t = nr(e);
    if (Ff(t)) return e;
  }
  function pd(e, t) {
    if (e === "change") return t;
  }
  var vd = !1;
  if (vn) {
    var ju;
    if (vn) {
      var zu = "oninput" in document;
      if (!zu) {
        var gd = document.createElement("div");
        gd.setAttribute("oninput", "return;"), zu = typeof gd.oninput == "function";
      }
      ju = zu;
    } else ju = !1;
    vd = ju && (!document.documentMode || 9 < document.documentMode);
  }
  function yd() {
    ur && (ur.detachEvent("onpropertychange", bd), cr = ur = null);
  }
  function bd(e) {
    if (e.propertyName === "value" && Ui(cr)) {
      var t = [];
      hd(
        t,
        cr,
        e,
        Au(e)
      ), nd($0, t);
    }
  }
  function W0(e, t, n) {
    e === "focusin" ? (yd(), ur = t, cr = n, ur.attachEvent("onpropertychange", bd)) : e === "focusout" && yd();
  }
  function I0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ui(cr);
  }
  function ey(e, t) {
    if (e === "click") return Ui(t);
  }
  function ty(e, t) {
    if (e === "input" || e === "change")
      return Ui(t);
  }
  function ny(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ct = typeof Object.is == "function" ? Object.is : ny;
  function sr(e, t) {
    if (Ct(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var i = n[a];
      if (!le.call(t, i) || !Ct(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  function xd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Sd(e, t) {
    var n = xd(e);
    e = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (a = e + n.textContent.length, e <= t && a >= t)
          return { node: n, offset: t - e };
        e = a;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = xd(n);
    }
  }
  function Ed(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ed(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function wd(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Oi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Oi(e.document);
    }
    return t;
  }
  function Uu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var ly = vn && "documentMode" in document && 11 >= document.documentMode, la = null, Lu = null, fr = null, Bu = !1;
  function Ad(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Bu || la == null || la !== Oi(a) || (a = la, "selectionStart" in a && Uu(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), fr && sr(fr, a) || (fr = a, a = So(Lu, "onSelect"), 0 < a.length && (t = new ji(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: a }), t.target = la)));
  }
  function xl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var aa = {
    animationend: xl("Animation", "AnimationEnd"),
    animationiteration: xl("Animation", "AnimationIteration"),
    animationstart: xl("Animation", "AnimationStart"),
    transitionrun: xl("Transition", "TransitionRun"),
    transitionstart: xl("Transition", "TransitionStart"),
    transitioncancel: xl("Transition", "TransitionCancel"),
    transitionend: xl("Transition", "TransitionEnd")
  }, ku = {}, Cd = {};
  vn && (Cd = document.createElement("div").style, "AnimationEvent" in window || (delete aa.animationend.animation, delete aa.animationiteration.animation, delete aa.animationstart.animation), "TransitionEvent" in window || delete aa.transitionend.transition);
  function Sl(e) {
    if (ku[e]) return ku[e];
    if (!aa[e]) return e;
    var t = aa[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in Cd)
        return ku[e] = t[n];
    return e;
  }
  var Rd = Sl("animationend"), Md = Sl("animationiteration"), Od = Sl("animationstart"), ay = Sl("transitionrun"), ry = Sl("transitionstart"), iy = Sl("transitioncancel"), Td = Sl("transitionend"), _d = /* @__PURE__ */ new Map(), Hu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Hu.push("scrollEnd");
  function Zt(e, t) {
    _d.set(e, t), yl(t, [e]);
  }
  var Nd = /* @__PURE__ */ new WeakMap();
  function Lt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Nd.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: Kf(t)
      }, Nd.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Kf(t)
    };
  }
  var Bt = [], ra = 0, Gu = 0;
  function Li() {
    for (var e = ra, t = Gu = ra = 0; t < e; ) {
      var n = Bt[t];
      Bt[t++] = null;
      var a = Bt[t];
      Bt[t++] = null;
      var i = Bt[t];
      Bt[t++] = null;
      var c = Bt[t];
      if (Bt[t++] = null, a !== null && i !== null) {
        var v = a.pending;
        v === null ? i.next = i : (i.next = v.next, v.next = i), a.pending = i;
      }
      c !== 0 && Dd(n, i, c);
    }
  }
  function Bi(e, t, n, a) {
    Bt[ra++] = e, Bt[ra++] = t, Bt[ra++] = n, Bt[ra++] = a, Gu |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function Yu(e, t, n, a) {
    return Bi(e, t, n, a), ki(e);
  }
  function ia(e, t) {
    return Bi(e, null, null, t), ki(e);
  }
  function Dd(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var i = !1, c = e.return; c !== null; )
      c.childLanes |= n, a = c.alternate, a !== null && (a.childLanes |= n), c.tag === 22 && (e = c.stateNode, e === null || e._visibility & 1 || (i = !0)), e = c, c = c.return;
    return e.tag === 3 ? (c = e.stateNode, i && t !== null && (i = 31 - it(n), e = c.hiddenUpdates, a = e[i], a === null ? e[i] = [t] : a.push(t), t.lane = n | 536870912), c) : null;
  }
  function ki(e) {
    if (50 < Lr)
      throw Lr = 0, Kc = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var oa = {};
  function oy(e, t, n, a) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Rt(e, t, n, a) {
    return new oy(e, t, n, a);
  }
  function qu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function gn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Rt(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function jd(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Hi(e, t, n, a, i, c) {
    var v = 0;
    if (a = e, typeof e == "function") qu(e) && (v = 1);
    else if (typeof e == "string")
      v = cb(
        e,
        n,
        ee.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case te:
          return e = Rt(31, n, t, i), e.elementType = te, e.lanes = c, e;
        case R:
          return El(n.children, i, c, t);
        case A:
          v = 8, i |= 24;
          break;
        case O:
          return e = Rt(12, n, t, i | 2), e.elementType = O, e.lanes = c, e;
        case Y:
          return e = Rt(13, n, t, i), e.elementType = Y, e.lanes = c, e;
        case Z:
          return e = Rt(19, n, t, i), e.elementType = Z, e.lanes = c, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case T:
              case z:
                v = 10;
                break e;
              case j:
                v = 9;
                break e;
              case q:
                v = 11;
                break e;
              case X:
                v = 14;
                break e;
              case V:
                v = 16, a = null;
                break e;
            }
          v = 29, n = Error(
            o(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return t = Rt(v, n, t, i), t.elementType = e, t.type = a, t.lanes = c, t;
  }
  function El(e, t, n, a) {
    return e = Rt(7, e, a, t), e.lanes = n, e;
  }
  function Vu(e, t, n) {
    return e = Rt(6, e, null, t), e.lanes = n, e;
  }
  function Xu(e, t, n) {
    return t = Rt(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var ua = [], ca = 0, Gi = null, Yi = 0, kt = [], Ht = 0, wl = null, yn = 1, bn = "";
  function Al(e, t) {
    ua[ca++] = Yi, ua[ca++] = Gi, Gi = e, Yi = t;
  }
  function zd(e, t, n) {
    kt[Ht++] = yn, kt[Ht++] = bn, kt[Ht++] = wl, wl = e;
    var a = yn;
    e = bn;
    var i = 32 - it(a) - 1;
    a &= ~(1 << i), n += 1;
    var c = 32 - it(t) + i;
    if (30 < c) {
      var v = i - i % 5;
      c = (a & (1 << v) - 1).toString(32), a >>= v, i -= v, yn = 1 << 32 - it(t) + i | n << i | a, bn = c + e;
    } else
      yn = 1 << c | n << i | a, bn = e;
  }
  function Qu(e) {
    e.return !== null && (Al(e, 1), zd(e, 1, 0));
  }
  function Zu(e) {
    for (; e === Gi; )
      Gi = ua[--ca], ua[ca] = null, Yi = ua[--ca], ua[ca] = null;
    for (; e === wl; )
      wl = kt[--Ht], kt[Ht] = null, bn = kt[--Ht], kt[Ht] = null, yn = kt[--Ht], kt[Ht] = null;
  }
  var pt = null, Ze = null, Ne = !1, Cl = null, tn = !1, Ku = Error(o(519));
  function Rl(e) {
    var t = Error(o(418, ""));
    throw hr(Lt(t, e)), Ku;
  }
  function Ud(e) {
    var t = e.stateNode, n = e.type, a = e.memoizedProps;
    switch (t[dt] = e, t[bt] = a, n) {
      case "dialog":
        Ae("cancel", t), Ae("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ae("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < kr.length; n++)
          Ae(kr[n], t);
        break;
      case "source":
        Ae("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Ae("error", t), Ae("load", t);
        break;
      case "details":
        Ae("toggle", t);
        break;
      case "input":
        Ae("invalid", t), Jf(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        ), Mi(t);
        break;
      case "select":
        Ae("invalid", t);
        break;
      case "textarea":
        Ae("invalid", t), Wf(t, a.value, a.defaultValue, a.children), Mi(t);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === !0 || Wh(t.textContent, n) ? (a.popover != null && (Ae("beforetoggle", t), Ae("toggle", t)), a.onScroll != null && Ae("scroll", t), a.onScrollEnd != null && Ae("scrollend", t), a.onClick != null && (t.onclick = Eo), t = !0) : t = !1, t || Rl(e);
  }
  function Ld(e) {
    for (pt = e.return; pt; )
      switch (pt.tag) {
        case 5:
        case 13:
          tn = !1;
          return;
        case 27:
        case 3:
          tn = !0;
          return;
        default:
          pt = pt.return;
      }
  }
  function dr(e) {
    if (e !== pt) return !1;
    if (!Ne) return Ld(e), Ne = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || cs(e.type, e.memoizedProps)), n = !n), n && Ze && Rl(e), Ld(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (n = e.data, n === "/$") {
              if (t === 0) {
                Ze = Pt(e.nextSibling);
                break e;
              }
              t--;
            } else
              n !== "$" && n !== "$!" && n !== "$?" || t++;
          e = e.nextSibling;
        }
        Ze = null;
      }
    } else
      t === 27 ? (t = Ze, ll(e.type) ? (e = ms, ms = null, Ze = e) : Ze = t) : Ze = pt ? Pt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function mr() {
    Ze = pt = null, Ne = !1;
  }
  function Bd() {
    var e = Cl;
    return e !== null && (wt === null ? wt = e : wt.push.apply(
      wt,
      e
    ), Cl = null), e;
  }
  function hr(e) {
    Cl === null ? Cl = [e] : Cl.push(e);
  }
  var Pu = G(null), Ml = null, xn = null;
  function qn(e, t, n) {
    $(Pu, t._currentValue), t._currentValue = n;
  }
  function Sn(e) {
    e._currentValue = Pu.current, J(Pu);
  }
  function Fu(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Ju(e, t, n, a) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null; ) {
      var c = i.dependencies;
      if (c !== null) {
        var v = i.child;
        c = c.firstContext;
        e: for (; c !== null; ) {
          var b = c;
          c = i;
          for (var M = 0; M < t.length; M++)
            if (b.context === t[M]) {
              c.lanes |= n, b = c.alternate, b !== null && (b.lanes |= n), Fu(
                c.return,
                n,
                e
              ), a || (v = null);
              break e;
            }
          c = b.next;
        }
      } else if (i.tag === 18) {
        if (v = i.return, v === null) throw Error(o(341));
        v.lanes |= n, c = v.alternate, c !== null && (c.lanes |= n), Fu(v, n, e), v = null;
      } else v = i.child;
      if (v !== null) v.return = i;
      else
        for (v = i; v !== null; ) {
          if (v === e) {
            v = null;
            break;
          }
          if (i = v.sibling, i !== null) {
            i.return = v.return, v = i;
            break;
          }
          v = v.return;
        }
      i = v;
    }
  }
  function pr(e, t, n, a) {
    e = null;
    for (var i = t, c = !1; i !== null; ) {
      if (!c) {
        if ((i.flags & 524288) !== 0) c = !0;
        else if ((i.flags & 262144) !== 0) break;
      }
      if (i.tag === 10) {
        var v = i.alternate;
        if (v === null) throw Error(o(387));
        if (v = v.memoizedProps, v !== null) {
          var b = i.type;
          Ct(i.pendingProps.value, v.value) || (e !== null ? e.push(b) : e = [b]);
        }
      } else if (i === me.current) {
        if (v = i.alternate, v === null) throw Error(o(387));
        v.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e !== null ? e.push(Xr) : e = [Xr]);
      }
      i = i.return;
    }
    e !== null && Ju(
      t,
      e,
      n,
      a
    ), t.flags |= 262144;
  }
  function qi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Ct(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Ol(e) {
    Ml = e, xn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function mt(e) {
    return kd(Ml, e);
  }
  function Vi(e, t) {
    return Ml === null && Ol(e), kd(e, t);
  }
  function kd(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, xn === null) {
      if (e === null) throw Error(o(308));
      xn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else xn = xn.next = t;
    return n;
  }
  var uy = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(n, a) {
        e.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(n) {
        return n();
      });
    };
  }, cy = l.unstable_scheduleCallback, sy = l.unstable_NormalPriority, Ie = {
    $$typeof: z,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function $u() {
    return {
      controller: new uy(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function vr(e) {
    e.refCount--, e.refCount === 0 && cy(sy, function() {
      e.controller.abort();
    });
  }
  var gr = null, Wu = 0, sa = 0, fa = null;
  function fy(e, t) {
    if (gr === null) {
      var n = gr = [];
      Wu = 0, sa = es(), fa = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return Wu++, t.then(Hd, Hd), t;
  }
  function Hd() {
    if (--Wu === 0 && gr !== null) {
      fa !== null && (fa.status = "fulfilled");
      var e = gr;
      gr = null, sa = 0, fa = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function dy(e, t) {
    var n = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(i) {
        n.push(i);
      }
    };
    return e.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var i = 0; i < n.length; i++) (0, n[i])(t);
      },
      function(i) {
        for (a.status = "rejected", a.reason = i, i = 0; i < n.length; i++)
          (0, n[i])(void 0);
      }
    ), a;
  }
  var Gd = D.S;
  D.S = function(e, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && fy(e, t), Gd !== null && Gd(e, t);
  };
  var Tl = G(null);
  function Iu() {
    var e = Tl.current;
    return e !== null ? e : Ye.pooledCache;
  }
  function Xi(e, t) {
    t === null ? $(Tl, Tl.current) : $(Tl, t.pool);
  }
  function Yd() {
    var e = Iu();
    return e === null ? null : { parent: Ie._currentValue, pool: e };
  }
  var yr = Error(o(460)), qd = Error(o(474)), Qi = Error(o(542)), ec = { then: function() {
  } };
  function Vd(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Zi() {
  }
  function Xd(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Zi, Zi), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Zd(e), e;
      default:
        if (typeof t.status == "string") t.then(Zi, Zi);
        else {
          if (e = Ye, e !== null && 100 < e.shellSuspendCounter)
            throw Error(o(482));
          e = t, e.status = "pending", e.then(
            function(a) {
              if (t.status === "pending") {
                var i = t;
                i.status = "fulfilled", i.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var i = t;
                i.status = "rejected", i.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Zd(e), e;
        }
        throw br = t, yr;
    }
  }
  var br = null;
  function Qd() {
    if (br === null) throw Error(o(459));
    var e = br;
    return br = null, e;
  }
  function Zd(e) {
    if (e === yr || e === Qi)
      throw Error(o(483));
  }
  var Vn = !1;
  function tc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function nc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Xn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Qn(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (je & 2) !== 0) {
      var i = a.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), a.pending = t, t = ki(e), Dd(e, null, n), t;
    }
    return Bi(e, a, t, n), ki(e);
  }
  function xr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Ia(e, n);
    }
  }
  function lc(e, t) {
    var n = e.updateQueue, a = e.alternate;
    if (a !== null && (a = a.updateQueue, n === a)) {
      var i = null, c = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var v = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          c === null ? i = c = v : c = c.next = v, n = n.next;
        } while (n !== null);
        c === null ? i = c = t : c = c.next = t;
      } else i = c = t;
      n = {
        baseState: a.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: c,
        shared: a.shared,
        callbacks: a.callbacks
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var ac = !1;
  function Sr() {
    if (ac) {
      var e = fa;
      if (e !== null) throw e;
    }
  }
  function Er(e, t, n, a) {
    ac = !1;
    var i = e.updateQueue;
    Vn = !1;
    var c = i.firstBaseUpdate, v = i.lastBaseUpdate, b = i.shared.pending;
    if (b !== null) {
      i.shared.pending = null;
      var M = b, L = M.next;
      M.next = null, v === null ? c = L : v.next = L, v = M;
      var Q = e.alternate;
      Q !== null && (Q = Q.updateQueue, b = Q.lastBaseUpdate, b !== v && (b === null ? Q.firstBaseUpdate = L : b.next = L, Q.lastBaseUpdate = M));
    }
    if (c !== null) {
      var F = i.baseState;
      v = 0, Q = L = M = null, b = c;
      do {
        var B = b.lane & -536870913, H = B !== b.lane;
        if (H ? (Oe & B) === B : (a & B) === B) {
          B !== 0 && B === sa && (ac = !0), Q !== null && (Q = Q.next = {
            lane: 0,
            tag: b.tag,
            payload: b.payload,
            callback: null,
            next: null
          });
          e: {
            var ye = e, he = b;
            B = t;
            var Be = n;
            switch (he.tag) {
              case 1:
                if (ye = he.payload, typeof ye == "function") {
                  F = ye.call(Be, F, B);
                  break e;
                }
                F = ye;
                break e;
              case 3:
                ye.flags = ye.flags & -65537 | 128;
              case 0:
                if (ye = he.payload, B = typeof ye == "function" ? ye.call(Be, F, B) : ye, B == null) break e;
                F = g({}, F, B);
                break e;
              case 2:
                Vn = !0;
            }
          }
          B = b.callback, B !== null && (e.flags |= 64, H && (e.flags |= 8192), H = i.callbacks, H === null ? i.callbacks = [B] : H.push(B));
        } else
          H = {
            lane: B,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null
          }, Q === null ? (L = Q = H, M = F) : Q = Q.next = H, v |= B;
        if (b = b.next, b === null) {
          if (b = i.shared.pending, b === null)
            break;
          H = b, b = H.next, H.next = null, i.lastBaseUpdate = H, i.shared.pending = null;
        }
      } while (!0);
      Q === null && (M = F), i.baseState = M, i.firstBaseUpdate = L, i.lastBaseUpdate = Q, c === null && (i.shared.lanes = 0), In |= v, e.lanes = v, e.memoizedState = F;
    }
  }
  function Kd(e, t) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(t);
  }
  function Pd(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        Kd(n[e], t);
  }
  var da = G(null), Ki = G(0);
  function Fd(e, t) {
    e = On, $(Ki, e), $(da, t), On = e | t.baseLanes;
  }
  function rc() {
    $(Ki, On), $(da, da.current);
  }
  function ic() {
    On = Ki.current, J(da), J(Ki);
  }
  var Zn = 0, xe = null, Ue = null, Je = null, Pi = !1, ma = !1, _l = !1, Fi = 0, wr = 0, ha = null, my = 0;
  function Pe() {
    throw Error(o(321));
  }
  function oc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Ct(e[n], t[n])) return !1;
    return !0;
  }
  function uc(e, t, n, a, i, c) {
    return Zn = c, xe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, D.H = e === null || e.memoizedState === null ? Dm : jm, _l = !1, c = n(a, i), _l = !1, ma && (c = $d(
      t,
      n,
      a,
      i
    )), Jd(e), c;
  }
  function Jd(e) {
    D.H = to;
    var t = Ue !== null && Ue.next !== null;
    if (Zn = 0, Je = Ue = xe = null, Pi = !1, wr = 0, ha = null, t) throw Error(o(300));
    e === null || lt || (e = e.dependencies, e !== null && qi(e) && (lt = !0));
  }
  function $d(e, t, n, a) {
    xe = e;
    var i = 0;
    do {
      if (ma && (ha = null), wr = 0, ma = !1, 25 <= i) throw Error(o(301));
      if (i += 1, Je = Ue = null, e.updateQueue != null) {
        var c = e.updateQueue;
        c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
      }
      D.H = xy, c = t(n, a);
    } while (ma);
    return c;
  }
  function hy() {
    var e = D.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Ar(t) : t, e = e.useState()[0], (Ue !== null ? Ue.memoizedState : null) !== e && (xe.flags |= 1024), t;
  }
  function cc() {
    var e = Fi !== 0;
    return Fi = 0, e;
  }
  function sc(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function fc(e) {
    if (Pi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Pi = !1;
    }
    Zn = 0, Je = Ue = xe = null, ma = !1, wr = Fi = 0, ha = null;
  }
  function St() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Je === null ? xe.memoizedState = Je = e : Je = Je.next = e, Je;
  }
  function $e() {
    if (Ue === null) {
      var e = xe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ue.next;
    var t = Je === null ? xe.memoizedState : Je.next;
    if (t !== null)
      Je = t, Ue = e;
    else {
      if (e === null)
        throw xe.alternate === null ? Error(o(467)) : Error(o(310));
      Ue = e, e = {
        memoizedState: Ue.memoizedState,
        baseState: Ue.baseState,
        baseQueue: Ue.baseQueue,
        queue: Ue.queue,
        next: null
      }, Je === null ? xe.memoizedState = Je = e : Je = Je.next = e;
    }
    return Je;
  }
  function dc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ar(e) {
    var t = wr;
    return wr += 1, ha === null && (ha = []), e = Xd(ha, e, t), t = xe, (Je === null ? t.memoizedState : Je.next) === null && (t = t.alternate, D.H = t === null || t.memoizedState === null ? Dm : jm), e;
  }
  function Ji(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ar(e);
      if (e.$$typeof === z) return mt(e);
    }
    throw Error(o(438, String(e)));
  }
  function mc(e) {
    var t = null, n = xe.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var a = xe.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(i) {
          return i.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = dc(), xe.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++)
        n[a] = I;
    return t.index++, n;
  }
  function En(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function $i(e) {
    var t = $e();
    return hc(t, Ue, e);
  }
  function hc(e, t, n) {
    var a = e.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = n;
    var i = e.baseQueue, c = a.pending;
    if (c !== null) {
      if (i !== null) {
        var v = i.next;
        i.next = c.next, c.next = v;
      }
      t.baseQueue = i = c, a.pending = null;
    }
    if (c = e.baseState, i === null) e.memoizedState = c;
    else {
      t = i.next;
      var b = v = null, M = null, L = t, Q = !1;
      do {
        var F = L.lane & -536870913;
        if (F !== L.lane ? (Oe & F) === F : (Zn & F) === F) {
          var B = L.revertLane;
          if (B === 0)
            M !== null && (M = M.next = {
              lane: 0,
              revertLane: 0,
              action: L.action,
              hasEagerState: L.hasEagerState,
              eagerState: L.eagerState,
              next: null
            }), F === sa && (Q = !0);
          else if ((Zn & B) === B) {
            L = L.next, B === sa && (Q = !0);
            continue;
          } else
            F = {
              lane: 0,
              revertLane: L.revertLane,
              action: L.action,
              hasEagerState: L.hasEagerState,
              eagerState: L.eagerState,
              next: null
            }, M === null ? (b = M = F, v = c) : M = M.next = F, xe.lanes |= B, In |= B;
          F = L.action, _l && n(c, F), c = L.hasEagerState ? L.eagerState : n(c, F);
        } else
          B = {
            lane: F,
            revertLane: L.revertLane,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null
          }, M === null ? (b = M = B, v = c) : M = M.next = B, xe.lanes |= F, In |= F;
        L = L.next;
      } while (L !== null && L !== t);
      if (M === null ? v = c : M.next = b, !Ct(c, e.memoizedState) && (lt = !0, Q && (n = fa, n !== null)))
        throw n;
      e.memoizedState = c, e.baseState = v, e.baseQueue = M, a.lastRenderedState = c;
    }
    return i === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function pc(e) {
    var t = $e(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var a = n.dispatch, i = n.pending, c = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var v = i = i.next;
      do
        c = e(c, v.action), v = v.next;
      while (v !== i);
      Ct(c, t.memoizedState) || (lt = !0), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), n.lastRenderedState = c;
    }
    return [c, a];
  }
  function Wd(e, t, n) {
    var a = xe, i = $e(), c = Ne;
    if (c) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = t();
    var v = !Ct(
      (Ue || i).memoizedState,
      n
    );
    v && (i.memoizedState = n, lt = !0), i = i.queue;
    var b = tm.bind(null, a, i, e);
    if (Cr(2048, 8, b, [e]), i.getSnapshot !== t || v || Je !== null && Je.memoizedState.tag & 1) {
      if (a.flags |= 2048, pa(
        9,
        Wi(),
        em.bind(
          null,
          a,
          i,
          n,
          t
        ),
        null
      ), Ye === null) throw Error(o(349));
      c || (Zn & 124) !== 0 || Id(a, t, n);
    }
    return n;
  }
  function Id(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = xe.updateQueue, t === null ? (t = dc(), xe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function em(e, t, n, a) {
    t.value = n, t.getSnapshot = a, nm(t) && lm(e);
  }
  function tm(e, t, n) {
    return n(function() {
      nm(t) && lm(e);
    });
  }
  function nm(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ct(e, n);
    } catch {
      return !0;
    }
  }
  function lm(e) {
    var t = ia(e, 2);
    t !== null && Nt(t, e, 2);
  }
  function vc(e) {
    var t = St();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), _l) {
        en(!0);
        try {
          n();
        } finally {
          en(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: En,
      lastRenderedState: e
    }, t;
  }
  function am(e, t, n, a) {
    return e.baseState = n, hc(
      e,
      Ue,
      typeof a == "function" ? a : En
    );
  }
  function py(e, t, n, a, i) {
    if (eo(e)) throw Error(o(485));
    if (e = t.action, e !== null) {
      var c = {
        payload: i,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(v) {
          c.listeners.push(v);
        }
      };
      D.T !== null ? n(!0) : c.isTransition = !1, a(c), n = t.pending, n === null ? (c.next = t.pending = c, rm(t, c)) : (c.next = n.next, t.pending = n.next = c);
    }
  }
  function rm(e, t) {
    var n = t.action, a = t.payload, i = e.state;
    if (t.isTransition) {
      var c = D.T, v = {};
      D.T = v;
      try {
        var b = n(i, a), M = D.S;
        M !== null && M(v, b), im(e, t, b);
      } catch (L) {
        gc(e, t, L);
      } finally {
        D.T = c;
      }
    } else
      try {
        c = n(i, a), im(e, t, c);
      } catch (L) {
        gc(e, t, L);
      }
  }
  function im(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        om(e, t, a);
      },
      function(a) {
        return gc(e, t, a);
      }
    ) : om(e, t, n);
  }
  function om(e, t, n) {
    t.status = "fulfilled", t.value = n, um(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, rm(e, n)));
  }
  function gc(e, t, n) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = n, um(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function um(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function cm(e, t) {
    return t;
  }
  function sm(e, t) {
    if (Ne) {
      var n = Ye.formState;
      if (n !== null) {
        e: {
          var a = xe;
          if (Ne) {
            if (Ze) {
              t: {
                for (var i = Ze, c = tn; i.nodeType !== 8; ) {
                  if (!c) {
                    i = null;
                    break t;
                  }
                  if (i = Pt(
                    i.nextSibling
                  ), i === null) {
                    i = null;
                    break t;
                  }
                }
                c = i.data, i = c === "F!" || c === "F" ? i : null;
              }
              if (i) {
                Ze = Pt(
                  i.nextSibling
                ), a = i.data === "F!";
                break e;
              }
            }
            Rl(a);
          }
          a = !1;
        }
        a && (t = n[0]);
      }
    }
    return n = St(), n.memoizedState = n.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: cm,
      lastRenderedState: t
    }, n.queue = a, n = Tm.bind(
      null,
      xe,
      a
    ), a.dispatch = n, a = vc(!1), c = Ec.bind(
      null,
      xe,
      !1,
      a.queue
    ), a = St(), i = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = i, n = py.bind(
      null,
      xe,
      i,
      c,
      n
    ), i.dispatch = n, a.memoizedState = e, [t, n, !1];
  }
  function fm(e) {
    var t = $e();
    return dm(t, Ue, e);
  }
  function dm(e, t, n) {
    if (t = hc(
      e,
      t,
      cm
    )[0], e = $i(En)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Ar(t);
      } catch (v) {
        throw v === yr ? Qi : v;
      }
    else a = t;
    t = $e();
    var i = t.queue, c = i.dispatch;
    return n !== t.memoizedState && (xe.flags |= 2048, pa(
      9,
      Wi(),
      vy.bind(null, i, n),
      null
    )), [a, c, e];
  }
  function vy(e, t) {
    e.action = t;
  }
  function mm(e) {
    var t = $e(), n = Ue;
    if (n !== null)
      return dm(t, n, e);
    $e(), t = t.memoizedState, n = $e();
    var a = n.queue.dispatch;
    return n.memoizedState = e, [t, a, !1];
  }
  function pa(e, t, n, a) {
    return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = xe.updateQueue, t === null && (t = dc(), xe.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
  }
  function Wi() {
    return { destroy: void 0, resource: void 0 };
  }
  function hm() {
    return $e().memoizedState;
  }
  function Ii(e, t, n, a) {
    var i = St();
    a = a === void 0 ? null : a, xe.flags |= e, i.memoizedState = pa(
      1 | t,
      Wi(),
      n,
      a
    );
  }
  function Cr(e, t, n, a) {
    var i = $e();
    a = a === void 0 ? null : a;
    var c = i.memoizedState.inst;
    Ue !== null && a !== null && oc(a, Ue.memoizedState.deps) ? i.memoizedState = pa(t, c, n, a) : (xe.flags |= e, i.memoizedState = pa(
      1 | t,
      c,
      n,
      a
    ));
  }
  function pm(e, t) {
    Ii(8390656, 8, e, t);
  }
  function vm(e, t) {
    Cr(2048, 8, e, t);
  }
  function gm(e, t) {
    return Cr(4, 2, e, t);
  }
  function ym(e, t) {
    return Cr(4, 4, e, t);
  }
  function bm(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function() {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function xm(e, t, n) {
    n = n != null ? n.concat([e]) : null, Cr(4, 4, bm.bind(null, t, e), n);
  }
  function yc() {
  }
  function Sm(e, t) {
    var n = $e();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && oc(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
  }
  function Em(e, t) {
    var n = $e();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && oc(t, a[1]))
      return a[0];
    if (a = e(), _l) {
      en(!0);
      try {
        e();
      } finally {
        en(!1);
      }
    }
    return n.memoizedState = [a, t], a;
  }
  function bc(e, t, n) {
    return n === void 0 || (Zn & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = n, e = Ch(), xe.lanes |= e, In |= e, n);
  }
  function wm(e, t, n, a) {
    return Ct(n, t) ? n : da.current !== null ? (e = bc(e, n, a), Ct(e, t) || (lt = !0), e) : (Zn & 42) === 0 ? (lt = !0, e.memoizedState = n) : (e = Ch(), xe.lanes |= e, In |= e, t);
  }
  function Am(e, t, n, a, i) {
    var c = P.p;
    P.p = c !== 0 && 8 > c ? c : 8;
    var v = D.T, b = {};
    D.T = b, Ec(e, !1, t, n);
    try {
      var M = i(), L = D.S;
      if (L !== null && L(b, M), M !== null && typeof M == "object" && typeof M.then == "function") {
        var Q = dy(
          M,
          a
        );
        Rr(
          e,
          t,
          Q,
          _t(e)
        );
      } else
        Rr(
          e,
          t,
          a,
          _t(e)
        );
    } catch (F) {
      Rr(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: F },
        _t()
      );
    } finally {
      P.p = c, D.T = v;
    }
  }
  function gy() {
  }
  function xc(e, t, n, a) {
    if (e.tag !== 5) throw Error(o(476));
    var i = Cm(e).queue;
    Am(
      e,
      i,
      t,
      k,
      n === null ? gy : function() {
        return Rm(e), n(a);
      }
    );
  }
  function Cm(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: k,
      baseState: k,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: En,
        lastRenderedState: k
      },
      next: null
    };
    var n = {};
    return t.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: En,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Rm(e) {
    var t = Cm(e).next.queue;
    Rr(e, t, {}, _t());
  }
  function Sc() {
    return mt(Xr);
  }
  function Mm() {
    return $e().memoizedState;
  }
  function Om() {
    return $e().memoizedState;
  }
  function yy(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = _t();
          e = Xn(n);
          var a = Qn(t, e, n);
          a !== null && (Nt(a, t, n), xr(a, t, n)), t = { cache: $u() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function by(e, t, n) {
    var a = _t();
    n = {
      lane: a,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, eo(e) ? _m(t, n) : (n = Yu(e, t, n, a), n !== null && (Nt(n, e, a), Nm(n, t, a)));
  }
  function Tm(e, t, n) {
    var a = _t();
    Rr(e, t, n, a);
  }
  function Rr(e, t, n, a) {
    var i = {
      lane: a,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (eo(e)) _m(t, i);
    else {
      var c = e.alternate;
      if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null))
        try {
          var v = t.lastRenderedState, b = c(v, n);
          if (i.hasEagerState = !0, i.eagerState = b, Ct(b, v))
            return Bi(e, t, i, 0), Ye === null && Li(), !1;
        } catch {
        } finally {
        }
      if (n = Yu(e, t, i, a), n !== null)
        return Nt(n, e, a), Nm(n, t, a), !0;
    }
    return !1;
  }
  function Ec(e, t, n, a) {
    if (a = {
      lane: 2,
      revertLane: es(),
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, eo(e)) {
      if (t) throw Error(o(479));
    } else
      t = Yu(
        e,
        n,
        a,
        2
      ), t !== null && Nt(t, e, 2);
  }
  function eo(e) {
    var t = e.alternate;
    return e === xe || t !== null && t === xe;
  }
  function _m(e, t) {
    ma = Pi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Nm(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Ia(e, n);
    }
  }
  var to = {
    readContext: mt,
    use: Ji,
    useCallback: Pe,
    useContext: Pe,
    useEffect: Pe,
    useImperativeHandle: Pe,
    useLayoutEffect: Pe,
    useInsertionEffect: Pe,
    useMemo: Pe,
    useReducer: Pe,
    useRef: Pe,
    useState: Pe,
    useDebugValue: Pe,
    useDeferredValue: Pe,
    useTransition: Pe,
    useSyncExternalStore: Pe,
    useId: Pe,
    useHostTransitionStatus: Pe,
    useFormState: Pe,
    useActionState: Pe,
    useOptimistic: Pe,
    useMemoCache: Pe,
    useCacheRefresh: Pe
  }, Dm = {
    readContext: mt,
    use: Ji,
    useCallback: function(e, t) {
      return St().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: mt,
    useEffect: pm,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, Ii(
        4194308,
        4,
        bm.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return Ii(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Ii(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = St();
      t = t === void 0 ? null : t;
      var a = e();
      if (_l) {
        en(!0);
        try {
          e();
        } finally {
          en(!1);
        }
      }
      return n.memoizedState = [a, t], a;
    },
    useReducer: function(e, t, n) {
      var a = St();
      if (n !== void 0) {
        var i = n(t);
        if (_l) {
          en(!0);
          try {
            n(t);
          } finally {
            en(!1);
          }
        }
      } else i = t;
      return a.memoizedState = a.baseState = i, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: i
      }, a.queue = e, e = e.dispatch = by.bind(
        null,
        xe,
        e
      ), [a.memoizedState, e];
    },
    useRef: function(e) {
      var t = St();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = vc(e);
      var t = e.queue, n = Tm.bind(null, xe, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: yc,
    useDeferredValue: function(e, t) {
      var n = St();
      return bc(n, e, t);
    },
    useTransition: function() {
      var e = vc(!1);
      return e = Am.bind(
        null,
        xe,
        e.queue,
        !0,
        !1
      ), St().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var a = xe, i = St();
      if (Ne) {
        if (n === void 0)
          throw Error(o(407));
        n = n();
      } else {
        if (n = t(), Ye === null)
          throw Error(o(349));
        (Oe & 124) !== 0 || Id(a, t, n);
      }
      i.memoizedState = n;
      var c = { value: n, getSnapshot: t };
      return i.queue = c, pm(tm.bind(null, a, c, e), [
        e
      ]), a.flags |= 2048, pa(
        9,
        Wi(),
        em.bind(
          null,
          a,
          c,
          n,
          t
        ),
        null
      ), n;
    },
    useId: function() {
      var e = St(), t = Ye.identifierPrefix;
      if (Ne) {
        var n = bn, a = yn;
        n = (a & ~(1 << 32 - it(a) - 1)).toString(32) + n, t = "«" + t + "R" + n, n = Fi++, 0 < n && (t += "H" + n.toString(32)), t += "»";
      } else
        n = my++, t = "«" + t + "r" + n.toString(32) + "»";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Sc,
    useFormState: sm,
    useActionState: sm,
    useOptimistic: function(e) {
      var t = St();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = Ec.bind(
        null,
        xe,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: mc,
    useCacheRefresh: function() {
      return St().memoizedState = yy.bind(
        null,
        xe
      );
    }
  }, jm = {
    readContext: mt,
    use: Ji,
    useCallback: Sm,
    useContext: mt,
    useEffect: vm,
    useImperativeHandle: xm,
    useInsertionEffect: gm,
    useLayoutEffect: ym,
    useMemo: Em,
    useReducer: $i,
    useRef: hm,
    useState: function() {
      return $i(En);
    },
    useDebugValue: yc,
    useDeferredValue: function(e, t) {
      var n = $e();
      return wm(
        n,
        Ue.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = $i(En)[0], t = $e().memoizedState;
      return [
        typeof e == "boolean" ? e : Ar(e),
        t
      ];
    },
    useSyncExternalStore: Wd,
    useId: Mm,
    useHostTransitionStatus: Sc,
    useFormState: fm,
    useActionState: fm,
    useOptimistic: function(e, t) {
      var n = $e();
      return am(n, Ue, e, t);
    },
    useMemoCache: mc,
    useCacheRefresh: Om
  }, xy = {
    readContext: mt,
    use: Ji,
    useCallback: Sm,
    useContext: mt,
    useEffect: vm,
    useImperativeHandle: xm,
    useInsertionEffect: gm,
    useLayoutEffect: ym,
    useMemo: Em,
    useReducer: pc,
    useRef: hm,
    useState: function() {
      return pc(En);
    },
    useDebugValue: yc,
    useDeferredValue: function(e, t) {
      var n = $e();
      return Ue === null ? bc(n, e, t) : wm(
        n,
        Ue.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = pc(En)[0], t = $e().memoizedState;
      return [
        typeof e == "boolean" ? e : Ar(e),
        t
      ];
    },
    useSyncExternalStore: Wd,
    useId: Mm,
    useHostTransitionStatus: Sc,
    useFormState: mm,
    useActionState: mm,
    useOptimistic: function(e, t) {
      var n = $e();
      return Ue !== null ? am(n, Ue, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: mc,
    useCacheRefresh: Om
  }, va = null, Mr = 0;
  function no(e) {
    var t = Mr;
    return Mr += 1, va === null && (va = []), Xd(va, e, t);
  }
  function Or(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function lo(e, t) {
    throw t.$$typeof === y ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function zm(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Um(e) {
    function t(N, _) {
      if (e) {
        var U = N.deletions;
        U === null ? (N.deletions = [_], N.flags |= 16) : U.push(_);
      }
    }
    function n(N, _) {
      if (!e) return null;
      for (; _ !== null; )
        t(N, _), _ = _.sibling;
      return null;
    }
    function a(N) {
      for (var _ = /* @__PURE__ */ new Map(); N !== null; )
        N.key !== null ? _.set(N.key, N) : _.set(N.index, N), N = N.sibling;
      return _;
    }
    function i(N, _) {
      return N = gn(N, _), N.index = 0, N.sibling = null, N;
    }
    function c(N, _, U) {
      return N.index = U, e ? (U = N.alternate, U !== null ? (U = U.index, U < _ ? (N.flags |= 67108866, _) : U) : (N.flags |= 67108866, _)) : (N.flags |= 1048576, _);
    }
    function v(N) {
      return e && N.alternate === null && (N.flags |= 67108866), N;
    }
    function b(N, _, U, K) {
      return _ === null || _.tag !== 6 ? (_ = Vu(U, N.mode, K), _.return = N, _) : (_ = i(_, U), _.return = N, _);
    }
    function M(N, _, U, K) {
      var re = U.type;
      return re === R ? Q(
        N,
        _,
        U.props.children,
        K,
        U.key
      ) : _ !== null && (_.elementType === re || typeof re == "object" && re !== null && re.$$typeof === V && zm(re) === _.type) ? (_ = i(_, U.props), Or(_, U), _.return = N, _) : (_ = Hi(
        U.type,
        U.key,
        U.props,
        null,
        N.mode,
        K
      ), Or(_, U), _.return = N, _);
    }
    function L(N, _, U, K) {
      return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== U.containerInfo || _.stateNode.implementation !== U.implementation ? (_ = Xu(U, N.mode, K), _.return = N, _) : (_ = i(_, U.children || []), _.return = N, _);
    }
    function Q(N, _, U, K, re) {
      return _ === null || _.tag !== 7 ? (_ = El(
        U,
        N.mode,
        K,
        re
      ), _.return = N, _) : (_ = i(_, U), _.return = N, _);
    }
    function F(N, _, U) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
        return _ = Vu(
          "" + _,
          N.mode,
          U
        ), _.return = N, _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case S:
            return U = Hi(
              _.type,
              _.key,
              _.props,
              null,
              N.mode,
              U
            ), Or(U, _), U.return = N, U;
          case w:
            return _ = Xu(
              _,
              N.mode,
              U
            ), _.return = N, _;
          case V:
            var K = _._init;
            return _ = K(_._payload), F(N, _, U);
        }
        if (ce(_) || ae(_))
          return _ = El(
            _,
            N.mode,
            U,
            null
          ), _.return = N, _;
        if (typeof _.then == "function")
          return F(N, no(_), U);
        if (_.$$typeof === z)
          return F(
            N,
            Vi(N, _),
            U
          );
        lo(N, _);
      }
      return null;
    }
    function B(N, _, U, K) {
      var re = _ !== null ? _.key : null;
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
        return re !== null ? null : b(N, _, "" + U, K);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case S:
            return U.key === re ? M(N, _, U, K) : null;
          case w:
            return U.key === re ? L(N, _, U, K) : null;
          case V:
            return re = U._init, U = re(U._payload), B(N, _, U, K);
        }
        if (ce(U) || ae(U))
          return re !== null ? null : Q(N, _, U, K, null);
        if (typeof U.then == "function")
          return B(
            N,
            _,
            no(U),
            K
          );
        if (U.$$typeof === z)
          return B(
            N,
            _,
            Vi(N, U),
            K
          );
        lo(N, U);
      }
      return null;
    }
    function H(N, _, U, K, re) {
      if (typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint")
        return N = N.get(U) || null, b(_, N, "" + K, re);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case S:
            return N = N.get(
              K.key === null ? U : K.key
            ) || null, M(_, N, K, re);
          case w:
            return N = N.get(
              K.key === null ? U : K.key
            ) || null, L(_, N, K, re);
          case V:
            var Ee = K._init;
            return K = Ee(K._payload), H(
              N,
              _,
              U,
              K,
              re
            );
        }
        if (ce(K) || ae(K))
          return N = N.get(U) || null, Q(_, N, K, re, null);
        if (typeof K.then == "function")
          return H(
            N,
            _,
            U,
            no(K),
            re
          );
        if (K.$$typeof === z)
          return H(
            N,
            _,
            U,
            Vi(_, K),
            re
          );
        lo(_, K);
      }
      return null;
    }
    function ye(N, _, U, K) {
      for (var re = null, Ee = null, fe = _, pe = _ = 0, rt = null; fe !== null && pe < U.length; pe++) {
        fe.index > pe ? (rt = fe, fe = null) : rt = fe.sibling;
        var _e = B(
          N,
          fe,
          U[pe],
          K
        );
        if (_e === null) {
          fe === null && (fe = rt);
          break;
        }
        e && fe && _e.alternate === null && t(N, fe), _ = c(_e, _, pe), Ee === null ? re = _e : Ee.sibling = _e, Ee = _e, fe = rt;
      }
      if (pe === U.length)
        return n(N, fe), Ne && Al(N, pe), re;
      if (fe === null) {
        for (; pe < U.length; pe++)
          fe = F(N, U[pe], K), fe !== null && (_ = c(
            fe,
            _,
            pe
          ), Ee === null ? re = fe : Ee.sibling = fe, Ee = fe);
        return Ne && Al(N, pe), re;
      }
      for (fe = a(fe); pe < U.length; pe++)
        rt = H(
          fe,
          N,
          pe,
          U[pe],
          K
        ), rt !== null && (e && rt.alternate !== null && fe.delete(
          rt.key === null ? pe : rt.key
        ), _ = c(
          rt,
          _,
          pe
        ), Ee === null ? re = rt : Ee.sibling = rt, Ee = rt);
      return e && fe.forEach(function(ul) {
        return t(N, ul);
      }), Ne && Al(N, pe), re;
    }
    function he(N, _, U, K) {
      if (U == null) throw Error(o(151));
      for (var re = null, Ee = null, fe = _, pe = _ = 0, rt = null, _e = U.next(); fe !== null && !_e.done; pe++, _e = U.next()) {
        fe.index > pe ? (rt = fe, fe = null) : rt = fe.sibling;
        var ul = B(N, fe, _e.value, K);
        if (ul === null) {
          fe === null && (fe = rt);
          break;
        }
        e && fe && ul.alternate === null && t(N, fe), _ = c(ul, _, pe), Ee === null ? re = ul : Ee.sibling = ul, Ee = ul, fe = rt;
      }
      if (_e.done)
        return n(N, fe), Ne && Al(N, pe), re;
      if (fe === null) {
        for (; !_e.done; pe++, _e = U.next())
          _e = F(N, _e.value, K), _e !== null && (_ = c(_e, _, pe), Ee === null ? re = _e : Ee.sibling = _e, Ee = _e);
        return Ne && Al(N, pe), re;
      }
      for (fe = a(fe); !_e.done; pe++, _e = U.next())
        _e = H(fe, N, pe, _e.value, K), _e !== null && (e && _e.alternate !== null && fe.delete(_e.key === null ? pe : _e.key), _ = c(_e, _, pe), Ee === null ? re = _e : Ee.sibling = _e, Ee = _e);
      return e && fe.forEach(function(Sb) {
        return t(N, Sb);
      }), Ne && Al(N, pe), re;
    }
    function Be(N, _, U, K) {
      if (typeof U == "object" && U !== null && U.type === R && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case S:
            e: {
              for (var re = U.key; _ !== null; ) {
                if (_.key === re) {
                  if (re = U.type, re === R) {
                    if (_.tag === 7) {
                      n(
                        N,
                        _.sibling
                      ), K = i(
                        _,
                        U.props.children
                      ), K.return = N, N = K;
                      break e;
                    }
                  } else if (_.elementType === re || typeof re == "object" && re !== null && re.$$typeof === V && zm(re) === _.type) {
                    n(
                      N,
                      _.sibling
                    ), K = i(_, U.props), Or(K, U), K.return = N, N = K;
                    break e;
                  }
                  n(N, _);
                  break;
                } else t(N, _);
                _ = _.sibling;
              }
              U.type === R ? (K = El(
                U.props.children,
                N.mode,
                K,
                U.key
              ), K.return = N, N = K) : (K = Hi(
                U.type,
                U.key,
                U.props,
                null,
                N.mode,
                K
              ), Or(K, U), K.return = N, N = K);
            }
            return v(N);
          case w:
            e: {
              for (re = U.key; _ !== null; ) {
                if (_.key === re)
                  if (_.tag === 4 && _.stateNode.containerInfo === U.containerInfo && _.stateNode.implementation === U.implementation) {
                    n(
                      N,
                      _.sibling
                    ), K = i(_, U.children || []), K.return = N, N = K;
                    break e;
                  } else {
                    n(N, _);
                    break;
                  }
                else t(N, _);
                _ = _.sibling;
              }
              K = Xu(U, N.mode, K), K.return = N, N = K;
            }
            return v(N);
          case V:
            return re = U._init, U = re(U._payload), Be(
              N,
              _,
              U,
              K
            );
        }
        if (ce(U))
          return ye(
            N,
            _,
            U,
            K
          );
        if (ae(U)) {
          if (re = ae(U), typeof re != "function") throw Error(o(150));
          return U = re.call(U), he(
            N,
            _,
            U,
            K
          );
        }
        if (typeof U.then == "function")
          return Be(
            N,
            _,
            no(U),
            K
          );
        if (U.$$typeof === z)
          return Be(
            N,
            _,
            Vi(N, U),
            K
          );
        lo(N, U);
      }
      return typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint" ? (U = "" + U, _ !== null && _.tag === 6 ? (n(N, _.sibling), K = i(_, U), K.return = N, N = K) : (n(N, _), K = Vu(U, N.mode, K), K.return = N, N = K), v(N)) : n(N, _);
    }
    return function(N, _, U, K) {
      try {
        Mr = 0;
        var re = Be(
          N,
          _,
          U,
          K
        );
        return va = null, re;
      } catch (fe) {
        if (fe === yr || fe === Qi) throw fe;
        var Ee = Rt(29, fe, null, N.mode);
        return Ee.lanes = K, Ee.return = N, Ee;
      } finally {
      }
    };
  }
  var ga = Um(!0), Lm = Um(!1), Gt = G(null), nn = null;
  function Kn(e) {
    var t = e.alternate;
    $(et, et.current & 1), $(Gt, e), nn === null && (t === null || da.current !== null || t.memoizedState !== null) && (nn = e);
  }
  function Bm(e) {
    if (e.tag === 22) {
      if ($(et, et.current), $(Gt, e), nn === null) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (nn = e);
      }
    } else Pn();
  }
  function Pn() {
    $(et, et.current), $(Gt, Gt.current);
  }
  function wn(e) {
    J(Gt), nn === e && (nn = null), J(et);
  }
  var et = G(0);
  function ao(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || ds(n)))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  function wc(e, t, n, a) {
    t = e.memoizedState, n = n(a, t), n = n == null ? t : g({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Ac = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var a = _t(), i = Xn(a);
      i.payload = t, n != null && (i.callback = n), t = Qn(e, i, a), t !== null && (Nt(t, e, a), xr(t, e, a));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var a = _t(), i = Xn(a);
      i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Qn(e, i, a), t !== null && (Nt(t, e, a), xr(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = _t(), a = Xn(n);
      a.tag = 2, t != null && (a.callback = t), t = Qn(e, a, n), t !== null && (Nt(t, e, n), xr(t, e, n));
    }
  };
  function km(e, t, n, a, i, c, v) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, c, v) : t.prototype && t.prototype.isPureReactComponent ? !sr(n, a) || !sr(i, c) : !0;
  }
  function Hm(e, t, n, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && Ac.enqueueReplaceState(t, t.state, null);
  }
  function Nl(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var a in t)
        a !== "ref" && (n[a] = t[a]);
    }
    if (e = e.defaultProps) {
      n === t && (n = g({}, n));
      for (var i in e)
        n[i] === void 0 && (n[i] = e[i]);
    }
    return n;
  }
  var ro = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  };
  function Gm(e) {
    ro(e);
  }
  function Ym(e) {
    console.error(e);
  }
  function qm(e) {
    ro(e);
  }
  function io(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Vm(e, t, n) {
    try {
      var a = e.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function Cc(e, t, n) {
    return n = Xn(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      io(e, t);
    }, n;
  }
  function Xm(e) {
    return e = Xn(e), e.tag = 3, e;
  }
  function Qm(e, t, n, a) {
    var i = n.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var c = a.value;
      e.payload = function() {
        return i(c);
      }, e.callback = function() {
        Vm(t, n, a);
      };
    }
    var v = n.stateNode;
    v !== null && typeof v.componentDidCatch == "function" && (e.callback = function() {
      Vm(t, n, a), typeof i != "function" && (el === null ? el = /* @__PURE__ */ new Set([this]) : el.add(this));
      var b = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: b !== null ? b : ""
      });
    });
  }
  function Sy(e, t, n, a, i) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = n.alternate, t !== null && pr(
        t,
        n,
        i,
        !0
      ), n = Gt.current, n !== null) {
        switch (n.tag) {
          case 13:
            return nn === null ? Fc() : n.alternate === null && Ke === 0 && (Ke = 3), n.flags &= -257, n.flags |= 65536, n.lanes = i, a === ec ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), $c(e, a, i)), !1;
          case 22:
            return n.flags |= 65536, a === ec ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), $c(e, a, i)), !1;
        }
        throw Error(o(435, n.tag));
      }
      return $c(e, a, i), Fc(), !1;
    }
    if (Ne)
      return t = Gt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = i, a !== Ku && (e = Error(o(422), { cause: a }), hr(Lt(e, n)))) : (a !== Ku && (t = Error(o(423), {
        cause: a
      }), hr(
        Lt(t, n)
      )), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, a = Lt(a, n), i = Cc(
        e.stateNode,
        a,
        i
      ), lc(e, i), Ke !== 4 && (Ke = 2)), !1;
    var c = Error(o(520), { cause: a });
    if (c = Lt(c, n), Ur === null ? Ur = [c] : Ur.push(c), Ke !== 4 && (Ke = 2), t === null) return !0;
    a = Lt(a, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = i & -i, n.lanes |= e, e = Cc(n.stateNode, a, e), lc(n, e), !1;
        case 1:
          if (t = n.type, c = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (el === null || !el.has(c))))
            return n.flags |= 65536, i &= -i, n.lanes |= i, i = Xm(i), Qm(
              i,
              e,
              n,
              a
            ), lc(n, i), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Zm = Error(o(461)), lt = !1;
  function ot(e, t, n, a) {
    t.child = e === null ? Lm(t, null, n, a) : ga(
      t,
      e.child,
      n,
      a
    );
  }
  function Km(e, t, n, a, i) {
    n = n.render;
    var c = t.ref;
    if ("ref" in a) {
      var v = {};
      for (var b in a)
        b !== "ref" && (v[b] = a[b]);
    } else v = a;
    return Ol(t), a = uc(
      e,
      t,
      n,
      v,
      c,
      i
    ), b = cc(), e !== null && !lt ? (sc(e, t, i), An(e, t, i)) : (Ne && b && Qu(t), t.flags |= 1, ot(e, t, a, i), t.child);
  }
  function Pm(e, t, n, a, i) {
    if (e === null) {
      var c = n.type;
      return typeof c == "function" && !qu(c) && c.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = c, Fm(
        e,
        t,
        c,
        a,
        i
      )) : (e = Hi(
        n.type,
        null,
        a,
        t,
        t.mode,
        i
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (c = e.child, !jc(e, i)) {
      var v = c.memoizedProps;
      if (n = n.compare, n = n !== null ? n : sr, n(v, a) && e.ref === t.ref)
        return An(e, t, i);
    }
    return t.flags |= 1, e = gn(c, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Fm(e, t, n, a, i) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (sr(c, a) && e.ref === t.ref)
        if (lt = !1, t.pendingProps = a = c, jc(e, i))
          (e.flags & 131072) !== 0 && (lt = !0);
        else
          return t.lanes = e.lanes, An(e, t, i);
    }
    return Rc(
      e,
      t,
      n,
      a,
      i
    );
  }
  function Jm(e, t, n) {
    var a = t.pendingProps, i = a.children, c = e !== null ? e.memoizedState : null;
    if (a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (a = c !== null ? c.baseLanes | n : n, e !== null) {
          for (i = t.child = e.child, c = 0; i !== null; )
            c = c | i.lanes | i.childLanes, i = i.sibling;
          t.childLanes = c & ~a;
        } else t.childLanes = 0, t.child = null;
        return $m(
          e,
          t,
          a,
          n
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Xi(
          t,
          c !== null ? c.cachePool : null
        ), c !== null ? Fd(t, c) : rc(), Bm(t);
      else
        return t.lanes = t.childLanes = 536870912, $m(
          e,
          t,
          c !== null ? c.baseLanes | n : n,
          n
        );
    } else
      c !== null ? (Xi(t, c.cachePool), Fd(t, c), Pn(), t.memoizedState = null) : (e !== null && Xi(t, null), rc(), Pn());
    return ot(e, t, i, n), t.child;
  }
  function $m(e, t, n, a) {
    var i = Iu();
    return i = i === null ? null : { parent: Ie._currentValue, pool: i }, t.memoizedState = {
      baseLanes: n,
      cachePool: i
    }, e !== null && Xi(t, null), rc(), Bm(t), e !== null && pr(e, t, a, !0), null;
  }
  function oo(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(o(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Rc(e, t, n, a, i) {
    return Ol(t), n = uc(
      e,
      t,
      n,
      a,
      void 0,
      i
    ), a = cc(), e !== null && !lt ? (sc(e, t, i), An(e, t, i)) : (Ne && a && Qu(t), t.flags |= 1, ot(e, t, n, i), t.child);
  }
  function Wm(e, t, n, a, i, c) {
    return Ol(t), t.updateQueue = null, n = $d(
      t,
      a,
      n,
      i
    ), Jd(e), a = cc(), e !== null && !lt ? (sc(e, t, c), An(e, t, c)) : (Ne && a && Qu(t), t.flags |= 1, ot(e, t, n, c), t.child);
  }
  function Im(e, t, n, a, i) {
    if (Ol(t), t.stateNode === null) {
      var c = oa, v = n.contextType;
      typeof v == "object" && v !== null && (c = mt(v)), c = new n(a, c), t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = Ac, t.stateNode = c, c._reactInternals = t, c = t.stateNode, c.props = a, c.state = t.memoizedState, c.refs = {}, tc(t), v = n.contextType, c.context = typeof v == "object" && v !== null ? mt(v) : oa, c.state = t.memoizedState, v = n.getDerivedStateFromProps, typeof v == "function" && (wc(
        t,
        n,
        v,
        a
      ), c.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (v = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), v !== c.state && Ac.enqueueReplaceState(c, c.state, null), Er(t, a, c, i), Sr(), c.state = t.memoizedState), typeof c.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      c = t.stateNode;
      var b = t.memoizedProps, M = Nl(n, b);
      c.props = M;
      var L = c.context, Q = n.contextType;
      v = oa, typeof Q == "object" && Q !== null && (v = mt(Q));
      var F = n.getDerivedStateFromProps;
      Q = typeof F == "function" || typeof c.getSnapshotBeforeUpdate == "function", b = t.pendingProps !== b, Q || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (b || L !== v) && Hm(
        t,
        c,
        a,
        v
      ), Vn = !1;
      var B = t.memoizedState;
      c.state = B, Er(t, a, c, i), Sr(), L = t.memoizedState, b || B !== L || Vn ? (typeof F == "function" && (wc(
        t,
        n,
        F,
        a
      ), L = t.memoizedState), (M = Vn || km(
        t,
        n,
        M,
        a,
        B,
        L,
        v
      )) ? (Q || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = L), c.props = a, c.state = L, c.context = v, a = M) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      c = t.stateNode, nc(e, t), v = t.memoizedProps, Q = Nl(n, v), c.props = Q, F = t.pendingProps, B = c.context, L = n.contextType, M = oa, typeof L == "object" && L !== null && (M = mt(L)), b = n.getDerivedStateFromProps, (L = typeof b == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (v !== F || B !== M) && Hm(
        t,
        c,
        a,
        M
      ), Vn = !1, B = t.memoizedState, c.state = B, Er(t, a, c, i), Sr();
      var H = t.memoizedState;
      v !== F || B !== H || Vn || e !== null && e.dependencies !== null && qi(e.dependencies) ? (typeof b == "function" && (wc(
        t,
        n,
        b,
        a
      ), H = t.memoizedState), (Q = Vn || km(
        t,
        n,
        Q,
        a,
        B,
        H,
        M
      ) || e !== null && e.dependencies !== null && qi(e.dependencies)) ? (L || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(a, H, M), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(
        a,
        H,
        M
      )), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || v === e.memoizedProps && B === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && B === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = H), c.props = a, c.state = H, c.context = M, a = Q) : (typeof c.componentDidUpdate != "function" || v === e.memoizedProps && B === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && B === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return c = a, oo(e, t), a = (t.flags & 128) !== 0, c || a ? (c = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : c.render(), t.flags |= 1, e !== null && a ? (t.child = ga(
      t,
      e.child,
      null,
      i
    ), t.child = ga(
      t,
      null,
      n,
      i
    )) : ot(e, t, n, i), t.memoizedState = c.state, e = t.child) : e = An(
      e,
      t,
      i
    ), e;
  }
  function eh(e, t, n, a) {
    return mr(), t.flags |= 256, ot(e, t, n, a), t.child;
  }
  var Mc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Oc(e) {
    return { baseLanes: e, cachePool: Yd() };
  }
  function Tc(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Yt), e;
  }
  function th(e, t, n) {
    var a = t.pendingProps, i = !1, c = (t.flags & 128) !== 0, v;
    if ((v = c) || (v = e !== null && e.memoizedState === null ? !1 : (et.current & 2) !== 0), v && (i = !0, t.flags &= -129), v = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ne) {
        if (i ? Kn(t) : Pn(), Ne) {
          var b = Ze, M;
          if (M = b) {
            e: {
              for (M = b, b = tn; M.nodeType !== 8; ) {
                if (!b) {
                  b = null;
                  break e;
                }
                if (M = Pt(
                  M.nextSibling
                ), M === null) {
                  b = null;
                  break e;
                }
              }
              b = M;
            }
            b !== null ? (t.memoizedState = {
              dehydrated: b,
              treeContext: wl !== null ? { id: yn, overflow: bn } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, M = Rt(
              18,
              null,
              null,
              0
            ), M.stateNode = b, M.return = t, t.child = M, pt = t, Ze = null, M = !0) : M = !1;
          }
          M || Rl(t);
        }
        if (b = t.memoizedState, b !== null && (b = b.dehydrated, b !== null))
          return ds(b) ? t.lanes = 32 : t.lanes = 536870912, null;
        wn(t);
      }
      return b = a.children, a = a.fallback, i ? (Pn(), i = t.mode, b = uo(
        { mode: "hidden", children: b },
        i
      ), a = El(
        a,
        i,
        n,
        null
      ), b.return = t, a.return = t, b.sibling = a, t.child = b, i = t.child, i.memoizedState = Oc(n), i.childLanes = Tc(
        e,
        v,
        n
      ), t.memoizedState = Mc, a) : (Kn(t), _c(t, b));
    }
    if (M = e.memoizedState, M !== null && (b = M.dehydrated, b !== null)) {
      if (c)
        t.flags & 256 ? (Kn(t), t.flags &= -257, t = Nc(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (Pn(), t.child = e.child, t.flags |= 128, t = null) : (Pn(), i = a.fallback, b = t.mode, a = uo(
          { mode: "visible", children: a.children },
          b
        ), i = El(
          i,
          b,
          n,
          null
        ), i.flags |= 2, a.return = t, i.return = t, a.sibling = i, t.child = a, ga(
          t,
          e.child,
          null,
          n
        ), a = t.child, a.memoizedState = Oc(n), a.childLanes = Tc(
          e,
          v,
          n
        ), t.memoizedState = Mc, t = i);
      else if (Kn(t), ds(b)) {
        if (v = b.nextSibling && b.nextSibling.dataset, v) var L = v.dgst;
        v = L, a = Error(o(419)), a.stack = "", a.digest = v, hr({ value: a, source: null, stack: null }), t = Nc(
          e,
          t,
          n
        );
      } else if (lt || pr(e, t, n, !1), v = (n & e.childLanes) !== 0, lt || v) {
        if (v = Ye, v !== null && (a = n & -n, a = (a & 42) !== 0 ? 1 : Ql(a), a = (a & (v.suspendedLanes | n)) !== 0 ? 0 : a, a !== 0 && a !== M.retryLane))
          throw M.retryLane = a, ia(e, a), Nt(v, e, a), Zm;
        b.data === "$?" || Fc(), t = Nc(
          e,
          t,
          n
        );
      } else
        b.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = M.treeContext, Ze = Pt(
          b.nextSibling
        ), pt = t, Ne = !0, Cl = null, tn = !1, e !== null && (kt[Ht++] = yn, kt[Ht++] = bn, kt[Ht++] = wl, yn = e.id, bn = e.overflow, wl = t), t = _c(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return i ? (Pn(), i = a.fallback, b = t.mode, M = e.child, L = M.sibling, a = gn(M, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = M.subtreeFlags & 65011712, L !== null ? i = gn(L, i) : (i = El(
      i,
      b,
      n,
      null
    ), i.flags |= 2), i.return = t, a.return = t, a.sibling = i, t.child = a, a = i, i = t.child, b = e.child.memoizedState, b === null ? b = Oc(n) : (M = b.cachePool, M !== null ? (L = Ie._currentValue, M = M.parent !== L ? { parent: L, pool: L } : M) : M = Yd(), b = {
      baseLanes: b.baseLanes | n,
      cachePool: M
    }), i.memoizedState = b, i.childLanes = Tc(
      e,
      v,
      n
    ), t.memoizedState = Mc, a) : (Kn(t), n = e.child, e = n.sibling, n = gn(n, {
      mode: "visible",
      children: a.children
    }), n.return = t, n.sibling = null, e !== null && (v = t.deletions, v === null ? (t.deletions = [e], t.flags |= 16) : v.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function _c(e, t) {
    return t = uo(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function uo(e, t) {
    return e = Rt(22, e, null, t), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function Nc(e, t, n) {
    return ga(t, e.child, null, n), e = _c(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function nh(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), Fu(e.return, t, n);
  }
  function Dc(e, t, n, a, i) {
    var c = e.memoizedState;
    c === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: n,
      tailMode: i
    } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = a, c.tail = n, c.tailMode = i);
  }
  function lh(e, t, n) {
    var a = t.pendingProps, i = a.revealOrder, c = a.tail;
    if (ot(e, t, a.children, n), a = et.current, (a & 2) !== 0)
      a = a & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && nh(e, n, t);
          else if (e.tag === 19)
            nh(e, n, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      a &= 1;
    }
    switch ($(et, a), i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          e = n.alternate, e !== null && ao(e) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Dc(
          t,
          !1,
          i,
          n,
          c
        );
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (e = i.alternate, e !== null && ao(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = n, n = i, i = e;
        }
        Dc(
          t,
          !0,
          n,
          null,
          c
        );
        break;
      case "together":
        Dc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function An(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), In |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (pr(
          e,
          t,
          n,
          !1
        ), (n & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, n = gn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = gn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function jc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && qi(e)));
  }
  function Ey(e, t, n) {
    switch (t.tag) {
      case 3:
        ve(t, t.stateNode.containerInfo), qn(t, Ie, e.memoizedState.cache), mr();
        break;
      case 27:
      case 5:
        ke(t);
        break;
      case 4:
        ve(t, t.stateNode.containerInfo);
        break;
      case 10:
        qn(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Kn(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? th(e, t, n) : (Kn(t), e = An(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        Kn(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (a = (n & t.childLanes) !== 0, a || (pr(
          e,
          t,
          n,
          !1
        ), a = (n & t.childLanes) !== 0), i) {
          if (a)
            return lh(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), $(et, et.current), a) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Jm(e, t, n);
      case 24:
        qn(t, Ie, e.memoizedState.cache);
    }
    return An(e, t, n);
  }
  function ah(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        lt = !0;
      else {
        if (!jc(e, n) && (t.flags & 128) === 0)
          return lt = !1, Ey(
            e,
            t,
            n
          );
        lt = (e.flags & 131072) !== 0;
      }
    else
      lt = !1, Ne && (t.flags & 1048576) !== 0 && zd(t, Yi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          e = t.pendingProps;
          var a = t.elementType, i = a._init;
          if (a = i(a._payload), t.type = a, typeof a == "function")
            qu(a) ? (e = Nl(a, e), t.tag = 1, t = Im(
              null,
              t,
              a,
              e,
              n
            )) : (t.tag = 0, t = Rc(
              null,
              t,
              a,
              e,
              n
            ));
          else {
            if (a != null) {
              if (i = a.$$typeof, i === q) {
                t.tag = 11, t = Km(
                  null,
                  t,
                  a,
                  e,
                  n
                );
                break e;
              } else if (i === X) {
                t.tag = 14, t = Pm(
                  null,
                  t,
                  a,
                  e,
                  n
                );
                break e;
              }
            }
            throw t = de(a) || a, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return Rc(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return a = t.type, i = Nl(
          a,
          t.pendingProps
        ), Im(
          e,
          t,
          a,
          i,
          n
        );
      case 3:
        e: {
          if (ve(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          a = t.pendingProps;
          var c = t.memoizedState;
          i = c.element, nc(e, t), Er(t, a, null, n);
          var v = t.memoizedState;
          if (a = v.cache, qn(t, Ie, a), a !== c.cache && Ju(
            t,
            [Ie],
            n,
            !0
          ), Sr(), a = v.element, c.isDehydrated)
            if (c = {
              element: a,
              isDehydrated: !1,
              cache: v.cache
            }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
              t = eh(
                e,
                t,
                a,
                n
              );
              break e;
            } else if (a !== i) {
              i = Lt(
                Error(o(424)),
                t
              ), hr(i), t = eh(
                e,
                t,
                a,
                n
              );
              break e;
            } else {
              switch (e = t.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (Ze = Pt(e.firstChild), pt = t, Ne = !0, Cl = null, tn = !0, n = Lm(
                t,
                null,
                a,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (mr(), a === i) {
              t = An(
                e,
                t,
                n
              );
              break e;
            }
            ot(
              e,
              t,
              a,
              n
            );
          }
          t = t.child;
        }
        return t;
      case 26:
        return oo(e, t), e === null ? (n = up(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Ne || (n = t.type, e = t.pendingProps, a = wo(
          ue.current
        ).createElement(n), a[dt] = t, a[bt] = e, ct(a, n, e), nt(a), t.stateNode = a) : t.memoizedState = up(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return ke(t), e === null && Ne && (a = t.stateNode = rp(
          t.type,
          t.pendingProps,
          ue.current
        ), pt = t, tn = !0, i = Ze, ll(t.type) ? (ms = i, Ze = Pt(
          a.firstChild
        )) : Ze = i), ot(
          e,
          t,
          t.pendingProps.children,
          n
        ), oo(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ne && ((i = a = Ze) && (a = Jy(
          a,
          t.type,
          t.pendingProps,
          tn
        ), a !== null ? (t.stateNode = a, pt = t, Ze = Pt(
          a.firstChild
        ), tn = !1, i = !0) : i = !1), i || Rl(t)), ke(t), i = t.type, c = t.pendingProps, v = e !== null ? e.memoizedProps : null, a = c.children, cs(i, c) ? a = null : v !== null && cs(i, v) && (t.flags |= 32), t.memoizedState !== null && (i = uc(
          e,
          t,
          hy,
          null,
          null,
          n
        ), Xr._currentValue = i), oo(e, t), ot(e, t, a, n), t.child;
      case 6:
        return e === null && Ne && ((e = n = Ze) && (n = $y(
          n,
          t.pendingProps,
          tn
        ), n !== null ? (t.stateNode = n, pt = t, Ze = null, e = !0) : e = !1), e || Rl(t)), null;
      case 13:
        return th(e, t, n);
      case 4:
        return ve(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = ga(
          t,
          null,
          a,
          n
        ) : ot(
          e,
          t,
          a,
          n
        ), t.child;
      case 11:
        return Km(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return ot(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return ot(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return ot(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return a = t.pendingProps, qn(t, t.type, a.value), ot(
          e,
          t,
          a.children,
          n
        ), t.child;
      case 9:
        return i = t.type._context, a = t.pendingProps.children, Ol(t), i = mt(i), a = a(i), t.flags |= 1, ot(e, t, a, n), t.child;
      case 14:
        return Pm(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return Fm(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return lh(e, t, n);
      case 31:
        return a = t.pendingProps, n = t.mode, a = {
          mode: a.mode,
          children: a.children
        }, e === null ? (n = uo(
          a,
          n
        ), n.ref = t.ref, t.child = n, n.return = t, t = n) : (n = gn(e.child, a), n.ref = t.ref, t.child = n, n.return = t, t = n), t;
      case 22:
        return Jm(e, t, n);
      case 24:
        return Ol(t), a = mt(Ie), e === null ? (i = Iu(), i === null && (i = Ye, c = $u(), i.pooledCache = c, c.refCount++, c !== null && (i.pooledCacheLanes |= n), i = c), t.memoizedState = {
          parent: a,
          cache: i
        }, tc(t), qn(t, Ie, i)) : ((e.lanes & n) !== 0 && (nc(e, t), Er(t, null, null, n), Sr()), i = e.memoizedState, c = t.memoizedState, i.parent !== a ? (i = { parent: a, cache: a }, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), qn(t, Ie, a)) : (a = c.cache, qn(t, Ie, a), a !== i.cache && Ju(
          t,
          [Ie],
          n,
          !0
        ))), ot(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function Cn(e) {
    e.flags |= 4;
  }
  function rh(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !mp(t)) {
      if (t = Gt.current, t !== null && ((Oe & 4194048) === Oe ? nn !== null : (Oe & 62914560) !== Oe && (Oe & 536870912) === 0 || t !== nn))
        throw br = ec, qd;
      e.flags |= 8192;
    }
  }
  function co(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Ei() : 536870912, e.lanes |= t, Sa |= t);
  }
  function Tr(e, t) {
    if (!Ne)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var a = null; n !== null; )
            n.alternate !== null && (a = n), n = n.sibling;
          a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
      }
  }
  function Ve(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, a = 0;
    if (t)
      for (var i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, a |= i.subtreeFlags & 65011712, a |= i.flags & 65011712, i.return = e, i = i.sibling;
    else
      for (i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, a |= i.subtreeFlags, a |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= a, e.childLanes = n, t;
  }
  function wy(e, t, n) {
    var a = t.pendingProps;
    switch (Zu(t), t.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ve(t), null;
      case 1:
        return Ve(t), null;
      case 3:
        return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Sn(Ie), Ce(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (dr(t) ? Cn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Bd())), Ve(t), null;
      case 26:
        return n = t.memoizedState, e === null ? (Cn(t), n !== null ? (Ve(t), rh(t, n)) : (Ve(t), t.flags &= -16777217)) : n ? n !== e.memoizedState ? (Cn(t), Ve(t), rh(t, n)) : (Ve(t), t.flags &= -16777217) : (e.memoizedProps !== a && Cn(t), Ve(t), t.flags &= -16777217), null;
      case 27:
        Me(t), n = ue.current;
        var i = t.type;
        if (e !== null && t.stateNode != null)
          e.memoizedProps !== a && Cn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Ve(t), null;
          }
          e = ee.current, dr(t) ? Ud(t) : (e = rp(i, a, n), t.stateNode = e, Cn(t));
        }
        return Ve(t), null;
      case 5:
        if (Me(t), n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && Cn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Ve(t), null;
          }
          if (e = ee.current, dr(t))
            Ud(t);
          else {
            switch (i = wo(
              ue.current
            ), e) {
              case 1:
                e = i.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                e = i.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    e = i.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    e = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                    break;
                  case "select":
                    e = typeof a.is == "string" ? i.createElement("select", { is: a.is }) : i.createElement("select"), a.multiple ? e.multiple = !0 : a.size && (e.size = a.size);
                    break;
                  default:
                    e = typeof a.is == "string" ? i.createElement(n, { is: a.is }) : i.createElement(n);
                }
            }
            e[dt] = t, e[bt] = a;
            e: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6)
                e.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === t) break e;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t)
                  break e;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            t.stateNode = e;
            e: switch (ct(e, n, a), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!a.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && Cn(t);
          }
        }
        return Ve(t), t.flags &= -16777217, null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== a && Cn(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(o(166));
          if (e = ue.current, dr(t)) {
            if (e = t.stateNode, n = t.memoizedProps, a = null, i = pt, i !== null)
              switch (i.tag) {
                case 27:
                case 5:
                  a = i.memoizedProps;
              }
            e[dt] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || Wh(e.nodeValue, n)), e || Rl(t);
          } else
            e = wo(e).createTextNode(
              a
            ), e[dt] = t, t.stateNode = e;
        }
        return Ve(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (i = dr(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(o(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(o(317));
              i[dt] = t;
            } else
              mr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ve(t), i = !1;
          } else
            i = Bd(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
          if (!i)
            return t.flags & 256 ? (wn(t), t) : (wn(t), null);
        }
        if (wn(t), (t.flags & 128) !== 0)
          return t.lanes = n, t;
        if (n = a !== null, e = e !== null && e.memoizedState !== null, n) {
          a = t.child, i = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (i = a.alternate.memoizedState.cachePool.pool);
          var c = null;
          a.memoizedState !== null && a.memoizedState.cachePool !== null && (c = a.memoizedState.cachePool.pool), c !== i && (a.flags |= 2048);
        }
        return n !== e && n && (t.child.flags |= 8192), co(t, t.updateQueue), Ve(t), null;
      case 4:
        return Ce(), e === null && as(t.stateNode.containerInfo), Ve(t), null;
      case 10:
        return Sn(t.type), Ve(t), null;
      case 19:
        if (J(et), i = t.memoizedState, i === null) return Ve(t), null;
        if (a = (t.flags & 128) !== 0, c = i.rendering, c === null)
          if (a) Tr(i, !1);
          else {
            if (Ke !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (c = ao(e), c !== null) {
                  for (t.flags |= 128, Tr(i, !1), e = c.updateQueue, t.updateQueue = e, co(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    jd(n, e), n = n.sibling;
                  return $(
                    et,
                    et.current & 1 | 2
                  ), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null && Qe() > mo && (t.flags |= 128, a = !0, Tr(i, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = ao(c), e !== null) {
              if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, co(t, e), Tr(i, !0), i.tail === null && i.tailMode === "hidden" && !c.alternate && !Ne)
                return Ve(t), null;
            } else
              2 * Qe() - i.renderingStartTime > mo && n !== 536870912 && (t.flags |= 128, a = !0, Tr(i, !1), t.lanes = 4194304);
          i.isBackwards ? (c.sibling = t.child, t.child = c) : (e = i.last, e !== null ? e.sibling = c : t.child = c, i.last = c);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Qe(), t.sibling = null, e = et.current, $(et, a ? e & 1 | 2 : e & 1), t) : (Ve(t), null);
      case 22:
      case 23:
        return wn(t), ic(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ve(t), n = t.updateQueue, n !== null && co(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && J(Tl), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Sn(Ie), Ve(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Ay(e, t) {
    switch (Zu(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Sn(Ie), Ce(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Me(t), null;
      case 13:
        if (wn(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          mr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return J(et), null;
      case 4:
        return Ce(), null;
      case 10:
        return Sn(t.type), null;
      case 22:
      case 23:
        return wn(t), ic(), e !== null && J(Tl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Sn(Ie), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ih(e, t) {
    switch (Zu(t), t.tag) {
      case 3:
        Sn(Ie), Ce();
        break;
      case 26:
      case 27:
      case 5:
        Me(t);
        break;
      case 4:
        Ce();
        break;
      case 13:
        wn(t);
        break;
      case 19:
        J(et);
        break;
      case 10:
        Sn(t.type);
        break;
      case 22:
      case 23:
        wn(t), ic(), e !== null && J(Tl);
        break;
      case 24:
        Sn(Ie);
    }
  }
  function _r(e, t) {
    try {
      var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var i = a.next;
        n = i;
        do {
          if ((n.tag & e) === e) {
            a = void 0;
            var c = n.create, v = n.inst;
            a = c(), v.destroy = a;
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (b) {
      Ge(t, t.return, b);
    }
  }
  function Fn(e, t, n) {
    try {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var c = i.next;
        a = c;
        do {
          if ((a.tag & e) === e) {
            var v = a.inst, b = v.destroy;
            if (b !== void 0) {
              v.destroy = void 0, i = t;
              var M = n, L = b;
              try {
                L();
              } catch (Q) {
                Ge(
                  i,
                  M,
                  Q
                );
              }
            }
          }
          a = a.next;
        } while (a !== c);
      }
    } catch (Q) {
      Ge(t, t.return, Q);
    }
  }
  function oh(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Pd(t, n);
      } catch (a) {
        Ge(e, e.return, a);
      }
    }
  }
  function uh(e, t, n) {
    n.props = Nl(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      Ge(e, t, a);
    }
  }
  function Nr(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof n == "function" ? e.refCleanup = n(a) : n.current = a;
      }
    } catch (i) {
      Ge(e, t, i);
    }
  }
  function ln(e, t) {
    var n = e.ref, a = e.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (i) {
          Ge(e, t, i);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (i) {
          Ge(e, t, i);
        }
      else n.current = null;
  }
  function ch(e) {
    var t = e.type, n = e.memoizedProps, a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break e;
        case "img":
          n.src ? a.src = n.src : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (i) {
      Ge(e, e.return, i);
    }
  }
  function zc(e, t, n) {
    try {
      var a = e.stateNode;
      Qy(a, e.type, n, t), a[bt] = t;
    } catch (i) {
      Ge(e, e.return, i);
    }
  }
  function sh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && ll(e.type) || e.tag === 4;
  }
  function Uc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || sh(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && ll(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Lc(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Eo));
    else if (a !== 4 && (a === 27 && ll(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (Lc(e, t, n), e = e.sibling; e !== null; )
        Lc(e, t, n), e = e.sibling;
  }
  function so(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (a !== 4 && (a === 27 && ll(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (so(e, t, n), e = e.sibling; e !== null; )
        so(e, t, n), e = e.sibling;
  }
  function fh(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var a = e.type, i = t.attributes; i.length; )
        t.removeAttributeNode(i[0]);
      ct(t, a, n), t[dt] = e, t[bt] = n;
    } catch (c) {
      Ge(e, e.return, c);
    }
  }
  var Rn = !1, Fe = !1, Bc = !1, dh = typeof WeakSet == "function" ? WeakSet : Set, at = null;
  function Cy(e, t) {
    if (e = e.containerInfo, os = To, e = wd(e), Uu(e)) {
      if ("selectionStart" in e)
        var n = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          n = (n = e.ownerDocument) && n.defaultView || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var i = a.anchorOffset, c = a.focusNode;
            a = a.focusOffset;
            try {
              n.nodeType, c.nodeType;
            } catch {
              n = null;
              break e;
            }
            var v = 0, b = -1, M = -1, L = 0, Q = 0, F = e, B = null;
            t: for (; ; ) {
              for (var H; F !== n || i !== 0 && F.nodeType !== 3 || (b = v + i), F !== c || a !== 0 && F.nodeType !== 3 || (M = v + a), F.nodeType === 3 && (v += F.nodeValue.length), (H = F.firstChild) !== null; )
                B = F, F = H;
              for (; ; ) {
                if (F === e) break t;
                if (B === n && ++L === i && (b = v), B === c && ++Q === a && (M = v), (H = F.nextSibling) !== null) break;
                F = B, B = F.parentNode;
              }
              F = H;
            }
            n = b === -1 || M === -1 ? null : { start: b, end: M };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (us = { focusedElem: e, selectionRange: n }, To = !1, at = t; at !== null; )
      if (t = at, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = t, at = e;
      else
        for (; at !== null; ) {
          switch (t = at, c = t.alternate, e = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && c !== null) {
                e = void 0, n = t, i = c.memoizedProps, c = c.memoizedState, a = n.stateNode;
                try {
                  var ye = Nl(
                    n.type,
                    i,
                    n.elementType === n.type
                  );
                  e = a.getSnapshotBeforeUpdate(
                    ye,
                    c
                  ), a.__reactInternalSnapshotBeforeUpdate = e;
                } catch (he) {
                  Ge(
                    n,
                    n.return,
                    he
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                  fs(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      fs(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(o(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, at = e;
            break;
          }
          at = t.return;
        }
  }
  function mh(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Jn(e, n), a & 4 && _r(5, n);
        break;
      case 1:
        if (Jn(e, n), a & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (v) {
              Ge(n, n.return, v);
            }
          else {
            var i = Nl(
              n.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                i,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (v) {
              Ge(
                n,
                n.return,
                v
              );
            }
          }
        a & 64 && oh(n), a & 512 && Nr(n, n.return);
        break;
      case 3:
        if (Jn(e, n), a & 64 && (e = n.updateQueue, e !== null)) {
          if (t = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            Pd(e, t);
          } catch (v) {
            Ge(n, n.return, v);
          }
        }
        break;
      case 27:
        t === null && a & 4 && fh(n);
      case 26:
      case 5:
        Jn(e, n), t === null && a & 4 && ch(n), a & 512 && Nr(n, n.return);
        break;
      case 12:
        Jn(e, n);
        break;
      case 13:
        Jn(e, n), a & 4 && vh(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = zy.bind(
          null,
          n
        ), Wy(e, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || Rn, !a) {
          t = t !== null && t.memoizedState !== null || Fe, i = Rn;
          var c = Fe;
          Rn = a, (Fe = t) && !c ? $n(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : Jn(e, n), Rn = i, Fe = c;
        }
        break;
      case 30:
        break;
      default:
        Jn(e, n);
    }
  }
  function hh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, hh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && vu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var qe = null, Et = !1;
  function Mn(e, t, n) {
    for (n = n.child; n !== null; )
      ph(e, t, n), n = n.sibling;
  }
  function ph(e, t, n) {
    if (ft && typeof ft.onCommitFiberUnmount == "function")
      try {
        ft.onCommitFiberUnmount(vl, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Fe || ln(n, t), Mn(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Fe || ln(n, t);
        var a = qe, i = Et;
        ll(n.type) && (qe = n.stateNode, Et = !1), Mn(
          e,
          t,
          n
        ), Gr(n.stateNode), qe = a, Et = i;
        break;
      case 5:
        Fe || ln(n, t);
      case 6:
        if (a = qe, i = Et, qe = null, Mn(
          e,
          t,
          n
        ), qe = a, Et = i, qe !== null)
          if (Et)
            try {
              (qe.nodeType === 9 ? qe.body : qe.nodeName === "HTML" ? qe.ownerDocument.body : qe).removeChild(n.stateNode);
            } catch (c) {
              Ge(
                n,
                t,
                c
              );
            }
          else
            try {
              qe.removeChild(n.stateNode);
            } catch (c) {
              Ge(
                n,
                t,
                c
              );
            }
        break;
      case 18:
        qe !== null && (Et ? (e = qe, lp(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), Pr(e)) : lp(qe, n.stateNode));
        break;
      case 4:
        a = qe, i = Et, qe = n.stateNode.containerInfo, Et = !0, Mn(
          e,
          t,
          n
        ), qe = a, Et = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Fe || Fn(2, n, t), Fe || Fn(4, n, t), Mn(
          e,
          t,
          n
        );
        break;
      case 1:
        Fe || (ln(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && uh(
          n,
          t,
          a
        )), Mn(
          e,
          t,
          n
        );
        break;
      case 21:
        Mn(
          e,
          t,
          n
        );
        break;
      case 22:
        Fe = (a = Fe) || n.memoizedState !== null, Mn(
          e,
          t,
          n
        ), Fe = a;
        break;
      default:
        Mn(
          e,
          t,
          n
        );
    }
  }
  function vh(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Pr(e);
      } catch (n) {
        Ge(t, t.return, n);
      }
  }
  function Ry(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new dh()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new dh()), t;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function kc(e, t) {
    var n = Ry(e);
    t.forEach(function(a) {
      var i = Uy.bind(null, e, a);
      n.has(a) || (n.add(a), a.then(i, i));
    });
  }
  function Mt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var i = n[a], c = e, v = t, b = v;
        e: for (; b !== null; ) {
          switch (b.tag) {
            case 27:
              if (ll(b.type)) {
                qe = b.stateNode, Et = !1;
                break e;
              }
              break;
            case 5:
              qe = b.stateNode, Et = !1;
              break e;
            case 3:
            case 4:
              qe = b.stateNode.containerInfo, Et = !0;
              break e;
          }
          b = b.return;
        }
        if (qe === null) throw Error(o(160));
        ph(c, v, i), qe = null, Et = !1, c = i.alternate, c !== null && (c.return = null), i.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        gh(t, e), t = t.sibling;
  }
  var Kt = null;
  function gh(e, t) {
    var n = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Mt(t, e), Ot(e), a & 4 && (Fn(3, e, e.return), _r(3, e), Fn(5, e, e.return));
        break;
      case 1:
        Mt(t, e), Ot(e), a & 512 && (Fe || n === null || ln(n, n.return)), a & 64 && Rn && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
        break;
      case 26:
        var i = Kt;
        if (Mt(t, e), Ot(e), a & 512 && (Fe || n === null || ln(n, n.return)), a & 4) {
          var c = n !== null ? n.memoizedState : null;
          if (a = e.memoizedState, n === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, n = e.memoizedProps, i = i.ownerDocument || i;
                  t: switch (a) {
                    case "title":
                      c = i.getElementsByTagName("title")[0], (!c || c[tr] || c[dt] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = i.createElement(a), i.head.insertBefore(
                        c,
                        i.querySelector("head > title")
                      )), ct(c, a, n), c[dt] = e, nt(c), a = c;
                      break e;
                    case "link":
                      var v = fp(
                        "link",
                        "href",
                        i
                      ).get(a + (n.href || ""));
                      if (v) {
                        for (var b = 0; b < v.length; b++)
                          if (c = v[b], c.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && c.getAttribute("rel") === (n.rel == null ? null : n.rel) && c.getAttribute("title") === (n.title == null ? null : n.title) && c.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            v.splice(b, 1);
                            break t;
                          }
                      }
                      c = i.createElement(a), ct(c, a, n), i.head.appendChild(c);
                      break;
                    case "meta":
                      if (v = fp(
                        "meta",
                        "content",
                        i
                      ).get(a + (n.content || ""))) {
                        for (b = 0; b < v.length; b++)
                          if (c = v[b], c.getAttribute("content") === (n.content == null ? null : "" + n.content) && c.getAttribute("name") === (n.name == null ? null : n.name) && c.getAttribute("property") === (n.property == null ? null : n.property) && c.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && c.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            v.splice(b, 1);
                            break t;
                          }
                      }
                      c = i.createElement(a), ct(c, a, n), i.head.appendChild(c);
                      break;
                    default:
                      throw Error(o(468, a));
                  }
                  c[dt] = e, nt(c), a = c;
                }
                e.stateNode = a;
              } else
                dp(
                  i,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = sp(
                i,
                a,
                e.memoizedProps
              );
          else
            c !== a ? (c === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : c.count--, a === null ? dp(
              i,
              e.type,
              e.stateNode
            ) : sp(
              i,
              a,
              e.memoizedProps
            )) : a === null && e.stateNode !== null && zc(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        Mt(t, e), Ot(e), a & 512 && (Fe || n === null || ln(n, n.return)), n !== null && a & 4 && zc(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Mt(t, e), Ot(e), a & 512 && (Fe || n === null || ln(n, n.return)), e.flags & 32) {
          i = e.stateNode;
          try {
            Il(i, "");
          } catch (H) {
            Ge(e, e.return, H);
          }
        }
        a & 4 && e.stateNode != null && (i = e.memoizedProps, zc(
          e,
          i,
          n !== null ? n.memoizedProps : i
        )), a & 1024 && (Bc = !0);
        break;
      case 6:
        if (Mt(t, e), Ot(e), a & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          a = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = a;
          } catch (H) {
            Ge(e, e.return, H);
          }
        }
        break;
      case 3:
        if (Ro = null, i = Kt, Kt = Ao(t.containerInfo), Mt(t, e), Kt = i, Ot(e), a & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            Pr(t.containerInfo);
          } catch (H) {
            Ge(e, e.return, H);
          }
        Bc && (Bc = !1, yh(e));
        break;
      case 4:
        a = Kt, Kt = Ao(
          e.stateNode.containerInfo
        ), Mt(t, e), Ot(e), Kt = a;
        break;
      case 12:
        Mt(t, e), Ot(e);
        break;
      case 13:
        Mt(t, e), Ot(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Xc = Qe()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, kc(e, a)));
        break;
      case 22:
        i = e.memoizedState !== null;
        var M = n !== null && n.memoizedState !== null, L = Rn, Q = Fe;
        if (Rn = L || i, Fe = Q || M, Mt(t, e), Fe = Q, Rn = L, Ot(e), a & 8192)
          e: for (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, i && (n === null || M || Rn || Fe || Dl(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                M = n = t;
                try {
                  if (c = M.stateNode, i)
                    v = c.style, typeof v.setProperty == "function" ? v.setProperty("display", "none", "important") : v.display = "none";
                  else {
                    b = M.stateNode;
                    var F = M.memoizedProps.style, B = F != null && F.hasOwnProperty("display") ? F.display : null;
                    b.style.display = B == null || typeof B == "boolean" ? "" : ("" + B).trim();
                  }
                } catch (H) {
                  Ge(M, M.return, H);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                M = t;
                try {
                  M.stateNode.nodeValue = i ? "" : M.memoizedProps;
                } catch (H) {
                  Ge(M, M.return, H);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              n === t && (n = null), t = t.return;
            }
            n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
          }
        a & 4 && (a = e.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, kc(e, n))));
        break;
      case 19:
        Mt(t, e), Ot(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, kc(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Mt(t, e), Ot(e);
    }
  }
  function Ot(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, a = e.return; a !== null; ) {
          if (sh(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(o(160));
        switch (n.tag) {
          case 27:
            var i = n.stateNode, c = Uc(e);
            so(e, c, i);
            break;
          case 5:
            var v = n.stateNode;
            n.flags & 32 && (Il(v, ""), n.flags &= -33);
            var b = Uc(e);
            so(e, b, v);
            break;
          case 3:
          case 4:
            var M = n.stateNode.containerInfo, L = Uc(e);
            Lc(
              e,
              L,
              M
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (Q) {
        Ge(e, e.return, Q);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function yh(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        yh(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Jn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        mh(e, t.alternate, t), t = t.sibling;
  }
  function Dl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Fn(4, t, t.return), Dl(t);
          break;
        case 1:
          ln(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && uh(
            t,
            t.return,
            n
          ), Dl(t);
          break;
        case 27:
          Gr(t.stateNode);
        case 26:
        case 5:
          ln(t, t.return), Dl(t);
          break;
        case 22:
          t.memoizedState === null && Dl(t);
          break;
        case 30:
          Dl(t);
          break;
        default:
          Dl(t);
      }
      e = e.sibling;
    }
  }
  function $n(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, i = e, c = t, v = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          $n(
            i,
            c,
            n
          ), _r(4, c);
          break;
        case 1:
          if ($n(
            i,
            c,
            n
          ), a = c, i = a.stateNode, typeof i.componentDidMount == "function")
            try {
              i.componentDidMount();
            } catch (L) {
              Ge(a, a.return, L);
            }
          if (a = c, i = a.updateQueue, i !== null) {
            var b = a.stateNode;
            try {
              var M = i.shared.hiddenCallbacks;
              if (M !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < M.length; i++)
                  Kd(M[i], b);
            } catch (L) {
              Ge(a, a.return, L);
            }
          }
          n && v & 64 && oh(c), Nr(c, c.return);
          break;
        case 27:
          fh(c);
        case 26:
        case 5:
          $n(
            i,
            c,
            n
          ), n && a === null && v & 4 && ch(c), Nr(c, c.return);
          break;
        case 12:
          $n(
            i,
            c,
            n
          );
          break;
        case 13:
          $n(
            i,
            c,
            n
          ), n && v & 4 && vh(i, c);
          break;
        case 22:
          c.memoizedState === null && $n(
            i,
            c,
            n
          ), Nr(c, c.return);
          break;
        case 30:
          break;
        default:
          $n(
            i,
            c,
            n
          );
      }
      t = t.sibling;
    }
  }
  function Hc(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && vr(n));
  }
  function Gc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && vr(e));
  }
  function an(e, t, n, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        bh(
          e,
          t,
          n,
          a
        ), t = t.sibling;
  }
  function bh(e, t, n, a) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        an(
          e,
          t,
          n,
          a
        ), i & 2048 && _r(9, t);
        break;
      case 1:
        an(
          e,
          t,
          n,
          a
        );
        break;
      case 3:
        an(
          e,
          t,
          n,
          a
        ), i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && vr(e)));
        break;
      case 12:
        if (i & 2048) {
          an(
            e,
            t,
            n,
            a
          ), e = t.stateNode;
          try {
            var c = t.memoizedProps, v = c.id, b = c.onPostCommit;
            typeof b == "function" && b(
              v,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (M) {
            Ge(t, t.return, M);
          }
        } else
          an(
            e,
            t,
            n,
            a
          );
        break;
      case 13:
        an(
          e,
          t,
          n,
          a
        );
        break;
      case 23:
        break;
      case 22:
        c = t.stateNode, v = t.alternate, t.memoizedState !== null ? c._visibility & 2 ? an(
          e,
          t,
          n,
          a
        ) : Dr(e, t) : c._visibility & 2 ? an(
          e,
          t,
          n,
          a
        ) : (c._visibility |= 2, ya(
          e,
          t,
          n,
          a,
          (t.subtreeFlags & 10256) !== 0
        )), i & 2048 && Hc(v, t);
        break;
      case 24:
        an(
          e,
          t,
          n,
          a
        ), i & 2048 && Gc(t.alternate, t);
        break;
      default:
        an(
          e,
          t,
          n,
          a
        );
    }
  }
  function ya(e, t, n, a, i) {
    for (i = i && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var c = e, v = t, b = n, M = a, L = v.flags;
      switch (v.tag) {
        case 0:
        case 11:
        case 15:
          ya(
            c,
            v,
            b,
            M,
            i
          ), _r(8, v);
          break;
        case 23:
          break;
        case 22:
          var Q = v.stateNode;
          v.memoizedState !== null ? Q._visibility & 2 ? ya(
            c,
            v,
            b,
            M,
            i
          ) : Dr(
            c,
            v
          ) : (Q._visibility |= 2, ya(
            c,
            v,
            b,
            M,
            i
          )), i && L & 2048 && Hc(
            v.alternate,
            v
          );
          break;
        case 24:
          ya(
            c,
            v,
            b,
            M,
            i
          ), i && L & 2048 && Gc(v.alternate, v);
          break;
        default:
          ya(
            c,
            v,
            b,
            M,
            i
          );
      }
      t = t.sibling;
    }
  }
  function Dr(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, a = t, i = a.flags;
        switch (a.tag) {
          case 22:
            Dr(n, a), i & 2048 && Hc(
              a.alternate,
              a
            );
            break;
          case 24:
            Dr(n, a), i & 2048 && Gc(a.alternate, a);
            break;
          default:
            Dr(n, a);
        }
        t = t.sibling;
      }
  }
  var jr = 8192;
  function ba(e) {
    if (e.subtreeFlags & jr)
      for (e = e.child; e !== null; )
        xh(e), e = e.sibling;
  }
  function xh(e) {
    switch (e.tag) {
      case 26:
        ba(e), e.flags & jr && e.memoizedState !== null && fb(
          Kt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        ba(e);
        break;
      case 3:
      case 4:
        var t = Kt;
        Kt = Ao(e.stateNode.containerInfo), ba(e), Kt = t;
        break;
      case 22:
        e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = jr, jr = 16777216, ba(e), jr = t) : ba(e));
        break;
      default:
        ba(e);
    }
  }
  function Sh(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function zr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          at = a, wh(
            a,
            e
          );
        }
      Sh(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Eh(e), e = e.sibling;
  }
  function Eh(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        zr(e), e.flags & 2048 && Fn(9, e, e.return);
        break;
      case 3:
        zr(e);
        break;
      case 12:
        zr(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, fo(e)) : zr(e);
        break;
      default:
        zr(e);
    }
  }
  function fo(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          at = a, wh(
            a,
            e
          );
        }
      Sh(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Fn(8, t, t.return), fo(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, fo(t));
          break;
        default:
          fo(t);
      }
      e = e.sibling;
    }
  }
  function wh(e, t) {
    for (; at !== null; ) {
      var n = at;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Fn(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          vr(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, at = a;
      else
        e: for (n = e; at !== null; ) {
          a = at;
          var i = a.sibling, c = a.return;
          if (hh(a), a === n) {
            at = null;
            break e;
          }
          if (i !== null) {
            i.return = c, at = i;
            break e;
          }
          at = c;
        }
    }
  }
  var My = {
    getCacheForType: function(e) {
      var t = mt(Ie), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    }
  }, Oy = typeof WeakMap == "function" ? WeakMap : Map, je = 0, Ye = null, we = null, Oe = 0, ze = 0, Tt = null, Wn = !1, xa = !1, Yc = !1, On = 0, Ke = 0, In = 0, jl = 0, qc = 0, Yt = 0, Sa = 0, Ur = null, wt = null, Vc = !1, Xc = 0, mo = 1 / 0, ho = null, el = null, ut = 0, tl = null, Ea = null, wa = 0, Qc = 0, Zc = null, Ah = null, Lr = 0, Kc = null;
  function _t() {
    if ((je & 2) !== 0 && Oe !== 0)
      return Oe & -Oe;
    if (D.T !== null) {
      var e = sa;
      return e !== 0 ? e : es();
    }
    return Gf();
  }
  function Ch() {
    Yt === 0 && (Yt = (Oe & 536870912) === 0 || Ne ? Wa() : 536870912);
    var e = Gt.current;
    return e !== null && (e.flags |= 32), Yt;
  }
  function Nt(e, t, n) {
    (e === Ye && (ze === 2 || ze === 9) || e.cancelPendingCommit !== null) && (Aa(e, 0), nl(
      e,
      Oe,
      Yt,
      !1
    )), Hn(e, n), ((je & 2) === 0 || e !== Ye) && (e === Ye && ((je & 2) === 0 && (jl |= n), Ke === 4 && nl(
      e,
      Oe,
      Yt,
      !1
    )), rn(e));
  }
  function Rh(e, t, n) {
    if ((je & 6) !== 0) throw Error(o(327));
    var a = !n && (t & 124) === 0 && (t & e.expiredLanes) === 0 || gl(e, t), i = a ? Ny(e, t) : Jc(e, t, !0), c = a;
    do {
      if (i === 0) {
        xa && !a && nl(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, c && !Ty(n)) {
          i = Jc(e, t, !1), c = !1;
          continue;
        }
        if (i === 2) {
          if (c = t, e.errorRecoveryDisabledLanes & c)
            var v = 0;
          else
            v = e.pendingLanes & -536870913, v = v !== 0 ? v : v & 536870912 ? 536870912 : 0;
          if (v !== 0) {
            t = v;
            e: {
              var b = e;
              i = Ur;
              var M = b.current.memoizedState.isDehydrated;
              if (M && (Aa(b, v).flags |= 256), v = Jc(
                b,
                v,
                !1
              ), v !== 2) {
                if (Yc && !M) {
                  b.errorRecoveryDisabledLanes |= c, jl |= c, i = 4;
                  break e;
                }
                c = wt, wt = i, c !== null && (wt === null ? wt = c : wt.push.apply(
                  wt,
                  c
                ));
              }
              i = v;
            }
            if (c = !1, i !== 2) continue;
          }
        }
        if (i === 1) {
          Aa(e, 0), nl(e, t, 0, !0);
          break;
        }
        e: {
          switch (a = e, c = i, c) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              nl(
                a,
                t,
                Yt,
                !Wn
              );
              break e;
            case 2:
              wt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (i = Xc + 300 - Qe(), 10 < i)) {
            if (nl(
              a,
              t,
              Yt,
              !Wn
            ), Vl(a, 0, !0) !== 0) break e;
            a.timeoutHandle = tp(
              Mh.bind(
                null,
                a,
                n,
                wt,
                ho,
                Vc,
                t,
                Yt,
                jl,
                Sa,
                Wn,
                c,
                2,
                -0,
                0
              ),
              i
            );
            break e;
          }
          Mh(
            a,
            n,
            wt,
            ho,
            Vc,
            t,
            Yt,
            jl,
            Sa,
            Wn,
            c,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    rn(e);
  }
  function Mh(e, t, n, a, i, c, v, b, M, L, Q, F, B, H) {
    if (e.timeoutHandle = -1, F = t.subtreeFlags, (F & 8192 || (F & 16785408) === 16785408) && (Vr = { stylesheets: null, count: 0, unsuspend: sb }, xh(t), F = db(), F !== null)) {
      e.cancelPendingCommit = F(
        zh.bind(
          null,
          e,
          t,
          c,
          n,
          a,
          i,
          v,
          b,
          M,
          Q,
          1,
          B,
          H
        )
      ), nl(e, c, v, !L);
      return;
    }
    zh(
      e,
      t,
      c,
      n,
      a,
      i,
      v,
      b,
      M
    );
  }
  function Ty(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var a = 0; a < n.length; a++) {
          var i = n[a], c = i.getSnapshot;
          i = i.value;
          try {
            if (!Ct(c(), i)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function nl(e, t, n, a) {
    t &= ~qc, t &= ~jl, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var i = t; 0 < i; ) {
      var c = 31 - it(i), v = 1 << c;
      a[c] = -1, i &= ~v;
    }
    n !== 0 && Ai(e, n, t);
  }
  function po() {
    return (je & 6) === 0 ? (Br(0), !1) : !0;
  }
  function Pc() {
    if (we !== null) {
      if (ze === 0)
        var e = we.return;
      else
        e = we, xn = Ml = null, fc(e), va = null, Mr = 0, e = we;
      for (; e !== null; )
        ih(e.alternate, e), e = e.return;
      we = null;
    }
  }
  function Aa(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, Ky(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Pc(), Ye = e, we = n = gn(e.current, null), Oe = t, ze = 0, Tt = null, Wn = !1, xa = gl(e, t), Yc = !1, Sa = Yt = qc = jl = In = Ke = 0, wt = Ur = null, Vc = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var i = 31 - it(a), c = 1 << i;
        t |= e[i], a &= ~c;
      }
    return On = t, Li(), n;
  }
  function Oh(e, t) {
    xe = null, D.H = to, t === yr || t === Qi ? (t = Qd(), ze = 3) : t === qd ? (t = Qd(), ze = 4) : ze = t === Zm ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Tt = t, we === null && (Ke = 1, io(
      e,
      Lt(t, e.current)
    ));
  }
  function Th() {
    var e = D.H;
    return D.H = to, e === null ? to : e;
  }
  function _h() {
    var e = D.A;
    return D.A = My, e;
  }
  function Fc() {
    Ke = 4, Wn || (Oe & 4194048) !== Oe && Gt.current !== null || (xa = !0), (In & 134217727) === 0 && (jl & 134217727) === 0 || Ye === null || nl(
      Ye,
      Oe,
      Yt,
      !1
    );
  }
  function Jc(e, t, n) {
    var a = je;
    je |= 2;
    var i = Th(), c = _h();
    (Ye !== e || Oe !== t) && (ho = null, Aa(e, t)), t = !1;
    var v = Ke;
    e: do
      try {
        if (ze !== 0 && we !== null) {
          var b = we, M = Tt;
          switch (ze) {
            case 8:
              Pc(), v = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Gt.current === null && (t = !0);
              var L = ze;
              if (ze = 0, Tt = null, Ca(e, b, M, L), n && xa) {
                v = 0;
                break e;
              }
              break;
            default:
              L = ze, ze = 0, Tt = null, Ca(e, b, M, L);
          }
        }
        _y(), v = Ke;
        break;
      } catch (Q) {
        Oh(e, Q);
      }
    while (!0);
    return t && e.shellSuspendCounter++, xn = Ml = null, je = a, D.H = i, D.A = c, we === null && (Ye = null, Oe = 0, Li()), v;
  }
  function _y() {
    for (; we !== null; ) Nh(we);
  }
  function Ny(e, t) {
    var n = je;
    je |= 2;
    var a = Th(), i = _h();
    Ye !== e || Oe !== t ? (ho = null, mo = Qe() + 500, Aa(e, t)) : xa = gl(
      e,
      t
    );
    e: do
      try {
        if (ze !== 0 && we !== null) {
          t = we;
          var c = Tt;
          t: switch (ze) {
            case 1:
              ze = 0, Tt = null, Ca(e, t, c, 1);
              break;
            case 2:
            case 9:
              if (Vd(c)) {
                ze = 0, Tt = null, Dh(t);
                break;
              }
              t = function() {
                ze !== 2 && ze !== 9 || Ye !== e || (ze = 7), rn(e);
              }, c.then(t, t);
              break e;
            case 3:
              ze = 7;
              break e;
            case 4:
              ze = 5;
              break e;
            case 7:
              Vd(c) ? (ze = 0, Tt = null, Dh(t)) : (ze = 0, Tt = null, Ca(e, t, c, 7));
              break;
            case 5:
              var v = null;
              switch (we.tag) {
                case 26:
                  v = we.memoizedState;
                case 5:
                case 27:
                  var b = we;
                  if (!v || mp(v)) {
                    ze = 0, Tt = null;
                    var M = b.sibling;
                    if (M !== null) we = M;
                    else {
                      var L = b.return;
                      L !== null ? (we = L, vo(L)) : we = null;
                    }
                    break t;
                  }
              }
              ze = 0, Tt = null, Ca(e, t, c, 5);
              break;
            case 6:
              ze = 0, Tt = null, Ca(e, t, c, 6);
              break;
            case 8:
              Pc(), Ke = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        Dy();
        break;
      } catch (Q) {
        Oh(e, Q);
      }
    while (!0);
    return xn = Ml = null, D.H = a, D.A = i, je = n, we !== null ? 0 : (Ye = null, Oe = 0, Li(), Ke);
  }
  function Dy() {
    for (; we !== null && !We(); )
      Nh(we);
  }
  function Nh(e) {
    var t = ah(e.alternate, e, On);
    e.memoizedProps = e.pendingProps, t === null ? vo(e) : we = t;
  }
  function Dh(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Wm(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Oe
        );
        break;
      case 11:
        t = Wm(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Oe
        );
        break;
      case 5:
        fc(t);
      default:
        ih(n, t), t = we = jd(t, On), t = ah(n, t, On);
    }
    e.memoizedProps = e.pendingProps, t === null ? vo(e) : we = t;
  }
  function Ca(e, t, n, a) {
    xn = Ml = null, fc(t), va = null, Mr = 0;
    var i = t.return;
    try {
      if (Sy(
        e,
        i,
        t,
        n,
        Oe
      )) {
        Ke = 1, io(
          e,
          Lt(n, e.current)
        ), we = null;
        return;
      }
    } catch (c) {
      if (i !== null) throw we = i, c;
      Ke = 1, io(
        e,
        Lt(n, e.current)
      ), we = null;
      return;
    }
    t.flags & 32768 ? (Ne || a === 1 ? e = !0 : xa || (Oe & 536870912) !== 0 ? e = !1 : (Wn = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Gt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), jh(t, e)) : vo(t);
  }
  function vo(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        jh(
          t,
          Wn
        );
        return;
      }
      e = t.return;
      var n = wy(
        t.alternate,
        t,
        On
      );
      if (n !== null) {
        we = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        we = t;
        return;
      }
      we = t = e;
    } while (t !== null);
    Ke === 0 && (Ke = 5);
  }
  function jh(e, t) {
    do {
      var n = Ay(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, we = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        we = e;
        return;
      }
      we = e = n;
    } while (e !== null);
    Ke = 6, we = null;
  }
  function zh(e, t, n, a, i, c, v, b, M) {
    e.cancelPendingCommit = null;
    do
      go();
    while (ut !== 0);
    if ((je & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (c = t.lanes | t.childLanes, c |= Gu, wi(
        e,
        n,
        c,
        v,
        b,
        M
      ), e === Ye && (we = Ye = null, Oe = 0), Ea = t, tl = e, wa = n, Qc = c, Zc = i, Ah = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Ly(It, function() {
        return Hh(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = D.T, D.T = null, i = P.p, P.p = 2, v = je, je |= 4;
        try {
          Cy(e, t, n);
        } finally {
          je = v, P.p = i, D.T = a;
        }
      }
      ut = 1, Uh(), Lh(), Bh();
    }
  }
  function Uh() {
    if (ut === 1) {
      ut = 0;
      var e = tl, t = Ea, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = D.T, D.T = null;
        var a = P.p;
        P.p = 2;
        var i = je;
        je |= 4;
        try {
          gh(t, e);
          var c = us, v = wd(e.containerInfo), b = c.focusedElem, M = c.selectionRange;
          if (v !== b && b && b.ownerDocument && Ed(
            b.ownerDocument.documentElement,
            b
          )) {
            if (M !== null && Uu(b)) {
              var L = M.start, Q = M.end;
              if (Q === void 0 && (Q = L), "selectionStart" in b)
                b.selectionStart = L, b.selectionEnd = Math.min(
                  Q,
                  b.value.length
                );
              else {
                var F = b.ownerDocument || document, B = F && F.defaultView || window;
                if (B.getSelection) {
                  var H = B.getSelection(), ye = b.textContent.length, he = Math.min(M.start, ye), Be = M.end === void 0 ? he : Math.min(M.end, ye);
                  !H.extend && he > Be && (v = Be, Be = he, he = v);
                  var N = Sd(
                    b,
                    he
                  ), _ = Sd(
                    b,
                    Be
                  );
                  if (N && _ && (H.rangeCount !== 1 || H.anchorNode !== N.node || H.anchorOffset !== N.offset || H.focusNode !== _.node || H.focusOffset !== _.offset)) {
                    var U = F.createRange();
                    U.setStart(N.node, N.offset), H.removeAllRanges(), he > Be ? (H.addRange(U), H.extend(_.node, _.offset)) : (U.setEnd(_.node, _.offset), H.addRange(U));
                  }
                }
              }
            }
            for (F = [], H = b; H = H.parentNode; )
              H.nodeType === 1 && F.push({
                element: H,
                left: H.scrollLeft,
                top: H.scrollTop
              });
            for (typeof b.focus == "function" && b.focus(), b = 0; b < F.length; b++) {
              var K = F[b];
              K.element.scrollLeft = K.left, K.element.scrollTop = K.top;
            }
          }
          To = !!os, us = os = null;
        } finally {
          je = i, P.p = a, D.T = n;
        }
      }
      e.current = t, ut = 2;
    }
  }
  function Lh() {
    if (ut === 2) {
      ut = 0;
      var e = tl, t = Ea, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = D.T, D.T = null;
        var a = P.p;
        P.p = 2;
        var i = je;
        je |= 4;
        try {
          mh(e, t.alternate, t);
        } finally {
          je = i, P.p = a, D.T = n;
        }
      }
      ut = 3;
    }
  }
  function Bh() {
    if (ut === 4 || ut === 3) {
      ut = 0, yt();
      var e = tl, t = Ea, n = wa, a = Ah;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? ut = 5 : (ut = 0, Ea = tl = null, kh(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (i === 0 && (el = null), er(n), t = t.stateNode, ft && typeof ft.onCommitFiberRoot == "function")
        try {
          ft.onCommitFiberRoot(
            vl,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = D.T, i = P.p, P.p = 2, D.T = null;
        try {
          for (var c = e.onRecoverableError, v = 0; v < a.length; v++) {
            var b = a[v];
            c(b.value, {
              componentStack: b.stack
            });
          }
        } finally {
          D.T = t, P.p = i;
        }
      }
      (wa & 3) !== 0 && go(), rn(e), i = e.pendingLanes, (n & 4194090) !== 0 && (i & 42) !== 0 ? e === Kc ? Lr++ : (Lr = 0, Kc = e) : Lr = 0, Br(0);
    }
  }
  function kh(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, vr(t)));
  }
  function go(e) {
    return Uh(), Lh(), Bh(), Hh();
  }
  function Hh() {
    if (ut !== 5) return !1;
    var e = tl, t = Qc;
    Qc = 0;
    var n = er(wa), a = D.T, i = P.p;
    try {
      P.p = 32 > n ? 32 : n, D.T = null, n = Zc, Zc = null;
      var c = tl, v = wa;
      if (ut = 0, Ea = tl = null, wa = 0, (je & 6) !== 0) throw Error(o(331));
      var b = je;
      if (je |= 4, Eh(c.current), bh(
        c,
        c.current,
        v,
        n
      ), je = b, Br(0, !1), ft && typeof ft.onPostCommitFiberRoot == "function")
        try {
          ft.onPostCommitFiberRoot(vl, c);
        } catch {
        }
      return !0;
    } finally {
      P.p = i, D.T = a, kh(e, t);
    }
  }
  function Gh(e, t, n) {
    t = Lt(n, t), t = Cc(e.stateNode, t, 2), e = Qn(e, t, 2), e !== null && (Hn(e, 2), rn(e));
  }
  function Ge(e, t, n) {
    if (e.tag === 3)
      Gh(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Gh(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (el === null || !el.has(a))) {
            e = Lt(n, e), n = Xm(2), a = Qn(t, n, 2), a !== null && (Qm(
              n,
              a,
              t,
              e
            ), Hn(a, 2), rn(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function $c(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Oy();
      var i = /* @__PURE__ */ new Set();
      a.set(t, i);
    } else
      i = a.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), a.set(t, i));
    i.has(n) || (Yc = !0, i.add(n), e = jy.bind(null, e, t, n), t.then(e, e));
  }
  function jy(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ye === e && (Oe & n) === n && (Ke === 4 || Ke === 3 && (Oe & 62914560) === Oe && 300 > Qe() - Xc ? (je & 2) === 0 && Aa(e, 0) : qc |= n, Sa === Oe && (Sa = 0)), rn(e);
  }
  function Yh(e, t) {
    t === 0 && (t = Ei()), e = ia(e, t), e !== null && (Hn(e, t), rn(e));
  }
  function zy(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Yh(e, n);
  }
  function Uy(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var a = e.stateNode, i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    a !== null && a.delete(t), Yh(e, n);
  }
  function Ly(e, t) {
    return Re(e, t);
  }
  var yo = null, Ra = null, Wc = !1, bo = !1, Ic = !1, zl = 0;
  function rn(e) {
    e !== Ra && e.next === null && (Ra === null ? yo = Ra = e : Ra = Ra.next = e), bo = !0, Wc || (Wc = !0, ky());
  }
  function Br(e, t) {
    if (!Ic && bo) {
      Ic = !0;
      do
        for (var n = !1, a = yo; a !== null; ) {
          if (e !== 0) {
            var i = a.pendingLanes;
            if (i === 0) var c = 0;
            else {
              var v = a.suspendedLanes, b = a.pingedLanes;
              c = (1 << 31 - it(42 | e) + 1) - 1, c &= i & ~(v & ~b), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
            }
            c !== 0 && (n = !0, Qh(a, c));
          } else
            c = Oe, c = Vl(
              a,
              a === Ye ? c : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (c & 3) === 0 || gl(a, c) || (n = !0, Qh(a, c));
          a = a.next;
        }
      while (n);
      Ic = !1;
    }
  }
  function By() {
    qh();
  }
  function qh() {
    bo = Wc = !1;
    var e = 0;
    zl !== 0 && (Zy() && (e = zl), zl = 0);
    for (var t = Qe(), n = null, a = yo; a !== null; ) {
      var i = a.next, c = Vh(a, t);
      c === 0 ? (a.next = null, n === null ? yo = i : n.next = i, i === null && (Ra = n)) : (n = a, (e !== 0 || (c & 3) !== 0) && (bo = !0)), a = i;
    }
    Br(e);
  }
  function Vh(e, t) {
    for (var n = e.suspendedLanes, a = e.pingedLanes, i = e.expirationTimes, c = e.pendingLanes & -62914561; 0 < c; ) {
      var v = 31 - it(c), b = 1 << v, M = i[v];
      M === -1 ? ((b & n) === 0 || (b & a) !== 0) && (i[v] = hu(b, t)) : M <= t && (e.expiredLanes |= b), c &= ~b;
    }
    if (t = Ye, n = Oe, n = Vl(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, n === 0 || e === t && (ze === 2 || ze === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && He(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || gl(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (a !== null && He(a), er(n)) {
        case 2:
        case 8:
          n = Wt;
          break;
        case 32:
          n = It;
          break;
        case 268435456:
          n = Yl;
          break;
        default:
          n = It;
      }
      return a = Xh.bind(null, e), n = Re(n, a), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return a !== null && a !== null && He(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Xh(e, t) {
    if (ut !== 0 && ut !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (go() && e.callbackNode !== n)
      return null;
    var a = Oe;
    return a = Vl(
      e,
      e === Ye ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (Rh(e, a, t), Vh(e, Qe()), e.callbackNode != null && e.callbackNode === n ? Xh.bind(null, e) : null);
  }
  function Qh(e, t) {
    if (go()) return null;
    Rh(e, t, !0);
  }
  function ky() {
    Py(function() {
      (je & 6) !== 0 ? Re(
        st,
        By
      ) : qh();
    });
  }
  function es() {
    return zl === 0 && (zl = Wa()), zl;
  }
  function Zh(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ti("" + e);
  }
  function Kh(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function Hy(e, t, n, a, i) {
    if (t === "submit" && n && n.stateNode === i) {
      var c = Zh(
        (i[bt] || null).action
      ), v = a.submitter;
      v && (t = (t = v[bt] || null) ? Zh(t.formAction) : v.getAttribute("formAction"), t !== null && (c = t, v = null));
      var b = new ji(
        "action",
        "action",
        null,
        a,
        i
      );
      e.push({
        event: b,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (zl !== 0) {
                  var M = v ? Kh(i, v) : new FormData(i);
                  xc(
                    n,
                    {
                      pending: !0,
                      data: M,
                      method: i.method,
                      action: c
                    },
                    null,
                    M
                  );
                }
              } else
                typeof c == "function" && (b.preventDefault(), M = v ? Kh(i, v) : new FormData(i), xc(
                  n,
                  {
                    pending: !0,
                    data: M,
                    method: i.method,
                    action: c
                  },
                  c,
                  M
                ));
            },
            currentTarget: i
          }
        ]
      });
    }
  }
  for (var ts = 0; ts < Hu.length; ts++) {
    var ns = Hu[ts], Gy = ns.toLowerCase(), Yy = ns[0].toUpperCase() + ns.slice(1);
    Zt(
      Gy,
      "on" + Yy
    );
  }
  Zt(Rd, "onAnimationEnd"), Zt(Md, "onAnimationIteration"), Zt(Od, "onAnimationStart"), Zt("dblclick", "onDoubleClick"), Zt("focusin", "onFocus"), Zt("focusout", "onBlur"), Zt(ay, "onTransitionRun"), Zt(ry, "onTransitionStart"), Zt(iy, "onTransitionCancel"), Zt(Td, "onTransitionEnd"), Jl("onMouseEnter", ["mouseout", "mouseover"]), Jl("onMouseLeave", ["mouseout", "mouseover"]), Jl("onPointerEnter", ["pointerout", "pointerover"]), Jl("onPointerLeave", ["pointerout", "pointerover"]), yl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), yl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), yl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), yl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), yl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), yl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var kr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), qy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(kr)
  );
  function Ph(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n], i = a.event;
      a = a.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var v = a.length - 1; 0 <= v; v--) {
            var b = a[v], M = b.instance, L = b.currentTarget;
            if (b = b.listener, M !== c && i.isPropagationStopped())
              break e;
            c = b, i.currentTarget = L;
            try {
              c(i);
            } catch (Q) {
              ro(Q);
            }
            i.currentTarget = null, c = M;
          }
        else
          for (v = 0; v < a.length; v++) {
            if (b = a[v], M = b.instance, L = b.currentTarget, b = b.listener, M !== c && i.isPropagationStopped())
              break e;
            c = b, i.currentTarget = L;
            try {
              c(i);
            } catch (Q) {
              ro(Q);
            }
            i.currentTarget = null, c = M;
          }
      }
    }
  }
  function Ae(e, t) {
    var n = t[pu];
    n === void 0 && (n = t[pu] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    n.has(a) || (Fh(t, e, 2, !1), n.add(a));
  }
  function ls(e, t, n) {
    var a = 0;
    t && (a |= 4), Fh(
      n,
      e,
      a,
      t
    );
  }
  var xo = "_reactListening" + Math.random().toString(36).slice(2);
  function as(e) {
    if (!e[xo]) {
      e[xo] = !0, qf.forEach(function(n) {
        n !== "selectionchange" && (qy.has(n) || ls(n, !1, e), ls(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[xo] || (t[xo] = !0, ls("selectionchange", !1, t));
    }
  }
  function Fh(e, t, n, a) {
    switch (bp(t)) {
      case 2:
        var i = pb;
        break;
      case 8:
        i = vb;
        break;
      default:
        i = ys;
    }
    n = i.bind(
      null,
      t,
      n,
      e
    ), i = void 0, !Ru || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), a ? i !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
      passive: i
    }) : e.addEventListener(t, n, !1);
  }
  function rs(e, t, n, a, i) {
    var c = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (; ; ) {
        if (a === null) return;
        var v = a.tag;
        if (v === 3 || v === 4) {
          var b = a.stateNode.containerInfo;
          if (b === i) break;
          if (v === 4)
            for (v = a.return; v !== null; ) {
              var M = v.tag;
              if ((M === 3 || M === 4) && v.stateNode.containerInfo === i)
                return;
              v = v.return;
            }
          for (; b !== null; ) {
            if (v = Kl(b), v === null) return;
            if (M = v.tag, M === 5 || M === 6 || M === 26 || M === 27) {
              a = c = v;
              continue e;
            }
            b = b.parentNode;
          }
        }
        a = a.return;
      }
    nd(function() {
      var L = c, Q = Au(n), F = [];
      e: {
        var B = _d.get(e);
        if (B !== void 0) {
          var H = ji, ye = e;
          switch (e) {
            case "keypress":
              if (Ni(n) === 0) break e;
            case "keydown":
            case "keyup":
              H = L0;
              break;
            case "focusin":
              ye = "focus", H = _u;
              break;
            case "focusout":
              ye = "blur", H = _u;
              break;
            case "beforeblur":
            case "afterblur":
              H = _u;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              H = rd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = A0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = H0;
              break;
            case Rd:
            case Md:
            case Od:
              H = M0;
              break;
            case Td:
              H = Y0;
              break;
            case "scroll":
            case "scrollend":
              H = E0;
              break;
            case "wheel":
              H = V0;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = T0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = od;
              break;
            case "toggle":
            case "beforetoggle":
              H = Q0;
          }
          var he = (t & 4) !== 0, Be = !he && (e === "scroll" || e === "scrollend"), N = he ? B !== null ? B + "Capture" : null : B;
          he = [];
          for (var _ = L, U; _ !== null; ) {
            var K = _;
            if (U = K.stateNode, K = K.tag, K !== 5 && K !== 26 && K !== 27 || U === null || N === null || (K = lr(_, N), K != null && he.push(
              Hr(_, K, U)
            )), Be) break;
            _ = _.return;
          }
          0 < he.length && (B = new H(
            B,
            ye,
            null,
            n,
            Q
          ), F.push({ event: B, listeners: he }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (B = e === "mouseover" || e === "pointerover", H = e === "mouseout" || e === "pointerout", B && n !== wu && (ye = n.relatedTarget || n.fromElement) && (Kl(ye) || ye[Zl]))
            break e;
          if ((H || B) && (B = Q.window === Q ? Q : (B = Q.ownerDocument) ? B.defaultView || B.parentWindow : window, H ? (ye = n.relatedTarget || n.toElement, H = L, ye = ye ? Kl(ye) : null, ye !== null && (Be = f(ye), he = ye.tag, ye !== Be || he !== 5 && he !== 27 && he !== 6) && (ye = null)) : (H = null, ye = L), H !== ye)) {
            if (he = rd, K = "onMouseLeave", N = "onMouseEnter", _ = "mouse", (e === "pointerout" || e === "pointerover") && (he = od, K = "onPointerLeave", N = "onPointerEnter", _ = "pointer"), Be = H == null ? B : nr(H), U = ye == null ? B : nr(ye), B = new he(
              K,
              _ + "leave",
              H,
              n,
              Q
            ), B.target = Be, B.relatedTarget = U, K = null, Kl(Q) === L && (he = new he(
              N,
              _ + "enter",
              ye,
              n,
              Q
            ), he.target = U, he.relatedTarget = Be, K = he), Be = K, H && ye)
              t: {
                for (he = H, N = ye, _ = 0, U = he; U; U = Ma(U))
                  _++;
                for (U = 0, K = N; K; K = Ma(K))
                  U++;
                for (; 0 < _ - U; )
                  he = Ma(he), _--;
                for (; 0 < U - _; )
                  N = Ma(N), U--;
                for (; _--; ) {
                  if (he === N || N !== null && he === N.alternate)
                    break t;
                  he = Ma(he), N = Ma(N);
                }
                he = null;
              }
            else he = null;
            H !== null && Jh(
              F,
              B,
              H,
              he,
              !1
            ), ye !== null && Be !== null && Jh(
              F,
              Be,
              ye,
              he,
              !0
            );
          }
        }
        e: {
          if (B = L ? nr(L) : window, H = B.nodeName && B.nodeName.toLowerCase(), H === "select" || H === "input" && B.type === "file")
            var re = pd;
          else if (md(B))
            if (vd)
              re = ty;
            else {
              re = I0;
              var Ee = W0;
            }
          else
            H = B.nodeName, !H || H.toLowerCase() !== "input" || B.type !== "checkbox" && B.type !== "radio" ? L && Eu(L.elementType) && (re = pd) : re = ey;
          if (re && (re = re(e, L))) {
            hd(
              F,
              re,
              n,
              Q
            );
            break e;
          }
          Ee && Ee(e, B, L), e === "focusout" && L && B.type === "number" && L.memoizedProps.value != null && Su(B, "number", B.value);
        }
        switch (Ee = L ? nr(L) : window, e) {
          case "focusin":
            (md(Ee) || Ee.contentEditable === "true") && (la = Ee, Lu = L, fr = null);
            break;
          case "focusout":
            fr = Lu = la = null;
            break;
          case "mousedown":
            Bu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Bu = !1, Ad(F, n, Q);
            break;
          case "selectionchange":
            if (ly) break;
          case "keydown":
          case "keyup":
            Ad(F, n, Q);
        }
        var fe;
        if (Du)
          e: {
            switch (e) {
              case "compositionstart":
                var pe = "onCompositionStart";
                break e;
              case "compositionend":
                pe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                pe = "onCompositionUpdate";
                break e;
            }
            pe = void 0;
          }
        else
          na ? fd(e, n) && (pe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (pe = "onCompositionStart");
        pe && (ud && n.locale !== "ko" && (na || pe !== "onCompositionStart" ? pe === "onCompositionEnd" && na && (fe = ld()) : (Yn = Q, Mu = "value" in Yn ? Yn.value : Yn.textContent, na = !0)), Ee = So(L, pe), 0 < Ee.length && (pe = new id(
          pe,
          e,
          null,
          n,
          Q
        ), F.push({ event: pe, listeners: Ee }), fe ? pe.data = fe : (fe = dd(n), fe !== null && (pe.data = fe)))), (fe = K0 ? P0(e, n) : F0(e, n)) && (pe = So(L, "onBeforeInput"), 0 < pe.length && (Ee = new id(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          Q
        ), F.push({
          event: Ee,
          listeners: pe
        }), Ee.data = fe)), Hy(
          F,
          e,
          L,
          n,
          Q
        );
      }
      Ph(F, t);
    });
  }
  function Hr(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function So(e, t) {
    for (var n = t + "Capture", a = []; e !== null; ) {
      var i = e, c = i.stateNode;
      if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || c === null || (i = lr(e, n), i != null && a.unshift(
        Hr(e, i, c)
      ), i = lr(e, t), i != null && a.push(
        Hr(e, i, c)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function Ma(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Jh(e, t, n, a, i) {
    for (var c = t._reactName, v = []; n !== null && n !== a; ) {
      var b = n, M = b.alternate, L = b.stateNode;
      if (b = b.tag, M !== null && M === a) break;
      b !== 5 && b !== 26 && b !== 27 || L === null || (M = L, i ? (L = lr(n, c), L != null && v.unshift(
        Hr(n, L, M)
      )) : i || (L = lr(n, c), L != null && v.push(
        Hr(n, L, M)
      ))), n = n.return;
    }
    v.length !== 0 && e.push({ event: t, listeners: v });
  }
  var Vy = /\r\n?/g, Xy = /\u0000|\uFFFD/g;
  function $h(e) {
    return (typeof e == "string" ? e : "" + e).replace(Vy, `
`).replace(Xy, "");
  }
  function Wh(e, t) {
    return t = $h(t), $h(e) === t;
  }
  function Eo() {
  }
  function Le(e, t, n, a, i, c) {
    switch (n) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Il(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Il(e, "" + a);
        break;
      case "className":
        Ri(e, "class", a);
        break;
      case "tabIndex":
        Ri(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ri(e, n, a);
        break;
      case "style":
        ed(e, a, c);
        break;
      case "data":
        if (t !== "object") {
          Ri(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(n);
          break;
        }
        a = Ti("" + a), e.setAttribute(n, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof c == "function" && (n === "formAction" ? (t !== "input" && Le(e, t, "name", i.name, i, null), Le(
            e,
            t,
            "formEncType",
            i.formEncType,
            i,
            null
          ), Le(
            e,
            t,
            "formMethod",
            i.formMethod,
            i,
            null
          ), Le(
            e,
            t,
            "formTarget",
            i.formTarget,
            i,
            null
          )) : (Le(e, t, "encType", i.encType, i, null), Le(e, t, "method", i.method, i, null), Le(e, t, "target", i.target, i, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(n);
          break;
        }
        a = Ti("" + a), e.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (e.onclick = Eo);
        break;
      case "onScroll":
        a != null && Ae("scroll", e);
        break;
      case "onScrollEnd":
        a != null && Ae("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(o(61));
          if (n = a.__html, n != null) {
            if (i.children != null) throw Error(o(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        n = Ti("" + a), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, "" + a) : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0 ? e.setAttribute(n, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, a) : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(n, a) : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(n) : e.setAttribute(n, a);
        break;
      case "popover":
        Ae("beforetoggle", e), Ae("toggle", e), Ci(e, "popover", a);
        break;
      case "xlinkActuate":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        pn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        pn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        pn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Ci(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = x0.get(n) || n, Ci(e, n, a));
    }
  }
  function is(e, t, n, a, i, c) {
    switch (n) {
      case "style":
        ed(e, a, c);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(o(61));
          if (n = a.__html, n != null) {
            if (i.children != null) throw Error(o(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Il(e, a) : (typeof a == "number" || typeof a == "bigint") && Il(e, "" + a);
        break;
      case "onScroll":
        a != null && Ae("scroll", e);
        break;
      case "onScrollEnd":
        a != null && Ae("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = Eo);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Vf.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (i = n.endsWith("Capture"), t = n.slice(2, i ? n.length - 7 : void 0), c = e[bt] || null, c = c != null ? c[n] : null, typeof c == "function" && e.removeEventListener(t, c, i), typeof a == "function")) {
              typeof c != "function" && c !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, a, i);
              break e;
            }
            n in e ? e[n] = a : a === !0 ? e.setAttribute(n, "") : Ci(e, n, a);
          }
    }
  }
  function ct(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ae("error", e), Ae("load", e);
        var a = !1, i = !1, c;
        for (c in n)
          if (n.hasOwnProperty(c)) {
            var v = n[c];
            if (v != null)
              switch (c) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  i = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  Le(e, t, c, v, n, null);
              }
          }
        i && Le(e, t, "srcSet", n.srcSet, n, null), a && Le(e, t, "src", n.src, n, null);
        return;
      case "input":
        Ae("invalid", e);
        var b = c = v = i = null, M = null, L = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var Q = n[a];
            if (Q != null)
              switch (a) {
                case "name":
                  i = Q;
                  break;
                case "type":
                  v = Q;
                  break;
                case "checked":
                  M = Q;
                  break;
                case "defaultChecked":
                  L = Q;
                  break;
                case "value":
                  c = Q;
                  break;
                case "defaultValue":
                  b = Q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Q != null)
                    throw Error(o(137, t));
                  break;
                default:
                  Le(e, t, a, Q, n, null);
              }
          }
        Jf(
          e,
          c,
          b,
          M,
          L,
          v,
          i,
          !1
        ), Mi(e);
        return;
      case "select":
        Ae("invalid", e), a = v = c = null;
        for (i in n)
          if (n.hasOwnProperty(i) && (b = n[i], b != null))
            switch (i) {
              case "value":
                c = b;
                break;
              case "defaultValue":
                v = b;
                break;
              case "multiple":
                a = b;
              default:
                Le(e, t, i, b, n, null);
            }
        t = c, n = v, e.multiple = !!a, t != null ? Wl(e, !!a, t, !1) : n != null && Wl(e, !!a, n, !0);
        return;
      case "textarea":
        Ae("invalid", e), c = i = a = null;
        for (v in n)
          if (n.hasOwnProperty(v) && (b = n[v], b != null))
            switch (v) {
              case "value":
                a = b;
                break;
              case "defaultValue":
                i = b;
                break;
              case "children":
                c = b;
                break;
              case "dangerouslySetInnerHTML":
                if (b != null) throw Error(o(91));
                break;
              default:
                Le(e, t, v, b, n, null);
            }
        Wf(e, a, i, c), Mi(e);
        return;
      case "option":
        for (M in n)
          if (n.hasOwnProperty(M) && (a = n[M], a != null))
            switch (M) {
              case "selected":
                e.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                Le(e, t, M, a, n, null);
            }
        return;
      case "dialog":
        Ae("beforetoggle", e), Ae("toggle", e), Ae("cancel", e), Ae("close", e);
        break;
      case "iframe":
      case "object":
        Ae("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < kr.length; a++)
          Ae(kr[a], e);
        break;
      case "image":
        Ae("error", e), Ae("load", e);
        break;
      case "details":
        Ae("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ae("error", e), Ae("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (L in n)
          if (n.hasOwnProperty(L) && (a = n[L], a != null))
            switch (L) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                Le(e, t, L, a, n, null);
            }
        return;
      default:
        if (Eu(t)) {
          for (Q in n)
            n.hasOwnProperty(Q) && (a = n[Q], a !== void 0 && is(
              e,
              t,
              Q,
              a,
              n,
              void 0
            ));
          return;
        }
    }
    for (b in n)
      n.hasOwnProperty(b) && (a = n[b], a != null && Le(e, t, b, a, n, null));
  }
  function Qy(e, t, n, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var i = null, c = null, v = null, b = null, M = null, L = null, Q = null;
        for (H in n) {
          var F = n[H];
          if (n.hasOwnProperty(H) && F != null)
            switch (H) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                M = F;
              default:
                a.hasOwnProperty(H) || Le(e, t, H, null, a, F);
            }
        }
        for (var B in a) {
          var H = a[B];
          if (F = n[B], a.hasOwnProperty(B) && (H != null || F != null))
            switch (B) {
              case "type":
                c = H;
                break;
              case "name":
                i = H;
                break;
              case "checked":
                L = H;
                break;
              case "defaultChecked":
                Q = H;
                break;
              case "value":
                v = H;
                break;
              case "defaultValue":
                b = H;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (H != null)
                  throw Error(o(137, t));
                break;
              default:
                H !== F && Le(
                  e,
                  t,
                  B,
                  H,
                  a,
                  F
                );
            }
        }
        xu(
          e,
          v,
          b,
          M,
          L,
          Q,
          c,
          i
        );
        return;
      case "select":
        H = v = b = B = null;
        for (c in n)
          if (M = n[c], n.hasOwnProperty(c) && M != null)
            switch (c) {
              case "value":
                break;
              case "multiple":
                H = M;
              default:
                a.hasOwnProperty(c) || Le(
                  e,
                  t,
                  c,
                  null,
                  a,
                  M
                );
            }
        for (i in a)
          if (c = a[i], M = n[i], a.hasOwnProperty(i) && (c != null || M != null))
            switch (i) {
              case "value":
                B = c;
                break;
              case "defaultValue":
                b = c;
                break;
              case "multiple":
                v = c;
              default:
                c !== M && Le(
                  e,
                  t,
                  i,
                  c,
                  a,
                  M
                );
            }
        t = b, n = v, a = H, B != null ? Wl(e, !!n, B, !1) : !!a != !!n && (t != null ? Wl(e, !!n, t, !0) : Wl(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        H = B = null;
        for (b in n)
          if (i = n[b], n.hasOwnProperty(b) && i != null && !a.hasOwnProperty(b))
            switch (b) {
              case "value":
                break;
              case "children":
                break;
              default:
                Le(e, t, b, null, a, i);
            }
        for (v in a)
          if (i = a[v], c = n[v], a.hasOwnProperty(v) && (i != null || c != null))
            switch (v) {
              case "value":
                B = i;
                break;
              case "defaultValue":
                H = i;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(o(91));
                break;
              default:
                i !== c && Le(e, t, v, i, a, c);
            }
        $f(e, B, H);
        return;
      case "option":
        for (var ye in n)
          if (B = n[ye], n.hasOwnProperty(ye) && B != null && !a.hasOwnProperty(ye))
            switch (ye) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Le(
                  e,
                  t,
                  ye,
                  null,
                  a,
                  B
                );
            }
        for (M in a)
          if (B = a[M], H = n[M], a.hasOwnProperty(M) && B !== H && (B != null || H != null))
            switch (M) {
              case "selected":
                e.selected = B && typeof B != "function" && typeof B != "symbol";
                break;
              default:
                Le(
                  e,
                  t,
                  M,
                  B,
                  a,
                  H
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var he in n)
          B = n[he], n.hasOwnProperty(he) && B != null && !a.hasOwnProperty(he) && Le(e, t, he, null, a, B);
        for (L in a)
          if (B = a[L], H = n[L], a.hasOwnProperty(L) && B !== H && (B != null || H != null))
            switch (L) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (B != null)
                  throw Error(o(137, t));
                break;
              default:
                Le(
                  e,
                  t,
                  L,
                  B,
                  a,
                  H
                );
            }
        return;
      default:
        if (Eu(t)) {
          for (var Be in n)
            B = n[Be], n.hasOwnProperty(Be) && B !== void 0 && !a.hasOwnProperty(Be) && is(
              e,
              t,
              Be,
              void 0,
              a,
              B
            );
          for (Q in a)
            B = a[Q], H = n[Q], !a.hasOwnProperty(Q) || B === H || B === void 0 && H === void 0 || is(
              e,
              t,
              Q,
              B,
              a,
              H
            );
          return;
        }
    }
    for (var N in n)
      B = n[N], n.hasOwnProperty(N) && B != null && !a.hasOwnProperty(N) && Le(e, t, N, null, a, B);
    for (F in a)
      B = a[F], H = n[F], !a.hasOwnProperty(F) || B === H || B == null && H == null || Le(e, t, F, B, a, H);
  }
  var os = null, us = null;
  function wo(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Ih(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function ep(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function cs(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ss = null;
  function Zy() {
    var e = window.event;
    return e && e.type === "popstate" ? e === ss ? !1 : (ss = e, !0) : (ss = null, !1);
  }
  var tp = typeof setTimeout == "function" ? setTimeout : void 0, Ky = typeof clearTimeout == "function" ? clearTimeout : void 0, np = typeof Promise == "function" ? Promise : void 0, Py = typeof queueMicrotask == "function" ? queueMicrotask : typeof np < "u" ? function(e) {
    return np.resolve(null).then(e).catch(Fy);
  } : tp;
  function Fy(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ll(e) {
    return e === "head";
  }
  function lp(e, t) {
    var n = t, a = 0, i = 0;
    do {
      var c = n.nextSibling;
      if (e.removeChild(n), c && c.nodeType === 8)
        if (n = c.data, n === "/$") {
          if (0 < a && 8 > a) {
            n = a;
            var v = e.ownerDocument;
            if (n & 1 && Gr(v.documentElement), n & 2 && Gr(v.body), n & 4)
              for (n = v.head, Gr(n), v = n.firstChild; v; ) {
                var b = v.nextSibling, M = v.nodeName;
                v[tr] || M === "SCRIPT" || M === "STYLE" || M === "LINK" && v.rel.toLowerCase() === "stylesheet" || n.removeChild(v), v = b;
              }
          }
          if (i === 0) {
            e.removeChild(c), Pr(t);
            return;
          }
          i--;
        } else
          n === "$" || n === "$?" || n === "$!" ? i++ : a = n.charCodeAt(0) - 48;
      else a = 0;
      n = c;
    } while (n);
    Pr(t);
  }
  function fs(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          fs(n), vu(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function Jy(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var i = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[tr])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (c = e.getAttribute("rel"), c === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (c !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (c = e.getAttribute("src"), (c !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && c && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var c = i.name == null ? null : "" + i.name;
        if (i.type === "hidden" && e.getAttribute("name") === c)
          return e;
      } else return e;
      if (e = Pt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function $y(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Pt(e.nextSibling), e === null)) return null;
    return e;
  }
  function ds(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function Wy(e, t) {
    var n = e.ownerDocument;
    if (e.data !== "$?" || n.readyState === "complete")
      t();
    else {
      var a = function() {
        t(), n.removeEventListener("DOMContentLoaded", a);
      };
      n.addEventListener("DOMContentLoaded", a), e._reactRetry = a;
    }
  }
  function Pt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  var ms = null;
  function ap(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function rp(e, t, n) {
    switch (t = wo(n), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(o(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(o(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(o(454));
        return e;
      default:
        throw Error(o(451));
    }
  }
  function Gr(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    vu(e);
  }
  var qt = /* @__PURE__ */ new Map(), ip = /* @__PURE__ */ new Set();
  function Ao(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Tn = P.d;
  P.d = {
    f: Iy,
    r: eb,
    D: tb,
    C: nb,
    L: lb,
    m: ab,
    X: ib,
    S: rb,
    M: ob
  };
  function Iy() {
    var e = Tn.f(), t = po();
    return e || t;
  }
  function eb(e) {
    var t = Pl(e);
    t !== null && t.tag === 5 && t.type === "form" ? Rm(t) : Tn.r(e);
  }
  var Oa = typeof document > "u" ? null : document;
  function op(e, t, n) {
    var a = Oa;
    if (a && typeof t == "string" && t) {
      var i = Ut(t);
      i = 'link[rel="' + e + '"][href="' + i + '"]', typeof n == "string" && (i += '[crossorigin="' + n + '"]'), ip.has(i) || (ip.add(i), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(i) === null && (t = a.createElement("link"), ct(t, "link", e), nt(t), a.head.appendChild(t)));
    }
  }
  function tb(e) {
    Tn.D(e), op("dns-prefetch", e, null);
  }
  function nb(e, t) {
    Tn.C(e, t), op("preconnect", e, t);
  }
  function lb(e, t, n) {
    Tn.L(e, t, n);
    var a = Oa;
    if (a && e && t) {
      var i = 'link[rel="preload"][as="' + Ut(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (i += '[imagesrcset="' + Ut(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (i += '[imagesizes="' + Ut(
        n.imageSizes
      ) + '"]')) : i += '[href="' + Ut(e) + '"]';
      var c = i;
      switch (t) {
        case "style":
          c = Ta(e);
          break;
        case "script":
          c = _a(e);
      }
      qt.has(c) || (e = g(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), qt.set(c, e), a.querySelector(i) !== null || t === "style" && a.querySelector(Yr(c)) || t === "script" && a.querySelector(qr(c)) || (t = a.createElement("link"), ct(t, "link", e), nt(t), a.head.appendChild(t)));
    }
  }
  function ab(e, t) {
    Tn.m(e, t);
    var n = Oa;
    if (n && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", i = 'link[rel="modulepreload"][as="' + Ut(a) + '"][href="' + Ut(e) + '"]', c = i;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = _a(e);
      }
      if (!qt.has(c) && (e = g({ rel: "modulepreload", href: e }, t), qt.set(c, e), n.querySelector(i) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(qr(c)))
              return;
        }
        a = n.createElement("link"), ct(a, "link", e), nt(a), n.head.appendChild(a);
      }
    }
  }
  function rb(e, t, n) {
    Tn.S(e, t, n);
    var a = Oa;
    if (a && e) {
      var i = Fl(a).hoistableStyles, c = Ta(e);
      t = t || "default";
      var v = i.get(c);
      if (!v) {
        var b = { loading: 0, preload: null };
        if (v = a.querySelector(
          Yr(c)
        ))
          b.loading = 5;
        else {
          e = g(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = qt.get(c)) && hs(e, n);
          var M = v = a.createElement("link");
          nt(M), ct(M, "link", e), M._p = new Promise(function(L, Q) {
            M.onload = L, M.onerror = Q;
          }), M.addEventListener("load", function() {
            b.loading |= 1;
          }), M.addEventListener("error", function() {
            b.loading |= 2;
          }), b.loading |= 4, Co(v, t, a);
        }
        v = {
          type: "stylesheet",
          instance: v,
          count: 1,
          state: b
        }, i.set(c, v);
      }
    }
  }
  function ib(e, t) {
    Tn.X(e, t);
    var n = Oa;
    if (n && e) {
      var a = Fl(n).hoistableScripts, i = _a(e), c = a.get(i);
      c || (c = n.querySelector(qr(i)), c || (e = g({ src: e, async: !0 }, t), (t = qt.get(i)) && ps(e, t), c = n.createElement("script"), nt(c), ct(c, "link", e), n.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, a.set(i, c));
    }
  }
  function ob(e, t) {
    Tn.M(e, t);
    var n = Oa;
    if (n && e) {
      var a = Fl(n).hoistableScripts, i = _a(e), c = a.get(i);
      c || (c = n.querySelector(qr(i)), c || (e = g({ src: e, async: !0, type: "module" }, t), (t = qt.get(i)) && ps(e, t), c = n.createElement("script"), nt(c), ct(c, "link", e), n.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, a.set(i, c));
    }
  }
  function up(e, t, n, a) {
    var i = (i = ue.current) ? Ao(i) : null;
    if (!i) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Ta(n.href), n = Fl(
          i
        ).hoistableStyles, a = n.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = Ta(n.href);
          var c = Fl(
            i
          ).hoistableStyles, v = c.get(e);
          if (v || (i = i.ownerDocument || i, v = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, c.set(e, v), (c = i.querySelector(
            Yr(e)
          )) && !c._p && (v.instance = c, v.state.loading = 5), qt.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, qt.set(e, n), c || ub(
            i,
            e,
            n,
            v.state
          ))), t && a === null)
            throw Error(o(528, ""));
          return v;
        }
        if (t && a !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = _a(n), n = Fl(
          i
        ).hoistableScripts, a = n.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, e));
    }
  }
  function Ta(e) {
    return 'href="' + Ut(e) + '"';
  }
  function Yr(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function cp(e) {
    return g({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function ub(e, t, n, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), ct(t, "link", n), nt(t), e.head.appendChild(t));
  }
  function _a(e) {
    return '[src="' + Ut(e) + '"]';
  }
  function qr(e) {
    return "script[async]" + e;
  }
  function sp(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + Ut(n.href) + '"]'
          );
          if (a)
            return t.instance = a, nt(a), a;
          var i = g({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), nt(a), ct(a, "style", i), Co(a, n.precedence, e), t.instance = a;
        case "stylesheet":
          i = Ta(n.href);
          var c = e.querySelector(
            Yr(i)
          );
          if (c)
            return t.state.loading |= 4, t.instance = c, nt(c), c;
          a = cp(n), (i = qt.get(i)) && hs(a, i), c = (e.ownerDocument || e).createElement("link"), nt(c);
          var v = c;
          return v._p = new Promise(function(b, M) {
            v.onload = b, v.onerror = M;
          }), ct(c, "link", a), t.state.loading |= 4, Co(c, n.precedence, e), t.instance = c;
        case "script":
          return c = _a(n.src), (i = e.querySelector(
            qr(c)
          )) ? (t.instance = i, nt(i), i) : (a = n, (i = qt.get(c)) && (a = g({}, n), ps(a, i)), e = e.ownerDocument || e, i = e.createElement("script"), nt(i), ct(i, "link", a), e.head.appendChild(i), t.instance = i);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Co(a, n.precedence, e));
    return t.instance;
  }
  function Co(e, t, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), i = a.length ? a[a.length - 1] : null, c = i, v = 0; v < a.length; v++) {
      var b = a[v];
      if (b.dataset.precedence === t) c = b;
      else if (c !== i) break;
    }
    c ? c.parentNode.insertBefore(e, c.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function hs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function ps(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Ro = null;
  function fp(e, t, n) {
    if (Ro === null) {
      var a = /* @__PURE__ */ new Map(), i = Ro = /* @__PURE__ */ new Map();
      i.set(n, a);
    } else
      i = Ro, a = i.get(n), a || (a = /* @__PURE__ */ new Map(), i.set(n, a));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
      var c = n[i];
      if (!(c[tr] || c[dt] || e === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
        var v = c.getAttribute(t) || "";
        v = e + v;
        var b = a.get(v);
        b ? b.push(c) : a.set(v, [c]);
      }
    }
    return a;
  }
  function dp(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function cb(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return e = t.disabled, typeof t.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function mp(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Vr = null;
  function sb() {
  }
  function fb(e, t, n) {
    if (Vr === null) throw Error(o(475));
    var a = Vr;
    if (t.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var i = Ta(n.href), c = e.querySelector(
          Yr(i)
        );
        if (c) {
          e = c._p, e !== null && typeof e == "object" && typeof e.then == "function" && (a.count++, a = Mo.bind(a), e.then(a, a)), t.state.loading |= 4, t.instance = c, nt(c);
          return;
        }
        c = e.ownerDocument || e, n = cp(n), (i = qt.get(i)) && hs(n, i), c = c.createElement("link"), nt(c);
        var v = c;
        v._p = new Promise(function(b, M) {
          v.onload = b, v.onerror = M;
        }), ct(c, "link", n), t.instance = c;
      }
      a.stylesheets === null && (a.stylesheets = /* @__PURE__ */ new Map()), a.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (a.count++, t = Mo.bind(a), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  function db() {
    if (Vr === null) throw Error(o(475));
    var e = Vr;
    return e.stylesheets && e.count === 0 && vs(e, e.stylesheets), 0 < e.count ? function(t) {
      var n = setTimeout(function() {
        if (e.stylesheets && vs(e, e.stylesheets), e.unsuspend) {
          var a = e.unsuspend;
          e.unsuspend = null, a();
        }
      }, 6e4);
      return e.unsuspend = t, function() {
        e.unsuspend = null, clearTimeout(n);
      };
    } : null;
  }
  function Mo() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) vs(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Oo = null;
  function vs(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Oo = /* @__PURE__ */ new Map(), t.forEach(mb, e), Oo = null, Mo.call(e));
  }
  function mb(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Oo.get(e);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Oo.set(e, n);
        for (var i = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), c = 0; c < i.length; c++) {
          var v = i[c];
          (v.nodeName === "LINK" || v.getAttribute("media") !== "not all") && (n.set(v.dataset.precedence, v), a = v);
        }
        a && n.set(null, a);
      }
      i = t.instance, v = i.getAttribute("data-precedence"), c = n.get(v) || a, c === a && n.set(null, i), n.set(v, i), this.count++, a = Mo.bind(this), i.addEventListener("load", a), i.addEventListener("error", a), c ? c.parentNode.insertBefore(i, c.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Xr = {
    $$typeof: z,
    Provider: null,
    Consumer: null,
    _currentValue: k,
    _currentValue2: k,
    _threadCount: 0
  };
  function hb(e, t, n, a, i, c, v, b) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Xl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xl(0), this.hiddenUpdates = Xl(null), this.identifierPrefix = a, this.onUncaughtError = i, this.onCaughtError = c, this.onRecoverableError = v, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = b, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function hp(e, t, n, a, i, c, v, b, M, L, Q, F) {
    return e = new hb(
      e,
      t,
      n,
      v,
      b,
      M,
      L,
      F
    ), t = 1, c === !0 && (t |= 24), c = Rt(3, null, null, t), e.current = c, c.stateNode = e, t = $u(), t.refCount++, e.pooledCache = t, t.refCount++, c.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: t
    }, tc(c), e;
  }
  function pp(e) {
    return e ? (e = oa, e) : oa;
  }
  function vp(e, t, n, a, i, c) {
    i = pp(i), a.context === null ? a.context = i : a.pendingContext = i, a = Xn(t), a.payload = { element: n }, c = c === void 0 ? null : c, c !== null && (a.callback = c), n = Qn(e, a, t), n !== null && (Nt(n, e, t), xr(n, e, t));
  }
  function gp(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function gs(e, t) {
    gp(e, t), (e = e.alternate) && gp(e, t);
  }
  function yp(e) {
    if (e.tag === 13) {
      var t = ia(e, 67108864);
      t !== null && Nt(t, e, 67108864), gs(e, 67108864);
    }
  }
  var To = !0;
  function pb(e, t, n, a) {
    var i = D.T;
    D.T = null;
    var c = P.p;
    try {
      P.p = 2, ys(e, t, n, a);
    } finally {
      P.p = c, D.T = i;
    }
  }
  function vb(e, t, n, a) {
    var i = D.T;
    D.T = null;
    var c = P.p;
    try {
      P.p = 8, ys(e, t, n, a);
    } finally {
      P.p = c, D.T = i;
    }
  }
  function ys(e, t, n, a) {
    if (To) {
      var i = bs(a);
      if (i === null)
        rs(
          e,
          t,
          a,
          _o,
          n
        ), xp(e, a);
      else if (yb(
        i,
        e,
        t,
        n,
        a
      ))
        a.stopPropagation();
      else if (xp(e, a), t & 4 && -1 < gb.indexOf(e)) {
        for (; i !== null; ) {
          var c = Pl(i);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                  var v = hn(c.pendingLanes);
                  if (v !== 0) {
                    var b = c;
                    for (b.pendingLanes |= 2, b.entangledLanes |= 2; v; ) {
                      var M = 1 << 31 - it(v);
                      b.entanglements[1] |= M, v &= ~M;
                    }
                    rn(c), (je & 6) === 0 && (mo = Qe() + 500, Br(0));
                  }
                }
                break;
              case 13:
                b = ia(c, 2), b !== null && Nt(b, c, 2), po(), gs(c, 2);
            }
          if (c = bs(a), c === null && rs(
            e,
            t,
            a,
            _o,
            n
          ), c === i) break;
          i = c;
        }
        i !== null && a.stopPropagation();
      } else
        rs(
          e,
          t,
          a,
          null,
          n
        );
    }
  }
  function bs(e) {
    return e = Au(e), xs(e);
  }
  var _o = null;
  function xs(e) {
    if (_o = null, e = Kl(e), e !== null) {
      var t = f(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = d(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return _o = e, null;
  }
  function bp(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Qt()) {
          case st:
            return 2;
          case Wt:
            return 8;
          case It:
          case Fa:
            return 32;
          case Yl:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ss = !1, al = null, rl = null, il = null, Qr = /* @__PURE__ */ new Map(), Zr = /* @__PURE__ */ new Map(), ol = [], gb = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function xp(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        al = null;
        break;
      case "dragenter":
      case "dragleave":
        rl = null;
        break;
      case "mouseover":
      case "mouseout":
        il = null;
        break;
      case "pointerover":
      case "pointerout":
        Qr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Zr.delete(t.pointerId);
    }
  }
  function Kr(e, t, n, a, i, c) {
    return e === null || e.nativeEvent !== c ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: c,
      targetContainers: [i]
    }, t !== null && (t = Pl(t), t !== null && yp(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function yb(e, t, n, a, i) {
    switch (t) {
      case "focusin":
        return al = Kr(
          al,
          e,
          t,
          n,
          a,
          i
        ), !0;
      case "dragenter":
        return rl = Kr(
          rl,
          e,
          t,
          n,
          a,
          i
        ), !0;
      case "mouseover":
        return il = Kr(
          il,
          e,
          t,
          n,
          a,
          i
        ), !0;
      case "pointerover":
        var c = i.pointerId;
        return Qr.set(
          c,
          Kr(
            Qr.get(c) || null,
            e,
            t,
            n,
            a,
            i
          )
        ), !0;
      case "gotpointercapture":
        return c = i.pointerId, Zr.set(
          c,
          Kr(
            Zr.get(c) || null,
            e,
            t,
            n,
            a,
            i
          )
        ), !0;
    }
    return !1;
  }
  function Sp(e) {
    var t = Kl(e.target);
    if (t !== null) {
      var n = f(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = d(n), t !== null) {
            e.blockedOn = t, f0(e.priority, function() {
              if (n.tag === 13) {
                var a = _t();
                a = Ql(a);
                var i = ia(n, a);
                i !== null && Nt(i, n, a), gs(n, a);
              }
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function No(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = bs(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        wu = a, n.target.dispatchEvent(a), wu = null;
      } else
        return t = Pl(n), t !== null && yp(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Ep(e, t, n) {
    No(e) && n.delete(t);
  }
  function bb() {
    Ss = !1, al !== null && No(al) && (al = null), rl !== null && No(rl) && (rl = null), il !== null && No(il) && (il = null), Qr.forEach(Ep), Zr.forEach(Ep);
  }
  function Do(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ss || (Ss = !0, l.unstable_scheduleCallback(
      l.unstable_NormalPriority,
      bb
    )));
  }
  var jo = null;
  function wp(e) {
    jo !== e && (jo = e, l.unstable_scheduleCallback(
      l.unstable_NormalPriority,
      function() {
        jo === e && (jo = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], a = e[t + 1], i = e[t + 2];
          if (typeof a != "function") {
            if (xs(a || n) === null)
              continue;
            break;
          }
          var c = Pl(n);
          c !== null && (e.splice(t, 3), t -= 3, xc(
            c,
            {
              pending: !0,
              data: i,
              method: n.method,
              action: a
            },
            a,
            i
          ));
        }
      }
    ));
  }
  function Pr(e) {
    function t(M) {
      return Do(M, e);
    }
    al !== null && Do(al, e), rl !== null && Do(rl, e), il !== null && Do(il, e), Qr.forEach(t), Zr.forEach(t);
    for (var n = 0; n < ol.length; n++) {
      var a = ol[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < ol.length && (n = ol[0], n.blockedOn === null); )
      Sp(n), n.blockedOn === null && ol.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var i = n[a], c = n[a + 1], v = i[bt] || null;
        if (typeof c == "function")
          v || wp(n);
        else if (v) {
          var b = null;
          if (c && c.hasAttribute("formAction")) {
            if (i = c, v = c[bt] || null)
              b = v.formAction;
            else if (xs(i) !== null) continue;
          } else b = v.action;
          typeof b == "function" ? n[a + 1] = b : (n.splice(a, 3), a -= 3), wp(n);
        }
      }
  }
  function Es(e) {
    this._internalRoot = e;
  }
  zo.prototype.render = Es.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var n = t.current, a = _t();
    vp(n, a, e, t, null, null);
  }, zo.prototype.unmount = Es.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      vp(e.current, 2, null, e, null, null), po(), t[Zl] = null;
    }
  };
  function zo(e) {
    this._internalRoot = e;
  }
  zo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Gf();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < ol.length && t !== 0 && t < ol[n].priority; n++) ;
      ol.splice(n, 0, e), n === 0 && Sp(e);
    }
  };
  var Ap = r.version;
  if (Ap !== "19.1.0")
    throw Error(
      o(
        527,
        Ap,
        "19.1.0"
      )
    );
  P.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = p(t), e = e !== null ? h(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var xb = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: D,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Uo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Uo.isDisabled && Uo.supportsFiber)
      try {
        vl = Uo.inject(
          xb
        ), ft = Uo;
      } catch {
      }
  }
  return Jr.createRoot = function(e, t) {
    if (!s(e)) throw Error(o(299));
    var n = !1, a = "", i = Gm, c = Ym, v = qm, b = null;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (v = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (b = t.unstable_transitionCallbacks)), t = hp(
      e,
      1,
      !1,
      null,
      null,
      n,
      a,
      i,
      c,
      v,
      b,
      null
    ), e[Zl] = t.current, as(e), new Es(t);
  }, Jr.hydrateRoot = function(e, t, n) {
    if (!s(e)) throw Error(o(299));
    var a = !1, i = "", c = Gm, v = Ym, b = qm, M = null, L = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (v = n.onCaughtError), n.onRecoverableError !== void 0 && (b = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (M = n.unstable_transitionCallbacks), n.formState !== void 0 && (L = n.formState)), t = hp(
      e,
      1,
      !0,
      t,
      n ?? null,
      a,
      i,
      c,
      v,
      b,
      M,
      L
    ), t.context = pp(null), n = t.current, a = _t(), a = Ql(a), i = Xn(a), i.callback = null, Qn(n, i, a), n = a, t.current.lanes = n, Hn(t, n), rn(t), e[Zl] = t.current, as(e), new zo(t);
  }, Jr.version = "19.1.0", Jr;
}
var zp;
function _b() {
  if (zp) return Cs.exports;
  zp = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (r) {
        console.error(r);
      }
  }
  return l(), Cs.exports = Tb(), Cs.exports;
}
var Nb = _b();
function Te(l, r, { checkForDefaultPrevented: u = !0 } = {}) {
  return function(s) {
    if (l == null || l(s), u === !1 || !s.defaultPrevented)
      return r == null ? void 0 : r(s);
  };
}
function Up(l, r) {
  if (typeof l == "function")
    return l(r);
  l != null && (l.current = r);
}
function lu(...l) {
  return (r) => {
    let u = !1;
    const o = l.map((s) => {
      const f = Up(s, r);
      return !u && typeof f == "function" && (u = !0), f;
    });
    if (u)
      return () => {
        for (let s = 0; s < o.length; s++) {
          const f = o[s];
          typeof f == "function" ? f() : Up(l[s], null);
        }
      };
  };
}
function At(...l) {
  return C.useCallback(lu(...l), l);
}
function mi(l, r = []) {
  let u = [];
  function o(f, d) {
    const m = C.createContext(d), p = u.length;
    u = [...u, d];
    const h = (y) => {
      var T;
      const { scope: S, children: w, ...R } = y, A = ((T = S == null ? void 0 : S[l]) == null ? void 0 : T[p]) || m, O = C.useMemo(() => R, Object.values(R));
      return /* @__PURE__ */ E.jsx(A.Provider, { value: O, children: w });
    };
    h.displayName = f + "Provider";
    function g(y, S) {
      var A;
      const w = ((A = S == null ? void 0 : S[l]) == null ? void 0 : A[p]) || m, R = C.useContext(w);
      if (R) return R;
      if (d !== void 0) return d;
      throw new Error(`\`${y}\` must be used within \`${f}\``);
    }
    return [h, g];
  }
  const s = () => {
    const f = u.map((d) => C.createContext(d));
    return function(m) {
      const p = (m == null ? void 0 : m[l]) || f;
      return C.useMemo(
        () => ({ [`__scope${l}`]: { ...m, [l]: p } }),
        [m, p]
      );
    };
  };
  return s.scopeName = l, [o, Db(s, ...r)];
}
function Db(...l) {
  const r = l[0];
  if (l.length === 1) return r;
  const u = () => {
    const o = l.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(f) {
      const d = o.reduce((m, { useScope: p, scopeName: h }) => {
        const y = p(f)[`__scope${h}`];
        return { ...m, ...y };
      }, {});
      return C.useMemo(() => ({ [`__scope${r.scopeName}`]: d }), [d]);
    };
  };
  return u.scopeName = r.scopeName, u;
}
var dl = globalThis != null && globalThis.document ? C.useLayoutEffect : () => {
}, jb = gv[" useInsertionEffect ".trim().toString()] || dl;
function bv({
  prop: l,
  defaultProp: r,
  onChange: u = () => {
  },
  caller: o
}) {
  const [s, f, d] = zb({
    defaultProp: r,
    onChange: u
  }), m = l !== void 0, p = m ? l : s;
  {
    const g = C.useRef(l !== void 0);
    C.useEffect(() => {
      const y = g.current;
      y !== m && console.warn(
        `${o} is changing from ${y ? "controlled" : "uncontrolled"} to ${m ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), g.current = m;
    }, [m, o]);
  }
  const h = C.useCallback(
    (g) => {
      var y;
      if (m) {
        const S = Ub(g) ? g(l) : g;
        S !== l && ((y = d.current) == null || y.call(d, S));
      } else
        f(g);
    },
    [m, l, f, d]
  );
  return [p, h];
}
function zb({
  defaultProp: l,
  onChange: r
}) {
  const [u, o] = C.useState(l), s = C.useRef(u), f = C.useRef(r);
  return jb(() => {
    f.current = r;
  }, [r]), C.useEffect(() => {
    var d;
    s.current !== u && ((d = f.current) == null || d.call(f, u), s.current = u);
  }, [u, s]), [u, o, f];
}
function Ub(l) {
  return typeof l == "function";
}
var mf = yv();
const Ir = /* @__PURE__ */ vv(mf);
// @__NO_SIDE_EFFECTS__
function ai(l) {
  const r = /* @__PURE__ */ Bb(l), u = C.forwardRef((o, s) => {
    const { children: f, ...d } = o, m = C.Children.toArray(f), p = m.find(Hb);
    if (p) {
      const h = p.props.children, g = m.map((y) => y === p ? C.Children.count(h) > 1 ? C.Children.only(null) : C.isValidElement(h) ? h.props.children : null : y);
      return /* @__PURE__ */ E.jsx(r, { ...d, ref: s, children: C.isValidElement(h) ? C.cloneElement(h, void 0, g) : null });
    }
    return /* @__PURE__ */ E.jsx(r, { ...d, ref: s, children: f });
  });
  return u.displayName = `${l}.Slot`, u;
}
var Lb = /* @__PURE__ */ ai("Slot");
// @__NO_SIDE_EFFECTS__
function Bb(l) {
  const r = C.forwardRef((u, o) => {
    const { children: s, ...f } = u;
    if (C.isValidElement(s)) {
      const d = Yb(s), m = Gb(f, s.props);
      return s.type !== C.Fragment && (m.ref = o ? lu(o, d) : d), C.cloneElement(s, m);
    }
    return C.Children.count(s) > 1 ? C.Children.only(null) : null;
  });
  return r.displayName = `${l}.SlotClone`, r;
}
var kb = Symbol("radix.slottable");
function Hb(l) {
  return C.isValidElement(l) && typeof l.type == "function" && "__radixId" in l.type && l.type.__radixId === kb;
}
function Gb(l, r) {
  const u = { ...r };
  for (const o in r) {
    const s = l[o], f = r[o];
    /^on[A-Z]/.test(o) ? s && f ? u[o] = (...m) => {
      const p = f(...m);
      return s(...m), p;
    } : s && (u[o] = s) : o === "style" ? u[o] = { ...s, ...f } : o === "className" && (u[o] = [s, f].filter(Boolean).join(" "));
  }
  return { ...l, ...u };
}
function Yb(l) {
  var o, s;
  let r = (o = Object.getOwnPropertyDescriptor(l.props, "ref")) == null ? void 0 : o.get, u = r && "isReactWarning" in r && r.isReactWarning;
  return u ? l.ref : (r = (s = Object.getOwnPropertyDescriptor(l, "ref")) == null ? void 0 : s.get, u = r && "isReactWarning" in r && r.isReactWarning, u ? l.props.ref : l.props.ref || l.ref);
}
var qb = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], vt = qb.reduce((l, r) => {
  const u = /* @__PURE__ */ ai(`Primitive.${r}`), o = C.forwardRef((s, f) => {
    const { asChild: d, ...m } = s, p = d ? u : r;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ E.jsx(p, { ...m, ref: f });
  });
  return o.displayName = `Primitive.${r}`, { ...l, [r]: o };
}, {});
function xv(l, r) {
  l && mf.flushSync(() => l.dispatchEvent(r));
}
function Sv(l) {
  const r = l + "CollectionProvider", [u, o] = mi(r), [s, f] = u(
    r,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), d = (A) => {
    const { scope: O, children: T } = A, j = De.useRef(null), z = De.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ E.jsx(s, { scope: O, itemMap: z, collectionRef: j, children: T });
  };
  d.displayName = r;
  const m = l + "CollectionSlot", p = /* @__PURE__ */ ai(m), h = De.forwardRef(
    (A, O) => {
      const { scope: T, children: j } = A, z = f(m, T), q = At(O, z.collectionRef);
      return /* @__PURE__ */ E.jsx(p, { ref: q, children: j });
    }
  );
  h.displayName = m;
  const g = l + "CollectionItemSlot", y = "data-radix-collection-item", S = /* @__PURE__ */ ai(g), w = De.forwardRef(
    (A, O) => {
      const { scope: T, children: j, ...z } = A, q = De.useRef(null), Y = At(O, q), Z = f(g, T);
      return De.useEffect(() => (Z.itemMap.set(q, { ref: q, ...z }), () => void Z.itemMap.delete(q))), /* @__PURE__ */ E.jsx(S, { [y]: "", ref: Y, children: j });
    }
  );
  w.displayName = g;
  function R(A) {
    const O = f(l + "CollectionConsumer", A);
    return De.useCallback(() => {
      const j = O.collectionRef.current;
      if (!j) return [];
      const z = Array.from(j.querySelectorAll(`[${y}]`));
      return Array.from(O.itemMap.values()).sort(
        (Z, X) => z.indexOf(Z.ref.current) - z.indexOf(X.ref.current)
      );
    }, [O.collectionRef, O.itemMap]);
  }
  return [
    { Provider: d, Slot: h, ItemSlot: w },
    R,
    o
  ];
}
var Vb = C.createContext(void 0);
function Ev(l) {
  const r = C.useContext(Vb);
  return l || r || "ltr";
}
function zn(l) {
  const r = C.useRef(l);
  return C.useEffect(() => {
    r.current = l;
  }), C.useMemo(() => (...u) => {
    var o;
    return (o = r.current) == null ? void 0 : o.call(r, ...u);
  }, []);
}
function Xb(l, r = globalThis == null ? void 0 : globalThis.document) {
  const u = zn(l);
  C.useEffect(() => {
    const o = (s) => {
      s.key === "Escape" && u(s);
    };
    return r.addEventListener("keydown", o, { capture: !0 }), () => r.removeEventListener("keydown", o, { capture: !0 });
  }, [u, r]);
}
var Qb = "DismissableLayer", Ks = "dismissableLayer.update", Zb = "dismissableLayer.pointerDownOutside", Kb = "dismissableLayer.focusOutside", Lp, wv = C.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Av = C.forwardRef(
  (l, r) => {
    const {
      disableOutsidePointerEvents: u = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: s,
      onFocusOutside: f,
      onInteractOutside: d,
      onDismiss: m,
      ...p
    } = l, h = C.useContext(wv), [g, y] = C.useState(null), S = (g == null ? void 0 : g.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, w] = C.useState({}), R = At(r, (X) => y(X)), A = Array.from(h.layers), [O] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1), T = A.indexOf(O), j = g ? A.indexOf(g) : -1, z = h.layersWithOutsidePointerEventsDisabled.size > 0, q = j >= T, Y = Jb((X) => {
      const V = X.target, te = [...h.branches].some((I) => I.contains(V));
      !q || te || (s == null || s(X), d == null || d(X), X.defaultPrevented || m == null || m());
    }, S), Z = $b((X) => {
      const V = X.target;
      [...h.branches].some((I) => I.contains(V)) || (f == null || f(X), d == null || d(X), X.defaultPrevented || m == null || m());
    }, S);
    return Xb((X) => {
      j === h.layers.size - 1 && (o == null || o(X), !X.defaultPrevented && m && (X.preventDefault(), m()));
    }, S), C.useEffect(() => {
      if (g)
        return u && (h.layersWithOutsidePointerEventsDisabled.size === 0 && (Lp = S.body.style.pointerEvents, S.body.style.pointerEvents = "none"), h.layersWithOutsidePointerEventsDisabled.add(g)), h.layers.add(g), Bp(), () => {
          u && h.layersWithOutsidePointerEventsDisabled.size === 1 && (S.body.style.pointerEvents = Lp);
        };
    }, [g, S, u, h]), C.useEffect(() => () => {
      g && (h.layers.delete(g), h.layersWithOutsidePointerEventsDisabled.delete(g), Bp());
    }, [g, h]), C.useEffect(() => {
      const X = () => w({});
      return document.addEventListener(Ks, X), () => document.removeEventListener(Ks, X);
    }, []), /* @__PURE__ */ E.jsx(
      vt.div,
      {
        ...p,
        ref: R,
        style: {
          pointerEvents: z ? q ? "auto" : "none" : void 0,
          ...l.style
        },
        onFocusCapture: Te(l.onFocusCapture, Z.onFocusCapture),
        onBlurCapture: Te(l.onBlurCapture, Z.onBlurCapture),
        onPointerDownCapture: Te(
          l.onPointerDownCapture,
          Y.onPointerDownCapture
        )
      }
    );
  }
);
Av.displayName = Qb;
var Pb = "DismissableLayerBranch", Fb = C.forwardRef((l, r) => {
  const u = C.useContext(wv), o = C.useRef(null), s = At(r, o);
  return C.useEffect(() => {
    const f = o.current;
    if (f)
      return u.branches.add(f), () => {
        u.branches.delete(f);
      };
  }, [u.branches]), /* @__PURE__ */ E.jsx(vt.div, { ...l, ref: s });
});
Fb.displayName = Pb;
function Jb(l, r = globalThis == null ? void 0 : globalThis.document) {
  const u = zn(l), o = C.useRef(!1), s = C.useRef(() => {
  });
  return C.useEffect(() => {
    const f = (m) => {
      if (m.target && !o.current) {
        let p = function() {
          Cv(
            Zb,
            u,
            h,
            { discrete: !0 }
          );
        };
        const h = { originalEvent: m };
        m.pointerType === "touch" ? (r.removeEventListener("click", s.current), s.current = p, r.addEventListener("click", s.current, { once: !0 })) : p();
      } else
        r.removeEventListener("click", s.current);
      o.current = !1;
    }, d = window.setTimeout(() => {
      r.addEventListener("pointerdown", f);
    }, 0);
    return () => {
      window.clearTimeout(d), r.removeEventListener("pointerdown", f), r.removeEventListener("click", s.current);
    };
  }, [r, u]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function $b(l, r = globalThis == null ? void 0 : globalThis.document) {
  const u = zn(l), o = C.useRef(!1);
  return C.useEffect(() => {
    const s = (f) => {
      f.target && !o.current && Cv(Kb, u, { originalEvent: f }, {
        discrete: !1
      });
    };
    return r.addEventListener("focusin", s), () => r.removeEventListener("focusin", s);
  }, [r, u]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function Bp() {
  const l = new CustomEvent(Ks);
  document.dispatchEvent(l);
}
function Cv(l, r, u, { discrete: o }) {
  const s = u.originalEvent.target, f = new CustomEvent(l, { bubbles: !1, cancelable: !0, detail: u });
  r && s.addEventListener(l, r, { once: !0 }), o ? xv(s, f) : s.dispatchEvent(f);
}
var Ts = 0;
function Wb() {
  C.useEffect(() => {
    const l = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", l[0] ?? kp()), document.body.insertAdjacentElement("beforeend", l[1] ?? kp()), Ts++, () => {
      Ts === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((r) => r.remove()), Ts--;
    };
  }, []);
}
function kp() {
  const l = document.createElement("span");
  return l.setAttribute("data-radix-focus-guard", ""), l.tabIndex = 0, l.style.outline = "none", l.style.opacity = "0", l.style.position = "fixed", l.style.pointerEvents = "none", l;
}
var _s = "focusScope.autoFocusOnMount", Ns = "focusScope.autoFocusOnUnmount", Hp = { bubbles: !1, cancelable: !0 }, Ib = "FocusScope", Rv = C.forwardRef((l, r) => {
  const {
    loop: u = !1,
    trapped: o = !1,
    onMountAutoFocus: s,
    onUnmountAutoFocus: f,
    ...d
  } = l, [m, p] = C.useState(null), h = zn(s), g = zn(f), y = C.useRef(null), S = At(r, (A) => p(A)), w = C.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  C.useEffect(() => {
    if (o) {
      let A = function(z) {
        if (w.paused || !m) return;
        const q = z.target;
        m.contains(q) ? y.current = q : fl(y.current, { select: !0 });
      }, O = function(z) {
        if (w.paused || !m) return;
        const q = z.relatedTarget;
        q !== null && (m.contains(q) || fl(y.current, { select: !0 }));
      }, T = function(z) {
        if (document.activeElement === document.body)
          for (const Y of z)
            Y.removedNodes.length > 0 && fl(m);
      };
      document.addEventListener("focusin", A), document.addEventListener("focusout", O);
      const j = new MutationObserver(T);
      return m && j.observe(m, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", A), document.removeEventListener("focusout", O), j.disconnect();
      };
    }
  }, [o, m, w.paused]), C.useEffect(() => {
    if (m) {
      Yp.add(w);
      const A = document.activeElement;
      if (!m.contains(A)) {
        const T = new CustomEvent(_s, Hp);
        m.addEventListener(_s, h), m.dispatchEvent(T), T.defaultPrevented || (e1(r1(Mv(m)), { select: !0 }), document.activeElement === A && fl(m));
      }
      return () => {
        m.removeEventListener(_s, h), setTimeout(() => {
          const T = new CustomEvent(Ns, Hp);
          m.addEventListener(Ns, g), m.dispatchEvent(T), T.defaultPrevented || fl(A ?? document.body, { select: !0 }), m.removeEventListener(Ns, g), Yp.remove(w);
        }, 0);
      };
    }
  }, [m, h, g, w]);
  const R = C.useCallback(
    (A) => {
      if (!u && !o || w.paused) return;
      const O = A.key === "Tab" && !A.altKey && !A.ctrlKey && !A.metaKey, T = document.activeElement;
      if (O && T) {
        const j = A.currentTarget, [z, q] = t1(j);
        z && q ? !A.shiftKey && T === q ? (A.preventDefault(), u && fl(z, { select: !0 })) : A.shiftKey && T === z && (A.preventDefault(), u && fl(q, { select: !0 })) : T === j && A.preventDefault();
      }
    },
    [u, o, w.paused]
  );
  return /* @__PURE__ */ E.jsx(vt.div, { tabIndex: -1, ...d, ref: S, onKeyDown: R });
});
Rv.displayName = Ib;
function e1(l, { select: r = !1 } = {}) {
  const u = document.activeElement;
  for (const o of l)
    if (fl(o, { select: r }), document.activeElement !== u) return;
}
function t1(l) {
  const r = Mv(l), u = Gp(r, l), o = Gp(r.reverse(), l);
  return [u, o];
}
function Mv(l) {
  const r = [], u = document.createTreeWalker(l, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const s = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || s ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; u.nextNode(); ) r.push(u.currentNode);
  return r;
}
function Gp(l, r) {
  for (const u of l)
    if (!n1(u, { upTo: r })) return u;
}
function n1(l, { upTo: r }) {
  if (getComputedStyle(l).visibility === "hidden") return !0;
  for (; l; ) {
    if (r !== void 0 && l === r) return !1;
    if (getComputedStyle(l).display === "none") return !0;
    l = l.parentElement;
  }
  return !1;
}
function l1(l) {
  return l instanceof HTMLInputElement && "select" in l;
}
function fl(l, { select: r = !1 } = {}) {
  if (l && l.focus) {
    const u = document.activeElement;
    l.focus({ preventScroll: !0 }), l !== u && l1(l) && r && l.select();
  }
}
var Yp = a1();
function a1() {
  let l = [];
  return {
    add(r) {
      const u = l[0];
      r !== u && (u == null || u.pause()), l = qp(l, r), l.unshift(r);
    },
    remove(r) {
      var u;
      l = qp(l, r), (u = l[0]) == null || u.resume();
    }
  };
}
function qp(l, r) {
  const u = [...l], o = u.indexOf(r);
  return o !== -1 && u.splice(o, 1), u;
}
function r1(l) {
  return l.filter((r) => r.tagName !== "A");
}
var i1 = gv[" useId ".trim().toString()] || (() => {
}), o1 = 0;
function Ps(l) {
  const [r, u] = C.useState(i1());
  return dl(() => {
    u((o) => o ?? String(o1++));
  }, [l]), l || (r ? `radix-${r}` : "");
}
const u1 = ["top", "right", "bottom", "left"], ml = Math.min, Dt = Math.max, Fo = Math.round, Lo = Math.floor, sn = (l) => ({
  x: l,
  y: l
}), c1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, s1 = {
  start: "end",
  end: "start"
};
function Fs(l, r, u) {
  return Dt(l, ml(r, u));
}
function Un(l, r) {
  return typeof l == "function" ? l(r) : l;
}
function Ln(l) {
  return l.split("-")[0];
}
function Qa(l) {
  return l.split("-")[1];
}
function hf(l) {
  return l === "x" ? "y" : "x";
}
function pf(l) {
  return l === "y" ? "height" : "width";
}
function jn(l) {
  return ["top", "bottom"].includes(Ln(l)) ? "y" : "x";
}
function vf(l) {
  return hf(jn(l));
}
function f1(l, r, u) {
  u === void 0 && (u = !1);
  const o = Qa(l), s = vf(l), f = pf(s);
  let d = s === "x" ? o === (u ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return r.reference[f] > r.floating[f] && (d = Jo(d)), [d, Jo(d)];
}
function d1(l) {
  const r = Jo(l);
  return [Js(l), r, Js(r)];
}
function Js(l) {
  return l.replace(/start|end/g, (r) => s1[r]);
}
function m1(l, r, u) {
  const o = ["left", "right"], s = ["right", "left"], f = ["top", "bottom"], d = ["bottom", "top"];
  switch (l) {
    case "top":
    case "bottom":
      return u ? r ? s : o : r ? o : s;
    case "left":
    case "right":
      return r ? f : d;
    default:
      return [];
  }
}
function h1(l, r, u, o) {
  const s = Qa(l);
  let f = m1(Ln(l), u === "start", o);
  return s && (f = f.map((d) => d + "-" + s), r && (f = f.concat(f.map(Js)))), f;
}
function Jo(l) {
  return l.replace(/left|right|bottom|top/g, (r) => c1[r]);
}
function p1(l) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...l
  };
}
function Ov(l) {
  return typeof l != "number" ? p1(l) : {
    top: l,
    right: l,
    bottom: l,
    left: l
  };
}
function $o(l) {
  const {
    x: r,
    y: u,
    width: o,
    height: s
  } = l;
  return {
    width: o,
    height: s,
    top: u,
    left: r,
    right: r + o,
    bottom: u + s,
    x: r,
    y: u
  };
}
function Vp(l, r, u) {
  let {
    reference: o,
    floating: s
  } = l;
  const f = jn(r), d = vf(r), m = pf(d), p = Ln(r), h = f === "y", g = o.x + o.width / 2 - s.width / 2, y = o.y + o.height / 2 - s.height / 2, S = o[m] / 2 - s[m] / 2;
  let w;
  switch (p) {
    case "top":
      w = {
        x: g,
        y: o.y - s.height
      };
      break;
    case "bottom":
      w = {
        x: g,
        y: o.y + o.height
      };
      break;
    case "right":
      w = {
        x: o.x + o.width,
        y
      };
      break;
    case "left":
      w = {
        x: o.x - s.width,
        y
      };
      break;
    default:
      w = {
        x: o.x,
        y: o.y
      };
  }
  switch (Qa(r)) {
    case "start":
      w[d] -= S * (u && h ? -1 : 1);
      break;
    case "end":
      w[d] += S * (u && h ? -1 : 1);
      break;
  }
  return w;
}
const v1 = async (l, r, u) => {
  const {
    placement: o = "bottom",
    strategy: s = "absolute",
    middleware: f = [],
    platform: d
  } = u, m = f.filter(Boolean), p = await (d.isRTL == null ? void 0 : d.isRTL(r));
  let h = await d.getElementRects({
    reference: l,
    floating: r,
    strategy: s
  }), {
    x: g,
    y
  } = Vp(h, o, p), S = o, w = {}, R = 0;
  for (let A = 0; A < m.length; A++) {
    const {
      name: O,
      fn: T
    } = m[A], {
      x: j,
      y: z,
      data: q,
      reset: Y
    } = await T({
      x: g,
      y,
      initialPlacement: o,
      placement: S,
      strategy: s,
      middlewareData: w,
      rects: h,
      platform: d,
      elements: {
        reference: l,
        floating: r
      }
    });
    g = j ?? g, y = z ?? y, w = {
      ...w,
      [O]: {
        ...w[O],
        ...q
      }
    }, Y && R <= 50 && (R++, typeof Y == "object" && (Y.placement && (S = Y.placement), Y.rects && (h = Y.rects === !0 ? await d.getElementRects({
      reference: l,
      floating: r,
      strategy: s
    }) : Y.rects), {
      x: g,
      y
    } = Vp(h, S, p)), A = -1);
  }
  return {
    x: g,
    y,
    placement: S,
    strategy: s,
    middlewareData: w
  };
};
async function ri(l, r) {
  var u;
  r === void 0 && (r = {});
  const {
    x: o,
    y: s,
    platform: f,
    rects: d,
    elements: m,
    strategy: p
  } = l, {
    boundary: h = "clippingAncestors",
    rootBoundary: g = "viewport",
    elementContext: y = "floating",
    altBoundary: S = !1,
    padding: w = 0
  } = Un(r, l), R = Ov(w), O = m[S ? y === "floating" ? "reference" : "floating" : y], T = $o(await f.getClippingRect({
    element: (u = await (f.isElement == null ? void 0 : f.isElement(O))) == null || u ? O : O.contextElement || await (f.getDocumentElement == null ? void 0 : f.getDocumentElement(m.floating)),
    boundary: h,
    rootBoundary: g,
    strategy: p
  })), j = y === "floating" ? {
    x: o,
    y: s,
    width: d.floating.width,
    height: d.floating.height
  } : d.reference, z = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(m.floating)), q = await (f.isElement == null ? void 0 : f.isElement(z)) ? await (f.getScale == null ? void 0 : f.getScale(z)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, Y = $o(f.convertOffsetParentRelativeRectToViewportRelativeRect ? await f.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: m,
    rect: j,
    offsetParent: z,
    strategy: p
  }) : j);
  return {
    top: (T.top - Y.top + R.top) / q.y,
    bottom: (Y.bottom - T.bottom + R.bottom) / q.y,
    left: (T.left - Y.left + R.left) / q.x,
    right: (Y.right - T.right + R.right) / q.x
  };
}
const g1 = (l) => ({
  name: "arrow",
  options: l,
  async fn(r) {
    const {
      x: u,
      y: o,
      placement: s,
      rects: f,
      platform: d,
      elements: m,
      middlewareData: p
    } = r, {
      element: h,
      padding: g = 0
    } = Un(l, r) || {};
    if (h == null)
      return {};
    const y = Ov(g), S = {
      x: u,
      y: o
    }, w = vf(s), R = pf(w), A = await d.getDimensions(h), O = w === "y", T = O ? "top" : "left", j = O ? "bottom" : "right", z = O ? "clientHeight" : "clientWidth", q = f.reference[R] + f.reference[w] - S[w] - f.floating[R], Y = S[w] - f.reference[w], Z = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(h));
    let X = Z ? Z[z] : 0;
    (!X || !await (d.isElement == null ? void 0 : d.isElement(Z))) && (X = m.floating[z] || f.floating[R]);
    const V = q / 2 - Y / 2, te = X / 2 - A[R] / 2 - 1, I = ml(y[T], te), ne = ml(y[j], te), ae = I, se = X - A[R] - ne, de = X / 2 - A[R] / 2 + V, ce = Fs(ae, de, se), D = !p.arrow && Qa(s) != null && de !== ce && f.reference[R] / 2 - (de < ae ? I : ne) - A[R] / 2 < 0, P = D ? de < ae ? de - ae : de - se : 0;
    return {
      [w]: S[w] + P,
      data: {
        [w]: ce,
        centerOffset: de - ce - P,
        ...D && {
          alignmentOffset: P
        }
      },
      reset: D
    };
  }
}), y1 = function(l) {
  return l === void 0 && (l = {}), {
    name: "flip",
    options: l,
    async fn(r) {
      var u, o;
      const {
        placement: s,
        middlewareData: f,
        rects: d,
        initialPlacement: m,
        platform: p,
        elements: h
      } = r, {
        mainAxis: g = !0,
        crossAxis: y = !0,
        fallbackPlacements: S,
        fallbackStrategy: w = "bestFit",
        fallbackAxisSideDirection: R = "none",
        flipAlignment: A = !0,
        ...O
      } = Un(l, r);
      if ((u = f.arrow) != null && u.alignmentOffset)
        return {};
      const T = Ln(s), j = jn(m), z = Ln(m) === m, q = await (p.isRTL == null ? void 0 : p.isRTL(h.floating)), Y = S || (z || !A ? [Jo(m)] : d1(m)), Z = R !== "none";
      !S && Z && Y.push(...h1(m, A, R, q));
      const X = [m, ...Y], V = await ri(r, O), te = [];
      let I = ((o = f.flip) == null ? void 0 : o.overflows) || [];
      if (g && te.push(V[T]), y) {
        const ce = f1(s, d, q);
        te.push(V[ce[0]], V[ce[1]]);
      }
      if (I = [...I, {
        placement: s,
        overflows: te
      }], !te.every((ce) => ce <= 0)) {
        var ne, ae;
        const ce = (((ne = f.flip) == null ? void 0 : ne.index) || 0) + 1, D = X[ce];
        if (D) {
          var se;
          const k = y === "alignment" ? j !== jn(D) : !1, W = ((se = I[0]) == null ? void 0 : se.overflows[0]) > 0;
          if (!k || W)
            return {
              data: {
                index: ce,
                overflows: I
              },
              reset: {
                placement: D
              }
            };
        }
        let P = (ae = I.filter((k) => k.overflows[0] <= 0).sort((k, W) => k.overflows[1] - W.overflows[1])[0]) == null ? void 0 : ae.placement;
        if (!P)
          switch (w) {
            case "bestFit": {
              var de;
              const k = (de = I.filter((W) => {
                if (Z) {
                  const x = jn(W.placement);
                  return x === j || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  x === "y";
                }
                return !0;
              }).map((W) => [W.placement, W.overflows.filter((x) => x > 0).reduce((x, G) => x + G, 0)]).sort((W, x) => W[1] - x[1])[0]) == null ? void 0 : de[0];
              k && (P = k);
              break;
            }
            case "initialPlacement":
              P = m;
              break;
          }
        if (s !== P)
          return {
            reset: {
              placement: P
            }
          };
      }
      return {};
    }
  };
};
function Xp(l, r) {
  return {
    top: l.top - r.height,
    right: l.right - r.width,
    bottom: l.bottom - r.height,
    left: l.left - r.width
  };
}
function Qp(l) {
  return u1.some((r) => l[r] >= 0);
}
const b1 = function(l) {
  return l === void 0 && (l = {}), {
    name: "hide",
    options: l,
    async fn(r) {
      const {
        rects: u
      } = r, {
        strategy: o = "referenceHidden",
        ...s
      } = Un(l, r);
      switch (o) {
        case "referenceHidden": {
          const f = await ri(r, {
            ...s,
            elementContext: "reference"
          }), d = Xp(f, u.reference);
          return {
            data: {
              referenceHiddenOffsets: d,
              referenceHidden: Qp(d)
            }
          };
        }
        case "escaped": {
          const f = await ri(r, {
            ...s,
            altBoundary: !0
          }), d = Xp(f, u.floating);
          return {
            data: {
              escapedOffsets: d,
              escaped: Qp(d)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function x1(l, r) {
  const {
    placement: u,
    platform: o,
    elements: s
  } = l, f = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), d = Ln(u), m = Qa(u), p = jn(u) === "y", h = ["left", "top"].includes(d) ? -1 : 1, g = f && p ? -1 : 1, y = Un(r, l);
  let {
    mainAxis: S,
    crossAxis: w,
    alignmentAxis: R
  } = typeof y == "number" ? {
    mainAxis: y,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: y.mainAxis || 0,
    crossAxis: y.crossAxis || 0,
    alignmentAxis: y.alignmentAxis
  };
  return m && typeof R == "number" && (w = m === "end" ? R * -1 : R), p ? {
    x: w * g,
    y: S * h
  } : {
    x: S * h,
    y: w * g
  };
}
const S1 = function(l) {
  return l === void 0 && (l = 0), {
    name: "offset",
    options: l,
    async fn(r) {
      var u, o;
      const {
        x: s,
        y: f,
        placement: d,
        middlewareData: m
      } = r, p = await x1(r, l);
      return d === ((u = m.offset) == null ? void 0 : u.placement) && (o = m.arrow) != null && o.alignmentOffset ? {} : {
        x: s + p.x,
        y: f + p.y,
        data: {
          ...p,
          placement: d
        }
      };
    }
  };
}, E1 = function(l) {
  return l === void 0 && (l = {}), {
    name: "shift",
    options: l,
    async fn(r) {
      const {
        x: u,
        y: o,
        placement: s
      } = r, {
        mainAxis: f = !0,
        crossAxis: d = !1,
        limiter: m = {
          fn: (O) => {
            let {
              x: T,
              y: j
            } = O;
            return {
              x: T,
              y: j
            };
          }
        },
        ...p
      } = Un(l, r), h = {
        x: u,
        y: o
      }, g = await ri(r, p), y = jn(Ln(s)), S = hf(y);
      let w = h[S], R = h[y];
      if (f) {
        const O = S === "y" ? "top" : "left", T = S === "y" ? "bottom" : "right", j = w + g[O], z = w - g[T];
        w = Fs(j, w, z);
      }
      if (d) {
        const O = y === "y" ? "top" : "left", T = y === "y" ? "bottom" : "right", j = R + g[O], z = R - g[T];
        R = Fs(j, R, z);
      }
      const A = m.fn({
        ...r,
        [S]: w,
        [y]: R
      });
      return {
        ...A,
        data: {
          x: A.x - u,
          y: A.y - o,
          enabled: {
            [S]: f,
            [y]: d
          }
        }
      };
    }
  };
}, w1 = function(l) {
  return l === void 0 && (l = {}), {
    options: l,
    fn(r) {
      const {
        x: u,
        y: o,
        placement: s,
        rects: f,
        middlewareData: d
      } = r, {
        offset: m = 0,
        mainAxis: p = !0,
        crossAxis: h = !0
      } = Un(l, r), g = {
        x: u,
        y: o
      }, y = jn(s), S = hf(y);
      let w = g[S], R = g[y];
      const A = Un(m, r), O = typeof A == "number" ? {
        mainAxis: A,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...A
      };
      if (p) {
        const z = S === "y" ? "height" : "width", q = f.reference[S] - f.floating[z] + O.mainAxis, Y = f.reference[S] + f.reference[z] - O.mainAxis;
        w < q ? w = q : w > Y && (w = Y);
      }
      if (h) {
        var T, j;
        const z = S === "y" ? "width" : "height", q = ["top", "left"].includes(Ln(s)), Y = f.reference[y] - f.floating[z] + (q && ((T = d.offset) == null ? void 0 : T[y]) || 0) + (q ? 0 : O.crossAxis), Z = f.reference[y] + f.reference[z] + (q ? 0 : ((j = d.offset) == null ? void 0 : j[y]) || 0) - (q ? O.crossAxis : 0);
        R < Y ? R = Y : R > Z && (R = Z);
      }
      return {
        [S]: w,
        [y]: R
      };
    }
  };
}, A1 = function(l) {
  return l === void 0 && (l = {}), {
    name: "size",
    options: l,
    async fn(r) {
      var u, o;
      const {
        placement: s,
        rects: f,
        platform: d,
        elements: m
      } = r, {
        apply: p = () => {
        },
        ...h
      } = Un(l, r), g = await ri(r, h), y = Ln(s), S = Qa(s), w = jn(s) === "y", {
        width: R,
        height: A
      } = f.floating;
      let O, T;
      y === "top" || y === "bottom" ? (O = y, T = S === (await (d.isRTL == null ? void 0 : d.isRTL(m.floating)) ? "start" : "end") ? "left" : "right") : (T = y, O = S === "end" ? "top" : "bottom");
      const j = A - g.top - g.bottom, z = R - g.left - g.right, q = ml(A - g[O], j), Y = ml(R - g[T], z), Z = !r.middlewareData.shift;
      let X = q, V = Y;
      if ((u = r.middlewareData.shift) != null && u.enabled.x && (V = z), (o = r.middlewareData.shift) != null && o.enabled.y && (X = j), Z && !S) {
        const I = Dt(g.left, 0), ne = Dt(g.right, 0), ae = Dt(g.top, 0), se = Dt(g.bottom, 0);
        w ? V = R - 2 * (I !== 0 || ne !== 0 ? I + ne : Dt(g.left, g.right)) : X = A - 2 * (ae !== 0 || se !== 0 ? ae + se : Dt(g.top, g.bottom));
      }
      await p({
        ...r,
        availableWidth: V,
        availableHeight: X
      });
      const te = await d.getDimensions(m.floating);
      return R !== te.width || A !== te.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function au() {
  return typeof window < "u";
}
function Za(l) {
  return Tv(l) ? (l.nodeName || "").toLowerCase() : "#document";
}
function jt(l) {
  var r;
  return (l == null || (r = l.ownerDocument) == null ? void 0 : r.defaultView) || window;
}
function dn(l) {
  var r;
  return (r = (Tv(l) ? l.ownerDocument : l.document) || window.document) == null ? void 0 : r.documentElement;
}
function Tv(l) {
  return au() ? l instanceof Node || l instanceof jt(l).Node : !1;
}
function Jt(l) {
  return au() ? l instanceof Element || l instanceof jt(l).Element : !1;
}
function fn(l) {
  return au() ? l instanceof HTMLElement || l instanceof jt(l).HTMLElement : !1;
}
function Zp(l) {
  return !au() || typeof ShadowRoot > "u" ? !1 : l instanceof ShadowRoot || l instanceof jt(l).ShadowRoot;
}
function hi(l) {
  const {
    overflow: r,
    overflowX: u,
    overflowY: o,
    display: s
  } = $t(l);
  return /auto|scroll|overlay|hidden|clip/.test(r + o + u) && !["inline", "contents"].includes(s);
}
function C1(l) {
  return ["table", "td", "th"].includes(Za(l));
}
function ru(l) {
  return [":popover-open", ":modal"].some((r) => {
    try {
      return l.matches(r);
    } catch {
      return !1;
    }
  });
}
function gf(l) {
  const r = yf(), u = Jt(l) ? $t(l) : l;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((o) => u[o] ? u[o] !== "none" : !1) || (u.containerType ? u.containerType !== "normal" : !1) || !r && (u.backdropFilter ? u.backdropFilter !== "none" : !1) || !r && (u.filter ? u.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((o) => (u.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (u.contain || "").includes(o));
}
function R1(l) {
  let r = hl(l);
  for (; fn(r) && !Va(r); ) {
    if (gf(r))
      return r;
    if (ru(r))
      return null;
    r = hl(r);
  }
  return null;
}
function yf() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Va(l) {
  return ["html", "body", "#document"].includes(Za(l));
}
function $t(l) {
  return jt(l).getComputedStyle(l);
}
function iu(l) {
  return Jt(l) ? {
    scrollLeft: l.scrollLeft,
    scrollTop: l.scrollTop
  } : {
    scrollLeft: l.scrollX,
    scrollTop: l.scrollY
  };
}
function hl(l) {
  if (Za(l) === "html")
    return l;
  const r = (
    // Step into the shadow DOM of the parent of a slotted node.
    l.assignedSlot || // DOM Element detected.
    l.parentNode || // ShadowRoot detected.
    Zp(l) && l.host || // Fallback.
    dn(l)
  );
  return Zp(r) ? r.host : r;
}
function _v(l) {
  const r = hl(l);
  return Va(r) ? l.ownerDocument ? l.ownerDocument.body : l.body : fn(r) && hi(r) ? r : _v(r);
}
function ii(l, r, u) {
  var o;
  r === void 0 && (r = []), u === void 0 && (u = !0);
  const s = _v(l), f = s === ((o = l.ownerDocument) == null ? void 0 : o.body), d = jt(s);
  if (f) {
    const m = $s(d);
    return r.concat(d, d.visualViewport || [], hi(s) ? s : [], m && u ? ii(m) : []);
  }
  return r.concat(s, ii(s, [], u));
}
function $s(l) {
  return l.parent && Object.getPrototypeOf(l.parent) ? l.frameElement : null;
}
function Nv(l) {
  const r = $t(l);
  let u = parseFloat(r.width) || 0, o = parseFloat(r.height) || 0;
  const s = fn(l), f = s ? l.offsetWidth : u, d = s ? l.offsetHeight : o, m = Fo(u) !== f || Fo(o) !== d;
  return m && (u = f, o = d), {
    width: u,
    height: o,
    $: m
  };
}
function bf(l) {
  return Jt(l) ? l : l.contextElement;
}
function Ya(l) {
  const r = bf(l);
  if (!fn(r))
    return sn(1);
  const u = r.getBoundingClientRect(), {
    width: o,
    height: s,
    $: f
  } = Nv(r);
  let d = (f ? Fo(u.width) : u.width) / o, m = (f ? Fo(u.height) : u.height) / s;
  return (!d || !Number.isFinite(d)) && (d = 1), (!m || !Number.isFinite(m)) && (m = 1), {
    x: d,
    y: m
  };
}
const M1 = /* @__PURE__ */ sn(0);
function Dv(l) {
  const r = jt(l);
  return !yf() || !r.visualViewport ? M1 : {
    x: r.visualViewport.offsetLeft,
    y: r.visualViewport.offsetTop
  };
}
function O1(l, r, u) {
  return r === void 0 && (r = !1), !u || r && u !== jt(l) ? !1 : r;
}
function Bl(l, r, u, o) {
  r === void 0 && (r = !1), u === void 0 && (u = !1);
  const s = l.getBoundingClientRect(), f = bf(l);
  let d = sn(1);
  r && (o ? Jt(o) && (d = Ya(o)) : d = Ya(l));
  const m = O1(f, u, o) ? Dv(f) : sn(0);
  let p = (s.left + m.x) / d.x, h = (s.top + m.y) / d.y, g = s.width / d.x, y = s.height / d.y;
  if (f) {
    const S = jt(f), w = o && Jt(o) ? jt(o) : o;
    let R = S, A = $s(R);
    for (; A && o && w !== R; ) {
      const O = Ya(A), T = A.getBoundingClientRect(), j = $t(A), z = T.left + (A.clientLeft + parseFloat(j.paddingLeft)) * O.x, q = T.top + (A.clientTop + parseFloat(j.paddingTop)) * O.y;
      p *= O.x, h *= O.y, g *= O.x, y *= O.y, p += z, h += q, R = jt(A), A = $s(R);
    }
  }
  return $o({
    width: g,
    height: y,
    x: p,
    y: h
  });
}
function xf(l, r) {
  const u = iu(l).scrollLeft;
  return r ? r.left + u : Bl(dn(l)).left + u;
}
function jv(l, r, u) {
  u === void 0 && (u = !1);
  const o = l.getBoundingClientRect(), s = o.left + r.scrollLeft - (u ? 0 : (
    // RTL <body> scrollbar.
    xf(l, o)
  )), f = o.top + r.scrollTop;
  return {
    x: s,
    y: f
  };
}
function T1(l) {
  let {
    elements: r,
    rect: u,
    offsetParent: o,
    strategy: s
  } = l;
  const f = s === "fixed", d = dn(o), m = r ? ru(r.floating) : !1;
  if (o === d || m && f)
    return u;
  let p = {
    scrollLeft: 0,
    scrollTop: 0
  }, h = sn(1);
  const g = sn(0), y = fn(o);
  if ((y || !y && !f) && ((Za(o) !== "body" || hi(d)) && (p = iu(o)), fn(o))) {
    const w = Bl(o);
    h = Ya(o), g.x = w.x + o.clientLeft, g.y = w.y + o.clientTop;
  }
  const S = d && !y && !f ? jv(d, p, !0) : sn(0);
  return {
    width: u.width * h.x,
    height: u.height * h.y,
    x: u.x * h.x - p.scrollLeft * h.x + g.x + S.x,
    y: u.y * h.y - p.scrollTop * h.y + g.y + S.y
  };
}
function _1(l) {
  return Array.from(l.getClientRects());
}
function N1(l) {
  const r = dn(l), u = iu(l), o = l.ownerDocument.body, s = Dt(r.scrollWidth, r.clientWidth, o.scrollWidth, o.clientWidth), f = Dt(r.scrollHeight, r.clientHeight, o.scrollHeight, o.clientHeight);
  let d = -u.scrollLeft + xf(l);
  const m = -u.scrollTop;
  return $t(o).direction === "rtl" && (d += Dt(r.clientWidth, o.clientWidth) - s), {
    width: s,
    height: f,
    x: d,
    y: m
  };
}
function D1(l, r) {
  const u = jt(l), o = dn(l), s = u.visualViewport;
  let f = o.clientWidth, d = o.clientHeight, m = 0, p = 0;
  if (s) {
    f = s.width, d = s.height;
    const h = yf();
    (!h || h && r === "fixed") && (m = s.offsetLeft, p = s.offsetTop);
  }
  return {
    width: f,
    height: d,
    x: m,
    y: p
  };
}
function j1(l, r) {
  const u = Bl(l, !0, r === "fixed"), o = u.top + l.clientTop, s = u.left + l.clientLeft, f = fn(l) ? Ya(l) : sn(1), d = l.clientWidth * f.x, m = l.clientHeight * f.y, p = s * f.x, h = o * f.y;
  return {
    width: d,
    height: m,
    x: p,
    y: h
  };
}
function Kp(l, r, u) {
  let o;
  if (r === "viewport")
    o = D1(l, u);
  else if (r === "document")
    o = N1(dn(l));
  else if (Jt(r))
    o = j1(r, u);
  else {
    const s = Dv(l);
    o = {
      x: r.x - s.x,
      y: r.y - s.y,
      width: r.width,
      height: r.height
    };
  }
  return $o(o);
}
function zv(l, r) {
  const u = hl(l);
  return u === r || !Jt(u) || Va(u) ? !1 : $t(u).position === "fixed" || zv(u, r);
}
function z1(l, r) {
  const u = r.get(l);
  if (u)
    return u;
  let o = ii(l, [], !1).filter((m) => Jt(m) && Za(m) !== "body"), s = null;
  const f = $t(l).position === "fixed";
  let d = f ? hl(l) : l;
  for (; Jt(d) && !Va(d); ) {
    const m = $t(d), p = gf(d);
    !p && m.position === "fixed" && (s = null), (f ? !p && !s : !p && m.position === "static" && !!s && ["absolute", "fixed"].includes(s.position) || hi(d) && !p && zv(l, d)) ? o = o.filter((g) => g !== d) : s = m, d = hl(d);
  }
  return r.set(l, o), o;
}
function U1(l) {
  let {
    element: r,
    boundary: u,
    rootBoundary: o,
    strategy: s
  } = l;
  const d = [...u === "clippingAncestors" ? ru(r) ? [] : z1(r, this._c) : [].concat(u), o], m = d[0], p = d.reduce((h, g) => {
    const y = Kp(r, g, s);
    return h.top = Dt(y.top, h.top), h.right = ml(y.right, h.right), h.bottom = ml(y.bottom, h.bottom), h.left = Dt(y.left, h.left), h;
  }, Kp(r, m, s));
  return {
    width: p.right - p.left,
    height: p.bottom - p.top,
    x: p.left,
    y: p.top
  };
}
function L1(l) {
  const {
    width: r,
    height: u
  } = Nv(l);
  return {
    width: r,
    height: u
  };
}
function B1(l, r, u) {
  const o = fn(r), s = dn(r), f = u === "fixed", d = Bl(l, !0, f, r);
  let m = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const p = sn(0);
  function h() {
    p.x = xf(s);
  }
  if (o || !o && !f)
    if ((Za(r) !== "body" || hi(s)) && (m = iu(r)), o) {
      const w = Bl(r, !0, f, r);
      p.x = w.x + r.clientLeft, p.y = w.y + r.clientTop;
    } else s && h();
  f && !o && s && h();
  const g = s && !o && !f ? jv(s, m) : sn(0), y = d.left + m.scrollLeft - p.x - g.x, S = d.top + m.scrollTop - p.y - g.y;
  return {
    x: y,
    y: S,
    width: d.width,
    height: d.height
  };
}
function Ds(l) {
  return $t(l).position === "static";
}
function Pp(l, r) {
  if (!fn(l) || $t(l).position === "fixed")
    return null;
  if (r)
    return r(l);
  let u = l.offsetParent;
  return dn(l) === u && (u = u.ownerDocument.body), u;
}
function Uv(l, r) {
  const u = jt(l);
  if (ru(l))
    return u;
  if (!fn(l)) {
    let s = hl(l);
    for (; s && !Va(s); ) {
      if (Jt(s) && !Ds(s))
        return s;
      s = hl(s);
    }
    return u;
  }
  let o = Pp(l, r);
  for (; o && C1(o) && Ds(o); )
    o = Pp(o, r);
  return o && Va(o) && Ds(o) && !gf(o) ? u : o || R1(l) || u;
}
const k1 = async function(l) {
  const r = this.getOffsetParent || Uv, u = this.getDimensions, o = await u(l.floating);
  return {
    reference: B1(l.reference, await r(l.floating), l.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function H1(l) {
  return $t(l).direction === "rtl";
}
const G1 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: T1,
  getDocumentElement: dn,
  getClippingRect: U1,
  getOffsetParent: Uv,
  getElementRects: k1,
  getClientRects: _1,
  getDimensions: L1,
  getScale: Ya,
  isElement: Jt,
  isRTL: H1
};
function Lv(l, r) {
  return l.x === r.x && l.y === r.y && l.width === r.width && l.height === r.height;
}
function Y1(l, r) {
  let u = null, o;
  const s = dn(l);
  function f() {
    var m;
    clearTimeout(o), (m = u) == null || m.disconnect(), u = null;
  }
  function d(m, p) {
    m === void 0 && (m = !1), p === void 0 && (p = 1), f();
    const h = l.getBoundingClientRect(), {
      left: g,
      top: y,
      width: S,
      height: w
    } = h;
    if (m || r(), !S || !w)
      return;
    const R = Lo(y), A = Lo(s.clientWidth - (g + S)), O = Lo(s.clientHeight - (y + w)), T = Lo(g), z = {
      rootMargin: -R + "px " + -A + "px " + -O + "px " + -T + "px",
      threshold: Dt(0, ml(1, p)) || 1
    };
    let q = !0;
    function Y(Z) {
      const X = Z[0].intersectionRatio;
      if (X !== p) {
        if (!q)
          return d();
        X ? d(!1, X) : o = setTimeout(() => {
          d(!1, 1e-7);
        }, 1e3);
      }
      X === 1 && !Lv(h, l.getBoundingClientRect()) && d(), q = !1;
    }
    try {
      u = new IntersectionObserver(Y, {
        ...z,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      u = new IntersectionObserver(Y, z);
    }
    u.observe(l);
  }
  return d(!0), f;
}
function q1(l, r, u, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: f = !0,
    elementResize: d = typeof ResizeObserver == "function",
    layoutShift: m = typeof IntersectionObserver == "function",
    animationFrame: p = !1
  } = o, h = bf(l), g = s || f ? [...h ? ii(h) : [], ...ii(r)] : [];
  g.forEach((T) => {
    s && T.addEventListener("scroll", u, {
      passive: !0
    }), f && T.addEventListener("resize", u);
  });
  const y = h && m ? Y1(h, u) : null;
  let S = -1, w = null;
  d && (w = new ResizeObserver((T) => {
    let [j] = T;
    j && j.target === h && w && (w.unobserve(r), cancelAnimationFrame(S), S = requestAnimationFrame(() => {
      var z;
      (z = w) == null || z.observe(r);
    })), u();
  }), h && !p && w.observe(h), w.observe(r));
  let R, A = p ? Bl(l) : null;
  p && O();
  function O() {
    const T = Bl(l);
    A && !Lv(A, T) && u(), A = T, R = requestAnimationFrame(O);
  }
  return u(), () => {
    var T;
    g.forEach((j) => {
      s && j.removeEventListener("scroll", u), f && j.removeEventListener("resize", u);
    }), y == null || y(), (T = w) == null || T.disconnect(), w = null, p && cancelAnimationFrame(R);
  };
}
const V1 = S1, X1 = E1, Q1 = y1, Z1 = A1, K1 = b1, Fp = g1, P1 = w1, F1 = (l, r, u) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: G1,
    ...u
  }, f = {
    ...s.platform,
    _c: o
  };
  return v1(l, r, {
    ...s,
    platform: f
  });
};
var Zo = typeof document < "u" ? C.useLayoutEffect : C.useEffect;
function Wo(l, r) {
  if (l === r)
    return !0;
  if (typeof l != typeof r)
    return !1;
  if (typeof l == "function" && l.toString() === r.toString())
    return !0;
  let u, o, s;
  if (l && r && typeof l == "object") {
    if (Array.isArray(l)) {
      if (u = l.length, u !== r.length) return !1;
      for (o = u; o-- !== 0; )
        if (!Wo(l[o], r[o]))
          return !1;
      return !0;
    }
    if (s = Object.keys(l), u = s.length, u !== Object.keys(r).length)
      return !1;
    for (o = u; o-- !== 0; )
      if (!{}.hasOwnProperty.call(r, s[o]))
        return !1;
    for (o = u; o-- !== 0; ) {
      const f = s[o];
      if (!(f === "_owner" && l.$$typeof) && !Wo(l[f], r[f]))
        return !1;
    }
    return !0;
  }
  return l !== l && r !== r;
}
function Bv(l) {
  return typeof window > "u" ? 1 : (l.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Jp(l, r) {
  const u = Bv(l);
  return Math.round(r * u) / u;
}
function js(l) {
  const r = C.useRef(l);
  return Zo(() => {
    r.current = l;
  }), r;
}
function J1(l) {
  l === void 0 && (l = {});
  const {
    placement: r = "bottom",
    strategy: u = "absolute",
    middleware: o = [],
    platform: s,
    elements: {
      reference: f,
      floating: d
    } = {},
    transform: m = !0,
    whileElementsMounted: p,
    open: h
  } = l, [g, y] = C.useState({
    x: 0,
    y: 0,
    strategy: u,
    placement: r,
    middlewareData: {},
    isPositioned: !1
  }), [S, w] = C.useState(o);
  Wo(S, o) || w(o);
  const [R, A] = C.useState(null), [O, T] = C.useState(null), j = C.useCallback((k) => {
    k !== Z.current && (Z.current = k, A(k));
  }, []), z = C.useCallback((k) => {
    k !== X.current && (X.current = k, T(k));
  }, []), q = f || R, Y = d || O, Z = C.useRef(null), X = C.useRef(null), V = C.useRef(g), te = p != null, I = js(p), ne = js(s), ae = js(h), se = C.useCallback(() => {
    if (!Z.current || !X.current)
      return;
    const k = {
      placement: r,
      strategy: u,
      middleware: S
    };
    ne.current && (k.platform = ne.current), F1(Z.current, X.current, k).then((W) => {
      const x = {
        ...W,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: ae.current !== !1
      };
      de.current && !Wo(V.current, x) && (V.current = x, mf.flushSync(() => {
        y(x);
      }));
    });
  }, [S, r, u, ne, ae]);
  Zo(() => {
    h === !1 && V.current.isPositioned && (V.current.isPositioned = !1, y((k) => ({
      ...k,
      isPositioned: !1
    })));
  }, [h]);
  const de = C.useRef(!1);
  Zo(() => (de.current = !0, () => {
    de.current = !1;
  }), []), Zo(() => {
    if (q && (Z.current = q), Y && (X.current = Y), q && Y) {
      if (I.current)
        return I.current(q, Y, se);
      se();
    }
  }, [q, Y, se, I, te]);
  const ce = C.useMemo(() => ({
    reference: Z,
    floating: X,
    setReference: j,
    setFloating: z
  }), [j, z]), D = C.useMemo(() => ({
    reference: q,
    floating: Y
  }), [q, Y]), P = C.useMemo(() => {
    const k = {
      position: u,
      left: 0,
      top: 0
    };
    if (!D.floating)
      return k;
    const W = Jp(D.floating, g.x), x = Jp(D.floating, g.y);
    return m ? {
      ...k,
      transform: "translate(" + W + "px, " + x + "px)",
      ...Bv(D.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: u,
      left: W,
      top: x
    };
  }, [u, m, D.floating, g.x, g.y]);
  return C.useMemo(() => ({
    ...g,
    update: se,
    refs: ce,
    elements: D,
    floatingStyles: P
  }), [g, se, ce, D, P]);
}
const $1 = (l) => {
  function r(u) {
    return {}.hasOwnProperty.call(u, "current");
  }
  return {
    name: "arrow",
    options: l,
    fn(u) {
      const {
        element: o,
        padding: s
      } = typeof l == "function" ? l(u) : l;
      return o && r(o) ? o.current != null ? Fp({
        element: o.current,
        padding: s
      }).fn(u) : {} : o ? Fp({
        element: o,
        padding: s
      }).fn(u) : {};
    }
  };
}, W1 = (l, r) => ({
  ...V1(l),
  options: [l, r]
}), I1 = (l, r) => ({
  ...X1(l),
  options: [l, r]
}), ex = (l, r) => ({
  ...P1(l),
  options: [l, r]
}), tx = (l, r) => ({
  ...Q1(l),
  options: [l, r]
}), nx = (l, r) => ({
  ...Z1(l),
  options: [l, r]
}), lx = (l, r) => ({
  ...K1(l),
  options: [l, r]
}), ax = (l, r) => ({
  ...$1(l),
  options: [l, r]
});
var rx = "Arrow", kv = C.forwardRef((l, r) => {
  const { children: u, width: o = 10, height: s = 5, ...f } = l;
  return /* @__PURE__ */ E.jsx(
    vt.svg,
    {
      ...f,
      ref: r,
      width: o,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: l.asChild ? u : /* @__PURE__ */ E.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
kv.displayName = rx;
var ix = kv;
function ox(l) {
  const [r, u] = C.useState(void 0);
  return dl(() => {
    if (l) {
      u({ width: l.offsetWidth, height: l.offsetHeight });
      const o = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const f = s[0];
        let d, m;
        if ("borderBoxSize" in f) {
          const p = f.borderBoxSize, h = Array.isArray(p) ? p[0] : p;
          d = h.inlineSize, m = h.blockSize;
        } else
          d = l.offsetWidth, m = l.offsetHeight;
        u({ width: d, height: m });
      });
      return o.observe(l, { box: "border-box" }), () => o.unobserve(l);
    } else
      u(void 0);
  }, [l]), r;
}
var Sf = "Popper", [Hv, Gv] = mi(Sf), [ux, Yv] = Hv(Sf), qv = (l) => {
  const { __scopePopper: r, children: u } = l, [o, s] = C.useState(null);
  return /* @__PURE__ */ E.jsx(ux, { scope: r, anchor: o, onAnchorChange: s, children: u });
};
qv.displayName = Sf;
var Vv = "PopperAnchor", Xv = C.forwardRef(
  (l, r) => {
    const { __scopePopper: u, virtualRef: o, ...s } = l, f = Yv(Vv, u), d = C.useRef(null), m = At(r, d);
    return C.useEffect(() => {
      f.onAnchorChange((o == null ? void 0 : o.current) || d.current);
    }), o ? null : /* @__PURE__ */ E.jsx(vt.div, { ...s, ref: m });
  }
);
Xv.displayName = Vv;
var Ef = "PopperContent", [cx, sx] = Hv(Ef), Qv = C.forwardRef(
  (l, r) => {
    var me, ve, Ce, ke, Me, le;
    const {
      __scopePopper: u,
      side: o = "bottom",
      sideOffset: s = 0,
      align: f = "center",
      alignOffset: d = 0,
      arrowPadding: m = 0,
      avoidCollisions: p = !0,
      collisionBoundary: h = [],
      collisionPadding: g = 0,
      sticky: y = "partial",
      hideWhenDetached: S = !1,
      updatePositionStrategy: w = "optimized",
      onPlaced: R,
      ...A
    } = l, O = Yv(Ef, u), [T, j] = C.useState(null), z = At(r, (Re) => j(Re)), [q, Y] = C.useState(null), Z = ox(q), X = (Z == null ? void 0 : Z.width) ?? 0, V = (Z == null ? void 0 : Z.height) ?? 0, te = o + (f !== "center" ? "-" + f : ""), I = typeof g == "number" ? g : { top: 0, right: 0, bottom: 0, left: 0, ...g }, ne = Array.isArray(h) ? h : [h], ae = ne.length > 0, se = {
      padding: I,
      boundary: ne.filter(dx),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: ae
    }, { refs: de, floatingStyles: ce, placement: D, isPositioned: P, middlewareData: k } = J1({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: te,
      whileElementsMounted: (...Re) => q1(...Re, {
        animationFrame: w === "always"
      }),
      elements: {
        reference: O.anchor
      },
      middleware: [
        W1({ mainAxis: s + V, alignmentAxis: d }),
        p && I1({
          mainAxis: !0,
          crossAxis: !1,
          limiter: y === "partial" ? ex() : void 0,
          ...se
        }),
        p && tx({ ...se }),
        nx({
          ...se,
          apply: ({ elements: Re, rects: He, availableWidth: We, availableHeight: yt }) => {
            const { width: Qe, height: Qt } = He.reference, st = Re.floating.style;
            st.setProperty("--radix-popper-available-width", `${We}px`), st.setProperty("--radix-popper-available-height", `${yt}px`), st.setProperty("--radix-popper-anchor-width", `${Qe}px`), st.setProperty("--radix-popper-anchor-height", `${Qt}px`);
          }
        }),
        q && ax({ element: q, padding: m }),
        mx({ arrowWidth: X, arrowHeight: V }),
        S && lx({ strategy: "referenceHidden", ...se })
      ]
    }), [W, x] = Pv(D), G = zn(R);
    dl(() => {
      P && (G == null || G());
    }, [P, G]);
    const J = (me = k.arrow) == null ? void 0 : me.x, $ = (ve = k.arrow) == null ? void 0 : ve.y, ee = ((Ce = k.arrow) == null ? void 0 : Ce.centerOffset) !== 0, [ge, ue] = C.useState();
    return dl(() => {
      T && ue(window.getComputedStyle(T).zIndex);
    }, [T]), /* @__PURE__ */ E.jsx(
      "div",
      {
        ref: de.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...ce,
          transform: P ? ce.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ge,
          "--radix-popper-transform-origin": [
            (ke = k.transformOrigin) == null ? void 0 : ke.x,
            (Me = k.transformOrigin) == null ? void 0 : Me.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((le = k.hide) == null ? void 0 : le.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: l.dir,
        children: /* @__PURE__ */ E.jsx(
          cx,
          {
            scope: u,
            placedSide: W,
            onArrowChange: Y,
            arrowX: J,
            arrowY: $,
            shouldHideArrow: ee,
            children: /* @__PURE__ */ E.jsx(
              vt.div,
              {
                "data-side": W,
                "data-align": x,
                ...A,
                ref: z,
                style: {
                  ...A.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: P ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Qv.displayName = Ef;
var Zv = "PopperArrow", fx = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Kv = C.forwardRef(function(r, u) {
  const { __scopePopper: o, ...s } = r, f = sx(Zv, o), d = fx[f.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ E.jsx(
      "span",
      {
        ref: f.onArrowChange,
        style: {
          position: "absolute",
          left: f.arrowX,
          top: f.arrowY,
          [d]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[f.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[f.placedSide],
          visibility: f.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ E.jsx(
          ix,
          {
            ...s,
            ref: u,
            style: {
              ...s.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Kv.displayName = Zv;
function dx(l) {
  return l !== null;
}
var mx = (l) => ({
  name: "transformOrigin",
  options: l,
  fn(r) {
    var O, T, j;
    const { placement: u, rects: o, middlewareData: s } = r, d = ((O = s.arrow) == null ? void 0 : O.centerOffset) !== 0, m = d ? 0 : l.arrowWidth, p = d ? 0 : l.arrowHeight, [h, g] = Pv(u), y = { start: "0%", center: "50%", end: "100%" }[g], S = (((T = s.arrow) == null ? void 0 : T.x) ?? 0) + m / 2, w = (((j = s.arrow) == null ? void 0 : j.y) ?? 0) + p / 2;
    let R = "", A = "";
    return h === "bottom" ? (R = d ? y : `${S}px`, A = `${-p}px`) : h === "top" ? (R = d ? y : `${S}px`, A = `${o.floating.height + p}px`) : h === "right" ? (R = `${-p}px`, A = d ? y : `${w}px`) : h === "left" && (R = `${o.floating.width + p}px`, A = d ? y : `${w}px`), { data: { x: R, y: A } };
  }
});
function Pv(l) {
  const [r, u = "center"] = l.split("-");
  return [r, u];
}
var hx = qv, px = Xv, vx = Qv, gx = Kv, yx = "Portal", Fv = C.forwardRef((l, r) => {
  var m;
  const { container: u, ...o } = l, [s, f] = C.useState(!1);
  dl(() => f(!0), []);
  const d = u || s && ((m = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : m.body);
  return d ? Ir.createPortal(/* @__PURE__ */ E.jsx(vt.div, { ...o, ref: r }), d) : null;
});
Fv.displayName = yx;
function bx(l, r) {
  return C.useReducer((u, o) => r[u][o] ?? u, l);
}
var pi = (l) => {
  const { present: r, children: u } = l, o = xx(r), s = typeof u == "function" ? u({ present: o.isPresent }) : C.Children.only(u), f = At(o.ref, Sx(s));
  return typeof u == "function" || o.isPresent ? C.cloneElement(s, { ref: f }) : null;
};
pi.displayName = "Presence";
function xx(l) {
  const [r, u] = C.useState(), o = C.useRef(null), s = C.useRef(l), f = C.useRef("none"), d = l ? "mounted" : "unmounted", [m, p] = bx(d, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return C.useEffect(() => {
    const h = Bo(o.current);
    f.current = m === "mounted" ? h : "none";
  }, [m]), dl(() => {
    const h = o.current, g = s.current;
    if (g !== l) {
      const S = f.current, w = Bo(h);
      l ? p("MOUNT") : w === "none" || (h == null ? void 0 : h.display) === "none" ? p("UNMOUNT") : p(g && S !== w ? "ANIMATION_OUT" : "UNMOUNT"), s.current = l;
    }
  }, [l, p]), dl(() => {
    if (r) {
      let h;
      const g = r.ownerDocument.defaultView ?? window, y = (w) => {
        const A = Bo(o.current).includes(w.animationName);
        if (w.target === r && A && (p("ANIMATION_END"), !s.current)) {
          const O = r.style.animationFillMode;
          r.style.animationFillMode = "forwards", h = g.setTimeout(() => {
            r.style.animationFillMode === "forwards" && (r.style.animationFillMode = O);
          });
        }
      }, S = (w) => {
        w.target === r && (f.current = Bo(o.current));
      };
      return r.addEventListener("animationstart", S), r.addEventListener("animationcancel", y), r.addEventListener("animationend", y), () => {
        g.clearTimeout(h), r.removeEventListener("animationstart", S), r.removeEventListener("animationcancel", y), r.removeEventListener("animationend", y);
      };
    } else
      p("ANIMATION_END");
  }, [r, p]), {
    isPresent: ["mounted", "unmountSuspended"].includes(m),
    ref: C.useCallback((h) => {
      o.current = h ? getComputedStyle(h) : null, u(h);
    }, [])
  };
}
function Bo(l) {
  return (l == null ? void 0 : l.animationName) || "none";
}
function Sx(l) {
  var o, s;
  let r = (o = Object.getOwnPropertyDescriptor(l.props, "ref")) == null ? void 0 : o.get, u = r && "isReactWarning" in r && r.isReactWarning;
  return u ? l.ref : (r = (s = Object.getOwnPropertyDescriptor(l, "ref")) == null ? void 0 : s.get, u = r && "isReactWarning" in r && r.isReactWarning, u ? l.props.ref : l.props.ref || l.ref);
}
var zs = "rovingFocusGroup.onEntryFocus", Ex = { bubbles: !1, cancelable: !0 }, vi = "RovingFocusGroup", [Ws, Jv, wx] = Sv(vi), [Ax, $v] = mi(
  vi,
  [wx]
), [Cx, Rx] = Ax(vi), Wv = C.forwardRef(
  (l, r) => /* @__PURE__ */ E.jsx(Ws.Provider, { scope: l.__scopeRovingFocusGroup, children: /* @__PURE__ */ E.jsx(Ws.Slot, { scope: l.__scopeRovingFocusGroup, children: /* @__PURE__ */ E.jsx(Mx, { ...l, ref: r }) }) })
);
Wv.displayName = vi;
var Mx = C.forwardRef((l, r) => {
  const {
    __scopeRovingFocusGroup: u,
    orientation: o,
    loop: s = !1,
    dir: f,
    currentTabStopId: d,
    defaultCurrentTabStopId: m,
    onCurrentTabStopIdChange: p,
    onEntryFocus: h,
    preventScrollOnEntryFocus: g = !1,
    ...y
  } = l, S = C.useRef(null), w = At(r, S), R = Ev(f), [A, O] = bv({
    prop: d,
    defaultProp: m ?? null,
    onChange: p,
    caller: vi
  }), [T, j] = C.useState(!1), z = zn(h), q = Jv(u), Y = C.useRef(!1), [Z, X] = C.useState(0);
  return C.useEffect(() => {
    const V = S.current;
    if (V)
      return V.addEventListener(zs, z), () => V.removeEventListener(zs, z);
  }, [z]), /* @__PURE__ */ E.jsx(
    Cx,
    {
      scope: u,
      orientation: o,
      dir: R,
      loop: s,
      currentTabStopId: A,
      onItemFocus: C.useCallback(
        (V) => O(V),
        [O]
      ),
      onItemShiftTab: C.useCallback(() => j(!0), []),
      onFocusableItemAdd: C.useCallback(
        () => X((V) => V + 1),
        []
      ),
      onFocusableItemRemove: C.useCallback(
        () => X((V) => V - 1),
        []
      ),
      children: /* @__PURE__ */ E.jsx(
        vt.div,
        {
          tabIndex: T || Z === 0 ? -1 : 0,
          "data-orientation": o,
          ...y,
          ref: w,
          style: { outline: "none", ...l.style },
          onMouseDown: Te(l.onMouseDown, () => {
            Y.current = !0;
          }),
          onFocus: Te(l.onFocus, (V) => {
            const te = !Y.current;
            if (V.target === V.currentTarget && te && !T) {
              const I = new CustomEvent(zs, Ex);
              if (V.currentTarget.dispatchEvent(I), !I.defaultPrevented) {
                const ne = q().filter((D) => D.focusable), ae = ne.find((D) => D.active), se = ne.find((D) => D.id === A), ce = [ae, se, ...ne].filter(
                  Boolean
                ).map((D) => D.ref.current);
                tg(ce, g);
              }
            }
            Y.current = !1;
          }),
          onBlur: Te(l.onBlur, () => j(!1))
        }
      )
    }
  );
}), Iv = "RovingFocusGroupItem", eg = C.forwardRef(
  (l, r) => {
    const {
      __scopeRovingFocusGroup: u,
      focusable: o = !0,
      active: s = !1,
      tabStopId: f,
      children: d,
      ...m
    } = l, p = Ps(), h = f || p, g = Rx(Iv, u), y = g.currentTabStopId === h, S = Jv(u), { onFocusableItemAdd: w, onFocusableItemRemove: R, currentTabStopId: A } = g;
    return C.useEffect(() => {
      if (o)
        return w(), () => R();
    }, [o, w, R]), /* @__PURE__ */ E.jsx(
      Ws.ItemSlot,
      {
        scope: u,
        id: h,
        focusable: o,
        active: s,
        children: /* @__PURE__ */ E.jsx(
          vt.span,
          {
            tabIndex: y ? 0 : -1,
            "data-orientation": g.orientation,
            ...m,
            ref: r,
            onMouseDown: Te(l.onMouseDown, (O) => {
              o ? g.onItemFocus(h) : O.preventDefault();
            }),
            onFocus: Te(l.onFocus, () => g.onItemFocus(h)),
            onKeyDown: Te(l.onKeyDown, (O) => {
              if (O.key === "Tab" && O.shiftKey) {
                g.onItemShiftTab();
                return;
              }
              if (O.target !== O.currentTarget) return;
              const T = _x(O, g.orientation, g.dir);
              if (T !== void 0) {
                if (O.metaKey || O.ctrlKey || O.altKey || O.shiftKey) return;
                O.preventDefault();
                let z = S().filter((q) => q.focusable).map((q) => q.ref.current);
                if (T === "last") z.reverse();
                else if (T === "prev" || T === "next") {
                  T === "prev" && z.reverse();
                  const q = z.indexOf(O.currentTarget);
                  z = g.loop ? Nx(z, q + 1) : z.slice(q + 1);
                }
                setTimeout(() => tg(z));
              }
            }),
            children: typeof d == "function" ? d({ isCurrentTabStop: y, hasTabStop: A != null }) : d
          }
        )
      }
    );
  }
);
eg.displayName = Iv;
var Ox = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Tx(l, r) {
  return r !== "rtl" ? l : l === "ArrowLeft" ? "ArrowRight" : l === "ArrowRight" ? "ArrowLeft" : l;
}
function _x(l, r, u) {
  const o = Tx(l.key, u);
  if (!(r === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(r === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return Ox[o];
}
function tg(l, r = !1) {
  const u = document.activeElement;
  for (const o of l)
    if (o === u || (o.focus({ preventScroll: r }), document.activeElement !== u)) return;
}
function Nx(l, r) {
  return l.map((u, o) => l[(r + o) % l.length]);
}
var Dx = Wv, jx = eg, zx = function(l) {
  if (typeof document > "u")
    return null;
  var r = Array.isArray(l) ? l[0] : l;
  return r.ownerDocument.body;
}, Na = /* @__PURE__ */ new WeakMap(), ko = /* @__PURE__ */ new WeakMap(), Ho = {}, Us = 0, ng = function(l) {
  return l && (l.host || ng(l.parentNode));
}, Ux = function(l, r) {
  return r.map(function(u) {
    if (l.contains(u))
      return u;
    var o = ng(u);
    return o && l.contains(o) ? o : (console.error("aria-hidden", u, "in not contained inside", l, ". Doing nothing"), null);
  }).filter(function(u) {
    return !!u;
  });
}, Lx = function(l, r, u, o) {
  var s = Ux(r, Array.isArray(l) ? l : [l]);
  Ho[u] || (Ho[u] = /* @__PURE__ */ new WeakMap());
  var f = Ho[u], d = [], m = /* @__PURE__ */ new Set(), p = new Set(s), h = function(y) {
    !y || m.has(y) || (m.add(y), h(y.parentNode));
  };
  s.forEach(h);
  var g = function(y) {
    !y || p.has(y) || Array.prototype.forEach.call(y.children, function(S) {
      if (m.has(S))
        g(S);
      else
        try {
          var w = S.getAttribute(o), R = w !== null && w !== "false", A = (Na.get(S) || 0) + 1, O = (f.get(S) || 0) + 1;
          Na.set(S, A), f.set(S, O), d.push(S), A === 1 && R && ko.set(S, !0), O === 1 && S.setAttribute(u, "true"), R || S.setAttribute(o, "true");
        } catch (T) {
          console.error("aria-hidden: cannot operate on ", S, T);
        }
    });
  };
  return g(r), m.clear(), Us++, function() {
    d.forEach(function(y) {
      var S = Na.get(y) - 1, w = f.get(y) - 1;
      Na.set(y, S), f.set(y, w), S || (ko.has(y) || y.removeAttribute(o), ko.delete(y)), w || y.removeAttribute(u);
    }), Us--, Us || (Na = /* @__PURE__ */ new WeakMap(), Na = /* @__PURE__ */ new WeakMap(), ko = /* @__PURE__ */ new WeakMap(), Ho = {});
  };
}, Bx = function(l, r, u) {
  u === void 0 && (u = "data-aria-hidden");
  var o = Array.from(Array.isArray(l) ? l : [l]), s = zx(l);
  return s ? (o.push.apply(o, Array.from(s.querySelectorAll("[aria-live], script"))), Lx(o, s, u, "aria-hidden")) : function() {
    return null;
  };
}, un = function() {
  return un = Object.assign || function(r) {
    for (var u, o = 1, s = arguments.length; o < s; o++) {
      u = arguments[o];
      for (var f in u) Object.prototype.hasOwnProperty.call(u, f) && (r[f] = u[f]);
    }
    return r;
  }, un.apply(this, arguments);
};
function lg(l, r) {
  var u = {};
  for (var o in l) Object.prototype.hasOwnProperty.call(l, o) && r.indexOf(o) < 0 && (u[o] = l[o]);
  if (l != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, o = Object.getOwnPropertySymbols(l); s < o.length; s++)
      r.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(l, o[s]) && (u[o[s]] = l[o[s]]);
  return u;
}
function kx(l, r, u) {
  if (u || arguments.length === 2) for (var o = 0, s = r.length, f; o < s; o++)
    (f || !(o in r)) && (f || (f = Array.prototype.slice.call(r, 0, o)), f[o] = r[o]);
  return l.concat(f || Array.prototype.slice.call(r));
}
var Ko = "right-scroll-bar-position", Po = "width-before-scroll-bar", Hx = "with-scroll-bars-hidden", Gx = "--removed-body-scroll-bar-size";
function Ls(l, r) {
  return typeof l == "function" ? l(r) : l && (l.current = r), l;
}
function Yx(l, r) {
  var u = C.useState(function() {
    return {
      // value
      value: l,
      // last callback
      callback: r,
      // "memoized" public interface
      facade: {
        get current() {
          return u.value;
        },
        set current(o) {
          var s = u.value;
          s !== o && (u.value = o, u.callback(o, s));
        }
      }
    };
  })[0];
  return u.callback = r, u.facade;
}
var qx = typeof window < "u" ? C.useLayoutEffect : C.useEffect, $p = /* @__PURE__ */ new WeakMap();
function Vx(l, r) {
  var u = Yx(null, function(o) {
    return l.forEach(function(s) {
      return Ls(s, o);
    });
  });
  return qx(function() {
    var o = $p.get(u);
    if (o) {
      var s = new Set(o), f = new Set(l), d = u.current;
      s.forEach(function(m) {
        f.has(m) || Ls(m, null);
      }), f.forEach(function(m) {
        s.has(m) || Ls(m, d);
      });
    }
    $p.set(u, l);
  }, [l]), u;
}
function Xx(l) {
  return l;
}
function Qx(l, r) {
  r === void 0 && (r = Xx);
  var u = [], o = !1, s = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return u.length ? u[u.length - 1] : l;
    },
    useMedium: function(f) {
      var d = r(f, o);
      return u.push(d), function() {
        u = u.filter(function(m) {
          return m !== d;
        });
      };
    },
    assignSyncMedium: function(f) {
      for (o = !0; u.length; ) {
        var d = u;
        u = [], d.forEach(f);
      }
      u = {
        push: function(m) {
          return f(m);
        },
        filter: function() {
          return u;
        }
      };
    },
    assignMedium: function(f) {
      o = !0;
      var d = [];
      if (u.length) {
        var m = u;
        u = [], m.forEach(f), d = u;
      }
      var p = function() {
        var g = d;
        d = [], g.forEach(f);
      }, h = function() {
        return Promise.resolve().then(p);
      };
      h(), u = {
        push: function(g) {
          d.push(g), h();
        },
        filter: function(g) {
          return d = d.filter(g), u;
        }
      };
    }
  };
  return s;
}
function Zx(l) {
  l === void 0 && (l = {});
  var r = Qx(null);
  return r.options = un({ async: !0, ssr: !1 }, l), r;
}
var ag = function(l) {
  var r = l.sideCar, u = lg(l, ["sideCar"]);
  if (!r)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = r.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return C.createElement(o, un({}, u));
};
ag.isSideCarExport = !0;
function Kx(l, r) {
  return l.useMedium(r), ag;
}
var rg = Zx(), Bs = function() {
}, ou = C.forwardRef(function(l, r) {
  var u = C.useRef(null), o = C.useState({
    onScrollCapture: Bs,
    onWheelCapture: Bs,
    onTouchMoveCapture: Bs
  }), s = o[0], f = o[1], d = l.forwardProps, m = l.children, p = l.className, h = l.removeScrollBar, g = l.enabled, y = l.shards, S = l.sideCar, w = l.noRelative, R = l.noIsolation, A = l.inert, O = l.allowPinchZoom, T = l.as, j = T === void 0 ? "div" : T, z = l.gapMode, q = lg(l, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), Y = S, Z = Vx([u, r]), X = un(un({}, q), s);
  return C.createElement(
    C.Fragment,
    null,
    g && C.createElement(Y, { sideCar: rg, removeScrollBar: h, shards: y, noRelative: w, noIsolation: R, inert: A, setCallbacks: f, allowPinchZoom: !!O, lockRef: u, gapMode: z }),
    d ? C.cloneElement(C.Children.only(m), un(un({}, X), { ref: Z })) : C.createElement(j, un({}, X, { className: p, ref: Z }), m)
  );
});
ou.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ou.classNames = {
  fullWidth: Po,
  zeroRight: Ko
};
var Px = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Fx() {
  if (!document)
    return null;
  var l = document.createElement("style");
  l.type = "text/css";
  var r = Px();
  return r && l.setAttribute("nonce", r), l;
}
function Jx(l, r) {
  l.styleSheet ? l.styleSheet.cssText = r : l.appendChild(document.createTextNode(r));
}
function $x(l) {
  var r = document.head || document.getElementsByTagName("head")[0];
  r.appendChild(l);
}
var Wx = function() {
  var l = 0, r = null;
  return {
    add: function(u) {
      l == 0 && (r = Fx()) && (Jx(r, u), $x(r)), l++;
    },
    remove: function() {
      l--, !l && r && (r.parentNode && r.parentNode.removeChild(r), r = null);
    }
  };
}, Ix = function() {
  var l = Wx();
  return function(r, u) {
    C.useEffect(function() {
      return l.add(r), function() {
        l.remove();
      };
    }, [r && u]);
  };
}, ig = function() {
  var l = Ix(), r = function(u) {
    var o = u.styles, s = u.dynamic;
    return l(o, s), null;
  };
  return r;
}, eS = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ks = function(l) {
  return parseInt(l || "", 10) || 0;
}, tS = function(l) {
  var r = window.getComputedStyle(document.body), u = r[l === "padding" ? "paddingLeft" : "marginLeft"], o = r[l === "padding" ? "paddingTop" : "marginTop"], s = r[l === "padding" ? "paddingRight" : "marginRight"];
  return [ks(u), ks(o), ks(s)];
}, nS = function(l) {
  if (l === void 0 && (l = "margin"), typeof window > "u")
    return eS;
  var r = tS(l), u = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: r[0],
    top: r[1],
    right: r[2],
    gap: Math.max(0, o - u + r[2] - r[0])
  };
}, lS = ig(), qa = "data-scroll-locked", aS = function(l, r, u, o) {
  var s = l.left, f = l.top, d = l.right, m = l.gap;
  return u === void 0 && (u = "margin"), `
  .`.concat(Hx, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(m, "px ").concat(o, `;
  }
  body[`).concat(qa, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([
    r && "position: relative ".concat(o, ";"),
    u === "margin" && `
    padding-left: `.concat(s, `px;
    padding-top: `).concat(f, `px;
    padding-right: `).concat(d, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(m, "px ").concat(o, `;
    `),
    u === "padding" && "padding-right: ".concat(m, "px ").concat(o, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Ko, ` {
    right: `).concat(m, "px ").concat(o, `;
  }
  
  .`).concat(Po, ` {
    margin-right: `).concat(m, "px ").concat(o, `;
  }
  
  .`).concat(Ko, " .").concat(Ko, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(Po, " .").concat(Po, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(qa, `] {
    `).concat(Gx, ": ").concat(m, `px;
  }
`);
}, Wp = function() {
  var l = parseInt(document.body.getAttribute(qa) || "0", 10);
  return isFinite(l) ? l : 0;
}, rS = function() {
  C.useEffect(function() {
    return document.body.setAttribute(qa, (Wp() + 1).toString()), function() {
      var l = Wp() - 1;
      l <= 0 ? document.body.removeAttribute(qa) : document.body.setAttribute(qa, l.toString());
    };
  }, []);
}, iS = function(l) {
  var r = l.noRelative, u = l.noImportant, o = l.gapMode, s = o === void 0 ? "margin" : o;
  rS();
  var f = C.useMemo(function() {
    return nS(s);
  }, [s]);
  return C.createElement(lS, { styles: aS(f, !r, s, u ? "" : "!important") });
}, Is = !1;
if (typeof window < "u")
  try {
    var Go = Object.defineProperty({}, "passive", {
      get: function() {
        return Is = !0, !0;
      }
    });
    window.addEventListener("test", Go, Go), window.removeEventListener("test", Go, Go);
  } catch {
    Is = !1;
  }
var Da = Is ? { passive: !1 } : !1, oS = function(l) {
  return l.tagName === "TEXTAREA";
}, og = function(l, r) {
  if (!(l instanceof Element))
    return !1;
  var u = window.getComputedStyle(l);
  return (
    // not-not-scrollable
    u[r] !== "hidden" && // contains scroll inside self
    !(u.overflowY === u.overflowX && !oS(l) && u[r] === "visible")
  );
}, uS = function(l) {
  return og(l, "overflowY");
}, cS = function(l) {
  return og(l, "overflowX");
}, Ip = function(l, r) {
  var u = r.ownerDocument, o = r;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var s = ug(l, o);
    if (s) {
      var f = cg(l, o), d = f[1], m = f[2];
      if (d > m)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== u.body);
  return !1;
}, sS = function(l) {
  var r = l.scrollTop, u = l.scrollHeight, o = l.clientHeight;
  return [
    r,
    u,
    o
  ];
}, fS = function(l) {
  var r = l.scrollLeft, u = l.scrollWidth, o = l.clientWidth;
  return [
    r,
    u,
    o
  ];
}, ug = function(l, r) {
  return l === "v" ? uS(r) : cS(r);
}, cg = function(l, r) {
  return l === "v" ? sS(r) : fS(r);
}, dS = function(l, r) {
  return l === "h" && r === "rtl" ? -1 : 1;
}, mS = function(l, r, u, o, s) {
  var f = dS(l, window.getComputedStyle(r).direction), d = f * o, m = u.target, p = r.contains(m), h = !1, g = d > 0, y = 0, S = 0;
  do {
    if (!m)
      break;
    var w = cg(l, m), R = w[0], A = w[1], O = w[2], T = A - O - f * R;
    (R || T) && ug(l, m) && (y += T, S += R);
    var j = m.parentNode;
    m = j && j.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? j.host : j;
  } while (
    // portaled content
    !p && m !== document.body || // self content
    p && (r.contains(m) || r === m)
  );
  return (g && Math.abs(y) < 1 || !g && Math.abs(S) < 1) && (h = !0), h;
}, Yo = function(l) {
  return "changedTouches" in l ? [l.changedTouches[0].clientX, l.changedTouches[0].clientY] : [0, 0];
}, ev = function(l) {
  return [l.deltaX, l.deltaY];
}, tv = function(l) {
  return l && "current" in l ? l.current : l;
}, hS = function(l, r) {
  return l[0] === r[0] && l[1] === r[1];
}, pS = function(l) {
  return `
  .block-interactivity-`.concat(l, ` {pointer-events: none;}
  .allow-interactivity-`).concat(l, ` {pointer-events: all;}
`);
}, vS = 0, ja = [];
function gS(l) {
  var r = C.useRef([]), u = C.useRef([0, 0]), o = C.useRef(), s = C.useState(vS++)[0], f = C.useState(ig)[0], d = C.useRef(l);
  C.useEffect(function() {
    d.current = l;
  }, [l]), C.useEffect(function() {
    if (l.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var A = kx([l.lockRef.current], (l.shards || []).map(tv), !0).filter(Boolean);
      return A.forEach(function(O) {
        return O.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), A.forEach(function(O) {
          return O.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [l.inert, l.lockRef.current, l.shards]);
  var m = C.useCallback(function(A, O) {
    if ("touches" in A && A.touches.length === 2 || A.type === "wheel" && A.ctrlKey)
      return !d.current.allowPinchZoom;
    var T = Yo(A), j = u.current, z = "deltaX" in A ? A.deltaX : j[0] - T[0], q = "deltaY" in A ? A.deltaY : j[1] - T[1], Y, Z = A.target, X = Math.abs(z) > Math.abs(q) ? "h" : "v";
    if ("touches" in A && X === "h" && Z.type === "range")
      return !1;
    var V = Ip(X, Z);
    if (!V)
      return !0;
    if (V ? Y = X : (Y = X === "v" ? "h" : "v", V = Ip(X, Z)), !V)
      return !1;
    if (!o.current && "changedTouches" in A && (z || q) && (o.current = Y), !Y)
      return !0;
    var te = o.current || Y;
    return mS(te, O, A, te === "h" ? z : q);
  }, []), p = C.useCallback(function(A) {
    var O = A;
    if (!(!ja.length || ja[ja.length - 1] !== f)) {
      var T = "deltaY" in O ? ev(O) : Yo(O), j = r.current.filter(function(Y) {
        return Y.name === O.type && (Y.target === O.target || O.target === Y.shadowParent) && hS(Y.delta, T);
      })[0];
      if (j && j.should) {
        O.cancelable && O.preventDefault();
        return;
      }
      if (!j) {
        var z = (d.current.shards || []).map(tv).filter(Boolean).filter(function(Y) {
          return Y.contains(O.target);
        }), q = z.length > 0 ? m(O, z[0]) : !d.current.noIsolation;
        q && O.cancelable && O.preventDefault();
      }
    }
  }, []), h = C.useCallback(function(A, O, T, j) {
    var z = { name: A, delta: O, target: T, should: j, shadowParent: yS(T) };
    r.current.push(z), setTimeout(function() {
      r.current = r.current.filter(function(q) {
        return q !== z;
      });
    }, 1);
  }, []), g = C.useCallback(function(A) {
    u.current = Yo(A), o.current = void 0;
  }, []), y = C.useCallback(function(A) {
    h(A.type, ev(A), A.target, m(A, l.lockRef.current));
  }, []), S = C.useCallback(function(A) {
    h(A.type, Yo(A), A.target, m(A, l.lockRef.current));
  }, []);
  C.useEffect(function() {
    return ja.push(f), l.setCallbacks({
      onScrollCapture: y,
      onWheelCapture: y,
      onTouchMoveCapture: S
    }), document.addEventListener("wheel", p, Da), document.addEventListener("touchmove", p, Da), document.addEventListener("touchstart", g, Da), function() {
      ja = ja.filter(function(A) {
        return A !== f;
      }), document.removeEventListener("wheel", p, Da), document.removeEventListener("touchmove", p, Da), document.removeEventListener("touchstart", g, Da);
    };
  }, []);
  var w = l.removeScrollBar, R = l.inert;
  return C.createElement(
    C.Fragment,
    null,
    R ? C.createElement(f, { styles: pS(s) }) : null,
    w ? C.createElement(iS, { noRelative: l.noRelative, gapMode: l.gapMode }) : null
  );
}
function yS(l) {
  for (var r = null; l !== null; )
    l instanceof ShadowRoot && (r = l.host, l = l.host), l = l.parentNode;
  return r;
}
const bS = Kx(rg, gS);
var sg = C.forwardRef(function(l, r) {
  return C.createElement(ou, un({}, l, { ref: r, sideCar: bS }));
});
sg.classNames = ou.classNames;
var ef = ["Enter", " "], xS = ["ArrowDown", "PageUp", "Home"], fg = ["ArrowUp", "PageDown", "End"], SS = [...xS, ...fg], ES = {
  ltr: [...ef, "ArrowRight"],
  rtl: [...ef, "ArrowLeft"]
}, wS = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, gi = "Menu", [oi, AS, CS] = Sv(gi), [Hl, dg] = mi(gi, [
  CS,
  Gv,
  $v
]), uu = Gv(), mg = $v(), [RS, Gl] = Hl(gi), [MS, yi] = Hl(gi), hg = (l) => {
  const { __scopeMenu: r, open: u = !1, children: o, dir: s, onOpenChange: f, modal: d = !0 } = l, m = uu(r), [p, h] = C.useState(null), g = C.useRef(!1), y = zn(f), S = Ev(s);
  return C.useEffect(() => {
    const w = () => {
      g.current = !0, document.addEventListener("pointerdown", R, { capture: !0, once: !0 }), document.addEventListener("pointermove", R, { capture: !0, once: !0 });
    }, R = () => g.current = !1;
    return document.addEventListener("keydown", w, { capture: !0 }), () => {
      document.removeEventListener("keydown", w, { capture: !0 }), document.removeEventListener("pointerdown", R, { capture: !0 }), document.removeEventListener("pointermove", R, { capture: !0 });
    };
  }, []), /* @__PURE__ */ E.jsx(hx, { ...m, children: /* @__PURE__ */ E.jsx(
    RS,
    {
      scope: r,
      open: u,
      onOpenChange: y,
      content: p,
      onContentChange: h,
      children: /* @__PURE__ */ E.jsx(
        MS,
        {
          scope: r,
          onClose: C.useCallback(() => y(!1), [y]),
          isUsingKeyboardRef: g,
          dir: S,
          modal: d,
          children: o
        }
      )
    }
  ) });
};
hg.displayName = gi;
var OS = "MenuAnchor", wf = C.forwardRef(
  (l, r) => {
    const { __scopeMenu: u, ...o } = l, s = uu(u);
    return /* @__PURE__ */ E.jsx(px, { ...s, ...o, ref: r });
  }
);
wf.displayName = OS;
var Af = "MenuPortal", [TS, pg] = Hl(Af, {
  forceMount: void 0
}), vg = (l) => {
  const { __scopeMenu: r, forceMount: u, children: o, container: s } = l, f = Gl(Af, r);
  return /* @__PURE__ */ E.jsx(TS, { scope: r, forceMount: u, children: /* @__PURE__ */ E.jsx(pi, { present: u || f.open, children: /* @__PURE__ */ E.jsx(Fv, { asChild: !0, container: s, children: o }) }) });
};
vg.displayName = Af;
var Xt = "MenuContent", [_S, Cf] = Hl(Xt), gg = C.forwardRef(
  (l, r) => {
    const u = pg(Xt, l.__scopeMenu), { forceMount: o = u.forceMount, ...s } = l, f = Gl(Xt, l.__scopeMenu), d = yi(Xt, l.__scopeMenu);
    return /* @__PURE__ */ E.jsx(oi.Provider, { scope: l.__scopeMenu, children: /* @__PURE__ */ E.jsx(pi, { present: o || f.open, children: /* @__PURE__ */ E.jsx(oi.Slot, { scope: l.__scopeMenu, children: d.modal ? /* @__PURE__ */ E.jsx(NS, { ...s, ref: r }) : /* @__PURE__ */ E.jsx(DS, { ...s, ref: r }) }) }) });
  }
), NS = C.forwardRef(
  (l, r) => {
    const u = Gl(Xt, l.__scopeMenu), o = C.useRef(null), s = At(r, o);
    return C.useEffect(() => {
      const f = o.current;
      if (f) return Bx(f);
    }, []), /* @__PURE__ */ E.jsx(
      Rf,
      {
        ...l,
        ref: s,
        trapFocus: u.open,
        disableOutsidePointerEvents: u.open,
        disableOutsideScroll: !0,
        onFocusOutside: Te(
          l.onFocusOutside,
          (f) => f.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => u.onOpenChange(!1)
      }
    );
  }
), DS = C.forwardRef((l, r) => {
  const u = Gl(Xt, l.__scopeMenu);
  return /* @__PURE__ */ E.jsx(
    Rf,
    {
      ...l,
      ref: r,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => u.onOpenChange(!1)
    }
  );
}), jS = /* @__PURE__ */ ai("MenuContent.ScrollLock"), Rf = C.forwardRef(
  (l, r) => {
    const {
      __scopeMenu: u,
      loop: o = !1,
      trapFocus: s,
      onOpenAutoFocus: f,
      onCloseAutoFocus: d,
      disableOutsidePointerEvents: m,
      onEntryFocus: p,
      onEscapeKeyDown: h,
      onPointerDownOutside: g,
      onFocusOutside: y,
      onInteractOutside: S,
      onDismiss: w,
      disableOutsideScroll: R,
      ...A
    } = l, O = Gl(Xt, u), T = yi(Xt, u), j = uu(u), z = mg(u), q = AS(u), [Y, Z] = C.useState(null), X = C.useRef(null), V = At(r, X, O.onContentChange), te = C.useRef(0), I = C.useRef(""), ne = C.useRef(0), ae = C.useRef(null), se = C.useRef("right"), de = C.useRef(0), ce = R ? sg : C.Fragment, D = R ? { as: jS, allowPinchZoom: !0 } : void 0, P = (W) => {
      var me, ve;
      const x = I.current + W, G = q().filter((Ce) => !Ce.disabled), J = document.activeElement, $ = (me = G.find((Ce) => Ce.ref.current === J)) == null ? void 0 : me.textValue, ee = G.map((Ce) => Ce.textValue), ge = QS(ee, x, $), ue = (ve = G.find((Ce) => Ce.textValue === ge)) == null ? void 0 : ve.ref.current;
      (function Ce(ke) {
        I.current = ke, window.clearTimeout(te.current), ke !== "" && (te.current = window.setTimeout(() => Ce(""), 1e3));
      })(x), ue && setTimeout(() => ue.focus());
    };
    C.useEffect(() => () => window.clearTimeout(te.current), []), Wb();
    const k = C.useCallback((W) => {
      var G, J;
      return se.current === ((G = ae.current) == null ? void 0 : G.side) && KS(W, (J = ae.current) == null ? void 0 : J.area);
    }, []);
    return /* @__PURE__ */ E.jsx(
      _S,
      {
        scope: u,
        searchRef: I,
        onItemEnter: C.useCallback(
          (W) => {
            k(W) && W.preventDefault();
          },
          [k]
        ),
        onItemLeave: C.useCallback(
          (W) => {
            var x;
            k(W) || ((x = X.current) == null || x.focus(), Z(null));
          },
          [k]
        ),
        onTriggerLeave: C.useCallback(
          (W) => {
            k(W) && W.preventDefault();
          },
          [k]
        ),
        pointerGraceTimerRef: ne,
        onPointerGraceIntentChange: C.useCallback((W) => {
          ae.current = W;
        }, []),
        children: /* @__PURE__ */ E.jsx(ce, { ...D, children: /* @__PURE__ */ E.jsx(
          Rv,
          {
            asChild: !0,
            trapped: s,
            onMountAutoFocus: Te(f, (W) => {
              var x;
              W.preventDefault(), (x = X.current) == null || x.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: d,
            children: /* @__PURE__ */ E.jsx(
              Av,
              {
                asChild: !0,
                disableOutsidePointerEvents: m,
                onEscapeKeyDown: h,
                onPointerDownOutside: g,
                onFocusOutside: y,
                onInteractOutside: S,
                onDismiss: w,
                children: /* @__PURE__ */ E.jsx(
                  Dx,
                  {
                    asChild: !0,
                    ...z,
                    dir: T.dir,
                    orientation: "vertical",
                    loop: o,
                    currentTabStopId: Y,
                    onCurrentTabStopIdChange: Z,
                    onEntryFocus: Te(p, (W) => {
                      T.isUsingKeyboardRef.current || W.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ E.jsx(
                      vx,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": jg(O.open),
                        "data-radix-menu-content": "",
                        dir: T.dir,
                        ...j,
                        ...A,
                        ref: V,
                        style: { outline: "none", ...A.style },
                        onKeyDown: Te(A.onKeyDown, (W) => {
                          const G = W.target.closest("[data-radix-menu-content]") === W.currentTarget, J = W.ctrlKey || W.altKey || W.metaKey, $ = W.key.length === 1;
                          G && (W.key === "Tab" && W.preventDefault(), !J && $ && P(W.key));
                          const ee = X.current;
                          if (W.target !== ee || !SS.includes(W.key)) return;
                          W.preventDefault();
                          const ue = q().filter((me) => !me.disabled).map((me) => me.ref.current);
                          fg.includes(W.key) && ue.reverse(), VS(ue);
                        }),
                        onBlur: Te(l.onBlur, (W) => {
                          W.currentTarget.contains(W.target) || (window.clearTimeout(te.current), I.current = "");
                        }),
                        onPointerMove: Te(
                          l.onPointerMove,
                          ui((W) => {
                            const x = W.target, G = de.current !== W.clientX;
                            if (W.currentTarget.contains(x) && G) {
                              const J = W.clientX > de.current ? "right" : "left";
                              se.current = J, de.current = W.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
gg.displayName = Xt;
var zS = "MenuGroup", Mf = C.forwardRef(
  (l, r) => {
    const { __scopeMenu: u, ...o } = l;
    return /* @__PURE__ */ E.jsx(vt.div, { role: "group", ...o, ref: r });
  }
);
Mf.displayName = zS;
var US = "MenuLabel", yg = C.forwardRef(
  (l, r) => {
    const { __scopeMenu: u, ...o } = l;
    return /* @__PURE__ */ E.jsx(vt.div, { ...o, ref: r });
  }
);
yg.displayName = US;
var Io = "MenuItem", nv = "menu.itemSelect", cu = C.forwardRef(
  (l, r) => {
    const { disabled: u = !1, onSelect: o, ...s } = l, f = C.useRef(null), d = yi(Io, l.__scopeMenu), m = Cf(Io, l.__scopeMenu), p = At(r, f), h = C.useRef(!1), g = () => {
      const y = f.current;
      if (!u && y) {
        const S = new CustomEvent(nv, { bubbles: !0, cancelable: !0 });
        y.addEventListener(nv, (w) => o == null ? void 0 : o(w), { once: !0 }), xv(y, S), S.defaultPrevented ? h.current = !1 : d.onClose();
      }
    };
    return /* @__PURE__ */ E.jsx(
      bg,
      {
        ...s,
        ref: p,
        disabled: u,
        onClick: Te(l.onClick, g),
        onPointerDown: (y) => {
          var S;
          (S = l.onPointerDown) == null || S.call(l, y), h.current = !0;
        },
        onPointerUp: Te(l.onPointerUp, (y) => {
          var S;
          h.current || (S = y.currentTarget) == null || S.click();
        }),
        onKeyDown: Te(l.onKeyDown, (y) => {
          const S = m.searchRef.current !== "";
          u || S && y.key === " " || ef.includes(y.key) && (y.currentTarget.click(), y.preventDefault());
        })
      }
    );
  }
);
cu.displayName = Io;
var bg = C.forwardRef(
  (l, r) => {
    const { __scopeMenu: u, disabled: o = !1, textValue: s, ...f } = l, d = Cf(Io, u), m = mg(u), p = C.useRef(null), h = At(r, p), [g, y] = C.useState(!1), [S, w] = C.useState("");
    return C.useEffect(() => {
      const R = p.current;
      R && w((R.textContent ?? "").trim());
    }, [f.children]), /* @__PURE__ */ E.jsx(
      oi.ItemSlot,
      {
        scope: u,
        disabled: o,
        textValue: s ?? S,
        children: /* @__PURE__ */ E.jsx(jx, { asChild: !0, ...m, focusable: !o, children: /* @__PURE__ */ E.jsx(
          vt.div,
          {
            role: "menuitem",
            "data-highlighted": g ? "" : void 0,
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            ...f,
            ref: h,
            onPointerMove: Te(
              l.onPointerMove,
              ui((R) => {
                o ? d.onItemLeave(R) : (d.onItemEnter(R), R.defaultPrevented || R.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: Te(
              l.onPointerLeave,
              ui((R) => d.onItemLeave(R))
            ),
            onFocus: Te(l.onFocus, () => y(!0)),
            onBlur: Te(l.onBlur, () => y(!1))
          }
        ) })
      }
    );
  }
), LS = "MenuCheckboxItem", xg = C.forwardRef(
  (l, r) => {
    const { checked: u = !1, onCheckedChange: o, ...s } = l;
    return /* @__PURE__ */ E.jsx(Cg, { scope: l.__scopeMenu, checked: u, children: /* @__PURE__ */ E.jsx(
      cu,
      {
        role: "menuitemcheckbox",
        "aria-checked": eu(u) ? "mixed" : u,
        ...s,
        ref: r,
        "data-state": Tf(u),
        onSelect: Te(
          s.onSelect,
          () => o == null ? void 0 : o(eu(u) ? !0 : !u),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
xg.displayName = LS;
var Sg = "MenuRadioGroup", [BS, kS] = Hl(
  Sg,
  { value: void 0, onValueChange: () => {
  } }
), Eg = C.forwardRef(
  (l, r) => {
    const { value: u, onValueChange: o, ...s } = l, f = zn(o);
    return /* @__PURE__ */ E.jsx(BS, { scope: l.__scopeMenu, value: u, onValueChange: f, children: /* @__PURE__ */ E.jsx(Mf, { ...s, ref: r }) });
  }
);
Eg.displayName = Sg;
var wg = "MenuRadioItem", Ag = C.forwardRef(
  (l, r) => {
    const { value: u, ...o } = l, s = kS(wg, l.__scopeMenu), f = u === s.value;
    return /* @__PURE__ */ E.jsx(Cg, { scope: l.__scopeMenu, checked: f, children: /* @__PURE__ */ E.jsx(
      cu,
      {
        role: "menuitemradio",
        "aria-checked": f,
        ...o,
        ref: r,
        "data-state": Tf(f),
        onSelect: Te(
          o.onSelect,
          () => {
            var d;
            return (d = s.onValueChange) == null ? void 0 : d.call(s, u);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Ag.displayName = wg;
var Of = "MenuItemIndicator", [Cg, HS] = Hl(
  Of,
  { checked: !1 }
), Rg = C.forwardRef(
  (l, r) => {
    const { __scopeMenu: u, forceMount: o, ...s } = l, f = HS(Of, u);
    return /* @__PURE__ */ E.jsx(
      pi,
      {
        present: o || eu(f.checked) || f.checked === !0,
        children: /* @__PURE__ */ E.jsx(
          vt.span,
          {
            ...s,
            ref: r,
            "data-state": Tf(f.checked)
          }
        )
      }
    );
  }
);
Rg.displayName = Of;
var GS = "MenuSeparator", Mg = C.forwardRef(
  (l, r) => {
    const { __scopeMenu: u, ...o } = l;
    return /* @__PURE__ */ E.jsx(
      vt.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...o,
        ref: r
      }
    );
  }
);
Mg.displayName = GS;
var YS = "MenuArrow", Og = C.forwardRef(
  (l, r) => {
    const { __scopeMenu: u, ...o } = l, s = uu(u);
    return /* @__PURE__ */ E.jsx(gx, { ...s, ...o, ref: r });
  }
);
Og.displayName = YS;
var qS = "MenuSub", [Kw, Tg] = Hl(qS), ei = "MenuSubTrigger", _g = C.forwardRef(
  (l, r) => {
    const u = Gl(ei, l.__scopeMenu), o = yi(ei, l.__scopeMenu), s = Tg(ei, l.__scopeMenu), f = Cf(ei, l.__scopeMenu), d = C.useRef(null), { pointerGraceTimerRef: m, onPointerGraceIntentChange: p } = f, h = { __scopeMenu: l.__scopeMenu }, g = C.useCallback(() => {
      d.current && window.clearTimeout(d.current), d.current = null;
    }, []);
    return C.useEffect(() => g, [g]), C.useEffect(() => {
      const y = m.current;
      return () => {
        window.clearTimeout(y), p(null);
      };
    }, [m, p]), /* @__PURE__ */ E.jsx(wf, { asChild: !0, ...h, children: /* @__PURE__ */ E.jsx(
      bg,
      {
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": u.open,
        "aria-controls": s.contentId,
        "data-state": jg(u.open),
        ...l,
        ref: lu(r, s.onTriggerChange),
        onClick: (y) => {
          var S;
          (S = l.onClick) == null || S.call(l, y), !(l.disabled || y.defaultPrevented) && (y.currentTarget.focus(), u.open || u.onOpenChange(!0));
        },
        onPointerMove: Te(
          l.onPointerMove,
          ui((y) => {
            f.onItemEnter(y), !y.defaultPrevented && !l.disabled && !u.open && !d.current && (f.onPointerGraceIntentChange(null), d.current = window.setTimeout(() => {
              u.onOpenChange(!0), g();
            }, 100));
          })
        ),
        onPointerLeave: Te(
          l.onPointerLeave,
          ui((y) => {
            var w, R;
            g();
            const S = (w = u.content) == null ? void 0 : w.getBoundingClientRect();
            if (S) {
              const A = (R = u.content) == null ? void 0 : R.dataset.side, O = A === "right", T = O ? -5 : 5, j = S[O ? "left" : "right"], z = S[O ? "right" : "left"];
              f.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: y.clientX + T, y: y.clientY },
                  { x: j, y: S.top },
                  { x: z, y: S.top },
                  { x: z, y: S.bottom },
                  { x: j, y: S.bottom }
                ],
                side: A
              }), window.clearTimeout(m.current), m.current = window.setTimeout(
                () => f.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (f.onTriggerLeave(y), y.defaultPrevented) return;
              f.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: Te(l.onKeyDown, (y) => {
          var w;
          const S = f.searchRef.current !== "";
          l.disabled || S && y.key === " " || ES[o.dir].includes(y.key) && (u.onOpenChange(!0), (w = u.content) == null || w.focus(), y.preventDefault());
        })
      }
    ) });
  }
);
_g.displayName = ei;
var Ng = "MenuSubContent", Dg = C.forwardRef(
  (l, r) => {
    const u = pg(Xt, l.__scopeMenu), { forceMount: o = u.forceMount, ...s } = l, f = Gl(Xt, l.__scopeMenu), d = yi(Xt, l.__scopeMenu), m = Tg(Ng, l.__scopeMenu), p = C.useRef(null), h = At(r, p);
    return /* @__PURE__ */ E.jsx(oi.Provider, { scope: l.__scopeMenu, children: /* @__PURE__ */ E.jsx(pi, { present: o || f.open, children: /* @__PURE__ */ E.jsx(oi.Slot, { scope: l.__scopeMenu, children: /* @__PURE__ */ E.jsx(
      Rf,
      {
        id: m.contentId,
        "aria-labelledby": m.triggerId,
        ...s,
        ref: h,
        align: "start",
        side: d.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (g) => {
          var y;
          d.isUsingKeyboardRef.current && ((y = p.current) == null || y.focus()), g.preventDefault();
        },
        onCloseAutoFocus: (g) => g.preventDefault(),
        onFocusOutside: Te(l.onFocusOutside, (g) => {
          g.target !== m.trigger && f.onOpenChange(!1);
        }),
        onEscapeKeyDown: Te(l.onEscapeKeyDown, (g) => {
          d.onClose(), g.preventDefault();
        }),
        onKeyDown: Te(l.onKeyDown, (g) => {
          var w;
          const y = g.currentTarget.contains(g.target), S = wS[d.dir].includes(g.key);
          y && S && (f.onOpenChange(!1), (w = m.trigger) == null || w.focus(), g.preventDefault());
        })
      }
    ) }) }) });
  }
);
Dg.displayName = Ng;
function jg(l) {
  return l ? "open" : "closed";
}
function eu(l) {
  return l === "indeterminate";
}
function Tf(l) {
  return eu(l) ? "indeterminate" : l ? "checked" : "unchecked";
}
function VS(l) {
  const r = document.activeElement;
  for (const u of l)
    if (u === r || (u.focus(), document.activeElement !== r)) return;
}
function XS(l, r) {
  return l.map((u, o) => l[(r + o) % l.length]);
}
function QS(l, r, u) {
  const s = r.length > 1 && Array.from(r).every((h) => h === r[0]) ? r[0] : r, f = u ? l.indexOf(u) : -1;
  let d = XS(l, Math.max(f, 0));
  s.length === 1 && (d = d.filter((h) => h !== u));
  const p = d.find(
    (h) => h.toLowerCase().startsWith(s.toLowerCase())
  );
  return p !== u ? p : void 0;
}
function ZS(l, r) {
  const { x: u, y: o } = l;
  let s = !1;
  for (let f = 0, d = r.length - 1; f < r.length; d = f++) {
    const m = r[f], p = r[d], h = m.x, g = m.y, y = p.x, S = p.y;
    g > o != S > o && u < (y - h) * (o - g) / (S - g) + h && (s = !s);
  }
  return s;
}
function KS(l, r) {
  if (!r) return !1;
  const u = { x: l.clientX, y: l.clientY };
  return ZS(u, r);
}
function ui(l) {
  return (r) => r.pointerType === "mouse" ? l(r) : void 0;
}
var PS = hg, FS = wf, JS = vg, $S = gg, WS = Mf, IS = yg, eE = cu, tE = xg, nE = Eg, lE = Ag, aE = Rg, rE = Mg, iE = Og, oE = _g, uE = Dg, su = "DropdownMenu", [cE, Pw] = mi(
  su,
  [dg]
), gt = dg(), [sE, zg] = cE(su), Ug = (l) => {
  const {
    __scopeDropdownMenu: r,
    children: u,
    dir: o,
    open: s,
    defaultOpen: f,
    onOpenChange: d,
    modal: m = !0
  } = l, p = gt(r), h = C.useRef(null), [g, y] = bv({
    prop: s,
    defaultProp: f ?? !1,
    onChange: d,
    caller: su
  });
  return /* @__PURE__ */ E.jsx(
    sE,
    {
      scope: r,
      triggerId: Ps(),
      triggerRef: h,
      contentId: Ps(),
      open: g,
      onOpenChange: y,
      onOpenToggle: C.useCallback(() => y((S) => !S), [y]),
      modal: m,
      children: /* @__PURE__ */ E.jsx(PS, { ...p, open: g, onOpenChange: y, dir: o, modal: m, children: u })
    }
  );
};
Ug.displayName = su;
var Lg = "DropdownMenuTrigger", Bg = C.forwardRef(
  (l, r) => {
    const { __scopeDropdownMenu: u, disabled: o = !1, ...s } = l, f = zg(Lg, u), d = gt(u);
    return /* @__PURE__ */ E.jsx(FS, { asChild: !0, ...d, children: /* @__PURE__ */ E.jsx(
      vt.button,
      {
        type: "button",
        id: f.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": f.open,
        "aria-controls": f.open ? f.contentId : void 0,
        "data-state": f.open ? "open" : "closed",
        "data-disabled": o ? "" : void 0,
        disabled: o,
        ...s,
        ref: lu(r, f.triggerRef),
        onPointerDown: Te(l.onPointerDown, (m) => {
          !o && m.button === 0 && m.ctrlKey === !1 && (f.onOpenToggle(), f.open || m.preventDefault());
        }),
        onKeyDown: Te(l.onKeyDown, (m) => {
          o || (["Enter", " "].includes(m.key) && f.onOpenToggle(), m.key === "ArrowDown" && f.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(m.key) && m.preventDefault());
        })
      }
    ) });
  }
);
Bg.displayName = Lg;
var fE = "DropdownMenuPortal", kg = (l) => {
  const { __scopeDropdownMenu: r, ...u } = l, o = gt(r);
  return /* @__PURE__ */ E.jsx(JS, { ...o, ...u });
};
kg.displayName = fE;
var Hg = "DropdownMenuContent", Gg = C.forwardRef(
  (l, r) => {
    const { __scopeDropdownMenu: u, ...o } = l, s = zg(Hg, u), f = gt(u), d = C.useRef(!1);
    return /* @__PURE__ */ E.jsx(
      $S,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...f,
        ...o,
        ref: r,
        onCloseAutoFocus: Te(l.onCloseAutoFocus, (m) => {
          var p;
          d.current || (p = s.triggerRef.current) == null || p.focus(), d.current = !1, m.preventDefault();
        }),
        onInteractOutside: Te(l.onInteractOutside, (m) => {
          const p = m.detail.originalEvent, h = p.button === 0 && p.ctrlKey === !0, g = p.button === 2 || h;
          (!s.modal || g) && (d.current = !0);
        }),
        style: {
          ...l.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Gg.displayName = Hg;
var dE = "DropdownMenuGroup", mE = C.forwardRef(
  (l, r) => {
    const { __scopeDropdownMenu: u, ...o } = l, s = gt(u);
    return /* @__PURE__ */ E.jsx(WS, { ...s, ...o, ref: r });
  }
);
mE.displayName = dE;
var hE = "DropdownMenuLabel", pE = C.forwardRef(
  (l, r) => {
    const { __scopeDropdownMenu: u, ...o } = l, s = gt(u);
    return /* @__PURE__ */ E.jsx(IS, { ...s, ...o, ref: r });
  }
);
pE.displayName = hE;
var vE = "DropdownMenuItem", gE = C.forwardRef(
  (l, r) => {
    const { __scopeDropdownMenu: u, ...o } = l, s = gt(u);
    return /* @__PURE__ */ E.jsx(eE, { ...s, ...o, ref: r });
  }
);
gE.displayName = vE;
var yE = "DropdownMenuCheckboxItem", bE = C.forwardRef((l, r) => {
  const { __scopeDropdownMenu: u, ...o } = l, s = gt(u);
  return /* @__PURE__ */ E.jsx(tE, { ...s, ...o, ref: r });
});
bE.displayName = yE;
var xE = "DropdownMenuRadioGroup", Yg = C.forwardRef((l, r) => {
  const { __scopeDropdownMenu: u, ...o } = l, s = gt(u);
  return /* @__PURE__ */ E.jsx(nE, { ...s, ...o, ref: r });
});
Yg.displayName = xE;
var SE = "DropdownMenuRadioItem", qg = C.forwardRef((l, r) => {
  const { __scopeDropdownMenu: u, ...o } = l, s = gt(u);
  return /* @__PURE__ */ E.jsx(lE, { ...s, ...o, ref: r });
});
qg.displayName = SE;
var EE = "DropdownMenuItemIndicator", Vg = C.forwardRef((l, r) => {
  const { __scopeDropdownMenu: u, ...o } = l, s = gt(u);
  return /* @__PURE__ */ E.jsx(aE, { ...s, ...o, ref: r });
});
Vg.displayName = EE;
var wE = "DropdownMenuSeparator", AE = C.forwardRef((l, r) => {
  const { __scopeDropdownMenu: u, ...o } = l, s = gt(u);
  return /* @__PURE__ */ E.jsx(rE, { ...s, ...o, ref: r });
});
AE.displayName = wE;
var CE = "DropdownMenuArrow", RE = C.forwardRef(
  (l, r) => {
    const { __scopeDropdownMenu: u, ...o } = l, s = gt(u);
    return /* @__PURE__ */ E.jsx(iE, { ...s, ...o, ref: r });
  }
);
RE.displayName = CE;
var ME = "DropdownMenuSubTrigger", OE = C.forwardRef((l, r) => {
  const { __scopeDropdownMenu: u, ...o } = l, s = gt(u);
  return /* @__PURE__ */ E.jsx(oE, { ...s, ...o, ref: r });
});
OE.displayName = ME;
var TE = "DropdownMenuSubContent", _E = C.forwardRef((l, r) => {
  const { __scopeDropdownMenu: u, ...o } = l, s = gt(u);
  return /* @__PURE__ */ E.jsx(
    uE,
    {
      ...s,
      ...o,
      ref: r,
      style: {
        ...l.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
_E.displayName = TE;
var NE = Ug, DE = Bg, jE = kg, zE = Gg, UE = Yg, LE = qg, BE = Vg;
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kE = (l) => l.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), HE = (l) => l.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (r, u, o) => o ? o.toUpperCase() : u.toLowerCase()
), lv = (l) => {
  const r = HE(l);
  return r.charAt(0).toUpperCase() + r.slice(1);
}, Xg = (...l) => l.filter((r, u, o) => !!r && r.trim() !== "" && o.indexOf(r) === u).join(" ").trim(), GE = (l) => {
  for (const r in l)
    if (r.startsWith("aria-") || r === "role" || r === "title")
      return !0;
};
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var YE = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qE = C.forwardRef(
  ({
    color: l = "currentColor",
    size: r = 24,
    strokeWidth: u = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: f,
    iconNode: d,
    ...m
  }, p) => C.createElement(
    "svg",
    {
      ref: p,
      ...YE,
      width: r,
      height: r,
      stroke: l,
      strokeWidth: o ? Number(u) * 24 / Number(r) : u,
      className: Xg("lucide", s),
      ...!f && !GE(m) && { "aria-hidden": "true" },
      ...m
    },
    [
      ...d.map(([h, g]) => C.createElement(h, g)),
      ...Array.isArray(f) ? f : [f]
    ]
  )
);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fu = (l, r) => {
  const u = C.forwardRef(
    ({ className: o, ...s }, f) => C.createElement(qE, {
      ref: f,
      iconNode: r,
      className: Xg(
        `lucide-${kE(lv(l))}`,
        `lucide-${l}`,
        o
      ),
      ...s
    })
  );
  return u.displayName = lv(l), u;
};
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const VE = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], XE = fu("arrow-left", VE);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const QE = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], ZE = fu("arrow-right", QE);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const KE = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], za = fu("chevron-down", KE);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PE = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], FE = fu("circle", PE);
function Qg(l) {
  var r, u, o = "";
  if (typeof l == "string" || typeof l == "number") o += l;
  else if (typeof l == "object") if (Array.isArray(l)) {
    var s = l.length;
    for (r = 0; r < s; r++) l[r] && (u = Qg(l[r])) && (o && (o += " "), o += u);
  } else for (u in l) l[u] && (o && (o += " "), o += u);
  return o;
}
function Zg() {
  for (var l, r, u = 0, o = "", s = arguments.length; u < s; u++) (l = arguments[u]) && (r = Qg(l)) && (o && (o += " "), o += r);
  return o;
}
const _f = "-", JE = (l) => {
  const r = WE(l), {
    conflictingClassGroups: u,
    conflictingClassGroupModifiers: o
  } = l;
  return {
    getClassGroupId: (d) => {
      const m = d.split(_f);
      return m[0] === "" && m.length !== 1 && m.shift(), Kg(m, r) || $E(d);
    },
    getConflictingClassGroupIds: (d, m) => {
      const p = u[d] || [];
      return m && o[d] ? [...p, ...o[d]] : p;
    }
  };
}, Kg = (l, r) => {
  var d;
  if (l.length === 0)
    return r.classGroupId;
  const u = l[0], o = r.nextPart.get(u), s = o ? Kg(l.slice(1), o) : void 0;
  if (s)
    return s;
  if (r.validators.length === 0)
    return;
  const f = l.join(_f);
  return (d = r.validators.find(({
    validator: m
  }) => m(f))) == null ? void 0 : d.classGroupId;
}, av = /^\[(.+)\]$/, $E = (l) => {
  if (av.test(l)) {
    const r = av.exec(l)[1], u = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (u)
      return "arbitrary.." + u;
  }
}, WE = (l) => {
  const {
    theme: r,
    classGroups: u
  } = l, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const s in u)
    tf(u[s], o, s, r);
  return o;
}, tf = (l, r, u, o) => {
  l.forEach((s) => {
    if (typeof s == "string") {
      const f = s === "" ? r : rv(r, s);
      f.classGroupId = u;
      return;
    }
    if (typeof s == "function") {
      if (IE(s)) {
        tf(s(o), r, u, o);
        return;
      }
      r.validators.push({
        validator: s,
        classGroupId: u
      });
      return;
    }
    Object.entries(s).forEach(([f, d]) => {
      tf(d, rv(r, f), u, o);
    });
  });
}, rv = (l, r) => {
  let u = l;
  return r.split(_f).forEach((o) => {
    u.nextPart.has(o) || u.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), u = u.nextPart.get(o);
  }), u;
}, IE = (l) => l.isThemeGetter, e2 = (l) => {
  if (l < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, u = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const s = (f, d) => {
    u.set(f, d), r++, r > l && (r = 0, o = u, u = /* @__PURE__ */ new Map());
  };
  return {
    get(f) {
      let d = u.get(f);
      if (d !== void 0)
        return d;
      if ((d = o.get(f)) !== void 0)
        return s(f, d), d;
    },
    set(f, d) {
      u.has(f) ? u.set(f, d) : s(f, d);
    }
  };
}, nf = "!", lf = ":", t2 = lf.length, n2 = (l) => {
  const {
    prefix: r,
    experimentalParseClassName: u
  } = l;
  let o = (s) => {
    const f = [];
    let d = 0, m = 0, p = 0, h;
    for (let R = 0; R < s.length; R++) {
      let A = s[R];
      if (d === 0 && m === 0) {
        if (A === lf) {
          f.push(s.slice(p, R)), p = R + t2;
          continue;
        }
        if (A === "/") {
          h = R;
          continue;
        }
      }
      A === "[" ? d++ : A === "]" ? d-- : A === "(" ? m++ : A === ")" && m--;
    }
    const g = f.length === 0 ? s : s.substring(p), y = l2(g), S = y !== g, w = h && h > p ? h - p : void 0;
    return {
      modifiers: f,
      hasImportantModifier: S,
      baseClassName: y,
      maybePostfixModifierPosition: w
    };
  };
  if (r) {
    const s = r + lf, f = o;
    o = (d) => d.startsWith(s) ? f(d.substring(s.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: d,
      maybePostfixModifierPosition: void 0
    };
  }
  if (u) {
    const s = o;
    o = (f) => u({
      className: f,
      parseClassName: s
    });
  }
  return o;
}, l2 = (l) => l.endsWith(nf) ? l.substring(0, l.length - 1) : l.startsWith(nf) ? l.substring(1) : l, a2 = (l) => {
  const r = Object.fromEntries(l.orderSensitiveModifiers.map((o) => [o, !0]));
  return (o) => {
    if (o.length <= 1)
      return o;
    const s = [];
    let f = [];
    return o.forEach((d) => {
      d[0] === "[" || r[d] ? (s.push(...f.sort(), d), f = []) : f.push(d);
    }), s.push(...f.sort()), s;
  };
}, r2 = (l) => ({
  cache: e2(l.cacheSize),
  parseClassName: n2(l),
  sortModifiers: a2(l),
  ...JE(l)
}), i2 = /\s+/, o2 = (l, r) => {
  const {
    parseClassName: u,
    getClassGroupId: o,
    getConflictingClassGroupIds: s,
    sortModifiers: f
  } = r, d = [], m = l.trim().split(i2);
  let p = "";
  for (let h = m.length - 1; h >= 0; h -= 1) {
    const g = m[h], {
      isExternal: y,
      modifiers: S,
      hasImportantModifier: w,
      baseClassName: R,
      maybePostfixModifierPosition: A
    } = u(g);
    if (y) {
      p = g + (p.length > 0 ? " " + p : p);
      continue;
    }
    let O = !!A, T = o(O ? R.substring(0, A) : R);
    if (!T) {
      if (!O) {
        p = g + (p.length > 0 ? " " + p : p);
        continue;
      }
      if (T = o(R), !T) {
        p = g + (p.length > 0 ? " " + p : p);
        continue;
      }
      O = !1;
    }
    const j = f(S).join(":"), z = w ? j + nf : j, q = z + T;
    if (d.includes(q))
      continue;
    d.push(q);
    const Y = s(T, O);
    for (let Z = 0; Z < Y.length; ++Z) {
      const X = Y[Z];
      d.push(z + X);
    }
    p = g + (p.length > 0 ? " " + p : p);
  }
  return p;
};
function u2() {
  let l = 0, r, u, o = "";
  for (; l < arguments.length; )
    (r = arguments[l++]) && (u = Pg(r)) && (o && (o += " "), o += u);
  return o;
}
const Pg = (l) => {
  if (typeof l == "string")
    return l;
  let r, u = "";
  for (let o = 0; o < l.length; o++)
    l[o] && (r = Pg(l[o])) && (u && (u += " "), u += r);
  return u;
};
function c2(l, ...r) {
  let u, o, s, f = d;
  function d(p) {
    const h = r.reduce((g, y) => y(g), l());
    return u = r2(h), o = u.cache.get, s = u.cache.set, f = m, m(p);
  }
  function m(p) {
    const h = o(p);
    if (h)
      return h;
    const g = o2(p, u);
    return s(p, g), g;
  }
  return function() {
    return f(u2.apply(null, arguments));
  };
}
const tt = (l) => {
  const r = (u) => u[l] || [];
  return r.isThemeGetter = !0, r;
}, Fg = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Jg = /^\((?:(\w[\w-]*):)?(.+)\)$/i, s2 = /^\d+\/\d+$/, f2 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, d2 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, m2 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, h2 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, p2 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ua = (l) => s2.test(l), Se = (l) => !!l && !Number.isNaN(Number(l)), cl = (l) => !!l && Number.isInteger(Number(l)), Hs = (l) => l.endsWith("%") && Se(l.slice(0, -1)), _n = (l) => f2.test(l), v2 = () => !0, g2 = (l) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  d2.test(l) && !m2.test(l)
), $g = () => !1, y2 = (l) => h2.test(l), b2 = (l) => p2.test(l), x2 = (l) => !ie(l) && !oe(l), S2 = (l) => Ka(l, e0, $g), ie = (l) => Fg.test(l), Ul = (l) => Ka(l, t0, g2), Gs = (l) => Ka(l, R2, Se), iv = (l) => Ka(l, Wg, $g), E2 = (l) => Ka(l, Ig, b2), qo = (l) => Ka(l, n0, y2), oe = (l) => Jg.test(l), $r = (l) => Pa(l, t0), w2 = (l) => Pa(l, M2), ov = (l) => Pa(l, Wg), A2 = (l) => Pa(l, e0), C2 = (l) => Pa(l, Ig), Vo = (l) => Pa(l, n0, !0), Ka = (l, r, u) => {
  const o = Fg.exec(l);
  return o ? o[1] ? r(o[1]) : u(o[2]) : !1;
}, Pa = (l, r, u = !1) => {
  const o = Jg.exec(l);
  return o ? o[1] ? r(o[1]) : u : !1;
}, Wg = (l) => l === "position" || l === "percentage", Ig = (l) => l === "image" || l === "url", e0 = (l) => l === "length" || l === "size" || l === "bg-size", t0 = (l) => l === "length", R2 = (l) => l === "number", M2 = (l) => l === "family-name", n0 = (l) => l === "shadow", O2 = () => {
  const l = tt("color"), r = tt("font"), u = tt("text"), o = tt("font-weight"), s = tt("tracking"), f = tt("leading"), d = tt("breakpoint"), m = tt("container"), p = tt("spacing"), h = tt("radius"), g = tt("shadow"), y = tt("inset-shadow"), S = tt("text-shadow"), w = tt("drop-shadow"), R = tt("blur"), A = tt("perspective"), O = tt("aspect"), T = tt("ease"), j = tt("animate"), z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], q = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], Y = () => [...q(), oe, ie], Z = () => ["auto", "hidden", "clip", "visible", "scroll"], X = () => ["auto", "contain", "none"], V = () => [oe, ie, p], te = () => [Ua, "full", "auto", ...V()], I = () => [cl, "none", "subgrid", oe, ie], ne = () => ["auto", {
    span: ["full", cl, oe, ie]
  }, cl, oe, ie], ae = () => [cl, "auto", oe, ie], se = () => ["auto", "min", "max", "fr", oe, ie], de = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], ce = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], D = () => ["auto", ...V()], P = () => [Ua, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...V()], k = () => [l, oe, ie], W = () => [...q(), ov, iv, {
    position: [oe, ie]
  }], x = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], G = () => ["auto", "cover", "contain", A2, S2, {
    size: [oe, ie]
  }], J = () => [Hs, $r, Ul], $ = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    h,
    oe,
    ie
  ], ee = () => ["", Se, $r, Ul], ge = () => ["solid", "dashed", "dotted", "double"], ue = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], me = () => [Se, Hs, ov, iv], ve = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    R,
    oe,
    ie
  ], Ce = () => ["none", Se, oe, ie], ke = () => ["none", Se, oe, ie], Me = () => [Se, oe, ie], le = () => [Ua, "full", ...V()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [_n],
      breakpoint: [_n],
      color: [v2],
      container: [_n],
      "drop-shadow": [_n],
      ease: ["in", "out", "in-out"],
      font: [x2],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [_n],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [_n],
      shadow: [_n],
      spacing: ["px", Se],
      text: [_n],
      "text-shadow": [_n],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Ua, ie, oe, O]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Se, ie, oe, m]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": z()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": z()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: Y()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Z()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Z()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Z()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: X()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": X()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": X()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: te()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": te()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": te()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: te()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: te()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: te()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: te()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: te()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: te()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [cl, "auto", oe, ie]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Ua, "full", "auto", m, ...V()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [Se, Ua, "auto", "initial", "none", ie]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Se, oe, ie]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Se, oe, ie]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [cl, "first", "last", "none", oe, ie]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": I()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ne()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ae()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ae()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": I()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ne()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ae()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ae()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": se()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": se()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: V()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": V()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": V()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...de(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...ce(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...ce()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...de()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...ce(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...ce(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": de()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...ce(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...ce()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: V()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: V()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: V()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: V()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: V()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: V()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: V()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: V()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: V()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: D()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: D()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: D()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: D()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: D()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: D()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: D()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: D()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: D()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": V()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": V()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: P()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [m, "screen", ...P()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          m,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...P()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          m,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [d]
          },
          ...P()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...P()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...P()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...P()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", u, $r, Ul]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [o, oe, Gs]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Hs, ie]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [w2, ie, r]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [s, oe, ie]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Se, "none", oe, Gs]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          f,
          ...V()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", oe, ie]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", oe, ie]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: k()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: k()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...ge(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [Se, "from-font", "auto", oe, Ul]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: k()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [Se, "auto", oe, ie]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: V()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", oe, ie]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", oe, ie]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: W()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: x()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: G()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, cl, oe, ie],
          radial: ["", oe, ie],
          conic: [cl, oe, ie]
        }, C2, E2]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: k()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: J()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: J()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: J()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: k()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: k()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: k()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: $()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": $()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": $()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": $()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": $()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": $()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": $()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": $()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": $()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": $()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": $()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": $()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": $()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": $()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": $()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: ee()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": ee()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": ee()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": ee()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": ee()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": ee()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": ee()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": ee()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": ee()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": ee()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": ee()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ge(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...ge(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: k()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": k()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": k()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": k()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": k()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": k()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": k()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": k()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": k()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: k()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...ge(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Se, oe, ie]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Se, $r, Ul]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: k()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          g,
          Vo,
          qo
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: k()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", y, Vo, qo]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": k()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: ee()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: k()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [Se, Ul]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": k()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": ee()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": k()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", S, Vo, qo]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": k()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Se, oe, ie]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ue(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ue()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [Se]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": me()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": me()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": k()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": k()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": me()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": me()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": k()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": k()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": me()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": me()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": k()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": k()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": me()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": me()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": k()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": k()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": me()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": me()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": k()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": k()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": me()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": me()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": k()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": k()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": me()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": me()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": k()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": k()
      }],
      "mask-image-radial": [{
        "mask-radial": [oe, ie]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": me()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": me()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": k()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": k()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": q()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [Se]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": me()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": me()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": k()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": k()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: W()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: x()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: G()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", oe, ie]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          oe,
          ie
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: ve()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [Se, oe, ie]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Se, oe, ie]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          w,
          Vo,
          qo
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": k()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", Se, oe, ie]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Se, oe, ie]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Se, oe, ie]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Se, oe, ie]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Se, oe, ie]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          oe,
          ie
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": ve()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [Se, oe, ie]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Se, oe, ie]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Se, oe, ie]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Se, oe, ie]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Se, oe, ie]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Se, oe, ie]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Se, oe, ie]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Se, oe, ie]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": V()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": V()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": V()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", oe, ie]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [Se, "initial", oe, ie]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", T, oe, ie]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Se, oe, ie]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", j, oe, ie]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [A, oe, ie]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": Y()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Ce()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Ce()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Ce()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Ce()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ke()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ke()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ke()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ke()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: Me()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Me()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Me()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [oe, ie, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: Y()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: le()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": le()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": le()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": le()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: k()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: k()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", oe, ie]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": V()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": V()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": V()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": V()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": V()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": V()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": V()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": V()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": V()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": V()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": V()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": V()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": V()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": V()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": V()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": V()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": V()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": V()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", oe, ie]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...k()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Se, $r, Ul, Gs]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...k()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, T2 = /* @__PURE__ */ c2(O2);
function pl(...l) {
  return T2(Zg(l));
}
function La({
  ...l
}) {
  return /* @__PURE__ */ E.jsx(NE, { "data-slot": "dropdown-menu", ...l });
}
function Ba({
  ...l
}) {
  return /* @__PURE__ */ E.jsx(DE, { "data-slot": "dropdown-menu-trigger", ...l });
}
function ka({
  className: l,
  sideOffset: r = 4,
  ...u
}) {
  return /* @__PURE__ */ E.jsx(jE, { children: /* @__PURE__ */ E.jsx(
    zE,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: r,
      className: pl(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        l
      ),
      ...u
    }
  ) });
}
function sl({
  ...l
}) {
  return /* @__PURE__ */ E.jsx(UE, { "data-slot": "dropdown-menu-radio-group", ...l });
}
function Nn({
  className: l,
  children: r,
  ...u
}) {
  return /* @__PURE__ */ E.jsxs(
    LE,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: pl(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        l
      ),
      ...u,
      children: [
        /* @__PURE__ */ E.jsx(
          "span",
          {
            className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
            children: /* @__PURE__ */ E.jsx(BE, { children: /* @__PURE__ */ E.jsx(FE, { className: "size-2 fill-current" }) })
          }
        ),
        r
      ]
    }
  );
}
const uv = (l) => typeof l == "boolean" ? `${l}` : l === 0 ? "0" : l, cv = Zg, _2 = (l, r) => (u) => {
  var o;
  if ((r == null ? void 0 : r.variants) == null) return cv(l, u == null ? void 0 : u.class, u == null ? void 0 : u.className);
  const { variants: s, defaultVariants: f } = r, d = Object.keys(s).map((h) => {
    const g = u == null ? void 0 : u[h], y = f == null ? void 0 : f[h];
    if (g === null) return null;
    const S = uv(g) || uv(y);
    return s[h][S];
  }), m = u && Object.entries(u).reduce((h, g) => {
    let [y, S] = g;
    return S === void 0 || (h[y] = S), h;
  }, {}), p = r == null || (o = r.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((h, g) => {
    let { class: y, className: S, ...w } = g;
    return Object.entries(w).every((R) => {
      let [A, O] = R;
      return Array.isArray(O) ? O.includes({
        ...f,
        ...m
      }[A]) : {
        ...f,
        ...m
      }[A] === O;
    }) ? [
      ...h,
      y,
      S
    ] : h;
  }, []);
  return cv(l, d, p, u == null ? void 0 : u.class, u == null ? void 0 : u.className);
}, N2 = _2(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Dn({
  className: l,
  variant: r,
  size: u,
  asChild: o = !1,
  ...s
}) {
  const f = o ? Lb : "button";
  return /* @__PURE__ */ E.jsx(
    f,
    {
      "data-slot": "button",
      className: pl(N2({ variant: r, size: u, className: l })),
      ...s
    }
  );
}
const D2 = [
  { value: "Curated", label: "Curated" },
  { value: "Roasters Choice", label: "Roasters Choice" },
  { value: "Masterpiece", label: "Masterpiece" },
  { value: "Low-Caf", label: "Low-Caf" },
  { value: "Regional", label: "Regional" }
], j2 = [
  { value: "Curated", label: "Curated" },
  { value: "Roasters Choice", label: "Roasters Choice" },
  { value: "Masterpiece", label: "Masterpiece" },
  { value: "Low-Caf", label: "Low-Caf" },
  { value: "Office", label: "Office" },
  { value: "Regional", label: "Regional" }
], z2 = [
  { value: "1x 1kg", label: "1 x 1kg" },
  { value: "2x 1kg", label: "2 x 1kg" },
  { value: "3x 1kg", label: "3 x 1kg" },
  { value: "4x 1kg", label: "4 x 1kg" },
  { value: "5x 1kg", label: "5 x 1kg" }
], U2 = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" }
], af = [
  { value: "2", label: "2 x 250g" },
  { value: "4", label: "4 x 250g" },
  { value: "6", label: "6 x 250g" }
], L2 = af.reduce((l, r) => (l[r.value] = r.label, l), {}), rf = [
  { value: "1", label: "1 bag" },
  { value: "2", label: "2 bags" },
  { value: "3", label: "3 bags" }
], B2 = rf.reduce((l, r) => (l[r.value] = r.label, l), {}), k2 = [
  { value: "Brazil", label: "Brazil" },
  { value: "Ethiopia", label: "Ethiopia" }
], of = [
  { value: "3", label: "3 x 10 capsules" }
], H2 = of.reduce((l, r) => (l[r.value] = r.label, l), {}), G2 = [
  { value: "Brazil", label: "Brazil" },
  { value: "Ethiopia", label: "Ethiopia" },
  { value: "Center America", label: "Center America" }
], Ha = [
  { value: "1 Week", label: "1 Week" },
  { value: "2 Weeks", label: "2 Weeks" },
  { value: "3 Weeks", label: "3 Weeks" },
  { value: "4 Weeks (Recommended)", label: "4 Weeks (Recommended)" },
  { value: "5 Weeks", label: "5 Weeks" },
  { value: "6 Weeks", label: "6 Weeks" }
], Ys = ["4 Weeks (Recommended)", "6 Weeks"], qs = ["2 Weeks", "4 Weeks (Recommended)", "6 Weeks"], Vs = ["2 Weeks", "4 Weeks (Recommended)"], Xs = ["2 Weeks", "4 Weeks (Recommended)"], Y2 = ({
  selectedMethod: l,
  selectedCoffeeType: r,
  selectedRegion: u,
  selectedSizeOption: o,
  finalSelectionDetail: s,
  selectedFrequency: f,
  onMethodChange: d,
  onCoffeeTypeChange: m,
  onRegionChange: p,
  onSizeOptionChange: h,
  onQuantityChange: g,
  onFrequencyChange: y,
  onResetSelections: S,
  selectedEdition: w,
  onEditionChange: R
}) => {
  const [A, O] = C.useState(!0);
  C.useEffect(() => {
    if (typeof y != "function")
      return;
    let x;
    if (l === "Capsules" ? x = w && s && !f : r === "Office" ? x = o && !f : x = s && !f, !x || A === !1 || r === "Masterpiece") return;
    let J = "4 Weeks (Recommended)", $ = Ha.map((ee) => ee.value);
    if (l === "Capsules" ? $ = Xs : r === "Office" ? $ = Vs : ["Low-Caf", "Regional"].includes(r) ? $ = qs : ["Roasters Choice", "Curated"].includes(r) && ($ = Ys), $.includes(J) || (J = $.length > 0 ? $[0] : ""), J && !f)
      try {
        y(J);
      } catch (ee) {
        console.error(`Error setting initial default frequency for ${r || l}:`, ee);
      }
  }, [s, r, l, w, o, f, y, A]), C.useEffect(() => {
    if (r === "Masterpiece" && s && typeof y == "function" && A !== !1)
      try {
        (!f || f !== "4 Weeks (Recommended)") && y("4 Weeks (Recommended)");
      } catch (x) {
        console.error("Error auto-setting Masterpiece frequency state:", x);
      }
  }, [r, s, f, y, A]), C.useEffect(() => {
    if (A === !1) return;
    let x = null, G = !1, J = [];
    if (l === "Capsules" ? J = Xs : ["Roasters Choice", "Curated"].includes(r) ? J = Ys : ["Low-Caf", "Regional"].includes(r) ? J = qs : r === "Office" && (J = Vs), J.length > 0 && f && !J.includes(f) && (x = J.includes("4 Weeks (Recommended)") ? "4 Weeks (Recommended)" : J[0], G = !0), G && typeof y == "function") {
      console.warn(`${r || l} selected with invalid frequency '${f}', resetting to ${x}.`);
      try {
        y(x);
      } catch ($) {
        console.error(`Error resetting frequency for ${r || l}:`, $);
      }
    }
  }, [r, l, f, y, A]), C.useEffect(() => {
    if (A === !1) return;
    let x = !0, G = !1;
    if (l === "Capsules" && s ? (x = of.some((J) => J.value === s), x || (G = !0)) : r === "Curated" && s ? (x = af.some((J) => J.value === s), x || (G = !0)) : r === "Masterpiece" && s && (x = rf.some((J) => J.value === s), x || (G = !0)), G && r !== "Office" && (console.warn(`${r || l} selected with invalid quantity '${s}', resetting quantity.`), typeof g == "function"))
      try {
        g("");
      } catch (J) {
        console.error(`Error resetting quantity for ${r || l}:`, J);
      }
  }, [r, l, s, g, A]);
  const T = () => {
    O(!0), typeof S == "function" && A === !1 && S();
  }, j = () => {
    O(!1), typeof S == "function" && S(), window.location.href = "https://thebarn.de/collections/prepaid-subscription";
  }, z = l === "Filter" ? D2 : j2, q = !["Filter", "Espresso"].includes(l), Y = l === "Capsules" && w, Z = l !== "Capsules" && r && r !== "Office" && (r === "Roasters Choice" || r === "Curated" || r === "Masterpiece" || r === "Low-Caf" || r === "Regional" && u), X = r === "Office" && o, V = l === "Capsules" && w && s, te = s && r && !["Office"].includes(r) && l !== "Capsules", I = X || V || te, ne = !(l === "Capsules" && Y || l && l !== "Capsules" && r !== "Office" && Z), ae = !I, se = l === "Capsules" ? Ha.filter((x) => Xs.includes(x.value)) : r === "Office" ? Ha.filter((x) => Vs.includes(x.value)) : ["Roasters Choice", "Curated"].includes(r) ? Ha.filter((x) => Ys.includes(x.value)) : ["Low-Caf", "Regional"].includes(r) ? Ha.filter((x) => qs.includes(x.value)) : Ha;
  let de = U2;
  l === "Capsules" ? de = of : r === "Curated" ? de = af : r === "Masterpiece" && (de = rf);
  const ce = () => l === "Capsules" ? "Taste Profile" : l === "Filter" || l === "Espresso" ? "Subscription Style" : "Style / Profile", D = () => l ? l === "Capsules" ? w || "Select Profile..." : q ? "Select Method first..." : r || "Select Type..." : "Select Method first...", P = () => s ? l === "Capsules" ? H2[s] || s : r === "Curated" ? L2[s] || s : r === "Masterpiece" ? B2[s] || s : r === "Office" ? o : ["Roasters Choice", "Low-Caf", "Regional"].includes(r) ? `${s} x 250g` : `${s} bag(s)` : l ? l === "Capsules" ? w ? "Select Quantity..." : "Select Profile first..." : r ? r === "Office" ? o || "Select Size..." : r === "Regional" && !u ? "Select Region first..." : "Select Quantity..." : "Select Type first..." : "Select Method first...", k = () => f ? f.replace(" (Recommended)", "") : l ? l === "Capsules" && !w ? "Select Profile first..." : l !== "Capsules" && !r ? "Select Type first..." : r === "Office" && !o ? "Select Size first..." : l === "Capsules" && w && !s || l !== "Capsules" && r && r !== "Office" && !s ? "Select Quantity first..." : "Select Frequency..." : "Select Method first...", W = (x) => {
    let G = x.label;
    return l === "Capsules" || r === "Curated" || r === "Masterpiece" || (["Roasters Choice", "Low-Caf", "Regional"].includes(r) ? G = `${x.label} x 250g` : r && (G = `${x.label} ${parseInt(x.value) > 1 ? "bags" : "bag"} (250g each)`)), /* @__PURE__ */ E.jsx(Nn, { value: x.value, children: G }, x.value);
  };
  return /* @__PURE__ */ E.jsxs("div", { className: "middle-content-wrapper flex flex-col justify-center items-center", children: [
    /* @__PURE__ */ E.jsx("div", { className: "recipient-container mt-10", children: /* @__PURE__ */ E.jsxs("div", { className: "recipient-buttons-container", children: [
      /* @__PURE__ */ E.jsxs("div", { className: `recipient-button ${A === !0 ? "selected" : ""}`, onClick: T, children: [
        /* @__PURE__ */ E.jsx("h2", { children: "PAY PER DELIVERY" }),
        /* @__PURE__ */ E.jsx("p", { children: "(Flexible Subscriptions)" })
      ] }),
      /* @__PURE__ */ E.jsxs("div", { className: `recipient-button ${A === !1 ? "selected" : ""}`, onClick: j, children: [
        /* @__PURE__ */ E.jsx("h2", { children: "UPFRONT PAYMENT" }),
        /* @__PURE__ */ E.jsx("p", { children: "(Term / Gift)" })
      ] })
    ] }) }),
    A === !0 && /* @__PURE__ */ E.jsxs("div", { className: "coffee-type-container w-5/6 rounded-md p-3 pt-5 flex flex-col items-center gap-y-2 bg-[#3a3c3d] justify-center mt-5", children: [
      /* @__PURE__ */ E.jsxs("div", { className: "dropdown-row", children: [
        /* @__PURE__ */ E.jsx("h3", { className: "dropdown-label", children: "Method" }),
        /* @__PURE__ */ E.jsxs(La, { children: [
          /* @__PURE__ */ E.jsx(Ba, { asChild: !0, children: /* @__PURE__ */ E.jsxs(Dn, { variant: "outline", className: "dropdown-trigger-button", children: [
            l || "Select Method...",
            /* @__PURE__ */ E.jsx(za, { className: "ml-2 h-4 w-4 shrink-0" })
          ] }) }),
          /* @__PURE__ */ E.jsx(ka, { className: "dropdown-content-panel", children: /* @__PURE__ */ E.jsxs(sl, { value: l, onValueChange: d, children: [
            /* @__PURE__ */ E.jsx(Nn, { value: "Filter", children: "Filter" }),
            /* @__PURE__ */ E.jsx(Nn, { value: "Espresso", children: "Espresso" }),
            /* @__PURE__ */ E.jsx(Nn, { value: "Capsules", children: "Capsules" })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ E.jsxs("div", { className: "dropdown-row", children: [
        /* @__PURE__ */ E.jsx("h3", { className: "dropdown-label", children: ce() }),
        /* @__PURE__ */ E.jsxs(La, { children: [
          /* @__PURE__ */ E.jsx(
            Ba,
            {
              asChild: !0,
              disabled: !l || l !== "Capsules" && q,
              children: /* @__PURE__ */ E.jsxs(Dn, { variant: "outline", className: "dropdown-trigger-button", children: [
                D(),
                /* @__PURE__ */ E.jsx(za, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
              ] })
            }
          ),
          /* @__PURE__ */ E.jsxs(ka, { className: "dropdown-content-panel", children: [
            l === "Capsules" && /* @__PURE__ */ E.jsx(sl, { value: w, onValueChange: R, children: k2.map((x) => /* @__PURE__ */ E.jsx(Nn, { value: x.value, children: x.label }, x.value)) }),
            l && l !== "Capsules" && !q && /* @__PURE__ */ E.jsx(sl, { value: r, onValueChange: m, children: z.map((x) => /* @__PURE__ */ E.jsx(Nn, { value: x.value, children: x.label }, x.value)) })
          ] })
        ] })
      ] }),
      l && l !== "Capsules" && r && /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
        r === "Roasters Choice" && /* @__PURE__ */ E.jsx("div", { className: "dropdown-row", style: { justifyContent: "center" }, children: /* @__PURE__ */ E.jsx("div", { className: "w-fit", children: /* @__PURE__ */ E.jsx("ul", { className: "text-white bg-[#161616] w-full rounded-sm border border-[#A67C52] roasters-info-list", children: /* @__PURE__ */ E.jsxs("li", { className: "w-full p-1 text-lg", children: [
          /* @__PURE__ */ E.jsx("span", { className: "text-[#A67C52]", children: "Every Month," }),
          " Our Roasters Pick a New Coffee for You"
        ] }) }) }) }, "rc-info"),
        r === "Curated" && /* @__PURE__ */ E.jsx("div", { className: "dropdown-row", style: { justifyContent: "center" }, children: /* @__PURE__ */ E.jsx("div", { className: "w-fit", children: /* @__PURE__ */ E.jsxs("ul", { className: "text-white bg-[#161616] w-full rounded-sm border border-[#A67C52] roasters-info-list", children: [
          /* @__PURE__ */ E.jsxs("li", { className: "w-full p-1 text-lg", children: [
            /* @__PURE__ */ E.jsx("span", { className: "text-[#A67C52]", children: "Every month" }),
            ", Our Roasters pick two different coffees for you."
          ] }),
          /* @__PURE__ */ E.jsxs("li", { children: [
            "Use the code ",
            /* @__PURE__ */ E.jsx("span", { children: "ANNIVERSARY" }),
            " for ",
            /* @__PURE__ */ E.jsx("strong", { children: "15% off." })
          ] })
        ] }) }) }, "curated-info"),
        r === "Masterpiece" && /* @__PURE__ */ E.jsx("div", { className: "dropdown-row", style: { justifyContent: "center" }, children: /* @__PURE__ */ E.jsx("div", { className: "w-fit", children: /* @__PURE__ */ E.jsx("ul", { className: "text-white bg-[#161616] w-full rounded-sm border border-[#A67C52] roasters-info-list", children: /* @__PURE__ */ E.jsxs("li", { className: "w-full p-1 text-lg", children: [
          /* @__PURE__ */ E.jsx("span", { className: "text-[#A67C52]", children: "Every month," }),
          " We send you one bag of the most extraordinary coffee. Each bag contains 100 - 150g"
        ] }) }) }) }, "masterpiece-info"),
        r === "Low-Caf" && /* @__PURE__ */ E.jsx("div", { className: "dropdown-row", style: { justifyContent: "center" }, children: /* @__PURE__ */ E.jsx("div", { className: "w-fit", children: /* @__PURE__ */ E.jsx("ul", { className: "text-white bg-[#161616] w-full rounded-sm border border-[#A67C52] roasters-info-list", children: /* @__PURE__ */ E.jsxs("li", { className: "w-full p-1 text-lg", children: [
          /* @__PURE__ */ E.jsx("span", { className: "text-[#A67C52]", children: "Receive our" }),
          " low-caf varietal coffee on repeat"
        ] }) }) }) }, "lowcaf-info"),
        r === "Regional" && /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
          /* @__PURE__ */ E.jsx("div", { className: "dropdown-row", style: { justifyContent: "center" }, children: /* @__PURE__ */ E.jsx("div", { className: "w-fit", children: /* @__PURE__ */ E.jsx("ul", { className: "text-white bg-[#161616] w-full rounded-sm border border-[#A67C52] roasters-info-list", children: /* @__PURE__ */ E.jsxs("li", { className: "w-full p-1 text-lg", children: [
            /* @__PURE__ */ E.jsx("span", { className: "text-[#A67C52]", children: "Pick your favourite region" }),
            " and receive the same coffee on repeat"
          ] }) }) }) }, "regional-info"),
          /* @__PURE__ */ E.jsxs("div", { className: "dropdown-row", children: [
            /* @__PURE__ */ E.jsx("h3", { className: "dropdown-label", children: "Region" }),
            /* @__PURE__ */ E.jsxs(La, { children: [
              /* @__PURE__ */ E.jsx(Ba, { asChild: !0, children: /* @__PURE__ */ E.jsxs(Dn, { variant: "outline", className: "dropdown-trigger-button", children: [
                u || "Select Region...",
                /* @__PURE__ */ E.jsx(za, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
              ] }) }),
              /* @__PURE__ */ E.jsx(ka, { className: "dropdown-content-panel", children: /* @__PURE__ */ E.jsx(sl, { value: u, onValueChange: p, children: G2.map((x) => /* @__PURE__ */ E.jsx(Nn, { value: x.value, children: x.label }, x.value)) }) })
            ] })
          ] }, "regional-region")
        ] }),
        r === "Office" && /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
          /* @__PURE__ */ E.jsx("div", { className: "dropdown-row", style: { justifyContent: "center" }, children: /* @__PURE__ */ E.jsx("div", { className: "w-fit", children: /* @__PURE__ */ E.jsx("ul", { className: "text-white bg-[#161616] w-full rounded-sm border border-[#A67C52] roasters-info-list", children: /* @__PURE__ */ E.jsxs("li", { className: "w-full p-1 text-lg", children: [
            /* @__PURE__ */ E.jsx("span", { className: "text-[#A67C52]", children: "Our Espresso works on all Office Machines:" }),
            " Full Automat, Espresso, Filter"
          ] }) }) }) }, "office-info"),
          /* @__PURE__ */ E.jsxs("div", { className: "dropdown-row", children: [
            /* @__PURE__ */ E.jsx("h3", { className: "dropdown-label", children: "Size" }),
            /* @__PURE__ */ E.jsxs(La, { children: [
              /* @__PURE__ */ E.jsx(Ba, { asChild: !0, children: /* @__PURE__ */ E.jsxs(Dn, { variant: "outline", className: "dropdown-trigger-button", children: [
                o || "Select Size...",
                /* @__PURE__ */ E.jsx(za, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
              ] }) }),
              /* @__PURE__ */ E.jsx(ka, { className: "dropdown-content-panel", children: /* @__PURE__ */ E.jsx(sl, { value: o, onValueChange: h, children: z2.map((x) => /* @__PURE__ */ E.jsx(Nn, { value: x.value, children: x.label }, x.value)) }) })
            ] })
          ] }, "office-size")
        ] })
      ] }),
      l === "Capsules" && w && // Info for capsules after edition is selected
      /* @__PURE__ */ E.jsx("div", { className: "dropdown-row", style: { justifyContent: "center" }, children: /* @__PURE__ */ E.jsx("div", { className: "w-fit", children: /* @__PURE__ */ E.jsx("ul", { className: "text-white bg-[#161616] w-full rounded-sm border border-[#A67C52] roasters-info-list", children: /* @__PURE__ */ E.jsxs("li", { className: "w-full p-1 text-lg", children: [
        /* @__PURE__ */ E.jsx("span", { className: "text-[#A67C52]", children: "Sustainable" }),
        " Nespresso® Compatible Capsules"
      ] }) }) }) }, "capsule-edition-info"),
      r !== "Office" && /* @__PURE__ */ E.jsxs("div", { className: "dropdown-row", children: [
        /* @__PURE__ */ E.jsx("h3", { className: "dropdown-label", children: "Quantity of Coffee" }),
        /* @__PURE__ */ E.jsxs(La, { children: [
          /* @__PURE__ */ E.jsx(Ba, { asChild: !0, disabled: ne, children: /* @__PURE__ */ E.jsxs(Dn, { variant: "outline", className: "dropdown-trigger-button", children: [
            P(),
            /* @__PURE__ */ E.jsx(za, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
          ] }) }),
          /* @__PURE__ */ E.jsxs(ka, { className: "dropdown-content-panel", children: [
            l === "Capsules" && Y && /* @__PURE__ */ E.jsx(sl, { value: s, onValueChange: g, children: de.map((x) => W(x)) }),
            l && l !== "Capsules" && Z && /* @__PURE__ */ E.jsx(sl, { value: s, onValueChange: g, children: de.map((x) => W(x)) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ E.jsxs("div", { className: "dropdown-row", children: [
        /* @__PURE__ */ E.jsx("h3", { className: "dropdown-label", children: "Frequency" }),
        l !== "Capsules" && r === "Masterpiece" ? (
          // Masterpiece Frequency Info
          /* @__PURE__ */ E.jsx("div", { className: "info-text-container flex items-center justify-center", children: I ? /* @__PURE__ */ E.jsx("div", { className: "static-text-value h-10 px-3 py-2 bg-[#161616] text-[#A67C52] font-bold rounded-md flex items-center w-full justify-center border-1 border-[#A67C52]", children: "4 weeks" }) : /* @__PURE__ */ E.jsx(Dn, { variant: "outline", className: "dropdown-trigger-button w-full", style: { justifyContent: "center" }, disabled: !0, children: k() }) })
        ) : (
          // Standard Frequency Dropdown
          /* @__PURE__ */ E.jsxs(La, { children: [
            /* @__PURE__ */ E.jsx(Ba, { asChild: !0, disabled: ae, children: /* @__PURE__ */ E.jsxs(Dn, { variant: "outline", className: "dropdown-trigger-button", children: [
              k(),
              /* @__PURE__ */ E.jsx(za, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
            ] }) }),
            /* @__PURE__ */ E.jsx(ka, { className: "dropdown-content-panel", children: /* @__PURE__ */ E.jsx(sl, { value: f, onValueChange: y, children: se.map((x) => /* @__PURE__ */ E.jsx(Nn, { value: x.value, children: x.label }, x.value)) }) })
          ] })
        )
      ] }),
      (r === "Office" && o && f || l === "Capsules" && w && s && f || s && f && r && r !== "Office" && l !== "Capsules") && /* @__PURE__ */ E.jsxs("div", { className: "final-selection mt-4 p-3 border rounded-md bg-secondary text-secondary-foreground w-5/6 text-center", children: [
        "Selected: ",
        l,
        l === "Capsules" && w && ` - Taste: ${w}`,
        l !== "Capsules" && r && ` - ${r}`,
        r === "Regional" && u && ` - ${u}`,
        r === "Office" && o && ` - ${o}`,
        (l === "Capsules" || l !== "Capsules" && r !== "Office") && s && ` - Qty: ${P()}`,
        f && ` - Every ${f.replace(" (Recommended)", "")}`
      ] })
    ] })
  ] });
};
function uf() {
  return uf = Object.assign ? Object.assign.bind() : function(l) {
    for (var r = 1; r < arguments.length; r++) {
      var u = arguments[r];
      for (var o in u) ({}).hasOwnProperty.call(u, o) && (l[o] = u[o]);
    }
    return l;
  }, uf.apply(null, arguments);
}
function l0(l, r) {
  if (l == null) return {};
  var u = {};
  for (var o in l) if ({}.hasOwnProperty.call(l, o)) {
    if (r.indexOf(o) !== -1) continue;
    u[o] = l[o];
  }
  return u;
}
function cf(l, r) {
  return cf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(u, o) {
    return u.__proto__ = o, u;
  }, cf(l, r);
}
function Nf(l, r) {
  l.prototype = Object.create(r.prototype), l.prototype.constructor = l, cf(l, r);
}
function q2(l, r) {
  return l.classList ? !!r && l.classList.contains(r) : (" " + (l.className.baseVal || l.className) + " ").indexOf(" " + r + " ") !== -1;
}
function V2(l, r) {
  l.classList ? l.classList.add(r) : q2(l, r) || (typeof l.className == "string" ? l.className = l.className + " " + r : l.setAttribute("class", (l.className && l.className.baseVal || "") + " " + r));
}
function sv(l, r) {
  return l.replace(new RegExp("(^|\\s)" + r + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function X2(l, r) {
  l.classList ? l.classList.remove(r) : typeof l.className == "string" ? l.className = sv(l.className, r) : l.setAttribute("class", sv(l.className && l.className.baseVal || "", r));
}
const fv = {
  disabled: !1
}, Df = De.createContext(null);
var a0 = function(r) {
  return r.scrollTop;
}, ti = "unmounted", Ll = "exited", Vt = "entering", cn = "entered", ci = "exiting", Bn = /* @__PURE__ */ function(l) {
  Nf(r, l);
  function r(o, s) {
    var f;
    f = l.call(this, o, s) || this;
    var d = s, m = d && !d.isMounting ? o.enter : o.appear, p;
    return f.appearStatus = null, o.in ? m ? (p = Ll, f.appearStatus = Vt) : p = cn : o.unmountOnExit || o.mountOnEnter ? p = ti : p = Ll, f.state = {
      status: p
    }, f.nextCallback = null, f;
  }
  r.getDerivedStateFromProps = function(s, f) {
    var d = s.in;
    return d && f.status === ti ? {
      status: Ll
    } : null;
  };
  var u = r.prototype;
  return u.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, u.componentDidUpdate = function(s) {
    var f = null;
    if (s !== this.props) {
      var d = this.state.status;
      this.props.in ? d !== Vt && d !== cn && (f = Vt) : (d === Vt || d === cn) && (f = ci);
    }
    this.updateStatus(!1, f);
  }, u.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, u.getTimeouts = function() {
    var s = this.props.timeout, f, d, m;
    return f = d = m = s, s != null && typeof s != "number" && (f = s.exit, d = s.enter, m = s.appear !== void 0 ? s.appear : d), {
      exit: f,
      enter: d,
      appear: m
    };
  }, u.updateStatus = function(s, f) {
    if (s === void 0 && (s = !1), f !== null)
      if (this.cancelNextCallback(), f === Vt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var d = this.props.nodeRef ? this.props.nodeRef.current : Ir.findDOMNode(this);
          d && a0(d);
        }
        this.performEnter(s);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Ll && this.setState({
      status: ti
    });
  }, u.performEnter = function(s) {
    var f = this, d = this.props.enter, m = this.context ? this.context.isMounting : s, p = this.props.nodeRef ? [m] : [Ir.findDOMNode(this), m], h = p[0], g = p[1], y = this.getTimeouts(), S = m ? y.appear : y.enter;
    if (!s && !d || fv.disabled) {
      this.safeSetState({
        status: cn
      }, function() {
        f.props.onEntered(h);
      });
      return;
    }
    this.props.onEnter(h, g), this.safeSetState({
      status: Vt
    }, function() {
      f.props.onEntering(h, g), f.onTransitionEnd(S, function() {
        f.safeSetState({
          status: cn
        }, function() {
          f.props.onEntered(h, g);
        });
      });
    });
  }, u.performExit = function() {
    var s = this, f = this.props.exit, d = this.getTimeouts(), m = this.props.nodeRef ? void 0 : Ir.findDOMNode(this);
    if (!f || fv.disabled) {
      this.safeSetState({
        status: Ll
      }, function() {
        s.props.onExited(m);
      });
      return;
    }
    this.props.onExit(m), this.safeSetState({
      status: ci
    }, function() {
      s.props.onExiting(m), s.onTransitionEnd(d.exit, function() {
        s.safeSetState({
          status: Ll
        }, function() {
          s.props.onExited(m);
        });
      });
    });
  }, u.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, u.safeSetState = function(s, f) {
    f = this.setNextCallback(f), this.setState(s, f);
  }, u.setNextCallback = function(s) {
    var f = this, d = !0;
    return this.nextCallback = function(m) {
      d && (d = !1, f.nextCallback = null, s(m));
    }, this.nextCallback.cancel = function() {
      d = !1;
    }, this.nextCallback;
  }, u.onTransitionEnd = function(s, f) {
    this.setNextCallback(f);
    var d = this.props.nodeRef ? this.props.nodeRef.current : Ir.findDOMNode(this), m = s == null && !this.props.addEndListener;
    if (!d || m) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var p = this.props.nodeRef ? [this.nextCallback] : [d, this.nextCallback], h = p[0], g = p[1];
      this.props.addEndListener(h, g);
    }
    s != null && setTimeout(this.nextCallback, s);
  }, u.render = function() {
    var s = this.state.status;
    if (s === ti)
      return null;
    var f = this.props, d = f.children;
    f.in, f.mountOnEnter, f.unmountOnExit, f.appear, f.enter, f.exit, f.timeout, f.addEndListener, f.onEnter, f.onEntering, f.onEntered, f.onExit, f.onExiting, f.onExited, f.nodeRef;
    var m = l0(f, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ De.createElement(Df.Provider, {
        value: null
      }, typeof d == "function" ? d(s, m) : De.cloneElement(De.Children.only(d), m))
    );
  }, r;
}(De.Component);
Bn.contextType = Df;
Bn.propTypes = {};
function Ga() {
}
Bn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Ga,
  onEntering: Ga,
  onEntered: Ga,
  onExit: Ga,
  onExiting: Ga,
  onExited: Ga
};
Bn.UNMOUNTED = ti;
Bn.EXITED = Ll;
Bn.ENTERING = Vt;
Bn.ENTERED = cn;
Bn.EXITING = ci;
var Q2 = function(r, u) {
  return r && u && u.split(" ").forEach(function(o) {
    return V2(r, o);
  });
}, Qs = function(r, u) {
  return r && u && u.split(" ").forEach(function(o) {
    return X2(r, o);
  });
}, jf = /* @__PURE__ */ function(l) {
  Nf(r, l);
  function r() {
    for (var o, s = arguments.length, f = new Array(s), d = 0; d < s; d++)
      f[d] = arguments[d];
    return o = l.call.apply(l, [this].concat(f)) || this, o.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    }, o.onEnter = function(m, p) {
      var h = o.resolveArguments(m, p), g = h[0], y = h[1];
      o.removeClasses(g, "exit"), o.addClass(g, y ? "appear" : "enter", "base"), o.props.onEnter && o.props.onEnter(m, p);
    }, o.onEntering = function(m, p) {
      var h = o.resolveArguments(m, p), g = h[0], y = h[1], S = y ? "appear" : "enter";
      o.addClass(g, S, "active"), o.props.onEntering && o.props.onEntering(m, p);
    }, o.onEntered = function(m, p) {
      var h = o.resolveArguments(m, p), g = h[0], y = h[1], S = y ? "appear" : "enter";
      o.removeClasses(g, S), o.addClass(g, S, "done"), o.props.onEntered && o.props.onEntered(m, p);
    }, o.onExit = function(m) {
      var p = o.resolveArguments(m), h = p[0];
      o.removeClasses(h, "appear"), o.removeClasses(h, "enter"), o.addClass(h, "exit", "base"), o.props.onExit && o.props.onExit(m);
    }, o.onExiting = function(m) {
      var p = o.resolveArguments(m), h = p[0];
      o.addClass(h, "exit", "active"), o.props.onExiting && o.props.onExiting(m);
    }, o.onExited = function(m) {
      var p = o.resolveArguments(m), h = p[0];
      o.removeClasses(h, "exit"), o.addClass(h, "exit", "done"), o.props.onExited && o.props.onExited(m);
    }, o.resolveArguments = function(m, p) {
      return o.props.nodeRef ? [o.props.nodeRef.current, m] : [m, p];
    }, o.getClassNames = function(m) {
      var p = o.props.classNames, h = typeof p == "string", g = h && p ? p + "-" : "", y = h ? "" + g + m : p[m], S = h ? y + "-active" : p[m + "Active"], w = h ? y + "-done" : p[m + "Done"];
      return {
        baseClassName: y,
        activeClassName: S,
        doneClassName: w
      };
    }, o;
  }
  var u = r.prototype;
  return u.addClass = function(s, f, d) {
    var m = this.getClassNames(f)[d + "ClassName"], p = this.getClassNames("enter"), h = p.doneClassName;
    f === "appear" && d === "done" && h && (m += " " + h), d === "active" && s && a0(s), m && (this.appliedClasses[f][d] = m, Q2(s, m));
  }, u.removeClasses = function(s, f) {
    var d = this.appliedClasses[f], m = d.base, p = d.active, h = d.done;
    this.appliedClasses[f] = {}, m && Qs(s, m), p && Qs(s, p), h && Qs(s, h);
  }, u.render = function() {
    var s = this.props;
    s.classNames;
    var f = l0(s, ["classNames"]);
    return /* @__PURE__ */ De.createElement(Bn, uf({}, f, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  }, r;
}(De.Component);
jf.defaultProps = {
  classNames: ""
};
jf.propTypes = {};
var Xo, Qo;
function Z2(l, r) {
  return !(l === r || De.isValidElement(l) && De.isValidElement(r) && l.key != null && l.key === r.key);
}
var Xa = {
  out: "out-in",
  in: "in-out"
}, tu = function(r, u, o) {
  return function() {
    var s;
    r.props[u] && (s = r.props)[u].apply(s, arguments), o();
  };
}, K2 = (Xo = {}, Xo[Xa.out] = function(l) {
  var r = l.current, u = l.changeState;
  return De.cloneElement(r, {
    in: !1,
    onExited: tu(r, "onExited", function() {
      u(Vt, null);
    })
  });
}, Xo[Xa.in] = function(l) {
  var r = l.current, u = l.changeState, o = l.children;
  return [r, De.cloneElement(o, {
    in: !0,
    onEntered: tu(o, "onEntered", function() {
      u(Vt);
    })
  })];
}, Xo), P2 = (Qo = {}, Qo[Xa.out] = function(l) {
  var r = l.children, u = l.changeState;
  return De.cloneElement(r, {
    in: !0,
    onEntered: tu(r, "onEntered", function() {
      u(cn, De.cloneElement(r, {
        in: !0
      }));
    })
  });
}, Qo[Xa.in] = function(l) {
  var r = l.current, u = l.children, o = l.changeState;
  return [De.cloneElement(r, {
    in: !1,
    onExited: tu(r, "onExited", function() {
      o(cn, De.cloneElement(u, {
        in: !0
      }));
    })
  }), De.cloneElement(u, {
    in: !0
  })];
}, Qo), zf = /* @__PURE__ */ function(l) {
  Nf(r, l);
  function r() {
    for (var o, s = arguments.length, f = new Array(s), d = 0; d < s; d++)
      f[d] = arguments[d];
    return o = l.call.apply(l, [this].concat(f)) || this, o.state = {
      status: cn,
      current: null
    }, o.appeared = !1, o.changeState = function(m, p) {
      p === void 0 && (p = o.state.current), o.setState({
        status: m,
        current: p
      });
    }, o;
  }
  var u = r.prototype;
  return u.componentDidMount = function() {
    this.appeared = !0;
  }, r.getDerivedStateFromProps = function(s, f) {
    return s.children == null ? {
      current: null
    } : f.status === Vt && s.mode === Xa.in ? {
      status: Vt
    } : f.current && Z2(f.current, s.children) ? {
      status: ci
    } : {
      current: De.cloneElement(s.children, {
        in: !0
      })
    };
  }, u.render = function() {
    var s = this.props, f = s.children, d = s.mode, m = this.state, p = m.status, h = m.current, g = {
      children: f,
      current: h,
      changeState: this.changeState,
      status: p
    }, y;
    switch (p) {
      case Vt:
        y = P2[d](g);
        break;
      case ci:
        y = K2[d](g);
        break;
      case cn:
        y = h;
    }
    return /* @__PURE__ */ De.createElement(Df.Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, y);
  }, r;
}(De.Component);
zf.propTypes = {};
zf.defaultProps = {
  mode: Xa.out
};
function F2(l) {
  return Object.prototype.toString.call(l) === "[object Object]";
}
function dv(l) {
  return F2(l) || Array.isArray(l);
}
function J2() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Uf(l, r) {
  const u = Object.keys(l), o = Object.keys(r);
  if (u.length !== o.length) return !1;
  const s = JSON.stringify(Object.keys(l.breakpoints || {})), f = JSON.stringify(Object.keys(r.breakpoints || {}));
  return s !== f ? !1 : u.every((d) => {
    const m = l[d], p = r[d];
    return typeof m == "function" ? `${m}` == `${p}` : !dv(m) || !dv(p) ? m === p : Uf(m, p);
  });
}
function mv(l) {
  return l.concat().sort((r, u) => r.name > u.name ? 1 : -1).map((r) => r.options);
}
function $2(l, r) {
  if (l.length !== r.length) return !1;
  const u = mv(l), o = mv(r);
  return u.every((s, f) => {
    const d = o[f];
    return Uf(s, d);
  });
}
function Lf(l) {
  return typeof l == "number";
}
function sf(l) {
  return typeof l == "string";
}
function du(l) {
  return typeof l == "boolean";
}
function hv(l) {
  return Object.prototype.toString.call(l) === "[object Object]";
}
function Xe(l) {
  return Math.abs(l);
}
function Bf(l) {
  return Math.sign(l);
}
function li(l, r) {
  return Xe(l - r);
}
function W2(l, r) {
  if (l === 0 || r === 0 || Xe(l) <= Xe(r)) return 0;
  const u = li(Xe(l), Xe(r));
  return Xe(u / l);
}
function I2(l) {
  return Math.round(l * 100) / 100;
}
function si(l) {
  return fi(l).map(Number);
}
function Ft(l) {
  return l[bi(l)];
}
function bi(l) {
  return Math.max(0, l.length - 1);
}
function kf(l, r) {
  return r === bi(l);
}
function pv(l, r = 0) {
  return Array.from(Array(l), (u, o) => r + o);
}
function fi(l) {
  return Object.keys(l);
}
function r0(l, r) {
  return [l, r].reduce((u, o) => (fi(o).forEach((s) => {
    const f = u[s], d = o[s], m = hv(f) && hv(d);
    u[s] = m ? r0(f, d) : d;
  }), u), {});
}
function ff(l, r) {
  return typeof r.MouseEvent < "u" && l instanceof r.MouseEvent;
}
function ew(l, r) {
  const u = {
    start: o,
    center: s,
    end: f
  };
  function o() {
    return 0;
  }
  function s(p) {
    return f(p) / 2;
  }
  function f(p) {
    return r - p;
  }
  function d(p, h) {
    return sf(l) ? u[l](p) : l(r, p, h);
  }
  return {
    measure: d
  };
}
function di() {
  let l = [];
  function r(s, f, d, m = {
    passive: !0
  }) {
    let p;
    if ("addEventListener" in s)
      s.addEventListener(f, d, m), p = () => s.removeEventListener(f, d, m);
    else {
      const h = s;
      h.addListener(d), p = () => h.removeListener(d);
    }
    return l.push(p), o;
  }
  function u() {
    l = l.filter((s) => s());
  }
  const o = {
    add: r,
    clear: u
  };
  return o;
}
function tw(l, r, u, o) {
  const s = di(), f = 1e3 / 60;
  let d = null, m = 0, p = 0;
  function h() {
    s.add(l, "visibilitychange", () => {
      l.hidden && R();
    });
  }
  function g() {
    w(), s.clear();
  }
  function y(O) {
    if (!p) return;
    d || (d = O, u(), u());
    const T = O - d;
    for (d = O, m += T; m >= f; )
      u(), m -= f;
    const j = m / f;
    o(j), p && (p = r.requestAnimationFrame(y));
  }
  function S() {
    p || (p = r.requestAnimationFrame(y));
  }
  function w() {
    r.cancelAnimationFrame(p), d = null, m = 0, p = 0;
  }
  function R() {
    d = null, m = 0;
  }
  return {
    init: h,
    destroy: g,
    start: S,
    stop: w,
    update: u,
    render: o
  };
}
function nw(l, r) {
  const u = r === "rtl", o = l === "y", s = o ? "y" : "x", f = o ? "x" : "y", d = !o && u ? -1 : 1, m = g(), p = y();
  function h(R) {
    const {
      height: A,
      width: O
    } = R;
    return o ? A : O;
  }
  function g() {
    return o ? "top" : u ? "right" : "left";
  }
  function y() {
    return o ? "bottom" : u ? "left" : "right";
  }
  function S(R) {
    return R * d;
  }
  return {
    scroll: s,
    cross: f,
    startEdge: m,
    endEdge: p,
    measureSize: h,
    direction: S
  };
}
function kl(l = 0, r = 0) {
  const u = Xe(l - r);
  function o(h) {
    return h < l;
  }
  function s(h) {
    return h > r;
  }
  function f(h) {
    return o(h) || s(h);
  }
  function d(h) {
    return f(h) ? o(h) ? l : r : h;
  }
  function m(h) {
    return u ? h - u * Math.ceil((h - r) / u) : h;
  }
  return {
    length: u,
    max: r,
    min: l,
    constrain: d,
    reachedAny: f,
    reachedMax: s,
    reachedMin: o,
    removeOffset: m
  };
}
function i0(l, r, u) {
  const {
    constrain: o
  } = kl(0, l), s = l + 1;
  let f = d(r);
  function d(S) {
    return u ? Xe((s + S) % s) : o(S);
  }
  function m() {
    return f;
  }
  function p(S) {
    return f = d(S), y;
  }
  function h(S) {
    return g().set(m() + S);
  }
  function g() {
    return i0(l, m(), u);
  }
  const y = {
    get: m,
    set: p,
    add: h,
    clone: g
  };
  return y;
}
function lw(l, r, u, o, s, f, d, m, p, h, g, y, S, w, R, A, O, T, j) {
  const {
    cross: z,
    direction: q
  } = l, Y = ["INPUT", "SELECT", "TEXTAREA"], Z = {
    passive: !1
  }, X = di(), V = di(), te = kl(50, 225).constrain(w.measure(20)), I = {
    mouse: 300,
    touch: 400
  }, ne = {
    mouse: 500,
    touch: 600
  }, ae = R ? 43 : 25;
  let se = !1, de = 0, ce = 0, D = !1, P = !1, k = !1, W = !1;
  function x(le) {
    if (!j) return;
    function Re(We) {
      (du(j) || j(le, We)) && ue(We);
    }
    const He = r;
    X.add(He, "dragstart", (We) => We.preventDefault(), Z).add(He, "touchmove", () => {
    }, Z).add(He, "touchend", () => {
    }).add(He, "touchstart", Re).add(He, "mousedown", Re).add(He, "touchcancel", ve).add(He, "contextmenu", ve).add(He, "click", Ce, !0);
  }
  function G() {
    X.clear(), V.clear();
  }
  function J() {
    const le = W ? u : r;
    V.add(le, "touchmove", me, Z).add(le, "touchend", ve).add(le, "mousemove", me, Z).add(le, "mouseup", ve);
  }
  function $(le) {
    const Re = le.nodeName || "";
    return Y.includes(Re);
  }
  function ee() {
    return (R ? ne : I)[W ? "mouse" : "touch"];
  }
  function ge(le, Re) {
    const He = y.add(Bf(le) * -1), We = g.byDistance(le, !R).distance;
    return R || Xe(le) < te ? We : O && Re ? We * 0.5 : g.byIndex(He.get(), 0).distance;
  }
  function ue(le) {
    const Re = ff(le, o);
    W = Re, k = R && Re && !le.buttons && se, se = li(s.get(), d.get()) >= 2, !(Re && le.button !== 0) && ($(le.target) || (D = !0, f.pointerDown(le), h.useFriction(0).useDuration(0), s.set(d), J(), de = f.readPoint(le), ce = f.readPoint(le, z), S.emit("pointerDown")));
  }
  function me(le) {
    if (!ff(le, o) && le.touches.length >= 2) return ve(le);
    const He = f.readPoint(le), We = f.readPoint(le, z), yt = li(He, de), Qe = li(We, ce);
    if (!P && !W && (!le.cancelable || (P = yt > Qe, !P)))
      return ve(le);
    const Qt = f.pointerMove(le);
    yt > A && (k = !0), h.useFriction(0.3).useDuration(0.75), m.start(), s.add(q(Qt)), le.preventDefault();
  }
  function ve(le) {
    const He = g.byDistance(0, !1).index !== y.get(), We = f.pointerUp(le) * ee(), yt = ge(q(We), He), Qe = W2(We, yt), Qt = ae - 10 * Qe, st = T + Qe / 50;
    P = !1, D = !1, V.clear(), h.useDuration(Qt).useFriction(st), p.distance(yt, !R), W = !1, S.emit("pointerUp");
  }
  function Ce(le) {
    k && (le.stopPropagation(), le.preventDefault(), k = !1);
  }
  function ke() {
    return D;
  }
  return {
    init: x,
    destroy: G,
    pointerDown: ke
  };
}
function aw(l, r) {
  let o, s;
  function f(y) {
    return y.timeStamp;
  }
  function d(y, S) {
    const R = `client${(S || l.scroll) === "x" ? "X" : "Y"}`;
    return (ff(y, r) ? y : y.touches[0])[R];
  }
  function m(y) {
    return o = y, s = y, d(y);
  }
  function p(y) {
    const S = d(y) - d(s), w = f(y) - f(o) > 170;
    return s = y, w && (o = y), S;
  }
  function h(y) {
    if (!o || !s) return 0;
    const S = d(s) - d(o), w = f(y) - f(o), R = f(y) - f(s) > 170, A = S / w;
    return w && !R && Xe(A) > 0.1 ? A : 0;
  }
  return {
    pointerDown: m,
    pointerMove: p,
    pointerUp: h,
    readPoint: d
  };
}
function rw() {
  function l(u) {
    const {
      offsetTop: o,
      offsetLeft: s,
      offsetWidth: f,
      offsetHeight: d
    } = u;
    return {
      top: o,
      right: s + f,
      bottom: o + d,
      left: s,
      width: f,
      height: d
    };
  }
  return {
    measure: l
  };
}
function iw(l) {
  function r(o) {
    return l * (o / 100);
  }
  return {
    measure: r
  };
}
function ow(l, r, u, o, s, f, d) {
  const m = [l].concat(o);
  let p, h, g = [], y = !1;
  function S(O) {
    return s.measureSize(d.measure(O));
  }
  function w(O) {
    if (!f) return;
    h = S(l), g = o.map(S);
    function T(j) {
      for (const z of j) {
        if (y) return;
        const q = z.target === l, Y = o.indexOf(z.target), Z = q ? h : g[Y], X = S(q ? l : o[Y]);
        if (Xe(X - Z) >= 0.5) {
          O.reInit(), r.emit("resize");
          break;
        }
      }
    }
    p = new ResizeObserver((j) => {
      (du(f) || f(O, j)) && T(j);
    }), u.requestAnimationFrame(() => {
      m.forEach((j) => p.observe(j));
    });
  }
  function R() {
    y = !0, p && p.disconnect();
  }
  return {
    init: w,
    destroy: R
  };
}
function uw(l, r, u, o, s, f) {
  let d = 0, m = 0, p = s, h = f, g = l.get(), y = 0;
  function S() {
    const Z = o.get() - l.get(), X = !p;
    let V = 0;
    return X ? (d = 0, u.set(o), l.set(o), V = Z) : (u.set(l), d += Z / p, d *= h, g += d, l.add(d), V = g - y), m = Bf(V), y = g, Y;
  }
  function w() {
    const Z = o.get() - r.get();
    return Xe(Z) < 1e-3;
  }
  function R() {
    return p;
  }
  function A() {
    return m;
  }
  function O() {
    return d;
  }
  function T() {
    return z(s);
  }
  function j() {
    return q(f);
  }
  function z(Z) {
    return p = Z, Y;
  }
  function q(Z) {
    return h = Z, Y;
  }
  const Y = {
    direction: A,
    duration: R,
    velocity: O,
    seek: S,
    settled: w,
    useBaseFriction: j,
    useBaseDuration: T,
    useFriction: q,
    useDuration: z
  };
  return Y;
}
function cw(l, r, u, o, s) {
  const f = s.measure(10), d = s.measure(50), m = kl(0.1, 0.99);
  let p = !1;
  function h() {
    return !(p || !l.reachedAny(u.get()) || !l.reachedAny(r.get()));
  }
  function g(w) {
    if (!h()) return;
    const R = l.reachedMin(r.get()) ? "min" : "max", A = Xe(l[R] - r.get()), O = u.get() - r.get(), T = m.constrain(A / d);
    u.subtract(O * T), !w && Xe(O) < f && (u.set(l.constrain(u.get())), o.useDuration(25).useBaseFriction());
  }
  function y(w) {
    p = !w;
  }
  return {
    shouldConstrain: h,
    constrain: g,
    toggleActive: y
  };
}
function sw(l, r, u, o, s) {
  const f = kl(-r + l, 0), d = y(), m = g(), p = S();
  function h(R, A) {
    return li(R, A) <= 1;
  }
  function g() {
    const R = d[0], A = Ft(d), O = d.lastIndexOf(R), T = d.indexOf(A) + 1;
    return kl(O, T);
  }
  function y() {
    return u.map((R, A) => {
      const {
        min: O,
        max: T
      } = f, j = f.constrain(R), z = !A, q = kf(u, A);
      return z ? T : q || h(O, j) ? O : h(T, j) ? T : j;
    }).map((R) => parseFloat(R.toFixed(3)));
  }
  function S() {
    if (r <= l + s) return [f.max];
    if (o === "keepSnaps") return d;
    const {
      min: R,
      max: A
    } = m;
    return d.slice(R, A);
  }
  return {
    snapsContained: p,
    scrollContainLimit: m
  };
}
function fw(l, r, u) {
  const o = r[0], s = u ? o - l : Ft(r);
  return {
    limit: kl(s, o)
  };
}
function dw(l, r, u, o) {
  const f = r.min + 0.1, d = r.max + 0.1, {
    reachedMin: m,
    reachedMax: p
  } = kl(f, d);
  function h(S) {
    return S === 1 ? p(u.get()) : S === -1 ? m(u.get()) : !1;
  }
  function g(S) {
    if (!h(S)) return;
    const w = l * (S * -1);
    o.forEach((R) => R.add(w));
  }
  return {
    loop: g
  };
}
function mw(l) {
  const {
    max: r,
    length: u
  } = l;
  function o(f) {
    const d = f - r;
    return u ? d / -u : 0;
  }
  return {
    get: o
  };
}
function hw(l, r, u, o, s) {
  const {
    startEdge: f,
    endEdge: d
  } = l, {
    groupSlides: m
  } = s, p = y().map(r.measure), h = S(), g = w();
  function y() {
    return m(o).map((A) => Ft(A)[d] - A[0][f]).map(Xe);
  }
  function S() {
    return o.map((A) => u[f] - A[f]).map((A) => -Xe(A));
  }
  function w() {
    return m(h).map((A) => A[0]).map((A, O) => A + p[O]);
  }
  return {
    snaps: h,
    snapsAligned: g
  };
}
function pw(l, r, u, o, s, f) {
  const {
    groupSlides: d
  } = s, {
    min: m,
    max: p
  } = o, h = g();
  function g() {
    const S = d(f), w = !l || r === "keepSnaps";
    return u.length === 1 ? [f] : w ? S : S.slice(m, p).map((R, A, O) => {
      const T = !A, j = kf(O, A);
      if (T) {
        const z = Ft(O[0]) + 1;
        return pv(z);
      }
      if (j) {
        const z = bi(f) - Ft(O)[0] + 1;
        return pv(z, Ft(O)[0]);
      }
      return R;
    });
  }
  return {
    slideRegistry: h
  };
}
function vw(l, r, u, o, s) {
  const {
    reachedAny: f,
    removeOffset: d,
    constrain: m
  } = o;
  function p(R) {
    return R.concat().sort((A, O) => Xe(A) - Xe(O))[0];
  }
  function h(R) {
    const A = l ? d(R) : m(R), O = r.map((j, z) => ({
      diff: g(j - A, 0),
      index: z
    })).sort((j, z) => Xe(j.diff) - Xe(z.diff)), {
      index: T
    } = O[0];
    return {
      index: T,
      distance: A
    };
  }
  function g(R, A) {
    const O = [R, R + u, R - u];
    if (!l) return R;
    if (!A) return p(O);
    const T = O.filter((j) => Bf(j) === A);
    return T.length ? p(T) : Ft(O) - u;
  }
  function y(R, A) {
    const O = r[R] - s.get(), T = g(O, A);
    return {
      index: R,
      distance: T
    };
  }
  function S(R, A) {
    const O = s.get() + R, {
      index: T,
      distance: j
    } = h(O), z = !l && f(O);
    if (!A || z) return {
      index: T,
      distance: R
    };
    const q = r[T] - j, Y = R + g(q, 0);
    return {
      index: T,
      distance: Y
    };
  }
  return {
    byDistance: S,
    byIndex: y,
    shortcut: g
  };
}
function gw(l, r, u, o, s, f, d) {
  function m(y) {
    const S = y.distance, w = y.index !== r.get();
    f.add(S), S && (o.duration() ? l.start() : (l.update(), l.render(1), l.update())), w && (u.set(r.get()), r.set(y.index), d.emit("select"));
  }
  function p(y, S) {
    const w = s.byDistance(y, S);
    m(w);
  }
  function h(y, S) {
    const w = r.clone().set(y), R = s.byIndex(w.get(), S);
    m(R);
  }
  return {
    distance: p,
    index: h
  };
}
function yw(l, r, u, o, s, f, d, m) {
  const p = {
    passive: !0,
    capture: !0
  };
  let h = 0;
  function g(w) {
    if (!m) return;
    function R(A) {
      if ((/* @__PURE__ */ new Date()).getTime() - h > 10) return;
      d.emit("slideFocusStart"), l.scrollLeft = 0;
      const j = u.findIndex((z) => z.includes(A));
      Lf(j) && (s.useDuration(0), o.index(j, 0), d.emit("slideFocus"));
    }
    f.add(document, "keydown", y, !1), r.forEach((A, O) => {
      f.add(A, "focus", (T) => {
        (du(m) || m(w, T)) && R(O);
      }, p);
    });
  }
  function y(w) {
    w.code === "Tab" && (h = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: g
  };
}
function ni(l) {
  let r = l;
  function u() {
    return r;
  }
  function o(p) {
    r = d(p);
  }
  function s(p) {
    r += d(p);
  }
  function f(p) {
    r -= d(p);
  }
  function d(p) {
    return Lf(p) ? p : p.get();
  }
  return {
    get: u,
    set: o,
    add: s,
    subtract: f
  };
}
function o0(l, r) {
  const u = l.scroll === "x" ? d : m, o = r.style;
  let s = null, f = !1;
  function d(S) {
    return `translate3d(${S}px,0px,0px)`;
  }
  function m(S) {
    return `translate3d(0px,${S}px,0px)`;
  }
  function p(S) {
    if (f) return;
    const w = I2(l.direction(S));
    w !== s && (o.transform = u(w), s = w);
  }
  function h(S) {
    f = !S;
  }
  function g() {
    f || (o.transform = "", r.getAttribute("style") || r.removeAttribute("style"));
  }
  return {
    clear: g,
    to: p,
    toggleActive: h
  };
}
function bw(l, r, u, o, s, f, d, m, p) {
  const g = si(s), y = si(s).reverse(), S = T().concat(j());
  function w(X, V) {
    return X.reduce((te, I) => te - s[I], V);
  }
  function R(X, V) {
    return X.reduce((te, I) => w(te, V) > 0 ? te.concat([I]) : te, []);
  }
  function A(X) {
    return f.map((V, te) => ({
      start: V - o[te] + 0.5 + X,
      end: V + r - 0.5 + X
    }));
  }
  function O(X, V, te) {
    const I = A(V);
    return X.map((ne) => {
      const ae = te ? 0 : -u, se = te ? u : 0, de = te ? "end" : "start", ce = I[ne][de];
      return {
        index: ne,
        loopPoint: ce,
        slideLocation: ni(-1),
        translate: o0(l, p[ne]),
        target: () => m.get() > ce ? ae : se
      };
    });
  }
  function T() {
    const X = d[0], V = R(y, X);
    return O(V, u, !1);
  }
  function j() {
    const X = r - d[0] - 1, V = R(g, X);
    return O(V, -u, !0);
  }
  function z() {
    return S.every(({
      index: X
    }) => {
      const V = g.filter((te) => te !== X);
      return w(V, r) <= 0.1;
    });
  }
  function q() {
    S.forEach((X) => {
      const {
        target: V,
        translate: te,
        slideLocation: I
      } = X, ne = V();
      ne !== I.get() && (te.to(ne), I.set(ne));
    });
  }
  function Y() {
    S.forEach((X) => X.translate.clear());
  }
  return {
    canLoop: z,
    clear: Y,
    loop: q,
    loopPoints: S
  };
}
function xw(l, r, u) {
  let o, s = !1;
  function f(p) {
    if (!u) return;
    function h(g) {
      for (const y of g)
        if (y.type === "childList") {
          p.reInit(), r.emit("slidesChanged");
          break;
        }
    }
    o = new MutationObserver((g) => {
      s || (du(u) || u(p, g)) && h(g);
    }), o.observe(l, {
      childList: !0
    });
  }
  function d() {
    o && o.disconnect(), s = !0;
  }
  return {
    init: f,
    destroy: d
  };
}
function Sw(l, r, u, o) {
  const s = {};
  let f = null, d = null, m, p = !1;
  function h() {
    m = new IntersectionObserver((R) => {
      p || (R.forEach((A) => {
        const O = r.indexOf(A.target);
        s[O] = A;
      }), f = null, d = null, u.emit("slidesInView"));
    }, {
      root: l.parentElement,
      threshold: o
    }), r.forEach((R) => m.observe(R));
  }
  function g() {
    m && m.disconnect(), p = !0;
  }
  function y(R) {
    return fi(s).reduce((A, O) => {
      const T = parseInt(O), {
        isIntersecting: j
      } = s[T];
      return (R && j || !R && !j) && A.push(T), A;
    }, []);
  }
  function S(R = !0) {
    if (R && f) return f;
    if (!R && d) return d;
    const A = y(R);
    return R && (f = A), R || (d = A), A;
  }
  return {
    init: h,
    destroy: g,
    get: S
  };
}
function Ew(l, r, u, o, s, f) {
  const {
    measureSize: d,
    startEdge: m,
    endEdge: p
  } = l, h = u[0] && s, g = R(), y = A(), S = u.map(d), w = O();
  function R() {
    if (!h) return 0;
    const j = u[0];
    return Xe(r[m] - j[m]);
  }
  function A() {
    if (!h) return 0;
    const j = f.getComputedStyle(Ft(o));
    return parseFloat(j.getPropertyValue(`margin-${p}`));
  }
  function O() {
    return u.map((j, z, q) => {
      const Y = !z, Z = kf(q, z);
      return Y ? S[z] + g : Z ? S[z] + y : q[z + 1][m] - j[m];
    }).map(Xe);
  }
  return {
    slideSizes: S,
    slideSizesWithGaps: w,
    startGap: g,
    endGap: y
  };
}
function ww(l, r, u, o, s, f, d, m, p) {
  const {
    startEdge: h,
    endEdge: g,
    direction: y
  } = l, S = Lf(u);
  function w(T, j) {
    return si(T).filter((z) => z % j === 0).map((z) => T.slice(z, z + j));
  }
  function R(T) {
    return T.length ? si(T).reduce((j, z, q) => {
      const Y = Ft(j) || 0, Z = Y === 0, X = z === bi(T), V = s[h] - f[Y][h], te = s[h] - f[z][g], I = !o && Z ? y(d) : 0, ne = !o && X ? y(m) : 0, ae = Xe(te - ne - (V + I));
      return q && ae > r + p && j.push(z), X && j.push(T.length), j;
    }, []).map((j, z, q) => {
      const Y = Math.max(q[z - 1] || 0);
      return T.slice(Y, j);
    }) : [];
  }
  function A(T) {
    return S ? w(T, u) : R(T);
  }
  return {
    groupSlides: A
  };
}
function Aw(l, r, u, o, s, f, d) {
  const {
    align: m,
    axis: p,
    direction: h,
    startIndex: g,
    loop: y,
    duration: S,
    dragFree: w,
    dragThreshold: R,
    inViewThreshold: A,
    slidesToScroll: O,
    skipSnaps: T,
    containScroll: j,
    watchResize: z,
    watchSlides: q,
    watchDrag: Y,
    watchFocus: Z
  } = f, X = 2, V = rw(), te = V.measure(r), I = u.map(V.measure), ne = nw(p, h), ae = ne.measureSize(te), se = iw(ae), de = ew(m, ae), ce = !y && !!j, D = y || !!j, {
    slideSizes: P,
    slideSizesWithGaps: k,
    startGap: W,
    endGap: x
  } = Ew(ne, te, I, u, D, s), G = ww(ne, ae, O, y, te, I, W, x, X), {
    snaps: J,
    snapsAligned: $
  } = hw(ne, de, te, I, G), ee = -Ft(J) + Ft(k), {
    snapsContained: ge,
    scrollContainLimit: ue
  } = sw(ae, ee, $, j, X), me = ce ? ge : $, {
    limit: ve
  } = fw(ee, me, y), Ce = i0(bi(me), g, y), ke = Ce.clone(), Me = si(u), le = ({
    dragHandler: kn,
    scrollBody: Ja,
    scrollBounds: $a,
    options: {
      loop: mn
    }
  }) => {
    mn || $a.constrain(kn.pointerDown()), Ja.seek();
  }, Re = ({
    scrollBody: kn,
    translate: Ja,
    location: $a,
    offsetLocation: mn,
    previousLocation: ql,
    scrollLooper: hn,
    slideLooper: Vl,
    dragHandler: gl,
    animation: hu,
    eventHandler: Wa,
    scrollBounds: Ei,
    options: {
      loop: Xl
    }
  }, Hn) => {
    const wi = kn.settled(), Ai = !Ei.shouldConstrain(), Ia = Xl ? wi : wi && Ai, Ql = Ia && !gl.pointerDown();
    Ql && hu.stop();
    const er = $a.get() * Hn + ql.get() * (1 - Hn);
    mn.set(er), Xl && (hn.loop(kn.direction()), Vl.loop()), Ja.to(mn.get()), Ql && Wa.emit("settle"), Ia || Wa.emit("scroll");
  }, He = tw(o, s, () => le(it), (kn) => Re(it, kn)), We = 0.68, yt = me[Ce.get()], Qe = ni(yt), Qt = ni(yt), st = ni(yt), Wt = ni(yt), It = uw(Qe, st, Qt, Wt, S, We), Fa = vw(y, me, ee, ve, Wt), Yl = gw(He, Ce, ke, It, Fa, Wt, d), xi = mw(ve), Si = di(), vl = Sw(r, u, d, A), {
    slideRegistry: ft
  } = pw(ce, j, me, ue, G, Me), en = yw(l, u, ft, Yl, It, Si, d, Z), it = {
    ownerDocument: o,
    ownerWindow: s,
    eventHandler: d,
    containerRect: te,
    slideRects: I,
    animation: He,
    axis: ne,
    dragHandler: lw(ne, l, o, s, Wt, aw(ne, s), Qe, He, Yl, It, Fa, Ce, d, se, w, R, T, We, Y),
    eventStore: Si,
    percentOfView: se,
    index: Ce,
    indexPrevious: ke,
    limit: ve,
    location: Qe,
    offsetLocation: st,
    previousLocation: Qt,
    options: f,
    resizeHandler: ow(r, d, s, u, ne, z, V),
    scrollBody: It,
    scrollBounds: cw(ve, st, Wt, It, se),
    scrollLooper: dw(ee, ve, st, [Qe, st, Qt, Wt]),
    scrollProgress: xi,
    scrollSnapList: me.map(xi.get),
    scrollSnaps: me,
    scrollTarget: Fa,
    scrollTo: Yl,
    slideLooper: bw(ne, ae, ee, P, k, J, me, st, u),
    slideFocus: en,
    slidesHandler: xw(r, d, q),
    slidesInView: vl,
    slideIndexes: Me,
    slideRegistry: ft,
    slidesToScroll: G,
    target: Wt,
    translate: o0(ne, r)
  };
  return it;
}
function Cw() {
  let l = {}, r;
  function u(h) {
    r = h;
  }
  function o(h) {
    return l[h] || [];
  }
  function s(h) {
    return o(h).forEach((g) => g(r, h)), p;
  }
  function f(h, g) {
    return l[h] = o(h).concat([g]), p;
  }
  function d(h, g) {
    return l[h] = o(h).filter((y) => y !== g), p;
  }
  function m() {
    l = {};
  }
  const p = {
    init: u,
    emit: s,
    off: d,
    on: f,
    clear: m
  };
  return p;
}
const Rw = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
  watchFocus: !0
};
function Mw(l) {
  function r(f, d) {
    return r0(f, d || {});
  }
  function u(f) {
    const d = f.breakpoints || {}, m = fi(d).filter((p) => l.matchMedia(p).matches).map((p) => d[p]).reduce((p, h) => r(p, h), {});
    return r(f, m);
  }
  function o(f) {
    return f.map((d) => fi(d.breakpoints || {})).reduce((d, m) => d.concat(m), []).map(l.matchMedia);
  }
  return {
    mergeOptions: r,
    optionsAtMedia: u,
    optionsMediaQueries: o
  };
}
function Ow(l) {
  let r = [];
  function u(f, d) {
    return r = d.filter(({
      options: m
    }) => l.optionsAtMedia(m).active !== !1), r.forEach((m) => m.init(f, l)), d.reduce((m, p) => Object.assign(m, {
      [p.name]: p
    }), {});
  }
  function o() {
    r = r.filter((f) => f.destroy());
  }
  return {
    init: u,
    destroy: o
  };
}
function nu(l, r, u) {
  const o = l.ownerDocument, s = o.defaultView, f = Mw(s), d = Ow(f), m = di(), p = Cw(), {
    mergeOptions: h,
    optionsAtMedia: g,
    optionsMediaQueries: y
  } = f, {
    on: S,
    off: w,
    emit: R
  } = p, A = ne;
  let O = !1, T, j = h(Rw, nu.globalOptions), z = h(j), q = [], Y, Z, X;
  function V() {
    const {
      container: Me,
      slides: le
    } = z;
    Z = (sf(Me) ? l.querySelector(Me) : Me) || l.children[0];
    const He = sf(le) ? Z.querySelectorAll(le) : le;
    X = [].slice.call(He || Z.children);
  }
  function te(Me) {
    const le = Aw(l, Z, X, o, s, Me, p);
    if (Me.loop && !le.slideLooper.canLoop()) {
      const Re = Object.assign({}, Me, {
        loop: !1
      });
      return te(Re);
    }
    return le;
  }
  function I(Me, le) {
    O || (j = h(j, Me), z = g(j), q = le || q, V(), T = te(z), y([j, ...q.map(({
      options: Re
    }) => Re)]).forEach((Re) => m.add(Re, "change", ne)), z.active && (T.translate.to(T.location.get()), T.animation.init(), T.slidesInView.init(), T.slideFocus.init(ke), T.eventHandler.init(ke), T.resizeHandler.init(ke), T.slidesHandler.init(ke), T.options.loop && T.slideLooper.loop(), Z.offsetParent && X.length && T.dragHandler.init(ke), Y = d.init(ke, q)));
  }
  function ne(Me, le) {
    const Re = G();
    ae(), I(h({
      startIndex: Re
    }, Me), le), p.emit("reInit");
  }
  function ae() {
    T.dragHandler.destroy(), T.eventStore.clear(), T.translate.clear(), T.slideLooper.clear(), T.resizeHandler.destroy(), T.slidesHandler.destroy(), T.slidesInView.destroy(), T.animation.destroy(), d.destroy(), m.clear();
  }
  function se() {
    O || (O = !0, m.clear(), ae(), p.emit("destroy"), p.clear());
  }
  function de(Me, le, Re) {
    !z.active || O || (T.scrollBody.useBaseFriction().useDuration(le === !0 ? 0 : z.duration), T.scrollTo.index(Me, Re || 0));
  }
  function ce(Me) {
    const le = T.index.add(1).get();
    de(le, Me, -1);
  }
  function D(Me) {
    const le = T.index.add(-1).get();
    de(le, Me, 1);
  }
  function P() {
    return T.index.add(1).get() !== G();
  }
  function k() {
    return T.index.add(-1).get() !== G();
  }
  function W() {
    return T.scrollSnapList;
  }
  function x() {
    return T.scrollProgress.get(T.offsetLocation.get());
  }
  function G() {
    return T.index.get();
  }
  function J() {
    return T.indexPrevious.get();
  }
  function $() {
    return T.slidesInView.get();
  }
  function ee() {
    return T.slidesInView.get(!1);
  }
  function ge() {
    return Y;
  }
  function ue() {
    return T;
  }
  function me() {
    return l;
  }
  function ve() {
    return Z;
  }
  function Ce() {
    return X;
  }
  const ke = {
    canScrollNext: P,
    canScrollPrev: k,
    containerNode: ve,
    internalEngine: ue,
    destroy: se,
    off: w,
    on: S,
    emit: R,
    plugins: ge,
    previousScrollSnap: J,
    reInit: A,
    rootNode: me,
    scrollNext: ce,
    scrollPrev: D,
    scrollProgress: x,
    scrollSnapList: W,
    scrollTo: de,
    selectedScrollSnap: G,
    slideNodes: Ce,
    slidesInView: $,
    slidesNotInView: ee
  };
  return I(r, u), setTimeout(() => p.emit("init"), 0), ke;
}
nu.globalOptions = void 0;
function Hf(l = {}, r = []) {
  const u = C.useRef(l), o = C.useRef(r), [s, f] = C.useState(), [d, m] = C.useState(), p = C.useCallback(() => {
    s && s.reInit(u.current, o.current);
  }, [s]);
  return C.useEffect(() => {
    Uf(u.current, l) || (u.current = l, p());
  }, [l, p]), C.useEffect(() => {
    $2(o.current, r) || (o.current = r, p());
  }, [r, p]), C.useEffect(() => {
    if (J2() && d) {
      nu.globalOptions = Hf.globalOptions;
      const h = nu(d, u.current, o.current);
      return f(h), () => h.destroy();
    } else
      f(void 0);
  }, [d, f]), [m, s];
}
Hf.globalOptions = void 0;
const u0 = C.createContext(null);
function mu() {
  const l = C.useContext(u0);
  if (!l)
    throw new Error("useCarousel must be used within a <Carousel />");
  return l;
}
function Tw({
  orientation: l = "horizontal",
  opts: r,
  setApi: u,
  plugins: o,
  className: s,
  children: f,
  ...d
}) {
  const [m, p] = Hf({
    ...r,
    axis: l === "horizontal" ? "x" : "y"
  }, o), [h, g] = C.useState(!1), [y, S] = C.useState(!1), w = C.useCallback((T) => {
    T && (g(T.canScrollPrev()), S(T.canScrollNext()));
  }, []), R = C.useCallback(() => {
    p == null || p.scrollPrev();
  }, [p]), A = C.useCallback(() => {
    p == null || p.scrollNext();
  }, [p]), O = C.useCallback((T) => {
    T.key === "ArrowLeft" ? (T.preventDefault(), R()) : T.key === "ArrowRight" && (T.preventDefault(), A());
  }, [R, A]);
  return C.useEffect(() => {
    !p || !u || u(p);
  }, [p, u]), C.useEffect(() => {
    if (p)
      return w(p), p.on("reInit", w), p.on("select", w), () => {
        p == null || p.off("select", w);
      };
  }, [p, w]), /* @__PURE__ */ E.jsx(
    u0.Provider,
    {
      value: {
        carouselRef: m,
        api: p,
        opts: r,
        orientation: l || ((r == null ? void 0 : r.axis) === "y" ? "vertical" : "horizontal"),
        scrollPrev: R,
        scrollNext: A,
        canScrollPrev: h,
        canScrollNext: y
      },
      children: /* @__PURE__ */ E.jsx(
        "div",
        {
          onKeyDownCapture: O,
          className: pl("relative", s),
          role: "region",
          "aria-roledescription": "carousel",
          "data-slot": "carousel",
          ...d,
          children: f
        }
      )
    }
  );
}
function _w({
  className: l,
  ...r
}) {
  const { carouselRef: u, orientation: o } = mu();
  return /* @__PURE__ */ E.jsx(
    "div",
    {
      ref: u,
      className: "overflow-hidden",
      "data-slot": "carousel-content",
      children: /* @__PURE__ */ E.jsx(
        "div",
        {
          className: pl(
            "flex",
            o === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            l
          ),
          ...r
        }
      )
    }
  );
}
function Nw({
  className: l,
  ...r
}) {
  const { orientation: u } = mu();
  return /* @__PURE__ */ E.jsx(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: pl(
        "min-w-0 shrink-0 grow-0 basis-full",
        u === "horizontal" ? "pl-4" : "pt-4",
        l
      ),
      ...r
    }
  );
}
function Dw({
  className: l,
  variant: r = "outline",
  size: u = "icon",
  ...o
}) {
  const { orientation: s, scrollPrev: f, canScrollPrev: d } = mu();
  return /* @__PURE__ */ E.jsxs(
    Dn,
    {
      "data-slot": "carousel-previous",
      variant: r,
      size: u,
      className: pl("absolute size-8 rounded-full", s === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", l),
      disabled: !d,
      onClick: f,
      ...o,
      children: [
        /* @__PURE__ */ E.jsx(XE, {}),
        /* @__PURE__ */ E.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function jw({
  className: l,
  variant: r = "outline",
  size: u = "icon",
  ...o
}) {
  const { orientation: s, scrollNext: f, canScrollNext: d } = mu();
  return /* @__PURE__ */ E.jsxs(
    Dn,
    {
      "data-slot": "carousel-next",
      variant: r,
      size: u,
      className: pl("absolute size-8 rounded-full", s === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", l),
      disabled: !d,
      onClick: f,
      ...o,
      children: [
        /* @__PURE__ */ E.jsx(ZE, {}),
        /* @__PURE__ */ E.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}
const on = {
  "Roasters Choice": [
    "https://cdn.shopify.com/s/files/1/0831/4141/files/Ralf-coffee_1.jpg?v=1713252187",
    "https://cdn.shopify.com/s/files/1/0831/4141/files/Curated_Subscription_Coffee_FIL_March_2025.jpg?v=1745957301",
    "https://cdn.shopify.com/s/files/1/0831/4141/files/330B7ED3-F6D7-452A-80C1-F377D55D8FA6-2950-000002F30AF09FBC.jpg?v=1745591524"
  ],
  Curated: [
    "https://cdn.shopify.com/s/files/1/0831/4141/files/Curated_Subscription_Coffee_FIL_March_2025.jpg?v=1745957301",
    "https://cdn.shopify.com/s/files/1/0831/4141/files/330B7ED3-F6D7-452A-80C1-F377D55D8FA6-2950-000002F30AF09FBC.jpg?v=1745591524",
    "https://cdn.shopify.com/s/files/1/0831/4141/files/Ralf-coffee_1.jpg?v=1713252187"
  ],
  Masterpiece: [
    "https://cdn.shopify.com/s/files/1/0831/4141/files/Aroma_Nativo_Masterpiece.jpg?v=1744711907",
    "https://cdn.shopify.com/s/files/1/0831/4141/files/MasterpiecePourover_62c21026-4dd5-492f-a000-2389bad32528.jpg?v=1716801442",
    "https://cdn.shopify.com/s/files/1/0831/4141/files/1A811F5A-D50E-4B89-B35D-1F3F68BFC79C-1435-0000008C80587130.jpg?v=1734608120"
  ],
  "Low-Caf": [
    "https://cdn.shopify.com/s/files/1/0831/4141/products/thebarn_neu_1200x1200_lowcaf_kanne_813bf11a-da59-4525-8620-5e8f281c8b8d.png?v=1739286465",
    "https://cdn.shopify.com/s/files/1/0831/4141/products/NanoChalla_32c7ddc5-d7a5-4989-8483-b2a358c63eb5.jpg?v=1739301233",
    "https://cdn.shopify.com/s/files/1/0831/4141/products/caffeine_levels_d161625f-8c4c-4a27-86fb-b3c5b94a3414.jpg?v=1739301233"
  ],
  Office: [
    "https://cdn.shopify.com/s/files/1/1657/3941/files/volcan_azul_1kg.webp?v=1743027540",
    "https://cdn.shopify.com/s/files/1/0831/4141/files/gigesa_EOM.jpg?v=1741274114",
    "https://cdn.shopify.com/s/files/1/0831/4141/products/espressoshotsCropped_60eb6865-fd62-43c7-90c5-2bc9050f167b.jpg?v=1741274114",
    "https://cdn.shopify.com/s/files/1/0831/4141/files/Gigesa_flowers.jpg?v=1741274114",
    "https://cdn.shopify.com/s/files/1/0831/4141/files/Gigesa_cherries_cafe_imports.jpg?v=1741274114",
    "https://cdn.shopify.com/s/files/1/0831/4141/products/IMG_53282_e3689e29-ef3c-4753-8295-e2dd695b8ddc.jpg?v=1741274114"
  ],
  Regional: {
    Brazil: [
      "https://cdn.shopify.com/s/files/1/0831/4141/files/Elemental_Bag_Catuai_mit_labelle.png?v=1723799712",
      "https://cdn.shopify.com/s/files/1/0831/4141/files/Image_26.04.24_at_14.12.jpg?v=1728375513",
      "https://cdn.shopify.com/s/files/1/0831/4141/files/2_v60_6c2d62af-96c2-4e95-a9f9-5d66eb85efb8.png?v=1712752891"
    ],
    Ethiopia: [
      "https://cdn.shopify.com/s/files/1/0831/4141/files/BAG_Chelbesa_Natural_2024.png?v=1729679115",
      "https://cdn.shopify.com/s/files/1/0831/4141/files/Image_26.04.24_at_14.12.jpg?v=1728375513",
      "https://cdn.shopify.com/s/files/1/0831/4141/files/2_v60_6c2d62af-96c2-4e95-a9f9-5d66eb85efb8.png?v=1712752891"
    ],
    "Center America": [
      "https://cdn.shopify.com/s/files/1/0831/4141/files/BAG_Volcan_Azul_Caturra_OMNI_3a40d3d4-a185-4da0-99ff-b8d0f43479b7.png?v=1743674027",
      "https://cdn.shopify.com/s/files/1/0831/4141/files/Image_26.04.24_at_14.12.jpg?v=1728375513",
      "https://cdn.shopify.com/s/files/1/0831/4141/files/2_v60_6c2d62af-96c2-4e95-a9f9-5d66eb85efb8.png?v=1712752891"
    ],
    _default: ["https://cdn.shopify.com/s/files/1/0831/4141/files/map.png?v=1745847536"]
  },
  Capsules: {
    Brazil: [
      "https://cdn.shopify.com/s/files/1/0831/4141/files/capsules_1.png?v=1695032905",
      "https://cdn.shopify.com/s/files/1/0831/4141/files/Capsules.jpg?v=1629729054",
      "https://cdn.shopify.com/s/files/1/0831/4141/products/IMG_0695_00be90e4-4d21-44b9-9455-9976a2701503.jpg?v=1667996022",
      "https://cdn.shopify.com/s/files/1/0831/4141/products/IMG_0685_0b551a68-a4c6-4184-bf6d-97cfbd0b9c43.jpg?v=1667996022"
    ],
    Ethiopia: [
      "https://cdn.shopify.com/s/files/1/0831/4141/products/94caa496-c974-436d-a877-91b5f1deee76_e692294a-dcda-4e46-97cf-cb22632a1acf.jpg?v=1667996022",
      "https://cdn.shopify.com/s/files/1/0831/4141/files/Capsules.jpg?v=1629729054",
      "https://cdn.shopify.com/s/files/1/0831/4141/products/IMG_0695_00be90e4-4d21-44b9-9455-9976a2701503.jpg?v=1667996022",
      "https://cdn.shopify.com/s/files/1/0831/4141/products/IMG_0685_0b551a68-a4c6-4184-bf6d-97cfbd0b9c43.jpg?v=1667996022"
    ],
    _default: [
      "https://cdn.shopify.com/s/files/1/0831/4141/files/capsules_1.png?v=1695032905",
      "https://cdn.shopify.com/s/files/1/0831/4141/products/94caa496-c974-436d-a877-91b5f1deee76_e692294a-dcda-4e46-97cf-cb22632a1acf.jpg?v=1667996022",
      "https://cdn.shopify.com/s/files/1/0831/4141/files/Capsules.jpg?v=1629729054"
    ]
  },
  _fallback: [
    "https://cdn.shopify.com/s/files/1/0831/4141/files/LOGO-NAME.png?v=1710576883"
  ]
}, Wr = {
  "Roasters Choice": {
    description: "One seasonal coffees chosen every month by our team. Explore the variety of Single Origin flavour side by side.",
    currentOffering: {
      Espresso: "🇧🇷 Sundrop Peaberry, Brazil: Chocolate. Dried Apricot.",
      Filter: "🇷🇼 Gitwe, Rwanda: Cranberry. Black Tea."
    }
  },
  Curated: {
    description: "Our most popular Subscription. Two Seasonal coffees curated every month. The perfect way to explore stunning Single Origin flavour.",
    currentOffering: {
      Espresso: "🇧🇷 Sundrop Peaberry, Brazil: Chocolate. Dried Apricot. & 🇧🇮 Bumba Hill, Burundi: Passion Fruit. Dark Chocolate.",
      Filter: "🇷🇼 Gitwe, Rwanda: Cranberry. Black Tea. & 🇧🇮 Bumba Hill, Burundi: Passion Fruit. Dark Chocolate."
    }
  },
  Masterpiece: {
    description: "The rarest coffees on the planet: a showcase of innovation and extraordinary flavour. Scoring 90 points and up. Omni Roast.",
    currentOffering: "Our next Masterpiece will be dispatched at the Start of July. We are currently cupping to find the best coffee for you ☕️"
  },
  "Low-Caf": {
    description: "Our answer to decaf, without no compromise on flavour: unique coffees featuring naturally low levels of caffeine.",
    currentOffering: "Daterra Reserve from Brazil 🇧🇷"
  },
  Office: {
    description: "For offices or households that love their espresso, with a little more volume each month. The coffee selection changes every month, allowing you to explore different regions and flavour!",
    currentOffering: "🇧🇷 Sundrop Peaberry, Brasilien: Schokolade. Getrocknete Aprikose."
  },
  Regional: {
    Brazil: {
      description: "People love Brazilian Coffees for their sweetness, depth, and low acidity.",
      currentOffering: "🇧🇷 Elemental, Brazil: Milk Chocolate. Macadamia. Smooth."
    },
    Ethiopia: {
      description: "People love Ethiopian Coffees for their fruity sweetness and floral notes.",
      currentOffering: "🇪🇹 Spring Coffee, Ethiopia: Apricot Jam. Bergamot. Floral."
    },
    "Center America": {
      description: "People love Central American Coffees for their exciting diversity and complex flavour.",
      currentOffering: "🇨🇷 Volcan Azul, Costa Rica: Dried Fig. Vanilla."
    },
    _default: { description: "Select a region to see details about the specific coffee offering for this type.", currentOffering: "" }
  },
  Capsules: {
    _default: {
      description: "Select a taste profile to continue.",
      currentOffering: "Receive our Sustainable Capsules on repeat."
    },
    Brazil: {
      description: "People love Brazilian Coffees for their rich sweetness and low acidity.",
      currentOffering: "🇧🇷 Seasonal Brazil: Toffee. Vanilla. Rich."
    },
    Ethiopia: {
      description: "People love Ethiopian Coffees for their fruity character and elegant sweetness.",
      currentOffering: "🇪🇹 Seasonal Ethiopia: Strawberry. Chocolate. Creamy."
    }
  }
}, zw = (l, r, u, o, s, f) => {
  if (l === "Capsules") {
    const d = f ? parseInt(f) : 0;
    if (d === 3) {
      if (s === "Brazil") return 43660597690635;
      if (s === "Ethiopia") return 43660597756171;
    }
    return console.warn(`Capsule Variant ID not found for Edition: ${s}, Quantity: ${d}`), null;
  }
  return r === "Roasters Choice" ? l === "Filter" ? 45910178332939 : l === "Espresso" ? 45910178398475 : (console.warn("Roasters Choice invalid method:", l), null) : r === "Curated" ? l === "Filter" ? 54897259151735 : l === "Espresso" ? 54897259184503 : (console.warn("Curated invalid method:", l), null) : r === "Masterpiece" ? 45969541562635 : r === "Office" ? o === "1x 1kg" ? 43658532192523 : o === "2x 1kg" ? 43658532258059 : o === "3x 1kg" ? 55217513169271 : o === "4x 1kg" ? 55217514217847 : o === "5x 1kg" ? 55217517035895 : (console.warn("Office unsupported size for current Variant ID mapping:", o), null) : r === "Regional" ? u === "Center America" ? 45972274381067 : u === "Ethiopia" ? 45972211695883 : u === "Brazil" ? 45969588617483 : (console.warn("Regional region not mapped:", u), null) : r === "Low-Caf" ? 45972282409227 : (console.warn("Fallback: Variant ID lookup failed.", { method: l, type: r, region: u, sizeOption: o, edition: s, quantity: f }), null);
}, Uw = {
  "1 Week": { planId: 710364201335 },
  "2 Weeks": { planId: 710364234103 },
  "3 Weeks": { planId: 710364266871 },
  "4 Weeks (Recommended)": { planId: 710364299639 },
  "4 Weeks": { planId: 710364299639 },
  "5 Weeks": { planId: 710364332407 },
  "6 Weeks": { planId: 710364365175 }
}, Lw = { "2 Weeks": 710464045431, "4 Weeks (Recommended)": 710464143735, "4 Weeks": 710464143735, "6 Weeks": 710464110967 }, Bw = 710364397943, kw = { "1 Week": 710364823927, "2 Weeks": 710364856695, "4 Weeks (Recommended)": 710364922231, "4 Weeks": 710364922231, "6 Weeks": 710364987767 }, Hw = { "2 Weeks": 710364463479, "4 Weeks (Recommended)": 710364529015, "4 Weeks": 710364529015, "6 Weeks": 710364594551 }, Gw = { "2 Weeks": 710364660087, "4 Weeks (Recommended)": 710364725623, "4 Weeks": 710364725623, "6 Weeks": 710364791159 }, Yw = { "2 Weeks": 710447038839, "4 Weeks": 710447104375, "4 Weeks (Recommended)": 710447104375 }, qw = {
  "2 Weeks": 710706069879,
  "4 Weeks (Recommended)": 710706004343,
  "4 Weeks": 710706004343
}, Vw = "thebarn.de", Xw = (l, r, u, o, s, f, d) => {
  if (!l || l !== "Capsules" && !r || l === "Capsules" && !o) return "";
  if (l !== "Capsules" && r !== "Office" && !f || l === "Capsules" && !f) return "Select Quantity...";
  if (r === "Office" && !s) return "Select Size...";
  const m = f ? parseInt(f) : 0;
  if (l === "Capsules") {
    if (o && f === "3") {
      if (o === "Brazil")
        return "€27.50";
      if (o === "Ethiopia")
        return "€30.00";
    }
    return "Select options for price";
  }
  if (r === "Roasters Choice") {
    if (m === 1) return "€14.00";
    if (m === 2) return "€28.00";
    if (m === 3) return "€42.00";
    if (m === 4) return "€56.00";
    if (m === 5) return "€70.00";
  } else if (r === "Curated") {
    if (m === 2) return "€27.50";
    if (m === 4) return "€55.00";
    if (m === 6) return "€82.50";
  } else if (r === "Masterpiece") {
    if (m === 1) return "€33.00";
    if (m === 2) return "€66.00";
    if (m === 3) return "€99.00";
  } else if (r === "Low-Caf") {
    if (m === 1) return "€15.50";
    if (m === 2) return "€31.00";
    if (m === 3) return "€46.50";
    if (m === 4) return "€62.00";
    if (m === 5) return "€77.50";
  } else if (r === "Regional") {
    if (!u) return "Select Region...";
    if (u === "Brazil") {
      if (m === 1) return "€13.00";
      if (m === 2) return "€26.00";
      if (m === 3) return "€39.00";
      if (m === 4) return "€52.00";
      if (m === 5) return "€65.00";
    } else if (u === "Ethiopia") {
      if (m === 1) return "€14.00";
      if (m === 2) return "€28.00";
      if (m === 3) return "€42.00";
      if (m === 4) return "€56.00";
      if (m === 5) return "€70.00";
    } else if (u === "Center America") {
      if (m === 1) return "€15.00";
      if (m === 2) return "€30.00";
      if (m === 3) return "€45.00";
      if (m === 4) return "€60.00";
      if (m === 5) return "€75.00";
    }
  } else if (r === "Office") {
    if (s === "1x 1kg") return "€44.00";
    if (s === "2x 1kg") return "€80.00";
    if (s === "3x 1kg") return "€132.00";
    if (s === "4x 1kg") return "€176.00";
    if (s === "5x 1kg") return "€202.50";
  }
  return "Select options for price";
}, c0 = De.forwardRef((l, r) => /* @__PURE__ */ E.jsxs("div", { ref: r, className: "default-intro-content text-white w-[90%] h-full flex flex-col items-center", children: [
  /* @__PURE__ */ E.jsx("div", { className: "mt-8", children: /* @__PURE__ */ E.jsx("img", { src: "https://cdn.shopify.com/s/files/1/0831/4141/files/LOGO-NAME.png?v=1710576883", alt: "The Barn Coffee Roasters Logo", style: { width: "100%", maxWidth: "180px", height: "auto", margin: "1rem 0" } }) }),
  /* @__PURE__ */ E.jsxs("div", { className: "p-5 border border-[#A57C62] rounded-md mt-8 max-w-3xl", children: [
    " ",
    /* @__PURE__ */ E.jsxs("ul", { className: "intro-list text-xl sm:text-2xl", style: { listStyle: "none", padding: 0 }, children: [
      /* @__PURE__ */ E.jsx("li", { className: "my-2", children: "🌱 Sustainably sourced from top farms" }),
      /* @__PURE__ */ E.jsx("li", { className: "my-2", children: "🔥 Expertly roasted in Berlin" }),
      /* @__PURE__ */ E.jsx("li", { className: "my-2", children: "📦 Delivered fresh, right when you need it" }),
      /* @__PURE__ */ E.jsx("li", { className: "my-2", children: "☕ Always rotating—always exceptional" })
    ] })
  ] })
] }));
c0.displayName = "DefaultIntroContent";
const s0 = De.forwardRef(({
  method: l,
  type: r,
  region: u,
  edition: o,
  sizeOption: s,
  quantity: f,
  frequency: d,
  canAddToCartProp: m
}, p) => {
  var j, z, q, Y, Z, X, V, te;
  let h = [], g = null;
  l === "Capsules" ? (h = ((j = on.Capsules) == null ? void 0 : j[o]) || ((z = on.Capsules) == null ? void 0 : z._default) || on._fallback || [], g = ((q = Wr.Capsules) == null ? void 0 : q[o]) || ((Y = Wr.Capsules) == null ? void 0 : Y._default) || null) : r === "Regional" ? (h = ((Z = on.Regional) == null ? void 0 : Z[u]) || ((X = on.Regional) == null ? void 0 : X._default) || on._fallback || [], g = ((V = Wr.Regional) == null ? void 0 : V[u]) || ((te = Wr.Regional) == null ? void 0 : te._default) || null) : r ? (h = on[r] || on._fallback || [], g = Wr[r] || null) : (h = on._fallback || [], g = null), (!Array.isArray(h) || h.length === 0) && (h = on._fallback || []);
  let y = null;
  if (g && g.currentOffering) {
    let I;
    typeof g.currentOffering == "object" && (r === "Roasters Choice" || r === "Curated") ? (I = g.currentOffering[l], I || (I = Object.values(g.currentOffering).join(`
`) || "Details coming soon.")) : typeof g.currentOffering == "string" ? I = g.currentOffering : I = "Details coming soon.", y = /* @__PURE__ */ E.jsx("p", { className: "whitespace-pre-wrap text-sm sm:text-base", children: I });
  }
  const S = "text-[#A67C52] font-semibold", w = [];
  if (w.push("Your selection: "), w.push(/* @__PURE__ */ E.jsx("span", { className: S, children: l }, "method")), l === "Capsules" ? o ? (w.push(" - Taste: "), w.push(/* @__PURE__ */ E.jsx("span", { className: S, children: o }, "edition"))) : w.push(" (select taste profile)") : r ? (w.push(" - "), w.push(/* @__PURE__ */ E.jsx("span", { className: S, children: r }, "type")), r === "Regional" && (u ? (w.push(" - "), w.push(/* @__PURE__ */ E.jsx("span", { className: S, children: u }, "region"))) : w.push(" (select region)"))) : w.push(" (select type)"), w.push(" subscription"), f || s)
    if (w.push(" - Quantity: "), r === "Office")
      w.push(/* @__PURE__ */ E.jsx("span", { className: S, children: s }, "qty-val"));
    else {
      const I = parseInt(f);
      l === "Capsules" ? w.push(/* @__PURE__ */ E.jsx("span", { className: S, children: "3x 10 capsules" }, "qty-val")) : r === "Curated" ? w.push(/* @__PURE__ */ E.jsx("span", { className: S, children: `${I}x 250g` }, "qty-val")) : r === "Masterpiece" ? w.push(/* @__PURE__ */ E.jsx("span", { className: S, children: `${I} bag${I > 1 ? "s" : ""}` }, "qty-val")) : w.push(/* @__PURE__ */ E.jsx("span", { className: S, children: `${I} bag${I > 1 ? "s" : ""} of 250g each` }, "qty-val"));
    }
  else
    w.push(r === "Office" ? " (select size)" : " (select quantity)");
  if (d) {
    w.push(", delivered every ");
    const I = d.replace(" (Recommended)", "");
    w.push(/* @__PURE__ */ E.jsx("span", { className: S, children: I }, "freq"));
  } else
    w.push(" (select frequency)");
  w.push(".");
  const R = () => {
    if (!m) {
      alert("Please complete selections or note that this specific option may be coming soon.");
      return;
    }
    const I = zw(l, r, u, s, o, f);
    if (!I) {
      alert("Error: Product variant not found for the current selection. It might be coming soon or an issue with the configuration."), console.error("Add to Cart blocked: Variant ID is null.", { method: l, type: r, region: u, sizeOption: s, edition: o, quantity: f });
      return;
    }
    let ne;
    const ae = parseInt(f, 10);
    if (r === "Office")
      ne = 1;
    else if (r === "Curated")
      ae === 2 ? ne = 1 : ae === 4 ? ne = 2 : ae === 6 ? ne = 3 : ne = ae;
    else if (l === "Capsules")
      if (ae === 3)
        ne = 1;
      else {
        alert("Selected capsule quantity is not available for purchase at this time.");
        return;
      }
    else
      ne = ae;
    if (isNaN(ne) || ne < 1) {
      alert("Error: Invalid quantity for cart link. Please check selections."), console.error("Invalid quantityForLink:", ne, { method: l, type: r, quantity: f, sizeOption: s });
      return;
    }
    let se;
    if (l === "Capsules")
      se = qw[d];
    else if (r === "Office") se = Yw[d];
    else if (r === "Low-Caf") se = Lw[d];
    else if (r === "Masterpiece")
      se = Bw, d !== "4 Weeks (Recommended)" && d !== "4 Weeks" && console.warn("Masterpiece frequency note: Standard Masterpiece plan ID used, though frequency is not 4 weeks. Ensure this is intended.");
    else if (r === "Regional" && u === "Center America") se = kw[d];
    else if (r === "Regional" && u === "Ethiopia") se = Hw[d];
    else if (r === "Regional" && u === "Brazil") se = Gw[d];
    else {
      const P = Uw[d];
      P && (se = P.planId);
    }
    if (!se) {
      const P = l === "Capsules" ? `Capsules (${o || "N/A"})` : `${r} (${u || "N/A"})`;
      alert(`Error: Subscription plan details for frequency "${d}" are not available for ${P.trim()}.`);
      return;
    }
    const de = new URLSearchParams();
    de.append("items[][id]", I.toString()), de.append("items[][quantity]", ne.toString()), de.append("items[][selling_plan]", se.toString()), de.append("return_to", "/checkout");
    const ce = `https://${Vw}/cart/clear?return_to=${encodeURIComponent(`/cart/add?${de.toString()}`)}`, D = window.open(ce, "_blank");
    D ? D.focus() : alert("Popup blocker may have prevented opening the cart. Please disable it and try again.");
  }, A = r === "Masterpiece" && l !== "Capsules" ? "We roast this subscription only on the first Tuesday every month" : "You can adjust your quantity any time!", O = Xw(l, r, u, o, s, f), T = O && O !== "Select options for price" && O !== "Select Quantity..." && O !== "Select Size..." && O !== "Select Region..." && O !== "Price on selection" && O !== "Coming soon";
  return /* @__PURE__ */ E.jsxs("div", { ref: p, className: "final-selection-display w-[100%] flex flex-col items-center text-white text-center px-4", children: [
    /* @__PURE__ */ E.jsx("h2", { className: "summary-init text-2xl font-semibold text-[#A67C52] mb-4", children: "Subscription Summary" }),
    h.length > 0 ? /* @__PURE__ */ E.jsxs(Tw, { className: "w-full max-w-lg mx-auto mb-6", opts: { align: "start", loop: h.length > 1 }, children: [
      /* @__PURE__ */ E.jsx(_w, { children: h.map((I, ne) => /* @__PURE__ */ E.jsx(Nw, { children: /* @__PURE__ */ E.jsx("div", { className: "p-1", children: /* @__PURE__ */ E.jsx(
        "img",
        {
          src: I,
          alt: `${l}${r ? " - " + r : ""}${o ? " - Taste: " + o : ""}${u ? " - " + u : ""} image ${ne + 1}`,
          className: "w-full h-auto aspect-square object-cover rounded-md block",
          loading: "lazy"
        }
      ) }) }, `${l}-${r || o}-${u || ""}-${ne}-${f || s}`)) }),
      h.length > 1 && /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
        /* @__PURE__ */ E.jsx(Dw, { className: "absolute left-[-25px] sm:left-[-40px] top-1/2 -translate-y-1/2 text-[#A67C52] bg-[#1a1a1a]/80 hover:bg-[#3a3c3d] border-none" }),
        /* @__PURE__ */ E.jsx(jw, { className: "absolute right-[-25px] sm:right-[-40px] top-1/2 -translate-y-1/2 text-[#A67C52] bg-[#1a1a1a]/80 hover:bg-[#3a3c3d] border-none" })
      ] })
    ] }) : /* @__PURE__ */ E.jsx("div", { className: "w-full max-w-xs h-[250px] bg-[#3a3c3d]/50 flex items-center justify-center rounded-md mb-6 border border-[#A67C52]/30", children: /* @__PURE__ */ E.jsx("p", { className: "text-gray-400", children: "Image Coming Soon" }) }),
    g && g.description && /* @__PURE__ */ E.jsxs("div", { className: "subscription-description text-white my-4 text-left w-full max-w-5xl flex justify-center flex-col", children: [
      /* @__PURE__ */ E.jsxs("div", { className: "bg-[#3a3c3d] p-4 rounded-md border border-[#A67C52] text-base sm:text-lg w-full", children: [
        /* @__PURE__ */ E.jsx("p", { className: "mb-3", children: g.description }),
        y
      ] }),
      /* @__PURE__ */ E.jsxs("div", { children: [
        " ",
        /* @__PURE__ */ E.jsx("h1", { className: "words-animation", children: A }),
        " "
      ] })
    ] }),
    /* @__PURE__ */ E.jsx("p", { className: "summary-sentence text-base sm:text-lg leading-relaxed my-4 w-full max-w-5xl min-h-[3em]", children: w.map((I, ne) => /* @__PURE__ */ E.jsx(De.Fragment, { children: I }, ne)) }),
    /* @__PURE__ */ E.jsx("div", { className: "cart-actions-container mt-auto pt-4 w-full max-w-5xl flex flex-col items-center sm:flex-row sm:justify-end sm:items-center", children: /* @__PURE__ */ E.jsxs("div", { className: "price-and-button-group flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-x-4", children: [
      /* @__PURE__ */ E.jsx("div", { className: "price-display text-white text-2xl font-bold min-h-[1em]", children: T ? /* @__PURE__ */ E.jsx("span", { children: O }) : O && /* @__PURE__ */ E.jsx("span", { className: "text-sm text-gray-400", children: O }) }),
      /* @__PURE__ */ E.jsx(
        "button",
        {
          className: "bg-[#A67C52] py-3 px-18 rounded-md border-[1.5px] border-transparent hover:border-[#3a3c3d] transition-all duration-300 ease-in-out transform text-white font-semibold text-base sm:text-md disabled:opacity-50 disabled:cursor-not-allowed enabled:hover:brightness-110 enabled:active:scale-95 w-full mt-2 sm:mt-0 sm:w-auto",
          disabled: !m,
          onClick: R,
          children: "Add to cart"
        }
      )
    ] }) })
  ] });
});
s0.displayName = "SummaryDisplay";
const Qw = ({ method: l, type: r, region: u, edition: o, sizeOption: s, quantity: f, frequency: d }) => {
  const m = l && (r || o), p = C.useRef(null), h = C.useRef(null), g = l && d && (l === "Capsules" && o && f === "3" || // Only 3 boxes of capsules are purchasable
  r === "Office" && s || r === "Regional" && u && f || ["Roasters Choice", "Masterpiece", "Low-Caf", "Curated"].includes(r) && f);
  return /* @__PURE__ */ E.jsx("div", { className: `right-container flex justify-center w-full min-h-screen bg-[#1a1a1a] ${m ? "items-start pt-8 pb-8" : "items-center"}`, children: /* @__PURE__ */ E.jsx(zf, { mode: "out-in", children: /* @__PURE__ */ E.jsx(
    jf,
    {
      nodeRef: m ? h : p,
      timeout: 1e3,
      classNames: "fade-content",
      unmountOnExit: !0,
      children: m ? /* @__PURE__ */ E.jsx(s0, { ref: h, method: l, type: r, region: u, edition: o, sizeOption: s, quantity: f, frequency: d, canAddToCartProp: g }) : /* @__PURE__ */ E.jsx(c0, { ref: p })
    },
    m ? "summary" : "intro"
  ) }) });
};
function Zw() {
  const [l, r] = C.useState(""), [u, o] = C.useState(""), [s, f] = C.useState(""), [d, m] = C.useState(""), [p, h] = C.useState(""), [g, y] = C.useState(""), [S, w] = C.useState(""), R = (Z) => {
    r(Z), o(""), f(""), m(""), h(""), y(""), w("");
  }, A = (Z) => {
    o(Z), f(""), m(""), h(""), y(""), w("");
  }, O = (Z) => {
    f(Z), m(""), y(""), w("");
  }, T = (Z) => {
    m(Z), o(""), f(""), h(""), y(""), w("");
  }, j = (Z) => {
    h(Z), y(u === "Office" ? Z : ""), m(""), w("");
  }, z = (Z) => {
    y(Z), w("");
  }, q = (Z) => {
    w(Z);
  }, Y = () => {
    r(""), o(""), f(""), m(""), h(""), y(""), w("");
  };
  return /* @__PURE__ */ E.jsxs("div", { className: "app-container", children: [
    /* @__PURE__ */ E.jsx("div", { className: "function-container", children: /* @__PURE__ */ E.jsx(
      Y2,
      {
        selectedMethod: l,
        selectedCoffeeType: u,
        selectedRegion: s,
        selectedEdition: d,
        selectedSizeOption: p,
        finalSelectionDetail: g,
        selectedFrequency: S,
        onMethodChange: R,
        onCoffeeTypeChange: A,
        onRegionChange: O,
        onEditionChange: T,
        onSizeOptionChange: j,
        onQuantityChange: z,
        onFrequencyChange: q,
        onResetSelections: Y
      }
    ) }),
    /* @__PURE__ */ E.jsx("div", { className: "result-container", children: /* @__PURE__ */ E.jsx(
      Qw,
      {
        method: l,
        type: u,
        region: s,
        edition: d,
        sizeOption: p,
        quantity: g,
        frequency: S
      }
    ) })
  ] });
}
const Zs = "thebarn-subscription-react-app-root";
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded. Attempting to mount React app...");
  const l = document.getElementById(Zs);
  if (console.log(`Found element with ID #${Zs}:`, l), l)
    try {
      Nb.createRoot(l).render(
        /* @__PURE__ */ E.jsx(C.StrictMode, { children: /* @__PURE__ */ E.jsx(Zw, {}) })
      ), console.log("React app mount initiated successfully.");
    } catch (r) {
      console.error("Error occurred during createRoot or render:", r);
    }
  else
    console.error(`CRITICAL ERROR: Could not find root element with ID #${Zs} in the HTML after DOMContentLoaded.`);
});
