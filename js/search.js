(function () {
  'use strict';
  const c=window.VELMONT_CONTENT;
  const get=path=>path.split('.').reduce((v,k)=>v&&v[k],c);
  const flatten=value=>typeof value==='string'?value:Array.isArray(value)?value.map(flatten).join(' '):value&&typeof value==='object'?Object.entries(value).filter(([k])=>!['id','url','route','anchor','statusSource','textSource','titleSource','jumps'].includes(k)).map(([,v])=>flatten(v)).join(' '):'';
  const normalize=s=>s.toLowerCase().replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim();
  function entries(){
    const rows=c.interactive.searchSources.map(([title,category,path,url,keywords])=>({title,category,url,text:flatten(get(path)),keywords}));
    c.academicPortfolio.areas.forEach(a=>rows.push({title:a.title,category:a.level,url:'academic-area.html?area='+encodeURIComponent(a.id),text:flatten(a),keywords:'program academic '+(a.id==='information-technology'?'technology IT computing':'')}));
    c.academicPortfolio.programs.forEach(p=>rows.push({title:p.title,category:'Program',url:'academic-area.html?area='+encodeURIComponent(p.areaId)+'#program-'+encodeURIComponent(p.id),text:flatten(p),keywords:p.level}));
    return rows;
  }
  function search(query){
    const words=normalize(query).split(' ').filter(Boolean);if(!words.length)return [];
    return entries().map(row=>{const title=normalize(row.title+' '+row.keywords),body=normalize(row.text);let score=0;words.forEach(w=>{if(title.split(' ').includes(w))score+=10;else if(w.length>2&&title.split(' ').some(t=>t.startsWith(w)))score+=5;else if(body.split(' ').some(t=>t===w||t.startsWith(w)))score++;});return {...row,score};}).filter(r=>r.score>0).sort((a,b)=>b.score-a.score).slice(0,20);
  }
  window.VELMONT_SEARCH={entries,search,get};
  const input=document.getElementById('site-search');if(!input)return;
  const results=document.getElementById('search-results'),status=document.getElementById('search-status'),e=window.VELMONT_UI.escapeHTML;
  function update(){const query=input.value.trim();if(!query){status.textContent='Try tuition, graduate, international, transfer or support.';results.innerHTML='';return;}
    const rows=search(query);status.textContent=rows.length?`${rows.length} results`:'No matching information. Try a shorter phrase or a topic such as cost, programs or admissions.';
    results.innerHTML=rows.map(r=>`<li class="content-card"><span class="section-kicker">${e(r.category)}</span><h2><a href="${e(r.url)}">${e(r.title)}</a></h2><p>${e(r.text.slice(0,210))}${r.text.length>210?'…':''}</p></li>`).join('');
  }
  input.addEventListener('input',update);document.getElementById('search-form').addEventListener('submit',event=>{event.preventDefault();update();});update();
})();
