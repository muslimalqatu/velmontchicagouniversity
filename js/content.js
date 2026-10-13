/**
 * Velmont Chicago University prototype content.
 * Phase 1 single source of truth for frequently edited public-facing copy.
 * Keep unapproved facts in explicit "under review" states rather than guessing.
 */
window.VELMONT_CONTENT = {
  university: {
    name: "Velmont Chicago University",
    shortName: "Velmont",
    tagline: "Turn knowledge into practice.",
    developmentStatus: "Proposed university currently in development",
    statusDetail: "Planned first cohort: Fall 2028, subject to required approvals and launch readiness.",
    admissionsStatus: "Admissions are not currently open.",
    mission: "Velmont Chicago University's proposed mission is to help learners turn knowledge into practice through personalized and quality online education in business and information technology. We aim to connect academic learning with professional application, recognize demonstrated prior learning, and support responsible use of technologies in service of individuals, organizations and communities.",
    vision: "To become a trusted university where learners across communities and career stages develop the knowledge, judgment and practical capabilities to contribute and lead in a changing world of work.",
    contact: {
      email: "To be confirmed",
      phone: "To be confirmed",
      location: "Chicago, Illinois — institutional details under review"
    }
  },

  hero: {
    eyebrow: "A proposed online university for a changing world of work",
    title: "Turn knowledge into practice.",
    body: "Velmont Chicago University is being developed around practical online learning, clear study planning and responsible AI integration—so students can understand what they may study, how learning connects to work, and where human support fits in.",
    primaryCta: "Explore Programs",
    secondaryCta: "Ask Velmont"
  },

  academicPortfolio: {
    intro: "The initial academic foundation is being developed around Business and Information Technology. Program titles, curricula and approval status will be published only as academic review progresses.",
    undergraduate: {
      label: "Undergraduate Programs",
      status: "Proposed",
      description: "Bachelor's-level study is planned within the university's initial academic areas. Final degree titles and program details remain under academic review."
    },
    graduate: {
      label: "Graduate Programs",
      status: "Under Academic Review",
      description: "Graduate study is part of the proposed academic portfolio. Final master's-level offerings and requirements are still being reviewed."
    },
    areas: [
      {
        id: "business",
        title: "Business",
        level: "Proposed Academic Area",
        description: "Applied learning focused on decision-making, organizations and the responsible use of technology in modern business.",
        completion: "To be confirmed",
        cost: "Under academic and financial review",
        funding: "Scholarship framework in development",
        careers: "Career pathways will be published with approved program details"
      },
      {
        id: "information-technology",
        title: "Information Technology",
        level: "Proposed Academic Area",
        description: "Computing foundations, secure implementation, software and applied AI within a practical learning environment.",
        completion: "To be confirmed",
        cost: "Under academic and financial review",
        funding: "Scholarship framework in development",
        careers: "Career pathways will be published with approved program details"
      },
      {
        id: "healthcare",
        title: "Healthcare",
        level: "Possible Future Academic Area",
        description: "Nonclinical healthcare fields are under consideration, subject to demand, staffing and approval decisions.",
        completion: "To be confirmed",
        cost: "To be confirmed",
        funding: "To be confirmed",
        careers: "Details under academic review"
      }
    ]
  },

  decisionFactors: [
    {
      number: "01",
      title: "Completion Time",
      text: "See a realistic expected pathway for a new student, with clear explanations of how prior learning or individual academic circumstances may change the timeline."
    },
    {
      number: "02",
      title: "Cost",
      text: "Velmont intends to make total education costs and assumptions easy to find. Approved tuition and required fees will be published when finalized."
    },
    {
      number: "03",
      title: "Scholarships & Funding",
      text: "Funding information will distinguish confirmed awards, conditional estimates and competitive opportunities instead of implying support that has not been established."
    },
    {
      number: "04",
      title: "Career Path",
      text: "Program pages are designed to connect learning to demonstrated skills and potential roles, while clearly identifying any additional experience, certification or licensure requirements."
    }
  ],

  academicModel: {
    title: "A student path designed to be clear",
    body: "The proposed academic experience connects practical learning with transparent planning. Students should be able to understand program fit, previous learning, time, cost and support before making a major decision.",
    principles: [
      { title: "Practical learning", text: "Connect theory to authentic problems through applied work, assessment and feedback." },
      { title: "Human-centered innovation", text: "Use technology with accountability, privacy and human judgment." },
      { title: "Access and belonging", text: "Reduce avoidable barriers while maintaining academic standards and accessible design." },
      { title: "Transparency", text: "Communicate status, costs and outcomes honestly, using verified facts and dated disclosures." }
    ]
  },

  aiLearning: {
    label: "Learning in action",
    title: "AI-integrated, human-accountable learning",
    body: "AI may support faculty, students and services, but academic responsibility remains human. The proposed model emphasizes responsible use, privacy safeguards and clear review routes.",
    examples: [
      { area: "Business", title: "Improve an operating process", detail: "Analyze evidence, test options and communicate a reasoned recommendation." },
      { area: "Information Technology", title: "Evaluate an AI application", detail: "Consider usefulness, reliability, privacy and security—not just model output." },
      { area: "Student support", title: "Find the next useful step", detail: "Ask Velmont is planned to help visitors locate approved information and reach a person when an individual decision is needed." }
    ]
  },

  students: {
    local: {
      title: "Students in the United States",
      text: "Future guidance will explain program availability, state-level enrollment permissions, transfer options and funding eligibility as approvals are established."
    },
    international: {
      title: "International Students",
      text: "Country guidance is being researched for selected markets. Recognition, enrollment eligibility and funding can differ by location and intended use of a degree, so future guidance will be country-specific rather than assumed globally."
    }
  },

  support: {
    title: "Technology with a human connection",
    body: "Velmont's proposed support model includes accessible routes to advising, academic help, technical assistance and human follow-up. Service scope, hours and response expectations will be published as staffing and operations are finalized.",
    items: ["Academic advising", "Technical support", "Accessibility support", "Career guidance"]
  },

  roadmap: [
    { period: "Oct–Nov 2026", title: "Design & evidence foundation", text: "Confirm proposed structure and program shortlist; establish website architecture, design system and sample pages." },
    { period: "Late 2026", title: "Investor preview", text: "Refine governance, cost, funding and regulatory wording for a controlled preview and evidence area." },
    { period: "2027–early 2028", title: "Academic & regulatory readiness", text: "Develop verified curricula, policies, public disclosures and service integrations alongside the authorization process." },
    { period: "Fall 2028", title: "Conditional first cohort target", text: "Opening remains subject to required approvals, resources and launch readiness." }
  ],

  navigation: [
    {
      label: "About",
      items: ["Welcome", "Mission, Vision & Values", "University Status"]
    },
    {
      label: "Academics",
      items: ["All Programs", "Undergraduate Programs", "Graduate Programs", "Academic Model", "How Learning Works"]
    },
    {
      label: "Admissions & Cost",
      items: ["Admissions", "Local Students", "International Students", "Tuition & Fees", "Scholarships", "Transfer / Previous Learning"]
    },
    {
      label: "Student Experience",
      items: ["AI-Integrated Learning", "Student Support", "Careers", "Student Services"]
    }
  ]
};

/* Phase 2 additions. Keep university facts here, not in page renderers.
 * Source: supplied revised brief, planning baseline 11 October 2026,
 * plus the user's standing prototype decisions. This is not approval evidence.
 */
Object.assign(window.VELMONT_CONTENT, {
  routes: {
    "Welcome": "about.html",
    "Mission, Vision & Values": "about.html#mission",
    "Mission": "about.html#mission",
    "Vision": "about.html#vision",
    "Mission and Vision": "about.html#mission",
    "University Status": "about.html#university-status",
    "All Programs": "programs.html",
    "Undergraduate Programs": "programs.html?level=undergraduate",
    "Graduate Programs": "programs.html?level=graduate",
    "Academic Model": "academic-model.html",
    "AI-Integrated Learning": "academic-model.html#ai-learning"
  },
  editorial: {
    source: "University planning brief — 11 October 2026",
    status: "Proposed content for academic and governing-board review",
    reviewDate: null,
    approvalDate: null
  },
  about: {
    title: "A university being built around your next step",
    introduction: "Velmont Chicago University is a proposed online university being developed around practical learning, responsible technology and a clearer student journey. Business and Information Technology form the recommended initial academic foundation; nonclinical Healthcare is a possible future area under consideration.",
    missionNote: "The mission, vision and values below are proposed statements for governing-board and academic review. They do not imply authorization, accreditation or established outcomes.",
    values: [
      { title: "Academic integrity", text: "Uphold honest inquiry and rigorous assessment through clear learning outcomes, assessment expectations and responsible AI policies." },
      { title: "Practical learning", text: "Connect theory to authentic problems through sample projects, applied assessments and faculty feedback." },
      { title: "Access and belonging", text: "Reduce avoidable barriers while maintaining academic standards, accessible design, clear language and transparent support." },
      { title: "Holistic student experience", text: "Recognize demonstrated learning through fair evaluation, with clear explanations of usable credit, evidence, limits and decisions." },
      { title: "Human-centered innovation", text: "Use technology with accountability, privacy and human judgment, with human assistance easy to reach." },
      { title: "Transparency and stewardship", text: "Communicate costs, status and outcomes honestly and manage resources responsibly, using verified facts and dated disclosures." },
      { title: "Service and continuous improvement", text: "Learn from evidence and contribute to communities through assessment, feedback and proposed service initiatives." }
    ],
    statusFacts: [
      { title: "Institutional development", text: "The supplied planning brief places Velmont at the IBHE orientation-planning stage. It does not establish operating or degree-granting approval." },
      { title: "Accreditation", text: "The supplied planning brief states that HLC had not yet been contacted. This prototype does not claim accreditation or accreditation-pending status." }
    ],
    statusNote: "Status statements reflect the supplied planning baseline and require institutional verification before publication. Operating authority, degree authority and institutional accreditation are separate matters.",
    governanceNote: "Leadership biographies, appointments, ownership relationships and final governance information await verified institutional content."
  },
  discovery: {
    title: "Find your academic direction",
    introduction: "Explore the areas shaping Velmont's proposed academic portfolio, with completion time, cost, funding and career relevance kept together. These are academic areas, not a finalized catalog of degree offerings.",
    allDescription: "Business and Information Technology are the recommended initial foundation. Healthcare remains a possible future area, not an established offering.",
    levelNote: "These views describe the proposed study levels. They do not confirm that a named degree is available in each academic area.",
    standardPathNote: "Completion information will describe the expected standard path for a new student. Previous study, accepted transfer credit, assessed prior learning and individual circumstances may change an individual plan.",
    graduateIntent: "The intended portfolio includes at least one master's-level offering. Final titles, academic-area placement and requirements remain under academic review.",
    careerGuidance: "Future program information should connect learning to demonstrated skills and potential roles, including any additional experience, certification or licensure requirements.",
    programsPending: "Specific degree names, curricula, entry requirements and program-level details await academic review. No finalized degree offerings are listed yet.",
    noAreaForLevel: "Academic-area assignments for this study level are still under review. Explore all academic areas for the current planning context."
  },
  modelDetail: {
    introduction: "The proposed model connects practical online learning, transparent study planning and human academic responsibility. The concepts below describe the intended experience, not systems or services already operating.",
    learning: [
      { title: "Learn through applied work", text: "The planning brief calls for sample projects, assessment rubrics and faculty-feedback examples that connect academic learning with professional application." },
      { title: "Understand the study experience", text: "Future program information should explain a sample week, workload, live and asynchronous expectations, instructor interaction, assessment and technology needs. These operational details remain to be established." },
      { title: "Recognize demonstrated learning", text: "Previous coursework and assessed prior learning may inform an individual study plan. Evidence, usable credit and decisions will require approved academic policies and appropriate human review." }
    ],
    aiSafeguards: [
      "Human academic responsibility and oversight",
      "Responsible use and clear assessment expectations",
      "Privacy safeguards and review routes",
      "Synthetic or properly authorized data in healthcare demonstrations"
    ],
    examplesNote: "Illustrative learning concepts only. These are not live lessons, approved curricula or evidence of operational learning systems.",
    stages: [
      { title: "Current prototype", text: "Informational pages demonstrate the proposed institution and academic direction. Learning examples describe concepts; they do not provide a working learning platform." },
      { title: "Implemented prototype demos", text: "Client-side Search and the scripted Ask Velmont advisor are available in this prototype. They demonstrate information discovery and simulated information requests. They do not use an external AI service, send real email or make official academic decisions." },
      { title: "Future operations", text: "Learning platforms, staffed support and individual academic decisions depend on approved policies, resources, integrations and institutional readiness." }
    ]
  }
});

Object.assign(window.VELMONT_CONTENT.academicPortfolio, {
  // Empty by design. Populate only with academically supplied records.
  // Shape: { id, areaId, level: 'undergraduate'|'graduate', title, status,
  // description, completion, cost, funding, careers, curriculum: [],
  // admissions, source, reviewDate, approvalDate }.
  // The current renderer displays these records within the matching area page.
  programs: [],
  levelLabels: { undergraduate: "Undergraduate", graduate: "Graduate" }
});

window.VELMONT_CONTENT.academicPortfolio.areas.forEach(area => {
  const details = {
    business: {
      status: "Proposed",
      studyLevels: ["undergraduate", "graduate"],
      levelNote: "Undergraduate and graduate study form part of the intended university portfolio. Business degree titles and level assignments are not finalized.",
      focus: ["Decision-making", "Organizational application", "Responsible use of technology in business"]
    },
    "information-technology": {
      status: "Proposed",
      studyLevels: ["undergraduate", "graduate"],
      levelNote: "Undergraduate and graduate study form part of the intended university portfolio. Information Technology degree titles and level assignments are not finalized.",
      focus: ["Computing foundations", "Secure implementation", "Software and applied AI"]
    },
    healthcare: {
      status: "Under consideration",
      studyLevels: [],
      levelNote: "A possible future academic area. Study levels and any program offerings remain unestablished.",
      focus: ["Nonclinical healthcare pathways under consideration", "Demand, staffing and approval review"],
      scopeNote: "No clinical training, professional licensure eligibility or approved healthcare degree is implied."
    }
  };
  Object.assign(area, details[area.id]);
});

/* Prototype Phase 3. Informational planning content only; no live admissions,
 * prices, awards, credit decisions, country clearance or operational services.
 * Source: supplied brief, including student journey and cost/transfer guidance.
 */
Object.assign(window.VELMONT_CONTENT.routes, {
  "Admissions": "admissions.html",
  "Tuition & Fees": "tuition-fees.html",
  "Scholarships": "scholarships.html",
  "Transfer / Previous Learning": "transfer.html",
  "Time and Cost planning": "tuition-fees.html#completion-planning",
  "Local Students": "student-information.html#local-students",
  "International Students": "student-information.html#international-students",
  "Student Support": "student-support.html",
  "Student Services": "student-support.html"
});

Object.assign(window.VELMONT_CONTENT, {
  decisionJourney: {
    statuses: {
      tuition: "Tuition schedule under financial review",
      funding: window.VELMONT_CONTENT.academicPortfolio.areas[0].funding,
      academic: "Under Academic Review",
      pending: "To Be Confirmed",
      service: "Planned Student Service",
      geography: "Enrollment eligibility by location is not yet established"
    },
    completion: {
      title: "Standard and individual completion planning",
      standardTitle: "Standard completion time",
      standardText: "The expected planning path for a new student beginning a program normally. Program durations remain under academic review; no approved timeline is published here.",
      individualTitle: "Individual completion time",
      individualText: "Previous university study, transfer credit, assessed prior learning and individual academic circumstances may change a student's plan. Any adjustment depends on official evaluation, prerequisites, course availability and future approved policy.",
      note: window.VELMONT_CONTENT.discovery.standardPathNote
    },
    questions: [
      { title: "Can I study here?", text: "Requirements and location eligibility are still being developed.", route: "Admissions" },
      { title: "What will I pay?", text: "Explore the proposed cost structure and what remains under financial review.", route: "Tuition & Fees" },
      { title: "Can funding help?", text: "See the funding framework without assuming an award.", route: "Scholarships" },
      { title: "Can previous learning change my plan?", text: "Understand the proposed academic evaluation approach.", route: "Transfer / Previous Learning" }
    ],
    help: {
      title: "Guidance with a human connection",
      text: "Future individual questions should have a route to a person. Contact channels and Ask Velmont functionality are not yet operational in this prototype.",
      links: [ { label: "Explore Programs", url: "programs.html" }, { label: "Contact Us — coming soon", route: "Contact" }, { label: "Ask Velmont — coming soon", route: "Ask Velmont" } ]
    },
    career: {
      title: "Keep career relevance in view",
      text: "Explore the proposed academic areas for their learning focus and career-relevance status. Program-specific pathways remain under academic review; no job, salary or placement outcome is promised.",
      links: [ { label: "Explore academic areas and career relevance", url: "programs.html" } ]
    }
  },
  admissions: {
    title: "Understand your path before you apply",
    kicker: "Admissions overview",
    intro: "Velmont is a proposed university under development. This page explains the intended admissions journey and the information still being reviewed.",
    statusSource: "university.admissionsStatus",
    jumps: [ { label: "Requirements", anchor: "requirements" }, { label: "Local and International", anchor: "student-paths" }, { label: "Cost and funding", anchor: "decision-questions" } ],
    sections: [
      { id: "admissions-status", title: "Current admissions status", cards: [
        { title: "Applications", text: "No applications, deposits or tuition payments are being accepted through this prototype.", statusSource: "university.admissionsStatus" },
        { title: "Institutional readiness", textSource: "university.statusDetail", statusSource: "university.developmentStatus" }
      ] },
      { id: "admissions-journey", title: "The proposed admissions journey", intro: "A planning sequence, not an active application process. Final requirements, availability and dates will be published as planning progresses.", layout: "steps", cards: [
        { title: "Explore programs", text: "Start with academic direction, study level and career relevance.", link: { label: "Explore academic areas", url: "programs.html" } },
        { title: "Review requirements and location eligibility", text: "Check academic criteria and whether the intended program can enroll a student in their location, once those details are established.", link: { label: "Review requirement status", url: "admissions.html#requirements" } },
        { title: "Understand cost and funding", text: "Review total study cost, possible extra charges and verified funding terms when available.", link: { label: "Explore cost information", route: "Tuition & Fees" } },
        { title: "Discuss previous learning where relevant", text: "Consider prior study or demonstrated learning through a future official academic review.", link: { label: "Understand previous learning", route: "Transfer / Previous Learning" } },
        { title: "Request guidance", text: "The intended journey includes human advice before an individual decision. Working contact channels are still to be established.", link: { label: "See the planned support model", route: "Student Support" } },
        { title: "Apply when admissions open", text: "Applications would follow only after the necessary approvals and operational readiness. This prototype has no application submission." }
      ] },
      { id: "requirements", title: "Admissions requirements being developed", intro: "These are categories for future approved criteria, not current eligibility rules or a request to submit documents.", cards: [
        { title: "Prior education", text: "Academic entry criteria and any exceptions are to be established for each degree and study level.", statusSource: "decisionJourney.statuses.academic" },
        { title: "Documents", text: "Required records, document format and review procedures remain to be confirmed.", statusSource: "decisionJourney.statuses.pending" },
        { title: "Language requirements", text: "English proficiency, accepted evidence and any exemptions require academic confirmation. No test score is stated.", statusSource: "decisionJourney.statuses.academic" },
        { title: "Program-specific requirements", text: "Prerequisites and entry criteria will accompany academically supplied degree information.", statusSource: "decisionJourney.statuses.academic" },
        { title: "International documentation", text: "Credential evaluation, country-specific documentation and review routes are not finalized.", statusSource: "decisionJourney.statuses.pending" },
        { title: "Technology requirements", text: "Devices, connectivity, accessibility alternatives and any required tools will be specified with the learning model.", statusSource: "decisionJourney.statuses.pending" }
      ] },
      { id: "student-paths", title: "Information for your circumstances", cards: [
        { titleSource: "students.local.title", textSource: "students.local.text", link: { label: "Local student guidance", route: "Local Students" } },
        { titleSource: "students.international.title", textSource: "students.international.text", link: { label: "International student guidance", route: "International Students" } }
      ] }
    ],
    showQuestions: true, showCompletion: true, showCareer: true
  },
  tuition: {
    title: "See what your study cost would include",
    kicker: "Time and cost · guided planning",
    intro: "The planned cost experience brings tuition, mandatory fees, other necessary education expenses and funding into one view. Approved amounts are not yet available.",
    statusSource: "decisionJourney.statuses.tuition",
    jumps: [ { label: "Cost components", anchor: "cost-components" }, { label: "Program cost status", anchor: "program-costs" }, { label: "Completion planning", anchor: "completion-planning" } ],
    costs: [
      { id: "tuition", title: "Program tuition", text: "Future rates should state the price basis, billing period and study-load assumptions.", amount: null },
      { id: "fees", title: "Mandatory fees", text: "All required fees should be shown alongside tuition, rather than discovered later.", amount: null },
      { id: "materials", title: "Materials and required tools", text: "Required books, learning materials, software or tools should be identified if applicable.", amount: null },
      { id: "technology", title: "Technology and assessment costs", text: "Any necessary technology, assessment, evaluation or proctoring charges should be explained if applicable.", amount: null }
    ],
    costNote: "These are cost categories to be assessed, not confirmation that every category will carry a charge. Billing currency and approved amounts are to be confirmed.",
    programCostIntro: "Academic areas currently provide planning context. Final degree-level prices will be added after academic and financial review.",
    sections: [
      { id: "payment-context", title: "The full cost and payment picture", cards: [
        { title: "What is included?", text: "An approved schedule should identify total education cost and all mandatory extras. Personal living costs should be shown separately." },
        { title: "What is due, and when?", text: "Payment periods, terms, withdrawal/cancellation and refund information remain to be confirmed. This prototype does not accept payments.", statusSource: "decisionJourney.statuses.pending" },
        { title: "Could previous learning affect cost?", text: "Accepted usable credit may affect remaining study requirements, time and cost. Any effect depends on official academic evaluation and approved prices; no saving is promised.", link: { label: "Review previous learning", route: "Transfer / Previous Learning" } },
        { title: "Could funding help?", text: "Verified nonrepayable awards can reduce net education cost. Loans finance a cost, and employer reimbursement may arrive after payment is due; neither should be treated as an assumed scholarship.", link: { label: "Review funding status", route: "Scholarships" } }
      ] }
    ],
    showCompletion: true
  },
  scholarships: {
    title: "Understand funding without assuming an award",
    kicker: "Scholarships and funding",
    intro: "Velmont's proposed funding framework is being developed. Any future award must have established funding, terms and an appropriate review process before it is presented as available.",
    statusSource: "decisionJourney.statuses.funding",
    jumps: [ { label: "What is established?", anchor: "funding-status" }, { label: "Funding states", anchor: "funding-types" }, { label: "Eligibility", anchor: "funding-eligibility" } ],
    sections: [
      { id: "funding-status", title: "What is established and what is proposed?", cards: [
        { title: "Confirmed information in the supplied material", text: "The planning brief calls for a funded founding-cohort scholarship policy. It does not establish approved scholarship names, awards, eligibility rules or deadlines." },
        { title: "Proposed funding concept", text: "A founding-cohort scholarship framework is intended for development, subject to funding and approved terms.", statusSource: "decisionJourney.statuses.funding" },
        { title: "Federal aid", text: "Do not assume federal aid for the founding cohort. Eligibility is not established by this prototype or by a proposed university's development status.", statusSource: "decisionJourney.statuses.pending" }
      ] },
      { id: "funding-types", title: "How future funding information should be presented", intro: "These categories describe how the brief intends funding to be explained. They are not current Velmont offers.", cards: [
        { title: "Confirmed award", text: "Show amount, source, covered period, renewal terms and satisfied conditions only after an award is confirmed." },
        { title: "Conditional estimate", text: "Identify assumptions, missing evidence and who makes the final decision. An estimate is not an award." },
        { title: "Competitive opportunity", text: "Publish verified criteria and deadlines when supplied; do not assume a student will receive an award." },
        { title: "Unavailable funding", text: "State restrictions clearly rather than implying that support applies to every student or program." },
        { title: "Loans and payment plans", text: "If established later, disclose repayment obligations and charges separately from grants and scholarships." }
      ] },
      { id: "funding-eligibility", title: "Eligibility and availability remain under review", cards: [
        { title: "Award details", text: "Names, amounts, eligibility, deadlines, renewal and evidence requirements are not finalized.", statusSource: "decisionJourney.statuses.pending" },
        { title: "Compatible funding", text: "Future guidance should apply stacking restrictions and relevant student/program conditions. Advertised maxima should not simply be added together." }
      ] },
      { id: "funding-next-steps", title: "How future students would explore funding", layout: "steps", cards: [
        { title: "Choose an academic direction", text: "Start with the program and its eventual cost information.", link: { label: "Explore academic areas", url: "programs.html" } },
        { title: "Read verified funding terms", text: "Review eligibility, covered period, renewal and compatibility once the details are published." },
        { title: "Discuss an individual package", text: "Any future individual assessment requires the responsible human reviewer. This prototype does not issue an award or collect funding applications." }
      ] },
      { id: "funding-and-cost", title: "Connect funding to your total study cost", intro: "Net education cost after a confirmed nonrepayable award is different from the amount due each term. Availability and timing must both be clear.", links: [ { label: "Explore tuition and cost components", route: "Tuition & Fees" } ] }
    ]
  },
  priorLearning: {
    title: "Bring previous learning into the conversation",
    kicker: "Transfer and previous learning",
    intro: "Previous coursework or demonstrated learning may eventually inform an individual study plan. Credit decisions depend on future approved policy and official academic evaluation.",
    statusSource: "decisionJourney.statuses.academic",
    jumps: [ { label: "Learning and evidence", anchor: "learning-evidence" }, { label: "Evaluation concept", anchor: "evaluation-concept" }, { label: "Completion planning", anchor: "completion-planning" } ],
    sections: [
      { id: "learning-evidence", title: "What previous learning can mean", intro: "The brief identifies these possible evaluation categories. Eligible evidence and the eventual review rules remain to be established. No documents can be uploaded here.", cards: [
        { title: "Previous coursework", text: "Prior university study and relevant course records may be considered for alignment with a future program." },
        { title: "Certifications and examinations", text: "Relevant certifications and recognized examinations may provide evidence for evaluation, where policy allows." },
        { title: "Military learning", text: "Recognized military learning may be considered where applicable and supported by the future policy." },
        { title: "Professional experience", text: "Assessed learning demonstrated through professional experience may be considered. Years worked alone do not establish academic credit." }
      ] },
      { id: "evaluation-concept", title: "The proposed evaluation journey", layout: "steps", cards: [
        { title: "Choose the intended program", text: "Previous learning must be relevant to the program and its requirements.", link: { label: "Explore academic directions", url: "programs.html" } },
        { title: "Review the future evidence requirements", text: "Approved guidance would explain what records or assessments are needed, any fees and a secure submission route." },
        { title: "Receive an official academic evaluation", text: "The responsible academic team would determine usable credit, distinguish major/general-education/elective requirements and identify outstanding study." },
        { title: "Review an individual plan", text: "A confirmed plan would account for prerequisites, course availability and remaining requirements. Informal estimates must remain separate from official decisions." }
      ] },
      { id: "transfer-policy-status", title: "What is not finalized", cards: [
        { title: "Academic limits and rules", text: "Maximum usable credit, residency, grades, recency, duplicated learning and program-specific rules remain under academic review.", statusSource: "decisionJourney.statuses.academic" },
        { title: "Process and fees", text: "Evidence requirements, assessment fees, decision timing and reconsideration/appeal routes are to be confirmed.", statusSource: "decisionJourney.statuses.pending" },
        { title: "Recognition of credit", text: "Velmont's future acceptance of incoming credit would not guarantee that another institution accepts Velmont credit." }
      ] },
      { id: "remaining-cost", title: "Time and cost depend on usable credit", intro: "A future academic evaluation may change remaining requirements and therefore the individual study path. No shortened duration, credit award or financial saving is promised here.", links: [ { label: "Explore time and cost", route: "Time and Cost planning" } ] }
    ],
    showCompletion: true
  },
  studentInformation: {
    title: "One university journey, guidance for your location",
    kicker: "Local and International Students",
    intro: "Find the questions relevant to your circumstances without switching to a separate university portal. Residence, citizenship and the place where you intend to use a degree may differ.",
    statusSource: "university.admissionsStatus",
    jumps: [ { label: "Local · United States", anchor: "local-students" }, { label: "International Students", anchor: "international-students" } ]
  },
  localStudents: {
    title: window.VELMONT_CONTENT.students.local.title,
    intro: window.VELMONT_CONTENT.students.local.text,
    cards: [
      { title: "Admissions and eligibility", text: "Academic requirements and state-level enrollment permissions must be established before an individual eligibility decision.", statusSource: "university.admissionsStatus", link: { label: "Review admissions status", route: "Admissions" } },
      { title: "Academic direction and careers", text: "Explore undergraduate/graduate planning context and proposed learning focus; final degree and career pathways remain under review.", link: { label: "Explore academic areas", url: "programs.html" } },
      { title: "Cost and funding", text: "See cost categories and the funding framework without assumed tuition rates or awards.", statusSource: "decisionJourney.statuses.tuition", link: { label: "Explore cost information", route: "Tuition & Fees" } },
      { title: "Previous learning", text: "Usable credit and an individual completion plan would depend on official academic evaluation.", link: { label: "Review previous learning", route: "Transfer / Previous Learning" } },
      { title: "Human support", text: "Advising and student services are planned. Working channels, hours and response expectations are not yet established.", link: { label: "Explore planned student support", route: "Student Support" } }
    ]
  },
  internationalStudents: {
    title: window.VELMONT_CONTENT.students.international.title,
    intro: window.VELMONT_CONTENT.students.international.text,
    cards: [
      { title: "Can the university enroll me?", text: "Eligibility requires program-specific and location-specific review. Researching a market does not authorize enrollment there.", statusSource: "decisionJourney.statuses.geography" },
      { title: "Which academic direction fits?", text: "Explore the proposed areas and undergraduate/graduate context. Final degrees and entry requirements are still being developed.", link: { label: "Explore academic areas", url: "programs.html" } },
      { title: "Documents and language", text: "International credential evaluation, required documents, English proficiency and exceptions await confirmation. Teaching language and support language must be distinguished.", statusSource: "decisionJourney.statuses.academic", link: { label: "Review requirement categories", url: "admissions.html#requirements" } },
      { title: "Cost, funding and payments", text: "Approved tuition, billing currency, payment guidance and funding eligibility are not established. No exchange-rate or award estimate is provided.", statusSource: "decisionJourney.statuses.tuition", link: { label: "Explore funding status", route: "Scholarships" } },
      { title: "Recognition and regulated professions", text: "Recognition depends on the intended use and relevant authorities. Illinois authorization or a future accreditation plan cannot establish foreign recognition or professional licensure." },
      { title: "Support across time zones", text: "Future guidance should explain contact routes, hours, languages and response expectations. These service details remain to be confirmed.", link: { label: "Explore planned support", route: "Student Support" } }
    ],
    markets: ["Egypt", "India", "Colombia", "Brazil", "Australia", "United Arab Emirates", "Saudi Arabia"],
    marketNote: "These are research targets from the planning brief, not cleared enrollment locations. UAE and Saudi Arabia are suggested Gulf candidates. No overseas campus is implied.",
    recognitionNote: "This prototype makes no visa, immigration, degree-recognition or employment guarantee. Confirm intended-use recognition and regulated-profession requirements with the relevant authorities when verified program information becomes available."
  },
  studentSupport: {
    title: "Technology with people in the learning journey",
    kicker: "Planned Student Support",
    intro: window.VELMONT_CONTENT.support.body,
    statusSource: "decisionJourney.statuses.service",
    jumps: [ { label: "Planned services", anchor: "planned-services" }, { label: "Service details", anchor: "service-details" } ],
    services: [
      { title: "Academic advising", text: "Planned guidance around program choice, study requirements and individual academic planning." },
      { title: "Tutoring and academic help", text: "The brief anticipates access to academic help; service scope and delivery arrangements are to be established." },
      { title: "Library and learning resources", text: "Planned access to learning resources, with actual collections, access arrangements and tools still to be confirmed." },
      { title: "Technical support", text: "Planned assistance with learning technology; supported systems and service channels are not yet operational." },
      { title: "Accessibility support", text: "Planned accessible routes and accommodation processes. Operational procedures and contacts remain under review." },
      { title: "Career guidance", text: "The intended career-support approach may include portfolio, interview and job-search guidance. Scope and staffing are not finalized; no employment outcome is promised." }
    ],
    sections: [
      { id: "service-details", title: "What each future service should make clear", cards: [
        { title: "Scope and access", text: "Which questions the service can address, how to reach it and what escalation or review route is available.", statusSource: "decisionJourney.statuses.pending" },
        { title: "Hours, languages and time zones", text: "Published availability should match staffing capacity and distinguish teaching language from support language.", statusSource: "decisionJourney.statuses.pending" },
        { title: "Response expectations and ownership", text: "Response targets, responsible service owners and human follow-up routes are still to be established.", statusSource: "decisionJourney.statuses.pending" }
      ] },
      { id: "human-responsibility", title: "Human responsibility remains central", intro: "AI may support information and learning, but it should not replace human academic responsibility or decide individual admission, funding or credit matters. Working systems and staffed services belong to later operational readiness.", links: [ { label: "Explore the proposed academic model", url: "academic-model.html" }, { label: "Local student guidance", route: "Local Students" }, { label: "International student guidance", route: "International Students" } ] }
    ]
  }
});

/* Phase 4 metadata references the existing content; no parallel fact store. */
Object.assign(window.VELMONT_CONTENT.routes, {Search:'search.html','Ask Velmont':'ask-velmont.html','Investor Access':'investor-login.html'});
window.VELMONT_CONTENT.interactive = {
  searchSources: [
    ['About Velmont','About','about','about.html','welcome university'],
    ['Mission','About','university.mission','about.html#mission','purpose'],
    ['Vision','About','university.vision','about.html#vision','future'],
    ['Values','About','about.values','about.html#values','principles'],
    ['University status','Status','about.statusFacts','about.html#university-status','accreditation approval development'],
    ['Undergraduate study','Academics','academicPortfolio.undergraduate','programs.html?level=undergraduate','bachelor undergraduate'],
    ['Graduate study','Academics','discovery.graduateIntent','programs.html?level=graduate','master masters graduate'],
    ['Admissions','Admissions','admissions','admissions.html','apply entry requirements'],
    ['Tuition and fees','Cost','tuition','tuition-fees.html','cost price tuition fees'],
    ['Scholarships and funding','Funding','scholarships','scholarships.html','scholarship grant aid funding'],
    ['Completion time','Planning','decisionJourney.completion','transfer.html#completion-planning','duration how long time degree'],
    ['Transfer and previous learning','Planning','priorLearning','transfer.html','transfer credits prior previous study'],
    ['Local students','Students','localStudents','student-information.html#local-students','local usa united states'],
    ['International students','Students','internationalStudents','student-information.html#international-students','international country recognition visa'],
    ['Student support','Support','studentSupport','student-support.html','support help advising accessibility'],
    ['Academic model and AI learning','Learning','modelDetail','academic-model.html#ai-learning','ai artificial intelligence learning']
  ],
  prompts: ['Help me explore programs','Compare undergraduate and graduate study','How long could my degree take?','How much is tuition?','Are scholarships available?',"I'm an international student",'Can previous study reduce my completion time?','What careers connect to IT or Business?','Send me the tuition information.'],
  advisorDisclosure: 'Scripted university advisor demo. Responses use the prototype content; no external AI service is connected.',
  emailRequest: 'This is a simulated information request. What email address would you like to use? Do not enter sensitive information. You can type cancel.',
  emailCaptured: 'Your information request has been captured for this interaction only. Email delivery is not connected in this demo. No email was sent, and your address has not been saved.',
  boundary: 'This demo cannot make individual admission, funding, credit, visa, recognition or employment decisions. Those questions require the relevant human reviewer and verified information.',
  fallback: 'I can help explore academic areas, study levels, time, cost, funding, international guidance and previous learning. Try a suggested prompt or browse Search. Individual decisions need future human support.',
  investorDisclosure: 'Demo access only. This client-side login is not secure authentication. Use only the displayed demo credentials; no confidential information is protected here.',
  investorSections: [
    ['University overview','hero.body','about.html'],
    ['Proposed academic direction','academicPortfolio.intro','programs.html'],
    ['AI-integrated education strategy','aiLearning.body','academic-model.html'],
    ['Student decision experience','academicModel.body','admissions.html'],
    ['Market research context','internationalStudents.marketNote','student-information.html#international-students'],
    ['Academic planning status','discovery.programsPending','programs.html'],
    ['Leadership and governance','about.governanceNote','about.html#university-status']
  ],
  investorResources: 'Financial scenarios, capital-use information and evidence documents have not been supplied for this dashboard. No forecasts, valuation, investment returns or confirmed partnerships are presented.',
  capabilities: ['Academic-area discovery and student decision pages','Client-side content search','Scripted advisor with simulated information requests','Investor dashboard with demo-only access']
};
// Remove obsolete availability labels now that the advisor has a real demo destination.
window.VELMONT_CONTENT.decisionJourney.help.links.find(item => item.route === 'Ask Velmont').label = 'Ask Velmont';
window.VELMONT_CONTENT.decisionJourney.help.text = 'Explore information with the scripted Ask Velmont demo. Individual decisions need human review; operational contact channels remain to be established.';
