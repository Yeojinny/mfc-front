if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),u={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>u[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/QPsRrufRXy883SUa0S9ng/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/QPsRrufRXy883SUa0S9ng/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/190-b29675f5662263a4.js",revision:"QPsRrufRXy883SUa0S9ng"},{url:"/_next/static/chunks/231-c50df8655e58ac87.js",revision:"QPsRrufRXy883SUa0S9ng"},{url:"/_next/static/chunks/481-ad59fc6f9112348b.js",revision:"QPsRrufRXy883SUa0S9ng"},{url:"/_next/static/chunks/648-c889231adacaa89a.js",revision:"QPsRrufRXy883SUa0S9ng"},{url:"/_next/static/chunks/67-bb67001848a80253.js",revision:"QPsRrufRXy883SUa0S9ng"},{url:"/_next/static/chunks/8318a8be-3c78287b74fa4fc7.js",revision:"QPsRrufRXy883SUa0S9ng"},{url:"/_next/static/chunks/998-4d614e8304cd6c65.js",revision:"QPsRrufRXy883SUa0S9ng"},{url:"/_next/static/chunks/app/(common)/(auth)/signin/page-f8d1a425faee67a3.js",revision:"QPsRrufRXy883SUa0S9ng"},{url:"/_next/static/chunks/app/(common)/(auth)/signup/page-30c81f299c3e99c7.js",revision:"QPsRrufRXy883SUa0S9ng"},{url:"/_next/static/chunks/app/(common)/explore/page-4134aa40ac2bf591.js",revision:"QPsRrufRXy883SUa0S9ng"},{url:"/_next/static/chunks/app/(common)/ranking/page-9c0479ee2d430862.js",revision:"QPsRrufRXy883SUa0S9ng"},{url:"/_next/static/chunks/app/_not-found/page-b251db2e0d6c9d1a.js",revision:"QPsRrufRXy883SUa0S9ng"},{url:"/_next/static/chunks/app/layout-f1a081b68e1f6627.js",revision:"QPsRrufRXy883SUa0S9ng"},{url:"/_next/static/chunks/app/page-4b32ced1ceba7df9.js",revision:"QPsRrufRXy883SUa0S9ng"},{url:"/_next/static/chunks/app/partner/(home)/layout-008bf021de98fd5b.js",revision:"QPsRrufRXy883SUa0S9ng"},{url:"/_next/static/chunks/app/partner/(home)/page-90fdc87498e4ee52.js",revision:"QPsRrufRXy883SUa0S9ng"},{url:"/_next/static/chunks/app/partner/chats/%5BroomId%5D/page-d0646aa3835bdf46.js",revision:"QPsRrufRXy883SUa0S9ng"},{url:"/_next/static/chunks/app/partner/chats/page-48ce42d12fa472bc.js",revision:"QPsRrufRXy883SUa0S9ng"},{url:"/_next/static/chunks/app/partner/mypage/page-1f444da6eed41ea7.js",revision:"QPsRrufRXy883SUa0S9ng"},{url:"/_next/static/chunks/app/partner/mypage/styles/edit/page-fa845be846a9d443.js",revision:"QPsRrufRXy883SUa0S9ng"},{url:"/_next/static/chunks/app/user/(home)/layout-251ea408c51832f0.js",revision:"QPsRrufRXy883SUa0S9ng"},{url:"/_next/static/chunks/app/user/(home)/page-1ffe3277dc518051.js",revision:"QPsRrufRXy883SUa0S9ng"},{url:"/_next/static/chunks/app/user/chats/%5BroomId%5D/page-4acb427d272af3d7.js",revision:"QPsRrufRXy883SUa0S9ng"},{url:"/_next/static/chunks/app/user/chats/page-03ce6f352b9b0226.js",revision:"QPsRrufRXy883SUa0S9ng"},{url:"/_next/static/chunks/app/user/coordinate/page-3798d719c5c611df.js",revision:"QPsRrufRXy883SUa0S9ng"},{url:"/_next/static/chunks/app/user/mypage/page-2e9847d4fa48b211.js",revision:"QPsRrufRXy883SUa0S9ng"},{url:"/_next/static/chunks/fd9d1056-d7f17a68bf7992c1.js",revision:"QPsRrufRXy883SUa0S9ng"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"QPsRrufRXy883SUa0S9ng"},{url:"/_next/static/chunks/main-71ced0fb623a91c8.js",revision:"QPsRrufRXy883SUa0S9ng"},{url:"/_next/static/chunks/main-app-9da1b938cce5e2af.js",revision:"QPsRrufRXy883SUa0S9ng"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"QPsRrufRXy883SUa0S9ng"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"QPsRrufRXy883SUa0S9ng"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-a640dea41690aba2.js",revision:"QPsRrufRXy883SUa0S9ng"},{url:"/_next/static/css/9aebbdeedc056883.css",revision:"9aebbdeedc056883"},{url:"/_next/static/media/ff840cfebfb63b0c-s.p.woff2",revision:"302ec55f5b4320354ec6b35a53dead87"},{url:"/icon-192x192.png",revision:"0846a77b2550492e534f7a1a7012eee8"},{url:"/icon-256x256.png",revision:"bac2fc762e53b57f2ce55e628e5c5be9"},{url:"/icon-384x384.png",revision:"e9d31a292c162deb204ee96297648157"},{url:"/icon-512x512.png",revision:"85feb3a273be45d763ea33b13ef941c8"},{url:"/icons/alert.svg",revision:"53b457ffe1c1916e435d1cb6b0a98736"},{url:"/icons/chats.svg",revision:"4105bffa4387a8c629b2679e1fcc9083"},{url:"/icons/explore.svg",revision:"469da60dab0d375274bf8cf87f0bf51b"},{url:"/icons/hamburger.svg",revision:"cbfcd2b4b0845ebb32afe9f3c13de158"},{url:"/icons/home.svg",revision:"c89088f6434a65d452e060c083099159"},{url:"/icons/menu-line.svg",revision:"3b4b04bdc82133b9142f5c883144f7af"},{url:"/icons/mypage.svg",revision:"7f3fd0a5b4015fee5c6257a7c068f4aa"},{url:"/icons/notifications.svg",revision:"f5557e4b6c5a9f39f0b74d0715d00c45"},{url:"/icons/ranking.svg",revision:"dde98b9bf0a72b0d1dbad0783983384e"},{url:"/images/chat-add-file.svg",revision:"aff975e993ad7c4fc3ebb63cb8774e43"},{url:"/images/chat-send-button.svg",revision:"a2c1cb5c63655da881358e5b35070630"},{url:"/images/home.svg",revision:"b36b13ea11bc0c657091ebf3e4995fe4"},{url:"/images/mfc-logo.png",revision:"1509ef459129bc4ce20097d00fcdba46"},{url:"/images/partner-post.jpeg",revision:"600a5b6bbd785e3865ce3109e51e8cb0"},{url:"/images/partner-signup.svg",revision:"c8686aa20857250ff3c077962437b605"},{url:"/images/profile.png",revision:"b2186ebae126a379baa02be675111dc4"},{url:"/images/test-profile.jpg",revision:"faeecadf6a5cec73918943eabf140f00"},{url:"/images/test.svg",revision:"9ee51ab61065d6c47ce4a8803a3976b4"},{url:"/images/user-signup-man.svg",revision:"0725c84c4c32396f4ccdbf96359b82d4"},{url:"/images/user-signup-woman.svg",revision:"ff804f663fe148de973c951c42a6147d"},{url:"/initial_page.svg",revision:"df58b339bac3d2e4699a930bc4aeb761"},{url:"/manifest.json",revision:"49377dff528b9ba7c1a926a3f5242dd3"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
