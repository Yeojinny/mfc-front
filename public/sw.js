if (!self.define) {
  let e,
    a = {}
  const s = (s, i) => (
    (s = new URL(s + '.js', i).href),
    a[s] ||
      new Promise((a) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = s), (e.onload = a), document.head.appendChild(e)
        } else (e = s), importScripts(s), a()
      }).then(() => {
        let e = a[s]
        if (!e) throw new Error(`Module ${s} didn’t register its module`)
        return e
      })
  )
  self.define = (i, n) => {
    const t =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href
    if (a[t]) return
    let r = {}
    const c = (e) => s(e, t),
      b = { module: { uri: t }, exports: r, require: c }
    a[t] = Promise.all(i.map((e) => b[e] || c(e))).then((e) => (n(...e), r))
  }
}
define(['./workbox-c06b064f'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/I9PC0mf29bbaOLrCtulL1/_buildManifest.js',
          revision: 'b222cbf4d8e1f47e27a8925222733e53',
        },
        {
          url: '/_next/static/I9PC0mf29bbaOLrCtulL1/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/231-28dde457e6c453ec.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/2967-05c8ea7bf453bbee.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/4428-eb14c61f2e7f4f90.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/4967-5b3ab0ff82647a62.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/5190-6c5ad41b51b29598.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/6741-2f77d0d5160b5238.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/7116-06c284cc9a3bae5c.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/8173-d52596276f47dce8.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/8318a8be-3c78287b74fa4fc7.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/8713-c43846414f418855.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/9740-53ea31e21e188189.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/998-4ac2b1715c8f6326.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/(common)/(auth)/signin/page-24584e060ff4e6cd.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/(common)/(auth)/signup/page-c0348fc2b087e4b6.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/(common)/explore/page-feaff39d86ecdcde.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/(common)/ranking/page-2dbd95dfdef7a25b.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/(common)/selectrole/page-e24fa237b9654a37.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-7377ecfd1a5177bd.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/layout-f2ee9bf79a84e845.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/page-a4c5f80aef6e3234.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/partner/(home)/layout-35b1e99e9835a0d7.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/partner/(home)/page-9c669ffa16a16766.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/partner/chatroom/%5BroomId%5D/page-ffdc170f03b056dc.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/partner/chats/%5BroomId%5D/page-31331a91a5e747d6.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/partner/chats/@tabs/before/page-8a5aaaebad9bdd53.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/partner/chats/@tabs/closed/page-84304e3422672ccf.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/partner/chats/@tabs/confirm/page-4d764ff473d152d4.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/partner/chats/@tabs/layout-864a830a08bf7450.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/partner/chats/@tabs/page-6094aca55c344092.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/partner/chats/@tabs/pending/page-ded7b2a9c534b9b1.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/partner/chats/layout-193474d870165cb7.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/partner/mypage/menu/page-3c9b4d26cd42765b.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/partner/mypage/page-33c4d16e9f95bb1d.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/partner/mypage/profile/page-019533d9e96e4673.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/partner/mypage/styles/%5BpostId%5D/page-f9450f7a13032d8e.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/partner/mypage/styles/edit/page-0f8a4e834deb8709.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/partner/reqcoordi/%5BrequestId%5D/page-38bb0543be9469a0.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/user/(home)/layout-891cbb1b05ae24ff.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/user/(home)/page-aa53c2c5ac9fc383.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/user/chats/%5BroomId%5D/page-fb866a1f628381e4.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/user/chats/page-4c8fe349bb70b3c4.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/user/coordinator/%5BpartnerCode%5D/profile/@tabs/information/page-b1c8d9db75c7dbd6.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/user/coordinator/%5BpartnerCode%5D/profile/@tabs/layout-fa7750385faf1f40.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/user/coordinator/%5BpartnerCode%5D/profile/@tabs/page-7df93cbafa6c4d2e.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/user/coordinator/%5BpartnerCode%5D/profile/@tabs/review/page-bf23e72ad643f909.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/user/coordinator/%5BpartnerCode%5D/profile/layout-199b2001db2150e4.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/user/coordinator/%5BpartnerCode%5D/reqcoordi/layout-671d6de302ebccc4.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/user/coordinator/%5BpartnerCode%5D/reqcoordi/page-f99459ca8ee2d394.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/user/coordinator/page-0c1fc0a8ff55c58d.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/user/mypage/page-4372f78561a41c05.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/user/mypage/reqlist/layout-21598eb74968c310.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/app/user/mypage/reqlist/page-7c90d40aad727f35.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/fd9d1056-bb201fffe0bae598.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/framework-a63c59c368572696.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/main-63b7fd1e7bf9c2c7.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/main-app-9bdade3ec3255667.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/pages/_app-00b74eae5e8dab51.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/pages/_error-c72a1f77a3c0be1b.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js',
          revision: '79330112775102f91e1010318bae2bd3',
        },
        {
          url: '/_next/static/chunks/webpack-ac4a612fe44dc3d3.js',
          revision: 'I9PC0mf29bbaOLrCtulL1',
        },
        {
          url: '/_next/static/css/7bf773dac7d32baf.css',
          revision: '7bf773dac7d32baf',
        },
        {
          url: '/_next/static/css/94414b39bedafde8.css',
          revision: '94414b39bedafde8',
        },
        {
          url: '/_next/static/media/ff840cfebfb63b0c-s.p.woff2',
          revision: '302ec55f5b4320354ec6b35a53dead87',
        },
        {
          url: '/firebase-messaging-sw.js',
          revision: 'e5062b1654de7390726fd795cd9a59d4',
        },
        {
          url: '/icon-192x192.png',
          revision: '0846a77b2550492e534f7a1a7012eee8',
        },
        {
          url: '/icon-256x256.png',
          revision: 'bac2fc762e53b57f2ce55e628e5c5be9',
        },
        {
          url: '/icon-384x384.png',
          revision: 'e9d31a292c162deb204ee96297648157',
        },
        {
          url: '/icon-512x512.png',
          revision: '85feb3a273be45d763ea33b13ef941c8',
        },
        {
          url: '/icons/add-circle.svg',
          revision: 'cb32e1a7838bd25298b2db63441097d5',
        },
        {
          url: '/icons/add-icon.svg',
          revision: '6f9683700bb6cdcd2feddb69e3b74c90',
        },
        {
          url: '/icons/alert.svg',
          revision: '53b457ffe1c1916e435d1cb6b0a98736',
        },
        {
          url: '/icons/blog.svg',
          revision: '55481482768728825523f8ea0fdc931e',
        },
        {
          url: '/icons/chats.svg',
          revision: '4105bffa4387a8c629b2679e1fcc9083',
        },
        {
          url: '/icons/delete-circle-red.svg',
          revision: '681fb4934a04d4071552589ee26ad0c3',
        },
        {
          url: '/icons/explore.svg',
          revision: '469da60dab0d375274bf8cf87f0bf51b',
        },
        {
          url: '/icons/facebook.svg',
          revision: 'bf6860ea5647ee8e43edf4dce776777c',
        },
        {
          url: '/icons/hamburger.svg',
          revision: 'cbfcd2b4b0845ebb32afe9f3c13de158',
        },
        {
          url: '/icons/hanger.svg',
          revision: '5130b0e1763a1e0516389a58be85ba18',
        },
        {
          url: '/icons/home.svg',
          revision: 'c89088f6434a65d452e060c083099159',
        },
        {
          url: '/icons/instagram.svg',
          revision: '8c1d1ca2d3c2f7715d2adbc829f2869a',
        },
        {
          url: '/icons/link.svg',
          revision: '2ed8638625cde7ffcbcfc2e456e547c8',
        },
        {
          url: '/icons/menu-line.svg',
          revision: '3b4b04bdc82133b9142f5c883144f7af',
        },
        {
          url: '/icons/more-vertical.svg',
          revision: 'efc0580ee3265c28a768f1dcb763a57d',
        },
        {
          url: '/icons/mypage.svg',
          revision: '7f3fd0a5b4015fee5c6257a7c068f4aa',
        },
        {
          url: '/icons/notifications.svg',
          revision: 'f5557e4b6c5a9f39f0b74d0715d00c45',
        },
        {
          url: '/icons/ranking.svg',
          revision: 'dde98b9bf0a72b0d1dbad0783983384e',
        },
        {
          url: '/icons/tiktok.svg',
          revision: '174968eace91fd753881942b5e6279ca',
        },
        {
          url: '/icons/youtube.svg',
          revision: '15bfed8f7002d6ca54d323858ec05f8c',
        },
        {
          url: '/images/chat-add-file.svg',
          revision: 'aff975e993ad7c4fc3ebb63cb8774e43',
        },
        {
          url: '/images/chat-send-button.svg',
          revision: 'a2c1cb5c63655da881358e5b35070630',
        },
        {
          url: '/images/home.svg',
          revision: 'b36b13ea11bc0c657091ebf3e4995fe4',
        },
        {
          url: '/images/mfc-logo.png',
          revision: '1509ef459129bc4ce20097d00fcdba46',
        },
        {
          url: '/images/my_image.jpg',
          revision: '2cc6b660848720a1e3f0cba59cc63bbb',
        },
        {
          url: '/images/partner-post.jpeg',
          revision: '600a5b6bbd785e3865ce3109e51e8cb0',
        },
        {
          url: '/images/partner-signup.svg',
          revision: 'c8686aa20857250ff3c077962437b605',
        },
        {
          url: '/images/pencil-icon.svg',
          revision: '0077cf4128c546f06f5646eb24a03847',
        },
        {
          url: '/images/pencil.svg',
          revision: '7ec95ef405e963f8debfbf6fb423cea6',
        },
        {
          url: '/images/profile.png',
          revision: 'b2186ebae126a379baa02be675111dc4',
        },
        {
          url: '/images/reference_image.jpg',
          revision: '3d3970ae7539268f3695be6595dde26c',
        },
        {
          url: '/images/test-profile.jpg',
          revision: 'faeecadf6a5cec73918943eabf140f00',
        },
        {
          url: '/images/test.svg',
          revision: '9ee51ab61065d6c47ce4a8803a3976b4',
        },
        {
          url: '/images/user-signup-man.svg',
          revision: '0725c84c4c32396f4ccdbf96359b82d4',
        },
        {
          url: '/images/user-signup-woman.svg',
          revision: 'ff804f663fe148de973c951c42a6147d',
        },
        {
          url: '/initial_page.svg',
          revision: 'df58b339bac3d2e4699a930bc4aeb761',
        },
        { url: '/manifest.json', revision: '49377dff528b9ba7c1a926a3f5242dd3' },
        { url: '/next.svg', revision: '8e061864f388b47f33a1c3780831193e' },
        { url: '/vercel.svg', revision: '61c6b19abff40ea7acd577be818f3976' },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ response: e }) =>
              e && 'opaqueredirect' === e.type
                ? new Response(e.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: e.headers,
                  })
                : e,
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/static.+\.js$/i,
      new e.CacheFirst({
        cacheName: 'next-static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp4|webm)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ sameOrigin: e, url: { pathname: a } }) =>
        !(!e || a.startsWith('/api/auth/callback') || !a.startsWith('/api/')),
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: a }, sameOrigin: s }) =>
        '1' === e.headers.get('RSC') &&
        '1' === e.headers.get('Next-Router-Prefetch') &&
        s &&
        !a.startsWith('/api/'),
      new e.NetworkFirst({
        cacheName: 'pages-rsc-prefetch',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: a }, sameOrigin: s }) =>
        '1' === e.headers.get('RSC') && s && !a.startsWith('/api/'),
      new e.NetworkFirst({
        cacheName: 'pages-rsc',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: { pathname: e }, sameOrigin: a }) => a && !e.startsWith('/api/'),
      new e.NetworkFirst({
        cacheName: 'pages',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ sameOrigin: e }) => !e,
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET',
    ),
    (self.__WB_DISABLE_DEV_LOGS = !0)
})
