!function(o){var t={};function n(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return o[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=o,n.c=t,n.d=function(e,r,o){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(r,e){if(1&e&&(r=n(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var t in r)n.d(o,t,function(e){return r[e]}.bind(null,t));return o},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=0)}([function(e,r){$(document).ready(function(){$(window).scroll(function(){200<$(window).scrollTop()?$(".header__container").addClass("header__container--scroll"):$(".header__container").removeClass("header__container--scroll")}),$(".header__burger").click(function(){$(this).toggleClass("header__burger--active"),$(".header__nav").toggleClass("header__nav--active"),$(".header").toggleClass("header--bg")}),$(window).resize(function(){768<$(window).width()&&($(".header__burger").removeClass("header__burger--active"),$(".header__nav").removeClass("header__nav--active"),$(".header").removeClass("header--bg"))}),$(".people__change").slick({prevArrow:'<svg class="people__arrow people__arrow-back" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.414 35.414"><path d="M25.536 0L8.39 17v1.414l17.146 17L27.024 34 10.767 17.707 27.005 1.414z"/></svg>',nextArrow:'<svg class="people__arrow people__arrow-next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.175 477.175"><path d="M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z"/></svg>',dots:!1,arrows:!0,draggable:!1,speed:500,responsive:[{breakpoint:992,settings:{arrows:!1,dots:!0}}]})})}]);