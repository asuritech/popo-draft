(function () {
  const c = document.createElement("link").relList;
  if (c && c.supports && c.supports("modulepreload")) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) n(f);
  new MutationObserver((f) => {
    for (const d of f)
      if (d.type === "childList")
        for (const p of d.addedNodes)
          p.tagName === "LINK" && p.rel === "modulepreload" && n(p);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(f) {
    const d = {};
    return (
      f.integrity && (d.integrity = f.integrity),
      f.referrerPolicy && (d.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : f.crossOrigin === "anonymous"
          ? (d.credentials = "omit")
          : (d.credentials = "same-origin"),
      d
    );
  }
  function n(f) {
    if (f.ep) return;
    f.ep = !0;
    const d = r(f);
    fetch(f.href, d);
  }
})();
function fr(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default")
    ? s.default
    : s;
}
var Ro = { exports: {} },
  Ni = {};
var ym;
function jx() {
  if (ym) return Ni;
  ym = 1;
  var s = Symbol.for("react.transitional.element"),
    c = Symbol.for("react.fragment");
  function r(n, f, d) {
    var p = null;
    if (
      (d !== void 0 && (p = "" + d),
      f.key !== void 0 && (p = "" + f.key),
      "key" in f)
    ) {
      d = {};
      for (var x in f) x !== "key" && (d[x] = f[x]);
    } else d = f;
    return (
      (f = d.ref),
      { $$typeof: s, type: n, key: p, ref: f !== void 0 ? f : null, props: d }
    );
  }
  return ((Ni.Fragment = c), (Ni.jsx = r), (Ni.jsxs = r), Ni);
}
var bm;
function yx() {
  return (bm || ((bm = 1), (Ro.exports = jx())), Ro.exports);
}
var a = yx(),
  Lo = { exports: {} },
  wi = {},
  Bo = { exports: {} },
  Ho = {};
var Sm;
function bx() {
  return (
    Sm ||
      ((Sm = 1),
      (function (s) {
        function c(U, X) {
          var Q = U.length;
          U.push(X);
          e: for (; 0 < Q; ) {
            var ie = (Q - 1) >>> 1,
              de = U[ie];
            if (0 < f(de, X)) ((U[ie] = X), (U[Q] = de), (Q = ie));
            else break e;
          }
        }
        function r(U) {
          return U.length === 0 ? null : U[0];
        }
        function n(U) {
          if (U.length === 0) return null;
          var X = U[0],
            Q = U.pop();
          if (Q !== X) {
            U[0] = Q;
            e: for (var ie = 0, de = U.length, O = de >>> 1; ie < O; ) {
              var F = 2 * (ie + 1) - 1,
                le = U[F],
                se = F + 1,
                fe = U[se];
              if (0 > f(le, Q))
                se < de && 0 > f(fe, le)
                  ? ((U[ie] = fe), (U[se] = Q), (ie = se))
                  : ((U[ie] = le), (U[F] = Q), (ie = F));
              else if (se < de && 0 > f(fe, Q))
                ((U[ie] = fe), (U[se] = Q), (ie = se));
              else break e;
            }
          }
          return X;
        }
        function f(U, X) {
          var Q = U.sortIndex - X.sortIndex;
          return Q !== 0 ? Q : U.id - X.id;
        }
        if (
          ((s.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var d = performance;
          s.unstable_now = function () {
            return d.now();
          };
        } else {
          var p = Date,
            x = p.now();
          s.unstable_now = function () {
            return p.now() - x;
          };
        }
        var h = [],
          m = [],
          j = 1,
          g = null,
          N = 3,
          b = !1,
          E = !1,
          M = !1,
          A = !1,
          S = typeof setTimeout == "function" ? setTimeout : null,
          w = typeof clearTimeout == "function" ? clearTimeout : null,
          z = typeof setImmediate < "u" ? setImmediate : null;
        function J(U) {
          for (var X = r(m); X !== null; ) {
            if (X.callback === null) n(m);
            else if (X.startTime <= U)
              (n(m), (X.sortIndex = X.expirationTime), c(h, X));
            else break;
            X = r(m);
          }
        }
        function $(U) {
          if (((M = !1), J(U), !E))
            if (r(h) !== null) ((E = !0), ee || ((ee = !0), B()));
            else {
              var X = r(m);
              X !== null && ce($, X.startTime - U);
            }
        }
        var ee = !1,
          K = -1,
          T = 5,
          G = -1;
        function L() {
          return A ? !0 : !(s.unstable_now() - G < T);
        }
        function _() {
          if (((A = !1), ee)) {
            var U = s.unstable_now();
            G = U;
            var X = !0;
            try {
              e: {
                ((E = !1), M && ((M = !1), w(K), (K = -1)), (b = !0));
                var Q = N;
                try {
                  t: {
                    for (
                      J(U), g = r(h);
                      g !== null && !(g.expirationTime > U && L());
                    ) {
                      var ie = g.callback;
                      if (typeof ie == "function") {
                        ((g.callback = null), (N = g.priorityLevel));
                        var de = ie(g.expirationTime <= U);
                        if (((U = s.unstable_now()), typeof de == "function")) {
                          ((g.callback = de), J(U), (X = !0));
                          break t;
                        }
                        (g === r(h) && n(h), J(U));
                      } else n(h);
                      g = r(h);
                    }
                    if (g !== null) X = !0;
                    else {
                      var O = r(m);
                      (O !== null && ce($, O.startTime - U), (X = !1));
                    }
                  }
                  break e;
                } finally {
                  ((g = null), (N = Q), (b = !1));
                }
                X = void 0;
              }
            } finally {
              X ? B() : (ee = !1);
            }
          }
        }
        var B;
        if (typeof z == "function")
          B = function () {
            z(_);
          };
        else if (typeof MessageChannel < "u") {
          var ae = new MessageChannel(),
            te = ae.port2;
          ((ae.port1.onmessage = _),
            (B = function () {
              te.postMessage(null);
            }));
        } else
          B = function () {
            S(_, 0);
          };
        function ce(U, X) {
          K = S(function () {
            U(s.unstable_now());
          }, X);
        }
        ((s.unstable_IdlePriority = 5),
          (s.unstable_ImmediatePriority = 1),
          (s.unstable_LowPriority = 4),
          (s.unstable_NormalPriority = 3),
          (s.unstable_Profiling = null),
          (s.unstable_UserBlockingPriority = 2),
          (s.unstable_cancelCallback = function (U) {
            U.callback = null;
          }),
          (s.unstable_forceFrameRate = function (U) {
            0 > U || 125 < U
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (T = 0 < U ? Math.floor(1e3 / U) : 5);
          }),
          (s.unstable_getCurrentPriorityLevel = function () {
            return N;
          }),
          (s.unstable_next = function (U) {
            switch (N) {
              case 1:
              case 2:
              case 3:
                var X = 3;
                break;
              default:
                X = N;
            }
            var Q = N;
            N = X;
            try {
              return U();
            } finally {
              N = Q;
            }
          }),
          (s.unstable_requestPaint = function () {
            A = !0;
          }),
          (s.unstable_runWithPriority = function (U, X) {
            switch (U) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                U = 3;
            }
            var Q = N;
            N = U;
            try {
              return X();
            } finally {
              N = Q;
            }
          }),
          (s.unstable_scheduleCallback = function (U, X, Q) {
            var ie = s.unstable_now();
            switch (
              (typeof Q == "object" && Q !== null
                ? ((Q = Q.delay),
                  (Q = typeof Q == "number" && 0 < Q ? ie + Q : ie))
                : (Q = ie),
              U)
            ) {
              case 1:
                var de = -1;
                break;
              case 2:
                de = 250;
                break;
              case 5:
                de = 1073741823;
                break;
              case 4:
                de = 1e4;
                break;
              default:
                de = 5e3;
            }
            return (
              (de = Q + de),
              (U = {
                id: j++,
                callback: X,
                priorityLevel: U,
                startTime: Q,
                expirationTime: de,
                sortIndex: -1,
              }),
              Q > ie
                ? ((U.sortIndex = Q),
                  c(m, U),
                  r(h) === null &&
                    U === r(m) &&
                    (M ? (w(K), (K = -1)) : (M = !0), ce($, Q - ie)))
                : ((U.sortIndex = de),
                  c(h, U),
                  E || b || ((E = !0), ee || ((ee = !0), B()))),
              U
            );
          }),
          (s.unstable_shouldYield = L),
          (s.unstable_wrapCallback = function (U) {
            var X = N;
            return function () {
              var Q = N;
              N = X;
              try {
                return U.apply(this, arguments);
              } finally {
                N = Q;
              }
            };
          }));
      })(Ho)),
    Ho
  );
}
var Nm;
function Sx() {
  return (Nm || ((Nm = 1), (Bo.exports = bx())), Bo.exports);
}
var Uo = { exports: {} },
  be = {};
var wm;
function Nx() {
  if (wm) return be;
  wm = 1;
  var s = Symbol.for("react.transitional.element"),
    c = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    n = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    d = Symbol.for("react.consumer"),
    p = Symbol.for("react.context"),
    x = Symbol.for("react.forward_ref"),
    h = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    j = Symbol.for("react.lazy"),
    g = Symbol.for("react.activity"),
    N = Symbol.iterator;
  function b(O) {
    return O === null || typeof O != "object"
      ? null
      : ((O = (N && O[N]) || O["@@iterator"]),
        typeof O == "function" ? O : null);
  }
  var E = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    M = Object.assign,
    A = {};
  function S(O, F, le) {
    ((this.props = O),
      (this.context = F),
      (this.refs = A),
      (this.updater = le || E));
  }
  ((S.prototype.isReactComponent = {}),
    (S.prototype.setState = function (O, F) {
      if (typeof O != "object" && typeof O != "function" && O != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, O, F, "setState");
    }),
    (S.prototype.forceUpdate = function (O) {
      this.updater.enqueueForceUpdate(this, O, "forceUpdate");
    }));
  function w() {}
  w.prototype = S.prototype;
  function z(O, F, le) {
    ((this.props = O),
      (this.context = F),
      (this.refs = A),
      (this.updater = le || E));
  }
  var J = (z.prototype = new w());
  ((J.constructor = z), M(J, S.prototype), (J.isPureReactComponent = !0));
  var $ = Array.isArray;
  function ee() {}
  var K = { H: null, A: null, T: null, S: null },
    T = Object.prototype.hasOwnProperty;
  function G(O, F, le) {
    var se = le.ref;
    return {
      $$typeof: s,
      type: O,
      key: F,
      ref: se !== void 0 ? se : null,
      props: le,
    };
  }
  function L(O, F) {
    return G(O.type, F, O.props);
  }
  function _(O) {
    return typeof O == "object" && O !== null && O.$$typeof === s;
  }
  function B(O) {
    var F = { "=": "=0", ":": "=2" };
    return (
      "$" +
      O.replace(/[=:]/g, function (le) {
        return F[le];
      })
    );
  }
  var ae = /\/+/g;
  function te(O, F) {
    return typeof O == "object" && O !== null && O.key != null
      ? B("" + O.key)
      : F.toString(36);
  }
  function ce(O) {
    switch (O.status) {
      case "fulfilled":
        return O.value;
      case "rejected":
        throw O.reason;
      default:
        switch (
          (typeof O.status == "string"
            ? O.then(ee, ee)
            : ((O.status = "pending"),
              O.then(
                function (F) {
                  O.status === "pending" &&
                    ((O.status = "fulfilled"), (O.value = F));
                },
                function (F) {
                  O.status === "pending" &&
                    ((O.status = "rejected"), (O.reason = F));
                },
              )),
          O.status)
        ) {
          case "fulfilled":
            return O.value;
          case "rejected":
            throw O.reason;
        }
    }
    throw O;
  }
  function U(O, F, le, se, fe) {
    var oe = typeof O;
    (oe === "undefined" || oe === "boolean") && (O = null);
    var me = !1;
    if (O === null) me = !0;
    else
      switch (oe) {
        case "bigint":
        case "string":
        case "number":
          me = !0;
          break;
        case "object":
          switch (O.$$typeof) {
            case s:
            case c:
              me = !0;
              break;
            case j:
              return ((me = O._init), U(me(O._payload), F, le, se, fe));
          }
      }
    if (me)
      return (
        (fe = fe(O)),
        (me = se === "" ? "." + te(O, 0) : se),
        $(fe)
          ? ((le = ""),
            me != null && (le = me.replace(ae, "$&/") + "/"),
            U(fe, F, le, "", function (Je) {
              return Je;
            }))
          : fe != null &&
            (_(fe) &&
              (fe = L(
                fe,
                le +
                  (fe.key == null || (O && O.key === fe.key)
                    ? ""
                    : ("" + fe.key).replace(ae, "$&/") + "/") +
                  me,
              )),
            F.push(fe)),
        1
      );
    me = 0;
    var je = se === "" ? "." : se + ":";
    if ($(O))
      for (var xe = 0; xe < O.length; xe++)
        ((se = O[xe]), (oe = je + te(se, xe)), (me += U(se, F, le, oe, fe)));
    else if (((xe = b(O)), typeof xe == "function"))
      for (O = xe.call(O), xe = 0; !(se = O.next()).done; )
        ((se = se.value),
          (oe = je + te(se, xe++)),
          (me += U(se, F, le, oe, fe)));
    else if (oe === "object") {
      if (typeof O.then == "function") return U(ce(O), F, le, se, fe);
      throw (
        (F = String(O)),
        Error(
          "Objects are not valid as a React child (found: " +
            (F === "[object Object]"
              ? "object with keys {" + Object.keys(O).join(", ") + "}"
              : F) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return me;
  }
  function X(O, F, le) {
    if (O == null) return O;
    var se = [],
      fe = 0;
    return (
      U(O, se, "", "", function (oe) {
        return F.call(le, oe, fe++);
      }),
      se
    );
  }
  function Q(O) {
    if (O._status === -1) {
      var F = O._result;
      ((F = F()),
        F.then(
          function (le) {
            (O._status === 0 || O._status === -1) &&
              ((O._status = 1), (O._result = le));
          },
          function (le) {
            (O._status === 0 || O._status === -1) &&
              ((O._status = 2), (O._result = le));
          },
        ),
        O._status === -1 && ((O._status = 0), (O._result = F)));
    }
    if (O._status === 1) return O._result.default;
    throw O._result;
  }
  var ie =
      typeof reportError == "function"
        ? reportError
        : function (O) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var F = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof O == "object" &&
                  O !== null &&
                  typeof O.message == "string"
                    ? String(O.message)
                    : String(O),
                error: O,
              });
              if (!window.dispatchEvent(F)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", O);
              return;
            }
            console.error(O);
          },
    de = {
      map: X,
      forEach: function (O, F, le) {
        X(
          O,
          function () {
            F.apply(this, arguments);
          },
          le,
        );
      },
      count: function (O) {
        var F = 0;
        return (
          X(O, function () {
            F++;
          }),
          F
        );
      },
      toArray: function (O) {
        return (
          X(O, function (F) {
            return F;
          }) || []
        );
      },
      only: function (O) {
        if (!_(O))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return O;
      },
    };
  return (
    (be.Activity = g),
    (be.Children = de),
    (be.Component = S),
    (be.Fragment = r),
    (be.Profiler = f),
    (be.PureComponent = z),
    (be.StrictMode = n),
    (be.Suspense = h),
    (be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K),
    (be.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (O) {
        return K.H.useMemoCache(O);
      },
    }),
    (be.cache = function (O) {
      return function () {
        return O.apply(null, arguments);
      };
    }),
    (be.cacheSignal = function () {
      return null;
    }),
    (be.cloneElement = function (O, F, le) {
      if (O == null)
        throw Error(
          "The argument must be a React element, but you passed " + O + ".",
        );
      var se = M({}, O.props),
        fe = O.key;
      if (F != null)
        for (oe in (F.key !== void 0 && (fe = "" + F.key), F))
          !T.call(F, oe) ||
            oe === "key" ||
            oe === "__self" ||
            oe === "__source" ||
            (oe === "ref" && F.ref === void 0) ||
            (se[oe] = F[oe]);
      var oe = arguments.length - 2;
      if (oe === 1) se.children = le;
      else if (1 < oe) {
        for (var me = Array(oe), je = 0; je < oe; je++)
          me[je] = arguments[je + 2];
        se.children = me;
      }
      return G(O.type, fe, se);
    }),
    (be.createContext = function (O) {
      return (
        (O = {
          $$typeof: p,
          _currentValue: O,
          _currentValue2: O,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (O.Provider = O),
        (O.Consumer = { $$typeof: d, _context: O }),
        O
      );
    }),
    (be.createElement = function (O, F, le) {
      var se,
        fe = {},
        oe = null;
      if (F != null)
        for (se in (F.key !== void 0 && (oe = "" + F.key), F))
          T.call(F, se) &&
            se !== "key" &&
            se !== "__self" &&
            se !== "__source" &&
            (fe[se] = F[se]);
      var me = arguments.length - 2;
      if (me === 1) fe.children = le;
      else if (1 < me) {
        for (var je = Array(me), xe = 0; xe < me; xe++)
          je[xe] = arguments[xe + 2];
        fe.children = je;
      }
      if (O && O.defaultProps)
        for (se in ((me = O.defaultProps), me))
          fe[se] === void 0 && (fe[se] = me[se]);
      return G(O, oe, fe);
    }),
    (be.createRef = function () {
      return { current: null };
    }),
    (be.forwardRef = function (O) {
      return { $$typeof: x, render: O };
    }),
    (be.isValidElement = _),
    (be.lazy = function (O) {
      return { $$typeof: j, _payload: { _status: -1, _result: O }, _init: Q };
    }),
    (be.memo = function (O, F) {
      return { $$typeof: m, type: O, compare: F === void 0 ? null : F };
    }),
    (be.startTransition = function (O) {
      var F = K.T,
        le = {};
      K.T = le;
      try {
        var se = O(),
          fe = K.S;
        (fe !== null && fe(le, se),
          typeof se == "object" &&
            se !== null &&
            typeof se.then == "function" &&
            se.then(ee, ie));
      } catch (oe) {
        ie(oe);
      } finally {
        (F !== null && le.types !== null && (F.types = le.types), (K.T = F));
      }
    }),
    (be.unstable_useCacheRefresh = function () {
      return K.H.useCacheRefresh();
    }),
    (be.use = function (O) {
      return K.H.use(O);
    }),
    (be.useActionState = function (O, F, le) {
      return K.H.useActionState(O, F, le);
    }),
    (be.useCallback = function (O, F) {
      return K.H.useCallback(O, F);
    }),
    (be.useContext = function (O) {
      return K.H.useContext(O);
    }),
    (be.useDebugValue = function () {}),
    (be.useDeferredValue = function (O, F) {
      return K.H.useDeferredValue(O, F);
    }),
    (be.useEffect = function (O, F) {
      return K.H.useEffect(O, F);
    }),
    (be.useEffectEvent = function (O) {
      return K.H.useEffectEvent(O);
    }),
    (be.useId = function () {
      return K.H.useId();
    }),
    (be.useImperativeHandle = function (O, F, le) {
      return K.H.useImperativeHandle(O, F, le);
    }),
    (be.useInsertionEffect = function (O, F) {
      return K.H.useInsertionEffect(O, F);
    }),
    (be.useLayoutEffect = function (O, F) {
      return K.H.useLayoutEffect(O, F);
    }),
    (be.useMemo = function (O, F) {
      return K.H.useMemo(O, F);
    }),
    (be.useOptimistic = function (O, F) {
      return K.H.useOptimistic(O, F);
    }),
    (be.useReducer = function (O, F, le) {
      return K.H.useReducer(O, F, le);
    }),
    (be.useRef = function (O) {
      return K.H.useRef(O);
    }),
    (be.useState = function (O) {
      return K.H.useState(O);
    }),
    (be.useSyncExternalStore = function (O, F, le) {
      return K.H.useSyncExternalStore(O, F, le);
    }),
    (be.useTransition = function () {
      return K.H.useTransition();
    }),
    (be.version = "19.2.4"),
    be
  );
}
var Tm;
function hr() {
  return (Tm || ((Tm = 1), (Uo.exports = Nx())), Uo.exports);
}
var Go = { exports: {} },
  St = {};
var Em;
function wx() {
  if (Em) return St;
  Em = 1;
  var s = hr();
  function c(h) {
    var m = "https://react.dev/errors/" + h;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var j = 2; j < arguments.length; j++)
        m += "&args[]=" + encodeURIComponent(arguments[j]);
    }
    return (
      "Minified React error #" +
      h +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r() {}
  var n = {
      d: {
        f: r,
        r: function () {
          throw Error(c(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    f = Symbol.for("react.portal");
  function d(h, m, j) {
    var g =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: f,
      key: g == null ? null : "" + g,
      children: h,
      containerInfo: m,
      implementation: j,
    };
  }
  var p = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function x(h, m) {
    if (h === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (St.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = n),
    (St.createPortal = function (h, m) {
      var j =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(c(299));
      return d(h, m, null, j);
    }),
    (St.flushSync = function (h) {
      var m = p.T,
        j = n.p;
      try {
        if (((p.T = null), (n.p = 2), h)) return h();
      } finally {
        ((p.T = m), (n.p = j), n.d.f());
      }
    }),
    (St.preconnect = function (h, m) {
      typeof h == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        n.d.C(h, m));
    }),
    (St.prefetchDNS = function (h) {
      typeof h == "string" && n.d.D(h);
    }),
    (St.preinit = function (h, m) {
      if (typeof h == "string" && m && typeof m.as == "string") {
        var j = m.as,
          g = x(j, m.crossOrigin),
          N = typeof m.integrity == "string" ? m.integrity : void 0,
          b = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        j === "style"
          ? n.d.S(h, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: g,
              integrity: N,
              fetchPriority: b,
            })
          : j === "script" &&
            n.d.X(h, {
              crossOrigin: g,
              integrity: N,
              fetchPriority: b,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (St.preinitModule = function (h, m) {
      if (typeof h == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var j = x(m.as, m.crossOrigin);
            n.d.M(h, {
              crossOrigin: j,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && n.d.M(h);
    }),
    (St.preload = function (h, m) {
      if (
        typeof h == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var j = m.as,
          g = x(j, m.crossOrigin);
        n.d.L(h, j, {
          crossOrigin: g,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (St.preloadModule = function (h, m) {
      if (typeof h == "string")
        if (m) {
          var j = x(m.as, m.crossOrigin);
          n.d.m(h, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: j,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else n.d.m(h);
    }),
    (St.requestFormReset = function (h) {
      n.d.r(h);
    }),
    (St.unstable_batchedUpdates = function (h, m) {
      return h(m);
    }),
    (St.useFormState = function (h, m, j) {
      return p.H.useFormState(h, m, j);
    }),
    (St.useFormStatus = function () {
      return p.H.useHostTransitionStatus();
    }),
    (St.version = "19.2.4"),
    St
  );
}
var Cm;
function rp() {
  if (Cm) return Go.exports;
  Cm = 1;
  function s() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (c) {
        console.error(c);
      }
  }
  return (s(), (Go.exports = wx()), Go.exports);
}
var Mm;
function Tx() {
  if (Mm) return wi;
  Mm = 1;
  var s = Sx(),
    c = hr(),
    r = rp();
  function n(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function f(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function d(e) {
    var t = e,
      l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (l = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function p(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function x(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function h(e) {
    if (d(e) !== e) throw Error(n(188));
  }
  function m(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = d(e)), t === null)) throw Error(n(188));
      return t !== e ? null : e;
    }
    for (var l = e, i = t; ; ) {
      var o = l.return;
      if (o === null) break;
      var u = o.alternate;
      if (u === null) {
        if (((i = o.return), i !== null)) {
          l = i;
          continue;
        }
        break;
      }
      if (o.child === u.child) {
        for (u = o.child; u; ) {
          if (u === l) return (h(o), e);
          if (u === i) return (h(o), t);
          u = u.sibling;
        }
        throw Error(n(188));
      }
      if (l.return !== i.return) ((l = o), (i = u));
      else {
        for (var v = !1, y = o.child; y; ) {
          if (y === l) {
            ((v = !0), (l = o), (i = u));
            break;
          }
          if (y === i) {
            ((v = !0), (i = o), (l = u));
            break;
          }
          y = y.sibling;
        }
        if (!v) {
          for (y = u.child; y; ) {
            if (y === l) {
              ((v = !0), (l = u), (i = o));
              break;
            }
            if (y === i) {
              ((v = !0), (i = u), (l = o));
              break;
            }
            y = y.sibling;
          }
          if (!v) throw Error(n(189));
        }
      }
      if (l.alternate !== i) throw Error(n(190));
    }
    if (l.tag !== 3) throw Error(n(188));
    return l.stateNode.current === l ? e : t;
  }
  function j(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = j(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var g = Object.assign,
    N = Symbol.for("react.element"),
    b = Symbol.for("react.transitional.element"),
    E = Symbol.for("react.portal"),
    M = Symbol.for("react.fragment"),
    A = Symbol.for("react.strict_mode"),
    S = Symbol.for("react.profiler"),
    w = Symbol.for("react.consumer"),
    z = Symbol.for("react.context"),
    J = Symbol.for("react.forward_ref"),
    $ = Symbol.for("react.suspense"),
    ee = Symbol.for("react.suspense_list"),
    K = Symbol.for("react.memo"),
    T = Symbol.for("react.lazy"),
    G = Symbol.for("react.activity"),
    L = Symbol.for("react.memo_cache_sentinel"),
    _ = Symbol.iterator;
  function B(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (_ && e[_]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var ae = Symbol.for("react.client.reference");
  function te(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ae ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case M:
        return "Fragment";
      case S:
        return "Profiler";
      case A:
        return "StrictMode";
      case $:
        return "Suspense";
      case ee:
        return "SuspenseList";
      case G:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case E:
          return "Portal";
        case z:
          return e.displayName || "Context";
        case w:
          return (e._context.displayName || "Context") + ".Consumer";
        case J:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case K:
          return (
            (t = e.displayName || null),
            t !== null ? t : te(e.type) || "Memo"
          );
        case T:
          ((t = e._payload), (e = e._init));
          try {
            return te(e(t));
          } catch {}
      }
    return null;
  }
  var ce = Array.isArray,
    U = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    X = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Q = { pending: !1, data: null, method: null, action: null },
    ie = [],
    de = -1;
  function O(e) {
    return { current: e };
  }
  function F(e) {
    0 > de || ((e.current = ie[de]), (ie[de] = null), de--);
  }
  function le(e, t) {
    (de++, (ie[de] = e.current), (e.current = t));
  }
  var se = O(null),
    fe = O(null),
    oe = O(null),
    me = O(null);
  function je(e, t) {
    switch ((le(oe, t), le(fe, e), le(se, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? kh(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = kh(t)), (e = Xh(t, e)));
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
    (F(se), le(se, e));
  }
  function xe() {
    (F(se), F(fe), F(oe));
  }
  function Je(e) {
    e.memoizedState !== null && le(me, e);
    var t = se.current,
      l = Xh(t, e.type);
    t !== l && (le(fe, e), le(se, l));
  }
  function Fe(e) {
    (fe.current === e && (F(se), F(fe)),
      me.current === e && (F(me), (ji._currentValue = Q)));
  }
  var et, we;
  function ve(e) {
    if (et === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        ((et = (t && t[1]) || ""),
          (we =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      et +
      e +
      we
    );
  }
  var Ge = !1;
  function jt(e, t) {
    if (!e || Ge) return "";
    Ge = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var I = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(I.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(I, []);
                } catch (Z) {
                  var k = Z;
                }
                Reflect.construct(e, [], I);
              } else {
                try {
                  I.call();
                } catch (Z) {
                  k = Z;
                }
                e.call(I.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Z) {
                k = Z;
              }
              (I = e()) &&
                typeof I.catch == "function" &&
                I.catch(function () {});
            }
          } catch (Z) {
            if (Z && k && typeof Z.stack == "string") return [Z.stack, k.stack];
          }
          return [null, null];
        },
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var o = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name",
      );
      o &&
        o.configurable &&
        Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = i.DetermineComponentFrameRoot(),
        v = u[0],
        y = u[1];
      if (v && y) {
        var C = v.split(`
`),
          V = y.split(`
`);
        for (
          o = i = 0;
          i < C.length && !C[i].includes("DetermineComponentFrameRoot");
        )
          i++;
        for (; o < V.length && !V[o].includes("DetermineComponentFrameRoot"); )
          o++;
        if (i === C.length || o === V.length)
          for (
            i = C.length - 1, o = V.length - 1;
            1 <= i && 0 <= o && C[i] !== V[o];
          )
            o--;
        for (; 1 <= i && 0 <= o; i--, o--)
          if (C[i] !== V[o]) {
            if (i !== 1 || o !== 1)
              do
                if ((i--, o--, 0 > o || C[i] !== V[o])) {
                  var P =
                    `
` + C[i].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      P.includes("<anonymous>") &&
                      (P = P.replace("<anonymous>", e.displayName)),
                    P
                  );
                }
              while (1 <= i && 0 <= o);
            break;
          }
      }
    } finally {
      ((Ge = !1), (Error.prepareStackTrace = l));
    }
    return (l = e ? e.displayName || e.name : "") ? ve(l) : "";
  }
  function fl(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ve(e.type);
      case 16:
        return ve("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? ve("Suspense Fallback")
          : ve("Suspense");
      case 19:
        return ve("SuspenseList");
      case 0:
      case 15:
        return jt(e.type, !1);
      case 11:
        return jt(e.type.render, !1);
      case 1:
        return jt(e.type, !0);
      case 31:
        return ve("Activity");
      default:
        return "";
    }
  }
  function Vi(e) {
    try {
      var t = "",
        l = null;
      do ((t += fl(e, l)), (l = e), (e = e.return));
      while (e);
      return t;
    } catch (i) {
      return (
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack
      );
    }
  }
  var Os = Object.prototype.hasOwnProperty,
    As = s.unstable_scheduleCallback,
    zs = s.unstable_cancelCallback,
    Yi = s.unstable_shouldYield,
    yr = s.unstable_requestPaint,
    yt = s.unstable_now,
    Ds = s.unstable_getCurrentPriorityLevel,
    Y = s.unstable_ImmediatePriority,
    re = s.unstable_UserBlockingPriority,
    ye = s.unstable_NormalPriority,
    ke = s.unstable_LowPriority,
    $e = s.unstable_IdlePriority,
    bt = s.log,
    ta = s.unstable_setDisableYieldValue,
    it = null,
    qe = null;
  function Nt(e) {
    if (
      (typeof bt == "function" && ta(e),
      qe && typeof qe.setStrictMode == "function")
    )
      try {
        qe.setStrictMode(it, e);
      } catch {}
  }
  var ht = Math.clz32 ? Math.clz32 : hl,
    pa = Math.log,
    Hl = Math.LN2;
  function hl(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((pa(e) / Hl) | 0)) | 0);
  }
  var Yt = 256,
    ml = 262144,
    pl = 4194304;
  function kt(e) {
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
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
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
  function vl(e, t, l) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var o = 0,
      u = e.suspendedLanes,
      v = e.pingedLanes;
    e = e.warmLanes;
    var y = i & 134217727;
    return (
      y !== 0
        ? ((i = y & ~u),
          i !== 0
            ? (o = kt(i))
            : ((v &= y),
              v !== 0
                ? (o = kt(v))
                : l || ((l = y & ~e), l !== 0 && (o = kt(l)))))
        : ((y = i & ~u),
          y !== 0
            ? (o = kt(y))
            : v !== 0
              ? (o = kt(v))
              : l || ((l = i & ~e), l !== 0 && (o = kt(l)))),
      o === 0
        ? 0
        : t !== 0 &&
            t !== o &&
            (t & u) === 0 &&
            ((u = o & -o),
            (l = t & -t),
            u >= l || (u === 32 && (l & 4194048) !== 0))
          ? t
          : o
    );
  }
  function qa(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function nv(e, t) {
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
  function Nu() {
    var e = pl;
    return ((pl <<= 1), (pl & 62914560) === 0 && (pl = 4194304), e);
  }
  function br(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function _s(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function rv(e, t, l, i, o, u) {
    var v = e.pendingLanes;
    ((e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0));
    var y = e.entanglements,
      C = e.expirationTimes,
      V = e.hiddenUpdates;
    for (l = v & ~l; 0 < l; ) {
      var P = 31 - ht(l),
        I = 1 << P;
      ((y[P] = 0), (C[P] = -1));
      var k = V[P];
      if (k !== null)
        for (V[P] = null, P = 0; P < k.length; P++) {
          var Z = k[P];
          Z !== null && (Z.lane &= -536870913);
        }
      l &= ~I;
    }
    (i !== 0 && wu(e, i, 0),
      u !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(v & ~t)));
  }
  function wu(e, t, l) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var i = 31 - ht(t);
    ((e.entangledLanes |= t),
      (e.entanglements[i] = e.entanglements[i] | 1073741824 | (l & 261930)));
  }
  function Tu(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l; ) {
      var i = 31 - ht(l),
        o = 1 << i;
      ((o & t) | (e[i] & t) && (e[i] |= t), (l &= ~o));
    }
  }
  function Eu(e, t) {
    var l = t & -t;
    return (
      (l = (l & 42) !== 0 ? 1 : Sr(l)),
      (l & (e.suspendedLanes | t)) !== 0 ? 0 : l
    );
  }
  function Sr(e) {
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
  function Nr(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Cu() {
    var e = X.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : hm(e.type));
  }
  function Mu(e, t) {
    var l = X.p;
    try {
      return ((X.p = e), t());
    } finally {
      X.p = l;
    }
  }
  var Va = Math.random().toString(36).slice(2),
    mt = "__reactFiber$" + Va,
    Et = "__reactProps$" + Va,
    Ul = "__reactContainer$" + Va,
    wr = "__reactEvents$" + Va,
    cv = "__reactListeners$" + Va,
    ov = "__reactHandles$" + Va,
    Ou = "__reactResources$" + Va,
    Rs = "__reactMarker$" + Va;
  function Tr(e) {
    (delete e[mt], delete e[Et], delete e[wr], delete e[cv], delete e[ov]);
  }
  function Gl(e) {
    var t = e[mt];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if ((t = l[Ul] || l[mt])) {
        if (
          ((l = t.alternate),
          t.child !== null || (l !== null && l.child !== null))
        )
          for (e = Ph(e); e !== null; ) {
            if ((l = e[mt])) return l;
            e = Ph(e);
          }
        return t;
      }
      ((e = l), (l = e.parentNode));
    }
    return null;
  }
  function ql(e) {
    if ((e = e[mt] || e[Ul])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function Ls(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(n(33));
  }
  function Vl(e) {
    var t = e[Ou];
    return (
      t ||
        (t = e[Ou] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function ct(e) {
    e[Rs] = !0;
  }
  var Au = new Set(),
    zu = {};
  function gl(e, t) {
    (Yl(e, t), Yl(e + "Capture", t));
  }
  function Yl(e, t) {
    for (zu[e] = t, e = 0; e < t.length; e++) Au.add(t[e]);
  }
  var uv = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Du = {},
    _u = {};
  function dv(e) {
    return Os.call(_u, e)
      ? !0
      : Os.call(Du, e)
        ? !1
        : uv.test(e)
          ? (_u[e] = !0)
          : ((Du[e] = !0), !1);
  }
  function ki(e, t, l) {
    if (dv(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var i = t.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function Xi(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + l);
    }
  }
  function va(e, t, l, i) {
    if (i === null) e.removeAttribute(l);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + i);
    }
  }
  function Xt(e) {
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
  function Ru(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function fv(e, t, l) {
    var i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof i < "u" &&
      typeof i.get == "function" &&
      typeof i.set == "function"
    ) {
      var o = i.get,
        u = i.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return o.call(this);
          },
          set: function (v) {
            ((l = "" + v), u.call(this, v));
          },
        }),
        Object.defineProperty(e, t, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (v) {
            l = "" + v;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Er(e) {
    if (!e._valueTracker) {
      var t = Ru(e) ? "checked" : "value";
      e._valueTracker = fv(e, t, "" + e[t]);
    }
  }
  function Lu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      i = "";
    return (
      e && (i = Ru(e) ? (e.checked ? "true" : "false") : e.value),
      (e = i),
      e !== l ? (t.setValue(e), !0) : !1
    );
  }
  function Qi(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var hv = /[\n"\\]/g;
  function Qt(e) {
    return e.replace(hv, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Cr(e, t, l, i, o, u, v, y) {
    ((e.name = ""),
      v != null &&
      typeof v != "function" &&
      typeof v != "symbol" &&
      typeof v != "boolean"
        ? (e.type = v)
        : e.removeAttribute("type"),
      t != null
        ? v === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + Xt(t))
          : e.value !== "" + Xt(t) && (e.value = "" + Xt(t))
        : (v !== "submit" && v !== "reset") || e.removeAttribute("value"),
      t != null
        ? Mr(e, v, Xt(t))
        : l != null
          ? Mr(e, v, Xt(l))
          : i != null && e.removeAttribute("value"),
      o == null && u != null && (e.defaultChecked = !!u),
      o != null &&
        (e.checked = o && typeof o != "function" && typeof o != "symbol"),
      y != null &&
      typeof y != "function" &&
      typeof y != "symbol" &&
      typeof y != "boolean"
        ? (e.name = "" + Xt(y))
        : e.removeAttribute("name"));
  }
  function Bu(e, t, l, i, o, u, v, y) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (e.type = u),
      t != null || l != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || t != null)) {
        Er(e);
        return;
      }
      ((l = l != null ? "" + Xt(l) : ""),
        (t = t != null ? "" + Xt(t) : l),
        y || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((i = i ?? o),
      (i = typeof i != "function" && typeof i != "symbol" && !!i),
      (e.checked = y ? e.checked : !!i),
      (e.defaultChecked = !!i),
      v != null &&
        typeof v != "function" &&
        typeof v != "symbol" &&
        typeof v != "boolean" &&
        (e.name = v),
      Er(e));
  }
  function Mr(e, t, l) {
    (t === "number" && Qi(e.ownerDocument) === e) ||
      e.defaultValue === "" + l ||
      (e.defaultValue = "" + l);
  }
  function kl(e, t, l, i) {
    if (((e = e.options), t)) {
      t = {};
      for (var o = 0; o < l.length; o++) t["$" + l[o]] = !0;
      for (l = 0; l < e.length; l++)
        ((o = t.hasOwnProperty("$" + e[l].value)),
          e[l].selected !== o && (e[l].selected = o),
          o && i && (e[l].defaultSelected = !0));
    } else {
      for (l = "" + Xt(l), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === l) {
          ((e[o].selected = !0), i && (e[o].defaultSelected = !0));
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Hu(e, t, l) {
    if (
      t != null &&
      ((t = "" + Xt(t)), t !== e.value && (e.value = t), l == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + Xt(l) : "";
  }
  function Uu(e, t, l, i) {
    if (t == null) {
      if (i != null) {
        if (l != null) throw Error(n(92));
        if (ce(i)) {
          if (1 < i.length) throw Error(n(93));
          i = i[0];
        }
        l = i;
      }
      (l == null && (l = ""), (t = l));
    }
    ((l = Xt(t)),
      (e.defaultValue = l),
      (i = e.textContent),
      i === l && i !== "" && i !== null && (e.value = i),
      Er(e));
  }
  function Xl(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var mv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Gu(e, t, l) {
    var i = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? i
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : i
        ? e.setProperty(t, l)
        : typeof l != "number" || l === 0 || mv.has(t)
          ? t === "float"
            ? (e.cssFloat = l)
            : (e[t] = ("" + l).trim())
          : (e[t] = l + "px");
  }
  function qu(e, t, l) {
    if (t != null && typeof t != "object") throw Error(n(62));
    if (((e = e.style), l != null)) {
      for (var i in l)
        !l.hasOwnProperty(i) ||
          (t != null && t.hasOwnProperty(i)) ||
          (i.indexOf("--") === 0
            ? e.setProperty(i, "")
            : i === "float"
              ? (e.cssFloat = "")
              : (e[i] = ""));
      for (var o in t)
        ((i = t[o]), t.hasOwnProperty(o) && l[o] !== i && Gu(e, o, i));
    } else for (var u in t) t.hasOwnProperty(u) && Gu(e, u, t[u]);
  }
  function Or(e) {
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
  var pv = new Map([
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
      ["xHeight", "x-height"],
    ]),
    vv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Zi(e) {
    return vv.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function ga() {}
  var Ar = null;
  function zr(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ql = null,
    Zl = null;
  function Vu(e) {
    var t = ql(e);
    if (t && (e = t.stateNode)) {
      var l = e[Et] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Cr(
              e,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name,
            ),
            (t = l.name),
            l.type === "radio" && t != null)
          ) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + Qt("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < l.length;
              t++
            ) {
              var i = l[t];
              if (i !== e && i.form === e.form) {
                var o = i[Et] || null;
                if (!o) throw Error(n(90));
                Cr(
                  i,
                  o.value,
                  o.defaultValue,
                  o.defaultValue,
                  o.checked,
                  o.defaultChecked,
                  o.type,
                  o.name,
                );
              }
            }
            for (t = 0; t < l.length; t++)
              ((i = l[t]), i.form === e.form && Lu(i));
          }
          break e;
        case "textarea":
          Hu(e, l.value, l.defaultValue);
          break e;
        case "select":
          ((t = l.value), t != null && kl(e, !!l.multiple, t, !1));
      }
    }
  }
  var Dr = !1;
  function Yu(e, t, l) {
    if (Dr) return e(t, l);
    Dr = !0;
    try {
      var i = e(t);
      return i;
    } finally {
      if (
        ((Dr = !1),
        (Ql !== null || Zl !== null) &&
          (Rn(), Ql && ((t = Ql), (e = Zl), (Zl = Ql = null), Vu(t), e)))
      )
        for (t = 0; t < e.length; t++) Vu(e[t]);
    }
  }
  function Bs(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var i = l[Et] || null;
    if (i === null) return null;
    l = i[t];
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
        ((i = !i.disabled) ||
          ((e = e.type),
          (i = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !i));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function") throw Error(n(231, t, typeof l));
    return l;
  }
  var xa = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    _r = !1;
  if (xa)
    try {
      var Hs = {};
      (Object.defineProperty(Hs, "passive", {
        get: function () {
          _r = !0;
        },
      }),
        window.addEventListener("test", Hs, Hs),
        window.removeEventListener("test", Hs, Hs));
    } catch {
      _r = !1;
    }
  var Ya = null,
    Rr = null,
    Ji = null;
  function ku() {
    if (Ji) return Ji;
    var e,
      t = Rr,
      l = t.length,
      i,
      o = "value" in Ya ? Ya.value : Ya.textContent,
      u = o.length;
    for (e = 0; e < l && t[e] === o[e]; e++);
    var v = l - e;
    for (i = 1; i <= v && t[l - i] === o[u - i]; i++);
    return (Ji = o.slice(e, 1 < i ? 1 - i : void 0));
  }
  function Fi(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function $i() {
    return !0;
  }
  function Xu() {
    return !1;
  }
  function Ct(e) {
    function t(l, i, o, u, v) {
      ((this._reactName = l),
        (this._targetInst = o),
        (this.type = i),
        (this.nativeEvent = u),
        (this.target = v),
        (this.currentTarget = null));
      for (var y in e)
        e.hasOwnProperty(y) && ((l = e[y]), (this[y] = l ? l(u) : u[y]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? $i
          : Xu),
        (this.isPropagationStopped = Xu),
        this
      );
    }
    return (
      g(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = $i));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = $i));
        },
        persist: function () {},
        isPersistent: $i,
      }),
      t
    );
  }
  var xl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ki = Ct(xl),
    Us = g({}, xl, { view: 0, detail: 0 }),
    gv = Ct(Us),
    Lr,
    Br,
    Gs,
    Pi = g({}, Us, {
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
      getModifierState: Ur,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Gs &&
              (Gs && e.type === "mousemove"
                ? ((Lr = e.screenX - Gs.screenX), (Br = e.screenY - Gs.screenY))
                : (Br = Lr = 0),
              (Gs = e)),
            Lr);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Br;
      },
    }),
    Qu = Ct(Pi),
    xv = g({}, Pi, { dataTransfer: 0 }),
    jv = Ct(xv),
    yv = g({}, Us, { relatedTarget: 0 }),
    Hr = Ct(yv),
    bv = g({}, xl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Sv = Ct(bv),
    Nv = g({}, xl, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    wv = Ct(Nv),
    Tv = g({}, xl, { data: 0 }),
    Zu = Ct(Tv),
    Ev = {
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
      MozPrintableKey: "Unidentified",
    },
    Cv = {
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
      224: "Meta",
    },
    Mv = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Ov(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Mv[e])
        ? !!t[e]
        : !1;
  }
  function Ur() {
    return Ov;
  }
  var Av = g({}, Us, {
      key: function (e) {
        if (e.key) {
          var t = Ev[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Fi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Cv[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ur,
      charCode: function (e) {
        return e.type === "keypress" ? Fi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Fi(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    zv = Ct(Av),
    Dv = g({}, Pi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Ju = Ct(Dv),
    _v = g({}, Us, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ur,
    }),
    Rv = Ct(_v),
    Lv = g({}, xl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Bv = Ct(Lv),
    Hv = g({}, Pi, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Uv = Ct(Hv),
    Gv = g({}, xl, { newState: 0, oldState: 0 }),
    qv = Ct(Gv),
    Vv = [9, 13, 27, 32],
    Gr = xa && "CompositionEvent" in window,
    qs = null;
  xa && "documentMode" in document && (qs = document.documentMode);
  var Yv = xa && "TextEvent" in window && !qs,
    Fu = xa && (!Gr || (qs && 8 < qs && 11 >= qs)),
    $u = " ",
    Ku = !1;
  function Pu(e, t) {
    switch (e) {
      case "keyup":
        return Vv.indexOf(t.keyCode) !== -1;
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
  function Wu(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var Jl = !1;
  function kv(e, t) {
    switch (e) {
      case "compositionend":
        return Wu(t);
      case "keypress":
        return t.which !== 32 ? null : ((Ku = !0), $u);
      case "textInput":
        return ((e = t.data), e === $u && Ku ? null : e);
      default:
        return null;
    }
  }
  function Xv(e, t) {
    if (Jl)
      return e === "compositionend" || (!Gr && Pu(e, t))
        ? ((e = ku()), (Ji = Rr = Ya = null), (Jl = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Fu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Qv = {
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
    week: !0,
  };
  function Iu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Qv[e.type] : t === "textarea";
  }
  function ed(e, t, l, i) {
    (Ql ? (Zl ? Zl.push(i) : (Zl = [i])) : (Ql = i),
      (t = Vn(t, "onChange")),
      0 < t.length &&
        ((l = new Ki("onChange", "change", null, l, i)),
        e.push({ event: l, listeners: t })));
  }
  var Vs = null,
    Ys = null;
  function Zv(e) {
    Hh(e, 0);
  }
  function Wi(e) {
    var t = Ls(e);
    if (Lu(t)) return e;
  }
  function td(e, t) {
    if (e === "change") return t;
  }
  var ad = !1;
  if (xa) {
    var qr;
    if (xa) {
      var Vr = "oninput" in document;
      if (!Vr) {
        var ld = document.createElement("div");
        (ld.setAttribute("oninput", "return;"),
          (Vr = typeof ld.oninput == "function"));
      }
      qr = Vr;
    } else qr = !1;
    ad = qr && (!document.documentMode || 9 < document.documentMode);
  }
  function sd() {
    Vs && (Vs.detachEvent("onpropertychange", id), (Ys = Vs = null));
  }
  function id(e) {
    if (e.propertyName === "value" && Wi(Ys)) {
      var t = [];
      (ed(t, Ys, e, zr(e)), Yu(Zv, t));
    }
  }
  function Jv(e, t, l) {
    e === "focusin"
      ? (sd(), (Vs = t), (Ys = l), Vs.attachEvent("onpropertychange", id))
      : e === "focusout" && sd();
  }
  function Fv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Wi(Ys);
  }
  function $v(e, t) {
    if (e === "click") return Wi(t);
  }
  function Kv(e, t) {
    if (e === "input" || e === "change") return Wi(t);
  }
  function Pv(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Rt = typeof Object.is == "function" ? Object.is : Pv;
  function ks(e, t) {
    if (Rt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var l = Object.keys(e),
      i = Object.keys(t);
    if (l.length !== i.length) return !1;
    for (i = 0; i < l.length; i++) {
      var o = l[i];
      if (!Os.call(t, o) || !Rt(e[o], t[o])) return !1;
    }
    return !0;
  }
  function nd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function rd(e, t) {
    var l = nd(e);
    e = 0;
    for (var i; l; ) {
      if (l.nodeType === 3) {
        if (((i = e + l.textContent.length), e <= t && i >= t))
          return { node: l, offset: t - e };
        e = i;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = nd(l);
    }
  }
  function cd(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? cd(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function od(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Qi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = Qi(e.document);
    }
    return t;
  }
  function Yr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var Wv = xa && "documentMode" in document && 11 >= document.documentMode,
    Fl = null,
    kr = null,
    Xs = null,
    Xr = !1;
  function ud(e, t, l) {
    var i =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Xr ||
      Fl == null ||
      Fl !== Qi(i) ||
      ((i = Fl),
      "selectionStart" in i && Yr(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = (
            (i.ownerDocument && i.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      (Xs && ks(Xs, i)) ||
        ((Xs = i),
        (i = Vn(kr, "onSelect")),
        0 < i.length &&
          ((t = new Ki("onSelect", "select", null, t, l)),
          e.push({ event: t, listeners: i }),
          (t.target = Fl))));
  }
  function jl(e, t) {
    var l = {};
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l["Webkit" + e] = "webkit" + t),
      (l["Moz" + e] = "moz" + t),
      l
    );
  }
  var $l = {
      animationend: jl("Animation", "AnimationEnd"),
      animationiteration: jl("Animation", "AnimationIteration"),
      animationstart: jl("Animation", "AnimationStart"),
      transitionrun: jl("Transition", "TransitionRun"),
      transitionstart: jl("Transition", "TransitionStart"),
      transitioncancel: jl("Transition", "TransitionCancel"),
      transitionend: jl("Transition", "TransitionEnd"),
    },
    Qr = {},
    dd = {};
  xa &&
    ((dd = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete $l.animationend.animation,
      delete $l.animationiteration.animation,
      delete $l.animationstart.animation),
    "TransitionEvent" in window || delete $l.transitionend.transition);
  function yl(e) {
    if (Qr[e]) return Qr[e];
    if (!$l[e]) return e;
    var t = $l[e],
      l;
    for (l in t) if (t.hasOwnProperty(l) && l in dd) return (Qr[e] = t[l]);
    return e;
  }
  var fd = yl("animationend"),
    hd = yl("animationiteration"),
    md = yl("animationstart"),
    Iv = yl("transitionrun"),
    eg = yl("transitionstart"),
    tg = yl("transitioncancel"),
    pd = yl("transitionend"),
    vd = new Map(),
    Zr =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Zr.push("scrollEnd");
  function aa(e, t) {
    (vd.set(e, t), gl(t, [e]));
  }
  var Ii =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    Zt = [],
    Kl = 0,
    Jr = 0;
  function en() {
    for (var e = Kl, t = (Jr = Kl = 0); t < e; ) {
      var l = Zt[t];
      Zt[t++] = null;
      var i = Zt[t];
      Zt[t++] = null;
      var o = Zt[t];
      Zt[t++] = null;
      var u = Zt[t];
      if (((Zt[t++] = null), i !== null && o !== null)) {
        var v = i.pending;
        (v === null ? (o.next = o) : ((o.next = v.next), (v.next = o)),
          (i.pending = o));
      }
      u !== 0 && gd(l, o, u);
    }
  }
  function tn(e, t, l, i) {
    ((Zt[Kl++] = e),
      (Zt[Kl++] = t),
      (Zt[Kl++] = l),
      (Zt[Kl++] = i),
      (Jr |= i),
      (e.lanes |= i),
      (e = e.alternate),
      e !== null && (e.lanes |= i));
  }
  function Fr(e, t, l, i) {
    return (tn(e, t, l, i), an(e));
  }
  function bl(e, t) {
    return (tn(e, null, null, t), an(e));
  }
  function gd(e, t, l) {
    e.lanes |= l;
    var i = e.alternate;
    i !== null && (i.lanes |= l);
    for (var o = !1, u = e.return; u !== null; )
      ((u.childLanes |= l),
        (i = u.alternate),
        i !== null && (i.childLanes |= l),
        u.tag === 22 &&
          ((e = u.stateNode), e === null || e._visibility & 1 || (o = !0)),
        (e = u),
        (u = u.return));
    return e.tag === 3
      ? ((u = e.stateNode),
        o &&
          t !== null &&
          ((o = 31 - ht(l)),
          (e = u.hiddenUpdates),
          (i = e[o]),
          i === null ? (e[o] = [t]) : i.push(t),
          (t.lane = l | 536870912)),
        u)
      : null;
  }
  function an(e) {
    if (50 < fi) throw ((fi = 0), (lo = null), Error(n(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var Pl = {};
  function ag(e, t, l, i) {
    ((this.tag = e),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Lt(e, t, l, i) {
    return new ag(e, t, l, i);
  }
  function $r(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function ja(e, t) {
    var l = e.alternate;
    return (
      l === null
        ? ((l = Lt(e.tag, t, e.key, e.mode)),
          (l.elementType = e.elementType),
          (l.type = e.type),
          (l.stateNode = e.stateNode),
          (l.alternate = e),
          (e.alternate = l))
        : ((l.pendingProps = t),
          (l.type = e.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = e.flags & 65011712),
      (l.childLanes = e.childLanes),
      (l.lanes = e.lanes),
      (l.child = e.child),
      (l.memoizedProps = e.memoizedProps),
      (l.memoizedState = e.memoizedState),
      (l.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (l.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (l.sibling = e.sibling),
      (l.index = e.index),
      (l.ref = e.ref),
      (l.refCleanup = e.refCleanup),
      l
    );
  }
  function xd(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return (
      l === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = l.childLanes),
          (e.lanes = l.lanes),
          (e.child = l.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = l.memoizedProps),
          (e.memoizedState = l.memoizedState),
          (e.updateQueue = l.updateQueue),
          (e.type = l.type),
          (t = l.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function ln(e, t, l, i, o, u) {
    var v = 0;
    if (((i = e), typeof e == "function")) $r(e) && (v = 1);
    else if (typeof e == "string")
      v = rx(e, l, se.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case G:
          return ((e = Lt(31, l, t, o)), (e.elementType = G), (e.lanes = u), e);
        case M:
          return Sl(l.children, o, u, t);
        case A:
          ((v = 8), (o |= 24));
          break;
        case S:
          return (
            (e = Lt(12, l, t, o | 2)),
            (e.elementType = S),
            (e.lanes = u),
            e
          );
        case $:
          return ((e = Lt(13, l, t, o)), (e.elementType = $), (e.lanes = u), e);
        case ee:
          return (
            (e = Lt(19, l, t, o)),
            (e.elementType = ee),
            (e.lanes = u),
            e
          );
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case z:
                v = 10;
                break e;
              case w:
                v = 9;
                break e;
              case J:
                v = 11;
                break e;
              case K:
                v = 14;
                break e;
              case T:
                ((v = 16), (i = null));
                break e;
            }
          ((v = 29),
            (l = Error(n(130, e === null ? "null" : typeof e, ""))),
            (i = null));
      }
    return (
      (t = Lt(v, l, t, o)),
      (t.elementType = e),
      (t.type = i),
      (t.lanes = u),
      t
    );
  }
  function Sl(e, t, l, i) {
    return ((e = Lt(7, e, i, t)), (e.lanes = l), e);
  }
  function Kr(e, t, l) {
    return ((e = Lt(6, e, null, t)), (e.lanes = l), e);
  }
  function jd(e) {
    var t = Lt(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function Pr(e, t, l) {
    return (
      (t = Lt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = l),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var yd = new WeakMap();
  function Jt(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = yd.get(e);
      return l !== void 0
        ? l
        : ((t = { value: e, source: t, stack: Vi(t) }), yd.set(e, t), t);
    }
    return { value: e, source: t, stack: Vi(t) };
  }
  var Wl = [],
    Il = 0,
    sn = null,
    Qs = 0,
    Ft = [],
    $t = 0,
    ka = null,
    oa = 1,
    ua = "";
  function ya(e, t) {
    ((Wl[Il++] = Qs), (Wl[Il++] = sn), (sn = e), (Qs = t));
  }
  function bd(e, t, l) {
    ((Ft[$t++] = oa), (Ft[$t++] = ua), (Ft[$t++] = ka), (ka = e));
    var i = oa;
    e = ua;
    var o = 32 - ht(i) - 1;
    ((i &= ~(1 << o)), (l += 1));
    var u = 32 - ht(t) + o;
    if (30 < u) {
      var v = o - (o % 5);
      ((u = (i & ((1 << v) - 1)).toString(32)),
        (i >>= v),
        (o -= v),
        (oa = (1 << (32 - ht(t) + o)) | (l << o) | i),
        (ua = u + e));
    } else ((oa = (1 << u) | (l << o) | i), (ua = e));
  }
  function Wr(e) {
    e.return !== null && (ya(e, 1), bd(e, 1, 0));
  }
  function Ir(e) {
    for (; e === sn; )
      ((sn = Wl[--Il]), (Wl[Il] = null), (Qs = Wl[--Il]), (Wl[Il] = null));
    for (; e === ka; )
      ((ka = Ft[--$t]),
        (Ft[$t] = null),
        (ua = Ft[--$t]),
        (Ft[$t] = null),
        (oa = Ft[--$t]),
        (Ft[$t] = null));
  }
  function Sd(e, t) {
    ((Ft[$t++] = oa),
      (Ft[$t++] = ua),
      (Ft[$t++] = ka),
      (oa = t.id),
      (ua = t.overflow),
      (ka = e));
  }
  var pt = null,
    Ve = null,
    Oe = !1,
    Xa = null,
    Kt = !1,
    ec = Error(n(519));
  function Qa(e) {
    var t = Error(
      n(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Zs(Jt(t, e)), ec);
  }
  function Nd(e) {
    var t = e.stateNode,
      l = e.type,
      i = e.memoizedProps;
    switch (((t[mt] = e), (t[Et] = i), l)) {
      case "dialog":
        (Ee("cancel", t), Ee("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        Ee("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < mi.length; l++) Ee(mi[l], t);
        break;
      case "source":
        Ee("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (Ee("error", t), Ee("load", t));
        break;
      case "details":
        Ee("toggle", t);
        break;
      case "input":
        (Ee("invalid", t),
          Bu(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0,
          ));
        break;
      case "select":
        Ee("invalid", t);
        break;
      case "textarea":
        (Ee("invalid", t), Uu(t, i.value, i.defaultValue, i.children));
    }
    ((l = i.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      t.textContent === "" + l ||
      i.suppressHydrationWarning === !0 ||
      Vh(t.textContent, l)
        ? (i.popover != null && (Ee("beforetoggle", t), Ee("toggle", t)),
          i.onScroll != null && Ee("scroll", t),
          i.onScrollEnd != null && Ee("scrollend", t),
          i.onClick != null && (t.onclick = ga),
          (t = !0))
        : (t = !1),
      t || Qa(e, !0));
  }
  function wd(e) {
    for (pt = e.return; pt; )
      switch (pt.tag) {
        case 5:
        case 31:
        case 13:
          Kt = !1;
          return;
        case 27:
        case 3:
          Kt = !0;
          return;
        default:
          pt = pt.return;
      }
  }
  function es(e) {
    if (e !== pt) return !1;
    if (!Oe) return (wd(e), (Oe = !0), !1);
    var t = e.tag,
      l;
    if (
      ((l = t !== 3 && t !== 27) &&
        ((l = t === 5) &&
          ((l = e.type),
          (l =
            !(l !== "form" && l !== "button") || jo(e.type, e.memoizedProps))),
        (l = !l)),
      l && Ve && Qa(e),
      wd(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(n(317));
      Ve = Kh(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(n(317));
      Ve = Kh(e);
    } else
      t === 27
        ? ((t = Ve), il(e.type) ? ((e = wo), (wo = null), (Ve = e)) : (Ve = t))
        : (Ve = pt ? Wt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Nl() {
    ((Ve = pt = null), (Oe = !1));
  }
  function tc() {
    var e = Xa;
    return (
      e !== null &&
        (zt === null ? (zt = e) : zt.push.apply(zt, e), (Xa = null)),
      e
    );
  }
  function Zs(e) {
    Xa === null ? (Xa = [e]) : Xa.push(e);
  }
  var ac = O(null),
    wl = null,
    ba = null;
  function Za(e, t, l) {
    (le(ac, t._currentValue), (t._currentValue = l));
  }
  function Sa(e) {
    ((e._currentValue = ac.current), F(ac));
  }
  function lc(e, t, l) {
    for (; e !== null; ) {
      var i = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), i !== null && (i.childLanes |= t))
          : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
        e === l)
      )
        break;
      e = e.return;
    }
  }
  function sc(e, t, l, i) {
    var o = e.child;
    for (o !== null && (o.return = e); o !== null; ) {
      var u = o.dependencies;
      if (u !== null) {
        var v = o.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var y = u;
          u = o;
          for (var C = 0; C < t.length; C++)
            if (y.context === t[C]) {
              ((u.lanes |= l),
                (y = u.alternate),
                y !== null && (y.lanes |= l),
                lc(u.return, l, e),
                i || (v = null));
              break e;
            }
          u = y.next;
        }
      } else if (o.tag === 18) {
        if (((v = o.return), v === null)) throw Error(n(341));
        ((v.lanes |= l),
          (u = v.alternate),
          u !== null && (u.lanes |= l),
          lc(v, l, e),
          (v = null));
      } else v = o.child;
      if (v !== null) v.return = o;
      else
        for (v = o; v !== null; ) {
          if (v === e) {
            v = null;
            break;
          }
          if (((o = v.sibling), o !== null)) {
            ((o.return = v.return), (v = o));
            break;
          }
          v = v.return;
        }
      o = v;
    }
  }
  function ts(e, t, l, i) {
    e = null;
    for (var o = t, u = !1; o !== null; ) {
      if (!u) {
        if ((o.flags & 524288) !== 0) u = !0;
        else if ((o.flags & 262144) !== 0) break;
      }
      if (o.tag === 10) {
        var v = o.alternate;
        if (v === null) throw Error(n(387));
        if (((v = v.memoizedProps), v !== null)) {
          var y = o.type;
          Rt(o.pendingProps.value, v.value) ||
            (e !== null ? e.push(y) : (e = [y]));
        }
      } else if (o === me.current) {
        if (((v = o.alternate), v === null)) throw Error(n(387));
        v.memoizedState.memoizedState !== o.memoizedState.memoizedState &&
          (e !== null ? e.push(ji) : (e = [ji]));
      }
      o = o.return;
    }
    (e !== null && sc(t, e, l, i), (t.flags |= 262144));
  }
  function nn(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Rt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Tl(e) {
    ((wl = e),
      (ba = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function vt(e) {
    return Td(wl, e);
  }
  function rn(e, t) {
    return (wl === null && Tl(e), Td(e, t));
  }
  function Td(e, t) {
    var l = t._currentValue;
    if (((t = { context: t, memoizedValue: l, next: null }), ba === null)) {
      if (e === null) throw Error(n(308));
      ((ba = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else ba = ba.next = t;
    return l;
  }
  var lg =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (l, i) {
                  e.push(i);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (l) {
                  return l();
                }));
            };
          },
    sg = s.unstable_scheduleCallback,
    ig = s.unstable_NormalPriority,
    tt = {
      $$typeof: z,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function ic() {
    return { controller: new lg(), data: new Map(), refCount: 0 };
  }
  function Js(e) {
    (e.refCount--,
      e.refCount === 0 &&
        sg(ig, function () {
          e.controller.abort();
        }));
  }
  var Fs = null,
    nc = 0,
    as = 0,
    ls = null;
  function ng(e, t) {
    if (Fs === null) {
      var l = (Fs = []);
      ((nc = 0),
        (as = oo()),
        (ls = {
          status: "pending",
          value: void 0,
          then: function (i) {
            l.push(i);
          },
        }));
    }
    return (nc++, t.then(Ed, Ed), t);
  }
  function Ed() {
    if (--nc === 0 && Fs !== null) {
      ls !== null && (ls.status = "fulfilled");
      var e = Fs;
      ((Fs = null), (as = 0), (ls = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function rg(e, t) {
    var l = [],
      i = {
        status: "pending",
        value: null,
        reason: null,
        then: function (o) {
          l.push(o);
        },
      };
    return (
      e.then(
        function () {
          ((i.status = "fulfilled"), (i.value = t));
          for (var o = 0; o < l.length; o++) (0, l[o])(t);
        },
        function (o) {
          for (i.status = "rejected", i.reason = o, o = 0; o < l.length; o++)
            (0, l[o])(void 0);
        },
      ),
      i
    );
  }
  var Cd = U.S;
  U.S = function (e, t) {
    ((dh = yt()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        ng(e, t),
      Cd !== null && Cd(e, t));
  };
  var El = O(null);
  function rc() {
    var e = El.current;
    return e !== null ? e : Ue.pooledCache;
  }
  function cn(e, t) {
    t === null ? le(El, El.current) : le(El, t.pool);
  }
  function Md() {
    var e = rc();
    return e === null ? null : { parent: tt._currentValue, pool: e };
  }
  var ss = Error(n(460)),
    cc = Error(n(474)),
    on = Error(n(542)),
    un = { then: function () {} };
  function Od(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function Ad(e, t, l) {
    switch (
      ((l = e[l]),
      l === void 0 ? e.push(t) : l !== t && (t.then(ga, ga), (t = l)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), Dd(e), e);
      default:
        if (typeof t.status == "string") t.then(ga, ga);
        else {
          if (((e = Ue), e !== null && 100 < e.shellSuspendCounter))
            throw Error(n(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (i) {
                if (t.status === "pending") {
                  var o = t;
                  ((o.status = "fulfilled"), (o.value = i));
                }
              },
              function (i) {
                if (t.status === "pending") {
                  var o = t;
                  ((o.status = "rejected"), (o.reason = i));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), Dd(e), e);
        }
        throw ((Ml = t), ss);
    }
  }
  function Cl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function"
        ? ((Ml = l), ss)
        : l;
    }
  }
  var Ml = null;
  function zd() {
    if (Ml === null) throw Error(n(459));
    var e = Ml;
    return ((Ml = null), e);
  }
  function Dd(e) {
    if (e === ss || e === on) throw Error(n(483));
  }
  var is = null,
    $s = 0;
  function dn(e) {
    var t = $s;
    return (($s += 1), is === null && (is = []), Ad(is, e, t));
  }
  function Ks(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function fn(e, t) {
    throw t.$$typeof === N
      ? Error(n(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          n(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function _d(e) {
    function t(R, D) {
      if (e) {
        var q = R.deletions;
        q === null ? ((R.deletions = [D]), (R.flags |= 16)) : q.push(D);
      }
    }
    function l(R, D) {
      if (!e) return null;
      for (; D !== null; ) (t(R, D), (D = D.sibling));
      return null;
    }
    function i(R) {
      for (var D = new Map(); R !== null; )
        (R.key !== null ? D.set(R.key, R) : D.set(R.index, R), (R = R.sibling));
      return D;
    }
    function o(R, D) {
      return ((R = ja(R, D)), (R.index = 0), (R.sibling = null), R);
    }
    function u(R, D, q) {
      return (
        (R.index = q),
        e
          ? ((q = R.alternate),
            q !== null
              ? ((q = q.index), q < D ? ((R.flags |= 67108866), D) : q)
              : ((R.flags |= 67108866), D))
          : ((R.flags |= 1048576), D)
      );
    }
    function v(R) {
      return (e && R.alternate === null && (R.flags |= 67108866), R);
    }
    function y(R, D, q, W) {
      return D === null || D.tag !== 6
        ? ((D = Kr(q, R.mode, W)), (D.return = R), D)
        : ((D = o(D, q)), (D.return = R), D);
    }
    function C(R, D, q, W) {
      var pe = q.type;
      return pe === M
        ? P(R, D, q.props.children, W, q.key)
        : D !== null &&
            (D.elementType === pe ||
              (typeof pe == "object" &&
                pe !== null &&
                pe.$$typeof === T &&
                Cl(pe) === D.type))
          ? ((D = o(D, q.props)), Ks(D, q), (D.return = R), D)
          : ((D = ln(q.type, q.key, q.props, null, R.mode, W)),
            Ks(D, q),
            (D.return = R),
            D);
    }
    function V(R, D, q, W) {
      return D === null ||
        D.tag !== 4 ||
        D.stateNode.containerInfo !== q.containerInfo ||
        D.stateNode.implementation !== q.implementation
        ? ((D = Pr(q, R.mode, W)), (D.return = R), D)
        : ((D = o(D, q.children || [])), (D.return = R), D);
    }
    function P(R, D, q, W, pe) {
      return D === null || D.tag !== 7
        ? ((D = Sl(q, R.mode, W, pe)), (D.return = R), D)
        : ((D = o(D, q)), (D.return = R), D);
    }
    function I(R, D, q) {
      if (
        (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
      )
        return ((D = Kr("" + D, R.mode, q)), (D.return = R), D);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case b:
            return (
              (q = ln(D.type, D.key, D.props, null, R.mode, q)),
              Ks(q, D),
              (q.return = R),
              q
            );
          case E:
            return ((D = Pr(D, R.mode, q)), (D.return = R), D);
          case T:
            return ((D = Cl(D)), I(R, D, q));
        }
        if (ce(D) || B(D))
          return ((D = Sl(D, R.mode, q, null)), (D.return = R), D);
        if (typeof D.then == "function") return I(R, dn(D), q);
        if (D.$$typeof === z) return I(R, rn(R, D), q);
        fn(R, D);
      }
      return null;
    }
    function k(R, D, q, W) {
      var pe = D !== null ? D.key : null;
      if (
        (typeof q == "string" && q !== "") ||
        typeof q == "number" ||
        typeof q == "bigint"
      )
        return pe !== null ? null : y(R, D, "" + q, W);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case b:
            return q.key === pe ? C(R, D, q, W) : null;
          case E:
            return q.key === pe ? V(R, D, q, W) : null;
          case T:
            return ((q = Cl(q)), k(R, D, q, W));
        }
        if (ce(q) || B(q)) return pe !== null ? null : P(R, D, q, W, null);
        if (typeof q.then == "function") return k(R, D, dn(q), W);
        if (q.$$typeof === z) return k(R, D, rn(R, q), W);
        fn(R, q);
      }
      return null;
    }
    function Z(R, D, q, W, pe) {
      if (
        (typeof W == "string" && W !== "") ||
        typeof W == "number" ||
        typeof W == "bigint"
      )
        return ((R = R.get(q) || null), y(D, R, "" + W, pe));
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case b:
            return (
              (R = R.get(W.key === null ? q : W.key) || null),
              C(D, R, W, pe)
            );
          case E:
            return (
              (R = R.get(W.key === null ? q : W.key) || null),
              V(D, R, W, pe)
            );
          case T:
            return ((W = Cl(W)), Z(R, D, q, W, pe));
        }
        if (ce(W) || B(W))
          return ((R = R.get(q) || null), P(D, R, W, pe, null));
        if (typeof W.then == "function") return Z(R, D, q, dn(W), pe);
        if (W.$$typeof === z) return Z(R, D, q, rn(D, W), pe);
        fn(D, W);
      }
      return null;
    }
    function ue(R, D, q, W) {
      for (
        var pe = null, Ae = null, he = D, Ne = (D = 0), Me = null;
        he !== null && Ne < q.length;
        Ne++
      ) {
        he.index > Ne ? ((Me = he), (he = null)) : (Me = he.sibling);
        var ze = k(R, he, q[Ne], W);
        if (ze === null) {
          he === null && (he = Me);
          break;
        }
        (e && he && ze.alternate === null && t(R, he),
          (D = u(ze, D, Ne)),
          Ae === null ? (pe = ze) : (Ae.sibling = ze),
          (Ae = ze),
          (he = Me));
      }
      if (Ne === q.length) return (l(R, he), Oe && ya(R, Ne), pe);
      if (he === null) {
        for (; Ne < q.length; Ne++)
          ((he = I(R, q[Ne], W)),
            he !== null &&
              ((D = u(he, D, Ne)),
              Ae === null ? (pe = he) : (Ae.sibling = he),
              (Ae = he)));
        return (Oe && ya(R, Ne), pe);
      }
      for (he = i(he); Ne < q.length; Ne++)
        ((Me = Z(he, R, Ne, q[Ne], W)),
          Me !== null &&
            (e &&
              Me.alternate !== null &&
              he.delete(Me.key === null ? Ne : Me.key),
            (D = u(Me, D, Ne)),
            Ae === null ? (pe = Me) : (Ae.sibling = Me),
            (Ae = Me)));
      return (
        e &&
          he.forEach(function (ul) {
            return t(R, ul);
          }),
        Oe && ya(R, Ne),
        pe
      );
    }
    function ge(R, D, q, W) {
      if (q == null) throw Error(n(151));
      for (
        var pe = null,
          Ae = null,
          he = D,
          Ne = (D = 0),
          Me = null,
          ze = q.next();
        he !== null && !ze.done;
        Ne++, ze = q.next()
      ) {
        he.index > Ne ? ((Me = he), (he = null)) : (Me = he.sibling);
        var ul = k(R, he, ze.value, W);
        if (ul === null) {
          he === null && (he = Me);
          break;
        }
        (e && he && ul.alternate === null && t(R, he),
          (D = u(ul, D, Ne)),
          Ae === null ? (pe = ul) : (Ae.sibling = ul),
          (Ae = ul),
          (he = Me));
      }
      if (ze.done) return (l(R, he), Oe && ya(R, Ne), pe);
      if (he === null) {
        for (; !ze.done; Ne++, ze = q.next())
          ((ze = I(R, ze.value, W)),
            ze !== null &&
              ((D = u(ze, D, Ne)),
              Ae === null ? (pe = ze) : (Ae.sibling = ze),
              (Ae = ze)));
        return (Oe && ya(R, Ne), pe);
      }
      for (he = i(he); !ze.done; Ne++, ze = q.next())
        ((ze = Z(he, R, Ne, ze.value, W)),
          ze !== null &&
            (e &&
              ze.alternate !== null &&
              he.delete(ze.key === null ? Ne : ze.key),
            (D = u(ze, D, Ne)),
            Ae === null ? (pe = ze) : (Ae.sibling = ze),
            (Ae = ze)));
      return (
        e &&
          he.forEach(function (xx) {
            return t(R, xx);
          }),
        Oe && ya(R, Ne),
        pe
      );
    }
    function He(R, D, q, W) {
      if (
        (typeof q == "object" &&
          q !== null &&
          q.type === M &&
          q.key === null &&
          (q = q.props.children),
        typeof q == "object" && q !== null)
      ) {
        switch (q.$$typeof) {
          case b:
            e: {
              for (var pe = q.key; D !== null; ) {
                if (D.key === pe) {
                  if (((pe = q.type), pe === M)) {
                    if (D.tag === 7) {
                      (l(R, D.sibling),
                        (W = o(D, q.props.children)),
                        (W.return = R),
                        (R = W));
                      break e;
                    }
                  } else if (
                    D.elementType === pe ||
                    (typeof pe == "object" &&
                      pe !== null &&
                      pe.$$typeof === T &&
                      Cl(pe) === D.type)
                  ) {
                    (l(R, D.sibling),
                      (W = o(D, q.props)),
                      Ks(W, q),
                      (W.return = R),
                      (R = W));
                    break e;
                  }
                  l(R, D);
                  break;
                } else t(R, D);
                D = D.sibling;
              }
              q.type === M
                ? ((W = Sl(q.props.children, R.mode, W, q.key)),
                  (W.return = R),
                  (R = W))
                : ((W = ln(q.type, q.key, q.props, null, R.mode, W)),
                  Ks(W, q),
                  (W.return = R),
                  (R = W));
            }
            return v(R);
          case E:
            e: {
              for (pe = q.key; D !== null; ) {
                if (D.key === pe)
                  if (
                    D.tag === 4 &&
                    D.stateNode.containerInfo === q.containerInfo &&
                    D.stateNode.implementation === q.implementation
                  ) {
                    (l(R, D.sibling),
                      (W = o(D, q.children || [])),
                      (W.return = R),
                      (R = W));
                    break e;
                  } else {
                    l(R, D);
                    break;
                  }
                else t(R, D);
                D = D.sibling;
              }
              ((W = Pr(q, R.mode, W)), (W.return = R), (R = W));
            }
            return v(R);
          case T:
            return ((q = Cl(q)), He(R, D, q, W));
        }
        if (ce(q)) return ue(R, D, q, W);
        if (B(q)) {
          if (((pe = B(q)), typeof pe != "function")) throw Error(n(150));
          return ((q = pe.call(q)), ge(R, D, q, W));
        }
        if (typeof q.then == "function") return He(R, D, dn(q), W);
        if (q.$$typeof === z) return He(R, D, rn(R, q), W);
        fn(R, q);
      }
      return (typeof q == "string" && q !== "") ||
        typeof q == "number" ||
        typeof q == "bigint"
        ? ((q = "" + q),
          D !== null && D.tag === 6
            ? (l(R, D.sibling), (W = o(D, q)), (W.return = R), (R = W))
            : (l(R, D), (W = Kr(q, R.mode, W)), (W.return = R), (R = W)),
          v(R))
        : l(R, D);
    }
    return function (R, D, q, W) {
      try {
        $s = 0;
        var pe = He(R, D, q, W);
        return ((is = null), pe);
      } catch (he) {
        if (he === ss || he === on) throw he;
        var Ae = Lt(29, he, null, R.mode);
        return ((Ae.lanes = W), (Ae.return = R), Ae);
      }
    };
  }
  var Ol = _d(!0),
    Rd = _d(!1),
    Ja = !1;
  function oc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function uc(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function Fa(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function $a(e, t, l) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), (De & 2) !== 0)) {
      var o = i.pending;
      return (
        o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
        (i.pending = t),
        (t = an(e)),
        gd(e, null, l),
        t
      );
    }
    return (tn(e, i, t, l), an(e));
  }
  function Ps(e, t, l) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))
    ) {
      var i = t.lanes;
      ((i &= e.pendingLanes), (l |= i), (t.lanes = l), Tu(e, l));
    }
  }
  function dc(e, t) {
    var l = e.updateQueue,
      i = e.alternate;
    if (i !== null && ((i = i.updateQueue), l === i)) {
      var o = null,
        u = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var v = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          (u === null ? (o = u = v) : (u = u.next = v), (l = l.next));
        } while (l !== null);
        u === null ? (o = u = t) : (u = u.next = t);
      } else o = u = t;
      ((l = {
        baseState: i.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: u,
        shared: i.shared,
        callbacks: i.callbacks,
      }),
        (e.updateQueue = l));
      return;
    }
    ((e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = t) : (e.next = t),
      (l.lastBaseUpdate = t));
  }
  var fc = !1;
  function Ws() {
    if (fc) {
      var e = ls;
      if (e !== null) throw e;
    }
  }
  function Is(e, t, l, i) {
    fc = !1;
    var o = e.updateQueue;
    Ja = !1;
    var u = o.firstBaseUpdate,
      v = o.lastBaseUpdate,
      y = o.shared.pending;
    if (y !== null) {
      o.shared.pending = null;
      var C = y,
        V = C.next;
      ((C.next = null), v === null ? (u = V) : (v.next = V), (v = C));
      var P = e.alternate;
      P !== null &&
        ((P = P.updateQueue),
        (y = P.lastBaseUpdate),
        y !== v &&
          (y === null ? (P.firstBaseUpdate = V) : (y.next = V),
          (P.lastBaseUpdate = C)));
    }
    if (u !== null) {
      var I = o.baseState;
      ((v = 0), (P = V = C = null), (y = u));
      do {
        var k = y.lane & -536870913,
          Z = k !== y.lane;
        if (Z ? (Ce & k) === k : (i & k) === k) {
          (k !== 0 && k === as && (fc = !0),
            P !== null &&
              (P = P.next =
                {
                  lane: 0,
                  tag: y.tag,
                  payload: y.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var ue = e,
              ge = y;
            k = t;
            var He = l;
            switch (ge.tag) {
              case 1:
                if (((ue = ge.payload), typeof ue == "function")) {
                  I = ue.call(He, I, k);
                  break e;
                }
                I = ue;
                break e;
              case 3:
                ue.flags = (ue.flags & -65537) | 128;
              case 0:
                if (
                  ((ue = ge.payload),
                  (k = typeof ue == "function" ? ue.call(He, I, k) : ue),
                  k == null)
                )
                  break e;
                I = g({}, I, k);
                break e;
              case 2:
                Ja = !0;
            }
          }
          ((k = y.callback),
            k !== null &&
              ((e.flags |= 64),
              Z && (e.flags |= 8192),
              (Z = o.callbacks),
              Z === null ? (o.callbacks = [k]) : Z.push(k)));
        } else
          ((Z = {
            lane: k,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null,
          }),
            P === null ? ((V = P = Z), (C = I)) : (P = P.next = Z),
            (v |= k));
        if (((y = y.next), y === null)) {
          if (((y = o.shared.pending), y === null)) break;
          ((Z = y),
            (y = Z.next),
            (Z.next = null),
            (o.lastBaseUpdate = Z),
            (o.shared.pending = null));
        }
      } while (!0);
      (P === null && (C = I),
        (o.baseState = C),
        (o.firstBaseUpdate = V),
        (o.lastBaseUpdate = P),
        u === null && (o.shared.lanes = 0),
        (el |= v),
        (e.lanes = v),
        (e.memoizedState = I));
    }
  }
  function Ld(e, t) {
    if (typeof e != "function") throw Error(n(191, e));
    e.call(t);
  }
  function Bd(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++) Ld(l[e], t);
  }
  var ns = O(null),
    hn = O(0);
  function Hd(e, t) {
    ((e = za), le(hn, e), le(ns, t), (za = e | t.baseLanes));
  }
  function hc() {
    (le(hn, za), le(ns, ns.current));
  }
  function mc() {
    ((za = hn.current), F(ns), F(hn));
  }
  var Bt = O(null),
    Pt = null;
  function Ka(e) {
    var t = e.alternate;
    (le(We, We.current & 1),
      le(Bt, e),
      Pt === null &&
        (t === null || ns.current !== null || t.memoizedState !== null) &&
        (Pt = e));
  }
  function pc(e) {
    (le(We, We.current), le(Bt, e), Pt === null && (Pt = e));
  }
  function Ud(e) {
    e.tag === 22
      ? (le(We, We.current), le(Bt, e), Pt === null && (Pt = e))
      : Pa();
  }
  function Pa() {
    (le(We, We.current), le(Bt, Bt.current));
  }
  function Ht(e) {
    (F(Bt), Pt === e && (Pt = null), F(We));
  }
  var We = O(0);
  function mn(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || So(l) || No(l)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Na = 0,
    Se = null,
    Le = null,
    at = null,
    pn = !1,
    rs = !1,
    Al = !1,
    vn = 0,
    ei = 0,
    cs = null,
    cg = 0;
  function Ke() {
    throw Error(n(321));
  }
  function vc(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!Rt(e[l], t[l])) return !1;
    return !0;
  }
  function gc(e, t, l, i, o, u) {
    return (
      (Na = u),
      (Se = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (U.H = e === null || e.memoizedState === null ? Sf : Dc),
      (Al = !1),
      (u = l(i, o)),
      (Al = !1),
      rs && (u = qd(t, l, i, o)),
      Gd(e),
      u
    );
  }
  function Gd(e) {
    U.H = li;
    var t = Le !== null && Le.next !== null;
    if (((Na = 0), (at = Le = Se = null), (pn = !1), (ei = 0), (cs = null), t))
      throw Error(n(300));
    e === null ||
      lt ||
      ((e = e.dependencies), e !== null && nn(e) && (lt = !0));
  }
  function qd(e, t, l, i) {
    Se = e;
    var o = 0;
    do {
      if ((rs && (cs = null), (ei = 0), (rs = !1), 25 <= o))
        throw Error(n(301));
      if (((o += 1), (at = Le = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((U.H = Nf), (u = t(l, i)));
    } while (rs);
    return u;
  }
  function og() {
    var e = U.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? ti(t) : t),
      (e = e.useState()[0]),
      (Le !== null ? Le.memoizedState : null) !== e && (Se.flags |= 1024),
      t
    );
  }
  function xc() {
    var e = vn !== 0;
    return ((vn = 0), e);
  }
  function jc(e, t, l) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l));
  }
  function yc(e) {
    if (pn) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      pn = !1;
    }
    ((Na = 0), (at = Le = Se = null), (rs = !1), (ei = vn = 0), (cs = null));
  }
  function wt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (at === null ? (Se.memoizedState = at = e) : (at = at.next = e), at);
  }
  function Ie() {
    if (Le === null) {
      var e = Se.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Le.next;
    var t = at === null ? Se.memoizedState : at.next;
    if (t !== null) ((at = t), (Le = e));
    else {
      if (e === null)
        throw Se.alternate === null ? Error(n(467)) : Error(n(310));
      ((Le = e),
        (e = {
          memoizedState: Le.memoizedState,
          baseState: Le.baseState,
          baseQueue: Le.baseQueue,
          queue: Le.queue,
          next: null,
        }),
        at === null ? (Se.memoizedState = at = e) : (at = at.next = e));
    }
    return at;
  }
  function gn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ti(e) {
    var t = ei;
    return (
      (ei += 1),
      cs === null && (cs = []),
      (e = Ad(cs, e, t)),
      (t = Se),
      (at === null ? t.memoizedState : at.next) === null &&
        ((t = t.alternate),
        (U.H = t === null || t.memoizedState === null ? Sf : Dc)),
      e
    );
  }
  function xn(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ti(e);
      if (e.$$typeof === z) return vt(e);
    }
    throw Error(n(438, String(e)));
  }
  function bc(e) {
    var t = null,
      l = Se.updateQueue;
    if ((l !== null && (t = l.memoCache), t == null)) {
      var i = Se.alternate;
      i !== null &&
        ((i = i.updateQueue),
        i !== null &&
          ((i = i.memoCache),
          i != null &&
            (t = {
              data: i.data.map(function (o) {
                return o.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      l === null && ((l = gn()), (Se.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), i = 0; i < e; i++) l[i] = L;
    return (t.index++, l);
  }
  function wa(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function jn(e) {
    var t = Ie();
    return Sc(t, Le, e);
  }
  function Sc(e, t, l) {
    var i = e.queue;
    if (i === null) throw Error(n(311));
    i.lastRenderedReducer = l;
    var o = e.baseQueue,
      u = i.pending;
    if (u !== null) {
      if (o !== null) {
        var v = o.next;
        ((o.next = u.next), (u.next = v));
      }
      ((t.baseQueue = o = u), (i.pending = null));
    }
    if (((u = e.baseState), o === null)) e.memoizedState = u;
    else {
      t = o.next;
      var y = (v = null),
        C = null,
        V = t,
        P = !1;
      do {
        var I = V.lane & -536870913;
        if (I !== V.lane ? (Ce & I) === I : (Na & I) === I) {
          var k = V.revertLane;
          if (k === 0)
            (C !== null &&
              (C = C.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: V.action,
                  hasEagerState: V.hasEagerState,
                  eagerState: V.eagerState,
                  next: null,
                }),
              I === as && (P = !0));
          else if ((Na & k) === k) {
            ((V = V.next), k === as && (P = !0));
            continue;
          } else
            ((I = {
              lane: 0,
              revertLane: V.revertLane,
              gesture: null,
              action: V.action,
              hasEagerState: V.hasEagerState,
              eagerState: V.eagerState,
              next: null,
            }),
              C === null ? ((y = C = I), (v = u)) : (C = C.next = I),
              (Se.lanes |= k),
              (el |= k));
          ((I = V.action),
            Al && l(u, I),
            (u = V.hasEagerState ? V.eagerState : l(u, I)));
        } else
          ((k = {
            lane: I,
            revertLane: V.revertLane,
            gesture: V.gesture,
            action: V.action,
            hasEagerState: V.hasEagerState,
            eagerState: V.eagerState,
            next: null,
          }),
            C === null ? ((y = C = k), (v = u)) : (C = C.next = k),
            (Se.lanes |= I),
            (el |= I));
        V = V.next;
      } while (V !== null && V !== t);
      if (
        (C === null ? (v = u) : (C.next = y),
        !Rt(u, e.memoizedState) && ((lt = !0), P && ((l = ls), l !== null)))
      )
        throw l;
      ((e.memoizedState = u),
        (e.baseState = v),
        (e.baseQueue = C),
        (i.lastRenderedState = u));
    }
    return (o === null && (i.lanes = 0), [e.memoizedState, i.dispatch]);
  }
  function Nc(e) {
    var t = Ie(),
      l = t.queue;
    if (l === null) throw Error(n(311));
    l.lastRenderedReducer = e;
    var i = l.dispatch,
      o = l.pending,
      u = t.memoizedState;
    if (o !== null) {
      l.pending = null;
      var v = (o = o.next);
      do ((u = e(u, v.action)), (v = v.next));
      while (v !== o);
      (Rt(u, t.memoizedState) || (lt = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (l.lastRenderedState = u));
    }
    return [u, i];
  }
  function Vd(e, t, l) {
    var i = Se,
      o = Ie(),
      u = Oe;
    if (u) {
      if (l === void 0) throw Error(n(407));
      l = l();
    } else l = t();
    var v = !Rt((Le || o).memoizedState, l);
    if (
      (v && ((o.memoizedState = l), (lt = !0)),
      (o = o.queue),
      Ec(Xd.bind(null, i, o, e), [e]),
      o.getSnapshot !== t || v || (at !== null && at.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        os(9, { destroy: void 0 }, kd.bind(null, i, o, l, t), null),
        Ue === null)
      )
        throw Error(n(349));
      u || (Na & 127) !== 0 || Yd(i, t, l);
    }
    return l;
  }
  function Yd(e, t, l) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = Se.updateQueue),
      t === null
        ? ((t = gn()), (Se.updateQueue = t), (t.stores = [e]))
        : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e)));
  }
  function kd(e, t, l, i) {
    ((t.value = l), (t.getSnapshot = i), Qd(t) && Zd(e));
  }
  function Xd(e, t, l) {
    return l(function () {
      Qd(t) && Zd(e);
    });
  }
  function Qd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !Rt(e, l);
    } catch {
      return !0;
    }
  }
  function Zd(e) {
    var t = bl(e, 2);
    t !== null && Dt(t, e, 2);
  }
  function wc(e) {
    var t = wt();
    if (typeof e == "function") {
      var l = e;
      if (((e = l()), Al)) {
        Nt(!0);
        try {
          l();
        } finally {
          Nt(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wa,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Jd(e, t, l, i) {
    return ((e.baseState = l), Sc(e, Le, typeof i == "function" ? i : wa));
  }
  function ug(e, t, l, i, o) {
    if (Sn(e)) throw Error(n(485));
    if (((e = t.action), e !== null)) {
      var u = {
        payload: o,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (v) {
          u.listeners.push(v);
        },
      };
      (U.T !== null ? l(!0) : (u.isTransition = !1),
        i(u),
        (l = t.pending),
        l === null
          ? ((u.next = t.pending = u), Fd(t, u))
          : ((u.next = l.next), (t.pending = l.next = u)));
    }
  }
  function Fd(e, t) {
    var l = t.action,
      i = t.payload,
      o = e.state;
    if (t.isTransition) {
      var u = U.T,
        v = {};
      U.T = v;
      try {
        var y = l(o, i),
          C = U.S;
        (C !== null && C(v, y), $d(e, t, y));
      } catch (V) {
        Tc(e, t, V);
      } finally {
        (u !== null && v.types !== null && (u.types = v.types), (U.T = u));
      }
    } else
      try {
        ((u = l(o, i)), $d(e, t, u));
      } catch (V) {
        Tc(e, t, V);
      }
  }
  function $d(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (i) {
            Kd(e, t, i);
          },
          function (i) {
            return Tc(e, t, i);
          },
        )
      : Kd(e, t, l);
  }
  function Kd(e, t, l) {
    ((t.status = "fulfilled"),
      (t.value = l),
      Pd(t),
      (e.state = l),
      (t = e.pending),
      t !== null &&
        ((l = t.next),
        l === t ? (e.pending = null) : ((l = l.next), (t.next = l), Fd(e, l))));
  }
  function Tc(e, t, l) {
    var i = e.pending;
    if (((e.pending = null), i !== null)) {
      i = i.next;
      do ((t.status = "rejected"), (t.reason = l), Pd(t), (t = t.next));
      while (t !== i);
    }
    e.action = null;
  }
  function Pd(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Wd(e, t) {
    return t;
  }
  function Id(e, t) {
    if (Oe) {
      var l = Ue.formState;
      if (l !== null) {
        e: {
          var i = Se;
          if (Oe) {
            if (Ve) {
              t: {
                for (var o = Ve, u = Kt; o.nodeType !== 8; ) {
                  if (!u) {
                    o = null;
                    break t;
                  }
                  if (((o = Wt(o.nextSibling)), o === null)) {
                    o = null;
                    break t;
                  }
                }
                ((u = o.data), (o = u === "F!" || u === "F" ? o : null));
              }
              if (o) {
                ((Ve = Wt(o.nextSibling)), (i = o.data === "F!"));
                break e;
              }
            }
            Qa(i);
          }
          i = !1;
        }
        i && (t = l[0]);
      }
    }
    return (
      (l = wt()),
      (l.memoizedState = l.baseState = t),
      (i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Wd,
        lastRenderedState: t,
      }),
      (l.queue = i),
      (l = jf.bind(null, Se, i)),
      (i.dispatch = l),
      (i = wc(!1)),
      (u = zc.bind(null, Se, !1, i.queue)),
      (i = wt()),
      (o = { state: t, dispatch: null, action: e, pending: null }),
      (i.queue = o),
      (l = ug.bind(null, Se, o, u, l)),
      (o.dispatch = l),
      (i.memoizedState = e),
      [t, l, !1]
    );
  }
  function ef(e) {
    var t = Ie();
    return tf(t, Le, e);
  }
  function tf(e, t, l) {
    if (
      ((t = Sc(e, t, Wd)[0]),
      (e = jn(wa)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var i = ti(t);
      } catch (v) {
        throw v === ss ? on : v;
      }
    else i = t;
    t = Ie();
    var o = t.queue,
      u = o.dispatch;
    return (
      l !== t.memoizedState &&
        ((Se.flags |= 2048),
        os(9, { destroy: void 0 }, dg.bind(null, o, l), null)),
      [i, u, e]
    );
  }
  function dg(e, t) {
    e.action = t;
  }
  function af(e) {
    var t = Ie(),
      l = Le;
    if (l !== null) return tf(t, l, e);
    (Ie(), (t = t.memoizedState), (l = Ie()));
    var i = l.queue.dispatch;
    return ((l.memoizedState = e), [t, i, !1]);
  }
  function os(e, t, l, i) {
    return (
      (e = { tag: e, create: l, deps: i, inst: t, next: null }),
      (t = Se.updateQueue),
      t === null && ((t = gn()), (Se.updateQueue = t)),
      (l = t.lastEffect),
      l === null
        ? (t.lastEffect = e.next = e)
        : ((i = l.next), (l.next = e), (e.next = i), (t.lastEffect = e)),
      e
    );
  }
  function lf() {
    return Ie().memoizedState;
  }
  function yn(e, t, l, i) {
    var o = wt();
    ((Se.flags |= e),
      (o.memoizedState = os(
        1 | t,
        { destroy: void 0 },
        l,
        i === void 0 ? null : i,
      )));
  }
  function bn(e, t, l, i) {
    var o = Ie();
    i = i === void 0 ? null : i;
    var u = o.memoizedState.inst;
    Le !== null && i !== null && vc(i, Le.memoizedState.deps)
      ? (o.memoizedState = os(t, u, l, i))
      : ((Se.flags |= e), (o.memoizedState = os(1 | t, u, l, i)));
  }
  function sf(e, t) {
    yn(8390656, 8, e, t);
  }
  function Ec(e, t) {
    bn(2048, 8, e, t);
  }
  function fg(e) {
    Se.flags |= 4;
    var t = Se.updateQueue;
    if (t === null) ((t = gn()), (Se.updateQueue = t), (t.events = [e]));
    else {
      var l = t.events;
      l === null ? (t.events = [e]) : l.push(e);
    }
  }
  function nf(e) {
    var t = Ie().memoizedState;
    return (
      fg({ ref: t, nextImpl: e }),
      function () {
        if ((De & 2) !== 0) throw Error(n(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function rf(e, t) {
    return bn(4, 2, e, t);
  }
  function cf(e, t) {
    return bn(4, 4, e, t);
  }
  function of(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function () {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function uf(e, t, l) {
    ((l = l != null ? l.concat([e]) : null), bn(4, 4, of.bind(null, t, e), l));
  }
  function Cc() {}
  function df(e, t) {
    var l = Ie();
    t = t === void 0 ? null : t;
    var i = l.memoizedState;
    return t !== null && vc(t, i[1]) ? i[0] : ((l.memoizedState = [e, t]), e);
  }
  function ff(e, t) {
    var l = Ie();
    t = t === void 0 ? null : t;
    var i = l.memoizedState;
    if (t !== null && vc(t, i[1])) return i[0];
    if (((i = e()), Al)) {
      Nt(!0);
      try {
        e();
      } finally {
        Nt(!1);
      }
    }
    return ((l.memoizedState = [i, t]), i);
  }
  function Mc(e, t, l) {
    return l === void 0 || ((Na & 1073741824) !== 0 && (Ce & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = l), (e = hh()), (Se.lanes |= e), (el |= e), l);
  }
  function hf(e, t, l, i) {
    return Rt(l, t)
      ? l
      : ns.current !== null
        ? ((e = Mc(e, l, i)), Rt(e, t) || (lt = !0), e)
        : (Na & 42) === 0 || ((Na & 1073741824) !== 0 && (Ce & 261930) === 0)
          ? ((lt = !0), (e.memoizedState = l))
          : ((e = hh()), (Se.lanes |= e), (el |= e), t);
  }
  function mf(e, t, l, i, o) {
    var u = X.p;
    X.p = u !== 0 && 8 > u ? u : 8;
    var v = U.T,
      y = {};
    ((U.T = y), zc(e, !1, t, l));
    try {
      var C = o(),
        V = U.S;
      if (
        (V !== null && V(y, C),
        C !== null && typeof C == "object" && typeof C.then == "function")
      ) {
        var P = rg(C, i);
        ai(e, t, P, qt(e));
      } else ai(e, t, i, qt(e));
    } catch (I) {
      ai(e, t, { then: function () {}, status: "rejected", reason: I }, qt());
    } finally {
      ((X.p = u),
        v !== null && y.types !== null && (v.types = y.types),
        (U.T = v));
    }
  }
  function hg() {}
  function Oc(e, t, l, i) {
    if (e.tag !== 5) throw Error(n(476));
    var o = pf(e).queue;
    mf(
      e,
      o,
      t,
      Q,
      l === null
        ? hg
        : function () {
            return (vf(e), l(i));
          },
    );
  }
  function pf(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Q,
      baseState: Q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wa,
        lastRenderedState: Q,
      },
      next: null,
    };
    var l = {};
    return (
      (t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: wa,
          lastRenderedState: l,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function vf(e) {
    var t = pf(e);
    (t.next === null && (t = e.alternate.memoizedState),
      ai(e, t.next.queue, {}, qt()));
  }
  function Ac() {
    return vt(ji);
  }
  function gf() {
    return Ie().memoizedState;
  }
  function xf() {
    return Ie().memoizedState;
  }
  function mg(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = qt();
          e = Fa(l);
          var i = $a(t, e, l);
          (i !== null && (Dt(i, t, l), Ps(i, t, l)),
            (t = { cache: ic() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function pg(e, t, l) {
    var i = qt();
    ((l = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Sn(e)
        ? yf(t, l)
        : ((l = Fr(e, t, l, i)), l !== null && (Dt(l, e, i), bf(l, t, i))));
  }
  function jf(e, t, l) {
    var i = qt();
    ai(e, t, l, i);
  }
  function ai(e, t, l, i) {
    var o = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Sn(e)) yf(t, o);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var v = t.lastRenderedState,
            y = u(v, l);
          if (((o.hasEagerState = !0), (o.eagerState = y), Rt(y, v)))
            return (tn(e, t, o, 0), Ue === null && en(), !1);
        } catch {}
      if (((l = Fr(e, t, o, i)), l !== null))
        return (Dt(l, e, i), bf(l, t, i), !0);
    }
    return !1;
  }
  function zc(e, t, l, i) {
    if (
      ((i = {
        lane: 2,
        revertLane: oo(),
        gesture: null,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Sn(e))
    ) {
      if (t) throw Error(n(479));
    } else ((t = Fr(e, l, i, 2)), t !== null && Dt(t, e, 2));
  }
  function Sn(e) {
    var t = e.alternate;
    return e === Se || (t !== null && t === Se);
  }
  function yf(e, t) {
    rs = pn = !0;
    var l = e.pending;
    (l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (e.pending = t));
  }
  function bf(e, t, l) {
    if ((l & 4194048) !== 0) {
      var i = t.lanes;
      ((i &= e.pendingLanes), (l |= i), (t.lanes = l), Tu(e, l));
    }
  }
  var li = {
    readContext: vt,
    use: xn,
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
    useCacheRefresh: Ke,
  };
  li.useEffectEvent = Ke;
  var Sf = {
      readContext: vt,
      use: xn,
      useCallback: function (e, t) {
        return ((wt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: vt,
      useEffect: sf,
      useImperativeHandle: function (e, t, l) {
        ((l = l != null ? l.concat([e]) : null),
          yn(4194308, 4, of.bind(null, t, e), l));
      },
      useLayoutEffect: function (e, t) {
        return yn(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        yn(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var l = wt();
        t = t === void 0 ? null : t;
        var i = e();
        if (Al) {
          Nt(!0);
          try {
            e();
          } finally {
            Nt(!1);
          }
        }
        return ((l.memoizedState = [i, t]), i);
      },
      useReducer: function (e, t, l) {
        var i = wt();
        if (l !== void 0) {
          var o = l(t);
          if (Al) {
            Nt(!0);
            try {
              l(t);
            } finally {
              Nt(!1);
            }
          }
        } else o = t;
        return (
          (i.memoizedState = i.baseState = o),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: o,
          }),
          (i.queue = e),
          (e = e.dispatch = pg.bind(null, Se, e)),
          [i.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = wt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = wc(e);
        var t = e.queue,
          l = jf.bind(null, Se, t);
        return ((t.dispatch = l), [e.memoizedState, l]);
      },
      useDebugValue: Cc,
      useDeferredValue: function (e, t) {
        var l = wt();
        return Mc(l, e, t);
      },
      useTransition: function () {
        var e = wc(!1);
        return (
          (e = mf.bind(null, Se, e.queue, !0, !1)),
          (wt().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, l) {
        var i = Se,
          o = wt();
        if (Oe) {
          if (l === void 0) throw Error(n(407));
          l = l();
        } else {
          if (((l = t()), Ue === null)) throw Error(n(349));
          (Ce & 127) !== 0 || Yd(i, t, l);
        }
        o.memoizedState = l;
        var u = { value: l, getSnapshot: t };
        return (
          (o.queue = u),
          sf(Xd.bind(null, i, u, e), [e]),
          (i.flags |= 2048),
          os(9, { destroy: void 0 }, kd.bind(null, i, u, l, t), null),
          l
        );
      },
      useId: function () {
        var e = wt(),
          t = Ue.identifierPrefix;
        if (Oe) {
          var l = ua,
            i = oa;
          ((l = (i & ~(1 << (32 - ht(i) - 1))).toString(32) + l),
            (t = "_" + t + "R_" + l),
            (l = vn++),
            0 < l && (t += "H" + l.toString(32)),
            (t += "_"));
        } else ((l = cg++), (t = "_" + t + "r_" + l.toString(32) + "_"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Ac,
      useFormState: Id,
      useActionState: Id,
      useOptimistic: function (e) {
        var t = wt();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = l),
          (t = zc.bind(null, Se, !0, l)),
          (l.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: bc,
      useCacheRefresh: function () {
        return (wt().memoizedState = mg.bind(null, Se));
      },
      useEffectEvent: function (e) {
        var t = wt(),
          l = { impl: e };
        return (
          (t.memoizedState = l),
          function () {
            if ((De & 2) !== 0) throw Error(n(440));
            return l.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Dc = {
      readContext: vt,
      use: xn,
      useCallback: df,
      useContext: vt,
      useEffect: Ec,
      useImperativeHandle: uf,
      useInsertionEffect: rf,
      useLayoutEffect: cf,
      useMemo: ff,
      useReducer: jn,
      useRef: lf,
      useState: function () {
        return jn(wa);
      },
      useDebugValue: Cc,
      useDeferredValue: function (e, t) {
        var l = Ie();
        return hf(l, Le.memoizedState, e, t);
      },
      useTransition: function () {
        var e = jn(wa)[0],
          t = Ie().memoizedState;
        return [typeof e == "boolean" ? e : ti(e), t];
      },
      useSyncExternalStore: Vd,
      useId: gf,
      useHostTransitionStatus: Ac,
      useFormState: ef,
      useActionState: ef,
      useOptimistic: function (e, t) {
        var l = Ie();
        return Jd(l, Le, e, t);
      },
      useMemoCache: bc,
      useCacheRefresh: xf,
    };
  Dc.useEffectEvent = nf;
  var Nf = {
    readContext: vt,
    use: xn,
    useCallback: df,
    useContext: vt,
    useEffect: Ec,
    useImperativeHandle: uf,
    useInsertionEffect: rf,
    useLayoutEffect: cf,
    useMemo: ff,
    useReducer: Nc,
    useRef: lf,
    useState: function () {
      return Nc(wa);
    },
    useDebugValue: Cc,
    useDeferredValue: function (e, t) {
      var l = Ie();
      return Le === null ? Mc(l, e, t) : hf(l, Le.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Nc(wa)[0],
        t = Ie().memoizedState;
      return [typeof e == "boolean" ? e : ti(e), t];
    },
    useSyncExternalStore: Vd,
    useId: gf,
    useHostTransitionStatus: Ac,
    useFormState: af,
    useActionState: af,
    useOptimistic: function (e, t) {
      var l = Ie();
      return Le !== null
        ? Jd(l, Le, e, t)
        : ((l.baseState = e), [e, l.queue.dispatch]);
    },
    useMemoCache: bc,
    useCacheRefresh: xf,
  };
  Nf.useEffectEvent = nf;
  function _c(e, t, l, i) {
    ((t = e.memoizedState),
      (l = l(i, t)),
      (l = l == null ? t : g({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l));
  }
  var Rc = {
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var i = qt(),
        o = Fa(i);
      ((o.payload = t),
        l != null && (o.callback = l),
        (t = $a(e, o, i)),
        t !== null && (Dt(t, e, i), Ps(t, e, i)));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var i = qt(),
        o = Fa(i);
      ((o.tag = 1),
        (o.payload = t),
        l != null && (o.callback = l),
        (t = $a(e, o, i)),
        t !== null && (Dt(t, e, i), Ps(t, e, i)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = qt(),
        i = Fa(l);
      ((i.tag = 2),
        t != null && (i.callback = t),
        (t = $a(e, i, l)),
        t !== null && (Dt(t, e, l), Ps(t, e, l)));
    },
  };
  function wf(e, t, l, i, o, u, v) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(i, u, v)
        : t.prototype && t.prototype.isPureReactComponent
          ? !ks(l, i) || !ks(o, u)
          : !0
    );
  }
  function Tf(e, t, l, i) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(l, i),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(l, i),
      t.state !== e && Rc.enqueueReplaceState(t, t.state, null));
  }
  function zl(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var i in t) i !== "ref" && (l[i] = t[i]);
    }
    if ((e = e.defaultProps)) {
      l === t && (l = g({}, l));
      for (var o in e) l[o] === void 0 && (l[o] = e[o]);
    }
    return l;
  }
  function Ef(e) {
    Ii(e);
  }
  function Cf(e) {
    console.error(e);
  }
  function Mf(e) {
    Ii(e);
  }
  function Nn(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function Of(e, t, l) {
    try {
      var i = e.onCaughtError;
      i(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  function Lc(e, t, l) {
    return (
      (l = Fa(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Nn(e, t);
      }),
      l
    );
  }
  function Af(e) {
    return ((e = Fa(e)), (e.tag = 3), e);
  }
  function zf(e, t, l, i) {
    var o = l.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var u = i.value;
      ((e.payload = function () {
        return o(u);
      }),
        (e.callback = function () {
          Of(t, l, i);
        }));
    }
    var v = l.stateNode;
    v !== null &&
      typeof v.componentDidCatch == "function" &&
      (e.callback = function () {
        (Of(t, l, i),
          typeof o != "function" &&
            (tl === null ? (tl = new Set([this])) : tl.add(this)));
        var y = i.stack;
        this.componentDidCatch(i.value, {
          componentStack: y !== null ? y : "",
        });
      });
  }
  function vg(e, t, l, i, o) {
    if (
      ((l.flags |= 32768),
      i !== null && typeof i == "object" && typeof i.then == "function")
    ) {
      if (
        ((t = l.alternate),
        t !== null && ts(t, l, o, !0),
        (l = Bt.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              Pt === null ? Ln() : l.alternate === null && Pe === 0 && (Pe = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = o),
              i === un
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null ? (l.updateQueue = new Set([i])) : t.add(i),
                  no(e, i, o)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              i === un
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([i]),
                      }),
                      (l.updateQueue = t))
                    : ((l = t.retryQueue),
                      l === null ? (t.retryQueue = new Set([i])) : l.add(i)),
                  no(e, i, o)),
              !1
            );
        }
        throw Error(n(435, l.tag));
      }
      return (no(e, i, o), Ln(), !1);
    }
    if (Oe)
      return (
        (t = Bt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = o),
            i !== ec && ((e = Error(n(422), { cause: i })), Zs(Jt(e, l))))
          : (i !== ec && ((t = Error(n(423), { cause: i })), Zs(Jt(t, l))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (o &= -o),
            (e.lanes |= o),
            (i = Jt(i, l)),
            (o = Lc(e.stateNode, i, o)),
            dc(e, o),
            Pe !== 4 && (Pe = 2)),
        !1
      );
    var u = Error(n(520), { cause: i });
    if (
      ((u = Jt(u, l)),
      di === null ? (di = [u]) : di.push(u),
      Pe !== 4 && (Pe = 2),
      t === null)
    )
      return !0;
    ((i = Jt(i, l)), (l = t));
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = o & -o),
            (l.lanes |= e),
            (e = Lc(l.stateNode, i, e)),
            dc(l, e),
            !1
          );
        case 1:
          if (
            ((t = l.type),
            (u = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (tl === null || !tl.has(u)))))
          )
            return (
              (l.flags |= 65536),
              (o &= -o),
              (l.lanes |= o),
              (o = Af(o)),
              zf(o, e, l, i),
              dc(l, o),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Bc = Error(n(461)),
    lt = !1;
  function gt(e, t, l, i) {
    t.child = e === null ? Rd(t, null, l, i) : Ol(t, e.child, l, i);
  }
  function Df(e, t, l, i, o) {
    l = l.render;
    var u = t.ref;
    if ("ref" in i) {
      var v = {};
      for (var y in i) y !== "ref" && (v[y] = i[y]);
    } else v = i;
    return (
      Tl(t),
      (i = gc(e, t, l, v, u, o)),
      (y = xc()),
      e !== null && !lt
        ? (jc(e, t, o), Ta(e, t, o))
        : (Oe && y && Wr(t), (t.flags |= 1), gt(e, t, i, o), t.child)
    );
  }
  function _f(e, t, l, i, o) {
    if (e === null) {
      var u = l.type;
      return typeof u == "function" &&
        !$r(u) &&
        u.defaultProps === void 0 &&
        l.compare === null
        ? ((t.tag = 15), (t.type = u), Rf(e, t, u, i, o))
        : ((e = ln(l.type, null, i, t, t.mode, o)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((u = e.child), !Xc(e, o))) {
      var v = u.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : ks), l(v, i) && e.ref === t.ref)
      )
        return Ta(e, t, o);
    }
    return (
      (t.flags |= 1),
      (e = ja(u, i)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Rf(e, t, l, i, o) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (ks(u, i) && e.ref === t.ref)
        if (((lt = !1), (t.pendingProps = i = u), Xc(e, o)))
          (e.flags & 131072) !== 0 && (lt = !0);
        else return ((t.lanes = e.lanes), Ta(e, t, o));
    }
    return Hc(e, t, l, i, o);
  }
  function Lf(e, t, l, i) {
    var o = i.children,
      u = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      i.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | l : l), e !== null)) {
          for (i = t.child = e.child, o = 0; i !== null; )
            ((o = o | i.lanes | i.childLanes), (i = i.sibling));
          i = o & ~u;
        } else ((i = 0), (t.child = null));
        return Bf(e, t, u, l, i);
      }
      if ((l & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && cn(t, u !== null ? u.cachePool : null),
          u !== null ? Hd(t, u) : hc(),
          Ud(t));
      else
        return (
          (i = t.lanes = 536870912),
          Bf(e, t, u !== null ? u.baseLanes | l : l, l, i)
        );
    } else
      u !== null
        ? (cn(t, u.cachePool), Hd(t, u), Pa(), (t.memoizedState = null))
        : (e !== null && cn(t, null), hc(), Pa());
    return (gt(e, t, o, l), t.child);
  }
  function si(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function Bf(e, t, l, i, o) {
    var u = rc();
    return (
      (u = u === null ? null : { parent: tt._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: l, cachePool: u }),
      e !== null && cn(t, null),
      hc(),
      Ud(t),
      e !== null && ts(e, t, i, !0),
      (t.childLanes = o),
      null
    );
  }
  function wn(e, t) {
    return (
      (t = En({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Hf(e, t, l) {
    return (
      Ol(t, e.child, null, l),
      (e = wn(t, t.pendingProps)),
      (e.flags |= 2),
      Ht(t),
      (t.memoizedState = null),
      e
    );
  }
  function gg(e, t, l) {
    var i = t.pendingProps,
      o = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Oe) {
        if (i.mode === "hidden")
          return ((e = wn(t, i)), (t.lanes = 536870912), si(null, e));
        if (
          (pc(t),
          (e = Ve)
            ? ((e = $h(e, Kt)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: ka !== null ? { id: oa, overflow: ua } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = jd(e)),
                (l.return = t),
                (t.child = l),
                (pt = t),
                (Ve = null)))
            : (e = null),
          e === null)
        )
          throw Qa(t);
        return ((t.lanes = 536870912), null);
      }
      return wn(t, i);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var v = u.dehydrated;
      if ((pc(t), o))
        if (t.flags & 256) ((t.flags &= -257), (t = Hf(e, t, l)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(n(558));
      else if (
        (lt || ts(e, t, l, !1), (o = (l & e.childLanes) !== 0), lt || o)
      ) {
        if (
          ((i = Ue),
          i !== null && ((v = Eu(i, l)), v !== 0 && v !== u.retryLane))
        )
          throw ((u.retryLane = v), bl(e, v), Dt(i, e, v), Bc);
        (Ln(), (t = Hf(e, t, l)));
      } else
        ((e = u.treeContext),
          (Ve = Wt(v.nextSibling)),
          (pt = t),
          (Oe = !0),
          (Xa = null),
          (Kt = !1),
          e !== null && Sd(t, e),
          (t = wn(t, i)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = ja(e.child, { mode: i.mode, children: i.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Tn(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(n(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function Hc(e, t, l, i, o) {
    return (
      Tl(t),
      (l = gc(e, t, l, i, void 0, o)),
      (i = xc()),
      e !== null && !lt
        ? (jc(e, t, o), Ta(e, t, o))
        : (Oe && i && Wr(t), (t.flags |= 1), gt(e, t, l, o), t.child)
    );
  }
  function Uf(e, t, l, i, o, u) {
    return (
      Tl(t),
      (t.updateQueue = null),
      (l = qd(t, i, l, o)),
      Gd(e),
      (i = xc()),
      e !== null && !lt
        ? (jc(e, t, u), Ta(e, t, u))
        : (Oe && i && Wr(t), (t.flags |= 1), gt(e, t, l, u), t.child)
    );
  }
  function Gf(e, t, l, i, o) {
    if ((Tl(t), t.stateNode === null)) {
      var u = Pl,
        v = l.contextType;
      (typeof v == "object" && v !== null && (u = vt(v)),
        (u = new l(i, u)),
        (t.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Rc),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = i),
        (u.state = t.memoizedState),
        (u.refs = {}),
        oc(t),
        (v = l.contextType),
        (u.context = typeof v == "object" && v !== null ? vt(v) : Pl),
        (u.state = t.memoizedState),
        (v = l.getDerivedStateFromProps),
        typeof v == "function" && (_c(t, l, v, i), (u.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((v = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          v !== u.state && Rc.enqueueReplaceState(u, u.state, null),
          Is(t, i, u, o),
          Ws(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == "function" && (t.flags |= 4194308),
        (i = !0));
    } else if (e === null) {
      u = t.stateNode;
      var y = t.memoizedProps,
        C = zl(l, y);
      u.props = C;
      var V = u.context,
        P = l.contextType;
      ((v = Pl), typeof P == "object" && P !== null && (v = vt(P)));
      var I = l.getDerivedStateFromProps;
      ((P =
        typeof I == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (y = t.pendingProps !== y),
        P ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((y || V !== v) && Tf(t, u, i, v)),
        (Ja = !1));
      var k = t.memoizedState;
      ((u.state = k),
        Is(t, i, u, o),
        Ws(),
        (V = t.memoizedState),
        y || k !== V || Ja
          ? (typeof I == "function" && (_c(t, l, I, i), (V = t.memoizedState)),
            (C = Ja || wf(t, l, C, i, k, V, v))
              ? (P ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = i),
                (t.memoizedState = V)),
            (u.props = i),
            (u.state = V),
            (u.context = v),
            (i = C))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (i = !1)));
    } else {
      ((u = t.stateNode),
        uc(e, t),
        (v = t.memoizedProps),
        (P = zl(l, v)),
        (u.props = P),
        (I = t.pendingProps),
        (k = u.context),
        (V = l.contextType),
        (C = Pl),
        typeof V == "object" && V !== null && (C = vt(V)),
        (y = l.getDerivedStateFromProps),
        (V =
          typeof y == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((v !== I || k !== C) && Tf(t, u, i, C)),
        (Ja = !1),
        (k = t.memoizedState),
        (u.state = k),
        Is(t, i, u, o),
        Ws());
      var Z = t.memoizedState;
      v !== I ||
      k !== Z ||
      Ja ||
      (e !== null && e.dependencies !== null && nn(e.dependencies))
        ? (typeof y == "function" && (_c(t, l, y, i), (Z = t.memoizedState)),
          (P =
            Ja ||
            wf(t, l, P, i, k, Z, C) ||
            (e !== null && e.dependencies !== null && nn(e.dependencies)))
            ? (V ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(i, Z, C),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(i, Z, C)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (v === e.memoizedProps && k === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (v === e.memoizedProps && k === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = i),
              (t.memoizedState = Z)),
          (u.props = i),
          (u.state = Z),
          (u.context = C),
          (i = P))
        : (typeof u.componentDidUpdate != "function" ||
            (v === e.memoizedProps && k === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (v === e.memoizedProps && k === e.memoizedState) ||
            (t.flags |= 1024),
          (i = !1));
    }
    return (
      (u = i),
      Tn(e, t),
      (i = (t.flags & 128) !== 0),
      u || i
        ? ((u = t.stateNode),
          (l =
            i && typeof l.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (t.flags |= 1),
          e !== null && i
            ? ((t.child = Ol(t, e.child, null, o)),
              (t.child = Ol(t, null, l, o)))
            : gt(e, t, l, o),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = Ta(e, t, o)),
      e
    );
  }
  function qf(e, t, l, i) {
    return (Nl(), (t.flags |= 256), gt(e, t, l, i), t.child);
  }
  var Uc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Gc(e) {
    return { baseLanes: e, cachePool: Md() };
  }
  function qc(e, t, l) {
    return ((e = e !== null ? e.childLanes & ~l : 0), t && (e |= Gt), e);
  }
  function Vf(e, t, l) {
    var i = t.pendingProps,
      o = !1,
      u = (t.flags & 128) !== 0,
      v;
    if (
      ((v = u) ||
        (v =
          e !== null && e.memoizedState === null ? !1 : (We.current & 2) !== 0),
      v && ((o = !0), (t.flags &= -129)),
      (v = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Oe) {
        if (
          (o ? Ka(t) : Pa(),
          (e = Ve)
            ? ((e = $h(e, Kt)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: ka !== null ? { id: oa, overflow: ua } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = jd(e)),
                (l.return = t),
                (t.child = l),
                (pt = t),
                (Ve = null)))
            : (e = null),
          e === null)
        )
          throw Qa(t);
        return (No(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var y = i.children;
      return (
        (i = i.fallback),
        o
          ? (Pa(),
            (o = t.mode),
            (y = En({ mode: "hidden", children: y }, o)),
            (i = Sl(i, o, l, null)),
            (y.return = t),
            (i.return = t),
            (y.sibling = i),
            (t.child = y),
            (i = t.child),
            (i.memoizedState = Gc(l)),
            (i.childLanes = qc(e, v, l)),
            (t.memoizedState = Uc),
            si(null, i))
          : (Ka(t), Vc(t, y))
      );
    }
    var C = e.memoizedState;
    if (C !== null && ((y = C.dehydrated), y !== null)) {
      if (u)
        t.flags & 256
          ? (Ka(t), (t.flags &= -257), (t = Yc(e, t, l)))
          : t.memoizedState !== null
            ? (Pa(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (Pa(),
              (y = i.fallback),
              (o = t.mode),
              (i = En({ mode: "visible", children: i.children }, o)),
              (y = Sl(y, o, l, null)),
              (y.flags |= 2),
              (i.return = t),
              (y.return = t),
              (i.sibling = y),
              (t.child = i),
              Ol(t, e.child, null, l),
              (i = t.child),
              (i.memoizedState = Gc(l)),
              (i.childLanes = qc(e, v, l)),
              (t.memoizedState = Uc),
              (t = si(null, i)));
      else if ((Ka(t), No(y))) {
        if (((v = y.nextSibling && y.nextSibling.dataset), v)) var V = v.dgst;
        ((v = V),
          (i = Error(n(419))),
          (i.stack = ""),
          (i.digest = v),
          Zs({ value: i, source: null, stack: null }),
          (t = Yc(e, t, l)));
      } else if (
        (lt || ts(e, t, l, !1), (v = (l & e.childLanes) !== 0), lt || v)
      ) {
        if (
          ((v = Ue),
          v !== null && ((i = Eu(v, l)), i !== 0 && i !== C.retryLane))
        )
          throw ((C.retryLane = i), bl(e, i), Dt(v, e, i), Bc);
        (So(y) || Ln(), (t = Yc(e, t, l)));
      } else
        So(y)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = C.treeContext),
            (Ve = Wt(y.nextSibling)),
            (pt = t),
            (Oe = !0),
            (Xa = null),
            (Kt = !1),
            e !== null && Sd(t, e),
            (t = Vc(t, i.children)),
            (t.flags |= 4096));
      return t;
    }
    return o
      ? (Pa(),
        (y = i.fallback),
        (o = t.mode),
        (C = e.child),
        (V = C.sibling),
        (i = ja(C, { mode: "hidden", children: i.children })),
        (i.subtreeFlags = C.subtreeFlags & 65011712),
        V !== null ? (y = ja(V, y)) : ((y = Sl(y, o, l, null)), (y.flags |= 2)),
        (y.return = t),
        (i.return = t),
        (i.sibling = y),
        (t.child = i),
        si(null, i),
        (i = t.child),
        (y = e.child.memoizedState),
        y === null
          ? (y = Gc(l))
          : ((o = y.cachePool),
            o !== null
              ? ((C = tt._currentValue),
                (o = o.parent !== C ? { parent: C, pool: C } : o))
              : (o = Md()),
            (y = { baseLanes: y.baseLanes | l, cachePool: o })),
        (i.memoizedState = y),
        (i.childLanes = qc(e, v, l)),
        (t.memoizedState = Uc),
        si(e.child, i))
      : (Ka(t),
        (l = e.child),
        (e = l.sibling),
        (l = ja(l, { mode: "visible", children: i.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null &&
          ((v = t.deletions),
          v === null ? ((t.deletions = [e]), (t.flags |= 16)) : v.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l);
  }
  function Vc(e, t) {
    return (
      (t = En({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function En(e, t) {
    return ((e = Lt(22, e, null, t)), (e.lanes = 0), e);
  }
  function Yc(e, t, l) {
    return (
      Ol(t, e.child, null, l),
      (e = Vc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Yf(e, t, l) {
    e.lanes |= t;
    var i = e.alternate;
    (i !== null && (i.lanes |= t), lc(e.return, t, l));
  }
  function kc(e, t, l, i, o, u) {
    var v = e.memoizedState;
    v === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: l,
          tailMode: o,
          treeForkCount: u,
        })
      : ((v.isBackwards = t),
        (v.rendering = null),
        (v.renderingStartTime = 0),
        (v.last = i),
        (v.tail = l),
        (v.tailMode = o),
        (v.treeForkCount = u));
  }
  function kf(e, t, l) {
    var i = t.pendingProps,
      o = i.revealOrder,
      u = i.tail;
    i = i.children;
    var v = We.current,
      y = (v & 2) !== 0;
    if (
      (y ? ((v = (v & 1) | 2), (t.flags |= 128)) : (v &= 1),
      le(We, v),
      gt(e, t, i, l),
      (i = Oe ? Qs : 0),
      !y && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Yf(e, l, t);
        else if (e.tag === 19) Yf(e, l, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (o) {
      case "forwards":
        for (l = t.child, o = null; l !== null; )
          ((e = l.alternate),
            e !== null && mn(e) === null && (o = l),
            (l = l.sibling));
        ((l = o),
          l === null
            ? ((o = t.child), (t.child = null))
            : ((o = l.sibling), (l.sibling = null)),
          kc(t, !1, o, l, u, i));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && mn(e) === null)) {
            t.child = o;
            break;
          }
          ((e = o.sibling), (o.sibling = l), (l = o), (o = e));
        }
        kc(t, !0, l, null, u, i);
        break;
      case "together":
        kc(t, !1, null, null, void 0, i);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Ta(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (el |= t.lanes),
      (l & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((ts(e, t, l, !1), (l & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(n(153));
    if (t.child !== null) {
      for (
        e = t.child, l = ja(e, e.pendingProps), t.child = l, l.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (l = l.sibling = ja(e, e.pendingProps)),
          (l.return = t));
      l.sibling = null;
    }
    return t.child;
  }
  function Xc(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && nn(e)));
  }
  function xg(e, t, l) {
    switch (t.tag) {
      case 3:
        (je(t, t.stateNode.containerInfo),
          Za(t, tt, e.memoizedState.cache),
          Nl());
        break;
      case 27:
      case 5:
        Je(t);
        break;
      case 4:
        je(t, t.stateNode.containerInfo);
        break;
      case 10:
        Za(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), pc(t), null);
        break;
      case 13:
        var i = t.memoizedState;
        if (i !== null)
          return i.dehydrated !== null
            ? (Ka(t), (t.flags |= 128), null)
            : (l & t.child.childLanes) !== 0
              ? Vf(e, t, l)
              : (Ka(t), (e = Ta(e, t, l)), e !== null ? e.sibling : null);
        Ka(t);
        break;
      case 19:
        var o = (e.flags & 128) !== 0;
        if (
          ((i = (l & t.childLanes) !== 0),
          i || (ts(e, t, l, !1), (i = (l & t.childLanes) !== 0)),
          o)
        ) {
          if (i) return kf(e, t, l);
          t.flags |= 128;
        }
        if (
          ((o = t.memoizedState),
          o !== null &&
            ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
          le(We, We.current),
          i)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Lf(e, t, l, t.pendingProps));
      case 24:
        Za(t, tt, e.memoizedState.cache);
    }
    return Ta(e, t, l);
  }
  function Xf(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) lt = !0;
      else {
        if (!Xc(e, l) && (t.flags & 128) === 0) return ((lt = !1), xg(e, t, l));
        lt = (e.flags & 131072) !== 0;
      }
    else ((lt = !1), Oe && (t.flags & 1048576) !== 0 && bd(t, Qs, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var i = t.pendingProps;
          if (((e = Cl(t.elementType)), (t.type = e), typeof e == "function"))
            $r(e)
              ? ((i = zl(e, i)), (t.tag = 1), (t = Gf(null, t, e, i, l)))
              : ((t.tag = 0), (t = Hc(null, t, e, i, l)));
          else {
            if (e != null) {
              var o = e.$$typeof;
              if (o === J) {
                ((t.tag = 11), (t = Df(null, t, e, i, l)));
                break e;
              } else if (o === K) {
                ((t.tag = 14), (t = _f(null, t, e, i, l)));
                break e;
              }
            }
            throw ((t = te(e) || e), Error(n(306, t, "")));
          }
        }
        return t;
      case 0:
        return Hc(e, t, t.type, t.pendingProps, l);
      case 1:
        return ((i = t.type), (o = zl(i, t.pendingProps)), Gf(e, t, i, o, l));
      case 3:
        e: {
          if ((je(t, t.stateNode.containerInfo), e === null))
            throw Error(n(387));
          i = t.pendingProps;
          var u = t.memoizedState;
          ((o = u.element), uc(e, t), Is(t, i, null, l));
          var v = t.memoizedState;
          if (
            ((i = v.cache),
            Za(t, tt, i),
            i !== u.cache && sc(t, [tt], l, !0),
            Ws(),
            (i = v.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: i, isDehydrated: !1, cache: v.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = qf(e, t, i, l);
              break e;
            } else if (i !== o) {
              ((o = Jt(Error(n(424)), t)), Zs(o), (t = qf(e, t, i, l)));
              break e;
            } else
              for (
                e = t.stateNode.containerInfo,
                  e.nodeType === 9
                    ? (e = e.body)
                    : (e = e.nodeName === "HTML" ? e.ownerDocument.body : e),
                  Ve = Wt(e.firstChild),
                  pt = t,
                  Oe = !0,
                  Xa = null,
                  Kt = !0,
                  l = Rd(t, null, i, l),
                  t.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
          else {
            if ((Nl(), i === o)) {
              t = Ta(e, t, l);
              break e;
            }
            gt(e, t, i, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Tn(e, t),
          e === null
            ? (l = tm(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = l)
              : Oe ||
                ((l = t.type),
                (e = t.pendingProps),
                (i = Yn(oe.current).createElement(l)),
                (i[mt] = t),
                (i[Et] = e),
                xt(i, l, e),
                ct(i),
                (t.stateNode = i))
            : (t.memoizedState = tm(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Je(t),
          e === null &&
            Oe &&
            ((i = t.stateNode = Wh(t.type, t.pendingProps, oe.current)),
            (pt = t),
            (Kt = !0),
            (o = Ve),
            il(t.type) ? ((wo = o), (Ve = Wt(i.firstChild))) : (Ve = o)),
          gt(e, t, t.pendingProps.children, l),
          Tn(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Oe &&
            ((o = i = Ve) &&
              ((i = Fg(i, t.type, t.pendingProps, Kt)),
              i !== null
                ? ((t.stateNode = i),
                  (pt = t),
                  (Ve = Wt(i.firstChild)),
                  (Kt = !1),
                  (o = !0))
                : (o = !1)),
            o || Qa(t)),
          Je(t),
          (o = t.type),
          (u = t.pendingProps),
          (v = e !== null ? e.memoizedProps : null),
          (i = u.children),
          jo(o, u) ? (i = null) : v !== null && jo(o, v) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((o = gc(e, t, og, null, null, l)), (ji._currentValue = o)),
          Tn(e, t),
          gt(e, t, i, l),
          t.child
        );
      case 6:
        return (
          e === null &&
            Oe &&
            ((e = l = Ve) &&
              ((l = $g(l, t.pendingProps, Kt)),
              l !== null
                ? ((t.stateNode = l), (pt = t), (Ve = null), (e = !0))
                : (e = !1)),
            e || Qa(t)),
          null
        );
      case 13:
        return Vf(e, t, l);
      case 4:
        return (
          je(t, t.stateNode.containerInfo),
          (i = t.pendingProps),
          e === null ? (t.child = Ol(t, null, i, l)) : gt(e, t, i, l),
          t.child
        );
      case 11:
        return Df(e, t, t.type, t.pendingProps, l);
      case 7:
        return (gt(e, t, t.pendingProps, l), t.child);
      case 8:
        return (gt(e, t, t.pendingProps.children, l), t.child);
      case 12:
        return (gt(e, t, t.pendingProps.children, l), t.child);
      case 10:
        return (
          (i = t.pendingProps),
          Za(t, t.type, i.value),
          gt(e, t, i.children, l),
          t.child
        );
      case 9:
        return (
          (o = t.type._context),
          (i = t.pendingProps.children),
          Tl(t),
          (o = vt(o)),
          (i = i(o)),
          (t.flags |= 1),
          gt(e, t, i, l),
          t.child
        );
      case 14:
        return _f(e, t, t.type, t.pendingProps, l);
      case 15:
        return Rf(e, t, t.type, t.pendingProps, l);
      case 19:
        return kf(e, t, l);
      case 31:
        return gg(e, t, l);
      case 22:
        return Lf(e, t, l, t.pendingProps);
      case 24:
        return (
          Tl(t),
          (i = vt(tt)),
          e === null
            ? ((o = rc()),
              o === null &&
                ((o = Ue),
                (u = ic()),
                (o.pooledCache = u),
                u.refCount++,
                u !== null && (o.pooledCacheLanes |= l),
                (o = u)),
              (t.memoizedState = { parent: i, cache: o }),
              oc(t),
              Za(t, tt, o))
            : ((e.lanes & l) !== 0 && (uc(e, t), Is(t, null, null, l), Ws()),
              (o = e.memoizedState),
              (u = t.memoizedState),
              o.parent !== i
                ? ((o = { parent: i, cache: i }),
                  (t.memoizedState = o),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = o),
                  Za(t, tt, i))
                : ((i = u.cache),
                  Za(t, tt, i),
                  i !== o.cache && sc(t, [tt], l, !0))),
          gt(e, t, t.pendingProps.children, l),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(n(156, t.tag));
  }
  function Ea(e) {
    e.flags |= 4;
  }
  function Qc(e, t, l, i, o) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (o & 335544128) === o))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (gh()) e.flags |= 8192;
        else throw ((Ml = un), cc);
    } else e.flags &= -16777217;
  }
  function Qf(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !nm(t)))
      if (gh()) e.flags |= 8192;
      else throw ((Ml = un), cc);
  }
  function Cn(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? Nu() : 536870912), (e.lanes |= t), (hs |= t)));
  }
  function ii(e, t) {
    if (!Oe)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; )
            (t.alternate !== null && (l = t), (t = t.sibling));
          l === null ? (e.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = e.tail;
          for (var i = null; l !== null; )
            (l.alternate !== null && (i = l), (l = l.sibling));
          i === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (i.sibling = null);
      }
  }
  function Ye(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      i = 0;
    if (t)
      for (var o = e.child; o !== null; )
        ((l |= o.lanes | o.childLanes),
          (i |= o.subtreeFlags & 65011712),
          (i |= o.flags & 65011712),
          (o.return = e),
          (o = o.sibling));
    else
      for (o = e.child; o !== null; )
        ((l |= o.lanes | o.childLanes),
          (i |= o.subtreeFlags),
          (i |= o.flags),
          (o.return = e),
          (o = o.sibling));
    return ((e.subtreeFlags |= i), (e.childLanes = l), t);
  }
  function jg(e, t, l) {
    var i = t.pendingProps;
    switch ((Ir(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Ye(t), null);
      case 1:
        return (Ye(t), null);
      case 3:
        return (
          (l = t.stateNode),
          (i = null),
          e !== null && (i = e.memoizedState.cache),
          t.memoizedState.cache !== i && (t.flags |= 2048),
          Sa(tt),
          xe(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (es(t)
              ? Ea(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), tc())),
          Ye(t),
          null
        );
      case 26:
        var o = t.type,
          u = t.memoizedState;
        return (
          e === null
            ? (Ea(t),
              u !== null ? (Ye(t), Qf(t, u)) : (Ye(t), Qc(t, o, null, i, l)))
            : u
              ? u !== e.memoizedState
                ? (Ea(t), Ye(t), Qf(t, u))
                : (Ye(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== i && Ea(t),
                Ye(t),
                Qc(t, o, e, i, l)),
          null
        );
      case 27:
        if (
          (Fe(t),
          (l = oe.current),
          (o = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== i && Ea(t);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(n(166));
            return (Ye(t), null);
          }
          ((e = se.current),
            es(t) ? Nd(t) : ((e = Wh(o, i, l)), (t.stateNode = e), Ea(t)));
        }
        return (Ye(t), null);
      case 5:
        if ((Fe(t), (o = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== i && Ea(t);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(n(166));
            return (Ye(t), null);
          }
          if (((u = se.current), es(t))) Nd(t);
          else {
            var v = Yn(oe.current);
            switch (u) {
              case 1:
                u = v.createElementNS("http://www.w3.org/2000/svg", o);
                break;
              case 2:
                u = v.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                break;
              default:
                switch (o) {
                  case "svg":
                    u = v.createElementNS("http://www.w3.org/2000/svg", o);
                    break;
                  case "math":
                    u = v.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      o,
                    );
                    break;
                  case "script":
                    ((u = v.createElement("div")),
                      (u.innerHTML = "<script><\/script>"),
                      (u = u.removeChild(u.firstChild)));
                    break;
                  case "select":
                    ((u =
                      typeof i.is == "string"
                        ? v.createElement("select", { is: i.is })
                        : v.createElement("select")),
                      i.multiple
                        ? (u.multiple = !0)
                        : i.size && (u.size = i.size));
                    break;
                  default:
                    u =
                      typeof i.is == "string"
                        ? v.createElement(o, { is: i.is })
                        : v.createElement(o);
                }
            }
            ((u[mt] = t), (u[Et] = i));
            e: for (v = t.child; v !== null; ) {
              if (v.tag === 5 || v.tag === 6) u.appendChild(v.stateNode);
              else if (v.tag !== 4 && v.tag !== 27 && v.child !== null) {
                ((v.child.return = v), (v = v.child));
                continue;
              }
              if (v === t) break e;
              for (; v.sibling === null; ) {
                if (v.return === null || v.return === t) break e;
                v = v.return;
              }
              ((v.sibling.return = v.return), (v = v.sibling));
            }
            t.stateNode = u;
            e: switch ((xt(u, o, i), o)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break e;
              case "img":
                i = !0;
                break e;
              default:
                i = !1;
            }
            i && Ea(t);
          }
        }
        return (
          Ye(t),
          Qc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== i && Ea(t);
        else {
          if (typeof i != "string" && t.stateNode === null) throw Error(n(166));
          if (((e = oe.current), es(t))) {
            if (
              ((e = t.stateNode),
              (l = t.memoizedProps),
              (i = null),
              (o = pt),
              o !== null)
            )
              switch (o.tag) {
                case 27:
                case 5:
                  i = o.memoizedProps;
              }
            ((e[mt] = t),
              (e = !!(
                e.nodeValue === l ||
                (i !== null && i.suppressHydrationWarning === !0) ||
                Vh(e.nodeValue, l)
              )),
              e || Qa(t, !0));
          } else
            ((e = Yn(e).createTextNode(i)), (e[mt] = t), (t.stateNode = e));
        }
        return (Ye(t), null);
      case 31:
        if (((l = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((i = es(t)), l !== null)) {
            if (e === null) {
              if (!i) throw Error(n(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(n(557));
              e[mt] = t;
            } else
              (Nl(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Ye(t), (e = !1));
          } else
            ((l = tc()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = l),
              (e = !0));
          if (!e) return t.flags & 256 ? (Ht(t), t) : (Ht(t), null);
          if ((t.flags & 128) !== 0) throw Error(n(558));
        }
        return (Ye(t), null);
      case 13:
        if (
          ((i = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((o = es(t)), i !== null && i.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(n(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(n(317));
              o[mt] = t;
            } else
              (Nl(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Ye(t), (o = !1));
          } else
            ((o = tc()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = o),
              (o = !0));
          if (!o) return t.flags & 256 ? (Ht(t), t) : (Ht(t), null);
        }
        return (
          Ht(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = l), t)
            : ((l = i !== null),
              (e = e !== null && e.memoizedState !== null),
              l &&
                ((i = t.child),
                (o = null),
                i.alternate !== null &&
                  i.alternate.memoizedState !== null &&
                  i.alternate.memoizedState.cachePool !== null &&
                  (o = i.alternate.memoizedState.cachePool.pool),
                (u = null),
                i.memoizedState !== null &&
                  i.memoizedState.cachePool !== null &&
                  (u = i.memoizedState.cachePool.pool),
                u !== o && (i.flags |= 2048)),
              l !== e && l && (t.child.flags |= 8192),
              Cn(t, t.updateQueue),
              Ye(t),
              null)
        );
      case 4:
        return (xe(), e === null && mo(t.stateNode.containerInfo), Ye(t), null);
      case 10:
        return (Sa(t.type), Ye(t), null);
      case 19:
        if ((F(We), (i = t.memoizedState), i === null)) return (Ye(t), null);
        if (((o = (t.flags & 128) !== 0), (u = i.rendering), u === null))
          if (o) ii(i, !1);
          else {
            if (Pe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = mn(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      ii(i, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      Cn(t, e),
                      t.subtreeFlags = 0,
                      e = l,
                      l = t.child;
                    l !== null;
                  )
                    (xd(l, e), (l = l.sibling));
                  return (
                    le(We, (We.current & 1) | 2),
                    Oe && ya(t, i.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            i.tail !== null &&
              yt() > Dn &&
              ((t.flags |= 128), (o = !0), ii(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!o)
            if (((e = mn(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (o = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Cn(t, e),
                ii(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !u.alternate &&
                  !Oe)
              )
                return (Ye(t), null);
            } else
              2 * yt() - i.renderingStartTime > Dn &&
                l !== 536870912 &&
                ((t.flags |= 128), (o = !0), ii(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((e = i.last),
              e !== null ? (e.sibling = u) : (t.child = u),
              (i.last = u));
        }
        return i.tail !== null
          ? ((e = i.tail),
            (i.rendering = e),
            (i.tail = e.sibling),
            (i.renderingStartTime = yt()),
            (e.sibling = null),
            (l = We.current),
            le(We, o ? (l & 1) | 2 : l & 1),
            Oe && ya(t, i.treeForkCount),
            e)
          : (Ye(t), null);
      case 22:
      case 23:
        return (
          Ht(t),
          mc(),
          (i = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== i && (t.flags |= 8192)
            : i && (t.flags |= 8192),
          i
            ? (l & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Ye(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ye(t),
          (l = t.updateQueue),
          l !== null && Cn(t, l.retryQueue),
          (l = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          (i = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (i = t.memoizedState.cachePool.pool),
          i !== l && (t.flags |= 2048),
          e !== null && F(El),
          null
        );
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          Sa(tt),
          Ye(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(n(156, t.tag));
  }
  function yg(e, t) {
    switch ((Ir(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Sa(tt),
          xe(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Fe(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((Ht(t), t.alternate === null)) throw Error(n(340));
          Nl();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (Ht(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(n(340));
          Nl();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (F(We), null);
      case 4:
        return (xe(), null);
      case 10:
        return (Sa(t.type), null);
      case 22:
      case 23:
        return (
          Ht(t),
          mc(),
          e !== null && F(El),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (Sa(tt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Zf(e, t) {
    switch ((Ir(t), t.tag)) {
      case 3:
        (Sa(tt), xe());
        break;
      case 26:
      case 27:
      case 5:
        Fe(t);
        break;
      case 4:
        xe();
        break;
      case 31:
        t.memoizedState !== null && Ht(t);
        break;
      case 13:
        Ht(t);
        break;
      case 19:
        F(We);
        break;
      case 10:
        Sa(t.type);
        break;
      case 22:
      case 23:
        (Ht(t), mc(), e !== null && F(El));
        break;
      case 24:
        Sa(tt);
    }
  }
  function ni(e, t) {
    try {
      var l = t.updateQueue,
        i = l !== null ? l.lastEffect : null;
      if (i !== null) {
        var o = i.next;
        l = o;
        do {
          if ((l.tag & e) === e) {
            i = void 0;
            var u = l.create,
              v = l.inst;
            ((i = u()), (v.destroy = i));
          }
          l = l.next;
        } while (l !== o);
      }
    } catch (y) {
      Re(t, t.return, y);
    }
  }
  function Wa(e, t, l) {
    try {
      var i = t.updateQueue,
        o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var u = o.next;
        i = u;
        do {
          if ((i.tag & e) === e) {
            var v = i.inst,
              y = v.destroy;
            if (y !== void 0) {
              ((v.destroy = void 0), (o = t));
              var C = l,
                V = y;
              try {
                V();
              } catch (P) {
                Re(o, C, P);
              }
            }
          }
          i = i.next;
        } while (i !== u);
      }
    } catch (P) {
      Re(t, t.return, P);
    }
  }
  function Jf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        Bd(t, l);
      } catch (i) {
        Re(e, e.return, i);
      }
    }
  }
  function Ff(e, t, l) {
    ((l.props = zl(e.type, e.memoizedProps)), (l.state = e.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (i) {
      Re(e, t, i);
    }
  }
  function ri(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var i = e.stateNode;
            break;
          case 30:
            i = e.stateNode;
            break;
          default:
            i = e.stateNode;
        }
        typeof l == "function" ? (e.refCleanup = l(i)) : (l.current = i);
      }
    } catch (o) {
      Re(e, t, o);
    }
  }
  function da(e, t) {
    var l = e.ref,
      i = e.refCleanup;
    if (l !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (o) {
          Re(e, t, o);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          Re(e, t, o);
        }
      else l.current = null;
  }
  function $f(e) {
    var t = e.type,
      l = e.memoizedProps,
      i = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && i.focus();
          break e;
        case "img":
          l.src ? (i.src = l.src) : l.srcSet && (i.srcset = l.srcSet);
      }
    } catch (o) {
      Re(e, e.return, o);
    }
  }
  function Zc(e, t, l) {
    try {
      var i = e.stateNode;
      (Yg(i, e.type, l, t), (i[Et] = t));
    } catch (o) {
      Re(e, e.return, o);
    }
  }
  function Kf(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && il(e.type)) ||
      e.tag === 4
    );
  }
  function Jc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Kf(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && il(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Fc(e, t, l) {
    var i = e.tag;
    if (i === 5 || i === 6)
      ((e = e.stateNode),
        t
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l
            ).insertBefore(e, t)
          : ((t =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l),
            t.appendChild(e),
            (l = l._reactRootContainer),
            l != null || t.onclick !== null || (t.onclick = ga)));
    else if (
      i !== 4 &&
      (i === 27 && il(e.type) && ((l = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (Fc(e, t, l), e = e.sibling; e !== null; )
        (Fc(e, t, l), (e = e.sibling));
  }
  function Mn(e, t, l) {
    var i = e.tag;
    if (i === 5 || i === 6)
      ((e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e));
    else if (
      i !== 4 &&
      (i === 27 && il(e.type) && (l = e.stateNode), (e = e.child), e !== null)
    )
      for (Mn(e, t, l), e = e.sibling; e !== null; )
        (Mn(e, t, l), (e = e.sibling));
  }
  function Pf(e) {
    var t = e.stateNode,
      l = e.memoizedProps;
    try {
      for (var i = e.type, o = t.attributes; o.length; )
        t.removeAttributeNode(o[0]);
      (xt(t, i, l), (t[mt] = e), (t[Et] = l));
    } catch (u) {
      Re(e, e.return, u);
    }
  }
  var Ca = !1,
    st = !1,
    $c = !1,
    Wf = typeof WeakSet == "function" ? WeakSet : Set,
    ot = null;
  function bg(e, t) {
    if (((e = e.containerInfo), (go = $n), (e = od(e)), Yr(e))) {
      if ("selectionStart" in e)
        var l = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          l = ((l = e.ownerDocument) && l.defaultView) || window;
          var i = l.getSelection && l.getSelection();
          if (i && i.rangeCount !== 0) {
            l = i.anchorNode;
            var o = i.anchorOffset,
              u = i.focusNode;
            i = i.focusOffset;
            try {
              (l.nodeType, u.nodeType);
            } catch {
              l = null;
              break e;
            }
            var v = 0,
              y = -1,
              C = -1,
              V = 0,
              P = 0,
              I = e,
              k = null;
            t: for (;;) {
              for (
                var Z;
                I !== l || (o !== 0 && I.nodeType !== 3) || (y = v + o),
                  I !== u || (i !== 0 && I.nodeType !== 3) || (C = v + i),
                  I.nodeType === 3 && (v += I.nodeValue.length),
                  (Z = I.firstChild) !== null;
              )
                ((k = I), (I = Z));
              for (;;) {
                if (I === e) break t;
                if (
                  (k === l && ++V === o && (y = v),
                  k === u && ++P === i && (C = v),
                  (Z = I.nextSibling) !== null)
                )
                  break;
                ((I = k), (k = I.parentNode));
              }
              I = Z;
            }
            l = y === -1 || C === -1 ? null : { start: y, end: C };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      xo = { focusedElem: e, selectionRange: l }, $n = !1, ot = t;
      ot !== null;
    )
      if (
        ((t = ot), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = t), (ot = e));
      else
        for (; ot !== null; ) {
          switch (((t = ot), (u = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (l = 0; l < e.length; l++)
                  ((o = e[l]), (o.ref.impl = o.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                ((e = void 0),
                  (l = t),
                  (o = u.memoizedProps),
                  (u = u.memoizedState),
                  (i = l.stateNode));
                try {
                  var ue = zl(l.type, o);
                  ((e = i.getSnapshotBeforeUpdate(ue, u)),
                    (i.__reactInternalSnapshotBeforeUpdate = e));
                } catch (ge) {
                  Re(l, l.return, ge);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)
                )
                  bo(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      bo(e);
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
              if ((e & 1024) !== 0) throw Error(n(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (ot = e));
            break;
          }
          ot = t.return;
        }
  }
  function If(e, t, l) {
    var i = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (Oa(e, l), i & 4 && ni(5, l));
        break;
      case 1:
        if ((Oa(e, l), i & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (v) {
              Re(l, l.return, v);
            }
          else {
            var o = zl(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(o, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (v) {
              Re(l, l.return, v);
            }
          }
        (i & 64 && Jf(l), i & 512 && ri(l, l.return));
        break;
      case 3:
        if ((Oa(e, l), i & 64 && ((e = l.updateQueue), e !== null))) {
          if (((t = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            Bd(e, t);
          } catch (v) {
            Re(l, l.return, v);
          }
        }
        break;
      case 27:
        t === null && i & 4 && Pf(l);
      case 26:
      case 5:
        (Oa(e, l), t === null && i & 4 && $f(l), i & 512 && ri(l, l.return));
        break;
      case 12:
        Oa(e, l);
        break;
      case 31:
        (Oa(e, l), i & 4 && ah(e, l));
        break;
      case 13:
        (Oa(e, l),
          i & 4 && lh(e, l),
          i & 64 &&
            ((e = l.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((l = Ag.bind(null, l)), Kg(e, l)))));
        break;
      case 22:
        if (((i = l.memoizedState !== null || Ca), !i)) {
          ((t = (t !== null && t.memoizedState !== null) || st), (o = Ca));
          var u = st;
          ((Ca = i),
            (st = t) && !u ? Aa(e, l, (l.subtreeFlags & 8772) !== 0) : Oa(e, l),
            (Ca = o),
            (st = u));
        }
        break;
      case 30:
        break;
      default:
        Oa(e, l);
    }
  }
  function eh(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), eh(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Tr(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var Xe = null,
    Mt = !1;
  function Ma(e, t, l) {
    for (l = l.child; l !== null; ) (th(e, t, l), (l = l.sibling));
  }
  function th(e, t, l) {
    if (qe && typeof qe.onCommitFiberUnmount == "function")
      try {
        qe.onCommitFiberUnmount(it, l);
      } catch {}
    switch (l.tag) {
      case 26:
        (st || da(l, t),
          Ma(e, t, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
        break;
      case 27:
        st || da(l, t);
        var i = Xe,
          o = Mt;
        (il(l.type) && ((Xe = l.stateNode), (Mt = !1)),
          Ma(e, t, l),
          vi(l.stateNode),
          (Xe = i),
          (Mt = o));
        break;
      case 5:
        st || da(l, t);
      case 6:
        if (
          ((i = Xe),
          (o = Mt),
          (Xe = null),
          Ma(e, t, l),
          (Xe = i),
          (Mt = o),
          Xe !== null)
        )
          if (Mt)
            try {
              (Xe.nodeType === 9
                ? Xe.body
                : Xe.nodeName === "HTML"
                  ? Xe.ownerDocument.body
                  : Xe
              ).removeChild(l.stateNode);
            } catch (u) {
              Re(l, t, u);
            }
          else
            try {
              Xe.removeChild(l.stateNode);
            } catch (u) {
              Re(l, t, u);
            }
        break;
      case 18:
        Xe !== null &&
          (Mt
            ? ((e = Xe),
              Jh(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                l.stateNode,
              ),
              bs(e))
            : Jh(Xe, l.stateNode));
        break;
      case 4:
        ((i = Xe),
          (o = Mt),
          (Xe = l.stateNode.containerInfo),
          (Mt = !0),
          Ma(e, t, l),
          (Xe = i),
          (Mt = o));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Wa(2, l, t), st || Wa(4, l, t), Ma(e, t, l));
        break;
      case 1:
        (st ||
          (da(l, t),
          (i = l.stateNode),
          typeof i.componentWillUnmount == "function" && Ff(l, t, i)),
          Ma(e, t, l));
        break;
      case 21:
        Ma(e, t, l);
        break;
      case 22:
        ((st = (i = st) || l.memoizedState !== null), Ma(e, t, l), (st = i));
        break;
      default:
        Ma(e, t, l);
    }
  }
  function ah(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        bs(e);
      } catch (l) {
        Re(t, t.return, l);
      }
    }
  }
  function lh(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        bs(e);
      } catch (l) {
        Re(t, t.return, l);
      }
  }
  function Sg(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Wf()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Wf()),
          t
        );
      default:
        throw Error(n(435, e.tag));
    }
  }
  function On(e, t) {
    var l = Sg(e);
    t.forEach(function (i) {
      if (!l.has(i)) {
        l.add(i);
        var o = zg.bind(null, e, i);
        i.then(o, o);
      }
    });
  }
  function Ot(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var i = 0; i < l.length; i++) {
        var o = l[i],
          u = e,
          v = t,
          y = v;
        e: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
              if (il(y.type)) {
                ((Xe = y.stateNode), (Mt = !1));
                break e;
              }
              break;
            case 5:
              ((Xe = y.stateNode), (Mt = !1));
              break e;
            case 3:
            case 4:
              ((Xe = y.stateNode.containerInfo), (Mt = !0));
              break e;
          }
          y = y.return;
        }
        if (Xe === null) throw Error(n(160));
        (th(u, v, o),
          (Xe = null),
          (Mt = !1),
          (u = o.alternate),
          u !== null && (u.return = null),
          (o.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (sh(t, e), (t = t.sibling));
  }
  var la = null;
  function sh(e, t) {
    var l = e.alternate,
      i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Ot(t, e),
          At(e),
          i & 4 && (Wa(3, e, e.return), ni(3, e), Wa(5, e, e.return)));
        break;
      case 1:
        (Ot(t, e),
          At(e),
          i & 512 && (st || l === null || da(l, l.return)),
          i & 64 &&
            Ca &&
            ((e = e.updateQueue),
            e !== null &&
              ((i = e.callbacks),
              i !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? i : l.concat(i))))));
        break;
      case 26:
        var o = la;
        if (
          (Ot(t, e),
          At(e),
          i & 512 && (st || l === null || da(l, l.return)),
          i & 4)
        ) {
          var u = l !== null ? l.memoizedState : null;
          if (((i = e.memoizedState), l === null))
            if (i === null)
              if (e.stateNode === null) {
                e: {
                  ((i = e.type),
                    (l = e.memoizedProps),
                    (o = o.ownerDocument || o));
                  t: switch (i) {
                    case "title":
                      ((u = o.getElementsByTagName("title")[0]),
                        (!u ||
                          u[Rs] ||
                          u[mt] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = o.createElement(i)),
                          o.head.insertBefore(
                            u,
                            o.querySelector("head > title"),
                          )),
                        xt(u, i, l),
                        (u[mt] = e),
                        ct(u),
                        (i = u));
                      break e;
                    case "link":
                      var v = sm("link", "href", o).get(i + (l.href || ""));
                      if (v) {
                        for (var y = 0; y < v.length; y++)
                          if (
                            ((u = v[y]),
                            u.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              u.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              u.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              u.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            v.splice(y, 1);
                            break t;
                          }
                      }
                      ((u = o.createElement(i)),
                        xt(u, i, l),
                        o.head.appendChild(u));
                      break;
                    case "meta":
                      if (
                        (v = sm("meta", "content", o).get(
                          i + (l.content || ""),
                        ))
                      ) {
                        for (y = 0; y < v.length; y++)
                          if (
                            ((u = v[y]),
                            u.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              u.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              u.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              u.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            v.splice(y, 1);
                            break t;
                          }
                      }
                      ((u = o.createElement(i)),
                        xt(u, i, l),
                        o.head.appendChild(u));
                      break;
                    default:
                      throw Error(n(468, i));
                  }
                  ((u[mt] = e), ct(u), (i = u));
                }
                e.stateNode = i;
              } else im(o, e.type, e.stateNode);
            else e.stateNode = lm(o, i, e.memoizedProps);
          else
            u !== i
              ? (u === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : u.count--,
                i === null
                  ? im(o, e.type, e.stateNode)
                  : lm(o, i, e.memoizedProps))
              : i === null &&
                e.stateNode !== null &&
                Zc(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        (Ot(t, e),
          At(e),
          i & 512 && (st || l === null || da(l, l.return)),
          l !== null && i & 4 && Zc(e, e.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if (
          (Ot(t, e),
          At(e),
          i & 512 && (st || l === null || da(l, l.return)),
          e.flags & 32)
        ) {
          o = e.stateNode;
          try {
            Xl(o, "");
          } catch (ue) {
            Re(e, e.return, ue);
          }
        }
        (i & 4 &&
          e.stateNode != null &&
          ((o = e.memoizedProps), Zc(e, o, l !== null ? l.memoizedProps : o)),
          i & 1024 && ($c = !0));
        break;
      case 6:
        if ((Ot(t, e), At(e), i & 4)) {
          if (e.stateNode === null) throw Error(n(162));
          ((i = e.memoizedProps), (l = e.stateNode));
          try {
            l.nodeValue = i;
          } catch (ue) {
            Re(e, e.return, ue);
          }
        }
        break;
      case 3:
        if (
          ((Qn = null),
          (o = la),
          (la = kn(t.containerInfo)),
          Ot(t, e),
          (la = o),
          At(e),
          i & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            bs(t.containerInfo);
          } catch (ue) {
            Re(e, e.return, ue);
          }
        $c && (($c = !1), ih(e));
        break;
      case 4:
        ((i = la),
          (la = kn(e.stateNode.containerInfo)),
          Ot(t, e),
          At(e),
          (la = i));
        break;
      case 12:
        (Ot(t, e), At(e));
        break;
      case 31:
        (Ot(t, e),
          At(e),
          i & 4 &&
            ((i = e.updateQueue),
            i !== null && ((e.updateQueue = null), On(e, i))));
        break;
      case 13:
        (Ot(t, e),
          At(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (zn = yt()),
          i & 4 &&
            ((i = e.updateQueue),
            i !== null && ((e.updateQueue = null), On(e, i))));
        break;
      case 22:
        o = e.memoizedState !== null;
        var C = l !== null && l.memoizedState !== null,
          V = Ca,
          P = st;
        if (
          ((Ca = V || o),
          (st = P || C),
          Ot(t, e),
          (st = P),
          (Ca = V),
          At(e),
          i & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = o ? t._visibility & -2 : t._visibility | 1,
              o && (l === null || C || Ca || st || Dl(e)),
              l = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                C = l = t;
                try {
                  if (((u = C.stateNode), o))
                    ((v = u.style),
                      typeof v.setProperty == "function"
                        ? v.setProperty("display", "none", "important")
                        : (v.display = "none"));
                  else {
                    y = C.stateNode;
                    var I = C.memoizedProps.style,
                      k =
                        I != null && I.hasOwnProperty("display")
                          ? I.display
                          : null;
                    y.style.display =
                      k == null || typeof k == "boolean" ? "" : ("" + k).trim();
                  }
                } catch (ue) {
                  Re(C, C.return, ue);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                C = t;
                try {
                  C.stateNode.nodeValue = o ? "" : C.memoizedProps;
                } catch (ue) {
                  Re(C, C.return, ue);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                C = t;
                try {
                  var Z = C.stateNode;
                  o ? Fh(Z, !0) : Fh(C.stateNode, !1);
                } catch (ue) {
                  Re(C, C.return, ue);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (l === t && (l = null), (t = t.return));
            }
            (l === t && (l = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        i & 4 &&
          ((i = e.updateQueue),
          i !== null &&
            ((l = i.retryQueue),
            l !== null && ((i.retryQueue = null), On(e, l))));
        break;
      case 19:
        (Ot(t, e),
          At(e),
          i & 4 &&
            ((i = e.updateQueue),
            i !== null && ((e.updateQueue = null), On(e, i))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Ot(t, e), At(e));
    }
  }
  function At(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, i = e.return; i !== null; ) {
          if (Kf(i)) {
            l = i;
            break;
          }
          i = i.return;
        }
        if (l == null) throw Error(n(160));
        switch (l.tag) {
          case 27:
            var o = l.stateNode,
              u = Jc(e);
            Mn(e, u, o);
            break;
          case 5:
            var v = l.stateNode;
            l.flags & 32 && (Xl(v, ""), (l.flags &= -33));
            var y = Jc(e);
            Mn(e, y, v);
            break;
          case 3:
          case 4:
            var C = l.stateNode.containerInfo,
              V = Jc(e);
            Fc(e, V, C);
            break;
          default:
            throw Error(n(161));
        }
      } catch (P) {
        Re(e, e.return, P);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function ih(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (ih(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function Oa(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (If(e, t.alternate, t), (t = t.sibling));
  }
  function Dl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Wa(4, t, t.return), Dl(t));
          break;
        case 1:
          da(t, t.return);
          var l = t.stateNode;
          (typeof l.componentWillUnmount == "function" && Ff(t, t.return, l),
            Dl(t));
          break;
        case 27:
          vi(t.stateNode);
        case 26:
        case 5:
          (da(t, t.return), Dl(t));
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
  function Aa(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var i = t.alternate,
        o = e,
        u = t,
        v = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (Aa(o, u, l), ni(4, u));
          break;
        case 1:
          if (
            (Aa(o, u, l),
            (i = u),
            (o = i.stateNode),
            typeof o.componentDidMount == "function")
          )
            try {
              o.componentDidMount();
            } catch (V) {
              Re(i, i.return, V);
            }
          if (((i = u), (o = i.updateQueue), o !== null)) {
            var y = i.stateNode;
            try {
              var C = o.shared.hiddenCallbacks;
              if (C !== null)
                for (o.shared.hiddenCallbacks = null, o = 0; o < C.length; o++)
                  Ld(C[o], y);
            } catch (V) {
              Re(i, i.return, V);
            }
          }
          (l && v & 64 && Jf(u), ri(u, u.return));
          break;
        case 27:
          Pf(u);
        case 26:
        case 5:
          (Aa(o, u, l), l && i === null && v & 4 && $f(u), ri(u, u.return));
          break;
        case 12:
          Aa(o, u, l);
          break;
        case 31:
          (Aa(o, u, l), l && v & 4 && ah(o, u));
          break;
        case 13:
          (Aa(o, u, l), l && v & 4 && lh(o, u));
          break;
        case 22:
          (u.memoizedState === null && Aa(o, u, l), ri(u, u.return));
          break;
        case 30:
          break;
        default:
          Aa(o, u, l);
      }
      t = t.sibling;
    }
  }
  function Kc(e, t) {
    var l = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && Js(l)));
  }
  function Pc(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Js(e)));
  }
  function sa(e, t, l, i) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (nh(e, t, l, i), (t = t.sibling));
  }
  function nh(e, t, l, i) {
    var o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (sa(e, t, l, i), o & 2048 && ni(9, t));
        break;
      case 1:
        sa(e, t, l, i);
        break;
      case 3:
        (sa(e, t, l, i),
          o & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Js(e))));
        break;
      case 12:
        if (o & 2048) {
          (sa(e, t, l, i), (e = t.stateNode));
          try {
            var u = t.memoizedProps,
              v = u.id,
              y = u.onPostCommit;
            typeof y == "function" &&
              y(
                v,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (C) {
            Re(t, t.return, C);
          }
        } else sa(e, t, l, i);
        break;
      case 31:
        sa(e, t, l, i);
        break;
      case 13:
        sa(e, t, l, i);
        break;
      case 23:
        break;
      case 22:
        ((u = t.stateNode),
          (v = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? sa(e, t, l, i)
              : ci(e, t)
            : u._visibility & 2
              ? sa(e, t, l, i)
              : ((u._visibility |= 2),
                us(e, t, l, i, (t.subtreeFlags & 10256) !== 0 || !1)),
          o & 2048 && Kc(v, t));
        break;
      case 24:
        (sa(e, t, l, i), o & 2048 && Pc(t.alternate, t));
        break;
      default:
        sa(e, t, l, i);
    }
  }
  function us(e, t, l, i, o) {
    for (
      o = o && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var u = e,
        v = t,
        y = l,
        C = i,
        V = v.flags;
      switch (v.tag) {
        case 0:
        case 11:
        case 15:
          (us(u, v, y, C, o), ni(8, v));
          break;
        case 23:
          break;
        case 22:
          var P = v.stateNode;
          (v.memoizedState !== null
            ? P._visibility & 2
              ? us(u, v, y, C, o)
              : ci(u, v)
            : ((P._visibility |= 2), us(u, v, y, C, o)),
            o && V & 2048 && Kc(v.alternate, v));
          break;
        case 24:
          (us(u, v, y, C, o), o && V & 2048 && Pc(v.alternate, v));
          break;
        default:
          us(u, v, y, C, o);
      }
      t = t.sibling;
    }
  }
  function ci(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e,
          i = t,
          o = i.flags;
        switch (i.tag) {
          case 22:
            (ci(l, i), o & 2048 && Kc(i.alternate, i));
            break;
          case 24:
            (ci(l, i), o & 2048 && Pc(i.alternate, i));
            break;
          default:
            ci(l, i);
        }
        t = t.sibling;
      }
  }
  var oi = 8192;
  function ds(e, t, l) {
    if (e.subtreeFlags & oi)
      for (e = e.child; e !== null; ) (rh(e, t, l), (e = e.sibling));
  }
  function rh(e, t, l) {
    switch (e.tag) {
      case 26:
        (ds(e, t, l),
          e.flags & oi &&
            e.memoizedState !== null &&
            cx(l, la, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        ds(e, t, l);
        break;
      case 3:
      case 4:
        var i = la;
        ((la = kn(e.stateNode.containerInfo)), ds(e, t, l), (la = i));
        break;
      case 22:
        e.memoizedState === null &&
          ((i = e.alternate),
          i !== null && i.memoizedState !== null
            ? ((i = oi), (oi = 16777216), ds(e, t, l), (oi = i))
            : ds(e, t, l));
        break;
      default:
        ds(e, t, l);
    }
  }
  function ch(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function ui(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var i = t[l];
          ((ot = i), uh(i, e));
        }
      ch(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (oh(e), (e = e.sibling));
  }
  function oh(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (ui(e), e.flags & 2048 && Wa(9, e, e.return));
        break;
      case 3:
        ui(e);
        break;
      case 12:
        ui(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), An(e))
          : ui(e);
        break;
      default:
        ui(e);
    }
  }
  function An(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var i = t[l];
          ((ot = i), uh(i, e));
        }
      ch(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (Wa(8, t, t.return), An(t));
          break;
        case 22:
          ((l = t.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), An(t)));
          break;
        default:
          An(t);
      }
      e = e.sibling;
    }
  }
  function uh(e, t) {
    for (; ot !== null; ) {
      var l = ot;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Wa(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var i = l.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          Js(l.memoizedState.cache);
      }
      if (((i = l.child), i !== null)) ((i.return = l), (ot = i));
      else
        e: for (l = e; ot !== null; ) {
          i = ot;
          var o = i.sibling,
            u = i.return;
          if ((eh(i), i === l)) {
            ot = null;
            break e;
          }
          if (o !== null) {
            ((o.return = u), (ot = o));
            break e;
          }
          ot = u;
        }
    }
  }
  var Ng = {
      getCacheForType: function (e) {
        var t = vt(tt),
          l = t.data.get(e);
        return (l === void 0 && ((l = e()), t.data.set(e, l)), l);
      },
      cacheSignal: function () {
        return vt(tt).controller.signal;
      },
    },
    wg = typeof WeakMap == "function" ? WeakMap : Map,
    De = 0,
    Ue = null,
    Te = null,
    Ce = 0,
    _e = 0,
    Ut = null,
    Ia = !1,
    fs = !1,
    Wc = !1,
    za = 0,
    Pe = 0,
    el = 0,
    _l = 0,
    Ic = 0,
    Gt = 0,
    hs = 0,
    di = null,
    zt = null,
    eo = !1,
    zn = 0,
    dh = 0,
    Dn = 1 / 0,
    _n = null,
    tl = null,
    nt = 0,
    al = null,
    ms = null,
    Da = 0,
    to = 0,
    ao = null,
    fh = null,
    fi = 0,
    lo = null;
  function qt() {
    return (De & 2) !== 0 && Ce !== 0 ? Ce & -Ce : U.T !== null ? oo() : Cu();
  }
  function hh() {
    if (Gt === 0)
      if ((Ce & 536870912) === 0 || Oe) {
        var e = ml;
        ((ml <<= 1), (ml & 3932160) === 0 && (ml = 262144), (Gt = e));
      } else Gt = 536870912;
    return ((e = Bt.current), e !== null && (e.flags |= 32), Gt);
  }
  function Dt(e, t, l) {
    (((e === Ue && (_e === 2 || _e === 9)) || e.cancelPendingCommit !== null) &&
      (ps(e, 0), ll(e, Ce, Gt, !1)),
      _s(e, l),
      ((De & 2) === 0 || e !== Ue) &&
        (e === Ue &&
          ((De & 2) === 0 && (_l |= l), Pe === 4 && ll(e, Ce, Gt, !1)),
        fa(e)));
  }
  function mh(e, t, l) {
    if ((De & 6) !== 0) throw Error(n(327));
    var i = (!l && (t & 127) === 0 && (t & e.expiredLanes) === 0) || qa(e, t),
      o = i ? Cg(e, t) : io(e, t, !0),
      u = i;
    do {
      if (o === 0) {
        fs && !i && ll(e, t, 0, !1);
        break;
      } else {
        if (((l = e.current.alternate), u && !Tg(l))) {
          ((o = io(e, t, !1)), (u = !1));
          continue;
        }
        if (o === 2) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var v = 0;
          else
            ((v = e.pendingLanes & -536870913),
              (v = v !== 0 ? v : v & 536870912 ? 536870912 : 0));
          if (v !== 0) {
            t = v;
            e: {
              var y = e;
              o = di;
              var C = y.current.memoizedState.isDehydrated;
              if ((C && (ps(y, v).flags |= 256), (v = io(y, v, !1)), v !== 2)) {
                if (Wc && !C) {
                  ((y.errorRecoveryDisabledLanes |= u), (_l |= u), (o = 4));
                  break e;
                }
                ((u = zt),
                  (zt = o),
                  u !== null &&
                    (zt === null ? (zt = u) : zt.push.apply(zt, u)));
              }
              o = v;
            }
            if (((u = !1), o !== 2)) continue;
          }
        }
        if (o === 1) {
          (ps(e, 0), ll(e, t, 0, !0));
          break;
        }
        e: {
          switch (((i = e), (u = o), u)) {
            case 0:
            case 1:
              throw Error(n(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ll(i, t, Gt, !Ia);
              break e;
            case 2:
              zt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(n(329));
          }
          if ((t & 62914560) === t && ((o = zn + 300 - yt()), 10 < o)) {
            if ((ll(i, t, Gt, !Ia), vl(i, 0, !0) !== 0)) break e;
            ((Da = t),
              (i.timeoutHandle = Qh(
                ph.bind(
                  null,
                  i,
                  l,
                  zt,
                  _n,
                  eo,
                  t,
                  Gt,
                  _l,
                  hs,
                  Ia,
                  u,
                  "Throttled",
                  -0,
                  0,
                ),
                o,
              )));
            break e;
          }
          ph(i, l, zt, _n, eo, t, Gt, _l, hs, Ia, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    fa(e);
  }
  function ph(e, t, l, i, o, u, v, y, C, V, P, I, k, Z) {
    if (
      ((e.timeoutHandle = -1),
      (I = t.subtreeFlags),
      I & 8192 || (I & 16785408) === 16785408)
    ) {
      ((I = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: ga,
      }),
        rh(t, u, I));
      var ue =
        (u & 62914560) === u ? zn - yt() : (u & 4194048) === u ? dh - yt() : 0;
      if (((ue = ox(I, ue)), ue !== null)) {
        ((Da = u),
          (e.cancelPendingCommit = ue(
            Nh.bind(null, e, t, u, l, i, o, v, y, C, P, I, null, k, Z),
          )),
          ll(e, u, v, !V));
        return;
      }
    }
    Nh(e, t, u, l, i, o, v, y, C);
  }
  function Tg(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        t.flags & 16384 &&
        ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var i = 0; i < l.length; i++) {
          var o = l[i],
            u = o.getSnapshot;
          o = o.value;
          try {
            if (!Rt(u(), o)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = t.child), t.subtreeFlags & 16384 && l !== null))
        ((l.return = t), (t = l));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function ll(e, t, l, i) {
    ((t &= ~Ic),
      (t &= ~_l),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      i && (e.warmLanes |= t),
      (i = e.expirationTimes));
    for (var o = t; 0 < o; ) {
      var u = 31 - ht(o),
        v = 1 << u;
      ((i[u] = -1), (o &= ~v));
    }
    l !== 0 && wu(e, l, t);
  }
  function Rn() {
    return (De & 6) === 0 ? (hi(0), !1) : !0;
  }
  function so() {
    if (Te !== null) {
      if (_e === 0) var e = Te.return;
      else ((e = Te), (ba = wl = null), yc(e), (is = null), ($s = 0), (e = Te));
      for (; e !== null; ) (Zf(e.alternate, e), (e = e.return));
      Te = null;
    }
  }
  function ps(e, t) {
    var l = e.timeoutHandle;
    (l !== -1 && ((e.timeoutHandle = -1), Qg(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      (Da = 0),
      so(),
      (Ue = e),
      (Te = l = ja(e.current, null)),
      (Ce = t),
      (_e = 0),
      (Ut = null),
      (Ia = !1),
      (fs = qa(e, t)),
      (Wc = !1),
      (hs = Gt = Ic = _l = el = Pe = 0),
      (zt = di = null),
      (eo = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var i = e.entangledLanes;
    if (i !== 0)
      for (e = e.entanglements, i &= t; 0 < i; ) {
        var o = 31 - ht(i),
          u = 1 << o;
        ((t |= e[o]), (i &= ~u));
      }
    return ((za = t), en(), l);
  }
  function vh(e, t) {
    ((Se = null),
      (U.H = li),
      t === ss || t === on
        ? ((t = zd()), (_e = 3))
        : t === cc
          ? ((t = zd()), (_e = 4))
          : (_e =
              t === Bc
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (Ut = t),
      Te === null && ((Pe = 1), Nn(e, Jt(t, e.current))));
  }
  function gh() {
    var e = Bt.current;
    return e === null
      ? !0
      : (Ce & 4194048) === Ce
        ? Pt === null
        : (Ce & 62914560) === Ce || (Ce & 536870912) !== 0
          ? e === Pt
          : !1;
  }
  function xh() {
    var e = U.H;
    return ((U.H = li), e === null ? li : e);
  }
  function jh() {
    var e = U.A;
    return ((U.A = Ng), e);
  }
  function Ln() {
    ((Pe = 4),
      Ia || ((Ce & 4194048) !== Ce && Bt.current !== null) || (fs = !0),
      ((el & 134217727) === 0 && (_l & 134217727) === 0) ||
        Ue === null ||
        ll(Ue, Ce, Gt, !1));
  }
  function io(e, t, l) {
    var i = De;
    De |= 2;
    var o = xh(),
      u = jh();
    ((Ue !== e || Ce !== t) && ((_n = null), ps(e, t)), (t = !1));
    var v = Pe;
    e: do
      try {
        if (_e !== 0 && Te !== null) {
          var y = Te,
            C = Ut;
          switch (_e) {
            case 8:
              (so(), (v = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Bt.current === null && (t = !0);
              var V = _e;
              if (((_e = 0), (Ut = null), vs(e, y, C, V), l && fs)) {
                v = 0;
                break e;
              }
              break;
            default:
              ((V = _e), (_e = 0), (Ut = null), vs(e, y, C, V));
          }
        }
        (Eg(), (v = Pe));
        break;
      } catch (P) {
        vh(e, P);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (ba = wl = null),
      (De = i),
      (U.H = o),
      (U.A = u),
      Te === null && ((Ue = null), (Ce = 0), en()),
      v
    );
  }
  function Eg() {
    for (; Te !== null; ) yh(Te);
  }
  function Cg(e, t) {
    var l = De;
    De |= 2;
    var i = xh(),
      o = jh();
    Ue !== e || Ce !== t
      ? ((_n = null), (Dn = yt() + 500), ps(e, t))
      : (fs = qa(e, t));
    e: do
      try {
        if (_e !== 0 && Te !== null) {
          t = Te;
          var u = Ut;
          t: switch (_e) {
            case 1:
              ((_e = 0), (Ut = null), vs(e, t, u, 1));
              break;
            case 2:
            case 9:
              if (Od(u)) {
                ((_e = 0), (Ut = null), bh(t));
                break;
              }
              ((t = function () {
                ((_e !== 2 && _e !== 9) || Ue !== e || (_e = 7), fa(e));
              }),
                u.then(t, t));
              break e;
            case 3:
              _e = 7;
              break e;
            case 4:
              _e = 5;
              break e;
            case 7:
              Od(u)
                ? ((_e = 0), (Ut = null), bh(t))
                : ((_e = 0), (Ut = null), vs(e, t, u, 7));
              break;
            case 5:
              var v = null;
              switch (Te.tag) {
                case 26:
                  v = Te.memoizedState;
                case 5:
                case 27:
                  var y = Te;
                  if (v ? nm(v) : y.stateNode.complete) {
                    ((_e = 0), (Ut = null));
                    var C = y.sibling;
                    if (C !== null) Te = C;
                    else {
                      var V = y.return;
                      V !== null ? ((Te = V), Bn(V)) : (Te = null);
                    }
                    break t;
                  }
              }
              ((_e = 0), (Ut = null), vs(e, t, u, 5));
              break;
            case 6:
              ((_e = 0), (Ut = null), vs(e, t, u, 6));
              break;
            case 8:
              (so(), (Pe = 6));
              break e;
            default:
              throw Error(n(462));
          }
        }
        Mg();
        break;
      } catch (P) {
        vh(e, P);
      }
    while (!0);
    return (
      (ba = wl = null),
      (U.H = i),
      (U.A = o),
      (De = l),
      Te !== null ? 0 : ((Ue = null), (Ce = 0), en(), Pe)
    );
  }
  function Mg() {
    for (; Te !== null && !Yi(); ) yh(Te);
  }
  function yh(e) {
    var t = Xf(e.alternate, e, za);
    ((e.memoizedProps = e.pendingProps), t === null ? Bn(e) : (Te = t));
  }
  function bh(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Uf(l, t, t.pendingProps, t.type, void 0, Ce);
        break;
      case 11:
        t = Uf(l, t, t.pendingProps, t.type.render, t.ref, Ce);
        break;
      case 5:
        yc(t);
      default:
        (Zf(l, t), (t = Te = xd(t, za)), (t = Xf(l, t, za)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Bn(e) : (Te = t));
  }
  function vs(e, t, l, i) {
    ((ba = wl = null), yc(t), (is = null), ($s = 0));
    var o = t.return;
    try {
      if (vg(e, o, t, l, Ce)) {
        ((Pe = 1), Nn(e, Jt(l, e.current)), (Te = null));
        return;
      }
    } catch (u) {
      if (o !== null) throw ((Te = o), u);
      ((Pe = 1), Nn(e, Jt(l, e.current)), (Te = null));
      return;
    }
    t.flags & 32768
      ? (Oe || i === 1
          ? (e = !0)
          : fs || (Ce & 536870912) !== 0
            ? (e = !1)
            : ((Ia = e = !0),
              (i === 2 || i === 9 || i === 3 || i === 6) &&
                ((i = Bt.current),
                i !== null && i.tag === 13 && (i.flags |= 16384))),
        Sh(t, e))
      : Bn(t);
  }
  function Bn(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Sh(t, Ia);
        return;
      }
      e = t.return;
      var l = jg(t.alternate, t, za);
      if (l !== null) {
        Te = l;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Te = t;
        return;
      }
      Te = t = e;
    } while (t !== null);
    Pe === 0 && (Pe = 5);
  }
  function Sh(e, t) {
    do {
      var l = yg(e.alternate, e);
      if (l !== null) {
        ((l.flags &= 32767), (Te = l));
        return;
      }
      if (
        ((l = e.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Te = e;
        return;
      }
      Te = e = l;
    } while (e !== null);
    ((Pe = 6), (Te = null));
  }
  function Nh(e, t, l, i, o, u, v, y, C) {
    e.cancelPendingCommit = null;
    do Hn();
    while (nt !== 0);
    if ((De & 6) !== 0) throw Error(n(327));
    if (t !== null) {
      if (t === e.current) throw Error(n(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= Jr),
        rv(e, l, u, v, y, C),
        e === Ue && ((Te = Ue = null), (Ce = 0)),
        (ms = t),
        (al = e),
        (Da = l),
        (to = u),
        (ao = o),
        (fh = i),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            Dg(ye, function () {
              return (Mh(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (i = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || i)
      ) {
        ((i = U.T), (U.T = null), (o = X.p), (X.p = 2), (v = De), (De |= 4));
        try {
          bg(e, t, l);
        } finally {
          ((De = v), (X.p = o), (U.T = i));
        }
      }
      ((nt = 1), wh(), Th(), Eh());
    }
  }
  function wh() {
    if (nt === 1) {
      nt = 0;
      var e = al,
        t = ms,
        l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        ((l = U.T), (U.T = null));
        var i = X.p;
        X.p = 2;
        var o = De;
        De |= 4;
        try {
          sh(t, e);
          var u = xo,
            v = od(e.containerInfo),
            y = u.focusedElem,
            C = u.selectionRange;
          if (
            v !== y &&
            y &&
            y.ownerDocument &&
            cd(y.ownerDocument.documentElement, y)
          ) {
            if (C !== null && Yr(y)) {
              var V = C.start,
                P = C.end;
              if ((P === void 0 && (P = V), "selectionStart" in y))
                ((y.selectionStart = V),
                  (y.selectionEnd = Math.min(P, y.value.length)));
              else {
                var I = y.ownerDocument || document,
                  k = (I && I.defaultView) || window;
                if (k.getSelection) {
                  var Z = k.getSelection(),
                    ue = y.textContent.length,
                    ge = Math.min(C.start, ue),
                    He = C.end === void 0 ? ge : Math.min(C.end, ue);
                  !Z.extend && ge > He && ((v = He), (He = ge), (ge = v));
                  var R = rd(y, ge),
                    D = rd(y, He);
                  if (
                    R &&
                    D &&
                    (Z.rangeCount !== 1 ||
                      Z.anchorNode !== R.node ||
                      Z.anchorOffset !== R.offset ||
                      Z.focusNode !== D.node ||
                      Z.focusOffset !== D.offset)
                  ) {
                    var q = I.createRange();
                    (q.setStart(R.node, R.offset),
                      Z.removeAllRanges(),
                      ge > He
                        ? (Z.addRange(q), Z.extend(D.node, D.offset))
                        : (q.setEnd(D.node, D.offset), Z.addRange(q)));
                  }
                }
              }
            }
            for (I = [], Z = y; (Z = Z.parentNode); )
              Z.nodeType === 1 &&
                I.push({ element: Z, left: Z.scrollLeft, top: Z.scrollTop });
            for (
              typeof y.focus == "function" && y.focus(), y = 0;
              y < I.length;
              y++
            ) {
              var W = I[y];
              ((W.element.scrollLeft = W.left), (W.element.scrollTop = W.top));
            }
          }
          (($n = !!go), (xo = go = null));
        } finally {
          ((De = o), (X.p = i), (U.T = l));
        }
      }
      ((e.current = t), (nt = 2));
    }
  }
  function Th() {
    if (nt === 2) {
      nt = 0;
      var e = al,
        t = ms,
        l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        ((l = U.T), (U.T = null));
        var i = X.p;
        X.p = 2;
        var o = De;
        De |= 4;
        try {
          If(e, t.alternate, t);
        } finally {
          ((De = o), (X.p = i), (U.T = l));
        }
      }
      nt = 3;
    }
  }
  function Eh() {
    if (nt === 4 || nt === 3) {
      ((nt = 0), yr());
      var e = al,
        t = ms,
        l = Da,
        i = fh;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (nt = 5)
        : ((nt = 0), (ms = al = null), Ch(e, e.pendingLanes));
      var o = e.pendingLanes;
      if (
        (o === 0 && (tl = null),
        Nr(l),
        (t = t.stateNode),
        qe && typeof qe.onCommitFiberRoot == "function")
      )
        try {
          qe.onCommitFiberRoot(it, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (i !== null) {
        ((t = U.T), (o = X.p), (X.p = 2), (U.T = null));
        try {
          for (var u = e.onRecoverableError, v = 0; v < i.length; v++) {
            var y = i[v];
            u(y.value, { componentStack: y.stack });
          }
        } finally {
          ((U.T = t), (X.p = o));
        }
      }
      ((Da & 3) !== 0 && Hn(),
        fa(e),
        (o = e.pendingLanes),
        (l & 261930) !== 0 && (o & 42) !== 0
          ? e === lo
            ? fi++
            : ((fi = 0), (lo = e))
          : (fi = 0),
        hi(0));
    }
  }
  function Ch(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Js(t)));
  }
  function Hn() {
    return (wh(), Th(), Eh(), Mh());
  }
  function Mh() {
    if (nt !== 5) return !1;
    var e = al,
      t = to;
    to = 0;
    var l = Nr(Da),
      i = U.T,
      o = X.p;
    try {
      ((X.p = 32 > l ? 32 : l), (U.T = null), (l = ao), (ao = null));
      var u = al,
        v = Da;
      if (((nt = 0), (ms = al = null), (Da = 0), (De & 6) !== 0))
        throw Error(n(331));
      var y = De;
      if (
        ((De |= 4),
        oh(u.current),
        nh(u, u.current, v, l),
        (De = y),
        hi(0, !1),
        qe && typeof qe.onPostCommitFiberRoot == "function")
      )
        try {
          qe.onPostCommitFiberRoot(it, u);
        } catch {}
      return !0;
    } finally {
      ((X.p = o), (U.T = i), Ch(e, t));
    }
  }
  function Oh(e, t, l) {
    ((t = Jt(l, t)),
      (t = Lc(e.stateNode, t, 2)),
      (e = $a(e, t, 2)),
      e !== null && (_s(e, 2), fa(e)));
  }
  function Re(e, t, l) {
    if (e.tag === 3) Oh(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Oh(t, e, l);
          break;
        } else if (t.tag === 1) {
          var i = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" &&
              (tl === null || !tl.has(i)))
          ) {
            ((e = Jt(l, e)),
              (l = Af(2)),
              (i = $a(t, l, 2)),
              i !== null && (zf(l, i, t, e), _s(i, 2), fa(i)));
            break;
          }
        }
        t = t.return;
      }
  }
  function no(e, t, l) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new wg();
      var o = new Set();
      i.set(t, o);
    } else ((o = i.get(t)), o === void 0 && ((o = new Set()), i.set(t, o)));
    o.has(l) ||
      ((Wc = !0), o.add(l), (e = Og.bind(null, e, t, l)), t.then(e, e));
  }
  function Og(e, t, l) {
    var i = e.pingCache;
    (i !== null && i.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      Ue === e &&
        (Ce & l) === l &&
        (Pe === 4 || (Pe === 3 && (Ce & 62914560) === Ce && 300 > yt() - zn)
          ? (De & 2) === 0 && ps(e, 0)
          : (Ic |= l),
        hs === Ce && (hs = 0)),
      fa(e));
  }
  function Ah(e, t) {
    (t === 0 && (t = Nu()), (e = bl(e, t)), e !== null && (_s(e, t), fa(e)));
  }
  function Ag(e) {
    var t = e.memoizedState,
      l = 0;
    (t !== null && (l = t.retryLane), Ah(e, l));
  }
  function zg(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var i = e.stateNode,
          o = e.memoizedState;
        o !== null && (l = o.retryLane);
        break;
      case 19:
        i = e.stateNode;
        break;
      case 22:
        i = e.stateNode._retryCache;
        break;
      default:
        throw Error(n(314));
    }
    (i !== null && i.delete(t), Ah(e, l));
  }
  function Dg(e, t) {
    return As(e, t);
  }
  var Un = null,
    gs = null,
    ro = !1,
    Gn = !1,
    co = !1,
    sl = 0;
  function fa(e) {
    (e !== gs &&
      e.next === null &&
      (gs === null ? (Un = gs = e) : (gs = gs.next = e)),
      (Gn = !0),
      ro || ((ro = !0), Rg()));
  }
  function hi(e, t) {
    if (!co && Gn) {
      co = !0;
      do
        for (var l = !1, i = Un; i !== null; ) {
          if (e !== 0) {
            var o = i.pendingLanes;
            if (o === 0) var u = 0;
            else {
              var v = i.suspendedLanes,
                y = i.pingedLanes;
              ((u = (1 << (31 - ht(42 | e) + 1)) - 1),
                (u &= o & ~(v & ~y)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((l = !0), Rh(i, u));
          } else
            ((u = Ce),
              (u = vl(
                i,
                i === Ue ? u : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== -1,
              )),
              (u & 3) === 0 || qa(i, u) || ((l = !0), Rh(i, u)));
          i = i.next;
        }
      while (l);
      co = !1;
    }
  }
  function _g() {
    zh();
  }
  function zh() {
    Gn = ro = !1;
    var e = 0;
    sl !== 0 && Xg() && (e = sl);
    for (var t = yt(), l = null, i = Un; i !== null; ) {
      var o = i.next,
        u = Dh(i, t);
      (u === 0
        ? ((i.next = null),
          l === null ? (Un = o) : (l.next = o),
          o === null && (gs = l))
        : ((l = i), (e !== 0 || (u & 3) !== 0) && (Gn = !0)),
        (i = o));
    }
    ((nt !== 0 && nt !== 5) || hi(e), sl !== 0 && (sl = 0));
  }
  function Dh(e, t) {
    for (
      var l = e.suspendedLanes,
        i = e.pingedLanes,
        o = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;
    ) {
      var v = 31 - ht(u),
        y = 1 << v,
        C = o[v];
      (C === -1
        ? ((y & l) === 0 || (y & i) !== 0) && (o[v] = nv(y, t))
        : C <= t && (e.expiredLanes |= y),
        (u &= ~y));
    }
    if (
      ((t = Ue),
      (l = Ce),
      (l = vl(
        e,
        e === t ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (i = e.callbackNode),
      l === 0 ||
        (e === t && (_e === 2 || _e === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        i !== null && i !== null && zs(i),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((l & 3) === 0 || qa(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t;
      switch ((i !== null && zs(i), Nr(l))) {
        case 2:
        case 8:
          l = re;
          break;
        case 32:
          l = ye;
          break;
        case 268435456:
          l = $e;
          break;
        default:
          l = ye;
      }
      return (
        (i = _h.bind(null, e)),
        (l = As(l, i)),
        (e.callbackPriority = t),
        (e.callbackNode = l),
        t
      );
    }
    return (
      i !== null && i !== null && zs(i),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function _h(e, t) {
    if (nt !== 0 && nt !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var l = e.callbackNode;
    if (Hn() && e.callbackNode !== l) return null;
    var i = Ce;
    return (
      (i = vl(
        e,
        e === Ue ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      i === 0
        ? null
        : (mh(e, i, t),
          Dh(e, yt()),
          e.callbackNode != null && e.callbackNode === l
            ? _h.bind(null, e)
            : null)
    );
  }
  function Rh(e, t) {
    if (Hn()) return null;
    mh(e, t, !0);
  }
  function Rg() {
    Zg(function () {
      (De & 6) !== 0 ? As(Y, _g) : zh();
    });
  }
  function oo() {
    if (sl === 0) {
      var e = as;
      (e === 0 && ((e = Yt), (Yt <<= 1), (Yt & 261888) === 0 && (Yt = 256)),
        (sl = e));
    }
    return sl;
  }
  function Lh(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : Zi("" + e);
  }
  function Bh(e, t) {
    var l = t.ownerDocument.createElement("input");
    return (
      (l.name = t.name),
      (l.value = t.value),
      e.id && l.setAttribute("form", e.id),
      t.parentNode.insertBefore(l, t),
      (e = new FormData(e)),
      l.parentNode.removeChild(l),
      e
    );
  }
  function Lg(e, t, l, i, o) {
    if (t === "submit" && l && l.stateNode === o) {
      var u = Lh((o[Et] || null).action),
        v = i.submitter;
      v &&
        ((t = (t = v[Et] || null)
          ? Lh(t.formAction)
          : v.getAttribute("formAction")),
        t !== null && ((u = t), (v = null)));
      var y = new Ki("action", "action", null, i, o);
      e.push({
        event: y,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (i.defaultPrevented) {
                if (sl !== 0) {
                  var C = v ? Bh(o, v) : new FormData(o);
                  Oc(
                    l,
                    { pending: !0, data: C, method: o.method, action: u },
                    null,
                    C,
                  );
                }
              } else
                typeof u == "function" &&
                  (y.preventDefault(),
                  (C = v ? Bh(o, v) : new FormData(o)),
                  Oc(
                    l,
                    { pending: !0, data: C, method: o.method, action: u },
                    u,
                    C,
                  ));
            },
            currentTarget: o,
          },
        ],
      });
    }
  }
  for (var uo = 0; uo < Zr.length; uo++) {
    var fo = Zr[uo],
      Bg = fo.toLowerCase(),
      Hg = fo[0].toUpperCase() + fo.slice(1);
    aa(Bg, "on" + Hg);
  }
  (aa(fd, "onAnimationEnd"),
    aa(hd, "onAnimationIteration"),
    aa(md, "onAnimationStart"),
    aa("dblclick", "onDoubleClick"),
    aa("focusin", "onFocus"),
    aa("focusout", "onBlur"),
    aa(Iv, "onTransitionRun"),
    aa(eg, "onTransitionStart"),
    aa(tg, "onTransitionCancel"),
    aa(pd, "onTransitionEnd"),
    Yl("onMouseEnter", ["mouseout", "mouseover"]),
    Yl("onMouseLeave", ["mouseout", "mouseover"]),
    Yl("onPointerEnter", ["pointerout", "pointerover"]),
    Yl("onPointerLeave", ["pointerout", "pointerover"]),
    gl(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    gl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    gl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    gl(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    gl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    gl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var mi =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Ug = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(mi),
    );
  function Hh(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var i = e[l],
        o = i.event;
      i = i.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var v = i.length - 1; 0 <= v; v--) {
            var y = i[v],
              C = y.instance,
              V = y.currentTarget;
            if (((y = y.listener), C !== u && o.isPropagationStopped()))
              break e;
            ((u = y), (o.currentTarget = V));
            try {
              u(o);
            } catch (P) {
              Ii(P);
            }
            ((o.currentTarget = null), (u = C));
          }
        else
          for (v = 0; v < i.length; v++) {
            if (
              ((y = i[v]),
              (C = y.instance),
              (V = y.currentTarget),
              (y = y.listener),
              C !== u && o.isPropagationStopped())
            )
              break e;
            ((u = y), (o.currentTarget = V));
            try {
              u(o);
            } catch (P) {
              Ii(P);
            }
            ((o.currentTarget = null), (u = C));
          }
      }
    }
  }
  function Ee(e, t) {
    var l = t[wr];
    l === void 0 && (l = t[wr] = new Set());
    var i = e + "__bubble";
    l.has(i) || (Uh(t, e, 2, !1), l.add(i));
  }
  function ho(e, t, l) {
    var i = 0;
    (t && (i |= 4), Uh(l, e, i, t));
  }
  var qn = "_reactListening" + Math.random().toString(36).slice(2);
  function mo(e) {
    if (!e[qn]) {
      ((e[qn] = !0),
        Au.forEach(function (l) {
          l !== "selectionchange" && (Ug.has(l) || ho(l, !1, e), ho(l, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[qn] || ((t[qn] = !0), ho("selectionchange", !1, t));
    }
  }
  function Uh(e, t, l, i) {
    switch (hm(t)) {
      case 2:
        var o = fx;
        break;
      case 8:
        o = hx;
        break;
      default:
        o = Oo;
    }
    ((l = o.bind(null, t, l, e)),
      (o = void 0),
      !_r ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (o = !0),
      i
        ? o !== void 0
          ? e.addEventListener(t, l, { capture: !0, passive: o })
          : e.addEventListener(t, l, !0)
        : o !== void 0
          ? e.addEventListener(t, l, { passive: o })
          : e.addEventListener(t, l, !1));
  }
  function po(e, t, l, i, o) {
    var u = i;
    if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
      e: for (;;) {
        if (i === null) return;
        var v = i.tag;
        if (v === 3 || v === 4) {
          var y = i.stateNode.containerInfo;
          if (y === o) break;
          if (v === 4)
            for (v = i.return; v !== null; ) {
              var C = v.tag;
              if ((C === 3 || C === 4) && v.stateNode.containerInfo === o)
                return;
              v = v.return;
            }
          for (; y !== null; ) {
            if (((v = Gl(y)), v === null)) return;
            if (((C = v.tag), C === 5 || C === 6 || C === 26 || C === 27)) {
              i = u = v;
              continue e;
            }
            y = y.parentNode;
          }
        }
        i = i.return;
      }
    Yu(function () {
      var V = u,
        P = zr(l),
        I = [];
      e: {
        var k = vd.get(e);
        if (k !== void 0) {
          var Z = Ki,
            ue = e;
          switch (e) {
            case "keypress":
              if (Fi(l) === 0) break e;
            case "keydown":
            case "keyup":
              Z = zv;
              break;
            case "focusin":
              ((ue = "focus"), (Z = Hr));
              break;
            case "focusout":
              ((ue = "blur"), (Z = Hr));
              break;
            case "beforeblur":
            case "afterblur":
              Z = Hr;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Z = Qu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Z = jv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Z = Rv;
              break;
            case fd:
            case hd:
            case md:
              Z = Sv;
              break;
            case pd:
              Z = Bv;
              break;
            case "scroll":
            case "scrollend":
              Z = gv;
              break;
            case "wheel":
              Z = Uv;
              break;
            case "copy":
            case "cut":
            case "paste":
              Z = wv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Z = Ju;
              break;
            case "toggle":
            case "beforetoggle":
              Z = qv;
          }
          var ge = (t & 4) !== 0,
            He = !ge && (e === "scroll" || e === "scrollend"),
            R = ge ? (k !== null ? k + "Capture" : null) : k;
          ge = [];
          for (var D = V, q; D !== null; ) {
            var W = D;
            if (
              ((q = W.stateNode),
              (W = W.tag),
              (W !== 5 && W !== 26 && W !== 27) ||
                q === null ||
                R === null ||
                ((W = Bs(D, R)), W != null && ge.push(pi(D, W, q))),
              He)
            )
              break;
            D = D.return;
          }
          0 < ge.length &&
            ((k = new Z(k, ue, null, l, P)),
            I.push({ event: k, listeners: ge }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((k = e === "mouseover" || e === "pointerover"),
            (Z = e === "mouseout" || e === "pointerout"),
            k &&
              l !== Ar &&
              (ue = l.relatedTarget || l.fromElement) &&
              (Gl(ue) || ue[Ul]))
          )
            break e;
          if (
            (Z || k) &&
            ((k =
              P.window === P
                ? P
                : (k = P.ownerDocument)
                  ? k.defaultView || k.parentWindow
                  : window),
            Z
              ? ((ue = l.relatedTarget || l.toElement),
                (Z = V),
                (ue = ue ? Gl(ue) : null),
                ue !== null &&
                  ((He = d(ue)),
                  (ge = ue.tag),
                  ue !== He || (ge !== 5 && ge !== 27 && ge !== 6)) &&
                  (ue = null))
              : ((Z = null), (ue = V)),
            Z !== ue)
          ) {
            if (
              ((ge = Qu),
              (W = "onMouseLeave"),
              (R = "onMouseEnter"),
              (D = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ge = Ju),
                (W = "onPointerLeave"),
                (R = "onPointerEnter"),
                (D = "pointer")),
              (He = Z == null ? k : Ls(Z)),
              (q = ue == null ? k : Ls(ue)),
              (k = new ge(W, D + "leave", Z, l, P)),
              (k.target = He),
              (k.relatedTarget = q),
              (W = null),
              Gl(P) === V &&
                ((ge = new ge(R, D + "enter", ue, l, P)),
                (ge.target = q),
                (ge.relatedTarget = He),
                (W = ge)),
              (He = W),
              Z && ue)
            )
              t: {
                for (ge = Gg, R = Z, D = ue, q = 0, W = R; W; W = ge(W)) q++;
                W = 0;
                for (var pe = D; pe; pe = ge(pe)) W++;
                for (; 0 < q - W; ) ((R = ge(R)), q--);
                for (; 0 < W - q; ) ((D = ge(D)), W--);
                for (; q--; ) {
                  if (R === D || (D !== null && R === D.alternate)) {
                    ge = R;
                    break t;
                  }
                  ((R = ge(R)), (D = ge(D)));
                }
                ge = null;
              }
            else ge = null;
            (Z !== null && Gh(I, k, Z, ge, !1),
              ue !== null && He !== null && Gh(I, He, ue, ge, !0));
          }
        }
        e: {
          if (
            ((k = V ? Ls(V) : window),
            (Z = k.nodeName && k.nodeName.toLowerCase()),
            Z === "select" || (Z === "input" && k.type === "file"))
          )
            var Ae = td;
          else if (Iu(k))
            if (ad) Ae = Kv;
            else {
              Ae = Fv;
              var he = Jv;
            }
          else
            ((Z = k.nodeName),
              !Z ||
              Z.toLowerCase() !== "input" ||
              (k.type !== "checkbox" && k.type !== "radio")
                ? V && Or(V.elementType) && (Ae = td)
                : (Ae = $v));
          if (Ae && (Ae = Ae(e, V))) {
            ed(I, Ae, l, P);
            break e;
          }
          (he && he(e, k, V),
            e === "focusout" &&
              V &&
              k.type === "number" &&
              V.memoizedProps.value != null &&
              Mr(k, "number", k.value));
        }
        switch (((he = V ? Ls(V) : window), e)) {
          case "focusin":
            (Iu(he) || he.contentEditable === "true") &&
              ((Fl = he), (kr = V), (Xs = null));
            break;
          case "focusout":
            Xs = kr = Fl = null;
            break;
          case "mousedown":
            Xr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Xr = !1), ud(I, l, P));
            break;
          case "selectionchange":
            if (Wv) break;
          case "keydown":
          case "keyup":
            ud(I, l, P);
        }
        var Ne;
        if (Gr)
          e: {
            switch (e) {
              case "compositionstart":
                var Me = "onCompositionStart";
                break e;
              case "compositionend":
                Me = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Me = "onCompositionUpdate";
                break e;
            }
            Me = void 0;
          }
        else
          Jl
            ? Pu(e, l) && (Me = "onCompositionEnd")
            : e === "keydown" &&
              l.keyCode === 229 &&
              (Me = "onCompositionStart");
        (Me &&
          (Fu &&
            l.locale !== "ko" &&
            (Jl || Me !== "onCompositionStart"
              ? Me === "onCompositionEnd" && Jl && (Ne = ku())
              : ((Ya = P),
                (Rr = "value" in Ya ? Ya.value : Ya.textContent),
                (Jl = !0))),
          (he = Vn(V, Me)),
          0 < he.length &&
            ((Me = new Zu(Me, e, null, l, P)),
            I.push({ event: Me, listeners: he }),
            Ne
              ? (Me.data = Ne)
              : ((Ne = Wu(l)), Ne !== null && (Me.data = Ne)))),
          (Ne = Yv ? kv(e, l) : Xv(e, l)) &&
            ((Me = Vn(V, "onBeforeInput")),
            0 < Me.length &&
              ((he = new Zu("onBeforeInput", "beforeinput", null, l, P)),
              I.push({ event: he, listeners: Me }),
              (he.data = Ne))),
          Lg(I, e, V, l, P));
      }
      Hh(I, t);
    });
  }
  function pi(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
  }
  function Vn(e, t) {
    for (var l = t + "Capture", i = []; e !== null; ) {
      var o = e,
        u = o.stateNode;
      if (
        ((o = o.tag),
        (o !== 5 && o !== 26 && o !== 27) ||
          u === null ||
          ((o = Bs(e, l)),
          o != null && i.unshift(pi(e, o, u)),
          (o = Bs(e, t)),
          o != null && i.push(pi(e, o, u))),
        e.tag === 3)
      )
        return i;
      e = e.return;
    }
    return [];
  }
  function Gg(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Gh(e, t, l, i, o) {
    for (var u = t._reactName, v = []; l !== null && l !== i; ) {
      var y = l,
        C = y.alternate,
        V = y.stateNode;
      if (((y = y.tag), C !== null && C === i)) break;
      ((y !== 5 && y !== 26 && y !== 27) ||
        V === null ||
        ((C = V),
        o
          ? ((V = Bs(l, u)), V != null && v.unshift(pi(l, V, C)))
          : o || ((V = Bs(l, u)), V != null && v.push(pi(l, V, C)))),
        (l = l.return));
    }
    v.length !== 0 && e.push({ event: t, listeners: v });
  }
  var qg = /\r\n?/g,
    Vg = /\u0000|\uFFFD/g;
  function qh(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        qg,
        `
`,
      )
      .replace(Vg, "");
  }
  function Vh(e, t) {
    return ((t = qh(t)), qh(e) === t);
  }
  function Be(e, t, l, i, o, u) {
    switch (l) {
      case "children":
        typeof i == "string"
          ? t === "body" || (t === "textarea" && i === "") || Xl(e, i)
          : (typeof i == "number" || typeof i == "bigint") &&
            t !== "body" &&
            Xl(e, "" + i);
        break;
      case "className":
        Xi(e, "class", i);
        break;
      case "tabIndex":
        Xi(e, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Xi(e, l, i);
        break;
      case "style":
        qu(e, i, u);
        break;
      case "data":
        if (t !== "object") {
          Xi(e, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "symbol" ||
          typeof i == "boolean"
        ) {
          e.removeAttribute(l);
          break;
        }
        ((i = Zi("" + i)), e.setAttribute(l, i));
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof u == "function" &&
            (l === "formAction"
              ? (t !== "input" && Be(e, t, "name", o.name, o, null),
                Be(e, t, "formEncType", o.formEncType, o, null),
                Be(e, t, "formMethod", o.formMethod, o, null),
                Be(e, t, "formTarget", o.formTarget, o, null))
              : (Be(e, t, "encType", o.encType, o, null),
                Be(e, t, "method", o.method, o, null),
                Be(e, t, "target", o.target, o, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          e.removeAttribute(l);
          break;
        }
        ((i = Zi("" + i)), e.setAttribute(l, i));
        break;
      case "onClick":
        i != null && (e.onclick = ga);
        break;
      case "onScroll":
        i != null && Ee("scroll", e);
        break;
      case "onScrollEnd":
        i != null && Ee("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(n(61));
          if (((l = i.__html), l != null)) {
            if (o.children != null) throw Error(n(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        e.muted = i && typeof i != "function" && typeof i != "symbol";
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
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "boolean" ||
          typeof i == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((l = Zi("" + i)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol"
          ? e.setAttribute(l, "" + i)
          : e.removeAttribute(l);
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
        i && typeof i != "function" && typeof i != "symbol"
          ? e.setAttribute(l, "")
          : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        i === !0
          ? e.setAttribute(l, "")
          : i !== !1 &&
              i != null &&
              typeof i != "function" &&
              typeof i != "symbol"
            ? e.setAttribute(l, i)
            : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        !isNaN(i) &&
        1 <= i
          ? e.setAttribute(l, i)
          : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i)
          ? e.removeAttribute(l)
          : e.setAttribute(l, i);
        break;
      case "popover":
        (Ee("beforetoggle", e), Ee("toggle", e), ki(e, "popover", i));
        break;
      case "xlinkActuate":
        va(e, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
        break;
      case "xlinkArcrole":
        va(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
        break;
      case "xlinkRole":
        va(e, "http://www.w3.org/1999/xlink", "xlink:role", i);
        break;
      case "xlinkShow":
        va(e, "http://www.w3.org/1999/xlink", "xlink:show", i);
        break;
      case "xlinkTitle":
        va(e, "http://www.w3.org/1999/xlink", "xlink:title", i);
        break;
      case "xlinkType":
        va(e, "http://www.w3.org/1999/xlink", "xlink:type", i);
        break;
      case "xmlBase":
        va(e, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
        break;
      case "xmlLang":
        va(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
        break;
      case "xmlSpace":
        va(e, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
        break;
      case "is":
        ki(e, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = pv.get(l) || l), ki(e, l, i));
    }
  }
  function vo(e, t, l, i, o, u) {
    switch (l) {
      case "style":
        qu(e, i, u);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(n(61));
          if (((l = i.__html), l != null)) {
            if (o.children != null) throw Error(n(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof i == "string"
          ? Xl(e, i)
          : (typeof i == "number" || typeof i == "bigint") && Xl(e, "" + i);
        break;
      case "onScroll":
        i != null && Ee("scroll", e);
        break;
      case "onScrollEnd":
        i != null && Ee("scrollend", e);
        break;
      case "onClick":
        i != null && (e.onclick = ga);
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
        if (!zu.hasOwnProperty(l))
          e: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((o = l.endsWith("Capture")),
              (t = l.slice(2, o ? l.length - 7 : void 0)),
              (u = e[Et] || null),
              (u = u != null ? u[l] : null),
              typeof u == "function" && e.removeEventListener(t, u, o),
              typeof i == "function")
            ) {
              (typeof u != "function" &&
                u !== null &&
                (l in e
                  ? (e[l] = null)
                  : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(t, i, o));
              break e;
            }
            l in e
              ? (e[l] = i)
              : i === !0
                ? e.setAttribute(l, "")
                : ki(e, l, i);
          }
    }
  }
  function xt(e, t, l) {
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
        (Ee("error", e), Ee("load", e));
        var i = !1,
          o = !1,
          u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var v = l[u];
            if (v != null)
              switch (u) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  o = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(n(137, t));
                default:
                  Be(e, t, u, v, l, null);
              }
          }
        (o && Be(e, t, "srcSet", l.srcSet, l, null),
          i && Be(e, t, "src", l.src, l, null));
        return;
      case "input":
        Ee("invalid", e);
        var y = (u = v = o = null),
          C = null,
          V = null;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var P = l[i];
            if (P != null)
              switch (i) {
                case "name":
                  o = P;
                  break;
                case "type":
                  v = P;
                  break;
                case "checked":
                  C = P;
                  break;
                case "defaultChecked":
                  V = P;
                  break;
                case "value":
                  u = P;
                  break;
                case "defaultValue":
                  y = P;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (P != null) throw Error(n(137, t));
                  break;
                default:
                  Be(e, t, i, P, l, null);
              }
          }
        Bu(e, u, y, C, V, v, o, !1);
        return;
      case "select":
        (Ee("invalid", e), (i = v = u = null));
        for (o in l)
          if (l.hasOwnProperty(o) && ((y = l[o]), y != null))
            switch (o) {
              case "value":
                u = y;
                break;
              case "defaultValue":
                v = y;
                break;
              case "multiple":
                i = y;
              default:
                Be(e, t, o, y, l, null);
            }
        ((t = u),
          (l = v),
          (e.multiple = !!i),
          t != null ? kl(e, !!i, t, !1) : l != null && kl(e, !!i, l, !0));
        return;
      case "textarea":
        (Ee("invalid", e), (u = o = i = null));
        for (v in l)
          if (l.hasOwnProperty(v) && ((y = l[v]), y != null))
            switch (v) {
              case "value":
                i = y;
                break;
              case "defaultValue":
                o = y;
                break;
              case "children":
                u = y;
                break;
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(n(91));
                break;
              default:
                Be(e, t, v, y, l, null);
            }
        Uu(e, i, o, u);
        return;
      case "option":
        for (C in l)
          l.hasOwnProperty(C) &&
            ((i = l[C]), i != null) &&
            (C === "selected"
              ? (e.selected =
                  i && typeof i != "function" && typeof i != "symbol")
              : Be(e, t, C, i, l, null));
        return;
      case "dialog":
        (Ee("beforetoggle", e),
          Ee("toggle", e),
          Ee("cancel", e),
          Ee("close", e));
        break;
      case "iframe":
      case "object":
        Ee("load", e);
        break;
      case "video":
      case "audio":
        for (i = 0; i < mi.length; i++) Ee(mi[i], e);
        break;
      case "image":
        (Ee("error", e), Ee("load", e));
        break;
      case "details":
        Ee("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (Ee("error", e), Ee("load", e));
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
        for (V in l)
          if (l.hasOwnProperty(V) && ((i = l[V]), i != null))
            switch (V) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(n(137, t));
              default:
                Be(e, t, V, i, l, null);
            }
        return;
      default:
        if (Or(t)) {
          for (P in l)
            l.hasOwnProperty(P) &&
              ((i = l[P]), i !== void 0 && vo(e, t, P, i, l, void 0));
          return;
        }
    }
    for (y in l)
      l.hasOwnProperty(y) && ((i = l[y]), i != null && Be(e, t, y, i, l, null));
  }
  function Yg(e, t, l, i) {
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
        var o = null,
          u = null,
          v = null,
          y = null,
          C = null,
          V = null,
          P = null;
        for (Z in l) {
          var I = l[Z];
          if (l.hasOwnProperty(Z) && I != null)
            switch (Z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                C = I;
              default:
                i.hasOwnProperty(Z) || Be(e, t, Z, null, i, I);
            }
        }
        for (var k in i) {
          var Z = i[k];
          if (((I = l[k]), i.hasOwnProperty(k) && (Z != null || I != null)))
            switch (k) {
              case "type":
                u = Z;
                break;
              case "name":
                o = Z;
                break;
              case "checked":
                V = Z;
                break;
              case "defaultChecked":
                P = Z;
                break;
              case "value":
                v = Z;
                break;
              case "defaultValue":
                y = Z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Z != null) throw Error(n(137, t));
                break;
              default:
                Z !== I && Be(e, t, k, Z, i, I);
            }
        }
        Cr(e, v, y, C, V, P, u, o);
        return;
      case "select":
        Z = v = y = k = null;
        for (u in l)
          if (((C = l[u]), l.hasOwnProperty(u) && C != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                Z = C;
              default:
                i.hasOwnProperty(u) || Be(e, t, u, null, i, C);
            }
        for (o in i)
          if (
            ((u = i[o]),
            (C = l[o]),
            i.hasOwnProperty(o) && (u != null || C != null))
          )
            switch (o) {
              case "value":
                k = u;
                break;
              case "defaultValue":
                y = u;
                break;
              case "multiple":
                v = u;
              default:
                u !== C && Be(e, t, o, u, i, C);
            }
        ((t = y),
          (l = v),
          (i = Z),
          k != null
            ? kl(e, !!l, k, !1)
            : !!i != !!l &&
              (t != null ? kl(e, !!l, t, !0) : kl(e, !!l, l ? [] : "", !1)));
        return;
      case "textarea":
        Z = k = null;
        for (y in l)
          if (
            ((o = l[y]),
            l.hasOwnProperty(y) && o != null && !i.hasOwnProperty(y))
          )
            switch (y) {
              case "value":
                break;
              case "children":
                break;
              default:
                Be(e, t, y, null, i, o);
            }
        for (v in i)
          if (
            ((o = i[v]),
            (u = l[v]),
            i.hasOwnProperty(v) && (o != null || u != null))
          )
            switch (v) {
              case "value":
                k = o;
                break;
              case "defaultValue":
                Z = o;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(n(91));
                break;
              default:
                o !== u && Be(e, t, v, o, i, u);
            }
        Hu(e, k, Z);
        return;
      case "option":
        for (var ue in l)
          ((k = l[ue]),
            l.hasOwnProperty(ue) &&
              k != null &&
              !i.hasOwnProperty(ue) &&
              (ue === "selected"
                ? (e.selected = !1)
                : Be(e, t, ue, null, i, k)));
        for (C in i)
          ((k = i[C]),
            (Z = l[C]),
            i.hasOwnProperty(C) &&
              k !== Z &&
              (k != null || Z != null) &&
              (C === "selected"
                ? (e.selected =
                    k && typeof k != "function" && typeof k != "symbol")
                : Be(e, t, C, k, i, Z)));
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
        for (var ge in l)
          ((k = l[ge]),
            l.hasOwnProperty(ge) &&
              k != null &&
              !i.hasOwnProperty(ge) &&
              Be(e, t, ge, null, i, k));
        for (V in i)
          if (
            ((k = i[V]),
            (Z = l[V]),
            i.hasOwnProperty(V) && k !== Z && (k != null || Z != null))
          )
            switch (V) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (k != null) throw Error(n(137, t));
                break;
              default:
                Be(e, t, V, k, i, Z);
            }
        return;
      default:
        if (Or(t)) {
          for (var He in l)
            ((k = l[He]),
              l.hasOwnProperty(He) &&
                k !== void 0 &&
                !i.hasOwnProperty(He) &&
                vo(e, t, He, void 0, i, k));
          for (P in i)
            ((k = i[P]),
              (Z = l[P]),
              !i.hasOwnProperty(P) ||
                k === Z ||
                (k === void 0 && Z === void 0) ||
                vo(e, t, P, k, i, Z));
          return;
        }
    }
    for (var R in l)
      ((k = l[R]),
        l.hasOwnProperty(R) &&
          k != null &&
          !i.hasOwnProperty(R) &&
          Be(e, t, R, null, i, k));
    for (I in i)
      ((k = i[I]),
        (Z = l[I]),
        !i.hasOwnProperty(I) ||
          k === Z ||
          (k == null && Z == null) ||
          Be(e, t, I, k, i, Z));
  }
  function Yh(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function kg() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, l = performance.getEntriesByType("resource"), i = 0;
        i < l.length;
        i++
      ) {
        var o = l[i],
          u = o.transferSize,
          v = o.initiatorType,
          y = o.duration;
        if (u && y && Yh(v)) {
          for (v = 0, y = o.responseEnd, i += 1; i < l.length; i++) {
            var C = l[i],
              V = C.startTime;
            if (V > y) break;
            var P = C.transferSize,
              I = C.initiatorType;
            P &&
              Yh(I) &&
              ((C = C.responseEnd), (v += P * (C < y ? 1 : (y - V) / (C - V))));
          }
          if ((--i, (t += (8 * (u + v)) / (o.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var go = null,
    xo = null;
  function Yn(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function kh(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Xh(e, t) {
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
  function jo(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var yo = null;
  function Xg() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === yo
        ? !1
        : ((yo = e), !0)
      : ((yo = null), !1);
  }
  var Qh = typeof setTimeout == "function" ? setTimeout : void 0,
    Qg = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Zh = typeof Promise == "function" ? Promise : void 0,
    Zg =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Zh < "u"
          ? function (e) {
              return Zh.resolve(null).then(e).catch(Jg);
            }
          : Qh;
  function Jg(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function il(e) {
    return e === "head";
  }
  function Jh(e, t) {
    var l = t,
      i = 0;
    do {
      var o = l.nextSibling;
      if ((e.removeChild(l), o && o.nodeType === 8))
        if (((l = o.data), l === "/$" || l === "/&")) {
          if (i === 0) {
            (e.removeChild(o), bs(t));
            return;
          }
          i--;
        } else if (
          l === "$" ||
          l === "$?" ||
          l === "$~" ||
          l === "$!" ||
          l === "&"
        )
          i++;
        else if (l === "html") vi(e.ownerDocument.documentElement);
        else if (l === "head") {
          ((l = e.ownerDocument.head), vi(l));
          for (var u = l.firstChild; u; ) {
            var v = u.nextSibling,
              y = u.nodeName;
            (u[Rs] ||
              y === "SCRIPT" ||
              y === "STYLE" ||
              (y === "LINK" && u.rel.toLowerCase() === "stylesheet") ||
              l.removeChild(u),
              (u = v));
          }
        } else l === "body" && vi(e.ownerDocument.body);
      l = o;
    } while (l);
    bs(t);
  }
  function Fh(e, t) {
    var l = e;
    e = 0;
    do {
      var i = l.nextSibling;
      if (
        (l.nodeType === 1
          ? t
            ? ((l._stashedDisplay = l.style.display),
              (l.style.display = "none"))
            : ((l.style.display = l._stashedDisplay || ""),
              l.getAttribute("style") === "" && l.removeAttribute("style"))
          : l.nodeType === 3 &&
            (t
              ? ((l._stashedText = l.nodeValue), (l.nodeValue = ""))
              : (l.nodeValue = l._stashedText || "")),
        i && i.nodeType === 8)
      )
        if (((l = i.data), l === "/$")) {
          if (e === 0) break;
          e--;
        } else (l !== "$" && l !== "$?" && l !== "$~" && l !== "$!") || e++;
      l = i;
    } while (l);
  }
  function bo(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (((t = t.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (bo(l), Tr(l));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function Fg(e, t, l, i) {
    for (; e.nodeType === 1; ) {
      var o = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (i) {
        if (!e[Rs])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((u = e.getAttribute("rel")),
                u === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== o.rel ||
                e.getAttribute("href") !==
                  (o.href == null || o.href === "" ? null : o.href) ||
                e.getAttribute("crossorigin") !==
                  (o.crossOrigin == null ? null : o.crossOrigin) ||
                e.getAttribute("title") !== (o.title == null ? null : o.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((u = e.getAttribute("src")),
                (u !== (o.src == null ? null : o.src) ||
                  e.getAttribute("type") !== (o.type == null ? null : o.type) ||
                  e.getAttribute("crossorigin") !==
                    (o.crossOrigin == null ? null : o.crossOrigin)) &&
                  u &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = o.name == null ? null : "" + o.name;
        if (o.type === "hidden" && e.getAttribute("name") === u) return e;
      } else return e;
      if (((e = Wt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function $g(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !l) ||
        ((e = Wt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function $h(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = Wt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function So(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function No(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function Kg(e, t) {
    var l = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || l.readyState !== "loading") t();
    else {
      var i = function () {
        (t(), l.removeEventListener("DOMContentLoaded", i));
      };
      (l.addEventListener("DOMContentLoaded", i), (e._reactRetry = i));
    }
  }
  function Wt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var wo = null;
  function Kh(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0) return Wt(e.nextSibling);
          t--;
        } else
          (l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Ph(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (t === 0) return e;
          t--;
        } else (l !== "/$" && l !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Wh(e, t, l) {
    switch (((t = Yn(l)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(n(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(n(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(n(454));
        return e;
      default:
        throw Error(n(451));
    }
  }
  function vi(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Tr(e);
  }
  var It = new Map(),
    Ih = new Set();
  function kn(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var _a = X.d;
  X.d = { f: Pg, r: Wg, D: Ig, C: ex, L: tx, m: ax, X: sx, S: lx, M: ix };
  function Pg() {
    var e = _a.f(),
      t = Rn();
    return e || t;
  }
  function Wg(e) {
    var t = ql(e);
    t !== null && t.tag === 5 && t.type === "form" ? vf(t) : _a.r(e);
  }
  var xs = typeof document > "u" ? null : document;
  function em(e, t, l) {
    var i = xs;
    if (i && typeof t == "string" && t) {
      var o = Qt(t);
      ((o = 'link[rel="' + e + '"][href="' + o + '"]'),
        typeof l == "string" && (o += '[crossorigin="' + l + '"]'),
        Ih.has(o) ||
          (Ih.add(o),
          (e = { rel: e, crossOrigin: l, href: t }),
          i.querySelector(o) === null &&
            ((t = i.createElement("link")),
            xt(t, "link", e),
            ct(t),
            i.head.appendChild(t))));
    }
  }
  function Ig(e) {
    (_a.D(e), em("dns-prefetch", e, null));
  }
  function ex(e, t) {
    (_a.C(e, t), em("preconnect", e, t));
  }
  function tx(e, t, l) {
    _a.L(e, t, l);
    var i = xs;
    if (i && e && t) {
      var o = 'link[rel="preload"][as="' + Qt(t) + '"]';
      t === "image" && l && l.imageSrcSet
        ? ((o += '[imagesrcset="' + Qt(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (o += '[imagesizes="' + Qt(l.imageSizes) + '"]'))
        : (o += '[href="' + Qt(e) + '"]');
      var u = o;
      switch (t) {
        case "style":
          u = js(e);
          break;
        case "script":
          u = ys(e);
      }
      It.has(u) ||
        ((e = g(
          {
            rel: "preload",
            href: t === "image" && l && l.imageSrcSet ? void 0 : e,
            as: t,
          },
          l,
        )),
        It.set(u, e),
        i.querySelector(o) !== null ||
          (t === "style" && i.querySelector(gi(u))) ||
          (t === "script" && i.querySelector(xi(u))) ||
          ((t = i.createElement("link")),
          xt(t, "link", e),
          ct(t),
          i.head.appendChild(t)));
    }
  }
  function ax(e, t) {
    _a.m(e, t);
    var l = xs;
    if (l && e) {
      var i = t && typeof t.as == "string" ? t.as : "script",
        o =
          'link[rel="modulepreload"][as="' + Qt(i) + '"][href="' + Qt(e) + '"]',
        u = o;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = ys(e);
      }
      if (
        !It.has(u) &&
        ((e = g({ rel: "modulepreload", href: e }, t)),
        It.set(u, e),
        l.querySelector(o) === null)
      ) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(xi(u))) return;
        }
        ((i = l.createElement("link")),
          xt(i, "link", e),
          ct(i),
          l.head.appendChild(i));
      }
    }
  }
  function lx(e, t, l) {
    _a.S(e, t, l);
    var i = xs;
    if (i && e) {
      var o = Vl(i).hoistableStyles,
        u = js(e);
      t = t || "default";
      var v = o.get(u);
      if (!v) {
        var y = { loading: 0, preload: null };
        if ((v = i.querySelector(gi(u)))) y.loading = 5;
        else {
          ((e = g({ rel: "stylesheet", href: e, "data-precedence": t }, l)),
            (l = It.get(u)) && To(e, l));
          var C = (v = i.createElement("link"));
          (ct(C),
            xt(C, "link", e),
            (C._p = new Promise(function (V, P) {
              ((C.onload = V), (C.onerror = P));
            })),
            C.addEventListener("load", function () {
              y.loading |= 1;
            }),
            C.addEventListener("error", function () {
              y.loading |= 2;
            }),
            (y.loading |= 4),
            Xn(v, t, i));
        }
        ((v = { type: "stylesheet", instance: v, count: 1, state: y }),
          o.set(u, v));
      }
    }
  }
  function sx(e, t) {
    _a.X(e, t);
    var l = xs;
    if (l && e) {
      var i = Vl(l).hoistableScripts,
        o = ys(e),
        u = i.get(o);
      u ||
        ((u = l.querySelector(xi(o))),
        u ||
          ((e = g({ src: e, async: !0 }, t)),
          (t = It.get(o)) && Eo(e, t),
          (u = l.createElement("script")),
          ct(u),
          xt(u, "link", e),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        i.set(o, u));
    }
  }
  function ix(e, t) {
    _a.M(e, t);
    var l = xs;
    if (l && e) {
      var i = Vl(l).hoistableScripts,
        o = ys(e),
        u = i.get(o);
      u ||
        ((u = l.querySelector(xi(o))),
        u ||
          ((e = g({ src: e, async: !0, type: "module" }, t)),
          (t = It.get(o)) && Eo(e, t),
          (u = l.createElement("script")),
          ct(u),
          xt(u, "link", e),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        i.set(o, u));
    }
  }
  function tm(e, t, l, i) {
    var o = (o = oe.current) ? kn(o) : null;
    if (!o) throw Error(n(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((t = js(l.href)),
            (l = Vl(o).hoistableStyles),
            (i = l.get(t)),
            i ||
              ((i = { type: "style", instance: null, count: 0, state: null }),
              l.set(t, i)),
            i)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          e = js(l.href);
          var u = Vl(o).hoistableStyles,
            v = u.get(e);
          if (
            (v ||
              ((o = o.ownerDocument || o),
              (v = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(e, v),
              (u = o.querySelector(gi(e))) &&
                !u._p &&
                ((v.instance = u), (v.state.loading = 5)),
              It.has(e) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                It.set(e, l),
                u || nx(o, e, l, v.state))),
            t && i === null)
          )
            throw Error(n(528, ""));
          return v;
        }
        if (t && i !== null) throw Error(n(529, ""));
        return null;
      case "script":
        return (
          (t = l.async),
          (l = l.src),
          typeof l == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = ys(l)),
              (l = Vl(o).hoistableScripts),
              (i = l.get(t)),
              i ||
                ((i = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(t, i)),
              i)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(n(444, e));
    }
  }
  function js(e) {
    return 'href="' + Qt(e) + '"';
  }
  function gi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function am(e) {
    return g({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function nx(e, t, l, i) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (i.loading = 1)
      : ((t = e.createElement("link")),
        (i.preload = t),
        t.addEventListener("load", function () {
          return (i.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (i.loading |= 2);
        }),
        xt(t, "link", l),
        ct(t),
        e.head.appendChild(t));
  }
  function ys(e) {
    return '[src="' + Qt(e) + '"]';
  }
  function xi(e) {
    return "script[async]" + e;
  }
  function lm(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var i = e.querySelector('style[data-href~="' + Qt(l.href) + '"]');
          if (i) return ((t.instance = i), ct(i), i);
          var o = g({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (i = (e.ownerDocument || e).createElement("style")),
            ct(i),
            xt(i, "style", o),
            Xn(i, l.precedence, e),
            (t.instance = i)
          );
        case "stylesheet":
          o = js(l.href);
          var u = e.querySelector(gi(o));
          if (u) return ((t.state.loading |= 4), (t.instance = u), ct(u), u);
          ((i = am(l)),
            (o = It.get(o)) && To(i, o),
            (u = (e.ownerDocument || e).createElement("link")),
            ct(u));
          var v = u;
          return (
            (v._p = new Promise(function (y, C) {
              ((v.onload = y), (v.onerror = C));
            })),
            xt(u, "link", i),
            (t.state.loading |= 4),
            Xn(u, l.precedence, e),
            (t.instance = u)
          );
        case "script":
          return (
            (u = ys(l.src)),
            (o = e.querySelector(xi(u)))
              ? ((t.instance = o), ct(o), o)
              : ((i = l),
                (o = It.get(u)) && ((i = g({}, l)), Eo(i, o)),
                (e = e.ownerDocument || e),
                (o = e.createElement("script")),
                ct(o),
                xt(o, "link", i),
                e.head.appendChild(o),
                (t.instance = o))
          );
        case "void":
          return null;
        default:
          throw Error(n(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((i = t.instance), (t.state.loading |= 4), Xn(i, l.precedence, e));
    return t.instance;
  }
  function Xn(e, t, l) {
    for (
      var i = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        o = i.length ? i[i.length - 1] : null,
        u = o,
        v = 0;
      v < i.length;
      v++
    ) {
      var y = i[v];
      if (y.dataset.precedence === t) u = y;
      else if (u !== o) break;
    }
    u
      ? u.parentNode.insertBefore(e, u.nextSibling)
      : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
  }
  function To(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function Eo(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Qn = null;
  function sm(e, t, l) {
    if (Qn === null) {
      var i = new Map(),
        o = (Qn = new Map());
      o.set(l, i);
    } else ((o = Qn), (i = o.get(l)), i || ((i = new Map()), o.set(l, i)));
    if (i.has(e)) return i;
    for (
      i.set(e, null), l = l.getElementsByTagName(e), o = 0;
      o < l.length;
      o++
    ) {
      var u = l[o];
      if (
        !(
          u[Rs] ||
          u[mt] ||
          (e === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var v = u.getAttribute(t) || "";
        v = e + v;
        var y = i.get(v);
        y ? y.push(u) : i.set(v, [u]);
      }
    }
    return i;
  }
  function im(e, t, l) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        l,
        t === "title" ? e.querySelector("head > title") : null,
      ));
  }
  function rx(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        return t.rel === "stylesheet"
          ? ((e = t.disabled), typeof t.precedence == "string" && e == null)
          : !0;
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function nm(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function cx(e, t, l, i) {
    if (
      l.type === "stylesheet" &&
      (typeof i.media != "string" || matchMedia(i.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var o = js(i.href),
          u = t.querySelector(gi(o));
        if (u) {
          ((t = u._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = Zn.bind(e)), t.then(e, e)),
            (l.state.loading |= 4),
            (l.instance = u),
            ct(u));
          return;
        }
        ((u = t.ownerDocument || t),
          (i = am(i)),
          (o = It.get(o)) && To(i, o),
          (u = u.createElement("link")),
          ct(u));
        var v = u;
        ((v._p = new Promise(function (y, C) {
          ((v.onload = y), (v.onerror = C));
        })),
          xt(u, "link", i),
          (l.instance = u));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(l, t),
        (t = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (e.count++,
          (l = Zn.bind(e)),
          t.addEventListener("load", l),
          t.addEventListener("error", l)));
    }
  }
  var Co = 0;
  function ox(e, t) {
    return (
      e.stylesheets && e.count === 0 && Fn(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (l) {
            var i = setTimeout(function () {
              if ((e.stylesheets && Fn(e, e.stylesheets), e.unsuspend)) {
                var u = e.unsuspend;
                ((e.unsuspend = null), u());
              }
            }, 6e4 + t);
            0 < e.imgBytes && Co === 0 && (Co = 62500 * kg());
            var o = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && Fn(e, e.stylesheets), e.unsuspend))
                ) {
                  var u = e.unsuspend;
                  ((e.unsuspend = null), u());
                }
              },
              (e.imgBytes > Co ? 50 : 800) + t,
            );
            return (
              (e.unsuspend = l),
              function () {
                ((e.unsuspend = null), clearTimeout(i), clearTimeout(o));
              }
            );
          }
        : null
    );
  }
  function Zn() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Fn(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var Jn = null;
  function Fn(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Jn = new Map()),
        t.forEach(ux, e),
        (Jn = null),
        Zn.call(e)));
  }
  function ux(e, t) {
    if (!(t.state.loading & 4)) {
      var l = Jn.get(e);
      if (l) var i = l.get(null);
      else {
        ((l = new Map()), Jn.set(e, l));
        for (
          var o = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            u = 0;
          u < o.length;
          u++
        ) {
          var v = o[u];
          (v.nodeName === "LINK" || v.getAttribute("media") !== "not all") &&
            (l.set(v.dataset.precedence, v), (i = v));
        }
        i && l.set(null, i);
      }
      ((o = t.instance),
        (v = o.getAttribute("data-precedence")),
        (u = l.get(v) || i),
        u === i && l.set(null, o),
        l.set(v, o),
        this.count++,
        (i = Zn.bind(this)),
        o.addEventListener("load", i),
        o.addEventListener("error", i),
        u
          ? u.parentNode.insertBefore(o, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(o, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var ji = {
    $$typeof: z,
    Provider: null,
    Consumer: null,
    _currentValue: Q,
    _currentValue2: Q,
    _threadCount: 0,
  };
  function dx(e, t, l, i, o, u, v, y, C) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = br(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = br(0)),
      (this.hiddenUpdates = br(null)),
      (this.identifierPrefix = i),
      (this.onUncaughtError = o),
      (this.onCaughtError = u),
      (this.onRecoverableError = v),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = C),
      (this.incompleteTransitions = new Map()));
  }
  function rm(e, t, l, i, o, u, v, y, C, V, P, I) {
    return (
      (e = new dx(e, t, l, v, C, V, P, I, y)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = Lt(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = ic()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: i, isDehydrated: l, cache: t }),
      oc(u),
      e
    );
  }
  function cm(e) {
    return e ? ((e = Pl), e) : Pl;
  }
  function om(e, t, l, i, o, u) {
    ((o = cm(o)),
      i.context === null ? (i.context = o) : (i.pendingContext = o),
      (i = Fa(t)),
      (i.payload = { element: l }),
      (u = u === void 0 ? null : u),
      u !== null && (i.callback = u),
      (l = $a(e, i, t)),
      l !== null && (Dt(l, e, t), Ps(l, e, t)));
  }
  function um(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function Mo(e, t) {
    (um(e, t), (e = e.alternate) && um(e, t));
  }
  function dm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = bl(e, 67108864);
      (t !== null && Dt(t, e, 67108864), Mo(e, 67108864));
    }
  }
  function fm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = qt();
      t = Sr(t);
      var l = bl(e, t);
      (l !== null && Dt(l, e, t), Mo(e, t));
    }
  }
  var $n = !0;
  function fx(e, t, l, i) {
    var o = U.T;
    U.T = null;
    var u = X.p;
    try {
      ((X.p = 2), Oo(e, t, l, i));
    } finally {
      ((X.p = u), (U.T = o));
    }
  }
  function hx(e, t, l, i) {
    var o = U.T;
    U.T = null;
    var u = X.p;
    try {
      ((X.p = 8), Oo(e, t, l, i));
    } finally {
      ((X.p = u), (U.T = o));
    }
  }
  function Oo(e, t, l, i) {
    if ($n) {
      var o = Ao(i);
      if (o === null) (po(e, t, i, Kn, l), mm(e, i));
      else if (px(o, e, t, l, i)) i.stopPropagation();
      else if ((mm(e, i), t & 4 && -1 < mx.indexOf(e))) {
        for (; o !== null; ) {
          var u = ql(o);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var v = kt(u.pendingLanes);
                  if (v !== 0) {
                    var y = u;
                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; v; ) {
                      var C = 1 << (31 - ht(v));
                      ((y.entanglements[1] |= C), (v &= ~C));
                    }
                    (fa(u), (De & 6) === 0 && ((Dn = yt() + 500), hi(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((y = bl(u, 2)), y !== null && Dt(y, u, 2), Rn(), Mo(u, 2));
            }
          if (((u = Ao(i)), u === null && po(e, t, i, Kn, l), u === o)) break;
          o = u;
        }
        o !== null && i.stopPropagation();
      } else po(e, t, i, null, l);
    }
  }
  function Ao(e) {
    return ((e = zr(e)), zo(e));
  }
  var Kn = null;
  function zo(e) {
    if (((Kn = null), (e = Gl(e)), e !== null)) {
      var t = d(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (((e = p(t)), e !== null)) return e;
          e = null;
        } else if (l === 31) {
          if (((e = x(t)), e !== null)) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((Kn = e), null);
  }
  function hm(e) {
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
        switch (Ds()) {
          case Y:
            return 2;
          case re:
            return 8;
          case ye:
          case ke:
            return 32;
          case $e:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Do = !1,
    nl = null,
    rl = null,
    cl = null,
    yi = new Map(),
    bi = new Map(),
    ol = [],
    mx =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function mm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        nl = null;
        break;
      case "dragenter":
      case "dragleave":
        rl = null;
        break;
      case "mouseover":
      case "mouseout":
        cl = null;
        break;
      case "pointerover":
      case "pointerout":
        yi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        bi.delete(t.pointerId);
    }
  }
  function Si(e, t, l, i, o, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: i,
          nativeEvent: u,
          targetContainers: [o],
        }),
        t !== null && ((t = ql(t)), t !== null && dm(t)),
        e)
      : ((e.eventSystemFlags |= i),
        (t = e.targetContainers),
        o !== null && t.indexOf(o) === -1 && t.push(o),
        e);
  }
  function px(e, t, l, i, o) {
    switch (t) {
      case "focusin":
        return ((nl = Si(nl, e, t, l, i, o)), !0);
      case "dragenter":
        return ((rl = Si(rl, e, t, l, i, o)), !0);
      case "mouseover":
        return ((cl = Si(cl, e, t, l, i, o)), !0);
      case "pointerover":
        var u = o.pointerId;
        return (yi.set(u, Si(yi.get(u) || null, e, t, l, i, o)), !0);
      case "gotpointercapture":
        return (
          (u = o.pointerId),
          bi.set(u, Si(bi.get(u) || null, e, t, l, i, o)),
          !0
        );
    }
    return !1;
  }
  function pm(e) {
    var t = Gl(e.target);
    if (t !== null) {
      var l = d(t);
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = p(l)), t !== null)) {
            ((e.blockedOn = t),
              Mu(e.priority, function () {
                fm(l);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = x(l)), t !== null)) {
            ((e.blockedOn = t),
              Mu(e.priority, function () {
                fm(l);
              }));
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Pn(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = Ao(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var i = new l.constructor(l.type, l);
        ((Ar = i), l.target.dispatchEvent(i), (Ar = null));
      } else return ((t = ql(l)), t !== null && dm(t), (e.blockedOn = l), !1);
      t.shift();
    }
    return !0;
  }
  function vm(e, t, l) {
    Pn(e) && l.delete(t);
  }
  function vx() {
    ((Do = !1),
      nl !== null && Pn(nl) && (nl = null),
      rl !== null && Pn(rl) && (rl = null),
      cl !== null && Pn(cl) && (cl = null),
      yi.forEach(vm),
      bi.forEach(vm));
  }
  function Wn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Do ||
        ((Do = !0),
        s.unstable_scheduleCallback(s.unstable_NormalPriority, vx)));
  }
  var In = null;
  function gm(e) {
    In !== e &&
      ((In = e),
      s.unstable_scheduleCallback(s.unstable_NormalPriority, function () {
        In === e && (In = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            i = e[t + 1],
            o = e[t + 2];
          if (typeof i != "function") {
            if (zo(i || l) === null) continue;
            break;
          }
          var u = ql(l);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Oc(u, { pending: !0, data: o, method: l.method, action: i }, i, o));
        }
      }));
  }
  function bs(e) {
    function t(C) {
      return Wn(C, e);
    }
    (nl !== null && Wn(nl, e),
      rl !== null && Wn(rl, e),
      cl !== null && Wn(cl, e),
      yi.forEach(t),
      bi.forEach(t));
    for (var l = 0; l < ol.length; l++) {
      var i = ol[l];
      i.blockedOn === e && (i.blockedOn = null);
    }
    for (; 0 < ol.length && ((l = ol[0]), l.blockedOn === null); )
      (pm(l), l.blockedOn === null && ol.shift());
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (i = 0; i < l.length; i += 3) {
        var o = l[i],
          u = l[i + 1],
          v = o[Et] || null;
        if (typeof u == "function") v || gm(l);
        else if (v) {
          var y = null;
          if (u && u.hasAttribute("formAction")) {
            if (((o = u), (v = u[Et] || null))) y = v.formAction;
            else if (zo(o) !== null) continue;
          } else y = v.action;
          (typeof y == "function" ? (l[i + 1] = y) : (l.splice(i, 3), (i -= 3)),
            gm(l));
        }
      }
  }
  function xm() {
    function e(u) {
      u.canIntercept &&
        u.info === "react-transition" &&
        u.intercept({
          handler: function () {
            return new Promise(function (v) {
              return (o = v);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (o !== null && (o(), (o = null)), i || setTimeout(l, 20));
    }
    function l() {
      if (!i && !navigation.transition) {
        var u = navigation.currentEntry;
        u &&
          u.url != null &&
          navigation.navigate(u.url, {
            state: u.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var i = !1,
        o = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(l, 100),
        function () {
          ((i = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            o !== null && (o(), (o = null)));
        }
      );
    }
  }
  function _o(e) {
    this._internalRoot = e;
  }
  ((er.prototype.render = _o.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(n(409));
      var l = t.current,
        i = qt();
      om(l, i, e, t, null, null);
    }),
    (er.prototype.unmount = _o.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (om(e.current, 2, null, e, null, null), Rn(), (t[Ul] = null));
        }
      }));
  function er(e) {
    this._internalRoot = e;
  }
  er.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Cu();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < ol.length && t !== 0 && t < ol[l].priority; l++);
      (ol.splice(l, 0, e), l === 0 && pm(e));
    }
  };
  var jm = c.version;
  if (jm !== "19.2.4") throw Error(n(527, jm, "19.2.4"));
  X.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(n(188))
        : ((e = Object.keys(e).join(",")), Error(n(268, e)));
    return (
      (e = m(t)),
      (e = e !== null ? j(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var gx = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: U,
    reconcilerVersion: "19.2.4",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var tr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!tr.isDisabled && tr.supportsFiber)
      try {
        ((it = tr.inject(gx)), (qe = tr));
      } catch {}
  }
  return (
    (wi.createRoot = function (e, t) {
      if (!f(e)) throw Error(n(299));
      var l = !1,
        i = "",
        o = Ef,
        u = Cf,
        v = Mf;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (o = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (v = t.onRecoverableError)),
        (t = rm(e, 1, !1, null, null, l, i, null, o, u, v, xm)),
        (e[Ul] = t.current),
        mo(e),
        new _o(t)
      );
    }),
    (wi.hydrateRoot = function (e, t, l) {
      if (!f(e)) throw Error(n(299));
      var i = !1,
        o = "",
        u = Ef,
        v = Cf,
        y = Mf,
        C = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (i = !0),
          l.identifierPrefix !== void 0 && (o = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (v = l.onCaughtError),
          l.onRecoverableError !== void 0 && (y = l.onRecoverableError),
          l.formState !== void 0 && (C = l.formState)),
        (t = rm(e, 1, !0, t, l ?? null, i, o, C, u, v, y, xm)),
        (t.context = cm(null)),
        (l = t.current),
        (i = qt()),
        (i = Sr(i)),
        (o = Fa(i)),
        (o.callback = null),
        $a(l, o, i),
        (l = i),
        (t.current.lanes = l),
        _s(t, l),
        fa(t),
        (e[Ul] = t.current),
        mo(e),
        new er(t)
      );
    }),
    (wi.version = "19.2.4"),
    wi
  );
}
var Om;
function Ex() {
  if (Om) return Lo.exports;
  Om = 1;
  function s() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (c) {
        console.error(c);
      }
  }
  return (s(), (Lo.exports = Tx()), Lo.exports);
}
var Cx = Ex(),
  H = hr();
const rt = fr(H);
var Am = "popstate";
function Mx(s = {}) {
  function c(n, f) {
    let { pathname: d, search: p, hash: x } = n.location;
    return Wo(
      "",
      { pathname: d, search: p, hash: x },
      (f.state && f.state.usr) || null,
      (f.state && f.state.key) || "default",
    );
  }
  function r(n, f) {
    return typeof f == "string" ? f : zi(f);
  }
  return Ax(c, r, null, s);
}
function Ze(s, c) {
  if (s === !1 || s === null || typeof s > "u") throw new Error(c);
}
function ha(s, c) {
  if (!s) {
    typeof console < "u" && console.warn(c);
    try {
      throw new Error(c);
    } catch {}
  }
}
function Ox() {
  return Math.random().toString(36).substring(2, 10);
}
function zm(s, c) {
  return { usr: s.state, key: s.key, idx: c };
}
function Wo(s, c, r = null, n) {
  return {
    pathname: typeof s == "string" ? s : s.pathname,
    search: "",
    hash: "",
    ...(typeof c == "string" ? ws(c) : c),
    state: r,
    key: (c && c.key) || n || Ox(),
  };
}
function zi({ pathname: s = "/", search: c = "", hash: r = "" }) {
  return (
    c && c !== "?" && (s += c.charAt(0) === "?" ? c : "?" + c),
    r && r !== "#" && (s += r.charAt(0) === "#" ? r : "#" + r),
    s
  );
}
function ws(s) {
  let c = {};
  if (s) {
    let r = s.indexOf("#");
    r >= 0 && ((c.hash = s.substring(r)), (s = s.substring(0, r)));
    let n = s.indexOf("?");
    (n >= 0 && ((c.search = s.substring(n)), (s = s.substring(0, n))),
      s && (c.pathname = s));
  }
  return c;
}
function Ax(s, c, r, n = {}) {
  let { window: f = document.defaultView, v5Compat: d = !1 } = n,
    p = f.history,
    x = "POP",
    h = null,
    m = j();
  m == null && ((m = 0), p.replaceState({ ...p.state, idx: m }, ""));
  function j() {
    return (p.state || { idx: null }).idx;
  }
  function g() {
    x = "POP";
    let A = j(),
      S = A == null ? null : A - m;
    ((m = A), h && h({ action: x, location: M.location, delta: S }));
  }
  function N(A, S) {
    x = "PUSH";
    let w = Wo(M.location, A, S);
    m = j() + 1;
    let z = zm(w, m),
      J = M.createHref(w);
    try {
      p.pushState(z, "", J);
    } catch ($) {
      if ($ instanceof DOMException && $.name === "DataCloneError") throw $;
      f.location.assign(J);
    }
    d && h && h({ action: x, location: M.location, delta: 1 });
  }
  function b(A, S) {
    x = "REPLACE";
    let w = Wo(M.location, A, S);
    m = j();
    let z = zm(w, m),
      J = M.createHref(w);
    (p.replaceState(z, "", J),
      d && h && h({ action: x, location: M.location, delta: 0 }));
  }
  function E(A) {
    return zx(A);
  }
  let M = {
    get action() {
      return x;
    },
    get location() {
      return s(f, p);
    },
    listen(A) {
      if (h) throw new Error("A history only accepts one active listener");
      return (
        f.addEventListener(Am, g),
        (h = A),
        () => {
          (f.removeEventListener(Am, g), (h = null));
        }
      );
    },
    createHref(A) {
      return c(f, A);
    },
    createURL: E,
    encodeLocation(A) {
      let S = E(A);
      return { pathname: S.pathname, search: S.search, hash: S.hash };
    },
    push: N,
    replace: b,
    go(A) {
      return p.go(A);
    },
  };
  return M;
}
function zx(s, c = !1) {
  let r = "http://localhost";
  (typeof window < "u" &&
    (r =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    Ze(r, "No window.location.(origin|href) available to create URL"));
  let n = typeof s == "string" ? s : zi(s);
  return (
    (n = n.replace(/ $/, "%20")),
    !c && n.startsWith("//") && (n = r + n),
    new URL(n, r)
  );
}
function cp(s, c, r = "/") {
  return Dx(s, c, r, !1);
}
function Dx(s, c, r, n) {
  let f = typeof c == "string" ? ws(c) : c,
    d = Ha(f.pathname || "/", r);
  if (d == null) return null;
  let p = op(s);
  _x(p);
  let x = null;
  for (let h = 0; x == null && h < p.length; ++h) {
    let m = Xx(d);
    x = Yx(p[h], m, n);
  }
  return x;
}
function op(s, c = [], r = [], n = "", f = !1) {
  let d = (p, x, h = f, m) => {
    let j = {
      relativePath: m === void 0 ? p.path || "" : m,
      caseSensitive: p.caseSensitive === !0,
      childrenIndex: x,
      route: p,
    };
    if (j.relativePath.startsWith("/")) {
      if (!j.relativePath.startsWith(n) && h) return;
      (Ze(
        j.relativePath.startsWith(n),
        `Absolute route path "${j.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (j.relativePath = j.relativePath.slice(n.length)));
    }
    let g = Ba([n, j.relativePath]),
      N = r.concat(j);
    (p.children &&
      p.children.length > 0 &&
      (Ze(
        p.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${g}".`,
      ),
      op(p.children, c, N, g, h)),
      !(p.path == null && !p.index) &&
        c.push({ path: g, score: qx(g, p.index), routesMeta: N }));
  };
  return (
    s.forEach((p, x) => {
      if (p.path === "" || !p.path?.includes("?")) d(p, x);
      else for (let h of up(p.path)) d(p, x, !0, h);
    }),
    c
  );
}
function up(s) {
  let c = s.split("/");
  if (c.length === 0) return [];
  let [r, ...n] = c,
    f = r.endsWith("?"),
    d = r.replace(/\?$/, "");
  if (n.length === 0) return f ? [d, ""] : [d];
  let p = up(n.join("/")),
    x = [];
  return (
    x.push(...p.map((h) => (h === "" ? d : [d, h].join("/")))),
    f && x.push(...p),
    x.map((h) => (s.startsWith("/") && h === "" ? "/" : h))
  );
}
function _x(s) {
  s.sort((c, r) =>
    c.score !== r.score
      ? r.score - c.score
      : Vx(
          c.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex),
        ),
  );
}
var Rx = /^:[\w-]+$/,
  Lx = 3,
  Bx = 2,
  Hx = 1,
  Ux = 10,
  Gx = -2,
  Dm = (s) => s === "*";
function qx(s, c) {
  let r = s.split("/"),
    n = r.length;
  return (
    r.some(Dm) && (n += Gx),
    c && (n += Bx),
    r
      .filter((f) => !Dm(f))
      .reduce((f, d) => f + (Rx.test(d) ? Lx : d === "" ? Hx : Ux), n)
  );
}
function Vx(s, c) {
  return s.length === c.length && s.slice(0, -1).every((n, f) => n === c[f])
    ? s[s.length - 1] - c[c.length - 1]
    : 0;
}
function Yx(s, c, r = !1) {
  let { routesMeta: n } = s,
    f = {},
    d = "/",
    p = [];
  for (let x = 0; x < n.length; ++x) {
    let h = n[x],
      m = x === n.length - 1,
      j = d === "/" ? c : c.slice(d.length) || "/",
      g = cr(
        { path: h.relativePath, caseSensitive: h.caseSensitive, end: m },
        j,
      ),
      N = h.route;
    if (
      (!g &&
        m &&
        r &&
        !n[n.length - 1].route.index &&
        (g = cr(
          { path: h.relativePath, caseSensitive: h.caseSensitive, end: !1 },
          j,
        )),
      !g)
    )
      return null;
    (Object.assign(f, g.params),
      p.push({
        params: f,
        pathname: Ba([d, g.pathname]),
        pathnameBase: Fx(Ba([d, g.pathnameBase])),
        route: N,
      }),
      g.pathnameBase !== "/" && (d = Ba([d, g.pathnameBase])));
  }
  return p;
}
function cr(s, c) {
  typeof s == "string" && (s = { path: s, caseSensitive: !1, end: !0 });
  let [r, n] = kx(s.path, s.caseSensitive, s.end),
    f = c.match(r);
  if (!f) return null;
  let d = f[0],
    p = d.replace(/(.)\/+$/, "$1"),
    x = f.slice(1);
  return {
    params: n.reduce((m, { paramName: j, isOptional: g }, N) => {
      if (j === "*") {
        let E = x[N] || "";
        p = d.slice(0, d.length - E.length).replace(/(.)\/+$/, "$1");
      }
      const b = x[N];
      return (
        g && !b ? (m[j] = void 0) : (m[j] = (b || "").replace(/%2F/g, "/")),
        m
      );
    }, {}),
    pathname: d,
    pathnameBase: p,
    pattern: s,
  };
}
function kx(s, c = !1, r = !0) {
  ha(
    s === "*" || !s.endsWith("*") || s.endsWith("/*"),
    `Route path "${s}" will be treated as if it were "${s.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/, "/*")}".`,
  );
  let n = [],
    f =
      "^" +
      s
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (p, x, h) => (
            n.push({ paramName: x, isOptional: h != null }),
            h ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    s.endsWith("*")
      ? (n.push({ paramName: "*" }),
        (f += s === "*" || s === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
        ? (f += "\\/*$")
        : s !== "" && s !== "/" && (f += "(?:(?=\\/|$))"),
    [new RegExp(f, c ? void 0 : "i"), n]
  );
}
function Xx(s) {
  try {
    return s
      .split("/")
      .map((c) => decodeURIComponent(c).replace(/\//g, "%2F"))
      .join("/");
  } catch (c) {
    return (
      ha(
        !1,
        `The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`,
      ),
      s
    );
  }
}
function Ha(s, c) {
  if (c === "/") return s;
  if (!s.toLowerCase().startsWith(c.toLowerCase())) return null;
  let r = c.endsWith("/") ? c.length - 1 : c.length,
    n = s.charAt(r);
  return n && n !== "/" ? null : s.slice(r) || "/";
}
var Qx = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Zx(s, c = "/") {
  let {
      pathname: r,
      search: n = "",
      hash: f = "",
    } = typeof s == "string" ? ws(s) : s,
    d;
  return (
    r
      ? ((r = r.replace(/\/\/+/g, "/")),
        r.startsWith("/") ? (d = _m(r.substring(1), "/")) : (d = _m(r, c)))
      : (d = c),
    { pathname: d, search: $x(n), hash: Kx(f) }
  );
}
function _m(s, c) {
  let r = c.replace(/\/+$/, "").split("/");
  return (
    s.split("/").forEach((f) => {
      f === ".." ? r.length > 1 && r.pop() : f !== "." && r.push(f);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function qo(s, c, r, n) {
  return `Cannot include a '${s}' character in a manually specified \`to.${c}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Jx(s) {
  return s.filter(
    (c, r) => r === 0 || (c.route.path && c.route.path.length > 0),
  );
}
function dp(s) {
  let c = Jx(s);
  return c.map((r, n) => (n === c.length - 1 ? r.pathname : r.pathnameBase));
}
function fp(s, c, r, n = !1) {
  let f;
  typeof s == "string"
    ? (f = ws(s))
    : ((f = { ...s }),
      Ze(
        !f.pathname || !f.pathname.includes("?"),
        qo("?", "pathname", "search", f),
      ),
      Ze(
        !f.pathname || !f.pathname.includes("#"),
        qo("#", "pathname", "hash", f),
      ),
      Ze(!f.search || !f.search.includes("#"), qo("#", "search", "hash", f)));
  let d = s === "" || f.pathname === "",
    p = d ? "/" : f.pathname,
    x;
  if (p == null) x = r;
  else {
    let g = c.length - 1;
    if (!n && p.startsWith("..")) {
      let N = p.split("/");
      for (; N[0] === ".."; ) (N.shift(), (g -= 1));
      f.pathname = N.join("/");
    }
    x = g >= 0 ? c[g] : "/";
  }
  let h = Zx(f, x),
    m = p && p !== "/" && p.endsWith("/"),
    j = (d || p === ".") && r.endsWith("/");
  return (!h.pathname.endsWith("/") && (m || j) && (h.pathname += "/"), h);
}
var Ba = (s) => s.join("/").replace(/\/\/+/g, "/"),
  Fx = (s) => s.replace(/\/+$/, "").replace(/^\/*/, "/"),
  $x = (s) => (!s || s === "?" ? "" : s.startsWith("?") ? s : "?" + s),
  Kx = (s) => (!s || s === "#" ? "" : s.startsWith("#") ? s : "#" + s),
  Px = class {
    constructor(s, c, r, n = !1) {
      ((this.status = s),
        (this.statusText = c || ""),
        (this.internal = n),
        r instanceof Error
          ? ((this.data = r.toString()), (this.error = r))
          : (this.data = r));
    }
  };
function Wx(s) {
  return (
    s != null &&
    typeof s.status == "number" &&
    typeof s.statusText == "string" &&
    typeof s.internal == "boolean" &&
    "data" in s
  );
}
function Ix(s) {
  return (
    s
      .map((c) => c.route.path)
      .filter(Boolean)
      .join("/")
      .replace(/\/\/*/g, "/") || "/"
  );
}
var hp =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
function mp(s, c) {
  let r = s;
  if (typeof r != "string" || !Qx.test(r))
    return { absoluteURL: void 0, isExternal: !1, to: r };
  let n = r,
    f = !1;
  if (hp)
    try {
      let d = new URL(window.location.href),
        p = r.startsWith("//") ? new URL(d.protocol + r) : new URL(r),
        x = Ha(p.pathname, c);
      p.origin === d.origin && x != null
        ? (r = x + p.search + p.hash)
        : (f = !0);
    } catch {
      ha(
        !1,
        `<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
      );
    }
  return { absoluteURL: n, isExternal: f, to: r };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var pp = ["POST", "PUT", "PATCH", "DELETE"];
new Set(pp);
var ej = ["GET", ...pp];
new Set(ej);
var Ts = H.createContext(null);
Ts.displayName = "DataRouter";
var mr = H.createContext(null);
mr.displayName = "DataRouterState";
var tj = H.createContext(!1),
  vp = H.createContext({ isTransitioning: !1 });
vp.displayName = "ViewTransition";
var aj = H.createContext(new Map());
aj.displayName = "Fetchers";
var lj = H.createContext(null);
lj.displayName = "Await";
var ea = H.createContext(null);
ea.displayName = "Navigation";
var Ri = H.createContext(null);
Ri.displayName = "Location";
var ma = H.createContext({ outlet: null, matches: [], isDataRoute: !1 });
ma.displayName = "Route";
var ru = H.createContext(null);
ru.displayName = "RouteError";
var gp = "REACT_ROUTER_ERROR",
  sj = "REDIRECT",
  ij = "ROUTE_ERROR_RESPONSE";
function nj(s) {
  if (s.startsWith(`${gp}:${sj}:{`))
    try {
      let c = JSON.parse(s.slice(28));
      if (
        typeof c == "object" &&
        c &&
        typeof c.status == "number" &&
        typeof c.statusText == "string" &&
        typeof c.location == "string" &&
        typeof c.reloadDocument == "boolean" &&
        typeof c.replace == "boolean"
      )
        return c;
    } catch {}
}
function rj(s) {
  if (s.startsWith(`${gp}:${ij}:{`))
    try {
      let c = JSON.parse(s.slice(40));
      if (
        typeof c == "object" &&
        c &&
        typeof c.status == "number" &&
        typeof c.statusText == "string"
      )
        return new Px(c.status, c.statusText, c.data);
    } catch {}
}
function cj(s, { relative: c } = {}) {
  Ze(
    Li(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: r, navigator: n } = H.useContext(ea),
    { hash: f, pathname: d, search: p } = Bi(s, { relative: c }),
    x = d;
  return (
    r !== "/" && (x = d === "/" ? r : Ba([r, d])),
    n.createHref({ pathname: x, search: p, hash: f })
  );
}
function Li() {
  return H.useContext(Ri) != null;
}
function Ga() {
  return (
    Ze(
      Li(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    H.useContext(Ri).location
  );
}
var xp =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function jp(s) {
  H.useContext(ea).static || H.useLayoutEffect(s);
}
function oj() {
  let { isDataRoute: s } = H.useContext(ma);
  return s ? wj() : uj();
}
function uj() {
  Ze(
    Li(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let s = H.useContext(Ts),
    { basename: c, navigator: r } = H.useContext(ea),
    { matches: n } = H.useContext(ma),
    { pathname: f } = Ga(),
    d = JSON.stringify(dp(n)),
    p = H.useRef(!1);
  return (
    jp(() => {
      p.current = !0;
    }),
    H.useCallback(
      (h, m = {}) => {
        if ((ha(p.current, xp), !p.current)) return;
        if (typeof h == "number") {
          r.go(h);
          return;
        }
        let j = fp(h, JSON.parse(d), f, m.relative === "path");
        (s == null &&
          c !== "/" &&
          (j.pathname = j.pathname === "/" ? c : Ba([c, j.pathname])),
          (m.replace ? r.replace : r.push)(j, m.state, m));
      },
      [c, r, d, f, s],
    )
  );
}
var dj = H.createContext(null);
function fj(s) {
  let c = H.useContext(ma).outlet;
  return H.useMemo(
    () => c && H.createElement(dj.Provider, { value: s }, c),
    [c, s],
  );
}
function Bi(s, { relative: c } = {}) {
  let { matches: r } = H.useContext(ma),
    { pathname: n } = Ga(),
    f = JSON.stringify(dp(r));
  return H.useMemo(() => fp(s, JSON.parse(f), n, c === "path"), [s, f, n, c]);
}
function hj(s, c) {
  return yp(s, c);
}
function yp(s, c, r, n, f) {
  Ze(
    Li(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: d } = H.useContext(ea),
    { matches: p } = H.useContext(ma),
    x = p[p.length - 1],
    h = x ? x.params : {},
    m = x ? x.pathname : "/",
    j = x ? x.pathnameBase : "/",
    g = x && x.route;
  {
    let w = (g && g.path) || "";
    Sp(
      m,
      !g || w.endsWith("*") || w.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w === "/" ? "*" : `${w}/*`}">.`,
    );
  }
  let N = Ga(),
    b;
  if (c) {
    let w = typeof c == "string" ? ws(c) : c;
    (Ze(
      j === "/" || w.pathname?.startsWith(j),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${j}" but pathname "${w.pathname}" was given in the \`location\` prop.`,
    ),
      (b = w));
  } else b = N;
  let E = b.pathname || "/",
    M = E;
  if (j !== "/") {
    let w = j.replace(/^\//, "").split("/");
    M = "/" + E.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let A = cp(s, { pathname: M });
  (ha(
    g || A != null,
    `No routes matched location "${b.pathname}${b.search}${b.hash}" `,
  ),
    ha(
      A == null ||
        A[A.length - 1].route.element !== void 0 ||
        A[A.length - 1].route.Component !== void 0 ||
        A[A.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let S = xj(
    A &&
      A.map((w) =>
        Object.assign({}, w, {
          params: Object.assign({}, h, w.params),
          pathname: Ba([
            j,
            d.encodeLocation
              ? d.encodeLocation(
                  w.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23"),
                ).pathname
              : w.pathname,
          ]),
          pathnameBase:
            w.pathnameBase === "/"
              ? j
              : Ba([
                  j,
                  d.encodeLocation
                    ? d.encodeLocation(
                        w.pathnameBase
                          .replace(/\?/g, "%3F")
                          .replace(/#/g, "%23"),
                      ).pathname
                    : w.pathnameBase,
                ]),
        }),
      ),
    p,
    r,
    n,
    f,
  );
  return c && S
    ? H.createElement(
        Ri.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...b,
            },
            navigationType: "POP",
          },
        },
        S,
      )
    : S;
}
function mj() {
  let s = Nj(),
    c = Wx(s)
      ? `${s.status} ${s.statusText}`
      : s instanceof Error
        ? s.message
        : JSON.stringify(s),
    r = s instanceof Error ? s.stack : null,
    n = "rgba(200,200,200, 0.5)",
    f = { padding: "0.5rem", backgroundColor: n },
    d = { padding: "2px 4px", backgroundColor: n },
    p = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", s),
    (p = H.createElement(
      H.Fragment,
      null,
      H.createElement("p", null, "💿 Hey developer 👋"),
      H.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        H.createElement("code", { style: d }, "ErrorBoundary"),
        " or",
        " ",
        H.createElement("code", { style: d }, "errorElement"),
        " prop on your route.",
      ),
    )),
    H.createElement(
      H.Fragment,
      null,
      H.createElement("h2", null, "Unexpected Application Error!"),
      H.createElement("h3", { style: { fontStyle: "italic" } }, c),
      r ? H.createElement("pre", { style: f }, r) : null,
      p,
    )
  );
}
var pj = H.createElement(mj, null),
  bp = class extends H.Component {
    constructor(s) {
      (super(s),
        (this.state = {
          location: s.location,
          revalidation: s.revalidation,
          error: s.error,
        }));
    }
    static getDerivedStateFromError(s) {
      return { error: s };
    }
    static getDerivedStateFromProps(s, c) {
      return c.location !== s.location ||
        (c.revalidation !== "idle" && s.revalidation === "idle")
        ? { error: s.error, location: s.location, revalidation: s.revalidation }
        : {
            error: s.error !== void 0 ? s.error : c.error,
            location: c.location,
            revalidation: s.revalidation || c.revalidation,
          };
    }
    componentDidCatch(s, c) {
      this.props.onError
        ? this.props.onError(s, c)
        : console.error(
            "React Router caught the following error during render",
            s,
          );
    }
    render() {
      let s = this.state.error;
      if (
        this.context &&
        typeof s == "object" &&
        s &&
        "digest" in s &&
        typeof s.digest == "string"
      ) {
        const r = rj(s.digest);
        r && (s = r);
      }
      let c =
        s !== void 0
          ? H.createElement(
              ma.Provider,
              { value: this.props.routeContext },
              H.createElement(ru.Provider, {
                value: s,
                children: this.props.component,
              }),
            )
          : this.props.children;
      return this.context ? H.createElement(vj, { error: s }, c) : c;
    }
  };
bp.contextType = tj;
var Vo = new WeakMap();
function vj({ children: s, error: c }) {
  let { basename: r } = H.useContext(ea);
  if (
    typeof c == "object" &&
    c &&
    "digest" in c &&
    typeof c.digest == "string"
  ) {
    let n = nj(c.digest);
    if (n) {
      let f = Vo.get(c);
      if (f) throw f;
      let d = mp(n.location, r);
      if (hp && !Vo.get(c))
        if (d.isExternal || n.reloadDocument)
          window.location.href = d.absoluteURL || d.to;
        else {
          const p = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(d.to, {
              replace: n.replace,
            }),
          );
          throw (Vo.set(c, p), p);
        }
      return H.createElement("meta", {
        httpEquiv: "refresh",
        content: `0;url=${d.absoluteURL || d.to}`,
      });
    }
  }
  return s;
}
function gj({ routeContext: s, match: c, children: r }) {
  let n = H.useContext(Ts);
  return (
    n &&
      n.static &&
      n.staticContext &&
      (c.route.errorElement || c.route.ErrorBoundary) &&
      (n.staticContext._deepestRenderedBoundaryId = c.route.id),
    H.createElement(ma.Provider, { value: s }, r)
  );
}
function xj(s, c = [], r = null, n = null, f = null) {
  if (s == null) {
    if (!r) return null;
    if (r.errors) s = r.matches;
    else if (c.length === 0 && !r.initialized && r.matches.length > 0)
      s = r.matches;
    else return null;
  }
  let d = s,
    p = r?.errors;
  if (p != null) {
    let j = d.findIndex((g) => g.route.id && p?.[g.route.id] !== void 0);
    (Ze(
      j >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`,
    ),
      (d = d.slice(0, Math.min(d.length, j + 1))));
  }
  let x = !1,
    h = -1;
  if (r)
    for (let j = 0; j < d.length; j++) {
      let g = d[j];
      if (
        ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (h = j),
        g.route.id)
      ) {
        let { loaderData: N, errors: b } = r,
          E =
            g.route.loader &&
            !N.hasOwnProperty(g.route.id) &&
            (!b || b[g.route.id] === void 0);
        if (g.route.lazy || E) {
          ((x = !0), h >= 0 ? (d = d.slice(0, h + 1)) : (d = [d[0]]));
          break;
        }
      }
    }
  let m =
    r && n
      ? (j, g) => {
          n(j, {
            location: r.location,
            params: r.matches?.[0]?.params ?? {},
            unstable_pattern: Ix(r.matches),
            errorInfo: g,
          });
        }
      : void 0;
  return d.reduceRight((j, g, N) => {
    let b,
      E = !1,
      M = null,
      A = null;
    r &&
      ((b = p && g.route.id ? p[g.route.id] : void 0),
      (M = g.route.errorElement || pj),
      x &&
        (h < 0 && N === 0
          ? (Sp(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (E = !0),
            (A = null))
          : h === N &&
            ((E = !0), (A = g.route.hydrateFallbackElement || null))));
    let S = c.concat(d.slice(0, N + 1)),
      w = () => {
        let z;
        return (
          b
            ? (z = M)
            : E
              ? (z = A)
              : g.route.Component
                ? (z = H.createElement(g.route.Component, null))
                : g.route.element
                  ? (z = g.route.element)
                  : (z = j),
          H.createElement(gj, {
            match: g,
            routeContext: { outlet: j, matches: S, isDataRoute: r != null },
            children: z,
          })
        );
      };
    return r && (g.route.ErrorBoundary || g.route.errorElement || N === 0)
      ? H.createElement(bp, {
          location: r.location,
          revalidation: r.revalidation,
          component: M,
          error: b,
          children: w(),
          routeContext: { outlet: null, matches: S, isDataRoute: !0 },
          onError: m,
        })
      : w();
  }, null);
}
function cu(s) {
  return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function jj(s) {
  let c = H.useContext(Ts);
  return (Ze(c, cu(s)), c);
}
function yj(s) {
  let c = H.useContext(mr);
  return (Ze(c, cu(s)), c);
}
function bj(s) {
  let c = H.useContext(ma);
  return (Ze(c, cu(s)), c);
}
function ou(s) {
  let c = bj(s),
    r = c.matches[c.matches.length - 1];
  return (
    Ze(
      r.route.id,
      `${s} can only be used on routes that contain a unique "id"`,
    ),
    r.route.id
  );
}
function Sj() {
  return ou("useRouteId");
}
function Nj() {
  let s = H.useContext(ru),
    c = yj("useRouteError"),
    r = ou("useRouteError");
  return s !== void 0 ? s : c.errors?.[r];
}
function wj() {
  let { router: s } = jj("useNavigate"),
    c = ou("useNavigate"),
    r = H.useRef(!1);
  return (
    jp(() => {
      r.current = !0;
    }),
    H.useCallback(
      async (f, d = {}) => {
        (ha(r.current, xp),
          r.current &&
            (typeof f == "number"
              ? await s.navigate(f)
              : await s.navigate(f, { fromRouteId: c, ...d })));
      },
      [s, c],
    )
  );
}
var Rm = {};
function Sp(s, c, r) {
  !c && !Rm[s] && ((Rm[s] = !0), ha(!1, r));
}
H.memo(Tj);
function Tj({ routes: s, future: c, state: r, onError: n }) {
  return yp(s, void 0, r, n, c);
}
function Ej(s) {
  return fj(s.context);
}
function Qe(s) {
  Ze(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
  );
}
function Cj({
  basename: s = "/",
  children: c = null,
  location: r,
  navigationType: n = "POP",
  navigator: f,
  static: d = !1,
  unstable_useTransitions: p,
}) {
  Ze(
    !Li(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let x = s.replace(/^\/*/, "/"),
    h = H.useMemo(
      () => ({
        basename: x,
        navigator: f,
        static: d,
        unstable_useTransitions: p,
        future: {},
      }),
      [x, f, d, p],
    );
  typeof r == "string" && (r = ws(r));
  let {
      pathname: m = "/",
      search: j = "",
      hash: g = "",
      state: N = null,
      key: b = "default",
    } = r,
    E = H.useMemo(() => {
      let M = Ha(m, x);
      return M == null
        ? null
        : {
            location: { pathname: M, search: j, hash: g, state: N, key: b },
            navigationType: n,
          };
    }, [x, m, j, g, N, b, n]);
  return (
    ha(
      E != null,
      `<Router basename="${x}"> is not able to match the URL "${m}${j}${g}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    E == null
      ? null
      : H.createElement(
          ea.Provider,
          { value: h },
          H.createElement(Ri.Provider, { children: c, value: E }),
        )
  );
}
function Mj({ children: s, location: c }) {
  return hj(Io(s), c);
}
function Io(s, c = []) {
  let r = [];
  return (
    H.Children.forEach(s, (n, f) => {
      if (!H.isValidElement(n)) return;
      let d = [...c, f];
      if (n.type === H.Fragment) {
        r.push.apply(r, Io(n.props.children, d));
        return;
      }
      (Ze(
        n.type === Qe,
        `[${typeof n.type == "string" ? n.type : n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        Ze(
          !n.props.index || !n.props.children,
          "An index route cannot have child routes.",
        ));
      let p = {
        id: n.props.id || d.join("-"),
        caseSensitive: n.props.caseSensitive,
        element: n.props.element,
        Component: n.props.Component,
        index: n.props.index,
        path: n.props.path,
        middleware: n.props.middleware,
        loader: n.props.loader,
        action: n.props.action,
        hydrateFallbackElement: n.props.hydrateFallbackElement,
        HydrateFallback: n.props.HydrateFallback,
        errorElement: n.props.errorElement,
        ErrorBoundary: n.props.ErrorBoundary,
        hasErrorBoundary:
          n.props.hasErrorBoundary === !0 ||
          n.props.ErrorBoundary != null ||
          n.props.errorElement != null,
        shouldRevalidate: n.props.shouldRevalidate,
        handle: n.props.handle,
        lazy: n.props.lazy,
      };
      (n.props.children && (p.children = Io(n.props.children, d)), r.push(p));
    }),
    r
  );
}
var sr = "get",
  ir = "application/x-www-form-urlencoded";
function pr(s) {
  return typeof HTMLElement < "u" && s instanceof HTMLElement;
}
function Oj(s) {
  return pr(s) && s.tagName.toLowerCase() === "button";
}
function Aj(s) {
  return pr(s) && s.tagName.toLowerCase() === "form";
}
function zj(s) {
  return pr(s) && s.tagName.toLowerCase() === "input";
}
function Dj(s) {
  return !!(s.metaKey || s.altKey || s.ctrlKey || s.shiftKey);
}
function _j(s, c) {
  return s.button === 0 && (!c || c === "_self") && !Dj(s);
}
var ar = null;
function Rj() {
  if (ar === null)
    try {
      (new FormData(document.createElement("form"), 0), (ar = !1));
    } catch {
      ar = !0;
    }
  return ar;
}
var Lj = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Yo(s) {
  return s != null && !Lj.has(s)
    ? (ha(
        !1,
        `"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ir}"`,
      ),
      null)
    : s;
}
function Bj(s, c) {
  let r, n, f, d, p;
  if (Aj(s)) {
    let x = s.getAttribute("action");
    ((n = x ? Ha(x, c) : null),
      (r = s.getAttribute("method") || sr),
      (f = Yo(s.getAttribute("enctype")) || ir),
      (d = new FormData(s)));
  } else if (Oj(s) || (zj(s) && (s.type === "submit" || s.type === "image"))) {
    let x = s.form;
    if (x == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let h = s.getAttribute("formaction") || x.getAttribute("action");
    if (
      ((n = h ? Ha(h, c) : null),
      (r = s.getAttribute("formmethod") || x.getAttribute("method") || sr),
      (f =
        Yo(s.getAttribute("formenctype")) ||
        Yo(x.getAttribute("enctype")) ||
        ir),
      (d = new FormData(x, s)),
      !Rj())
    ) {
      let { name: m, type: j, value: g } = s;
      if (j === "image") {
        let N = m ? `${m}.` : "";
        (d.append(`${N}x`, "0"), d.append(`${N}y`, "0"));
      } else m && d.append(m, g);
    }
  } else {
    if (pr(s))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((r = sr), (n = null), (f = ir), (p = s));
  }
  return (
    d && f === "text/plain" && ((p = d), (d = void 0)),
    { action: n, method: r.toLowerCase(), encType: f, formData: d, body: p }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function uu(s, c) {
  if (s === !1 || s === null || typeof s > "u") throw new Error(c);
}
function Hj(s, c, r, n) {
  let f =
    typeof s == "string"
      ? new URL(
          s,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : s;
  return (
    r
      ? f.pathname.endsWith("/")
        ? (f.pathname = `${f.pathname}_.${n}`)
        : (f.pathname = `${f.pathname}.${n}`)
      : f.pathname === "/"
        ? (f.pathname = `_root.${n}`)
        : c && Ha(f.pathname, c) === "/"
          ? (f.pathname = `${c.replace(/\/$/, "")}/_root.${n}`)
          : (f.pathname = `${f.pathname.replace(/\/$/, "")}.${n}`),
    f
  );
}
async function Uj(s, c) {
  if (s.id in c) return c[s.id];
  try {
    let r = await import(s.module);
    return ((c[s.id] = r), r);
  } catch (r) {
    return (
      console.error(
        `Error loading route module \`${s.module}\`, reloading page...`,
      ),
      console.error(r),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Gj(s) {
  return s == null
    ? !1
    : s.href == null
      ? s.rel === "preload" &&
        typeof s.imageSrcSet == "string" &&
        typeof s.imageSizes == "string"
      : typeof s.rel == "string" && typeof s.href == "string";
}
async function qj(s, c, r) {
  let n = await Promise.all(
    s.map(async (f) => {
      let d = c.routes[f.route.id];
      if (d) {
        let p = await Uj(d, r);
        return p.links ? p.links() : [];
      }
      return [];
    }),
  );
  return Xj(
    n
      .flat(1)
      .filter(Gj)
      .filter((f) => f.rel === "stylesheet" || f.rel === "preload")
      .map((f) =>
        f.rel === "stylesheet"
          ? { ...f, rel: "prefetch", as: "style" }
          : { ...f, rel: "prefetch" },
      ),
  );
}
function Lm(s, c, r, n, f, d) {
  let p = (h, m) => (r[m] ? h.route.id !== r[m].route.id : !0),
    x = (h, m) =>
      r[m].pathname !== h.pathname ||
      (r[m].route.path?.endsWith("*") && r[m].params["*"] !== h.params["*"]);
  return d === "assets"
    ? c.filter((h, m) => p(h, m) || x(h, m))
    : d === "data"
      ? c.filter((h, m) => {
          let j = n.routes[h.route.id];
          if (!j || !j.hasLoader) return !1;
          if (p(h, m) || x(h, m)) return !0;
          if (h.route.shouldRevalidate) {
            let g = h.route.shouldRevalidate({
              currentUrl: new URL(
                f.pathname + f.search + f.hash,
                window.origin,
              ),
              currentParams: r[0]?.params || {},
              nextUrl: new URL(s, window.origin),
              nextParams: h.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof g == "boolean") return g;
          }
          return !0;
        })
      : [];
}
function Vj(s, c, { includeHydrateFallback: r } = {}) {
  return Yj(
    s
      .map((n) => {
        let f = c.routes[n.route.id];
        if (!f) return [];
        let d = [f.module];
        return (
          f.clientActionModule && (d = d.concat(f.clientActionModule)),
          f.clientLoaderModule && (d = d.concat(f.clientLoaderModule)),
          r &&
            f.hydrateFallbackModule &&
            (d = d.concat(f.hydrateFallbackModule)),
          f.imports && (d = d.concat(f.imports)),
          d
        );
      })
      .flat(1),
  );
}
function Yj(s) {
  return [...new Set(s)];
}
function kj(s) {
  let c = {},
    r = Object.keys(s).sort();
  for (let n of r) c[n] = s[n];
  return c;
}
function Xj(s, c) {
  let r = new Set();
  return (
    new Set(c),
    s.reduce((n, f) => {
      let d = JSON.stringify(kj(f));
      return (r.has(d) || (r.add(d), n.push({ key: d, link: f })), n);
    }, [])
  );
}
function Np() {
  let s = H.useContext(Ts);
  return (
    uu(
      s,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    s
  );
}
function Qj() {
  let s = H.useContext(mr);
  return (
    uu(
      s,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    s
  );
}
var du = H.createContext(void 0);
du.displayName = "FrameworkContext";
function wp() {
  let s = H.useContext(du);
  return (
    uu(s, "You must render this element inside a <HydratedRouter> element"),
    s
  );
}
function Zj(s, c) {
  let r = H.useContext(du),
    [n, f] = H.useState(!1),
    [d, p] = H.useState(!1),
    {
      onFocus: x,
      onBlur: h,
      onMouseEnter: m,
      onMouseLeave: j,
      onTouchStart: g,
    } = c,
    N = H.useRef(null);
  (H.useEffect(() => {
    if ((s === "render" && p(!0), s === "viewport")) {
      let M = (S) => {
          S.forEach((w) => {
            p(w.isIntersecting);
          });
        },
        A = new IntersectionObserver(M, { threshold: 0.5 });
      return (
        N.current && A.observe(N.current),
        () => {
          A.disconnect();
        }
      );
    }
  }, [s]),
    H.useEffect(() => {
      if (n) {
        let M = setTimeout(() => {
          p(!0);
        }, 100);
        return () => {
          clearTimeout(M);
        };
      }
    }, [n]));
  let b = () => {
      f(!0);
    },
    E = () => {
      (f(!1), p(!1));
    };
  return r
    ? s !== "intent"
      ? [d, N, {}]
      : [
          d,
          N,
          {
            onFocus: Ti(x, b),
            onBlur: Ti(h, E),
            onMouseEnter: Ti(m, b),
            onMouseLeave: Ti(j, E),
            onTouchStart: Ti(g, b),
          },
        ]
    : [!1, N, {}];
}
function Ti(s, c) {
  return (r) => {
    (s && s(r), r.defaultPrevented || c(r));
  };
}
function Jj({ page: s, ...c }) {
  let { router: r } = Np(),
    n = H.useMemo(() => cp(r.routes, s, r.basename), [r.routes, s, r.basename]);
  return n ? H.createElement($j, { page: s, matches: n, ...c }) : null;
}
function Fj(s) {
  let { manifest: c, routeModules: r } = wp(),
    [n, f] = H.useState([]);
  return (
    H.useEffect(() => {
      let d = !1;
      return (
        qj(s, c, r).then((p) => {
          d || f(p);
        }),
        () => {
          d = !0;
        }
      );
    }, [s, c, r]),
    n
  );
}
function $j({ page: s, matches: c, ...r }) {
  let n = Ga(),
    { future: f, manifest: d, routeModules: p } = wp(),
    { basename: x } = Np(),
    { loaderData: h, matches: m } = Qj(),
    j = H.useMemo(() => Lm(s, c, m, d, n, "data"), [s, c, m, d, n]),
    g = H.useMemo(() => Lm(s, c, m, d, n, "assets"), [s, c, m, d, n]),
    N = H.useMemo(() => {
      if (s === n.pathname + n.search + n.hash) return [];
      let M = new Set(),
        A = !1;
      if (
        (c.forEach((w) => {
          let z = d.routes[w.route.id];
          !z ||
            !z.hasLoader ||
            ((!j.some((J) => J.route.id === w.route.id) &&
              w.route.id in h &&
              p[w.route.id]?.shouldRevalidate) ||
            z.hasClientLoader
              ? (A = !0)
              : M.add(w.route.id));
        }),
        M.size === 0)
      )
        return [];
      let S = Hj(s, x, f.unstable_trailingSlashAwareDataRequests, "data");
      return (
        A &&
          M.size > 0 &&
          S.searchParams.set(
            "_routes",
            c
              .filter((w) => M.has(w.route.id))
              .map((w) => w.route.id)
              .join(","),
          ),
        [S.pathname + S.search]
      );
    }, [x, f.unstable_trailingSlashAwareDataRequests, h, n, d, j, c, s, p]),
    b = H.useMemo(() => Vj(g, d), [g, d]),
    E = Fj(g);
  return H.createElement(
    H.Fragment,
    null,
    N.map((M) =>
      H.createElement("link", {
        key: M,
        rel: "prefetch",
        as: "fetch",
        href: M,
        ...r,
      }),
    ),
    b.map((M) =>
      H.createElement("link", { key: M, rel: "modulepreload", href: M, ...r }),
    ),
    E.map(({ key: M, link: A }) =>
      H.createElement("link", {
        key: M,
        nonce: r.nonce,
        ...A,
        crossOrigin: A.crossOrigin ?? r.crossOrigin,
      }),
    ),
  );
}
function Kj(...s) {
  return (c) => {
    s.forEach((r) => {
      typeof r == "function" ? r(c) : r != null && (r.current = c);
    });
  };
}
var Pj =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Pj && (window.__reactRouterVersion = "7.13.0");
} catch {}
function Wj({
  basename: s,
  children: c,
  unstable_useTransitions: r,
  window: n,
}) {
  let f = H.useRef();
  f.current == null && (f.current = Mx({ window: n, v5Compat: !0 }));
  let d = f.current,
    [p, x] = H.useState({ action: d.action, location: d.location }),
    h = H.useCallback(
      (m) => {
        r === !1 ? x(m) : H.startTransition(() => x(m));
      },
      [r],
    );
  return (
    H.useLayoutEffect(() => d.listen(h), [d, h]),
    H.createElement(Cj, {
      basename: s,
      children: c,
      location: p.location,
      navigationType: p.action,
      navigator: d,
      unstable_useTransitions: r,
    })
  );
}
var Tp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ne = H.forwardRef(function (
    {
      onClick: c,
      discover: r = "render",
      prefetch: n = "none",
      relative: f,
      reloadDocument: d,
      replace: p,
      state: x,
      target: h,
      to: m,
      preventScrollReset: j,
      viewTransition: g,
      unstable_defaultShouldRevalidate: N,
      ...b
    },
    E,
  ) {
    let { basename: M, unstable_useTransitions: A } = H.useContext(ea),
      S = typeof m == "string" && Tp.test(m),
      w = mp(m, M);
    m = w.to;
    let z = cj(m, { relative: f }),
      [J, $, ee] = Zj(n, b),
      K = ay(m, {
        replace: p,
        state: x,
        target: h,
        preventScrollReset: j,
        relative: f,
        viewTransition: g,
        unstable_defaultShouldRevalidate: N,
        unstable_useTransitions: A,
      });
    function T(L) {
      (c && c(L), L.defaultPrevented || K(L));
    }
    let G = H.createElement("a", {
      ...b,
      ...ee,
      href: w.absoluteURL || z,
      onClick: w.isExternal || d ? c : T,
      ref: Kj(E, $),
      target: h,
      "data-discover": !S && r === "render" ? "true" : void 0,
    });
    return J && !S
      ? H.createElement(H.Fragment, null, G, H.createElement(Jj, { page: z }))
      : G;
  });
ne.displayName = "Link";
var Ij = H.forwardRef(function (
  {
    "aria-current": c = "page",
    caseSensitive: r = !1,
    className: n = "",
    end: f = !1,
    style: d,
    to: p,
    viewTransition: x,
    children: h,
    ...m
  },
  j,
) {
  let g = Bi(p, { relative: m.relative }),
    N = Ga(),
    b = H.useContext(mr),
    { navigator: E, basename: M } = H.useContext(ea),
    A = b != null && ry(g) && x === !0,
    S = E.encodeLocation ? E.encodeLocation(g).pathname : g.pathname,
    w = N.pathname,
    z =
      b && b.navigation && b.navigation.location
        ? b.navigation.location.pathname
        : null;
  (r ||
    ((w = w.toLowerCase()),
    (z = z ? z.toLowerCase() : null),
    (S = S.toLowerCase())),
    z && M && (z = Ha(z, M) || z));
  const J = S !== "/" && S.endsWith("/") ? S.length - 1 : S.length;
  let $ = w === S || (!f && w.startsWith(S) && w.charAt(J) === "/"),
    ee =
      z != null &&
      (z === S || (!f && z.startsWith(S) && z.charAt(S.length) === "/")),
    K = { isActive: $, isPending: ee, isTransitioning: A },
    T = $ ? c : void 0,
    G;
  typeof n == "function"
    ? (G = n(K))
    : (G = [
        n,
        $ ? "active" : null,
        ee ? "pending" : null,
        A ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let L = typeof d == "function" ? d(K) : d;
  return H.createElement(
    ne,
    {
      ...m,
      "aria-current": T,
      className: G,
      ref: j,
      style: L,
      to: p,
      viewTransition: x,
    },
    typeof h == "function" ? h(K) : h,
  );
});
Ij.displayName = "NavLink";
var ey = H.forwardRef(
  (
    {
      discover: s = "render",
      fetcherKey: c,
      navigate: r,
      reloadDocument: n,
      replace: f,
      state: d,
      method: p = sr,
      action: x,
      onSubmit: h,
      relative: m,
      preventScrollReset: j,
      viewTransition: g,
      unstable_defaultShouldRevalidate: N,
      ...b
    },
    E,
  ) => {
    let { unstable_useTransitions: M } = H.useContext(ea),
      A = iy(),
      S = ny(x, { relative: m }),
      w = p.toLowerCase() === "get" ? "get" : "post",
      z = typeof x == "string" && Tp.test(x),
      J = ($) => {
        if ((h && h($), $.defaultPrevented)) return;
        $.preventDefault();
        let ee = $.nativeEvent.submitter,
          K = ee?.getAttribute("formmethod") || p,
          T = () =>
            A(ee || $.currentTarget, {
              fetcherKey: c,
              method: K,
              navigate: r,
              replace: f,
              state: d,
              relative: m,
              preventScrollReset: j,
              viewTransition: g,
              unstable_defaultShouldRevalidate: N,
            });
        M && r !== !1 ? H.startTransition(() => T()) : T();
      };
    return H.createElement("form", {
      ref: E,
      method: w,
      action: S,
      onSubmit: n ? h : J,
      ...b,
      "data-discover": !z && s === "render" ? "true" : void 0,
    });
  },
);
ey.displayName = "Form";
function ty(s) {
  return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Ep(s) {
  let c = H.useContext(Ts);
  return (Ze(c, ty(s)), c);
}
function ay(
  s,
  {
    target: c,
    replace: r,
    state: n,
    preventScrollReset: f,
    relative: d,
    viewTransition: p,
    unstable_defaultShouldRevalidate: x,
    unstable_useTransitions: h,
  } = {},
) {
  let m = oj(),
    j = Ga(),
    g = Bi(s, { relative: d });
  return H.useCallback(
    (N) => {
      if (_j(N, c)) {
        N.preventDefault();
        let b = r !== void 0 ? r : zi(j) === zi(g),
          E = () =>
            m(s, {
              replace: b,
              state: n,
              preventScrollReset: f,
              relative: d,
              viewTransition: p,
              unstable_defaultShouldRevalidate: x,
            });
        h ? H.startTransition(() => E()) : E();
      }
    },
    [j, m, g, r, n, c, s, f, d, p, x, h],
  );
}
var ly = 0,
  sy = () => `__${String(++ly)}__`;
function iy() {
  let { router: s } = Ep("useSubmit"),
    { basename: c } = H.useContext(ea),
    r = Sj(),
    n = s.fetch,
    f = s.navigate;
  return H.useCallback(
    async (d, p = {}) => {
      let { action: x, method: h, encType: m, formData: j, body: g } = Bj(d, c);
      if (p.navigate === !1) {
        let N = p.fetcherKey || sy();
        await n(N, r, p.action || x, {
          unstable_defaultShouldRevalidate: p.unstable_defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: j,
          body: g,
          formMethod: p.method || h,
          formEncType: p.encType || m,
          flushSync: p.flushSync,
        });
      } else
        await f(p.action || x, {
          unstable_defaultShouldRevalidate: p.unstable_defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: j,
          body: g,
          formMethod: p.method || h,
          formEncType: p.encType || m,
          replace: p.replace,
          state: p.state,
          fromRouteId: r,
          flushSync: p.flushSync,
          viewTransition: p.viewTransition,
        });
    },
    [n, f, c, r],
  );
}
function ny(s, { relative: c } = {}) {
  let { basename: r } = H.useContext(ea),
    n = H.useContext(ma);
  Ze(n, "useFormAction must be used inside a RouteContext");
  let [f] = n.matches.slice(-1),
    d = { ...Bi(s || ".", { relative: c }) },
    p = Ga();
  if (s == null) {
    d.search = p.search;
    let x = new URLSearchParams(d.search),
      h = x.getAll("index");
    if (h.some((j) => j === "")) {
      (x.delete("index"),
        h.filter((g) => g).forEach((g) => x.append("index", g)));
      let j = x.toString();
      d.search = j ? `?${j}` : "";
    }
  }
  return (
    (!s || s === ".") &&
      f.route.index &&
      (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"),
    r !== "/" && (d.pathname = d.pathname === "/" ? r : Ba([r, d.pathname])),
    zi(d)
  );
}
function ry(s, { relative: c } = {}) {
  let r = H.useContext(vp);
  Ze(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: n } = Ep("useViewTransitionState"),
    f = Bi(s, { relative: c });
  if (!r.isTransitioning) return !1;
  let d = Ha(r.currentLocation.pathname, n) || r.currentLocation.pathname,
    p = Ha(r.nextLocation.pathname, n) || r.nextLocation.pathname;
  return cr(f.pathname, p) != null || cr(f.pathname, d) != null;
}
const cy = "/assets/game-charecters-D4-uYW10.png",
  _t = ({ text: s, onClick: c }) => {
    const [r, n] = H.useState(null),
      f = (d) => {
        const p = d.currentTarget.getBoundingClientRect();
        n({ top: d.clientY - p.top, left: d.clientX - p.left });
      };
    return a.jsxs("button", {
      className: "default-btn",
      onClick: c,
      onMouseEnter: f,
      onMouseLeave: f,
      children: [
        s,
        a.jsx("span", {
          style: r ? { top: r.top + "px", left: r.left + "px" } : void 0,
        }),
      ],
    });
  },
  ra = "/assets/click-DCbQBlWQ.wav",
  fu = ({ youtubeId: s }) => {
    const [c, r] = H.useState(!1);
    return (
      H.useEffect(
        () => (
          (document.body.style.overflow = c ? "hidden" : ""),
          () => {
            document.body.style.overflow = "";
          }
        ),
        [c],
      ),
      a.jsxs(a.Fragment, {
        children: [
          a.jsxs("button", {
            type: "button",
            className: "dl-video-popup play-btn",
            "aria-label": "Play video",
            onClick: () => {
              (r(!0), new Audio(ra).play());
            },
            children: [
              a.jsx("svg", {
                enableBackground: "new 0 0 41.999 41.999",
                viewBox: "0 0 41.999 41.999",
                xmlns: "http://www.w3.org/2000/svg",
                children: a.jsx("path", {
                  d: "M36.068,20.176l-29-20C6.761-0.035,6.363-0.057,6.035,0.114C5.706,0.287,5.5,0.627,5.5,0.999v40c0,0.372,0.206,0.713,0.535,0.886c0.146,0.076,0.306,0.114,0.465,0.114c0.199,0,0.397-0.06,0.568-0.177l29-20c0.271-0.187,0.432-0.494,0.432-0.823S36.338,20.363,36.068,20.176z M7.5,39.095V2.904l26.239,18.096L7.5,39.095z",
                }),
              }),
              a.jsx("div", { className: "ripple" }),
            ],
          }),
          c &&
            a.jsx("div", {
              className: "video-overlay",
              role: "dialog",
              "aria-modal": "true",
              onClick: () => r(!1),
              children: a.jsxs("div", {
                className: "video-container",
                onClick: (n) => n.stopPropagation(),
                children: [
                  a.jsx("iframe", {
                    src: `https://www.youtube.com/embed/${s}?autoplay=1`,
                    title: "YouTube video player",
                    allow: "autoplay; encrypted-media",
                    allowFullScreen: !0,
                  }),
                  a.jsx("button", {
                    className: "video-close",
                    "aria-label": "Close video",
                    onClick: () => r(!1),
                    children: "✕",
                  }),
                ],
              }),
            }),
        ],
      })
    );
  };
function oy() {
  return a.jsxs("section", {
    className: "hero-section",
    children: [
      a.jsx("div", {
        className: "container",
        children: a.jsxs("div", {
          className: "hero-content",
          children: [
            a.jsx("h4", { children: "Enjoy The Games" }),
            a.jsxs("h1", {
              children: [
                "Epic Games Made For",
                a.jsx("br", {}),
                " True Gamers!",
              ],
            }),
            a.jsxs("div", {
              className: "btn-group",
              children: [
                a.jsx(ne, {
                  to: "/contact",
                  children: a.jsx(_t, { text: "Join With Us" }),
                }),
                a.jsx(fu, { youtubeId: "tv7LfFeamsc" }),
              ],
            }),
            a.jsxs("div", {
              className: "hero-element",
              children: [
                a.jsx("img", { src: cy, alt: "thumb" }),
                a.jsxs("div", {
                  className: "shape-wrap",
                  children: [
                    a.jsx("div", { className: "shape shape-1" }),
                    a.jsx("div", { className: "shape shape-2" }),
                    a.jsx("div", { className: "shape shape-3" }),
                    a.jsx("div", { className: "shape shape-4" }),
                  ],
                }),
                a.jsxs("div", {
                  className: "shape-wrap right",
                  children: [
                    a.jsx("div", { className: "shape shape-1" }),
                    a.jsx("div", { className: "shape shape-2" }),
                    a.jsx("div", { className: "shape shape-3" }),
                    a.jsx("div", { className: "shape shape-4" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      a.jsx("div", { className: "gradiant-border" }),
    ],
  });
}
const hu = "/assets/team-logo-1-D1guZlCu.png",
  Hi = "/assets/team-logo-2-BdsIfDY2.png",
  Cp = "/assets/team-logo-3-TKl5qaub.png",
  Mp = "/assets/team-logo-4-Cx_sb_DR.png",
  Op = "/assets/team-logo-5-CjF17Ysr.png",
  Ap = "/assets/team-logo-6-BIeYj5_n.png";
function zp() {
  return a.jsx("section", {
    className: "matches-section padding",
    children: a.jsxs("div", {
      className: "container",
      children: [
        a.jsxs("div", {
          className: "section-heading mb-40 text-center",
          "data-aos": "fade-up",
          "data-aos-delay": "400ms",
          children: [
            a.jsx("h3", { children: "Upcoming matches" }),
            a.jsxs("h2", {
              children: [
                "Battles Extreme ",
                a.jsx("br", {}),
                " Masters ",
                a.jsx("span", { children: "asfdasdf" }),
              ],
            }),
            a.jsxs("p", {
              children: [
                "Our success in creating business solutions is due in large part",
                " ",
                a.jsx("br", {}),
                "to our talented and highly committed team.",
              ],
            }),
          ],
        }),
        a.jsxs("ul", {
          className: "upcoming-matches",
          children: [
            a.jsxs("li", {
              className: "matches-list",
              children: [
                a.jsxs("div", {
                  className: "participate-team",
                  "data-aos": "fade-left",
                  "data-aos-duration": "1000",
                  "data-aos-delay": "700ms",
                  children: [
                    a.jsx("img", { src: hu, alt: "team" }),
                    a.jsx("h3", {
                      children: a.jsx(ne, {
                        to: "/team-details",
                        children: "Purple Death Cadets",
                      }),
                    }),
                    a.jsx("div", {
                      className: "match-info",
                      children: "Group 04 | Match 06th",
                    }),
                  ],
                }),
                a.jsxs("div", {
                  className: "match-time",
                  children: [
                    a.jsxs("h3", {
                      children: [
                        "10:00 ",
                        a.jsx("span", { children: "25TH May 2024" }),
                      ],
                    }),
                    a.jsxs("ul", {
                      className: "watch-btn",
                      children: [
                        a.jsx("li", {
                          children: a.jsx("a", {
                            className: "dl-video-popup",
                            "data-autoplay": "true",
                            "data-vbtype": "video",
                            href: "https://www.youtube.com/watch?v=tv7LfFeamsc",
                            children: a.jsx("i", {
                              className: "lab la-youtube",
                            }),
                          }),
                        }),
                        a.jsx("li", {
                          children: a.jsx("a", {
                            className: "dl-video-popup",
                            "data-autoplay": "true",
                            "data-vbtype": "video",
                            href: "https://www.youtube.com/watch?v=tv7LfFeamsc",
                            children: a.jsx("i", {
                              className: "lab la-twitch",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                a.jsxs("div", {
                  className: "participate-team oponent ",
                  "data-aos": "fade-right",
                  "data-aos-duration": "1000",
                  "data-aos-delay": "700ms",
                  children: [
                    a.jsx("h3", {
                      children: a.jsx(ne, {
                        to: "/team-details",
                        children: "Trigger Brain Squad",
                      }),
                    }),
                    a.jsx("div", {
                      className: "match-info",
                      children: "Group 04 | Match 06th",
                    }),
                    a.jsx("img", { src: Hi, alt: "team" }),
                  ],
                }),
              ],
            }),
            a.jsxs("li", {
              className: "matches-list",
              children: [
                a.jsxs("div", {
                  className: "participate-team",
                  "data-aos": "fade-left",
                  "data-aos-duration": "1000",
                  "data-aos-delay": "700ms",
                  children: [
                    a.jsx("img", { src: Cp, alt: "team" }),
                    a.jsx("h3", {
                      children: a.jsx(ne, {
                        to: "/team-details",
                        children: "The Black Hat Hackers",
                      }),
                    }),
                    a.jsx("div", {
                      className: "match-info",
                      children: "Group 04 | Match 06th",
                    }),
                  ],
                }),
                a.jsxs("div", {
                  className: "match-time",
                  children: [
                    a.jsxs("h3", {
                      children: [
                        "12:30 ",
                        a.jsx("span", { children: "10TH Jan 2024" }),
                      ],
                    }),
                    a.jsxs("ul", {
                      className: "watch-btn",
                      children: [
                        a.jsx("li", {
                          children: a.jsx("a", {
                            className: "dl-video-popup",
                            "data-autoplay": "true",
                            "data-vbtype": "video",
                            href: "https://www.youtube.com/watch?v=tv7LfFeamsc",
                            children: a.jsx("i", {
                              className: "lab la-youtube",
                            }),
                          }),
                        }),
                        a.jsx("li", {
                          children: a.jsx("a", {
                            className: "dl-video-popup",
                            "data-autoplay": "true",
                            "data-vbtype": "video",
                            href: "https://www.youtube.com/watch?v=tv7LfFeamsc",
                            children: a.jsx("i", {
                              className: "lab la-twitch",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                a.jsxs("div", {
                  className: "participate-team oponent",
                  "data-aos": "fade-right",
                  "data-aos-duration": "1000",
                  "data-aos-delay": "700ms",
                  children: [
                    a.jsx("h3", {
                      children: a.jsx(ne, {
                        to: "/team-details",
                        children: "Your Worst Nightmare",
                      }),
                    }),
                    a.jsx("div", {
                      className: "match-info",
                      children: "Group 05 | Match 02nd",
                    }),
                    a.jsx("img", { src: Mp, alt: "team" }),
                  ],
                }),
              ],
            }),
            a.jsxs("li", {
              className: "matches-list",
              children: [
                a.jsxs("div", {
                  className: "participate-team",
                  "data-aos": "fade-left",
                  "data-aos-duration": "1000",
                  "data-aos-delay": "700ms",
                  children: [
                    a.jsx("img", { src: Op, alt: "team" }),
                    a.jsx("h3", {
                      children: a.jsx(ne, {
                        to: "/team-details",
                        children: "Witches and Quizards",
                      }),
                    }),
                    a.jsx("div", {
                      className: "match-info",
                      children: "Group 02 | Match 03rd",
                    }),
                  ],
                }),
                a.jsxs("div", {
                  className: "match-time",
                  children: [
                    a.jsxs("h3", {
                      children: [
                        "04:20 ",
                        a.jsx("span", { children: "15TH Dec 2024" }),
                      ],
                    }),
                    a.jsxs("ul", {
                      className: "watch-btn",
                      children: [
                        a.jsx("li", {
                          children: a.jsx("a", {
                            className: "dl-video-popup",
                            "data-autoplay": "true",
                            "data-vbtype": "video",
                            href: "https://www.youtube.com/watch?v=tv7LfFeamsc",
                            children: a.jsx("i", {
                              className: "lab la-youtube",
                            }),
                          }),
                        }),
                        a.jsx("li", {
                          children: a.jsx("a", {
                            className: "dl-video-popup",
                            "data-autoplay": "true",
                            "data-vbtype": "video",
                            href: "https://www.youtube.com/watch?v=tv7LfFeamsc",
                            children: a.jsx("i", {
                              className: "lab la-twitch",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                a.jsxs("div", {
                  className: "participate-team oponent",
                  "data-aos": "fade-right",
                  "data-aos-duration": "1000",
                  "data-aos-delay": "700ms",
                  children: [
                    a.jsx("h3", {
                      children: a.jsx(ne, {
                        to: "/team-details",
                        children: "Resting Bitch Faces",
                      }),
                    }),
                    a.jsx("div", {
                      className: "match-info",
                      children: "Group 02 | Match 03rd",
                    }),
                    a.jsx("img", { src: Ap, alt: "team" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Bm(s) {
  return (
    s !== null &&
    typeof s == "object" &&
    "constructor" in s &&
    s.constructor === Object
  );
}
function mu(s = {}, c = {}) {
  const r = ["__proto__", "constructor", "prototype"];
  Object.keys(c)
    .filter((n) => r.indexOf(n) < 0)
    .forEach((n) => {
      typeof s[n] > "u"
        ? (s[n] = c[n])
        : Bm(c[n]) &&
          Bm(s[n]) &&
          Object.keys(c[n]).length > 0 &&
          mu(s[n], c[n]);
    });
}
const Dp = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function ca() {
  const s = typeof document < "u" ? document : {};
  return (mu(s, Dp), s);
}
const uy = {
  document: Dp,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(s) {
    return typeof setTimeout > "u" ? (s(), null) : setTimeout(s, 0);
  },
  cancelAnimationFrame(s) {
    typeof setTimeout > "u" || clearTimeout(s);
  },
};
function Tt() {
  const s = typeof window < "u" ? window : {};
  return (mu(s, uy), s);
}
function dy(s = "") {
  return s
    .trim()
    .split(" ")
    .filter((c) => !!c.trim());
}
function fy(s) {
  const c = s;
  Object.keys(c).forEach((r) => {
    try {
      c[r] = null;
    } catch {}
    try {
      delete c[r];
    } catch {}
  });
}
function _p(s, c = 0) {
  return setTimeout(s, c);
}
function Rl() {
  return Date.now();
}
function hy(s) {
  const c = Tt();
  let r;
  return (
    c.getComputedStyle && (r = c.getComputedStyle(s, null)),
    !r && s.currentStyle && (r = s.currentStyle),
    r || (r = s.style),
    r
  );
}
function my(s, c = "x") {
  const r = Tt();
  let n, f, d;
  const p = hy(s);
  return (
    r.WebKitCSSMatrix
      ? ((f = p.transform || p.webkitTransform),
        f.split(",").length > 6 &&
          (f = f
            .split(", ")
            .map((x) => x.replace(",", "."))
            .join(", ")),
        (d = new r.WebKitCSSMatrix(f === "none" ? "" : f)))
      : ((d =
          p.MozTransform ||
          p.OTransform ||
          p.MsTransform ||
          p.msTransform ||
          p.transform ||
          p
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (n = d.toString().split(","))),
    c === "x" &&
      (r.WebKitCSSMatrix
        ? (f = d.m41)
        : n.length === 16
          ? (f = parseFloat(n[12]))
          : (f = parseFloat(n[4]))),
    c === "y" &&
      (r.WebKitCSSMatrix
        ? (f = d.m42)
        : n.length === 16
          ? (f = parseFloat(n[13]))
          : (f = parseFloat(n[5]))),
    f || 0
  );
}
function Mi(s) {
  return (
    typeof s == "object" &&
    s !== null &&
    s.constructor &&
    Object.prototype.toString.call(s).slice(8, -1) === "Object"
  );
}
function py(s) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? s instanceof HTMLElement
    : s && (s.nodeType === 1 || s.nodeType === 11);
}
function Vt(...s) {
  const c = Object(s[0]),
    r = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < s.length; n += 1) {
    const f = s[n];
    if (f != null && !py(f)) {
      const d = Object.keys(Object(f)).filter((p) => r.indexOf(p) < 0);
      for (let p = 0, x = d.length; p < x; p += 1) {
        const h = d[p],
          m = Object.getOwnPropertyDescriptor(f, h);
        m !== void 0 &&
          m.enumerable &&
          (Mi(c[h]) && Mi(f[h])
            ? f[h].__swiper__
              ? (c[h] = f[h])
              : Vt(c[h], f[h])
            : !Mi(c[h]) && Mi(f[h])
              ? ((c[h] = {}), f[h].__swiper__ ? (c[h] = f[h]) : Vt(c[h], f[h]))
              : (c[h] = f[h]));
      }
    }
  }
  return c;
}
function Ss(s, c, r) {
  s.style.setProperty(c, r);
}
function Rp({ swiper: s, targetPosition: c, side: r }) {
  const n = Tt(),
    f = -s.translate;
  let d = null,
    p;
  const x = s.params.speed;
  ((s.wrapperEl.style.scrollSnapType = "none"),
    n.cancelAnimationFrame(s.cssModeFrameID));
  const h = c > f ? "next" : "prev",
    m = (g, N) => (h === "next" && g >= N) || (h === "prev" && g <= N),
    j = () => {
      ((p = new Date().getTime()), d === null && (d = p));
      const g = Math.max(Math.min((p - d) / x, 1), 0),
        N = 0.5 - Math.cos(g * Math.PI) / 2;
      let b = f + N * (c - f);
      if ((m(b, c) && (b = c), s.wrapperEl.scrollTo({ [r]: b }), m(b, c))) {
        ((s.wrapperEl.style.overflow = "hidden"),
          (s.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            ((s.wrapperEl.style.overflow = ""),
              s.wrapperEl.scrollTo({ [r]: b }));
          }),
          n.cancelAnimationFrame(s.cssModeFrameID));
        return;
      }
      s.cssModeFrameID = n.requestAnimationFrame(j);
    };
  j();
}
function pu(s) {
  return (
    s.querySelector(".swiper-slide-transform") ||
    (s.shadowRoot && s.shadowRoot.querySelector(".swiper-slide-transform")) ||
    s
  );
}
function na(s, c = "") {
  const r = Tt(),
    n = [...s.children];
  return (
    r.HTMLSlotElement &&
      s instanceof HTMLSlotElement &&
      n.push(...s.assignedElements()),
    c ? n.filter((f) => f.matches(c)) : n
  );
}
function vy(s, c) {
  const r = [c];
  for (; r.length > 0; ) {
    const n = r.shift();
    if (s === n) return !0;
    r.push(
      ...n.children,
      ...(n.shadowRoot ? n.shadowRoot.children : []),
      ...(n.assignedElements ? n.assignedElements() : []),
    );
  }
}
function gy(s, c) {
  const r = Tt();
  let n = c.contains(s);
  return (
    !n &&
      r.HTMLSlotElement &&
      c instanceof HTMLSlotElement &&
      ((n = [...c.assignedElements()].includes(s)), n || (n = vy(s, c))),
    n
  );
}
function or(s) {
  try {
    console.warn(s);
    return;
  } catch {}
}
function Di(s, c = []) {
  const r = document.createElement(s);
  return (r.classList.add(...(Array.isArray(c) ? c : dy(c))), r);
}
function xy(s, c) {
  const r = [];
  for (; s.previousElementSibling; ) {
    const n = s.previousElementSibling;
    (c ? n.matches(c) && r.push(n) : r.push(n), (s = n));
  }
  return r;
}
function jy(s, c) {
  const r = [];
  for (; s.nextElementSibling; ) {
    const n = s.nextElementSibling;
    (c ? n.matches(c) && r.push(n) : r.push(n), (s = n));
  }
  return r;
}
function dl(s, c) {
  return Tt().getComputedStyle(s, null).getPropertyValue(c);
}
function ur(s) {
  let c = s,
    r;
  if (c) {
    for (r = 0; (c = c.previousSibling) !== null; )
      c.nodeType === 1 && (r += 1);
    return r;
  }
}
function Lp(s, c) {
  const r = [];
  let n = s.parentElement;
  for (; n; )
    (c ? n.matches(c) && r.push(n) : r.push(n), (n = n.parentElement));
  return r;
}
function ko(s, c) {
  function r(n) {
    n.target === s && (c.call(s, n), s.removeEventListener("transitionend", r));
  }
  c && s.addEventListener("transitionend", r);
}
function eu(s, c, r) {
  const n = Tt();
  return (
    s[c === "width" ? "offsetWidth" : "offsetHeight"] +
    parseFloat(
      n
        .getComputedStyle(s, null)
        .getPropertyValue(c === "width" ? "margin-right" : "margin-top"),
    ) +
    parseFloat(
      n
        .getComputedStyle(s, null)
        .getPropertyValue(c === "width" ? "margin-left" : "margin-bottom"),
    )
  );
}
function ut(s) {
  return (Array.isArray(s) ? s : [s]).filter((c) => !!c);
}
function yy(s) {
  return (c) =>
    Math.abs(c) > 0 &&
    s.browser &&
    s.browser.need3dFix &&
    Math.abs(c) % 90 === 0
      ? c + 0.001
      : c;
}
function _i(s, c = "") {
  typeof trustedTypes < "u"
    ? (s.innerHTML = trustedTypes
        .createPolicy("html", { createHTML: (r) => r })
        .createHTML(c))
    : (s.innerHTML = c);
}
let Xo;
function by() {
  const s = Tt(),
    c = ca();
  return {
    smoothScroll:
      c.documentElement &&
      c.documentElement.style &&
      "scrollBehavior" in c.documentElement.style,
    touch: !!(
      "ontouchstart" in s ||
      (s.DocumentTouch && c instanceof s.DocumentTouch)
    ),
  };
}
function Bp() {
  return (Xo || (Xo = by()), Xo);
}
let Qo;
function Sy({ userAgent: s } = {}) {
  const c = Bp(),
    r = Tt(),
    n = r.navigator.platform,
    f = s || r.navigator.userAgent,
    d = { ios: !1, android: !1 },
    p = r.screen.width,
    x = r.screen.height,
    h = f.match(/(Android);?[\s\/]+([\d.]+)?/);
  let m = f.match(/(iPad)(?!\1).*OS\s([\d_]+)/);
  const j = f.match(/(iPod)(.*OS\s([\d_]+))?/),
    g = !m && f.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    N = n === "Win32";
  let b = n === "MacIntel";
  const E = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !m &&
      b &&
      c.touch &&
      E.indexOf(`${p}x${x}`) >= 0 &&
      ((m = f.match(/(Version)\/([\d.]+)/)),
      m || (m = [0, 1, "13_0_0"]),
      (b = !1)),
    h && !N && ((d.os = "android"), (d.android = !0)),
    (m || g || j) && ((d.os = "ios"), (d.ios = !0)),
    d
  );
}
function Hp(s = {}) {
  return (Qo || (Qo = Sy(s)), Qo);
}
let Zo;
function Ny() {
  const s = Tt(),
    c = Hp();
  let r = !1;
  function n() {
    const x = s.navigator.userAgent.toLowerCase();
    return (
      x.indexOf("safari") >= 0 &&
      x.indexOf("chrome") < 0 &&
      x.indexOf("android") < 0
    );
  }
  if (n()) {
    const x = String(s.navigator.userAgent);
    if (x.includes("Version/")) {
      const [h, m] = x
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((j) => Number(j));
      r = h < 16 || (h === 16 && m < 2);
    }
  }
  const f = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      s.navigator.userAgent,
    ),
    d = n(),
    p = d || (f && c.ios);
  return {
    isSafari: r || d,
    needPerspectiveFix: r,
    need3dFix: p,
    isWebView: f,
  };
}
function Up() {
  return (Zo || (Zo = Ny()), Zo);
}
function wy({ swiper: s, on: c, emit: r }) {
  const n = Tt();
  let f = null,
    d = null;
  const p = () => {
      !s || s.destroyed || !s.initialized || (r("beforeResize"), r("resize"));
    },
    x = () => {
      !s ||
        s.destroyed ||
        !s.initialized ||
        ((f = new ResizeObserver((j) => {
          d = n.requestAnimationFrame(() => {
            const { width: g, height: N } = s;
            let b = g,
              E = N;
            (j.forEach(({ contentBoxSize: M, contentRect: A, target: S }) => {
              (S && S !== s.el) ||
                ((b = A ? A.width : (M[0] || M).inlineSize),
                (E = A ? A.height : (M[0] || M).blockSize));
            }),
              (b !== g || E !== N) && p());
          });
        })),
        f.observe(s.el));
    },
    h = () => {
      (d && n.cancelAnimationFrame(d),
        f && f.unobserve && s.el && (f.unobserve(s.el), (f = null)));
    },
    m = () => {
      !s || s.destroyed || !s.initialized || r("orientationchange");
    };
  (c("init", () => {
    if (s.params.resizeObserver && typeof n.ResizeObserver < "u") {
      x();
      return;
    }
    (n.addEventListener("resize", p),
      n.addEventListener("orientationchange", m));
  }),
    c("destroy", () => {
      (h(),
        n.removeEventListener("resize", p),
        n.removeEventListener("orientationchange", m));
    }));
}
function Ty({ swiper: s, extendParams: c, on: r, emit: n }) {
  const f = [],
    d = Tt(),
    p = (m, j = {}) => {
      const g = d.MutationObserver || d.WebkitMutationObserver,
        N = new g((b) => {
          if (s.__preventObserver__) return;
          if (b.length === 1) {
            n("observerUpdate", b[0]);
            return;
          }
          const E = function () {
            n("observerUpdate", b[0]);
          };
          d.requestAnimationFrame
            ? d.requestAnimationFrame(E)
            : d.setTimeout(E, 0);
        });
      (N.observe(m, {
        attributes: typeof j.attributes > "u" ? !0 : j.attributes,
        childList: s.isElement || (typeof j.childList > "u" ? !0 : j).childList,
        characterData: typeof j.characterData > "u" ? !0 : j.characterData,
      }),
        f.push(N));
    },
    x = () => {
      if (s.params.observer) {
        if (s.params.observeParents) {
          const m = Lp(s.hostEl);
          for (let j = 0; j < m.length; j += 1) p(m[j]);
        }
        (p(s.hostEl, { childList: s.params.observeSlideChildren }),
          p(s.wrapperEl, { attributes: !1 }));
      }
    },
    h = () => {
      (f.forEach((m) => {
        m.disconnect();
      }),
        f.splice(0, f.length));
    };
  (c({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    r("init", x),
    r("destroy", h));
}
var Ey = {
  on(s, c, r) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof c != "function") return n;
    const f = r ? "unshift" : "push";
    return (
      s.split(" ").forEach((d) => {
        (n.eventsListeners[d] || (n.eventsListeners[d] = []),
          n.eventsListeners[d][f](c));
      }),
      n
    );
  },
  once(s, c, r) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof c != "function") return n;
    function f(...d) {
      (n.off(s, f), f.__emitterProxy && delete f.__emitterProxy, c.apply(n, d));
    }
    return ((f.__emitterProxy = c), n.on(s, f, r));
  },
  onAny(s, c) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof s != "function") return r;
    const n = c ? "unshift" : "push";
    return (
      r.eventsAnyListeners.indexOf(s) < 0 && r.eventsAnyListeners[n](s),
      r
    );
  },
  offAny(s) {
    const c = this;
    if (!c.eventsListeners || c.destroyed || !c.eventsAnyListeners) return c;
    const r = c.eventsAnyListeners.indexOf(s);
    return (r >= 0 && c.eventsAnyListeners.splice(r, 1), c);
  },
  off(s, c) {
    const r = this;
    return (
      !r.eventsListeners ||
        r.destroyed ||
        !r.eventsListeners ||
        s.split(" ").forEach((n) => {
          typeof c > "u"
            ? (r.eventsListeners[n] = [])
            : r.eventsListeners[n] &&
              r.eventsListeners[n].forEach((f, d) => {
                (f === c || (f.__emitterProxy && f.__emitterProxy === c)) &&
                  r.eventsListeners[n].splice(d, 1);
              });
        }),
      r
    );
  },
  emit(...s) {
    const c = this;
    if (!c.eventsListeners || c.destroyed || !c.eventsListeners) return c;
    let r, n, f;
    return (
      typeof s[0] == "string" || Array.isArray(s[0])
        ? ((r = s[0]), (n = s.slice(1, s.length)), (f = c))
        : ((r = s[0].events), (n = s[0].data), (f = s[0].context || c)),
      n.unshift(f),
      (Array.isArray(r) ? r : r.split(" ")).forEach((p) => {
        (c.eventsAnyListeners &&
          c.eventsAnyListeners.length &&
          c.eventsAnyListeners.forEach((x) => {
            x.apply(f, [p, ...n]);
          }),
          c.eventsListeners &&
            c.eventsListeners[p] &&
            c.eventsListeners[p].forEach((x) => {
              x.apply(f, n);
            }));
      }),
      c
    );
  },
};
function Cy() {
  const s = this;
  let c, r;
  const n = s.el;
  (typeof s.params.width < "u" && s.params.width !== null
    ? (c = s.params.width)
    : (c = n.clientWidth),
    typeof s.params.height < "u" && s.params.height !== null
      ? (r = s.params.height)
      : (r = n.clientHeight),
    !((c === 0 && s.isHorizontal()) || (r === 0 && s.isVertical())) &&
      ((c =
        c -
        parseInt(dl(n, "padding-left") || 0, 10) -
        parseInt(dl(n, "padding-right") || 0, 10)),
      (r =
        r -
        parseInt(dl(n, "padding-top") || 0, 10) -
        parseInt(dl(n, "padding-bottom") || 0, 10)),
      Number.isNaN(c) && (c = 0),
      Number.isNaN(r) && (r = 0),
      Object.assign(s, {
        width: c,
        height: r,
        size: s.isHorizontal() ? c : r,
      })));
}
function My() {
  const s = this;
  function c(L, _) {
    return parseFloat(L.getPropertyValue(s.getDirectionLabel(_)) || 0);
  }
  const r = s.params,
    { wrapperEl: n, slidesEl: f, rtlTranslate: d, wrongRTL: p } = s,
    x = s.virtual && r.virtual.enabled,
    h = x ? s.virtual.slides.length : s.slides.length,
    m = na(f, `.${s.params.slideClass}, swiper-slide`),
    j = x ? s.virtual.slides.length : m.length;
  let g = [];
  const N = [],
    b = [];
  let E = r.slidesOffsetBefore;
  typeof E == "function" && (E = r.slidesOffsetBefore.call(s));
  let M = r.slidesOffsetAfter;
  typeof M == "function" && (M = r.slidesOffsetAfter.call(s));
  const A = s.snapGrid.length,
    S = s.slidesGrid.length,
    w = s.size - E - M;
  let z = r.spaceBetween,
    J = -E,
    $ = 0,
    ee = 0;
  if (typeof w > "u") return;
  (typeof z == "string" && z.indexOf("%") >= 0
    ? (z = (parseFloat(z.replace("%", "")) / 100) * w)
    : typeof z == "string" && (z = parseFloat(z)),
    (s.virtualSize = -z - E - M),
    m.forEach((L) => {
      (d ? (L.style.marginLeft = "") : (L.style.marginRight = ""),
        (L.style.marginBottom = ""),
        (L.style.marginTop = ""));
    }),
    r.centeredSlides &&
      r.cssMode &&
      (Ss(n, "--swiper-centered-offset-before", ""),
      Ss(n, "--swiper-centered-offset-after", "")),
    r.cssMode &&
      (Ss(n, "--swiper-slides-offset-before", `${E}px`),
      Ss(n, "--swiper-slides-offset-after", `${M}px`)));
  const K = r.grid && r.grid.rows > 1 && s.grid;
  K ? s.grid.initSlides(m) : s.grid && s.grid.unsetSlides();
  let T;
  const G =
    r.slidesPerView === "auto" &&
    r.breakpoints &&
    Object.keys(r.breakpoints).filter(
      (L) => typeof r.breakpoints[L].slidesPerView < "u",
    ).length > 0;
  for (let L = 0; L < j; L += 1) {
    T = 0;
    const _ = m[L];
    if (
      !(_ && (K && s.grid.updateSlide(L, _, m), dl(_, "display") === "none"))
    ) {
      if (x && r.slidesPerView === "auto")
        (r.virtual.slidesPerViewAutoSlideSize &&
          (T = r.virtual.slidesPerViewAutoSlideSize),
          T &&
            _ &&
            (r.roundLengths && (T = Math.floor(T)),
            (_.style[s.getDirectionLabel("width")] = `${T}px`)));
      else if (r.slidesPerView === "auto") {
        G && (_.style[s.getDirectionLabel("width")] = "");
        const B = getComputedStyle(_),
          ae = _.style.transform,
          te = _.style.webkitTransform;
        if (
          (ae && (_.style.transform = "none"),
          te && (_.style.webkitTransform = "none"),
          r.roundLengths)
        )
          T = s.isHorizontal() ? eu(_, "width") : eu(_, "height");
        else {
          const ce = c(B, "width"),
            U = c(B, "padding-left"),
            X = c(B, "padding-right"),
            Q = c(B, "margin-left"),
            ie = c(B, "margin-right"),
            de = B.getPropertyValue("box-sizing");
          if (de && de === "border-box") T = ce + Q + ie;
          else {
            const { clientWidth: O, offsetWidth: F } = _;
            T = ce + U + X + Q + ie + (F - O);
          }
        }
        (ae && (_.style.transform = ae),
          te && (_.style.webkitTransform = te),
          r.roundLengths && (T = Math.floor(T)));
      } else
        ((T = (w - (r.slidesPerView - 1) * z) / r.slidesPerView),
          r.roundLengths && (T = Math.floor(T)),
          _ && (_.style[s.getDirectionLabel("width")] = `${T}px`));
      (_ && (_.swiperSlideSize = T),
        b.push(T),
        r.centeredSlides
          ? ((J = J + T / 2 + $ / 2 + z),
            $ === 0 && L !== 0 && (J = J - w / 2 - z),
            L === 0 && (J = J - w / 2 - z),
            Math.abs(J) < 1 / 1e3 && (J = 0),
            r.roundLengths && (J = Math.floor(J)),
            ee % r.slidesPerGroup === 0 && g.push(J),
            N.push(J))
          : (r.roundLengths && (J = Math.floor(J)),
            (ee - Math.min(s.params.slidesPerGroupSkip, ee)) %
              s.params.slidesPerGroup ===
              0 && g.push(J),
            N.push(J),
            (J = J + T + z)),
        (s.virtualSize += T + z),
        ($ = T),
        (ee += 1));
    }
  }
  if (
    ((s.virtualSize = Math.max(s.virtualSize, w) + M),
    d &&
      p &&
      (r.effect === "slide" || r.effect === "coverflow") &&
      (n.style.width = `${s.virtualSize + z}px`),
    r.setWrapperSize &&
      (n.style[s.getDirectionLabel("width")] = `${s.virtualSize + z}px`),
    K && s.grid.updateWrapperSize(T, g),
    !r.centeredSlides)
  ) {
    const L = r.slidesPerView !== "auto" && r.slidesPerView % 1 !== 0,
      _ = r.snapToSlideEdge && !r.loop && (r.slidesPerView === "auto" || L);
    let B = g.length;
    if (_) {
      let te;
      if (r.slidesPerView === "auto") {
        te = 1;
        let ce = 0;
        for (
          let U = b.length - 1;
          U >= 0 && ((ce += b[U] + (U < b.length - 1 ? z : 0)), ce <= w);
          U -= 1
        )
          te = b.length - U;
      } else te = Math.floor(r.slidesPerView);
      B = Math.max(j - te, 0);
    }
    const ae = [];
    for (let te = 0; te < g.length; te += 1) {
      let ce = g[te];
      (r.roundLengths && (ce = Math.floor(ce)),
        _ ? te <= B && ae.push(ce) : g[te] <= s.virtualSize - w && ae.push(ce));
    }
    ((g = ae),
      Math.floor(s.virtualSize - w) - Math.floor(g[g.length - 1]) > 1 &&
        (_ || g.push(s.virtualSize - w)));
  }
  if (x && r.loop) {
    const L = b[0] + z;
    if (r.slidesPerGroup > 1) {
      const _ = Math.ceil(
          (s.virtual.slidesBefore + s.virtual.slidesAfter) / r.slidesPerGroup,
        ),
        B = L * r.slidesPerGroup;
      for (let ae = 0; ae < _; ae += 1) g.push(g[g.length - 1] + B);
    }
    for (let _ = 0; _ < s.virtual.slidesBefore + s.virtual.slidesAfter; _ += 1)
      (r.slidesPerGroup === 1 && g.push(g[g.length - 1] + L),
        N.push(N[N.length - 1] + L),
        (s.virtualSize += L));
  }
  if ((g.length === 0 && (g = [0]), z !== 0)) {
    const L =
      s.isHorizontal() && d ? "marginLeft" : s.getDirectionLabel("marginRight");
    m.filter((_, B) =>
      !r.cssMode || r.loop ? !0 : B !== m.length - 1,
    ).forEach((_) => {
      _.style[L] = `${z}px`;
    });
  }
  if (r.centeredSlides && r.centeredSlidesBounds) {
    let L = 0;
    (b.forEach((B) => {
      L += B + (z || 0);
    }),
      (L -= z));
    const _ = L > w ? L - w : 0;
    g = g.map((B) => (B <= 0 ? -E : B > _ ? _ + M : B));
  }
  if (r.centerInsufficientSlides) {
    let L = 0;
    (b.forEach((B) => {
      L += B + (z || 0);
    }),
      (L -= z));
    const _ = (E || 0) + (M || 0);
    if (L + _ < w) {
      const B = (w - L - _) / 2;
      (g.forEach((ae, te) => {
        g[te] = ae - B;
      }),
        N.forEach((ae, te) => {
          N[te] = ae + B;
        }));
    }
  }
  if (
    (Object.assign(s, {
      slides: m,
      snapGrid: g,
      slidesGrid: N,
      slidesSizesGrid: b,
    }),
    r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
  ) {
    (Ss(n, "--swiper-centered-offset-before", `${-g[0]}px`),
      Ss(
        n,
        "--swiper-centered-offset-after",
        `${s.size / 2 - b[b.length - 1] / 2}px`,
      ));
    const L = -s.snapGrid[0],
      _ = -s.slidesGrid[0];
    ((s.snapGrid = s.snapGrid.map((B) => B + L)),
      (s.slidesGrid = s.slidesGrid.map((B) => B + _)));
  }
  if (
    (j !== h && s.emit("slidesLengthChange"),
    g.length !== A &&
      (s.params.watchOverflow && s.checkOverflow(),
      s.emit("snapGridLengthChange")),
    N.length !== S && s.emit("slidesGridLengthChange"),
    r.watchSlidesProgress && s.updateSlidesOffset(),
    s.emit("slidesUpdated"),
    !x && !r.cssMode && (r.effect === "slide" || r.effect === "fade"))
  ) {
    const L = `${r.containerModifierClass}backface-hidden`,
      _ = s.el.classList.contains(L);
    j <= r.maxBackfaceHiddenSlides
      ? _ || s.el.classList.add(L)
      : _ && s.el.classList.remove(L);
  }
}
function Oy(s) {
  const c = this,
    r = [],
    n = c.virtual && c.params.virtual.enabled;
  let f = 0,
    d;
  typeof s == "number"
    ? c.setTransition(s)
    : s === !0 && c.setTransition(c.params.speed);
  const p = (x) => (n ? c.slides[c.getSlideIndexByData(x)] : c.slides[x]);
  if (c.params.slidesPerView !== "auto" && c.params.slidesPerView > 1)
    if (c.params.centeredSlides)
      (c.visibleSlides || []).forEach((x) => {
        r.push(x);
      });
    else
      for (d = 0; d < Math.ceil(c.params.slidesPerView); d += 1) {
        const x = c.activeIndex + d;
        if (x > c.slides.length && !n) break;
        r.push(p(x));
      }
  else r.push(p(c.activeIndex));
  for (d = 0; d < r.length; d += 1)
    if (typeof r[d] < "u") {
      const x = r[d].offsetHeight;
      f = x > f ? x : f;
    }
  (f || f === 0) && (c.wrapperEl.style.height = `${f}px`);
}
function Ay() {
  const s = this,
    c = s.slides,
    r = s.isElement
      ? s.isHorizontal()
        ? s.wrapperEl.offsetLeft
        : s.wrapperEl.offsetTop
      : 0;
  for (let n = 0; n < c.length; n += 1)
    c[n].swiperSlideOffset =
      (s.isHorizontal() ? c[n].offsetLeft : c[n].offsetTop) -
      r -
      s.cssOverflowAdjustment();
}
const Hm = (s, c, r) => {
  c && !s.classList.contains(r)
    ? s.classList.add(r)
    : !c && s.classList.contains(r) && s.classList.remove(r);
};
function zy(s = (this && this.translate) || 0) {
  const c = this,
    r = c.params,
    { slides: n, rtlTranslate: f, snapGrid: d } = c;
  if (n.length === 0) return;
  typeof n[0].swiperSlideOffset > "u" && c.updateSlidesOffset();
  let p = -s;
  (f && (p = s), (c.visibleSlidesIndexes = []), (c.visibleSlides = []));
  let x = r.spaceBetween;
  typeof x == "string" && x.indexOf("%") >= 0
    ? (x = (parseFloat(x.replace("%", "")) / 100) * c.size)
    : typeof x == "string" && (x = parseFloat(x));
  for (let h = 0; h < n.length; h += 1) {
    const m = n[h];
    let j = m.swiperSlideOffset;
    r.cssMode && r.centeredSlides && (j -= n[0].swiperSlideOffset);
    const g =
        (p + (r.centeredSlides ? c.minTranslate() : 0) - j) /
        (m.swiperSlideSize + x),
      N =
        (p - d[0] + (r.centeredSlides ? c.minTranslate() : 0) - j) /
        (m.swiperSlideSize + x),
      b = -(p - j),
      E = b + c.slidesSizesGrid[h],
      M = b >= 0 && b <= c.size - c.slidesSizesGrid[h],
      A =
        (b >= 0 && b < c.size - 1) ||
        (E > 1 && E <= c.size) ||
        (b <= 0 && E >= c.size);
    (A && (c.visibleSlides.push(m), c.visibleSlidesIndexes.push(h)),
      Hm(m, A, r.slideVisibleClass),
      Hm(m, M, r.slideFullyVisibleClass),
      (m.progress = f ? -g : g),
      (m.originalProgress = f ? -N : N));
  }
}
function Dy(s) {
  const c = this;
  if (typeof s > "u") {
    const j = c.rtlTranslate ? -1 : 1;
    s = (c && c.translate && c.translate * j) || 0;
  }
  const r = c.params,
    n = c.maxTranslate() - c.minTranslate();
  let { progress: f, isBeginning: d, isEnd: p, progressLoop: x } = c;
  const h = d,
    m = p;
  if (n === 0) ((f = 0), (d = !0), (p = !0));
  else {
    f = (s - c.minTranslate()) / n;
    const j = Math.abs(s - c.minTranslate()) < 1,
      g = Math.abs(s - c.maxTranslate()) < 1;
    ((d = j || f <= 0), (p = g || f >= 1), j && (f = 0), g && (f = 1));
  }
  if (r.loop) {
    const j = c.getSlideIndexByData(0),
      g = c.getSlideIndexByData(c.slides.length - 1),
      N = c.slidesGrid[j],
      b = c.slidesGrid[g],
      E = c.slidesGrid[c.slidesGrid.length - 1],
      M = Math.abs(s);
    (M >= N ? (x = (M - N) / E) : (x = (M + E - b) / E), x > 1 && (x -= 1));
  }
  (Object.assign(c, { progress: f, progressLoop: x, isBeginning: d, isEnd: p }),
    (r.watchSlidesProgress || (r.centeredSlides && r.autoHeight)) &&
      c.updateSlidesProgress(s),
    d && !h && c.emit("reachBeginning toEdge"),
    p && !m && c.emit("reachEnd toEdge"),
    ((h && !d) || (m && !p)) && c.emit("fromEdge"),
    c.emit("progress", f));
}
const Jo = (s, c, r) => {
  c && !s.classList.contains(r)
    ? s.classList.add(r)
    : !c && s.classList.contains(r) && s.classList.remove(r);
};
function _y() {
  const s = this,
    { slides: c, params: r, slidesEl: n, activeIndex: f } = s,
    d = s.virtual && r.virtual.enabled,
    p = s.grid && r.grid && r.grid.rows > 1,
    x = (g) => na(n, `.${r.slideClass}${g}, swiper-slide${g}`)[0];
  let h, m, j;
  if (d)
    if (r.loop) {
      let g = f - s.virtual.slidesBefore;
      (g < 0 && (g = s.virtual.slides.length + g),
        g >= s.virtual.slides.length && (g -= s.virtual.slides.length),
        (h = x(`[data-swiper-slide-index="${g}"]`)));
    } else h = x(`[data-swiper-slide-index="${f}"]`);
  else
    p
      ? ((h = c.find((g) => g.column === f)),
        (j = c.find((g) => g.column === f + 1)),
        (m = c.find((g) => g.column === f - 1)))
      : (h = c[f]);
  (h &&
    (p ||
      ((j = jy(h, `.${r.slideClass}, swiper-slide`)[0]),
      r.loop && !j && (j = c[0]),
      (m = xy(h, `.${r.slideClass}, swiper-slide`)[0]),
      r.loop && !m === 0 && (m = c[c.length - 1]))),
    c.forEach((g) => {
      (Jo(g, g === h, r.slideActiveClass),
        Jo(g, g === j, r.slideNextClass),
        Jo(g, g === m, r.slidePrevClass));
    }),
    s.emitSlidesClasses());
}
const nr = (s, c) => {
    if (!s || s.destroyed || !s.params) return;
    const r = () => (s.isElement ? "swiper-slide" : `.${s.params.slideClass}`),
      n = c.closest(r());
    if (n) {
      let f = n.querySelector(`.${s.params.lazyPreloaderClass}`);
      (!f &&
        s.isElement &&
        (n.shadowRoot
          ? (f = n.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              n.shadowRoot &&
                ((f = n.shadowRoot.querySelector(
                  `.${s.params.lazyPreloaderClass}`,
                )),
                f && !f.lazyPreloaderManaged && f.remove());
            })),
        f && !f.lazyPreloaderManaged && f.remove());
    }
  },
  Fo = (s, c) => {
    if (!s.slides[c]) return;
    const r = s.slides[c].querySelector('[loading="lazy"]');
    r && r.removeAttribute("loading");
  },
  tu = (s) => {
    if (!s || s.destroyed || !s.params) return;
    let c = s.params.lazyPreloadPrevNext;
    const r = s.slides.length;
    if (!r || !c || c < 0) return;
    c = Math.min(c, r);
    const n =
        s.params.slidesPerView === "auto"
          ? s.slidesPerViewDynamic()
          : Math.ceil(s.params.slidesPerView),
      f = s.activeIndex;
    if (s.params.grid && s.params.grid.rows > 1) {
      const p = f,
        x = [p - c];
      (x.push(...Array.from({ length: c }).map((h, m) => p + n + m)),
        s.slides.forEach((h, m) => {
          x.includes(h.column) && Fo(s, m);
        }));
      return;
    }
    const d = f + n - 1;
    if (s.params.rewind || s.params.loop)
      for (let p = f - c; p <= d + c; p += 1) {
        const x = ((p % r) + r) % r;
        (x < f || x > d) && Fo(s, x);
      }
    else
      for (let p = Math.max(f - c, 0); p <= Math.min(d + c, r - 1); p += 1)
        p !== f && (p > d || p < f) && Fo(s, p);
  };
function Ry(s) {
  const { slidesGrid: c, params: r } = s,
    n = s.rtlTranslate ? s.translate : -s.translate;
  let f;
  for (let d = 0; d < c.length; d += 1)
    typeof c[d + 1] < "u"
      ? n >= c[d] && n < c[d + 1] - (c[d + 1] - c[d]) / 2
        ? (f = d)
        : n >= c[d] && n < c[d + 1] && (f = d + 1)
      : n >= c[d] && (f = d);
  return (r.normalizeSlideIndex && (f < 0 || typeof f > "u") && (f = 0), f);
}
function Ly(s) {
  const c = this,
    r = c.rtlTranslate ? c.translate : -c.translate,
    { snapGrid: n, params: f, activeIndex: d, realIndex: p, snapIndex: x } = c;
  let h = s,
    m;
  const j = (b) => {
    let E = b - c.virtual.slidesBefore;
    return (
      E < 0 && (E = c.virtual.slides.length + E),
      E >= c.virtual.slides.length && (E -= c.virtual.slides.length),
      E
    );
  };
  if ((typeof h > "u" && (h = Ry(c)), n.indexOf(r) >= 0)) m = n.indexOf(r);
  else {
    const b = Math.min(f.slidesPerGroupSkip, h);
    m = b + Math.floor((h - b) / f.slidesPerGroup);
  }
  if ((m >= n.length && (m = n.length - 1), h === d && !c.params.loop)) {
    m !== x && ((c.snapIndex = m), c.emit("snapIndexChange"));
    return;
  }
  if (h === d && c.params.loop && c.virtual && c.params.virtual.enabled) {
    c.realIndex = j(h);
    return;
  }
  const g = c.grid && f.grid && f.grid.rows > 1;
  let N;
  if (c.virtual && f.virtual.enabled) f.loop ? (N = j(h)) : (N = h);
  else if (g) {
    const b = c.slides.find((M) => M.column === h);
    let E = parseInt(b.getAttribute("data-swiper-slide-index"), 10);
    (Number.isNaN(E) && (E = Math.max(c.slides.indexOf(b), 0)),
      (N = Math.floor(E / f.grid.rows)));
  } else if (c.slides[h]) {
    const b = c.slides[h].getAttribute("data-swiper-slide-index");
    b ? (N = parseInt(b, 10)) : (N = h);
  } else N = h;
  (Object.assign(c, {
    previousSnapIndex: x,
    snapIndex: m,
    previousRealIndex: p,
    realIndex: N,
    previousIndex: d,
    activeIndex: h,
  }),
    c.initialized && tu(c),
    c.emit("activeIndexChange"),
    c.emit("snapIndexChange"),
    (c.initialized || c.params.runCallbacksOnInit) &&
      (p !== N && c.emit("realIndexChange"), c.emit("slideChange")));
}
function By(s, c) {
  const r = this,
    n = r.params;
  let f = s.closest(`.${n.slideClass}, swiper-slide`);
  !f &&
    r.isElement &&
    c &&
    c.length > 1 &&
    c.includes(s) &&
    [...c.slice(c.indexOf(s) + 1, c.length)].forEach((x) => {
      !f && x.matches && x.matches(`.${n.slideClass}, swiper-slide`) && (f = x);
    });
  let d = !1,
    p;
  if (f) {
    for (let x = 0; x < r.slides.length; x += 1)
      if (r.slides[x] === f) {
        ((d = !0), (p = x));
        break;
      }
  }
  if (f && d)
    ((r.clickedSlide = f),
      r.virtual && r.params.virtual.enabled
        ? (r.clickedIndex = parseInt(
            f.getAttribute("data-swiper-slide-index"),
            10,
          ))
        : (r.clickedIndex = p));
  else {
    ((r.clickedSlide = void 0), (r.clickedIndex = void 0));
    return;
  }
  n.slideToClickedSlide &&
    r.clickedIndex !== void 0 &&
    r.clickedIndex !== r.activeIndex &&
    r.slideToClickedSlide();
}
var Hy = {
  updateSize: Cy,
  updateSlides: My,
  updateAutoHeight: Oy,
  updateSlidesOffset: Ay,
  updateSlidesProgress: zy,
  updateProgress: Dy,
  updateSlidesClasses: _y,
  updateActiveIndex: Ly,
  updateClickedSlide: By,
};
function Uy(s = this.isHorizontal() ? "x" : "y") {
  const c = this,
    { params: r, rtlTranslate: n, translate: f, wrapperEl: d } = c;
  if (r.virtualTranslate) return n ? -f : f;
  if (r.cssMode) return f;
  let p = my(d, s);
  return ((p += c.cssOverflowAdjustment()), n && (p = -p), p || 0);
}
function Gy(s, c) {
  const r = this,
    { rtlTranslate: n, params: f, wrapperEl: d, progress: p } = r;
  let x = 0,
    h = 0;
  const m = 0;
  (r.isHorizontal() ? (x = n ? -s : s) : (h = s),
    f.roundLengths && ((x = Math.floor(x)), (h = Math.floor(h))),
    (r.previousTranslate = r.translate),
    (r.translate = r.isHorizontal() ? x : h),
    f.cssMode
      ? (d[r.isHorizontal() ? "scrollLeft" : "scrollTop"] = r.isHorizontal()
          ? -x
          : -h)
      : f.virtualTranslate ||
        (r.isHorizontal()
          ? (x -= r.cssOverflowAdjustment())
          : (h -= r.cssOverflowAdjustment()),
        (d.style.transform = `translate3d(${x}px, ${h}px, ${m}px)`)));
  let j;
  const g = r.maxTranslate() - r.minTranslate();
  (g === 0 ? (j = 0) : (j = (s - r.minTranslate()) / g),
    j !== p && r.updateProgress(s),
    r.emit("setTranslate", r.translate, c));
}
function qy() {
  return -this.snapGrid[0];
}
function Vy() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Yy(s = 0, c = this.params.speed, r = !0, n = !0, f) {
  const d = this,
    { params: p, wrapperEl: x } = d;
  if (d.animating && p.preventInteractionOnTransition) return !1;
  const h = d.minTranslate(),
    m = d.maxTranslate();
  let j;
  if (
    (n && s > h ? (j = h) : n && s < m ? (j = m) : (j = s),
    d.updateProgress(j),
    p.cssMode)
  ) {
    const g = d.isHorizontal();
    if (c === 0) x[g ? "scrollLeft" : "scrollTop"] = -j;
    else {
      if (!d.support.smoothScroll)
        return (
          Rp({ swiper: d, targetPosition: -j, side: g ? "left" : "top" }),
          !0
        );
      x.scrollTo({ [g ? "left" : "top"]: -j, behavior: "smooth" });
    }
    return !0;
  }
  return (
    c === 0
      ? (d.setTransition(0),
        d.setTranslate(j),
        r && (d.emit("beforeTransitionStart", c, f), d.emit("transitionEnd")))
      : (d.setTransition(c),
        d.setTranslate(j),
        r && (d.emit("beforeTransitionStart", c, f), d.emit("transitionStart")),
        d.animating ||
          ((d.animating = !0),
          d.onTranslateToWrapperTransitionEnd ||
            (d.onTranslateToWrapperTransitionEnd = function (N) {
              !d ||
                d.destroyed ||
                (N.target === this &&
                  (d.wrapperEl.removeEventListener(
                    "transitionend",
                    d.onTranslateToWrapperTransitionEnd,
                  ),
                  (d.onTranslateToWrapperTransitionEnd = null),
                  delete d.onTranslateToWrapperTransitionEnd,
                  (d.animating = !1),
                  r && d.emit("transitionEnd")));
            }),
          d.wrapperEl.addEventListener(
            "transitionend",
            d.onTranslateToWrapperTransitionEnd,
          ))),
    !0
  );
}
var ky = {
  getTranslate: Uy,
  setTranslate: Gy,
  minTranslate: qy,
  maxTranslate: Vy,
  translateTo: Yy,
};
function Xy(s, c) {
  const r = this;
  (r.params.cssMode ||
    ((r.wrapperEl.style.transitionDuration = `${s}ms`),
    (r.wrapperEl.style.transitionDelay = s === 0 ? "0ms" : "")),
    r.emit("setTransition", s, c));
}
function Gp({ swiper: s, runCallbacks: c, direction: r, step: n }) {
  const { activeIndex: f, previousIndex: d } = s;
  let p = r;
  (p || (f > d ? (p = "next") : f < d ? (p = "prev") : (p = "reset")),
    s.emit(`transition${n}`),
    c && p === "reset"
      ? s.emit(`slideResetTransition${n}`)
      : c &&
        f !== d &&
        (s.emit(`slideChangeTransition${n}`),
        p === "next"
          ? s.emit(`slideNextTransition${n}`)
          : s.emit(`slidePrevTransition${n}`)));
}
function Qy(s = !0, c) {
  const r = this,
    { params: n } = r;
  n.cssMode ||
    (n.autoHeight && r.updateAutoHeight(),
    Gp({ swiper: r, runCallbacks: s, direction: c, step: "Start" }));
}
function Zy(s = !0, c) {
  const r = this,
    { params: n } = r;
  ((r.animating = !1),
    !n.cssMode &&
      (r.setTransition(0),
      Gp({ swiper: r, runCallbacks: s, direction: c, step: "End" })));
}
var Jy = { setTransition: Xy, transitionStart: Qy, transitionEnd: Zy };
function Fy(s = 0, c, r = !0, n, f) {
  typeof s == "string" && (s = parseInt(s, 10));
  const d = this;
  let p = s;
  p < 0 && (p = 0);
  const {
    params: x,
    snapGrid: h,
    slidesGrid: m,
    previousIndex: j,
    activeIndex: g,
    rtlTranslate: N,
    wrapperEl: b,
    enabled: E,
  } = d;
  if (
    (!E && !n && !f) ||
    d.destroyed ||
    (d.animating && x.preventInteractionOnTransition)
  )
    return !1;
  typeof c > "u" && (c = d.params.speed);
  const M = Math.min(d.params.slidesPerGroupSkip, p);
  let A = M + Math.floor((p - M) / d.params.slidesPerGroup);
  A >= h.length && (A = h.length - 1);
  const S = -h[A];
  if (x.normalizeSlideIndex)
    for (let K = 0; K < m.length; K += 1) {
      const T = -Math.floor(S * 100),
        G = Math.floor(m[K] * 100),
        L = Math.floor(m[K + 1] * 100);
      typeof m[K + 1] < "u"
        ? T >= G && T < L - (L - G) / 2
          ? (p = K)
          : T >= G && T < L && (p = K + 1)
        : T >= G && (p = K);
    }
  if (
    d.initialized &&
    p !== g &&
    ((!d.allowSlideNext &&
      (N
        ? S > d.translate && S > d.minTranslate()
        : S < d.translate && S < d.minTranslate())) ||
      (!d.allowSlidePrev &&
        S > d.translate &&
        S > d.maxTranslate() &&
        (g || 0) !== p))
  )
    return !1;
  (p !== (j || 0) && r && d.emit("beforeSlideChangeStart"),
    d.updateProgress(S));
  let w;
  p > g ? (w = "next") : p < g ? (w = "prev") : (w = "reset");
  const z = d.virtual && d.params.virtual.enabled;
  if (!(z && f) && ((N && -S === d.translate) || (!N && S === d.translate)))
    return (
      d.updateActiveIndex(p),
      x.autoHeight && d.updateAutoHeight(),
      d.updateSlidesClasses(),
      x.effect !== "slide" && d.setTranslate(S),
      w !== "reset" && (d.transitionStart(r, w), d.transitionEnd(r, w)),
      !1
    );
  if (x.cssMode) {
    const K = d.isHorizontal(),
      T = N ? S : -S;
    if (c === 0)
      (z &&
        ((d.wrapperEl.style.scrollSnapType = "none"),
        (d._immediateVirtual = !0)),
        z && !d._cssModeVirtualInitialSet && d.params.initialSlide > 0
          ? ((d._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              b[K ? "scrollLeft" : "scrollTop"] = T;
            }))
          : (b[K ? "scrollLeft" : "scrollTop"] = T),
        z &&
          requestAnimationFrame(() => {
            ((d.wrapperEl.style.scrollSnapType = ""),
              (d._immediateVirtual = !1));
          }));
    else {
      if (!d.support.smoothScroll)
        return (
          Rp({ swiper: d, targetPosition: T, side: K ? "left" : "top" }),
          !0
        );
      b.scrollTo({ [K ? "left" : "top"]: T, behavior: "smooth" });
    }
    return !0;
  }
  const ee = Up().isSafari;
  return (
    z && !f && ee && d.isElement && d.virtual.update(!1, !1, p),
    d.setTransition(c),
    d.setTranslate(S),
    d.updateActiveIndex(p),
    d.updateSlidesClasses(),
    d.emit("beforeTransitionStart", c, n),
    d.transitionStart(r, w),
    c === 0
      ? d.transitionEnd(r, w)
      : d.animating ||
        ((d.animating = !0),
        d.onSlideToWrapperTransitionEnd ||
          (d.onSlideToWrapperTransitionEnd = function (T) {
            !d ||
              d.destroyed ||
              (T.target === this &&
                (d.wrapperEl.removeEventListener(
                  "transitionend",
                  d.onSlideToWrapperTransitionEnd,
                ),
                (d.onSlideToWrapperTransitionEnd = null),
                delete d.onSlideToWrapperTransitionEnd,
                d.transitionEnd(r, w)));
          }),
        d.wrapperEl.addEventListener(
          "transitionend",
          d.onSlideToWrapperTransitionEnd,
        )),
    !0
  );
}
function $y(s = 0, c, r = !0, n) {
  typeof s == "string" && (s = parseInt(s, 10));
  const f = this;
  if (f.destroyed) return;
  typeof c > "u" && (c = f.params.speed);
  const d = f.grid && f.params.grid && f.params.grid.rows > 1;
  let p = s;
  if (f.params.loop)
    if (f.virtual && f.params.virtual.enabled) p = p + f.virtual.slidesBefore;
    else {
      let x;
      if (d) {
        const M = p * f.params.grid.rows;
        x = f.slides.find(
          (A) => A.getAttribute("data-swiper-slide-index") * 1 === M,
        ).column;
      } else x = f.getSlideIndexByData(p);
      const h = d
          ? Math.ceil(f.slides.length / f.params.grid.rows)
          : f.slides.length,
        {
          centeredSlides: m,
          slidesOffsetBefore: j,
          slidesOffsetAfter: g,
        } = f.params,
        N = m || !!j || !!g;
      let b = f.params.slidesPerView;
      b === "auto"
        ? (b = f.slidesPerViewDynamic())
        : ((b = Math.ceil(parseFloat(f.params.slidesPerView, 10))),
          N && b % 2 === 0 && (b = b + 1));
      let E = h - x < b;
      if (
        (N && (E = E || x < Math.ceil(b / 2)),
        n && N && f.params.slidesPerView !== "auto" && !d && (E = !1),
        E)
      ) {
        const M = N
          ? x < f.activeIndex
            ? "prev"
            : "next"
          : x - f.activeIndex - 1 < f.params.slidesPerView
            ? "next"
            : "prev";
        f.loopFix({
          direction: M,
          slideTo: !0,
          activeSlideIndex: M === "next" ? x + 1 : x - h + 1,
          slideRealIndex: M === "next" ? f.realIndex : void 0,
        });
      }
      if (d) {
        const M = p * f.params.grid.rows;
        p = f.slides.find(
          (A) => A.getAttribute("data-swiper-slide-index") * 1 === M,
        ).column;
      } else p = f.getSlideIndexByData(p);
    }
  return (
    requestAnimationFrame(() => {
      f.slideTo(p, c, r, n);
    }),
    f
  );
}
function Ky(s, c = !0, r) {
  const n = this,
    { enabled: f, params: d, animating: p } = n;
  if (!f || n.destroyed) return n;
  typeof s > "u" && (s = n.params.speed);
  let x = d.slidesPerGroup;
  d.slidesPerView === "auto" &&
    d.slidesPerGroup === 1 &&
    d.slidesPerGroupAuto &&
    (x = Math.max(n.slidesPerViewDynamic("current", !0), 1));
  const h = n.activeIndex < d.slidesPerGroupSkip ? 1 : x,
    m = n.virtual && d.virtual.enabled;
  if (d.loop) {
    if (p && !m && d.loopPreventsSliding) return !1;
    if (
      (n.loopFix({ direction: "next" }),
      (n._clientLeft = n.wrapperEl.clientLeft),
      n.activeIndex === n.slides.length - 1 && d.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          n.slideTo(n.activeIndex + h, s, c, r);
        }),
        !0
      );
  }
  return d.rewind && n.isEnd
    ? n.slideTo(0, s, c, r)
    : n.slideTo(n.activeIndex + h, s, c, r);
}
function Py(s, c = !0, r) {
  const n = this,
    {
      params: f,
      snapGrid: d,
      slidesGrid: p,
      rtlTranslate: x,
      enabled: h,
      animating: m,
    } = n;
  if (!h || n.destroyed) return n;
  typeof s > "u" && (s = n.params.speed);
  const j = n.virtual && f.virtual.enabled;
  if (f.loop) {
    if (m && !j && f.loopPreventsSliding) return !1;
    (n.loopFix({ direction: "prev" }),
      (n._clientLeft = n.wrapperEl.clientLeft));
  }
  const g = x ? n.translate : -n.translate;
  function N(w) {
    return w < 0 ? -Math.floor(Math.abs(w)) : Math.floor(w);
  }
  const b = N(g),
    E = d.map((w) => N(w)),
    M = f.freeMode && f.freeMode.enabled;
  let A = d[E.indexOf(b) - 1];
  if (typeof A > "u" && (f.cssMode || M)) {
    let w;
    (d.forEach((z, J) => {
      b >= z && (w = J);
    }),
      typeof w < "u" && (A = M ? d[w] : d[w > 0 ? w - 1 : w]));
  }
  let S = 0;
  if (
    (typeof A < "u" &&
      ((S = p.indexOf(A)),
      S < 0 && (S = n.activeIndex - 1),
      f.slidesPerView === "auto" &&
        f.slidesPerGroup === 1 &&
        f.slidesPerGroupAuto &&
        ((S = S - n.slidesPerViewDynamic("previous", !0) + 1),
        (S = Math.max(S, 0)))),
    f.rewind && n.isBeginning)
  ) {
    const w =
      n.params.virtual && n.params.virtual.enabled && n.virtual
        ? n.virtual.slides.length - 1
        : n.slides.length - 1;
    return n.slideTo(w, s, c, r);
  } else if (f.loop && n.activeIndex === 0 && f.cssMode)
    return (
      requestAnimationFrame(() => {
        n.slideTo(S, s, c, r);
      }),
      !0
    );
  return n.slideTo(S, s, c, r);
}
function Wy(s, c = !0, r) {
  const n = this;
  if (!n.destroyed)
    return (
      typeof s > "u" && (s = n.params.speed),
      n.slideTo(n.activeIndex, s, c, r)
    );
}
function Iy(s, c = !0, r, n = 0.5) {
  const f = this;
  if (f.destroyed) return;
  typeof s > "u" && (s = f.params.speed);
  let d = f.activeIndex;
  const p = Math.min(f.params.slidesPerGroupSkip, d),
    x = p + Math.floor((d - p) / f.params.slidesPerGroup),
    h = f.rtlTranslate ? f.translate : -f.translate;
  if (h >= f.snapGrid[x]) {
    const m = f.snapGrid[x],
      j = f.snapGrid[x + 1];
    h - m > (j - m) * n && (d += f.params.slidesPerGroup);
  } else {
    const m = f.snapGrid[x - 1],
      j = f.snapGrid[x];
    h - m <= (j - m) * n && (d -= f.params.slidesPerGroup);
  }
  return (
    (d = Math.max(d, 0)),
    (d = Math.min(d, f.slidesGrid.length - 1)),
    f.slideTo(d, s, c, r)
  );
}
function e0() {
  const s = this;
  if (s.destroyed) return;
  const { params: c, slidesEl: r } = s,
    n = c.slidesPerView === "auto" ? s.slidesPerViewDynamic() : c.slidesPerView;
  let f = s.getSlideIndexWhenGrid(s.clickedIndex),
    d;
  const p = s.isElement ? "swiper-slide" : `.${c.slideClass}`,
    x = s.grid && s.params.grid && s.params.grid.rows > 1;
  if (c.loop) {
    if (s.animating) return;
    ((d = parseInt(s.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      c.centeredSlides
        ? s.slideToLoop(d)
        : f >
            (x
              ? (s.slides.length - n) / 2 - (s.params.grid.rows - 1)
              : s.slides.length - n)
          ? (s.loopFix(),
            (f = s.getSlideIndex(
              na(r, `${p}[data-swiper-slide-index="${d}"]`)[0],
            )),
            _p(() => {
              s.slideTo(f);
            }))
          : s.slideTo(f));
  } else s.slideTo(f);
}
var t0 = {
  slideTo: Fy,
  slideToLoop: $y,
  slideNext: Ky,
  slidePrev: Py,
  slideReset: Wy,
  slideToClosest: Iy,
  slideToClickedSlide: e0,
};
function a0(s, c) {
  const r = this,
    { params: n, slidesEl: f } = r;
  if (!n.loop || (r.virtual && r.params.virtual.enabled)) return;
  const d = () => {
      na(f, `.${n.slideClass}, swiper-slide`).forEach((E, M) => {
        E.setAttribute("data-swiper-slide-index", M);
      });
    },
    p = () => {
      const b = na(f, `.${n.slideBlankClass}`);
      (b.forEach((E) => {
        E.remove();
      }),
        b.length > 0 && (r.recalcSlides(), r.updateSlides()));
    },
    x = r.grid && n.grid && n.grid.rows > 1;
  n.loopAddBlankSlides && (n.slidesPerGroup > 1 || x) && p();
  const h = n.slidesPerGroup * (x ? n.grid.rows : 1),
    m = r.slides.length % h !== 0,
    j = x && r.slides.length % n.grid.rows !== 0,
    g = (b) => {
      for (let E = 0; E < b; E += 1) {
        const M = r.isElement
          ? Di("swiper-slide", [n.slideBlankClass])
          : Di("div", [n.slideClass, n.slideBlankClass]);
        r.slidesEl.append(M);
      }
    };
  if (m) {
    if (n.loopAddBlankSlides) {
      const b = h - (r.slides.length % h);
      (g(b), r.recalcSlides(), r.updateSlides());
    } else
      or(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
      );
    d();
  } else if (j) {
    if (n.loopAddBlankSlides) {
      const b = n.grid.rows - (r.slides.length % n.grid.rows);
      (g(b), r.recalcSlides(), r.updateSlides());
    } else
      or(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
      );
    d();
  } else d();
  const N = n.centeredSlides || !!n.slidesOffsetBefore || !!n.slidesOffsetAfter;
  r.loopFix({ slideRealIndex: s, direction: N ? void 0 : "next", initial: c });
}
function l0({
  slideRealIndex: s,
  slideTo: c = !0,
  direction: r,
  setTranslate: n,
  activeSlideIndex: f,
  initial: d,
  byController: p,
  byMousewheel: x,
} = {}) {
  const h = this;
  if (!h.params.loop) return;
  h.emit("beforeLoopFix");
  const {
      slides: m,
      allowSlidePrev: j,
      allowSlideNext: g,
      slidesEl: N,
      params: b,
    } = h,
    {
      centeredSlides: E,
      slidesOffsetBefore: M,
      slidesOffsetAfter: A,
      initialSlide: S,
    } = b,
    w = E || !!M || !!A;
  if (
    ((h.allowSlidePrev = !0),
    (h.allowSlideNext = !0),
    h.virtual && b.virtual.enabled)
  ) {
    (c &&
      (!w && h.snapIndex === 0
        ? h.slideTo(h.virtual.slides.length, 0, !1, !0)
        : w && h.snapIndex < b.slidesPerView
          ? h.slideTo(h.virtual.slides.length + h.snapIndex, 0, !1, !0)
          : h.snapIndex === h.snapGrid.length - 1 &&
            h.slideTo(h.virtual.slidesBefore, 0, !1, !0)),
      (h.allowSlidePrev = j),
      (h.allowSlideNext = g),
      h.emit("loopFix"));
    return;
  }
  let z = b.slidesPerView;
  z === "auto"
    ? (z = h.slidesPerViewDynamic())
    : ((z = Math.ceil(parseFloat(b.slidesPerView, 10))),
      w && z % 2 === 0 && (z = z + 1));
  const J = b.slidesPerGroupAuto ? z : b.slidesPerGroup;
  let $ = w ? Math.max(J, Math.ceil(z / 2)) : J;
  ($ % J !== 0 && ($ += J - ($ % J)),
    ($ += b.loopAdditionalSlides),
    (h.loopedSlides = $));
  const ee = h.grid && b.grid && b.grid.rows > 1;
  m.length < z + $ || (h.params.effect === "cards" && m.length < z + $ * 2)
    ? or(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters",
      )
    : ee &&
      b.grid.fill === "row" &&
      or(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`",
      );
  const K = [],
    T = [],
    G = ee ? Math.ceil(m.length / b.grid.rows) : m.length,
    L = d && G - S < z && !w;
  let _ = L ? S : h.activeIndex;
  typeof f > "u"
    ? (f = h.getSlideIndex(
        m.find((Q) => Q.classList.contains(b.slideActiveClass)),
      ))
    : (_ = f);
  const B = r === "next" || !r,
    ae = r === "prev" || !r;
  let te = 0,
    ce = 0;
  const X = (ee ? m[f].column : f) + (w && typeof n > "u" ? -z / 2 + 0.5 : 0);
  if (X < $) {
    te = Math.max($ - X, J);
    for (let Q = 0; Q < $ - X; Q += 1) {
      const ie = Q - Math.floor(Q / G) * G;
      if (ee) {
        const de = G - ie - 1;
        for (let O = m.length - 1; O >= 0; O -= 1)
          m[O].column === de && K.push(O);
      } else K.push(G - ie - 1);
    }
  } else if (X + z > G - $) {
    ((ce = Math.max(X - (G - $ * 2), J)),
      L && (ce = Math.max(ce, z - G + S + 1)));
    for (let Q = 0; Q < ce; Q += 1) {
      const ie = Q - Math.floor(Q / G) * G;
      ee
        ? m.forEach((de, O) => {
            de.column === ie && T.push(O);
          })
        : T.push(ie);
    }
  }
  if (
    ((h.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      h.__preventObserver__ = !1;
    }),
    h.params.effect === "cards" &&
      m.length < z + $ * 2 &&
      (T.includes(f) && T.splice(T.indexOf(f), 1),
      K.includes(f) && K.splice(K.indexOf(f), 1)),
    ae &&
      K.forEach((Q) => {
        ((m[Q].swiperLoopMoveDOM = !0),
          N.prepend(m[Q]),
          (m[Q].swiperLoopMoveDOM = !1));
      }),
    B &&
      T.forEach((Q) => {
        ((m[Q].swiperLoopMoveDOM = !0),
          N.append(m[Q]),
          (m[Q].swiperLoopMoveDOM = !1));
      }),
    h.recalcSlides(),
    b.slidesPerView === "auto"
      ? h.updateSlides()
      : ee &&
        ((K.length > 0 && ae) || (T.length > 0 && B)) &&
        h.slides.forEach((Q, ie) => {
          h.grid.updateSlide(ie, Q, h.slides);
        }),
    b.watchSlidesProgress && h.updateSlidesOffset(),
    c)
  ) {
    if (K.length > 0 && ae) {
      if (typeof s > "u") {
        const Q = h.slidesGrid[_],
          de = h.slidesGrid[_ + te] - Q;
        x
          ? h.setTranslate(h.translate - de)
          : (h.slideTo(_ + Math.ceil(te), 0, !1, !0),
            n &&
              ((h.touchEventsData.startTranslate =
                h.touchEventsData.startTranslate - de),
              (h.touchEventsData.currentTranslate =
                h.touchEventsData.currentTranslate - de)));
      } else if (n) {
        const Q = ee ? K.length / b.grid.rows : K.length;
        (h.slideTo(h.activeIndex + Q, 0, !1, !0),
          (h.touchEventsData.currentTranslate = h.translate));
      }
    } else if (T.length > 0 && B)
      if (typeof s > "u") {
        const Q = h.slidesGrid[_],
          de = h.slidesGrid[_ - ce] - Q;
        x
          ? h.setTranslate(h.translate - de)
          : (h.slideTo(_ - ce, 0, !1, !0),
            n &&
              ((h.touchEventsData.startTranslate =
                h.touchEventsData.startTranslate - de),
              (h.touchEventsData.currentTranslate =
                h.touchEventsData.currentTranslate - de)));
      } else {
        const Q = ee ? T.length / b.grid.rows : T.length;
        h.slideTo(h.activeIndex - Q, 0, !1, !0);
      }
  }
  if (
    ((h.allowSlidePrev = j),
    (h.allowSlideNext = g),
    h.controller && h.controller.control && !p)
  ) {
    const Q = {
      slideRealIndex: s,
      direction: r,
      setTranslate: n,
      activeSlideIndex: f,
      byController: !0,
    };
    Array.isArray(h.controller.control)
      ? h.controller.control.forEach((ie) => {
          !ie.destroyed &&
            ie.params.loop &&
            ie.loopFix({
              ...Q,
              slideTo: ie.params.slidesPerView === b.slidesPerView ? c : !1,
            });
        })
      : h.controller.control instanceof h.constructor &&
        h.controller.control.params.loop &&
        h.controller.control.loopFix({
          ...Q,
          slideTo:
            h.controller.control.params.slidesPerView === b.slidesPerView
              ? c
              : !1,
        });
  }
  h.emit("loopFix");
}
function s0() {
  const s = this,
    { params: c, slidesEl: r } = s;
  if (!c.loop || !r || (s.virtual && s.params.virtual.enabled)) return;
  s.recalcSlides();
  const n = [];
  (s.slides.forEach((f) => {
    const d =
      typeof f.swiperSlideIndex > "u"
        ? f.getAttribute("data-swiper-slide-index") * 1
        : f.swiperSlideIndex;
    n[d] = f;
  }),
    s.slides.forEach((f) => {
      f.removeAttribute("data-swiper-slide-index");
    }),
    n.forEach((f) => {
      r.append(f);
    }),
    s.recalcSlides(),
    s.slideTo(s.realIndex, 0));
}
var i0 = { loopCreate: a0, loopFix: l0, loopDestroy: s0 };
function n0(s) {
  const c = this;
  if (
    !c.params.simulateTouch ||
    (c.params.watchOverflow && c.isLocked) ||
    c.params.cssMode
  )
    return;
  const r = c.params.touchEventsTarget === "container" ? c.el : c.wrapperEl;
  (c.isElement && (c.__preventObserver__ = !0),
    (r.style.cursor = "move"),
    (r.style.cursor = s ? "grabbing" : "grab"),
    c.isElement &&
      requestAnimationFrame(() => {
        c.__preventObserver__ = !1;
      }));
}
function r0() {
  const s = this;
  (s.params.watchOverflow && s.isLocked) ||
    s.params.cssMode ||
    (s.isElement && (s.__preventObserver__ = !0),
    (s[
      s.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    s.isElement &&
      requestAnimationFrame(() => {
        s.__preventObserver__ = !1;
      }));
}
var c0 = { setGrabCursor: n0, unsetGrabCursor: r0 };
function o0(s, c = this) {
  function r(n) {
    if (!n || n === ca() || n === Tt()) return null;
    n.assignedSlot && (n = n.assignedSlot);
    const f = n.closest(s);
    return !f && !n.getRootNode ? null : f || r(n.getRootNode().host);
  }
  return r(c);
}
function Um(s, c, r) {
  const n = Tt(),
    { params: f } = s,
    d = f.edgeSwipeDetection,
    p = f.edgeSwipeThreshold;
  return d && (r <= p || r >= n.innerWidth - p)
    ? d === "prevent"
      ? (c.preventDefault(), !0)
      : !1
    : !0;
}
function u0(s) {
  const c = this,
    r = ca();
  let n = s;
  n.originalEvent && (n = n.originalEvent);
  const f = c.touchEventsData;
  if (n.type === "pointerdown") {
    if (f.pointerId !== null && f.pointerId !== n.pointerId) return;
    f.pointerId = n.pointerId;
  } else
    n.type === "touchstart" &&
      n.targetTouches.length === 1 &&
      (f.touchId = n.targetTouches[0].identifier);
  if (n.type === "touchstart") {
    Um(c, n, n.targetTouches[0].pageX);
    return;
  }
  const { params: d, touches: p, enabled: x } = c;
  if (
    !x ||
    (!d.simulateTouch && n.pointerType === "mouse") ||
    (c.animating && d.preventInteractionOnTransition)
  )
    return;
  !c.animating && d.cssMode && d.loop && c.loopFix();
  let h = n.target;
  if (
    (d.touchEventsTarget === "wrapper" && !gy(h, c.wrapperEl)) ||
    ("which" in n && n.which === 3) ||
    ("button" in n && n.button > 0) ||
    (f.isTouched && f.isMoved)
  )
    return;
  const m = !!d.noSwipingClass && d.noSwipingClass !== "",
    j = n.composedPath ? n.composedPath() : n.path;
  m && n.target && n.target.shadowRoot && j && (h = j[0]);
  const g = d.noSwipingSelector ? d.noSwipingSelector : `.${d.noSwipingClass}`,
    N = !!(n.target && n.target.shadowRoot);
  if (d.noSwiping && (N ? o0(g, h) : h.closest(g))) {
    c.allowClick = !0;
    return;
  }
  if (d.swipeHandler && !h.closest(d.swipeHandler)) return;
  ((p.currentX = n.pageX), (p.currentY = n.pageY));
  const b = p.currentX,
    E = p.currentY;
  if (!Um(c, n, b)) return;
  (Object.assign(f, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (p.startX = b),
    (p.startY = E),
    (f.touchStartTime = Rl()),
    (c.allowClick = !0),
    c.updateSize(),
    (c.swipeDirection = void 0),
    d.threshold > 0 && (f.allowThresholdMove = !1));
  let M = !0;
  (h.matches(f.focusableElements) &&
    ((M = !1), h.nodeName === "SELECT" && (f.isTouched = !1)),
    r.activeElement &&
      r.activeElement.matches(f.focusableElements) &&
      r.activeElement !== h &&
      (n.pointerType === "mouse" ||
        (n.pointerType !== "mouse" && !h.matches(f.focusableElements))) &&
      r.activeElement.blur());
  const A = M && c.allowTouchMove && d.touchStartPreventDefault;
  ((d.touchStartForcePreventDefault || A) &&
    !h.isContentEditable &&
    n.preventDefault(),
    d.freeMode &&
      d.freeMode.enabled &&
      c.freeMode &&
      c.animating &&
      !d.cssMode &&
      c.freeMode.onTouchStart(),
    c.emit("touchStart", n));
}
function d0(s) {
  const c = ca(),
    r = this,
    n = r.touchEventsData,
    { params: f, touches: d, rtlTranslate: p, enabled: x } = r;
  if (!x || (!f.simulateTouch && s.pointerType === "mouse")) return;
  let h = s;
  if (
    (h.originalEvent && (h = h.originalEvent),
    h.type === "pointermove" &&
      (n.touchId !== null || h.pointerId !== n.pointerId))
  )
    return;
  let m;
  if (h.type === "touchmove") {
    if (
      ((m = [...h.changedTouches].find(($) => $.identifier === n.touchId)),
      !m || m.identifier !== n.touchId)
    )
      return;
  } else m = h;
  if (!n.isTouched) {
    n.startMoving && n.isScrolling && r.emit("touchMoveOpposite", h);
    return;
  }
  const j = m.pageX,
    g = m.pageY;
  if (h.preventedByNestedSwiper) {
    ((d.startX = j), (d.startY = g));
    return;
  }
  if (!r.allowTouchMove) {
    (h.target.matches(n.focusableElements) || (r.allowClick = !1),
      n.isTouched &&
        (Object.assign(d, { startX: j, startY: g, currentX: j, currentY: g }),
        (n.touchStartTime = Rl())));
    return;
  }
  if (f.touchReleaseOnEdges && !f.loop)
    if (r.isVertical()) {
      if (
        (g < d.startY && r.translate <= r.maxTranslate()) ||
        (g > d.startY && r.translate >= r.minTranslate())
      ) {
        ((n.isTouched = !1), (n.isMoved = !1));
        return;
      }
    } else {
      if (
        p &&
        ((j > d.startX && -r.translate <= r.maxTranslate()) ||
          (j < d.startX && -r.translate >= r.minTranslate()))
      )
        return;
      if (
        !p &&
        ((j < d.startX && r.translate <= r.maxTranslate()) ||
          (j > d.startX && r.translate >= r.minTranslate()))
      )
        return;
    }
  if (
    (c.activeElement &&
      c.activeElement.matches(n.focusableElements) &&
      c.activeElement !== h.target &&
      h.pointerType !== "mouse" &&
      c.activeElement.blur(),
    c.activeElement &&
      h.target === c.activeElement &&
      h.target.matches(n.focusableElements))
  ) {
    ((n.isMoved = !0), (r.allowClick = !1));
    return;
  }
  (n.allowTouchCallbacks && r.emit("touchMove", h),
    (d.previousX = d.currentX),
    (d.previousY = d.currentY),
    (d.currentX = j),
    (d.currentY = g));
  const N = d.currentX - d.startX,
    b = d.currentY - d.startY;
  if (r.params.threshold && Math.sqrt(N ** 2 + b ** 2) < r.params.threshold)
    return;
  if (typeof n.isScrolling > "u") {
    let $;
    (r.isHorizontal() && d.currentY === d.startY) ||
    (r.isVertical() && d.currentX === d.startX)
      ? (n.isScrolling = !1)
      : N * N + b * b >= 25 &&
        (($ = (Math.atan2(Math.abs(b), Math.abs(N)) * 180) / Math.PI),
        (n.isScrolling = r.isHorizontal()
          ? $ > f.touchAngle
          : 90 - $ > f.touchAngle));
  }
  if (
    (n.isScrolling && r.emit("touchMoveOpposite", h),
    typeof n.startMoving > "u" &&
      (d.currentX !== d.startX || d.currentY !== d.startY) &&
      (n.startMoving = !0),
    n.isScrolling ||
      (h.type === "touchmove" && n.preventTouchMoveFromPointerMove))
  ) {
    n.isTouched = !1;
    return;
  }
  if (!n.startMoving) return;
  ((r.allowClick = !1),
    !f.cssMode && h.cancelable && h.preventDefault(),
    f.touchMoveStopPropagation && !f.nested && h.stopPropagation());
  let E = r.isHorizontal() ? N : b,
    M = r.isHorizontal() ? d.currentX - d.previousX : d.currentY - d.previousY;
  (f.oneWayMovement &&
    ((E = Math.abs(E) * (p ? 1 : -1)), (M = Math.abs(M) * (p ? 1 : -1))),
    (d.diff = E),
    (E *= f.touchRatio),
    p && ((E = -E), (M = -M)));
  const A = r.touchesDirection;
  ((r.swipeDirection = E > 0 ? "prev" : "next"),
    (r.touchesDirection = M > 0 ? "prev" : "next"));
  const S = r.params.loop && !f.cssMode,
    w =
      (r.touchesDirection === "next" && r.allowSlideNext) ||
      (r.touchesDirection === "prev" && r.allowSlidePrev);
  if (!n.isMoved) {
    if (
      (S && w && r.loopFix({ direction: r.swipeDirection }),
      (n.startTranslate = r.getTranslate()),
      r.setTransition(0),
      r.animating)
    ) {
      const $ = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      });
      r.wrapperEl.dispatchEvent($);
    }
    ((n.allowMomentumBounce = !1),
      f.grabCursor &&
        (r.allowSlideNext === !0 || r.allowSlidePrev === !0) &&
        r.setGrabCursor(!0),
      r.emit("sliderFirstMove", h));
  }
  if (
    (new Date().getTime(),
    f._loopSwapReset !== !1 &&
      n.isMoved &&
      n.allowThresholdMove &&
      A !== r.touchesDirection &&
      S &&
      w &&
      Math.abs(E) >= 1)
  ) {
    (Object.assign(d, {
      startX: j,
      startY: g,
      currentX: j,
      currentY: g,
      startTranslate: n.currentTranslate,
    }),
      (n.loopSwapReset = !0),
      (n.startTranslate = n.currentTranslate));
    return;
  }
  (r.emit("sliderMove", h),
    (n.isMoved = !0),
    (n.currentTranslate = E + n.startTranslate));
  let z = !0,
    J = f.resistanceRatio;
  if (
    (f.touchReleaseOnEdges && (J = 0),
    E > 0
      ? (S &&
          w &&
          n.allowThresholdMove &&
          n.currentTranslate >
            (f.centeredSlides
              ? r.minTranslate() -
                r.slidesSizesGrid[r.activeIndex + 1] -
                (f.slidesPerView !== "auto" &&
                r.slides.length - f.slidesPerView >= 2
                  ? r.slidesSizesGrid[r.activeIndex + 1] + r.params.spaceBetween
                  : 0) -
                r.params.spaceBetween
              : r.minTranslate()) &&
          r.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        n.currentTranslate > r.minTranslate() &&
          ((z = !1),
          f.resistance &&
            (n.currentTranslate =
              r.minTranslate() -
              1 +
              (-r.minTranslate() + n.startTranslate + E) ** J)))
      : E < 0 &&
        (S &&
          w &&
          n.allowThresholdMove &&
          n.currentTranslate <
            (f.centeredSlides
              ? r.maxTranslate() +
                r.slidesSizesGrid[r.slidesSizesGrid.length - 1] +
                r.params.spaceBetween +
                (f.slidesPerView !== "auto" &&
                r.slides.length - f.slidesPerView >= 2
                  ? r.slidesSizesGrid[r.slidesSizesGrid.length - 1] +
                    r.params.spaceBetween
                  : 0)
              : r.maxTranslate()) &&
          r.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              r.slides.length -
              (f.slidesPerView === "auto"
                ? r.slidesPerViewDynamic()
                : Math.ceil(parseFloat(f.slidesPerView, 10))),
          }),
        n.currentTranslate < r.maxTranslate() &&
          ((z = !1),
          f.resistance &&
            (n.currentTranslate =
              r.maxTranslate() +
              1 -
              (r.maxTranslate() - n.startTranslate - E) ** J))),
    z && (h.preventedByNestedSwiper = !0),
    !r.allowSlideNext &&
      r.swipeDirection === "next" &&
      n.currentTranslate < n.startTranslate &&
      (n.currentTranslate = n.startTranslate),
    !r.allowSlidePrev &&
      r.swipeDirection === "prev" &&
      n.currentTranslate > n.startTranslate &&
      (n.currentTranslate = n.startTranslate),
    !r.allowSlidePrev &&
      !r.allowSlideNext &&
      (n.currentTranslate = n.startTranslate),
    f.threshold > 0)
  )
    if (Math.abs(E) > f.threshold || n.allowThresholdMove) {
      if (!n.allowThresholdMove) {
        ((n.allowThresholdMove = !0),
          (d.startX = d.currentX),
          (d.startY = d.currentY),
          (n.currentTranslate = n.startTranslate),
          (d.diff = r.isHorizontal()
            ? d.currentX - d.startX
            : d.currentY - d.startY));
        return;
      }
    } else {
      n.currentTranslate = n.startTranslate;
      return;
    }
  !f.followFinger ||
    f.cssMode ||
    (((f.freeMode && f.freeMode.enabled && r.freeMode) ||
      f.watchSlidesProgress) &&
      (r.updateActiveIndex(), r.updateSlidesClasses()),
    f.freeMode && f.freeMode.enabled && r.freeMode && r.freeMode.onTouchMove(),
    r.updateProgress(n.currentTranslate),
    r.setTranslate(n.currentTranslate));
}
function f0(s) {
  const c = this,
    r = c.touchEventsData;
  let n = s;
  n.originalEvent && (n = n.originalEvent);
  let f;
  if (n.type === "touchend" || n.type === "touchcancel") {
    if (
      ((f = [...n.changedTouches].find(($) => $.identifier === r.touchId)),
      !f || f.identifier !== r.touchId)
    )
      return;
  } else {
    if (r.touchId !== null || n.pointerId !== r.pointerId) return;
    f = n;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      n.type,
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(n.type) &&
      (c.browser.isSafari || c.browser.isWebView)
    )
  )
    return;
  ((r.pointerId = null), (r.touchId = null));
  const {
    params: p,
    touches: x,
    rtlTranslate: h,
    slidesGrid: m,
    enabled: j,
  } = c;
  if (!j || (!p.simulateTouch && n.pointerType === "mouse")) return;
  if (
    (r.allowTouchCallbacks && c.emit("touchEnd", n),
    (r.allowTouchCallbacks = !1),
    !r.isTouched)
  ) {
    (r.isMoved && p.grabCursor && c.setGrabCursor(!1),
      (r.isMoved = !1),
      (r.startMoving = !1));
    return;
  }
  p.grabCursor &&
    r.isMoved &&
    r.isTouched &&
    (c.allowSlideNext === !0 || c.allowSlidePrev === !0) &&
    c.setGrabCursor(!1);
  const g = Rl(),
    N = g - r.touchStartTime;
  if (c.allowClick) {
    const $ = n.path || (n.composedPath && n.composedPath());
    (c.updateClickedSlide(($ && $[0]) || n.target, $),
      c.emit("tap click", n),
      N < 300 &&
        g - r.lastClickTime < 300 &&
        c.emit("doubleTap doubleClick", n));
  }
  if (
    ((r.lastClickTime = Rl()),
    _p(() => {
      c.destroyed || (c.allowClick = !0);
    }),
    !r.isTouched ||
      !r.isMoved ||
      !c.swipeDirection ||
      (x.diff === 0 && !r.loopSwapReset) ||
      (r.currentTranslate === r.startTranslate && !r.loopSwapReset))
  ) {
    ((r.isTouched = !1), (r.isMoved = !1), (r.startMoving = !1));
    return;
  }
  ((r.isTouched = !1), (r.isMoved = !1), (r.startMoving = !1));
  let b;
  if (
    (p.followFinger
      ? (b = h ? c.translate : -c.translate)
      : (b = -r.currentTranslate),
    p.cssMode)
  )
    return;
  if (p.freeMode && p.freeMode.enabled) {
    c.freeMode.onTouchEnd({ currentPos: b });
    return;
  }
  const E = b >= -c.maxTranslate() && !c.params.loop;
  let M = 0,
    A = c.slidesSizesGrid[0];
  for (
    let $ = 0;
    $ < m.length;
    $ += $ < p.slidesPerGroupSkip ? 1 : p.slidesPerGroup
  ) {
    const ee = $ < p.slidesPerGroupSkip - 1 ? 1 : p.slidesPerGroup;
    typeof m[$ + ee] < "u"
      ? (E || (b >= m[$] && b < m[$ + ee])) && ((M = $), (A = m[$ + ee] - m[$]))
      : (E || b >= m[$]) && ((M = $), (A = m[m.length - 1] - m[m.length - 2]));
  }
  let S = null,
    w = null;
  p.rewind &&
    (c.isBeginning
      ? (w =
          p.virtual && p.virtual.enabled && c.virtual
            ? c.virtual.slides.length - 1
            : c.slides.length - 1)
      : c.isEnd && (S = 0));
  const z = (b - m[M]) / A,
    J = M < p.slidesPerGroupSkip - 1 ? 1 : p.slidesPerGroup;
  if (N > p.longSwipesMs) {
    if (!p.longSwipes) {
      c.slideTo(c.activeIndex);
      return;
    }
    (c.swipeDirection === "next" &&
      (z >= p.longSwipesRatio
        ? c.slideTo(p.rewind && c.isEnd ? S : M + J)
        : c.slideTo(M)),
      c.swipeDirection === "prev" &&
        (z > 1 - p.longSwipesRatio
          ? c.slideTo(M + J)
          : w !== null && z < 0 && Math.abs(z) > p.longSwipesRatio
            ? c.slideTo(w)
            : c.slideTo(M)));
  } else {
    if (!p.shortSwipes) {
      c.slideTo(c.activeIndex);
      return;
    }
    c.navigation &&
    (n.target === c.navigation.nextEl || n.target === c.navigation.prevEl)
      ? n.target === c.navigation.nextEl
        ? c.slideTo(M + J)
        : c.slideTo(M)
      : (c.swipeDirection === "next" && c.slideTo(S !== null ? S : M + J),
        c.swipeDirection === "prev" && c.slideTo(w !== null ? w : M));
  }
}
function Gm() {
  const s = this,
    { params: c, el: r } = s;
  if (r && r.offsetWidth === 0) return;
  c.breakpoints && s.setBreakpoint();
  const { allowSlideNext: n, allowSlidePrev: f, snapGrid: d } = s,
    p = s.virtual && s.params.virtual.enabled;
  ((s.allowSlideNext = !0),
    (s.allowSlidePrev = !0),
    s.updateSize(),
    s.updateSlides(),
    s.updateSlidesClasses());
  const x = p && c.loop;
  ((c.slidesPerView === "auto" || c.slidesPerView > 1) &&
  s.isEnd &&
  !s.isBeginning &&
  !s.params.centeredSlides &&
  !x
    ? s.slideTo(s.slides.length - 1, 0, !1, !0)
    : s.params.loop && !p
      ? s.slideToLoop(s.realIndex, 0, !1, !0)
      : s.slideTo(s.activeIndex, 0, !1, !0),
    s.autoplay &&
      s.autoplay.running &&
      s.autoplay.paused &&
      (clearTimeout(s.autoplay.resizeTimeout),
      (s.autoplay.resizeTimeout = setTimeout(() => {
        s.autoplay &&
          s.autoplay.running &&
          s.autoplay.paused &&
          s.autoplay.resume();
      }, 500))),
    (s.allowSlidePrev = f),
    (s.allowSlideNext = n),
    s.params.watchOverflow && d !== s.snapGrid && s.checkOverflow());
}
function h0(s) {
  const c = this;
  c.enabled &&
    (c.allowClick ||
      (c.params.preventClicks && s.preventDefault(),
      c.params.preventClicksPropagation &&
        c.animating &&
        (s.stopPropagation(), s.stopImmediatePropagation())));
}
function m0() {
  const s = this,
    { wrapperEl: c, rtlTranslate: r, enabled: n } = s;
  if (!n) return;
  ((s.previousTranslate = s.translate),
    s.isHorizontal()
      ? (s.translate = -c.scrollLeft)
      : (s.translate = -c.scrollTop),
    s.translate === 0 && (s.translate = 0),
    s.updateActiveIndex(),
    s.updateSlidesClasses());
  let f;
  const d = s.maxTranslate() - s.minTranslate();
  (d === 0 ? (f = 0) : (f = (s.translate - s.minTranslate()) / d),
    f !== s.progress && s.updateProgress(r ? -s.translate : s.translate),
    s.emit("setTranslate", s.translate, !1));
}
function p0(s) {
  const c = this;
  (nr(c, s.target),
    !(
      c.params.cssMode ||
      (c.params.slidesPerView !== "auto" && !c.params.autoHeight)
    ) && c.update());
}
function v0() {
  const s = this;
  s.documentTouchHandlerProceeded ||
    ((s.documentTouchHandlerProceeded = !0),
    s.params.touchReleaseOnEdges && (s.el.style.touchAction = "auto"));
}
const qp = (s, c) => {
  const r = ca(),
    { params: n, el: f, wrapperEl: d, device: p } = s,
    x = !!n.nested,
    h = c === "on" ? "addEventListener" : "removeEventListener",
    m = c;
  !f ||
    typeof f == "string" ||
    (r[h]("touchstart", s.onDocumentTouchStart, { passive: !1, capture: x }),
    f[h]("touchstart", s.onTouchStart, { passive: !1 }),
    f[h]("pointerdown", s.onTouchStart, { passive: !1 }),
    r[h]("touchmove", s.onTouchMove, { passive: !1, capture: x }),
    r[h]("pointermove", s.onTouchMove, { passive: !1, capture: x }),
    r[h]("touchend", s.onTouchEnd, { passive: !0 }),
    r[h]("pointerup", s.onTouchEnd, { passive: !0 }),
    r[h]("pointercancel", s.onTouchEnd, { passive: !0 }),
    r[h]("touchcancel", s.onTouchEnd, { passive: !0 }),
    r[h]("pointerout", s.onTouchEnd, { passive: !0 }),
    r[h]("pointerleave", s.onTouchEnd, { passive: !0 }),
    r[h]("contextmenu", s.onTouchEnd, { passive: !0 }),
    (n.preventClicks || n.preventClicksPropagation) &&
      f[h]("click", s.onClick, !0),
    n.cssMode && d[h]("scroll", s.onScroll),
    n.updateOnWindowResize
      ? s[m](
          p.ios || p.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          Gm,
          !0,
        )
      : s[m]("observerUpdate", Gm, !0),
    f[h]("load", s.onLoad, { capture: !0 }));
};
function g0() {
  const s = this,
    { params: c } = s;
  ((s.onTouchStart = u0.bind(s)),
    (s.onTouchMove = d0.bind(s)),
    (s.onTouchEnd = f0.bind(s)),
    (s.onDocumentTouchStart = v0.bind(s)),
    c.cssMode && (s.onScroll = m0.bind(s)),
    (s.onClick = h0.bind(s)),
    (s.onLoad = p0.bind(s)),
    qp(s, "on"));
}
function x0() {
  qp(this, "off");
}
var j0 = { attachEvents: g0, detachEvents: x0 };
const qm = (s, c) => s.grid && c.grid && c.grid.rows > 1;
function y0() {
  const s = this,
    { realIndex: c, initialized: r, params: n, el: f } = s,
    d = n.breakpoints;
  if (!d || (d && Object.keys(d).length === 0)) return;
  const p = ca(),
    x =
      n.breakpointsBase === "window" || !n.breakpointsBase
        ? n.breakpointsBase
        : "container",
    h =
      ["window", "container"].includes(n.breakpointsBase) || !n.breakpointsBase
        ? s.el
        : p.querySelector(n.breakpointsBase),
    m = s.getBreakpoint(d, x, h);
  if (!m || s.currentBreakpoint === m) return;
  const g = (m in d ? d[m] : void 0) || s.originalParams,
    N = qm(s, n),
    b = qm(s, g),
    E = s.params.grabCursor,
    M = g.grabCursor,
    A = n.enabled;
  (N && !b
    ? (f.classList.remove(
        `${n.containerModifierClass}grid`,
        `${n.containerModifierClass}grid-column`,
      ),
      s.emitContainerClasses())
    : !N &&
      b &&
      (f.classList.add(`${n.containerModifierClass}grid`),
      ((g.grid.fill && g.grid.fill === "column") ||
        (!g.grid.fill && n.grid.fill === "column")) &&
        f.classList.add(`${n.containerModifierClass}grid-column`),
      s.emitContainerClasses()),
    E && !M ? s.unsetGrabCursor() : !E && M && s.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach((ee) => {
      if (typeof g[ee] > "u") return;
      const K = n[ee] && n[ee].enabled,
        T = g[ee] && g[ee].enabled;
      (K && !T && s[ee].disable(), !K && T && s[ee].enable());
    }));
  const S = g.direction && g.direction !== n.direction,
    w = n.loop && (g.slidesPerView !== n.slidesPerView || S),
    z = n.loop;
  (S && r && s.changeDirection(), Vt(s.params, g));
  const J = s.params.enabled,
    $ = s.params.loop;
  (Object.assign(s, {
    allowTouchMove: s.params.allowTouchMove,
    allowSlideNext: s.params.allowSlideNext,
    allowSlidePrev: s.params.allowSlidePrev,
  }),
    A && !J ? s.disable() : !A && J && s.enable(),
    (s.currentBreakpoint = m),
    s.emit("_beforeBreakpoint", g),
    r &&
      (w
        ? (s.loopDestroy(), s.loopCreate(c), s.updateSlides())
        : !z && $
          ? (s.loopCreate(c), s.updateSlides())
          : z && !$ && s.loopDestroy()),
    s.emit("breakpoint", g));
}
function b0(s, c = "window", r) {
  if (!s || (c === "container" && !r)) return;
  let n = !1;
  const f = Tt(),
    d = c === "window" ? f.innerHeight : r.clientHeight,
    p = Object.keys(s).map((x) => {
      if (typeof x == "string" && x.indexOf("@") === 0) {
        const h = parseFloat(x.substr(1));
        return { value: d * h, point: x };
      }
      return { value: x, point: x };
    });
  p.sort((x, h) => parseInt(x.value, 10) - parseInt(h.value, 10));
  for (let x = 0; x < p.length; x += 1) {
    const { point: h, value: m } = p[x];
    c === "window"
      ? f.matchMedia(`(min-width: ${m}px)`).matches && (n = h)
      : m <= r.clientWidth && (n = h);
  }
  return n || "max";
}
var S0 = { setBreakpoint: y0, getBreakpoint: b0 };
function N0(s, c) {
  const r = [];
  return (
    s.forEach((n) => {
      typeof n == "object"
        ? Object.keys(n).forEach((f) => {
            n[f] && r.push(c + f);
          })
        : typeof n == "string" && r.push(c + n);
    }),
    r
  );
}
function w0() {
  const s = this,
    { classNames: c, params: r, rtl: n, el: f, device: d } = s,
    p = N0(
      [
        "initialized",
        r.direction,
        { "free-mode": s.params.freeMode && r.freeMode.enabled },
        { autoheight: r.autoHeight },
        { rtl: n },
        { grid: r.grid && r.grid.rows > 1 },
        {
          "grid-column": r.grid && r.grid.rows > 1 && r.grid.fill === "column",
        },
        { android: d.android },
        { ios: d.ios },
        { "css-mode": r.cssMode },
        { centered: r.cssMode && r.centeredSlides },
        { "watch-progress": r.watchSlidesProgress },
      ],
      r.containerModifierClass,
    );
  (c.push(...p), f.classList.add(...c), s.emitContainerClasses());
}
function T0() {
  const s = this,
    { el: c, classNames: r } = s;
  !c ||
    typeof c == "string" ||
    (c.classList.remove(...r), s.emitContainerClasses());
}
var E0 = { addClasses: w0, removeClasses: T0 };
function C0() {
  const s = this,
    { isLocked: c, params: r } = s,
    { slidesOffsetBefore: n } = r;
  if (n) {
    const f = s.slides.length - 1,
      d = s.slidesGrid[f] + s.slidesSizesGrid[f] + n * 2;
    s.isLocked = s.size > d;
  } else s.isLocked = s.snapGrid.length === 1;
  (r.allowSlideNext === !0 && (s.allowSlideNext = !s.isLocked),
    r.allowSlidePrev === !0 && (s.allowSlidePrev = !s.isLocked),
    c && c !== s.isLocked && (s.isEnd = !1),
    c !== s.isLocked && s.emit(s.isLocked ? "lock" : "unlock"));
}
var M0 = { checkOverflow: C0 },
  au = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    snapToSlideEdge: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function O0(s, c) {
  return function (n = {}) {
    const f = Object.keys(n)[0],
      d = n[f];
    if (typeof d != "object" || d === null) {
      Vt(c, n);
      return;
    }
    if (
      (s[f] === !0 && (s[f] = { enabled: !0 }),
      f === "navigation" &&
        s[f] &&
        s[f].enabled &&
        !s[f].prevEl &&
        !s[f].nextEl &&
        (s[f].auto = !0),
      ["pagination", "scrollbar"].indexOf(f) >= 0 &&
        s[f] &&
        s[f].enabled &&
        !s[f].el &&
        (s[f].auto = !0),
      !(f in s && "enabled" in d))
    ) {
      Vt(c, n);
      return;
    }
    (typeof s[f] == "object" && !("enabled" in s[f]) && (s[f].enabled = !0),
      s[f] || (s[f] = { enabled: !1 }),
      Vt(c, n));
  };
}
const $o = {
    eventsEmitter: Ey,
    update: Hy,
    translate: ky,
    transition: Jy,
    slide: t0,
    loop: i0,
    grabCursor: c0,
    events: j0,
    breakpoints: S0,
    checkOverflow: M0,
    classes: E0,
  },
  Ko = {};
let vu = class La {
  constructor(...c) {
    let r, n;
    (c.length === 1 &&
    c[0].constructor &&
    Object.prototype.toString.call(c[0]).slice(8, -1) === "Object"
      ? (n = c[0])
      : ([r, n] = c),
      n || (n = {}),
      (n = Vt({}, n)),
      r && !n.el && (n.el = r));
    const f = ca();
    if (
      n.el &&
      typeof n.el == "string" &&
      f.querySelectorAll(n.el).length > 1
    ) {
      const h = [];
      return (
        f.querySelectorAll(n.el).forEach((m) => {
          const j = Vt({}, n, { el: m });
          h.push(new La(j));
        }),
        h
      );
    }
    const d = this;
    ((d.__swiper__ = !0),
      (d.support = Bp()),
      (d.device = Hp({ userAgent: n.userAgent })),
      (d.browser = Up()),
      (d.eventsListeners = {}),
      (d.eventsAnyListeners = []),
      (d.modules = [...d.__modules__]),
      n.modules && Array.isArray(n.modules) && d.modules.push(...n.modules));
    const p = {};
    d.modules.forEach((h) => {
      h({
        params: n,
        swiper: d,
        extendParams: O0(n, p),
        on: d.on.bind(d),
        once: d.once.bind(d),
        off: d.off.bind(d),
        emit: d.emit.bind(d),
      });
    });
    const x = Vt({}, au, p);
    return (
      (d.params = Vt({}, x, Ko, n)),
      (d.originalParams = Vt({}, d.params)),
      (d.passedParams = Vt({}, n)),
      d.params &&
        d.params.on &&
        Object.keys(d.params.on).forEach((h) => {
          d.on(h, d.params.on[h]);
        }),
      d.params && d.params.onAny && d.onAny(d.params.onAny),
      Object.assign(d, {
        enabled: d.params.enabled,
        el: r,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return d.params.direction === "horizontal";
        },
        isVertical() {
          return d.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: d.params.allowSlideNext,
        allowSlidePrev: d.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: d.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: d.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      d.emit("_swiper"),
      d.params.init && d.init(),
      d
    );
  }
  getDirectionLabel(c) {
    return this.isHorizontal()
      ? c
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[c];
  }
  getSlideIndex(c) {
    const { slidesEl: r, params: n } = this,
      f = na(r, `.${n.slideClass}, swiper-slide`),
      d = ur(f[0]);
    return ur(c) - d;
  }
  getSlideIndexByData(c) {
    return this.getSlideIndex(
      this.slides.find(
        (r) => r.getAttribute("data-swiper-slide-index") * 1 === c,
      ),
    );
  }
  getSlideIndexWhenGrid(c) {
    return (
      this.grid &&
        this.params.grid &&
        this.params.grid.rows > 1 &&
        (this.params.grid.fill === "column"
          ? (c = Math.floor(c / this.params.grid.rows))
          : this.params.grid.fill === "row" &&
            (c = c % Math.ceil(this.slides.length / this.params.grid.rows))),
      c
    );
  }
  recalcSlides() {
    const c = this,
      { slidesEl: r, params: n } = c;
    c.slides = na(r, `.${n.slideClass}, swiper-slide`);
  }
  enable() {
    const c = this;
    c.enabled ||
      ((c.enabled = !0),
      c.params.grabCursor && c.setGrabCursor(),
      c.emit("enable"));
  }
  disable() {
    const c = this;
    c.enabled &&
      ((c.enabled = !1),
      c.params.grabCursor && c.unsetGrabCursor(),
      c.emit("disable"));
  }
  setProgress(c, r) {
    const n = this;
    c = Math.min(Math.max(c, 0), 1);
    const f = n.minTranslate(),
      p = (n.maxTranslate() - f) * c + f;
    (n.translateTo(p, typeof r > "u" ? 0 : r),
      n.updateActiveIndex(),
      n.updateSlidesClasses());
  }
  emitContainerClasses() {
    const c = this;
    if (!c.params._emitClasses || !c.el) return;
    const r = c.el.className
      .split(" ")
      .filter(
        (n) =>
          n.indexOf("swiper") === 0 ||
          n.indexOf(c.params.containerModifierClass) === 0,
      );
    c.emit("_containerClasses", r.join(" "));
  }
  getSlideClasses(c) {
    const r = this;
    return r.destroyed
      ? ""
      : c.className
          .split(" ")
          .filter(
            (n) =>
              n.indexOf("swiper-slide") === 0 ||
              n.indexOf(r.params.slideClass) === 0,
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const c = this;
    if (!c.params._emitClasses || !c.el) return;
    const r = [];
    (c.slides.forEach((n) => {
      const f = c.getSlideClasses(n);
      (r.push({ slideEl: n, classNames: f }), c.emit("_slideClass", n, f));
    }),
      c.emit("_slideClasses", r));
  }
  slidesPerViewDynamic(c = "current", r = !1) {
    const n = this,
      {
        params: f,
        slides: d,
        slidesGrid: p,
        slidesSizesGrid: x,
        size: h,
        activeIndex: m,
      } = n;
    let j = 1;
    if (typeof f.slidesPerView == "number") return f.slidesPerView;
    if (f.centeredSlides) {
      let g = d[m] ? Math.ceil(d[m].swiperSlideSize) : 0,
        N;
      for (let b = m + 1; b < d.length; b += 1)
        d[b] &&
          !N &&
          ((g += Math.ceil(d[b].swiperSlideSize)), (j += 1), g > h && (N = !0));
      for (let b = m - 1; b >= 0; b -= 1)
        d[b] &&
          !N &&
          ((g += d[b].swiperSlideSize), (j += 1), g > h && (N = !0));
    } else if (c === "current")
      for (let g = m + 1; g < d.length; g += 1)
        (r ? p[g] + x[g] - p[m] < h : p[g] - p[m] < h) && (j += 1);
    else for (let g = m - 1; g >= 0; g -= 1) p[m] - p[g] < h && (j += 1);
    return j;
  }
  update() {
    const c = this;
    if (!c || c.destroyed) return;
    const { snapGrid: r, params: n } = c;
    (n.breakpoints && c.setBreakpoint(),
      [...c.el.querySelectorAll('[loading="lazy"]')].forEach((p) => {
        p.complete && nr(c, p);
      }),
      c.updateSize(),
      c.updateSlides(),
      c.updateProgress(),
      c.updateSlidesClasses());
    function f() {
      const p = c.rtlTranslate ? c.translate * -1 : c.translate,
        x = Math.min(Math.max(p, c.maxTranslate()), c.minTranslate());
      (c.setTranslate(x), c.updateActiveIndex(), c.updateSlidesClasses());
    }
    let d;
    if (n.freeMode && n.freeMode.enabled && !n.cssMode)
      (f(), n.autoHeight && c.updateAutoHeight());
    else {
      if (
        (n.slidesPerView === "auto" || n.slidesPerView > 1) &&
        c.isEnd &&
        !n.centeredSlides
      ) {
        const p = c.virtual && n.virtual.enabled ? c.virtual.slides : c.slides;
        d = c.slideTo(p.length - 1, 0, !1, !0);
      } else d = c.slideTo(c.activeIndex, 0, !1, !0);
      d || f();
    }
    (n.watchOverflow && r !== c.snapGrid && c.checkOverflow(),
      c.emit("update"));
  }
  changeDirection(c, r = !0) {
    const n = this,
      f = n.params.direction;
    return (
      c || (c = f === "horizontal" ? "vertical" : "horizontal"),
      c === f ||
        (c !== "horizontal" && c !== "vertical") ||
        (n.el.classList.remove(`${n.params.containerModifierClass}${f}`),
        n.el.classList.add(`${n.params.containerModifierClass}${c}`),
        n.emitContainerClasses(),
        (n.params.direction = c),
        n.slides.forEach((d) => {
          c === "vertical" ? (d.style.width = "") : (d.style.height = "");
        }),
        n.emit("changeDirection"),
        r && n.update()),
      n
    );
  }
  changeLanguageDirection(c) {
    const r = this;
    (r.rtl && c === "rtl") ||
      (!r.rtl && c === "ltr") ||
      ((r.rtl = c === "rtl"),
      (r.rtlTranslate = r.params.direction === "horizontal" && r.rtl),
      r.rtl
        ? (r.el.classList.add(`${r.params.containerModifierClass}rtl`),
          (r.el.dir = "rtl"))
        : (r.el.classList.remove(`${r.params.containerModifierClass}rtl`),
          (r.el.dir = "ltr")),
      r.update());
  }
  mount(c) {
    const r = this;
    if (r.mounted) return !0;
    let n = c || r.params.el;
    if ((typeof n == "string" && (n = document.querySelector(n)), !n))
      return !1;
    ((n.swiper = r),
      n.parentNode &&
        n.parentNode.host &&
        n.parentNode.host.nodeName ===
          r.params.swiperElementNodeName.toUpperCase() &&
        (r.isElement = !0));
    const f = () =>
      `.${(r.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let p =
      n && n.shadowRoot && n.shadowRoot.querySelector
        ? n.shadowRoot.querySelector(f())
        : na(n, f())[0];
    return (
      !p &&
        r.params.createElements &&
        ((p = Di("div", r.params.wrapperClass)),
        n.append(p),
        na(n, `.${r.params.slideClass}`).forEach((x) => {
          p.append(x);
        })),
      Object.assign(r, {
        el: n,
        wrapperEl: p,
        slidesEl:
          r.isElement && !n.parentNode.host.slideSlots ? n.parentNode.host : p,
        hostEl: r.isElement ? n.parentNode.host : n,
        mounted: !0,
        rtl: n.dir.toLowerCase() === "rtl" || dl(n, "direction") === "rtl",
        rtlTranslate:
          r.params.direction === "horizontal" &&
          (n.dir.toLowerCase() === "rtl" || dl(n, "direction") === "rtl"),
        wrongRTL: dl(p, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(c) {
    const r = this;
    if (r.initialized || r.mount(c) === !1) return r;
    (r.emit("beforeInit"),
      r.params.breakpoints && r.setBreakpoint(),
      r.addClasses(),
      r.updateSize(),
      r.updateSlides(),
      r.params.watchOverflow && r.checkOverflow(),
      r.params.grabCursor && r.enabled && r.setGrabCursor(),
      r.params.loop && r.virtual && r.params.virtual.enabled
        ? r.slideTo(
            r.params.initialSlide + r.virtual.slidesBefore,
            0,
            r.params.runCallbacksOnInit,
            !1,
            !0,
          )
        : r.slideTo(
            r.params.initialSlide,
            0,
            r.params.runCallbacksOnInit,
            !1,
            !0,
          ),
      r.params.loop && r.loopCreate(void 0, !0),
      r.attachEvents());
    const f = [...r.el.querySelectorAll('[loading="lazy"]')];
    return (
      r.isElement && f.push(...r.hostEl.querySelectorAll('[loading="lazy"]')),
      f.forEach((d) => {
        d.complete
          ? nr(r, d)
          : d.addEventListener("load", (p) => {
              nr(r, p.target);
            });
      }),
      tu(r),
      (r.initialized = !0),
      tu(r),
      r.emit("init"),
      r.emit("afterInit"),
      r
    );
  }
  destroy(c = !0, r = !0) {
    const n = this,
      { params: f, el: d, wrapperEl: p, slides: x } = n;
    return (
      typeof n.params > "u" ||
        n.destroyed ||
        (n.emit("beforeDestroy"),
        (n.initialized = !1),
        n.detachEvents(),
        f.loop && n.loopDestroy(),
        r &&
          (n.removeClasses(),
          d && typeof d != "string" && d.removeAttribute("style"),
          p && p.removeAttribute("style"),
          x &&
            x.length &&
            x.forEach((h) => {
              (h.classList.remove(
                f.slideVisibleClass,
                f.slideFullyVisibleClass,
                f.slideActiveClass,
                f.slideNextClass,
                f.slidePrevClass,
              ),
                h.removeAttribute("style"),
                h.removeAttribute("data-swiper-slide-index"));
            })),
        n.emit("destroy"),
        Object.keys(n.eventsListeners).forEach((h) => {
          n.off(h);
        }),
        c !== !1 &&
          (n.el && typeof n.el != "string" && (n.el.swiper = null), fy(n)),
        (n.destroyed = !0)),
      null
    );
  }
  static extendDefaults(c) {
    Vt(Ko, c);
  }
  static get extendedDefaults() {
    return Ko;
  }
  static get defaults() {
    return au;
  }
  static installModule(c) {
    La.prototype.__modules__ || (La.prototype.__modules__ = []);
    const r = La.prototype.__modules__;
    typeof c == "function" && r.indexOf(c) < 0 && r.push(c);
  }
  static use(c) {
    return Array.isArray(c)
      ? (c.forEach((r) => La.installModule(r)), La)
      : (La.installModule(c), La);
  }
};
Object.keys($o).forEach((s) => {
  Object.keys($o[s]).forEach((c) => {
    vu.prototype[c] = $o[s][c];
  });
});
vu.use([wy, Ty]);
const Vp = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "swiperElementNodeName",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_snapToSlideEdge",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function Ll(s) {
  return (
    typeof s == "object" &&
    s !== null &&
    s.constructor &&
    Object.prototype.toString.call(s).slice(8, -1) === "Object" &&
    !s.__swiper__
  );
}
function Ns(s, c) {
  const r = ["__proto__", "constructor", "prototype"];
  Object.keys(c)
    .filter((n) => r.indexOf(n) < 0)
    .forEach((n) => {
      typeof s[n] > "u"
        ? (s[n] = c[n])
        : Ll(c[n]) && Ll(s[n]) && Object.keys(c[n]).length > 0
          ? c[n].__swiper__
            ? (s[n] = c[n])
            : Ns(s[n], c[n])
          : (s[n] = c[n]);
    });
}
function Yp(s = {}) {
  return (
    s.navigation &&
    typeof s.navigation.nextEl > "u" &&
    typeof s.navigation.prevEl > "u"
  );
}
function kp(s = {}) {
  return s.pagination && typeof s.pagination.el > "u";
}
function Xp(s = {}) {
  return s.scrollbar && typeof s.scrollbar.el > "u";
}
function Qp(s = "") {
  const c = s
      .split(" ")
      .map((n) => n.trim())
      .filter((n) => !!n),
    r = [];
  return (
    c.forEach((n) => {
      r.indexOf(n) < 0 && r.push(n);
    }),
    r.join(" ")
  );
}
function A0(s = "") {
  return s
    ? s.includes("swiper-wrapper")
      ? s
      : `swiper-wrapper ${s}`
    : "swiper-wrapper";
}
function z0({
  swiper: s,
  slides: c,
  passedParams: r,
  changedParams: n,
  nextEl: f,
  prevEl: d,
  scrollbarEl: p,
  paginationEl: x,
}) {
  const h = n.filter(
      (T) => T !== "children" && T !== "direction" && T !== "wrapperClass",
    ),
    {
      params: m,
      pagination: j,
      navigation: g,
      scrollbar: N,
      virtual: b,
      thumbs: E,
    } = s;
  let M, A, S, w, z, J, $, ee;
  (n.includes("thumbs") &&
    r.thumbs &&
    r.thumbs.swiper &&
    !r.thumbs.swiper.destroyed &&
    m.thumbs &&
    (!m.thumbs.swiper || m.thumbs.swiper.destroyed) &&
    (M = !0),
    n.includes("controller") &&
      r.controller &&
      r.controller.control &&
      m.controller &&
      !m.controller.control &&
      (A = !0),
    n.includes("pagination") &&
      r.pagination &&
      (r.pagination.el || x) &&
      (m.pagination || m.pagination === !1) &&
      j &&
      !j.el &&
      (S = !0),
    n.includes("scrollbar") &&
      r.scrollbar &&
      (r.scrollbar.el || p) &&
      (m.scrollbar || m.scrollbar === !1) &&
      N &&
      !N.el &&
      (w = !0),
    n.includes("navigation") &&
      r.navigation &&
      (r.navigation.prevEl || d) &&
      (r.navigation.nextEl || f) &&
      (m.navigation || m.navigation === !1) &&
      g &&
      !g.prevEl &&
      !g.nextEl &&
      (z = !0));
  const K = (T) => {
    s[T] &&
      (s[T].destroy(),
      T === "navigation"
        ? (s.isElement && (s[T].prevEl.remove(), s[T].nextEl.remove()),
          (m[T].prevEl = void 0),
          (m[T].nextEl = void 0),
          (s[T].prevEl = void 0),
          (s[T].nextEl = void 0))
        : (s.isElement && s[T].el.remove(),
          (m[T].el = void 0),
          (s[T].el = void 0)));
  };
  (n.includes("loop") &&
    s.isElement &&
    (m.loop && !r.loop ? (J = !0) : !m.loop && r.loop ? ($ = !0) : (ee = !0)),
    h.forEach((T) => {
      if (Ll(m[T]) && Ll(r[T]))
        (Object.assign(m[T], r[T]),
          (T === "navigation" || T === "pagination" || T === "scrollbar") &&
            "enabled" in r[T] &&
            !r[T].enabled &&
            K(T));
      else {
        const G = r[T];
        (G === !0 || G === !1) &&
        (T === "navigation" || T === "pagination" || T === "scrollbar")
          ? G === !1 && K(T)
          : (m[T] = r[T]);
      }
    }),
    h.includes("controller") &&
      !A &&
      s.controller &&
      s.controller.control &&
      m.controller &&
      m.controller.control &&
      (s.controller.control = m.controller.control),
    n.includes("children") && c && b && m.virtual.enabled
      ? ((b.slides = c), b.update(!0))
      : n.includes("virtual") &&
        b &&
        m.virtual.enabled &&
        (c && (b.slides = c), b.update(!0)),
    n.includes("children") && c && m.loop && (ee = !0),
    M && E.init() && E.update(!0),
    A && (s.controller.control = m.controller.control),
    S &&
      (s.isElement &&
        (!x || typeof x == "string") &&
        ((x = document.createElement("div")),
        x.classList.add("swiper-pagination"),
        x.part.add("pagination"),
        s.el.appendChild(x)),
      x && (m.pagination.el = x),
      j.init(),
      j.render(),
      j.update()),
    w &&
      (s.isElement &&
        (!p || typeof p == "string") &&
        ((p = document.createElement("div")),
        p.classList.add("swiper-scrollbar"),
        p.part.add("scrollbar"),
        s.el.appendChild(p)),
      p && (m.scrollbar.el = p),
      N.init(),
      N.updateSize(),
      N.setTranslate()),
    z &&
      (s.isElement &&
        ((!f || typeof f == "string") &&
          ((f = document.createElement("div")),
          f.classList.add("swiper-button-next"),
          _i(f, s.navigation.arrowSvg),
          f.part.add("button-next"),
          s.el.appendChild(f)),
        (!d || typeof d == "string") &&
          ((d = document.createElement("div")),
          d.classList.add("swiper-button-prev"),
          _i(d, s.navigation.arrowSvg),
          d.part.add("button-prev"),
          s.el.appendChild(d))),
      f && (m.navigation.nextEl = f),
      d && (m.navigation.prevEl = d),
      g.init(),
      g.update()),
    n.includes("allowSlideNext") && (s.allowSlideNext = r.allowSlideNext),
    n.includes("allowSlidePrev") && (s.allowSlidePrev = r.allowSlidePrev),
    n.includes("direction") && s.changeDirection(r.direction, !1),
    (J || ee) && s.loopDestroy(),
    ($ || ee) && s.loopCreate(),
    s.update());
}
function D0(s = {}, c = !0) {
  const r = { on: {} },
    n = {},
    f = {};
  (Ns(r, au), (r._emitClasses = !0), (r.init = !1));
  const d = {},
    p = Vp.map((h) => h.replace(/_/, "")),
    x = Object.assign({}, s);
  return (
    Object.keys(x).forEach((h) => {
      typeof s[h] > "u" ||
        (p.indexOf(h) >= 0
          ? Ll(s[h])
            ? ((r[h] = {}), (f[h] = {}), Ns(r[h], s[h]), Ns(f[h], s[h]))
            : ((r[h] = s[h]), (f[h] = s[h]))
          : h.search(/on[A-Z]/) === 0 && typeof s[h] == "function"
            ? c
              ? (n[`${h[2].toLowerCase()}${h.substr(3)}`] = s[h])
              : (r.on[`${h[2].toLowerCase()}${h.substr(3)}`] = s[h])
            : (d[h] = s[h]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((h) => {
      (r[h] === !0 && (r[h] = {}), r[h] === !1 && delete r[h]);
    }),
    { params: r, passedParams: f, rest: d, events: n }
  );
}
function _0(
  { el: s, nextEl: c, prevEl: r, paginationEl: n, scrollbarEl: f, swiper: d },
  p,
) {
  (Yp(p) &&
    c &&
    r &&
    ((d.params.navigation.nextEl = c),
    (d.originalParams.navigation.nextEl = c),
    (d.params.navigation.prevEl = r),
    (d.originalParams.navigation.prevEl = r)),
    kp(p) &&
      n &&
      ((d.params.pagination.el = n), (d.originalParams.pagination.el = n)),
    Xp(p) &&
      f &&
      ((d.params.scrollbar.el = f), (d.originalParams.scrollbar.el = f)),
    d.init(s));
}
function R0(s, c, r, n, f) {
  const d = [];
  if (!c) return d;
  const p = (h) => {
    d.indexOf(h) < 0 && d.push(h);
  };
  if (r && n) {
    const h = n.map(f),
      m = r.map(f);
    (h.join("") !== m.join("") && p("children"),
      n.length !== r.length && p("children"));
  }
  return (
    Vp.filter((h) => h[0] === "_")
      .map((h) => h.replace(/_/, ""))
      .forEach((h) => {
        if (h in s && h in c)
          if (Ll(s[h]) && Ll(c[h])) {
            const m = Object.keys(s[h]),
              j = Object.keys(c[h]);
            m.length !== j.length
              ? p(h)
              : (m.forEach((g) => {
                  s[h][g] !== c[h][g] && p(h);
                }),
                j.forEach((g) => {
                  s[h][g] !== c[h][g] && p(h);
                }));
          } else s[h] !== c[h] && p(h);
      }),
    d
  );
}
const L0 = (s) => {
  !s ||
    s.destroyed ||
    !s.params.virtual ||
    (s.params.virtual && !s.params.virtual.enabled) ||
    (s.updateSlides(),
    s.updateProgress(),
    s.updateSlidesClasses(),
    s.emit("_virtualUpdated"),
    s.parallax &&
      s.params.parallax &&
      s.params.parallax.enabled &&
      s.parallax.setTranslate());
};
function dr() {
  return (
    (dr = Object.assign
      ? Object.assign.bind()
      : function (s) {
          for (var c = 1; c < arguments.length; c++) {
            var r = arguments[c];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (s[n] = r[n]);
          }
          return s;
        }),
    dr.apply(this, arguments)
  );
}
function Zp(s) {
  return (
    s.type && s.type.displayName && s.type.displayName.includes("SwiperSlide")
  );
}
function Jp(s) {
  const c = [];
  return (
    rt.Children.toArray(s).forEach((r) => {
      Zp(r)
        ? c.push(r)
        : r.props &&
          r.props.children &&
          Jp(r.props.children).forEach((n) => c.push(n));
    }),
    c
  );
}
function B0(s) {
  const c = [],
    r = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    rt.Children.toArray(s).forEach((n) => {
      if (Zp(n)) c.push(n);
      else if (n.props && n.props.slot && r[n.props.slot])
        r[n.props.slot].push(n);
      else if (n.props && n.props.children) {
        const f = Jp(n.props.children);
        f.length > 0 ? f.forEach((d) => c.push(d)) : r["container-end"].push(n);
      } else r["container-end"].push(n);
    }),
    { slides: c, slots: r }
  );
}
function H0(s, c, r) {
  if (!r) return null;
  const n = (j) => {
      let g = j;
      return (
        j < 0 ? (g = c.length + j) : g >= c.length && (g = g - c.length),
        g
      );
    },
    f = s.isHorizontal()
      ? { [s.rtlTranslate ? "right" : "left"]: `${r.offset}px` }
      : { top: `${r.offset}px` },
    { from: d, to: p } = r,
    x = s.params.loop ? -c.length : 0,
    h = s.params.loop ? c.length * 2 : c.length,
    m = [];
  for (let j = x; j < h; j += 1) j >= d && j <= p && m.push(c[n(j)]);
  return m.map((j, g) =>
    rt.cloneElement(j, {
      swiper: s,
      style: f,
      key: j.props.virtualIndex || j.key || `slide-${g}`,
    }),
  );
}
function Ai(s, c) {
  return typeof window > "u" ? H.useEffect(s, c) : H.useLayoutEffect(s, c);
}
const Vm = H.createContext(null),
  U0 = H.createContext(null),
  Ua = H.forwardRef(
    (
      {
        className: s,
        tag: c = "div",
        wrapperTag: r = "div",
        children: n,
        onSwiper: f,
        ...d
      } = {},
      p,
    ) => {
      let x = !1;
      const [h, m] = H.useState("swiper"),
        [j, g] = H.useState(null),
        [N, b] = H.useState(!1),
        E = H.useRef(!1),
        M = H.useRef(null),
        A = H.useRef(null),
        S = H.useRef(null),
        w = H.useRef(null),
        z = H.useRef(null),
        J = H.useRef(null),
        $ = H.useRef(null),
        ee = H.useRef(null),
        { params: K, passedParams: T, rest: G, events: L } = D0(d),
        { slides: _, slots: B } = B0(n),
        ae = () => {
          b(!N);
        };
      Object.assign(K.on, {
        _containerClasses(Q, ie) {
          m(ie);
        },
      });
      const te = () => {
        (Object.assign(K.on, L), (x = !0));
        const Q = { ...K };
        if (
          (delete Q.wrapperClass,
          (A.current = new vu(Q)),
          A.current.virtual && A.current.params.virtual.enabled)
        ) {
          A.current.virtual.slides = _;
          const ie = {
            cache: !1,
            slides: _,
            renderExternal: g,
            renderExternalUpdate: !1,
          };
          (Ns(A.current.params.virtual, ie),
            Ns(A.current.originalParams.virtual, ie));
        }
      };
      (M.current || te(), A.current && A.current.on("_beforeBreakpoint", ae));
      const ce = () => {
          x ||
            !L ||
            !A.current ||
            Object.keys(L).forEach((Q) => {
              A.current.on(Q, L[Q]);
            });
        },
        U = () => {
          !L ||
            !A.current ||
            Object.keys(L).forEach((Q) => {
              A.current.off(Q, L[Q]);
            });
        };
      (H.useEffect(() => () => {
        A.current && A.current.off("_beforeBreakpoint", ae);
      }),
        H.useEffect(() => {
          !E.current &&
            A.current &&
            (A.current.emitSlidesClasses(), (E.current = !0));
        }),
        Ai(() => {
          if ((p && (p.current = M.current), !!M.current))
            return (
              A.current.destroyed && te(),
              _0(
                {
                  el: M.current,
                  nextEl: z.current,
                  prevEl: J.current,
                  paginationEl: $.current,
                  scrollbarEl: ee.current,
                  swiper: A.current,
                },
                K,
              ),
              f && !A.current.destroyed && f(A.current),
              () => {
                A.current && !A.current.destroyed && A.current.destroy(!0, !1);
              }
            );
        }, []),
        Ai(() => {
          ce();
          const Q = R0(T, S.current, _, w.current, (ie) => ie.key);
          return (
            (S.current = T),
            (w.current = _),
            Q.length &&
              A.current &&
              !A.current.destroyed &&
              z0({
                swiper: A.current,
                slides: _,
                passedParams: T,
                changedParams: Q,
                nextEl: z.current,
                prevEl: J.current,
                scrollbarEl: ee.current,
                paginationEl: $.current,
              }),
            () => {
              U();
            }
          );
        }),
        Ai(() => {
          L0(A.current);
        }, [j]));
      function X() {
        return K.virtual
          ? H0(A.current, _, j)
          : _.map((Q, ie) =>
              rt.cloneElement(Q, { swiper: A.current, swiperSlideIndex: ie }),
            );
      }
      return rt.createElement(
        c,
        dr({ ref: M, className: Qp(`${h}${s ? ` ${s}` : ""}`) }, G),
        rt.createElement(
          U0.Provider,
          { value: A.current },
          B["container-start"],
          rt.createElement(
            r,
            { className: A0(K.wrapperClass) },
            B["wrapper-start"],
            X(),
            B["wrapper-end"],
          ),
          Yp(K) &&
            rt.createElement(
              rt.Fragment,
              null,
              rt.createElement("div", {
                ref: J,
                className: "swiper-button-prev",
              }),
              rt.createElement("div", {
                ref: z,
                className: "swiper-button-next",
              }),
            ),
          Xp(K) &&
            rt.createElement("div", { ref: ee, className: "swiper-scrollbar" }),
          kp(K) &&
            rt.createElement("div", { ref: $, className: "swiper-pagination" }),
          B["container-end"],
        ),
      );
    },
  );
Ua.displayName = "Swiper";
const dt = H.forwardRef(
  (
    {
      tag: s = "div",
      children: c,
      className: r = "",
      swiper: n,
      zoom: f,
      lazy: d,
      virtualIndex: p,
      swiperSlideIndex: x,
      ...h
    } = {},
    m,
  ) => {
    const j = H.useRef(null),
      [g, N] = H.useState("swiper-slide"),
      [b, E] = H.useState(!1);
    function M(z, J, $) {
      J === j.current && N($);
    }
    (Ai(() => {
      if (
        (typeof x < "u" && (j.current.swiperSlideIndex = x),
        m && (m.current = j.current),
        !(!j.current || !n))
      ) {
        if (n.destroyed) {
          g !== "swiper-slide" && N("swiper-slide");
          return;
        }
        return (
          n.on("_slideClass", M),
          () => {
            n && n.off("_slideClass", M);
          }
        );
      }
    }),
      Ai(() => {
        n && j.current && !n.destroyed && N(n.getSlideClasses(j.current));
      }, [n]));
    const A = {
        isActive: g.indexOf("swiper-slide-active") >= 0,
        isVisible: g.indexOf("swiper-slide-visible") >= 0,
        isPrev: g.indexOf("swiper-slide-prev") >= 0,
        isNext: g.indexOf("swiper-slide-next") >= 0,
      },
      S = () => (typeof c == "function" ? c(A) : c),
      w = () => {
        E(!0);
      };
    return rt.createElement(
      s,
      dr(
        {
          ref: j,
          className: Qp(`${g}${r ? ` ${r}` : ""}`),
          "data-swiper-slide-index": p,
          onLoad: w,
        },
        h,
      ),
      f &&
        rt.createElement(
          Vm.Provider,
          { value: A },
          rt.createElement(
            "div",
            {
              className: "swiper-zoom-container",
              "data-swiper-zoom": typeof f == "number" ? f : void 0,
            },
            S(),
            d &&
              !b &&
              rt.createElement("div", {
                className: "swiper-lazy-preloader",
                ref: (z) => {
                  z && (z.lazyPreloaderManaged = !0);
                },
              }),
          ),
        ),
      !f &&
        rt.createElement(
          Vm.Provider,
          { value: A },
          S(),
          d &&
            !b &&
            rt.createElement("div", {
              className: "swiper-lazy-preloader",
              ref: (z) => {
                z && (z.lazyPreloaderManaged = !0);
              },
            }),
        ),
    );
  },
);
dt.displayName = "SwiperSlide";
function Fp(s, c, r, n) {
  return (
    s.params.createElements &&
      Object.keys(n).forEach((f) => {
        if (!r[f] && r.auto === !0) {
          let d = na(s.el, `.${n[f]}`)[0];
          (d || ((d = Di("div", n[f])), (d.className = n[f]), s.el.append(d)),
            (r[f] = d),
            (c[f] = d));
        }
      }),
    r
  );
}
const Ym =
  '<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';
function Ui({ swiper: s, extendParams: c, on: r, emit: n }) {
  (c({
    navigation: {
      nextEl: null,
      prevEl: null,
      addIcons: !0,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled",
    },
  }),
    (s.navigation = { nextEl: null, prevEl: null, arrowSvg: Ym }));
  function f(b) {
    let E;
    return b &&
      typeof b == "string" &&
      s.isElement &&
      ((E = s.el.querySelector(b) || s.hostEl.querySelector(b)), E)
      ? E
      : (b &&
          (typeof b == "string" && (E = [...document.querySelectorAll(b)]),
          s.params.uniqueNavElements &&
          typeof b == "string" &&
          E &&
          E.length > 1 &&
          s.el.querySelectorAll(b).length === 1
            ? (E = s.el.querySelector(b))
            : E && E.length === 1 && (E = E[0])),
        b && !E ? b : E);
  }
  function d(b, E) {
    const M = s.params.navigation;
    ((b = ut(b)),
      b.forEach((A) => {
        A &&
          (A.classList[E ? "add" : "remove"](...M.disabledClass.split(" ")),
          A.tagName === "BUTTON" && (A.disabled = E),
          s.params.watchOverflow &&
            s.enabled &&
            A.classList[s.isLocked ? "add" : "remove"](M.lockClass));
      }));
  }
  function p() {
    const { nextEl: b, prevEl: E } = s.navigation;
    if (s.params.loop) {
      (d(E, !1), d(b, !1));
      return;
    }
    (d(E, s.isBeginning && !s.params.rewind),
      d(b, s.isEnd && !s.params.rewind));
  }
  function x(b) {
    (b.preventDefault(),
      !(s.isBeginning && !s.params.loop && !s.params.rewind) &&
        (s.slidePrev(), n("navigationPrev")));
  }
  function h(b) {
    (b.preventDefault(),
      !(s.isEnd && !s.params.loop && !s.params.rewind) &&
        (s.slideNext(), n("navigationNext")));
  }
  function m() {
    const b = s.params.navigation;
    if (
      ((s.params.navigation = Fp(
        s,
        s.originalParams.navigation,
        s.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" },
      )),
      !(b.nextEl || b.prevEl))
    )
      return;
    let E = f(b.nextEl),
      M = f(b.prevEl);
    (Object.assign(s.navigation, { nextEl: E, prevEl: M }),
      (E = ut(E)),
      (M = ut(M)));
    const A = (S, w) => {
      if (S) {
        if (
          b.addIcons &&
          S.matches(".swiper-button-next,.swiper-button-prev") &&
          !S.querySelector("svg")
        ) {
          const z = document.createElement("div");
          (_i(z, Ym), S.appendChild(z.querySelector("svg")), z.remove());
        }
        S.addEventListener("click", w === "next" ? h : x);
      }
      !s.enabled && S && S.classList.add(...b.lockClass.split(" "));
    };
    (E.forEach((S) => A(S, "next")), M.forEach((S) => A(S, "prev")));
  }
  function j() {
    let { nextEl: b, prevEl: E } = s.navigation;
    ((b = ut(b)), (E = ut(E)));
    const M = (A, S) => {
      (A.removeEventListener("click", S === "next" ? h : x),
        A.classList.remove(...s.params.navigation.disabledClass.split(" ")));
    };
    (b.forEach((A) => M(A, "next")), E.forEach((A) => M(A, "prev")));
  }
  (r("init", () => {
    s.params.navigation.enabled === !1 ? N() : (m(), p());
  }),
    r("toEdge fromEdge lock unlock", () => {
      p();
    }),
    r("destroy", () => {
      j();
    }),
    r("enable disable", () => {
      let { nextEl: b, prevEl: E } = s.navigation;
      if (((b = ut(b)), (E = ut(E)), s.enabled)) {
        p();
        return;
      }
      [...b, ...E]
        .filter((M) => !!M)
        .forEach((M) => M.classList.add(s.params.navigation.lockClass));
    }),
    r("click", (b, E) => {
      let { nextEl: M, prevEl: A } = s.navigation;
      ((M = ut(M)), (A = ut(A)));
      const S = E.target;
      let w = A.includes(S) || M.includes(S);
      if (s.isElement && !w) {
        const z = E.path || (E.composedPath && E.composedPath());
        z && (w = z.find((J) => M.includes(J) || A.includes(J)));
      }
      if (s.params.navigation.hideOnClick && !w) {
        if (
          s.pagination &&
          s.params.pagination &&
          s.params.pagination.clickable &&
          (s.pagination.el === S || s.pagination.el.contains(S))
        )
          return;
        let z;
        (M.length
          ? (z = M[0].classList.contains(s.params.navigation.hiddenClass))
          : A.length &&
            (z = A[0].classList.contains(s.params.navigation.hiddenClass)),
          n(z === !0 ? "navigationShow" : "navigationHide"),
          [...M, ...A]
            .filter((J) => !!J)
            .forEach((J) =>
              J.classList.toggle(s.params.navigation.hiddenClass),
            ));
      }
    }));
  const g = () => {
      (s.el.classList.remove(
        ...s.params.navigation.navigationDisabledClass.split(" "),
      ),
        m(),
        p());
    },
    N = () => {
      (s.el.classList.add(
        ...s.params.navigation.navigationDisabledClass.split(" "),
      ),
        j());
    };
  Object.assign(s.navigation, {
    enable: g,
    disable: N,
    update: p,
    init: m,
    destroy: j,
  });
}
function Ei(s = "") {
  return `.${s
    .trim()
    .replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g, "\\$1")
    .replace(/ /g, ".")}`;
}
function G0({ swiper: s, extendParams: c, on: r, emit: n }) {
  const f = "swiper-pagination";
  (c({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (S) => S,
      formatFractionTotal: (S) => S,
      bulletClass: `${f}-bullet`,
      bulletActiveClass: `${f}-bullet-active`,
      modifierClass: `${f}-`,
      currentClass: `${f}-current`,
      totalClass: `${f}-total`,
      hiddenClass: `${f}-hidden`,
      progressbarFillClass: `${f}-progressbar-fill`,
      progressbarOppositeClass: `${f}-progressbar-opposite`,
      clickableClass: `${f}-clickable`,
      lockClass: `${f}-lock`,
      horizontalClass: `${f}-horizontal`,
      verticalClass: `${f}-vertical`,
      paginationDisabledClass: `${f}-disabled`,
    },
  }),
    (s.pagination = { el: null, bullets: [] }));
  let d,
    p = 0;
  function x() {
    return (
      !s.params.pagination.el ||
      !s.pagination.el ||
      (Array.isArray(s.pagination.el) && s.pagination.el.length === 0)
    );
  }
  function h(S, w) {
    const { bulletActiveClass: z } = s.params.pagination;
    S &&
      ((S = S[`${w === "prev" ? "previous" : "next"}ElementSibling`]),
      S &&
        (S.classList.add(`${z}-${w}`),
        (S = S[`${w === "prev" ? "previous" : "next"}ElementSibling`]),
        S && S.classList.add(`${z}-${w}-${w}`)));
  }
  function m(S, w, z) {
    if (((S = S % z), (w = w % z), w === S + 1)) return "next";
    if (w === S - 1) return "previous";
  }
  function j(S) {
    const w = S.target.closest(Ei(s.params.pagination.bulletClass));
    if (!w) return;
    S.preventDefault();
    const z = ur(w) * s.params.slidesPerGroup;
    if (s.params.loop) {
      if (s.realIndex === z) return;
      const J = m(s.realIndex, z, s.slides.length);
      J === "next"
        ? s.slideNext()
        : J === "previous"
          ? s.slidePrev()
          : s.slideToLoop(z);
    } else s.slideTo(z);
  }
  function g() {
    const S = s.rtl,
      w = s.params.pagination;
    if (x()) return;
    let z = s.pagination.el;
    z = ut(z);
    let J, $;
    const ee =
        s.virtual && s.params.virtual.enabled
          ? s.virtual.slides.length
          : s.slides.length,
      K = s.params.loop
        ? Math.ceil(ee / s.params.slidesPerGroup)
        : s.snapGrid.length;
    if (
      (s.params.loop
        ? (($ = s.previousRealIndex || 0),
          (J =
            s.params.slidesPerGroup > 1
              ? Math.floor(s.realIndex / s.params.slidesPerGroup)
              : s.realIndex))
        : typeof s.snapIndex < "u"
          ? ((J = s.snapIndex), ($ = s.previousSnapIndex))
          : (($ = s.previousIndex || 0), (J = s.activeIndex || 0)),
      w.type === "bullets" &&
        s.pagination.bullets &&
        s.pagination.bullets.length > 0)
    ) {
      const T = s.pagination.bullets;
      let G, L, _;
      if (
        (w.dynamicBullets &&
          ((d = eu(T[0], s.isHorizontal() ? "width" : "height")),
          z.forEach((B) => {
            B.style[s.isHorizontal() ? "width" : "height"] =
              `${d * (w.dynamicMainBullets + 4)}px`;
          }),
          w.dynamicMainBullets > 1 &&
            $ !== void 0 &&
            ((p += J - ($ || 0)),
            p > w.dynamicMainBullets - 1
              ? (p = w.dynamicMainBullets - 1)
              : p < 0 && (p = 0)),
          (G = Math.max(J - p, 0)),
          (L = G + (Math.min(T.length, w.dynamicMainBullets) - 1)),
          (_ = (L + G) / 2)),
        T.forEach((B) => {
          const ae = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              (te) => `${w.bulletActiveClass}${te}`,
            ),
          ]
            .map((te) =>
              typeof te == "string" && te.includes(" ") ? te.split(" ") : te,
            )
            .flat();
          B.classList.remove(...ae);
        }),
        z.length > 1)
      )
        T.forEach((B) => {
          const ae = ur(B);
          (ae === J
            ? B.classList.add(...w.bulletActiveClass.split(" "))
            : s.isElement && B.setAttribute("part", "bullet"),
            w.dynamicBullets &&
              (ae >= G &&
                ae <= L &&
                B.classList.add(...`${w.bulletActiveClass}-main`.split(" ")),
              ae === G && h(B, "prev"),
              ae === L && h(B, "next")));
        });
      else {
        const B = T[J];
        if (
          (B && B.classList.add(...w.bulletActiveClass.split(" ")),
          s.isElement &&
            T.forEach((ae, te) => {
              ae.setAttribute("part", te === J ? "bullet-active" : "bullet");
            }),
          w.dynamicBullets)
        ) {
          const ae = T[G],
            te = T[L];
          for (let ce = G; ce <= L; ce += 1)
            T[ce] &&
              T[ce].classList.add(...`${w.bulletActiveClass}-main`.split(" "));
          (h(ae, "prev"), h(te, "next"));
        }
      }
      if (w.dynamicBullets) {
        const B = Math.min(T.length, w.dynamicMainBullets + 4),
          ae = (d * B - d) / 2 - _ * d,
          te = S ? "right" : "left";
        T.forEach((ce) => {
          ce.style[s.isHorizontal() ? te : "top"] = `${ae}px`;
        });
      }
    }
    z.forEach((T, G) => {
      if (
        (w.type === "fraction" &&
          (T.querySelectorAll(Ei(w.currentClass)).forEach((L) => {
            L.textContent = w.formatFractionCurrent(J + 1);
          }),
          T.querySelectorAll(Ei(w.totalClass)).forEach((L) => {
            L.textContent = w.formatFractionTotal(K);
          })),
        w.type === "progressbar")
      ) {
        let L;
        w.progressbarOpposite
          ? (L = s.isHorizontal() ? "vertical" : "horizontal")
          : (L = s.isHorizontal() ? "horizontal" : "vertical");
        const _ = (J + 1) / K;
        let B = 1,
          ae = 1;
        (L === "horizontal" ? (B = _) : (ae = _),
          T.querySelectorAll(Ei(w.progressbarFillClass)).forEach((te) => {
            ((te.style.transform = `translate3d(0,0,0) scaleX(${B}) scaleY(${ae})`),
              (te.style.transitionDuration = `${s.params.speed}ms`));
          }));
      }
      (w.type === "custom" && w.renderCustom
        ? (_i(T, w.renderCustom(s, J + 1, K)),
          G === 0 && n("paginationRender", T))
        : (G === 0 && n("paginationRender", T), n("paginationUpdate", T)),
        s.params.watchOverflow &&
          s.enabled &&
          T.classList[s.isLocked ? "add" : "remove"](w.lockClass));
    });
  }
  function N() {
    const S = s.params.pagination;
    if (x()) return;
    const w =
      s.virtual && s.params.virtual.enabled
        ? s.virtual.slides.length
        : s.grid && s.params.grid.rows > 1
          ? s.slides.length / Math.ceil(s.params.grid.rows)
          : s.slides.length;
    let z = s.pagination.el;
    z = ut(z);
    let J = "";
    if (S.type === "bullets") {
      let $ = s.params.loop
        ? Math.ceil(w / s.params.slidesPerGroup)
        : s.snapGrid.length;
      s.params.freeMode && s.params.freeMode.enabled && $ > w && ($ = w);
      for (let ee = 0; ee < $; ee += 1)
        S.renderBullet
          ? (J += S.renderBullet.call(s, ee, S.bulletClass))
          : (J += `<${S.bulletElement} ${s.isElement ? 'part="bullet"' : ""} class="${S.bulletClass}"></${S.bulletElement}>`);
    }
    (S.type === "fraction" &&
      (S.renderFraction
        ? (J = S.renderFraction.call(s, S.currentClass, S.totalClass))
        : (J = `<span class="${S.currentClass}"></span> / <span class="${S.totalClass}"></span>`)),
      S.type === "progressbar" &&
        (S.renderProgressbar
          ? (J = S.renderProgressbar.call(s, S.progressbarFillClass))
          : (J = `<span class="${S.progressbarFillClass}"></span>`)),
      (s.pagination.bullets = []),
      z.forEach(($) => {
        (S.type !== "custom" && _i($, J || ""),
          S.type === "bullets" &&
            s.pagination.bullets.push(
              ...$.querySelectorAll(Ei(S.bulletClass)),
            ));
      }),
      S.type !== "custom" && n("paginationRender", z[0]));
  }
  function b() {
    s.params.pagination = Fp(
      s,
      s.originalParams.pagination,
      s.params.pagination,
      { el: "swiper-pagination" },
    );
    const S = s.params.pagination;
    if (!S.el) return;
    let w;
    (typeof S.el == "string" && s.isElement && (w = s.el.querySelector(S.el)),
      !w &&
        typeof S.el == "string" &&
        (w = [...document.querySelectorAll(S.el)]),
      w || (w = S.el),
      !(!w || w.length === 0) &&
        (s.params.uniqueNavElements &&
          typeof S.el == "string" &&
          Array.isArray(w) &&
          w.length > 1 &&
          ((w = [...s.el.querySelectorAll(S.el)]),
          w.length > 1 && (w = w.find((z) => Lp(z, ".swiper")[0] === s.el))),
        Array.isArray(w) && w.length === 1 && (w = w[0]),
        Object.assign(s.pagination, { el: w }),
        (w = ut(w)),
        w.forEach((z) => {
          (S.type === "bullets" &&
            S.clickable &&
            z.classList.add(...(S.clickableClass || "").split(" ")),
            z.classList.add(S.modifierClass + S.type),
            z.classList.add(
              s.isHorizontal() ? S.horizontalClass : S.verticalClass,
            ),
            S.type === "bullets" &&
              S.dynamicBullets &&
              (z.classList.add(`${S.modifierClass}${S.type}-dynamic`),
              (p = 0),
              S.dynamicMainBullets < 1 && (S.dynamicMainBullets = 1)),
            S.type === "progressbar" &&
              S.progressbarOpposite &&
              z.classList.add(S.progressbarOppositeClass),
            S.clickable && z.addEventListener("click", j),
            s.enabled || z.classList.add(S.lockClass));
        })));
  }
  function E() {
    const S = s.params.pagination;
    if (x()) return;
    let w = s.pagination.el;
    (w &&
      ((w = ut(w)),
      w.forEach((z) => {
        (z.classList.remove(S.hiddenClass),
          z.classList.remove(S.modifierClass + S.type),
          z.classList.remove(
            s.isHorizontal() ? S.horizontalClass : S.verticalClass,
          ),
          S.clickable &&
            (z.classList.remove(...(S.clickableClass || "").split(" ")),
            z.removeEventListener("click", j)));
      })),
      s.pagination.bullets &&
        s.pagination.bullets.forEach((z) =>
          z.classList.remove(...S.bulletActiveClass.split(" ")),
        ));
  }
  (r("changeDirection", () => {
    if (!s.pagination || !s.pagination.el) return;
    const S = s.params.pagination;
    let { el: w } = s.pagination;
    ((w = ut(w)),
      w.forEach((z) => {
        (z.classList.remove(S.horizontalClass, S.verticalClass),
          z.classList.add(
            s.isHorizontal() ? S.horizontalClass : S.verticalClass,
          ));
      }));
  }),
    r("init", () => {
      s.params.pagination.enabled === !1 ? A() : (b(), N(), g());
    }),
    r("activeIndexChange", () => {
      typeof s.snapIndex > "u" && g();
    }),
    r("snapIndexChange", () => {
      g();
    }),
    r("snapGridLengthChange", () => {
      (N(), g());
    }),
    r("destroy", () => {
      E();
    }),
    r("enable disable", () => {
      let { el: S } = s.pagination;
      S &&
        ((S = ut(S)),
        S.forEach((w) =>
          w.classList[s.enabled ? "remove" : "add"](
            s.params.pagination.lockClass,
          ),
        ));
    }),
    r("lock unlock", () => {
      g();
    }),
    r("click", (S, w) => {
      const z = w.target,
        J = ut(s.pagination.el);
      if (
        s.params.pagination.el &&
        s.params.pagination.hideOnClick &&
        J &&
        J.length > 0 &&
        !z.classList.contains(s.params.pagination.bulletClass)
      ) {
        if (
          s.navigation &&
          ((s.navigation.nextEl && z === s.navigation.nextEl) ||
            (s.navigation.prevEl && z === s.navigation.prevEl))
        )
          return;
        const $ = J[0].classList.contains(s.params.pagination.hiddenClass);
        (n($ === !0 ? "paginationShow" : "paginationHide"),
          J.forEach((ee) =>
            ee.classList.toggle(s.params.pagination.hiddenClass),
          ));
      }
    }));
  const M = () => {
      s.el.classList.remove(s.params.pagination.paginationDisabledClass);
      let { el: S } = s.pagination;
      (S &&
        ((S = ut(S)),
        S.forEach((w) =>
          w.classList.remove(s.params.pagination.paginationDisabledClass),
        )),
        b(),
        N(),
        g());
    },
    A = () => {
      s.el.classList.add(s.params.pagination.paginationDisabledClass);
      let { el: S } = s.pagination;
      (S &&
        ((S = ut(S)),
        S.forEach((w) =>
          w.classList.add(s.params.pagination.paginationDisabledClass),
        )),
        E());
    };
  Object.assign(s.pagination, {
    enable: M,
    disable: A,
    render: N,
    update: g,
    init: b,
    destroy: E,
  });
}
function Es({ swiper: s, extendParams: c, on: r, emit: n, params: f }) {
  ((s.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    c({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !1,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    }));
  let d,
    p,
    x = f && f.autoplay ? f.autoplay.delay : 3e3,
    h = f && f.autoplay ? f.autoplay.delay : 3e3,
    m,
    j = new Date().getTime(),
    g,
    N,
    b,
    E,
    M,
    A;
  function S(X) {
    !s ||
      s.destroyed ||
      !s.wrapperEl ||
      (X.target === s.wrapperEl &&
        (s.wrapperEl.removeEventListener("transitionend", S),
        !(A || (X.detail && X.detail.bySwiperTouchMove)) && G()));
  }
  const w = () => {
      if (s.destroyed || !s.autoplay.running) return;
      s.autoplay.paused ? (g = !0) : g && ((h = m), (g = !1));
      const X = s.autoplay.paused ? m : j + h - new Date().getTime();
      ((s.autoplay.timeLeft = X),
        n("autoplayTimeLeft", X, X / x),
        (p = requestAnimationFrame(() => {
          w();
        })));
    },
    z = () => {
      let X;
      return (
        s.virtual && s.params.virtual.enabled
          ? (X = s.slides.find((ie) =>
              ie.classList.contains("swiper-slide-active"),
            ))
          : (X = s.slides[s.activeIndex]),
        X ? parseInt(X.getAttribute("data-swiper-autoplay"), 10) : void 0
      );
    },
    J = () => {
      let X = s.params.autoplay.delay;
      const Q = z();
      return (!Number.isNaN(Q) && Q > 0 && (X = Q), X);
    },
    $ = (X) => {
      if (s.destroyed || !s.autoplay.running) return;
      (cancelAnimationFrame(p), w());
      let Q = X;
      (typeof Q > "u" && ((Q = J()), (x = Q), (h = Q)), (m = Q));
      const ie = s.params.speed,
        de = () => {
          !s ||
            s.destroyed ||
            (s.params.autoplay.reverseDirection
              ? !s.isBeginning || s.params.loop || s.params.rewind
                ? (s.slidePrev(ie, !0, !0), n("autoplay"))
                : s.params.autoplay.stopOnLastSlide ||
                  (s.slideTo(s.slides.length - 1, ie, !0, !0), n("autoplay"))
              : !s.isEnd || s.params.loop || s.params.rewind
                ? (s.slideNext(ie, !0, !0), n("autoplay"))
                : s.params.autoplay.stopOnLastSlide ||
                  (s.slideTo(0, ie, !0, !0), n("autoplay")),
            s.params.cssMode &&
              ((j = new Date().getTime()),
              requestAnimationFrame(() => {
                $();
              })));
        };
      return (
        Q > 0
          ? (clearTimeout(d),
            (d = setTimeout(() => {
              de();
            }, Q)))
          : requestAnimationFrame(() => {
              de();
            }),
        Q
      );
    },
    ee = () => {
      ((j = new Date().getTime()),
        (s.autoplay.running = !0),
        $(),
        n("autoplayStart"));
    },
    K = () => {
      ((s.autoplay.running = !1),
        clearTimeout(d),
        cancelAnimationFrame(p),
        n("autoplayStop"));
    },
    T = (X, Q) => {
      if (s.destroyed || !s.autoplay.running) return;
      (clearTimeout(d), X || (M = !0));
      const ie = () => {
        (n("autoplayPause"),
          s.params.autoplay.waitForTransition
            ? s.wrapperEl.addEventListener("transitionend", S)
            : G());
      };
      if (((s.autoplay.paused = !0), Q)) {
        ie();
        return;
      }
      ((m = (m || s.params.autoplay.delay) - (new Date().getTime() - j)),
        !(s.isEnd && m < 0 && !s.params.loop) && (m < 0 && (m = 0), ie()));
    },
    G = () => {
      (s.isEnd && m < 0 && !s.params.loop) ||
        s.destroyed ||
        !s.autoplay.running ||
        ((j = new Date().getTime()),
        M ? ((M = !1), $(m)) : $(),
        (s.autoplay.paused = !1),
        n("autoplayResume"));
    },
    L = () => {
      if (s.destroyed || !s.autoplay.running) return;
      const X = ca();
      (X.visibilityState === "hidden" && ((M = !0), T(!0)),
        X.visibilityState === "visible" && G());
    },
    _ = (X) => {
      X.pointerType === "mouse" &&
        ((M = !0), (A = !0), !(s.animating || s.autoplay.paused) && T(!0));
    },
    B = (X) => {
      X.pointerType === "mouse" && ((A = !1), s.autoplay.paused && G());
    },
    ae = () => {
      s.params.autoplay.pauseOnMouseEnter &&
        (s.el.addEventListener("pointerenter", _),
        s.el.addEventListener("pointerleave", B));
    },
    te = () => {
      s.el &&
        typeof s.el != "string" &&
        (s.el.removeEventListener("pointerenter", _),
        s.el.removeEventListener("pointerleave", B));
    },
    ce = () => {
      ca().addEventListener("visibilitychange", L);
    },
    U = () => {
      ca().removeEventListener("visibilitychange", L);
    };
  (r("init", () => {
    s.params.autoplay.enabled && (ae(), ce(), ee());
  }),
    r("destroy", () => {
      (te(), U(), s.autoplay.running && K());
    }),
    r("_freeModeStaticRelease", () => {
      (b || M) && G();
    }),
    r("_freeModeNoMomentumRelease", () => {
      s.params.autoplay.disableOnInteraction ? K() : T(!0, !0);
    }),
    r("beforeTransitionStart", (X, Q, ie) => {
      s.destroyed ||
        !s.autoplay.running ||
        (ie || !s.params.autoplay.disableOnInteraction ? T(!0, !0) : K());
    }),
    r("sliderFirstMove", () => {
      if (!(s.destroyed || !s.autoplay.running)) {
        if (s.params.autoplay.disableOnInteraction) {
          K();
          return;
        }
        ((N = !0),
          (b = !1),
          (M = !1),
          (E = setTimeout(() => {
            ((M = !0), (b = !0), T(!0));
          }, 200)));
      }
    }),
    r("touchEnd", () => {
      if (!(s.destroyed || !s.autoplay.running || !N)) {
        if (
          (clearTimeout(E),
          clearTimeout(d),
          s.params.autoplay.disableOnInteraction)
        ) {
          ((b = !1), (N = !1));
          return;
        }
        (b && s.params.cssMode && G(), (b = !1), (N = !1));
      }
    }),
    r("slideChange", () => {
      s.destroyed ||
        !s.autoplay.running ||
        (s.autoplay.paused && ((m = J()), (x = J())));
    }),
    Object.assign(s.autoplay, { start: ee, stop: K, pause: T, resume: G }));
}
function km({ swiper: s, extendParams: c, on: r }) {
  c({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: !0,
      autoScrollOffset: 0,
      slideThumbActiveClass: "swiper-slide-thumb-active",
      thumbsContainerClass: "swiper-thumbs",
    },
  });
  let n = !1,
    f = !1;
  s.thumbs = { swiper: null };
  function d() {
    const j = s.thumbs.swiper;
    return !j || j.destroyed
      ? !1
      : j.params.virtual && j.params.virtual.enabled;
  }
  function p() {
    const j = s.thumbs.swiper;
    if (!j || j.destroyed) return;
    const g = j.clickedIndex,
      N = j.clickedSlide;
    if (
      (N && N.classList.contains(s.params.thumbs.slideThumbActiveClass)) ||
      typeof g > "u" ||
      g === null
    )
      return;
    let b;
    (j.params.loop
      ? (b = parseInt(
          j.clickedSlide.getAttribute("data-swiper-slide-index"),
          10,
        ))
      : (b = g),
      s.params.loop ? s.slideToLoop(b) : s.slideTo(b));
  }
  function x() {
    const { thumbs: j } = s.params;
    if (n) return !1;
    n = !0;
    const g = s.constructor;
    if (j.swiper instanceof g) {
      if (j.swiper.destroyed) return ((n = !1), !1);
      ((s.thumbs.swiper = j.swiper),
        Object.assign(s.thumbs.swiper.originalParams, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1,
        }),
        Object.assign(s.thumbs.swiper.params, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1,
        }),
        s.thumbs.swiper.update());
    } else if (Mi(j.swiper)) {
      const N = Object.assign({}, j.swiper);
      (Object.assign(N, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
        (s.thumbs.swiper = new g(N)),
        (f = !0));
    }
    return (
      s.thumbs.swiper.el.classList.add(s.params.thumbs.thumbsContainerClass),
      s.thumbs.swiper.on("tap", p),
      d() &&
        s.thumbs.swiper.on("virtualUpdate", () => {
          h(!1, { autoScroll: !1 });
        }),
      !0
    );
  }
  function h(j, g) {
    const N = s.thumbs.swiper;
    if (!N || N.destroyed) return;
    let b = 1;
    const E = s.params.thumbs.slideThumbActiveClass;
    if (
      (s.params.slidesPerView > 1 &&
        !s.params.centeredSlides &&
        (b = s.params.slidesPerView),
      s.params.thumbs.multipleActiveThumbs || (b = 1),
      (b = Math.floor(b)),
      N.slides.forEach((M) => M.classList.remove(E)),
      N.params.loop || d())
    )
      for (let M = 0; M < b; M += 1)
        na(
          N.slidesEl,
          `[data-swiper-slide-index="${s.realIndex + M}"]`,
        ).forEach((A) => {
          A.classList.add(E);
        });
    else
      for (let M = 0; M < b; M += 1)
        N.slides[s.realIndex + M] && N.slides[s.realIndex + M].classList.add(E);
    (g?.autoScroll ?? !0) && m(j ? 0 : void 0);
  }
  function m(j) {
    const g = s.thumbs.swiper;
    if (!g || g.destroyed) return;
    const N =
        g.params.slidesPerView === "auto"
          ? g.slidesPerViewDynamic()
          : g.params.slidesPerView,
      b = s.params.thumbs.autoScrollOffset,
      E = b && !g.params.loop;
    if (s.realIndex !== g.realIndex || E) {
      const M = g.activeIndex;
      let A, S;
      if (g.params.loop) {
        const w = g.slides.find(
          (z) => z.getAttribute("data-swiper-slide-index") === `${s.realIndex}`,
        );
        ((A = g.slides.indexOf(w)),
          (S = s.activeIndex > s.previousIndex ? "next" : "prev"));
      } else ((A = s.realIndex), (S = A > s.previousIndex ? "next" : "prev"));
      (E && (A += S === "next" ? b : -1 * b),
        g.visibleSlidesIndexes &&
          g.visibleSlidesIndexes.indexOf(A) < 0 &&
          (g.params.centeredSlides
            ? A > M
              ? (A = A - Math.floor(N / 2) + 1)
              : (A = A + Math.floor(N / 2) - 1)
            : A > M && g.params.slidesPerGroup,
          g.slideTo(A, j)));
    }
  }
  (r("beforeInit", () => {
    const { thumbs: j } = s.params;
    if (!(!j || !j.swiper))
      if (typeof j.swiper == "string" || j.swiper instanceof HTMLElement) {
        const g = ca(),
          N = () => {
            const E =
              typeof j.swiper == "string"
                ? g.querySelector(j.swiper)
                : j.swiper;
            if (E && E.swiper) ((j.swiper = E.swiper), x(), h(!0));
            else if (E) {
              const M = `${s.params.eventsPrefix}init`,
                A = (S) => {
                  ((j.swiper = S.detail[0]),
                    E.removeEventListener(M, A),
                    x(),
                    h(!0),
                    j.swiper.update(),
                    s.update());
                };
              E.addEventListener(M, A);
            }
            return E;
          },
          b = () => {
            if (s.destroyed) return;
            N() || requestAnimationFrame(b);
          };
        requestAnimationFrame(b);
      } else (x(), h(!0));
  }),
    r("slideChange update resize observerUpdate", () => {
      h();
    }),
    r("setTransition", (j, g) => {
      const N = s.thumbs.swiper;
      !N || N.destroyed || N.setTransition(g);
    }),
    r("beforeDestroy", () => {
      const j = s.thumbs.swiper;
      !j || j.destroyed || (f && j.destroy());
    }),
    Object.assign(s.thumbs, { init: x, update: h }));
}
function q0({ swiper: s, extendParams: c, emit: r, once: n }) {
  c({
    freeMode: {
      enabled: !1,
      momentum: !0,
      momentumRatio: 1,
      momentumBounce: !0,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: !1,
      minimumVelocity: 0.02,
    },
  });
  function f() {
    if (s.params.cssMode) return;
    const x = s.getTranslate();
    (s.setTranslate(x),
      s.setTransition(0),
      (s.touchEventsData.velocities.length = 0),
      s.freeMode.onTouchEnd({
        currentPos: s.rtl ? s.translate : -s.translate,
      }));
  }
  function d() {
    if (s.params.cssMode) return;
    const { touchEventsData: x, touches: h } = s;
    (x.velocities.length === 0 &&
      x.velocities.push({
        position: h[s.isHorizontal() ? "startX" : "startY"],
        time: x.touchStartTime,
      }),
      x.velocities.push({
        position: h[s.isHorizontal() ? "currentX" : "currentY"],
        time: Rl(),
      }));
  }
  function p({ currentPos: x }) {
    if (s.params.cssMode) return;
    const {
        params: h,
        wrapperEl: m,
        rtlTranslate: j,
        snapGrid: g,
        touchEventsData: N,
      } = s,
      E = Rl() - N.touchStartTime;
    if (x < -s.minTranslate()) {
      s.slideTo(s.activeIndex);
      return;
    }
    if (x > -s.maxTranslate()) {
      s.slides.length < g.length
        ? s.slideTo(g.length - 1)
        : s.slideTo(s.slides.length - 1);
      return;
    }
    if (h.freeMode.momentum) {
      if (N.velocities.length > 1) {
        const ee = N.velocities.pop(),
          K = N.velocities.pop(),
          T = ee.position - K.position,
          G = ee.time - K.time;
        ((s.velocity = T / G),
          (s.velocity /= 2),
          Math.abs(s.velocity) < h.freeMode.minimumVelocity && (s.velocity = 0),
          (G > 150 || Rl() - ee.time > 300) && (s.velocity = 0));
      } else s.velocity = 0;
      ((s.velocity *= h.freeMode.momentumVelocityRatio),
        (N.velocities.length = 0));
      let M = 1e3 * h.freeMode.momentumRatio;
      const A = s.velocity * M;
      let S = s.translate + A;
      j && (S = -S);
      let w = !1,
        z;
      const J = Math.abs(s.velocity) * 20 * h.freeMode.momentumBounceRatio;
      let $;
      if (S < s.maxTranslate())
        (h.freeMode.momentumBounce
          ? (S + s.maxTranslate() < -J && (S = s.maxTranslate() - J),
            (z = s.maxTranslate()),
            (w = !0),
            (N.allowMomentumBounce = !0))
          : (S = s.maxTranslate()),
          h.loop && h.centeredSlides && ($ = !0));
      else if (S > s.minTranslate())
        (h.freeMode.momentumBounce
          ? (S - s.minTranslate() > J && (S = s.minTranslate() + J),
            (z = s.minTranslate()),
            (w = !0),
            (N.allowMomentumBounce = !0))
          : (S = s.minTranslate()),
          h.loop && h.centeredSlides && ($ = !0));
      else if (h.freeMode.sticky) {
        let ee;
        for (let K = 0; K < g.length; K += 1)
          if (g[K] > -S) {
            ee = K;
            break;
          }
        (Math.abs(g[ee] - S) < Math.abs(g[ee - 1] - S) ||
        s.swipeDirection === "next"
          ? (S = g[ee])
          : (S = g[ee - 1]),
          (S = -S));
      }
      if (
        ($ &&
          n("transitionEnd", () => {
            s.loopFix();
          }),
        s.velocity !== 0)
      ) {
        if (
          (j
            ? (M = Math.abs((-S - s.translate) / s.velocity))
            : (M = Math.abs((S - s.translate) / s.velocity)),
          h.freeMode.sticky)
        ) {
          const ee = Math.abs((j ? -S : S) - s.translate),
            K = s.slidesSizesGrid[s.activeIndex];
          ee < K
            ? (M = h.speed)
            : ee < 2 * K
              ? (M = h.speed * 1.5)
              : (M = h.speed * 2.5);
        }
      } else if (h.freeMode.sticky) {
        s.slideToClosest();
        return;
      }
      (h.freeMode.momentumBounce && w
        ? (s.updateProgress(z),
          s.setTransition(M),
          s.setTranslate(S),
          s.transitionStart(!0, s.swipeDirection),
          (s.animating = !0),
          ko(m, () => {
            !s ||
              s.destroyed ||
              !N.allowMomentumBounce ||
              (r("momentumBounce"),
              s.setTransition(h.speed),
              setTimeout(() => {
                (s.setTranslate(z),
                  ko(m, () => {
                    !s || s.destroyed || s.transitionEnd();
                  }));
              }, 0));
          }))
        : s.velocity
          ? (r("_freeModeNoMomentumRelease"),
            s.updateProgress(S),
            s.setTransition(M),
            s.setTranslate(S),
            s.transitionStart(!0, s.swipeDirection),
            s.animating ||
              ((s.animating = !0),
              ko(m, () => {
                !s || s.destroyed || s.transitionEnd();
              })))
          : s.updateProgress(S),
        s.updateActiveIndex(),
        s.updateSlidesClasses());
    } else if (h.freeMode.sticky) {
      s.slideToClosest();
      return;
    } else h.freeMode && r("_freeModeNoMomentumRelease");
    (!h.freeMode.momentum || E >= h.longSwipesMs) &&
      (r("_freeModeStaticRelease"),
      s.updateProgress(),
      s.updateActiveIndex(),
      s.updateSlidesClasses());
  }
  Object.assign(s, {
    freeMode: { onTouchStart: f, onTouchMove: d, onTouchEnd: p },
  });
}
function V0(s) {
  const {
    effect: c,
    swiper: r,
    on: n,
    setTranslate: f,
    setTransition: d,
    overwriteParams: p,
    perspective: x,
    recreateShadows: h,
    getEffectParams: m,
  } = s;
  (n("beforeInit", () => {
    if (r.params.effect !== c) return;
    (r.classNames.push(`${r.params.containerModifierClass}${c}`),
      x && x() && r.classNames.push(`${r.params.containerModifierClass}3d`));
    const g = p ? p() : {};
    (Object.assign(r.params, g), Object.assign(r.originalParams, g));
  }),
    n("setTranslate _virtualUpdated", () => {
      r.params.effect === c && f();
    }),
    n("setTransition", (g, N) => {
      r.params.effect === c && d(N);
    }),
    n("transitionEnd", () => {
      if (r.params.effect === c && h) {
        if (!m || !m().slideShadows) return;
        (r.slides.forEach((g) => {
          g.querySelectorAll(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left",
          ).forEach((N) => N.remove());
        }),
          h());
      }
    }));
  let j;
  n("virtualUpdate", () => {
    r.params.effect === c &&
      (r.slides.length || (j = !0),
      requestAnimationFrame(() => {
        j && r.slides && r.slides.length && (f(), (j = !1));
      }));
  });
}
function Y0(s, c) {
  const r = pu(c);
  return (
    r !== c &&
      ((r.style.backfaceVisibility = "hidden"),
      (r.style["-webkit-backface-visibility"] = "hidden")),
    r
  );
}
function Xm(s, c, r) {
  const n = `swiper-slide-shadow${r ? `-${r}` : ""}${` swiper-slide-shadow-${s}`}`,
    f = pu(c);
  let d = f.querySelector(`.${n.split(" ").join(".")}`);
  return (d || ((d = Di("div", n.split(" "))), f.append(d)), d);
}
function $p({ swiper: s, extendParams: c, on: r }) {
  (c({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: !0,
    },
  }),
    V0({
      effect: "coverflow",
      swiper: s,
      on: r,
      setTranslate: () => {
        const { width: d, height: p, slides: x, slidesSizesGrid: h } = s,
          m = s.params.coverflowEffect,
          j = s.isHorizontal(),
          g = s.translate,
          N = j ? -g + d / 2 : -g + p / 2,
          b = j ? m.rotate : -m.rotate,
          E = m.depth,
          M = yy(s);
        for (let A = 0, S = x.length; A < S; A += 1) {
          const w = x[A],
            z = h[A],
            J = w.swiperSlideOffset,
            $ = (N - J - z / 2) / z,
            ee =
              typeof m.modifier == "function" ? m.modifier($) : $ * m.modifier;
          let K = j ? b * ee : 0,
            T = j ? 0 : b * ee,
            G = -E * Math.abs(ee),
            L = m.stretch;
          typeof L == "string" &&
            L.indexOf("%") !== -1 &&
            (L = (parseFloat(m.stretch) / 100) * z);
          let _ = j ? 0 : L * ee,
            B = j ? L * ee : 0,
            ae = 1 - (1 - m.scale) * Math.abs(ee);
          (Math.abs(B) < 0.001 && (B = 0),
            Math.abs(_) < 0.001 && (_ = 0),
            Math.abs(G) < 0.001 && (G = 0),
            Math.abs(K) < 0.001 && (K = 0),
            Math.abs(T) < 0.001 && (T = 0),
            Math.abs(ae) < 0.001 && (ae = 0));
          const te = `translate3d(${B}px,${_}px,${G}px)  rotateX(${M(T)}deg) rotateY(${M(K)}deg) scale(${ae})`,
            ce = Y0(m, w);
          if (
            ((ce.style.transform = te),
            (w.style.zIndex = -Math.abs(Math.round(ee)) + 1),
            m.slideShadows)
          ) {
            let U = j
                ? w.querySelector(".swiper-slide-shadow-left")
                : w.querySelector(".swiper-slide-shadow-top"),
              X = j
                ? w.querySelector(".swiper-slide-shadow-right")
                : w.querySelector(".swiper-slide-shadow-bottom");
            (U || (U = Xm("coverflow", w, j ? "left" : "top")),
              X || (X = Xm("coverflow", w, j ? "right" : "bottom")),
              U && (U.style.opacity = ee > 0 ? ee : 0),
              X && (X.style.opacity = -ee > 0 ? -ee : 0));
          }
        }
      },
      setTransition: (d) => {
        s.slides
          .map((x) => pu(x))
          .forEach((x) => {
            ((x.style.transitionDuration = `${d}ms`),
              x
                .querySelectorAll(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left",
                )
                .forEach((h) => {
                  h.style.transitionDuration = `${d}ms`;
                }));
          });
      },
      perspective: () => !0,
      overwriteParams: () => ({ watchSlidesProgress: !0 }),
    }));
}
const Qm = "/assets/video-thumb-1-CBv7F3iA.jpg",
  Zm = "/assets/video-thumb-2-Z_2Dovu3.jpg",
  Jm = "/assets/video-thumb-3-DsGXuxZY.jpg";
function k0() {
  const [s, c] = H.useState(!1);
  return (
    H.useEffect(
      () => (
        (document.body.style.overflow = s ? "hidden" : ""),
        () => {
          document.body.style.overflow = "";
        }
      ),
      [s],
    ),
    a.jsx("section", {
      className: "watch-live-section padding-bottom",
      children: a.jsxs("div", {
        className: "container",
        children: [
          a.jsxs("div", {
            className: "section-heading mb-40 text-center",
            "data-aos-duration": "1000",
            "data-aos-delay": "1000ms",
            children: [
              a.jsx("h3", { children: "Watch The Gameplay" }),
              a.jsxs("h2", {
                children: [
                  "Watch Live ",
                  a.jsx("span", { children: "Streaming" }),
                ],
              }),
              a.jsxs("p", {
                children: [
                  "Our success in creating business solutions is due in large part",
                  " ",
                  a.jsx("br", {}),
                  "to our talented and highly committed team.",
                ],
              }),
            ],
          }),
          a.jsxs("div", {
            className: "carousel-wrap",
            children: [
              a.jsx(Ua, {
                modules: [Ui, $p, Es],
                loop: !0,
                centeredSlides: !0,
                autoplay: { delay: 2e3, disableOnInteraction: !1 },
                effect: "coverflow",
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 5,
                  slideShadows: !1,
                },
                navigation: {
                  nextEl: ".swiper-nav.swiper-next",
                  prevEl: ".swiper-nav.swiper-prev",
                },
                spaceBetween: 30,
                slidesPerView: 2,
                breakpoints: {
                  0: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  992: { slidesPerView: 2 },
                },
                className: "watch-carousel",
                children: a.jsx("div", {
                  className: "watch-carousel-clip",
                  children: [
                    { img: Qm, key: "1a" },
                    { img: Zm, key: "2a" },
                    { img: Jm, key: "3a" },
                    { img: Qm, key: "1b" },
                    { img: Zm, key: "2b" },
                    { img: Jm, key: "3b" },
                  ].map((r) =>
                    a.jsxs(
                      dt,
                      {
                        children: [
                          a.jsx("img", { src: r.img, alt: "thumb" }),
                          a.jsxs("button", {
                            type: "button",
                            className: "dl-video-popup play-btn",
                            "aria-label": "Play video",
                            onClick: () => {
                              (c(!0), new Audio(ra).play());
                            },
                            children: [
                              a.jsx("svg", {
                                enableBackground: "new 0 0 41.999 41.999",
                                viewBox: "0 0 41.999 41.999",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: a.jsx("path", {
                                  d: "M36.068,20.176l-29-20C6.761-0.035,6.363-0.057,6.035,0.114C5.706,0.287,5.5,0.627,5.5,0.999v40c0,0.372,0.206,0.713,0.535,0.886c0.146,0.076,0.306,0.114,0.465,0.114c0.199,0,0.397-0.06,0.568-0.177l29-20c0.271-0.187,0.432-0.494,0.432-0.823S36.338,20.363,36.068,20.176z M7.5,39.095V2.904l26.239,18.096L7.5,39.095z",
                                }),
                              }),
                              a.jsx("div", { className: "ripple" }),
                            ],
                          }),
                        ],
                      },
                      r.key,
                    ),
                  ),
                }),
              }),
              a.jsx("div", {
                onClick: () => {
                  new Audio(ra).play();
                },
                className: "swiper-nav swiper-next",
                style: { zIndex: 10, cursor: "pointer" },
                children: a.jsx("i", {
                  className: "las la-long-arrow-alt-right",
                }),
              }),
              a.jsx("div", {
                onClick: () => {
                  new Audio(ra).play();
                },
                className: "swiper-nav swiper-prev",
                style: { zIndex: 10, cursor: "pointer" },
                children: a.jsx("i", {
                  className: "las la-long-arrow-alt-left",
                }),
              }),
            ],
          }),
          s &&
            a.jsx("div", {
              className: "video-overlay",
              role: "dialog",
              "aria-modal": "true",
              onClick: () => c(!1),
              children: a.jsxs("div", {
                className: "video-container",
                onClick: (r) => r.stopPropagation(),
                children: [
                  a.jsx("iframe", {
                    src: "https://www.youtube.com/embed/tv7LfFeamsc?autoplay=1",
                    title: "YouTube video player",
                    allow: "autoplay; encrypted-media",
                    allowFullScreen: !0,
                  }),
                  a.jsx("button", {
                    className: "video-close",
                    "aria-label": "Close video",
                    onClick: () => c(!1),
                    children: "✕",
                  }),
                ],
              }),
            }),
        ],
      }),
    })
  );
}
const X0 = "/assets/team-1-DVUtxM2B.png",
  Q0 = "/assets/team-2-DMsmpUXe.png",
  Z0 = "/assets/team-3-BF3sokd_.png",
  J0 = "/assets/team-4-mqUblu-U.png",
  F0 = "/assets/team-5-D_fEU2_Y.png",
  $0 = [
    { name: "Brandon Larned", game: "Overwatch", img: X0 },
    { name: "Félix Lengyel", game: "Valorant", img: Q0 },
    { name: "Sasha Hostyn", game: "StarCraft II", img: Z0 },
    { name: "Zaqueri Black", game: "Call of Duty", img: J0 },
    { name: "Fredrik Johanson", game: "Counter Strike", img: F0 },
  ];
function Gi({ noHeading: s }) {
  return a.jsx("section", {
    className: `team-section padding-bottom ${s && "padding-top"}`,
    children: a.jsxs("div", {
      className: "container",
      children: [
        s
          ? ""
          : a.jsxs("div", {
              className: "section-heading text-center mb-40",
              "data-aos": "fade-up",
              "data-aos-delay": "400ms",
              children: [
                a.jsx("h3", { children: "Our Gamers" }),
                a.jsxs("h2", {
                  children: [
                    "Meet Our ",
                    a.jsx("span", { children: "Gamers" }),
                  ],
                }),
                a.jsxs("p", {
                  children: [
                    "Our success in creating business solutions is due in large part",
                    " ",
                    a.jsx("br", {}),
                    "to our talented and highly committed team.",
                  ],
                }),
              ],
            }),
        a.jsx("div", {
          className: "outside-spacing",
          children: a.jsxs("div", {
            className: "team-carousel",
            children: [
              a.jsx(Ua, {
                loop: !0,
                autoplay: { delay: 3e3 },
                modules: [Ui, Es],
                navigation: {
                  nextEl: ".swiper-nav.swiper-next",
                  prevEl: ".swiper-nav.swiper-prev",
                },
                spaceBetween: 30,
                slidesPerView: 1,
                breakpoints: {
                  768: { slidesPerView: 2 },
                  992: { slidesPerView: 4 },
                },
                children: $0.map((c) =>
                  a.jsx(dt, {
                    children: a.jsxs("div", {
                      className: "team-item",
                      children: [
                        a.jsxs("div", {
                          className: "team-thumb",
                          children: [
                            a.jsx("img", { src: c.img, alt: "thumb" }),
                            a.jsxs("div", {
                              className: "shape-wrap",
                              children: [
                                a.jsx("div", { className: "shape shape-1" }),
                                a.jsx("div", { className: "shape shape-2" }),
                                a.jsx("div", { className: "shape shape-3" }),
                                a.jsx("div", { className: "shape shape-4" }),
                              ],
                            }),
                          ],
                        }),
                        a.jsxs("div", {
                          className: "team-content",
                          children: [
                            a.jsx("span", { className: "whte-shape" }),
                            a.jsx("h3", {
                              children: a.jsx(ne, {
                                to: "/player-details",
                                children: c.name,
                              }),
                            }),
                            a.jsx("h4", { children: c.game }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ),
              }),
              a.jsx("div", {
                onClick: () => {
                  new Audio(ra).play();
                },
                className: "swiper-nav swiper-next",
                children: a.jsx("i", {
                  className: "las la-long-arrow-alt-right",
                }),
              }),
              a.jsx("div", {
                onClick: () => {
                  new Audio(ra).play();
                },
                className: "swiper-nav swiper-prev",
                children: a.jsx("i", {
                  className: "las la-long-arrow-alt-left",
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function vr() {
  return a.jsx("section", {
    className: "contact-section padding-bottom",
    children: a.jsx("div", {
      className: "container",
      children: a.jsxs("div", {
        className: "row align-items-center",
        children: [
          a.jsx("div", {
            className: "col-md-6 sm-padding",
            children: a.jsxs("div", {
              className: "section-heading",
              children: [
                a.jsx("h3", { children: "Send Us a Mail" }),
                a.jsxs("h2", {
                  children: [
                    "Join Us As a Super Fans and Get all ",
                    a.jsx("span", { children: "the Benefits" }),
                  ],
                }),
                a.jsxs("p", {
                  children: [
                    "Our success in creating business solutions is due in large part",
                    " ",
                    a.jsx("br", {}),
                    "to our talented and highly committed team.",
                  ],
                }),
                a.jsx(ne, {
                  to: "/contact",
                  children: a.jsx(_t, { text: "Join Our Team" }),
                }),
              ],
            }),
          }),
          a.jsx("div", {
            className: "col-md-6 sm-padding",
            children: a.jsx("div", {
              className: "contact-form ml-40",
              children: a.jsxs("form", {
                action: "",
                method: "post",
                id: "ajax_contact",
                className: "form-horizontal",
                children: [
                  a.jsxs("div", {
                    className: "contact-form-group",
                    children: [
                      a.jsx("div", {
                        className: "form-field",
                        children: a.jsx("input", {
                          type: "text",
                          id: "contact_name",
                          name: "contact_name",
                          className: "form-control",
                          placeholder: "Your Name",
                          required: !0,
                        }),
                      }),
                      a.jsx("div", {
                        className: "form-field",
                        children: a.jsx("input", {
                          type: "email",
                          id: "contact_email",
                          name: "contact_email",
                          className: "form-control",
                          placeholder: "Email",
                          required: !0,
                        }),
                      }),
                      a.jsx("div", {
                        className: "form-field message",
                        children: a.jsx("textarea", {
                          id: "message",
                          name: "message",
                          cols: 30,
                          rows: 4,
                          className: "form-control",
                          placeholder: "Message",
                          required: !0,
                        }),
                      }),
                      a.jsx("div", {
                        className: "form-field",
                        children: a.jsxs("button", {
                          id: "submit",
                          className: "default-btn",
                          type: "submit",
                          children: ["Send Massage", a.jsx("span", {})],
                        }),
                      }),
                    ],
                  }),
                  a.jsx("div", {
                    id: "form-messages",
                    className: "alert",
                    role: "alert",
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
    }),
  });
}
const lu = "/assets/client-1-DGG__YyQ.png",
  su = "/assets/client-2-6DpYwn-E.png",
  iu = "/assets/client-3-Cn_p3T14.png",
  Kp = "/assets/client-4-5m02oJ9-.png",
  Pp = "/assets/client-5-JzkjG7lG.png",
  nu = "/assets/client-6-DjHB7l4s.png";
function Cs({ noPadding: s }) {
  return a.jsx("div", {
    className: `sponsor-section ${s ? "" : "padding-bottom"}`,
    children: a.jsx("div", {
      className: "container",
      children: a.jsx("div", {
        className: "outside-spacing",
        children: a.jsx("div", {
          className: "sponsor-carousel",
          children: a.jsxs(Ua, {
            loop: !0,
            modules: [Es],
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            spaceBetween: 30,
            slidesPerView: 2,
            breakpoints: {
              576: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              992: { slidesPerView: 5 },
            },
            children: [
              a.jsx(dt, { children: a.jsx("img", { src: lu, alt: "client" }) }),
              a.jsx(dt, { children: a.jsx("img", { src: su, alt: "client" }) }),
              a.jsx(dt, { children: a.jsx("img", { src: iu, alt: "client" }) }),
              a.jsx(dt, { children: a.jsx("img", { src: Kp, alt: "client" }) }),
              a.jsx(dt, { children: a.jsx("img", { src: Pp, alt: "client" }) }),
              a.jsx(dt, { children: a.jsx("img", { src: nu, alt: "client" }) }),
            ],
          }),
        }),
      }),
    }),
  });
}
const gr = "/assets/product-1-CyAF-6QA.png",
  xr = "/assets/product-2-CulzGjYp.png",
  jr = "/assets/product-3-DL-1E3hA.png",
  gu = "/assets/product-4-BNbCmF7_.png",
  Wp = "/assets/product-5-BmsghbXM.png";
function K0() {
  return a.jsx("section", {
    className: "shop-section padding-bottom",
    children: a.jsxs("div", {
      className: "container",
      children: [
        a.jsxs("div", {
          className: "section-heading mb-40 text-center",
          "data-aos": "fade-up",
          "data-aos-delay": "400ms",
          children: [
            a.jsx("h3", { children: "Online Gaming Shop" }),
            a.jsxs("h2", {
              children: ["Explore Our ", a.jsx("span", { children: "Gears" })],
            }),
            a.jsxs("p", {
              children: [
                "Our success in creating business solutions is due in large part",
                " ",
                a.jsx("br", {}),
                "to our talented and highly committed team.",
              ],
            }),
          ],
        }),
        a.jsx("div", {
          className: "outside-spacing",
          children: a.jsxs("div", {
            className: "shop-carousel",
            children: [
              a.jsxs(Ua, {
                loop: !0,
                modules: [Ui, Es],
                autoplay: { delay: 2500, disableOnInteraction: !1 },
                navigation: {
                  nextEl: ".swiper-nav.swiper-next",
                  prevEl: ".swiper-nav.swiper-prev",
                },
                spaceBetween: 30,
                slidesPerView: 1,
                breakpoints: {
                  576: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  992: { slidesPerView: 4 },
                },
                children: [
                  a.jsx(dt, {
                    children: a.jsxs("div", {
                      className: "product-card",
                      children: [
                        a.jsxs("div", {
                          className: "product-thumb",
                          children: [
                            a.jsx("img", { src: gr, alt: "img" }),
                            a.jsx("a", {
                              href: "#",
                              className: "badge in-stock",
                              children: "In Stock",
                            }),
                            a.jsx(ne, {
                              to: "/cart",
                              children: a.jsx(_t, { text: "Add To Cart" }),
                            }),
                          ],
                        }),
                        a.jsxs("div", {
                          className: "product-info",
                          children: [
                            a.jsxs("div", {
                              className: "product-inner",
                              children: [
                                a.jsx("ul", {
                                  className: "category",
                                  children: a.jsx("li", {
                                    children: a.jsx("a", {
                                      href: "#",
                                      children: "Steering",
                                    }),
                                  }),
                                }),
                                a.jsxs("ul", {
                                  className: "rating",
                                  children: [
                                    a.jsx("li", {
                                      children: a.jsx("i", {
                                        className: "las la-star",
                                      }),
                                    }),
                                    a.jsx("li", {
                                      children: a.jsx("i", {
                                        className: "las la-star",
                                      }),
                                    }),
                                    a.jsx("li", {
                                      children: a.jsx("i", {
                                        className: "las la-star",
                                      }),
                                    }),
                                    a.jsx("li", {
                                      children: a.jsx("i", {
                                        className: "las la-star",
                                      }),
                                    }),
                                    a.jsx("li", {
                                      children: a.jsx("i", {
                                        className: "las la-star",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            a.jsx("h3", {
                              children: a.jsx(ne, {
                                to: "/shop-details",
                                children: "Steering Wheel",
                              }),
                            }),
                            a.jsx("h4", {
                              className: "price",
                              children: "$69.00",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  a.jsx(dt, {
                    children: a.jsxs("div", {
                      className: "product-card",
                      children: [
                        a.jsxs("div", {
                          className: "product-thumb",
                          children: [
                            a.jsx("img", { src: xr, alt: "img" }),
                            a.jsx("a", {
                              href: "#",
                              className: "badge hot",
                              children: "Hot",
                            }),
                            a.jsx(ne, {
                              to: "/cart",
                              children: a.jsx(_t, { text: "Add To Cart" }),
                            }),
                          ],
                        }),
                        a.jsxs("div", {
                          className: "product-info",
                          children: [
                            a.jsxs("div", {
                              className: "product-inner",
                              children: [
                                a.jsx("ul", {
                                  className: "category",
                                  children: a.jsx("li", {
                                    children: a.jsx("a", {
                                      href: "#",
                                      children: "Mouse",
                                    }),
                                  }),
                                }),
                                a.jsxs("ul", {
                                  className: "rating",
                                  children: [
                                    a.jsx("li", {
                                      children: a.jsx("i", {
                                        className: "las la-star",
                                      }),
                                    }),
                                    a.jsx("li", {
                                      children: a.jsx("i", {
                                        className: "las la-star",
                                      }),
                                    }),
                                    a.jsx("li", {
                                      children: a.jsx("i", {
                                        className: "las la-star",
                                      }),
                                    }),
                                    a.jsx("li", {
                                      children: a.jsx("i", {
                                        className: "las la-star",
                                      }),
                                    }),
                                    a.jsx("li", {
                                      children: a.jsx("i", {
                                        className: "las la-star",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            a.jsx("h3", {
                              children: a.jsx(ne, {
                                to: "/shop-details",
                                children: "Fantech Mouse",
                              }),
                            }),
                            a.jsx("h4", {
                              className: "price",
                              children: "$49.00",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  a.jsx(dt, {
                    children: a.jsxs("div", {
                      className: "product-card",
                      children: [
                        a.jsxs("div", {
                          className: "product-thumb",
                          children: [
                            a.jsx("img", { src: jr, alt: "img" }),
                            a.jsx("a", {
                              href: "#",
                              className: "badge sale",
                              children: "-70%",
                            }),
                            a.jsx(ne, {
                              to: "/cart",
                              children: a.jsx(_t, { text: "Add To Cart" }),
                            }),
                          ],
                        }),
                        a.jsxs("div", {
                          className: "product-info",
                          children: [
                            a.jsxs("div", {
                              className: "product-inner",
                              children: [
                                a.jsx("ul", {
                                  className: "category",
                                  children: a.jsx("li", {
                                    children: a.jsx("a", {
                                      href: "#",
                                      children: "Console",
                                    }),
                                  }),
                                }),
                                a.jsxs("ul", {
                                  className: "rating",
                                  children: [
                                    a.jsx("li", {
                                      children: a.jsx("i", {
                                        className: "las la-star",
                                      }),
                                    }),
                                    a.jsx("li", {
                                      children: a.jsx("i", {
                                        className: "las la-star",
                                      }),
                                    }),
                                    a.jsx("li", {
                                      children: a.jsx("i", {
                                        className: "las la-star",
                                      }),
                                    }),
                                    a.jsx("li", {
                                      children: a.jsx("i", {
                                        className: "las la-star",
                                      }),
                                    }),
                                    a.jsx("li", {
                                      children: a.jsx("i", {
                                        className: "las la-star",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            a.jsx("h3", {
                              children: a.jsx(ne, {
                                to: "/shop-details",
                                children: "Targus Console",
                              }),
                            }),
                            a.jsx("h4", {
                              className: "price",
                              children: "$39.00",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  a.jsx(dt, {
                    children: a.jsxs("div", {
                      className: "product-card",
                      children: [
                        a.jsxs("div", {
                          className: "product-thumb",
                          children: [
                            a.jsx("img", { src: gu, alt: "img" }),
                            a.jsx("a", {
                              href: "#",
                              className: "badge hot",
                              children: "Hot",
                            }),
                            a.jsx(ne, {
                              to: "/cart",
                              children: a.jsx(_t, { text: "Add To Cart" }),
                            }),
                          ],
                        }),
                        a.jsxs("div", {
                          className: "product-info",
                          children: [
                            a.jsxs("div", {
                              className: "product-inner",
                              children: [
                                a.jsx("ul", {
                                  className: "category",
                                  children: a.jsx("li", {
                                    children: a.jsx("a", {
                                      href: "#",
                                      children: "Controller",
                                    }),
                                  }),
                                }),
                                a.jsxs("ul", {
                                  className: "rating",
                                  children: [
                                    a.jsx("li", {
                                      children: a.jsx("i", {
                                        className: "las la-star",
                                      }),
                                    }),
                                    a.jsx("li", {
                                      children: a.jsx("i", {
                                        className: "las la-star",
                                      }),
                                    }),
                                    a.jsx("li", {
                                      children: a.jsx("i", {
                                        className: "las la-star",
                                      }),
                                    }),
                                    a.jsx("li", {
                                      children: a.jsx("i", {
                                        className: "las la-star",
                                      }),
                                    }),
                                    a.jsx("li", {
                                      children: a.jsx("i", {
                                        className: "las la-star",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            a.jsx("h3", {
                              children: a.jsx(ne, {
                                to: "/shop-details",
                                children: "Xbox Controller",
                              }),
                            }),
                            a.jsx("h4", {
                              className: "price",
                              children: "$19.00",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  a.jsx(dt, {
                    children: a.jsxs("div", {
                      className: "product-card",
                      children: [
                        a.jsxs("div", {
                          className: "product-thumb",
                          children: [
                            a.jsx("img", { src: Wp, alt: "img" }),
                            a.jsx("a", {
                              href: "#",
                              className: "badge out-stock",
                              children: "Out Of Stock",
                            }),
                            a.jsx(ne, {
                              to: "/cart",
                              children: a.jsx(_t, { text: "Add To Cart" }),
                            }),
                          ],
                        }),
                        a.jsxs("div", {
                          className: "product-info",
                          children: [
                            a.jsxs("div", {
                              className: "product-inner",
                              children: [
                                a.jsx("ul", {
                                  className: "category",
                                  children: a.jsx("li", {
                                    children: a.jsx("a", {
                                      href: "#",
                                      children: "Chair",
                                    }),
                                  }),
                                }),
                                a.jsxs("ul", {
                                  className: "rating",
                                  children: [
                                    a.jsx("li", {
                                      children: a.jsx("i", {
                                        className: "las la-star",
                                      }),
                                    }),
                                    a.jsx("li", {
                                      children: a.jsx("i", {
                                        className: "las la-star",
                                      }),
                                    }),
                                    a.jsx("li", {
                                      children: a.jsx("i", {
                                        className: "las la-star",
                                      }),
                                    }),
                                    a.jsx("li", {
                                      children: a.jsx("i", {
                                        className: "las la-star",
                                      }),
                                    }),
                                    a.jsx("li", {
                                      children: a.jsx("i", {
                                        className: "las la-star",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            a.jsx("h3", {
                              children: a.jsx(ne, {
                                to: "/shop-details",
                                children: "Ergonomic Chair",
                              }),
                            }),
                            a.jsx("h4", {
                              className: "price",
                              children: "$39.00",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              a.jsx("div", {
                onClick: () => {
                  new Audio(ra).play();
                },
                className: "swiper-nav swiper-next",
                children: a.jsx("i", {
                  className: "las la-long-arrow-alt-right",
                }),
              }),
              a.jsx("div", {
                onClick: () => {
                  new Audio(ra).play();
                },
                className: "swiper-nav swiper-prev",
                children: a.jsx("i", {
                  className: "las la-long-arrow-alt-left",
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
const Bl = "/assets/post-1-C0RhRKWn.jpg",
  Ms = "/assets/post-2-G9UGY4No.jpg",
  qi = "/assets/post-3-C6pvl55B.jpg";
function Ip() {
  return a.jsx("section", {
    className: "blog-section",
    children: a.jsxs("div", {
      className: "container",
      children: [
        a.jsxs("div", {
          className: "section-heading mb-40 text-center ",
          "data-aos": "fade-up",
          "data-aos-delay": "400ms",
          children: [
            a.jsx("h3", { children: "What's on our mind" }),
            a.jsxs("h2", {
              children: ["News and ", a.jsx("span", { children: "Headlines" })],
            }),
            a.jsxs("p", {
              children: [
                "Our success in creating business solutions is due in large part",
                " ",
                a.jsx("br", {}),
                "to our talented and highly committed team.",
              ],
            }),
          ],
        }),
        a.jsxs("div", {
          className: "row grid-post",
          children: [
            a.jsx("div", {
              className: "col-lg-4 col-md-6 padding-15 ",
              "data-aos": "fade-up",
              "data-aos-delay": "600ms",
              children: a.jsxs("div", {
                className: "post-card",
                children: [
                  a.jsxs("div", {
                    className: "post-thumb",
                    children: [
                      a.jsx("img", { src: Bl, alt: "post" }),
                      a.jsx(ne, {
                        to: "/blog-classic",
                        className: "post-category",
                        children: "Business",
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    className: "post-content-wrap",
                    children: [
                      a.jsxs("ul", {
                        className: "post-meta",
                        children: [
                          a.jsxs("li", {
                            children: [
                              a.jsx("i", { className: "las la-calendar" }),
                              "Jan 01 2022",
                            ],
                          }),
                          a.jsxs("li", {
                            children: [
                              a.jsx("i", { className: "las la-user" }),
                              "Elliot Alderson",
                            ],
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className: "post-content",
                        children: [
                          a.jsx("h3", {
                            children: a.jsx(ne, {
                              to: "/blog-details",
                              children:
                                "How to start initiating an startup in few days.",
                            }),
                          }),
                          a.jsx("p", {
                            children:
                              "Financial experts support or help you to to find out which way you can raise your funds more...",
                          }),
                          a.jsx(ne, {
                            to: "/blog-details",
                            className: "read-more",
                            children: "Read More",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            a.jsx("div", {
              className: "col-lg-4 col-md-6 padding-15",
              "data-aos": "fade-up",
              "data-aos-delay": "700ms",
              children: a.jsxs("div", {
                className: "post-card",
                children: [
                  a.jsxs("div", {
                    className: "post-thumb",
                    children: [
                      a.jsx("img", { src: Ms, alt: "post" }),
                      a.jsx(ne, {
                        to: "/blog-classic",
                        className: "post-category",
                        children: "Startup",
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    className: "post-content-wrap",
                    children: [
                      a.jsxs("ul", {
                        className: "post-meta",
                        children: [
                          a.jsxs("li", {
                            children: [
                              a.jsx("i", { className: "las la-calendar" }),
                              "Jan 01 2022",
                            ],
                          }),
                          a.jsxs("li", {
                            children: [
                              a.jsx("i", { className: "las la-user" }),
                              "Elliot Alderson",
                            ],
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className: "post-content",
                        children: [
                          a.jsx("h3", {
                            children: a.jsx(ne, {
                              to: "/blog-details",
                              children:
                                "Financial experts support help you to find out.",
                            }),
                          }),
                          a.jsx("p", {
                            children:
                              "Financial experts support or help you to to find out which way you can raise your funds more...",
                          }),
                          a.jsx(ne, {
                            to: "/blog-details",
                            className: "read-more",
                            children: "Read More",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            a.jsx("div", {
              className: "col-lg-4 col-md-6 padding-15 ",
              "data-aos": "fade-up",
              "data-aos-delay": "800ms",
              children: a.jsxs("div", {
                className: "post-card",
                children: [
                  a.jsxs("div", {
                    className: "post-thumb",
                    children: [
                      a.jsx("img", { src: qi, alt: "post" }),
                      a.jsx(ne, {
                        to: "/blog-classic",
                        className: "post-category",
                        children: "Finance",
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    className: "post-content-wrap",
                    children: [
                      a.jsxs("ul", {
                        className: "post-meta",
                        children: [
                          a.jsxs("li", {
                            children: [
                              a.jsx("i", { className: "las la-calendar" }),
                              "Jan 01 2022",
                            ],
                          }),
                          a.jsxs("li", {
                            children: [
                              a.jsx("i", { className: "las la-user" }),
                              "Elliot Alderson",
                            ],
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className: "post-content",
                        children: [
                          a.jsx("h3", {
                            children: a.jsx(ne, {
                              to: "/blog-details",
                              children:
                                "Innovative business all over the world.",
                            }),
                          }),
                          a.jsx("p", {
                            children:
                              "Financial experts support or help you to to find out which way you can raise your funds more...",
                          }),
                          a.jsx(ne, {
                            to: "/blog-details",
                            className: "read-more",
                            children: "Read More",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
const ev = "/assets/logo-CdgkQd7j.png";
function ft() {
  return a.jsxs("footer", {
    className: "footer-section",
    children: [
      a.jsx("div", {
        className: "container",
        children: a.jsxs("div", {
          className: "row footer-items",
          children: [
            a.jsx("div", {
              className: "col-lg-3 col-sm-6 sm-padding",
              children: a.jsxs("div", {
                className: "footer-item",
                children: [
                  a.jsx(ne, {
                    className: "brand",
                    to: "/",
                    children: a.jsx("img", { src: ev, alt: "logo" }),
                  }),
                  a.jsx("p", {
                    children:
                      "Our success in creating business solutions is due in large part to our talented and highly committed team.",
                  }),
                  a.jsxs("ul", {
                    className: "social-list",
                    children: [
                      a.jsx("li", {
                        children: a.jsx("a", {
                          href: "#",
                          children: a.jsx("i", {
                            className: "fab fa-facebook-f",
                          }),
                        }),
                      }),
                      a.jsx("li", {
                        children: a.jsx("a", {
                          href: "#",
                          children: a.jsx("i", { className: "fab fa-twitter" }),
                        }),
                      }),
                      a.jsx("li", {
                        children: a.jsx("a", {
                          href: "#",
                          children: a.jsx("i", {
                            className: "fab fa-instagram",
                          }),
                        }),
                      }),
                      a.jsx("li", {
                        children: a.jsx("a", {
                          href: "#",
                          children: a.jsx("i", { className: "fab fa-youtube" }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            a.jsx("div", {
              className: "col-lg-3 col-sm-6 sm-padding",
              children: a.jsxs("div", {
                className: "footer-item footer-list",
                children: [
                  a.jsx("div", {
                    className: "widget-title",
                    children: a.jsx("h3", { children: "Useful Links" }),
                  }),
                  a.jsxs("ul", {
                    className: "footer-links",
                    children: [
                      a.jsx("li", {
                        children: a.jsx(ne, {
                          to: "/upcoming-matches",
                          children: "Tournaments",
                        }),
                      }),
                      a.jsx("li", {
                        children: a.jsx(ne, {
                          to: "/faq-page",
                          children: "Help Center",
                        }),
                      }),
                      a.jsx("li", {
                        children: a.jsx(ne, {
                          to: "/about",
                          children: "Privacy and Policy",
                        }),
                      }),
                      a.jsx("li", {
                        children: a.jsx(ne, {
                          to: "/about",
                          children: "Terms of Use",
                        }),
                      }),
                      a.jsx("li", {
                        children: a.jsx(ne, {
                          to: "/contact",
                          children: "Contact Us",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            a.jsx("div", {
              className: "col-lg-3 col-sm-6 sm-padding",
              children: a.jsxs("div", {
                className: "footer-item",
                children: [
                  a.jsx("div", {
                    className: "widget-title",
                    children: a.jsx("h3", { children: "Contact Us" }),
                  }),
                  a.jsxs("ul", {
                    className: "footer-contact",
                    children: [
                      a.jsxs("li", {
                        children: [
                          a.jsx("span", { children: "Location:" }),
                          "153 Williamson Plaza, Maggieberg, MT 09514",
                        ],
                      }),
                      a.jsxs("li", {
                        children: [
                          a.jsx("span", { children: "Join Us:" }),
                          "Info@YourGmail24.com",
                        ],
                      }),
                      a.jsxs("li", {
                        children: [
                          a.jsx("span", { children: "Phone:" }),
                          "+1 (062) 109-9222",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            a.jsx("div", {
              className: "col-lg-3 col-sm-6 sm-padding",
              children: a.jsxs("div", {
                className: "footer-item subscribe-wrap",
                children: [
                  a.jsx("div", {
                    className: "widget-title",
                    children: a.jsx("h3", { children: "Newsletter Signup" }),
                  }),
                  a.jsxs("form", {
                    action: "#",
                    className: "subscribe-form",
                    children: [
                      a.jsx("input", {
                        className: "form-control",
                        type: "email",
                        name: "email",
                        placeholder: "Your Email",
                        required: !0,
                      }),
                      a.jsx("input", {
                        type: "hidden",
                        name: "action",
                        value: "mailchimpsubscribe",
                      }),
                      a.jsx("button", {
                        className: "submit",
                        children: "Subscribe Now",
                      }),
                      a.jsx("div", { className: "clearfix" }),
                      a.jsxs("div", {
                        id: "subscribe-result",
                        children: [
                          a.jsx("div", { className: "subscription-success" }),
                          a.jsx("div", { className: "subscription-error" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      a.jsx("div", {
        className: "copyright-wrap",
        children: a.jsx("div", {
          className: "container",
          children: a.jsxs("p", {
            children: [
              "© ",
              a.jsx("span", { id: "currentYear" }),
              " ThemeEaster All Rights Reserved.",
            ],
          }),
        }),
      }),
    ],
  });
}
function P0() {
  return a.jsxs("div", {
    className: "body",
    children: [
      a.jsx(oy, {}),
      a.jsx(zp, {}),
      a.jsx(k0, {}),
      a.jsx(Gi, {}),
      a.jsx(vr, {}),
      a.jsx(Cs, {}),
      a.jsx(K0, {}),
      a.jsx(Ip, {}),
      a.jsx(ft, {}),
    ],
  });
}
var W0 = rp();
function I0() {
  const [s, c] = H.useState(!1);
  return (
    H.useEffect(
      () => (
        s
          ? (document.body.style.overflow = "hidden")
          : (document.body.style.overflow = ""),
        () => {
          document.body.style.overflow = "";
        }
      ),
      [s],
    ),
    a.jsxs(a.Fragment, {
      children: [
        a.jsx("div", {
          onClick: () => c(!0),
          className: "search-icon dl-search-icon",
          children: a.jsx("i", { className: "las la-search" }),
        }),
        s &&
          W0.createPortal(
            a.jsx("div", {
              id: "popup-search-box",
              className: "toggled",
              onClick: () => c(!1),
              children: a.jsx("div", {
                className: "box-inner-wrap d-flex align-items-center",
                children: a.jsxs("form", {
                  id: "form",
                  action: "#",
                  method: "get",
                  role: "search",
                  onClick: (r) => r.stopPropagation(),
                  children: [
                    a.jsx("input", {
                      id: "popup-search",
                      type: "text",
                      name: "s",
                      placeholder: "Type keywords here...",
                      autoFocus: !0,
                    }),
                    a.jsx("button", {
                      id: "popup-search-button",
                      type: "submit",
                      name: "submit",
                      children: a.jsx("i", { className: "las la-search" }),
                    }),
                  ],
                }),
              }),
            }),
            document.body,
          ),
      ],
    })
  );
}
const eb = [
  {
    title: "Home",
    path: "/",
    activeRules: ["/", "/esports"],
    submenu: [
      { title: "Home Default", path: "/" },
      { title: "Home eSports", path: "/esports" },
    ],
  },
  {
    title: "asdfasdf",
    path: "/upcoming-matches",
    activeRules: [
      "/upcoming-matches",
      "/stream-schedule",
      "/match-details",
      "/player-details",
      "/team-details",
    ],
    submenu: [
      { title: "Upcoming Matches", path: "/upcoming-matches" },
      { title: "Stream Schedule", path: "/stream-schedule" },
      { title: "Match Details", path: "/match-details" },
      { title: "Player Details", path: "/player-details" },
      { title: "Team Details", path: "/team-details" },
    ],
  },
  {
    title: "Pages",
    path: "/about",
    activeRules: ["/about", "/our-gamers", "/sponsors", "/faq", "/404"],
    submenu: [
      { title: "About Us", path: "/about" },
      { title: "Our Gamers", path: "/our-gamers" },
      { title: "Sponsors", path: "/sponsors" },
      { title: "Help & Faq's", path: "/faq" },
      { title: "404 Error", path: "/404" },
    ],
  },
  {
    title: "Shop",
    path: "/shop",
    activeRules: ["/shop", "/shop-details", "/cart", "/checkout"],
    submenu: [
      { title: "Shop Grid", path: "/shop" },
      { title: "Shop Details", path: "/shop-details" },
      { title: "Add to Cart Page", path: "/cart" },
      { title: "Checkout Page", path: "/checkout" },
    ],
  },
  {
    title: "Blog",
    path: "/blog",
    activeRules: ["/blog", "/blog-classic", "/blog-details"],
    submenu: [
      { title: "Grid Layout", path: "/blog" },
      { title: "Classic Layout", path: "/blog-classic" },
      { title: "Blog Details", path: "/blog-details" },
    ],
  },
  { title: "Contact", path: "/contact", activeRules: ["/contact"] },
];
function tb() {
  const s = Ga().pathname,
    [c, r] = H.useState(!1),
    [n, f] = H.useState(!1),
    [d, p] = H.useState([]),
    x = H.useRef(null),
    [h, m] = H.useState(0);
  (H.useEffect(() => {
    const N = () => {
      x.current && m(x.current.offsetHeight);
    };
    return (
      N(),
      window.addEventListener("resize", N),
      () => window.removeEventListener("resize", N)
    );
  }, []),
    H.useEffect(() => {
      const N = () => {
        (window.innerWidth >= 992 ? r(window.scrollY > 80) : r(!1),
          window.scrollY > 80 && f(!1));
      };
      return (
        window.addEventListener("scroll", N),
        window.addEventListener("resize", N),
        () => {
          (window.removeEventListener("scroll", N),
            window.removeEventListener("resize", N));
        }
      );
    }, []));
  const j = (N) => {
      d.includes(N) ? p(d.filter((b) => b !== N)) : p([...d, N]);
    },
    g = (N) => N.activeRules?.some((b) => s === b) || !1;
  return a.jsxs(a.Fragment, {
    children: [
      a.jsx("header", {
        ref: x,
        className: `header ${c && "sticky-header sticky-fixed-top"}`,
        children: a.jsx("div", {
          className: "primary-header",
          children: a.jsx("div", {
            className: "container",
            children: a.jsxs("div", {
              className: "primary-header-inner",
              children: [
                a.jsx("div", {
                  className: "header-logo",
                  children: a.jsx(ne, {
                    to: "/",
                    children: a.jsx("img", {
                      className: "logo",
                      src: ev,
                      alt: "Logo",
                    }),
                  }),
                }),
                a.jsx("div", {
                  className: `header-menu-wrap ${n ? "menu-open" : ""}`,
                  children: a.jsx("ul", {
                    className: "nav-menu",
                    children: eb.map((N, b) =>
                      a.jsxs(
                        "li",
                        {
                          className: `${g(N) ? "active" : ""} ${N.submenu ? "dropdown_menu" : ""} ${d.includes(b) ? "dropdown-open" : ""}`,
                          children: [
                            a.jsx(ne, {
                              onClick: () => f(!1),
                              to: N.path,
                              children: N.title,
                            }),
                            N.submenu &&
                              a.jsx("span", {
                                className: `dropdown-plus ${d.includes(b) ? "dropdown-open" : ""}`,
                                onClick: (E) => {
                                  (E.preventDefault(), j(b));
                                },
                              }),
                            N.submenu &&
                              a.jsx("ul", {
                                className: d.includes(b) ? "dropdown-open" : "",
                                children: N.submenu.map((E, M) =>
                                  a.jsx(
                                    "li",
                                    {
                                      children: a.jsx(ne, {
                                        onClick: () => f(!1),
                                        to: E.path,
                                        children: E.title,
                                      }),
                                    },
                                    M,
                                  ),
                                ),
                              }),
                          ],
                        },
                        b,
                      ),
                    ),
                  }),
                }),
                a.jsxs("div", {
                  className: "header-right",
                  children: [
                    a.jsx(I0, {}),
                    a.jsx(ne, {
                      to: "/contact",
                      children: a.jsx(_t, { text: "Join Our Team" }),
                    }),
                    a.jsx("div", {
                      onClick: () => f(!n),
                      className: "mobile-menu-icon",
                      children: a.jsxs("div", {
                        className: `burger-menu ${n ? "menu-open" : ""}`,
                        children: [
                          a.jsx("div", {
                            className: "line-menu line-half first-line",
                          }),
                          a.jsx("div", { className: "line-menu" }),
                          a.jsx("div", {
                            className: "line-menu line-half last-line",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      }),
      c && a.jsx("div", { style: { height: h } }),
    ],
  });
}
var rr = { exports: {} },
  ab = rr.exports,
  Fm;
function lb() {
  return (
    Fm ||
      ((Fm = 1),
      (function (s, c) {
        (function (r, n) {
          s.exports = n();
        })(ab, function () {
          return (function (r) {
            function n(d) {
              if (f[d]) return f[d].exports;
              var p = (f[d] = { exports: {}, id: d, loaded: !1 });
              return (
                r[d].call(p.exports, p, p.exports, n),
                (p.loaded = !0),
                p.exports
              );
            }
            var f = {};
            return ((n.m = r), (n.c = f), (n.p = "dist/"), n(0));
          })([
            function (r, n, f) {
              function d(te) {
                return te && te.__esModule ? te : { default: te };
              }
              var p =
                  Object.assign ||
                  function (te) {
                    for (var ce = 1; ce < arguments.length; ce++) {
                      var U = arguments[ce];
                      for (var X in U)
                        Object.prototype.hasOwnProperty.call(U, X) &&
                          (te[X] = U[X]);
                    }
                    return te;
                  },
                x = f(1),
                h = (d(x), f(6)),
                m = d(h),
                j = f(7),
                g = d(j),
                N = f(8),
                b = d(N),
                E = f(9),
                M = d(E),
                A = f(10),
                S = d(A),
                w = f(11),
                z = d(w),
                J = f(14),
                $ = d(J),
                ee = [],
                K = !1,
                T = {
                  offset: 120,
                  delay: 0,
                  easing: "ease",
                  duration: 400,
                  disable: !1,
                  once: !1,
                  startEvent: "DOMContentLoaded",
                  throttleDelay: 99,
                  debounceDelay: 50,
                  disableMutationObserver: !1,
                },
                G = function () {
                  var te =
                    arguments.length > 0 &&
                    arguments[0] !== void 0 &&
                    arguments[0];
                  if ((te && (K = !0), K))
                    return (
                      (ee = (0, z.default)(ee, T)),
                      (0, S.default)(ee, T.once),
                      ee
                    );
                },
                L = function () {
                  ((ee = (0, $.default)()), G());
                },
                _ = function () {
                  ee.forEach(function (te, ce) {
                    (te.node.removeAttribute("data-aos"),
                      te.node.removeAttribute("data-aos-easing"),
                      te.node.removeAttribute("data-aos-duration"),
                      te.node.removeAttribute("data-aos-delay"));
                  });
                },
                B = function (te) {
                  return (
                    te === !0 ||
                    (te === "mobile" && M.default.mobile()) ||
                    (te === "phone" && M.default.phone()) ||
                    (te === "tablet" && M.default.tablet()) ||
                    (typeof te == "function" && te() === !0)
                  );
                },
                ae = function (te) {
                  ((T = p(T, te)), (ee = (0, $.default)()));
                  var ce = document.all && !window.atob;
                  return B(T.disable) || ce
                    ? _()
                    : (T.disableMutationObserver ||
                        b.default.isSupported() ||
                        (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),
                        (T.disableMutationObserver = !0)),
                      document
                        .querySelector("body")
                        .setAttribute("data-aos-easing", T.easing),
                      document
                        .querySelector("body")
                        .setAttribute("data-aos-duration", T.duration),
                      document
                        .querySelector("body")
                        .setAttribute("data-aos-delay", T.delay),
                      T.startEvent === "DOMContentLoaded" &&
                      ["complete", "interactive"].indexOf(document.readyState) >
                        -1
                        ? G(!0)
                        : T.startEvent === "load"
                          ? window.addEventListener(T.startEvent, function () {
                              G(!0);
                            })
                          : document.addEventListener(
                              T.startEvent,
                              function () {
                                G(!0);
                              },
                            ),
                      window.addEventListener(
                        "resize",
                        (0, g.default)(G, T.debounceDelay, !0),
                      ),
                      window.addEventListener(
                        "orientationchange",
                        (0, g.default)(G, T.debounceDelay, !0),
                      ),
                      window.addEventListener(
                        "scroll",
                        (0, m.default)(function () {
                          (0, S.default)(ee, T.once);
                        }, T.throttleDelay),
                      ),
                      T.disableMutationObserver ||
                        b.default.ready("[data-aos]", L),
                      ee);
                };
              r.exports = { init: ae, refresh: G, refreshHard: L };
            },
            function (r, n) {},
            ,
            ,
            ,
            ,
            function (r, n) {
              (function (f) {
                function d(B, ae, te) {
                  function ce(ve) {
                    var Ge = se,
                      jt = fe;
                    return (
                      (se = fe = void 0),
                      (Je = ve),
                      (me = B.apply(jt, Ge))
                    );
                  }
                  function U(ve) {
                    return (
                      (Je = ve),
                      (je = setTimeout(ie, ae)),
                      Fe ? ce(ve) : me
                    );
                  }
                  function X(ve) {
                    var Ge = ve - xe,
                      jt = ve - Je,
                      fl = ae - Ge;
                    return et ? L(fl, oe - jt) : fl;
                  }
                  function Q(ve) {
                    var Ge = ve - xe,
                      jt = ve - Je;
                    return (
                      xe === void 0 || Ge >= ae || Ge < 0 || (et && jt >= oe)
                    );
                  }
                  function ie() {
                    var ve = _();
                    return Q(ve) ? de(ve) : void (je = setTimeout(ie, X(ve)));
                  }
                  function de(ve) {
                    return (
                      (je = void 0),
                      we && se ? ce(ve) : ((se = fe = void 0), me)
                    );
                  }
                  function O() {
                    (je !== void 0 && clearTimeout(je),
                      (Je = 0),
                      (se = xe = fe = je = void 0));
                  }
                  function F() {
                    return je === void 0 ? me : de(_());
                  }
                  function le() {
                    var ve = _(),
                      Ge = Q(ve);
                    if (((se = arguments), (fe = this), (xe = ve), Ge)) {
                      if (je === void 0) return U(xe);
                      if (et) return ((je = setTimeout(ie, ae)), ce(xe));
                    }
                    return (je === void 0 && (je = setTimeout(ie, ae)), me);
                  }
                  var se,
                    fe,
                    oe,
                    me,
                    je,
                    xe,
                    Je = 0,
                    Fe = !1,
                    et = !1,
                    we = !0;
                  if (typeof B != "function") throw new TypeError(N);
                  return (
                    (ae = j(ae) || 0),
                    x(te) &&
                      ((Fe = !!te.leading),
                      (et = "maxWait" in te),
                      (oe = et ? G(j(te.maxWait) || 0, ae) : oe),
                      (we = "trailing" in te ? !!te.trailing : we)),
                    (le.cancel = O),
                    (le.flush = F),
                    le
                  );
                }
                function p(B, ae, te) {
                  var ce = !0,
                    U = !0;
                  if (typeof B != "function") throw new TypeError(N);
                  return (
                    x(te) &&
                      ((ce = "leading" in te ? !!te.leading : ce),
                      (U = "trailing" in te ? !!te.trailing : U)),
                    d(B, ae, { leading: ce, maxWait: ae, trailing: U })
                  );
                }
                function x(B) {
                  var ae = typeof B > "u" ? "undefined" : g(B);
                  return !!B && (ae == "object" || ae == "function");
                }
                function h(B) {
                  return (
                    !!B && (typeof B > "u" ? "undefined" : g(B)) == "object"
                  );
                }
                function m(B) {
                  return (
                    (typeof B > "u" ? "undefined" : g(B)) == "symbol" ||
                    (h(B) && T.call(B) == E)
                  );
                }
                function j(B) {
                  if (typeof B == "number") return B;
                  if (m(B)) return b;
                  if (x(B)) {
                    var ae = typeof B.valueOf == "function" ? B.valueOf() : B;
                    B = x(ae) ? ae + "" : ae;
                  }
                  if (typeof B != "string") return B === 0 ? B : +B;
                  B = B.replace(M, "");
                  var te = S.test(B);
                  return te || w.test(B)
                    ? z(B.slice(2), te ? 2 : 8)
                    : A.test(B)
                      ? b
                      : +B;
                }
                var g =
                    typeof Symbol == "function" &&
                    typeof Symbol.iterator == "symbol"
                      ? function (B) {
                          return typeof B;
                        }
                      : function (B) {
                          return B &&
                            typeof Symbol == "function" &&
                            B.constructor === Symbol &&
                            B !== Symbol.prototype
                            ? "symbol"
                            : typeof B;
                        },
                  N = "Expected a function",
                  b = NaN,
                  E = "[object Symbol]",
                  M = /^\s+|\s+$/g,
                  A = /^[-+]0x[0-9a-f]+$/i,
                  S = /^0b[01]+$/i,
                  w = /^0o[0-7]+$/i,
                  z = parseInt,
                  J =
                    (typeof f > "u" ? "undefined" : g(f)) == "object" &&
                    f &&
                    f.Object === Object &&
                    f,
                  $ =
                    (typeof self > "u" ? "undefined" : g(self)) == "object" &&
                    self &&
                    self.Object === Object &&
                    self,
                  ee = J || $ || Function("return this")(),
                  K = Object.prototype,
                  T = K.toString,
                  G = Math.max,
                  L = Math.min,
                  _ = function () {
                    return ee.Date.now();
                  };
                r.exports = p;
              }).call(
                n,
                (function () {
                  return this;
                })(),
              );
            },
            function (r, n) {
              (function (f) {
                function d(_, B, ae) {
                  function te(we) {
                    var ve = le,
                      Ge = se;
                    return (
                      (le = se = void 0),
                      (xe = we),
                      (oe = _.apply(Ge, ve))
                    );
                  }
                  function ce(we) {
                    return (
                      (xe = we),
                      (me = setTimeout(Q, B)),
                      Je ? te(we) : oe
                    );
                  }
                  function U(we) {
                    var ve = we - je,
                      Ge = we - xe,
                      jt = B - ve;
                    return Fe ? G(jt, fe - Ge) : jt;
                  }
                  function X(we) {
                    var ve = we - je,
                      Ge = we - xe;
                    return (
                      je === void 0 || ve >= B || ve < 0 || (Fe && Ge >= fe)
                    );
                  }
                  function Q() {
                    var we = L();
                    return X(we) ? ie(we) : void (me = setTimeout(Q, U(we)));
                  }
                  function ie(we) {
                    return (
                      (me = void 0),
                      et && le ? te(we) : ((le = se = void 0), oe)
                    );
                  }
                  function de() {
                    (me !== void 0 && clearTimeout(me),
                      (xe = 0),
                      (le = je = se = me = void 0));
                  }
                  function O() {
                    return me === void 0 ? oe : ie(L());
                  }
                  function F() {
                    var we = L(),
                      ve = X(we);
                    if (((le = arguments), (se = this), (je = we), ve)) {
                      if (me === void 0) return ce(je);
                      if (Fe) return ((me = setTimeout(Q, B)), te(je));
                    }
                    return (me === void 0 && (me = setTimeout(Q, B)), oe);
                  }
                  var le,
                    se,
                    fe,
                    oe,
                    me,
                    je,
                    xe = 0,
                    Je = !1,
                    Fe = !1,
                    et = !0;
                  if (typeof _ != "function") throw new TypeError(g);
                  return (
                    (B = m(B) || 0),
                    p(ae) &&
                      ((Je = !!ae.leading),
                      (Fe = "maxWait" in ae),
                      (fe = Fe ? T(m(ae.maxWait) || 0, B) : fe),
                      (et = "trailing" in ae ? !!ae.trailing : et)),
                    (F.cancel = de),
                    (F.flush = O),
                    F
                  );
                }
                function p(_) {
                  var B = typeof _ > "u" ? "undefined" : j(_);
                  return !!_ && (B == "object" || B == "function");
                }
                function x(_) {
                  return (
                    !!_ && (typeof _ > "u" ? "undefined" : j(_)) == "object"
                  );
                }
                function h(_) {
                  return (
                    (typeof _ > "u" ? "undefined" : j(_)) == "symbol" ||
                    (x(_) && K.call(_) == b)
                  );
                }
                function m(_) {
                  if (typeof _ == "number") return _;
                  if (h(_)) return N;
                  if (p(_)) {
                    var B = typeof _.valueOf == "function" ? _.valueOf() : _;
                    _ = p(B) ? B + "" : B;
                  }
                  if (typeof _ != "string") return _ === 0 ? _ : +_;
                  _ = _.replace(E, "");
                  var ae = A.test(_);
                  return ae || S.test(_)
                    ? w(_.slice(2), ae ? 2 : 8)
                    : M.test(_)
                      ? N
                      : +_;
                }
                var j =
                    typeof Symbol == "function" &&
                    typeof Symbol.iterator == "symbol"
                      ? function (_) {
                          return typeof _;
                        }
                      : function (_) {
                          return _ &&
                            typeof Symbol == "function" &&
                            _.constructor === Symbol &&
                            _ !== Symbol.prototype
                            ? "symbol"
                            : typeof _;
                        },
                  g = "Expected a function",
                  N = NaN,
                  b = "[object Symbol]",
                  E = /^\s+|\s+$/g,
                  M = /^[-+]0x[0-9a-f]+$/i,
                  A = /^0b[01]+$/i,
                  S = /^0o[0-7]+$/i,
                  w = parseInt,
                  z =
                    (typeof f > "u" ? "undefined" : j(f)) == "object" &&
                    f &&
                    f.Object === Object &&
                    f,
                  J =
                    (typeof self > "u" ? "undefined" : j(self)) == "object" &&
                    self &&
                    self.Object === Object &&
                    self,
                  $ = z || J || Function("return this")(),
                  ee = Object.prototype,
                  K = ee.toString,
                  T = Math.max,
                  G = Math.min,
                  L = function () {
                    return $.Date.now();
                  };
                r.exports = d;
              }).call(
                n,
                (function () {
                  return this;
                })(),
              );
            },
            function (r, n) {
              function f(j) {
                var g = void 0,
                  N = void 0;
                for (g = 0; g < j.length; g += 1)
                  if (
                    ((N = j[g]),
                    (N.dataset && N.dataset.aos) ||
                      (N.children && f(N.children)))
                  )
                    return !0;
                return !1;
              }
              function d() {
                return (
                  window.MutationObserver ||
                  window.WebKitMutationObserver ||
                  window.MozMutationObserver
                );
              }
              function p() {
                return !!d();
              }
              function x(j, g) {
                var N = window.document,
                  b = d(),
                  E = new b(h);
                ((m = g),
                  E.observe(N.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0,
                  }));
              }
              function h(j) {
                j &&
                  j.forEach(function (g) {
                    var N = Array.prototype.slice.call(g.addedNodes),
                      b = Array.prototype.slice.call(g.removedNodes),
                      E = N.concat(b);
                    if (f(E)) return m();
                  });
              }
              Object.defineProperty(n, "__esModule", { value: !0 });
              var m = function () {};
              n.default = { isSupported: p, ready: x };
            },
            function (r, n) {
              function f(N, b) {
                if (!(N instanceof b))
                  throw new TypeError("Cannot call a class as a function");
              }
              function d() {
                return (
                  navigator.userAgent || navigator.vendor || window.opera || ""
                );
              }
              Object.defineProperty(n, "__esModule", { value: !0 });
              var p = (function () {
                  function N(b, E) {
                    for (var M = 0; M < E.length; M++) {
                      var A = E[M];
                      ((A.enumerable = A.enumerable || !1),
                        (A.configurable = !0),
                        "value" in A && (A.writable = !0),
                        Object.defineProperty(b, A.key, A));
                    }
                  }
                  return function (b, E, M) {
                    return (E && N(b.prototype, E), M && N(b, M), b);
                  };
                })(),
                x =
                  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                h =
                  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                m =
                  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                j =
                  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                g = (function () {
                  function N() {
                    f(this, N);
                  }
                  return (
                    p(N, [
                      {
                        key: "phone",
                        value: function () {
                          var b = d();
                          return !(!x.test(b) && !h.test(b.substr(0, 4)));
                        },
                      },
                      {
                        key: "mobile",
                        value: function () {
                          var b = d();
                          return !(!m.test(b) && !j.test(b.substr(0, 4)));
                        },
                      },
                      {
                        key: "tablet",
                        value: function () {
                          return this.mobile() && !this.phone();
                        },
                      },
                    ]),
                    N
                  );
                })();
              n.default = new g();
            },
            function (r, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              var f = function (p, x, h) {
                  var m = p.node.getAttribute("data-aos-once");
                  x > p.position
                    ? p.node.classList.add("aos-animate")
                    : typeof m < "u" &&
                      (m === "false" || (!h && m !== "true")) &&
                      p.node.classList.remove("aos-animate");
                },
                d = function (p, x) {
                  var h = window.pageYOffset,
                    m = window.innerHeight;
                  p.forEach(function (j, g) {
                    f(j, m + h, x);
                  });
                };
              n.default = d;
            },
            function (r, n, f) {
              function d(m) {
                return m && m.__esModule ? m : { default: m };
              }
              Object.defineProperty(n, "__esModule", { value: !0 });
              var p = f(12),
                x = d(p),
                h = function (m, j) {
                  return (
                    m.forEach(function (g, N) {
                      (g.node.classList.add("aos-init"),
                        (g.position = (0, x.default)(g.node, j.offset)));
                    }),
                    m
                  );
                };
              n.default = h;
            },
            function (r, n, f) {
              function d(m) {
                return m && m.__esModule ? m : { default: m };
              }
              Object.defineProperty(n, "__esModule", { value: !0 });
              var p = f(13),
                x = d(p),
                h = function (m, j) {
                  var g = 0,
                    N = 0,
                    b = window.innerHeight,
                    E = {
                      offset: m.getAttribute("data-aos-offset"),
                      anchor: m.getAttribute("data-aos-anchor"),
                      anchorPlacement: m.getAttribute(
                        "data-aos-anchor-placement",
                      ),
                    };
                  switch (
                    (E.offset && !isNaN(E.offset) && (N = parseInt(E.offset)),
                    E.anchor &&
                      document.querySelectorAll(E.anchor) &&
                      (m = document.querySelectorAll(E.anchor)[0]),
                    (g = (0, x.default)(m).top),
                    E.anchorPlacement)
                  ) {
                    case "top-bottom":
                      break;
                    case "center-bottom":
                      g += m.offsetHeight / 2;
                      break;
                    case "bottom-bottom":
                      g += m.offsetHeight;
                      break;
                    case "top-center":
                      g += b / 2;
                      break;
                    case "bottom-center":
                      g += b / 2 + m.offsetHeight;
                      break;
                    case "center-center":
                      g += b / 2 + m.offsetHeight / 2;
                      break;
                    case "top-top":
                      g += b;
                      break;
                    case "bottom-top":
                      g += m.offsetHeight + b;
                      break;
                    case "center-top":
                      g += m.offsetHeight / 2 + b;
                  }
                  return (
                    E.anchorPlacement || E.offset || isNaN(j) || (N = j),
                    g + N
                  );
                };
              n.default = h;
            },
            function (r, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              var f = function (d) {
                for (
                  var p = 0, x = 0;
                  d && !isNaN(d.offsetLeft) && !isNaN(d.offsetTop);
                )
                  ((p +=
                    d.offsetLeft - (d.tagName != "BODY" ? d.scrollLeft : 0)),
                    (x +=
                      d.offsetTop - (d.tagName != "BODY" ? d.scrollTop : 0)),
                    (d = d.offsetParent));
                return { top: x, left: p };
              };
              n.default = f;
            },
            function (r, n) {
              Object.defineProperty(n, "__esModule", { value: !0 });
              var f = function (d) {
                return (
                  (d = d || document.querySelectorAll("[data-aos]")),
                  Array.prototype.map.call(d, function (p) {
                    return { node: p };
                  })
                );
              };
              n.default = f;
            },
          ]);
        });
      })(rr)),
    rr.exports
  );
}
var sb = lb();
const $m = fr(sb),
  ib = () => {
    const [s, c] = H.useState({ x: 0, y: 0 }),
      [r, n] = H.useState(!1),
      [f, d] = H.useState(!1),
      [p, x] = H.useState(!1),
      h = H.useCallback((j) => {
        c({ x: j.clientX - 15, y: j.clientY - 15 });
        const g = j.target,
          N = g.closest("a, button, .swiper-nav, .cursor-pointer");
        n(!!N);
        const b = g.closest(".cross-cursor");
        (d(!!b), x(!0));
      }, []);
    H.useEffect(() => {
      window.addEventListener("mousemove", h);
      const j = () => {
        (x(!1), n(!1), d(!1));
      };
      return (
        window.addEventListener("mouseout", j),
        () => {
          (window.removeEventListener("mousemove", h),
            window.removeEventListener("mouseout", j));
        }
      );
    }, [h]);
    const m = ["dl-cursor", r ? "cursor-grow" : "", f ? "cross" : ""].join(" ");
    return a.jsx("div", {
      className: m,
      style: {
        transform: `translate(${s.x}px, ${s.y}px)`,
        opacity: p ? 1 : 0,
        visibility: p ? "visible" : "hidden",
        transition: "opacity 0.2s ease-in-out, transform 0.1s ease-out",
      },
    });
  };
function nb() {
  const [s, c] = H.useState(!1),
    r = 80,
    n = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    f = () => {
      window.scrollY > r ? c(!0) : c(!1);
    };
  return (
    H.useEffect(
      () => (
        window.addEventListener("scroll", f),
        () => {
          window.removeEventListener("scroll", f);
        }
      ),
      [],
    ),
    a.jsx("div", {
      id: "scrollup",
      className: s ? "show" : "",
      children: a.jsx("a", {
        href: "#",
        className: "scroll-to-top",
        title: "Scroll to Top",
        onClick: n,
        children: a.jsx("i", { className: "la la-arrow-up" }),
      }),
    })
  );
}
var Po = { exports: {} },
  Km;
function rb() {
  return (
    Km ||
      ((Km = 1),
      (function (s, c) {
        (function () {
          var r = {
              frameRate: 150,
              animationTime: 400,
              stepSize: 100,
              pulseAlgorithm: !0,
              pulseScale: 4,
              pulseNormalize: 1,
              accelerationDelta: 50,
              accelerationMax: 3,
              keyboardSupport: !0,
              arrowScroll: 50,
              fixedBackground: !0,
              excluded: "",
            },
            n = r,
            f = !1,
            d = { x: 0, y: 0 },
            p = !1,
            x = document.documentElement,
            h,
            m,
            j,
            g = [],
            N,
            b = /^Mac/.test(navigator.platform);
          function E() {
            n.keyboardSupport && O("keydown", ee);
          }
          function M() {
            if (!(p || !document.body)) {
              p = !0;
              var Y = document.body,
                re = document.documentElement,
                ye = window.innerHeight,
                ke = Y.scrollHeight;
              if (
                ((x = document.compatMode.indexOf("CSS") >= 0 ? re : Y),
                (h = Y),
                E(),
                top != self)
              )
                f = !0;
              else if (
                As &&
                ke > ye &&
                (Y.offsetHeight <= ye || re.offsetHeight <= ye)
              ) {
                var $e = document.createElement("div");
                (($e.style.cssText =
                  "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" +
                  x.scrollHeight +
                  "px"),
                  document.body.appendChild($e));
                var bt;
                ((j = function () {
                  bt ||
                    (bt = setTimeout(function () {
                      (($e.style.height = "0"),
                        ($e.style.height = x.scrollHeight + "px"),
                        (bt = null));
                    }, 500));
                }),
                  setTimeout(j, 10),
                  O("resize", j));
                var ta = { attributes: !0, childList: !0, characterData: !1 };
                if (((m = new Je(j)), m.observe(Y, ta), x.offsetHeight <= ye)) {
                  var it = document.createElement("div");
                  ((it.style.clear = "both"), Y.appendChild(it));
                }
              }
              n.fixedBackground ||
                ((Y.style.backgroundAttachment = "scroll"),
                (re.style.backgroundAttachment = "scroll"));
            }
          }
          function A() {
            (m && m.disconnect(),
              F(yt, $),
              F("mousedown", K),
              F("keydown", ee),
              F("resize", j),
              F("load", M));
          }
          var S = [],
            w = !1,
            z = Date.now();
          function J(Y, re, ye) {
            if ((se(re, ye), n.accelerationMax != 1)) {
              var ke = Date.now(),
                $e = ke - z;
              if ($e < n.accelerationDelta) {
                var bt = (1 + 50 / $e) / 2;
                bt > 1 &&
                  ((bt = Math.min(bt, n.accelerationMax)),
                  (re *= bt),
                  (ye *= bt));
              }
              z = Date.now();
            }
            if (
              (S.push({
                x: re,
                y: ye,
                lastX: re < 0 ? 0.99 : -0.99,
                lastY: ye < 0 ? 0.99 : -0.99,
                start: Date.now(),
              }),
              !w)
            ) {
              var ta = Fe(),
                it = Y === ta || Y === document.body;
              Y.$scrollBehavior == null &&
                de(Y) &&
                ((Y.$scrollBehavior = Y.style.scrollBehavior),
                (Y.style.scrollBehavior = "auto"));
              var qe = function (Nt) {
                for (
                  var ht = Date.now(), pa = 0, Hl = 0, hl = 0;
                  hl < S.length;
                  hl++
                ) {
                  var Yt = S[hl],
                    ml = ht - Yt.start,
                    pl = ml >= n.animationTime,
                    kt = pl ? 1 : ml / n.animationTime;
                  n.pulseAlgorithm && (kt = we(kt));
                  var vl = (Yt.x * kt - Yt.lastX) >> 0,
                    qa = (Yt.y * kt - Yt.lastY) >> 0;
                  ((pa += vl),
                    (Hl += qa),
                    (Yt.lastX += vl),
                    (Yt.lastY += qa),
                    pl && (S.splice(hl, 1), hl--));
                }
                (it
                  ? window.scrollBy(pa, Hl)
                  : (pa && (Y.scrollLeft += pa), Hl && (Y.scrollTop += Hl)),
                  !re && !ye && (S = []),
                  S.length
                    ? xe(qe, Y, 1e3 / n.frameRate + 1)
                    : ((w = !1),
                      Y.$scrollBehavior != null &&
                        ((Y.style.scrollBehavior = Y.$scrollBehavior),
                        (Y.$scrollBehavior = null))));
              };
              (xe(qe, Y, 0), (w = !0));
            }
          }
          function $(Y) {
            p || M();
            var re = T(Y);
            if (
              Y.defaultPrevented ||
              Y.ctrlKey ||
              le(h, "embed") ||
              (le(re, "embed") && /\.pdf/i.test(re.src)) ||
              le(h, "object")
            )
              return !0;
            var ye = -Y.wheelDeltaX || Y.deltaX || 0,
              ke = -Y.wheelDeltaY || Y.deltaY || 0;
            (b &&
              (Y.wheelDeltaX &&
                oe(Y.wheelDeltaX, 120) &&
                (ye = -120 * (Y.wheelDeltaX / Math.abs(Y.wheelDeltaX))),
              Y.wheelDeltaY &&
                oe(Y.wheelDeltaY, 120) &&
                (ke = -120 * (Y.wheelDeltaY / Math.abs(Y.wheelDeltaY)))),
              !ye && !ke && (ke = -Y.wheelDelta || 0),
              Y.deltaMode === 1 && ((ye *= 40), (ke *= 40)));
            var $e = U(re);
            if (!$e)
              return f && jt
                ? (Object.defineProperty(Y, "target", {
                    value: window.frameElement,
                  }),
                  parent.wheel(Y))
                : !0;
            if (fe(ke)) return !0;
            (Math.abs(ye) > 1.2 && (ye *= n.stepSize / 120),
              Math.abs(ke) > 1.2 && (ke *= n.stepSize / 120),
              J($e, ye, ke),
              Y.preventDefault(),
              ae());
          }
          function ee(Y) {
            var re = T(Y),
              ye =
                Y.ctrlKey ||
                Y.altKey ||
                Y.metaKey ||
                (Y.shiftKey && Y.code !== "Space");
            document.body.contains(h) || (h = document.activeElement);
            var ke = /^(textarea|select|embed|object)$/i,
              $e = /^(button|submit|radio|checkbox|file|color|image)$/i;
            if (
              Y.defaultPrevented ||
              ke.test(re.nodeName) ||
              (le(re, "input") && !$e.test(re.type)) ||
              le(h, "video") ||
              je(Y) ||
              re.isContentEditable ||
              ye ||
              ((le(re, "button") || (le(re, "input") && $e.test(re.type))) &&
                Y.code === "Space") ||
              (le(re, "input") &&
                re.type == "radio" &&
                (Y.code === "ArrowUp" ||
                  Y.code === "ArrowDown" ||
                  Y.code === "ArrowLeft" ||
                  Y.code === "ArrowRight"))
            )
              return !0;
            var bt,
              ta = 0,
              it = 0,
              qe = U(h);
            if (!qe) return f && jt ? parent.keydown(Y) : !0;
            var Nt = qe.clientHeight;
            switch (
              (qe == document.body && (Nt = window.innerHeight), Y.code)
            ) {
              case "ArrowUp":
                it = -n.arrowScroll;
                break;
              case "ArrowDown":
                it = n.arrowScroll;
                break;
              case "Space":
                ((bt = Y.shiftKey ? 1 : -1), (it = -bt * Nt * 0.9));
                break;
              case "PageUp":
                it = -Nt * 0.9;
                break;
              case "PageDown":
                it = Nt * 0.9;
                break;
              case "Home":
                (qe == document.body &&
                  document.scrollingElement &&
                  (qe = document.scrollingElement),
                  (it = -qe.scrollTop));
                break;
              case "End":
                var ht = qe.scrollHeight - qe.scrollTop,
                  pa = ht - Nt;
                it = pa > 0 ? pa + 10 : 0;
                break;
              case "ArrowLeft":
                ta = -n.arrowScroll;
                break;
              case "ArrowRight":
                ta = n.arrowScroll;
                break;
              default:
                return !0;
            }
            (J(qe, ta, it), Y.preventDefault(), ae());
          }
          function K(Y) {
            h = T(Y);
          }
          function T(Y) {
            return Y.composedPath ? Y.composedPath()[0] : Y.target;
          }
          var G = (function () {
              var Y = 0;
              return function (re) {
                return re.uniqueID || (re.uniqueID = Y++);
              };
            })(),
            L = {},
            _,
            B = {};
          function ae() {
            (clearTimeout(_),
              (_ = setInterval(function () {
                L = B = {};
              }, 1 * 1e3)));
          }
          function te(Y, re, ye) {
            for (var ke = L, $e = Y.length; $e--; ) ke[G(Y[$e])] = re;
            return re;
          }
          function ce(Y, re) {
            return L[G(Y)];
          }
          function U(Y) {
            for (var re = [], ye = document.body, ke = x.scrollHeight; Y; ) {
              var $e = ce(Y);
              if ($e) return te(re, $e);
              if ((re.push(Y), ke === Y.scrollHeight)) {
                var bt = Q(x) && Q(ye),
                  ta = bt || ie(x);
                if ((f && X(x)) || (!f && ta)) return te(re, Fe());
              } else if (X(Y) && ie(Y)) return te(re, Y);
              Y = Y.parentElement || (Y.getRootNode && Y.getRootNode().host);
            }
          }
          function X(Y) {
            return Y.clientHeight + 10 < Y.scrollHeight;
          }
          function Q(Y) {
            var re = getComputedStyle(Y, "").getPropertyValue("overflow-y");
            return re !== "hidden";
          }
          function ie(Y) {
            var re = getComputedStyle(Y, "").getPropertyValue("overflow-y");
            return re === "scroll" || re === "auto";
          }
          function de(Y) {
            var re = G(Y);
            if (B[re] == null) {
              var ye = getComputedStyle(Y, "")["scroll-behavior"];
              B[re] = ye == "smooth";
            }
            return B[re];
          }
          function O(Y, re, ye) {
            window.addEventListener(Y, re, ye || !1);
          }
          function F(Y, re, ye) {
            window.removeEventListener(Y, re, !1);
          }
          function le(Y, re) {
            return Y && (Y.nodeName || "").toLowerCase() === re.toLowerCase();
          }
          function se(Y, re) {
            ((Y = Y > 0 ? 1 : -1),
              (re = re > 0 ? 1 : -1),
              (d.x !== Y || d.y !== re) &&
                ((d.x = Y), (d.y = re), (S = []), (z = 0)));
          }
          try {
            localStorage.SS_deltaBuffer &&
              (g = localStorage.SS_deltaBuffer.split(","));
          } catch {}
          function fe(Y) {
            if (Y) {
              (g.length || (g = [Y, Y, Y]),
                (Y = Math.abs(Y)),
                g.push(Y),
                g.shift(),
                clearTimeout(N),
                (N = setTimeout(function () {
                  try {
                    localStorage.SS_deltaBuffer = g.join(",");
                  } catch {}
                }, 1e3)));
              var re = Y > 120 && me(Y),
                ye = !me(120) && !me(100) && !re;
              return Y < 50 ? !0 : ye;
            }
          }
          function oe(Y, re) {
            return Math.floor(Y / re) == Y / re;
          }
          function me(Y) {
            return oe(g[0], Y) && oe(g[1], Y) && oe(g[2], Y);
          }
          function je(Y) {
            var re = T(Y),
              ye = !1;
            if (document.URL.indexOf("www.youtube.com/watch") != -1)
              do
                if (
                  ((ye =
                    re.classList &&
                    re.classList.contains("html5-video-controls")),
                  ye)
                )
                  break;
              while ((re = re.parentNode));
            return ye;
          }
          var xe = (function () {
              return (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                function (Y, re, ye) {
                  window.setTimeout(Y, ye || 1e3 / 60);
                }
              );
            })(),
            Je =
              window.MutationObserver ||
              window.WebKitMutationObserver ||
              window.MozMutationObserver,
            Fe = (function () {
              var Y = document.scrollingElement;
              return function () {
                if (!Y) {
                  var re = document.createElement("div");
                  ((re.style.cssText = "height:10000px;width:1px;"),
                    document.body.appendChild(re));
                  var ye = document.body.scrollTop;
                  (document.documentElement.scrollTop,
                    window.scrollBy(0, 3),
                    document.body.scrollTop != ye
                      ? (Y = document.body)
                      : (Y = document.documentElement),
                    window.scrollBy(0, -3),
                    document.body.removeChild(re));
                }
                return Y;
              };
            })();
          function et(Y) {
            var re, ye, ke;
            return (
              (Y = Y * n.pulseScale),
              Y < 1
                ? (re = Y - (1 - Math.exp(-Y)))
                : ((ye = Math.exp(-1)),
                  (Y -= 1),
                  (ke = 1 - Math.exp(-Y)),
                  (re = ye + ke * (1 - ye))),
              re * n.pulseNormalize
            );
          }
          function we(Y) {
            return Y >= 1
              ? 1
              : Y <= 0
                ? 0
                : (n.pulseNormalize == 1 && (n.pulseNormalize /= et(1)), et(Y));
          }
          var ve = window.navigator.userAgent,
            Ge = /Edge/.test(ve),
            jt = /chrome/i.test(ve) && !Ge,
            fl = /safari/i.test(ve) && !Ge,
            Vi = /mobile/i.test(ve),
            Os = /Windows NT 6.1/i.test(ve) && /rv:11/i.test(ve),
            As = fl && (/Version\/8/i.test(ve) || /Version\/9/i.test(ve)),
            zs = (jt || fl || Os) && !Vi,
            Yi = !1;
          try {
            window.addEventListener(
              "test",
              null,
              Object.defineProperty({}, "passive", {
                get: function () {
                  Yi = !0;
                },
              }),
            );
          } catch {}
          var yr = Yi ? { passive: !1 } : !1,
            yt =
              "onwheel" in document.createElement("div")
                ? "wheel"
                : "mousewheel";
          zs && (O(yt, $, yr), O("mousedown", K), O("load", M));
          function Ds(Y) {
            for (var re in Y) r.hasOwnProperty(re) && (n[re] = Y[re]);
          }
          ((Ds.destroy = A),
            window.SmoothScrollOptions && Ds(window.SmoothScrollOptions),
            (s.exports = Ds));
        })();
      })(Po)),
    Po.exports
  );
}
var cb = rb();
const ob = fr(cb);
function ub() {
  const { pathname: s } = Ga();
  return (
    H.useEffect(() => {
      window.scrollTo(0, 0);
    }, [s]),
    H.useEffect(() => {
      (ob({
        animationTime: 700,
        stepSize: 80,
        accelerationDelta: 20,
        accelerationMax: 1.5,
        keyboardSupport: !0,
        touchpadSupport: !0,
      }),
        $m.init({
          duration: 600,
          once: !0,
          mirror: !1,
          easing: "ease-out-cubic",
          offset: 0,
        }),
        setTimeout(() => $m.refresh(), 100));
    }, []),
    a.jsxs(a.Fragment, {
      children: [a.jsx(ib, {}), a.jsx(nb, {}), a.jsx(tb, {}), a.jsx(Ej, {})],
    })
  );
}
function db() {
  return a.jsxs("div", {
    className: "body",
    children: [
      a.jsxs("section", {
        className: "page-header",
        children: [
          a.jsxs("div", {
            className: "page-header-shape",
            children: [
              a.jsx("div", { className: "shape" }),
              a.jsx("div", { className: "shape center" }),
              a.jsx("div", { className: "shape center back" }),
              a.jsx("div", { className: "shape right" }),
            ],
          }),
          a.jsx("div", {
            className: "container",
            children: a.jsxs("div", {
              className: "page-header-info",
              children: [
                a.jsx("h4", { children: "Matches List" }),
                a.jsx("h2", { children: "Upcoming Matches" }),
                a.jsxs("p", {
                  children: [
                    "Our success in creating business solutions is due in large part",
                    " ",
                    a.jsx("br", {}),
                    "to our talented and highly committed team.",
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      a.jsx("section", {
        className: "matches-section padding-top",
        children: a.jsxs("div", {
          className: "container",
          children: [
            a.jsxs("ul", {
              className: "upcoming-matches",
              children: [
                a.jsxs("li", {
                  className: "matches-list",
                  children: [
                    a.jsxs("div", {
                      className: "participate-team",
                      children: [
                        a.jsx("img", { src: hu, alt: "team" }),
                        a.jsx("h3", {
                          children: a.jsx(ne, {
                            to: "/team-details",
                            children: "Purple Death Cadets",
                          }),
                        }),
                        a.jsx("div", {
                          className: "match-info",
                          children: "Group 04 | Match 06th",
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "match-time",
                      children: [
                        a.jsxs("h3", {
                          children: [
                            "10:00 ",
                            a.jsx("span", { children: "25TH May 2024" }),
                          ],
                        }),
                        a.jsxs("ul", {
                          className: "watch-btn",
                          children: [
                            a.jsx("li", {
                              children: a.jsx("a", {
                                className: "dl-video-popup",
                                "data-autoplay": "true",
                                "data-vbtype": "video",
                                href: "https://www.youtube.com/watch?v=tv7LfFeamsc",
                                children: a.jsx("i", {
                                  className: "lab la-youtube",
                                }),
                              }),
                            }),
                            a.jsx("li", {
                              children: a.jsx("a", {
                                className: "dl-video-popup",
                                "data-autoplay": "true",
                                "data-vbtype": "video",
                                href: "https://www.youtube.com/watch?v=tv7LfFeamsc",
                                children: a.jsx("i", {
                                  className: "lab la-twitch",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "participate-team oponent",
                      children: [
                        a.jsx("h3", {
                          children: a.jsx(ne, {
                            to: "/team-details",
                            children: "Trigger Brain Squad",
                          }),
                        }),
                        a.jsx("div", {
                          className: "match-info",
                          children: "Group 04 | Match 06th",
                        }),
                        a.jsx("img", { src: Hi, alt: "team" }),
                      ],
                    }),
                  ],
                }),
                a.jsxs("li", {
                  className: "matches-list",
                  children: [
                    a.jsxs("div", {
                      className: "participate-team",
                      children: [
                        a.jsx("img", { src: Cp, alt: "team" }),
                        a.jsx("h3", {
                          children: a.jsx(ne, {
                            to: "/team-details",
                            children: "The Black Hat Hackers",
                          }),
                        }),
                        a.jsx("div", {
                          className: "match-info",
                          children: "Group 05 | Match 02nd",
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "match-time",
                      children: [
                        a.jsxs("h3", {
                          children: [
                            "12:30 ",
                            a.jsx("span", { children: "10TH Jan 2024" }),
                          ],
                        }),
                        a.jsxs("ul", {
                          className: "watch-btn",
                          children: [
                            a.jsx("li", {
                              children: a.jsx("a", {
                                className: "dl-video-popup",
                                "data-autoplay": "true",
                                "data-vbtype": "video",
                                href: "https://www.youtube.com/watch?v=tv7LfFeamsc",
                                children: a.jsx("i", {
                                  className: "lab la-youtube",
                                }),
                              }),
                            }),
                            a.jsx("li", {
                              children: a.jsx("a", {
                                className: "dl-video-popup",
                                "data-autoplay": "true",
                                "data-vbtype": "video",
                                href: "https://www.youtube.com/watch?v=tv7LfFeamsc",
                                children: a.jsx("i", {
                                  className: "lab la-twitch",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "participate-team oponent",
                      children: [
                        a.jsx("h3", {
                          children: a.jsx(ne, {
                            to: "/team-details",
                            children: "Your Worst Nightmare",
                          }),
                        }),
                        a.jsx("div", {
                          className: "match-info",
                          children: "Group 05 | Match 02nd",
                        }),
                        a.jsx("img", { src: Mp, alt: "team" }),
                      ],
                    }),
                  ],
                }),
                a.jsxs("li", {
                  className: "matches-list",
                  children: [
                    a.jsxs("div", {
                      className: "participate-team",
                      children: [
                        a.jsx("img", { src: Op, alt: "team" }),
                        a.jsx("h3", {
                          children: a.jsx(ne, {
                            to: "/team-details",
                            children: "Witches and Quizards",
                          }),
                        }),
                        a.jsx("div", {
                          className: "match-info",
                          children: "Group 02 | Match 03rd",
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "match-time",
                      children: [
                        a.jsxs("h3", {
                          children: [
                            "04:20 ",
                            a.jsx("span", { children: "15TH Dec 2024" }),
                          ],
                        }),
                        a.jsxs("ul", {
                          className: "watch-btn",
                          children: [
                            a.jsx("li", {
                              children: a.jsx("a", {
                                className: "dl-video-popup",
                                "data-autoplay": "true",
                                "data-vbtype": "video",
                                href: "https://www.youtube.com/watch?v=tv7LfFeamsc",
                                children: a.jsx("i", {
                                  className: "lab la-youtube",
                                }),
                              }),
                            }),
                            a.jsx("li", {
                              children: a.jsx("a", {
                                className: "dl-video-popup",
                                "data-autoplay": "true",
                                "data-vbtype": "video",
                                href: "https://www.youtube.com/watch?v=tv7LfFeamsc",
                                children: a.jsx("i", {
                                  className: "lab la-twitch",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "participate-team oponent",
                      children: [
                        a.jsx("h3", {
                          children: a.jsx(ne, {
                            to: "/team-details",
                            children: "Resting Bitch Faces",
                          }),
                        }),
                        a.jsx("div", {
                          className: "match-info",
                          children: "Group 02 | Match 03rd",
                        }),
                        a.jsx("img", { src: Ap, alt: "team" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            a.jsx("div", {
              className: "text-center mt-50",
              children: a.jsx("a", {
                href: "#",
                className: "default-btn",
                children: "Load More Matches",
              }),
            }),
          ],
        }),
      }),
      a.jsx(ft, {}),
    ],
  });
}
const tv = "/assets/recent-match-1-Bbv4uyuL.jpg",
  av = "/assets/recent-match-2-B0y0b-iI.jpg",
  lv = "/assets/recent-match-3-DBBBBAiv.jpg",
  fb = [
    {
      category: "E-Football",
      title: "FIFA eWorld Cup 2022",
      time: "Dec.06.2019 - 02:30 pm",
      site: "twitch",
      img: tv,
      link: "https://www.youtube.com/watch?v=tv7LfFeamsc",
    },
    {
      category: "Counter Strike",
      title: "Legendary Battles",
      time: "Dec.06.2019 - 02:30 pm",
      site: "youtube",
      img: av,
      link: "https://www.youtube.com/watch?v=tv7LfFeamsc",
    },
    {
      category: "Valorant",
      title: "Global Championship ii",
      time: "Dec.06.2019 - 02:30 pm",
      site: "twitch",
      img: lv,
      link: "https://www.youtube.com/watch?v=tv7LfFeamsc",
    },
  ];
function hb() {
  return a.jsxs("div", {
    className: "body",
    children: [
      a.jsxs("section", {
        className: "page-header",
        children: [
          a.jsxs("div", {
            className: "page-header-shape",
            children: [
              a.jsx("div", { className: "shape" }),
              a.jsx("div", { className: "shape center" }),
              a.jsx("div", { className: "shape center back" }),
              a.jsx("div", { className: "shape right" }),
            ],
          }),
          a.jsx("div", {
            className: "container",
            children: a.jsxs("div", {
              className: "page-header-info",
              children: [
                a.jsx("h4", { children: "Upcoming Streams" }),
                a.jsx("h2", { children: "Live Stream Schedule" }),
                a.jsxs("p", {
                  children: [
                    "Our success in creating business solutions is due in large part",
                    " ",
                    a.jsx("br", {}),
                    "to our talented and highly committed team.",
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      a.jsx("section", {
        className: "latest-matches padding-top",
        children: a.jsx("div", {
          className: "container",
          children: fb.map((s) =>
            a.jsx("div", {
              className: "latest-matches-lists",
              children: a.jsxs("div", {
                className: "latest-matches-list",
                children: [
                  a.jsx("div", {
                    className: "matches-thumb",
                    children: a.jsx("img", { src: s.img, alt: "thumb" }),
                  }),
                  a.jsxs("div", {
                    className: "latest-match-info",
                    children: [
                      a.jsx("a", {
                        href: "#",
                        className: "match-category",
                        children: s.category,
                      }),
                      a.jsx("h3", { children: s.title }),
                      a.jsx("ul", {
                        className: "match-meta",
                        children: a.jsx("li", {
                          children: a.jsx("a", { href: "#", children: s.time }),
                        }),
                      }),
                    ],
                  }),
                  a.jsx("div", {
                    className: "watch-info",
                    children: a.jsxs("a", {
                      className: "dl-video-popup",
                      "data-autoplay": "true",
                      "data-vbtype": "video",
                      href: s.link,
                      children: [
                        a.jsx("i", { className: `lab la-${s.site}` }),
                        "Watch Streem",
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ),
        }),
      }),
      a.jsx(ft, {}),
    ],
  });
}
const xu = "/assets/comment-1--_LVtKit.png",
  ju = "/assets/comment-2-fw2KBeyl.png",
  sv = "/assets/comment-3-PBtqbZA_.png";
function mb() {
  return a.jsxs("div", {
    className: "body",
    children: [
      a.jsxs("section", {
        className: "page-header match-details",
        children: [
          a.jsxs("div", {
            className: "page-header-shape",
            children: [
              a.jsx("div", { className: "shape" }),
              a.jsx("div", { className: "shape center" }),
              a.jsx("div", { className: "shape center back" }),
              a.jsx("div", { className: "shape right" }),
            ],
          }),
          a.jsx("div", {
            className: "container",
            children: a.jsxs("div", {
              className: "match-details-header",
              children: [
                a.jsx("img", { className: "left", src: hu, alt: "logo" }),
                a.jsx("h3", {
                  className: "left-team",
                  children: a.jsx(ne, {
                    to: "/team-details",
                    children: "Purple Death Cadets",
                  }),
                }),
                a.jsx("div", {
                  className: "vs",
                  children: a.jsx("h2", { children: "vs" }),
                }),
                a.jsx("h3", {
                  className: "right-team",
                  children: a.jsx(ne, {
                    to: "/team-details",
                    children: "Trigger Brain Squad",
                  }),
                }),
                a.jsx("img", { className: "right", src: Hi, alt: "logo" }),
              ],
            }),
          }),
        ],
      }),
      a.jsx("section", {
        className: "match-details-section padding-top",
        children: a.jsx("div", {
          className: "container",
          children: a.jsx("div", {
            className: "col-lg-8 offset-lg-2",
            children: a.jsxs("div", {
              className: "match-details",
              children: [
                a.jsxs("ul", {
                  className: "post-meta",
                  children: [
                    a.jsxs("li", {
                      children: [
                        a.jsx("i", { className: "las la-calendar" }),
                        "Jan 01 2023",
                      ],
                    }),
                    a.jsxs("li", {
                      children: [
                        a.jsx("i", { className: "las la-gamepad" }),
                        "Valorant",
                      ],
                    }),
                  ],
                }),
                a.jsx("h2", {
                  children: "Purple Death Cadets Vs Trigger Brain Squad",
                }),
                a.jsx("p", {
                  children:
                    "Financial experts support or help you to to find out which way you can raise your funds more. Arkit a trusted name for providing assistants. Initially their main objective was to ensure the service they provide these people are loyal to their industry, experienced and professional.",
                }),
                a.jsx("p", {
                  children:
                    "Unless you are the one who really cares about this, it is not terribly important. What all matters are how your hybrid mobile application development is going to work in the long run as no one will care about how it was built.",
                }),
                a.jsxs("blockquote", {
                  children: [
                    a.jsx("i", { className: "fas fa-quote-right" }),
                    "There are no secrets to success. It is the result preparation, hard work and learning from failure.",
                    a.jsx("span", { children: "- Winston Churchill." }),
                  ],
                }),
                a.jsx("p", {
                  children:
                    "There are some big shifts taking place in the field of construction equipment mathematics. Starting with the integration of mathematics devices in vehicles right from the manufacturers, to the standardization and integration mathematics data across various business functions, the future of mathematics has never seemed so full of potential for fleet-based businesses.",
                }),
                a.jsx("p", {
                  children:
                    "Another speaker, John Meuse, senior director of heavy equipment at Waste Management Inc., echoed this, citing a cost-saving of $17,000 for the company when it cut idling time of a single Caterpillar 966 wheel loader.",
                }),
                a.jsxs("ul", {
                  className: "tags mb-30",
                  children: [
                    a.jsx("li", {
                      children: a.jsx("a", { href: "#", children: "Valorent" }),
                    }),
                    a.jsx("li", {
                      children: a.jsx("a", { href: "#", children: "eSports" }),
                    }),
                    a.jsx("li", {
                      children: a.jsx("a", { href: "#", children: "Matches" }),
                    }),
                    a.jsx("li", {
                      children: a.jsx("a", { href: "#", children: "Stream" }),
                    }),
                  ],
                }),
                a.jsx("h3", {
                  className: "comment-title",
                  children: "Post Comments",
                }),
                a.jsxs("ul", {
                  className: "comments-box",
                  children: [
                    a.jsxs("li", {
                      className: "comment",
                      children: [
                        a.jsxs("div", {
                          className: "comment-inner",
                          children: [
                            a.jsx("div", {
                              className: "comment-thumb",
                              children: a.jsx("img", { src: xu, alt: "img" }),
                            }),
                            a.jsxs("div", {
                              className: "comment-wrap",
                              children: [
                                a.jsx("div", {
                                  className: "comments-meta",
                                  children: a.jsxs("h4", {
                                    children: [
                                      "Ashton Porter ",
                                      a.jsx("span", {
                                        children: "Jan 01, 2022 at 8:00",
                                      }),
                                    ],
                                  }),
                                }),
                                a.jsxs("div", {
                                  className: "comment-area",
                                  children: [
                                    a.jsx("p", {
                                      children:
                                        "You guys have put so much work, effort, and time while designing this awesome theme I can see that passion when I incorporated it into my website.",
                                    }),
                                    a.jsx("a", {
                                      href: "#",
                                      className: "reply",
                                      children: "Reply",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        a.jsx("ul", {
                          className: "children",
                          children: a.jsx("li", {
                            className: "comment",
                            children: a.jsxs("div", {
                              className: "comment-inner",
                              children: [
                                a.jsx("div", {
                                  className: "comment-thumb",
                                  children: a.jsx("img", {
                                    src: ju,
                                    alt: "img",
                                  }),
                                }),
                                a.jsxs("div", {
                                  className: "comment-wrap",
                                  children: [
                                    a.jsx("div", {
                                      className: "comments-meta",
                                      children: a.jsxs("h4", {
                                        children: [
                                          "Melania Trump ",
                                          a.jsx("span", {
                                            children: "Jan 01, 2022 at 8:00",
                                          }),
                                        ],
                                      }),
                                    }),
                                    a.jsxs("div", {
                                      className: "comment-area",
                                      children: [
                                        a.jsx("p", {
                                          children:
                                            "The only thing I LOVE more than this theme and it’s incredible options is the support team! They are freaking amazable!",
                                        }),
                                        a.jsx("a", {
                                          href: "#",
                                          className: "reply",
                                          children: "Reply",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                    a.jsx("li", {
                      className: "comment",
                      children: a.jsxs("div", {
                        className: "comment-inner",
                        children: [
                          a.jsx("div", {
                            className: "comment-thumb",
                            children: a.jsx("img", { src: sv, alt: "img" }),
                          }),
                          a.jsxs("div", {
                            className: "comment-wrap",
                            children: [
                              a.jsx("div", {
                                className: "comments-meta",
                                children: a.jsxs("h4", {
                                  children: [
                                    "Elliot Alderson ",
                                    a.jsx("span", {
                                      children: "Jan 01, 2022 at 8:00",
                                    }),
                                  ],
                                }),
                              }),
                              a.jsxs("div", {
                                className: "comment-area",
                                children: [
                                  a.jsx("p", {
                                    children:
                                      "Outstanding quality in this theme, brilliant Effects and perfect crafted Code. We absolutely love it and can highly recommend ThemeEaster!",
                                  }),
                                  a.jsx("a", {
                                    href: "#",
                                    className: "reply",
                                    children: "Reply",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                a.jsx("h3", {
                  className: "comment-title",
                  children: "Leave a Comment",
                }),
                a.jsx("form", {
                  action: "#",
                  method: "post",
                  className: "comment-form form-horizontal",
                  children: a.jsxs("div", {
                    className: "form-group row",
                    children: [
                      a.jsx("div", {
                        className: "col-sm-6 padding-15",
                        children: a.jsx("input", {
                          type: "text",
                          id: "name",
                          name: "name",
                          className: "form-control",
                          placeholder: "Name*",
                          required: !0,
                        }),
                      }),
                      a.jsx("div", {
                        className: "col-sm-6 padding-15",
                        children: a.jsx("input", {
                          type: "text",
                          id: "email",
                          name: "email",
                          className: "form-control",
                          placeholder: "Email*",
                          required: !0,
                        }),
                      }),
                      a.jsx("div", {
                        className: "col-md-12 padding-15",
                        children: a.jsx("textarea", {
                          id: "comment",
                          name: "comment",
                          cols: 30,
                          rows: 5,
                          className: "form-control comment",
                          placeholder: "Your Comment*",
                          required: !0,
                        }),
                      }),
                      a.jsxs("div", {
                        className: "col-md-12 padding-15",
                        children: [
                          a.jsxs("button", {
                            id: "submit",
                            className: "default-btn",
                            type: "submit",
                            children: ["Submit Comment", a.jsx("span", {})],
                          }),
                          a.jsx("div", {
                            id: "form-messages",
                            className: "alert",
                            role: "alert",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
      a.jsx(ft, {}),
    ],
  });
}
const iv = "/assets/sign-CQJarbUT.png";
var Ci = {},
  Oi = { exports: {} },
  pb = Oi.exports,
  Pm;
function vb() {
  return (
    Pm ||
      ((Pm = 1),
      (function (s, c) {
        (function (r, n) {
          n(c);
        })(pb, function (r) {
          var n = function () {
              return (
                (n =
                  Object.assign ||
                  function (d) {
                    for (var p, x = 1, h = arguments.length; x < h; x++)
                      for (var m in (p = arguments[x]))
                        Object.prototype.hasOwnProperty.call(p, m) &&
                          (d[m] = p[m]);
                    return d;
                  }),
                n.apply(this, arguments)
              );
            },
            f = (function () {
              function d(p, x, h) {
                var m = this;
                ((this.endVal = x),
                  (this.options = h),
                  (this.version = "2.9.0"),
                  (this.defaults = {
                    startVal: 0,
                    decimalPlaces: 0,
                    duration: 2,
                    useEasing: !0,
                    useGrouping: !0,
                    useIndianSeparators: !1,
                    smartEasingThreshold: 999,
                    smartEasingAmount: 333,
                    separator: ",",
                    decimal: ".",
                    prefix: "",
                    suffix: "",
                    enableScrollSpy: !1,
                    scrollSpyDelay: 200,
                    scrollSpyOnce: !1,
                  }),
                  (this.finalEndVal = null),
                  (this.useEasing = !0),
                  (this.countDown = !1),
                  (this.error = ""),
                  (this.startVal = 0),
                  (this.paused = !0),
                  (this.once = !1),
                  (this.count = function (j) {
                    m.startTime || (m.startTime = j);
                    var g = j - m.startTime;
                    ((m.remaining = m.duration - g),
                      m.useEasing
                        ? m.countDown
                          ? (m.frameVal =
                              m.startVal -
                              m.easingFn(
                                g,
                                0,
                                m.startVal - m.endVal,
                                m.duration,
                              ))
                          : (m.frameVal = m.easingFn(
                              g,
                              m.startVal,
                              m.endVal - m.startVal,
                              m.duration,
                            ))
                        : (m.frameVal =
                            m.startVal +
                            (m.endVal - m.startVal) * (g / m.duration)));
                    var N = m.countDown
                      ? m.frameVal < m.endVal
                      : m.frameVal > m.endVal;
                    ((m.frameVal = N ? m.endVal : m.frameVal),
                      (m.frameVal = Number(
                        m.frameVal.toFixed(m.options.decimalPlaces),
                      )),
                      m.printValue(m.frameVal),
                      g < m.duration
                        ? (m.rAF = requestAnimationFrame(m.count))
                        : m.finalEndVal !== null
                          ? m.update(m.finalEndVal)
                          : m.options.onCompleteCallback &&
                            m.options.onCompleteCallback());
                  }),
                  (this.formatNumber = function (j) {
                    var g,
                      N,
                      b,
                      E,
                      M = j < 0 ? "-" : "";
                    g = Math.abs(j).toFixed(m.options.decimalPlaces);
                    var A = (g += "").split(".");
                    if (
                      ((N = A[0]),
                      (b = A.length > 1 ? m.options.decimal + A[1] : ""),
                      m.options.useGrouping)
                    ) {
                      E = "";
                      for (var S = 3, w = 0, z = 0, J = N.length; z < J; ++z)
                        (m.options.useIndianSeparators &&
                          z === 4 &&
                          ((S = 2), (w = 1)),
                          z !== 0 &&
                            w % S == 0 &&
                            (E = m.options.separator + E),
                          w++,
                          (E = N[J - z - 1] + E));
                      N = E;
                    }
                    return (
                      m.options.numerals &&
                        m.options.numerals.length &&
                        ((N = N.replace(/[0-9]/g, function ($) {
                          return m.options.numerals[+$];
                        })),
                        (b = b.replace(/[0-9]/g, function ($) {
                          return m.options.numerals[+$];
                        }))),
                      M + m.options.prefix + N + b + m.options.suffix
                    );
                  }),
                  (this.easeOutExpo = function (j, g, N, b) {
                    return (
                      (N * (1 - Math.pow(2, (-10 * j) / b)) * 1024) / 1023 + g
                    );
                  }),
                  (this.options = n(n({}, this.defaults), h)),
                  (this.formattingFn = this.options.formattingFn
                    ? this.options.formattingFn
                    : this.formatNumber),
                  (this.easingFn = this.options.easingFn
                    ? this.options.easingFn
                    : this.easeOutExpo),
                  (this.el =
                    typeof p == "string" ? document.getElementById(p) : p),
                  (x = x ?? this.parse(this.el.innerHTML)),
                  (this.startVal = this.validateValue(this.options.startVal)),
                  (this.frameVal = this.startVal),
                  (this.endVal = this.validateValue(x)),
                  (this.options.decimalPlaces = Math.max(
                    this.options.decimalPlaces,
                  )),
                  this.resetDuration(),
                  (this.options.separator = String(this.options.separator)),
                  (this.useEasing = this.options.useEasing),
                  this.options.separator === "" &&
                    (this.options.useGrouping = !1),
                  this.el
                    ? this.printValue(this.startVal)
                    : (this.error = "[CountUp] target is null or undefined"),
                  typeof window < "u" &&
                    this.options.enableScrollSpy &&
                    (this.error
                      ? console.error(this.error, p)
                      : ((window.onScrollFns = window.onScrollFns || []),
                        window.onScrollFns.push(function () {
                          return m.handleScroll(m);
                        }),
                        (window.onscroll = function () {
                          window.onScrollFns.forEach(function (j) {
                            return j();
                          });
                        }),
                        this.handleScroll(this))));
              }
              return (
                (d.prototype.handleScroll = function (p) {
                  if (p && window && !p.once) {
                    var x = window.innerHeight + window.scrollY,
                      h = p.el.getBoundingClientRect(),
                      m = h.top + window.pageYOffset,
                      j = h.top + h.height + window.pageYOffset;
                    j < x && j > window.scrollY && p.paused
                      ? ((p.paused = !1),
                        setTimeout(function () {
                          return p.start();
                        }, p.options.scrollSpyDelay),
                        p.options.scrollSpyOnce && (p.once = !0))
                      : (window.scrollY > j || m > x) && !p.paused && p.reset();
                  }
                }),
                (d.prototype.determineDirectionAndSmartEasing = function () {
                  var p = this.finalEndVal ? this.finalEndVal : this.endVal;
                  this.countDown = this.startVal > p;
                  var x = p - this.startVal;
                  if (
                    Math.abs(x) > this.options.smartEasingThreshold &&
                    this.options.useEasing
                  ) {
                    this.finalEndVal = p;
                    var h = this.countDown ? 1 : -1;
                    ((this.endVal = p + h * this.options.smartEasingAmount),
                      (this.duration = this.duration / 2));
                  } else ((this.endVal = p), (this.finalEndVal = null));
                  this.finalEndVal !== null
                    ? (this.useEasing = !1)
                    : (this.useEasing = this.options.useEasing);
                }),
                (d.prototype.start = function (p) {
                  this.error ||
                    (this.options.onStartCallback &&
                      this.options.onStartCallback(),
                    p && (this.options.onCompleteCallback = p),
                    this.duration > 0
                      ? (this.determineDirectionAndSmartEasing(),
                        (this.paused = !1),
                        (this.rAF = requestAnimationFrame(this.count)))
                      : this.printValue(this.endVal));
                }),
                (d.prototype.pauseResume = function () {
                  (this.paused
                    ? ((this.startTime = null),
                      (this.duration = this.remaining),
                      (this.startVal = this.frameVal),
                      this.determineDirectionAndSmartEasing(),
                      (this.rAF = requestAnimationFrame(this.count)))
                    : cancelAnimationFrame(this.rAF),
                    (this.paused = !this.paused));
                }),
                (d.prototype.reset = function () {
                  (cancelAnimationFrame(this.rAF),
                    (this.paused = !0),
                    this.resetDuration(),
                    (this.startVal = this.validateValue(this.options.startVal)),
                    (this.frameVal = this.startVal),
                    this.printValue(this.startVal));
                }),
                (d.prototype.update = function (p) {
                  (cancelAnimationFrame(this.rAF),
                    (this.startTime = null),
                    (this.endVal = this.validateValue(p)),
                    this.endVal !== this.frameVal &&
                      ((this.startVal = this.frameVal),
                      this.finalEndVal == null && this.resetDuration(),
                      (this.finalEndVal = null),
                      this.determineDirectionAndSmartEasing(),
                      (this.rAF = requestAnimationFrame(this.count))));
                }),
                (d.prototype.printValue = function (p) {
                  var x;
                  if (this.el) {
                    var h = this.formattingFn(p);
                    !((x = this.options.plugin) === null || x === void 0) &&
                    x.render
                      ? this.options.plugin.render(this.el, h)
                      : this.el.tagName === "INPUT"
                        ? (this.el.value = h)
                        : this.el.tagName === "text" ||
                            this.el.tagName === "tspan"
                          ? (this.el.textContent = h)
                          : (this.el.innerHTML = h);
                  }
                }),
                (d.prototype.ensureNumber = function (p) {
                  return typeof p == "number" && !isNaN(p);
                }),
                (d.prototype.validateValue = function (p) {
                  var x = Number(p);
                  return this.ensureNumber(x)
                    ? x
                    : ((this.error =
                        "[CountUp] invalid start or end value: ".concat(p)),
                      null);
                }),
                (d.prototype.resetDuration = function () {
                  ((this.startTime = null),
                    (this.duration = 1e3 * Number(this.options.duration)),
                    (this.remaining = this.duration));
                }),
                (d.prototype.parse = function (p) {
                  var x = function (g) {
                      return g.replace(/([.,'  ])/g, "\\$1");
                    },
                    h = x(this.options.separator),
                    m = x(this.options.decimal),
                    j = p
                      .replace(new RegExp(h, "g"), "")
                      .replace(new RegExp(m, "g"), ".");
                  return parseFloat(j);
                }),
                d
              );
            })();
          r.CountUp = f;
        });
      })(Oi, Oi.exports)),
    Oi.exports
  );
}
var Wm;
function gb() {
  if (Wm) return Ci;
  ((Wm = 1), Object.defineProperty(Ci, "__esModule", { value: !0 }));
  var s = hr(),
    c = vb();
  function r(T, G) {
    var L =
      T == null
        ? null
        : (typeof Symbol < "u" && T[Symbol.iterator]) || T["@@iterator"];
    if (L != null) {
      var _,
        B,
        ae,
        te,
        ce = [],
        U = !0,
        X = !1;
      try {
        if (((ae = (L = L.call(T)).next), G !== 0))
          for (
            ;
            !(U = (_ = ae.call(L)).done) && (ce.push(_.value), ce.length !== G);
            U = !0
          );
      } catch (Q) {
        ((X = !0), (B = Q));
      } finally {
        try {
          if (!U && L.return != null && ((te = L.return()), Object(te) !== te))
            return;
        } finally {
          if (X) throw B;
        }
      }
      return ce;
    }
  }
  function n(T, G) {
    var L = Object.keys(T);
    if (Object.getOwnPropertySymbols) {
      var _ = Object.getOwnPropertySymbols(T);
      (G &&
        (_ = _.filter(function (B) {
          return Object.getOwnPropertyDescriptor(T, B).enumerable;
        })),
        L.push.apply(L, _));
    }
    return L;
  }
  function f(T) {
    for (var G = 1; G < arguments.length; G++) {
      var L = arguments[G] != null ? arguments[G] : {};
      G % 2
        ? n(Object(L), !0).forEach(function (_) {
            x(T, _, L[_]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(T, Object.getOwnPropertyDescriptors(L))
          : n(Object(L)).forEach(function (_) {
              Object.defineProperty(
                T,
                _,
                Object.getOwnPropertyDescriptor(L, _),
              );
            });
    }
    return T;
  }
  function d(T, G) {
    if (typeof T != "object" || !T) return T;
    var L = T[Symbol.toPrimitive];
    if (L !== void 0) {
      var _ = L.call(T, G);
      if (typeof _ != "object") return _;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (G === "string" ? String : Number)(T);
  }
  function p(T) {
    var G = d(T, "string");
    return typeof G == "symbol" ? G : String(G);
  }
  function x(T, G, L) {
    return (
      (G = p(G)),
      G in T
        ? Object.defineProperty(T, G, {
            value: L,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (T[G] = L),
      T
    );
  }
  function h() {
    return (
      (h = Object.assign
        ? Object.assign.bind()
        : function (T) {
            for (var G = 1; G < arguments.length; G++) {
              var L = arguments[G];
              for (var _ in L)
                Object.prototype.hasOwnProperty.call(L, _) && (T[_] = L[_]);
            }
            return T;
          }),
      h.apply(this, arguments)
    );
  }
  function m(T, G) {
    if (T == null) return {};
    var L = {},
      _ = Object.keys(T),
      B,
      ae;
    for (ae = 0; ae < _.length; ae++)
      ((B = _[ae]), !(G.indexOf(B) >= 0) && (L[B] = T[B]));
    return L;
  }
  function j(T, G) {
    if (T == null) return {};
    var L = m(T, G),
      _,
      B;
    if (Object.getOwnPropertySymbols) {
      var ae = Object.getOwnPropertySymbols(T);
      for (B = 0; B < ae.length; B++)
        ((_ = ae[B]),
          !(G.indexOf(_) >= 0) &&
            Object.prototype.propertyIsEnumerable.call(T, _) &&
            (L[_] = T[_]));
    }
    return L;
  }
  function g(T, G) {
    return N(T) || r(T, G) || b(T, G) || M();
  }
  function N(T) {
    if (Array.isArray(T)) return T;
  }
  function b(T, G) {
    if (T) {
      if (typeof T == "string") return E(T, G);
      var L = Object.prototype.toString.call(T).slice(8, -1);
      if (
        (L === "Object" && T.constructor && (L = T.constructor.name),
        L === "Map" || L === "Set")
      )
        return Array.from(T);
      if (
        L === "Arguments" ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(L)
      )
        return E(T, G);
    }
  }
  function E(T, G) {
    (G == null || G > T.length) && (G = T.length);
    for (var L = 0, _ = new Array(G); L < G; L++) _[L] = T[L];
    return _;
  }
  function M() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var A =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u"
      ? s.useLayoutEffect
      : s.useEffect;
  function S(T) {
    var G = s.useRef(T);
    return (
      A(function () {
        G.current = T;
      }),
      s.useCallback(function () {
        for (var L = arguments.length, _ = new Array(L), B = 0; B < L; B++)
          _[B] = arguments[B];
        return G.current.apply(void 0, _);
      }, [])
    );
  }
  var w = function (G, L) {
      var _ = L.decimal,
        B = L.decimals,
        ae = L.duration,
        te = L.easingFn,
        ce = L.end,
        U = L.formattingFn,
        X = L.numerals,
        Q = L.prefix,
        ie = L.separator,
        de = L.start,
        O = L.suffix,
        F = L.useEasing,
        le = L.useGrouping,
        se = L.useIndianSeparators,
        fe = L.enableScrollSpy,
        oe = L.scrollSpyDelay,
        me = L.scrollSpyOnce,
        je = L.plugin;
      return new c.CountUp(G, ce, {
        startVal: de,
        duration: ae,
        decimal: _,
        decimalPlaces: B,
        easingFn: te,
        formattingFn: U,
        numerals: X,
        separator: ie,
        prefix: Q,
        suffix: O,
        plugin: je,
        useEasing: F,
        useIndianSeparators: se,
        useGrouping: le,
        enableScrollSpy: fe,
        scrollSpyDelay: oe,
        scrollSpyOnce: me,
      });
    },
    z = [
      "ref",
      "startOnMount",
      "enableReinitialize",
      "delay",
      "onEnd",
      "onStart",
      "onPauseResume",
      "onReset",
      "onUpdate",
    ],
    J = {
      decimal: ".",
      separator: ",",
      delay: null,
      prefix: "",
      suffix: "",
      duration: 2,
      start: 0,
      decimals: 0,
      startOnMount: !0,
      enableReinitialize: !0,
      useEasing: !0,
      useGrouping: !0,
      useIndianSeparators: !1,
    },
    $ = function (G) {
      var L = Object.fromEntries(
          Object.entries(G).filter(function (we) {
            var ve = g(we, 2),
              Ge = ve[1];
            return Ge !== void 0;
          }),
        ),
        _ = s.useMemo(
          function () {
            return f(f({}, J), L);
          },
          [G],
        ),
        B = _.ref,
        ae = _.startOnMount,
        te = _.enableReinitialize,
        ce = _.delay,
        U = _.onEnd,
        X = _.onStart,
        Q = _.onPauseResume,
        ie = _.onReset,
        de = _.onUpdate,
        O = j(_, z),
        F = s.useRef(),
        le = s.useRef(),
        se = s.useRef(!1),
        fe = S(function () {
          return w(typeof B == "string" ? B : B.current, O);
        }),
        oe = S(function (we) {
          var ve = F.current;
          if (ve && !we) return ve;
          var Ge = fe();
          return ((F.current = Ge), Ge);
        }),
        me = S(function () {
          var we = function () {
            return oe(!0).start(function () {
              U?.({ pauseResume: je, reset: xe, start: Fe, update: Je });
            });
          };
          (ce && ce > 0 ? (le.current = setTimeout(we, ce * 1e3)) : we(),
            X?.({ pauseResume: je, reset: xe, update: Je }));
        }),
        je = S(function () {
          (oe().pauseResume(), Q?.({ reset: xe, start: Fe, update: Je }));
        }),
        xe = S(function () {
          oe().el &&
            (le.current && clearTimeout(le.current),
            oe().reset(),
            ie?.({ pauseResume: je, start: Fe, update: Je }));
        }),
        Je = S(function (we) {
          (oe().update(we), de?.({ pauseResume: je, reset: xe, start: Fe }));
        }),
        Fe = S(function () {
          (xe(), me());
        }),
        et = S(function (we) {
          ae && (we && xe(), me());
        });
      return (
        s.useEffect(
          function () {
            se.current ? te && et(!0) : ((se.current = !0), et());
          },
          [
            te,
            se,
            et,
            ce,
            G.start,
            G.suffix,
            G.prefix,
            G.duration,
            G.separator,
            G.decimals,
            G.decimal,
            G.formattingFn,
          ],
        ),
        s.useEffect(
          function () {
            return function () {
              xe();
            };
          },
          [xe],
        ),
        { start: Fe, pauseResume: je, reset: xe, update: Je, getCountUp: oe }
      );
    },
    ee = ["className", "redraw", "containerProps", "children", "style"],
    K = function (G) {
      var L = G.className,
        _ = G.redraw,
        B = G.containerProps,
        ae = G.children,
        te = G.style,
        ce = j(G, ee),
        U = s.useRef(null),
        X = s.useRef(!1),
        Q = $(
          f(
            f({}, ce),
            {},
            {
              ref: U,
              startOnMount: typeof ae != "function" || G.delay === 0,
              enableReinitialize: !1,
            },
          ),
        ),
        ie = Q.start,
        de = Q.reset,
        O = Q.update,
        F = Q.pauseResume,
        le = Q.getCountUp,
        se = S(function () {
          ie();
        }),
        fe = S(function (je) {
          (G.preserveValue || de(), O(je));
        }),
        oe = S(function () {
          if (
            typeof G.children == "function" &&
            !(U.current instanceof Element)
          ) {
            console.error(
              `Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`,
            );
            return;
          }
          le();
        });
      (s.useEffect(
        function () {
          oe();
        },
        [oe],
      ),
        s.useEffect(
          function () {
            X.current && fe(G.end);
          },
          [G.end, fe],
        ));
      var me = _ && G;
      return (
        s.useEffect(
          function () {
            _ && X.current && se();
          },
          [se, _, me],
        ),
        s.useEffect(
          function () {
            !_ && X.current && se();
          },
          [
            se,
            _,
            G.start,
            G.suffix,
            G.prefix,
            G.duration,
            G.separator,
            G.decimals,
            G.decimal,
            G.className,
            G.formattingFn,
          ],
        ),
        s.useEffect(function () {
          X.current = !0;
        }, []),
        typeof ae == "function"
          ? ae({
              countUpRef: U,
              start: ie,
              reset: de,
              update: O,
              pauseResume: F,
              getCountUp: le,
            })
          : s.createElement(
              "span",
              h({ className: L, ref: U, style: te }, B),
              typeof G.start < "u" ? le().formattingFn(G.start) : "",
            )
      );
    };
  return ((Ci.default = K), (Ci.useCountUp = $), Ci);
}
var xb = gb();
const lr = fr(xb),
  Ra = {
    name: "Galactic Squad",
    wins: 149,
    draws: 25,
    loses: 85,
    players: 40,
    quote:
      "Online gaming is simply the playing of a video game over the internet, usually with friends. Online games can be played on any number of devices from dedicated video games consoles.",
    img: Hi,
    sign: iv,
  };
function jb() {
  return a.jsxs("div", {
    className: "body",
    children: [
      a.jsxs("section", {
        className: "page-header team-details",
        children: [
          a.jsxs("div", {
            className: "page-header-shape",
            children: [
              a.jsx("div", { className: "shape" }),
              a.jsx("div", { className: "shape center" }),
              a.jsx("div", { className: "shape center back" }),
              a.jsx("div", { className: "shape right" }),
            ],
          }),
          a.jsx("div", {
            className: "container",
            children: a.jsxs("div", {
              className: "page-header-info",
              children: [
                a.jsx("img", { src: Ra.img, alt: "team" }),
                a.jsx("h2", { children: Ra.name }),
              ],
            }),
          }),
        ],
      }),
      a.jsx("div", {
        className: "team-details-info",
        children: a.jsx("div", {
          className: "container",
          children: a.jsxs("div", {
            className: "team-details-wrap",
            children: [
              a.jsxs("ul", {
                className: "social-list",
                children: [
                  a.jsx("li", { children: "Follow:" }),
                  a.jsx("li", {
                    children: a.jsx("a", {
                      href: "#",
                      children: a.jsx("i", { className: "fab fa-facebook-f" }),
                    }),
                  }),
                  a.jsx("li", {
                    children: a.jsx("a", {
                      href: "#",
                      children: a.jsx("i", { className: "fab fa-twitter" }),
                    }),
                  }),
                  a.jsx("li", {
                    children: a.jsx("a", {
                      href: "#",
                      children: a.jsx("i", { className: "fab fa-youtube" }),
                    }),
                  }),
                ],
              }),
              a.jsxs("ul", {
                className: "team-counter",
                children: [
                  a.jsxs("li", {
                    className: "counter-list",
                    children: [
                      a.jsx("h3", {
                        children: a.jsx(lr, {
                          className: "odometer",
                          end: Ra.wins,
                        }),
                      }),
                      a.jsx("h4", { children: "Matches Win" }),
                    ],
                  }),
                  a.jsxs("li", {
                    className: "counter-list",
                    children: [
                      a.jsx("h3", {
                        children: a.jsx(lr, {
                          className: "odometer",
                          end: Ra.draws,
                        }),
                      }),
                      a.jsx("h4", { children: "Draws" }),
                    ],
                  }),
                  a.jsxs("li", {
                    className: "counter-list",
                    children: [
                      a.jsx("h3", {
                        children: a.jsx(lr, {
                          className: "odometer",
                          end: Ra.loses,
                        }),
                      }),
                      a.jsx("h4", { children: "Game Loses" }),
                    ],
                  }),
                  a.jsxs("li", {
                    className: "counter-list",
                    children: [
                      a.jsx("h3", {
                        children: a.jsx(lr, {
                          className: "odometer",
                          end: Ra.players,
                        }),
                      }),
                      a.jsx("h4", { children: "Players" }),
                    ],
                  }),
                ],
              }),
              a.jsxs("ul", {
                className: "rating",
                children: [
                  a.jsx("li", { children: "Ratings:" }),
                  a.jsx("li", {
                    children: a.jsx("i", { className: "las la-star" }),
                  }),
                  a.jsx("li", {
                    children: a.jsx("i", { className: "las la-star" }),
                  }),
                  a.jsx("li", {
                    children: a.jsx("i", { className: "las la-star" }),
                  }),
                  a.jsx("li", {
                    children: a.jsx("i", { className: "las la-star" }),
                  }),
                  a.jsx("li", {
                    children: a.jsx("i", { className: "las la-star" }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      a.jsx("section", {
        className: "about-team-section padding-top padding-bottom",
        children: a.jsx("div", {
          className: "container",
          children: a.jsx("div", {
            className: "row",
            children: a.jsx("div", {
              className: "col-lg-8 offset-lg-2",
              children: a.jsxs("div", {
                className: "section-heading text-center",
                children: [
                  a.jsxs("h3", { children: ["About ", Ra.name] }),
                  a.jsxs("h2", {
                    children: [
                      "About The ",
                      a.jsx("span", { children: "Team" }),
                    ],
                  }),
                  a.jsx("p", { children: Ra.quote }),
                  a.jsx("img", { src: Ra.sign, alt: "sign" }),
                ],
              }),
            }),
          }),
        }),
      }),
      a.jsx(Gi, {}),
      a.jsx(vr, {}),
      a.jsx(Cs, { noPadding: !0 }),
      a.jsx(ft, {}),
    ],
  });
}
const yb = "/assets/team-thumb-aiLpEYw3.jpg",
  bb = "/assets/player-thumb-Bk5z8scV.jpg",
  Sb = "/assets/usa-flag-i8zwgKDu.svg",
  ia = {
    name: "Félix Lengyel",
    game: "Valorant",
    team: "Galactic Squad",
    nationality: "USA",
    age: 24,
    joined: "Jan 01 2023",
    quote:
      "Online gaming is simply the playing of a video game over the internet, usually with friends. Online games can be played on any number of devices from dedicated video games consoles.",
    teamThumb: yb,
    playerThumb: bb,
    teamImg: Hi,
    playerSign: iv,
  },
  Nb = [
    {
      game: "Counter Strike",
      date: "Jan 01 2022",
      img: Bl,
      link: "https://www.youtube.com/watch?v=tv7LfFeamsc",
    },
    {
      game: "Call of Duty",
      date: "Jan 01 2022",
      img: Ms,
      link: "https://www.youtube.com/watch?v=tv7LfFeamsc",
    },
    {
      game: "StarCraft II",
      date: "Jan 01 2022",
      img: qi,
      link: "https://www.youtube.com/watch?v=tv7LfFeamsc",
    },
  ];
function wb() {
  return a.jsxs("div", {
    className: "body",
    children: [
      a.jsxs("section", {
        className: "page-header team-details",
        children: [
          a.jsxs("div", {
            className: "page-header-shape",
            children: [
              a.jsx("div", { className: "shape" }),
              a.jsx("div", { className: "shape center" }),
              a.jsx("div", { className: "shape center back" }),
              a.jsx("div", { className: "shape right" }),
            ],
          }),
          a.jsx("div", {
            className: "container",
            children: a.jsxs("div", {
              className: "page-header-info player-details",
              children: [
                a.jsx("div", {
                  className: "player-thumb",
                  children: a.jsx("img", { src: ia.teamThumb, alt: "team" }),
                }),
                a.jsxs("h2", {
                  children: [
                    ia.name,
                    " ",
                    a.jsx("span", { children: ia.game }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      a.jsx("div", {
        className: "team-details-info player-details",
        children: a.jsx("div", {
          className: "container",
          children: a.jsxs("div", {
            className: "team-details-wrap",
            children: [
              a.jsxs("div", {
                className: "player-team",
                children: [
                  a.jsx("a", {
                    href: "#",
                    children: a.jsx("img", { src: ia.teamImg, alt: "logo" }),
                  }),
                  a.jsx("h3", {
                    children: a.jsx("a", { href: "#", children: ia.team }),
                  }),
                ],
              }),
              a.jsxs("ul", {
                className: "social-list",
                children: [
                  a.jsx("li", { children: "Follow Me:" }),
                  a.jsx("li", {
                    children: a.jsx("a", {
                      href: "#",
                      children: a.jsx("i", { className: "fab fa-facebook-f" }),
                    }),
                  }),
                  a.jsx("li", {
                    children: a.jsx("a", {
                      href: "#",
                      children: a.jsx("i", { className: "fab fa-twitter" }),
                    }),
                  }),
                  a.jsx("li", {
                    children: a.jsx("a", {
                      href: "#",
                      children: a.jsx("i", { className: "fab fa-youtube" }),
                    }),
                  }),
                ],
              }),
              a.jsxs("ul", {
                className: "player-info",
                children: [
                  a.jsxs("li", {
                    children: [
                      a.jsxs("div", {
                        children: [
                          a.jsx("img", {
                            className: "flag",
                            src: Sb,
                            alt: "flag",
                          }),
                          " ",
                          a.jsx("span", { children: ia.nationality }),
                        ],
                      }),
                      a.jsx("h4", { children: "Nationality" }),
                    ],
                  }),
                  a.jsxs("li", {
                    children: [
                      a.jsxs("div", {
                        children: [
                          a.jsx("i", { className: "las la-user" }),
                          a.jsx("span", { children: "Age" }),
                        ],
                      }),
                      a.jsxs("h4", { children: [ia.age, " Years"] }),
                    ],
                  }),
                  a.jsxs("li", {
                    children: [
                      a.jsxs("div", {
                        children: [
                          a.jsx("i", { className: "las la-calendar" }),
                          a.jsx("span", { children: "Join" }),
                        ],
                      }),
                      a.jsx("h4", { children: ia.joined }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      a.jsx("section", {
        className: "about-team-section padding-top",
        children: a.jsx("div", {
          className: "container",
          children: a.jsxs("div", {
            className: "row align-items-center",
            children: [
              a.jsx("div", {
                className: "col-md-6 sm-padding",
                children: a.jsxs("div", {
                  className: "section-heading",
                  children: [
                    a.jsx("h3", { children: "About Me" }),
                    a.jsxs("h2", {
                      children: [
                        "About The ",
                        a.jsx("span", { children: "Player" }),
                      ],
                    }),
                    a.jsx("p", { children: ia.quote }),
                    a.jsx("img", { src: ia.playerSign, alt: "sign" }),
                  ],
                }),
              }),
              a.jsx("div", {
                className: "col-md-6 sm-padding",
                children: a.jsx("div", {
                  className: "player-thumb",
                  children: a.jsx("img", { src: ia.playerThumb, alt: "img" }),
                }),
              }),
            ],
          }),
        }),
      }),
      a.jsx("section", {
        className: "latest-gameplay padding",
        children: a.jsxs("div", {
          className: "container",
          children: [
            a.jsxs("div", {
              className: "section-heading text-center mb-40",
              children: [
                a.jsx("h3", { children: "Latest Gameplay" }),
                a.jsxs("h2", {
                  children: [
                    "Watch My ",
                    a.jsx("span", { children: "Gameplay" }),
                  ],
                }),
                a.jsxs("p", {
                  children: [
                    "Our success in creating business solutions is due in large part",
                    " ",
                    a.jsx("br", {}),
                    "to our talented and highly committed team.",
                  ],
                }),
              ],
            }),
            a.jsx("div", {
              className: "row",
              children: Nb.map((s) =>
                a.jsx("div", {
                  className: "col-lg-4 col-md-6 sm-padding",
                  children: a.jsxs("div", {
                    className: "gameplay-card",
                    children: [
                      a.jsx("img", { src: s.img, alt: "thumb" }),
                      a.jsx(fu, { youtubeId: "tv7LfFeamsc" }),
                      a.jsxs("div", {
                        className: "gameplay-info",
                        children: [
                          a.jsx("ul", {
                            className: "post-meta",
                            children: a.jsxs("li", {
                              children: [
                                a.jsx("i", { className: "las la-calendar" }),
                                s.date,
                              ],
                            }),
                          }),
                          a.jsx("h2", { children: s.game }),
                        ],
                      }),
                    ],
                  }),
                }),
              ),
            }),
          ],
        }),
      }),
      a.jsx(Cs, { noPadding: !0 }),
      a.jsx(ft, {}),
    ],
  });
}
function Im() {
  return a.jsxs("div", {
    className: "body",
    children: [
      a.jsxs("section", {
        className: "page-header error404",
        children: [
          a.jsxs("div", {
            className: "page-header-shape",
            children: [
              a.jsx("div", { className: "shape" }),
              a.jsx("div", { className: "shape center" }),
              a.jsx("div", { className: "shape center back" }),
              a.jsx("div", { className: "shape right" }),
            ],
          }),
          a.jsx("div", {
            className: "container",
            children: a.jsxs("div", {
              className: "page-header-info",
              children: [
                a.jsx("h4", { children: "Oops! Where are we?" }),
                a.jsx("h2", { children: "404 Page Not Found!" }),
                a.jsxs("p", {
                  children: [
                    "Page not Found! The page you are looking for was moved, ",
                    a.jsx("br", {}),
                    "removed, renamed or might never existed.",
                  ],
                }),
                a.jsx(ne, {
                  to: "/",
                  className: "default-btn mt-30",
                  children: "Back to Homepage",
                }),
              ],
            }),
          }),
        ],
      }),
      a.jsx(ft, {}),
    ],
  });
}
function Tb() {
  return a.jsxs("div", {
    className: "body",
    children: [
      a.jsxs("section", {
        className: "page-header",
        children: [
          a.jsxs("div", {
            className: "page-header-shape",
            children: [
              a.jsx("div", { className: "shape" }),
              a.jsx("div", { className: "shape center" }),
              a.jsx("div", { className: "shape center back" }),
              a.jsx("div", { className: "shape right" }),
            ],
          }),
          a.jsx("div", {
            className: "container",
            children: a.jsxs("div", {
              className: "page-header-info",
              children: [
                a.jsx("h4", { children: "Our Sponsors" }),
                a.jsx("h2", { children: "Tournament Sponsors" }),
                a.jsxs("p", {
                  children: [
                    "Our success in creating business solutions is due in large part",
                    " ",
                    a.jsx("br", {}),
                    "to our talented and highly committed team.",
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      a.jsx("div", {
        className: "sponsor-section padding-top",
        children: a.jsx("div", {
          className: "container",
          children: a.jsxs("div", {
            className: "sponsor-grid",
            children: [
              a.jsxs("div", {
                className: "sponsor-item",
                children: [
                  " ",
                  a.jsx("a", {
                    href: "#",
                    children: a.jsx("img", { src: lu, alt: "sponsor" }),
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "sponsor-item",
                children: [
                  " ",
                  a.jsx("a", {
                    href: "#",
                    children: a.jsx("img", { src: su, alt: "sponsor" }),
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "sponsor-item",
                children: [
                  " ",
                  a.jsx("a", {
                    href: "#",
                    children: a.jsx("img", { src: iu, alt: "sponsor" }),
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "sponsor-item",
                children: [
                  " ",
                  a.jsx("a", {
                    href: "#",
                    children: a.jsx("img", { src: Kp, alt: "sponsor" }),
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "sponsor-item",
                children: [
                  " ",
                  a.jsx("a", {
                    href: "#",
                    children: a.jsx("img", { src: Pp, alt: "sponsor" }),
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "sponsor-item",
                children: [
                  " ",
                  a.jsx("a", {
                    href: "#",
                    children: a.jsx("img", { src: nu, alt: "sponsor" }),
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "sponsor-item",
                children: [
                  " ",
                  a.jsx("a", {
                    href: "#",
                    children: a.jsx("img", { src: iu, alt: "sponsor" }),
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "sponsor-item",
                children: [
                  " ",
                  a.jsx("a", {
                    href: "#",
                    children: a.jsx("img", { src: su, alt: "sponsor" }),
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "sponsor-item",
                children: [
                  " ",
                  a.jsx("a", {
                    href: "#",
                    children: a.jsx("img", { src: lu, alt: "sponsor" }),
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "sponsor-item",
                children: [
                  " ",
                  a.jsx("a", {
                    href: "#",
                    children: a.jsx("img", { src: nu, alt: "sponsor" }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      a.jsx(ft, {}),
    ],
  });
}
function Eb() {
  return a.jsxs("div", {
    className: "body",
    children: [
      a.jsxs("section", {
        className: "page-header",
        children: [
          a.jsxs("div", {
            className: "page-header-shape",
            children: [
              a.jsx("div", { className: "shape" }),
              a.jsx("div", { className: "shape center" }),
              a.jsx("div", { className: "shape center back" }),
              a.jsx("div", { className: "shape right" }),
            ],
          }),
          a.jsx("div", {
            className: "container",
            children: a.jsxs("div", {
              className: "page-header-info",
              children: [
                a.jsx("h4", { children: "Our Gamers" }),
                a.jsx("h2", { children: "Meet Our Gamers" }),
                a.jsxs("p", {
                  children: [
                    "Our success in creating business solutions is due in large part",
                    " ",
                    a.jsx("br", {}),
                    "to our talented and highly committed team.",
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      a.jsx(Gi, { noHeading: !0 }),
      a.jsx(vr, {}),
      a.jsx(Cs, {}),
      a.jsx("section", {
        className: "cta-section",
        children: a.jsx("div", {
          className: "container",
          children: a.jsxs("div", {
            className: "section-heading",
            children: [
              a.jsx("h3", { children: "Connect With Our Gaming Team!" }),
              a.jsxs("h2", {
                children: [
                  "Join with us for upcoming",
                  a.jsx("br", {}),
                  "gaming tournaments!",
                ],
              }),
              a.jsx("a", {
                href: "#",
                className: "default-btn",
                children: "Join Our Team",
              }),
            ],
          }),
        }),
      }),
      a.jsx(ft, {}),
    ],
  });
}
const Cb = "/assets/about-characters-qtq4D3Hg.png",
  Mb = [
    {
      category: "E-Football",
      title: "FIFA eWorld Cup 2022",
      time: "Dec.06.2019 - 02:30 pm",
      site: "twitch",
      img: tv,
      link: "https://www.youtube.com/watch?v=tv7LfFeamsc",
    },
    {
      category: "Counter Strike",
      title: "Legendary Battles",
      time: "Dec.06.2019 - 02:30 pm",
      site: "youtube",
      img: av,
      link: "https://www.youtube.com/watch?v=tv7LfFeamsc",
    },
    {
      category: "Valorant",
      title: "Global Championship ii",
      time: "Dec.06.2019 - 02:30 pm",
      site: "twitch",
      img: lv,
      link: "https://www.youtube.com/watch?v=tv7LfFeamsc",
    },
  ];
function Ob() {
  return a.jsxs("div", {
    className: "body",
    children: [
      a.jsxs("section", {
        className: "page-header",
        children: [
          a.jsxs("div", {
            className: "page-header-shape",
            children: [
              a.jsx("div", { className: "shape" }),
              a.jsx("div", { className: "shape center" }),
              a.jsx("div", { className: "shape center back" }),
              a.jsx("div", { className: "shape right" }),
            ],
          }),
          a.jsx("div", {
            className: "container",
            children: a.jsxs("div", {
              className: "page-header-info",
              children: [
                a.jsx("h4", { children: "About Us" }),
                a.jsx("h2", { children: "About Galactic Squad" }),
                a.jsxs("p", {
                  children: [
                    "Our success in creating business solutions is due in large part",
                    " ",
                    a.jsx("br", {}),
                    "to our talented and highly committed team.",
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      a.jsx("section", {
        className: "about-section padding",
        children: a.jsx("div", {
          className: "container",
          children: a.jsxs("div", {
            className: "row align-items-center",
            children: [
              a.jsx("div", {
                className: "col-md-6 sm-padding",
                children: a.jsx("div", {
                  className: "about-content",
                  children: a.jsxs("div", {
                    className: "section-heading",
                    children: [
                      a.jsx("h3", { children: "About Galactic Squad" }),
                      a.jsxs("h2", {
                        children: [
                          "The next ",
                          a.jsx("span", { children: "generation" }),
                          " of gaming is here.",
                        ],
                      }),
                      a.jsx("p", {
                        children:
                          "Online gaming is simply the playing of a video game over the internet, usually with friends. Online games can be played on any number of devices from dedicated video games consoles.",
                      }),
                      a.jsx("p", {
                        className: "mt-20",
                        children:
                          "For these reasons, it’s important that trusted adults educate themselves around what online gaming is and how they can ensure children play safely.",
                      }),
                      a.jsx(ne, {
                        to: "/contact",
                        className: "default-btn",
                        children: "Join Our Team",
                      }),
                    ],
                  }),
                }),
              }),
              a.jsx("div", {
                className: "col-md-6 sm-padding",
                children: a.jsx("img", { src: Cb, alt: "img" }),
              }),
            ],
          }),
        }),
      }),
      a.jsx("section", {
        className: "latest-matches padding-bottom",
        children: a.jsxs("div", {
          className: "container",
          children: [
            a.jsxs("div", {
              className: "section-heading-group mb-40",
              children: [
                a.jsxs("div", {
                  className: "section-heading",
                  children: [
                    a.jsx("h3", { children: "Our Gameplay" }),
                    a.jsxs("h2", {
                      children: [
                        "Our Recent ",
                        a.jsx("span", { children: "Gameplay" }),
                      ],
                    }),
                    a.jsxs("p", {
                      children: [
                        "Our success in creating business solutions is due in large part",
                        " ",
                        a.jsx("br", {}),
                        "to our talented and highly committed team.",
                      ],
                    }),
                  ],
                }),
                a.jsx("div", {
                  children: a.jsx(ne, {
                    to: "/upcoming-matches",
                    className: "default-btn",
                    children: "View All Matches",
                  }),
                }),
              ],
            }),
            Mb.map((s) =>
              a.jsx("div", {
                className: "latest-matches-lists",
                children: a.jsxs("div", {
                  className: "latest-matches-list",
                  children: [
                    a.jsx("div", {
                      className: "matches-thumb",
                      children: a.jsx("img", { src: s.img, alt: "thumb" }),
                    }),
                    a.jsxs("div", {
                      className: "latest-match-info",
                      children: [
                        a.jsx("a", {
                          href: "#",
                          className: "match-category",
                          children: s.category,
                        }),
                        a.jsx("h3", { children: s.title }),
                        a.jsx("ul", {
                          className: "match-meta",
                          children: a.jsx("li", {
                            children: a.jsx("a", {
                              href: "#",
                              children: s.time,
                            }),
                          }),
                        }),
                      ],
                    }),
                    a.jsx("div", {
                      className: "watch-info",
                      children: a.jsxs("a", {
                        className: "dl-video-popup",
                        "data-autoplay": "true",
                        "data-vbtype": "video",
                        href: s.link,
                        children: [
                          a.jsx("i", { className: `lab la-${s.site}` }),
                          "Watch Streem",
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ),
          ],
        }),
      }),
      a.jsx(Cs, {}),
      a.jsx(Gi, {}),
      a.jsx("section", {
        className: "cta-section",
        children: a.jsx("div", {
          className: "container",
          children: a.jsxs("div", {
            className: "section-heading",
            children: [
              a.jsx("h3", { children: "Connect With Our Gaming Team!" }),
              a.jsxs("h2", {
                children: [
                  "Join with us for upcoming",
                  a.jsx("br", {}),
                  "gaming tournaments!",
                ],
              }),
              a.jsx("a", {
                href: "#",
                className: "default-btn",
                children: "Join Our Team",
              }),
            ],
          }),
        }),
      }),
      a.jsx(ft, {}),
    ],
  });
}
const yu = "/assets/post-thumb-1-C0ged6iT.jpg",
  bu = "/assets/post-thumb-2-DtNN0gCx.jpg",
  Su = "/assets/post-thumb-3-Cvx4moxB.jpg";
function Ab() {
  return a.jsxs("div", {
    className: "body",
    children: [
      a.jsxs("section", {
        className: "page-header",
        children: [
          a.jsxs("div", {
            className: "page-header-shape",
            children: [
              a.jsx("div", { className: "shape" }),
              a.jsx("div", { className: "shape center" }),
              a.jsx("div", { className: "shape center back" }),
              a.jsx("div", { className: "shape right" }),
            ],
          }),
          a.jsx("div", {
            className: "container",
            children: a.jsxs("div", {
              className: "page-header-info",
              children: [
                a.jsx("h4", { children: "Help and Faq's" }),
                a.jsx("h2", { children: "Frequently Asked Question" }),
                a.jsxs("p", {
                  children: [
                    "Our success in creating business solutions is due in large part",
                    " ",
                    a.jsx("br", {}),
                    "to our talented and highly committed team.",
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      a.jsx("section", {
        className: "faq-section padding-top",
        children: a.jsx("div", {
          className: "container",
          children: a.jsxs("div", {
            className: "row",
            children: [
              a.jsx("div", {
                className: "col-lg-8 sm-padding",
                children: a.jsxs("div", {
                  className: "accordion faq-accordion",
                  id: "faq-accordion",
                  children: [
                    a.jsxs("div", {
                      className: "accordion-item",
                      children: [
                        a.jsx("h2", {
                          className: "accordion-header",
                          id: "headingOne",
                          children: a.jsx("button", {
                            className: "accordion-button",
                            type: "button",
                            "data-bs-toggle": "collapse",
                            "data-bs-target": "#collapseOne",
                            "aria-expanded": "true",
                            "aria-controls": "collapseOne",
                            children: "Where is GeForce NOW Available?",
                          }),
                        }),
                        a.jsx("div", {
                          id: "collapseOne",
                          className: "accordion-collapse collapse show",
                          "aria-labelledby": "headingOne",
                          "data-bs-parent": "#faq-accordion",
                          children: a.jsx("div", {
                            className: "accordion-body",
                            children: a.jsx("p", {
                              children:
                                "PC gamers put heavy demands on a monitor. The games are visually complex, so large, high-resolution displays are required for realistic game play. Imagery changes rapidly thanks to highly advanced graphics processors (GPUs), so it’s important that the monitor can keep up to avoid frame disruptions... Read Best Gaming Monitor",
                            }),
                          }),
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "accordion-item",
                      children: [
                        a.jsx("h2", {
                          className: "accordion-header",
                          id: "headingTwo",
                          children: a.jsx("button", {
                            className: "accordion-button collapsed",
                            type: "button",
                            "data-bs-toggle": "collapse",
                            "data-bs-target": "#collapseTwo",
                            "aria-expanded": "false",
                            "aria-controls": "collapseTwo",
                            children: "What is the best 4K monitor for gaming?",
                          }),
                        }),
                        a.jsx("div", {
                          id: "collapseTwo",
                          className: "accordion-collapse collapse",
                          "aria-labelledby": "headingTwo",
                          "data-bs-parent": "#faq-accordion",
                          children: a.jsx("div", {
                            className: "accordion-body",
                            children: a.jsx("p", {
                              children:
                                "PC gamers put heavy demands on a monitor. The games are visually complex, so large, high-resolution displays are required for realistic game play. Imagery changes rapidly thanks to highly advanced graphics processors (GPUs), so it’s important that the monitor can keep up to avoid frame disruptions... Read Best Gaming Monitor",
                            }),
                          }),
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "accordion-item",
                      children: [
                        a.jsx("h2", {
                          className: "accordion-header",
                          id: "headingThree",
                          children: a.jsx("button", {
                            className: "accordion-button collapsed",
                            type: "button",
                            "data-bs-toggle": "collapse",
                            "data-bs-target": "#collapseThree",
                            "aria-expanded": "false",
                            "aria-controls": "collapseThree",
                            children:
                              "Understanding Graphics Cards for Gaming Laptops?",
                          }),
                        }),
                        a.jsx("div", {
                          id: "collapseThree",
                          className: "accordion-collapse collapse",
                          "aria-labelledby": "headingThree",
                          "data-bs-parent": "#faq-accordion",
                          children: a.jsx("div", {
                            className: "accordion-body",
                            children: a.jsx("p", {
                              children:
                                "PC gamers put heavy demands on a monitor. The games are visually complex, so large, high-resolution displays are required for realistic game play. Imagery changes rapidly thanks to highly advanced graphics processors (GPUs), so it’s important that the monitor can keep up to avoid frame disruptions... Read Best Gaming Monitor",
                            }),
                          }),
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "accordion-item",
                      children: [
                        a.jsx("h2", {
                          className: "accordion-header",
                          id: "headingFour",
                          children: a.jsx("button", {
                            className: "accordion-button collapsed",
                            type: "button",
                            "data-bs-toggle": "collapse",
                            "data-bs-target": "#collapseFour",
                            "aria-expanded": "false",
                            "aria-controls": "collapseFour",
                            children: "How much RAM do I need for gaming?",
                          }),
                        }),
                        a.jsx("div", {
                          id: "collapseFour",
                          className: "accordion-collapse collapse",
                          "aria-labelledby": "headingFour",
                          "data-bs-parent": "#faq-accordion",
                          children: a.jsx("div", {
                            className: "accordion-body",
                            children: a.jsx("p", {
                              children:
                                "PC gamers put heavy demands on a monitor. The games are visually complex, so large, high-resolution displays are required for realistic game play. Imagery changes rapidly thanks to highly advanced graphics processors (GPUs), so it’s important that the monitor can keep up to avoid frame disruptions... Read Best Gaming Monitor",
                            }),
                          }),
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "accordion-item",
                      children: [
                        a.jsx("h2", {
                          className: "accordion-header",
                          id: "headingFive",
                          children: a.jsx("button", {
                            className: "accordion-button collapsed",
                            type: "button",
                            "data-bs-toggle": "collapse",
                            "data-bs-target": "#collapseFive",
                            "aria-expanded": "false",
                            "aria-controls": "collapseFive",
                            children:
                              "What are Some Best Free Game Apps for Android?",
                          }),
                        }),
                        a.jsx("div", {
                          id: "collapseFive",
                          className: "accordion-collapse collapse",
                          "aria-labelledby": "headingFive",
                          "data-bs-parent": "#faq-accordion",
                          children: a.jsx("div", {
                            className: "accordion-body",
                            children: a.jsx("p", {
                              children:
                                "PC gamers put heavy demands on a monitor. The games are visually complex, so large, high-resolution displays are required for realistic game play. Imagery changes rapidly thanks to highly advanced graphics processors (GPUs), so it’s important that the monitor can keep up to avoid frame disruptions... Read Best Gaming Monitor",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              a.jsxs("div", {
                className: "col-lg-4 sm-padding",
                children: [
                  a.jsx("div", {
                    className: "sidebar-widget",
                    children: a.jsxs("form", {
                      action: "",
                      className: "search-form",
                      children: [
                        a.jsx("input", {
                          type: "text",
                          className: "form-control",
                          placeholder: "Search",
                        }),
                        a.jsx("button", {
                          className: "search-btn",
                          type: "button",
                          children: a.jsx("i", { className: "fa fa-search" }),
                        }),
                      ],
                    }),
                  }),
                  a.jsxs("div", {
                    className: "sidebar-widget",
                    children: [
                      a.jsx("div", {
                        className: "widget-title",
                        children: a.jsx("h3", { children: "Categories" }),
                      }),
                      a.jsxs("ul", {
                        className: "category-list",
                        children: [
                          a.jsxs("li", {
                            children: [
                              a.jsx("a", {
                                href: "#",
                                children: "Business Strategy",
                              }),
                              a.jsx("span", { children: "23" }),
                            ],
                          }),
                          a.jsxs("li", {
                            children: [
                              a.jsx("a", {
                                href: "#",
                                children: "Project Management",
                              }),
                              a.jsx("span", { children: "05" }),
                            ],
                          }),
                          a.jsxs("li", {
                            children: [
                              a.jsx("a", {
                                href: "#",
                                children: "Digital Marketing",
                              }),
                              a.jsx("span", { children: "18" }),
                            ],
                          }),
                          a.jsxs("li", {
                            children: [
                              a.jsx("a", {
                                href: "#",
                                children: "Customer Experience",
                              }),
                              a.jsx("span", { children: "04" }),
                            ],
                          }),
                          a.jsxs("li", {
                            children: [
                              a.jsx("a", {
                                href: "#",
                                children: "Partnership System",
                              }),
                              a.jsx("span", { children: "15" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    className: "sidebar-widget",
                    children: [
                      a.jsx("div", {
                        className: "widget-title",
                        children: a.jsx("h3", { children: "Recent Articles" }),
                      }),
                      a.jsxs("ul", {
                        className: "thumb-post",
                        children: [
                          a.jsxs("li", {
                            children: [
                              a.jsx("div", {
                                className: "thumb",
                                children: a.jsx("img", {
                                  src: yu,
                                  alt: "thumb",
                                }),
                              }),
                              a.jsxs("div", {
                                className: "thumb-post-info",
                                children: [
                                  a.jsx("h3", {
                                    children: a.jsx("a", {
                                      href: "#",
                                      children:
                                        "How To Go About Initiating An Startup In Few Days.",
                                    }),
                                  }),
                                  a.jsx("a", {
                                    href: "#",
                                    className: "date",
                                    children: "Jan 01 2022",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          a.jsxs("li", {
                            children: [
                              a.jsx("div", {
                                className: "thumb",
                                children: a.jsx("img", {
                                  src: bu,
                                  alt: "thumb",
                                }),
                              }),
                              a.jsxs("div", {
                                className: "thumb-post-info",
                                children: [
                                  a.jsx("h3", {
                                    children: a.jsx("a", {
                                      href: "#",
                                      children:
                                        "Financial Experts Support Help You To Find Out.",
                                    }),
                                  }),
                                  a.jsx("a", {
                                    href: "#",
                                    className: "date",
                                    children: "Jan 01 2022",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          a.jsxs("li", {
                            children: [
                              a.jsx("div", {
                                className: "thumb",
                                children: a.jsx("img", {
                                  src: Su,
                                  alt: "thumb",
                                }),
                              }),
                              a.jsxs("div", {
                                className: "thumb-post-info",
                                children: [
                                  a.jsx("h3", {
                                    children: a.jsx("a", {
                                      href: "#",
                                      children:
                                        "Innovative Helping Business All Over The World.",
                                    }),
                                  }),
                                  a.jsx("a", {
                                    href: "#",
                                    className: "date",
                                    children: "Jan 01 2022",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    className: "sidebar-widget",
                    children: [
                      a.jsx("div", {
                        className: "widget-title",
                        children: a.jsx("h3", { children: "Tags" }),
                      }),
                      a.jsxs("ul", {
                        className: "tags",
                        children: [
                          a.jsx("li", {
                            children: a.jsx("a", {
                              href: "#",
                              children: "business",
                            }),
                          }),
                          a.jsx("li", {
                            children: a.jsx("a", {
                              href: "#",
                              children: "marketing",
                            }),
                          }),
                          a.jsx("li", {
                            children: a.jsx("a", {
                              href: "#",
                              children: "startup",
                            }),
                          }),
                          a.jsx("li", {
                            children: a.jsx("a", {
                              href: "#",
                              children: "design",
                            }),
                          }),
                          a.jsx("li", {
                            children: a.jsx("a", {
                              href: "#",
                              children: "consulting",
                            }),
                          }),
                          a.jsx("li", {
                            children: a.jsx("a", {
                              href: "#",
                              children: "strategy",
                            }),
                          }),
                          a.jsx("li", {
                            children: a.jsx("a", {
                              href: "#",
                              children: "development",
                            }),
                          }),
                          a.jsx("li", {
                            children: a.jsx("a", {
                              href: "#",
                              children: "tips",
                            }),
                          }),
                          a.jsx("li", {
                            children: a.jsx("a", {
                              href: "#",
                              children: "Seo",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
const zb = "/assets/product-6-Cr-gQjdc.png";
function Db() {
  return a.jsxs("div", {
    className: "body",
    children: [
      a.jsxs("section", {
        className: "page-header",
        children: [
          a.jsxs("div", {
            className: "page-header-shape",
            children: [
              a.jsx("div", { className: "shape" }),
              a.jsx("div", { className: "shape center" }),
              a.jsx("div", { className: "shape center back" }),
              a.jsx("div", { className: "shape right" }),
            ],
          }),
          a.jsx("div", {
            className: "container",
            children: a.jsxs("div", {
              className: "page-header-info",
              children: [
                a.jsx("h4", { children: "Online Gaming Shop" }),
                a.jsx("h2", { children: "Explore Our Gears" }),
                a.jsxs("p", {
                  children: [
                    "Our success in creating business solutions is due in large part",
                    " ",
                    a.jsx("br", {}),
                    "to our talented and highly committed team.",
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      a.jsx("section", {
        className: "shop-section padding-top",
        children: a.jsx("div", {
          className: "container",
          children: a.jsxs("div", {
            className: "row",
            children: [
              a.jsxs("div", {
                className: "col-lg-9 sm-padding",
                children: [
                  a.jsxs("div", {
                    className: "row",
                    children: [
                      a.jsxs("div", {
                        className: "product-shorting",
                        children: [
                          a.jsx("div", {
                            children: "Showing 1–6 of 22 results",
                          }),
                          a.jsx("div", {
                            children: a.jsxs("select", {
                              name: "orderby",
                              className: "orderby",
                              "aria-label": "Shop order",
                              children: [
                                a.jsx("option", {
                                  value: "popularity",
                                  children: "Sort by popularity",
                                }),
                                a.jsx("option", {
                                  value: "rating",
                                  children: "Sort by average rating",
                                }),
                                a.jsx("option", {
                                  value: "date",
                                  selected: !0,
                                  children: "Sort by latest",
                                }),
                                a.jsx("option", {
                                  value: "price",
                                  children: "Sort by price: low to high",
                                }),
                                a.jsx("option", {
                                  value: "price-desc",
                                  children: "Sort by price: high to low",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      a.jsx("div", {
                        className: "col-md-4 padding-15",
                        children: a.jsxs("div", {
                          className: "product-card",
                          children: [
                            a.jsxs("div", {
                              className: "product-thumb",
                              children: [
                                a.jsx("img", { src: gr, alt: "img" }),
                                a.jsx("a", {
                                  href: "#",
                                  className: "badge hot",
                                  children: "Hot",
                                }),
                                a.jsxs("ul", {
                                  className: "shop-action",
                                  children: [
                                    a.jsx("li", {
                                      children: a.jsx("a", {
                                        href: "#",
                                        children: a.jsx("i", {
                                          className: "lar la-heart",
                                        }),
                                      }),
                                    }),
                                    a.jsx("li", {
                                      children: a.jsx("a", {
                                        href: "#",
                                        children: a.jsx("i", {
                                          className: "las la-retweet",
                                        }),
                                      }),
                                    }),
                                    a.jsx("li", {
                                      children: a.jsx("a", {
                                        href: "#",
                                        children: a.jsx("i", {
                                          className: "las la-expand-arrows-alt",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                a.jsx(ne, {
                                  to: "/cart",
                                  children: a.jsx(_t, { text: "Add To Cart" }),
                                }),
                              ],
                            }),
                            a.jsxs("div", {
                              className: "product-info",
                              children: [
                                a.jsxs("div", {
                                  className: "product-inner",
                                  children: [
                                    a.jsx("ul", {
                                      className: "category",
                                      children: a.jsx("li", {
                                        children: a.jsx("a", {
                                          href: "#",
                                          children: "Steering",
                                        }),
                                      }),
                                    }),
                                    a.jsxs("ul", {
                                      className: "rating",
                                      children: [
                                        a.jsx("li", {
                                          children: a.jsx("i", {
                                            className: "las la-star",
                                          }),
                                        }),
                                        a.jsx("li", {
                                          children: a.jsx("i", {
                                            className: "las la-star",
                                          }),
                                        }),
                                        a.jsx("li", {
                                          children: a.jsx("i", {
                                            className: "las la-star",
                                          }),
                                        }),
                                        a.jsx("li", {
                                          children: a.jsx("i", {
                                            className: "las la-star",
                                          }),
                                        }),
                                        a.jsx("li", {
                                          children: a.jsx("i", {
                                            className: "las la-star",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                a.jsx("h3", {
                                  children: a.jsx(ne, {
                                    to: "/shop-details",
                                    children: "Steering Wheel",
                                  }),
                                }),
                                a.jsx("h4", {
                                  className: "price",
                                  children: "$69.00",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      a.jsx("div", {
                        className: "col-md-4 padding-15",
                        children: a.jsxs("div", {
                          className: "product-card",
                          children: [
                            a.jsxs("div", {
                              className: "product-thumb",
                              children: [
                                a.jsx("img", { src: xr, alt: "img" }),
                                a.jsx("a", {
                                  href: "#",
                                  className: "badge in-stock",
                                  children: "In Stock",
                                }),
                                a.jsxs("ul", {
                                  className: "shop-action",
                                  children: [
                                    a.jsx("li", {
                                      children: a.jsx("a", {
                                        href: "#",
                                        children: a.jsx("i", {
                                          className: "lar la-heart",
                                        }),
                                      }),
                                    }),
                                    a.jsx("li", {
                                      children: a.jsx("a", {
                                        href: "#",
                                        children: a.jsx("i", {
                                          className: "las la-retweet",
                                        }),
                                      }),
                                    }),
                                    a.jsx("li", {
                                      children: a.jsx("a", {
                                        href: "#",
                                        children: a.jsx("i", {
                                          className: "las la-expand-arrows-alt",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                a.jsx(ne, {
                                  to: "/cart",
                                  children: a.jsx(_t, { text: "Add To Cart" }),
                                }),
                              ],
                            }),
                            a.jsxs("div", {
                              className: "product-info",
                              children: [
                                a.jsxs("div", {
                                  className: "product-inner",
                                  children: [
                                    a.jsx("ul", {
                                      className: "category",
                                      children: a.jsx("li", {
                                        children: a.jsx("a", {
                                          href: "#",
                                          children: "Mouse",
                                        }),
                                      }),
                                    }),
                                    a.jsxs("ul", {
                                      className: "rating",
                                      children: [
                                        a.jsx("li", {
                                          children: a.jsx("i", {
                                            className: "las la-star",
                                          }),
                                        }),
                                        a.jsx("li", {
                                          children: a.jsx("i", {
                                            className: "las la-star",
                                          }),
                                        }),
                                        a.jsx("li", {
                                          children: a.jsx("i", {
                                            className: "las la-star",
                                          }),
                                        }),
                                        a.jsx("li", {
                                          children: a.jsx("i", {
                                            className: "las la-star",
                                          }),
                                        }),
                                        a.jsx("li", {
                                          children: a.jsx("i", {
                                            className: "las la-star",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                a.jsx("h3", {
                                  children: a.jsx(ne, {
                                    to: "/shop-details",
                                    children: "Fantech Mouse",
                                  }),
                                }),
                                a.jsx("h4", {
                                  className: "price",
                                  children: "$49.00",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      a.jsx("div", {
                        className: "col-md-4 padding-15",
                        children: a.jsxs("div", {
                          className: "product-card",
                          children: [
                            a.jsxs("div", {
                              className: "product-thumb",
                              children: [
                                a.jsx("img", { src: jr, alt: "img" }),
                                a.jsx("a", {
                                  href: "#",
                                  className: "badge sale",
                                  children: "-70%",
                                }),
                                a.jsxs("ul", {
                                  className: "shop-action",
                                  children: [
                                    a.jsx("li", {
                                      children: a.jsx("a", {
                                        href: "#",
                                        children: a.jsx("i", {
                                          className: "lar la-heart",
                                        }),
                                      }),
                                    }),
                                    a.jsx("li", {
                                      children: a.jsx("a", {
                                        href: "#",
                                        children: a.jsx("i", {
                                          className: "las la-retweet",
                                        }),
                                      }),
                                    }),
                                    a.jsx("li", {
                                      children: a.jsx("a", {
                                        href: "#",
                                        children: a.jsx("i", {
                                          className: "las la-expand-arrows-alt",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                a.jsx(ne, {
                                  to: "/cart",
                                  children: a.jsx(_t, { text: "Add To Cart" }),
                                }),
                              ],
                            }),
                            a.jsxs("div", {
                              className: "product-info",
                              children: [
                                a.jsxs("div", {
                                  className: "product-inner",
                                  children: [
                                    a.jsx("ul", {
                                      className: "category",
                                      children: a.jsx("li", {
                                        children: a.jsx("a", {
                                          href: "#",
                                          children: "Console",
                                        }),
                                      }),
                                    }),
                                    a.jsxs("ul", {
                                      className: "rating",
                                      children: [
                                        a.jsx("li", {
                                          children: a.jsx("i", {
                                            className: "las la-star",
                                          }),
                                        }),
                                        a.jsx("li", {
                                          children: a.jsx("i", {
                                            className: "las la-star",
                                          }),
                                        }),
                                        a.jsx("li", {
                                          children: a.jsx("i", {
                                            className: "las la-star",
                                          }),
                                        }),
                                        a.jsx("li", {
                                          children: a.jsx("i", {
                                            className: "las la-star",
                                          }),
                                        }),
                                        a.jsx("li", {
                                          children: a.jsx("i", {
                                            className: "las la-star",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                a.jsx("h3", {
                                  children: a.jsx(ne, {
                                    to: "/shop-details",
                                    children: "Targus Console",
                                  }),
                                }),
                                a.jsx("h4", {
                                  className: "price",
                                  children: "$39.00",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      a.jsx("div", {
                        className: "col-md-4 padding-15",
                        children: a.jsxs("div", {
                          className: "product-card",
                          children: [
                            a.jsxs("div", {
                              className: "product-thumb",
                              children: [
                                a.jsx("img", { src: gu, alt: "img" }),
                                a.jsx("a", {
                                  href: "#",
                                  className: "badge in-stock",
                                  children: "In Stock",
                                }),
                                a.jsxs("ul", {
                                  className: "shop-action",
                                  children: [
                                    a.jsx("li", {
                                      children: a.jsx("a", {
                                        href: "#",
                                        children: a.jsx("i", {
                                          className: "lar la-heart",
                                        }),
                                      }),
                                    }),
                                    a.jsx("li", {
                                      children: a.jsx("a", {
                                        href: "#",
                                        children: a.jsx("i", {
                                          className: "las la-retweet",
                                        }),
                                      }),
                                    }),
                                    a.jsx("li", {
                                      children: a.jsx("a", {
                                        href: "#",
                                        children: a.jsx("i", {
                                          className: "las la-expand-arrows-alt",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                a.jsx(ne, {
                                  to: "/cart",
                                  children: a.jsx(_t, { text: "Add To Cart" }),
                                }),
                              ],
                            }),
                            a.jsxs("div", {
                              className: "product-info",
                              children: [
                                a.jsxs("div", {
                                  className: "product-inner",
                                  children: [
                                    a.jsx("ul", {
                                      className: "category",
                                      children: a.jsx("li", {
                                        children: a.jsx("a", {
                                          href: "#",
                                          children: "Controller",
                                        }),
                                      }),
                                    }),
                                    a.jsxs("ul", {
                                      className: "rating",
                                      children: [
                                        a.jsx("li", {
                                          children: a.jsx("i", {
                                            className: "las la-star",
                                          }),
                                        }),
                                        a.jsx("li", {
                                          children: a.jsx("i", {
                                            className: "las la-star",
                                          }),
                                        }),
                                        a.jsx("li", {
                                          children: a.jsx("i", {
                                            className: "las la-star",
                                          }),
                                        }),
                                        a.jsx("li", {
                                          children: a.jsx("i", {
                                            className: "las la-star",
                                          }),
                                        }),
                                        a.jsx("li", {
                                          children: a.jsx("i", {
                                            className: "las la-star",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                a.jsx("h3", {
                                  children: a.jsx(ne, {
                                    to: "/shop-details",
                                    children: "Xbox Controller",
                                  }),
                                }),
                                a.jsx("h4", {
                                  className: "price",
                                  children: "$19.00",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      a.jsx("div", {
                        className: "col-md-4 padding-15",
                        children: a.jsxs("div", {
                          className: "product-card",
                          children: [
                            a.jsxs("div", {
                              className: "product-thumb",
                              children: [
                                a.jsx("img", { src: Wp, alt: "img" }),
                                a.jsx("a", {
                                  href: "#",
                                  className: "badge hot",
                                  children: "Hot",
                                }),
                                a.jsxs("ul", {
                                  className: "shop-action",
                                  children: [
                                    a.jsx("li", {
                                      children: a.jsx("a", {
                                        href: "#",
                                        children: a.jsx("i", {
                                          className: "lar la-heart",
                                        }),
                                      }),
                                    }),
                                    a.jsx("li", {
                                      children: a.jsx("a", {
                                        href: "#",
                                        children: a.jsx("i", {
                                          className: "las la-retweet",
                                        }),
                                      }),
                                    }),
                                    a.jsx("li", {
                                      children: a.jsx("a", {
                                        href: "#",
                                        children: a.jsx("i", {
                                          className: "las la-expand-arrows-alt",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                a.jsx(ne, {
                                  to: "/cart",
                                  children: a.jsx(_t, { text: "Add To Cart" }),
                                }),
                              ],
                            }),
                            a.jsxs("div", {
                              className: "product-info",
                              children: [
                                a.jsxs("div", {
                                  className: "product-inner",
                                  children: [
                                    a.jsx("ul", {
                                      className: "category",
                                      children: a.jsx("li", {
                                        children: a.jsx("a", {
                                          href: "#",
                                          children: "Chair",
                                        }),
                                      }),
                                    }),
                                    a.jsxs("ul", {
                                      className: "rating",
                                      children: [
                                        a.jsx("li", {
                                          children: a.jsx("i", {
                                            className: "las la-star",
                                          }),
                                        }),
                                        a.jsx("li", {
                                          children: a.jsx("i", {
                                            className: "las la-star",
                                          }),
                                        }),
                                        a.jsx("li", {
                                          children: a.jsx("i", {
                                            className: "las la-star",
                                          }),
                                        }),
                                        a.jsx("li", {
                                          children: a.jsx("i", {
                                            className: "las la-star",
                                          }),
                                        }),
                                        a.jsx("li", {
                                          children: a.jsx("i", {
                                            className: "las la-star",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                a.jsx("h3", {
                                  children: a.jsx(ne, {
                                    to: "/shop-details",
                                    children: "Ergonomic Chair",
                                  }),
                                }),
                                a.jsx("h4", {
                                  className: "price",
                                  children: "$39.00",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      a.jsx("div", {
                        className: "col-md-4 padding-15",
                        children: a.jsxs("div", {
                          className: "product-card",
                          children: [
                            a.jsxs("div", {
                              className: "product-thumb",
                              children: [
                                a.jsx("img", { src: zb, alt: "img" }),
                                a.jsx("a", {
                                  href: "#",
                                  className: "badge out-stock",
                                  children: "Out Of Stock",
                                }),
                                a.jsxs("ul", {
                                  className: "shop-action",
                                  children: [
                                    a.jsx("li", {
                                      children: a.jsx("a", {
                                        href: "#",
                                        children: a.jsx("i", {
                                          className: "lar la-heart",
                                        }),
                                      }),
                                    }),
                                    a.jsx("li", {
                                      children: a.jsx("a", {
                                        href: "#",
                                        children: a.jsx("i", {
                                          className: "las la-retweet",
                                        }),
                                      }),
                                    }),
                                    a.jsx("li", {
                                      children: a.jsx("a", {
                                        href: "#",
                                        children: a.jsx("i", {
                                          className: "las la-expand-arrows-alt",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                a.jsx(ne, {
                                  to: "/cart",
                                  children: a.jsx(_t, { text: "Add To Cart" }),
                                }),
                              ],
                            }),
                            a.jsxs("div", {
                              className: "product-info",
                              children: [
                                a.jsxs("div", {
                                  className: "product-inner",
                                  children: [
                                    a.jsx("ul", {
                                      className: "category",
                                      children: a.jsx("li", {
                                        children: a.jsx("a", {
                                          href: "#",
                                          children: "Headphone",
                                        }),
                                      }),
                                    }),
                                    a.jsxs("ul", {
                                      className: "rating",
                                      children: [
                                        a.jsx("li", {
                                          children: a.jsx("i", {
                                            className: "las la-star",
                                          }),
                                        }),
                                        a.jsx("li", {
                                          children: a.jsx("i", {
                                            className: "las la-star",
                                          }),
                                        }),
                                        a.jsx("li", {
                                          children: a.jsx("i", {
                                            className: "las la-star",
                                          }),
                                        }),
                                        a.jsx("li", {
                                          children: a.jsx("i", {
                                            className: "las la-star",
                                          }),
                                        }),
                                        a.jsx("li", {
                                          children: a.jsx("i", {
                                            className: "las la-star",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                a.jsx("h3", {
                                  children: a.jsx(ne, {
                                    to: "/shop-details",
                                    children: "Intrex Headphone",
                                  }),
                                }),
                                a.jsx("h4", {
                                  className: "price",
                                  children: "$19.00",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  a.jsxs("ul", {
                    className: "pagination-wrap text-left mt-40",
                    children: [
                      a.jsx("li", {
                        children: a.jsx("a", {
                          href: "#",
                          children: a.jsx("i", {
                            className: "las la-arrow-left",
                          }),
                        }),
                      }),
                      a.jsx("li", {
                        children: a.jsx("a", { href: "#", children: "1" }),
                      }),
                      a.jsx("li", {
                        children: a.jsx("a", {
                          href: "#",
                          className: "active",
                          children: "2",
                        }),
                      }),
                      a.jsx("li", {
                        children: a.jsx("a", { href: "#", children: "3" }),
                      }),
                      a.jsx("li", {
                        children: a.jsx("a", {
                          href: "#",
                          children: a.jsx("i", {
                            className: "las la-arrow-right",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              a.jsx("div", {
                className: "col-lg-3 sm-padding",
                children: a.jsxs("div", {
                  className: "shop-sidebar",
                  children: [
                    a.jsxs("div", {
                      className: "shop-sidebar-widget",
                      children: [
                        a.jsx("div", {
                          className: "shop-widget-title",
                          children: a.jsxs("h3", {
                            children: [
                              a.jsx("span", { children: "||" }),
                              " Categories",
                            ],
                          }),
                        }),
                        a.jsxs("ul", {
                          className: "category-list",
                          children: [
                            a.jsxs("li", {
                              children: [
                                a.jsx("a", {
                                  href: "#",
                                  children: "Jackets & Coats",
                                }),
                                a.jsx("span", { children: "23" }),
                              ],
                            }),
                            a.jsxs("li", {
                              children: [
                                a.jsx("a", {
                                  href: "#",
                                  children: "Loungewear",
                                }),
                                a.jsx("span", { children: "05" }),
                              ],
                            }),
                            a.jsxs("li", {
                              children: [
                                a.jsx("a", {
                                  href: "#",
                                  children: "Polo shirts",
                                }),
                                a.jsx("span", { children: "18" }),
                              ],
                            }),
                            a.jsxs("li", {
                              children: [
                                a.jsx("a", { href: "#", children: "Swimwear" }),
                                a.jsx("span", { children: "04" }),
                              ],
                            }),
                            a.jsxs("li", {
                              children: [
                                a.jsx("a", { href: "#", children: "T-shirts" }),
                                a.jsx("span", { children: "15" }),
                              ],
                            }),
                            a.jsxs("li", {
                              children: [
                                a.jsx("a", { href: "#", children: "Trousers" }),
                                a.jsx("span", { children: "48" }),
                              ],
                            }),
                            a.jsxs("li", {
                              children: [
                                a.jsx("a", {
                                  href: "#",
                                  children: "Accessories",
                                }),
                                a.jsx("span", { children: "75" }),
                              ],
                            }),
                            a.jsxs("li", {
                              children: [
                                a.jsx("a", { href: "#", children: "Lingerie" }),
                                a.jsx("span", { children: "13" }),
                              ],
                            }),
                            a.jsxs("li", {
                              children: [
                                a.jsx("a", {
                                  href: "#",
                                  children: "Flip-flops",
                                }),
                                a.jsx("span", { children: "82" }),
                              ],
                            }),
                            a.jsxs("li", {
                              children: [
                                a.jsx("a", {
                                  href: "#",
                                  children: "Rainproof",
                                }),
                                a.jsx("span", { children: "61" }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "shop-sidebar-widget",
                      children: [
                        a.jsx("div", {
                          className: "shop-widget-title",
                          children: a.jsxs("h3", {
                            children: [
                              a.jsx("span", { children: "||" }),
                              " Filter By Price",
                            ],
                          }),
                        }),
                        a.jsxs("div", {
                          className: "range-slider",
                          children: [
                            a.jsx("input", {
                              type: "range",
                              min: "20",
                              max: "500",
                              value: "0",
                              id: "price-range",
                            }),
                            a.jsxs("div", {
                              className: "range-slider-output",
                              children: [
                                a.jsx("span", { id: "price-output" }),
                                a.jsx("a", { href: "#", children: "Filter" }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "shop-sidebar-widget",
                      children: [
                        a.jsx("div", {
                          className: "shop-widget-title",
                          children: a.jsxs("h3", {
                            children: [
                              a.jsx("span", { children: "||" }),
                              " Colors",
                            ],
                          }),
                        }),
                        a.jsxs("ul", {
                          className: "color-list",
                          children: [
                            a.jsx("li", {
                              children: a.jsxs("label", {
                                children: [
                                  a.jsx("input", { type: "checkbox" }),
                                  a.jsx("span", {
                                    className: "checkmark black",
                                  }),
                                  "Black",
                                ],
                              }),
                            }),
                            a.jsx("li", {
                              children: a.jsxs("label", {
                                children: [
                                  a.jsx("input", { type: "checkbox" }),
                                  a.jsx("span", {
                                    className: "checkmark green",
                                  }),
                                  "Green",
                                ],
                              }),
                            }),
                            a.jsx("li", {
                              children: a.jsxs("label", {
                                children: [
                                  a.jsx("input", { type: "checkbox" }),
                                  a.jsx("span", {
                                    className: "checkmark blue",
                                  }),
                                  "Blue",
                                ],
                              }),
                            }),
                            a.jsx("li", {
                              children: a.jsxs("label", {
                                children: [
                                  a.jsx("input", { type: "checkbox" }),
                                  a.jsx("span", { className: "checkmark red" }),
                                  "Red",
                                ],
                              }),
                            }),
                            a.jsx("li", {
                              children: a.jsxs("label", {
                                children: [
                                  a.jsx("input", { type: "checkbox" }),
                                  a.jsx("span", {
                                    className: "checkmark yellow",
                                  }),
                                  "Yellow",
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "shop-sidebar-widget",
                      children: [
                        a.jsx("div", {
                          className: "shop-widget-title",
                          children: a.jsxs("h3", {
                            children: [
                              a.jsx("span", { children: "||" }),
                              " Size",
                            ],
                          }),
                        }),
                        a.jsxs("ul", {
                          className: "size-list",
                          children: [
                            a.jsx("li", {
                              children: a.jsx("a", {
                                href: "#",
                                children: "L",
                              }),
                            }),
                            a.jsx("li", {
                              children: a.jsx("a", {
                                href: "#",
                                children: "M",
                              }),
                            }),
                            a.jsx("li", {
                              children: a.jsx("a", {
                                href: "#",
                                children: "S",
                              }),
                            }),
                            a.jsx("li", {
                              children: a.jsx("a", {
                                href: "#",
                                children: "Xl",
                              }),
                            }),
                            a.jsx("li", {
                              children: a.jsx("a", {
                                href: "#",
                                children: "Xs",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "shop-sidebar-widget",
                      children: [
                        a.jsx("div", {
                          className: "shop-widget-title",
                          children: a.jsxs("h3", {
                            children: [
                              a.jsx("span", { children: "||" }),
                              " Filter By Tags",
                            ],
                          }),
                        }),
                        a.jsxs("ul", {
                          className: "tags",
                          children: [
                            a.jsx("li", {
                              children: a.jsx("a", {
                                href: "#",
                                children: "Bags",
                              }),
                            }),
                            a.jsx("li", {
                              children: a.jsx("a", {
                                href: "#",
                                children: "Loungewear",
                              }),
                            }),
                            a.jsx("li", {
                              children: a.jsx("a", {
                                href: "#",
                                children: "Dress",
                              }),
                            }),
                            a.jsx("li", {
                              children: a.jsx("a", {
                                href: "#",
                                children: "Pants",
                              }),
                            }),
                            a.jsx("li", {
                              children: a.jsx("a", {
                                href: "#",
                                children: "Earrings",
                              }),
                            }),
                            a.jsx("li", {
                              children: a.jsx("a", {
                                href: "#",
                                children: "Shirt",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
      a.jsx(ft, {}),
    ],
  });
}
function _b() {
  return a.jsxs("div", {
    className: "body",
    children: [
      a.jsxs("section", {
        className: "page-header",
        children: [
          a.jsxs("div", {
            className: "page-header-shape",
            children: [
              a.jsx("div", { className: "shape" }),
              a.jsx("div", { className: "shape center" }),
              a.jsx("div", { className: "shape center back" }),
              a.jsx("div", { className: "shape right" }),
            ],
          }),
          a.jsx("div", {
            className: "container",
            children: a.jsxs("div", {
              className: "page-header-info",
              children: [
                a.jsx("h4", { children: "Checkout Page" }),
                a.jsx("h2", { children: "Checkout" }),
                a.jsxs("p", {
                  children: [
                    "Our success in creating business solutions is due in large part",
                    " ",
                    a.jsx("br", {}),
                    "to our talented and highly committed team.",
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      a.jsx("section", {
        className: "checkout-section padding-top",
        children: a.jsx("div", {
          className: "container",
          children: a.jsxs("div", {
            className: "row",
            children: [
              a.jsx("div", {
                className: "col-lg-8 sm-padding",
                children: a.jsxs("form", {
                  action: "#",
                  className: "checkout-form-wrap",
                  children: [
                    a.jsx("h2", { children: "Billing Details" }),
                    a.jsxs("div", {
                      className: "checkout-form mb-30",
                      children: [
                        a.jsx("div", {
                          className: "form-field",
                          children: a.jsx("input", {
                            type: "text",
                            id: "firstname",
                            name: "firstname",
                            className: "form-control",
                            placeholder: "First Name",
                            required: !0,
                          }),
                        }),
                        a.jsx("div", {
                          className: "form-field",
                          children: a.jsx("input", {
                            type: "text",
                            id: "lastname",
                            name: "lastname",
                            className: "form-control",
                            placeholder: "Last Name",
                            required: !0,
                          }),
                        }),
                        a.jsx("div", {
                          className: "form-field",
                          children: a.jsx("input", {
                            type: "text",
                            id: "companyname",
                            name: "companyname",
                            className: "form-control",
                            placeholder: "Company Name",
                            required: !0,
                          }),
                        }),
                        a.jsx("div", {
                          className: "form-field",
                          children: a.jsx("input", {
                            type: "text",
                            id: "country",
                            name: "country",
                            className: "form-control",
                            placeholder: "Country",
                            required: !0,
                          }),
                        }),
                        a.jsx("div", {
                          className: "form-field",
                          children: a.jsx("input", {
                            type: "text",
                            id: "city",
                            name: "city",
                            className: "form-control",
                            placeholder: "City",
                            required: !0,
                          }),
                        }),
                        a.jsx("div", {
                          className: "form-field",
                          children: a.jsx("input", {
                            type: "text",
                            id: "state",
                            name: "state",
                            className: "form-control",
                            placeholder: "State / Province",
                            required: !0,
                          }),
                        }),
                        a.jsx("div", {
                          className: "form-field",
                          children: a.jsx("input", {
                            type: "text",
                            id: "street",
                            name: "street",
                            className: "form-control",
                            placeholder: "Street",
                            required: !0,
                          }),
                        }),
                        a.jsx("div", {
                          className: "form-field",
                          children: a.jsx("input", {
                            type: "text",
                            id: "postcode",
                            name: "postcode",
                            className: "form-control",
                            placeholder: "Post Code",
                            required: !0,
                          }),
                        }),
                        a.jsx("div", {
                          className: "form-field",
                          children: a.jsx("input", {
                            type: "text",
                            id: "phone",
                            name: "phone",
                            className: "form-control",
                            placeholder: "Phone",
                            required: !0,
                          }),
                        }),
                        a.jsx("div", {
                          className: "form-field",
                          children: a.jsx("input", {
                            type: "text",
                            id: "email",
                            name: "email",
                            className: "form-control",
                            placeholder: "Email",
                            required: !0,
                          }),
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "additional-info mb-30",
                      children: [
                        a.jsx("h2", { children: "Additional Information" }),
                        a.jsx("div", {
                          className: "form-field",
                          children: a.jsx("textarea", {
                            id: "message",
                            name: "message",
                            cols: 30,
                            rows: 3,
                            className: "form-control",
                            placeholder: "Order Note",
                          }),
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "payment-method",
                      children: [
                        a.jsx("h2", { children: "Payment Method" }),
                        a.jsxs("ul", {
                          className: "mb-20",
                          children: [
                            a.jsxs("li", {
                              children: [
                                a.jsx("input", {
                                  type: "radio",
                                  id: "option-1",
                                  name: "selector",
                                  checked: !0,
                                }),
                                a.jsx("label", {
                                  htmlFor: "option-1",
                                  children: "Direct Bank Transfer",
                                }),
                              ],
                            }),
                            a.jsxs("li", {
                              children: [
                                a.jsx("input", {
                                  type: "radio",
                                  id: "option-2",
                                  name: "selector",
                                }),
                                a.jsx("label", {
                                  htmlFor: "option-2",
                                  children: "Check Payments",
                                }),
                              ],
                            }),
                            a.jsxs("li", {
                              children: [
                                a.jsx("input", {
                                  type: "radio",
                                  id: "option-3",
                                  name: "selector",
                                }),
                                a.jsx("label", {
                                  htmlFor: "option-3",
                                  children: "Cash On Delivery",
                                }),
                              ],
                            }),
                          ],
                        }),
                        a.jsxs("a", {
                          href: "#",
                          className: "default-btn",
                          children: ["Place Order ", a.jsx("span", {})],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              a.jsx("div", {
                className: "col-lg-4 sm-padding",
                children: a.jsxs("ul", {
                  className: "cart-total",
                  children: [
                    a.jsxs("li", {
                      children: [
                        a.jsx("span", { children: "Subtotal:" }),
                        "$32.99",
                      ],
                    }),
                    a.jsxs("li", {
                      children: [
                        a.jsx("span", { children: "Estimated shipping:" }),
                        "$50",
                      ],
                    }),
                    a.jsxs("li", {
                      children: [
                        a.jsx("span", { children: "Total:" }),
                        "$37.99",
                      ],
                    }),
                    a.jsxs("li", {
                      children: [
                        a.jsx(ne, {
                          to: "/shop",
                          children: "Continue Shopping",
                        }),
                        a.jsxs("a", {
                          href: "#",
                          className: "default-btn",
                          children: ["Checkout", a.jsx("span", {})],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
      a.jsx(ft, {}),
    ],
  });
}
function Rb() {
  return a.jsxs("div", {
    className: "body",
    children: [
      a.jsxs("section", {
        className: "page-header",
        children: [
          a.jsxs("div", {
            className: "page-header-shape",
            children: [
              a.jsx("div", { className: "shape" }),
              a.jsx("div", { className: "shape center" }),
              a.jsx("div", { className: "shape center back" }),
              a.jsx("div", { className: "shape right" }),
            ],
          }),
          a.jsx("div", {
            className: "container",
            children: a.jsxs("div", {
              className: "page-header-info",
              children: [
                a.jsx("h4", { children: "Cart Page" }),
                a.jsx("h2", { children: "Product Cart" }),
                a.jsxs("p", {
                  children: [
                    "Our success in creating business solutions is due in large part",
                    " ",
                    a.jsx("br", {}),
                    "to our talented and highly committed team.",
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      a.jsx("section", {
        className: "cart-section padding-top",
        children: a.jsxs("div", {
          className: "container",
          children: [
            a.jsxs("div", {
              className: "row cart-header",
              children: [
                a.jsx("div", { className: "col-lg-6", children: "Product" }),
                a.jsx("div", { className: "col-lg-3", children: "Quantity" }),
                a.jsx("div", { className: "col-lg-1", children: "Price" }),
                a.jsx("div", { className: "col-lg-1", children: "Total" }),
                a.jsx("div", { className: "col-lg-1" }),
              ],
            }),
            a.jsxs("div", {
              className: "row cart-body pb-30",
              children: [
                a.jsx("div", {
                  className: "col-lg-6",
                  children: a.jsxs("div", {
                    className: "cart-item",
                    children: [
                      a.jsx("img", { src: gr, alt: "product" }),
                      a.jsxs("div", {
                        className: "cart-content",
                        children: [
                          a.jsx("h3", {
                            children: a.jsx(ne, {
                              to: "/shop-details",
                              children: "Steering Wheel",
                            }),
                          }),
                          a.jsx("p", {
                            children:
                              "Our success in creating business solutions is due in large part to our talented team.",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                a.jsx("div", {
                  className: "col-4 col-lg-3",
                  children: a.jsx("div", {
                    className: "cart-item",
                    children: a.jsx("input", {
                      type: "number",
                      value: "1",
                      min: "1",
                      max: "10",
                    }),
                  }),
                }),
                a.jsx("div", {
                  className: "col-3 col-lg-1",
                  children: a.jsx("div", {
                    className: "cart-item",
                    children: a.jsx("p", { children: "$14.00" }),
                  }),
                }),
                a.jsx("div", {
                  className: "col-3 col-lg-1",
                  children: a.jsx("div", {
                    className: "cart-item",
                    children: a.jsx("p", { children: "$14.00" }),
                  }),
                }),
                a.jsx("div", {
                  className: "col-2 col-lg-1",
                  children: a.jsx("div", {
                    className: "cart-item",
                    children: a.jsx("a", {
                      className: "remove",
                      href: "#",
                      children: a.jsx("i", { className: "las la-times" }),
                    }),
                  }),
                }),
              ],
            }),
            a.jsxs("div", {
              className: "row cart-body pb-30",
              children: [
                a.jsx("div", {
                  className: "col-lg-6",
                  children: a.jsxs("div", {
                    className: "cart-item",
                    children: [
                      a.jsx("img", { src: xr, alt: "product" }),
                      a.jsxs("div", {
                        className: "cart-content",
                        children: [
                          a.jsx("h3", {
                            children: a.jsx(ne, {
                              to: "/shop-details",
                              children: "Fantech Mouse",
                            }),
                          }),
                          a.jsx("p", {
                            children:
                              "Our success in creating business solutions is due in large part to our talented team.",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                a.jsx("div", {
                  className: "col-4 col-lg-3",
                  children: a.jsx("div", {
                    className: "cart-item",
                    children: a.jsx("input", {
                      type: "number",
                      value: "1",
                      min: "1",
                      max: "10",
                    }),
                  }),
                }),
                a.jsx("div", {
                  className: "col-3 col-lg-1",
                  children: a.jsx("div", {
                    className: "cart-item",
                    children: a.jsx("p", { children: "$16.00" }),
                  }),
                }),
                a.jsx("div", {
                  className: "col-3 col-lg-1",
                  children: a.jsx("div", {
                    className: "cart-item",
                    children: a.jsx("p", { children: "$16.00" }),
                  }),
                }),
                a.jsx("div", {
                  className: "col-2 col-lg-1",
                  children: a.jsx("div", {
                    className: "cart-item",
                    children: a.jsx("a", {
                      className: "remove",
                      href: "#",
                      children: a.jsx("i", { className: "las la-times" }),
                    }),
                  }),
                }),
              ],
            }),
            a.jsxs("div", {
              className: "row cart-body",
              children: [
                a.jsx("div", {
                  className: "col-lg-6",
                  children: a.jsxs("div", {
                    className: "cart-item",
                    children: [
                      a.jsx("img", { src: jr, alt: "product" }),
                      a.jsxs("div", {
                        className: "cart-content",
                        children: [
                          a.jsx("h3", {
                            children: a.jsx(ne, {
                              to: "/shop-details",
                              children: "Targus Console",
                            }),
                          }),
                          a.jsx("p", {
                            children:
                              "Our success in creating business solutions is due in large part to our talented team.",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                a.jsx("div", {
                  className: "col-4 col-lg-3",
                  children: a.jsx("div", {
                    className: "cart-item",
                    children: a.jsx("input", {
                      type: "number",
                      value: "1",
                      min: "1",
                      max: "10",
                    }),
                  }),
                }),
                a.jsx("div", {
                  className: "col-3 col-lg-1",
                  children: a.jsx("div", {
                    className: "cart-item",
                    children: a.jsx("p", { children: "$18.00" }),
                  }),
                }),
                a.jsx("div", {
                  className: "col-3 col-lg-1",
                  children: a.jsx("div", {
                    className: "cart-item",
                    children: a.jsx("p", { children: "$18.00" }),
                  }),
                }),
                a.jsx("div", {
                  className: "col-2 col-lg-1",
                  children: a.jsx("div", {
                    className: "cart-item",
                    children: a.jsx("a", {
                      className: "remove",
                      href: "#",
                      children: a.jsx("i", { className: "las la-times" }),
                    }),
                  }),
                }),
              ],
            }),
            a.jsx("div", {
              className: "row",
              children: a.jsx("div", {
                className: "col-lg-6 offset-lg-6",
                children: a.jsxs("ul", {
                  className: "cart-total mt-30",
                  children: [
                    a.jsxs("li", {
                      children: [
                        a.jsx("span", { children: "Subtotal:" }),
                        "$32.99",
                      ],
                    }),
                    a.jsxs("li", {
                      children: [
                        a.jsx("span", { children: "Estimated shipping:" }),
                        "$50",
                      ],
                    }),
                    a.jsxs("li", {
                      children: [
                        a.jsx("span", { children: "Total:" }),
                        "$37.99",
                      ],
                    }),
                    a.jsxs("li", {
                      children: [
                        a.jsx(ne, {
                          to: "/shop",
                          children: "Continue Shopping",
                        }),
                        a.jsxs("a", {
                          href: "#",
                          className: "default-btn",
                          children: ["Checkout", a.jsx("span", {})],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
const ep = [gr, xr, jr, gu];
function Lb() {
  const [s, c] = H.useState(null),
    [r, n] = H.useState("");
  return a.jsxs("div", {
    className: "body",
    children: [
      a.jsx("section", {
        className: "shop-section single padding",
        children: a.jsx("div", {
          className: "container",
          children: a.jsxs("div", {
            className: "row",
            children: [
              a.jsxs("div", {
                className: "col-md-6 sm-padding product-details-wrap",
                children: [
                  a.jsxs(Ua, {
                    modules: [Ui, km],
                    spaceBetween: 10,
                    loop: !0,
                    navigation: {
                      nextEl: ".swiper-nav-next",
                      prevEl: ".swiper-nav-prev",
                    },
                    thumbs: { swiper: s },
                    className: "product-gallary",
                    children: [
                      ep.map((f, d) =>
                        a.jsx(
                          dt,
                          {
                            children: a.jsx("img", {
                              src: f,
                              alt: `product-${d}`,
                            }),
                          },
                          d,
                        ),
                      ),
                      a.jsx("div", {
                        className: "swiper-nav-next",
                        children: a.jsx("i", {
                          className: "las la-arrow-right",
                        }),
                      }),
                      a.jsx("div", {
                        className: "swiper-nav-prev",
                        children: a.jsx("i", {
                          className: "las la-arrow-left",
                        }),
                      }),
                    ],
                  }),
                  a.jsx(Ua, {
                    modules: [q0, km],
                    onSwiper: c,
                    spaceBetween: 10,
                    slidesPerView: 4,
                    freeMode: !0,
                    watchSlidesProgress: !0,
                    className: "product-gallary-thumb",
                    children: ep.map((f, d) =>
                      a.jsx(
                        dt,
                        {
                          children: a.jsx("img", { src: f, alt: `thumb-${d}` }),
                        },
                        d,
                      ),
                    ),
                  }),
                ],
              }),
              a.jsx("div", {
                className: "col-md-6 sm-padding",
                children: a.jsx("div", {
                  className: "product-details",
                  children: a.jsxs("div", {
                    className: "product-info",
                    children: [
                      a.jsxs("div", {
                        className: "product-inner",
                        children: [
                          a.jsx("ul", {
                            className: "category",
                            children: a.jsx("li", {
                              children: a.jsx("a", {
                                href: "#",
                                children: "Steering",
                              }),
                            }),
                          }),
                          a.jsx("ul", {
                            className: "rating",
                            children: [...Array(5)].map((f, d) =>
                              a.jsx(
                                "li",
                                {
                                  children: a.jsx("i", {
                                    className: "las la-star",
                                  }),
                                },
                                d,
                              ),
                            ),
                          }),
                        ],
                      }),
                      a.jsx("h3", { children: "Redex Steering Wheel" }),
                      a.jsxs("h4", {
                        className: "price",
                        children: [
                          "$59.00 ",
                          a.jsx("span", { children: "(In Stock)" }),
                        ],
                      }),
                      a.jsx("p", {
                        children:
                          "Designed for simplicity and made from high quality materials.",
                      }),
                      a.jsxs("div", {
                        className: "product-btn",
                        children: [
                          a.jsx("input", {
                            type: "number",
                            min: "1",
                            max: "100",
                            defaultValue: "1",
                          }),
                          a.jsx("div", {
                            children: a.jsx("a", {
                              href: "#",
                              className: "purchase-btn",
                              children: "Add To Cart",
                            }),
                          }),
                        ],
                      }),
                      a.jsxs("ul", {
                        className: "product-meta",
                        children: [
                          a.jsxs("li", {
                            children: [
                              "SKU: ",
                              a.jsx("a", { href: "#", children: "ANQ4O6DWDZ" }),
                            ],
                          }),
                          a.jsxs("li", {
                            children: [
                              "Categories: ",
                              a.jsx("a", { href: "#", children: "Bag" }),
                              " ",
                              a.jsx("a", { href: "#", children: "Womens" }),
                            ],
                          }),
                          a.jsxs("li", {
                            children: [
                              "Tags: ",
                              a.jsx("a", { href: "#", children: "Dress" }),
                              " ",
                              a.jsx("a", { href: "#", children: "Pants" }),
                            ],
                          }),
                        ],
                      }),
                      a.jsxs("ul", {
                        className: "social-list",
                        children: [
                          a.jsx("li", {
                            children: a.jsx("a", {
                              href: "#",
                              children: a.jsx("i", {
                                className: "fab fa-facebook-f",
                              }),
                            }),
                          }),
                          a.jsx("li", {
                            children: a.jsx("a", {
                              href: "#",
                              children: a.jsx("i", {
                                className: "fab fa-twitter",
                              }),
                            }),
                          }),
                          a.jsx("li", {
                            children: a.jsx("a", {
                              href: "#",
                              children: a.jsx("i", {
                                className: "fab fa-instagram",
                              }),
                            }),
                          }),
                          a.jsx("li", {
                            children: a.jsx("a", {
                              href: "#",
                              children: a.jsx("i", {
                                className: "fab fa-youtube",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
      a.jsx("section", {
        className: "product-description padding-top",
        children: a.jsxs("div", {
          className: "container",
          children: [
            a.jsxs("ul", {
              className: "nav tab-navigation",
              id: "product-tab-navigation",
              role: "tablist",
              children: [
                a.jsx("li", {
                  role: "presentation",
                  children: a.jsx("button", {
                    className: `${r === "" || r === "description" ? "active" : ""}`,
                    onClick: () => n("description"),
                    id: "home-tab",
                    "data-bs-toggle": "tab",
                    "data-bs-target": "#home",
                    type: "button",
                    role: "tab",
                    "aria-controls": "home",
                    "aria-selected": "true",
                    children: "Description",
                  }),
                }),
                a.jsx("li", {
                  role: "presentation",
                  children: a.jsx("button", {
                    className: `${r === "info" ? "active" : ""}`,
                    onClick: () => n("info"),
                    id: "profile-tab",
                    "data-bs-toggle": "tab",
                    "data-bs-target": "#profile",
                    type: "button",
                    role: "tab",
                    "aria-controls": "profile",
                    "aria-selected": "false",
                    children: "Additional information",
                  }),
                }),
                a.jsx("li", {
                  role: "presentation",
                  children: a.jsx("button", {
                    className: `${r === "review" ? "active" : ""}`,
                    onClick: () => n("review"),
                    id: "contact-tab",
                    "data-bs-toggle": "tab",
                    "data-bs-target": "#contact",
                    type: "button",
                    role: "tab",
                    "aria-controls": "contact",
                    "aria-selected": "false",
                    children: "Reviews (2)",
                  }),
                }),
              ],
            }),
            a.jsxs("div", {
              className: "tab-content",
              id: "product-tab-content",
              children: [
                a.jsxs("div", {
                  className: `tab-pane fade-in description  ${r === "" || r === "description" ? "show active" : ""}`,
                  id: "home",
                  role: "tabpanel",
                  "aria-labelledby": "home-tab",
                  children: [
                    a.jsx("p", {
                      children:
                        "Lower temperature washes and delicate spin cycles are gentler on garment, helping to maintain the color, shape and structure of the fabric. At the same time it reduces energy consumption that is used in care processes.",
                    }),
                    a.jsxs("ul", {
                      className: "description-meta",
                      children: [
                        a.jsxs("li", {
                          children: [
                            a.jsx("span", { children: "Model wears:" }),
                            " UK 10/ EU 38/ US 6",
                          ],
                        }),
                        a.jsxs("li", {
                          children: [
                            a.jsx("span", { children: "Occasion:" }),
                            " Lifestyle, Sport",
                          ],
                        }),
                        a.jsxs("li", {
                          children: [
                            a.jsx("span", { children: "Country:" }),
                            " Italy",
                          ],
                        }),
                        a.jsxs("li", {
                          children: [
                            a.jsx("span", { children: "Outer:" }),
                            " Leather 100%, Polyamide 100%",
                          ],
                        }),
                        a.jsxs("li", {
                          children: [
                            a.jsx("span", { children: "Lining:" }),
                            " Polyester 100%",
                          ],
                        }),
                        a.jsxs("li", {
                          children: [
                            a.jsx("span", { children: "CounSoletry:" }),
                            " Rubber 100%",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                a.jsx("div", {
                  className: `tab-pane fade-in ${r === "info" ? "show active" : ""}`,
                  id: "profile",
                  role: "tabpanel",
                  "aria-labelledby": "profile-tab",
                  children: a.jsxs("table", {
                    className: "table product-table",
                    children: [
                      a.jsx("thead", {
                        children: a.jsxs("tr", {
                          children: [
                            a.jsx("th", { scope: "col", children: "Size" }),
                            a.jsx("th", { scope: "col", children: "Bust" }),
                            a.jsx("th", { scope: "col", children: "Waist" }),
                            a.jsx("th", { scope: "col", children: "Hip" }),
                          ],
                        }),
                      }),
                      a.jsxs("tbody", {
                        children: [
                          a.jsxs("tr", {
                            children: [
                              a.jsx("td", { children: "S" }),
                              a.jsx("td", { children: "34 -36" }),
                              a.jsx("td", { children: "28-30" }),
                              a.jsx("td", { children: "38-40" }),
                            ],
                          }),
                          a.jsxs("tr", {
                            children: [
                              a.jsx("td", { children: "M" }),
                              a.jsx("td", { children: "36 -38" }),
                              a.jsx("td", { children: "30-32.5" }),
                              a.jsx("td", { children: "40-43" }),
                            ],
                          }),
                          a.jsxs("tr", {
                            children: [
                              a.jsx("td", { children: "L" }),
                              a.jsx("td", { children: "38-40" }),
                              a.jsx("td", { children: "32-34.5" }),
                              a.jsx("td", { children: "42-45.5" }),
                            ],
                          }),
                          a.jsxs("tr", {
                            children: [
                              a.jsx("td", { children: "XL" }),
                              a.jsx("td", { children: "40-42" }),
                              a.jsx("td", { children: "35-37" }),
                              a.jsx("td", { children: "46-38" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                a.jsx("div", {
                  className: `tab-pane fade-in review  ${r === "review" ? "show active" : ""}`,
                  id: "contact",
                  role: "tabpanel",
                  "aria-labelledby": "contact-tab",
                  children: a.jsxs("ul", {
                    className: "comment-list",
                    children: [
                      a.jsxs("li", {
                        children: [
                          a.jsx("div", {
                            className: "comment-thumb",
                            children: a.jsx("img", { src: xu, alt: "img" }),
                          }),
                          a.jsxs("div", {
                            className: "comment-text",
                            children: [
                              a.jsxs("div", {
                                className: "comment-author",
                                children: [
                                  a.jsxs("h3", {
                                    children: [
                                      a.jsx("span", {
                                        children: "January 5, 2022",
                                      }),
                                      "Elliot Alderson",
                                    ],
                                  }),
                                  a.jsxs("ul", {
                                    className: "rating",
                                    children: [
                                      a.jsx("li", {
                                        children: a.jsx("i", {
                                          className: "las la-star",
                                        }),
                                      }),
                                      a.jsx("li", {
                                        children: a.jsx("i", {
                                          className: "las la-star",
                                        }),
                                      }),
                                      a.jsx("li", {
                                        children: a.jsx("i", {
                                          className: "las la-star",
                                        }),
                                      }),
                                      a.jsx("li", {
                                        children: a.jsx("i", {
                                          className: "las la-star",
                                        }),
                                      }),
                                      a.jsx("li", {
                                        children: a.jsx("i", {
                                          className: "las la-star",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              a.jsx("p", {
                                children:
                                  "Our versatile team is built of designers, developers and digital marketers.",
                              }),
                            ],
                          }),
                        ],
                      }),
                      a.jsxs("li", {
                        children: [
                          a.jsx("div", {
                            className: "comment-thumb",
                            children: a.jsx("img", { src: ju, alt: "img" }),
                          }),
                          a.jsxs("div", {
                            className: "comment-text",
                            children: [
                              a.jsxs("div", {
                                className: "comment-author",
                                children: [
                                  a.jsxs("h3", {
                                    children: [
                                      a.jsx("span", {
                                        children: "January 5, 2022",
                                      }),
                                      "Melania Trump",
                                    ],
                                  }),
                                  a.jsxs("ul", {
                                    className: "rating",
                                    children: [
                                      a.jsx("li", {
                                        children: a.jsx("i", {
                                          className: "las la-star",
                                        }),
                                      }),
                                      a.jsx("li", {
                                        children: a.jsx("i", {
                                          className: "las la-star",
                                        }),
                                      }),
                                      a.jsx("li", {
                                        children: a.jsx("i", {
                                          className: "las la-star",
                                        }),
                                      }),
                                      a.jsx("li", {
                                        children: a.jsx("i", {
                                          className: "las la-star",
                                        }),
                                      }),
                                      a.jsx("li", {
                                        children: a.jsx("i", {
                                          className: "las la-star",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              a.jsx("p", {
                                children:
                                  "Our versatile team is built of designers, developers and digital marketers.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      a.jsx(ft, {}),
    ],
  });
}
const Bb = "/assets/post-4-DfLjXiy1.jpg";
function Hb() {
  return a.jsxs("div", {
    className: "body",
    children: [
      a.jsxs("section", {
        className: "page-header",
        children: [
          a.jsxs("div", {
            className: "page-header-shape",
            children: [
              a.jsx("div", { className: "shape" }),
              a.jsx("div", { className: "shape center" }),
              a.jsx("div", { className: "shape center back" }),
              a.jsx("div", { className: "shape right" }),
            ],
          }),
          a.jsx("div", {
            className: "container",
            children: a.jsxs("div", {
              className: "page-header-info",
              children: [
                a.jsx("h4", { children: "Blog Grid" }),
                a.jsx("h2", { children: "Gaming News & Insights" }),
                a.jsxs("p", {
                  children: [
                    "Our success in creating business solutions is due in large part",
                    " ",
                    a.jsx("br", {}),
                    "to our talented and highly committed team.",
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      a.jsx("section", {
        className: "blog-section blog-page padding-top",
        children: a.jsx("div", {
          className: "container",
          children: a.jsxs("div", {
            className: "row",
            children: [
              a.jsxs("div", {
                className: "col-lg-8 sm-padding",
                children: [
                  a.jsxs("div", {
                    className: "row grid-post",
                    children: [
                      a.jsx("div", {
                        className: "col-md-6 padding-15",
                        children: a.jsxs("div", {
                          className: "post-card",
                          children: [
                            a.jsxs("div", {
                              className: "post-thumb",
                              children: [
                                a.jsx("img", { src: Bl, alt: "post" }),
                                a.jsx("a", {
                                  href: "#",
                                  className: "post-category",
                                  children: "Business",
                                }),
                              ],
                            }),
                            a.jsxs("div", {
                              className: "post-content-wrap",
                              children: [
                                a.jsxs("ul", {
                                  className: "post-meta",
                                  children: [
                                    a.jsxs("li", {
                                      children: [
                                        a.jsx("i", {
                                          className: "las la-calendar",
                                        }),
                                        "Jan 01 2022",
                                      ],
                                    }),
                                    a.jsxs("li", {
                                      children: [
                                        a.jsx("i", {
                                          className: "las la-user",
                                        }),
                                        "Elliot Alderson",
                                      ],
                                    }),
                                  ],
                                }),
                                a.jsxs("div", {
                                  className: "post-content",
                                  children: [
                                    a.jsx("h3", {
                                      children: a.jsx(ne, {
                                        to: "/blog-details",
                                        children:
                                          "How to Start initiating an startup in few days.",
                                      }),
                                    }),
                                    a.jsx("p", {
                                      children:
                                        "Financial experts support or help you to to find out which way you can raise your funds more...",
                                    }),
                                    a.jsx(ne, {
                                      to: "/blog-details",
                                      className: "read-more",
                                      children: "Read More",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      a.jsx("div", {
                        className: "col-md-6 padding-15",
                        children: a.jsxs("div", {
                          className: "post-card",
                          children: [
                            a.jsxs("div", {
                              className: "post-thumb",
                              children: [
                                a.jsx("img", { src: Ms, alt: "post" }),
                                a.jsx("a", {
                                  href: "#",
                                  className: "post-category",
                                  children: "Startup",
                                }),
                              ],
                            }),
                            a.jsxs("div", {
                              className: "post-content-wrap",
                              children: [
                                a.jsxs("ul", {
                                  className: "post-meta",
                                  children: [
                                    a.jsxs("li", {
                                      children: [
                                        a.jsx("i", {
                                          className: "las la-calendar",
                                        }),
                                        "Jan 01 2022",
                                      ],
                                    }),
                                    a.jsxs("li", {
                                      children: [
                                        a.jsx("i", {
                                          className: "las la-user",
                                        }),
                                        "Elliot Alderson",
                                      ],
                                    }),
                                  ],
                                }),
                                a.jsxs("div", {
                                  className: "post-content",
                                  children: [
                                    a.jsx("h3", {
                                      children: a.jsx(ne, {
                                        to: "/blog-details",
                                        children:
                                          "Financial experts support help you to find out.",
                                      }),
                                    }),
                                    a.jsx("p", {
                                      children:
                                        "Financial experts support or help you to to find out which way you can raise your funds more...",
                                    }),
                                    a.jsx(ne, {
                                      to: "/blog-details",
                                      className: "read-more",
                                      children: "Read More",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      a.jsx("div", {
                        className: "col-md-6 padding-15",
                        children: a.jsxs("div", {
                          className: "post-card",
                          children: [
                            a.jsxs("div", {
                              className: "post-thumb",
                              children: [
                                a.jsx("img", { src: qi, alt: "post" }),
                                a.jsx("a", {
                                  href: "#",
                                  className: "post-category",
                                  children: "Finance",
                                }),
                              ],
                            }),
                            a.jsxs("div", {
                              className: "post-content-wrap",
                              children: [
                                a.jsxs("ul", {
                                  className: "post-meta",
                                  children: [
                                    a.jsxs("li", {
                                      children: [
                                        a.jsx("i", {
                                          className: "las la-calendar",
                                        }),
                                        "Jan 01 2022",
                                      ],
                                    }),
                                    a.jsxs("li", {
                                      children: [
                                        a.jsx("i", {
                                          className: "las la-user",
                                        }),
                                        "Elliot Alderson",
                                      ],
                                    }),
                                  ],
                                }),
                                a.jsxs("div", {
                                  className: "post-content",
                                  children: [
                                    a.jsx("h3", {
                                      children: a.jsx(ne, {
                                        to: "/blog-details",
                                        children:
                                          "Innovative business all over the world.",
                                      }),
                                    }),
                                    a.jsx("p", {
                                      children:
                                        "Financial experts support or help you to to find out which way you can raise your funds more...",
                                    }),
                                    a.jsx(ne, {
                                      to: "/blog-details",
                                      className: "read-more",
                                      children: "Read More",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      a.jsx("div", {
                        className: "col-md-6 padding-15",
                        children: a.jsxs("div", {
                          className: "post-card",
                          children: [
                            a.jsxs("div", {
                              className: "post-thumb",
                              children: [
                                a.jsx("img", { src: Bb, alt: "post" }),
                                a.jsx("a", {
                                  href: "#",
                                  className: "post-category",
                                  children: "Consulting",
                                }),
                              ],
                            }),
                            a.jsxs("div", {
                              className: "post-content-wrap",
                              children: [
                                a.jsxs("ul", {
                                  className: "post-meta",
                                  children: [
                                    a.jsxs("li", {
                                      children: [
                                        a.jsx("i", {
                                          className: "las la-calendar",
                                        }),
                                        "Jan 01 2022",
                                      ],
                                    }),
                                    a.jsxs("li", {
                                      children: [
                                        a.jsx("i", {
                                          className: "las la-user",
                                        }),
                                        "Elliot Alderson",
                                      ],
                                    }),
                                  ],
                                }),
                                a.jsxs("div", {
                                  className: "post-content",
                                  children: [
                                    a.jsx("h3", {
                                      children: a.jsx(ne, {
                                        to: "/blog-details",
                                        children:
                                          "Fresh startup ideas for digital business",
                                      }),
                                    }),
                                    a.jsx("p", {
                                      children:
                                        "Financial experts support or help you to to find out which way you can raise your funds more...",
                                    }),
                                    a.jsx(ne, {
                                      to: "/blog-details",
                                      className: "read-more",
                                      children: "Read More",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  a.jsxs("ul", {
                    className: "pagination-wrap text-left mt-40",
                    children: [
                      a.jsx("li", {
                        children: a.jsx("a", {
                          href: "#",
                          children: a.jsx("i", {
                            className: "las la-arrow-left",
                          }),
                        }),
                      }),
                      a.jsx("li", {
                        children: a.jsx("a", { href: "#", children: "1" }),
                      }),
                      a.jsx("li", {
                        children: a.jsx("a", {
                          href: "#",
                          className: "active",
                          children: "2",
                        }),
                      }),
                      a.jsx("li", {
                        children: a.jsx("a", { href: "#", children: "3" }),
                      }),
                      a.jsx("li", {
                        children: a.jsx("a", {
                          href: "#",
                          children: a.jsx("i", {
                            className: "las la-arrow-right",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "col-lg-4 sm-padding",
                children: [
                  a.jsx("div", {
                    className: "sidebar-widget",
                    children: a.jsxs("form", {
                      action: "",
                      className: "search-form",
                      children: [
                        a.jsx("input", {
                          type: "text",
                          className: "form-control",
                          placeholder: "Search",
                        }),
                        a.jsx("button", {
                          className: "search-btn",
                          type: "button",
                          children: a.jsx("i", { className: "fa fa-search" }),
                        }),
                      ],
                    }),
                  }),
                  a.jsxs("div", {
                    className: "sidebar-widget",
                    children: [
                      a.jsx("div", {
                        className: "widget-title",
                        children: a.jsx("h3", { children: "Categories" }),
                      }),
                      a.jsxs("ul", {
                        className: "category-list",
                        children: [
                          a.jsxs("li", {
                            children: [
                              a.jsx("a", {
                                href: "#",
                                children: "Business Strategy",
                              }),
                              a.jsx("span", { children: "23" }),
                            ],
                          }),
                          a.jsxs("li", {
                            children: [
                              a.jsx("a", {
                                href: "#",
                                children: "Project Management",
                              }),
                              a.jsx("span", { children: "05" }),
                            ],
                          }),
                          a.jsxs("li", {
                            children: [
                              a.jsx("a", {
                                href: "#",
                                children: "Digital Marketing",
                              }),
                              a.jsx("span", { children: "18" }),
                            ],
                          }),
                          a.jsxs("li", {
                            children: [
                              a.jsx("a", {
                                href: "#",
                                children: "Customer Experience",
                              }),
                              a.jsx("span", { children: "04" }),
                            ],
                          }),
                          a.jsxs("li", {
                            children: [
                              a.jsx("a", {
                                href: "#",
                                children: "Partnership System",
                              }),
                              a.jsx("span", { children: "15" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    className: "sidebar-widget",
                    children: [
                      a.jsx("div", {
                        className: "widget-title",
                        children: a.jsx("h3", { children: "Recent Articles" }),
                      }),
                      a.jsxs("ul", {
                        className: "thumb-post",
                        children: [
                          a.jsxs("li", {
                            children: [
                              a.jsx("div", {
                                className: "thumb",
                                children: a.jsx("img", {
                                  src: yu,
                                  alt: "thumb",
                                }),
                              }),
                              a.jsxs("div", {
                                className: "thumb-post-info",
                                children: [
                                  a.jsx("h3", {
                                    children: a.jsx("a", {
                                      href: "#",
                                      children:
                                        "How To Go About Initiating An Startup In Few Days.",
                                    }),
                                  }),
                                  a.jsx("a", {
                                    href: "#",
                                    className: "date",
                                    children: "Jan 01 2022",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          a.jsxs("li", {
                            children: [
                              a.jsx("div", {
                                className: "thumb",
                                children: a.jsx("img", {
                                  src: bu,
                                  alt: "thumb",
                                }),
                              }),
                              a.jsxs("div", {
                                className: "thumb-post-info",
                                children: [
                                  a.jsx("h3", {
                                    children: a.jsx("a", {
                                      href: "#",
                                      children:
                                        "Financial Experts Support Help You To Find Out.",
                                    }),
                                  }),
                                  a.jsx("a", {
                                    href: "#",
                                    className: "date",
                                    children: "Jan 01 2022",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          a.jsxs("li", {
                            children: [
                              a.jsx("div", {
                                className: "thumb",
                                children: a.jsx("img", {
                                  src: Su,
                                  alt: "thumb",
                                }),
                              }),
                              a.jsxs("div", {
                                className: "thumb-post-info",
                                children: [
                                  a.jsx("h3", {
                                    children: a.jsx("a", {
                                      href: "#",
                                      children:
                                        "Innovative Helping Business All Over The World.",
                                    }),
                                  }),
                                  a.jsx("a", {
                                    href: "#",
                                    className: "date",
                                    children: "Jan 01 2022",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    className: "sidebar-widget",
                    children: [
                      a.jsx("div", {
                        className: "widget-title",
                        children: a.jsx("h3", { children: "Tags" }),
                      }),
                      a.jsxs("ul", {
                        className: "tags",
                        children: [
                          a.jsx("li", {
                            children: a.jsx("a", {
                              href: "#",
                              children: "business",
                            }),
                          }),
                          a.jsx("li", {
                            children: a.jsx("a", {
                              href: "#",
                              children: "marketing",
                            }),
                          }),
                          a.jsx("li", {
                            children: a.jsx("a", {
                              href: "#",
                              children: "startup",
                            }),
                          }),
                          a.jsx("li", {
                            children: a.jsx("a", {
                              href: "#",
                              children: "design",
                            }),
                          }),
                          a.jsx("li", {
                            children: a.jsx("a", {
                              href: "#",
                              children: "consulting",
                            }),
                          }),
                          a.jsx("li", {
                            children: a.jsx("a", {
                              href: "#",
                              children: "strategy",
                            }),
                          }),
                          a.jsx("li", {
                            children: a.jsx("a", {
                              href: "#",
                              children: "development",
                            }),
                          }),
                          a.jsx("li", {
                            children: a.jsx("a", {
                              href: "#",
                              children: "tips",
                            }),
                          }),
                          a.jsx("li", {
                            children: a.jsx("a", {
                              href: "#",
                              children: "Seo",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      a.jsx(ft, {}),
    ],
  });
}
function Ub() {
  return a.jsxs("div", {
    className: "body",
    children: [
      a.jsxs("section", {
        className: "page-header",
        children: [
          a.jsxs("div", {
            className: "page-header-shape",
            children: [
              a.jsx("div", { className: "shape" }),
              a.jsx("div", { className: "shape center" }),
              a.jsx("div", { className: "shape center back" }),
              a.jsx("div", { className: "shape right" }),
            ],
          }),
          a.jsx("div", {
            className: "container",
            children: a.jsxs("div", {
              className: "page-header-info",
              children: [
                a.jsx("h4", { children: "Blog classic" }),
                a.jsx("h2", { children: "Gaming News & Insights" }),
                a.jsxs("p", {
                  children: [
                    "Our success in creating business solutions is due in large part",
                    " ",
                    a.jsx("br", {}),
                    "to our talented and highly committed team.",
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      a.jsx("section", {
        className: "blog-section blog-page padding-top",
        children: a.jsx("div", {
          className: "container",
          children: a.jsxs("div", {
            className: "row",
            children: [
              a.jsxs("div", {
                className: "col-lg-8 sm-padding",
                children: [
                  a.jsxs("div", {
                    className: "classNameic-post",
                    children: [
                      a.jsxs("div", {
                        className: "post-card",
                        children: [
                          a.jsxs("div", {
                            className: "post-thumb",
                            children: [
                              a.jsx("img", { src: Bl, alt: "post" }),
                              a.jsx("a", {
                                href: "#",
                                className: "post-category",
                                children: "Business",
                              }),
                            ],
                          }),
                          a.jsxs("div", {
                            className: "post-content-wrap",
                            children: [
                              a.jsxs("ul", {
                                className: "post-meta",
                                children: [
                                  a.jsxs("li", {
                                    children: [
                                      a.jsx("i", {
                                        className: "las la-calendar",
                                      }),
                                      "Jan 01 2022",
                                    ],
                                  }),
                                  a.jsxs("li", {
                                    children: [
                                      a.jsx("i", { className: "las la-user" }),
                                      "Elliot Alderson",
                                    ],
                                  }),
                                ],
                              }),
                              a.jsxs("div", {
                                className: "post-content",
                                children: [
                                  a.jsx("h3", {
                                    children: a.jsx(ne, {
                                      to: "/blog-details",
                                      children:
                                        "How to Start initiating an startup in few days.",
                                    }),
                                  }),
                                  a.jsx("p", {
                                    children:
                                      "PC gamers put heavy demands on a monitor. The games are visually complex, so large, high-resolution displays are required for realistic game play...",
                                  }),
                                  a.jsx(ne, {
                                    to: "/blog-details",
                                    className: "read-more",
                                    children: "Read More",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className: "post-card",
                        children: [
                          a.jsxs("div", {
                            className: "post-thumb",
                            children: [
                              a.jsx("img", { src: Ms, alt: "post" }),
                              a.jsx("a", {
                                href: "#",
                                className: "post-category",
                                children: "Startup",
                              }),
                            ],
                          }),
                          a.jsxs("div", {
                            className: "post-content-wrap",
                            children: [
                              a.jsxs("ul", {
                                className: "post-meta",
                                children: [
                                  a.jsxs("li", {
                                    children: [
                                      a.jsx("i", {
                                        className: "las la-calendar",
                                      }),
                                      "Jan 01 2022",
                                    ],
                                  }),
                                  a.jsxs("li", {
                                    children: [
                                      a.jsx("i", { className: "las la-user" }),
                                      "Elliot Alderson",
                                    ],
                                  }),
                                ],
                              }),
                              a.jsxs("div", {
                                className: "post-content",
                                children: [
                                  a.jsx("h3", {
                                    children: a.jsx(ne, {
                                      to: "/blog-details",
                                      children:
                                        "Financial experts support help you to find out.",
                                    }),
                                  }),
                                  a.jsx("p", {
                                    children:
                                      "PC gamers put heavy demands on a monitor. The games are visually complex, so large, high-resolution displays are required for realistic game play...",
                                  }),
                                  a.jsx(ne, {
                                    to: "/blog-details",
                                    className: "read-more",
                                    children: "Read More",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className: "post-card",
                        children: [
                          a.jsxs("div", {
                            className: "post-thumb",
                            children: [
                              a.jsx("img", { src: qi, alt: "post" }),
                              a.jsx("a", {
                                href: "#",
                                className: "post-category",
                                children: "Finance",
                              }),
                            ],
                          }),
                          a.jsxs("div", {
                            className: "post-content-wrap",
                            children: [
                              a.jsxs("ul", {
                                className: "post-meta",
                                children: [
                                  a.jsxs("li", {
                                    children: [
                                      a.jsx("i", {
                                        className: "las la-calendar",
                                      }),
                                      "Jan 01 2022",
                                    ],
                                  }),
                                  a.jsxs("li", {
                                    children: [
                                      a.jsx("i", { className: "las la-user" }),
                                      "Elliot Alderson",
                                    ],
                                  }),
                                ],
                              }),
                              a.jsxs("div", {
                                className: "post-content",
                                children: [
                                  a.jsx("h3", {
                                    children: a.jsx(ne, {
                                      to: "/blog-details",
                                      children:
                                        "Innovative business all over the world.",
                                    }),
                                  }),
                                  a.jsx("p", {
                                    children:
                                      "PC gamers put heavy demands on a monitor. The games are visually complex, so large, high-resolution displays are required for realistic game play...",
                                  }),
                                  a.jsx(ne, {
                                    to: "/blog-details",
                                    className: "read-more",
                                    children: "Read More",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  a.jsxs("ul", {
                    className: "pagination-wrap text-left mt-40",
                    children: [
                      a.jsx("li", {
                        children: a.jsx("a", {
                          href: "#",
                          children: a.jsx("i", {
                            className: "las la-arrow-left",
                          }),
                        }),
                      }),
                      a.jsx("li", {
                        children: a.jsx("a", { href: "#", children: "1" }),
                      }),
                      a.jsx("li", {
                        children: a.jsx("a", {
                          href: "#",
                          className: "active",
                          children: "2",
                        }),
                      }),
                      a.jsx("li", {
                        children: a.jsx("a", { href: "#", children: "3" }),
                      }),
                      a.jsx("li", {
                        children: a.jsx("a", {
                          href: "#",
                          children: a.jsx("i", {
                            className: "las la-arrow-right",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "col-lg-4 sm-padding",
                children: [
                  a.jsx("div", {
                    className: "sidebar-widget",
                    children: a.jsxs("form", {
                      action: "",
                      className: "search-form",
                      children: [
                        a.jsx("input", {
                          type: "text",
                          className: "form-control",
                          placeholder: "Search",
                        }),
                        a.jsx("button", {
                          className: "search-btn",
                          type: "button",
                          children: a.jsx("i", { className: "fa fa-search" }),
                        }),
                      ],
                    }),
                  }),
                  a.jsxs("div", {
                    className: "sidebar-widget",
                    children: [
                      a.jsx("div", {
                        className: "widget-title",
                        children: a.jsx("h3", { children: "Categories" }),
                      }),
                      a.jsxs("ul", {
                        className: "category-list",
                        children: [
                          a.jsxs("li", {
                            children: [
                              a.jsx("a", {
                                href: "#",
                                children: "Business Strategy",
                              }),
                              a.jsx("span", { children: "23" }),
                            ],
                          }),
                          a.jsxs("li", {
                            children: [
                              a.jsx("a", {
                                href: "#",
                                children: "Project Management",
                              }),
                              a.jsx("span", { children: "05" }),
                            ],
                          }),
                          a.jsxs("li", {
                            children: [
                              a.jsx("a", {
                                href: "#",
                                children: "Digital Marketing",
                              }),
                              a.jsx("span", { children: "18" }),
                            ],
                          }),
                          a.jsxs("li", {
                            children: [
                              a.jsx("a", {
                                href: "#",
                                children: "Customer Experience",
                              }),
                              a.jsx("span", { children: "04" }),
                            ],
                          }),
                          a.jsxs("li", {
                            children: [
                              a.jsx("a", {
                                href: "#",
                                children: "Partnership System",
                              }),
                              a.jsx("span", { children: "15" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    className: "sidebar-widget",
                    children: [
                      a.jsx("div", {
                        className: "widget-title",
                        children: a.jsx("h3", { children: "Recent Articles" }),
                      }),
                      a.jsxs("ul", {
                        className: "thumb-post",
                        children: [
                          a.jsxs("li", {
                            children: [
                              a.jsx("div", {
                                className: "thumb",
                                children: a.jsx("img", {
                                  src: yu,
                                  alt: "thumb",
                                }),
                              }),
                              a.jsxs("div", {
                                className: "thumb-post-info",
                                children: [
                                  a.jsx("h3", {
                                    children: a.jsx("a", {
                                      href: "#",
                                      children:
                                        "How To Go About Initiating An Startup In Few Days.",
                                    }),
                                  }),
                                  a.jsx("a", {
                                    href: "#",
                                    className: "date",
                                    children: "Jan 01 2022",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          a.jsxs("li", {
                            children: [
                              a.jsx("div", {
                                className: "thumb",
                                children: a.jsx("img", {
                                  src: bu,
                                  alt: "thumb",
                                }),
                              }),
                              a.jsxs("div", {
                                className: "thumb-post-info",
                                children: [
                                  a.jsx("h3", {
                                    children: a.jsx("a", {
                                      href: "#",
                                      children:
                                        "Financial Experts Support Help You To Find Out.",
                                    }),
                                  }),
                                  a.jsx("a", {
                                    href: "#",
                                    className: "date",
                                    children: "Jan 01 2022",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          a.jsxs("li", {
                            children: [
                              a.jsx("div", {
                                className: "thumb",
                                children: a.jsx("img", {
                                  src: Su,
                                  alt: "thumb",
                                }),
                              }),
                              a.jsxs("div", {
                                className: "thumb-post-info",
                                children: [
                                  a.jsx("h3", {
                                    children: a.jsx("a", {
                                      href: "#",
                                      children:
                                        "Innovative Helping Business All Over The World.",
                                    }),
                                  }),
                                  a.jsx("a", {
                                    href: "#",
                                    className: "date",
                                    children: "Jan 01 2022",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    className: "sidebar-widget",
                    children: [
                      a.jsx("div", {
                        className: "widget-title",
                        children: a.jsx("h3", { children: "Tags" }),
                      }),
                      a.jsxs("ul", {
                        className: "tags",
                        children: [
                          a.jsx("li", {
                            children: a.jsx("a", {
                              href: "#",
                              children: "business",
                            }),
                          }),
                          a.jsx("li", {
                            children: a.jsx("a", {
                              href: "#",
                              children: "marketing",
                            }),
                          }),
                          a.jsx("li", {
                            children: a.jsx("a", {
                              href: "#",
                              children: "startup",
                            }),
                          }),
                          a.jsx("li", {
                            children: a.jsx("a", {
                              href: "#",
                              children: "design",
                            }),
                          }),
                          a.jsx("li", {
                            children: a.jsx("a", {
                              href: "#",
                              children: "consulting",
                            }),
                          }),
                          a.jsx("li", {
                            children: a.jsx("a", {
                              href: "#",
                              children: "strategy",
                            }),
                          }),
                          a.jsx("li", {
                            children: a.jsx("a", {
                              href: "#",
                              children: "development",
                            }),
                          }),
                          a.jsx("li", {
                            children: a.jsx("a", {
                              href: "#",
                              children: "tips",
                            }),
                          }),
                          a.jsx("li", {
                            children: a.jsx("a", {
                              href: "#",
                              children: "Seo",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      a.jsx(ft, {}),
    ],
  });
}
const Gb = "/assets/auhtor-C2ZjohAs.png";
function qb() {
  return a.jsxs("div", {
    className: "body",
    children: [
      a.jsxs("section", {
        className: "page-header single",
        children: [
          a.jsxs("div", {
            className: "page-header-shape",
            children: [
              a.jsx("div", { className: "shape" }),
              a.jsx("div", { className: "shape center" }),
              a.jsx("div", { className: "shape center back" }),
              a.jsx("div", { className: "shape right" }),
            ],
          }),
          a.jsx("div", {
            className: "container",
            children: a.jsxs("div", {
              className: "page-header-info",
              children: [
                a.jsx("h4", { children: "Blog Details" }),
                a.jsxs("h2", {
                  children: [
                    "Microsoft Xbox Publishes First ",
                    a.jsx("br", {}),
                    "Transparency Report!",
                  ],
                }),
                a.jsxs("p", {
                  children: [
                    "Our success in creating business solutions is due in large part",
                    " ",
                    a.jsx("br", {}),
                    "to our talented and highly committed team.",
                  ],
                }),
                a.jsxs("ul", {
                  className: "post-meta",
                  children: [
                    a.jsxs("li", {
                      children: [
                        a.jsx("i", { className: "las la-user" }),
                        "Elliot Alderson",
                      ],
                    }),
                    a.jsxs("li", {
                      children: [
                        a.jsx("i", { className: "las la-calendar" }),
                        "Jan 01 2022",
                      ],
                    }),
                    a.jsxs("li", {
                      children: [
                        a.jsx("i", { className: "las la-comments" }),
                        "Comments 0",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      a.jsx("section", {
        className: "blog-section blog-page padding-top",
        children: a.jsx("div", {
          className: "container",
          children: a.jsx("div", {
            className: "row",
            children: a.jsx("div", {
              className: "col-lg-8 offset-lg-2",
              children: a.jsxs("div", {
                className: "post-details",
                children: [
                  a.jsx("div", {
                    className: "post-thumb",
                    children: a.jsx("img", { src: Bl, alt: "img" }),
                  }),
                  a.jsx("p", {
                    children:
                      "Financial experts support or help you to to find out which way you can raise your funds more. Arkit a trusted name for providing assistants. Initially their main objective was to ensure the service they provide these people are loyal to their industry, experienced and professional.",
                  }),
                  a.jsx("p", {
                    children:
                      "Unless you are the one who really cares about this, it is not terribly important. What all matters are how your hybrid mobile application development is going to work in the long run as no one will care about how it was built.",
                  }),
                  a.jsxs("blockquote", {
                    children: [
                      a.jsx("i", { className: "fas fa-quote-right" }),
                      "There are no secrets to success. It is the result preparation, hard work and learning from failure.",
                      a.jsx("span", { children: "- Winston Churchill." }),
                    ],
                  }),
                  a.jsx("p", {
                    children:
                      "There are some big shifts taking place in the field of construction equipment mathematics. Starting with the integration of mathematics devices in vehicles right from the manufacturers, to the standardization and integration of mathematics data across various business functions, the future of mathematics has never seemed so full of potential for fleet-based businesses.",
                  }),
                  a.jsxs("ul", {
                    className: "post-details-gallery",
                    children: [
                      a.jsx("li", {
                        children: a.jsx("img", { src: Bl, alt: "img" }),
                      }),
                      a.jsx("li", {
                        children: a.jsx("img", { src: Ms, alt: "img" }),
                      }),
                    ],
                  }),
                  a.jsx("h3", {
                    children: "Creative approach to every project",
                  }),
                  a.jsx("p", {
                    children:
                      "Financial experts support or help you to to find out which way you can raise your funds more. Arkit a trusted name for providing assistants. Initially their main objective was to ensure the service they provide these people are loyal to their industry, experienced and professional.",
                  }),
                  a.jsx("p", {
                    children:
                      "Another speaker, John Meuse, senior director of heavy equipment at Waste Management Inc., echoed this, citing a cost-saving of $17,000 for the company when it cut idling time of a single Caterpillar 966 wheel loader.",
                  }),
                  a.jsxs("ul", {
                    className: "tags",
                    children: [
                      a.jsx("li", {
                        children: a.jsx("a", {
                          href: "#",
                          children: "Business",
                        }),
                      }),
                      a.jsx("li", {
                        children: a.jsx("a", {
                          href: "#",
                          children: "Marketing",
                        }),
                      }),
                      a.jsx("li", {
                        children: a.jsx("a", {
                          href: "#",
                          children: "Startup",
                        }),
                      }),
                      a.jsx("li", {
                        children: a.jsx("a", { href: "#", children: "Design" }),
                      }),
                    ],
                  }),
                  a.jsxs("ul", {
                    className: "post-navigation",
                    children: [
                      a.jsx("li", {
                        children: a.jsxs(ne, {
                          to: "/blog-details",
                          children: [
                            a.jsxs("span", {
                              children: [
                                a.jsx("i", { className: "las la-angle-left" }),
                                "Previous",
                              ],
                            }),
                            "How To Start Initiating An Startup In Few Days.",
                          ],
                        }),
                      }),
                      a.jsx("li", {
                        children: a.jsxs(ne, {
                          to: "/blog-details",
                          children: [
                            a.jsxs("span", {
                              children: [
                                "Next",
                                a.jsx("i", { className: "las la-angle-right" }),
                              ],
                            }),
                            "Fresh Startup Ideas For Digital Business.",
                          ],
                        }),
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    className: "author-box",
                    children: [
                      a.jsx("div", {
                        className: "author-thumb",
                        children: a.jsx("img", { src: Gb, alt: "img" }),
                      }),
                      a.jsxs("div", {
                        className: "author-info",
                        children: [
                          a.jsx("h3", { children: "Elliot Alderson" }),
                          a.jsx("p", {
                            children:
                              "Our versatile team is built of designers, developers and digital marketers who all bring unique experience.",
                          }),
                          a.jsxs("ul", {
                            className: "social-icon",
                            children: [
                              a.jsx("li", {
                                children: a.jsx("a", {
                                  href: "#",
                                  children: a.jsx("i", {
                                    className: "lab la-facebook-f",
                                  }),
                                }),
                              }),
                              a.jsx("li", {
                                children: a.jsx("a", {
                                  href: "#",
                                  children: a.jsx("i", {
                                    className: "lab la-twitter",
                                  }),
                                }),
                              }),
                              a.jsx("li", {
                                children: a.jsx("a", {
                                  href: "#",
                                  children: a.jsx("i", {
                                    className: "lab la-instagram",
                                  }),
                                }),
                              }),
                              a.jsx("li", {
                                children: a.jsx("a", {
                                  href: "#",
                                  children: a.jsx("i", {
                                    className: "lab la-behance",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  a.jsx("h3", {
                    className: "comment-title",
                    children: "Post Comments",
                  }),
                  a.jsxs("ul", {
                    className: "comments-box",
                    children: [
                      a.jsxs("li", {
                        className: "comment",
                        children: [
                          a.jsxs("div", {
                            className: "comment-inner",
                            children: [
                              a.jsx("div", {
                                className: "comment-thumb",
                                children: a.jsx("img", { src: xu, alt: "img" }),
                              }),
                              a.jsxs("div", {
                                className: "comment-wrap",
                                children: [
                                  a.jsx("div", {
                                    className: "comments-meta",
                                    children: a.jsxs("h4", {
                                      children: [
                                        "Ashton Porter ",
                                        a.jsx("span", {
                                          children: "Jan 01, 2022 at 8:00",
                                        }),
                                      ],
                                    }),
                                  }),
                                  a.jsxs("div", {
                                    className: "comment-area",
                                    children: [
                                      a.jsx("p", {
                                        children:
                                          "You guys have put so much work, effort, and time while designing this awesome theme I can see that passion when I incorporated it into my website.",
                                      }),
                                      a.jsx("a", {
                                        href: "#",
                                        className: "reply",
                                        children: "Reply",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          a.jsx("ul", {
                            className: "children",
                            children: a.jsx("li", {
                              className: "comment",
                              children: a.jsxs("div", {
                                className: "comment-inner",
                                children: [
                                  a.jsx("div", {
                                    className: "comment-thumb",
                                    children: a.jsx("img", {
                                      src: ju,
                                      alt: "img",
                                    }),
                                  }),
                                  a.jsxs("div", {
                                    className: "comment-wrap",
                                    children: [
                                      a.jsx("div", {
                                        className: "comments-meta",
                                        children: a.jsxs("h4", {
                                          children: [
                                            "Melania Trump ",
                                            a.jsx("span", {
                                              children: "Jan 01, 2022 at 8:00",
                                            }),
                                          ],
                                        }),
                                      }),
                                      a.jsxs("div", {
                                        className: "comment-area",
                                        children: [
                                          a.jsx("p", {
                                            children:
                                              "The only thing I LOVE more than this theme and it’s incredible options is the support team! They are freaking amazable!",
                                          }),
                                          a.jsx("a", {
                                            href: "#",
                                            className: "reply",
                                            children: "Reply",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                      a.jsx("li", {
                        className: "comment",
                        children: a.jsxs("div", {
                          className: "comment-inner",
                          children: [
                            a.jsx("div", {
                              className: "comment-thumb",
                              children: a.jsx("img", { src: sv, alt: "img" }),
                            }),
                            a.jsxs("div", {
                              className: "comment-wrap",
                              children: [
                                a.jsx("div", {
                                  className: "comments-meta",
                                  children: a.jsxs("h4", {
                                    children: [
                                      "Elliot Alderson ",
                                      a.jsx("span", {
                                        children: "Jan 01, 2022 at 8:00",
                                      }),
                                    ],
                                  }),
                                }),
                                a.jsxs("div", {
                                  className: "comment-area",
                                  children: [
                                    a.jsx("p", {
                                      children:
                                        "Outstanding quality in this theme, brilliant Effects and perfect crafted Code. We absolutely love it and can highly recommend ThemeEaster!",
                                    }),
                                    a.jsx("a", {
                                      href: "#",
                                      className: "reply",
                                      children: "Reply",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  a.jsx("h3", {
                    className: "comment-title",
                    children: "Leave a Comment",
                  }),
                  a.jsx("form", {
                    action: "#",
                    method: "post",
                    className: "comment-form form-horizontal",
                    children: a.jsxs("div", {
                      className: "form-group row",
                      children: [
                        a.jsx("div", {
                          className: "col-sm-6 padding-15",
                          children: a.jsx("input", {
                            type: "text",
                            id: "name",
                            name: "name",
                            className: "form-control",
                            placeholder: "Name*",
                            required: !0,
                          }),
                        }),
                        a.jsx("div", {
                          className: "col-sm-6 padding-15",
                          children: a.jsx("input", {
                            type: "text",
                            id: "email",
                            name: "email",
                            className: "form-control",
                            placeholder: "Email*",
                            required: !0,
                          }),
                        }),
                        a.jsx("div", {
                          className: "col-md-12 padding-15",
                          children: a.jsx("textarea", {
                            id: "comment",
                            name: "comment",
                            cols: 30,
                            rows: 5,
                            className: "form-control comment",
                            placeholder: "Your Comment*",
                            required: !0,
                          }),
                        }),
                        a.jsxs("div", {
                          className: "col-md-12 padding-15",
                          children: [
                            a.jsxs("button", {
                              id: "submit",
                              className: "default-btn",
                              type: "submit",
                              children: ["Submit Comment", a.jsx("span", {})],
                            }),
                            a.jsx("div", {
                              id: "form-messages",
                              className: "alert",
                              role: "alert",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
        }),
      }),
      a.jsx(ft, {}),
    ],
  });
}
function Vb() {
  const [s, c] = H.useState({
      contact_name: "",
      contact_email: "",
      message: "",
    }),
    [r, n] = H.useState("idle"),
    f = (p) => {
      const { name: x, value: h } = p.target;
      c((m) => ({ ...m, [x]: h }));
    },
    d = (p) => {
      (p.preventDefault(),
        n("submitting"),
        setTimeout(() => {
          (n("success"),
            c({ contact_name: "", contact_email: "", message: "" }),
            setTimeout(() => n("idle"), 3e3));
        }, 1500));
    };
  return a.jsxs("div", {
    className: "body",
    children: [
      a.jsx("div", {
        className: "map-wrapper",
        children: a.jsx("iframe", {
          src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8826.923787362664!2d-118.27754354757262!3d34.03471770929568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20California%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1566525118697!5m2!1svi!2s&hl=en",
          width: "100%",
          height: "350",
          style: { border: 0 },
          allowFullScreen: !0,
          loading: "lazy",
          referrerPolicy: "no-referrer-when-downgrade",
        }),
      }),
      a.jsx("section", {
        className: "contact-section padding-top",
        children: a.jsx("div", {
          className: "container",
          children: a.jsxs("div", {
            className: "row",
            children: [
              a.jsx("div", {
                className: "col-md-6 sm-padding",
                children: a.jsxs("div", {
                  className: "contact-details-wrap",
                  children: [
                    a.jsxs("div", {
                      className: "contact-title",
                      children: [
                        a.jsxs("h2", {
                          children: [
                            "Do You Have Any ",
                            a.jsx("span", { children: "Questions?" }),
                          ],
                        }),
                        a.jsx("p", {
                          children:
                            "Get in touch to discuss your employee wellbeing needs today. Please give us a call, drop us an email or fill out the contact form.",
                        }),
                      ],
                    }),
                    a.jsxs("ul", {
                      className: "contact-details",
                      children: [
                        a.jsxs("li", {
                          children: [
                            a.jsx("i", { className: "fas fa-map-marker-alt" }),
                            "962 Fifth Avenue,",
                            a.jsx("br", {}),
                            " New York, NY10022",
                          ],
                        }),
                        a.jsxs("li", {
                          children: [
                            a.jsx("i", { className: "fas fa-envelope" }),
                            "hello@themeaster.net",
                            " ",
                            a.jsx("br", {}),
                            "Yourmail@gmail.com",
                          ],
                        }),
                        a.jsxs("li", {
                          children: [
                            a.jsx("i", { className: "fas fa-phone" }),
                            "(+123) 456 789 101 ",
                            a.jsx("br", {}),
                            "+1-302-123-4567",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              a.jsxs("div", {
                className: "col-md-6 sm-padding",
                children: [
                  a.jsxs("div", {
                    className: "contact-title",
                    children: [
                      a.jsxs("h2", {
                        children: [
                          "Drop Us A ",
                          a.jsx("span", { children: "Line" }),
                        ],
                      }),
                      a.jsx("p", {
                        children:
                          "Our success in creating business solutions is due in large part to our talented and highly committed team.",
                      }),
                    ],
                  }),
                  a.jsx("div", {
                    className: "contact-form",
                    children: a.jsxs("form", {
                      onSubmit: d,
                      id: "ajax_contact",
                      className: "form-horizontal",
                      children: [
                        a.jsxs("div", {
                          className: "contact-form-group",
                          children: [
                            a.jsx("div", {
                              className: "form-field",
                              children: a.jsx("input", {
                                type: "text",
                                id: "contact_name",
                                name: "contact_name",
                                className: "form-control",
                                placeholder: "Your Name",
                                value: s.contact_name,
                                onChange: f,
                                required: !0,
                                disabled: r === "submitting",
                              }),
                            }),
                            a.jsx("div", {
                              className: "form-field",
                              children: a.jsx("input", {
                                type: "email",
                                id: "contact_email",
                                name: "contact_email",
                                className: "form-control",
                                placeholder: "Email",
                                value: s.contact_email,
                                onChange: f,
                                required: !0,
                                disabled: r === "submitting",
                              }),
                            }),
                            a.jsx("div", {
                              className: "form-field message",
                              children: a.jsx("textarea", {
                                id: "message",
                                name: "message",
                                cols: 30,
                                rows: 4,
                                className: "form-control",
                                placeholder: "Message",
                                value: s.message,
                                onChange: f,
                                required: !0,
                                disabled: r === "submitting",
                              }),
                            }),
                            a.jsx("div", {
                              className: "form-field",
                              children: a.jsxs("button", {
                                id: "submit",
                                className: "default-btn",
                                type: "submit",
                                disabled: r === "submitting",
                                children: [
                                  r === "submitting"
                                    ? "Sending..."
                                    : "Send Message",
                                  a.jsx("span", {}),
                                ],
                              }),
                            }),
                          ],
                        }),
                        r === "success" &&
                          a.jsx("div", {
                            className: "alert alert-success mt-3",
                            role: "alert",
                            children: "Message sent successfully!",
                          }),
                        r === "error" &&
                          a.jsx("div", {
                            className: "alert alert-danger mt-3",
                            role: "alert",
                            children: "Something went wrong. Please try again.",
                          }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      a.jsx(ft, {}),
    ],
  });
}
const tp = "/assets/hero-slide-1-CilMf8PS.jpg",
  ap = "/assets/hero-slide-2-CWg--0ar.jpg",
  lp = "/assets/hero-slide-3-CErIIbyg.jpg";
function Yb() {
  const [s, c] = H.useState(!1);
  return (
    H.useEffect(
      () => (
        (document.body.style.overflow = s ? "hidden" : ""),
        () => {
          document.body.style.overflow = "";
        }
      ),
      [s],
    ),
    a.jsxs("section", {
      className: "watch-live-section",
      children: [
        a.jsx("div", { className: "overlay" }),
        a.jsxs("div", {
          className: "container",
          children: [
            a.jsxs("div", {
              className: "hero-content ",
              "data-aos": "fade-up",
              "data-aos-delay": "400ms",
              children: [
                a.jsx("h4", { children: "Enjoy The Games" }),
                a.jsxs("h1", {
                  children: [
                    "Epic Games Made For",
                    a.jsx("br", {}),
                    " True Gamers!",
                  ],
                }),
              ],
            }),
            a.jsxs("div", {
              className: "carousel-wrap",
              children: [
                a.jsx(Ua, {
                  modules: [Ui, $p, Es],
                  loop: !0,
                  centeredSlides: !0,
                  autoplay: { delay: 2e3, disableOnInteraction: !1 },
                  effect: "coverflow",
                  coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 5,
                    slideShadows: !1,
                  },
                  navigation: {
                    nextEl: ".swiper-nav.swiper-next",
                    prevEl: ".swiper-nav.swiper-prev",
                  },
                  spaceBetween: 30,
                  slidesPerView: 2,
                  breakpoints: {
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    992: { slidesPerView: 2 },
                  },
                  className: "watch-carousel",
                  children: a.jsx("div", {
                    className: "watch-carousel-clip",
                    children: [
                      { img: tp, key: "1a" },
                      { img: ap, key: "2a" },
                      { img: lp, key: "3a" },
                      { img: tp, key: "1b" },
                      { img: ap, key: "2b" },
                      { img: lp, key: "3b" },
                    ].map((r) =>
                      a.jsxs(
                        dt,
                        {
                          children: [
                            a.jsx("img", { src: r.img, alt: "thumb" }),
                            a.jsxs("button", {
                              type: "button",
                              className: "dl-video-popup play-btn",
                              "aria-label": "Play video",
                              onClick: () => {
                                (c(!0), new Audio(ra).play());
                              },
                              children: [
                                a.jsx("svg", {
                                  enableBackground: "new 0 0 41.999 41.999",
                                  viewBox: "0 0 41.999 41.999",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: a.jsx("path", {
                                    d: "M36.068,20.176l-29-20C6.761-0.035,6.363-0.057,6.035,0.114C5.706,0.287,5.5,0.627,5.5,0.999v40c0,0.372,0.206,0.713,0.535,0.886c0.146,0.076,0.306,0.114,0.465,0.114c0.199,0,0.397-0.06,0.568-0.177l29-20c0.271-0.187,0.432-0.494,0.432-0.823S36.338,20.363,36.068,20.176z M7.5,39.095V2.904l26.239,18.096L7.5,39.095z",
                                  }),
                                }),
                                a.jsx("div", { className: "ripple" }),
                              ],
                            }),
                          ],
                        },
                        r.key,
                      ),
                    ),
                  }),
                }),
                a.jsx("div", {
                  onClick: () => {
                    new Audio(ra).play();
                  },
                  className: "swiper-nav swiper-next",
                  style: { zIndex: 10, cursor: "pointer" },
                  children: a.jsx("i", {
                    className: "las la-long-arrow-alt-right",
                  }),
                }),
                a.jsx("div", {
                  onClick: () => {
                    new Audio(ra).play();
                  },
                  className: "swiper-nav swiper-prev",
                  style: { zIndex: 10, cursor: "pointer" },
                  children: a.jsx("i", {
                    className: "las la-long-arrow-alt-left",
                  }),
                }),
              ],
            }),
            s &&
              a.jsx("div", {
                className: "video-overlay",
                role: "dialog",
                "aria-modal": "true",
                onClick: () => c(!1),
                children: a.jsxs("div", {
                  className: "video-container",
                  onClick: (r) => r.stopPropagation(),
                  children: [
                    a.jsx("iframe", {
                      src: "https://www.youtube.com/embed/tv7LfFeamsc?autoplay=1",
                      title: "YouTube video player",
                      allow: "autoplay; encrypted-media",
                      allowFullScreen: !0,
                    }),
                    a.jsx("button", {
                      className: "video-close",
                      "aria-label": "Close video",
                      onClick: () => c(!1),
                      children: "✕",
                    }),
                  ],
                }),
              }),
          ],
        }),
      ],
    })
  );
}
const kb = "/assets/promo-icon-1-Bhd19kR_.png",
  Xb = "/assets/promo-icon-2-CUoxQ0K-.png",
  Qb = "/assets/promo-icon-3-B7Dk9D8a.png",
  sp = "/assets/testimonial-1-D7NyzJq_.jpg",
  ip = "/assets/testimonial-2-BqGo9PVB.jpg",
  np = "/assets/testimonial-3-Bxzb5W7d.jpg",
  Zb = [
    {
      id: 1,
      imgSrc: sp,
      name: "Brandon Larned",
      date: "November 7, 2022",
      review:
        "Love this game. With the mortar turret you are able to use just one kind of turret to attack all enemies. Whether they are on ground or in the sky.",
      rating: 5,
    },
    {
      id: 2,
      imgSrc: ip,
      name: "Sasha Hostyn",
      date: "November 5, 2022",
      review:
        "Love this game. With the mortar turret you are able to use just one kind of turret to attack all enemies. Whether they are on ground or in the sky.",
      rating: 5,
    },
    {
      id: 3,
      imgSrc: np,
      name: "Fredrik Johanson",
      date: "November 8, 2022",
      review:
        "Love this game. With the mortar turret you are able to use just one kind of turret to attack all enemies. Whether they are on ground or in the sky.",
      rating: 5,
    },
    {
      id: 4,
      imgSrc: sp,
      name: "Brandon Larned",
      date: "November 7, 2022",
      review:
        "Love this game. With the mortar turret you are able to use just one kind of turret to attack all enemies. Whether they are on ground or in the sky.",
      rating: 5,
    },
    {
      id: 5,
      imgSrc: ip,
      name: "Sasha Hostyn",
      date: "November 5, 2022",
      review:
        "Love this game. With the mortar turret you are able to use just one kind of turret to attack all enemies. Whether they are on ground or in the sky.",
      rating: 5,
    },
    {
      id: 6,
      imgSrc: np,
      name: "Fredrik Johanson",
      date: "November 8, 2022",
      review:
        "Love this game. With the mortar turret you are able to use just one kind of turret to attack all enemies. Whether they are on ground or in the sky.",
      rating: 5,
    },
  ],
  Jb = ({ imgSrc: s, name: c, date: r, review: n, rating: f }) => {
    const d = Array(f)
      .fill(null)
      .map((p, x) =>
        a.jsx("li", { children: a.jsx("i", { className: "las la-star" }) }, x),
      );
    return a.jsxs("div", {
      className: "testimonial-item",
      children: [
        a.jsxs("div", {
          className: "testi-thumb",
          children: [
            a.jsx("img", { src: s, alt: "thumb" }),
            a.jsxs("h3", {
              children: [c, " ", a.jsx("span", { children: r })],
            }),
          ],
        }),
        a.jsx("p", { children: n }),
        a.jsx("ul", { className: "rating", children: d }),
      ],
    });
  },
  Fb = () =>
    a.jsx("section", {
      className: "testimonial-section padding-bottom",
      children: a.jsxs("div", {
        className: "container",
        children: [
          a.jsxs("div", {
            className: "section-heading text-center mb-40",
            "data-aos": "fade-up",
            "data-aos-delay": "400ms",
            children: [
              a.jsx("h3", { children: "Testimonials" }),
              a.jsxs("h2", {
                children: [
                  "5000+ ",
                  a.jsx("span", { children: "Happy Gamers" }),
                  " ",
                  a.jsx("br", {}),
                  " Around The World",
                ],
              }),
              a.jsxs("p", {
                children: [
                  "Our success in creating business solutions is due in large part",
                  " ",
                  a.jsx("br", {}),
                  "to our talented and highly committed team.",
                ],
              }),
            ],
          }),
          a.jsx("div", {
            className: "carousel-wrap",
            children: a.jsx(Ua, {
              className: "testimonial-carousel",
              modules: [G0, Es],
              slidesPerView: 1,
              spaceBetween: 0,
              loop: !0,
              autoplay: { delay: 4e3, disableOnInteraction: !1 },
              speed: 400,
              pagination: { clickable: !0 },
              breakpoints: { 767: { slidesPerView: 2, spaceBetween: 30 } },
              children: Zb.map((s) =>
                a.jsx(dt, { children: a.jsx(Jb, { ...s }) }, s.id),
              ),
            }),
          }),
        ],
      }),
    }),
  $b = [
    {
      game: "Counter Strike",
      date: "Jan 01 2022",
      img: Bl,
      link: "https://www.youtube.com/watch?v=tv7LfFeamsc",
    },
    {
      game: "Call of Duty",
      date: "Jan 01 2022",
      img: Ms,
      link: "https://www.youtube.com/watch?v=tv7LfFeamsc",
    },
    {
      game: "StarCraft II",
      date: "Jan 01 2022",
      img: qi,
      link: "https://www.youtube.com/watch?v=tv7LfFeamsc",
    },
  ];
function Kb() {
  return a.jsxs("div", {
    className: "body",
    children: [
      a.jsx(Yb, {}),
      a.jsx("section", {
        className: "promo-section padding-top",
        children: a.jsx("div", {
          className: "container",
          children: a.jsxs("div", {
            className: "row",
            children: [
              a.jsx("div", {
                className: "col-lg-4 col-md-6 sm-padding",
                "data-aos": "fade-up",
                "data-aos-delay": "800ms",
                children: a.jsx("div", {
                  className: "promo-item",
                  children: a.jsxs("div", {
                    className: "promo-content",
                    children: [
                      a.jsx("img", {
                        className: "promo-icon",
                        src: kb,
                        alt: "thumb",
                      }),
                      a.jsx("h3", { children: "Live Streming" }),
                      a.jsx("p", {
                        children:
                          "Our success in creating business solutions is due in large part to our talented and highly committed team.",
                      }),
                    ],
                  }),
                }),
              }),
              a.jsx("div", {
                className: "col-lg-4 col-md-6 sm-padding",
                "data-aos": "fade-up",
                "data-aos-delay": "1000ms",
                children: a.jsx("div", {
                  className: "promo-item",
                  children: a.jsxs("div", {
                    className: "promo-content",
                    children: [
                      a.jsx("img", {
                        className: "promo-icon",
                        src: Xb,
                        alt: "thumb",
                      }),
                      a.jsx("h3", { children: "Gaming Updates" }),
                      a.jsx("p", {
                        children:
                          "Our success in creating business solutions is due in large part to our talented and highly committed team.",
                      }),
                    ],
                  }),
                }),
              }),
              a.jsx("div", {
                className: "col-lg-4 col-md-6 sm-padding",
                "data-aos": "fade-up",
                "data-aos-delay": "1200ms",
                children: a.jsx("div", {
                  className: "promo-item",
                  children: a.jsxs("div", {
                    className: "promo-content",
                    children: [
                      a.jsx("img", {
                        className: "promo-icon",
                        src: Qb,
                        alt: "thumb",
                      }),
                      a.jsx("h3", { children: "Tournamens" }),
                      a.jsx("p", {
                        children:
                          "Our success in creating business solutions is due in large part to our talented and highly committed team.",
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
      a.jsx(zp, {}),
      a.jsx(Cs, {}),
      a.jsx(Gi, {}),
      a.jsx(vr, {}),
      a.jsx("section", {
        className: "latest-gameplay padding-bottom",
        children: a.jsxs("div", {
          className: "container",
          children: [
            a.jsxs("div", {
              className: "section-heading text-center mb-40",
              children: [
                a.jsx("h3", { children: "Latest Gameplay" }),
                a.jsxs("h2", {
                  children: [
                    "Watch Our ",
                    a.jsx("span", { children: "Gameplay" }),
                  ],
                }),
                a.jsxs("p", {
                  children: [
                    "Our success in creating business solutions is due in large part",
                    " ",
                    a.jsx("br", {}),
                    "to our talented and highly committed team.",
                  ],
                }),
              ],
            }),
            a.jsx("div", {
              className: "row",
              children: $b.map((s) =>
                a.jsx("div", {
                  className: "col-lg-4 col-md-6 sm-padding",
                  children: a.jsxs("div", {
                    className: "gameplay-card",
                    children: [
                      a.jsx("img", { src: s.img, alt: "thumb" }),
                      a.jsx(fu, { youtubeId: "tv7LfFeamsc" }),
                      a.jsxs("div", {
                        className: "gameplay-info",
                        children: [
                          a.jsx("ul", {
                            className: "post-meta",
                            children: a.jsxs("li", {
                              children: [
                                a.jsx("i", { className: "las la-calendar" }),
                                s.date,
                              ],
                            }),
                          }),
                          a.jsx("h2", { children: s.game }),
                        ],
                      }),
                    ],
                  }),
                }),
              ),
            }),
          ],
        }),
      }),
      a.jsx(Fb, {}),
      a.jsx(Ip, {}),
      a.jsx(ft, {}),
    ],
  });
}
Cx.createRoot(document.getElementById("root")).render(
  a.jsx(Wj, {
    children: a.jsx(Mj, {
      children: a.jsxs(Qe, {
        path: "/",
        element: a.jsx(ub, {}),
        children: [
          a.jsx(Qe, { index: !0, element: a.jsx(P0, {}) }),
          a.jsx(Qe, { path: "/esports", element: a.jsx(Kb, {}) }),
          a.jsx(Qe, { path: "/upcoming-matches", element: a.jsx(db, {}) }),
          a.jsx(Qe, { path: "/stream-schedule", element: a.jsx(hb, {}) }),
          a.jsx(Qe, { path: "/match-details", element: a.jsx(mb, {}) }),
          a.jsx(Qe, { path: "/player-details", element: a.jsx(wb, {}) }),
          a.jsx(Qe, { path: "/team-details", element: a.jsx(jb, {}) }),
          a.jsx(Qe, { path: "/about", element: a.jsx(Ob, {}) }),
          a.jsx(Qe, { path: "/our-gamers", element: a.jsx(Eb, {}) }),
          a.jsx(Qe, { path: "/sponsors", element: a.jsx(Tb, {}) }),
          a.jsx(Qe, { path: "/faq", element: a.jsx(Ab, {}) }),
          a.jsx(Qe, { path: "/404", element: a.jsx(Im, {}) }),
          a.jsx(Qe, { path: "/shop", element: a.jsx(Db, {}) }),
          a.jsx(Qe, { path: "/shop-details", element: a.jsx(Lb, {}) }),
          a.jsx(Qe, { path: "/cart", element: a.jsx(Rb, {}) }),
          a.jsx(Qe, { path: "/checkout", element: a.jsx(_b, {}) }),
          a.jsx(Qe, { path: "/blog", element: a.jsx(Hb, {}) }),
          a.jsx(Qe, { path: "/blog-classic", element: a.jsx(Ub, {}) }),
          a.jsx(Qe, { path: "/blog-details", element: a.jsx(qb, {}) }),
          a.jsx(Qe, { path: "/contact", element: a.jsx(Vb, {}) }),
          a.jsx(Qe, { path: "*", element: a.jsx(Im, {}) }),
        ],
      }),
    }),
  }),
);
