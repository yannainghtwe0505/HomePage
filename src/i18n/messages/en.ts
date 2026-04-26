import { ja } from './ja'
import { privacyPolicyEn } from './privacyPolicyEn'

export const en: typeof ja = {
  meta: {
    home: 'CMC — Careers & Technology',
    company: 'Company — CMC',
    business: 'Business — CMC',
    recruit: 'Recruit — CMC',
    access: 'Access — CMC',
    partner: 'Partners — CMC',
    contact: 'Contact — CMC',
    privacy: 'Privacy — CMC',
  },
  nav: {
    home: 'Home',
    company: 'Company',
    business: 'Business',
    recruit: 'Recruit',
    access: 'Access',
    partner: 'Partner',
    contact: 'Contact',
    privacy: 'Privacy',
  },
  header: {
    joinUs: 'Join us',
    careersShort: 'Careers',
    menu: 'Menu',
  },
  lang: {
    switch: 'Language',
    ja: '日本語',
    en: 'English',
  },
  footer: {
    tagline:
      'IT-focused talent solutions—thoughtful matching for engineers and enterprises across Greater Tokyo and beyond.',
    trustBlock:
      'CMC Inc. (株式会社シ・エム・シ) · Ginza Sanno Building 3F, 4-10-10 Ginza, Chuo-ku, Tokyo 104-0061, Japan · Tel +81-3-3544-0644 (weekdays 9:00–19:00) · info@cmc-a.co.jp',
    explore: 'Explore',
    privacyLine:
      'For privacy requests and disclosures, please use the contact form or email. Ginza Sanno Building 3F, 4-10-10 Ginza, Chuo-ku, Tokyo 104-0061 · ',
    copyright: 'All rights reserved.',
  },
  home: {
    hero: {
      kicker: 'CMC Inc. · IT talent services',
      line1: 'Licensed IT staffing',
      line2: 'and delivery support.',
      serviceOneLiner:
        'CMC is a Tokyo (Ginza)–based talent services company providing IT engineer staffing and placement (including SES, general dispatch, and paid job introduction) plus software development support and technical consulting.',
      sub: 'Founded in 1996. We support enterprise delivery and engineers across Greater Tokyo under licensed, compliant operations.',
      ctaPrimary: 'Careers & openings',
      trustLine:
        'Tokyo / Ginza HQ · IT talent services (dispatch, placement, SES) · Staffing license 13-301513 · Job placement 13-ユ-302642',
      linkContact: 'Business inquiries',
      linkBusiness: 'Services & licenses',
      linkCompany: 'Company profile',
    },
    capabilities: {
      eyebrow: 'What we deliver',
      title: 'From AI and cloud to delivery teams—one partner',
      sub: 'Licensed talent services and development support—from platform work through team staffing—for client programs across Greater Tokyo.',
      serviceLead:
        'Core offerings: engineer dispatch under SES contracts, general staffing, paid job-placement, and software/consulting support—combined to match each engagement.',
      serviceCta: 'Services, licenses & details',
      items: [
        {
          title: 'AI & data',
          body: 'ML pipelines, MLOps, and analytics platforms—translating business problems into shipped models with operational guardrails.',
        },
        {
          title: 'Cloud & scale',
          body: 'AWS/GCP foundations, containers, IaC, and cost-aware scaling. We help you assemble teams that build resilient platforms.',
        },
        {
          title: 'Application delivery',
          body: 'Business systems to modern web stacks. We staff cross-functional squads with quality, security, and velocity in mind.',
        },
        {
          title: 'Talent operations',
          body: 'SES, dispatch, and placement under licensed operations—speed with compliance and predictable onboarding.',
        },
      ],
    },
    whyChoose: {
      eyebrow: 'Why CMC',
      title: 'Faster decisions, deeper technical fit',
      sub: 'We align staffing decisions with your constraints, priorities, and delivery context—not generic coverage.',
      items: [
        {
          title: 'Decision velocity',
          body: 'Named coordinators own sourcing through onboarding, cutting back-and-forth and calendar drag.',
        },
        {
          title: 'Engineering literacy',
          body: 'Teams who understand SDLC, SRE, and security trade-offs—so mismatches are caught early, not after day one.',
        },
        {
          title: 'Modern stack exposure',
          body: 'Cloud-native defaults, observability, and disciplined CI/CD—aligned with how serious product orgs ship.',
        },
        {
          title: 'Relationship design',
          body: 'We plan for retention and growth—not one-off staffing spikes that quietly decay.',
        },
      ],
    },
    techStrip: {
      eyebrow: 'Technology',
      title: 'Ecosystems you will actually touch',
      sub: 'Assignments vary, but these technologies show up often in client programs we support.',
      items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Java / Spring', 'TypeScript / React', 'PostgreSQL', 'Observability'],
    },
    credibility: {
      eyebrow: 'Corporate facts',
      title: 'Public-profile snapshot',
      sub: 'For full disclosures and licenses, see the Company page.',
      licenseSummary:
        'General staffing license 13-301513 · Paid job-placement license 13-ユ-302642 · PrivacyMark certified (since 2010).',
      rows: [
        { label: 'Legal name', value: 'CMC Inc. (株式会社シ・エム・シ)' },
        { label: 'Head office', value: 'Ginza Sanno Building 3F, 4-10-10 Ginza, Chuo-ku, Tokyo 104-0061' },
        { label: 'Phone', value: '+81-3-3544-0644 (weekdays 9:00–19:00)' },
        { label: 'Founded', value: 'September 20, 1996' },
        {
          label: 'Business',
          value: 'Software development support, in-house system consulting support, staffing, paid job placement',
        },
        { label: 'Licenses', value: 'Staffing 13-301513 / Job placement 13-ユ-302642' },
        { label: 'Certification', value: 'PrivacyMark' },
      ],
      linkCompany: 'Full company profile',
      linkContact: 'Contact',
    },
    news: {
      eyebrow: 'News',
      title: 'Updates',
      note: 'A selection of recent announcements. For full details, call or use the contact form.',
      items: [
        {
          date: 'Apr 15, 2025',
          dateIso: '2025-04-15',
          title:
            'Corporate website updated: revised structure for company profile, services, careers, and privacy policy, with improved readability on smartphones.',
        },
        {
          date: 'Feb 10, 2025',
          dateIso: '2025-02-10',
          title:
            'We continue hiring for permanent and contract roles, and for partner firms. See the Careers page and en-gage listings for open positions and conditions.',
        },
        {
          date: 'Nov 8, 2024',
          dateIso: '2024-11-08',
          title:
            'Year-end / New Year schedule: closed Dec 28–Jan 5; normal business resumes Jan 6. Email received during the closure will be answered after we reopen.',
        },
      ],
    },
    storyVision: {
      eyebrow: 'Direction',
      title: 'In-house products and cloud / data initiatives',
      body: 'We continue to strengthen in-house development and cloud/data capabilities so engineers can contribute across technology and business needs. Details are posted on the Careers section.',
      ctaVision: 'Vision & values',
      ctaFuture: 'Our Future Path',
      ctaJobs: 'Open positions',
    },
    about: {
      eyebrow: 'About',
      title: 'From staffing to team design and retention',
      body: 'We combine dispatch, placement, and SES under licensed, contract-compliant operations. Coordinators assess role scope, delivery process, and operational load from matching through ongoing support.',
      link: 'Company overview',
    },
    highlights: {
      eyebrow: 'At a glance',
      title: 'Built for people who ship',
      sub: 'Three reasons engineers and teams choose CMC.',
      learnMore: 'Learn more',
      cards: [
        {
          subtitle: 'Business',
          title: 'What we do',
          copy: 'End-to-end IT talent services—from backend and frontend to infrastructure.',
        },
        {
          subtitle: 'Culture',
          title: 'How we support',
          copy: 'Dedicated coordinators and monthly touchpoints—not spreadsheets alone.',
        },
        {
          subtitle: 'Hiring',
          title: 'Room to grow',
          copy: 'Depth, stability, and colleagues who back your engineering career.',
        },
      ],
    },
    jobs: {
      eyebrow: 'Hiring',
      title: 'Featured roles — apply in minutes',
      description:
        'Highlighted openings below. Full details and application on en-gage—you can also email us about a specific role.',
      featuredNote: '※ Examples only. Check en-gage for the latest openings.',
      viewAllEngage: 'View all jobs on en-gage',
      quickApply: 'Email about this role',
      applyEngage: 'Apply on en-gage',
      cards: [
        {
          badge: 'Full-time',
          title: 'System engineer (PG / SE)',
          meta: 'On-site at Greater Tokyo clients · Flex possible (project-dependent)',
          salary: 'From ¥4M/year (experience-based)',
          tags: 'Java · Spring · AWS · Team delivery',
          body: 'Second-career and early-career engineers welcome. Coordinators support selection through onboarding.',
          mailSubject: 'Inquiry: System engineer (PG/SE)',
        },
        {
          badge: 'Full-time',
          title: 'IT coordinator (Ginza HQ)',
          meta: 'Chuo-ku, Tokyo · No relocation',
          salary: 'From ¥290k/month + incentives (e.g. ¥5.2M/year)',
          tags: 'Talent industry · B2B · Engineer support',
          body: 'Bridge clients and engineers. A people-first role for strong listeners and communicators.',
          mailSubject: 'Inquiry: IT coordinator',
        },
        {
          badge: 'Full-time',
          title: 'Cloud / infrastructure engineer',
          meta: 'Greater Tokyo · Build & operations',
          salary: 'Competitive by experience',
          tags: 'Kubernetes · Terraform · Linux · Networking',
          body: 'Cloud migration, platform design, and reliability-focused programs.',
          mailSubject: 'Inquiry: Cloud / infrastructure engineer',
        },
      ],
    },
    cta: {
      title: 'Hiring and business inquiries—start in one place',
      body: 'Engineers: apply or book a conversation. Enterprises: talk to us about staffing, delivery, or partnerships.',
      engage: 'Apply on en-gage',
      recruitPage: 'Careers hub',
      companyPage: 'Company',
      contactBusiness: 'Contact (business)',
    },
  },
  whyJoin: {
    eyebrow: 'Why join us',
    title: 'Built for people who like to figure things out',
    sub: 'If you care about clarity, curiosity, and production-grade code—you will feel at home.',
    items: [
      {
        title: 'Modern tech',
        description: 'Cloud-native stacks, solid tooling, and a culture of code review.',
      },
      {
        title: 'Real impact',
        description: 'Work that touches products, infrastructure, and the people who depend on them.',
      },
      {
        title: 'Continuous learning',
        description: 'Pairing, certification support, and space to improve your craft.',
      },
      {
        title: 'Trust & pace',
        description: 'Sensible goals and deadlines—and respect for focus time.',
      },
    ],
  },
  visionValues: {
    eyebrow: 'Vision & Values',
    visionTitle: 'Move the world forward with technology',
    visionBody:
      'We aspire to be an engineering-driven organization that unlocks industry and society’s hardest problems through software and data. We combine global perspective with local depth—and champion every engineer who ships real-world impact.',
    missionTitle: 'Mission',
    missionBody:
      'We connect outstanding IT talent with ambitious projects—and stay beside both sides so the match lasts. Our mission is to make technology-led value creation show up in client outcomes and in every engineer’s career.',
    coreTitle: 'Core values',
    items: [
      {
        title: 'Passion for Technology',
        titleJa: 'テクノロジーへの情熱',
        body: 'Stay curious about new stacks and practices—and share a bar for production quality.',
      },
      {
        title: 'Continuous Growth',
        titleJa: '継続的な成長',
        body: 'Never stop learning. We climb the career ladder together with feedback and mentorship.',
      },
      {
        title: 'Innovation & Challenge',
        titleJa: 'イノベーションと挑戦',
        body: 'Tackle unsolved problems head-on—and protect a culture where experimentation is safe.',
      },
      {
        title: 'Collaboration & Teamwork',
        titleJa: '協働とチームワーク',
        body: 'Ship outcomes across disciplines—with transparency and mutual respect.',
      },
      {
        title: 'Ownership & Responsibility',
        titleJa: 'オーナーシップと責任',
        body: 'Participate in decisions and commit to outcomes. Own your domain like a pro.',
      },
      {
        title: 'Impact on Society',
        titleJa: '社会へのインパクト',
        body: 'Design with ethics and security in mind—technology should improve lives and industries.',
      },
    ],
  },
  ourFuturePath: {
    eyebrow: 'Future direction',
    title: 'Our Future Path',
    tagline: 'Building the future through **AI**-driven innovation, **machine learning**, and **scalable**, **cloud**-first technology.',
    paragraphs: [
      'Over the next few years we will launch **proprietary products** and **platforms**—not only client delivery—so engineers can own the full lifecycle and ship solutions the market remembers.',
      '**AI**, **machine learning** (**ML**), and modern **cloud** architecture sit at the center of how we design: from experimentation and training to deployment, observability, and cost-aware scale.',
      'We are shifting from service-only execution to **product-driven innovation**: reusable building blocks, crisp metrics, and roadmap clarity—so impact shows up in code and in customer outcomes.',
      'You will have room to **experiment**, learn from small failures fast, and **grow technically** with mentors who care about craft, reliability, and security.',
    ],
    directionsLabel: 'Where we are headed',
    bullets: [
      {
        title: 'Own products & platforms',
        body: 'We will bring **proprietary services** to market on a multi-year horizon—engineer-led, outcome-led, built to last.',
      },
      {
        title: 'AI & machine learning',
        body: 'Connect **AI** and **ML** to real business problems—from data pipelines to production monitoring and responsible rollout.',
      },
      {
        title: 'Cloud-native scale',
        body: 'Design for growth with **cloud**-native patterns, automation, and resilient operations across environments.',
      },
      {
        title: 'High-performance engineering teams',
        body: 'Codify reviews, SRE practices, and security so small teams sustain high throughput without burning out.',
      },
      {
        title: 'Globally competitive technology',
        body: 'Expand exposure to global stacks and customers—raising the bar for architecture, documentation, and collaboration.',
      },
    ],
  },
  company: {
    page: {
      eyebrow: 'Company',
      title: 'Who we are',
      description:
        'An IT-focused talent solutions company. We align role, skills, and career stage for clients and candidates—building long-term trust through licensed operations and careful delivery.',
    },
    message: {
      tagline: 'The right talent solution for every situation.',
      body:
        'CMC is an IT-specialized talent solutions company. We combine case experience, practical know-how, and attentive service across staffing, placement, and engineering support. We maintain recognized privacy practices (PrivacyMark) and transparent, licensed operations.',
    },
    trustPillars: {
      title: 'Why teams trust us',
      items: [
        {
          title: 'IT-native focus',
          body: 'From systems development to infrastructure, our services stay centered on engineering delivery.',
        },
        {
          title: 'Licensed & certified',
          body: 'Staffing and job-placement license numbers are published; PrivacyMark-certified practices.',
        },
        {
          title: 'Coordinator-led support',
          body: 'Named coordinators stay close to both career goals and project realities—beyond spreadsheets.',
        },
      ],
    },
    businessCtas: {
      title: 'For clients & partners',
      sub: 'Services, partnerships, careers, and direct inquiries.',
      cards: [
        {
          title: 'Services',
          body: 'SES, dispatch, and consulting—how we support IT delivery end to end.',
          to: '/business',
          cta: 'View services',
        },
        {
          title: 'Partnerships',
          body: 'Alliance and collaboration inquiries.',
          to: '/partner',
          cta: 'Partnerships',
        },
        {
          title: 'Careers',
          body: 'Vision, openings, and how we work with engineers.',
          to: '/recruit',
          cta: 'Careers',
        },
        {
          title: 'Contact',
          body: 'Materials and service questions.',
          to: '/contact',
          cta: 'Contact',
        },
      ],
    },
    profile: {
      title: 'Company profile (public record)',
      hint: 'Information below is for public web use—verify against your latest approved corporate disclosure.',
      rows: [
        { label: 'Company', value: 'CMC Inc. (株式会社シ・エム・シ)' },
        { label: 'Founded', value: 'September 20, 1996' },
        { label: 'Head office', value: 'Ginza Sanno Building 3F, 4-10-10 Ginza, Chuo-ku, Tokyo 104-0061' },
        { label: 'Representative', value: 'Masato Tatebayashi, Representative Director' },
        { label: 'Capital', value: '¥10 million' },
        {
          label: 'Business',
          value:
            'Software development support, in-house system consulting, staffing (13-301513), job placement (13-ユ-302642)',
        },
        { label: 'Employees', value: '330 (including contract staff, reference)' },
        { label: 'Phone', value: '+81-3-3544-0644', href: 'tel:+81335440644' },
        { label: 'Fax', value: '+81-3-3544-0645' },
        { label: 'Toll-free', value: '0120-550-454 (weekdays)', href: 'tel:+81120550454' },
        { label: 'Corporate site', value: 'https://www.cmc-a.co.jp/', href: 'https://www.cmc-a.co.jp/' },
      ],
    },
    history: {
      title: 'Milestones',
      items: [
        { year: '1996', text: 'CMC established in Kanda-Sudachō, Tokyo.' },
        { year: '2005', text: 'Head office relocated to Ginza.' },
        { year: '2006', text: 'General staffing license acquired.' },
        { year: '2008', text: 'Job placement license acquired.' },
        { year: '2010', text: 'PrivacyMark certification acquired.' },
        { year: '2020', text: 'Technical staffing milestone surpassed.' },
      ],
    },
    cta: { services: 'View services', careers: 'Careers' },
    visionTeaser: {
      title: 'Vision & values',
      body: 'Read about the future we are building, our principles, and where we are headed next—on the Careers page.',
      linkVision: 'Vision & values',
      linkFuture: 'Our Future Path',
    },
    emailLabel: 'Email',
    quickContactTitle: 'Head office & contact',
  },
  business: {
    page: {
      eyebrow: 'Business',
      title: 'Services built for IT delivery',
      description: 'We match engineers to systems, products, and teams—focused on IT from end to end.',
    },
    services: [
      {
        title: 'Engineering placement (SES)',
        body: 'From business systems to web services—backend through frontend development engagements.',
      },
      {
        title: 'Staffing & support',
        body: 'Dispatch and assistant coverage where teams need dependable capacity.',
      },
      {
        title: 'Consulting & delivery support',
        body: 'Practical help for in-house systems and delivery organizations.',
      },
    ],
    strengthsTitle: 'How we differentiate',
    strengths: [
      { title: 'Dedicated coordinators', body: 'A named partner who understands your skills and goals.' },
      { title: 'High-signal opportunities', body: 'Broad Greater Tokyo demand across stacks and domains.' },
      { title: 'Human follow-through', body: 'Monthly touchpoints and candid career guidance.' },
      { title: 'Engineer-first support', body: 'Fast payment cycles, learning support, and practical perks.' },
    ],
    engineerRoom: {
      title: 'Engineer Room',
      body: 'Our engineer desk surfaces Greater Tokyo opportunities with coordinator-led support end to end.',
      link: 'Visit Engineer Room (official) →',
    },
    cta: { partner: 'Partnerships', contact: 'Contact sales' },
  },
  recruit: {
    hero: {
      kicker: 'Recruit',
      line1: 'For engineers who want',
      line2: 'depth, growth, and backup.',
      sub: 'Serious systems—with coordinators who speak engineering, sane pacing, and a learning culture.',
      engage: 'View openings (en-gage)',
      email: 'Email recruiting',
    },
    culture: {
      eyebrow: 'Culture',
      title: 'How it feels day to day',
      sub: 'Practical, human, and engineering-aware.',
      items: [
        { title: 'Coordinators who advocate', body: 'They help shape fit and workload so you can focus on craft.' },
        { title: 'Stability with stretch', body: 'Long-term assignments with room for technical depth.' },
        { title: 'Learning is normal', body: 'Certification support and knowledge sharing—not a dead-end bench.' },
      ],
    },
    stack: {
      eyebrow: 'Tech stack',
      title: 'Representative domains',
      sub: 'Stacks vary by assignment—this is a sample of ecosystems we often support.',
      items: [
        'TypeScript / JavaScript',
        'Java / Spring',
        'Python',
        'Go',
        'C# / .NET',
        'React / Vue',
        'AWS / GCP',
        'Kubernetes',
        'SQL & data stores',
        'CI/CD pipelines',
        'Observability',
      ],
    },
    careers: {
      sectionEyebrow: 'Careers',
      sectionTitle: 'Open positions',
      sectionSub: 'Filter by role, location, and experience. Open a job to see responsibilities, stack, and apply options.',
      hot: 'Hot',
      filterRole: 'Role',
      filterLocation: 'Location',
      filterLevel: 'Experience',
      filterAll: 'All',
      departments: {
        Backend: 'Backend',
        Frontend: 'Frontend',
        Mobile: 'Mobile',
        DevOps: 'DevOps',
        Data: 'Data',
        Platform: 'Platform',
      },
      locations: { Tokyo: 'Tokyo (on-site)', Remote: 'Remote', Hybrid: 'Hybrid' },
      levels: { Junior: 'Junior', Mid: 'Mid', Senior: 'Senior' },
      employment: { Fulltime: 'Full-time', Contract: 'Contract' },
      results: '{count} roles',
      empty: 'No roles match your filters. Try adjusting criteria.',
      page: 'Page {current} of {total}',
      prev: 'Previous',
      next: 'Next',
      viewDetails: 'View details',
      modalClose: 'Close',
      responsibilities: 'Responsibilities',
      required: 'Required skills',
      preferred: 'Preferred skills',
      techStack: 'Tech stack',
      salary: 'Salary range',
      growth: 'Career growth',
      applyNow: 'Apply now',
      applyNote: 'Submit opens your mail client. You can also apply via en-gage.',
      formName: 'Name',
      formEmail: 'Email',
      formMessage: 'Note (optional)',
      formSubmit: 'Send via email',
      formEngage: 'Apply on en-gage',
      validationName: 'Please enter at least 2 characters for your name.',
      validationEmail: 'Please enter a valid email address.',
    },
    benefits: {
      eyebrow: 'Benefits',
      title: 'How we support work and careers',
      sub: 'Exact packages depend on assignment type—here is what we optimize for across programs.',
      items: [
        {
          title: 'Compensation clarity',
          body: 'Transparent ranges by role and experience. Regular check-ins align pay with responsibility and market reality.',
        },
        {
          title: 'Learning & certifications',
          body: 'Budgets and time for upskilling. Coordinators help protect focus time for sustained learning—not heroics.',
        },
        {
          title: 'Benefits & coverage',
          body: 'Social insurance and baseline protections. Pace and workload are actively managed with client constraints in view.',
        },
        {
          title: 'Feedback loops',
          body: 'Monthly career conversations plus safe channels for escalation—so issues surface before they become attrition.',
        },
      ],
    },
    workStyle: {
      eyebrow: 'Work style',
      title: 'Remote, hybrid, and on-site—matched to risk and outcomes',
      sub: 'We align work mode to security policy, collaboration needs, and sustainable delivery.',
      bullets: [
        'Cloud/SaaS programs often run remote-first with periodic on-site rituals for alignment.',
        'Regulated domains may require on-site or hybrid patterns—we surface that before you commit.',
        'Flex policies follow client rules while protecting deep-work blocks for engineers.',
      ],
    },
    hiringSteps: {
      eyebrow: 'Hiring steps',
      title: 'From application to assignment',
      steps: [
        { title: 'Apply', body: 'Submit via en-gage or email. Share your stack, outcomes, and constraints.' },
        { title: 'Conversations', body: 'Online or in-person interviews focused on fit, craft, and realistic expectations.' },
        { title: 'Client selection', body: 'Technical checks or client interviews when required—we coach you on format and scope.' },
        { title: 'Offer & onboarding', body: 'Once aligned, we support week-one onboarding with tight coordinator touchpoints.' },
      ],
    },
    apply: {
      title: 'Apply in minutes',
      sub: 'Our primary application flow is on en-gage—fast and mobile-friendly.',
      engage: 'Open en-gage portal',
      ask: 'Ask a question first',
    },
  },
  access: {
    page: {
      eyebrow: 'Access',
      title: 'Visit us in Ginza',
      description: 'About one minute from Higashi-Ginza Station (A2). Ginza Station is a short walk.',
    },
    mapTitle: 'Map',
    addressTitle: 'Address',
    tel: 'Tel',
    fax: 'Fax',
    dialIn: 'Dial-in (reference)',
    hours: 'Hours',
    hoursValue: 'Weekdays 9:00–19:00',
    transitTitle: 'Transit notes',
    transit: [
      'Tokyo Metro Hibiya Line / Toei Asakusa Line — Higashi-Ginza Station, Exit A2.',
      'Tokyo Metro Ginza Line — Ginza Station, short walk via Ginza 4-chome.',
      'Landmark: Coco Kara Fine pharmacy on the 1st floor of Ginza Sanno Building.',
    ],
    contactBtn: 'Contact us',
  },
  partner: {
    page: {
      eyebrow: 'Partner',
      title: 'Collaborate with CMC',
      description:
        'Whether you need talent or delivery capacity—we connect organizations through a trusted engineer network.',
    },
    intro:
      'Beyond individual careers, we support B2B talent partnerships—as a hub linking hiring teams and delivery partners.',
    user: {
      label: 'For hiring teams',
      title: 'Need engineers?',
      body: 'Deep IT talent pool—from web/open systems to infrastructure and quality. Fit and velocity over volume.',
      b1: 'Coordinator-led qualification and ongoing support',
      b2: 'Broad coverage across Greater Tokyo engagements',
    },
    supplier: {
      label: 'For delivery partners',
      title: 'Need projects?',
      body: 'Surface opportunities aligned with your strengths—web/open, modernization, and infrastructure-heavy work.',
      b1: 'High-trust introductions with transparent expectations',
      b2: 'A partner team that understands engineering delivery',
    },
    bottom: {
      title: 'Start a conversation',
      sub: 'Tell us briefly what you need—we will follow up with the right contact.',
      contact: 'Contact partnerships',
      services: 'Review services',
    },
  },
  contact: {
    page: {
      eyebrow: 'Contact',
      title: 'Talk with us',
      description:
        'For services, talent needs, partnerships, or careers—please complete the form below. A coordinator will follow up.',
    },
    formIntro:
      'After you tap submit, your mail app opens with a pre-filled message to us. Please review and send from your device. We do not store form submissions on our web server.',
    processAfter:
      'After your email is sent, a coordinator will review it and respond by phone or email, typically within two business days. Some inquiries may require additional time. For urgent matters, call +81-3-3544-0644 (weekdays 9:00–19:00).',
    preferEmail: 'Prefer email directly? Reach us at',
    demoNote: '',
    labels: {
      name: 'Name (required)',
      company: 'Company / organization',
      phone: 'Phone',
      email: 'Email (required)',
      inquiryType: 'Inquiry type (required)',
      inquiryPlaceholder: 'Select a type',
      message: 'Message (required)',
    },
    inquiryOptions: {
      services: 'Services & talent',
      recruit: 'Recruiting & applications',
      partner: 'Partnerships',
      other: 'Other',
    },
    submit: 'Review and open mail app',
    success:
      'If your mail composer opened, send the message to complete your inquiry. If it did not open, check mail settings or email info@cmc-a.co.jp directly.',
    subject: '[Website inquiry]',
    validation: {
      name: 'Please enter your name (at least 2 characters).',
      email: 'Please enter a valid email address.',
      message: 'Please write at least 10 characters so we can help.',
      inquiryType: 'Please select an inquiry type.',
    },
  },
  privacyPage: privacyPolicyEn,
}
