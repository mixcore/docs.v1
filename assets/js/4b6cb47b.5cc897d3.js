"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3721],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6605:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={id:"basic-usage-writing-posts",title:"Writing Your 1st Post"},l=void 0,p={unversionedId:"basic-usage-writing-posts",id:"basic-usage-writing-posts",title:"Writing Your 1st Post",description:"Post are entries that display in reverse order on your home page. Post usually have comments fields beneath them and are included in your site's RSS feed.",source:"@site/docs/basic-usage-writing-posts.md",sourceDirName:".",slug:"/basic-usage-writing-posts",permalink:"/basic-usage-writing-posts",draft:!1,editUrl:"https://github.com/mixcore/docs/edit/master/website/docs/basic-usage-writing-posts.md",tags:[],version:"current",lastUpdatedBy:"Huy Nguyen",lastUpdatedAt:1612774447,formattedLastUpdatedAt:"2/8/2021",frontMatter:{id:"basic-usage-writing-posts",title:"Writing Your 1st Post"},sidebar:"someSidebar",previous:{title:"Administration Screens",permalink:"/basic-administration-screens"},next:{title:"Pages",permalink:"/basic-usage-page"}},u={},d=[{value:"To write a post:",id:"to-write-a-post",level:2},{value:"Descriptions of Post Fields",id:"descriptions-of-post-fields",level:2},{value:"Title/Headline",id:"titleheadline",level:3},{value:"Excerpt",id:"excerpt",level:3},{value:"Body Content",id:"body-content",level:3},{value:"Tabs",id:"tabs",level:2},{value:"General",id:"general",level:3},{value:"SEO",id:"seo",level:3},{value:"Parents",id:"parents",level:3},{value:"Media",id:"media",level:3},{value:"Related",id:"related",level:3},{value:"Custom Fields (with admin permission only)",id:"custom-fields-with-admin-permission-only",level:2}],c={toc:d};function m(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Post are entries that display in reverse order on your home page. Post usually have comments fields beneath them and are included in your site's RSS feed."),(0,r.kt)("h2",{id:"to-write-a-post"},"To write a post:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log in to your mixcore CMS Administration Panel (Dashboard)."),(0,r.kt)("li",{parentName:"ol"},"Click the 'Post' tab."),(0,r.kt)("li",{parentName:"ol"},"Hover the 'Create Post' sub-tab."),(0,r.kt)("li",{parentName:"ol"},"Start filling in the blanks: enter your post title in the upper field, and enter your post body content in the main post editing box below it."),(0,r.kt)("li",{parentName:"ol"},"As needed, input/select/fill-in general, SEO, parents, media, related,... and make other selections from the sections below the post. (Each of these sections is explained below.)"),(0,r.kt)("li",{parentName:"ol"},"When you are ready, select ",(0,r.kt)("strong",{parentName:"li"},"Published")," button then press ",(0,r.kt)("strong",{parentName:"li"},"Save")," button from action navigation.")),(0,r.kt)("h2",{id:"descriptions-of-post-fields"},"Descriptions of Post Fields"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://api-docs.mixcore.org/api/Mix.Cms.Lib.ViewModels.MixPosts.ReadMvcViewModel.html#properties"},"API Properties Document")),(0,r.kt)("h3",{id:"titleheadline"},"Title/Headline"),(0,r.kt)("p",null,'The title of your post. You can use any phrases, words or characters. Avoid using the same title twice as that will cause problems. You can use commas, apostrophes, quotes, hyphens/dashes and other typical symbols in the post like "My Site - Here\'s Lookin\' at You, Kid". mixcore CMS will then clean it up to generate a user-friendly and URL-valid name of the post (also called the "post slug") to compose the permalink for the post.'),(0,r.kt)("h3",{id:"excerpt"},"Excerpt"),(0,r.kt)("p",null,"A summary or brief teaser of your post featured on the front page of your site as well as on the category, archives, and search non-single post pages. Note that the Excerpt does not usually appear by default. It only appears in your post if you have modified the template file listing the post to use ",(0,r.kt)("inlineCode",{parentName:"p"},"model.excerpt")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"model.content")," to display the Excerpt instead of the full content of a post. "),(0,r.kt)("h3",{id:"body-content"},"Body Content"),(0,r.kt)("p",null,"The blank box where you enter your writing, links, links to images, and any information you want to display on your site. You can use either the Visual or the Text view to compose your post. "),(0,r.kt)("h2",{id:"tabs"},"Tabs"),(0,r.kt)("h3",{id:"general"},"General"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Source URL"),(0,r.kt)("li",{parentName:"ol"},"Tags")),(0,r.kt)("h3",{id:"seo"},"SEO"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Friendly Title:"),(0,r.kt)("p",{parentName:"li"},"Google displays the entire title on the search results, which has 63 characters.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Meta Description:"),(0,r.kt)("p",{parentName:"li"},"We recommend descriptions between 50\u2013160 characters.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Friendly URL:"),(0,r.kt)("p",{parentName:"li"},"Easy to read: Users and search engines should be able to understand what is on each page just by looking at the URL.Keyword-rich: Keywords still matter and your target queries should be within URLs. Just be wary of overkill; extending URLs just to include more keywords is a bad idea.Consistent: There are multiple ways to create an SEO-friendly URL structure on any site. It\u2019s essential that, whatever logic you choose to follow, it is applied consistently across the site.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Meta Keywords:"),(0,r.kt)("p",{parentName:"li"},"Do make sure your most important keywords for the webpage show up in the meta description. Often search engines will highlight in bold where it finds the searchers query in your snippet."))),(0,r.kt)("h3",{id:"parents"},"Parents"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Page parent:"),(0,r.kt)("p",{parentName:"li"},'If the choosed page type is "List". All of the posts will display as a list inside the page. For example under "Blogs" page will contain a list of posts.'))),(0,r.kt)("p",null,"Example: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Blog",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Food",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Post 1"),(0,r.kt)("li",{parentName:"ul"},"Post 2"))),(0,r.kt)("li",{parentName:"ul"},"Drink",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Post 3")))))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Module parent:"),(0,r.kt)("p",{parentName:"li"},'If the choosed module type is "List". All of the posts will display as a list inside the module.'))),(0,r.kt)("h3",{id:"media"},"Media"),(0,r.kt)("h3",{id:"related"},"Related"),(0,r.kt)("h2",{id:"custom-fields-with-admin-permission-only"},"Custom Fields (with admin permission only)"),(0,r.kt)("p",null,'Custom Fields are default extra fields for post type. Fields structure & schema can be change by go to "Advanced" tab > Default Attributes'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Default Attributes",src:n(1313).Z,width:"1718",height:"634"})))}m.isMDXComponent=!0},1313:function(e,t,n){t.Z=n.p+"assets/images/advanced_default-attribute-c53573de5f8dc202f7a39e54972a982c.jpg"}}]);