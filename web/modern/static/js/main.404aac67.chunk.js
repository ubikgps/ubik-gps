(this.webpackJsonptraccar = this.webpackJsonptraccar || []).push([
        a.r(t);
        a(199); var i = a(0),
            r = a.n(i),
            o = a(17),
            n = a.n(o),
            s = a(39),
            m = a(13),
            d = a(22),
            l = a(313),
            c = a(52),
            p = a(284),
            u = a(321),
            S = a(320),
            v = a(105),
            g = a.n(v),
            h = a(9),
            b = a.n(h),
            D = a(14),
            y = a(319),
            T = a(291),
            M = a(232),
            P = a(286),
            A = a(231),
            f = a(288),
            k = a(290),
            C = a(289),
            O = a(49),
            R = a.n(O),
            L = a(40),
            E = a(51),
            w = Object(E.b)({ name: "session", initialState: { server: null, user: null }, reducers: { updateServer: function(e, t) { e.server = t.payload }, updateUser: function(e, t) { e.user = t.payload } } }),
            I = w.reducer,
            G = w.actions,
            U = Object(E.b)({ name: "devices", initialState: { items: {}, selectedId: null }, reducers: { refresh: function(e, t) { e.items = {}, t.payload.forEach((function(t) { return e.items[t.id] = t })) }, update: function(e, t) { t.payload.forEach((function(t) { return e.items[t.id] = t })) }, select: function(e, t) { e.selectedId = t.payload.id }, remove: function(e, t) { delete e.items[t.payload] } } }),
            F = U.reducer,
            B = U.actions,
            x = Object(E.b)({ name: "positions", initialState: { items: {} }, reducers: { update: function(e, t) { t.payload.forEach((function(t) { return e.items[t.deviceId] = t })) } } }),
            V = x.reducer,
            N = x.actions,
            H = Object(L.c)({ session: I, devices: F, positions: V }),
            z = Object(E.a)({ reducer: H }),
            j = a(8),
            W = a(179),
            K = a(287),
            q = a(285),
            Z = a(81),
            Y = a.n(Z),
            J = a(106),
            Q = a(107),
            X = a(108),
            _ = a(109),
            $ = a(110),
            ee = a(111),
            te = a(112),
            ae = a(113),
            ie = a(114),
            re = a(115),
            oe = a(116),
            ne = a(117),
            se = a(118),
            me = a(119),
            de = a(120),
            le = a(121),
            ce = a(122),
            pe = a(123),
            ue = a(124),
            Se = a(125),
            ve = a(126),
            ge = a(127),
            he = a(128),
            be = a(129),
            De = { af: { data: J, name: "Afrikaans" }, ar: { data: Q, name: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629" }, az: { data: X, name: "Az\u0259rbaycanca" }, bg: { data: _, name: "\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438" }, bn: { data: $, name: "\u09ac\u09be\u0982\u09b2\u09be" }, cs: { data: ee, name: "\u010ce\u0161tina" }, de: { data: ae, name: "Deutsch" }, da: { data: te, name: "Dansk" }, el: { data: ie, name: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac" }, en: { data: re, name: "English" }, es: { data: oe, name: "Espa\xf1ol" }, fa: { data: ne, name: "\u0641\u0627\u0631\u0633\u06cc" }, fi: { data: se, name: "Suomi" }, fr: { data: me, name: "Fran\xe7ais" }, he: { data: de, name: "\u05e2\u05d1\u05e8\u05d9\u05ea" }, hi: { data: le, name: "\u0939\u093f\u0928\u094d\u0926\u0940" }, hr: { data: ce, name: "Hrvatski" }, hu: { data: pe, name: "Magyar" }, id: { data: ue, name: "Bahasa Indonesia" }, it: { data: Se, name: "Italiano" }, ja: { data: ve, name: "\u65e5\u672c\u8a9e" }, ka: { data: ge, name: "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8" }, kk: { data: he, name: "\u049a\u0430\u0437\u0430\u049b\u0448\u0430" }, ko: { data: a(130), name: "\ud55c\uad6d\uc5b4" }, km: { data: be, name: "\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a" }, lo: { data: a(131), name: "\u0ea5\u0eb2\u0ea7" }, lt: { data: a(132), name: "Lietuvi\u0173" }, lv: { data: a(133), name: "Latvie\u0161u" }, ml: { data: a(134), name: "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02" }, ms: { data: a(135), name: "\u0628\u0647\u0627\u0633 \u0645\u0644\u0627\u064a\u0648" }, nb: { data: a(136), name: "Norsk bokm\xe5l" }, ne: { data: a(137), name: "\u0928\u0947\u092a\u093e\u0932\u0940" }, nl: { data: a(138), name: "Nederlands" }, nn: { data: a(139), name: "Norsk nynorsk" }, pl: { data: a(140), name: "Polski" }, pt: { data: a(141), name: "Portugu\xeas" }, pt_BR: { data: a(142), name: "Portugu\xeas (Brasil)" }, ro: { data: a(143), name: "Rom\xe2n\u0103" }, ru: { data: a(144), name: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439" }, si: { data: a(145), name: "\u0dc3\u0dd2\u0d82\u0dc4\u0dbd" }, sk: { data: a(146), name: "Sloven\u010dina" }, sl: { data: a(147), name: "Sloven\u0161\u010dina" }, sq: { data: a(148), name: "Shqip\xebria" }, sr: { data: a(149), name: "Srpski" }, sv: { data: a(150), name: "Svenska" }, ta: { data: a(151), name: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd" }, th: { data: a(152), name: "\u0e44\u0e17\u0e22" }, tr: { data: a(153), name: "T\xfcrk\xe7e" }, uk: { data: a(154), name: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430" }, uz: { data: a(155), name: "O\u02bbzbekcha" }, vi: { data: a(156), name: "Ti\u1ebfng Vi\u1ec7t" }, zh: { data: a(157), name: "\u4e2d\u6587" }, zh_TW: { data: a(158), name: "\u4e2d\u6587 (Taiwan)" } },
            ye = void 0 !== window.navigator.languages ? window.navigator.languages.slice() : [],
            Te = window.navigator.userLanguage || window.navigator.language;
        ye.push(Te), ye.push(Te.substring(0, 2)), ye.push("en"); for (var Me = 0; Me < ye.length && !((Te = ye[Me].replace("-", "_")) in De) && !(Te.length > 2 && (Te = ye[Me].substring(0, 2)) in De); Me++); var Pe = De[Te],
            Ae = function(e) { return Pe.data[e] },
            fe = a(283),
            ke = a(277),
            Ce = a(282),
            Oe = a(280),
            Re = a(281),
            Le = function(e) { var t = e.open,
                    a = e.endpoint,
                    i = e.itemId,
                    o = e.onResult,
                    n = function() { var e = Object(D.a)(b.a.mark((function e() { return b.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, fetch("/api/".concat(a, "/").concat(i), { method: "DELETE" });
                                    case 2:
                                        e.sent.ok && o(!0);
                                    case 4:
                                    case "end":
                                        return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(); return r.a.createElement(ke.a, { open: t, onClose: function() { o(!1) } }, r.a.createElement(Oe.a, null, r.a.createElement(Re.a, null, Ae("sharedRemoveConfirm"))), r.a.createElement(Ce.a, null, r.a.createElement(fe.a, { color: "primary", onClick: n }, Ae("sharedRemove")), r.a.createElement(fe.a, { autoFocus: !0, onClick: function() { return o(!1) } }, Ae("sharedCancel")))) },
            Ee = Object(p.a)((function(e) { return { fab: { position: "absolute", bottom: e.spacing(2), right: e.spacing(2) } } })),
            we = function(e) { var t = e.content,
                    a = e.editPath,
                    o = e.endpoint,
                    n = Ee(),
                    s = Object(d.f)(),
                    m = Object(i.useState)(null),
                    l = Object(j.a)(m, 2),
                    c = l[0],
                    p = l[1],
                    u = Object(i.useState)(null),
                    S = Object(j.a)(u, 2),
                    v = S[0],
                    g = S[1],
                    h = Object(i.useState)(!1),
                    b = Object(j.a)(h, 2),
                    D = b[0],
                    y = b[1],
                    T = Object(i.useState)(Date.now()),
                    M = Object(j.a)(T, 2),
                    P = M[0],
                    A = M[1],
                    f = function() { g(null) },
                    k = t; return r.a.createElement(r.a.Fragment, null, r.a.createElement(k, { updateTimestamp: P, onMenuClick: function(e, t) { g(e), p(t) } }), r.a.createElement(q.a, { size: "medium", color: "primary", className: n.fab, onClick: function() { s.push(a), f() } }, r.a.createElement(Y.a, null)), r.a.createElement(W.a, { open: !!v, anchorEl: v, onClose: f }, r.a.createElement(K.a, { onClick: function() { s.push("".concat(a, "/").concat(c)), f() } }, Ae("sharedEdit")), r.a.createElement(K.a, { onClick: function() { y(!0), f() } }, Ae("sharedRemove"))), r.a.createElement(Le, { open: D, endpoint: o, itemId: c, onResult: function() { y(!1), A(Date.now()) } })) },
            Ie = function(e, t) { Object(i.useEffect)((function() { e() }), t) },
            Ge = Object(p.a)((function() { return { list: { maxHeight: "100%", overflow: "auto" }, icon: { width: "25px", height: "25px", filter: "brightness(0) invert(1)" } } })),
            Ue = function(e) { var t = e.updateTimestamp,
                    a = e.onMenuClick,
                    o = Ge(),
                    n = Object(m.c)(),
                    s = Object(m.d)((function(e) { return Object.values(e.devices.items) })); return Ie(Object(D.a)(b.a.mark((function e() { var t; return b.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, fetch("/api/devices");
                            case 2:
                                if (!(t = e.sent).ok) { e.next = 11; break } return e.t0 = n, e.t1 = B, e.next = 8, t.json();
                            case 8:
                                e.t2 = e.sent, e.t3 = e.t1.refresh.call(e.t1, e.t2), (0, e.t0)(e.t3);
                            case 11:
                            case "end":
                                return e.stop() } }), e) }))), [t]), r.a.createElement(P.a, { className: o.list }, s.map((function(e, t, s) { return r.a.createElement(i.Fragment, { key: e.id }, r.a.createElement(A.a, { button: !0, key: e.id, onClick: function() { return n(B.select(e)) } }, r.a.createElement(f.a, null, r.a.createElement(y.a, null, r.a.createElement("img", { className: o.icon, src: "images/icon/".concat(e.category || "default", ".svg"), alt: "" }))), r.a.createElement(C.a, { primary: e.name, secondary: e.uniqueId }), r.a.createElement(k.a, null, r.a.createElement(M.a, { onClick: function(t) { return a(t.currentTarget, e.id) } }, r.a.createElement(R.a, null)))), t < s.length - 1 ? r.a.createElement(T.a, null) : null) }))) },
            Fe = function() { return r.a.createElement(we, { content: Ue, editPath: "/device", endpoint: "devices" }) },
            Be = a(292),
            xe = a(293),
            Ve = a(57),
            Ne = a(159),
            He = a.n(Ne),
            ze = a(295),
            je = a(294),
            We = a(160),
            Ke = a.n(We),
            qe = a(173),
            Ze = a.n(qe),
            Ye = a(172),
            Je = a.n(Ye),
            Qe = a(171),
            Xe = a.n(Qe),
            _e = a(168),
            $e = a.n(_e),
            et = a(169),
            tt = a.n(et),
            at = a(162),
            it = a.n(at),
            rt = a(165),
            ot = a.n(rt),
            nt = a(164),
            st = a.n(nt),
            mt = a(163),
            dt = a.n(mt),
            lt = a(166),
            ct = a.n(lt),
            pt = a(167),
            ut = a.n(pt),
            St = a(170),
            vt = a.n(St),
            gt = a(161),
            ht = a.n(gt),
            bt = Object(p.a)((function(e) { return { flex: { flexGrow: 1 }, appBar: { zIndex: e.zIndex.drawer + 1 }, list: { width: 250 }, menuButton: { marginLeft: -12, marginRight: 20 } } })),
            Dt = function() { var e = Object(m.c)(),
                    t = Object(i.useState)(!1),
                    a = Object(j.a)(t, 2),
                    o = a[0],
                    n = a[1],
                    s = bt(),
                    l = Object(d.f)(),
                    c = Object(m.d)((function(e) { return e.session.user && e.session.user.administrator })),
                    p = Object(m.d)((function(e) { return e.session.user && e.session.user.id })),
                    u = function() { n(!1) },
                    v = function() { var t = Object(D.a)(b.a.mark((function t() { return b.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, fetch("/api/session", { method: "DELETE" });
                                    case 2:
                                        t.sent.ok && (e(G.updateUser(null)), l.push("/login"));
                                    case 4:
                                    case "end":
                                        return t.stop() } }), t) }))); return function() { return t.apply(this, arguments) } }(); return r.a.createElement(r.a.Fragment, null, r.a.createElement(Be.a, { position: "static", className: s.appBar }, r.a.createElement(xe.a, null, r.a.createElement(M.a, { className: s.menuButton, color: "inherit", onClick: function() { n(!0) } }, r.a.createElement(He.a, null)), r.a.createElement(Ve.a, { variant: "h6", color: "inherit", className: s.flex }, "UBI-K"), r.a.createElement(fe.a, { color: "inherit", onClick: v }, Ae("loginLogout")))), r.a.createElement(S.a, { open: o, onClose: u }, r.a.createElement("div", { tabIndex: 0, className: s.list, role: "button", onClick: u, onKeyDown: u }, r.a.createElement(P.a, null, r.a.createElement(A.a, { button: !0, onClick: function() { return l.push("/") } }, r.a.createElement(je.a, null, r.a.createElement(Ke.a, null)), r.a.createElement(C.a, { primary: Ae("mapTitle") })), r.a.createElement(A.a, { button: !0, onClick: function() { return l.push("/replay") } }, r.a.createElement(je.a, null, r.a.createElement(ht.a, null)), r.a.createElement(C.a, { primary: Ae("reportReplay") }))), r.a.createElement(T.a, null), r.a.createElement(P.a, { subheader: r.a.createElement(ze.a, null, Ae("reportTitle")) }, r.a.createElement(A.a, { button: !0, onClick: function() { return l.push("/reports/route") } }, r.a.createElement(je.a, null, r.a.createElement(it.a, null)), r.a.createElement(C.a, { primary: Ae("reportRoute") })), r.a.createElement(A.a, { button: !0, disabled: !0 }, r.a.createElement(je.a, null, r.a.createElement(dt.a, null)), r.a.createElement(C.a, { primary: Ae("reportEvents") })), r.a.createElement(A.a, { button: !0, disabled: !0 }, r.a.createElement(je.a, null, r.a.createElement(st.a, null)), r.a.createElement(C.a, { primary: Ae("reportTrips") })), r.a.createElement(A.a, { button: !0, disabled: !0 }, r.a.createElement(je.a, null, r.a.createElement(ot.a, null)), r.a.createElement(C.a, { primary: Ae("reportStops") })), r.a.createElement(A.a, { button: !0, disabled: !0 }, r.a.createElement(je.a, null, r.a.createElement(ct.a, null)), r.a.createElement(C.a, { primary: Ae("reportSummary") })), r.a.createElement(A.a, { button: !0, disabled: !0 }, r.a.createElement(je.a, null, r.a.createElement(ut.a, null)), r.a.createElement(C.a, { primary: Ae("reportChart") }))), r.a.createElement(T.a, null), r.a.createElement(P.a, { subheader: r.a.createElement(ze.a, null, Ae("settingsTitle")) }, r.a.createElement(A.a, { button: !0, disabled: !p, onClick: function() { return l.push("/user/".concat(p)) } }, r.a.createElement(je.a, null, r.a.createElement($e.a, null)), r.a.createElement(C.a, { primary: Ae("settingsUser") })), r.a.createElement(A.a, { button: !0, onClick: function() { return l.push("/settings/notifications") } }, r.a.createElement(je.a, null, r.a.createElement(tt.a, null)), r.a.createElement(C.a, { primary: Ae("sharedNotifications") })), r.a.createElement(A.a, { button: !0, onClick: function() { return l.push("/settings/groups") } }, r.a.createElement(je.a, null, r.a.createElement(vt.a, null)), r.a.createElement(C.a, { primary: Ae("settingsGroups") }))), c && r.a.createElement(r.a.Fragment, null, r.a.createElement(T.a, null), r.a.createElement(P.a, { subheader: r.a.createElement(ze.a, null, Ae("userAdmin")) }, r.a.createElement(A.a, { button: !0, onClick: function() { return l.push("/admin/server") } }, r.a.createElement(je.a, null, r.a.createElement(Xe.a, null)), r.a.createElement(C.a, { primary: Ae("settingsServer") })), r.a.createElement(A.a, { button: !0, onClick: function() { return l.push("/admin/users") } }, r.a.createElement(je.a, null, r.a.createElement(Je.a, null)), r.a.createElement(C.a, { primary: Ae("settingsUsers") })), r.a.createElement(A.a, { button: !0, disabled: !0 }, r.a.createElement(je.a, null, r.a.createElement(Ze.a, null)), r.a.createElement(C.a, { primary: Ae("statisticsTitle") }))))))) },
            yt = (a(223), a(224), a(43)),
            Tt = a.n(yt),
            Mt = a(55),
            Pt = a(174),
            At = a(175),
            ft = function() {
                function e(t, a, i, r) { Object(Pt.a)(this, e), this.styles = t, this.defaultStyle = a, this.beforeSwitch = i, this.afterSwitch = r, this.onDocumentClick = this.onDocumentClick.bind(this) } return Object(At.a)(e, [{ key: "getDefaultPosition", value: function() { return "top-right" } }, { key: "onAdd", value: function(e) { var t = this;
                        this.map = e, this.controlContainer = document.createElement("div"), this.controlContainer.classList.add("mapboxgl-ctrl"), this.controlContainer.classList.add("mapboxgl-ctrl-group"), this.mapStyleContainer = document.createElement("div"), this.styleButton = document.createElement("button"), this.styleButton.type = "button", this.mapStyleContainer.classList.add("mapboxgl-style-list"); var a, i = Object(Mt.a)(this.styles); try { for (i.s(); !(a = i.n()).done;) { var r = a.value,
                                    o = document.createElement("button");
                                o.type = "button", o.innerText = r.title, o.classList.add(r.title.replace(/[^a-z0-9-]/gi, "_")), o.dataset.uri = JSON.stringify(r.uri), o.addEventListener("click", (function(e) { var a = e.srcElement; if (!a.classList.contains("active")) { t.beforeSwitch(), t.map.setStyle(JSON.parse(a.dataset.uri)), t.afterSwitch(), t.mapStyleContainer.style.display = "none", t.styleButton.style.display = "block"; for (var i = t.mapStyleContainer.getElementsByClassName("active"); i[0];) i[0].classList.remove("active");
                                        a.classList.add("active") } })), r.title === this.defaultStyle && o.classList.add("active"), this.mapStyleContainer.appendChild(o) } } catch (n) { i.e(n) } finally { i.f() } return this.styleButton.classList.add("mapboxgl-ctrl-icon"), this.styleButton.classList.add("mapboxgl-style-switcher"), this.styleButton.addEventListener("click", (function() { t.styleButton.style.display = "none", t.mapStyleContainer.style.display = "block" })), document.addEventListener("click", this.onDocumentClick), this.controlContainer.appendChild(this.styleButton), this.controlContainer.appendChild(this.mapStyleContainer), this.controlContainer } }, { key: "onRemove", value: function() { this.controlContainer && this.controlContainer.parentNode && this.map && this.styleButton && (this.styleButton.removeEventListener("click", this.onDocumentClick), this.controlContainer.parentNode.removeChild(this.controlContainer), document.removeEventListener("click", this.onDocumentClick), this.map = void 0) } }, { key: "onDocumentClick", value: function(e) { this.controlContainer && !this.controlContainer.contains(e.target) && this.mapStyleContainer && this.styleButton && (this.mapStyleContainer.style.display = "none", this.styleButton.style.display = "block") } }]), e }(),
            kt = ["default", "animal", "bicycle", "boat", "bus", "car", "crane", "helicopter", "motorcycle", "offroad", "person", "pickup", "plane", "ship", "tractor", "train", "tram", "trolleybus", "truck", "van", "scooter"],
            Ct = a(7),
            Ot = function(e) { return new Promise((function(t) { var a = new Image;
                    a.onload = function() { return t(a) }, a.src = e })) },
            Rt = function() { var e = Object(D.a)(b.a.mark((function e(t, a, i) { var r, o, n, s, m, d; return b.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Ot(i);
                            case 2:
                                return r = e.sent, o = window.devicePixelRatio, (n = document.createElement("canvas")).width = a.width * o, n.height = a.height * o, n.style.width = "".concat(a.width, "px"), n.style.height = "".concat(a.height, "px"), (s = n.getContext("2d")).drawImage(a, 0, 0, n.width, n.height), .5, m = .5 * n.width, d = .5 * n.height, s.drawImage(r, (n.width - m) / 2, (n.height - d) / 2, m, d), e.abrupt("return", s.getImageData(0, 0, n.width, n.height));
                            case 16:
                            case "end":
                                return e.stop() } }), e) }))); return function(t, a, i) { return e.apply(this, arguments) } }(),
            Lt = function e(t) { return t ? Array.isArray(t) ? 2 !== t.length || Number.isNaN(t[0]) || Number.isNaN(t[1]) ? t.map((function(t) { return e(t) })) : [t[1], t[0]] : Object(Ct.a)(Object(Ct.a)({}, t), {}, { coordinates: e(t.coordinates) }) : t },
            Et = function(e) { return "mapbox://styles/mapbox/".concat(e) },
            wt = document.createElement("div");
        wt.style.width = "100%", wt.style.height = "100%"; var It = new Tt.a.Map({ container: wt, style: { version: 8, sources: { osm: { type: "raster", tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"], attribution: '\xa9 <a target="_top" rel="noopener" href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' } }, glyphs: "https://cdn.traccar.com/map/fonts/{fontstack}/{range}.pbf", layers: [{ id: "osm", type: "raster", source: "osm" }] } }),
            Gt = !1,
            Ut = new Set,
            Ft = function(e) { Gt = e, Ut.forEach((function(t) { return t(e) })) },
            Bt = function() { var e = Object(D.a)(b.a.mark((function e() { var t; return b.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Ot("images/background.svg");
                            case 2:
                                return t = e.sent, e.next = 5, Promise.all(kt.map(function() { var e = Object(D.a)(b.a.mark((function e(a) { var i; return b.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    if (It.hasImage(a)) { e.next = 5; break } return e.next = 3, Rt(a, t, "images/icon/".concat(a, ".svg"));
                                                case 3:
                                                    i = e.sent, It.addImage(a, i, { pixelRatio: window.devicePixelRatio });
                                                case 5:
                                                case "end":
                                                    return e.stop() } }), e) }))); return function(t) { return e.apply(this, arguments) } }()));
                            case 5:
                                Ft(!0);
                            case 6:
                            case "end":
                                return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }();
        It.on("load", Bt), It.addControl(new Tt.a.NavigationControl({ showCompass: !1 })), It.addControl(new ft([{ title: Ae("mapOsm"), uri: { version: 8, sources: { osm: { type: "raster", tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"], attribution: '\xa9 <a target="_top" rel="noopener" href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' } }, glyphs: "https://cdn.traccar.com/map/fonts/{fontstack}/{range}.pbf", layers: [{ id: "osm", type: "raster", source: "osm" }] } }, { title: Ae("mapCarto"), uri: { version: 8, sources: { "raster-tiles": { type: "raster", tiles: ["https://a.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}@2x.png", "https://b.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}@2x.png", "https://c.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}@2x.png", "https://d.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}@2x.png"], tileSize: 256, attribution: '\xa9 <a target="_top" rel="noopener" href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, \xa9 <a target="_top" rel="noopener" href="https://carto.com/attribution">CARTO</a>' } }, glyphs: "https://cdn.traccar.com/map/fonts/{fontstack}/{range}.pbf", layers: [{ id: "simple-tiles", type: "raster", source: "raster-tiles", minzoom: 0, maxzoom: 22 }] } }, { title: Ae("mapMapboxStreets"), uri: Et("streets-v11") }, { title: Ae("mapMapboxOutdoors"), uri: Et("outdoors-v11") }, { title: Ae("mapMapboxSatellite"), uri: Et("satellite-v9") }], Ae("mapOsm"), (function() { return Ft(!1) }), (function() {! function e() { It.loaded() ? Bt() : setTimeout(e, 100) }() }))); var xt = function(e) { var t, a, o = e.children,
                    n = Object(i.useRef)(null),
                    s = Object(i.useState)(!1),
                    d = Object(j.a)(s, 2),
                    l = d[0],
                    c = d[1],
                    p = (t = "mapboxAccessToken", Object(m.d)((function(e) { return e.session.server.forceSettings ? e.session.server.attributes[t] || e.session.user.attributes[t] || a : e.session.user.attributes[t] || e.session.server.attributes[t] || a }))); return Object(i.useEffect)((function() { Tt.a.accessToken = p }), [p]), Object(i.useEffect)((function() { var e = function(e) { return c(e) }; return function(e) { Ut.add(e), e(Gt) }(e),
                        function() {! function(e) { Ut.delete(e) }(e) } }), []), Object(i.useLayoutEffect)((function() { var e = n.current; return e.appendChild(wt), It && It.resize(),
                        function() { e.removeChild(wt) } }), [n]), r.a.createElement("div", { style: { width: "100%", height: "100%" }, ref: n }, l && o) },
            Vt = function() { var e = Object(m.d)((function(e) { if (e.devices.selectedId) { var t = e.positions.items[e.devices.selectedId] || null; if (t) return [t.longitude, t.latitude] } return null })); return Object(i.useEffect)((function() { It.easeTo({ center: e }) }), [e]), null },
            Nt = a(178),
            Ht = function() { var e = "accuracy",
                    t = Object(m.d)((function(e) { return { type: "FeatureCollection", features: Object.values(e.positions.items).filter((function(e) { return e.accuracy > 0 })).map((function(e) { return Object(Nt.a)([e.longitude, e.latitude], .001 * e.accuracy) })) } })); return Object(i.useEffect)((function() { return It.addSource(e, { type: "geojson", data: { type: "FeatureCollection", features: [] } }), It.addLayer({ source: e, id: e, type: "fill", filter: ["all", ["==", "$type", "Polygon"]], paint: { "fill-color": "#3bb2d0", "fill-outline-color": "#3bb2d0", "fill-opacity": .25 } }),
                        function() { It.removeLayer(e), It.removeSource(e) } }), []), Object(i.useEffect)((function() { It.getSource(e).setData(t) }), [t]), null },
            zt = a(176),
            jt = a.n(zt),
            Wt = function() { var e = "geofences",
                    t = Object(i.useState)([]),
                    a = Object(j.a)(t, 2),
                    r = a[0],
                    o = a[1]; return Ie(Object(D.a)(b.a.mark((function e() { var t; return b.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, fetch("/api/geofences");
                            case 2:
                                if (!(t = e.sent).ok) { e.next = 9; break } return e.t0 = o, e.next = 7, t.json();
                            case 7:
                                e.t1 = e.sent, (0, e.t0)(e.t1);
                            case 9:
                            case "end":
                                return e.stop() } }), e) }))), []), Object(i.useEffect)((function() { return It.addSource(e, { type: "geojson", data: { type: "FeatureCollection", features: [] } }), It.addLayer({ source: e, id: "geofences-fill", type: "fill", filter: ["all", ["==", "$type", "Polygon"]], paint: { "fill-color": "#3bb2d0", "fill-outline-color": "#3bb2d0", "fill-opacity": .1 } }), It.addLayer({ source: e, id: "geofences-line", type: "line", paint: { "line-color": "#3bb2d0", "line-width": 2 } }), It.addLayer({ source: e, id: "geofences-title", type: "symbol", layout: { "text-field": "{name}", "text-font": ["Roboto Regular"], "text-size": 12 }, paint: { "text-halo-color": "white", "text-halo-width": 1 } }),
                        function() { It.removeLayer("geofences-fill"), It.removeLayer("geofences-line"), It.removeLayer("geofences-title"), It.removeSource(e) } }), []), Object(i.useEffect)((function() { It.getSource(e).setData({ type: "FeatureCollection", features: r.map((function(e) { return [e.name, Lt(jt()(e.area))] })).filter((function(e) { return !!Object(j.a)(e, 2)[1] })).map((function(e) { var t = Object(j.a)(e, 2),
                                a = t[0]; return { type: "Feature", geometry: t[1], properties: { name: a } } })) }) }), [r]), null },
            Kt = a(12),
            qt = a.n(Kt),
            Zt = function(e, t) { switch (null != e && "object" === typeof e && (e = e[t]), t) {
                    case "fixTime":
                    case "deviceTime":
                    case "serverTime":
                        return qt()(e).format("LLL");
                    case "latitude":
                    case "longitude":
                        return e.toFixed(5);
                    case "speed":
                    case "course":
                        return e.toFixed(1);
                    case "batteryLevel":
                        return e + "%";
                    default:
                        return "number" === typeof e ? Jt(e) : "boolean" === typeof e ? Yt(e) : e } },
            Yt = function(e) { return Ae(e ? "sharedYes" : "sharedNo") },
            Jt = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1; return Number(e.toFixed(t)) },
            Qt = function(e) { var t = e.deviceId,
                    a = e.onShowDetails,
                    i = Object(m.d)((function(e) { return e.devices.items[t] })),
                    o = Object(m.d)((function(e) { return e.positions.items[t] })); return r.a.createElement(r.a.Fragment, null, r.a.createElement("b", null, Ae("deviceStatus"), ":"), " ", Zt(i.status, "status"), r.a.createElement("br", null), r.a.createElement("b", null, Ae("sharedLocation"), ":"), " ", Zt(o, "latitude"), " ", Zt(o, "longitude"), r.a.createElement("br", null), r.a.createElement("b", null, Ae("positionSpeed"), ":"), " ", Zt(o.speed, "speed"), r.a.createElement("br", null), r.a.createElement("b", null, Ae("positionCourse"), ":"), " ", Zt(o.course, "course"), r.a.createElement("br", null), r.a.createElement("b", null, Ae("positionDistance"), ":"), " ", Zt(o.attributes.totalDistance, "distance"), r.a.createElement("br", null), o.attributes.batteryLevel && r.a.createElement(r.a.Fragment, null, r.a.createElement("b", null, Ae("positionBattery"), ":"), " ", Zt(o.attributes.batteryLevel, "batteryLevel"), r.a.createElement("br", null)), r.a.createElement("a", { href: "/", onClick: function(e) { e.preventDefault(), a(o.id) } }, Ae("sharedShowDetails"))) },
            Xt = function(e) { var t = e.positions,
                    a = "positions",
                    o = Object(d.f)(),
                    s = Object(m.d)((function(e) { return e.devices.items })),
                    l = function(e, t) { var a = e[t.deviceId] || null; return { deviceId: t.deviceId, name: a ? a.name : "", category: a && (a.category || "default") } },
                    c = function() { return It.getCanvas().style.cursor = "pointer" },
                    p = function() { return It.getCanvas().style.cursor = "" },
                    u = Object(i.useCallback)((function(e) { for (var t = e.features[0], a = t.geometry.coordinates.slice(); Math.abs(e.lngLat.lng - a[0]) > 180;) a[0] += e.lngLat.lng > a[0] ? 360 : -360; var i = document.createElement("div");
                        n.a.render(r.a.createElement(m.a, { store: z }, r.a.createElement(Qt, { deviceId: t.properties.deviceId, onShowDetails: function(e) { return o.push("/position/".concat(e)) } })), i), new Tt.a.Popup({ offset: 25, anchor: "top" }).setDOMContent(i).setLngLat(a).addTo(It) }), [o]); return Object(i.useEffect)((function() { return It.addSource(a, { type: "geojson", data: { type: "FeatureCollection", features: [] } }), It.addLayer({ id: a, type: "symbol", source: a, layout: { "icon-image": "{category}", "icon-allow-overlap": !0, "text-field": "{name}", "text-allow-overlap": !0, "text-anchor": "bottom", "text-offset": [0, -2], "text-font": ["Roboto Regular"], "text-size": 12 }, paint: { "text-halo-color": "white", "text-halo-width": 1 } }), It.on("mouseenter", a, c), It.on("mouseleave", a, p), It.on("click", a, u),
                        function() { Array.from(It.getContainer().getElementsByClassName("mapboxgl-popup")).forEach((function(e) { return e.remove() })), It.off("mouseenter", a, c), It.off("mouseleave", a, p), It.off("click", a, u), It.removeLayer(a), It.removeSource(a) } }), [u]), Object(i.useEffect)((function() { It.getSource(a).setData({ type: "FeatureCollection", features: t.map((function(e) { return { type: "Feature", geometry: { type: "Point", coordinates: [e.longitude, e.latitude] }, properties: l(s, e) } })) }) }), [s, t]), null },
            _t = function() { var e = Object(m.d)((function(e) { return Object.values(e.positions.items) })); return r.a.createElement(Xt, { positions: e }) },
            $t = function() { return Object(i.useEffect)((function() { var e = new Tt.a.GeolocateControl({ positionOptions: { enableHighAccuracy: !0, timeout: 5e3 }, trackUserLocation: !0 }); return It.addControl(e),
                        function() { return It.removeControl(e) } }), []), null },
            ea = Object(p.a)((function(e) { var t; return { root: { height: "100%", display: "flex", flexDirection: "column" }, content: Object(c.a)({ flexGrow: 1, overflow: "hidden", display: "flex", flexDirection: "row" }, e.breakpoints.down("xs"), { flexDirection: "column-reverse" }), drawerPaper: (t = { position: "relative" }, Object(c.a)(t, e.breakpoints.up("sm"), { width: 350 }), Object(c.a)(t, e.breakpoints.down("xs"), { height: 250 }), t), mapContainer: { flexGrow: 1 } } })),
            ta = Object(u.a)()((function(e) { var t = e.width,
                    a = ea(); return r.a.createElement("div", { className: a.root }, r.a.createElement(Dt, null), r.a.createElement("div", { className: a.content }, r.a.createElement(S.a, { anchor: Object(u.b)("sm", t) ? "left" : "bottom", variant: "permanent", classes: { paper: a.drawerPaper } }, r.a.createElement(Fe, null)), r.a.createElement("div", { className: a.mapContainer }, r.a.createElement(g.a, null, r.a.createElement(xt, null, r.a.createElement($t, null), r.a.createElement(Wt, null), r.a.createElement(Ht, null), r.a.createElement(_t, null), r.a.createElement(Vt, null)))))) })),
            aa = a(298),
            ia = a(180),
            ra = a(322),
            oa = Object(p.a)((function(e) { return { root: Object(c.a)({ width: "auto", marginLeft: e.spacing(3), marginRight: e.spacing(3) }, e.breakpoints.up(400 + e.spacing(6)), { width: 400, marginLeft: "auto", marginRight: "auto" }), paper: { marginTop: e.spacing(8), display: "flex", flexDirection: "column", alignItems: "center", padding: e.spacing(3) }, logo: { marginTop: e.spacing(2) }, buttons: { marginTop: e.spacing(1), display: "flex", justifyContent: "space-evenly", "& > *": { flexBasis: "40%" } } } })),
            na = function() { var e = Object(m.c)(),
                    t = Object(i.useState)(!1),
                    a = Object(j.a)(t, 2),
                    o = a[0],
                    n = a[1],
                    s = Object(i.useState)(""),
                    l = Object(j.a)(s, 2),
                    c = l[0],
                    p = l[1],
                    u = Object(i.useState)(""),
                    S = Object(j.a)(u, 2),
                    v = S[0],
                    g = S[1],
                    h = oa(),
                    y = Object(d.f)(),
                    T = function() { var t = Object(D.a)(b.a.mark((function t(a) { var i, r; return b.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return a.preventDefault(), t.next = 3, fetch("/api/session", { method: "POST", body: new URLSearchParams("email=".concat(c, "&password=").concat(v)) });
                                    case 3:
                                        if (!(i = t.sent).ok) { t.next = 12; break } return t.next = 7, i.json();
                                    case 7:
                                        r = t.sent, e(G.updateUser(r)), y.push("/"), t.next = 14; break;
                                    case 12:
                                        n(!0), g("");
                                    case 14:
                                    case "end":
                                        return t.stop() } }), t) }))); return function(e) { return t.apply(this, arguments) } }(); return r.a.createElement("main", { className: h.root }, r.a.createElement(ia.a, { className: h.paper }, r.a.createElement("img", { className: h.logo, src: "/ubik3.png", width:"240", height:"84", alt: "Traccar" }), r.a.createElement("form", { onSubmit: T }, r.a.createElement(ra.a, { margin: "normal", required: !0, fullWidth: !0, error: o, label: Ae("userEmail"), name: "email", value: c, autoComplete: "email", autoFocus: !0, onChange: function(e) { p(e.target.value) }, helperText: o && "Invalid username or password" }), r.a.createElement(ra.a, { margin: "normal", required: !0, fullWidth: !0, error: o, label: Ae("userPassword"), name: "password", value: v, type: "password", autoComplete: "current-password", onChange: function(e) { g(e.target.value) } }), r.a.createElement(aa.a, { fullWidth: !0, margin: "normal" }, r.a.createElement("div", { className: h.buttons }, r.a.createElement(fe.a, { type: "button", variant: "contained", disabled: !0, onClick: function() {} }, Ae("loginRegister")), r.a.createElement(fe.a, { type: "submit", variant: "contained", color: "primary", disabled: !c || !v }, Ae("loginLogin"))))))) },
            sa = a(299),
            ma = a(324),
            da = a(315),
            la = a(300),
            ca = a(301),
            pa = a(302),
            ua = a(303),
            Sa = a(304),
            va = a(305),
            ga = Object(p.a)((function(e) { return { root: { height: "100%", display: "flex", flexDirection: "column" }, content: { flex: 1, overflow: "auto", padding: e.spacing(2) }, form: { padding: e.spacing(1, 2, 2) } } })),
            ha = function() { var e = ga(),
                    t = Object(m.d)((function(e) { return Object.values(e.devices.items) })),
                    a = Object(i.useState)(),
                    o = Object(j.a)(a, 2),
                    n = o[0],
                    s = o[1],
                    d = Object(i.useState)("today"),
                    l = Object(j.a)(d, 2),
                    c = l[0],
                    p = l[1],
                    u = Object(i.useState)(qt()().subtract(1, "hour")),
                    S = Object(j.a)(u, 2),
                    v = S[0],
                    g = S[1],
                    h = Object(i.useState)(qt()()),
                    b = Object(j.a)(h, 2),
                    D = b[0],
                    y = b[1],
                    T = Object(i.useState)([]),
                    M = Object(j.a)(T, 2),
                    P = M[0],
                    A = M[1]; return r.a.createElement("div", { className: e.root }, r.a.createElement(Dt, null), r.a.createElement("div", { className: e.content }, r.a.createElement(sa.a, { container: !0, spacing: 2 }, r.a.createElement(sa.a, { item: !0, xs: 12, md: 3, lg: 2 }, r.a.createElement(ia.a, { className: e.form }, r.a.createElement(aa.a, { variant: "filled", margin: "normal", fullWidth: !0 }, r.a.createElement(ma.a, null, Ae("reportDevice")), r.a.createElement(da.a, { value: n, onChange: function(e) { return s(e.target.value) } }, t.map((function(e) { return r.a.createElement(K.a, { value: e.id }, e.name) })))), r.a.createElement(aa.a, { variant: "filled", margin: "normal", fullWidth: !0 }, r.a.createElement(ma.a, null, Ae("reportPeriod")), r.a.createElement(da.a, { value: c, onChange: function(e) { return p(e.target.value) } }, r.a.createElement(K.a, { value: "today" }, Ae("reportToday")), r.a.createElement(K.a, { value: "yesterday" }, Ae("reportYesterday")), r.a.createElement(K.a, { value: "thisWeek" }, Ae("reportThisWeek")), r.a.createElement(K.a, { value: "previousWeek" }, Ae("reportPreviousWeek")), r.a.createElement(K.a, { value: "thisMonth" }, Ae("reportThisMonth")), r.a.createElement(K.a, { value: "previousMonth" }, Ae("reportPreviousMonth")), r.a.createElement(K.a, { value: "custom" }, Ae("reportCustom")))), "custom" === c && r.a.createElement(ra.a, { margin: "normal", variant: "filled", label: Ae("reportFrom"), type: "datetime-local", value: v.format(qt.a.HTML5_FMT.DATETIME_LOCAL), onChange: function(e) { return g(qt()(e.target.value, qt.a.HTML5_FMT.DATETIME_LOCAL)) }, fullWidth: !0 }), "custom" === c && r.a.createElement(ra.a, { margin: "normal", variant: "filled", label: Ae("reportTo"), type: "datetime-local", value: D.format(qt.a.HTML5_FMT.DATETIME_LOCAL), onChange: function(e) { return y(qt()(e.target.value, qt.a.HTML5_FMT.DATETIME_LOCAL)) }, fullWidth: !0 }), r.a.createElement(aa.a, { margin: "normal", fullWidth: !0 }, r.a.createElement(fe.a, { type: "button", color: "primary", variant: "contained", disabled: !n, onClick: function() { var e, t; switch (c) {
                            case "today":
                                e = qt()().startOf("day"), t = qt()().endOf("day"); break;
                            case "yesterday":
                                e = qt()().subtract(1, "day").startOf("day"), t = qt()().subtract(1, "day").endOf("day"); break;
                            case "thisWeek":
                                e = qt()().startOf("week"), t = qt()().endOf("week"); break;
                            case "previousWeek":
                                e = qt()().subtract(1, "week").startOf("week"), t = qt()().subtract(1, "week").endOf("week"); break;
                            case "thisMonth":
                                e = qt()().startOf("month"), t = qt()().endOf("month"); break;
                            case "previousMonth":
                                e = qt()().subtract(1, "month").startOf("month"), t = qt()().subtract(1, "month").endOf("month"); break;
                            default:
                                e = v, t = D } var a = new URLSearchParams({ deviceId: n, from: e.toISOString(), to: t.toISOString() });
                        fetch("/api/reports/route?".concat(a.toString()), { headers: { Accept: "application/json" } }).then((function(e) { e.ok && e.json().then(A) })) } }, Ae("reportShow"))))), r.a.createElement(sa.a, { item: !0, xs: 12, md: 9, lg: 10 }, r.a.createElement(la.a, { component: ia.a }, r.a.createElement(ca.a, null, r.a.createElement(pa.a, null, r.a.createElement(ua.a, null, r.a.createElement(Sa.a, null, Ae("positionFixTime")), r.a.createElement(Sa.a, null, Ae("positionLatitude")), r.a.createElement(Sa.a, null, Ae("positionLongitude")), r.a.createElement(Sa.a, null, Ae("positionSpeed")), r.a.createElement(Sa.a, null, Ae("positionAddress")))), r.a.createElement(va.a, null, P.map((function(e) { return r.a.createElement(ua.a, { key: e.id }, r.a.createElement(Sa.a, null, Zt(e, "fixTime")), r.a.createElement(Sa.a, null, Zt(e, "latitude")), r.a.createElement(Sa.a, null, Zt(e, "longitude")), r.a.createElement(Sa.a, null, Zt(e, "speed")), r.a.createElement(Sa.a, null, Zt(e, "address"))) }))))))))) },
            ba = a(309),
            Da = a(318),
            ya = a(310),
            Ta = a(311),
            Ma = a(307),
            Pa = a(316),
            Aa = a(24),
            fa = a.n(Aa),
            ka = a(297),
            Ca = a(308),
            Oa = a(94),
            Ra = a.n(Oa),
            La = a(306),
            Ea = a(317),
            wa = function(e) { var t = e.open,
                    a = e.onResult,
                    o = e.definitions,
                    n = Object(La.a)({ stringify: function(e) { return e.name } }),
                    s = Object.entries(o).map((function(e) { var t = Object(j.a)(e, 2),
                            a = t[0],
                            i = t[1]; return { key: a, name: i.name, type: i.type } })),
                    m = Object(i.useState)(),
                    d = Object(j.a)(m, 2),
                    l = d[0],
                    c = d[1],
                    p = Object(i.useState)("string"),
                    u = Object(j.a)(p, 2),
                    S = u[0],
                    v = u[1]; return r.a.createElement(ke.a, { open: t, fullWidth: !0, maxWidth: "xs" }, r.a.createElement(Oe.a, null, r.a.createElement(Ea.a, { onChange: function(e, t) { c(t && "object" === typeof t ? t.key : t), t && t.type && v(t.type) }, filterOptions: function(e, t) { var a = n(e, t); return t.inputValue && a.push({ key: t.inputValue, name: t.inputValue }), a }, options: s, getOptionLabel: function(e) { return e && "object" === typeof e ? e.name : e }, renderOption: function(e) { return e.name }, freeSolo: !0, renderInput: function(e) { return r.a.createElement(ra.a, Object.assign({}, e, { label: Ae("sharedAttribute"), variant: "filled", margin: "normal" })) } }), r.a.createElement(aa.a, { variant: "filled", margin: "normal", fullWidth: !0, disabled: l in o }, r.a.createElement(ma.a, null, Ae("sharedType")), r.a.createElement(da.a, { value: S, onChange: function(e) { return v(e.target.value) } }, r.a.createElement(K.a, { value: "string" }, Ae("sharedTypeString")), r.a.createElement(K.a, { value: "number" }, Ae("sharedTypeNumber")), r.a.createElement(K.a, { value: "boolean" }, Ae("sharedTypeBoolean"))))), r.a.createElement(Ce.a, null, r.a.createElement(fe.a, { color: "primary", disabled: !l, onClick: function() { return a({ key: l, type: S }) } }, Ae("sharedAdd")), r.a.createElement(fe.a, { autoFocus: !0, onClick: function() { return a(null) } }, Ae("sharedCancel")))) },
            Ia = Object(p.a)((function(e) { return { addButton: { marginTop: e.spacing(2), marginBottom: e.spacing(1) }, removeButton: { marginRight: e.spacing(1.5) } } })),
            Ga = function(e) { var t = e.attributes,
                    a = e.setAttributes,
                    o = e.definitions,
                    n = Ia(),
                    s = Object(i.useState)(!1),
                    m = Object(j.a)(s, 2),
                    d = m[0],
                    l = m[1],
                    c = function(e, i) { var r = Object(Ct.a)({}, t);
                        r[e] = i, a(r) },
                    p = function(e) { var i = Object(Ct.a)({}, t);
                        delete i[e], a(i) },
                    u = function(e) { var t = o[e]; return t ? t.name : e },
                    S = function(e) { return "number" === typeof e ? "number" : "boolean" === typeof e ? "boolean" : "string" }; return r.a.createElement(r.a.Fragment, null, function(e) { var t = [],
                        a = []; for (var i in e) { var r = e[i],
                            o = S(r); "boolean" === o ? t.push({ key: i, value: r, type: o }) : a.push({ key: i, value: r, type: o }) } return a.concat(t) }(t).map((function(e) { var t = e.key,
                        a = e.value,
                        i = e.type; return "boolean" === i ? r.a.createElement(sa.a, { container: !0, direction: "row", justify: "space-between" }, r.a.createElement(Ma.a, { control: r.a.createElement(Pa.a, { checked: a, onChange: function(e) { return c(t, e.target.checked) } }), label: u(t) }), r.a.createElement(M.a, { className: n.removeButton, onClick: function() { return p(t) } }, r.a.createElement(Ra.a, null))) : r.a.createElement(aa.a, { variant: "filled", margin: "normal", key: t }, r.a.createElement(ma.a, null, u(t)), r.a.createElement(ka.a, { type: "number" === i ? "number" : "text", defaultValue: a, onChange: function(e) { return c(t, e.target.value) }, endAdornment: r.a.createElement(Ca.a, { position: "end" }, r.a.createElement(M.a, { onClick: function() { return p(t) } }, r.a.createElement(Ra.a, null))) })) })), r.a.createElement(fe.a, { size: "large", variant: "outlined", color: "primary", onClick: function() { return l(!0) }, startIcon: r.a.createElement(Y.a, null), className: n.addButton }, Ae("sharedAdd")), r.a.createElement(wa, { open: d, onResult: function(e) { if (l(!1), e) switch (e.type) {
                            case "number":
                                c(e.key, 0); break;
                            case "boolean":
                                c(e.key, !1); break;
                            default:
                                c(e.key, "") } }, definitions: o })) },
            Ua = { speedLimit: { name: Ae("attributeSpeedLimit"), type: "string" }, "report.ignoreOdometer": { name: Ae("attributeReportIgnoreOdometer"), type: "boolean" } },
            Fa = { notificationTokens: { name: Ae("attributeNotificationTokens"), type: "string" }, "web.liveRouteLength": { name: Ae("attributeWebLiveRouteLength"), type: "number" }, "web.selectZoom": { name: Ae("attributeWebSelectZoom"), type: "number" }, "web.maxZoom": { name: Ae("attributeWebMaxZoom"), type: "number" }, "ui.disableReport": { name: Ae("attributeUiDisableReport"), type: "boolean" }, "ui.disableEvents": { name: Ae("attributeUiDisableEvents"), type: "boolean" }, "ui.disableVehicleFetures": { name: Ae("attributeUiDisableVehicleFetures"), type: "boolean" }, "ui.disableDrivers": { name: Ae("attributeUiDisableDrivers"), type: "boolean" }, "ui.disableComputedAttributes": { name: Ae("attributeUiDisableComputedAttributes"), type: "boolean" }, "ui.disableCalendars": { name: Ae("attributeUiDisableCalendars"), type: "boolean" }, "ui.disableMaintenance": { name: Ae("attributeUiDisableMaintenance"), type: "boolean" }, "ui.hidePositionAttributes": { name: Ae("attributeUiHidePositionAttributes"), type: "string" }, distanceUnit: { name: Ae("settingsDistanceUnit"), type: "string" }, speedUnit: { name: Ae("settingsSpeedUnit"), type: "string" }, volumeUnit: { name: Ae("settingsVolumeUnit"), type: "string" }, timezone: { name: Ae("sharedTimezone"), type: "string" } },
            Ba = Object(p.a)((function(e) { return { container: { marginTop: e.spacing(2) }, buttons: { display: "flex", justifyContent: "space-evenly", "& > *": { flexBasis: "33%" } }, details: { flexDirection: "column" } } })),
            xa = function() { var e = Object(d.f)(),
                    t = Object(m.c)(),
                    a = Ba(),
                    i = Object(m.d)((function(e) { return e.session.server })),
                    o = function(e) { return t(G.updateServer(e)) },
                    n = function() { var t = Object(D.a)(b.a.mark((function t() { return b.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, fetch("/api/server", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(i) });
                                    case 2:
                                        t.sent.ok && e.goBack();
                                    case 4:
                                    case "end":
                                        return t.stop() } }), t) }))); return function() { return t.apply(this, arguments) } }(); return r.a.createElement(r.a.Fragment, null, r.a.createElement(Dt, null), r.a.createElement(ba.a, { maxWidth: "xs", className: a.container }, i && r.a.createElement(r.a.Fragment, null, r.a.createElement(Da.a, { defaultExpanded: !0 }, r.a.createElement(ya.a, { expandIcon: r.a.createElement(fa.a, null) }, r.a.createElement(Ve.a, { variant: "subtitle1" }, Ae("sharedPreferences"))), r.a.createElement(Ta.a, { className: a.details }, r.a.createElement(ra.a, { margin: "normal", defaultValue: i.announcement, onChange: function(e) { return o(Object(Ct.a)(Object(Ct.a)({}, i), {}, { announcement: e.target.value })) }, label: Ae("serverAnnouncement"), variant: "filled" }))), r.a.createElement(Da.a, null, r.a.createElement(ya.a, { expandIcon: r.a.createElement(fa.a, null) }, r.a.createElement(Ve.a, { variant: "subtitle1" }, Ae("sharedPermissions"))), r.a.createElement(Ta.a, { className: a.details }, r.a.createElement(Ma.a, { control: r.a.createElement(Pa.a, { checked: i.registration, onChange: function(e) { return o(Object(Ct.a)(Object(Ct.a)({}, i), {}, { registration: e.target.checked })) } }), label: Ae("serverRegistration") }), r.a.createElement(Ma.a, { control: r.a.createElement(Pa.a, { checked: i.readonly, onChange: function(e) { return o(Object(Ct.a)(Object(Ct.a)({}, i), {}, { readonly: e.target.checked })) } }), label: Ae("serverReadonly") }), r.a.createElement(Ma.a, { control: r.a.createElement(Pa.a, { checked: i.deviceReadonly, onChange: function(e) { return o(Object(Ct.a)(Object(Ct.a)({}, i), {}, { deviceReadonly: e.target.checked })) } }), label: Ae("userDeviceReadonly") }), r.a.createElement(Ma.a, { control: r.a.createElement(Pa.a, { checked: i.limitCommands, onChange: function(e) { return o(Object(Ct.a)(Object(Ct.a)({}, i), {}, { limitCommands: e.target.checked })) } }), label: Ae("userLimitCommands") }))), r.a.createElement(Da.a, null, r.a.createElement(ya.a, { expandIcon: r.a.createElement(fa.a, null) }, r.a.createElement(Ve.a, { variant: "subtitle1" }, Ae("sharedAttributes"))), r.a.createElement(Ta.a, { className: a.details }, r.a.createElement(Ga, { attributes: i.attributes, setAttributes: function(e) { return o(Object(Ct.a)(Object(Ct.a)({}, i), {}, { attributes: e })) }, definitions: Object(Ct.a)(Object(Ct.a)({}, Fa), Ua) })))), r.a.createElement(aa.a, { fullWidth: !0, margin: "normal" }, r.a.createElement("div", { className: a.buttons }, r.a.createElement(fe.a, { type: "button", color: "primary", variant: "outlined", onClick: function() { return e.goBack() } }, Ae("sharedCancel")), r.a.createElement(fe.a, { type: "button", color: "primary", variant: "contained", onClick: n }, Ae("sharedSave")))))) },
            Va = Object(p.a)((function(e) { return { columnAction: { width: e.spacing(1), padding: e.spacing(0, 1) } } })),
            Na = function(e) { var t = e.updateTimestamp,
                    a = e.onMenuClick,
                    o = Va(),
                    n = Object(i.useState)([]),
                    s = Object(j.a)(n, 2),
                    m = s[0],
                    d = s[1]; return Ie(Object(D.a)(b.a.mark((function e() { var t; return b.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, fetch("/api/users");
                            case 2:
                                if (!(t = e.sent).ok) { e.next = 9; break } return e.t0 = d, e.next = 7, t.json();
                            case 7:
                                e.t1 = e.sent, (0, e.t0)(e.t1);
                            case 9:
                            case "end":
                                return e.stop() } }), e) }))), [t]), r.a.createElement(la.a, null, r.a.createElement(ca.a, null, r.a.createElement(pa.a, null, r.a.createElement(ua.a, null, r.a.createElement(Sa.a, { className: o.columnAction }), r.a.createElement(Sa.a, null, Ae("sharedName")), r.a.createElement(Sa.a, null, Ae("userEmail")), r.a.createElement(Sa.a, null, Ae("userAdmin")), r.a.createElement(Sa.a, null, Ae("sharedDisabled")))), r.a.createElement(va.a, null, m.map((function(e) { return r.a.createElement(ua.a, { key: e.id }, r.a.createElement(Sa.a, { className: o.columnAction, padding: "none" }, r.a.createElement(M.a, { onClick: function(t) { return a(t.currentTarget, e.id) } }, r.a.createElement(R.a, null))), r.a.createElement(Sa.a, null, e.name), r.a.createElement(Sa.a, null, e.email), r.a.createElement(Sa.a, null, Yt(e, "administrator")), r.a.createElement(Sa.a, null, Yt(e, "disabled"))) }))))) },
            Ha = function() { return r.a.createElement(r.a.Fragment, null, r.a.createElement(Dt, null), r.a.createElement(we, { content: Na, editPath: "/user", endpoint: "users" })) },
            za = Object(p.a)((function(e) { return { container: { marginTop: e.spacing(2) }, buttons: { display: "flex", justifyContent: "space-evenly", "& > *": { flexBasis: "33%" } } } })),
            ja = function(e) { var t = e.children,
                    a = e.endpoint,
                    i = e.item,
                    o = e.setItem,
                    n = Object(d.f)(),
                    s = za(),
                    m = Object(d.g)().id;
                Ie(Object(D.a)(b.a.mark((function e() { var t; return b.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!m) { e.next = 12; break } return e.next = 3, fetch("/api/".concat(a, "/").concat(m));
                            case 3:
                                if (!(t = e.sent).ok) { e.next = 10; break } return e.t0 = o, e.next = 8, t.json();
                            case 8:
                                e.t1 = e.sent, (0, e.t0)(e.t1);
                            case 10:
                                e.next = 13; break;
                            case 12:
                                o({});
                            case 13:
                            case "end":
                                return e.stop() } }), e) }))), [m]); var l = function() { var e = Object(D.a)(b.a.mark((function e() { var t; return b.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = "/api/".concat(a), m && (t += "/".concat(m)), e.next = 4, fetch(t, { method: m ? "PUT" : "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(i) });
                                case 4:
                                    e.sent.ok && n.goBack();
                                case 6:
                                case "end":
                                    return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(); return r.a.createElement(r.a.Fragment, null, r.a.createElement(Dt, null), r.a.createElement(ba.a, { maxWidth: "xs", className: s.container }, t, r.a.createElement(aa.a, { fullWidth: !0, margin: "normal" }, r.a.createElement("div", { className: s.buttons }, r.a.createElement(fe.a, { type: "button", color: "primary", variant: "outlined", onClick: function() { return n.goBack() } }, Ae("sharedCancel")), r.a.createElement(fe.a, { type: "button", color: "primary", variant: "contained", onClick: l }, Ae("sharedSave")))))) },
            Wa = function(e) { var t = e.margin,
                    a = e.variant,
                    o = e.label,
                    n = e.multiple,
                    s = e.defaultValue,
                    m = e.onChange,
                    d = e.endpoint,
                    l = e.data,
                    c = e.keyGetter,
                    p = void 0 === c ? function(e) { return e.id } : c,
                    u = e.titleGetter,
                    S = void 0 === u ? function(e) { return e.name } : u,
                    v = Object(i.useState)(l),
                    g = Object(j.a)(v, 2),
                    h = g[0],
                    y = g[1]; return Ie(Object(D.a)(b.a.mark((function e() { var t; return b.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!d) { e.next = 10; break } return e.next = 3, fetch(d);
                            case 3:
                                if (!(t = e.sent).ok) { e.next = 10; break } return e.t0 = y, e.next = 8, t.json();
                            case 8:
                                e.t1 = e.sent, (0, e.t0)(e.t1);
                            case 10:
                            case "end":
                                return e.stop() } }), e) }))), []), h ? r.a.createElement(aa.a, { margin: t, variant: a }, r.a.createElement(ma.a, null, o), r.a.createElement(da.a, { multiple: n, defaultValue: s, onChange: m }, !n && r.a.createElement(K.a, { value: 0 }, "\xa0"), h.map((function(e) { return r.a.createElement(K.a, { key: p(e), value: p(e) }, S(e)) })))) : null },
            Ka = function(e) { var t = e.margin,
                    a = e.variant,
                    o = e.label,
                    n = e.endpointAll,
                    s = e.endpointLinked,
                    m = e.baseId,
                    d = e.keyBase,
                    l = e.keyLink,
                    c = e.keyGetter,
                    p = void 0 === c ? function(e) { return e.id } : c,
                    u = e.titleGetter,
                    S = void 0 === u ? function(e) { return e.name } : u,
                    v = Object(i.useState)(),
                    g = Object(j.a)(v, 2),
                    h = g[0],
                    y = g[1],
                    T = Object(i.useState)(),
                    M = Object(j.a)(T, 2),
                    P = M[0],
                    A = M[1];
                Ie(Object(D.a)(b.a.mark((function e() { var t; return b.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, fetch(n);
                            case 2:
                                if (!(t = e.sent).ok) { e.next = 9; break } return e.t0 = y, e.next = 7, t.json();
                            case 7:
                                e.t1 = e.sent, (0, e.t0)(e.t1);
                            case 9:
                            case "end":
                                return e.stop() } }), e) }))), []), Ie(Object(D.a)(b.a.mark((function e() { var t, a; return b.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, fetch(s);
                            case 2:
                                if (!(t = e.sent).ok) { e.next = 8; break } return e.next = 6, t.json();
                            case 6:
                                a = e.sent, A(a.map((function(e) { return e.id })));
                            case 8:
                            case "end":
                                return e.stop() } }), e) }))), []); var f = function(e) { var t = {}; return t[d] = m, t[l] = e, t },
                    k = function() { var e = Object(D.a)(b.a.mark((function e(t) { var a, i, r, o, n, s, m, d; return b.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        a = P, i = t.target.value, r = Object(Mt.a)(i.filter((function(e) { return !a.includes(e) }))), e.prev = 3, r.s();
                                    case 5:
                                        if ((o = r.n()).done) { e.next = 11; break } return n = o.value, e.next = 9, fetch("/api/permissions", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(f(n)) });
                                    case 9:
                                        e.next = 5; break;
                                    case 11:
                                        e.next = 16; break;
                                    case 13:
                                        e.prev = 13, e.t0 = e.catch(3), r.e(e.t0);
                                    case 16:
                                        return e.prev = 16, r.f(), e.finish(16);
                                    case 19:
                                        s = Object(Mt.a)(a.filter((function(e) { return !i.includes(e) }))), e.prev = 20, s.s();
                                    case 22:
                                        if ((m = s.n()).done) { e.next = 28; break } return d = m.value, e.next = 26, fetch("/api/permissions", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify(f(d)) });
                                    case 26:
                                        e.next = 22; break;
                                    case 28:
                                        e.next = 33; break;
                                    case 30:
                                        e.prev = 30, e.t1 = e.catch(20), s.e(e.t1);
                                    case 33:
                                        return e.prev = 33, s.f(), e.finish(33);
                                    case 36:
                                        A(i);
                                    case 37:
                                    case "end":
                                        return e.stop() } }), e, null, [
                                [3, 13, 16, 19],
                                [20, 30, 33, 36]
                            ]) }))); return function(t) { return e.apply(this, arguments) } }(); return h && P ? r.a.createElement(aa.a, { margin: t, variant: a }, r.a.createElement(ma.a, null, o), r.a.createElement(da.a, { multiple: !0, value: P, onChange: k }, h.map((function(e) { return r.a.createElement(K.a, { key: p(e), value: p(e) }, S(e)) })))) : null },
            qa = function(e, t) { return e + t.charAt(0).toUpperCase() + t.slice(1) },
            Za = Object(p.a)((function() { return { details: { flexDirection: "column" } } })),
            Ya = function() { var e = Za(),
                    t = Object(i.useState)(),
                    a = Object(j.a)(t, 2),
                    o = a[0],
                    n = a[1]; return r.a.createElement(ja, { endpoint: "devices", item: o, setItem: n }, o && r.a.createElement(r.a.Fragment, null, r.a.createElement(Da.a, { defaultExpanded: !0 }, r.a.createElement(ya.a, { expandIcon: r.a.createElement(fa.a, null) }, r.a.createElement(Ve.a, { variant: "subtitle1" }, Ae("sharedRequired"))), r.a.createElement(Ta.a, { className: e.details }, r.a.createElement(ra.a, { margin: "normal", defaultValue: o.name, onChange: function(e) { return n(Object(Ct.a)(Object(Ct.a)({}, o), {}, { name: e.target.value })) }, label: Ae("sharedName"), variant: "filled" }), r.a.createElement(ra.a, { margin: "normal", defaultValue: o.uniqueId, onChange: function(e) { return n(Object(Ct.a)(Object(Ct.a)({}, o), {}, { uniqueId: e.target.value })) }, label: Ae("deviceIdentifier"), variant: "filled" }))), r.a.createElement(Da.a, null, r.a.createElement(ya.a, { expandIcon: r.a.createElement(fa.a, null) }, r.a.createElement(Ve.a, { variant: "subtitle1" }, Ae("sharedExtra"))), r.a.createElement(Ta.a, { className: e.details }, r.a.createElement(Wa, { margin: "normal", defaultValue: o.groupId, onChange: function(e) { return n(Object(Ct.a)(Object(Ct.a)({}, o), {}, { groupId: Number(e.target.value) })) }, endpoint: "/api/groups", label: Ae("groupParent"), variant: "filled" }), r.a.createElement(ra.a, { margin: "normal", defaultValue: o.phone, onChange: function(e) { return n(Object(Ct.a)(Object(Ct.a)({}, o), {}, { phone: e.target.value })) }, label: Ae("sharedPhone"), variant: "filled" }), r.a.createElement(ra.a, { margin: "normal", defaultValue: o.model, onChange: function(e) { return n(Object(Ct.a)(Object(Ct.a)({}, o), {}, { model: e.target.value })) }, label: Ae("deviceModel"), variant: "filled" }), r.a.createElement(ra.a, { margin: "normal", defaultValue: o.contact, onChange: function(e) { return n(Object(Ct.a)(Object(Ct.a)({}, o), {}, { contact: e.target.value })) }, label: Ae("deviceContact"), variant: "filled" }), r.a.createElement(Wa, { margin: "normal", defaultValue: o.category, onChange: function(e) { return n(Object(Ct.a)(Object(Ct.a)({}, o), {}, { category: e.target.value })) }, data: kt.map((function(e) { return { id: e, name: Ae("category".concat(e.replace(/^\w/, (function(e) { return e.toUpperCase() })))) } })), label: Ae("deviceCategory"), variant: "filled" }), r.a.createElement(Ma.a, { control: r.a.createElement(Pa.a, { checked: o.disabled, onChange: function(e) { return n(Object(Ct.a)(Object(Ct.a)({}, o), {}, { disabled: e.target.checked })) } }), label: Ae("sharedDisabled") }))), r.a.createElement(Da.a, null, r.a.createElement(ya.a, { expandIcon: r.a.createElement(fa.a, null) }, r.a.createElement(Ve.a, { variant: "subtitle1" }, Ae("sharedAttributes"))), r.a.createElement(Ta.a, { className: e.details }, r.a.createElement(Ga, { attributes: o.attributes, setAttributes: function(e) { return n(Object(Ct.a)(Object(Ct.a)({}, o), {}, { attributes: e })) }, definitions: Ua }))), o.id && r.a.createElement(Da.a, null, r.a.createElement(ya.a, { expandIcon: r.a.createElement(fa.a, null) }, r.a.createElement(Ve.a, { variant: "subtitle1" }, Ae("sharedConnections"))), r.a.createElement(Ta.a, { className: e.details }, r.a.createElement(Ka, { margin: "normal", endpointAll: "/api/geofences", endpointLinked: "/api/geofences?deviceId=" + o.id, baseId: o.id, keyBase: "deviceId", keyLink: "geofenceId", label: Ae("sharedGeofences"), variant: "filled" }), r.a.createElement(Ka, { margin: "normal", endpointAll: "/api/notifications", endpointLinked: "/api/notifications?deviceId=" + o.id, baseId: o.id, keyBase: "deviceId", keyLink: "notificationId", titleGetter: function(e) { return Ae(qa("event", e.type)) }, label: Ae("sharedNotifications"), variant: "filled" }))))) },
            Ja = Object(p.a)((function() { return { details: { flexDirection: "column" } } })),
            Qa = function() { var e = Ja(),
                    t = Object(i.useState)(),
                    a = Object(j.a)(t, 2),
                    o = a[0],
                    n = a[1]; return r.a.createElement(ja, { endpoint: "users", item: o, setItem: n }, o && r.a.createElement(r.a.Fragment, null, r.a.createElement(Da.a, { defaultExpanded: !0 }, r.a.createElement(ya.a, { expandIcon: r.a.createElement(fa.a, null) }, r.a.createElement(Ve.a, { variant: "subtitle1" }, Ae("sharedRequired"))), r.a.createElement(Ta.a, { className: e.details }, r.a.createElement(ra.a, { margin: "normal", defaultValue: o.name, onChange: function(e) { return n(Object(Ct.a)(Object(Ct.a)({}, o), {}, { name: e.target.value })) }, label: Ae("sharedName"), variant: "filled" }), r.a.createElement(ra.a, { margin: "normal", defaultValue: o.email, onChange: function(e) { return n(Object(Ct.a)(Object(Ct.a)({}, o), {}, { email: e.target.value })) }, label: Ae("userEmail"), variant: "filled" }), r.a.createElement(ra.a, { margin: "normal", type: "password", onChange: function(e) { return n(Object(Ct.a)(Object(Ct.a)({}, o), {}, { password: e.target.value })) }, label: Ae("userPassword"), variant: "filled" }))), r.a.createElement(Da.a, null, r.a.createElement(ya.a, { expandIcon: r.a.createElement(fa.a, null) }, r.a.createElement(Ve.a, { variant: "subtitle1" }, Ae("sharedAttributes"))), r.a.createElement(Ta.a, { className: e.details }, r.a.createElement(Ga, { attributes: o.attributes, setAttributes: function(e) { return n(Object(Ct.a)(Object(Ct.a)({}, o), {}, { attributes: e })) }, definitions: Fa }))), o.id && r.a.createElement(Da.a, null, r.a.createElement(ya.a, { expandIcon: r.a.createElement(fa.a, null) }, r.a.createElement(Ve.a, { variant: "subtitle1" }, Ae("sharedConnections"))), r.a.createElement(Ta.a, { className: e.details }, r.a.createElement(Ka, { margin: "normal", endpointAll: "/api/devices?all=true", endpointLinked: "/api/devices?userId=" + o.id, baseId: o.id, keyBase: "userId", keyLink: "deviceId", label: Ae("deviceTitle"), variant: "filled" }), r.a.createElement(Ka, { margin: "normal", endpointAll: "/api/groups?all=true", endpointLinked: "/api/groups?userId=" + o.id, baseId: o.id, keyBase: "userId", keyLink: "groupId", label: Ae("settingsGroups"), variant: "filled" }))))) },
            Xa = Object(m.b)()((function() { var e = Object(m.c)(),
                    t = Object(d.f)(),
                    a = Object(m.d)((function(e) { return !!e.session.user })),
                    i = function t() { var a = "https:" === window.location.protocol ? "wss:" : "ws:",
                            i = new WebSocket(a + "//" + window.location.host + "/api/socket");
                        i.onclose = function() { setTimeout((function() { return t() }), 6e4) }, i.onmessage = function(t) { var a = JSON.parse(t.data);
                            a.devices && e(B.update(a.devices)), a.positions && e(N.update(a.positions)), a.events && function e(t) { if ("Notification" in window)
                                    if ("granted" === Notification.permission) { var a, i = Object(Mt.a)(t); try { for (i.s(); !(a = i.n()).done;) { var r = a.value,
                                                    o = new Notification("Event: ".concat(r.type));
                                                setTimeout(o.close.bind(o), 4e3) } } catch (n) { i.e(n) } finally { i.f() } } else "denied" !== Notification.permission && Notification.requestPermission((function(a) { "granted" === a && e(t) })) }(a.events) } }; return Ie(Object(D.a)(b.a.mark((function t() { var a; return b.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, fetch("/api/server");
                            case 2:
                                if (!(a = t.sent).ok) { t.next = 11; break } return t.t0 = e, t.t1 = G, t.next = 8, a.json();
                            case 8:
                                t.t2 = t.sent, t.t3 = t.t1.updateServer.call(t.t1, t.t2), (0, t.t0)(t.t3);
                            case 11:
                            case "end":
                                return t.stop() } }), t) }))), []), Ie(Object(D.a)(b.a.mark((function r() { var o, n; return b.a.wrap((function(r) { for (;;) switch (r.prev = r.next) {
                            case 0:
                                if (!a) { r.next = 15; break } return r.next = 3, fetch("/api/devices");
                            case 3:
                                if (!(o = r.sent).ok) { r.next = 12; break } return r.t0 = e, r.t1 = B, r.next = 9, o.json();
                            case 9:
                                r.t2 = r.sent, r.t3 = r.t1.refresh.call(r.t1, r.t2), (0, r.t0)(r.t3);
                            case 12:
                                i(), r.next = 29; break;
                            case 15:
                                return r.next = 17, fetch("/api/session");
                            case 17:
                                if (!(n = r.sent).ok) { r.next = 28; break } return r.t4 = e, r.t5 = G, r.next = 23, n.json();
                            case 23:
                                r.t6 = r.sent, r.t7 = r.t5.updateUser.call(r.t5, r.t6), (0, r.t4)(r.t7), r.next = 29; break;
                            case 28:
                                t.push("/login");
                            case 29:
                            case "end":
                                return r.stop() } }), r) }))), [a]), null })),
            _a = Object(p.a)((function(e) { return { columnAction: { width: e.spacing(1), padding: e.spacing(0, 1) } } })),
            $a = function(e) { var t = e.updateTimestamp,
                    a = e.onMenuClick,
                    o = _a(),
                    n = Object(i.useState)([]),
                    s = Object(j.a)(n, 2),
                    m = s[0],
                    d = s[1];
                Ie(Object(D.a)(b.a.mark((function e() { var t; return b.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, fetch("/api/notifications");
                            case 2:
                                if (!(t = e.sent).ok) { e.next = 9; break } return e.t0 = d, e.next = 7, t.json();
                            case 7:
                                e.t1 = e.sent, (0, e.t0)(e.t1);
                            case 9:
                            case "end":
                                return e.stop() } }), e) }))), [t]); var l = function(e, t) { return t ? t.split(/[, ]+/).filter(Boolean).map((function(t) { return Ae(qa(e, t)) })).join(", ") : "" }; return r.a.createElement(la.a, null, r.a.createElement(ca.a, null, r.a.createElement(pa.a, null, r.a.createElement(ua.a, null, r.a.createElement(Sa.a, { className: o.columnAction }), r.a.createElement(Sa.a, null, Ae("notificationType")), r.a.createElement(Sa.a, null, Ae("notificationAlways")), r.a.createElement(Sa.a, null, Ae("sharedAlarms")), r.a.createElement(Sa.a, null, Ae("notificationNotificators")))), r.a.createElement(va.a, null, m.map((function(e) { return r.a.createElement(ua.a, { key: e.id }, r.a.createElement(Sa.a, { className: o.columnAction, padding: "none" }, r.a.createElement(M.a, { onClick: function(t) { return a(t.currentTarget, e.id) } }, r.a.createElement(R.a, null))), r.a.createElement(Sa.a, null, Ae(qa("event", e.type))), r.a.createElement(Sa.a, null, Yt(e.always)), r.a.createElement(Sa.a, null, l("alarm", e.attributes.alarms)), r.a.createElement(Sa.a, null, l("notificator", e.notificators))) }))))) },
            ei = function() { return r.a.createElement(r.a.Fragment, null, r.a.createElement(Dt, null), r.a.createElement(we, { content: $a, editPath: "/settings/notification", endpoint: "notifications" })) },
            ti = Object(p.a)((function() { return { details: { flexDirection: "column" } } })),
            ai = function() { var e, t = ti(),
                    a = Object(i.useState)(),
                    o = Object(j.a)(a, 2),
                    n = o[0],
                    s = o[1],
                    m = (e = function(e) { return e.startsWith("alarm") }, Object.keys(Pe.data).filter(e)).map((function(e) { return { key: (t = "alarm", a = e, a.charAt(t.length).toLowerCase() + a.slice(t.length + 1)), name: Ae(e) }; var t, a })); return r.a.createElement(ja, { endpoint: "notifications", item: n, setItem: s }, n && r.a.createElement(r.a.Fragment, null, r.a.createElement(Da.a, { defaultExpanded: !0 }, r.a.createElement(ya.a, { expandIcon: r.a.createElement(fa.a, null) }, r.a.createElement(Ve.a, { variant: "subtitle1" }, Ae("sharedRequired"))), r.a.createElement(Ta.a, { className: t.details }, r.a.createElement(Wa, { margin: "normal", defaultValue: n.type, onChange: function(e) { return s(Object(Ct.a)(Object(Ct.a)({}, n), {}, { type: e.target.value })) }, endpoint: "/api/notifications/types", keyGetter: function(e) { return e.type }, titleGetter: function(e) { return Ae(qa("event", e.type)) }, label: Ae("sharedType"), variant: "filled" }), r.a.createElement(Wa, { multiple: !0, margin: "normal", defaultValue: n.notificators ? n.notificators.split(/[, ]+/) : [], onChange: function(e) { return s(Object(Ct.a)(Object(Ct.a)({}, n), {}, { notificators: e.target.value.join() })) }, endpoint: "/api/notifications/notificators", keyGetter: function(e) { return e.type }, titleGetter: function(e) { return Ae(qa("notificator", e.type)) }, label: Ae("notificationNotificators"), variant: "filled" }), "alarm" === n.type && r.a.createElement(Wa, { multiple: !0, margin: "normal", defaultValue: n.attributes && n.attributes.alarms ? n.attributes.alarms.split(/[, ]+/) : [], onChange: function(e) { return s(Object(Ct.a)(Object(Ct.a)({}, n), {}, { attributes: Object(Ct.a)(Object(Ct.a)({}, n.attributes), {}, { alarms: e.target.value.join() }) })) }, data: m, keyGetter: function(e) { return e.key }, label: Ae("sharedAlarms"), variant: "filled" }), r.a.createElement(Ma.a, { control: r.a.createElement(Pa.a, { checked: n.always, onChange: function(e) { return s(Object(Ct.a)(Object(Ct.a)({}, n), {}, { always: e.target.checked })) } }), label: Ae("notificationAlways") }))))) },
            ii = Object(p.a)((function(e) { return { columnAction: { width: e.spacing(1), padding: e.spacing(0, 1) } } })),
            ri = function(e) { var t = e.updateTimestamp,
                    a = e.onMenuClick,
                    o = ii(),
                    n = Object(i.useState)([]),
                    s = Object(j.a)(n, 2),
                    m = s[0],
                    d = s[1]; return Ie(Object(D.a)(b.a.mark((function e() { var t; return b.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, fetch("/api/groups");
                            case 2:
                                if (!(t = e.sent).ok) { e.next = 9; break } return e.t0 = d, e.next = 7, t.json();
                            case 7:
                                e.t1 = e.sent, (0, e.t0)(e.t1);
                            case 9:
                            case "end":
                                return e.stop() } }), e) }))), [t]), r.a.createElement(la.a, null, r.a.createElement(ca.a, null, r.a.createElement(pa.a, null, r.a.createElement(ua.a, null, r.a.createElement(Sa.a, { className: o.columnAction }), r.a.createElement(Sa.a, null, Ae("sharedName")))), r.a.createElement(va.a, null, m.map((function(e) { return r.a.createElement(ua.a, { key: e.id }, r.a.createElement(Sa.a, { className: o.columnAction, padding: "none" }, r.a.createElement(M.a, { onClick: function(t) { return a(t.currentTarget, e.id) } }, r.a.createElement(R.a, null))), r.a.createElement(Sa.a, null, e.name)) }))))) },
            oi = function() { return r.a.createElement(r.a.Fragment, null, r.a.createElement(Dt, null), r.a.createElement(we, { content: ri, editPath: "/settings/group", endpoint: "groups" })) },
            ni = Object(p.a)((function() { return { details: { flexDirection: "column" } } })),
            si = function() { var e = ni(),
                    t = Object(i.useState)(),
                    a = Object(j.a)(t, 2),
                    o = a[0],
                    n = a[1]; return r.a.createElement(ja, { endpoint: "groups", item: o, setItem: n }, o && r.a.createElement(r.a.Fragment, null, r.a.createElement(Da.a, { defaultExpanded: !0 }, r.a.createElement(ya.a, { expandIcon: r.a.createElement(fa.a, null) }, r.a.createElement(Ve.a, { variant: "subtitle1" }, Ae("sharedRequired"))), r.a.createElement(Ta.a, { className: e.details }, r.a.createElement(ra.a, { margin: "normal", defaultValue: o.name, onChange: function(e) { return n(Object(Ct.a)(Object(Ct.a)({}, o), {}, { name: e.target.value })) }, label: Ae("sharedName"), variant: "filled" }))), r.a.createElement(Da.a, null, r.a.createElement(ya.a, { expandIcon: r.a.createElement(fa.a, null) }, r.a.createElement(Ve.a, { variant: "subtitle1" }, Ae("sharedExtra"))), r.a.createElement(Ta.a, { className: e.details }, r.a.createElement(Wa, { margin: "normal", defaultValue: o.groupId, onChange: function(e) { return n(Object(Ct.a)(Object(Ct.a)({}, o), {}, { groupId: Number(e.target.value) })) }, endpoint: "/api/groups", label: Ae("groupParent"), variant: "filled" }))), r.a.createElement(Da.a, null, r.a.createElement(ya.a, { expandIcon: r.a.createElement(fa.a, null) }, r.a.createElement(Ve.a, { variant: "subtitle1" }, Ae("sharedAttributes"))), r.a.createElement(Ta.a, { className: e.details }, r.a.createElement(Ga, { attributes: o.attributes, setAttributes: function(e) { return n(Object(Ct.a)(Object(Ct.a)({}, o), {}, { attributes: e })) }, definitions: Ua }))))) },
            mi = Object(p.a)((function(e) { return { root: { marginTop: e.spacing(2), marginBottom: e.spacing(2) } } })),
            di = function() { var e = mi(),
                    t = Object(d.g)().id,
                    a = Object(i.useState)(),
                    o = Object(j.a)(a, 2),
                    n = o[0],
                    s = o[1];
                Ie(Object(D.a)(b.a.mark((function e() { var a, i; return b.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!t) { e.next = 11; break } return e.next = 3, fetch("/api/positions?id=".concat(t), { headers: { Accept: "application/json" } });
                            case 3:
                                if (!(a = e.sent).ok) { e.next = 9; break } return e.next = 7, a.json();
                            case 7:
                                i = e.sent, s(i[0]);
                            case 9:
                                e.next = 12; break;
                            case 11:
                                s({});
                            case 12:
                            case "end":
                                return e.stop() } }), e) }))), [t]); var m = function(e) { return Ae(qa("position", e)) || "".concat(Ae("sharedAttribute"), ' "').concat(e, '"') }; return r.a.createElement(r.a.Fragment, null, r.a.createElement(Dt, null), r.a.createElement(ba.a, { maxWidth: "sm", className: e.root }, r.a.createElement(ia.a, null, n && r.a.createElement(P.a, null, function() { var e = Object(Ct.a)(Object(Ct.a)({}, n), n.attributes); return Object.entries(e).filter((function(e) { var t = Object(j.a)(e, 2);
                        t[0]; return "object" !== typeof t[1] })) }().map((function(e, t, a) { var o = Object(j.a)(e, 2),
                        n = o[0],
                        s = o[1]; return r.a.createElement(i.Fragment, { key: n }, r.a.createElement(A.a, null, r.a.createElement(C.a, { primary: m(n) }), r.a.createElement(k.a, null, r.a.createElement(Ve.a, { variant: "body2" }, Zt(s, n)))), t < a.length - 1 ? r.a.createElement(T.a, null) : null) })))))) },
            li = a(312),
            ci = a(325),
            pi = function(e) { var t = e.deviceId,
                    a = e.setDeviceId,
                    o = e.from,
                    n = e.setFrom,
                    s = e.to,
                    d = e.setTo,
                    l = Object(m.d)((function(e) { return Object.values(e.devices.items) })),
                    c = Object(i.useState)("today"),
                    p = Object(j.a)(c, 2),
                    u = p[0],
                    S = p[1]; return Object(i.useEffect)((function() { switch (u) { default:
                            case "today":
                            n(qt()().startOf("day")), d(qt()().endOf("day")); break;
                        case "yesterday":
                                n(qt()().subtract(1, "day").startOf("day")), d(qt()().subtract(1, "day").endOf("day")); break;
                        case "thisWeek":
                                n(qt()().startOf("week")), d(qt()().endOf("week")); break;
                        case "previousWeek":
                                n(qt()().subtract(1, "week").startOf("week")), d(qt()().subtract(1, "week").endOf("week")); break;
                        case "thisMonth":
                                n(qt()().startOf("month")), d(qt()().endOf("month")); break;
                        case "previousMonth":
                                n(qt()().subtract(1, "month").startOf("month")), d(qt()().subtract(1, "month").endOf("month")) } }), [u, n, d]), r.a.createElement(r.a.Fragment, null, r.a.createElement(aa.a, { variant: "filled", margin: "normal", fullWidth: !0 }, r.a.createElement(ma.a, null, Ae("reportDevice")), r.a.createElement(da.a, { value: t || "", onChange: function(e) { return a(e.target.value) } }, l.map((function(e) { return r.a.createElement(K.a, { key: e.id, value: e.id }, e.name) })))), r.a.createElement(aa.a, { variant: "filled", margin: "normal", fullWidth: !0 }, r.a.createElement(ma.a, null, Ae("reportPeriod")), r.a.createElement(da.a, { value: u, onChange: function(e) { return S(e.target.value) } }, r.a.createElement(K.a, { key: "today", value: "today" }, Ae("reportToday")), r.a.createElement(K.a, { key: "yesterday", value: "yesterday" }, Ae("reportYesterday")), r.a.createElement(K.a, { key: "thisWeek", value: "thisWeek" }, Ae("reportThisWeek")), r.a.createElement(K.a, { key: "previousWeek", value: "previousWeek" }, Ae("reportPreviousWeek")), r.a.createElement(K.a, { key: "thisMonth", value: "thisMonth" }, Ae("reportThisMonth")), r.a.createElement(K.a, { key: "previousMonth", value: "previousMonth" }, Ae("reportPreviousMonth")), r.a.createElement(K.a, { key: "custom", value: "custom" }, Ae("reportCustom")))), "custom" === u && r.a.createElement(ra.a, { margin: "normal", variant: "filled", label: Ae("reportFrom"), type: "datetime-local", value: o.format(qt.a.HTML5_FMT.DATETIME_LOCAL), onChange: function(e) { return n(qt()(e.target.value, qt.a.HTML5_FMT.DATETIME_LOCAL)) }, fullWidth: !0 }), "custom" === u && r.a.createElement(ra.a, { margin: "normal", variant: "filled", label: Ae("reportTo"), type: "datetime-local", value: s.format(qt.a.HTML5_FMT.DATETIME_LOCAL), onChange: function(e) { return d(qt()(e.target.value, qt.a.HTML5_FMT.DATETIME_LOCAL)) }, fullWidth: !0 })) },
            ui = function(e) { var t = e.positions,
                    a = "replay"; return Object(i.useEffect)((function() { return It.addSource(a, { type: "geojson", data: { type: "Feature", geometry: { type: "LineString", coordinates: [] } } }), It.addLayer({ source: a, id: a, type: "line", layout: { "line-join": "round", "line-cap": "round" }, paint: { "line-color": "#333", "line-width": 5 } }),
                        function() { It.removeLayer(a), It.removeSource(a) } }), []), Object(i.useEffect)((function() { var e = t.map((function(e) { return [e.longitude, e.latitude] })); if (It.getSource(a).setData({ type: "Feature", geometry: { type: "LineString", coordinates: e } }), e.length) { var i = e.reduce((function(e, t) { return e.extend(t) }), new Tt.a.LngLatBounds(e[0], e[0]));
                        It.fitBounds(i, { padding: { top: 50, bottom: 250, left: 25, right: 25 } }) } }), [t]), null },
            Si = Object(p.a)((function(e) { return { root: { height: "100%", display: "flex", flexDirection: "column" }, controlPanel: { position: "absolute", bottom: e.spacing(5), left: "50%", transform: "translateX(-50%)" }, controlContent: { padding: e.spacing(2), marginBottom: e.spacing(2) }, configForm: { display: "flex", flexDirection: "column" } } })),
            vi = function(e) { var t = e.children,
                    a = e.open,
                    i = e.value; return r.a.createElement(li.a, { open: a, enterTouchDelay: 0, placement: "top", title: i }, t) },
            gi = function() { var e = Si(),
                    t = Object(i.useState)(!0),
                    a = Object(j.a)(t, 2),
                    o = a[0],
                    n = a[1],
                    s = Object(i.useState)(),
                    m = Object(j.a)(s, 2),
                    d = m[0],
                    l = m[1],
                    c = Object(i.useState)(),
                    p = Object(j.a)(c, 2),
                    u = p[0],
                    S = p[1],
                    v = Object(i.useState)(),
                    g = Object(j.a)(v, 2),
                    h = g[0],
                    y = g[1],
                    T = Object(i.useState)([]),
                    M = Object(j.a)(T, 2),
                    P = M[0],
                    A = M[1],
                    f = Object(i.useState)(0),
                    k = Object(j.a)(f, 2),
                    C = k[0],
                    O = k[1],
                    R = function() { var e = Object(D.a)(b.a.mark((function e() { var t, a; return b.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = new URLSearchParams({ deviceId: d, from: u.toISOString(), to: h.toISOString() }), e.next = 3, fetch("/api/positions?".concat(t.toString()), { headers: { Accept: "application/json" } });
                                    case 3:
                                        if (!(a = e.sent).ok) { e.next = 12; break } return O(0), e.t0 = A, e.next = 9, a.json();
                                    case 9:
                                        e.t1 = e.sent, (0, e.t0)(e.t1), n(!1);
                                    case 12:
                                    case "end":
                                        return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(); return r.a.createElement("div", { className: e.root }, r.a.createElement(Dt, null), r.a.createElement(xt, null, r.a.createElement(ui, { positions: P }), C < P.length && r.a.createElement(Xt, { positions: [P[C]] })), r.a.createElement(ba.a, { maxWidth: "sm", className: e.controlPanel }, !!P.length && r.a.createElement(ia.a, { className: e.controlContent }, r.a.createElement(ci.a, { max: P.length - 1, step: null, marks: P.map((function(e, t) { return { value: t } })), value: C, onChange: function(e, t) { return O(t) }, valueLabelDisplay: "auto", valueLabelFormat: function(e) { return e < P.length ? Zt(P[e], "fixTime") : "" }, ValueLabelComponent: vi })), r.a.createElement("div", null, r.a.createElement(Da.a, { expanded: o, onChange: function() { return n(!o) } }, r.a.createElement(ya.a, { expandIcon: r.a.createElement(fa.a, null) }, r.a.createElement(Ve.a, { align: "center" }, Ae("reportConfigure"))), r.a.createElement(Ta.a, { className: e.configForm }, r.a.createElement(pi, { deviceId: d, setDeviceId: l, from: u, setFrom: S, to: h, setTo: y }), r.a.createElement(aa.a, { margin: "normal", fullWidth: !0 }, r.a.createElement(fe.a, { type: "button", color: "primary", variant: "contained", disabled: !d, onClick: R }, Ae("reportShow")))))))) },
            hi = a(314),
            bi = function() { var e = Object(m.d)((function(e) { return !!e.session.server && !!e.session.user })); return r.a.createElement(r.a.Fragment, null, r.a.createElement(l.a, null), r.a.createElement(Xa, null), r.a.createElement(d.c, null, r.a.createElement(d.a, { exact: !0, path: "/login", component: na }), r.a.createElement(d.a, null, e ? r.a.createElement(d.c, null, r.a.createElement(d.a, { exact: !0, path: "/", component: ta }), r.a.createElement(d.a, { exact: !0, path: "/replay", component: gi }), r.a.createElement(d.a, { exact: !0, path: "/position/:id?", component: di }), r.a.createElement(d.a, { exact: !0, path: "/user/:id?", component: Qa }), r.a.createElement(d.a, { exact: !0, path: "/device/:id?", component: Ya }), r.a.createElement(d.a, { exact: !0, path: "/reports/route", component: ha }), r.a.createElement(d.a, { exact: !0, path: "/settings/notifications", component: ei }), r.a.createElement(d.a, { exact: !0, path: "/settings/notification/:id?", component: ai }), r.a.createElement(d.a, { exact: !0, path: "/settings/groups", component: oi }), r.a.createElement(d.a, { exact: !0, path: "/settings/group/:id?", component: si }), r.a.createElement(d.a, { exact: !0, path: "/admin/server", component: xa }), r.a.createElement(d.a, { exact: !0, path: "/admin/users", component: Ha })) : r.a.createElement(hi.a, null)))) },
            Di = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

        function yi(e, t) { navigator.serviceWorker.register(e).then((function(e) { e.onupdatefound = function() { var a = e.installing;
                    null != a && (a.onstatechange = function() { "installed" === a.state && (navigator.serviceWorker.controller ? (console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."), t && t.onUpdate && t.onUpdate(e)) : (console.log("Content is cached for offline use."), t && t.onSuccess && t.onSuccess(e))) }) } })).catch((function(e) { console.error("Error during service worker registration:", e) })) }
        n.a.render(r.a.createElement(m.a, { store: z }, r.a.createElement(s.a, null, r.a.createElement(bi, null))), document.getElementById("root")),
            function(e) { if ("serviceWorker" in navigator) { if (new URL("/modern", window.location.href).origin !== window.location.origin) return;
                    window.addEventListener("load", (function() { var t = "".concat("/modern", "/service-worker.js");
                        Di ? (! function(e, t) { fetch(e, { headers: { "Service-Worker": "script" } }).then((function(a) { var i = a.headers.get("content-type");
                                404 === a.status || null != i && -1 === i.indexOf("javascript") ? navigator.serviceWorker.ready.then((function(e) { e.unregister().then((function() { window.location.reload() })) })) : yi(e, t) })).catch((function() { console.log("No internet connection found. App is running in offline mode.") })) }(t, e), navigator.serviceWorker.ready.then((function() { console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA") }))) : yi(t, e) })) } }() }]), [
        [198, 1, 2]
    ]
]);
//# sourceMappingURL=main.404aac67.chunk.js.map