!function(){"use strict";var a=window.document,b={STYLES:"https://c.disquscdn.com/next/embed/styles/lounge.81e9bdc293cf1db0e7899fb23e870851.css",RTL_STYLES:"https://c.disquscdn.com/next/embed/styles/lounge_rtl.852e33984103161d3d860cd67324b7ad.css","lounge/main":"https://c.disquscdn.com/next/embed/lounge.bundle.f02d2ed06e43b01c7ab4b612f3e41a8c.js","discovery/main":"https://c.disquscdn.com/next/embed/discovery.bundle.bc533dcea52452269ce07a14855280a0.js","remote/config":"https://disqus.com/next/config.js","common/vendor_extensions/highlight":"https://c.disquscdn.com/next/embed/highlight.6fbf348532f299e045c254c49c4dbedf.js"};window.require={baseUrl:"https://c.disquscdn.com/next/current/embed",paths:["lounge/main","discovery/main","remote/config","common/vendor_extensions/highlight"].reduce(function(a,c){return a[c]=b[c].slice(0,-3),a},{})};var c=a.createElement("script");c.onload=function(){require(["common/main"],function(a){a.init("lounge",b)})},c.src="https://c.disquscdn.com/next/embed/common.bundle.f34f9f29f33d91cf7fddb3c8c7038d08.js",a.body.appendChild(c)}();