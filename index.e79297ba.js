const e=document.querySelector(".js-mobile-menu"),n=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),s=()=>{window.removeEventListener("keydown",t),e.classList.remove("is-open")},t=e=>{"Escape"===e.code&&(s(),document.body.classList.remove("is-open"))};window.addEventListener("click",(n=>{n.target===e&&(s(),document.body.classList.remove("is-open"))})),n.addEventListener("click",(()=>{window.addEventListener("keydown",t),e.classList.add("is-open")})),o.addEventListener("click",s);
//# sourceMappingURL=index.e79297ba.js.map