import {f as g, B as u, G as t, _ as c, e as n, L as _, d as b, K as v, p as y, Y as k, b as p} from "./q-f0969768.js";
import {o as f} from "./q-70b734bb.js";
import {u as I} from "./q-bf392092.js";
const z = `@keyframes hue-rotate{0%{filter:hue-rotate(0deg)}to{filter:hue-rotate(360deg)}}.lazy-background-image{transition:1s cubic-bezier(.6,.6,0,1) opacity}.lazy-background-image-hidden{opacity:0}.lazy-background-image-backgroundImage{background-image:var(--background-image)}.lazy-background-image-maskImage{-webkit-mask-image:var(--background-image);mask-image:var(--background-image)}
`
    , h = z
    , w = ()=>{
    const [e,o] = g();
    return f(o.value, e)
}
    , L = e=>{
    u(t(()=>c(()=>Promise.resolve().then(()=>l), void 0), "s_tQslLvJcjwc"));
    const o = e.propertyName || "backgroundImage"
        , a = n(!1)
        , s = I()
        , r = e.ref || n()
        , i = n("");
    return _(t(()=>c(()=>Promise.resolve().then(()=>l), void 0), "s_QxaE6vw26Uw", [t(()=>c(()=>Promise.resolve().then(()=>l), void 0), "s_TsycX0YG0Jg", [a, s, e, i]), r]), {
        strategy: "document-ready"
    }),
        b("div", {
            class: ["lazy-background-image", `lazy-background-image-${o}`, {
                "lazy-background-image-loaded": a.value,
                "lazy-background-image-hidden": o === "maskImage" && !a.value
            }, e.class],
            ref: r
        }, {
            style: v((m,d)=>({
                "--background-image": m.value ? `url('${d.value}')` : "unset"
            }), [a, i])
        }, y(k, null, 3, "v0_0"), 1, "v0_1")
}
    , E = ()=>{
    const [e,o,a,s] = g();
    s.value = o.value && a.mobileSrc ? a.mobileSrc : a.src;
    const r = new Image;
    r.src = s.value,
        r.onload = ()=>{
            e.value = !0
        }
}
    , l = Object.freeze(Object.defineProperty({
    __proto__: null,
    _hW: p,
    s_QxaE6vw26Uw: w,
    s_TsycX0YG0Jg: E,
    s_WNppWvRWe4c: L,
    s_tQslLvJcjwc: h
}, Symbol.toStringTag, {
    value: "Module"
}));
export {p as _hW, w as s_QxaE6vw26Uw, E as s_TsycX0YG0Jg, L as s_WNppWvRWe4c, h as s_tQslLvJcjwc};
