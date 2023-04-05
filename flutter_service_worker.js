'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "bfe17f285e6578a80ce2f75b7a452c2c",
"index.html": "b3af0a1de063336959a656d79ab78d15",
"/": "b3af0a1de063336959a656d79ab78d15",
"main.dart.js": "3180d803a76ea1025a9f5622a2b967a6",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "832961faf4a97b6786d60ee9917425c2",
".git/ORIG_HEAD": "f4f97c1961ec0cd186e19290c2d1e008",
".git/config": "6089b17a7fccffb9246e3e0c7a97bcdd",
".git/objects/0d/156a651cfe4e3004289ef23f6c5b7d4d36b350": "fb0abddd81c1bf861974f1787268a4c1",
".git/objects/95/64d6e572b2d46179457ad436bc27726b847de6": "cd1de776d480fc3ad7bdd8bfec0b9235",
".git/objects/95/4c0e32f4a0887f1b83f66d69beb79131680543": "a2e31c9b31a15050f973221b5a10f153",
".git/objects/59/0587415c1ee338196ac4f9258e22705662e4af": "3126dfdfc2dd9ac62c03a47dcd516324",
".git/objects/92/b2668b4046048f91c9db2bafedb22c80967362": "ca724baae4253b15ab3a2931525455c9",
".git/objects/0c/de31885f761d8328cb6a5a9eb9e102ca07e8e9": "d4cfb3e546b3e6297a919694c9bb6240",
".git/objects/66/71878b0bf159f1f9919efb7402ecd397b70a41": "102727b7fe631f699753543bfb81ef6f",
".git/objects/9b/930a3aa9d1b6ec75a9391f9c3077065f994f5c": "2c124230e8b3d50030d02dddeb4f882f",
".git/objects/9e/8f79124a1a284300d2ef3a3be068779e75bfdc": "36867c0d572b470b873ab1ad99e501e9",
".git/objects/9e/e64ab8c9d41b799f0679ae7aae6e2117300e01": "79b7f362247bccb1126ba08a4545cfb8",
".git/objects/9e/673749040a402033383d29076c85f7d3a20465": "dd4e6eecc2b8bae32247a78008803910",
".git/objects/04/d54c651138d700cf0d3a695660cebd0fed2cf7": "01c9d4e6e5fd2fb22fe22b970a7481c8",
".git/objects/6a/5a4e8f11bcae5139c2f3aa9a0eceb7e8415d66": "420f13e2781cb6e6886b1735c1854555",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/35/c092e1e4259e3f7669fc3406da9af7338b80af": "bc119a0dccb3c3ae19d481f2711aba5b",
".git/objects/69/c302ea21174b509055472cfde8ff20e6246fa1": "3c96fc386c9254568ba3cf379beacc1f",
".git/objects/3c/acf6f05755b77e52e311b01ef3eb513e70af63": "b8a0af3213bb5037af649c6fd41343c1",
".git/objects/3c/296d5bb29f04289676e1ef71e2bb0160aa15e5": "1174603bb7f3f73d5a1efee79824cdbe",
".git/objects/67/842f894b8680efedf9e187bb29541ca5701e3c": "5e517e56c847a7d7b8192ef702493d9a",
".git/objects/93/c0661066affc82be8b2de59d872629e657a271": "84db434ad46ca3498bd402c5969823df",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/94/0c8d74af0347f941b452086757bca460a8d4ab": "87190fdc1a33464528486b3be0008e76",
".git/objects/94/5f64fcf38a5b10f491f4d598a215df41250f1b": "75857b41267a89d0cc8ec5616895914c",
".git/objects/0e/d756d879ab9c53db0e751277fc9b9772119cba": "b99e4baddf5765fec05e9aa244e17ca8",
".git/objects/34/0cff0b3aad50f4b9bb13291ebea9b5598c54fb": "9d99cd6ef8c667f0df9fed7cd443cf60",
".git/objects/9d/dff3ae4f01adff5cda37a7d9b9bbf30e49cb58": "11c586d02222c1bc1daeecb3a751e20d",
".git/objects/9c/27fcd9d9f507eb5df97d8f518a4bee3565759c": "9d712ede1106045797e90d634f4ae98f",
".git/objects/b5/34d083d4acb21dda4fae9288838cedcb1c7294": "53482abb83099bacdf0f6a0b34e66402",
".git/objects/d9/fcc95a39938b990de527b88dea90617e62e57e": "1e58a73cb7fbc28c154a062df7808d4d",
".git/objects/d9/faa7c224f00239c08def69009e94ecee78bb3b": "a109a6e175d721f36e972ea8290f3618",
".git/objects/bb/7b9e882eb6183c818fdf9e901a746e08f8c2f1": "f64ef8f8c0a7384f73cde1cdf126d048",
".git/objects/d7/9bc71a30b48b3387e8a4a2bd63c9da53a169ce": "48d3bc2dd7bb6e23f59299f3facfef55",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/df/0c7e7c34a0517a996da07f8a0c17729c2d8c4f": "de9dbf03153f969464635faecedfa196",
".git/objects/da/3018c4abdd5c8f0c613e3c156f8fce802c787c": "df2667e6a1b1bb86ebb30da6967489bf",
".git/objects/b4/1ab30a6fed0ba9937327c15a2a445ac2031ef7": "d8eac4a8d7c4ab4718f55c4989538722",
".git/objects/a5/af44900515f9a8ee86de453367213ba6872c86": "f84a6ede5cf2d6dfd56575163cef2693",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/40aecea00a38d86fe72507eb6e50e21868b306": "62a31a7c22868441f8b48856c2478418",
".git/objects/ab/2f6be9e3cefb0cdeb78ebcbf67d898624676a5": "031114b405f925db58903f1ee006e793",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/25e5193ed3f7dfa565e5a94e336169600b4364": "269b3c39681689036f7320f3913eb859",
".git/objects/f3/77dec7e3f3d57845f353f5aba4defe6211cd4a": "f23c8ebbfbc64732b6e50a9f26074480",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/ba0cbbf4753d070882066af08bd193e2e844c1": "140d6263536f0567c3a3e555784df37a",
".git/objects/c7/3776c946790a449576d5c4baa4f26b3d1e90e5": "4c3d48e2716479088f60f2b2990a90e2",
".git/objects/c7/26ee70c9fc7efba1e02fe5602ea3225b8a2c90": "f9e1b08c48781ad7f3802882db1e6698",
".git/objects/c0/f00168661a72b1ee67989f291839a813aec8e1": "890e1be50e105f80335bb8fdeed06ade",
".git/objects/c0/266f99797c99add19f2680f63cbe848a75755f": "fce56a58101047d0de5e727567f524cc",
".git/objects/c9/64fff3be1190a3d5ebc24ad5700c2beaf11b28": "81545f64374ac491fa26f2e1439c6736",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/fc/03a69551d4a157e61ee0a5f6a1edf4d273662c": "408d1b5b85b0132cf15885e56cc6b210",
".git/objects/c8/8bd0ebce49f80ac2f44e25164c35093d177575": "78f832a2b713294d7138018e6aa4541c",
".git/objects/fb/ba57c8bf09dfa723c2363a6dbed9abba9951fb": "53b7decdcc3cd1cd4b93c2a73929eb76",
".git/objects/ed/6eab322b1686cf8f0722b0435cf770fbcad9f9": "2a726b0c602cb407420de9605b513134",
".git/objects/ec/9576f05bfc08063921d5087b32f3b95a949be6": "cc4c362df8b6079e81af40e40b971573",
".git/objects/4b/76b230d3fb01a99f1a4be41477573e5e258b8d": "9b3d7d8e1268f2c67cb4ea81b790c679",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/pack/pack-d2dee26dc30f9f33f347dbbc25bf6820832b6e5e.pack": "1ad480e7d1df210c1e111091bfa3083b",
".git/objects/pack/pack-d2dee26dc30f9f33f347dbbc25bf6820832b6e5e.idx": "11411d4956229ed3093d05cf0fd320e9",
".git/objects/11/6d828b5d62546a7cb67e46668a0e5da9f5422e": "1cfcb8de13cdc5227ee5aeac06e33a32",
".git/objects/29/f1dade3f1a00f922c681c4488dbebc657ea0aa": "8b705e5399a7fe190f14455c38f18d1c",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/7c/7048102015e345c1dda7ba1ec8d2f75b20eb57": "dcc36602b0a277358f024d1eb8d39a3d",
".git/objects/16/06c1a54bda941a740beaeb0808f82601b28b16": "e1ab7a93cc1333b5c5313b61901b43d1",
".git/objects/42/8c519f38948a3fff6bfd2e579a42591122693e": "e55bb3c919f85c11b56bb66bb8915558",
".git/objects/89/e210a51476bce2e5a6d9a19452624b0e9e1a4e": "a857c0335dbe5aa701cd49a38ba583c5",
".git/objects/89/92318d5bdc4abf888ef9bdafc1cad372fb0a1d": "141d2a34769d7bf7b51394306aef750b",
".git/objects/1f/f6712b7b2eca7acae6770abfb5fd3aca7ac90f": "9c3009e5c2b1a54629314f7befec126c",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/87/423ccaec41a6428d72410198a426eab6f75930": "30f3cc53f244eea8571163b839c85457",
".git/objects/74/85746c2913bb3d2c88837704df2cb24ee6a64e": "b06ee158f4430cd1a5ea89b900e1dabd",
".git/objects/1a/7fd50d68aa36696b4a9fc0eaa6ad52bb2ef610": "53faddc4bf41362f1aca5a5e58b8b67b",
".git/objects/28/318715dbb232bb89a6e64a4afdd12137d0eda1": "2f7d6262af8be2174cb5a3a82005f32f",
".git/objects/28/3c9576dff35c58e9cd46812fc069106c00b3fc": "38615eef9a11a3fab5e6ea14c21e876d",
".git/objects/7b/39624df1db4394510b1737a761312af9c5d2f6": "8ac1d3cd400b18905c25f57c26dbcce3",
".git/objects/7b/ce926926d842565fc67f03c09fbb378944cb62": "ba43048b9cf62f18bf3e5178a4359559",
".git/objects/7b/1f5b24ce2ceee78b8b4446ea32dbcf22180ff7": "38d860e7abec754385dd91e2e934a78d",
".git/objects/8f/372fa753f392e2836eca1f07966a8b1db6c964": "65f6b28ae6dc6962ec89487121035021",
".git/objects/8a/85cae1e2ad87dceb06e928fed87dfbd4ff49f8": "17e1c49ad6c8944481b8ed3921cdaea5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/0e8c650c16d033930da2f493939414f9cf26fe": "1352b60ef69cf380978484f324635032",
".git/objects/10/ee6e98494b146e1017d6f108d59620a1529744": "b3b7013a3b8609305359e3051c2b423e",
".git/objects/4c/b37c44dad879b58b104e87d47e798e3d6ebb36": "327c064adbba5c322e5b14cd5de9dac3",
".git/objects/4c/f2089a01bfb44ff1b0e2f28d51aa19970b246e": "4451bf4d0ea42108ad003120897322d0",
".git/objects/21/54a488be6d517c3b208b8432dfb66a35c1baf6": "5d8f1a3094a62c1889383588cebd5cef",
".git/objects/81/ba5936928e6734f76c83017ac1ff8fcd825880": "3f99bbf5296e793a2024d8be0b0524f0",
".git/objects/86/b8b1a3ee390e49d61bab1559b70834932f89d5": "8df6cff1c6f25c08fd2ae22b0f1ece76",
".git/objects/44/239af5d3710e291c496e2ba32be463632c0653": "ba4750d90fb8d7fedd3c3437d330ebbc",
".git/objects/2a/9572645536ca3c1442d7a4bebef70a97b1f7f9": "077f7552fee5150e2861375732832a3c",
".git/objects/2a/ed9002cd28ef2d2ecce350a4e9fdd6cdc5ea3b": "3356c7aab6d718523ed4b4d862a18bc4",
".git/objects/2a/b88ea532fbb92de9a5996cc1fa8efa0b976c52": "c7e87d12a513bcbcbeb6792ce96a38a6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/0281757e07e272de67c90816294f390ff2d3fb": "25877dc356d9f1f8d9f72213f4869c7b",
".git/objects/9a/7e3129156e34c9336541dab840a4fd1a90ef32": "1e7bc4952967b9e2993bbb1aea610f39",
".git/objects/9a/e62ab871ae916cc681bb9917a734f3eb14fed4": "5488b831b113f82eca6f1cea71722d1e",
".git/objects/91/bf008762de1e7325bdf29d4fc4be2f3f15b419": "613c2ee4c6e46a119fd74687f652da4d",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/65/2dfc0b3a865493b14ee52632cf8a1f7e21f9ed": "f290a2e66881c82b1a33e8f66c47fe80",
".git/objects/96/da07ed8232e01958d62e1fd43610cded9d9508": "0799de61044a42ff9e585e8738d848e6",
".git/objects/5e/b8baf4e3170a12caa5cac3b79b6bfd13f18a69": "d7635aa9d63b45ce0a9e02c6a26f8216",
".git/objects/37/acf9db7feb0eab680db105a40a45f9050ba521": "c000eede253ea073345fa01d8ea7eaf7",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/6d/f46462bd9c640a7f4fcaac88ff77501d3914f1": "7d3b83c39f3dc2193380b0b9e9b38b6b",
".git/objects/01/00c90704f0497f6f4a720be84c0eed286cb564": "3c3f0cdcc143d494588a02ffe4d54de9",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/06/695e9f2aaf7b2e0afc79c38e5f9da3cf86a0b5": "2ffe66f3d3cfb78637154aaa75d51abf",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/97/a4bc76f8dd04d9c0e3c3a18afbedb2c73e54c5": "aeb2bc83cc0be148b377fe51e1eba249",
".git/objects/97/2f7b02615ca7043e3fe8360664d3157f33adcd": "7cf109f2a3122af9e524afea67b544dd",
".git/objects/63/bf4d19f0e5d095c08b114f460f0eba3bd6ebad": "884fe2b91ea53406783d4347b8f8f30a",
".git/objects/63/d80ad45d8905c597fbaaf1da8337931da61e9d": "88796dbc3d5e02f96bb3946f2034e704",
".git/objects/0a/a454c437fdbd077f7af676ddd3aaaba7d1bf54": "e3cbc4bac888b85b1f0691c36b20b93e",
".git/objects/64/5589463dd236559b7c94f79b167745c9690c72": "f18e6b54978b1054253b527a1e0d1495",
".git/objects/bf/310849c93749131f16834b839a0e0a8d76cbba": "97a955a456905549c65c75ce1eb96546",
".git/objects/d4/aeb016df6a2d66270924da059f7da6b09df6a4": "46cb0300b97930cf4f1bfc0b2c8e3915",
".git/objects/a0/424fe9f8ca7577c84470d4ee6b09bd582f255e": "3491f4ebd6aa18cfe75e2789b276919f",
".git/objects/b1/0ac321a57b4d7fdae7db0be2bb9cfa1e52acea": "a9dc724b28d5984082817075a41abbde",
".git/objects/dc/95b5fa74359dffd9161678e10d19dbb830fd9b": "f76a963d1816bde943b70dbd92abe42b",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/aa/3d69e2c1d8929c8896af1228871c915b9e17a9": "e032d29d68495249a15d986764d88698",
".git/objects/aa/8bc8cc99d254550a3aba2e3560d2d605038c6d": "e2594ac61faa57d801c0f42c62cd1154",
".git/objects/af/5ed5a4344728afe9bf3e71940369bc3d5fd7f5": "4b9f5df479a390f03c4b768475220c8c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/c937d5417a66f5508be5ade525ab1bbb8efc94": "5a3cb75f912cb6a7db887749838812bf",
".git/objects/a8/b5342d3d372023d9265c1e30e0fb523cc5a67d": "3dd6c615c90959945d0f62352bad3fba",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/930c12ed610a147c4b3bb14499378e0dab06d9": "cf04438d9559499ca4ab379fa1595df3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/a20a81e6a735011e57d8d2d42ff75f01ad15c3": "a51ee8cc8eb970ea4ddaa55c35ad6211",
".git/objects/c4/bcb6b1be07f215f0d427c94e4b8b7656e69841": "ed60af3ed2aed451fdde952407d49a7e",
".git/objects/c4/2c4774ef2fd32d5cc96e5ddbfe187ca59023bb": "d4ec939f2d77ee888a298e28b3b27244",
".git/objects/e1/cec6dedf18b7b494868ef4545f0972a2400d98": "8f4e2c38dc6f3c3695cdbb7e417eb163",
".git/objects/cd/b7e4462afcbdfe0c2b92ebf8ab4a008db07f73": "71d7a662afdf6d1473c1af6eb8f089c4",
".git/objects/e8/b28126c22ca7993db16bac8f12921115116139": "7b9ce5882ccd8751d4b29f04726973d6",
".git/objects/c2/cdd75cd6a074bef7a776a3a6c9f67ae0305bf9": "d471fcfd9fff10635bebcd72a1612310",
".git/objects/f6/e58f4e8d971114bcaf195292bbcf9d729151cb": "b374f6fb56fc58b286d574080d142548",
".git/objects/e9/2aa835e59016f2dda51a3f458c424be305c669": "13390d9d10ee8a7badf4ad49ac298ca2",
".git/objects/e7/11614947746c694c375dba2cf978dd2efefc65": "bbaf4252bd5bb532fb63400801a4fec5",
".git/objects/cb/0360c79177898286b9fb7aab3757827591c66b": "934fbf73ac07b026bfcb43b6ab4d2622",
".git/objects/ce/6ed91f9c653d5e8bd6701748b5d020a381059a": "60646d21016f0dae089b5ade312851d4",
".git/objects/e0/835be3ff5989f94d309bf8fb6e3e15d8aa4ed1": "5c161b6fb492972c17e713ea2c317243",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/1b/f48d16f2be8297a3455d6533fd5dd1329f1df0": "b59d597dbe13a82a80a71bd14711d7e1",
".git/objects/77/c2b594a005408c4a8cc67dfe8375d00066ec1d": "523fce272f485079e6c0d2fde28ca82d",
".git/objects/77/b877f5d5391a898f9e97914ef47f50a864ba24": "4ced54cf98020790dab5270c8e12fad0",
".git/objects/70/87c2239fd7e8d2b0735f6734707a1d40aa1d68": "8cb1ca399e4a96a572f019931a62d17d",
".git/objects/84/a231e3aebe8f9fa1916e642e25a3edd0233653": "a439d16039d535592e5bc5abe2c88514",
".git/objects/84/f5d3f6799c78edf629896826a4328317e5d7b0": "bdc27cc1101618afe8d1265444600d0b",
".git/objects/8d/8564363c3fd2846bc7b8434444fb6ec18110fd": "f6ed0626767b322015056777c5aad10b",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/dd78f97037732f7cd44fe7cf7e7b419b5d7e5e": "fa2590def2d723ef5f32677a938a3636",
".git/objects/85/825442adb2ed7088e287bcc0ec8d85b68b3016": "7748e3c56576e7f44098b4bc7d594859",
".git/objects/1d/93ef131ce7ece1aeec9f28dabdb2c8375e0789": "1d7b0586fb0e327d7b82ba8311072546",
".git/objects/1d/98f0e5a02cd95c49de73ae6e0510009e32c1f1": "b0a2e08e40c4d1c8b3dd9ec4d96e394c",
".git/objects/71/e379861f7b4a4bf73d79f81a922eaa6b3ff6ef": "763fdfac30cd87f8e50cb04bda86641d",
".git/objects/2e/9e9ce9ce57ac3e48a64788ac000d14ec2935cc": "b294f6a0bab0da5e704d6dbdd7ec17d1",
".git/objects/78/47f2f7da3b51a45672126659b95a0e046d2471": "5c22e521de0ec378b127a647e3864c91",
".git/objects/14/edbad0143e33916c33d5279bc8f1397d3728f7": "79d8c62bf71ae16fae390d2e4a1f768d",
".git/HEAD": "2e315b57043b0a01c10d1365acfe0ff6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "38da33105603c0348b193ef2a2f4d586",
".git/logs/refs/heads/production": "37e1cbb2ab9acde862af6741c6e4eb63",
".git/logs/refs/heads/main": "0c93e888dde92f33d8731e4a6723b247",
".git/logs/refs/remotes/origin/production": "1a63b38da8285505cde5770e692e0309",
".git/logs/refs/remotes/origin/main": "9e47dd28d2dc50e6dce9ccbd9036df3b",
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
".git/refs/heads/production": "f4f97c1961ec0cd186e19290c2d1e008",
".git/refs/heads/main": "18427ae1de7823c18317c5debb0902a4",
".git/refs/remotes/origin/production": "f4f97c1961ec0cd186e19290c2d1e008",
".git/refs/remotes/origin/main": "a91a902bb977e530541227c97580fa0b",
".git/index": "4052388e1d918b9d010b035d8fe3ad9a",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "c790f9c0455fac9cb426b24a197e88ed",
".git/FETCH_HEAD": "53fdde89bfec0302f83610572ab77ac2",
"assets/AssetManifest.json": "c3791d429e671c5bfee222d87aa25979",
"assets/NOTICES": "b1438fa52dd32e52659db44e4a7a3761",
"assets/FontManifest.json": "373f0459fc5ef9490d0d13f3353d2e50",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Filled.ttf": "7a5fe2b1ebc2fc5c427115f66432d063",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Regular.ttf": "8831a49be0df3b786a6898988a0ba8a1",
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
