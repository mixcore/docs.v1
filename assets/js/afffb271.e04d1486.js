"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9077],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||i;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},130:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={id:"maintenance-optimization",title:"Optimization"},s=void 0,l={unversionedId:"maintenance-optimization",id:"maintenance-optimization",title:"Optimization",description:"Whether you run a high traffic Mixcore installation or a small blog on a low cost shared host, you should optimize Mixcore and your server to run as efficiently as possible. This article provides a broad overview of Mixcore optimization with specific recommended approaches. However, it\u2019s not a detailed technical explanation of each aspect.",source:"@site/docs/maintenance-optimization.md",sourceDirName:".",slug:"/maintenance-optimization",permalink:"/maintenance-optimization",draft:!1,editUrl:"https://github.com/mixcore/docs/edit/master/website/docs/maintenance-optimization.md",tags:[],version:"current",lastUpdatedBy:"Smilefounder",lastUpdatedAt:1580460714,formattedLastUpdatedAt:"1/31/2020",frontMatter:{id:"maintenance-optimization",title:"Optimization"},sidebar:"someSidebar",previous:{title:"Mixcore Restores",permalink:"/maintenance-mixcore-restores"},next:{title:"Hardending Mixcore",permalink:"/security-hardening-mixcore"}},p={},u=[{value:"Performance factors",id:"performance-factors",level:2}],f={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Whether you run a high traffic Mixcore installation or a small blog on a low cost shared host, you should optimize Mixcore and your server to run as efficiently as possible. This article provides a broad overview of Mixcore optimization with specific recommended approaches. However, it\u2019s not a detailed technical explanation of each aspect."),(0,i.kt)("p",null,"If you need a quick fix now, go straight to the Caching section, you\u2019ll get the biggest benefit for the smallest hassle there. If you want to get started on a more thorough optimization process immediately, go to How Do You Improve Performance in Mixcore."),(0,i.kt)("p",null,"A broad overview of the topic of performance is included below in What Affects Performance and How Do You Measure Performance. Many of the techniques discussed here also apply to Mixcore Multisite (MU)."),(0,i.kt)("h2",{id:"performance-factors"},"Performance factors"),(0,i.kt)("p",null,"Several factors can affect the performance of your Mixcore blog (or website). Those factors include, but are not limited to, the hosting environment, Mixcore configuration, software versions, number of graphics and their sizes."),(0,i.kt)("p",null,"Most of these performance degrading factors are addressed here in this article."))}m.isMDXComponent=!0}}]);