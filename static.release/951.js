Cube(964,[],function(a,b){function c(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function e(a,b){return h(a)||g(a,b)||f()}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function g(a,b){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function h(a){if(Array.isArray(a))return a}function i(a,b){return a.test(b)}function j(a){var b=a||("undefined"===typeof navigator?"":navigator.userAgent),c=b.split("[FBAN");if("undefined"!==typeof c[1]){var d=c,f=e(d,1);b=f[0]}if(c=b.split("Twitter"),"undefined"!==typeof c[1]){var g=c,h=e(g,1);b=h[0]}var j={apple:{phone:i(k,b)&&!i(r,b),ipod:i(l,b),tablet:!i(k,b)&&i(m,b)&&!i(r,b),device:(i(k,b)||i(l,b)||i(m,b))&&!i(r,b)},amazon:{phone:i(p,b),tablet:!i(p,b)&&i(q,b),device:i(p,b)||i(q,b)},android:{phone:!i(r,b)&&i(p,b)||!i(r,b)&&i(n,b),tablet:!i(r,b)&&!i(p,b)&&!i(n,b)&&(i(q,b)||i(o,b)),device:!i(r,b)&&(i(p,b)||i(q,b)||i(n,b)||i(o,b))||i(/\bokhttp\b/i,b)},windows:{phone:i(r,b),tablet:i(s,b),device:i(r,b)||i(s,b)},other:{blackberry:i(t,b),blackberry10:i(u,b),opera:i(v,b),firefox:i(x,b),chrome:i(w,b),device:i(t,b)||i(u,b)||i(v,b)||i(x,b)||i(w,b)},any:null,phone:null,tablet:null};return j.any=j.apple.device||j.android.device||j.windows.device||j.other.device,j.phone=j.apple.phone||j.android.phone||j.windows.phone,j.tablet=j.apple.tablet||j.android.tablet||j.windows.tablet,j}Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var k=/iPhone/i,l=/iPod/i,m=/iPad/i,n=/\bAndroid(?:.+)Mobile\b/i,o=/Android/i,p=/\bAndroid(?:.+)SD4930UR\b/i,q=/\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i,r=/Windows Phone/i,s=/\bWindows(?:.+)ARM\b/i,t=/BlackBerry/i,u=/BB10/i,v=/Opera Mini/i,w=/\b(CriOS|Chrome)(?:.+)Mobile/i,x=/Mobile(?:.+)Firefox\b/i,y=function(a){for(var b,e=1;e<arguments.length;e++)b=null==arguments[e]?{}:arguments[e],e%2?c(Object(b),!0).forEach(function(c){d(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):c(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}({},j(),{isMobile:j});return b.default=y,a.exports});
Cube("static:/951.js",["static:/1.js"],function(a,b,c){function d(){if("function"!==typeof WeakMap)return null;var a=new WeakMap;return d=function(){return a},a}function e(a){if(a&&a.__esModule)return a;if(null===a||"object"!==f(a)&&"function"!==typeof a)return{default:a};var b=d();if(b&&b.has(a))return b.get(a);var c={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in a)if(Object.prototype.hasOwnProperty.call(a,g)){var h=e?Object.getOwnPropertyDescriptor(a,g):null;h&&(h.get||h.set)?Object.defineProperty(c,g,h):c[g]=a[g]}return c.default=a,b&&b.set(a,c),c}function f(a){return f="function"===typeof Symbol&&"symbol"===h(Symbol.iterator)?function(a){return"undefined"===typeof a?"undefined":h(a)}:function(a){return a&&"function"===typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":"undefined"===typeof a?"undefined":h(a)},f(a)}function g(a,b,d){!a||d.find||i.Children.forEach(a,function(a){if(a){var c=a.type;if(!c||!(c.isSubMenu||c.isMenuItem||c.isMenuItemGroup))return;-1===b.indexOf(a.key)?a.props.children&&g(a.props.children,b,d):d.find=!0}})}var h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"===typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};Object.defineProperty(b,"__esModule",{value:!0}),b.noop=function(){},b.getKeyFromChildrenIndex=function(a,b,c){return a.key||"".concat(b||"","item_").concat(c)},b.getMenuIdFromSubMenuEventKey=function(a){return"".concat(a,"-menu-")},b.loopMenuItem=function(a,b){var d=-1;i.Children.forEach(a,function(a){d+=1,a&&a.type&&a.type.isMenuItemGroup?i.Children.forEach(a.props.children,function(a){d+=1,b(a,d)}):b(a,d)})},b.loopMenuItemRecursively=g,b.isMobileDevice=b.setStyle=b.getWidth=b.menuAllProps=void 0;var i=e(c("static:/1.js")),j=function(a){return a&&a.__esModule?a:{default:a}}(c(964));b.menuAllProps=["defaultSelectedKeys","selectedKeys","defaultOpenKeys","openKeys","mode","getPopupContainer","onSelect","onDeselect","onDestroy","openTransitionName","openAnimation","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","triggerSubMenuAction","level","selectable","multiple","onOpenChange","visible","focusable","defaultActiveFirst","prefixCls","inlineIndent","parentMenu","title","rootPrefixCls","eventKey","active","onItemHover","onTitleMouseEnter","onTitleMouseLeave","onTitleClick","popupAlign","popupOffset","isOpen","renderMenuItem","manualRef","subMenuKey","disabled","index","isSelected","store","activeKey","builtinPlacements","overflowedIndicator","motion","attribute","value","popupClassName","inlineCollapsed","menu","theme","itemIcon","expandIcon"];b.getWidth=function(a){var b=a&&"function"===typeof a.getBoundingClientRect&&a.getBoundingClientRect().width;return b&&(b=+b.toFixed(6)),b||0};var k=function(a,b,c){a&&"object"===f(a.style)&&(a.style[b]=c)};b.setStyle=k;return b.isMobileDevice=function(){return j.default.any},a.exports});