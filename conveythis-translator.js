! function() {
    window.conveythis || (window.conveythis = {});

    function e() {
        var e = document.cookie.match("(^|;) ?googtrans=([^;]*)(;|$)");
        return e ? e[2].split("/")[2] : null
    }

    function o(e, o) {
        try {
            if (document.createEventObject) {
                var t = document.createEventObject();
                e.fireEvent("on" + o, t)
            } else {
                (t = document.createEvent("HTMLEvents")).initEvent(o, !0, !0), e.dispatchEvent(t)
            }
        } catch (e) {}
    }
    window.conveythis.translator = function t(n) {
        const a = window.conveythis.languages[n];
        if (n == window.conveythis.source_language_id) {
            // if (null == e()) return void console.log("no Google Lang");
            console.log(e()),
                function() {
                    try {
                        if (!location.href.includes("conveythis.com/dashboard/translation/visual")) {
                            const e = new URLSearchParams(location.search);
                            e.delete("locale");
                            const o = Array.from(e).length;
                            o > 0 ? window.history.replaceState({}, "", `${location.pathname}?${e}${location.hash}`) : window.history.replaceState({}, "", `${location.pathname}${location.hash}`)
                        }
                    } catch (e) {
                        console.log(e)
                    }
                }()
        } else ! function(e) {
            try {
                if (!location.href.includes("conveythis.com/dashboard/translation/visual") && void 0 === window.conveythis.is_wordpress) {
                    const o = new URLSearchParams(location.search);
                    o.set("locale", e), window.history.replaceState({}, "", `${location.pathname}?${o}${location.hash}`)
                }
            } catch (e) {
                console.log(e)
            }
        }(a.code2);
        window.conveythis.render(n);
        for (var c = document.getElementsByTagName("select"), i = 0; i < c.length; i++)
            if (-1 != c[i].className.indexOf("goog-te-combo")) {
                googleSelector = c[i];
                break
            }
        null == document.getElementById("google_translate_element2") || 0 == document.getElementById("google_translate_element2").innerHTML.length || 0 == googleSelector.length || 0 == googleSelector.innerHTML.length ? setTimeout(function() {
            t(n)
        }, 250) : (googleSelector.value = a.code2, o(googleSelector, "change"), o(googleSelector, "change"), function(e) {
            try {
                var o = new CustomEvent("conveythis-language-changed", {
                    detail: {
                        language: e
                    }
                });
                document.dispatchEvent(o)
            } catch (e) {
                console.log(e)
            }
        }(a), localStorage && localStorage.setItem("conveythis-language-id", n), window.conveythis.translateShopifyCart(n), n == window.conveythis.source_language_id && (e(), null != e() && setTimeout(function() {
            t(n)
        }, 250)))
    }, window.conveythis.translateShopifyCart = function(e) {
        if (void 0 !== window.conveythis.is_shopify && window.conveythis.is_shopify) {
            var o = window.conveythis.languages[e].code2,
                t = document.querySelectorAll('form[method="post"][action^="/checkout"], form[method="post"][action^="/cart"]');
            setLocaleUrl = function(e, o, t) {
                var n = new URL(e, location.href);
                return n.searchParams.set(o, t), n.pathname + n.search
            };
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.setAttribute("action", setLocaleUrl(a.getAttribute("action"), "locale", o))
            }
        }
    }
}();