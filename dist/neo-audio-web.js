!function (e, n) {
  "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports["neo-audio-web"] = n() : e["neo-audio-web"] = n()
}(window, (function () {
  return function (e) {
    var n = window.webpackHotUpdateneo_audio_web;
    window.webpackHotUpdateneo_audio_web = function (e, r) {
      !function (e, n) {
        if (!O[e] || !_[e]) return;
        for (var r in _[e] = !1, n) Object.prototype.hasOwnProperty.call(n, r) && (y[r] = n[r]);
        0 == --w && 0 === b && D()
      }(e, r), n && n(e, r)
    };
    var r, t = !0, o = "8926c9fab771769f3d06", i = 1e4, c = {}, d = [], a = [];

    function s(e) {
      var n = P[e];
      if (!n) return H;
      var t = function (t) {
        return n.hot.active ? (P[t] ? -1 === P[t].parents.indexOf(e) && P[t].parents.push(e) : (d = [e], r = t), -1 === n.children.indexOf(t) && n.children.push(t)) : (console.warn("[HMR] unexpected require(" + t + ") from disposed module " + e), d = []), H(t)
      }, o = function (e) {
        return {
          configurable: !0, enumerable: !0, get: function () {
            return H[e]
          }, set: function (n) {
            H[e] = n
          }
        }
      };
      for (var i in H) Object.prototype.hasOwnProperty.call(H, i) && "e" !== i && "t" !== i && Object.defineProperty(t, i, o(i));
      return t.e = function (e) {
        return "ready" === p && f("prepare"), b++, H.e(e).then(n, (function (e) {
          throw n(), e
        }));

        function n() {
          b--, "prepare" === p && (m[e] || x(e), 0 === b && 0 === w && D())
        }
      }, t.t = function (e, n) {
        return 1 & n && (e = t(e)), H.t(e, -2 & n)
      }, t
    }

    function u(e) {
      var n = {
        _acceptedDependencies: {},
        _declinedDependencies: {},
        _selfAccepted: !1,
        _selfDeclined: !1,
        _disposeHandlers: [],
        _main: r !== e,
        active: !0,
        accept: function (e, r) {
          if (void 0 === e) n._selfAccepted = !0; else if ("function" == typeof e) n._selfAccepted = e; else if ("object" == typeof e) for (var t = 0; t < e.length; t++) n._acceptedDependencies[e[t]] = r || function () {
          }; else n._acceptedDependencies[e] = r || function () {
          }
        },
        decline: function (e) {
          if (void 0 === e) n._selfDeclined = !0; else if ("object" == typeof e) for (var r = 0; r < e.length; r++) n._declinedDependencies[e[r]] = !0; else n._declinedDependencies[e] = !0
        },
        dispose: function (e) {
          n._disposeHandlers.push(e)
        },
        addDisposeHandler: function (e) {
          n._disposeHandlers.push(e)
        },
        removeDisposeHandler: function (e) {
          var r = n._disposeHandlers.indexOf(e);
          r >= 0 && n._disposeHandlers.splice(r, 1)
        },
        check: j,
        apply: E,
        status: function (e) {
          if (!e) return p;
          l.push(e)
        },
        addStatusHandler: function (e) {
          l.push(e)
        },
        removeStatusHandler: function (e) {
          var n = l.indexOf(e);
          n >= 0 && l.splice(n, 1)
        },
        data: c[e]
      };
      return r = void 0, n
    }

    var l = [], p = "idle";

    function f(e) {
      p = e;
      for (var n = 0; n < l.length; n++) l[n].call(null, e)
    }

    var h, y, v, w = 0, b = 0, m = {}, _ = {}, O = {};

    function g(e) {
      return +e + "" === e ? +e : e
    }

    function j(e) {
      if ("idle" !== p) throw new Error("check() is only allowed in idle status");
      return t = e, f("check"), (n = i, n = n || 1e4, new Promise((function (e, r) {
        if ("undefined" == typeof XMLHttpRequest) return r(new Error("No browser support"));
        try {
          var t = new XMLHttpRequest, i = H.p + "" + o + ".hot-update.json";
          t.open("GET", i, !0), t.timeout = n, t.send(null)
        } catch (e) {
          return r(e)
        }
        t.onreadystatechange = function () {
          if (4 === t.readyState) if (0 === t.status) r(new Error("Manifest request to " + i + " timed out.")); else if (404 === t.status) e(); else if (200 !== t.status && 304 !== t.status) r(new Error("Manifest request to " + i + " failed.")); else {
            try {
              var n = JSON.parse(t.responseText)
            } catch (e) {
              return void r(e)
            }
            e(n)
          }
        }
      }))).then((function (e) {
        if (!e) return f("idle"), null;
        _ = {}, m = {}, O = e.c, v = e.h, f("prepare");
        var n = new Promise((function (e, n) {
          h = {resolve: e, reject: n}
        }));
        y = {};
        return x(0), "prepare" === p && 0 === b && 0 === w && D(), n
      }));
      var n
    }

    function x(e) {
      O[e] ? (_[e] = !0, w++, function (e) {
        var n = document.createElement("script");
        n.charset = "utf-8", n.src = H.p + "" + e + "." + o + ".hot-update.js", document.head.appendChild(n)
      }(e)) : m[e] = !0
    }

    function D() {
      f("ready");
      var e = h;
      if (h = null, e) if (t) Promise.resolve().then((function () {
        return E(t)
      })).then((function (n) {
        e.resolve(n)
      }), (function (n) {
        e.reject(n)
      })); else {
        var n = [];
        for (var r in y) Object.prototype.hasOwnProperty.call(y, r) && n.push(g(r));
        e.resolve(n)
      }
    }

    function E(n) {
      if ("ready" !== p) throw new Error("apply() is only allowed in ready status");
      var r, t, i, a, s;

      function u(e) {
        for (var n = [e], r = {}, t = n.map((function (e) {
          return {chain: [e], id: e}
        })); t.length > 0;) {
          var o = t.pop(), i = o.id, c = o.chain;
          if ((a = P[i]) && !a.hot._selfAccepted) {
            if (a.hot._selfDeclined) return {type: "self-declined", chain: c, moduleId: i};
            if (a.hot._main) return {type: "unaccepted", chain: c, moduleId: i};
            for (var d = 0; d < a.parents.length; d++) {
              var s = a.parents[d], u = P[s];
              if (u) {
                if (u.hot._declinedDependencies[i]) return {
                  type: "declined",
                  chain: c.concat([s]),
                  moduleId: i,
                  parentId: s
                };
                -1 === n.indexOf(s) && (u.hot._acceptedDependencies[i] ? (r[s] || (r[s] = []), l(r[s], [i])) : (delete r[s], n.push(s), t.push({
                  chain: c.concat([s]),
                  id: s
                })))
              }
            }
          }
        }
        return {type: "accepted", moduleId: e, outdatedModules: n, outdatedDependencies: r}
      }

      function l(e, n) {
        for (var r = 0; r < n.length; r++) {
          var t = n[r];
          -1 === e.indexOf(t) && e.push(t)
        }
      }

      n = n || {};
      var h = {}, w = [], b = {}, m = function () {
        console.warn("[HMR] unexpected require(" + j.moduleId + ") to disposed module")
      };
      for (var _ in y) if (Object.prototype.hasOwnProperty.call(y, _)) {
        var j;
        s = g(_);
        var x = !1, D = !1, E = !1, A = "";
        switch ((j = y[_] ? u(s) : {
          type: "disposed",
          moduleId: _
        }).chain && (A = "\nUpdate propagation: " + j.chain.join(" -> ")), j.type) {
          case"self-declined":
            n.onDeclined && n.onDeclined(j), n.ignoreDeclined || (x = new Error("Aborted because of self decline: " + j.moduleId + A));
            break;
          case"declined":
            n.onDeclined && n.onDeclined(j), n.ignoreDeclined || (x = new Error("Aborted because of declined dependency: " + j.moduleId + " in " + j.parentId + A));
            break;
          case"unaccepted":
            n.onUnaccepted && n.onUnaccepted(j), n.ignoreUnaccepted || (x = new Error("Aborted because " + s + " is not accepted" + A));
            break;
          case"accepted":
            n.onAccepted && n.onAccepted(j), D = !0;
            break;
          case"disposed":
            n.onDisposed && n.onDisposed(j), E = !0;
            break;
          default:
            throw new Error("Unexception type " + j.type)
        }
        if (x) return f("abort"), Promise.reject(x);
        if (D) for (s in b[s] = y[s], l(w, j.outdatedModules), j.outdatedDependencies) Object.prototype.hasOwnProperty.call(j.outdatedDependencies, s) && (h[s] || (h[s] = []), l(h[s], j.outdatedDependencies[s]));
        E && (l(w, [j.moduleId]), b[s] = m)
      }
      var I, k = [];
      for (t = 0; t < w.length; t++) s = w[t], P[s] && P[s].hot._selfAccepted && b[s] !== m && k.push({
        module: s,
        errorHandler: P[s].hot._selfAccepted
      });
      f("dispose"), Object.keys(O).forEach((function (e) {
        !1 === O[e] && function (e) {
          delete installedChunks[e]
        }(e)
      }));
      for (var M, S, U = w.slice(); U.length > 0;) if (s = U.pop(), a = P[s]) {
        var q = {}, C = a.hot._disposeHandlers;
        for (i = 0; i < C.length; i++) (r = C[i])(q);
        for (c[s] = q, a.hot.active = !1, delete P[s], delete h[s], i = 0; i < a.children.length; i++) {
          var R = P[a.children[i]];
          R && ((I = R.parents.indexOf(s)) >= 0 && R.parents.splice(I, 1))
        }
      }
      for (s in h) if (Object.prototype.hasOwnProperty.call(h, s) && (a = P[s])) for (S = h[s], i = 0; i < S.length; i++) M = S[i], (I = a.children.indexOf(M)) >= 0 && a.children.splice(I, 1);
      for (s in f("apply"), o = v, b) Object.prototype.hasOwnProperty.call(b, s) && (e[s] = b[s]);
      var T = null;
      for (s in h) if (Object.prototype.hasOwnProperty.call(h, s) && (a = P[s])) {
        S = h[s];
        var L = [];
        for (t = 0; t < S.length; t++) if (M = S[t], r = a.hot._acceptedDependencies[M]) {
          if (-1 !== L.indexOf(r)) continue;
          L.push(r)
        }
        for (t = 0; t < L.length; t++) {
          r = L[t];
          try {
            r(S)
          } catch (e) {
            n.onErrored && n.onErrored({
              type: "accept-errored",
              moduleId: s,
              dependencyId: S[t],
              error: e
            }), n.ignoreErrored || T || (T = e)
          }
        }
      }
      for (t = 0; t < k.length; t++) {
        var N = k[t];
        s = N.module, d = [s];
        try {
          H(s)
        } catch (e) {
          if ("function" == typeof N.errorHandler) try {
            N.errorHandler(e)
          } catch (r) {
            n.onErrored && n.onErrored({
              type: "self-accept-error-handler-errored",
              moduleId: s,
              error: r,
              originalError: e
            }), n.ignoreErrored || T || (T = r), T || (T = e)
          } else n.onErrored && n.onErrored({
            type: "self-accept-errored",
            moduleId: s,
            error: e
          }), n.ignoreErrored || T || (T = e)
        }
      }
      return T ? (f("fail"), Promise.reject(T)) : (f("idle"), new Promise((function (e) {
        e(w)
      })))
    }

    var P = {};

    function H(n) {
      if (P[n]) return P[n].exports;
      var r = P[n] = {i: n, l: !1, exports: {}, hot: u(n), parents: (a = d, d = [], a), children: []};
      return e[n].call(r.exports, r, r.exports, s(n)), r.l = !0, r.exports
    }

    return H.m = e, H.c = P, H.d = function (e, n, r) {
      H.o(e, n) || Object.defineProperty(e, n, {enumerable: !0, get: r})
    }, H.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, H.t = function (e, n) {
      if (1 & n && (e = H(e)), 8 & n) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (H.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & n && "string" != typeof e) for (var t in e) H.d(r, t, function (n) {
        return e[n]
      }.bind(null, t));
      return r
    }, H.n = function (e) {
      var n = e && e.__esModule ? function () {
        return e.default
      } : function () {
        return e
      };
      return H.d(n, "a", n), n
    }, H.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n)
    }, H.p = "", H.h = function () {
      return o
    }, s("./src/index.ts")(H.s = "./src/index.ts")
  }({
    "./src/index.ts": function (e, n, r) {
      "use strict";
      r.r(n);
      var t = function () {
        return new Promise((e, n) => {
          try {
            window.AudioContext = window.AudioContext || window.webkitAudioContext || null, window.AudioContext ? e({accessible: !0}) : n({accessible: !1})
          } catch (e) {
            n({accessible: !1, reason: e})
          }
        })
      };
      !async function () {
        let e = await t();
        console.log(e)
      }()
    }
  })
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZW8tYXVkaW8td2ViL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9uZW8tYXVkaW8td2ViL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25lby1hdWRpby13ZWIvLi9zcmMvaGVscGVycy9jaGVja0FjY2Vzc2liaWxpdHkudHMiLCJ3ZWJwYWNrOi8vbmVvLWF1ZGlvLXdlYi8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJyb290IiwiZmFjdG9yeSIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZpbmUiLCJhbWQiLCJ3aW5kb3ciLCJwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayIsImNodW5rSWQiLCJtb3JlTW9kdWxlcyIsImhvdEF2YWlsYWJsZUZpbGVzTWFwIiwiaG90UmVxdWVzdGVkRmlsZXNNYXAiLCJtb2R1bGVJZCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImhvdFVwZGF0ZSIsImhvdFdhaXRpbmdGaWxlcyIsImhvdENodW5rc0xvYWRpbmciLCJob3RVcGRhdGVEb3dubG9hZGVkIiwiaG90QWRkVXBkYXRlQ2h1bmsiLCJob3RDdXJyZW50Q2hpbGRNb2R1bGUiLCJob3RBcHBseU9uVXBkYXRlIiwiaG90Q3VycmVudEhhc2giLCJob3RSZXF1ZXN0VGltZW91dCIsImhvdEN1cnJlbnRNb2R1bGVEYXRhIiwiaG90Q3VycmVudFBhcmVudHMiLCJob3RDdXJyZW50UGFyZW50c1RlbXAiLCJob3RDcmVhdGVSZXF1aXJlIiwibWUiLCJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImZuIiwicmVxdWVzdCIsImhvdCIsImFjdGl2ZSIsInBhcmVudHMiLCJpbmRleE9mIiwicHVzaCIsImNoaWxkcmVuIiwiY29uc29sZSIsIndhcm4iLCJPYmplY3RGYWN0b3J5IiwibmFtZSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJnZXQiLCJzZXQiLCJ2YWx1ZSIsImRlZmluZVByb3BlcnR5IiwiZSIsImhvdFN0YXR1cyIsImhvdFNldFN0YXR1cyIsInRoZW4iLCJmaW5pc2hDaHVua0xvYWRpbmciLCJlcnIiLCJob3RXYWl0aW5nRmlsZXNNYXAiLCJob3RFbnN1cmVVcGRhdGVDaHVuayIsInQiLCJtb2RlIiwiaG90Q3JlYXRlTW9kdWxlIiwiX2FjY2VwdGVkRGVwZW5kZW5jaWVzIiwiX2RlY2xpbmVkRGVwZW5kZW5jaWVzIiwiX3NlbGZBY2NlcHRlZCIsIl9zZWxmRGVjbGluZWQiLCJfZGlzcG9zZUhhbmRsZXJzIiwiX21haW4iLCJhY2NlcHQiLCJkZXAiLCJjYWxsYmFjayIsInVuZGVmaW5lZCIsImkiLCJsZW5ndGgiLCJkZWNsaW5lIiwiZGlzcG9zZSIsImFkZERpc3Bvc2VIYW5kbGVyIiwicmVtb3ZlRGlzcG9zZUhhbmRsZXIiLCJpZHgiLCJzcGxpY2UiLCJjaGVjayIsImhvdENoZWNrIiwiYXBwbHkiLCJob3RBcHBseSIsInN0YXR1cyIsImwiLCJob3RTdGF0dXNIYW5kbGVycyIsImFkZFN0YXR1c0hhbmRsZXIiLCJyZW1vdmVTdGF0dXNIYW5kbGVyIiwiZGF0YSIsIm5ld1N0YXR1cyIsImhvdERlZmVycmVkIiwiaG90VXBkYXRlTmV3SGFzaCIsInRvTW9kdWxlSWQiLCJpZCIsIkVycm9yIiwicmVxdWVzdFRpbWVvdXQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIlhNTEh0dHBSZXF1ZXN0IiwicmVxdWVzdFBhdGgiLCJwIiwib3BlbiIsInRpbWVvdXQiLCJzZW5kIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInVwZGF0ZSIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsImMiLCJoIiwicHJvbWlzZSIsInNjcmlwdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNoYXJzZXQiLCJzcmMiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJob3REb3dubG9hZFVwZGF0ZUNodW5rIiwiZGVmZXJyZWQiLCJyZXN1bHQiLCJvdXRkYXRlZE1vZHVsZXMiLCJvcHRpb25zIiwiY2IiLCJqIiwiZ2V0QWZmZWN0ZWRTdHVmZiIsInVwZGF0ZU1vZHVsZUlkIiwib3V0ZGF0ZWREZXBlbmRlbmNpZXMiLCJxdWV1ZSIsIm1hcCIsImNoYWluIiwicXVldWVJdGVtIiwicG9wIiwidHlwZSIsInBhcmVudElkIiwicGFyZW50IiwiY29uY2F0IiwiYWRkQWxsVG9TZXQiLCJhIiwiYiIsIml0ZW0iLCJhcHBsaWVkVXBkYXRlIiwid2FyblVuZXhwZWN0ZWRSZXF1aXJlIiwiYWJvcnRFcnJvciIsImRvQXBwbHkiLCJkb0Rpc3Bvc2UiLCJjaGFpbkluZm8iLCJqb2luIiwib25EZWNsaW5lZCIsImlnbm9yZURlY2xpbmVkIiwib25VbmFjY2VwdGVkIiwiaWdub3JlVW5hY2NlcHRlZCIsIm9uQWNjZXB0ZWQiLCJvbkRpc3Bvc2VkIiwib3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzIiwiZXJyb3JIYW5kbGVyIiwia2V5cyIsImZvckVhY2giLCJpbnN0YWxsZWRDaHVua3MiLCJob3REaXNwb3NlQ2h1bmsiLCJkZXBlbmRlbmN5IiwibW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMiLCJzbGljZSIsImRpc3Bvc2VIYW5kbGVycyIsImNoaWxkIiwibW9kdWxlcyIsImVycm9yIiwiY2FsbGJhY2tzIiwib25FcnJvcmVkIiwiZGVwZW5kZW5jeUlkIiwiaWdub3JlRXJyb3JlZCIsImVycjIiLCJvcmlnaW5hbEVycm9yIiwibSIsImQiLCJnZXR0ZXIiLCJvIiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInMiLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJhY2Nlc3NpYmxlIiwicmVhc29uIiwiYXN5bmMiLCJjaGVja0FjY2Vzc2liaWxpdHkiLCJsb2ciLCJmIl0sIm1hcHBpbmdzIjoiQ0FBQSxTQUEyQ0Es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RVBnRCxFQUFPLENBQ0xnRyxZQUFZLEVBQ1pDLE9BQVFqSixTQ3JCaEJrSixpQkFDRSxJQUFJdkQsUUFBVXdELElBQ2Q3SixRQUFROEosSUFBSXpELEdBR2QwRCIsImZpbGUiOiJuZW8tYXVkaW8td2ViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibmVvLWF1ZGlvLXdlYlwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJuZW8tYXVkaW8td2ViXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHRmdW5jdGlvbiBob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0fVxuIFx0dmFyIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrID0gd2luZG93W1wid2VicGFja0hvdFVwZGF0ZW5lb19hdWRpb193ZWJcIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlbmVvX2F1ZGlvX3dlYlwiXSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gd2VicGFja0hvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdFx0aWYgKHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKSBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHR9IDtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gXHRcdHNjcmlwdC5jaGFyc2V0ID0gXCJ1dGYtOFwiO1xuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc1wiO1xuIFx0XHRpZiAobnVsbCkgc2NyaXB0LmNyb3NzT3JpZ2luID0gbnVsbDtcbiBcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkTWFuaWZlc3QocmVxdWVzdFRpbWVvdXQpIHtcbiBcdFx0cmVxdWVzdFRpbWVvdXQgPSByZXF1ZXN0VGltZW91dCB8fCAxMDAwMDtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgPT09IFwidW5kZWZpbmVkXCIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QobmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0XCIpKTtcbiBcdFx0XHR9XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdFBhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzb25cIjtcbiBcdFx0XHRcdHJlcXVlc3Qub3BlbihcIkdFVFwiLCByZXF1ZXN0UGF0aCwgdHJ1ZSk7XG4gXHRcdFx0XHRyZXF1ZXN0LnRpbWVvdXQgPSByZXF1ZXN0VGltZW91dDtcbiBcdFx0XHRcdHJlcXVlc3Quc2VuZChudWxsKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QoZXJyKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHJldHVybjtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCkge1xuIFx0XHRcdFx0XHQvLyB0aW1lb3V0XG4gXHRcdFx0XHRcdHJlamVjdChcbiBcdFx0XHRcdFx0XHRuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiB0aW1lZCBvdXQuXCIpXG4gXHRcdFx0XHRcdCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzID09PSA0MDQpIHtcbiBcdFx0XHRcdFx0Ly8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuIFx0XHRcdFx0XHRyZXNvbHZlKCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzICE9PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgIT09IDMwNCkge1xuIFx0XHRcdFx0XHQvLyBvdGhlciBmYWlsdXJlXG4gXHRcdFx0XHRcdHJlamVjdChuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiBmYWlsZWQuXCIpKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdC8vIHN1Y2Nlc3NcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHR2YXIgdXBkYXRlID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcbiBcdFx0XHRcdFx0XHRyZWplY3QoZSk7XG4gXHRcdFx0XHRcdFx0cmV0dXJuO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdHJlc29sdmUodXBkYXRlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0dmFyIGhvdEFwcGx5T25VcGRhdGUgPSB0cnVlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudEhhc2ggPSBcIjg5MjZjOWZhYjc3MTc2OWYzZDA2XCI7XG4gXHR2YXIgaG90UmVxdWVzdFRpbWVvdXQgPSAxMDAwMDtcbiBcdHZhciBob3RDdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xuIFx0dmFyIGhvdEN1cnJlbnRDaGlsZE1vZHVsZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50c1RlbXAgPSBbXTtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRpZiAoIW1lKSByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXztcbiBcdFx0dmFyIGZuID0gZnVuY3Rpb24ocmVxdWVzdCkge1xuIFx0XHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG4gXHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuIFx0XHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpID09PSAtMSkge1xuIFx0XHRcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuIFx0XHRcdFx0XHRcdHJlcXVlc3QgK1xuIFx0XHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdCk7XG4gXHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhyZXF1ZXN0KTtcbiBcdFx0fTtcbiBcdFx0dmFyIE9iamVjdEZhY3RvcnkgPSBmdW5jdGlvbiBPYmplY3RGYWN0b3J5KG5hbWUpIHtcbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdO1xuIFx0XHRcdFx0fSxcbiBcdFx0XHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiBcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXSA9IHZhbHVlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH07XG4gXHRcdGZvciAodmFyIG5hbWUgaW4gX193ZWJwYWNrX3JlcXVpcmVfXykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfX3dlYnBhY2tfcmVxdWlyZV9fLCBuYW1lKSAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJlXCIgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwidFwiXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIE9iamVjdEZhY3RvcnkobmFtZSkpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRmbi5lID0gZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicmVhZHlcIikgaG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHRob3RDaHVua3NMb2FkaW5nKys7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShjaHVua0lkKS50aGVuKGZpbmlzaENodW5rTG9hZGluZywgZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRmaW5pc2hDaHVua0xvYWRpbmcoKTtcbiBcdFx0XHRcdHRocm93IGVycjtcbiBcdFx0XHR9KTtcblxuIFx0XHRcdGZ1bmN0aW9uIGZpbmlzaENodW5rTG9hZGluZygpIHtcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmctLTtcbiBcdFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiKSB7XG4gXHRcdFx0XHRcdGlmICghaG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiYgaG90V2FpdGluZ0ZpbGVzID09PSAwKSB7XG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9O1xuIFx0XHRmbi50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0XHRpZiAobW9kZSAmIDEpIHZhbHVlID0gZm4odmFsdWUpO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQodmFsdWUsIG1vZGUgJiB+MSk7XG4gXHRcdH07XG4gXHRcdHJldHVybiBmbjtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIGhvdCA9IHtcbiBcdFx0XHQvLyBwcml2YXRlIHN0dWZmXG4gXHRcdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxuIFx0XHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxuIFx0XHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuIFx0XHRcdF9tYWluOiBob3RDdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkLFxuXG4gXHRcdFx0Ly8gTW9kdWxlIEFQSVxuIFx0XHRcdGFjdGl2ZTogdHJ1ZSxcbiBcdFx0XHRhY2NlcHQ6IGZ1bmN0aW9uKGRlcCwgY2FsbGJhY2spIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0XHRlbHNlIGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0fSxcbiBcdFx0XHRkZWNsaW5lOiBmdW5jdGlvbihkZXApIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRpc3Bvc2U6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vIE1hbmFnZW1lbnQgQVBJXG4gXHRcdFx0Y2hlY2s6IGhvdENoZWNrLFxuIFx0XHRcdGFwcGx5OiBob3RBcHBseSxcbiBcdFx0XHRzdGF0dXM6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGlmICghbCkgcmV0dXJuIGhvdFN0YXR1cztcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG5cbiBcdFx0XHQvL2luaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcbiBcdFx0XHRkYXRhOiBob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cbiBcdFx0fTtcbiBcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xuIFx0XHRyZXR1cm4gaG90O1xuIFx0fVxuXG4gXHR2YXIgaG90U3RhdHVzSGFuZGxlcnMgPSBbXTtcbiBcdHZhciBob3RTdGF0dXMgPSBcImlkbGVcIjtcblxuIFx0ZnVuY3Rpb24gaG90U2V0U3RhdHVzKG5ld1N0YXR1cykge1xuIFx0XHRob3RTdGF0dXMgPSBuZXdTdGF0dXM7XG4gXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaG90U3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXG4gXHRcdFx0aG90U3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xuIFx0fVxuXG4gXHQvLyB3aGlsZSBkb3dubG9hZGluZ1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlcyA9IDA7XG4gXHR2YXIgaG90Q2h1bmtzTG9hZGluZyA9IDA7XG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RBdmFpbGFibGVGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdERlZmVycmVkO1xuXG4gXHQvLyBUaGUgdXBkYXRlIGluZm9cbiBcdHZhciBob3RVcGRhdGUsIGhvdFVwZGF0ZU5ld0hhc2g7XG5cbiBcdGZ1bmN0aW9uIHRvTW9kdWxlSWQoaWQpIHtcbiBcdFx0dmFyIGlzTnVtYmVyID0gK2lkICsgXCJcIiA9PT0gaWQ7XG4gXHRcdHJldHVybiBpc051bWJlciA/ICtpZCA6IGlkO1xuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RDaGVjayhhcHBseSkge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcImlkbGVcIikge1xuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xuIFx0XHR9XG4gXHRcdGhvdEFwcGx5T25VcGRhdGUgPSBhcHBseTtcbiBcdFx0aG90U2V0U3RhdHVzKFwiY2hlY2tcIik7XG4gXHRcdHJldHVybiBob3REb3dubG9hZE1hbmlmZXN0KGhvdFJlcXVlc3RUaW1lb3V0KS50aGVuKGZ1bmN0aW9uKHVwZGF0ZSkge1xuIFx0XHRcdGlmICghdXBkYXRlKSB7XG4gXHRcdFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRcdFx0cmV0dXJuIG51bGw7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90QXZhaWxhYmxlRmlsZXNNYXAgPSB1cGRhdGUuYztcbiBcdFx0XHRob3RVcGRhdGVOZXdIYXNoID0gdXBkYXRlLmg7XG5cbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRob3REZWZlcnJlZCA9IHtcbiBcdFx0XHRcdFx0cmVzb2x2ZTogcmVzb2x2ZSxcbiBcdFx0XHRcdFx0cmVqZWN0OiByZWplY3RcbiBcdFx0XHRcdH07XG4gXHRcdFx0fSk7XG4gXHRcdFx0aG90VXBkYXRlID0ge307XG4gXHRcdFx0dmFyIGNodW5rSWQgPSAwO1xuIFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lLWJsb2Nrc1xuIFx0XHRcdHtcbiBcdFx0XHRcdC8qZ2xvYmFscyBjaHVua0lkICovXG4gXHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aG90U3RhdHVzID09PSBcInByZXBhcmVcIiAmJlxuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJlxuIFx0XHRcdFx0aG90V2FpdGluZ0ZpbGVzID09PSAwXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBwcm9taXNlO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdIHx8ICFob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSlcbiBcdFx0XHRyZXR1cm47XG4gXHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gZmFsc2U7XG4gXHRcdGZvciAodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZiAoLS1ob3RXYWl0aW5nRmlsZXMgPT09IDAgJiYgaG90Q2h1bmtzTG9hZGluZyA9PT0gMCkge1xuIFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXMrKztcbiBcdFx0XHRob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdFVwZGF0ZURvd25sb2FkZWQoKSB7XG4gXHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xuIFx0XHR2YXIgZGVmZXJyZWQgPSBob3REZWZlcnJlZDtcbiBcdFx0aG90RGVmZXJyZWQgPSBudWxsO1xuIFx0XHRpZiAoIWRlZmVycmVkKSByZXR1cm47XG4gXHRcdGlmIChob3RBcHBseU9uVXBkYXRlKSB7XG4gXHRcdFx0Ly8gV3JhcCBkZWZlcnJlZCBvYmplY3QgaW4gUHJvbWlzZSB0byBtYXJrIGl0IGFzIGEgd2VsbC1oYW5kbGVkIFByb21pc2UgdG9cbiBcdFx0XHQvLyBhdm9pZCB0cmlnZ2VyaW5nIHVuY2F1Z2h0IGV4Y2VwdGlvbiB3YXJuaW5nIGluIENocm9tZS5cbiBcdFx0XHQvLyBTZWUgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDY1NjY2XG4gXHRcdFx0UHJvbWlzZS5yZXNvbHZlKClcbiBcdFx0XHRcdC50aGVuKGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gaG90QXBwbHkoaG90QXBwbHlPblVwZGF0ZSk7XG4gXHRcdFx0XHR9KVxuIFx0XHRcdFx0LnRoZW4oXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKHJlc3VsdCkge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0ZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGVycik7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdCk7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaCh0b01vZHVsZUlkKGlkKSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHRcdGRlZmVycmVkLnJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwicmVhZHlcIilcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XG4gXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gXHRcdHZhciBjYjtcbiBcdFx0dmFyIGk7XG4gXHRcdHZhciBqO1xuIFx0XHR2YXIgbW9kdWxlO1xuIFx0XHR2YXIgbW9kdWxlSWQ7XG5cbiBcdFx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRTdHVmZih1cGRhdGVNb2R1bGVJZCkge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuIFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG4gXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbihpZCkge1xuIFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXG4gXHRcdFx0XHRcdGlkOiBpZFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAoIW1vZHVsZSB8fCBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudCA9IGluc3RhbGxlZE1vZHVsZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHRcdH07XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG4gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcbiBcdFx0XHRcdFx0cXVldWUucHVzaCh7XG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRpZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuXG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcbiBcdFx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuIFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG4gXHRcdFx0fTtcbiBcdFx0fVxuXG4gXHRcdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcbiBcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdHZhciBpdGVtID0gYltpXTtcbiBcdFx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcbiBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuIFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcbiBcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG4gXHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUoKSB7XG4gXHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcbiBcdFx0XHQpO1xuIFx0XHR9O1xuXG4gXHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XG4gXHRcdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG4gXHRcdFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRcdFx0aWYgKGhvdFVwZGF0ZVtpZF0pIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRTdHVmZihtb2R1bGVJZCk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBpZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cbiBcdFx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG4gXHRcdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG4gXHRcdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcbiBcdFx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG4gXHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcImFib3J0XCIpO1xuIFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoYWJvcnRFcnJvcik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9BcHBseSkge1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IGhvdFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0XHRcdFx0aWYgKFxuIFx0XHRcdFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHRcdFx0XHQpXG4gXHRcdFx0XHRcdFx0KSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG4gXHRcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuIFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRtb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSAmJlxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWQgJiZcbiBcdFx0XHRcdC8vIHJlbW92ZWQgc2VsZi1hY2NlcHRlZCBtb2R1bGVzIHNob3VsZCBub3QgYmUgcmVxdWlyZWRcbiBcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdICE9PSB3YXJuVW5leHBlY3RlZFJlcXVpcmVcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcbiBcdFx0XHRcdFx0bW9kdWxlOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuIFx0XHRcdFx0fSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG4gXHRcdE9iamVjdC5rZXlzKGhvdEF2YWlsYWJsZUZpbGVzTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gPT09IGZhbHNlKSB7XG4gXHRcdFx0XHRob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHR9KTtcblxuIFx0XHR2YXIgaWR4O1xuIFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcbiBcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuIFx0XHRcdHZhciBkYXRhID0ge307XG5cbiBcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcbiBcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdGNiID0gZGlzcG9zZUhhbmRsZXJzW2pdO1xuIFx0XHRcdFx0Y2IoZGF0YSk7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXSA9IGRhdGE7XG5cbiBcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuIFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cbiBcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcbiBcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG4gXHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGNoaWxkID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuIFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG4gXHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG4gXHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cbiBcdFx0dmFyIGRlcGVuZGVuY3k7XG4gXHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcbiBcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcbiBcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImFwcGx5XCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cbiBcdFx0aG90Q3VycmVudEhhc2ggPSBob3RVcGRhdGVOZXdIYXNoO1xuXG4gXHRcdC8vIGluc2VydCBuZXcgY29kZVxuIFx0XHRmb3IgKG1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFwcGxpZWRVcGRhdGUsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuIFx0XHR2YXIgZXJyb3IgPSBudWxsO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV07XG4gXHRcdFx0XHRcdFx0Y2IgPSBtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcbiBcdFx0XHRcdFx0XHRpZiAoY2IpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihjYikgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGNiKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGNiID0gY2FsbGJhY2tzW2ldO1xuIFx0XHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0XHRjYihtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG4gXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXSxcbiBcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG4gXHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcbiBcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyMjtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuIFx0XHRpZiAoZXJyb3IpIHtcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJmYWlsXCIpO1xuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gXHRcdH1cblxuIFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuIFx0XHRcdHJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGhvdDogaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSxcbiBcdFx0XHRwYXJlbnRzOiAoaG90Q3VycmVudFBhcmVudHNUZW1wID0gaG90Q3VycmVudFBhcmVudHMsIGhvdEN1cnJlbnRQYXJlbnRzID0gW10sIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCksXG4gXHRcdFx0Y2hpbGRyZW46IFtdXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBfX3dlYnBhY2tfaGFzaF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhvdEN1cnJlbnRIYXNoOyB9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIGhvdENyZWF0ZVJlcXVpcmUoXCIuL3NyYy9pbmRleC50c1wiKShfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLyoqXG4gKiBAYXV0aG9yIGRvZ2p1anVlXG4gKiBAZmlsZSBjaGVjayB0aGUgYWNjZXNzaWJpbGl0eSBmb3Igd2ViIGF1ZGlvIEFQSSBmb3IgY3VycmVudCBkZXZpY2VcbiAqICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKTogUHJvbWlzZTx7IGFjY2Vzc2libGU6IGJvb2xlYW4sIHJlYXNvbj86IGFueSB9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5BdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQgfHwgbnVsbDtcbiAgICAgIGlmICh3aW5kb3cuQXVkaW9Db250ZXh0KSB7XG4gICAgICAgIC8vIHdlYiBhdWRpbyBBUEkgc3VwcG9ydGVkXG4gICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgIGFjY2Vzc2libGU6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHdlYiBhdWRpbyBBUEkgaXMgbm90IHN1cHBvcnRlZFxuICAgICAgICByZWplY3Qoe1xuICAgICAgICAgIGFjY2Vzc2libGU6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gZXJyb3IgaGVyZSwgc28gd2ViIGF1ZGlvIEFQSSBpcyBub3Qgc3VwcG9ydGVkXG4gICAgICByZWplY3Qoe1xuICAgICAgICBhY2Nlc3NpYmxlOiBmYWxzZSxcbiAgICAgICAgcmVhc29uOiBlLFxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59XG4iLCJpbXBvcnQge2NoZWNrQWNjZXNzaWJpbGl0eX0gZnJvbSAnaGVscGVycyc7XG5cbmFzeW5jIGZ1bmN0aW9uIGYoKSB7XG4gIGxldCBhID0gYXdhaXQgY2hlY2tBY2Nlc3NpYmlsaXR5KCk7XG4gIGNvbnNvbGUubG9nKGEpO1xufVxuXG5mKClcbiJdLCJzb3VyY2VSb290IjoiIn0=
