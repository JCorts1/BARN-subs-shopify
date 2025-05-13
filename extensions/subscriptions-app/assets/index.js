function P0(a, i) {
  for (var o = 0; o < i.length; o++) {
    const u = i[o];
    if (typeof u != "string" && !Array.isArray(u)) {
      for (const s in u)
        if (s !== "default" && !(s in a)) {
          const f = Object.getOwnPropertyDescriptor(u, s);
          f && Object.defineProperty(a, s, f.get ? f : {
            enumerable: !0,
            get: () => u[s]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
function Fp(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var fs = { exports: {} }, Vr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ip;
function I0() {
  if (ip) return Vr;
  ip = 1;
  var a = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function o(u, s, f) {
    var d = null;
    if (f !== void 0 && (d = "" + f), s.key !== void 0 && (d = "" + s.key), "key" in s) {
      f = {};
      for (var p in s)
        p !== "key" && (f[p] = s[p]);
    } else f = s;
    return s = f.ref, {
      $$typeof: a,
      type: u,
      key: d,
      ref: s !== void 0 ? s : null,
      props: f
    };
  }
  return Vr.Fragment = i, Vr.jsx = o, Vr.jsxs = o, Vr;
}
var up;
function W0() {
  return up || (up = 1, fs.exports = I0()), fs.exports;
}
var S = W0(), ds = { exports: {} }, be = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var op;
function eb() {
  if (op) return be;
  op = 1;
  var a = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), b = Symbol.iterator;
  function x(M) {
    return M === null || typeof M != "object" ? null : (M = b && M[b] || M["@@iterator"], typeof M == "function" ? M : null);
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
  function O(M, X, W) {
    this.props = M, this.context = X, this.refs = E, this.updater = W || A;
  }
  O.prototype.isReactComponent = {}, O.prototype.setState = function(M, X) {
    if (typeof M != "object" && typeof M != "function" && M != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, M, X, "setState");
  }, O.prototype.forceUpdate = function(M) {
    this.updater.enqueueForceUpdate(this, M, "forceUpdate");
  };
  function T() {
  }
  T.prototype = O.prototype;
  function j(M, X, W) {
    this.props = M, this.context = X, this.refs = E, this.updater = W || A;
  }
  var D = j.prototype = new T();
  D.constructor = j, C(D, O.prototype), D.isPureReactComponent = !0;
  var L = Array.isArray, Y = { H: null, A: null, T: null, S: null, V: null }, J = Object.prototype.hasOwnProperty;
  function Q(M, X, W, I, te, ge) {
    return W = ge.ref, {
      $$typeof: a,
      type: M,
      key: X,
      ref: W !== void 0 ? W : null,
      props: ge
    };
  }
  function H(M, X) {
    return Q(
      M.type,
      X,
      void 0,
      void 0,
      void 0,
      M.props
    );
  }
  function ee(M) {
    return typeof M == "object" && M !== null && M.$$typeof === a;
  }
  function le(M) {
    var X = { "=": "=0", ":": "=2" };
    return "$" + M.replace(/[=:]/g, function(W) {
      return X[W];
    });
  }
  var ae = /\/+/g;
  function oe(M, X) {
    return typeof M == "object" && M !== null && M.key != null ? le("" + M.key) : X.toString(36);
  }
  function me() {
  }
  function he(M) {
    switch (M.status) {
      case "fulfilled":
        return M.value;
      case "rejected":
        throw M.reason;
      default:
        switch (typeof M.status == "string" ? M.then(me, me) : (M.status = "pending", M.then(
          function(X) {
            M.status === "pending" && (M.status = "fulfilled", M.value = X);
          },
          function(X) {
            M.status === "pending" && (M.status = "rejected", M.reason = X);
          }
        )), M.status) {
          case "fulfilled":
            return M.value;
          case "rejected":
            throw M.reason;
        }
    }
    throw M;
  }
  function V(M, X, W, I, te) {
    var ge = typeof M;
    (ge === "undefined" || ge === "boolean") && (M = null);
    var ce = !1;
    if (M === null) ce = !0;
    else
      switch (ge) {
        case "bigint":
        case "string":
        case "number":
          ce = !0;
          break;
        case "object":
          switch (M.$$typeof) {
            case a:
            case i:
              ce = !0;
              break;
            case y:
              return ce = M._init, V(
                ce(M._payload),
                X,
                W,
                I,
                te
              );
          }
      }
    if (ce)
      return te = te(M), ce = I === "" ? "." + oe(M, 0) : I, L(te) ? (W = "", ce != null && (W = ce.replace(ae, "$&/") + "/"), V(te, X, W, "", function(Me) {
        return Me;
      })) : te != null && (ee(te) && (te = H(
        te,
        W + (te.key == null || M && M.key === te.key ? "" : ("" + te.key).replace(
          ae,
          "$&/"
        ) + "/") + ce
      )), X.push(te)), 1;
    ce = 0;
    var fe = I === "" ? "." : I + ":";
    if (L(M))
      for (var ve = 0; ve < M.length; ve++)
        I = M[ve], ge = fe + oe(I, ve), ce += V(
          I,
          X,
          W,
          ge,
          te
        );
    else if (ve = x(M), typeof ve == "function")
      for (M = ve.call(M), ve = 0; !(I = M.next()).done; )
        I = I.value, ge = fe + oe(I, ve++), ce += V(
          I,
          X,
          W,
          ge,
          te
        );
    else if (ge === "object") {
      if (typeof M.then == "function")
        return V(
          he(M),
          X,
          W,
          I,
          te
        );
      throw X = String(M), Error(
        "Objects are not valid as a React child (found: " + (X === "[object Object]" ? "object with keys {" + Object.keys(M).join(", ") + "}" : X) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ce;
  }
  function N(M, X, W) {
    if (M == null) return M;
    var I = [], te = 0;
    return V(M, I, "", "", function(ge) {
      return X.call(W, ge, te++);
    }), I;
  }
  function Z(M) {
    if (M._status === -1) {
      var X = M._result;
      X = X(), X.then(
        function(W) {
          (M._status === 0 || M._status === -1) && (M._status = 1, M._result = W);
        },
        function(W) {
          (M._status === 0 || M._status === -1) && (M._status = 2, M._result = W);
        }
      ), M._status === -1 && (M._status = 0, M._result = X);
    }
    if (M._status === 1) return M._result.default;
    throw M._result;
  }
  var k = typeof reportError == "function" ? reportError : function(M) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var X = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof M == "object" && M !== null && typeof M.message == "string" ? String(M.message) : String(M),
        error: M
      });
      if (!window.dispatchEvent(X)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", M);
      return;
    }
    console.error(M);
  };
  function P() {
  }
  return be.Children = {
    map: N,
    forEach: function(M, X, W) {
      N(
        M,
        function() {
          X.apply(this, arguments);
        },
        W
      );
    },
    count: function(M) {
      var X = 0;
      return N(M, function() {
        X++;
      }), X;
    },
    toArray: function(M) {
      return N(M, function(X) {
        return X;
      }) || [];
    },
    only: function(M) {
      if (!ee(M))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return M;
    }
  }, be.Component = O, be.Fragment = o, be.Profiler = s, be.PureComponent = j, be.StrictMode = u, be.Suspense = v, be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y, be.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(M) {
      return Y.H.useMemoCache(M);
    }
  }, be.cache = function(M) {
    return function() {
      return M.apply(null, arguments);
    };
  }, be.cloneElement = function(M, X, W) {
    if (M == null)
      throw Error(
        "The argument must be a React element, but you passed " + M + "."
      );
    var I = C({}, M.props), te = M.key, ge = void 0;
    if (X != null)
      for (ce in X.ref !== void 0 && (ge = void 0), X.key !== void 0 && (te = "" + X.key), X)
        !J.call(X, ce) || ce === "key" || ce === "__self" || ce === "__source" || ce === "ref" && X.ref === void 0 || (I[ce] = X[ce]);
    var ce = arguments.length - 2;
    if (ce === 1) I.children = W;
    else if (1 < ce) {
      for (var fe = Array(ce), ve = 0; ve < ce; ve++)
        fe[ve] = arguments[ve + 2];
      I.children = fe;
    }
    return Q(M.type, te, void 0, void 0, ge, I);
  }, be.createContext = function(M) {
    return M = {
      $$typeof: d,
      _currentValue: M,
      _currentValue2: M,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, M.Provider = M, M.Consumer = {
      $$typeof: f,
      _context: M
    }, M;
  }, be.createElement = function(M, X, W) {
    var I, te = {}, ge = null;
    if (X != null)
      for (I in X.key !== void 0 && (ge = "" + X.key), X)
        J.call(X, I) && I !== "key" && I !== "__self" && I !== "__source" && (te[I] = X[I]);
    var ce = arguments.length - 2;
    if (ce === 1) te.children = W;
    else if (1 < ce) {
      for (var fe = Array(ce), ve = 0; ve < ce; ve++)
        fe[ve] = arguments[ve + 2];
      te.children = fe;
    }
    if (M && M.defaultProps)
      for (I in ce = M.defaultProps, ce)
        te[I] === void 0 && (te[I] = ce[I]);
    return Q(M, ge, void 0, void 0, null, te);
  }, be.createRef = function() {
    return { current: null };
  }, be.forwardRef = function(M) {
    return { $$typeof: p, render: M };
  }, be.isValidElement = ee, be.lazy = function(M) {
    return {
      $$typeof: y,
      _payload: { _status: -1, _result: M },
      _init: Z
    };
  }, be.memo = function(M, X) {
    return {
      $$typeof: h,
      type: M,
      compare: X === void 0 ? null : X
    };
  }, be.startTransition = function(M) {
    var X = Y.T, W = {};
    Y.T = W;
    try {
      var I = M(), te = Y.S;
      te !== null && te(W, I), typeof I == "object" && I !== null && typeof I.then == "function" && I.then(P, k);
    } catch (ge) {
      k(ge);
    } finally {
      Y.T = X;
    }
  }, be.unstable_useCacheRefresh = function() {
    return Y.H.useCacheRefresh();
  }, be.use = function(M) {
    return Y.H.use(M);
  }, be.useActionState = function(M, X, W) {
    return Y.H.useActionState(M, X, W);
  }, be.useCallback = function(M, X) {
    return Y.H.useCallback(M, X);
  }, be.useContext = function(M) {
    return Y.H.useContext(M);
  }, be.useDebugValue = function() {
  }, be.useDeferredValue = function(M, X) {
    return Y.H.useDeferredValue(M, X);
  }, be.useEffect = function(M, X, W) {
    var I = Y.H;
    if (typeof W == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return I.useEffect(M, X);
  }, be.useId = function() {
    return Y.H.useId();
  }, be.useImperativeHandle = function(M, X, W) {
    return Y.H.useImperativeHandle(M, X, W);
  }, be.useInsertionEffect = function(M, X) {
    return Y.H.useInsertionEffect(M, X);
  }, be.useLayoutEffect = function(M, X) {
    return Y.H.useLayoutEffect(M, X);
  }, be.useMemo = function(M, X) {
    return Y.H.useMemo(M, X);
  }, be.useOptimistic = function(M, X) {
    return Y.H.useOptimistic(M, X);
  }, be.useReducer = function(M, X, W) {
    return Y.H.useReducer(M, X, W);
  }, be.useRef = function(M) {
    return Y.H.useRef(M);
  }, be.useState = function(M) {
    return Y.H.useState(M);
  }, be.useSyncExternalStore = function(M, X, W) {
    return Y.H.useSyncExternalStore(
      M,
      X,
      W
    );
  }, be.useTransition = function() {
    return Y.H.useTransition();
  }, be.version = "19.1.0", be;
}
var cp;
function $s() {
  return cp || (cp = 1, ds.exports = eb()), ds.exports;
}
var w = $s();
const il = /* @__PURE__ */ Fp(w), $p = /* @__PURE__ */ P0({
  __proto__: null,
  default: il
}, [w]);
var ms = { exports: {} }, Xr = {}, hs = { exports: {} }, ps = {};
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
function tb() {
  return sp || (sp = 1, function(a) {
    function i(N, Z) {
      var k = N.length;
      N.push(Z);
      e: for (; 0 < k; ) {
        var P = k - 1 >>> 1, M = N[P];
        if (0 < s(M, Z))
          N[P] = Z, N[k] = M, k = P;
        else break e;
      }
    }
    function o(N) {
      return N.length === 0 ? null : N[0];
    }
    function u(N) {
      if (N.length === 0) return null;
      var Z = N[0], k = N.pop();
      if (k !== Z) {
        N[0] = k;
        e: for (var P = 0, M = N.length, X = M >>> 1; P < X; ) {
          var W = 2 * (P + 1) - 1, I = N[W], te = W + 1, ge = N[te];
          if (0 > s(I, k))
            te < M && 0 > s(ge, I) ? (N[P] = ge, N[te] = k, P = te) : (N[P] = I, N[W] = k, P = W);
          else if (te < M && 0 > s(ge, k))
            N[P] = ge, N[te] = k, P = te;
          else break e;
        }
      }
      return Z;
    }
    function s(N, Z) {
      var k = N.sortIndex - Z.sortIndex;
      return k !== 0 ? k : N.id - Z.id;
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
    var v = [], h = [], y = 1, b = null, x = 3, A = !1, C = !1, E = !1, O = !1, T = typeof setTimeout == "function" ? setTimeout : null, j = typeof clearTimeout == "function" ? clearTimeout : null, D = typeof setImmediate < "u" ? setImmediate : null;
    function L(N) {
      for (var Z = o(h); Z !== null; ) {
        if (Z.callback === null) u(h);
        else if (Z.startTime <= N)
          u(h), Z.sortIndex = Z.expirationTime, i(v, Z);
        else break;
        Z = o(h);
      }
    }
    function Y(N) {
      if (E = !1, L(N), !C)
        if (o(v) !== null)
          C = !0, J || (J = !0, oe());
        else {
          var Z = o(h);
          Z !== null && V(Y, Z.startTime - N);
        }
    }
    var J = !1, Q = -1, H = 5, ee = -1;
    function le() {
      return O ? !0 : !(a.unstable_now() - ee < H);
    }
    function ae() {
      if (O = !1, J) {
        var N = a.unstable_now();
        ee = N;
        var Z = !0;
        try {
          e: {
            C = !1, E && (E = !1, j(Q), Q = -1), A = !0;
            var k = x;
            try {
              t: {
                for (L(N), b = o(v); b !== null && !(b.expirationTime > N && le()); ) {
                  var P = b.callback;
                  if (typeof P == "function") {
                    b.callback = null, x = b.priorityLevel;
                    var M = P(
                      b.expirationTime <= N
                    );
                    if (N = a.unstable_now(), typeof M == "function") {
                      b.callback = M, L(N), Z = !0;
                      break t;
                    }
                    b === o(v) && u(v), L(N);
                  } else u(v);
                  b = o(v);
                }
                if (b !== null) Z = !0;
                else {
                  var X = o(h);
                  X !== null && V(
                    Y,
                    X.startTime - N
                  ), Z = !1;
                }
              }
              break e;
            } finally {
              b = null, x = k, A = !1;
            }
            Z = void 0;
          }
        } finally {
          Z ? oe() : J = !1;
        }
      }
    }
    var oe;
    if (typeof D == "function")
      oe = function() {
        D(ae);
      };
    else if (typeof MessageChannel < "u") {
      var me = new MessageChannel(), he = me.port2;
      me.port1.onmessage = ae, oe = function() {
        he.postMessage(null);
      };
    } else
      oe = function() {
        T(ae, 0);
      };
    function V(N, Z) {
      Q = T(function() {
        N(a.unstable_now());
      }, Z);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(N) {
      N.callback = null;
    }, a.unstable_forceFrameRate = function(N) {
      0 > N || 125 < N ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : H = 0 < N ? Math.floor(1e3 / N) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, a.unstable_next = function(N) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var Z = 3;
          break;
        default:
          Z = x;
      }
      var k = x;
      x = Z;
      try {
        return N();
      } finally {
        x = k;
      }
    }, a.unstable_requestPaint = function() {
      O = !0;
    }, a.unstable_runWithPriority = function(N, Z) {
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
        return Z();
      } finally {
        x = k;
      }
    }, a.unstable_scheduleCallback = function(N, Z, k) {
      var P = a.unstable_now();
      switch (typeof k == "object" && k !== null ? (k = k.delay, k = typeof k == "number" && 0 < k ? P + k : P) : k = P, N) {
        case 1:
          var M = -1;
          break;
        case 2:
          M = 250;
          break;
        case 5:
          M = 1073741823;
          break;
        case 4:
          M = 1e4;
          break;
        default:
          M = 5e3;
      }
      return M = k + M, N = {
        id: y++,
        callback: Z,
        priorityLevel: N,
        startTime: k,
        expirationTime: M,
        sortIndex: -1
      }, k > P ? (N.sortIndex = k, i(h, N), o(v) === null && N === o(h) && (E ? (j(Q), Q = -1) : E = !0, V(Y, k - P))) : (N.sortIndex = M, i(v, N), C || A || (C = !0, J || (J = !0, oe()))), N;
    }, a.unstable_shouldYield = le, a.unstable_wrapCallback = function(N) {
      var Z = x;
      return function() {
        var k = x;
        x = Z;
        try {
          return N.apply(this, arguments);
        } finally {
          x = k;
        }
      };
    };
  }(ps)), ps;
}
var fp;
function nb() {
  return fp || (fp = 1, hs.exports = tb()), hs.exports;
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
function lb() {
  if (dp) return mt;
  dp = 1;
  var a = $s();
  function i(v) {
    var h = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        h += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return "Minified React error #" + v + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var u = {
    d: {
      f: o,
      r: function() {
        throw Error(i(522));
      },
      D: o,
      C: o,
      L: o,
      m: o,
      X: o,
      S: o,
      M: o
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
  return mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u, mt.createPortal = function(v, h) {
    var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
      throw Error(i(299));
    return f(v, h, null, y);
  }, mt.flushSync = function(v) {
    var h = d.T, y = u.p;
    try {
      if (d.T = null, u.p = 2, v) return v();
    } finally {
      d.T = h, u.p = y, u.d.f();
    }
  }, mt.preconnect = function(v, h) {
    typeof v == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, u.d.C(v, h));
  }, mt.prefetchDNS = function(v) {
    typeof v == "string" && u.d.D(v);
  }, mt.preinit = function(v, h) {
    if (typeof v == "string" && h && typeof h.as == "string") {
      var y = h.as, b = p(y, h.crossOrigin), x = typeof h.integrity == "string" ? h.integrity : void 0, A = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
      y === "style" ? u.d.S(
        v,
        typeof h.precedence == "string" ? h.precedence : void 0,
        {
          crossOrigin: b,
          integrity: x,
          fetchPriority: A
        }
      ) : y === "script" && u.d.X(v, {
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
          u.d.M(v, {
            crossOrigin: y,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
            nonce: typeof h.nonce == "string" ? h.nonce : void 0
          });
        }
      } else h == null && u.d.M(v);
  }, mt.preload = function(v, h) {
    if (typeof v == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
      var y = h.as, b = p(y, h.crossOrigin);
      u.d.L(v, y, {
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
        u.d.m(v, {
          as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
          crossOrigin: y,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0
        });
      } else u.d.m(v);
  }, mt.requestFormReset = function(v) {
    u.d.r(v);
  }, mt.unstable_batchedUpdates = function(v, h) {
    return v(h);
  }, mt.useFormState = function(v, h, y) {
    return d.H.useFormState(v, h, y);
  }, mt.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, mt.version = "19.1.0", mt;
}
var mp;
function Pp() {
  if (mp) return vs.exports;
  mp = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return a(), vs.exports = lb(), vs.exports;
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
function ab() {
  if (hp) return Xr;
  hp = 1;
  var a = nb(), i = $s(), o = Pp();
  function u(e) {
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
      throw Error(u(188));
  }
  function v(e) {
    var t = e.alternate;
    if (!t) {
      if (t = f(e), t === null) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var r = n.return;
      if (r === null) break;
      var c = r.alternate;
      if (c === null) {
        if (l = r.return, l !== null) {
          n = l;
          continue;
        }
        break;
      }
      if (r.child === c.child) {
        for (c = r.child; c; ) {
          if (c === n) return p(r), e;
          if (c === l) return p(r), t;
          c = c.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== l.return) n = r, l = c;
      else {
        for (var m = !1, g = r.child; g; ) {
          if (g === n) {
            m = !0, n = r, l = c;
            break;
          }
          if (g === l) {
            m = !0, l = r, n = c;
            break;
          }
          g = g.sibling;
        }
        if (!m) {
          for (g = c.child; g; ) {
            if (g === n) {
              m = !0, n = c, l = r;
              break;
            }
            if (g === l) {
              m = !0, l = c, n = r;
              break;
            }
            g = g.sibling;
          }
          if (!m) throw Error(u(189));
        }
      }
      if (n.alternate !== l) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
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
  var y = Object.assign, b = Symbol.for("react.element"), x = Symbol.for("react.transitional.element"), A = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), j = Symbol.for("react.consumer"), D = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), J = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), ee = Symbol.for("react.activity"), le = Symbol.for("react.memo_cache_sentinel"), ae = Symbol.iterator;
  function oe(e) {
    return e === null || typeof e != "object" ? null : (e = ae && e[ae] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var me = Symbol.for("react.client.reference");
  function he(e) {
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
      case Y:
        return "Suspense";
      case J:
        return "SuspenseList";
      case ee:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case A:
          return "Portal";
        case D:
          return (e.displayName || "Context") + ".Provider";
        case j:
          return (e._context.displayName || "Context") + ".Consumer";
        case L:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Q:
          return t = e.displayName || null, t !== null ? t : he(e.type) || "Memo";
        case H:
          t = e._payload, e = e._init;
          try {
            return he(e(t));
          } catch {
          }
      }
    return null;
  }
  var V = Array.isArray, N = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, P = [], M = -1;
  function X(e) {
    return { current: e };
  }
  function W(e) {
    0 > M || (e.current = P[M], P[M] = null, M--);
  }
  function I(e, t) {
    M++, P[M] = e.current, e.current = t;
  }
  var te = X(null), ge = X(null), ce = X(null), fe = X(null);
  function ve(e, t) {
    switch (I(ce, t), I(ge, e), I(te, null), t.nodeType) {
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
    W(te), I(te, e);
  }
  function Me() {
    W(te), W(ge), W(ce);
  }
  function Be(e) {
    e.memoizedState !== null && I(fe, e);
    var t = te.current, n = Uh(t, e.type);
    t !== n && (I(ge, e), I(te, n));
  }
  function Re(e) {
    ge.current === e && (W(te), W(ge)), fe.current === e && (W(fe), Hr._currentValue = k);
  }
  var ne = Object.prototype.hasOwnProperty, Ce = a.unstable_scheduleCallback, He = a.unstable_cancelCallback, Pe = a.unstable_shouldYield, gt = a.unstable_requestPaint, Xe = a.unstable_now, Vt = a.unstable_getCurrentPriorityLevel, ct = a.unstable_ImmediatePriority, $t = a.unstable_UserBlockingPriority, Pt = a.unstable_NormalPriority, Va = a.unstable_LowPriority, ql = a.unstable_IdlePriority, fi = a.log, di = a.unstable_setDisableYieldValue, dl = null, st = null;
  function It(e) {
    if (typeof fi == "function" && di(e), st && typeof st.setStrictMode == "function")
      try {
        st.setStrictMode(dl, e);
      } catch {
      }
  }
  var rt = Math.clz32 ? Math.clz32 : Qa, zn = Math.log, Xa = Math.LN2;
  function Qa(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (zn(e) / Xa | 0) | 0;
  }
  var cn = 256, Yl = 4194304;
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
    var r = 0, c = e.suspendedLanes, m = e.pingedLanes;
    e = e.warmLanes;
    var g = l & 134217727;
    return g !== 0 ? (l = g & ~c, l !== 0 ? r = sn(l) : (m &= g, m !== 0 ? r = sn(m) : n || (n = g & ~e, n !== 0 && (r = sn(n))))) : (g = l & ~c, g !== 0 ? r = sn(g) : m !== 0 ? r = sn(m) : n || (n = l & ~e, n !== 0 && (r = sn(n)))), r === 0 ? 0 : t !== 0 && t !== r && (t & c) === 0 && (c = r & -r, n = t & -t, c >= n || c === 32 && (n & 4194048) !== 0) ? t : r;
  }
  function ml(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function to(e, t) {
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
  function mi() {
    var e = Yl;
    return Yl <<= 1, (Yl & 62914560) === 0 && (Yl = 4194304), e;
  }
  function Xl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function jn(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function hi(e, t, n, l, r, c) {
    var m = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var g = e.entanglements, R = e.expirationTimes, B = e.hiddenUpdates;
    for (n = m & ~n; 0 < n; ) {
      var K = 31 - rt(n), $ = 1 << K;
      g[K] = 0, R[K] = -1;
      var G = B[K];
      if (G !== null)
        for (B[K] = null, K = 0; K < G.length; K++) {
          var q = G[K];
          q !== null && (q.lane &= -536870913);
        }
      n &= ~$;
    }
    l !== 0 && pi(e, l, 0), c !== 0 && r === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(m & ~t));
  }
  function pi(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - rt(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | n & 4194090;
  }
  function Ka(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var l = 31 - rt(n), r = 1 << l;
      r & t | e[l] & t && (e[l] |= t), n &= ~r;
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
    var e = Z.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : ep(e.type));
  }
  function Gg(e, t) {
    var n = Z.p;
    try {
      return Z.p = e, t();
    } finally {
      Z.p = n;
    }
  }
  var Un = Math.random().toString(36).slice(2), ft = "__reactFiber$" + Un, yt = "__reactProps$" + Un, Zl = "__reactContainer$" + Un, no = "__reactEvents$" + Un, qg = "__reactListeners$" + Un, Yg = "__reactHandles$" + Un, Ef = "__reactResources$" + Un, Fa = "__reactMarker$" + Un;
  function lo(e) {
    delete e[ft], delete e[yt], delete e[no], delete e[qg], delete e[Yg];
  }
  function Kl(e) {
    var t = e[ft];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Zl] || n[ft]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = kh(e); e !== null; ) {
            if (n = e[ft]) return n;
            e = kh(e);
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
  function $a(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(u(33));
  }
  function Fl(e) {
    var t = e[Ef];
    return t || (t = e[Ef] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function tt(e) {
    e[Fa] = !0;
  }
  var wf = /* @__PURE__ */ new Set(), Af = {};
  function hl(e, t) {
    $l(e, t), $l(e + "Capture", t);
  }
  function $l(e, t) {
    for (Af[e] = t, e = 0; e < t.length; e++)
      wf.add(t[e]);
  }
  var Vg = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Mf = {}, Cf = {};
  function Xg(e) {
    return ne.call(Cf, e) ? !0 : ne.call(Mf, e) ? !1 : Vg.test(e) ? Cf[e] = !0 : (Mf[e] = !0, !1);
  }
  function vi(e, t, n) {
    if (Xg(t))
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
  function gi(e, t, n) {
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
  var ao, Rf;
  function Pl(e) {
    if (ao === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ao = t && t[1] || "", Rf = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ao + e + Rf;
  }
  var ro = !1;
  function io(e, t) {
    if (!e || ro) return "";
    ro = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var $ = function() {
                throw Error();
              };
              if (Object.defineProperty($.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct($, []);
                } catch (q) {
                  var G = q;
                }
                Reflect.construct(e, [], $);
              } else {
                try {
                  $.call();
                } catch (q) {
                  G = q;
                }
                e.call($.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (q) {
                G = q;
              }
              ($ = e()) && typeof $.catch == "function" && $.catch(function() {
              });
            }
          } catch (q) {
            if (q && G && typeof q.stack == "string")
              return [q.stack, G.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var r = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      r && r.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var c = l.DetermineComponentFrameRoot(), m = c[0], g = c[1];
      if (m && g) {
        var R = m.split(`
`), B = g.split(`
`);
        for (r = l = 0; l < R.length && !R[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; r < B.length && !B[r].includes(
          "DetermineComponentFrameRoot"
        ); )
          r++;
        if (l === R.length || r === B.length)
          for (l = R.length - 1, r = B.length - 1; 1 <= l && 0 <= r && R[l] !== B[r]; )
            r--;
        for (; 1 <= l && 0 <= r; l--, r--)
          if (R[l] !== B[r]) {
            if (l !== 1 || r !== 1)
              do
                if (l--, r--, 0 > r || R[l] !== B[r]) {
                  var K = `
` + R[l].replace(" at new ", " at ");
                  return e.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", e.displayName)), K;
                }
              while (1 <= l && 0 <= r);
            break;
          }
      }
    } finally {
      ro = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? Pl(n) : "";
  }
  function Qg(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Pl(e.type);
      case 16:
        return Pl("Lazy");
      case 13:
        return Pl("Suspense");
      case 19:
        return Pl("SuspenseList");
      case 0:
      case 15:
        return io(e.type, !1);
      case 11:
        return io(e.type.render, !1);
      case 1:
        return io(e.type, !0);
      case 31:
        return Pl("Activity");
      default:
        return "";
    }
  }
  function Of(e) {
    try {
      var t = "";
      do
        t += Qg(e), e = e.return;
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
  function Zg(e) {
    var t = Tf(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    ), l = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var r = n.get, c = n.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return r.call(this);
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
  function yi(e) {
    e._valueTracker || (e._valueTracker = Zg(e));
  }
  function _f(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), l = "";
    return e && (l = Tf(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== n ? (t.setValue(e), !0) : !1;
  }
  function bi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Kg = /[\n"\\]/g;
  function jt(e) {
    return e.replace(
      Kg,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function uo(e, t, n, l, r, c, m, g) {
    e.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.type = m : e.removeAttribute("type"), t != null ? m === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + zt(t)) : e.value !== "" + zt(t) && (e.value = "" + zt(t)) : m !== "submit" && m !== "reset" || e.removeAttribute("value"), t != null ? oo(e, m, zt(t)) : n != null ? oo(e, m, zt(n)) : l != null && e.removeAttribute("value"), r == null && c != null && (e.defaultChecked = !!c), r != null && (e.checked = r && typeof r != "function" && typeof r != "symbol"), g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? e.name = "" + zt(g) : e.removeAttribute("name");
  }
  function Nf(e, t, n, l, r, c, m, g) {
    if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.type = c), t != null || n != null) {
      if (!(c !== "submit" && c !== "reset" || t != null))
        return;
      n = n != null ? "" + zt(n) : "", t = t != null ? "" + zt(t) : n, g || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? r, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = g ? e.checked : !!l, e.defaultChecked = !!l, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (e.name = m);
  }
  function oo(e, t, n) {
    t === "number" && bi(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function Il(e, t, n, l) {
    if (e = e.options, t) {
      t = {};
      for (var r = 0; r < n.length; r++)
        t["$" + n[r]] = !0;
      for (n = 0; n < e.length; n++)
        r = t.hasOwnProperty("$" + e[n].value), e[n].selected !== r && (e[n].selected = r), r && l && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + zt(n), t = null, r = 0; r < e.length; r++) {
        if (e[r].value === n) {
          e[r].selected = !0, l && (e[r].defaultSelected = !0);
          return;
        }
        t !== null || e[r].disabled || (t = e[r]);
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
        if (n != null) throw Error(u(92));
        if (V(l)) {
          if (1 < l.length) throw Error(u(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), t = n;
    }
    n = zt(t), e.defaultValue = n, l = e.textContent, l === n && l !== "" && l !== null && (e.value = l);
  }
  function Wl(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Jg = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function jf(e, t, n) {
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Jg.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function Uf(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(u(62));
    if (e = e.style, n != null) {
      for (var l in n)
        !n.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var r in t)
        l = t[r], t.hasOwnProperty(r) && n[r] !== l && jf(e, r, l);
    } else
      for (var c in t)
        t.hasOwnProperty(c) && jf(e, c, t[c]);
  }
  function co(e) {
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
  ]), $g = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function xi(e) {
    return $g.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var so = null;
  function fo(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var ea = null, ta = null;
  function Lf(e) {
    var t = Jl(e);
    if (t && (e = t.stateNode)) {
      var n = e[yt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (uo(
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
                var r = l[yt] || null;
                if (!r) throw Error(u(90));
                uo(
                  l,
                  r.value,
                  r.defaultValue,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name
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
          t = n.value, t != null && Il(e, !!n.multiple, t, !1);
      }
    }
  }
  var mo = !1;
  function Bf(e, t, n) {
    if (mo) return e(t, n);
    mo = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (mo = !1, (ea !== null || ta !== null) && (ru(), ea && (t = ea, e = ta, ta = ea = null, Lf(t), e)))
        for (t = 0; t < e.length; t++) Lf(e[t]);
    }
  }
  function Pa(e, t) {
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
        u(231, t, typeof n)
      );
    return n;
  }
  var dn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ho = !1;
  if (dn)
    try {
      var Ia = {};
      Object.defineProperty(Ia, "passive", {
        get: function() {
          ho = !0;
        }
      }), window.addEventListener("test", Ia, Ia), window.removeEventListener("test", Ia, Ia);
    } catch {
      ho = !1;
    }
  var Ln = null, po = null, Si = null;
  function Hf() {
    if (Si) return Si;
    var e, t = po, n = t.length, l, r = "value" in Ln ? Ln.value : Ln.textContent, c = r.length;
    for (e = 0; e < n && t[e] === r[e]; e++) ;
    var m = n - e;
    for (l = 1; l <= m && t[n - l] === r[c - l]; l++) ;
    return Si = r.slice(e, 1 < l ? 1 - l : void 0);
  }
  function Ei(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function wi() {
    return !0;
  }
  function kf() {
    return !1;
  }
  function bt(e) {
    function t(n, l, r, c, m) {
      this._reactName = n, this._targetInst = r, this.type = l, this.nativeEvent = c, this.target = m, this.currentTarget = null;
      for (var g in e)
        e.hasOwnProperty(g) && (n = e[g], this[g] = n ? n(c) : c[g]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? wi : kf, this.isPropagationStopped = kf, this;
    }
    return y(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = wi);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = wi);
      },
      persist: function() {
      },
      isPersistent: wi
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
  }, Ai = bt(pl), Wa = y({}, pl, { view: 0, detail: 0 }), Pg = bt(Wa), vo, go, er, Mi = y({}, Wa, {
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
    getModifierState: bo,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== er && (er && e.type === "mousemove" ? (vo = e.screenX - er.screenX, go = e.screenY - er.screenY) : go = vo = 0, er = e), vo);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : go;
    }
  }), Gf = bt(Mi), Ig = y({}, Mi, { dataTransfer: 0 }), Wg = bt(Ig), ey = y({}, Wa, { relatedTarget: 0 }), yo = bt(ey), ty = y({}, pl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ny = bt(ty), ly = y({}, pl, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), ay = bt(ly), ry = y({}, pl, { data: 0 }), qf = bt(ry), iy = {
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
  }, uy = {
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
  }, oy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function cy(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = oy[e]) ? !!t[e] : !1;
  }
  function bo() {
    return cy;
  }
  var sy = y({}, Wa, {
    key: function(e) {
      if (e.key) {
        var t = iy[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Ei(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? uy[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: bo,
    charCode: function(e) {
      return e.type === "keypress" ? Ei(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Ei(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), fy = bt(sy), dy = y({}, Mi, {
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
  }), Yf = bt(dy), my = y({}, Wa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: bo
  }), hy = bt(my), py = y({}, pl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), vy = bt(py), gy = y({}, Mi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), yy = bt(gy), by = y({}, pl, {
    newState: 0,
    oldState: 0
  }), xy = bt(by), Sy = [9, 13, 27, 32], xo = dn && "CompositionEvent" in window, tr = null;
  dn && "documentMode" in document && (tr = document.documentMode);
  var Ey = dn && "TextEvent" in window && !tr, Vf = dn && (!xo || tr && 8 < tr && 11 >= tr), Xf = " ", Qf = !1;
  function Zf(e, t) {
    switch (e) {
      case "keyup":
        return Sy.indexOf(t.keyCode) !== -1;
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
  function wy(e, t) {
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
  function Ay(e, t) {
    if (na)
      return e === "compositionend" || !xo && Zf(e, t) ? (e = Hf(), Si = po = Ln = null, na = !1, e) : null;
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
  function Ff(e, t, n, l) {
    ea ? ta ? ta.push(l) : ta = [l] : ea = l, t = fu(t, "onChange"), 0 < t.length && (n = new Ai(
      "onChange",
      "change",
      null,
      n,
      l
    ), e.push({ event: n, listeners: t }));
  }
  var nr = null, lr = null;
  function Cy(e) {
    Th(e, 0);
  }
  function Ci(e) {
    var t = $a(e);
    if (_f(t)) return e;
  }
  function $f(e, t) {
    if (e === "change") return t;
  }
  var Pf = !1;
  if (dn) {
    var So;
    if (dn) {
      var Eo = "oninput" in document;
      if (!Eo) {
        var If = document.createElement("div");
        If.setAttribute("oninput", "return;"), Eo = typeof If.oninput == "function";
      }
      So = Eo;
    } else So = !1;
    Pf = So && (!document.documentMode || 9 < document.documentMode);
  }
  function Wf() {
    nr && (nr.detachEvent("onpropertychange", ed), lr = nr = null);
  }
  function ed(e) {
    if (e.propertyName === "value" && Ci(lr)) {
      var t = [];
      Ff(
        t,
        lr,
        e,
        fo(e)
      ), Bf(Cy, t);
    }
  }
  function Ry(e, t, n) {
    e === "focusin" ? (Wf(), nr = t, lr = n, nr.attachEvent("onpropertychange", ed)) : e === "focusout" && Wf();
  }
  function Oy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ci(lr);
  }
  function Ty(e, t) {
    if (e === "click") return Ci(t);
  }
  function _y(e, t) {
    if (e === "input" || e === "change")
      return Ci(t);
  }
  function Ny(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var At = typeof Object.is == "function" ? Object.is : Ny;
  function ar(e, t) {
    if (At(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var r = n[l];
      if (!ne.call(t, r) || !At(e[r], t[r]))
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
    for (var t = bi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = bi(e.document);
    }
    return t;
  }
  function wo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Dy = dn && "documentMode" in document && 11 >= document.documentMode, la = null, Ao = null, rr = null, Mo = !1;
  function rd(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Mo || la == null || la !== bi(l) || (l = la, "selectionStart" in l && wo(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), rr && ar(rr, l) || (rr = l, l = fu(Ao, "onSelect"), 0 < l.length && (t = new Ai(
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
  }, Co = {}, id = {};
  dn && (id = document.createElement("div").style, "AnimationEvent" in window || (delete aa.animationend.animation, delete aa.animationiteration.animation, delete aa.animationstart.animation), "TransitionEvent" in window || delete aa.transitionend.transition);
  function gl(e) {
    if (Co[e]) return Co[e];
    if (!aa[e]) return e;
    var t = aa[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in id)
        return Co[e] = t[n];
    return e;
  }
  var ud = gl("animationend"), od = gl("animationiteration"), cd = gl("animationstart"), zy = gl("transitionrun"), jy = gl("transitionstart"), Uy = gl("transitioncancel"), sd = gl("transitionend"), fd = /* @__PURE__ */ new Map(), Ro = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Ro.push("scrollEnd");
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
  var Lt = [], ra = 0, Oo = 0;
  function Ri() {
    for (var e = ra, t = Oo = ra = 0; t < e; ) {
      var n = Lt[t];
      Lt[t++] = null;
      var l = Lt[t];
      Lt[t++] = null;
      var r = Lt[t];
      Lt[t++] = null;
      var c = Lt[t];
      if (Lt[t++] = null, l !== null && r !== null) {
        var m = l.pending;
        m === null ? r.next = r : (r.next = m.next, m.next = r), l.pending = r;
      }
      c !== 0 && md(n, r, c);
    }
  }
  function Oi(e, t, n, l) {
    Lt[ra++] = e, Lt[ra++] = t, Lt[ra++] = n, Lt[ra++] = l, Oo |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function To(e, t, n, l) {
    return Oi(e, t, n, l), Ti(e);
  }
  function ia(e, t) {
    return Oi(e, null, null, t), Ti(e);
  }
  function md(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var r = !1, c = e.return; c !== null; )
      c.childLanes |= n, l = c.alternate, l !== null && (l.childLanes |= n), c.tag === 22 && (e = c.stateNode, e === null || e._visibility & 1 || (r = !0)), e = c, c = c.return;
    return e.tag === 3 ? (c = e.stateNode, r && t !== null && (r = 31 - rt(n), e = c.hiddenUpdates, l = e[r], l === null ? e[r] = [t] : l.push(t), t.lane = n | 536870912), c) : null;
  }
  function Ti(e) {
    if (50 < _r)
      throw _r = 0, Uc = null, Error(u(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ua = {};
  function Ly(e, t, n, l) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Mt(e, t, n, l) {
    return new Ly(e, t, n, l);
  }
  function _o(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function mn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Mt(
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
  function _i(e, t, n, l, r, c) {
    var m = 0;
    if (l = e, typeof e == "function") _o(e) && (m = 1);
    else if (typeof e == "string")
      m = H0(
        e,
        n,
        te.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case ee:
          return e = Mt(31, n, t, r), e.elementType = ee, e.lanes = c, e;
        case C:
          return yl(n.children, r, c, t);
        case E:
          m = 8, r |= 24;
          break;
        case O:
          return e = Mt(12, n, t, r | 2), e.elementType = O, e.lanes = c, e;
        case Y:
          return e = Mt(13, n, t, r), e.elementType = Y, e.lanes = c, e;
        case J:
          return e = Mt(19, n, t, r), e.elementType = J, e.lanes = c, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case T:
              case D:
                m = 10;
                break e;
              case j:
                m = 9;
                break e;
              case L:
                m = 11;
                break e;
              case Q:
                m = 14;
                break e;
              case H:
                m = 16, l = null;
                break e;
            }
          m = 29, n = Error(
            u(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = Mt(m, n, t, r), t.elementType = e, t.type = l, t.lanes = c, t;
  }
  function yl(e, t, n, l) {
    return e = Mt(7, e, l, t), e.lanes = n, e;
  }
  function No(e, t, n) {
    return e = Mt(6, e, null, t), e.lanes = n, e;
  }
  function Do(e, t, n) {
    return t = Mt(
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
  var oa = [], ca = 0, Ni = null, Di = 0, Bt = [], Ht = 0, bl = null, hn = 1, pn = "";
  function xl(e, t) {
    oa[ca++] = Di, oa[ca++] = Ni, Ni = e, Di = t;
  }
  function pd(e, t, n) {
    Bt[Ht++] = hn, Bt[Ht++] = pn, Bt[Ht++] = bl, bl = e;
    var l = hn;
    e = pn;
    var r = 32 - rt(l) - 1;
    l &= ~(1 << r), n += 1;
    var c = 32 - rt(t) + r;
    if (30 < c) {
      var m = r - r % 5;
      c = (l & (1 << m) - 1).toString(32), l >>= m, r -= m, hn = 1 << 32 - rt(t) + r | n << r | l, pn = c + e;
    } else
      hn = 1 << c | n << r | l, pn = e;
  }
  function zo(e) {
    e.return !== null && (xl(e, 1), pd(e, 1, 0));
  }
  function jo(e) {
    for (; e === Ni; )
      Ni = oa[--ca], oa[ca] = null, Di = oa[--ca], oa[ca] = null;
    for (; e === bl; )
      bl = Bt[--Ht], Bt[Ht] = null, pn = Bt[--Ht], Bt[Ht] = null, hn = Bt[--Ht], Bt[Ht] = null;
  }
  var ht = null, Qe = null, Ne = !1, Sl = null, Wt = !1, Uo = Error(u(519));
  function El(e) {
    var t = Error(u(418, ""));
    throw or(Ut(t, e)), Uo;
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
        for (n = 0; n < Dr.length; n++)
          Ae(Dr[n], t);
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
        ), yi(t);
        break;
      case "select":
        Ae("invalid", t);
        break;
      case "textarea":
        Ae("invalid", t), zf(t, l.value, l.defaultValue, l.children), yi(t);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || l.suppressHydrationWarning === !0 || zh(t.textContent, n) ? (l.popover != null && (Ae("beforetoggle", t), Ae("toggle", t)), l.onScroll != null && Ae("scroll", t), l.onScrollEnd != null && Ae("scrollend", t), l.onClick != null && (t.onclick = du), t = !0) : t = !1, t || El(e);
  }
  function gd(e) {
    for (ht = e.return; ht; )
      switch (ht.tag) {
        case 5:
        case 13:
          Wt = !1;
          return;
        case 27:
        case 3:
          Wt = !0;
          return;
        default:
          ht = ht.return;
      }
  }
  function ir(e) {
    if (e !== ht) return !1;
    if (!Ne) return gd(e), Ne = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Pc(e.type, e.memoizedProps)), n = !n), n && Qe && El(e), gd(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
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
      t === 27 ? (t = Qe, In(e.type) ? (e = ts, ts = null, Qe = e) : Qe = t) : Qe = ht ? Zt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ur() {
    Qe = ht = null, Ne = !1;
  }
  function yd() {
    var e = Sl;
    return e !== null && (Et === null ? Et = e : Et.push.apply(
      Et,
      e
    ), Sl = null), e;
  }
  function or(e) {
    Sl === null ? Sl = [e] : Sl.push(e);
  }
  var Lo = X(null), wl = null, vn = null;
  function Bn(e, t, n) {
    I(Lo, t._currentValue), t._currentValue = n;
  }
  function gn(e) {
    e._currentValue = Lo.current, W(Lo);
  }
  function Bo(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Ho(e, t, n, l) {
    var r = e.child;
    for (r !== null && (r.return = e); r !== null; ) {
      var c = r.dependencies;
      if (c !== null) {
        var m = r.child;
        c = c.firstContext;
        e: for (; c !== null; ) {
          var g = c;
          c = r;
          for (var R = 0; R < t.length; R++)
            if (g.context === t[R]) {
              c.lanes |= n, g = c.alternate, g !== null && (g.lanes |= n), Bo(
                c.return,
                n,
                e
              ), l || (m = null);
              break e;
            }
          c = g.next;
        }
      } else if (r.tag === 18) {
        if (m = r.return, m === null) throw Error(u(341));
        m.lanes |= n, c = m.alternate, c !== null && (c.lanes |= n), Bo(m, n, e), m = null;
      } else m = r.child;
      if (m !== null) m.return = r;
      else
        for (m = r; m !== null; ) {
          if (m === e) {
            m = null;
            break;
          }
          if (r = m.sibling, r !== null) {
            r.return = m.return, m = r;
            break;
          }
          m = m.return;
        }
      r = m;
    }
  }
  function cr(e, t, n, l) {
    e = null;
    for (var r = t, c = !1; r !== null; ) {
      if (!c) {
        if ((r.flags & 524288) !== 0) c = !0;
        else if ((r.flags & 262144) !== 0) break;
      }
      if (r.tag === 10) {
        var m = r.alternate;
        if (m === null) throw Error(u(387));
        if (m = m.memoizedProps, m !== null) {
          var g = r.type;
          At(r.pendingProps.value, m.value) || (e !== null ? e.push(g) : e = [g]);
        }
      } else if (r === fe.current) {
        if (m = r.alternate, m === null) throw Error(u(387));
        m.memoizedState.memoizedState !== r.memoizedState.memoizedState && (e !== null ? e.push(Hr) : e = [Hr]);
      }
      r = r.return;
    }
    e !== null && Ho(
      t,
      e,
      n,
      l
    ), t.flags |= 262144;
  }
  function zi(e) {
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
  function ji(e, t) {
    return wl === null && Al(e), bd(e, t);
  }
  function bd(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, vn === null) {
      if (e === null) throw Error(u(308));
      vn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else vn = vn.next = t;
    return n;
  }
  var By = typeof AbortController < "u" ? AbortController : function() {
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
  }, Hy = a.unstable_scheduleCallback, ky = a.unstable_NormalPriority, Ie = {
    $$typeof: D,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ko() {
    return {
      controller: new By(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function sr(e) {
    e.refCount--, e.refCount === 0 && Hy(ky, function() {
      e.controller.abort();
    });
  }
  var fr = null, Go = 0, sa = 0, fa = null;
  function Gy(e, t) {
    if (fr === null) {
      var n = fr = [];
      Go = 0, sa = Yc(), fa = {
        status: "pending",
        value: void 0,
        then: function(l) {
          n.push(l);
        }
      };
    }
    return Go++, t.then(xd, xd), t;
  }
  function xd() {
    if (--Go === 0 && fr !== null) {
      fa !== null && (fa.status = "fulfilled");
      var e = fr;
      fr = null, sa = 0, fa = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function qy(e, t) {
    var n = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(r) {
        n.push(r);
      }
    };
    return e.then(
      function() {
        l.status = "fulfilled", l.value = t;
        for (var r = 0; r < n.length; r++) (0, n[r])(t);
      },
      function(r) {
        for (l.status = "rejected", l.reason = r, r = 0; r < n.length; r++)
          (0, n[r])(void 0);
      }
    ), l;
  }
  var Sd = N.S;
  N.S = function(e, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && Gy(e, t), Sd !== null && Sd(e, t);
  };
  var Ml = X(null);
  function qo() {
    var e = Ml.current;
    return e !== null ? e : Ge.pooledCache;
  }
  function Ui(e, t) {
    t === null ? I(Ml, Ml.current) : I(Ml, t.pool);
  }
  function Ed() {
    var e = qo();
    return e === null ? null : { parent: Ie._currentValue, pool: e };
  }
  var dr = Error(u(460)), wd = Error(u(474)), Li = Error(u(542)), Yo = { then: function() {
  } };
  function Ad(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Bi() {
  }
  function Md(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Bi, Bi), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Rd(e), e;
      default:
        if (typeof t.status == "string") t.then(Bi, Bi);
        else {
          if (e = Ge, e !== null && 100 < e.shellSuspendCounter)
            throw Error(u(482));
          e = t, e.status = "pending", e.then(
            function(l) {
              if (t.status === "pending") {
                var r = t;
                r.status = "fulfilled", r.value = l;
              }
            },
            function(l) {
              if (t.status === "pending") {
                var r = t;
                r.status = "rejected", r.reason = l;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Rd(e), e;
        }
        throw mr = t, dr;
    }
  }
  var mr = null;
  function Cd() {
    if (mr === null) throw Error(u(459));
    var e = mr;
    return mr = null, e;
  }
  function Rd(e) {
    if (e === dr || e === Li)
      throw Error(u(483));
  }
  var Hn = !1;
  function Vo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Xo(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function kn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Gn(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (De & 2) !== 0) {
      var r = l.pending;
      return r === null ? t.next = t : (t.next = r.next, r.next = t), l.pending = t, t = Ti(e), md(e, null, n), t;
    }
    return Oi(e, l, t, n), Ti(e);
  }
  function hr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, Ka(e, n);
    }
  }
  function Qo(e, t) {
    var n = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, n === l)) {
      var r = null, c = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var m = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          c === null ? r = c = m : c = c.next = m, n = n.next;
        } while (n !== null);
        c === null ? r = c = t : c = c.next = t;
      } else r = c = t;
      n = {
        baseState: l.baseState,
        firstBaseUpdate: r,
        lastBaseUpdate: c,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var Zo = !1;
  function pr() {
    if (Zo) {
      var e = fa;
      if (e !== null) throw e;
    }
  }
  function vr(e, t, n, l) {
    Zo = !1;
    var r = e.updateQueue;
    Hn = !1;
    var c = r.firstBaseUpdate, m = r.lastBaseUpdate, g = r.shared.pending;
    if (g !== null) {
      r.shared.pending = null;
      var R = g, B = R.next;
      R.next = null, m === null ? c = B : m.next = B, m = R;
      var K = e.alternate;
      K !== null && (K = K.updateQueue, g = K.lastBaseUpdate, g !== m && (g === null ? K.firstBaseUpdate = B : g.next = B, K.lastBaseUpdate = R));
    }
    if (c !== null) {
      var $ = r.baseState;
      m = 0, K = B = R = null, g = c;
      do {
        var G = g.lane & -536870913, q = G !== g.lane;
        if (q ? (Oe & G) === G : (l & G) === G) {
          G !== 0 && G === sa && (Zo = !0), K !== null && (K = K.next = {
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: null,
            next: null
          });
          e: {
            var ye = e, de = g;
            G = t;
            var Le = n;
            switch (de.tag) {
              case 1:
                if (ye = de.payload, typeof ye == "function") {
                  $ = ye.call(Le, $, G);
                  break e;
                }
                $ = ye;
                break e;
              case 3:
                ye.flags = ye.flags & -65537 | 128;
              case 0:
                if (ye = de.payload, G = typeof ye == "function" ? ye.call(Le, $, G) : ye, G == null) break e;
                $ = y({}, $, G);
                break e;
              case 2:
                Hn = !0;
            }
          }
          G = g.callback, G !== null && (e.flags |= 64, q && (e.flags |= 8192), q = r.callbacks, q === null ? r.callbacks = [G] : q.push(G));
        } else
          q = {
            lane: G,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          }, K === null ? (B = K = q, R = $) : K = K.next = q, m |= G;
        if (g = g.next, g === null) {
          if (g = r.shared.pending, g === null)
            break;
          q = g, g = q.next, q.next = null, r.lastBaseUpdate = q, r.shared.pending = null;
        }
      } while (!0);
      K === null && (R = $), r.baseState = R, r.firstBaseUpdate = B, r.lastBaseUpdate = K, c === null && (r.shared.lanes = 0), Jn |= m, e.lanes = m, e.memoizedState = $;
    }
  }
  function Od(e, t) {
    if (typeof e != "function")
      throw Error(u(191, e));
    e.call(t);
  }
  function Td(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        Od(n[e], t);
  }
  var da = X(null), Hi = X(0);
  function _d(e, t) {
    e = An, I(Hi, e), I(da, t), An = e | t.baseLanes;
  }
  function Ko() {
    I(Hi, An), I(da, da.current);
  }
  function Jo() {
    An = Hi.current, W(da), W(Hi);
  }
  var qn = 0, xe = null, je = null, Fe = null, ki = !1, ma = !1, Cl = !1, Gi = 0, gr = 0, ha = null, Yy = 0;
  function Ke() {
    throw Error(u(321));
  }
  function Fo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!At(e[n], t[n])) return !1;
    return !0;
  }
  function $o(e, t, n, l, r, c) {
    return qn = c, xe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, N.H = e === null || e.memoizedState === null ? mm : hm, Cl = !1, c = n(l, r), Cl = !1, ma && (c = Dd(
      t,
      n,
      l,
      r
    )), Nd(e), c;
  }
  function Nd(e) {
    N.H = Zi;
    var t = je !== null && je.next !== null;
    if (qn = 0, Fe = je = xe = null, ki = !1, gr = 0, ha = null, t) throw Error(u(300));
    e === null || nt || (e = e.dependencies, e !== null && zi(e) && (nt = !0));
  }
  function Dd(e, t, n, l) {
    xe = e;
    var r = 0;
    do {
      if (ma && (ha = null), gr = 0, ma = !1, 25 <= r) throw Error(u(301));
      if (r += 1, Fe = je = null, e.updateQueue != null) {
        var c = e.updateQueue;
        c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
      }
      N.H = Fy, c = t(n, l);
    } while (ma);
    return c;
  }
  function Vy() {
    var e = N.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? yr(t) : t, e = e.useState()[0], (je !== null ? je.memoizedState : null) !== e && (xe.flags |= 1024), t;
  }
  function Po() {
    var e = Gi !== 0;
    return Gi = 0, e;
  }
  function Io(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Wo(e) {
    if (ki) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      ki = !1;
    }
    qn = 0, Fe = je = xe = null, ma = !1, gr = Gi = 0, ha = null;
  }
  function xt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Fe === null ? xe.memoizedState = Fe = e : Fe = Fe.next = e, Fe;
  }
  function $e() {
    if (je === null) {
      var e = xe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = je.next;
    var t = Fe === null ? xe.memoizedState : Fe.next;
    if (t !== null)
      Fe = t, je = e;
    else {
      if (e === null)
        throw xe.alternate === null ? Error(u(467)) : Error(u(310));
      je = e, e = {
        memoizedState: je.memoizedState,
        baseState: je.baseState,
        baseQueue: je.baseQueue,
        queue: je.queue,
        next: null
      }, Fe === null ? xe.memoizedState = Fe = e : Fe = Fe.next = e;
    }
    return Fe;
  }
  function ec() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function yr(e) {
    var t = gr;
    return gr += 1, ha === null && (ha = []), e = Md(ha, e, t), t = xe, (Fe === null ? t.memoizedState : Fe.next) === null && (t = t.alternate, N.H = t === null || t.memoizedState === null ? mm : hm), e;
  }
  function qi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return yr(e);
      if (e.$$typeof === D) return dt(e);
    }
    throw Error(u(438, String(e)));
  }
  function tc(e) {
    var t = null, n = xe.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var l = xe.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(r) {
          return r.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = ec(), xe.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++)
        n[l] = le;
    return t.index++, n;
  }
  function yn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Yi(e) {
    var t = $e();
    return nc(t, je, e);
  }
  function nc(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(u(311));
    l.lastRenderedReducer = n;
    var r = e.baseQueue, c = l.pending;
    if (c !== null) {
      if (r !== null) {
        var m = r.next;
        r.next = c.next, c.next = m;
      }
      t.baseQueue = r = c, l.pending = null;
    }
    if (c = e.baseState, r === null) e.memoizedState = c;
    else {
      t = r.next;
      var g = m = null, R = null, B = t, K = !1;
      do {
        var $ = B.lane & -536870913;
        if ($ !== B.lane ? (Oe & $) === $ : (qn & $) === $) {
          var G = B.revertLane;
          if (G === 0)
            R !== null && (R = R.next = {
              lane: 0,
              revertLane: 0,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null
            }), $ === sa && (K = !0);
          else if ((qn & G) === G) {
            B = B.next, G === sa && (K = !0);
            continue;
          } else
            $ = {
              lane: 0,
              revertLane: B.revertLane,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null
            }, R === null ? (g = R = $, m = c) : R = R.next = $, xe.lanes |= G, Jn |= G;
          $ = B.action, Cl && n(c, $), c = B.hasEagerState ? B.eagerState : n(c, $);
        } else
          G = {
            lane: $,
            revertLane: B.revertLane,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null
          }, R === null ? (g = R = G, m = c) : R = R.next = G, xe.lanes |= $, Jn |= $;
        B = B.next;
      } while (B !== null && B !== t);
      if (R === null ? m = c : R.next = g, !At(c, e.memoizedState) && (nt = !0, K && (n = fa, n !== null)))
        throw n;
      e.memoizedState = c, e.baseState = m, e.baseQueue = R, l.lastRenderedState = c;
    }
    return r === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function lc(e) {
    var t = $e(), n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch, r = n.pending, c = t.memoizedState;
    if (r !== null) {
      n.pending = null;
      var m = r = r.next;
      do
        c = e(c, m.action), m = m.next;
      while (m !== r);
      At(c, t.memoizedState) || (nt = !0), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), n.lastRenderedState = c;
    }
    return [c, l];
  }
  function zd(e, t, n) {
    var l = xe, r = $e(), c = Ne;
    if (c) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else n = t();
    var m = !At(
      (je || r).memoizedState,
      n
    );
    m && (r.memoizedState = n, nt = !0), r = r.queue;
    var g = Ld.bind(null, l, r, e);
    if (br(2048, 8, g, [e]), r.getSnapshot !== t || m || Fe !== null && Fe.memoizedState.tag & 1) {
      if (l.flags |= 2048, pa(
        9,
        Vi(),
        Ud.bind(
          null,
          l,
          r,
          n,
          t
        ),
        null
      ), Ge === null) throw Error(u(349));
      c || (qn & 124) !== 0 || jd(l, t, n);
    }
    return n;
  }
  function jd(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = xe.updateQueue, t === null ? (t = ec(), xe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Ud(e, t, n, l) {
    t.value = n, t.getSnapshot = l, Bd(t) && Hd(e);
  }
  function Ld(e, t, n) {
    return n(function() {
      Bd(t) && Hd(e);
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
  function Hd(e) {
    var t = ia(e, 2);
    t !== null && _t(t, e, 2);
  }
  function ac(e) {
    var t = xt();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), Cl) {
        It(!0);
        try {
          n();
        } finally {
          It(!1);
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
  function kd(e, t, n, l) {
    return e.baseState = n, nc(
      e,
      je,
      typeof l == "function" ? l : yn
    );
  }
  function Xy(e, t, n, l, r) {
    if (Qi(e)) throw Error(u(485));
    if (e = t.action, e !== null) {
      var c = {
        payload: r,
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
      N.T !== null ? n(!0) : c.isTransition = !1, l(c), n = t.pending, n === null ? (c.next = t.pending = c, Gd(t, c)) : (c.next = n.next, t.pending = n.next = c);
    }
  }
  function Gd(e, t) {
    var n = t.action, l = t.payload, r = e.state;
    if (t.isTransition) {
      var c = N.T, m = {};
      N.T = m;
      try {
        var g = n(r, l), R = N.S;
        R !== null && R(m, g), qd(e, t, g);
      } catch (B) {
        rc(e, t, B);
      } finally {
        N.T = c;
      }
    } else
      try {
        c = n(r, l), qd(e, t, c);
      } catch (B) {
        rc(e, t, B);
      }
  }
  function qd(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(l) {
        Yd(e, t, l);
      },
      function(l) {
        return rc(e, t, l);
      }
    ) : Yd(e, t, n);
  }
  function Yd(e, t, n) {
    t.status = "fulfilled", t.value = n, Vd(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Gd(e, n)));
  }
  function rc(e, t, n) {
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
                for (var r = Qe, c = Wt; r.nodeType !== 8; ) {
                  if (!c) {
                    r = null;
                    break t;
                  }
                  if (r = Zt(
                    r.nextSibling
                  ), r === null) {
                    r = null;
                    break t;
                  }
                }
                c = r.data, r = c === "F!" || c === "F" ? r : null;
              }
              if (r) {
                Qe = Zt(
                  r.nextSibling
                ), l = r.data === "F!";
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
    ), l = xt(), r = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = r, n = Xy.bind(
      null,
      xe,
      r,
      c,
      n
    ), r.dispatch = n, l.memoizedState = e, [t, n, !1];
  }
  function Zd(e) {
    var t = $e();
    return Kd(t, je, e);
  }
  function Kd(e, t, n) {
    if (t = nc(
      e,
      t,
      Xd
    )[0], e = Yi(yn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = yr(t);
      } catch (m) {
        throw m === dr ? Li : m;
      }
    else l = t;
    t = $e();
    var r = t.queue, c = r.dispatch;
    return n !== t.memoizedState && (xe.flags |= 2048, pa(
      9,
      Vi(),
      Qy.bind(null, r, n),
      null
    )), [l, c, e];
  }
  function Qy(e, t) {
    e.action = t;
  }
  function Jd(e) {
    var t = $e(), n = je;
    if (n !== null)
      return Kd(t, n, e);
    $e(), t = t.memoizedState, n = $e();
    var l = n.queue.dispatch;
    return n.memoizedState = e, [t, l, !1];
  }
  function pa(e, t, n, l) {
    return e = { tag: e, create: n, deps: l, inst: t, next: null }, t = xe.updateQueue, t === null && (t = ec(), xe.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (l = n.next, n.next = e, e.next = l, t.lastEffect = e), e;
  }
  function Vi() {
    return { destroy: void 0, resource: void 0 };
  }
  function Fd() {
    return $e().memoizedState;
  }
  function Xi(e, t, n, l) {
    var r = xt();
    l = l === void 0 ? null : l, xe.flags |= e, r.memoizedState = pa(
      1 | t,
      Vi(),
      n,
      l
    );
  }
  function br(e, t, n, l) {
    var r = $e();
    l = l === void 0 ? null : l;
    var c = r.memoizedState.inst;
    je !== null && l !== null && Fo(l, je.memoizedState.deps) ? r.memoizedState = pa(t, c, n, l) : (xe.flags |= e, r.memoizedState = pa(
      1 | t,
      c,
      n,
      l
    ));
  }
  function $d(e, t) {
    Xi(8390656, 8, e, t);
  }
  function Pd(e, t) {
    br(2048, 8, e, t);
  }
  function Id(e, t) {
    return br(4, 2, e, t);
  }
  function Wd(e, t) {
    return br(4, 4, e, t);
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
    n = n != null ? n.concat([e]) : null, br(4, 4, em.bind(null, t, e), n);
  }
  function ic() {
  }
  function nm(e, t) {
    var n = $e();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && Fo(t, l[1]) ? l[0] : (n.memoizedState = [e, t], e);
  }
  function lm(e, t) {
    var n = $e();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && Fo(t, l[1]))
      return l[0];
    if (l = e(), Cl) {
      It(!0);
      try {
        e();
      } finally {
        It(!1);
      }
    }
    return n.memoizedState = [l, t], l;
  }
  function uc(e, t, n) {
    return n === void 0 || (qn & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = n, e = ih(), xe.lanes |= e, Jn |= e, n);
  }
  function am(e, t, n, l) {
    return At(n, t) ? n : da.current !== null ? (e = uc(e, n, l), At(e, t) || (nt = !0), e) : (qn & 42) === 0 ? (nt = !0, e.memoizedState = n) : (e = ih(), xe.lanes |= e, Jn |= e, t);
  }
  function rm(e, t, n, l, r) {
    var c = Z.p;
    Z.p = c !== 0 && 8 > c ? c : 8;
    var m = N.T, g = {};
    N.T = g, sc(e, !1, t, n);
    try {
      var R = r(), B = N.S;
      if (B !== null && B(g, R), R !== null && typeof R == "object" && typeof R.then == "function") {
        var K = qy(
          R,
          l
        );
        xr(
          e,
          t,
          K,
          Tt(e)
        );
      } else
        xr(
          e,
          t,
          l,
          Tt(e)
        );
    } catch ($) {
      xr(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: $ },
        Tt()
      );
    } finally {
      Z.p = c, N.T = m;
    }
  }
  function Zy() {
  }
  function oc(e, t, n, l) {
    if (e.tag !== 5) throw Error(u(476));
    var r = im(e).queue;
    rm(
      e,
      r,
      t,
      k,
      n === null ? Zy : function() {
        return um(e), n(l);
      }
    );
  }
  function im(e) {
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
  function um(e) {
    var t = im(e).next.queue;
    xr(e, t, {}, Tt());
  }
  function cc() {
    return dt(Hr);
  }
  function om() {
    return $e().memoizedState;
  }
  function cm() {
    return $e().memoizedState;
  }
  function Ky(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Tt();
          e = kn(n);
          var l = Gn(t, e, n);
          l !== null && (_t(l, t, n), hr(l, t, n)), t = { cache: ko() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Jy(e, t, n) {
    var l = Tt();
    n = {
      lane: l,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Qi(e) ? fm(t, n) : (n = To(e, t, n, l), n !== null && (_t(n, e, l), dm(n, t, l)));
  }
  function sm(e, t, n) {
    var l = Tt();
    xr(e, t, n, l);
  }
  function xr(e, t, n, l) {
    var r = {
      lane: l,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Qi(e)) fm(t, r);
    else {
      var c = e.alternate;
      if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null))
        try {
          var m = t.lastRenderedState, g = c(m, n);
          if (r.hasEagerState = !0, r.eagerState = g, At(g, m))
            return Oi(e, t, r, 0), Ge === null && Ri(), !1;
        } catch {
        } finally {
        }
      if (n = To(e, t, r, l), n !== null)
        return _t(n, e, l), dm(n, t, l), !0;
    }
    return !1;
  }
  function sc(e, t, n, l) {
    if (l = {
      lane: 2,
      revertLane: Yc(),
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Qi(e)) {
      if (t) throw Error(u(479));
    } else
      t = To(
        e,
        n,
        l,
        2
      ), t !== null && _t(t, e, 2);
  }
  function Qi(e) {
    var t = e.alternate;
    return e === xe || t !== null && t === xe;
  }
  function fm(e, t) {
    ma = ki = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function dm(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, Ka(e, n);
    }
  }
  var Zi = {
    readContext: dt,
    use: qi,
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
    use: qi,
    useCallback: function(e, t) {
      return xt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: dt,
    useEffect: $d,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, Xi(
        4194308,
        4,
        em.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return Xi(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Xi(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = xt();
      t = t === void 0 ? null : t;
      var l = e();
      if (Cl) {
        It(!0);
        try {
          e();
        } finally {
          It(!1);
        }
      }
      return n.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, n) {
      var l = xt();
      if (n !== void 0) {
        var r = n(t);
        if (Cl) {
          It(!0);
          try {
            n(t);
          } finally {
            It(!1);
          }
        }
      } else r = t;
      return l.memoizedState = l.baseState = r, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: r
      }, l.queue = e, e = e.dispatch = Jy.bind(
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
    useDebugValue: ic,
    useDeferredValue: function(e, t) {
      var n = xt();
      return uc(n, e, t);
    },
    useTransition: function() {
      var e = ac(!1);
      return e = rm.bind(
        null,
        xe,
        e.queue,
        !0,
        !1
      ), xt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var l = xe, r = xt();
      if (Ne) {
        if (n === void 0)
          throw Error(u(407));
        n = n();
      } else {
        if (n = t(), Ge === null)
          throw Error(u(349));
        (Oe & 124) !== 0 || jd(l, t, n);
      }
      r.memoizedState = n;
      var c = { value: n, getSnapshot: t };
      return r.queue = c, $d(Ld.bind(null, l, c, e), [
        e
      ]), l.flags |= 2048, pa(
        9,
        Vi(),
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
        n = (l & ~(1 << 32 - rt(l) - 1)).toString(32) + n, t = "«" + t + "R" + n, n = Gi++, 0 < n && (t += "H" + n.toString(32)), t += "»";
      } else
        n = Yy++, t = "«" + t + "r" + n.toString(32) + "»";
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
      return xt().memoizedState = Ky.bind(
        null,
        xe
      );
    }
  }, hm = {
    readContext: dt,
    use: qi,
    useCallback: nm,
    useContext: dt,
    useEffect: Pd,
    useImperativeHandle: tm,
    useInsertionEffect: Id,
    useLayoutEffect: Wd,
    useMemo: lm,
    useReducer: Yi,
    useRef: Fd,
    useState: function() {
      return Yi(yn);
    },
    useDebugValue: ic,
    useDeferredValue: function(e, t) {
      var n = $e();
      return am(
        n,
        je.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Yi(yn)[0], t = $e().memoizedState;
      return [
        typeof e == "boolean" ? e : yr(e),
        t
      ];
    },
    useSyncExternalStore: zd,
    useId: om,
    useHostTransitionStatus: cc,
    useFormState: Zd,
    useActionState: Zd,
    useOptimistic: function(e, t) {
      var n = $e();
      return kd(n, je, e, t);
    },
    useMemoCache: tc,
    useCacheRefresh: cm
  }, Fy = {
    readContext: dt,
    use: qi,
    useCallback: nm,
    useContext: dt,
    useEffect: Pd,
    useImperativeHandle: tm,
    useInsertionEffect: Id,
    useLayoutEffect: Wd,
    useMemo: lm,
    useReducer: lc,
    useRef: Fd,
    useState: function() {
      return lc(yn);
    },
    useDebugValue: ic,
    useDeferredValue: function(e, t) {
      var n = $e();
      return je === null ? uc(n, e, t) : am(
        n,
        je.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = lc(yn)[0], t = $e().memoizedState;
      return [
        typeof e == "boolean" ? e : yr(e),
        t
      ];
    },
    useSyncExternalStore: zd,
    useId: om,
    useHostTransitionStatus: cc,
    useFormState: Jd,
    useActionState: Jd,
    useOptimistic: function(e, t) {
      var n = $e();
      return je !== null ? kd(n, je, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: tc,
    useCacheRefresh: cm
  }, va = null, Sr = 0;
  function Ki(e) {
    var t = Sr;
    return Sr += 1, va === null && (va = []), Md(va, e, t);
  }
  function Er(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Ji(e, t) {
    throw t.$$typeof === b ? Error(u(525)) : (e = Object.prototype.toString.call(t), Error(
      u(
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
    function t(z, _) {
      if (e) {
        var U = z.deletions;
        U === null ? (z.deletions = [_], z.flags |= 16) : U.push(_);
      }
    }
    function n(z, _) {
      if (!e) return null;
      for (; _ !== null; )
        t(z, _), _ = _.sibling;
      return null;
    }
    function l(z) {
      for (var _ = /* @__PURE__ */ new Map(); z !== null; )
        z.key !== null ? _.set(z.key, z) : _.set(z.index, z), z = z.sibling;
      return _;
    }
    function r(z, _) {
      return z = mn(z, _), z.index = 0, z.sibling = null, z;
    }
    function c(z, _, U) {
      return z.index = U, e ? (U = z.alternate, U !== null ? (U = U.index, U < _ ? (z.flags |= 67108866, _) : U) : (z.flags |= 67108866, _)) : (z.flags |= 1048576, _);
    }
    function m(z) {
      return e && z.alternate === null && (z.flags |= 67108866), z;
    }
    function g(z, _, U, F) {
      return _ === null || _.tag !== 6 ? (_ = No(U, z.mode, F), _.return = z, _) : (_ = r(_, U), _.return = z, _);
    }
    function R(z, _, U, F) {
      var re = U.type;
      return re === C ? K(
        z,
        _,
        U.props.children,
        F,
        U.key
      ) : _ !== null && (_.elementType === re || typeof re == "object" && re !== null && re.$$typeof === H && pm(re) === _.type) ? (_ = r(_, U.props), Er(_, U), _.return = z, _) : (_ = _i(
        U.type,
        U.key,
        U.props,
        null,
        z.mode,
        F
      ), Er(_, U), _.return = z, _);
    }
    function B(z, _, U, F) {
      return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== U.containerInfo || _.stateNode.implementation !== U.implementation ? (_ = Do(U, z.mode, F), _.return = z, _) : (_ = r(_, U.children || []), _.return = z, _);
    }
    function K(z, _, U, F, re) {
      return _ === null || _.tag !== 7 ? (_ = yl(
        U,
        z.mode,
        F,
        re
      ), _.return = z, _) : (_ = r(_, U), _.return = z, _);
    }
    function $(z, _, U) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
        return _ = No(
          "" + _,
          z.mode,
          U
        ), _.return = z, _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case x:
            return U = _i(
              _.type,
              _.key,
              _.props,
              null,
              z.mode,
              U
            ), Er(U, _), U.return = z, U;
          case A:
            return _ = Do(
              _,
              z.mode,
              U
            ), _.return = z, _;
          case H:
            var F = _._init;
            return _ = F(_._payload), $(z, _, U);
        }
        if (V(_) || oe(_))
          return _ = yl(
            _,
            z.mode,
            U,
            null
          ), _.return = z, _;
        if (typeof _.then == "function")
          return $(z, Ki(_), U);
        if (_.$$typeof === D)
          return $(
            z,
            ji(z, _),
            U
          );
        Ji(z, _);
      }
      return null;
    }
    function G(z, _, U, F) {
      var re = _ !== null ? _.key : null;
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
        return re !== null ? null : g(z, _, "" + U, F);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case x:
            return U.key === re ? R(z, _, U, F) : null;
          case A:
            return U.key === re ? B(z, _, U, F) : null;
          case H:
            return re = U._init, U = re(U._payload), G(z, _, U, F);
        }
        if (V(U) || oe(U))
          return re !== null ? null : K(z, _, U, F, null);
        if (typeof U.then == "function")
          return G(
            z,
            _,
            Ki(U),
            F
          );
        if (U.$$typeof === D)
          return G(
            z,
            _,
            ji(z, U),
            F
          );
        Ji(z, U);
      }
      return null;
    }
    function q(z, _, U, F, re) {
      if (typeof F == "string" && F !== "" || typeof F == "number" || typeof F == "bigint")
        return z = z.get(U) || null, g(_, z, "" + F, re);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case x:
            return z = z.get(
              F.key === null ? U : F.key
            ) || null, R(_, z, F, re);
          case A:
            return z = z.get(
              F.key === null ? U : F.key
            ) || null, B(_, z, F, re);
          case H:
            var Ee = F._init;
            return F = Ee(F._payload), q(
              z,
              _,
              U,
              F,
              re
            );
        }
        if (V(F) || oe(F))
          return z = z.get(U) || null, K(_, z, F, re, null);
        if (typeof F.then == "function")
          return q(
            z,
            _,
            U,
            Ki(F),
            re
          );
        if (F.$$typeof === D)
          return q(
            z,
            _,
            U,
            ji(_, F),
            re
          );
        Ji(_, F);
      }
      return null;
    }
    function ye(z, _, U, F) {
      for (var re = null, Ee = null, se = _, pe = _ = 0, at = null; se !== null && pe < U.length; pe++) {
        se.index > pe ? (at = se, se = null) : at = se.sibling;
        var _e = G(
          z,
          se,
          U[pe],
          F
        );
        if (_e === null) {
          se === null && (se = at);
          break;
        }
        e && se && _e.alternate === null && t(z, se), _ = c(_e, _, pe), Ee === null ? re = _e : Ee.sibling = _e, Ee = _e, se = at;
      }
      if (pe === U.length)
        return n(z, se), Ne && xl(z, pe), re;
      if (se === null) {
        for (; pe < U.length; pe++)
          se = $(z, U[pe], F), se !== null && (_ = c(
            se,
            _,
            pe
          ), Ee === null ? re = se : Ee.sibling = se, Ee = se);
        return Ne && xl(z, pe), re;
      }
      for (se = l(se); pe < U.length; pe++)
        at = q(
          se,
          z,
          pe,
          U[pe],
          F
        ), at !== null && (e && at.alternate !== null && se.delete(
          at.key === null ? pe : at.key
        ), _ = c(
          at,
          _,
          pe
        ), Ee === null ? re = at : Ee.sibling = at, Ee = at);
      return e && se.forEach(function(ll) {
        return t(z, ll);
      }), Ne && xl(z, pe), re;
    }
    function de(z, _, U, F) {
      if (U == null) throw Error(u(151));
      for (var re = null, Ee = null, se = _, pe = _ = 0, at = null, _e = U.next(); se !== null && !_e.done; pe++, _e = U.next()) {
        se.index > pe ? (at = se, se = null) : at = se.sibling;
        var ll = G(z, se, _e.value, F);
        if (ll === null) {
          se === null && (se = at);
          break;
        }
        e && se && ll.alternate === null && t(z, se), _ = c(ll, _, pe), Ee === null ? re = ll : Ee.sibling = ll, Ee = ll, se = at;
      }
      if (_e.done)
        return n(z, se), Ne && xl(z, pe), re;
      if (se === null) {
        for (; !_e.done; pe++, _e = U.next())
          _e = $(z, _e.value, F), _e !== null && (_ = c(_e, _, pe), Ee === null ? re = _e : Ee.sibling = _e, Ee = _e);
        return Ne && xl(z, pe), re;
      }
      for (se = l(se); !_e.done; pe++, _e = U.next())
        _e = q(se, z, pe, _e.value, F), _e !== null && (e && _e.alternate !== null && se.delete(_e.key === null ? pe : _e.key), _ = c(_e, _, pe), Ee === null ? re = _e : Ee.sibling = _e, Ee = _e);
      return e && se.forEach(function($0) {
        return t(z, $0);
      }), Ne && xl(z, pe), re;
    }
    function Le(z, _, U, F) {
      if (typeof U == "object" && U !== null && U.type === C && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case x:
            e: {
              for (var re = U.key; _ !== null; ) {
                if (_.key === re) {
                  if (re = U.type, re === C) {
                    if (_.tag === 7) {
                      n(
                        z,
                        _.sibling
                      ), F = r(
                        _,
                        U.props.children
                      ), F.return = z, z = F;
                      break e;
                    }
                  } else if (_.elementType === re || typeof re == "object" && re !== null && re.$$typeof === H && pm(re) === _.type) {
                    n(
                      z,
                      _.sibling
                    ), F = r(_, U.props), Er(F, U), F.return = z, z = F;
                    break e;
                  }
                  n(z, _);
                  break;
                } else t(z, _);
                _ = _.sibling;
              }
              U.type === C ? (F = yl(
                U.props.children,
                z.mode,
                F,
                U.key
              ), F.return = z, z = F) : (F = _i(
                U.type,
                U.key,
                U.props,
                null,
                z.mode,
                F
              ), Er(F, U), F.return = z, z = F);
            }
            return m(z);
          case A:
            e: {
              for (re = U.key; _ !== null; ) {
                if (_.key === re)
                  if (_.tag === 4 && _.stateNode.containerInfo === U.containerInfo && _.stateNode.implementation === U.implementation) {
                    n(
                      z,
                      _.sibling
                    ), F = r(_, U.children || []), F.return = z, z = F;
                    break e;
                  } else {
                    n(z, _);
                    break;
                  }
                else t(z, _);
                _ = _.sibling;
              }
              F = Do(U, z.mode, F), F.return = z, z = F;
            }
            return m(z);
          case H:
            return re = U._init, U = re(U._payload), Le(
              z,
              _,
              U,
              F
            );
        }
        if (V(U))
          return ye(
            z,
            _,
            U,
            F
          );
        if (oe(U)) {
          if (re = oe(U), typeof re != "function") throw Error(u(150));
          return U = re.call(U), de(
            z,
            _,
            U,
            F
          );
        }
        if (typeof U.then == "function")
          return Le(
            z,
            _,
            Ki(U),
            F
          );
        if (U.$$typeof === D)
          return Le(
            z,
            _,
            ji(z, U),
            F
          );
        Ji(z, U);
      }
      return typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint" ? (U = "" + U, _ !== null && _.tag === 6 ? (n(z, _.sibling), F = r(_, U), F.return = z, z = F) : (n(z, _), F = No(U, z.mode, F), F.return = z, z = F), m(z)) : n(z, _);
    }
    return function(z, _, U, F) {
      try {
        Sr = 0;
        var re = Le(
          z,
          _,
          U,
          F
        );
        return va = null, re;
      } catch (se) {
        if (se === dr || se === Li) throw se;
        var Ee = Mt(29, se, null, z.mode);
        return Ee.lanes = F, Ee.return = z, Ee;
      } finally {
      }
    };
  }
  var ga = vm(!0), gm = vm(!1), kt = X(null), en = null;
  function Yn(e) {
    var t = e.alternate;
    I(We, We.current & 1), I(kt, e), en === null && (t === null || da.current !== null || t.memoizedState !== null) && (en = e);
  }
  function ym(e) {
    if (e.tag === 22) {
      if (I(We, We.current), I(kt, e), en === null) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (en = e);
      }
    } else Vn();
  }
  function Vn() {
    I(We, We.current), I(kt, kt.current);
  }
  function bn(e) {
    W(kt), en === e && (en = null), W(We);
  }
  var We = X(0);
  function Fi(e) {
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
      var l = Tt(), r = kn(l);
      r.payload = t, n != null && (r.callback = n), t = Gn(e, r, l), t !== null && (_t(t, e, l), hr(t, e, l));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var l = Tt(), r = kn(l);
      r.tag = 1, r.payload = t, n != null && (r.callback = n), t = Gn(e, r, l), t !== null && (_t(t, e, l), hr(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = Tt(), l = kn(n);
      l.tag = 2, t != null && (l.callback = t), t = Gn(e, l, n), t !== null && (_t(t, e, n), hr(t, e, n));
    }
  };
  function bm(e, t, n, l, r, c, m) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, c, m) : t.prototype && t.prototype.isPureReactComponent ? !ar(n, l) || !ar(r, c) : !0;
  }
  function xm(e, t, n, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, l), t.state !== e && dc.enqueueReplaceState(t, t.state, null);
  }
  function Rl(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var l in t)
        l !== "ref" && (n[l] = t[l]);
    }
    if (e = e.defaultProps) {
      n === t && (n = y({}, n));
      for (var r in e)
        n[r] === void 0 && (n[r] = e[r]);
    }
    return n;
  }
  var $i = typeof reportError == "function" ? reportError : function(e) {
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
    $i(e);
  }
  function Em(e) {
    console.error(e);
  }
  function wm(e) {
    $i(e);
  }
  function Pi(e, t) {
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
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  function mc(e, t, n) {
    return n = kn(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Pi(e, t);
    }, n;
  }
  function Mm(e) {
    return e = kn(e), e.tag = 3, e;
  }
  function Cm(e, t, n, l) {
    var r = n.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var c = l.value;
      e.payload = function() {
        return r(c);
      }, e.callback = function() {
        Am(t, n, l);
      };
    }
    var m = n.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (e.callback = function() {
      Am(t, n, l), typeof r != "function" && (Fn === null ? Fn = /* @__PURE__ */ new Set([this]) : Fn.add(this));
      var g = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: g !== null ? g : ""
      });
    });
  }
  function $y(e, t, n, l, r) {
    if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = n.alternate, t !== null && cr(
        t,
        n,
        r,
        !0
      ), n = kt.current, n !== null) {
        switch (n.tag) {
          case 13:
            return en === null ? Bc() : n.alternate === null && Ze === 0 && (Ze = 3), n.flags &= -257, n.flags |= 65536, n.lanes = r, l === Yo ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), kc(e, l, r)), !1;
          case 22:
            return n.flags |= 65536, l === Yo ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), kc(e, l, r)), !1;
        }
        throw Error(u(435, n.tag));
      }
      return kc(e, l, r), Bc(), !1;
    }
    if (Ne)
      return t = kt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = r, l !== Uo && (e = Error(u(422), { cause: l }), or(Ut(e, n)))) : (l !== Uo && (t = Error(u(423), {
        cause: l
      }), or(
        Ut(t, n)
      )), e = e.current.alternate, e.flags |= 65536, r &= -r, e.lanes |= r, l = Ut(l, n), r = mc(
        e.stateNode,
        l,
        r
      ), Qo(e, r), Ze !== 4 && (Ze = 2)), !1;
    var c = Error(u(520), { cause: l });
    if (c = Ut(c, n), Tr === null ? Tr = [c] : Tr.push(c), Ze !== 4 && (Ze = 2), t === null) return !0;
    l = Ut(l, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = r & -r, n.lanes |= e, e = mc(n.stateNode, l, e), Qo(n, e), !1;
        case 1:
          if (t = n.type, c = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (Fn === null || !Fn.has(c))))
            return n.flags |= 65536, r &= -r, n.lanes |= r, r = Mm(r), Cm(
              r,
              e,
              n,
              l
            ), Qo(n, r), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Rm = Error(u(461)), nt = !1;
  function it(e, t, n, l) {
    t.child = e === null ? gm(t, null, n, l) : ga(
      t,
      e.child,
      n,
      l
    );
  }
  function Om(e, t, n, l, r) {
    n = n.render;
    var c = t.ref;
    if ("ref" in l) {
      var m = {};
      for (var g in l)
        g !== "ref" && (m[g] = l[g]);
    } else m = l;
    return Al(t), l = $o(
      e,
      t,
      n,
      m,
      c,
      r
    ), g = Po(), e !== null && !nt ? (Io(e, t, r), xn(e, t, r)) : (Ne && g && zo(t), t.flags |= 1, it(e, t, l, r), t.child);
  }
  function Tm(e, t, n, l, r) {
    if (e === null) {
      var c = n.type;
      return typeof c == "function" && !_o(c) && c.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = c, _m(
        e,
        t,
        c,
        l,
        r
      )) : (e = _i(
        n.type,
        null,
        l,
        t,
        t.mode,
        r
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (c = e.child, !Sc(e, r)) {
      var m = c.memoizedProps;
      if (n = n.compare, n = n !== null ? n : ar, n(m, l) && e.ref === t.ref)
        return xn(e, t, r);
    }
    return t.flags |= 1, e = mn(c, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function _m(e, t, n, l, r) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (ar(c, l) && e.ref === t.ref)
        if (nt = !1, t.pendingProps = l = c, Sc(e, r))
          (e.flags & 131072) !== 0 && (nt = !0);
        else
          return t.lanes = e.lanes, xn(e, t, r);
    }
    return hc(
      e,
      t,
      n,
      l,
      r
    );
  }
  function Nm(e, t, n) {
    var l = t.pendingProps, r = l.children, c = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (l = c !== null ? c.baseLanes | n : n, e !== null) {
          for (r = t.child = e.child, c = 0; r !== null; )
            c = c | r.lanes | r.childLanes, r = r.sibling;
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
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Ui(
          t,
          c !== null ? c.cachePool : null
        ), c !== null ? _d(t, c) : Ko(), ym(t);
      else
        return t.lanes = t.childLanes = 536870912, Dm(
          e,
          t,
          c !== null ? c.baseLanes | n : n,
          n
        );
    } else
      c !== null ? (Ui(t, c.cachePool), _d(t, c), Vn(), t.memoizedState = null) : (e !== null && Ui(t, null), Ko(), Vn());
    return it(e, t, r, n), t.child;
  }
  function Dm(e, t, n, l) {
    var r = qo();
    return r = r === null ? null : { parent: Ie._currentValue, pool: r }, t.memoizedState = {
      baseLanes: n,
      cachePool: r
    }, e !== null && Ui(t, null), Ko(), ym(t), e !== null && cr(e, t, l, !0), null;
  }
  function Ii(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(u(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function hc(e, t, n, l, r) {
    return Al(t), n = $o(
      e,
      t,
      n,
      l,
      void 0,
      r
    ), l = Po(), e !== null && !nt ? (Io(e, t, r), xn(e, t, r)) : (Ne && l && zo(t), t.flags |= 1, it(e, t, n, r), t.child);
  }
  function zm(e, t, n, l, r, c) {
    return Al(t), t.updateQueue = null, n = Dd(
      t,
      l,
      n,
      r
    ), Nd(e), l = Po(), e !== null && !nt ? (Io(e, t, c), xn(e, t, c)) : (Ne && l && zo(t), t.flags |= 1, it(e, t, n, c), t.child);
  }
  function jm(e, t, n, l, r) {
    if (Al(t), t.stateNode === null) {
      var c = ua, m = n.contextType;
      typeof m == "object" && m !== null && (c = dt(m)), c = new n(l, c), t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = dc, t.stateNode = c, c._reactInternals = t, c = t.stateNode, c.props = l, c.state = t.memoizedState, c.refs = {}, Vo(t), m = n.contextType, c.context = typeof m == "object" && m !== null ? dt(m) : ua, c.state = t.memoizedState, m = n.getDerivedStateFromProps, typeof m == "function" && (fc(
        t,
        n,
        m,
        l
      ), c.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (m = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), m !== c.state && dc.enqueueReplaceState(c, c.state, null), vr(t, l, c, r), pr(), c.state = t.memoizedState), typeof c.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      c = t.stateNode;
      var g = t.memoizedProps, R = Rl(n, g);
      c.props = R;
      var B = c.context, K = n.contextType;
      m = ua, typeof K == "object" && K !== null && (m = dt(K));
      var $ = n.getDerivedStateFromProps;
      K = typeof $ == "function" || typeof c.getSnapshotBeforeUpdate == "function", g = t.pendingProps !== g, K || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (g || B !== m) && xm(
        t,
        c,
        l,
        m
      ), Hn = !1;
      var G = t.memoizedState;
      c.state = G, vr(t, l, c, r), pr(), B = t.memoizedState, g || G !== B || Hn ? (typeof $ == "function" && (fc(
        t,
        n,
        $,
        l
      ), B = t.memoizedState), (R = Hn || bm(
        t,
        n,
        R,
        l,
        G,
        B,
        m
      )) ? (K || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = B), c.props = l, c.state = B, c.context = m, l = R) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      c = t.stateNode, Xo(e, t), m = t.memoizedProps, K = Rl(n, m), c.props = K, $ = t.pendingProps, G = c.context, B = n.contextType, R = ua, typeof B == "object" && B !== null && (R = dt(B)), g = n.getDerivedStateFromProps, (B = typeof g == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (m !== $ || G !== R) && xm(
        t,
        c,
        l,
        R
      ), Hn = !1, G = t.memoizedState, c.state = G, vr(t, l, c, r), pr();
      var q = t.memoizedState;
      m !== $ || G !== q || Hn || e !== null && e.dependencies !== null && zi(e.dependencies) ? (typeof g == "function" && (fc(
        t,
        n,
        g,
        l
      ), q = t.memoizedState), (K = Hn || bm(
        t,
        n,
        K,
        l,
        G,
        q,
        R
      ) || e !== null && e.dependencies !== null && zi(e.dependencies)) ? (B || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(l, q, R), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(
        l,
        q,
        R
      )), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || m === e.memoizedProps && G === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && G === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = q), c.props = l, c.state = q, c.context = R, l = K) : (typeof c.componentDidUpdate != "function" || m === e.memoizedProps && G === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && G === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return c = l, Ii(e, t), l = (t.flags & 128) !== 0, c || l ? (c = t.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : c.render(), t.flags |= 1, e !== null && l ? (t.child = ga(
      t,
      e.child,
      null,
      r
    ), t.child = ga(
      t,
      null,
      n,
      r
    )) : it(e, t, n, r), t.memoizedState = c.state, e = t.child) : e = xn(
      e,
      t,
      r
    ), e;
  }
  function Um(e, t, n, l) {
    return ur(), t.flags |= 256, it(e, t, n, l), t.child;
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
    var l = t.pendingProps, r = !1, c = (t.flags & 128) !== 0, m;
    if ((m = c) || (m = e !== null && e.memoizedState === null ? !1 : (We.current & 2) !== 0), m && (r = !0, t.flags &= -129), m = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ne) {
        if (r ? Yn(t) : Vn(), Ne) {
          var g = Qe, R;
          if (R = g) {
            e: {
              for (R = g, g = Wt; R.nodeType !== 8; ) {
                if (!g) {
                  g = null;
                  break e;
                }
                if (R = Zt(
                  R.nextSibling
                ), R === null) {
                  g = null;
                  break e;
                }
              }
              g = R;
            }
            g !== null ? (t.memoizedState = {
              dehydrated: g,
              treeContext: bl !== null ? { id: hn, overflow: pn } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, R = Mt(
              18,
              null,
              null,
              0
            ), R.stateNode = g, R.return = t, t.child = R, ht = t, Qe = null, R = !0) : R = !1;
          }
          R || El(t);
        }
        if (g = t.memoizedState, g !== null && (g = g.dehydrated, g !== null))
          return es(g) ? t.lanes = 32 : t.lanes = 536870912, null;
        bn(t);
      }
      return g = l.children, l = l.fallback, r ? (Vn(), r = t.mode, g = Wi(
        { mode: "hidden", children: g },
        r
      ), l = yl(
        l,
        r,
        n,
        null
      ), g.return = t, l.return = t, g.sibling = l, t.child = g, r = t.child, r.memoizedState = vc(n), r.childLanes = gc(
        e,
        m,
        n
      ), t.memoizedState = pc, l) : (Yn(t), yc(t, g));
    }
    if (R = e.memoizedState, R !== null && (g = R.dehydrated, g !== null)) {
      if (c)
        t.flags & 256 ? (Yn(t), t.flags &= -257, t = bc(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (Vn(), t.child = e.child, t.flags |= 128, t = null) : (Vn(), r = l.fallback, g = t.mode, l = Wi(
          { mode: "visible", children: l.children },
          g
        ), r = yl(
          r,
          g,
          n,
          null
        ), r.flags |= 2, l.return = t, r.return = t, l.sibling = r, t.child = l, ga(
          t,
          e.child,
          null,
          n
        ), l = t.child, l.memoizedState = vc(n), l.childLanes = gc(
          e,
          m,
          n
        ), t.memoizedState = pc, t = r);
      else if (Yn(t), es(g)) {
        if (m = g.nextSibling && g.nextSibling.dataset, m) var B = m.dgst;
        m = B, l = Error(u(419)), l.stack = "", l.digest = m, or({ value: l, source: null, stack: null }), t = bc(
          e,
          t,
          n
        );
      } else if (nt || cr(e, t, n, !1), m = (n & e.childLanes) !== 0, nt || m) {
        if (m = Ge, m !== null && (l = n & -n, l = (l & 42) !== 0 ? 1 : Ql(l), l = (l & (m.suspendedLanes | n)) !== 0 ? 0 : l, l !== 0 && l !== R.retryLane))
          throw R.retryLane = l, ia(e, l), _t(m, e, l), Rm;
        g.data === "$?" || Bc(), t = bc(
          e,
          t,
          n
        );
      } else
        g.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = R.treeContext, Qe = Zt(
          g.nextSibling
        ), ht = t, Ne = !0, Sl = null, Wt = !1, e !== null && (Bt[Ht++] = hn, Bt[Ht++] = pn, Bt[Ht++] = bl, hn = e.id, pn = e.overflow, bl = t), t = yc(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return r ? (Vn(), r = l.fallback, g = t.mode, R = e.child, B = R.sibling, l = mn(R, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = R.subtreeFlags & 65011712, B !== null ? r = mn(B, r) : (r = yl(
      r,
      g,
      n,
      null
    ), r.flags |= 2), r.return = t, l.return = t, l.sibling = r, t.child = l, l = r, r = t.child, g = e.child.memoizedState, g === null ? g = vc(n) : (R = g.cachePool, R !== null ? (B = Ie._currentValue, R = R.parent !== B ? { parent: B, pool: B } : R) : R = Ed(), g = {
      baseLanes: g.baseLanes | n,
      cachePool: R
    }), r.memoizedState = g, r.childLanes = gc(
      e,
      m,
      n
    ), t.memoizedState = pc, l) : (Yn(t), n = e.child, e = n.sibling, n = mn(n, {
      mode: "visible",
      children: l.children
    }), n.return = t, n.sibling = null, e !== null && (m = t.deletions, m === null ? (t.deletions = [e], t.flags |= 16) : m.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function yc(e, t) {
    return t = Wi(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Wi(e, t) {
    return e = Mt(22, e, null, t), e.lanes = 0, e.stateNode = {
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
    l !== null && (l.lanes |= t), Bo(e.return, t, n);
  }
  function xc(e, t, n, l, r) {
    var c = e.memoizedState;
    c === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: n,
      tailMode: r
    } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = l, c.tail = n, c.tailMode = r);
  }
  function Hm(e, t, n) {
    var l = t.pendingProps, r = l.revealOrder, c = l.tail;
    if (it(e, t, l.children, n), l = We.current, (l & 2) !== 0)
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
    switch (I(We, l), r) {
      case "forwards":
        for (n = t.child, r = null; n !== null; )
          e = n.alternate, e !== null && Fi(e) === null && (r = n), n = n.sibling;
        n = r, n === null ? (r = t.child, t.child = null) : (r = n.sibling, n.sibling = null), xc(
          t,
          !1,
          r,
          n,
          c
        );
        break;
      case "backwards":
        for (n = null, r = t.child, t.child = null; r !== null; ) {
          if (e = r.alternate, e !== null && Fi(e) === null) {
            t.child = r;
            break;
          }
          e = r.sibling, r.sibling = n, n = r, r = e;
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
        if (cr(
          e,
          t,
          n,
          !1
        ), (n & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(u(153));
    if (t.child !== null) {
      for (e = t.child, n = mn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = mn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Sc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && zi(e)));
  }
  function Py(e, t, n) {
    switch (t.tag) {
      case 3:
        ve(t, t.stateNode.containerInfo), Bn(t, Ie, e.memoizedState.cache), ur();
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
          return l.dehydrated !== null ? (Yn(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Lm(e, t, n) : (Yn(t), e = xn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        Yn(t);
        break;
      case 19:
        var r = (e.flags & 128) !== 0;
        if (l = (n & t.childLanes) !== 0, l || (cr(
          e,
          t,
          n,
          !1
        ), l = (n & t.childLanes) !== 0), r) {
          if (l)
            return Hm(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (r = t.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), I(We, We.current), l) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Nm(e, t, n);
      case 24:
        Bn(t, Ie, e.memoizedState.cache);
    }
    return xn(e, t, n);
  }
  function km(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        nt = !0;
      else {
        if (!Sc(e, n) && (t.flags & 128) === 0)
          return nt = !1, Py(
            e,
            t,
            n
          );
        nt = (e.flags & 131072) !== 0;
      }
    else
      nt = !1, Ne && (t.flags & 1048576) !== 0 && pd(t, Di, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          e = t.pendingProps;
          var l = t.elementType, r = l._init;
          if (l = r(l._payload), t.type = l, typeof l == "function")
            _o(l) ? (e = Rl(l, e), t.tag = 1, t = jm(
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
              if (r = l.$$typeof, r === L) {
                t.tag = 11, t = Om(
                  null,
                  t,
                  l,
                  e,
                  n
                );
                break e;
              } else if (r === Q) {
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
            throw t = he(l) || l, Error(u(306, t, ""));
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
        return l = t.type, r = Rl(
          l,
          t.pendingProps
        ), jm(
          e,
          t,
          l,
          r,
          n
        );
      case 3:
        e: {
          if (ve(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(u(387));
          l = t.pendingProps;
          var c = t.memoizedState;
          r = c.element, Xo(e, t), vr(t, l, null, n);
          var m = t.memoizedState;
          if (l = m.cache, Bn(t, Ie, l), l !== c.cache && Ho(
            t,
            [Ie],
            n,
            !0
          ), pr(), l = m.element, c.isDehydrated)
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
            } else if (l !== r) {
              r = Ut(
                Error(u(424)),
                t
              ), or(r), t = Um(
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
              for (Qe = Zt(e.firstChild), ht = t, Ne = !0, Sl = null, Wt = !0, n = gm(
                t,
                null,
                l,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (ur(), l === r) {
              t = xn(
                e,
                t,
                n
              );
              break e;
            }
            it(
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
        return Ii(e, t), e === null ? (n = Vh(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Ne || (n = t.type, e = t.pendingProps, l = mu(
          ce.current
        ).createElement(n), l[ft] = t, l[yt] = e, ot(l, n, e), tt(l), t.stateNode = l) : t.memoizedState = Vh(
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
        ), ht = t, Wt = !0, r = Qe, In(t.type) ? (ts = r, Qe = Zt(
          l.firstChild
        )) : Qe = r), it(
          e,
          t,
          t.pendingProps.children,
          n
        ), Ii(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ne && ((r = l = Qe) && (l = M0(
          l,
          t.type,
          t.pendingProps,
          Wt
        ), l !== null ? (t.stateNode = l, ht = t, Qe = Zt(
          l.firstChild
        ), Wt = !1, r = !0) : r = !1), r || El(t)), Be(t), r = t.type, c = t.pendingProps, m = e !== null ? e.memoizedProps : null, l = c.children, Pc(r, c) ? l = null : m !== null && Pc(r, m) && (t.flags |= 32), t.memoizedState !== null && (r = $o(
          e,
          t,
          Vy,
          null,
          null,
          n
        ), Hr._currentValue = r), Ii(e, t), it(e, t, l, n), t.child;
      case 6:
        return e === null && Ne && ((e = n = Qe) && (n = C0(
          n,
          t.pendingProps,
          Wt
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
        ) : it(
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
        return it(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return it(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return it(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return l = t.pendingProps, Bn(t, t.type, l.value), it(
          e,
          t,
          l.children,
          n
        ), t.child;
      case 9:
        return r = t.type._context, l = t.pendingProps.children, Al(t), r = dt(r), l = l(r), t.flags |= 1, it(e, t, l, n), t.child;
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
        return Hm(e, t, n);
      case 31:
        return l = t.pendingProps, n = t.mode, l = {
          mode: l.mode,
          children: l.children
        }, e === null ? (n = Wi(
          l,
          n
        ), n.ref = t.ref, t.child = n, n.return = t, t = n) : (n = mn(e.child, l), n.ref = t.ref, t.child = n, n.return = t, t = n), t;
      case 22:
        return Nm(e, t, n);
      case 24:
        return Al(t), l = dt(Ie), e === null ? (r = qo(), r === null && (r = Ge, c = ko(), r.pooledCache = c, c.refCount++, c !== null && (r.pooledCacheLanes |= n), r = c), t.memoizedState = {
          parent: l,
          cache: r
        }, Vo(t), Bn(t, Ie, r)) : ((e.lanes & n) !== 0 && (Xo(e, t), vr(t, null, null, n), pr()), r = e.memoizedState, c = t.memoizedState, r.parent !== l ? (r = { parent: l, cache: l }, t.memoizedState = r, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = r), Bn(t, Ie, l)) : (l = c.cache, Bn(t, Ie, l), l !== r.cache && Ho(
          t,
          [Ie],
          n,
          !0
        ))), it(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(u(156, t.tag));
  }
  function Sn(e) {
    e.flags |= 4;
  }
  function Gm(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Jh(t)) {
      if (t = kt.current, t !== null && ((Oe & 4194048) === Oe ? en !== null : (Oe & 62914560) !== Oe && (Oe & 536870912) === 0 || t !== en))
        throw mr = Yo, wd;
      e.flags |= 8192;
    }
  }
  function eu(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? mi() : 536870912, e.lanes |= t, Sa |= t);
  }
  function wr(e, t) {
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
  function Ye(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, l = 0;
    if (t)
      for (var r = e.child; r !== null; )
        n |= r.lanes | r.childLanes, l |= r.subtreeFlags & 65011712, l |= r.flags & 65011712, r.return = e, r = r.sibling;
    else
      for (r = e.child; r !== null; )
        n |= r.lanes | r.childLanes, l |= r.subtreeFlags, l |= r.flags, r.return = e, r = r.sibling;
    return e.subtreeFlags |= l, e.childLanes = n, t;
  }
  function Iy(e, t, n) {
    var l = t.pendingProps;
    switch (jo(t), t.tag) {
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
        return Ye(t), null;
      case 1:
        return Ye(t), null;
      case 3:
        return n = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), gn(Ie), Me(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (ir(t) ? Sn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, yd())), Ye(t), null;
      case 26:
        return n = t.memoizedState, e === null ? (Sn(t), n !== null ? (Ye(t), Gm(t, n)) : (Ye(t), t.flags &= -16777217)) : n ? n !== e.memoizedState ? (Sn(t), Ye(t), Gm(t, n)) : (Ye(t), t.flags &= -16777217) : (e.memoizedProps !== l && Sn(t), Ye(t), t.flags &= -16777217), null;
      case 27:
        Re(t), n = ce.current;
        var r = t.type;
        if (e !== null && t.stateNode != null)
          e.memoizedProps !== l && Sn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(u(166));
            return Ye(t), null;
          }
          e = te.current, ir(t) ? vd(t) : (e = Gh(r, l, n), t.stateNode = e, Sn(t));
        }
        return Ye(t), null;
      case 5:
        if (Re(t), n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Sn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(u(166));
            return Ye(t), null;
          }
          if (e = te.current, ir(t))
            vd(t);
          else {
            switch (r = mu(
              ce.current
            ), e) {
              case 1:
                e = r.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                e = r.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    e = r.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    e = r.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    e = r.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                    break;
                  case "select":
                    e = typeof l.is == "string" ? r.createElement("select", { is: l.is }) : r.createElement("select"), l.multiple ? e.multiple = !0 : l.size && (e.size = l.size);
                    break;
                  default:
                    e = typeof l.is == "string" ? r.createElement(n, { is: l.is }) : r.createElement(n);
                }
            }
            e[ft] = t, e[yt] = l;
            e: for (r = t.child; r !== null; ) {
              if (r.tag === 5 || r.tag === 6)
                e.appendChild(r.stateNode);
              else if (r.tag !== 4 && r.tag !== 27 && r.child !== null) {
                r.child.return = r, r = r.child;
                continue;
              }
              if (r === t) break e;
              for (; r.sibling === null; ) {
                if (r.return === null || r.return === t)
                  break e;
                r = r.return;
              }
              r.sibling.return = r.return, r = r.sibling;
            }
            t.stateNode = e;
            e: switch (ot(e, n, l), n) {
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
        return Ye(t), t.flags &= -16777217, null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && Sn(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(u(166));
          if (e = ce.current, ir(t)) {
            if (e = t.stateNode, n = t.memoizedProps, l = null, r = ht, r !== null)
              switch (r.tag) {
                case 27:
                case 5:
                  l = r.memoizedProps;
              }
            e[ft] = t, e = !!(e.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || zh(e.nodeValue, n)), e || El(t);
          } else
            e = mu(e).createTextNode(
              l
            ), e[ft] = t, t.stateNode = e;
        }
        return Ye(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (r = ir(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!r) throw Error(u(318));
              if (r = t.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(u(317));
              r[ft] = t;
            } else
              ur(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ye(t), r = !1;
          } else
            r = yd(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = r), r = !0;
          if (!r)
            return t.flags & 256 ? (bn(t), t) : (bn(t), null);
        }
        if (bn(t), (t.flags & 128) !== 0)
          return t.lanes = n, t;
        if (n = l !== null, e = e !== null && e.memoizedState !== null, n) {
          l = t.child, r = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (r = l.alternate.memoizedState.cachePool.pool);
          var c = null;
          l.memoizedState !== null && l.memoizedState.cachePool !== null && (c = l.memoizedState.cachePool.pool), c !== r && (l.flags |= 2048);
        }
        return n !== e && n && (t.child.flags |= 8192), eu(t, t.updateQueue), Ye(t), null;
      case 4:
        return Me(), e === null && Zc(t.stateNode.containerInfo), Ye(t), null;
      case 10:
        return gn(t.type), Ye(t), null;
      case 19:
        if (W(We), r = t.memoizedState, r === null) return Ye(t), null;
        if (l = (t.flags & 128) !== 0, c = r.rendering, c === null)
          if (l) wr(r, !1);
          else {
            if (Ze !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (c = Fi(e), c !== null) {
                  for (t.flags |= 128, wr(r, !1), e = c.updateQueue, t.updateQueue = e, eu(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    hd(n, e), n = n.sibling;
                  return I(
                    We,
                    We.current & 1 | 2
                  ), t.child;
                }
                e = e.sibling;
              }
            r.tail !== null && Xe() > lu && (t.flags |= 128, l = !0, wr(r, !1), t.lanes = 4194304);
          }
        else {
          if (!l)
            if (e = Fi(c), e !== null) {
              if (t.flags |= 128, l = !0, e = e.updateQueue, t.updateQueue = e, eu(t, e), wr(r, !0), r.tail === null && r.tailMode === "hidden" && !c.alternate && !Ne)
                return Ye(t), null;
            } else
              2 * Xe() - r.renderingStartTime > lu && n !== 536870912 && (t.flags |= 128, l = !0, wr(r, !1), t.lanes = 4194304);
          r.isBackwards ? (c.sibling = t.child, t.child = c) : (e = r.last, e !== null ? e.sibling = c : t.child = c, r.last = c);
        }
        return r.tail !== null ? (t = r.tail, r.rendering = t, r.tail = t.sibling, r.renderingStartTime = Xe(), t.sibling = null, e = We.current, I(We, l ? e & 1 | 2 : e & 1), t) : (Ye(t), null);
      case 22:
      case 23:
        return bn(t), Jo(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Ye(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ye(t), n = t.updateQueue, n !== null && eu(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== n && (t.flags |= 2048), e !== null && W(Ml), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), gn(Ie), Ye(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function Wy(e, t) {
    switch (jo(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return gn(Ie), Me(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Re(t), null;
      case 13:
        if (bn(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(u(340));
          ur();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return W(We), null;
      case 4:
        return Me(), null;
      case 10:
        return gn(t.type), null;
      case 22:
      case 23:
        return bn(t), Jo(), e !== null && W(Ml), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return gn(Ie), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function qm(e, t) {
    switch (jo(t), t.tag) {
      case 3:
        gn(Ie), Me();
        break;
      case 26:
      case 27:
      case 5:
        Re(t);
        break;
      case 4:
        Me();
        break;
      case 13:
        bn(t);
        break;
      case 19:
        W(We);
        break;
      case 10:
        gn(t.type);
        break;
      case 22:
      case 23:
        bn(t), Jo(), e !== null && W(Ml);
        break;
      case 24:
        gn(Ie);
    }
  }
  function Ar(e, t) {
    try {
      var n = t.updateQueue, l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var r = l.next;
        n = r;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var c = n.create, m = n.inst;
            l = c(), m.destroy = l;
          }
          n = n.next;
        } while (n !== r);
      }
    } catch (g) {
      ke(t, t.return, g);
    }
  }
  function Xn(e, t, n) {
    try {
      var l = t.updateQueue, r = l !== null ? l.lastEffect : null;
      if (r !== null) {
        var c = r.next;
        l = c;
        do {
          if ((l.tag & e) === e) {
            var m = l.inst, g = m.destroy;
            if (g !== void 0) {
              m.destroy = void 0, r = t;
              var R = n, B = g;
              try {
                B();
              } catch (K) {
                ke(
                  r,
                  R,
                  K
                );
              }
            }
          }
          l = l.next;
        } while (l !== c);
      }
    } catch (K) {
      ke(t, t.return, K);
    }
  }
  function Ym(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Td(t, n);
      } catch (l) {
        ke(e, e.return, l);
      }
    }
  }
  function Vm(e, t, n) {
    n.props = Rl(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (l) {
      ke(e, t, l);
    }
  }
  function Mr(e, t) {
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
    } catch (r) {
      ke(e, t, r);
    }
  }
  function tn(e, t) {
    var n = e.ref, l = e.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (r) {
          ke(e, t, r);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          ke(e, t, r);
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
    } catch (r) {
      ke(e, e.return, r);
    }
  }
  function Ec(e, t, n) {
    try {
      var l = e.stateNode;
      x0(l, e.type, n, t), l[yt] = t;
    } catch (r) {
      ke(e, e.return, r);
    }
  }
  function Qm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && In(e.type) || e.tag === 4;
  }
  function wc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Qm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && In(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ac(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = du));
    else if (l !== 4 && (l === 27 && In(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (Ac(e, t, n), e = e.sibling; e !== null; )
        Ac(e, t, n), e = e.sibling;
  }
  function tu(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (l !== 4 && (l === 27 && In(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (tu(e, t, n), e = e.sibling; e !== null; )
        tu(e, t, n), e = e.sibling;
  }
  function Zm(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var l = e.type, r = t.attributes; r.length; )
        t.removeAttributeNode(r[0]);
      ot(t, l, n), t[ft] = e, t[yt] = n;
    } catch (c) {
      ke(e, e.return, c);
    }
  }
  var En = !1, Je = !1, Mc = !1, Km = typeof WeakSet == "function" ? WeakSet : Set, lt = null;
  function e0(e, t) {
    if (e = e.containerInfo, Fc = bu, e = ad(e), wo(e)) {
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
            var r = l.anchorOffset, c = l.focusNode;
            l = l.focusOffset;
            try {
              n.nodeType, c.nodeType;
            } catch {
              n = null;
              break e;
            }
            var m = 0, g = -1, R = -1, B = 0, K = 0, $ = e, G = null;
            t: for (; ; ) {
              for (var q; $ !== n || r !== 0 && $.nodeType !== 3 || (g = m + r), $ !== c || l !== 0 && $.nodeType !== 3 || (R = m + l), $.nodeType === 3 && (m += $.nodeValue.length), (q = $.firstChild) !== null; )
                G = $, $ = q;
              for (; ; ) {
                if ($ === e) break t;
                if (G === n && ++B === r && (g = m), G === c && ++K === l && (R = m), (q = $.nextSibling) !== null) break;
                $ = G, G = $.parentNode;
              }
              $ = q;
            }
            n = g === -1 || R === -1 ? null : { start: g, end: R };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for ($c = { focusedElem: e, selectionRange: n }, bu = !1, lt = t; lt !== null; )
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
                e = void 0, n = t, r = c.memoizedProps, c = c.memoizedState, l = n.stateNode;
                try {
                  var ye = Rl(
                    n.type,
                    r,
                    n.elementType === n.type
                  );
                  e = l.getSnapshotBeforeUpdate(
                    ye,
                    c
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (de) {
                  ke(
                    n,
                    n.return,
                    de
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                  Wc(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Wc(e);
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
              if ((e & 1024) !== 0) throw Error(u(163));
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
        Qn(e, n), l & 4 && Ar(5, n);
        break;
      case 1:
        if (Qn(e, n), l & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (m) {
              ke(n, n.return, m);
            }
          else {
            var r = Rl(
              n.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                r,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (m) {
              ke(
                n,
                n.return,
                m
              );
            }
          }
        l & 64 && Ym(n), l & 512 && Mr(n, n.return);
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
            ke(n, n.return, m);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Zm(n);
      case 26:
      case 5:
        Qn(e, n), t === null && l & 4 && Xm(n), l & 512 && Mr(n, n.return);
        break;
      case 12:
        Qn(e, n);
        break;
      case 13:
        Qn(e, n), l & 4 && Pm(e, n), l & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = c0.bind(
          null,
          n
        ), R0(e, n))));
        break;
      case 22:
        if (l = n.memoizedState !== null || En, !l) {
          t = t !== null && t.memoizedState !== null || Je, r = En;
          var c = Je;
          En = l, (Je = t) && !c ? Zn(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : Qn(e, n), En = r, Je = c;
        }
        break;
      case 30:
        break;
      default:
        Qn(e, n);
    }
  }
  function Fm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Fm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && lo(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var qe = null, St = !1;
  function wn(e, t, n) {
    for (n = n.child; n !== null; )
      $m(e, t, n), n = n.sibling;
  }
  function $m(e, t, n) {
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
        var l = qe, r = St;
        In(n.type) && (qe = n.stateNode, St = !1), wn(
          e,
          t,
          n
        ), jr(n.stateNode), qe = l, St = r;
        break;
      case 5:
        Je || tn(n, t);
      case 6:
        if (l = qe, r = St, qe = null, wn(
          e,
          t,
          n
        ), qe = l, St = r, qe !== null)
          if (St)
            try {
              (qe.nodeType === 9 ? qe.body : qe.nodeName === "HTML" ? qe.ownerDocument.body : qe).removeChild(n.stateNode);
            } catch (c) {
              ke(
                n,
                t,
                c
              );
            }
          else
            try {
              qe.removeChild(n.stateNode);
            } catch (c) {
              ke(
                n,
                t,
                c
              );
            }
        break;
      case 18:
        qe !== null && (St ? (e = qe, Hh(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), Yr(e)) : Hh(qe, n.stateNode));
        break;
      case 4:
        l = qe, r = St, qe = n.stateNode.containerInfo, St = !0, wn(
          e,
          t,
          n
        ), qe = l, St = r;
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
  function Pm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Yr(e);
      } catch (n) {
        ke(t, t.return, n);
      }
  }
  function t0(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Km()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Km()), t;
      default:
        throw Error(u(435, e.tag));
    }
  }
  function Cc(e, t) {
    var n = t0(e);
    t.forEach(function(l) {
      var r = s0.bind(null, e, l);
      n.has(l) || (n.add(l), l.then(r, r));
    });
  }
  function Ct(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var r = n[l], c = e, m = t, g = m;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (In(g.type)) {
                qe = g.stateNode, St = !1;
                break e;
              }
              break;
            case 5:
              qe = g.stateNode, St = !1;
              break e;
            case 3:
            case 4:
              qe = g.stateNode.containerInfo, St = !0;
              break e;
          }
          g = g.return;
        }
        if (qe === null) throw Error(u(160));
        $m(c, m, r), qe = null, St = !1, c = r.alternate, c !== null && (c.return = null), r.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        Im(t, e), t = t.sibling;
  }
  var Qt = null;
  function Im(e, t) {
    var n = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ct(t, e), Rt(e), l & 4 && (Xn(3, e, e.return), Ar(3, e), Xn(5, e, e.return));
        break;
      case 1:
        Ct(t, e), Rt(e), l & 512 && (Je || n === null || tn(n, n.return)), l & 64 && En && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
        break;
      case 26:
        var r = Qt;
        if (Ct(t, e), Rt(e), l & 512 && (Je || n === null || tn(n, n.return)), l & 4) {
          var c = n !== null ? n.memoizedState : null;
          if (l = e.memoizedState, n === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, n = e.memoizedProps, r = r.ownerDocument || r;
                  t: switch (l) {
                    case "title":
                      c = r.getElementsByTagName("title")[0], (!c || c[Fa] || c[ft] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = r.createElement(l), r.head.insertBefore(
                        c,
                        r.querySelector("head > title")
                      )), ot(c, l, n), c[ft] = e, tt(c), l = c;
                      break e;
                    case "link":
                      var m = Zh(
                        "link",
                        "href",
                        r
                      ).get(l + (n.href || ""));
                      if (m) {
                        for (var g = 0; g < m.length; g++)
                          if (c = m[g], c.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && c.getAttribute("rel") === (n.rel == null ? null : n.rel) && c.getAttribute("title") === (n.title == null ? null : n.title) && c.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            m.splice(g, 1);
                            break t;
                          }
                      }
                      c = r.createElement(l), ot(c, l, n), r.head.appendChild(c);
                      break;
                    case "meta":
                      if (m = Zh(
                        "meta",
                        "content",
                        r
                      ).get(l + (n.content || ""))) {
                        for (g = 0; g < m.length; g++)
                          if (c = m[g], c.getAttribute("content") === (n.content == null ? null : "" + n.content) && c.getAttribute("name") === (n.name == null ? null : n.name) && c.getAttribute("property") === (n.property == null ? null : n.property) && c.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && c.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            m.splice(g, 1);
                            break t;
                          }
                      }
                      c = r.createElement(l), ot(c, l, n), r.head.appendChild(c);
                      break;
                    default:
                      throw Error(u(468, l));
                  }
                  c[ft] = e, tt(c), l = c;
                }
                e.stateNode = l;
              } else
                Kh(
                  r,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Qh(
                r,
                l,
                e.memoizedProps
              );
          else
            c !== l ? (c === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : c.count--, l === null ? Kh(
              r,
              e.type,
              e.stateNode
            ) : Qh(
              r,
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
        Ct(t, e), Rt(e), l & 512 && (Je || n === null || tn(n, n.return)), n !== null && l & 4 && Ec(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Ct(t, e), Rt(e), l & 512 && (Je || n === null || tn(n, n.return)), e.flags & 32) {
          r = e.stateNode;
          try {
            Wl(r, "");
          } catch (q) {
            ke(e, e.return, q);
          }
        }
        l & 4 && e.stateNode != null && (r = e.memoizedProps, Ec(
          e,
          r,
          n !== null ? n.memoizedProps : r
        )), l & 1024 && (Mc = !0);
        break;
      case 6:
        if (Ct(t, e), Rt(e), l & 4) {
          if (e.stateNode === null)
            throw Error(u(162));
          l = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = l;
          } catch (q) {
            ke(e, e.return, q);
          }
        }
        break;
      case 3:
        if (vu = null, r = Qt, Qt = hu(t.containerInfo), Ct(t, e), Qt = r, Rt(e), l & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            Yr(t.containerInfo);
          } catch (q) {
            ke(e, e.return, q);
          }
        Mc && (Mc = !1, Wm(e));
        break;
      case 4:
        l = Qt, Qt = hu(
          e.stateNode.containerInfo
        ), Ct(t, e), Rt(e), Qt = l;
        break;
      case 12:
        Ct(t, e), Rt(e);
        break;
      case 13:
        Ct(t, e), Rt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Dc = Xe()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Cc(e, l)));
        break;
      case 22:
        r = e.memoizedState !== null;
        var R = n !== null && n.memoizedState !== null, B = En, K = Je;
        if (En = B || r, Je = K || R, Ct(t, e), Je = K, En = B, Rt(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = r ? t._visibility & -2 : t._visibility | 1, r && (n === null || R || En || Je || Ol(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                R = n = t;
                try {
                  if (c = R.stateNode, r)
                    m = c.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    g = R.stateNode;
                    var $ = R.memoizedProps.style, G = $ != null && $.hasOwnProperty("display") ? $.display : null;
                    g.style.display = G == null || typeof G == "boolean" ? "" : ("" + G).trim();
                  }
                } catch (q) {
                  ke(R, R.return, q);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                R = t;
                try {
                  R.stateNode.nodeValue = r ? "" : R.memoizedProps;
                } catch (q) {
                  ke(R, R.return, q);
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
        Ct(t, e), Rt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Cc(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ct(t, e), Rt(e);
    }
  }
  function Rt(e) {
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
        if (n == null) throw Error(u(160));
        switch (n.tag) {
          case 27:
            var r = n.stateNode, c = wc(e);
            tu(e, c, r);
            break;
          case 5:
            var m = n.stateNode;
            n.flags & 32 && (Wl(m, ""), n.flags &= -33);
            var g = wc(e);
            tu(e, g, m);
            break;
          case 3:
          case 4:
            var R = n.stateNode.containerInfo, B = wc(e);
            Ac(
              e,
              B,
              R
            );
            break;
          default:
            throw Error(u(161));
        }
      } catch (K) {
        ke(e, e.return, K);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Wm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Wm(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
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
          jr(t.stateNode);
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
      var l = t.alternate, r = e, c = t, m = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Zn(
            r,
            c,
            n
          ), Ar(4, c);
          break;
        case 1:
          if (Zn(
            r,
            c,
            n
          ), l = c, r = l.stateNode, typeof r.componentDidMount == "function")
            try {
              r.componentDidMount();
            } catch (B) {
              ke(l, l.return, B);
            }
          if (l = c, r = l.updateQueue, r !== null) {
            var g = l.stateNode;
            try {
              var R = r.shared.hiddenCallbacks;
              if (R !== null)
                for (r.shared.hiddenCallbacks = null, r = 0; r < R.length; r++)
                  Od(R[r], g);
            } catch (B) {
              ke(l, l.return, B);
            }
          }
          n && m & 64 && Ym(c), Mr(c, c.return);
          break;
        case 27:
          Zm(c);
        case 26:
        case 5:
          Zn(
            r,
            c,
            n
          ), n && l === null && m & 4 && Xm(c), Mr(c, c.return);
          break;
        case 12:
          Zn(
            r,
            c,
            n
          );
          break;
        case 13:
          Zn(
            r,
            c,
            n
          ), n && m & 4 && Pm(r, c);
          break;
        case 22:
          c.memoizedState === null && Zn(
            r,
            c,
            n
          ), Mr(c, c.return);
          break;
        case 30:
          break;
        default:
          Zn(
            r,
            c,
            n
          );
      }
      t = t.sibling;
    }
  }
  function Rc(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && sr(n));
  }
  function Oc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && sr(e));
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
    var r = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        nn(
          e,
          t,
          n,
          l
        ), r & 2048 && Ar(9, t);
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
        ), r & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && sr(e)));
        break;
      case 12:
        if (r & 2048) {
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
          } catch (R) {
            ke(t, t.return, R);
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
        ) : Cr(e, t) : c._visibility & 2 ? nn(
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
        )), r & 2048 && Rc(m, t);
        break;
      case 24:
        nn(
          e,
          t,
          n,
          l
        ), r & 2048 && Oc(t.alternate, t);
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
  function ya(e, t, n, l, r) {
    for (r = r && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var c = e, m = t, g = n, R = l, B = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          ya(
            c,
            m,
            g,
            R,
            r
          ), Ar(8, m);
          break;
        case 23:
          break;
        case 22:
          var K = m.stateNode;
          m.memoizedState !== null ? K._visibility & 2 ? ya(
            c,
            m,
            g,
            R,
            r
          ) : Cr(
            c,
            m
          ) : (K._visibility |= 2, ya(
            c,
            m,
            g,
            R,
            r
          )), r && B & 2048 && Rc(
            m.alternate,
            m
          );
          break;
        case 24:
          ya(
            c,
            m,
            g,
            R,
            r
          ), r && B & 2048 && Oc(m.alternate, m);
          break;
        default:
          ya(
            c,
            m,
            g,
            R,
            r
          );
      }
      t = t.sibling;
    }
  }
  function Cr(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, l = t, r = l.flags;
        switch (l.tag) {
          case 22:
            Cr(n, l), r & 2048 && Rc(
              l.alternate,
              l
            );
            break;
          case 24:
            Cr(n, l), r & 2048 && Oc(l.alternate, l);
            break;
          default:
            Cr(n, l);
        }
        t = t.sibling;
      }
  }
  var Rr = 8192;
  function ba(e) {
    if (e.subtreeFlags & Rr)
      for (e = e.child; e !== null; )
        th(e), e = e.sibling;
  }
  function th(e) {
    switch (e.tag) {
      case 26:
        ba(e), e.flags & Rr && e.memoizedState !== null && G0(
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
        Qt = hu(e.stateNode.containerInfo), ba(e), Qt = t;
        break;
      case 22:
        e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Rr, Rr = 16777216, ba(e), Rr = t) : ba(e));
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
  function Or(e) {
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
        Or(e), e.flags & 2048 && Xn(9, e, e.return);
        break;
      case 3:
        Or(e);
        break;
      case 12:
        Or(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, nu(e)) : Or(e);
        break;
      default:
        Or(e);
    }
  }
  function nu(e) {
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
          Xn(8, t, t.return), nu(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, nu(t));
          break;
        default:
          nu(t);
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
          sr(n.memoizedState.cache);
      }
      if (l = n.child, l !== null) l.return = n, lt = l;
      else
        e: for (n = e; lt !== null; ) {
          l = lt;
          var r = l.sibling, c = l.return;
          if (Fm(l), l === n) {
            lt = null;
            break e;
          }
          if (r !== null) {
            r.return = c, lt = r;
            break e;
          }
          lt = c;
        }
    }
  }
  var n0 = {
    getCacheForType: function(e) {
      var t = dt(Ie), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    }
  }, l0 = typeof WeakMap == "function" ? WeakMap : Map, De = 0, Ge = null, we = null, Oe = 0, ze = 0, Ot = null, Kn = !1, xa = !1, Tc = !1, An = 0, Ze = 0, Jn = 0, Tl = 0, _c = 0, Gt = 0, Sa = 0, Tr = null, Et = null, Nc = !1, Dc = 0, lu = 1 / 0, au = null, Fn = null, ut = 0, $n = null, Ea = null, wa = 0, zc = 0, jc = null, rh = null, _r = 0, Uc = null;
  function Tt() {
    if ((De & 2) !== 0 && Oe !== 0)
      return Oe & -Oe;
    if (N.T !== null) {
      var e = sa;
      return e !== 0 ? e : Yc();
    }
    return Sf();
  }
  function ih() {
    Gt === 0 && (Gt = (Oe & 536870912) === 0 || Ne ? Za() : 536870912);
    var e = kt.current;
    return e !== null && (e.flags |= 32), Gt;
  }
  function _t(e, t, n) {
    (e === Ge && (ze === 2 || ze === 9) || e.cancelPendingCommit !== null) && (Aa(e, 0), Pn(
      e,
      Oe,
      Gt,
      !1
    )), jn(e, n), ((De & 2) === 0 || e !== Ge) && (e === Ge && ((De & 2) === 0 && (Tl |= n), Ze === 4 && Pn(
      e,
      Oe,
      Gt,
      !1
    )), ln(e));
  }
  function uh(e, t, n) {
    if ((De & 6) !== 0) throw Error(u(327));
    var l = !n && (t & 124) === 0 && (t & e.expiredLanes) === 0 || ml(e, t), r = l ? i0(e, t) : Hc(e, t, !0), c = l;
    do {
      if (r === 0) {
        xa && !l && Pn(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, c && !a0(n)) {
          r = Hc(e, t, !1), c = !1;
          continue;
        }
        if (r === 2) {
          if (c = t, e.errorRecoveryDisabledLanes & c)
            var m = 0;
          else
            m = e.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            t = m;
            e: {
              var g = e;
              r = Tr;
              var R = g.current.memoizedState.isDehydrated;
              if (R && (Aa(g, m).flags |= 256), m = Hc(
                g,
                m,
                !1
              ), m !== 2) {
                if (Tc && !R) {
                  g.errorRecoveryDisabledLanes |= c, Tl |= c, r = 4;
                  break e;
                }
                c = Et, Et = r, c !== null && (Et === null ? Et = c : Et.push.apply(
                  Et,
                  c
                ));
              }
              r = m;
            }
            if (c = !1, r !== 2) continue;
          }
        }
        if (r === 1) {
          Aa(e, 0), Pn(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, c = r, c) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Pn(
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
              throw Error(u(329));
          }
          if ((t & 62914560) === t && (r = Dc + 300 - Xe(), 10 < r)) {
            if (Pn(
              l,
              t,
              Gt,
              !Kn
            ), Vl(l, 0, !0) !== 0) break e;
            l.timeoutHandle = Lh(
              oh.bind(
                null,
                l,
                n,
                Et,
                au,
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
              r
            );
            break e;
          }
          oh(
            l,
            n,
            Et,
            au,
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
  function oh(e, t, n, l, r, c, m, g, R, B, K, $, G, q) {
    if (e.timeoutHandle = -1, $ = t.subtreeFlags, ($ & 8192 || ($ & 16785408) === 16785408) && (Br = { stylesheets: null, count: 0, unsuspend: k0 }, th(t), $ = q0(), $ !== null)) {
      e.cancelPendingCommit = $(
        ph.bind(
          null,
          e,
          t,
          c,
          n,
          l,
          r,
          m,
          g,
          R,
          K,
          1,
          G,
          q
        )
      ), Pn(e, c, m, !B);
      return;
    }
    ph(
      e,
      t,
      c,
      n,
      l,
      r,
      m,
      g,
      R
    );
  }
  function a0(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var l = 0; l < n.length; l++) {
          var r = n[l], c = r.getSnapshot;
          r = r.value;
          try {
            if (!At(c(), r)) return !1;
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
  function Pn(e, t, n, l) {
    t &= ~_c, t &= ~Tl, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var r = t; 0 < r; ) {
      var c = 31 - rt(r), m = 1 << c;
      l[c] = -1, r &= ~m;
    }
    n !== 0 && pi(e, n, t);
  }
  function ru() {
    return (De & 6) === 0 ? (Nr(0), !1) : !0;
  }
  function Lc() {
    if (we !== null) {
      if (ze === 0)
        var e = we.return;
      else
        e = we, vn = wl = null, Wo(e), va = null, Sr = 0, e = we;
      for (; e !== null; )
        qm(e.alternate, e), e = e.return;
      we = null;
    }
  }
  function Aa(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, E0(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Lc(), Ge = e, we = n = mn(e.current, null), Oe = t, ze = 0, Ot = null, Kn = !1, xa = ml(e, t), Tc = !1, Sa = Gt = _c = Tl = Jn = Ze = 0, Et = Tr = null, Nc = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var r = 31 - rt(l), c = 1 << r;
        t |= e[r], l &= ~c;
      }
    return An = t, Ri(), n;
  }
  function ch(e, t) {
    xe = null, N.H = Zi, t === dr || t === Li ? (t = Cd(), ze = 3) : t === wd ? (t = Cd(), ze = 4) : ze = t === Rm ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Ot = t, we === null && (Ze = 1, Pi(
      e,
      Ut(t, e.current)
    ));
  }
  function sh() {
    var e = N.H;
    return N.H = Zi, e === null ? Zi : e;
  }
  function fh() {
    var e = N.A;
    return N.A = n0, e;
  }
  function Bc() {
    Ze = 4, Kn || (Oe & 4194048) !== Oe && kt.current !== null || (xa = !0), (Jn & 134217727) === 0 && (Tl & 134217727) === 0 || Ge === null || Pn(
      Ge,
      Oe,
      Gt,
      !1
    );
  }
  function Hc(e, t, n) {
    var l = De;
    De |= 2;
    var r = sh(), c = fh();
    (Ge !== e || Oe !== t) && (au = null, Aa(e, t)), t = !1;
    var m = Ze;
    e: do
      try {
        if (ze !== 0 && we !== null) {
          var g = we, R = Ot;
          switch (ze) {
            case 8:
              Lc(), m = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              kt.current === null && (t = !0);
              var B = ze;
              if (ze = 0, Ot = null, Ma(e, g, R, B), n && xa) {
                m = 0;
                break e;
              }
              break;
            default:
              B = ze, ze = 0, Ot = null, Ma(e, g, R, B);
          }
        }
        r0(), m = Ze;
        break;
      } catch (K) {
        ch(e, K);
      }
    while (!0);
    return t && e.shellSuspendCounter++, vn = wl = null, De = l, N.H = r, N.A = c, we === null && (Ge = null, Oe = 0, Ri()), m;
  }
  function r0() {
    for (; we !== null; ) dh(we);
  }
  function i0(e, t) {
    var n = De;
    De |= 2;
    var l = sh(), r = fh();
    Ge !== e || Oe !== t ? (au = null, lu = Xe() + 500, Aa(e, t)) : xa = ml(
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
              ze = 0, Ot = null, Ma(e, t, c, 1);
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
              Ad(c) ? (ze = 0, Ot = null, mh(t)) : (ze = 0, Ot = null, Ma(e, t, c, 7));
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
                    var R = g.sibling;
                    if (R !== null) we = R;
                    else {
                      var B = g.return;
                      B !== null ? (we = B, iu(B)) : we = null;
                    }
                    break t;
                  }
              }
              ze = 0, Ot = null, Ma(e, t, c, 5);
              break;
            case 6:
              ze = 0, Ot = null, Ma(e, t, c, 6);
              break;
            case 8:
              Lc(), Ze = 6;
              break e;
            default:
              throw Error(u(462));
          }
        }
        u0();
        break;
      } catch (K) {
        ch(e, K);
      }
    while (!0);
    return vn = wl = null, N.H = l, N.A = r, De = n, we !== null ? 0 : (Ge = null, Oe = 0, Ri(), Ze);
  }
  function u0() {
    for (; we !== null && !Pe(); )
      dh(we);
  }
  function dh(e) {
    var t = km(e.alternate, e, An);
    e.memoizedProps = e.pendingProps, t === null ? iu(e) : we = t;
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
        Wo(t);
      default:
        qm(n, t), t = we = hd(t, An), t = km(n, t, An);
    }
    e.memoizedProps = e.pendingProps, t === null ? iu(e) : we = t;
  }
  function Ma(e, t, n, l) {
    vn = wl = null, Wo(t), va = null, Sr = 0;
    var r = t.return;
    try {
      if ($y(
        e,
        r,
        t,
        n,
        Oe
      )) {
        Ze = 1, Pi(
          e,
          Ut(n, e.current)
        ), we = null;
        return;
      }
    } catch (c) {
      if (r !== null) throw we = r, c;
      Ze = 1, Pi(
        e,
        Ut(n, e.current)
      ), we = null;
      return;
    }
    t.flags & 32768 ? (Ne || l === 1 ? e = !0 : xa || (Oe & 536870912) !== 0 ? e = !1 : (Kn = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = kt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), hh(t, e)) : iu(t);
  }
  function iu(e) {
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
      var n = Iy(
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
      var n = Wy(e.alternate, e);
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
  function ph(e, t, n, l, r, c, m, g, R) {
    e.cancelPendingCommit = null;
    do
      uu();
    while (ut !== 0);
    if ((De & 6) !== 0) throw Error(u(327));
    if (t !== null) {
      if (t === e.current) throw Error(u(177));
      if (c = t.lanes | t.childLanes, c |= Oo, hi(
        e,
        n,
        c,
        m,
        g,
        R
      ), e === Ge && (we = Ge = null, Oe = 0), Ea = t, $n = e, wa = n, zc = c, jc = r, rh = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, f0(Pt, function() {
        return xh(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = N.T, N.T = null, r = Z.p, Z.p = 2, m = De, De |= 4;
        try {
          e0(e, t, n);
        } finally {
          De = m, Z.p = r, N.T = l;
        }
      }
      ut = 1, vh(), gh(), yh();
    }
  }
  function vh() {
    if (ut === 1) {
      ut = 0;
      var e = $n, t = Ea, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = N.T, N.T = null;
        var l = Z.p;
        Z.p = 2;
        var r = De;
        De |= 4;
        try {
          Im(t, e);
          var c = $c, m = ad(e.containerInfo), g = c.focusedElem, R = c.selectionRange;
          if (m !== g && g && g.ownerDocument && ld(
            g.ownerDocument.documentElement,
            g
          )) {
            if (R !== null && wo(g)) {
              var B = R.start, K = R.end;
              if (K === void 0 && (K = B), "selectionStart" in g)
                g.selectionStart = B, g.selectionEnd = Math.min(
                  K,
                  g.value.length
                );
              else {
                var $ = g.ownerDocument || document, G = $ && $.defaultView || window;
                if (G.getSelection) {
                  var q = G.getSelection(), ye = g.textContent.length, de = Math.min(R.start, ye), Le = R.end === void 0 ? de : Math.min(R.end, ye);
                  !q.extend && de > Le && (m = Le, Le = de, de = m);
                  var z = nd(
                    g,
                    de
                  ), _ = nd(
                    g,
                    Le
                  );
                  if (z && _ && (q.rangeCount !== 1 || q.anchorNode !== z.node || q.anchorOffset !== z.offset || q.focusNode !== _.node || q.focusOffset !== _.offset)) {
                    var U = $.createRange();
                    U.setStart(z.node, z.offset), q.removeAllRanges(), de > Le ? (q.addRange(U), q.extend(_.node, _.offset)) : (U.setEnd(_.node, _.offset), q.addRange(U));
                  }
                }
              }
            }
            for ($ = [], q = g; q = q.parentNode; )
              q.nodeType === 1 && $.push({
                element: q,
                left: q.scrollLeft,
                top: q.scrollTop
              });
            for (typeof g.focus == "function" && g.focus(), g = 0; g < $.length; g++) {
              var F = $[g];
              F.element.scrollLeft = F.left, F.element.scrollTop = F.top;
            }
          }
          bu = !!Fc, $c = Fc = null;
        } finally {
          De = r, Z.p = l, N.T = n;
        }
      }
      e.current = t, ut = 2;
    }
  }
  function gh() {
    if (ut === 2) {
      ut = 0;
      var e = $n, t = Ea, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = N.T, N.T = null;
        var l = Z.p;
        Z.p = 2;
        var r = De;
        De |= 4;
        try {
          Jm(e, t.alternate, t);
        } finally {
          De = r, Z.p = l, N.T = n;
        }
      }
      ut = 3;
    }
  }
  function yh() {
    if (ut === 4 || ut === 3) {
      ut = 0, gt();
      var e = $n, t = Ea, n = wa, l = rh;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? ut = 5 : (ut = 0, Ea = $n = null, bh(e, e.pendingLanes));
      var r = e.pendingLanes;
      if (r === 0 && (Fn = null), Ja(n), t = t.stateNode, st && typeof st.onCommitFiberRoot == "function")
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
        t = N.T, r = Z.p, Z.p = 2, N.T = null;
        try {
          for (var c = e.onRecoverableError, m = 0; m < l.length; m++) {
            var g = l[m];
            c(g.value, {
              componentStack: g.stack
            });
          }
        } finally {
          N.T = t, Z.p = r;
        }
      }
      (wa & 3) !== 0 && uu(), ln(e), r = e.pendingLanes, (n & 4194090) !== 0 && (r & 42) !== 0 ? e === Uc ? _r++ : (_r = 0, Uc = e) : _r = 0, Nr(0);
    }
  }
  function bh(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, sr(t)));
  }
  function uu(e) {
    return vh(), gh(), yh(), xh();
  }
  function xh() {
    if (ut !== 5) return !1;
    var e = $n, t = zc;
    zc = 0;
    var n = Ja(wa), l = N.T, r = Z.p;
    try {
      Z.p = 32 > n ? 32 : n, N.T = null, n = jc, jc = null;
      var c = $n, m = wa;
      if (ut = 0, Ea = $n = null, wa = 0, (De & 6) !== 0) throw Error(u(331));
      var g = De;
      if (De |= 4, lh(c.current), eh(
        c,
        c.current,
        m,
        n
      ), De = g, Nr(0, !1), st && typeof st.onPostCommitFiberRoot == "function")
        try {
          st.onPostCommitFiberRoot(dl, c);
        } catch {
        }
      return !0;
    } finally {
      Z.p = r, N.T = l, bh(e, t);
    }
  }
  function Sh(e, t, n) {
    t = Ut(n, t), t = mc(e.stateNode, t, 2), e = Gn(e, t, 2), e !== null && (jn(e, 2), ln(e));
  }
  function ke(e, t, n) {
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
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Fn === null || !Fn.has(l))) {
            e = Ut(n, e), n = Mm(2), l = Gn(t, n, 2), l !== null && (Cm(
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
  function kc(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new l0();
      var r = /* @__PURE__ */ new Set();
      l.set(t, r);
    } else
      r = l.get(t), r === void 0 && (r = /* @__PURE__ */ new Set(), l.set(t, r));
    r.has(n) || (Tc = !0, r.add(n), e = o0.bind(null, e, t, n), t.then(e, e));
  }
  function o0(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ge === e && (Oe & n) === n && (Ze === 4 || Ze === 3 && (Oe & 62914560) === Oe && 300 > Xe() - Dc ? (De & 2) === 0 && Aa(e, 0) : _c |= n, Sa === Oe && (Sa = 0)), ln(e);
  }
  function Eh(e, t) {
    t === 0 && (t = mi()), e = ia(e, t), e !== null && (jn(e, t), ln(e));
  }
  function c0(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Eh(e, n);
  }
  function s0(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode, r = e.memoizedState;
        r !== null && (n = r.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    l !== null && l.delete(t), Eh(e, n);
  }
  function f0(e, t) {
    return Ce(e, t);
  }
  var ou = null, Ca = null, Gc = !1, cu = !1, qc = !1, _l = 0;
  function ln(e) {
    e !== Ca && e.next === null && (Ca === null ? ou = Ca = e : Ca = Ca.next = e), cu = !0, Gc || (Gc = !0, m0());
  }
  function Nr(e, t) {
    if (!qc && cu) {
      qc = !0;
      do
        for (var n = !1, l = ou; l !== null; ) {
          if (e !== 0) {
            var r = l.pendingLanes;
            if (r === 0) var c = 0;
            else {
              var m = l.suspendedLanes, g = l.pingedLanes;
              c = (1 << 31 - rt(42 | e) + 1) - 1, c &= r & ~(m & ~g), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
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
      qc = !1;
    }
  }
  function d0() {
    wh();
  }
  function wh() {
    cu = Gc = !1;
    var e = 0;
    _l !== 0 && (S0() && (e = _l), _l = 0);
    for (var t = Xe(), n = null, l = ou; l !== null; ) {
      var r = l.next, c = Ah(l, t);
      c === 0 ? (l.next = null, n === null ? ou = r : n.next = r, r === null && (Ca = n)) : (n = l, (e !== 0 || (c & 3) !== 0) && (cu = !0)), l = r;
    }
    Nr(e);
  }
  function Ah(e, t) {
    for (var n = e.suspendedLanes, l = e.pingedLanes, r = e.expirationTimes, c = e.pendingLanes & -62914561; 0 < c; ) {
      var m = 31 - rt(c), g = 1 << m, R = r[m];
      R === -1 ? ((g & n) === 0 || (g & l) !== 0) && (r[m] = to(g, t)) : R <= t && (e.expiredLanes |= g), c &= ~g;
    }
    if (t = Ge, n = Oe, n = Vl(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, n === 0 || e === t && (ze === 2 || ze === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && He(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || ml(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (l !== null && He(l), Ja(n)) {
        case 2:
        case 8:
          n = $t;
          break;
        case 32:
          n = Pt;
          break;
        case 268435456:
          n = ql;
          break;
        default:
          n = Pt;
      }
      return l = Mh.bind(null, e), n = Ce(n, l), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return l !== null && l !== null && He(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Mh(e, t) {
    if (ut !== 0 && ut !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (uu() && e.callbackNode !== n)
      return null;
    var l = Oe;
    return l = Vl(
      e,
      e === Ge ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (uh(e, l, t), Ah(e, Xe()), e.callbackNode != null && e.callbackNode === n ? Mh.bind(null, e) : null);
  }
  function Ch(e, t) {
    if (uu()) return null;
    uh(e, t, !0);
  }
  function m0() {
    w0(function() {
      (De & 6) !== 0 ? Ce(
        ct,
        d0
      ) : wh();
    });
  }
  function Yc() {
    return _l === 0 && (_l = Za()), _l;
  }
  function Rh(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : xi("" + e);
  }
  function Oh(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function h0(e, t, n, l, r) {
    if (t === "submit" && n && n.stateNode === r) {
      var c = Rh(
        (r[yt] || null).action
      ), m = l.submitter;
      m && (t = (t = m[yt] || null) ? Rh(t.formAction) : m.getAttribute("formAction"), t !== null && (c = t, m = null));
      var g = new Ai(
        "action",
        "action",
        null,
        l,
        r
      );
      e.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (_l !== 0) {
                  var R = m ? Oh(r, m) : new FormData(r);
                  oc(
                    n,
                    {
                      pending: !0,
                      data: R,
                      method: r.method,
                      action: c
                    },
                    null,
                    R
                  );
                }
              } else
                typeof c == "function" && (g.preventDefault(), R = m ? Oh(r, m) : new FormData(r), oc(
                  n,
                  {
                    pending: !0,
                    data: R,
                    method: r.method,
                    action: c
                  },
                  c,
                  R
                ));
            },
            currentTarget: r
          }
        ]
      });
    }
  }
  for (var Vc = 0; Vc < Ro.length; Vc++) {
    var Xc = Ro[Vc], p0 = Xc.toLowerCase(), v0 = Xc[0].toUpperCase() + Xc.slice(1);
    Xt(
      p0,
      "on" + v0
    );
  }
  Xt(ud, "onAnimationEnd"), Xt(od, "onAnimationIteration"), Xt(cd, "onAnimationStart"), Xt("dblclick", "onDoubleClick"), Xt("focusin", "onFocus"), Xt("focusout", "onBlur"), Xt(zy, "onTransitionRun"), Xt(jy, "onTransitionStart"), Xt(Uy, "onTransitionCancel"), Xt(sd, "onTransitionEnd"), $l("onMouseEnter", ["mouseout", "mouseover"]), $l("onMouseLeave", ["mouseout", "mouseover"]), $l("onPointerEnter", ["pointerout", "pointerover"]), $l("onPointerLeave", ["pointerout", "pointerover"]), hl(
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
  var Dr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), g0 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Dr)
  );
  function Th(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n], r = l.event;
      l = l.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var m = l.length - 1; 0 <= m; m--) {
            var g = l[m], R = g.instance, B = g.currentTarget;
            if (g = g.listener, R !== c && r.isPropagationStopped())
              break e;
            c = g, r.currentTarget = B;
            try {
              c(r);
            } catch (K) {
              $i(K);
            }
            r.currentTarget = null, c = R;
          }
        else
          for (m = 0; m < l.length; m++) {
            if (g = l[m], R = g.instance, B = g.currentTarget, g = g.listener, R !== c && r.isPropagationStopped())
              break e;
            c = g, r.currentTarget = B;
            try {
              c(r);
            } catch (K) {
              $i(K);
            }
            r.currentTarget = null, c = R;
          }
      }
    }
  }
  function Ae(e, t) {
    var n = t[no];
    n === void 0 && (n = t[no] = /* @__PURE__ */ new Set());
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
  var su = "_reactListening" + Math.random().toString(36).slice(2);
  function Zc(e) {
    if (!e[su]) {
      e[su] = !0, wf.forEach(function(n) {
        n !== "selectionchange" && (g0.has(n) || Qc(n, !1, e), Qc(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[su] || (t[su] = !0, Qc("selectionchange", !1, t));
    }
  }
  function _h(e, t, n, l) {
    switch (ep(t)) {
      case 2:
        var r = X0;
        break;
      case 8:
        r = Q0;
        break;
      default:
        r = is;
    }
    n = r.bind(
      null,
      t,
      n,
      e
    ), r = void 0, !ho || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (r = !0), l ? r !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: r
    }) : e.addEventListener(t, n, !0) : r !== void 0 ? e.addEventListener(t, n, {
      passive: r
    }) : e.addEventListener(t, n, !1);
  }
  function Kc(e, t, n, l, r) {
    var c = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var m = l.tag;
        if (m === 3 || m === 4) {
          var g = l.stateNode.containerInfo;
          if (g === r) break;
          if (m === 4)
            for (m = l.return; m !== null; ) {
              var R = m.tag;
              if ((R === 3 || R === 4) && m.stateNode.containerInfo === r)
                return;
              m = m.return;
            }
          for (; g !== null; ) {
            if (m = Kl(g), m === null) return;
            if (R = m.tag, R === 5 || R === 6 || R === 26 || R === 27) {
              l = c = m;
              continue e;
            }
            g = g.parentNode;
          }
        }
        l = l.return;
      }
    Bf(function() {
      var B = c, K = fo(n), $ = [];
      e: {
        var G = fd.get(e);
        if (G !== void 0) {
          var q = Ai, ye = e;
          switch (e) {
            case "keypress":
              if (Ei(n) === 0) break e;
            case "keydown":
            case "keyup":
              q = fy;
              break;
            case "focusin":
              ye = "focus", q = yo;
              break;
            case "focusout":
              ye = "blur", q = yo;
              break;
            case "beforeblur":
            case "afterblur":
              q = yo;
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
              q = Gf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              q = Wg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              q = hy;
              break;
            case ud:
            case od:
            case cd:
              q = ny;
              break;
            case sd:
              q = vy;
              break;
            case "scroll":
            case "scrollend":
              q = Pg;
              break;
            case "wheel":
              q = yy;
              break;
            case "copy":
            case "cut":
            case "paste":
              q = ay;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              q = Yf;
              break;
            case "toggle":
            case "beforetoggle":
              q = xy;
          }
          var de = (t & 4) !== 0, Le = !de && (e === "scroll" || e === "scrollend"), z = de ? G !== null ? G + "Capture" : null : G;
          de = [];
          for (var _ = B, U; _ !== null; ) {
            var F = _;
            if (U = F.stateNode, F = F.tag, F !== 5 && F !== 26 && F !== 27 || U === null || z === null || (F = Pa(_, z), F != null && de.push(
              zr(_, F, U)
            )), Le) break;
            _ = _.return;
          }
          0 < de.length && (G = new q(
            G,
            ye,
            null,
            n,
            K
          ), $.push({ event: G, listeners: de }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (G = e === "mouseover" || e === "pointerover", q = e === "mouseout" || e === "pointerout", G && n !== so && (ye = n.relatedTarget || n.fromElement) && (Kl(ye) || ye[Zl]))
            break e;
          if ((q || G) && (G = K.window === K ? K : (G = K.ownerDocument) ? G.defaultView || G.parentWindow : window, q ? (ye = n.relatedTarget || n.toElement, q = B, ye = ye ? Kl(ye) : null, ye !== null && (Le = f(ye), de = ye.tag, ye !== Le || de !== 5 && de !== 27 && de !== 6) && (ye = null)) : (q = null, ye = B), q !== ye)) {
            if (de = Gf, F = "onMouseLeave", z = "onMouseEnter", _ = "mouse", (e === "pointerout" || e === "pointerover") && (de = Yf, F = "onPointerLeave", z = "onPointerEnter", _ = "pointer"), Le = q == null ? G : $a(q), U = ye == null ? G : $a(ye), G = new de(
              F,
              _ + "leave",
              q,
              n,
              K
            ), G.target = Le, G.relatedTarget = U, F = null, Kl(K) === B && (de = new de(
              z,
              _ + "enter",
              ye,
              n,
              K
            ), de.target = U, de.relatedTarget = Le, F = de), Le = F, q && ye)
              t: {
                for (de = q, z = ye, _ = 0, U = de; U; U = Ra(U))
                  _++;
                for (U = 0, F = z; F; F = Ra(F))
                  U++;
                for (; 0 < _ - U; )
                  de = Ra(de), _--;
                for (; 0 < U - _; )
                  z = Ra(z), U--;
                for (; _--; ) {
                  if (de === z || z !== null && de === z.alternate)
                    break t;
                  de = Ra(de), z = Ra(z);
                }
                de = null;
              }
            else de = null;
            q !== null && Nh(
              $,
              G,
              q,
              de,
              !1
            ), ye !== null && Le !== null && Nh(
              $,
              Le,
              ye,
              de,
              !0
            );
          }
        }
        e: {
          if (G = B ? $a(B) : window, q = G.nodeName && G.nodeName.toLowerCase(), q === "select" || q === "input" && G.type === "file")
            var re = $f;
          else if (Jf(G))
            if (Pf)
              re = _y;
            else {
              re = Oy;
              var Ee = Ry;
            }
          else
            q = G.nodeName, !q || q.toLowerCase() !== "input" || G.type !== "checkbox" && G.type !== "radio" ? B && co(B.elementType) && (re = $f) : re = Ty;
          if (re && (re = re(e, B))) {
            Ff(
              $,
              re,
              n,
              K
            );
            break e;
          }
          Ee && Ee(e, G, B), e === "focusout" && B && G.type === "number" && B.memoizedProps.value != null && oo(G, "number", G.value);
        }
        switch (Ee = B ? $a(B) : window, e) {
          case "focusin":
            (Jf(Ee) || Ee.contentEditable === "true") && (la = Ee, Ao = B, rr = null);
            break;
          case "focusout":
            rr = Ao = la = null;
            break;
          case "mousedown":
            Mo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Mo = !1, rd($, n, K);
            break;
          case "selectionchange":
            if (Dy) break;
          case "keydown":
          case "keyup":
            rd($, n, K);
        }
        var se;
        if (xo)
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
        pe && (Vf && n.locale !== "ko" && (na || pe !== "onCompositionStart" ? pe === "onCompositionEnd" && na && (se = Hf()) : (Ln = K, po = "value" in Ln ? Ln.value : Ln.textContent, na = !0)), Ee = fu(B, pe), 0 < Ee.length && (pe = new qf(
          pe,
          e,
          null,
          n,
          K
        ), $.push({ event: pe, listeners: Ee }), se ? pe.data = se : (se = Kf(n), se !== null && (pe.data = se)))), (se = Ey ? wy(e, n) : Ay(e, n)) && (pe = fu(B, "onBeforeInput"), 0 < pe.length && (Ee = new qf(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          K
        ), $.push({
          event: Ee,
          listeners: pe
        }), Ee.data = se)), h0(
          $,
          e,
          B,
          n,
          K
        );
      }
      Th($, t);
    });
  }
  function zr(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function fu(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var r = e, c = r.stateNode;
      if (r = r.tag, r !== 5 && r !== 26 && r !== 27 || c === null || (r = Pa(e, n), r != null && l.unshift(
        zr(e, r, c)
      ), r = Pa(e, t), r != null && l.push(
        zr(e, r, c)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function Ra(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Nh(e, t, n, l, r) {
    for (var c = t._reactName, m = []; n !== null && n !== l; ) {
      var g = n, R = g.alternate, B = g.stateNode;
      if (g = g.tag, R !== null && R === l) break;
      g !== 5 && g !== 26 && g !== 27 || B === null || (R = B, r ? (B = Pa(n, c), B != null && m.unshift(
        zr(n, B, R)
      )) : r || (B = Pa(n, c), B != null && m.push(
        zr(n, B, R)
      ))), n = n.return;
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var y0 = /\r\n?/g, b0 = /\u0000|\uFFFD/g;
  function Dh(e) {
    return (typeof e == "string" ? e : "" + e).replace(y0, `
`).replace(b0, "");
  }
  function zh(e, t) {
    return t = Dh(t), Dh(e) === t;
  }
  function du() {
  }
  function Ue(e, t, n, l, r, c) {
    switch (n) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || Wl(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && Wl(e, "" + l);
        break;
      case "className":
        gi(e, "class", l);
        break;
      case "tabIndex":
        gi(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        gi(e, n, l);
        break;
      case "style":
        Uf(e, l, c);
        break;
      case "data":
        if (t !== "object") {
          gi(e, "data", l);
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
        l = xi("" + l), e.setAttribute(n, l);
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
          typeof c == "function" && (n === "formAction" ? (t !== "input" && Ue(e, t, "name", r.name, r, null), Ue(
            e,
            t,
            "formEncType",
            r.formEncType,
            r,
            null
          ), Ue(
            e,
            t,
            "formMethod",
            r.formMethod,
            r,
            null
          ), Ue(
            e,
            t,
            "formTarget",
            r.formTarget,
            r,
            null
          )) : (Ue(e, t, "encType", r.encType, r, null), Ue(e, t, "method", r.method, r, null), Ue(e, t, "target", r.target, r, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        l = xi("" + l), e.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (e.onclick = du);
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
            throw Error(u(61));
          if (n = l.__html, n != null) {
            if (r.children != null) throw Error(u(60));
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
        n = xi("" + l), e.setAttributeNS(
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
        Ae("beforetoggle", e), Ae("toggle", e), vi(e, "popover", l);
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
        vi(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Fg.get(n) || n, vi(e, n, l));
    }
  }
  function Jc(e, t, n, l, r, c) {
    switch (n) {
      case "style":
        Uf(e, l, c);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(u(61));
          if (n = l.__html, n != null) {
            if (r.children != null) throw Error(u(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string" ? Wl(e, l) : (typeof l == "number" || typeof l == "bigint") && Wl(e, "" + l);
        break;
      case "onScroll":
        l != null && Ae("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ae("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = du);
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
            if (n[0] === "o" && n[1] === "n" && (r = n.endsWith("Capture"), t = n.slice(2, r ? n.length - 7 : void 0), c = e[yt] || null, c = c != null ? c[n] : null, typeof c == "function" && e.removeEventListener(t, c, r), typeof l == "function")) {
              typeof c != "function" && c !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, l, r);
              break e;
            }
            n in e ? e[n] = l : l === !0 ? e.setAttribute(n, "") : vi(e, n, l);
          }
    }
  }
  function ot(e, t, n) {
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
        var l = !1, r = !1, c;
        for (c in n)
          if (n.hasOwnProperty(c)) {
            var m = n[c];
            if (m != null)
              switch (c) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  r = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(u(137, t));
                default:
                  Ue(e, t, c, m, n, null);
              }
          }
        r && Ue(e, t, "srcSet", n.srcSet, n, null), l && Ue(e, t, "src", n.src, n, null);
        return;
      case "input":
        Ae("invalid", e);
        var g = c = m = r = null, R = null, B = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var K = n[l];
            if (K != null)
              switch (l) {
                case "name":
                  r = K;
                  break;
                case "type":
                  m = K;
                  break;
                case "checked":
                  R = K;
                  break;
                case "defaultChecked":
                  B = K;
                  break;
                case "value":
                  c = K;
                  break;
                case "defaultValue":
                  g = K;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (K != null)
                    throw Error(u(137, t));
                  break;
                default:
                  Ue(e, t, l, K, n, null);
              }
          }
        Nf(
          e,
          c,
          g,
          R,
          B,
          m,
          r,
          !1
        ), yi(e);
        return;
      case "select":
        Ae("invalid", e), l = m = c = null;
        for (r in n)
          if (n.hasOwnProperty(r) && (g = n[r], g != null))
            switch (r) {
              case "value":
                c = g;
                break;
              case "defaultValue":
                m = g;
                break;
              case "multiple":
                l = g;
              default:
                Ue(e, t, r, g, n, null);
            }
        t = c, n = m, e.multiple = !!l, t != null ? Il(e, !!l, t, !1) : n != null && Il(e, !!l, n, !0);
        return;
      case "textarea":
        Ae("invalid", e), c = r = l = null;
        for (m in n)
          if (n.hasOwnProperty(m) && (g = n[m], g != null))
            switch (m) {
              case "value":
                l = g;
                break;
              case "defaultValue":
                r = g;
                break;
              case "children":
                c = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(u(91));
                break;
              default:
                Ue(e, t, m, g, n, null);
            }
        zf(e, l, r, c), yi(e);
        return;
      case "option":
        for (R in n)
          if (n.hasOwnProperty(R) && (l = n[R], l != null))
            switch (R) {
              case "selected":
                e.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Ue(e, t, R, l, n, null);
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
        for (l = 0; l < Dr.length; l++)
          Ae(Dr[l], e);
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
                throw Error(u(137, t));
              default:
                Ue(e, t, B, l, n, null);
            }
        return;
      default:
        if (co(t)) {
          for (K in n)
            n.hasOwnProperty(K) && (l = n[K], l !== void 0 && Jc(
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
    for (g in n)
      n.hasOwnProperty(g) && (l = n[g], l != null && Ue(e, t, g, l, n, null));
  }
  function x0(e, t, n, l) {
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
        var r = null, c = null, m = null, g = null, R = null, B = null, K = null;
        for (q in n) {
          var $ = n[q];
          if (n.hasOwnProperty(q) && $ != null)
            switch (q) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                R = $;
              default:
                l.hasOwnProperty(q) || Ue(e, t, q, null, l, $);
            }
        }
        for (var G in l) {
          var q = l[G];
          if ($ = n[G], l.hasOwnProperty(G) && (q != null || $ != null))
            switch (G) {
              case "type":
                c = q;
                break;
              case "name":
                r = q;
                break;
              case "checked":
                B = q;
                break;
              case "defaultChecked":
                K = q;
                break;
              case "value":
                m = q;
                break;
              case "defaultValue":
                g = q;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (q != null)
                  throw Error(u(137, t));
                break;
              default:
                q !== $ && Ue(
                  e,
                  t,
                  G,
                  q,
                  l,
                  $
                );
            }
        }
        uo(
          e,
          m,
          g,
          R,
          B,
          K,
          c,
          r
        );
        return;
      case "select":
        q = m = g = G = null;
        for (c in n)
          if (R = n[c], n.hasOwnProperty(c) && R != null)
            switch (c) {
              case "value":
                break;
              case "multiple":
                q = R;
              default:
                l.hasOwnProperty(c) || Ue(
                  e,
                  t,
                  c,
                  null,
                  l,
                  R
                );
            }
        for (r in l)
          if (c = l[r], R = n[r], l.hasOwnProperty(r) && (c != null || R != null))
            switch (r) {
              case "value":
                G = c;
                break;
              case "defaultValue":
                g = c;
                break;
              case "multiple":
                m = c;
              default:
                c !== R && Ue(
                  e,
                  t,
                  r,
                  c,
                  l,
                  R
                );
            }
        t = g, n = m, l = q, G != null ? Il(e, !!n, G, !1) : !!l != !!n && (t != null ? Il(e, !!n, t, !0) : Il(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        q = G = null;
        for (g in n)
          if (r = n[g], n.hasOwnProperty(g) && r != null && !l.hasOwnProperty(g))
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ue(e, t, g, null, l, r);
            }
        for (m in l)
          if (r = l[m], c = n[m], l.hasOwnProperty(m) && (r != null || c != null))
            switch (m) {
              case "value":
                G = r;
                break;
              case "defaultValue":
                q = r;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(u(91));
                break;
              default:
                r !== c && Ue(e, t, m, r, l, c);
            }
        Df(e, G, q);
        return;
      case "option":
        for (var ye in n)
          if (G = n[ye], n.hasOwnProperty(ye) && G != null && !l.hasOwnProperty(ye))
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
                  G
                );
            }
        for (R in l)
          if (G = l[R], q = n[R], l.hasOwnProperty(R) && G !== q && (G != null || q != null))
            switch (R) {
              case "selected":
                e.selected = G && typeof G != "function" && typeof G != "symbol";
                break;
              default:
                Ue(
                  e,
                  t,
                  R,
                  G,
                  l,
                  q
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
        for (var de in n)
          G = n[de], n.hasOwnProperty(de) && G != null && !l.hasOwnProperty(de) && Ue(e, t, de, null, l, G);
        for (B in l)
          if (G = l[B], q = n[B], l.hasOwnProperty(B) && G !== q && (G != null || q != null))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (G != null)
                  throw Error(u(137, t));
                break;
              default:
                Ue(
                  e,
                  t,
                  B,
                  G,
                  l,
                  q
                );
            }
        return;
      default:
        if (co(t)) {
          for (var Le in n)
            G = n[Le], n.hasOwnProperty(Le) && G !== void 0 && !l.hasOwnProperty(Le) && Jc(
              e,
              t,
              Le,
              void 0,
              l,
              G
            );
          for (K in l)
            G = l[K], q = n[K], !l.hasOwnProperty(K) || G === q || G === void 0 && q === void 0 || Jc(
              e,
              t,
              K,
              G,
              l,
              q
            );
          return;
        }
    }
    for (var z in n)
      G = n[z], n.hasOwnProperty(z) && G != null && !l.hasOwnProperty(z) && Ue(e, t, z, null, l, G);
    for ($ in l)
      G = l[$], q = n[$], !l.hasOwnProperty($) || G === q || G == null && q == null || Ue(e, t, $, G, l, q);
  }
  var Fc = null, $c = null;
  function mu(e) {
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
  function Pc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Ic = null;
  function S0() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Ic ? !1 : (Ic = e, !0) : (Ic = null, !1);
  }
  var Lh = typeof setTimeout == "function" ? setTimeout : void 0, E0 = typeof clearTimeout == "function" ? clearTimeout : void 0, Bh = typeof Promise == "function" ? Promise : void 0, w0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Bh < "u" ? function(e) {
    return Bh.resolve(null).then(e).catch(A0);
  } : Lh;
  function A0(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function In(e) {
    return e === "head";
  }
  function Hh(e, t) {
    var n = t, l = 0, r = 0;
    do {
      var c = n.nextSibling;
      if (e.removeChild(n), c && c.nodeType === 8)
        if (n = c.data, n === "/$") {
          if (0 < l && 8 > l) {
            n = l;
            var m = e.ownerDocument;
            if (n & 1 && jr(m.documentElement), n & 2 && jr(m.body), n & 4)
              for (n = m.head, jr(n), m = n.firstChild; m; ) {
                var g = m.nextSibling, R = m.nodeName;
                m[Fa] || R === "SCRIPT" || R === "STYLE" || R === "LINK" && m.rel.toLowerCase() === "stylesheet" || n.removeChild(m), m = g;
              }
          }
          if (r === 0) {
            e.removeChild(c), Yr(t);
            return;
          }
          r--;
        } else
          n === "$" || n === "$?" || n === "$!" ? r++ : l = n.charCodeAt(0) - 48;
      else l = 0;
      n = c;
    } while (n);
    Yr(t);
  }
  function Wc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Wc(n), lo(n);
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
      var r = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[Fa])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (c = e.getAttribute("rel"), c === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (c !== r.rel || e.getAttribute("href") !== (r.href == null || r.href === "" ? null : r.href) || e.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin) || e.getAttribute("title") !== (r.title == null ? null : r.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (c = e.getAttribute("src"), (c !== (r.src == null ? null : r.src) || e.getAttribute("type") !== (r.type == null ? null : r.type) || e.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin)) && c && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var c = r.name == null ? null : "" + r.name;
        if (r.type === "hidden" && e.getAttribute("name") === c)
          return e;
      } else return e;
      if (e = Zt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function C0(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Zt(e.nextSibling), e === null)) return null;
    return e;
  }
  function es(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function R0(e, t) {
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
  function kh(e) {
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
    switch (t = mu(n), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(u(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(u(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(u(454));
        return e;
      default:
        throw Error(u(451));
    }
  }
  function jr(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    lo(e);
  }
  var qt = /* @__PURE__ */ new Map(), qh = /* @__PURE__ */ new Set();
  function hu(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Mn = Z.d;
  Z.d = {
    f: O0,
    r: T0,
    D: _0,
    C: N0,
    L: D0,
    m: z0,
    X: U0,
    S: j0,
    M: L0
  };
  function O0() {
    var e = Mn.f(), t = ru();
    return e || t;
  }
  function T0(e) {
    var t = Jl(e);
    t !== null && t.tag === 5 && t.type === "form" ? um(t) : Mn.r(e);
  }
  var Oa = typeof document > "u" ? null : document;
  function Yh(e, t, n) {
    var l = Oa;
    if (l && typeof t == "string" && t) {
      var r = jt(t);
      r = 'link[rel="' + e + '"][href="' + r + '"]', typeof n == "string" && (r += '[crossorigin="' + n + '"]'), qh.has(r) || (qh.add(r), e = { rel: e, crossOrigin: n, href: t }, l.querySelector(r) === null && (t = l.createElement("link"), ot(t, "link", e), tt(t), l.head.appendChild(t)));
    }
  }
  function _0(e) {
    Mn.D(e), Yh("dns-prefetch", e, null);
  }
  function N0(e, t) {
    Mn.C(e, t), Yh("preconnect", e, t);
  }
  function D0(e, t, n) {
    Mn.L(e, t, n);
    var l = Oa;
    if (l && e && t) {
      var r = 'link[rel="preload"][as="' + jt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (r += '[imagesrcset="' + jt(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (r += '[imagesizes="' + jt(
        n.imageSizes
      ) + '"]')) : r += '[href="' + jt(e) + '"]';
      var c = r;
      switch (t) {
        case "style":
          c = Ta(e);
          break;
        case "script":
          c = _a(e);
      }
      qt.has(c) || (e = y(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), qt.set(c, e), l.querySelector(r) !== null || t === "style" && l.querySelector(Ur(c)) || t === "script" && l.querySelector(Lr(c)) || (t = l.createElement("link"), ot(t, "link", e), tt(t), l.head.appendChild(t)));
    }
  }
  function z0(e, t) {
    Mn.m(e, t);
    var n = Oa;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", r = 'link[rel="modulepreload"][as="' + jt(l) + '"][href="' + jt(e) + '"]', c = r;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = _a(e);
      }
      if (!qt.has(c) && (e = y({ rel: "modulepreload", href: e }, t), qt.set(c, e), n.querySelector(r) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Lr(c)))
              return;
        }
        l = n.createElement("link"), ot(l, "link", e), tt(l), n.head.appendChild(l);
      }
    }
  }
  function j0(e, t, n) {
    Mn.S(e, t, n);
    var l = Oa;
    if (l && e) {
      var r = Fl(l).hoistableStyles, c = Ta(e);
      t = t || "default";
      var m = r.get(c);
      if (!m) {
        var g = { loading: 0, preload: null };
        if (m = l.querySelector(
          Ur(c)
        ))
          g.loading = 5;
        else {
          e = y(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = qt.get(c)) && ns(e, n);
          var R = m = l.createElement("link");
          tt(R), ot(R, "link", e), R._p = new Promise(function(B, K) {
            R.onload = B, R.onerror = K;
          }), R.addEventListener("load", function() {
            g.loading |= 1;
          }), R.addEventListener("error", function() {
            g.loading |= 2;
          }), g.loading |= 4, pu(m, t, l);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: g
        }, r.set(c, m);
      }
    }
  }
  function U0(e, t) {
    Mn.X(e, t);
    var n = Oa;
    if (n && e) {
      var l = Fl(n).hoistableScripts, r = _a(e), c = l.get(r);
      c || (c = n.querySelector(Lr(r)), c || (e = y({ src: e, async: !0 }, t), (t = qt.get(r)) && ls(e, t), c = n.createElement("script"), tt(c), ot(c, "link", e), n.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, l.set(r, c));
    }
  }
  function L0(e, t) {
    Mn.M(e, t);
    var n = Oa;
    if (n && e) {
      var l = Fl(n).hoistableScripts, r = _a(e), c = l.get(r);
      c || (c = n.querySelector(Lr(r)), c || (e = y({ src: e, async: !0, type: "module" }, t), (t = qt.get(r)) && ls(e, t), c = n.createElement("script"), tt(c), ot(c, "link", e), n.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, l.set(r, c));
    }
  }
  function Vh(e, t, n, l) {
    var r = (r = ce.current) ? hu(r) : null;
    if (!r) throw Error(u(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Ta(n.href), n = Fl(
          r
        ).hoistableStyles, l = n.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = Ta(n.href);
          var c = Fl(
            r
          ).hoistableStyles, m = c.get(e);
          if (m || (r = r.ownerDocument || r, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, c.set(e, m), (c = r.querySelector(
            Ur(e)
          )) && !c._p && (m.instance = c, m.state.loading = 5), qt.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, qt.set(e, n), c || B0(
            r,
            e,
            n,
            m.state
          ))), t && l === null)
            throw Error(u(528, ""));
          return m;
        }
        if (t && l !== null)
          throw Error(u(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = _a(n), n = Fl(
          r
        ).hoistableScripts, l = n.get(t), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(u(444, e));
    }
  }
  function Ta(e) {
    return 'href="' + jt(e) + '"';
  }
  function Ur(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Xh(e) {
    return y({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function B0(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), ot(t, "link", n), tt(t), e.head.appendChild(t));
  }
  function _a(e) {
    return '[src="' + jt(e) + '"]';
  }
  function Lr(e) {
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
          var r = y({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), tt(l), ot(l, "style", r), pu(l, n.precedence, e), t.instance = l;
        case "stylesheet":
          r = Ta(n.href);
          var c = e.querySelector(
            Ur(r)
          );
          if (c)
            return t.state.loading |= 4, t.instance = c, tt(c), c;
          l = Xh(n), (r = qt.get(r)) && ns(l, r), c = (e.ownerDocument || e).createElement("link"), tt(c);
          var m = c;
          return m._p = new Promise(function(g, R) {
            m.onload = g, m.onerror = R;
          }), ot(c, "link", l), t.state.loading |= 4, pu(c, n.precedence, e), t.instance = c;
        case "script":
          return c = _a(n.src), (r = e.querySelector(
            Lr(c)
          )) ? (t.instance = r, tt(r), r) : (l = n, (r = qt.get(c)) && (l = y({}, n), ls(l, r)), e = e.ownerDocument || e, r = e.createElement("script"), tt(r), ot(r, "link", l), e.head.appendChild(r), t.instance = r);
        case "void":
          return null;
        default:
          throw Error(u(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, pu(l, n.precedence, e));
    return t.instance;
  }
  function pu(e, t, n) {
    for (var l = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), r = l.length ? l[l.length - 1] : null, c = r, m = 0; m < l.length; m++) {
      var g = l[m];
      if (g.dataset.precedence === t) c = g;
      else if (c !== r) break;
    }
    c ? c.parentNode.insertBefore(e, c.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function ns(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function ls(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var vu = null;
  function Zh(e, t, n) {
    if (vu === null) {
      var l = /* @__PURE__ */ new Map(), r = vu = /* @__PURE__ */ new Map();
      r.set(n, l);
    } else
      r = vu, l = r.get(n), l || (l = /* @__PURE__ */ new Map(), r.set(n, l));
    if (l.has(e)) return l;
    for (l.set(e, null), n = n.getElementsByTagName(e), r = 0; r < n.length; r++) {
      var c = n[r];
      if (!(c[Fa] || c[ft] || e === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
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
  function H0(e, t, n) {
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
  var Br = null;
  function k0() {
  }
  function G0(e, t, n) {
    if (Br === null) throw Error(u(475));
    var l = Br;
    if (t.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var r = Ta(n.href), c = e.querySelector(
          Ur(r)
        );
        if (c) {
          e = c._p, e !== null && typeof e == "object" && typeof e.then == "function" && (l.count++, l = gu.bind(l), e.then(l, l)), t.state.loading |= 4, t.instance = c, tt(c);
          return;
        }
        c = e.ownerDocument || e, n = Xh(n), (r = qt.get(r)) && ns(n, r), c = c.createElement("link"), tt(c);
        var m = c;
        m._p = new Promise(function(g, R) {
          m.onload = g, m.onerror = R;
        }), ot(c, "link", n), t.instance = c;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (l.count++, t = gu.bind(l), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  function q0() {
    if (Br === null) throw Error(u(475));
    var e = Br;
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
  function gu() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) as(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var yu = null;
  function as(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, yu = /* @__PURE__ */ new Map(), t.forEach(Y0, e), yu = null, gu.call(e));
  }
  function Y0(e, t) {
    if (!(t.state.loading & 4)) {
      var n = yu.get(e);
      if (n) var l = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), yu.set(e, n);
        for (var r = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), c = 0; c < r.length; c++) {
          var m = r[c];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (n.set(m.dataset.precedence, m), l = m);
        }
        l && n.set(null, l);
      }
      r = t.instance, m = r.getAttribute("data-precedence"), c = n.get(m) || l, c === l && n.set(null, r), n.set(m, r), this.count++, l = gu.bind(this), r.addEventListener("load", l), r.addEventListener("error", l), c ? c.parentNode.insertBefore(r, c.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(r, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Hr = {
    $$typeof: D,
    Provider: null,
    Consumer: null,
    _currentValue: k,
    _currentValue2: k,
    _threadCount: 0
  };
  function V0(e, t, n, l, r, c, m, g) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Xl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xl(0), this.hiddenUpdates = Xl(null), this.identifierPrefix = l, this.onUncaughtError = r, this.onCaughtError = c, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = g, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Fh(e, t, n, l, r, c, m, g, R, B, K, $) {
    return e = new V0(
      e,
      t,
      n,
      m,
      g,
      R,
      B,
      $
    ), t = 1, c === !0 && (t |= 24), c = Mt(3, null, null, t), e.current = c, c.stateNode = e, t = ko(), t.refCount++, e.pooledCache = t, t.refCount++, c.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: t
    }, Vo(c), e;
  }
  function $h(e) {
    return e ? (e = ua, e) : ua;
  }
  function Ph(e, t, n, l, r, c) {
    r = $h(r), l.context === null ? l.context = r : l.pendingContext = r, l = kn(t), l.payload = { element: n }, c = c === void 0 ? null : c, c !== null && (l.callback = c), n = Gn(e, l, t), n !== null && (_t(n, e, t), hr(n, e, t));
  }
  function Ih(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function rs(e, t) {
    Ih(e, t), (e = e.alternate) && Ih(e, t);
  }
  function Wh(e) {
    if (e.tag === 13) {
      var t = ia(e, 67108864);
      t !== null && _t(t, e, 67108864), rs(e, 67108864);
    }
  }
  var bu = !0;
  function X0(e, t, n, l) {
    var r = N.T;
    N.T = null;
    var c = Z.p;
    try {
      Z.p = 2, is(e, t, n, l);
    } finally {
      Z.p = c, N.T = r;
    }
  }
  function Q0(e, t, n, l) {
    var r = N.T;
    N.T = null;
    var c = Z.p;
    try {
      Z.p = 8, is(e, t, n, l);
    } finally {
      Z.p = c, N.T = r;
    }
  }
  function is(e, t, n, l) {
    if (bu) {
      var r = us(l);
      if (r === null)
        Kc(
          e,
          t,
          l,
          xu,
          n
        ), tp(e, l);
      else if (K0(
        r,
        e,
        t,
        n,
        l
      ))
        l.stopPropagation();
      else if (tp(e, l), t & 4 && -1 < Z0.indexOf(e)) {
        for (; r !== null; ) {
          var c = Jl(r);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                  var m = sn(c.pendingLanes);
                  if (m !== 0) {
                    var g = c;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; m; ) {
                      var R = 1 << 31 - rt(m);
                      g.entanglements[1] |= R, m &= ~R;
                    }
                    ln(c), (De & 6) === 0 && (lu = Xe() + 500, Nr(0));
                  }
                }
                break;
              case 13:
                g = ia(c, 2), g !== null && _t(g, c, 2), ru(), rs(c, 2);
            }
          if (c = us(l), c === null && Kc(
            e,
            t,
            l,
            xu,
            n
          ), c === r) break;
          r = c;
        }
        r !== null && l.stopPropagation();
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
  function us(e) {
    return e = fo(e), os(e);
  }
  var xu = null;
  function os(e) {
    if (xu = null, e = Kl(e), e !== null) {
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
    return xu = e, null;
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
          case $t:
            return 8;
          case Pt:
          case Va:
            return 32;
          case ql:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var cs = !1, Wn = null, el = null, tl = null, kr = /* @__PURE__ */ new Map(), Gr = /* @__PURE__ */ new Map(), nl = [], Z0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function tp(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Wn = null;
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
        kr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Gr.delete(t.pointerId);
    }
  }
  function qr(e, t, n, l, r, c) {
    return e === null || e.nativeEvent !== c ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: l,
      nativeEvent: c,
      targetContainers: [r]
    }, t !== null && (t = Jl(t), t !== null && Wh(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, r !== null && t.indexOf(r) === -1 && t.push(r), e);
  }
  function K0(e, t, n, l, r) {
    switch (t) {
      case "focusin":
        return Wn = qr(
          Wn,
          e,
          t,
          n,
          l,
          r
        ), !0;
      case "dragenter":
        return el = qr(
          el,
          e,
          t,
          n,
          l,
          r
        ), !0;
      case "mouseover":
        return tl = qr(
          tl,
          e,
          t,
          n,
          l,
          r
        ), !0;
      case "pointerover":
        var c = r.pointerId;
        return kr.set(
          c,
          qr(
            kr.get(c) || null,
            e,
            t,
            n,
            l,
            r
          )
        ), !0;
      case "gotpointercapture":
        return c = r.pointerId, Gr.set(
          c,
          qr(
            Gr.get(c) || null,
            e,
            t,
            n,
            l,
            r
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
            e.blockedOn = t, Gg(e.priority, function() {
              if (n.tag === 13) {
                var l = Tt();
                l = Ql(l);
                var r = ia(n, l);
                r !== null && _t(r, n, l), rs(n, l);
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
  function Su(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = us(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(
          n.type,
          n
        );
        so = l, n.target.dispatchEvent(l), so = null;
      } else
        return t = Jl(n), t !== null && Wh(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function lp(e, t, n) {
    Su(e) && n.delete(t);
  }
  function J0() {
    cs = !1, Wn !== null && Su(Wn) && (Wn = null), el !== null && Su(el) && (el = null), tl !== null && Su(tl) && (tl = null), kr.forEach(lp), Gr.forEach(lp);
  }
  function Eu(e, t) {
    e.blockedOn === t && (e.blockedOn = null, cs || (cs = !0, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      J0
    )));
  }
  var wu = null;
  function ap(e) {
    wu !== e && (wu = e, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      function() {
        wu === e && (wu = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], l = e[t + 1], r = e[t + 2];
          if (typeof l != "function") {
            if (os(l || n) === null)
              continue;
            break;
          }
          var c = Jl(n);
          c !== null && (e.splice(t, 3), t -= 3, oc(
            c,
            {
              pending: !0,
              data: r,
              method: n.method,
              action: l
            },
            l,
            r
          ));
        }
      }
    ));
  }
  function Yr(e) {
    function t(R) {
      return Eu(R, e);
    }
    Wn !== null && Eu(Wn, e), el !== null && Eu(el, e), tl !== null && Eu(tl, e), kr.forEach(t), Gr.forEach(t);
    for (var n = 0; n < nl.length; n++) {
      var l = nl[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < nl.length && (n = nl[0], n.blockedOn === null); )
      np(n), n.blockedOn === null && nl.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (l = 0; l < n.length; l += 3) {
        var r = n[l], c = n[l + 1], m = r[yt] || null;
        if (typeof c == "function")
          m || ap(n);
        else if (m) {
          var g = null;
          if (c && c.hasAttribute("formAction")) {
            if (r = c, m = c[yt] || null)
              g = m.formAction;
            else if (os(r) !== null) continue;
          } else g = m.action;
          typeof g == "function" ? n[l + 1] = g : (n.splice(l, 3), l -= 3), ap(n);
        }
      }
  }
  function ss(e) {
    this._internalRoot = e;
  }
  Au.prototype.render = ss.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(u(409));
    var n = t.current, l = Tt();
    Ph(n, l, e, t, null, null);
  }, Au.prototype.unmount = ss.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Ph(e.current, 2, null, e, null, null), ru(), t[Zl] = null;
    }
  };
  function Au(e) {
    this._internalRoot = e;
  }
  Au.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Sf();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < nl.length && t !== 0 && t < nl[n].priority; n++) ;
      nl.splice(n, 0, e), n === 0 && np(e);
    }
  };
  var rp = i.version;
  if (rp !== "19.1.0")
    throw Error(
      u(
        527,
        rp,
        "19.1.0"
      )
    );
  Z.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
    return e = v(t), e = e !== null ? h(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var F0 = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: N,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Mu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Mu.isDisabled && Mu.supportsFiber)
      try {
        dl = Mu.inject(
          F0
        ), st = Mu;
      } catch {
      }
  }
  return Xr.createRoot = function(e, t) {
    if (!s(e)) throw Error(u(299));
    var n = !1, l = "", r = Sm, c = Em, m = wm, g = null;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (r = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (m = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (g = t.unstable_transitionCallbacks)), t = Fh(
      e,
      1,
      !1,
      null,
      null,
      n,
      l,
      r,
      c,
      m,
      g,
      null
    ), e[Zl] = t.current, Zc(e), new ss(t);
  }, Xr.hydrateRoot = function(e, t, n) {
    if (!s(e)) throw Error(u(299));
    var l = !1, r = "", c = Sm, m = Em, g = wm, R = null, B = null;
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (m = n.onCaughtError), n.onRecoverableError !== void 0 && (g = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (R = n.unstable_transitionCallbacks), n.formState !== void 0 && (B = n.formState)), t = Fh(
      e,
      1,
      !0,
      t,
      n ?? null,
      l,
      r,
      c,
      m,
      g,
      R,
      B
    ), t.context = $h(null), n = t.current, l = Tt(), l = Ql(l), r = kn(l), r.callback = null, Gn(n, r, l), n = l, t.current.lanes = n, jn(t, n), ln(t), e[Zl] = t.current, Zc(e), new Au(t);
  }, Xr.version = "19.1.0", Xr;
}
var pp;
function rb() {
  if (pp) return ms.exports;
  pp = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return a(), ms.exports = ab(), ms.exports;
}
var ib = rb();
function Te(a, i, { checkForDefaultPrevented: o = !0 } = {}) {
  return function(s) {
    if (a == null || a(s), o === !1 || !s.defaultPrevented)
      return i == null ? void 0 : i(s);
  };
}
function vp(a, i) {
  if (typeof a == "function")
    return a(i);
  a != null && (a.current = i);
}
function Xu(...a) {
  return (i) => {
    let o = !1;
    const u = a.map((s) => {
      const f = vp(s, i);
      return !o && typeof f == "function" && (o = !0), f;
    });
    if (o)
      return () => {
        for (let s = 0; s < u.length; s++) {
          const f = u[s];
          typeof f == "function" ? f() : vp(a[s], null);
        }
      };
  };
}
function wt(...a) {
  return w.useCallback(Xu(...a), a);
}
function ai(a, i = []) {
  let o = [];
  function u(f, d) {
    const p = w.createContext(d), v = o.length;
    o = [...o, d];
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
    const f = o.map((d) => w.createContext(d));
    return function(p) {
      const v = (p == null ? void 0 : p[a]) || f;
      return w.useMemo(
        () => ({ [`__scope${a}`]: { ...p, [a]: v } }),
        [p, v]
      );
    };
  };
  return s.scopeName = a, [u, ub(s, ...i)];
}
function ub(...a) {
  const i = a[0];
  if (a.length === 1) return i;
  const o = () => {
    const u = a.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(f) {
      const d = u.reduce((p, { useScope: v, scopeName: h }) => {
        const b = v(f)[`__scope${h}`];
        return { ...p, ...b };
      }, {});
      return w.useMemo(() => ({ [`__scope${i.scopeName}`]: d }), [d]);
    };
  };
  return o.scopeName = i.scopeName, o;
}
var ol = globalThis != null && globalThis.document ? w.useLayoutEffect : () => {
}, ob = $p[" useInsertionEffect ".trim().toString()] || ol;
function Ip({
  prop: a,
  defaultProp: i,
  onChange: o = () => {
  },
  caller: u
}) {
  const [s, f, d] = cb({
    defaultProp: i,
    onChange: o
  }), p = a !== void 0, v = p ? a : s;
  {
    const y = w.useRef(a !== void 0);
    w.useEffect(() => {
      const b = y.current;
      b !== p && console.warn(
        `${u} is changing from ${b ? "controlled" : "uncontrolled"} to ${p ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), y.current = p;
    }, [p, u]);
  }
  const h = w.useCallback(
    (y) => {
      var b;
      if (p) {
        const x = sb(y) ? y(a) : y;
        x !== a && ((b = d.current) == null || b.call(d, x));
      } else
        f(y);
    },
    [p, a, f, d]
  );
  return [v, h];
}
function cb({
  defaultProp: a,
  onChange: i
}) {
  const [o, u] = w.useState(a), s = w.useRef(o), f = w.useRef(i);
  return ob(() => {
    f.current = i;
  }, [i]), w.useEffect(() => {
    var d;
    s.current !== o && ((d = f.current) == null || d.call(f, o), s.current = o);
  }, [o, s]), [o, u, f];
}
function sb(a) {
  return typeof a == "function";
}
var Ps = Pp();
const fb = /* @__PURE__ */ Fp(Ps);
// @__NO_SIDE_EFFECTS__
function $r(a) {
  const i = /* @__PURE__ */ mb(a), o = w.forwardRef((u, s) => {
    const { children: f, ...d } = u, p = w.Children.toArray(f), v = p.find(pb);
    if (v) {
      const h = v.props.children, y = p.map((b) => b === v ? w.Children.count(h) > 1 ? w.Children.only(null) : w.isValidElement(h) ? h.props.children : null : b);
      return /* @__PURE__ */ S.jsx(i, { ...d, ref: s, children: w.isValidElement(h) ? w.cloneElement(h, void 0, y) : null });
    }
    return /* @__PURE__ */ S.jsx(i, { ...d, ref: s, children: f });
  });
  return o.displayName = `${a}.Slot`, o;
}
var db = /* @__PURE__ */ $r("Slot");
// @__NO_SIDE_EFFECTS__
function mb(a) {
  const i = w.forwardRef((o, u) => {
    const { children: s, ...f } = o;
    if (w.isValidElement(s)) {
      const d = gb(s), p = vb(f, s.props);
      return s.type !== w.Fragment && (p.ref = u ? Xu(u, d) : d), w.cloneElement(s, p);
    }
    return w.Children.count(s) > 1 ? w.Children.only(null) : null;
  });
  return i.displayName = `${a}.SlotClone`, i;
}
var hb = Symbol("radix.slottable");
function pb(a) {
  return w.isValidElement(a) && typeof a.type == "function" && "__radixId" in a.type && a.type.__radixId === hb;
}
function vb(a, i) {
  const o = { ...i };
  for (const u in i) {
    const s = a[u], f = i[u];
    /^on[A-Z]/.test(u) ? s && f ? o[u] = (...p) => {
      f(...p), s(...p);
    } : s && (o[u] = s) : u === "style" ? o[u] = { ...s, ...f } : u === "className" && (o[u] = [s, f].filter(Boolean).join(" "));
  }
  return { ...a, ...o };
}
function gb(a) {
  var u, s;
  let i = (u = Object.getOwnPropertyDescriptor(a.props, "ref")) == null ? void 0 : u.get, o = i && "isReactWarning" in i && i.isReactWarning;
  return o ? a.ref : (i = (s = Object.getOwnPropertyDescriptor(a, "ref")) == null ? void 0 : s.get, o = i && "isReactWarning" in i && i.isReactWarning, o ? a.props.ref : a.props.ref || a.ref);
}
var yb = [
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
], pt = yb.reduce((a, i) => {
  const o = /* @__PURE__ */ $r(`Primitive.${i}`), u = w.forwardRef((s, f) => {
    const { asChild: d, ...p } = s, v = d ? o : i;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ S.jsx(v, { ...p, ref: f });
  });
  return u.displayName = `Primitive.${i}`, { ...a, [i]: u };
}, {});
function Wp(a, i) {
  a && Ps.flushSync(() => a.dispatchEvent(i));
}
function ev(a) {
  const i = a + "CollectionProvider", [o, u] = ai(i), [s, f] = o(
    i,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), d = (E) => {
    const { scope: O, children: T } = E, j = il.useRef(null), D = il.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ S.jsx(s, { scope: O, itemMap: D, collectionRef: j, children: T });
  };
  d.displayName = i;
  const p = a + "CollectionSlot", v = /* @__PURE__ */ $r(p), h = il.forwardRef(
    (E, O) => {
      const { scope: T, children: j } = E, D = f(p, T), L = wt(O, D.collectionRef);
      return /* @__PURE__ */ S.jsx(v, { ref: L, children: j });
    }
  );
  h.displayName = p;
  const y = a + "CollectionItemSlot", b = "data-radix-collection-item", x = /* @__PURE__ */ $r(y), A = il.forwardRef(
    (E, O) => {
      const { scope: T, children: j, ...D } = E, L = il.useRef(null), Y = wt(O, L), J = f(y, T);
      return il.useEffect(() => (J.itemMap.set(L, { ref: L, ...D }), () => void J.itemMap.delete(L))), /* @__PURE__ */ S.jsx(x, { [b]: "", ref: Y, children: j });
    }
  );
  A.displayName = y;
  function C(E) {
    const O = f(a + "CollectionConsumer", E);
    return il.useCallback(() => {
      const j = O.collectionRef.current;
      if (!j) return [];
      const D = Array.from(j.querySelectorAll(`[${b}]`));
      return Array.from(O.itemMap.values()).sort(
        (J, Q) => D.indexOf(J.ref.current) - D.indexOf(Q.ref.current)
      );
    }, [O.collectionRef, O.itemMap]);
  }
  return [
    { Provider: d, Slot: h, ItemSlot: A },
    C,
    u
  ];
}
var bb = w.createContext(void 0);
function tv(a) {
  const i = w.useContext(bb);
  return a || i || "ltr";
}
function _n(a) {
  const i = w.useRef(a);
  return w.useEffect(() => {
    i.current = a;
  }), w.useMemo(() => (...o) => {
    var u;
    return (u = i.current) == null ? void 0 : u.call(i, ...o);
  }, []);
}
function xb(a, i = globalThis == null ? void 0 : globalThis.document) {
  const o = _n(a);
  w.useEffect(() => {
    const u = (s) => {
      s.key === "Escape" && o(s);
    };
    return i.addEventListener("keydown", u, { capture: !0 }), () => i.removeEventListener("keydown", u, { capture: !0 });
  }, [o, i]);
}
var Sb = "DismissableLayer", js = "dismissableLayer.update", Eb = "dismissableLayer.pointerDownOutside", wb = "dismissableLayer.focusOutside", gp, nv = w.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), lv = w.forwardRef(
  (a, i) => {
    const {
      disableOutsidePointerEvents: o = !1,
      onEscapeKeyDown: u,
      onPointerDownOutside: s,
      onFocusOutside: f,
      onInteractOutside: d,
      onDismiss: p,
      ...v
    } = a, h = w.useContext(nv), [y, b] = w.useState(null), x = (y == null ? void 0 : y.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, A] = w.useState({}), C = wt(i, (Q) => b(Q)), E = Array.from(h.layers), [O] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1), T = E.indexOf(O), j = y ? E.indexOf(y) : -1, D = h.layersWithOutsidePointerEventsDisabled.size > 0, L = j >= T, Y = Cb((Q) => {
      const H = Q.target, ee = [...h.branches].some((le) => le.contains(H));
      !L || ee || (s == null || s(Q), d == null || d(Q), Q.defaultPrevented || p == null || p());
    }, x), J = Rb((Q) => {
      const H = Q.target;
      [...h.branches].some((le) => le.contains(H)) || (f == null || f(Q), d == null || d(Q), Q.defaultPrevented || p == null || p());
    }, x);
    return xb((Q) => {
      j === h.layers.size - 1 && (u == null || u(Q), !Q.defaultPrevented && p && (Q.preventDefault(), p()));
    }, x), w.useEffect(() => {
      if (y)
        return o && (h.layersWithOutsidePointerEventsDisabled.size === 0 && (gp = x.body.style.pointerEvents, x.body.style.pointerEvents = "none"), h.layersWithOutsidePointerEventsDisabled.add(y)), h.layers.add(y), yp(), () => {
          o && h.layersWithOutsidePointerEventsDisabled.size === 1 && (x.body.style.pointerEvents = gp);
        };
    }, [y, x, o, h]), w.useEffect(() => () => {
      y && (h.layers.delete(y), h.layersWithOutsidePointerEventsDisabled.delete(y), yp());
    }, [y, h]), w.useEffect(() => {
      const Q = () => A({});
      return document.addEventListener(js, Q), () => document.removeEventListener(js, Q);
    }, []), /* @__PURE__ */ S.jsx(
      pt.div,
      {
        ...v,
        ref: C,
        style: {
          pointerEvents: D ? L ? "auto" : "none" : void 0,
          ...a.style
        },
        onFocusCapture: Te(a.onFocusCapture, J.onFocusCapture),
        onBlurCapture: Te(a.onBlurCapture, J.onBlurCapture),
        onPointerDownCapture: Te(
          a.onPointerDownCapture,
          Y.onPointerDownCapture
        )
      }
    );
  }
);
lv.displayName = Sb;
var Ab = "DismissableLayerBranch", Mb = w.forwardRef((a, i) => {
  const o = w.useContext(nv), u = w.useRef(null), s = wt(i, u);
  return w.useEffect(() => {
    const f = u.current;
    if (f)
      return o.branches.add(f), () => {
        o.branches.delete(f);
      };
  }, [o.branches]), /* @__PURE__ */ S.jsx(pt.div, { ...a, ref: s });
});
Mb.displayName = Ab;
function Cb(a, i = globalThis == null ? void 0 : globalThis.document) {
  const o = _n(a), u = w.useRef(!1), s = w.useRef(() => {
  });
  return w.useEffect(() => {
    const f = (p) => {
      if (p.target && !u.current) {
        let v = function() {
          av(
            Eb,
            o,
            h,
            { discrete: !0 }
          );
        };
        const h = { originalEvent: p };
        p.pointerType === "touch" ? (i.removeEventListener("click", s.current), s.current = v, i.addEventListener("click", s.current, { once: !0 })) : v();
      } else
        i.removeEventListener("click", s.current);
      u.current = !1;
    }, d = window.setTimeout(() => {
      i.addEventListener("pointerdown", f);
    }, 0);
    return () => {
      window.clearTimeout(d), i.removeEventListener("pointerdown", f), i.removeEventListener("click", s.current);
    };
  }, [i, o]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => u.current = !0
  };
}
function Rb(a, i = globalThis == null ? void 0 : globalThis.document) {
  const o = _n(a), u = w.useRef(!1);
  return w.useEffect(() => {
    const s = (f) => {
      f.target && !u.current && av(wb, o, { originalEvent: f }, {
        discrete: !1
      });
    };
    return i.addEventListener("focusin", s), () => i.removeEventListener("focusin", s);
  }, [i, o]), {
    onFocusCapture: () => u.current = !0,
    onBlurCapture: () => u.current = !1
  };
}
function yp() {
  const a = new CustomEvent(js);
  document.dispatchEvent(a);
}
function av(a, i, o, { discrete: u }) {
  const s = o.originalEvent.target, f = new CustomEvent(a, { bubbles: !1, cancelable: !0, detail: o });
  i && s.addEventListener(a, i, { once: !0 }), u ? Wp(s, f) : s.dispatchEvent(f);
}
var gs = 0;
function Ob() {
  w.useEffect(() => {
    const a = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", a[0] ?? bp()), document.body.insertAdjacentElement("beforeend", a[1] ?? bp()), gs++, () => {
      gs === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((i) => i.remove()), gs--;
    };
  }, []);
}
function bp() {
  const a = document.createElement("span");
  return a.setAttribute("data-radix-focus-guard", ""), a.tabIndex = 0, a.style.outline = "none", a.style.opacity = "0", a.style.position = "fixed", a.style.pointerEvents = "none", a;
}
var ys = "focusScope.autoFocusOnMount", bs = "focusScope.autoFocusOnUnmount", xp = { bubbles: !1, cancelable: !0 }, Tb = "FocusScope", rv = w.forwardRef((a, i) => {
  const {
    loop: o = !1,
    trapped: u = !1,
    onMountAutoFocus: s,
    onUnmountAutoFocus: f,
    ...d
  } = a, [p, v] = w.useState(null), h = _n(s), y = _n(f), b = w.useRef(null), x = wt(i, (E) => v(E)), A = w.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  w.useEffect(() => {
    if (u) {
      let E = function(D) {
        if (A.paused || !p) return;
        const L = D.target;
        p.contains(L) ? b.current = L : ul(b.current, { select: !0 });
      }, O = function(D) {
        if (A.paused || !p) return;
        const L = D.relatedTarget;
        L !== null && (p.contains(L) || ul(b.current, { select: !0 }));
      }, T = function(D) {
        if (document.activeElement === document.body)
          for (const Y of D)
            Y.removedNodes.length > 0 && ul(p);
      };
      document.addEventListener("focusin", E), document.addEventListener("focusout", O);
      const j = new MutationObserver(T);
      return p && j.observe(p, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", E), document.removeEventListener("focusout", O), j.disconnect();
      };
    }
  }, [u, p, A.paused]), w.useEffect(() => {
    if (p) {
      Ep.add(A);
      const E = document.activeElement;
      if (!p.contains(E)) {
        const T = new CustomEvent(ys, xp);
        p.addEventListener(ys, h), p.dispatchEvent(T), T.defaultPrevented || (_b(Ub(iv(p)), { select: !0 }), document.activeElement === E && ul(p));
      }
      return () => {
        p.removeEventListener(ys, h), setTimeout(() => {
          const T = new CustomEvent(bs, xp);
          p.addEventListener(bs, y), p.dispatchEvent(T), T.defaultPrevented || ul(E ?? document.body, { select: !0 }), p.removeEventListener(bs, y), Ep.remove(A);
        }, 0);
      };
    }
  }, [p, h, y, A]);
  const C = w.useCallback(
    (E) => {
      if (!o && !u || A.paused) return;
      const O = E.key === "Tab" && !E.altKey && !E.ctrlKey && !E.metaKey, T = document.activeElement;
      if (O && T) {
        const j = E.currentTarget, [D, L] = Nb(j);
        D && L ? !E.shiftKey && T === L ? (E.preventDefault(), o && ul(D, { select: !0 })) : E.shiftKey && T === D && (E.preventDefault(), o && ul(L, { select: !0 })) : T === j && E.preventDefault();
      }
    },
    [o, u, A.paused]
  );
  return /* @__PURE__ */ S.jsx(pt.div, { tabIndex: -1, ...d, ref: x, onKeyDown: C });
});
rv.displayName = Tb;
function _b(a, { select: i = !1 } = {}) {
  const o = document.activeElement;
  for (const u of a)
    if (ul(u, { select: i }), document.activeElement !== o) return;
}
function Nb(a) {
  const i = iv(a), o = Sp(i, a), u = Sp(i.reverse(), a);
  return [o, u];
}
function iv(a) {
  const i = [], o = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (u) => {
      const s = u.tagName === "INPUT" && u.type === "hidden";
      return u.disabled || u.hidden || s ? NodeFilter.FILTER_SKIP : u.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; o.nextNode(); ) i.push(o.currentNode);
  return i;
}
function Sp(a, i) {
  for (const o of a)
    if (!Db(o, { upTo: i })) return o;
}
function Db(a, { upTo: i }) {
  if (getComputedStyle(a).visibility === "hidden") return !0;
  for (; a; ) {
    if (i !== void 0 && a === i) return !1;
    if (getComputedStyle(a).display === "none") return !0;
    a = a.parentElement;
  }
  return !1;
}
function zb(a) {
  return a instanceof HTMLInputElement && "select" in a;
}
function ul(a, { select: i = !1 } = {}) {
  if (a && a.focus) {
    const o = document.activeElement;
    a.focus({ preventScroll: !0 }), a !== o && zb(a) && i && a.select();
  }
}
var Ep = jb();
function jb() {
  let a = [];
  return {
    add(i) {
      const o = a[0];
      i !== o && (o == null || o.pause()), a = wp(a, i), a.unshift(i);
    },
    remove(i) {
      var o;
      a = wp(a, i), (o = a[0]) == null || o.resume();
    }
  };
}
function wp(a, i) {
  const o = [...a], u = o.indexOf(i);
  return u !== -1 && o.splice(u, 1), o;
}
function Ub(a) {
  return a.filter((i) => i.tagName !== "A");
}
var Lb = $p[" useId ".trim().toString()] || (() => {
}), Bb = 0;
function Us(a) {
  const [i, o] = w.useState(Lb());
  return ol(() => {
    o((u) => u ?? String(Bb++));
  }, [a]), a || (i ? `radix-${i}` : "");
}
const Hb = ["top", "right", "bottom", "left"], cl = Math.min, Nt = Math.max, Bu = Math.round, Cu = Math.floor, rn = (a) => ({
  x: a,
  y: a
}), kb = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Gb = {
  start: "end",
  end: "start"
};
function Ls(a, i, o) {
  return Nt(a, cl(i, o));
}
function Nn(a, i) {
  return typeof a == "function" ? a(i) : a;
}
function Dn(a) {
  return a.split("-")[0];
}
function ka(a) {
  return a.split("-")[1];
}
function Is(a) {
  return a === "x" ? "y" : "x";
}
function Ws(a) {
  return a === "y" ? "height" : "width";
}
function Tn(a) {
  return ["top", "bottom"].includes(Dn(a)) ? "y" : "x";
}
function ef(a) {
  return Is(Tn(a));
}
function qb(a, i, o) {
  o === void 0 && (o = !1);
  const u = ka(a), s = ef(a), f = Ws(s);
  let d = s === "x" ? u === (o ? "end" : "start") ? "right" : "left" : u === "start" ? "bottom" : "top";
  return i.reference[f] > i.floating[f] && (d = Hu(d)), [d, Hu(d)];
}
function Yb(a) {
  const i = Hu(a);
  return [Bs(a), i, Bs(i)];
}
function Bs(a) {
  return a.replace(/start|end/g, (i) => Gb[i]);
}
function Vb(a, i, o) {
  const u = ["left", "right"], s = ["right", "left"], f = ["top", "bottom"], d = ["bottom", "top"];
  switch (a) {
    case "top":
    case "bottom":
      return o ? i ? s : u : i ? u : s;
    case "left":
    case "right":
      return i ? f : d;
    default:
      return [];
  }
}
function Xb(a, i, o, u) {
  const s = ka(a);
  let f = Vb(Dn(a), o === "start", u);
  return s && (f = f.map((d) => d + "-" + s), i && (f = f.concat(f.map(Bs)))), f;
}
function Hu(a) {
  return a.replace(/left|right|bottom|top/g, (i) => kb[i]);
}
function Qb(a) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...a
  };
}
function uv(a) {
  return typeof a != "number" ? Qb(a) : {
    top: a,
    right: a,
    bottom: a,
    left: a
  };
}
function ku(a) {
  const {
    x: i,
    y: o,
    width: u,
    height: s
  } = a;
  return {
    width: u,
    height: s,
    top: o,
    left: i,
    right: i + u,
    bottom: o + s,
    x: i,
    y: o
  };
}
function Ap(a, i, o) {
  let {
    reference: u,
    floating: s
  } = a;
  const f = Tn(i), d = ef(i), p = Ws(d), v = Dn(i), h = f === "y", y = u.x + u.width / 2 - s.width / 2, b = u.y + u.height / 2 - s.height / 2, x = u[p] / 2 - s[p] / 2;
  let A;
  switch (v) {
    case "top":
      A = {
        x: y,
        y: u.y - s.height
      };
      break;
    case "bottom":
      A = {
        x: y,
        y: u.y + u.height
      };
      break;
    case "right":
      A = {
        x: u.x + u.width,
        y: b
      };
      break;
    case "left":
      A = {
        x: u.x - s.width,
        y: b
      };
      break;
    default:
      A = {
        x: u.x,
        y: u.y
      };
  }
  switch (ka(i)) {
    case "start":
      A[d] -= x * (o && h ? -1 : 1);
      break;
    case "end":
      A[d] += x * (o && h ? -1 : 1);
      break;
  }
  return A;
}
const Zb = async (a, i, o) => {
  const {
    placement: u = "bottom",
    strategy: s = "absolute",
    middleware: f = [],
    platform: d
  } = o, p = f.filter(Boolean), v = await (d.isRTL == null ? void 0 : d.isRTL(i));
  let h = await d.getElementRects({
    reference: a,
    floating: i,
    strategy: s
  }), {
    x: y,
    y: b
  } = Ap(h, u, v), x = u, A = {}, C = 0;
  for (let E = 0; E < p.length; E++) {
    const {
      name: O,
      fn: T
    } = p[E], {
      x: j,
      y: D,
      data: L,
      reset: Y
    } = await T({
      x: y,
      y: b,
      initialPlacement: u,
      placement: x,
      strategy: s,
      middlewareData: A,
      rects: h,
      platform: d,
      elements: {
        reference: a,
        floating: i
      }
    });
    y = j ?? y, b = D ?? b, A = {
      ...A,
      [O]: {
        ...A[O],
        ...L
      }
    }, Y && C <= 50 && (C++, typeof Y == "object" && (Y.placement && (x = Y.placement), Y.rects && (h = Y.rects === !0 ? await d.getElementRects({
      reference: a,
      floating: i,
      strategy: s
    }) : Y.rects), {
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
async function Pr(a, i) {
  var o;
  i === void 0 && (i = {});
  const {
    x: u,
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
  } = Nn(i, a), C = uv(A), O = p[x ? b === "floating" ? "reference" : "floating" : b], T = ku(await f.getClippingRect({
    element: (o = await (f.isElement == null ? void 0 : f.isElement(O))) == null || o ? O : O.contextElement || await (f.getDocumentElement == null ? void 0 : f.getDocumentElement(p.floating)),
    boundary: h,
    rootBoundary: y,
    strategy: v
  })), j = b === "floating" ? {
    x: u,
    y: s,
    width: d.floating.width,
    height: d.floating.height
  } : d.reference, D = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(p.floating)), L = await (f.isElement == null ? void 0 : f.isElement(D)) ? await (f.getScale == null ? void 0 : f.getScale(D)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, Y = ku(f.convertOffsetParentRelativeRectToViewportRelativeRect ? await f.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: p,
    rect: j,
    offsetParent: D,
    strategy: v
  }) : j);
  return {
    top: (T.top - Y.top + C.top) / L.y,
    bottom: (Y.bottom - T.bottom + C.bottom) / L.y,
    left: (T.left - Y.left + C.left) / L.x,
    right: (Y.right - T.right + C.right) / L.x
  };
}
const Kb = (a) => ({
  name: "arrow",
  options: a,
  async fn(i) {
    const {
      x: o,
      y: u,
      placement: s,
      rects: f,
      platform: d,
      elements: p,
      middlewareData: v
    } = i, {
      element: h,
      padding: y = 0
    } = Nn(a, i) || {};
    if (h == null)
      return {};
    const b = uv(y), x = {
      x: o,
      y: u
    }, A = ef(s), C = Ws(A), E = await d.getDimensions(h), O = A === "y", T = O ? "top" : "left", j = O ? "bottom" : "right", D = O ? "clientHeight" : "clientWidth", L = f.reference[C] + f.reference[A] - x[A] - f.floating[C], Y = x[A] - f.reference[A], J = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(h));
    let Q = J ? J[D] : 0;
    (!Q || !await (d.isElement == null ? void 0 : d.isElement(J))) && (Q = p.floating[D] || f.floating[C]);
    const H = L / 2 - Y / 2, ee = Q / 2 - E[C] / 2 - 1, le = cl(b[T], ee), ae = cl(b[j], ee), oe = le, me = Q - E[C] - ae, he = Q / 2 - E[C] / 2 + H, V = Ls(oe, he, me), N = !v.arrow && ka(s) != null && he !== V && f.reference[C] / 2 - (he < oe ? le : ae) - E[C] / 2 < 0, Z = N ? he < oe ? he - oe : he - me : 0;
    return {
      [A]: x[A] + Z,
      data: {
        [A]: V,
        centerOffset: he - V - Z,
        ...N && {
          alignmentOffset: Z
        }
      },
      reset: N
    };
  }
}), Jb = function(a) {
  return a === void 0 && (a = {}), {
    name: "flip",
    options: a,
    async fn(i) {
      var o, u;
      const {
        placement: s,
        middlewareData: f,
        rects: d,
        initialPlacement: p,
        platform: v,
        elements: h
      } = i, {
        mainAxis: y = !0,
        crossAxis: b = !0,
        fallbackPlacements: x,
        fallbackStrategy: A = "bestFit",
        fallbackAxisSideDirection: C = "none",
        flipAlignment: E = !0,
        ...O
      } = Nn(a, i);
      if ((o = f.arrow) != null && o.alignmentOffset)
        return {};
      const T = Dn(s), j = Tn(p), D = Dn(p) === p, L = await (v.isRTL == null ? void 0 : v.isRTL(h.floating)), Y = x || (D || !E ? [Hu(p)] : Yb(p)), J = C !== "none";
      !x && J && Y.push(...Xb(p, E, C, L));
      const Q = [p, ...Y], H = await Pr(i, O), ee = [];
      let le = ((u = f.flip) == null ? void 0 : u.overflows) || [];
      if (y && ee.push(H[T]), b) {
        const V = qb(s, d, L);
        ee.push(H[V[0]], H[V[1]]);
      }
      if (le = [...le, {
        placement: s,
        overflows: ee
      }], !ee.every((V) => V <= 0)) {
        var ae, oe;
        const V = (((ae = f.flip) == null ? void 0 : ae.index) || 0) + 1, N = Q[V];
        if (N) {
          var me;
          const k = b === "alignment" ? j !== Tn(N) : !1, P = ((me = le[0]) == null ? void 0 : me.overflows[0]) > 0;
          if (!k || P)
            return {
              data: {
                index: V,
                overflows: le
              },
              reset: {
                placement: N
              }
            };
        }
        let Z = (oe = le.filter((k) => k.overflows[0] <= 0).sort((k, P) => k.overflows[1] - P.overflows[1])[0]) == null ? void 0 : oe.placement;
        if (!Z)
          switch (A) {
            case "bestFit": {
              var he;
              const k = (he = le.filter((P) => {
                if (J) {
                  const M = Tn(P.placement);
                  return M === j || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  M === "y";
                }
                return !0;
              }).map((P) => [P.placement, P.overflows.filter((M) => M > 0).reduce((M, X) => M + X, 0)]).sort((P, M) => P[1] - M[1])[0]) == null ? void 0 : he[0];
              k && (Z = k);
              break;
            }
            case "initialPlacement":
              Z = p;
              break;
          }
        if (s !== Z)
          return {
            reset: {
              placement: Z
            }
          };
      }
      return {};
    }
  };
};
function Mp(a, i) {
  return {
    top: a.top - i.height,
    right: a.right - i.width,
    bottom: a.bottom - i.height,
    left: a.left - i.width
  };
}
function Cp(a) {
  return Hb.some((i) => a[i] >= 0);
}
const Fb = function(a) {
  return a === void 0 && (a = {}), {
    name: "hide",
    options: a,
    async fn(i) {
      const {
        rects: o
      } = i, {
        strategy: u = "referenceHidden",
        ...s
      } = Nn(a, i);
      switch (u) {
        case "referenceHidden": {
          const f = await Pr(i, {
            ...s,
            elementContext: "reference"
          }), d = Mp(f, o.reference);
          return {
            data: {
              referenceHiddenOffsets: d,
              referenceHidden: Cp(d)
            }
          };
        }
        case "escaped": {
          const f = await Pr(i, {
            ...s,
            altBoundary: !0
          }), d = Mp(f, o.floating);
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
async function $b(a, i) {
  const {
    placement: o,
    platform: u,
    elements: s
  } = a, f = await (u.isRTL == null ? void 0 : u.isRTL(s.floating)), d = Dn(o), p = ka(o), v = Tn(o) === "y", h = ["left", "top"].includes(d) ? -1 : 1, y = f && v ? -1 : 1, b = Nn(i, a);
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
const Pb = function(a) {
  return a === void 0 && (a = 0), {
    name: "offset",
    options: a,
    async fn(i) {
      var o, u;
      const {
        x: s,
        y: f,
        placement: d,
        middlewareData: p
      } = i, v = await $b(i, a);
      return d === ((o = p.offset) == null ? void 0 : o.placement) && (u = p.arrow) != null && u.alignmentOffset ? {} : {
        x: s + v.x,
        y: f + v.y,
        data: {
          ...v,
          placement: d
        }
      };
    }
  };
}, Ib = function(a) {
  return a === void 0 && (a = {}), {
    name: "shift",
    options: a,
    async fn(i) {
      const {
        x: o,
        y: u,
        placement: s
      } = i, {
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
      } = Nn(a, i), h = {
        x: o,
        y: u
      }, y = await Pr(i, v), b = Tn(Dn(s)), x = Is(b);
      let A = h[x], C = h[b];
      if (f) {
        const O = x === "y" ? "top" : "left", T = x === "y" ? "bottom" : "right", j = A + y[O], D = A - y[T];
        A = Ls(j, A, D);
      }
      if (d) {
        const O = b === "y" ? "top" : "left", T = b === "y" ? "bottom" : "right", j = C + y[O], D = C - y[T];
        C = Ls(j, C, D);
      }
      const E = p.fn({
        ...i,
        [x]: A,
        [b]: C
      });
      return {
        ...E,
        data: {
          x: E.x - o,
          y: E.y - u,
          enabled: {
            [x]: f,
            [b]: d
          }
        }
      };
    }
  };
}, Wb = function(a) {
  return a === void 0 && (a = {}), {
    options: a,
    fn(i) {
      const {
        x: o,
        y: u,
        placement: s,
        rects: f,
        middlewareData: d
      } = i, {
        offset: p = 0,
        mainAxis: v = !0,
        crossAxis: h = !0
      } = Nn(a, i), y = {
        x: o,
        y: u
      }, b = Tn(s), x = Is(b);
      let A = y[x], C = y[b];
      const E = Nn(p, i), O = typeof E == "number" ? {
        mainAxis: E,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...E
      };
      if (v) {
        const D = x === "y" ? "height" : "width", L = f.reference[x] - f.floating[D] + O.mainAxis, Y = f.reference[x] + f.reference[D] - O.mainAxis;
        A < L ? A = L : A > Y && (A = Y);
      }
      if (h) {
        var T, j;
        const D = x === "y" ? "width" : "height", L = ["top", "left"].includes(Dn(s)), Y = f.reference[b] - f.floating[D] + (L && ((T = d.offset) == null ? void 0 : T[b]) || 0) + (L ? 0 : O.crossAxis), J = f.reference[b] + f.reference[D] + (L ? 0 : ((j = d.offset) == null ? void 0 : j[b]) || 0) - (L ? O.crossAxis : 0);
        C < Y ? C = Y : C > J && (C = J);
      }
      return {
        [x]: A,
        [b]: C
      };
    }
  };
}, e1 = function(a) {
  return a === void 0 && (a = {}), {
    name: "size",
    options: a,
    async fn(i) {
      var o, u;
      const {
        placement: s,
        rects: f,
        platform: d,
        elements: p
      } = i, {
        apply: v = () => {
        },
        ...h
      } = Nn(a, i), y = await Pr(i, h), b = Dn(s), x = ka(s), A = Tn(s) === "y", {
        width: C,
        height: E
      } = f.floating;
      let O, T;
      b === "top" || b === "bottom" ? (O = b, T = x === (await (d.isRTL == null ? void 0 : d.isRTL(p.floating)) ? "start" : "end") ? "left" : "right") : (T = b, O = x === "end" ? "top" : "bottom");
      const j = E - y.top - y.bottom, D = C - y.left - y.right, L = cl(E - y[O], j), Y = cl(C - y[T], D), J = !i.middlewareData.shift;
      let Q = L, H = Y;
      if ((o = i.middlewareData.shift) != null && o.enabled.x && (H = D), (u = i.middlewareData.shift) != null && u.enabled.y && (Q = j), J && !x) {
        const le = Nt(y.left, 0), ae = Nt(y.right, 0), oe = Nt(y.top, 0), me = Nt(y.bottom, 0);
        A ? H = C - 2 * (le !== 0 || ae !== 0 ? le + ae : Nt(y.left, y.right)) : Q = E - 2 * (oe !== 0 || me !== 0 ? oe + me : Nt(y.top, y.bottom));
      }
      await v({
        ...i,
        availableWidth: H,
        availableHeight: Q
      });
      const ee = await d.getDimensions(p.floating);
      return C !== ee.width || E !== ee.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Qu() {
  return typeof window < "u";
}
function Ga(a) {
  return ov(a) ? (a.nodeName || "").toLowerCase() : "#document";
}
function Dt(a) {
  var i;
  return (a == null || (i = a.ownerDocument) == null ? void 0 : i.defaultView) || window;
}
function on(a) {
  var i;
  return (i = (ov(a) ? a.ownerDocument : a.document) || window.document) == null ? void 0 : i.documentElement;
}
function ov(a) {
  return Qu() ? a instanceof Node || a instanceof Dt(a).Node : !1;
}
function Jt(a) {
  return Qu() ? a instanceof Element || a instanceof Dt(a).Element : !1;
}
function un(a) {
  return Qu() ? a instanceof HTMLElement || a instanceof Dt(a).HTMLElement : !1;
}
function Rp(a) {
  return !Qu() || typeof ShadowRoot > "u" ? !1 : a instanceof ShadowRoot || a instanceof Dt(a).ShadowRoot;
}
function ri(a) {
  const {
    overflow: i,
    overflowX: o,
    overflowY: u,
    display: s
  } = Ft(a);
  return /auto|scroll|overlay|hidden|clip/.test(i + u + o) && !["inline", "contents"].includes(s);
}
function t1(a) {
  return ["table", "td", "th"].includes(Ga(a));
}
function Zu(a) {
  return [":popover-open", ":modal"].some((i) => {
    try {
      return a.matches(i);
    } catch {
      return !1;
    }
  });
}
function tf(a) {
  const i = nf(), o = Jt(a) ? Ft(a) : a;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((u) => o[u] ? o[u] !== "none" : !1) || (o.containerType ? o.containerType !== "normal" : !1) || !i && (o.backdropFilter ? o.backdropFilter !== "none" : !1) || !i && (o.filter ? o.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((u) => (o.willChange || "").includes(u)) || ["paint", "layout", "strict", "content"].some((u) => (o.contain || "").includes(u));
}
function n1(a) {
  let i = sl(a);
  for (; un(i) && !Ha(i); ) {
    if (tf(i))
      return i;
    if (Zu(i))
      return null;
    i = sl(i);
  }
  return null;
}
function nf() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ha(a) {
  return ["html", "body", "#document"].includes(Ga(a));
}
function Ft(a) {
  return Dt(a).getComputedStyle(a);
}
function Ku(a) {
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
  const i = (
    // Step into the shadow DOM of the parent of a slotted node.
    a.assignedSlot || // DOM Element detected.
    a.parentNode || // ShadowRoot detected.
    Rp(a) && a.host || // Fallback.
    on(a)
  );
  return Rp(i) ? i.host : i;
}
function cv(a) {
  const i = sl(a);
  return Ha(i) ? a.ownerDocument ? a.ownerDocument.body : a.body : un(i) && ri(i) ? i : cv(i);
}
function Ir(a, i, o) {
  var u;
  i === void 0 && (i = []), o === void 0 && (o = !0);
  const s = cv(a), f = s === ((u = a.ownerDocument) == null ? void 0 : u.body), d = Dt(s);
  if (f) {
    const p = Hs(d);
    return i.concat(d, d.visualViewport || [], ri(s) ? s : [], p && o ? Ir(p) : []);
  }
  return i.concat(s, Ir(s, [], o));
}
function Hs(a) {
  return a.parent && Object.getPrototypeOf(a.parent) ? a.frameElement : null;
}
function sv(a) {
  const i = Ft(a);
  let o = parseFloat(i.width) || 0, u = parseFloat(i.height) || 0;
  const s = un(a), f = s ? a.offsetWidth : o, d = s ? a.offsetHeight : u, p = Bu(o) !== f || Bu(u) !== d;
  return p && (o = f, u = d), {
    width: o,
    height: u,
    $: p
  };
}
function lf(a) {
  return Jt(a) ? a : a.contextElement;
}
function La(a) {
  const i = lf(a);
  if (!un(i))
    return rn(1);
  const o = i.getBoundingClientRect(), {
    width: u,
    height: s,
    $: f
  } = sv(i);
  let d = (f ? Bu(o.width) : o.width) / u, p = (f ? Bu(o.height) : o.height) / s;
  return (!d || !Number.isFinite(d)) && (d = 1), (!p || !Number.isFinite(p)) && (p = 1), {
    x: d,
    y: p
  };
}
const l1 = /* @__PURE__ */ rn(0);
function fv(a) {
  const i = Dt(a);
  return !nf() || !i.visualViewport ? l1 : {
    x: i.visualViewport.offsetLeft,
    y: i.visualViewport.offsetTop
  };
}
function a1(a, i, o) {
  return i === void 0 && (i = !1), !o || i && o !== Dt(a) ? !1 : i;
}
function Bl(a, i, o, u) {
  i === void 0 && (i = !1), o === void 0 && (o = !1);
  const s = a.getBoundingClientRect(), f = lf(a);
  let d = rn(1);
  i && (u ? Jt(u) && (d = La(u)) : d = La(a));
  const p = a1(f, o, u) ? fv(f) : rn(0);
  let v = (s.left + p.x) / d.x, h = (s.top + p.y) / d.y, y = s.width / d.x, b = s.height / d.y;
  if (f) {
    const x = Dt(f), A = u && Jt(u) ? Dt(u) : u;
    let C = x, E = Hs(C);
    for (; E && u && A !== C; ) {
      const O = La(E), T = E.getBoundingClientRect(), j = Ft(E), D = T.left + (E.clientLeft + parseFloat(j.paddingLeft)) * O.x, L = T.top + (E.clientTop + parseFloat(j.paddingTop)) * O.y;
      v *= O.x, h *= O.y, y *= O.x, b *= O.y, v += D, h += L, C = Dt(E), E = Hs(C);
    }
  }
  return ku({
    width: y,
    height: b,
    x: v,
    y: h
  });
}
function af(a, i) {
  const o = Ku(a).scrollLeft;
  return i ? i.left + o : Bl(on(a)).left + o;
}
function dv(a, i, o) {
  o === void 0 && (o = !1);
  const u = a.getBoundingClientRect(), s = u.left + i.scrollLeft - (o ? 0 : (
    // RTL <body> scrollbar.
    af(a, u)
  )), f = u.top + i.scrollTop;
  return {
    x: s,
    y: f
  };
}
function r1(a) {
  let {
    elements: i,
    rect: o,
    offsetParent: u,
    strategy: s
  } = a;
  const f = s === "fixed", d = on(u), p = i ? Zu(i.floating) : !1;
  if (u === d || p && f)
    return o;
  let v = {
    scrollLeft: 0,
    scrollTop: 0
  }, h = rn(1);
  const y = rn(0), b = un(u);
  if ((b || !b && !f) && ((Ga(u) !== "body" || ri(d)) && (v = Ku(u)), un(u))) {
    const A = Bl(u);
    h = La(u), y.x = A.x + u.clientLeft, y.y = A.y + u.clientTop;
  }
  const x = d && !b && !f ? dv(d, v, !0) : rn(0);
  return {
    width: o.width * h.x,
    height: o.height * h.y,
    x: o.x * h.x - v.scrollLeft * h.x + y.x + x.x,
    y: o.y * h.y - v.scrollTop * h.y + y.y + x.y
  };
}
function i1(a) {
  return Array.from(a.getClientRects());
}
function u1(a) {
  const i = on(a), o = Ku(a), u = a.ownerDocument.body, s = Nt(i.scrollWidth, i.clientWidth, u.scrollWidth, u.clientWidth), f = Nt(i.scrollHeight, i.clientHeight, u.scrollHeight, u.clientHeight);
  let d = -o.scrollLeft + af(a);
  const p = -o.scrollTop;
  return Ft(u).direction === "rtl" && (d += Nt(i.clientWidth, u.clientWidth) - s), {
    width: s,
    height: f,
    x: d,
    y: p
  };
}
function o1(a, i) {
  const o = Dt(a), u = on(a), s = o.visualViewport;
  let f = u.clientWidth, d = u.clientHeight, p = 0, v = 0;
  if (s) {
    f = s.width, d = s.height;
    const h = nf();
    (!h || h && i === "fixed") && (p = s.offsetLeft, v = s.offsetTop);
  }
  return {
    width: f,
    height: d,
    x: p,
    y: v
  };
}
function c1(a, i) {
  const o = Bl(a, !0, i === "fixed"), u = o.top + a.clientTop, s = o.left + a.clientLeft, f = un(a) ? La(a) : rn(1), d = a.clientWidth * f.x, p = a.clientHeight * f.y, v = s * f.x, h = u * f.y;
  return {
    width: d,
    height: p,
    x: v,
    y: h
  };
}
function Op(a, i, o) {
  let u;
  if (i === "viewport")
    u = o1(a, o);
  else if (i === "document")
    u = u1(on(a));
  else if (Jt(i))
    u = c1(i, o);
  else {
    const s = fv(a);
    u = {
      x: i.x - s.x,
      y: i.y - s.y,
      width: i.width,
      height: i.height
    };
  }
  return ku(u);
}
function mv(a, i) {
  const o = sl(a);
  return o === i || !Jt(o) || Ha(o) ? !1 : Ft(o).position === "fixed" || mv(o, i);
}
function s1(a, i) {
  const o = i.get(a);
  if (o)
    return o;
  let u = Ir(a, [], !1).filter((p) => Jt(p) && Ga(p) !== "body"), s = null;
  const f = Ft(a).position === "fixed";
  let d = f ? sl(a) : a;
  for (; Jt(d) && !Ha(d); ) {
    const p = Ft(d), v = tf(d);
    !v && p.position === "fixed" && (s = null), (f ? !v && !s : !v && p.position === "static" && !!s && ["absolute", "fixed"].includes(s.position) || ri(d) && !v && mv(a, d)) ? u = u.filter((y) => y !== d) : s = p, d = sl(d);
  }
  return i.set(a, u), u;
}
function f1(a) {
  let {
    element: i,
    boundary: o,
    rootBoundary: u,
    strategy: s
  } = a;
  const d = [...o === "clippingAncestors" ? Zu(i) ? [] : s1(i, this._c) : [].concat(o), u], p = d[0], v = d.reduce((h, y) => {
    const b = Op(i, y, s);
    return h.top = Nt(b.top, h.top), h.right = cl(b.right, h.right), h.bottom = cl(b.bottom, h.bottom), h.left = Nt(b.left, h.left), h;
  }, Op(i, p, s));
  return {
    width: v.right - v.left,
    height: v.bottom - v.top,
    x: v.left,
    y: v.top
  };
}
function d1(a) {
  const {
    width: i,
    height: o
  } = sv(a);
  return {
    width: i,
    height: o
  };
}
function m1(a, i, o) {
  const u = un(i), s = on(i), f = o === "fixed", d = Bl(a, !0, f, i);
  let p = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const v = rn(0);
  function h() {
    v.x = af(s);
  }
  if (u || !u && !f)
    if ((Ga(i) !== "body" || ri(s)) && (p = Ku(i)), u) {
      const A = Bl(i, !0, f, i);
      v.x = A.x + i.clientLeft, v.y = A.y + i.clientTop;
    } else s && h();
  f && !u && s && h();
  const y = s && !u && !f ? dv(s, p) : rn(0), b = d.left + p.scrollLeft - v.x - y.x, x = d.top + p.scrollTop - v.y - y.y;
  return {
    x: b,
    y: x,
    width: d.width,
    height: d.height
  };
}
function xs(a) {
  return Ft(a).position === "static";
}
function Tp(a, i) {
  if (!un(a) || Ft(a).position === "fixed")
    return null;
  if (i)
    return i(a);
  let o = a.offsetParent;
  return on(a) === o && (o = o.ownerDocument.body), o;
}
function hv(a, i) {
  const o = Dt(a);
  if (Zu(a))
    return o;
  if (!un(a)) {
    let s = sl(a);
    for (; s && !Ha(s); ) {
      if (Jt(s) && !xs(s))
        return s;
      s = sl(s);
    }
    return o;
  }
  let u = Tp(a, i);
  for (; u && t1(u) && xs(u); )
    u = Tp(u, i);
  return u && Ha(u) && xs(u) && !tf(u) ? o : u || n1(a) || o;
}
const h1 = async function(a) {
  const i = this.getOffsetParent || hv, o = this.getDimensions, u = await o(a.floating);
  return {
    reference: m1(a.reference, await i(a.floating), a.strategy),
    floating: {
      x: 0,
      y: 0,
      width: u.width,
      height: u.height
    }
  };
};
function p1(a) {
  return Ft(a).direction === "rtl";
}
const v1 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: r1,
  getDocumentElement: on,
  getClippingRect: f1,
  getOffsetParent: hv,
  getElementRects: h1,
  getClientRects: i1,
  getDimensions: d1,
  getScale: La,
  isElement: Jt,
  isRTL: p1
};
function pv(a, i) {
  return a.x === i.x && a.y === i.y && a.width === i.width && a.height === i.height;
}
function g1(a, i) {
  let o = null, u;
  const s = on(a);
  function f() {
    var p;
    clearTimeout(u), (p = o) == null || p.disconnect(), o = null;
  }
  function d(p, v) {
    p === void 0 && (p = !1), v === void 0 && (v = 1), f();
    const h = a.getBoundingClientRect(), {
      left: y,
      top: b,
      width: x,
      height: A
    } = h;
    if (p || i(), !x || !A)
      return;
    const C = Cu(b), E = Cu(s.clientWidth - (y + x)), O = Cu(s.clientHeight - (b + A)), T = Cu(y), D = {
      rootMargin: -C + "px " + -E + "px " + -O + "px " + -T + "px",
      threshold: Nt(0, cl(1, v)) || 1
    };
    let L = !0;
    function Y(J) {
      const Q = J[0].intersectionRatio;
      if (Q !== v) {
        if (!L)
          return d();
        Q ? d(!1, Q) : u = setTimeout(() => {
          d(!1, 1e-7);
        }, 1e3);
      }
      Q === 1 && !pv(h, a.getBoundingClientRect()) && d(), L = !1;
    }
    try {
      o = new IntersectionObserver(Y, {
        ...D,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      o = new IntersectionObserver(Y, D);
    }
    o.observe(a);
  }
  return d(!0), f;
}
function y1(a, i, o, u) {
  u === void 0 && (u = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: f = !0,
    elementResize: d = typeof ResizeObserver == "function",
    layoutShift: p = typeof IntersectionObserver == "function",
    animationFrame: v = !1
  } = u, h = lf(a), y = s || f ? [...h ? Ir(h) : [], ...Ir(i)] : [];
  y.forEach((T) => {
    s && T.addEventListener("scroll", o, {
      passive: !0
    }), f && T.addEventListener("resize", o);
  });
  const b = h && p ? g1(h, o) : null;
  let x = -1, A = null;
  d && (A = new ResizeObserver((T) => {
    let [j] = T;
    j && j.target === h && A && (A.unobserve(i), cancelAnimationFrame(x), x = requestAnimationFrame(() => {
      var D;
      (D = A) == null || D.observe(i);
    })), o();
  }), h && !v && A.observe(h), A.observe(i));
  let C, E = v ? Bl(a) : null;
  v && O();
  function O() {
    const T = Bl(a);
    E && !pv(E, T) && o(), E = T, C = requestAnimationFrame(O);
  }
  return o(), () => {
    var T;
    y.forEach((j) => {
      s && j.removeEventListener("scroll", o), f && j.removeEventListener("resize", o);
    }), b == null || b(), (T = A) == null || T.disconnect(), A = null, v && cancelAnimationFrame(C);
  };
}
const b1 = Pb, x1 = Ib, S1 = Jb, E1 = e1, w1 = Fb, _p = Kb, A1 = Wb, M1 = (a, i, o) => {
  const u = /* @__PURE__ */ new Map(), s = {
    platform: v1,
    ...o
  }, f = {
    ...s.platform,
    _c: u
  };
  return Zb(a, i, {
    ...s,
    platform: f
  });
};
var ju = typeof document < "u" ? w.useLayoutEffect : w.useEffect;
function Gu(a, i) {
  if (a === i)
    return !0;
  if (typeof a != typeof i)
    return !1;
  if (typeof a == "function" && a.toString() === i.toString())
    return !0;
  let o, u, s;
  if (a && i && typeof a == "object") {
    if (Array.isArray(a)) {
      if (o = a.length, o !== i.length) return !1;
      for (u = o; u-- !== 0; )
        if (!Gu(a[u], i[u]))
          return !1;
      return !0;
    }
    if (s = Object.keys(a), o = s.length, o !== Object.keys(i).length)
      return !1;
    for (u = o; u-- !== 0; )
      if (!{}.hasOwnProperty.call(i, s[u]))
        return !1;
    for (u = o; u-- !== 0; ) {
      const f = s[u];
      if (!(f === "_owner" && a.$$typeof) && !Gu(a[f], i[f]))
        return !1;
    }
    return !0;
  }
  return a !== a && i !== i;
}
function vv(a) {
  return typeof window > "u" ? 1 : (a.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Np(a, i) {
  const o = vv(a);
  return Math.round(i * o) / o;
}
function Ss(a) {
  const i = w.useRef(a);
  return ju(() => {
    i.current = a;
  }), i;
}
function C1(a) {
  a === void 0 && (a = {});
  const {
    placement: i = "bottom",
    strategy: o = "absolute",
    middleware: u = [],
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
    strategy: o,
    placement: i,
    middlewareData: {},
    isPositioned: !1
  }), [x, A] = w.useState(u);
  Gu(x, u) || A(u);
  const [C, E] = w.useState(null), [O, T] = w.useState(null), j = w.useCallback((k) => {
    k !== J.current && (J.current = k, E(k));
  }, []), D = w.useCallback((k) => {
    k !== Q.current && (Q.current = k, T(k));
  }, []), L = f || C, Y = d || O, J = w.useRef(null), Q = w.useRef(null), H = w.useRef(y), ee = v != null, le = Ss(v), ae = Ss(s), oe = Ss(h), me = w.useCallback(() => {
    if (!J.current || !Q.current)
      return;
    const k = {
      placement: i,
      strategy: o,
      middleware: x
    };
    ae.current && (k.platform = ae.current), M1(J.current, Q.current, k).then((P) => {
      const M = {
        ...P,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: oe.current !== !1
      };
      he.current && !Gu(H.current, M) && (H.current = M, Ps.flushSync(() => {
        b(M);
      }));
    });
  }, [x, i, o, ae, oe]);
  ju(() => {
    h === !1 && H.current.isPositioned && (H.current.isPositioned = !1, b((k) => ({
      ...k,
      isPositioned: !1
    })));
  }, [h]);
  const he = w.useRef(!1);
  ju(() => (he.current = !0, () => {
    he.current = !1;
  }), []), ju(() => {
    if (L && (J.current = L), Y && (Q.current = Y), L && Y) {
      if (le.current)
        return le.current(L, Y, me);
      me();
    }
  }, [L, Y, me, le, ee]);
  const V = w.useMemo(() => ({
    reference: J,
    floating: Q,
    setReference: j,
    setFloating: D
  }), [j, D]), N = w.useMemo(() => ({
    reference: L,
    floating: Y
  }), [L, Y]), Z = w.useMemo(() => {
    const k = {
      position: o,
      left: 0,
      top: 0
    };
    if (!N.floating)
      return k;
    const P = Np(N.floating, y.x), M = Np(N.floating, y.y);
    return p ? {
      ...k,
      transform: "translate(" + P + "px, " + M + "px)",
      ...vv(N.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: o,
      left: P,
      top: M
    };
  }, [o, p, N.floating, y.x, y.y]);
  return w.useMemo(() => ({
    ...y,
    update: me,
    refs: V,
    elements: N,
    floatingStyles: Z
  }), [y, me, V, N, Z]);
}
const R1 = (a) => {
  function i(o) {
    return {}.hasOwnProperty.call(o, "current");
  }
  return {
    name: "arrow",
    options: a,
    fn(o) {
      const {
        element: u,
        padding: s
      } = typeof a == "function" ? a(o) : a;
      return u && i(u) ? u.current != null ? _p({
        element: u.current,
        padding: s
      }).fn(o) : {} : u ? _p({
        element: u,
        padding: s
      }).fn(o) : {};
    }
  };
}, O1 = (a, i) => ({
  ...b1(a),
  options: [a, i]
}), T1 = (a, i) => ({
  ...x1(a),
  options: [a, i]
}), _1 = (a, i) => ({
  ...A1(a),
  options: [a, i]
}), N1 = (a, i) => ({
  ...S1(a),
  options: [a, i]
}), D1 = (a, i) => ({
  ...E1(a),
  options: [a, i]
}), z1 = (a, i) => ({
  ...w1(a),
  options: [a, i]
}), j1 = (a, i) => ({
  ...R1(a),
  options: [a, i]
});
var U1 = "Arrow", gv = w.forwardRef((a, i) => {
  const { children: o, width: u = 10, height: s = 5, ...f } = a;
  return /* @__PURE__ */ S.jsx(
    pt.svg,
    {
      ...f,
      ref: i,
      width: u,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: a.asChild ? o : /* @__PURE__ */ S.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
gv.displayName = U1;
var L1 = gv;
function B1(a) {
  const [i, o] = w.useState(void 0);
  return ol(() => {
    if (a) {
      o({ width: a.offsetWidth, height: a.offsetHeight });
      const u = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const f = s[0];
        let d, p;
        if ("borderBoxSize" in f) {
          const v = f.borderBoxSize, h = Array.isArray(v) ? v[0] : v;
          d = h.inlineSize, p = h.blockSize;
        } else
          d = a.offsetWidth, p = a.offsetHeight;
        o({ width: d, height: p });
      });
      return u.observe(a, { box: "border-box" }), () => u.unobserve(a);
    } else
      o(void 0);
  }, [a]), i;
}
var rf = "Popper", [yv, bv] = ai(rf), [H1, xv] = yv(rf), Sv = (a) => {
  const { __scopePopper: i, children: o } = a, [u, s] = w.useState(null);
  return /* @__PURE__ */ S.jsx(H1, { scope: i, anchor: u, onAnchorChange: s, children: o });
};
Sv.displayName = rf;
var Ev = "PopperAnchor", wv = w.forwardRef(
  (a, i) => {
    const { __scopePopper: o, virtualRef: u, ...s } = a, f = xv(Ev, o), d = w.useRef(null), p = wt(i, d);
    return w.useEffect(() => {
      f.onAnchorChange((u == null ? void 0 : u.current) || d.current);
    }), u ? null : /* @__PURE__ */ S.jsx(pt.div, { ...s, ref: p });
  }
);
wv.displayName = Ev;
var uf = "PopperContent", [k1, G1] = yv(uf), Av = w.forwardRef(
  (a, i) => {
    var fe, ve, Me, Be, Re, ne;
    const {
      __scopePopper: o,
      side: u = "bottom",
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
    } = a, O = xv(uf, o), [T, j] = w.useState(null), D = wt(i, (Ce) => j(Ce)), [L, Y] = w.useState(null), J = B1(L), Q = (J == null ? void 0 : J.width) ?? 0, H = (J == null ? void 0 : J.height) ?? 0, ee = u + (f !== "center" ? "-" + f : ""), le = typeof y == "number" ? y : { top: 0, right: 0, bottom: 0, left: 0, ...y }, ae = Array.isArray(h) ? h : [h], oe = ae.length > 0, me = {
      padding: le,
      boundary: ae.filter(Y1),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: oe
    }, { refs: he, floatingStyles: V, placement: N, isPositioned: Z, middlewareData: k } = C1({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: ee,
      whileElementsMounted: (...Ce) => y1(...Ce, {
        animationFrame: A === "always"
      }),
      elements: {
        reference: O.anchor
      },
      middleware: [
        O1({ mainAxis: s + H, alignmentAxis: d }),
        v && T1({
          mainAxis: !0,
          crossAxis: !1,
          limiter: b === "partial" ? _1() : void 0,
          ...me
        }),
        v && N1({ ...me }),
        D1({
          ...me,
          apply: ({ elements: Ce, rects: He, availableWidth: Pe, availableHeight: gt }) => {
            const { width: Xe, height: Vt } = He.reference, ct = Ce.floating.style;
            ct.setProperty("--radix-popper-available-width", `${Pe}px`), ct.setProperty("--radix-popper-available-height", `${gt}px`), ct.setProperty("--radix-popper-anchor-width", `${Xe}px`), ct.setProperty("--radix-popper-anchor-height", `${Vt}px`);
          }
        }),
        L && j1({ element: L, padding: p }),
        V1({ arrowWidth: Q, arrowHeight: H }),
        x && z1({ strategy: "referenceHidden", ...me })
      ]
    }), [P, M] = Rv(N), X = _n(C);
    ol(() => {
      Z && (X == null || X());
    }, [Z, X]);
    const W = (fe = k.arrow) == null ? void 0 : fe.x, I = (ve = k.arrow) == null ? void 0 : ve.y, te = ((Me = k.arrow) == null ? void 0 : Me.centerOffset) !== 0, [ge, ce] = w.useState();
    return ol(() => {
      T && ce(window.getComputedStyle(T).zIndex);
    }, [T]), /* @__PURE__ */ S.jsx(
      "div",
      {
        ref: he.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...V,
          transform: Z ? V.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ge,
          "--radix-popper-transform-origin": [
            (Be = k.transformOrigin) == null ? void 0 : Be.x,
            (Re = k.transformOrigin) == null ? void 0 : Re.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((ne = k.hide) == null ? void 0 : ne.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: a.dir,
        children: /* @__PURE__ */ S.jsx(
          k1,
          {
            scope: o,
            placedSide: P,
            onArrowChange: Y,
            arrowX: W,
            arrowY: I,
            shouldHideArrow: te,
            children: /* @__PURE__ */ S.jsx(
              pt.div,
              {
                "data-side": P,
                "data-align": M,
                ...E,
                ref: D,
                style: {
                  ...E.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: Z ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Av.displayName = uf;
var Mv = "PopperArrow", q1 = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Cv = w.forwardRef(function(i, o) {
  const { __scopePopper: u, ...s } = i, f = G1(Mv, u), d = q1[f.placedSide];
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
          L1,
          {
            ...s,
            ref: o,
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
Cv.displayName = Mv;
function Y1(a) {
  return a !== null;
}
var V1 = (a) => ({
  name: "transformOrigin",
  options: a,
  fn(i) {
    var O, T, j;
    const { placement: o, rects: u, middlewareData: s } = i, d = ((O = s.arrow) == null ? void 0 : O.centerOffset) !== 0, p = d ? 0 : a.arrowWidth, v = d ? 0 : a.arrowHeight, [h, y] = Rv(o), b = { start: "0%", center: "50%", end: "100%" }[y], x = (((T = s.arrow) == null ? void 0 : T.x) ?? 0) + p / 2, A = (((j = s.arrow) == null ? void 0 : j.y) ?? 0) + v / 2;
    let C = "", E = "";
    return h === "bottom" ? (C = d ? b : `${x}px`, E = `${-v}px`) : h === "top" ? (C = d ? b : `${x}px`, E = `${u.floating.height + v}px`) : h === "right" ? (C = `${-v}px`, E = d ? b : `${A}px`) : h === "left" && (C = `${u.floating.width + v}px`, E = d ? b : `${A}px`), { data: { x: C, y: E } };
  }
});
function Rv(a) {
  const [i, o = "center"] = a.split("-");
  return [i, o];
}
var X1 = Sv, Q1 = wv, Z1 = Av, K1 = Cv, J1 = "Portal", Ov = w.forwardRef((a, i) => {
  var p;
  const { container: o, ...u } = a, [s, f] = w.useState(!1);
  ol(() => f(!0), []);
  const d = o || s && ((p = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : p.body);
  return d ? fb.createPortal(/* @__PURE__ */ S.jsx(pt.div, { ...u, ref: i }), d) : null;
});
Ov.displayName = J1;
function F1(a, i) {
  return w.useReducer((o, u) => i[o][u] ?? o, a);
}
var ii = (a) => {
  const { present: i, children: o } = a, u = $1(i), s = typeof o == "function" ? o({ present: u.isPresent }) : w.Children.only(o), f = wt(u.ref, P1(s));
  return typeof o == "function" || u.isPresent ? w.cloneElement(s, { ref: f }) : null;
};
ii.displayName = "Presence";
function $1(a) {
  const [i, o] = w.useState(), u = w.useRef(null), s = w.useRef(a), f = w.useRef("none"), d = a ? "mounted" : "unmounted", [p, v] = F1(d, {
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
    const h = Ru(u.current);
    f.current = p === "mounted" ? h : "none";
  }, [p]), ol(() => {
    const h = u.current, y = s.current;
    if (y !== a) {
      const x = f.current, A = Ru(h);
      a ? v("MOUNT") : A === "none" || (h == null ? void 0 : h.display) === "none" ? v("UNMOUNT") : v(y && x !== A ? "ANIMATION_OUT" : "UNMOUNT"), s.current = a;
    }
  }, [a, v]), ol(() => {
    if (i) {
      let h;
      const y = i.ownerDocument.defaultView ?? window, b = (A) => {
        const E = Ru(u.current).includes(A.animationName);
        if (A.target === i && E && (v("ANIMATION_END"), !s.current)) {
          const O = i.style.animationFillMode;
          i.style.animationFillMode = "forwards", h = y.setTimeout(() => {
            i.style.animationFillMode === "forwards" && (i.style.animationFillMode = O);
          });
        }
      }, x = (A) => {
        A.target === i && (f.current = Ru(u.current));
      };
      return i.addEventListener("animationstart", x), i.addEventListener("animationcancel", b), i.addEventListener("animationend", b), () => {
        y.clearTimeout(h), i.removeEventListener("animationstart", x), i.removeEventListener("animationcancel", b), i.removeEventListener("animationend", b);
      };
    } else
      v("ANIMATION_END");
  }, [i, v]), {
    isPresent: ["mounted", "unmountSuspended"].includes(p),
    ref: w.useCallback((h) => {
      u.current = h ? getComputedStyle(h) : null, o(h);
    }, [])
  };
}
function Ru(a) {
  return (a == null ? void 0 : a.animationName) || "none";
}
function P1(a) {
  var u, s;
  let i = (u = Object.getOwnPropertyDescriptor(a.props, "ref")) == null ? void 0 : u.get, o = i && "isReactWarning" in i && i.isReactWarning;
  return o ? a.ref : (i = (s = Object.getOwnPropertyDescriptor(a, "ref")) == null ? void 0 : s.get, o = i && "isReactWarning" in i && i.isReactWarning, o ? a.props.ref : a.props.ref || a.ref);
}
var Es = "rovingFocusGroup.onEntryFocus", I1 = { bubbles: !1, cancelable: !0 }, ui = "RovingFocusGroup", [ks, Tv, W1] = ev(ui), [ex, _v] = ai(
  ui,
  [W1]
), [tx, nx] = ex(ui), Nv = w.forwardRef(
  (a, i) => /* @__PURE__ */ S.jsx(ks.Provider, { scope: a.__scopeRovingFocusGroup, children: /* @__PURE__ */ S.jsx(ks.Slot, { scope: a.__scopeRovingFocusGroup, children: /* @__PURE__ */ S.jsx(lx, { ...a, ref: i }) }) })
);
Nv.displayName = ui;
var lx = w.forwardRef((a, i) => {
  const {
    __scopeRovingFocusGroup: o,
    orientation: u,
    loop: s = !1,
    dir: f,
    currentTabStopId: d,
    defaultCurrentTabStopId: p,
    onCurrentTabStopIdChange: v,
    onEntryFocus: h,
    preventScrollOnEntryFocus: y = !1,
    ...b
  } = a, x = w.useRef(null), A = wt(i, x), C = tv(f), [E, O] = Ip({
    prop: d,
    defaultProp: p ?? null,
    onChange: v,
    caller: ui
  }), [T, j] = w.useState(!1), D = _n(h), L = Tv(o), Y = w.useRef(!1), [J, Q] = w.useState(0);
  return w.useEffect(() => {
    const H = x.current;
    if (H)
      return H.addEventListener(Es, D), () => H.removeEventListener(Es, D);
  }, [D]), /* @__PURE__ */ S.jsx(
    tx,
    {
      scope: o,
      orientation: u,
      dir: C,
      loop: s,
      currentTabStopId: E,
      onItemFocus: w.useCallback(
        (H) => O(H),
        [O]
      ),
      onItemShiftTab: w.useCallback(() => j(!0), []),
      onFocusableItemAdd: w.useCallback(
        () => Q((H) => H + 1),
        []
      ),
      onFocusableItemRemove: w.useCallback(
        () => Q((H) => H - 1),
        []
      ),
      children: /* @__PURE__ */ S.jsx(
        pt.div,
        {
          tabIndex: T || J === 0 ? -1 : 0,
          "data-orientation": u,
          ...b,
          ref: A,
          style: { outline: "none", ...a.style },
          onMouseDown: Te(a.onMouseDown, () => {
            Y.current = !0;
          }),
          onFocus: Te(a.onFocus, (H) => {
            const ee = !Y.current;
            if (H.target === H.currentTarget && ee && !T) {
              const le = new CustomEvent(Es, I1);
              if (H.currentTarget.dispatchEvent(le), !le.defaultPrevented) {
                const ae = L().filter((N) => N.focusable), oe = ae.find((N) => N.active), me = ae.find((N) => N.id === E), V = [oe, me, ...ae].filter(
                  Boolean
                ).map((N) => N.ref.current);
                jv(V, y);
              }
            }
            Y.current = !1;
          }),
          onBlur: Te(a.onBlur, () => j(!1))
        }
      )
    }
  );
}), Dv = "RovingFocusGroupItem", zv = w.forwardRef(
  (a, i) => {
    const {
      __scopeRovingFocusGroup: o,
      focusable: u = !0,
      active: s = !1,
      tabStopId: f,
      children: d,
      ...p
    } = a, v = Us(), h = f || v, y = nx(Dv, o), b = y.currentTabStopId === h, x = Tv(o), { onFocusableItemAdd: A, onFocusableItemRemove: C, currentTabStopId: E } = y;
    return w.useEffect(() => {
      if (u)
        return A(), () => C();
    }, [u, A, C]), /* @__PURE__ */ S.jsx(
      ks.ItemSlot,
      {
        scope: o,
        id: h,
        focusable: u,
        active: s,
        children: /* @__PURE__ */ S.jsx(
          pt.span,
          {
            tabIndex: b ? 0 : -1,
            "data-orientation": y.orientation,
            ...p,
            ref: i,
            onMouseDown: Te(a.onMouseDown, (O) => {
              u ? y.onItemFocus(h) : O.preventDefault();
            }),
            onFocus: Te(a.onFocus, () => y.onItemFocus(h)),
            onKeyDown: Te(a.onKeyDown, (O) => {
              if (O.key === "Tab" && O.shiftKey) {
                y.onItemShiftTab();
                return;
              }
              if (O.target !== O.currentTarget) return;
              const T = ix(O, y.orientation, y.dir);
              if (T !== void 0) {
                if (O.metaKey || O.ctrlKey || O.altKey || O.shiftKey) return;
                O.preventDefault();
                let D = x().filter((L) => L.focusable).map((L) => L.ref.current);
                if (T === "last") D.reverse();
                else if (T === "prev" || T === "next") {
                  T === "prev" && D.reverse();
                  const L = D.indexOf(O.currentTarget);
                  D = y.loop ? ux(D, L + 1) : D.slice(L + 1);
                }
                setTimeout(() => jv(D));
              }
            }),
            children: typeof d == "function" ? d({ isCurrentTabStop: b, hasTabStop: E != null }) : d
          }
        )
      }
    );
  }
);
zv.displayName = Dv;
var ax = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function rx(a, i) {
  return i !== "rtl" ? a : a === "ArrowLeft" ? "ArrowRight" : a === "ArrowRight" ? "ArrowLeft" : a;
}
function ix(a, i, o) {
  const u = rx(a.key, o);
  if (!(i === "vertical" && ["ArrowLeft", "ArrowRight"].includes(u)) && !(i === "horizontal" && ["ArrowUp", "ArrowDown"].includes(u)))
    return ax[u];
}
function jv(a, i = !1) {
  const o = document.activeElement;
  for (const u of a)
    if (u === o || (u.focus({ preventScroll: i }), document.activeElement !== o)) return;
}
function ux(a, i) {
  return a.map((o, u) => a[(i + u) % a.length]);
}
var ox = Nv, cx = zv, sx = function(a) {
  if (typeof document > "u")
    return null;
  var i = Array.isArray(a) ? a[0] : a;
  return i.ownerDocument.body;
}, Na = /* @__PURE__ */ new WeakMap(), Ou = /* @__PURE__ */ new WeakMap(), Tu = {}, ws = 0, Uv = function(a) {
  return a && (a.host || Uv(a.parentNode));
}, fx = function(a, i) {
  return i.map(function(o) {
    if (a.contains(o))
      return o;
    var u = Uv(o);
    return u && a.contains(u) ? u : (console.error("aria-hidden", o, "in not contained inside", a, ". Doing nothing"), null);
  }).filter(function(o) {
    return !!o;
  });
}, dx = function(a, i, o, u) {
  var s = fx(i, Array.isArray(a) ? a : [a]);
  Tu[o] || (Tu[o] = /* @__PURE__ */ new WeakMap());
  var f = Tu[o], d = [], p = /* @__PURE__ */ new Set(), v = new Set(s), h = function(b) {
    !b || p.has(b) || (p.add(b), h(b.parentNode));
  };
  s.forEach(h);
  var y = function(b) {
    !b || v.has(b) || Array.prototype.forEach.call(b.children, function(x) {
      if (p.has(x))
        y(x);
      else
        try {
          var A = x.getAttribute(u), C = A !== null && A !== "false", E = (Na.get(x) || 0) + 1, O = (f.get(x) || 0) + 1;
          Na.set(x, E), f.set(x, O), d.push(x), E === 1 && C && Ou.set(x, !0), O === 1 && x.setAttribute(o, "true"), C || x.setAttribute(u, "true");
        } catch (T) {
          console.error("aria-hidden: cannot operate on ", x, T);
        }
    });
  };
  return y(i), p.clear(), ws++, function() {
    d.forEach(function(b) {
      var x = Na.get(b) - 1, A = f.get(b) - 1;
      Na.set(b, x), f.set(b, A), x || (Ou.has(b) || b.removeAttribute(u), Ou.delete(b)), A || b.removeAttribute(o);
    }), ws--, ws || (Na = /* @__PURE__ */ new WeakMap(), Na = /* @__PURE__ */ new WeakMap(), Ou = /* @__PURE__ */ new WeakMap(), Tu = {});
  };
}, mx = function(a, i, o) {
  o === void 0 && (o = "data-aria-hidden");
  var u = Array.from(Array.isArray(a) ? a : [a]), s = sx(a);
  return s ? (u.push.apply(u, Array.from(s.querySelectorAll("[aria-live]"))), dx(u, s, o, "aria-hidden")) : function() {
    return null;
  };
}, an = function() {
  return an = Object.assign || function(i) {
    for (var o, u = 1, s = arguments.length; u < s; u++) {
      o = arguments[u];
      for (var f in o) Object.prototype.hasOwnProperty.call(o, f) && (i[f] = o[f]);
    }
    return i;
  }, an.apply(this, arguments);
};
function Lv(a, i) {
  var o = {};
  for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && i.indexOf(u) < 0 && (o[u] = a[u]);
  if (a != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, u = Object.getOwnPropertySymbols(a); s < u.length; s++)
      i.indexOf(u[s]) < 0 && Object.prototype.propertyIsEnumerable.call(a, u[s]) && (o[u[s]] = a[u[s]]);
  return o;
}
function hx(a, i, o) {
  if (o || arguments.length === 2) for (var u = 0, s = i.length, f; u < s; u++)
    (f || !(u in i)) && (f || (f = Array.prototype.slice.call(i, 0, u)), f[u] = i[u]);
  return a.concat(f || Array.prototype.slice.call(i));
}
var Uu = "right-scroll-bar-position", Lu = "width-before-scroll-bar", px = "with-scroll-bars-hidden", vx = "--removed-body-scroll-bar-size";
function As(a, i) {
  return typeof a == "function" ? a(i) : a && (a.current = i), a;
}
function gx(a, i) {
  var o = w.useState(function() {
    return {
      // value
      value: a,
      // last callback
      callback: i,
      // "memoized" public interface
      facade: {
        get current() {
          return o.value;
        },
        set current(u) {
          var s = o.value;
          s !== u && (o.value = u, o.callback(u, s));
        }
      }
    };
  })[0];
  return o.callback = i, o.facade;
}
var yx = typeof window < "u" ? w.useLayoutEffect : w.useEffect, Dp = /* @__PURE__ */ new WeakMap();
function bx(a, i) {
  var o = gx(null, function(u) {
    return a.forEach(function(s) {
      return As(s, u);
    });
  });
  return yx(function() {
    var u = Dp.get(o);
    if (u) {
      var s = new Set(u), f = new Set(a), d = o.current;
      s.forEach(function(p) {
        f.has(p) || As(p, null);
      }), f.forEach(function(p) {
        s.has(p) || As(p, d);
      });
    }
    Dp.set(o, a);
  }, [a]), o;
}
function xx(a) {
  return a;
}
function Sx(a, i) {
  i === void 0 && (i = xx);
  var o = [], u = !1, s = {
    read: function() {
      if (u)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return o.length ? o[o.length - 1] : a;
    },
    useMedium: function(f) {
      var d = i(f, u);
      return o.push(d), function() {
        o = o.filter(function(p) {
          return p !== d;
        });
      };
    },
    assignSyncMedium: function(f) {
      for (u = !0; o.length; ) {
        var d = o;
        o = [], d.forEach(f);
      }
      o = {
        push: function(p) {
          return f(p);
        },
        filter: function() {
          return o;
        }
      };
    },
    assignMedium: function(f) {
      u = !0;
      var d = [];
      if (o.length) {
        var p = o;
        o = [], p.forEach(f), d = o;
      }
      var v = function() {
        var y = d;
        d = [], y.forEach(f);
      }, h = function() {
        return Promise.resolve().then(v);
      };
      h(), o = {
        push: function(y) {
          d.push(y), h();
        },
        filter: function(y) {
          return d = d.filter(y), o;
        }
      };
    }
  };
  return s;
}
function Ex(a) {
  a === void 0 && (a = {});
  var i = Sx(null);
  return i.options = an({ async: !0, ssr: !1 }, a), i;
}
var Bv = function(a) {
  var i = a.sideCar, o = Lv(a, ["sideCar"]);
  if (!i)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var u = i.read();
  if (!u)
    throw new Error("Sidecar medium not found");
  return w.createElement(u, an({}, o));
};
Bv.isSideCarExport = !0;
function wx(a, i) {
  return a.useMedium(i), Bv;
}
var Hv = Ex(), Ms = function() {
}, Ju = w.forwardRef(function(a, i) {
  var o = w.useRef(null), u = w.useState({
    onScrollCapture: Ms,
    onWheelCapture: Ms,
    onTouchMoveCapture: Ms
  }), s = u[0], f = u[1], d = a.forwardProps, p = a.children, v = a.className, h = a.removeScrollBar, y = a.enabled, b = a.shards, x = a.sideCar, A = a.noIsolation, C = a.inert, E = a.allowPinchZoom, O = a.as, T = O === void 0 ? "div" : O, j = a.gapMode, D = Lv(a, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), L = x, Y = bx([o, i]), J = an(an({}, D), s);
  return w.createElement(
    w.Fragment,
    null,
    y && w.createElement(L, { sideCar: Hv, removeScrollBar: h, shards: b, noIsolation: A, inert: C, setCallbacks: f, allowPinchZoom: !!E, lockRef: o, gapMode: j }),
    d ? w.cloneElement(w.Children.only(p), an(an({}, J), { ref: Y })) : w.createElement(T, an({}, J, { className: v, ref: Y }), p)
  );
});
Ju.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ju.classNames = {
  fullWidth: Lu,
  zeroRight: Uu
};
var Ax = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Mx() {
  if (!document)
    return null;
  var a = document.createElement("style");
  a.type = "text/css";
  var i = Ax();
  return i && a.setAttribute("nonce", i), a;
}
function Cx(a, i) {
  a.styleSheet ? a.styleSheet.cssText = i : a.appendChild(document.createTextNode(i));
}
function Rx(a) {
  var i = document.head || document.getElementsByTagName("head")[0];
  i.appendChild(a);
}
var Ox = function() {
  var a = 0, i = null;
  return {
    add: function(o) {
      a == 0 && (i = Mx()) && (Cx(i, o), Rx(i)), a++;
    },
    remove: function() {
      a--, !a && i && (i.parentNode && i.parentNode.removeChild(i), i = null);
    }
  };
}, Tx = function() {
  var a = Ox();
  return function(i, o) {
    w.useEffect(function() {
      return a.add(i), function() {
        a.remove();
      };
    }, [i && o]);
  };
}, kv = function() {
  var a = Tx(), i = function(o) {
    var u = o.styles, s = o.dynamic;
    return a(u, s), null;
  };
  return i;
}, _x = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Cs = function(a) {
  return parseInt(a || "", 10) || 0;
}, Nx = function(a) {
  var i = window.getComputedStyle(document.body), o = i[a === "padding" ? "paddingLeft" : "marginLeft"], u = i[a === "padding" ? "paddingTop" : "marginTop"], s = i[a === "padding" ? "paddingRight" : "marginRight"];
  return [Cs(o), Cs(u), Cs(s)];
}, Dx = function(a) {
  if (a === void 0 && (a = "margin"), typeof window > "u")
    return _x;
  var i = Nx(a), o = document.documentElement.clientWidth, u = window.innerWidth;
  return {
    left: i[0],
    top: i[1],
    right: i[2],
    gap: Math.max(0, u - o + i[2] - i[0])
  };
}, zx = kv(), Ba = "data-scroll-locked", jx = function(a, i, o, u) {
  var s = a.left, f = a.top, d = a.right, p = a.gap;
  return o === void 0 && (o = "margin"), `
  .`.concat(px, ` {
   overflow: hidden `).concat(u, `;
   padding-right: `).concat(p, "px ").concat(u, `;
  }
  body[`).concat(Ba, `] {
    overflow: hidden `).concat(u, `;
    overscroll-behavior: contain;
    `).concat([
    i && "position: relative ".concat(u, ";"),
    o === "margin" && `
    padding-left: `.concat(s, `px;
    padding-top: `).concat(f, `px;
    padding-right: `).concat(d, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(p, "px ").concat(u, `;
    `),
    o === "padding" && "padding-right: ".concat(p, "px ").concat(u, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Uu, ` {
    right: `).concat(p, "px ").concat(u, `;
  }
  
  .`).concat(Lu, ` {
    margin-right: `).concat(p, "px ").concat(u, `;
  }
  
  .`).concat(Uu, " .").concat(Uu, ` {
    right: 0 `).concat(u, `;
  }
  
  .`).concat(Lu, " .").concat(Lu, ` {
    margin-right: 0 `).concat(u, `;
  }
  
  body[`).concat(Ba, `] {
    `).concat(vx, ": ").concat(p, `px;
  }
`);
}, zp = function() {
  var a = parseInt(document.body.getAttribute(Ba) || "0", 10);
  return isFinite(a) ? a : 0;
}, Ux = function() {
  w.useEffect(function() {
    return document.body.setAttribute(Ba, (zp() + 1).toString()), function() {
      var a = zp() - 1;
      a <= 0 ? document.body.removeAttribute(Ba) : document.body.setAttribute(Ba, a.toString());
    };
  }, []);
}, Lx = function(a) {
  var i = a.noRelative, o = a.noImportant, u = a.gapMode, s = u === void 0 ? "margin" : u;
  Ux();
  var f = w.useMemo(function() {
    return Dx(s);
  }, [s]);
  return w.createElement(zx, { styles: jx(f, !i, s, o ? "" : "!important") });
}, Gs = !1;
if (typeof window < "u")
  try {
    var _u = Object.defineProperty({}, "passive", {
      get: function() {
        return Gs = !0, !0;
      }
    });
    window.addEventListener("test", _u, _u), window.removeEventListener("test", _u, _u);
  } catch {
    Gs = !1;
  }
var Da = Gs ? { passive: !1 } : !1, Bx = function(a) {
  return a.tagName === "TEXTAREA";
}, Gv = function(a, i) {
  if (!(a instanceof Element))
    return !1;
  var o = window.getComputedStyle(a);
  return (
    // not-not-scrollable
    o[i] !== "hidden" && // contains scroll inside self
    !(o.overflowY === o.overflowX && !Bx(a) && o[i] === "visible")
  );
}, Hx = function(a) {
  return Gv(a, "overflowY");
}, kx = function(a) {
  return Gv(a, "overflowX");
}, jp = function(a, i) {
  var o = i.ownerDocument, u = i;
  do {
    typeof ShadowRoot < "u" && u instanceof ShadowRoot && (u = u.host);
    var s = qv(a, u);
    if (s) {
      var f = Yv(a, u), d = f[1], p = f[2];
      if (d > p)
        return !0;
    }
    u = u.parentNode;
  } while (u && u !== o.body);
  return !1;
}, Gx = function(a) {
  var i = a.scrollTop, o = a.scrollHeight, u = a.clientHeight;
  return [
    i,
    o,
    u
  ];
}, qx = function(a) {
  var i = a.scrollLeft, o = a.scrollWidth, u = a.clientWidth;
  return [
    i,
    o,
    u
  ];
}, qv = function(a, i) {
  return a === "v" ? Hx(i) : kx(i);
}, Yv = function(a, i) {
  return a === "v" ? Gx(i) : qx(i);
}, Yx = function(a, i) {
  return a === "h" && i === "rtl" ? -1 : 1;
}, Vx = function(a, i, o, u, s) {
  var f = Yx(a, window.getComputedStyle(i).direction), d = f * u, p = o.target, v = i.contains(p), h = !1, y = d > 0, b = 0, x = 0;
  do {
    var A = Yv(a, p), C = A[0], E = A[1], O = A[2], T = E - O - f * C;
    (C || T) && qv(a, p) && (b += T, x += C), p instanceof ShadowRoot ? p = p.host : p = p.parentNode;
  } while (
    // portaled content
    !v && p !== document.body || // self content
    v && (i.contains(p) || i === p)
  );
  return (y && Math.abs(b) < 1 || !y && Math.abs(x) < 1) && (h = !0), h;
}, Nu = function(a) {
  return "changedTouches" in a ? [a.changedTouches[0].clientX, a.changedTouches[0].clientY] : [0, 0];
}, Up = function(a) {
  return [a.deltaX, a.deltaY];
}, Lp = function(a) {
  return a && "current" in a ? a.current : a;
}, Xx = function(a, i) {
  return a[0] === i[0] && a[1] === i[1];
}, Qx = function(a) {
  return `
  .block-interactivity-`.concat(a, ` {pointer-events: none;}
  .allow-interactivity-`).concat(a, ` {pointer-events: all;}
`);
}, Zx = 0, za = [];
function Kx(a) {
  var i = w.useRef([]), o = w.useRef([0, 0]), u = w.useRef(), s = w.useState(Zx++)[0], f = w.useState(kv)[0], d = w.useRef(a);
  w.useEffect(function() {
    d.current = a;
  }, [a]), w.useEffect(function() {
    if (a.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var E = hx([a.lockRef.current], (a.shards || []).map(Lp), !0).filter(Boolean);
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
    var T = Nu(E), j = o.current, D = "deltaX" in E ? E.deltaX : j[0] - T[0], L = "deltaY" in E ? E.deltaY : j[1] - T[1], Y, J = E.target, Q = Math.abs(D) > Math.abs(L) ? "h" : "v";
    if ("touches" in E && Q === "h" && J.type === "range")
      return !1;
    var H = jp(Q, J);
    if (!H)
      return !0;
    if (H ? Y = Q : (Y = Q === "v" ? "h" : "v", H = jp(Q, J)), !H)
      return !1;
    if (!u.current && "changedTouches" in E && (D || L) && (u.current = Y), !Y)
      return !0;
    var ee = u.current || Y;
    return Vx(ee, O, E, ee === "h" ? D : L);
  }, []), v = w.useCallback(function(E) {
    var O = E;
    if (!(!za.length || za[za.length - 1] !== f)) {
      var T = "deltaY" in O ? Up(O) : Nu(O), j = i.current.filter(function(Y) {
        return Y.name === O.type && (Y.target === O.target || O.target === Y.shadowParent) && Xx(Y.delta, T);
      })[0];
      if (j && j.should) {
        O.cancelable && O.preventDefault();
        return;
      }
      if (!j) {
        var D = (d.current.shards || []).map(Lp).filter(Boolean).filter(function(Y) {
          return Y.contains(O.target);
        }), L = D.length > 0 ? p(O, D[0]) : !d.current.noIsolation;
        L && O.cancelable && O.preventDefault();
      }
    }
  }, []), h = w.useCallback(function(E, O, T, j) {
    var D = { name: E, delta: O, target: T, should: j, shadowParent: Jx(T) };
    i.current.push(D), setTimeout(function() {
      i.current = i.current.filter(function(L) {
        return L !== D;
      });
    }, 1);
  }, []), y = w.useCallback(function(E) {
    o.current = Nu(E), u.current = void 0;
  }, []), b = w.useCallback(function(E) {
    h(E.type, Up(E), E.target, p(E, a.lockRef.current));
  }, []), x = w.useCallback(function(E) {
    h(E.type, Nu(E), E.target, p(E, a.lockRef.current));
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
    C ? w.createElement(f, { styles: Qx(s) }) : null,
    A ? w.createElement(Lx, { gapMode: a.gapMode }) : null
  );
}
function Jx(a) {
  for (var i = null; a !== null; )
    a instanceof ShadowRoot && (i = a.host, a = a.host), a = a.parentNode;
  return i;
}
const Fx = wx(Hv, Kx);
var Vv = w.forwardRef(function(a, i) {
  return w.createElement(Ju, an({}, a, { ref: i, sideCar: Fx }));
});
Vv.classNames = Ju.classNames;
var qs = ["Enter", " "], $x = ["ArrowDown", "PageUp", "Home"], Xv = ["ArrowUp", "PageDown", "End"], Px = [...$x, ...Xv], Ix = {
  ltr: [...qs, "ArrowRight"],
  rtl: [...qs, "ArrowLeft"]
}, Wx = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, oi = "Menu", [Wr, eS, tS] = ev(oi), [kl, Qv] = ai(oi, [
  tS,
  bv,
  _v
]), Fu = bv(), Zv = _v(), [nS, Gl] = kl(oi), [lS, ci] = kl(oi), Kv = (a) => {
  const { __scopeMenu: i, open: o = !1, children: u, dir: s, onOpenChange: f, modal: d = !0 } = a, p = Fu(i), [v, h] = w.useState(null), y = w.useRef(!1), b = _n(f), x = tv(s);
  return w.useEffect(() => {
    const A = () => {
      y.current = !0, document.addEventListener("pointerdown", C, { capture: !0, once: !0 }), document.addEventListener("pointermove", C, { capture: !0, once: !0 });
    }, C = () => y.current = !1;
    return document.addEventListener("keydown", A, { capture: !0 }), () => {
      document.removeEventListener("keydown", A, { capture: !0 }), document.removeEventListener("pointerdown", C, { capture: !0 }), document.removeEventListener("pointermove", C, { capture: !0 });
    };
  }, []), /* @__PURE__ */ S.jsx(X1, { ...p, children: /* @__PURE__ */ S.jsx(
    nS,
    {
      scope: i,
      open: o,
      onOpenChange: b,
      content: v,
      onContentChange: h,
      children: /* @__PURE__ */ S.jsx(
        lS,
        {
          scope: i,
          onClose: w.useCallback(() => b(!1), [b]),
          isUsingKeyboardRef: y,
          dir: x,
          modal: d,
          children: u
        }
      )
    }
  ) });
};
Kv.displayName = oi;
var aS = "MenuAnchor", of = w.forwardRef(
  (a, i) => {
    const { __scopeMenu: o, ...u } = a, s = Fu(o);
    return /* @__PURE__ */ S.jsx(Q1, { ...s, ...u, ref: i });
  }
);
of.displayName = aS;
var cf = "MenuPortal", [rS, Jv] = kl(cf, {
  forceMount: void 0
}), Fv = (a) => {
  const { __scopeMenu: i, forceMount: o, children: u, container: s } = a, f = Gl(cf, i);
  return /* @__PURE__ */ S.jsx(rS, { scope: i, forceMount: o, children: /* @__PURE__ */ S.jsx(ii, { present: o || f.open, children: /* @__PURE__ */ S.jsx(Ov, { asChild: !0, container: s, children: u }) }) });
};
Fv.displayName = cf;
var Yt = "MenuContent", [iS, sf] = kl(Yt), $v = w.forwardRef(
  (a, i) => {
    const o = Jv(Yt, a.__scopeMenu), { forceMount: u = o.forceMount, ...s } = a, f = Gl(Yt, a.__scopeMenu), d = ci(Yt, a.__scopeMenu);
    return /* @__PURE__ */ S.jsx(Wr.Provider, { scope: a.__scopeMenu, children: /* @__PURE__ */ S.jsx(ii, { present: u || f.open, children: /* @__PURE__ */ S.jsx(Wr.Slot, { scope: a.__scopeMenu, children: d.modal ? /* @__PURE__ */ S.jsx(uS, { ...s, ref: i }) : /* @__PURE__ */ S.jsx(oS, { ...s, ref: i }) }) }) });
  }
), uS = w.forwardRef(
  (a, i) => {
    const o = Gl(Yt, a.__scopeMenu), u = w.useRef(null), s = wt(i, u);
    return w.useEffect(() => {
      const f = u.current;
      if (f) return mx(f);
    }, []), /* @__PURE__ */ S.jsx(
      ff,
      {
        ...a,
        ref: s,
        trapFocus: o.open,
        disableOutsidePointerEvents: o.open,
        disableOutsideScroll: !0,
        onFocusOutside: Te(
          a.onFocusOutside,
          (f) => f.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => o.onOpenChange(!1)
      }
    );
  }
), oS = w.forwardRef((a, i) => {
  const o = Gl(Yt, a.__scopeMenu);
  return /* @__PURE__ */ S.jsx(
    ff,
    {
      ...a,
      ref: i,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => o.onOpenChange(!1)
    }
  );
}), cS = /* @__PURE__ */ $r("MenuContent.ScrollLock"), ff = w.forwardRef(
  (a, i) => {
    const {
      __scopeMenu: o,
      loop: u = !1,
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
    } = a, O = Gl(Yt, o), T = ci(Yt, o), j = Fu(o), D = Zv(o), L = eS(o), [Y, J] = w.useState(null), Q = w.useRef(null), H = wt(i, Q, O.onContentChange), ee = w.useRef(0), le = w.useRef(""), ae = w.useRef(0), oe = w.useRef(null), me = w.useRef("right"), he = w.useRef(0), V = C ? Vv : w.Fragment, N = C ? { as: cS, allowPinchZoom: !0 } : void 0, Z = (P) => {
      var fe, ve;
      const M = le.current + P, X = L().filter((Me) => !Me.disabled), W = document.activeElement, I = (fe = X.find((Me) => Me.ref.current === W)) == null ? void 0 : fe.textValue, te = X.map((Me) => Me.textValue), ge = SS(te, M, I), ce = (ve = X.find((Me) => Me.textValue === ge)) == null ? void 0 : ve.ref.current;
      (function Me(Be) {
        le.current = Be, window.clearTimeout(ee.current), Be !== "" && (ee.current = window.setTimeout(() => Me(""), 1e3));
      })(M), ce && setTimeout(() => ce.focus());
    };
    w.useEffect(() => () => window.clearTimeout(ee.current), []), Ob();
    const k = w.useCallback((P) => {
      var X, W;
      return me.current === ((X = oe.current) == null ? void 0 : X.side) && wS(P, (W = oe.current) == null ? void 0 : W.area);
    }, []);
    return /* @__PURE__ */ S.jsx(
      iS,
      {
        scope: o,
        searchRef: le,
        onItemEnter: w.useCallback(
          (P) => {
            k(P) && P.preventDefault();
          },
          [k]
        ),
        onItemLeave: w.useCallback(
          (P) => {
            var M;
            k(P) || ((M = Q.current) == null || M.focus(), J(null));
          },
          [k]
        ),
        onTriggerLeave: w.useCallback(
          (P) => {
            k(P) && P.preventDefault();
          },
          [k]
        ),
        pointerGraceTimerRef: ae,
        onPointerGraceIntentChange: w.useCallback((P) => {
          oe.current = P;
        }, []),
        children: /* @__PURE__ */ S.jsx(V, { ...N, children: /* @__PURE__ */ S.jsx(
          rv,
          {
            asChild: !0,
            trapped: s,
            onMountAutoFocus: Te(f, (P) => {
              var M;
              P.preventDefault(), (M = Q.current) == null || M.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: d,
            children: /* @__PURE__ */ S.jsx(
              lv,
              {
                asChild: !0,
                disableOutsidePointerEvents: p,
                onEscapeKeyDown: h,
                onPointerDownOutside: y,
                onFocusOutside: b,
                onInteractOutside: x,
                onDismiss: A,
                children: /* @__PURE__ */ S.jsx(
                  ox,
                  {
                    asChild: !0,
                    ...D,
                    dir: T.dir,
                    orientation: "vertical",
                    loop: u,
                    currentTabStopId: Y,
                    onCurrentTabStopIdChange: J,
                    onEntryFocus: Te(v, (P) => {
                      T.isUsingKeyboardRef.current || P.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ S.jsx(
                      Z1,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": dg(O.open),
                        "data-radix-menu-content": "",
                        dir: T.dir,
                        ...j,
                        ...E,
                        ref: H,
                        style: { outline: "none", ...E.style },
                        onKeyDown: Te(E.onKeyDown, (P) => {
                          const X = P.target.closest("[data-radix-menu-content]") === P.currentTarget, W = P.ctrlKey || P.altKey || P.metaKey, I = P.key.length === 1;
                          X && (P.key === "Tab" && P.preventDefault(), !W && I && Z(P.key));
                          const te = Q.current;
                          if (P.target !== te || !Px.includes(P.key)) return;
                          P.preventDefault();
                          const ce = L().filter((fe) => !fe.disabled).map((fe) => fe.ref.current);
                          Xv.includes(P.key) && ce.reverse(), bS(ce);
                        }),
                        onBlur: Te(a.onBlur, (P) => {
                          P.currentTarget.contains(P.target) || (window.clearTimeout(ee.current), le.current = "");
                        }),
                        onPointerMove: Te(
                          a.onPointerMove,
                          ei((P) => {
                            const M = P.target, X = he.current !== P.clientX;
                            if (P.currentTarget.contains(M) && X) {
                              const W = P.clientX > he.current ? "right" : "left";
                              me.current = W, he.current = P.clientX;
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
$v.displayName = Yt;
var sS = "MenuGroup", df = w.forwardRef(
  (a, i) => {
    const { __scopeMenu: o, ...u } = a;
    return /* @__PURE__ */ S.jsx(pt.div, { role: "group", ...u, ref: i });
  }
);
df.displayName = sS;
var fS = "MenuLabel", Pv = w.forwardRef(
  (a, i) => {
    const { __scopeMenu: o, ...u } = a;
    return /* @__PURE__ */ S.jsx(pt.div, { ...u, ref: i });
  }
);
Pv.displayName = fS;
var qu = "MenuItem", Bp = "menu.itemSelect", $u = w.forwardRef(
  (a, i) => {
    const { disabled: o = !1, onSelect: u, ...s } = a, f = w.useRef(null), d = ci(qu, a.__scopeMenu), p = sf(qu, a.__scopeMenu), v = wt(i, f), h = w.useRef(!1), y = () => {
      const b = f.current;
      if (!o && b) {
        const x = new CustomEvent(Bp, { bubbles: !0, cancelable: !0 });
        b.addEventListener(Bp, (A) => u == null ? void 0 : u(A), { once: !0 }), Wp(b, x), x.defaultPrevented ? h.current = !1 : d.onClose();
      }
    };
    return /* @__PURE__ */ S.jsx(
      Iv,
      {
        ...s,
        ref: v,
        disabled: o,
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
          o || x && b.key === " " || qs.includes(b.key) && (b.currentTarget.click(), b.preventDefault());
        })
      }
    );
  }
);
$u.displayName = qu;
var Iv = w.forwardRef(
  (a, i) => {
    const { __scopeMenu: o, disabled: u = !1, textValue: s, ...f } = a, d = sf(qu, o), p = Zv(o), v = w.useRef(null), h = wt(i, v), [y, b] = w.useState(!1), [x, A] = w.useState("");
    return w.useEffect(() => {
      const C = v.current;
      C && A((C.textContent ?? "").trim());
    }, [f.children]), /* @__PURE__ */ S.jsx(
      Wr.ItemSlot,
      {
        scope: o,
        disabled: u,
        textValue: s ?? x,
        children: /* @__PURE__ */ S.jsx(cx, { asChild: !0, ...p, focusable: !u, children: /* @__PURE__ */ S.jsx(
          pt.div,
          {
            role: "menuitem",
            "data-highlighted": y ? "" : void 0,
            "aria-disabled": u || void 0,
            "data-disabled": u ? "" : void 0,
            ...f,
            ref: h,
            onPointerMove: Te(
              a.onPointerMove,
              ei((C) => {
                u ? d.onItemLeave(C) : (d.onItemEnter(C), C.defaultPrevented || C.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: Te(
              a.onPointerLeave,
              ei((C) => d.onItemLeave(C))
            ),
            onFocus: Te(a.onFocus, () => b(!0)),
            onBlur: Te(a.onBlur, () => b(!1))
          }
        ) })
      }
    );
  }
), dS = "MenuCheckboxItem", Wv = w.forwardRef(
  (a, i) => {
    const { checked: o = !1, onCheckedChange: u, ...s } = a;
    return /* @__PURE__ */ S.jsx(ag, { scope: a.__scopeMenu, checked: o, children: /* @__PURE__ */ S.jsx(
      $u,
      {
        role: "menuitemcheckbox",
        "aria-checked": Yu(o) ? "mixed" : o,
        ...s,
        ref: i,
        "data-state": hf(o),
        onSelect: Te(
          s.onSelect,
          () => u == null ? void 0 : u(Yu(o) ? !0 : !o),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Wv.displayName = dS;
var eg = "MenuRadioGroup", [mS, hS] = kl(
  eg,
  { value: void 0, onValueChange: () => {
  } }
), tg = w.forwardRef(
  (a, i) => {
    const { value: o, onValueChange: u, ...s } = a, f = _n(u);
    return /* @__PURE__ */ S.jsx(mS, { scope: a.__scopeMenu, value: o, onValueChange: f, children: /* @__PURE__ */ S.jsx(df, { ...s, ref: i }) });
  }
);
tg.displayName = eg;
var ng = "MenuRadioItem", lg = w.forwardRef(
  (a, i) => {
    const { value: o, ...u } = a, s = hS(ng, a.__scopeMenu), f = o === s.value;
    return /* @__PURE__ */ S.jsx(ag, { scope: a.__scopeMenu, checked: f, children: /* @__PURE__ */ S.jsx(
      $u,
      {
        role: "menuitemradio",
        "aria-checked": f,
        ...u,
        ref: i,
        "data-state": hf(f),
        onSelect: Te(
          u.onSelect,
          () => {
            var d;
            return (d = s.onValueChange) == null ? void 0 : d.call(s, o);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
lg.displayName = ng;
var mf = "MenuItemIndicator", [ag, pS] = kl(
  mf,
  { checked: !1 }
), rg = w.forwardRef(
  (a, i) => {
    const { __scopeMenu: o, forceMount: u, ...s } = a, f = pS(mf, o);
    return /* @__PURE__ */ S.jsx(
      ii,
      {
        present: u || Yu(f.checked) || f.checked === !0,
        children: /* @__PURE__ */ S.jsx(
          pt.span,
          {
            ...s,
            ref: i,
            "data-state": hf(f.checked)
          }
        )
      }
    );
  }
);
rg.displayName = mf;
var vS = "MenuSeparator", ig = w.forwardRef(
  (a, i) => {
    const { __scopeMenu: o, ...u } = a;
    return /* @__PURE__ */ S.jsx(
      pt.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...u,
        ref: i
      }
    );
  }
);
ig.displayName = vS;
var gS = "MenuArrow", ug = w.forwardRef(
  (a, i) => {
    const { __scopeMenu: o, ...u } = a, s = Fu(o);
    return /* @__PURE__ */ S.jsx(K1, { ...s, ...u, ref: i });
  }
);
ug.displayName = gS;
var yS = "MenuSub", [u2, og] = kl(yS), Kr = "MenuSubTrigger", cg = w.forwardRef(
  (a, i) => {
    const o = Gl(Kr, a.__scopeMenu), u = ci(Kr, a.__scopeMenu), s = og(Kr, a.__scopeMenu), f = sf(Kr, a.__scopeMenu), d = w.useRef(null), { pointerGraceTimerRef: p, onPointerGraceIntentChange: v } = f, h = { __scopeMenu: a.__scopeMenu }, y = w.useCallback(() => {
      d.current && window.clearTimeout(d.current), d.current = null;
    }, []);
    return w.useEffect(() => y, [y]), w.useEffect(() => {
      const b = p.current;
      return () => {
        window.clearTimeout(b), v(null);
      };
    }, [p, v]), /* @__PURE__ */ S.jsx(of, { asChild: !0, ...h, children: /* @__PURE__ */ S.jsx(
      Iv,
      {
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": o.open,
        "aria-controls": s.contentId,
        "data-state": dg(o.open),
        ...a,
        ref: Xu(i, s.onTriggerChange),
        onClick: (b) => {
          var x;
          (x = a.onClick) == null || x.call(a, b), !(a.disabled || b.defaultPrevented) && (b.currentTarget.focus(), o.open || o.onOpenChange(!0));
        },
        onPointerMove: Te(
          a.onPointerMove,
          ei((b) => {
            f.onItemEnter(b), !b.defaultPrevented && !a.disabled && !o.open && !d.current && (f.onPointerGraceIntentChange(null), d.current = window.setTimeout(() => {
              o.onOpenChange(!0), y();
            }, 100));
          })
        ),
        onPointerLeave: Te(
          a.onPointerLeave,
          ei((b) => {
            var A, C;
            y();
            const x = (A = o.content) == null ? void 0 : A.getBoundingClientRect();
            if (x) {
              const E = (C = o.content) == null ? void 0 : C.dataset.side, O = E === "right", T = O ? -5 : 5, j = x[O ? "left" : "right"], D = x[O ? "right" : "left"];
              f.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: b.clientX + T, y: b.clientY },
                  { x: j, y: x.top },
                  { x: D, y: x.top },
                  { x: D, y: x.bottom },
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
          a.disabled || x && b.key === " " || Ix[u.dir].includes(b.key) && (o.onOpenChange(!0), (A = o.content) == null || A.focus(), b.preventDefault());
        })
      }
    ) });
  }
);
cg.displayName = Kr;
var sg = "MenuSubContent", fg = w.forwardRef(
  (a, i) => {
    const o = Jv(Yt, a.__scopeMenu), { forceMount: u = o.forceMount, ...s } = a, f = Gl(Yt, a.__scopeMenu), d = ci(Yt, a.__scopeMenu), p = og(sg, a.__scopeMenu), v = w.useRef(null), h = wt(i, v);
    return /* @__PURE__ */ S.jsx(Wr.Provider, { scope: a.__scopeMenu, children: /* @__PURE__ */ S.jsx(ii, { present: u || f.open, children: /* @__PURE__ */ S.jsx(Wr.Slot, { scope: a.__scopeMenu, children: /* @__PURE__ */ S.jsx(
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
          const b = y.currentTarget.contains(y.target), x = Wx[d.dir].includes(y.key);
          b && x && (f.onOpenChange(!1), (A = p.trigger) == null || A.focus(), y.preventDefault());
        })
      }
    ) }) }) });
  }
);
fg.displayName = sg;
function dg(a) {
  return a ? "open" : "closed";
}
function Yu(a) {
  return a === "indeterminate";
}
function hf(a) {
  return Yu(a) ? "indeterminate" : a ? "checked" : "unchecked";
}
function bS(a) {
  const i = document.activeElement;
  for (const o of a)
    if (o === i || (o.focus(), document.activeElement !== i)) return;
}
function xS(a, i) {
  return a.map((o, u) => a[(i + u) % a.length]);
}
function SS(a, i, o) {
  const s = i.length > 1 && Array.from(i).every((h) => h === i[0]) ? i[0] : i, f = o ? a.indexOf(o) : -1;
  let d = xS(a, Math.max(f, 0));
  s.length === 1 && (d = d.filter((h) => h !== o));
  const v = d.find(
    (h) => h.toLowerCase().startsWith(s.toLowerCase())
  );
  return v !== o ? v : void 0;
}
function ES(a, i) {
  const { x: o, y: u } = a;
  let s = !1;
  for (let f = 0, d = i.length - 1; f < i.length; d = f++) {
    const p = i[f], v = i[d], h = p.x, y = p.y, b = v.x, x = v.y;
    y > u != x > u && o < (b - h) * (u - y) / (x - y) + h && (s = !s);
  }
  return s;
}
function wS(a, i) {
  if (!i) return !1;
  const o = { x: a.clientX, y: a.clientY };
  return ES(o, i);
}
function ei(a) {
  return (i) => i.pointerType === "mouse" ? a(i) : void 0;
}
var AS = Kv, MS = of, CS = Fv, RS = $v, OS = df, TS = Pv, _S = $u, NS = Wv, DS = tg, zS = lg, jS = rg, US = ig, LS = ug, BS = cg, HS = fg, Pu = "DropdownMenu", [kS, o2] = ai(
  Pu,
  [Qv]
), vt = Qv(), [GS, mg] = kS(Pu), hg = (a) => {
  const {
    __scopeDropdownMenu: i,
    children: o,
    dir: u,
    open: s,
    defaultOpen: f,
    onOpenChange: d,
    modal: p = !0
  } = a, v = vt(i), h = w.useRef(null), [y, b] = Ip({
    prop: s,
    defaultProp: f ?? !1,
    onChange: d,
    caller: Pu
  });
  return /* @__PURE__ */ S.jsx(
    GS,
    {
      scope: i,
      triggerId: Us(),
      triggerRef: h,
      contentId: Us(),
      open: y,
      onOpenChange: b,
      onOpenToggle: w.useCallback(() => b((x) => !x), [b]),
      modal: p,
      children: /* @__PURE__ */ S.jsx(AS, { ...v, open: y, onOpenChange: b, dir: u, modal: p, children: o })
    }
  );
};
hg.displayName = Pu;
var pg = "DropdownMenuTrigger", vg = w.forwardRef(
  (a, i) => {
    const { __scopeDropdownMenu: o, disabled: u = !1, ...s } = a, f = mg(pg, o), d = vt(o);
    return /* @__PURE__ */ S.jsx(MS, { asChild: !0, ...d, children: /* @__PURE__ */ S.jsx(
      pt.button,
      {
        type: "button",
        id: f.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": f.open,
        "aria-controls": f.open ? f.contentId : void 0,
        "data-state": f.open ? "open" : "closed",
        "data-disabled": u ? "" : void 0,
        disabled: u,
        ...s,
        ref: Xu(i, f.triggerRef),
        onPointerDown: Te(a.onPointerDown, (p) => {
          !u && p.button === 0 && p.ctrlKey === !1 && (f.onOpenToggle(), f.open || p.preventDefault());
        }),
        onKeyDown: Te(a.onKeyDown, (p) => {
          u || (["Enter", " "].includes(p.key) && f.onOpenToggle(), p.key === "ArrowDown" && f.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(p.key) && p.preventDefault());
        })
      }
    ) });
  }
);
vg.displayName = pg;
var qS = "DropdownMenuPortal", gg = (a) => {
  const { __scopeDropdownMenu: i, ...o } = a, u = vt(i);
  return /* @__PURE__ */ S.jsx(CS, { ...u, ...o });
};
gg.displayName = qS;
var yg = "DropdownMenuContent", bg = w.forwardRef(
  (a, i) => {
    const { __scopeDropdownMenu: o, ...u } = a, s = mg(yg, o), f = vt(o), d = w.useRef(!1);
    return /* @__PURE__ */ S.jsx(
      RS,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...f,
        ...u,
        ref: i,
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
bg.displayName = yg;
var YS = "DropdownMenuGroup", VS = w.forwardRef(
  (a, i) => {
    const { __scopeDropdownMenu: o, ...u } = a, s = vt(o);
    return /* @__PURE__ */ S.jsx(OS, { ...s, ...u, ref: i });
  }
);
VS.displayName = YS;
var XS = "DropdownMenuLabel", QS = w.forwardRef(
  (a, i) => {
    const { __scopeDropdownMenu: o, ...u } = a, s = vt(o);
    return /* @__PURE__ */ S.jsx(TS, { ...s, ...u, ref: i });
  }
);
QS.displayName = XS;
var ZS = "DropdownMenuItem", KS = w.forwardRef(
  (a, i) => {
    const { __scopeDropdownMenu: o, ...u } = a, s = vt(o);
    return /* @__PURE__ */ S.jsx(_S, { ...s, ...u, ref: i });
  }
);
KS.displayName = ZS;
var JS = "DropdownMenuCheckboxItem", FS = w.forwardRef((a, i) => {
  const { __scopeDropdownMenu: o, ...u } = a, s = vt(o);
  return /* @__PURE__ */ S.jsx(NS, { ...s, ...u, ref: i });
});
FS.displayName = JS;
var $S = "DropdownMenuRadioGroup", xg = w.forwardRef((a, i) => {
  const { __scopeDropdownMenu: o, ...u } = a, s = vt(o);
  return /* @__PURE__ */ S.jsx(DS, { ...s, ...u, ref: i });
});
xg.displayName = $S;
var PS = "DropdownMenuRadioItem", Sg = w.forwardRef((a, i) => {
  const { __scopeDropdownMenu: o, ...u } = a, s = vt(o);
  return /* @__PURE__ */ S.jsx(zS, { ...s, ...u, ref: i });
});
Sg.displayName = PS;
var IS = "DropdownMenuItemIndicator", Eg = w.forwardRef((a, i) => {
  const { __scopeDropdownMenu: o, ...u } = a, s = vt(o);
  return /* @__PURE__ */ S.jsx(jS, { ...s, ...u, ref: i });
});
Eg.displayName = IS;
var WS = "DropdownMenuSeparator", eE = w.forwardRef((a, i) => {
  const { __scopeDropdownMenu: o, ...u } = a, s = vt(o);
  return /* @__PURE__ */ S.jsx(US, { ...s, ...u, ref: i });
});
eE.displayName = WS;
var tE = "DropdownMenuArrow", nE = w.forwardRef(
  (a, i) => {
    const { __scopeDropdownMenu: o, ...u } = a, s = vt(o);
    return /* @__PURE__ */ S.jsx(LS, { ...s, ...u, ref: i });
  }
);
nE.displayName = tE;
var lE = "DropdownMenuSubTrigger", aE = w.forwardRef((a, i) => {
  const { __scopeDropdownMenu: o, ...u } = a, s = vt(o);
  return /* @__PURE__ */ S.jsx(BS, { ...s, ...u, ref: i });
});
aE.displayName = lE;
var rE = "DropdownMenuSubContent", iE = w.forwardRef((a, i) => {
  const { __scopeDropdownMenu: o, ...u } = a, s = vt(o);
  return /* @__PURE__ */ S.jsx(
    HS,
    {
      ...s,
      ...u,
      ref: i,
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
iE.displayName = rE;
var uE = hg, oE = vg, cE = gg, sE = bg, fE = xg, dE = Sg, mE = Eg;
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hE = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), pE = (a) => a.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (i, o, u) => u ? u.toUpperCase() : o.toLowerCase()
), Hp = (a) => {
  const i = pE(a);
  return i.charAt(0).toUpperCase() + i.slice(1);
}, wg = (...a) => a.filter((i, o, u) => !!i && i.trim() !== "" && u.indexOf(i) === o).join(" ").trim(), vE = (a) => {
  for (const i in a)
    if (i.startsWith("aria-") || i === "role" || i === "title")
      return !0;
};
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var gE = {
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
const yE = w.forwardRef(
  ({
    color: a = "currentColor",
    size: i = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: u,
    className: s = "",
    children: f,
    iconNode: d,
    ...p
  }, v) => w.createElement(
    "svg",
    {
      ref: v,
      ...gE,
      width: i,
      height: i,
      stroke: a,
      strokeWidth: u ? Number(o) * 24 / Number(i) : o,
      className: wg("lucide", s),
      ...!f && !vE(p) && { "aria-hidden": "true" },
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
const Iu = (a, i) => {
  const o = w.forwardRef(
    ({ className: u, ...s }, f) => w.createElement(yE, {
      ref: f,
      iconNode: i,
      className: wg(
        `lucide-${hE(Hp(a))}`,
        `lucide-${a}`,
        u
      ),
      ...s
    })
  );
  return o.displayName = Hp(a), o;
};
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bE = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], xE = Iu("arrow-left", bE);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SE = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], EE = Iu("arrow-right", SE);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wE = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Nl = Iu("chevron-down", wE);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AE = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], ME = Iu("circle", AE);
function Ag(a) {
  var i, o, u = "";
  if (typeof a == "string" || typeof a == "number") u += a;
  else if (typeof a == "object") if (Array.isArray(a)) {
    var s = a.length;
    for (i = 0; i < s; i++) a[i] && (o = Ag(a[i])) && (u && (u += " "), u += o);
  } else for (o in a) a[o] && (u && (u += " "), u += o);
  return u;
}
function Mg() {
  for (var a, i, o = 0, u = "", s = arguments.length; o < s; o++) (a = arguments[o]) && (i = Ag(a)) && (u && (u += " "), u += i);
  return u;
}
const pf = "-", CE = (a) => {
  const i = OE(a), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: u
  } = a;
  return {
    getClassGroupId: (d) => {
      const p = d.split(pf);
      return p[0] === "" && p.length !== 1 && p.shift(), Cg(p, i) || RE(d);
    },
    getConflictingClassGroupIds: (d, p) => {
      const v = o[d] || [];
      return p && u[d] ? [...v, ...u[d]] : v;
    }
  };
}, Cg = (a, i) => {
  var d;
  if (a.length === 0)
    return i.classGroupId;
  const o = a[0], u = i.nextPart.get(o), s = u ? Cg(a.slice(1), u) : void 0;
  if (s)
    return s;
  if (i.validators.length === 0)
    return;
  const f = a.join(pf);
  return (d = i.validators.find(({
    validator: p
  }) => p(f))) == null ? void 0 : d.classGroupId;
}, kp = /^\[(.+)\]$/, RE = (a) => {
  if (kp.test(a)) {
    const i = kp.exec(a)[1], o = i == null ? void 0 : i.substring(0, i.indexOf(":"));
    if (o)
      return "arbitrary.." + o;
  }
}, OE = (a) => {
  const {
    theme: i,
    classGroups: o
  } = a, u = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const s in o)
    Ys(o[s], u, s, i);
  return u;
}, Ys = (a, i, o, u) => {
  a.forEach((s) => {
    if (typeof s == "string") {
      const f = s === "" ? i : Gp(i, s);
      f.classGroupId = o;
      return;
    }
    if (typeof s == "function") {
      if (TE(s)) {
        Ys(s(u), i, o, u);
        return;
      }
      i.validators.push({
        validator: s,
        classGroupId: o
      });
      return;
    }
    Object.entries(s).forEach(([f, d]) => {
      Ys(d, Gp(i, f), o, u);
    });
  });
}, Gp = (a, i) => {
  let o = a;
  return i.split(pf).forEach((u) => {
    o.nextPart.has(u) || o.nextPart.set(u, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), o = o.nextPart.get(u);
  }), o;
}, TE = (a) => a.isThemeGetter, _E = (a) => {
  if (a < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let i = 0, o = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
  const s = (f, d) => {
    o.set(f, d), i++, i > a && (i = 0, u = o, o = /* @__PURE__ */ new Map());
  };
  return {
    get(f) {
      let d = o.get(f);
      if (d !== void 0)
        return d;
      if ((d = u.get(f)) !== void 0)
        return s(f, d), d;
    },
    set(f, d) {
      o.has(f) ? o.set(f, d) : s(f, d);
    }
  };
}, Vs = "!", Xs = ":", NE = Xs.length, DE = (a) => {
  const {
    prefix: i,
    experimentalParseClassName: o
  } = a;
  let u = (s) => {
    const f = [];
    let d = 0, p = 0, v = 0, h;
    for (let C = 0; C < s.length; C++) {
      let E = s[C];
      if (d === 0 && p === 0) {
        if (E === Xs) {
          f.push(s.slice(v, C)), v = C + NE;
          continue;
        }
        if (E === "/") {
          h = C;
          continue;
        }
      }
      E === "[" ? d++ : E === "]" ? d-- : E === "(" ? p++ : E === ")" && p--;
    }
    const y = f.length === 0 ? s : s.substring(v), b = zE(y), x = b !== y, A = h && h > v ? h - v : void 0;
    return {
      modifiers: f,
      hasImportantModifier: x,
      baseClassName: b,
      maybePostfixModifierPosition: A
    };
  };
  if (i) {
    const s = i + Xs, f = u;
    u = (d) => d.startsWith(s) ? f(d.substring(s.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: d,
      maybePostfixModifierPosition: void 0
    };
  }
  if (o) {
    const s = u;
    u = (f) => o({
      className: f,
      parseClassName: s
    });
  }
  return u;
}, zE = (a) => a.endsWith(Vs) ? a.substring(0, a.length - 1) : a.startsWith(Vs) ? a.substring(1) : a, jE = (a) => {
  const i = Object.fromEntries(a.orderSensitiveModifiers.map((u) => [u, !0]));
  return (u) => {
    if (u.length <= 1)
      return u;
    const s = [];
    let f = [];
    return u.forEach((d) => {
      d[0] === "[" || i[d] ? (s.push(...f.sort(), d), f = []) : f.push(d);
    }), s.push(...f.sort()), s;
  };
}, UE = (a) => ({
  cache: _E(a.cacheSize),
  parseClassName: DE(a),
  sortModifiers: jE(a),
  ...CE(a)
}), LE = /\s+/, BE = (a, i) => {
  const {
    parseClassName: o,
    getClassGroupId: u,
    getConflictingClassGroupIds: s,
    sortModifiers: f
  } = i, d = [], p = a.trim().split(LE);
  let v = "";
  for (let h = p.length - 1; h >= 0; h -= 1) {
    const y = p[h], {
      isExternal: b,
      modifiers: x,
      hasImportantModifier: A,
      baseClassName: C,
      maybePostfixModifierPosition: E
    } = o(y);
    if (b) {
      v = y + (v.length > 0 ? " " + v : v);
      continue;
    }
    let O = !!E, T = u(O ? C.substring(0, E) : C);
    if (!T) {
      if (!O) {
        v = y + (v.length > 0 ? " " + v : v);
        continue;
      }
      if (T = u(C), !T) {
        v = y + (v.length > 0 ? " " + v : v);
        continue;
      }
      O = !1;
    }
    const j = f(x).join(":"), D = A ? j + Vs : j, L = D + T;
    if (d.includes(L))
      continue;
    d.push(L);
    const Y = s(T, O);
    for (let J = 0; J < Y.length; ++J) {
      const Q = Y[J];
      d.push(D + Q);
    }
    v = y + (v.length > 0 ? " " + v : v);
  }
  return v;
};
function HE() {
  let a = 0, i, o, u = "";
  for (; a < arguments.length; )
    (i = arguments[a++]) && (o = Rg(i)) && (u && (u += " "), u += o);
  return u;
}
const Rg = (a) => {
  if (typeof a == "string")
    return a;
  let i, o = "";
  for (let u = 0; u < a.length; u++)
    a[u] && (i = Rg(a[u])) && (o && (o += " "), o += i);
  return o;
};
function kE(a, ...i) {
  let o, u, s, f = d;
  function d(v) {
    const h = i.reduce((y, b) => b(y), a());
    return o = UE(h), u = o.cache.get, s = o.cache.set, f = p, p(v);
  }
  function p(v) {
    const h = u(v);
    if (h)
      return h;
    const y = BE(v, o);
    return s(v, y), y;
  }
  return function() {
    return f(HE.apply(null, arguments));
  };
}
const et = (a) => {
  const i = (o) => o[a] || [];
  return i.isThemeGetter = !0, i;
}, Og = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Tg = /^\((?:(\w[\w-]*):)?(.+)\)$/i, GE = /^\d+\/\d+$/, qE = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, YE = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, VE = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, XE = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, QE = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ja = (a) => GE.test(a), Se = (a) => !!a && !Number.isNaN(Number(a)), al = (a) => !!a && Number.isInteger(Number(a)), Rs = (a) => a.endsWith("%") && Se(a.slice(0, -1)), Cn = (a) => qE.test(a), ZE = () => !0, KE = (a) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  YE.test(a) && !VE.test(a)
), _g = () => !1, JE = (a) => XE.test(a), FE = (a) => QE.test(a), $E = (a) => !ie(a) && !ue(a), PE = (a) => qa(a, zg, _g), ie = (a) => Og.test(a), Dl = (a) => qa(a, jg, KE), Os = (a) => qa(a, nw, Se), qp = (a) => qa(a, Ng, _g), IE = (a) => qa(a, Dg, FE), Du = (a) => qa(a, Ug, JE), ue = (a) => Tg.test(a), Qr = (a) => Ya(a, jg), WE = (a) => Ya(a, lw), Yp = (a) => Ya(a, Ng), ew = (a) => Ya(a, zg), tw = (a) => Ya(a, Dg), zu = (a) => Ya(a, Ug, !0), qa = (a, i, o) => {
  const u = Og.exec(a);
  return u ? u[1] ? i(u[1]) : o(u[2]) : !1;
}, Ya = (a, i, o = !1) => {
  const u = Tg.exec(a);
  return u ? u[1] ? i(u[1]) : o : !1;
}, Ng = (a) => a === "position" || a === "percentage", Dg = (a) => a === "image" || a === "url", zg = (a) => a === "length" || a === "size" || a === "bg-size", jg = (a) => a === "length", nw = (a) => a === "number", lw = (a) => a === "family-name", Ug = (a) => a === "shadow", aw = () => {
  const a = et("color"), i = et("font"), o = et("text"), u = et("font-weight"), s = et("tracking"), f = et("leading"), d = et("breakpoint"), p = et("container"), v = et("spacing"), h = et("radius"), y = et("shadow"), b = et("inset-shadow"), x = et("text-shadow"), A = et("drop-shadow"), C = et("blur"), E = et("perspective"), O = et("aspect"), T = et("ease"), j = et("animate"), D = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], L = () => [
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
  ], Y = () => [...L(), ue, ie], J = () => ["auto", "hidden", "clip", "visible", "scroll"], Q = () => ["auto", "contain", "none"], H = () => [ue, ie, v], ee = () => [ja, "full", "auto", ...H()], le = () => [al, "none", "subgrid", ue, ie], ae = () => ["auto", {
    span: ["full", al, ue, ie]
  }, al, ue, ie], oe = () => [al, "auto", ue, ie], me = () => ["auto", "min", "max", "fr", ue, ie], he = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], V = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], N = () => ["auto", ...H()], Z = () => [ja, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...H()], k = () => [a, ue, ie], P = () => [...L(), Yp, qp, {
    position: [ue, ie]
  }], M = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], X = () => ["auto", "cover", "contain", ew, PE, {
    size: [ue, ie]
  }], W = () => [Rs, Qr, Dl], I = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    h,
    ue,
    ie
  ], te = () => ["", Se, Qr, Dl], ge = () => ["solid", "dashed", "dotted", "double"], ce = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], fe = () => [Se, Rs, Yp, qp], ve = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    C,
    ue,
    ie
  ], Me = () => ["none", Se, ue, ie], Be = () => ["none", Se, ue, ie], Re = () => [Se, ue, ie], ne = () => [ja, "full", ...H()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Cn],
      breakpoint: [Cn],
      color: [ZE],
      container: [Cn],
      "drop-shadow": [Cn],
      ease: ["in", "out", "in-out"],
      font: [$E],
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
        aspect: ["auto", "square", ja, ie, ue, O]
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
        columns: [Se, ie, ue, p]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": D()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": D()
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
        overscroll: Q()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Q()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Q()
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
        inset: ee()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": ee()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": ee()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: ee()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: ee()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: ee()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: ee()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: ee()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: ee()
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
        z: [al, "auto", ue, ie]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ja, "full", "auto", p, ...H()]
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
        flex: [Se, ja, "auto", "initial", "none", ie]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Se, ue, ie]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Se, ue, ie]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [al, "first", "last", "none", ue, ie]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": le()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ae()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": oe()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": oe()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": le()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ae()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": oe()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": oe()
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
        gap: H()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": H()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": H()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...he(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...V(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...V()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...he()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...V(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...V(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": he()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...V(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...V()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: H()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: H()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: H()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: H()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: H()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: H()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: H()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: H()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: H()
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
        "space-x": H()
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
        "space-y": H()
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
        size: Z()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [p, "screen", ...Z()]
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
          ...Z()
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
          ...Z()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...Z()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...Z()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...Z()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", o, Qr, Dl]
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
        font: [u, ue, Os]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Rs, ie]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [WE, ie, i]
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
        tracking: [s, ue, ie]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Se, "none", ue, Os]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          f,
          ...H()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ue, ie]
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
        list: ["disc", "decimal", "none", ue, ie]
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
        decoration: [Se, "from-font", "auto", ue, Dl]
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
        "underline-offset": [Se, "auto", ue, ie]
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
        indent: H()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ue, ie]
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
        content: ["none", ue, ie]
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
        bg: P()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: M()
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
          }, al, ue, ie],
          radial: ["", ue, ie],
          conic: [al, ue, ie]
        }, tw, IE]
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
        from: W()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: W()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: W()
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
        rounded: I()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": I()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": I()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": I()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": I()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": I()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": I()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": I()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": I()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": I()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": I()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": I()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": I()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": I()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": I()
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
        "outline-offset": [Se, ue, ie]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Se, Qr, Dl]
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
          zu,
          Du
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
        "inset-shadow": ["none", b, zu, Du]
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
        "text-shadow": ["none", x, zu, Du]
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
        opacity: [Se, ue, ie]
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
        "mask-linear-from": fe()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": fe()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": k()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": k()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": fe()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": fe()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": k()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": k()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": fe()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": fe()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": k()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": k()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": fe()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": fe()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": k()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": k()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": fe()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": fe()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": k()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": k()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": fe()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": fe()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": k()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": k()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": fe()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": fe()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": k()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": k()
      }],
      "mask-image-radial": [{
        "mask-radial": [ue, ie]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": fe()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": fe()
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
        "mask-radial-at": L()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [Se]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": fe()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": fe()
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
        mask: P()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: M()
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
        mask: ["none", ue, ie]
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
        brightness: [Se, ue, ie]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Se, ue, ie]
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
          zu,
          Du
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
        grayscale: ["", Se, ue, ie]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Se, ue, ie]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Se, ue, ie]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Se, ue, ie]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Se, ue, ie]
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
        "backdrop-brightness": [Se, ue, ie]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Se, ue, ie]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Se, ue, ie]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Se, ue, ie]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Se, ue, ie]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Se, ue, ie]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Se, ue, ie]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Se, ue, ie]
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
        "border-spacing": H()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": H()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": H()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", ue, ie]
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
        duration: [Se, "initial", ue, ie]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", T, ue, ie]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Se, ue, ie]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", j, ue, ie]
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
        perspective: [E, ue, ie]
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
        rotate: Me()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Me()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Me()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Me()
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
        skew: Re()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Re()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Re()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [ue, ie, "", "none", "gpu", "cpu"]
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
        translate: ne()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ne()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ne()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ne()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ue, ie]
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
        "scroll-m": H()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": H()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": H()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": H()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": H()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": H()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": H()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": H()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": H()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": H()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": H()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": H()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": H()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": H()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": H()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": H()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": H()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": H()
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
        "will-change": ["auto", "scroll", "contents", "transform", ue, ie]
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
        stroke: [Se, Qr, Dl, Os]
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
}, rw = /* @__PURE__ */ kE(aw);
function fl(...a) {
  return rw(Mg(a));
}
function zl({
  ...a
}) {
  return /* @__PURE__ */ S.jsx(uE, { "data-slot": "dropdown-menu", ...a });
}
function jl({
  ...a
}) {
  return /* @__PURE__ */ S.jsx(oE, { "data-slot": "dropdown-menu-trigger", ...a });
}
function Ul({
  className: a,
  sideOffset: i = 4,
  ...o
}) {
  return /* @__PURE__ */ S.jsx(cE, { children: /* @__PURE__ */ S.jsx(
    sE,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: i,
      className: fl(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        a
      ),
      ...o
    }
  ) });
}
function Ll({
  ...a
}) {
  return /* @__PURE__ */ S.jsx(fE, { "data-slot": "dropdown-menu-radio-group", ...a });
}
function Rn({
  className: a,
  children: i,
  ...o
}) {
  return /* @__PURE__ */ S.jsxs(
    dE,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: fl(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a
      ),
      ...o,
      children: [
        /* @__PURE__ */ S.jsx(
          "span",
          {
            className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
            children: /* @__PURE__ */ S.jsx(mE, { children: /* @__PURE__ */ S.jsx(ME, { className: "size-2 fill-current" }) })
          }
        ),
        i
      ]
    }
  );
}
const Vp = (a) => typeof a == "boolean" ? `${a}` : a === 0 ? "0" : a, Xp = Mg, iw = (a, i) => (o) => {
  var u;
  if ((i == null ? void 0 : i.variants) == null) return Xp(a, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
  const { variants: s, defaultVariants: f } = i, d = Object.keys(s).map((h) => {
    const y = o == null ? void 0 : o[h], b = f == null ? void 0 : f[h];
    if (y === null) return null;
    const x = Vp(y) || Vp(b);
    return s[h][x];
  }), p = o && Object.entries(o).reduce((h, y) => {
    let [b, x] = y;
    return x === void 0 || (h[b] = x), h;
  }, {}), v = i == null || (u = i.compoundVariants) === null || u === void 0 ? void 0 : u.reduce((h, y) => {
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
  return Xp(a, d, v, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
}, uw = iw(
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
  variant: i,
  size: o,
  asChild: u = !1,
  ...s
}) {
  const f = u ? db : "button";
  return /* @__PURE__ */ S.jsx(
    f,
    {
      "data-slot": "button",
      className: fl(uw({ variant: i, size: o, className: a })),
      ...s
    }
  );
}
const ow = [
  { value: "Roasters Choice", label: "Roasters Choice" },
  { value: "Curated", label: "Curated" },
  { value: "Masterpiece", label: "Masterpiece" },
  { value: "Low-Caf", label: "Low-Caf" },
  { value: "Regional", label: "Regional" }
], cw = [
  { value: "Roasters Choice", label: "Roasters Choice" },
  { value: "Curated", label: "Curated" },
  { value: "Masterpiece", label: "Masterpiece" },
  { value: "Low-Caf", label: "Low-Caf" },
  { value: "Office", label: "Office" },
  { value: "Regional", label: "Regional" }
], sw = [
  { value: "1x 1kg", label: "1x 1kg" },
  { value: "2x 1kg", label: "2x 1kg" },
  { value: "3x 1kg", label: "3x 1kg" },
  { value: "4x 1kg", label: "4x 1kg" },
  { value: "5x 1kg", label: "5x 1kg" }
], fw = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" }
], Qs = [
  { value: "2", label: "2x 250g" },
  { value: "4", label: "4x 250g" },
  { value: "6", label: "6x 250g" }
], dw = Qs.reduce((a, i) => (a[i.value] = i.label, a), {}), Zs = [
  { value: "1", label: "1x bag (100-150g)" },
  { value: "2", label: "2x bags (100-150g)" },
  { value: "3", label: "3x bags (100-150g)" }
], mw = Zs.reduce((a, i) => (a[i.value] = i.label, a), {}), hw = [
  { value: "Brazil", label: "Brazil" },
  { value: "Ethiopia", label: "Ethiopia" },
  { value: "Masterpiece", label: "Masterpiece" }
], Ks = [
  { value: "3", label: "3x 10 capsules" },
  { value: "4", label: "4x 10 capsules" },
  { value: "5", label: "5x 10 capsules" }
], pw = Ks.reduce((a, i) => (a[i.value] = i.label, a), {}), vw = [
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
], Ts = ["4 Weeks (Recommended)", "6 Weeks"], _s = ["2 Weeks", "4 Weeks (Recommended)", "6 Weeks"], Ns = ["2 Weeks", "4 Weeks (Recommended)"], Ds = ["2 Weeks", "4 Weeks (Recommended)"], gw = ({
  selectedMethod: a,
  selectedCoffeeType: i,
  selectedRegion: o,
  selectedSizeOption: u,
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
    let V;
    if (a === "Capsules" ? V = A && s && !f : i === "Office" ? V = u && !f : V = s && !f, !V || i === "Masterpiece") return;
    let Z = "4 Weeks (Recommended)", k = Ua.map((P) => P.value);
    if (a === "Capsules" ? k = Ds : i === "Office" ? k = Ns : ["Low-Caf", "Regional"].includes(i) ? k = _s : ["Roasters Choice", "Curated"].includes(i) && (k = Ts), k.includes(Z) || (Z = k.length > 0 ? k[0] : ""), Z && !f)
      try {
        b(Z);
      } catch (P) {
        console.error(`Error setting initial default frequency for ${i || a}:`, P);
      }
  }, [s, i, a, A, u, f, b]), w.useEffect(() => {
    if (i === "Masterpiece" && s && typeof b == "function")
      try {
        (!f || f !== "4 Weeks (Recommended)") && b("4 Weeks (Recommended)");
      } catch (V) {
        console.error("Error auto-setting Masterpiece frequency state:", V);
      }
  }, [i, s, f, b]), w.useEffect(() => {
    let V = null, N = !1, Z = [];
    if (a === "Capsules" ? Z = Ds : ["Roasters Choice", "Curated"].includes(i) ? Z = Ts : ["Low-Caf", "Regional"].includes(i) ? Z = _s : i === "Office" && (Z = Ns), Z.length > 0 && f && !Z.includes(f) && (V = Z.includes("4 Weeks (Recommended)") ? "4 Weeks (Recommended)" : Z[0], N = !0), N && typeof b == "function") {
      console.warn(`${i || a} selected with invalid frequency '${f}', resetting to ${V}.`);
      try {
        b(V);
      } catch (k) {
        console.error(`Error resetting frequency for ${i || a}:`, k);
      }
    }
  }, [i, a, f, b]), w.useEffect(() => {
    let V = !0, N = !1;
    if (a === "Capsules" && s ? (V = Ks.some((Z) => Z.value === s), V || (N = !0)) : i === "Curated" && s ? (V = Qs.some((Z) => Z.value === s), V || (N = !0)) : i === "Masterpiece" && s && (V = Zs.some((Z) => Z.value === s), V || (N = !0)), N && i !== "Office" && (console.warn(`${i || a} selected with invalid quantity '${s}', resetting quantity.`), typeof y == "function"))
      try {
        y("");
      } catch (Z) {
        console.error(`Error resetting quantity for ${i || a}:`, Z);
      }
  }, [i, a, s, y]);
  const T = () => {
    O(!0);
  }, j = () => {
    O(!1), x && x();
  }, D = a === "Filter" ? ow : cw, L = a !== "Capsules" && i && i !== "Office" && (i === "Roasters Choice" || i === "Curated" || i === "Masterpiece" || i === "Low-Caf" || i === "Regional" && o), Y = a === "Capsules" && A, J = i === "Office" && u, Q = a === "Capsules" && A && s, H = s && i && !["Office"].includes(i) && a !== "Capsules", ee = J || Q || H, le = ee && (a === "Capsules" || i !== "Masterpiece"), ae = ee && a !== "Capsules" && i === "Masterpiece", oe = a === "Capsules" ? Ua.filter((V) => Ds.includes(V.value)) : i === "Office" ? Ua.filter((V) => Ns.includes(V.value)) : ["Roasters Choice", "Curated"].includes(i) ? Ua.filter((V) => Ts.includes(V.value)) : ["Low-Caf", "Regional"].includes(i) ? Ua.filter((V) => _s.includes(V.value)) : Ua, me = a === "Capsules" ? Ks : i === "Curated" ? Qs : i === "Masterpiece" ? Zs : fw, he = (V) => V ? a === "Capsules" ? pw[V] || V : i === "Curated" ? dw[V] || V : i === "Masterpiece" ? mw[V] || V : i === "Low-Caf" ? `${V}x 250g` : i === "Regional" ? `${V}x 250g` : i === "Office" ? V : i === "Roasters Choice" ? `${V} x 250g` : V : i === "Office" ? "Select Size..." : "Select Quantity...";
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
            /* @__PURE__ */ S.jsx(Rn, { value: "Filter", children: "Filter" }),
            /* @__PURE__ */ S.jsx(Rn, { value: "Espresso", children: "Espresso" }),
            /* @__PURE__ */ S.jsx(Rn, { value: "Capsules", children: "Capsules" })
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
          /* @__PURE__ */ S.jsx(Ul, { className: "dropdown-content-panel", children: /* @__PURE__ */ S.jsx(Ll, { value: A, onValueChange: C, children: hw.map((V) => /* @__PURE__ */ S.jsx(Rn, { value: V.value, children: V.label }, V.value)) }) })
        ] })
      ] }),
      ["Filter", "Espresso"].includes(a) && /* @__PURE__ */ S.jsxs("div", { className: "dropdown-row", children: [
        /* @__PURE__ */ S.jsx("h3", { className: "dropdown-label", children: "Subscription Style" }),
        /* @__PURE__ */ S.jsxs(zl, { children: [
          /* @__PURE__ */ S.jsx(jl, { asChild: !0, children: /* @__PURE__ */ S.jsxs(On, { variant: "outline", className: "dropdown-trigger-button", children: [
            i || "Select Type...",
            /* @__PURE__ */ S.jsx(Nl, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
          ] }) }),
          /* @__PURE__ */ S.jsx(Ul, { className: "dropdown-content-panel", children: /* @__PURE__ */ S.jsx(Ll, { value: i, onValueChange: p, children: D.map((V) => /* @__PURE__ */ S.jsx(Rn, { value: V.value, children: V.label }, V.value)) }) })
        ] })
      ] }),
      a !== "Capsules" && i && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
        i === "Roasters Choice" && /* @__PURE__ */ S.jsx("div", { className: "dropdown-row", style: { justifyContent: "center" }, children: /* @__PURE__ */ S.jsx("div", { className: "w-fit", children: /* @__PURE__ */ S.jsx("ul", { className: "text-white bg-[#161616] w-full rounded-sm border border-[#A67C52] roasters-info-list", children: /* @__PURE__ */ S.jsxs("li", { className: "w-full p-1 text-lg", children: [
          /* @__PURE__ */ S.jsx("span", { className: "text-[#A67C52]", children: "Every Month," }),
          " Our Roasters Pick a New Coffee for You"
        ] }) }) }) }, "rc-info"),
        i === "Curated" && /* @__PURE__ */ S.jsx("div", { className: "dropdown-row", style: { justifyContent: "center" }, children: /* @__PURE__ */ S.jsx("div", { className: "w-fit", children: /* @__PURE__ */ S.jsx("ul", { className: "text-white bg-[#161616] w-full rounded-sm border border-[#A67C52] roasters-info-list", children: /* @__PURE__ */ S.jsxs("li", { className: "w-full p-1 text-lg", children: [
          /* @__PURE__ */ S.jsx("span", { className: "text-[#A67C52]", children: "Every month," }),
          " Our Roasters pick two different coffees for you"
        ] }) }) }) }, "curated-info"),
        i === "Masterpiece" && /* @__PURE__ */ S.jsx("div", { className: "dropdown-row", style: { justifyContent: "center" }, children: /* @__PURE__ */ S.jsx("div", { className: "w-fit", children: /* @__PURE__ */ S.jsx("ul", { className: "text-white bg-[#161616] w-full rounded-sm border border-[#A67C52] roasters-info-list", children: /* @__PURE__ */ S.jsxs("li", { className: "w-full p-1 text-lg", children: [
          /* @__PURE__ */ S.jsx("span", { className: "text-[#A67C52]", children: "Every month," }),
          " We send you one bag of the most extraordinary coffee"
        ] }) }) }) }, "masterpiece-info"),
        i === "Low-Caf" && /* @__PURE__ */ S.jsx("div", { className: "dropdown-row", style: { justifyContent: "center" }, children: /* @__PURE__ */ S.jsx("div", { className: "w-fit", children: /* @__PURE__ */ S.jsx("ul", { className: "text-white bg-[#161616] w-full rounded-sm border border-[#A67C52] roasters-info-list", children: /* @__PURE__ */ S.jsxs("li", { className: "w-full p-1 text-lg", children: [
          /* @__PURE__ */ S.jsx("span", { className: "text-[#A67C52]", children: "Receive our" }),
          " low-caf varietal coffee on repeat"
        ] }) }) }) }, "lowcaf-info"),
        i === "Regional" && /* @__PURE__ */ S.jsx("div", { className: "dropdown-row", style: { justifyContent: "center" }, children: /* @__PURE__ */ S.jsx("div", { className: "w-fit", children: /* @__PURE__ */ S.jsx("ul", { className: "text-white bg-[#161616] w-full rounded-sm border border-[#A67C52] roasters-info-list", children: /* @__PURE__ */ S.jsxs("li", { className: "w-full p-1 text-lg", children: [
          /* @__PURE__ */ S.jsx("span", { className: "text-[#A67C52]", children: "Pick your favourite region" }),
          " and receive the same coffee on repeat"
        ] }) }) }) }, "regional-info"),
        i === "Office" && /* @__PURE__ */ S.jsx("div", { className: "dropdown-row", style: { justifyContent: "center" }, children: /* @__PURE__ */ S.jsx("div", { className: "w-fit", children: /* @__PURE__ */ S.jsx("ul", { className: "text-white bg-[#161616] w-full rounded-sm border border-[#A67C52] roasters-info-list", children: /* @__PURE__ */ S.jsxs("li", { className: "w-full p-1 text-lg", children: [
          /* @__PURE__ */ S.jsx("span", { className: "text-[#A67C52]", children: "Our Espresso works on all Office Machines:" }),
          " Full Automat, Espresso, Filter"
        ] }) }) }) }, "office-info"),
        i === "Office" && /* @__PURE__ */ S.jsxs("div", { className: "dropdown-row", children: [
          /* @__PURE__ */ S.jsx("h3", { className: "dropdown-label", children: "Size" }),
          /* @__PURE__ */ S.jsxs(zl, { children: [
            /* @__PURE__ */ S.jsx(jl, { asChild: !0, children: /* @__PURE__ */ S.jsxs(On, { variant: "outline", className: "dropdown-trigger-button", children: [
              u || "Select Size...",
              /* @__PURE__ */ S.jsx(Nl, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
            ] }) }),
            /* @__PURE__ */ S.jsx(Ul, { className: "dropdown-content-panel", children: /* @__PURE__ */ S.jsx(Ll, { value: u, onValueChange: h, children: sw.map((V) => /* @__PURE__ */ S.jsx(Rn, { value: V.value, children: V.label }, V.value)) }) })
          ] })
        ] }, "office-size"),
        i === "Regional" && /* @__PURE__ */ S.jsxs("div", { className: "dropdown-row", children: [
          /* @__PURE__ */ S.jsx("h3", { className: "dropdown-label", children: "Region" }),
          /* @__PURE__ */ S.jsxs(zl, { children: [
            /* @__PURE__ */ S.jsx(jl, { asChild: !0, children: /* @__PURE__ */ S.jsxs(On, { variant: "outline", className: "dropdown-trigger-button", children: [
              o || "Select Region...",
              /* @__PURE__ */ S.jsx(Nl, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
            ] }) }),
            /* @__PURE__ */ S.jsx(Ul, { className: "dropdown-content-panel", children: /* @__PURE__ */ S.jsx(Ll, { value: o, onValueChange: v, children: vw.map((V) => /* @__PURE__ */ S.jsx(Rn, { value: V.value, children: V.label }, V.value)) }) })
          ] })
        ] }, "regional-region")
      ] }),
      (Y || L) && /* @__PURE__ */ S.jsxs("div", { className: "dropdown-row", children: [
        /* @__PURE__ */ S.jsx("h3", { className: "dropdown-label", children: "Quantity of Coffee" }),
        /* @__PURE__ */ S.jsxs(zl, { children: [
          /* @__PURE__ */ S.jsx(jl, { asChild: !0, children: /* @__PURE__ */ S.jsxs(On, { variant: "outline", className: "dropdown-trigger-button", children: [
            he(s),
            /* @__PURE__ */ S.jsx(Nl, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
          ] }) }),
          /* @__PURE__ */ S.jsx(Ul, { className: "dropdown-content-panel", children: /* @__PURE__ */ S.jsx(Ll, { value: s, onValueChange: y, children: me.map((V) => /* @__PURE__ */ S.jsx(Rn, { value: V.value, children: a === "Capsules" || i === "Curated" || i === "Masterpiece" ? V.label : i === "Low-Caf" ? `${V.label}x 250g` : i === "Regional" ? `${V.label}x 250g` : i === "Roasters Choice" ? `${V.label} x 250g` : `${V.label} ${parseInt(V.value) > 1 ? "bags" : "bag"} (250g each)` }, V.value)) }) })
        ] })
      ] }),
      le && /* @__PURE__ */ S.jsxs("div", { className: "dropdown-row", children: [
        /* @__PURE__ */ S.jsx("h3", { className: "dropdown-label", children: "Frequency" }),
        /* @__PURE__ */ S.jsxs(zl, { children: [
          /* @__PURE__ */ S.jsx(jl, { asChild: !0, children: /* @__PURE__ */ S.jsxs(On, { variant: "outline", className: "dropdown-trigger-button", children: [
            f || "Select Frequency...",
            /* @__PURE__ */ S.jsx(Nl, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
          ] }) }),
          /* @__PURE__ */ S.jsx(Ul, { className: "dropdown-content-panel", children: /* @__PURE__ */ S.jsx(Ll, { value: f, onValueChange: b, children: oe.map((V) => /* @__PURE__ */ S.jsx(Rn, { value: V.value, children: V.label }, V.value)) }) })
        ] })
      ] }),
      ae && /* @__PURE__ */ S.jsxs("div", { className: "dropdown-row masterpiece-frequency-info", children: [
        /* @__PURE__ */ S.jsx("h3", { className: "dropdown-label", children: "Frequency" }),
        /* @__PURE__ */ S.jsx("div", { className: "info-text-container flex items-center justify-center", children: /* @__PURE__ */ S.jsx("div", { className: "static-text-value h-10 px-3 py-2 bg-[#161616] text-[#A67C52] font-bold rounded-md flex items-center w-full justify-center border-1 border-[#A67C52]", children: "4 weeks" }) })
      ] }),
      (i === "Office" && u && f || a === "Capsules" && A && s && f || s && f && i && i !== "Office" && a !== "Capsules") && /* @__PURE__ */ S.jsxs("div", { className: "final-selection mt-4 p-3 border rounded-md bg-secondary text-secondary-foreground w-5/6 text-center", children: [
        "Selected: ",
        a,
        a === "Capsules" && A && ` - Taste: ${A}`,
        a !== "Capsules" && i && ` - ${i}`,
        i === "Regional" && o && ` - ${o}`,
        i === "Office" && u && ` - ${u}`,
        (a === "Capsules" || a !== "Capsules" && i !== "Office") && s && ` - Qty: ${he(s)}`,
        f && ` - Every ${f.replace(" (Recommended)", "")}`
      ] })
    ] })
  ] });
};
function yw(a) {
  return Object.prototype.toString.call(a) === "[object Object]";
}
function Qp(a) {
  return yw(a) || Array.isArray(a);
}
function bw() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function vf(a, i) {
  const o = Object.keys(a), u = Object.keys(i);
  if (o.length !== u.length) return !1;
  const s = JSON.stringify(Object.keys(a.breakpoints || {})), f = JSON.stringify(Object.keys(i.breakpoints || {}));
  return s !== f ? !1 : o.every((d) => {
    const p = a[d], v = i[d];
    return typeof p == "function" ? `${p}` == `${v}` : !Qp(p) || !Qp(v) ? p === v : vf(p, v);
  });
}
function Zp(a) {
  return a.concat().sort((i, o) => i.name > o.name ? 1 : -1).map((i) => i.options);
}
function xw(a, i) {
  if (a.length !== i.length) return !1;
  const o = Zp(a), u = Zp(i);
  return o.every((s, f) => {
    const d = u[f];
    return vf(s, d);
  });
}
function gf(a) {
  return typeof a == "number";
}
function Js(a) {
  return typeof a == "string";
}
function Wu(a) {
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
function Fr(a, i) {
  return Ve(a - i);
}
function Sw(a, i) {
  if (a === 0 || i === 0 || Ve(a) <= Ve(i)) return 0;
  const o = Fr(Ve(a), Ve(i));
  return Ve(o / a);
}
function Ew(a) {
  return Math.round(a * 100) / 100;
}
function ti(a) {
  return ni(a).map(Number);
}
function Kt(a) {
  return a[si(a)];
}
function si(a) {
  return Math.max(0, a.length - 1);
}
function bf(a, i) {
  return i === si(a);
}
function Jp(a, i = 0) {
  return Array.from(Array(a), (o, u) => i + u);
}
function ni(a) {
  return Object.keys(a);
}
function Lg(a, i) {
  return [a, i].reduce((o, u) => (ni(u).forEach((s) => {
    const f = o[s], d = u[s], p = Kp(f) && Kp(d);
    o[s] = p ? Lg(f, d) : d;
  }), o), {});
}
function Fs(a, i) {
  return typeof i.MouseEvent < "u" && a instanceof i.MouseEvent;
}
function ww(a, i) {
  const o = {
    start: u,
    center: s,
    end: f
  };
  function u() {
    return 0;
  }
  function s(v) {
    return f(v) / 2;
  }
  function f(v) {
    return i - v;
  }
  function d(v, h) {
    return Js(a) ? o[a](v) : a(i, v, h);
  }
  return {
    measure: d
  };
}
function li() {
  let a = [];
  function i(s, f, d, p = {
    passive: !0
  }) {
    let v;
    if ("addEventListener" in s)
      s.addEventListener(f, d, p), v = () => s.removeEventListener(f, d, p);
    else {
      const h = s;
      h.addListener(d), v = () => h.removeListener(d);
    }
    return a.push(v), u;
  }
  function o() {
    a = a.filter((s) => s());
  }
  const u = {
    add: i,
    clear: o
  };
  return u;
}
function Aw(a, i, o, u) {
  const s = li(), f = 1e3 / 60;
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
    d || (d = O, o(), o());
    const T = O - d;
    for (d = O, p += T; p >= f; )
      o(), p -= f;
    const j = p / f;
    u(j), v && (v = i.requestAnimationFrame(b));
  }
  function x() {
    v || (v = i.requestAnimationFrame(b));
  }
  function A() {
    i.cancelAnimationFrame(v), d = null, p = 0, v = 0;
  }
  function C() {
    d = null, p = 0;
  }
  return {
    init: h,
    destroy: y,
    start: x,
    stop: A,
    update: o,
    render: u
  };
}
function Mw(a, i) {
  const o = i === "rtl", u = a === "y", s = u ? "y" : "x", f = u ? "x" : "y", d = !u && o ? -1 : 1, p = y(), v = b();
  function h(C) {
    const {
      height: E,
      width: O
    } = C;
    return u ? E : O;
  }
  function y() {
    return u ? "top" : o ? "right" : "left";
  }
  function b() {
    return u ? "bottom" : o ? "left" : "right";
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
function Hl(a = 0, i = 0) {
  const o = Ve(a - i);
  function u(h) {
    return h < a;
  }
  function s(h) {
    return h > i;
  }
  function f(h) {
    return u(h) || s(h);
  }
  function d(h) {
    return f(h) ? u(h) ? a : i : h;
  }
  function p(h) {
    return o ? h - o * Math.ceil((h - i) / o) : h;
  }
  return {
    length: o,
    max: i,
    min: a,
    constrain: d,
    reachedAny: f,
    reachedMax: s,
    reachedMin: u,
    removeOffset: p
  };
}
function Bg(a, i, o) {
  const {
    constrain: u
  } = Hl(0, a), s = a + 1;
  let f = d(i);
  function d(x) {
    return o ? Ve((s + x) % s) : u(x);
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
    return Bg(a, p(), o);
  }
  const b = {
    get: p,
    set: v,
    add: h,
    clone: y
  };
  return b;
}
function Cw(a, i, o, u, s, f, d, p, v, h, y, b, x, A, C, E, O, T, j) {
  const {
    cross: D,
    direction: L
  } = a, Y = ["INPUT", "SELECT", "TEXTAREA"], J = {
    passive: !1
  }, Q = li(), H = li(), ee = Hl(50, 225).constrain(A.measure(20)), le = {
    mouse: 300,
    touch: 400
  }, ae = {
    mouse: 500,
    touch: 600
  }, oe = C ? 43 : 25;
  let me = !1, he = 0, V = 0, N = !1, Z = !1, k = !1, P = !1;
  function M(ne) {
    if (!j) return;
    function Ce(Pe) {
      (Wu(j) || j(ne, Pe)) && ce(Pe);
    }
    const He = i;
    Q.add(He, "dragstart", (Pe) => Pe.preventDefault(), J).add(He, "touchmove", () => {
    }, J).add(He, "touchend", () => {
    }).add(He, "touchstart", Ce).add(He, "mousedown", Ce).add(He, "touchcancel", ve).add(He, "contextmenu", ve).add(He, "click", Me, !0);
  }
  function X() {
    Q.clear(), H.clear();
  }
  function W() {
    const ne = P ? o : i;
    H.add(ne, "touchmove", fe, J).add(ne, "touchend", ve).add(ne, "mousemove", fe, J).add(ne, "mouseup", ve);
  }
  function I(ne) {
    const Ce = ne.nodeName || "";
    return Y.includes(Ce);
  }
  function te() {
    return (C ? ae : le)[P ? "mouse" : "touch"];
  }
  function ge(ne, Ce) {
    const He = b.add(yf(ne) * -1), Pe = y.byDistance(ne, !C).distance;
    return C || Ve(ne) < ee ? Pe : O && Ce ? Pe * 0.5 : y.byIndex(He.get(), 0).distance;
  }
  function ce(ne) {
    const Ce = Fs(ne, u);
    P = Ce, k = C && Ce && !ne.buttons && me, me = Fr(s.get(), d.get()) >= 2, !(Ce && ne.button !== 0) && (I(ne.target) || (N = !0, f.pointerDown(ne), h.useFriction(0).useDuration(0), s.set(d), W(), he = f.readPoint(ne), V = f.readPoint(ne, D), x.emit("pointerDown")));
  }
  function fe(ne) {
    if (!Fs(ne, u) && ne.touches.length >= 2) return ve(ne);
    const He = f.readPoint(ne), Pe = f.readPoint(ne, D), gt = Fr(He, he), Xe = Fr(Pe, V);
    if (!Z && !P && (!ne.cancelable || (Z = gt > Xe, !Z)))
      return ve(ne);
    const Vt = f.pointerMove(ne);
    gt > E && (k = !0), h.useFriction(0.3).useDuration(0.75), p.start(), s.add(L(Vt)), ne.preventDefault();
  }
  function ve(ne) {
    const He = y.byDistance(0, !1).index !== b.get(), Pe = f.pointerUp(ne) * te(), gt = ge(L(Pe), He), Xe = Sw(Pe, gt), Vt = oe - 10 * Xe, ct = T + Xe / 50;
    Z = !1, N = !1, H.clear(), h.useDuration(Vt).useFriction(ct), v.distance(gt, !C), P = !1, x.emit("pointerUp");
  }
  function Me(ne) {
    k && (ne.stopPropagation(), ne.preventDefault(), k = !1);
  }
  function Be() {
    return N;
  }
  return {
    init: M,
    destroy: X,
    pointerDown: Be
  };
}
function Rw(a, i) {
  let u, s;
  function f(b) {
    return b.timeStamp;
  }
  function d(b, x) {
    const C = `client${(x || a.scroll) === "x" ? "X" : "Y"}`;
    return (Fs(b, i) ? b : b.touches[0])[C];
  }
  function p(b) {
    return u = b, s = b, d(b);
  }
  function v(b) {
    const x = d(b) - d(s), A = f(b) - f(u) > 170;
    return s = b, A && (u = b), x;
  }
  function h(b) {
    if (!u || !s) return 0;
    const x = d(s) - d(u), A = f(b) - f(u), C = f(b) - f(s) > 170, E = x / A;
    return A && !C && Ve(E) > 0.1 ? E : 0;
  }
  return {
    pointerDown: p,
    pointerMove: v,
    pointerUp: h,
    readPoint: d
  };
}
function Ow() {
  function a(o) {
    const {
      offsetTop: u,
      offsetLeft: s,
      offsetWidth: f,
      offsetHeight: d
    } = o;
    return {
      top: u,
      right: s + f,
      bottom: u + d,
      left: s,
      width: f,
      height: d
    };
  }
  return {
    measure: a
  };
}
function Tw(a) {
  function i(u) {
    return a * (u / 100);
  }
  return {
    measure: i
  };
}
function _w(a, i, o, u, s, f, d) {
  const p = [a].concat(u);
  let v, h, y = [], b = !1;
  function x(O) {
    return s.measureSize(d.measure(O));
  }
  function A(O) {
    if (!f) return;
    h = x(a), y = u.map(x);
    function T(j) {
      for (const D of j) {
        if (b) return;
        const L = D.target === a, Y = u.indexOf(D.target), J = L ? h : y[Y], Q = x(L ? a : u[Y]);
        if (Ve(Q - J) >= 0.5) {
          O.reInit(), i.emit("resize");
          break;
        }
      }
    }
    v = new ResizeObserver((j) => {
      (Wu(f) || f(O, j)) && T(j);
    }), o.requestAnimationFrame(() => {
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
function Nw(a, i, o, u, s, f) {
  let d = 0, p = 0, v = s, h = f, y = a.get(), b = 0;
  function x() {
    const J = u.get() - a.get(), Q = !v;
    let H = 0;
    return Q ? (d = 0, o.set(u), a.set(u), H = J) : (o.set(a), d += J / v, d *= h, y += d, a.add(d), H = y - b), p = yf(H), b = y, Y;
  }
  function A() {
    const J = u.get() - i.get();
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
    return D(s);
  }
  function j() {
    return L(f);
  }
  function D(J) {
    return v = J, Y;
  }
  function L(J) {
    return h = J, Y;
  }
  const Y = {
    direction: E,
    duration: C,
    velocity: O,
    seek: x,
    settled: A,
    useBaseFriction: j,
    useBaseDuration: T,
    useFriction: L,
    useDuration: D
  };
  return Y;
}
function Dw(a, i, o, u, s) {
  const f = s.measure(10), d = s.measure(50), p = Hl(0.1, 0.99);
  let v = !1;
  function h() {
    return !(v || !a.reachedAny(o.get()) || !a.reachedAny(i.get()));
  }
  function y(A) {
    if (!h()) return;
    const C = a.reachedMin(i.get()) ? "min" : "max", E = Ve(a[C] - i.get()), O = o.get() - i.get(), T = p.constrain(E / d);
    o.subtract(O * T), !A && Ve(O) < f && (o.set(a.constrain(o.get())), u.useDuration(25).useBaseFriction());
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
function zw(a, i, o, u, s) {
  const f = Hl(-i + a, 0), d = b(), p = y(), v = x();
  function h(C, E) {
    return Fr(C, E) <= 1;
  }
  function y() {
    const C = d[0], E = Kt(d), O = d.lastIndexOf(C), T = d.indexOf(E) + 1;
    return Hl(O, T);
  }
  function b() {
    return o.map((C, E) => {
      const {
        min: O,
        max: T
      } = f, j = f.constrain(C), D = !E, L = bf(o, E);
      return D ? T : L || h(O, j) ? O : h(T, j) ? T : j;
    }).map((C) => parseFloat(C.toFixed(3)));
  }
  function x() {
    if (i <= a + s) return [f.max];
    if (u === "keepSnaps") return d;
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
function jw(a, i, o) {
  const u = i[0], s = o ? u - a : Kt(i);
  return {
    limit: Hl(s, u)
  };
}
function Uw(a, i, o, u) {
  const f = i.min + 0.1, d = i.max + 0.1, {
    reachedMin: p,
    reachedMax: v
  } = Hl(f, d);
  function h(x) {
    return x === 1 ? v(o.get()) : x === -1 ? p(o.get()) : !1;
  }
  function y(x) {
    if (!h(x)) return;
    const A = a * (x * -1);
    u.forEach((C) => C.add(A));
  }
  return {
    loop: y
  };
}
function Lw(a) {
  const {
    max: i,
    length: o
  } = a;
  function u(f) {
    const d = f - i;
    return o ? d / -o : 0;
  }
  return {
    get: u
  };
}
function Bw(a, i, o, u, s) {
  const {
    startEdge: f,
    endEdge: d
  } = a, {
    groupSlides: p
  } = s, v = b().map(i.measure), h = x(), y = A();
  function b() {
    return p(u).map((E) => Kt(E)[d] - E[0][f]).map(Ve);
  }
  function x() {
    return u.map((E) => o[f] - E[f]).map((E) => -Ve(E));
  }
  function A() {
    return p(h).map((E) => E[0]).map((E, O) => E + v[O]);
  }
  return {
    snaps: h,
    snapsAligned: y
  };
}
function Hw(a, i, o, u, s, f) {
  const {
    groupSlides: d
  } = s, {
    min: p,
    max: v
  } = u, h = y();
  function y() {
    const x = d(f), A = !a || i === "keepSnaps";
    return o.length === 1 ? [f] : A ? x : x.slice(p, v).map((C, E, O) => {
      const T = !E, j = bf(O, E);
      if (T) {
        const D = Kt(O[0]) + 1;
        return Jp(D);
      }
      if (j) {
        const D = si(f) - Kt(O)[0] + 1;
        return Jp(D, Kt(O)[0]);
      }
      return C;
    });
  }
  return {
    slideRegistry: h
  };
}
function kw(a, i, o, u, s) {
  const {
    reachedAny: f,
    removeOffset: d,
    constrain: p
  } = u;
  function v(C) {
    return C.concat().sort((E, O) => Ve(E) - Ve(O))[0];
  }
  function h(C) {
    const E = a ? d(C) : p(C), O = i.map((j, D) => ({
      diff: y(j - E, 0),
      index: D
    })).sort((j, D) => Ve(j.diff) - Ve(D.diff)), {
      index: T
    } = O[0];
    return {
      index: T,
      distance: E
    };
  }
  function y(C, E) {
    const O = [C, C + o, C - o];
    if (!a) return C;
    if (!E) return v(O);
    const T = O.filter((j) => yf(j) === E);
    return T.length ? v(T) : Kt(O) - o;
  }
  function b(C, E) {
    const O = i[C] - s.get(), T = y(O, E);
    return {
      index: C,
      distance: T
    };
  }
  function x(C, E) {
    const O = s.get() + C, {
      index: T,
      distance: j
    } = h(O), D = !a && f(O);
    if (!E || D) return {
      index: T,
      distance: C
    };
    const L = i[T] - j, Y = C + y(L, 0);
    return {
      index: T,
      distance: Y
    };
  }
  return {
    byDistance: x,
    byIndex: b,
    shortcut: y
  };
}
function Gw(a, i, o, u, s, f, d) {
  function p(b) {
    const x = b.distance, A = b.index !== i.get();
    f.add(x), x && (u.duration() ? a.start() : (a.update(), a.render(1), a.update())), A && (o.set(i.get()), i.set(b.index), d.emit("select"));
  }
  function v(b, x) {
    const A = s.byDistance(b, x);
    p(A);
  }
  function h(b, x) {
    const A = i.clone().set(b), C = s.byIndex(A.get(), x);
    p(C);
  }
  return {
    distance: v,
    index: h
  };
}
function qw(a, i, o, u, s, f, d, p) {
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
      const j = o.findIndex((D) => D.includes(E));
      gf(j) && (s.useDuration(0), u.index(j, 0), d.emit("slideFocus"));
    }
    f.add(document, "keydown", b, !1), i.forEach((E, O) => {
      f.add(E, "focus", (T) => {
        (Wu(p) || p(A, T)) && C(O);
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
function Jr(a) {
  let i = a;
  function o() {
    return i;
  }
  function u(v) {
    i = d(v);
  }
  function s(v) {
    i += d(v);
  }
  function f(v) {
    i -= d(v);
  }
  function d(v) {
    return gf(v) ? v : v.get();
  }
  return {
    get: o,
    set: u,
    add: s,
    subtract: f
  };
}
function Hg(a, i) {
  const o = a.scroll === "x" ? d : p, u = i.style;
  let s = null, f = !1;
  function d(x) {
    return `translate3d(${x}px,0px,0px)`;
  }
  function p(x) {
    return `translate3d(0px,${x}px,0px)`;
  }
  function v(x) {
    if (f) return;
    const A = Ew(a.direction(x));
    A !== s && (u.transform = o(A), s = A);
  }
  function h(x) {
    f = !x;
  }
  function y() {
    f || (u.transform = "", i.getAttribute("style") || i.removeAttribute("style"));
  }
  return {
    clear: y,
    to: v,
    toggleActive: h
  };
}
function Yw(a, i, o, u, s, f, d, p, v) {
  const y = ti(s), b = ti(s).reverse(), x = T().concat(j());
  function A(Q, H) {
    return Q.reduce((ee, le) => ee - s[le], H);
  }
  function C(Q, H) {
    return Q.reduce((ee, le) => A(ee, H) > 0 ? ee.concat([le]) : ee, []);
  }
  function E(Q) {
    return f.map((H, ee) => ({
      start: H - u[ee] + 0.5 + Q,
      end: H + i - 0.5 + Q
    }));
  }
  function O(Q, H, ee) {
    const le = E(H);
    return Q.map((ae) => {
      const oe = ee ? 0 : -o, me = ee ? o : 0, he = ee ? "end" : "start", V = le[ae][he];
      return {
        index: ae,
        loopPoint: V,
        slideLocation: Jr(-1),
        translate: Hg(a, v[ae]),
        target: () => p.get() > V ? oe : me
      };
    });
  }
  function T() {
    const Q = d[0], H = C(b, Q);
    return O(H, o, !1);
  }
  function j() {
    const Q = i - d[0] - 1, H = C(y, Q);
    return O(H, -o, !0);
  }
  function D() {
    return x.every(({
      index: Q
    }) => {
      const H = y.filter((ee) => ee !== Q);
      return A(H, i) <= 0.1;
    });
  }
  function L() {
    x.forEach((Q) => {
      const {
        target: H,
        translate: ee,
        slideLocation: le
      } = Q, ae = H();
      ae !== le.get() && (ee.to(ae), le.set(ae));
    });
  }
  function Y() {
    x.forEach((Q) => Q.translate.clear());
  }
  return {
    canLoop: D,
    clear: Y,
    loop: L,
    loopPoints: x
  };
}
function Vw(a, i, o) {
  let u, s = !1;
  function f(v) {
    if (!o) return;
    function h(y) {
      for (const b of y)
        if (b.type === "childList") {
          v.reInit(), i.emit("slidesChanged");
          break;
        }
    }
    u = new MutationObserver((y) => {
      s || (Wu(o) || o(v, y)) && h(y);
    }), u.observe(a, {
      childList: !0
    });
  }
  function d() {
    u && u.disconnect(), s = !0;
  }
  return {
    init: f,
    destroy: d
  };
}
function Xw(a, i, o, u) {
  const s = {};
  let f = null, d = null, p, v = !1;
  function h() {
    p = new IntersectionObserver((C) => {
      v || (C.forEach((E) => {
        const O = i.indexOf(E.target);
        s[O] = E;
      }), f = null, d = null, o.emit("slidesInView"));
    }, {
      root: a.parentElement,
      threshold: u
    }), i.forEach((C) => p.observe(C));
  }
  function y() {
    p && p.disconnect(), v = !0;
  }
  function b(C) {
    return ni(s).reduce((E, O) => {
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
function Qw(a, i, o, u, s, f) {
  const {
    measureSize: d,
    startEdge: p,
    endEdge: v
  } = a, h = o[0] && s, y = C(), b = E(), x = o.map(d), A = O();
  function C() {
    if (!h) return 0;
    const j = o[0];
    return Ve(i[p] - j[p]);
  }
  function E() {
    if (!h) return 0;
    const j = f.getComputedStyle(Kt(u));
    return parseFloat(j.getPropertyValue(`margin-${v}`));
  }
  function O() {
    return o.map((j, D, L) => {
      const Y = !D, J = bf(L, D);
      return Y ? x[D] + y : J ? x[D] + b : L[D + 1][p] - j[p];
    }).map(Ve);
  }
  return {
    slideSizes: x,
    slideSizesWithGaps: A,
    startGap: y,
    endGap: b
  };
}
function Zw(a, i, o, u, s, f, d, p, v) {
  const {
    startEdge: h,
    endEdge: y,
    direction: b
  } = a, x = gf(o);
  function A(T, j) {
    return ti(T).filter((D) => D % j === 0).map((D) => T.slice(D, D + j));
  }
  function C(T) {
    return T.length ? ti(T).reduce((j, D, L) => {
      const Y = Kt(j) || 0, J = Y === 0, Q = D === si(T), H = s[h] - f[Y][h], ee = s[h] - f[D][y], le = !u && J ? b(d) : 0, ae = !u && Q ? b(p) : 0, oe = Ve(ee - ae - (H + le));
      return L && oe > i + v && j.push(D), Q && j.push(T.length), j;
    }, []).map((j, D, L) => {
      const Y = Math.max(L[D - 1] || 0);
      return T.slice(Y, j);
    }) : [];
  }
  function E(T) {
    return x ? A(T, o) : C(T);
  }
  return {
    groupSlides: E
  };
}
function Kw(a, i, o, u, s, f, d) {
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
    watchResize: D,
    watchSlides: L,
    watchDrag: Y,
    watchFocus: J
  } = f, Q = 2, H = Ow(), ee = H.measure(i), le = o.map(H.measure), ae = Mw(v, h), oe = ae.measureSize(ee), me = Tw(oe), he = ww(p, oe), V = !b && !!j, N = b || !!j, {
    slideSizes: Z,
    slideSizesWithGaps: k,
    startGap: P,
    endGap: M
  } = Qw(ae, ee, le, o, N, s), X = Zw(ae, oe, O, b, ee, le, P, M, Q), {
    snaps: W,
    snapsAligned: I
  } = Bw(ae, he, ee, le, X), te = -Kt(W) + Kt(k), {
    snapsContained: ge,
    scrollContainLimit: ce
  } = zw(oe, te, I, j, Q), fe = V ? ge : I, {
    limit: ve
  } = jw(te, fe, b), Me = Bg(si(fe), y, b), Be = Me.clone(), Re = ti(o), ne = ({
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
    previousLocation: Yl,
    scrollLooper: sn,
    slideLooper: Vl,
    dragHandler: ml,
    animation: to,
    eventHandler: Za,
    scrollBounds: mi,
    options: {
      loop: Xl
    }
  }, jn) => {
    const hi = zn.settled(), pi = !mi.shouldConstrain(), Ka = Xl ? hi : hi && pi, Ql = Ka && !ml.pointerDown();
    Ql && to.stop();
    const Ja = Qa.get() * jn + Yl.get() * (1 - jn);
    cn.set(Ja), Xl && (sn.loop(zn.direction()), Vl.loop()), Xa.to(cn.get()), Ql && Za.emit("settle"), Ka || Za.emit("scroll");
  }, He = Aw(u, s, () => ne(rt), (zn) => Ce(rt, zn)), Pe = 0.68, gt = fe[Me.get()], Xe = Jr(gt), Vt = Jr(gt), ct = Jr(gt), $t = Jr(gt), Pt = Nw(Xe, ct, Vt, $t, x, Pe), Va = kw(b, fe, te, ve, $t), ql = Gw(He, Me, Be, Pt, Va, $t, d), fi = Lw(ve), di = li(), dl = Xw(i, o, d, E), {
    slideRegistry: st
  } = Hw(V, j, fe, ce, X, Re), It = qw(a, o, st, ql, Pt, di, d, J), rt = {
    ownerDocument: u,
    ownerWindow: s,
    eventHandler: d,
    containerRect: ee,
    slideRects: le,
    animation: He,
    axis: ae,
    dragHandler: Cw(ae, a, u, s, $t, Rw(ae, s), Xe, He, ql, Pt, Va, Me, d, me, A, C, T, Pe, Y),
    eventStore: di,
    percentOfView: me,
    index: Me,
    indexPrevious: Be,
    limit: ve,
    location: Xe,
    offsetLocation: ct,
    previousLocation: Vt,
    options: f,
    resizeHandler: _w(i, d, s, o, ae, D, H),
    scrollBody: Pt,
    scrollBounds: Dw(ve, ct, $t, Pt, me),
    scrollLooper: Uw(te, ve, ct, [Xe, ct, Vt, $t]),
    scrollProgress: fi,
    scrollSnapList: fe.map(fi.get),
    scrollSnaps: fe,
    scrollTarget: Va,
    scrollTo: ql,
    slideLooper: Yw(ae, oe, te, Z, k, W, fe, ct, o),
    slideFocus: It,
    slidesHandler: Vw(i, d, L),
    slidesInView: dl,
    slideIndexes: Re,
    slideRegistry: st,
    slidesToScroll: X,
    target: $t,
    translate: Hg(ae, i)
  };
  return rt;
}
function Jw() {
  let a = {}, i;
  function o(h) {
    i = h;
  }
  function u(h) {
    return a[h] || [];
  }
  function s(h) {
    return u(h).forEach((y) => y(i, h)), v;
  }
  function f(h, y) {
    return a[h] = u(h).concat([y]), v;
  }
  function d(h, y) {
    return a[h] = u(h).filter((b) => b !== y), v;
  }
  function p() {
    a = {};
  }
  const v = {
    init: o,
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
function $w(a) {
  function i(f, d) {
    return Lg(f, d || {});
  }
  function o(f) {
    const d = f.breakpoints || {}, p = ni(d).filter((v) => a.matchMedia(v).matches).map((v) => d[v]).reduce((v, h) => i(v, h), {});
    return i(f, p);
  }
  function u(f) {
    return f.map((d) => ni(d.breakpoints || {})).reduce((d, p) => d.concat(p), []).map(a.matchMedia);
  }
  return {
    mergeOptions: i,
    optionsAtMedia: o,
    optionsMediaQueries: u
  };
}
function Pw(a) {
  let i = [];
  function o(f, d) {
    return i = d.filter(({
      options: p
    }) => a.optionsAtMedia(p).active !== !1), i.forEach((p) => p.init(f, a)), d.reduce((p, v) => Object.assign(p, {
      [v.name]: v
    }), {});
  }
  function u() {
    i = i.filter((f) => f.destroy());
  }
  return {
    init: o,
    destroy: u
  };
}
function Vu(a, i, o) {
  const u = a.ownerDocument, s = u.defaultView, f = $w(s), d = Pw(f), p = li(), v = Jw(), {
    mergeOptions: h,
    optionsAtMedia: y,
    optionsMediaQueries: b
  } = f, {
    on: x,
    off: A,
    emit: C
  } = v, E = ae;
  let O = !1, T, j = h(Fw, Vu.globalOptions), D = h(j), L = [], Y, J, Q;
  function H() {
    const {
      container: Re,
      slides: ne
    } = D;
    J = (Js(Re) ? a.querySelector(Re) : Re) || a.children[0];
    const He = Js(ne) ? J.querySelectorAll(ne) : ne;
    Q = [].slice.call(He || J.children);
  }
  function ee(Re) {
    const ne = Kw(a, J, Q, u, s, Re, v);
    if (Re.loop && !ne.slideLooper.canLoop()) {
      const Ce = Object.assign({}, Re, {
        loop: !1
      });
      return ee(Ce);
    }
    return ne;
  }
  function le(Re, ne) {
    O || (j = h(j, Re), D = y(j), L = ne || L, H(), T = ee(D), b([j, ...L.map(({
      options: Ce
    }) => Ce)]).forEach((Ce) => p.add(Ce, "change", ae)), D.active && (T.translate.to(T.location.get()), T.animation.init(), T.slidesInView.init(), T.slideFocus.init(Be), T.eventHandler.init(Be), T.resizeHandler.init(Be), T.slidesHandler.init(Be), T.options.loop && T.slideLooper.loop(), J.offsetParent && Q.length && T.dragHandler.init(Be), Y = d.init(Be, L)));
  }
  function ae(Re, ne) {
    const Ce = X();
    oe(), le(h({
      startIndex: Ce
    }, Re), ne), v.emit("reInit");
  }
  function oe() {
    T.dragHandler.destroy(), T.eventStore.clear(), T.translate.clear(), T.slideLooper.clear(), T.resizeHandler.destroy(), T.slidesHandler.destroy(), T.slidesInView.destroy(), T.animation.destroy(), d.destroy(), p.clear();
  }
  function me() {
    O || (O = !0, p.clear(), oe(), v.emit("destroy"), v.clear());
  }
  function he(Re, ne, Ce) {
    !D.active || O || (T.scrollBody.useBaseFriction().useDuration(ne === !0 ? 0 : D.duration), T.scrollTo.index(Re, Ce || 0));
  }
  function V(Re) {
    const ne = T.index.add(1).get();
    he(ne, Re, -1);
  }
  function N(Re) {
    const ne = T.index.add(-1).get();
    he(ne, Re, 1);
  }
  function Z() {
    return T.index.add(1).get() !== X();
  }
  function k() {
    return T.index.add(-1).get() !== X();
  }
  function P() {
    return T.scrollSnapList;
  }
  function M() {
    return T.scrollProgress.get(T.offsetLocation.get());
  }
  function X() {
    return T.index.get();
  }
  function W() {
    return T.indexPrevious.get();
  }
  function I() {
    return T.slidesInView.get();
  }
  function te() {
    return T.slidesInView.get(!1);
  }
  function ge() {
    return Y;
  }
  function ce() {
    return T;
  }
  function fe() {
    return a;
  }
  function ve() {
    return J;
  }
  function Me() {
    return Q;
  }
  const Be = {
    canScrollNext: Z,
    canScrollPrev: k,
    containerNode: ve,
    internalEngine: ce,
    destroy: me,
    off: A,
    on: x,
    emit: C,
    plugins: ge,
    previousScrollSnap: W,
    reInit: E,
    rootNode: fe,
    scrollNext: V,
    scrollPrev: N,
    scrollProgress: M,
    scrollSnapList: P,
    scrollTo: he,
    selectedScrollSnap: X,
    slideNodes: Me,
    slidesInView: I,
    slidesNotInView: te
  };
  return le(i, o), setTimeout(() => v.emit("init"), 0), Be;
}
Vu.globalOptions = void 0;
function xf(a = {}, i = []) {
  const o = w.useRef(a), u = w.useRef(i), [s, f] = w.useState(), [d, p] = w.useState(), v = w.useCallback(() => {
    s && s.reInit(o.current, u.current);
  }, [s]);
  return w.useEffect(() => {
    vf(o.current, a) || (o.current = a, v());
  }, [a, v]), w.useEffect(() => {
    xw(u.current, i) || (u.current = i, v());
  }, [i, v]), w.useEffect(() => {
    if (bw() && d) {
      Vu.globalOptions = xf.globalOptions;
      const h = Vu(d, o.current, u.current);
      return f(h), () => h.destroy();
    } else
      f(void 0);
  }, [d, f]), [p, s];
}
xf.globalOptions = void 0;
const kg = w.createContext(null);
function eo() {
  const a = w.useContext(kg);
  if (!a)
    throw new Error("useCarousel must be used within a <Carousel />");
  return a;
}
function Iw({
  orientation: a = "horizontal",
  opts: i,
  setApi: o,
  plugins: u,
  className: s,
  children: f,
  ...d
}) {
  const [p, v] = xf({
    ...i,
    axis: a === "horizontal" ? "x" : "y"
  }, u), [h, y] = w.useState(!1), [b, x] = w.useState(!1), A = w.useCallback((T) => {
    T && (y(T.canScrollPrev()), x(T.canScrollNext()));
  }, []), C = w.useCallback(() => {
    v == null || v.scrollPrev();
  }, [v]), E = w.useCallback(() => {
    v == null || v.scrollNext();
  }, [v]), O = w.useCallback((T) => {
    T.key === "ArrowLeft" ? (T.preventDefault(), C()) : T.key === "ArrowRight" && (T.preventDefault(), E());
  }, [C, E]);
  return w.useEffect(() => {
    !v || !o || o(v);
  }, [v, o]), w.useEffect(() => {
    if (v)
      return A(v), v.on("reInit", A), v.on("select", A), () => {
        v == null || v.off("select", A);
      };
  }, [v, A]), /* @__PURE__ */ S.jsx(
    kg.Provider,
    {
      value: {
        carouselRef: p,
        api: v,
        opts: i,
        orientation: a || ((i == null ? void 0 : i.axis) === "y" ? "vertical" : "horizontal"),
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
function Ww({
  className: a,
  ...i
}) {
  const { carouselRef: o, orientation: u } = eo();
  return /* @__PURE__ */ S.jsx(
    "div",
    {
      ref: o,
      className: "overflow-hidden",
      "data-slot": "carousel-content",
      children: /* @__PURE__ */ S.jsx(
        "div",
        {
          className: fl(
            "flex",
            u === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            a
          ),
          ...i
        }
      )
    }
  );
}
function e2({
  className: a,
  ...i
}) {
  const { orientation: o } = eo();
  return /* @__PURE__ */ S.jsx(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: fl(
        "min-w-0 shrink-0 grow-0 basis-full",
        o === "horizontal" ? "pl-4" : "pt-4",
        a
      ),
      ...i
    }
  );
}
function t2({
  className: a,
  variant: i = "outline",
  size: o = "icon",
  ...u
}) {
  const { orientation: s, scrollPrev: f, canScrollPrev: d } = eo();
  return /* @__PURE__ */ S.jsxs(
    On,
    {
      "data-slot": "carousel-previous",
      variant: i,
      size: o,
      className: fl("absolute size-8 rounded-full", s === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", a),
      disabled: !d,
      onClick: f,
      ...u,
      children: [
        /* @__PURE__ */ S.jsx(xE, {}),
        /* @__PURE__ */ S.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function n2({
  className: a,
  variant: i = "outline",
  size: o = "icon",
  ...u
}) {
  const { orientation: s, scrollNext: f, canScrollNext: d } = eo();
  return /* @__PURE__ */ S.jsxs(
    On,
    {
      "data-slot": "carousel-next",
      variant: i,
      size: o,
      className: fl("absolute size-8 rounded-full", s === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", a),
      disabled: !d,
      onClick: f,
      ...u,
      children: [
        /* @__PURE__ */ S.jsx(EE, {}),
        /* @__PURE__ */ S.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}
const rl = {
  "Roasters Choice": [
    /* ... */
    "https://cdn.shopify.com/s/files/1/0831/4141/files/Ralf-coffee_1.jpg?v=1713252187",
    "https://cdn.shopify.com/s/files/1/0831/4141/files/Curated_Subscription_Coffee_FIL_March_2025.jpg?v=1745957301",
    "https://cdn.shopify.com/s/files/1/0831/4141/files/330B7ED3-F6D7-452A-80C1-F377D55D8FA6-2950-000002F30AF09FBC.jpg?v=1745591524"
  ],
  Curated: [
    /* ... */
    "https://cdn.shopify.com/s/files/1/0831/4141/files/Curated_Subscription_Coffee_FIL_March_2025.jpg?v=1745957301",
    "https://cdn.shopify.com/s/files/1/0831/4141/files/330B7ED3-F6D7-452A-80C1-F377D55D8FA6-2950-000002F30AF09FBC.jpg?v=1745591524",
    "https://cdn.shopify.com/s/files/1/0831/4141/files/Ralf-coffee_1.jpg?v=1713252187"
  ],
  Masterpiece: [
    /* ... */
    "https://cdn.shopify.com/s/files/1/0831/4141/files/Aroma_Nativo_Masterpiece.jpg?v=1744711907",
    "https://cdn.shopify.com/s/files/1/0831/4141/files/MasterpiecePourover_62c21026-4dd5-492f-a000-2389bad32528.jpg?v=1716801442",
    "https://cdn.shopify.com/s/files/1/0831/4141/files/1A811F5A-D50E-4B89-B35D-1F3F68BFC79C-1435-0000008C80587130.jpg?v=1734608120"
  ],
  "Low-Caf": [
    /* ... */
    "https://cdn.shopify.com/s/files/1/0831/4141/products/thebarn_neu_1200x1200_lowcaf_kanne_813bf11a-da59-4525-8620-5e8f281c8b8d.png?v=1739286465",
    "https://cdn.shopify.com/s/files/1/0831/4141/products/NanoChalla_32c7ddc5-d7a5-4989-8483-b2a358c63eb5.jpg?v=1739301233",
    "https://cdn.shopify.com/s/files/1/0831/4141/products/caffeine_levels_d161625f-8c4c-4a27-86fb-b3c5b94a3414.jpg?v=1739301233"
  ],
  Office: [
    /* ... */
    "https://cdn.shopify.com/s/files/1/1657/3941/files/volcan_azul_1kg.webp?v=1743027540",
    "https://cdn.shopify.com/s/files/1/0831/4141/files/HANNES_1kg_BAG.png?v=1706179901",
    "https://cdn.shopify.com/s/files/1/0831/4141/products/espressoshotsCropped_60eb6865-fd62-43c7-90c5-2bc9050f167b.jpg?v=1741274114"
  ],
  Regional: {
    /* ... */
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
  Capsules: [
    // Generic capsule images, taste profile specific can be added if available
    "https://cdn.shopify.com/s/files/1/0831/4141/files/capsules_1.png?v=1695032905",
    "https://cdn.shopify.com/s/files/1/0831/4141/products/94caa496-c974-436d-a877-91b5f1deee76_e692294a-dcda-4e46-97cf-cb22632a1acf.jpg?v=1667996022",
    "https://cdn.shopify.com/s/files/1/0831/4141/files/Capsules.jpg?v=1629729054"
  ],
  _fallback: [
    "https://cdn.shopify.com/s/files/1/0831/4141/files/LOGO-NAME.png?v=1710576883"
  ]
}, Zr = {
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
    /* ... */
    Brazil: { description: "People love Brazilian Coffees for their sweetness, low acidity and chocolate notes.", currentOffering: `Current Offering:

🇧🇷 Elemental, Brazil: Milk Chocolate. Macadamia. Smooth.` },
    Ethiopia: { description: "People love Ethiopian Coffees for their floral notes and its tea-like character.", currentOffering: `Current Offering:

🇪🇹 Chelbesa, Ethiopia: Peach. Fudge. Jasmine.` },
    "Center America": { description: "People like Central Coffees for their exciting acidity and clean notes of terroir.", currentOffering: `Current Offering:

🇨🇷 Volcan Azul, Costa Rica: Dried Fig. Vanilla.` },
    _default: { description: "Select a region to see details about the specific coffee offering for this type.", currentOffering: "" }
  },
  // --- UPDATED: Capsule Descriptions for new Taste Profiles ---
  Capsules: {
    _default: {
      description: "Select a taste profile to continue.",
      currentOffering: "Receive our Sustainable Capsules on repeat."
    },
    Brazil: {
      description: "Text to update",
      currentOffering: "Text to update"
      // Placeholder
    },
    Ethiopia: {
      description: "Text to update",
      currentOffering: "Text to update"
      // Placeholder
    },
    Masterpiece: {
      description: "Text to update",
      currentOffering: "Text to update"
      // Placeholder
    }
  }
  // --- END UPDATED ---
}, l2 = (a, i, o, u, s, f) => {
  if (console.log("Looking up Variant ID for:", { method: a, type: i, region: o, sizeOption: u, edition: s, quantity: f }), a === "Capsules") {
    const d = f;
    if (!["3", "4", "5"].includes(d))
      return console.error(`Invalid quantity '${d}' for Capsules.`), null;
    if (s === "Brazil") {
      if (d === "3")
        return console.error("Missing Capsule ID: Brazil, 3x10"), null;
      if (d === "4")
        return console.error("Missing Capsule ID: Brazil, 4x10"), null;
      if (d === "5")
        return console.error("Missing Capsule ID: Brazil, 5x10"), null;
    } else if (s === "Ethiopia") {
      if (d === "3")
        return console.error("Missing Capsule ID: Ethiopia, 3x10"), null;
      if (d === "4")
        return console.error("Missing Capsule ID: Ethiopia, 4x10"), null;
      if (d === "5")
        return console.error("Missing Capsule ID: Ethiopia, 5x10"), null;
    } else if (s === "Masterpiece") {
      if (d === "3")
        return console.error("Missing Capsule ID: Masterpiece, 3x10"), null;
      if (d === "4")
        return console.error("Missing Capsule ID: Masterpiece, 4x10"), null;
      if (d === "5")
        return console.error("Missing Capsule ID: Masterpiece, 5x10"), null;
    } else
      return console.warn("Capsules method selected but taste profile (edition) is missing or invalid:", s), null;
    return null;
  } else {
    if (i === "Roasters Choice")
      return a === "Filter" ? 45910178332939 : a === "Espresso" ? 45910178398475 : (console.warn("Roasters Choice selected but method is invalid:", a), null);
    if (i === "Curated") {
      const d = f;
      if (!["2", "4", "6"].includes(d))
        return console.error(`Invalid quantity '${d}' for Curated.`), null;
      if (a === "Filter") {
        if (d === "2")
          return console.error("Missing Curated ID: Filter, 2x250g"), null;
        if (d === "4")
          return console.error("Missing Curated ID: Filter, 4x250g"), null;
        if (d === "6")
          return console.error("Missing Curated ID: Filter, 6x250g"), null;
      } else if (a === "Espresso") {
        if (d === "2")
          return console.error("Missing Curated ID: Espresso, 2x250g"), null;
        if (d === "4")
          return console.error("Missing Curated ID: Espresso, 4x250g"), null;
        if (d === "6")
          return console.error("Missing Curated ID: Espresso, 6x250g"), null;
      } else
        return console.warn("Curated type selected but method is invalid:", a), null;
      return null;
    } else if (i === "Masterpiece") {
      const d = f;
      return ["1", "2", "3"].includes(d) ? d === "1" ? (console.error("Missing Masterpiece ID: Qty 1"), 45969541562635) : d === "2" ? (console.error("Missing Masterpiece ID: Qty 2"), null) : d === "3" ? (console.error("Missing Masterpiece ID: Qty 3"), null) : (console.warn("Masterpiece selected but variant ID for quantity not found:", d), null) : (console.error(`Invalid quantity '${d}' for Masterpiece.`), null);
    } else {
      if (i === "Office")
        return a === "Espresso" ? u === "1x 1kg" ? (console.error("Missing Office ID: 1x 1kg"), null) : u === "2x 1kg" ? (console.error("Missing Office ID: 2x 1kg"), null) : u === "3x 1kg" ? (console.error("Missing Office ID: 3x 1kg"), null) : u === "4x 1kg" ? (console.error("Missing Office ID: 4x 1kg"), null) : u === "5x 1kg" ? (console.error("Missing Office ID: 5x 1kg"), null) : (console.warn("Office selected but sizeOption is invalid or unmapped:", u), null) : (console.error("Office type selected but method is not Espresso"), null);
      if (i === "Regional")
        return o === "Brazil" ? (console.error("Missing Regional ID: Brazil"), null) : o === "Ethiopia" ? (console.error("Missing Regional ID: Ethiopia"), null) : o === "Center America" ? (console.error("Missing Regional ID: Center America"), null) : (console.warn("Regional type selected but region is missing or invalid:", o), null);
      if (i === "Low-Caf")
        return console.error("Missing Variant ID: Low-Caf"), null;
    }
  }
  return console.warn(`Variant ID lookup end: M=${a},T=${i},R=${o},S=${u},E=${s},Q=${f}`), null;
}, a2 = {
  "1 Week": { planId: 710364201335, interval: 1, unit: "Weeks" },
  "2 Weeks": { planId: 710364234103, interval: 2, unit: "Weeks" },
  // Used by Office, Capsules
  "3 Weeks": { planId: 710364266871, interval: 3, unit: "Weeks" },
  "4 Weeks (Recommended)": { planId: 710364299639, interval: 4, unit: "Weeks" },
  // Used by all applicable types
  "5 Weeks": { planId: 710364332407, interval: 5, unit: "Weeks" },
  "6 Weeks": { planId: 710364365175, interval: 6, unit: "Weeks" }
}, r2 = ({ method: a, type: i, region: o, edition: u, sizeOption: s, quantity: f, frequency: d }) => {
  var A, C, E, O, T, j;
  const p = () => /* @__PURE__ */ S.jsxs("div", { className: "default-intro-content text-white w-[90%] h-full flex flex-col items-center", children: [
    /* @__PURE__ */ S.jsx("div", { className: "mt-8", children: /* @__PURE__ */ S.jsx("img", { src: "https://cdn.shopify.com/s/files/1/0831/4141/files/LOGO-NAME.png?v=1710576883", alt: "The Barn Coffee Roasters Logo", style: { width: "100%", maxWidth: "350px", height: "auto", margin: "1rem 0" } }) }),
    /* @__PURE__ */ S.jsx("div", { className: "p-5 border border-[#A57C62] rounded-md mt-8 w-full max-w-md", children: /* @__PURE__ */ S.jsxs("ul", { className: "intro-list text-xl sm:text-2xl", style: { listStyle: "none", padding: 0 }, children: [
      /* @__PURE__ */ S.jsx("li", { className: "my-2", children: "🌱 Sustainably sourced from top farms" }),
      /* @__PURE__ */ S.jsx("li", { className: "my-2", children: "🔥 Expertly roasted in Berlin" }),
      /* @__PURE__ */ S.jsx("li", { className: "my-2", children: "📦 Delivered fresh, right when you need it" }),
      /* @__PURE__ */ S.jsx("li", { className: "my-2", children: "☕ Always rotating—always exceptional" })
    ] }) })
  ] }), v = a && (i || u), h = a && f && d && (a === "Capsules" && u || // Capsules needs method, taste profile (edition), quantity, frequency
  a !== "Capsules" && i && (i === "Office" && s || i === "Regional" && o || ["Roasters Choice", "Masterpiece", "Low-Caf", "Curated"].includes(i)));
  let y, b = [], x = null;
  if (v) {
    a === "Capsules" ? (b = rl.Capsules || rl._fallback || [], x = ((A = Zr.Capsules) == null ? void 0 : A[u]) || ((C = Zr.Capsules) == null ? void 0 : C._default) || null) : i === "Regional" ? (b = ((E = rl.Regional) == null ? void 0 : E[o]) || ((O = rl.Regional) == null ? void 0 : O._default) || rl._fallback || [], x = ((T = Zr.Regional) == null ? void 0 : T[o]) || ((j = Zr.Regional) == null ? void 0 : j._default) || null) : (b = rl[i] || rl._fallback || [], x = Zr[i] || null), Array.isArray(b) || (b = rl._fallback || []);
    const D = "text-[#A67C52] font-semibold", L = [];
    if (L.push("Your selection: "), L.push(/* @__PURE__ */ S.jsx("span", { className: D, children: a }, "method")), a === "Capsules" ? u ? (L.push(" - Taste: "), L.push(/* @__PURE__ */ S.jsx("span", { className: D, children: u }, "edition"))) : L.push(" (select taste profile)") : i ? (L.push(" - "), L.push(/* @__PURE__ */ S.jsx("span", { className: D, children: i }, "type")), i === "Regional" && (o ? (L.push(" - "), L.push(/* @__PURE__ */ S.jsx("span", { className: D, children: o }, "region"))) : L.push(" (select region)"))) : L.push(" (select type)"), L.push(" subscription"), f)
      if (L.push(" - Qty: "), i === "Office")
        L.push(/* @__PURE__ */ S.jsx("span", { className: D, children: s }, "qty-val"));
      else if (a === "Capsules")
        L.push(/* @__PURE__ */ S.jsx("span", { className: D, children: `${f}x 10 capsules` }, "qty-val"));
      else {
        const Q = parseInt(f);
        i === "Curated" ? L.push(/* @__PURE__ */ S.jsx("span", { className: D, children: `${Q}x 250g` }, "qty-val")) : i === "Masterpiece" ? L.push(/* @__PURE__ */ S.jsx("span", { className: D, children: `${Q}x bag${Q > 1 ? "s" : ""} (100-150g)` }, "qty-val")) : (L.push(/* @__PURE__ */ S.jsx("span", { className: D, children: f }, "qty-val")), L.push(" x 250g"));
      }
    else
      L.push(i === "Office" ? " (select size)" : " (select quantity)");
    if (d) {
      L.push(", delivered every ");
      const Q = d.replace(" (Recommended)", "");
      L.push(/* @__PURE__ */ S.jsx("span", { className: D, children: Q }, "freq"));
    } else
      L.push(" (select frequency)");
    L.push(".");
    const Y = async () => {
      if (console.log("Add to cart clicked (AJAX). State:", { method: a, type: i, region: o, edition: u, sizeOption: s, quantity: f, frequency: d }), !h) {
        alert("Please complete your subscription selections."), console.warn("Add to cart blocked by canAddToCart.");
        return;
      }
      const Q = l2(a, i, o, s, u, f);
      let H;
      if (a === "Capsules") {
        if (H = parseInt(f, 10), isNaN(H) || ![3, 4, 5].includes(H)) {
          alert("Error: Invalid quantity for Capsules.");
          return;
        }
      } else if (i === "Office") {
        const V = s.match(/^(\d+)x/);
        if (V && V[1]) H = parseInt(V[1], 10);
        else {
          alert("Error: Could not determine quantity for Office.");
          return;
        }
        if (isNaN(H) || H < 1) {
          alert("Error: Invalid quantity parsed for Office.");
          return;
        }
      } else if (i === "Curated") {
        if (H = parseInt(f, 10), isNaN(H) || ![2, 4, 6].includes(H)) {
          alert("Error: Invalid quantity for Curated.");
          return;
        }
      } else if (i === "Masterpiece") {
        if (H = parseInt(f, 10), isNaN(H) || ![1, 2, 3].includes(H)) {
          alert("Error: Invalid quantity for Masterpiece.");
          return;
        }
      } else if (H = parseInt(f, 10), isNaN(H) || H < 1) {
        alert("Error: Invalid quantity.");
        return;
      }
      const ee = a2[d];
      if (!ee) {
        alert(`Error: Plan details not found for frequency: "${d}".`);
        return;
      }
      if (!Q) {
        alert("Error: Product variant not found. Check TODOs in getVariantIdFromSelections.");
        return;
      }
      if (!H) {
        alert("Error: Quantity for AJAX not determined.");
        return;
      }
      const { interval: le, unit: ae, planId: oe } = ee;
      console.log("Resolved Data for AJAX:", { variantId: Q, quantity: H, interval: le, unit: ae, sellingPlanIdForProps: oe });
      const me = {
        shipping_interval_frequency: le.toString(),
        shipping_interval_unit_type: ae,
        selling_plan: oe
      }, he = { items: [{ id: Q, quantity: H, properties: me }] };
      try {
        console.log("Sending AJAX POST to /cart/add.js with data:", JSON.stringify(he));
        const V = await fetch("/cart/add.js", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(he) }), N = await V.json();
        if (!V.ok) {
          console.error("Shopify cart/add error:", V.status, N), alert(`Error adding to cart: ${N.description || N.message || "Inventory issue or invalid selection."}`);
          return;
        }
        console.log("Successfully added to cart via AJAX:", N), alert("Subscription added to your cart!");
      } catch (V) {
        console.error("AJAX request failed:", V), alert("Could not add subscription to cart (network issue).");
      }
    }, J = i === "Masterpiece" ? "We roast this subscription only on the first Tuesday every month" : "You can adjust your quantity any time!";
    y = /* ... Summary Layout JSX ... */
    /* @__PURE__ */ S.jsxs("div", { className: "final-selection-display w-[100%] flex flex-col items-center text-white text-center px-4", children: [
      /* @__PURE__ */ S.jsx("h2", { className: "summary-init text-2xl font-semibold text-[#A67C52] mb-4", children: "Subscription Summary" }),
      b.length > 0 ? /* @__PURE__ */ S.jsxs(Iw, { className: "w-full max-w-xs mx-auto mb-6", opts: { align: "start", loop: b.length > 1 }, children: [
        /* @__PURE__ */ S.jsx(Ww, { children: b.map((Q, H) => /* @__PURE__ */ S.jsx(e2, { children: /* @__PURE__ */ S.jsx("div", { className: "p-1", children: /* @__PURE__ */ S.jsx(
          "img",
          {
            src: Q,
            alt: `${a}${i ? " - " + i : ""}${u ? " - Taste: " + u : ""}${o ? " - " + o : ""} image ${H + 1}`,
            className: "w-full h-auto aspect-square object-cover rounded-md block",
            loading: "lazy"
          }
        ) }) }, `${a}-${i || u}-${o || ""}-${H}-${f}`)) }),
        b.length > 1 && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
          /* @__PURE__ */ S.jsx(t2, { className: "absolute left-[-25px] sm:left-[-40px] top-1/2 -translate-y-1/2 text-[#A67C52] bg-[#1a1a1a]/80 hover:bg-[#3a3c3d] border-none" }),
          /* @__PURE__ */ S.jsx(n2, { className: "absolute right-[-25px] sm:right-[-40px] top-1/2 -translate-y-1/2 text-[#A67C52] bg-[#1a1a1a]/80 hover:bg-[#3a3c3d] border-none" })
        ] })
      ] }) : /* @__PURE__ */ S.jsx("div", { className: "w-full max-w-xs h-[250px] bg-[#3a3c3d]/50 flex items-center justify-center rounded-md mb-6 border border-[#A67C52]/30", children: /* @__PURE__ */ S.jsx("p", { className: "text-gray-400", children: "Image Coming Soon" }) }),
      x && x.description && /* @__PURE__ */ S.jsxs("div", { className: "subscription-description text-white my-4 text-left w-full max-w-md flex justify-center flex-col", children: [
        /* @__PURE__ */ S.jsxs("div", { className: "bg-[#3a3c3d] p-4 rounded-md border border-[#A67C52] text-base sm:text-lg w-full", children: [
          /* @__PURE__ */ S.jsx("p", { className: "mb-3", children: x.description }),
          x.currentOffering && /* @__PURE__ */ S.jsx("p", { className: "whitespace-pre-wrap text-sm sm:text-base", children: x.currentOffering })
        ] }),
        /* @__PURE__ */ S.jsxs("div", { children: [
          " ",
          /* @__PURE__ */ S.jsx("h1", { className: "words-animation", children: J }),
          " "
        ] })
      ] }),
      /* @__PURE__ */ S.jsx("p", { className: "summary-sentence text-base sm:text-lg leading-relaxed my-4 w-full max-w-md min-h-[3em]", children: L }),
      /* @__PURE__ */ S.jsx("div", { className: "cart-btn mt-auto pt-4 w-full max-w-md flex justify-center sm:justify-end", children: /* @__PURE__ */ S.jsx(
        "button",
        {
          className: "bg-[#A67C52] py-2 px-5 rounded-md border-[1.5px] border-transparent hover:border-[#3a3c3d] transition-all duration-300 ease-in-out transform text-white font-semibold text-base sm:text-md disabled:opacity-50 disabled:cursor-not-allowed enabled:hover:brightness-110 enabled:active:scale-95",
          disabled: !h,
          onClick: Y,
          children: "ADD TO CART"
        }
      ) })
    ] });
  } else
    y = /* @__PURE__ */ S.jsx(p, {});
  return /* @__PURE__ */ S.jsx("div", { className: "right-container pt-10 pb-10 flex justify-center items-start w-full min-h-screen bg-[#1a1a1a]", children: y });
};
function i2() {
  const [a, i] = w.useState(""), [o, u] = w.useState(""), [s, f] = w.useState(""), [d, p] = w.useState(""), [v, h] = w.useState(""), [y, b] = w.useState(""), [x, A] = w.useState(""), C = (J) => {
    i(J), u(""), f(""), p(""), h(""), b(""), A("");
  }, E = (J) => {
    u(J), f(""), p(""), h(""), b(""), A("");
  }, O = (J) => {
    f(J), p(""), b(""), A("");
  }, T = (J) => {
    p(J), u(""), f(""), h(""), b(""), A("");
  }, j = (J) => {
    h(J), b(o === "Office" ? J : ""), p(""), A("");
  }, D = (J) => {
    b(J), A("");
  }, L = (J) => {
    A(J);
  }, Y = () => {
    i(""), u(""), f(""), p(""), h(""), b(""), A("");
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "app-container", children: [
    /* @__PURE__ */ S.jsx("div", { className: "function-container", children: /* @__PURE__ */ S.jsx(
      gw,
      {
        selectedMethod: a,
        selectedCoffeeType: o,
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
        onQuantityChange: D,
        onFrequencyChange: L,
        onResetSelections: Y
      }
    ) }),
    /* @__PURE__ */ S.jsx("div", { className: "result-container", children: /* @__PURE__ */ S.jsx(
      r2,
      {
        method: a,
        type: o,
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
      ib.createRoot(a).render(
        /* @__PURE__ */ S.jsx(w.StrictMode, { children: /* @__PURE__ */ S.jsx(i2, {}) })
      ), console.log("React app mount initiated successfully.");
    } catch (i) {
      console.error("Error occurred during createRoot or render:", i);
    }
  else
    console.error(`CRITICAL ERROR: Could not find root element with ID #${zs} in the HTML after DOMContentLoaded.`);
});
