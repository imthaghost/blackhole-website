import {f as n} from "./q-f0969768.js";
import {b as v} from "./q-f0969768.js";
const c = ()=>{
        const [e,s] = n();
        e.value = !0;
        const r = new IntersectionObserver(([t])=>{
                e.value = t.isIntersecting
            }
            ,{
                threshold: .1
            });
        return r.observe(s.value),
            ()=>r.disconnect()
    }
;
export {v as _hW, c as s_1znbmyRcKTQ};
