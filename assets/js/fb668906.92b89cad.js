"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6556],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return b}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(r),b=a,d=f["".concat(s,".").concat(b)]||f[b]||p[b]||o;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6334:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={id:"basic-usage-database",title:"Database"},s=void 0,u={unversionedId:"basic-usage-database",id:"basic-usage-database",title:"Database",description:"...",source:"@site/docs/basic-usage-database.md",sourceDirName:".",slug:"/basic-usage-database",permalink:"/basic-usage-database",draft:!1,editUrl:"https://github.com/mixcore/docs/edit/master/website/docs/basic-usage-database.md",tags:[],version:"current",lastUpdatedBy:"Huy Nguyen",lastUpdatedAt:1613113482,formattedLastUpdatedAt:"2/12/2021",frontMatter:{id:"basic-usage-database",title:"Database"},sidebar:"someSidebar",previous:{title:"Navigation",permalink:"/basic-usage-navigation"},next:{title:"Category",permalink:"/basic-usage-category"}},l={},p=[],f={toc:p};function b(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"..."),(0,o.kt)("p",null,"Example of submit data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Post API: \'/api/v1/rest/en-us/attribute-set-data/client\'\n\nData JSON:\n{\n    "attributeSetName": "subscriber",\n    "obj": {\n        "id": null,\n        "email": "asdf@sadf.asdf"\n    }    \n}\n')))}b.isMDXComponent=!0}}]);