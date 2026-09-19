
const cfg = window.BLOCKDIRECT_CONFIG || {};
const $ = (s, el=document) => el.querySelector(s);
const $$ = (s, el=document) => [...el.querySelectorAll(s)];

function wireLink(selector, url, fallbackLabel){
  $$(selector).forEach(a=>{
    if(url){
      a.href=url;
      a.classList.remove("disabled");
      a.removeAttribute("aria-disabled");
    }else{
      a.href="#downloads";
      a.classList.add("disabled");
      a.setAttribute("aria-disabled","true");
      if(fallbackLabel) a.title=fallbackLabel;
    }
  });
}
wireLink("[data-github]", cfg.githubUrl);
wireLink("[data-windows]", cfg.windowsDownloadUrl, "Ajoutez windowsDownloadUrl dans config.js");
wireLink("[data-play]", cfg.playStoreUrl, "Ajoutez playStoreUrl dans config.js");

$$("[data-version]").forEach(el=>el.textContent=cfg.releaseVersion || "—");
$$("[data-contact]").forEach(el=>{el.textContent=cfg.contactEmail||"contact à configurer"; if(el.tagName==="A"&&cfg.contactEmail)el.href="mailto:"+cfg.contactEmail});
$$("[data-security]").forEach(el=>{el.textContent=cfg.securityEmail||"security à configurer"; if(el.tagName==="A"&&cfg.securityEmail)el.href="mailto:"+cfg.securityEmail});
