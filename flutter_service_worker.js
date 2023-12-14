'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "28595e5ecb64b04b63e2b483c29daf35",
".git/config": "13859c9ea32141c5673b7463728fc9e2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "723ac2c97d8de89c2d44684181d21b26",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "88494febaf859685ce7629ab420731f1",
".git/logs/refs/heads/main": "46153f964d8d61bfc12393df1b7d5c27",
".git/logs/refs/remotes/origin/main": "fb3d7489653855b2de7ed7ad688369e2",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/0b/62e441977c4680cdd09bccb8fb474fe5b4f298": "e7ce6ca3178cd0795d92c6a5a110d887",
".git/objects/0f/0ec0e891ccd4c6ad0884a46eb4314147e3c0c6": "e65606b1170a93bdd809d3ff2e3ea331",
".git/objects/0f/3d1db843c89105fd0deefb2271d4ad2a2be612": "e9cabce06c557fc489145c25372d5cca",
".git/objects/12/3cc0b1019d070e05e9612b14f2581bb8d6a774": "31046425c9f2fa2fee6a598938fbec89",
".git/objects/15/ba6049b41911a0ba197044e37875fbaa1e544e": "1d994f0733b0b21f4a7f4c7263fe4a7f",
".git/objects/17/2d03b0784580cf3d41f876cc02d327e2e08050": "a2234128bb14e9426c6ffbfa1fc1be7e",
".git/objects/1b/c084bda63ad3ec6393f117756bf49b5005fe10": "861dcc724e6d8d662b65a5310205d02b",
".git/objects/27/0d4d372c62b9f286bbe226f51e049571fabf26": "5a36e779b5e86610874d444a7ca9bd63",
".git/objects/27/5e3adf1369d227471bfec7c10281c43999c91c": "da020ae5129874eb290fb2b154af684d",
".git/objects/28/ae6eb4b92cb7440f6db1c547d2775ad2a3b5bb": "352e52a767ffb2e27d52e0171162f59e",
".git/objects/2c/95038344e50084778a0ec046d1ae90d2c94dcc": "f0ec2e314a791bde91693ee440332c78",
".git/objects/2e/2e534a819daea469184fce3ec142dd1fe25594": "d44913392b15d5abf2bd26ec571922b8",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/f6262ec735495049b5f648efb8d81aeb55c9a2": "d83874a9122e377f0078302a2f355090",
".git/objects/36/e2d6eccb0186a0a7bc2e592a69289b5bbed45a": "e09e34ccbe186b25b1f21ab7e3c068d0",
".git/objects/36/f67ebcab87da9e79a4dbf5f6c7d9c5e211cfa8": "eaab240cb85fc8a46efbe025f5ee999c",
".git/objects/37/978184cd6f82ed846f64adfb28c4bc8d91ef62": "9672b304821125834dba49feade028c7",
".git/objects/38/2c19ec2cc46dabb0a7c87653191c1d56e8f8eb": "e5797891fc9d3d8b929a8d2eff9ced3a",
".git/objects/38/d56fb31a94ca358913c3705ba18fd4721ce856": "20aaf9c39ed5735443edc7203afca5e4",
".git/objects/3b/dcd2a9af5db095fd3be30ac8bfa953f6bb71b7": "b7d891e1abd407ebdc58c303c4f91edd",
".git/objects/3c/a048338959beff9ecf25e94225a79d75684709": "24b48c7f0547e528b556cccac21215e9",
".git/objects/3e/1cda096c727aa40835e0ebc2452eb45b994aaa": "44181b3b166aa500fabd217b095f1a05",
".git/objects/47/40c9a861821ab05e227d06d8080c1fc4bc6b58": "9207779e8ae9eea1753c72ff832a4813",
".git/objects/4e/63adfc8f1d64af6f06a23481b2ceb7c91429c4": "bd3941721fff3fa6c3c40850ec3f62c2",
".git/objects/4f/3efc618842effff64981af02a39fa88fc2e5f5": "04029739eb5810e0e7477deb8142eb2a",
".git/objects/4f/7682da53a04f4f1330e824d1b5113a0f9d43eb": "c53cec8d89c7b3e8c07462b187eb1eaa",
".git/objects/52/ea8805836f4653ffbbc2cae1663f1556d8a237": "662ffefb89166fa253edd2a5242e197a",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/7ed6de41c7e112c7590a935f3b0414dbbafd0d": "ca6aec76521f89e6e30c4b772b1f2e37",
".git/objects/53/fda56450849c0e374fc5f6b956dc40912bbcd7": "5edcf451380959e05f1e6fc31ba283ce",
".git/objects/59/ab1119f82cf2259c64700e3812b007fb0c53f7": "259a3e55c428488d0bfcfaca4bb1d5e8",
".git/objects/61/9da1110a1e9e3c813c0d55087647a873fbded4": "4b8997506ce5fdb03268b51e0b300347",
".git/objects/64/c667de20e77edc5978a0e89002bd712269f7a4": "7d3b3698ac783f640a281ec02fcb8479",
".git/objects/65/4582a36018b50c9bdaefd761da7638d0e27435": "07e3c67cdbe6cb13ba6fb8aa36c49e38",
".git/objects/66/512966a71dfb9aa6e8eca11fc2b7eeac2add34": "265e6f202fa958fcf1ee8bd2d9c1e850",
".git/objects/67/9bd55e81ba8ec04f74b22946f2abd1df9e3bf1": "b79bf53900e6cba5899368700786ffdb",
".git/objects/69/c412db25ee90fdb8c7caf3dd2b7113fe31655d": "d5becc529b0d955d2873762f8d5cb249",
".git/objects/6f/7e4f53812e18aeafaf341a16fb2e992e777b0f": "dcaa42ed03592f8eabde787790e208cb",
".git/objects/71/20db5df10c9ced1cecf5427996c1def8709b8d": "a0fd7ab0c6bb508abf6ecb5b7ed2f381",
".git/objects/74/12f4f4b71cc33c7262dd86d49f1f8cc5b5d606": "384a706388a54be4fb83529736519e2b",
".git/objects/75/796ac3ace30d2558bb51a779df4081a4e0cabe": "623780ea255fa01d3f792ead56cb1ac2",
".git/objects/77/97f7c6a7356b0d451d11a49925df854c22e978": "1aa892ecd25dc2a457249503f1fe6ea8",
".git/objects/78/1cf6f9b7f3040a52fbadbe3da9e224334c8410": "17135607d7fab5351fb48d6b647b3bbe",
".git/objects/78/42ccc429704556b0088f105115b705d38f2663": "28450f74e2938c7d8b87147ab659e640",
".git/objects/7c/b4a9e3101fea0bff79e2917a1bb8931f92fb48": "c068f966b8fa111247f87801be8210aa",
".git/objects/7e/c06097ff28c485f65074d8b6306ead4936d347": "5351f5aac9032981fa67162ba7f18cb5",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/90/4cc0a4e0bffa5964c136838fd80f56ee350b7f": "3a685057283974ff9e855b6fb64bc08c",
".git/objects/92/f023ffa1ea839df71b95a843dcefc9b8010994": "b9b18d03f4f8c108a9b4342e0bb617c3",
".git/objects/97/3c0d2a121db0bcc3320b4e8d59208856946f74": "a8c1e44a441ef5c153b5b19ca0f44c23",
".git/objects/a5/474ea2ca49a246e6339522629005e84dfe6136": "f19ce841280876cb876bddafd2b9d959",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/ae/436121498787640e68dd80c6561cec8bee5edf": "0e36b6f84e857fa22a1e7009bf499030",
".git/objects/b4/aed622a0fa06e1b5d3d7934bcc67a72daf12ac": "9a83759a2bb7af15bbdd83f5bf74f477",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c2/79e91460e159ee3e880b0c369b64f95b6c85fe": "94b99e7d32bfcccb4e45ff258800a3d8",
".git/objects/c4/afef9d30c71697c3e5463210fb5445001194b1": "6953cd269f2881f5b794d7ca8c6ebd37",
".git/objects/c9/8f63daad1e4caaf0bc560fe705cc9e568f61fb": "36349d554f315c857efc45360858d52d",
".git/objects/cb/8bfda3dd1cabb32b73772a3bf4c06d7a7727ea": "4ce7ad610a9cff5d433af2b22d5a0807",
".git/objects/d0/6a1996b032e9f438fd624c8b2bc9c598335cc6": "3cb634b798f271436def5cdfda13ed88",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/645b75fa1f56e67d1b4198fed7e386d5779b1d": "5564328865984c744b020ff8d8cf3f06",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/db/f2e177341a215197fe89bc9cc68f1e57de224f": "5a2d40d7f2479493820ce50973c10ba0",
".git/objects/df/6792b19e928fa8d165d2e2dd74b944d1c8be48": "a6cb39c3d772f2f0625c4147bec2f4b1",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e6/87027c2aa950cd50e5bcc376ba7fba3279e7cf": "da2bf2d6ef98a3bbba9c12ff58765caf",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/ea/9a23bdf5f74887db271b03678c15923799e819": "981f2ee1c1f86ba832cd0d3d3822cbce",
".git/objects/ec/2f90e257dd887a49c8a61a9fa5b7db60692bd7": "e5cbe0b0fa9afdc1496fdbe4bef6da33",
".git/objects/ec/a8c1605105d730bcb38992ac25cbe66f70b787": "fd2702e66ed6b7375310302e1e64b9ff",
".git/objects/ec/d8e393503531be292070b8109c2ab892f5bfb1": "cf81efbb8dedb5111e350bea7df859b7",
".git/objects/ed/06479b040496044f43a1453ff3ec7ac48e0e1f": "1cbb3035738aea621a047907c942bdc7",
".git/objects/f0/8579cc1120f35a10b3b49bf375c6bd79d90248": "53de1e0fd0ede6276715a2981d403682",
".git/objects/f2/8fb7d0a93ea530bef313fb5b9e07b3dcb1f421": "3c741d5654567b9213712dfc632bff0d",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/ff/9610a73c2f9f57711508b26e402f2c8fd7bbe3": "eca1b7d2b50325ad2c19db1053072cb1",
".git/refs/heads/main": "3f39da1504c4fd239e26f57a0f8988d5",
".git/refs/remotes/origin/main": "3f39da1504c4fd239e26f57a0f8988d5",
"assets/AssetManifest.bin": "5fdf4fdb9efda38b9a89b98844fbae60",
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
"index.html": "907cf704e4871cfdd6df4fb04c655d43",
"/": "907cf704e4871cfdd6df4fb04c655d43",
"main.dart.js": "7cbcde627ecd6796fe2277ee180d0697",
"manifest.json": "ffdb6ce6a8e10038cacde3cfab71bb74",
"paystack_interop.js": "704b7cf55ae4bf43281391c5b5407401",
"version.json": "5efc6662dd6d49de4023e14101af272f",
"_redirects": "ef952d360ec42c652095dfeb72a350a6"};
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
