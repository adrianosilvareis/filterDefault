angular.module("filterDefault",[]);
angular.module("filterDefault").filter("dateBr",function(){return function(r){if(!r)return r;var t=r.split("-"),e=t[0],n=t[1];return t[2]+"/"+n+"/"+e}});
angular.module("filterDefault").filter("maxlength",function(){return function(t,n){return t&&t.length>n?t.substr(0,n):t}});
angular.module("filterDefault").filter("name",function(){return function(t){return void 0===t||null===t?t:t.split(" ").map(function(t){return/^do$|^da$|^de&/.test(t)?t:t.charAt(0).toUpperCase()+t.substring(1).toLowerCase()}).join(" ")}});
angular.module("filterDefault").filter("timestampBr",function(){return function(t){if(!t)return t;var r=t.split(" "),e=r[0],i=r[1],n=e.split("-"),u=n[0],l=n[1];return n[2]+"/"+l+"/"+u+" "+i}});