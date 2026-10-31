(function(){
'use strict';
const MAIN='https://ggcheckout.app/checkout/v5/oqiqqGnVy0jNJOhGRabgrZ';
const BACK='https://ggcheckout.app/checkout/v5/pPKznQMTzITzEhmXjhu5K2';
let saved={};try{saved=JSON.parse(sessionStorage.getItem('ritual_utms')||'{}');}catch(e){}
new URLSearchParams(location.search).forEach((v,k)=>{if(/^(utm_|fbclid$|gclid$|ttclid$|src$|sck$)/.test(k))saved[k]=v;});
try{sessionStorage.setItem('ritual_utms',JSON.stringify(saved));}catch(e){}
window.getUTMQuery=function(){let q=new URLSearchParams(saved).toString();return q?'?'+q:'';};
function tagged(href){let u=new URL(href,location.href);Object.entries(saved).forEach(([k,v])=>u.searchParams.set(k,v));return u.href;}
window.track=function(name,data){window.dispatchEvent(new CustomEvent('ritual:analytics',{detail:{name,data}}));};
window.TMN1={flow:'mini',hero:'control'};
window.KBMExp={hd:'hd2',blk:'proof',frontCfg:{price:47},frontUrl:MAIN,frontOffUrl:BACK,tag:tagged};
window.KBM_IM=p=>p;
window.updateCheckouts=function(){document.querySelectorAll('[data-checkout]').forEach(a=>{a.href=tagged(a.dataset.checkout==='back'?BACK:MAIN);});};
document.addEventListener('click',function(e){let a=e.target.closest('a');if(!a)return;try{if(new URL(a.href).hostname==='ggcheckout.app'){a.href=tagged(a.href);if(a.href.includes('oqiqqGnVy0jNJOhGRabgrZ'))sessionStorage.setItem('ritual_checkout_started',String(Date.now()));}}catch(e){}},true);
window.sha256=window.sha256||null;
window.pixelId='6ae1141d98c5dea259132975';
let pixel=document.createElement('script');pixel.src='https://cdn.utmify.com.br/scripts/pixel/pixel.js';pixel.async=true;document.head.appendChild(pixel);
let utms=document.createElement('script');utms.src='https://cdn.utmify.com.br/scripts/utms/latest.js';utms.async=true;utms.defer=true;utms.setAttribute('data-utmify-prevent-xcod-sck','');utms.setAttribute('data-utmify-prevent-subids','');document.head.appendChild(utms);
})();
