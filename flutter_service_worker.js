'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "bfe17f285e6578a80ce2f75b7a452c2c",
"index.html": "fb814f0c65dcbf0a1d53dc7254e65fc3",
"/": "fb814f0c65dcbf0a1d53dc7254e65fc3",
"main.dart.js": "c8dbeb1ba6ed4f09095527716b49a275",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "832961faf4a97b6786d60ee9917425c2",
".git/ORIG_HEAD": "c361670e9de38fc4e85d830562aed913",
".git/config": "f307b368032c01661a44554d42c2b45a",
".git/objects/0d/156a651cfe4e3004289ef23f6c5b7d4d36b350": "fb0abddd81c1bf861974f1787268a4c1",
".git/objects/95/4c0e32f4a0887f1b83f66d69beb79131680543": "a2e31c9b31a15050f973221b5a10f153",
".git/objects/59/0587415c1ee338196ac4f9258e22705662e4af": "3126dfdfc2dd9ac62c03a47dcd516324",
".git/objects/0c/de31885f761d8328cb6a5a9eb9e102ca07e8e9": "d4cfb3e546b3e6297a919694c9bb6240",
".git/objects/0c/1629fb9a61931bbf3a5e69ae670c9b4f5e1261": "c4fc6873205427f05056ec7a4b3a86f2",
".git/objects/9e/8f79124a1a284300d2ef3a3be068779e75bfdc": "36867c0d572b470b873ab1ad99e501e9",
".git/objects/9e/e64ab8c9d41b799f0679ae7aae6e2117300e01": "79b7f362247bccb1126ba08a4545cfb8",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/35/176fc13419e2c93bc639ff510f6898f0c09c77": "5a9b1d5de2d3cda8c894140821ed2cc2",
".git/objects/35/c092e1e4259e3f7669fc3406da9af7338b80af": "bc119a0dccb3c3ae19d481f2711aba5b",
".git/objects/3d/3ee4a025d1a1fec87536562b0afd3dfab395d8": "218dfe4f265f5332ac4dc38e673346cc",
".git/objects/67/842f894b8680efedf9e187bb29541ca5701e3c": "5e517e56c847a7d7b8192ef702493d9a",
".git/objects/93/c0661066affc82be8b2de59d872629e657a271": "84db434ad46ca3498bd402c5969823df",
".git/objects/93/350b10fdc15bb6cc677533e9911c5b14dc3838": "0d73beedbb8ce4954a3c00fec546cce7",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/33/aca56c72ddf046c15df6af4291536dfb390933": "64a99d5c9ffa9cf0e7a54e2e14ad9126",
".git/objects/a4/96cfe8bc3dbaf68897ca253c4c3cd440f681be": "96152d272ceec840fd927172ab24bd9e",
".git/objects/a4/b5d712cb031ee32c9c1086dd32674b393905ac": "b5179ddefb40061646576d97c0776f83",
".git/objects/ac/9cc490fb105bd4e7faf413331ea2418be8db6e": "d35d4cf0cb13b1fb6d0d2269f3a0147d",
".git/objects/d7/75500fc469221a0053ec24050c7919ff8bd705": "ec139a63e760f9477de587d2176b7a26",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/b3/da27c63b4acc10eb3753399f0a04038858569f": "063c069c61d3351e7f57ae9017fbc3e5",
".git/objects/b4/1ab30a6fed0ba9937327c15a2a445ac2031ef7": "d8eac4a8d7c4ab4718f55c4989538722",
".git/objects/a5/c5c3cf683ddbfdf642ad1b1cfea81302d8ac64": "b272f091ab27021b1b2951014ada3c3c",
".git/objects/a5/af44900515f9a8ee86de453367213ba6872c86": "f84a6ede5cf2d6dfd56575163cef2693",
".git/objects/a5/47d7530b17547f40e077669375b1875461b335": "9e2b85de372e6f80ffa977145f86f3c4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/379e687e23b21c215fecd41ea4781eadad0a57": "73da2cd62572a01f77bf4169a697c99d",
".git/objects/d8/40aecea00a38d86fe72507eb6e50e21868b306": "62a31a7c22868441f8b48856c2478418",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/ba0cbbf4753d070882066af08bd193e2e844c1": "140d6263536f0567c3a3e555784df37a",
".git/objects/c7/26ee70c9fc7efba1e02fe5602ea3225b8a2c90": "f9e1b08c48781ad7f3802882db1e6698",
".git/objects/c0/266f99797c99add19f2680f63cbe848a75755f": "fce56a58101047d0de5e727567f524cc",
".git/objects/c9/64fff3be1190a3d5ebc24ad5700c2beaf11b28": "81545f64374ac491fa26f2e1439c6736",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/fc/f12f548c1fafde22c18bb2bd70992896b2cb06": "bff5800d1651e6cbe39e1d82cc997283",
".git/objects/fd/8539a43000b2c32c55c4a8d3b07ab693e6cc2e": "a71d2be648f9237dee8a90a00ba98cec",
".git/objects/fe/83fd0343fbc4103d7083106f180900cca41b94": "b32b094f37f031d0d5d6f418978e2d18",
".git/objects/c1/4d763ca32d561e645d1ea4dd5b63cde3602a6d": "850f864383aa6a45df67e558a2d6e170",
".git/objects/c6/769327993c8d31e7d24dcf91c42ae1a72a3793": "143a9637ea0e8018dc9f24b54b2b534b",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/29/9580000f9422681137cf34d3379e9f20b46fea": "6f7c261495c30a161cd5060b61030a9f",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/7c/c157e48f3e26e42259466af34fdc4d782d91ea": "fe5e8494e31d6157804155ff13bc657e",
".git/objects/42/8c519f38948a3fff6bfd2e579a42591122693e": "e55bb3c919f85c11b56bb66bb8915558",
".git/objects/42/9dbe34d01976394e0349927a5da3e262451249": "c95c2ec3b8b0b4637a0797ea2139d41a",
".git/objects/1f/f6712b7b2eca7acae6770abfb5fd3aca7ac90f": "9c3009e5c2b1a54629314f7befec126c",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/73/faa21a7dc9df535578936b7e3131ce43c542f8": "872165774ddbe0660a4055bc46b2e080",
".git/objects/80/25f4e7d5600e1820f7ecdc0bcd61bf0b956002": "a5f529de3a0a7a2a9341517dd5244243",
".git/objects/74/85746c2913bb3d2c88837704df2cb24ee6a64e": "b06ee158f4430cd1a5ea89b900e1dabd",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/28/5d3b3a65eb455d410c3bf31fccc8dbbc8cbdbc": "8f13b3e9424f71d09fc00a1d9e39692c",
".git/objects/28/318715dbb232bb89a6e64a4afdd12137d0eda1": "2f7d6262af8be2174cb5a3a82005f32f",
".git/objects/8f/372fa753f392e2836eca1f07966a8b1db6c964": "65f6b28ae6dc6962ec89487121035021",
".git/objects/8f/1059cda1bd4c287c0afc5290e4ef24c8c7f61f": "f4d38bcdca185461493faa8d32210759",
".git/objects/8a/85cae1e2ad87dceb06e928fed87dfbd4ff49f8": "17e1c49ad6c8944481b8ed3921cdaea5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/f5f5ed147aa7cb8b943c0a7218eacef77eb35f": "b39416f5d212e0e2815eb809881c6855",
".git/objects/7e/08db280fe81d3abd97a205f59233f159df278e": "958d46e88ccec51d5e91e59af79f6398",
".git/objects/19/442c38605310b2ef627bde61a8374b5b7876b8": "e04b5a37e2074f2774bccb0cc9350b8e",
".git/objects/21/54a488be6d517c3b208b8432dfb66a35c1baf6": "5d8f1a3094a62c1889383588cebd5cef",
".git/objects/75/cd7fe0ac0ad1ea2d89fba075d8af645705ea1e": "f631468f7667b62e0dd2b774c0b3caca",
".git/objects/81/ba5936928e6734f76c83017ac1ff8fcd825880": "3f99bbf5296e793a2024d8be0b0524f0",
".git/objects/81/0f2fd0300460115cf605b702b3b9b82b7aac08": "bc0e2443d71f5b36f17697254bff2e89",
".git/objects/81/f8da657f4d111d76b4d2cd5a7411b77310dc0d": "8b8ee3407d538b030f8eb735009c6074",
".git/objects/86/c2506d707297474e38bf043c11c7fdce2f321b": "244583321637978e454f6fc114f558fb",
".git/objects/72/9e6697f25c69e3c00bf46046abf48072825cf3": "42373be2a8efac914937cd389d656f9e",
".git/objects/44/239af5d3710e291c496e2ba32be463632c0653": "ba4750d90fb8d7fedd3c3437d330ebbc",
".git/objects/2a/157f1b69db2ac1c8c0957e4e427a85951fc5a0": "bd577616a56c78e8421402e7ea361295",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/91/9c29a85c029bd256fccbf0b5d4fdfbd7326d9c": "9b611d5d1b6287fe0db6a2ab898d55d8",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/65/bad8e99c530dad63165ec8a99f49d164199396": "6e5131451dfbbec6a852f5e9485430e0",
".git/objects/65/2dfc0b3a865493b14ee52632cf8a1f7e21f9ed": "f290a2e66881c82b1a33e8f66c47fe80",
".git/objects/96/c56148bc1e75bc430c7a0d0b055581fd434fc7": "4c9419a22b96cf36f3497d3b45f4049a",
".git/objects/54/53c7dfafb05ffe109f26226f6acf38540df6b5": "7435bfa9134eb38edc2ea023870fbdb1",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/6d/f46462bd9c640a7f4fcaac88ff77501d3914f1": "7d3b83c39f3dc2193380b0b9e9b38b6b",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/06/0c169791600d96b6c4f96e8bba466eea8c57a3": "251588a157a27cf5d5c7b82cde73ace9",
".git/objects/52/a9515acb35cf1b00abaa3db4f2e71a27073922": "70fdd2a411b7338fbee67f437760cf8e",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/55/43bd85456db70b1fa0e91e6bc091e6c2705fb2": "f4fdd64f65ee47b0029a87fda422029a",
".git/objects/97/a92a5983de45a0bce0d26306aeb0340d891838": "d2be09933cd8c092ecbe332039137a1d",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/63/bf4d19f0e5d095c08b114f460f0eba3bd6ebad": "884fe2b91ea53406783d4347b8f8f30a",
".git/objects/0f/b8c8dce8d8c1db2568c5435911cec70404e5e6": "add7feb2e2e2191044b7459c299ac7ba",
".git/objects/0a/a454c437fdbd077f7af676ddd3aaaba7d1bf54": "e3cbc4bac888b85b1f0691c36b20b93e",
".git/objects/bf/b34b1d678c1de94ad5a4c659a165e3a8018c38": "1eff6aa3b513324b37786ae0a4a4accf",
".git/objects/bf/310849c93749131f16834b839a0e0a8d76cbba": "97a955a456905549c65c75ce1eb96546",
".git/objects/d4/712898bc58f7f7f9778d2a66f4d6877a680a0c": "aa5383db66136f2ff53c4b483f5bd099",
".git/objects/a0/424fe9f8ca7577c84470d4ee6b09bd582f255e": "3491f4ebd6aa18cfe75e2789b276919f",
".git/objects/b1/fd198b7ed73d187ae1e78e239debee418dd6ae": "1ba109bb3c350ea8e38c1a68d6ab0179",
".git/objects/d2/796d285e31d5edae5b9cfcf1f0d869e34dcb74": "86abab73958234496c82a49d4fdd9e54",
".git/objects/d2/4b0468731b328e30d39ec750b88c4ea18d9bec": "604f0fa9dd220215113346b431f4e349",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/aa/3d69e2c1d8929c8896af1228871c915b9e17a9": "e032d29d68495249a15d986764d88698",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/c937d5417a66f5508be5ade525ab1bbb8efc94": "5a3cb75f912cb6a7db887749838812bf",
".git/objects/a8/b5342d3d372023d9265c1e30e0fb523cc5a67d": "3dd6c615c90959945d0f62352bad3fba",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4d7a9d5ba44fac0bb5262873dea269388330b8": "28ab812798ebc791c70ef7f226ec9333",
".git/objects/a1/930c12ed610a147c4b3bb14499378e0dab06d9": "cf04438d9559499ca4ab379fa1595df3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/8625aabddcec36555eea1dbb95a0bdcb466790": "a28390bb51421cd32bc32e8eb3109a67",
".git/objects/c4/2c4774ef2fd32d5cc96e5ddbfe187ca59023bb": "d4ec939f2d77ee888a298e28b3b27244",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/4f50f7d47aafcc49fc99e12b4a7351358b2752": "a46342e61ff52674aa219c2927eae5a2",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/c2/cdd75cd6a074bef7a776a3a6c9f67ae0305bf9": "d471fcfd9fff10635bebcd72a1612310",
".git/objects/f6/7448dd91331a34a0125e9b0a61aa24a4aaddaa": "4f3ab395605a9a21091e2d9938d38955",
".git/objects/e9/2aa835e59016f2dda51a3f458c424be305c669": "13390d9d10ee8a7badf4ad49ac298ca2",
".git/objects/f1/6b586918ae57b838e8c23711d7ff36727d69ca": "75d81a07f217b8831742764c638708b6",
".git/objects/f1/ef8122c0a7b63193656297a4d672c891941c68": "595cd49acf3483937fbc7e2366d5c033",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/3255fd5fde7d1d8b42bc858c2985dbe814e886": "fbd165574e2732e7d6512d37f244b755",
".git/objects/2d/fe569283897901589d17d7da7bd67c3f080067": "05b72fe09594e7a880a5f3eca0976b93",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/77/e5b8fa179ea0e53fa5a6c518ef200d89e1c3d5": "a235a362da00f68d8c0c488e82d1d4e4",
".git/objects/48/d70bbb8ef959610e5a6c6329a8f28c44bab8e7": "cf2a7836aec4631acd5c505838927770",
".git/objects/4a/44cae4cbc9476d8384ec695624a7ccba960368": "86b8762e17aa11d388d49b0f1d8817b7",
".git/objects/4a/23e7938f392121c0cb344c4962ce99e6f98851": "3c20aa1ea2e0fa7d42eefad1cdf1e11c",
".git/objects/4f/2420aaa74633dffda00a39b681e7ba775ba5bc": "1bc6a9641a786f5d3f3a1d89a557d269",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/e856ba150da50958ea186ccaeee0ea5c8f40b8": "c38368d794f2f2ea0a8a8e7c15c100f1",
".git/objects/12/4e0c074982be7bc9659f77456b9477d2f4ff29": "7980b40da5af68adcfc0d15d91dd79d6",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/dd78f97037732f7cd44fe7cf7e7b419b5d7e5e": "fa2590def2d723ef5f32677a938a3636",
".git/objects/49/e530e43da7db8e94eaa3e3aed7afe1ce6bfa28": "53c9b6f317922943393e5e279920bf8b",
".git/objects/40/af80d8486eeb8915cdaa683f614bcc90f90e60": "ccf9f1fa6d8697a36bdaad716a45c090",
".git/objects/40/79659104922dc0e2c143ca25128466fe0de301": "89f5028bd4464b9251178851866e5eb9",
".git/objects/2e/b0a2ad77af416d688270453cb6445dc801110f": "e499bd397d59ef909fe66cfad5e911c5",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/47/46ac3c8632c3630f7fb496152793d112928ed1": "c736f51f4ea90597972895ab0bd72a4c",
".git/objects/78/47f2f7da3b51a45672126659b95a0e046d2471": "5c22e521de0ec378b127a647e3864c91",
".git/objects/78/0faf2fefcecdcc690abc6e9abb575927b90bfe": "1c2782f99b012de86d0c8e12ea848ae0",
".git/objects/7a/5024d933ec0b32b00512118da737e358d510a4": "112b79c1003012a3fb13ba33f01ff7bc",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8f216acf2aee1f4f99598e54eacbac54",
".git/logs/refs/heads/main": "8f216acf2aee1f4f99598e54eacbac54",
".git/logs/refs/remotes/origin/main": "af3a4490153e6555e9d9213e520ebc82",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
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
".git/refs/heads/main": "c361670e9de38fc4e85d830562aed913",
".git/refs/remotes/origin/main": "c361670e9de38fc4e85d830562aed913",
".git/index": "8a2c4cc51bc3539ae85dba1688f8488a",
".git/COMMIT_EDITMSG": "28a0a67bfe53da97bf184f92898ab6a9",
".git/FETCH_HEAD": "842102f10528a1ebad5826f5b756b952",
"assets/AssetManifest.json": "a64299cc01aee98eeea623226f659b2f",
"assets/NOTICES": "0a80d26a05ab654e2f674631a2c6f92a",
"assets/FontManifest.json": "46f2283eb233db71ad0095ea7573c0b7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/flutter_login/assets/images/ecorp.png": "24e80e9441acf073076893cebbe60ac0",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Filled.ttf": "7a5fe2b1ebc2fc5c427115f66432d063",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Regular.ttf": "8831a49be0df3b786a6898988a0ba8a1",
"assets/packages/sign_in_button/assets/logos/google_dark.png": "d18b748c2edbc5c4e3bc221a1ec64438",
"assets/packages/sign_in_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/sign_in_button/assets/logos/2.0x/google_dark.png": "68d675bc88e8b2a9079fdfb632a974aa",
"assets/packages/sign_in_button/assets/logos/2.0x/google_light.png": "1f00e2bbc0c16b9e956bafeddebe7bf2",
"assets/packages/sign_in_button/assets/logos/2.0x/facebook_new.png": "dd8e500c6d946b0f7c24eb8b94b1ea8c",
"assets/packages/sign_in_button/assets/logos/3.0x/google_dark.png": "c75b35db06cb33eb7c52af696026d299",
"assets/packages/sign_in_button/assets/logos/3.0x/google_light.png": "3aeb09c8261211cfc16ac080a555c43c",
"assets/packages/sign_in_button/assets/logos/3.0x/facebook_new.png": "689ce8e0056bb542425547325ce690ba",
"assets/packages/sign_in_button/assets/logos/facebook_new.png": "93cb650d10a738a579b093556d4341be",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/imgs/shipment.png": "794fcf9b0039de96ae2a4623e42415e0",
"assets/assets/imgs/offer.png": "bcba8433940284801ebc356f591f31a0",
"assets/assets/imgs/cart2.png": "64055ce99f0c846e54593eaf8036d47e",
"assets/assets/imgs/cart.png": "9e83402b35a81ea0dd3d71aa6783fd60",
"assets/assets/imgs/label.png": "75e6025ab6894511810c1407d2dec78a",
"assets/assets/imgs/shirt.png": "a50c8d59f5acbb5054342dad35cbf133",
"assets/assets/imgs/basket.png": "461e3f8aad1709d2181407f692e01771",
"assets/assets/imgs/avatar.png": "b6dc52574852dc9fa67d4c95825902b5",
"assets/assets/imgs/laundry.png": "99fc79646e4202b636380337c69e0b32",
"assets/assets/imgs/iron.png": "364950440cf81b879bdf8af5563df531",
"assets/assets/imgs/bill.png": "34f4ee61662ac958274ddc8534db220d",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
