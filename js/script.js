"use strict";function _createForOfIteratorHelper(e,r){var t,n,o,a,i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(i)return n=!(t=!0),{s:function(){i=i.call(e)},n:function(){var e=i.next();return t=e.done,e},e:function(e){n=!0,o=e},f:function(){try{t||null==i.return||i.return()}finally{if(n)throw o}}};if(Array.isArray(e)||(i=_unsupportedIterableToArray(e))||r&&e&&"number"==typeof e.length)return i&&(e=i),a=0,{s:r=function(){},n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,r){var t;if(e)return"string"==typeof e?_arrayLikeToArray(e,r):"Map"===(t="Object"===(t=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:t)||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,r):void 0}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}document.addEventListener("DOMContentLoaded",function(){var e,r,t=document.querySelectorAll(".search-trigger"),n=document.querySelector(".search"),o=document.querySelector(".search__field"),a=_createForOfIteratorHelper(t);try{for(a.s();!(e=a.n()).done;)e.value.addEventListener("click",function(e){e.preventDefault(),e.target.classList.contains("search-trigger")&&(n.classList.toggle("show"),n.classList.contains("show")?(o.focus(),o.classList.add("focus")):(o.blur(),o.classList.remove("focus"))),window.matchMedia("(max-width: 992px)").matches&&document.querySelector(".search__trigger.mobile").classList.toggle("active")})}catch(e){a.e(e)}finally{a.f()}window.matchMedia("(max-width: 992px)").matches&&(t=document.querySelector(".burger-trigger"),r=document.querySelector(".menu"),t.addEventListener("click",function(){r.classList.toggle("active")}));new Swiper(".products-slider",{spaceBetween:8,slidesPerView:2.105,slidesPerGroup:2,breakpoints:{768:{spaceBetween:15,slidesPerView:3,slidesPerGroup:3},992:{spaceBetween:26,slidesPerView:4,slidesPerGroup:4}},pagination:{el:".swiper-pagination",type:"fraction",renderFraction:function(e,r){return'<span class="'+e+'"></span>/<span class="'+r+'"></span>'}},navigation:{nextEl:".products-slider .swiper-btn.next",prevEl:".products-slider .swiper-btn.prev"}});var t=document.querySelector(".search-result"),i="calc(100vh - ".concat(t.getBoundingClientRect().top+document.body.scrollTop,"px)");t.style.maxHeight=i});