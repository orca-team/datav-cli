Cube("static:/86.js",[],function(a){function b(a){if(null===a||void 0===a)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(a)}var c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable;return a.exports=function(){try{if(!Object.assign)return!1;var a=new String("abc");if(a[5]="de","5"===Object.getOwnPropertyNames(a)[0])return!1;for(var b={},c=0;10>c;c++)b["_"+String.fromCharCode(c)]=c;var d=Object.getOwnPropertyNames(b).map(function(a){return b[a]});if("0123456789"!==d.join(""))return!1;var e={};return["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t"].forEach(function(a){e[a]=a}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},e)).join("")}catch(a){return!1}}()?Object.assign:function(a){for(var f,g,h=b(a),j=1;j<arguments.length;j++){for(var k in f=Object(arguments[j]),f)d.call(f,k)&&(h[k]=f[k]);if(c){g=c(f);for(var l=0;l<g.length;l++)e.call(f,g[l])&&(h[g[l]]=f[g[l]])}}return h},a.exports});