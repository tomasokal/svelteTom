function x(){}const st=t=>t;function bt(t,e){for(const n in e)t[n]=e[n];return t}function rt(t){return t()}function tt(){return Object.create(null)}function A(t){t.forEach(rt)}function I(t){return typeof t=="function"}function wt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let B;function Vt(t,e){return B||(B=document.createElement("a")),B.href=e,t===B.href}function xt(t){return Object.keys(t).length===0}function $t(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Xt(t,e,n){t.$$.on_destroy.push($t(e,n))}function Yt(t,e,n,r){if(t){const s=ot(t,e,n,r);return t[0](s)}}function ot(t,e,n,r){return t[1]&&r?bt(n.ctx.slice(),t[1](r(e))):n.ctx}function Zt(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],i=Math.max(e.dirty.length,s.length);for(let c=0;c<i;c+=1)l[c]=e.dirty[c]|s[c];return l}return e.dirty|s}return e.dirty}function te(t,e,n,r,s,l){if(s){const i=ot(e,n,r,l);t.p(i,s)}}function ee(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function ne(t){return t&&I(t.destroy)?t.destroy:x}const ct=typeof window!="undefined";let v=ct?()=>window.performance.now():()=>Date.now(),X=ct?t=>requestAnimationFrame(t):x;const M=new Set;function lt(t){M.forEach(e=>{e.c(t)||(M.delete(e),e.f())}),M.size!==0&&X(lt)}function Y(t){let e;return M.size===0&&X(lt),{promise:new Promise(n=>{M.add(e={c:t,f:n})}),abort(){M.delete(e)}}}let W=!1;function kt(){W=!0}function Et(){W=!1}function Ct(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function St(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let a=0;a<e.length;a++){const _=e[a];_.claim_order!==void 0&&o.push(_)}e=o}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const a=e[o].claim_order,_=(s>0&&e[n[s]].claim_order<=a?s+1:Ct(1,s,f=>e[n[f]].claim_order,a))-1;r[o]=n[_]+1;const u=_+1;n[u]=o,s=Math.max(u,s)}const l=[],i=[];let c=e.length-1;for(let o=n[s]+1;o!=0;o=r[o-1]){for(l.push(e[o-1]);c>=o;c--)i.push(e[c]);c--}for(;c>=0;c--)i.push(e[c]);l.reverse(),i.sort((o,a)=>o.claim_order-a.claim_order);for(let o=0,a=0;o<i.length;o++){for(;a<l.length&&i[o].claim_order>=l[a].claim_order;)a++;const _=a<l.length?l[a]:null;t.insertBefore(i[o],_)}}function Mt(t,e){t.appendChild(e)}function at(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function At(t){const e=ft("style");return jt(at(t),e),e.sheet}function jt(t,e){Mt(t.head||t,e)}function Nt(t,e){if(W){for(St(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ie(t,e,n){W&&!n?Nt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function qt(t){t.parentNode.removeChild(t)}function ft(t){return document.createElement(t)}function Rt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Z(t){return document.createTextNode(t)}function se(){return Z(" ")}function re(){return Z("")}function oe(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function ce(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ot(t){return Array.from(t.childNodes)}function Pt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ut(t,e,n,r,s=!1){Pt(t);const l=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const c=t[i];if(e(c)){const o=n(c);return o===void 0?t.splice(i,1):t[i]=o,s||(t.claim_info.last_index=i),c}}for(let i=t.claim_info.last_index-1;i>=0;i--){const c=t[i];if(e(c)){const o=n(c);return o===void 0?t.splice(i,1):t[i]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,c}}return r()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function dt(t,e,n,r){return ut(t,s=>s.nodeName===e,s=>{const l=[];for(let i=0;i<s.attributes.length;i++){const c=s.attributes[i];n[c.name]||l.push(c.name)}l.forEach(i=>s.removeAttribute(i))},()=>r(e))}function le(t,e,n){return dt(t,e,n,ft)}function ae(t,e,n){return dt(t,e,n,Rt)}function Bt(t,e){return ut(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>Z(e),!0)}function fe(t){return Bt(t," ")}function ue(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function de(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function _e(t,e,n){t.classList[n?"add":"remove"](e)}function Dt(t,e,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,!1,e),r}function he(t,e=document.body){return Array.from(e.querySelectorAll(t))}const L=new Map;let F=0;function zt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Tt(t,e){const n={stylesheet:At(e),rules:{}};return L.set(t,n),n}function Q(t,e,n,r,s,l,i,c=0){const o=16.666/r;let a=`{
`;for(let m=0;m<=1;m+=o){const p=e+(n-e)*l(m);a+=m*100+`%{${i(p,1-p)}}
`}const _=a+`100% {${i(n,1-n)}}
}`,u=`__svelte_${zt(_)}_${c}`,f=at(t),{stylesheet:d,rules:h}=L.get(f)||Tt(f,t);h[u]||(h[u]=!0,d.insertRule(`@keyframes ${u} ${_}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${u} ${r}ms linear ${s}ms 1 both`,F+=1,u}function _t(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-r.length;s&&(t.style.animation=r.join(", "),F-=s,F||vt())}function vt(){X(()=>{F||(L.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),L.clear())})}function me(t,e,n,r){if(!e)return x;const s=t.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return x;const{delay:l=0,duration:i=300,easing:c=st,start:o=v()+l,end:a=o+i,tick:_=x,css:u}=n(t,{from:e,to:s},r);let f=!0,d=!1,h;function y(){u&&(h=Q(t,0,1,i,l,c,u)),l||(d=!0)}function m(){u&&_t(t,h),f=!1}return Y(p=>{if(!d&&p>=o&&(d=!0),d&&p>=a&&(_(1,0),m()),!f)return!1;if(d){const w=p-o,b=0+1*c(w/i);_(b,1-b)}return!0}),y(),_(0,1),m}function pe(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:r}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=r,Lt(t,s)}}function Lt(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const r=getComputedStyle(t),s=r.transform==="none"?"":r.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let O;function R(t){O=t}function G(){if(!O)throw new Error("Function called outside component initialization");return O}function ye(t){G().$$.on_mount.push(t)}function ge(t){G().$$.after_update.push(t)}function be(t,e){G().$$.context.set(t,e)}function we(t){return G().$$.context.get(t)}const q=[],et=[],z=[],nt=[],ht=Promise.resolve();let U=!1;function mt(){U||(U=!0,ht.then(pt))}function xe(){return mt(),ht}function H(t){z.push(t)}const J=new Set;let D=0;function pt(){const t=O;do{for(;D<q.length;){const e=q[D];D++,R(e),Ft(e.$$)}for(R(null),q.length=0,D=0;et.length;)et.pop()();for(let e=0;e<z.length;e+=1){const n=z[e];J.has(n)||(J.add(n),n())}z.length=0}while(q.length);for(;nt.length;)nt.pop()();U=!1,J.clear(),R(t)}function Ft(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}let N;function Ht(){return N||(N=Promise.resolve(),N.then(()=>{N=null})),N}function K(t,e,n){t.dispatchEvent(Dt(`${e?"intro":"outro"}${n}`))}const T=new Set;let E;function $e(){E={r:0,c:[],p:E}}function ke(){E.r||A(E.c),E=E.p}function yt(t,e){t&&t.i&&(T.delete(t),t.i(e))}function It(t,e,n,r){if(t&&t.o){if(T.has(t))return;T.add(t),E.c.push(()=>{T.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const Wt={duration:0};function Ee(t,e,n,r){let s=e(t,n),l=r?0:1,i=null,c=null,o=null;function a(){o&&_t(t,o)}function _(f,d){const h=f.b-l;return d*=Math.abs(h),{a:l,b:f.b,d:h,duration:d,start:f.start,end:f.start+d,group:f.group}}function u(f){const{delay:d=0,duration:h=300,easing:y=st,tick:m=x,css:p}=s||Wt,w={start:v()+d,b:f};f||(w.group=E,E.r+=1),i||c?c=w:(p&&(a(),o=Q(t,l,f,h,d,y,p)),f&&m(0,1),i=_(w,h),H(()=>K(t,f,"start")),Y(b=>{if(c&&b>c.start&&(i=_(c,h),c=null,K(t,i.b,"start"),p&&(a(),o=Q(t,l,i.b,i.duration,0,y,s.css))),i){if(b>=i.end)m(l=i.b,1-l),K(t,i.b,"end"),c||(i.b?a():--i.group.r||A(i.group.c)),i=null;else if(b>=i.start){const C=b-i.start;l=i.a+i.d*y(C/i.duration),m(l,1-l)}}return!!(i||c)}))}return{run(f){I(s)?Ht().then(()=>{s=s(),u(f)}):u(f)},end(){a(),i=c=null}}}function Gt(t,e){It(t,1,1,()=>{e.delete(t.key)})}function Ce(t,e){t.f(),Gt(t,e)}function Se(t,e,n,r,s,l,i,c,o,a,_,u){let f=t.length,d=l.length,h=f;const y={};for(;h--;)y[t[h].key]=h;const m=[],p=new Map,w=new Map;for(h=d;h--;){const g=u(s,l,h),$=n(g);let k=i.get($);k?r&&k.p(g,e):(k=a($,g),k.c()),p.set($,m[h]=k),$ in y&&w.set($,Math.abs(h-y[$]))}const b=new Set,C=new Set;function j(g){yt(g,1),g.m(c,_),i.set(g.key,g),_=g.first,d--}for(;f&&d;){const g=m[d-1],$=t[f-1],k=g.key,P=$.key;g===$?(_=g.first,f--,d--):p.has(P)?!i.has(k)||b.has(k)?j(g):C.has(P)?f--:w.get(k)>w.get(P)?(C.add(k),j(g)):(b.add(P),f--):(o($,i),f--)}for(;f--;){const g=t[f];p.has(g.key)||o(g,i)}for(;d;)j(m[d-1]);return m}function Me(t,e){const n={},r={},s={$$scope:1};let l=t.length;for(;l--;){const i=t[l],c=e[l];if(c){for(const o in i)o in c||(r[o]=1);for(const o in c)s[o]||(n[o]=c[o],s[o]=1);t[l]=c}else for(const o in i)s[o]=1}for(const i in r)i in n||(n[i]=void 0);return n}function Ae(t){return typeof t=="object"&&t!==null?t:{}}function je(t){t&&t.c()}function Ne(t,e){t&&t.l(e)}function Jt(t,e,n,r){const{fragment:s,on_mount:l,on_destroy:i,after_update:c}=t.$$;s&&s.m(e,n),r||H(()=>{const o=l.map(rt).filter(I);i?i.push(...o):A(o),t.$$.on_mount=[]}),c.forEach(H)}function Kt(t,e){const n=t.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Qt(t,e){t.$$.dirty[0]===-1&&(q.push(t),mt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function qe(t,e,n,r,s,l,i,c=[-1]){const o=O;R(t);const a=t.$$={fragment:null,ctx:null,props:l,update:x,not_equal:s,bound:tt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:tt(),dirty:c,skip_bound:!1,root:e.target||o.$$.root};i&&i(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(u,f,...d)=>{const h=d.length?d[0]:f;return a.ctx&&s(a.ctx[u],a.ctx[u]=h)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](h),_&&Qt(t,u)),f}):[],a.update(),_=!0,A(a.before_update),a.fragment=r?r(a.ctx):!1,e.target){if(e.hydrate){kt();const u=Ot(e.target);a.fragment&&a.fragment.l(u),u.forEach(qt)}else a.fragment&&a.fragment.c();e.intro&&yt(t.$$.fragment),Jt(t,e.target,e.anchor,e.customElement),Et(),pt()}R(o)}class Re{$destroy(){Kt(this,1),this.$destroy=x}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!xt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const S=[];function Ut(t,e=x){let n;const r=new Set;function s(c){if(wt(t,c)&&(t=c,n)){const o=!S.length;for(const a of r)a[1](),S.push(a,t);if(o){for(let a=0;a<S.length;a+=2)S[a][0](S[a+1]);S.length=0}}}function l(c){s(c(t))}function i(c,o=x){const a=[c,o];return r.add(a),r.size===1&&(n=e(s)||x),c(t),()=>{r.delete(a),r.size===0&&(n(),n=null)}}return{set:s,update:l,subscribe:i}}function gt(t){const e=t-1;return e*e*e+1}function it(t){return Object.prototype.toString.call(t)==="[object Date]"}function V(t,e,n,r){if(typeof n=="number"||it(n)){const s=r-n,l=(n-e)/(t.dt||1/60),i=t.opts.stiffness*s,c=t.opts.damping*l,o=(i-c)*t.inv_mass,a=(l+o)*t.dt;return Math.abs(a)<t.opts.precision&&Math.abs(s)<t.opts.precision?r:(t.settled=!1,it(n)?new Date(n.getTime()+a):n+a)}else{if(Array.isArray(n))return n.map((s,l)=>V(t,e[l],n[l],r[l]));if(typeof n=="object"){const s={};for(const l in n)s[l]=V(t,e[l],n[l],r[l]);return s}else throw new Error(`Cannot spring ${typeof n} values`)}}function Oe(t,e={}){const n=Ut(t),{stiffness:r=.15,damping:s=.8,precision:l=.01}=e;let i,c,o,a=t,_=t,u=1,f=0,d=!1;function h(m,p={}){_=m;const w=o={};if(t==null||p.hard||y.stiffness>=1&&y.damping>=1)return d=!0,i=v(),a=m,n.set(t=_),Promise.resolve();if(p.soft){const b=p.soft===!0?.5:+p.soft;f=1/(b*60),u=0}return c||(i=v(),d=!1,c=Y(b=>{if(d)return d=!1,c=null,!1;u=Math.min(u+f,1);const C={inv_mass:u,opts:y,settled:!0,dt:(b-i)*60/1e3},j=V(C,a,t,_);return i=b,a=t,n.set(t=j),C.settled&&(c=null),!C.settled})),new Promise(b=>{c.promise.then(()=>{w===o&&b()})})}const y={set:h,update:(m,p)=>h(m(_,t),p),subscribe:n.subscribe,stiffness:r,damping:s,precision:l};return y}function Pe(t,{delay:e=0,duration:n=400,easing:r=gt,start:s=0,opacity:l=0}={}){const i=getComputedStyle(t),c=+i.opacity,o=i.transform==="none"?"":i.transform,a=1-s,_=c*(1-l);return{delay:e,duration:n,easing:r,css:(u,f)=>`
			transform: ${o} scale(${1-a*f});
			opacity: ${c-_*f}
		`}}function Be(t,{from:e,to:n},r={}){const s=getComputedStyle(t),l=s.transform==="none"?"":s.transform,[i,c]=s.transformOrigin.split(" ").map(parseFloat),o=e.left+e.width*i/n.width-(n.left+i),a=e.top+e.height*c/n.height-(n.top+c),{delay:_=0,duration:u=d=>Math.sqrt(d)*120,easing:f=gt}=r;return{delay:_,duration:I(u)?u(Math.sqrt(o*o+a*a)):u,easing:f,css:(d,h)=>{const y=h*o,m=h*a,p=d+h*e.width/n.width,w=d+h*e.height/n.height;return`transform: ${l} translate(${y}px, ${m}px) scale(${p}, ${w});`}}}export{H as $,Ae as A,Kt as B,bt as C,Ut as D,xe as E,we as F,Rt as G,ae as H,Vt as I,_e as J,Nt as K,x as L,Xt as M,Yt as N,te as O,ee as P,Zt as Q,oe as R,Re as S,A as T,Oe as U,he as V,ne as W,I as X,pe as Y,Lt as Z,me as _,Ot as a,Ee as a0,Se as a1,Be as a2,Pe as a3,Ce as a4,ce as b,le as c,qt as d,ft as e,de as f,ie as g,Bt as h,qe as i,ue as j,se as k,re as l,fe as m,$e as n,It as o,ke as p,yt as q,be as r,wt as s,Z as t,ge as u,ye as v,je as w,Ne as x,Jt as y,Me as z};