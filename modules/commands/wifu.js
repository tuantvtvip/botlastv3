module.exports.config = {
    name: "wifu",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Tuantvt",
    description: "Random ảnh wifu",
    commandCategory: "Random-Img",
    usages: "wifu",
    cooldowns: 2,
    dependencies: {
      "request":"",
      "fs-extra":"",
      "axios":""
    }
      
  };
  
  module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
      var link = [
        "https://i.pinimg.com/736x/c3/53/d5/c353d5b69271d572a1b1bec8ff50f4b2.jpg",
        "https://i.pinimg.com/736x/40/28/4c/40284c46155cb812372e9895066b1b28.jpg",
        "https://i.pinimg.com/736x/52/c2/53/52c253338492f7b6185637378fefd2a1.jpg",
        "https://i.pinimg.com/736x/44/ed/fd/44edfde351c836c760f7db7fa75bf77c.jpg",
        "https://i.pinimg.com/736x/eb/72/de/eb72de9117538e2bf445a6130030abe9.jpg",
        "https://i.pinimg.com/originals/53/2f/f8/532ff81b4f3bc92c8db823f2cea3d7a6.jpg",
        "https://i.pinimg.com/originals/91/5e/47/915e47e83801b992ff66d92dc8cc1244.jpg",
        "https://i.pinimg.com/originals/41/2e/f3/412ef39c4244861c287675498a9c6296.png",
        "https://i.pinimg.com/236x/85/65/a5/8565a5a34f0bec9e6c791ed927673374.jpg",
        "https://i.pinimg.com/originals/89/68/6e/89686edeb4316f53832e00ea7980cf01.jpg",
        "https://i.pinimg.com/736x/cd/53/b0/cd53b02aec22e034be15c42d81fea760.jpg",
        "https://i.pinimg.com/474x/4e/62/50/4e6250d42f22d2ef37181c7ba8caf9c7.jpg",
        "https://i.pinimg.com/736x/d4/66/47/d466476d52f5db16f042cc660eefb66d.jpg",
        "https://i.pinimg.com/736x/f6/16/7f/f6167f6a8cfb2e8471bb71ccb6983ef1.jpg",
        "https://i.pinimg.com/736x/0d/30/ef/0d30efe3b9ba40cf6ebb67b03d27c3dc.jpg",
        "https://i.pinimg.com/originals/23/8d/3a/238d3abe793fcdd198efd85308f1bce9.jpg",
        "https://i.pinimg.com/originals/74/35/b1/7435b1c713e956dd946c6721e19e6e14.jpg",
        "https://i.pinimg.com/564x/c4/cf/10/c4cf101520d8fe3329dbef541e75b69a.jpg",
        "https://i.pinimg.com/originals/e6/96/63/e69663c0f775438826c62e02c8b8eac8.jpg",
        "https://i.pinimg.com/originals/15/d1/c5/15d1c53899bafb2fd4b06b66bb6deb50.jpg",
        "https://i.pinimg.com/originals/8f/31/17/8f31178899d16701c0764cda76430433.png",
        "https://i.pinimg.com/originals/1d/a6/1a/1da61a5df4a31dd394758b035b17320e.jpg",
        "https://i.pinimg.com/736x/43/88/c8/4388c8f657e25e192b65dab3dea1818b.jpg",
        "https://i.pinimg.com/originals/42/e2/2c/42e22c72db81ff2c2900badfea2aaad1.jpg",
        "https://i.pinimg.com/originals/b6/03/80/b6038086c1c26c47f84c1f73851e74b2.jpg",
        "https://i.pinimg.com/736x/15/d9/f6/15d9f667d54648b378704e0db83d00cf.jpg",
        "https://i.pinimg.com/736x/3c/53/3e/3c533ee5fd2eb2bc09bf22537f41f340.jpg",
        "https://i.pinimg.com/originals/b6/32/dd/b632dd5f206d8295e4dfdac93411e75c.jpg",
        "https://i.pinimg.com/originals/a4/f2/ce/a4f2cec43267f37efd7cca541385d706.jpg",
        "https://i.pinimg.com/564x/8c/b8/c6/8cb8c6f4ccf92a35b0afe18484233106.jpg",
        "https://i.pinimg.com/736x/e8/78/42/e87842875dda5f9ff0aea490bd95088a.jpg",
        "https://i.pinimg.com/736x/d6/e5/9d/d6e59dae68d18854a857371ba2dc1ddd.jpg",
        "https://i.pinimg.com/236x/e0/0a/85/e00a85d7e42f81b5ab0caea47bbb827a.jpg",
        "https://i.pinimg.com/originals/ce/4f/4b/ce4f4b7635e8c8ab5c8db2911edd4249.jpg",
        "https://i.pinimg.com/originals/54/2a/01/542a017e6b4b677bc5d79f5bb8943476.jpg",
        "https://i.pinimg.com/originals/b5/7d/54/b57d54e40df741ddd37adbb0de41e004.jpg",
        "https://i.pinimg.com/originals/12/e5/35/12e535a4c8da2694f22809eb456886e9.png",
        "https://i.pinimg.com/originals/eb/74/1b/eb741b162e3255172bac9f19fa40d06c.jpg",
        "https://i.pinimg.com/736x/40/99/45/409945e40138e0ce9aca128adf8b39e4.jpg",
        "https://i.pinimg.com/564x/08/c7/2d/08c72d8d6153277e0c2fada59a42c1cb.jpg",
        "https://i.pinimg.com/736x/72/c9/39/72c9391de6204ab7d6020aed0722bd0d.jpg",
        "https://i.pinimg.com/originals/d6/b9/34/d6b934119056594f17a94192110cdbd8.jpg",
        "https://i.pinimg.com/originals/46/79/25/467925d52634fd098ab6890a23c33f30.jpg",
        "https://i.pinimg.com/736x/44/62/a3/4462a3cf3792a8cf12587fd7875d75bc.jpg",
        "https://i.pinimg.com/474x/bf/c4/d2/bfc4d2286865a6a20cd0c16c702e04af.jpg",
        "https://i.pinimg.com/736x/c1/a3/07/c1a30773b80a709e5a73350286447502.jpg",
        "https://i.pinimg.com/originals/44/4b/9b/444b9b8136ba26466b75136ef5d684cb.jpg",
        "https://i.pinimg.com/originals/79/ac/74/79ac742105acb071fac7eacbb2ff1e14.jpg",
        "https://i.pinimg.com/originals/c9/71/fd/c971fd4936c93b8343691952a88e3199.jpg",
        "https://i.pinimg.com/236x/8c/5a/8f/8c5a8f2112aac44c45de13f6ae86704f.jpg",
        "https://i.pinimg.com/originals/1b/f2/c5/1bf2c59a4b5c977ee61d0b5739da8a84.jpg",
        "https://i.pinimg.com/originals/42/2b/bf/422bbfbaaeb2d5b62ece67206cdb1ae5.jpg",
        "https://i.pinimg.com/474x/ee/47/d9/ee47d90d165a1985a6f1e95936aee4e2.jpg",
        "https://i.pinimg.com/originals/fa/ad/b0/faadb0977c90790eb72f051e4966059c.jpg",
        "https://i.pinimg.com/originals/dc/e9/f9/dce9f9beb37722c1d4c460065a37e252.jpg",
        "https://i.pinimg.com/originals/94/bd/e9/94bde9abb7f5d25ae7f1548b65c2869e.jpg",
        "https://i.pinimg.com/originals/04/eb/2f/04eb2f337389bf0b1247fb31aff9f93f.jpg",
        "https://i.pinimg.com/originals/bf/18/b3/bf18b3f21c536f3d4f442002c2f74684.jpg",
        "https://i.pinimg.com/originals/da/1c/ac/da1cac1d1cc919ec4362b6dac5bb539d.jpg",
        "https://i.pinimg.com/originals/6c/8d/19/6c8d196474794342a5b07ff57a78fecb.jpg",
        "https://i.pinimg.com/736x/fd/39/80/fd398084130bcfd15f1d1164bf4abb19.jpg",
        "https://i.pinimg.com/736x/ba/81/8b/ba818b7b031bc2c0031f29038ce49947.jpg",
        "https://i.pinimg.com/originals/6d/6e/45/6d6e45825121046f929e26fe02b828f3.jpg",
        "https://i.pinimg.com/736x/86/c8/5d/86c85d469d2b0d10f96dafcd76bc6915.jpg",
        "https://i.pinimg.com/originals/f0/49/5c/f0495c7f50d78e28e31645d8adc38603.jpg",
        "https://i.pinimg.com/originals/9a/fa/d1/9afad13f18ada18954231ee93708040b.jpg",
        "https://i.pinimg.com/736x/c2/21/1f/c2211fa07896c211f8f345df09959591.jpg",
        "https://i.pinimg.com/originals/27/ca/b1/27cab176e51f16f4513c0e139c52a401.png",
        "https://i.pinimg.com/originals/b3/6e/84/b36e84613cc59a7b5c5e280ce7a91502.jpg",
        "https://i.pinimg.com/originals/a7/52/84/a75284bb38036502ea6638d5ae2a3dd2.jpg",
        "https://i.pinimg.com/originals/e6/e3/87/e6e3876124a051597fd113a3f3308941.png",
        "https://i.pinimg.com/564x/15/29/ce/1529ce3e7b0301af49d80e2af0028385.jpg",
        "https://i.pinimg.com/originals/b2/33/68/b233685b5910013a24d7a970ee77fa03.jpg",
        "https://i.pinimg.com/236x/39/7b/cb/397bcbf7d8b2e77eab68f3a9022bddef.jpg",
        "https://i.pinimg.com/564x/5f/da/45/5fda45eb93f281ec982267f88eeaf90c.jpg",
        "https://i.pinimg.com/736x/a3/75/c3/a375c3877c5e9ac2c431d496551cbd40.jpg",
        "https://i.pinimg.com/originals/e2/e5/b7/e2e5b7f0eddf1dfaab585c4373a78ff5.jpg",
        "https://i.pinimg.com/originals/9c/ec/9b/9cec9b35d2001bf571afdb8f59752fdf.jpg",
        "https://i.pinimg.com/originals/89/08/a9/8908a93add420e241916092415bbe75a.png",
        "https://i.pinimg.com/736x/b3/9d/c6/b39dc6c0d4e8bcefd9b45414680af57f.jpg",
        "https://i.pinimg.com/originals/05/cb/c4/05cbc42b3a81f63377abf978cf6c03f3.jpg",
        "https://i.pinimg.com/originals/63/8f/70/638f70ce3de17589a9f3dc163e30d7b1.jpg",
        "https://i.pinimg.com/originals/3b/f3/e2/3bf3e24281dbeefd964ec56b63f3b079.jpg",
        "https://i.pinimg.com/originals/a9/94/fb/a994fbc39e15f70a78ea462a851f149f.jpg",
        "https://i.pinimg.com/originals/94/41/d0/9441d0191fe1a1adc663f53acd1149cb.jpg",
        "https://i.pinimg.com/originals/63/ed/bf/63edbf309339c3aac5a33b62d5b8a0a2.jpg",
        "https://i.pinimg.com/564x/71/c4/01/71c40151a067cfd1682969e4a8e47eb6.jpg",
        "https://i.pinimg.com/736x/a9/67/96/a967962e02779b95f1464861cb53076e.jpg",
        "https://i.pinimg.com/736x/53/62/da/5362da49580e1b4c6225144c7deb2dd0.jpg",
        "https://i.pinimg.com/736x/3f/69/97/3f6997166bc2fa89d05779cb2cbc7a8d.jpg",
        "https://i.pinimg.com/564x/4a/ec/f8/4aecf8ac4d14e7fd3118c58082c01a1c.jpg",
        "https://i.pinimg.com/236x/28/2f/81/282f81f5de984104a9227583b39df527.jpg",
        "https://i.pinimg.com/originals/27/41/11/27411120fcee8e125cef86280d58c80d.jpg",
        "https://i.pinimg.com/736x/59/19/35/591935f55e03142fcf1a3fe1a49e63d6--anime-kimono-kawaii-anime.jpg",
        "https://i.pinimg.com/originals/ec/c5/8b/ecc58b5b8c4883c5ef8b8f253b4768c2.png",
        "https://i.pinimg.com/originals/f9/75/66/f975668faecfdae1ab019dd6d5681b51.jpg",
        "https://i.pinimg.com/originals/64/61/2b/64612be0159860b88f280e7081770f3c.jpg",
        "https://i.pinimg.com/736x/8d/73/c3/8d73c37ac839b53d1994995ccfa634aa.jpg",
        "https://i.pinimg.com/originals/60/c4/62/60c462a2f5b991cbce026b09fab25769.jpg",
        "https://i.pinimg.com/originals/e7/3a/2a/e73a2a1325458dca54350c75598f68d0.jpg",
        "https://i.pinimg.com/736x/10/85/31/1085317f6e01744da22de9077ea68af3.jpg",
        "https://i.pinimg.com/originals/36/b2/7b/36b27beb4433279a44b93769c4f02a2d.jpg",
        "https://i.pinimg.com/originals/8f/10/a4/8f10a4730033aaf94a2504139e277daf.jpg",
        "https://i.pinimg.com/474x/b9/44/7e/b9447e911a91d837b787b368138f4d12.jpg",
        "https://i.pinimg.com/originals/8d/f2/85/8df28530ca82c87170f951c7b24149b8.jpg",
        "https://i.pinimg.com/originals/15/9f/51/159f51a34ffbe8052e903656e714a512.jpg",
        "https://i.pinimg.com/originals/f9/2b/71/f92b716bc5959bf76284c8289cdcfe9a.png",
        "https://i.pinimg.com/originals/6d/cc/62/6dcc6290532e1988e991f3f2e1374b0f.jpg",
        "https://i.pinimg.com/originals/73/b9/f0/73b9f0f9c77224472befd458ed5edffd.png",
        "https://i.pinimg.com/originals/36/4b/90/364b905f23b86dbdc4e8cfc1d17d37b5.jpg",
        "https://i.pinimg.com/736x/b3/30/b8/b330b852952404650fb95514e64ee214.jpg",
        "https://i.pinimg.com/originals/36/7e/be/367ebec29f313aa9ff4a118741f37b6d.jpg",
        "https://i.pinimg.com/736x/50/20/cb/5020cbac8e84fda0b8b7b6d97b76415f.jpg",
        "https://i.pinimg.com/originals/fb/e0/15/fbe0152aec760539d96acd91ad28c345.png",
        "https://i.pinimg.com/originals/5e/7b/eb/5e7beb883bc07319921dfbca6d4d6dfa.jpg",
        "https://i.pinimg.com/736x/0d/e9/d8/0de9d89ec8f5b64a44b80cf9ac009713.jpg",
        "https://i.pinimg.com/originals/91/5d/b7/915db7bdf6de7b154b947c701f353da4.png",
        "https://i.pinimg.com/originals/d0/83/81/d0838135c082f0906032fbf02d6084d5.png",
        "https://i.pinimg.com/originals/98/75/37/98753784596979d39d00d92e120ddb8c.jpg",
        "https://i.pinimg.com/originals/42/ff/74/42ff7423988923098a5ff9f7a470e9f4.png",
        "https://i.pinimg.com/originals/bb/c3/42/bbc3425bd25ab8b4d9da0471e4a902c5.jpg",
        "https://i.pinimg.com/736x/92/d3/cb/92d3cb181a6dc6e654854c0a637ccba1.jpg",
        "https://i.pinimg.com/originals/d1/01/3d/d1013d31a1aeab172bd9c02404ad4065.jpg",
        "https://i.pinimg.com/736x/4b/45/63/4b456311f3d56ae388ea5851eafee7bb.jpg",
        "https://i.pinimg.com/originals/70/06/92/70069213d0f54a4409a3d5176268e712.jpg",
        "https://i.pinimg.com/736x/de/9d/23/de9d23a68466f911290dba5e37db7e72.jpg",
        "https://i.pinimg.com/736x/96/ef/ad/96efad6db9cdeeb107eca1c6a9e943cf.jpg",
        "https://i.pinimg.com/originals/c3/02/b1/c302b10840b3521f732b113cfff67b6f.png",
        "https://i.pinimg.com/originals/3d/ee/a7/3deea7238ac7ae18c30763ee95545b5d.jpg",
        "https://i.pinimg.com/originals/ea/40/bb/ea40bb01b91dd575e409af0c95befeb1.jpg",
        "https://i.pinimg.com/originals/e0/bf/15/e0bf15b0696753b4c3724d06f58af313.png",
        "https://i.pinimg.com/originals/05/4f/df/054fdfbc2045fd65876c2dc0934e6547.png",
        "https://i.pinimg.com/originals/be/24/3b/be243b5b9238c63679ea69feb8c67856.jpg",
        "https://i.pinimg.com/originals/1a/e4/de/1ae4defe9ed245a145aeb65591ba3967.jpg",
        "https://i.pinimg.com/236x/7a/d8/7a/7ad87a4eb06bdabd9065045c36d2b329.jpg",
        "https://i.pinimg.com/originals/ac/b2/6c/acb26c516d6681e922f6aeb3f3848d2f.jpg",
        "https://i.pinimg.com/originals/f3/fe/61/f3fe619cd29b07f0a8f8b213f2005bba.jpg",
        "https://i.pinimg.com/originals/a0/9b/86/a09b864c3234ea0c6c420187e4c0a721.jpg",
        "https://i.pinimg.com/736x/93/30/b7/9330b732e09e0201509f2728f81c61f0.jpg",
        "https://i.pinimg.com/474x/31/f5/5b/31f55bd574c5262b830ec9f5c442675a.jpg",
        "https://i.pinimg.com/originals/67/09/ee/6709ee13ea60b70d1aaaac9f2060c8b8.jpg",
        "https://i.pinimg.com/originals/66/60/c9/6660c99808c9ebb40fbab1e0c82bb3c9.jpg",
        "https://i.pinimg.com/originals/f8/fe/ce/f8fece5a97db23cfdb4862cd77ed60ba.jpg",
        "https://i.pinimg.com/originals/68/46/14/6846147ae61c96a2c866c6d64b02dd4c.jpg",
        "https://i.pinimg.com/originals/57/29/0f/57290f004bc38e6c0236ce2449504038.jpg",
        "https://i.pinimg.com/originals/4e/3e/fe/4e3efe1e994eb425465937b493ebcace.jpg",
        "https://i.pinimg.com/originals/0e/c9/a4/0ec9a4023e11a63f1443565b51162d51.jpg",
        "https://i.pinimg.com/originals/a3/de/f2/a3def24de57de9c335889bdaf1e38675.jpg",
        "https://i.pinimg.com/originals/e2/f6/0b/e2f60bd206f7ae4c337e4d4b8fec9dd4.jpg",
        "https://i.pinimg.com/736x/de/cf/60/decf60580d3ce62a35e1e53614cbaaea.jpg",
        "https://i.pinimg.com/originals/4e/08/ec/4e08ecba60a4e2fea2c8b7e2e537c596.jpg",
        "https://i.pinimg.com/originals/02/28/98/0228989655b4b78085b9eaf63f2de331.jpg",
        "https://i.pinimg.com/originals/cc/cc/89/cccc89172f7c17851dec4b97abde669f.png",
        "https://i.pinimg.com/564x/75/69/9f/75699f5ef9c294513d3a24393b09c978.jpg",
        "https://i.pinimg.com/originals/27/ed/88/27ed88ea911360f051060866451a14eb.jpg",
        "https://i.pinimg.com/originals/4f/bd/54/4fbd547a10ea9bfccde6e3f1e04fb9e7.png",
        "https://i.pinimg.com/originals/15/47/9b/15479bb3c033da49c26310682b370976.jpg",
        "https://i.pinimg.com/736x/e8/77/56/e87756dd6bcc2727b836876a0c784c7c.jpg",
        "https://i.pinimg.com/originals/39/bc/ab/39bcabbfff2647f37ad49df75d486aa1.png",
        "https://i.pinimg.com/originals/6a/39/8e/6a398e9554b6b438d208ea60f0f17e9a.jpg",
        "https://i.pinimg.com/736x/da/be/80/dabe804328738cd10c3f702937f0b393.jpg",
        "https://i.pinimg.com/originals/4e/5e/dc/4e5edc8963b81fb714e54c813a169fb7.jpg",
        "https://i.pinimg.com/originals/15/48/e0/1548e0fffaf2f582d5c6b4b7fe61dbb0.jpg",
        "https://i.pinimg.com/originals/fa/36/d9/fa36d966437565d96b555811f0a4481c.jpg",
        "https://i.pinimg.com/originals/b3/3c/4b/b33c4bcdcf147931a428b4474d64854d.png",
        "https://i.pinimg.com/originals/08/43/e7/0843e7ce782fc9f27151e3ab2e1734b9.png",
        "https://i.pinimg.com/originals/fd/08/09/fd08091dde0df47db1e7355f80ef144e.jpg",
        "https://i.pinimg.com/originals/52/bb/68/52bb687687bfa006bc71d145a7a885b2.jpg",
        "https://i.pinimg.com/originals/44/eb/3d/44eb3dbec735cbe328cdd8e2b37e1197.jpg",
        "https://i.pinimg.com/564x/7b/27/72/7b2772bc12777eba1b7af103f610f9d9.jpg",
        "https://i.pinimg.com/originals/f2/01/bd/f201bdd2532c7034cdc0e3a779ca5137.jpg",
        "https://i.pinimg.com/736x/41/2d/e7/412de7747b86518bd2b1fc0b69556bb5.jpg",
        "https://i.pinimg.com/originals/4c/3a/fe/4c3afe0c22d19c78f32c687aa9b4ea20.jpg",
        "https://i.pinimg.com/originals/62/74/c0/6274c0d42db0b928d6cec37d498c8f30.jpg",
        "https://i.pinimg.com/originals/91/0a/05/910a050858ead717bf0a85b4c91b13eb.jpg",
        "https://i.pinimg.com/originals/24/4e/35/244e35b1a55df0bc8651f45c98213a6d.jpg",
        "https://i.pinimg.com/originals/11/41/40/114140962dd288b85e72443b8b4fea2e.jpg",
        "https://i.pinimg.com/originals/dd/cb/d7/ddcbd7aa37278e177c3f8dce9b932d34.jpg",
        "https://i.pinimg.com/originals/30/42/bf/3042bf1d758e0e7575d3f52725e65011.png",
        "https://i.pinimg.com/originals/63/23/ea/6323eadeb278901c9a3012882efcb37c.png",
        "https://i.pinimg.com/originals/15/d0/66/15d06684c88d6158afcaf4a420ee3b30.jpg",
        "https://i.pinimg.com/originals/11/46/fd/1146fd486ada70d44ffc7ca295116229.jpg",
        "https://i.pinimg.com/originals/d0/76/10/d0761081beb385185d9124f52560dadf.jpg",
        "https://i.pinimg.com/originals/1f/c6/bf/1fc6bf6f3b3c9e78c288951b4a161c54.png",
        "https://i.pinimg.com/originals/62/ad/3d/62ad3d807771ee99b948040568f3e4c1.png",
        "https://i.pinimg.com/originals/b2/8e/52/b28e526c16bedca0954636718ff28fe7.png",
        "https://i.pinimg.com/originals/db/06/92/db069236209fd30b6020dfa6acef9f2f.jpg",
        "https://i.pinimg.com/originals/41/91/e0/4191e01d3a8596160980d6345647023d.jpg",
        "https://i.pinimg.com/originals/15/2e/d5/152ed5d86e61b7d5f8386bdbf628e9a0.png",
        "https://i.pinimg.com/originals/1b/d9/2d/1bd92d837d65cdda3e87dc240d531de6.jpg",
        "https://i.pinimg.com/originals/2f/b1/15/2fb115ddccb13b43a4b4c00cd3de2254.jpg",
        "https://i.pinimg.com/originals/6b/04/fe/6b04fe8af13392d5215e9793d79c5424.png",
        "https://i.pinimg.com/736x/26/7a/fc/267afcf2f421e84593c51cf88dd391ff.jpg",
        "https://i.pinimg.com/originals/05/3d/a8/053da85abb650f36fbd023f0f55a1b0b.jpg",
        "https://i.pinimg.com/originals/b9/e1/ed/b9e1edd56d8338f8def9ee6e9e32cb33.png",
        "https://i.pinimg.com/originals/c6/71/d6/c671d68d7ee45e7f7ec3dbd8b20fdd50.png",
        "https://i.pinimg.com/originals/1b/88/73/1b8873eb9da1174d70eb26ea005bad65.png",
        "https://i.pinimg.com/originals/fc/de/3c/fcde3c888c4680d97bd419586c8b8f69.png",
        "https://i.pinimg.com/originals/a2/26/54/a22654c645a7c0ab482983141d4c9e7f.jpg",
        "https://i.pinimg.com/originals/79/15/f1/7915f11c61fb6374b8aa20dfdba5257a.jpg",
    "https://i.pinimg.com/originals/41/23/f2/4123f28655aa4874a956d2ba0147e296.jpg",
        "https://i.pinimg.com/736x/b7/3a/96/b73a9642a5380c8941352022cfc07371.jpg",
        "https://i.pinimg.com/736x/05/6d/23/056d23fff769555983d3b72b97d13d1f.jpg",
        "https://i.pinimg.com/originals/4a/77/4a/4a774a04858fa8dc8a04a0dbc22af729.jpg",
        "https://i.pinimg.com/originals/50/38/98/503898e84962573df440773b224a9d04.jpg",
        "https://i.pinimg.com/originals/93/c6/fb/93c6fbaf62f8b797eea55f7ae79e356d.jpg",
        "https://i.pinimg.com/736x/44/ed/fd/44edfde351c836c760f7db7fa75bf77c.jpg",
        "https://i.pinimg.com/originals/80/a9/2d/80a92d9bf7123b4906158c5a63d94ff0.jpg",
        "https://i.pinimg.com/originals/d6/51/a8/d651a8546d44aa0f2ca16e7ec610ee25.jpg",
        "https://i.pinimg.com/564x/92/a6/e2/92a6e29533a70918bcc61abba55eadf5.jpg",
        "https://i.pinimg.com/474x/04/89/59/048959e47907e5622cc7ad9c8d54c965.jpg",
        "https://i.pinimg.com/736x/08/3e/9e/083e9e711c4a62da298115aa286fc2de.jpg",
        "https://i.pinimg.com/originals/c2/c1/9f/c2c19f5b8c573a3493589add1087a0af.jpg",
        "https://i.pinimg.com/originals/57/d2/3e/57d23e7f36de853db205e2f8edf57dc9.jpg",
        "https://i.pinimg.com/originals/cf/2a/cc/cf2acc66e631382da0197da4c59dbada.jpg",
        "https://i.pinimg.com/originals/ee/9a/4e/ee9a4ee17b3caefeeb21411abc866acf.jpg",
        "https://i.pinimg.com/originals/82/18/ec/8218ec505a0fe7ed65f66e7624900e1c.jpg",
        "https://i.pinimg.com/originals/df/5f/4e/df5f4e18d1e48b9466913ba1999883e9.jpg",
        "https://i.pinimg.com/736x/df/ec/f0/dfecf0baa693b8c1edfb55c830c9dd7d.jpg",
        "https://i.pinimg.com/474x/5a/6d/7b/5a6d7b276a81e41ae2619d66941b710b.jpg",
        "https://i.pinimg.com/originals/f1/64/ee/f164ee68add02194e673f2682913a258.jpg",
        "https://i.pinimg.com/564x/4e/03/a5/4e03a5e88c2a0b1fda9f8428beb611b4.jpg",
        "https://i.pinimg.com/originals/bb/56/0e/bb560e6b81e4ea2740f4cb967018bebe.jpg",
        "https://i.pinimg.com/474x/83/02/8a/83028a2842e9f7ddf99c934fcecc584f.jpg",
        "https://i.pinimg.com/originals/61/a4/a5/61a4a549a8d1bf9e1293f8ee373aa143.jpg",
        "https://i.pinimg.com/736x/19/74/db/1974db8964d3c9287414a9d3d6cbeccf.jpg",
        "https://i.pinimg.com/736x/aa/6b/df/aa6bdf98cbc9e1fc741c36682fa3e838.jpg",
        "https://i.pinimg.com/originals/e3/13/a8/e313a86922cecd050bb2561425ad8257.png",
        "https://i.pinimg.com/736x/24/3c/71/243c71b9fdbb25b51037ab3ac8928eb7.jpg",
        "https://i.pinimg.com/originals/fa/ad/b0/faadb0977c90790eb72f051e4966059c.jpg",
        "https://i.pinimg.com/736x/c1/0c/f2/c10cf211537491a3c1383a7bbd539d38.jpg",
        "https://i.pinimg.com/originals/08/78/e3/0878e32620b43b1adbd295be23fed001.jpg",
        "https://i.pinimg.com/originals/af/08/4a/af084aee5e2043131dad14b8f2a99e6e.jpg",
        "https://i.pinimg.com/originals/bc/a8/c6/bca8c65b62c52a78362c9239ce894d0b.jpg",
        "https://i.pinimg.com/originals/2f/69/92/2f6992cd3b288bc94d2093cd184dca56.jpg",
        "https://i.pinimg.com/originals/25/e3/28/25e32849ce741ef6949d440f25d92332.jpg",
        "https://i.pinimg.com/originals/6f/78/9a/6f789a9ea17311ee72ac8ae0ae8c66c0.jpg",
        "https://i.pinimg.com/originals/d3/85/63/d38563715af9d94f6fc6092563b73e8d.jpg",
        "https://i.pinimg.com/originals/71/8e/1e/718e1e0ffb55fc0fc288c1567bbf54b8.jpg",
        "https://i.pinimg.com/originals/76/14/ea/7614ea924f23dae9fed86a85d313ac3f.jpg",
        "https://i.pinimg.com/originals/42/3d/bc/423dbc54927907734290f1c1d5187edb.jpg",
        "https://i.pinimg.com/originals/bc/3a/1f/bc3a1f36e19e36c590bb8942ba1618de.png",
        "https://i.pinimg.com/originals/8a/a1/f4/8aa1f4f164d3f1317fded035ad59e39e.jpg",
        "https://i.pinimg.com/736x/e6/83/f5/e683f50350031cb53687a396afba39ff.jpg",
        "https://i.pinimg.com/474x/a2/21/13/a22113ccae86c391e3cd2594ec59d53b.jpg",
        "https://i.pinimg.com/originals/de/4b/10/de4b105d0560e5f01e77cd0fcb69570e.jpg",
        "https://i.pinimg.com/474x/36/e5/50/36e5509ed7a49a0a15c2d2ef283acdbe.jpg",
        "https://i.pinimg.com/originals/25/bb/20/25bb205317b48a1c987246e087405568.jpg",
        "https://i.pinimg.com/originals/3c/47/06/3c47069432b5fadb7c358099a36f063b.jpg",
        "https://i.pinimg.com/736x/ba/77/92/ba77924eceab03b00827ef2b8519451a.jpg",
        "https://i.pinimg.com/originals/89/4d/10/894d10830c341c5aa5bd3c0fec83e76c.jpg",
        "https://i.pinimg.com/originals/89/55/bd/8955bdaca7aa8c8b6399644ba5c5644b.png",
        "https://i.pinimg.com/736x/76/fe/2a/76fe2a24de79ed2945e331e0589f2caa.jpg",
        "https://i.pinimg.com/originals/05/78/58/05785877c531ea28277ac687a06d7eb9.jpg",
        "https://i.pinimg.com/564x/b4/e4/9f/b4e49f4cead77dbe61710d4a044aaaa3.jpg",
        "https://i.pinimg.com/736x/68/f4/6d/68f46d61769150315c316fc6e656f374.jpg",
        "https://i.pinimg.com/originals/c1/23/8a/c1238a1500c4901d5f51f715f857ee1f.png",
        "https://i.pinimg.com/originals/de/3b/ba/de3bba5cd3b2186f11b7587abad2bea5.jpg",
        "https://i.pinimg.com/280x280_RS/29/8b/f5/298bf53f120299775f101d2bc0fc0908.jpg",
        "https://i.pinimg.com/564x/f1/72/68/f17268e705b00f53784c4ff3852722ac.jpg",
        "https://i.pinimg.com/originals/d9/73/d7/d973d7bbf94dfa270295d78954b9a129.jpg",
        "https://i.pinimg.com/originals/9b/f4/07/9bf407786accda157d99b0deaceaeff0.jpg",
        "https://i.pinimg.com/564x/fd/cf/a2/fdcfa2a7b4fca5a93640fc648cf47242.jpg",
        "https://i.pinimg.com/originals/1b/5b/53/1b5b53c1971fa4138bc1c8f0e0d851c1.png",
        "https://i.pinimg.com/280x280_RS/65/fd/37/65fd37f9e585ea92637cdcba2ed5383f.jpg",
        "https://i.pinimg.com/736x/6a/93/97/6a9397fc90466a45adec83003b6b8ff1.jpg",
        "https://i.pinimg.com/736x/5a/21/38/5a2138e9c516999c5fddb9094de051ae.jpg",
        "https://i.pinimg.com/originals/8b/f8/3b/8bf83b14a1efdc4d0a04b45146f85324.jpg",
        "https://i.pinimg.com/736x/79/94/ed/7994ed900039094d0ea45dadc9b088a2.jpg",
        "https://i.pinimg.com/236x/85/65/a5/8565a5a34f0bec9e6c791ed927673374.jpg",
        "https://i.pinimg.com/originals/4d/68/ea/4d68eade7a54351dce8f6aae76f52501.jpg",
        "https://i.pinimg.com/originals/5e/0c/19/5e0c198be3b7b094533f0f9d9a0d05d3.jpg",
        "https://i.pinimg.com/originals/e4/ba/d0/e4bad04892bb8269715abda58352a2e5.png",
        "https://i.pinimg.com/originals/99/06/fd/9906fdde250e68f81367508f3ef5bc9c.jpg",
        "https://i.pinimg.com/736x/01/2b/9e/012b9e7543c33638a4cc970d5a4e39c9.jpg",
        "https://i.pinimg.com/originals/99/36/36/993636cce9b8b4a82ca84153b239780e.jpg",
        "https://i.pinimg.com/564x/c6/91/d5/c691d523b5c65c62deb3b57516c19b1b.jpg",
        "https://i.pinimg.com/originals/cd/e3/63/cde363113146648f9367a9cadd56e90f.jpg",
        "https://i.pinimg.com/originals/ef/8e/e9/ef8ee98953c8a8239f83208147058753.jpg",
        "https://i.pinimg.com/originals/7a/ad/63/7aad6333a788bc12cc362fcadd96ee05.jpg",
        "https://i.pinimg.com/474x/db/a8/1f/dba81f1ce9873e52b970f69764332824.jpg",
        "https://i.pinimg.com/736x/91/79/c5/9179c56ea350e37c66065a08e66c9be3.jpg",
        "https://i.pinimg.com/736x/fe/26/6f/fe266f58054cc29b48c59c4221f45cfa.jpg",
        "https://i.pinimg.com/originals/9a/72/ed/9a72ede6d15b7ea2a0abe72f63eb0325.png",
        "https://i.pinimg.com/originals/e7/91/1c/e7911ca981856a6b244d5ca817d66f17.jpg",
        "https://i.pinimg.com/originals/0f/da/85/0fda854a569af4560f859c7d0e65a9af.png",
        "https://i.pinimg.com/originals/a9/ab/38/a9ab388d8feaf67ccb396ee91e988aa5.jpg",
        "https://i.pinimg.com/736x/33/ed/c9/33edc95108e2c8104d8a392cb03206c0.jpg",
        "https://i.pinimg.com/originals/68/2c/c0/682cc0ced90762268112e2c88c03d9db.jpg",
        "https://i.pinimg.com/474x/4e/62/50/4e6250d42f22d2ef37181c7ba8caf9c7.jpg",
        "https://i.pinimg.com/736x/cb/14/13/cb1413695246b59c760a8cf824549e9c.jpg",
        "https://i.pinimg.com/originals/b6/ef/b3/b6efb3057388568f431b00f54bd73084.jpg",
        "https://i.pinimg.com/564x/99/83/5a/99835aa6cc644df3296fcbb0e369bf29.jpg",
        "https://i.pinimg.com/originals/cc/b7/fb/ccb7fbefcac8c65452dc7cb7049800f8.jpg",
        "https://i.pinimg.com/originals/00/47/9a/00479aac1d7af8b996018d89f85e7f0b.jpg",
        "https://i.pinimg.com/originals/91/69/44/916944a5a24270ba6df2a164a0276cf1.jpg",
        "https://i.pinimg.com/originals/fc/e1/c6/fce1c6649ab847caf1efaf91b7408483.png",
        "https://i.pinimg.com/originals/8c/bb/18/8cbb18000f0be5bbc35ad9f00ddb0601.jpg",
        "https://i.pinimg.com/originals/3b/e0/74/3be0748e87ad689ed8bdbdb5918f81f4.jpg",
        "https://i.pinimg.com/originals/de/8e/e4/de8ee4b43a3b0b579626f5106b4c0a02.png"
       ];
       var callback = () => api.sendMessage({body:`𝗕𝗼̛́𝘁 𝗚𝗵𝗶𝗲̂̀𝗻 𝗟𝗮̣𝗶 𝗡𝗵𝗮 -.-`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
        return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     };