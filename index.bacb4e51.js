var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequire4c75;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},e.parcelRequire4c75=r);var n=r("9OeKo");const a={email:document.querySelector(".email"),message:document.querySelector(".message"),form:document.querySelector(".feedback-form")},l="feedback-form-state";function i(e){let t=e.currentTarget.value;localStorage.setItem(l,t)}a.form.addEventListener("submit",function(e){e.preventDefault(),console.log("Sending form"),e.currentTarget.reset(),localStorage.removeItem(l)}),a.email.addEventListener("input",n(i,1e3)),a.message.addEventListener("input",n(i,1e3)),function(){let e=localStorage.getItem(l);e&&(console.log("Data is stored"),a.message.value=e,a.email.value=e)}();
//# sourceMappingURL=index.bacb4e51.js.map
