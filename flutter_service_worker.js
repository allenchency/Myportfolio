'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "30e7a96e8c2ab34be9ad97a7cec9d541",
"/": "30e7a96e8c2ab34be9ad97a7cec9d541",
"main.dart.js": "ef90cd1bebc6a9991745a955f19c5e41",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "e3ba0936cce0ed61f1884210da59afbc",
"icons/Icon-192.png": "45ccc3c17e417eb1ae5cf520c65d3f90",
"icons/Icon-maskable-192.png": "45ccc3c17e417eb1ae5cf520c65d3f90",
"icons/Icon-maskable-512.png": "8e7d731479c8e7407e6cc7a4038518fb",
"icons/Icon-512.png": "8e7d731479c8e7407e6cc7a4038518fb",
"manifest.json": "6ac264be45b00c29bd6c3ec497de954d",
".git/ORIG_HEAD": "91771dd34706cdf008e0947a6f8ff739",
".git/config": "5b037ae6db2235801e6cf5b986400935",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/3e/ac245fee4d1adbe97ae3da9706d9547b97b307": "737570cbd4d22bd7fce326e4020344c3",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3c/0e2a3ae40a85baf8b3dd8215b3a8b7363cc4dd": "3b1f40f97033bec5d871e63e7eb7a889",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/91d18a0eee1e2c44193b797c82de7656f45cd2": "a11d39f34c8ec902f09418fffca924f1",
".git/objects/0b/a51cdca5dfeac034c58c5aceaad419f14e8b2f": "ed97f6fb0343d04188beb985901cf161",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/33/f4e554f08fb46c85d6d145ce4d6f92c815b885": "d41d453352007fac819a8ea0797804a3",
".git/objects/9c/8d1659436d83366a7296ac3a74117093337ce3": "bdb0a41335842b2c0888d26d4cb38564",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/ad/94eb1ae72225e0d8a570983c51bacdf81c3d51": "5d85415da965e19f7e237ac4944834e6",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d0/cd9b4d03efa7daff810b5615adc60d2c880897": "ea2e1fa7b75bd8ff3b7ccb9e44c46f55",
".git/objects/be/6ab56f540ec9a3797537ef6942ea8bece7e1ab": "2fcee6cc3964b4fa13f40ace50b4af3c",
".git/objects/d1/74fdbd83cc6fbd7f443416869526ec1d1035b5": "328451c3322af960c602be3b6ce72bb2",
".git/objects/d6/78f967a3a5d0f3072170f4790e78ed0a649121": "10ea213e822acce3562414142010d50d",
".git/objects/d6/b262e88b9246d43652367770a0b802d6db819b": "0a4d837fc0e1a5ba1d5537422cb7b3b5",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/f4/fab32f2cbf88efdd244dc9079f23f0c6556c40": "a8e4f77851d3b453af7d16c0b8c66d48",
".git/objects/ee/815fe6ab1523c1acee8950b143e51a936bd4f4": "3cc2b65fb063abf425a461346fef579b",
".git/objects/c9/a6a9913f897fdb80c11ef63841c06ae8c12a56": "203179ec4bf2aad02b92f250406e4900",
".git/objects/fc/0f322e61617230621468a8090f25edb73110d5": "ecc6495fc2bada51dd28771bea5b58eb",
".git/objects/fd/f198ded65c8458c20550997a047fe4b5734b2c": "27cb56398302c4bc29feae84b1e48b43",
".git/objects/c6/f781fdf1289fb31468229a9a569e1835f2ed24": "bf9284e06377bad00b716dd084ad865e",
".git/objects/4b/a20e8b78df63067001059c0b1f5bc7d8f0794b": "38d7e28915a4c0885106d441500270fb",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/pack/pack-d52717007b1093376ec9e53b4fdf650a1665336c.rev": "5bce2ad31094abbb4217f81ab9a83532",
".git/objects/pack/pack-d52717007b1093376ec9e53b4fdf650a1665336c.pack": "8037ec7c2ccb6ddb4e39aa565b7447ec",
".git/objects/pack/pack-d52717007b1093376ec9e53b4fdf650a1665336c.idx": "9fcab3f0e3747e9e6b6f9444c2e96415",
".git/objects/7c/dde20ee8be6fb9776551a9d979ae71827a6f32": "5f1d5127cd2aa67d87a30973f043be56",
".git/objects/16/4a218a7ef6309d18f56b6fbc042bf8a8995cdc": "7b78469664b6f3dfdd96cbef0feb2c1d",
".git/objects/1f/56867e70c434d8dff86a85ca09e6d942a38257": "27d844aa56b9fd88c276a37ccf62cee6",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/8f/1fdb5674fdcff00690f988fb5beb6c71a58e83": "e597ce689bd3286ff14a19bcf48e78fc",
".git/objects/7e/909c29d60768b69266e69092b065f49c0ad38f": "43f6945e3e26221d90120c1cf801e07d",
".git/objects/7e/556654a8bdb2d0089c3fee6698343eba2ff949": "4f74638e85586f678208c887aedd5a0d",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/19/6cbb6cf2035b68409bd1d7431e1bc3f83a8255": "0505cb1fb5c3db902d43b9ffa16ead36",
".git/objects/86/2cb37e406218bb6ce81693378cdf14d0194e83": "59a9a7818911d070aed2876cf3d413f2",
".git/objects/86/bb971747f241c1ddcd4e1e99efb09988736db1": "173f1c85e49a6e92cf391fc25f68feba",
".git/objects/88/ab03c19cd2efcece0bf0f35d3d0d84c797f1c9": "cdddb7142562fc6e4ebc2b0ecb9aa7e9",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/6b/c7135d4ba1c84199f6bb4e3dd572808f2d1dfd": "b8acf23138430a62ef71f59fc966a946",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/00/4931301a222e083a495e7b7a85b78f361de326": "63123270e3a1b839385d37d0a150da90",
".git/objects/91/904f99fc320e54a97c0f2dd785327f8bb6b59d": "247851c8fd27e446747d4fb351a2c665",
".git/objects/91/b9e7353ddb77c54c78a515e85673afc3fd42d9": "83b65ce945f60fac59ea4ffcfe457681",
".git/objects/65/db694a4dd0e97bcf6353b9a9c39c3b3f718628": "df987f4e9615e93036a4c240f3f6e6b0",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/54/0969ee08f3a51e4e90da9b38cc08abe51d8c89": "3fe4cd98a562bff76fce5e41be97b6a0",
".git/objects/98/6873bcc5d97f539c8c2ce06cdf27d3d8b21cf8": "406bd5ba4d8162f99770a96b7613c9b1",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/52783cf094b50e73db42eb73229b197d8b4df8": "6a45ae36a11e25001a5ac2dc01a63381",
".git/objects/01/d741e19ee02b442a324c2a4aa715da807e4729": "80dc916b20c416fd75d26115a076baa9",
".git/objects/01/4a41db1d173b7dd236100450bac7cc397227c9": "2ed6f33baac711d9dfe03fee9bb9cb7a",
".git/objects/6c/380f467a1ca94b64d753c9fb660c969640e045": "2cebf43cc47176029fff47b5fd505e88",
".git/objects/99/ec5ca85dcd6ce5a25f0227e6c56deafde81356": "43003de637fe8a2c0bfa89d6e5d1a960",
".git/objects/99/7a92b8dae033a6a9402b5bddc6153b2f727c5a": "495acb253ce49cee2020aba33a21e74f",
".git/objects/55/550cca5e68d6337ee5a8cb834e9eebcd6c522b": "f75d58dce5444679475835dd23ea7f57",
".git/objects/97/4c09f959d8e95294488fe516eb1083ffac10bb": "db903ae3fb0fff42283c097799898be0",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/a9/2ba7624dde2cd2a2726c865f97206c5ac33696": "70048fdd61c7a9dea524390f30eb4e98",
".git/objects/b7/3c10165e6062d63cbd49b28047d6164d846c4f": "ac4254b25845b1cd7430d161da1b62fa",
".git/objects/b9/f8eeb32f51fdab1c5a13916e097152e50e2bd2": "aa774a1d07bd142cf28a9ba08efd81e6",
".git/objects/ef/f3a7e21fe5352928ef29e6ce091bcbefb9d765": "c46ca802f53e8ea3d0a2b75ce0938206",
".git/objects/f7/93eda7653398787f6c2ebc462e764cc90c5762": "e53ca0673c5592900b39225fd5c23a54",
".git/objects/e8/5b089f3cfd33f6d5bb29bec11021c890afca30": "8ac15bc340c3a26006c3b792f1574f89",
".git/objects/e8/be66f10e3ea4eb735ef7f215c67662c8e12e89": "e527abdbcf9a3a1b0f62e65df7a7d7bf",
".git/objects/c5/e8cc6c1b76fdf61931aeca2e1aea74c8f84df1": "3cf5a5546c9f8d3fc0182637b8b98f6a",
".git/objects/c5/063d1308c5420da54b866d387da390322bbc91": "1bbb7260d6868aaf2d6df68186a08d65",
".git/objects/46/d55d1440b2b2db85c0c9cdfe32b6488d11a773": "49e04db10a0622a32b0079b6d4bfaf34",
".git/objects/2d/e55e9c9430327c8d65219e458be882460d607e": "e86f424f17f9a6fbcbacede0663dbaf8",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/48/e6a584c36d4bddc8e8166db1b10e182a2f37ab": "497e732c5ed4a6c7112a20e9455c30ec",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/49/5b6652857432e1ad575ab55682bd97529f3dfa": "c7d9d4862fecae9bc56f2cfc67237312",
".git/objects/40/ddea80c3189bbdbee1f21dd3e5ba721268b70e": "75dc30d3102b65a8af48cfb285276026",
".git/objects/2e/164bd0c3c94b0d17b855491b3be93c4a2ad818": "46a966a1acd0fc44308feac58b9af659",
".git/objects/8b/debe9c4dab427b8c0c199a0110614d92467b14": "e68ea2ad2b2ff69c294908004c9ec183",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "78c19e13fc563421cb10249565828045",
".git/logs/refs/heads/master": "bad4c11d10b9ba4372c0223894969ecc",
".git/logs/refs/heads/main": "d693032ffaa0b049162e0a99964f34fb",
".git/logs/refs/heads/pages": "ff357461f3845aab16bdaa85a00f0b6c",
".git/logs/refs/remotes/origin/master": "3f0d19def27c1676deab8ad55f04b716",
".git/logs/refs/remotes/origin/main": "8f73142624f13063f02a2aa4744945d0",
".git/logs/refs/remotes/origin/pages": "7cc442d07d0858404799fa9603b4b4a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "91771dd34706cdf008e0947a6f8ff739",
".git/refs/heads/main": "91771dd34706cdf008e0947a6f8ff739",
".git/refs/heads/pages": "91771dd34706cdf008e0947a6f8ff739",
".git/refs/remotes/origin/master": "91771dd34706cdf008e0947a6f8ff739",
".git/refs/remotes/origin/main": "91771dd34706cdf008e0947a6f8ff739",
".git/refs/remotes/origin/pages": "91771dd34706cdf008e0947a6f8ff739",
".git/index": "c5454155cf5af05aae7bf5ef885c1ce4",
".git/COMMIT_EDITMSG": "a41749b43b7d581bbcf792e00d3401a7",
".git/FETCH_HEAD": "c969062c0a48b8a5914f09e723d8a62b",
"assets/AssetManifest.json": "83aea9dc68f2e7c7528e2508c23acf89",
"assets/loading.gif": "602efadf1bcfb2d6b7ac7bf3c91430a2",
"assets/NOTICES": "f6c78fbbe2cfe232efebc94228c1b570",
"assets/FontManifest.json": "9079600dd6cc1457502d9273b45170aa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "283fd7f9a07e2adabbac0f19471a67e0",
"assets/fonts/MaterialIcons-Regular.otf": "edbf765d7b9e87699670dbe55efc73d6",
"assets/assets/images/vscode.svg": "8900fc07f7024c96d4b23060c0b2520e",
"assets/assets/images/dev_img.png": "d27679167fdde4e72947a81c8cc1fa29",
"assets/assets/images/portfolio_icon.png": "7cb8fcd768c7538bd9c9efd457a0df18",
"assets/assets/images/python.svg": "765c791379b903595864bd5442aab469",
"assets/assets/images/img.png": "71770131d338c94220d419c3f60ced5f",
"assets/assets/images/Img%2520.png": "de2fc45bafda2afb772984e994467fb5",
"assets/assets/images/dart.svg": "bd8a66f420f713220fd18ca3416c13c3",
"assets/assets/images/IMG3.png": "0534b2ce87259a689993662ce6d82f1e",
"assets/assets/images/IMG2.png": "8bfd0aa3fbebd75c32db2bb759fdbcd6",
"assets/assets/images/IMG1.png": "c69693754bf7ac15bc492b7c8c5b00b4",
"assets/assets/images/dev_img1.png": "56929ee66c45d6044bfeb1b150988d0a",
"assets/assets/images/dev_img2.png": "e58c9acfbb21211c403cf301b0d0b9ef",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
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
