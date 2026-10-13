# Velmont Chicago University — Prototype Phase 4

This cumulative milestone extends the approved Phase 1 and Phase 2 foundation with the Admissions and Student Decision Journey. It remains static HTML, CSS and vanilla JavaScript, with no dependencies or build step. The folder name is retained deliberately.

## Open locally

Unzip the complete project and open `index.html` in a modern browser. A static server also works. Relative links and ordinary script tags support local file access; no `fetch`, modules or external services are required. JavaScript must be enabled. The project remains suitable for static hosting on GitHub Pages or Netlify; nothing has been deployed by this milestone.

## Implemented pages

- `index.html`: approved homepage design, with real links to completed destinations.
- `about.html`: institutional introduction, proposed mission/vision/values and development status.
- `programs.html`: academic-area discovery; `?level=undergraduate` and `?level=graduate` show study-level views, not a finalized degree catalog.
- `academic-area.html?area=business`
- `academic-area.html?area=information-technology`
- `academic-area.html?area=healthcare`: expressly under consideration; no established study level or clinical/licensure claim.
- `academic-model.html`: planned learning model, responsible AI and distinctions between concepts, prototype functionality and future operations.
- `admissions.html`: closed admissions status, proposed journey, requirement categories and practical decision links.
- `tuition-fees.html`: guided cost components, review-state schedule, academic-area cost facts and standard/individual completion planning.
- `scholarships.html`: proposed funding framework, award/estimate/opportunity distinctions and unestablished eligibility.
- `transfer.html`: possible previous-learning evidence, official-review concept and unfinished rules; no credit decisions.
- `student-information.html#local-students`: directly linked United States guidance.
- `student-information.html#international-students`: directly linked international guidance; researched markets are not cleared territories.
- `student-support.html`: planned advising, academic help, library, technical, accessibility and career services.
- `coming-soon.html`: unchanged intentional destination for deferred pages and services.

Missing/unknown area IDs display an explanatory recovery view. Unknown study-level values return to All academic areas. About deep links include `#mission`, `#vision` and `#university-status`; the model supports `#ai-learning`.

## Architecture and editing

- `js/content.js`: single editable university-content model, route registry and source metadata. Existing Phase 1 keys are retained.
- `js/app.js`: shared header/footer markup, navigation, routing, homepage rendering and text bindings. `data-coming-soon` markers resolve to a real route when registered; otherwise they retain intentional placeholder routing.
- `js/pages.js`: shared informational and academic page renderers, including Phase 3. University facts come from `VELMONT_CONTENT`; query parameters select existing IDs, never raw HTML.
- `css/styles.css`: original tokens and homepage styling, with additive inner-page components and the approved navigation fixes.

The header and footer are rendered identically on all eleven implemented pages. The Coming Soon page retains its existing standalone design. No separate university-content store, framework or templating dependency has been added.

### Adding academically supplied degree content later

`academicPortfolio.areas` continues to represent academic areas. `studyLevels` identifies areas shown as planning context in each level view; it is not a list of authorized or finalized degrees. Healthcare has no level assignment.

`academicPortfolio.programs` is intentionally empty. Once supplied and reviewed, add records there with:

- A stable `id`, matching `areaId`, and `level` (`undergraduate` or `graduate`).
- `title`, `status`, `description`, `completion`, `cost`, `funding`, `careers`.
- `curriculum` (array of course-title strings or objects with a `title`).
- `admissions`, `source`, `reviewDate`, `approvalDate`.

These records render automatically in the matching discovery view and academic-area page. No degree names or illustrative financial figures have been invented. Completion currently represents a standard new-student path; individualized transfer/prior-learning planning is deferred. A real curriculum with prerequisites and complex structured program details may need additional renderer fields later, within the same design.

`editorial` identifies the supplied planning source. Review and approval dates remain null rather than implying approval. Development/accreditation wording reflects the 11 October 2026 brief, not a fresh regulatory verification.

## Phase 1 corrections

- Mobile CSS and JavaScript agree on the existing 1120px breakpoint.
- Closed mobile navigation is hidden and inert.
- Opening sets focus to the first navigation control; Escape closes and restores focus to the toggle. Tab cycling keeps keyboard focus within the mobile controls while open.
- Toggle labels and expanded states track open/closed state.
- Crossing to desktop closes the mobile menu, unlocks background interaction and restores sensible focus.
- Panel placement follows the measured header bottom on scrolling, resizing and header-size changes.
- Desktop navigation uses disclosure buttons and normal links rather than application-menu roles; disclosures close when focus leaves them.
- Shared status/admissions text and homepage study-level statuses consume centralized content.

## Standing project decisions

The prototype must quickly explain value to prospective students unfamiliar with Velmont. Completion time, cost, funding and career relevance stay prominent. Undergraduate and graduate study are both supported; final names and numbers require academic input. Local and international information remain discoverable in one coherent website. Repeated useful links to key destinations are intentional.

Future Search must be useful and consume centralized content. Ask Velmont should support task-oriented workflows, with any simulated action clearly disclosed; never claim an email was sent without a real integration. Neither feature blocks the main prototype.

Investor Access stays discreet in the footer. A later demo login is acceptable for the prototype but cannot protect confidential files. Real authentication is deferred. Student-service destinations stay intentional Coming Soon routes. Do not invent policy wording.

English is primary. New components use logical spacing where practical, and content remains separable from renderers for future localization. Arabic translation and a complete RTL audit are deferred.

## Prototype Phase 3 content and navigation

The About dropdown now has one `Mission, Vision & Values` item, pointing to the existing `about.html#mission` anchor. Other About destinations and page sections are retained.

Admissions/Cost and Student Experience navigation routes now open completed pages. Local and International links go directly to their respective sections in one shared page. The homepage retains its original design; its existing route markers automatically resolve to the newly completed destinations. Search, Ask Velmont, Contact, Policies, Investor Access and unimplemented platforms retain Coming Soon routing.

New editable structures in `content.js`: `decisionJourney`, `admissions`, `tuition`, `scholarships`, `priorLearning`, `studentInformation`, `localStudents`, `internationalStudents`, `studentSupport`.

- `decisionJourney.statuses` contains shared review states. Admissions availability continues to come from `university.admissionsStatus`.
- `decisionJourney.completion` defines shared standard-versus-individual completion wording. Its summary references the existing `discovery.standardPathNote`; existing academic pages continue using that same summary.
- Phase 3 cards reference shared fields with `titleSource`, `textSource` and `statusSource` when needed. These are dot paths into the same `VELMONT_CONTENT` object, not another store.
- `tuition.costs` has stable cost-component IDs and `amount: null`. An academically/financially supplied formatted amount (including the approved currency/period) can replace null and appear in the cost schedule. No calculator or currency conversion is implemented.
- Tuition's academic-area/program summaries read the existing portfolio records. Adding reviewed program content uses the Phase 2 record contract above.
- Each page's `sections`, cards and link records remain directly editable. No final eligibility criteria, prices, awards, transfer limits, service hours or country permissions have been invented.

### Approval still needed

Final degree content, admissions prerequisites/documents/language criteria, location eligibility, tuition/billing currency/fees/payment/refund terms, funded scholarship policies and eligibility, credit limits/evidence/fees/evaluation and appeal rules, and support scope/staffing/channels/hours/response targets. Recognition guidance requires intended-use and country-specific validation. Research markets are labeled explicitly.

## Deferred beyond this milestone

Functional Search, Ask Velmont AI Agent, real email sending, Investor login/dashboard, real authentication, applicant accounts, application submission, document upload, student portal, LMS integration, tuition/transfer calculators, Policies and Arabic/full localization. No next phase is authorized by this delivery.

## Verification and manual acceptance

Completed in Phase 3: syntax checks for all JavaScript; 48 generated-content cases across existing/new pages and query variants; rendered links/anchors/ARIA references/duplicate-ID checks; missing-asset checks; exact About navigation cleanup; shared completion wording; unknown academic-area recovery; deferred Search/Ask Velmont routing; and a test-only in-memory cost-value insertion check. The fixtures and harness are not shipped.

Quality review checked admissions-closed wording, null cost amounts, the still-empty degree catalog, funding/credit disclaimers, research-market status, absence of active application/upload/payment forms, and absence of invented monetary amounts. University facts and review states remain in `content.js`.

Responsive source rules were reviewed for 1440px, 820px and 390px. Phase 3 decision/step cards use two columns on desktop/tablet and one below 600px; tables use full available width, fixed column layout and wrapping text. Shared header/footer responsive rules remain unchanged. New inline navigation/help links have at least 44px tap height, and long status badges wrap.

**Browser visual acceptance remains pending.** Browser tooling was unavailable in this environment. Generated-content and source-rule checks do not establish actual overflow, text wrapping, visual quality or assistive-technology behavior. No successful browser visual verification or screenshots are claimed.

Before internal presentation, manually review the eleven implemented pages at 1440px, 820px and 390px:

1. Check horizontal overflow, heading wrapping, card stacking, the cost table and matching header/footer.
2. Open/close mobile navigation before and after scrolling; test Tab, Shift+Tab and Escape; resize across 1120px while open.
3. Check the merged About link, new navigation/footer/homepage destinations and intentionally deferred Coming Soon routes.
4. Follow Local/International direct anchors and compare the shared completion wording across admissions, tuition, transfer and academic pages.
5. Review all proposed financial, academic, country and support wording with responsible institutional owners before any public release.

## Prototype Phase 4 — interactive demo layer

Phase 4 adds `search.html`, `ask-velmont.html`, `investor-login.html`, `investor-portal.html`, `js/search.js`, `js/agent-demo.js` and `js/investor-demo.js`. Modified files are `js/content.js`, `css/styles.css` and this README. The homepage and existing page templates/shared navigation implementation are retained. Their route registry now opens the new functionality. Previous milestone deferral lists describe those earlier deliveries; Search, scripted Ask Velmont and demo Investor Access are now implemented.

Search generates entries from existing content paths plus academic-area/program records. Lightweight source/title/category/keyword metadata lives under `interactive` in `content.js`; university facts are not copied into an index. Search runs as you type and supports empty and no-result states. Exact topic words rank ahead of prefix matches. It is basic English keyword search, not an LLM or advanced fuzzy search.

Ask Velmont is a dedicated responsive page with suggested prompts, scrolling conversation, labeled input and Clear conversation. `VELMONT_ADVISOR.respond(message)` isolates deterministic response generation from the interface so a future adapter can replace it. The current intent matcher handles broad topics; it cannot reason generally or make official decisions. Responses reuse content and link to related pages. Email-request capture validates format in memory, displays no raw address in history, sends no requests, writes no storage and explicitly states no email was sent. Clear or leaving/reloading the page discards the conversation. Suggested prompts also cancel an unfinished email request and start their selected topic. No modal is used; browser navigation leaves the page, so modal Escape/focus-return behavior is not applicable.

Investor credentials are **demo / velmont**. The login stores only a demo session flag in sessionStorage when available and then navigates to the portal. The portal intentionally also loads by direct URL. The flag is not an access gate or security control. Exit clears it. No real credentials, confidential files, financial projections or production authentication are involved. Investor Access remains in the footer. Dashboard content references the existing overview, academic direction, AI learning, research-market caveats, roadmap and governance review states. Resource/financial details remain explicit placeholders.

Phase 4 checks: all new JavaScript syntax; representative search terms, correct AI ranking, empty/no-result states and destination files; advisor suggested prompts and boundaries; tuition/completion source reuse; simulated-DOM email validation/confirmation/clear; simulated-DOM login failure/success, dashboard rendering and exit; static HTML duplicate IDs and asset/link references. No external dependencies, backend or network calls were introduced.

Responsive source rules cover 1440/820/390px: search cards wrap, advisor becomes single-column by 820px, prompts and input rows stack on phones, conversation scrolls independently, and dashboard uses existing responsive decision cards. **Actual browser visual/keyboard acceptance remains pending** because browser tooling is unavailable. Manually test all new interactions, long messages, input accessibility with the phone keyboard, scrolling, links, and footer access at those widths. The automated checks use DOM stubs and do not establish real layout.

Still deferred: Arabic/RTL, external AI, real email delivery, APIs, databases, real authentication/accounts, uploads, payments, calculators, LMS/student-system integration, analytics and production security. Work stops after Prototype Phase 4.

### Phase 4 completion corrections

Area comparisons such as “Compare IT and Business” now use the named academic areas' existing descriptions, proposed status, learning focus and career-review status. Explicit undergraduate/graduate questions use the study-level response. An unspecified comparison asks which type the visitor means. IT/Business career questions include the same documented area facts and retain the no-employment-guarantee caveat. No degree names, job titles, salaries or outcomes were invented.

Academic Model copy now identifies Search and Ask Velmont as implemented client-side/scripted demos, distinct from future operational systems, external AI and real email delivery.

Completion checks passed: area-versus-level comparisons (including lower-case IT), career questions, every suggested prompt, email format validation/simulated capture/cancel/clear, search topics and no-results, stale-copy removal from search entries, integration destinations, all JavaScript syntax, static duplicate IDs and file/asset references. These were source/logic and DOM-simulation checks.

Browser acceptance at 1440px, 820px and 390px remains pending because browser tooling is unavailable. Manually check conversation scrolling, mobile input with the software keyboard, horizontal overflow, Search result layout, Investor Portal cards, and keyboard focus/navigation. No visual verification is claimed. Only `js/agent-demo.js`, `js/content.js` and this README changed in this final correction pass. No Phase 5 work was started.
