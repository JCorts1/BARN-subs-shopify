function I0(a, r) {
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
function Fp(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var fs = { exports: {} }, Vi = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rp;
function eb() {
  if (rp) return Vi;
  rp = 1;
  var a = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function u(o, s, f) {
    var d = null;
    if (f !== void 0 && (d = "" + f), s.key !== void 0 && (d = "" + s.key), "key" in s) {
      f = {};
      for (var p in s)
        p !== "key" && (f[p] = s[p]);
    } else f = s;
    return s = f.ref, {
      $$typeof: a,
      type: o,
      key: d,
      ref: s !== void 0 ? s : null,
      props: f
    };
  }
  return Vi.Fragment = r, Vi.jsx = u, Vi.jsxs = u, Vi;
}
var op;
function tb() {
  return op || (op = 1, fs.exports = eb()), fs.exports;
}
var S = tb(), ds = { exports: {} }, be = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var up;
function nb() {
  if (up) return be;
  up = 1;
  var a = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), b = Symbol.iterator;
  function x(R) {
    return R === null || typeof R != "object" ? null : (R = b && R[b] || R["@@iterator"], typeof R == "function" ? R : null);
  }
  var A = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, C = Object.assign, E = {};
  function O(R, V, ee) {
    this.props = R, this.context = V, this.refs = E, this.updater = ee || A;
  }
  O.prototype.isReactComponent = {}, O.prototype.setState = function(R, V) {
    if (typeof R != "object" && typeof R != "function" && R != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, R, V, "setState");
  }, O.prototype.forceUpdate = function(R) {
    this.updater.enqueueForceUpdate(this, R, "forceUpdate");
  };
  function T() {
  }
  T.prototype = O.prototype;
  function j(R, V, ee) {
    this.props = R, this.context = V, this.refs = E, this.updater = ee || A;
  }
  var z = j.prototype = new T();
  z.constructor = j, C(z, O.prototype), z.isPureReactComponent = !0;
  var Y = Array.isArray, U = { H: null, A: null, T: null, S: null, V: null }, J = Object.prototype.hasOwnProperty;
  function K(R, V, ee, W, te, ge) {
    return ee = ge.ref, {
      $$typeof: a,
      type: R,
      key: V,
      ref: ee !== void 0 ? ee : null,
      props: ge
    };
  }
  function q(R, V) {
    return K(
      R.type,
      V,
      void 0,
      void 0,
      void 0,
      R.props
    );
  }
  function I(R) {
    return typeof R == "object" && R !== null && R.$$typeof === a;
  }
  function ne(R) {
    var V = { "=": "=0", ":": "=2" };
    return "$" + R.replace(/[=:]/g, function(ee) {
      return V[ee];
    });
  }
  var le = /\/+/g;
  function ue(R, V) {
    return typeof R == "object" && R !== null && R.key != null ? ne("" + R.key) : V.toString(36);
  }
  function me() {
  }
  function se(R) {
    switch (R.status) {
      case "fulfilled":
        return R.value;
      case "rejected":
        throw R.reason;
      default:
        switch (typeof R.status == "string" ? R.then(me, me) : (R.status = "pending", R.then(
          function(V) {
            R.status === "pending" && (R.status = "fulfilled", R.value = V);
          },
          function(V) {
            R.status === "pending" && (R.status = "rejected", R.reason = V);
          }
        )), R.status) {
          case "fulfilled":
            return R.value;
          case "rejected":
            throw R.reason;
        }
    }
    throw R;
  }
  function Q(R, V, ee, W, te) {
    var ge = typeof R;
    (ge === "undefined" || ge === "boolean") && (R = null);
    var ce = !1;
    if (R === null) ce = !0;
    else
      switch (ge) {
        case "bigint":
        case "string":
        case "number":
          ce = !0;
          break;
        case "object":
          switch (R.$$typeof) {
            case a:
            case r:
              ce = !0;
              break;
            case y:
              return ce = R._init, Q(
                ce(R._payload),
                V,
                ee,
                W,
                te
              );
          }
      }
    if (ce)
      return te = te(R), ce = W === "" ? "." + ue(R, 0) : W, Y(te) ? (ee = "", ce != null && (ee = ce.replace(le, "$&/") + "/"), Q(te, V, ee, "", function(Re) {
        return Re;
      })) : te != null && (I(te) && (te = q(
        te,
        ee + (te.key == null || R && R.key === te.key ? "" : ("" + te.key).replace(
          le,
          "$&/"
        ) + "/") + ce
      )), V.push(te)), 1;
    ce = 0;
    var de = W === "" ? "." : W + ":";
    if (Y(R))
      for (var ve = 0; ve < R.length; ve++)
        W = R[ve], ge = de + ue(W, ve), ce += Q(
          W,
          V,
          ee,
          ge,
          te
        );
    else if (ve = x(R), typeof ve == "function")
      for (R = ve.call(R), ve = 0; !(W = R.next()).done; )
        W = W.value, ge = de + ue(W, ve++), ce += Q(
          W,
          V,
          ee,
          ge,
          te
        );
    else if (ge === "object") {
      if (typeof R.then == "function")
        return Q(
          se(R),
          V,
          ee,
          W,
          te
        );
      throw V = String(R), Error(
        "Objects are not valid as a React child (found: " + (V === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : V) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ce;
  }
  function D(R, V, ee) {
    if (R == null) return R;
    var W = [], te = 0;
    return Q(R, W, "", "", function(ge) {
      return V.call(ee, ge, te++);
    }), W;
  }
  function X(R) {
    if (R._status === -1) {
      var V = R._result;
      V = V(), V.then(
        function(ee) {
          (R._status === 0 || R._status === -1) && (R._status = 1, R._result = ee);
        },
        function(ee) {
          (R._status === 0 || R._status === -1) && (R._status = 2, R._result = ee);
        }
      ), R._status === -1 && (R._status = 0, R._result = V);
    }
    if (R._status === 1) return R._result.default;
    throw R._result;
  }
  var k = typeof reportError == "function" ? reportError : function(R) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var V = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof R == "object" && R !== null && typeof R.message == "string" ? String(R.message) : String(R),
        error: R
      });
      if (!window.dispatchEvent(V)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", R);
      return;
    }
    console.error(R);
  };
  function F() {
  }
  return be.Children = {
    map: D,
    forEach: function(R, V, ee) {
      D(
        R,
        function() {
          V.apply(this, arguments);
        },
        ee
      );
    },
    count: function(R) {
      var V = 0;
      return D(R, function() {
        V++;
      }), V;
    },
    toArray: function(R) {
      return D(R, function(V) {
        return V;
      }) || [];
    },
    only: function(R) {
      if (!I(R))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return R;
    }
  }, be.Component = O, be.Fragment = u, be.Profiler = s, be.PureComponent = j, be.StrictMode = o, be.Suspense = v, be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = U, be.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(R) {
      return U.H.useMemoCache(R);
    }
  }, be.cache = function(R) {
    return function() {
      return R.apply(null, arguments);
    };
  }, be.cloneElement = function(R, V, ee) {
    if (R == null)
      throw Error(
        "The argument must be a React element, but you passed " + R + "."
      );
    var W = C({}, R.props), te = R.key, ge = void 0;
    if (V != null)
      for (ce in V.ref !== void 0 && (ge = void 0), V.key !== void 0 && (te = "" + V.key), V)
        !J.call(V, ce) || ce === "key" || ce === "__self" || ce === "__source" || ce === "ref" && V.ref === void 0 || (W[ce] = V[ce]);
    var ce = arguments.length - 2;
    if (ce === 1) W.children = ee;
    else if (1 < ce) {
      for (var de = Array(ce), ve = 0; ve < ce; ve++)
        de[ve] = arguments[ve + 2];
      W.children = de;
    }
    return K(R.type, te, void 0, void 0, ge, W);
  }, be.createContext = function(R) {
    return R = {
      $$typeof: d,
      _currentValue: R,
      _currentValue2: R,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, R.Provider = R, R.Consumer = {
      $$typeof: f,
      _context: R
    }, R;
  }, be.createElement = function(R, V, ee) {
    var W, te = {}, ge = null;
    if (V != null)
      for (W in V.key !== void 0 && (ge = "" + V.key), V)
        J.call(V, W) && W !== "key" && W !== "__self" && W !== "__source" && (te[W] = V[W]);
    var ce = arguments.length - 2;
    if (ce === 1) te.children = ee;
    else if (1 < ce) {
      for (var de = Array(ce), ve = 0; ve < ce; ve++)
        de[ve] = arguments[ve + 2];
      te.children = de;
    }
    if (R && R.defaultProps)
      for (W in ce = R.defaultProps, ce)
        te[W] === void 0 && (te[W] = ce[W]);
    return K(R, ge, void 0, void 0, null, te);
  }, be.createRef = function() {
    return { current: null };
  }, be.forwardRef = function(R) {
    return { $$typeof: p, render: R };
  }, be.isValidElement = I, be.lazy = function(R) {
    return {
      $$typeof: y,
      _payload: { _status: -1, _result: R },
      _init: X
    };
  }, be.memo = function(R, V) {
    return {
      $$typeof: h,
      type: R,
      compare: V === void 0 ? null : V
    };
  }, be.startTransition = function(R) {
    var V = U.T, ee = {};
    U.T = ee;
    try {
      var W = R(), te = U.S;
      te !== null && te(ee, W), typeof W == "object" && W !== null && typeof W.then == "function" && W.then(F, k);
    } catch (ge) {
      k(ge);
    } finally {
      U.T = V;
    }
  }, be.unstable_useCacheRefresh = function() {
    return U.H.useCacheRefresh();
  }, be.use = function(R) {
    return U.H.use(R);
  }, be.useActionState = function(R, V, ee) {
    return U.H.useActionState(R, V, ee);
  }, be.useCallback = function(R, V) {
    return U.H.useCallback(R, V);
  }, be.useContext = function(R) {
    return U.H.useContext(R);
  }, be.useDebugValue = function() {
  }, be.useDeferredValue = function(R, V) {
    return U.H.useDeferredValue(R, V);
  }, be.useEffect = function(R, V, ee) {
    var W = U.H;
    if (typeof ee == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return W.useEffect(R, V);
  }, be.useId = function() {
    return U.H.useId();
  }, be.useImperativeHandle = function(R, V, ee) {
    return U.H.useImperativeHandle(R, V, ee);
  }, be.useInsertionEffect = function(R, V) {
    return U.H.useInsertionEffect(R, V);
  }, be.useLayoutEffect = function(R, V) {
    return U.H.useLayoutEffect(R, V);
  }, be.useMemo = function(R, V) {
    return U.H.useMemo(R, V);
  }, be.useOptimistic = function(R, V) {
    return U.H.useOptimistic(R, V);
  }, be.useReducer = function(R, V, ee) {
    return U.H.useReducer(R, V, ee);
  }, be.useRef = function(R) {
    return U.H.useRef(R);
  }, be.useState = function(R) {
    return U.H.useState(R);
  }, be.useSyncExternalStore = function(R, V, ee) {
    return U.H.useSyncExternalStore(
      R,
      V,
      ee
    );
  }, be.useTransition = function() {
    return U.H.useTransition();
  }, be.version = "19.1.0", be;
}
var cp;
function Ps() {
  return cp || (cp = 1, ds.exports = nb()), ds.exports;
}
var w = Ps();
const rl = /* @__PURE__ */ Fp(w), Wp = /* @__PURE__ */ I0({
  __proto__: null,
  default: rl
}, [w]);
var ms = { exports: {} }, Xi = {}, hs = { exports: {} }, ps = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sp;
function lb() {
  return sp || (sp = 1, function(a) {
    function r(D, X) {
      var k = D.length;
      D.push(X);
      e: for (; 0 < k; ) {
        var F = k - 1 >>> 1, R = D[F];
        if (0 < s(R, X))
          D[F] = X, D[k] = R, k = F;
        else break e;
      }
    }
    function u(D) {
      return D.length === 0 ? null : D[0];
    }
    function o(D) {
      if (D.length === 0) return null;
      var X = D[0], k = D.pop();
      if (k !== X) {
        D[0] = k;
        e: for (var F = 0, R = D.length, V = R >>> 1; F < V; ) {
          var ee = 2 * (F + 1) - 1, W = D[ee], te = ee + 1, ge = D[te];
          if (0 > s(W, k))
            te < R && 0 > s(ge, W) ? (D[F] = ge, D[te] = k, F = te) : (D[F] = W, D[ee] = k, F = ee);
          else if (te < R && 0 > s(ge, k))
            D[F] = ge, D[te] = k, F = te;
          else break e;
        }
      }
      return X;
    }
    function s(D, X) {
      var k = D.sortIndex - X.sortIndex;
      return k !== 0 ? k : D.id - X.id;
    }
    if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      a.unstable_now = function() {
        return f.now();
      };
    } else {
      var d = Date, p = d.now();
      a.unstable_now = function() {
        return d.now() - p;
      };
    }
    var v = [], h = [], y = 1, b = null, x = 3, A = !1, C = !1, E = !1, O = !1, T = typeof setTimeout == "function" ? setTimeout : null, j = typeof clearTimeout == "function" ? clearTimeout : null, z = typeof setImmediate < "u" ? setImmediate : null;
    function Y(D) {
      for (var X = u(h); X !== null; ) {
        if (X.callback === null) o(h);
        else if (X.startTime <= D)
          o(h), X.sortIndex = X.expirationTime, r(v, X);
        else break;
        X = u(h);
      }
    }
    function U(D) {
      if (E = !1, Y(D), !C)
        if (u(v) !== null)
          C = !0, J || (J = !0, ue());
        else {
          var X = u(h);
          X !== null && Q(U, X.startTime - D);
        }
    }
    var J = !1, K = -1, q = 5, I = -1;
    function ne() {
      return O ? !0 : !(a.unstable_now() - I < q);
    }
    function le() {
      if (O = !1, J) {
        var D = a.unstable_now();
        I = D;
        var X = !0;
        try {
          e: {
            C = !1, E && (E = !1, j(K), K = -1), A = !0;
            var k = x;
            try {
              t: {
                for (Y(D), b = u(v); b !== null && !(b.expirationTime > D && ne()); ) {
                  var F = b.callback;
                  if (typeof F == "function") {
                    b.callback = null, x = b.priorityLevel;
                    var R = F(
                      b.expirationTime <= D
                    );
                    if (D = a.unstable_now(), typeof R == "function") {
                      b.callback = R, Y(D), X = !0;
                      break t;
                    }
                    b === u(v) && o(v), Y(D);
                  } else o(v);
                  b = u(v);
                }
                if (b !== null) X = !0;
                else {
                  var V = u(h);
                  V !== null && Q(
                    U,
                    V.startTime - D
                  ), X = !1;
                }
              }
              break e;
            } finally {
              b = null, x = k, A = !1;
            }
            X = void 0;
          }
        } finally {
          X ? ue() : J = !1;
        }
      }
    }
    var ue;
    if (typeof z == "function")
      ue = function() {
        z(le);
      };
    else if (typeof MessageChannel < "u") {
      var me = new MessageChannel(), se = me.port2;
      me.port1.onmessage = le, ue = function() {
        se.postMessage(null);
      };
    } else
      ue = function() {
        T(le, 0);
      };
    function Q(D, X) {
      K = T(function() {
        D(a.unstable_now());
      }, X);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(D) {
      D.callback = null;
    }, a.unstable_forceFrameRate = function(D) {
      0 > D || 125 < D ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : q = 0 < D ? Math.floor(1e3 / D) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, a.unstable_next = function(D) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var X = 3;
          break;
        default:
          X = x;
      }
      var k = x;
      x = X;
      try {
        return D();
      } finally {
        x = k;
      }
    }, a.unstable_requestPaint = function() {
      O = !0;
    }, a.unstable_runWithPriority = function(D, X) {
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
      var k = x;
      x = D;
      try {
        return X();
      } finally {
        x = k;
      }
    }, a.unstable_scheduleCallback = function(D, X, k) {
      var F = a.unstable_now();
      switch (typeof k == "object" && k !== null ? (k = k.delay, k = typeof k == "number" && 0 < k ? F + k : F) : k = F, D) {
        case 1:
          var R = -1;
          break;
        case 2:
          R = 250;
          break;
        case 5:
          R = 1073741823;
          break;
        case 4:
          R = 1e4;
          break;
        default:
          R = 5e3;
      }
      return R = k + R, D = {
        id: y++,
        callback: X,
        priorityLevel: D,
        startTime: k,
        expirationTime: R,
        sortIndex: -1
      }, k > F ? (D.sortIndex = k, r(h, D), u(v) === null && D === u(h) && (E ? (j(K), K = -1) : E = !0, Q(U, k - F))) : (D.sortIndex = R, r(v, D), C || A || (C = !0, J || (J = !0, ue()))), D;
    }, a.unstable_shouldYield = ne, a.unstable_wrapCallback = function(D) {
      var X = x;
      return function() {
        var k = x;
        x = X;
        try {
          return D.apply(this, arguments);
        } finally {
          x = k;
        }
      };
    };
  }(ps)), ps;
}
var fp;
function ab() {
  return fp || (fp = 1, hs.exports = lb()), hs.exports;
}
var vs = { exports: {} }, mt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dp;
function ib() {
  if (dp) return mt;
  dp = 1;
  var a = Ps();
  function r(v) {
    var h = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        h += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return "Minified React error #" + v + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function f(v, h, y) {
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: b == null ? null : "" + b,
      children: v,
      containerInfo: h,
      implementation: y
    };
  }
  var d = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(v, h) {
    if (v === "font") return "";
    if (typeof h == "string")
      return h === "use-credentials" ? h : "";
  }
  return mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, mt.createPortal = function(v, h) {
    var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
      throw Error(r(299));
    return f(v, h, null, y);
  }, mt.flushSync = function(v) {
    var h = d.T, y = o.p;
    try {
      if (d.T = null, o.p = 2, v) return v();
    } finally {
      d.T = h, o.p = y, o.d.f();
    }
  }, mt.preconnect = function(v, h) {
    typeof v == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, o.d.C(v, h));
  }, mt.prefetchDNS = function(v) {
    typeof v == "string" && o.d.D(v);
  }, mt.preinit = function(v, h) {
    if (typeof v == "string" && h && typeof h.as == "string") {
      var y = h.as, b = p(y, h.crossOrigin), x = typeof h.integrity == "string" ? h.integrity : void 0, A = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
      y === "style" ? o.d.S(
        v,
        typeof h.precedence == "string" ? h.precedence : void 0,
        {
          crossOrigin: b,
          integrity: x,
          fetchPriority: A
        }
      ) : y === "script" && o.d.X(v, {
        crossOrigin: b,
        integrity: x,
        fetchPriority: A,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0
      });
    }
  }, mt.preinitModule = function(v, h) {
    if (typeof v == "string")
      if (typeof h == "object" && h !== null) {
        if (h.as == null || h.as === "script") {
          var y = p(
            h.as,
            h.crossOrigin
          );
          o.d.M(v, {
            crossOrigin: y,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
            nonce: typeof h.nonce == "string" ? h.nonce : void 0
          });
        }
      } else h == null && o.d.M(v);
  }, mt.preload = function(v, h) {
    if (typeof v == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
      var y = h.as, b = p(y, h.crossOrigin);
      o.d.L(v, y, {
        crossOrigin: b,
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
  }, mt.preloadModule = function(v, h) {
    if (typeof v == "string")
      if (h) {
        var y = p(h.as, h.crossOrigin);
        o.d.m(v, {
          as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
          crossOrigin: y,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0
        });
      } else o.d.m(v);
  }, mt.requestFormReset = function(v) {
    o.d.r(v);
  }, mt.unstable_batchedUpdates = function(v, h) {
    return v(h);
  }, mt.useFormState = function(v, h, y) {
    return d.H.useFormState(v, h, y);
  }, mt.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, mt.version = "19.1.0", mt;
}
var mp;
function Ip() {
  if (mp) return vs.exports;
  mp = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (r) {
        console.error(r);
      }
  }
  return a(), vs.exports = ib(), vs.exports;
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
var hp;
function rb() {
  if (hp) return Xi;
  hp = 1;
  var a = ab(), r = Ps(), u = Ip();
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
  function p(e) {
    if (f(e) !== e)
      throw Error(o(188));
  }
  function v(e) {
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
          if (c === n) return p(i), e;
          if (c === l) return p(i), t;
          c = c.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== l.return) n = i, l = c;
      else {
        for (var m = !1, g = i.child; g; ) {
          if (g === n) {
            m = !0, n = i, l = c;
            break;
          }
          if (g === l) {
            m = !0, l = i, n = c;
            break;
          }
          g = g.sibling;
        }
        if (!m) {
          for (g = c.child; g; ) {
            if (g === n) {
              m = !0, n = c, l = i;
              break;
            }
            if (g === l) {
              m = !0, l = c, n = i;
              break;
            }
            g = g.sibling;
          }
          if (!m) throw Error(o(189));
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
  var y = Object.assign, b = Symbol.for("react.element"), x = Symbol.for("react.transitional.element"), A = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), j = Symbol.for("react.consumer"), z = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), J = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), I = Symbol.for("react.activity"), ne = Symbol.for("react.memo_cache_sentinel"), le = Symbol.iterator;
  function ue(e) {
    return e === null || typeof e != "object" ? null : (e = le && e[le] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var me = Symbol.for("react.client.reference");
  function se(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === me ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case C:
        return "Fragment";
      case O:
        return "Profiler";
      case E:
        return "StrictMode";
      case U:
        return "Suspense";
      case J:
        return "SuspenseList";
      case I:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case A:
          return "Portal";
        case z:
          return (e.displayName || "Context") + ".Provider";
        case j:
          return (e._context.displayName || "Context") + ".Consumer";
        case Y:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case K:
          return t = e.displayName || null, t !== null ? t : se(e.type) || "Memo";
        case q:
          t = e._payload, e = e._init;
          try {
            return se(e(t));
          } catch {
          }
      }
    return null;
  }
  var Q = Array.isArray, D = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, F = [], R = -1;
  function V(e) {
    return { current: e };
  }
  function ee(e) {
    0 > R || (e.current = F[R], F[R] = null, R--);
  }
  function W(e, t) {
    R++, F[R] = e.current, e.current = t;
  }
  var te = V(null), ge = V(null), ce = V(null), de = V(null);
  function ve(e, t) {
    switch (W(ce, t), W(ge, e), W(te, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? jh(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = jh(t), e = Uh(t, e);
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
    ee(te), W(te, e);
  }
  function Re() {
    ee(te), ee(ge), ee(ce);
  }
  function Be(e) {
    e.memoizedState !== null && W(de, e);
    var t = te.current, n = Uh(t, e.type);
    t !== n && (W(ge, e), W(te, n));
  }
  function Me(e) {
    ge.current === e && (ee(te), ee(ge)), de.current === e && (ee(de), ki._currentValue = k);
  }
  var ae = Object.prototype.hasOwnProperty, Ce = a.unstable_scheduleCallback, ke = a.unstable_cancelCallback, Fe = a.unstable_shouldYield, gt = a.unstable_requestPaint, Xe = a.unstable_now, Vt = a.unstable_getCurrentPriorityLevel, ct = a.unstable_ImmediatePriority, Pt = a.unstable_UserBlockingPriority, Ft = a.unstable_NormalPriority, Va = a.unstable_LowPriority, Yl = a.unstable_IdlePriority, fr = a.log, dr = a.unstable_setDisableYieldValue, dl = null, st = null;
  function Wt(e) {
    if (typeof fr == "function" && dr(e), st && typeof st.setStrictMode == "function")
      try {
        st.setStrictMode(dl, e);
      } catch {
      }
  }
  var it = Math.clz32 ? Math.clz32 : Qa, zn = Math.log, Xa = Math.LN2;
  function Qa(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (zn(e) / Xa | 0) | 0;
  }
  var cn = 256, ql = 4194304;
  function sn(e) {
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
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var i = 0, c = e.suspendedLanes, m = e.pingedLanes;
    e = e.warmLanes;
    var g = l & 134217727;
    return g !== 0 ? (l = g & ~c, l !== 0 ? i = sn(l) : (m &= g, m !== 0 ? i = sn(m) : n || (n = g & ~e, n !== 0 && (i = sn(n))))) : (g = l & ~c, g !== 0 ? i = sn(g) : m !== 0 ? i = sn(m) : n || (n = l & ~e, n !== 0 && (i = sn(n)))), i === 0 ? 0 : t !== 0 && t !== i && (t & c) === 0 && (c = i & -i, n = t & -t, c >= n || c === 32 && (n & 4194048) !== 0) ? t : i;
  }
  function ml(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function nu(e, t) {
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
  function Za() {
    var e = cn;
    return cn <<= 1, (cn & 4194048) === 0 && (cn = 256), e;
  }
  function mr() {
    var e = ql;
    return ql <<= 1, (ql & 62914560) === 0 && (ql = 4194304), e;
  }
  function Xl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function jn(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function hr(e, t, n, l, i, c) {
    var m = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var g = e.entanglements, M = e.expirationTimes, B = e.hiddenUpdates;
    for (n = m & ~n; 0 < n; ) {
      var Z = 31 - it(n), P = 1 << Z;
      g[Z] = 0, M[Z] = -1;
      var H = B[Z];
      if (H !== null)
        for (B[Z] = null, Z = 0; Z < H.length; Z++) {
          var G = H[Z];
          G !== null && (G.lane &= -536870913);
        }
      n &= ~P;
    }
    l !== 0 && pr(e, l, 0), c !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(m & ~t));
  }
  function pr(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - it(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | n & 4194090;
  }
  function Ka(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var l = 31 - it(n), i = 1 << l;
      i & t | e[l] & t && (e[l] |= t), n &= ~i;
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
  function Ja(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Sf() {
    var e = X.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : ep(e.type));
  }
  function qg(e, t) {
    var n = X.p;
    try {
      return X.p = e, t();
    } finally {
      X.p = n;
    }
  }
  var Un = Math.random().toString(36).slice(2), ft = "__reactFiber$" + Un, yt = "__reactProps$" + Un, Zl = "__reactContainer$" + Un, lu = "__reactEvents$" + Un, Vg = "__reactListeners$" + Un, Xg = "__reactHandles$" + Un, Ef = "__reactResources$" + Un, $a = "__reactMarker$" + Un;
  function au(e) {
    delete e[ft], delete e[yt], delete e[lu], delete e[Vg], delete e[Xg];
  }
  function Kl(e) {
    var t = e[ft];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Zl] || n[ft]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Hh(e); e !== null; ) {
            if (n = e[ft]) return n;
            e = Hh(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Jl(e) {
    if (e = e[ft] || e[Zl]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Pa(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function $l(e) {
    var t = e[Ef];
    return t || (t = e[Ef] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function tt(e) {
    e[$a] = !0;
  }
  var wf = /* @__PURE__ */ new Set(), Af = {};
  function hl(e, t) {
    Pl(e, t), Pl(e + "Capture", t);
  }
  function Pl(e, t) {
    for (Af[e] = t, e = 0; e < t.length; e++)
      wf.add(t[e]);
  }
  var Qg = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Rf = {}, Cf = {};
  function Zg(e) {
    return ae.call(Cf, e) ? !0 : ae.call(Rf, e) ? !1 : Qg.test(e) ? Cf[e] = !0 : (Rf[e] = !0, !1);
  }
  function vr(e, t, n) {
    if (Zg(t))
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
  function gr(e, t, n) {
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
  function fn(e, t, n, l) {
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
  var iu, Mf;
  function Fl(e) {
    if (iu === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        iu = t && t[1] || "", Mf = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + iu + e + Mf;
  }
  var ru = !1;
  function ou(e, t) {
    if (!e || ru) return "";
    ru = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var P = function() {
                throw Error();
              };
              if (Object.defineProperty(P.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(P, []);
                } catch (G) {
                  var H = G;
                }
                Reflect.construct(e, [], P);
              } else {
                try {
                  P.call();
                } catch (G) {
                  H = G;
                }
                e.call(P.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (G) {
                H = G;
              }
              (P = e()) && typeof P.catch == "function" && P.catch(function() {
              });
            }
          } catch (G) {
            if (G && H && typeof G.stack == "string")
              return [G.stack, H.stack];
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
      var c = l.DetermineComponentFrameRoot(), m = c[0], g = c[1];
      if (m && g) {
        var M = m.split(`
`), B = g.split(`
`);
        for (i = l = 0; l < M.length && !M[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; i < B.length && !B[i].includes(
          "DetermineComponentFrameRoot"
        ); )
          i++;
        if (l === M.length || i === B.length)
          for (l = M.length - 1, i = B.length - 1; 1 <= l && 0 <= i && M[l] !== B[i]; )
            i--;
        for (; 1 <= l && 0 <= i; l--, i--)
          if (M[l] !== B[i]) {
            if (l !== 1 || i !== 1)
              do
                if (l--, i--, 0 > i || M[l] !== B[i]) {
                  var Z = `
` + M[l].replace(" at new ", " at ");
                  return e.displayName && Z.includes("<anonymous>") && (Z = Z.replace("<anonymous>", e.displayName)), Z;
                }
              while (1 <= l && 0 <= i);
            break;
          }
      }
    } finally {
      ru = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? Fl(n) : "";
  }
  function Kg(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Fl(e.type);
      case 16:
        return Fl("Lazy");
      case 13:
        return Fl("Suspense");
      case 19:
        return Fl("SuspenseList");
      case 0:
      case 15:
        return ou(e.type, !1);
      case 11:
        return ou(e.type.render, !1);
      case 1:
        return ou(e.type, !0);
      case 31:
        return Fl("Activity");
      default:
        return "";
    }
  }
  function Of(e) {
    try {
      var t = "";
      do
        t += Kg(e), e = e.return;
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
  function Tf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Jg(e) {
    var t = Tf(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(
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
        set: function(m) {
          l = "" + m, c.call(this, m);
        }
      }), Object.defineProperty(e, t, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(m) {
          l = "" + m;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function yr(e) {
    e._valueTracker || (e._valueTracker = Jg(e));
  }
  function _f(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), l = "";
    return e && (l = Tf(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== n ? (t.setValue(e), !0) : !1;
  }
  function br(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var $g = /[\n"\\]/g;
  function jt(e) {
    return e.replace(
      $g,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function uu(e, t, n, l, i, c, m, g) {
    e.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.type = m : e.removeAttribute("type"), t != null ? m === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + zt(t)) : e.value !== "" + zt(t) && (e.value = "" + zt(t)) : m !== "submit" && m !== "reset" || e.removeAttribute("value"), t != null ? cu(e, m, zt(t)) : n != null ? cu(e, m, zt(n)) : l != null && e.removeAttribute("value"), i == null && c != null && (e.defaultChecked = !!c), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? e.name = "" + zt(g) : e.removeAttribute("name");
  }
  function Nf(e, t, n, l, i, c, m, g) {
    if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.type = c), t != null || n != null) {
      if (!(c !== "submit" && c !== "reset" || t != null))
        return;
      n = n != null ? "" + zt(n) : "", t = t != null ? "" + zt(t) : n, g || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? i, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = g ? e.checked : !!l, e.defaultChecked = !!l, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (e.name = m);
  }
  function cu(e, t, n) {
    t === "number" && br(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function Wl(e, t, n, l) {
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
  function Df(e, t, n) {
    if (t != null && (t = "" + zt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + zt(n) : "";
  }
  function zf(e, t, n, l) {
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
  var Pg = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function jf(e, t, n) {
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Pg.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function Uf(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (e = e.style, n != null) {
      for (var l in n)
        !n.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var i in t)
        l = t[i], t.hasOwnProperty(i) && n[i] !== l && jf(e, i, l);
    } else
      for (var c in t)
        t.hasOwnProperty(c) && jf(e, c, t[c]);
  }
  function su(e) {
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
  var Fg = /* @__PURE__ */ new Map([
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
  ]), Wg = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function xr(e) {
    return Wg.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var fu = null;
  function du(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var ea = null, ta = null;
  function Lf(e) {
    var t = Jl(e);
    if (t && (e = t.stateNode)) {
      var n = e[yt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (uu(
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
              'input[name="' + jt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var i = l[yt] || null;
                if (!i) throw Error(o(90));
                uu(
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
              l = n[t], l.form === e.form && _f(l);
          }
          break e;
        case "textarea":
          Df(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && Wl(e, !!n.multiple, t, !1);
      }
    }
  }
  var mu = !1;
  function Bf(e, t, n) {
    if (mu) return e(t, n);
    mu = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (mu = !1, (ea !== null || ta !== null) && (io(), ea && (t = ea, e = ta, ta = ea = null, Lf(t), e)))
        for (t = 0; t < e.length; t++) Lf(e[t]);
    }
  }
  function Fa(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[yt] || null;
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
  var dn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), hu = !1;
  if (dn)
    try {
      var Wa = {};
      Object.defineProperty(Wa, "passive", {
        get: function() {
          hu = !0;
        }
      }), window.addEventListener("test", Wa, Wa), window.removeEventListener("test", Wa, Wa);
    } catch {
      hu = !1;
    }
  var Ln = null, pu = null, Sr = null;
  function kf() {
    if (Sr) return Sr;
    var e, t = pu, n = t.length, l, i = "value" in Ln ? Ln.value : Ln.textContent, c = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++) ;
    var m = n - e;
    for (l = 1; l <= m && t[n - l] === i[c - l]; l++) ;
    return Sr = i.slice(e, 1 < l ? 1 - l : void 0);
  }
  function Er(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function wr() {
    return !0;
  }
  function Hf() {
    return !1;
  }
  function bt(e) {
    function t(n, l, i, c, m) {
      this._reactName = n, this._targetInst = i, this.type = l, this.nativeEvent = c, this.target = m, this.currentTarget = null;
      for (var g in e)
        e.hasOwnProperty(g) && (n = e[g], this[g] = n ? n(c) : c[g]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? wr : Hf, this.isPropagationStopped = Hf, this;
    }
    return y(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = wr);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = wr);
      },
      persist: function() {
      },
      isPersistent: wr
    }), t;
  }
  var pl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ar = bt(pl), Ia = y({}, pl, { view: 0, detail: 0 }), Ig = bt(Ia), vu, gu, ei, Rr = y({}, Ia, {
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
    getModifierState: bu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== ei && (ei && e.type === "mousemove" ? (vu = e.screenX - ei.screenX, gu = e.screenY - ei.screenY) : gu = vu = 0, ei = e), vu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : gu;
    }
  }), Gf = bt(Rr), ey = y({}, Rr, { dataTransfer: 0 }), ty = bt(ey), ny = y({}, Ia, { relatedTarget: 0 }), yu = bt(ny), ly = y({}, pl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ay = bt(ly), iy = y({}, pl, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), ry = bt(iy), oy = y({}, pl, { data: 0 }), Yf = bt(oy), uy = {
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
  }, cy = {
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
  }, sy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function fy(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = sy[e]) ? !!t[e] : !1;
  }
  function bu() {
    return fy;
  }
  var dy = y({}, Ia, {
    key: function(e) {
      if (e.key) {
        var t = uy[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Er(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? cy[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: bu,
    charCode: function(e) {
      return e.type === "keypress" ? Er(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Er(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), my = bt(dy), hy = y({}, Rr, {
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
  }), qf = bt(hy), py = y({}, Ia, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: bu
  }), vy = bt(py), gy = y({}, pl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), yy = bt(gy), by = y({}, Rr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), xy = bt(by), Sy = y({}, pl, {
    newState: 0,
    oldState: 0
  }), Ey = bt(Sy), wy = [9, 13, 27, 32], xu = dn && "CompositionEvent" in window, ti = null;
  dn && "documentMode" in document && (ti = document.documentMode);
  var Ay = dn && "TextEvent" in window && !ti, Vf = dn && (!xu || ti && 8 < ti && 11 >= ti), Xf = " ", Qf = !1;
  function Zf(e, t) {
    switch (e) {
      case "keyup":
        return wy.indexOf(t.keyCode) !== -1;
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
  function Kf(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var na = !1;
  function Ry(e, t) {
    switch (e) {
      case "compositionend":
        return Kf(t);
      case "keypress":
        return t.which !== 32 ? null : (Qf = !0, Xf);
      case "textInput":
        return e = t.data, e === Xf && Qf ? null : e;
      default:
        return null;
    }
  }
  function Cy(e, t) {
    if (na)
      return e === "compositionend" || !xu && Zf(e, t) ? (e = kf(), Sr = pu = Ln = null, na = !1, e) : null;
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
        return Vf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var My = {
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
  function Jf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!My[e.type] : t === "textarea";
  }
  function $f(e, t, n, l) {
    ea ? ta ? ta.push(l) : ta = [l] : ea = l, t = fo(t, "onChange"), 0 < t.length && (n = new Ar(
      "onChange",
      "change",
      null,
      n,
      l
    ), e.push({ event: n, listeners: t }));
  }
  var ni = null, li = null;
  function Oy(e) {
    Th(e, 0);
  }
  function Cr(e) {
    var t = Pa(e);
    if (_f(t)) return e;
  }
  function Pf(e, t) {
    if (e === "change") return t;
  }
  var Ff = !1;
  if (dn) {
    var Su;
    if (dn) {
      var Eu = "oninput" in document;
      if (!Eu) {
        var Wf = document.createElement("div");
        Wf.setAttribute("oninput", "return;"), Eu = typeof Wf.oninput == "function";
      }
      Su = Eu;
    } else Su = !1;
    Ff = Su && (!document.documentMode || 9 < document.documentMode);
  }
  function If() {
    ni && (ni.detachEvent("onpropertychange", ed), li = ni = null);
  }
  function ed(e) {
    if (e.propertyName === "value" && Cr(li)) {
      var t = [];
      $f(
        t,
        li,
        e,
        du(e)
      ), Bf(Oy, t);
    }
  }
  function Ty(e, t, n) {
    e === "focusin" ? (If(), ni = t, li = n, ni.attachEvent("onpropertychange", ed)) : e === "focusout" && If();
  }
  function _y(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Cr(li);
  }
  function Ny(e, t) {
    if (e === "click") return Cr(t);
  }
  function Dy(e, t) {
    if (e === "input" || e === "change")
      return Cr(t);
  }
  function zy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var At = typeof Object.is == "function" ? Object.is : zy;
  function ai(e, t) {
    if (At(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var i = n[l];
      if (!ae.call(t, i) || !At(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  function td(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function nd(e, t) {
    var n = td(e);
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
      n = td(n);
    }
  }
  function ld(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ld(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function ad(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = br(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = br(e.document);
    }
    return t;
  }
  function wu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var jy = dn && "documentMode" in document && 11 >= document.documentMode, la = null, Au = null, ii = null, Ru = !1;
  function id(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ru || la == null || la !== br(l) || (l = la, "selectionStart" in l && wu(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), ii && ai(ii, l) || (ii = l, l = fo(Au, "onSelect"), 0 < l.length && (t = new Ar(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: l }), t.target = la)));
  }
  function vl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var aa = {
    animationend: vl("Animation", "AnimationEnd"),
    animationiteration: vl("Animation", "AnimationIteration"),
    animationstart: vl("Animation", "AnimationStart"),
    transitionrun: vl("Transition", "TransitionRun"),
    transitionstart: vl("Transition", "TransitionStart"),
    transitioncancel: vl("Transition", "TransitionCancel"),
    transitionend: vl("Transition", "TransitionEnd")
  }, Cu = {}, rd = {};
  dn && (rd = document.createElement("div").style, "AnimationEvent" in window || (delete aa.animationend.animation, delete aa.animationiteration.animation, delete aa.animationstart.animation), "TransitionEvent" in window || delete aa.transitionend.transition);
  function gl(e) {
    if (Cu[e]) return Cu[e];
    if (!aa[e]) return e;
    var t = aa[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in rd)
        return Cu[e] = t[n];
    return e;
  }
  var od = gl("animationend"), ud = gl("animationiteration"), cd = gl("animationstart"), Uy = gl("transitionrun"), Ly = gl("transitionstart"), By = gl("transitioncancel"), sd = gl("transitionend"), fd = /* @__PURE__ */ new Map(), Mu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Mu.push("scrollEnd");
  function Xt(e, t) {
    fd.set(e, t), hl(t, [e]);
  }
  var dd = /* @__PURE__ */ new WeakMap();
  function Ut(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = dd.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: Of(t)
      }, dd.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Of(t)
    };
  }
  var Lt = [], ia = 0, Ou = 0;
  function Mr() {
    for (var e = ia, t = Ou = ia = 0; t < e; ) {
      var n = Lt[t];
      Lt[t++] = null;
      var l = Lt[t];
      Lt[t++] = null;
      var i = Lt[t];
      Lt[t++] = null;
      var c = Lt[t];
      if (Lt[t++] = null, l !== null && i !== null) {
        var m = l.pending;
        m === null ? i.next = i : (i.next = m.next, m.next = i), l.pending = i;
      }
      c !== 0 && md(n, i, c);
    }
  }
  function Or(e, t, n, l) {
    Lt[ia++] = e, Lt[ia++] = t, Lt[ia++] = n, Lt[ia++] = l, Ou |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function Tu(e, t, n, l) {
    return Or(e, t, n, l), Tr(e);
  }
  function ra(e, t) {
    return Or(e, null, null, t), Tr(e);
  }
  function md(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var i = !1, c = e.return; c !== null; )
      c.childLanes |= n, l = c.alternate, l !== null && (l.childLanes |= n), c.tag === 22 && (e = c.stateNode, e === null || e._visibility & 1 || (i = !0)), e = c, c = c.return;
    return e.tag === 3 ? (c = e.stateNode, i && t !== null && (i = 31 - it(n), e = c.hiddenUpdates, l = e[i], l === null ? e[i] = [t] : l.push(t), t.lane = n | 536870912), c) : null;
  }
  function Tr(e) {
    if (50 < _i)
      throw _i = 0, Uc = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var oa = {};
  function ky(e, t, n, l) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Rt(e, t, n, l) {
    return new ky(e, t, n, l);
  }
  function _u(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function mn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Rt(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function hd(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function _r(e, t, n, l, i, c) {
    var m = 0;
    if (l = e, typeof e == "function") _u(e) && (m = 1);
    else if (typeof e == "string")
      m = G0(
        e,
        n,
        te.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case I:
          return e = Rt(31, n, t, i), e.elementType = I, e.lanes = c, e;
        case C:
          return yl(n.children, i, c, t);
        case E:
          m = 8, i |= 24;
          break;
        case O:
          return e = Rt(12, n, t, i | 2), e.elementType = O, e.lanes = c, e;
        case U:
          return e = Rt(13, n, t, i), e.elementType = U, e.lanes = c, e;
        case J:
          return e = Rt(19, n, t, i), e.elementType = J, e.lanes = c, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case T:
              case z:
                m = 10;
                break e;
              case j:
                m = 9;
                break e;
              case Y:
                m = 11;
                break e;
              case K:
                m = 14;
                break e;
              case q:
                m = 16, l = null;
                break e;
            }
          m = 29, n = Error(
            o(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = Rt(m, n, t, i), t.elementType = e, t.type = l, t.lanes = c, t;
  }
  function yl(e, t, n, l) {
    return e = Rt(7, e, l, t), e.lanes = n, e;
  }
  function Nu(e, t, n) {
    return e = Rt(6, e, null, t), e.lanes = n, e;
  }
  function Du(e, t, n) {
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
  var ua = [], ca = 0, Nr = null, Dr = 0, Bt = [], kt = 0, bl = null, hn = 1, pn = "";
  function xl(e, t) {
    ua[ca++] = Dr, ua[ca++] = Nr, Nr = e, Dr = t;
  }
  function pd(e, t, n) {
    Bt[kt++] = hn, Bt[kt++] = pn, Bt[kt++] = bl, bl = e;
    var l = hn;
    e = pn;
    var i = 32 - it(l) - 1;
    l &= ~(1 << i), n += 1;
    var c = 32 - it(t) + i;
    if (30 < c) {
      var m = i - i % 5;
      c = (l & (1 << m) - 1).toString(32), l >>= m, i -= m, hn = 1 << 32 - it(t) + i | n << i | l, pn = c + e;
    } else
      hn = 1 << c | n << i | l, pn = e;
  }
  function zu(e) {
    e.return !== null && (xl(e, 1), pd(e, 1, 0));
  }
  function ju(e) {
    for (; e === Nr; )
      Nr = ua[--ca], ua[ca] = null, Dr = ua[--ca], ua[ca] = null;
    for (; e === bl; )
      bl = Bt[--kt], Bt[kt] = null, pn = Bt[--kt], Bt[kt] = null, hn = Bt[--kt], Bt[kt] = null;
  }
  var ht = null, Qe = null, Ne = !1, Sl = null, It = !1, Uu = Error(o(519));
  function El(e) {
    var t = Error(o(418, ""));
    throw ui(Ut(t, e)), Uu;
  }
  function vd(e) {
    var t = e.stateNode, n = e.type, l = e.memoizedProps;
    switch (t[ft] = e, t[yt] = l, n) {
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
        for (n = 0; n < Di.length; n++)
          Ae(Di[n], t);
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
        Ae("invalid", t), Nf(
          t,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        ), yr(t);
        break;
      case "select":
        Ae("invalid", t);
        break;
      case "textarea":
        Ae("invalid", t), zf(t, l.value, l.defaultValue, l.children), yr(t);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || l.suppressHydrationWarning === !0 || zh(t.textContent, n) ? (l.popover != null && (Ae("beforetoggle", t), Ae("toggle", t)), l.onScroll != null && Ae("scroll", t), l.onScrollEnd != null && Ae("scrollend", t), l.onClick != null && (t.onclick = mo), t = !0) : t = !1, t || El(e);
  }
  function gd(e) {
    for (ht = e.return; ht; )
      switch (ht.tag) {
        case 5:
        case 13:
          It = !1;
          return;
        case 27:
        case 3:
          It = !0;
          return;
        default:
          ht = ht.return;
      }
  }
  function ri(e) {
    if (e !== ht) return !1;
    if (!Ne) return gd(e), Ne = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Fc(e.type, e.memoizedProps)), n = !n), n && Qe && El(e), gd(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (n = e.data, n === "/$") {
              if (t === 0) {
                Qe = Zt(e.nextSibling);
                break e;
              }
              t--;
            } else
              n !== "$" && n !== "$!" && n !== "$?" || t++;
          e = e.nextSibling;
        }
        Qe = null;
      }
    } else
      t === 27 ? (t = Qe, Wn(e.type) ? (e = ts, ts = null, Qe = e) : Qe = t) : Qe = ht ? Zt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function oi() {
    Qe = ht = null, Ne = !1;
  }
  function yd() {
    var e = Sl;
    return e !== null && (Et === null ? Et = e : Et.push.apply(
      Et,
      e
    ), Sl = null), e;
  }
  function ui(e) {
    Sl === null ? Sl = [e] : Sl.push(e);
  }
  var Lu = V(null), wl = null, vn = null;
  function Bn(e, t, n) {
    W(Lu, t._currentValue), t._currentValue = n;
  }
  function gn(e) {
    e._currentValue = Lu.current, ee(Lu);
  }
  function Bu(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function ku(e, t, n, l) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null; ) {
      var c = i.dependencies;
      if (c !== null) {
        var m = i.child;
        c = c.firstContext;
        e: for (; c !== null; ) {
          var g = c;
          c = i;
          for (var M = 0; M < t.length; M++)
            if (g.context === t[M]) {
              c.lanes |= n, g = c.alternate, g !== null && (g.lanes |= n), Bu(
                c.return,
                n,
                e
              ), l || (m = null);
              break e;
            }
          c = g.next;
        }
      } else if (i.tag === 18) {
        if (m = i.return, m === null) throw Error(o(341));
        m.lanes |= n, c = m.alternate, c !== null && (c.lanes |= n), Bu(m, n, e), m = null;
      } else m = i.child;
      if (m !== null) m.return = i;
      else
        for (m = i; m !== null; ) {
          if (m === e) {
            m = null;
            break;
          }
          if (i = m.sibling, i !== null) {
            i.return = m.return, m = i;
            break;
          }
          m = m.return;
        }
      i = m;
    }
  }
  function ci(e, t, n, l) {
    e = null;
    for (var i = t, c = !1; i !== null; ) {
      if (!c) {
        if ((i.flags & 524288) !== 0) c = !0;
        else if ((i.flags & 262144) !== 0) break;
      }
      if (i.tag === 10) {
        var m = i.alternate;
        if (m === null) throw Error(o(387));
        if (m = m.memoizedProps, m !== null) {
          var g = i.type;
          At(i.pendingProps.value, m.value) || (e !== null ? e.push(g) : e = [g]);
        }
      } else if (i === de.current) {
        if (m = i.alternate, m === null) throw Error(o(387));
        m.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e !== null ? e.push(ki) : e = [ki]);
      }
      i = i.return;
    }
    e !== null && ku(
      t,
      e,
      n,
      l
    ), t.flags |= 262144;
  }
  function zr(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!At(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Al(e) {
    wl = e, vn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function dt(e) {
    return bd(wl, e);
  }
  function jr(e, t) {
    return wl === null && Al(e), bd(e, t);
  }
  function bd(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, vn === null) {
      if (e === null) throw Error(o(308));
      vn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else vn = vn.next = t;
    return n;
  }
  var Hy = typeof AbortController < "u" ? AbortController : function() {
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
  }, Gy = a.unstable_scheduleCallback, Yy = a.unstable_NormalPriority, We = {
    $$typeof: z,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Hu() {
    return {
      controller: new Hy(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function si(e) {
    e.refCount--, e.refCount === 0 && Gy(Yy, function() {
      e.controller.abort();
    });
  }
  var fi = null, Gu = 0, sa = 0, fa = null;
  function qy(e, t) {
    if (fi === null) {
      var n = fi = [];
      Gu = 0, sa = qc(), fa = {
        status: "pending",
        value: void 0,
        then: function(l) {
          n.push(l);
        }
      };
    }
    return Gu++, t.then(xd, xd), t;
  }
  function xd() {
    if (--Gu === 0 && fi !== null) {
      fa !== null && (fa.status = "fulfilled");
      var e = fi;
      fi = null, sa = 0, fa = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Vy(e, t) {
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
  var Sd = D.S;
  D.S = function(e, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && qy(e, t), Sd !== null && Sd(e, t);
  };
  var Rl = V(null);
  function Yu() {
    var e = Rl.current;
    return e !== null ? e : Ge.pooledCache;
  }
  function Ur(e, t) {
    t === null ? W(Rl, Rl.current) : W(Rl, t.pool);
  }
  function Ed() {
    var e = Yu();
    return e === null ? null : { parent: We._currentValue, pool: e };
  }
  var di = Error(o(460)), wd = Error(o(474)), Lr = Error(o(542)), qu = { then: function() {
  } };
  function Ad(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Br() {
  }
  function Rd(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Br, Br), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Md(e), e;
      default:
        if (typeof t.status == "string") t.then(Br, Br);
        else {
          if (e = Ge, e !== null && 100 < e.shellSuspendCounter)
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
            throw e = t.reason, Md(e), e;
        }
        throw mi = t, di;
    }
  }
  var mi = null;
  function Cd() {
    if (mi === null) throw Error(o(459));
    var e = mi;
    return mi = null, e;
  }
  function Md(e) {
    if (e === di || e === Lr)
      throw Error(o(483));
  }
  var kn = !1;
  function Vu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Xu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Hn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Gn(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (De & 2) !== 0) {
      var i = l.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), l.pending = t, t = Tr(e), md(e, null, n), t;
    }
    return Or(e, l, t, n), Tr(e);
  }
  function hi(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, Ka(e, n);
    }
  }
  function Qu(e, t) {
    var n = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, n === l)) {
      var i = null, c = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var m = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          c === null ? i = c = m : c = c.next = m, n = n.next;
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
  var Zu = !1;
  function pi() {
    if (Zu) {
      var e = fa;
      if (e !== null) throw e;
    }
  }
  function vi(e, t, n, l) {
    Zu = !1;
    var i = e.updateQueue;
    kn = !1;
    var c = i.firstBaseUpdate, m = i.lastBaseUpdate, g = i.shared.pending;
    if (g !== null) {
      i.shared.pending = null;
      var M = g, B = M.next;
      M.next = null, m === null ? c = B : m.next = B, m = M;
      var Z = e.alternate;
      Z !== null && (Z = Z.updateQueue, g = Z.lastBaseUpdate, g !== m && (g === null ? Z.firstBaseUpdate = B : g.next = B, Z.lastBaseUpdate = M));
    }
    if (c !== null) {
      var P = i.baseState;
      m = 0, Z = B = M = null, g = c;
      do {
        var H = g.lane & -536870913, G = H !== g.lane;
        if (G ? (Oe & H) === H : (l & H) === H) {
          H !== 0 && H === sa && (Zu = !0), Z !== null && (Z = Z.next = {
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: null,
            next: null
          });
          e: {
            var ye = e, he = g;
            H = t;
            var Le = n;
            switch (he.tag) {
              case 1:
                if (ye = he.payload, typeof ye == "function") {
                  P = ye.call(Le, P, H);
                  break e;
                }
                P = ye;
                break e;
              case 3:
                ye.flags = ye.flags & -65537 | 128;
              case 0:
                if (ye = he.payload, H = typeof ye == "function" ? ye.call(Le, P, H) : ye, H == null) break e;
                P = y({}, P, H);
                break e;
              case 2:
                kn = !0;
            }
          }
          H = g.callback, H !== null && (e.flags |= 64, G && (e.flags |= 8192), G = i.callbacks, G === null ? i.callbacks = [H] : G.push(H));
        } else
          G = {
            lane: H,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          }, Z === null ? (B = Z = G, M = P) : Z = Z.next = G, m |= H;
        if (g = g.next, g === null) {
          if (g = i.shared.pending, g === null)
            break;
          G = g, g = G.next, G.next = null, i.lastBaseUpdate = G, i.shared.pending = null;
        }
      } while (!0);
      Z === null && (M = P), i.baseState = M, i.firstBaseUpdate = B, i.lastBaseUpdate = Z, c === null && (i.shared.lanes = 0), Jn |= m, e.lanes = m, e.memoizedState = P;
    }
  }
  function Od(e, t) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(t);
  }
  function Td(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        Od(n[e], t);
  }
  var da = V(null), kr = V(0);
  function _d(e, t) {
    e = An, W(kr, e), W(da, t), An = e | t.baseLanes;
  }
  function Ku() {
    W(kr, An), W(da, da.current);
  }
  function Ju() {
    An = kr.current, ee(da), ee(kr);
  }
  var Yn = 0, xe = null, je = null, $e = null, Hr = !1, ma = !1, Cl = !1, Gr = 0, gi = 0, ha = null, Xy = 0;
  function Ke() {
    throw Error(o(321));
  }
  function $u(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!At(e[n], t[n])) return !1;
    return !0;
  }
  function Pu(e, t, n, l, i, c) {
    return Yn = c, xe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, D.H = e === null || e.memoizedState === null ? mm : hm, Cl = !1, c = n(l, i), Cl = !1, ma && (c = Dd(
      t,
      n,
      l,
      i
    )), Nd(e), c;
  }
  function Nd(e) {
    D.H = Zr;
    var t = je !== null && je.next !== null;
    if (Yn = 0, $e = je = xe = null, Hr = !1, gi = 0, ha = null, t) throw Error(o(300));
    e === null || nt || (e = e.dependencies, e !== null && zr(e) && (nt = !0));
  }
  function Dd(e, t, n, l) {
    xe = e;
    var i = 0;
    do {
      if (ma && (ha = null), gi = 0, ma = !1, 25 <= i) throw Error(o(301));
      if (i += 1, $e = je = null, e.updateQueue != null) {
        var c = e.updateQueue;
        c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
      }
      D.H = Fy, c = t(n, l);
    } while (ma);
    return c;
  }
  function Qy() {
    var e = D.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? yi(t) : t, e = e.useState()[0], (je !== null ? je.memoizedState : null) !== e && (xe.flags |= 1024), t;
  }
  function Fu() {
    var e = Gr !== 0;
    return Gr = 0, e;
  }
  function Wu(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Iu(e) {
    if (Hr) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Hr = !1;
    }
    Yn = 0, $e = je = xe = null, ma = !1, gi = Gr = 0, ha = null;
  }
  function xt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return $e === null ? xe.memoizedState = $e = e : $e = $e.next = e, $e;
  }
  function Pe() {
    if (je === null) {
      var e = xe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = je.next;
    var t = $e === null ? xe.memoizedState : $e.next;
    if (t !== null)
      $e = t, je = e;
    else {
      if (e === null)
        throw xe.alternate === null ? Error(o(467)) : Error(o(310));
      je = e, e = {
        memoizedState: je.memoizedState,
        baseState: je.baseState,
        baseQueue: je.baseQueue,
        queue: je.queue,
        next: null
      }, $e === null ? xe.memoizedState = $e = e : $e = $e.next = e;
    }
    return $e;
  }
  function ec() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function yi(e) {
    var t = gi;
    return gi += 1, ha === null && (ha = []), e = Rd(ha, e, t), t = xe, ($e === null ? t.memoizedState : $e.next) === null && (t = t.alternate, D.H = t === null || t.memoizedState === null ? mm : hm), e;
  }
  function Yr(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return yi(e);
      if (e.$$typeof === z) return dt(e);
    }
    throw Error(o(438, String(e)));
  }
  function tc(e) {
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
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = ec(), xe.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++)
        n[l] = ne;
    return t.index++, n;
  }
  function yn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function qr(e) {
    var t = Pe();
    return nc(t, je, e);
  }
  function nc(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = n;
    var i = e.baseQueue, c = l.pending;
    if (c !== null) {
      if (i !== null) {
        var m = i.next;
        i.next = c.next, c.next = m;
      }
      t.baseQueue = i = c, l.pending = null;
    }
    if (c = e.baseState, i === null) e.memoizedState = c;
    else {
      t = i.next;
      var g = m = null, M = null, B = t, Z = !1;
      do {
        var P = B.lane & -536870913;
        if (P !== B.lane ? (Oe & P) === P : (Yn & P) === P) {
          var H = B.revertLane;
          if (H === 0)
            M !== null && (M = M.next = {
              lane: 0,
              revertLane: 0,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null
            }), P === sa && (Z = !0);
          else if ((Yn & H) === H) {
            B = B.next, H === sa && (Z = !0);
            continue;
          } else
            P = {
              lane: 0,
              revertLane: B.revertLane,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null
            }, M === null ? (g = M = P, m = c) : M = M.next = P, xe.lanes |= H, Jn |= H;
          P = B.action, Cl && n(c, P), c = B.hasEagerState ? B.eagerState : n(c, P);
        } else
          H = {
            lane: P,
            revertLane: B.revertLane,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null
          }, M === null ? (g = M = H, m = c) : M = M.next = H, xe.lanes |= P, Jn |= P;
        B = B.next;
      } while (B !== null && B !== t);
      if (M === null ? m = c : M.next = g, !At(c, e.memoizedState) && (nt = !0, Z && (n = fa, n !== null)))
        throw n;
      e.memoizedState = c, e.baseState = m, e.baseQueue = M, l.lastRenderedState = c;
    }
    return i === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function lc(e) {
    var t = Pe(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch, i = n.pending, c = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var m = i = i.next;
      do
        c = e(c, m.action), m = m.next;
      while (m !== i);
      At(c, t.memoizedState) || (nt = !0), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), n.lastRenderedState = c;
    }
    return [c, l];
  }
  function zd(e, t, n) {
    var l = xe, i = Pe(), c = Ne;
    if (c) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = t();
    var m = !At(
      (je || i).memoizedState,
      n
    );
    m && (i.memoizedState = n, nt = !0), i = i.queue;
    var g = Ld.bind(null, l, i, e);
    if (bi(2048, 8, g, [e]), i.getSnapshot !== t || m || $e !== null && $e.memoizedState.tag & 1) {
      if (l.flags |= 2048, pa(
        9,
        Vr(),
        Ud.bind(
          null,
          l,
          i,
          n,
          t
        ),
        null
      ), Ge === null) throw Error(o(349));
      c || (Yn & 124) !== 0 || jd(l, t, n);
    }
    return n;
  }
  function jd(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = xe.updateQueue, t === null ? (t = ec(), xe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Ud(e, t, n, l) {
    t.value = n, t.getSnapshot = l, Bd(t) && kd(e);
  }
  function Ld(e, t, n) {
    return n(function() {
      Bd(t) && kd(e);
    });
  }
  function Bd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !At(e, n);
    } catch {
      return !0;
    }
  }
  function kd(e) {
    var t = ra(e, 2);
    t !== null && _t(t, e, 2);
  }
  function ac(e) {
    var t = xt();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), Cl) {
        Wt(!0);
        try {
          n();
        } finally {
          Wt(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: yn,
      lastRenderedState: e
    }, t;
  }
  function Hd(e, t, n, l) {
    return e.baseState = n, nc(
      e,
      je,
      typeof l == "function" ? l : yn
    );
  }
  function Zy(e, t, n, l, i) {
    if (Qr(e)) throw Error(o(485));
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
        then: function(m) {
          c.listeners.push(m);
        }
      };
      D.T !== null ? n(!0) : c.isTransition = !1, l(c), n = t.pending, n === null ? (c.next = t.pending = c, Gd(t, c)) : (c.next = n.next, t.pending = n.next = c);
    }
  }
  function Gd(e, t) {
    var n = t.action, l = t.payload, i = e.state;
    if (t.isTransition) {
      var c = D.T, m = {};
      D.T = m;
      try {
        var g = n(i, l), M = D.S;
        M !== null && M(m, g), Yd(e, t, g);
      } catch (B) {
        ic(e, t, B);
      } finally {
        D.T = c;
      }
    } else
      try {
        c = n(i, l), Yd(e, t, c);
      } catch (B) {
        ic(e, t, B);
      }
  }
  function Yd(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(l) {
        qd(e, t, l);
      },
      function(l) {
        return ic(e, t, l);
      }
    ) : qd(e, t, n);
  }
  function qd(e, t, n) {
    t.status = "fulfilled", t.value = n, Vd(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Gd(e, n)));
  }
  function ic(e, t, n) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = n, Vd(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function Vd(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Xd(e, t) {
    return t;
  }
  function Qd(e, t) {
    if (Ne) {
      var n = Ge.formState;
      if (n !== null) {
        e: {
          var l = xe;
          if (Ne) {
            if (Qe) {
              t: {
                for (var i = Qe, c = It; i.nodeType !== 8; ) {
                  if (!c) {
                    i = null;
                    break t;
                  }
                  if (i = Zt(
                    i.nextSibling
                  ), i === null) {
                    i = null;
                    break t;
                  }
                }
                c = i.data, i = c === "F!" || c === "F" ? i : null;
              }
              if (i) {
                Qe = Zt(
                  i.nextSibling
                ), l = i.data === "F!";
                break e;
              }
            }
            El(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return n = xt(), n.memoizedState = n.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Xd,
      lastRenderedState: t
    }, n.queue = l, n = sm.bind(
      null,
      xe,
      l
    ), l.dispatch = n, l = ac(!1), c = sc.bind(
      null,
      xe,
      !1,
      l.queue
    ), l = xt(), i = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = i, n = Zy.bind(
      null,
      xe,
      i,
      c,
      n
    ), i.dispatch = n, l.memoizedState = e, [t, n, !1];
  }
  function Zd(e) {
    var t = Pe();
    return Kd(t, je, e);
  }
  function Kd(e, t, n) {
    if (t = nc(
      e,
      t,
      Xd
    )[0], e = qr(yn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = yi(t);
      } catch (m) {
        throw m === di ? Lr : m;
      }
    else l = t;
    t = Pe();
    var i = t.queue, c = i.dispatch;
    return n !== t.memoizedState && (xe.flags |= 2048, pa(
      9,
      Vr(),
      Ky.bind(null, i, n),
      null
    )), [l, c, e];
  }
  function Ky(e, t) {
    e.action = t;
  }
  function Jd(e) {
    var t = Pe(), n = je;
    if (n !== null)
      return Kd(t, n, e);
    Pe(), t = t.memoizedState, n = Pe();
    var l = n.queue.dispatch;
    return n.memoizedState = e, [t, l, !1];
  }
  function pa(e, t, n, l) {
    return e = { tag: e, create: n, deps: l, inst: t, next: null }, t = xe.updateQueue, t === null && (t = ec(), xe.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (l = n.next, n.next = e, e.next = l, t.lastEffect = e), e;
  }
  function Vr() {
    return { destroy: void 0, resource: void 0 };
  }
  function $d() {
    return Pe().memoizedState;
  }
  function Xr(e, t, n, l) {
    var i = xt();
    l = l === void 0 ? null : l, xe.flags |= e, i.memoizedState = pa(
      1 | t,
      Vr(),
      n,
      l
    );
  }
  function bi(e, t, n, l) {
    var i = Pe();
    l = l === void 0 ? null : l;
    var c = i.memoizedState.inst;
    je !== null && l !== null && $u(l, je.memoizedState.deps) ? i.memoizedState = pa(t, c, n, l) : (xe.flags |= e, i.memoizedState = pa(
      1 | t,
      c,
      n,
      l
    ));
  }
  function Pd(e, t) {
    Xr(8390656, 8, e, t);
  }
  function Fd(e, t) {
    bi(2048, 8, e, t);
  }
  function Wd(e, t) {
    return bi(4, 2, e, t);
  }
  function Id(e, t) {
    return bi(4, 4, e, t);
  }
  function em(e, t) {
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
  function tm(e, t, n) {
    n = n != null ? n.concat([e]) : null, bi(4, 4, em.bind(null, t, e), n);
  }
  function rc() {
  }
  function nm(e, t) {
    var n = Pe();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && $u(t, l[1]) ? l[0] : (n.memoizedState = [e, t], e);
  }
  function lm(e, t) {
    var n = Pe();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && $u(t, l[1]))
      return l[0];
    if (l = e(), Cl) {
      Wt(!0);
      try {
        e();
      } finally {
        Wt(!1);
      }
    }
    return n.memoizedState = [l, t], l;
  }
  function oc(e, t, n) {
    return n === void 0 || (Yn & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = n, e = rh(), xe.lanes |= e, Jn |= e, n);
  }
  function am(e, t, n, l) {
    return At(n, t) ? n : da.current !== null ? (e = oc(e, n, l), At(e, t) || (nt = !0), e) : (Yn & 42) === 0 ? (nt = !0, e.memoizedState = n) : (e = rh(), xe.lanes |= e, Jn |= e, t);
  }
  function im(e, t, n, l, i) {
    var c = X.p;
    X.p = c !== 0 && 8 > c ? c : 8;
    var m = D.T, g = {};
    D.T = g, sc(e, !1, t, n);
    try {
      var M = i(), B = D.S;
      if (B !== null && B(g, M), M !== null && typeof M == "object" && typeof M.then == "function") {
        var Z = Vy(
          M,
          l
        );
        xi(
          e,
          t,
          Z,
          Tt(e)
        );
      } else
        xi(
          e,
          t,
          l,
          Tt(e)
        );
    } catch (P) {
      xi(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: P },
        Tt()
      );
    } finally {
      X.p = c, D.T = m;
    }
  }
  function Jy() {
  }
  function uc(e, t, n, l) {
    if (e.tag !== 5) throw Error(o(476));
    var i = rm(e).queue;
    im(
      e,
      i,
      t,
      k,
      n === null ? Jy : function() {
        return om(e), n(l);
      }
    );
  }
  function rm(e) {
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
        lastRenderedReducer: yn,
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
        lastRenderedReducer: yn,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function om(e) {
    var t = rm(e).next.queue;
    xi(e, t, {}, Tt());
  }
  function cc() {
    return dt(ki);
  }
  function um() {
    return Pe().memoizedState;
  }
  function cm() {
    return Pe().memoizedState;
  }
  function $y(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Tt();
          e = Hn(n);
          var l = Gn(t, e, n);
          l !== null && (_t(l, t, n), hi(l, t, n)), t = { cache: Hu() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Py(e, t, n) {
    var l = Tt();
    n = {
      lane: l,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Qr(e) ? fm(t, n) : (n = Tu(e, t, n, l), n !== null && (_t(n, e, l), dm(n, t, l)));
  }
  function sm(e, t, n) {
    var l = Tt();
    xi(e, t, n, l);
  }
  function xi(e, t, n, l) {
    var i = {
      lane: l,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Qr(e)) fm(t, i);
    else {
      var c = e.alternate;
      if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null))
        try {
          var m = t.lastRenderedState, g = c(m, n);
          if (i.hasEagerState = !0, i.eagerState = g, At(g, m))
            return Or(e, t, i, 0), Ge === null && Mr(), !1;
        } catch {
        } finally {
        }
      if (n = Tu(e, t, i, l), n !== null)
        return _t(n, e, l), dm(n, t, l), !0;
    }
    return !1;
  }
  function sc(e, t, n, l) {
    if (l = {
      lane: 2,
      revertLane: qc(),
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Qr(e)) {
      if (t) throw Error(o(479));
    } else
      t = Tu(
        e,
        n,
        l,
        2
      ), t !== null && _t(t, e, 2);
  }
  function Qr(e) {
    var t = e.alternate;
    return e === xe || t !== null && t === xe;
  }
  function fm(e, t) {
    ma = Hr = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function dm(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, Ka(e, n);
    }
  }
  var Zr = {
    readContext: dt,
    use: Yr,
    useCallback: Ke,
    useContext: Ke,
    useEffect: Ke,
    useImperativeHandle: Ke,
    useLayoutEffect: Ke,
    useInsertionEffect: Ke,
    useMemo: Ke,
    useReducer: Ke,
    useRef: Ke,
    useState: Ke,
    useDebugValue: Ke,
    useDeferredValue: Ke,
    useTransition: Ke,
    useSyncExternalStore: Ke,
    useId: Ke,
    useHostTransitionStatus: Ke,
    useFormState: Ke,
    useActionState: Ke,
    useOptimistic: Ke,
    useMemoCache: Ke,
    useCacheRefresh: Ke
  }, mm = {
    readContext: dt,
    use: Yr,
    useCallback: function(e, t) {
      return xt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: dt,
    useEffect: Pd,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, Xr(
        4194308,
        4,
        em.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return Xr(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Xr(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = xt();
      t = t === void 0 ? null : t;
      var l = e();
      if (Cl) {
        Wt(!0);
        try {
          e();
        } finally {
          Wt(!1);
        }
      }
      return n.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, n) {
      var l = xt();
      if (n !== void 0) {
        var i = n(t);
        if (Cl) {
          Wt(!0);
          try {
            n(t);
          } finally {
            Wt(!1);
          }
        }
      } else i = t;
      return l.memoizedState = l.baseState = i, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: i
      }, l.queue = e, e = e.dispatch = Py.bind(
        null,
        xe,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = xt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = ac(e);
      var t = e.queue, n = sm.bind(null, xe, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: rc,
    useDeferredValue: function(e, t) {
      var n = xt();
      return oc(n, e, t);
    },
    useTransition: function() {
      var e = ac(!1);
      return e = im.bind(
        null,
        xe,
        e.queue,
        !0,
        !1
      ), xt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var l = xe, i = xt();
      if (Ne) {
        if (n === void 0)
          throw Error(o(407));
        n = n();
      } else {
        if (n = t(), Ge === null)
          throw Error(o(349));
        (Oe & 124) !== 0 || jd(l, t, n);
      }
      i.memoizedState = n;
      var c = { value: n, getSnapshot: t };
      return i.queue = c, Pd(Ld.bind(null, l, c, e), [
        e
      ]), l.flags |= 2048, pa(
        9,
        Vr(),
        Ud.bind(
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
      var e = xt(), t = Ge.identifierPrefix;
      if (Ne) {
        var n = pn, l = hn;
        n = (l & ~(1 << 32 - it(l) - 1)).toString(32) + n, t = "«" + t + "R" + n, n = Gr++, 0 < n && (t += "H" + n.toString(32)), t += "»";
      } else
        n = Xy++, t = "«" + t + "r" + n.toString(32) + "»";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: cc,
    useFormState: Qd,
    useActionState: Qd,
    useOptimistic: function(e) {
      var t = xt();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = sc.bind(
        null,
        xe,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: tc,
    useCacheRefresh: function() {
      return xt().memoizedState = $y.bind(
        null,
        xe
      );
    }
  }, hm = {
    readContext: dt,
    use: Yr,
    useCallback: nm,
    useContext: dt,
    useEffect: Fd,
    useImperativeHandle: tm,
    useInsertionEffect: Wd,
    useLayoutEffect: Id,
    useMemo: lm,
    useReducer: qr,
    useRef: $d,
    useState: function() {
      return qr(yn);
    },
    useDebugValue: rc,
    useDeferredValue: function(e, t) {
      var n = Pe();
      return am(
        n,
        je.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = qr(yn)[0], t = Pe().memoizedState;
      return [
        typeof e == "boolean" ? e : yi(e),
        t
      ];
    },
    useSyncExternalStore: zd,
    useId: um,
    useHostTransitionStatus: cc,
    useFormState: Zd,
    useActionState: Zd,
    useOptimistic: function(e, t) {
      var n = Pe();
      return Hd(n, je, e, t);
    },
    useMemoCache: tc,
    useCacheRefresh: cm
  }, Fy = {
    readContext: dt,
    use: Yr,
    useCallback: nm,
    useContext: dt,
    useEffect: Fd,
    useImperativeHandle: tm,
    useInsertionEffect: Wd,
    useLayoutEffect: Id,
    useMemo: lm,
    useReducer: lc,
    useRef: $d,
    useState: function() {
      return lc(yn);
    },
    useDebugValue: rc,
    useDeferredValue: function(e, t) {
      var n = Pe();
      return je === null ? oc(n, e, t) : am(
        n,
        je.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = lc(yn)[0], t = Pe().memoizedState;
      return [
        typeof e == "boolean" ? e : yi(e),
        t
      ];
    },
    useSyncExternalStore: zd,
    useId: um,
    useHostTransitionStatus: cc,
    useFormState: Jd,
    useActionState: Jd,
    useOptimistic: function(e, t) {
      var n = Pe();
      return je !== null ? Hd(n, je, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: tc,
    useCacheRefresh: cm
  }, va = null, Si = 0;
  function Kr(e) {
    var t = Si;
    return Si += 1, va === null && (va = []), Rd(va, e, t);
  }
  function Ei(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Jr(e, t) {
    throw t.$$typeof === b ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function pm(e) {
    var t = e._init;
    return t(e._payload);
  }
  function vm(e) {
    function t(N, _) {
      if (e) {
        var L = N.deletions;
        L === null ? (N.deletions = [_], N.flags |= 16) : L.push(_);
      }
    }
    function n(N, _) {
      if (!e) return null;
      for (; _ !== null; )
        t(N, _), _ = _.sibling;
      return null;
    }
    function l(N) {
      for (var _ = /* @__PURE__ */ new Map(); N !== null; )
        N.key !== null ? _.set(N.key, N) : _.set(N.index, N), N = N.sibling;
      return _;
    }
    function i(N, _) {
      return N = mn(N, _), N.index = 0, N.sibling = null, N;
    }
    function c(N, _, L) {
      return N.index = L, e ? (L = N.alternate, L !== null ? (L = L.index, L < _ ? (N.flags |= 67108866, _) : L) : (N.flags |= 67108866, _)) : (N.flags |= 1048576, _);
    }
    function m(N) {
      return e && N.alternate === null && (N.flags |= 67108866), N;
    }
    function g(N, _, L, $) {
      return _ === null || _.tag !== 6 ? (_ = Nu(L, N.mode, $), _.return = N, _) : (_ = i(_, L), _.return = N, _);
    }
    function M(N, _, L, $) {
      var ie = L.type;
      return ie === C ? Z(
        N,
        _,
        L.props.children,
        $,
        L.key
      ) : _ !== null && (_.elementType === ie || typeof ie == "object" && ie !== null && ie.$$typeof === q && pm(ie) === _.type) ? (_ = i(_, L.props), Ei(_, L), _.return = N, _) : (_ = _r(
        L.type,
        L.key,
        L.props,
        null,
        N.mode,
        $
      ), Ei(_, L), _.return = N, _);
    }
    function B(N, _, L, $) {
      return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== L.containerInfo || _.stateNode.implementation !== L.implementation ? (_ = Du(L, N.mode, $), _.return = N, _) : (_ = i(_, L.children || []), _.return = N, _);
    }
    function Z(N, _, L, $, ie) {
      return _ === null || _.tag !== 7 ? (_ = yl(
        L,
        N.mode,
        $,
        ie
      ), _.return = N, _) : (_ = i(_, L), _.return = N, _);
    }
    function P(N, _, L) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
        return _ = Nu(
          "" + _,
          N.mode,
          L
        ), _.return = N, _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case x:
            return L = _r(
              _.type,
              _.key,
              _.props,
              null,
              N.mode,
              L
            ), Ei(L, _), L.return = N, L;
          case A:
            return _ = Du(
              _,
              N.mode,
              L
            ), _.return = N, _;
          case q:
            var $ = _._init;
            return _ = $(_._payload), P(N, _, L);
        }
        if (Q(_) || ue(_))
          return _ = yl(
            _,
            N.mode,
            L,
            null
          ), _.return = N, _;
        if (typeof _.then == "function")
          return P(N, Kr(_), L);
        if (_.$$typeof === z)
          return P(
            N,
            jr(N, _),
            L
          );
        Jr(N, _);
      }
      return null;
    }
    function H(N, _, L, $) {
      var ie = _ !== null ? _.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
        return ie !== null ? null : g(N, _, "" + L, $);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case x:
            return L.key === ie ? M(N, _, L, $) : null;
          case A:
            return L.key === ie ? B(N, _, L, $) : null;
          case q:
            return ie = L._init, L = ie(L._payload), H(N, _, L, $);
        }
        if (Q(L) || ue(L))
          return ie !== null ? null : Z(N, _, L, $, null);
        if (typeof L.then == "function")
          return H(
            N,
            _,
            Kr(L),
            $
          );
        if (L.$$typeof === z)
          return H(
            N,
            _,
            jr(N, L),
            $
          );
        Jr(N, L);
      }
      return null;
    }
    function G(N, _, L, $, ie) {
      if (typeof $ == "string" && $ !== "" || typeof $ == "number" || typeof $ == "bigint")
        return N = N.get(L) || null, g(_, N, "" + $, ie);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case x:
            return N = N.get(
              $.key === null ? L : $.key
            ) || null, M(_, N, $, ie);
          case A:
            return N = N.get(
              $.key === null ? L : $.key
            ) || null, B(_, N, $, ie);
          case q:
            var Ee = $._init;
            return $ = Ee($._payload), G(
              N,
              _,
              L,
              $,
              ie
            );
        }
        if (Q($) || ue($))
          return N = N.get(L) || null, Z(_, N, $, ie, null);
        if (typeof $.then == "function")
          return G(
            N,
            _,
            L,
            Kr($),
            ie
          );
        if ($.$$typeof === z)
          return G(
            N,
            _,
            L,
            jr(_, $),
            ie
          );
        Jr(_, $);
      }
      return null;
    }
    function ye(N, _, L, $) {
      for (var ie = null, Ee = null, fe = _, pe = _ = 0, at = null; fe !== null && pe < L.length; pe++) {
        fe.index > pe ? (at = fe, fe = null) : at = fe.sibling;
        var _e = H(
          N,
          fe,
          L[pe],
          $
        );
        if (_e === null) {
          fe === null && (fe = at);
          break;
        }
        e && fe && _e.alternate === null && t(N, fe), _ = c(_e, _, pe), Ee === null ? ie = _e : Ee.sibling = _e, Ee = _e, fe = at;
      }
      if (pe === L.length)
        return n(N, fe), Ne && xl(N, pe), ie;
      if (fe === null) {
        for (; pe < L.length; pe++)
          fe = P(N, L[pe], $), fe !== null && (_ = c(
            fe,
            _,
            pe
          ), Ee === null ? ie = fe : Ee.sibling = fe, Ee = fe);
        return Ne && xl(N, pe), ie;
      }
      for (fe = l(fe); pe < L.length; pe++)
        at = G(
          fe,
          N,
          pe,
          L[pe],
          $
        ), at !== null && (e && at.alternate !== null && fe.delete(
          at.key === null ? pe : at.key
        ), _ = c(
          at,
          _,
          pe
        ), Ee === null ? ie = at : Ee.sibling = at, Ee = at);
      return e && fe.forEach(function(ll) {
        return t(N, ll);
      }), Ne && xl(N, pe), ie;
    }
    function he(N, _, L, $) {
      if (L == null) throw Error(o(151));
      for (var ie = null, Ee = null, fe = _, pe = _ = 0, at = null, _e = L.next(); fe !== null && !_e.done; pe++, _e = L.next()) {
        fe.index > pe ? (at = fe, fe = null) : at = fe.sibling;
        var ll = H(N, fe, _e.value, $);
        if (ll === null) {
          fe === null && (fe = at);
          break;
        }
        e && fe && ll.alternate === null && t(N, fe), _ = c(ll, _, pe), Ee === null ? ie = ll : Ee.sibling = ll, Ee = ll, fe = at;
      }
      if (_e.done)
        return n(N, fe), Ne && xl(N, pe), ie;
      if (fe === null) {
        for (; !_e.done; pe++, _e = L.next())
          _e = P(N, _e.value, $), _e !== null && (_ = c(_e, _, pe), Ee === null ? ie = _e : Ee.sibling = _e, Ee = _e);
        return Ne && xl(N, pe), ie;
      }
      for (fe = l(fe); !_e.done; pe++, _e = L.next())
        _e = G(fe, N, pe, _e.value, $), _e !== null && (e && _e.alternate !== null && fe.delete(_e.key === null ? pe : _e.key), _ = c(_e, _, pe), Ee === null ? ie = _e : Ee.sibling = _e, Ee = _e);
      return e && fe.forEach(function(W0) {
        return t(N, W0);
      }), Ne && xl(N, pe), ie;
    }
    function Le(N, _, L, $) {
      if (typeof L == "object" && L !== null && L.type === C && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case x:
            e: {
              for (var ie = L.key; _ !== null; ) {
                if (_.key === ie) {
                  if (ie = L.type, ie === C) {
                    if (_.tag === 7) {
                      n(
                        N,
                        _.sibling
                      ), $ = i(
                        _,
                        L.props.children
                      ), $.return = N, N = $;
                      break e;
                    }
                  } else if (_.elementType === ie || typeof ie == "object" && ie !== null && ie.$$typeof === q && pm(ie) === _.type) {
                    n(
                      N,
                      _.sibling
                    ), $ = i(_, L.props), Ei($, L), $.return = N, N = $;
                    break e;
                  }
                  n(N, _);
                  break;
                } else t(N, _);
                _ = _.sibling;
              }
              L.type === C ? ($ = yl(
                L.props.children,
                N.mode,
                $,
                L.key
              ), $.return = N, N = $) : ($ = _r(
                L.type,
                L.key,
                L.props,
                null,
                N.mode,
                $
              ), Ei($, L), $.return = N, N = $);
            }
            return m(N);
          case A:
            e: {
              for (ie = L.key; _ !== null; ) {
                if (_.key === ie)
                  if (_.tag === 4 && _.stateNode.containerInfo === L.containerInfo && _.stateNode.implementation === L.implementation) {
                    n(
                      N,
                      _.sibling
                    ), $ = i(_, L.children || []), $.return = N, N = $;
                    break e;
                  } else {
                    n(N, _);
                    break;
                  }
                else t(N, _);
                _ = _.sibling;
              }
              $ = Du(L, N.mode, $), $.return = N, N = $;
            }
            return m(N);
          case q:
            return ie = L._init, L = ie(L._payload), Le(
              N,
              _,
              L,
              $
            );
        }
        if (Q(L))
          return ye(
            N,
            _,
            L,
            $
          );
        if (ue(L)) {
          if (ie = ue(L), typeof ie != "function") throw Error(o(150));
          return L = ie.call(L), he(
            N,
            _,
            L,
            $
          );
        }
        if (typeof L.then == "function")
          return Le(
            N,
            _,
            Kr(L),
            $
          );
        if (L.$$typeof === z)
          return Le(
            N,
            _,
            jr(N, L),
            $
          );
        Jr(N, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint" ? (L = "" + L, _ !== null && _.tag === 6 ? (n(N, _.sibling), $ = i(_, L), $.return = N, N = $) : (n(N, _), $ = Nu(L, N.mode, $), $.return = N, N = $), m(N)) : n(N, _);
    }
    return function(N, _, L, $) {
      try {
        Si = 0;
        var ie = Le(
          N,
          _,
          L,
          $
        );
        return va = null, ie;
      } catch (fe) {
        if (fe === di || fe === Lr) throw fe;
        var Ee = Rt(29, fe, null, N.mode);
        return Ee.lanes = $, Ee.return = N, Ee;
      } finally {
      }
    };
  }
  var ga = vm(!0), gm = vm(!1), Ht = V(null), en = null;
  function qn(e) {
    var t = e.alternate;
    W(Ie, Ie.current & 1), W(Ht, e), en === null && (t === null || da.current !== null || t.memoizedState !== null) && (en = e);
  }
  function ym(e) {
    if (e.tag === 22) {
      if (W(Ie, Ie.current), W(Ht, e), en === null) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (en = e);
      }
    } else Vn();
  }
  function Vn() {
    W(Ie, Ie.current), W(Ht, Ht.current);
  }
  function bn(e) {
    ee(Ht), en === e && (en = null), ee(Ie);
  }
  var Ie = V(0);
  function $r(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || es(n)))
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
  function fc(e, t, n, l) {
    t = e.memoizedState, n = n(l, t), n = n == null ? t : y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var dc = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var l = Tt(), i = Hn(l);
      i.payload = t, n != null && (i.callback = n), t = Gn(e, i, l), t !== null && (_t(t, e, l), hi(t, e, l));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var l = Tt(), i = Hn(l);
      i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Gn(e, i, l), t !== null && (_t(t, e, l), hi(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = Tt(), l = Hn(n);
      l.tag = 2, t != null && (l.callback = t), t = Gn(e, l, n), t !== null && (_t(t, e, n), hi(t, e, n));
    }
  };
  function bm(e, t, n, l, i, c, m) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, c, m) : t.prototype && t.prototype.isPureReactComponent ? !ai(n, l) || !ai(i, c) : !0;
  }
  function xm(e, t, n, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, l), t.state !== e && dc.enqueueReplaceState(t, t.state, null);
  }
  function Ml(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var l in t)
        l !== "ref" && (n[l] = t[l]);
    }
    if (e = e.defaultProps) {
      n === t && (n = y({}, n));
      for (var i in e)
        n[i] === void 0 && (n[i] = e[i]);
    }
    return n;
  }
  var Pr = typeof reportError == "function" ? reportError : function(e) {
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
  function Sm(e) {
    Pr(e);
  }
  function Em(e) {
    console.error(e);
  }
  function wm(e) {
    Pr(e);
  }
  function Fr(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function Am(e, t, n) {
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
  function mc(e, t, n) {
    return n = Hn(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Fr(e, t);
    }, n;
  }
  function Rm(e) {
    return e = Hn(e), e.tag = 3, e;
  }
  function Cm(e, t, n, l) {
    var i = n.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var c = l.value;
      e.payload = function() {
        return i(c);
      }, e.callback = function() {
        Am(t, n, l);
      };
    }
    var m = n.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (e.callback = function() {
      Am(t, n, l), typeof i != "function" && ($n === null ? $n = /* @__PURE__ */ new Set([this]) : $n.add(this));
      var g = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: g !== null ? g : ""
      });
    });
  }
  function Wy(e, t, n, l, i) {
    if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = n.alternate, t !== null && ci(
        t,
        n,
        i,
        !0
      ), n = Ht.current, n !== null) {
        switch (n.tag) {
          case 13:
            return en === null ? Bc() : n.alternate === null && Ze === 0 && (Ze = 3), n.flags &= -257, n.flags |= 65536, n.lanes = i, l === qu ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), Hc(e, l, i)), !1;
          case 22:
            return n.flags |= 65536, l === qu ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), Hc(e, l, i)), !1;
        }
        throw Error(o(435, n.tag));
      }
      return Hc(e, l, i), Bc(), !1;
    }
    if (Ne)
      return t = Ht.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = i, l !== Uu && (e = Error(o(422), { cause: l }), ui(Ut(e, n)))) : (l !== Uu && (t = Error(o(423), {
        cause: l
      }), ui(
        Ut(t, n)
      )), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, l = Ut(l, n), i = mc(
        e.stateNode,
        l,
        i
      ), Qu(e, i), Ze !== 4 && (Ze = 2)), !1;
    var c = Error(o(520), { cause: l });
    if (c = Ut(c, n), Ti === null ? Ti = [c] : Ti.push(c), Ze !== 4 && (Ze = 2), t === null) return !0;
    l = Ut(l, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = i & -i, n.lanes |= e, e = mc(n.stateNode, l, e), Qu(n, e), !1;
        case 1:
          if (t = n.type, c = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && ($n === null || !$n.has(c))))
            return n.flags |= 65536, i &= -i, n.lanes |= i, i = Rm(i), Cm(
              i,
              e,
              n,
              l
            ), Qu(n, i), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Mm = Error(o(461)), nt = !1;
  function rt(e, t, n, l) {
    t.child = e === null ? gm(t, null, n, l) : ga(
      t,
      e.child,
      n,
      l
    );
  }
  function Om(e, t, n, l, i) {
    n = n.render;
    var c = t.ref;
    if ("ref" in l) {
      var m = {};
      for (var g in l)
        g !== "ref" && (m[g] = l[g]);
    } else m = l;
    return Al(t), l = Pu(
      e,
      t,
      n,
      m,
      c,
      i
    ), g = Fu(), e !== null && !nt ? (Wu(e, t, i), xn(e, t, i)) : (Ne && g && zu(t), t.flags |= 1, rt(e, t, l, i), t.child);
  }
  function Tm(e, t, n, l, i) {
    if (e === null) {
      var c = n.type;
      return typeof c == "function" && !_u(c) && c.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = c, _m(
        e,
        t,
        c,
        l,
        i
      )) : (e = _r(
        n.type,
        null,
        l,
        t,
        t.mode,
        i
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (c = e.child, !Sc(e, i)) {
      var m = c.memoizedProps;
      if (n = n.compare, n = n !== null ? n : ai, n(m, l) && e.ref === t.ref)
        return xn(e, t, i);
    }
    return t.flags |= 1, e = mn(c, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function _m(e, t, n, l, i) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (ai(c, l) && e.ref === t.ref)
        if (nt = !1, t.pendingProps = l = c, Sc(e, i))
          (e.flags & 131072) !== 0 && (nt = !0);
        else
          return t.lanes = e.lanes, xn(e, t, i);
    }
    return hc(
      e,
      t,
      n,
      l,
      i
    );
  }
  function Nm(e, t, n) {
    var l = t.pendingProps, i = l.children, c = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (l = c !== null ? c.baseLanes | n : n, e !== null) {
          for (i = t.child = e.child, c = 0; i !== null; )
            c = c | i.lanes | i.childLanes, i = i.sibling;
          t.childLanes = c & ~l;
        } else t.childLanes = 0, t.child = null;
        return Dm(
          e,
          t,
          l,
          n
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Ur(
          t,
          c !== null ? c.cachePool : null
        ), c !== null ? _d(t, c) : Ku(), ym(t);
      else
        return t.lanes = t.childLanes = 536870912, Dm(
          e,
          t,
          c !== null ? c.baseLanes | n : n,
          n
        );
    } else
      c !== null ? (Ur(t, c.cachePool), _d(t, c), Vn(), t.memoizedState = null) : (e !== null && Ur(t, null), Ku(), Vn());
    return rt(e, t, i, n), t.child;
  }
  function Dm(e, t, n, l) {
    var i = Yu();
    return i = i === null ? null : { parent: We._currentValue, pool: i }, t.memoizedState = {
      baseLanes: n,
      cachePool: i
    }, e !== null && Ur(t, null), Ku(), ym(t), e !== null && ci(e, t, l, !0), null;
  }
  function Wr(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(o(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function hc(e, t, n, l, i) {
    return Al(t), n = Pu(
      e,
      t,
      n,
      l,
      void 0,
      i
    ), l = Fu(), e !== null && !nt ? (Wu(e, t, i), xn(e, t, i)) : (Ne && l && zu(t), t.flags |= 1, rt(e, t, n, i), t.child);
  }
  function zm(e, t, n, l, i, c) {
    return Al(t), t.updateQueue = null, n = Dd(
      t,
      l,
      n,
      i
    ), Nd(e), l = Fu(), e !== null && !nt ? (Wu(e, t, c), xn(e, t, c)) : (Ne && l && zu(t), t.flags |= 1, rt(e, t, n, c), t.child);
  }
  function jm(e, t, n, l, i) {
    if (Al(t), t.stateNode === null) {
      var c = oa, m = n.contextType;
      typeof m == "object" && m !== null && (c = dt(m)), c = new n(l, c), t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = dc, t.stateNode = c, c._reactInternals = t, c = t.stateNode, c.props = l, c.state = t.memoizedState, c.refs = {}, Vu(t), m = n.contextType, c.context = typeof m == "object" && m !== null ? dt(m) : oa, c.state = t.memoizedState, m = n.getDerivedStateFromProps, typeof m == "function" && (fc(
        t,
        n,
        m,
        l
      ), c.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (m = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), m !== c.state && dc.enqueueReplaceState(c, c.state, null), vi(t, l, c, i), pi(), c.state = t.memoizedState), typeof c.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      c = t.stateNode;
      var g = t.memoizedProps, M = Ml(n, g);
      c.props = M;
      var B = c.context, Z = n.contextType;
      m = oa, typeof Z == "object" && Z !== null && (m = dt(Z));
      var P = n.getDerivedStateFromProps;
      Z = typeof P == "function" || typeof c.getSnapshotBeforeUpdate == "function", g = t.pendingProps !== g, Z || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (g || B !== m) && xm(
        t,
        c,
        l,
        m
      ), kn = !1;
      var H = t.memoizedState;
      c.state = H, vi(t, l, c, i), pi(), B = t.memoizedState, g || H !== B || kn ? (typeof P == "function" && (fc(
        t,
        n,
        P,
        l
      ), B = t.memoizedState), (M = kn || bm(
        t,
        n,
        M,
        l,
        H,
        B,
        m
      )) ? (Z || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = B), c.props = l, c.state = B, c.context = m, l = M) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      c = t.stateNode, Xu(e, t), m = t.memoizedProps, Z = Ml(n, m), c.props = Z, P = t.pendingProps, H = c.context, B = n.contextType, M = oa, typeof B == "object" && B !== null && (M = dt(B)), g = n.getDerivedStateFromProps, (B = typeof g == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (m !== P || H !== M) && xm(
        t,
        c,
        l,
        M
      ), kn = !1, H = t.memoizedState, c.state = H, vi(t, l, c, i), pi();
      var G = t.memoizedState;
      m !== P || H !== G || kn || e !== null && e.dependencies !== null && zr(e.dependencies) ? (typeof g == "function" && (fc(
        t,
        n,
        g,
        l
      ), G = t.memoizedState), (Z = kn || bm(
        t,
        n,
        Z,
        l,
        H,
        G,
        M
      ) || e !== null && e.dependencies !== null && zr(e.dependencies)) ? (B || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(l, G, M), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(
        l,
        G,
        M
      )), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || m === e.memoizedProps && H === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && H === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = G), c.props = l, c.state = G, c.context = M, l = Z) : (typeof c.componentDidUpdate != "function" || m === e.memoizedProps && H === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && H === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return c = l, Wr(e, t), l = (t.flags & 128) !== 0, c || l ? (c = t.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : c.render(), t.flags |= 1, e !== null && l ? (t.child = ga(
      t,
      e.child,
      null,
      i
    ), t.child = ga(
      t,
      null,
      n,
      i
    )) : rt(e, t, n, i), t.memoizedState = c.state, e = t.child) : e = xn(
      e,
      t,
      i
    ), e;
  }
  function Um(e, t, n, l) {
    return oi(), t.flags |= 256, rt(e, t, n, l), t.child;
  }
  var pc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function vc(e) {
    return { baseLanes: e, cachePool: Ed() };
  }
  function gc(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Gt), e;
  }
  function Lm(e, t, n) {
    var l = t.pendingProps, i = !1, c = (t.flags & 128) !== 0, m;
    if ((m = c) || (m = e !== null && e.memoizedState === null ? !1 : (Ie.current & 2) !== 0), m && (i = !0, t.flags &= -129), m = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ne) {
        if (i ? qn(t) : Vn(), Ne) {
          var g = Qe, M;
          if (M = g) {
            e: {
              for (M = g, g = It; M.nodeType !== 8; ) {
                if (!g) {
                  g = null;
                  break e;
                }
                if (M = Zt(
                  M.nextSibling
                ), M === null) {
                  g = null;
                  break e;
                }
              }
              g = M;
            }
            g !== null ? (t.memoizedState = {
              dehydrated: g,
              treeContext: bl !== null ? { id: hn, overflow: pn } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, M = Rt(
              18,
              null,
              null,
              0
            ), M.stateNode = g, M.return = t, t.child = M, ht = t, Qe = null, M = !0) : M = !1;
          }
          M || El(t);
        }
        if (g = t.memoizedState, g !== null && (g = g.dehydrated, g !== null))
          return es(g) ? t.lanes = 32 : t.lanes = 536870912, null;
        bn(t);
      }
      return g = l.children, l = l.fallback, i ? (Vn(), i = t.mode, g = Ir(
        { mode: "hidden", children: g },
        i
      ), l = yl(
        l,
        i,
        n,
        null
      ), g.return = t, l.return = t, g.sibling = l, t.child = g, i = t.child, i.memoizedState = vc(n), i.childLanes = gc(
        e,
        m,
        n
      ), t.memoizedState = pc, l) : (qn(t), yc(t, g));
    }
    if (M = e.memoizedState, M !== null && (g = M.dehydrated, g !== null)) {
      if (c)
        t.flags & 256 ? (qn(t), t.flags &= -257, t = bc(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (Vn(), t.child = e.child, t.flags |= 128, t = null) : (Vn(), i = l.fallback, g = t.mode, l = Ir(
          { mode: "visible", children: l.children },
          g
        ), i = yl(
          i,
          g,
          n,
          null
        ), i.flags |= 2, l.return = t, i.return = t, l.sibling = i, t.child = l, ga(
          t,
          e.child,
          null,
          n
        ), l = t.child, l.memoizedState = vc(n), l.childLanes = gc(
          e,
          m,
          n
        ), t.memoizedState = pc, t = i);
      else if (qn(t), es(g)) {
        if (m = g.nextSibling && g.nextSibling.dataset, m) var B = m.dgst;
        m = B, l = Error(o(419)), l.stack = "", l.digest = m, ui({ value: l, source: null, stack: null }), t = bc(
          e,
          t,
          n
        );
      } else if (nt || ci(e, t, n, !1), m = (n & e.childLanes) !== 0, nt || m) {
        if (m = Ge, m !== null && (l = n & -n, l = (l & 42) !== 0 ? 1 : Ql(l), l = (l & (m.suspendedLanes | n)) !== 0 ? 0 : l, l !== 0 && l !== M.retryLane))
          throw M.retryLane = l, ra(e, l), _t(m, e, l), Mm;
        g.data === "$?" || Bc(), t = bc(
          e,
          t,
          n
        );
      } else
        g.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = M.treeContext, Qe = Zt(
          g.nextSibling
        ), ht = t, Ne = !0, Sl = null, It = !1, e !== null && (Bt[kt++] = hn, Bt[kt++] = pn, Bt[kt++] = bl, hn = e.id, pn = e.overflow, bl = t), t = yc(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return i ? (Vn(), i = l.fallback, g = t.mode, M = e.child, B = M.sibling, l = mn(M, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = M.subtreeFlags & 65011712, B !== null ? i = mn(B, i) : (i = yl(
      i,
      g,
      n,
      null
    ), i.flags |= 2), i.return = t, l.return = t, l.sibling = i, t.child = l, l = i, i = t.child, g = e.child.memoizedState, g === null ? g = vc(n) : (M = g.cachePool, M !== null ? (B = We._currentValue, M = M.parent !== B ? { parent: B, pool: B } : M) : M = Ed(), g = {
      baseLanes: g.baseLanes | n,
      cachePool: M
    }), i.memoizedState = g, i.childLanes = gc(
      e,
      m,
      n
    ), t.memoizedState = pc, l) : (qn(t), n = e.child, e = n.sibling, n = mn(n, {
      mode: "visible",
      children: l.children
    }), n.return = t, n.sibling = null, e !== null && (m = t.deletions, m === null ? (t.deletions = [e], t.flags |= 16) : m.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function yc(e, t) {
    return t = Ir(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Ir(e, t) {
    return e = Rt(22, e, null, t), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function bc(e, t, n) {
    return ga(t, e.child, null, n), e = yc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Bm(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), Bu(e.return, t, n);
  }
  function xc(e, t, n, l, i) {
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
  function km(e, t, n) {
    var l = t.pendingProps, i = l.revealOrder, c = l.tail;
    if (rt(e, t, l.children, n), l = Ie.current, (l & 2) !== 0)
      l = l & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Bm(e, n, t);
          else if (e.tag === 19)
            Bm(e, n, t);
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
    switch (W(Ie, l), i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          e = n.alternate, e !== null && $r(e) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), xc(
          t,
          !1,
          i,
          n,
          c
        );
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (e = i.alternate, e !== null && $r(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = n, n = i, i = e;
        }
        xc(
          t,
          !0,
          n,
          null,
          c
        );
        break;
      case "together":
        xc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function xn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Jn |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (ci(
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
      for (e = t.child, n = mn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = mn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Sc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && zr(e)));
  }
  function Iy(e, t, n) {
    switch (t.tag) {
      case 3:
        ve(t, t.stateNode.containerInfo), Bn(t, We, e.memoizedState.cache), oi();
        break;
      case 27:
      case 5:
        Be(t);
        break;
      case 4:
        ve(t, t.stateNode.containerInfo);
        break;
      case 10:
        Bn(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (qn(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Lm(e, t, n) : (qn(t), e = xn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        qn(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (l = (n & t.childLanes) !== 0, l || (ci(
          e,
          t,
          n,
          !1
        ), l = (n & t.childLanes) !== 0), i) {
          if (l)
            return km(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), W(Ie, Ie.current), l) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Nm(e, t, n);
      case 24:
        Bn(t, We, e.memoizedState.cache);
    }
    return xn(e, t, n);
  }
  function Hm(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        nt = !0;
      else {
        if (!Sc(e, n) && (t.flags & 128) === 0)
          return nt = !1, Iy(
            e,
            t,
            n
          );
        nt = (e.flags & 131072) !== 0;
      }
    else
      nt = !1, Ne && (t.flags & 1048576) !== 0 && pd(t, Dr, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          e = t.pendingProps;
          var l = t.elementType, i = l._init;
          if (l = i(l._payload), t.type = l, typeof l == "function")
            _u(l) ? (e = Ml(l, e), t.tag = 1, t = jm(
              null,
              t,
              l,
              e,
              n
            )) : (t.tag = 0, t = hc(
              null,
              t,
              l,
              e,
              n
            ));
          else {
            if (l != null) {
              if (i = l.$$typeof, i === Y) {
                t.tag = 11, t = Om(
                  null,
                  t,
                  l,
                  e,
                  n
                );
                break e;
              } else if (i === K) {
                t.tag = 14, t = Tm(
                  null,
                  t,
                  l,
                  e,
                  n
                );
                break e;
              }
            }
            throw t = se(l) || l, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return hc(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return l = t.type, i = Ml(
          l,
          t.pendingProps
        ), jm(
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
          i = c.element, Xu(e, t), vi(t, l, null, n);
          var m = t.memoizedState;
          if (l = m.cache, Bn(t, We, l), l !== c.cache && ku(
            t,
            [We],
            n,
            !0
          ), pi(), l = m.element, c.isDehydrated)
            if (c = {
              element: l,
              isDehydrated: !1,
              cache: m.cache
            }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
              t = Um(
                e,
                t,
                l,
                n
              );
              break e;
            } else if (l !== i) {
              i = Ut(
                Error(o(424)),
                t
              ), ui(i), t = Um(
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
              for (Qe = Zt(e.firstChild), ht = t, Ne = !0, Sl = null, It = !0, n = gm(
                t,
                null,
                l,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (oi(), l === i) {
              t = xn(
                e,
                t,
                n
              );
              break e;
            }
            rt(
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
        return Wr(e, t), e === null ? (n = Vh(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Ne || (n = t.type, e = t.pendingProps, l = ho(
          ce.current
        ).createElement(n), l[ft] = t, l[yt] = e, ut(l, n, e), tt(l), t.stateNode = l) : t.memoizedState = Vh(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Be(t), e === null && Ne && (l = t.stateNode = Gh(
          t.type,
          t.pendingProps,
          ce.current
        ), ht = t, It = !0, i = Qe, Wn(t.type) ? (ts = i, Qe = Zt(
          l.firstChild
        )) : Qe = i), rt(
          e,
          t,
          t.pendingProps.children,
          n
        ), Wr(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ne && ((i = l = Qe) && (l = M0(
          l,
          t.type,
          t.pendingProps,
          It
        ), l !== null ? (t.stateNode = l, ht = t, Qe = Zt(
          l.firstChild
        ), It = !1, i = !0) : i = !1), i || El(t)), Be(t), i = t.type, c = t.pendingProps, m = e !== null ? e.memoizedProps : null, l = c.children, Fc(i, c) ? l = null : m !== null && Fc(i, m) && (t.flags |= 32), t.memoizedState !== null && (i = Pu(
          e,
          t,
          Qy,
          null,
          null,
          n
        ), ki._currentValue = i), Wr(e, t), rt(e, t, l, n), t.child;
      case 6:
        return e === null && Ne && ((e = n = Qe) && (n = O0(
          n,
          t.pendingProps,
          It
        ), n !== null ? (t.stateNode = n, ht = t, Qe = null, e = !0) : e = !1), e || El(t)), null;
      case 13:
        return Lm(e, t, n);
      case 4:
        return ve(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = ga(
          t,
          null,
          l,
          n
        ) : rt(
          e,
          t,
          l,
          n
        ), t.child;
      case 11:
        return Om(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return rt(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return rt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return rt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return l = t.pendingProps, Bn(t, t.type, l.value), rt(
          e,
          t,
          l.children,
          n
        ), t.child;
      case 9:
        return i = t.type._context, l = t.pendingProps.children, Al(t), i = dt(i), l = l(i), t.flags |= 1, rt(e, t, l, n), t.child;
      case 14:
        return Tm(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return _m(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return km(e, t, n);
      case 31:
        return l = t.pendingProps, n = t.mode, l = {
          mode: l.mode,
          children: l.children
        }, e === null ? (n = Ir(
          l,
          n
        ), n.ref = t.ref, t.child = n, n.return = t, t = n) : (n = mn(e.child, l), n.ref = t.ref, t.child = n, n.return = t, t = n), t;
      case 22:
        return Nm(e, t, n);
      case 24:
        return Al(t), l = dt(We), e === null ? (i = Yu(), i === null && (i = Ge, c = Hu(), i.pooledCache = c, c.refCount++, c !== null && (i.pooledCacheLanes |= n), i = c), t.memoizedState = {
          parent: l,
          cache: i
        }, Vu(t), Bn(t, We, i)) : ((e.lanes & n) !== 0 && (Xu(e, t), vi(t, null, null, n), pi()), i = e.memoizedState, c = t.memoizedState, i.parent !== l ? (i = { parent: l, cache: l }, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), Bn(t, We, l)) : (l = c.cache, Bn(t, We, l), l !== i.cache && ku(
          t,
          [We],
          n,
          !0
        ))), rt(
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
  function Sn(e) {
    e.flags |= 4;
  }
  function Gm(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Jh(t)) {
      if (t = Ht.current, t !== null && ((Oe & 4194048) === Oe ? en !== null : (Oe & 62914560) !== Oe && (Oe & 536870912) === 0 || t !== en))
        throw mi = qu, wd;
      e.flags |= 8192;
    }
  }
  function eo(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? mr() : 536870912, e.lanes |= t, Sa |= t);
  }
  function wi(e, t) {
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
  function qe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, l = 0;
    if (t)
      for (var i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, l |= i.subtreeFlags & 65011712, l |= i.flags & 65011712, i.return = e, i = i.sibling;
    else
      for (i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, l |= i.subtreeFlags, l |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= l, e.childLanes = n, t;
  }
  function e0(e, t, n) {
    var l = t.pendingProps;
    switch (ju(t), t.tag) {
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
        return qe(t), null;
      case 1:
        return qe(t), null;
      case 3:
        return n = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), gn(We), Re(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (ri(t) ? Sn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, yd())), qe(t), null;
      case 26:
        return n = t.memoizedState, e === null ? (Sn(t), n !== null ? (qe(t), Gm(t, n)) : (qe(t), t.flags &= -16777217)) : n ? n !== e.memoizedState ? (Sn(t), qe(t), Gm(t, n)) : (qe(t), t.flags &= -16777217) : (e.memoizedProps !== l && Sn(t), qe(t), t.flags &= -16777217), null;
      case 27:
        Me(t), n = ce.current;
        var i = t.type;
        if (e !== null && t.stateNode != null)
          e.memoizedProps !== l && Sn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(o(166));
            return qe(t), null;
          }
          e = te.current, ri(t) ? vd(t) : (e = Gh(i, l, n), t.stateNode = e, Sn(t));
        }
        return qe(t), null;
      case 5:
        if (Me(t), n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Sn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(o(166));
            return qe(t), null;
          }
          if (e = te.current, ri(t))
            vd(t);
          else {
            switch (i = ho(
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
            e[ft] = t, e[yt] = l;
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
            e: switch (ut(e, n, l), n) {
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
            e && Sn(t);
          }
        }
        return qe(t), t.flags &= -16777217, null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && Sn(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(o(166));
          if (e = ce.current, ri(t)) {
            if (e = t.stateNode, n = t.memoizedProps, l = null, i = ht, i !== null)
              switch (i.tag) {
                case 27:
                case 5:
                  l = i.memoizedProps;
              }
            e[ft] = t, e = !!(e.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || zh(e.nodeValue, n)), e || El(t);
          } else
            e = ho(e).createTextNode(
              l
            ), e[ft] = t, t.stateNode = e;
        }
        return qe(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (i = ri(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(o(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(o(317));
              i[ft] = t;
            } else
              oi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            qe(t), i = !1;
          } else
            i = yd(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
          if (!i)
            return t.flags & 256 ? (bn(t), t) : (bn(t), null);
        }
        if (bn(t), (t.flags & 128) !== 0)
          return t.lanes = n, t;
        if (n = l !== null, e = e !== null && e.memoizedState !== null, n) {
          l = t.child, i = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (i = l.alternate.memoizedState.cachePool.pool);
          var c = null;
          l.memoizedState !== null && l.memoizedState.cachePool !== null && (c = l.memoizedState.cachePool.pool), c !== i && (l.flags |= 2048);
        }
        return n !== e && n && (t.child.flags |= 8192), eo(t, t.updateQueue), qe(t), null;
      case 4:
        return Re(), e === null && Zc(t.stateNode.containerInfo), qe(t), null;
      case 10:
        return gn(t.type), qe(t), null;
      case 19:
        if (ee(Ie), i = t.memoizedState, i === null) return qe(t), null;
        if (l = (t.flags & 128) !== 0, c = i.rendering, c === null)
          if (l) wi(i, !1);
          else {
            if (Ze !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (c = $r(e), c !== null) {
                  for (t.flags |= 128, wi(i, !1), e = c.updateQueue, t.updateQueue = e, eo(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    hd(n, e), n = n.sibling;
                  return W(
                    Ie,
                    Ie.current & 1 | 2
                  ), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null && Xe() > lo && (t.flags |= 128, l = !0, wi(i, !1), t.lanes = 4194304);
          }
        else {
          if (!l)
            if (e = $r(c), e !== null) {
              if (t.flags |= 128, l = !0, e = e.updateQueue, t.updateQueue = e, eo(t, e), wi(i, !0), i.tail === null && i.tailMode === "hidden" && !c.alternate && !Ne)
                return qe(t), null;
            } else
              2 * Xe() - i.renderingStartTime > lo && n !== 536870912 && (t.flags |= 128, l = !0, wi(i, !1), t.lanes = 4194304);
          i.isBackwards ? (c.sibling = t.child, t.child = c) : (e = i.last, e !== null ? e.sibling = c : t.child = c, i.last = c);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Xe(), t.sibling = null, e = Ie.current, W(Ie, l ? e & 1 | 2 : e & 1), t) : (qe(t), null);
      case 22:
      case 23:
        return bn(t), Ju(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : qe(t), n = t.updateQueue, n !== null && eo(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== n && (t.flags |= 2048), e !== null && ee(Rl), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), gn(We), qe(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function t0(e, t) {
    switch (ju(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return gn(We), Re(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Me(t), null;
      case 13:
        if (bn(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          oi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ee(Ie), null;
      case 4:
        return Re(), null;
      case 10:
        return gn(t.type), null;
      case 22:
      case 23:
        return bn(t), Ju(), e !== null && ee(Rl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return gn(We), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ym(e, t) {
    switch (ju(t), t.tag) {
      case 3:
        gn(We), Re();
        break;
      case 26:
      case 27:
      case 5:
        Me(t);
        break;
      case 4:
        Re();
        break;
      case 13:
        bn(t);
        break;
      case 19:
        ee(Ie);
        break;
      case 10:
        gn(t.type);
        break;
      case 22:
      case 23:
        bn(t), Ju(), e !== null && ee(Rl);
        break;
      case 24:
        gn(We);
    }
  }
  function Ai(e, t) {
    try {
      var n = t.updateQueue, l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var i = l.next;
        n = i;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var c = n.create, m = n.inst;
            l = c(), m.destroy = l;
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (g) {
      He(t, t.return, g);
    }
  }
  function Xn(e, t, n) {
    try {
      var l = t.updateQueue, i = l !== null ? l.lastEffect : null;
      if (i !== null) {
        var c = i.next;
        l = c;
        do {
          if ((l.tag & e) === e) {
            var m = l.inst, g = m.destroy;
            if (g !== void 0) {
              m.destroy = void 0, i = t;
              var M = n, B = g;
              try {
                B();
              } catch (Z) {
                He(
                  i,
                  M,
                  Z
                );
              }
            }
          }
          l = l.next;
        } while (l !== c);
      }
    } catch (Z) {
      He(t, t.return, Z);
    }
  }
  function qm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Td(t, n);
      } catch (l) {
        He(e, e.return, l);
      }
    }
  }
  function Vm(e, t, n) {
    n.props = Ml(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (l) {
      He(e, t, l);
    }
  }
  function Ri(e, t) {
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
      He(e, t, i);
    }
  }
  function tn(e, t) {
    var n = e.ref, l = e.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (i) {
          He(e, t, i);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (i) {
          He(e, t, i);
        }
      else n.current = null;
  }
  function Xm(e) {
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
      He(e, e.return, i);
    }
  }
  function Ec(e, t, n) {
    try {
      var l = e.stateNode;
      E0(l, e.type, n, t), l[yt] = t;
    } catch (i) {
      He(e, e.return, i);
    }
  }
  function Qm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Wn(e.type) || e.tag === 4;
  }
  function wc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Qm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Wn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ac(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = mo));
    else if (l !== 4 && (l === 27 && Wn(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (Ac(e, t, n), e = e.sibling; e !== null; )
        Ac(e, t, n), e = e.sibling;
  }
  function to(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (l !== 4 && (l === 27 && Wn(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (to(e, t, n), e = e.sibling; e !== null; )
        to(e, t, n), e = e.sibling;
  }
  function Zm(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var l = e.type, i = t.attributes; i.length; )
        t.removeAttributeNode(i[0]);
      ut(t, l, n), t[ft] = e, t[yt] = n;
    } catch (c) {
      He(e, e.return, c);
    }
  }
  var En = !1, Je = !1, Rc = !1, Km = typeof WeakSet == "function" ? WeakSet : Set, lt = null;
  function n0(e, t) {
    if (e = e.containerInfo, $c = xo, e = ad(e), wu(e)) {
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
            var m = 0, g = -1, M = -1, B = 0, Z = 0, P = e, H = null;
            t: for (; ; ) {
              for (var G; P !== n || i !== 0 && P.nodeType !== 3 || (g = m + i), P !== c || l !== 0 && P.nodeType !== 3 || (M = m + l), P.nodeType === 3 && (m += P.nodeValue.length), (G = P.firstChild) !== null; )
                H = P, P = G;
              for (; ; ) {
                if (P === e) break t;
                if (H === n && ++B === i && (g = m), H === c && ++Z === l && (M = m), (G = P.nextSibling) !== null) break;
                P = H, H = P.parentNode;
              }
              P = G;
            }
            n = g === -1 || M === -1 ? null : { start: g, end: M };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Pc = { focusedElem: e, selectionRange: n }, xo = !1, lt = t; lt !== null; )
      if (t = lt, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = t, lt = e;
      else
        for (; lt !== null; ) {
          switch (t = lt, c = t.alternate, e = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && c !== null) {
                e = void 0, n = t, i = c.memoizedProps, c = c.memoizedState, l = n.stateNode;
                try {
                  var ye = Ml(
                    n.type,
                    i,
                    n.elementType === n.type
                  );
                  e = l.getSnapshotBeforeUpdate(
                    ye,
                    c
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (he) {
                  He(
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
                  Ic(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ic(e);
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
            e.return = t.return, lt = e;
            break;
          }
          lt = t.return;
        }
  }
  function Jm(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Qn(e, n), l & 4 && Ai(5, n);
        break;
      case 1:
        if (Qn(e, n), l & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (m) {
              He(n, n.return, m);
            }
          else {
            var i = Ml(
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
            } catch (m) {
              He(
                n,
                n.return,
                m
              );
            }
          }
        l & 64 && qm(n), l & 512 && Ri(n, n.return);
        break;
      case 3:
        if (Qn(e, n), l & 64 && (e = n.updateQueue, e !== null)) {
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
            Td(e, t);
          } catch (m) {
            He(n, n.return, m);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Zm(n);
      case 26:
      case 5:
        Qn(e, n), t === null && l & 4 && Xm(n), l & 512 && Ri(n, n.return);
        break;
      case 12:
        Qn(e, n);
        break;
      case 13:
        Qn(e, n), l & 4 && Fm(e, n), l & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = f0.bind(
          null,
          n
        ), T0(e, n))));
        break;
      case 22:
        if (l = n.memoizedState !== null || En, !l) {
          t = t !== null && t.memoizedState !== null || Je, i = En;
          var c = Je;
          En = l, (Je = t) && !c ? Zn(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : Qn(e, n), En = i, Je = c;
        }
        break;
      case 30:
        break;
      default:
        Qn(e, n);
    }
  }
  function $m(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, $m(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && au(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ye = null, St = !1;
  function wn(e, t, n) {
    for (n = n.child; n !== null; )
      Pm(e, t, n), n = n.sibling;
  }
  function Pm(e, t, n) {
    if (st && typeof st.onCommitFiberUnmount == "function")
      try {
        st.onCommitFiberUnmount(dl, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Je || tn(n, t), wn(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Je || tn(n, t);
        var l = Ye, i = St;
        Wn(n.type) && (Ye = n.stateNode, St = !1), wn(
          e,
          t,
          n
        ), ji(n.stateNode), Ye = l, St = i;
        break;
      case 5:
        Je || tn(n, t);
      case 6:
        if (l = Ye, i = St, Ye = null, wn(
          e,
          t,
          n
        ), Ye = l, St = i, Ye !== null)
          if (St)
            try {
              (Ye.nodeType === 9 ? Ye.body : Ye.nodeName === "HTML" ? Ye.ownerDocument.body : Ye).removeChild(n.stateNode);
            } catch (c) {
              He(
                n,
                t,
                c
              );
            }
          else
            try {
              Ye.removeChild(n.stateNode);
            } catch (c) {
              He(
                n,
                t,
                c
              );
            }
        break;
      case 18:
        Ye !== null && (St ? (e = Ye, kh(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), qi(e)) : kh(Ye, n.stateNode));
        break;
      case 4:
        l = Ye, i = St, Ye = n.stateNode.containerInfo, St = !0, wn(
          e,
          t,
          n
        ), Ye = l, St = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Je || Xn(2, n, t), Je || Xn(4, n, t), wn(
          e,
          t,
          n
        );
        break;
      case 1:
        Je || (tn(n, t), l = n.stateNode, typeof l.componentWillUnmount == "function" && Vm(
          n,
          t,
          l
        )), wn(
          e,
          t,
          n
        );
        break;
      case 21:
        wn(
          e,
          t,
          n
        );
        break;
      case 22:
        Je = (l = Je) || n.memoizedState !== null, wn(
          e,
          t,
          n
        ), Je = l;
        break;
      default:
        wn(
          e,
          t,
          n
        );
    }
  }
  function Fm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        qi(e);
      } catch (n) {
        He(t, t.return, n);
      }
  }
  function l0(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Km()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Km()), t;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function Cc(e, t) {
    var n = l0(e);
    t.forEach(function(l) {
      var i = d0.bind(null, e, l);
      n.has(l) || (n.add(l), l.then(i, i));
    });
  }
  function Ct(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var i = n[l], c = e, m = t, g = m;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (Wn(g.type)) {
                Ye = g.stateNode, St = !1;
                break e;
              }
              break;
            case 5:
              Ye = g.stateNode, St = !1;
              break e;
            case 3:
            case 4:
              Ye = g.stateNode.containerInfo, St = !0;
              break e;
          }
          g = g.return;
        }
        if (Ye === null) throw Error(o(160));
        Pm(c, m, i), Ye = null, St = !1, c = i.alternate, c !== null && (c.return = null), i.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        Wm(t, e), t = t.sibling;
  }
  var Qt = null;
  function Wm(e, t) {
    var n = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ct(t, e), Mt(e), l & 4 && (Xn(3, e, e.return), Ai(3, e), Xn(5, e, e.return));
        break;
      case 1:
        Ct(t, e), Mt(e), l & 512 && (Je || n === null || tn(n, n.return)), l & 64 && En && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
        break;
      case 26:
        var i = Qt;
        if (Ct(t, e), Mt(e), l & 512 && (Je || n === null || tn(n, n.return)), l & 4) {
          var c = n !== null ? n.memoizedState : null;
          if (l = e.memoizedState, n === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, n = e.memoizedProps, i = i.ownerDocument || i;
                  t: switch (l) {
                    case "title":
                      c = i.getElementsByTagName("title")[0], (!c || c[$a] || c[ft] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = i.createElement(l), i.head.insertBefore(
                        c,
                        i.querySelector("head > title")
                      )), ut(c, l, n), c[ft] = e, tt(c), l = c;
                      break e;
                    case "link":
                      var m = Zh(
                        "link",
                        "href",
                        i
                      ).get(l + (n.href || ""));
                      if (m) {
                        for (var g = 0; g < m.length; g++)
                          if (c = m[g], c.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && c.getAttribute("rel") === (n.rel == null ? null : n.rel) && c.getAttribute("title") === (n.title == null ? null : n.title) && c.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            m.splice(g, 1);
                            break t;
                          }
                      }
                      c = i.createElement(l), ut(c, l, n), i.head.appendChild(c);
                      break;
                    case "meta":
                      if (m = Zh(
                        "meta",
                        "content",
                        i
                      ).get(l + (n.content || ""))) {
                        for (g = 0; g < m.length; g++)
                          if (c = m[g], c.getAttribute("content") === (n.content == null ? null : "" + n.content) && c.getAttribute("name") === (n.name == null ? null : n.name) && c.getAttribute("property") === (n.property == null ? null : n.property) && c.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && c.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            m.splice(g, 1);
                            break t;
                          }
                      }
                      c = i.createElement(l), ut(c, l, n), i.head.appendChild(c);
                      break;
                    default:
                      throw Error(o(468, l));
                  }
                  c[ft] = e, tt(c), l = c;
                }
                e.stateNode = l;
              } else
                Kh(
                  i,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Qh(
                i,
                l,
                e.memoizedProps
              );
          else
            c !== l ? (c === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : c.count--, l === null ? Kh(
              i,
              e.type,
              e.stateNode
            ) : Qh(
              i,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && Ec(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        Ct(t, e), Mt(e), l & 512 && (Je || n === null || tn(n, n.return)), n !== null && l & 4 && Ec(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Ct(t, e), Mt(e), l & 512 && (Je || n === null || tn(n, n.return)), e.flags & 32) {
          i = e.stateNode;
          try {
            Il(i, "");
          } catch (G) {
            He(e, e.return, G);
          }
        }
        l & 4 && e.stateNode != null && (i = e.memoizedProps, Ec(
          e,
          i,
          n !== null ? n.memoizedProps : i
        )), l & 1024 && (Rc = !0);
        break;
      case 6:
        if (Ct(t, e), Mt(e), l & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          l = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = l;
          } catch (G) {
            He(e, e.return, G);
          }
        }
        break;
      case 3:
        if (go = null, i = Qt, Qt = po(t.containerInfo), Ct(t, e), Qt = i, Mt(e), l & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            qi(t.containerInfo);
          } catch (G) {
            He(e, e.return, G);
          }
        Rc && (Rc = !1, Im(e));
        break;
      case 4:
        l = Qt, Qt = po(
          e.stateNode.containerInfo
        ), Ct(t, e), Mt(e), Qt = l;
        break;
      case 12:
        Ct(t, e), Mt(e);
        break;
      case 13:
        Ct(t, e), Mt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Dc = Xe()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Cc(e, l)));
        break;
      case 22:
        i = e.memoizedState !== null;
        var M = n !== null && n.memoizedState !== null, B = En, Z = Je;
        if (En = B || i, Je = Z || M, Ct(t, e), Je = Z, En = B, Mt(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, i && (n === null || M || En || Je || Ol(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                M = n = t;
                try {
                  if (c = M.stateNode, i)
                    m = c.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    g = M.stateNode;
                    var P = M.memoizedProps.style, H = P != null && P.hasOwnProperty("display") ? P.display : null;
                    g.style.display = H == null || typeof H == "boolean" ? "" : ("" + H).trim();
                  }
                } catch (G) {
                  He(M, M.return, G);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                M = t;
                try {
                  M.stateNode.nodeValue = i ? "" : M.memoizedProps;
                } catch (G) {
                  He(M, M.return, G);
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
        l & 4 && (l = e.updateQueue, l !== null && (n = l.retryQueue, n !== null && (l.retryQueue = null, Cc(e, n))));
        break;
      case 19:
        Ct(t, e), Mt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Cc(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ct(t, e), Mt(e);
    }
  }
  function Mt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (Qm(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(o(160));
        switch (n.tag) {
          case 27:
            var i = n.stateNode, c = wc(e);
            to(e, c, i);
            break;
          case 5:
            var m = n.stateNode;
            n.flags & 32 && (Il(m, ""), n.flags &= -33);
            var g = wc(e);
            to(e, g, m);
            break;
          case 3:
          case 4:
            var M = n.stateNode.containerInfo, B = wc(e);
            Ac(
              e,
              B,
              M
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (Z) {
        He(e, e.return, Z);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Im(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Im(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Qn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Jm(e, t.alternate, t), t = t.sibling;
  }
  function Ol(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Xn(4, t, t.return), Ol(t);
          break;
        case 1:
          tn(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Vm(
            t,
            t.return,
            n
          ), Ol(t);
          break;
        case 27:
          ji(t.stateNode);
        case 26:
        case 5:
          tn(t, t.return), Ol(t);
          break;
        case 22:
          t.memoizedState === null && Ol(t);
          break;
        case 30:
          Ol(t);
          break;
        default:
          Ol(t);
      }
      e = e.sibling;
    }
  }
  function Zn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, i = e, c = t, m = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Zn(
            i,
            c,
            n
          ), Ai(4, c);
          break;
        case 1:
          if (Zn(
            i,
            c,
            n
          ), l = c, i = l.stateNode, typeof i.componentDidMount == "function")
            try {
              i.componentDidMount();
            } catch (B) {
              He(l, l.return, B);
            }
          if (l = c, i = l.updateQueue, i !== null) {
            var g = l.stateNode;
            try {
              var M = i.shared.hiddenCallbacks;
              if (M !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < M.length; i++)
                  Od(M[i], g);
            } catch (B) {
              He(l, l.return, B);
            }
          }
          n && m & 64 && qm(c), Ri(c, c.return);
          break;
        case 27:
          Zm(c);
        case 26:
        case 5:
          Zn(
            i,
            c,
            n
          ), n && l === null && m & 4 && Xm(c), Ri(c, c.return);
          break;
        case 12:
          Zn(
            i,
            c,
            n
          );
          break;
        case 13:
          Zn(
            i,
            c,
            n
          ), n && m & 4 && Fm(i, c);
          break;
        case 22:
          c.memoizedState === null && Zn(
            i,
            c,
            n
          ), Ri(c, c.return);
          break;
        case 30:
          break;
        default:
          Zn(
            i,
            c,
            n
          );
      }
      t = t.sibling;
    }
  }
  function Mc(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && si(n));
  }
  function Oc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && si(e));
  }
  function nn(e, t, n, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        eh(
          e,
          t,
          n,
          l
        ), t = t.sibling;
  }
  function eh(e, t, n, l) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        nn(
          e,
          t,
          n,
          l
        ), i & 2048 && Ai(9, t);
        break;
      case 1:
        nn(
          e,
          t,
          n,
          l
        );
        break;
      case 3:
        nn(
          e,
          t,
          n,
          l
        ), i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && si(e)));
        break;
      case 12:
        if (i & 2048) {
          nn(
            e,
            t,
            n,
            l
          ), e = t.stateNode;
          try {
            var c = t.memoizedProps, m = c.id, g = c.onPostCommit;
            typeof g == "function" && g(
              m,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (M) {
            He(t, t.return, M);
          }
        } else
          nn(
            e,
            t,
            n,
            l
          );
        break;
      case 13:
        nn(
          e,
          t,
          n,
          l
        );
        break;
      case 23:
        break;
      case 22:
        c = t.stateNode, m = t.alternate, t.memoizedState !== null ? c._visibility & 2 ? nn(
          e,
          t,
          n,
          l
        ) : Ci(e, t) : c._visibility & 2 ? nn(
          e,
          t,
          n,
          l
        ) : (c._visibility |= 2, ya(
          e,
          t,
          n,
          l,
          (t.subtreeFlags & 10256) !== 0
        )), i & 2048 && Mc(m, t);
        break;
      case 24:
        nn(
          e,
          t,
          n,
          l
        ), i & 2048 && Oc(t.alternate, t);
        break;
      default:
        nn(
          e,
          t,
          n,
          l
        );
    }
  }
  function ya(e, t, n, l, i) {
    for (i = i && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var c = e, m = t, g = n, M = l, B = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          ya(
            c,
            m,
            g,
            M,
            i
          ), Ai(8, m);
          break;
        case 23:
          break;
        case 22:
          var Z = m.stateNode;
          m.memoizedState !== null ? Z._visibility & 2 ? ya(
            c,
            m,
            g,
            M,
            i
          ) : Ci(
            c,
            m
          ) : (Z._visibility |= 2, ya(
            c,
            m,
            g,
            M,
            i
          )), i && B & 2048 && Mc(
            m.alternate,
            m
          );
          break;
        case 24:
          ya(
            c,
            m,
            g,
            M,
            i
          ), i && B & 2048 && Oc(m.alternate, m);
          break;
        default:
          ya(
            c,
            m,
            g,
            M,
            i
          );
      }
      t = t.sibling;
    }
  }
  function Ci(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, l = t, i = l.flags;
        switch (l.tag) {
          case 22:
            Ci(n, l), i & 2048 && Mc(
              l.alternate,
              l
            );
            break;
          case 24:
            Ci(n, l), i & 2048 && Oc(l.alternate, l);
            break;
          default:
            Ci(n, l);
        }
        t = t.sibling;
      }
  }
  var Mi = 8192;
  function ba(e) {
    if (e.subtreeFlags & Mi)
      for (e = e.child; e !== null; )
        th(e), e = e.sibling;
  }
  function th(e) {
    switch (e.tag) {
      case 26:
        ba(e), e.flags & Mi && e.memoizedState !== null && q0(
          Qt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        ba(e);
        break;
      case 3:
      case 4:
        var t = Qt;
        Qt = po(e.stateNode.containerInfo), ba(e), Qt = t;
        break;
      case 22:
        e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Mi, Mi = 16777216, ba(e), Mi = t) : ba(e));
        break;
      default:
        ba(e);
    }
  }
  function nh(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Oi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          lt = l, ah(
            l,
            e
          );
        }
      nh(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        lh(e), e = e.sibling;
  }
  function lh(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Oi(e), e.flags & 2048 && Xn(9, e, e.return);
        break;
      case 3:
        Oi(e);
        break;
      case 12:
        Oi(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, no(e)) : Oi(e);
        break;
      default:
        Oi(e);
    }
  }
  function no(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          lt = l, ah(
            l,
            e
          );
        }
      nh(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Xn(8, t, t.return), no(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, no(t));
          break;
        default:
          no(t);
      }
      e = e.sibling;
    }
  }
  function ah(e, t) {
    for (; lt !== null; ) {
      var n = lt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Xn(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          si(n.memoizedState.cache);
      }
      if (l = n.child, l !== null) l.return = n, lt = l;
      else
        e: for (n = e; lt !== null; ) {
          l = lt;
          var i = l.sibling, c = l.return;
          if ($m(l), l === n) {
            lt = null;
            break e;
          }
          if (i !== null) {
            i.return = c, lt = i;
            break e;
          }
          lt = c;
        }
    }
  }
  var a0 = {
    getCacheForType: function(e) {
      var t = dt(We), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    }
  }, i0 = typeof WeakMap == "function" ? WeakMap : Map, De = 0, Ge = null, we = null, Oe = 0, ze = 0, Ot = null, Kn = !1, xa = !1, Tc = !1, An = 0, Ze = 0, Jn = 0, Tl = 0, _c = 0, Gt = 0, Sa = 0, Ti = null, Et = null, Nc = !1, Dc = 0, lo = 1 / 0, ao = null, $n = null, ot = 0, Pn = null, Ea = null, wa = 0, zc = 0, jc = null, ih = null, _i = 0, Uc = null;
  function Tt() {
    if ((De & 2) !== 0 && Oe !== 0)
      return Oe & -Oe;
    if (D.T !== null) {
      var e = sa;
      return e !== 0 ? e : qc();
    }
    return Sf();
  }
  function rh() {
    Gt === 0 && (Gt = (Oe & 536870912) === 0 || Ne ? Za() : 536870912);
    var e = Ht.current;
    return e !== null && (e.flags |= 32), Gt;
  }
  function _t(e, t, n) {
    (e === Ge && (ze === 2 || ze === 9) || e.cancelPendingCommit !== null) && (Aa(e, 0), Fn(
      e,
      Oe,
      Gt,
      !1
    )), jn(e, n), ((De & 2) === 0 || e !== Ge) && (e === Ge && ((De & 2) === 0 && (Tl |= n), Ze === 4 && Fn(
      e,
      Oe,
      Gt,
      !1
    )), ln(e));
  }
  function oh(e, t, n) {
    if ((De & 6) !== 0) throw Error(o(327));
    var l = !n && (t & 124) === 0 && (t & e.expiredLanes) === 0 || ml(e, t), i = l ? u0(e, t) : kc(e, t, !0), c = l;
    do {
      if (i === 0) {
        xa && !l && Fn(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, c && !r0(n)) {
          i = kc(e, t, !1), c = !1;
          continue;
        }
        if (i === 2) {
          if (c = t, e.errorRecoveryDisabledLanes & c)
            var m = 0;
          else
            m = e.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            t = m;
            e: {
              var g = e;
              i = Ti;
              var M = g.current.memoizedState.isDehydrated;
              if (M && (Aa(g, m).flags |= 256), m = kc(
                g,
                m,
                !1
              ), m !== 2) {
                if (Tc && !M) {
                  g.errorRecoveryDisabledLanes |= c, Tl |= c, i = 4;
                  break e;
                }
                c = Et, Et = i, c !== null && (Et === null ? Et = c : Et.push.apply(
                  Et,
                  c
                ));
              }
              i = m;
            }
            if (c = !1, i !== 2) continue;
          }
        }
        if (i === 1) {
          Aa(e, 0), Fn(e, t, 0, !0);
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
              Fn(
                l,
                t,
                Gt,
                !Kn
              );
              break e;
            case 2:
              Et = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (i = Dc + 300 - Xe(), 10 < i)) {
            if (Fn(
              l,
              t,
              Gt,
              !Kn
            ), Vl(l, 0, !0) !== 0) break e;
            l.timeoutHandle = Lh(
              uh.bind(
                null,
                l,
                n,
                Et,
                ao,
                Nc,
                t,
                Gt,
                Tl,
                Sa,
                Kn,
                c,
                2,
                -0,
                0
              ),
              i
            );
            break e;
          }
          uh(
            l,
            n,
            Et,
            ao,
            Nc,
            t,
            Gt,
            Tl,
            Sa,
            Kn,
            c,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    ln(e);
  }
  function uh(e, t, n, l, i, c, m, g, M, B, Z, P, H, G) {
    if (e.timeoutHandle = -1, P = t.subtreeFlags, (P & 8192 || (P & 16785408) === 16785408) && (Bi = { stylesheets: null, count: 0, unsuspend: Y0 }, th(t), P = V0(), P !== null)) {
      e.cancelPendingCommit = P(
        ph.bind(
          null,
          e,
          t,
          c,
          n,
          l,
          i,
          m,
          g,
          M,
          Z,
          1,
          H,
          G
        )
      ), Fn(e, c, m, !B);
      return;
    }
    ph(
      e,
      t,
      c,
      n,
      l,
      i,
      m,
      g,
      M
    );
  }
  function r0(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var l = 0; l < n.length; l++) {
          var i = n[l], c = i.getSnapshot;
          i = i.value;
          try {
            if (!At(c(), i)) return !1;
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
  function Fn(e, t, n, l) {
    t &= ~_c, t &= ~Tl, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var i = t; 0 < i; ) {
      var c = 31 - it(i), m = 1 << c;
      l[c] = -1, i &= ~m;
    }
    n !== 0 && pr(e, n, t);
  }
  function io() {
    return (De & 6) === 0 ? (Ni(0), !1) : !0;
  }
  function Lc() {
    if (we !== null) {
      if (ze === 0)
        var e = we.return;
      else
        e = we, vn = wl = null, Iu(e), va = null, Si = 0, e = we;
      for (; e !== null; )
        Ym(e.alternate, e), e = e.return;
      we = null;
    }
  }
  function Aa(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, A0(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Lc(), Ge = e, we = n = mn(e.current, null), Oe = t, ze = 0, Ot = null, Kn = !1, xa = ml(e, t), Tc = !1, Sa = Gt = _c = Tl = Jn = Ze = 0, Et = Ti = null, Nc = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var i = 31 - it(l), c = 1 << i;
        t |= e[i], l &= ~c;
      }
    return An = t, Mr(), n;
  }
  function ch(e, t) {
    xe = null, D.H = Zr, t === di || t === Lr ? (t = Cd(), ze = 3) : t === wd ? (t = Cd(), ze = 4) : ze = t === Mm ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Ot = t, we === null && (Ze = 1, Fr(
      e,
      Ut(t, e.current)
    ));
  }
  function sh() {
    var e = D.H;
    return D.H = Zr, e === null ? Zr : e;
  }
  function fh() {
    var e = D.A;
    return D.A = a0, e;
  }
  function Bc() {
    Ze = 4, Kn || (Oe & 4194048) !== Oe && Ht.current !== null || (xa = !0), (Jn & 134217727) === 0 && (Tl & 134217727) === 0 || Ge === null || Fn(
      Ge,
      Oe,
      Gt,
      !1
    );
  }
  function kc(e, t, n) {
    var l = De;
    De |= 2;
    var i = sh(), c = fh();
    (Ge !== e || Oe !== t) && (ao = null, Aa(e, t)), t = !1;
    var m = Ze;
    e: do
      try {
        if (ze !== 0 && we !== null) {
          var g = we, M = Ot;
          switch (ze) {
            case 8:
              Lc(), m = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Ht.current === null && (t = !0);
              var B = ze;
              if (ze = 0, Ot = null, Ra(e, g, M, B), n && xa) {
                m = 0;
                break e;
              }
              break;
            default:
              B = ze, ze = 0, Ot = null, Ra(e, g, M, B);
          }
        }
        o0(), m = Ze;
        break;
      } catch (Z) {
        ch(e, Z);
      }
    while (!0);
    return t && e.shellSuspendCounter++, vn = wl = null, De = l, D.H = i, D.A = c, we === null && (Ge = null, Oe = 0, Mr()), m;
  }
  function o0() {
    for (; we !== null; ) dh(we);
  }
  function u0(e, t) {
    var n = De;
    De |= 2;
    var l = sh(), i = fh();
    Ge !== e || Oe !== t ? (ao = null, lo = Xe() + 500, Aa(e, t)) : xa = ml(
      e,
      t
    );
    e: do
      try {
        if (ze !== 0 && we !== null) {
          t = we;
          var c = Ot;
          t: switch (ze) {
            case 1:
              ze = 0, Ot = null, Ra(e, t, c, 1);
              break;
            case 2:
            case 9:
              if (Ad(c)) {
                ze = 0, Ot = null, mh(t);
                break;
              }
              t = function() {
                ze !== 2 && ze !== 9 || Ge !== e || (ze = 7), ln(e);
              }, c.then(t, t);
              break e;
            case 3:
              ze = 7;
              break e;
            case 4:
              ze = 5;
              break e;
            case 7:
              Ad(c) ? (ze = 0, Ot = null, mh(t)) : (ze = 0, Ot = null, Ra(e, t, c, 7));
              break;
            case 5:
              var m = null;
              switch (we.tag) {
                case 26:
                  m = we.memoizedState;
                case 5:
                case 27:
                  var g = we;
                  if (!m || Jh(m)) {
                    ze = 0, Ot = null;
                    var M = g.sibling;
                    if (M !== null) we = M;
                    else {
                      var B = g.return;
                      B !== null ? (we = B, ro(B)) : we = null;
                    }
                    break t;
                  }
              }
              ze = 0, Ot = null, Ra(e, t, c, 5);
              break;
            case 6:
              ze = 0, Ot = null, Ra(e, t, c, 6);
              break;
            case 8:
              Lc(), Ze = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        c0();
        break;
      } catch (Z) {
        ch(e, Z);
      }
    while (!0);
    return vn = wl = null, D.H = l, D.A = i, De = n, we !== null ? 0 : (Ge = null, Oe = 0, Mr(), Ze);
  }
  function c0() {
    for (; we !== null && !Fe(); )
      dh(we);
  }
  function dh(e) {
    var t = Hm(e.alternate, e, An);
    e.memoizedProps = e.pendingProps, t === null ? ro(e) : we = t;
  }
  function mh(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = zm(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Oe
        );
        break;
      case 11:
        t = zm(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Oe
        );
        break;
      case 5:
        Iu(t);
      default:
        Ym(n, t), t = we = hd(t, An), t = Hm(n, t, An);
    }
    e.memoizedProps = e.pendingProps, t === null ? ro(e) : we = t;
  }
  function Ra(e, t, n, l) {
    vn = wl = null, Iu(t), va = null, Si = 0;
    var i = t.return;
    try {
      if (Wy(
        e,
        i,
        t,
        n,
        Oe
      )) {
        Ze = 1, Fr(
          e,
          Ut(n, e.current)
        ), we = null;
        return;
      }
    } catch (c) {
      if (i !== null) throw we = i, c;
      Ze = 1, Fr(
        e,
        Ut(n, e.current)
      ), we = null;
      return;
    }
    t.flags & 32768 ? (Ne || l === 1 ? e = !0 : xa || (Oe & 536870912) !== 0 ? e = !1 : (Kn = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Ht.current, l !== null && l.tag === 13 && (l.flags |= 16384))), hh(t, e)) : ro(t);
  }
  function ro(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        hh(
          t,
          Kn
        );
        return;
      }
      e = t.return;
      var n = e0(
        t.alternate,
        t,
        An
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
    Ze === 0 && (Ze = 5);
  }
  function hh(e, t) {
    do {
      var n = t0(e.alternate, e);
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
    Ze = 6, we = null;
  }
  function ph(e, t, n, l, i, c, m, g, M) {
    e.cancelPendingCommit = null;
    do
      oo();
    while (ot !== 0);
    if ((De & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (c = t.lanes | t.childLanes, c |= Ou, hr(
        e,
        n,
        c,
        m,
        g,
        M
      ), e === Ge && (we = Ge = null, Oe = 0), Ea = t, Pn = e, wa = n, zc = c, jc = i, ih = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, m0(Ft, function() {
        return xh(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = D.T, D.T = null, i = X.p, X.p = 2, m = De, De |= 4;
        try {
          n0(e, t, n);
        } finally {
          De = m, X.p = i, D.T = l;
        }
      }
      ot = 1, vh(), gh(), yh();
    }
  }
  function vh() {
    if (ot === 1) {
      ot = 0;
      var e = Pn, t = Ea, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = D.T, D.T = null;
        var l = X.p;
        X.p = 2;
        var i = De;
        De |= 4;
        try {
          Wm(t, e);
          var c = Pc, m = ad(e.containerInfo), g = c.focusedElem, M = c.selectionRange;
          if (m !== g && g && g.ownerDocument && ld(
            g.ownerDocument.documentElement,
            g
          )) {
            if (M !== null && wu(g)) {
              var B = M.start, Z = M.end;
              if (Z === void 0 && (Z = B), "selectionStart" in g)
                g.selectionStart = B, g.selectionEnd = Math.min(
                  Z,
                  g.value.length
                );
              else {
                var P = g.ownerDocument || document, H = P && P.defaultView || window;
                if (H.getSelection) {
                  var G = H.getSelection(), ye = g.textContent.length, he = Math.min(M.start, ye), Le = M.end === void 0 ? he : Math.min(M.end, ye);
                  !G.extend && he > Le && (m = Le, Le = he, he = m);
                  var N = nd(
                    g,
                    he
                  ), _ = nd(
                    g,
                    Le
                  );
                  if (N && _ && (G.rangeCount !== 1 || G.anchorNode !== N.node || G.anchorOffset !== N.offset || G.focusNode !== _.node || G.focusOffset !== _.offset)) {
                    var L = P.createRange();
                    L.setStart(N.node, N.offset), G.removeAllRanges(), he > Le ? (G.addRange(L), G.extend(_.node, _.offset)) : (L.setEnd(_.node, _.offset), G.addRange(L));
                  }
                }
              }
            }
            for (P = [], G = g; G = G.parentNode; )
              G.nodeType === 1 && P.push({
                element: G,
                left: G.scrollLeft,
                top: G.scrollTop
              });
            for (typeof g.focus == "function" && g.focus(), g = 0; g < P.length; g++) {
              var $ = P[g];
              $.element.scrollLeft = $.left, $.element.scrollTop = $.top;
            }
          }
          xo = !!$c, Pc = $c = null;
        } finally {
          De = i, X.p = l, D.T = n;
        }
      }
      e.current = t, ot = 2;
    }
  }
  function gh() {
    if (ot === 2) {
      ot = 0;
      var e = Pn, t = Ea, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = D.T, D.T = null;
        var l = X.p;
        X.p = 2;
        var i = De;
        De |= 4;
        try {
          Jm(e, t.alternate, t);
        } finally {
          De = i, X.p = l, D.T = n;
        }
      }
      ot = 3;
    }
  }
  function yh() {
    if (ot === 4 || ot === 3) {
      ot = 0, gt();
      var e = Pn, t = Ea, n = wa, l = ih;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? ot = 5 : (ot = 0, Ea = Pn = null, bh(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (i === 0 && ($n = null), Ja(n), t = t.stateNode, st && typeof st.onCommitFiberRoot == "function")
        try {
          st.onCommitFiberRoot(
            dl,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        t = D.T, i = X.p, X.p = 2, D.T = null;
        try {
          for (var c = e.onRecoverableError, m = 0; m < l.length; m++) {
            var g = l[m];
            c(g.value, {
              componentStack: g.stack
            });
          }
        } finally {
          D.T = t, X.p = i;
        }
      }
      (wa & 3) !== 0 && oo(), ln(e), i = e.pendingLanes, (n & 4194090) !== 0 && (i & 42) !== 0 ? e === Uc ? _i++ : (_i = 0, Uc = e) : _i = 0, Ni(0);
    }
  }
  function bh(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, si(t)));
  }
  function oo(e) {
    return vh(), gh(), yh(), xh();
  }
  function xh() {
    if (ot !== 5) return !1;
    var e = Pn, t = zc;
    zc = 0;
    var n = Ja(wa), l = D.T, i = X.p;
    try {
      X.p = 32 > n ? 32 : n, D.T = null, n = jc, jc = null;
      var c = Pn, m = wa;
      if (ot = 0, Ea = Pn = null, wa = 0, (De & 6) !== 0) throw Error(o(331));
      var g = De;
      if (De |= 4, lh(c.current), eh(
        c,
        c.current,
        m,
        n
      ), De = g, Ni(0, !1), st && typeof st.onPostCommitFiberRoot == "function")
        try {
          st.onPostCommitFiberRoot(dl, c);
        } catch {
        }
      return !0;
    } finally {
      X.p = i, D.T = l, bh(e, t);
    }
  }
  function Sh(e, t, n) {
    t = Ut(n, t), t = mc(e.stateNode, t, 2), e = Gn(e, t, 2), e !== null && (jn(e, 2), ln(e));
  }
  function He(e, t, n) {
    if (e.tag === 3)
      Sh(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Sh(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && ($n === null || !$n.has(l))) {
            e = Ut(n, e), n = Rm(2), l = Gn(t, n, 2), l !== null && (Cm(
              n,
              l,
              t,
              e
            ), jn(l, 2), ln(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function Hc(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new i0();
      var i = /* @__PURE__ */ new Set();
      l.set(t, i);
    } else
      i = l.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), l.set(t, i));
    i.has(n) || (Tc = !0, i.add(n), e = s0.bind(null, e, t, n), t.then(e, e));
  }
  function s0(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ge === e && (Oe & n) === n && (Ze === 4 || Ze === 3 && (Oe & 62914560) === Oe && 300 > Xe() - Dc ? (De & 2) === 0 && Aa(e, 0) : _c |= n, Sa === Oe && (Sa = 0)), ln(e);
  }
  function Eh(e, t) {
    t === 0 && (t = mr()), e = ra(e, t), e !== null && (jn(e, t), ln(e));
  }
  function f0(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Eh(e, n);
  }
  function d0(e, t) {
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
    l !== null && l.delete(t), Eh(e, n);
  }
  function m0(e, t) {
    return Ce(e, t);
  }
  var uo = null, Ca = null, Gc = !1, co = !1, Yc = !1, _l = 0;
  function ln(e) {
    e !== Ca && e.next === null && (Ca === null ? uo = Ca = e : Ca = Ca.next = e), co = !0, Gc || (Gc = !0, p0());
  }
  function Ni(e, t) {
    if (!Yc && co) {
      Yc = !0;
      do
        for (var n = !1, l = uo; l !== null; ) {
          if (e !== 0) {
            var i = l.pendingLanes;
            if (i === 0) var c = 0;
            else {
              var m = l.suspendedLanes, g = l.pingedLanes;
              c = (1 << 31 - it(42 | e) + 1) - 1, c &= i & ~(m & ~g), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
            }
            c !== 0 && (n = !0, Ch(l, c));
          } else
            c = Oe, c = Vl(
              l,
              l === Ge ? c : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (c & 3) === 0 || ml(l, c) || (n = !0, Ch(l, c));
          l = l.next;
        }
      while (n);
      Yc = !1;
    }
  }
  function h0() {
    wh();
  }
  function wh() {
    co = Gc = !1;
    var e = 0;
    _l !== 0 && (w0() && (e = _l), _l = 0);
    for (var t = Xe(), n = null, l = uo; l !== null; ) {
      var i = l.next, c = Ah(l, t);
      c === 0 ? (l.next = null, n === null ? uo = i : n.next = i, i === null && (Ca = n)) : (n = l, (e !== 0 || (c & 3) !== 0) && (co = !0)), l = i;
    }
    Ni(e);
  }
  function Ah(e, t) {
    for (var n = e.suspendedLanes, l = e.pingedLanes, i = e.expirationTimes, c = e.pendingLanes & -62914561; 0 < c; ) {
      var m = 31 - it(c), g = 1 << m, M = i[m];
      M === -1 ? ((g & n) === 0 || (g & l) !== 0) && (i[m] = nu(g, t)) : M <= t && (e.expiredLanes |= g), c &= ~g;
    }
    if (t = Ge, n = Oe, n = Vl(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, n === 0 || e === t && (ze === 2 || ze === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && ke(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || ml(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (l !== null && ke(l), Ja(n)) {
        case 2:
        case 8:
          n = Pt;
          break;
        case 32:
          n = Ft;
          break;
        case 268435456:
          n = Yl;
          break;
        default:
          n = Ft;
      }
      return l = Rh.bind(null, e), n = Ce(n, l), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return l !== null && l !== null && ke(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Rh(e, t) {
    if (ot !== 0 && ot !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (oo() && e.callbackNode !== n)
      return null;
    var l = Oe;
    return l = Vl(
      e,
      e === Ge ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (oh(e, l, t), Ah(e, Xe()), e.callbackNode != null && e.callbackNode === n ? Rh.bind(null, e) : null);
  }
  function Ch(e, t) {
    if (oo()) return null;
    oh(e, t, !0);
  }
  function p0() {
    R0(function() {
      (De & 6) !== 0 ? Ce(
        ct,
        h0
      ) : wh();
    });
  }
  function qc() {
    return _l === 0 && (_l = Za()), _l;
  }
  function Mh(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : xr("" + e);
  }
  function Oh(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function v0(e, t, n, l, i) {
    if (t === "submit" && n && n.stateNode === i) {
      var c = Mh(
        (i[yt] || null).action
      ), m = l.submitter;
      m && (t = (t = m[yt] || null) ? Mh(t.formAction) : m.getAttribute("formAction"), t !== null && (c = t, m = null));
      var g = new Ar(
        "action",
        "action",
        null,
        l,
        i
      );
      e.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (_l !== 0) {
                  var M = m ? Oh(i, m) : new FormData(i);
                  uc(
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
                typeof c == "function" && (g.preventDefault(), M = m ? Oh(i, m) : new FormData(i), uc(
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
  for (var Vc = 0; Vc < Mu.length; Vc++) {
    var Xc = Mu[Vc], g0 = Xc.toLowerCase(), y0 = Xc[0].toUpperCase() + Xc.slice(1);
    Xt(
      g0,
      "on" + y0
    );
  }
  Xt(od, "onAnimationEnd"), Xt(ud, "onAnimationIteration"), Xt(cd, "onAnimationStart"), Xt("dblclick", "onDoubleClick"), Xt("focusin", "onFocus"), Xt("focusout", "onBlur"), Xt(Uy, "onTransitionRun"), Xt(Ly, "onTransitionStart"), Xt(By, "onTransitionCancel"), Xt(sd, "onTransitionEnd"), Pl("onMouseEnter", ["mouseout", "mouseover"]), Pl("onMouseLeave", ["mouseout", "mouseover"]), Pl("onPointerEnter", ["pointerout", "pointerover"]), Pl("onPointerLeave", ["pointerout", "pointerover"]), hl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), hl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), hl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), hl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), hl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), hl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Di = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), b0 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Di)
  );
  function Th(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n], i = l.event;
      l = l.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var m = l.length - 1; 0 <= m; m--) {
            var g = l[m], M = g.instance, B = g.currentTarget;
            if (g = g.listener, M !== c && i.isPropagationStopped())
              break e;
            c = g, i.currentTarget = B;
            try {
              c(i);
            } catch (Z) {
              Pr(Z);
            }
            i.currentTarget = null, c = M;
          }
        else
          for (m = 0; m < l.length; m++) {
            if (g = l[m], M = g.instance, B = g.currentTarget, g = g.listener, M !== c && i.isPropagationStopped())
              break e;
            c = g, i.currentTarget = B;
            try {
              c(i);
            } catch (Z) {
              Pr(Z);
            }
            i.currentTarget = null, c = M;
          }
      }
    }
  }
  function Ae(e, t) {
    var n = t[lu];
    n === void 0 && (n = t[lu] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    n.has(l) || (_h(t, e, 2, !1), n.add(l));
  }
  function Qc(e, t, n) {
    var l = 0;
    t && (l |= 4), _h(
      n,
      e,
      l,
      t
    );
  }
  var so = "_reactListening" + Math.random().toString(36).slice(2);
  function Zc(e) {
    if (!e[so]) {
      e[so] = !0, wf.forEach(function(n) {
        n !== "selectionchange" && (b0.has(n) || Qc(n, !1, e), Qc(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[so] || (t[so] = !0, Qc("selectionchange", !1, t));
    }
  }
  function _h(e, t, n, l) {
    switch (ep(t)) {
      case 2:
        var i = Z0;
        break;
      case 8:
        i = K0;
        break;
      default:
        i = rs;
    }
    n = i.bind(
      null,
      t,
      n,
      e
    ), i = void 0, !hu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), l ? i !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
      passive: i
    }) : e.addEventListener(t, n, !1);
  }
  function Kc(e, t, n, l, i) {
    var c = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var m = l.tag;
        if (m === 3 || m === 4) {
          var g = l.stateNode.containerInfo;
          if (g === i) break;
          if (m === 4)
            for (m = l.return; m !== null; ) {
              var M = m.tag;
              if ((M === 3 || M === 4) && m.stateNode.containerInfo === i)
                return;
              m = m.return;
            }
          for (; g !== null; ) {
            if (m = Kl(g), m === null) return;
            if (M = m.tag, M === 5 || M === 6 || M === 26 || M === 27) {
              l = c = m;
              continue e;
            }
            g = g.parentNode;
          }
        }
        l = l.return;
      }
    Bf(function() {
      var B = c, Z = du(n), P = [];
      e: {
        var H = fd.get(e);
        if (H !== void 0) {
          var G = Ar, ye = e;
          switch (e) {
            case "keypress":
              if (Er(n) === 0) break e;
            case "keydown":
            case "keyup":
              G = my;
              break;
            case "focusin":
              ye = "focus", G = yu;
              break;
            case "focusout":
              ye = "blur", G = yu;
              break;
            case "beforeblur":
            case "afterblur":
              G = yu;
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
              G = Gf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              G = ty;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              G = vy;
              break;
            case od:
            case ud:
            case cd:
              G = ay;
              break;
            case sd:
              G = yy;
              break;
            case "scroll":
            case "scrollend":
              G = Ig;
              break;
            case "wheel":
              G = xy;
              break;
            case "copy":
            case "cut":
            case "paste":
              G = ry;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              G = qf;
              break;
            case "toggle":
            case "beforetoggle":
              G = Ey;
          }
          var he = (t & 4) !== 0, Le = !he && (e === "scroll" || e === "scrollend"), N = he ? H !== null ? H + "Capture" : null : H;
          he = [];
          for (var _ = B, L; _ !== null; ) {
            var $ = _;
            if (L = $.stateNode, $ = $.tag, $ !== 5 && $ !== 26 && $ !== 27 || L === null || N === null || ($ = Fa(_, N), $ != null && he.push(
              zi(_, $, L)
            )), Le) break;
            _ = _.return;
          }
          0 < he.length && (H = new G(
            H,
            ye,
            null,
            n,
            Z
          ), P.push({ event: H, listeners: he }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (H = e === "mouseover" || e === "pointerover", G = e === "mouseout" || e === "pointerout", H && n !== fu && (ye = n.relatedTarget || n.fromElement) && (Kl(ye) || ye[Zl]))
            break e;
          if ((G || H) && (H = Z.window === Z ? Z : (H = Z.ownerDocument) ? H.defaultView || H.parentWindow : window, G ? (ye = n.relatedTarget || n.toElement, G = B, ye = ye ? Kl(ye) : null, ye !== null && (Le = f(ye), he = ye.tag, ye !== Le || he !== 5 && he !== 27 && he !== 6) && (ye = null)) : (G = null, ye = B), G !== ye)) {
            if (he = Gf, $ = "onMouseLeave", N = "onMouseEnter", _ = "mouse", (e === "pointerout" || e === "pointerover") && (he = qf, $ = "onPointerLeave", N = "onPointerEnter", _ = "pointer"), Le = G == null ? H : Pa(G), L = ye == null ? H : Pa(ye), H = new he(
              $,
              _ + "leave",
              G,
              n,
              Z
            ), H.target = Le, H.relatedTarget = L, $ = null, Kl(Z) === B && (he = new he(
              N,
              _ + "enter",
              ye,
              n,
              Z
            ), he.target = L, he.relatedTarget = Le, $ = he), Le = $, G && ye)
              t: {
                for (he = G, N = ye, _ = 0, L = he; L; L = Ma(L))
                  _++;
                for (L = 0, $ = N; $; $ = Ma($))
                  L++;
                for (; 0 < _ - L; )
                  he = Ma(he), _--;
                for (; 0 < L - _; )
                  N = Ma(N), L--;
                for (; _--; ) {
                  if (he === N || N !== null && he === N.alternate)
                    break t;
                  he = Ma(he), N = Ma(N);
                }
                he = null;
              }
            else he = null;
            G !== null && Nh(
              P,
              H,
              G,
              he,
              !1
            ), ye !== null && Le !== null && Nh(
              P,
              Le,
              ye,
              he,
              !0
            );
          }
        }
        e: {
          if (H = B ? Pa(B) : window, G = H.nodeName && H.nodeName.toLowerCase(), G === "select" || G === "input" && H.type === "file")
            var ie = Pf;
          else if (Jf(H))
            if (Ff)
              ie = Dy;
            else {
              ie = _y;
              var Ee = Ty;
            }
          else
            G = H.nodeName, !G || G.toLowerCase() !== "input" || H.type !== "checkbox" && H.type !== "radio" ? B && su(B.elementType) && (ie = Pf) : ie = Ny;
          if (ie && (ie = ie(e, B))) {
            $f(
              P,
              ie,
              n,
              Z
            );
            break e;
          }
          Ee && Ee(e, H, B), e === "focusout" && B && H.type === "number" && B.memoizedProps.value != null && cu(H, "number", H.value);
        }
        switch (Ee = B ? Pa(B) : window, e) {
          case "focusin":
            (Jf(Ee) || Ee.contentEditable === "true") && (la = Ee, Au = B, ii = null);
            break;
          case "focusout":
            ii = Au = la = null;
            break;
          case "mousedown":
            Ru = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ru = !1, id(P, n, Z);
            break;
          case "selectionchange":
            if (jy) break;
          case "keydown":
          case "keyup":
            id(P, n, Z);
        }
        var fe;
        if (xu)
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
          na ? Zf(e, n) && (pe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (pe = "onCompositionStart");
        pe && (Vf && n.locale !== "ko" && (na || pe !== "onCompositionStart" ? pe === "onCompositionEnd" && na && (fe = kf()) : (Ln = Z, pu = "value" in Ln ? Ln.value : Ln.textContent, na = !0)), Ee = fo(B, pe), 0 < Ee.length && (pe = new Yf(
          pe,
          e,
          null,
          n,
          Z
        ), P.push({ event: pe, listeners: Ee }), fe ? pe.data = fe : (fe = Kf(n), fe !== null && (pe.data = fe)))), (fe = Ay ? Ry(e, n) : Cy(e, n)) && (pe = fo(B, "onBeforeInput"), 0 < pe.length && (Ee = new Yf(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          Z
        ), P.push({
          event: Ee,
          listeners: pe
        }), Ee.data = fe)), v0(
          P,
          e,
          B,
          n,
          Z
        );
      }
      Th(P, t);
    });
  }
  function zi(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function fo(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var i = e, c = i.stateNode;
      if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || c === null || (i = Fa(e, n), i != null && l.unshift(
        zi(e, i, c)
      ), i = Fa(e, t), i != null && l.push(
        zi(e, i, c)
      )), e.tag === 3) return l;
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
  function Nh(e, t, n, l, i) {
    for (var c = t._reactName, m = []; n !== null && n !== l; ) {
      var g = n, M = g.alternate, B = g.stateNode;
      if (g = g.tag, M !== null && M === l) break;
      g !== 5 && g !== 26 && g !== 27 || B === null || (M = B, i ? (B = Fa(n, c), B != null && m.unshift(
        zi(n, B, M)
      )) : i || (B = Fa(n, c), B != null && m.push(
        zi(n, B, M)
      ))), n = n.return;
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var x0 = /\r\n?/g, S0 = /\u0000|\uFFFD/g;
  function Dh(e) {
    return (typeof e == "string" ? e : "" + e).replace(x0, `
`).replace(S0, "");
  }
  function zh(e, t) {
    return t = Dh(t), Dh(e) === t;
  }
  function mo() {
  }
  function Ue(e, t, n, l, i, c) {
    switch (n) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || Il(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && Il(e, "" + l);
        break;
      case "className":
        gr(e, "class", l);
        break;
      case "tabIndex":
        gr(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        gr(e, n, l);
        break;
      case "style":
        Uf(e, l, c);
        break;
      case "data":
        if (t !== "object") {
          gr(e, "data", l);
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
        l = xr("" + l), e.setAttribute(n, l);
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
          typeof c == "function" && (n === "formAction" ? (t !== "input" && Ue(e, t, "name", i.name, i, null), Ue(
            e,
            t,
            "formEncType",
            i.formEncType,
            i,
            null
          ), Ue(
            e,
            t,
            "formMethod",
            i.formMethod,
            i,
            null
          ), Ue(
            e,
            t,
            "formTarget",
            i.formTarget,
            i,
            null
          )) : (Ue(e, t, "encType", i.encType, i, null), Ue(e, t, "method", i.method, i, null), Ue(e, t, "target", i.target, i, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        l = xr("" + l), e.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (e.onclick = mo);
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
        n = xr("" + l), e.setAttributeNS(
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
        Ae("beforetoggle", e), Ae("toggle", e), vr(e, "popover", l);
        break;
      case "xlinkActuate":
        fn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        fn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        fn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        fn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        fn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        fn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        fn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        fn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        fn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        vr(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Fg.get(n) || n, vr(e, n, l));
    }
  }
  function Jc(e, t, n, l, i, c) {
    switch (n) {
      case "style":
        Uf(e, l, c);
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
        typeof l == "string" ? Il(e, l) : (typeof l == "number" || typeof l == "bigint") && Il(e, "" + l);
        break;
      case "onScroll":
        l != null && Ae("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ae("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = mo);
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
        if (!Af.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (i = n.endsWith("Capture"), t = n.slice(2, i ? n.length - 7 : void 0), c = e[yt] || null, c = c != null ? c[n] : null, typeof c == "function" && e.removeEventListener(t, c, i), typeof l == "function")) {
              typeof c != "function" && c !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, l, i);
              break e;
            }
            n in e ? e[n] = l : l === !0 ? e.setAttribute(n, "") : vr(e, n, l);
          }
    }
  }
  function ut(e, t, n) {
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
            var m = n[c];
            if (m != null)
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
                  Ue(e, t, c, m, n, null);
              }
          }
        i && Ue(e, t, "srcSet", n.srcSet, n, null), l && Ue(e, t, "src", n.src, n, null);
        return;
      case "input":
        Ae("invalid", e);
        var g = c = m = i = null, M = null, B = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var Z = n[l];
            if (Z != null)
              switch (l) {
                case "name":
                  i = Z;
                  break;
                case "type":
                  m = Z;
                  break;
                case "checked":
                  M = Z;
                  break;
                case "defaultChecked":
                  B = Z;
                  break;
                case "value":
                  c = Z;
                  break;
                case "defaultValue":
                  g = Z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Z != null)
                    throw Error(o(137, t));
                  break;
                default:
                  Ue(e, t, l, Z, n, null);
              }
          }
        Nf(
          e,
          c,
          g,
          M,
          B,
          m,
          i,
          !1
        ), yr(e);
        return;
      case "select":
        Ae("invalid", e), l = m = c = null;
        for (i in n)
          if (n.hasOwnProperty(i) && (g = n[i], g != null))
            switch (i) {
              case "value":
                c = g;
                break;
              case "defaultValue":
                m = g;
                break;
              case "multiple":
                l = g;
              default:
                Ue(e, t, i, g, n, null);
            }
        t = c, n = m, e.multiple = !!l, t != null ? Wl(e, !!l, t, !1) : n != null && Wl(e, !!l, n, !0);
        return;
      case "textarea":
        Ae("invalid", e), c = i = l = null;
        for (m in n)
          if (n.hasOwnProperty(m) && (g = n[m], g != null))
            switch (m) {
              case "value":
                l = g;
                break;
              case "defaultValue":
                i = g;
                break;
              case "children":
                c = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(o(91));
                break;
              default:
                Ue(e, t, m, g, n, null);
            }
        zf(e, l, i, c), yr(e);
        return;
      case "option":
        for (M in n)
          if (n.hasOwnProperty(M) && (l = n[M], l != null))
            switch (M) {
              case "selected":
                e.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Ue(e, t, M, l, n, null);
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
        for (l = 0; l < Di.length; l++)
          Ae(Di[l], e);
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
        for (B in n)
          if (n.hasOwnProperty(B) && (l = n[B], l != null))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                Ue(e, t, B, l, n, null);
            }
        return;
      default:
        if (su(t)) {
          for (Z in n)
            n.hasOwnProperty(Z) && (l = n[Z], l !== void 0 && Jc(
              e,
              t,
              Z,
              l,
              n,
              void 0
            ));
          return;
        }
    }
    for (g in n)
      n.hasOwnProperty(g) && (l = n[g], l != null && Ue(e, t, g, l, n, null));
  }
  function E0(e, t, n, l) {
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
        var i = null, c = null, m = null, g = null, M = null, B = null, Z = null;
        for (G in n) {
          var P = n[G];
          if (n.hasOwnProperty(G) && P != null)
            switch (G) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                M = P;
              default:
                l.hasOwnProperty(G) || Ue(e, t, G, null, l, P);
            }
        }
        for (var H in l) {
          var G = l[H];
          if (P = n[H], l.hasOwnProperty(H) && (G != null || P != null))
            switch (H) {
              case "type":
                c = G;
                break;
              case "name":
                i = G;
                break;
              case "checked":
                B = G;
                break;
              case "defaultChecked":
                Z = G;
                break;
              case "value":
                m = G;
                break;
              case "defaultValue":
                g = G;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (G != null)
                  throw Error(o(137, t));
                break;
              default:
                G !== P && Ue(
                  e,
                  t,
                  H,
                  G,
                  l,
                  P
                );
            }
        }
        uu(
          e,
          m,
          g,
          M,
          B,
          Z,
          c,
          i
        );
        return;
      case "select":
        G = m = g = H = null;
        for (c in n)
          if (M = n[c], n.hasOwnProperty(c) && M != null)
            switch (c) {
              case "value":
                break;
              case "multiple":
                G = M;
              default:
                l.hasOwnProperty(c) || Ue(
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
                H = c;
                break;
              case "defaultValue":
                g = c;
                break;
              case "multiple":
                m = c;
              default:
                c !== M && Ue(
                  e,
                  t,
                  i,
                  c,
                  l,
                  M
                );
            }
        t = g, n = m, l = G, H != null ? Wl(e, !!n, H, !1) : !!l != !!n && (t != null ? Wl(e, !!n, t, !0) : Wl(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        G = H = null;
        for (g in n)
          if (i = n[g], n.hasOwnProperty(g) && i != null && !l.hasOwnProperty(g))
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ue(e, t, g, null, l, i);
            }
        for (m in l)
          if (i = l[m], c = n[m], l.hasOwnProperty(m) && (i != null || c != null))
            switch (m) {
              case "value":
                H = i;
                break;
              case "defaultValue":
                G = i;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(o(91));
                break;
              default:
                i !== c && Ue(e, t, m, i, l, c);
            }
        Df(e, H, G);
        return;
      case "option":
        for (var ye in n)
          if (H = n[ye], n.hasOwnProperty(ye) && H != null && !l.hasOwnProperty(ye))
            switch (ye) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ue(
                  e,
                  t,
                  ye,
                  null,
                  l,
                  H
                );
            }
        for (M in l)
          if (H = l[M], G = n[M], l.hasOwnProperty(M) && H !== G && (H != null || G != null))
            switch (M) {
              case "selected":
                e.selected = H && typeof H != "function" && typeof H != "symbol";
                break;
              default:
                Ue(
                  e,
                  t,
                  M,
                  H,
                  l,
                  G
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
          H = n[he], n.hasOwnProperty(he) && H != null && !l.hasOwnProperty(he) && Ue(e, t, he, null, l, H);
        for (B in l)
          if (H = l[B], G = n[B], l.hasOwnProperty(B) && H !== G && (H != null || G != null))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (H != null)
                  throw Error(o(137, t));
                break;
              default:
                Ue(
                  e,
                  t,
                  B,
                  H,
                  l,
                  G
                );
            }
        return;
      default:
        if (su(t)) {
          for (var Le in n)
            H = n[Le], n.hasOwnProperty(Le) && H !== void 0 && !l.hasOwnProperty(Le) && Jc(
              e,
              t,
              Le,
              void 0,
              l,
              H
            );
          for (Z in l)
            H = l[Z], G = n[Z], !l.hasOwnProperty(Z) || H === G || H === void 0 && G === void 0 || Jc(
              e,
              t,
              Z,
              H,
              l,
              G
            );
          return;
        }
    }
    for (var N in n)
      H = n[N], n.hasOwnProperty(N) && H != null && !l.hasOwnProperty(N) && Ue(e, t, N, null, l, H);
    for (P in l)
      H = l[P], G = n[P], !l.hasOwnProperty(P) || H === G || H == null && G == null || Ue(e, t, P, H, l, G);
  }
  var $c = null, Pc = null;
  function ho(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function jh(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Uh(e, t) {
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
  function Fc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Wc = null;
  function w0() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Wc ? !1 : (Wc = e, !0) : (Wc = null, !1);
  }
  var Lh = typeof setTimeout == "function" ? setTimeout : void 0, A0 = typeof clearTimeout == "function" ? clearTimeout : void 0, Bh = typeof Promise == "function" ? Promise : void 0, R0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Bh < "u" ? function(e) {
    return Bh.resolve(null).then(e).catch(C0);
  } : Lh;
  function C0(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Wn(e) {
    return e === "head";
  }
  function kh(e, t) {
    var n = t, l = 0, i = 0;
    do {
      var c = n.nextSibling;
      if (e.removeChild(n), c && c.nodeType === 8)
        if (n = c.data, n === "/$") {
          if (0 < l && 8 > l) {
            n = l;
            var m = e.ownerDocument;
            if (n & 1 && ji(m.documentElement), n & 2 && ji(m.body), n & 4)
              for (n = m.head, ji(n), m = n.firstChild; m; ) {
                var g = m.nextSibling, M = m.nodeName;
                m[$a] || M === "SCRIPT" || M === "STYLE" || M === "LINK" && m.rel.toLowerCase() === "stylesheet" || n.removeChild(m), m = g;
              }
          }
          if (i === 0) {
            e.removeChild(c), qi(t);
            return;
          }
          i--;
        } else
          n === "$" || n === "$?" || n === "$!" ? i++ : l = n.charCodeAt(0) - 48;
      else l = 0;
      n = c;
    } while (n);
    qi(t);
  }
  function Ic(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ic(n), au(n);
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
  function M0(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var i = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[$a])
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
      if (e = Zt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function O0(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Zt(e.nextSibling), e === null)) return null;
    return e;
  }
  function es(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function T0(e, t) {
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
  function Zt(e) {
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
  var ts = null;
  function Hh(e) {
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
  function Gh(e, t, n) {
    switch (t = ho(n), e) {
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
  function ji(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    au(e);
  }
  var Yt = /* @__PURE__ */ new Map(), Yh = /* @__PURE__ */ new Set();
  function po(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Rn = X.d;
  X.d = {
    f: _0,
    r: N0,
    D: D0,
    C: z0,
    L: j0,
    m: U0,
    X: B0,
    S: L0,
    M: k0
  };
  function _0() {
    var e = Rn.f(), t = io();
    return e || t;
  }
  function N0(e) {
    var t = Jl(e);
    t !== null && t.tag === 5 && t.type === "form" ? om(t) : Rn.r(e);
  }
  var Oa = typeof document > "u" ? null : document;
  function qh(e, t, n) {
    var l = Oa;
    if (l && typeof t == "string" && t) {
      var i = jt(t);
      i = 'link[rel="' + e + '"][href="' + i + '"]', typeof n == "string" && (i += '[crossorigin="' + n + '"]'), Yh.has(i) || (Yh.add(i), e = { rel: e, crossOrigin: n, href: t }, l.querySelector(i) === null && (t = l.createElement("link"), ut(t, "link", e), tt(t), l.head.appendChild(t)));
    }
  }
  function D0(e) {
    Rn.D(e), qh("dns-prefetch", e, null);
  }
  function z0(e, t) {
    Rn.C(e, t), qh("preconnect", e, t);
  }
  function j0(e, t, n) {
    Rn.L(e, t, n);
    var l = Oa;
    if (l && e && t) {
      var i = 'link[rel="preload"][as="' + jt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (i += '[imagesrcset="' + jt(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (i += '[imagesizes="' + jt(
        n.imageSizes
      ) + '"]')) : i += '[href="' + jt(e) + '"]';
      var c = i;
      switch (t) {
        case "style":
          c = Ta(e);
          break;
        case "script":
          c = _a(e);
      }
      Yt.has(c) || (e = y(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), Yt.set(c, e), l.querySelector(i) !== null || t === "style" && l.querySelector(Ui(c)) || t === "script" && l.querySelector(Li(c)) || (t = l.createElement("link"), ut(t, "link", e), tt(t), l.head.appendChild(t)));
    }
  }
  function U0(e, t) {
    Rn.m(e, t);
    var n = Oa;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", i = 'link[rel="modulepreload"][as="' + jt(l) + '"][href="' + jt(e) + '"]', c = i;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = _a(e);
      }
      if (!Yt.has(c) && (e = y({ rel: "modulepreload", href: e }, t), Yt.set(c, e), n.querySelector(i) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Li(c)))
              return;
        }
        l = n.createElement("link"), ut(l, "link", e), tt(l), n.head.appendChild(l);
      }
    }
  }
  function L0(e, t, n) {
    Rn.S(e, t, n);
    var l = Oa;
    if (l && e) {
      var i = $l(l).hoistableStyles, c = Ta(e);
      t = t || "default";
      var m = i.get(c);
      if (!m) {
        var g = { loading: 0, preload: null };
        if (m = l.querySelector(
          Ui(c)
        ))
          g.loading = 5;
        else {
          e = y(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = Yt.get(c)) && ns(e, n);
          var M = m = l.createElement("link");
          tt(M), ut(M, "link", e), M._p = new Promise(function(B, Z) {
            M.onload = B, M.onerror = Z;
          }), M.addEventListener("load", function() {
            g.loading |= 1;
          }), M.addEventListener("error", function() {
            g.loading |= 2;
          }), g.loading |= 4, vo(m, t, l);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: g
        }, i.set(c, m);
      }
    }
  }
  function B0(e, t) {
    Rn.X(e, t);
    var n = Oa;
    if (n && e) {
      var l = $l(n).hoistableScripts, i = _a(e), c = l.get(i);
      c || (c = n.querySelector(Li(i)), c || (e = y({ src: e, async: !0 }, t), (t = Yt.get(i)) && ls(e, t), c = n.createElement("script"), tt(c), ut(c, "link", e), n.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, l.set(i, c));
    }
  }
  function k0(e, t) {
    Rn.M(e, t);
    var n = Oa;
    if (n && e) {
      var l = $l(n).hoistableScripts, i = _a(e), c = l.get(i);
      c || (c = n.querySelector(Li(i)), c || (e = y({ src: e, async: !0, type: "module" }, t), (t = Yt.get(i)) && ls(e, t), c = n.createElement("script"), tt(c), ut(c, "link", e), n.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, l.set(i, c));
    }
  }
  function Vh(e, t, n, l) {
    var i = (i = ce.current) ? po(i) : null;
    if (!i) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Ta(n.href), n = $l(
          i
        ).hoistableStyles, l = n.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = Ta(n.href);
          var c = $l(
            i
          ).hoistableStyles, m = c.get(e);
          if (m || (i = i.ownerDocument || i, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, c.set(e, m), (c = i.querySelector(
            Ui(e)
          )) && !c._p && (m.instance = c, m.state.loading = 5), Yt.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, Yt.set(e, n), c || H0(
            i,
            e,
            n,
            m.state
          ))), t && l === null)
            throw Error(o(528, ""));
          return m;
        }
        if (t && l !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = _a(n), n = $l(
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
  function Ta(e) {
    return 'href="' + jt(e) + '"';
  }
  function Ui(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Xh(e) {
    return y({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function H0(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), ut(t, "link", n), tt(t), e.head.appendChild(t));
  }
  function _a(e) {
    return '[src="' + jt(e) + '"]';
  }
  function Li(e) {
    return "script[async]" + e;
  }
  function Qh(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + jt(n.href) + '"]'
          );
          if (l)
            return t.instance = l, tt(l), l;
          var i = y({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), tt(l), ut(l, "style", i), vo(l, n.precedence, e), t.instance = l;
        case "stylesheet":
          i = Ta(n.href);
          var c = e.querySelector(
            Ui(i)
          );
          if (c)
            return t.state.loading |= 4, t.instance = c, tt(c), c;
          l = Xh(n), (i = Yt.get(i)) && ns(l, i), c = (e.ownerDocument || e).createElement("link"), tt(c);
          var m = c;
          return m._p = new Promise(function(g, M) {
            m.onload = g, m.onerror = M;
          }), ut(c, "link", l), t.state.loading |= 4, vo(c, n.precedence, e), t.instance = c;
        case "script":
          return c = _a(n.src), (i = e.querySelector(
            Li(c)
          )) ? (t.instance = i, tt(i), i) : (l = n, (i = Yt.get(c)) && (l = y({}, n), ls(l, i)), e = e.ownerDocument || e, i = e.createElement("script"), tt(i), ut(i, "link", l), e.head.appendChild(i), t.instance = i);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, vo(l, n.precedence, e));
    return t.instance;
  }
  function vo(e, t, n) {
    for (var l = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), i = l.length ? l[l.length - 1] : null, c = i, m = 0; m < l.length; m++) {
      var g = l[m];
      if (g.dataset.precedence === t) c = g;
      else if (c !== i) break;
    }
    c ? c.parentNode.insertBefore(e, c.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function ns(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function ls(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var go = null;
  function Zh(e, t, n) {
    if (go === null) {
      var l = /* @__PURE__ */ new Map(), i = go = /* @__PURE__ */ new Map();
      i.set(n, l);
    } else
      i = go, l = i.get(n), l || (l = /* @__PURE__ */ new Map(), i.set(n, l));
    if (l.has(e)) return l;
    for (l.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
      var c = n[i];
      if (!(c[$a] || c[ft] || e === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = c.getAttribute(t) || "";
        m = e + m;
        var g = l.get(m);
        g ? g.push(c) : l.set(m, [c]);
      }
    }
    return l;
  }
  function Kh(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function G0(e, t, n) {
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
  function Jh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Bi = null;
  function Y0() {
  }
  function q0(e, t, n) {
    if (Bi === null) throw Error(o(475));
    var l = Bi;
    if (t.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var i = Ta(n.href), c = e.querySelector(
          Ui(i)
        );
        if (c) {
          e = c._p, e !== null && typeof e == "object" && typeof e.then == "function" && (l.count++, l = yo.bind(l), e.then(l, l)), t.state.loading |= 4, t.instance = c, tt(c);
          return;
        }
        c = e.ownerDocument || e, n = Xh(n), (i = Yt.get(i)) && ns(n, i), c = c.createElement("link"), tt(c);
        var m = c;
        m._p = new Promise(function(g, M) {
          m.onload = g, m.onerror = M;
        }), ut(c, "link", n), t.instance = c;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (l.count++, t = yo.bind(l), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  function V0() {
    if (Bi === null) throw Error(o(475));
    var e = Bi;
    return e.stylesheets && e.count === 0 && as(e, e.stylesheets), 0 < e.count ? function(t) {
      var n = setTimeout(function() {
        if (e.stylesheets && as(e, e.stylesheets), e.unsuspend) {
          var l = e.unsuspend;
          e.unsuspend = null, l();
        }
      }, 6e4);
      return e.unsuspend = t, function() {
        e.unsuspend = null, clearTimeout(n);
      };
    } : null;
  }
  function yo() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) as(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var bo = null;
  function as(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, bo = /* @__PURE__ */ new Map(), t.forEach(X0, e), bo = null, yo.call(e));
  }
  function X0(e, t) {
    if (!(t.state.loading & 4)) {
      var n = bo.get(e);
      if (n) var l = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), bo.set(e, n);
        for (var i = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), c = 0; c < i.length; c++) {
          var m = i[c];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (n.set(m.dataset.precedence, m), l = m);
        }
        l && n.set(null, l);
      }
      i = t.instance, m = i.getAttribute("data-precedence"), c = n.get(m) || l, c === l && n.set(null, i), n.set(m, i), this.count++, l = yo.bind(this), i.addEventListener("load", l), i.addEventListener("error", l), c ? c.parentNode.insertBefore(i, c.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
    }
  }
  var ki = {
    $$typeof: z,
    Provider: null,
    Consumer: null,
    _currentValue: k,
    _currentValue2: k,
    _threadCount: 0
  };
  function Q0(e, t, n, l, i, c, m, g) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Xl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xl(0), this.hiddenUpdates = Xl(null), this.identifierPrefix = l, this.onUncaughtError = i, this.onCaughtError = c, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = g, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function $h(e, t, n, l, i, c, m, g, M, B, Z, P) {
    return e = new Q0(
      e,
      t,
      n,
      m,
      g,
      M,
      B,
      P
    ), t = 1, c === !0 && (t |= 24), c = Rt(3, null, null, t), e.current = c, c.stateNode = e, t = Hu(), t.refCount++, e.pooledCache = t, t.refCount++, c.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: t
    }, Vu(c), e;
  }
  function Ph(e) {
    return e ? (e = oa, e) : oa;
  }
  function Fh(e, t, n, l, i, c) {
    i = Ph(i), l.context === null ? l.context = i : l.pendingContext = i, l = Hn(t), l.payload = { element: n }, c = c === void 0 ? null : c, c !== null && (l.callback = c), n = Gn(e, l, t), n !== null && (_t(n, e, t), hi(n, e, t));
  }
  function Wh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function is(e, t) {
    Wh(e, t), (e = e.alternate) && Wh(e, t);
  }
  function Ih(e) {
    if (e.tag === 13) {
      var t = ra(e, 67108864);
      t !== null && _t(t, e, 67108864), is(e, 67108864);
    }
  }
  var xo = !0;
  function Z0(e, t, n, l) {
    var i = D.T;
    D.T = null;
    var c = X.p;
    try {
      X.p = 2, rs(e, t, n, l);
    } finally {
      X.p = c, D.T = i;
    }
  }
  function K0(e, t, n, l) {
    var i = D.T;
    D.T = null;
    var c = X.p;
    try {
      X.p = 8, rs(e, t, n, l);
    } finally {
      X.p = c, D.T = i;
    }
  }
  function rs(e, t, n, l) {
    if (xo) {
      var i = os(l);
      if (i === null)
        Kc(
          e,
          t,
          l,
          So,
          n
        ), tp(e, l);
      else if ($0(
        i,
        e,
        t,
        n,
        l
      ))
        l.stopPropagation();
      else if (tp(e, l), t & 4 && -1 < J0.indexOf(e)) {
        for (; i !== null; ) {
          var c = Jl(i);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                  var m = sn(c.pendingLanes);
                  if (m !== 0) {
                    var g = c;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; m; ) {
                      var M = 1 << 31 - it(m);
                      g.entanglements[1] |= M, m &= ~M;
                    }
                    ln(c), (De & 6) === 0 && (lo = Xe() + 500, Ni(0));
                  }
                }
                break;
              case 13:
                g = ra(c, 2), g !== null && _t(g, c, 2), io(), is(c, 2);
            }
          if (c = os(l), c === null && Kc(
            e,
            t,
            l,
            So,
            n
          ), c === i) break;
          i = c;
        }
        i !== null && l.stopPropagation();
      } else
        Kc(
          e,
          t,
          l,
          null,
          n
        );
    }
  }
  function os(e) {
    return e = du(e), us(e);
  }
  var So = null;
  function us(e) {
    if (So = null, e = Kl(e), e !== null) {
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
    return So = e, null;
  }
  function ep(e) {
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
        switch (Vt()) {
          case ct:
            return 2;
          case Pt:
            return 8;
          case Ft:
          case Va:
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
  var cs = !1, In = null, el = null, tl = null, Hi = /* @__PURE__ */ new Map(), Gi = /* @__PURE__ */ new Map(), nl = [], J0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function tp(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        In = null;
        break;
      case "dragenter":
      case "dragleave":
        el = null;
        break;
      case "mouseover":
      case "mouseout":
        tl = null;
        break;
      case "pointerover":
      case "pointerout":
        Hi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Gi.delete(t.pointerId);
    }
  }
  function Yi(e, t, n, l, i, c) {
    return e === null || e.nativeEvent !== c ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: l,
      nativeEvent: c,
      targetContainers: [i]
    }, t !== null && (t = Jl(t), t !== null && Ih(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function $0(e, t, n, l, i) {
    switch (t) {
      case "focusin":
        return In = Yi(
          In,
          e,
          t,
          n,
          l,
          i
        ), !0;
      case "dragenter":
        return el = Yi(
          el,
          e,
          t,
          n,
          l,
          i
        ), !0;
      case "mouseover":
        return tl = Yi(
          tl,
          e,
          t,
          n,
          l,
          i
        ), !0;
      case "pointerover":
        var c = i.pointerId;
        return Hi.set(
          c,
          Yi(
            Hi.get(c) || null,
            e,
            t,
            n,
            l,
            i
          )
        ), !0;
      case "gotpointercapture":
        return c = i.pointerId, Gi.set(
          c,
          Yi(
            Gi.get(c) || null,
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
  function np(e) {
    var t = Kl(e.target);
    if (t !== null) {
      var n = f(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = d(n), t !== null) {
            e.blockedOn = t, qg(e.priority, function() {
              if (n.tag === 13) {
                var l = Tt();
                l = Ql(l);
                var i = ra(n, l);
                i !== null && _t(i, n, l), is(n, l);
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
  function Eo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = os(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(
          n.type,
          n
        );
        fu = l, n.target.dispatchEvent(l), fu = null;
      } else
        return t = Jl(n), t !== null && Ih(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function lp(e, t, n) {
    Eo(e) && n.delete(t);
  }
  function P0() {
    cs = !1, In !== null && Eo(In) && (In = null), el !== null && Eo(el) && (el = null), tl !== null && Eo(tl) && (tl = null), Hi.forEach(lp), Gi.forEach(lp);
  }
  function wo(e, t) {
    e.blockedOn === t && (e.blockedOn = null, cs || (cs = !0, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      P0
    )));
  }
  var Ao = null;
  function ap(e) {
    Ao !== e && (Ao = e, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      function() {
        Ao === e && (Ao = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], l = e[t + 1], i = e[t + 2];
          if (typeof l != "function") {
            if (us(l || n) === null)
              continue;
            break;
          }
          var c = Jl(n);
          c !== null && (e.splice(t, 3), t -= 3, uc(
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
  function qi(e) {
    function t(M) {
      return wo(M, e);
    }
    In !== null && wo(In, e), el !== null && wo(el, e), tl !== null && wo(tl, e), Hi.forEach(t), Gi.forEach(t);
    for (var n = 0; n < nl.length; n++) {
      var l = nl[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < nl.length && (n = nl[0], n.blockedOn === null); )
      np(n), n.blockedOn === null && nl.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (l = 0; l < n.length; l += 3) {
        var i = n[l], c = n[l + 1], m = i[yt] || null;
        if (typeof c == "function")
          m || ap(n);
        else if (m) {
          var g = null;
          if (c && c.hasAttribute("formAction")) {
            if (i = c, m = c[yt] || null)
              g = m.formAction;
            else if (us(i) !== null) continue;
          } else g = m.action;
          typeof g == "function" ? n[l + 1] = g : (n.splice(l, 3), l -= 3), ap(n);
        }
      }
  }
  function ss(e) {
    this._internalRoot = e;
  }
  Ro.prototype.render = ss.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var n = t.current, l = Tt();
    Fh(n, l, e, t, null, null);
  }, Ro.prototype.unmount = ss.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Fh(e.current, 2, null, e, null, null), io(), t[Zl] = null;
    }
  };
  function Ro(e) {
    this._internalRoot = e;
  }
  Ro.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Sf();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < nl.length && t !== 0 && t < nl[n].priority; n++) ;
      nl.splice(n, 0, e), n === 0 && np(e);
    }
  };
  var ip = r.version;
  if (ip !== "19.1.0")
    throw Error(
      o(
        527,
        ip,
        "19.1.0"
      )
    );
  X.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = v(t), e = e !== null ? h(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var F0 = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: D,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Co = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Co.isDisabled && Co.supportsFiber)
      try {
        dl = Co.inject(
          F0
        ), st = Co;
      } catch {
      }
  }
  return Xi.createRoot = function(e, t) {
    if (!s(e)) throw Error(o(299));
    var n = !1, l = "", i = Sm, c = Em, m = wm, g = null;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (m = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (g = t.unstable_transitionCallbacks)), t = $h(
      e,
      1,
      !1,
      null,
      null,
      n,
      l,
      i,
      c,
      m,
      g,
      null
    ), e[Zl] = t.current, Zc(e), new ss(t);
  }, Xi.hydrateRoot = function(e, t, n) {
    if (!s(e)) throw Error(o(299));
    var l = !1, i = "", c = Sm, m = Em, g = wm, M = null, B = null;
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (m = n.onCaughtError), n.onRecoverableError !== void 0 && (g = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (M = n.unstable_transitionCallbacks), n.formState !== void 0 && (B = n.formState)), t = $h(
      e,
      1,
      !0,
      t,
      n ?? null,
      l,
      i,
      c,
      m,
      g,
      M,
      B
    ), t.context = Ph(null), n = t.current, l = Tt(), l = Ql(l), i = Hn(l), i.callback = null, Gn(n, i, l), n = l, t.current.lanes = n, jn(t, n), ln(t), e[Zl] = t.current, Zc(e), new Ro(t);
  }, Xi.version = "19.1.0", Xi;
}
var pp;
function ob() {
  if (pp) return ms.exports;
  pp = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (r) {
        console.error(r);
      }
  }
  return a(), ms.exports = rb(), ms.exports;
}
var ub = ob();
function Te(a, r, { checkForDefaultPrevented: u = !0 } = {}) {
  return function(s) {
    if (a == null || a(s), u === !1 || !s.defaultPrevented)
      return r == null ? void 0 : r(s);
  };
}
function vp(a, r) {
  if (typeof a == "function")
    return a(r);
  a != null && (a.current = r);
}
function Qo(...a) {
  return (r) => {
    let u = !1;
    const o = a.map((s) => {
      const f = vp(s, r);
      return !u && typeof f == "function" && (u = !0), f;
    });
    if (u)
      return () => {
        for (let s = 0; s < o.length; s++) {
          const f = o[s];
          typeof f == "function" ? f() : vp(a[s], null);
        }
      };
  };
}
function wt(...a) {
  return w.useCallback(Qo(...a), a);
}
function ar(a, r = []) {
  let u = [];
  function o(f, d) {
    const p = w.createContext(d), v = u.length;
    u = [...u, d];
    const h = (b) => {
      var T;
      const { scope: x, children: A, ...C } = b, E = ((T = x == null ? void 0 : x[a]) == null ? void 0 : T[v]) || p, O = w.useMemo(() => C, Object.values(C));
      return /* @__PURE__ */ S.jsx(E.Provider, { value: O, children: A });
    };
    h.displayName = f + "Provider";
    function y(b, x) {
      var E;
      const A = ((E = x == null ? void 0 : x[a]) == null ? void 0 : E[v]) || p, C = w.useContext(A);
      if (C) return C;
      if (d !== void 0) return d;
      throw new Error(`\`${b}\` must be used within \`${f}\``);
    }
    return [h, y];
  }
  const s = () => {
    const f = u.map((d) => w.createContext(d));
    return function(p) {
      const v = (p == null ? void 0 : p[a]) || f;
      return w.useMemo(
        () => ({ [`__scope${a}`]: { ...p, [a]: v } }),
        [p, v]
      );
    };
  };
  return s.scopeName = a, [o, cb(s, ...r)];
}
function cb(...a) {
  const r = a[0];
  if (a.length === 1) return r;
  const u = () => {
    const o = a.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(f) {
      const d = o.reduce((p, { useScope: v, scopeName: h }) => {
        const b = v(f)[`__scope${h}`];
        return { ...p, ...b };
      }, {});
      return w.useMemo(() => ({ [`__scope${r.scopeName}`]: d }), [d]);
    };
  };
  return u.scopeName = r.scopeName, u;
}
var ul = globalThis != null && globalThis.document ? w.useLayoutEffect : () => {
}, sb = Wp[" useInsertionEffect ".trim().toString()] || ul;
function ev({
  prop: a,
  defaultProp: r,
  onChange: u = () => {
  },
  caller: o
}) {
  const [s, f, d] = fb({
    defaultProp: r,
    onChange: u
  }), p = a !== void 0, v = p ? a : s;
  {
    const y = w.useRef(a !== void 0);
    w.useEffect(() => {
      const b = y.current;
      b !== p && console.warn(
        `${o} is changing from ${b ? "controlled" : "uncontrolled"} to ${p ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), y.current = p;
    }, [p, o]);
  }
  const h = w.useCallback(
    (y) => {
      var b;
      if (p) {
        const x = db(y) ? y(a) : y;
        x !== a && ((b = d.current) == null || b.call(d, x));
      } else
        f(y);
    },
    [p, a, f, d]
  );
  return [v, h];
}
function fb({
  defaultProp: a,
  onChange: r
}) {
  const [u, o] = w.useState(a), s = w.useRef(u), f = w.useRef(r);
  return sb(() => {
    f.current = r;
  }, [r]), w.useEffect(() => {
    var d;
    s.current !== u && ((d = f.current) == null || d.call(f, u), s.current = u);
  }, [u, s]), [u, o, f];
}
function db(a) {
  return typeof a == "function";
}
var Fs = Ip();
const mb = /* @__PURE__ */ Fp(Fs);
// @__NO_SIDE_EFFECTS__
function Pi(a) {
  const r = /* @__PURE__ */ pb(a), u = w.forwardRef((o, s) => {
    const { children: f, ...d } = o, p = w.Children.toArray(f), v = p.find(gb);
    if (v) {
      const h = v.props.children, y = p.map((b) => b === v ? w.Children.count(h) > 1 ? w.Children.only(null) : w.isValidElement(h) ? h.props.children : null : b);
      return /* @__PURE__ */ S.jsx(r, { ...d, ref: s, children: w.isValidElement(h) ? w.cloneElement(h, void 0, y) : null });
    }
    return /* @__PURE__ */ S.jsx(r, { ...d, ref: s, children: f });
  });
  return u.displayName = `${a}.Slot`, u;
}
var hb = /* @__PURE__ */ Pi("Slot");
// @__NO_SIDE_EFFECTS__
function pb(a) {
  const r = w.forwardRef((u, o) => {
    const { children: s, ...f } = u;
    if (w.isValidElement(s)) {
      const d = bb(s), p = yb(f, s.props);
      return s.type !== w.Fragment && (p.ref = o ? Qo(o, d) : d), w.cloneElement(s, p);
    }
    return w.Children.count(s) > 1 ? w.Children.only(null) : null;
  });
  return r.displayName = `${a}.SlotClone`, r;
}
var vb = Symbol("radix.slottable");
function gb(a) {
  return w.isValidElement(a) && typeof a.type == "function" && "__radixId" in a.type && a.type.__radixId === vb;
}
function yb(a, r) {
  const u = { ...r };
  for (const o in r) {
    const s = a[o], f = r[o];
    /^on[A-Z]/.test(o) ? s && f ? u[o] = (...p) => {
      f(...p), s(...p);
    } : s && (u[o] = s) : o === "style" ? u[o] = { ...s, ...f } : o === "className" && (u[o] = [s, f].filter(Boolean).join(" "));
  }
  return { ...a, ...u };
}
function bb(a) {
  var o, s;
  let r = (o = Object.getOwnPropertyDescriptor(a.props, "ref")) == null ? void 0 : o.get, u = r && "isReactWarning" in r && r.isReactWarning;
  return u ? a.ref : (r = (s = Object.getOwnPropertyDescriptor(a, "ref")) == null ? void 0 : s.get, u = r && "isReactWarning" in r && r.isReactWarning, u ? a.props.ref : a.props.ref || a.ref);
}
var xb = [
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
], pt = xb.reduce((a, r) => {
  const u = /* @__PURE__ */ Pi(`Primitive.${r}`), o = w.forwardRef((s, f) => {
    const { asChild: d, ...p } = s, v = d ? u : r;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ S.jsx(v, { ...p, ref: f });
  });
  return o.displayName = `Primitive.${r}`, { ...a, [r]: o };
}, {});
function tv(a, r) {
  a && Fs.flushSync(() => a.dispatchEvent(r));
}
function nv(a) {
  const r = a + "CollectionProvider", [u, o] = ar(r), [s, f] = u(
    r,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), d = (E) => {
    const { scope: O, children: T } = E, j = rl.useRef(null), z = rl.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ S.jsx(s, { scope: O, itemMap: z, collectionRef: j, children: T });
  };
  d.displayName = r;
  const p = a + "CollectionSlot", v = /* @__PURE__ */ Pi(p), h = rl.forwardRef(
    (E, O) => {
      const { scope: T, children: j } = E, z = f(p, T), Y = wt(O, z.collectionRef);
      return /* @__PURE__ */ S.jsx(v, { ref: Y, children: j });
    }
  );
  h.displayName = p;
  const y = a + "CollectionItemSlot", b = "data-radix-collection-item", x = /* @__PURE__ */ Pi(y), A = rl.forwardRef(
    (E, O) => {
      const { scope: T, children: j, ...z } = E, Y = rl.useRef(null), U = wt(O, Y), J = f(y, T);
      return rl.useEffect(() => (J.itemMap.set(Y, { ref: Y, ...z }), () => void J.itemMap.delete(Y))), /* @__PURE__ */ S.jsx(x, { [b]: "", ref: U, children: j });
    }
  );
  A.displayName = y;
  function C(E) {
    const O = f(a + "CollectionConsumer", E);
    return rl.useCallback(() => {
      const j = O.collectionRef.current;
      if (!j) return [];
      const z = Array.from(j.querySelectorAll(`[${b}]`));
      return Array.from(O.itemMap.values()).sort(
        (J, K) => z.indexOf(J.ref.current) - z.indexOf(K.ref.current)
      );
    }, [O.collectionRef, O.itemMap]);
  }
  return [
    { Provider: d, Slot: h, ItemSlot: A },
    C,
    o
  ];
}
var Sb = w.createContext(void 0);
function lv(a) {
  const r = w.useContext(Sb);
  return a || r || "ltr";
}
function _n(a) {
  const r = w.useRef(a);
  return w.useEffect(() => {
    r.current = a;
  }), w.useMemo(() => (...u) => {
    var o;
    return (o = r.current) == null ? void 0 : o.call(r, ...u);
  }, []);
}
function Eb(a, r = globalThis == null ? void 0 : globalThis.document) {
  const u = _n(a);
  w.useEffect(() => {
    const o = (s) => {
      s.key === "Escape" && u(s);
    };
    return r.addEventListener("keydown", o, { capture: !0 }), () => r.removeEventListener("keydown", o, { capture: !0 });
  }, [u, r]);
}
var wb = "DismissableLayer", js = "dismissableLayer.update", Ab = "dismissableLayer.pointerDownOutside", Rb = "dismissableLayer.focusOutside", gp, av = w.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), iv = w.forwardRef(
  (a, r) => {
    const {
      disableOutsidePointerEvents: u = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: s,
      onFocusOutside: f,
      onInteractOutside: d,
      onDismiss: p,
      ...v
    } = a, h = w.useContext(av), [y, b] = w.useState(null), x = (y == null ? void 0 : y.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, A] = w.useState({}), C = wt(r, (K) => b(K)), E = Array.from(h.layers), [O] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1), T = E.indexOf(O), j = y ? E.indexOf(y) : -1, z = h.layersWithOutsidePointerEventsDisabled.size > 0, Y = j >= T, U = Ob((K) => {
      const q = K.target, I = [...h.branches].some((ne) => ne.contains(q));
      !Y || I || (s == null || s(K), d == null || d(K), K.defaultPrevented || p == null || p());
    }, x), J = Tb((K) => {
      const q = K.target;
      [...h.branches].some((ne) => ne.contains(q)) || (f == null || f(K), d == null || d(K), K.defaultPrevented || p == null || p());
    }, x);
    return Eb((K) => {
      j === h.layers.size - 1 && (o == null || o(K), !K.defaultPrevented && p && (K.preventDefault(), p()));
    }, x), w.useEffect(() => {
      if (y)
        return u && (h.layersWithOutsidePointerEventsDisabled.size === 0 && (gp = x.body.style.pointerEvents, x.body.style.pointerEvents = "none"), h.layersWithOutsidePointerEventsDisabled.add(y)), h.layers.add(y), yp(), () => {
          u && h.layersWithOutsidePointerEventsDisabled.size === 1 && (x.body.style.pointerEvents = gp);
        };
    }, [y, x, u, h]), w.useEffect(() => () => {
      y && (h.layers.delete(y), h.layersWithOutsidePointerEventsDisabled.delete(y), yp());
    }, [y, h]), w.useEffect(() => {
      const K = () => A({});
      return document.addEventListener(js, K), () => document.removeEventListener(js, K);
    }, []), /* @__PURE__ */ S.jsx(
      pt.div,
      {
        ...v,
        ref: C,
        style: {
          pointerEvents: z ? Y ? "auto" : "none" : void 0,
          ...a.style
        },
        onFocusCapture: Te(a.onFocusCapture, J.onFocusCapture),
        onBlurCapture: Te(a.onBlurCapture, J.onBlurCapture),
        onPointerDownCapture: Te(
          a.onPointerDownCapture,
          U.onPointerDownCapture
        )
      }
    );
  }
);
iv.displayName = wb;
var Cb = "DismissableLayerBranch", Mb = w.forwardRef((a, r) => {
  const u = w.useContext(av), o = w.useRef(null), s = wt(r, o);
  return w.useEffect(() => {
    const f = o.current;
    if (f)
      return u.branches.add(f), () => {
        u.branches.delete(f);
      };
  }, [u.branches]), /* @__PURE__ */ S.jsx(pt.div, { ...a, ref: s });
});
Mb.displayName = Cb;
function Ob(a, r = globalThis == null ? void 0 : globalThis.document) {
  const u = _n(a), o = w.useRef(!1), s = w.useRef(() => {
  });
  return w.useEffect(() => {
    const f = (p) => {
      if (p.target && !o.current) {
        let v = function() {
          rv(
            Ab,
            u,
            h,
            { discrete: !0 }
          );
        };
        const h = { originalEvent: p };
        p.pointerType === "touch" ? (r.removeEventListener("click", s.current), s.current = v, r.addEventListener("click", s.current, { once: !0 })) : v();
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
function Tb(a, r = globalThis == null ? void 0 : globalThis.document) {
  const u = _n(a), o = w.useRef(!1);
  return w.useEffect(() => {
    const s = (f) => {
      f.target && !o.current && rv(Rb, u, { originalEvent: f }, {
        discrete: !1
      });
    };
    return r.addEventListener("focusin", s), () => r.removeEventListener("focusin", s);
  }, [r, u]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function yp() {
  const a = new CustomEvent(js);
  document.dispatchEvent(a);
}
function rv(a, r, u, { discrete: o }) {
  const s = u.originalEvent.target, f = new CustomEvent(a, { bubbles: !1, cancelable: !0, detail: u });
  r && s.addEventListener(a, r, { once: !0 }), o ? tv(s, f) : s.dispatchEvent(f);
}
var gs = 0;
function _b() {
  w.useEffect(() => {
    const a = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", a[0] ?? bp()), document.body.insertAdjacentElement("beforeend", a[1] ?? bp()), gs++, () => {
      gs === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((r) => r.remove()), gs--;
    };
  }, []);
}
function bp() {
  const a = document.createElement("span");
  return a.setAttribute("data-radix-focus-guard", ""), a.tabIndex = 0, a.style.outline = "none", a.style.opacity = "0", a.style.position = "fixed", a.style.pointerEvents = "none", a;
}
var ys = "focusScope.autoFocusOnMount", bs = "focusScope.autoFocusOnUnmount", xp = { bubbles: !1, cancelable: !0 }, Nb = "FocusScope", ov = w.forwardRef((a, r) => {
  const {
    loop: u = !1,
    trapped: o = !1,
    onMountAutoFocus: s,
    onUnmountAutoFocus: f,
    ...d
  } = a, [p, v] = w.useState(null), h = _n(s), y = _n(f), b = w.useRef(null), x = wt(r, (E) => v(E)), A = w.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  w.useEffect(() => {
    if (o) {
      let E = function(z) {
        if (A.paused || !p) return;
        const Y = z.target;
        p.contains(Y) ? b.current = Y : ol(b.current, { select: !0 });
      }, O = function(z) {
        if (A.paused || !p) return;
        const Y = z.relatedTarget;
        Y !== null && (p.contains(Y) || ol(b.current, { select: !0 }));
      }, T = function(z) {
        if (document.activeElement === document.body)
          for (const U of z)
            U.removedNodes.length > 0 && ol(p);
      };
      document.addEventListener("focusin", E), document.addEventListener("focusout", O);
      const j = new MutationObserver(T);
      return p && j.observe(p, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", E), document.removeEventListener("focusout", O), j.disconnect();
      };
    }
  }, [o, p, A.paused]), w.useEffect(() => {
    if (p) {
      Ep.add(A);
      const E = document.activeElement;
      if (!p.contains(E)) {
        const T = new CustomEvent(ys, xp);
        p.addEventListener(ys, h), p.dispatchEvent(T), T.defaultPrevented || (Db(Bb(uv(p)), { select: !0 }), document.activeElement === E && ol(p));
      }
      return () => {
        p.removeEventListener(ys, h), setTimeout(() => {
          const T = new CustomEvent(bs, xp);
          p.addEventListener(bs, y), p.dispatchEvent(T), T.defaultPrevented || ol(E ?? document.body, { select: !0 }), p.removeEventListener(bs, y), Ep.remove(A);
        }, 0);
      };
    }
  }, [p, h, y, A]);
  const C = w.useCallback(
    (E) => {
      if (!u && !o || A.paused) return;
      const O = E.key === "Tab" && !E.altKey && !E.ctrlKey && !E.metaKey, T = document.activeElement;
      if (O && T) {
        const j = E.currentTarget, [z, Y] = zb(j);
        z && Y ? !E.shiftKey && T === Y ? (E.preventDefault(), u && ol(z, { select: !0 })) : E.shiftKey && T === z && (E.preventDefault(), u && ol(Y, { select: !0 })) : T === j && E.preventDefault();
      }
    },
    [u, o, A.paused]
  );
  return /* @__PURE__ */ S.jsx(pt.div, { tabIndex: -1, ...d, ref: x, onKeyDown: C });
});
ov.displayName = Nb;
function Db(a, { select: r = !1 } = {}) {
  const u = document.activeElement;
  for (const o of a)
    if (ol(o, { select: r }), document.activeElement !== u) return;
}
function zb(a) {
  const r = uv(a), u = Sp(r, a), o = Sp(r.reverse(), a);
  return [u, o];
}
function uv(a) {
  const r = [], u = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const s = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || s ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; u.nextNode(); ) r.push(u.currentNode);
  return r;
}
function Sp(a, r) {
  for (const u of a)
    if (!jb(u, { upTo: r })) return u;
}
function jb(a, { upTo: r }) {
  if (getComputedStyle(a).visibility === "hidden") return !0;
  for (; a; ) {
    if (r !== void 0 && a === r) return !1;
    if (getComputedStyle(a).display === "none") return !0;
    a = a.parentElement;
  }
  return !1;
}
function Ub(a) {
  return a instanceof HTMLInputElement && "select" in a;
}
function ol(a, { select: r = !1 } = {}) {
  if (a && a.focus) {
    const u = document.activeElement;
    a.focus({ preventScroll: !0 }), a !== u && Ub(a) && r && a.select();
  }
}
var Ep = Lb();
function Lb() {
  let a = [];
  return {
    add(r) {
      const u = a[0];
      r !== u && (u == null || u.pause()), a = wp(a, r), a.unshift(r);
    },
    remove(r) {
      var u;
      a = wp(a, r), (u = a[0]) == null || u.resume();
    }
  };
}
function wp(a, r) {
  const u = [...a], o = u.indexOf(r);
  return o !== -1 && u.splice(o, 1), u;
}
function Bb(a) {
  return a.filter((r) => r.tagName !== "A");
}
var kb = Wp[" useId ".trim().toString()] || (() => {
}), Hb = 0;
function Us(a) {
  const [r, u] = w.useState(kb());
  return ul(() => {
    u((o) => o ?? String(Hb++));
  }, [a]), a || (r ? `radix-${r}` : "");
}
const Gb = ["top", "right", "bottom", "left"], cl = Math.min, Nt = Math.max, ko = Math.round, Mo = Math.floor, rn = (a) => ({
  x: a,
  y: a
}), Yb = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, qb = {
  start: "end",
  end: "start"
};
function Ls(a, r, u) {
  return Nt(a, cl(r, u));
}
function Nn(a, r) {
  return typeof a == "function" ? a(r) : a;
}
function Dn(a) {
  return a.split("-")[0];
}
function Ha(a) {
  return a.split("-")[1];
}
function Ws(a) {
  return a === "x" ? "y" : "x";
}
function Is(a) {
  return a === "y" ? "height" : "width";
}
function Tn(a) {
  return ["top", "bottom"].includes(Dn(a)) ? "y" : "x";
}
function ef(a) {
  return Ws(Tn(a));
}
function Vb(a, r, u) {
  u === void 0 && (u = !1);
  const o = Ha(a), s = ef(a), f = Is(s);
  let d = s === "x" ? o === (u ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return r.reference[f] > r.floating[f] && (d = Ho(d)), [d, Ho(d)];
}
function Xb(a) {
  const r = Ho(a);
  return [Bs(a), r, Bs(r)];
}
function Bs(a) {
  return a.replace(/start|end/g, (r) => qb[r]);
}
function Qb(a, r, u) {
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
function Zb(a, r, u, o) {
  const s = Ha(a);
  let f = Qb(Dn(a), u === "start", o);
  return s && (f = f.map((d) => d + "-" + s), r && (f = f.concat(f.map(Bs)))), f;
}
function Ho(a) {
  return a.replace(/left|right|bottom|top/g, (r) => Yb[r]);
}
function Kb(a) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...a
  };
}
function cv(a) {
  return typeof a != "number" ? Kb(a) : {
    top: a,
    right: a,
    bottom: a,
    left: a
  };
}
function Go(a) {
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
function Ap(a, r, u) {
  let {
    reference: o,
    floating: s
  } = a;
  const f = Tn(r), d = ef(r), p = Is(d), v = Dn(r), h = f === "y", y = o.x + o.width / 2 - s.width / 2, b = o.y + o.height / 2 - s.height / 2, x = o[p] / 2 - s[p] / 2;
  let A;
  switch (v) {
    case "top":
      A = {
        x: y,
        y: o.y - s.height
      };
      break;
    case "bottom":
      A = {
        x: y,
        y: o.y + o.height
      };
      break;
    case "right":
      A = {
        x: o.x + o.width,
        y: b
      };
      break;
    case "left":
      A = {
        x: o.x - s.width,
        y: b
      };
      break;
    default:
      A = {
        x: o.x,
        y: o.y
      };
  }
  switch (Ha(r)) {
    case "start":
      A[d] -= x * (u && h ? -1 : 1);
      break;
    case "end":
      A[d] += x * (u && h ? -1 : 1);
      break;
  }
  return A;
}
const Jb = async (a, r, u) => {
  const {
    placement: o = "bottom",
    strategy: s = "absolute",
    middleware: f = [],
    platform: d
  } = u, p = f.filter(Boolean), v = await (d.isRTL == null ? void 0 : d.isRTL(r));
  let h = await d.getElementRects({
    reference: a,
    floating: r,
    strategy: s
  }), {
    x: y,
    y: b
  } = Ap(h, o, v), x = o, A = {}, C = 0;
  for (let E = 0; E < p.length; E++) {
    const {
      name: O,
      fn: T
    } = p[E], {
      x: j,
      y: z,
      data: Y,
      reset: U
    } = await T({
      x: y,
      y: b,
      initialPlacement: o,
      placement: x,
      strategy: s,
      middlewareData: A,
      rects: h,
      platform: d,
      elements: {
        reference: a,
        floating: r
      }
    });
    y = j ?? y, b = z ?? b, A = {
      ...A,
      [O]: {
        ...A[O],
        ...Y
      }
    }, U && C <= 50 && (C++, typeof U == "object" && (U.placement && (x = U.placement), U.rects && (h = U.rects === !0 ? await d.getElementRects({
      reference: a,
      floating: r,
      strategy: s
    }) : U.rects), {
      x: y,
      y: b
    } = Ap(h, x, v)), E = -1);
  }
  return {
    x: y,
    y: b,
    placement: x,
    strategy: s,
    middlewareData: A
  };
};
async function Fi(a, r) {
  var u;
  r === void 0 && (r = {});
  const {
    x: o,
    y: s,
    platform: f,
    rects: d,
    elements: p,
    strategy: v
  } = a, {
    boundary: h = "clippingAncestors",
    rootBoundary: y = "viewport",
    elementContext: b = "floating",
    altBoundary: x = !1,
    padding: A = 0
  } = Nn(r, a), C = cv(A), O = p[x ? b === "floating" ? "reference" : "floating" : b], T = Go(await f.getClippingRect({
    element: (u = await (f.isElement == null ? void 0 : f.isElement(O))) == null || u ? O : O.contextElement || await (f.getDocumentElement == null ? void 0 : f.getDocumentElement(p.floating)),
    boundary: h,
    rootBoundary: y,
    strategy: v
  })), j = b === "floating" ? {
    x: o,
    y: s,
    width: d.floating.width,
    height: d.floating.height
  } : d.reference, z = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(p.floating)), Y = await (f.isElement == null ? void 0 : f.isElement(z)) ? await (f.getScale == null ? void 0 : f.getScale(z)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, U = Go(f.convertOffsetParentRelativeRectToViewportRelativeRect ? await f.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: p,
    rect: j,
    offsetParent: z,
    strategy: v
  }) : j);
  return {
    top: (T.top - U.top + C.top) / Y.y,
    bottom: (U.bottom - T.bottom + C.bottom) / Y.y,
    left: (T.left - U.left + C.left) / Y.x,
    right: (U.right - T.right + C.right) / Y.x
  };
}
const $b = (a) => ({
  name: "arrow",
  options: a,
  async fn(r) {
    const {
      x: u,
      y: o,
      placement: s,
      rects: f,
      platform: d,
      elements: p,
      middlewareData: v
    } = r, {
      element: h,
      padding: y = 0
    } = Nn(a, r) || {};
    if (h == null)
      return {};
    const b = cv(y), x = {
      x: u,
      y: o
    }, A = ef(s), C = Is(A), E = await d.getDimensions(h), O = A === "y", T = O ? "top" : "left", j = O ? "bottom" : "right", z = O ? "clientHeight" : "clientWidth", Y = f.reference[C] + f.reference[A] - x[A] - f.floating[C], U = x[A] - f.reference[A], J = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(h));
    let K = J ? J[z] : 0;
    (!K || !await (d.isElement == null ? void 0 : d.isElement(J))) && (K = p.floating[z] || f.floating[C]);
    const q = Y / 2 - U / 2, I = K / 2 - E[C] / 2 - 1, ne = cl(b[T], I), le = cl(b[j], I), ue = ne, me = K - E[C] - le, se = K / 2 - E[C] / 2 + q, Q = Ls(ue, se, me), D = !v.arrow && Ha(s) != null && se !== Q && f.reference[C] / 2 - (se < ue ? ne : le) - E[C] / 2 < 0, X = D ? se < ue ? se - ue : se - me : 0;
    return {
      [A]: x[A] + X,
      data: {
        [A]: Q,
        centerOffset: se - Q - X,
        ...D && {
          alignmentOffset: X
        }
      },
      reset: D
    };
  }
}), Pb = function(a) {
  return a === void 0 && (a = {}), {
    name: "flip",
    options: a,
    async fn(r) {
      var u, o;
      const {
        placement: s,
        middlewareData: f,
        rects: d,
        initialPlacement: p,
        platform: v,
        elements: h
      } = r, {
        mainAxis: y = !0,
        crossAxis: b = !0,
        fallbackPlacements: x,
        fallbackStrategy: A = "bestFit",
        fallbackAxisSideDirection: C = "none",
        flipAlignment: E = !0,
        ...O
      } = Nn(a, r);
      if ((u = f.arrow) != null && u.alignmentOffset)
        return {};
      const T = Dn(s), j = Tn(p), z = Dn(p) === p, Y = await (v.isRTL == null ? void 0 : v.isRTL(h.floating)), U = x || (z || !E ? [Ho(p)] : Xb(p)), J = C !== "none";
      !x && J && U.push(...Zb(p, E, C, Y));
      const K = [p, ...U], q = await Fi(r, O), I = [];
      let ne = ((o = f.flip) == null ? void 0 : o.overflows) || [];
      if (y && I.push(q[T]), b) {
        const Q = Vb(s, d, Y);
        I.push(q[Q[0]], q[Q[1]]);
      }
      if (ne = [...ne, {
        placement: s,
        overflows: I
      }], !I.every((Q) => Q <= 0)) {
        var le, ue;
        const Q = (((le = f.flip) == null ? void 0 : le.index) || 0) + 1, D = K[Q];
        if (D) {
          var me;
          const k = b === "alignment" ? j !== Tn(D) : !1, F = ((me = ne[0]) == null ? void 0 : me.overflows[0]) > 0;
          if (!k || F)
            return {
              data: {
                index: Q,
                overflows: ne
              },
              reset: {
                placement: D
              }
            };
        }
        let X = (ue = ne.filter((k) => k.overflows[0] <= 0).sort((k, F) => k.overflows[1] - F.overflows[1])[0]) == null ? void 0 : ue.placement;
        if (!X)
          switch (A) {
            case "bestFit": {
              var se;
              const k = (se = ne.filter((F) => {
                if (J) {
                  const R = Tn(F.placement);
                  return R === j || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  R === "y";
                }
                return !0;
              }).map((F) => [F.placement, F.overflows.filter((R) => R > 0).reduce((R, V) => R + V, 0)]).sort((F, R) => F[1] - R[1])[0]) == null ? void 0 : se[0];
              k && (X = k);
              break;
            }
            case "initialPlacement":
              X = p;
              break;
          }
        if (s !== X)
          return {
            reset: {
              placement: X
            }
          };
      }
      return {};
    }
  };
};
function Rp(a, r) {
  return {
    top: a.top - r.height,
    right: a.right - r.width,
    bottom: a.bottom - r.height,
    left: a.left - r.width
  };
}
function Cp(a) {
  return Gb.some((r) => a[r] >= 0);
}
const Fb = function(a) {
  return a === void 0 && (a = {}), {
    name: "hide",
    options: a,
    async fn(r) {
      const {
        rects: u
      } = r, {
        strategy: o = "referenceHidden",
        ...s
      } = Nn(a, r);
      switch (o) {
        case "referenceHidden": {
          const f = await Fi(r, {
            ...s,
            elementContext: "reference"
          }), d = Rp(f, u.reference);
          return {
            data: {
              referenceHiddenOffsets: d,
              referenceHidden: Cp(d)
            }
          };
        }
        case "escaped": {
          const f = await Fi(r, {
            ...s,
            altBoundary: !0
          }), d = Rp(f, u.floating);
          return {
            data: {
              escapedOffsets: d,
              escaped: Cp(d)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Wb(a, r) {
  const {
    placement: u,
    platform: o,
    elements: s
  } = a, f = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), d = Dn(u), p = Ha(u), v = Tn(u) === "y", h = ["left", "top"].includes(d) ? -1 : 1, y = f && v ? -1 : 1, b = Nn(r, a);
  let {
    mainAxis: x,
    crossAxis: A,
    alignmentAxis: C
  } = typeof b == "number" ? {
    mainAxis: b,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: b.mainAxis || 0,
    crossAxis: b.crossAxis || 0,
    alignmentAxis: b.alignmentAxis
  };
  return p && typeof C == "number" && (A = p === "end" ? C * -1 : C), v ? {
    x: A * y,
    y: x * h
  } : {
    x: x * h,
    y: A * y
  };
}
const Ib = function(a) {
  return a === void 0 && (a = 0), {
    name: "offset",
    options: a,
    async fn(r) {
      var u, o;
      const {
        x: s,
        y: f,
        placement: d,
        middlewareData: p
      } = r, v = await Wb(r, a);
      return d === ((u = p.offset) == null ? void 0 : u.placement) && (o = p.arrow) != null && o.alignmentOffset ? {} : {
        x: s + v.x,
        y: f + v.y,
        data: {
          ...v,
          placement: d
        }
      };
    }
  };
}, e1 = function(a) {
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
        limiter: p = {
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
        ...v
      } = Nn(a, r), h = {
        x: u,
        y: o
      }, y = await Fi(r, v), b = Tn(Dn(s)), x = Ws(b);
      let A = h[x], C = h[b];
      if (f) {
        const O = x === "y" ? "top" : "left", T = x === "y" ? "bottom" : "right", j = A + y[O], z = A - y[T];
        A = Ls(j, A, z);
      }
      if (d) {
        const O = b === "y" ? "top" : "left", T = b === "y" ? "bottom" : "right", j = C + y[O], z = C - y[T];
        C = Ls(j, C, z);
      }
      const E = p.fn({
        ...r,
        [x]: A,
        [b]: C
      });
      return {
        ...E,
        data: {
          x: E.x - u,
          y: E.y - o,
          enabled: {
            [x]: f,
            [b]: d
          }
        }
      };
    }
  };
}, t1 = function(a) {
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
        offset: p = 0,
        mainAxis: v = !0,
        crossAxis: h = !0
      } = Nn(a, r), y = {
        x: u,
        y: o
      }, b = Tn(s), x = Ws(b);
      let A = y[x], C = y[b];
      const E = Nn(p, r), O = typeof E == "number" ? {
        mainAxis: E,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...E
      };
      if (v) {
        const z = x === "y" ? "height" : "width", Y = f.reference[x] - f.floating[z] + O.mainAxis, U = f.reference[x] + f.reference[z] - O.mainAxis;
        A < Y ? A = Y : A > U && (A = U);
      }
      if (h) {
        var T, j;
        const z = x === "y" ? "width" : "height", Y = ["top", "left"].includes(Dn(s)), U = f.reference[b] - f.floating[z] + (Y && ((T = d.offset) == null ? void 0 : T[b]) || 0) + (Y ? 0 : O.crossAxis), J = f.reference[b] + f.reference[z] + (Y ? 0 : ((j = d.offset) == null ? void 0 : j[b]) || 0) - (Y ? O.crossAxis : 0);
        C < U ? C = U : C > J && (C = J);
      }
      return {
        [x]: A,
        [b]: C
      };
    }
  };
}, n1 = function(a) {
  return a === void 0 && (a = {}), {
    name: "size",
    options: a,
    async fn(r) {
      var u, o;
      const {
        placement: s,
        rects: f,
        platform: d,
        elements: p
      } = r, {
        apply: v = () => {
        },
        ...h
      } = Nn(a, r), y = await Fi(r, h), b = Dn(s), x = Ha(s), A = Tn(s) === "y", {
        width: C,
        height: E
      } = f.floating;
      let O, T;
      b === "top" || b === "bottom" ? (O = b, T = x === (await (d.isRTL == null ? void 0 : d.isRTL(p.floating)) ? "start" : "end") ? "left" : "right") : (T = b, O = x === "end" ? "top" : "bottom");
      const j = E - y.top - y.bottom, z = C - y.left - y.right, Y = cl(E - y[O], j), U = cl(C - y[T], z), J = !r.middlewareData.shift;
      let K = Y, q = U;
      if ((u = r.middlewareData.shift) != null && u.enabled.x && (q = z), (o = r.middlewareData.shift) != null && o.enabled.y && (K = j), J && !x) {
        const ne = Nt(y.left, 0), le = Nt(y.right, 0), ue = Nt(y.top, 0), me = Nt(y.bottom, 0);
        A ? q = C - 2 * (ne !== 0 || le !== 0 ? ne + le : Nt(y.left, y.right)) : K = E - 2 * (ue !== 0 || me !== 0 ? ue + me : Nt(y.top, y.bottom));
      }
      await v({
        ...r,
        availableWidth: q,
        availableHeight: K
      });
      const I = await d.getDimensions(p.floating);
      return C !== I.width || E !== I.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Zo() {
  return typeof window < "u";
}
function Ga(a) {
  return sv(a) ? (a.nodeName || "").toLowerCase() : "#document";
}
function Dt(a) {
  var r;
  return (a == null || (r = a.ownerDocument) == null ? void 0 : r.defaultView) || window;
}
function un(a) {
  var r;
  return (r = (sv(a) ? a.ownerDocument : a.document) || window.document) == null ? void 0 : r.documentElement;
}
function sv(a) {
  return Zo() ? a instanceof Node || a instanceof Dt(a).Node : !1;
}
function Jt(a) {
  return Zo() ? a instanceof Element || a instanceof Dt(a).Element : !1;
}
function on(a) {
  return Zo() ? a instanceof HTMLElement || a instanceof Dt(a).HTMLElement : !1;
}
function Mp(a) {
  return !Zo() || typeof ShadowRoot > "u" ? !1 : a instanceof ShadowRoot || a instanceof Dt(a).ShadowRoot;
}
function ir(a) {
  const {
    overflow: r,
    overflowX: u,
    overflowY: o,
    display: s
  } = $t(a);
  return /auto|scroll|overlay|hidden|clip/.test(r + o + u) && !["inline", "contents"].includes(s);
}
function l1(a) {
  return ["table", "td", "th"].includes(Ga(a));
}
function Ko(a) {
  return [":popover-open", ":modal"].some((r) => {
    try {
      return a.matches(r);
    } catch {
      return !1;
    }
  });
}
function tf(a) {
  const r = nf(), u = Jt(a) ? $t(a) : a;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((o) => u[o] ? u[o] !== "none" : !1) || (u.containerType ? u.containerType !== "normal" : !1) || !r && (u.backdropFilter ? u.backdropFilter !== "none" : !1) || !r && (u.filter ? u.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((o) => (u.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (u.contain || "").includes(o));
}
function a1(a) {
  let r = sl(a);
  for (; on(r) && !ka(r); ) {
    if (tf(r))
      return r;
    if (Ko(r))
      return null;
    r = sl(r);
  }
  return null;
}
function nf() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ka(a) {
  return ["html", "body", "#document"].includes(Ga(a));
}
function $t(a) {
  return Dt(a).getComputedStyle(a);
}
function Jo(a) {
  return Jt(a) ? {
    scrollLeft: a.scrollLeft,
    scrollTop: a.scrollTop
  } : {
    scrollLeft: a.scrollX,
    scrollTop: a.scrollY
  };
}
function sl(a) {
  if (Ga(a) === "html")
    return a;
  const r = (
    // Step into the shadow DOM of the parent of a slotted node.
    a.assignedSlot || // DOM Element detected.
    a.parentNode || // ShadowRoot detected.
    Mp(a) && a.host || // Fallback.
    un(a)
  );
  return Mp(r) ? r.host : r;
}
function fv(a) {
  const r = sl(a);
  return ka(r) ? a.ownerDocument ? a.ownerDocument.body : a.body : on(r) && ir(r) ? r : fv(r);
}
function Wi(a, r, u) {
  var o;
  r === void 0 && (r = []), u === void 0 && (u = !0);
  const s = fv(a), f = s === ((o = a.ownerDocument) == null ? void 0 : o.body), d = Dt(s);
  if (f) {
    const p = ks(d);
    return r.concat(d, d.visualViewport || [], ir(s) ? s : [], p && u ? Wi(p) : []);
  }
  return r.concat(s, Wi(s, [], u));
}
function ks(a) {
  return a.parent && Object.getPrototypeOf(a.parent) ? a.frameElement : null;
}
function dv(a) {
  const r = $t(a);
  let u = parseFloat(r.width) || 0, o = parseFloat(r.height) || 0;
  const s = on(a), f = s ? a.offsetWidth : u, d = s ? a.offsetHeight : o, p = ko(u) !== f || ko(o) !== d;
  return p && (u = f, o = d), {
    width: u,
    height: o,
    $: p
  };
}
function lf(a) {
  return Jt(a) ? a : a.contextElement;
}
function La(a) {
  const r = lf(a);
  if (!on(r))
    return rn(1);
  const u = r.getBoundingClientRect(), {
    width: o,
    height: s,
    $: f
  } = dv(r);
  let d = (f ? ko(u.width) : u.width) / o, p = (f ? ko(u.height) : u.height) / s;
  return (!d || !Number.isFinite(d)) && (d = 1), (!p || !Number.isFinite(p)) && (p = 1), {
    x: d,
    y: p
  };
}
const i1 = /* @__PURE__ */ rn(0);
function mv(a) {
  const r = Dt(a);
  return !nf() || !r.visualViewport ? i1 : {
    x: r.visualViewport.offsetLeft,
    y: r.visualViewport.offsetTop
  };
}
function r1(a, r, u) {
  return r === void 0 && (r = !1), !u || r && u !== Dt(a) ? !1 : r;
}
function Bl(a, r, u, o) {
  r === void 0 && (r = !1), u === void 0 && (u = !1);
  const s = a.getBoundingClientRect(), f = lf(a);
  let d = rn(1);
  r && (o ? Jt(o) && (d = La(o)) : d = La(a));
  const p = r1(f, u, o) ? mv(f) : rn(0);
  let v = (s.left + p.x) / d.x, h = (s.top + p.y) / d.y, y = s.width / d.x, b = s.height / d.y;
  if (f) {
    const x = Dt(f), A = o && Jt(o) ? Dt(o) : o;
    let C = x, E = ks(C);
    for (; E && o && A !== C; ) {
      const O = La(E), T = E.getBoundingClientRect(), j = $t(E), z = T.left + (E.clientLeft + parseFloat(j.paddingLeft)) * O.x, Y = T.top + (E.clientTop + parseFloat(j.paddingTop)) * O.y;
      v *= O.x, h *= O.y, y *= O.x, b *= O.y, v += z, h += Y, C = Dt(E), E = ks(C);
    }
  }
  return Go({
    width: y,
    height: b,
    x: v,
    y: h
  });
}
function af(a, r) {
  const u = Jo(a).scrollLeft;
  return r ? r.left + u : Bl(un(a)).left + u;
}
function hv(a, r, u) {
  u === void 0 && (u = !1);
  const o = a.getBoundingClientRect(), s = o.left + r.scrollLeft - (u ? 0 : (
    // RTL <body> scrollbar.
    af(a, o)
  )), f = o.top + r.scrollTop;
  return {
    x: s,
    y: f
  };
}
function o1(a) {
  let {
    elements: r,
    rect: u,
    offsetParent: o,
    strategy: s
  } = a;
  const f = s === "fixed", d = un(o), p = r ? Ko(r.floating) : !1;
  if (o === d || p && f)
    return u;
  let v = {
    scrollLeft: 0,
    scrollTop: 0
  }, h = rn(1);
  const y = rn(0), b = on(o);
  if ((b || !b && !f) && ((Ga(o) !== "body" || ir(d)) && (v = Jo(o)), on(o))) {
    const A = Bl(o);
    h = La(o), y.x = A.x + o.clientLeft, y.y = A.y + o.clientTop;
  }
  const x = d && !b && !f ? hv(d, v, !0) : rn(0);
  return {
    width: u.width * h.x,
    height: u.height * h.y,
    x: u.x * h.x - v.scrollLeft * h.x + y.x + x.x,
    y: u.y * h.y - v.scrollTop * h.y + y.y + x.y
  };
}
function u1(a) {
  return Array.from(a.getClientRects());
}
function c1(a) {
  const r = un(a), u = Jo(a), o = a.ownerDocument.body, s = Nt(r.scrollWidth, r.clientWidth, o.scrollWidth, o.clientWidth), f = Nt(r.scrollHeight, r.clientHeight, o.scrollHeight, o.clientHeight);
  let d = -u.scrollLeft + af(a);
  const p = -u.scrollTop;
  return $t(o).direction === "rtl" && (d += Nt(r.clientWidth, o.clientWidth) - s), {
    width: s,
    height: f,
    x: d,
    y: p
  };
}
function s1(a, r) {
  const u = Dt(a), o = un(a), s = u.visualViewport;
  let f = o.clientWidth, d = o.clientHeight, p = 0, v = 0;
  if (s) {
    f = s.width, d = s.height;
    const h = nf();
    (!h || h && r === "fixed") && (p = s.offsetLeft, v = s.offsetTop);
  }
  return {
    width: f,
    height: d,
    x: p,
    y: v
  };
}
function f1(a, r) {
  const u = Bl(a, !0, r === "fixed"), o = u.top + a.clientTop, s = u.left + a.clientLeft, f = on(a) ? La(a) : rn(1), d = a.clientWidth * f.x, p = a.clientHeight * f.y, v = s * f.x, h = o * f.y;
  return {
    width: d,
    height: p,
    x: v,
    y: h
  };
}
function Op(a, r, u) {
  let o;
  if (r === "viewport")
    o = s1(a, u);
  else if (r === "document")
    o = c1(un(a));
  else if (Jt(r))
    o = f1(r, u);
  else {
    const s = mv(a);
    o = {
      x: r.x - s.x,
      y: r.y - s.y,
      width: r.width,
      height: r.height
    };
  }
  return Go(o);
}
function pv(a, r) {
  const u = sl(a);
  return u === r || !Jt(u) || ka(u) ? !1 : $t(u).position === "fixed" || pv(u, r);
}
function d1(a, r) {
  const u = r.get(a);
  if (u)
    return u;
  let o = Wi(a, [], !1).filter((p) => Jt(p) && Ga(p) !== "body"), s = null;
  const f = $t(a).position === "fixed";
  let d = f ? sl(a) : a;
  for (; Jt(d) && !ka(d); ) {
    const p = $t(d), v = tf(d);
    !v && p.position === "fixed" && (s = null), (f ? !v && !s : !v && p.position === "static" && !!s && ["absolute", "fixed"].includes(s.position) || ir(d) && !v && pv(a, d)) ? o = o.filter((y) => y !== d) : s = p, d = sl(d);
  }
  return r.set(a, o), o;
}
function m1(a) {
  let {
    element: r,
    boundary: u,
    rootBoundary: o,
    strategy: s
  } = a;
  const d = [...u === "clippingAncestors" ? Ko(r) ? [] : d1(r, this._c) : [].concat(u), o], p = d[0], v = d.reduce((h, y) => {
    const b = Op(r, y, s);
    return h.top = Nt(b.top, h.top), h.right = cl(b.right, h.right), h.bottom = cl(b.bottom, h.bottom), h.left = Nt(b.left, h.left), h;
  }, Op(r, p, s));
  return {
    width: v.right - v.left,
    height: v.bottom - v.top,
    x: v.left,
    y: v.top
  };
}
function h1(a) {
  const {
    width: r,
    height: u
  } = dv(a);
  return {
    width: r,
    height: u
  };
}
function p1(a, r, u) {
  const o = on(r), s = un(r), f = u === "fixed", d = Bl(a, !0, f, r);
  let p = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const v = rn(0);
  function h() {
    v.x = af(s);
  }
  if (o || !o && !f)
    if ((Ga(r) !== "body" || ir(s)) && (p = Jo(r)), o) {
      const A = Bl(r, !0, f, r);
      v.x = A.x + r.clientLeft, v.y = A.y + r.clientTop;
    } else s && h();
  f && !o && s && h();
  const y = s && !o && !f ? hv(s, p) : rn(0), b = d.left + p.scrollLeft - v.x - y.x, x = d.top + p.scrollTop - v.y - y.y;
  return {
    x: b,
    y: x,
    width: d.width,
    height: d.height
  };
}
function xs(a) {
  return $t(a).position === "static";
}
function Tp(a, r) {
  if (!on(a) || $t(a).position === "fixed")
    return null;
  if (r)
    return r(a);
  let u = a.offsetParent;
  return un(a) === u && (u = u.ownerDocument.body), u;
}
function vv(a, r) {
  const u = Dt(a);
  if (Ko(a))
    return u;
  if (!on(a)) {
    let s = sl(a);
    for (; s && !ka(s); ) {
      if (Jt(s) && !xs(s))
        return s;
      s = sl(s);
    }
    return u;
  }
  let o = Tp(a, r);
  for (; o && l1(o) && xs(o); )
    o = Tp(o, r);
  return o && ka(o) && xs(o) && !tf(o) ? u : o || a1(a) || u;
}
const v1 = async function(a) {
  const r = this.getOffsetParent || vv, u = this.getDimensions, o = await u(a.floating);
  return {
    reference: p1(a.reference, await r(a.floating), a.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function g1(a) {
  return $t(a).direction === "rtl";
}
const y1 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: o1,
  getDocumentElement: un,
  getClippingRect: m1,
  getOffsetParent: vv,
  getElementRects: v1,
  getClientRects: u1,
  getDimensions: h1,
  getScale: La,
  isElement: Jt,
  isRTL: g1
};
function gv(a, r) {
  return a.x === r.x && a.y === r.y && a.width === r.width && a.height === r.height;
}
function b1(a, r) {
  let u = null, o;
  const s = un(a);
  function f() {
    var p;
    clearTimeout(o), (p = u) == null || p.disconnect(), u = null;
  }
  function d(p, v) {
    p === void 0 && (p = !1), v === void 0 && (v = 1), f();
    const h = a.getBoundingClientRect(), {
      left: y,
      top: b,
      width: x,
      height: A
    } = h;
    if (p || r(), !x || !A)
      return;
    const C = Mo(b), E = Mo(s.clientWidth - (y + x)), O = Mo(s.clientHeight - (b + A)), T = Mo(y), z = {
      rootMargin: -C + "px " + -E + "px " + -O + "px " + -T + "px",
      threshold: Nt(0, cl(1, v)) || 1
    };
    let Y = !0;
    function U(J) {
      const K = J[0].intersectionRatio;
      if (K !== v) {
        if (!Y)
          return d();
        K ? d(!1, K) : o = setTimeout(() => {
          d(!1, 1e-7);
        }, 1e3);
      }
      K === 1 && !gv(h, a.getBoundingClientRect()) && d(), Y = !1;
    }
    try {
      u = new IntersectionObserver(U, {
        ...z,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      u = new IntersectionObserver(U, z);
    }
    u.observe(a);
  }
  return d(!0), f;
}
function x1(a, r, u, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: f = !0,
    elementResize: d = typeof ResizeObserver == "function",
    layoutShift: p = typeof IntersectionObserver == "function",
    animationFrame: v = !1
  } = o, h = lf(a), y = s || f ? [...h ? Wi(h) : [], ...Wi(r)] : [];
  y.forEach((T) => {
    s && T.addEventListener("scroll", u, {
      passive: !0
    }), f && T.addEventListener("resize", u);
  });
  const b = h && p ? b1(h, u) : null;
  let x = -1, A = null;
  d && (A = new ResizeObserver((T) => {
    let [j] = T;
    j && j.target === h && A && (A.unobserve(r), cancelAnimationFrame(x), x = requestAnimationFrame(() => {
      var z;
      (z = A) == null || z.observe(r);
    })), u();
  }), h && !v && A.observe(h), A.observe(r));
  let C, E = v ? Bl(a) : null;
  v && O();
  function O() {
    const T = Bl(a);
    E && !gv(E, T) && u(), E = T, C = requestAnimationFrame(O);
  }
  return u(), () => {
    var T;
    y.forEach((j) => {
      s && j.removeEventListener("scroll", u), f && j.removeEventListener("resize", u);
    }), b == null || b(), (T = A) == null || T.disconnect(), A = null, v && cancelAnimationFrame(C);
  };
}
const S1 = Ib, E1 = e1, w1 = Pb, A1 = n1, R1 = Fb, _p = $b, C1 = t1, M1 = (a, r, u) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: y1,
    ...u
  }, f = {
    ...s.platform,
    _c: o
  };
  return Jb(a, r, {
    ...s,
    platform: f
  });
};
var Uo = typeof document < "u" ? w.useLayoutEffect : w.useEffect;
function Yo(a, r) {
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
        if (!Yo(a[o], r[o]))
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
      if (!(f === "_owner" && a.$$typeof) && !Yo(a[f], r[f]))
        return !1;
    }
    return !0;
  }
  return a !== a && r !== r;
}
function yv(a) {
  return typeof window > "u" ? 1 : (a.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Np(a, r) {
  const u = yv(a);
  return Math.round(r * u) / u;
}
function Ss(a) {
  const r = w.useRef(a);
  return Uo(() => {
    r.current = a;
  }), r;
}
function O1(a) {
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
    transform: p = !0,
    whileElementsMounted: v,
    open: h
  } = a, [y, b] = w.useState({
    x: 0,
    y: 0,
    strategy: u,
    placement: r,
    middlewareData: {},
    isPositioned: !1
  }), [x, A] = w.useState(o);
  Yo(x, o) || A(o);
  const [C, E] = w.useState(null), [O, T] = w.useState(null), j = w.useCallback((k) => {
    k !== J.current && (J.current = k, E(k));
  }, []), z = w.useCallback((k) => {
    k !== K.current && (K.current = k, T(k));
  }, []), Y = f || C, U = d || O, J = w.useRef(null), K = w.useRef(null), q = w.useRef(y), I = v != null, ne = Ss(v), le = Ss(s), ue = Ss(h), me = w.useCallback(() => {
    if (!J.current || !K.current)
      return;
    const k = {
      placement: r,
      strategy: u,
      middleware: x
    };
    le.current && (k.platform = le.current), M1(J.current, K.current, k).then((F) => {
      const R = {
        ...F,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: ue.current !== !1
      };
      se.current && !Yo(q.current, R) && (q.current = R, Fs.flushSync(() => {
        b(R);
      }));
    });
  }, [x, r, u, le, ue]);
  Uo(() => {
    h === !1 && q.current.isPositioned && (q.current.isPositioned = !1, b((k) => ({
      ...k,
      isPositioned: !1
    })));
  }, [h]);
  const se = w.useRef(!1);
  Uo(() => (se.current = !0, () => {
    se.current = !1;
  }), []), Uo(() => {
    if (Y && (J.current = Y), U && (K.current = U), Y && U) {
      if (ne.current)
        return ne.current(Y, U, me);
      me();
    }
  }, [Y, U, me, ne, I]);
  const Q = w.useMemo(() => ({
    reference: J,
    floating: K,
    setReference: j,
    setFloating: z
  }), [j, z]), D = w.useMemo(() => ({
    reference: Y,
    floating: U
  }), [Y, U]), X = w.useMemo(() => {
    const k = {
      position: u,
      left: 0,
      top: 0
    };
    if (!D.floating)
      return k;
    const F = Np(D.floating, y.x), R = Np(D.floating, y.y);
    return p ? {
      ...k,
      transform: "translate(" + F + "px, " + R + "px)",
      ...yv(D.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: u,
      left: F,
      top: R
    };
  }, [u, p, D.floating, y.x, y.y]);
  return w.useMemo(() => ({
    ...y,
    update: me,
    refs: Q,
    elements: D,
    floatingStyles: X
  }), [y, me, Q, D, X]);
}
const T1 = (a) => {
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
      return o && r(o) ? o.current != null ? _p({
        element: o.current,
        padding: s
      }).fn(u) : {} : o ? _p({
        element: o,
        padding: s
      }).fn(u) : {};
    }
  };
}, _1 = (a, r) => ({
  ...S1(a),
  options: [a, r]
}), N1 = (a, r) => ({
  ...E1(a),
  options: [a, r]
}), D1 = (a, r) => ({
  ...C1(a),
  options: [a, r]
}), z1 = (a, r) => ({
  ...w1(a),
  options: [a, r]
}), j1 = (a, r) => ({
  ...A1(a),
  options: [a, r]
}), U1 = (a, r) => ({
  ...R1(a),
  options: [a, r]
}), L1 = (a, r) => ({
  ...T1(a),
  options: [a, r]
});
var B1 = "Arrow", bv = w.forwardRef((a, r) => {
  const { children: u, width: o = 10, height: s = 5, ...f } = a;
  return /* @__PURE__ */ S.jsx(
    pt.svg,
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
bv.displayName = B1;
var k1 = bv;
function H1(a) {
  const [r, u] = w.useState(void 0);
  return ul(() => {
    if (a) {
      u({ width: a.offsetWidth, height: a.offsetHeight });
      const o = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const f = s[0];
        let d, p;
        if ("borderBoxSize" in f) {
          const v = f.borderBoxSize, h = Array.isArray(v) ? v[0] : v;
          d = h.inlineSize, p = h.blockSize;
        } else
          d = a.offsetWidth, p = a.offsetHeight;
        u({ width: d, height: p });
      });
      return o.observe(a, { box: "border-box" }), () => o.unobserve(a);
    } else
      u(void 0);
  }, [a]), r;
}
var rf = "Popper", [xv, Sv] = ar(rf), [G1, Ev] = xv(rf), wv = (a) => {
  const { __scopePopper: r, children: u } = a, [o, s] = w.useState(null);
  return /* @__PURE__ */ S.jsx(G1, { scope: r, anchor: o, onAnchorChange: s, children: u });
};
wv.displayName = rf;
var Av = "PopperAnchor", Rv = w.forwardRef(
  (a, r) => {
    const { __scopePopper: u, virtualRef: o, ...s } = a, f = Ev(Av, u), d = w.useRef(null), p = wt(r, d);
    return w.useEffect(() => {
      f.onAnchorChange((o == null ? void 0 : o.current) || d.current);
    }), o ? null : /* @__PURE__ */ S.jsx(pt.div, { ...s, ref: p });
  }
);
Rv.displayName = Av;
var of = "PopperContent", [Y1, q1] = xv(of), Cv = w.forwardRef(
  (a, r) => {
    var de, ve, Re, Be, Me, ae;
    const {
      __scopePopper: u,
      side: o = "bottom",
      sideOffset: s = 0,
      align: f = "center",
      alignOffset: d = 0,
      arrowPadding: p = 0,
      avoidCollisions: v = !0,
      collisionBoundary: h = [],
      collisionPadding: y = 0,
      sticky: b = "partial",
      hideWhenDetached: x = !1,
      updatePositionStrategy: A = "optimized",
      onPlaced: C,
      ...E
    } = a, O = Ev(of, u), [T, j] = w.useState(null), z = wt(r, (Ce) => j(Ce)), [Y, U] = w.useState(null), J = H1(Y), K = (J == null ? void 0 : J.width) ?? 0, q = (J == null ? void 0 : J.height) ?? 0, I = o + (f !== "center" ? "-" + f : ""), ne = typeof y == "number" ? y : { top: 0, right: 0, bottom: 0, left: 0, ...y }, le = Array.isArray(h) ? h : [h], ue = le.length > 0, me = {
      padding: ne,
      boundary: le.filter(X1),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: ue
    }, { refs: se, floatingStyles: Q, placement: D, isPositioned: X, middlewareData: k } = O1({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: I,
      whileElementsMounted: (...Ce) => x1(...Ce, {
        animationFrame: A === "always"
      }),
      elements: {
        reference: O.anchor
      },
      middleware: [
        _1({ mainAxis: s + q, alignmentAxis: d }),
        v && N1({
          mainAxis: !0,
          crossAxis: !1,
          limiter: b === "partial" ? D1() : void 0,
          ...me
        }),
        v && z1({ ...me }),
        j1({
          ...me,
          apply: ({ elements: Ce, rects: ke, availableWidth: Fe, availableHeight: gt }) => {
            const { width: Xe, height: Vt } = ke.reference, ct = Ce.floating.style;
            ct.setProperty("--radix-popper-available-width", `${Fe}px`), ct.setProperty("--radix-popper-available-height", `${gt}px`), ct.setProperty("--radix-popper-anchor-width", `${Xe}px`), ct.setProperty("--radix-popper-anchor-height", `${Vt}px`);
          }
        }),
        Y && L1({ element: Y, padding: p }),
        Q1({ arrowWidth: K, arrowHeight: q }),
        x && U1({ strategy: "referenceHidden", ...me })
      ]
    }), [F, R] = Tv(D), V = _n(C);
    ul(() => {
      X && (V == null || V());
    }, [X, V]);
    const ee = (de = k.arrow) == null ? void 0 : de.x, W = (ve = k.arrow) == null ? void 0 : ve.y, te = ((Re = k.arrow) == null ? void 0 : Re.centerOffset) !== 0, [ge, ce] = w.useState();
    return ul(() => {
      T && ce(window.getComputedStyle(T).zIndex);
    }, [T]), /* @__PURE__ */ S.jsx(
      "div",
      {
        ref: se.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Q,
          transform: X ? Q.transform : "translate(0, -200%)",
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
          Y1,
          {
            scope: u,
            placedSide: F,
            onArrowChange: U,
            arrowX: ee,
            arrowY: W,
            shouldHideArrow: te,
            children: /* @__PURE__ */ S.jsx(
              pt.div,
              {
                "data-side": F,
                "data-align": R,
                ...E,
                ref: z,
                style: {
                  ...E.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: X ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Cv.displayName = of;
var Mv = "PopperArrow", V1 = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Ov = w.forwardRef(function(r, u) {
  const { __scopePopper: o, ...s } = r, f = q1(Mv, o), d = V1[f.placedSide];
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
          k1,
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
Ov.displayName = Mv;
function X1(a) {
  return a !== null;
}
var Q1 = (a) => ({
  name: "transformOrigin",
  options: a,
  fn(r) {
    var O, T, j;
    const { placement: u, rects: o, middlewareData: s } = r, d = ((O = s.arrow) == null ? void 0 : O.centerOffset) !== 0, p = d ? 0 : a.arrowWidth, v = d ? 0 : a.arrowHeight, [h, y] = Tv(u), b = { start: "0%", center: "50%", end: "100%" }[y], x = (((T = s.arrow) == null ? void 0 : T.x) ?? 0) + p / 2, A = (((j = s.arrow) == null ? void 0 : j.y) ?? 0) + v / 2;
    let C = "", E = "";
    return h === "bottom" ? (C = d ? b : `${x}px`, E = `${-v}px`) : h === "top" ? (C = d ? b : `${x}px`, E = `${o.floating.height + v}px`) : h === "right" ? (C = `${-v}px`, E = d ? b : `${A}px`) : h === "left" && (C = `${o.floating.width + v}px`, E = d ? b : `${A}px`), { data: { x: C, y: E } };
  }
});
function Tv(a) {
  const [r, u = "center"] = a.split("-");
  return [r, u];
}
var Z1 = wv, K1 = Rv, J1 = Cv, $1 = Ov, P1 = "Portal", _v = w.forwardRef((a, r) => {
  var p;
  const { container: u, ...o } = a, [s, f] = w.useState(!1);
  ul(() => f(!0), []);
  const d = u || s && ((p = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : p.body);
  return d ? mb.createPortal(/* @__PURE__ */ S.jsx(pt.div, { ...o, ref: r }), d) : null;
});
_v.displayName = P1;
function F1(a, r) {
  return w.useReducer((u, o) => r[u][o] ?? u, a);
}
var rr = (a) => {
  const { present: r, children: u } = a, o = W1(r), s = typeof u == "function" ? u({ present: o.isPresent }) : w.Children.only(u), f = wt(o.ref, I1(s));
  return typeof u == "function" || o.isPresent ? w.cloneElement(s, { ref: f }) : null;
};
rr.displayName = "Presence";
function W1(a) {
  const [r, u] = w.useState(), o = w.useRef(null), s = w.useRef(a), f = w.useRef("none"), d = a ? "mounted" : "unmounted", [p, v] = F1(d, {
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
  return w.useEffect(() => {
    const h = Oo(o.current);
    f.current = p === "mounted" ? h : "none";
  }, [p]), ul(() => {
    const h = o.current, y = s.current;
    if (y !== a) {
      const x = f.current, A = Oo(h);
      a ? v("MOUNT") : A === "none" || (h == null ? void 0 : h.display) === "none" ? v("UNMOUNT") : v(y && x !== A ? "ANIMATION_OUT" : "UNMOUNT"), s.current = a;
    }
  }, [a, v]), ul(() => {
    if (r) {
      let h;
      const y = r.ownerDocument.defaultView ?? window, b = (A) => {
        const E = Oo(o.current).includes(A.animationName);
        if (A.target === r && E && (v("ANIMATION_END"), !s.current)) {
          const O = r.style.animationFillMode;
          r.style.animationFillMode = "forwards", h = y.setTimeout(() => {
            r.style.animationFillMode === "forwards" && (r.style.animationFillMode = O);
          });
        }
      }, x = (A) => {
        A.target === r && (f.current = Oo(o.current));
      };
      return r.addEventListener("animationstart", x), r.addEventListener("animationcancel", b), r.addEventListener("animationend", b), () => {
        y.clearTimeout(h), r.removeEventListener("animationstart", x), r.removeEventListener("animationcancel", b), r.removeEventListener("animationend", b);
      };
    } else
      v("ANIMATION_END");
  }, [r, v]), {
    isPresent: ["mounted", "unmountSuspended"].includes(p),
    ref: w.useCallback((h) => {
      o.current = h ? getComputedStyle(h) : null, u(h);
    }, [])
  };
}
function Oo(a) {
  return (a == null ? void 0 : a.animationName) || "none";
}
function I1(a) {
  var o, s;
  let r = (o = Object.getOwnPropertyDescriptor(a.props, "ref")) == null ? void 0 : o.get, u = r && "isReactWarning" in r && r.isReactWarning;
  return u ? a.ref : (r = (s = Object.getOwnPropertyDescriptor(a, "ref")) == null ? void 0 : s.get, u = r && "isReactWarning" in r && r.isReactWarning, u ? a.props.ref : a.props.ref || a.ref);
}
var Es = "rovingFocusGroup.onEntryFocus", ex = { bubbles: !1, cancelable: !0 }, or = "RovingFocusGroup", [Hs, Nv, tx] = nv(or), [nx, Dv] = ar(
  or,
  [tx]
), [lx, ax] = nx(or), zv = w.forwardRef(
  (a, r) => /* @__PURE__ */ S.jsx(Hs.Provider, { scope: a.__scopeRovingFocusGroup, children: /* @__PURE__ */ S.jsx(Hs.Slot, { scope: a.__scopeRovingFocusGroup, children: /* @__PURE__ */ S.jsx(ix, { ...a, ref: r }) }) })
);
zv.displayName = or;
var ix = w.forwardRef((a, r) => {
  const {
    __scopeRovingFocusGroup: u,
    orientation: o,
    loop: s = !1,
    dir: f,
    currentTabStopId: d,
    defaultCurrentTabStopId: p,
    onCurrentTabStopIdChange: v,
    onEntryFocus: h,
    preventScrollOnEntryFocus: y = !1,
    ...b
  } = a, x = w.useRef(null), A = wt(r, x), C = lv(f), [E, O] = ev({
    prop: d,
    defaultProp: p ?? null,
    onChange: v,
    caller: or
  }), [T, j] = w.useState(!1), z = _n(h), Y = Nv(u), U = w.useRef(!1), [J, K] = w.useState(0);
  return w.useEffect(() => {
    const q = x.current;
    if (q)
      return q.addEventListener(Es, z), () => q.removeEventListener(Es, z);
  }, [z]), /* @__PURE__ */ S.jsx(
    lx,
    {
      scope: u,
      orientation: o,
      dir: C,
      loop: s,
      currentTabStopId: E,
      onItemFocus: w.useCallback(
        (q) => O(q),
        [O]
      ),
      onItemShiftTab: w.useCallback(() => j(!0), []),
      onFocusableItemAdd: w.useCallback(
        () => K((q) => q + 1),
        []
      ),
      onFocusableItemRemove: w.useCallback(
        () => K((q) => q - 1),
        []
      ),
      children: /* @__PURE__ */ S.jsx(
        pt.div,
        {
          tabIndex: T || J === 0 ? -1 : 0,
          "data-orientation": o,
          ...b,
          ref: A,
          style: { outline: "none", ...a.style },
          onMouseDown: Te(a.onMouseDown, () => {
            U.current = !0;
          }),
          onFocus: Te(a.onFocus, (q) => {
            const I = !U.current;
            if (q.target === q.currentTarget && I && !T) {
              const ne = new CustomEvent(Es, ex);
              if (q.currentTarget.dispatchEvent(ne), !ne.defaultPrevented) {
                const le = Y().filter((D) => D.focusable), ue = le.find((D) => D.active), me = le.find((D) => D.id === E), Q = [ue, me, ...le].filter(
                  Boolean
                ).map((D) => D.ref.current);
                Lv(Q, y);
              }
            }
            U.current = !1;
          }),
          onBlur: Te(a.onBlur, () => j(!1))
        }
      )
    }
  );
}), jv = "RovingFocusGroupItem", Uv = w.forwardRef(
  (a, r) => {
    const {
      __scopeRovingFocusGroup: u,
      focusable: o = !0,
      active: s = !1,
      tabStopId: f,
      children: d,
      ...p
    } = a, v = Us(), h = f || v, y = ax(jv, u), b = y.currentTabStopId === h, x = Nv(u), { onFocusableItemAdd: A, onFocusableItemRemove: C, currentTabStopId: E } = y;
    return w.useEffect(() => {
      if (o)
        return A(), () => C();
    }, [o, A, C]), /* @__PURE__ */ S.jsx(
      Hs.ItemSlot,
      {
        scope: u,
        id: h,
        focusable: o,
        active: s,
        children: /* @__PURE__ */ S.jsx(
          pt.span,
          {
            tabIndex: b ? 0 : -1,
            "data-orientation": y.orientation,
            ...p,
            ref: r,
            onMouseDown: Te(a.onMouseDown, (O) => {
              o ? y.onItemFocus(h) : O.preventDefault();
            }),
            onFocus: Te(a.onFocus, () => y.onItemFocus(h)),
            onKeyDown: Te(a.onKeyDown, (O) => {
              if (O.key === "Tab" && O.shiftKey) {
                y.onItemShiftTab();
                return;
              }
              if (O.target !== O.currentTarget) return;
              const T = ux(O, y.orientation, y.dir);
              if (T !== void 0) {
                if (O.metaKey || O.ctrlKey || O.altKey || O.shiftKey) return;
                O.preventDefault();
                let z = x().filter((Y) => Y.focusable).map((Y) => Y.ref.current);
                if (T === "last") z.reverse();
                else if (T === "prev" || T === "next") {
                  T === "prev" && z.reverse();
                  const Y = z.indexOf(O.currentTarget);
                  z = y.loop ? cx(z, Y + 1) : z.slice(Y + 1);
                }
                setTimeout(() => Lv(z));
              }
            }),
            children: typeof d == "function" ? d({ isCurrentTabStop: b, hasTabStop: E != null }) : d
          }
        )
      }
    );
  }
);
Uv.displayName = jv;
var rx = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function ox(a, r) {
  return r !== "rtl" ? a : a === "ArrowLeft" ? "ArrowRight" : a === "ArrowRight" ? "ArrowLeft" : a;
}
function ux(a, r, u) {
  const o = ox(a.key, u);
  if (!(r === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(r === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return rx[o];
}
function Lv(a, r = !1) {
  const u = document.activeElement;
  for (const o of a)
    if (o === u || (o.focus({ preventScroll: r }), document.activeElement !== u)) return;
}
function cx(a, r) {
  return a.map((u, o) => a[(r + o) % a.length]);
}
var sx = zv, fx = Uv, dx = function(a) {
  if (typeof document > "u")
    return null;
  var r = Array.isArray(a) ? a[0] : a;
  return r.ownerDocument.body;
}, Na = /* @__PURE__ */ new WeakMap(), To = /* @__PURE__ */ new WeakMap(), _o = {}, ws = 0, Bv = function(a) {
  return a && (a.host || Bv(a.parentNode));
}, mx = function(a, r) {
  return r.map(function(u) {
    if (a.contains(u))
      return u;
    var o = Bv(u);
    return o && a.contains(o) ? o : (console.error("aria-hidden", u, "in not contained inside", a, ". Doing nothing"), null);
  }).filter(function(u) {
    return !!u;
  });
}, hx = function(a, r, u, o) {
  var s = mx(r, Array.isArray(a) ? a : [a]);
  _o[u] || (_o[u] = /* @__PURE__ */ new WeakMap());
  var f = _o[u], d = [], p = /* @__PURE__ */ new Set(), v = new Set(s), h = function(b) {
    !b || p.has(b) || (p.add(b), h(b.parentNode));
  };
  s.forEach(h);
  var y = function(b) {
    !b || v.has(b) || Array.prototype.forEach.call(b.children, function(x) {
      if (p.has(x))
        y(x);
      else
        try {
          var A = x.getAttribute(o), C = A !== null && A !== "false", E = (Na.get(x) || 0) + 1, O = (f.get(x) || 0) + 1;
          Na.set(x, E), f.set(x, O), d.push(x), E === 1 && C && To.set(x, !0), O === 1 && x.setAttribute(u, "true"), C || x.setAttribute(o, "true");
        } catch (T) {
          console.error("aria-hidden: cannot operate on ", x, T);
        }
    });
  };
  return y(r), p.clear(), ws++, function() {
    d.forEach(function(b) {
      var x = Na.get(b) - 1, A = f.get(b) - 1;
      Na.set(b, x), f.set(b, A), x || (To.has(b) || b.removeAttribute(o), To.delete(b)), A || b.removeAttribute(u);
    }), ws--, ws || (Na = /* @__PURE__ */ new WeakMap(), Na = /* @__PURE__ */ new WeakMap(), To = /* @__PURE__ */ new WeakMap(), _o = {});
  };
}, px = function(a, r, u) {
  u === void 0 && (u = "data-aria-hidden");
  var o = Array.from(Array.isArray(a) ? a : [a]), s = dx(a);
  return s ? (o.push.apply(o, Array.from(s.querySelectorAll("[aria-live]"))), hx(o, s, u, "aria-hidden")) : function() {
    return null;
  };
}, an = function() {
  return an = Object.assign || function(r) {
    for (var u, o = 1, s = arguments.length; o < s; o++) {
      u = arguments[o];
      for (var f in u) Object.prototype.hasOwnProperty.call(u, f) && (r[f] = u[f]);
    }
    return r;
  }, an.apply(this, arguments);
};
function kv(a, r) {
  var u = {};
  for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && r.indexOf(o) < 0 && (u[o] = a[o]);
  if (a != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, o = Object.getOwnPropertySymbols(a); s < o.length; s++)
      r.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(a, o[s]) && (u[o[s]] = a[o[s]]);
  return u;
}
function vx(a, r, u) {
  if (u || arguments.length === 2) for (var o = 0, s = r.length, f; o < s; o++)
    (f || !(o in r)) && (f || (f = Array.prototype.slice.call(r, 0, o)), f[o] = r[o]);
  return a.concat(f || Array.prototype.slice.call(r));
}
var Lo = "right-scroll-bar-position", Bo = "width-before-scroll-bar", gx = "with-scroll-bars-hidden", yx = "--removed-body-scroll-bar-size";
function As(a, r) {
  return typeof a == "function" ? a(r) : a && (a.current = r), a;
}
function bx(a, r) {
  var u = w.useState(function() {
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
var xx = typeof window < "u" ? w.useLayoutEffect : w.useEffect, Dp = /* @__PURE__ */ new WeakMap();
function Sx(a, r) {
  var u = bx(null, function(o) {
    return a.forEach(function(s) {
      return As(s, o);
    });
  });
  return xx(function() {
    var o = Dp.get(u);
    if (o) {
      var s = new Set(o), f = new Set(a), d = u.current;
      s.forEach(function(p) {
        f.has(p) || As(p, null);
      }), f.forEach(function(p) {
        s.has(p) || As(p, d);
      });
    }
    Dp.set(u, a);
  }, [a]), u;
}
function Ex(a) {
  return a;
}
function wx(a, r) {
  r === void 0 && (r = Ex);
  var u = [], o = !1, s = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return u.length ? u[u.length - 1] : a;
    },
    useMedium: function(f) {
      var d = r(f, o);
      return u.push(d), function() {
        u = u.filter(function(p) {
          return p !== d;
        });
      };
    },
    assignSyncMedium: function(f) {
      for (o = !0; u.length; ) {
        var d = u;
        u = [], d.forEach(f);
      }
      u = {
        push: function(p) {
          return f(p);
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
        var p = u;
        u = [], p.forEach(f), d = u;
      }
      var v = function() {
        var y = d;
        d = [], y.forEach(f);
      }, h = function() {
        return Promise.resolve().then(v);
      };
      h(), u = {
        push: function(y) {
          d.push(y), h();
        },
        filter: function(y) {
          return d = d.filter(y), u;
        }
      };
    }
  };
  return s;
}
function Ax(a) {
  a === void 0 && (a = {});
  var r = wx(null);
  return r.options = an({ async: !0, ssr: !1 }, a), r;
}
var Hv = function(a) {
  var r = a.sideCar, u = kv(a, ["sideCar"]);
  if (!r)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = r.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return w.createElement(o, an({}, u));
};
Hv.isSideCarExport = !0;
function Rx(a, r) {
  return a.useMedium(r), Hv;
}
var Gv = Ax(), Rs = function() {
}, $o = w.forwardRef(function(a, r) {
  var u = w.useRef(null), o = w.useState({
    onScrollCapture: Rs,
    onWheelCapture: Rs,
    onTouchMoveCapture: Rs
  }), s = o[0], f = o[1], d = a.forwardProps, p = a.children, v = a.className, h = a.removeScrollBar, y = a.enabled, b = a.shards, x = a.sideCar, A = a.noIsolation, C = a.inert, E = a.allowPinchZoom, O = a.as, T = O === void 0 ? "div" : O, j = a.gapMode, z = kv(a, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), Y = x, U = Sx([u, r]), J = an(an({}, z), s);
  return w.createElement(
    w.Fragment,
    null,
    y && w.createElement(Y, { sideCar: Gv, removeScrollBar: h, shards: b, noIsolation: A, inert: C, setCallbacks: f, allowPinchZoom: !!E, lockRef: u, gapMode: j }),
    d ? w.cloneElement(w.Children.only(p), an(an({}, J), { ref: U })) : w.createElement(T, an({}, J, { className: v, ref: U }), p)
  );
});
$o.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
$o.classNames = {
  fullWidth: Bo,
  zeroRight: Lo
};
var Cx = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Mx() {
  if (!document)
    return null;
  var a = document.createElement("style");
  a.type = "text/css";
  var r = Cx();
  return r && a.setAttribute("nonce", r), a;
}
function Ox(a, r) {
  a.styleSheet ? a.styleSheet.cssText = r : a.appendChild(document.createTextNode(r));
}
function Tx(a) {
  var r = document.head || document.getElementsByTagName("head")[0];
  r.appendChild(a);
}
var _x = function() {
  var a = 0, r = null;
  return {
    add: function(u) {
      a == 0 && (r = Mx()) && (Ox(r, u), Tx(r)), a++;
    },
    remove: function() {
      a--, !a && r && (r.parentNode && r.parentNode.removeChild(r), r = null);
    }
  };
}, Nx = function() {
  var a = _x();
  return function(r, u) {
    w.useEffect(function() {
      return a.add(r), function() {
        a.remove();
      };
    }, [r && u]);
  };
}, Yv = function() {
  var a = Nx(), r = function(u) {
    var o = u.styles, s = u.dynamic;
    return a(o, s), null;
  };
  return r;
}, Dx = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Cs = function(a) {
  return parseInt(a || "", 10) || 0;
}, zx = function(a) {
  var r = window.getComputedStyle(document.body), u = r[a === "padding" ? "paddingLeft" : "marginLeft"], o = r[a === "padding" ? "paddingTop" : "marginTop"], s = r[a === "padding" ? "paddingRight" : "marginRight"];
  return [Cs(u), Cs(o), Cs(s)];
}, jx = function(a) {
  if (a === void 0 && (a = "margin"), typeof window > "u")
    return Dx;
  var r = zx(a), u = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: r[0],
    top: r[1],
    right: r[2],
    gap: Math.max(0, o - u + r[2] - r[0])
  };
}, Ux = Yv(), Ba = "data-scroll-locked", Lx = function(a, r, u, o) {
  var s = a.left, f = a.top, d = a.right, p = a.gap;
  return u === void 0 && (u = "margin"), `
  .`.concat(gx, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(p, "px ").concat(o, `;
  }
  body[`).concat(Ba, `] {
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
    margin-right: `).concat(p, "px ").concat(o, `;
    `),
    u === "padding" && "padding-right: ".concat(p, "px ").concat(o, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Lo, ` {
    right: `).concat(p, "px ").concat(o, `;
  }
  
  .`).concat(Bo, ` {
    margin-right: `).concat(p, "px ").concat(o, `;
  }
  
  .`).concat(Lo, " .").concat(Lo, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(Bo, " .").concat(Bo, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(Ba, `] {
    `).concat(yx, ": ").concat(p, `px;
  }
`);
}, zp = function() {
  var a = parseInt(document.body.getAttribute(Ba) || "0", 10);
  return isFinite(a) ? a : 0;
}, Bx = function() {
  w.useEffect(function() {
    return document.body.setAttribute(Ba, (zp() + 1).toString()), function() {
      var a = zp() - 1;
      a <= 0 ? document.body.removeAttribute(Ba) : document.body.setAttribute(Ba, a.toString());
    };
  }, []);
}, kx = function(a) {
  var r = a.noRelative, u = a.noImportant, o = a.gapMode, s = o === void 0 ? "margin" : o;
  Bx();
  var f = w.useMemo(function() {
    return jx(s);
  }, [s]);
  return w.createElement(Ux, { styles: Lx(f, !r, s, u ? "" : "!important") });
}, Gs = !1;
if (typeof window < "u")
  try {
    var No = Object.defineProperty({}, "passive", {
      get: function() {
        return Gs = !0, !0;
      }
    });
    window.addEventListener("test", No, No), window.removeEventListener("test", No, No);
  } catch {
    Gs = !1;
  }
var Da = Gs ? { passive: !1 } : !1, Hx = function(a) {
  return a.tagName === "TEXTAREA";
}, qv = function(a, r) {
  if (!(a instanceof Element))
    return !1;
  var u = window.getComputedStyle(a);
  return (
    // not-not-scrollable
    u[r] !== "hidden" && // contains scroll inside self
    !(u.overflowY === u.overflowX && !Hx(a) && u[r] === "visible")
  );
}, Gx = function(a) {
  return qv(a, "overflowY");
}, Yx = function(a) {
  return qv(a, "overflowX");
}, jp = function(a, r) {
  var u = r.ownerDocument, o = r;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var s = Vv(a, o);
    if (s) {
      var f = Xv(a, o), d = f[1], p = f[2];
      if (d > p)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== u.body);
  return !1;
}, qx = function(a) {
  var r = a.scrollTop, u = a.scrollHeight, o = a.clientHeight;
  return [
    r,
    u,
    o
  ];
}, Vx = function(a) {
  var r = a.scrollLeft, u = a.scrollWidth, o = a.clientWidth;
  return [
    r,
    u,
    o
  ];
}, Vv = function(a, r) {
  return a === "v" ? Gx(r) : Yx(r);
}, Xv = function(a, r) {
  return a === "v" ? qx(r) : Vx(r);
}, Xx = function(a, r) {
  return a === "h" && r === "rtl" ? -1 : 1;
}, Qx = function(a, r, u, o, s) {
  var f = Xx(a, window.getComputedStyle(r).direction), d = f * o, p = u.target, v = r.contains(p), h = !1, y = d > 0, b = 0, x = 0;
  do {
    var A = Xv(a, p), C = A[0], E = A[1], O = A[2], T = E - O - f * C;
    (C || T) && Vv(a, p) && (b += T, x += C), p instanceof ShadowRoot ? p = p.host : p = p.parentNode;
  } while (
    // portaled content
    !v && p !== document.body || // self content
    v && (r.contains(p) || r === p)
  );
  return (y && Math.abs(b) < 1 || !y && Math.abs(x) < 1) && (h = !0), h;
}, Do = function(a) {
  return "changedTouches" in a ? [a.changedTouches[0].clientX, a.changedTouches[0].clientY] : [0, 0];
}, Up = function(a) {
  return [a.deltaX, a.deltaY];
}, Lp = function(a) {
  return a && "current" in a ? a.current : a;
}, Zx = function(a, r) {
  return a[0] === r[0] && a[1] === r[1];
}, Kx = function(a) {
  return `
  .block-interactivity-`.concat(a, ` {pointer-events: none;}
  .allow-interactivity-`).concat(a, ` {pointer-events: all;}
`);
}, Jx = 0, za = [];
function $x(a) {
  var r = w.useRef([]), u = w.useRef([0, 0]), o = w.useRef(), s = w.useState(Jx++)[0], f = w.useState(Yv)[0], d = w.useRef(a);
  w.useEffect(function() {
    d.current = a;
  }, [a]), w.useEffect(function() {
    if (a.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var E = vx([a.lockRef.current], (a.shards || []).map(Lp), !0).filter(Boolean);
      return E.forEach(function(O) {
        return O.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), E.forEach(function(O) {
          return O.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [a.inert, a.lockRef.current, a.shards]);
  var p = w.useCallback(function(E, O) {
    if ("touches" in E && E.touches.length === 2 || E.type === "wheel" && E.ctrlKey)
      return !d.current.allowPinchZoom;
    var T = Do(E), j = u.current, z = "deltaX" in E ? E.deltaX : j[0] - T[0], Y = "deltaY" in E ? E.deltaY : j[1] - T[1], U, J = E.target, K = Math.abs(z) > Math.abs(Y) ? "h" : "v";
    if ("touches" in E && K === "h" && J.type === "range")
      return !1;
    var q = jp(K, J);
    if (!q)
      return !0;
    if (q ? U = K : (U = K === "v" ? "h" : "v", q = jp(K, J)), !q)
      return !1;
    if (!o.current && "changedTouches" in E && (z || Y) && (o.current = U), !U)
      return !0;
    var I = o.current || U;
    return Qx(I, O, E, I === "h" ? z : Y);
  }, []), v = w.useCallback(function(E) {
    var O = E;
    if (!(!za.length || za[za.length - 1] !== f)) {
      var T = "deltaY" in O ? Up(O) : Do(O), j = r.current.filter(function(U) {
        return U.name === O.type && (U.target === O.target || O.target === U.shadowParent) && Zx(U.delta, T);
      })[0];
      if (j && j.should) {
        O.cancelable && O.preventDefault();
        return;
      }
      if (!j) {
        var z = (d.current.shards || []).map(Lp).filter(Boolean).filter(function(U) {
          return U.contains(O.target);
        }), Y = z.length > 0 ? p(O, z[0]) : !d.current.noIsolation;
        Y && O.cancelable && O.preventDefault();
      }
    }
  }, []), h = w.useCallback(function(E, O, T, j) {
    var z = { name: E, delta: O, target: T, should: j, shadowParent: Px(T) };
    r.current.push(z), setTimeout(function() {
      r.current = r.current.filter(function(Y) {
        return Y !== z;
      });
    }, 1);
  }, []), y = w.useCallback(function(E) {
    u.current = Do(E), o.current = void 0;
  }, []), b = w.useCallback(function(E) {
    h(E.type, Up(E), E.target, p(E, a.lockRef.current));
  }, []), x = w.useCallback(function(E) {
    h(E.type, Do(E), E.target, p(E, a.lockRef.current));
  }, []);
  w.useEffect(function() {
    return za.push(f), a.setCallbacks({
      onScrollCapture: b,
      onWheelCapture: b,
      onTouchMoveCapture: x
    }), document.addEventListener("wheel", v, Da), document.addEventListener("touchmove", v, Da), document.addEventListener("touchstart", y, Da), function() {
      za = za.filter(function(E) {
        return E !== f;
      }), document.removeEventListener("wheel", v, Da), document.removeEventListener("touchmove", v, Da), document.removeEventListener("touchstart", y, Da);
    };
  }, []);
  var A = a.removeScrollBar, C = a.inert;
  return w.createElement(
    w.Fragment,
    null,
    C ? w.createElement(f, { styles: Kx(s) }) : null,
    A ? w.createElement(kx, { gapMode: a.gapMode }) : null
  );
}
function Px(a) {
  for (var r = null; a !== null; )
    a instanceof ShadowRoot && (r = a.host, a = a.host), a = a.parentNode;
  return r;
}
const Fx = Rx(Gv, $x);
var Qv = w.forwardRef(function(a, r) {
  return w.createElement($o, an({}, a, { ref: r, sideCar: Fx }));
});
Qv.classNames = $o.classNames;
var Ys = ["Enter", " "], Wx = ["ArrowDown", "PageUp", "Home"], Zv = ["ArrowUp", "PageDown", "End"], Ix = [...Wx, ...Zv], eS = {
  ltr: [...Ys, "ArrowRight"],
  rtl: [...Ys, "ArrowLeft"]
}, tS = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, ur = "Menu", [Ii, nS, lS] = nv(ur), [Hl, Kv] = ar(ur, [
  lS,
  Sv,
  Dv
]), Po = Sv(), Jv = Dv(), [aS, Gl] = Hl(ur), [iS, cr] = Hl(ur), $v = (a) => {
  const { __scopeMenu: r, open: u = !1, children: o, dir: s, onOpenChange: f, modal: d = !0 } = a, p = Po(r), [v, h] = w.useState(null), y = w.useRef(!1), b = _n(f), x = lv(s);
  return w.useEffect(() => {
    const A = () => {
      y.current = !0, document.addEventListener("pointerdown", C, { capture: !0, once: !0 }), document.addEventListener("pointermove", C, { capture: !0, once: !0 });
    }, C = () => y.current = !1;
    return document.addEventListener("keydown", A, { capture: !0 }), () => {
      document.removeEventListener("keydown", A, { capture: !0 }), document.removeEventListener("pointerdown", C, { capture: !0 }), document.removeEventListener("pointermove", C, { capture: !0 });
    };
  }, []), /* @__PURE__ */ S.jsx(Z1, { ...p, children: /* @__PURE__ */ S.jsx(
    aS,
    {
      scope: r,
      open: u,
      onOpenChange: b,
      content: v,
      onContentChange: h,
      children: /* @__PURE__ */ S.jsx(
        iS,
        {
          scope: r,
          onClose: w.useCallback(() => b(!1), [b]),
          isUsingKeyboardRef: y,
          dir: x,
          modal: d,
          children: o
        }
      )
    }
  ) });
};
$v.displayName = ur;
var rS = "MenuAnchor", uf = w.forwardRef(
  (a, r) => {
    const { __scopeMenu: u, ...o } = a, s = Po(u);
    return /* @__PURE__ */ S.jsx(K1, { ...s, ...o, ref: r });
  }
);
uf.displayName = rS;
var cf = "MenuPortal", [oS, Pv] = Hl(cf, {
  forceMount: void 0
}), Fv = (a) => {
  const { __scopeMenu: r, forceMount: u, children: o, container: s } = a, f = Gl(cf, r);
  return /* @__PURE__ */ S.jsx(oS, { scope: r, forceMount: u, children: /* @__PURE__ */ S.jsx(rr, { present: u || f.open, children: /* @__PURE__ */ S.jsx(_v, { asChild: !0, container: s, children: o }) }) });
};
Fv.displayName = cf;
var qt = "MenuContent", [uS, sf] = Hl(qt), Wv = w.forwardRef(
  (a, r) => {
    const u = Pv(qt, a.__scopeMenu), { forceMount: o = u.forceMount, ...s } = a, f = Gl(qt, a.__scopeMenu), d = cr(qt, a.__scopeMenu);
    return /* @__PURE__ */ S.jsx(Ii.Provider, { scope: a.__scopeMenu, children: /* @__PURE__ */ S.jsx(rr, { present: o || f.open, children: /* @__PURE__ */ S.jsx(Ii.Slot, { scope: a.__scopeMenu, children: d.modal ? /* @__PURE__ */ S.jsx(cS, { ...s, ref: r }) : /* @__PURE__ */ S.jsx(sS, { ...s, ref: r }) }) }) });
  }
), cS = w.forwardRef(
  (a, r) => {
    const u = Gl(qt, a.__scopeMenu), o = w.useRef(null), s = wt(r, o);
    return w.useEffect(() => {
      const f = o.current;
      if (f) return px(f);
    }, []), /* @__PURE__ */ S.jsx(
      ff,
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
), sS = w.forwardRef((a, r) => {
  const u = Gl(qt, a.__scopeMenu);
  return /* @__PURE__ */ S.jsx(
    ff,
    {
      ...a,
      ref: r,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => u.onOpenChange(!1)
    }
  );
}), fS = /* @__PURE__ */ Pi("MenuContent.ScrollLock"), ff = w.forwardRef(
  (a, r) => {
    const {
      __scopeMenu: u,
      loop: o = !1,
      trapFocus: s,
      onOpenAutoFocus: f,
      onCloseAutoFocus: d,
      disableOutsidePointerEvents: p,
      onEntryFocus: v,
      onEscapeKeyDown: h,
      onPointerDownOutside: y,
      onFocusOutside: b,
      onInteractOutside: x,
      onDismiss: A,
      disableOutsideScroll: C,
      ...E
    } = a, O = Gl(qt, u), T = cr(qt, u), j = Po(u), z = Jv(u), Y = nS(u), [U, J] = w.useState(null), K = w.useRef(null), q = wt(r, K, O.onContentChange), I = w.useRef(0), ne = w.useRef(""), le = w.useRef(0), ue = w.useRef(null), me = w.useRef("right"), se = w.useRef(0), Q = C ? Qv : w.Fragment, D = C ? { as: fS, allowPinchZoom: !0 } : void 0, X = (F) => {
      var de, ve;
      const R = ne.current + F, V = Y().filter((Re) => !Re.disabled), ee = document.activeElement, W = (de = V.find((Re) => Re.ref.current === ee)) == null ? void 0 : de.textValue, te = V.map((Re) => Re.textValue), ge = wS(te, R, W), ce = (ve = V.find((Re) => Re.textValue === ge)) == null ? void 0 : ve.ref.current;
      (function Re(Be) {
        ne.current = Be, window.clearTimeout(I.current), Be !== "" && (I.current = window.setTimeout(() => Re(""), 1e3));
      })(R), ce && setTimeout(() => ce.focus());
    };
    w.useEffect(() => () => window.clearTimeout(I.current), []), _b();
    const k = w.useCallback((F) => {
      var V, ee;
      return me.current === ((V = ue.current) == null ? void 0 : V.side) && RS(F, (ee = ue.current) == null ? void 0 : ee.area);
    }, []);
    return /* @__PURE__ */ S.jsx(
      uS,
      {
        scope: u,
        searchRef: ne,
        onItemEnter: w.useCallback(
          (F) => {
            k(F) && F.preventDefault();
          },
          [k]
        ),
        onItemLeave: w.useCallback(
          (F) => {
            var R;
            k(F) || ((R = K.current) == null || R.focus(), J(null));
          },
          [k]
        ),
        onTriggerLeave: w.useCallback(
          (F) => {
            k(F) && F.preventDefault();
          },
          [k]
        ),
        pointerGraceTimerRef: le,
        onPointerGraceIntentChange: w.useCallback((F) => {
          ue.current = F;
        }, []),
        children: /* @__PURE__ */ S.jsx(Q, { ...D, children: /* @__PURE__ */ S.jsx(
          ov,
          {
            asChild: !0,
            trapped: s,
            onMountAutoFocus: Te(f, (F) => {
              var R;
              F.preventDefault(), (R = K.current) == null || R.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: d,
            children: /* @__PURE__ */ S.jsx(
              iv,
              {
                asChild: !0,
                disableOutsidePointerEvents: p,
                onEscapeKeyDown: h,
                onPointerDownOutside: y,
                onFocusOutside: b,
                onInteractOutside: x,
                onDismiss: A,
                children: /* @__PURE__ */ S.jsx(
                  sx,
                  {
                    asChild: !0,
                    ...z,
                    dir: T.dir,
                    orientation: "vertical",
                    loop: o,
                    currentTabStopId: U,
                    onCurrentTabStopIdChange: J,
                    onEntryFocus: Te(v, (F) => {
                      T.isUsingKeyboardRef.current || F.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ S.jsx(
                      J1,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": hg(O.open),
                        "data-radix-menu-content": "",
                        dir: T.dir,
                        ...j,
                        ...E,
                        ref: q,
                        style: { outline: "none", ...E.style },
                        onKeyDown: Te(E.onKeyDown, (F) => {
                          const V = F.target.closest("[data-radix-menu-content]") === F.currentTarget, ee = F.ctrlKey || F.altKey || F.metaKey, W = F.key.length === 1;
                          V && (F.key === "Tab" && F.preventDefault(), !ee && W && X(F.key));
                          const te = K.current;
                          if (F.target !== te || !Ix.includes(F.key)) return;
                          F.preventDefault();
                          const ce = Y().filter((de) => !de.disabled).map((de) => de.ref.current);
                          Zv.includes(F.key) && ce.reverse(), SS(ce);
                        }),
                        onBlur: Te(a.onBlur, (F) => {
                          F.currentTarget.contains(F.target) || (window.clearTimeout(I.current), ne.current = "");
                        }),
                        onPointerMove: Te(
                          a.onPointerMove,
                          er((F) => {
                            const R = F.target, V = se.current !== F.clientX;
                            if (F.currentTarget.contains(R) && V) {
                              const ee = F.clientX > se.current ? "right" : "left";
                              me.current = ee, se.current = F.clientX;
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
Wv.displayName = qt;
var dS = "MenuGroup", df = w.forwardRef(
  (a, r) => {
    const { __scopeMenu: u, ...o } = a;
    return /* @__PURE__ */ S.jsx(pt.div, { role: "group", ...o, ref: r });
  }
);
df.displayName = dS;
var mS = "MenuLabel", Iv = w.forwardRef(
  (a, r) => {
    const { __scopeMenu: u, ...o } = a;
    return /* @__PURE__ */ S.jsx(pt.div, { ...o, ref: r });
  }
);
Iv.displayName = mS;
var qo = "MenuItem", Bp = "menu.itemSelect", Fo = w.forwardRef(
  (a, r) => {
    const { disabled: u = !1, onSelect: o, ...s } = a, f = w.useRef(null), d = cr(qo, a.__scopeMenu), p = sf(qo, a.__scopeMenu), v = wt(r, f), h = w.useRef(!1), y = () => {
      const b = f.current;
      if (!u && b) {
        const x = new CustomEvent(Bp, { bubbles: !0, cancelable: !0 });
        b.addEventListener(Bp, (A) => o == null ? void 0 : o(A), { once: !0 }), tv(b, x), x.defaultPrevented ? h.current = !1 : d.onClose();
      }
    };
    return /* @__PURE__ */ S.jsx(
      eg,
      {
        ...s,
        ref: v,
        disabled: u,
        onClick: Te(a.onClick, y),
        onPointerDown: (b) => {
          var x;
          (x = a.onPointerDown) == null || x.call(a, b), h.current = !0;
        },
        onPointerUp: Te(a.onPointerUp, (b) => {
          var x;
          h.current || (x = b.currentTarget) == null || x.click();
        }),
        onKeyDown: Te(a.onKeyDown, (b) => {
          const x = p.searchRef.current !== "";
          u || x && b.key === " " || Ys.includes(b.key) && (b.currentTarget.click(), b.preventDefault());
        })
      }
    );
  }
);
Fo.displayName = qo;
var eg = w.forwardRef(
  (a, r) => {
    const { __scopeMenu: u, disabled: o = !1, textValue: s, ...f } = a, d = sf(qo, u), p = Jv(u), v = w.useRef(null), h = wt(r, v), [y, b] = w.useState(!1), [x, A] = w.useState("");
    return w.useEffect(() => {
      const C = v.current;
      C && A((C.textContent ?? "").trim());
    }, [f.children]), /* @__PURE__ */ S.jsx(
      Ii.ItemSlot,
      {
        scope: u,
        disabled: o,
        textValue: s ?? x,
        children: /* @__PURE__ */ S.jsx(fx, { asChild: !0, ...p, focusable: !o, children: /* @__PURE__ */ S.jsx(
          pt.div,
          {
            role: "menuitem",
            "data-highlighted": y ? "" : void 0,
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            ...f,
            ref: h,
            onPointerMove: Te(
              a.onPointerMove,
              er((C) => {
                o ? d.onItemLeave(C) : (d.onItemEnter(C), C.defaultPrevented || C.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: Te(
              a.onPointerLeave,
              er((C) => d.onItemLeave(C))
            ),
            onFocus: Te(a.onFocus, () => b(!0)),
            onBlur: Te(a.onBlur, () => b(!1))
          }
        ) })
      }
    );
  }
), hS = "MenuCheckboxItem", tg = w.forwardRef(
  (a, r) => {
    const { checked: u = !1, onCheckedChange: o, ...s } = a;
    return /* @__PURE__ */ S.jsx(rg, { scope: a.__scopeMenu, checked: u, children: /* @__PURE__ */ S.jsx(
      Fo,
      {
        role: "menuitemcheckbox",
        "aria-checked": Vo(u) ? "mixed" : u,
        ...s,
        ref: r,
        "data-state": hf(u),
        onSelect: Te(
          s.onSelect,
          () => o == null ? void 0 : o(Vo(u) ? !0 : !u),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
tg.displayName = hS;
var ng = "MenuRadioGroup", [pS, vS] = Hl(
  ng,
  { value: void 0, onValueChange: () => {
  } }
), lg = w.forwardRef(
  (a, r) => {
    const { value: u, onValueChange: o, ...s } = a, f = _n(o);
    return /* @__PURE__ */ S.jsx(pS, { scope: a.__scopeMenu, value: u, onValueChange: f, children: /* @__PURE__ */ S.jsx(df, { ...s, ref: r }) });
  }
);
lg.displayName = ng;
var ag = "MenuRadioItem", ig = w.forwardRef(
  (a, r) => {
    const { value: u, ...o } = a, s = vS(ag, a.__scopeMenu), f = u === s.value;
    return /* @__PURE__ */ S.jsx(rg, { scope: a.__scopeMenu, checked: f, children: /* @__PURE__ */ S.jsx(
      Fo,
      {
        role: "menuitemradio",
        "aria-checked": f,
        ...o,
        ref: r,
        "data-state": hf(f),
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
ig.displayName = ag;
var mf = "MenuItemIndicator", [rg, gS] = Hl(
  mf,
  { checked: !1 }
), og = w.forwardRef(
  (a, r) => {
    const { __scopeMenu: u, forceMount: o, ...s } = a, f = gS(mf, u);
    return /* @__PURE__ */ S.jsx(
      rr,
      {
        present: o || Vo(f.checked) || f.checked === !0,
        children: /* @__PURE__ */ S.jsx(
          pt.span,
          {
            ...s,
            ref: r,
            "data-state": hf(f.checked)
          }
        )
      }
    );
  }
);
og.displayName = mf;
var yS = "MenuSeparator", ug = w.forwardRef(
  (a, r) => {
    const { __scopeMenu: u, ...o } = a;
    return /* @__PURE__ */ S.jsx(
      pt.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...o,
        ref: r
      }
    );
  }
);
ug.displayName = yS;
var bS = "MenuArrow", cg = w.forwardRef(
  (a, r) => {
    const { __scopeMenu: u, ...o } = a, s = Po(u);
    return /* @__PURE__ */ S.jsx($1, { ...s, ...o, ref: r });
  }
);
cg.displayName = bS;
var xS = "MenuSub", [s2, sg] = Hl(xS), Ki = "MenuSubTrigger", fg = w.forwardRef(
  (a, r) => {
    const u = Gl(Ki, a.__scopeMenu), o = cr(Ki, a.__scopeMenu), s = sg(Ki, a.__scopeMenu), f = sf(Ki, a.__scopeMenu), d = w.useRef(null), { pointerGraceTimerRef: p, onPointerGraceIntentChange: v } = f, h = { __scopeMenu: a.__scopeMenu }, y = w.useCallback(() => {
      d.current && window.clearTimeout(d.current), d.current = null;
    }, []);
    return w.useEffect(() => y, [y]), w.useEffect(() => {
      const b = p.current;
      return () => {
        window.clearTimeout(b), v(null);
      };
    }, [p, v]), /* @__PURE__ */ S.jsx(uf, { asChild: !0, ...h, children: /* @__PURE__ */ S.jsx(
      eg,
      {
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": u.open,
        "aria-controls": s.contentId,
        "data-state": hg(u.open),
        ...a,
        ref: Qo(r, s.onTriggerChange),
        onClick: (b) => {
          var x;
          (x = a.onClick) == null || x.call(a, b), !(a.disabled || b.defaultPrevented) && (b.currentTarget.focus(), u.open || u.onOpenChange(!0));
        },
        onPointerMove: Te(
          a.onPointerMove,
          er((b) => {
            f.onItemEnter(b), !b.defaultPrevented && !a.disabled && !u.open && !d.current && (f.onPointerGraceIntentChange(null), d.current = window.setTimeout(() => {
              u.onOpenChange(!0), y();
            }, 100));
          })
        ),
        onPointerLeave: Te(
          a.onPointerLeave,
          er((b) => {
            var A, C;
            y();
            const x = (A = u.content) == null ? void 0 : A.getBoundingClientRect();
            if (x) {
              const E = (C = u.content) == null ? void 0 : C.dataset.side, O = E === "right", T = O ? -5 : 5, j = x[O ? "left" : "right"], z = x[O ? "right" : "left"];
              f.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: b.clientX + T, y: b.clientY },
                  { x: j, y: x.top },
                  { x: z, y: x.top },
                  { x: z, y: x.bottom },
                  { x: j, y: x.bottom }
                ],
                side: E
              }), window.clearTimeout(p.current), p.current = window.setTimeout(
                () => f.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (f.onTriggerLeave(b), b.defaultPrevented) return;
              f.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: Te(a.onKeyDown, (b) => {
          var A;
          const x = f.searchRef.current !== "";
          a.disabled || x && b.key === " " || eS[o.dir].includes(b.key) && (u.onOpenChange(!0), (A = u.content) == null || A.focus(), b.preventDefault());
        })
      }
    ) });
  }
);
fg.displayName = Ki;
var dg = "MenuSubContent", mg = w.forwardRef(
  (a, r) => {
    const u = Pv(qt, a.__scopeMenu), { forceMount: o = u.forceMount, ...s } = a, f = Gl(qt, a.__scopeMenu), d = cr(qt, a.__scopeMenu), p = sg(dg, a.__scopeMenu), v = w.useRef(null), h = wt(r, v);
    return /* @__PURE__ */ S.jsx(Ii.Provider, { scope: a.__scopeMenu, children: /* @__PURE__ */ S.jsx(rr, { present: o || f.open, children: /* @__PURE__ */ S.jsx(Ii.Slot, { scope: a.__scopeMenu, children: /* @__PURE__ */ S.jsx(
      ff,
      {
        id: p.contentId,
        "aria-labelledby": p.triggerId,
        ...s,
        ref: h,
        align: "start",
        side: d.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (y) => {
          var b;
          d.isUsingKeyboardRef.current && ((b = v.current) == null || b.focus()), y.preventDefault();
        },
        onCloseAutoFocus: (y) => y.preventDefault(),
        onFocusOutside: Te(a.onFocusOutside, (y) => {
          y.target !== p.trigger && f.onOpenChange(!1);
        }),
        onEscapeKeyDown: Te(a.onEscapeKeyDown, (y) => {
          d.onClose(), y.preventDefault();
        }),
        onKeyDown: Te(a.onKeyDown, (y) => {
          var A;
          const b = y.currentTarget.contains(y.target), x = tS[d.dir].includes(y.key);
          b && x && (f.onOpenChange(!1), (A = p.trigger) == null || A.focus(), y.preventDefault());
        })
      }
    ) }) }) });
  }
);
mg.displayName = dg;
function hg(a) {
  return a ? "open" : "closed";
}
function Vo(a) {
  return a === "indeterminate";
}
function hf(a) {
  return Vo(a) ? "indeterminate" : a ? "checked" : "unchecked";
}
function SS(a) {
  const r = document.activeElement;
  for (const u of a)
    if (u === r || (u.focus(), document.activeElement !== r)) return;
}
function ES(a, r) {
  return a.map((u, o) => a[(r + o) % a.length]);
}
function wS(a, r, u) {
  const s = r.length > 1 && Array.from(r).every((h) => h === r[0]) ? r[0] : r, f = u ? a.indexOf(u) : -1;
  let d = ES(a, Math.max(f, 0));
  s.length === 1 && (d = d.filter((h) => h !== u));
  const v = d.find(
    (h) => h.toLowerCase().startsWith(s.toLowerCase())
  );
  return v !== u ? v : void 0;
}
function AS(a, r) {
  const { x: u, y: o } = a;
  let s = !1;
  for (let f = 0, d = r.length - 1; f < r.length; d = f++) {
    const p = r[f], v = r[d], h = p.x, y = p.y, b = v.x, x = v.y;
    y > o != x > o && u < (b - h) * (o - y) / (x - y) + h && (s = !s);
  }
  return s;
}
function RS(a, r) {
  if (!r) return !1;
  const u = { x: a.clientX, y: a.clientY };
  return AS(u, r);
}
function er(a) {
  return (r) => r.pointerType === "mouse" ? a(r) : void 0;
}
var CS = $v, MS = uf, OS = Fv, TS = Wv, _S = df, NS = Iv, DS = Fo, zS = tg, jS = lg, US = ig, LS = og, BS = ug, kS = cg, HS = fg, GS = mg, Wo = "DropdownMenu", [YS, f2] = ar(
  Wo,
  [Kv]
), vt = Kv(), [qS, pg] = YS(Wo), vg = (a) => {
  const {
    __scopeDropdownMenu: r,
    children: u,
    dir: o,
    open: s,
    defaultOpen: f,
    onOpenChange: d,
    modal: p = !0
  } = a, v = vt(r), h = w.useRef(null), [y, b] = ev({
    prop: s,
    defaultProp: f ?? !1,
    onChange: d,
    caller: Wo
  });
  return /* @__PURE__ */ S.jsx(
    qS,
    {
      scope: r,
      triggerId: Us(),
      triggerRef: h,
      contentId: Us(),
      open: y,
      onOpenChange: b,
      onOpenToggle: w.useCallback(() => b((x) => !x), [b]),
      modal: p,
      children: /* @__PURE__ */ S.jsx(CS, { ...v, open: y, onOpenChange: b, dir: o, modal: p, children: u })
    }
  );
};
vg.displayName = Wo;
var gg = "DropdownMenuTrigger", yg = w.forwardRef(
  (a, r) => {
    const { __scopeDropdownMenu: u, disabled: o = !1, ...s } = a, f = pg(gg, u), d = vt(u);
    return /* @__PURE__ */ S.jsx(MS, { asChild: !0, ...d, children: /* @__PURE__ */ S.jsx(
      pt.button,
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
        ref: Qo(r, f.triggerRef),
        onPointerDown: Te(a.onPointerDown, (p) => {
          !o && p.button === 0 && p.ctrlKey === !1 && (f.onOpenToggle(), f.open || p.preventDefault());
        }),
        onKeyDown: Te(a.onKeyDown, (p) => {
          o || (["Enter", " "].includes(p.key) && f.onOpenToggle(), p.key === "ArrowDown" && f.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(p.key) && p.preventDefault());
        })
      }
    ) });
  }
);
yg.displayName = gg;
var VS = "DropdownMenuPortal", bg = (a) => {
  const { __scopeDropdownMenu: r, ...u } = a, o = vt(r);
  return /* @__PURE__ */ S.jsx(OS, { ...o, ...u });
};
bg.displayName = VS;
var xg = "DropdownMenuContent", Sg = w.forwardRef(
  (a, r) => {
    const { __scopeDropdownMenu: u, ...o } = a, s = pg(xg, u), f = vt(u), d = w.useRef(!1);
    return /* @__PURE__ */ S.jsx(
      TS,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...f,
        ...o,
        ref: r,
        onCloseAutoFocus: Te(a.onCloseAutoFocus, (p) => {
          var v;
          d.current || (v = s.triggerRef.current) == null || v.focus(), d.current = !1, p.preventDefault();
        }),
        onInteractOutside: Te(a.onInteractOutside, (p) => {
          const v = p.detail.originalEvent, h = v.button === 0 && v.ctrlKey === !0, y = v.button === 2 || h;
          (!s.modal || y) && (d.current = !0);
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
Sg.displayName = xg;
var XS = "DropdownMenuGroup", QS = w.forwardRef(
  (a, r) => {
    const { __scopeDropdownMenu: u, ...o } = a, s = vt(u);
    return /* @__PURE__ */ S.jsx(_S, { ...s, ...o, ref: r });
  }
);
QS.displayName = XS;
var ZS = "DropdownMenuLabel", KS = w.forwardRef(
  (a, r) => {
    const { __scopeDropdownMenu: u, ...o } = a, s = vt(u);
    return /* @__PURE__ */ S.jsx(NS, { ...s, ...o, ref: r });
  }
);
KS.displayName = ZS;
var JS = "DropdownMenuItem", $S = w.forwardRef(
  (a, r) => {
    const { __scopeDropdownMenu: u, ...o } = a, s = vt(u);
    return /* @__PURE__ */ S.jsx(DS, { ...s, ...o, ref: r });
  }
);
$S.displayName = JS;
var PS = "DropdownMenuCheckboxItem", FS = w.forwardRef((a, r) => {
  const { __scopeDropdownMenu: u, ...o } = a, s = vt(u);
  return /* @__PURE__ */ S.jsx(zS, { ...s, ...o, ref: r });
});
FS.displayName = PS;
var WS = "DropdownMenuRadioGroup", Eg = w.forwardRef((a, r) => {
  const { __scopeDropdownMenu: u, ...o } = a, s = vt(u);
  return /* @__PURE__ */ S.jsx(jS, { ...s, ...o, ref: r });
});
Eg.displayName = WS;
var IS = "DropdownMenuRadioItem", wg = w.forwardRef((a, r) => {
  const { __scopeDropdownMenu: u, ...o } = a, s = vt(u);
  return /* @__PURE__ */ S.jsx(US, { ...s, ...o, ref: r });
});
wg.displayName = IS;
var eE = "DropdownMenuItemIndicator", Ag = w.forwardRef((a, r) => {
  const { __scopeDropdownMenu: u, ...o } = a, s = vt(u);
  return /* @__PURE__ */ S.jsx(LS, { ...s, ...o, ref: r });
});
Ag.displayName = eE;
var tE = "DropdownMenuSeparator", nE = w.forwardRef((a, r) => {
  const { __scopeDropdownMenu: u, ...o } = a, s = vt(u);
  return /* @__PURE__ */ S.jsx(BS, { ...s, ...o, ref: r });
});
nE.displayName = tE;
var lE = "DropdownMenuArrow", aE = w.forwardRef(
  (a, r) => {
    const { __scopeDropdownMenu: u, ...o } = a, s = vt(u);
    return /* @__PURE__ */ S.jsx(kS, { ...s, ...o, ref: r });
  }
);
aE.displayName = lE;
var iE = "DropdownMenuSubTrigger", rE = w.forwardRef((a, r) => {
  const { __scopeDropdownMenu: u, ...o } = a, s = vt(u);
  return /* @__PURE__ */ S.jsx(HS, { ...s, ...o, ref: r });
});
rE.displayName = iE;
var oE = "DropdownMenuSubContent", uE = w.forwardRef((a, r) => {
  const { __scopeDropdownMenu: u, ...o } = a, s = vt(u);
  return /* @__PURE__ */ S.jsx(
    GS,
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
uE.displayName = oE;
var cE = vg, sE = yg, fE = bg, dE = Sg, mE = Eg, hE = wg, pE = Ag;
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vE = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), gE = (a) => a.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (r, u, o) => o ? o.toUpperCase() : u.toLowerCase()
), kp = (a) => {
  const r = gE(a);
  return r.charAt(0).toUpperCase() + r.slice(1);
}, Rg = (...a) => a.filter((r, u, o) => !!r && r.trim() !== "" && o.indexOf(r) === u).join(" ").trim(), yE = (a) => {
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
var bE = {
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
const xE = w.forwardRef(
  ({
    color: a = "currentColor",
    size: r = 24,
    strokeWidth: u = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: f,
    iconNode: d,
    ...p
  }, v) => w.createElement(
    "svg",
    {
      ref: v,
      ...bE,
      width: r,
      height: r,
      stroke: a,
      strokeWidth: o ? Number(u) * 24 / Number(r) : u,
      className: Rg("lucide", s),
      ...!f && !yE(p) && { "aria-hidden": "true" },
      ...p
    },
    [
      ...d.map(([h, y]) => w.createElement(h, y)),
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
const Io = (a, r) => {
  const u = w.forwardRef(
    ({ className: o, ...s }, f) => w.createElement(xE, {
      ref: f,
      iconNode: r,
      className: Rg(
        `lucide-${vE(kp(a))}`,
        `lucide-${a}`,
        o
      ),
      ...s
    })
  );
  return u.displayName = kp(a), u;
};
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SE = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], EE = Io("arrow-left", SE);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wE = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], AE = Io("arrow-right", wE);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RE = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Nl = Io("chevron-down", RE);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CE = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], ME = Io("circle", CE);
function Cg(a) {
  var r, u, o = "";
  if (typeof a == "string" || typeof a == "number") o += a;
  else if (typeof a == "object") if (Array.isArray(a)) {
    var s = a.length;
    for (r = 0; r < s; r++) a[r] && (u = Cg(a[r])) && (o && (o += " "), o += u);
  } else for (u in a) a[u] && (o && (o += " "), o += u);
  return o;
}
function Mg() {
  for (var a, r, u = 0, o = "", s = arguments.length; u < s; u++) (a = arguments[u]) && (r = Cg(a)) && (o && (o += " "), o += r);
  return o;
}
const pf = "-", OE = (a) => {
  const r = _E(a), {
    conflictingClassGroups: u,
    conflictingClassGroupModifiers: o
  } = a;
  return {
    getClassGroupId: (d) => {
      const p = d.split(pf);
      return p[0] === "" && p.length !== 1 && p.shift(), Og(p, r) || TE(d);
    },
    getConflictingClassGroupIds: (d, p) => {
      const v = u[d] || [];
      return p && o[d] ? [...v, ...o[d]] : v;
    }
  };
}, Og = (a, r) => {
  var d;
  if (a.length === 0)
    return r.classGroupId;
  const u = a[0], o = r.nextPart.get(u), s = o ? Og(a.slice(1), o) : void 0;
  if (s)
    return s;
  if (r.validators.length === 0)
    return;
  const f = a.join(pf);
  return (d = r.validators.find(({
    validator: p
  }) => p(f))) == null ? void 0 : d.classGroupId;
}, Hp = /^\[(.+)\]$/, TE = (a) => {
  if (Hp.test(a)) {
    const r = Hp.exec(a)[1], u = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (u)
      return "arbitrary.." + u;
  }
}, _E = (a) => {
  const {
    theme: r,
    classGroups: u
  } = a, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const s in u)
    qs(u[s], o, s, r);
  return o;
}, qs = (a, r, u, o) => {
  a.forEach((s) => {
    if (typeof s == "string") {
      const f = s === "" ? r : Gp(r, s);
      f.classGroupId = u;
      return;
    }
    if (typeof s == "function") {
      if (NE(s)) {
        qs(s(o), r, u, o);
        return;
      }
      r.validators.push({
        validator: s,
        classGroupId: u
      });
      return;
    }
    Object.entries(s).forEach(([f, d]) => {
      qs(d, Gp(r, f), u, o);
    });
  });
}, Gp = (a, r) => {
  let u = a;
  return r.split(pf).forEach((o) => {
    u.nextPart.has(o) || u.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), u = u.nextPart.get(o);
  }), u;
}, NE = (a) => a.isThemeGetter, DE = (a) => {
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
}, Vs = "!", Xs = ":", zE = Xs.length, jE = (a) => {
  const {
    prefix: r,
    experimentalParseClassName: u
  } = a;
  let o = (s) => {
    const f = [];
    let d = 0, p = 0, v = 0, h;
    for (let C = 0; C < s.length; C++) {
      let E = s[C];
      if (d === 0 && p === 0) {
        if (E === Xs) {
          f.push(s.slice(v, C)), v = C + zE;
          continue;
        }
        if (E === "/") {
          h = C;
          continue;
        }
      }
      E === "[" ? d++ : E === "]" ? d-- : E === "(" ? p++ : E === ")" && p--;
    }
    const y = f.length === 0 ? s : s.substring(v), b = UE(y), x = b !== y, A = h && h > v ? h - v : void 0;
    return {
      modifiers: f,
      hasImportantModifier: x,
      baseClassName: b,
      maybePostfixModifierPosition: A
    };
  };
  if (r) {
    const s = r + Xs, f = o;
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
}, UE = (a) => a.endsWith(Vs) ? a.substring(0, a.length - 1) : a.startsWith(Vs) ? a.substring(1) : a, LE = (a) => {
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
}, BE = (a) => ({
  cache: DE(a.cacheSize),
  parseClassName: jE(a),
  sortModifiers: LE(a),
  ...OE(a)
}), kE = /\s+/, HE = (a, r) => {
  const {
    parseClassName: u,
    getClassGroupId: o,
    getConflictingClassGroupIds: s,
    sortModifiers: f
  } = r, d = [], p = a.trim().split(kE);
  let v = "";
  for (let h = p.length - 1; h >= 0; h -= 1) {
    const y = p[h], {
      isExternal: b,
      modifiers: x,
      hasImportantModifier: A,
      baseClassName: C,
      maybePostfixModifierPosition: E
    } = u(y);
    if (b) {
      v = y + (v.length > 0 ? " " + v : v);
      continue;
    }
    let O = !!E, T = o(O ? C.substring(0, E) : C);
    if (!T) {
      if (!O) {
        v = y + (v.length > 0 ? " " + v : v);
        continue;
      }
      if (T = o(C), !T) {
        v = y + (v.length > 0 ? " " + v : v);
        continue;
      }
      O = !1;
    }
    const j = f(x).join(":"), z = A ? j + Vs : j, Y = z + T;
    if (d.includes(Y))
      continue;
    d.push(Y);
    const U = s(T, O);
    for (let J = 0; J < U.length; ++J) {
      const K = U[J];
      d.push(z + K);
    }
    v = y + (v.length > 0 ? " " + v : v);
  }
  return v;
};
function GE() {
  let a = 0, r, u, o = "";
  for (; a < arguments.length; )
    (r = arguments[a++]) && (u = Tg(r)) && (o && (o += " "), o += u);
  return o;
}
const Tg = (a) => {
  if (typeof a == "string")
    return a;
  let r, u = "";
  for (let o = 0; o < a.length; o++)
    a[o] && (r = Tg(a[o])) && (u && (u += " "), u += r);
  return u;
};
function YE(a, ...r) {
  let u, o, s, f = d;
  function d(v) {
    const h = r.reduce((y, b) => b(y), a());
    return u = BE(h), o = u.cache.get, s = u.cache.set, f = p, p(v);
  }
  function p(v) {
    const h = o(v);
    if (h)
      return h;
    const y = HE(v, u);
    return s(v, y), y;
  }
  return function() {
    return f(GE.apply(null, arguments));
  };
}
const et = (a) => {
  const r = (u) => u[a] || [];
  return r.isThemeGetter = !0, r;
}, _g = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ng = /^\((?:(\w[\w-]*):)?(.+)\)$/i, qE = /^\d+\/\d+$/, VE = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, XE = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, QE = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, ZE = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, KE = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ja = (a) => qE.test(a), Se = (a) => !!a && !Number.isNaN(Number(a)), al = (a) => !!a && Number.isInteger(Number(a)), Ms = (a) => a.endsWith("%") && Se(a.slice(0, -1)), Cn = (a) => VE.test(a), JE = () => !0, $E = (a) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  XE.test(a) && !QE.test(a)
), Dg = () => !1, PE = (a) => ZE.test(a), FE = (a) => KE.test(a), WE = (a) => !re(a) && !oe(a), IE = (a) => Ya(a, Ug, Dg), re = (a) => _g.test(a), Dl = (a) => Ya(a, Lg, $E), Os = (a) => Ya(a, aw, Se), Yp = (a) => Ya(a, zg, Dg), ew = (a) => Ya(a, jg, FE), zo = (a) => Ya(a, Bg, PE), oe = (a) => Ng.test(a), Qi = (a) => qa(a, Lg), tw = (a) => qa(a, iw), qp = (a) => qa(a, zg), nw = (a) => qa(a, Ug), lw = (a) => qa(a, jg), jo = (a) => qa(a, Bg, !0), Ya = (a, r, u) => {
  const o = _g.exec(a);
  return o ? o[1] ? r(o[1]) : u(o[2]) : !1;
}, qa = (a, r, u = !1) => {
  const o = Ng.exec(a);
  return o ? o[1] ? r(o[1]) : u : !1;
}, zg = (a) => a === "position" || a === "percentage", jg = (a) => a === "image" || a === "url", Ug = (a) => a === "length" || a === "size" || a === "bg-size", Lg = (a) => a === "length", aw = (a) => a === "number", iw = (a) => a === "family-name", Bg = (a) => a === "shadow", rw = () => {
  const a = et("color"), r = et("font"), u = et("text"), o = et("font-weight"), s = et("tracking"), f = et("leading"), d = et("breakpoint"), p = et("container"), v = et("spacing"), h = et("radius"), y = et("shadow"), b = et("inset-shadow"), x = et("text-shadow"), A = et("drop-shadow"), C = et("blur"), E = et("perspective"), O = et("aspect"), T = et("ease"), j = et("animate"), z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Y = () => [
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
  ], U = () => [...Y(), oe, re], J = () => ["auto", "hidden", "clip", "visible", "scroll"], K = () => ["auto", "contain", "none"], q = () => [oe, re, v], I = () => [ja, "full", "auto", ...q()], ne = () => [al, "none", "subgrid", oe, re], le = () => ["auto", {
    span: ["full", al, oe, re]
  }, al, oe, re], ue = () => [al, "auto", oe, re], me = () => ["auto", "min", "max", "fr", oe, re], se = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], Q = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], D = () => ["auto", ...q()], X = () => [ja, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...q()], k = () => [a, oe, re], F = () => [...Y(), qp, Yp, {
    position: [oe, re]
  }], R = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], V = () => ["auto", "cover", "contain", nw, IE, {
    size: [oe, re]
  }], ee = () => [Ms, Qi, Dl], W = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    h,
    oe,
    re
  ], te = () => ["", Se, Qi, Dl], ge = () => ["solid", "dashed", "dotted", "double"], ce = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], de = () => [Se, Ms, qp, Yp], ve = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    C,
    oe,
    re
  ], Re = () => ["none", Se, oe, re], Be = () => ["none", Se, oe, re], Me = () => [Se, oe, re], ae = () => [ja, "full", ...q()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Cn],
      breakpoint: [Cn],
      color: [JE],
      container: [Cn],
      "drop-shadow": [Cn],
      ease: ["in", "out", "in-out"],
      font: [WE],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Cn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Cn],
      shadow: [Cn],
      spacing: ["px", Se],
      text: [Cn],
      "text-shadow": [Cn],
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
        aspect: ["auto", "square", ja, re, oe, O]
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
        columns: [Se, re, oe, p]
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
        object: U()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: J()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": J()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": J()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: K()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": K()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": K()
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
        inset: I()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": I()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": I()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: I()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: I()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: I()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: I()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: I()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: I()
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
        z: [al, "auto", oe, re]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ja, "full", "auto", p, ...q()]
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
        flex: [Se, ja, "auto", "initial", "none", re]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Se, oe, re]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Se, oe, re]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [al, "first", "last", "none", oe, re]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": ne()
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
        "col-start": ue()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ue()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": ne()
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
        "row-start": ue()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ue()
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
        "auto-cols": me()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": me()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: q()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": q()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": q()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...se(), "normal"]
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
        content: ["normal", ...se()]
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
        "place-content": se()
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
        p: q()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: q()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: q()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: q()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: q()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: q()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: q()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: q()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: q()
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
        "space-x": q()
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
        "space-y": q()
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
        size: X()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [p, "screen", ...X()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          p,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...X()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          p,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [d]
          },
          ...X()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...X()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...X()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...X()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", u, Qi, Dl]
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
        font: [o, oe, Os]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ms, re]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [tw, re, r]
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
        tracking: [s, oe, re]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Se, "none", oe, Os]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          f,
          ...q()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", oe, re]
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
        list: ["disc", "decimal", "none", oe, re]
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
        decoration: [Se, "from-font", "auto", oe, Dl]
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
        "underline-offset": [Se, "auto", oe, re]
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
        indent: q()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", oe, re]
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
        content: ["none", oe, re]
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
        bg: F()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: R()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: V()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, al, oe, re],
          radial: ["", oe, re],
          conic: [al, oe, re]
        }, lw, ew]
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
        from: ee()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: ee()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: ee()
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
        border: te()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": te()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": te()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": te()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": te()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": te()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": te()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": te()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": te()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": te()
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
        "divide-y": te()
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
        "outline-offset": [Se, oe, re]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Se, Qi, Dl]
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
          y,
          jo,
          zo
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
        "inset-shadow": ["none", b, jo, zo]
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
        ring: te()
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
        "ring-offset": [Se, Dl]
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
        "inset-ring": te()
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
        "text-shadow": ["none", x, jo, zo]
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
        opacity: [Se, oe, re]
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
        "mask-radial": [oe, re]
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
        "mask-radial-at": Y()
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
        mask: F()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: R()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: V()
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
        mask: ["none", oe, re]
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
          re
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
        brightness: [Se, oe, re]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Se, oe, re]
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
          A,
          jo,
          zo
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
        grayscale: ["", Se, oe, re]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Se, oe, re]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Se, oe, re]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Se, oe, re]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Se, oe, re]
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
          re
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
        "backdrop-brightness": [Se, oe, re]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Se, oe, re]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Se, oe, re]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Se, oe, re]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Se, oe, re]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Se, oe, re]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Se, oe, re]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Se, oe, re]
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
        "border-spacing": q()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": q()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": q()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", oe, re]
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
        duration: [Se, "initial", oe, re]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", T, oe, re]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Se, oe, re]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", j, oe, re]
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
        perspective: [E, oe, re]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": U()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Re()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Re()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Re()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Re()
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
        transform: [oe, re, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: U()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", oe, re]
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
        "scroll-m": q()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": q()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": q()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": q()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": q()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": q()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": q()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": q()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": q()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": q()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": q()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": q()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": q()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": q()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": q()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": q()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": q()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": q()
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
        "will-change": ["auto", "scroll", "contents", "transform", oe, re]
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
        stroke: [Se, Qi, Dl, Os]
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
}, ow = /* @__PURE__ */ YE(rw);
function fl(...a) {
  return ow(Mg(a));
}
function zl({
  ...a
}) {
  return /* @__PURE__ */ S.jsx(cE, { "data-slot": "dropdown-menu", ...a });
}
function jl({
  ...a
}) {
  return /* @__PURE__ */ S.jsx(sE, { "data-slot": "dropdown-menu-trigger", ...a });
}
function Ul({
  className: a,
  sideOffset: r = 4,
  ...u
}) {
  return /* @__PURE__ */ S.jsx(fE, { children: /* @__PURE__ */ S.jsx(
    dE,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: r,
      className: fl(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        a
      ),
      ...u
    }
  ) });
}
function Ll({
  ...a
}) {
  return /* @__PURE__ */ S.jsx(mE, { "data-slot": "dropdown-menu-radio-group", ...a });
}
function Mn({
  className: a,
  children: r,
  ...u
}) {
  return /* @__PURE__ */ S.jsxs(
    hE,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: fl(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a
      ),
      ...u,
      children: [
        /* @__PURE__ */ S.jsx(
          "span",
          {
            className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
            children: /* @__PURE__ */ S.jsx(pE, { children: /* @__PURE__ */ S.jsx(ME, { className: "size-2 fill-current" }) })
          }
        ),
        r
      ]
    }
  );
}
const Vp = (a) => typeof a == "boolean" ? `${a}` : a === 0 ? "0" : a, Xp = Mg, uw = (a, r) => (u) => {
  var o;
  if ((r == null ? void 0 : r.variants) == null) return Xp(a, u == null ? void 0 : u.class, u == null ? void 0 : u.className);
  const { variants: s, defaultVariants: f } = r, d = Object.keys(s).map((h) => {
    const y = u == null ? void 0 : u[h], b = f == null ? void 0 : f[h];
    if (y === null) return null;
    const x = Vp(y) || Vp(b);
    return s[h][x];
  }), p = u && Object.entries(u).reduce((h, y) => {
    let [b, x] = y;
    return x === void 0 || (h[b] = x), h;
  }, {}), v = r == null || (o = r.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((h, y) => {
    let { class: b, className: x, ...A } = y;
    return Object.entries(A).every((C) => {
      let [E, O] = C;
      return Array.isArray(O) ? O.includes({
        ...f,
        ...p
      }[E]) : {
        ...f,
        ...p
      }[E] === O;
    }) ? [
      ...h,
      b,
      x
    ] : h;
  }, []);
  return Xp(a, d, v, u == null ? void 0 : u.class, u == null ? void 0 : u.className);
}, cw = uw(
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
function On({
  className: a,
  variant: r,
  size: u,
  asChild: o = !1,
  ...s
}) {
  const f = o ? hb : "button";
  return /* @__PURE__ */ S.jsx(
    f,
    {
      "data-slot": "button",
      className: fl(cw({ variant: r, size: u, className: a })),
      ...s
    }
  );
}
const sw = [
  { value: "Roasters Choice", label: "Roasters Choice" },
  { value: "Curated", label: "Curated" },
  { value: "Masterpiece", label: "Masterpiece" },
  { value: "Low-Caf", label: "Low-Caf" },
  { value: "Regional", label: "Regional" }
], fw = [
  { value: "Roasters Choice", label: "Roasters Choice" },
  { value: "Curated", label: "Curated" },
  { value: "Masterpiece", label: "Masterpiece" },
  { value: "Low-Caf", label: "Low-Caf" },
  { value: "Office", label: "Office" },
  { value: "Regional", label: "Regional" }
], dw = [
  { value: "1x 1kg", label: "1x 1kg" },
  { value: "2x 1kg", label: "2x 1kg" },
  { value: "3x 1kg", label: "3x 1kg" },
  { value: "4x 1kg", label: "4x 1kg" },
  { value: "5x 1kg", label: "5x 1kg" }
], mw = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" }
], Qs = [
  { value: "2", label: "2x 250g" },
  { value: "4", label: "4x 250g" },
  { value: "6", label: "6x 250g" }
], hw = Qs.reduce((a, r) => (a[r.value] = r.label, a), {}), Zs = [
  { value: "1", label: "1 bag" },
  { value: "2", label: "2 bags" },
  { value: "3", label: "3 bags" }
], pw = Zs.reduce((a, r) => (a[r.value] = r.label, a), {}), vw = [
  { value: "Brazil", label: "Brazil" },
  { value: "Ethiopia", label: "Ethiopia" },
  { value: "Masterpiece", label: "Masterpiece" }
], Ks = [
  { value: "3", label: "3x 10 capsules" },
  { value: "4", label: "4x 10 capsules" },
  { value: "5", label: "5x 10 capsules" }
], gw = Ks.reduce((a, r) => (a[r.value] = r.label, a), {}), yw = [
  { value: "Brazil", label: "Brazil" },
  { value: "Ethiopia", label: "Ethiopia" },
  { value: "Center America", label: "Center America" }
], Ua = [
  { value: "1 Week", label: "1 Week" },
  { value: "2 Weeks", label: "2 Weeks" },
  { value: "3 Weeks", label: "3 Weeks" },
  { value: "4 Weeks (Recommended)", label: "4 Weeks (Recommended)" },
  { value: "5 Weeks", label: "5 Weeks" },
  { value: "6 Weeks", label: "6 Weeks" }
], Ts = ["4 Weeks (Recommended)", "6 Weeks"], _s = ["2 Weeks", "4 Weeks (Recommended)", "6 Weeks"], Ns = ["2 Weeks", "4 Weeks (Recommended)"], Ds = ["2 Weeks", "4 Weeks (Recommended)"], bw = ({
  selectedMethod: a,
  selectedCoffeeType: r,
  selectedRegion: u,
  selectedSizeOption: o,
  finalSelectionDetail: s,
  selectedFrequency: f,
  onMethodChange: d,
  onCoffeeTypeChange: p,
  onRegionChange: v,
  onSizeOptionChange: h,
  onQuantityChange: y,
  onFrequencyChange: b,
  onResetSelections: x,
  selectedEdition: A,
  onEditionChange: C
  // selectedEdition is Taste Profile for Capsules
}) => {
  const [E, O] = w.useState(null);
  w.useEffect(() => {
    if (typeof b != "function")
      return;
    let Q;
    if (a === "Capsules" ? Q = A && s && !f : r === "Office" ? Q = o && !f : Q = s && !f, !Q || r === "Masterpiece") return;
    let X = "4 Weeks (Recommended)", k = Ua.map((F) => F.value);
    if (a === "Capsules" ? k = Ds : r === "Office" ? k = Ns : ["Low-Caf", "Regional"].includes(r) ? k = _s : ["Roasters Choice", "Curated"].includes(r) && (k = Ts), k.includes(X) || (X = k.length > 0 ? k[0] : ""), X && !f)
      try {
        b(X);
      } catch (F) {
        console.error(`Error setting initial default frequency for ${r || a}:`, F);
      }
  }, [s, r, a, A, o, f, b]), w.useEffect(() => {
    if (r === "Masterpiece" && s && typeof b == "function")
      try {
        (!f || f !== "4 Weeks (Recommended)") && b("4 Weeks (Recommended)");
      } catch (Q) {
        console.error("Error auto-setting Masterpiece frequency state:", Q);
      }
  }, [r, s, f, b]), w.useEffect(() => {
    let Q = null, D = !1, X = [];
    if (a === "Capsules" ? X = Ds : ["Roasters Choice", "Curated"].includes(r) ? X = Ts : ["Low-Caf", "Regional"].includes(r) ? X = _s : r === "Office" && (X = Ns), X.length > 0 && f && !X.includes(f) && (Q = X.includes("4 Weeks (Recommended)") ? "4 Weeks (Recommended)" : X[0], D = !0), D && typeof b == "function") {
      console.warn(`${r || a} selected with invalid frequency '${f}', resetting to ${Q}.`);
      try {
        b(Q);
      } catch (k) {
        console.error(`Error resetting frequency for ${r || a}:`, k);
      }
    }
  }, [r, a, f, b]), w.useEffect(() => {
    let Q = !0, D = !1;
    if (a === "Capsules" && s ? (Q = Ks.some((X) => X.value === s), Q || (D = !0)) : r === "Curated" && s ? (Q = Qs.some((X) => X.value === s), Q || (D = !0)) : r === "Masterpiece" && s && (Q = Zs.some((X) => X.value === s), Q || (D = !0)), D && r !== "Office" && (console.warn(`${r || a} selected with invalid quantity '${s}', resetting quantity.`), typeof y == "function"))
      try {
        y("");
      } catch (X) {
        console.error(`Error resetting quantity for ${r || a}:`, X);
      }
  }, [r, a, s, y]);
  const T = () => {
    O(!0);
  }, j = () => {
    O(!1), x && x();
  }, z = a === "Filter" ? sw : fw, Y = a !== "Capsules" && r && r !== "Office" && (r === "Roasters Choice" || r === "Curated" || r === "Masterpiece" || r === "Low-Caf" || r === "Regional" && u), U = a === "Capsules" && A, J = r === "Office" && o, K = a === "Capsules" && A && s, q = s && r && !["Office"].includes(r) && a !== "Capsules", I = J || K || q, ne = I && (a === "Capsules" || r !== "Masterpiece"), le = I && a !== "Capsules" && r === "Masterpiece", ue = a === "Capsules" ? Ua.filter((Q) => Ds.includes(Q.value)) : r === "Office" ? Ua.filter((Q) => Ns.includes(Q.value)) : ["Roasters Choice", "Curated"].includes(r) ? Ua.filter((Q) => Ts.includes(Q.value)) : ["Low-Caf", "Regional"].includes(r) ? Ua.filter((Q) => _s.includes(Q.value)) : Ua, me = a === "Capsules" ? Ks : r === "Curated" ? Qs : r === "Masterpiece" ? Zs : mw, se = (Q) => Q ? a === "Capsules" ? gw[Q] || Q : r === "Curated" ? hw[Q] || Q : r === "Masterpiece" ? pw[Q] || Q : r === "Low-Caf" ? `${Q}x 250g` : r === "Regional" ? `${Q}x 250g` : r === "Office" ? Q : r === "Roasters Choice" ? `${Q} x 250g` : Q : r === "Office" ? "Select Size..." : "Select Quantity...";
  return /* @__PURE__ */ S.jsxs("div", { className: "middle-content-wrapper flex flex-col justify-center items-center", children: [
    /* @__PURE__ */ S.jsx("div", { className: "recipient-container mt-10", children: /* @__PURE__ */ S.jsxs("div", { className: "recipient-buttons-container", children: [
      /* @__PURE__ */ S.jsxs("div", { className: `recipient-button ${E === !0 ? "selected" : ""}`, onClick: T, children: [
        /* @__PURE__ */ S.jsx("h2", { children: "PAY PER DELIVERY" }),
        /* @__PURE__ */ S.jsx("p", { children: "(Flexible Subscriptions)" })
      ] }),
      /* @__PURE__ */ S.jsxs("div", { className: `recipient-button ${E === !1 ? "selected" : ""}`, onClick: j, children: [
        /* @__PURE__ */ S.jsx("h2", { children: "UPFRONT PAYMENT" }),
        /* @__PURE__ */ S.jsx("p", { children: "(Term / Gift)" })
      ] })
    ] }) }),
    E !== null && /* @__PURE__ */ S.jsxs("div", { className: "coffee-type-container w-5/6 rounded-md p-3 pt-5 flex flex-col items-center gap-y-2 bg-[#3a3c3d] justify-center mt-5", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "dropdown-row", children: [
        /* @__PURE__ */ S.jsx("h3", { className: "dropdown-label", children: "Method" }),
        /* @__PURE__ */ S.jsxs(zl, { children: [
          /* @__PURE__ */ S.jsx(jl, { asChild: !0, children: /* @__PURE__ */ S.jsxs(On, { variant: "outline", className: "dropdown-trigger-button", children: [
            a || "Select Method...",
            /* @__PURE__ */ S.jsx(Nl, { className: "ml-2 h-4 w-4 shrink-0" })
          ] }) }),
          /* @__PURE__ */ S.jsx(Ul, { className: "dropdown-content-panel", children: /* @__PURE__ */ S.jsxs(Ll, { value: a, onValueChange: d, children: [
            /* @__PURE__ */ S.jsx(Mn, { value: "Filter", children: "Filter" }),
            /* @__PURE__ */ S.jsx(Mn, { value: "Espresso", children: "Espresso" }),
            /* @__PURE__ */ S.jsx(Mn, { value: "Capsules", children: "Capsules" })
          ] }) })
        ] })
      ] }),
      a === "Capsules" && /* @__PURE__ */ S.jsx("div", { className: "dropdown-row", style: { justifyContent: "center" }, children: /* @__PURE__ */ S.jsx("div", { className: "w-fit", children: /* @__PURE__ */ S.jsx("ul", { className: "text-white bg-[#161616] w-full rounded-sm border border-[#A67C52] roasters-info-list", children: /* @__PURE__ */ S.jsxs("li", { className: "w-full p-1 text-lg", children: [
        /* @__PURE__ */ S.jsx("span", { className: "text-[#A67C52]", children: "Receive our" }),
        " Sustainable Capsules on repeat"
      ] }) }) }) }, "capsule-method-info"),
      a === "Capsules" && /* @__PURE__ */ S.jsxs("div", { className: "dropdown-row", children: [
        /* @__PURE__ */ S.jsx("h3", { className: "dropdown-label", children: "Taste Profile" }),
        /* @__PURE__ */ S.jsxs(zl, { children: [
          /* @__PURE__ */ S.jsx(jl, { asChild: !0, children: /* @__PURE__ */ S.jsxs(On, { variant: "outline", className: "dropdown-trigger-button", children: [
            A || "Select Profile...",
            " ",
            /* @__PURE__ */ S.jsx(Nl, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
          ] }) }),
          /* @__PURE__ */ S.jsx(Ul, { className: "dropdown-content-panel", children: /* @__PURE__ */ S.jsx(Ll, { value: A, onValueChange: C, children: vw.map((Q) => /* @__PURE__ */ S.jsx(Mn, { value: Q.value, children: Q.label }, Q.value)) }) })
        ] })
      ] }),
      ["Filter", "Espresso"].includes(a) && /* @__PURE__ */ S.jsxs("div", { className: "dropdown-row", children: [
        /* @__PURE__ */ S.jsx("h3", { className: "dropdown-label", children: "Subscription Style" }),
        /* @__PURE__ */ S.jsxs(zl, { children: [
          /* @__PURE__ */ S.jsx(jl, { asChild: !0, children: /* @__PURE__ */ S.jsxs(On, { variant: "outline", className: "dropdown-trigger-button", children: [
            r || "Select Type...",
            /* @__PURE__ */ S.jsx(Nl, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
          ] }) }),
          /* @__PURE__ */ S.jsx(Ul, { className: "dropdown-content-panel", children: /* @__PURE__ */ S.jsx(Ll, { value: r, onValueChange: p, children: z.map((Q) => /* @__PURE__ */ S.jsx(Mn, { value: Q.value, children: Q.label }, Q.value)) }) })
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
          /* @__PURE__ */ S.jsxs(zl, { children: [
            /* @__PURE__ */ S.jsx(jl, { asChild: !0, children: /* @__PURE__ */ S.jsxs(On, { variant: "outline", className: "dropdown-trigger-button", children: [
              o || "Select Size...",
              /* @__PURE__ */ S.jsx(Nl, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
            ] }) }),
            /* @__PURE__ */ S.jsx(Ul, { className: "dropdown-content-panel", children: /* @__PURE__ */ S.jsx(Ll, { value: o, onValueChange: h, children: dw.map((Q) => /* @__PURE__ */ S.jsx(Mn, { value: Q.value, children: Q.label }, Q.value)) }) })
          ] })
        ] }, "office-size"),
        r === "Regional" && /* @__PURE__ */ S.jsxs("div", { className: "dropdown-row", children: [
          /* @__PURE__ */ S.jsx("h3", { className: "dropdown-label", children: "Region" }),
          /* @__PURE__ */ S.jsxs(zl, { children: [
            /* @__PURE__ */ S.jsx(jl, { asChild: !0, children: /* @__PURE__ */ S.jsxs(On, { variant: "outline", className: "dropdown-trigger-button", children: [
              u || "Select Region...",
              /* @__PURE__ */ S.jsx(Nl, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
            ] }) }),
            /* @__PURE__ */ S.jsx(Ul, { className: "dropdown-content-panel", children: /* @__PURE__ */ S.jsx(Ll, { value: u, onValueChange: v, children: yw.map((Q) => /* @__PURE__ */ S.jsx(Mn, { value: Q.value, children: Q.label }, Q.value)) }) })
          ] })
        ] }, "regional-region")
      ] }),
      (U || Y) && /* @__PURE__ */ S.jsxs("div", { className: "dropdown-row", children: [
        /* @__PURE__ */ S.jsx("h3", { className: "dropdown-label", children: "Quantity of Coffee" }),
        /* @__PURE__ */ S.jsxs(zl, { children: [
          /* @__PURE__ */ S.jsx(jl, { asChild: !0, children: /* @__PURE__ */ S.jsxs(On, { variant: "outline", className: "dropdown-trigger-button", children: [
            se(s),
            /* @__PURE__ */ S.jsx(Nl, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
          ] }) }),
          /* @__PURE__ */ S.jsx(Ul, { className: "dropdown-content-panel", children: /* @__PURE__ */ S.jsx(Ll, { value: s, onValueChange: y, children: me.map((Q) => /* @__PURE__ */ S.jsx(Mn, { value: Q.value, children: a === "Capsules" || r === "Curated" || r === "Masterpiece" ? Q.label : r === "Low-Caf" ? `${Q.label}x 250g` : r === "Regional" ? `${Q.label}x 250g` : r === "Roasters Choice" ? `${Q.label} x 250g` : `${Q.label} ${parseInt(Q.value) > 1 ? "bags" : "bag"} (250g each)` }, Q.value)) }) })
        ] })
      ] }),
      ne && /* @__PURE__ */ S.jsxs("div", { className: "dropdown-row", children: [
        /* @__PURE__ */ S.jsx("h3", { className: "dropdown-label", children: "Frequency" }),
        /* @__PURE__ */ S.jsxs(zl, { children: [
          /* @__PURE__ */ S.jsx(jl, { asChild: !0, children: /* @__PURE__ */ S.jsxs(On, { variant: "outline", className: "dropdown-trigger-button", children: [
            f || "Select Frequency...",
            /* @__PURE__ */ S.jsx(Nl, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
          ] }) }),
          /* @__PURE__ */ S.jsx(Ul, { className: "dropdown-content-panel", children: /* @__PURE__ */ S.jsx(Ll, { value: f, onValueChange: b, children: ue.map((Q) => /* @__PURE__ */ S.jsx(Mn, { value: Q.value, children: Q.label }, Q.value)) }) })
        ] })
      ] }),
      le && /* @__PURE__ */ S.jsxs("div", { className: "dropdown-row masterpiece-frequency-info", children: [
        /* @__PURE__ */ S.jsx("h3", { className: "dropdown-label", children: "Frequency" }),
        /* @__PURE__ */ S.jsx("div", { className: "info-text-container flex items-center justify-center", children: /* @__PURE__ */ S.jsx("div", { className: "static-text-value h-10 px-3 py-2 bg-[#161616] text-[#A67C52] font-bold rounded-md flex items-center w-full justify-center border-1 border-[#A67C52]", children: "4 weeks" }) })
      ] }),
      (r === "Office" && o && f || a === "Capsules" && A && s && f || s && f && r && r !== "Office" && a !== "Capsules") && /* @__PURE__ */ S.jsxs("div", { className: "final-selection mt-4 p-3 border rounded-md bg-secondary text-secondary-foreground w-5/6 text-center", children: [
        "Selected: ",
        a,
        a === "Capsules" && A && ` - Taste: ${A}`,
        a !== "Capsules" && r && ` - ${r}`,
        r === "Regional" && u && ` - ${u}`,
        r === "Office" && o && ` - ${o}`,
        (a === "Capsules" || a !== "Capsules" && r !== "Office") && s && ` - Qty: ${se(s)}`,
        f && ` - Every ${f.replace(" (Recommended)", "")}`
      ] })
    ] })
  ] });
};
function xw(a) {
  return Object.prototype.toString.call(a) === "[object Object]";
}
function Qp(a) {
  return xw(a) || Array.isArray(a);
}
function Sw() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function vf(a, r) {
  const u = Object.keys(a), o = Object.keys(r);
  if (u.length !== o.length) return !1;
  const s = JSON.stringify(Object.keys(a.breakpoints || {})), f = JSON.stringify(Object.keys(r.breakpoints || {}));
  return s !== f ? !1 : u.every((d) => {
    const p = a[d], v = r[d];
    return typeof p == "function" ? `${p}` == `${v}` : !Qp(p) || !Qp(v) ? p === v : vf(p, v);
  });
}
function Zp(a) {
  return a.concat().sort((r, u) => r.name > u.name ? 1 : -1).map((r) => r.options);
}
function Ew(a, r) {
  if (a.length !== r.length) return !1;
  const u = Zp(a), o = Zp(r);
  return u.every((s, f) => {
    const d = o[f];
    return vf(s, d);
  });
}
function gf(a) {
  return typeof a == "number";
}
function Js(a) {
  return typeof a == "string";
}
function eu(a) {
  return typeof a == "boolean";
}
function Kp(a) {
  return Object.prototype.toString.call(a) === "[object Object]";
}
function Ve(a) {
  return Math.abs(a);
}
function yf(a) {
  return Math.sign(a);
}
function $i(a, r) {
  return Ve(a - r);
}
function ww(a, r) {
  if (a === 0 || r === 0 || Ve(a) <= Ve(r)) return 0;
  const u = $i(Ve(a), Ve(r));
  return Ve(u / a);
}
function Aw(a) {
  return Math.round(a * 100) / 100;
}
function tr(a) {
  return nr(a).map(Number);
}
function Kt(a) {
  return a[sr(a)];
}
function sr(a) {
  return Math.max(0, a.length - 1);
}
function bf(a, r) {
  return r === sr(a);
}
function Jp(a, r = 0) {
  return Array.from(Array(a), (u, o) => r + o);
}
function nr(a) {
  return Object.keys(a);
}
function kg(a, r) {
  return [a, r].reduce((u, o) => (nr(o).forEach((s) => {
    const f = u[s], d = o[s], p = Kp(f) && Kp(d);
    u[s] = p ? kg(f, d) : d;
  }), u), {});
}
function $s(a, r) {
  return typeof r.MouseEvent < "u" && a instanceof r.MouseEvent;
}
function Rw(a, r) {
  const u = {
    start: o,
    center: s,
    end: f
  };
  function o() {
    return 0;
  }
  function s(v) {
    return f(v) / 2;
  }
  function f(v) {
    return r - v;
  }
  function d(v, h) {
    return Js(a) ? u[a](v) : a(r, v, h);
  }
  return {
    measure: d
  };
}
function lr() {
  let a = [];
  function r(s, f, d, p = {
    passive: !0
  }) {
    let v;
    if ("addEventListener" in s)
      s.addEventListener(f, d, p), v = () => s.removeEventListener(f, d, p);
    else {
      const h = s;
      h.addListener(d), v = () => h.removeListener(d);
    }
    return a.push(v), o;
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
function Cw(a, r, u, o) {
  const s = lr(), f = 1e3 / 60;
  let d = null, p = 0, v = 0;
  function h() {
    s.add(a, "visibilitychange", () => {
      a.hidden && C();
    });
  }
  function y() {
    A(), s.clear();
  }
  function b(O) {
    if (!v) return;
    d || (d = O, u(), u());
    const T = O - d;
    for (d = O, p += T; p >= f; )
      u(), p -= f;
    const j = p / f;
    o(j), v && (v = r.requestAnimationFrame(b));
  }
  function x() {
    v || (v = r.requestAnimationFrame(b));
  }
  function A() {
    r.cancelAnimationFrame(v), d = null, p = 0, v = 0;
  }
  function C() {
    d = null, p = 0;
  }
  return {
    init: h,
    destroy: y,
    start: x,
    stop: A,
    update: u,
    render: o
  };
}
function Mw(a, r) {
  const u = r === "rtl", o = a === "y", s = o ? "y" : "x", f = o ? "x" : "y", d = !o && u ? -1 : 1, p = y(), v = b();
  function h(C) {
    const {
      height: E,
      width: O
    } = C;
    return o ? E : O;
  }
  function y() {
    return o ? "top" : u ? "right" : "left";
  }
  function b() {
    return o ? "bottom" : u ? "left" : "right";
  }
  function x(C) {
    return C * d;
  }
  return {
    scroll: s,
    cross: f,
    startEdge: p,
    endEdge: v,
    measureSize: h,
    direction: x
  };
}
function kl(a = 0, r = 0) {
  const u = Ve(a - r);
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
  function p(h) {
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
    removeOffset: p
  };
}
function Hg(a, r, u) {
  const {
    constrain: o
  } = kl(0, a), s = a + 1;
  let f = d(r);
  function d(x) {
    return u ? Ve((s + x) % s) : o(x);
  }
  function p() {
    return f;
  }
  function v(x) {
    return f = d(x), b;
  }
  function h(x) {
    return y().set(p() + x);
  }
  function y() {
    return Hg(a, p(), u);
  }
  const b = {
    get: p,
    set: v,
    add: h,
    clone: y
  };
  return b;
}
function Ow(a, r, u, o, s, f, d, p, v, h, y, b, x, A, C, E, O, T, j) {
  const {
    cross: z,
    direction: Y
  } = a, U = ["INPUT", "SELECT", "TEXTAREA"], J = {
    passive: !1
  }, K = lr(), q = lr(), I = kl(50, 225).constrain(A.measure(20)), ne = {
    mouse: 300,
    touch: 400
  }, le = {
    mouse: 500,
    touch: 600
  }, ue = C ? 43 : 25;
  let me = !1, se = 0, Q = 0, D = !1, X = !1, k = !1, F = !1;
  function R(ae) {
    if (!j) return;
    function Ce(Fe) {
      (eu(j) || j(ae, Fe)) && ce(Fe);
    }
    const ke = r;
    K.add(ke, "dragstart", (Fe) => Fe.preventDefault(), J).add(ke, "touchmove", () => {
    }, J).add(ke, "touchend", () => {
    }).add(ke, "touchstart", Ce).add(ke, "mousedown", Ce).add(ke, "touchcancel", ve).add(ke, "contextmenu", ve).add(ke, "click", Re, !0);
  }
  function V() {
    K.clear(), q.clear();
  }
  function ee() {
    const ae = F ? u : r;
    q.add(ae, "touchmove", de, J).add(ae, "touchend", ve).add(ae, "mousemove", de, J).add(ae, "mouseup", ve);
  }
  function W(ae) {
    const Ce = ae.nodeName || "";
    return U.includes(Ce);
  }
  function te() {
    return (C ? le : ne)[F ? "mouse" : "touch"];
  }
  function ge(ae, Ce) {
    const ke = b.add(yf(ae) * -1), Fe = y.byDistance(ae, !C).distance;
    return C || Ve(ae) < I ? Fe : O && Ce ? Fe * 0.5 : y.byIndex(ke.get(), 0).distance;
  }
  function ce(ae) {
    const Ce = $s(ae, o);
    F = Ce, k = C && Ce && !ae.buttons && me, me = $i(s.get(), d.get()) >= 2, !(Ce && ae.button !== 0) && (W(ae.target) || (D = !0, f.pointerDown(ae), h.useFriction(0).useDuration(0), s.set(d), ee(), se = f.readPoint(ae), Q = f.readPoint(ae, z), x.emit("pointerDown")));
  }
  function de(ae) {
    if (!$s(ae, o) && ae.touches.length >= 2) return ve(ae);
    const ke = f.readPoint(ae), Fe = f.readPoint(ae, z), gt = $i(ke, se), Xe = $i(Fe, Q);
    if (!X && !F && (!ae.cancelable || (X = gt > Xe, !X)))
      return ve(ae);
    const Vt = f.pointerMove(ae);
    gt > E && (k = !0), h.useFriction(0.3).useDuration(0.75), p.start(), s.add(Y(Vt)), ae.preventDefault();
  }
  function ve(ae) {
    const ke = y.byDistance(0, !1).index !== b.get(), Fe = f.pointerUp(ae) * te(), gt = ge(Y(Fe), ke), Xe = ww(Fe, gt), Vt = ue - 10 * Xe, ct = T + Xe / 50;
    X = !1, D = !1, q.clear(), h.useDuration(Vt).useFriction(ct), v.distance(gt, !C), F = !1, x.emit("pointerUp");
  }
  function Re(ae) {
    k && (ae.stopPropagation(), ae.preventDefault(), k = !1);
  }
  function Be() {
    return D;
  }
  return {
    init: R,
    destroy: V,
    pointerDown: Be
  };
}
function Tw(a, r) {
  let o, s;
  function f(b) {
    return b.timeStamp;
  }
  function d(b, x) {
    const C = `client${(x || a.scroll) === "x" ? "X" : "Y"}`;
    return ($s(b, r) ? b : b.touches[0])[C];
  }
  function p(b) {
    return o = b, s = b, d(b);
  }
  function v(b) {
    const x = d(b) - d(s), A = f(b) - f(o) > 170;
    return s = b, A && (o = b), x;
  }
  function h(b) {
    if (!o || !s) return 0;
    const x = d(s) - d(o), A = f(b) - f(o), C = f(b) - f(s) > 170, E = x / A;
    return A && !C && Ve(E) > 0.1 ? E : 0;
  }
  return {
    pointerDown: p,
    pointerMove: v,
    pointerUp: h,
    readPoint: d
  };
}
function _w() {
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
function Nw(a) {
  function r(o) {
    return a * (o / 100);
  }
  return {
    measure: r
  };
}
function Dw(a, r, u, o, s, f, d) {
  const p = [a].concat(o);
  let v, h, y = [], b = !1;
  function x(O) {
    return s.measureSize(d.measure(O));
  }
  function A(O) {
    if (!f) return;
    h = x(a), y = o.map(x);
    function T(j) {
      for (const z of j) {
        if (b) return;
        const Y = z.target === a, U = o.indexOf(z.target), J = Y ? h : y[U], K = x(Y ? a : o[U]);
        if (Ve(K - J) >= 0.5) {
          O.reInit(), r.emit("resize");
          break;
        }
      }
    }
    v = new ResizeObserver((j) => {
      (eu(f) || f(O, j)) && T(j);
    }), u.requestAnimationFrame(() => {
      p.forEach((j) => v.observe(j));
    });
  }
  function C() {
    b = !0, v && v.disconnect();
  }
  return {
    init: A,
    destroy: C
  };
}
function zw(a, r, u, o, s, f) {
  let d = 0, p = 0, v = s, h = f, y = a.get(), b = 0;
  function x() {
    const J = o.get() - a.get(), K = !v;
    let q = 0;
    return K ? (d = 0, u.set(o), a.set(o), q = J) : (u.set(a), d += J / v, d *= h, y += d, a.add(d), q = y - b), p = yf(q), b = y, U;
  }
  function A() {
    const J = o.get() - r.get();
    return Ve(J) < 1e-3;
  }
  function C() {
    return v;
  }
  function E() {
    return p;
  }
  function O() {
    return d;
  }
  function T() {
    return z(s);
  }
  function j() {
    return Y(f);
  }
  function z(J) {
    return v = J, U;
  }
  function Y(J) {
    return h = J, U;
  }
  const U = {
    direction: E,
    duration: C,
    velocity: O,
    seek: x,
    settled: A,
    useBaseFriction: j,
    useBaseDuration: T,
    useFriction: Y,
    useDuration: z
  };
  return U;
}
function jw(a, r, u, o, s) {
  const f = s.measure(10), d = s.measure(50), p = kl(0.1, 0.99);
  let v = !1;
  function h() {
    return !(v || !a.reachedAny(u.get()) || !a.reachedAny(r.get()));
  }
  function y(A) {
    if (!h()) return;
    const C = a.reachedMin(r.get()) ? "min" : "max", E = Ve(a[C] - r.get()), O = u.get() - r.get(), T = p.constrain(E / d);
    u.subtract(O * T), !A && Ve(O) < f && (u.set(a.constrain(u.get())), o.useDuration(25).useBaseFriction());
  }
  function b(A) {
    v = !A;
  }
  return {
    shouldConstrain: h,
    constrain: y,
    toggleActive: b
  };
}
function Uw(a, r, u, o, s) {
  const f = kl(-r + a, 0), d = b(), p = y(), v = x();
  function h(C, E) {
    return $i(C, E) <= 1;
  }
  function y() {
    const C = d[0], E = Kt(d), O = d.lastIndexOf(C), T = d.indexOf(E) + 1;
    return kl(O, T);
  }
  function b() {
    return u.map((C, E) => {
      const {
        min: O,
        max: T
      } = f, j = f.constrain(C), z = !E, Y = bf(u, E);
      return z ? T : Y || h(O, j) ? O : h(T, j) ? T : j;
    }).map((C) => parseFloat(C.toFixed(3)));
  }
  function x() {
    if (r <= a + s) return [f.max];
    if (o === "keepSnaps") return d;
    const {
      min: C,
      max: E
    } = p;
    return d.slice(C, E);
  }
  return {
    snapsContained: v,
    scrollContainLimit: p
  };
}
function Lw(a, r, u) {
  const o = r[0], s = u ? o - a : Kt(r);
  return {
    limit: kl(s, o)
  };
}
function Bw(a, r, u, o) {
  const f = r.min + 0.1, d = r.max + 0.1, {
    reachedMin: p,
    reachedMax: v
  } = kl(f, d);
  function h(x) {
    return x === 1 ? v(u.get()) : x === -1 ? p(u.get()) : !1;
  }
  function y(x) {
    if (!h(x)) return;
    const A = a * (x * -1);
    o.forEach((C) => C.add(A));
  }
  return {
    loop: y
  };
}
function kw(a) {
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
function Hw(a, r, u, o, s) {
  const {
    startEdge: f,
    endEdge: d
  } = a, {
    groupSlides: p
  } = s, v = b().map(r.measure), h = x(), y = A();
  function b() {
    return p(o).map((E) => Kt(E)[d] - E[0][f]).map(Ve);
  }
  function x() {
    return o.map((E) => u[f] - E[f]).map((E) => -Ve(E));
  }
  function A() {
    return p(h).map((E) => E[0]).map((E, O) => E + v[O]);
  }
  return {
    snaps: h,
    snapsAligned: y
  };
}
function Gw(a, r, u, o, s, f) {
  const {
    groupSlides: d
  } = s, {
    min: p,
    max: v
  } = o, h = y();
  function y() {
    const x = d(f), A = !a || r === "keepSnaps";
    return u.length === 1 ? [f] : A ? x : x.slice(p, v).map((C, E, O) => {
      const T = !E, j = bf(O, E);
      if (T) {
        const z = Kt(O[0]) + 1;
        return Jp(z);
      }
      if (j) {
        const z = sr(f) - Kt(O)[0] + 1;
        return Jp(z, Kt(O)[0]);
      }
      return C;
    });
  }
  return {
    slideRegistry: h
  };
}
function Yw(a, r, u, o, s) {
  const {
    reachedAny: f,
    removeOffset: d,
    constrain: p
  } = o;
  function v(C) {
    return C.concat().sort((E, O) => Ve(E) - Ve(O))[0];
  }
  function h(C) {
    const E = a ? d(C) : p(C), O = r.map((j, z) => ({
      diff: y(j - E, 0),
      index: z
    })).sort((j, z) => Ve(j.diff) - Ve(z.diff)), {
      index: T
    } = O[0];
    return {
      index: T,
      distance: E
    };
  }
  function y(C, E) {
    const O = [C, C + u, C - u];
    if (!a) return C;
    if (!E) return v(O);
    const T = O.filter((j) => yf(j) === E);
    return T.length ? v(T) : Kt(O) - u;
  }
  function b(C, E) {
    const O = r[C] - s.get(), T = y(O, E);
    return {
      index: C,
      distance: T
    };
  }
  function x(C, E) {
    const O = s.get() + C, {
      index: T,
      distance: j
    } = h(O), z = !a && f(O);
    if (!E || z) return {
      index: T,
      distance: C
    };
    const Y = r[T] - j, U = C + y(Y, 0);
    return {
      index: T,
      distance: U
    };
  }
  return {
    byDistance: x,
    byIndex: b,
    shortcut: y
  };
}
function qw(a, r, u, o, s, f, d) {
  function p(b) {
    const x = b.distance, A = b.index !== r.get();
    f.add(x), x && (o.duration() ? a.start() : (a.update(), a.render(1), a.update())), A && (u.set(r.get()), r.set(b.index), d.emit("select"));
  }
  function v(b, x) {
    const A = s.byDistance(b, x);
    p(A);
  }
  function h(b, x) {
    const A = r.clone().set(b), C = s.byIndex(A.get(), x);
    p(C);
  }
  return {
    distance: v,
    index: h
  };
}
function Vw(a, r, u, o, s, f, d, p) {
  const v = {
    passive: !0,
    capture: !0
  };
  let h = 0;
  function y(A) {
    if (!p) return;
    function C(E) {
      if ((/* @__PURE__ */ new Date()).getTime() - h > 10) return;
      d.emit("slideFocusStart"), a.scrollLeft = 0;
      const j = u.findIndex((z) => z.includes(E));
      gf(j) && (s.useDuration(0), o.index(j, 0), d.emit("slideFocus"));
    }
    f.add(document, "keydown", b, !1), r.forEach((E, O) => {
      f.add(E, "focus", (T) => {
        (eu(p) || p(A, T)) && C(O);
      }, v);
    });
  }
  function b(A) {
    A.code === "Tab" && (h = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: y
  };
}
function Ji(a) {
  let r = a;
  function u() {
    return r;
  }
  function o(v) {
    r = d(v);
  }
  function s(v) {
    r += d(v);
  }
  function f(v) {
    r -= d(v);
  }
  function d(v) {
    return gf(v) ? v : v.get();
  }
  return {
    get: u,
    set: o,
    add: s,
    subtract: f
  };
}
function Gg(a, r) {
  const u = a.scroll === "x" ? d : p, o = r.style;
  let s = null, f = !1;
  function d(x) {
    return `translate3d(${x}px,0px,0px)`;
  }
  function p(x) {
    return `translate3d(0px,${x}px,0px)`;
  }
  function v(x) {
    if (f) return;
    const A = Aw(a.direction(x));
    A !== s && (o.transform = u(A), s = A);
  }
  function h(x) {
    f = !x;
  }
  function y() {
    f || (o.transform = "", r.getAttribute("style") || r.removeAttribute("style"));
  }
  return {
    clear: y,
    to: v,
    toggleActive: h
  };
}
function Xw(a, r, u, o, s, f, d, p, v) {
  const y = tr(s), b = tr(s).reverse(), x = T().concat(j());
  function A(K, q) {
    return K.reduce((I, ne) => I - s[ne], q);
  }
  function C(K, q) {
    return K.reduce((I, ne) => A(I, q) > 0 ? I.concat([ne]) : I, []);
  }
  function E(K) {
    return f.map((q, I) => ({
      start: q - o[I] + 0.5 + K,
      end: q + r - 0.5 + K
    }));
  }
  function O(K, q, I) {
    const ne = E(q);
    return K.map((le) => {
      const ue = I ? 0 : -u, me = I ? u : 0, se = I ? "end" : "start", Q = ne[le][se];
      return {
        index: le,
        loopPoint: Q,
        slideLocation: Ji(-1),
        translate: Gg(a, v[le]),
        target: () => p.get() > Q ? ue : me
      };
    });
  }
  function T() {
    const K = d[0], q = C(b, K);
    return O(q, u, !1);
  }
  function j() {
    const K = r - d[0] - 1, q = C(y, K);
    return O(q, -u, !0);
  }
  function z() {
    return x.every(({
      index: K
    }) => {
      const q = y.filter((I) => I !== K);
      return A(q, r) <= 0.1;
    });
  }
  function Y() {
    x.forEach((K) => {
      const {
        target: q,
        translate: I,
        slideLocation: ne
      } = K, le = q();
      le !== ne.get() && (I.to(le), ne.set(le));
    });
  }
  function U() {
    x.forEach((K) => K.translate.clear());
  }
  return {
    canLoop: z,
    clear: U,
    loop: Y,
    loopPoints: x
  };
}
function Qw(a, r, u) {
  let o, s = !1;
  function f(v) {
    if (!u) return;
    function h(y) {
      for (const b of y)
        if (b.type === "childList") {
          v.reInit(), r.emit("slidesChanged");
          break;
        }
    }
    o = new MutationObserver((y) => {
      s || (eu(u) || u(v, y)) && h(y);
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
function Zw(a, r, u, o) {
  const s = {};
  let f = null, d = null, p, v = !1;
  function h() {
    p = new IntersectionObserver((C) => {
      v || (C.forEach((E) => {
        const O = r.indexOf(E.target);
        s[O] = E;
      }), f = null, d = null, u.emit("slidesInView"));
    }, {
      root: a.parentElement,
      threshold: o
    }), r.forEach((C) => p.observe(C));
  }
  function y() {
    p && p.disconnect(), v = !0;
  }
  function b(C) {
    return nr(s).reduce((E, O) => {
      const T = parseInt(O), {
        isIntersecting: j
      } = s[T];
      return (C && j || !C && !j) && E.push(T), E;
    }, []);
  }
  function x(C = !0) {
    if (C && f) return f;
    if (!C && d) return d;
    const E = b(C);
    return C && (f = E), C || (d = E), E;
  }
  return {
    init: h,
    destroy: y,
    get: x
  };
}
function Kw(a, r, u, o, s, f) {
  const {
    measureSize: d,
    startEdge: p,
    endEdge: v
  } = a, h = u[0] && s, y = C(), b = E(), x = u.map(d), A = O();
  function C() {
    if (!h) return 0;
    const j = u[0];
    return Ve(r[p] - j[p]);
  }
  function E() {
    if (!h) return 0;
    const j = f.getComputedStyle(Kt(o));
    return parseFloat(j.getPropertyValue(`margin-${v}`));
  }
  function O() {
    return u.map((j, z, Y) => {
      const U = !z, J = bf(Y, z);
      return U ? x[z] + y : J ? x[z] + b : Y[z + 1][p] - j[p];
    }).map(Ve);
  }
  return {
    slideSizes: x,
    slideSizesWithGaps: A,
    startGap: y,
    endGap: b
  };
}
function Jw(a, r, u, o, s, f, d, p, v) {
  const {
    startEdge: h,
    endEdge: y,
    direction: b
  } = a, x = gf(u);
  function A(T, j) {
    return tr(T).filter((z) => z % j === 0).map((z) => T.slice(z, z + j));
  }
  function C(T) {
    return T.length ? tr(T).reduce((j, z, Y) => {
      const U = Kt(j) || 0, J = U === 0, K = z === sr(T), q = s[h] - f[U][h], I = s[h] - f[z][y], ne = !o && J ? b(d) : 0, le = !o && K ? b(p) : 0, ue = Ve(I - le - (q + ne));
      return Y && ue > r + v && j.push(z), K && j.push(T.length), j;
    }, []).map((j, z, Y) => {
      const U = Math.max(Y[z - 1] || 0);
      return T.slice(U, j);
    }) : [];
  }
  function E(T) {
    return x ? A(T, u) : C(T);
  }
  return {
    groupSlides: E
  };
}
function $w(a, r, u, o, s, f, d) {
  const {
    align: p,
    axis: v,
    direction: h,
    startIndex: y,
    loop: b,
    duration: x,
    dragFree: A,
    dragThreshold: C,
    inViewThreshold: E,
    slidesToScroll: O,
    skipSnaps: T,
    containScroll: j,
    watchResize: z,
    watchSlides: Y,
    watchDrag: U,
    watchFocus: J
  } = f, K = 2, q = _w(), I = q.measure(r), ne = u.map(q.measure), le = Mw(v, h), ue = le.measureSize(I), me = Nw(ue), se = Rw(p, ue), Q = !b && !!j, D = b || !!j, {
    slideSizes: X,
    slideSizesWithGaps: k,
    startGap: F,
    endGap: R
  } = Kw(le, I, ne, u, D, s), V = Jw(le, ue, O, b, I, ne, F, R, K), {
    snaps: ee,
    snapsAligned: W
  } = Hw(le, se, I, ne, V), te = -Kt(ee) + Kt(k), {
    snapsContained: ge,
    scrollContainLimit: ce
  } = Uw(ue, te, W, j, K), de = Q ? ge : W, {
    limit: ve
  } = Lw(te, de, b), Re = Hg(sr(de), y, b), Be = Re.clone(), Me = tr(u), ae = ({
    dragHandler: zn,
    scrollBody: Xa,
    scrollBounds: Qa,
    options: {
      loop: cn
    }
  }) => {
    cn || Qa.constrain(zn.pointerDown()), Xa.seek();
  }, Ce = ({
    scrollBody: zn,
    translate: Xa,
    location: Qa,
    offsetLocation: cn,
    previousLocation: ql,
    scrollLooper: sn,
    slideLooper: Vl,
    dragHandler: ml,
    animation: nu,
    eventHandler: Za,
    scrollBounds: mr,
    options: {
      loop: Xl
    }
  }, jn) => {
    const hr = zn.settled(), pr = !mr.shouldConstrain(), Ka = Xl ? hr : hr && pr, Ql = Ka && !ml.pointerDown();
    Ql && nu.stop();
    const Ja = Qa.get() * jn + ql.get() * (1 - jn);
    cn.set(Ja), Xl && (sn.loop(zn.direction()), Vl.loop()), Xa.to(cn.get()), Ql && Za.emit("settle"), Ka || Za.emit("scroll");
  }, ke = Cw(o, s, () => ae(it), (zn) => Ce(it, zn)), Fe = 0.68, gt = de[Re.get()], Xe = Ji(gt), Vt = Ji(gt), ct = Ji(gt), Pt = Ji(gt), Ft = zw(Xe, ct, Vt, Pt, x, Fe), Va = Yw(b, de, te, ve, Pt), Yl = qw(ke, Re, Be, Ft, Va, Pt, d), fr = kw(ve), dr = lr(), dl = Zw(r, u, d, E), {
    slideRegistry: st
  } = Gw(Q, j, de, ce, V, Me), Wt = Vw(a, u, st, Yl, Ft, dr, d, J), it = {
    ownerDocument: o,
    ownerWindow: s,
    eventHandler: d,
    containerRect: I,
    slideRects: ne,
    animation: ke,
    axis: le,
    dragHandler: Ow(le, a, o, s, Pt, Tw(le, s), Xe, ke, Yl, Ft, Va, Re, d, me, A, C, T, Fe, U),
    eventStore: dr,
    percentOfView: me,
    index: Re,
    indexPrevious: Be,
    limit: ve,
    location: Xe,
    offsetLocation: ct,
    previousLocation: Vt,
    options: f,
    resizeHandler: Dw(r, d, s, u, le, z, q),
    scrollBody: Ft,
    scrollBounds: jw(ve, ct, Pt, Ft, me),
    scrollLooper: Bw(te, ve, ct, [Xe, ct, Vt, Pt]),
    scrollProgress: fr,
    scrollSnapList: de.map(fr.get),
    scrollSnaps: de,
    scrollTarget: Va,
    scrollTo: Yl,
    slideLooper: Xw(le, ue, te, X, k, ee, de, ct, u),
    slideFocus: Wt,
    slidesHandler: Qw(r, d, Y),
    slidesInView: dl,
    slideIndexes: Me,
    slideRegistry: st,
    slidesToScroll: V,
    target: Pt,
    translate: Gg(le, r)
  };
  return it;
}
function Pw() {
  let a = {}, r;
  function u(h) {
    r = h;
  }
  function o(h) {
    return a[h] || [];
  }
  function s(h) {
    return o(h).forEach((y) => y(r, h)), v;
  }
  function f(h, y) {
    return a[h] = o(h).concat([y]), v;
  }
  function d(h, y) {
    return a[h] = o(h).filter((b) => b !== y), v;
  }
  function p() {
    a = {};
  }
  const v = {
    init: u,
    emit: s,
    off: d,
    on: f,
    clear: p
  };
  return v;
}
const Fw = {
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
function Ww(a) {
  function r(f, d) {
    return kg(f, d || {});
  }
  function u(f) {
    const d = f.breakpoints || {}, p = nr(d).filter((v) => a.matchMedia(v).matches).map((v) => d[v]).reduce((v, h) => r(v, h), {});
    return r(f, p);
  }
  function o(f) {
    return f.map((d) => nr(d.breakpoints || {})).reduce((d, p) => d.concat(p), []).map(a.matchMedia);
  }
  return {
    mergeOptions: r,
    optionsAtMedia: u,
    optionsMediaQueries: o
  };
}
function Iw(a) {
  let r = [];
  function u(f, d) {
    return r = d.filter(({
      options: p
    }) => a.optionsAtMedia(p).active !== !1), r.forEach((p) => p.init(f, a)), d.reduce((p, v) => Object.assign(p, {
      [v.name]: v
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
function Xo(a, r, u) {
  const o = a.ownerDocument, s = o.defaultView, f = Ww(s), d = Iw(f), p = lr(), v = Pw(), {
    mergeOptions: h,
    optionsAtMedia: y,
    optionsMediaQueries: b
  } = f, {
    on: x,
    off: A,
    emit: C
  } = v, E = le;
  let O = !1, T, j = h(Fw, Xo.globalOptions), z = h(j), Y = [], U, J, K;
  function q() {
    const {
      container: Me,
      slides: ae
    } = z;
    J = (Js(Me) ? a.querySelector(Me) : Me) || a.children[0];
    const ke = Js(ae) ? J.querySelectorAll(ae) : ae;
    K = [].slice.call(ke || J.children);
  }
  function I(Me) {
    const ae = $w(a, J, K, o, s, Me, v);
    if (Me.loop && !ae.slideLooper.canLoop()) {
      const Ce = Object.assign({}, Me, {
        loop: !1
      });
      return I(Ce);
    }
    return ae;
  }
  function ne(Me, ae) {
    O || (j = h(j, Me), z = y(j), Y = ae || Y, q(), T = I(z), b([j, ...Y.map(({
      options: Ce
    }) => Ce)]).forEach((Ce) => p.add(Ce, "change", le)), z.active && (T.translate.to(T.location.get()), T.animation.init(), T.slidesInView.init(), T.slideFocus.init(Be), T.eventHandler.init(Be), T.resizeHandler.init(Be), T.slidesHandler.init(Be), T.options.loop && T.slideLooper.loop(), J.offsetParent && K.length && T.dragHandler.init(Be), U = d.init(Be, Y)));
  }
  function le(Me, ae) {
    const Ce = V();
    ue(), ne(h({
      startIndex: Ce
    }, Me), ae), v.emit("reInit");
  }
  function ue() {
    T.dragHandler.destroy(), T.eventStore.clear(), T.translate.clear(), T.slideLooper.clear(), T.resizeHandler.destroy(), T.slidesHandler.destroy(), T.slidesInView.destroy(), T.animation.destroy(), d.destroy(), p.clear();
  }
  function me() {
    O || (O = !0, p.clear(), ue(), v.emit("destroy"), v.clear());
  }
  function se(Me, ae, Ce) {
    !z.active || O || (T.scrollBody.useBaseFriction().useDuration(ae === !0 ? 0 : z.duration), T.scrollTo.index(Me, Ce || 0));
  }
  function Q(Me) {
    const ae = T.index.add(1).get();
    se(ae, Me, -1);
  }
  function D(Me) {
    const ae = T.index.add(-1).get();
    se(ae, Me, 1);
  }
  function X() {
    return T.index.add(1).get() !== V();
  }
  function k() {
    return T.index.add(-1).get() !== V();
  }
  function F() {
    return T.scrollSnapList;
  }
  function R() {
    return T.scrollProgress.get(T.offsetLocation.get());
  }
  function V() {
    return T.index.get();
  }
  function ee() {
    return T.indexPrevious.get();
  }
  function W() {
    return T.slidesInView.get();
  }
  function te() {
    return T.slidesInView.get(!1);
  }
  function ge() {
    return U;
  }
  function ce() {
    return T;
  }
  function de() {
    return a;
  }
  function ve() {
    return J;
  }
  function Re() {
    return K;
  }
  const Be = {
    canScrollNext: X,
    canScrollPrev: k,
    containerNode: ve,
    internalEngine: ce,
    destroy: me,
    off: A,
    on: x,
    emit: C,
    plugins: ge,
    previousScrollSnap: ee,
    reInit: E,
    rootNode: de,
    scrollNext: Q,
    scrollPrev: D,
    scrollProgress: R,
    scrollSnapList: F,
    scrollTo: se,
    selectedScrollSnap: V,
    slideNodes: Re,
    slidesInView: W,
    slidesNotInView: te
  };
  return ne(r, u), setTimeout(() => v.emit("init"), 0), Be;
}
Xo.globalOptions = void 0;
function xf(a = {}, r = []) {
  const u = w.useRef(a), o = w.useRef(r), [s, f] = w.useState(), [d, p] = w.useState(), v = w.useCallback(() => {
    s && s.reInit(u.current, o.current);
  }, [s]);
  return w.useEffect(() => {
    vf(u.current, a) || (u.current = a, v());
  }, [a, v]), w.useEffect(() => {
    Ew(o.current, r) || (o.current = r, v());
  }, [r, v]), w.useEffect(() => {
    if (Sw() && d) {
      Xo.globalOptions = xf.globalOptions;
      const h = Xo(d, u.current, o.current);
      return f(h), () => h.destroy();
    } else
      f(void 0);
  }, [d, f]), [p, s];
}
xf.globalOptions = void 0;
const Yg = w.createContext(null);
function tu() {
  const a = w.useContext(Yg);
  if (!a)
    throw new Error("useCarousel must be used within a <Carousel />");
  return a;
}
function e2({
  orientation: a = "horizontal",
  opts: r,
  setApi: u,
  plugins: o,
  className: s,
  children: f,
  ...d
}) {
  const [p, v] = xf({
    ...r,
    axis: a === "horizontal" ? "x" : "y"
  }, o), [h, y] = w.useState(!1), [b, x] = w.useState(!1), A = w.useCallback((T) => {
    T && (y(T.canScrollPrev()), x(T.canScrollNext()));
  }, []), C = w.useCallback(() => {
    v == null || v.scrollPrev();
  }, [v]), E = w.useCallback(() => {
    v == null || v.scrollNext();
  }, [v]), O = w.useCallback((T) => {
    T.key === "ArrowLeft" ? (T.preventDefault(), C()) : T.key === "ArrowRight" && (T.preventDefault(), E());
  }, [C, E]);
  return w.useEffect(() => {
    !v || !u || u(v);
  }, [v, u]), w.useEffect(() => {
    if (v)
      return A(v), v.on("reInit", A), v.on("select", A), () => {
        v == null || v.off("select", A);
      };
  }, [v, A]), /* @__PURE__ */ S.jsx(
    Yg.Provider,
    {
      value: {
        carouselRef: p,
        api: v,
        opts: r,
        orientation: a || ((r == null ? void 0 : r.axis) === "y" ? "vertical" : "horizontal"),
        scrollPrev: C,
        scrollNext: E,
        canScrollPrev: h,
        canScrollNext: b
      },
      children: /* @__PURE__ */ S.jsx(
        "div",
        {
          onKeyDownCapture: O,
          className: fl("relative", s),
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
function t2({
  className: a,
  ...r
}) {
  const { carouselRef: u, orientation: o } = tu();
  return /* @__PURE__ */ S.jsx(
    "div",
    {
      ref: u,
      className: "overflow-hidden",
      "data-slot": "carousel-content",
      children: /* @__PURE__ */ S.jsx(
        "div",
        {
          className: fl(
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
function n2({
  className: a,
  ...r
}) {
  const { orientation: u } = tu();
  return /* @__PURE__ */ S.jsx(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: fl(
        "min-w-0 shrink-0 grow-0 basis-full",
        u === "horizontal" ? "pl-4" : "pt-4",
        a
      ),
      ...r
    }
  );
}
function l2({
  className: a,
  variant: r = "outline",
  size: u = "icon",
  ...o
}) {
  const { orientation: s, scrollPrev: f, canScrollPrev: d } = tu();
  return /* @__PURE__ */ S.jsxs(
    On,
    {
      "data-slot": "carousel-previous",
      variant: r,
      size: u,
      className: fl("absolute size-8 rounded-full", s === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", a),
      disabled: !d,
      onClick: f,
      ...o,
      children: [
        /* @__PURE__ */ S.jsx(EE, {}),
        /* @__PURE__ */ S.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function a2({
  className: a,
  variant: r = "outline",
  size: u = "icon",
  ...o
}) {
  const { orientation: s, scrollNext: f, canScrollNext: d } = tu();
  return /* @__PURE__ */ S.jsxs(
    On,
    {
      "data-slot": "carousel-next",
      variant: r,
      size: u,
      className: fl("absolute size-8 rounded-full", s === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", a),
      disabled: !d,
      onClick: f,
      ...o,
      children: [
        /* @__PURE__ */ S.jsx(AE, {}),
        /* @__PURE__ */ S.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}
const il = {
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
    "https://cdn.shopify.com/s/files/1/0831/4141/files/HANNES_1kg_BAG.png?v=1706179901",
    "https://cdn.shopify.com/s/files/1/0831/4141/products/espressoshotsCropped_60eb6865-fd62-43c7-90c5-2bc9050f167b.jpg?v=1741274114"
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
      // Assuming these images are for Regional - Center America
      "https://cdn.shopify.com/s/files/1/0831/4141/files/BAG_Volcan_Azul_Caturra_OMNI_3a40d3d4-a185-4da0-99ff-b8d0f43479b7.png?v=1743674027",
      // Example, replace with actual
      "https://cdn.shopify.com/s/files/1/0831/4141/files/Image_26.04.24_at_14.12.jpg?v=1728375513",
      "https://cdn.shopify.com/s/files/1/0831/4141/files/2_v60_6c2d62af-96c2-4e95-a9f9-5d66eb85efb8.png?v=1712752891"
    ],
    _default: ["https://cdn.shopify.com/s/files/1/0831/4141/files/map.png?v=1745847536"]
  },
  Capsules: [
    "https://cdn.shopify.com/s/files/1/0831/4141/files/capsules_1.png?v=1695032905",
    "https://cdn.shopify.com/s/files/1/0831/4141/products/94caa496-c974-436d-a877-91b5f1deee76_e692294a-dcda-4e46-97cf-cb22632a1acf.jpg?v=1667996022",
    "https://cdn.shopify.com/s/files/1/0831/4141/files/Capsules.jpg?v=1629729054"
  ],
  _fallback: [
    "https://cdn.shopify.com/s/files/1/0831/4141/files/LOGO-NAME.png?v=1710576883"
  ]
}, Zi = {
  "Roasters Choice": { description: "Our most popular Subscription. Every month, we source stunning coffees from around the world. This is the best way to explore the origins, varietals, and processes that make Single Origin flavour so special.", currentOffering: `Current Offering:

🇪🇹 Spring Coffee, Ethiopia: Apricot Jam. Bergamot. Floral.` },
  Curated: { description: "Perfect for sharing or enjoying variety. Every month our Roasters select two exceptional 250g bags of different single origin coffees, roasted for Filter or Espresso.", currentOffering: `Current Pairings:

Pairing details coming soon!` },
  Masterpiece: { description: "The rarest coffees on the planet, scoring 90 points and up. We send one bag (100-150g) of these extraordinary coffees each month. Omni Roast.", currentOffering: `Current Offering:

Finca Sophia Natural Gesha, Panama 🇵🇦` },
  "Low-Caf": { description: "This subscription sends out 250g of rare coffee varietals that naturally contain low caffeine: Aramosa or Laurina.", currentOffering: `Current Offering:

Daterra Reserve from Brazil 🇧🇷` },
  Office: { description: "Our Espresso works on all Office Machines: Full Automat, Espresso, Filter. Choose your monthly volume of 1kg bags, delivered fresh.", currentOffering: `Current Offering:

Our signature Office Espresso Blend.` },
  Regional: {
    Brazil: { description: "People love Brazilian Coffees for their sweetness, low acidity and chocolate notes.", currentOffering: `Current Offering:

🇧🇷 Elemental, Brazil: Milk Chocolate. Macadamia. Smooth.` },
    Ethiopia: { description: "People love Ethiopian Coffees for their floral notes and its tea-like character.", currentOffering: `Current Offering:

🇪🇹 Chelbesa, Ethiopia: Peach. Fudge. Jasmine.` },
    "Center America": { description: "People like Central Coffees for their exciting acidity and clean notes of terroir.", currentOffering: `Current Offering:

🇨🇷 Volcan Azul, Costa Rica: Dried Fig. Vanilla.` },
    // Example, update if needed
    _default: { description: "Select a region to see details about the specific coffee offering for this type.", currentOffering: "" }
  },
  Capsules: {
    _default: {
      description: "Select a taste profile to continue.",
      currentOffering: "Receive our Sustainable Capsules on repeat."
    },
    Brazil: {
      description: "Text to update",
      currentOffering: "Text to update"
    },
    Ethiopia: {
      description: "Text to update",
      currentOffering: "Text to update"
    },
    Masterpiece: {
      description: "Text to update",
      currentOffering: "Text to update"
    }
  }
}, i2 = (a, r, u, o, s, f) => (console.log("Looking up Variant ID for Permalink:", { method: a, type: r, region: u, sizeOption: o, edition: s, quantity: f }), a === "Capsules" ? (console.error("Capsule variant ID lookup not fully implemented for permalinks."), null) : r === "Roasters Choice" ? a === "Filter" ? 45910178332939 : a === "Espresso" ? 45910178398475 : (console.warn("Roasters Choice selected but method is invalid:", a), null) : r === "Curated" ? (console.error("Curated variant ID lookup not implemented."), null) : r === "Masterpiece" ? 45969541562635 : r === "Office" ? (console.error("Office variant ID lookup not implemented."), null) : r === "Regional" ? u === "Center America" ? 45972274381067 : (console.warn(`Regional variant ID lookup not implemented for region: ${u}`), null) : r === "Low-Caf" ? 45972282409227 : (console.warn(`Variant ID lookup fallback: M=${a},T=${r},R=${u},S=${o},E=${s},Q=${f}`), null)), $p = {
  "1 Week": { planId: 710364201335, interval: 1, unit: "Weeks" },
  "2 Weeks": { planId: 710364234103, interval: 2, unit: "Weeks" },
  "3 Weeks": { planId: 710364266871, interval: 3, unit: "Weeks" },
  "4 Weeks (Recommended)": { planId: 710364299639, interval: 4, unit: "Weeks" },
  "5 Weeks": { planId: 710364332407, interval: 5, unit: "Weeks" },
  "6 Weeks": { planId: 710364365175, interval: 6, unit: "Weeks" }
}, r2 = {
  "2 Weeks": 710464045431,
  "4 Weeks (Recommended)": 710464143735,
  "6 Weeks": 710464110967
}, Pp = 710364397943, o2 = {
  "1 Week": 710364823927,
  // From your previous working magic link for 1 week
  "2 Weeks": 710364856695,
  "4 Weeks (Recommended)": 710364922231,
  // Assuming "4 Weeks (Recommended)" is the key for 4 weeks
  "6 Weeks": 710364987767
}, u2 = ({ method: a, type: r, region: u, edition: o, sizeOption: s, quantity: f, frequency: d }) => {
  var C, E, O, T, j, z;
  const p = "thebarn.de", v = () => /* @__PURE__ */ S.jsxs("div", { className: "default-intro-content text-white w-[90%] h-full flex flex-col items-center", children: [
    /* @__PURE__ */ S.jsx("div", { className: "mt-8", children: /* @__PURE__ */ S.jsx("img", { src: "https://cdn.shopify.com/s/files/1/0831/4141/files/LOGO-NAME.png?v=1710576883", alt: "The Barn Coffee Roasters Logo", style: { width: "100%", maxWidth: "180px", height: "auto", margin: "1rem 0" } }) }),
    /* @__PURE__ */ S.jsx("div", { className: "p-5 border border-[#A57C62] rounded-md mt-8 w-full max-w-5xl", children: /* @__PURE__ */ S.jsxs("ul", { className: "intro-list text-xl sm:text-2xl", style: { listStyle: "none", padding: 0 }, children: [
      /* @__PURE__ */ S.jsx("li", { className: "my-2", children: "🌱 Sustainably sourced from top farms" }),
      /* @__PURE__ */ S.jsx("li", { className: "my-2", children: "🔥 Expertly roasted in Berlin" }),
      /* @__PURE__ */ S.jsx("li", { className: "my-2", children: "📦 Delivered fresh, right when you need it" }),
      /* @__PURE__ */ S.jsx("li", { className: "my-2", children: "☕ Always rotating—always exceptional" })
    ] }) })
  ] }), h = a && (r || o), y = a && f && d && (a === "Capsules" && o || a !== "Capsules" && r && (r === "Office" && s || r === "Regional" && u || // This will allow Regional to proceed if region is selected
  ["Roasters Choice", "Masterpiece", "Low-Caf", "Curated"].includes(r)));
  let b, x = [], A = null;
  if (h) {
    a === "Capsules" ? (x = il.Capsules || il._fallback || [], A = ((C = Zi.Capsules) == null ? void 0 : C[o]) || ((E = Zi.Capsules) == null ? void 0 : E._default) || null) : r === "Regional" ? (x = ((O = il.Regional) == null ? void 0 : O[u]) || ((T = il.Regional) == null ? void 0 : T._default) || il._fallback || [], A = ((j = Zi.Regional) == null ? void 0 : j[u]) || ((z = Zi.Regional) == null ? void 0 : z._default) || null) : (x = il[r] || il._fallback || [], A = Zi[r] || null), Array.isArray(x) || (x = il._fallback || []);
    const Y = "text-[#A67C52] font-semibold", U = [];
    if (U.push("Your selection: "), U.push(/* @__PURE__ */ S.jsx("span", { className: Y, children: a }, "method")), a === "Capsules" ? o ? (U.push(" - Taste: "), U.push(/* @__PURE__ */ S.jsx("span", { className: Y, children: o }, "edition"))) : U.push(" (select taste profile)") : r ? (U.push(" - "), U.push(/* @__PURE__ */ S.jsx("span", { className: Y, children: r }, "type")), r === "Regional" && (u ? (U.push(" - "), U.push(/* @__PURE__ */ S.jsx("span", { className: Y, children: u }, "region"))) : U.push(" (select region)"))) : U.push(" (select type)"), U.push(" subscription"), f)
      if (U.push(" - Qty: "), r === "Office")
        U.push(/* @__PURE__ */ S.jsx("span", { className: Y, children: s }, "qty-val"));
      else if (a === "Capsules")
        U.push(/* @__PURE__ */ S.jsx("span", { className: Y, children: `${f}x 10 capsules` }, "qty-val"));
      else {
        const q = parseInt(f);
        r === "Curated" ? U.push(/* @__PURE__ */ S.jsx("span", { className: Y, children: `${q}x 250g` }, "qty-val")) : r === "Masterpiece" ? U.push(/* @__PURE__ */ S.jsx("span", { className: Y, children: `${q} bag${q > 1 ? "s" : ""}` }, "qty-val")) : (U.push(/* @__PURE__ */ S.jsx("span", { className: Y, children: f }, "qty-val")), U.push(" x 250g"));
      }
    else
      U.push(r === "Office" ? " (select size)" : " (select quantity)");
    if (d) {
      U.push(", delivered every ");
      const q = d.replace(" (Recommended)", "");
      U.push(/* @__PURE__ */ S.jsx("span", { className: Y, children: q }, "freq"));
    } else
      U.push(" (select frequency)");
    U.push(".");
    const J = () => {
      if (console.log("Attempting to generate Permalink for State:", { method: a, type: r, region: u, edition: o, sizeOption: s, quantity: f, frequency: d }), !y) {
        alert("Please complete your subscription selections to proceed."), console.warn("Permalink generation blocked by canAddToCart check.");
        return;
      }
      const q = i2(a, r, u, s, o, f);
      if (!q) {
        alert("Error: Product variant could not be determined for your selection. Please ensure all options are selected or check configuration (ensure Variant IDs are mapped)."), console.error("Permalink Error: Missing Variant ID for selections:", { method: a, type: r, region: u, edition: o, sizeOption: s, quantity: f });
        return;
      }
      let I;
      if (r === "Office") {
        const se = s.match(/^(\d+)x/);
        if (se && se[1])
          I = parseInt(se[1], 10);
        else {
          alert("Error: Could not determine quantity for Office subscription from the size option."), console.error("Permalink Error: Could not parse quantity from Office sizeOption:", s);
          return;
        }
      } else
        I = parseInt(f, 10);
      if (isNaN(I) || I < 1) {
        alert("Error: Invalid or missing quantity for the selected product."), console.error("Permalink Error: Invalid quantityForLink:", I, "from quantity prop:", f);
        return;
      }
      let ne;
      if (r === "Low-Caf")
        ne = r2[d];
      else if (r === "Masterpiece")
        d === "4 Weeks (Recommended)" || console.warn(`Masterpiece selected with frequency "${d}", but its permalink will use the dedicated Masterpiece selling plan ID which is typically associated with a 4-week cycle.`), ne = Pp;
      else if (r === "Regional" && u === "Center America")
        ne = o2[d];
      else {
        const se = $p[d];
        se && se.planId && (ne = se.planId);
      }
      if ((r === "Low-Caf" || r === "Regional" && u === "Center America") && !ne) {
        const se = $p[d];
        if (se && se.planId)
          ne = se.planId, console.warn(`${r} ${u || ""} specific selling plan ID not found for frequency "${d}". Attempting to use generic plan ID: ${ne}. This might be incorrect.`);
        else {
          alert(`Error: ${r} ${u || ""} is not available for the selected frequency: "${d}", or mapping is missing.`), console.error(`Permalink Error: ${r} ${u || ""} frequency not mapped for specific plan IDs and no fallback:`, d);
          return;
        }
      }
      if (!ne) {
        alert(`Error: Subscription plan details not found for the selected frequency: "${d}" and type: "${r}".`), console.error("Permalink Error: Missing selling plan ID for frequency:", d, "type:", r);
        return;
      }
      const le = new URLSearchParams();
      le.append("items[][id]", q.toString()), le.append("items[][quantity]", I.toString()), le.append("items[][selling_plan]", ne.toString()), le.append("return_to", "/checkout");
      const ue = `https://${p}/cart/clear?return_to=${encodeURIComponent(`/cart/add?${le.toString()}`)}`;
      console.log("Opening Permalink in new tab:", ue);
      const me = window.open(ue, "_blank");
      me ? me.focus() : alert("Your browser may have blocked the new tab. Please check your pop-up blocker settings.");
    }, K = r === "Masterpiece" ? "We roast this subscription only on the first Tuesday every month" : "You can adjust your quantity any time!";
    b = /* @__PURE__ */ S.jsxs("div", { className: "final-selection-display w-[100%] flex flex-col items-center text-white text-center px-4", children: [
      /* @__PURE__ */ S.jsx("h2", { className: "summary-init text-2xl font-semibold text-[#A67C52] mb-4", children: "Subscription Summary" }),
      x.length > 0 ? /* @__PURE__ */ S.jsxs(e2, { className: "w-full max-w-lg mx-auto mb-6", opts: { align: "start", loop: x.length > 1 }, children: [
        /* @__PURE__ */ S.jsx(t2, { children: x.map((q, I) => /* @__PURE__ */ S.jsx(n2, { children: /* @__PURE__ */ S.jsx("div", { className: "p-1", children: /* @__PURE__ */ S.jsx(
          "img",
          {
            src: q,
            alt: `${a}${r ? " - " + r : ""}${o ? " - Taste: " + o : ""}${u ? " - " + u : ""} image ${I + 1}`,
            className: "w-full h-auto aspect-square object-cover rounded-md block",
            loading: "lazy"
          }
        ) }) }, `${a}-${r || o}-${u || ""}-${I}-${f}`)) }),
        x.length > 1 && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
          /* @__PURE__ */ S.jsx(l2, { className: "absolute left-[-25px] sm:left-[-40px] top-1/2 -translate-y-1/2 text-[#A67C52] bg-[#1a1a1a]/80 hover:bg-[#3a3c3d] border-none" }),
          /* @__PURE__ */ S.jsx(a2, { className: "absolute right-[-25px] sm:right-[-40px] top-1/2 -translate-y-1/2 text-[#A67C52] bg-[#1a1a1a]/80 hover:bg-[#3a3c3d] border-none" })
        ] })
      ] }) : /* @__PURE__ */ S.jsx("div", { className: "w-full max-w-xs h-[250px] bg-[#3a3c3d]/50 flex items-center justify-center rounded-md mb-6 border border-[#A67C52]/30", children: /* @__PURE__ */ S.jsx("p", { className: "text-gray-400", children: "Image Coming Soon" }) }),
      A && A.description && /* @__PURE__ */ S.jsxs("div", { className: "subscription-description text-white my-4 text-left w-full max-w-5xl flex justify-center flex-col", children: [
        /* @__PURE__ */ S.jsxs("div", { className: "bg-[#3a3c3d] p-4 rounded-md border border-[#A67C52] text-base sm:text-lg w-full", children: [
          /* @__PURE__ */ S.jsx("p", { className: "mb-3", children: A.description }),
          A.currentOffering && /* @__PURE__ */ S.jsx("p", { className: "whitespace-pre-wrap text-sm sm:text-base", children: A.currentOffering })
        ] }),
        /* @__PURE__ */ S.jsxs("div", { children: [
          " ",
          /* @__PURE__ */ S.jsx("h1", { className: "words-animation", children: K }),
          " "
        ] })
      ] }),
      /* @__PURE__ */ S.jsx("p", { className: "summary-sentence text-base sm:text-lg leading-relaxed my-4 w-full max-w-5xl min-h-[3em]", children: U }),
      /* @__PURE__ */ S.jsx("div", { className: "cart-btn mt-auto pt-4 w-full max-w-5xl flex justify-center sm:justify-end", children: /* @__PURE__ */ S.jsx(
        "button",
        {
          className: "bg-[#A67C52] py-2 px-5 rounded-md border-[1.5px] border-transparent hover:border-[#3a3c3d] transition-all duration-300 ease-in-out transform text-white font-semibold text-base sm:text-md disabled:opacity-50 disabled:cursor-not-allowed enabled:hover:brightness-110 enabled:active:scale-95",
          disabled: !y,
          onClick: J,
          children: "ADD TO CART"
        }
      ) })
    ] });
  } else
    b = /* @__PURE__ */ S.jsx(v, {});
  return /* @__PURE__ */ S.jsx("div", { className: "right-container pt-10 pb-10 flex justify-center items-start w-full min-h-screen bg-[#1a1a1a]", children: b });
};
function c2() {
  const [a, r] = w.useState(""), [u, o] = w.useState(""), [s, f] = w.useState(""), [d, p] = w.useState(""), [v, h] = w.useState(""), [y, b] = w.useState(""), [x, A] = w.useState(""), C = (J) => {
    r(J), o(""), f(""), p(""), h(""), b(""), A("");
  }, E = (J) => {
    o(J), f(""), p(""), h(""), b(""), A("");
  }, O = (J) => {
    f(J), p(""), b(""), A("");
  }, T = (J) => {
    p(J), o(""), f(""), h(""), b(""), A("");
  }, j = (J) => {
    h(J), b(u === "Office" ? J : ""), p(""), A("");
  }, z = (J) => {
    b(J), A("");
  }, Y = (J) => {
    A(J);
  }, U = () => {
    r(""), o(""), f(""), p(""), h(""), b(""), A("");
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "app-container", children: [
    /* @__PURE__ */ S.jsx("div", { className: "function-container", children: /* @__PURE__ */ S.jsx(
      bw,
      {
        selectedMethod: a,
        selectedCoffeeType: u,
        selectedRegion: s,
        selectedEdition: d,
        selectedSizeOption: v,
        finalSelectionDetail: y,
        selectedFrequency: x,
        onMethodChange: C,
        onCoffeeTypeChange: E,
        onRegionChange: O,
        onEditionChange: T,
        onSizeOptionChange: j,
        onQuantityChange: z,
        onFrequencyChange: Y,
        onResetSelections: U
      }
    ) }),
    /* @__PURE__ */ S.jsx("div", { className: "result-container", children: /* @__PURE__ */ S.jsx(
      u2,
      {
        method: a,
        type: u,
        region: s,
        edition: d,
        sizeOption: v,
        quantity: y,
        frequency: x
      }
    ) })
  ] });
}
const zs = "thebarn-subscription-react-app-root";
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded. Attempting to mount React app...");
  const a = document.getElementById(zs);
  if (console.log(`Found element with ID #${zs}:`, a), a)
    try {
      ub.createRoot(a).render(
        /* @__PURE__ */ S.jsx(w.StrictMode, { children: /* @__PURE__ */ S.jsx(c2, {}) })
      ), console.log("React app mount initiated successfully.");
    } catch (r) {
      console.error("Error occurred during createRoot or render:", r);
    }
  else
    console.error(`CRITICAL ERROR: Could not find root element with ID #${zs} in the HTML after DOMContentLoaded.`);
});
