import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'clsx';
import './chunks/astro_fa4961bb.mjs';
import 'mime';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"","links":[],"scripts":[{"type":"inline","value":"var d=[],r=1,a=!1;window.addEventListener(\"DOMContentLoaded\",function(){const i=window.innerWidth/2,s=window.innerHeight/2,n=window.zrender,t=new n.Group;console.log(t);const l=document.getElementById(\"app\");l.style.width=`${window.innerWidth}px`,l.style.height=`${window.innerHeight}px`,l.style.cursor=\"move\";const g=n.init(l,{renderer:\"svg\"}),h=new n.Image({style:{x:i+450,y:400,image:\"/gif-4.gif\",width:50}});t.add(h);const x=new n.Image({style:{x:i+100,y:s-330,image:\"/gif-7.gif\",width:150}});t.add(x);const y=new n.Image({style:{x:i-250,y:s+150,image:\"/berlin-clipart-xl.png\",width:100}});t.add(y);const m=new n.Image({style:{x:i+200,y:300,image:\"/dunya.jpg\",width:200}});t.add(m);const u=new n.Image({style:{x:i-900,y:300,image:\"/kepler.png\",width:500}});t.add(u);const p=new n.Image({style:{x:i-1500,y:300,image:\"/yen.png\",width:500}});t.add(p);const z=new n.Image({style:{x:i+700,y:300,image:\"/yen2.png\",width:500}});t.add(z);const v=new n.Image({style:{x:i+1100,y:-100,image:\"/yen3.png\",width:500}});t.add(v);const I=new n.Image({style:{x:i-900,y:-280,image:\"/yen4.png\",width:500}});t.add(I);const E=new n.Image({style:{x:i-100,y:s+50,image:\"/about.png\",width:300}});t.add(E);const N=new n.Image({cursor:\"pointer\",style:{x:i-100,y:s+320,image:\"/arrows.png\",width:200}});t.add(N);const b=new n.Image({cursor:\"pointer\",style:{x:i-80,y:s-200,image:\"/gif-t.gif\",width:150}});t.add(b);var S=new n.Text({style:{x:i,y:s,textOffset:[100,100],blend:\"lighten\",text:\"Ferhat Aslan\",textOrigin:\"right\",strokeNoScale:!0,fill:\"white\",fontFamily:\"cursive\",fontSize:\"3em\",textWidth:100,align:\"center\",textPosition:\"left\",z:100,textRect:{x:100,y:100,width:500,height:500}}});t.add(S),new n.Text({style:{x:i,y:s+50,textOffset:[100,100],blend:\"lighten\",text:\"• I am a Software Developer.\",textOrigin:\"right\",fill:\"#e0e0e0\",strokeNoScale:!0,fontFamily:\"cursive\",fontSize:\"0.9em\",textWidth:100,align:\"center\",textPosition:\"center\",z:100,textRect:{x:100,y:100,width:500,height:500}}}),new n.Text({style:{x:i,y:s+70,textOffset:[100,100],blend:\"lighten\",text:\"• I focused on Web and IoT Development.\",textOrigin:\"right\",fill:\"#e0e0e0\",strokeNoScale:!0,fontFamily:\"cursive\",fontSize:\"0.9em\",textWidth:100,align:\"center\",textPosition:\"center\",z:100,textRect:{x:100,y:100,width:500,height:500}}}),new n.Text({style:{x:i,y:s+70,textOffset:[100,100],blend:\"lighten\",text:\"• I focused on Web and IoT Development.\",textOrigin:\"right\",fill:\"#71797E\",strokeNoScale:!0,fontFamily:\"cursive\",fontSize:\"0.9em\",textWidth:100,align:\"center\",textPosition:\"center\",z:100,textRect:{x:100,y:100,width:500,height:500}}}),new n.Text({style:{x:i,y:s+90,textOffset:[100,100],blend:\"lighten\",text:\"• I studied Electric/Electronic Engineering and Civil Engineering.\",textOrigin:\"right\",fill:\"#e0e0e0\",strokeNoScale:!0,fontFamily:\"cursive\",fontSize:\"0.9em\",textWidth:100,align:\"center\",textPosition:\"center\",z:100,textRect:{x:100,y:100,width:500,height:500}}}),g.add(t),l.children[0].style.cursor=\"move\",window.addEventListener(\"mousewheel\",function(e){var o=t.transformCoordToLocal(e.offsetX,e.offsetY);e.wheelDelta>0?r+=.2:r-=.2,r=r<1?1:r,t.attr({origin:o,scale:[r,r],position:[e.offsetX-o[0],e.offsetY-o[1]]})}),window.addEventListener(\"mousedown\",function(e){d=[e.zrX,e.zrY],a=!0,console.log()}),window.addEventListener(\"mousemove\",function(e){if(a&&!isNaN(e.zrX)&&!isNaN(e.zrY)&&!isNaN(d[0])&&!isNaN(d[1])){let o=e.zrX-d[0],c=e.zrY-d[1];g.getWidth()-300,g.getHeight()-200;const w=t.position[0]+o,f=t.position[1]+c;t.position[0]=w,t.position[1]=f,t.dirty(),d=[e.zrX,e.zrY]}}),window.addEventListener(\"mouseup\",e=>{a=!1}),document.addEventListener(\"touchstart\",function(e){d=[e.zrX,e.zrY],a=!0}),window.addEventListener(\"touchmove\",function(e){if(a){let o=e.zrX-d[0],c=e.zrY-d[1];g.getWidth()-300,g.getHeight()-200;const w=t.position[0]+o,f=t.position[1]+c;t.position[0]=w,t.position[1]=f,t.dirty(),d=[e.zrX,e.zrY]}}),window.addEventListener(\"touchend\",e=>{a=!1}),setTimeout(()=>{const e=document.getElementsByTagName(\"image\");for(let o=0;o<e.length;o++)e[o]},100)},!1);\n"}],"styles":[{"type":"inline","content":"[data-astro-cid-j7pv25f6]{margin:0;cursor:move!important}body{margin:0;cursor:move;user-select:none;background-color:#000;overflow:hidden;background-size:cover}canvas[data-astro-cid-j7pv25f6]{margin:0;cursor:move!important}.navBar[data-astro-cid-j7pv25f6]{position:absolute;width:100%;height:50px;z-index:500;bottom:10px;display:none;flex-direction:row;justify-content:center;align-items:center}.nav-bar-inside[data-astro-cid-j7pv25f6]{border-radius:100px;width:200px;min-height:40px;background-color:#fff}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/test","type":"endpoint","pattern":"^\\/test$","segments":[[{"content":"test","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/test.js","pathname":"/test","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":true,"componentMetadata":[["C:/Users/Administrator/Documents/Projelerim/test-portfolio/test-portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/test@_@js":"pages/test.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/index.astro":"chunks/pages/index_4be9defc.mjs","/src/pages/test.js":"chunks/pages/test_c5f20d5c.mjs","\u0000@astrojs-manifest":"manifest_47af6480.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.a1fe5c19.js","astro:scripts/before-hydration.js":""},"assets":[]});

export { manifest };
