'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5fdf4fdb9efda38b9a89b98844fbae60",
"assets/AssetManifest.json": "6a1c8f3a21a7a1d936d6724d8170bfc6",
"assets/assets/icons/admin_black.png": "fc8a38073d3696efcbcad2854df19e3c",
"assets/assets/icons/admin_white.png": "1bcf5dcfbb7bcda427fa44f21f56f743",
"assets/assets/icons/facebook.png": "8c89ef8ab45d47ae9a954822532889f7",
"assets/assets/icons/instagram.png": "4a8c23476a7c20c5bee2a752a6f96e9e",
"assets/assets/icons/login.jpg": "09fdd2c983ab3055054088067296cce1",
"assets/assets/icons/logo.jpg": "c9ae363964ee47160354757458d4d035",
"assets/assets/icons/mail.png": "db3921367084308347fcbd09111c7ef3",
"assets/assets/icons/register.jpg": "4057bf75b7a98546a6e579df537f3d42",
"assets/assets/icons/twitter.png": "3e8e7ee8666a9f4e2946f39ff2f806e3",
"assets/assets/images/%25E2%2580%2594Pngtree%25E2%2580%2594dynamic%2520wavy%2520liquid%2520shape%2520_1157589.png": "df5af1318e9d710b92187b68af3afd9b",
"assets/assets/images/about_us.jpg": "55ea91ffa358375cb726766d07e7cefa",
"assets/assets/images/error-404.png": "13d982a0c5611d736e3a627474bbd8b9",
"assets/assets/images/how_we_operate.png": "5194ca769138eb3a40231ac523bae64f",
"assets/assets/images/landing_image.png": "c095e02e18621e52dc9f3b32881e3c5c",
"assets/assets/images/why_us1.png": "3db6dbe02d1dad5aba8856650d228c00",
"assets/assets/images/why_us2.jpg": "5dc8c9a134214bc689d4673292a4c26f",
"assets/assets/images/why_us2.png": "16a0100df08833312bdbcea03bf8d2a4",
"assets/assets/images/Woman_With_Self_Card.png": "485de141885a6210f0f3779c201afeaf",
"assets/FontManifest.json": "58410749bacb2e28e1bc1d2b18181f04",
"assets/fonts/MaterialIcons-Regular.otf": "6f524d2854da2b47e5526242e0976789",
"assets/NOTICES": "35a8a1d3f6cfcbb8c9432ed1c728bcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_devicon/fonts/FlutterDEVICON.ttf": "20e50df99a2adaab0678501ffb5c81cd",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "edee633b3ad707e7db617054cfac01ff",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "6a3cad2910fd0cb4ece215be358fd337",
"icons/Icon-512.png": "84a82143b530e3161637131b91a8c889",
"icons/Icon-maskable-192.png": "6a3cad2910fd0cb4ece215be358fd337",
"icons/Icon-maskable-512.png": "84a82143b530e3161637131b91a8c889",
"index.html": "334c2fef39f964d8cdc077ad13c405e5",
"/": "334c2fef39f964d8cdc077ad13c405e5",
"main.dart.js": "e12fe501af61d59fc0e7e63cbdcd8c2e",
"manifest.json": "ffdb6ce6a8e10038cacde3cfab71bb74",
"paystack_interop.js": "704b7cf55ae4bf43281391c5b5407401",
"version.json": "174ba2c6856594f99f290a8e42aec264"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
