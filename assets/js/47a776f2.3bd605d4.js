"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5954],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return p}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(o),p=n,f=h["".concat(l,".").concat(p)]||h[p]||m[p]||i;return o?r.createElement(f,a(a({ref:t},c),{},{components:o})):r.createElement(f,a({ref:t},c))}));function p(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var u=2;u<i;u++)a[u]=o[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},483:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var r=o(7462),n=o(3366),i=(o(7294),o(3905)),a=["components"],s={},l='What is "Theme"?',u={unversionedId:"theme",id:"theme",title:'What is "Theme"?',description:'Fundamentally, the mixcore CMS Theme system is a way to "skin" your weblog. Yet, it is more than just a "skin." Skinning your site implies that only the design is changed. mixcore CMS Themes can provide much more control over the look and presentation of the material on your website.',source:"@site/docs/theme.md",sourceDirName:".",slug:"/theme",permalink:"/theme",draft:!1,editUrl:"https://github.com/mixcore/docs/edit/master/website/docs/theme.md",tags:[],version:"current",lastUpdatedBy:"Smilefounder",lastUpdatedAt:1580460714,formattedLastUpdatedAt:"1/31/2020",frontMatter:{}},c={},m=[{value:"Creating Themes",id:"creating-themes",level:2},{value:"Why mixcore CMS Themes",id:"why-mixcore-cms-themes",level:3}],h={toc:m};function p(e){var t=e.components,o=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-is-theme"},'What is "Theme"?'),(0,i.kt)("p",null,'Fundamentally, the mixcore CMS Theme system is a way to "skin" your weblog. Yet, it is more than just a "skin." Skinning your site implies that only the design is changed. mixcore CMS Themes can provide much more control over the look and presentation of the material on your website.'),(0,i.kt)("p",null,"A mixcore CMS Theme is a collection of files that work together to produce a graphical interface with an underlying unifying design for a multi-purpose website. These files are called template files. A Theme modifies the way the site is displayed, without modifying the underlying software. Themes may include customized template files, image files (","*",".jpg, ","*",".gif), style sheets (","*",".css), custom Pages, Modules, as well as any necessary code files (","*",".aspx). For an introduction to template files, see Stepping Into Templates."),(0,i.kt)("p",null,"Let's say you write a lot about cheese and gadgets. Through the use of the mixcore CMS Loop and template files, you can customize your Cheese category posts to look different from your Gadgets category posts. With this powerful control over what different pages and categories look like on your site, you are limited only by your imagination. For information on how to use different Themes for different categories or posts, see The Loop in Action and Category Templates."),(0,i.kt)("h2",{id:"creating-themes"},"Creating Themes"),(0,i.kt)("h3",{id:"why-mixcore-cms-themes"},"Why mixcore CMS Themes"),(0,i.kt)("p",null,"mixcore CMS Themes are files that work together to create the design and functionality of a mixcore CMS site. Each Theme may be different, offering many choices for site owners to instantly change their website look."),(0,i.kt)("p",null,"You may wish to develop mixcore CMS Themes for your own use, for a client project or to submit to the mixcore CMS Theme Directory. Why else should you build a mixcore CMS Theme?"),(0,i.kt)("p",null,"To create a unique look for your mixcore CMS site."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To take advantage of templates, template tags, and the mixcore CMS Loop to generate different website results and looks."),(0,i.kt)("li",{parentName:"ul"},"To provide alternative templates for specific site features, such as category pages and search result pages."),(0,i.kt)("li",{parentName:"ul"},"To quickly switch between two site layouts, or to take advantage of a Theme or style switcher to allow site owners to change the look of your site."),(0,i.kt)("li",{parentName:"ul"},"A mixcore CMS Theme has many benefits, too.")),(0,i.kt)("p",null,"It separates the presentation styles and template files from the system files so the site will upgrade without drastic changes to the visual presentation of the site."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It allows for customization of the site functionality unique to that Theme."),(0,i.kt)("li",{parentName:"ul"},"It allows for quick changes of the visual design and layout of a mixcore CMS site."),(0,i.kt)("li",{parentName:"ul"},"It removes the need for a typical mixcore CMS site owner to have to learn CSS, HTML, and ASP.NET (Dotnet) Core in order to have a great-looking website."),(0,i.kt)("li",{parentName:"ul"},"Why should you build your own mixcore CMS Theme? That's the real question.")),(0,i.kt)("p",null,"It's an opportunity to learn more about CSS, HTML, and ASP.NET (Dotnet) Core."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It's an opportunity to put your expertise with CSS, HTML, and ASP.NET (Dotnet) Core to work."),(0,i.kt)("li",{parentName:"ul"},"It's creative."),(0,i.kt)("li",{parentName:"ul"},"It's fun (most of the time)."),(0,i.kt)("li",{parentName:"ul"},"If you release it to the public, you can feel good that you shared and gave something back to the mixcore CMS Community (okay, bragging rights)")))}p.isMDXComponent=!0}}]);