function Eb(a, r) {
  for (var u = 0; u < r.length; u++) {
    const o = r[u];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const s in o)
        if (s !== "default" && !(s in a)) {
          const f = Object.getOwnPropertyDescriptor(o, s);
          f && Object.defineProperty(a, s, f.get ? f : {
            enumerable: !0,
            get: () => o[s]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
function vv(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
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
  var a = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function u(o, s, f) {
    var d = null;
    if (f !== void 0 && (d = "" + f), s.key !== void 0 && (d = "" + s.key), "key" in s) {
      f = {};
      for (var m in s)
        m !== "key" && (f[m] = s[m]);
    } else f = s;
    return s = f.ref, {
      $$typeof: a,
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
var S = Ab(), As = { exports: {} }, be = {};
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
  var a = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), d = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), y = Symbol.iterator;
  function x(C) {
    return C === null || typeof C != "object" ? null : (C = y && C[y] || C["@@iterator"], typeof C == "function" ? C : null);
  }
  var E = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, R = Object.assign, w = {};
  function O(C, X, I) {
    this.props = C, this.context = X, this.refs = w, this.updater = I || E;
  }
  O.prototype.isReactComponent = {}, O.prototype.setState = function(C, X) {
    if (typeof C != "object" && typeof C != "function" && C != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, C, X, "setState");
  }, O.prototype.forceUpdate = function(C) {
    this.updater.enqueueForceUpdate(this, C, "forceUpdate");
  };
  function T() {
  }
  T.prototype = O.prototype;
  function z(C, X, I) {
    this.props = C, this.context = X, this.refs = w, this.updater = I || E;
  }
  var j = z.prototype = new T();
  j.constructor = z, R(j, O.prototype), j.isPureReactComponent = !0;
  var q = Array.isArray, G = { H: null, A: null, T: null, S: null, V: null }, P = Object.prototype.hasOwnProperty;
  function Z(C, X, I, W, ne, ge) {
    return I = ge.ref, {
      $$typeof: a,
      type: C,
      key: X,
      ref: I !== void 0 ? I : null,
      props: ge
    };
  }
  function Y(C, X) {
    return Z(
      C.type,
      X,
      void 0,
      void 0,
      void 0,
      C.props
    );
  }
  function te(C) {
    return typeof C == "object" && C !== null && C.$$typeof === a;
  }
  function ee(C) {
    var X = { "=": "=0", ":": "=2" };
    return "$" + C.replace(/[=:]/g, function(I) {
      return X[I];
    });
  }
  var le = /\/+/g;
  function re(C, X) {
    return typeof C == "object" && C !== null && C.key != null ? ee("" + C.key) : X.toString(36);
  }
  function se() {
  }
  function me(C) {
    switch (C.status) {
      case "fulfilled":
        return C.value;
      case "rejected":
        throw C.reason;
      default:
        switch (typeof C.status == "string" ? C.then(se, se) : (C.status = "pending", C.then(
          function(X) {
            C.status === "pending" && (C.status = "fulfilled", C.value = X);
          },
          function(X) {
            C.status === "pending" && (C.status = "rejected", C.reason = X);
          }
        )), C.status) {
          case "fulfilled":
            return C.value;
          case "rejected":
            throw C.reason;
        }
    }
    throw C;
  }
  function Q(C, X, I, W, ne) {
    var ge = typeof C;
    (ge === "undefined" || ge === "boolean") && (C = null);
    var ce = !1;
    if (C === null) ce = !0;
    else
      switch (ge) {
        case "bigint":
        case "string":
        case "number":
          ce = !0;
          break;
        case "object":
          switch (C.$$typeof) {
            case a:
            case r:
              ce = !0;
              break;
            case g:
              return ce = C._init, Q(
                ce(C._payload),
                X,
                I,
                W,
                ne
              );
          }
      }
    if (ce)
      return ne = ne(C), ce = W === "" ? "." + re(C, 0) : W, q(ne) ? (I = "", ce != null && (I = ce.replace(le, "$&/") + "/"), Q(ne, X, I, "", function(Ce) {
        return Ce;
      })) : ne != null && (te(ne) && (ne = Y(
        ne,
        I + (ne.key == null || C && C.key === ne.key ? "" : ("" + ne.key).replace(
          le,
          "$&/"
        ) + "/") + ce
      )), X.push(ne)), 1;
    ce = 0;
    var de = W === "" ? "." : W + ":";
    if (q(C))
      for (var ve = 0; ve < C.length; ve++)
        W = C[ve], ge = de + re(W, ve), ce += Q(
          W,
          X,
          I,
          ge,
          ne
        );
    else if (ve = x(C), typeof ve == "function")
      for (C = ve.call(C), ve = 0; !(W = C.next()).done; )
        W = W.value, ge = de + re(W, ve++), ce += Q(
          W,
          X,
          I,
          ge,
          ne
        );
    else if (ge === "object") {
      if (typeof C.then == "function")
        return Q(
          me(C),
          X,
          I,
          W,
          ne
        );
      throw X = String(C), Error(
        "Objects are not valid as a React child (found: " + (X === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : X) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ce;
  }
  function N(C, X, I) {
    if (C == null) return C;
    var W = [], ne = 0;
    return Q(C, W, "", "", function(ge) {
      return X.call(I, ge, ne++);
    }), W;
  }
  function V(C) {
    if (C._status === -1) {
      var X = C._result;
      X = X(), X.then(
        function(I) {
          (C._status === 0 || C._status === -1) && (C._status = 1, C._result = I);
        },
        function(I) {
          (C._status === 0 || C._status === -1) && (C._status = 2, C._result = I);
        }
      ), C._status === -1 && (C._status = 0, C._result = X);
    }
    if (C._status === 1) return C._result.default;
    throw C._result;
  }
  var k = typeof reportError == "function" ? reportError : function(C) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var X = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof C == "object" && C !== null && typeof C.message == "string" ? String(C.message) : String(C),
        error: C
      });
      if (!window.dispatchEvent(X)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", C);
      return;
    }
    console.error(C);
  };
  function $() {
  }
  return be.Children = {
    map: N,
    forEach: function(C, X, I) {
      N(
        C,
        function() {
          X.apply(this, arguments);
        },
        I
      );
    },
    count: function(C) {
      var X = 0;
      return N(C, function() {
        X++;
      }), X;
    },
    toArray: function(C) {
      return N(C, function(X) {
        return X;
      }) || [];
    },
    only: function(C) {
      if (!te(C))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return C;
    }
  }, be.Component = O, be.Fragment = u, be.Profiler = s, be.PureComponent = z, be.StrictMode = o, be.Suspense = p, be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = G, be.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(C) {
      return G.H.useMemoCache(C);
    }
  }, be.cache = function(C) {
    return function() {
      return C.apply(null, arguments);
    };
  }, be.cloneElement = function(C, X, I) {
    if (C == null)
      throw Error(
        "The argument must be a React element, but you passed " + C + "."
      );
    var W = R({}, C.props), ne = C.key, ge = void 0;
    if (X != null)
      for (ce in X.ref !== void 0 && (ge = void 0), X.key !== void 0 && (ne = "" + X.key), X)
        !P.call(X, ce) || ce === "key" || ce === "__self" || ce === "__source" || ce === "ref" && X.ref === void 0 || (W[ce] = X[ce]);
    var ce = arguments.length - 2;
    if (ce === 1) W.children = I;
    else if (1 < ce) {
      for (var de = Array(ce), ve = 0; ve < ce; ve++)
        de[ve] = arguments[ve + 2];
      W.children = de;
    }
    return Z(C.type, ne, void 0, void 0, ge, W);
  }, be.createContext = function(C) {
    return C = {
      $$typeof: d,
      _currentValue: C,
      _currentValue2: C,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, C.Provider = C, C.Consumer = {
      $$typeof: f,
      _context: C
    }, C;
  }, be.createElement = function(C, X, I) {
    var W, ne = {}, ge = null;
    if (X != null)
      for (W in X.key !== void 0 && (ge = "" + X.key), X)
        P.call(X, W) && W !== "key" && W !== "__self" && W !== "__source" && (ne[W] = X[W]);
    var ce = arguments.length - 2;
    if (ce === 1) ne.children = I;
    else if (1 < ce) {
      for (var de = Array(ce), ve = 0; ve < ce; ve++)
        de[ve] = arguments[ve + 2];
      ne.children = de;
    }
    if (C && C.defaultProps)
      for (W in ce = C.defaultProps, ce)
        ne[W] === void 0 && (ne[W] = ce[W]);
    return Z(C, ge, void 0, void 0, null, ne);
  }, be.createRef = function() {
    return { current: null };
  }, be.forwardRef = function(C) {
    return { $$typeof: m, render: C };
  }, be.isValidElement = te, be.lazy = function(C) {
    return {
      $$typeof: g,
      _payload: { _status: -1, _result: C },
      _init: V
    };
  }, be.memo = function(C, X) {
    return {
      $$typeof: h,
      type: C,
      compare: X === void 0 ? null : X
    };
  }, be.startTransition = function(C) {
    var X = G.T, I = {};
    G.T = I;
    try {
      var W = C(), ne = G.S;
      ne !== null && ne(I, W), typeof W == "object" && W !== null && typeof W.then == "function" && W.then($, k);
    } catch (ge) {
      k(ge);
    } finally {
      G.T = X;
    }
  }, be.unstable_useCacheRefresh = function() {
    return G.H.useCacheRefresh();
  }, be.use = function(C) {
    return G.H.use(C);
  }, be.useActionState = function(C, X, I) {
    return G.H.useActionState(C, X, I);
  }, be.useCallback = function(C, X) {
    return G.H.useCallback(C, X);
  }, be.useContext = function(C) {
    return G.H.useContext(C);
  }, be.useDebugValue = function() {
  }, be.useDeferredValue = function(C, X) {
    return G.H.useDeferredValue(C, X);
  }, be.useEffect = function(C, X, I) {
    var W = G.H;
    if (typeof I == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return W.useEffect(C, X);
  }, be.useId = function() {
    return G.H.useId();
  }, be.useImperativeHandle = function(C, X, I) {
    return G.H.useImperativeHandle(C, X, I);
  }, be.useInsertionEffect = function(C, X) {
    return G.H.useInsertionEffect(C, X);
  }, be.useLayoutEffect = function(C, X) {
    return G.H.useLayoutEffect(C, X);
  }, be.useMemo = function(C, X) {
    return G.H.useMemo(C, X);
  }, be.useOptimistic = function(C, X) {
    return G.H.useOptimistic(C, X);
  }, be.useReducer = function(C, X, I) {
    return G.H.useReducer(C, X, I);
  }, be.useRef = function(C) {
    return G.H.useRef(C);
  }, be.useState = function(C) {
    return G.H.useState(C);
  }, be.useSyncExternalStore = function(C, X, I) {
    return G.H.useSyncExternalStore(
      C,
      X,
      I
    );
  }, be.useTransition = function() {
    return G.H.useTransition();
  }, be.version = "19.1.0", be;
}
var Op;
function df() {
  return Op || (Op = 1, As.exports = Cb()), As.exports;
}
var A = df();
const De = /* @__PURE__ */ vv(A), gv = /* @__PURE__ */ Eb({
  __proto__: null,
  default: De
}, [A]);
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
  return Tp || (Tp = 1, function(a) {
    function r(N, V) {
      var k = N.length;
      N.push(V);
      e: for (; 0 < k; ) {
        var $ = k - 1 >>> 1, C = N[$];
        if (0 < s(C, V))
          N[$] = V, N[k] = C, k = $;
        else break e;
      }
    }
    function u(N) {
      return N.length === 0 ? null : N[0];
    }
    function o(N) {
      if (N.length === 0) return null;
      var V = N[0], k = N.pop();
      if (k !== V) {
        N[0] = k;
        e: for (var $ = 0, C = N.length, X = C >>> 1; $ < X; ) {
          var I = 2 * ($ + 1) - 1, W = N[I], ne = I + 1, ge = N[ne];
          if (0 > s(W, k))
            ne < C && 0 > s(ge, W) ? (N[$] = ge, N[ne] = k, $ = ne) : (N[$] = W, N[I] = k, $ = I);
          else if (ne < C && 0 > s(ge, k))
            N[$] = ge, N[ne] = k, $ = ne;
          else break e;
        }
      }
      return V;
    }
    function s(N, V) {
      var k = N.sortIndex - V.sortIndex;
      return k !== 0 ? k : N.id - V.id;
    }
    if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      a.unstable_now = function() {
        return f.now();
      };
    } else {
      var d = Date, m = d.now();
      a.unstable_now = function() {
        return d.now() - m;
      };
    }
    var p = [], h = [], g = 1, y = null, x = 3, E = !1, R = !1, w = !1, O = !1, T = typeof setTimeout == "function" ? setTimeout : null, z = typeof clearTimeout == "function" ? clearTimeout : null, j = typeof setImmediate < "u" ? setImmediate : null;
    function q(N) {
      for (var V = u(h); V !== null; ) {
        if (V.callback === null) o(h);
        else if (V.startTime <= N)
          o(h), V.sortIndex = V.expirationTime, r(p, V);
        else break;
        V = u(h);
      }
    }
    function G(N) {
      if (w = !1, q(N), !R)
        if (u(p) !== null)
          R = !0, P || (P = !0, re());
        else {
          var V = u(h);
          V !== null && Q(G, V.startTime - N);
        }
    }
    var P = !1, Z = -1, Y = 5, te = -1;
    function ee() {
      return O ? !0 : !(a.unstable_now() - te < Y);
    }
    function le() {
      if (O = !1, P) {
        var N = a.unstable_now();
        te = N;
        var V = !0;
        try {
          e: {
            R = !1, w && (w = !1, z(Z), Z = -1), E = !0;
            var k = x;
            try {
              t: {
                for (q(N), y = u(p); y !== null && !(y.expirationTime > N && ee()); ) {
                  var $ = y.callback;
                  if (typeof $ == "function") {
                    y.callback = null, x = y.priorityLevel;
                    var C = $(
                      y.expirationTime <= N
                    );
                    if (N = a.unstable_now(), typeof C == "function") {
                      y.callback = C, q(N), V = !0;
                      break t;
                    }
                    y === u(p) && o(p), q(N);
                  } else o(p);
                  y = u(p);
                }
                if (y !== null) V = !0;
                else {
                  var X = u(h);
                  X !== null && Q(
                    G,
                    X.startTime - N
                  ), V = !1;
                }
              }
              break e;
            } finally {
              y = null, x = k, E = !1;
            }
            V = void 0;
          }
        } finally {
          V ? re() : P = !1;
        }
      }
    }
    var re;
    if (typeof j == "function")
      re = function() {
        j(le);
      };
    else if (typeof MessageChannel < "u") {
      var se = new MessageChannel(), me = se.port2;
      se.port1.onmessage = le, re = function() {
        me.postMessage(null);
      };
    } else
      re = function() {
        T(le, 0);
      };
    function Q(N, V) {
      Z = T(function() {
        N(a.unstable_now());
      }, V);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(N) {
      N.callback = null;
    }, a.unstable_forceFrameRate = function(N) {
      0 > N || 125 < N ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Y = 0 < N ? Math.floor(1e3 / N) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, a.unstable_next = function(N) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = x;
      }
      var k = x;
      x = V;
      try {
        return N();
      } finally {
        x = k;
      }
    }, a.unstable_requestPaint = function() {
      O = !0;
    }, a.unstable_runWithPriority = function(N, V) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var k = x;
      x = N;
      try {
        return V();
      } finally {
        x = k;
      }
    }, a.unstable_scheduleCallback = function(N, V, k) {
      var $ = a.unstable_now();
      switch (typeof k == "object" && k !== null ? (k = k.delay, k = typeof k == "number" && 0 < k ? $ + k : $) : k = $, N) {
        case 1:
          var C = -1;
          break;
        case 2:
          C = 250;
          break;
        case 5:
          C = 1073741823;
          break;
        case 4:
          C = 1e4;
          break;
        default:
          C = 5e3;
      }
      return C = k + C, N = {
        id: g++,
        callback: V,
        priorityLevel: N,
        startTime: k,
        expirationTime: C,
        sortIndex: -1
      }, k > $ ? (N.sortIndex = k, r(h, N), u(p) === null && N === u(h) && (w ? (z(Z), Z = -1) : w = !0, Q(G, k - $))) : (N.sortIndex = C, r(p, N), R || E || (R = !0, P || (P = !0, re()))), N;
    }, a.unstable_shouldYield = ee, a.unstable_wrapCallback = function(N) {
      var V = x;
      return function() {
        var k = x;
        x = V;
        try {
          return N.apply(this, arguments);
        } finally {
          x = k;
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
  var a = df();
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
  var d = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
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
      var g = h.as, y = m(g, h.crossOrigin), x = typeof h.integrity == "string" ? h.integrity : void 0, E = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
      g === "style" ? o.d.S(
        p,
        typeof h.precedence == "string" ? h.precedence : void 0,
        {
          crossOrigin: y,
          integrity: x,
          fetchPriority: E
        }
      ) : g === "script" && o.d.X(p, {
        crossOrigin: y,
        integrity: x,
        fetchPriority: E,
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
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (r) {
        console.error(r);
      }
  }
  return a(), Os.exports = Ob(), Os.exports;
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
  var a = Mb(), r = df(), u = yv();
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
    for (var n = e, l = t; ; ) {
      var i = n.return;
      if (i === null) break;
      var c = i.alternate;
      if (c === null) {
        if (l = i.return, l !== null) {
          n = l;
          continue;
        }
        break;
      }
      if (i.child === c.child) {
        for (c = i.child; c; ) {
          if (c === n) return m(i), e;
          if (c === l) return m(i), t;
          c = c.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== l.return) n = i, l = c;
      else {
        for (var v = !1, b = i.child; b; ) {
          if (b === n) {
            v = !0, n = i, l = c;
            break;
          }
          if (b === l) {
            v = !0, l = i, n = c;
            break;
          }
          b = b.sibling;
        }
        if (!v) {
          for (b = c.child; b; ) {
            if (b === n) {
              v = !0, n = c, l = i;
              break;
            }
            if (b === l) {
              v = !0, l = c, n = i;
              break;
            }
            b = b.sibling;
          }
          if (!v) throw Error(o(189));
        }
      }
      if (n.alternate !== l) throw Error(o(190));
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
  var g = Object.assign, y = Symbol.for("react.element"), x = Symbol.for("react.transitional.element"), E = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), z = Symbol.for("react.consumer"), j = Symbol.for("react.context"), q = Symbol.for("react.forward_ref"), G = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), te = Symbol.for("react.activity"), ee = Symbol.for("react.memo_cache_sentinel"), le = Symbol.iterator;
  function re(e) {
    return e === null || typeof e != "object" ? null : (e = le && e[le] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var se = Symbol.for("react.client.reference");
  function me(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === se ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case R:
        return "Fragment";
      case O:
        return "Profiler";
      case w:
        return "StrictMode";
      case G:
        return "Suspense";
      case P:
        return "SuspenseList";
      case te:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case E:
          return "Portal";
        case j:
          return (e.displayName || "Context") + ".Provider";
        case z:
          return (e._context.displayName || "Context") + ".Consumer";
        case q:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Z:
          return t = e.displayName || null, t !== null ? t : me(e.type) || "Memo";
        case Y:
          t = e._payload, e = e._init;
          try {
            return me(e(t));
          } catch {
          }
      }
    return null;
  }
  var Q = Array.isArray, N = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, $ = [], C = -1;
  function X(e) {
    return { current: e };
  }
  function I(e) {
    0 > C || (e.current = $[C], $[C] = null, C--);
  }
  function W(e, t) {
    C++, $[C] = e.current, e.current = t;
  }
  var ne = X(null), ge = X(null), ce = X(null), de = X(null);
  function ve(e, t) {
    switch (W(ce, t), W(ge, e), W(ne, null), t.nodeType) {
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
    I(ne), W(ne, e);
  }
  function Ce() {
    I(ne), I(ge), I(ce);
  }
  function Be(e) {
    e.memoizedState !== null && W(de, e);
    var t = ne.current, n = ep(t, e.type);
    t !== n && (W(ge, e), W(ne, n));
  }
  function Me(e) {
    ge.current === e && (I(ne), I(ge)), de.current === e && (I(de), Xr._currentValue = k);
  }
  var ae = Object.prototype.hasOwnProperty, Re = a.unstable_scheduleCallback, He = a.unstable_cancelCallback, We = a.unstable_shouldYield, yt = a.unstable_requestPaint, Qe = a.unstable_now, Qt = a.unstable_getCurrentPriorityLevel, st = a.unstable_ImmediatePriority, Wt = a.unstable_UserBlockingPriority, It = a.unstable_NormalPriority, Fa = a.unstable_LowPriority, Ql = a.unstable_IdlePriority, xi = a.log, Si = a.unstable_setDisableYieldValue, pl = null, ft = null;
  function en(e) {
    if (typeof xi == "function" && Si(e), ft && typeof ft.setStrictMode == "function")
      try {
        ft.setStrictMode(pl, e);
      } catch {
      }
  }
  var it = Math.clz32 ? Math.clz32 : $a, Bn = Math.log, Ja = Math.LN2;
  function $a(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Bn(e) / Ja | 0) | 0;
  }
  var mn = 256, Zl = 4194304;
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
  function Kl(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var i = 0, c = e.suspendedLanes, v = e.pingedLanes;
    e = e.warmLanes;
    var b = l & 134217727;
    return b !== 0 ? (l = b & ~c, l !== 0 ? i = hn(l) : (v &= b, v !== 0 ? i = hn(v) : n || (n = b & ~e, n !== 0 && (i = hn(n))))) : (b = l & ~c, b !== 0 ? i = hn(b) : v !== 0 ? i = hn(v) : n || (n = l & ~e, n !== 0 && (i = hn(n)))), i === 0 ? 0 : t !== 0 && t !== i && (t & c) === 0 && (c = i & -i, n = t & -t, c >= n || c === 32 && (n & 4194048) !== 0) ? t : i;
  }
  function vl(e, t) {
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
    var e = Zl;
    return Zl <<= 1, (Zl & 62914560) === 0 && (Zl = 4194304), e;
  }
  function Pl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Hn(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function wi(e, t, n, l, i, c) {
    var v = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var b = e.entanglements, M = e.expirationTimes, L = e.hiddenUpdates;
    for (n = v & ~n; 0 < n; ) {
      var K = 31 - it(n), J = 1 << K;
      b[K] = 0, M[K] = -1;
      var B = L[K];
      if (B !== null)
        for (L[K] = null, K = 0; K < B.length; K++) {
          var H = B[K];
          H !== null && (H.lane &= -536870913);
        }
      n &= ~J;
    }
    l !== 0 && Ai(e, l, 0), c !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(v & ~t));
  }
  function Ai(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - it(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | n & 4194090;
  }
  function Ia(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var l = 31 - it(n), i = 1 << l;
      i & t | e[l] & t && (e[l] |= t), n &= ~i;
    }
  }
  function Fl(e) {
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
    var e = V.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : bp(e.type));
  }
  function f0(e, t) {
    var n = V.p;
    try {
      return V.p = e, t();
    } finally {
      V.p = n;
    }
  }
  var Gn = Math.random().toString(36).slice(2), dt = "__reactFiber$" + Gn, bt = "__reactProps$" + Gn, Jl = "__reactContainer$" + Gn, pu = "__reactEvents$" + Gn, d0 = "__reactListeners$" + Gn, m0 = "__reactHandles$" + Gn, Yf = "__reactResources$" + Gn, tr = "__reactMarker$" + Gn;
  function vu(e) {
    delete e[dt], delete e[bt], delete e[pu], delete e[d0], delete e[m0];
  }
  function $l(e) {
    var t = e[dt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Jl] || n[dt]) {
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
  function Wl(e) {
    if (e = e[dt] || e[Jl]) {
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
  function Il(e) {
    var t = e[Yf];
    return t || (t = e[Yf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function nt(e) {
    e[tr] = !0;
  }
  var qf = /* @__PURE__ */ new Set(), Vf = {};
  function gl(e, t) {
    ea(e, t), ea(e + "Capture", t);
  }
  function ea(e, t) {
    for (Vf[e] = t, e = 0; e < t.length; e++)
      qf.add(t[e]);
  }
  var h0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Xf = {}, Qf = {};
  function p0(e) {
    return ae.call(Qf, e) ? !0 : ae.call(Xf, e) ? !1 : h0.test(e) ? Qf[e] = !0 : (Xf[e] = !0, !1);
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
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
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
  function pn(e, t, n, l) {
    if (l === null) e.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + l);
    }
  }
  var gu, Zf;
  function ta(e) {
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
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var J = function() {
                throw Error();
              };
              if (Object.defineProperty(J.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(J, []);
                } catch (H) {
                  var B = H;
                }
                Reflect.construct(e, [], J);
              } else {
                try {
                  J.call();
                } catch (H) {
                  B = H;
                }
                e.call(J.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (H) {
                B = H;
              }
              (J = e()) && typeof J.catch == "function" && J.catch(function() {
              });
            }
          } catch (H) {
            if (H && B && typeof H.stack == "string")
              return [H.stack, B.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var i = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      i && i.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var c = l.DetermineComponentFrameRoot(), v = c[0], b = c[1];
      if (v && b) {
        var M = v.split(`
`), L = b.split(`
`);
        for (i = l = 0; l < M.length && !M[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; i < L.length && !L[i].includes(
          "DetermineComponentFrameRoot"
        ); )
          i++;
        if (l === M.length || i === L.length)
          for (l = M.length - 1, i = L.length - 1; 1 <= l && 0 <= i && M[l] !== L[i]; )
            i--;
        for (; 1 <= l && 0 <= i; l--, i--)
          if (M[l] !== L[i]) {
            if (l !== 1 || i !== 1)
              do
                if (l--, i--, 0 > i || M[l] !== L[i]) {
                  var K = `
` + M[l].replace(" at new ", " at ");
                  return e.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", e.displayName)), K;
                }
              while (1 <= l && 0 <= i);
            break;
          }
      }
    } finally {
      yu = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? ta(n) : "";
  }
  function v0(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ta(e.type);
      case 16:
        return ta("Lazy");
      case 13:
        return ta("Suspense");
      case 19:
        return ta("SuspenseList");
      case 0:
      case 15:
        return bu(e.type, !1);
      case 11:
        return bu(e.type.render, !1);
      case 1:
        return bu(e.type, !0);
      case 31:
        return ta("Activity");
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
    ), l = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var i = n.get, c = n.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return i.call(this);
        },
        set: function(v) {
          l = "" + v, c.call(this, v);
        }
      }), Object.defineProperty(e, t, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(v) {
          l = "" + v;
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
    var n = t.getValue(), l = "";
    return e && (l = Pf(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== n ? (t.setValue(e), !0) : !1;
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
  function xu(e, t, n, l, i, c, v, b) {
    e.name = "", v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? e.type = v : e.removeAttribute("type"), t != null ? v === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + zt(t)) : e.value !== "" + zt(t) && (e.value = "" + zt(t)) : v !== "submit" && v !== "reset" || e.removeAttribute("value"), t != null ? Su(e, v, zt(t)) : n != null ? Su(e, v, zt(n)) : l != null && e.removeAttribute("value"), i == null && c != null && (e.defaultChecked = !!c), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? e.name = "" + zt(b) : e.removeAttribute("name");
  }
  function Jf(e, t, n, l, i, c, v, b) {
    if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.type = c), t != null || n != null) {
      if (!(c !== "submit" && c !== "reset" || t != null))
        return;
      n = n != null ? "" + zt(n) : "", t = t != null ? "" + zt(t) : n, b || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? i, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = b ? e.checked : !!l, e.defaultChecked = !!l, v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" && (e.name = v);
  }
  function Su(e, t, n) {
    t === "number" && Oi(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function na(e, t, n, l) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < n.length; i++)
        t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && l && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + zt(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          e[i].selected = !0, l && (e[i].defaultSelected = !0);
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
  function Wf(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(o(92));
        if (Q(l)) {
          if (1 < l.length) throw Error(o(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), t = n;
    }
    n = zt(t), e.defaultValue = n, l = e.textContent, l === n && l !== "" && l !== null && (e.value = l);
  }
  function la(e, t) {
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
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, n) : typeof n != "number" || n === 0 || b0.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function ed(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (e = e.style, n != null) {
      for (var l in n)
        !n.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var i in t)
        l = t[i], t.hasOwnProperty(i) && n[i] !== l && If(e, i, l);
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
  var aa = null, ra = null;
  function td(e) {
    var t = Wl(e);
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
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var i = l[bt] || null;
                if (!i) throw Error(o(90));
                xu(
                  l,
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
              l = n[t], l.form === e.form && Ff(l);
          }
          break e;
        case "textarea":
          $f(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && na(e, !!n.multiple, t, !1);
      }
    }
  }
  var Cu = !1;
  function nd(e, t, n) {
    if (Cu) return e(t, n);
    Cu = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Cu = !1, (aa !== null || ra !== null) && (po(), aa && (t = aa, e = ra, ra = aa = null, td(t), e)))
        for (t = 0; t < e.length; t++) td(e[t]);
    }
  }
  function lr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[bt] || null;
    if (l === null) return null;
    n = l[t];
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
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
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
    var e, t = Mu, n = t.length, l, i = "value" in Yn ? Yn.value : Yn.textContent, c = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++) ;
    var v = n - e;
    for (l = 1; l <= v && t[n - l] === i[c - l]; l++) ;
    return _i = i.slice(e, 1 < l ? 1 - l : void 0);
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
    function t(n, l, i, c, v) {
      this._reactName = n, this._targetInst = i, this.type = l, this.nativeEvent = c, this.target = v, this.currentTarget = null;
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
  var yl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ji = xt(yl), rr = g({}, yl, { view: 0, detail: 0 }), E0 = xt(rr), Ou, Tu, ir, zi = g({}, rr, {
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
  }), rd = xt(zi), w0 = g({}, zi, { dataTransfer: 0 }), A0 = xt(w0), C0 = g({}, rr, { relatedTarget: 0 }), _u = xt(C0), R0 = g({}, yl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), M0 = xt(R0), O0 = g({}, yl, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), T0 = xt(O0), _0 = g({}, yl, { data: 0 }), id = xt(_0), N0 = {
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
  }), L0 = xt(U0), k0 = g({}, zi, {
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
  }), od = xt(k0), B0 = g({}, rr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Nu
  }), H0 = xt(B0), G0 = g({}, yl, {
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
  }), V0 = xt(q0), X0 = g({}, yl, {
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
  var ia = !1;
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
    if (ia)
      return e === "compositionend" || !Du && fd(e, t) ? (e = ld(), _i = Mu = Yn = null, ia = !1, e) : null;
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
  function hd(e, t, n, l) {
    aa ? ra ? ra.push(l) : ra = [l] : aa = l, t = So(t, "onChange"), 0 < t.length && (n = new ji(
      "onChange",
      "change",
      null,
      n,
      l
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
    var n = Object.keys(e), l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var i = n[l];
      if (!ae.call(t, i) || !Ct(e[i], t[i]))
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
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (l = e + n.textContent.length, e <= t && l >= t)
          return { node: n, offset: t - e };
        e = l;
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
  var ly = vn && "documentMode" in document && 11 >= document.documentMode, oa = null, Lu = null, fr = null, ku = !1;
  function Ad(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ku || oa == null || oa !== Oi(l) || (l = oa, "selectionStart" in l && Uu(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), fr && sr(fr, l) || (fr = l, l = So(Lu, "onSelect"), 0 < l.length && (t = new ji(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: l }), t.target = oa)));
  }
  function bl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var ua = {
    animationend: bl("Animation", "AnimationEnd"),
    animationiteration: bl("Animation", "AnimationIteration"),
    animationstart: bl("Animation", "AnimationStart"),
    transitionrun: bl("Transition", "TransitionRun"),
    transitionstart: bl("Transition", "TransitionStart"),
    transitioncancel: bl("Transition", "TransitionCancel"),
    transitionend: bl("Transition", "TransitionEnd")
  }, Bu = {}, Cd = {};
  vn && (Cd = document.createElement("div").style, "AnimationEvent" in window || (delete ua.animationend.animation, delete ua.animationiteration.animation, delete ua.animationstart.animation), "TransitionEvent" in window || delete ua.transitionend.transition);
  function xl(e) {
    if (Bu[e]) return Bu[e];
    if (!ua[e]) return e;
    var t = ua[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in Cd)
        return Bu[e] = t[n];
    return e;
  }
  var Rd = xl("animationend"), Md = xl("animationiteration"), Od = xl("animationstart"), ay = xl("transitionrun"), ry = xl("transitionstart"), iy = xl("transitioncancel"), Td = xl("transitionend"), _d = /* @__PURE__ */ new Map(), Hu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Hu.push("scrollEnd");
  function Zt(e, t) {
    _d.set(e, t), gl(t, [e]);
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
  var kt = [], ca = 0, Gu = 0;
  function Li() {
    for (var e = ca, t = Gu = ca = 0; t < e; ) {
      var n = kt[t];
      kt[t++] = null;
      var l = kt[t];
      kt[t++] = null;
      var i = kt[t];
      kt[t++] = null;
      var c = kt[t];
      if (kt[t++] = null, l !== null && i !== null) {
        var v = l.pending;
        v === null ? i.next = i : (i.next = v.next, v.next = i), l.pending = i;
      }
      c !== 0 && Dd(n, i, c);
    }
  }
  function ki(e, t, n, l) {
    kt[ca++] = e, kt[ca++] = t, kt[ca++] = n, kt[ca++] = l, Gu |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function Yu(e, t, n, l) {
    return ki(e, t, n, l), Bi(e);
  }
  function sa(e, t) {
    return ki(e, null, null, t), Bi(e);
  }
  function Dd(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var i = !1, c = e.return; c !== null; )
      c.childLanes |= n, l = c.alternate, l !== null && (l.childLanes |= n), c.tag === 22 && (e = c.stateNode, e === null || e._visibility & 1 || (i = !0)), e = c, c = c.return;
    return e.tag === 3 ? (c = e.stateNode, i && t !== null && (i = 31 - it(n), e = c.hiddenUpdates, l = e[i], l === null ? e[i] = [t] : l.push(t), t.lane = n | 536870912), c) : null;
  }
  function Bi(e) {
    if (50 < Lr)
      throw Lr = 0, Kc = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var fa = {};
  function oy(e, t, n, l) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Rt(e, t, n, l) {
    return new oy(e, t, n, l);
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
  function Hi(e, t, n, l, i, c) {
    var v = 0;
    if (l = e, typeof e == "function") qu(e) && (v = 1);
    else if (typeof e == "string")
      v = cb(
        e,
        n,
        ne.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case te:
          return e = Rt(31, n, t, i), e.elementType = te, e.lanes = c, e;
        case R:
          return Sl(n.children, i, c, t);
        case w:
          v = 8, i |= 24;
          break;
        case O:
          return e = Rt(12, n, t, i | 2), e.elementType = O, e.lanes = c, e;
        case G:
          return e = Rt(13, n, t, i), e.elementType = G, e.lanes = c, e;
        case P:
          return e = Rt(19, n, t, i), e.elementType = P, e.lanes = c, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case T:
              case j:
                v = 10;
                break e;
              case z:
                v = 9;
                break e;
              case q:
                v = 11;
                break e;
              case Z:
                v = 14;
                break e;
              case Y:
                v = 16, l = null;
                break e;
            }
          v = 29, n = Error(
            o(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = Rt(v, n, t, i), t.elementType = e, t.type = l, t.lanes = c, t;
  }
  function Sl(e, t, n, l) {
    return e = Rt(7, e, l, t), e.lanes = n, e;
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
  var da = [], ma = 0, Gi = null, Yi = 0, Bt = [], Ht = 0, El = null, yn = 1, bn = "";
  function wl(e, t) {
    da[ma++] = Yi, da[ma++] = Gi, Gi = e, Yi = t;
  }
  function zd(e, t, n) {
    Bt[Ht++] = yn, Bt[Ht++] = bn, Bt[Ht++] = El, El = e;
    var l = yn;
    e = bn;
    var i = 32 - it(l) - 1;
    l &= ~(1 << i), n += 1;
    var c = 32 - it(t) + i;
    if (30 < c) {
      var v = i - i % 5;
      c = (l & (1 << v) - 1).toString(32), l >>= v, i -= v, yn = 1 << 32 - it(t) + i | n << i | l, bn = c + e;
    } else
      yn = 1 << c | n << i | l, bn = e;
  }
  function Qu(e) {
    e.return !== null && (wl(e, 1), zd(e, 1, 0));
  }
  function Zu(e) {
    for (; e === Gi; )
      Gi = da[--ma], da[ma] = null, Yi = da[--ma], da[ma] = null;
    for (; e === El; )
      El = Bt[--Ht], Bt[Ht] = null, bn = Bt[--Ht], Bt[Ht] = null, yn = Bt[--Ht], Bt[Ht] = null;
  }
  var pt = null, Ze = null, Ne = !1, Al = null, tn = !1, Ku = Error(o(519));
  function Cl(e) {
    var t = Error(o(418, ""));
    throw hr(Lt(t, e)), Ku;
  }
  function Ud(e) {
    var t = e.stateNode, n = e.type, l = e.memoizedProps;
    switch (t[dt] = e, t[bt] = l, n) {
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
        for (n = 0; n < Br.length; n++)
          Ae(Br[n], t);
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
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        ), Mi(t);
        break;
      case "select":
        Ae("invalid", t);
        break;
      case "textarea":
        Ae("invalid", t), Wf(t, l.value, l.defaultValue, l.children), Mi(t);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || l.suppressHydrationWarning === !0 || Wh(t.textContent, n) ? (l.popover != null && (Ae("beforetoggle", t), Ae("toggle", t)), l.onScroll != null && Ae("scroll", t), l.onScrollEnd != null && Ae("scrollend", t), l.onClick != null && (t.onclick = Eo), t = !0) : t = !1, t || Cl(e);
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
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || cs(e.type, e.memoizedProps)), n = !n), n && Ze && Cl(e), Ld(e), t === 13) {
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
  function kd() {
    var e = Al;
    return e !== null && (wt === null ? wt = e : wt.push.apply(
      wt,
      e
    ), Al = null), e;
  }
  function hr(e) {
    Al === null ? Al = [e] : Al.push(e);
  }
  var Pu = X(null), Rl = null, xn = null;
  function qn(e, t, n) {
    W(Pu, t._currentValue), t._currentValue = n;
  }
  function Sn(e) {
    e._currentValue = Pu.current, I(Pu);
  }
  function Fu(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Ju(e, t, n, l) {
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
              ), l || (v = null);
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
  function pr(e, t, n, l) {
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
      } else if (i === de.current) {
        if (v = i.alternate, v === null) throw Error(o(387));
        v.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e !== null ? e.push(Xr) : e = [Xr]);
      }
      i = i.return;
    }
    e !== null && Ju(
      t,
      e,
      n,
      l
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
  function Ml(e) {
    Rl = e, xn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function mt(e) {
    return Bd(Rl, e);
  }
  function Vi(e, t) {
    return Rl === null && Ml(e), Bd(e, t);
  }
  function Bd(e, t) {
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
      addEventListener: function(n, l) {
        e.push(l);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(n) {
        return n();
      });
    };
  }, cy = a.unstable_scheduleCallback, sy = a.unstable_NormalPriority, Ie = {
    $$typeof: j,
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
  var gr = null, Wu = 0, ha = 0, pa = null;
  function fy(e, t) {
    if (gr === null) {
      var n = gr = [];
      Wu = 0, ha = es(), pa = {
        status: "pending",
        value: void 0,
        then: function(l) {
          n.push(l);
        }
      };
    }
    return Wu++, t.then(Hd, Hd), t;
  }
  function Hd() {
    if (--Wu === 0 && gr !== null) {
      pa !== null && (pa.status = "fulfilled");
      var e = gr;
      gr = null, ha = 0, pa = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function dy(e, t) {
    var n = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(i) {
        n.push(i);
      }
    };
    return e.then(
      function() {
        l.status = "fulfilled", l.value = t;
        for (var i = 0; i < n.length; i++) (0, n[i])(t);
      },
      function(i) {
        for (l.status = "rejected", l.reason = i, i = 0; i < n.length; i++)
          (0, n[i])(void 0);
      }
    ), l;
  }
  var Gd = N.S;
  N.S = function(e, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && fy(e, t), Gd !== null && Gd(e, t);
  };
  var Ol = X(null);
  function Iu() {
    var e = Ol.current;
    return e !== null ? e : Ye.pooledCache;
  }
  function Xi(e, t) {
    t === null ? W(Ol, Ol.current) : W(Ol, t.pool);
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
            function(l) {
              if (t.status === "pending") {
                var i = t;
                i.status = "fulfilled", i.value = l;
              }
            },
            function(l) {
              if (t.status === "pending") {
                var i = t;
                i.status = "rejected", i.reason = l;
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
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (je & 2) !== 0) {
      var i = l.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), l.pending = t, t = Bi(e), Dd(e, null, n), t;
    }
    return ki(e, l, t, n), Bi(e);
  }
  function xr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, Ia(e, n);
    }
  }
  function lc(e, t) {
    var n = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, n === l)) {
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
        baseState: l.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: c,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var ac = !1;
  function Sr() {
    if (ac) {
      var e = pa;
      if (e !== null) throw e;
    }
  }
  function Er(e, t, n, l) {
    ac = !1;
    var i = e.updateQueue;
    Vn = !1;
    var c = i.firstBaseUpdate, v = i.lastBaseUpdate, b = i.shared.pending;
    if (b !== null) {
      i.shared.pending = null;
      var M = b, L = M.next;
      M.next = null, v === null ? c = L : v.next = L, v = M;
      var K = e.alternate;
      K !== null && (K = K.updateQueue, b = K.lastBaseUpdate, b !== v && (b === null ? K.firstBaseUpdate = L : b.next = L, K.lastBaseUpdate = M));
    }
    if (c !== null) {
      var J = i.baseState;
      v = 0, K = L = M = null, b = c;
      do {
        var B = b.lane & -536870913, H = B !== b.lane;
        if (H ? (Oe & B) === B : (l & B) === B) {
          B !== 0 && B === ha && (ac = !0), K !== null && (K = K.next = {
            lane: 0,
            tag: b.tag,
            payload: b.payload,
            callback: null,
            next: null
          });
          e: {
            var ye = e, he = b;
            B = t;
            var ke = n;
            switch (he.tag) {
              case 1:
                if (ye = he.payload, typeof ye == "function") {
                  J = ye.call(ke, J, B);
                  break e;
                }
                J = ye;
                break e;
              case 3:
                ye.flags = ye.flags & -65537 | 128;
              case 0:
                if (ye = he.payload, B = typeof ye == "function" ? ye.call(ke, J, B) : ye, B == null) break e;
                J = g({}, J, B);
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
          }, K === null ? (L = K = H, M = J) : K = K.next = H, v |= B;
        if (b = b.next, b === null) {
          if (b = i.shared.pending, b === null)
            break;
          H = b, b = H.next, H.next = null, i.lastBaseUpdate = H, i.shared.pending = null;
        }
      } while (!0);
      K === null && (M = J), i.baseState = M, i.firstBaseUpdate = L, i.lastBaseUpdate = K, c === null && (i.shared.lanes = 0), In |= v, e.lanes = v, e.memoizedState = J;
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
  var va = X(null), Ki = X(0);
  function Fd(e, t) {
    e = On, W(Ki, e), W(va, t), On = e | t.baseLanes;
  }
  function rc() {
    W(Ki, On), W(va, va.current);
  }
  function ic() {
    On = Ki.current, I(va), I(Ki);
  }
  var Zn = 0, xe = null, Ue = null, Je = null, Pi = !1, ga = !1, Tl = !1, Fi = 0, wr = 0, ya = null, my = 0;
  function Pe() {
    throw Error(o(321));
  }
  function oc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Ct(e[n], t[n])) return !1;
    return !0;
  }
  function uc(e, t, n, l, i, c) {
    return Zn = c, xe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, N.H = e === null || e.memoizedState === null ? Dm : jm, Tl = !1, c = n(l, i), Tl = !1, ga && (c = $d(
      t,
      n,
      l,
      i
    )), Jd(e), c;
  }
  function Jd(e) {
    N.H = to;
    var t = Ue !== null && Ue.next !== null;
    if (Zn = 0, Je = Ue = xe = null, Pi = !1, wr = 0, ya = null, t) throw Error(o(300));
    e === null || lt || (e = e.dependencies, e !== null && qi(e) && (lt = !0));
  }
  function $d(e, t, n, l) {
    xe = e;
    var i = 0;
    do {
      if (ga && (ya = null), wr = 0, ga = !1, 25 <= i) throw Error(o(301));
      if (i += 1, Je = Ue = null, e.updateQueue != null) {
        var c = e.updateQueue;
        c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
      }
      N.H = xy, c = t(n, l);
    } while (ga);
    return c;
  }
  function hy() {
    var e = N.H, t = e.useState()[0];
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
    Zn = 0, Je = Ue = xe = null, ga = !1, wr = Fi = 0, ya = null;
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
    return wr += 1, ya === null && (ya = []), e = Xd(ya, e, t), t = xe, (Je === null ? t.memoizedState : Je.next) === null && (t = t.alternate, N.H = t === null || t.memoizedState === null ? Dm : jm), e;
  }
  function Ji(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ar(e);
      if (e.$$typeof === j) return mt(e);
    }
    throw Error(o(438, String(e)));
  }
  function mc(e) {
    var t = null, n = xe.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var l = xe.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(i) {
          return i.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = dc(), xe.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++)
        n[l] = ee;
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
    var l = e.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = n;
    var i = e.baseQueue, c = l.pending;
    if (c !== null) {
      if (i !== null) {
        var v = i.next;
        i.next = c.next, c.next = v;
      }
      t.baseQueue = i = c, l.pending = null;
    }
    if (c = e.baseState, i === null) e.memoizedState = c;
    else {
      t = i.next;
      var b = v = null, M = null, L = t, K = !1;
      do {
        var J = L.lane & -536870913;
        if (J !== L.lane ? (Oe & J) === J : (Zn & J) === J) {
          var B = L.revertLane;
          if (B === 0)
            M !== null && (M = M.next = {
              lane: 0,
              revertLane: 0,
              action: L.action,
              hasEagerState: L.hasEagerState,
              eagerState: L.eagerState,
              next: null
            }), J === ha && (K = !0);
          else if ((Zn & B) === B) {
            L = L.next, B === ha && (K = !0);
            continue;
          } else
            J = {
              lane: 0,
              revertLane: L.revertLane,
              action: L.action,
              hasEagerState: L.hasEagerState,
              eagerState: L.eagerState,
              next: null
            }, M === null ? (b = M = J, v = c) : M = M.next = J, xe.lanes |= B, In |= B;
          J = L.action, Tl && n(c, J), c = L.hasEagerState ? L.eagerState : n(c, J);
        } else
          B = {
            lane: J,
            revertLane: L.revertLane,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null
          }, M === null ? (b = M = B, v = c) : M = M.next = B, xe.lanes |= J, In |= J;
        L = L.next;
      } while (L !== null && L !== t);
      if (M === null ? v = c : M.next = b, !Ct(c, e.memoizedState) && (lt = !0, K && (n = pa, n !== null)))
        throw n;
      e.memoizedState = c, e.baseState = v, e.baseQueue = M, l.lastRenderedState = c;
    }
    return i === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function pc(e) {
    var t = $e(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch, i = n.pending, c = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var v = i = i.next;
      do
        c = e(c, v.action), v = v.next;
      while (v !== i);
      Ct(c, t.memoizedState) || (lt = !0), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), n.lastRenderedState = c;
    }
    return [c, l];
  }
  function Wd(e, t, n) {
    var l = xe, i = $e(), c = Ne;
    if (c) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = t();
    var v = !Ct(
      (Ue || i).memoizedState,
      n
    );
    v && (i.memoizedState = n, lt = !0), i = i.queue;
    var b = tm.bind(null, l, i, e);
    if (Cr(2048, 8, b, [e]), i.getSnapshot !== t || v || Je !== null && Je.memoizedState.tag & 1) {
      if (l.flags |= 2048, ba(
        9,
        Wi(),
        em.bind(
          null,
          l,
          i,
          n,
          t
        ),
        null
      ), Ye === null) throw Error(o(349));
      c || (Zn & 124) !== 0 || Id(l, t, n);
    }
    return n;
  }
  function Id(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = xe.updateQueue, t === null ? (t = dc(), xe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function em(e, t, n, l) {
    t.value = n, t.getSnapshot = l, nm(t) && lm(e);
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
    var t = sa(e, 2);
    t !== null && Nt(t, e, 2);
  }
  function vc(e) {
    var t = St();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), Tl) {
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
  function am(e, t, n, l) {
    return e.baseState = n, hc(
      e,
      Ue,
      typeof l == "function" ? l : En
    );
  }
  function py(e, t, n, l, i) {
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
      N.T !== null ? n(!0) : c.isTransition = !1, l(c), n = t.pending, n === null ? (c.next = t.pending = c, rm(t, c)) : (c.next = n.next, t.pending = n.next = c);
    }
  }
  function rm(e, t) {
    var n = t.action, l = t.payload, i = e.state;
    if (t.isTransition) {
      var c = N.T, v = {};
      N.T = v;
      try {
        var b = n(i, l), M = N.S;
        M !== null && M(v, b), im(e, t, b);
      } catch (L) {
        gc(e, t, L);
      } finally {
        N.T = c;
      }
    } else
      try {
        c = n(i, l), im(e, t, c);
      } catch (L) {
        gc(e, t, L);
      }
  }
  function im(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(l) {
        om(e, t, l);
      },
      function(l) {
        return gc(e, t, l);
      }
    ) : om(e, t, n);
  }
  function om(e, t, n) {
    t.status = "fulfilled", t.value = n, um(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, rm(e, n)));
  }
  function gc(e, t, n) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = n, um(t), t = t.next;
      while (t !== l);
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
          var l = xe;
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
                ), l = i.data === "F!";
                break e;
              }
            }
            Cl(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return n = St(), n.memoizedState = n.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: cm,
      lastRenderedState: t
    }, n.queue = l, n = Tm.bind(
      null,
      xe,
      l
    ), l.dispatch = n, l = vc(!1), c = Ec.bind(
      null,
      xe,
      !1,
      l.queue
    ), l = St(), i = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = i, n = py.bind(
      null,
      xe,
      i,
      c,
      n
    ), i.dispatch = n, l.memoizedState = e, [t, n, !1];
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
        var l = Ar(t);
      } catch (v) {
        throw v === yr ? Qi : v;
      }
    else l = t;
    t = $e();
    var i = t.queue, c = i.dispatch;
    return n !== t.memoizedState && (xe.flags |= 2048, ba(
      9,
      Wi(),
      vy.bind(null, i, n),
      null
    )), [l, c, e];
  }
  function vy(e, t) {
    e.action = t;
  }
  function mm(e) {
    var t = $e(), n = Ue;
    if (n !== null)
      return dm(t, n, e);
    $e(), t = t.memoizedState, n = $e();
    var l = n.queue.dispatch;
    return n.memoizedState = e, [t, l, !1];
  }
  function ba(e, t, n, l) {
    return e = { tag: e, create: n, deps: l, inst: t, next: null }, t = xe.updateQueue, t === null && (t = dc(), xe.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (l = n.next, n.next = e, e.next = l, t.lastEffect = e), e;
  }
  function Wi() {
    return { destroy: void 0, resource: void 0 };
  }
  function hm() {
    return $e().memoizedState;
  }
  function Ii(e, t, n, l) {
    var i = St();
    l = l === void 0 ? null : l, xe.flags |= e, i.memoizedState = ba(
      1 | t,
      Wi(),
      n,
      l
    );
  }
  function Cr(e, t, n, l) {
    var i = $e();
    l = l === void 0 ? null : l;
    var c = i.memoizedState.inst;
    Ue !== null && l !== null && oc(l, Ue.memoizedState.deps) ? i.memoizedState = ba(t, c, n, l) : (xe.flags |= e, i.memoizedState = ba(
      1 | t,
      c,
      n,
      l
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
    var l = n.memoizedState;
    return t !== null && oc(t, l[1]) ? l[0] : (n.memoizedState = [e, t], e);
  }
  function Em(e, t) {
    var n = $e();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && oc(t, l[1]))
      return l[0];
    if (l = e(), Tl) {
      en(!0);
      try {
        e();
      } finally {
        en(!1);
      }
    }
    return n.memoizedState = [l, t], l;
  }
  function bc(e, t, n) {
    return n === void 0 || (Zn & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = n, e = Ch(), xe.lanes |= e, In |= e, n);
  }
  function wm(e, t, n, l) {
    return Ct(n, t) ? n : va.current !== null ? (e = bc(e, n, l), Ct(e, t) || (lt = !0), e) : (Zn & 42) === 0 ? (lt = !0, e.memoizedState = n) : (e = Ch(), xe.lanes |= e, In |= e, t);
  }
  function Am(e, t, n, l, i) {
    var c = V.p;
    V.p = c !== 0 && 8 > c ? c : 8;
    var v = N.T, b = {};
    N.T = b, Ec(e, !1, t, n);
    try {
      var M = i(), L = N.S;
      if (L !== null && L(b, M), M !== null && typeof M == "object" && typeof M.then == "function") {
        var K = dy(
          M,
          l
        );
        Rr(
          e,
          t,
          K,
          _t(e)
        );
      } else
        Rr(
          e,
          t,
          l,
          _t(e)
        );
    } catch (J) {
      Rr(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: J },
        _t()
      );
    } finally {
      V.p = c, N.T = v;
    }
  }
  function gy() {
  }
  function xc(e, t, n, l) {
    if (e.tag !== 5) throw Error(o(476));
    var i = Cm(e).queue;
    Am(
      e,
      i,
      t,
      k,
      n === null ? gy : function() {
        return Rm(e), n(l);
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
          var l = Qn(t, e, n);
          l !== null && (Nt(l, t, n), xr(l, t, n)), t = { cache: $u() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function by(e, t, n) {
    var l = _t();
    n = {
      lane: l,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, eo(e) ? _m(t, n) : (n = Yu(e, t, n, l), n !== null && (Nt(n, e, l), Nm(n, t, l)));
  }
  function Tm(e, t, n) {
    var l = _t();
    Rr(e, t, n, l);
  }
  function Rr(e, t, n, l) {
    var i = {
      lane: l,
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
            return ki(e, t, i, 0), Ye === null && Li(), !1;
        } catch {
        } finally {
        }
      if (n = Yu(e, t, i, l), n !== null)
        return Nt(n, e, l), Nm(n, t, l), !0;
    }
    return !1;
  }
  function Ec(e, t, n, l) {
    if (l = {
      lane: 2,
      revertLane: es(),
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, eo(e)) {
      if (t) throw Error(o(479));
    } else
      t = Yu(
        e,
        n,
        l,
        2
      ), t !== null && Nt(t, e, 2);
  }
  function eo(e) {
    var t = e.alternate;
    return e === xe || t !== null && t === xe;
  }
  function _m(e, t) {
    ga = Pi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Nm(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, Ia(e, n);
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
      var l = e();
      if (Tl) {
        en(!0);
        try {
          e();
        } finally {
          en(!1);
        }
      }
      return n.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, n) {
      var l = St();
      if (n !== void 0) {
        var i = n(t);
        if (Tl) {
          en(!0);
          try {
            n(t);
          } finally {
            en(!1);
          }
        }
      } else i = t;
      return l.memoizedState = l.baseState = i, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: i
      }, l.queue = e, e = e.dispatch = by.bind(
        null,
        xe,
        e
      ), [l.memoizedState, e];
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
      var l = xe, i = St();
      if (Ne) {
        if (n === void 0)
          throw Error(o(407));
        n = n();
      } else {
        if (n = t(), Ye === null)
          throw Error(o(349));
        (Oe & 124) !== 0 || Id(l, t, n);
      }
      i.memoizedState = n;
      var c = { value: n, getSnapshot: t };
      return i.queue = c, pm(tm.bind(null, l, c, e), [
        e
      ]), l.flags |= 2048, ba(
        9,
        Wi(),
        em.bind(
          null,
          l,
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
        var n = bn, l = yn;
        n = (l & ~(1 << 32 - it(l) - 1)).toString(32) + n, t = "«" + t + "R" + n, n = Fi++, 0 < n && (t += "H" + n.toString(32)), t += "»";
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
  }, xa = null, Mr = 0;
  function no(e) {
    var t = Mr;
    return Mr += 1, xa === null && (xa = []), Xd(xa, e, t);
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
    function t(D, _) {
      if (e) {
        var U = D.deletions;
        U === null ? (D.deletions = [_], D.flags |= 16) : U.push(_);
      }
    }
    function n(D, _) {
      if (!e) return null;
      for (; _ !== null; )
        t(D, _), _ = _.sibling;
      return null;
    }
    function l(D) {
      for (var _ = /* @__PURE__ */ new Map(); D !== null; )
        D.key !== null ? _.set(D.key, D) : _.set(D.index, D), D = D.sibling;
      return _;
    }
    function i(D, _) {
      return D = gn(D, _), D.index = 0, D.sibling = null, D;
    }
    function c(D, _, U) {
      return D.index = U, e ? (U = D.alternate, U !== null ? (U = U.index, U < _ ? (D.flags |= 67108866, _) : U) : (D.flags |= 67108866, _)) : (D.flags |= 1048576, _);
    }
    function v(D) {
      return e && D.alternate === null && (D.flags |= 67108866), D;
    }
    function b(D, _, U, F) {
      return _ === null || _.tag !== 6 ? (_ = Vu(U, D.mode, F), _.return = D, _) : (_ = i(_, U), _.return = D, _);
    }
    function M(D, _, U, F) {
      var ie = U.type;
      return ie === R ? K(
        D,
        _,
        U.props.children,
        F,
        U.key
      ) : _ !== null && (_.elementType === ie || typeof ie == "object" && ie !== null && ie.$$typeof === Y && zm(ie) === _.type) ? (_ = i(_, U.props), Or(_, U), _.return = D, _) : (_ = Hi(
        U.type,
        U.key,
        U.props,
        null,
        D.mode,
        F
      ), Or(_, U), _.return = D, _);
    }
    function L(D, _, U, F) {
      return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== U.containerInfo || _.stateNode.implementation !== U.implementation ? (_ = Xu(U, D.mode, F), _.return = D, _) : (_ = i(_, U.children || []), _.return = D, _);
    }
    function K(D, _, U, F, ie) {
      return _ === null || _.tag !== 7 ? (_ = Sl(
        U,
        D.mode,
        F,
        ie
      ), _.return = D, _) : (_ = i(_, U), _.return = D, _);
    }
    function J(D, _, U) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
        return _ = Vu(
          "" + _,
          D.mode,
          U
        ), _.return = D, _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case x:
            return U = Hi(
              _.type,
              _.key,
              _.props,
              null,
              D.mode,
              U
            ), Or(U, _), U.return = D, U;
          case E:
            return _ = Xu(
              _,
              D.mode,
              U
            ), _.return = D, _;
          case Y:
            var F = _._init;
            return _ = F(_._payload), J(D, _, U);
        }
        if (Q(_) || re(_))
          return _ = Sl(
            _,
            D.mode,
            U,
            null
          ), _.return = D, _;
        if (typeof _.then == "function")
          return J(D, no(_), U);
        if (_.$$typeof === j)
          return J(
            D,
            Vi(D, _),
            U
          );
        lo(D, _);
      }
      return null;
    }
    function B(D, _, U, F) {
      var ie = _ !== null ? _.key : null;
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
        return ie !== null ? null : b(D, _, "" + U, F);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case x:
            return U.key === ie ? M(D, _, U, F) : null;
          case E:
            return U.key === ie ? L(D, _, U, F) : null;
          case Y:
            return ie = U._init, U = ie(U._payload), B(D, _, U, F);
        }
        if (Q(U) || re(U))
          return ie !== null ? null : K(D, _, U, F, null);
        if (typeof U.then == "function")
          return B(
            D,
            _,
            no(U),
            F
          );
        if (U.$$typeof === j)
          return B(
            D,
            _,
            Vi(D, U),
            F
          );
        lo(D, U);
      }
      return null;
    }
    function H(D, _, U, F, ie) {
      if (typeof F == "string" && F !== "" || typeof F == "number" || typeof F == "bigint")
        return D = D.get(U) || null, b(_, D, "" + F, ie);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case x:
            return D = D.get(
              F.key === null ? U : F.key
            ) || null, M(_, D, F, ie);
          case E:
            return D = D.get(
              F.key === null ? U : F.key
            ) || null, L(_, D, F, ie);
          case Y:
            var Ee = F._init;
            return F = Ee(F._payload), H(
              D,
              _,
              U,
              F,
              ie
            );
        }
        if (Q(F) || re(F))
          return D = D.get(U) || null, K(_, D, F, ie, null);
        if (typeof F.then == "function")
          return H(
            D,
            _,
            U,
            no(F),
            ie
          );
        if (F.$$typeof === j)
          return H(
            D,
            _,
            U,
            Vi(_, F),
            ie
          );
        lo(_, F);
      }
      return null;
    }
    function ye(D, _, U, F) {
      for (var ie = null, Ee = null, fe = _, pe = _ = 0, rt = null; fe !== null && pe < U.length; pe++) {
        fe.index > pe ? (rt = fe, fe = null) : rt = fe.sibling;
        var _e = B(
          D,
          fe,
          U[pe],
          F
        );
        if (_e === null) {
          fe === null && (fe = rt);
          break;
        }
        e && fe && _e.alternate === null && t(D, fe), _ = c(_e, _, pe), Ee === null ? ie = _e : Ee.sibling = _e, Ee = _e, fe = rt;
      }
      if (pe === U.length)
        return n(D, fe), Ne && wl(D, pe), ie;
      if (fe === null) {
        for (; pe < U.length; pe++)
          fe = J(D, U[pe], F), fe !== null && (_ = c(
            fe,
            _,
            pe
          ), Ee === null ? ie = fe : Ee.sibling = fe, Ee = fe);
        return Ne && wl(D, pe), ie;
      }
      for (fe = l(fe); pe < U.length; pe++)
        rt = H(
          fe,
          D,
          pe,
          U[pe],
          F
        ), rt !== null && (e && rt.alternate !== null && fe.delete(
          rt.key === null ? pe : rt.key
        ), _ = c(
          rt,
          _,
          pe
        ), Ee === null ? ie = rt : Ee.sibling = rt, Ee = rt);
      return e && fe.forEach(function(ul) {
        return t(D, ul);
      }), Ne && wl(D, pe), ie;
    }
    function he(D, _, U, F) {
      if (U == null) throw Error(o(151));
      for (var ie = null, Ee = null, fe = _, pe = _ = 0, rt = null, _e = U.next(); fe !== null && !_e.done; pe++, _e = U.next()) {
        fe.index > pe ? (rt = fe, fe = null) : rt = fe.sibling;
        var ul = B(D, fe, _e.value, F);
        if (ul === null) {
          fe === null && (fe = rt);
          break;
        }
        e && fe && ul.alternate === null && t(D, fe), _ = c(ul, _, pe), Ee === null ? ie = ul : Ee.sibling = ul, Ee = ul, fe = rt;
      }
      if (_e.done)
        return n(D, fe), Ne && wl(D, pe), ie;
      if (fe === null) {
        for (; !_e.done; pe++, _e = U.next())
          _e = J(D, _e.value, F), _e !== null && (_ = c(_e, _, pe), Ee === null ? ie = _e : Ee.sibling = _e, Ee = _e);
        return Ne && wl(D, pe), ie;
      }
      for (fe = l(fe); !_e.done; pe++, _e = U.next())
        _e = H(fe, D, pe, _e.value, F), _e !== null && (e && _e.alternate !== null && fe.delete(_e.key === null ? pe : _e.key), _ = c(_e, _, pe), Ee === null ? ie = _e : Ee.sibling = _e, Ee = _e);
      return e && fe.forEach(function(Sb) {
        return t(D, Sb);
      }), Ne && wl(D, pe), ie;
    }
    function ke(D, _, U, F) {
      if (typeof U == "object" && U !== null && U.type === R && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case x:
            e: {
              for (var ie = U.key; _ !== null; ) {
                if (_.key === ie) {
                  if (ie = U.type, ie === R) {
                    if (_.tag === 7) {
                      n(
                        D,
                        _.sibling
                      ), F = i(
                        _,
                        U.props.children
                      ), F.return = D, D = F;
                      break e;
                    }
                  } else if (_.elementType === ie || typeof ie == "object" && ie !== null && ie.$$typeof === Y && zm(ie) === _.type) {
                    n(
                      D,
                      _.sibling
                    ), F = i(_, U.props), Or(F, U), F.return = D, D = F;
                    break e;
                  }
                  n(D, _);
                  break;
                } else t(D, _);
                _ = _.sibling;
              }
              U.type === R ? (F = Sl(
                U.props.children,
                D.mode,
                F,
                U.key
              ), F.return = D, D = F) : (F = Hi(
                U.type,
                U.key,
                U.props,
                null,
                D.mode,
                F
              ), Or(F, U), F.return = D, D = F);
            }
            return v(D);
          case E:
            e: {
              for (ie = U.key; _ !== null; ) {
                if (_.key === ie)
                  if (_.tag === 4 && _.stateNode.containerInfo === U.containerInfo && _.stateNode.implementation === U.implementation) {
                    n(
                      D,
                      _.sibling
                    ), F = i(_, U.children || []), F.return = D, D = F;
                    break e;
                  } else {
                    n(D, _);
                    break;
                  }
                else t(D, _);
                _ = _.sibling;
              }
              F = Xu(U, D.mode, F), F.return = D, D = F;
            }
            return v(D);
          case Y:
            return ie = U._init, U = ie(U._payload), ke(
              D,
              _,
              U,
              F
            );
        }
        if (Q(U))
          return ye(
            D,
            _,
            U,
            F
          );
        if (re(U)) {
          if (ie = re(U), typeof ie != "function") throw Error(o(150));
          return U = ie.call(U), he(
            D,
            _,
            U,
            F
          );
        }
        if (typeof U.then == "function")
          return ke(
            D,
            _,
            no(U),
            F
          );
        if (U.$$typeof === j)
          return ke(
            D,
            _,
            Vi(D, U),
            F
          );
        lo(D, U);
      }
      return typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint" ? (U = "" + U, _ !== null && _.tag === 6 ? (n(D, _.sibling), F = i(_, U), F.return = D, D = F) : (n(D, _), F = Vu(U, D.mode, F), F.return = D, D = F), v(D)) : n(D, _);
    }
    return function(D, _, U, F) {
      try {
        Mr = 0;
        var ie = ke(
          D,
          _,
          U,
          F
        );
        return xa = null, ie;
      } catch (fe) {
        if (fe === yr || fe === Qi) throw fe;
        var Ee = Rt(29, fe, null, D.mode);
        return Ee.lanes = F, Ee.return = D, Ee;
      } finally {
      }
    };
  }
  var Sa = Um(!0), Lm = Um(!1), Gt = X(null), nn = null;
  function Kn(e) {
    var t = e.alternate;
    W(et, et.current & 1), W(Gt, e), nn === null && (t === null || va.current !== null || t.memoizedState !== null) && (nn = e);
  }
  function km(e) {
    if (e.tag === 22) {
      if (W(et, et.current), W(Gt, e), nn === null) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (nn = e);
      }
    } else Pn();
  }
  function Pn() {
    W(et, et.current), W(Gt, Gt.current);
  }
  function wn(e) {
    I(Gt), nn === e && (nn = null), I(et);
  }
  var et = X(0);
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
  function wc(e, t, n, l) {
    t = e.memoizedState, n = n(l, t), n = n == null ? t : g({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Ac = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var l = _t(), i = Xn(l);
      i.payload = t, n != null && (i.callback = n), t = Qn(e, i, l), t !== null && (Nt(t, e, l), xr(t, e, l));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var l = _t(), i = Xn(l);
      i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Qn(e, i, l), t !== null && (Nt(t, e, l), xr(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = _t(), l = Xn(n);
      l.tag = 2, t != null && (l.callback = t), t = Qn(e, l, n), t !== null && (Nt(t, e, n), xr(t, e, n));
    }
  };
  function Bm(e, t, n, l, i, c, v) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, c, v) : t.prototype && t.prototype.isPureReactComponent ? !sr(n, l) || !sr(i, c) : !0;
  }
  function Hm(e, t, n, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, l), t.state !== e && Ac.enqueueReplaceState(t, t.state, null);
  }
  function _l(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var l in t)
        l !== "ref" && (n[l] = t[l]);
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
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function Vm(e, t, n) {
    try {
      var l = e.onCaughtError;
      l(n.value, {
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
  function Qm(e, t, n, l) {
    var i = n.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var c = l.value;
      e.payload = function() {
        return i(c);
      }, e.callback = function() {
        Vm(t, n, l);
      };
    }
    var v = n.stateNode;
    v !== null && typeof v.componentDidCatch == "function" && (e.callback = function() {
      Vm(t, n, l), typeof i != "function" && (el === null ? el = /* @__PURE__ */ new Set([this]) : el.add(this));
      var b = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: b !== null ? b : ""
      });
    });
  }
  function Sy(e, t, n, l, i) {
    if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = n.alternate, t !== null && pr(
        t,
        n,
        i,
        !0
      ), n = Gt.current, n !== null) {
        switch (n.tag) {
          case 13:
            return nn === null ? Fc() : n.alternate === null && Ke === 0 && (Ke = 3), n.flags &= -257, n.flags |= 65536, n.lanes = i, l === ec ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), $c(e, l, i)), !1;
          case 22:
            return n.flags |= 65536, l === ec ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), $c(e, l, i)), !1;
        }
        throw Error(o(435, n.tag));
      }
      return $c(e, l, i), Fc(), !1;
    }
    if (Ne)
      return t = Gt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = i, l !== Ku && (e = Error(o(422), { cause: l }), hr(Lt(e, n)))) : (l !== Ku && (t = Error(o(423), {
        cause: l
      }), hr(
        Lt(t, n)
      )), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, l = Lt(l, n), i = Cc(
        e.stateNode,
        l,
        i
      ), lc(e, i), Ke !== 4 && (Ke = 2)), !1;
    var c = Error(o(520), { cause: l });
    if (c = Lt(c, n), Ur === null ? Ur = [c] : Ur.push(c), Ke !== 4 && (Ke = 2), t === null) return !0;
    l = Lt(l, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = i & -i, n.lanes |= e, e = Cc(n.stateNode, l, e), lc(n, e), !1;
        case 1:
          if (t = n.type, c = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (el === null || !el.has(c))))
            return n.flags |= 65536, i &= -i, n.lanes |= i, i = Xm(i), Qm(
              i,
              e,
              n,
              l
            ), lc(n, i), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Zm = Error(o(461)), lt = !1;
  function ot(e, t, n, l) {
    t.child = e === null ? Lm(t, null, n, l) : Sa(
      t,
      e.child,
      n,
      l
    );
  }
  function Km(e, t, n, l, i) {
    n = n.render;
    var c = t.ref;
    if ("ref" in l) {
      var v = {};
      for (var b in l)
        b !== "ref" && (v[b] = l[b]);
    } else v = l;
    return Ml(t), l = uc(
      e,
      t,
      n,
      v,
      c,
      i
    ), b = cc(), e !== null && !lt ? (sc(e, t, i), An(e, t, i)) : (Ne && b && Qu(t), t.flags |= 1, ot(e, t, l, i), t.child);
  }
  function Pm(e, t, n, l, i) {
    if (e === null) {
      var c = n.type;
      return typeof c == "function" && !qu(c) && c.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = c, Fm(
        e,
        t,
        c,
        l,
        i
      )) : (e = Hi(
        n.type,
        null,
        l,
        t,
        t.mode,
        i
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (c = e.child, !jc(e, i)) {
      var v = c.memoizedProps;
      if (n = n.compare, n = n !== null ? n : sr, n(v, l) && e.ref === t.ref)
        return An(e, t, i);
    }
    return t.flags |= 1, e = gn(c, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Fm(e, t, n, l, i) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (sr(c, l) && e.ref === t.ref)
        if (lt = !1, t.pendingProps = l = c, jc(e, i))
          (e.flags & 131072) !== 0 && (lt = !0);
        else
          return t.lanes = e.lanes, An(e, t, i);
    }
    return Rc(
      e,
      t,
      n,
      l,
      i
    );
  }
  function Jm(e, t, n) {
    var l = t.pendingProps, i = l.children, c = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (l = c !== null ? c.baseLanes | n : n, e !== null) {
          for (i = t.child = e.child, c = 0; i !== null; )
            c = c | i.lanes | i.childLanes, i = i.sibling;
          t.childLanes = c & ~l;
        } else t.childLanes = 0, t.child = null;
        return $m(
          e,
          t,
          l,
          n
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Xi(
          t,
          c !== null ? c.cachePool : null
        ), c !== null ? Fd(t, c) : rc(), km(t);
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
  function $m(e, t, n, l) {
    var i = Iu();
    return i = i === null ? null : { parent: Ie._currentValue, pool: i }, t.memoizedState = {
      baseLanes: n,
      cachePool: i
    }, e !== null && Xi(t, null), rc(), km(t), e !== null && pr(e, t, l, !0), null;
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
  function Rc(e, t, n, l, i) {
    return Ml(t), n = uc(
      e,
      t,
      n,
      l,
      void 0,
      i
    ), l = cc(), e !== null && !lt ? (sc(e, t, i), An(e, t, i)) : (Ne && l && Qu(t), t.flags |= 1, ot(e, t, n, i), t.child);
  }
  function Wm(e, t, n, l, i, c) {
    return Ml(t), t.updateQueue = null, n = $d(
      t,
      l,
      n,
      i
    ), Jd(e), l = cc(), e !== null && !lt ? (sc(e, t, c), An(e, t, c)) : (Ne && l && Qu(t), t.flags |= 1, ot(e, t, n, c), t.child);
  }
  function Im(e, t, n, l, i) {
    if (Ml(t), t.stateNode === null) {
      var c = fa, v = n.contextType;
      typeof v == "object" && v !== null && (c = mt(v)), c = new n(l, c), t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = Ac, t.stateNode = c, c._reactInternals = t, c = t.stateNode, c.props = l, c.state = t.memoizedState, c.refs = {}, tc(t), v = n.contextType, c.context = typeof v == "object" && v !== null ? mt(v) : fa, c.state = t.memoizedState, v = n.getDerivedStateFromProps, typeof v == "function" && (wc(
        t,
        n,
        v,
        l
      ), c.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (v = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), v !== c.state && Ac.enqueueReplaceState(c, c.state, null), Er(t, l, c, i), Sr(), c.state = t.memoizedState), typeof c.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      c = t.stateNode;
      var b = t.memoizedProps, M = _l(n, b);
      c.props = M;
      var L = c.context, K = n.contextType;
      v = fa, typeof K == "object" && K !== null && (v = mt(K));
      var J = n.getDerivedStateFromProps;
      K = typeof J == "function" || typeof c.getSnapshotBeforeUpdate == "function", b = t.pendingProps !== b, K || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (b || L !== v) && Hm(
        t,
        c,
        l,
        v
      ), Vn = !1;
      var B = t.memoizedState;
      c.state = B, Er(t, l, c, i), Sr(), L = t.memoizedState, b || B !== L || Vn ? (typeof J == "function" && (wc(
        t,
        n,
        J,
        l
      ), L = t.memoizedState), (M = Vn || Bm(
        t,
        n,
        M,
        l,
        B,
        L,
        v
      )) ? (K || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = L), c.props = l, c.state = L, c.context = v, l = M) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      c = t.stateNode, nc(e, t), v = t.memoizedProps, K = _l(n, v), c.props = K, J = t.pendingProps, B = c.context, L = n.contextType, M = fa, typeof L == "object" && L !== null && (M = mt(L)), b = n.getDerivedStateFromProps, (L = typeof b == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (v !== J || B !== M) && Hm(
        t,
        c,
        l,
        M
      ), Vn = !1, B = t.memoizedState, c.state = B, Er(t, l, c, i), Sr();
      var H = t.memoizedState;
      v !== J || B !== H || Vn || e !== null && e.dependencies !== null && qi(e.dependencies) ? (typeof b == "function" && (wc(
        t,
        n,
        b,
        l
      ), H = t.memoizedState), (K = Vn || Bm(
        t,
        n,
        K,
        l,
        B,
        H,
        M
      ) || e !== null && e.dependencies !== null && qi(e.dependencies)) ? (L || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(l, H, M), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(
        l,
        H,
        M
      )), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || v === e.memoizedProps && B === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && B === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = H), c.props = l, c.state = H, c.context = M, l = K) : (typeof c.componentDidUpdate != "function" || v === e.memoizedProps && B === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && B === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return c = l, oo(e, t), l = (t.flags & 128) !== 0, c || l ? (c = t.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : c.render(), t.flags |= 1, e !== null && l ? (t.child = Sa(
      t,
      e.child,
      null,
      i
    ), t.child = Sa(
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
  function eh(e, t, n, l) {
    return mr(), t.flags |= 256, ot(e, t, n, l), t.child;
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
    var l = t.pendingProps, i = !1, c = (t.flags & 128) !== 0, v;
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
              treeContext: El !== null ? { id: yn, overflow: bn } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, M = Rt(
              18,
              null,
              null,
              0
            ), M.stateNode = b, M.return = t, t.child = M, pt = t, Ze = null, M = !0) : M = !1;
          }
          M || Cl(t);
        }
        if (b = t.memoizedState, b !== null && (b = b.dehydrated, b !== null))
          return ds(b) ? t.lanes = 32 : t.lanes = 536870912, null;
        wn(t);
      }
      return b = l.children, l = l.fallback, i ? (Pn(), i = t.mode, b = uo(
        { mode: "hidden", children: b },
        i
      ), l = Sl(
        l,
        i,
        n,
        null
      ), b.return = t, l.return = t, b.sibling = l, t.child = b, i = t.child, i.memoizedState = Oc(n), i.childLanes = Tc(
        e,
        v,
        n
      ), t.memoizedState = Mc, l) : (Kn(t), _c(t, b));
    }
    if (M = e.memoizedState, M !== null && (b = M.dehydrated, b !== null)) {
      if (c)
        t.flags & 256 ? (Kn(t), t.flags &= -257, t = Nc(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (Pn(), t.child = e.child, t.flags |= 128, t = null) : (Pn(), i = l.fallback, b = t.mode, l = uo(
          { mode: "visible", children: l.children },
          b
        ), i = Sl(
          i,
          b,
          n,
          null
        ), i.flags |= 2, l.return = t, i.return = t, l.sibling = i, t.child = l, Sa(
          t,
          e.child,
          null,
          n
        ), l = t.child, l.memoizedState = Oc(n), l.childLanes = Tc(
          e,
          v,
          n
        ), t.memoizedState = Mc, t = i);
      else if (Kn(t), ds(b)) {
        if (v = b.nextSibling && b.nextSibling.dataset, v) var L = v.dgst;
        v = L, l = Error(o(419)), l.stack = "", l.digest = v, hr({ value: l, source: null, stack: null }), t = Nc(
          e,
          t,
          n
        );
      } else if (lt || pr(e, t, n, !1), v = (n & e.childLanes) !== 0, lt || v) {
        if (v = Ye, v !== null && (l = n & -n, l = (l & 42) !== 0 ? 1 : Fl(l), l = (l & (v.suspendedLanes | n)) !== 0 ? 0 : l, l !== 0 && l !== M.retryLane))
          throw M.retryLane = l, sa(e, l), Nt(v, e, l), Zm;
        b.data === "$?" || Fc(), t = Nc(
          e,
          t,
          n
        );
      } else
        b.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = M.treeContext, Ze = Pt(
          b.nextSibling
        ), pt = t, Ne = !0, Al = null, tn = !1, e !== null && (Bt[Ht++] = yn, Bt[Ht++] = bn, Bt[Ht++] = El, yn = e.id, bn = e.overflow, El = t), t = _c(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return i ? (Pn(), i = l.fallback, b = t.mode, M = e.child, L = M.sibling, l = gn(M, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = M.subtreeFlags & 65011712, L !== null ? i = gn(L, i) : (i = Sl(
      i,
      b,
      n,
      null
    ), i.flags |= 2), i.return = t, l.return = t, l.sibling = i, t.child = l, l = i, i = t.child, b = e.child.memoizedState, b === null ? b = Oc(n) : (M = b.cachePool, M !== null ? (L = Ie._currentValue, M = M.parent !== L ? { parent: L, pool: L } : M) : M = Yd(), b = {
      baseLanes: b.baseLanes | n,
      cachePool: M
    }), i.memoizedState = b, i.childLanes = Tc(
      e,
      v,
      n
    ), t.memoizedState = Mc, l) : (Kn(t), n = e.child, e = n.sibling, n = gn(n, {
      mode: "visible",
      children: l.children
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
    return Sa(t, e.child, null, n), e = _c(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function nh(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), Fu(e.return, t, n);
  }
  function Dc(e, t, n, l, i) {
    var c = e.memoizedState;
    c === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: n,
      tailMode: i
    } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = l, c.tail = n, c.tailMode = i);
  }
  function lh(e, t, n) {
    var l = t.pendingProps, i = l.revealOrder, c = l.tail;
    if (ot(e, t, l.children, n), l = et.current, (l & 2) !== 0)
      l = l & 1 | 2, t.flags |= 128;
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
      l &= 1;
    }
    switch (W(et, l), i) {
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
        Be(t);
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
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (Kn(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? th(e, t, n) : (Kn(t), e = An(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        Kn(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (l = (n & t.childLanes) !== 0, l || (pr(
          e,
          t,
          n,
          !1
        ), l = (n & t.childLanes) !== 0), i) {
          if (l)
            return lh(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), W(et, et.current), l) break;
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
          var l = t.elementType, i = l._init;
          if (l = i(l._payload), t.type = l, typeof l == "function")
            qu(l) ? (e = _l(l, e), t.tag = 1, t = Im(
              null,
              t,
              l,
              e,
              n
            )) : (t.tag = 0, t = Rc(
              null,
              t,
              l,
              e,
              n
            ));
          else {
            if (l != null) {
              if (i = l.$$typeof, i === q) {
                t.tag = 11, t = Km(
                  null,
                  t,
                  l,
                  e,
                  n
                );
                break e;
              } else if (i === Z) {
                t.tag = 14, t = Pm(
                  null,
                  t,
                  l,
                  e,
                  n
                );
                break e;
              }
            }
            throw t = me(l) || l, Error(o(306, t, ""));
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
        return l = t.type, i = _l(
          l,
          t.pendingProps
        ), Im(
          e,
          t,
          l,
          i,
          n
        );
      case 3:
        e: {
          if (ve(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          l = t.pendingProps;
          var c = t.memoizedState;
          i = c.element, nc(e, t), Er(t, l, null, n);
          var v = t.memoizedState;
          if (l = v.cache, qn(t, Ie, l), l !== c.cache && Ju(
            t,
            [Ie],
            n,
            !0
          ), Sr(), l = v.element, c.isDehydrated)
            if (c = {
              element: l,
              isDehydrated: !1,
              cache: v.cache
            }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
              t = eh(
                e,
                t,
                l,
                n
              );
              break e;
            } else if (l !== i) {
              i = Lt(
                Error(o(424)),
                t
              ), hr(i), t = eh(
                e,
                t,
                l,
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
              for (Ze = Pt(e.firstChild), pt = t, Ne = !0, Al = null, tn = !0, n = Lm(
                t,
                null,
                l,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (mr(), l === i) {
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
              l,
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
        )) ? t.memoizedState = n : Ne || (n = t.type, e = t.pendingProps, l = wo(
          ce.current
        ).createElement(n), l[dt] = t, l[bt] = e, ct(l, n, e), nt(l), t.stateNode = l) : t.memoizedState = up(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Be(t), e === null && Ne && (l = t.stateNode = rp(
          t.type,
          t.pendingProps,
          ce.current
        ), pt = t, tn = !0, i = Ze, ll(t.type) ? (ms = i, Ze = Pt(
          l.firstChild
        )) : Ze = i), ot(
          e,
          t,
          t.pendingProps.children,
          n
        ), oo(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ne && ((i = l = Ze) && (l = Jy(
          l,
          t.type,
          t.pendingProps,
          tn
        ), l !== null ? (t.stateNode = l, pt = t, Ze = Pt(
          l.firstChild
        ), tn = !1, i = !0) : i = !1), i || Cl(t)), Be(t), i = t.type, c = t.pendingProps, v = e !== null ? e.memoizedProps : null, l = c.children, cs(i, c) ? l = null : v !== null && cs(i, v) && (t.flags |= 32), t.memoizedState !== null && (i = uc(
          e,
          t,
          hy,
          null,
          null,
          n
        ), Xr._currentValue = i), oo(e, t), ot(e, t, l, n), t.child;
      case 6:
        return e === null && Ne && ((e = n = Ze) && (n = $y(
          n,
          t.pendingProps,
          tn
        ), n !== null ? (t.stateNode = n, pt = t, Ze = null, e = !0) : e = !1), e || Cl(t)), null;
      case 13:
        return th(e, t, n);
      case 4:
        return ve(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = Sa(
          t,
          null,
          l,
          n
        ) : ot(
          e,
          t,
          l,
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
        return l = t.pendingProps, qn(t, t.type, l.value), ot(
          e,
          t,
          l.children,
          n
        ), t.child;
      case 9:
        return i = t.type._context, l = t.pendingProps.children, Ml(t), i = mt(i), l = l(i), t.flags |= 1, ot(e, t, l, n), t.child;
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
        return l = t.pendingProps, n = t.mode, l = {
          mode: l.mode,
          children: l.children
        }, e === null ? (n = uo(
          l,
          n
        ), n.ref = t.ref, t.child = n, n.return = t, t = n) : (n = gn(e.child, l), n.ref = t.ref, t.child = n, n.return = t, t = n), t;
      case 22:
        return Jm(e, t, n);
      case 24:
        return Ml(t), l = mt(Ie), e === null ? (i = Iu(), i === null && (i = Ye, c = $u(), i.pooledCache = c, c.refCount++, c !== null && (i.pooledCacheLanes |= n), i = c), t.memoizedState = {
          parent: l,
          cache: i
        }, tc(t), qn(t, Ie, i)) : ((e.lanes & n) !== 0 && (nc(e, t), Er(t, null, null, n), Sr()), i = e.memoizedState, c = t.memoizedState, i.parent !== l ? (i = { parent: l, cache: l }, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), qn(t, Ie, l)) : (l = c.cache, qn(t, Ie, l), l !== i.cache && Ju(
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
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Ei() : 536870912, e.lanes |= t, Ca |= t);
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
          for (var l = null; n !== null; )
            n.alternate !== null && (l = n), n = n.sibling;
          l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
      }
  }
  function Ve(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, l = 0;
    if (t)
      for (var i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, l |= i.subtreeFlags & 65011712, l |= i.flags & 65011712, i.return = e, i = i.sibling;
    else
      for (i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, l |= i.subtreeFlags, l |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= l, e.childLanes = n, t;
  }
  function wy(e, t, n) {
    var l = t.pendingProps;
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
        return n = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Sn(Ie), Ce(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (dr(t) ? Cn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, kd())), Ve(t), null;
      case 26:
        return n = t.memoizedState, e === null ? (Cn(t), n !== null ? (Ve(t), rh(t, n)) : (Ve(t), t.flags &= -16777217)) : n ? n !== e.memoizedState ? (Cn(t), Ve(t), rh(t, n)) : (Ve(t), t.flags &= -16777217) : (e.memoizedProps !== l && Cn(t), Ve(t), t.flags &= -16777217), null;
      case 27:
        Me(t), n = ce.current;
        var i = t.type;
        if (e !== null && t.stateNode != null)
          e.memoizedProps !== l && Cn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Ve(t), null;
          }
          e = ne.current, dr(t) ? Ud(t) : (e = rp(i, l, n), t.stateNode = e, Cn(t));
        }
        return Ve(t), null;
      case 5:
        if (Me(t), n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Cn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Ve(t), null;
          }
          if (e = ne.current, dr(t))
            Ud(t);
          else {
            switch (i = wo(
              ce.current
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
                    e = typeof l.is == "string" ? i.createElement("select", { is: l.is }) : i.createElement("select"), l.multiple ? e.multiple = !0 : l.size && (e.size = l.size);
                    break;
                  default:
                    e = typeof l.is == "string" ? i.createElement(n, { is: l.is }) : i.createElement(n);
                }
            }
            e[dt] = t, e[bt] = l;
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
            e: switch (ct(e, n, l), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!l.autoFocus;
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
          e.memoizedProps !== l && Cn(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(o(166));
          if (e = ce.current, dr(t)) {
            if (e = t.stateNode, n = t.memoizedProps, l = null, i = pt, i !== null)
              switch (i.tag) {
                case 27:
                case 5:
                  l = i.memoizedProps;
              }
            e[dt] = t, e = !!(e.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || Wh(e.nodeValue, n)), e || Cl(t);
          } else
            e = wo(e).createTextNode(
              l
            ), e[dt] = t, t.stateNode = e;
        }
        return Ve(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (i = dr(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(o(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(o(317));
              i[dt] = t;
            } else
              mr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ve(t), i = !1;
          } else
            i = kd(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
          if (!i)
            return t.flags & 256 ? (wn(t), t) : (wn(t), null);
        }
        if (wn(t), (t.flags & 128) !== 0)
          return t.lanes = n, t;
        if (n = l !== null, e = e !== null && e.memoizedState !== null, n) {
          l = t.child, i = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (i = l.alternate.memoizedState.cachePool.pool);
          var c = null;
          l.memoizedState !== null && l.memoizedState.cachePool !== null && (c = l.memoizedState.cachePool.pool), c !== i && (l.flags |= 2048);
        }
        return n !== e && n && (t.child.flags |= 8192), co(t, t.updateQueue), Ve(t), null;
      case 4:
        return Ce(), e === null && as(t.stateNode.containerInfo), Ve(t), null;
      case 10:
        return Sn(t.type), Ve(t), null;
      case 19:
        if (I(et), i = t.memoizedState, i === null) return Ve(t), null;
        if (l = (t.flags & 128) !== 0, c = i.rendering, c === null)
          if (l) Tr(i, !1);
          else {
            if (Ke !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (c = ao(e), c !== null) {
                  for (t.flags |= 128, Tr(i, !1), e = c.updateQueue, t.updateQueue = e, co(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    jd(n, e), n = n.sibling;
                  return W(
                    et,
                    et.current & 1 | 2
                  ), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null && Qe() > mo && (t.flags |= 128, l = !0, Tr(i, !1), t.lanes = 4194304);
          }
        else {
          if (!l)
            if (e = ao(c), e !== null) {
              if (t.flags |= 128, l = !0, e = e.updateQueue, t.updateQueue = e, co(t, e), Tr(i, !0), i.tail === null && i.tailMode === "hidden" && !c.alternate && !Ne)
                return Ve(t), null;
            } else
              2 * Qe() - i.renderingStartTime > mo && n !== 536870912 && (t.flags |= 128, l = !0, Tr(i, !1), t.lanes = 4194304);
          i.isBackwards ? (c.sibling = t.child, t.child = c) : (e = i.last, e !== null ? e.sibling = c : t.child = c, i.last = c);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Qe(), t.sibling = null, e = et.current, W(et, l ? e & 1 | 2 : e & 1), t) : (Ve(t), null);
      case 22:
      case 23:
        return wn(t), ic(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ve(t), n = t.updateQueue, n !== null && co(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== n && (t.flags |= 2048), e !== null && I(Ol), null;
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
        return I(et), null;
      case 4:
        return Ce(), null;
      case 10:
        return Sn(t.type), null;
      case 22:
      case 23:
        return wn(t), ic(), e !== null && I(Ol), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
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
        I(et);
        break;
      case 10:
        Sn(t.type);
        break;
      case 22:
      case 23:
        wn(t), ic(), e !== null && I(Ol);
        break;
      case 24:
        Sn(Ie);
    }
  }
  function _r(e, t) {
    try {
      var n = t.updateQueue, l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var i = l.next;
        n = i;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var c = n.create, v = n.inst;
            l = c(), v.destroy = l;
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
      var l = t.updateQueue, i = l !== null ? l.lastEffect : null;
      if (i !== null) {
        var c = i.next;
        l = c;
        do {
          if ((l.tag & e) === e) {
            var v = l.inst, b = v.destroy;
            if (b !== void 0) {
              v.destroy = void 0, i = t;
              var M = n, L = b;
              try {
                L();
              } catch (K) {
                Ge(
                  i,
                  M,
                  K
                );
              }
            }
          }
          l = l.next;
        } while (l !== c);
      }
    } catch (K) {
      Ge(t, t.return, K);
    }
  }
  function oh(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Pd(t, n);
      } catch (l) {
        Ge(e, e.return, l);
      }
    }
  }
  function uh(e, t, n) {
    n.props = _l(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (l) {
      Ge(e, t, l);
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
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof n == "function" ? e.refCleanup = n(l) : n.current = l;
      }
    } catch (i) {
      Ge(e, t, i);
    }
  }
  function ln(e, t) {
    var n = e.ref, l = e.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
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
    var t = e.type, n = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break e;
        case "img":
          n.src ? l.src = n.src : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (i) {
      Ge(e, e.return, i);
    }
  }
  function zc(e, t, n) {
    try {
      var l = e.stateNode;
      Qy(l, e.type, n, t), l[bt] = t;
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
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Eo));
    else if (l !== 4 && (l === 27 && ll(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (Lc(e, t, n), e = e.sibling; e !== null; )
        Lc(e, t, n), e = e.sibling;
  }
  function so(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (l !== 4 && (l === 27 && ll(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (so(e, t, n), e = e.sibling; e !== null; )
        so(e, t, n), e = e.sibling;
  }
  function fh(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var l = e.type, i = t.attributes; i.length; )
        t.removeAttributeNode(i[0]);
      ct(t, l, n), t[dt] = e, t[bt] = n;
    } catch (c) {
      Ge(e, e.return, c);
    }
  }
  var Rn = !1, Fe = !1, kc = !1, dh = typeof WeakSet == "function" ? WeakSet : Set, at = null;
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
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var i = l.anchorOffset, c = l.focusNode;
            l = l.focusOffset;
            try {
              n.nodeType, c.nodeType;
            } catch {
              n = null;
              break e;
            }
            var v = 0, b = -1, M = -1, L = 0, K = 0, J = e, B = null;
            t: for (; ; ) {
              for (var H; J !== n || i !== 0 && J.nodeType !== 3 || (b = v + i), J !== c || l !== 0 && J.nodeType !== 3 || (M = v + l), J.nodeType === 3 && (v += J.nodeValue.length), (H = J.firstChild) !== null; )
                B = J, J = H;
              for (; ; ) {
                if (J === e) break t;
                if (B === n && ++L === i && (b = v), B === c && ++K === l && (M = v), (H = J.nextSibling) !== null) break;
                J = B, B = J.parentNode;
              }
              J = H;
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
                e = void 0, n = t, i = c.memoizedProps, c = c.memoizedState, l = n.stateNode;
                try {
                  var ye = _l(
                    n.type,
                    i,
                    n.elementType === n.type
                  );
                  e = l.getSnapshotBeforeUpdate(
                    ye,
                    c
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
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
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Jn(e, n), l & 4 && _r(5, n);
        break;
      case 1:
        if (Jn(e, n), l & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (v) {
              Ge(n, n.return, v);
            }
          else {
            var i = _l(
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
        l & 64 && oh(n), l & 512 && Nr(n, n.return);
        break;
      case 3:
        if (Jn(e, n), l & 64 && (e = n.updateQueue, e !== null)) {
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
        t === null && l & 4 && fh(n);
      case 26:
      case 5:
        Jn(e, n), t === null && l & 4 && ch(n), l & 512 && Nr(n, n.return);
        break;
      case 12:
        Jn(e, n);
        break;
      case 13:
        Jn(e, n), l & 4 && vh(e, n), l & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = zy.bind(
          null,
          n
        ), Wy(e, n))));
        break;
      case 22:
        if (l = n.memoizedState !== null || Rn, !l) {
          t = t !== null && t.memoizedState !== null || Fe, i = Rn;
          var c = Fe;
          Rn = l, (Fe = t) && !c ? $n(
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
        ft.onCommitFiberUnmount(pl, n);
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
        var l = qe, i = Et;
        ll(n.type) && (qe = n.stateNode, Et = !1), Mn(
          e,
          t,
          n
        ), Gr(n.stateNode), qe = l, Et = i;
        break;
      case 5:
        Fe || ln(n, t);
      case 6:
        if (l = qe, i = Et, qe = null, Mn(
          e,
          t,
          n
        ), qe = l, Et = i, qe !== null)
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
        l = qe, i = Et, qe = n.stateNode.containerInfo, Et = !0, Mn(
          e,
          t,
          n
        ), qe = l, Et = i;
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
        Fe || (ln(n, t), l = n.stateNode, typeof l.componentWillUnmount == "function" && uh(
          n,
          t,
          l
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
        Fe = (l = Fe) || n.memoizedState !== null, Mn(
          e,
          t,
          n
        ), Fe = l;
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
  function Bc(e, t) {
    var n = Ry(e);
    t.forEach(function(l) {
      var i = Uy.bind(null, e, l);
      n.has(l) || (n.add(l), l.then(i, i));
    });
  }
  function Mt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var i = n[l], c = e, v = t, b = v;
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
    var n = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Mt(t, e), Ot(e), l & 4 && (Fn(3, e, e.return), _r(3, e), Fn(5, e, e.return));
        break;
      case 1:
        Mt(t, e), Ot(e), l & 512 && (Fe || n === null || ln(n, n.return)), l & 64 && Rn && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
        break;
      case 26:
        var i = Kt;
        if (Mt(t, e), Ot(e), l & 512 && (Fe || n === null || ln(n, n.return)), l & 4) {
          var c = n !== null ? n.memoizedState : null;
          if (l = e.memoizedState, n === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, n = e.memoizedProps, i = i.ownerDocument || i;
                  t: switch (l) {
                    case "title":
                      c = i.getElementsByTagName("title")[0], (!c || c[tr] || c[dt] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = i.createElement(l), i.head.insertBefore(
                        c,
                        i.querySelector("head > title")
                      )), ct(c, l, n), c[dt] = e, nt(c), l = c;
                      break e;
                    case "link":
                      var v = fp(
                        "link",
                        "href",
                        i
                      ).get(l + (n.href || ""));
                      if (v) {
                        for (var b = 0; b < v.length; b++)
                          if (c = v[b], c.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && c.getAttribute("rel") === (n.rel == null ? null : n.rel) && c.getAttribute("title") === (n.title == null ? null : n.title) && c.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            v.splice(b, 1);
                            break t;
                          }
                      }
                      c = i.createElement(l), ct(c, l, n), i.head.appendChild(c);
                      break;
                    case "meta":
                      if (v = fp(
                        "meta",
                        "content",
                        i
                      ).get(l + (n.content || ""))) {
                        for (b = 0; b < v.length; b++)
                          if (c = v[b], c.getAttribute("content") === (n.content == null ? null : "" + n.content) && c.getAttribute("name") === (n.name == null ? null : n.name) && c.getAttribute("property") === (n.property == null ? null : n.property) && c.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && c.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            v.splice(b, 1);
                            break t;
                          }
                      }
                      c = i.createElement(l), ct(c, l, n), i.head.appendChild(c);
                      break;
                    default:
                      throw Error(o(468, l));
                  }
                  c[dt] = e, nt(c), l = c;
                }
                e.stateNode = l;
              } else
                dp(
                  i,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = sp(
                i,
                l,
                e.memoizedProps
              );
          else
            c !== l ? (c === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : c.count--, l === null ? dp(
              i,
              e.type,
              e.stateNode
            ) : sp(
              i,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && zc(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        Mt(t, e), Ot(e), l & 512 && (Fe || n === null || ln(n, n.return)), n !== null && l & 4 && zc(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Mt(t, e), Ot(e), l & 512 && (Fe || n === null || ln(n, n.return)), e.flags & 32) {
          i = e.stateNode;
          try {
            la(i, "");
          } catch (H) {
            Ge(e, e.return, H);
          }
        }
        l & 4 && e.stateNode != null && (i = e.memoizedProps, zc(
          e,
          i,
          n !== null ? n.memoizedProps : i
        )), l & 1024 && (kc = !0);
        break;
      case 6:
        if (Mt(t, e), Ot(e), l & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          l = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = l;
          } catch (H) {
            Ge(e, e.return, H);
          }
        }
        break;
      case 3:
        if (Ro = null, i = Kt, Kt = Ao(t.containerInfo), Mt(t, e), Kt = i, Ot(e), l & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            Pr(t.containerInfo);
          } catch (H) {
            Ge(e, e.return, H);
          }
        kc && (kc = !1, yh(e));
        break;
      case 4:
        l = Kt, Kt = Ao(
          e.stateNode.containerInfo
        ), Mt(t, e), Ot(e), Kt = l;
        break;
      case 12:
        Mt(t, e), Ot(e);
        break;
      case 13:
        Mt(t, e), Ot(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Xc = Qe()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Bc(e, l)));
        break;
      case 22:
        i = e.memoizedState !== null;
        var M = n !== null && n.memoizedState !== null, L = Rn, K = Fe;
        if (Rn = L || i, Fe = K || M, Mt(t, e), Fe = K, Rn = L, Ot(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, i && (n === null || M || Rn || Fe || Nl(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                M = n = t;
                try {
                  if (c = M.stateNode, i)
                    v = c.style, typeof v.setProperty == "function" ? v.setProperty("display", "none", "important") : v.display = "none";
                  else {
                    b = M.stateNode;
                    var J = M.memoizedProps.style, B = J != null && J.hasOwnProperty("display") ? J.display : null;
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
        l & 4 && (l = e.updateQueue, l !== null && (n = l.retryQueue, n !== null && (l.retryQueue = null, Bc(e, n))));
        break;
      case 19:
        Mt(t, e), Ot(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Bc(e, l)));
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
        for (var n, l = e.return; l !== null; ) {
          if (sh(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(o(160));
        switch (n.tag) {
          case 27:
            var i = n.stateNode, c = Uc(e);
            so(e, c, i);
            break;
          case 5:
            var v = n.stateNode;
            n.flags & 32 && (la(v, ""), n.flags &= -33);
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
      } catch (K) {
        Ge(e, e.return, K);
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
  function Nl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Fn(4, t, t.return), Nl(t);
          break;
        case 1:
          ln(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && uh(
            t,
            t.return,
            n
          ), Nl(t);
          break;
        case 27:
          Gr(t.stateNode);
        case 26:
        case 5:
          ln(t, t.return), Nl(t);
          break;
        case 22:
          t.memoizedState === null && Nl(t);
          break;
        case 30:
          Nl(t);
          break;
        default:
          Nl(t);
      }
      e = e.sibling;
    }
  }
  function $n(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, i = e, c = t, v = c.flags;
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
          ), l = c, i = l.stateNode, typeof i.componentDidMount == "function")
            try {
              i.componentDidMount();
            } catch (L) {
              Ge(l, l.return, L);
            }
          if (l = c, i = l.updateQueue, i !== null) {
            var b = l.stateNode;
            try {
              var M = i.shared.hiddenCallbacks;
              if (M !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < M.length; i++)
                  Kd(M[i], b);
            } catch (L) {
              Ge(l, l.return, L);
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
          ), n && l === null && v & 4 && ch(c), Nr(c, c.return);
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
  function an(e, t, n, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        bh(
          e,
          t,
          n,
          l
        ), t = t.sibling;
  }
  function bh(e, t, n, l) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        an(
          e,
          t,
          n,
          l
        ), i & 2048 && _r(9, t);
        break;
      case 1:
        an(
          e,
          t,
          n,
          l
        );
        break;
      case 3:
        an(
          e,
          t,
          n,
          l
        ), i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && vr(e)));
        break;
      case 12:
        if (i & 2048) {
          an(
            e,
            t,
            n,
            l
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
            l
          );
        break;
      case 13:
        an(
          e,
          t,
          n,
          l
        );
        break;
      case 23:
        break;
      case 22:
        c = t.stateNode, v = t.alternate, t.memoizedState !== null ? c._visibility & 2 ? an(
          e,
          t,
          n,
          l
        ) : Dr(e, t) : c._visibility & 2 ? an(
          e,
          t,
          n,
          l
        ) : (c._visibility |= 2, Ea(
          e,
          t,
          n,
          l,
          (t.subtreeFlags & 10256) !== 0
        )), i & 2048 && Hc(v, t);
        break;
      case 24:
        an(
          e,
          t,
          n,
          l
        ), i & 2048 && Gc(t.alternate, t);
        break;
      default:
        an(
          e,
          t,
          n,
          l
        );
    }
  }
  function Ea(e, t, n, l, i) {
    for (i = i && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var c = e, v = t, b = n, M = l, L = v.flags;
      switch (v.tag) {
        case 0:
        case 11:
        case 15:
          Ea(
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
          var K = v.stateNode;
          v.memoizedState !== null ? K._visibility & 2 ? Ea(
            c,
            v,
            b,
            M,
            i
          ) : Dr(
            c,
            v
          ) : (K._visibility |= 2, Ea(
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
          Ea(
            c,
            v,
            b,
            M,
            i
          ), i && L & 2048 && Gc(v.alternate, v);
          break;
        default:
          Ea(
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
        var n = e, l = t, i = l.flags;
        switch (l.tag) {
          case 22:
            Dr(n, l), i & 2048 && Hc(
              l.alternate,
              l
            );
            break;
          case 24:
            Dr(n, l), i & 2048 && Gc(l.alternate, l);
            break;
          default:
            Dr(n, l);
        }
        t = t.sibling;
      }
  }
  var jr = 8192;
  function wa(e) {
    if (e.subtreeFlags & jr)
      for (e = e.child; e !== null; )
        xh(e), e = e.sibling;
  }
  function xh(e) {
    switch (e.tag) {
      case 26:
        wa(e), e.flags & jr && e.memoizedState !== null && fb(
          Kt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        wa(e);
        break;
      case 3:
      case 4:
        var t = Kt;
        Kt = Ao(e.stateNode.containerInfo), wa(e), Kt = t;
        break;
      case 22:
        e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = jr, jr = 16777216, wa(e), jr = t) : wa(e));
        break;
      default:
        wa(e);
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
          var l = t[n];
          at = l, wh(
            l,
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
          var l = t[n];
          at = l, wh(
            l,
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
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          vr(n.memoizedState.cache);
      }
      if (l = n.child, l !== null) l.return = n, at = l;
      else
        e: for (n = e; at !== null; ) {
          l = at;
          var i = l.sibling, c = l.return;
          if (hh(l), l === n) {
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
  }, Oy = typeof WeakMap == "function" ? WeakMap : Map, je = 0, Ye = null, we = null, Oe = 0, ze = 0, Tt = null, Wn = !1, Aa = !1, Yc = !1, On = 0, Ke = 0, In = 0, Dl = 0, qc = 0, Yt = 0, Ca = 0, Ur = null, wt = null, Vc = !1, Xc = 0, mo = 1 / 0, ho = null, el = null, ut = 0, tl = null, Ra = null, Ma = 0, Qc = 0, Zc = null, Ah = null, Lr = 0, Kc = null;
  function _t() {
    if ((je & 2) !== 0 && Oe !== 0)
      return Oe & -Oe;
    if (N.T !== null) {
      var e = ha;
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
    (e === Ye && (ze === 2 || ze === 9) || e.cancelPendingCommit !== null) && (Oa(e, 0), nl(
      e,
      Oe,
      Yt,
      !1
    )), Hn(e, n), ((je & 2) === 0 || e !== Ye) && (e === Ye && ((je & 2) === 0 && (Dl |= n), Ke === 4 && nl(
      e,
      Oe,
      Yt,
      !1
    )), rn(e));
  }
  function Rh(e, t, n) {
    if ((je & 6) !== 0) throw Error(o(327));
    var l = !n && (t & 124) === 0 && (t & e.expiredLanes) === 0 || vl(e, t), i = l ? Ny(e, t) : Jc(e, t, !0), c = l;
    do {
      if (i === 0) {
        Aa && !l && nl(e, t, 0, !1);
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
              if (M && (Oa(b, v).flags |= 256), v = Jc(
                b,
                v,
                !1
              ), v !== 2) {
                if (Yc && !M) {
                  b.errorRecoveryDisabledLanes |= c, Dl |= c, i = 4;
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
          Oa(e, 0), nl(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, c = i, c) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              nl(
                l,
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
              l,
              t,
              Yt,
              !Wn
            ), Kl(l, 0, !0) !== 0) break e;
            l.timeoutHandle = tp(
              Mh.bind(
                null,
                l,
                n,
                wt,
                ho,
                Vc,
                t,
                Yt,
                Dl,
                Ca,
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
            l,
            n,
            wt,
            ho,
            Vc,
            t,
            Yt,
            Dl,
            Ca,
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
  function Mh(e, t, n, l, i, c, v, b, M, L, K, J, B, H) {
    if (e.timeoutHandle = -1, J = t.subtreeFlags, (J & 8192 || (J & 16785408) === 16785408) && (Vr = { stylesheets: null, count: 0, unsuspend: sb }, xh(t), J = db(), J !== null)) {
      e.cancelPendingCommit = J(
        zh.bind(
          null,
          e,
          t,
          c,
          n,
          l,
          i,
          v,
          b,
          M,
          K,
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
      l,
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
        for (var l = 0; l < n.length; l++) {
          var i = n[l], c = i.getSnapshot;
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
  function nl(e, t, n, l) {
    t &= ~qc, t &= ~Dl, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var i = t; 0 < i; ) {
      var c = 31 - it(i), v = 1 << c;
      l[c] = -1, i &= ~v;
    }
    n !== 0 && Ai(e, n, t);
  }
  function po() {
    return (je & 6) === 0 ? (kr(0), !1) : !0;
  }
  function Pc() {
    if (we !== null) {
      if (ze === 0)
        var e = we.return;
      else
        e = we, xn = Rl = null, fc(e), xa = null, Mr = 0, e = we;
      for (; e !== null; )
        ih(e.alternate, e), e = e.return;
      we = null;
    }
  }
  function Oa(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, Ky(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Pc(), Ye = e, we = n = gn(e.current, null), Oe = t, ze = 0, Tt = null, Wn = !1, Aa = vl(e, t), Yc = !1, Ca = Yt = qc = Dl = In = Ke = 0, wt = Ur = null, Vc = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var i = 31 - it(l), c = 1 << i;
        t |= e[i], l &= ~c;
      }
    return On = t, Li(), n;
  }
  function Oh(e, t) {
    xe = null, N.H = to, t === yr || t === Qi ? (t = Qd(), ze = 3) : t === qd ? (t = Qd(), ze = 4) : ze = t === Zm ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Tt = t, we === null && (Ke = 1, io(
      e,
      Lt(t, e.current)
    ));
  }
  function Th() {
    var e = N.H;
    return N.H = to, e === null ? to : e;
  }
  function _h() {
    var e = N.A;
    return N.A = My, e;
  }
  function Fc() {
    Ke = 4, Wn || (Oe & 4194048) !== Oe && Gt.current !== null || (Aa = !0), (In & 134217727) === 0 && (Dl & 134217727) === 0 || Ye === null || nl(
      Ye,
      Oe,
      Yt,
      !1
    );
  }
  function Jc(e, t, n) {
    var l = je;
    je |= 2;
    var i = Th(), c = _h();
    (Ye !== e || Oe !== t) && (ho = null, Oa(e, t)), t = !1;
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
              if (ze = 0, Tt = null, Ta(e, b, M, L), n && Aa) {
                v = 0;
                break e;
              }
              break;
            default:
              L = ze, ze = 0, Tt = null, Ta(e, b, M, L);
          }
        }
        _y(), v = Ke;
        break;
      } catch (K) {
        Oh(e, K);
      }
    while (!0);
    return t && e.shellSuspendCounter++, xn = Rl = null, je = l, N.H = i, N.A = c, we === null && (Ye = null, Oe = 0, Li()), v;
  }
  function _y() {
    for (; we !== null; ) Nh(we);
  }
  function Ny(e, t) {
    var n = je;
    je |= 2;
    var l = Th(), i = _h();
    Ye !== e || Oe !== t ? (ho = null, mo = Qe() + 500, Oa(e, t)) : Aa = vl(
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
              ze = 0, Tt = null, Ta(e, t, c, 1);
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
              Vd(c) ? (ze = 0, Tt = null, Dh(t)) : (ze = 0, Tt = null, Ta(e, t, c, 7));
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
              ze = 0, Tt = null, Ta(e, t, c, 5);
              break;
            case 6:
              ze = 0, Tt = null, Ta(e, t, c, 6);
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
      } catch (K) {
        Oh(e, K);
      }
    while (!0);
    return xn = Rl = null, N.H = l, N.A = i, je = n, we !== null ? 0 : (Ye = null, Oe = 0, Li(), Ke);
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
  function Ta(e, t, n, l) {
    xn = Rl = null, fc(t), xa = null, Mr = 0;
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
    t.flags & 32768 ? (Ne || l === 1 ? e = !0 : Aa || (Oe & 536870912) !== 0 ? e = !1 : (Wn = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Gt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), jh(t, e)) : vo(t);
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
  function zh(e, t, n, l, i, c, v, b, M) {
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
      ), e === Ye && (we = Ye = null, Oe = 0), Ra = t, tl = e, Ma = n, Qc = c, Zc = i, Ah = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Ly(It, function() {
        return Hh(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = N.T, N.T = null, i = V.p, V.p = 2, v = je, je |= 4;
        try {
          Cy(e, t, n);
        } finally {
          je = v, V.p = i, N.T = l;
        }
      }
      ut = 1, Uh(), Lh(), kh();
    }
  }
  function Uh() {
    if (ut === 1) {
      ut = 0;
      var e = tl, t = Ra, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = N.T, N.T = null;
        var l = V.p;
        V.p = 2;
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
              var L = M.start, K = M.end;
              if (K === void 0 && (K = L), "selectionStart" in b)
                b.selectionStart = L, b.selectionEnd = Math.min(
                  K,
                  b.value.length
                );
              else {
                var J = b.ownerDocument || document, B = J && J.defaultView || window;
                if (B.getSelection) {
                  var H = B.getSelection(), ye = b.textContent.length, he = Math.min(M.start, ye), ke = M.end === void 0 ? he : Math.min(M.end, ye);
                  !H.extend && he > ke && (v = ke, ke = he, he = v);
                  var D = Sd(
                    b,
                    he
                  ), _ = Sd(
                    b,
                    ke
                  );
                  if (D && _ && (H.rangeCount !== 1 || H.anchorNode !== D.node || H.anchorOffset !== D.offset || H.focusNode !== _.node || H.focusOffset !== _.offset)) {
                    var U = J.createRange();
                    U.setStart(D.node, D.offset), H.removeAllRanges(), he > ke ? (H.addRange(U), H.extend(_.node, _.offset)) : (U.setEnd(_.node, _.offset), H.addRange(U));
                  }
                }
              }
            }
            for (J = [], H = b; H = H.parentNode; )
              H.nodeType === 1 && J.push({
                element: H,
                left: H.scrollLeft,
                top: H.scrollTop
              });
            for (typeof b.focus == "function" && b.focus(), b = 0; b < J.length; b++) {
              var F = J[b];
              F.element.scrollLeft = F.left, F.element.scrollTop = F.top;
            }
          }
          To = !!os, us = os = null;
        } finally {
          je = i, V.p = l, N.T = n;
        }
      }
      e.current = t, ut = 2;
    }
  }
  function Lh() {
    if (ut === 2) {
      ut = 0;
      var e = tl, t = Ra, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = N.T, N.T = null;
        var l = V.p;
        V.p = 2;
        var i = je;
        je |= 4;
        try {
          mh(e, t.alternate, t);
        } finally {
          je = i, V.p = l, N.T = n;
        }
      }
      ut = 3;
    }
  }
  function kh() {
    if (ut === 4 || ut === 3) {
      ut = 0, yt();
      var e = tl, t = Ra, n = Ma, l = Ah;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? ut = 5 : (ut = 0, Ra = tl = null, Bh(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (i === 0 && (el = null), er(n), t = t.stateNode, ft && typeof ft.onCommitFiberRoot == "function")
        try {
          ft.onCommitFiberRoot(
            pl,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        t = N.T, i = V.p, V.p = 2, N.T = null;
        try {
          for (var c = e.onRecoverableError, v = 0; v < l.length; v++) {
            var b = l[v];
            c(b.value, {
              componentStack: b.stack
            });
          }
        } finally {
          N.T = t, V.p = i;
        }
      }
      (Ma & 3) !== 0 && go(), rn(e), i = e.pendingLanes, (n & 4194090) !== 0 && (i & 42) !== 0 ? e === Kc ? Lr++ : (Lr = 0, Kc = e) : Lr = 0, kr(0);
    }
  }
  function Bh(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, vr(t)));
  }
  function go(e) {
    return Uh(), Lh(), kh(), Hh();
  }
  function Hh() {
    if (ut !== 5) return !1;
    var e = tl, t = Qc;
    Qc = 0;
    var n = er(Ma), l = N.T, i = V.p;
    try {
      V.p = 32 > n ? 32 : n, N.T = null, n = Zc, Zc = null;
      var c = tl, v = Ma;
      if (ut = 0, Ra = tl = null, Ma = 0, (je & 6) !== 0) throw Error(o(331));
      var b = je;
      if (je |= 4, Eh(c.current), bh(
        c,
        c.current,
        v,
        n
      ), je = b, kr(0, !1), ft && typeof ft.onPostCommitFiberRoot == "function")
        try {
          ft.onPostCommitFiberRoot(pl, c);
        } catch {
        }
      return !0;
    } finally {
      V.p = i, N.T = l, Bh(e, t);
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
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (el === null || !el.has(l))) {
            e = Lt(n, e), n = Xm(2), l = Qn(t, n, 2), l !== null && (Qm(
              n,
              l,
              t,
              e
            ), Hn(l, 2), rn(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function $c(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Oy();
      var i = /* @__PURE__ */ new Set();
      l.set(t, i);
    } else
      i = l.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), l.set(t, i));
    i.has(n) || (Yc = !0, i.add(n), e = jy.bind(null, e, t, n), t.then(e, e));
  }
  function jy(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ye === e && (Oe & n) === n && (Ke === 4 || Ke === 3 && (Oe & 62914560) === Oe && 300 > Qe() - Xc ? (je & 2) === 0 && Oa(e, 0) : qc |= n, Ca === Oe && (Ca = 0)), rn(e);
  }
  function Yh(e, t) {
    t === 0 && (t = Ei()), e = sa(e, t), e !== null && (Hn(e, t), rn(e));
  }
  function zy(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Yh(e, n);
  }
  function Uy(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode, i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    l !== null && l.delete(t), Yh(e, n);
  }
  function Ly(e, t) {
    return Re(e, t);
  }
  var yo = null, _a = null, Wc = !1, bo = !1, Ic = !1, jl = 0;
  function rn(e) {
    e !== _a && e.next === null && (_a === null ? yo = _a = e : _a = _a.next = e), bo = !0, Wc || (Wc = !0, By());
  }
  function kr(e, t) {
    if (!Ic && bo) {
      Ic = !0;
      do
        for (var n = !1, l = yo; l !== null; ) {
          if (e !== 0) {
            var i = l.pendingLanes;
            if (i === 0) var c = 0;
            else {
              var v = l.suspendedLanes, b = l.pingedLanes;
              c = (1 << 31 - it(42 | e) + 1) - 1, c &= i & ~(v & ~b), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
            }
            c !== 0 && (n = !0, Qh(l, c));
          } else
            c = Oe, c = Kl(
              l,
              l === Ye ? c : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (c & 3) === 0 || vl(l, c) || (n = !0, Qh(l, c));
          l = l.next;
        }
      while (n);
      Ic = !1;
    }
  }
  function ky() {
    qh();
  }
  function qh() {
    bo = Wc = !1;
    var e = 0;
    jl !== 0 && (Zy() && (e = jl), jl = 0);
    for (var t = Qe(), n = null, l = yo; l !== null; ) {
      var i = l.next, c = Vh(l, t);
      c === 0 ? (l.next = null, n === null ? yo = i : n.next = i, i === null && (_a = n)) : (n = l, (e !== 0 || (c & 3) !== 0) && (bo = !0)), l = i;
    }
    kr(e);
  }
  function Vh(e, t) {
    for (var n = e.suspendedLanes, l = e.pingedLanes, i = e.expirationTimes, c = e.pendingLanes & -62914561; 0 < c; ) {
      var v = 31 - it(c), b = 1 << v, M = i[v];
      M === -1 ? ((b & n) === 0 || (b & l) !== 0) && (i[v] = hu(b, t)) : M <= t && (e.expiredLanes |= b), c &= ~b;
    }
    if (t = Ye, n = Oe, n = Kl(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, n === 0 || e === t && (ze === 2 || ze === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && He(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || vl(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (l !== null && He(l), er(n)) {
        case 2:
        case 8:
          n = Wt;
          break;
        case 32:
          n = It;
          break;
        case 268435456:
          n = Ql;
          break;
        default:
          n = It;
      }
      return l = Xh.bind(null, e), n = Re(n, l), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return l !== null && l !== null && He(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Xh(e, t) {
    if (ut !== 0 && ut !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (go() && e.callbackNode !== n)
      return null;
    var l = Oe;
    return l = Kl(
      e,
      e === Ye ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (Rh(e, l, t), Vh(e, Qe()), e.callbackNode != null && e.callbackNode === n ? Xh.bind(null, e) : null);
  }
  function Qh(e, t) {
    if (go()) return null;
    Rh(e, t, !0);
  }
  function By() {
    Py(function() {
      (je & 6) !== 0 ? Re(
        st,
        ky
      ) : qh();
    });
  }
  function es() {
    return jl === 0 && (jl = Wa()), jl;
  }
  function Zh(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ti("" + e);
  }
  function Kh(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function Hy(e, t, n, l, i) {
    if (t === "submit" && n && n.stateNode === i) {
      var c = Zh(
        (i[bt] || null).action
      ), v = l.submitter;
      v && (t = (t = v[bt] || null) ? Zh(t.formAction) : v.getAttribute("formAction"), t !== null && (c = t, v = null));
      var b = new ji(
        "action",
        "action",
        null,
        l,
        i
      );
      e.push({
        event: b,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (jl !== 0) {
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
  Zt(Rd, "onAnimationEnd"), Zt(Md, "onAnimationIteration"), Zt(Od, "onAnimationStart"), Zt("dblclick", "onDoubleClick"), Zt("focusin", "onFocus"), Zt("focusout", "onBlur"), Zt(ay, "onTransitionRun"), Zt(ry, "onTransitionStart"), Zt(iy, "onTransitionCancel"), Zt(Td, "onTransitionEnd"), ea("onMouseEnter", ["mouseout", "mouseover"]), ea("onMouseLeave", ["mouseout", "mouseover"]), ea("onPointerEnter", ["pointerout", "pointerover"]), ea("onPointerLeave", ["pointerout", "pointerover"]), gl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), gl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), gl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), gl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), gl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), gl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Br = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), qy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Br)
  );
  function Ph(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n], i = l.event;
      l = l.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var v = l.length - 1; 0 <= v; v--) {
            var b = l[v], M = b.instance, L = b.currentTarget;
            if (b = b.listener, M !== c && i.isPropagationStopped())
              break e;
            c = b, i.currentTarget = L;
            try {
              c(i);
            } catch (K) {
              ro(K);
            }
            i.currentTarget = null, c = M;
          }
        else
          for (v = 0; v < l.length; v++) {
            if (b = l[v], M = b.instance, L = b.currentTarget, b = b.listener, M !== c && i.isPropagationStopped())
              break e;
            c = b, i.currentTarget = L;
            try {
              c(i);
            } catch (K) {
              ro(K);
            }
            i.currentTarget = null, c = M;
          }
      }
    }
  }
  function Ae(e, t) {
    var n = t[pu];
    n === void 0 && (n = t[pu] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    n.has(l) || (Fh(t, e, 2, !1), n.add(l));
  }
  function ls(e, t, n) {
    var l = 0;
    t && (l |= 4), Fh(
      n,
      e,
      l,
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
  function Fh(e, t, n, l) {
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
    ), i = void 0, !Ru || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), l ? i !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
      passive: i
    }) : e.addEventListener(t, n, !1);
  }
  function rs(e, t, n, l, i) {
    var c = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var v = l.tag;
        if (v === 3 || v === 4) {
          var b = l.stateNode.containerInfo;
          if (b === i) break;
          if (v === 4)
            for (v = l.return; v !== null; ) {
              var M = v.tag;
              if ((M === 3 || M === 4) && v.stateNode.containerInfo === i)
                return;
              v = v.return;
            }
          for (; b !== null; ) {
            if (v = $l(b), v === null) return;
            if (M = v.tag, M === 5 || M === 6 || M === 26 || M === 27) {
              l = c = v;
              continue e;
            }
            b = b.parentNode;
          }
        }
        l = l.return;
      }
    nd(function() {
      var L = c, K = Au(n), J = [];
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
          var he = (t & 4) !== 0, ke = !he && (e === "scroll" || e === "scrollend"), D = he ? B !== null ? B + "Capture" : null : B;
          he = [];
          for (var _ = L, U; _ !== null; ) {
            var F = _;
            if (U = F.stateNode, F = F.tag, F !== 5 && F !== 26 && F !== 27 || U === null || D === null || (F = lr(_, D), F != null && he.push(
              Hr(_, F, U)
            )), ke) break;
            _ = _.return;
          }
          0 < he.length && (B = new H(
            B,
            ye,
            null,
            n,
            K
          ), J.push({ event: B, listeners: he }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (B = e === "mouseover" || e === "pointerover", H = e === "mouseout" || e === "pointerout", B && n !== wu && (ye = n.relatedTarget || n.fromElement) && ($l(ye) || ye[Jl]))
            break e;
          if ((H || B) && (B = K.window === K ? K : (B = K.ownerDocument) ? B.defaultView || B.parentWindow : window, H ? (ye = n.relatedTarget || n.toElement, H = L, ye = ye ? $l(ye) : null, ye !== null && (ke = f(ye), he = ye.tag, ye !== ke || he !== 5 && he !== 27 && he !== 6) && (ye = null)) : (H = null, ye = L), H !== ye)) {
            if (he = rd, F = "onMouseLeave", D = "onMouseEnter", _ = "mouse", (e === "pointerout" || e === "pointerover") && (he = od, F = "onPointerLeave", D = "onPointerEnter", _ = "pointer"), ke = H == null ? B : nr(H), U = ye == null ? B : nr(ye), B = new he(
              F,
              _ + "leave",
              H,
              n,
              K
            ), B.target = ke, B.relatedTarget = U, F = null, $l(K) === L && (he = new he(
              D,
              _ + "enter",
              ye,
              n,
              K
            ), he.target = U, he.relatedTarget = ke, F = he), ke = F, H && ye)
              t: {
                for (he = H, D = ye, _ = 0, U = he; U; U = Na(U))
                  _++;
                for (U = 0, F = D; F; F = Na(F))
                  U++;
                for (; 0 < _ - U; )
                  he = Na(he), _--;
                for (; 0 < U - _; )
                  D = Na(D), U--;
                for (; _--; ) {
                  if (he === D || D !== null && he === D.alternate)
                    break t;
                  he = Na(he), D = Na(D);
                }
                he = null;
              }
            else he = null;
            H !== null && Jh(
              J,
              B,
              H,
              he,
              !1
            ), ye !== null && ke !== null && Jh(
              J,
              ke,
              ye,
              he,
              !0
            );
          }
        }
        e: {
          if (B = L ? nr(L) : window, H = B.nodeName && B.nodeName.toLowerCase(), H === "select" || H === "input" && B.type === "file")
            var ie = pd;
          else if (md(B))
            if (vd)
              ie = ty;
            else {
              ie = I0;
              var Ee = W0;
            }
          else
            H = B.nodeName, !H || H.toLowerCase() !== "input" || B.type !== "checkbox" && B.type !== "radio" ? L && Eu(L.elementType) && (ie = pd) : ie = ey;
          if (ie && (ie = ie(e, L))) {
            hd(
              J,
              ie,
              n,
              K
            );
            break e;
          }
          Ee && Ee(e, B, L), e === "focusout" && L && B.type === "number" && L.memoizedProps.value != null && Su(B, "number", B.value);
        }
        switch (Ee = L ? nr(L) : window, e) {
          case "focusin":
            (md(Ee) || Ee.contentEditable === "true") && (oa = Ee, Lu = L, fr = null);
            break;
          case "focusout":
            fr = Lu = oa = null;
            break;
          case "mousedown":
            ku = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ku = !1, Ad(J, n, K);
            break;
          case "selectionchange":
            if (ly) break;
          case "keydown":
          case "keyup":
            Ad(J, n, K);
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
          ia ? fd(e, n) && (pe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (pe = "onCompositionStart");
        pe && (ud && n.locale !== "ko" && (ia || pe !== "onCompositionStart" ? pe === "onCompositionEnd" && ia && (fe = ld()) : (Yn = K, Mu = "value" in Yn ? Yn.value : Yn.textContent, ia = !0)), Ee = So(L, pe), 0 < Ee.length && (pe = new id(
          pe,
          e,
          null,
          n,
          K
        ), J.push({ event: pe, listeners: Ee }), fe ? pe.data = fe : (fe = dd(n), fe !== null && (pe.data = fe)))), (fe = K0 ? P0(e, n) : F0(e, n)) && (pe = So(L, "onBeforeInput"), 0 < pe.length && (Ee = new id(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          K
        ), J.push({
          event: Ee,
          listeners: pe
        }), Ee.data = fe)), Hy(
          J,
          e,
          L,
          n,
          K
        );
      }
      Ph(J, t);
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
    for (var n = t + "Capture", l = []; e !== null; ) {
      var i = e, c = i.stateNode;
      if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || c === null || (i = lr(e, n), i != null && l.unshift(
        Hr(e, i, c)
      ), i = lr(e, t), i != null && l.push(
        Hr(e, i, c)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function Na(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Jh(e, t, n, l, i) {
    for (var c = t._reactName, v = []; n !== null && n !== l; ) {
      var b = n, M = b.alternate, L = b.stateNode;
      if (b = b.tag, M !== null && M === l) break;
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
  function Le(e, t, n, l, i, c) {
    switch (n) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || la(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && la(e, "" + l);
        break;
      case "className":
        Ri(e, "class", l);
        break;
      case "tabIndex":
        Ri(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ri(e, n, l);
        break;
      case "style":
        ed(e, l, c);
        break;
      case "data":
        if (t !== "object") {
          Ri(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        l = Ti("" + l), e.setAttribute(n, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
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
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        l = Ti("" + l), e.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (e.onclick = Eo);
        break;
      case "onScroll":
        l != null && Ae("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ae("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(o(61));
          if (n = l.__html, n != null) {
            if (i.children != null) throw Error(o(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
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
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        n = Ti("" + l), e.setAttributeNS(
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
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "" + l) : e.removeAttribute(n);
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
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0 ? e.setAttribute(n, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, l) : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(n, l) : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(n) : e.setAttribute(n, l);
        break;
      case "popover":
        Ae("beforetoggle", e), Ae("toggle", e), Ci(e, "popover", l);
        break;
      case "xlinkActuate":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        pn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        pn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        pn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        Ci(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = x0.get(n) || n, Ci(e, n, l));
    }
  }
  function is(e, t, n, l, i, c) {
    switch (n) {
      case "style":
        ed(e, l, c);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(o(61));
          if (n = l.__html, n != null) {
            if (i.children != null) throw Error(o(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string" ? la(e, l) : (typeof l == "number" || typeof l == "bigint") && la(e, "" + l);
        break;
      case "onScroll":
        l != null && Ae("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ae("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = Eo);
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
            if (n[0] === "o" && n[1] === "n" && (i = n.endsWith("Capture"), t = n.slice(2, i ? n.length - 7 : void 0), c = e[bt] || null, c = c != null ? c[n] : null, typeof c == "function" && e.removeEventListener(t, c, i), typeof l == "function")) {
              typeof c != "function" && c !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, l, i);
              break e;
            }
            n in e ? e[n] = l : l === !0 ? e.setAttribute(n, "") : Ci(e, n, l);
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
        var l = !1, i = !1, c;
        for (c in n)
          if (n.hasOwnProperty(c)) {
            var v = n[c];
            if (v != null)
              switch (c) {
                case "src":
                  l = !0;
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
        i && Le(e, t, "srcSet", n.srcSet, n, null), l && Le(e, t, "src", n.src, n, null);
        return;
      case "input":
        Ae("invalid", e);
        var b = c = v = i = null, M = null, L = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var K = n[l];
            if (K != null)
              switch (l) {
                case "name":
                  i = K;
                  break;
                case "type":
                  v = K;
                  break;
                case "checked":
                  M = K;
                  break;
                case "defaultChecked":
                  L = K;
                  break;
                case "value":
                  c = K;
                  break;
                case "defaultValue":
                  b = K;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (K != null)
                    throw Error(o(137, t));
                  break;
                default:
                  Le(e, t, l, K, n, null);
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
        Ae("invalid", e), l = v = c = null;
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
                l = b;
              default:
                Le(e, t, i, b, n, null);
            }
        t = c, n = v, e.multiple = !!l, t != null ? na(e, !!l, t, !1) : n != null && na(e, !!l, n, !0);
        return;
      case "textarea":
        Ae("invalid", e), c = i = l = null;
        for (v in n)
          if (n.hasOwnProperty(v) && (b = n[v], b != null))
            switch (v) {
              case "value":
                l = b;
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
        Wf(e, l, i, c), Mi(e);
        return;
      case "option":
        for (M in n)
          if (n.hasOwnProperty(M) && (l = n[M], l != null))
            switch (M) {
              case "selected":
                e.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Le(e, t, M, l, n, null);
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
        for (l = 0; l < Br.length; l++)
          Ae(Br[l], e);
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
          if (n.hasOwnProperty(L) && (l = n[L], l != null))
            switch (L) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                Le(e, t, L, l, n, null);
            }
        return;
      default:
        if (Eu(t)) {
          for (K in n)
            n.hasOwnProperty(K) && (l = n[K], l !== void 0 && is(
              e,
              t,
              K,
              l,
              n,
              void 0
            ));
          return;
        }
    }
    for (b in n)
      n.hasOwnProperty(b) && (l = n[b], l != null && Le(e, t, b, l, n, null));
  }
  function Qy(e, t, n, l) {
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
        var i = null, c = null, v = null, b = null, M = null, L = null, K = null;
        for (H in n) {
          var J = n[H];
          if (n.hasOwnProperty(H) && J != null)
            switch (H) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                M = J;
              default:
                l.hasOwnProperty(H) || Le(e, t, H, null, l, J);
            }
        }
        for (var B in l) {
          var H = l[B];
          if (J = n[B], l.hasOwnProperty(B) && (H != null || J != null))
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
                K = H;
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
                H !== J && Le(
                  e,
                  t,
                  B,
                  H,
                  l,
                  J
                );
            }
        }
        xu(
          e,
          v,
          b,
          M,
          L,
          K,
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
                l.hasOwnProperty(c) || Le(
                  e,
                  t,
                  c,
                  null,
                  l,
                  M
                );
            }
        for (i in l)
          if (c = l[i], M = n[i], l.hasOwnProperty(i) && (c != null || M != null))
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
                  l,
                  M
                );
            }
        t = b, n = v, l = H, B != null ? na(e, !!n, B, !1) : !!l != !!n && (t != null ? na(e, !!n, t, !0) : na(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        H = B = null;
        for (b in n)
          if (i = n[b], n.hasOwnProperty(b) && i != null && !l.hasOwnProperty(b))
            switch (b) {
              case "value":
                break;
              case "children":
                break;
              default:
                Le(e, t, b, null, l, i);
            }
        for (v in l)
          if (i = l[v], c = n[v], l.hasOwnProperty(v) && (i != null || c != null))
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
                i !== c && Le(e, t, v, i, l, c);
            }
        $f(e, B, H);
        return;
      case "option":
        for (var ye in n)
          if (B = n[ye], n.hasOwnProperty(ye) && B != null && !l.hasOwnProperty(ye))
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
                  l,
                  B
                );
            }
        for (M in l)
          if (B = l[M], H = n[M], l.hasOwnProperty(M) && B !== H && (B != null || H != null))
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
                  l,
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
          B = n[he], n.hasOwnProperty(he) && B != null && !l.hasOwnProperty(he) && Le(e, t, he, null, l, B);
        for (L in l)
          if (B = l[L], H = n[L], l.hasOwnProperty(L) && B !== H && (B != null || H != null))
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
                  l,
                  H
                );
            }
        return;
      default:
        if (Eu(t)) {
          for (var ke in n)
            B = n[ke], n.hasOwnProperty(ke) && B !== void 0 && !l.hasOwnProperty(ke) && is(
              e,
              t,
              ke,
              void 0,
              l,
              B
            );
          for (K in l)
            B = l[K], H = n[K], !l.hasOwnProperty(K) || B === H || B === void 0 && H === void 0 || is(
              e,
              t,
              K,
              B,
              l,
              H
            );
          return;
        }
    }
    for (var D in n)
      B = n[D], n.hasOwnProperty(D) && B != null && !l.hasOwnProperty(D) && Le(e, t, D, null, l, B);
    for (J in l)
      B = l[J], H = n[J], !l.hasOwnProperty(J) || B === H || B == null && H == null || Le(e, t, J, B, l, H);
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
    var n = t, l = 0, i = 0;
    do {
      var c = n.nextSibling;
      if (e.removeChild(n), c && c.nodeType === 8)
        if (n = c.data, n === "/$") {
          if (0 < l && 8 > l) {
            n = l;
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
          n === "$" || n === "$?" || n === "$!" ? i++ : l = n.charCodeAt(0) - 48;
      else l = 0;
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
  function Jy(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var i = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
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
      var l = function() {
        t(), n.removeEventListener("DOMContentLoaded", l);
      };
      n.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
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
  var Tn = V.d;
  V.d = {
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
    var t = Wl(e);
    t !== null && t.tag === 5 && t.type === "form" ? Rm(t) : Tn.r(e);
  }
  var Da = typeof document > "u" ? null : document;
  function op(e, t, n) {
    var l = Da;
    if (l && typeof t == "string" && t) {
      var i = Ut(t);
      i = 'link[rel="' + e + '"][href="' + i + '"]', typeof n == "string" && (i += '[crossorigin="' + n + '"]'), ip.has(i) || (ip.add(i), e = { rel: e, crossOrigin: n, href: t }, l.querySelector(i) === null && (t = l.createElement("link"), ct(t, "link", e), nt(t), l.head.appendChild(t)));
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
    var l = Da;
    if (l && e && t) {
      var i = 'link[rel="preload"][as="' + Ut(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (i += '[imagesrcset="' + Ut(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (i += '[imagesizes="' + Ut(
        n.imageSizes
      ) + '"]')) : i += '[href="' + Ut(e) + '"]';
      var c = i;
      switch (t) {
        case "style":
          c = ja(e);
          break;
        case "script":
          c = za(e);
      }
      qt.has(c) || (e = g(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), qt.set(c, e), l.querySelector(i) !== null || t === "style" && l.querySelector(Yr(c)) || t === "script" && l.querySelector(qr(c)) || (t = l.createElement("link"), ct(t, "link", e), nt(t), l.head.appendChild(t)));
    }
  }
  function ab(e, t) {
    Tn.m(e, t);
    var n = Da;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", i = 'link[rel="modulepreload"][as="' + Ut(l) + '"][href="' + Ut(e) + '"]', c = i;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = za(e);
      }
      if (!qt.has(c) && (e = g({ rel: "modulepreload", href: e }, t), qt.set(c, e), n.querySelector(i) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(qr(c)))
              return;
        }
        l = n.createElement("link"), ct(l, "link", e), nt(l), n.head.appendChild(l);
      }
    }
  }
  function rb(e, t, n) {
    Tn.S(e, t, n);
    var l = Da;
    if (l && e) {
      var i = Il(l).hoistableStyles, c = ja(e);
      t = t || "default";
      var v = i.get(c);
      if (!v) {
        var b = { loading: 0, preload: null };
        if (v = l.querySelector(
          Yr(c)
        ))
          b.loading = 5;
        else {
          e = g(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = qt.get(c)) && hs(e, n);
          var M = v = l.createElement("link");
          nt(M), ct(M, "link", e), M._p = new Promise(function(L, K) {
            M.onload = L, M.onerror = K;
          }), M.addEventListener("load", function() {
            b.loading |= 1;
          }), M.addEventListener("error", function() {
            b.loading |= 2;
          }), b.loading |= 4, Co(v, t, l);
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
    var n = Da;
    if (n && e) {
      var l = Il(n).hoistableScripts, i = za(e), c = l.get(i);
      c || (c = n.querySelector(qr(i)), c || (e = g({ src: e, async: !0 }, t), (t = qt.get(i)) && ps(e, t), c = n.createElement("script"), nt(c), ct(c, "link", e), n.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, l.set(i, c));
    }
  }
  function ob(e, t) {
    Tn.M(e, t);
    var n = Da;
    if (n && e) {
      var l = Il(n).hoistableScripts, i = za(e), c = l.get(i);
      c || (c = n.querySelector(qr(i)), c || (e = g({ src: e, async: !0, type: "module" }, t), (t = qt.get(i)) && ps(e, t), c = n.createElement("script"), nt(c), ct(c, "link", e), n.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, l.set(i, c));
    }
  }
  function up(e, t, n, l) {
    var i = (i = ce.current) ? Ao(i) : null;
    if (!i) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = ja(n.href), n = Il(
          i
        ).hoistableStyles, l = n.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = ja(n.href);
          var c = Il(
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
          ))), t && l === null)
            throw Error(o(528, ""));
          return v;
        }
        if (t && l !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = za(n), n = Il(
          i
        ).hoistableScripts, l = n.get(t), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, e));
    }
  }
  function ja(e) {
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
  function ub(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), ct(t, "link", n), nt(t), e.head.appendChild(t));
  }
  function za(e) {
    return '[src="' + Ut(e) + '"]';
  }
  function qr(e) {
    return "script[async]" + e;
  }
  function sp(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + Ut(n.href) + '"]'
          );
          if (l)
            return t.instance = l, nt(l), l;
          var i = g({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), nt(l), ct(l, "style", i), Co(l, n.precedence, e), t.instance = l;
        case "stylesheet":
          i = ja(n.href);
          var c = e.querySelector(
            Yr(i)
          );
          if (c)
            return t.state.loading |= 4, t.instance = c, nt(c), c;
          l = cp(n), (i = qt.get(i)) && hs(l, i), c = (e.ownerDocument || e).createElement("link"), nt(c);
          var v = c;
          return v._p = new Promise(function(b, M) {
            v.onload = b, v.onerror = M;
          }), ct(c, "link", l), t.state.loading |= 4, Co(c, n.precedence, e), t.instance = c;
        case "script":
          return c = za(n.src), (i = e.querySelector(
            qr(c)
          )) ? (t.instance = i, nt(i), i) : (l = n, (i = qt.get(c)) && (l = g({}, n), ps(l, i)), e = e.ownerDocument || e, i = e.createElement("script"), nt(i), ct(i, "link", l), e.head.appendChild(i), t.instance = i);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, Co(l, n.precedence, e));
    return t.instance;
  }
  function Co(e, t, n) {
    for (var l = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), i = l.length ? l[l.length - 1] : null, c = i, v = 0; v < l.length; v++) {
      var b = l[v];
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
      var l = /* @__PURE__ */ new Map(), i = Ro = /* @__PURE__ */ new Map();
      i.set(n, l);
    } else
      i = Ro, l = i.get(n), l || (l = /* @__PURE__ */ new Map(), i.set(n, l));
    if (l.has(e)) return l;
    for (l.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
      var c = n[i];
      if (!(c[tr] || c[dt] || e === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
        var v = c.getAttribute(t) || "";
        v = e + v;
        var b = l.get(v);
        b ? b.push(c) : l.set(v, [c]);
      }
    }
    return l;
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
    var l = Vr;
    if (t.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var i = ja(n.href), c = e.querySelector(
          Yr(i)
        );
        if (c) {
          e = c._p, e !== null && typeof e == "object" && typeof e.then == "function" && (l.count++, l = Mo.bind(l), e.then(l, l)), t.state.loading |= 4, t.instance = c, nt(c);
          return;
        }
        c = e.ownerDocument || e, n = cp(n), (i = qt.get(i)) && hs(n, i), c = c.createElement("link"), nt(c);
        var v = c;
        v._p = new Promise(function(b, M) {
          v.onload = b, v.onerror = M;
        }), ct(c, "link", n), t.instance = c;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (l.count++, t = Mo.bind(l), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  function db() {
    if (Vr === null) throw Error(o(475));
    var e = Vr;
    return e.stylesheets && e.count === 0 && vs(e, e.stylesheets), 0 < e.count ? function(t) {
      var n = setTimeout(function() {
        if (e.stylesheets && vs(e, e.stylesheets), e.unsuspend) {
          var l = e.unsuspend;
          e.unsuspend = null, l();
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
      if (n) var l = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Oo.set(e, n);
        for (var i = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), c = 0; c < i.length; c++) {
          var v = i[c];
          (v.nodeName === "LINK" || v.getAttribute("media") !== "not all") && (n.set(v.dataset.precedence, v), l = v);
        }
        l && n.set(null, l);
      }
      i = t.instance, v = i.getAttribute("data-precedence"), c = n.get(v) || l, c === l && n.set(null, i), n.set(v, i), this.count++, l = Mo.bind(this), i.addEventListener("load", l), i.addEventListener("error", l), c ? c.parentNode.insertBefore(i, c.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Xr = {
    $$typeof: j,
    Provider: null,
    Consumer: null,
    _currentValue: k,
    _currentValue2: k,
    _threadCount: 0
  };
  function hb(e, t, n, l, i, c, v, b) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Pl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pl(0), this.hiddenUpdates = Pl(null), this.identifierPrefix = l, this.onUncaughtError = i, this.onCaughtError = c, this.onRecoverableError = v, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = b, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function hp(e, t, n, l, i, c, v, b, M, L, K, J) {
    return e = new hb(
      e,
      t,
      n,
      v,
      b,
      M,
      L,
      J
    ), t = 1, c === !0 && (t |= 24), c = Rt(3, null, null, t), e.current = c, c.stateNode = e, t = $u(), t.refCount++, e.pooledCache = t, t.refCount++, c.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: t
    }, tc(c), e;
  }
  function pp(e) {
    return e ? (e = fa, e) : fa;
  }
  function vp(e, t, n, l, i, c) {
    i = pp(i), l.context === null ? l.context = i : l.pendingContext = i, l = Xn(t), l.payload = { element: n }, c = c === void 0 ? null : c, c !== null && (l.callback = c), n = Qn(e, l, t), n !== null && (Nt(n, e, t), xr(n, e, t));
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
      var t = sa(e, 67108864);
      t !== null && Nt(t, e, 67108864), gs(e, 67108864);
    }
  }
  var To = !0;
  function pb(e, t, n, l) {
    var i = N.T;
    N.T = null;
    var c = V.p;
    try {
      V.p = 2, ys(e, t, n, l);
    } finally {
      V.p = c, N.T = i;
    }
  }
  function vb(e, t, n, l) {
    var i = N.T;
    N.T = null;
    var c = V.p;
    try {
      V.p = 8, ys(e, t, n, l);
    } finally {
      V.p = c, N.T = i;
    }
  }
  function ys(e, t, n, l) {
    if (To) {
      var i = bs(l);
      if (i === null)
        rs(
          e,
          t,
          l,
          _o,
          n
        ), xp(e, l);
      else if (yb(
        i,
        e,
        t,
        n,
        l
      ))
        l.stopPropagation();
      else if (xp(e, l), t & 4 && -1 < gb.indexOf(e)) {
        for (; i !== null; ) {
          var c = Wl(i);
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
                    rn(c), (je & 6) === 0 && (mo = Qe() + 500, kr(0));
                  }
                }
                break;
              case 13:
                b = sa(c, 2), b !== null && Nt(b, c, 2), po(), gs(c, 2);
            }
          if (c = bs(l), c === null && rs(
            e,
            t,
            l,
            _o,
            n
          ), c === i) break;
          i = c;
        }
        i !== null && l.stopPropagation();
      } else
        rs(
          e,
          t,
          l,
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
    if (_o = null, e = $l(e), e !== null) {
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
          case Ql:
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
  function Kr(e, t, n, l, i, c) {
    return e === null || e.nativeEvent !== c ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: l,
      nativeEvent: c,
      targetContainers: [i]
    }, t !== null && (t = Wl(t), t !== null && yp(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function yb(e, t, n, l, i) {
    switch (t) {
      case "focusin":
        return al = Kr(
          al,
          e,
          t,
          n,
          l,
          i
        ), !0;
      case "dragenter":
        return rl = Kr(
          rl,
          e,
          t,
          n,
          l,
          i
        ), !0;
      case "mouseover":
        return il = Kr(
          il,
          e,
          t,
          n,
          l,
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
            l,
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
            l,
            i
          )
        ), !0;
    }
    return !1;
  }
  function Sp(e) {
    var t = $l(e.target);
    if (t !== null) {
      var n = f(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = d(n), t !== null) {
            e.blockedOn = t, f0(e.priority, function() {
              if (n.tag === 13) {
                var l = _t();
                l = Fl(l);
                var i = sa(n, l);
                i !== null && Nt(i, n, l), gs(n, l);
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
        var l = new n.constructor(
          n.type,
          n
        );
        wu = l, n.target.dispatchEvent(l), wu = null;
      } else
        return t = Wl(n), t !== null && yp(t), e.blockedOn = n, !1;
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
    e.blockedOn === t && (e.blockedOn = null, Ss || (Ss = !0, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      bb
    )));
  }
  var jo = null;
  function wp(e) {
    jo !== e && (jo = e, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      function() {
        jo === e && (jo = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], l = e[t + 1], i = e[t + 2];
          if (typeof l != "function") {
            if (xs(l || n) === null)
              continue;
            break;
          }
          var c = Wl(n);
          c !== null && (e.splice(t, 3), t -= 3, xc(
            c,
            {
              pending: !0,
              data: i,
              method: n.method,
              action: l
            },
            l,
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
      var l = ol[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < ol.length && (n = ol[0], n.blockedOn === null); )
      Sp(n), n.blockedOn === null && ol.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (l = 0; l < n.length; l += 3) {
        var i = n[l], c = n[l + 1], v = i[bt] || null;
        if (typeof c == "function")
          v || wp(n);
        else if (v) {
          var b = null;
          if (c && c.hasAttribute("formAction")) {
            if (i = c, v = c[bt] || null)
              b = v.formAction;
            else if (xs(i) !== null) continue;
          } else b = v.action;
          typeof b == "function" ? n[l + 1] = b : (n.splice(l, 3), l -= 3), wp(n);
        }
      }
  }
  function Es(e) {
    this._internalRoot = e;
  }
  zo.prototype.render = Es.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var n = t.current, l = _t();
    vp(n, l, e, t, null, null);
  }, zo.prototype.unmount = Es.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      vp(e.current, 2, null, e, null, null), po(), t[Jl] = null;
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
  V.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = p(t), e = e !== null ? h(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var xb = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: N,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Uo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Uo.isDisabled && Uo.supportsFiber)
      try {
        pl = Uo.inject(
          xb
        ), ft = Uo;
      } catch {
      }
  }
  return Jr.createRoot = function(e, t) {
    if (!s(e)) throw Error(o(299));
    var n = !1, l = "", i = Gm, c = Ym, v = qm, b = null;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (v = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (b = t.unstable_transitionCallbacks)), t = hp(
      e,
      1,
      !1,
      null,
      null,
      n,
      l,
      i,
      c,
      v,
      b,
      null
    ), e[Jl] = t.current, as(e), new Es(t);
  }, Jr.hydrateRoot = function(e, t, n) {
    if (!s(e)) throw Error(o(299));
    var l = !1, i = "", c = Gm, v = Ym, b = qm, M = null, L = null;
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (v = n.onCaughtError), n.onRecoverableError !== void 0 && (b = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (M = n.unstable_transitionCallbacks), n.formState !== void 0 && (L = n.formState)), t = hp(
      e,
      1,
      !0,
      t,
      n ?? null,
      l,
      i,
      c,
      v,
      b,
      M,
      L
    ), t.context = pp(null), n = t.current, l = _t(), l = Fl(l), i = Xn(l), i.callback = null, Qn(n, i, l), n = l, t.current.lanes = n, Hn(t, n), rn(t), e[Jl] = t.current, as(e), new zo(t);
  }, Jr.version = "19.1.0", Jr;
}
var zp;
function _b() {
  if (zp) return Cs.exports;
  zp = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (r) {
        console.error(r);
      }
  }
  return a(), Cs.exports = Tb(), Cs.exports;
}
var Nb = _b();
function Te(a, r, { checkForDefaultPrevented: u = !0 } = {}) {
  return function(s) {
    if (a == null || a(s), u === !1 || !s.defaultPrevented)
      return r == null ? void 0 : r(s);
  };
}
function Up(a, r) {
  if (typeof a == "function")
    return a(r);
  a != null && (a.current = r);
}
function lu(...a) {
  return (r) => {
    let u = !1;
    const o = a.map((s) => {
      const f = Up(s, r);
      return !u && typeof f == "function" && (u = !0), f;
    });
    if (u)
      return () => {
        for (let s = 0; s < o.length; s++) {
          const f = o[s];
          typeof f == "function" ? f() : Up(a[s], null);
        }
      };
  };
}
function At(...a) {
  return A.useCallback(lu(...a), a);
}
function mi(a, r = []) {
  let u = [];
  function o(f, d) {
    const m = A.createContext(d), p = u.length;
    u = [...u, d];
    const h = (y) => {
      var T;
      const { scope: x, children: E, ...R } = y, w = ((T = x == null ? void 0 : x[a]) == null ? void 0 : T[p]) || m, O = A.useMemo(() => R, Object.values(R));
      return /* @__PURE__ */ S.jsx(w.Provider, { value: O, children: E });
    };
    h.displayName = f + "Provider";
    function g(y, x) {
      var w;
      const E = ((w = x == null ? void 0 : x[a]) == null ? void 0 : w[p]) || m, R = A.useContext(E);
      if (R) return R;
      if (d !== void 0) return d;
      throw new Error(`\`${y}\` must be used within \`${f}\``);
    }
    return [h, g];
  }
  const s = () => {
    const f = u.map((d) => A.createContext(d));
    return function(m) {
      const p = (m == null ? void 0 : m[a]) || f;
      return A.useMemo(
        () => ({ [`__scope${a}`]: { ...m, [a]: p } }),
        [m, p]
      );
    };
  };
  return s.scopeName = a, [o, Db(s, ...r)];
}
function Db(...a) {
  const r = a[0];
  if (a.length === 1) return r;
  const u = () => {
    const o = a.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(f) {
      const d = o.reduce((m, { useScope: p, scopeName: h }) => {
        const y = p(f)[`__scope${h}`];
        return { ...m, ...y };
      }, {});
      return A.useMemo(() => ({ [`__scope${r.scopeName}`]: d }), [d]);
    };
  };
  return u.scopeName = r.scopeName, u;
}
var fl = globalThis != null && globalThis.document ? A.useLayoutEffect : () => {
}, jb = gv[" useInsertionEffect ".trim().toString()] || fl;
function bv({
  prop: a,
  defaultProp: r,
  onChange: u = () => {
  },
  caller: o
}) {
  const [s, f, d] = zb({
    defaultProp: r,
    onChange: u
  }), m = a !== void 0, p = m ? a : s;
  {
    const g = A.useRef(a !== void 0);
    A.useEffect(() => {
      const y = g.current;
      y !== m && console.warn(
        `${o} is changing from ${y ? "controlled" : "uncontrolled"} to ${m ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), g.current = m;
    }, [m, o]);
  }
  const h = A.useCallback(
    (g) => {
      var y;
      if (m) {
        const x = Ub(g) ? g(a) : g;
        x !== a && ((y = d.current) == null || y.call(d, x));
      } else
        f(g);
    },
    [m, a, f, d]
  );
  return [p, h];
}
function zb({
  defaultProp: a,
  onChange: r
}) {
  const [u, o] = A.useState(a), s = A.useRef(u), f = A.useRef(r);
  return jb(() => {
    f.current = r;
  }, [r]), A.useEffect(() => {
    var d;
    s.current !== u && ((d = f.current) == null || d.call(f, u), s.current = u);
  }, [u, s]), [u, o, f];
}
function Ub(a) {
  return typeof a == "function";
}
var mf = yv();
const Ir = /* @__PURE__ */ vv(mf);
// @__NO_SIDE_EFFECTS__
function ai(a) {
  const r = /* @__PURE__ */ kb(a), u = A.forwardRef((o, s) => {
    const { children: f, ...d } = o, m = A.Children.toArray(f), p = m.find(Hb);
    if (p) {
      const h = p.props.children, g = m.map((y) => y === p ? A.Children.count(h) > 1 ? A.Children.only(null) : A.isValidElement(h) ? h.props.children : null : y);
      return /* @__PURE__ */ S.jsx(r, { ...d, ref: s, children: A.isValidElement(h) ? A.cloneElement(h, void 0, g) : null });
    }
    return /* @__PURE__ */ S.jsx(r, { ...d, ref: s, children: f });
  });
  return u.displayName = `${a}.Slot`, u;
}
var Lb = /* @__PURE__ */ ai("Slot");
// @__NO_SIDE_EFFECTS__
function kb(a) {
  const r = A.forwardRef((u, o) => {
    const { children: s, ...f } = u;
    if (A.isValidElement(s)) {
      const d = Yb(s), m = Gb(f, s.props);
      return s.type !== A.Fragment && (m.ref = o ? lu(o, d) : d), A.cloneElement(s, m);
    }
    return A.Children.count(s) > 1 ? A.Children.only(null) : null;
  });
  return r.displayName = `${a}.SlotClone`, r;
}
var Bb = Symbol("radix.slottable");
function Hb(a) {
  return A.isValidElement(a) && typeof a.type == "function" && "__radixId" in a.type && a.type.__radixId === Bb;
}
function Gb(a, r) {
  const u = { ...r };
  for (const o in r) {
    const s = a[o], f = r[o];
    /^on[A-Z]/.test(o) ? s && f ? u[o] = (...m) => {
      f(...m), s(...m);
    } : s && (u[o] = s) : o === "style" ? u[o] = { ...s, ...f } : o === "className" && (u[o] = [s, f].filter(Boolean).join(" "));
  }
  return { ...a, ...u };
}
function Yb(a) {
  var o, s;
  let r = (o = Object.getOwnPropertyDescriptor(a.props, "ref")) == null ? void 0 : o.get, u = r && "isReactWarning" in r && r.isReactWarning;
  return u ? a.ref : (r = (s = Object.getOwnPropertyDescriptor(a, "ref")) == null ? void 0 : s.get, u = r && "isReactWarning" in r && r.isReactWarning, u ? a.props.ref : a.props.ref || a.ref);
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
], vt = qb.reduce((a, r) => {
  const u = /* @__PURE__ */ ai(`Primitive.${r}`), o = A.forwardRef((s, f) => {
    const { asChild: d, ...m } = s, p = d ? u : r;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ S.jsx(p, { ...m, ref: f });
  });
  return o.displayName = `Primitive.${r}`, { ...a, [r]: o };
}, {});
function xv(a, r) {
  a && mf.flushSync(() => a.dispatchEvent(r));
}
function Sv(a) {
  const r = a + "CollectionProvider", [u, o] = mi(r), [s, f] = u(
    r,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), d = (w) => {
    const { scope: O, children: T } = w, z = De.useRef(null), j = De.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ S.jsx(s, { scope: O, itemMap: j, collectionRef: z, children: T });
  };
  d.displayName = r;
  const m = a + "CollectionSlot", p = /* @__PURE__ */ ai(m), h = De.forwardRef(
    (w, O) => {
      const { scope: T, children: z } = w, j = f(m, T), q = At(O, j.collectionRef);
      return /* @__PURE__ */ S.jsx(p, { ref: q, children: z });
    }
  );
  h.displayName = m;
  const g = a + "CollectionItemSlot", y = "data-radix-collection-item", x = /* @__PURE__ */ ai(g), E = De.forwardRef(
    (w, O) => {
      const { scope: T, children: z, ...j } = w, q = De.useRef(null), G = At(O, q), P = f(g, T);
      return De.useEffect(() => (P.itemMap.set(q, { ref: q, ...j }), () => void P.itemMap.delete(q))), /* @__PURE__ */ S.jsx(x, { [y]: "", ref: G, children: z });
    }
  );
  E.displayName = g;
  function R(w) {
    const O = f(a + "CollectionConsumer", w);
    return De.useCallback(() => {
      const z = O.collectionRef.current;
      if (!z) return [];
      const j = Array.from(z.querySelectorAll(`[${y}]`));
      return Array.from(O.itemMap.values()).sort(
        (P, Z) => j.indexOf(P.ref.current) - j.indexOf(Z.ref.current)
      );
    }, [O.collectionRef, O.itemMap]);
  }
  return [
    { Provider: d, Slot: h, ItemSlot: E },
    R,
    o
  ];
}
var Vb = A.createContext(void 0);
function Ev(a) {
  const r = A.useContext(Vb);
  return a || r || "ltr";
}
function zn(a) {
  const r = A.useRef(a);
  return A.useEffect(() => {
    r.current = a;
  }), A.useMemo(() => (...u) => {
    var o;
    return (o = r.current) == null ? void 0 : o.call(r, ...u);
  }, []);
}
function Xb(a, r = globalThis == null ? void 0 : globalThis.document) {
  const u = zn(a);
  A.useEffect(() => {
    const o = (s) => {
      s.key === "Escape" && u(s);
    };
    return r.addEventListener("keydown", o, { capture: !0 }), () => r.removeEventListener("keydown", o, { capture: !0 });
  }, [u, r]);
}
var Qb = "DismissableLayer", Ks = "dismissableLayer.update", Zb = "dismissableLayer.pointerDownOutside", Kb = "dismissableLayer.focusOutside", Lp, wv = A.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Av = A.forwardRef(
  (a, r) => {
    const {
      disableOutsidePointerEvents: u = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: s,
      onFocusOutside: f,
      onInteractOutside: d,
      onDismiss: m,
      ...p
    } = a, h = A.useContext(wv), [g, y] = A.useState(null), x = (g == null ? void 0 : g.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, E] = A.useState({}), R = At(r, (Z) => y(Z)), w = Array.from(h.layers), [O] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1), T = w.indexOf(O), z = g ? w.indexOf(g) : -1, j = h.layersWithOutsidePointerEventsDisabled.size > 0, q = z >= T, G = Jb((Z) => {
      const Y = Z.target, te = [...h.branches].some((ee) => ee.contains(Y));
      !q || te || (s == null || s(Z), d == null || d(Z), Z.defaultPrevented || m == null || m());
    }, x), P = $b((Z) => {
      const Y = Z.target;
      [...h.branches].some((ee) => ee.contains(Y)) || (f == null || f(Z), d == null || d(Z), Z.defaultPrevented || m == null || m());
    }, x);
    return Xb((Z) => {
      z === h.layers.size - 1 && (o == null || o(Z), !Z.defaultPrevented && m && (Z.preventDefault(), m()));
    }, x), A.useEffect(() => {
      if (g)
        return u && (h.layersWithOutsidePointerEventsDisabled.size === 0 && (Lp = x.body.style.pointerEvents, x.body.style.pointerEvents = "none"), h.layersWithOutsidePointerEventsDisabled.add(g)), h.layers.add(g), kp(), () => {
          u && h.layersWithOutsidePointerEventsDisabled.size === 1 && (x.body.style.pointerEvents = Lp);
        };
    }, [g, x, u, h]), A.useEffect(() => () => {
      g && (h.layers.delete(g), h.layersWithOutsidePointerEventsDisabled.delete(g), kp());
    }, [g, h]), A.useEffect(() => {
      const Z = () => E({});
      return document.addEventListener(Ks, Z), () => document.removeEventListener(Ks, Z);
    }, []), /* @__PURE__ */ S.jsx(
      vt.div,
      {
        ...p,
        ref: R,
        style: {
          pointerEvents: j ? q ? "auto" : "none" : void 0,
          ...a.style
        },
        onFocusCapture: Te(a.onFocusCapture, P.onFocusCapture),
        onBlurCapture: Te(a.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: Te(
          a.onPointerDownCapture,
          G.onPointerDownCapture
        )
      }
    );
  }
);
Av.displayName = Qb;
var Pb = "DismissableLayerBranch", Fb = A.forwardRef((a, r) => {
  const u = A.useContext(wv), o = A.useRef(null), s = At(r, o);
  return A.useEffect(() => {
    const f = o.current;
    if (f)
      return u.branches.add(f), () => {
        u.branches.delete(f);
      };
  }, [u.branches]), /* @__PURE__ */ S.jsx(vt.div, { ...a, ref: s });
});
Fb.displayName = Pb;
function Jb(a, r = globalThis == null ? void 0 : globalThis.document) {
  const u = zn(a), o = A.useRef(!1), s = A.useRef(() => {
  });
  return A.useEffect(() => {
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
function $b(a, r = globalThis == null ? void 0 : globalThis.document) {
  const u = zn(a), o = A.useRef(!1);
  return A.useEffect(() => {
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
function kp() {
  const a = new CustomEvent(Ks);
  document.dispatchEvent(a);
}
function Cv(a, r, u, { discrete: o }) {
  const s = u.originalEvent.target, f = new CustomEvent(a, { bubbles: !1, cancelable: !0, detail: u });
  r && s.addEventListener(a, r, { once: !0 }), o ? xv(s, f) : s.dispatchEvent(f);
}
var Ts = 0;
function Wb() {
  A.useEffect(() => {
    const a = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", a[0] ?? Bp()), document.body.insertAdjacentElement("beforeend", a[1] ?? Bp()), Ts++, () => {
      Ts === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((r) => r.remove()), Ts--;
    };
  }, []);
}
function Bp() {
  const a = document.createElement("span");
  return a.setAttribute("data-radix-focus-guard", ""), a.tabIndex = 0, a.style.outline = "none", a.style.opacity = "0", a.style.position = "fixed", a.style.pointerEvents = "none", a;
}
var _s = "focusScope.autoFocusOnMount", Ns = "focusScope.autoFocusOnUnmount", Hp = { bubbles: !1, cancelable: !0 }, Ib = "FocusScope", Rv = A.forwardRef((a, r) => {
  const {
    loop: u = !1,
    trapped: o = !1,
    onMountAutoFocus: s,
    onUnmountAutoFocus: f,
    ...d
  } = a, [m, p] = A.useState(null), h = zn(s), g = zn(f), y = A.useRef(null), x = At(r, (w) => p(w)), E = A.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  A.useEffect(() => {
    if (o) {
      let w = function(j) {
        if (E.paused || !m) return;
        const q = j.target;
        m.contains(q) ? y.current = q : sl(y.current, { select: !0 });
      }, O = function(j) {
        if (E.paused || !m) return;
        const q = j.relatedTarget;
        q !== null && (m.contains(q) || sl(y.current, { select: !0 }));
      }, T = function(j) {
        if (document.activeElement === document.body)
          for (const G of j)
            G.removedNodes.length > 0 && sl(m);
      };
      document.addEventListener("focusin", w), document.addEventListener("focusout", O);
      const z = new MutationObserver(T);
      return m && z.observe(m, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", w), document.removeEventListener("focusout", O), z.disconnect();
      };
    }
  }, [o, m, E.paused]), A.useEffect(() => {
    if (m) {
      Yp.add(E);
      const w = document.activeElement;
      if (!m.contains(w)) {
        const T = new CustomEvent(_s, Hp);
        m.addEventListener(_s, h), m.dispatchEvent(T), T.defaultPrevented || (e1(r1(Mv(m)), { select: !0 }), document.activeElement === w && sl(m));
      }
      return () => {
        m.removeEventListener(_s, h), setTimeout(() => {
          const T = new CustomEvent(Ns, Hp);
          m.addEventListener(Ns, g), m.dispatchEvent(T), T.defaultPrevented || sl(w ?? document.body, { select: !0 }), m.removeEventListener(Ns, g), Yp.remove(E);
        }, 0);
      };
    }
  }, [m, h, g, E]);
  const R = A.useCallback(
    (w) => {
      if (!u && !o || E.paused) return;
      const O = w.key === "Tab" && !w.altKey && !w.ctrlKey && !w.metaKey, T = document.activeElement;
      if (O && T) {
        const z = w.currentTarget, [j, q] = t1(z);
        j && q ? !w.shiftKey && T === q ? (w.preventDefault(), u && sl(j, { select: !0 })) : w.shiftKey && T === j && (w.preventDefault(), u && sl(q, { select: !0 })) : T === z && w.preventDefault();
      }
    },
    [u, o, E.paused]
  );
  return /* @__PURE__ */ S.jsx(vt.div, { tabIndex: -1, ...d, ref: x, onKeyDown: R });
});
Rv.displayName = Ib;
function e1(a, { select: r = !1 } = {}) {
  const u = document.activeElement;
  for (const o of a)
    if (sl(o, { select: r }), document.activeElement !== u) return;
}
function t1(a) {
  const r = Mv(a), u = Gp(r, a), o = Gp(r.reverse(), a);
  return [u, o];
}
function Mv(a) {
  const r = [], u = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const s = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || s ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; u.nextNode(); ) r.push(u.currentNode);
  return r;
}
function Gp(a, r) {
  for (const u of a)
    if (!n1(u, { upTo: r })) return u;
}
function n1(a, { upTo: r }) {
  if (getComputedStyle(a).visibility === "hidden") return !0;
  for (; a; ) {
    if (r !== void 0 && a === r) return !1;
    if (getComputedStyle(a).display === "none") return !0;
    a = a.parentElement;
  }
  return !1;
}
function l1(a) {
  return a instanceof HTMLInputElement && "select" in a;
}
function sl(a, { select: r = !1 } = {}) {
  if (a && a.focus) {
    const u = document.activeElement;
    a.focus({ preventScroll: !0 }), a !== u && l1(a) && r && a.select();
  }
}
var Yp = a1();
function a1() {
  let a = [];
  return {
    add(r) {
      const u = a[0];
      r !== u && (u == null || u.pause()), a = qp(a, r), a.unshift(r);
    },
    remove(r) {
      var u;
      a = qp(a, r), (u = a[0]) == null || u.resume();
    }
  };
}
function qp(a, r) {
  const u = [...a], o = u.indexOf(r);
  return o !== -1 && u.splice(o, 1), u;
}
function r1(a) {
  return a.filter((r) => r.tagName !== "A");
}
var i1 = gv[" useId ".trim().toString()] || (() => {
}), o1 = 0;
function Ps(a) {
  const [r, u] = A.useState(i1());
  return fl(() => {
    u((o) => o ?? String(o1++));
  }, [a]), a || (r ? `radix-${r}` : "");
}
const u1 = ["top", "right", "bottom", "left"], dl = Math.min, Dt = Math.max, Fo = Math.round, Lo = Math.floor, sn = (a) => ({
  x: a,
  y: a
}), c1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, s1 = {
  start: "end",
  end: "start"
};
function Fs(a, r, u) {
  return Dt(a, dl(r, u));
}
function Un(a, r) {
  return typeof a == "function" ? a(r) : a;
}
function Ln(a) {
  return a.split("-")[0];
}
function Qa(a) {
  return a.split("-")[1];
}
function hf(a) {
  return a === "x" ? "y" : "x";
}
function pf(a) {
  return a === "y" ? "height" : "width";
}
function jn(a) {
  return ["top", "bottom"].includes(Ln(a)) ? "y" : "x";
}
function vf(a) {
  return hf(jn(a));
}
function f1(a, r, u) {
  u === void 0 && (u = !1);
  const o = Qa(a), s = vf(a), f = pf(s);
  let d = s === "x" ? o === (u ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return r.reference[f] > r.floating[f] && (d = Jo(d)), [d, Jo(d)];
}
function d1(a) {
  const r = Jo(a);
  return [Js(a), r, Js(r)];
}
function Js(a) {
  return a.replace(/start|end/g, (r) => s1[r]);
}
function m1(a, r, u) {
  const o = ["left", "right"], s = ["right", "left"], f = ["top", "bottom"], d = ["bottom", "top"];
  switch (a) {
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
function h1(a, r, u, o) {
  const s = Qa(a);
  let f = m1(Ln(a), u === "start", o);
  return s && (f = f.map((d) => d + "-" + s), r && (f = f.concat(f.map(Js)))), f;
}
function Jo(a) {
  return a.replace(/left|right|bottom|top/g, (r) => c1[r]);
}
function p1(a) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...a
  };
}
function Ov(a) {
  return typeof a != "number" ? p1(a) : {
    top: a,
    right: a,
    bottom: a,
    left: a
  };
}
function $o(a) {
  const {
    x: r,
    y: u,
    width: o,
    height: s
  } = a;
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
function Vp(a, r, u) {
  let {
    reference: o,
    floating: s
  } = a;
  const f = jn(r), d = vf(r), m = pf(d), p = Ln(r), h = f === "y", g = o.x + o.width / 2 - s.width / 2, y = o.y + o.height / 2 - s.height / 2, x = o[m] / 2 - s[m] / 2;
  let E;
  switch (p) {
    case "top":
      E = {
        x: g,
        y: o.y - s.height
      };
      break;
    case "bottom":
      E = {
        x: g,
        y: o.y + o.height
      };
      break;
    case "right":
      E = {
        x: o.x + o.width,
        y
      };
      break;
    case "left":
      E = {
        x: o.x - s.width,
        y
      };
      break;
    default:
      E = {
        x: o.x,
        y: o.y
      };
  }
  switch (Qa(r)) {
    case "start":
      E[d] -= x * (u && h ? -1 : 1);
      break;
    case "end":
      E[d] += x * (u && h ? -1 : 1);
      break;
  }
  return E;
}
const v1 = async (a, r, u) => {
  const {
    placement: o = "bottom",
    strategy: s = "absolute",
    middleware: f = [],
    platform: d
  } = u, m = f.filter(Boolean), p = await (d.isRTL == null ? void 0 : d.isRTL(r));
  let h = await d.getElementRects({
    reference: a,
    floating: r,
    strategy: s
  }), {
    x: g,
    y
  } = Vp(h, o, p), x = o, E = {}, R = 0;
  for (let w = 0; w < m.length; w++) {
    const {
      name: O,
      fn: T
    } = m[w], {
      x: z,
      y: j,
      data: q,
      reset: G
    } = await T({
      x: g,
      y,
      initialPlacement: o,
      placement: x,
      strategy: s,
      middlewareData: E,
      rects: h,
      platform: d,
      elements: {
        reference: a,
        floating: r
      }
    });
    g = z ?? g, y = j ?? y, E = {
      ...E,
      [O]: {
        ...E[O],
        ...q
      }
    }, G && R <= 50 && (R++, typeof G == "object" && (G.placement && (x = G.placement), G.rects && (h = G.rects === !0 ? await d.getElementRects({
      reference: a,
      floating: r,
      strategy: s
    }) : G.rects), {
      x: g,
      y
    } = Vp(h, x, p)), w = -1);
  }
  return {
    x: g,
    y,
    placement: x,
    strategy: s,
    middlewareData: E
  };
};
async function ri(a, r) {
  var u;
  r === void 0 && (r = {});
  const {
    x: o,
    y: s,
    platform: f,
    rects: d,
    elements: m,
    strategy: p
  } = a, {
    boundary: h = "clippingAncestors",
    rootBoundary: g = "viewport",
    elementContext: y = "floating",
    altBoundary: x = !1,
    padding: E = 0
  } = Un(r, a), R = Ov(E), O = m[x ? y === "floating" ? "reference" : "floating" : y], T = $o(await f.getClippingRect({
    element: (u = await (f.isElement == null ? void 0 : f.isElement(O))) == null || u ? O : O.contextElement || await (f.getDocumentElement == null ? void 0 : f.getDocumentElement(m.floating)),
    boundary: h,
    rootBoundary: g,
    strategy: p
  })), z = y === "floating" ? {
    x: o,
    y: s,
    width: d.floating.width,
    height: d.floating.height
  } : d.reference, j = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(m.floating)), q = await (f.isElement == null ? void 0 : f.isElement(j)) ? await (f.getScale == null ? void 0 : f.getScale(j)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, G = $o(f.convertOffsetParentRelativeRectToViewportRelativeRect ? await f.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: m,
    rect: z,
    offsetParent: j,
    strategy: p
  }) : z);
  return {
    top: (T.top - G.top + R.top) / q.y,
    bottom: (G.bottom - T.bottom + R.bottom) / q.y,
    left: (T.left - G.left + R.left) / q.x,
    right: (G.right - T.right + R.right) / q.x
  };
}
const g1 = (a) => ({
  name: "arrow",
  options: a,
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
    } = Un(a, r) || {};
    if (h == null)
      return {};
    const y = Ov(g), x = {
      x: u,
      y: o
    }, E = vf(s), R = pf(E), w = await d.getDimensions(h), O = E === "y", T = O ? "top" : "left", z = O ? "bottom" : "right", j = O ? "clientHeight" : "clientWidth", q = f.reference[R] + f.reference[E] - x[E] - f.floating[R], G = x[E] - f.reference[E], P = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(h));
    let Z = P ? P[j] : 0;
    (!Z || !await (d.isElement == null ? void 0 : d.isElement(P))) && (Z = m.floating[j] || f.floating[R]);
    const Y = q / 2 - G / 2, te = Z / 2 - w[R] / 2 - 1, ee = dl(y[T], te), le = dl(y[z], te), re = ee, se = Z - w[R] - le, me = Z / 2 - w[R] / 2 + Y, Q = Fs(re, me, se), N = !p.arrow && Qa(s) != null && me !== Q && f.reference[R] / 2 - (me < re ? ee : le) - w[R] / 2 < 0, V = N ? me < re ? me - re : me - se : 0;
    return {
      [E]: x[E] + V,
      data: {
        [E]: Q,
        centerOffset: me - Q - V,
        ...N && {
          alignmentOffset: V
        }
      },
      reset: N
    };
  }
}), y1 = function(a) {
  return a === void 0 && (a = {}), {
    name: "flip",
    options: a,
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
        fallbackPlacements: x,
        fallbackStrategy: E = "bestFit",
        fallbackAxisSideDirection: R = "none",
        flipAlignment: w = !0,
        ...O
      } = Un(a, r);
      if ((u = f.arrow) != null && u.alignmentOffset)
        return {};
      const T = Ln(s), z = jn(m), j = Ln(m) === m, q = await (p.isRTL == null ? void 0 : p.isRTL(h.floating)), G = x || (j || !w ? [Jo(m)] : d1(m)), P = R !== "none";
      !x && P && G.push(...h1(m, w, R, q));
      const Z = [m, ...G], Y = await ri(r, O), te = [];
      let ee = ((o = f.flip) == null ? void 0 : o.overflows) || [];
      if (g && te.push(Y[T]), y) {
        const Q = f1(s, d, q);
        te.push(Y[Q[0]], Y[Q[1]]);
      }
      if (ee = [...ee, {
        placement: s,
        overflows: te
      }], !te.every((Q) => Q <= 0)) {
        var le, re;
        const Q = (((le = f.flip) == null ? void 0 : le.index) || 0) + 1, N = Z[Q];
        if (N) {
          var se;
          const k = y === "alignment" ? z !== jn(N) : !1, $ = ((se = ee[0]) == null ? void 0 : se.overflows[0]) > 0;
          if (!k || $)
            return {
              data: {
                index: Q,
                overflows: ee
              },
              reset: {
                placement: N
              }
            };
        }
        let V = (re = ee.filter((k) => k.overflows[0] <= 0).sort((k, $) => k.overflows[1] - $.overflows[1])[0]) == null ? void 0 : re.placement;
        if (!V)
          switch (E) {
            case "bestFit": {
              var me;
              const k = (me = ee.filter(($) => {
                if (P) {
                  const C = jn($.placement);
                  return C === z || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  C === "y";
                }
                return !0;
              }).map(($) => [$.placement, $.overflows.filter((C) => C > 0).reduce((C, X) => C + X, 0)]).sort(($, C) => $[1] - C[1])[0]) == null ? void 0 : me[0];
              k && (V = k);
              break;
            }
            case "initialPlacement":
              V = m;
              break;
          }
        if (s !== V)
          return {
            reset: {
              placement: V
            }
          };
      }
      return {};
    }
  };
};
function Xp(a, r) {
  return {
    top: a.top - r.height,
    right: a.right - r.width,
    bottom: a.bottom - r.height,
    left: a.left - r.width
  };
}
function Qp(a) {
  return u1.some((r) => a[r] >= 0);
}
const b1 = function(a) {
  return a === void 0 && (a = {}), {
    name: "hide",
    options: a,
    async fn(r) {
      const {
        rects: u
      } = r, {
        strategy: o = "referenceHidden",
        ...s
      } = Un(a, r);
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
async function x1(a, r) {
  const {
    placement: u,
    platform: o,
    elements: s
  } = a, f = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), d = Ln(u), m = Qa(u), p = jn(u) === "y", h = ["left", "top"].includes(d) ? -1 : 1, g = f && p ? -1 : 1, y = Un(r, a);
  let {
    mainAxis: x,
    crossAxis: E,
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
  return m && typeof R == "number" && (E = m === "end" ? R * -1 : R), p ? {
    x: E * g,
    y: x * h
  } : {
    x: x * h,
    y: E * g
  };
}
const S1 = function(a) {
  return a === void 0 && (a = 0), {
    name: "offset",
    options: a,
    async fn(r) {
      var u, o;
      const {
        x: s,
        y: f,
        placement: d,
        middlewareData: m
      } = r, p = await x1(r, a);
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
}, E1 = function(a) {
  return a === void 0 && (a = {}), {
    name: "shift",
    options: a,
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
              y: z
            } = O;
            return {
              x: T,
              y: z
            };
          }
        },
        ...p
      } = Un(a, r), h = {
        x: u,
        y: o
      }, g = await ri(r, p), y = jn(Ln(s)), x = hf(y);
      let E = h[x], R = h[y];
      if (f) {
        const O = x === "y" ? "top" : "left", T = x === "y" ? "bottom" : "right", z = E + g[O], j = E - g[T];
        E = Fs(z, E, j);
      }
      if (d) {
        const O = y === "y" ? "top" : "left", T = y === "y" ? "bottom" : "right", z = R + g[O], j = R - g[T];
        R = Fs(z, R, j);
      }
      const w = m.fn({
        ...r,
        [x]: E,
        [y]: R
      });
      return {
        ...w,
        data: {
          x: w.x - u,
          y: w.y - o,
          enabled: {
            [x]: f,
            [y]: d
          }
        }
      };
    }
  };
}, w1 = function(a) {
  return a === void 0 && (a = {}), {
    options: a,
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
      } = Un(a, r), g = {
        x: u,
        y: o
      }, y = jn(s), x = hf(y);
      let E = g[x], R = g[y];
      const w = Un(m, r), O = typeof w == "number" ? {
        mainAxis: w,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...w
      };
      if (p) {
        const j = x === "y" ? "height" : "width", q = f.reference[x] - f.floating[j] + O.mainAxis, G = f.reference[x] + f.reference[j] - O.mainAxis;
        E < q ? E = q : E > G && (E = G);
      }
      if (h) {
        var T, z;
        const j = x === "y" ? "width" : "height", q = ["top", "left"].includes(Ln(s)), G = f.reference[y] - f.floating[j] + (q && ((T = d.offset) == null ? void 0 : T[y]) || 0) + (q ? 0 : O.crossAxis), P = f.reference[y] + f.reference[j] + (q ? 0 : ((z = d.offset) == null ? void 0 : z[y]) || 0) - (q ? O.crossAxis : 0);
        R < G ? R = G : R > P && (R = P);
      }
      return {
        [x]: E,
        [y]: R
      };
    }
  };
}, A1 = function(a) {
  return a === void 0 && (a = {}), {
    name: "size",
    options: a,
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
      } = Un(a, r), g = await ri(r, h), y = Ln(s), x = Qa(s), E = jn(s) === "y", {
        width: R,
        height: w
      } = f.floating;
      let O, T;
      y === "top" || y === "bottom" ? (O = y, T = x === (await (d.isRTL == null ? void 0 : d.isRTL(m.floating)) ? "start" : "end") ? "left" : "right") : (T = y, O = x === "end" ? "top" : "bottom");
      const z = w - g.top - g.bottom, j = R - g.left - g.right, q = dl(w - g[O], z), G = dl(R - g[T], j), P = !r.middlewareData.shift;
      let Z = q, Y = G;
      if ((u = r.middlewareData.shift) != null && u.enabled.x && (Y = j), (o = r.middlewareData.shift) != null && o.enabled.y && (Z = z), P && !x) {
        const ee = Dt(g.left, 0), le = Dt(g.right, 0), re = Dt(g.top, 0), se = Dt(g.bottom, 0);
        E ? Y = R - 2 * (ee !== 0 || le !== 0 ? ee + le : Dt(g.left, g.right)) : Z = w - 2 * (re !== 0 || se !== 0 ? re + se : Dt(g.top, g.bottom));
      }
      await p({
        ...r,
        availableWidth: Y,
        availableHeight: Z
      });
      const te = await d.getDimensions(m.floating);
      return R !== te.width || w !== te.height ? {
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
function Za(a) {
  return Tv(a) ? (a.nodeName || "").toLowerCase() : "#document";
}
function jt(a) {
  var r;
  return (a == null || (r = a.ownerDocument) == null ? void 0 : r.defaultView) || window;
}
function dn(a) {
  var r;
  return (r = (Tv(a) ? a.ownerDocument : a.document) || window.document) == null ? void 0 : r.documentElement;
}
function Tv(a) {
  return au() ? a instanceof Node || a instanceof jt(a).Node : !1;
}
function Jt(a) {
  return au() ? a instanceof Element || a instanceof jt(a).Element : !1;
}
function fn(a) {
  return au() ? a instanceof HTMLElement || a instanceof jt(a).HTMLElement : !1;
}
function Zp(a) {
  return !au() || typeof ShadowRoot > "u" ? !1 : a instanceof ShadowRoot || a instanceof jt(a).ShadowRoot;
}
function hi(a) {
  const {
    overflow: r,
    overflowX: u,
    overflowY: o,
    display: s
  } = $t(a);
  return /auto|scroll|overlay|hidden|clip/.test(r + o + u) && !["inline", "contents"].includes(s);
}
function C1(a) {
  return ["table", "td", "th"].includes(Za(a));
}
function ru(a) {
  return [":popover-open", ":modal"].some((r) => {
    try {
      return a.matches(r);
    } catch {
      return !1;
    }
  });
}
function gf(a) {
  const r = yf(), u = Jt(a) ? $t(a) : a;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((o) => u[o] ? u[o] !== "none" : !1) || (u.containerType ? u.containerType !== "normal" : !1) || !r && (u.backdropFilter ? u.backdropFilter !== "none" : !1) || !r && (u.filter ? u.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((o) => (u.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (u.contain || "").includes(o));
}
function R1(a) {
  let r = ml(a);
  for (; fn(r) && !Va(r); ) {
    if (gf(r))
      return r;
    if (ru(r))
      return null;
    r = ml(r);
  }
  return null;
}
function yf() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Va(a) {
  return ["html", "body", "#document"].includes(Za(a));
}
function $t(a) {
  return jt(a).getComputedStyle(a);
}
function iu(a) {
  return Jt(a) ? {
    scrollLeft: a.scrollLeft,
    scrollTop: a.scrollTop
  } : {
    scrollLeft: a.scrollX,
    scrollTop: a.scrollY
  };
}
function ml(a) {
  if (Za(a) === "html")
    return a;
  const r = (
    // Step into the shadow DOM of the parent of a slotted node.
    a.assignedSlot || // DOM Element detected.
    a.parentNode || // ShadowRoot detected.
    Zp(a) && a.host || // Fallback.
    dn(a)
  );
  return Zp(r) ? r.host : r;
}
function _v(a) {
  const r = ml(a);
  return Va(r) ? a.ownerDocument ? a.ownerDocument.body : a.body : fn(r) && hi(r) ? r : _v(r);
}
function ii(a, r, u) {
  var o;
  r === void 0 && (r = []), u === void 0 && (u = !0);
  const s = _v(a), f = s === ((o = a.ownerDocument) == null ? void 0 : o.body), d = jt(s);
  if (f) {
    const m = $s(d);
    return r.concat(d, d.visualViewport || [], hi(s) ? s : [], m && u ? ii(m) : []);
  }
  return r.concat(s, ii(s, [], u));
}
function $s(a) {
  return a.parent && Object.getPrototypeOf(a.parent) ? a.frameElement : null;
}
function Nv(a) {
  const r = $t(a);
  let u = parseFloat(r.width) || 0, o = parseFloat(r.height) || 0;
  const s = fn(a), f = s ? a.offsetWidth : u, d = s ? a.offsetHeight : o, m = Fo(u) !== f || Fo(o) !== d;
  return m && (u = f, o = d), {
    width: u,
    height: o,
    $: m
  };
}
function bf(a) {
  return Jt(a) ? a : a.contextElement;
}
function Ya(a) {
  const r = bf(a);
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
function Dv(a) {
  const r = jt(a);
  return !yf() || !r.visualViewport ? M1 : {
    x: r.visualViewport.offsetLeft,
    y: r.visualViewport.offsetTop
  };
}
function O1(a, r, u) {
  return r === void 0 && (r = !1), !u || r && u !== jt(a) ? !1 : r;
}
function Yl(a, r, u, o) {
  r === void 0 && (r = !1), u === void 0 && (u = !1);
  const s = a.getBoundingClientRect(), f = bf(a);
  let d = sn(1);
  r && (o ? Jt(o) && (d = Ya(o)) : d = Ya(a));
  const m = O1(f, u, o) ? Dv(f) : sn(0);
  let p = (s.left + m.x) / d.x, h = (s.top + m.y) / d.y, g = s.width / d.x, y = s.height / d.y;
  if (f) {
    const x = jt(f), E = o && Jt(o) ? jt(o) : o;
    let R = x, w = $s(R);
    for (; w && o && E !== R; ) {
      const O = Ya(w), T = w.getBoundingClientRect(), z = $t(w), j = T.left + (w.clientLeft + parseFloat(z.paddingLeft)) * O.x, q = T.top + (w.clientTop + parseFloat(z.paddingTop)) * O.y;
      p *= O.x, h *= O.y, g *= O.x, y *= O.y, p += j, h += q, R = jt(w), w = $s(R);
    }
  }
  return $o({
    width: g,
    height: y,
    x: p,
    y: h
  });
}
function xf(a, r) {
  const u = iu(a).scrollLeft;
  return r ? r.left + u : Yl(dn(a)).left + u;
}
function jv(a, r, u) {
  u === void 0 && (u = !1);
  const o = a.getBoundingClientRect(), s = o.left + r.scrollLeft - (u ? 0 : (
    // RTL <body> scrollbar.
    xf(a, o)
  )), f = o.top + r.scrollTop;
  return {
    x: s,
    y: f
  };
}
function T1(a) {
  let {
    elements: r,
    rect: u,
    offsetParent: o,
    strategy: s
  } = a;
  const f = s === "fixed", d = dn(o), m = r ? ru(r.floating) : !1;
  if (o === d || m && f)
    return u;
  let p = {
    scrollLeft: 0,
    scrollTop: 0
  }, h = sn(1);
  const g = sn(0), y = fn(o);
  if ((y || !y && !f) && ((Za(o) !== "body" || hi(d)) && (p = iu(o)), fn(o))) {
    const E = Yl(o);
    h = Ya(o), g.x = E.x + o.clientLeft, g.y = E.y + o.clientTop;
  }
  const x = d && !y && !f ? jv(d, p, !0) : sn(0);
  return {
    width: u.width * h.x,
    height: u.height * h.y,
    x: u.x * h.x - p.scrollLeft * h.x + g.x + x.x,
    y: u.y * h.y - p.scrollTop * h.y + g.y + x.y
  };
}
function _1(a) {
  return Array.from(a.getClientRects());
}
function N1(a) {
  const r = dn(a), u = iu(a), o = a.ownerDocument.body, s = Dt(r.scrollWidth, r.clientWidth, o.scrollWidth, o.clientWidth), f = Dt(r.scrollHeight, r.clientHeight, o.scrollHeight, o.clientHeight);
  let d = -u.scrollLeft + xf(a);
  const m = -u.scrollTop;
  return $t(o).direction === "rtl" && (d += Dt(r.clientWidth, o.clientWidth) - s), {
    width: s,
    height: f,
    x: d,
    y: m
  };
}
function D1(a, r) {
  const u = jt(a), o = dn(a), s = u.visualViewport;
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
function j1(a, r) {
  const u = Yl(a, !0, r === "fixed"), o = u.top + a.clientTop, s = u.left + a.clientLeft, f = fn(a) ? Ya(a) : sn(1), d = a.clientWidth * f.x, m = a.clientHeight * f.y, p = s * f.x, h = o * f.y;
  return {
    width: d,
    height: m,
    x: p,
    y: h
  };
}
function Kp(a, r, u) {
  let o;
  if (r === "viewport")
    o = D1(a, u);
  else if (r === "document")
    o = N1(dn(a));
  else if (Jt(r))
    o = j1(r, u);
  else {
    const s = Dv(a);
    o = {
      x: r.x - s.x,
      y: r.y - s.y,
      width: r.width,
      height: r.height
    };
  }
  return $o(o);
}
function zv(a, r) {
  const u = ml(a);
  return u === r || !Jt(u) || Va(u) ? !1 : $t(u).position === "fixed" || zv(u, r);
}
function z1(a, r) {
  const u = r.get(a);
  if (u)
    return u;
  let o = ii(a, [], !1).filter((m) => Jt(m) && Za(m) !== "body"), s = null;
  const f = $t(a).position === "fixed";
  let d = f ? ml(a) : a;
  for (; Jt(d) && !Va(d); ) {
    const m = $t(d), p = gf(d);
    !p && m.position === "fixed" && (s = null), (f ? !p && !s : !p && m.position === "static" && !!s && ["absolute", "fixed"].includes(s.position) || hi(d) && !p && zv(a, d)) ? o = o.filter((g) => g !== d) : s = m, d = ml(d);
  }
  return r.set(a, o), o;
}
function U1(a) {
  let {
    element: r,
    boundary: u,
    rootBoundary: o,
    strategy: s
  } = a;
  const d = [...u === "clippingAncestors" ? ru(r) ? [] : z1(r, this._c) : [].concat(u), o], m = d[0], p = d.reduce((h, g) => {
    const y = Kp(r, g, s);
    return h.top = Dt(y.top, h.top), h.right = dl(y.right, h.right), h.bottom = dl(y.bottom, h.bottom), h.left = Dt(y.left, h.left), h;
  }, Kp(r, m, s));
  return {
    width: p.right - p.left,
    height: p.bottom - p.top,
    x: p.left,
    y: p.top
  };
}
function L1(a) {
  const {
    width: r,
    height: u
  } = Nv(a);
  return {
    width: r,
    height: u
  };
}
function k1(a, r, u) {
  const o = fn(r), s = dn(r), f = u === "fixed", d = Yl(a, !0, f, r);
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
      const E = Yl(r, !0, f, r);
      p.x = E.x + r.clientLeft, p.y = E.y + r.clientTop;
    } else s && h();
  f && !o && s && h();
  const g = s && !o && !f ? jv(s, m) : sn(0), y = d.left + m.scrollLeft - p.x - g.x, x = d.top + m.scrollTop - p.y - g.y;
  return {
    x: y,
    y: x,
    width: d.width,
    height: d.height
  };
}
function Ds(a) {
  return $t(a).position === "static";
}
function Pp(a, r) {
  if (!fn(a) || $t(a).position === "fixed")
    return null;
  if (r)
    return r(a);
  let u = a.offsetParent;
  return dn(a) === u && (u = u.ownerDocument.body), u;
}
function Uv(a, r) {
  const u = jt(a);
  if (ru(a))
    return u;
  if (!fn(a)) {
    let s = ml(a);
    for (; s && !Va(s); ) {
      if (Jt(s) && !Ds(s))
        return s;
      s = ml(s);
    }
    return u;
  }
  let o = Pp(a, r);
  for (; o && C1(o) && Ds(o); )
    o = Pp(o, r);
  return o && Va(o) && Ds(o) && !gf(o) ? u : o || R1(a) || u;
}
const B1 = async function(a) {
  const r = this.getOffsetParent || Uv, u = this.getDimensions, o = await u(a.floating);
  return {
    reference: k1(a.reference, await r(a.floating), a.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function H1(a) {
  return $t(a).direction === "rtl";
}
const G1 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: T1,
  getDocumentElement: dn,
  getClippingRect: U1,
  getOffsetParent: Uv,
  getElementRects: B1,
  getClientRects: _1,
  getDimensions: L1,
  getScale: Ya,
  isElement: Jt,
  isRTL: H1
};
function Lv(a, r) {
  return a.x === r.x && a.y === r.y && a.width === r.width && a.height === r.height;
}
function Y1(a, r) {
  let u = null, o;
  const s = dn(a);
  function f() {
    var m;
    clearTimeout(o), (m = u) == null || m.disconnect(), u = null;
  }
  function d(m, p) {
    m === void 0 && (m = !1), p === void 0 && (p = 1), f();
    const h = a.getBoundingClientRect(), {
      left: g,
      top: y,
      width: x,
      height: E
    } = h;
    if (m || r(), !x || !E)
      return;
    const R = Lo(y), w = Lo(s.clientWidth - (g + x)), O = Lo(s.clientHeight - (y + E)), T = Lo(g), j = {
      rootMargin: -R + "px " + -w + "px " + -O + "px " + -T + "px",
      threshold: Dt(0, dl(1, p)) || 1
    };
    let q = !0;
    function G(P) {
      const Z = P[0].intersectionRatio;
      if (Z !== p) {
        if (!q)
          return d();
        Z ? d(!1, Z) : o = setTimeout(() => {
          d(!1, 1e-7);
        }, 1e3);
      }
      Z === 1 && !Lv(h, a.getBoundingClientRect()) && d(), q = !1;
    }
    try {
      u = new IntersectionObserver(G, {
        ...j,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      u = new IntersectionObserver(G, j);
    }
    u.observe(a);
  }
  return d(!0), f;
}
function q1(a, r, u, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: f = !0,
    elementResize: d = typeof ResizeObserver == "function",
    layoutShift: m = typeof IntersectionObserver == "function",
    animationFrame: p = !1
  } = o, h = bf(a), g = s || f ? [...h ? ii(h) : [], ...ii(r)] : [];
  g.forEach((T) => {
    s && T.addEventListener("scroll", u, {
      passive: !0
    }), f && T.addEventListener("resize", u);
  });
  const y = h && m ? Y1(h, u) : null;
  let x = -1, E = null;
  d && (E = new ResizeObserver((T) => {
    let [z] = T;
    z && z.target === h && E && (E.unobserve(r), cancelAnimationFrame(x), x = requestAnimationFrame(() => {
      var j;
      (j = E) == null || j.observe(r);
    })), u();
  }), h && !p && E.observe(h), E.observe(r));
  let R, w = p ? Yl(a) : null;
  p && O();
  function O() {
    const T = Yl(a);
    w && !Lv(w, T) && u(), w = T, R = requestAnimationFrame(O);
  }
  return u(), () => {
    var T;
    g.forEach((z) => {
      s && z.removeEventListener("scroll", u), f && z.removeEventListener("resize", u);
    }), y == null || y(), (T = E) == null || T.disconnect(), E = null, p && cancelAnimationFrame(R);
  };
}
const V1 = S1, X1 = E1, Q1 = y1, Z1 = A1, K1 = b1, Fp = g1, P1 = w1, F1 = (a, r, u) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: G1,
    ...u
  }, f = {
    ...s.platform,
    _c: o
  };
  return v1(a, r, {
    ...s,
    platform: f
  });
};
var Zo = typeof document < "u" ? A.useLayoutEffect : A.useEffect;
function Wo(a, r) {
  if (a === r)
    return !0;
  if (typeof a != typeof r)
    return !1;
  if (typeof a == "function" && a.toString() === r.toString())
    return !0;
  let u, o, s;
  if (a && r && typeof a == "object") {
    if (Array.isArray(a)) {
      if (u = a.length, u !== r.length) return !1;
      for (o = u; o-- !== 0; )
        if (!Wo(a[o], r[o]))
          return !1;
      return !0;
    }
    if (s = Object.keys(a), u = s.length, u !== Object.keys(r).length)
      return !1;
    for (o = u; o-- !== 0; )
      if (!{}.hasOwnProperty.call(r, s[o]))
        return !1;
    for (o = u; o-- !== 0; ) {
      const f = s[o];
      if (!(f === "_owner" && a.$$typeof) && !Wo(a[f], r[f]))
        return !1;
    }
    return !0;
  }
  return a !== a && r !== r;
}
function kv(a) {
  return typeof window > "u" ? 1 : (a.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Jp(a, r) {
  const u = kv(a);
  return Math.round(r * u) / u;
}
function js(a) {
  const r = A.useRef(a);
  return Zo(() => {
    r.current = a;
  }), r;
}
function J1(a) {
  a === void 0 && (a = {});
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
  } = a, [g, y] = A.useState({
    x: 0,
    y: 0,
    strategy: u,
    placement: r,
    middlewareData: {},
    isPositioned: !1
  }), [x, E] = A.useState(o);
  Wo(x, o) || E(o);
  const [R, w] = A.useState(null), [O, T] = A.useState(null), z = A.useCallback((k) => {
    k !== P.current && (P.current = k, w(k));
  }, []), j = A.useCallback((k) => {
    k !== Z.current && (Z.current = k, T(k));
  }, []), q = f || R, G = d || O, P = A.useRef(null), Z = A.useRef(null), Y = A.useRef(g), te = p != null, ee = js(p), le = js(s), re = js(h), se = A.useCallback(() => {
    if (!P.current || !Z.current)
      return;
    const k = {
      placement: r,
      strategy: u,
      middleware: x
    };
    le.current && (k.platform = le.current), F1(P.current, Z.current, k).then(($) => {
      const C = {
        ...$,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: re.current !== !1
      };
      me.current && !Wo(Y.current, C) && (Y.current = C, mf.flushSync(() => {
        y(C);
      }));
    });
  }, [x, r, u, le, re]);
  Zo(() => {
    h === !1 && Y.current.isPositioned && (Y.current.isPositioned = !1, y((k) => ({
      ...k,
      isPositioned: !1
    })));
  }, [h]);
  const me = A.useRef(!1);
  Zo(() => (me.current = !0, () => {
    me.current = !1;
  }), []), Zo(() => {
    if (q && (P.current = q), G && (Z.current = G), q && G) {
      if (ee.current)
        return ee.current(q, G, se);
      se();
    }
  }, [q, G, se, ee, te]);
  const Q = A.useMemo(() => ({
    reference: P,
    floating: Z,
    setReference: z,
    setFloating: j
  }), [z, j]), N = A.useMemo(() => ({
    reference: q,
    floating: G
  }), [q, G]), V = A.useMemo(() => {
    const k = {
      position: u,
      left: 0,
      top: 0
    };
    if (!N.floating)
      return k;
    const $ = Jp(N.floating, g.x), C = Jp(N.floating, g.y);
    return m ? {
      ...k,
      transform: "translate(" + $ + "px, " + C + "px)",
      ...kv(N.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: u,
      left: $,
      top: C
    };
  }, [u, m, N.floating, g.x, g.y]);
  return A.useMemo(() => ({
    ...g,
    update: se,
    refs: Q,
    elements: N,
    floatingStyles: V
  }), [g, se, Q, N, V]);
}
const $1 = (a) => {
  function r(u) {
    return {}.hasOwnProperty.call(u, "current");
  }
  return {
    name: "arrow",
    options: a,
    fn(u) {
      const {
        element: o,
        padding: s
      } = typeof a == "function" ? a(u) : a;
      return o && r(o) ? o.current != null ? Fp({
        element: o.current,
        padding: s
      }).fn(u) : {} : o ? Fp({
        element: o,
        padding: s
      }).fn(u) : {};
    }
  };
}, W1 = (a, r) => ({
  ...V1(a),
  options: [a, r]
}), I1 = (a, r) => ({
  ...X1(a),
  options: [a, r]
}), ex = (a, r) => ({
  ...P1(a),
  options: [a, r]
}), tx = (a, r) => ({
  ...Q1(a),
  options: [a, r]
}), nx = (a, r) => ({
  ...Z1(a),
  options: [a, r]
}), lx = (a, r) => ({
  ...K1(a),
  options: [a, r]
}), ax = (a, r) => ({
  ...$1(a),
  options: [a, r]
});
var rx = "Arrow", Bv = A.forwardRef((a, r) => {
  const { children: u, width: o = 10, height: s = 5, ...f } = a;
  return /* @__PURE__ */ S.jsx(
    vt.svg,
    {
      ...f,
      ref: r,
      width: o,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: a.asChild ? u : /* @__PURE__ */ S.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Bv.displayName = rx;
var ix = Bv;
function ox(a) {
  const [r, u] = A.useState(void 0);
  return fl(() => {
    if (a) {
      u({ width: a.offsetWidth, height: a.offsetHeight });
      const o = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const f = s[0];
        let d, m;
        if ("borderBoxSize" in f) {
          const p = f.borderBoxSize, h = Array.isArray(p) ? p[0] : p;
          d = h.inlineSize, m = h.blockSize;
        } else
          d = a.offsetWidth, m = a.offsetHeight;
        u({ width: d, height: m });
      });
      return o.observe(a, { box: "border-box" }), () => o.unobserve(a);
    } else
      u(void 0);
  }, [a]), r;
}
var Sf = "Popper", [Hv, Gv] = mi(Sf), [ux, Yv] = Hv(Sf), qv = (a) => {
  const { __scopePopper: r, children: u } = a, [o, s] = A.useState(null);
  return /* @__PURE__ */ S.jsx(ux, { scope: r, anchor: o, onAnchorChange: s, children: u });
};
qv.displayName = Sf;
var Vv = "PopperAnchor", Xv = A.forwardRef(
  (a, r) => {
    const { __scopePopper: u, virtualRef: o, ...s } = a, f = Yv(Vv, u), d = A.useRef(null), m = At(r, d);
    return A.useEffect(() => {
      f.onAnchorChange((o == null ? void 0 : o.current) || d.current);
    }), o ? null : /* @__PURE__ */ S.jsx(vt.div, { ...s, ref: m });
  }
);
Xv.displayName = Vv;
var Ef = "PopperContent", [cx, sx] = Hv(Ef), Qv = A.forwardRef(
  (a, r) => {
    var de, ve, Ce, Be, Me, ae;
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
      hideWhenDetached: x = !1,
      updatePositionStrategy: E = "optimized",
      onPlaced: R,
      ...w
    } = a, O = Yv(Ef, u), [T, z] = A.useState(null), j = At(r, (Re) => z(Re)), [q, G] = A.useState(null), P = ox(q), Z = (P == null ? void 0 : P.width) ?? 0, Y = (P == null ? void 0 : P.height) ?? 0, te = o + (f !== "center" ? "-" + f : ""), ee = typeof g == "number" ? g : { top: 0, right: 0, bottom: 0, left: 0, ...g }, le = Array.isArray(h) ? h : [h], re = le.length > 0, se = {
      padding: ee,
      boundary: le.filter(dx),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: re
    }, { refs: me, floatingStyles: Q, placement: N, isPositioned: V, middlewareData: k } = J1({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: te,
      whileElementsMounted: (...Re) => q1(...Re, {
        animationFrame: E === "always"
      }),
      elements: {
        reference: O.anchor
      },
      middleware: [
        W1({ mainAxis: s + Y, alignmentAxis: d }),
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
        mx({ arrowWidth: Z, arrowHeight: Y }),
        x && lx({ strategy: "referenceHidden", ...se })
      ]
    }), [$, C] = Pv(N), X = zn(R);
    fl(() => {
      V && (X == null || X());
    }, [V, X]);
    const I = (de = k.arrow) == null ? void 0 : de.x, W = (ve = k.arrow) == null ? void 0 : ve.y, ne = ((Ce = k.arrow) == null ? void 0 : Ce.centerOffset) !== 0, [ge, ce] = A.useState();
    return fl(() => {
      T && ce(window.getComputedStyle(T).zIndex);
    }, [T]), /* @__PURE__ */ S.jsx(
      "div",
      {
        ref: me.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Q,
          transform: V ? Q.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ge,
          "--radix-popper-transform-origin": [
            (Be = k.transformOrigin) == null ? void 0 : Be.x,
            (Me = k.transformOrigin) == null ? void 0 : Me.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((ae = k.hide) == null ? void 0 : ae.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: a.dir,
        children: /* @__PURE__ */ S.jsx(
          cx,
          {
            scope: u,
            placedSide: $,
            onArrowChange: G,
            arrowX: I,
            arrowY: W,
            shouldHideArrow: ne,
            children: /* @__PURE__ */ S.jsx(
              vt.div,
              {
                "data-side": $,
                "data-align": C,
                ...w,
                ref: j,
                style: {
                  ...w.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: V ? void 0 : "none"
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
}, Kv = A.forwardRef(function(r, u) {
  const { __scopePopper: o, ...s } = r, f = sx(Zv, o), d = fx[f.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ S.jsx(
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
        children: /* @__PURE__ */ S.jsx(
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
function dx(a) {
  return a !== null;
}
var mx = (a) => ({
  name: "transformOrigin",
  options: a,
  fn(r) {
    var O, T, z;
    const { placement: u, rects: o, middlewareData: s } = r, d = ((O = s.arrow) == null ? void 0 : O.centerOffset) !== 0, m = d ? 0 : a.arrowWidth, p = d ? 0 : a.arrowHeight, [h, g] = Pv(u), y = { start: "0%", center: "50%", end: "100%" }[g], x = (((T = s.arrow) == null ? void 0 : T.x) ?? 0) + m / 2, E = (((z = s.arrow) == null ? void 0 : z.y) ?? 0) + p / 2;
    let R = "", w = "";
    return h === "bottom" ? (R = d ? y : `${x}px`, w = `${-p}px`) : h === "top" ? (R = d ? y : `${x}px`, w = `${o.floating.height + p}px`) : h === "right" ? (R = `${-p}px`, w = d ? y : `${E}px`) : h === "left" && (R = `${o.floating.width + p}px`, w = d ? y : `${E}px`), { data: { x: R, y: w } };
  }
});
function Pv(a) {
  const [r, u = "center"] = a.split("-");
  return [r, u];
}
var hx = qv, px = Xv, vx = Qv, gx = Kv, yx = "Portal", Fv = A.forwardRef((a, r) => {
  var m;
  const { container: u, ...o } = a, [s, f] = A.useState(!1);
  fl(() => f(!0), []);
  const d = u || s && ((m = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : m.body);
  return d ? Ir.createPortal(/* @__PURE__ */ S.jsx(vt.div, { ...o, ref: r }), d) : null;
});
Fv.displayName = yx;
function bx(a, r) {
  return A.useReducer((u, o) => r[u][o] ?? u, a);
}
var pi = (a) => {
  const { present: r, children: u } = a, o = xx(r), s = typeof u == "function" ? u({ present: o.isPresent }) : A.Children.only(u), f = At(o.ref, Sx(s));
  return typeof u == "function" || o.isPresent ? A.cloneElement(s, { ref: f }) : null;
};
pi.displayName = "Presence";
function xx(a) {
  const [r, u] = A.useState(), o = A.useRef(null), s = A.useRef(a), f = A.useRef("none"), d = a ? "mounted" : "unmounted", [m, p] = bx(d, {
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
  return A.useEffect(() => {
    const h = ko(o.current);
    f.current = m === "mounted" ? h : "none";
  }, [m]), fl(() => {
    const h = o.current, g = s.current;
    if (g !== a) {
      const x = f.current, E = ko(h);
      a ? p("MOUNT") : E === "none" || (h == null ? void 0 : h.display) === "none" ? p("UNMOUNT") : p(g && x !== E ? "ANIMATION_OUT" : "UNMOUNT"), s.current = a;
    }
  }, [a, p]), fl(() => {
    if (r) {
      let h;
      const g = r.ownerDocument.defaultView ?? window, y = (E) => {
        const w = ko(o.current).includes(E.animationName);
        if (E.target === r && w && (p("ANIMATION_END"), !s.current)) {
          const O = r.style.animationFillMode;
          r.style.animationFillMode = "forwards", h = g.setTimeout(() => {
            r.style.animationFillMode === "forwards" && (r.style.animationFillMode = O);
          });
        }
      }, x = (E) => {
        E.target === r && (f.current = ko(o.current));
      };
      return r.addEventListener("animationstart", x), r.addEventListener("animationcancel", y), r.addEventListener("animationend", y), () => {
        g.clearTimeout(h), r.removeEventListener("animationstart", x), r.removeEventListener("animationcancel", y), r.removeEventListener("animationend", y);
      };
    } else
      p("ANIMATION_END");
  }, [r, p]), {
    isPresent: ["mounted", "unmountSuspended"].includes(m),
    ref: A.useCallback((h) => {
      o.current = h ? getComputedStyle(h) : null, u(h);
    }, [])
  };
}
function ko(a) {
  return (a == null ? void 0 : a.animationName) || "none";
}
function Sx(a) {
  var o, s;
  let r = (o = Object.getOwnPropertyDescriptor(a.props, "ref")) == null ? void 0 : o.get, u = r && "isReactWarning" in r && r.isReactWarning;
  return u ? a.ref : (r = (s = Object.getOwnPropertyDescriptor(a, "ref")) == null ? void 0 : s.get, u = r && "isReactWarning" in r && r.isReactWarning, u ? a.props.ref : a.props.ref || a.ref);
}
var zs = "rovingFocusGroup.onEntryFocus", Ex = { bubbles: !1, cancelable: !0 }, vi = "RovingFocusGroup", [Ws, Jv, wx] = Sv(vi), [Ax, $v] = mi(
  vi,
  [wx]
), [Cx, Rx] = Ax(vi), Wv = A.forwardRef(
  (a, r) => /* @__PURE__ */ S.jsx(Ws.Provider, { scope: a.__scopeRovingFocusGroup, children: /* @__PURE__ */ S.jsx(Ws.Slot, { scope: a.__scopeRovingFocusGroup, children: /* @__PURE__ */ S.jsx(Mx, { ...a, ref: r }) }) })
);
Wv.displayName = vi;
var Mx = A.forwardRef((a, r) => {
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
  } = a, x = A.useRef(null), E = At(r, x), R = Ev(f), [w, O] = bv({
    prop: d,
    defaultProp: m ?? null,
    onChange: p,
    caller: vi
  }), [T, z] = A.useState(!1), j = zn(h), q = Jv(u), G = A.useRef(!1), [P, Z] = A.useState(0);
  return A.useEffect(() => {
    const Y = x.current;
    if (Y)
      return Y.addEventListener(zs, j), () => Y.removeEventListener(zs, j);
  }, [j]), /* @__PURE__ */ S.jsx(
    Cx,
    {
      scope: u,
      orientation: o,
      dir: R,
      loop: s,
      currentTabStopId: w,
      onItemFocus: A.useCallback(
        (Y) => O(Y),
        [O]
      ),
      onItemShiftTab: A.useCallback(() => z(!0), []),
      onFocusableItemAdd: A.useCallback(
        () => Z((Y) => Y + 1),
        []
      ),
      onFocusableItemRemove: A.useCallback(
        () => Z((Y) => Y - 1),
        []
      ),
      children: /* @__PURE__ */ S.jsx(
        vt.div,
        {
          tabIndex: T || P === 0 ? -1 : 0,
          "data-orientation": o,
          ...y,
          ref: E,
          style: { outline: "none", ...a.style },
          onMouseDown: Te(a.onMouseDown, () => {
            G.current = !0;
          }),
          onFocus: Te(a.onFocus, (Y) => {
            const te = !G.current;
            if (Y.target === Y.currentTarget && te && !T) {
              const ee = new CustomEvent(zs, Ex);
              if (Y.currentTarget.dispatchEvent(ee), !ee.defaultPrevented) {
                const le = q().filter((N) => N.focusable), re = le.find((N) => N.active), se = le.find((N) => N.id === w), Q = [re, se, ...le].filter(
                  Boolean
                ).map((N) => N.ref.current);
                tg(Q, g);
              }
            }
            G.current = !1;
          }),
          onBlur: Te(a.onBlur, () => z(!1))
        }
      )
    }
  );
}), Iv = "RovingFocusGroupItem", eg = A.forwardRef(
  (a, r) => {
    const {
      __scopeRovingFocusGroup: u,
      focusable: o = !0,
      active: s = !1,
      tabStopId: f,
      children: d,
      ...m
    } = a, p = Ps(), h = f || p, g = Rx(Iv, u), y = g.currentTabStopId === h, x = Jv(u), { onFocusableItemAdd: E, onFocusableItemRemove: R, currentTabStopId: w } = g;
    return A.useEffect(() => {
      if (o)
        return E(), () => R();
    }, [o, E, R]), /* @__PURE__ */ S.jsx(
      Ws.ItemSlot,
      {
        scope: u,
        id: h,
        focusable: o,
        active: s,
        children: /* @__PURE__ */ S.jsx(
          vt.span,
          {
            tabIndex: y ? 0 : -1,
            "data-orientation": g.orientation,
            ...m,
            ref: r,
            onMouseDown: Te(a.onMouseDown, (O) => {
              o ? g.onItemFocus(h) : O.preventDefault();
            }),
            onFocus: Te(a.onFocus, () => g.onItemFocus(h)),
            onKeyDown: Te(a.onKeyDown, (O) => {
              if (O.key === "Tab" && O.shiftKey) {
                g.onItemShiftTab();
                return;
              }
              if (O.target !== O.currentTarget) return;
              const T = _x(O, g.orientation, g.dir);
              if (T !== void 0) {
                if (O.metaKey || O.ctrlKey || O.altKey || O.shiftKey) return;
                O.preventDefault();
                let j = x().filter((q) => q.focusable).map((q) => q.ref.current);
                if (T === "last") j.reverse();
                else if (T === "prev" || T === "next") {
                  T === "prev" && j.reverse();
                  const q = j.indexOf(O.currentTarget);
                  j = g.loop ? Nx(j, q + 1) : j.slice(q + 1);
                }
                setTimeout(() => tg(j));
              }
            }),
            children: typeof d == "function" ? d({ isCurrentTabStop: y, hasTabStop: w != null }) : d
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
function Tx(a, r) {
  return r !== "rtl" ? a : a === "ArrowLeft" ? "ArrowRight" : a === "ArrowRight" ? "ArrowLeft" : a;
}
function _x(a, r, u) {
  const o = Tx(a.key, u);
  if (!(r === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(r === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return Ox[o];
}
function tg(a, r = !1) {
  const u = document.activeElement;
  for (const o of a)
    if (o === u || (o.focus({ preventScroll: r }), document.activeElement !== u)) return;
}
function Nx(a, r) {
  return a.map((u, o) => a[(r + o) % a.length]);
}
var Dx = Wv, jx = eg, zx = function(a) {
  if (typeof document > "u")
    return null;
  var r = Array.isArray(a) ? a[0] : a;
  return r.ownerDocument.body;
}, Ua = /* @__PURE__ */ new WeakMap(), Bo = /* @__PURE__ */ new WeakMap(), Ho = {}, Us = 0, ng = function(a) {
  return a && (a.host || ng(a.parentNode));
}, Ux = function(a, r) {
  return r.map(function(u) {
    if (a.contains(u))
      return u;
    var o = ng(u);
    return o && a.contains(o) ? o : (console.error("aria-hidden", u, "in not contained inside", a, ". Doing nothing"), null);
  }).filter(function(u) {
    return !!u;
  });
}, Lx = function(a, r, u, o) {
  var s = Ux(r, Array.isArray(a) ? a : [a]);
  Ho[u] || (Ho[u] = /* @__PURE__ */ new WeakMap());
  var f = Ho[u], d = [], m = /* @__PURE__ */ new Set(), p = new Set(s), h = function(y) {
    !y || m.has(y) || (m.add(y), h(y.parentNode));
  };
  s.forEach(h);
  var g = function(y) {
    !y || p.has(y) || Array.prototype.forEach.call(y.children, function(x) {
      if (m.has(x))
        g(x);
      else
        try {
          var E = x.getAttribute(o), R = E !== null && E !== "false", w = (Ua.get(x) || 0) + 1, O = (f.get(x) || 0) + 1;
          Ua.set(x, w), f.set(x, O), d.push(x), w === 1 && R && Bo.set(x, !0), O === 1 && x.setAttribute(u, "true"), R || x.setAttribute(o, "true");
        } catch (T) {
          console.error("aria-hidden: cannot operate on ", x, T);
        }
    });
  };
  return g(r), m.clear(), Us++, function() {
    d.forEach(function(y) {
      var x = Ua.get(y) - 1, E = f.get(y) - 1;
      Ua.set(y, x), f.set(y, E), x || (Bo.has(y) || y.removeAttribute(o), Bo.delete(y)), E || y.removeAttribute(u);
    }), Us--, Us || (Ua = /* @__PURE__ */ new WeakMap(), Ua = /* @__PURE__ */ new WeakMap(), Bo = /* @__PURE__ */ new WeakMap(), Ho = {});
  };
}, kx = function(a, r, u) {
  u === void 0 && (u = "data-aria-hidden");
  var o = Array.from(Array.isArray(a) ? a : [a]), s = zx(a);
  return s ? (o.push.apply(o, Array.from(s.querySelectorAll("[aria-live]"))), Lx(o, s, u, "aria-hidden")) : function() {
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
function lg(a, r) {
  var u = {};
  for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && r.indexOf(o) < 0 && (u[o] = a[o]);
  if (a != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, o = Object.getOwnPropertySymbols(a); s < o.length; s++)
      r.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(a, o[s]) && (u[o[s]] = a[o[s]]);
  return u;
}
function Bx(a, r, u) {
  if (u || arguments.length === 2) for (var o = 0, s = r.length, f; o < s; o++)
    (f || !(o in r)) && (f || (f = Array.prototype.slice.call(r, 0, o)), f[o] = r[o]);
  return a.concat(f || Array.prototype.slice.call(r));
}
var Ko = "right-scroll-bar-position", Po = "width-before-scroll-bar", Hx = "with-scroll-bars-hidden", Gx = "--removed-body-scroll-bar-size";
function Ls(a, r) {
  return typeof a == "function" ? a(r) : a && (a.current = r), a;
}
function Yx(a, r) {
  var u = A.useState(function() {
    return {
      // value
      value: a,
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
var qx = typeof window < "u" ? A.useLayoutEffect : A.useEffect, $p = /* @__PURE__ */ new WeakMap();
function Vx(a, r) {
  var u = Yx(null, function(o) {
    return a.forEach(function(s) {
      return Ls(s, o);
    });
  });
  return qx(function() {
    var o = $p.get(u);
    if (o) {
      var s = new Set(o), f = new Set(a), d = u.current;
      s.forEach(function(m) {
        f.has(m) || Ls(m, null);
      }), f.forEach(function(m) {
        s.has(m) || Ls(m, d);
      });
    }
    $p.set(u, a);
  }, [a]), u;
}
function Xx(a) {
  return a;
}
function Qx(a, r) {
  r === void 0 && (r = Xx);
  var u = [], o = !1, s = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return u.length ? u[u.length - 1] : a;
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
function Zx(a) {
  a === void 0 && (a = {});
  var r = Qx(null);
  return r.options = un({ async: !0, ssr: !1 }, a), r;
}
var ag = function(a) {
  var r = a.sideCar, u = lg(a, ["sideCar"]);
  if (!r)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = r.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return A.createElement(o, un({}, u));
};
ag.isSideCarExport = !0;
function Kx(a, r) {
  return a.useMedium(r), ag;
}
var rg = Zx(), ks = function() {
}, ou = A.forwardRef(function(a, r) {
  var u = A.useRef(null), o = A.useState({
    onScrollCapture: ks,
    onWheelCapture: ks,
    onTouchMoveCapture: ks
  }), s = o[0], f = o[1], d = a.forwardProps, m = a.children, p = a.className, h = a.removeScrollBar, g = a.enabled, y = a.shards, x = a.sideCar, E = a.noIsolation, R = a.inert, w = a.allowPinchZoom, O = a.as, T = O === void 0 ? "div" : O, z = a.gapMode, j = lg(a, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), q = x, G = Vx([u, r]), P = un(un({}, j), s);
  return A.createElement(
    A.Fragment,
    null,
    g && A.createElement(q, { sideCar: rg, removeScrollBar: h, shards: y, noIsolation: E, inert: R, setCallbacks: f, allowPinchZoom: !!w, lockRef: u, gapMode: z }),
    d ? A.cloneElement(A.Children.only(m), un(un({}, P), { ref: G })) : A.createElement(T, un({}, P, { className: p, ref: G }), m)
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
  var a = document.createElement("style");
  a.type = "text/css";
  var r = Px();
  return r && a.setAttribute("nonce", r), a;
}
function Jx(a, r) {
  a.styleSheet ? a.styleSheet.cssText = r : a.appendChild(document.createTextNode(r));
}
function $x(a) {
  var r = document.head || document.getElementsByTagName("head")[0];
  r.appendChild(a);
}
var Wx = function() {
  var a = 0, r = null;
  return {
    add: function(u) {
      a == 0 && (r = Fx()) && (Jx(r, u), $x(r)), a++;
    },
    remove: function() {
      a--, !a && r && (r.parentNode && r.parentNode.removeChild(r), r = null);
    }
  };
}, Ix = function() {
  var a = Wx();
  return function(r, u) {
    A.useEffect(function() {
      return a.add(r), function() {
        a.remove();
      };
    }, [r && u]);
  };
}, ig = function() {
  var a = Ix(), r = function(u) {
    var o = u.styles, s = u.dynamic;
    return a(o, s), null;
  };
  return r;
}, eS = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Bs = function(a) {
  return parseInt(a || "", 10) || 0;
}, tS = function(a) {
  var r = window.getComputedStyle(document.body), u = r[a === "padding" ? "paddingLeft" : "marginLeft"], o = r[a === "padding" ? "paddingTop" : "marginTop"], s = r[a === "padding" ? "paddingRight" : "marginRight"];
  return [Bs(u), Bs(o), Bs(s)];
}, nS = function(a) {
  if (a === void 0 && (a = "margin"), typeof window > "u")
    return eS;
  var r = tS(a), u = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: r[0],
    top: r[1],
    right: r[2],
    gap: Math.max(0, o - u + r[2] - r[0])
  };
}, lS = ig(), qa = "data-scroll-locked", aS = function(a, r, u, o) {
  var s = a.left, f = a.top, d = a.right, m = a.gap;
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
  var a = parseInt(document.body.getAttribute(qa) || "0", 10);
  return isFinite(a) ? a : 0;
}, rS = function() {
  A.useEffect(function() {
    return document.body.setAttribute(qa, (Wp() + 1).toString()), function() {
      var a = Wp() - 1;
      a <= 0 ? document.body.removeAttribute(qa) : document.body.setAttribute(qa, a.toString());
    };
  }, []);
}, iS = function(a) {
  var r = a.noRelative, u = a.noImportant, o = a.gapMode, s = o === void 0 ? "margin" : o;
  rS();
  var f = A.useMemo(function() {
    return nS(s);
  }, [s]);
  return A.createElement(lS, { styles: aS(f, !r, s, u ? "" : "!important") });
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
var La = Is ? { passive: !1 } : !1, oS = function(a) {
  return a.tagName === "TEXTAREA";
}, og = function(a, r) {
  if (!(a instanceof Element))
    return !1;
  var u = window.getComputedStyle(a);
  return (
    // not-not-scrollable
    u[r] !== "hidden" && // contains scroll inside self
    !(u.overflowY === u.overflowX && !oS(a) && u[r] === "visible")
  );
}, uS = function(a) {
  return og(a, "overflowY");
}, cS = function(a) {
  return og(a, "overflowX");
}, Ip = function(a, r) {
  var u = r.ownerDocument, o = r;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var s = ug(a, o);
    if (s) {
      var f = cg(a, o), d = f[1], m = f[2];
      if (d > m)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== u.body);
  return !1;
}, sS = function(a) {
  var r = a.scrollTop, u = a.scrollHeight, o = a.clientHeight;
  return [
    r,
    u,
    o
  ];
}, fS = function(a) {
  var r = a.scrollLeft, u = a.scrollWidth, o = a.clientWidth;
  return [
    r,
    u,
    o
  ];
}, ug = function(a, r) {
  return a === "v" ? uS(r) : cS(r);
}, cg = function(a, r) {
  return a === "v" ? sS(r) : fS(r);
}, dS = function(a, r) {
  return a === "h" && r === "rtl" ? -1 : 1;
}, mS = function(a, r, u, o, s) {
  var f = dS(a, window.getComputedStyle(r).direction), d = f * o, m = u.target, p = r.contains(m), h = !1, g = d > 0, y = 0, x = 0;
  do {
    var E = cg(a, m), R = E[0], w = E[1], O = E[2], T = w - O - f * R;
    (R || T) && ug(a, m) && (y += T, x += R), m instanceof ShadowRoot ? m = m.host : m = m.parentNode;
  } while (
    // portaled content
    !p && m !== document.body || // self content
    p && (r.contains(m) || r === m)
  );
  return (g && Math.abs(y) < 1 || !g && Math.abs(x) < 1) && (h = !0), h;
}, Yo = function(a) {
  return "changedTouches" in a ? [a.changedTouches[0].clientX, a.changedTouches[0].clientY] : [0, 0];
}, ev = function(a) {
  return [a.deltaX, a.deltaY];
}, tv = function(a) {
  return a && "current" in a ? a.current : a;
}, hS = function(a, r) {
  return a[0] === r[0] && a[1] === r[1];
}, pS = function(a) {
  return `
  .block-interactivity-`.concat(a, ` {pointer-events: none;}
  .allow-interactivity-`).concat(a, ` {pointer-events: all;}
`);
}, vS = 0, ka = [];
function gS(a) {
  var r = A.useRef([]), u = A.useRef([0, 0]), o = A.useRef(), s = A.useState(vS++)[0], f = A.useState(ig)[0], d = A.useRef(a);
  A.useEffect(function() {
    d.current = a;
  }, [a]), A.useEffect(function() {
    if (a.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var w = Bx([a.lockRef.current], (a.shards || []).map(tv), !0).filter(Boolean);
      return w.forEach(function(O) {
        return O.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), w.forEach(function(O) {
          return O.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [a.inert, a.lockRef.current, a.shards]);
  var m = A.useCallback(function(w, O) {
    if ("touches" in w && w.touches.length === 2 || w.type === "wheel" && w.ctrlKey)
      return !d.current.allowPinchZoom;
    var T = Yo(w), z = u.current, j = "deltaX" in w ? w.deltaX : z[0] - T[0], q = "deltaY" in w ? w.deltaY : z[1] - T[1], G, P = w.target, Z = Math.abs(j) > Math.abs(q) ? "h" : "v";
    if ("touches" in w && Z === "h" && P.type === "range")
      return !1;
    var Y = Ip(Z, P);
    if (!Y)
      return !0;
    if (Y ? G = Z : (G = Z === "v" ? "h" : "v", Y = Ip(Z, P)), !Y)
      return !1;
    if (!o.current && "changedTouches" in w && (j || q) && (o.current = G), !G)
      return !0;
    var te = o.current || G;
    return mS(te, O, w, te === "h" ? j : q);
  }, []), p = A.useCallback(function(w) {
    var O = w;
    if (!(!ka.length || ka[ka.length - 1] !== f)) {
      var T = "deltaY" in O ? ev(O) : Yo(O), z = r.current.filter(function(G) {
        return G.name === O.type && (G.target === O.target || O.target === G.shadowParent) && hS(G.delta, T);
      })[0];
      if (z && z.should) {
        O.cancelable && O.preventDefault();
        return;
      }
      if (!z) {
        var j = (d.current.shards || []).map(tv).filter(Boolean).filter(function(G) {
          return G.contains(O.target);
        }), q = j.length > 0 ? m(O, j[0]) : !d.current.noIsolation;
        q && O.cancelable && O.preventDefault();
      }
    }
  }, []), h = A.useCallback(function(w, O, T, z) {
    var j = { name: w, delta: O, target: T, should: z, shadowParent: yS(T) };
    r.current.push(j), setTimeout(function() {
      r.current = r.current.filter(function(q) {
        return q !== j;
      });
    }, 1);
  }, []), g = A.useCallback(function(w) {
    u.current = Yo(w), o.current = void 0;
  }, []), y = A.useCallback(function(w) {
    h(w.type, ev(w), w.target, m(w, a.lockRef.current));
  }, []), x = A.useCallback(function(w) {
    h(w.type, Yo(w), w.target, m(w, a.lockRef.current));
  }, []);
  A.useEffect(function() {
    return ka.push(f), a.setCallbacks({
      onScrollCapture: y,
      onWheelCapture: y,
      onTouchMoveCapture: x
    }), document.addEventListener("wheel", p, La), document.addEventListener("touchmove", p, La), document.addEventListener("touchstart", g, La), function() {
      ka = ka.filter(function(w) {
        return w !== f;
      }), document.removeEventListener("wheel", p, La), document.removeEventListener("touchmove", p, La), document.removeEventListener("touchstart", g, La);
    };
  }, []);
  var E = a.removeScrollBar, R = a.inert;
  return A.createElement(
    A.Fragment,
    null,
    R ? A.createElement(f, { styles: pS(s) }) : null,
    E ? A.createElement(iS, { gapMode: a.gapMode }) : null
  );
}
function yS(a) {
  for (var r = null; a !== null; )
    a instanceof ShadowRoot && (r = a.host, a = a.host), a = a.parentNode;
  return r;
}
const bS = Kx(rg, gS);
var sg = A.forwardRef(function(a, r) {
  return A.createElement(ou, un({}, a, { ref: r, sideCar: bS }));
});
sg.classNames = ou.classNames;
var ef = ["Enter", " "], xS = ["ArrowDown", "PageUp", "Home"], fg = ["ArrowUp", "PageDown", "End"], SS = [...xS, ...fg], ES = {
  ltr: [...ef, "ArrowRight"],
  rtl: [...ef, "ArrowLeft"]
}, wS = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, gi = "Menu", [oi, AS, CS] = Sv(gi), [Vl, dg] = mi(gi, [
  CS,
  Gv,
  $v
]), uu = Gv(), mg = $v(), [RS, Xl] = Vl(gi), [MS, yi] = Vl(gi), hg = (a) => {
  const { __scopeMenu: r, open: u = !1, children: o, dir: s, onOpenChange: f, modal: d = !0 } = a, m = uu(r), [p, h] = A.useState(null), g = A.useRef(!1), y = zn(f), x = Ev(s);
  return A.useEffect(() => {
    const E = () => {
      g.current = !0, document.addEventListener("pointerdown", R, { capture: !0, once: !0 }), document.addEventListener("pointermove", R, { capture: !0, once: !0 });
    }, R = () => g.current = !1;
    return document.addEventListener("keydown", E, { capture: !0 }), () => {
      document.removeEventListener("keydown", E, { capture: !0 }), document.removeEventListener("pointerdown", R, { capture: !0 }), document.removeEventListener("pointermove", R, { capture: !0 });
    };
  }, []), /* @__PURE__ */ S.jsx(hx, { ...m, children: /* @__PURE__ */ S.jsx(
    RS,
    {
      scope: r,
      open: u,
      onOpenChange: y,
      content: p,
      onContentChange: h,
      children: /* @__PURE__ */ S.jsx(
        MS,
        {
          scope: r,
          onClose: A.useCallback(() => y(!1), [y]),
          isUsingKeyboardRef: g,
          dir: x,
          modal: d,
          children: o
        }
      )
    }
  ) });
};
hg.displayName = gi;
var OS = "MenuAnchor", wf = A.forwardRef(
  (a, r) => {
    const { __scopeMenu: u, ...o } = a, s = uu(u);
    return /* @__PURE__ */ S.jsx(px, { ...s, ...o, ref: r });
  }
);
wf.displayName = OS;
var Af = "MenuPortal", [TS, pg] = Vl(Af, {
  forceMount: void 0
}), vg = (a) => {
  const { __scopeMenu: r, forceMount: u, children: o, container: s } = a, f = Xl(Af, r);
  return /* @__PURE__ */ S.jsx(TS, { scope: r, forceMount: u, children: /* @__PURE__ */ S.jsx(pi, { present: u || f.open, children: /* @__PURE__ */ S.jsx(Fv, { asChild: !0, container: s, children: o }) }) });
};
vg.displayName = Af;
var Xt = "MenuContent", [_S, Cf] = Vl(Xt), gg = A.forwardRef(
  (a, r) => {
    const u = pg(Xt, a.__scopeMenu), { forceMount: o = u.forceMount, ...s } = a, f = Xl(Xt, a.__scopeMenu), d = yi(Xt, a.__scopeMenu);
    return /* @__PURE__ */ S.jsx(oi.Provider, { scope: a.__scopeMenu, children: /* @__PURE__ */ S.jsx(pi, { present: o || f.open, children: /* @__PURE__ */ S.jsx(oi.Slot, { scope: a.__scopeMenu, children: d.modal ? /* @__PURE__ */ S.jsx(NS, { ...s, ref: r }) : /* @__PURE__ */ S.jsx(DS, { ...s, ref: r }) }) }) });
  }
), NS = A.forwardRef(
  (a, r) => {
    const u = Xl(Xt, a.__scopeMenu), o = A.useRef(null), s = At(r, o);
    return A.useEffect(() => {
      const f = o.current;
      if (f) return kx(f);
    }, []), /* @__PURE__ */ S.jsx(
      Rf,
      {
        ...a,
        ref: s,
        trapFocus: u.open,
        disableOutsidePointerEvents: u.open,
        disableOutsideScroll: !0,
        onFocusOutside: Te(
          a.onFocusOutside,
          (f) => f.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => u.onOpenChange(!1)
      }
    );
  }
), DS = A.forwardRef((a, r) => {
  const u = Xl(Xt, a.__scopeMenu);
  return /* @__PURE__ */ S.jsx(
    Rf,
    {
      ...a,
      ref: r,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => u.onOpenChange(!1)
    }
  );
}), jS = /* @__PURE__ */ ai("MenuContent.ScrollLock"), Rf = A.forwardRef(
  (a, r) => {
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
      onInteractOutside: x,
      onDismiss: E,
      disableOutsideScroll: R,
      ...w
    } = a, O = Xl(Xt, u), T = yi(Xt, u), z = uu(u), j = mg(u), q = AS(u), [G, P] = A.useState(null), Z = A.useRef(null), Y = At(r, Z, O.onContentChange), te = A.useRef(0), ee = A.useRef(""), le = A.useRef(0), re = A.useRef(null), se = A.useRef("right"), me = A.useRef(0), Q = R ? sg : A.Fragment, N = R ? { as: jS, allowPinchZoom: !0 } : void 0, V = ($) => {
      var de, ve;
      const C = ee.current + $, X = q().filter((Ce) => !Ce.disabled), I = document.activeElement, W = (de = X.find((Ce) => Ce.ref.current === I)) == null ? void 0 : de.textValue, ne = X.map((Ce) => Ce.textValue), ge = QS(ne, C, W), ce = (ve = X.find((Ce) => Ce.textValue === ge)) == null ? void 0 : ve.ref.current;
      (function Ce(Be) {
        ee.current = Be, window.clearTimeout(te.current), Be !== "" && (te.current = window.setTimeout(() => Ce(""), 1e3));
      })(C), ce && setTimeout(() => ce.focus());
    };
    A.useEffect(() => () => window.clearTimeout(te.current), []), Wb();
    const k = A.useCallback(($) => {
      var X, I;
      return se.current === ((X = re.current) == null ? void 0 : X.side) && KS($, (I = re.current) == null ? void 0 : I.area);
    }, []);
    return /* @__PURE__ */ S.jsx(
      _S,
      {
        scope: u,
        searchRef: ee,
        onItemEnter: A.useCallback(
          ($) => {
            k($) && $.preventDefault();
          },
          [k]
        ),
        onItemLeave: A.useCallback(
          ($) => {
            var C;
            k($) || ((C = Z.current) == null || C.focus(), P(null));
          },
          [k]
        ),
        onTriggerLeave: A.useCallback(
          ($) => {
            k($) && $.preventDefault();
          },
          [k]
        ),
        pointerGraceTimerRef: le,
        onPointerGraceIntentChange: A.useCallback(($) => {
          re.current = $;
        }, []),
        children: /* @__PURE__ */ S.jsx(Q, { ...N, children: /* @__PURE__ */ S.jsx(
          Rv,
          {
            asChild: !0,
            trapped: s,
            onMountAutoFocus: Te(f, ($) => {
              var C;
              $.preventDefault(), (C = Z.current) == null || C.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: d,
            children: /* @__PURE__ */ S.jsx(
              Av,
              {
                asChild: !0,
                disableOutsidePointerEvents: m,
                onEscapeKeyDown: h,
                onPointerDownOutside: g,
                onFocusOutside: y,
                onInteractOutside: x,
                onDismiss: E,
                children: /* @__PURE__ */ S.jsx(
                  Dx,
                  {
                    asChild: !0,
                    ...j,
                    dir: T.dir,
                    orientation: "vertical",
                    loop: o,
                    currentTabStopId: G,
                    onCurrentTabStopIdChange: P,
                    onEntryFocus: Te(p, ($) => {
                      T.isUsingKeyboardRef.current || $.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ S.jsx(
                      vx,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": jg(O.open),
                        "data-radix-menu-content": "",
                        dir: T.dir,
                        ...z,
                        ...w,
                        ref: Y,
                        style: { outline: "none", ...w.style },
                        onKeyDown: Te(w.onKeyDown, ($) => {
                          const X = $.target.closest("[data-radix-menu-content]") === $.currentTarget, I = $.ctrlKey || $.altKey || $.metaKey, W = $.key.length === 1;
                          X && ($.key === "Tab" && $.preventDefault(), !I && W && V($.key));
                          const ne = Z.current;
                          if ($.target !== ne || !SS.includes($.key)) return;
                          $.preventDefault();
                          const ce = q().filter((de) => !de.disabled).map((de) => de.ref.current);
                          fg.includes($.key) && ce.reverse(), VS(ce);
                        }),
                        onBlur: Te(a.onBlur, ($) => {
                          $.currentTarget.contains($.target) || (window.clearTimeout(te.current), ee.current = "");
                        }),
                        onPointerMove: Te(
                          a.onPointerMove,
                          ui(($) => {
                            const C = $.target, X = me.current !== $.clientX;
                            if ($.currentTarget.contains(C) && X) {
                              const I = $.clientX > me.current ? "right" : "left";
                              se.current = I, me.current = $.clientX;
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
var zS = "MenuGroup", Mf = A.forwardRef(
  (a, r) => {
    const { __scopeMenu: u, ...o } = a;
    return /* @__PURE__ */ S.jsx(vt.div, { role: "group", ...o, ref: r });
  }
);
Mf.displayName = zS;
var US = "MenuLabel", yg = A.forwardRef(
  (a, r) => {
    const { __scopeMenu: u, ...o } = a;
    return /* @__PURE__ */ S.jsx(vt.div, { ...o, ref: r });
  }
);
yg.displayName = US;
var Io = "MenuItem", nv = "menu.itemSelect", cu = A.forwardRef(
  (a, r) => {
    const { disabled: u = !1, onSelect: o, ...s } = a, f = A.useRef(null), d = yi(Io, a.__scopeMenu), m = Cf(Io, a.__scopeMenu), p = At(r, f), h = A.useRef(!1), g = () => {
      const y = f.current;
      if (!u && y) {
        const x = new CustomEvent(nv, { bubbles: !0, cancelable: !0 });
        y.addEventListener(nv, (E) => o == null ? void 0 : o(E), { once: !0 }), xv(y, x), x.defaultPrevented ? h.current = !1 : d.onClose();
      }
    };
    return /* @__PURE__ */ S.jsx(
      bg,
      {
        ...s,
        ref: p,
        disabled: u,
        onClick: Te(a.onClick, g),
        onPointerDown: (y) => {
          var x;
          (x = a.onPointerDown) == null || x.call(a, y), h.current = !0;
        },
        onPointerUp: Te(a.onPointerUp, (y) => {
          var x;
          h.current || (x = y.currentTarget) == null || x.click();
        }),
        onKeyDown: Te(a.onKeyDown, (y) => {
          const x = m.searchRef.current !== "";
          u || x && y.key === " " || ef.includes(y.key) && (y.currentTarget.click(), y.preventDefault());
        })
      }
    );
  }
);
cu.displayName = Io;
var bg = A.forwardRef(
  (a, r) => {
    const { __scopeMenu: u, disabled: o = !1, textValue: s, ...f } = a, d = Cf(Io, u), m = mg(u), p = A.useRef(null), h = At(r, p), [g, y] = A.useState(!1), [x, E] = A.useState("");
    return A.useEffect(() => {
      const R = p.current;
      R && E((R.textContent ?? "").trim());
    }, [f.children]), /* @__PURE__ */ S.jsx(
      oi.ItemSlot,
      {
        scope: u,
        disabled: o,
        textValue: s ?? x,
        children: /* @__PURE__ */ S.jsx(jx, { asChild: !0, ...m, focusable: !o, children: /* @__PURE__ */ S.jsx(
          vt.div,
          {
            role: "menuitem",
            "data-highlighted": g ? "" : void 0,
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            ...f,
            ref: h,
            onPointerMove: Te(
              a.onPointerMove,
              ui((R) => {
                o ? d.onItemLeave(R) : (d.onItemEnter(R), R.defaultPrevented || R.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: Te(
              a.onPointerLeave,
              ui((R) => d.onItemLeave(R))
            ),
            onFocus: Te(a.onFocus, () => y(!0)),
            onBlur: Te(a.onBlur, () => y(!1))
          }
        ) })
      }
    );
  }
), LS = "MenuCheckboxItem", xg = A.forwardRef(
  (a, r) => {
    const { checked: u = !1, onCheckedChange: o, ...s } = a;
    return /* @__PURE__ */ S.jsx(Cg, { scope: a.__scopeMenu, checked: u, children: /* @__PURE__ */ S.jsx(
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
var Sg = "MenuRadioGroup", [kS, BS] = Vl(
  Sg,
  { value: void 0, onValueChange: () => {
  } }
), Eg = A.forwardRef(
  (a, r) => {
    const { value: u, onValueChange: o, ...s } = a, f = zn(o);
    return /* @__PURE__ */ S.jsx(kS, { scope: a.__scopeMenu, value: u, onValueChange: f, children: /* @__PURE__ */ S.jsx(Mf, { ...s, ref: r }) });
  }
);
Eg.displayName = Sg;
var wg = "MenuRadioItem", Ag = A.forwardRef(
  (a, r) => {
    const { value: u, ...o } = a, s = BS(wg, a.__scopeMenu), f = u === s.value;
    return /* @__PURE__ */ S.jsx(Cg, { scope: a.__scopeMenu, checked: f, children: /* @__PURE__ */ S.jsx(
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
var Of = "MenuItemIndicator", [Cg, HS] = Vl(
  Of,
  { checked: !1 }
), Rg = A.forwardRef(
  (a, r) => {
    const { __scopeMenu: u, forceMount: o, ...s } = a, f = HS(Of, u);
    return /* @__PURE__ */ S.jsx(
      pi,
      {
        present: o || eu(f.checked) || f.checked === !0,
        children: /* @__PURE__ */ S.jsx(
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
var GS = "MenuSeparator", Mg = A.forwardRef(
  (a, r) => {
    const { __scopeMenu: u, ...o } = a;
    return /* @__PURE__ */ S.jsx(
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
var YS = "MenuArrow", Og = A.forwardRef(
  (a, r) => {
    const { __scopeMenu: u, ...o } = a, s = uu(u);
    return /* @__PURE__ */ S.jsx(gx, { ...s, ...o, ref: r });
  }
);
Og.displayName = YS;
var qS = "MenuSub", [Kw, Tg] = Vl(qS), ei = "MenuSubTrigger", _g = A.forwardRef(
  (a, r) => {
    const u = Xl(ei, a.__scopeMenu), o = yi(ei, a.__scopeMenu), s = Tg(ei, a.__scopeMenu), f = Cf(ei, a.__scopeMenu), d = A.useRef(null), { pointerGraceTimerRef: m, onPointerGraceIntentChange: p } = f, h = { __scopeMenu: a.__scopeMenu }, g = A.useCallback(() => {
      d.current && window.clearTimeout(d.current), d.current = null;
    }, []);
    return A.useEffect(() => g, [g]), A.useEffect(() => {
      const y = m.current;
      return () => {
        window.clearTimeout(y), p(null);
      };
    }, [m, p]), /* @__PURE__ */ S.jsx(wf, { asChild: !0, ...h, children: /* @__PURE__ */ S.jsx(
      bg,
      {
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": u.open,
        "aria-controls": s.contentId,
        "data-state": jg(u.open),
        ...a,
        ref: lu(r, s.onTriggerChange),
        onClick: (y) => {
          var x;
          (x = a.onClick) == null || x.call(a, y), !(a.disabled || y.defaultPrevented) && (y.currentTarget.focus(), u.open || u.onOpenChange(!0));
        },
        onPointerMove: Te(
          a.onPointerMove,
          ui((y) => {
            f.onItemEnter(y), !y.defaultPrevented && !a.disabled && !u.open && !d.current && (f.onPointerGraceIntentChange(null), d.current = window.setTimeout(() => {
              u.onOpenChange(!0), g();
            }, 100));
          })
        ),
        onPointerLeave: Te(
          a.onPointerLeave,
          ui((y) => {
            var E, R;
            g();
            const x = (E = u.content) == null ? void 0 : E.getBoundingClientRect();
            if (x) {
              const w = (R = u.content) == null ? void 0 : R.dataset.side, O = w === "right", T = O ? -5 : 5, z = x[O ? "left" : "right"], j = x[O ? "right" : "left"];
              f.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: y.clientX + T, y: y.clientY },
                  { x: z, y: x.top },
                  { x: j, y: x.top },
                  { x: j, y: x.bottom },
                  { x: z, y: x.bottom }
                ],
                side: w
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
        onKeyDown: Te(a.onKeyDown, (y) => {
          var E;
          const x = f.searchRef.current !== "";
          a.disabled || x && y.key === " " || ES[o.dir].includes(y.key) && (u.onOpenChange(!0), (E = u.content) == null || E.focus(), y.preventDefault());
        })
      }
    ) });
  }
);
_g.displayName = ei;
var Ng = "MenuSubContent", Dg = A.forwardRef(
  (a, r) => {
    const u = pg(Xt, a.__scopeMenu), { forceMount: o = u.forceMount, ...s } = a, f = Xl(Xt, a.__scopeMenu), d = yi(Xt, a.__scopeMenu), m = Tg(Ng, a.__scopeMenu), p = A.useRef(null), h = At(r, p);
    return /* @__PURE__ */ S.jsx(oi.Provider, { scope: a.__scopeMenu, children: /* @__PURE__ */ S.jsx(pi, { present: o || f.open, children: /* @__PURE__ */ S.jsx(oi.Slot, { scope: a.__scopeMenu, children: /* @__PURE__ */ S.jsx(
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
        onFocusOutside: Te(a.onFocusOutside, (g) => {
          g.target !== m.trigger && f.onOpenChange(!1);
        }),
        onEscapeKeyDown: Te(a.onEscapeKeyDown, (g) => {
          d.onClose(), g.preventDefault();
        }),
        onKeyDown: Te(a.onKeyDown, (g) => {
          var E;
          const y = g.currentTarget.contains(g.target), x = wS[d.dir].includes(g.key);
          y && x && (f.onOpenChange(!1), (E = m.trigger) == null || E.focus(), g.preventDefault());
        })
      }
    ) }) }) });
  }
);
Dg.displayName = Ng;
function jg(a) {
  return a ? "open" : "closed";
}
function eu(a) {
  return a === "indeterminate";
}
function Tf(a) {
  return eu(a) ? "indeterminate" : a ? "checked" : "unchecked";
}
function VS(a) {
  const r = document.activeElement;
  for (const u of a)
    if (u === r || (u.focus(), document.activeElement !== r)) return;
}
function XS(a, r) {
  return a.map((u, o) => a[(r + o) % a.length]);
}
function QS(a, r, u) {
  const s = r.length > 1 && Array.from(r).every((h) => h === r[0]) ? r[0] : r, f = u ? a.indexOf(u) : -1;
  let d = XS(a, Math.max(f, 0));
  s.length === 1 && (d = d.filter((h) => h !== u));
  const p = d.find(
    (h) => h.toLowerCase().startsWith(s.toLowerCase())
  );
  return p !== u ? p : void 0;
}
function ZS(a, r) {
  const { x: u, y: o } = a;
  let s = !1;
  for (let f = 0, d = r.length - 1; f < r.length; d = f++) {
    const m = r[f], p = r[d], h = m.x, g = m.y, y = p.x, x = p.y;
    g > o != x > o && u < (y - h) * (o - g) / (x - g) + h && (s = !s);
  }
  return s;
}
function KS(a, r) {
  if (!r) return !1;
  const u = { x: a.clientX, y: a.clientY };
  return ZS(u, r);
}
function ui(a) {
  return (r) => r.pointerType === "mouse" ? a(r) : void 0;
}
var PS = hg, FS = wf, JS = vg, $S = gg, WS = Mf, IS = yg, eE = cu, tE = xg, nE = Eg, lE = Ag, aE = Rg, rE = Mg, iE = Og, oE = _g, uE = Dg, su = "DropdownMenu", [cE, Pw] = mi(
  su,
  [dg]
), gt = dg(), [sE, zg] = cE(su), Ug = (a) => {
  const {
    __scopeDropdownMenu: r,
    children: u,
    dir: o,
    open: s,
    defaultOpen: f,
    onOpenChange: d,
    modal: m = !0
  } = a, p = gt(r), h = A.useRef(null), [g, y] = bv({
    prop: s,
    defaultProp: f ?? !1,
    onChange: d,
    caller: su
  });
  return /* @__PURE__ */ S.jsx(
    sE,
    {
      scope: r,
      triggerId: Ps(),
      triggerRef: h,
      contentId: Ps(),
      open: g,
      onOpenChange: y,
      onOpenToggle: A.useCallback(() => y((x) => !x), [y]),
      modal: m,
      children: /* @__PURE__ */ S.jsx(PS, { ...p, open: g, onOpenChange: y, dir: o, modal: m, children: u })
    }
  );
};
Ug.displayName = su;
var Lg = "DropdownMenuTrigger", kg = A.forwardRef(
  (a, r) => {
    const { __scopeDropdownMenu: u, disabled: o = !1, ...s } = a, f = zg(Lg, u), d = gt(u);
    return /* @__PURE__ */ S.jsx(FS, { asChild: !0, ...d, children: /* @__PURE__ */ S.jsx(
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
        onPointerDown: Te(a.onPointerDown, (m) => {
          !o && m.button === 0 && m.ctrlKey === !1 && (f.onOpenToggle(), f.open || m.preventDefault());
        }),
        onKeyDown: Te(a.onKeyDown, (m) => {
          o || (["Enter", " "].includes(m.key) && f.onOpenToggle(), m.key === "ArrowDown" && f.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(m.key) && m.preventDefault());
        })
      }
    ) });
  }
);
kg.displayName = Lg;
var fE = "DropdownMenuPortal", Bg = (a) => {
  const { __scopeDropdownMenu: r, ...u } = a, o = gt(r);
  return /* @__PURE__ */ S.jsx(JS, { ...o, ...u });
};
Bg.displayName = fE;
var Hg = "DropdownMenuContent", Gg = A.forwardRef(
  (a, r) => {
    const { __scopeDropdownMenu: u, ...o } = a, s = zg(Hg, u), f = gt(u), d = A.useRef(!1);
    return /* @__PURE__ */ S.jsx(
      $S,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...f,
        ...o,
        ref: r,
        onCloseAutoFocus: Te(a.onCloseAutoFocus, (m) => {
          var p;
          d.current || (p = s.triggerRef.current) == null || p.focus(), d.current = !1, m.preventDefault();
        }),
        onInteractOutside: Te(a.onInteractOutside, (m) => {
          const p = m.detail.originalEvent, h = p.button === 0 && p.ctrlKey === !0, g = p.button === 2 || h;
          (!s.modal || g) && (d.current = !0);
        }),
        style: {
          ...a.style,
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
var dE = "DropdownMenuGroup", mE = A.forwardRef(
  (a, r) => {
    const { __scopeDropdownMenu: u, ...o } = a, s = gt(u);
    return /* @__PURE__ */ S.jsx(WS, { ...s, ...o, ref: r });
  }
);
mE.displayName = dE;
var hE = "DropdownMenuLabel", pE = A.forwardRef(
  (a, r) => {
    const { __scopeDropdownMenu: u, ...o } = a, s = gt(u);
    return /* @__PURE__ */ S.jsx(IS, { ...s, ...o, ref: r });
  }
);
pE.displayName = hE;
var vE = "DropdownMenuItem", gE = A.forwardRef(
  (a, r) => {
    const { __scopeDropdownMenu: u, ...o } = a, s = gt(u);
    return /* @__PURE__ */ S.jsx(eE, { ...s, ...o, ref: r });
  }
);
gE.displayName = vE;
var yE = "DropdownMenuCheckboxItem", bE = A.forwardRef((a, r) => {
  const { __scopeDropdownMenu: u, ...o } = a, s = gt(u);
  return /* @__PURE__ */ S.jsx(tE, { ...s, ...o, ref: r });
});
bE.displayName = yE;
var xE = "DropdownMenuRadioGroup", Yg = A.forwardRef((a, r) => {
  const { __scopeDropdownMenu: u, ...o } = a, s = gt(u);
  return /* @__PURE__ */ S.jsx(nE, { ...s, ...o, ref: r });
});
Yg.displayName = xE;
var SE = "DropdownMenuRadioItem", qg = A.forwardRef((a, r) => {
  const { __scopeDropdownMenu: u, ...o } = a, s = gt(u);
  return /* @__PURE__ */ S.jsx(lE, { ...s, ...o, ref: r });
});
qg.displayName = SE;
var EE = "DropdownMenuItemIndicator", Vg = A.forwardRef((a, r) => {
  const { __scopeDropdownMenu: u, ...o } = a, s = gt(u);
  return /* @__PURE__ */ S.jsx(aE, { ...s, ...o, ref: r });
});
Vg.displayName = EE;
var wE = "DropdownMenuSeparator", AE = A.forwardRef((a, r) => {
  const { __scopeDropdownMenu: u, ...o } = a, s = gt(u);
  return /* @__PURE__ */ S.jsx(rE, { ...s, ...o, ref: r });
});
AE.displayName = wE;
var CE = "DropdownMenuArrow", RE = A.forwardRef(
  (a, r) => {
    const { __scopeDropdownMenu: u, ...o } = a, s = gt(u);
    return /* @__PURE__ */ S.jsx(iE, { ...s, ...o, ref: r });
  }
);
RE.displayName = CE;
var ME = "DropdownMenuSubTrigger", OE = A.forwardRef((a, r) => {
  const { __scopeDropdownMenu: u, ...o } = a, s = gt(u);
  return /* @__PURE__ */ S.jsx(oE, { ...s, ...o, ref: r });
});
OE.displayName = ME;
var TE = "DropdownMenuSubContent", _E = A.forwardRef((a, r) => {
  const { __scopeDropdownMenu: u, ...o } = a, s = gt(u);
  return /* @__PURE__ */ S.jsx(
    uE,
    {
      ...s,
      ...o,
      ref: r,
      style: {
        ...a.style,
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
var NE = Ug, DE = kg, jE = Bg, zE = Gg, UE = Yg, LE = qg, kE = Vg;
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BE = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), HE = (a) => a.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (r, u, o) => o ? o.toUpperCase() : u.toLowerCase()
), lv = (a) => {
  const r = HE(a);
  return r.charAt(0).toUpperCase() + r.slice(1);
}, Xg = (...a) => a.filter((r, u, o) => !!r && r.trim() !== "" && o.indexOf(r) === u).join(" ").trim(), GE = (a) => {
  for (const r in a)
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
const qE = A.forwardRef(
  ({
    color: a = "currentColor",
    size: r = 24,
    strokeWidth: u = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: f,
    iconNode: d,
    ...m
  }, p) => A.createElement(
    "svg",
    {
      ref: p,
      ...YE,
      width: r,
      height: r,
      stroke: a,
      strokeWidth: o ? Number(u) * 24 / Number(r) : u,
      className: Xg("lucide", s),
      ...!f && !GE(m) && { "aria-hidden": "true" },
      ...m
    },
    [
      ...d.map(([h, g]) => A.createElement(h, g)),
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
const fu = (a, r) => {
  const u = A.forwardRef(
    ({ className: o, ...s }, f) => A.createElement(qE, {
      ref: f,
      iconNode: r,
      className: Xg(
        `lucide-${BE(lv(a))}`,
        `lucide-${a}`,
        o
      ),
      ...s
    })
  );
  return u.displayName = lv(a), u;
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
const KE = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], zl = fu("chevron-down", KE);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PE = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], FE = fu("circle", PE);
function Qg(a) {
  var r, u, o = "";
  if (typeof a == "string" || typeof a == "number") o += a;
  else if (typeof a == "object") if (Array.isArray(a)) {
    var s = a.length;
    for (r = 0; r < s; r++) a[r] && (u = Qg(a[r])) && (o && (o += " "), o += u);
  } else for (u in a) a[u] && (o && (o += " "), o += u);
  return o;
}
function Zg() {
  for (var a, r, u = 0, o = "", s = arguments.length; u < s; u++) (a = arguments[u]) && (r = Qg(a)) && (o && (o += " "), o += r);
  return o;
}
const _f = "-", JE = (a) => {
  const r = WE(a), {
    conflictingClassGroups: u,
    conflictingClassGroupModifiers: o
  } = a;
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
}, Kg = (a, r) => {
  var d;
  if (a.length === 0)
    return r.classGroupId;
  const u = a[0], o = r.nextPart.get(u), s = o ? Kg(a.slice(1), o) : void 0;
  if (s)
    return s;
  if (r.validators.length === 0)
    return;
  const f = a.join(_f);
  return (d = r.validators.find(({
    validator: m
  }) => m(f))) == null ? void 0 : d.classGroupId;
}, av = /^\[(.+)\]$/, $E = (a) => {
  if (av.test(a)) {
    const r = av.exec(a)[1], u = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (u)
      return "arbitrary.." + u;
  }
}, WE = (a) => {
  const {
    theme: r,
    classGroups: u
  } = a, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const s in u)
    tf(u[s], o, s, r);
  return o;
}, tf = (a, r, u, o) => {
  a.forEach((s) => {
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
}, rv = (a, r) => {
  let u = a;
  return r.split(_f).forEach((o) => {
    u.nextPart.has(o) || u.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), u = u.nextPart.get(o);
  }), u;
}, IE = (a) => a.isThemeGetter, e2 = (a) => {
  if (a < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, u = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const s = (f, d) => {
    u.set(f, d), r++, r > a && (r = 0, o = u, u = /* @__PURE__ */ new Map());
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
}, nf = "!", lf = ":", t2 = lf.length, n2 = (a) => {
  const {
    prefix: r,
    experimentalParseClassName: u
  } = a;
  let o = (s) => {
    const f = [];
    let d = 0, m = 0, p = 0, h;
    for (let R = 0; R < s.length; R++) {
      let w = s[R];
      if (d === 0 && m === 0) {
        if (w === lf) {
          f.push(s.slice(p, R)), p = R + t2;
          continue;
        }
        if (w === "/") {
          h = R;
          continue;
        }
      }
      w === "[" ? d++ : w === "]" ? d-- : w === "(" ? m++ : w === ")" && m--;
    }
    const g = f.length === 0 ? s : s.substring(p), y = l2(g), x = y !== g, E = h && h > p ? h - p : void 0;
    return {
      modifiers: f,
      hasImportantModifier: x,
      baseClassName: y,
      maybePostfixModifierPosition: E
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
}, l2 = (a) => a.endsWith(nf) ? a.substring(0, a.length - 1) : a.startsWith(nf) ? a.substring(1) : a, a2 = (a) => {
  const r = Object.fromEntries(a.orderSensitiveModifiers.map((o) => [o, !0]));
  return (o) => {
    if (o.length <= 1)
      return o;
    const s = [];
    let f = [];
    return o.forEach((d) => {
      d[0] === "[" || r[d] ? (s.push(...f.sort(), d), f = []) : f.push(d);
    }), s.push(...f.sort()), s;
  };
}, r2 = (a) => ({
  cache: e2(a.cacheSize),
  parseClassName: n2(a),
  sortModifiers: a2(a),
  ...JE(a)
}), i2 = /\s+/, o2 = (a, r) => {
  const {
    parseClassName: u,
    getClassGroupId: o,
    getConflictingClassGroupIds: s,
    sortModifiers: f
  } = r, d = [], m = a.trim().split(i2);
  let p = "";
  for (let h = m.length - 1; h >= 0; h -= 1) {
    const g = m[h], {
      isExternal: y,
      modifiers: x,
      hasImportantModifier: E,
      baseClassName: R,
      maybePostfixModifierPosition: w
    } = u(g);
    if (y) {
      p = g + (p.length > 0 ? " " + p : p);
      continue;
    }
    let O = !!w, T = o(O ? R.substring(0, w) : R);
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
    const z = f(x).join(":"), j = E ? z + nf : z, q = j + T;
    if (d.includes(q))
      continue;
    d.push(q);
    const G = s(T, O);
    for (let P = 0; P < G.length; ++P) {
      const Z = G[P];
      d.push(j + Z);
    }
    p = g + (p.length > 0 ? " " + p : p);
  }
  return p;
};
function u2() {
  let a = 0, r, u, o = "";
  for (; a < arguments.length; )
    (r = arguments[a++]) && (u = Pg(r)) && (o && (o += " "), o += u);
  return o;
}
const Pg = (a) => {
  if (typeof a == "string")
    return a;
  let r, u = "";
  for (let o = 0; o < a.length; o++)
    a[o] && (r = Pg(a[o])) && (u && (u += " "), u += r);
  return u;
};
function c2(a, ...r) {
  let u, o, s, f = d;
  function d(p) {
    const h = r.reduce((g, y) => y(g), a());
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
const tt = (a) => {
  const r = (u) => u[a] || [];
  return r.isThemeGetter = !0, r;
}, Fg = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Jg = /^\((?:(\w[\w-]*):)?(.+)\)$/i, s2 = /^\d+\/\d+$/, f2 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, d2 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, m2 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, h2 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, p2 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ba = (a) => s2.test(a), Se = (a) => !!a && !Number.isNaN(Number(a)), cl = (a) => !!a && Number.isInteger(Number(a)), Hs = (a) => a.endsWith("%") && Se(a.slice(0, -1)), _n = (a) => f2.test(a), v2 = () => !0, g2 = (a) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  d2.test(a) && !m2.test(a)
), $g = () => !1, y2 = (a) => h2.test(a), b2 = (a) => p2.test(a), x2 = (a) => !oe(a) && !ue(a), S2 = (a) => Ka(a, e0, $g), oe = (a) => Fg.test(a), Ul = (a) => Ka(a, t0, g2), Gs = (a) => Ka(a, R2, Se), iv = (a) => Ka(a, Wg, $g), E2 = (a) => Ka(a, Ig, b2), qo = (a) => Ka(a, n0, y2), ue = (a) => Jg.test(a), $r = (a) => Pa(a, t0), w2 = (a) => Pa(a, M2), ov = (a) => Pa(a, Wg), A2 = (a) => Pa(a, e0), C2 = (a) => Pa(a, Ig), Vo = (a) => Pa(a, n0, !0), Ka = (a, r, u) => {
  const o = Fg.exec(a);
  return o ? o[1] ? r(o[1]) : u(o[2]) : !1;
}, Pa = (a, r, u = !1) => {
  const o = Jg.exec(a);
  return o ? o[1] ? r(o[1]) : u : !1;
}, Wg = (a) => a === "position" || a === "percentage", Ig = (a) => a === "image" || a === "url", e0 = (a) => a === "length" || a === "size" || a === "bg-size", t0 = (a) => a === "length", R2 = (a) => a === "number", M2 = (a) => a === "family-name", n0 = (a) => a === "shadow", O2 = () => {
  const a = tt("color"), r = tt("font"), u = tt("text"), o = tt("font-weight"), s = tt("tracking"), f = tt("leading"), d = tt("breakpoint"), m = tt("container"), p = tt("spacing"), h = tt("radius"), g = tt("shadow"), y = tt("inset-shadow"), x = tt("text-shadow"), E = tt("drop-shadow"), R = tt("blur"), w = tt("perspective"), O = tt("aspect"), T = tt("ease"), z = tt("animate"), j = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], q = () => [
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
  ], G = () => [...q(), ue, oe], P = () => ["auto", "hidden", "clip", "visible", "scroll"], Z = () => ["auto", "contain", "none"], Y = () => [ue, oe, p], te = () => [Ba, "full", "auto", ...Y()], ee = () => [cl, "none", "subgrid", ue, oe], le = () => ["auto", {
    span: ["full", cl, ue, oe]
  }, cl, ue, oe], re = () => [cl, "auto", ue, oe], se = () => ["auto", "min", "max", "fr", ue, oe], me = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], Q = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], N = () => ["auto", ...Y()], V = () => [Ba, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...Y()], k = () => [a, ue, oe], $ = () => [...q(), ov, iv, {
    position: [ue, oe]
  }], C = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], X = () => ["auto", "cover", "contain", A2, S2, {
    size: [ue, oe]
  }], I = () => [Hs, $r, Ul], W = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    h,
    ue,
    oe
  ], ne = () => ["", Se, $r, Ul], ge = () => ["solid", "dashed", "dotted", "double"], ce = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], de = () => [Se, Hs, ov, iv], ve = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    R,
    ue,
    oe
  ], Ce = () => ["none", Se, ue, oe], Be = () => ["none", Se, ue, oe], Me = () => [Se, ue, oe], ae = () => [Ba, "full", ...Y()];
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
        aspect: ["auto", "square", Ba, oe, ue, O]
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
        columns: [Se, oe, ue, m]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": j()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": j()
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
        object: G()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: P()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": P()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": P()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: Z()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Z()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Z()
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
        z: [cl, "auto", ue, oe]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Ba, "full", "auto", m, ...Y()]
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
        flex: [Se, Ba, "auto", "initial", "none", oe]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Se, ue, oe]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Se, ue, oe]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [cl, "first", "last", "none", ue, oe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": ee()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: le()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": re()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": re()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": ee()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: le()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": re()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": re()
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
        gap: Y()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": Y()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": Y()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...me(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...Q(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...Q()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...me()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...Q(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...Q(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": me()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...Q(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...Q()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: Y()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: Y()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: Y()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: Y()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: Y()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: Y()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: Y()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: Y()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: Y()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: N()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: N()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: N()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: N()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: N()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: N()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: N()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: N()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: N()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": Y()
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
        "space-y": Y()
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
        size: V()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [m, "screen", ...V()]
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
          ...V()
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
          ...V()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...V()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...V()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...V()]
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
        font: [o, ue, Gs]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Hs, oe]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [w2, oe, r]
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
        tracking: [s, ue, oe]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Se, "none", ue, Gs]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          f,
          ...Y()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ue, oe]
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
        list: ["disc", "decimal", "none", ue, oe]
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
        decoration: [Se, "from-font", "auto", ue, Ul]
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
        "underline-offset": [Se, "auto", ue, oe]
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
        indent: Y()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ue, oe]
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
        content: ["none", ue, oe]
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
        bg: $()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: C()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: X()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, cl, ue, oe],
          radial: ["", ue, oe],
          conic: [cl, ue, oe]
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
        from: I()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: I()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: I()
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
        rounded: W()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": W()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": W()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": W()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": W()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": W()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": W()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": W()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": W()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": W()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": W()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": W()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": W()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": W()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": W()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: ne()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": ne()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": ne()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": ne()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": ne()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": ne()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": ne()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": ne()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": ne()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": ne()
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
        "divide-y": ne()
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
        "outline-offset": [Se, ue, oe]
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
        ring: ne()
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
        "inset-ring": ne()
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
        "text-shadow": ["none", x, Vo, qo]
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
        opacity: [Se, ue, oe]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ce(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ce()
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
        "mask-linear-from": de()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": de()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": k()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": k()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": de()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": de()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": k()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": k()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": de()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": de()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": k()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": k()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": de()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": de()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": k()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": k()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": de()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": de()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": k()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": k()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": de()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": de()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": k()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": k()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": de()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": de()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": k()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": k()
      }],
      "mask-image-radial": [{
        "mask-radial": [ue, oe]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": de()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": de()
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
        "mask-conic-from": de()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": de()
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
        mask: $()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: C()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: X()
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
        mask: ["none", ue, oe]
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
          ue,
          oe
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
        brightness: [Se, ue, oe]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Se, ue, oe]
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
          E,
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
        grayscale: ["", Se, ue, oe]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Se, ue, oe]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Se, ue, oe]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Se, ue, oe]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Se, ue, oe]
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
          ue,
          oe
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
        "backdrop-brightness": [Se, ue, oe]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Se, ue, oe]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Se, ue, oe]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Se, ue, oe]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Se, ue, oe]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Se, ue, oe]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Se, ue, oe]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Se, ue, oe]
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
        "border-spacing": Y()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": Y()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": Y()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", ue, oe]
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
        duration: [Se, "initial", ue, oe]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", T, ue, oe]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Se, ue, oe]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", z, ue, oe]
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
        perspective: [w, ue, oe]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": G()
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
        scale: Be()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Be()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Be()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Be()
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
        transform: [ue, oe, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: G()
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
        translate: ae()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ae()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ae()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ae()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ue, oe]
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
        "scroll-m": Y()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": Y()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": Y()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": Y()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": Y()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": Y()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": Y()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": Y()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": Y()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": Y()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": Y()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": Y()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": Y()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": Y()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": Y()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": Y()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": Y()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": Y()
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
        "will-change": ["auto", "scroll", "contents", "transform", ue, oe]
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
function hl(...a) {
  return T2(Zg(a));
}
function Ll({
  ...a
}) {
  return /* @__PURE__ */ S.jsx(NE, { "data-slot": "dropdown-menu", ...a });
}
function kl({
  ...a
}) {
  return /* @__PURE__ */ S.jsx(DE, { "data-slot": "dropdown-menu-trigger", ...a });
}
function Bl({
  className: a,
  sideOffset: r = 4,
  ...u
}) {
  return /* @__PURE__ */ S.jsx(jE, { children: /* @__PURE__ */ S.jsx(
    zE,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: r,
      className: hl(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        a
      ),
      ...u
    }
  ) });
}
function Hl({
  ...a
}) {
  return /* @__PURE__ */ S.jsx(UE, { "data-slot": "dropdown-menu-radio-group", ...a });
}
function Nn({
  className: a,
  children: r,
  ...u
}) {
  return /* @__PURE__ */ S.jsxs(
    LE,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: hl(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a
      ),
      ...u,
      children: [
        /* @__PURE__ */ S.jsx(
          "span",
          {
            className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
            children: /* @__PURE__ */ S.jsx(kE, { children: /* @__PURE__ */ S.jsx(FE, { className: "size-2 fill-current" }) })
          }
        ),
        r
      ]
    }
  );
}
const uv = (a) => typeof a == "boolean" ? `${a}` : a === 0 ? "0" : a, cv = Zg, _2 = (a, r) => (u) => {
  var o;
  if ((r == null ? void 0 : r.variants) == null) return cv(a, u == null ? void 0 : u.class, u == null ? void 0 : u.className);
  const { variants: s, defaultVariants: f } = r, d = Object.keys(s).map((h) => {
    const g = u == null ? void 0 : u[h], y = f == null ? void 0 : f[h];
    if (g === null) return null;
    const x = uv(g) || uv(y);
    return s[h][x];
  }), m = u && Object.entries(u).reduce((h, g) => {
    let [y, x] = g;
    return x === void 0 || (h[y] = x), h;
  }, {}), p = r == null || (o = r.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((h, g) => {
    let { class: y, className: x, ...E } = g;
    return Object.entries(E).every((R) => {
      let [w, O] = R;
      return Array.isArray(O) ? O.includes({
        ...f,
        ...m
      }[w]) : {
        ...f,
        ...m
      }[w] === O;
    }) ? [
      ...h,
      y,
      x
    ] : h;
  }, []);
  return cv(a, d, p, u == null ? void 0 : u.class, u == null ? void 0 : u.className);
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
  className: a,
  variant: r,
  size: u,
  asChild: o = !1,
  ...s
}) {
  const f = o ? Lb : "button";
  return /* @__PURE__ */ S.jsx(
    f,
    {
      "data-slot": "button",
      className: hl(N2({ variant: r, size: u, className: a })),
      ...s
    }
  );
}
const D2 = [
  { value: "Roasters Choice", label: "Roasters Choice" },
  { value: "Curated", label: "Curated" },
  { value: "Masterpiece", label: "Masterpiece" },
  { value: "Low-Caf", label: "Low-Caf" },
  { value: "Regional", label: "Regional" }
], j2 = [
  { value: "Roasters Choice", label: "Roasters Choice" },
  { value: "Curated", label: "Curated" },
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
], L2 = af.reduce((a, r) => (a[r.value] = r.label, a), {}), rf = [
  { value: "1", label: "1 bag" },
  { value: "2", label: "2 bags" },
  { value: "3", label: "3 bags" }
], k2 = rf.reduce((a, r) => (a[r.value] = r.label, a), {}), B2 = [
  { value: "Brazil", label: "Brazil" },
  { value: "Ethiopia", label: "Ethiopia" }
], of = [
  { value: "3", label: "3 x 10 capsules" }
  // Already has spaces, format is different but consistent
], H2 = of.reduce((a, r) => (a[r.value] = r.label, a), {}), G2 = [
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
  selectedMethod: a,
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
  onResetSelections: x,
  selectedEdition: E,
  onEditionChange: R
}) => {
  const [w, O] = A.useState(null);
  A.useEffect(() => {
    if (typeof y != "function")
      return;
    let Q;
    if (a === "Capsules" ? Q = E && s && !f : r === "Office" ? Q = o && !f : Q = s && !f, !Q || w === !1 || r === "Masterpiece") return;
    let V = "4 Weeks (Recommended)", k = Ha.map(($) => $.value);
    if (a === "Capsules" ? k = Xs : r === "Office" ? k = Vs : ["Low-Caf", "Regional"].includes(r) ? k = qs : ["Roasters Choice", "Curated"].includes(r) && (k = Ys), k.includes(V) || (V = k.length > 0 ? k[0] : ""), V && !f)
      try {
        y(V);
      } catch ($) {
        console.error(`Error setting initial default frequency for ${r || a}:`, $);
      }
  }, [s, r, a, E, o, f, y, w]), A.useEffect(() => {
    if (r === "Masterpiece" && s && typeof y == "function" && w !== !1)
      try {
        (!f || f !== "4 Weeks (Recommended)") && y("4 Weeks (Recommended)");
      } catch (Q) {
        console.error("Error auto-setting Masterpiece frequency state:", Q);
      }
  }, [r, s, f, y, w]), A.useEffect(() => {
    if (w === !1) return;
    let Q = null, N = !1, V = [];
    if (a === "Capsules" ? V = Xs : ["Roasters Choice", "Curated"].includes(r) ? V = Ys : ["Low-Caf", "Regional"].includes(r) ? V = qs : r === "Office" && (V = Vs), V.length > 0 && f && !V.includes(f) && (Q = V.includes("4 Weeks (Recommended)") ? "4 Weeks (Recommended)" : V[0], N = !0), N && typeof y == "function") {
      console.warn(`${r || a} selected with invalid frequency '${f}', resetting to ${Q}.`);
      try {
        y(Q);
      } catch (k) {
        console.error(`Error resetting frequency for ${r || a}:`, k);
      }
    }
  }, [r, a, f, y, w]), A.useEffect(() => {
    if (w === !1) return;
    let Q = !0, N = !1;
    if (a === "Capsules" && s ? (Q = of.some((V) => V.value === s), Q || (N = !0)) : r === "Curated" && s ? (Q = af.some((V) => V.value === s), Q || (N = !0)) : r === "Masterpiece" && s && (Q = rf.some((V) => V.value === s), Q || (N = !0)), N && r !== "Office" && (console.warn(`${r || a} selected with invalid quantity '${s}', resetting quantity.`), typeof g == "function"))
      try {
        g("");
      } catch (V) {
        console.error(`Error resetting quantity for ${r || a}:`, V);
      }
  }, [r, a, s, g, w]);
  const T = () => {
    O(!0), typeof x == "function" && w === !1 && x();
  }, z = () => {
    O(!1), typeof x == "function" && x(), window.location.href = "https://thebarn.de/collections/prepaid-subscription";
  }, j = a === "Filter" ? D2 : j2, q = a !== "Capsules" && r && r !== "Office" && (r === "Roasters Choice" || r === "Curated" || r === "Masterpiece" || r === "Low-Caf" || r === "Regional" && u), G = a === "Capsules" && E, P = r === "Office" && o, Z = a === "Capsules" && E && s, Y = s && r && !["Office"].includes(r) && a !== "Capsules", te = P || Z || Y, ee = te && (a === "Capsules" || r !== "Masterpiece"), le = te && a !== "Capsules" && r === "Masterpiece", re = a === "Capsules" ? Ha.filter((Q) => Xs.includes(Q.value)) : r === "Office" ? Ha.filter((Q) => Vs.includes(Q.value)) : ["Roasters Choice", "Curated"].includes(r) ? Ha.filter((Q) => Ys.includes(Q.value)) : ["Low-Caf", "Regional"].includes(r) ? Ha.filter((Q) => qs.includes(Q.value)) : Ha, se = a === "Capsules" ? of : r === "Curated" ? af : r === "Masterpiece" ? rf : U2, me = (Q) => Q ? a === "Capsules" ? H2[Q] || Q : r === "Curated" ? L2[Q] || Q : r === "Masterpiece" ? k2[Q] || Q : r === "Low-Caf" ? `${Q} x 250g` : r === "Regional" ? `${Q} x 250g` : r === "Office" ? Q : r === "Roasters Choice" ? `${Q} x 250g` : Q : r === "Office" ? "Select Size..." : "Select Quantity...";
  return /* @__PURE__ */ S.jsxs("div", { className: "middle-content-wrapper flex flex-col justify-center items-center", children: [
    /* @__PURE__ */ S.jsx("div", { className: "recipient-container mt-10", children: /* @__PURE__ */ S.jsxs("div", { className: "recipient-buttons-container", children: [
      /* @__PURE__ */ S.jsxs("div", { className: `recipient-button ${w === !0 ? "selected" : ""}`, onClick: T, children: [
        /* @__PURE__ */ S.jsx("h2", { children: "PAY PER DELIVERY" }),
        /* @__PURE__ */ S.jsx("p", { children: "(Flexible Subscriptions)" })
      ] }),
      /* @__PURE__ */ S.jsxs("div", { className: `recipient-button ${w === !1 ? "selected" : ""}`, onClick: z, children: [
        /* @__PURE__ */ S.jsx("h2", { children: "UPFRONT PAYMENT" }),
        /* @__PURE__ */ S.jsx("p", { children: "(Term / Gift)" })
      ] })
    ] }) }),
    w === !0 && /* @__PURE__ */ S.jsxs("div", { className: "coffee-type-container w-5/6 rounded-md p-3 pt-5 flex flex-col items-center gap-y-2 bg-[#3a3c3d] justify-center mt-5", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "dropdown-row", children: [
        /* @__PURE__ */ S.jsx("h3", { className: "dropdown-label", children: "Method" }),
        /* @__PURE__ */ S.jsxs(Ll, { children: [
          /* @__PURE__ */ S.jsx(kl, { asChild: !0, children: /* @__PURE__ */ S.jsxs(Dn, { variant: "outline", className: "dropdown-trigger-button", children: [
            a || "Select Method...",
            /* @__PURE__ */ S.jsx(zl, { className: "ml-2 h-4 w-4 shrink-0" })
          ] }) }),
          /* @__PURE__ */ S.jsx(Bl, { className: "dropdown-content-panel", children: /* @__PURE__ */ S.jsxs(Hl, { value: a, onValueChange: d, children: [
            /* @__PURE__ */ S.jsx(Nn, { value: "Filter", children: "Filter" }),
            /* @__PURE__ */ S.jsx(Nn, { value: "Espresso", children: "Espresso" }),
            /* @__PURE__ */ S.jsx(Nn, { value: "Capsules", children: "Capsules" })
          ] }) })
        ] })
      ] }),
      a === "Capsules" && /* @__PURE__ */ S.jsx("div", { className: "dropdown-row", style: { justifyContent: "center" }, children: /* @__PURE__ */ S.jsx("div", { className: "w-fit", children: /* @__PURE__ */ S.jsx("ul", { className: "text-white bg-[#161616] w-full rounded-sm border border-[#A67C52] roasters-info-list", children: /* @__PURE__ */ S.jsxs("li", { className: "w-full p-1 text-lg", children: [
        /* @__PURE__ */ S.jsx("span", { className: "text-[#A67C52]", children: "Receive our" }),
        " Sustainable Capsules on repeat"
      ] }) }) }) }, "capsule-method-info"),
      a === "Capsules" && /* @__PURE__ */ S.jsxs("div", { className: "dropdown-row", children: [
        /* @__PURE__ */ S.jsx("h3", { className: "dropdown-label", children: "Taste Profile" }),
        /* @__PURE__ */ S.jsxs(Ll, { children: [
          /* @__PURE__ */ S.jsx(kl, { asChild: !0, children: /* @__PURE__ */ S.jsxs(Dn, { variant: "outline", className: "dropdown-trigger-button", children: [
            E || "Select Profile...",
            /* @__PURE__ */ S.jsx(zl, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
          ] }) }),
          /* @__PURE__ */ S.jsx(Bl, { className: "dropdown-content-panel", children: /* @__PURE__ */ S.jsx(Hl, { value: E, onValueChange: R, children: B2.map((Q) => /* @__PURE__ */ S.jsx(Nn, { value: Q.value, children: Q.label }, Q.value)) }) })
        ] })
      ] }),
      ["Filter", "Espresso"].includes(a) && /* @__PURE__ */ S.jsxs("div", { className: "dropdown-row", children: [
        /* @__PURE__ */ S.jsx("h3", { className: "dropdown-label", children: "Subscription Style" }),
        /* @__PURE__ */ S.jsxs(Ll, { children: [
          /* @__PURE__ */ S.jsx(kl, { asChild: !0, children: /* @__PURE__ */ S.jsxs(Dn, { variant: "outline", className: "dropdown-trigger-button", children: [
            r || "Select Type...",
            /* @__PURE__ */ S.jsx(zl, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
          ] }) }),
          /* @__PURE__ */ S.jsx(Bl, { className: "dropdown-content-panel", children: /* @__PURE__ */ S.jsx(Hl, { value: r, onValueChange: m, children: j.map((Q) => /* @__PURE__ */ S.jsx(Nn, { value: Q.value, children: Q.label }, Q.value)) }) })
        ] })
      ] }),
      a !== "Capsules" && r && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
        r === "Roasters Choice" && /* @__PURE__ */ S.jsx("div", { className: "dropdown-row", style: { justifyContent: "center" }, children: /* @__PURE__ */ S.jsx("div", { className: "w-fit", children: /* @__PURE__ */ S.jsx("ul", { className: "text-white bg-[#161616] w-full rounded-sm border border-[#A67C52] roasters-info-list", children: /* @__PURE__ */ S.jsxs("li", { className: "w-full p-1 text-lg", children: [
          /* @__PURE__ */ S.jsx("span", { className: "text-[#A67C52]", children: "Every Month," }),
          " Our Roasters Pick a New Coffee for You"
        ] }) }) }) }, "rc-info"),
        r === "Curated" && /* @__PURE__ */ S.jsx("div", { className: "dropdown-row", style: { justifyContent: "center" }, children: /* @__PURE__ */ S.jsx("div", { className: "w-fit", children: /* @__PURE__ */ S.jsx("ul", { className: "text-white bg-[#161616] w-full rounded-sm border border-[#A67C52] roasters-info-list", children: /* @__PURE__ */ S.jsxs("li", { className: "w-full p-1 text-lg", children: [
          /* @__PURE__ */ S.jsx("span", { className: "text-[#A67C52]", children: "Every month," }),
          " Our Roasters pick two different coffees for you"
        ] }) }) }) }, "curated-info"),
        r === "Masterpiece" && /* @__PURE__ */ S.jsx("div", { className: "dropdown-row", style: { justifyContent: "center" }, children: /* @__PURE__ */ S.jsx("div", { className: "w-fit", children: /* @__PURE__ */ S.jsx("ul", { className: "text-white bg-[#161616] w-full rounded-sm border border-[#A67C52] roasters-info-list", children: /* @__PURE__ */ S.jsxs("li", { className: "w-full p-1 text-lg", children: [
          /* @__PURE__ */ S.jsx("span", { className: "text-[#A67C52]", children: "Every month," }),
          " We send you one bag of the most extraordinary coffee. Each bag contains 100 - 150g"
        ] }) }) }) }, "masterpiece-info"),
        r === "Low-Caf" && /* @__PURE__ */ S.jsx("div", { className: "dropdown-row", style: { justifyContent: "center" }, children: /* @__PURE__ */ S.jsx("div", { className: "w-fit", children: /* @__PURE__ */ S.jsx("ul", { className: "text-white bg-[#161616] w-full rounded-sm border border-[#A67C52] roasters-info-list", children: /* @__PURE__ */ S.jsxs("li", { className: "w-full p-1 text-lg", children: [
          /* @__PURE__ */ S.jsx("span", { className: "text-[#A67C52]", children: "Receive our" }),
          " low-caf varietal coffee on repeat"
        ] }) }) }) }, "lowcaf-info"),
        r === "Regional" && /* @__PURE__ */ S.jsx("div", { className: "dropdown-row", style: { justifyContent: "center" }, children: /* @__PURE__ */ S.jsx("div", { className: "w-fit", children: /* @__PURE__ */ S.jsx("ul", { className: "text-white bg-[#161616] w-full rounded-sm border border-[#A67C52] roasters-info-list", children: /* @__PURE__ */ S.jsxs("li", { className: "w-full p-1 text-lg", children: [
          /* @__PURE__ */ S.jsx("span", { className: "text-[#A67C52]", children: "Pick your favourite region" }),
          " and receive the same coffee on repeat"
        ] }) }) }) }, "regional-info"),
        r === "Office" && /* @__PURE__ */ S.jsx("div", { className: "dropdown-row", style: { justifyContent: "center" }, children: /* @__PURE__ */ S.jsx("div", { className: "w-fit", children: /* @__PURE__ */ S.jsx("ul", { className: "text-white bg-[#161616] w-full rounded-sm border border-[#A67C52] roasters-info-list", children: /* @__PURE__ */ S.jsxs("li", { className: "w-full p-1 text-lg", children: [
          /* @__PURE__ */ S.jsx("span", { className: "text-[#A67C52]", children: "Our Espresso works on all Office Machines:" }),
          " Full Automat, Espresso, Filter"
        ] }) }) }) }, "office-info"),
        r === "Office" && /* @__PURE__ */ S.jsxs("div", { className: "dropdown-row", children: [
          /* @__PURE__ */ S.jsx("h3", { className: "dropdown-label", children: "Size" }),
          /* @__PURE__ */ S.jsxs(Ll, { children: [
            /* @__PURE__ */ S.jsx(kl, { asChild: !0, children: /* @__PURE__ */ S.jsxs(Dn, { variant: "outline", className: "dropdown-trigger-button", children: [
              o || "Select Size...",
              /* @__PURE__ */ S.jsx(zl, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
            ] }) }),
            /* @__PURE__ */ S.jsx(Bl, { className: "dropdown-content-panel", children: /* @__PURE__ */ S.jsx(Hl, { value: o, onValueChange: h, children: z2.map((Q) => /* @__PURE__ */ S.jsx(Nn, { value: Q.value, children: Q.label }, Q.value)) }) })
          ] })
        ] }, "office-size"),
        r === "Regional" && /* @__PURE__ */ S.jsxs("div", { className: "dropdown-row", children: [
          /* @__PURE__ */ S.jsx("h3", { className: "dropdown-label", children: "Region" }),
          /* @__PURE__ */ S.jsxs(Ll, { children: [
            /* @__PURE__ */ S.jsx(kl, { asChild: !0, children: /* @__PURE__ */ S.jsxs(Dn, { variant: "outline", className: "dropdown-trigger-button", children: [
              u || "Select Region...",
              /* @__PURE__ */ S.jsx(zl, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
            ] }) }),
            /* @__PURE__ */ S.jsx(Bl, { className: "dropdown-content-panel", children: /* @__PURE__ */ S.jsx(Hl, { value: u, onValueChange: p, children: G2.map((Q) => /* @__PURE__ */ S.jsx(Nn, { value: Q.value, children: Q.label }, Q.value)) }) })
          ] })
        ] }, "regional-region")
      ] }),
      (G || q) && /* @__PURE__ */ S.jsxs("div", { className: "dropdown-row", children: [
        /* @__PURE__ */ S.jsx("h3", { className: "dropdown-label", children: "Quantity of Coffee" }),
        /* @__PURE__ */ S.jsxs(Ll, { children: [
          /* @__PURE__ */ S.jsx(kl, { asChild: !0, children: /* @__PURE__ */ S.jsxs(Dn, { variant: "outline", className: "dropdown-trigger-button", children: [
            me(s),
            /* @__PURE__ */ S.jsx(zl, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
          ] }) }),
          /* @__PURE__ */ S.jsx(Bl, { className: "dropdown-content-panel", children: /* @__PURE__ */ S.jsx(Hl, { value: s, onValueChange: g, children: se.map((Q) => /* @__PURE__ */ S.jsx(Nn, { value: Q.value, children: a === "Capsules" || r === "Curated" || r === "Masterpiece" ? Q.label : r === "Low-Caf" ? `${Q.label} x 250g` : r === "Regional" ? `${Q.label} x 250g` : r === "Roasters Choice" ? `${Q.label} x 250g` : `${Q.label} ${parseInt(Q.value) > 1 ? "bags" : "bag"} (250g each)` }, Q.value)) }) })
        ] })
      ] }),
      ee && /* @__PURE__ */ S.jsxs("div", { className: "dropdown-row", children: [
        /* @__PURE__ */ S.jsx("h3", { className: "dropdown-label", children: "Frequency" }),
        /* @__PURE__ */ S.jsxs(Ll, { children: [
          /* @__PURE__ */ S.jsx(kl, { asChild: !0, children: /* @__PURE__ */ S.jsxs(Dn, { variant: "outline", className: "dropdown-trigger-button", children: [
            f || "Select Frequency...",
            /* @__PURE__ */ S.jsx(zl, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
          ] }) }),
          /* @__PURE__ */ S.jsx(Bl, { className: "dropdown-content-panel", children: /* @__PURE__ */ S.jsx(Hl, { value: f, onValueChange: y, children: re.map((Q) => /* @__PURE__ */ S.jsx(Nn, { value: Q.value, children: Q.label }, Q.value)) }) })
        ] })
      ] }),
      le && /* @__PURE__ */ S.jsxs("div", { className: "dropdown-row masterpiece-frequency-info", children: [
        /* @__PURE__ */ S.jsx("h3", { className: "dropdown-label", children: "Frequency" }),
        /* @__PURE__ */ S.jsx("div", { className: "info-text-container flex items-center justify-center", children: /* @__PURE__ */ S.jsx("div", { className: "static-text-value h-10 px-3 py-2 bg-[#161616] text-[#A67C52] font-bold rounded-md flex items-center w-full justify-center border-1 border-[#A67C52]", children: "4 weeks" }) })
      ] }),
      (r === "Office" && o && f || a === "Capsules" && E && s && f || s && f && r && r !== "Office" && a !== "Capsules") && /* @__PURE__ */ S.jsxs("div", { className: "final-selection mt-4 p-3 border rounded-md bg-secondary text-secondary-foreground w-5/6 text-center", children: [
        "Selected: ",
        a,
        a === "Capsules" && E && ` - Taste: ${E}`,
        a !== "Capsules" && r && ` - ${r}`,
        r === "Regional" && u && ` - ${u}`,
        r === "Office" && o && ` - ${o}`,
        " ",
        (a === "Capsules" || a !== "Capsules" && r !== "Office") && s && ` - Qty: ${me(s)}`,
        f && ` - Every ${f.replace(" (Recommended)", "")}`
      ] })
    ] })
  ] });
};
function uf() {
  return uf = Object.assign ? Object.assign.bind() : function(a) {
    for (var r = 1; r < arguments.length; r++) {
      var u = arguments[r];
      for (var o in u) ({}).hasOwnProperty.call(u, o) && (a[o] = u[o]);
    }
    return a;
  }, uf.apply(null, arguments);
}
function l0(a, r) {
  if (a == null) return {};
  var u = {};
  for (var o in a) if ({}.hasOwnProperty.call(a, o)) {
    if (r.indexOf(o) !== -1) continue;
    u[o] = a[o];
  }
  return u;
}
function cf(a, r) {
  return cf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(u, o) {
    return u.__proto__ = o, u;
  }, cf(a, r);
}
function Nf(a, r) {
  a.prototype = Object.create(r.prototype), a.prototype.constructor = a, cf(a, r);
}
function q2(a, r) {
  return a.classList ? !!r && a.classList.contains(r) : (" " + (a.className.baseVal || a.className) + " ").indexOf(" " + r + " ") !== -1;
}
function V2(a, r) {
  a.classList ? a.classList.add(r) : q2(a, r) || (typeof a.className == "string" ? a.className = a.className + " " + r : a.setAttribute("class", (a.className && a.className.baseVal || "") + " " + r));
}
function sv(a, r) {
  return a.replace(new RegExp("(^|\\s)" + r + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function X2(a, r) {
  a.classList ? a.classList.remove(r) : typeof a.className == "string" ? a.className = sv(a.className, r) : a.setAttribute("class", sv(a.className && a.className.baseVal || "", r));
}
const fv = {
  disabled: !1
}, Df = De.createContext(null);
var a0 = function(r) {
  return r.scrollTop;
}, ti = "unmounted", Gl = "exited", Vt = "entering", cn = "entered", ci = "exiting", kn = /* @__PURE__ */ function(a) {
  Nf(r, a);
  function r(o, s) {
    var f;
    f = a.call(this, o, s) || this;
    var d = s, m = d && !d.isMounting ? o.enter : o.appear, p;
    return f.appearStatus = null, o.in ? m ? (p = Gl, f.appearStatus = Vt) : p = cn : o.unmountOnExit || o.mountOnEnter ? p = ti : p = Gl, f.state = {
      status: p
    }, f.nextCallback = null, f;
  }
  r.getDerivedStateFromProps = function(s, f) {
    var d = s.in;
    return d && f.status === ti ? {
      status: Gl
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
    else this.props.unmountOnExit && this.state.status === Gl && this.setState({
      status: ti
    });
  }, u.performEnter = function(s) {
    var f = this, d = this.props.enter, m = this.context ? this.context.isMounting : s, p = this.props.nodeRef ? [m] : [Ir.findDOMNode(this), m], h = p[0], g = p[1], y = this.getTimeouts(), x = m ? y.appear : y.enter;
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
      f.props.onEntering(h, g), f.onTransitionEnd(x, function() {
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
        status: Gl
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
          status: Gl
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
kn.contextType = Df;
kn.propTypes = {};
function Ga() {
}
kn.defaultProps = {
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
kn.UNMOUNTED = ti;
kn.EXITED = Gl;
kn.ENTERING = Vt;
kn.ENTERED = cn;
kn.EXITING = ci;
var Q2 = function(r, u) {
  return r && u && u.split(" ").forEach(function(o) {
    return V2(r, o);
  });
}, Qs = function(r, u) {
  return r && u && u.split(" ").forEach(function(o) {
    return X2(r, o);
  });
}, jf = /* @__PURE__ */ function(a) {
  Nf(r, a);
  function r() {
    for (var o, s = arguments.length, f = new Array(s), d = 0; d < s; d++)
      f[d] = arguments[d];
    return o = a.call.apply(a, [this].concat(f)) || this, o.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    }, o.onEnter = function(m, p) {
      var h = o.resolveArguments(m, p), g = h[0], y = h[1];
      o.removeClasses(g, "exit"), o.addClass(g, y ? "appear" : "enter", "base"), o.props.onEnter && o.props.onEnter(m, p);
    }, o.onEntering = function(m, p) {
      var h = o.resolveArguments(m, p), g = h[0], y = h[1], x = y ? "appear" : "enter";
      o.addClass(g, x, "active"), o.props.onEntering && o.props.onEntering(m, p);
    }, o.onEntered = function(m, p) {
      var h = o.resolveArguments(m, p), g = h[0], y = h[1], x = y ? "appear" : "enter";
      o.removeClasses(g, x), o.addClass(g, x, "done"), o.props.onEntered && o.props.onEntered(m, p);
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
      var p = o.props.classNames, h = typeof p == "string", g = h && p ? p + "-" : "", y = h ? "" + g + m : p[m], x = h ? y + "-active" : p[m + "Active"], E = h ? y + "-done" : p[m + "Done"];
      return {
        baseClassName: y,
        activeClassName: x,
        doneClassName: E
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
    return /* @__PURE__ */ De.createElement(kn, uf({}, f, {
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
function Z2(a, r) {
  return !(a === r || De.isValidElement(a) && De.isValidElement(r) && a.key != null && a.key === r.key);
}
var Xa = {
  out: "out-in",
  in: "in-out"
}, tu = function(r, u, o) {
  return function() {
    var s;
    r.props[u] && (s = r.props)[u].apply(s, arguments), o();
  };
}, K2 = (Xo = {}, Xo[Xa.out] = function(a) {
  var r = a.current, u = a.changeState;
  return De.cloneElement(r, {
    in: !1,
    onExited: tu(r, "onExited", function() {
      u(Vt, null);
    })
  });
}, Xo[Xa.in] = function(a) {
  var r = a.current, u = a.changeState, o = a.children;
  return [r, De.cloneElement(o, {
    in: !0,
    onEntered: tu(o, "onEntered", function() {
      u(Vt);
    })
  })];
}, Xo), P2 = (Qo = {}, Qo[Xa.out] = function(a) {
  var r = a.children, u = a.changeState;
  return De.cloneElement(r, {
    in: !0,
    onEntered: tu(r, "onEntered", function() {
      u(cn, De.cloneElement(r, {
        in: !0
      }));
    })
  });
}, Qo[Xa.in] = function(a) {
  var r = a.current, u = a.children, o = a.changeState;
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
}, Qo), zf = /* @__PURE__ */ function(a) {
  Nf(r, a);
  function r() {
    for (var o, s = arguments.length, f = new Array(s), d = 0; d < s; d++)
      f[d] = arguments[d];
    return o = a.call.apply(a, [this].concat(f)) || this, o.state = {
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
function F2(a) {
  return Object.prototype.toString.call(a) === "[object Object]";
}
function dv(a) {
  return F2(a) || Array.isArray(a);
}
function J2() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Uf(a, r) {
  const u = Object.keys(a), o = Object.keys(r);
  if (u.length !== o.length) return !1;
  const s = JSON.stringify(Object.keys(a.breakpoints || {})), f = JSON.stringify(Object.keys(r.breakpoints || {}));
  return s !== f ? !1 : u.every((d) => {
    const m = a[d], p = r[d];
    return typeof m == "function" ? `${m}` == `${p}` : !dv(m) || !dv(p) ? m === p : Uf(m, p);
  });
}
function mv(a) {
  return a.concat().sort((r, u) => r.name > u.name ? 1 : -1).map((r) => r.options);
}
function $2(a, r) {
  if (a.length !== r.length) return !1;
  const u = mv(a), o = mv(r);
  return u.every((s, f) => {
    const d = o[f];
    return Uf(s, d);
  });
}
function Lf(a) {
  return typeof a == "number";
}
function sf(a) {
  return typeof a == "string";
}
function du(a) {
  return typeof a == "boolean";
}
function hv(a) {
  return Object.prototype.toString.call(a) === "[object Object]";
}
function Xe(a) {
  return Math.abs(a);
}
function kf(a) {
  return Math.sign(a);
}
function li(a, r) {
  return Xe(a - r);
}
function W2(a, r) {
  if (a === 0 || r === 0 || Xe(a) <= Xe(r)) return 0;
  const u = li(Xe(a), Xe(r));
  return Xe(u / a);
}
function I2(a) {
  return Math.round(a * 100) / 100;
}
function si(a) {
  return fi(a).map(Number);
}
function Ft(a) {
  return a[bi(a)];
}
function bi(a) {
  return Math.max(0, a.length - 1);
}
function Bf(a, r) {
  return r === bi(a);
}
function pv(a, r = 0) {
  return Array.from(Array(a), (u, o) => r + o);
}
function fi(a) {
  return Object.keys(a);
}
function r0(a, r) {
  return [a, r].reduce((u, o) => (fi(o).forEach((s) => {
    const f = u[s], d = o[s], m = hv(f) && hv(d);
    u[s] = m ? r0(f, d) : d;
  }), u), {});
}
function ff(a, r) {
  return typeof r.MouseEvent < "u" && a instanceof r.MouseEvent;
}
function ew(a, r) {
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
    return sf(a) ? u[a](p) : a(r, p, h);
  }
  return {
    measure: d
  };
}
function di() {
  let a = [];
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
    return a.push(p), o;
  }
  function u() {
    a = a.filter((s) => s());
  }
  const o = {
    add: r,
    clear: u
  };
  return o;
}
function tw(a, r, u, o) {
  const s = di(), f = 1e3 / 60;
  let d = null, m = 0, p = 0;
  function h() {
    s.add(a, "visibilitychange", () => {
      a.hidden && R();
    });
  }
  function g() {
    E(), s.clear();
  }
  function y(O) {
    if (!p) return;
    d || (d = O, u(), u());
    const T = O - d;
    for (d = O, m += T; m >= f; )
      u(), m -= f;
    const z = m / f;
    o(z), p && (p = r.requestAnimationFrame(y));
  }
  function x() {
    p || (p = r.requestAnimationFrame(y));
  }
  function E() {
    r.cancelAnimationFrame(p), d = null, m = 0, p = 0;
  }
  function R() {
    d = null, m = 0;
  }
  return {
    init: h,
    destroy: g,
    start: x,
    stop: E,
    update: u,
    render: o
  };
}
function nw(a, r) {
  const u = r === "rtl", o = a === "y", s = o ? "y" : "x", f = o ? "x" : "y", d = !o && u ? -1 : 1, m = g(), p = y();
  function h(R) {
    const {
      height: w,
      width: O
    } = R;
    return o ? w : O;
  }
  function g() {
    return o ? "top" : u ? "right" : "left";
  }
  function y() {
    return o ? "bottom" : u ? "left" : "right";
  }
  function x(R) {
    return R * d;
  }
  return {
    scroll: s,
    cross: f,
    startEdge: m,
    endEdge: p,
    measureSize: h,
    direction: x
  };
}
function ql(a = 0, r = 0) {
  const u = Xe(a - r);
  function o(h) {
    return h < a;
  }
  function s(h) {
    return h > r;
  }
  function f(h) {
    return o(h) || s(h);
  }
  function d(h) {
    return f(h) ? o(h) ? a : r : h;
  }
  function m(h) {
    return u ? h - u * Math.ceil((h - r) / u) : h;
  }
  return {
    length: u,
    max: r,
    min: a,
    constrain: d,
    reachedAny: f,
    reachedMax: s,
    reachedMin: o,
    removeOffset: m
  };
}
function i0(a, r, u) {
  const {
    constrain: o
  } = ql(0, a), s = a + 1;
  let f = d(r);
  function d(x) {
    return u ? Xe((s + x) % s) : o(x);
  }
  function m() {
    return f;
  }
  function p(x) {
    return f = d(x), y;
  }
  function h(x) {
    return g().set(m() + x);
  }
  function g() {
    return i0(a, m(), u);
  }
  const y = {
    get: m,
    set: p,
    add: h,
    clone: g
  };
  return y;
}
function lw(a, r, u, o, s, f, d, m, p, h, g, y, x, E, R, w, O, T, z) {
  const {
    cross: j,
    direction: q
  } = a, G = ["INPUT", "SELECT", "TEXTAREA"], P = {
    passive: !1
  }, Z = di(), Y = di(), te = ql(50, 225).constrain(E.measure(20)), ee = {
    mouse: 300,
    touch: 400
  }, le = {
    mouse: 500,
    touch: 600
  }, re = R ? 43 : 25;
  let se = !1, me = 0, Q = 0, N = !1, V = !1, k = !1, $ = !1;
  function C(ae) {
    if (!z) return;
    function Re(We) {
      (du(z) || z(ae, We)) && ce(We);
    }
    const He = r;
    Z.add(He, "dragstart", (We) => We.preventDefault(), P).add(He, "touchmove", () => {
    }, P).add(He, "touchend", () => {
    }).add(He, "touchstart", Re).add(He, "mousedown", Re).add(He, "touchcancel", ve).add(He, "contextmenu", ve).add(He, "click", Ce, !0);
  }
  function X() {
    Z.clear(), Y.clear();
  }
  function I() {
    const ae = $ ? u : r;
    Y.add(ae, "touchmove", de, P).add(ae, "touchend", ve).add(ae, "mousemove", de, P).add(ae, "mouseup", ve);
  }
  function W(ae) {
    const Re = ae.nodeName || "";
    return G.includes(Re);
  }
  function ne() {
    return (R ? le : ee)[$ ? "mouse" : "touch"];
  }
  function ge(ae, Re) {
    const He = y.add(kf(ae) * -1), We = g.byDistance(ae, !R).distance;
    return R || Xe(ae) < te ? We : O && Re ? We * 0.5 : g.byIndex(He.get(), 0).distance;
  }
  function ce(ae) {
    const Re = ff(ae, o);
    $ = Re, k = R && Re && !ae.buttons && se, se = li(s.get(), d.get()) >= 2, !(Re && ae.button !== 0) && (W(ae.target) || (N = !0, f.pointerDown(ae), h.useFriction(0).useDuration(0), s.set(d), I(), me = f.readPoint(ae), Q = f.readPoint(ae, j), x.emit("pointerDown")));
  }
  function de(ae) {
    if (!ff(ae, o) && ae.touches.length >= 2) return ve(ae);
    const He = f.readPoint(ae), We = f.readPoint(ae, j), yt = li(He, me), Qe = li(We, Q);
    if (!V && !$ && (!ae.cancelable || (V = yt > Qe, !V)))
      return ve(ae);
    const Qt = f.pointerMove(ae);
    yt > w && (k = !0), h.useFriction(0.3).useDuration(0.75), m.start(), s.add(q(Qt)), ae.preventDefault();
  }
  function ve(ae) {
    const He = g.byDistance(0, !1).index !== y.get(), We = f.pointerUp(ae) * ne(), yt = ge(q(We), He), Qe = W2(We, yt), Qt = re - 10 * Qe, st = T + Qe / 50;
    V = !1, N = !1, Y.clear(), h.useDuration(Qt).useFriction(st), p.distance(yt, !R), $ = !1, x.emit("pointerUp");
  }
  function Ce(ae) {
    k && (ae.stopPropagation(), ae.preventDefault(), k = !1);
  }
  function Be() {
    return N;
  }
  return {
    init: C,
    destroy: X,
    pointerDown: Be
  };
}
function aw(a, r) {
  let o, s;
  function f(y) {
    return y.timeStamp;
  }
  function d(y, x) {
    const R = `client${(x || a.scroll) === "x" ? "X" : "Y"}`;
    return (ff(y, r) ? y : y.touches[0])[R];
  }
  function m(y) {
    return o = y, s = y, d(y);
  }
  function p(y) {
    const x = d(y) - d(s), E = f(y) - f(o) > 170;
    return s = y, E && (o = y), x;
  }
  function h(y) {
    if (!o || !s) return 0;
    const x = d(s) - d(o), E = f(y) - f(o), R = f(y) - f(s) > 170, w = x / E;
    return E && !R && Xe(w) > 0.1 ? w : 0;
  }
  return {
    pointerDown: m,
    pointerMove: p,
    pointerUp: h,
    readPoint: d
  };
}
function rw() {
  function a(u) {
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
    measure: a
  };
}
function iw(a) {
  function r(o) {
    return a * (o / 100);
  }
  return {
    measure: r
  };
}
function ow(a, r, u, o, s, f, d) {
  const m = [a].concat(o);
  let p, h, g = [], y = !1;
  function x(O) {
    return s.measureSize(d.measure(O));
  }
  function E(O) {
    if (!f) return;
    h = x(a), g = o.map(x);
    function T(z) {
      for (const j of z) {
        if (y) return;
        const q = j.target === a, G = o.indexOf(j.target), P = q ? h : g[G], Z = x(q ? a : o[G]);
        if (Xe(Z - P) >= 0.5) {
          O.reInit(), r.emit("resize");
          break;
        }
      }
    }
    p = new ResizeObserver((z) => {
      (du(f) || f(O, z)) && T(z);
    }), u.requestAnimationFrame(() => {
      m.forEach((z) => p.observe(z));
    });
  }
  function R() {
    y = !0, p && p.disconnect();
  }
  return {
    init: E,
    destroy: R
  };
}
function uw(a, r, u, o, s, f) {
  let d = 0, m = 0, p = s, h = f, g = a.get(), y = 0;
  function x() {
    const P = o.get() - a.get(), Z = !p;
    let Y = 0;
    return Z ? (d = 0, u.set(o), a.set(o), Y = P) : (u.set(a), d += P / p, d *= h, g += d, a.add(d), Y = g - y), m = kf(Y), y = g, G;
  }
  function E() {
    const P = o.get() - r.get();
    return Xe(P) < 1e-3;
  }
  function R() {
    return p;
  }
  function w() {
    return m;
  }
  function O() {
    return d;
  }
  function T() {
    return j(s);
  }
  function z() {
    return q(f);
  }
  function j(P) {
    return p = P, G;
  }
  function q(P) {
    return h = P, G;
  }
  const G = {
    direction: w,
    duration: R,
    velocity: O,
    seek: x,
    settled: E,
    useBaseFriction: z,
    useBaseDuration: T,
    useFriction: q,
    useDuration: j
  };
  return G;
}
function cw(a, r, u, o, s) {
  const f = s.measure(10), d = s.measure(50), m = ql(0.1, 0.99);
  let p = !1;
  function h() {
    return !(p || !a.reachedAny(u.get()) || !a.reachedAny(r.get()));
  }
  function g(E) {
    if (!h()) return;
    const R = a.reachedMin(r.get()) ? "min" : "max", w = Xe(a[R] - r.get()), O = u.get() - r.get(), T = m.constrain(w / d);
    u.subtract(O * T), !E && Xe(O) < f && (u.set(a.constrain(u.get())), o.useDuration(25).useBaseFriction());
  }
  function y(E) {
    p = !E;
  }
  return {
    shouldConstrain: h,
    constrain: g,
    toggleActive: y
  };
}
function sw(a, r, u, o, s) {
  const f = ql(-r + a, 0), d = y(), m = g(), p = x();
  function h(R, w) {
    return li(R, w) <= 1;
  }
  function g() {
    const R = d[0], w = Ft(d), O = d.lastIndexOf(R), T = d.indexOf(w) + 1;
    return ql(O, T);
  }
  function y() {
    return u.map((R, w) => {
      const {
        min: O,
        max: T
      } = f, z = f.constrain(R), j = !w, q = Bf(u, w);
      return j ? T : q || h(O, z) ? O : h(T, z) ? T : z;
    }).map((R) => parseFloat(R.toFixed(3)));
  }
  function x() {
    if (r <= a + s) return [f.max];
    if (o === "keepSnaps") return d;
    const {
      min: R,
      max: w
    } = m;
    return d.slice(R, w);
  }
  return {
    snapsContained: p,
    scrollContainLimit: m
  };
}
function fw(a, r, u) {
  const o = r[0], s = u ? o - a : Ft(r);
  return {
    limit: ql(s, o)
  };
}
function dw(a, r, u, o) {
  const f = r.min + 0.1, d = r.max + 0.1, {
    reachedMin: m,
    reachedMax: p
  } = ql(f, d);
  function h(x) {
    return x === 1 ? p(u.get()) : x === -1 ? m(u.get()) : !1;
  }
  function g(x) {
    if (!h(x)) return;
    const E = a * (x * -1);
    o.forEach((R) => R.add(E));
  }
  return {
    loop: g
  };
}
function mw(a) {
  const {
    max: r,
    length: u
  } = a;
  function o(f) {
    const d = f - r;
    return u ? d / -u : 0;
  }
  return {
    get: o
  };
}
function hw(a, r, u, o, s) {
  const {
    startEdge: f,
    endEdge: d
  } = a, {
    groupSlides: m
  } = s, p = y().map(r.measure), h = x(), g = E();
  function y() {
    return m(o).map((w) => Ft(w)[d] - w[0][f]).map(Xe);
  }
  function x() {
    return o.map((w) => u[f] - w[f]).map((w) => -Xe(w));
  }
  function E() {
    return m(h).map((w) => w[0]).map((w, O) => w + p[O]);
  }
  return {
    snaps: h,
    snapsAligned: g
  };
}
function pw(a, r, u, o, s, f) {
  const {
    groupSlides: d
  } = s, {
    min: m,
    max: p
  } = o, h = g();
  function g() {
    const x = d(f), E = !a || r === "keepSnaps";
    return u.length === 1 ? [f] : E ? x : x.slice(m, p).map((R, w, O) => {
      const T = !w, z = Bf(O, w);
      if (T) {
        const j = Ft(O[0]) + 1;
        return pv(j);
      }
      if (z) {
        const j = bi(f) - Ft(O)[0] + 1;
        return pv(j, Ft(O)[0]);
      }
      return R;
    });
  }
  return {
    slideRegistry: h
  };
}
function vw(a, r, u, o, s) {
  const {
    reachedAny: f,
    removeOffset: d,
    constrain: m
  } = o;
  function p(R) {
    return R.concat().sort((w, O) => Xe(w) - Xe(O))[0];
  }
  function h(R) {
    const w = a ? d(R) : m(R), O = r.map((z, j) => ({
      diff: g(z - w, 0),
      index: j
    })).sort((z, j) => Xe(z.diff) - Xe(j.diff)), {
      index: T
    } = O[0];
    return {
      index: T,
      distance: w
    };
  }
  function g(R, w) {
    const O = [R, R + u, R - u];
    if (!a) return R;
    if (!w) return p(O);
    const T = O.filter((z) => kf(z) === w);
    return T.length ? p(T) : Ft(O) - u;
  }
  function y(R, w) {
    const O = r[R] - s.get(), T = g(O, w);
    return {
      index: R,
      distance: T
    };
  }
  function x(R, w) {
    const O = s.get() + R, {
      index: T,
      distance: z
    } = h(O), j = !a && f(O);
    if (!w || j) return {
      index: T,
      distance: R
    };
    const q = r[T] - z, G = R + g(q, 0);
    return {
      index: T,
      distance: G
    };
  }
  return {
    byDistance: x,
    byIndex: y,
    shortcut: g
  };
}
function gw(a, r, u, o, s, f, d) {
  function m(y) {
    const x = y.distance, E = y.index !== r.get();
    f.add(x), x && (o.duration() ? a.start() : (a.update(), a.render(1), a.update())), E && (u.set(r.get()), r.set(y.index), d.emit("select"));
  }
  function p(y, x) {
    const E = s.byDistance(y, x);
    m(E);
  }
  function h(y, x) {
    const E = r.clone().set(y), R = s.byIndex(E.get(), x);
    m(R);
  }
  return {
    distance: p,
    index: h
  };
}
function yw(a, r, u, o, s, f, d, m) {
  const p = {
    passive: !0,
    capture: !0
  };
  let h = 0;
  function g(E) {
    if (!m) return;
    function R(w) {
      if ((/* @__PURE__ */ new Date()).getTime() - h > 10) return;
      d.emit("slideFocusStart"), a.scrollLeft = 0;
      const z = u.findIndex((j) => j.includes(w));
      Lf(z) && (s.useDuration(0), o.index(z, 0), d.emit("slideFocus"));
    }
    f.add(document, "keydown", y, !1), r.forEach((w, O) => {
      f.add(w, "focus", (T) => {
        (du(m) || m(E, T)) && R(O);
      }, p);
    });
  }
  function y(E) {
    E.code === "Tab" && (h = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: g
  };
}
function ni(a) {
  let r = a;
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
function o0(a, r) {
  const u = a.scroll === "x" ? d : m, o = r.style;
  let s = null, f = !1;
  function d(x) {
    return `translate3d(${x}px,0px,0px)`;
  }
  function m(x) {
    return `translate3d(0px,${x}px,0px)`;
  }
  function p(x) {
    if (f) return;
    const E = I2(a.direction(x));
    E !== s && (o.transform = u(E), s = E);
  }
  function h(x) {
    f = !x;
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
function bw(a, r, u, o, s, f, d, m, p) {
  const g = si(s), y = si(s).reverse(), x = T().concat(z());
  function E(Z, Y) {
    return Z.reduce((te, ee) => te - s[ee], Y);
  }
  function R(Z, Y) {
    return Z.reduce((te, ee) => E(te, Y) > 0 ? te.concat([ee]) : te, []);
  }
  function w(Z) {
    return f.map((Y, te) => ({
      start: Y - o[te] + 0.5 + Z,
      end: Y + r - 0.5 + Z
    }));
  }
  function O(Z, Y, te) {
    const ee = w(Y);
    return Z.map((le) => {
      const re = te ? 0 : -u, se = te ? u : 0, me = te ? "end" : "start", Q = ee[le][me];
      return {
        index: le,
        loopPoint: Q,
        slideLocation: ni(-1),
        translate: o0(a, p[le]),
        target: () => m.get() > Q ? re : se
      };
    });
  }
  function T() {
    const Z = d[0], Y = R(y, Z);
    return O(Y, u, !1);
  }
  function z() {
    const Z = r - d[0] - 1, Y = R(g, Z);
    return O(Y, -u, !0);
  }
  function j() {
    return x.every(({
      index: Z
    }) => {
      const Y = g.filter((te) => te !== Z);
      return E(Y, r) <= 0.1;
    });
  }
  function q() {
    x.forEach((Z) => {
      const {
        target: Y,
        translate: te,
        slideLocation: ee
      } = Z, le = Y();
      le !== ee.get() && (te.to(le), ee.set(le));
    });
  }
  function G() {
    x.forEach((Z) => Z.translate.clear());
  }
  return {
    canLoop: j,
    clear: G,
    loop: q,
    loopPoints: x
  };
}
function xw(a, r, u) {
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
    }), o.observe(a, {
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
function Sw(a, r, u, o) {
  const s = {};
  let f = null, d = null, m, p = !1;
  function h() {
    m = new IntersectionObserver((R) => {
      p || (R.forEach((w) => {
        const O = r.indexOf(w.target);
        s[O] = w;
      }), f = null, d = null, u.emit("slidesInView"));
    }, {
      root: a.parentElement,
      threshold: o
    }), r.forEach((R) => m.observe(R));
  }
  function g() {
    m && m.disconnect(), p = !0;
  }
  function y(R) {
    return fi(s).reduce((w, O) => {
      const T = parseInt(O), {
        isIntersecting: z
      } = s[T];
      return (R && z || !R && !z) && w.push(T), w;
    }, []);
  }
  function x(R = !0) {
    if (R && f) return f;
    if (!R && d) return d;
    const w = y(R);
    return R && (f = w), R || (d = w), w;
  }
  return {
    init: h,
    destroy: g,
    get: x
  };
}
function Ew(a, r, u, o, s, f) {
  const {
    measureSize: d,
    startEdge: m,
    endEdge: p
  } = a, h = u[0] && s, g = R(), y = w(), x = u.map(d), E = O();
  function R() {
    if (!h) return 0;
    const z = u[0];
    return Xe(r[m] - z[m]);
  }
  function w() {
    if (!h) return 0;
    const z = f.getComputedStyle(Ft(o));
    return parseFloat(z.getPropertyValue(`margin-${p}`));
  }
  function O() {
    return u.map((z, j, q) => {
      const G = !j, P = Bf(q, j);
      return G ? x[j] + g : P ? x[j] + y : q[j + 1][m] - z[m];
    }).map(Xe);
  }
  return {
    slideSizes: x,
    slideSizesWithGaps: E,
    startGap: g,
    endGap: y
  };
}
function ww(a, r, u, o, s, f, d, m, p) {
  const {
    startEdge: h,
    endEdge: g,
    direction: y
  } = a, x = Lf(u);
  function E(T, z) {
    return si(T).filter((j) => j % z === 0).map((j) => T.slice(j, j + z));
  }
  function R(T) {
    return T.length ? si(T).reduce((z, j, q) => {
      const G = Ft(z) || 0, P = G === 0, Z = j === bi(T), Y = s[h] - f[G][h], te = s[h] - f[j][g], ee = !o && P ? y(d) : 0, le = !o && Z ? y(m) : 0, re = Xe(te - le - (Y + ee));
      return q && re > r + p && z.push(j), Z && z.push(T.length), z;
    }, []).map((z, j, q) => {
      const G = Math.max(q[j - 1] || 0);
      return T.slice(G, z);
    }) : [];
  }
  function w(T) {
    return x ? E(T, u) : R(T);
  }
  return {
    groupSlides: w
  };
}
function Aw(a, r, u, o, s, f, d) {
  const {
    align: m,
    axis: p,
    direction: h,
    startIndex: g,
    loop: y,
    duration: x,
    dragFree: E,
    dragThreshold: R,
    inViewThreshold: w,
    slidesToScroll: O,
    skipSnaps: T,
    containScroll: z,
    watchResize: j,
    watchSlides: q,
    watchDrag: G,
    watchFocus: P
  } = f, Z = 2, Y = rw(), te = Y.measure(r), ee = u.map(Y.measure), le = nw(p, h), re = le.measureSize(te), se = iw(re), me = ew(m, re), Q = !y && !!z, N = y || !!z, {
    slideSizes: V,
    slideSizesWithGaps: k,
    startGap: $,
    endGap: C
  } = Ew(le, te, ee, u, N, s), X = ww(le, re, O, y, te, ee, $, C, Z), {
    snaps: I,
    snapsAligned: W
  } = hw(le, me, te, ee, X), ne = -Ft(I) + Ft(k), {
    snapsContained: ge,
    scrollContainLimit: ce
  } = sw(re, ne, W, z, Z), de = Q ? ge : W, {
    limit: ve
  } = fw(ne, de, y), Ce = i0(bi(de), g, y), Be = Ce.clone(), Me = si(u), ae = ({
    dragHandler: Bn,
    scrollBody: Ja,
    scrollBounds: $a,
    options: {
      loop: mn
    }
  }) => {
    mn || $a.constrain(Bn.pointerDown()), Ja.seek();
  }, Re = ({
    scrollBody: Bn,
    translate: Ja,
    location: $a,
    offsetLocation: mn,
    previousLocation: Zl,
    scrollLooper: hn,
    slideLooper: Kl,
    dragHandler: vl,
    animation: hu,
    eventHandler: Wa,
    scrollBounds: Ei,
    options: {
      loop: Pl
    }
  }, Hn) => {
    const wi = Bn.settled(), Ai = !Ei.shouldConstrain(), Ia = Pl ? wi : wi && Ai, Fl = Ia && !vl.pointerDown();
    Fl && hu.stop();
    const er = $a.get() * Hn + Zl.get() * (1 - Hn);
    mn.set(er), Pl && (hn.loop(Bn.direction()), Kl.loop()), Ja.to(mn.get()), Fl && Wa.emit("settle"), Ia || Wa.emit("scroll");
  }, He = tw(o, s, () => ae(it), (Bn) => Re(it, Bn)), We = 0.68, yt = de[Ce.get()], Qe = ni(yt), Qt = ni(yt), st = ni(yt), Wt = ni(yt), It = uw(Qe, st, Qt, Wt, x, We), Fa = vw(y, de, ne, ve, Wt), Ql = gw(He, Ce, Be, It, Fa, Wt, d), xi = mw(ve), Si = di(), pl = Sw(r, u, d, w), {
    slideRegistry: ft
  } = pw(Q, z, de, ce, X, Me), en = yw(a, u, ft, Ql, It, Si, d, P), it = {
    ownerDocument: o,
    ownerWindow: s,
    eventHandler: d,
    containerRect: te,
    slideRects: ee,
    animation: He,
    axis: le,
    dragHandler: lw(le, a, o, s, Wt, aw(le, s), Qe, He, Ql, It, Fa, Ce, d, se, E, R, T, We, G),
    eventStore: Si,
    percentOfView: se,
    index: Ce,
    indexPrevious: Be,
    limit: ve,
    location: Qe,
    offsetLocation: st,
    previousLocation: Qt,
    options: f,
    resizeHandler: ow(r, d, s, u, le, j, Y),
    scrollBody: It,
    scrollBounds: cw(ve, st, Wt, It, se),
    scrollLooper: dw(ne, ve, st, [Qe, st, Qt, Wt]),
    scrollProgress: xi,
    scrollSnapList: de.map(xi.get),
    scrollSnaps: de,
    scrollTarget: Fa,
    scrollTo: Ql,
    slideLooper: bw(le, re, ne, V, k, I, de, st, u),
    slideFocus: en,
    slidesHandler: xw(r, d, q),
    slidesInView: pl,
    slideIndexes: Me,
    slideRegistry: ft,
    slidesToScroll: X,
    target: Wt,
    translate: o0(le, r)
  };
  return it;
}
function Cw() {
  let a = {}, r;
  function u(h) {
    r = h;
  }
  function o(h) {
    return a[h] || [];
  }
  function s(h) {
    return o(h).forEach((g) => g(r, h)), p;
  }
  function f(h, g) {
    return a[h] = o(h).concat([g]), p;
  }
  function d(h, g) {
    return a[h] = o(h).filter((y) => y !== g), p;
  }
  function m() {
    a = {};
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
function Mw(a) {
  function r(f, d) {
    return r0(f, d || {});
  }
  function u(f) {
    const d = f.breakpoints || {}, m = fi(d).filter((p) => a.matchMedia(p).matches).map((p) => d[p]).reduce((p, h) => r(p, h), {});
    return r(f, m);
  }
  function o(f) {
    return f.map((d) => fi(d.breakpoints || {})).reduce((d, m) => d.concat(m), []).map(a.matchMedia);
  }
  return {
    mergeOptions: r,
    optionsAtMedia: u,
    optionsMediaQueries: o
  };
}
function Ow(a) {
  let r = [];
  function u(f, d) {
    return r = d.filter(({
      options: m
    }) => a.optionsAtMedia(m).active !== !1), r.forEach((m) => m.init(f, a)), d.reduce((m, p) => Object.assign(m, {
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
function nu(a, r, u) {
  const o = a.ownerDocument, s = o.defaultView, f = Mw(s), d = Ow(f), m = di(), p = Cw(), {
    mergeOptions: h,
    optionsAtMedia: g,
    optionsMediaQueries: y
  } = f, {
    on: x,
    off: E,
    emit: R
  } = p, w = le;
  let O = !1, T, z = h(Rw, nu.globalOptions), j = h(z), q = [], G, P, Z;
  function Y() {
    const {
      container: Me,
      slides: ae
    } = j;
    P = (sf(Me) ? a.querySelector(Me) : Me) || a.children[0];
    const He = sf(ae) ? P.querySelectorAll(ae) : ae;
    Z = [].slice.call(He || P.children);
  }
  function te(Me) {
    const ae = Aw(a, P, Z, o, s, Me, p);
    if (Me.loop && !ae.slideLooper.canLoop()) {
      const Re = Object.assign({}, Me, {
        loop: !1
      });
      return te(Re);
    }
    return ae;
  }
  function ee(Me, ae) {
    O || (z = h(z, Me), j = g(z), q = ae || q, Y(), T = te(j), y([z, ...q.map(({
      options: Re
    }) => Re)]).forEach((Re) => m.add(Re, "change", le)), j.active && (T.translate.to(T.location.get()), T.animation.init(), T.slidesInView.init(), T.slideFocus.init(Be), T.eventHandler.init(Be), T.resizeHandler.init(Be), T.slidesHandler.init(Be), T.options.loop && T.slideLooper.loop(), P.offsetParent && Z.length && T.dragHandler.init(Be), G = d.init(Be, q)));
  }
  function le(Me, ae) {
    const Re = X();
    re(), ee(h({
      startIndex: Re
    }, Me), ae), p.emit("reInit");
  }
  function re() {
    T.dragHandler.destroy(), T.eventStore.clear(), T.translate.clear(), T.slideLooper.clear(), T.resizeHandler.destroy(), T.slidesHandler.destroy(), T.slidesInView.destroy(), T.animation.destroy(), d.destroy(), m.clear();
  }
  function se() {
    O || (O = !0, m.clear(), re(), p.emit("destroy"), p.clear());
  }
  function me(Me, ae, Re) {
    !j.active || O || (T.scrollBody.useBaseFriction().useDuration(ae === !0 ? 0 : j.duration), T.scrollTo.index(Me, Re || 0));
  }
  function Q(Me) {
    const ae = T.index.add(1).get();
    me(ae, Me, -1);
  }
  function N(Me) {
    const ae = T.index.add(-1).get();
    me(ae, Me, 1);
  }
  function V() {
    return T.index.add(1).get() !== X();
  }
  function k() {
    return T.index.add(-1).get() !== X();
  }
  function $() {
    return T.scrollSnapList;
  }
  function C() {
    return T.scrollProgress.get(T.offsetLocation.get());
  }
  function X() {
    return T.index.get();
  }
  function I() {
    return T.indexPrevious.get();
  }
  function W() {
    return T.slidesInView.get();
  }
  function ne() {
    return T.slidesInView.get(!1);
  }
  function ge() {
    return G;
  }
  function ce() {
    return T;
  }
  function de() {
    return a;
  }
  function ve() {
    return P;
  }
  function Ce() {
    return Z;
  }
  const Be = {
    canScrollNext: V,
    canScrollPrev: k,
    containerNode: ve,
    internalEngine: ce,
    destroy: se,
    off: E,
    on: x,
    emit: R,
    plugins: ge,
    previousScrollSnap: I,
    reInit: w,
    rootNode: de,
    scrollNext: Q,
    scrollPrev: N,
    scrollProgress: C,
    scrollSnapList: $,
    scrollTo: me,
    selectedScrollSnap: X,
    slideNodes: Ce,
    slidesInView: W,
    slidesNotInView: ne
  };
  return ee(r, u), setTimeout(() => p.emit("init"), 0), Be;
}
nu.globalOptions = void 0;
function Hf(a = {}, r = []) {
  const u = A.useRef(a), o = A.useRef(r), [s, f] = A.useState(), [d, m] = A.useState(), p = A.useCallback(() => {
    s && s.reInit(u.current, o.current);
  }, [s]);
  return A.useEffect(() => {
    Uf(u.current, a) || (u.current = a, p());
  }, [a, p]), A.useEffect(() => {
    $2(o.current, r) || (o.current = r, p());
  }, [r, p]), A.useEffect(() => {
    if (J2() && d) {
      nu.globalOptions = Hf.globalOptions;
      const h = nu(d, u.current, o.current);
      return f(h), () => h.destroy();
    } else
      f(void 0);
  }, [d, f]), [m, s];
}
Hf.globalOptions = void 0;
const u0 = A.createContext(null);
function mu() {
  const a = A.useContext(u0);
  if (!a)
    throw new Error("useCarousel must be used within a <Carousel />");
  return a;
}
function Tw({
  orientation: a = "horizontal",
  opts: r,
  setApi: u,
  plugins: o,
  className: s,
  children: f,
  ...d
}) {
  const [m, p] = Hf({
    ...r,
    axis: a === "horizontal" ? "x" : "y"
  }, o), [h, g] = A.useState(!1), [y, x] = A.useState(!1), E = A.useCallback((T) => {
    T && (g(T.canScrollPrev()), x(T.canScrollNext()));
  }, []), R = A.useCallback(() => {
    p == null || p.scrollPrev();
  }, [p]), w = A.useCallback(() => {
    p == null || p.scrollNext();
  }, [p]), O = A.useCallback((T) => {
    T.key === "ArrowLeft" ? (T.preventDefault(), R()) : T.key === "ArrowRight" && (T.preventDefault(), w());
  }, [R, w]);
  return A.useEffect(() => {
    !p || !u || u(p);
  }, [p, u]), A.useEffect(() => {
    if (p)
      return E(p), p.on("reInit", E), p.on("select", E), () => {
        p == null || p.off("select", E);
      };
  }, [p, E]), /* @__PURE__ */ S.jsx(
    u0.Provider,
    {
      value: {
        carouselRef: m,
        api: p,
        opts: r,
        orientation: a || ((r == null ? void 0 : r.axis) === "y" ? "vertical" : "horizontal"),
        scrollPrev: R,
        scrollNext: w,
        canScrollPrev: h,
        canScrollNext: y
      },
      children: /* @__PURE__ */ S.jsx(
        "div",
        {
          onKeyDownCapture: O,
          className: hl("relative", s),
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
  className: a,
  ...r
}) {
  const { carouselRef: u, orientation: o } = mu();
  return /* @__PURE__ */ S.jsx(
    "div",
    {
      ref: u,
      className: "overflow-hidden",
      "data-slot": "carousel-content",
      children: /* @__PURE__ */ S.jsx(
        "div",
        {
          className: hl(
            "flex",
            o === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            a
          ),
          ...r
        }
      )
    }
  );
}
function Nw({
  className: a,
  ...r
}) {
  const { orientation: u } = mu();
  return /* @__PURE__ */ S.jsx(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: hl(
        "min-w-0 shrink-0 grow-0 basis-full",
        u === "horizontal" ? "pl-4" : "pt-4",
        a
      ),
      ...r
    }
  );
}
function Dw({
  className: a,
  variant: r = "outline",
  size: u = "icon",
  ...o
}) {
  const { orientation: s, scrollPrev: f, canScrollPrev: d } = mu();
  return /* @__PURE__ */ S.jsxs(
    Dn,
    {
      "data-slot": "carousel-previous",
      variant: r,
      size: u,
      className: hl("absolute size-8 rounded-full", s === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", a),
      disabled: !d,
      onClick: f,
      ...o,
      children: [
        /* @__PURE__ */ S.jsx(XE, {}),
        /* @__PURE__ */ S.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function jw({
  className: a,
  variant: r = "outline",
  size: u = "icon",
  ...o
}) {
  const { orientation: s, scrollNext: f, canScrollNext: d } = mu();
  return /* @__PURE__ */ S.jsxs(
    Dn,
    {
      "data-slot": "carousel-next",
      variant: r,
      size: u,
      className: hl("absolute size-8 rounded-full", s === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", a),
      disabled: !d,
      onClick: f,
      ...o,
      children: [
        /* @__PURE__ */ S.jsx(ZE, {}),
        /* @__PURE__ */ S.jsx("span", { className: "sr-only", children: "Next slide" })
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
    description: "Our most popular Subscription. Seasonal coffee curated every month. The perfect way to explore stunning Single Origin flavour.",
    currentOffering: {
      Espresso: "🇷🇼Huye Mountain Washed, Rwanda: Milk Chocolate. Orange. Raisin.",
      Filter: "🇷🇼Mahembe, Rwanda: Cherry. Black Tea. Sparkling."
    }
  },
  Curated: {
    description: "Two seasonal coffees chosen every month by our team. Explore the variety of Single Origin flavour side by side.",
    currentOffering: {
      Espresso: `🇷🇼Huye Mountain Washed, Rwanda: Milk Chocolate. Orange. Raisin.
🇷🇼Huye Mountain Natural, Rwanda: Malt. Morello Cherry. Juicy.`,
      Filter: `🇷🇼Mahembe, Rwanda: Cherry. Black Tea. Sparkling.
🇨🇷La Bandera Forestal, Costa Rica: Mango. Pineapple. Fresh.`
    }
  },
  Masterpiece: {
    description: "The rarest coffees on the planet: a showcase of innovation and extraordinary flavour. Scoring 90 points and up. Omni Roast.",
    currentOffering: "Finca Sophia Natural Gesha, Panama 🇵🇦"
  },
  "Low-Caf": {
    description: "Our answer to decaf, without no compromise on flavour: unique coffees featuring naturally low levels of caffeine.",
    currentOffering: "Daterra Reserve from Brazil 🇧🇷"
  },
  Office: {
    description: "For offices or households that love their espresso, with a little more volume each month. The coffee selection changes every month, allowing you to explore different regions and flavour!",
    currentOffering: "🇪🇹 Spring Coffee, Ethiopia: Apricot Jam. Bergamot. Floral."
  },
  Regional: {
    Brazil: {
      description: "People love Brazilian Coffees for their sweetness, depth, and low acidity.",
      currentOffering: "🇧🇷 Elemental, Brazil: Milk Chocolate. Macadamia. Smooth."
    },
    Ethiopia: {
      description: "People love Ethiopian Coffees for their fruity sweetness and floral notes.",
      currentOffering: "🇪🇹 Chelbesa, Ethiopia: Peach. Fudge. Jasmine."
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
}, zw = (a, r, u, o, s, f) => {
  if (a === "Capsules") {
    const d = f ? parseInt(f) : 0;
    if (d === 3) {
      if (s === "Brazil") return 43660597690635;
      if (s === "Ethiopia") return 43660597756171;
    }
    return console.warn(`Capsule Variant ID not found for Edition: ${s}, Quantity: ${d}`), null;
  }
  return r === "Roasters Choice" ? a === "Filter" ? 45910178332939 : a === "Espresso" ? 45910178398475 : (console.warn("Roasters Choice invalid method:", a), null) : r === "Curated" ? a === "Filter" ? 54897259151735 : a === "Espresso" ? 54897259184503 : (console.warn("Curated invalid method:", a), null) : r === "Masterpiece" ? 45969541562635 : r === "Office" ? o === "1x 1kg" ? 43658532192523 : o === "2x 1kg" ? 43658532258059 : o === "3x 1kg" || o === "4x 1kg" || o === "5x 1kg" ? (console.warn(`Office Variant ID for ${o} is not explicitly defined. Using 1x 1kg variant ID as fallback.`), 43658532192523) : (console.warn("Office unsupported size for current Variant ID mapping:", o), null) : r === "Regional" ? u === "Center America" ? 45972274381067 : u === "Ethiopia" ? 45972211695883 : u === "Brazil" ? 45969588617483 : (console.warn("Regional region not mapped:", u), null) : r === "Low-Caf" ? 45972282409227 : (console.warn("Fallback: Variant ID lookup failed.", { method: a, type: r, region: u, sizeOption: o, edition: s, quantity: f }), null);
}, Uw = {
  "1 Week": { planId: 710364201335 },
  "2 Weeks": { planId: 710364234103 },
  "3 Weeks": { planId: 710364266871 },
  "4 Weeks (Recommended)": { planId: 710364299639 },
  "4 Weeks": { planId: 710364299639 },
  "5 Weeks": { planId: 710364332407 },
  "6 Weeks": { planId: 710364365175 }
}, Lw = { "2 Weeks": 710464045431, "4 Weeks (Recommended)": 710464143735, "4 Weeks": 710464143735, "6 Weeks": 710464110967 }, kw = 710364397943, Bw = { "1 Week": 710364823927, "2 Weeks": 710364856695, "4 Weeks (Recommended)": 710364922231, "4 Weeks": 710364922231, "6 Weeks": 710364987767 }, Hw = { "2 Weeks": 710364463479, "4 Weeks (Recommended)": 710364529015, "4 Weeks": 710364529015, "6 Weeks": 710364594551 }, Gw = { "2 Weeks": 710364660087, "4 Weeks (Recommended)": 710364725623, "4 Weeks": 710364725623, "6 Weeks": 710364791159 }, Yw = { "2 Weeks": 710447038839, "4 Weeks": 710447104375, "4 Weeks (Recommended)": 710447104375 }, qw = {
  "2 Weeks": 710706069879,
  "4 Weeks (Recommended)": 710706004343,
  "4 Weeks": 710706004343
}, Vw = "thebarn.de", Xw = (a, r, u, o, s, f, d) => {
  if (!a || a !== "Capsules" && !r || a === "Capsules" && !o) return "";
  if (a !== "Capsules" && r !== "Office" && !f || a === "Capsules" && !f) return "Select Quantity...";
  if (r === "Office" && !s) return "Select Size...";
  const m = f ? parseInt(f) : 0;
  if (a === "Capsules") {
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
    if (s === "1x 1kg") return "€39.00";
    if (s === "2x 1kg") return "€78.00";
    if (s === "3x 1kg") return "€117.00";
    if (s === "4x 1kg") return "€156.00";
    if (s === "5x 1kg") return "€195.00";
  }
  return "Select options for price";
}, c0 = De.forwardRef((a, r) => /* @__PURE__ */ S.jsxs("div", { ref: r, className: "default-intro-content text-white w-[90%] h-full flex flex-col items-center", children: [
  /* @__PURE__ */ S.jsx("div", { className: "mt-8", children: /* @__PURE__ */ S.jsx("img", { src: "https://cdn.shopify.com/s/files/1/0831/4141/files/LOGO-NAME.png?v=1710576883", alt: "The Barn Coffee Roasters Logo", style: { width: "100%", maxWidth: "180px", height: "auto", margin: "1rem 0" } }) }),
  /* @__PURE__ */ S.jsxs("div", { className: "p-5 border border-[#A57C62] rounded-md mt-8 max-w-3xl", children: [
    " ",
    /* @__PURE__ */ S.jsxs("ul", { className: "intro-list text-xl sm:text-2xl", style: { listStyle: "none", padding: 0 }, children: [
      /* @__PURE__ */ S.jsx("li", { className: "my-2", children: "🌱 Sustainably sourced from top farms" }),
      /* @__PURE__ */ S.jsx("li", { className: "my-2", children: "🔥 Expertly roasted in Berlin" }),
      /* @__PURE__ */ S.jsx("li", { className: "my-2", children: "📦 Delivered fresh, right when you need it" }),
      /* @__PURE__ */ S.jsx("li", { className: "my-2", children: "☕ Always rotating—always exceptional" })
    ] })
  ] })
] }));
c0.displayName = "DefaultIntroContent";
const s0 = De.forwardRef(({
  method: a,
  type: r,
  region: u,
  edition: o,
  sizeOption: s,
  quantity: f,
  frequency: d,
  canAddToCartProp: m
}, p) => {
  var z, j, q, G, P, Z, Y, te;
  let h = [], g = null;
  a === "Capsules" ? (h = ((z = on.Capsules) == null ? void 0 : z[o]) || ((j = on.Capsules) == null ? void 0 : j._default) || on._fallback || [], g = ((q = Wr.Capsules) == null ? void 0 : q[o]) || ((G = Wr.Capsules) == null ? void 0 : G._default) || null) : r === "Regional" ? (h = ((P = on.Regional) == null ? void 0 : P[u]) || ((Z = on.Regional) == null ? void 0 : Z._default) || on._fallback || [], g = ((Y = Wr.Regional) == null ? void 0 : Y[u]) || ((te = Wr.Regional) == null ? void 0 : te._default) || null) : r ? (h = on[r] || on._fallback || [], g = Wr[r] || null) : (h = on._fallback || [], g = null), (!Array.isArray(h) || h.length === 0) && (h = on._fallback || []);
  let y = null;
  if (g && g.currentOffering) {
    let ee;
    typeof g.currentOffering == "object" && (r === "Roasters Choice" || r === "Curated") ? (ee = g.currentOffering[a], ee || (ee = Object.values(g.currentOffering).join(`
`) || "Details coming soon.")) : typeof g.currentOffering == "string" ? ee = g.currentOffering : ee = "Details coming soon.", y = /* @__PURE__ */ S.jsx("p", { className: "whitespace-pre-wrap text-sm sm:text-base", children: ee });
  }
  const x = "text-[#A67C52] font-semibold", E = [];
  if (E.push("Your selection: "), E.push(/* @__PURE__ */ S.jsx("span", { className: x, children: a }, "method")), a === "Capsules" ? o ? (E.push(" - Taste: "), E.push(/* @__PURE__ */ S.jsx("span", { className: x, children: o }, "edition"))) : E.push(" (select taste profile)") : r ? (E.push(" - "), E.push(/* @__PURE__ */ S.jsx("span", { className: x, children: r }, "type")), r === "Regional" && (u ? (E.push(" - "), E.push(/* @__PURE__ */ S.jsx("span", { className: x, children: u }, "region"))) : E.push(" (select region)"))) : E.push(" (select type)"), E.push(" subscription"), f || s)
    if (E.push(" - Quantity: "), r === "Office")
      E.push(/* @__PURE__ */ S.jsx("span", { className: x, children: s }, "qty-val"));
    else {
      const ee = parseInt(f);
      a === "Capsules" ? E.push(/* @__PURE__ */ S.jsx("span", { className: x, children: "3x 10 capsules" }, "qty-val")) : r === "Curated" ? E.push(/* @__PURE__ */ S.jsx("span", { className: x, children: `${ee}x 250g` }, "qty-val")) : r === "Masterpiece" ? E.push(/* @__PURE__ */ S.jsx("span", { className: x, children: `${ee} bag${ee > 1 ? "s" : ""}` }, "qty-val")) : E.push(/* @__PURE__ */ S.jsx("span", { className: x, children: `${ee} bag${ee > 1 ? "s" : ""} of 250g each` }, "qty-val"));
    }
  else
    E.push(r === "Office" ? " (select size)" : " (select quantity)");
  if (d) {
    E.push(", delivered every ");
    const ee = d.replace(" (Recommended)", "");
    E.push(/* @__PURE__ */ S.jsx("span", { className: x, children: ee }, "freq"));
  } else
    E.push(" (select frequency)");
  E.push(".");
  const R = () => {
    if (!m) {
      alert("Please complete selections or note that this specific option may be coming soon.");
      return;
    }
    const ee = zw(a, r, u, s, o, f);
    if (!ee) {
      alert("Error: Product variant not found for the current selection. It might be coming soon or an issue with the configuration."), console.error("Add to Cart blocked: Variant ID is null.", { method: a, type: r, region: u, sizeOption: s, edition: o, quantity: f });
      return;
    }
    let le;
    const re = parseInt(f, 10);
    if (r === "Office")
      le = 1;
    else if (r === "Curated")
      re === 2 ? le = 1 : re === 4 ? le = 2 : re === 6 ? le = 3 : le = re;
    else if (a === "Capsules")
      if (re === 3)
        le = 1;
      else {
        alert("Selected capsule quantity is not available for purchase at this time.");
        return;
      }
    else
      le = re;
    if (isNaN(le) || le < 1) {
      alert("Error: Invalid quantity for cart link. Please check selections."), console.error("Invalid quantityForLink:", le, { method: a, type: r, quantity: f, sizeOption: s });
      return;
    }
    let se;
    if (a === "Capsules")
      se = qw[d];
    else if (r === "Office") se = Yw[d];
    else if (r === "Low-Caf") se = Lw[d];
    else if (r === "Masterpiece")
      se = kw, d !== "4 Weeks (Recommended)" && d !== "4 Weeks" && console.warn("Masterpiece frequency note: Standard Masterpiece plan ID used, though frequency is not 4 weeks. Ensure this is intended.");
    else if (r === "Regional" && u === "Center America") se = Bw[d];
    else if (r === "Regional" && u === "Ethiopia") se = Hw[d];
    else if (r === "Regional" && u === "Brazil") se = Gw[d];
    else {
      const V = Uw[d];
      V && (se = V.planId);
    }
    if (!se) {
      const V = a === "Capsules" ? `Capsules (${o || "N/A"})` : `${r} (${u || "N/A"})`;
      alert(`Error: Subscription plan details for frequency "${d}" are not available for ${V.trim()}.`);
      return;
    }
    const me = new URLSearchParams();
    me.append("items[][id]", ee.toString()), me.append("items[][quantity]", le.toString()), me.append("items[][selling_plan]", se.toString()), me.append("return_to", "/checkout");
    const Q = `https://${Vw}/cart/clear?return_to=${encodeURIComponent(`/cart/add?${me.toString()}`)}`, N = window.open(Q, "_blank");
    N ? N.focus() : alert("Popup blocker may have prevented opening the cart. Please disable it and try again.");
  }, w = r === "Masterpiece" && a !== "Capsules" ? "We roast this subscription only on the first Tuesday every month" : "You can adjust your quantity any time!", O = Xw(a, r, u, o, s, f), T = O && O !== "Select options for price" && O !== "Select Quantity..." && O !== "Select Size..." && O !== "Select Region..." && O !== "Price on selection" && O !== "Coming soon";
  return /* @__PURE__ */ S.jsxs("div", { ref: p, className: "final-selection-display w-[100%] flex flex-col items-center text-white text-center px-4", children: [
    /* @__PURE__ */ S.jsx("h2", { className: "summary-init text-2xl font-semibold text-[#A67C52] mb-4", children: "Subscription Summary" }),
    h.length > 0 ? /* @__PURE__ */ S.jsxs(Tw, { className: "w-full max-w-lg mx-auto mb-6", opts: { align: "start", loop: h.length > 1 }, children: [
      /* @__PURE__ */ S.jsx(_w, { children: h.map((ee, le) => /* @__PURE__ */ S.jsx(Nw, { children: /* @__PURE__ */ S.jsx("div", { className: "p-1", children: /* @__PURE__ */ S.jsx(
        "img",
        {
          src: ee,
          alt: `${a}${r ? " - " + r : ""}${o ? " - Taste: " + o : ""}${u ? " - " + u : ""} image ${le + 1}`,
          className: "w-full h-auto aspect-square object-cover rounded-md block",
          loading: "lazy"
        }
      ) }) }, `${a}-${r || o}-${u || ""}-${le}-${f || s}`)) }),
      h.length > 1 && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
        /* @__PURE__ */ S.jsx(Dw, { className: "absolute left-[-25px] sm:left-[-40px] top-1/2 -translate-y-1/2 text-[#A67C52] bg-[#1a1a1a]/80 hover:bg-[#3a3c3d] border-none" }),
        /* @__PURE__ */ S.jsx(jw, { className: "absolute right-[-25px] sm:right-[-40px] top-1/2 -translate-y-1/2 text-[#A67C52] bg-[#1a1a1a]/80 hover:bg-[#3a3c3d] border-none" })
      ] })
    ] }) : /* @__PURE__ */ S.jsx("div", { className: "w-full max-w-xs h-[250px] bg-[#3a3c3d]/50 flex items-center justify-center rounded-md mb-6 border border-[#A67C52]/30", children: /* @__PURE__ */ S.jsx("p", { className: "text-gray-400", children: "Image Coming Soon" }) }),
    g && g.description && /* @__PURE__ */ S.jsxs("div", { className: "subscription-description text-white my-4 text-left w-full max-w-5xl flex justify-center flex-col", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "bg-[#3a3c3d] p-4 rounded-md border border-[#A67C52] text-base sm:text-lg w-full", children: [
        /* @__PURE__ */ S.jsx("p", { className: "mb-3", children: g.description }),
        y
      ] }),
      /* @__PURE__ */ S.jsxs("div", { children: [
        " ",
        /* @__PURE__ */ S.jsx("h1", { className: "words-animation", children: w }),
        " "
      ] })
    ] }),
    /* @__PURE__ */ S.jsx("p", { className: "summary-sentence text-base sm:text-lg leading-relaxed my-4 w-full max-w-5xl min-h-[3em]", children: E.map((ee, le) => /* @__PURE__ */ S.jsx(De.Fragment, { children: ee }, le)) }),
    /* @__PURE__ */ S.jsx("div", { className: "cart-actions-container mt-auto pt-4 w-full max-w-5xl flex flex-col items-center sm:flex-row sm:justify-end sm:items-center", children: /* @__PURE__ */ S.jsxs("div", { className: "price-and-button-group flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-x-4", children: [
      /* @__PURE__ */ S.jsx("div", { className: "price-display text-white text-2xl font-bold min-h-[1em]", children: T ? /* @__PURE__ */ S.jsx("span", { children: O }) : O && /* @__PURE__ */ S.jsx("span", { className: "text-sm text-gray-400", children: O }) }),
      /* @__PURE__ */ S.jsx(
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
const Qw = ({ method: a, type: r, region: u, edition: o, sizeOption: s, quantity: f, frequency: d }) => {
  const m = a && (r || o), p = A.useRef(null), h = A.useRef(null), g = a && d && (a === "Capsules" && o && f === "3" || // Only 3 boxes of capsules are purchasable
  r === "Office" && s || r === "Regional" && u && f || ["Roasters Choice", "Masterpiece", "Low-Caf", "Curated"].includes(r) && f);
  return /* @__PURE__ */ S.jsx("div", { className: `right-container flex justify-center w-full min-h-screen bg-[#1a1a1a] ${m ? "items-start pt-8 pb-8" : "items-center"}`, children: /* @__PURE__ */ S.jsx(zf, { mode: "out-in", children: /* @__PURE__ */ S.jsx(
    jf,
    {
      nodeRef: m ? h : p,
      timeout: 1e3,
      classNames: "fade-content",
      unmountOnExit: !0,
      children: m ? /* @__PURE__ */ S.jsx(s0, { ref: h, method: a, type: r, region: u, edition: o, sizeOption: s, quantity: f, frequency: d, canAddToCartProp: g }) : /* @__PURE__ */ S.jsx(c0, { ref: p })
    },
    m ? "summary" : "intro"
  ) }) });
};
function Zw() {
  const [a, r] = A.useState(""), [u, o] = A.useState(""), [s, f] = A.useState(""), [d, m] = A.useState(""), [p, h] = A.useState(""), [g, y] = A.useState(""), [x, E] = A.useState(""), R = (P) => {
    r(P), o(""), f(""), m(""), h(""), y(""), E("");
  }, w = (P) => {
    o(P), f(""), m(""), h(""), y(""), E("");
  }, O = (P) => {
    f(P), m(""), y(""), E("");
  }, T = (P) => {
    m(P), o(""), f(""), h(""), y(""), E("");
  }, z = (P) => {
    h(P), y(u === "Office" ? P : ""), m(""), E("");
  }, j = (P) => {
    y(P), E("");
  }, q = (P) => {
    E(P);
  }, G = () => {
    r(""), o(""), f(""), m(""), h(""), y(""), E("");
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "app-container", children: [
    /* @__PURE__ */ S.jsx("div", { className: "function-container", children: /* @__PURE__ */ S.jsx(
      Y2,
      {
        selectedMethod: a,
        selectedCoffeeType: u,
        selectedRegion: s,
        selectedEdition: d,
        selectedSizeOption: p,
        finalSelectionDetail: g,
        selectedFrequency: x,
        onMethodChange: R,
        onCoffeeTypeChange: w,
        onRegionChange: O,
        onEditionChange: T,
        onSizeOptionChange: z,
        onQuantityChange: j,
        onFrequencyChange: q,
        onResetSelections: G
      }
    ) }),
    /* @__PURE__ */ S.jsx("div", { className: "result-container", children: /* @__PURE__ */ S.jsx(
      Qw,
      {
        method: a,
        type: u,
        region: s,
        edition: d,
        sizeOption: p,
        quantity: g,
        frequency: x
      }
    ) })
  ] });
}
const Zs = "thebarn-subscription-react-app-root";
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded. Attempting to mount React app...");
  const a = document.getElementById(Zs);
  if (console.log(`Found element with ID #${Zs}:`, a), a)
    try {
      Nb.createRoot(a).render(
        /* @__PURE__ */ S.jsx(A.StrictMode, { children: /* @__PURE__ */ S.jsx(Zw, {}) })
      ), console.log("React app mount initiated successfully.");
    } catch (r) {
      console.error("Error occurred during createRoot or render:", r);
    }
  else
    console.error(`CRITICAL ERROR: Could not find root element with ID #${Zs} in the HTML after DOMContentLoaded.`);
});
