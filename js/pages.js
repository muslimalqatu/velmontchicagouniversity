(function () {
  "use strict";
  const c = window.VELMONT_CONTENT;
  const ui = window.VELMONT_UI;
  const root = document.getElementById("page-content");
  if (!c || !ui || !root) return;
  const e = ui.escapeHTML;
  const params = new URLSearchParams(location.search);
  const areaUrl = id => `academic-area.html?area=${encodeURIComponent(id)}`;
  const link = (url, label, className = "text-link") => `<a class="${className}" href="${e(url)}">${e(label)} <span aria-hidden="true">→</span></a>`;
  const cards = items => items.map(item => `<article class="content-card"><h3>${e(item.title)}</h3><p>${e(item.text)}</p></article>`).join("");
  const facts = item => `<dl class="fact-list">
    <div><dt>Completion time · standard new-student path</dt><dd>${e(item.completion || "To be confirmed")}</dd></div>
    <div><dt>Cost / tuition</dt><dd>${e(item.cost || "To be confirmed")}</dd></div>
    <div><dt>Scholarships / funding</dt><dd>${e(item.funding || "To be confirmed")}</dd></div>
    <div><dt>Career path</dt><dd>${e(item.careers || "Under academic review")}</dd></div>
  </dl>`;
  function hero(title, description, kicker, parent) {
    return `<section class="page-hero"><div class="container">
      <nav aria-label="Breadcrumb"><ol class="breadcrumb"><li><a href="index.html">Home</a></li>${parent ? `<li aria-hidden="true">/</li><li><a href="programs.html">Programs</a></li>` : ""}<li aria-hidden="true">/</li><li>${e(parent || document.body.dataset.label)}</li></ol></nav>
      <span class="section-kicker">${e(kicker)}</span><h1>${e(title)}</h1><p class="page-lede">${e(description)}</p>
    </div></section>`;
  }
  function section(id, title, body, tone = "") {
    return `<section id="${id}" class="page-section ${tone}"><div class="container"><h2>${e(title)}</h2>${body}</div></section>`;
  }
  function nextStep() {
    return section("next-step", "Explore your next question", `<div class="page-links">${link("programs.html", "Explore academic areas")}${link("academic-model.html", "Understand the academic model")}${link(ui.route("Contact"), "Talk to a Person — coming soon")}</div><p class="review-note">${e(c.university.admissionsStatus)}</p>`, "section--warm");
  }
  function areaCard(area) {
    return `<article class="program-card"><div class="program-card__topline"><span>${e(area.level)}</span><span class="status-badge">${e(area.status)}</span></div><h3>${e(area.title)}</h3><p>${e(area.description)}</p>
      <dl class="program-facts"><div><dt>Completion</dt><dd>${e(area.completion)}</dd></div><div><dt>Cost</dt><dd>${e(area.cost)}</dd></div><div><dt>Funding</dt><dd>${e(area.funding)}</dd></div><div><dt>Career path</dt><dd>${e(area.careers)}</dd></div></dl>
      ${link(areaUrl(area.id), "Explore this academic area")}</article>`;
  }
  function programCard(program) {
    const area = c.academicPortfolio.areas.find(item => item.id === program.areaId);
    return `<article class="content-card" id="program-${e(program.id)}"><span class="status-badge">${e(program.status || "Under academic review")}</span><h3>${e(program.title)}</h3><p>${e(c.academicPortfolio.levelLabels[program.level] || "Level under review")}${area ? ` · ${e(area.title)}` : ""}</p><p>${e(program.description || "")}</p>${facts(program)}${program.curriculum?.length ? `<h4>Curriculum</h4><ul>${program.curriculum.map(course => `<li>${e(typeof course === "string" ? course : course.title)}</li>`).join("")}</ul>` : ""}${program.admissions ? `<h4>Admissions information</h4><p>${e(program.admissions)}</p>` : ""}${area && document.body.dataset.page === "programs" ? link(areaUrl(area.id), "Explore the academic area") : ""}</article>`;
  }
  function about() {
    root.innerHTML = hero(c.about.title, c.about.introduction, "About Velmont") +
      `<section class="page-section"><div class="container"><p class="review-note">${e(c.about.missionNote)}</p><div class="copy-grid"><article id="mission"><span class="section-kicker">Our proposed purpose</span><h2>Mission</h2><p>${e(c.university.mission)}</p></article><article id="vision"><span class="section-kicker">Our proposed direction</span><h2>Vision</h2><p>${e(c.university.vision)}</p></article></div></div></section>` +
      section("values", "Values that shape the proposed university", `<div class="values-grid">${cards(c.about.values)}</div>`, "section--warm") +
      section("university-status", "Where the university stands", `<p><strong>${e(c.university.developmentStatus)}</strong></p><p>${e(c.university.statusDetail)} ${e(c.university.admissionsStatus)}</p><div class="copy-grid">${cards(c.about.statusFacts)}</div><p class="review-note">${e(c.about.statusNote)}</p><p class="review-note">Source: ${e(c.editorial.source)}.</p><p>${e(c.about.governanceNote)}</p>`) + nextStep();
  }
  function programs() {
    const requested = params.get("level");
    const level = ["undergraduate", "graduate"].includes(requested) ? requested : "all";
    const portfolio = c.academicPortfolio;
    const areas = level === "all" ? portfolio.areas : portfolio.areas.filter(area => area.studyLevels.includes(level));
    const degrees = portfolio.programs.filter(program => level === "all" || program.level === level);
    const summary = level === "all" ? c.discovery.allDescription : portfolio[level].description;
    root.innerHTML = hero(c.discovery.title, c.discovery.introduction, "Explore academics") +
      `<section class="page-section"><div class="container"><h2>Explore by study level</h2><nav class="filter-links" aria-label="Study level">${[["all", "All academic areas"], ["undergraduate", "Undergraduate"], ["graduate", "Graduate"]].map(([key, label]) => `<a href="programs.html${key === "all" ? "" : `?level=${key}`}"${level === key ? ' aria-current="page"' : ""}>${label}</a>`).join("")}</nav>
      <div class="result-intro"><p>${e(summary)}</p>${level === "graduate" ? `<p>${e(c.discovery.graduateIntent)}</p>` : ""}<p class="review-note">${e(c.discovery.levelNote)}</p></div><div class="program-grid catalog-grid">${areas.map(areaCard).join("")}</div>${!areas.length ? `<p>${e(c.discovery.noAreaForLevel)}</p>` : ""}<p class="review-note">${e(c.discovery.standardPathNote)}</p></div></section>` +
      section("degree-programs", "Degree programs", degrees.length ? `<div class="copy-grid">${degrees.map(programCard).join("")}</div>` : `<p>${e(c.discovery.programsPending)}</p>`, "section--cool") +
      section("student-guidance", "Guidance for your circumstances", `<div class="copy-grid">${[ [c.students.local, "Local Students"], [c.students.international, "International Students"] ].map(([item, label]) => `<article class="content-card"><h3>${e(item.title)}</h3><p>${e(item.text)}</p>${link(ui.route(label), label)}</article>`).join("")}</div>`) + nextStep();
  }
  function area() {
    const item = c.academicPortfolio.areas.find(area => area.id === params.get("area"));
    if (!item) {
      document.title = `Academic area not found | ${c.university.name}`;
      root.innerHTML = hero("Choose an academic area", "This link does not identify an available academic area. Explore the current academic directions below.", "Academic areas", "Choose an area") + section("available-areas", "Available academic-area previews", `<div class="program-grid catalog-grid">${c.academicPortfolio.areas.map(areaCard).join("")}</div>`);
      return;
    }
    document.title = `${item.title} | ${c.university.name}`;
    const programs = c.academicPortfolio.programs.filter(program => program.areaId === item.id);
    root.innerHTML = hero(item.title, item.description, `${item.level} · ${item.status}`, item.title) +
      `<section class="page-section"><div class="container area-layout"><div><h2>Explore this direction</h2><p>${e(item.levelNote)}</p>${item.scopeNote ? `<p>${e(item.scopeNote)}</p>` : ""}<h3>Proposed learning focus</h3><ul class="focus-list">${item.focus.map(text => `<li>${e(text)}</li>`).join("")}</ul><p class="review-note">Learning focus describes the proposed area, not an approved curriculum.</p><h3>Career relevance</h3><p>${e(item.careers)}</p><p>${e(c.discovery.careerGuidance)}</p>${link("academic-model.html", "Explore the proposed academic model")}</div><aside class="fact-panel" aria-labelledby="decision-facts-title"><h2 id="decision-facts-title">Your decision at a glance</h2>${facts(item)}<p class="review-note">${e(c.discovery.standardPathNote)}</p></aside></div></section>` +
      section("related-programs", "Related degree programs", programs.length ? `<div class="copy-grid">${programs.map(programCard).join("")}</div>` : `<p>${e(c.discovery.programsPending)}</p>`, "section--warm") + nextStep();
  }
  function model() {
    root.innerHTML = hero(c.academicModel.title, c.modelDetail.introduction, "Proposed academic model") +
      section("learning-principles", "A clearer path through learning", `<p>${e(c.academicModel.body)}</p><div class="values-grid">${cards(c.modelDetail.learning)}</div>`) +
      section("ai-learning", c.aiLearning.title, `<p>${e(c.aiLearning.body)}</p><ul class="focus-list">${c.modelDetail.aiSafeguards.map(text => `<li>${e(text)}</li>`).join("")}</ul><h3>What learning could look like</h3><div class="learning-examples">${c.aiLearning.examples.map(item => `<article class="learning-example"><span>${e(item.area)}</span><h3>${e(item.title)}</h3><p>${e(item.detail)}</p></article>`).join("")}</div><p class="review-note">${e(c.modelDetail.examplesNote)}</p>`, "section--cool") +
      section("readiness", "Concept, prototype and future operations", `<div class="values-grid">${cards(c.modelDetail.stages)}</div>`) + nextStep();
  }

  // Shared Phase 3 presentation. Editable facts and review states live in content.js.
  function valueAt(path) {
    return path ? path.split(".").reduce((value, key) => value && value[key], c) : "";
  }
  function decisionLink(item) {
    return link(item.url || ui.route(item.route), item.label);
  }
  function decisionLinks(items = []) {
    return items.length ? `<div class="page-links">${items.map(decisionLink).join("")}</div>` : "";
  }
  function decisionCard(item, tag = "article", number) {
    const title = valueAt(item.titleSource) || item.title;
    const text = valueAt(item.textSource) || item.text;
    const state = valueAt(item.statusSource);
    return `<${tag} class="content-card journey-card">${number ? `<span class="journey-step" aria-hidden="true">${number}</span>` : ""}<h3>${e(title)}</h3>${state ? `<p class="status-badge decision-state">${e(state)}</p>` : ""}${text ? `<p>${e(text)}</p>` : ""}${item.link ? `<div class="journey-card-link">${decisionLink(item.link)}</div>` : ""}</${tag}>`;
  }
  function decisionSections(items = []) {
    return items.map((item, index) => section(item.id, item.title,
      `${item.intro ? `<p class="section-intro">${e(item.intro)}</p>` : ""}${item.cards ? item.layout === "steps" ? `<ol class="journey-steps">${item.cards.map((card, i) => decisionCard(card, "li", i + 1)).join("")}</ol>` : `<div class="decision-cards">${item.cards.map(card => decisionCard(card)).join("")}</div>` : ""}${decisionLinks(item.links)}`,
      index % 2 ? "section--warm" : ""
    )).join("");
  }
  function decisionHero(data) {
    return hero(data.title, data.intro, data.kicker) +
      `<div class="decision-summary"><div class="container"><p class="status-badge decision-state">${e(valueAt(data.statusSource))}</p><nav class="page-links" aria-label="On this page">${(data.jumps || []).map(item => `<a href="#${e(item.anchor)}">${e(item.label)}</a>`).join("")}</nav></div></div>`;
  }
  function completionSection() {
    const d = c.decisionJourney.completion;
    return section("completion-planning", d.title, `<div class="copy-grid">${decisionCard({title:d.standardTitle,text:d.standardText})}${decisionCard({title:d.individualTitle,text:d.individualText})}</div><p class="review-note">${e(d.note)}</p>${decisionLinks([{label:"Explore previous learning",route:"Transfer / Previous Learning"},{label:"Review academic directions",url:"programs.html"}])}`, "section--cool");
  }
  function decisionHelp() {
    const d = c.decisionJourney.help;
    return section("questions-and-help", d.title, `<p>${e(d.text)}</p>${decisionLinks(d.links)}<p class="review-note">${e(c.university.admissionsStatus)}</p>`, "section--warm");
  }
  function decisionTail(data) {
    return (data.showQuestions ? section("decision-questions", "Find the next practical answer", `<div class="decision-cards">${c.decisionJourney.questions.map(item => decisionCard({...item,link:{label:item.title,route:item.route}})).join("")}</div>`) : "") +
      (data.showCompletion ? completionSection() : "") +
      (data.showCareer ? section("career-relevance",c.decisionJourney.career.title,`<p>${e(c.decisionJourney.career.text)}</p>${decisionLinks(c.decisionJourney.career.links)}`) : "") + decisionHelp();
  }
  function admissions() {
    const data=c.admissions;
    root.innerHTML=decisionHero(data)+decisionSections(data.sections)+decisionTail(data);
  }
  function tuition() {
    const data=c.tuition;
    const costComponents=section("cost-components","What total study cost may include",`<div class="decision-cards">${data.costs.map(cost=>decisionCard({title:cost.title,text:cost.text,statusSource:cost.amount == null ? "decisionJourney.statuses.tuition" : null})).join("")}</div><p class="review-note">${e(data.costNote)}</p><table class="cost-table"><caption>Cost schedule status</caption><thead><tr><th scope="col">Cost component</th><th scope="col">Published amount / status</th></tr></thead><tbody>${data.costs.map(cost=>`<tr><th scope="row">${e(cost.title)}</th><td>${e(cost.amount == null ? c.decisionJourney.statuses.tuition : cost.amount)}</td></tr>`).join("")}</tbody></table>`,"section--cool");
    const records=c.academicPortfolio.programs;
    const programCosts=section("program-costs","Program tuition and funding status",`<p>${e(data.programCostIntro)}</p><div class="decision-cards">${(records.length ? records : c.academicPortfolio.areas).map(item=>`<article class="content-card journey-card"><h3>${e(item.title)}</h3><p class="status-badge decision-state">${e(item.status || c.decisionJourney.statuses.academic)}</p>${facts(item)}${link(areaUrl(item.areaId || item.id),"Explore academic details")}</article>`).join("")}</div><p class="review-note">${e(c.discovery.standardPathNote)}</p>`);
    root.innerHTML=decisionHero(data)+costComponents+programCosts+decisionSections(data.sections)+decisionTail(data);
  }
  function scholarships() {
    const data=c.scholarships;
    root.innerHTML=decisionHero(data)+decisionSections(data.sections)+decisionTail(data);
  }
  function transfer() {
    const data=c.priorLearning;
    root.innerHTML=decisionHero(data)+completionSection()+decisionSections(data.sections)+decisionHelp();
  }
  function studentInformation() {
    const data=c.studentInformation, local=c.localStudents, international=c.internationalStudents;
    root.innerHTML=decisionHero(data)+
      section("local-students",local.title,`<p>${e(local.intro)}</p><div class="decision-cards">${local.cards.map(card=>decisionCard(card)).join("")}</div>${decisionLinks([{label:"Scholarships and funding",route:"Scholarships"}])}`)+
      section("international-students",international.title,`<p>${e(international.intro)}</p><div class="decision-cards">${international.cards.map(card=>decisionCard(card)).join("")}</div><h3 class="research-heading">Markets being researched</h3><ul class="market-list">${international.markets.map(market=>`<li>${e(market)}</li>`).join("")}</ul><p class="review-note">${e(international.marketNote)}</p><p>${e(international.recognitionNote)}</p>`,"section--warm")+
      completionSection()+decisionHelp();
  }
  function studentSupport() {
    const data=c.studentSupport;
    root.innerHTML=decisionHero(data)+section("planned-services","Support being planned",`<div class="decision-cards">${data.services.map(service=>decisionCard({...service,statusSource:data.statusSource})).join("")}</div>`)+decisionSections(data.sections)+decisionHelp();
  }

  ({ about, programs, area, model, admissions, tuition, scholarships, transfer, studentInformation, studentSupport }[document.body.dataset.page] || (() => {}))();
  // Resolve deep links after the requested sections have been rendered.
  if (location.hash) {
    const target = document.getElementById(location.hash.slice(1));
    if (target) requestAnimationFrame(() => target.scrollIntoView());
  }
})();
