if (!self.define) {
  let e,
    s = {};
  const a = (a, i) => (
    (a = new URL(a + ".js", i).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          ((e.src = a), (e.onload = s), document.head.appendChild(e));
        } else ((e = a), importScripts(a), s());
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, c) => {
    const n =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[n]) return;
    let d = {};
    const r = (e) => a(e, n),
      l = { module: { uri: n }, exports: d, require: r };
    s[n] = Promise.all(i.map((e) => l[e] || r(e))).then((e) => (c(...e), d));
  };
}
define(["./workbox-f1770938"], function (e) {
  "use strict";
  (importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/Pwa-logos/Logo-v1-black-file-icon.png",
          revision: "8d27187ec7739a904b5f5e901f2d5ef5",
        },
        {
          url: "/Pwa-logos/Logo-v1-black-mini.png",
          revision: "f6ec5c8bf370f9dc9670aaa84e8b3239",
        },
        {
          url: "/Pwa-logos/Logo-v1-black.png",
          revision: "1effdf416529d92ba023f1b756472339",
        },
        {
          url: "/Pwa-logos/Logo-v1-white-mini.png",
          revision: "78922bfb95c56e6e1adaf62111866c2e",
        },
        {
          url: "/Pwa-logos/Logo-v1-white.png",
          revision: "e84339c72cfb0797e92a41952897083a",
        },
        {
          url: "/Pwa-logos/card.png",
          revision: "c59465cf2964b15728e3c3de30251bfa",
        },
        {
          url: "/Pwa-logos/icon512_maskable.png",
          revision: "fa47d778fe38081ad5488de670764414",
        },
        {
          url: "/Pwa-logos/icon512_rounded.png",
          revision: "0687756bf01dcc1a7dc9c3394ffc5042",
        },
        {
          url: "/Pwa-logos/new-icons/apple-icon-180.png",
          revision: "edd492a7281371eaae2316ee38e46bb7",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-1125-2436.jpg",
          revision: "ffe882cf580e49720acc1b8bb4170c7d",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-1136-640.jpg",
          revision: "12356f9495f7c6a20dd358152982b181",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-1170-2532.jpg",
          revision: "959f13a82634664bf16f4fdefdbc25c4",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-1179-2556.jpg",
          revision: "41c09dc294cd609b004b618fd2890ac9",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-1206-2622.jpg",
          revision: "d0fe410dc13051ac795b6bf995fff496",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-1242-2208.jpg",
          revision: "90ba11b7abfd5f59d4edba8f98bd16d5",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-1242-2688.jpg",
          revision: "f03f23a15b2535910092ccb235d52fe5",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-1284-2778.jpg",
          revision: "7a5b2dad212d3bc193056a4716d98d6f",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-1290-2796.jpg",
          revision: "69fd9022e8eed4a0364f03d9377b86b5",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-1320-2868.jpg",
          revision: "bfd57660b237212d94e18288a888ab60",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-1334-750.jpg",
          revision: "88f5a58285293bc03eb6ac069679cb21",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-1488-2266.jpg",
          revision: "fa0837fe529c38423e7a677b490dd461",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-1536-2048.jpg",
          revision: "f21492254664b5f917ee1b0c07137fa2",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-1620-2160.jpg",
          revision: "87f7fc1ce557f1196842840f940c326f",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-1640-2360.jpg",
          revision: "98e284e0dea7a6345e322139b9f245c4",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-1668-2224.jpg",
          revision: "ee9012f5526bb8b664d0aeb2986d1da9",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-1668-2388.jpg",
          revision: "e0ad397c2145f9391c553bc602fb92ee",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-1792-828.jpg",
          revision: "38b39e8c0d21d2c07c7c5b1ab65f7e43",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-2048-1536.jpg",
          revision: "d04682a3b08c9bf5bb74d4309c0869dd",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-2048-2732.jpg",
          revision: "c8ebd78a9f81978f2680362376fc38a5",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-2160-1620.jpg",
          revision: "13f643ea5ef6877cebe4c8fb7e0b776c",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-2208-1242.jpg",
          revision: "27ce06bad2725d981f7fae9db4061fb1",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-2224-1668.jpg",
          revision: "ec959cc90187588153b31dcceb143bea",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-2266-1488.jpg",
          revision: "9711582285e8e314d29da5969932d618",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-2360-1640.jpg",
          revision: "9e809e5b866634a02af860b2ce6e04cb",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-2388-1668.jpg",
          revision: "82c2858b511ec7d577282a0917efd4f8",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-2436-1125.jpg",
          revision: "6734ed8c78e7035fa5b808014a2d5dc9",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-2532-1170.jpg",
          revision: "7ecf11f8bbdc9e588b1c850bbae2742d",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-2556-1179.jpg",
          revision: "0316a00703edba8210a2c3b38cd84a23",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-2622-1206.jpg",
          revision: "8f3b0d255462a62b7a08cf0702dab1e7",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-2688-1242.jpg",
          revision: "7f963cab35863f0a66b426df3a24488a",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-2732-2048.jpg",
          revision: "ec69cb09e7b18979698f35d45f9e0872",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-2778-1284.jpg",
          revision: "da3e27acf38197b2db41283be5fab0ba",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-2796-1290.jpg",
          revision: "42932e0ef0673f6a632b9b211af3d203",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-2868-1320.jpg",
          revision: "42dca6d934f10f1208d8653eb7dc996b",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-640-1136.jpg",
          revision: "e3f66717716617259e9b7e99220503aa",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-750-1334.jpg",
          revision: "d5e25cefe26969fe1a64593ae2a662aa",
        },
        {
          url: "/Pwa-logos/new-icons/apple-splash-828-1792.jpg",
          revision: "6d4a6c82b799d577a09b2ce1148c9d1e",
        },
        {
          url: "/Pwa-logos/new-icons/manifest-icon-192.maskable.png",
          revision: "54bd4a67a8e4c964c6f2ef915c927dc3",
        },
        {
          url: "/Pwa-logos/new-icons/manifest-icon-512.maskable.png",
          revision: "e4cf8e7edd6d2eea0a98094210d39155",
        },
        {
          url: "/Website-overview.png",
          revision: "14e1dcd6ea8afc2ba2f5ac14623400fc",
        },
        {
          url: "/_next/static/0dIBwsN0Z5lkhj6bcZhcc/_buildManifest.js",
          revision: "c8768f8cc47f32e4e6c579e4242464d9",
        },
        {
          url: "/_next/static/0dIBwsN0Z5lkhj6bcZhcc/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/0e762574-6c4a5d715e217f79.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/134-b05c7227253c87b8.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/173-e7c17582bcee25ed.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/203.2b4c1ee4fbe3a7cf.js",
          revision: "2b4c1ee4fbe3a7cf",
        },
        {
          url: "/_next/static/chunks/218.d8ec56f1948566fd.js",
          revision: "d8ec56f1948566fd",
        },
        {
          url: "/_next/static/chunks/223.8a585817faae2c92.js",
          revision: "8a585817faae2c92",
        },
        {
          url: "/_next/static/chunks/30a37ab2-b56e9e4e9566f0fc.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/347-7cee47e835664916.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/402-15e64445e470c3e7.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/415-5d608d4b12a4cad0.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/455-9626699e291c96d7.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/4bd1b696-69b5a592377d34e0.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/59-e9f34e9c2d4b650a.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/615-31c3213430a7f925.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/624-8e19d6d4e3f65788.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/649-27ed615bf0f460e0.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/687-b82c2e6234241326.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/795d4814-4b597c8b606fdeda.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/8e1d74a4-a19e5235f5d23404.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/944-90ee353a3260f4a7.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/94730671-e5c8754e0d720023.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/970-fb607054c2eb393b.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-8a896b67466a7c2f.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/app/components/about/page-dbfa32be12fe4fb7.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/app/components/education/page-5d1cbaea2c94a530.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/app/components/experience/page-fbed3a1ad295f3de.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/app/components/hero-section/page-5ac697540dbf89b2.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/app/components/skills/page-6f1ed8e946fa70f6.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/app/layout-0ac83189da5bdde8.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/app/page-107c008e37aa169e.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/app/projects/%5Bid%5D/page-3033f530ff30776c.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/app/projects/page-4d8189217fbf0a89.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/c15bf2b0-ab03a155d0d7e7fd.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/dc112a36.91904b8e55d4ecf2.js",
          revision: "91904b8e55d4ecf2",
        },
        {
          url: "/_next/static/chunks/f8025e75-798c90b793983ffc.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/framework-d29117d969504448.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/main-8447b526b8a49ddb.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/main-app-1aa69d0f11a67ffd.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/pages/_app-60989c630625b0d6.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/pages/_error-8a20a8cc0e244b4c.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/chunks/polyfills-42372ed130431b0a.js",
          revision: "846118c33b2c0e922d7b3a7676f81f6f",
        },
        {
          url: "/_next/static/chunks/webpack-b5cfd29d47850ef4.js",
          revision: "0dIBwsN0Z5lkhj6bcZhcc",
        },
        {
          url: "/_next/static/css/b84953d67f496638.css",
          revision: "b84953d67f496638",
        },
        {
          url: "/_next/static/css/bd0013df6fa13fde.css",
          revision: "bd0013df6fa13fde",
        },
        {
          url: "/_next/static/media/4473ecc91f70f139-s.p.woff",
          revision: "78e6fc13ea317b55ab0bd6dc4849c110",
        },
        {
          url: "/_next/static/media/463dafcda517f24f-s.p.woff",
          revision: "cbeb6d2d96eaa268b4b5beb0b46d9632",
        },
        {
          url: "/_next/static/media/adobe-xd.ea44eb0c.svg",
          revision: "2599020077fb6fd0e0d1390cb88b734f",
        },
        {
          url: "/_next/static/media/adobeaudition.6ac54c6a.svg",
          revision: "f6d6a8cb589aa2c334a4a0a51b700ffa",
        },
        {
          url: "/_next/static/media/after-effects.a9c72355.svg",
          revision: "5ac6b6ec84d9722b662f2053f8dc5bd6",
        },
        {
          url: "/_next/static/media/angular.4bea2a47.svg",
          revision: "202b90d0e8701fe059e45c7cc1ad6230",
        },
        {
          url: "/_next/static/media/aws.ac2256dd.svg",
          revision: "bde4ea40a2cccb245e4729676e67a597",
        },
        {
          url: "/_next/static/media/azure.56a922c9.svg",
          revision: "e34a90d5fd5dc2c49186b91583d9abf2",
        },
        {
          url: "/_next/static/media/blender.b6202fd4.svg",
          revision: "e8a0299a69e50a4be9291d4f1c538164",
        },
        {
          url: "/_next/static/media/bootstrap.c61c87af.svg",
          revision: "79c2c41680cf98566b3a6dcb55bdbf00",
        },
        {
          url: "/_next/static/media/bulma.ce338197.svg",
          revision: "8f614cad8bfd05324ca6ccdcc599867a",
        },
        {
          url: "/_next/static/media/c.8cdb6389.svg",
          revision: "14bfb49f9e30f1051af25fdb3fe5f0e2",
        },
        {
          url: "/_next/static/media/canva.85fed86e.svg",
          revision: "0397c10ee20d803780d11e2ceee2c0ed",
        },
        {
          url: "/_next/static/media/capacitorjs.cb203835.svg",
          revision: "d07872114b1027b2d3617a74e7a122ff",
        },
        {
          url: "/_next/static/media/coffeescript.22e2f988.svg",
          revision: "f951912ac0ebe3acabf518df8fc899f7",
        },
        {
          url: "/_next/static/media/cplusplus.d8945732.svg",
          revision: "18ae83b098cad9d66cb603f83abc34b0",
        },
        {
          url: "/_next/static/media/csharp.39ee24d6.svg",
          revision: "299c3aa58b1c08d8021caa2bc555f79e",
        },
        {
          url: "/_next/static/media/css.18a757c4.svg",
          revision: "f12256ac816604f347d1950948034aa8",
        },
        {
          url: "/_next/static/media/dart.de9a7e9f.svg",
          revision: "9be754f9d6c69a79bef8dcf1ddec0ada",
        },
        {
          url: "/_next/static/media/deno.7465a370.svg",
          revision: "ff256ac71d367e7003e884dbe31b7331",
        },
        {
          url: "/_next/static/media/django.47c79307.svg",
          revision: "711c098d84605eeacdf7ede745b38157",
        },
        {
          url: "/_next/static/media/docker.1fd925da.svg",
          revision: "f98f38268d029b1fa260f085c85adda0",
        },
        {
          url: "/_next/static/media/fastify.f1401f4e.svg",
          revision: "43831f4abc1e54fa237d0aa334e67897",
        },
        {
          url: "/_next/static/media/figma.1029bdd0.svg",
          revision: "05d3f6848be5ba50cce960abbdc51f05",
        },
        {
          url: "/_next/static/media/firebase.00a078b9.svg",
          revision: "0887b85fc9385059d7192893a7c2d932",
        },
        {
          url: "/_next/static/media/flutter.4975c7c9.svg",
          revision: "80bad728963ac29d01a8768a01846551",
        },
        {
          url: "/_next/static/media/gcp.10375a69.svg",
          revision: "9691a2ffb853021d0dc5516517adddf4",
        },
        {
          url: "/_next/static/media/gimp.7c585e39.svg",
          revision: "0cd0bc06bd325eb299dbc244d3ba2e4b",
        },
        {
          url: "/_next/static/media/git.50ce77c0.svg",
          revision: "feb28c650b0068074d77d3fd1462b3a3",
        },
        {
          url: "/_next/static/media/go.2398d0ba.svg",
          revision: "22eda6c5b933ded38d6ef779d7e53205",
        },
        {
          url: "/_next/static/media/graphql.1445d48c.svg",
          revision: "7d4ee3f328bca46adecd3690648e8ffc",
        },
        {
          url: "/_next/static/media/haxe.193d4b30.svg",
          revision: "3211f80a5f294be739159cd943a11480",
        },
        {
          url: "/_next/static/media/html.017306fd.svg",
          revision: "4196766f94def747ba58d82292172697",
        },
        {
          url: "/_next/static/media/illustrator.82356208.svg",
          revision: "c986f0d411674b714fec2cb7e7430982",
        },
        {
          url: "/_next/static/media/ionic.2515af68.svg",
          revision: "ac7e1d64b359513a8a1860eea7413d55",
        },
        {
          url: "/_next/static/media/java.28962703.svg",
          revision: "637fe6af336f90a0df96022548000bb5",
        },
        {
          url: "/_next/static/media/javascript.b181c09e.svg",
          revision: "0484a8d2d45ffaad2834f59361d206fd",
        },
        {
          url: "/_next/static/media/julia.e82a371c.svg",
          revision: "4fd3f3fce433fc835aea5c5436a55c79",
        },
        {
          url: "/_next/static/media/kotlin.de8eaa2b.svg",
          revision: "1078bfd6b28e9707f5553ab97a2e6cf2",
        },
        {
          url: "/_next/static/media/lightroom.dbe8fbea.svg",
          revision: "bd3b8b21822712b404caee0a1966fc33",
        },
        {
          url: "/_next/static/media/logo.0bc81e29.png",
          revision: "e84339c72cfb0797e92a41952897083a",
        },
        {
          url: "/_next/static/media/markdown.d252a99f.svg",
          revision: "d66f22c08d6a74ab7a76f8a255f9791d",
        },
        {
          url: "/_next/static/media/materialui.f63da241.svg",
          revision: "53c8f867defac7bf24e5af56c50520b5",
        },
        {
          url: "/_next/static/media/matlab.b345c227.svg",
          revision: "7c6f889c03d7f0a8a14b728986aae8e5",
        },
        {
          url: "/_next/static/media/memsql.fe5acef9.svg",
          revision: "a370bd71ea8d72a1ad4da48ca6f606f5",
        },
        {
          url: "/_next/static/media/microsoftoffice.c275d93f.svg",
          revision: "b45374f1f6d25d82887a05ffde9d2f3b",
        },
        {
          url: "/_next/static/media/mongoDB.bdbfe282.svg",
          revision: "85be680745d838b53aa7d48a9097a6e3",
        },
        {
          url: "/_next/static/media/mysql.f25ccd48.svg",
          revision: "c57e7443428ab067d3545dd02c77e8f1",
        },
        {
          url: "/_next/static/media/nextJS.5d08e3a4.svg",
          revision: "9037feafa6bb03c2fc880a45aba63ea6",
        },
        {
          url: "/_next/static/media/nginx.a985ae7e.svg",
          revision: "e2b819e37f4c0da693c88bcf7d6da882",
        },
        {
          url: "/_next/static/media/numpy.3c09ea44.svg",
          revision: "7dda86e679b18029efd280f788143dbb",
        },
        {
          url: "/_next/static/media/nuxtJS.b3618890.svg",
          revision: "d433645968b3e47b2785a3d8dc4dffd3",
        },
        {
          url: "/_next/static/media/opencv.777de634.svg",
          revision: "6bb8c58e7ae6f2ff833ce75982ecdbcb",
        },
        {
          url: "/_next/static/media/photoshop.11ddf3ae.svg",
          revision: "816abc0ff4461221e6a0232ba76ebeab",
        },
        {
          url: "/_next/static/media/php.92f5d4c3.svg",
          revision: "7cd861ebce35a4b22924629a9616a9f1",
        },
        {
          url: "/_next/static/media/picsart.8fc4adf4.svg",
          revision: "f89fb5fa4eb40a2f47776c0e56aee144",
        },
        {
          url: "/_next/static/media/postgresql.57f0feb0.svg",
          revision: "0a61cf7ab417e5d57227116dbcee2cfc",
        },
        {
          url: "/_next/static/media/premierepro.0450e213.svg",
          revision: "e35506c55858f0b460460a94331b54f9",
        },
        {
          url: "/_next/static/media/python.54da882d.svg",
          revision: "fbea44889d262c328743da82176aa7d4",
        },
        {
          url: "/_next/static/media/pytorch.e649f8fc.svg",
          revision: "7eeaeef47160c90e685c39a99494f105",
        },
        {
          url: "/_next/static/media/react.63480b3c.svg",
          revision: "a3163ac7fe36281f1b7dc7a2d91a2b8b",
        },
        {
          url: "/_next/static/media/ruby.734ec281.svg",
          revision: "d34e79c5beee3399796e5e5f0243146a",
        },
        {
          url: "/_next/static/media/selenium.d21aeb58.svg",
          revision: "1b7ce531b73032b35798ba81c7907b52",
        },
        {
          url: "/_next/static/media/sketch.c9e20e22.svg",
          revision: "1c3ae957f61637c7d1d4a687ea13dab4",
        },
        {
          url: "/_next/static/media/strapi.2c93db42.svg",
          revision: "a0d8a6a8d7e3458916e9570c6cbe20b0",
        },
        {
          url: "/_next/static/media/svelte.6406f9ac.svg",
          revision: "ec68607813412c4831b3c3e34ba528f3",
        },
        {
          url: "/_next/static/media/swift.6006c4be.svg",
          revision: "19d95e72efbb01654f6bcc80f1fc2396",
        },
        {
          url: "/_next/static/media/tailwind.0327ce72.svg",
          revision: "dfa8abaecc34dcf850b3c33621b4834f",
        },
        {
          url: "/_next/static/media/tensorflow.65f6ca51.svg",
          revision: "76db955f7fbfdcedd66bd798d0a0c30c",
        },
        {
          url: "/_next/static/media/typescript.e2083e1d.svg",
          revision: "550fbd87250ac6fb68f390ab6ebab834",
        },
        {
          url: "/_next/static/media/unity.9841984c.svg",
          revision: "42c34404a7e4a5fd4998111876f69d90",
        },
        {
          url: "/_next/static/media/vitejs.5da26425.svg",
          revision: "6bf1686c0a8015ddbe30566f9bef7251",
        },
        {
          url: "/_next/static/media/vue.763d0be3.svg",
          revision: "87ef18a6a2f103efb1ca52306b5fa189",
        },
        {
          url: "/_next/static/media/vuetifyjs.f11a1e4c.svg",
          revision: "eeec0047f8e4bc071d983728c0067262",
        },
        {
          url: "/_next/static/media/webix.9113f93c.svg",
          revision: "a2ea4f7492e69ad1ba6e1fcf902edea8",
        },
        {
          url: "/_next/static/media/wolframalpha.6aeeed81.svg",
          revision: "33a2e5995a6f91010226fc009cd4fb85",
        },
        {
          url: "/_next/static/media/wordpress.d1453069.svg",
          revision: "f69da95c1adfb46ae4580f3dfea76fe3",
        },
        { url: "/logo.png", revision: "e84339c72cfb0797e92a41952897083a" },
        {
          url: "/lottie/build.json",
          revision: "7f35591080c60b039576187683de32e3",
        },
        {
          url: "/lottie/code.json",
          revision: "cee313c8dea1e2ba5e82309d0209294f",
        },
        {
          url: "/lottie/coding.json",
          revision: "0649d95a6ec7f0dccfde0c48dd7662c1",
        },
        {
          url: "/lottie/contact.json",
          revision: "2d1bcce2fdc8035225cc961b42d77702",
        },
        {
          url: "/lottie/development.json",
          revision: "582c52ec2d8176476aa539d942d100a4",
        },
        {
          url: "/lottie/education.json",
          revision: "970c2d83617e2a69a10f853a8420b19e",
        },
        {
          url: "/lottie/js.json",
          revision: "183cef149aacbf5f127079633100b52a",
        },
        {
          url: "/lottie/lotti.json",
          revision: "3647405daf90aadd70e003ce51ae236a",
        },
        {
          url: "/lottie/study.json",
          revision: "c7f0f0aab6a33d8e8d0edf89e3b3c076",
        },
        { url: "/pic.jpg", revision: "5948431dd38320968a5e9329ae7ae3e1" },
        { url: "/pic2.jpg", revision: "4f3a91718fdbf86db45eb721d2c9b0f6" },
        { url: "/pic3.jpg", revision: "a8478bee9ff3d3f56fc5d6c0cd308c48" },
        {
          url: "/placeholder/placeholder.png",
          revision: "c83aa10e488792c4e2e77a46ed396914",
        },
        {
          url: "/projects/AI-image-generator/AI-image-generator.mp4",
          revision: "09158a42bc43a2b85704bfb7f5e7626d",
        },
        {
          url: "/projects/docs-now/Docs-now.png",
          revision: "004962f37cd68f2f18f264be392247d6",
        },
        {
          url: "/projects/docs-now/docs-now-chat.jpg",
          revision: "2d96ad813c3e35b209bb0ed806c3f9d5",
        },
        {
          url: "/projects/docs-now/docs-now-landing.png",
          revision: "5b4fe76fb9b6394b8316bc9bdc4b5228",
        },
        {
          url: "/projects/gamehub/gamehub.png",
          revision: "5159c5a4f8303788381b859b69be6ae3",
        },
        {
          url: "/projects/issue-tracker/dashboard.png",
          revision: "99005cc5484e3790015cb98f948eb540",
        },
        {
          url: "/projects/issue-tracker/issue-tracker.png",
          revision: "06ec1892d2d85a66a08c725d40496c9f",
        },
        {
          url: "/projects/issue-tracker/issues.png",
          revision: "12f4ba31cae61690221974acac49b0eb",
        },
        {
          url: "/projects/juhuu/juhoo.png",
          revision: "6bb2f7cba70fe7e2e6de1c123541e3af",
        },
        {
          url: "/projects/juhuu/marketplace-juhuu.png",
          revision: "6247dd5164fa5da6528d829644c93f4d",
        },
        {
          url: "/projects/tasktable/task-table.png",
          revision: "78f9952215ee85ea7a22ad089c94f9cd",
        },
        {
          url: "/svg/common/blur-23.svg",
          revision: "57a6a91b33f834819ee485044cfea3f1",
        },
        {
          url: "/svg/common/grid.svg",
          revision: "e35c653979e3096f7093aa764a43f508",
        },
        {
          url: "/svg/common/hero.svg",
          revision: "6e796d1ea4e696821418e6114ab114b5",
        },
        {
          url: "/svg/common/section.svg",
          revision: "2cd106a53834a0474163d47516a0b8ee",
        },
        {
          url: "/svg/skills/adobe-xd.svg",
          revision: "2599020077fb6fd0e0d1390cb88b734f",
        },
        {
          url: "/svg/skills/adobeaudition.svg",
          revision: "f6d6a8cb589aa2c334a4a0a51b700ffa",
        },
        {
          url: "/svg/skills/after-effects.svg",
          revision: "5ac6b6ec84d9722b662f2053f8dc5bd6",
        },
        {
          url: "/svg/skills/angular.svg",
          revision: "202b90d0e8701fe059e45c7cc1ad6230",
        },
        {
          url: "/svg/skills/aws.svg",
          revision: "bde4ea40a2cccb245e4729676e67a597",
        },
        {
          url: "/svg/skills/azure.svg",
          revision: "e34a90d5fd5dc2c49186b91583d9abf2",
        },
        {
          url: "/svg/skills/blender.svg",
          revision: "e8a0299a69e50a4be9291d4f1c538164",
        },
        {
          url: "/svg/skills/bootstrap.svg",
          revision: "79c2c41680cf98566b3a6dcb55bdbf00",
        },
        {
          url: "/svg/skills/bulma.svg",
          revision: "8f614cad8bfd05324ca6ccdcc599867a",
        },
        {
          url: "/svg/skills/c.svg",
          revision: "14bfb49f9e30f1051af25fdb3fe5f0e2",
        },
        {
          url: "/svg/skills/canva.svg",
          revision: "0397c10ee20d803780d11e2ceee2c0ed",
        },
        {
          url: "/svg/skills/capacitorjs.svg",
          revision: "d07872114b1027b2d3617a74e7a122ff",
        },
        {
          url: "/svg/skills/coffeescript.svg",
          revision: "f951912ac0ebe3acabf518df8fc899f7",
        },
        {
          url: "/svg/skills/cplusplus.svg",
          revision: "18ae83b098cad9d66cb603f83abc34b0",
        },
        {
          url: "/svg/skills/csharp.svg",
          revision: "299c3aa58b1c08d8021caa2bc555f79e",
        },
        {
          url: "/svg/skills/css.svg",
          revision: "f12256ac816604f347d1950948034aa8",
        },
        {
          url: "/svg/skills/dart.svg",
          revision: "9be754f9d6c69a79bef8dcf1ddec0ada",
        },
        {
          url: "/svg/skills/deno.svg",
          revision: "ff256ac71d367e7003e884dbe31b7331",
        },
        {
          url: "/svg/skills/django.svg",
          revision: "711c098d84605eeacdf7ede745b38157",
        },
        {
          url: "/svg/skills/docker.svg",
          revision: "f98f38268d029b1fa260f085c85adda0",
        },
        {
          url: "/svg/skills/fastify.svg",
          revision: "43831f4abc1e54fa237d0aa334e67897",
        },
        {
          url: "/svg/skills/figma.svg",
          revision: "05d3f6848be5ba50cce960abbdc51f05",
        },
        {
          url: "/svg/skills/firebase.svg",
          revision: "0887b85fc9385059d7192893a7c2d932",
        },
        {
          url: "/svg/skills/flutter.svg",
          revision: "80bad728963ac29d01a8768a01846551",
        },
        {
          url: "/svg/skills/gcp.svg",
          revision: "9691a2ffb853021d0dc5516517adddf4",
        },
        {
          url: "/svg/skills/gimp.svg",
          revision: "0cd0bc06bd325eb299dbc244d3ba2e4b",
        },
        {
          url: "/svg/skills/git.svg",
          revision: "feb28c650b0068074d77d3fd1462b3a3",
        },
        {
          url: "/svg/skills/go.svg",
          revision: "22eda6c5b933ded38d6ef779d7e53205",
        },
        {
          url: "/svg/skills/graphql.svg",
          revision: "7d4ee3f328bca46adecd3690648e8ffc",
        },
        {
          url: "/svg/skills/haxe.svg",
          revision: "3211f80a5f294be739159cd943a11480",
        },
        {
          url: "/svg/skills/html.svg",
          revision: "4196766f94def747ba58d82292172697",
        },
        {
          url: "/svg/skills/illustrator.svg",
          revision: "c986f0d411674b714fec2cb7e7430982",
        },
        {
          url: "/svg/skills/ionic.svg",
          revision: "ac7e1d64b359513a8a1860eea7413d55",
        },
        {
          url: "/svg/skills/java.svg",
          revision: "637fe6af336f90a0df96022548000bb5",
        },
        {
          url: "/svg/skills/javascript.svg",
          revision: "0484a8d2d45ffaad2834f59361d206fd",
        },
        {
          url: "/svg/skills/julia.svg",
          revision: "4fd3f3fce433fc835aea5c5436a55c79",
        },
        {
          url: "/svg/skills/kotlin.svg",
          revision: "1078bfd6b28e9707f5553ab97a2e6cf2",
        },
        {
          url: "/svg/skills/lightroom.svg",
          revision: "bd3b8b21822712b404caee0a1966fc33",
        },
        {
          url: "/svg/skills/markdown.svg",
          revision: "d66f22c08d6a74ab7a76f8a255f9791d",
        },
        {
          url: "/svg/skills/materialui.svg",
          revision: "53c8f867defac7bf24e5af56c50520b5",
        },
        {
          url: "/svg/skills/matlab.svg",
          revision: "7c6f889c03d7f0a8a14b728986aae8e5",
        },
        {
          url: "/svg/skills/memsql.svg",
          revision: "a370bd71ea8d72a1ad4da48ca6f606f5",
        },
        {
          url: "/svg/skills/microsoftoffice.svg",
          revision: "b45374f1f6d25d82887a05ffde9d2f3b",
        },
        {
          url: "/svg/skills/mongoDB.svg",
          revision: "85be680745d838b53aa7d48a9097a6e3",
        },
        {
          url: "/svg/skills/mysql.svg",
          revision: "c57e7443428ab067d3545dd02c77e8f1",
        },
        {
          url: "/svg/skills/nextJS.svg",
          revision: "9037feafa6bb03c2fc880a45aba63ea6",
        },
        {
          url: "/svg/skills/nginx.svg",
          revision: "e2b819e37f4c0da693c88bcf7d6da882",
        },
        {
          url: "/svg/skills/numpy.svg",
          revision: "7dda86e679b18029efd280f788143dbb",
        },
        {
          url: "/svg/skills/nuxtJS.svg",
          revision: "d433645968b3e47b2785a3d8dc4dffd3",
        },
        {
          url: "/svg/skills/opencv.svg",
          revision: "6bb8c58e7ae6f2ff833ce75982ecdbcb",
        },
        {
          url: "/svg/skills/photoshop.svg",
          revision: "816abc0ff4461221e6a0232ba76ebeab",
        },
        {
          url: "/svg/skills/php.svg",
          revision: "7cd861ebce35a4b22924629a9616a9f1",
        },
        {
          url: "/svg/skills/picsart.svg",
          revision: "f89fb5fa4eb40a2f47776c0e56aee144",
        },
        {
          url: "/svg/skills/postgresql.svg",
          revision: "0a61cf7ab417e5d57227116dbcee2cfc",
        },
        {
          url: "/svg/skills/premierepro.svg",
          revision: "e35506c55858f0b460460a94331b54f9",
        },
        {
          url: "/svg/skills/python.svg",
          revision: "fbea44889d262c328743da82176aa7d4",
        },
        {
          url: "/svg/skills/pytorch.svg",
          revision: "7eeaeef47160c90e685c39a99494f105",
        },
        {
          url: "/svg/skills/react.svg",
          revision: "a3163ac7fe36281f1b7dc7a2d91a2b8b",
        },
        {
          url: "/svg/skills/ruby.svg",
          revision: "d34e79c5beee3399796e5e5f0243146a",
        },
        {
          url: "/svg/skills/selenium.svg",
          revision: "1b7ce531b73032b35798ba81c7907b52",
        },
        {
          url: "/svg/skills/sketch.svg",
          revision: "1c3ae957f61637c7d1d4a687ea13dab4",
        },
        {
          url: "/svg/skills/sqlite.svg",
          revision: "71479666b13eecb8a516ee8069298476",
        },
        {
          url: "/svg/skills/strapi.svg",
          revision: "a0d8a6a8d7e3458916e9570c6cbe20b0",
        },
        {
          url: "/svg/skills/svelte.svg",
          revision: "ec68607813412c4831b3c3e34ba528f3",
        },
        {
          url: "/svg/skills/swift.svg",
          revision: "19d95e72efbb01654f6bcc80f1fc2396",
        },
        {
          url: "/svg/skills/tailwind.svg",
          revision: "dfa8abaecc34dcf850b3c33621b4834f",
        },
        {
          url: "/svg/skills/tensorflow.svg",
          revision: "76db955f7fbfdcedd66bd798d0a0c30c",
        },
        {
          url: "/svg/skills/typescript.svg",
          revision: "550fbd87250ac6fb68f390ab6ebab834",
        },
        {
          url: "/svg/skills/unity.svg",
          revision: "42c34404a7e4a5fd4998111876f69d90",
        },
        {
          url: "/svg/skills/vitejs.svg",
          revision: "6bf1686c0a8015ddbe30566f9bef7251",
        },
        {
          url: "/svg/skills/vue.svg",
          revision: "87ef18a6a2f103efb1ca52306b5fa189",
        },
        {
          url: "/svg/skills/vuetifyjs.svg",
          revision: "eeec0047f8e4bc071d983728c0067262",
        },
        {
          url: "/svg/skills/webix.svg",
          revision: "a2ea4f7492e69ad1ba6e1fcf902edea8",
        },
        {
          url: "/svg/skills/wolframalpha.svg",
          revision: "33a2e5995a6f91010226fc009cd4fb85",
        },
        {
          url: "/svg/skills/wordpress.svg",
          revision: "f69da95c1adfb46ae4580f3dfea76fe3",
        },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({ response: e }) =>
              e && "opaqueredirect" === e.type
                ? new Response(e.body, {
                    status: 200,
                    statusText: "OK",
                    headers: e.headers,
                  })
                : e,
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/static.+\.js$/i,
      new e.CacheFirst({
        cacheName: "next-static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp4|webm)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ sameOrigin: e, url: { pathname: s } }) =>
        !(!e || s.startsWith("/api/auth/callback") || !s.startsWith("/api/")),
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: a }) =>
        "1" === e.headers.get("RSC") &&
        "1" === e.headers.get("Next-Router-Prefetch") &&
        a &&
        !s.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages-rsc-prefetch",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: a }) =>
        "1" === e.headers.get("RSC") && a && !s.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages-rsc",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: { pathname: e }, sameOrigin: s }) => s && !e.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ sameOrigin: e }) => !e,
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET",
    ));
});
