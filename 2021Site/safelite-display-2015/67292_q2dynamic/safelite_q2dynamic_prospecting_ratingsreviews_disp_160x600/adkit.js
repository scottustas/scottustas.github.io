var requirejs, require, define;
! function(global) {
    function isFunction(e) {
        return "[object Function]" === ostring.call(e)
    }

    function isArray(e) {
        return "[object Array]" === ostring.call(e)
    }

    function each(e, t) {
        if (e) {
            var n;
            for (n = 0; n < e.length && (!e[n] || !t(e[n], n, e)); n += 1);
        }
    }

    function eachReverse(e, t) {
        if (e) {
            var n;
            for (n = e.length - 1; n > -1 && (!e[n] || !t(e[n], n, e)); n -= 1);
        }
    }

    function hasProp(e, t) {
        return hasOwn.call(e, t)
    }

    function getOwn(e, t) {
        return hasProp(e, t) && e[t]
    }

    function eachProp(e, t) {
        var n;
        for (n in e)
            if (hasProp(e, n) && t(e[n], n)) break
    }

    function mixin(e, t, n, i) {
        return t && eachProp(t, function(t, r) {
            (n || !hasProp(e, r)) && (!i || "object" != typeof t || !t || isArray(t) || isFunction(t) || t instanceof RegExp ? e[r] = t : (e[r] || (e[r] = {}), mixin(e[r], t, n, i)))
        }), e
    }

    function bind(e, t) {
        return function() {
            return t.apply(e, arguments)
        }
    }

    function scripts() {
        return document.getElementsByTagName("script")
    }

    function defaultOnError(e) {
        throw e
    }

    function getGlobal(e) {
        if (!e) return e;
        var t = global;
        return each(e.split("."), function(e) {
            t = t[e]
        }), t
    }

    function makeError(e, t, n, i) {
        var r = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e);
        return r.requireType = e, r.requireModules = i, n && (r.originalError = n), r
    }

    function newContext(e) {
        function t(e) {
            var t, n;
            for (t = 0; t < e.length; t++)
                if (n = e[t], "." === n) e.splice(t, 1), t -= 1;
                else if (".." === n) {
                if (0 === t || 1 == t && ".." === e[2] || ".." === e[t - 1]) continue;
                t > 0 && (e.splice(t - 1, 2), t -= 2)
            }
        }

        function n(e, n, i) {
            var r, o, a, s, c, u, d, f, l, p, h, m, g = n && n.split("/"),
                v = q.map,
                b = v && v["*"];
            if (e && (e = e.split("/"), d = e.length - 1, q.nodeIdCompat && jsSuffixRegExp.test(e[d]) && (e[d] = e[d].replace(jsSuffixRegExp, "")), "." === e[0].charAt(0) && g && (m = g.slice(0, g.length - 1), e = m.concat(e)), t(e), e = e.join("/")), i && v && (g || b)) {
                a = e.split("/");
                e: for (s = a.length; s > 0; s -= 1) {
                    if (u = a.slice(0, s).join("/"), g)
                        for (c = g.length; c > 0; c -= 1)
                            if (o = getOwn(v, g.slice(0, c).join("/")), o && (o = getOwn(o, u))) {
                                f = o, l = s;
                                break e
                            }!p && b && getOwn(b, u) && (p = getOwn(b, u), h = s)
                }!f && p && (f = p, l = h), f && (a.splice(0, l, f), e = a.join("/"))
            }
            return r = getOwn(q.pkgs, e), r ? r : e
        }

        function i(e) {
            isBrowser && each(scripts(), function(t) {
                return t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === E.contextName ? (t.parentNode.removeChild(t), !0) : void 0
            })
        }

        function r(e) {
            var t = getOwn(q.paths, e);
            return t && isArray(t) && t.length > 1 ? (t.shift(), E.require.undef(e), E.makeRequire(null, {
                skipMap: !0
            })([e]), !0) : void 0
        }

        function o(e) {
            var t, n = e ? e.indexOf("!") : -1;
            return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
        }

        function a(e, t, i, r) {
            var a, s, c, u, d = null,
                f = t ? t.name : null,
                l = e,
                p = !0,
                h = "";
            return e || (p = !1, e = "_@r" + (B += 1)), u = o(e), d = u[0], e = u[1], d && (d = n(d, f, r), s = getOwn(O, d)), e && (d ? h = s && s.normalize ? s.normalize(e, function(e) {
                return n(e, f, r)
            }) : -1 === e.indexOf("!") ? n(e, f, r) : e : (h = n(e, f, r), u = o(h), d = u[0], h = u[1], i = !0, a = E.nameToUrl(h))), c = !d || s || i ? "" : "_unnormalized" + (D += 1), {
                prefix: d,
                name: h,
                parentMap: t,
                unnormalized: !!c,
                url: a,
                originalName: l,
                isDefine: p,
                id: (d ? d + "!" + h : h) + c
            }
        }

        function s(e) {
            var t = e.id,
                n = getOwn(w, t);
            return n || (n = w[t] = new E.Module(e)), n
        }

        function c(e, t, n) {
            var i = e.id,
                r = getOwn(w, i);
            !hasProp(O, i) || r && !r.defineEmitComplete ? (r = s(e), r.error && "error" === t ? n(r.error) : r.on(t, n)) : "defined" === t && n(O[i])
        }

        function u(e, t) {
            var n = e.requireModules,
                i = !1;
            t ? t(e) : (each(n, function(t) {
                var n = getOwn(w, t);
                n && (n.error = e, n.events.error && (i = !0, n.emit("error", e)))
            }), i || req.onError(e))
        }

        function d() {
            globalDefQueue.length && (apsp.apply(k, [k.length, 0].concat(globalDefQueue)), globalDefQueue = [])
        }

        function f(e) {
            delete w[e], delete M[e]
        }

        function l(e, t, n) {
            var i = e.map.id;
            e.error ? e.emit("error", e.error) : (t[i] = !0, each(e.depMaps, function(i, r) {
                var o = i.id,
                    a = getOwn(w, o);
                !a || e.depMatched[r] || n[o] || (getOwn(t, o) ? (e.defineDep(r, O[o]), e.check()) : l(a, t, n))
            }), n[i] = !0)
        }

        function p() {
            var e, t, n = 1e3 * q.waitSeconds,
                o = n && E.startTime + n < (new Date).getTime(),
                a = [],
                s = [],
                c = !1,
                d = !0;
            if (!b) {
                if (b = !0, eachProp(M, function(e) {
                    var n = e.map,
                        u = n.id;
                    if (e.enabled && (n.isDefine || s.push(e), !e.error))
                        if (!e.inited && o) r(u) ? (t = !0, c = !0) : (a.push(u), i(u));
                        else if (!e.inited && e.fetched && n.isDefine && (c = !0, !n.prefix)) return d = !1
                }), o && a.length) return e = makeError("timeout", "Load timeout for modules: " + a, null, a), e.contextName = E.contextName, u(e);
                d && each(s, function(e) {
                    l(e, {}, {})
                }), o && !t || !c || !isBrowser && !isWebWorker || S || (S = setTimeout(function() {
                    S = 0, p()
                }, 50)), b = !1
            }
        }

        function h(e) {
            hasProp(O, e[0]) || s(a(e[0], null, !0)).init(e[1], e[2])
        }

        function m(e, t, n, i) {
            e.detachEvent && !isOpera ? i && e.detachEvent(i, t) : e.removeEventListener(n, t, !1)
        }

        function g(e) {
            var t = e.currentTarget || e.srcElement;
            return m(t, E.onScriptLoad, "load", "onreadystatechange"), m(t, E.onScriptError, "error"), {
                node: t,
                id: t && t.getAttribute("data-requiremodule")
            }
        }

        function v() {
            var e;
            for (d(); k.length;) {
                if (e = k.shift(), null === e[0]) return u(makeError("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
                h(e)
            }
        }
        var b, x, E, y, S, q = {
                waitSeconds: 7,
                baseUrl: "./",
                paths: {},
                bundles: {},
                pkgs: {},
                shim: {},
                config: {}
            },
            w = {},
            M = {},
            I = {},
            k = [],
            O = {},
            j = {},
            T = {},
            B = 1,
            D = 1;
        return y = {
            require: function(e) {
                return e.require ? e.require : e.require = E.makeRequire(e.map)
            },
            exports: function(e) {
                return e.usingExports = !0, e.map.isDefine ? e.exports ? O[e.map.id] = e.exports : e.exports = O[e.map.id] = {} : void 0
            },
            module: function(e) {
                return e.module ? e.module : e.module = {
                    id: e.map.id,
                    uri: e.map.url,
                    config: function() {
                        return getOwn(q.config, e.map.id) || {}
                    },
                    exports: e.exports || (e.exports = {})
                }
            }
        }, x = function(e) {
            this.events = getOwn(I, e.id) || {}, this.map = e, this.shim = getOwn(q.shim, e.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
        }, x.prototype = {
            init: function(e, t, n, i) {
                i = i || {}, this.inited || (this.factory = t, n ? this.on("error", n) : this.events.error && (n = bind(this, function(e) {
                    this.emit("error", e)
                })), this.depMaps = e && e.slice(0), this.errback = n, this.inited = !0, this.ignore = i.ignore, i.enabled || this.enabled ? this.enable() : this.check())
            },
            defineDep: function(e, t) {
                this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t)
            },
            fetch: function() {
                if (!this.fetched) {
                    this.fetched = !0, E.startTime = (new Date).getTime();
                    var e = this.map;
                    return this.shim ? void E.makeRequire(this.map, {
                        enableBuildCallback: !0
                    })(this.shim.deps || [], bind(this, function() {
                        return e.prefix ? this.callPlugin() : this.load()
                    })) : e.prefix ? this.callPlugin() : this.load()
                }
            },
            load: function() {
                var e = this.map.url;
                j[e] || (j[e] = !0, E.load(this.map.id, e))
            },
            check: function() {
                if (this.enabled && !this.enabling) {
                    var e, t, n = this.map.id,
                        i = this.depExports,
                        r = this.exports,
                        o = this.factory;
                    if (this.inited) {
                        if (this.error) this.emit("error", this.error);
                        else if (!this.defining) {
                            if (this.defining = !0, this.depCount < 1 && !this.defined) {
                                if (isFunction(o)) {
                                    if (this.events.error && this.map.isDefine || req.onError !== defaultOnError) try {
                                        r = E.execCb(n, o, i, r)
                                    } catch (a) {
                                        e = a
                                    } else r = E.execCb(n, o, i, r);
                                    if (this.map.isDefine && void 0 === r && (t = this.module, t ? r = t.exports : this.usingExports && (r = this.exports)), e) return e.requireMap = this.map, e.requireModules = this.map.isDefine ? [this.map.id] : null, e.requireType = this.map.isDefine ? "define" : "require", u(this.error = e)
                                } else r = o;
                                this.exports = r, this.map.isDefine && !this.ignore && (O[n] = r, req.onResourceLoad && req.onResourceLoad(E, this.map, this.depMaps)), f(n), this.defined = !0
                            }
                            this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                        }
                    } else this.fetch()
                }
            },
            callPlugin: function() {
                var e = this.map,
                    t = e.id,
                    i = a(e.prefix);
                this.depMaps.push(i), c(i, "defined", bind(this, function(i) {
                    var r, o, d, l = getOwn(T, this.map.id),
                        p = this.map.name,
                        h = this.map.parentMap ? this.map.parentMap.name : null,
                        m = E.makeRequire(e.parentMap, {
                            enableBuildCallback: !0
                        });
                    return this.map.unnormalized ? (i.normalize && (p = i.normalize(p, function(e) {
                        return n(e, h, !0)
                    }) || ""), o = a(e.prefix + "!" + p, this.map.parentMap), c(o, "defined", bind(this, function(e) {
                        this.init([], function() {
                            return e
                        }, null, {
                            enabled: !0,
                            ignore: !0
                        })
                    })), d = getOwn(w, o.id), void(d && (this.depMaps.push(o), this.events.error && d.on("error", bind(this, function(e) {
                        this.emit("error", e)
                    })), d.enable()))) : l ? (this.map.url = E.nameToUrl(l), void this.load()) : (r = bind(this, function(e) {
                        this.init([], function() {
                            return e
                        }, null, {
                            enabled: !0
                        })
                    }), r.error = bind(this, function(e) {
                        this.inited = !0, this.error = e, e.requireModules = [t], eachProp(w, function(e) {
                            0 === e.map.id.indexOf(t + "_unnormalized") && f(e.map.id)
                        }), u(e)
                    }), r.fromText = bind(this, function(n, i) {
                        var o = e.name,
                            c = a(o),
                            d = useInteractive;
                        i && (n = i), d && (useInteractive = !1), s(c), hasProp(q.config, t) && (q.config[o] = q.config[t]);
                        try {
                            req.exec(n)
                        } catch (f) {
                            return u(makeError("fromtexteval", "fromText eval for " + t + " failed: " + f, f, [t]))
                        }
                        d && (useInteractive = !0), this.depMaps.push(c), E.completeLoad(o), m([o], r)
                    }), void i.load(e.name, m, r, q))
                })), E.enable(i, this), this.pluginMaps[i.id] = i
            },
            enable: function() {
                M[this.map.id] = this, this.enabled = !0, this.enabling = !0, each(this.depMaps, bind(this, function(e, t) {
                    var n, i, r;
                    if ("string" == typeof e) {
                        if (e = a(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[t] = e, r = getOwn(y, e.id)) return void(this.depExports[t] = r(this));
                        this.depCount += 1, c(e, "defined", bind(this, function(e) {
                            this.defineDep(t, e), this.check()
                        })), this.errback && c(e, "error", bind(this, this.errback))
                    }
                    n = e.id, i = w[n], hasProp(y, n) || !i || i.enabled || E.enable(e, this)
                })), eachProp(this.pluginMaps, bind(this, function(e) {
                    var t = getOwn(w, e.id);
                    t && !t.enabled && E.enable(e, this)
                })), this.enabling = !1, this.check()
            },
            on: function(e, t) {
                var n = this.events[e];
                n || (n = this.events[e] = []), n.push(t)
            },
            emit: function(e, t) {
                each(this.events[e], function(e) {
                    e(t)
                }), "error" === e && delete this.events[e]
            }
        }, E = {
            config: q,
            contextName: e,
            registry: w,
            defined: O,
            urlFetched: j,
            defQueue: k,
            Module: x,
            makeModuleMap: a,
            nextTick: req.nextTick,
            onError: u,
            configure: function(e) {
                e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/");
                var t = q.shim,
                    n = {
                        paths: !0,
                        bundles: !0,
                        config: !0,
                        map: !0
                    };
                eachProp(e, function(e, t) {
                    n[t] ? (q[t] || (q[t] = {}), mixin(q[t], e, !0, !0)) : q[t] = e
                }), e.bundles && eachProp(e.bundles, function(e, t) {
                    each(e, function(e) {
                        e !== t && (T[e] = t)
                    })
                }), e.shim && (eachProp(e.shim, function(e, n) {
                    isArray(e) && (e = {
                        deps: e
                    }), !e.exports && !e.init || e.exportsFn || (e.exportsFn = E.makeShimExports(e)), t[n] = e
                }), q.shim = t), e.packages && each(e.packages, function(e) {
                    var t, n;
                    e = "string" == typeof e ? {
                        name: e
                    } : e, n = e.name, t = e.location, t && (q.paths[n] = e.location), q.pkgs[n] = e.name + "/" + (e.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                }), eachProp(w, function(e, t) {
                    e.inited || e.map.unnormalized || (e.map = a(t))
                }), (e.deps || e.callback) && E.require(e.deps || [], e.callback)
            },
            makeShimExports: function(e) {
                function t() {
                    var t;
                    return e.init && (t = e.init.apply(global, arguments)), t || e.exports && getGlobal(e.exports)
                }
                return t
            },
            makeRequire: function(t, r) {
                function o(n, i, c) {
                    var d, f, l;
                    return r.enableBuildCallback && i && isFunction(i) && (i.__requireJsBuild = !0), "string" == typeof n ? isFunction(i) ? u(makeError("requireargs", "Invalid require call"), c) : t && hasProp(y, n) ? y[n](w[t.id]) : req.get ? req.get(E, n, t, o) : (f = a(n, t, !1, !0), d = f.id, hasProp(O, d) ? O[d] : u(makeError("notloaded", 'Module name "' + d + '" has not been loaded yet for context: ' + e + (t ? "" : ". Use require([])")))) : (v(), E.nextTick(function() {
                        v(), l = s(a(null, t)), l.skipMap = r.skipMap, l.init(n, i, c, {
                            enabled: !0
                        }), p()
                    }), o)
                }
                return r = r || {}, mixin(o, {
                    isBrowser: isBrowser,
                    toUrl: function(e) {
                        var i, r = e.lastIndexOf("."),
                            o = e.split("/")[0],
                            a = "." === o || ".." === o;
                        return -1 !== r && (!a || r > 1) && (i = e.substring(r, e.length), e = e.substring(0, r)), E.nameToUrl(n(e, t && t.id, !0), i, !0)
                    },
                    defined: function(e) {
                        return hasProp(O, a(e, t, !1, !0).id)
                    },
                    specified: function(e) {
                        return e = a(e, t, !1, !0).id, hasProp(O, e) || hasProp(w, e)
                    }
                }), t || (o.undef = function(e) {
                    d();
                    var n = a(e, t, !0),
                        r = getOwn(w, e);
                    i(e), delete O[e], delete j[n.url], delete I[e], eachReverse(k, function(t, n) {
                        t[0] === e && k.splice(n, 1)
                    }), r && (r.events.defined && (I[e] = r.events), f(e))
                }), o
            },
            enable: function(e) {
                var t = getOwn(w, e.id);
                t && s(e).enable()
            },
            completeLoad: function(e) {
                var t, n, i, o = getOwn(q.shim, e) || {},
                    a = o.exports;
                for (d(); k.length;) {
                    if (n = k.shift(), null === n[0]) {
                        if (n[0] = e, t) break;
                        t = !0
                    } else n[0] === e && (t = !0);
                    h(n)
                }
                if (i = getOwn(w, e), !t && !hasProp(O, e) && i && !i.inited) {
                    if (!(!q.enforceDefine || a && getGlobal(a))) return r(e) ? void 0 : u(makeError("nodefine", "No define call for " + e, null, [e]));
                    h([e, o.deps || [], o.exportsFn])
                }
                p()
            },
            nameToUrl: function(e, t, n) {
                var i, r, o, a, s, c, u, d = getOwn(q.pkgs, e);
                if (d && (e = d), u = getOwn(T, e)) return E.nameToUrl(u, t, n);
                if (req.jsExtRegExp.test(e)) s = e + (t || "");
                else {
                    for (i = q.paths, r = e.split("/"), o = r.length; o > 0; o -= 1)
                        if (a = r.slice(0, o).join("/"), c = getOwn(i, a)) {
                            isArray(c) && (c = c[0]), r.splice(0, o, c);
                            break
                        }
                    s = r.join("/"), s += t || (/^data\:|\?/.test(s) || n ? "" : ".js"), s = ("/" === s.charAt(0) || s.match(/^[\w\+\.\-]+:/) ? "" : q.baseUrl) + s
                }
                return q.urlArgs ? s + ((-1 === s.indexOf("?") ? "?" : "&") + q.urlArgs) : s
            },
            load: function(e, t) {
                req.load(E, e, t)
            },
            execCb: function(e, t, n, i) {
                return t.apply(i, n)
            },
            onScriptLoad: function(e) {
                if ("load" === e.type || readyRegExp.test((e.currentTarget || e.srcElement).readyState)) {
                    interactiveScript = null;
                    var t = g(e);
                    E.completeLoad(t.id)
                }
            },
            onScriptError: function(e) {
                var t = g(e);
                return r(t.id) ? void 0 : u(makeError("scripterror", "Script error for: " + t.id, e, [t.id]))
            }
        }, E.require = E.makeRequire(), E
    }

    function getInteractiveScript() {
        return interactiveScript && "interactive" === interactiveScript.readyState ? interactiveScript : (eachReverse(scripts(), function(e) {
            return "interactive" === e.readyState ? interactiveScript = e : void 0
        }), interactiveScript)
    }
    var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.1.14",
        commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
        cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        jsSuffixRegExp = /\.js$/,
        currDirRegExp = /^\.\//,
        op = Object.prototype,
        ostring = op.toString,
        hasOwn = op.hasOwnProperty,
        ap = Array.prototype,
        apsp = ap.splice,
        isBrowser = !("undefined" == typeof window || "undefined" == typeof navigator || !window.document),
        isWebWorker = !isBrowser && "undefined" != typeof importScripts,
        readyRegExp = isBrowser && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
        defContextName = "_",
        isOpera = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
        contexts = {},
        cfg = {},
        globalDefQueue = [],
        useInteractive = !1;
    if ("undefined" == typeof define) {
        if ("undefined" != typeof requirejs) {
            if (isFunction(requirejs)) return;
            cfg = requirejs, requirejs = void 0
        }
        "undefined" == typeof require || isFunction(require) || (cfg = require, require = void 0), req = requirejs = function(e, t, n, i) {
            var r, o, a = defContextName;
            return isArray(e) || "string" == typeof e || (o = e, isArray(t) ? (e = t, t = n, n = i) : e = []), o && o.context && (a = o.context), r = getOwn(contexts, a), r || (r = contexts[a] = req.s.newContext(a)), o && r.configure(o), r.require(e, t, n)
        }, req.config = function(e) {
            return req(e)
        }, req.nextTick = "undefined" != typeof setTimeout ? function(e) {
            setTimeout(e, 4)
        } : function(e) {
            e()
        }, require || (require = req), req.version = version, req.jsExtRegExp = /^\/|:|\?|\.js$/, req.isBrowser = isBrowser, s = req.s = {
            contexts: contexts,
            newContext: newContext
        }, req({}), each(["toUrl", "undef", "defined", "specified"], function(e) {
            req[e] = function() {
                var t = contexts[defContextName];
                return t.require[e].apply(t, arguments)
            }
        }), isBrowser && (head = s.head = document.getElementsByTagName("head")[0], baseElement = document.getElementsByTagName("base")[0], baseElement && (head = s.head = baseElement.parentNode)), req.onError = defaultOnError, req.createNode = function(e) {
            var t = e.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
            return t.type = e.scriptType || "text/javascript", t.charset = "utf-8", t.async = !0, t
        }, req.load = function(e, t, n) {
            var i, r = e && e.config || {};
            if (isBrowser) return i = req.createNode(r, t, n), i.setAttribute("data-requirecontext", e.contextName), i.setAttribute("data-requiremodule", t), !i.attachEvent || i.attachEvent.toString && i.attachEvent.toString().indexOf("[native code") < 0 || isOpera ? (i.addEventListener("load", e.onScriptLoad, !1), i.addEventListener("error", e.onScriptError, !1)) : (useInteractive = !0, i.attachEvent("onreadystatechange", e.onScriptLoad)), i.src = n, currentlyAddingScript = i, baseElement ? head.insertBefore(i, baseElement) : head.appendChild(i), currentlyAddingScript = null, i;
            if (isWebWorker) try {
                importScripts(n), e.completeLoad(t)
            } catch (o) {
                e.onError(makeError("importscripts", "importScripts failed for " + t + " at " + n, o, [t]))
            }
        }, isBrowser && !cfg.skipDataMain && eachReverse(scripts(), function(e) {
            return head || (head = e.parentNode), dataMain = e.getAttribute("data-main"), dataMain ? (mainScript = dataMain, cfg.baseUrl || (src = mainScript.split("/"), mainScript = src.pop(), subPath = src.length ? src.join("/") + "/" : "./", cfg.baseUrl = subPath), mainScript = mainScript.replace(jsSuffixRegExp, ""), req.jsExtRegExp.test(mainScript) && (mainScript = dataMain), cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript], !0) : void 0
        }), define = function(e, t, n) {
            var i, r;
            "string" != typeof e && (n = t, t = e, e = null), isArray(t) || (n = t, t = null), !t && isFunction(n) && (t = [], n.length && (n.toString().replace(commentRegExp, "").replace(cjsRequireRegExp, function(e, n) {
                t.push(n)
            }), t = (1 === n.length ? ["require"] : ["require", "exports", "module"]).concat(t))), useInteractive && (i = currentlyAddingScript || getInteractiveScript(), i && (e || (e = i.getAttribute("data-requiremodule")), r = contexts[i.getAttribute("data-requirecontext")])), (r ? r.defQueue : globalDefQueue).push([e, t, n])
        }, define.amd = {
            jQuery: !0
        }, req.exec = function(text) {
            return eval(text)
        }, req(cfg)
    }
}(this), define("requireJs", function() {}), define("requireDomReady", [], function() {
        "use strict";

        function e(e) {
            var t;
            for (t = 0; t < e.length; t += 1) e[t](u)
        }

        function t() {
            var t = d;
            c && t.length && (d = [], e(t))
        }

        function n() {
            c || (c = !0, a && clearInterval(a), t())
        }

        function i(e) {
            return c ? e(u) : d.push(e), i
        }
        var r, o, a, s = "undefined" != typeof window && window.document,
            c = !s,
            u = s ? document : null,
            d = [];
        if (s) {
            if (document.addEventListener) document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", n, !1);
            else if (window.attachEvent) {
                window.attachEvent("onload", n), o = document.createElement("div");
                try {
                    r = null === window.frameElement
                } catch (f) {}
                o.doScroll && r && window.external && (a = setInterval(function() {
                    try {
                        o.doScroll(), n()
                    } catch (e) {}
                }, 30))
            }
            "complete" === document.readyState && n()
        }
        return i.version = "2.0.1", i.load = function(e, t, n, r) {
            r.isBuild ? n(null) : i(n)
        }, i
    }), define("core/infra/extend", [], function() {
        var e = Array.prototype.slice,
            t = Array.prototype.forEach,
            n = function(i) {
                if ("object" == typeof i) {
                    var r = e.call(arguments, 1);
                    t.call(r, function(e) {
                        if (e)
                            for (var t in e) "object" == typeof e[t] && i[t] ? n.call(i, i[t], e[t]) : i[t] = e[t]
                    })
                }
                return i
            };
        return n
    }), define("core/infra/subject", [], function() {
        return {
            subjectInit: function() {
                this.eventCBMap || (this.eventCBMap = {}, this.subjectInitialized = !0)
            },
            registerForEvent: function(e, t, n) {
                this.subjectInitialized || this.subjectInit(), "function" == typeof n && "string" == typeof e && "number" == typeof t && (-1 === t || t > 0) && (this.eventCBMap[e] || (this.eventCBMap[e] = []), this.eventCBMap[e].push({
                    cb: n,
                    times: t
                }))
            },
            dispatchEvent: function(e) {
                if (this.subjectInitialized || this.subjectInit(), "string" == typeof e && this.eventCBMap[e] && this.eventCBMap[e]) {
                    var t = this.eventCBMap[e];
                    for (var n in t) t[n].cb(), t[n].times > 0 && 0 === --t[n].times && t.slice(parseInt(n), 1)
                }
            }
        }
    }), define("core/logger", [], function() {
        var e = 0,
            t = !1,
            n = function(n) {
                t && (n += " " + i()), 0 == e && !window.console
            },
            i = function() {
                var e = new Date,
                    t = e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate() + " " + e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds() + ":" + e.getMilliseconds();
                return t
            };
        return {
            debugLevel: e,
            addTimeStamp: t,
            log: n
        }
    }), define("core/eb", ["core/infra/extend", "core/infra/subject", "core/logger"], function(e, t, n) {
        var i = "undefined" != typeof EB && EB ? EB : null,
            r = !1,
            o = null,
            a = {},
            s = function(e) {
                "undefined" == typeof EBModulesToLoad && (EBModulesToLoad = []), e.usingVideo && -1 === EBModulesToLoad.indexOf("Video") && EBModulesToLoad.push("Video"), e.usingSV && -1 === EBModulesToLoad.indexOf("SV") && EBModulesToLoad.push("SV")
            },
            c = function(e) {
                r = !0, o = e, a.dispatchEvent("ready")
            },
            u = function(e) {
                r ? e(o) : a.registerForEvent("ready", 1, e)
            },
            d = function(e) {
                i || (s(e), require(["client/EBLoader"], function() {
                    i = EB, i.notifyCreativeWhenReady ? i.notifyCreativeWhenReady(c) : i.isInitialized() ? c() : i.addEventListener(EBG.EventName.EB_INITIALIZED, c)
                }))
            };
        return n.log("eb module loaded"), a.init = d, a.onReady = u, e(a, t), a
    }), define("core/consts", [], function() {
        return {
            typePrefix: "adkit-"
        }
    }), define("core/compManager", ["core/consts", "core/logger"], function(e, t) {
        var n = function(n, i) {
            var r;
            if (0 === n.type.indexOf(e.typePrefix)) {
                var o = n.type.substring(e.typePrefix.length);
                r = "comp/" + o + "/" + o
            } else r = n.type;
            t.log("compManager  | require module " + r), require([r], function(e) {
                e.create(n), i()
            })
        };
        return {
            addItem: n
        }
    }), define("core/adBuilder", ["core/eb", "core/compManager"], function(e, t) {
        var n = null,
            i = null,
            r = function(e, n) {
                t.addItem(e, n)
            },
            o = function(e) {
                var t = null;
                return i && (t = i.getSVData(e)), t
            },
            a = function(e) {
                if (n && n.items && n.items.length) {
                    var t = n.items.length;
                    for (var o in n.items) {
                        var a = n.items[o];
                        a.svKey && i && i.updateItem(a), r(a, function() {
                            0 === --t && e()
                        })
                    }
                } else e()
            },
            s = function(t, r) {
                t && (n = t, e.init({
                    usingSV: t.usingSV
                }), e.onReady(function() {
                    t.usingSV ? require(["core/svManager"], function(e) {
                        e.init(t), e.onReady(function() {
                            i = e, a(r)
                        })
                    }) : a(r)
                }))
            };
        return {
            init: s,
            addItem: r,
            getSVData: o
        }
    }), define("core/adManager", ["core/adBuilder"], function(e) {
        var t = null,
            n = function(n, i) {
                t = n, e.init(n, i)
            },
            i = function(t, n) {
                return e.addItem(t, n)
            },
            r = function() {
                return t
            },
            o = function(t) {
                return e.getSVData(t)
            };
        return {
            init: n,
            addItem: i,
            getAdInfo: r,
            getSVData: o
        }
    }), define("core/localConfig", ["config"], function(e) {
        var t = {};
        e && (t = e);
        var n = function() {
            return t
        };
        return {
            getConfig: n
        }
    }), define("core/adkitValidator", ["core/logger"], function(e) {
        function t() {}
        t.prototype.validateConfig = function(t) {
            var n = !0;
            if (t.ITEMS && t.ITEMS instanceof Array && t.ITEMS.length)
                for (ind in t.ITEMS) t.ITEMS[ind].id && t.ITEMS[ind].type || (n = !1);
            return e.log("validator module | isValid (config) = " + n), n
        }, e.log("validator module loaded");
        var n = new t;
        return n
    }), define("core/configManager", ["core/localConfig", "core/adkitValidator", "core/logger"], function(e, t, n) {
        var i = function(e) {
                if (e instanceof Object && (e.ITEMS && e.ITEMS instanceof Array && e.ITEMS.length && Array.prototype.push.apply(s.ITEMS, e.ITEMS), e.SV && e.SV instanceof Object && e.SV.svData instanceof Array && e.SV.svData.length))
                    for (var t in e.SV.svData) {
                        var n = e.SV.svData[t];
                        n instanceof Object && n.svKey && (s.SV.svData[n.svKey] = n)
                    }
            },
            r = function() {
                var r = e.getConfig();
                t.validateConfig(r) ? i(r) : n.log("config is not valid")
            },
            o = function() {
                return s.ITEMS
            },
            a = function() {
                return s.SV
            },
            s = {
                ITEMS: [],
                SV: {
                    svData: {}
                }
            };
        return {
            init: r,
            getItems: o,
            getSV: a
        }
    }), define("core/adInfo", [], function() {
        return {
            usingVideo: !1,
            usingSV: !1,
            items: [],
            svData: {}
        }
    }), define("core/adInfoBuilder", ["core/configManager", "core/adInfo"], function(e, t) {
        _adInfo = t;
        var n = function() {
                return _adInfo
            },
            i = function() {
                var t = !1,
                    n = e.getSV().svData;
                for (var i in n) {
                    t = !0;
                    break
                }
                return t
            },
            r = function() {
                e.init(), _adInfo.items = e.getItems(), _adInfo.usingSV = i(), _adInfo.svData = e.getSV().svData;
                for (var t in _adInfo)
                    if ("adkit-video" === _adInfo.type) {
                        _adInfo.usingVideo = !0;
                        break
                    }
            };
        return {
            init: r,
            getAdInfo: n
        }
    }), define("core/main", ["requireDomReady", "core/adManager", "core/adInfoBuilder", "core/logger"], function(e, t, n, i) {
        var r = function(e) {
            adkit.notifyReady(e), i.log("init external interface")
        };
        ! function() {
            e(function() {
                n.init(), t.init(n.getAdInfo(), function() {
                    r(t)
                })
            })
        }()
    }),
    function(e) {
        var t = !1,
            n = null;
        e.notifyReady = function(e) {
            t = !0, n = e;
            var i = document.createEvent("HTMLEvents");
            i.initEvent("adkit-ready", !1, !1), window.dispatchEvent(i)
        }, e.onReady = function(e) {
            t ? e() : window.addEventListener("adkit-ready", e)
        }, e.addItem = function(e) {
            n && n.addItem(e)
        }, e.getAdInfo = function() {
            var e = null;
            return n && (e = n.getAdInfo()), e
        }, e.getSVData = function(e) {
            var t = null;
            return n && (t = n.getSVData(e)), t
        }
    }(window.adkit = window.adkit || {}),
    function() {
        var e = "/",
            t = location.protocol + "//" + location.host + location.pathname.substring(0, location.pathname.lastIndexOf(e)),
            n = "file:" !== location.protocol && "localhost" !== location.hostname && "127.0.0.1" !== location.hostname,
            i = function() {
                var e = null;
                if (document.currentScript) e = document.currentScript;
                else {
                    var t = document.getElementsByTagName("script");
                    for (var n in t) {
                        var i = t[n];
                        if (-1 !== i.src.indexOf("/adkit.js")) {
                            e = i;
                            break
                        }
                    }
                }
                return e
            },
            r = function() {
                return "function" == typeof require
            },
            o = "/config",
            a = i(),
            s = a.src.substring(0, a.src.lastIndexOf(e)),
            c = "/../bower_components/requirejs-domready/domReady",
            u = s + "/../bower_components/requirejs/require.js",
            d = n ? adkit.environment.paths.nonCachedScript : s + "/client",
            f = [t + o, s + o];
        if (r()) require.config({
            baseUrl: s,
            paths: {
                requireDomReady: s + c,
                client: d,
                config: f
            }
        }), require(["core/main"]);
        else {
            require = {
                baseUrl: s,
                paths: {
                    requireDomReady: s + c,
                    client: d,
                    config: f
                },
                deps: ["core/main"]
            };
            var l = document.createElement("script");
            l.type = "text/javascript", l.src = u, a.parentNode.appendChild(l)
        }
    }(), define("adkit", function() {}), define("comp/baseComp", ["core/logger"], function() {
        function e() {}
        e.prototype.create = function(e) {
            var t = document.getElementById(e.id);
            return t ? t : void 0
        };
        var t = new e;
        return t
    });