(function(){
 'use strict';const c=window.VELMONT_CONTENT;
 const result=(text,url='programs.html',label='Explore related information')=>({text,url,label});
 function namedAreas(message) {
  const patterns = {business: /\bbusiness\b/i, 'information-technology': /\b(information technology|technology|computing|computer|software)\b/i, healthcare: /\bhealthcare\b/i};
  return c.academicPortfolio.areas.filter(area => patterns[area.id]?.test(message) || (area.id === 'information-technology' && /\bIT\b/.test(message)) || (area.id === 'information-technology' && /\bit\b/i.test(message) && /compare|versus|\bvs\b|business|career|jobs/i.test(message)));
 }
 function areaSummary(area) {
  return area.title + ' — ' + area.status + '. ' + area.description + ' Proposed learning focus: ' + area.focus.join('; ') + '. Career status: ' + area.careers + '.';
 }
 function respond(message){const q=message.toLowerCase();
  const areas=namedAreas(message);
  const studyLevel=/\b(undergraduate|graduate|masters?|bachelors?)\b/.test(q);
  const comparison=/\b(compare|comparison|versus|vs|difference)\b/.test(q);

  if(/\b(send|email|mail)\b/.test(q)&&/tuition|cost|information|details/.test(q))return {email:true,text:c.interactive.emailRequest};
  if(/\b(approve|grant me|award me|guarantee|visa|recognition|eligible)\b/.test(q))return result(c.interactive.boundary,'student-information.html#international-students','Review guidance and limits');
  if(/transfer|previous|prior|credit/.test(q))return result(c.decisionJourney.completion.individualText+' '+c.priorLearning.intro,'transfer.html','Review previous learning');
  if(/how long|duration|completion|time.*degree/.test(q))return result(c.decisionJourney.completion.standardText+' '+c.decisionJourney.completion.individualText,'transfer.html#completion-planning','Review completion planning');
  if(/tuition|cost|price|fees/.test(q))return result(c.decisionJourney.statuses.tuition+'. '+c.tuition.intro,'tuition-fees.html','Review tuition and fees');
  if(/scholar|funding|financial aid/.test(q))return result(c.decisionJourney.statuses.funding+'. '+c.scholarships.intro,'scholarships.html','Review funding');
  if(/international|country|overseas/.test(q))return result(c.internationalStudents.intro+' '+c.internationalStudents.marketNote,'student-information.html#international-students','International guidance');
  if(comparison && areas.length > 1 && !studyLevel)return result(areas.map(areaSummary).join(' ')+' '+c.discovery.programsPending+' '+c.discovery.careerGuidance,'programs.html','Explore the academic areas');
  if(studyLevel)return result(c.academicPortfolio.undergraduate.description+' '+c.discovery.graduateIntent+' '+c.discovery.levelNote,'programs.html','Compare study levels');
  if(/career|job|salary/.test(q))return result((areas.length ? areas.map(areaSummary).join(' ')+' ' : '')+c.decisionJourney.career.text,areas.length===1?'academic-area.html?area='+encodeURIComponent(areas[0].id):'programs.html','Explore academic areas');
  if(comparison)return result('Would you like to compare academic areas, such as IT and Business, or study levels, such as undergraduate and graduate?','programs.html','Explore academic options');
  if(/technology|comput|software|\bit\b|business|healthcare/.test(q)){const id=/business/.test(q)?'business':/healthcare/.test(q)?'healthcare':'information-technology';const a=c.academicPortfolio.areas.find(a=>a.id===id);return result(a.title+' — '+a.status+'. '+a.description+' '+c.discovery.programsPending,'academic-area.html?area='+id,'Explore '+a.title);}
  if(/admission|apply|entry/.test(q))return result(c.university.admissionsStatus+' '+c.admissions.intro,'admissions.html','Review admissions');
  if(/support|person|contact|help/.test(q)&&!/program/.test(q))return result(c.studentSupport.intro,'student-support.html','Explore planned support');
  if(/program|study|explore/.test(q))return result(c.academicPortfolio.intro+' '+c.discovery.programsPending,'programs.html','Explore academic areas');
  return result(c.interactive.fallback,'search.html','Search university information');
 }
 window.VELMONT_ADVISOR={respond};
 const form=document.getElementById('advisor-form');if(!form)return;
 const input=document.getElementById('advisor-input'),history=document.getElementById('conversation'),notice=document.getElementById('advisor-status');let awaitingEmail=false;
 function add(who,text,reply){const article=document.createElement('article');article.className='chat-message '+(who==='You'?'chat-user':'');const heading=document.createElement('h2');heading.textContent=who;const p=document.createElement('p');p.textContent=text;article.append(heading,p);if(reply?.url){const a=document.createElement('a');a.href=reply.url;a.textContent=reply.label;a.className='text-link';article.append(a);}history.append(article);history.scrollTop=history.scrollHeight;notice.textContent=who==='Ask Velmont'?'Advisor response added.':'';}
 function send(text){if(!text.trim())return;
  if(awaitingEmail){if(/^cancel$/i.test(text.trim())){awaitingEmail=false;add('Ask Velmont','Request cancelled. No email address has been saved.');}
   else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text.trim())){add('Ask Velmont','Please enter an email in the format name@example.com, or type cancel.');}
   else{awaitingEmail=false;add('You','[Email address provided for this interaction]');add('Ask Velmont',c.interactive.emailCaptured,result('', 'tuition-fees.html','Open tuition information'));}
  }else{add('You',text);const reply=respond(text);awaitingEmail=!!reply.email;add('Ask Velmont',reply.text,reply);}
  input.value='';input.focus();
 }
 form.addEventListener('submit',event=>{event.preventDefault();send(input.value);});
 const prompts=document.getElementById('advisor-prompts');c.interactive.prompts.forEach(text=>{const b=document.createElement('button');b.type='button';b.textContent=text;b.addEventListener('click',()=>{awaitingEmail=false;send(text);});prompts.append(b);});
 document.getElementById('clear-conversation').addEventListener('click',()=>{awaitingEmail=false;history.replaceChildren();input.value='';add('Ask Velmont',c.interactive.advisorDisclosure);input.focus();});
 document.getElementById('advisor-disclosure').textContent=c.interactive.advisorDisclosure;add('Ask Velmont','Welcome. I can help you explore Velmont’s proposed academic direction and student planning information. Choose a prompt or ask a question.');
})();
