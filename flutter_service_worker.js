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
".git/index": "9da71656e6d534f241890be8808dd436",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "50e0e1f006e30cf0d9e9b10cdb5a2627",
".git/logs/refs/heads/main": "3bf53e6b08cf36619d361257a5a608bb",
".git/logs/refs/remotes/origin/main": "d4677bb62dbbd8a414eb4eb040e1a0b5",
".git/objects/01/906d715290f7c8258b2176206cf3d398aac4e5": "2380184ad78f032b88fb6d057094ca91",
".git/objects/06/5ef5ec811cfb2e6ed4ca1dfac26d57418d4e70": "6362ab55bfdb098ae903ef9500350de0",
".git/objects/0b/4b4cae84de89522703c1cca0a4efccf8090a90": "911e12c3951252c060ff177b30b19ba8",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/0b/62e441977c4680cdd09bccb8fb474fe5b4f298": "e7ce6ca3178cd0795d92c6a5a110d887",
".git/objects/0f/0ec0e891ccd4c6ad0884a46eb4314147e3c0c6": "e65606b1170a93bdd809d3ff2e3ea331",
".git/objects/0f/3d1db843c89105fd0deefb2271d4ad2a2be612": "e9cabce06c557fc489145c25372d5cca",
".git/objects/10/daf8c871c221cce434fc6ceed849a3f948337e": "07517f990b979fbfe2847b908a5cbe37",
".git/objects/11/244edfcf8492884fec09abd80ff624d4548467": "e15f10eb1d4e16a28e173d6cba544752",
".git/objects/11/c024196c35de4ddce6640ce34ad036d91741e4": "14349c5e9402326f6426cc39778d6c90",
".git/objects/12/3cc0b1019d070e05e9612b14f2581bb8d6a774": "31046425c9f2fa2fee6a598938fbec89",
".git/objects/12/5b79d1a4788225eb0a1f3e6382853d87ed6f6d": "cb6a4cb030842009b7cf5651f6c30344",
".git/objects/13/7f77cd873d456cafe51d755f7f38fbce2b8b17": "b74e4c25f7ab52e5baec479f7be6dfd2",
".git/objects/15/21167e01d179d1c7ec9e2995f6b12cabc85f71": "df66f8018be520a065c6ed89cc18bf42",
".git/objects/15/ba6049b41911a0ba197044e37875fbaa1e544e": "1d994f0733b0b21f4a7f4c7263fe4a7f",
".git/objects/15/ed0401e70d57e266fe14c7e835fb109fd08cd7": "aced300eca3c1b409b285fc4d59ce260",
".git/objects/17/2d03b0784580cf3d41f876cc02d327e2e08050": "a2234128bb14e9426c6ffbfa1fc1be7e",
".git/objects/18/5b418c900c5388e0911b95e4d2ad2656463bbf": "f37c22298a4f4790f0ed7f2fc7c86a1f",
".git/objects/1b/c084bda63ad3ec6393f117756bf49b5005fe10": "861dcc724e6d8d662b65a5310205d02b",
".git/objects/1d/d92e4b96d2ec83f16d94c903a000f8d1e5cf86": "4b6fa7da7d0bf2a7b251c1ea69544d43",
".git/objects/1e/01a74ebbf3f55b3ad6a12e5d60ac7ab064c39f": "44576fce94cf169ac1c875a115091740",
".git/objects/1f/6d2b9713f4b9f557c983fb09836e181166931b": "518230a7c06b249dc8ac1647e79a6df4",
".git/objects/1f/88b96e31fbb91fb3eb80ea874dcf6b7444fb30": "88dfe0ed36cf7e122e3be404835ee0a8",
".git/objects/26/0d4e7858fd9d4bb3532c2c91ad71a0b1a59ef5": "85fa764970f78099e19d3e12bc8a1067",
".git/objects/26/a34bfceb82c938c1314edd2cbc60c50417af5d": "f176ee6dc44900c3801eb6f7385739be",
".git/objects/27/0d4d372c62b9f286bbe226f51e049571fabf26": "5a36e779b5e86610874d444a7ca9bd63",
".git/objects/27/5e3adf1369d227471bfec7c10281c43999c91c": "da020ae5129874eb290fb2b154af684d",
".git/objects/27/95721ef7a4b2e6c221f3417accf075a81ddcb8": "a069fa7c10e833950343e32569c7ca66",
".git/objects/27/e7928f157bc076de3259269dc9b154b4aa6dc6": "3e07a6968be463775ca3810997539ed0",
".git/objects/28/81ac8390644a1fb50c091247baea6ea0a2b128": "23d2f589c9f905bec3980d6543afbddc",
".git/objects/28/ae6eb4b92cb7440f6db1c547d2775ad2a3b5bb": "352e52a767ffb2e27d52e0171162f59e",
".git/objects/29/1ac0bcfafcaea4845886849a36bbf6d401db36": "463ad74e2be89801dea724449633efcf",
".git/objects/29/e974b4be3829a124ccbb358be4c026cd57ae94": "3e984d96c5ddbf12c9b32f35967a7efb",
".git/objects/2c/95038344e50084778a0ec046d1ae90d2c94dcc": "f0ec2e314a791bde91693ee440332c78",
".git/objects/2e/2e534a819daea469184fce3ec142dd1fe25594": "d44913392b15d5abf2bd26ec571922b8",
".git/objects/2e/751a00ccc66ed1f802e8bc0133ccac2b984633": "9cd1da8c9aae4e72db827abdc0578b92",
".git/objects/2f/e93b7aaa59ddb79b0805c3e9527bf5c9107bdf": "9a812cc183ec7f5333a8f88581bde0fd",
".git/objects/30/1cc3df77bee255b7f12be3d1563a0fdc0964fa": "473b479b2923cc3624f4fe2bda912647",
".git/objects/30/c4f7f7d5b03383df0ce503aa390ce8ee553c65": "f02faeb84ff6daf03f4406c0a3b34aa5",
".git/objects/32/6bcc8ba7542594ab769e00eec9516ed82c86af": "cb9787e69bddd467365c18614d1ff77d",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/bc08f0852c9cc9596b463f0dad9e8fd627cbeb": "25de3e183afd23c3bae131168c9249a0",
".git/objects/35/f6262ec735495049b5f648efb8d81aeb55c9a2": "d83874a9122e377f0078302a2f355090",
".git/objects/36/e2d6eccb0186a0a7bc2e592a69289b5bbed45a": "e09e34ccbe186b25b1f21ab7e3c068d0",
".git/objects/36/f67ebcab87da9e79a4dbf5f6c7d9c5e211cfa8": "eaab240cb85fc8a46efbe025f5ee999c",
".git/objects/37/978184cd6f82ed846f64adfb28c4bc8d91ef62": "9672b304821125834dba49feade028c7",
".git/objects/38/2c19ec2cc46dabb0a7c87653191c1d56e8f8eb": "e5797891fc9d3d8b929a8d2eff9ced3a",
".git/objects/38/9bcf137c88734374362ebc23907c726e3f0e9f": "7935c2252f4362284fbca9bb6e02471e",
".git/objects/38/d56fb31a94ca358913c3705ba18fd4721ce856": "20aaf9c39ed5735443edc7203afca5e4",
".git/objects/3a/cac6a4b0af4a59122790e0222bc0e46bc95b12": "36c122fa6270afb15b3aa4df9acb3b5e",
".git/objects/3b/dcd2a9af5db095fd3be30ac8bfa953f6bb71b7": "b7d891e1abd407ebdc58c303c4f91edd",
".git/objects/3c/a048338959beff9ecf25e94225a79d75684709": "24b48c7f0547e528b556cccac21215e9",
".git/objects/3d/60372f98e961c1a02d6b6d55ec192412e61546": "b678ca3ed46f35bd72b139540a593581",
".git/objects/3d/6c9270bf32ce9e0b5f1f03f1353935232fc02a": "20fbaddda2f33f3df6ca59fe692f0bf5",
".git/objects/3e/1cda096c727aa40835e0ebc2452eb45b994aaa": "44181b3b166aa500fabd217b095f1a05",
".git/objects/41/03ee59e5877d858db086dbace6dd14bd6558dd": "145ca374243f09c358c01ad6570222f1",
".git/objects/41/5a847896dd14e71c3a0724fb7c105f9ffde9bb": "e75d7d74aac373d73d007fc0789d86ee",
".git/objects/42/a5638bbfa52c6ff4c1af290fc89174d593b06a": "439be7e642a1e4385548959db7ea9df2",
".git/objects/47/40c9a861821ab05e227d06d8080c1fc4bc6b58": "9207779e8ae9eea1753c72ff832a4813",
".git/objects/48/e99a89eb1b666a311d54b5258e663a4fee06c4": "7a56282fc0de1da82d0c200c2a9c4db7",
".git/objects/49/4fabf0350893ce253a0addb68dcf9524fffc21": "991eeefa0c54bb94efdf81e7c2ce92b1",
".git/objects/4d/53ebe00c58b5a8a60c4bb0f3280dd94f74fb9d": "8985146f433a5ce4512c8dea866badb4",
".git/objects/4d/68fa2b02b9c22e55056d9a78d034781ad10c7d": "443b686cf8842802fe4e9f39105ac9a5",
".git/objects/4e/63adfc8f1d64af6f06a23481b2ceb7c91429c4": "bd3941721fff3fa6c3c40850ec3f62c2",
".git/objects/4f/3efc618842effff64981af02a39fa88fc2e5f5": "04029739eb5810e0e7477deb8142eb2a",
".git/objects/4f/7682da53a04f4f1330e824d1b5113a0f9d43eb": "c53cec8d89c7b3e8c07462b187eb1eaa",
".git/objects/51/3d8cd94030a560f5ac7552193d2357dfa64366": "b9fa59d2176f718dd40457a86e433fc8",
".git/objects/51/8157be114203a9458fcda3e1474b8751085052": "41438550a816de756c3dba61932c7b58",
".git/objects/51/bb429958811cb10903f4f561339177048909a0": "1ad84ed9839424ce0c720feb95456958",
".git/objects/52/7116d42b6b5e44da435a9775c48d7da500c788": "c387e09cde51060e0a38de7678412198",
".git/objects/52/ea8805836f4653ffbbc2cae1663f1556d8a237": "662ffefb89166fa253edd2a5242e197a",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/7ed6de41c7e112c7590a935f3b0414dbbafd0d": "ca6aec76521f89e6e30c4b772b1f2e37",
".git/objects/53/fda56450849c0e374fc5f6b956dc40912bbcd7": "5edcf451380959e05f1e6fc31ba283ce",
".git/objects/54/df0457e5a42482102bd24ab6208a8d2a10309d": "0ff9924af4e9d2366140c4fc4de02120",
".git/objects/56/1cd16dbdf6f5a203dc62889c8aeee233f7dc8b": "7079b70855df1a8a7e8264d0d445e271",
".git/objects/57/8f78be694f7a5514d985c9c201e6ae1fab417e": "080ac26e84347bf2ee78c889fa440a65",
".git/objects/57/baecc687ae7c72541944243f659a8d0b613bcf": "0eb58dfa6da7c27d2b2ee8b70f0a56fb",
".git/objects/59/ab1119f82cf2259c64700e3812b007fb0c53f7": "259a3e55c428488d0bfcfaca4bb1d5e8",
".git/objects/5a/8f2e8069112001d4928856cf812468dbb97de0": "5aa49a611958d13cab5688c31e35a115",
".git/objects/5b/80b29ae0cc7455e9dd1558ece1189c4d4207ce": "c56715f19110f3fe9550fe62b4e80862",
".git/objects/5b/c090214ca423de9175b99cdf875e989c6fc42c": "de234a6b382f61f23922826ba207a938",
".git/objects/5c/54f167eadd28158c2c3472da1c5e96a84c4b07": "5a6918cd165a949aee4fb768ffaf307c",
".git/objects/5d/66dfe88b12a03b176e76244dfcb801d155325f": "71bb23deec62048a869cfa3fe83b1f03",
".git/objects/5d/bc11f7ec53233783eceaaffa2ac58d79cbe248": "61ae6858d312865da9efcbef78c9e60d",
".git/objects/61/9da1110a1e9e3c813c0d55087647a873fbded4": "4b8997506ce5fdb03268b51e0b300347",
".git/objects/62/150622c98a638486519217b5f044301f2a0985": "a73631aaec771469616c64c17ed78080",
".git/objects/62/2a2caef35a6c48ea9a86e3f7b41751f109b14e": "17cd55285d746b46b10b4c24e20dca72",
".git/objects/62/7bf7b383a145ebce16136570cb4047653583dd": "f049dd38ecd59e37e4b647085a7f72bc",
".git/objects/64/c667de20e77edc5978a0e89002bd712269f7a4": "7d3b3698ac783f640a281ec02fcb8479",
".git/objects/65/4239bf683ffe6abae0231ae1633049e8512750": "09ee93a5b832801e74ffddb9bcfabb00",
".git/objects/65/4582a36018b50c9bdaefd761da7638d0e27435": "07e3c67cdbe6cb13ba6fb8aa36c49e38",
".git/objects/66/512966a71dfb9aa6e8eca11fc2b7eeac2add34": "265e6f202fa958fcf1ee8bd2d9c1e850",
".git/objects/67/9bd55e81ba8ec04f74b22946f2abd1df9e3bf1": "b79bf53900e6cba5899368700786ffdb",
".git/objects/67/d6b9ac6e06ba0111745a1157dd461b9eb42d86": "a93dcb1eaf4447dddcafceb719bda0eb",
".git/objects/68/3d2866385ecbf0b34ce70c40b7b206bc16275d": "7541dfbbae799fb93d32796229d8be22",
".git/objects/68/aabdf5abc16f0768bd5cdad07859a8f9658802": "6db759efa7167458fd8ede3bd415f1bf",
".git/objects/69/10326e213a6a9132214d81b33fae7bf1ab1e6e": "5e57dcaea035babb8813595aa4fb0282",
".git/objects/69/c412db25ee90fdb8c7caf3dd2b7113fe31655d": "d5becc529b0d955d2873762f8d5cb249",
".git/objects/6b/98e7bfe260aef344177312868bb674e6ab41d2": "49e908efe78d28a84e512ebeab38bbf9",
".git/objects/6f/7e4f53812e18aeafaf341a16fb2e992e777b0f": "dcaa42ed03592f8eabde787790e208cb",
".git/objects/70/f5bddac7aff1d3beeb0d7f8730c87177059530": "4c453af474dc71248bb4dd9fefc97d82",
".git/objects/71/20db5df10c9ced1cecf5427996c1def8709b8d": "a0fd7ab0c6bb508abf6ecb5b7ed2f381",
".git/objects/73/b8020054e136e51f72f2bcfa22637b9e175e04": "ee588aa1e17dbb400c80512473514379",
".git/objects/74/12f4f4b71cc33c7262dd86d49f1f8cc5b5d606": "384a706388a54be4fb83529736519e2b",
".git/objects/74/89caad8413365516ea0f39f4573f66fd5f62cb": "cdcd42b1b1e114e09eb6e49406c95a0e",
".git/objects/75/796ac3ace30d2558bb51a779df4081a4e0cabe": "623780ea255fa01d3f792ead56cb1ac2",
".git/objects/77/97f7c6a7356b0d451d11a49925df854c22e978": "1aa892ecd25dc2a457249503f1fe6ea8",
".git/objects/78/1cf6f9b7f3040a52fbadbe3da9e224334c8410": "17135607d7fab5351fb48d6b647b3bbe",
".git/objects/78/28e6bf092deddc3dd6438cab73a1def9be2ff1": "9c1339e49e0bdf0147740c67ef850e54",
".git/objects/78/42ccc429704556b0088f105115b705d38f2663": "28450f74e2938c7d8b87147ab659e640",
".git/objects/78/4c238095e75ee2bc579f86eb5a7dd4de392ae7": "51abae3f35e6a79d9c7037346379fac1",
".git/objects/79/dc5c0bf23dea363eedf6000d74eb4eb8c34478": "688a28b4fe73f46d882854c26dbcd2d9",
".git/objects/7b/607abccffd9da035f180a5abab711404e828ea": "786d752740745446c2c5970b6e98081b",
".git/objects/7b/761eb3578d46f701fdbf0c24128219dd39a035": "3dad8d2b8d24394880df852633510e7a",
".git/objects/7c/b4a9e3101fea0bff79e2917a1bb8931f92fb48": "c068f966b8fa111247f87801be8210aa",
".git/objects/7c/d85486f552978e150c96af2c6e8ecedb510cdc": "27d7a6a61aab36dbf43bf82f0d65d90a",
".git/objects/7d/0a5429838c9a4ce1faeed01fd838b3967fa1b6": "bf46502cb102307b39f56d2b41e3865d",
".git/objects/7e/215d60611da043cc1e2d141e77d01ba7ccbf5c": "7a20d986fa523cce67e4ab1f96b48ce7",
".git/objects/7e/377cb952d71172ffe9da3e7e0206902dda3ed2": "d8267ac59ba375dd44e49a2ab3a2c280",
".git/objects/7e/c06097ff28c485f65074d8b6306ead4936d347": "5351f5aac9032981fa67162ba7f18cb5",
".git/objects/82/6d119031d564d4701b421210e285d2d3c583b6": "1b9c1d34d7dc5738b89e18fd1e6f9d07",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/83/15709d1917433bd55538f2fb08aba4a41a8d19": "8925f0f42f3d86d418518740cf94eac9",
".git/objects/83/322b4814c6cf1577766c686e808ff61abc1da0": "3b89f8169f3673a439fe17d04c9ec8e3",
".git/objects/84/d74311c90873d2b07ea3c8b1bd2efa87eb77f4": "5191dbbb09087bff2a67e8f54a1c8269",
".git/objects/87/04ace805109a1d51ff300708b4c481f8ed8ff5": "bcfa1e9bce3d0c911f6a573b4f1d1000",
".git/objects/88/4117222c8596434482f9a3f23751f69a4cd490": "0a1e070f7900752eb30d5b9d0584aaed",
".git/objects/89/caf9b8eb531ac7d37ecba30500cb7806b4fb12": "e8c8244a3ef988c1b157f9614f2b9adc",
".git/objects/8b/e6972d1e470366fc82f6850ee61f496922fe72": "5210e8615a328a795a2207bbb21f1ad6",
".git/objects/90/45b6f9db5f3a1225898e525959729f8b818015": "af0ae8d91805326d7ecfcd8fa117cb89",
".git/objects/90/4cc0a4e0bffa5964c136838fd80f56ee350b7f": "3a685057283974ff9e855b6fb64bc08c",
".git/objects/92/ca575e293190dfa5333acfb3c3942a40f46e47": "a6d3efb55e865e8ecaea66daae6dd0c6",
".git/objects/92/f023ffa1ea839df71b95a843dcefc9b8010994": "b9b18d03f4f8c108a9b4342e0bb617c3",
".git/objects/97/3c0d2a121db0bcc3320b4e8d59208856946f74": "a8c1e44a441ef5c153b5b19ca0f44c23",
".git/objects/97/ec24447210d82cb05e39f08928588f1b1be491": "1253bf24884b96a1bd575fea97788f3c",
".git/objects/98/177cde2782d2b4baa0853b48330351c213d754": "9a3a4103ad2ca52d76f76ad14b44728f",
".git/objects/9a/08fdd70b0a8bb75b16b1ab1d090882a4e2d797": "f4a53dacb679d24df8cc657e0e8d26e2",
".git/objects/9a/89ab981aaf7770e3cd08e391eccbcc99cdb6d9": "2fda2e15120747bccef35bf661b6b246",
".git/objects/9b/2784d0d606521ef1c8d0a0bbc0a9ac04885d0b": "0137160099f32901875bc9e6880e0a00",
".git/objects/9d/ea9bb46782c3ecccb6ecf6509c7628449991d7": "5e1e078ef8c9553499c5f6c1b4184da0",
".git/objects/9d/eb149df2727e52477c69c903b96207aee00634": "0911f01842b9e9d215e60f01d6720ceb",
".git/objects/a3/42490ef1246109575db83cfabee48edc2f1bf4": "078b57b90d308956c077e98ba6d5d7c0",
".git/objects/a5/0d958c9a1689907d60bb9bfe0950a67612394c": "522a501aed1dc91bed8d00c8edb88397",
".git/objects/a5/474ea2ca49a246e6339522629005e84dfe6136": "f19ce841280876cb876bddafd2b9d959",
".git/objects/a5/cbe0c68e031066a66fa211d3e9fee84195b415": "3e9bb4b8a75858b4b037ff239d67fba2",
".git/objects/a6/399021d77df302d768b89e1f97c4024bc1df4c": "734eecd1ba18ce3bb037cd85884c1ae9",
".git/objects/a6/4a9faf03db1b066e2e02f926dbb82ad98e3987": "2fdd28b2df031f921d8317fb7177cfc1",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/ae/436121498787640e68dd80c6561cec8bee5edf": "0e36b6f84e857fa22a1e7009bf499030",
".git/objects/af/147b14987d915075f023a9632cc0e9f5993283": "6bb02ed338a08c478a8eca0a199944b6",
".git/objects/b2/f460cbd6c24724423c780b6229d29590133b1c": "b698f51d7289539646cd62320a97599a",
".git/objects/b3/c48a7864342c87563a78366b3b00059fef49ef": "aaf34ae80cf4c556a2e8fcd5e4e33dd0",
".git/objects/b3/ca54349fac3bbd2e45b28daa3fc65ef2f4d1f7": "aac23a5e0705abf8d3bb6380cd81ec9a",
".git/objects/b4/77e58dfb8dba4f641abbc7516032e300671171": "f3909d2594bf684eb39842e78b4c1a23",
".git/objects/b4/aed622a0fa06e1b5d3d7934bcc67a72daf12ac": "9a83759a2bb7af15bbdd83f5bf74f477",
".git/objects/b6/63bdcbbb2bc529370867fc426623d0718ace6e": "8195ddd3e6336a06a23f6982e998e885",
".git/objects/b9/62fd5d766c5b4b10404bc6b7a63bf15de434bb": "979561715d43ee697460a0f08c3e6b62",
".git/objects/b9/fd503ffdd1700b8f918ccbbfde256c2b3645ad": "dbba4d2671bb925b1afe2deddb280ac2",
".git/objects/ba/d519c0899bf9c76ae70b37fb659ff8c67b106f": "ec0e2dc3c378f414631ca66a307e1e70",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/95aac98f84eef1823c93a1ab539a2a9090b21c": "6b1b871d688b2f041f12d80db753d826",
".git/objects/bc/e1aa4643012117e4fc86b6f09df3038f83aafd": "8bf9aa2b868a21697ca82fa65928c806",
".git/objects/bd/2d6e314203399be69c2ca286e5856666db93af": "9b941fa70e9fdebfce65379e978ecce9",
".git/objects/bd/3fffcf57a70ee19ed84d899b797ef5ba815327": "00c106605d03f9da8c1e11013cb8570a",
".git/objects/be/9e813c87b7f4df7d056f79ab6085e460698314": "728a16d9267388f63b9b56c713b21b33",
".git/objects/bf/9c259cbcff1310e1b5e6dbbcfebeda441e6655": "636389516a4b22ce04a015ee67a12775",
".git/objects/c2/79e91460e159ee3e880b0c369b64f95b6c85fe": "94b99e7d32bfcccb4e45ff258800a3d8",
".git/objects/c4/afef9d30c71697c3e5463210fb5445001194b1": "6953cd269f2881f5b794d7ca8c6ebd37",
".git/objects/c7/fccc402894c8de103b1f5cc4e8313d43b37e1b": "ab213ad794d554ca0742c811f6317c61",
".git/objects/c9/8f63daad1e4caaf0bc560fe705cc9e568f61fb": "36349d554f315c857efc45360858d52d",
".git/objects/c9/cbf4c4ef36b8f0ea260fe146f42fde8ed2180e": "1ee9c0f1bc40610f8e41d43fa8830caf",
".git/objects/cb/580731eca2c39312b9b1e166d103fa6666a7d9": "144956bfe4af1143698fbbd04eb6e32b",
".git/objects/cb/8bfda3dd1cabb32b73772a3bf4c06d7a7727ea": "4ce7ad610a9cff5d433af2b22d5a0807",
".git/objects/cf/4d447d3c9429557e55164aec57a41cff418f4c": "47cc0e63a73f7b0952dc9316fc443c3a",
".git/objects/cf/52d9f929495be848192e44244ce18d27f6851d": "72010000161e8012d3c1380832d8a3cf",
".git/objects/cf/5db39a54f6ab851637f71c5dacd0ce54b8aaf4": "ba5e93ec3292db06a0bca2cd02201dc9",
".git/objects/cf/73ef259933906b9d4f3500ba7078cdc54525b5": "3b8dc00a68dfd2d295b58920e0922bf3",
".git/objects/cf/dc9a0bdbfc926b23dfe8231ffeeaa4dbf8da81": "81c965df8bc92d4c539a5345910b0cfa",
".git/objects/d0/6a1996b032e9f438fd624c8b2bc9c598335cc6": "3cb634b798f271436def5cdfda13ed88",
".git/objects/d3/a08e2005f98d710cff25a2b93fec429e30f960": "192f1587a2ee501bc1610838586aae5e",
".git/objects/d3/c703360485aa059a43ff16209655dac801feaa": "3cf66499e61be307696347e4e5e26988",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/41b1ccc9513c47a40713485fd9e28f7c82d7a2": "01bd12d36b8923b5ae5f3e243ffe12d5",
".git/objects/da/645b75fa1f56e67d1b4198fed7e386d5779b1d": "5564328865984c744b020ff8d8cf3f06",
".git/objects/db/75b023575b098cc11f9e6aff501c5d8ae3371c": "c8b4d357dd4a4ba1345f6868add1bcfb",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/db/f2e177341a215197fe89bc9cc68f1e57de224f": "5a2d40d7f2479493820ce50973c10ba0",
".git/objects/dc/f88a13bdbcf6e8183ac4d4ce57249f81cf30a3": "33e1fd1cb3abd508a74c9695ac1238e5",
".git/objects/de/57a74613117f2c4d3ac3fa4037fcd54d2a185b": "c037a9df0fd6d824591fe5c91759e30e",
".git/objects/df/6792b19e928fa8d165d2e2dd74b944d1c8be48": "a6cb39c3d772f2f0625c4147bec2f4b1",
".git/objects/df/b0063b73d017dca9899c0962125f8ea1d26a64": "b3d2db19f4c07d5a05ec07a0ffc9732d",
".git/objects/df/b4073ae3ad75fdc22dc8979896b7e638ab2158": "d4b0779e84a27e56930617d44129c1d1",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e1/6f7d415bad63baca87562586522527be79c075": "43266707a07863592ea8fab4a1b0a973",
".git/objects/e4/966c73de9b0172218f52ddd82a7fd7b8d42ef4": "221948de4821ea9e99f432d167863b15",
".git/objects/e6/87027c2aa950cd50e5bcc376ba7fba3279e7cf": "da2bf2d6ef98a3bbba9c12ff58765caf",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/9e8d2e3a45e5f9638cc46f9db255239295df06": "8a65b4de44d4616ef6f0723a95f0aa2d",
".git/objects/e7/b364963447b0f4225ffed9a28e8332c1e9e7cd": "a1eee31cd5fde6227b520dae03ad5c49",
".git/objects/e8/08592379dc1884ccffe13e828e4f0347b02a17": "ccbec5189e047f6c5d0455f4fedca2af",
".git/objects/e8/089b316fb77115963dcad7ab60e02dc4f01ca6": "132a62c79bc8e17841d68434a766d1aa",
".git/objects/e8/563067622a08d815f3ad98b69e62a2b08f58e4": "bfb610ef56829b72b7f176c11c5205c7",
".git/objects/ea/5dcaa046ab2aaa803c4ca47692b91f02439274": "22807896199cc38e9f0337542ab08dd1",
".git/objects/ea/9a23bdf5f74887db271b03678c15923799e819": "981f2ee1c1f86ba832cd0d3d3822cbce",
".git/objects/ec/2f90e257dd887a49c8a61a9fa5b7db60692bd7": "e5cbe0b0fa9afdc1496fdbe4bef6da33",
".git/objects/ec/a8c1605105d730bcb38992ac25cbe66f70b787": "fd2702e66ed6b7375310302e1e64b9ff",
".git/objects/ec/d8e393503531be292070b8109c2ab892f5bfb1": "cf81efbb8dedb5111e350bea7df859b7",
".git/objects/ed/06479b040496044f43a1453ff3ec7ac48e0e1f": "1cbb3035738aea621a047907c942bdc7",
".git/objects/ed/2d800afdd92a5bd67184ef7695c6319ff9ba8d": "93e6f30401bd6c2c5db6cb4eade7944f",
".git/objects/ef/b24d963a04f6be8ca59e07cce86598beb735c1": "599e60837bf6f1dbc6a45b51d2028144",
".git/objects/f0/8579cc1120f35a10b3b49bf375c6bd79d90248": "53de1e0fd0ede6276715a2981d403682",
".git/objects/f1/76f60b01a10ebb39f4aac8219629ae7505fad9": "7b3ac9063dc75e649cb83f08c4e2ca83",
".git/objects/f2/8fb7d0a93ea530bef313fb5b9e07b3dcb1f421": "3c741d5654567b9213712dfc632bff0d",
".git/objects/f3/6bd5e6e24c18b257e33b3ad428abad7e40810a": "f560fa030fbb4c9b200357f953a68073",
".git/objects/f3/731bd64349fd411aa433d20b0cd248dd9a77a2": "2debc96c7f29e40f1e78da730831a1ee",
".git/objects/f4/b7c2ae9503bbb10662c12df7655fe392511498": "ae647757650480c5e3e6a77a5bad1ee3",
".git/objects/f5/2e62c0370214b978b7dd159c6f95cca99582bf": "2e4a00a04e00afab40ea6395639c658a",
".git/objects/f7/2ed1159fa774095511c885a81a06c9a0cfca2b": "a88ddd90508899c38b2c06d2ccb76670",
".git/objects/fa/3874397441c2dc3bb83d5c5c0d3d9b0b452762": "eb2761909d15f779d8a5c5af27bf8bb4",
".git/objects/fc/46357f43771a6f8aed94f1d0850d49c24eff3f": "5d09d5182dd7a7eb7d9188327dcc6a99",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fe/2dd6b417df4218325ee5fb573bd89f72bd170e": "d4eec0afecba8f0fa855541ed8fe9821",
".git/objects/fe/baa1d63f99ede56326085c868a2108285f270c": "85b20fc52373f9eb63fa5770beb988d5",
".git/objects/fe/d0c1a9b95b3c4e3b8b05b15dbbf99b2c6e82b7": "fa10c25a8c6621b4ece7b396aa72d71e",
".git/objects/fe/f80094db0990dc3d79801267243f83c1e8b32e": "cfbf0a1a403f0f311c68994ed16ef774",
".git/objects/ff/9610a73c2f9f57711508b26e402f2c8fd7bbe3": "eca1b7d2b50325ad2c19db1053072cb1",
".git/refs/heads/main": "9d1fd245ad2867fc35d6b3dc812c8dd4",
".git/refs/remotes/origin/main": "9d1fd245ad2867fc35d6b3dc812c8dd4",
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
"assets/fonts/MaterialIcons-Regular.otf": "40729de53a2c11efc671368d0278fc91",
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
"index.html": "806eb4850782d53c82d498564a90ac92",
"/": "806eb4850782d53c82d498564a90ac92",
"main.dart.js": "7c0fe9dbee430e65afdc8e6f63390f94",
"manifest.json": "ffdb6ce6a8e10038cacde3cfab71bb74",
"paystack_interop.js": "704b7cf55ae4bf43281391c5b5407401",
"version.json": "174ba2c6856594f99f290a8e42aec264",
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
