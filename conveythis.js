! function() {
    var e, t, i, l;
    window.conveythis || (window.conveythis = {}), l = 36, t = conveythis_resources
    var a = document.documentElement || document.body,
        n = {
            attributes: !1,
            childList: !0,
            subtree: !0
        },
        d = new MutationObserver(function(t, i) {
            for (var l of t) "childList" == l.type && l.addedNodes.length > 0 && null == e.is_prevent_ajax && c(l.addedNodes)
        });

    function c(i) {
        if (i.length > 0) {
            var l = localStorage.getItem("conveythis-language-id");
            if (window.conveythis.source_language_id == l) return;
            if (l) var o = t[l].code2;
            o && i.forEach(function(i) {
                if ("STYLE" != i.nodeName && "SCRIPT" != i.nodeName && "IFRAME" != i.nodeName && "HEAD" != i.nodeName) {
                    if (null == i.parentNode || "STYLE" != i.parentNode.nodeName && "SCRIPT" != i.parentNode.nodeName && "IFRAME" != i.parentNode.nodeName) {
                        try {
                            if (null != i.parentNode && i.parentNode.closest(".conveythis-no-translate")) return
                        } catch (e) {}
                        if (1 == i.nodeType && e.php_plugin_cur_lang && "A" == i.nodeName.toUpperCase() && i.attributes.href && !i.classList.contains("conveythis-no-translate")) {
                            var l = localStorage.getItem("conveythis-language-id"),
                                o = t[l].code2,
                                a = i.attributes.href.nodeValue;
                            if (!a.includes("wp-content"))
                                if (a.includes(window.location.hostname) && !a.includes("/" + o + "/")) {
                                    if (i.hostname == window.location.hostname) {
                                        var n = a.substring(0, a.indexOf(window.location.hostname) + window.location.hostname.length),
                                            d = a.substring(a.indexOf(window.location.hostname) + window.location.hostname.length),
                                            s = n + "/" + o + (d = d.length > 0 ? d : "/");
                                        i.attributes.href.nodeValue = s
                                    }
                                } else if ("/" == a[0] && !a.includes("/" + o + "/")) {
                                s = "/" + o + a;
                                i.attributes.href.nodeValue = s
                            }
                        }
                    }
                    i.childNodes && i.childNodes.length > 0 && c(i.childNodes)
                }
            })
        }
    }

    function s() {
        if (window.conveythis.translator) {
            const n = localStorage.getItem("conveythis-language-id"),
                d = new URLSearchParams(location.search).get("locale");
            if (d) {
                console.log("search in locale code");
                for (let l of e.languages) {
                    if (t[l.id].code2 == d) {
                        i = l.id;
                        break
                    }
                }
                i && window.conveythis.translator(i)
            } else if (n) {
                var i;
                console.log("search in localStorage");
                for (let t of e.languages)
                    if (t.id == n) {
                        i = n;
                        break
                    }
                i && window.conveythis.translator(i)
            } else if (e.auto_translate) {
                var l = navigator.languages;
                if (l) {
                    var o, a = [];
                    l.forEach(function(e) {
                        var t = h(e.substring(0, 2));
                        t && a.push(t)
                    });
                    for (let t of a) {
                        for (let i of e.languages)
                            if (i.id == t) {
                                o = t;
                                break
                            }
                        if (o) break
                    }
                    o && window.conveythis.translator(o)
                }
            }
        }
    }

    function r(e, t, i) {
        try {
            e.style.transform = "rotate(" + i + "deg)", e.animate([{
                transform: "rotate(" + t + "deg)"
            }, {
                transform: "rotate(" + i + "deg)"
            }], {
                duration: 400,
                easing: "ease-out"
            })
        } catch (e) {}
    }

    function g(a, n) {
        var d, c, s, g, f, p = e.background_color ? e.background_color : "#ffffff",
            y = e.border_color ? e.border_color : "#e0e0e0",
            _ = e.hover_color ? e.hover_color : "#f6f6f6",
            m = e.text_color ? e.text_color : "#000000";
        if ("rect" === e.icon) {
            var w = 30;
            if ("full-text" === e.text) var v = 168,
                b = 86;
            if ("short-text" === e.text) v = 118, b = 36;
            if ("without-text" === e.text) v = 72
        }
        if ("sqr" === e.icon || "cir" === e.icon) {
            w = 24;
            if ("full-text" === e.text) v = 162, b = 86;
            if ("short-text" === e.text) v = 112, b = 36;
            if ("without-text" === e.text) v = 66
        }
        if ("without-flag" === e.icon) {
            w = 24;
            if ("full-text" === e.text) v = 132, b = 90;
            if ("short-text" === e.text) v = 82, b = 40;
            if ("without-text" === e.text) v = 30
        }
        if (d = document.getElementById(a)) d.innerHTML = "";
        else if ((d = document.createElement("div")).id = a, d.classList.add("conveythis-no-translate"), d.classList.add("skiptranslate"), d.classList.add("notranslate"), d.style.display = "block", d.style.padding = "0px", d.style.margin = "0px", d.style.textAlign = "left", d.style.zIndex = "2147483647", d.style.direction = "ltr", d.convey_translate = !1, e.selector && (c = document.getElementById(e.selector)), c) d.style.position = "absolute", null != e.positionTop ? d.style.top = "0px" : d.style.bottom = "0px", el_wrapper_outer = document.createElement("div"), el_wrapper_outer.appendChild(d), el_wrapper_outer.style.position = "relative", el_wrapper_outer.style.display = "inline-block", el_wrapper_outer.style.height = "36px", el_wrapper_outer.style.verticalAlign = "middle", el_wrapper_outer.style.cssFloat = "left", el_wrapper_outer.style.direction = "ltr", c.appendChild(el_wrapper_outer);
        else {
            if (d.style.position = "fixed", null != e.positionLeft) d.style.left = e.positionLeft + "px";
            else {
                var k = e.positionRight ? e.positionRight : 0;
                d.style.right = k + "px"
            }
            if (null != e.positionTop) d.style.top = e.positionTop + "px";
            else {
                var S = e.positionBottom ? e.positionBottom : 0;
                d.style.bottom = S + "px"
            }
            document.body.appendChild(d)
        }
        if ((f = document.createElement("div")).classList.add("conveythis-widget-main"), f.style.cursor = "pointer", f.style.backgroundColor = p, f.style.whiteSpace = "nowrap", f.style.border = "1px solid " + y, f.style.padding = "0px", f.style.margin = "0px", f.style.overflow = "hidden", f.style.width = v + 2 + "px", e.corner_type && "cir" == e.corner_type && (f.style.borderRadius = "12px"), d.appendChild(f), n) {
            for (var T = !1, C = 0; C < e.languages.length; C++) e.languages[C].active = !1, e.languages[C].id == n && (e.languages[C].active = !0, T = !0);
            T || (e.languages[e.languages.length - 1].active = !0), ("right" == document.body.style.textAlign && (document.body.style.textAlign = null), u("ltr"))
        }
        var E = document.createElement("div");
        E.style.display = "none", E.classList.add("conveythis-widget-languages");
        var M = document.createElement("div");
        if (M.classList.add("conveythis-widget-current-language-wrapper"), null != e.positionTop ? (f.appendChild(M), f.appendChild(E)) : (f.appendChild(E), f.appendChild(M)), e.languages.forEach(function(o) {
                var a = t[o.id],
                    n = document.createElement("div");
                if (n.classList.add("conveythis-widget-language"), n.style.width = "100%", n.style.height = l + "px", null != e.positionTop ? n.style.borderTop = "1px solid " + y : n.style.borderBottom = "1px solid " + y, n.onmouseover = function() {
                        n.style.backgroundColor = _
                    }, n.onmouseout = function() {
                        n.style.backgroundColor = "unset"
                    }, e.change && e.change[o.id]) var d = e.change[o.id];
                else d = a.flag;
                if ("without-flag" !== e.icon) {
                    var c = document.createElement("div");
                    c.style.height = l + "px", c.style.width = w + "px", c.style.backgroundSize = "contain", c.style.backgroundImage = "url('data:image/png;base64," + d[e.icon] + "')", c.style.display = "inline-block", c.style.backgroundPosition = "50% 50%", c.style.backgroundRepeat = "no-repeat", c.style.backgroundColor = "transparent", c.style.marginLeft = "10px", n.appendChild(c)
                }
                if ("without-text" !== e.text) {
                    var f = document.createElement("div");
                    f.style.lineHeight = l + "px", f.style.height = l + "px", f.style.width = b + "px", f.style.display = "inline-block", f.style.marginLeft = "10px", f.style.verticalAlign = "top", f.style.fontSize = "14px", f.style.fontFamily = "Arial", f.style.textAlign = "left", f.style.color = m, f.style.userSelect = "none", f.style.webkitUserSelect = "none", f.style.MozUserSelect = "none", "full-text" === e.text && (f.innerText = a.title), "short-text" === e.text && (f.innerText = a.code3, f.style.textTransform = "uppercase"), n.appendChild(f)
                }(s = document.createElement("div")).style.padding = "0px", s.style.margin = "0px", o.active ? (s.style.display = "inline-block", s.style.height = l + "px", s.style.width = "10px", s.style.marginLeft = "10px", s.style.backgroundColor = m, s.style.webkitMask = "url('https://cdn.conveythis.com/images/right-thin-chevron.svg') no-repeat 50% 50%", s.style.mask = "url('https://cdn.conveythis.com/images/right-thin-chevron.svg') no-repeat 50% 50%", s.style.webkitMaskSize = "contain", s.style.maskSize = "contain", s.classList.add("conveythis-language-arrow"), n.appendChild(s), n.style.border = "unset", M.appendChild(n), g = s) : null != e.positionTop ? E.appendChild(n) : E.insertBefore(n, E.childNodes[0]), n.onclick = function() {
                    var i = 0;
                    if ("none" == E.style.display) {
                        E.style.display = "block", E.style.maxHeight = null;
                        var l = parseInt(.7 * window.innerHeight),
                            a = E.clientHeight;
                        a > l ? (E.style.overflowY = "auto", E.style.maxHeight = l + "px") : (E.style.overflowY = null, E.style.maxHeight = a), null != e.positionTop ? i = 450 : (E.scrollTop = E.scrollHeight, i = -450), r(g, 0, i)
                    } else E.style.display = "none", i = e.positionTop ? 450 : -450, r(g, i, 0);
                    if (!o.active)
                        if (void 0 !== window.conveythis.is_subdomain && window.conveythis.is_subdomain) {
                            let e = location.hostname.split(".");
                            h(e[0]) && e.shift(), "www" == e[0] && e.shift();
                            let i = e.join(".");
                            window.conveythis.source_language_id != o.id && (i = t[o.id].code2 + "." + i), console.log(i), location.hostname = i
                        } else o.location ? location.href = o.location : window.conveythis.translator && window.conveythis.translator(o.id)
                }
            }), true /* <- change this boolean to false for hide the crack message */ ) {
            var L = document.createElement("div");
            L.style.whiteSpace = "normal", L.style.textAlign = "center", L.style.fontSize = "12px", "without-text" !== e.text && (L.style.padding = "10px"), L.innerHTML = (!e.hide_conveythis_logo ? '<span style="color: #8e8e8e;">Powered by </span><a href="https://www.conveythis.com/?utm_source=conveythis_drop_down_btn" style="color: #489fd2;">ConveyThis</a><br/>' : '') + '<span style="color: #8e8e8e;">Cracked by </span><a href="https://github.com/liulihaocai" style="color: #489fd2;">Liulihaocai</a>', null != e.positionTop ? (L.style.borderTop = "1px solid " + y, E.appendChild(L)) : (L.style.borderBottom = "1px solid " + y, E.insertBefore(L, E.childNodes[0]))
        }
    }

    function f(t) {
        if (d.disconnect(), e.hide_conveythis_button || g("conveythis-wrapper", t), e.php_plugin_cur_lang) {
            let l = document.getElementsByClassName("conveythis_widget_placeholder");
            for (var i = 0; i < l.length; i++) e.selector = l[i].id, g("conveythis-wrapper" + i, t)
        }
        e.source_language_id != localStorage.getItem("conveythis-language-id") && d.observe(a, n)
    }

    function u(e) {
        if (window.conveythis.change_direction) {
            document.querySelectorAll("[dir]").forEach(function(t, i) {
                t.dir && (t.dir = e)
            })
        }
    }

    function h(e) {
        for (var i in t)
            if (t[i].code2 == e) return i;
        return null
    }
    window.conveythis.init = function(t) {
        var i = document.location.href;
        e = t, t.api_key && (window.conveythis.api_key = t.api_key), t.source_language_id && (window.conveythis.source_language_id = t.source_language_id), window.onhashchange = function(e) {
            i != document.location.href && t.source_language_id
        }, t.is_shopify && (window.conveythis.is_shopify = !0), t.translate_media && (window.conveythis.translate_media = !0), t.translate_document && (window.conveythis.translate_document = !0), t.change_direction && (window.conveythis.change_direction = !0), t.php_plugin_cur_lang ? (localStorage.setItem("conveythis-language-id", t.php_plugin_cur_lang), window.conveythis.is_wordpress = 1, f(t.php_plugin_cur_lang), s()) : (f(), s()), window.conveythis.target_languages = e.languages
    }, window.conveythis.render = f, window.conveythis.languages = t, window.conveythis.showLoadingAnimation = function(e) {
        try {
            e ? (cur_el_arrow.style.backgroundImage = "url('" + i + "/spinner.gif')", cur_el_arrow.style.width = "30px", cur_el_arrow.style.marginLeft = "0px") : (cur_el_arrow.style.backgroundImage = "url('" + i + "/right-new.png')", cur_el_arrow.style.width = "10px", cur_el_arrow.style.marginLeft = "10px")
        } catch (e) {}
    }
}();