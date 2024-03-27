function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["library.js","assets/library.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
const v="modulepreload",E=function(c){return"/"+c},f={},y=function(d,l,m){let a=Promise.resolve();if(l&&l.length>0){const r=document.getElementsByTagName("link"),e=document.querySelector("meta[property=csp-nonce]"),u=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));a=Promise.all(l.map(t=>{if(t=E(t),t in f)return;f[t]=!0;const o=t.endsWith(".css"),h=o?'[rel="stylesheet"]':"";if(!!m)for(let s=r.length-1;s>=0;s--){const i=r[s];if(i.href===t&&(!o||i.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${h}`))return;const n=document.createElement("link");if(n.rel=o?"stylesheet":v,o||(n.as="script",n.crossOrigin=""),n.href=t,u&&n.setAttribute("nonce",u),document.head.appendChild(n),o)return new Promise((s,i)=>{n.addEventListener("load",s),n.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${t}`)))})}))}return a.then(()=>d()).catch(r=>{const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=r,window.dispatchEvent(e),!e.defaultPrevented)throw r})};y(()=>import("../library.js"),__vite__mapDeps([0,1]));
