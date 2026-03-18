export interface Founder {
  name: string;
  title: string;
  background: string;
}

export interface Startup {
  name: string;
  founded: number | string;
  hq: string;
  website: string;
  oneLiner: string;
  description: string;
  tech: string;
  problem: string;
  products: string[];
  founders: Founder[];
  totalFunding: string;
  fundingNum: number;
  latestRound: string;
  investors: string[];
  leadInvestor: string;
  valuation: string;
  revenue: string;
  employees: string;
  customers: string[];
  moat: string;
  tags: string[];
  category: 'AI' | 'Cyber';
}

export const startups: Startup[] = [
  {
    "name": "Krutrim",
    "founded": 2023,
    "hq": "Bengaluru",
    "website": "https://www.olakrutrim.com",
    "oneLiner": "India's first AI unicorn, building a vertically integrated sovereign AI computing stack \u2014 LLMs, cloud, and chips \u2014 natively for Indian languages.",
    "description": "Krutrim (Sanskrit for 'artificial') was founded by Ola/Ola Electric founder Bhavish Aggarwal to build India's complete AI stack from silicon to application. The company develops large language models (LLMs) trained on Indian languages including Hindi and 9 other Indic languages, an AI-first sovereign cloud platform, and is designing its own AI chips in partnership with Lenovo. Its models are now open-sourced to foster India's AI developer ecosystem, and it has entered a supercomputer partnership with Nvidia.",
    "tech": "Indic large language models (LLMs), multimodal models (text, voice, video), Krutrim-1 and Krutrim-2 LLMs, Drishti video intelligence platform, Document Intelligence Stack (Indic Vision OCR), BharatBench evaluation framework for Indian language AI, sovereign cloud infrastructure (compute + storage + data), proprietary AI silicon design",
    "problem": "Lack of AI infrastructure, models, and compute that are natively designed for Indian languages, culture, and data sovereignty needs; dependence on US/Chinese hyperscalers for AI workloads",
    "products": [
      "Krutrim Chat (consumer LLM chatbot)",
      "Krutrim-1 and Krutrim-2 (open-source Indic LLMs)",
      "Krutrim Cloud (sovereign GPU cloud)",
      "Drishti (video intelligence platform)",
      "Document Intelligence Stack (Indic OCR/document AI)",
      "Krutrim AI Labs (frontier AI research)"
    ],
    "founders": [
      {
        "name": "Bhavish Aggarwal",
        "title": "Founder & CEO",
        "background": "Co-founder and CEO of Ola (India's largest ride-hailing company) and Ola Electric; IIT Bombay (B.Tech Computer Science, 2008); previously researcher at Microsoft Research India. Serial entrepreneur whose prior ventures were backed by SoftBank."
      }
    ],
    "totalFunding": "~$314M",
    "fundingNum": 314.0,
    "latestRound": {
      "round": "Family Office / Strategic Investment",
      "amount_usd": 240000000,
      "date": "February 2025",
      "description": "Bhavish Aggarwal invested ~$230M from his family office with a stated goal of investing $1.15B total; company seeks to raise remainder from outside investors"
    },
    "investors": [
      "Z47 (formerly Matrix Partners India)",
      "Bhavish Aggarwal (family office)",
      "Sarin Family India"
    ],
    "leadInvestor": "Bhavish Aggarwal (family office)",
    "valuation": "$1 billion (unicorn status achieved January 2024 at Series A close)",
    "revenue": "Not publicly disclosed; limited commercial traction reported as of 2025",
    "employees": "~549",
    "customers": [
      "Ola (internal workloads on Krutrim Cloud)",
      "Cloudera (data platform partnership)",
      "Nvidia (supercomputer partnership)",
      "Lenovo (supercomputer co-build)"
    ],
    "moat": [
      "India's first vertically integrated AI stack (models + cloud + chips)",
      "Only Indian company building sovereign AI at every layer",
      "Massive first-mover brand recognition as India's premier AI unicorn",
      "Access to Ola Group's enterprise data and infrastructure",
      "Government alignment with India's AI sovereignty agenda",
      "Open-sourced models to drive developer ecosystem adoption"
    ],
    "tags": [
      "GenAI",
      "LLM",
      "Sovereign AI",
      "AI Infrastructure",
      "Indic AI"
    ],
    "category": "AI"
  },
  {
    "name": "Sarvam AI",
    "founded": 2023,
    "hq": "Bengaluru",
    "website": "https://www.sarvam.ai",
    "oneLiner": "India's sovereign AI company building full-stack foundation models and APIs for 22+ Indian languages, selected by the government to build India's first indigenous LLM.",
    "description": "Sarvam AI was founded by AI4Bharat researchers from IIT Madras to build population-scale generative AI infrastructure specifically for India's linguistic diversity. Unlike fine-tuning approaches, Sarvam builds its own foundation models from scratch using custom architectures that tokenize Indian languages more efficiently. In April 2025, it was selected under India's IndiaAI Mission to develop the country's first sovereign large language model, and debuted two foundational models \u2014 Sarvam-30B and Sarvam-105B \u2014 at the India AI Impact Summit 2026. The company operates on thousands of government-allocated GPUs and offers five production-ready APIs (ASR, TTS, translation, chat, document intelligence).",
    "tech": "Custom-architecture Indic foundation LLMs (Sarvam-30B, Sarvam-105B), speech-to-text (ASR), text-to-speech (TTS), neural machine translation, retrieval-augmented generation (RAG), document intelligence; trained on Indic language data with token-efficient architectures; government GPU compute under IndiaAI Mission",
    "problem": "Global AI models (GPT-4, Gemini, etc.) perform poorly on Indian languages due to tokenization inefficiency and lack of high-quality Indic training data; India needs sovereign AI models not dependent on US infrastructure",
    "products": [
      "Sarvam-30B (foundation LLM)",
      "Sarvam-105B (foundation LLM)",
      "Sarvam APIs: Speech-to-Text, Text-to-Speech, Translation, Chat Completion, Document Intelligence",
      "Sarvam Startup Programme (API credits for Indian startups)"
    ],
    "founders": [
      {
        "name": "Vivek Raghavan",
        "title": "Co-founder & CEO",
        "background": "Spent 10+ years at UIDAI (the Aadhaar authority) building India-scale digital identity infrastructure; co-led AI4Bharat at IIT Madras; IIT alumnus with deep experience in population-scale technology deployment."
      },
      {
        "name": "Pratyush Kumar",
        "title": "Co-founder & CTO",
        "background": "PhD-level AI researcher; co-led AI4Bharat at IIT Madras, one of India's most serious academic efforts in Indic language AI; deep expertise in NLP model architecture and multilingual AI."
      }
    ],
    "totalFunding": "$53M",
    "fundingNum": 53.0,
    "latestRound": {
      "round": "Seed + Series A (combined)",
      "amount_usd": 41000000,
      "date": "December 2023",
      "description": "Combined $41M seed and Series A announced; Lightspeed led Series A, co-led seed with Peak XV Partners; Khosla Ventures also participated"
    },
    "investors": [
      "Lightspeed Venture Partners",
      "Peak XV Partners",
      "Khosla Ventures"
    ],
    "leadInvestor": "Lightspeed Venture Partners",
    "valuation": "Not publicly disclosed",
    "revenue": "Not publicly disclosed",
    "employees": "~50-100 (early-stage)",
    "customers": [
      "Government of India / IndiaAI Mission (selected to build India's sovereign LLM)",
      "Indian startups via Sarvam Startup Programme"
    ],
    "moat": [
      "Government mandate and GPU allocation to build India's sovereign LLM \u2014 structural moat",
      "Only Indian company with proven full-stack Indic foundation model capability (not fine-tuned)",
      "Support for 22+ Indian languages vs. competitors' limited coverage",
      "IIT Madras / AI4Bharat institutional credibility",
      "Token-efficiency advantage for Indic language inference (cost advantage at scale)",
      "Government-backed infrastructure insulates from US cloud dependence"
    ],
    "tags": [
      "GenAI",
      "LLM",
      "Sovereign AI",
      "NLP",
      "Speech AI"
    ],
    "category": "AI"
  },
  {
    "name": "Uniphore",
    "founded": 2008,
    "hq": "Chennai (founded); Palo Alto, CA (current HQ)",
    "website": "https://www.uniphore.com",
    "oneLiner": "Business AI company providing a sovereign, composable enterprise AI cloud platform \u2014 unifying data, knowledge, models, and agentic AI \u2014 used by 2,000+ global enterprises.",
    "description": "Uniphore was founded as an IIT Madras incubated voice-AI startup in 2008 and has evolved into a full-stack enterprise Business AI Cloud. Its platform provides a four-layer AI stack: a composable data layer connecting any cloud or on-premises system; a knowledge layer structuring enterprise data for AI fine-tuning; a model layer with enterprise guardrails for third-party LLMs; and an agentic layer with prebuilt AI agents for sales, marketing, HR, and customer service. The company is notable for its 'zero-copy data fabric' which enables sovereign AI deployment without data migration, and recently acquired Dubdub.ai (TTS) and Orby AI (agentic automation) to complete its platform.",
    "tech": "Proprietary Business AI Cloud with four layers (data, knowledge, models, agents); multimodal AI (voice, chat, email, video); conversational AI with automatic speech recognition (ASR), NLP, and tonal emotion detection; 40B-parameter in-house LLMs; RAG-based knowledge retrieval; agentic AI orchestration; zero-copy sovereign data fabric; enterprise guardrails and adversarial prompt defense",
    "problem": "Enterprises struggle to deploy AI reliably at scale due to data fragmentation, compliance/sovereignty concerns, lack of integration with existing tech stacks, and the gap between consumer AI simplicity and enterprise-grade security",
    "products": [
      "Uniphore Business AI Cloud",
      "U-Analyze (conversation analytics)",
      "U-Assist (real-time agent assist)",
      "U-Automate (workflow automation)",
      "U-Trust (AI governance and guardrails)",
      "Marketing AI CDP"
    ],
    "founders": [
      {
        "name": "Umesh Sachdev",
        "title": "Co-founder & CEO",
        "background": "IIT Delhi graduate (B.Tech); co-founded Singularis (first startup, shut down) before Uniphore. Incubated at IIT Madras in 2008 with the mission to bridge the human-technology communication gap through voice AI for Indian languages."
      },
      {
        "name": "Ravi Saraogi",
        "title": "Co-founder & President, APAC",
        "background": "Co-founder from IIT Madras incubation; leads Asia-Pacific business; longtime partner to Sachdev in building Uniphore from an India-focused voice startup to global enterprise AI company."
      }
    ],
    "totalFunding": "$870M",
    "fundingNum": 870.0,
    "latestRound": {
      "round": "Series F",
      "amount_usd": 260000000,
      "date": "October 2025",
      "description": "Led by NVIDIA, AMD, Snowflake, and Databricks with participation from NEA, March Capital, BNF Capital, National Grid Partners, and Prosperity7 Ventures"
    },
    "investors": [
      "NVIDIA",
      "AMD",
      "Snowflake",
      "Databricks",
      "NEA (New Enterprise Associates)",
      "March Capital",
      "Prosperity7 Ventures",
      "BNF Capital"
    ],
    "leadInvestor": "NVIDIA, AMD, Snowflake, Databricks (joint strategic lead)",
    "valuation": "$2.5 billion (Series F, October 2025)",
    "revenue": "~$37.5M revenue (FY2024, per Tracxn); $50M+ gross revenue (Inc. Best in Business 2025 qualifier)",
    "employees": "500+",
    "customers": [
      "Dell Technologies",
      "The Washington Post",
      "Atlassian",
      "Priceline",
      "Skechers",
      "HDFC Bank"
    ],
    "moat": [
      "Only enterprise AI platform simultaneously backed by NVIDIA, AMD, Snowflake, and Databricks \u2014 representing the entire AI infrastructure stack",
      "Sovereign 'zero-copy' data fabric eliminates data migration and compliance risk",
      "15+ year head start in voice AI with proprietary ASR trained on enterprise call data",
      "Composable architecture allows deployment in any cloud, on-prem, or hybrid",
      "Deep enterprise integrations across Fortune 500 with high switching costs",
      "First-to-market on agentic AI for enterprise workflows"
    ],
    "tags": [
      "Conversational AI",
      "Agentic AI",
      "Enterprise AI",
      "Speech AI",
      "NLP"
    ],
    "category": "AI"
  },
  {
    "name": "Fractal Analytics",
    "founded": 2000,
    "hq": "Mumbai",
    "website": "https://fractal.ai",
    "oneLiner": "India's first AI analytics unicorn \u2014 serving 50+ Fortune 500 clients with decision intelligence, applied AI, and proprietary AI platforms across healthcare, retail, and financial services.",
    "description": "Fractal Analytics is India's longest-standing AI company, founded by five IIM graduates in 2000 to use data science for business decision-making. The company has evolved from marketing analytics into a full-stack enterprise AI firm operating in 18 countries. It serves Fortune 500 clients with end-to-end AI model design, deployment, and operationalization, and has built a portfolio of proprietary AI platforms (Cogentiq, Iqigai, Kalaido.ai, Flyfish, Asper.ai) that generate recurring SaaS revenue. In 2025 it went public on Indian stock exchanges, becoming India's first publicly listed enterprise AI company.",
    "tech": "Decision intelligence AI; advanced ML/deep learning models for pricing, demand forecasting, marketing mix modeling, risk analytics; proprietary platforms: Cogentiq (AI decisioning), Iqigai (AI operations), Kalaido.ai (creative AI), Flyfish (GenAI-powered product discovery), Asper.ai (revenue growth management); Analytics Vidhya (world's largest data science community); GenAI application development",
    "problem": "Fortune 500 enterprises lack the AI/ML talent and infrastructure to translate data into measurable business outcomes (pricing, demand forecasting, marketing effectiveness, risk management)",
    "products": [
      "Fractal.ai (analytics & AI services)",
      "Cogentiq (AI decisioning platform)",
      "Iqigai (AI operationalization platform)",
      "Kalaido.ai (creative/generative AI)",
      "Flyfish (GenAI product discovery)",
      "Asper.ai (revenue growth management)"
    ],
    "founders": [
      {
        "name": "Srikanth Velamakanni",
        "title": "Co-founder, Group CEO & Executive Vice-Chairman",
        "background": "IIM Ahmedabad MBA; has led Fractal from 2006 (returned as CEO after early leadership transition); prior experience in financial services and analytics consulting; recipient of multiple entrepreneurship awards."
      },
      {
        "name": "Pranay Agrawal",
        "title": "Co-founder, Non-Executive Director & CEO of Fractal USA",
        "background": "IIM Ahmedabad MBA; B.Com from Bangalore University; Certified Financial Risk Manager; 25+ years in analytics and AI. Leads US business and P&L management."
      },
      {
        "name": "Nirmal Palaparthi",
        "title": "Co-founder",
        "background": "IIM alumnus; one of five original co-founders of Fractal in 2000."
      }
    ],
    "totalFunding": "$685M",
    "fundingNum": 685.0,
    "latestRound": {
      "round": "Secondary share sale (pre-IPO)",
      "amount_usd": 170000000,
      "date": "July 2025",
      "description": "Secondary transaction led by Apax Partners, valuing Fractal at $2.44 billion; preceded IPO filing in August 2025"
    },
    "investors": [
      "TPG Capital",
      "Apax Partners",
      "Khazanah Nasional (Malaysian sovereign wealth fund)"
    ],
    "leadInvestor": "Apax Partners",
    "valuation": "$2.44 billion (July 2025 secondary transaction); IPO target valuation ~$1.6B at Feb 2026 listing price band",
    "revenue": "FY2025 revenue: \u20b92,765 Cr (~$330M); H1 FY2026: \u20b91,559 Cr (~$186M); FY2025 net profit: \u20b9220.6 Cr (~$26M)",
    "employees": "~4,620-5,000 across 18 countries",
    "customers": [
      "Wells Fargo",
      "P&G (Procter & Gamble)",
      "Visa",
      "Pfizer",
      "Walmart",
      "50+ Fortune 500 companies globally"
    ],
    "moat": [
      "25+ year track record with Fortune 500 clients creates deep institutional trust and long contract tenures",
      "Rare combination of AI services + proprietary AI product platforms (dual revenue model)",
      "Analytics Vidhya gives Fractal access to the world's largest data science talent pool",
      "Deep domain expertise in financial services, healthcare, and CPG \u2014 highest-stakes AI applications",
      "Global delivery model: premium client-facing work in US/UK, cost-efficient AI engineering in India"
    ],
    "tags": [
      "Decision Intelligence",
      "MLOps",
      "Predictive Analytics",
      "GenAI",
      "Enterprise AI"
    ],
    "category": "AI"
  },
  {
    "name": "Kore.ai",
    "founded": 2014,
    "hq": "Hyderabad (founded); Orlando, Florida (current HQ)",
    "website": "https://www.kore.ai",
    "oneLiner": "Global leader in enterprise agentic AI, offering a no-code/low-code platform trusted by 450+ Global 2000 companies for deploying AI agents, intelligent virtual assistants, and GenAI applications.",
    "description": "Kore.ai was founded by serial entrepreneur Raj Koneru, who had previously taken two companies public on NASDAQ, to build enterprise-grade conversational AI before the term was widely used. The platform has evolved from NLP-powered virtual assistants to a full-stack agentic AI ecosystem: XO Platform v11 (conversational AI + GenAI + RAG + CCaaS), GALE (GenAI application development), and RecruitAssist (AI recruitment). The company's proprietary 'Fundamental Meaning Engine' and knowledge graph enable industry-leading NLP accuracy. Kore.ai has achieved triple-digit YoY revenue growth for four consecutive years and surpassed $100M ARR.",
    "tech": "Proprietary NLP engine ('Fundamental Meaning Engine' + semantic + knowledge graph); XO GPT fine-tuned purpose models; advanced RAG tooling for cognitive search; multi-LLM orchestration framework (open-source + commercial LLMs); GALE GenAI app development platform; no-code/low-code agent builder; CCaaS contact center AI; zero-shot/few-shot learning; agentic workflow automation",
    "problem": "Enterprises need safe, compliant, and customizable AI agents that integrate with existing systems without vendor lock-in to specific LLMs or cloud providers",
    "products": [
      "XO Platform v11 (enterprise conversational + GenAI platform)",
      "GALE (Generative AI application development platform)",
      "AgentPlatform (agentic AI for enterprise workflows)",
      "BankAssist, HealthAssist, RetailAssist (pre-built domain virtual assistants)",
      "SmartAssist (contact center AI)",
      "RecruitAssist (AI-powered recruitment)"
    ],
    "founders": [
      {
        "name": "Raj Koneru",
        "title": "Founder & CEO",
        "background": "M.S. from Birla Institute of Technology and Science (BITS) Pilani (1991); serial entrepreneur with 30+ years experience; founded and took Kony (mobile app platform) to acquisition by Temenos; previously founded iTouchPoint, Seranova, and Intelligroup (NASDAQ-listed). Based in Windermere, Florida."
      }
    ],
    "totalFunding": "$250M+",
    "fundingNum": 250.0,
    "latestRound": {
      "round": "Strategic Growth Investment",
      "amount_usd": null,
      "date": "January 2026",
      "description": "Strategic growth investment led by AllianceBernstein Private Credit Investors with continued participation from Vistara Growth, Beedie Capital, and Sweetwater Private Equity; amount not disclosed"
    },
    "investors": [
      "FTV Capital",
      "NVIDIA",
      "Vistara Growth",
      "Sweetwater Private Equity",
      "NextEquity",
      "Nicola Wealth",
      "Beedie Capital",
      "PNC Bank"
    ],
    "leadInvestor": "AllianceBernstein Private Credit Investors",
    "valuation": "~$803M (Series D post-money, January 2024 per Forge data); not disclosed at January 2026 round",
    "revenue": "$100M+ ARR (FY 2023-24); triple-digit YoY growth for 4 consecutive years",
    "employees": "1,000+",
    "customers": [
      "450+ Global 2000 companies",
      "Major North American health insurer (1,000+ daily queries, 90% containment rate)",
      "Fourth-largest US bank (300M+ automated interactions)",
      "Major global health insurance company (100M+ automated transactions)"
    ],
    "moat": [
      "Gartner Magic Quadrant Leader in Enterprise Conversational AI Platforms (two consecutive years)",
      "Forrester Wave Leader in Conversational AI for Customer Service (2024)",
      "Proprietary Fundamental Meaning Engine achieves 95%+ NLP accuracy",
      "No-code/low-code deployment from days to hours vs. competitor months",
      "Open architecture: any LLM (open-source, commercial, fine-tuned), any cloud, any deployment model",
      "Pre-built domain-trained solutions for banking, healthcare, retail reduce time-to-value",
      "Strong NVIDIA partnership validates enterprise AI credibility"
    ],
    "tags": [
      "Conversational AI",
      "Agentic AI",
      "NLP",
      "GenAI",
      "Enterprise AI"
    ],
    "category": "AI"
  },
  {
    "name": "Observe.AI",
    "founded": 2017,
    "hq": "Bengaluru (founded); San Francisco, CA (HQ)",
    "website": "https://www.observe.ai",
    "oneLiner": "Contact center AI platform using voice AI and LLMs to provide real-time agent assistance, auto quality assurance, and automated voice agents for 350+ enterprise contact centers.",
    "description": "Observe.AI was founded by IIT Delhi alumni after the CEO spent six months embedded in a Philippine BPO to deeply understand contact center pain points. The company pioneered the application of speech AI and NLP to contact center quality assurance, agent coaching, and customer analytics. Its platform is built on a custom 40B-parameter LLM trained on contact center-specific data, complemented by proprietary ASR technology. In 2024, Observe.AI acquired Dubdub.ai to add a TTS layer, completing a full voice AI loop (ASR + LLM + TTS) and launching autonomous voice agents that can fully replace IVR systems.",
    "tech": "Proprietary 40B-parameter contact center LLM (built on open-source foundation models); automatic speech recognition (ASR); text-to-speech (TTS via Dubdub.ai acquisition, supporting 50+ languages); real-time audio stream processing; transformer-based NLP for sentiment analysis; Knowledge AI (RAG-based agent knowledge retrieval); Summarization AI; Auto QA (automated quality scoring); Auto Coaching; autonomous voice agents",
    "problem": "Contact centers manually review only 1-2% of calls, leading to poor quality control, inconsistent coaching, compliance risks, and high agent attrition; 70% of enterprise conversations happen in a 'black box'",
    "products": [
      "Observe.AI Platform (conversational intelligence)",
      "Knowledge AI (real-time agent knowledge retrieval)",
      "Summarization AI (automated post-call summaries)",
      "Auto QA (AI quality scoring)",
      "Auto Coaching (personalized agent coaching)",
      "Real-Time Agent Assist"
    ],
    "founders": [
      {
        "name": "Swapnil Jain",
        "title": "Co-founder & CEO",
        "background": "IIT Delhi graduate; led user growth and founded Twitter India office as engineering lead; led engineering growth at Twitter before starting Observe.AI."
      },
      {
        "name": "Jithendra Vepa",
        "title": "Co-founder & CTO",
        "background": "PhD from University of Edinburgh (speech technology); built text-to-speech systems at Samsung Research; joined Observe.AI as Chief Scientist in 2018 and became CTO and co-founder."
      }
    ],
    "totalFunding": "$213M",
    "fundingNum": 213.0,
    "latestRound": {
      "round": "Series C",
      "amount_usd": 125000000,
      "date": "April 2022",
      "description": "Led by SoftBank Vision Fund 2, with participation from Zoom, Menlo Ventures, Scale Venture Partners, and others"
    },
    "investors": [
      "SoftBank Vision Fund 2",
      "Zoom",
      "Y Combinator",
      "Menlo Ventures",
      "Nexus Venture Partners",
      "Scale Venture Partners",
      "Steadview Capital",
      "NGP Capital"
    ],
    "leadInvestor": "SoftBank Vision Fund 2",
    "valuation": "$1.4 billion (post Series C)",
    "revenue": "Not publicly disclosed; serves 350+ enterprise clients",
    "employees": "300-500",
    "customers": [
      "350+ enterprise contact centers globally",
      "BPOs across US and globally"
    ],
    "moat": [
      "Proprietary 40B-parameter LLM trained exclusively on contact center conversations \u2014 domain specificity creates accuracy advantage",
      "Only platform with full voice AI loop: ASR + LLM + TTS (post-Dubdub.ai acquisition)",
      "Processes 100% of calls vs. competitors' sample-based approaches \u2014 comprehensive data advantage",
      "Claims 60% efficiency gains and 75% reduction in quality evaluation time",
      "Strong Y Combinator and SoftBank backing provides credibility in enterprise sales",
      "Deep API-level Zoom integration enables reach to Zoom's enterprise customer base"
    ],
    "tags": [
      "Conversational AI",
      "Speech AI",
      "NLP",
      "Contact Center AI",
      "GenAI"
    ],
    "category": "AI"
  },
  {
    "name": "Netradyne",
    "founded": 2015,
    "hq": "Bengaluru (India HQ); San Diego, CA (global HQ)",
    "website": "https://www.netradyne.com",
    "oneLiner": "AI-powered fleet safety unicorn using computer vision, edge AI, and dashcams to analyze 100% of commercial vehicle drive time, reducing accidents by ~50% for 3,000+ fleet customers globally.",
    "description": "Netradyne was founded by two Qualcomm veterans who leveraged their semiconductor expertise to build an edge-computing AI system for fleet safety. Its flagship product Driver\u2022i uses HD cameras and proprietary computer vision models running on embedded AI hardware to analyze every second of driving, detecting 60+ risk events with up to 99% accuracy. The company has accumulated over 18 billion vision-analyzed driving miles \u2014 a dataset that creates a powerful data flywheel for training autonomous driving models. In January 2025, Netradyne became India's first unicorn of the year and is targeting profitability in 2025 ahead of a potential IPO.",
    "tech": "Edge AI (on-device computer vision inference on proprietary hardware); computer vision and deep learning for driver behavior detection (60+ event types, 99% accuracy); HD video telematics; AI Safety Manager Assistant (GenAI copilot with natural language interface); foundational driving model development for corner-case scenarios; cloud ML pipeline for fleet analytics; 18B+ driving miles dataset",
    "problem": "Commercial fleet operators face rising accident rates, driver insurance costs, false liability claims, and regulatory compliance burdens; traditional telematics misses critical visual context and only captures a fraction of driving events",
    "products": [
      "Driver\u2022i (AI-powered HD video safety camera system)",
      "Safety Manager Assistant (GenAI fleet management copilot)",
      "Fleet Performance Analytics Dashboard",
      "Driver Self-Coaching Tools",
      "Driver Awareness System (in-cab alerts)"
    ],
    "founders": [
      {
        "name": "Avneesh Agrawal",
        "title": "Co-founder & CEO",
        "background": "Stanford PhD; spent 10 years at Qualcomm leading R&D for connectivity chipset product line business; built Netradyne in 2015 applying semiconductor expertise to edge AI for fleet safety."
      },
      {
        "name": "David Julian",
        "title": "Co-founder & CTO",
        "background": "Qualcomm colleague of Agrawal; Stanford batchmate; deep embedded systems and signal processing expertise from semiconductor industry."
      }
    ],
    "totalFunding": "$308M",
    "fundingNum": 308.0,
    "latestRound": {
      "round": "Series D",
      "amount_usd": 90000000,
      "date": "January 2025",
      "description": "Led by Point72 Private Investments with participation from Qualcomm Ventures and Pavilion Capital"
    },
    "investors": [
      "Point72 Private Investments",
      "SoftBank Vision Fund",
      "Qualcomm Ventures",
      "Reliance Industries",
      "M12 (Microsoft Ventures)",
      "Pavilion Capital",
      "Silicon Valley Bank"
    ],
    "leadInvestor": "Point72 Private Investments",
    "valuation": "$1.34-1.35 billion (Series D, January 2025)",
    "revenue": "$210M revenue in 2024 (65% YoY growth); targeting 50%+ growth in 2025",
    "employees": "800+",
    "customers": [
      "Amazon",
      "Shell",
      "PepsiCo",
      "Reliance Industries",
      "Hindustan Unilever",
      "3,000+ fleet customers across US, Canada, Mexico, UK, Germany, Australia, New Zealand, India"
    ],
    "moat": [
      "18B+ vision-analyzed driving miles \u2014 largest proprietary driving dataset in the world",
      "99% event detection accuracy from 18B-mile training set creates insurmountable data moat",
      "Edge AI (on-device inference) eliminates latency and cloud data transmission costs",
      "Only player building foundational driving models for corner-case AV scenarios \u2014 future AI licensing potential",
      "Reliance Industries and Qualcomm as strategic investors provide India and semiconductor channel advantages",
      "65% revenue growth with path to profitability in 2025"
    ],
    "tags": [
      "Computer Vision",
      "Edge AI",
      "Fleet Safety",
      "GenAI",
      "Video Telematics"
    ],
    "category": "AI"
  },
  {
    "name": "Yellow.ai",
    "founded": 2016,
    "hq": "Bengaluru (founded); San Mateo, CA (current HQ)",
    "website": "https://yellow.ai",
    "oneLiner": "Enterprise agentic AI platform automating customer and employee experiences across 35+ channels and 135+ languages, processing 16+ billion conversations annually for 1,300+ global enterprises.",
    "description": "Yellow.ai (originally Yellow Messenger) was founded by three Bengaluru engineers who were frustrated with the state of customer support automation. The company has built one of the world's most comprehensive enterprise conversational AI platforms, underpinned by a multi-LLM architecture (DynamicNLP) that achieves zero-training-data intent recognition. Its VoiceX product enables human-like voice agents, while the Dynamic Automation Platform (DAP) connects AI agents across every customer touchpoint. The platform processes 16B+ conversations annually, providing continuous training data across diverse industry verticals \u2014 healthcare, BFSI, e-commerce, logistics.",
    "tech": "Multi-LLM orchestration architecture; DynamicNLP (zero-training-shot NLP engine, trained on 16B+ conversations); VoiceX (voice AI platform with multilingual TTS/ASR); Dynamic Automation Platform (DAP); agentic AI with autonomous decision-making; NLU fine-tuned for enterprise customer service; integration framework for 35+ channels (WhatsApp, IVR, web, app, email); 135+ language support",
    "problem": "Enterprises spend billions on customer support operations with inconsistent quality and limited scalability; traditional rule-based chatbots require extensive training data and fail in dynamic conversations",
    "products": [
      "Yellow.ai Agentic AI Platform",
      "VoiceX (voice AI agents)",
      "DynamicNLP (zero-training NLP)",
      "Dynamic Automation Platform (DAP)",
      "Yellow.ai for Customer Service",
      "Yellow.ai for Employee Experience (IT, HR)"
    ],
    "founders": [
      {
        "name": "Raghu Ravinutala",
        "title": "Co-founder & CEO",
        "background": "Engineer from BITS Pilani; left full-time job to co-found Yellow.ai in 2016 with Jaya Kishore; background in enterprise software and AI product development."
      },
      {
        "name": "Rashid Khan",
        "title": "Co-founder & Chief Product Officer",
        "background": "Met co-founders at a college hackathon; Forbes India 30 Under 30 (2022) and Forbes Asia 30 Under 30 (2022); leads product and AI innovation."
      },
      {
        "name": "Jaya Kishore Gollareddy",
        "title": "Co-founder & CTO",
        "background": "Engineer; co-founded Yellow.ai with Raghu Ravinutala; leads engineering and technology development."
      }
    ],
    "totalFunding": "$102M",
    "fundingNum": 102.0,
    "latestRound": {
      "round": "Series C",
      "amount_usd": 78150000,
      "date": "August 2021",
      "description": "Led by WestBridge Capital, Sapphire Ventures, Salesforce Ventures, and Lightspeed Venture Partners"
    },
    "investors": [
      "WestBridge Capital",
      "Sapphire Ventures",
      "Salesforce Ventures",
      "Lightspeed Venture Partners"
    ],
    "leadInvestor": "WestBridge Capital",
    "valuation": "Not publicly disclosed post-Series C",
    "revenue": "Revenue grew 90% YoY in 2022; specific ARR not disclosed",
    "employees": "500+",
    "customers": [
      "Domino's",
      "Sony",
      "Lulu Group",
      "Hyundai",
      "1,300+ enterprises across 85 countries"
    ],
    "moat": [
      "DynamicNLP: zero-training NLP trained on 16B+ real enterprise conversations eliminates data cold-start problem",
      "Multi-LLM architecture avoids single-provider risk and optimizes cost/performance per task",
      "35+ channel coverage including RCS, WhatsApp, IVR, web \u2014 widest in industry",
      "135+ language support with genuine fluency (vs. machine translation competitors)",
      "16B annual conversations provide continuous AI training advantage that widens with scale",
      "Deloitte Tech Fast 500 recognition (#88 nationally, 2023)"
    ],
    "tags": [
      "Conversational AI",
      "Agentic AI",
      "NLP",
      "Voice AI",
      "Customer Experience"
    ],
    "category": "AI"
  },
  {
    "name": "Haptik (Jio Haptik Technologies)",
    "founded": 2013,
    "hq": "Mumbai",
    "website": "https://www.haptik.ai",
    "oneLiner": "India's leading conversational AI platform, majority-owned by Reliance Jio, serving enterprise clients and 50,000+ SMBs with WhatsApp and voice AI agents across 22 Indian languages.",
    "description": "Haptik was one of India's first conversational AI companies, founded in 2013 as a personal assistant app before pivoting to enterprise AI. Reliance Jio acquired an 87% stake in 2019 for $100M, transforming it into one of India's most well-resourced AI companies. Under Jio, Haptik has processed 15B+ AI interactions, rebuilt its entire stack as an LLM-first CX suite (Contakt), and launched Interakt \u2014 a WhatsApp-first CRM platform for SMBs that now serves 50,000+ businesses. In 2025, Haptik launched AI Agents at \u20b910,000/month targeting 300,000-500,000 Indian SMBs.",
    "tech": "LLM-first conversational AI platform (Contakt); WhatsApp Business API integration (Meta preferred partner); voice AI agents with multilingual support (22 Indian languages); agentic AI with autonomous reasoning; Microsoft Translator integration for 100+ languages; RCS (Rich Communication Services) support; integration with Jio infrastructure; real-time NLP for customer intent recognition",
    "problem": "Indian enterprises and SMBs lack affordable, multilingual AI-powered customer engagement across WhatsApp and voice, resulting in high support costs and poor customer experience",
    "products": [
      "Contakt (LLM-first enterprise CX suite)",
      "Interakt (WhatsApp CRM for SMBs with AI Agents)",
      "Haptik AI Agents (voice + chat for enterprises)",
      "WhatsApp AI Agents",
      "IVR replacement voice agents"
    ],
    "founders": [
      {
        "name": "Aakrit Vaish",
        "title": "Co-founder (exited; now founder of Activate Venture Partners)",
        "background": "Serial entrepreneur; returned to India in 2013 to build AI; invested in 100+ startups; contributed to India's sovereign AI strategy through IndiaAI Mission; now GP at Activate Venture Partners ($75M AI-focused VC fund)."
      },
      {
        "name": "Swapan Rajdev",
        "title": "Co-founder & CTO",
        "background": "Built Haptik's technical infrastructure from founding; led engineering through Jio acquisition and platform rebuilds."
      }
    ],
    "totalFunding": "$100M (Jio acquisition valuation; ~$12M raised pre-acquisition)",
    "fundingNum": 100.0,
    "latestRound": {
      "round": "Acquisition by Reliance Jio",
      "amount_usd": 100000000,
      "date": "April 2019",
      "description": "Reliance Jio acquired 87% stake for ~$100M total transaction ($33M buyout of existing investors + $67M primary investment)"
    },
    "investors": [
      "Reliance Jio (87% owner)",
      "Times Internet (pre-acquisition)",
      "Kalaari Capital (pre-acquisition)"
    ],
    "leadInvestor": "Reliance Jio",
    "valuation": "Part of Jio Platforms; standalone valuation not publicly disclosed",
    "revenue": "Not publicly disclosed; operates as Jio Platforms subsidiary",
    "employees": "251-500",
    "customers": [
      "Jio",
      "CRED",
      "Ola",
      "PVR Cinemas",
      "Adani Group",
      "Zepto"
    ],
    "moat": [
      "Reliance Jio ownership provides distribution to 400M+ Jio subscribers \u2014 unmatched India reach",
      "Meta/WhatsApp preferred partner status gives first-mover advantage on WhatsApp Commerce",
      "15B+ AI interactions logged \u2014 largest Indic conversational AI dataset in private enterprise",
      "22 Indian language support with real enterprise deployment at scale",
      "Interakt SMB platform creates network effects through 50,000+ businesses generating training data",
      "RCS Innovation Champion award (Google for RCS Business Awards 2025)"
    ],
    "tags": [
      "Conversational AI",
      "NLP",
      "Customer Experience",
      "Voice AI",
      "WhatsApp AI"
    ],
    "category": "AI"
  },
  {
    "name": "SigTuple",
    "founded": 2015,
    "hq": "Bengaluru",
    "website": "https://www.sigtuple.com",
    "oneLiner": "Medical AI company using computer vision and microfluidics to build AI-powered diagnostic devices that automate blood analysis, urine analysis, and semen analysis for pathology labs worldwide.",
    "description": "SigTuple was founded by IIT alumni who saw an opportunity to apply deep learning to medical image analysis in a country with a severe shortage of trained pathologists. The company's flagship product AI100 is a robotic microscopy system that digitalizes blood smear slides and applies computer vision models to provide complete blood count (CBC) and differential analysis \u2014 tasks traditionally requiring skilled lab technologists. The newer SigVet product applies microfluidics and AI to deliver CBC results in under five minutes at the point of care. SigTuple has received European regulatory clearance for its upgraded AI100 and is actively pursuing USFDA approval.",
    "tech": "Computer vision deep learning for medical image analysis (blood smears, urine sediment, semen samples); robotic microscopy hardware with automated slide preparation; microfluidics for point-of-care devices; digital pathology pipelines; custom CNN architectures for cell morphology classification; regulatory-grade AI (CE certified); AI100 and SigVet hardware platforms",
    "problem": "India has 1 pathologist per 100,000 population (WHO recommends 1 per 20,000); manual microscopy for CBC is slow, error-prone, and requires rare expertise; diagnostic labs face throughput bottlenecks and quality variability",
    "products": [
      "AI100 (automated robotic microscope with AI for CBC + differential, high-throughput lab version)",
      "SigVet (point-of-care microfluidics device for 5-minute CBC at doctor's chamber)",
      "Manthana (AI platform for medical image analysis)"
    ],
    "founders": [
      {
        "name": "Tathagato Rai Dastidar",
        "title": "Co-founder & CEO",
        "background": "IIT Kharagpur (B.Tech); deep ML and computer vision expertise; previously worked in technology research before founding SigTuple."
      },
      {
        "name": "Apurv Anand",
        "title": "Co-founder",
        "background": "IIT alumnus with hardware engineering and product development background."
      },
      {
        "name": "Rohit Kumar Pandey",
        "title": "Co-founder",
        "background": "IIT alumnus; computational background focused on AI/ML system design."
      }
    ],
    "totalFunding": "~$49M",
    "fundingNum": 49.0,
    "latestRound": {
      "round": "Extended Series C",
      "amount_usd": 4000000,
      "date": "August 2024",
      "description": "Led by SIDBI Venture Capital; funding for regulatory clearances, product expansion, and geographic expansion into Europe and US"
    },
    "investors": [
      "Accel",
      "Endiya Partners",
      "Chiratae Ventures",
      "IDG Capital",
      "iLabs Capital",
      "Trifecta Capital",
      "Binny Bansal (Flipkart co-founder)",
      "SIDBI Venture Capital"
    ],
    "leadInvestor": "SIDBI Venture Capital",
    "valuation": "Not publicly disclosed",
    "revenue": "Not publicly disclosed",
    "employees": "101-250",
    "customers": [
      "Pathology labs across India",
      "European distribution agreements in finalization (post-CE clearance)",
      "US market expansion under FDA clearance process"
    ],
    "moat": [
      "Full hardware+software integration: robotic microscopy + AI in a single device \u2014 competitors address only software",
      "CE Mark regulatory clearance for upgraded AI100 \u2014 enables European market entry",
      "SigVet's 5-minute point-of-care CBC creates new market (doctor chambers vs. centralized labs)",
      "Accel and Binny Bansal backing provide strong enterprise network and credibility",
      "India's diagnostic lab market scale provides extensive training data for model improvement",
      "Proprietary microfluidics expertise creates hardware moat against software-only competitors"
    ],
    "tags": [
      "Medical AI",
      "Computer Vision",
      "Digital Pathology",
      "Healthcare AI",
      "Edge AI"
    ],
    "category": "AI"
  },
  {
    "name": "Safe Security (formerly Lucideus)",
    "founded": 2012,
    "hq": "Palo Alto, California (India R&D in New Delhi / IIT Bombay origin)",
    "website": "https://safe.security",
    "oneLiner": "AI-native Cyber Risk Quantification (CRQ) and autonomous Continuous Threat Exposure Management (CTEM) platform for large enterprises.",
    "description": "Safe Security (originally Lucideus) was incubated at IIT Bombay and rebranded to SAFE in 2021. Its Cyber Risk Singularity Platform uses AI agents to continuously quantify breach likelihood across an organization's internal assets, AI tools, and third-party vendors, translating cyber posture into financial risk metrics. The platform integrates with 100+ enterprise security tools via APIs and delivers autonomous TPRM and CTEM capabilities, competing directly with manual questionnaire-based risk programs. In 2023 it acquired RiskLens (the pioneer of FAIR methodology) and in 2025 acquired Balbix to unify AI-native exposure management.",
    "tech": "AI/ML-based cyber risk quantification; FAIR (Factor Analysis of Information Risk) methodology; agentic AI reasoning models; 100+ API integrations with existing security stack; MIT-collaborated breach likelihood scoring engine; Autonomous CTEM; Third-Party Risk Management (TPRM)",
    "problem": "Organizations lack a unified, real-time, financially-denominated view of their cyber risk\u2014CISOs cannot quantify breach probability across internal systems, cloud, AI deployments, and supply chain vendors in business terms that boards and C-suites can act on.",
    "products": [
      "SAFE Platform (Cyber Risk Singularity Platform)",
      "SAFE TPRM (Third-Party Risk Management)",
      "Autonomous CTEM",
      "CyberAGI (in development)",
      "RiskLens (acquired 2023)",
      "Balbix (acquired 2025)"
    ],
    "founders": [
      {
        "name": "Saket Modi",
        "title": "Co-Founder & CEO",
        "background": "Computer science engineer; founded SAFE in final year of engineering (2012); incubated at IIT Bombay; Forbes 40 Under 40"
      },
      {
        "name": "Rahul Tyagi",
        "title": "Co-Founder",
        "background": "Harvard Business School; FAIR Institute Technical Advisor; Fortune 40 Under 40"
      },
      {
        "name": "Viditkumar (Vidit) Baxi",
        "title": "Co-Founder",
        "background": "Co-founded Lucideus/SAFE in 2012 alongside Modi and Tyagi"
      }
    ],
    "totalFunding": "$170M+",
    "fundingNum": 170.0,
    "latestRound": {
      "round_type": "Series C",
      "amount_usd": 70000000,
      "date": "July 2025",
      "lead_investor": "Avataar Ventures"
    },
    "investors": [
      "Avataar Ventures",
      "Sorenson Capital",
      "Eight Roads (Fidelity Investments)",
      "Telstra Ventures",
      "WTI",
      "Susquehanna Asia Venture Capital",
      "NextEquity Partners",
      "Prosperity7 Ventures"
    ],
    "leadInvestor": "Avataar Ventures",
    "valuation": "Not publicly disclosed (Series C at $70M implies substantial valuation given $170M total raised)",
    "revenue": "Triple-digit percentage revenue growth for 3 consecutive years (as of 2025); ~$100M+ ARR estimated",
    "employees": "~200 (100 in India R&D)",
    "customers": [
      "Google",
      "Fidelity",
      "T-Mobile",
      "Chevron",
      "IHG",
      "Netflix"
    ],
    "moat": "Only platform combining CRQ + CTEM + TPRM with autonomous AI agents; acquired RiskLens (FAIR methodology standard-setter) and Balbix (AI exposure management); 100+ tool API integrations make it a risk intelligence layer across entire security stack; MIT research partnership; early mover advantage in CRQ category",
    "tags": [
      "Cyber Risk Quantification",
      "CTEM",
      "TPRM",
      "AI Security",
      "Risk Management"
    ],
    "category": "Cyber"
  },
  {
    "name": "CloudSEK",
    "founded": 2015,
    "hq": "Bengaluru, India (also Singapore; expanding to Connecticut, USA)",
    "website": "https://cloudsek.com",
    "oneLiner": "AI-powered predictive cyber threat intelligence platform that identifies attack vectors\u2014leaked credentials, exposed APIs, dark web chatter\u2014before they trigger breaches.",
    "description": "CloudSEK was founded by Rahul Sasi, a noted cybersecurity researcher, with a research-first approach to building a predictive threat intelligence platform. Unlike traditional threat intel that analyzes indicators of compromise post-breach, CloudSEK's cloud-native SaaS continuously maps an organization's digital footprint across surface web, deep web, and dark web to identify Initial Attack Vectors (IAVs) weeks before an incident. In May 2025, it raised $19M at a $120M post-money valuation (5x jump from prior round), doubling its ARR to $10M in FY25, with 60%+ of new revenue from international markets, primarily the US. In January 2026, it became the first Indian-origin cybersecurity company to receive investment from a US state-backed fund (Connecticut Innovations).",
    "tech": "Predictive AI threat intelligence; digital footprint mapping across surface/deep/dark web; Initial Attack Vector (IAV) detection; AI-driven attack chain prediction; cloud-native SaaS; automated dark web monitoring; API exposure detection; credential leak detection; supply chain intelligence",
    "problem": "Traditional threat intelligence is reactive\u2014it detects breaches after they happen. CloudSEK tackles the gap in proactive, predictive intelligence by detecting the earliest signals of an impending attack (leaked credentials, exposed APIs, compromised vendors) weeks before exploitation.",
    "products": [
      "CloudSEK XVigil (external threat intelligence)",
      "CloudSEK SVigil (supply chain intelligence)",
      "CloudSEK BeVigil (mobile app security intelligence)",
      "Predictive Cyber Threat Intelligence Platform"
    ],
    "founders": [
      {
        "name": "Rahul Sasi",
        "title": "Co-Founder & CEO",
        "background": "Cybersecurity researcher-turned-entrepreneur; known for responsible disclosures and security research; founded CloudSEK in 2015 as a research initiative"
      }
    ],
    "totalFunding": "~$39M (Series B complete: $9.5M early rounds + $19M Series B1 + $10M Series B2)",
    "fundingNum": 39.0,
    "latestRound": {
      "round_type": "Series B2",
      "amount_usd": 10000000,
      "date": "January 2026",
      "lead_investor": "Connecticut Innovations"
    },
    "investors": [
      "Connecticut Innovations",
      "Commvault (strategic)",
      "MassMutual Ventures",
      "Inflexor Ventures",
      "Prana Ventures",
      "Tenacity Ventures",
      "Meeran Family (Eastern Group)",
      "StartupXSeed"
    ],
    "leadInvestor": "Connecticut Innovations",
    "valuation": "~$120M post-money (Series B1, May 2025); ~$200M estimated after B2 close (January 2026)",
    "revenue": "$10M ARR (FY2025, doubled YoY); 60%+ revenue from international markets",
    "employees": "~200-250",
    "customers": [
      "300+ enterprises across BFSI, healthcare, technology, government sectors globally",
      "Seed Group (UAE strategic partnership)",
      "US government sector expanding"
    ],
    "moat": "Predictive (not reactive) threat intelligence moat; 4.8-star Gartner Peer Insights (195 reviews); first Indian cybersecurity firm backed by US state fund; cash flow positive while scaling; deep dark web and surface web monitoring infrastructure; 10+ years of threat data corpus",
    "tags": [
      "Threat Intelligence",
      "Dark Web Monitoring",
      "Digital Risk Protection",
      "Attack Surface Management",
      "AI Security"
    ],
    "category": "Cyber"
  },
  {
    "name": "TAC Security (TAC Infosec Limited)",
    "founded": 2016,
    "hq": "Chandigarh, India (operations in USA, UAE, Europe)",
    "website": "https://tacsecurity.com",
    "oneLiner": "India's first publicly listed pure-play cybersecurity company; provides AI-driven risk-based vulnerability management via its ESOF platform.",
    "description": "Founded by Trishneet Arora (a self-taught ethical hacker who started at 19), TAC Security listed on NSE Emerge in April 2024 in India's first cybersecurity IPO, with bids exceeding $1 billion (280x oversubscribed). Its flagship product ESOF (Enterprise Security in One Framework) is an AI/SaaS platform for risk-based vulnerability management, cyber risk quantification, and attack surface management. TAC Security has expanded globally through acquisitions\u2014CyberSandia (US public sector, New Mexico state contract) and CyberScope (Web3/blockchain security, Europe)\u2014and is an official Google MASA (Mobile Application Security Assessment) assessor. Revenue for FY24-25 was \u20b9305M ($3.7M), up 160% YoY, with 134% profit growth.",
    "tech": "ESOF (Enterprise Security in One Framework); Risk-Based Vulnerability Management (RBVM); AI-powered cyber scoring and risk quantification; penetration testing automation; IoT/OT security assessment; Web3/blockchain security (via CyberScope); CREST and ISO 27001 certified",
    "problem": "Enterprises struggle to prioritize thousands of vulnerabilities across complex IT environments without a unified framework\u2014TAC Security replaces siloed security tools with one AI-driven platform that scores, quantifies, and prioritizes risks across all asset types.",
    "products": [
      "ESOF (Enterprise Security in One Framework)",
      "ESOF AppSec ADA MASA (Google MASA assessor)",
      "CyberScope (Web3 security subsidiary)",
      "CyberSandia (US public sector subsidiary)"
    ],
    "founders": [
      {
        "name": "Trishneet Arora",
        "title": "Founder, Chairman, Executive Director & CEO",
        "background": "Self-taught ethical hacker; founded TAC Security at age 19 in 2014 (incorporated 2016); ET Entrepreneur of the Year (IT/ITES); never formally completed computer science degree; advised US Vice President on cybersecurity"
      }
    ],
    "totalFunding": "~$4M pre-IPO (Pre-Series A from Vijay Kedia); raised ~$3.6M via NSE Emerge IPO (April 2024)",
    "fundingNum": 4.0,
    "latestRound": {
      "round_type": "IPO (NSE Emerge)",
      "amount_usd": 3600000,
      "date": "April 2024",
      "lead_investor": "Public Market (NSE Emerge listing)"
    },
    "investors": [
      "Vijay Kedia (stock market veteran, 15% stake pre-IPO)",
      "Ex-Vice President of Cognizant (early backer)"
    ],
    "leadInvestor": "Public Market",
    "valuation": "Peak market cap \u20b91,781.85 Cr (~$215M); listed at \u20b9290, hit 265% gain at \u20b91,059 (as of investor presentation); 52-week high \u20b9899.65 (Nov 2024)",
    "revenue": "\u20b9305M (~$3.7M) revenue FY24-25 (160% YoY growth); \u20b9148.4M (~$1.8M) PAT; 38%+ PAT margin",
    "employees": "~200-250 (56 as of Sep 2023 pre-IPO, expanded significantly)",
    "customers": [
      "3,000+ global clients across 100 countries",
      "Autodesk",
      "Salesforce",
      "ZoomInfo",
      "Google (MASA program partner)",
      "Bombay Stock Exchange (BSE)"
    ],
    "moat": "India's first and only publicly listed pure-play cybersecurity company; CREST-certified; Google MASA official assessor (one of 8 globally for IoT certification); strong founder brand; asset-light SaaS model with 38%+ profit margins; ESOF unified platform reduces customer tool sprawl",
    "tags": [
      "Vulnerability Management",
      "Risk-Based Vulnerability Management",
      "Cyber Risk Quantification",
      "Penetration Testing",
      "Web3 Security"
    ],
    "category": "Cyber"
  },
  {
    "name": "Securden",
    "founded": 2018,
    "hq": "Chennai, India (US entity: Wilmington, Delaware)",
    "website": "https://www.securden.com",
    "oneLiner": "Unified Privileged Access Management (PAM) platform that consolidates credential vaulting, just-in-time access, session monitoring, and endpoint privilege control into a single affordable solution.",
    "description": "Securden was founded by Bala Venkatramani and Kumaran Balan, both Zoho alumni (Bala was product manager for Zoho Vault), who identified a critical gap: existing PAM solutions like CyberArk and BeyondTrust are prohibitively expensive and fragmented across multiple products. Securden's Unified PAM offers enterprise-grade PAM capabilities\u2014privileged password management, remote access, session recording, just-in-time access, endpoint privilege management\u2014in a single, affordable package. It claims ~$16M estimated ARR with 113+ employees and strong 20% monthly growth trajectory at the time of Series A. It raised $10.5M Series A led by Tiger Global in April 2022.",
    "tech": "Unified PAM (Privileged Access Management); Zero Trust architecture; Least Privilege Enforcement; Just-in-Time (JIT) access governance; credential vaulting (AES-256); session recording and monitoring; endpoint privilege management; FIDO2/WebAuthn passkeys; Active Directory/SAML SSO integration; multi-tenant architecture for MSPs",
    "problem": "Traditional PAM solutions (CyberArk, BeyondTrust, Delinea) are expensive, complex, and sold as disconnected point products requiring heavy consulting engagements\u2014leaving SMBs and mid-market enterprises exposed to identity-based attacks, ransomware, and insider threats.",
    "products": [
      "Securden Unified PAM",
      "Securden Password Vault for Enterprises",
      "Securden Endpoint Privilege Manager",
      "Securden Unified PAM MSP Edition"
    ],
    "founders": [
      {
        "name": "Balasubramanian (Bala) Venkatramani",
        "title": "Co-Founder & CEO",
        "background": "15+ years at Zoho (product manager for Zoho Vault); deep expertise in SaaS product development and enterprise security; co-founder of Securden in 2018"
      },
      {
        "name": "Kumaran Balan",
        "title": "Co-Founder & CTO",
        "background": "15+ years at Zoho; software engineering and security product specialist; co-founded Securden with Bala in 2018"
      }
    ],
    "totalFunding": "$11.7M ($1.2M Seed + $10.5M Series A)",
    "fundingNum": 11.7,
    "latestRound": {
      "round_type": "Series A",
      "amount_usd": 10500000,
      "date": "April 2022",
      "lead_investor": "Tiger Global"
    },
    "investors": [
      "Tiger Global",
      "Accel",
      "Together Fund",
      "Girish Mathrubootham (Freshworks founder)",
      "Axilor Ventures",
      "Manav Garg (Eka)",
      "Mithun Sacheti (CaratLane)"
    ],
    "leadInvestor": "Tiger Global",
    "valuation": "Not publicly disclosed",
    "revenue": "~$16.4M estimated ARR (Growjo estimate, 2024); growing 20% M-o-M at time of Series A",
    "employees": "~113-122 (as of 2024)",
    "customers": [
      "SMBs, large enterprises, and Fortune 500 companies globally",
      "Banking and financial institutions",
      "Government agencies",
      "Healthcare organizations",
      "MSPs and MSSPs"
    ],
    "moat": "Single unified platform vs. competitors' fragmented multi-product suites; significantly lower TCO vs. CyberArk/BeyondTrust; Zoho mafia pedigree with deep SaaS product DNA; simple deployment model; MSP-edition creates channel distribution moat; Tiger Global + Accel + Together Fund investor network",
    "tags": [
      "Privileged Access Management",
      "Zero Trust",
      "Identity Security",
      "Endpoint Security",
      "PAM"
    ],
    "category": "Cyber"
  },
  {
    "name": "Sequretek",
    "founded": 2013,
    "hq": "Mumbai, India",
    "website": "https://www.sequretek.com",
    "oneLiner": "AI-powered cloud security platform delivering XDR, EDR, Identity Governance, and Managed Security Services for mid-market and enterprise clients globally.",
    "description": "Sequretek was co-founded by Anand Naik (ex-Symantec MD for South Asia) and Pankit Desai (ex-NTT Data, Wipro), both with 25+ years in enterprise IT, after recognizing that existing security stacks were fragmented and unaffordable for mid-sized businesses. Its Percept Cloud Security Platform (CSP) integrates AI-driven Endpoint Detection & Response, Extended Detection & Response, Identity Governance and Administration, and Managed Security Services into a single product suite. In November 2023, it raised $8M Series A led by Omidyar Network India, targeting SMBs in BFSI, healthcare, pharma, and manufacturing sectors.",
    "tech": "Percept Cloud Security Platform (CSP); AI/ML-powered predictive threat detection; Percept XDR (Extended Detection & Response); Percept EDR (Endpoint Detection & Response); Percept IGA (Identity Governance & Administration); behavioral analytics; managed detection and response (MDR); automated threat response",
    "problem": "SMBs and mid-market enterprises are increasingly targeted by cyberattacks but cannot afford the enterprise-grade security stacks available to large corporations\u2014Sequretek provides an integrated, AI-driven platform that replaces multiple expensive point solutions.",
    "products": [
      "Percept XDR",
      "Percept EDR",
      "Percept IGA (Identity Governance)",
      "Percept CSP (Cloud Security Platform)",
      "Managed Security Services (MSS)"
    ],
    "founders": [
      {
        "name": "Anand Naik",
        "title": "Co-Founder & CEO",
        "background": "25+ years in enterprise IT; Managing Director (India & SAARC) at Symantec; prior roles at IBM, Sun Microsystems, Siemens Nixdorf; co-founded Sequretek in November 2013"
      },
      {
        "name": "Pankit Desai",
        "title": "Co-Founder & CEO (listed as co-CEO/co-founder)",
        "background": "Technology leadership roles at NTT Data, Intelligroup, and Wipro Technologies; computer engineering degree; co-founded Sequretek in 2013"
      }
    ],
    "totalFunding": "$13M ($1M Seed 2017 + $4M Convertible Note 2018 + $8M Series A 2023)",
    "fundingNum": 13.0,
    "latestRound": {
      "round_type": "Series A",
      "amount_usd": 8000000,
      "date": "November 2023",
      "lead_investor": "Omidyar Network India"
    },
    "investors": [
      "Omidyar Network India",
      "Unicorn India Ventures",
      "GVFL (Gujarat Venture Finance Limited)",
      "Narottam Sekhsaria Family Office",
      "Alteria Capital"
    ],
    "leadInvestor": "Omidyar Network India",
    "valuation": "Not publicly disclosed",
    "revenue": "Not publicly disclosed; 150+ global enterprise clients (2025)",
    "employees": "~150-200",
    "customers": [
      "150+ organizations globally",
      "BFSI sector (banks, NBFCs)",
      "Healthcare and pharmaceuticals",
      "Media, manufacturing, retail, logistics sectors",
      "Tier 1, 2, and 3 city clients in India"
    ],
    "moat": "Integrated Percept CSP platform reduces multi-vendor complexity for SMBs; deep SMB focus with price-competitive positioning vs. enterprise-grade alternatives; co-founders have combined 50+ years of enterprise cybersecurity industry relationships; Omidyar Network backing signals impact-at-scale thesis",
    "tags": [
      "XDR",
      "EDR",
      "SIEM",
      "Identity Governance",
      "Managed Security Services"
    ],
    "category": "Cyber"
  },
  {
    "name": "QNu Labs",
    "founded": 2016,
    "hq": "Bengaluru, India",
    "website": "https://www.qnulabs.com",
    "oneLiner": "India's first commercial quantum-safe cybersecurity company, offering hardware-based Quantum Key Distribution, Quantum Random Number Generation, and Post-Quantum Cryptography.",
    "description": "QNu Labs was incubated at IIT Madras and is building India's sovereign quantum cryptography infrastructure. Its hardware-based QKD (Armos), QRNG (Tropos), and PQC solutions secure communications against both classical and future quantum-computing threats\u2014the so-called 'harvest now, decrypt later' attack vector. In April 2025, it raised INR 60 Cr ($7M) Series A led by India's National Quantum Mission (NQM), the first government-mission-led investment in a quantum security startup. Total funding stands at ~$20M, and the company holds 10 patents. It recently signed an MoU with BISAG-N (under MeitY) and launched QShield, the world's first Quantum Security-as-a-Service platform.",
    "tech": "Quantum Key Distribution (QKD); Quantum Random Number Generation (QRNG); Post-Quantum Cryptography (PQC); hardware-based quantum security devices; QShield (Quantum Security-as-a-Service); photon-based key generation using quantum mechanics principles; NIST PQC algorithm implementations",
    "problem": "Current public-key cryptography (RSA, ECC) will be broken by sufficiently powerful quantum computers\u2014QNu Labs protects against this existential threat to global digital security by providing quantum-safe encryption infrastructure for critical sectors like defense, finance, telecom, and healthcare today.",
    "products": [
      "Armos (Quantum Key Distribution system)",
      "Tropos (Quantum Random Number Generator)",
      "QShield (Quantum Security-as-a-Service platform)",
      "Post-Quantum Cryptography (PQC) tools"
    ],
    "founders": [
      {
        "name": "Sunil Gupta",
        "title": "Co-Founder & CEO",
        "background": "IIT Madras connection; entrepreneur and quantum technology advocate; co-founded QNu Labs in 2016"
      },
      {
        "name": "Srinivasa Rao Aluri",
        "title": "Co-Founder & Chairman",
        "background": "Co-founder of QNu Labs; technical background in quantum systems"
      },
      {
        "name": "Mark Mathias",
        "title": "Head of Production",
        "background": "Co-founder; hardware production expertise"
      }
    ],
    "totalFunding": "~$20M total (pre-Series A + Series A INR 60 Cr)",
    "fundingNum": 20.0,
    "latestRound": {
      "round_type": "Series A",
      "amount_usd": 7000000,
      "date": "April 2025",
      "lead_investor": "National Quantum Mission (NQM), Department of Science & Technology, Government of India"
    },
    "investors": [
      "National Quantum Mission (NQM) - Govt. of India",
      "Lucky Investment",
      "Speciale Invest",
      "Tenacity Ventures",
      "Singularity AMC"
    ],
    "leadInvestor": "National Quantum Mission (Government of India)",
    "valuation": "Not publicly disclosed",
    "revenue": "Not publicly disclosed; commercial deployments in defense, finance, telecom",
    "employees": "~100-150",
    "customers": [
      "BISAG-N (MeitY MoU for Quantum Suraksha Kavach)",
      "Indian Defence Forces",
      "Financial institutions",
      "Telecom providers",
      "IIT Madras (incubation and research)"
    ],
    "moat": "First Indian startup with commercially deployed, hardware-based quantum-safe solutions; 10 patents; government of India strategic partner and investor; QShield is world's first Quantum Security-as-a-Service platform; regulatory tailwinds as governments mandate quantum-safe standards; deep-tech moat with hardware QKD requiring photonic expertise",
    "tags": [
      "Quantum Security",
      "Post-Quantum Cryptography",
      "Encryption",
      "Deep Tech",
      "Critical Infrastructure"
    ],
    "category": "Cyber"
  },
  {
    "name": "Indusface",
    "founded": 2012,
    "hq": "Bengaluru, India (HQ in Vadodara/Ahmedabad origins)",
    "website": "https://www.indusface.com",
    "oneLiner": "Application security SaaS company protecting 5,000+ web and mobile applications globally with an integrated WAF, scanner, CDN, and threat intelligence engine\u2014the only vendor with 100% Gartner customer recommendation rating.",
    "description": "Founded by Ashish Tandon (Ranji Trophy cricketer and first-generation entrepreneur) and Venkatesh (Wenesh) Sundar, Indusface bootstrapped for 8 years before raising its first institutional round from Tata Capital Growth Fund II in 2020. Its AppTrana platform\u2014launched in 2017\u2014uniquely integrates Web Application Firewall (WAF), Web Application Scanner, CDN, and threat intelligence into a single fully managed service, eliminating the need for multiple vendors. It is the only vendor to achieve 100% customer recommendation on Gartner Peer Insights across 250+ reviews\u2014an unprecedented feat across all enterprise software. Indusface has protected companies from 9 billion+ attacks in India alone (2025 State of AppSec report).",
    "tech": "AppTrana (integrated WAF + scanner + CDN + threat intelligence); Managed WAF; WAAP (Web Application and API Protection); risk-based vulnerability scanning; CDN edge computing; AI-assisted attack pattern detection; continuous risk assessment; 24/7 SOC management",
    "problem": "Web application attacks are the #1 entry point for breaches, but most organizations either use fragmented point tools (scanner + WAF + CDN separately) or can't afford enterprise-grade protection\u2014Indusface's fully managed platform democratizes application security.",
    "products": [
      "AppTrana (Web Application and API Protection platform)",
      "AppTrana WAF",
      "AppTrana Network Security",
      "AppTrana WAAP"
    ],
    "founders": [
      {
        "name": "Ashish Tandon",
        "title": "Founder & CEO",
        "background": "Bachelor of Electrical Engineering from MS University; IIM Ahmedabad Executive Program; former Ranji Trophy cricketer (played against Sachin Tendulkar); serial entrepreneur with prior exits in security/internet services; CERT-In empanelled assessor"
      },
      {
        "name": "Venkatesh (Wenesh) Sundar",
        "title": "Co-Founder",
        "background": "North American market experience before returning to India in 2007-2008; cricket statistics enthusiast; product and market expertise"
      }
    ],
    "totalFunding": "$5M (Tata Capital Growth Fund II, April 2020)",
    "fundingNum": 5.0,
    "latestRound": {
      "round_type": "Growth Equity",
      "amount_usd": 5000000,
      "date": "April 2020",
      "lead_investor": "Tata Capital Growth Fund II"
    },
    "investors": [
      "Tata Capital Growth Fund II"
    ],
    "leadInvestor": "Tata Capital Growth Fund II",
    "valuation": "Not publicly disclosed (profitable; $36.6M estimated ARR per Growjo 2024)",
    "revenue": "Multi-million $ ARR (founder-stated); $36.6M estimated ARR (Growjo, 2024); profitable",
    "employees": "~167 (Growjo estimate 2024)",
    "customers": [
      "5,000+ customers across 95 countries",
      "IndusInd Bank",
      "Larsen & Toubro",
      "Tata group companies (Titan, Tata Power, Tata Sky)",
      "Darwinbox",
      "O9 Solutions"
    ],
    "moat": "100% Gartner customer recommendation rate (unique in all enterprise software); bootstrapped to profitability in Year 1 proving product-market fit; fully managed service model removes customer burden; AppTrana's integrated WAF+scanner+CDN differentiates from point solutions; CERT-In empanelled; 9B+ attacks blocked data creates superior threat intelligence feedback loop",
    "tags": [
      "Application Security",
      "WAF",
      "WAAP",
      "Web Application Firewall",
      "CDN"
    ],
    "category": "Cyber"
  },
  {
    "name": "Kratikal Tech",
    "founded": 2013,
    "hq": "Noida, Uttar Pradesh, India",
    "website": "https://kratikal.com",
    "oneLiner": "Cybersecurity company offering human risk management, phishing simulations, and email security through AI/ML-powered products ThreatCop and KDMARC.",
    "description": "Founded by NIT-Allahabad alumni Pavan Kushwaha (CEO), Paratosh Bansal (CTO), and Dip Jung Thapa (COO), Kratikal was incubated under India's Ministry of Telecom and recognized by Startup India. Its flagship product ThreatCop is an AI/ML-based security awareness training and employee risk assessment platform using simulated phishing, ransomware, smishing, and vishing attacks to reduce human-layer cyber vulnerabilities. KDMARC is an email authentication and DMARC enforcement tool for anti-spoofing. Kratikal serves 600+ enterprise clients globally with 400,000-500,000 end users actively using its products.",
    "tech": "AI/ML-based phishing simulation and employee risk scoring; DMARC/SPF/DKIM email authentication enforcement; security awareness training gamification; behavioral analytics for human risk quantification; simulated phishing, ransomware, smishing, vishing campaigns",
    "problem": "Over 90% of cyberattacks begin with human error\u2014phishing, social engineering, and email spoofing. Kratikal addresses the human layer of cybersecurity that technical controls cannot fix alone.",
    "products": [
      "ThreatCop (Security Awareness Training & Phishing Simulation)",
      "KDMARC (Email Authentication & Anti-Spoofing)",
      "VAPT (Vulnerability Assessment & Penetration Testing)"
    ],
    "founders": [
      {
        "name": "Pavan Kushwaha",
        "title": "Founder & CEO",
        "background": "NIT Allahabad alumnus; serial cybersecurity entrepreneur; also founder of Threatcop (product brand); recognized speaker at BFSI industry events"
      },
      {
        "name": "Paratosh Bansal",
        "title": "Co-Founder & CTO",
        "background": "NIT Allahabad alumnus; technical lead for Kratikal platform development"
      },
      {
        "name": "Dip Jung Thapa",
        "title": "Co-Founder & COO",
        "background": "NIT Allahabad alumnus; operations and growth"
      }
    ],
    "totalFunding": "~$1M (Pre-Series A, December 2019)",
    "fundingNum": 1.0,
    "latestRound": {
      "round_type": "Pre-Series A",
      "amount_usd": 1000000,
      "date": "December 2019",
      "lead_investor": "Gilda VC"
    },
    "investors": [
      "Gilda VC (Dubai)",
      "Art Venture",
      "Artha Ventures",
      "Shangrila Infotech LLP",
      "Equentia Natural Resources",
      "LetsVenture",
      "Angel investors"
    ],
    "leadInvestor": "Gilda VC",
    "valuation": "Not publicly disclosed",
    "revenue": "~$2M ARR (Bitscale estimate, 2026)",
    "employees": "~100-150",
    "customers": [
      "600+ enterprise clients globally",
      "NASSCOM Product Conclave Top 6 (2018)",
      "Ministry of Telecom incubated",
      "Financial sector clients",
      "Healthcare clients"
    ],
    "moat": "First-mover in India for AI-powered phishing simulation; NIT alumni technical credibility; Startup India recognition; government incubation provides regulatory trust; dual-product approach (awareness training + email authentication) creates cross-sell opportunity; NASSCOM recognition provides enterprise sales credibility",
    "tags": [
      "Security Awareness Training",
      "Phishing Simulation",
      "Email Security",
      "DMARC",
      "Human Risk Management"
    ],
    "category": "Cyber"
  },
  {
    "name": "WiJungle",
    "founded": 2017,
    "hq": "Jaipur, Rajasthan, India",
    "website": "https://wijungle.com",
    "oneLiner": "Unified Network Security Gateway that replaces 10+ standalone security appliances (firewall, WAF, VPN, SD-WAN, DLP, hotspot) with a single AI/ML-driven platform, reducing costs by up to 60%.",
    "description": "WiJungle was founded by cousins Karmesh Gupta and Praveen Gupta in 2017 in Jaipur (a Tier-2 city), with a vision to consolidate fragmented network security infrastructure into one appliance. Its AI/ML-driven Unified Network Security Platform (UNSP) combines Network Firewall, Web Application Firewall, SD-WAN, Data Loss Prevention (DLP), Hotspot Gateway, Vulnerability Assessment, and VPN into a single window. WiJungle serves 25+ countries and more than 15 Indian government ministries and the PMO. It became the first Indian cybersecurity startup to attain TEC (Telecommunication Engineering Centre) certification, making it eligible for India government procurement. In April 2022, SOSV led its seed round at a $22M valuation.",
    "tech": "Unified Network Security Platform (UNSP); AI/ML behavioral analysis for unknown threat detection; Network Firewall; Web Application Firewall (WAF); SD-WAN; DLP (Data Loss Prevention); Hotspot Gateway; Vulnerability Assessment; VPN; 42+ product models for different enterprise scales",
    "problem": "Organizations managing 8-10 separate security appliances (router, load balancer, VPN, firewall, WAF, hotspot gateway, SD-WAN, DLP) face operational complexity, security gaps between tools, and 2-3x higher costs than necessary\u2014WiJungle unifies all into one.",
    "products": [
      "Unified Network Security Platform (UNSP)",
      "WiJungle Network Firewall",
      "WiJungle WAF",
      "WiJungle SD-WAN",
      "WiJungle DLP",
      "WiJungle Hotspot Gateway"
    ],
    "founders": [
      {
        "name": "Karmesh Gupta",
        "title": "Co-Founder & CEO",
        "background": "From Alwar, Rajasthan; bootstrapped two prior failed startups before WiJungle; DIPP recognized innovator; Gartner Voice of Customer recognizee"
      },
      {
        "name": "Praveen Gupta",
        "title": "Co-Founder",
        "background": "Cousin of Karmesh; co-founded WiJungle in 2017 in Jaipur"
      }
    ],
    "totalFunding": "~$3M (SOSV Seed round at $22M valuation, April 2022; bootstrapped prior)",
    "fundingNum": 3.0,
    "latestRound": {
      "round_type": "Seed",
      "amount_usd": 3000000,
      "date": "April 2022",
      "lead_investor": "SOSV (HAX program)"
    },
    "investors": [
      "SOSV"
    ],
    "leadInvestor": "SOSV",
    "valuation": "$22M (seed round valuation, April 2022)",
    "revenue": "Not publicly disclosed; bootstrapped profitably before seed round; 450% YoY growth claimed (2021)",
    "employees": "~100-200",
    "customers": [
      "25+ countries",
      "15+ Indian government ministries",
      "PMO (Prime Minister's Office) India",
      "Hospitality, healthcare, education, BFSI, retail, defense, transportation sectors",
      "TEC-certified (first Indian cybersecurity startup)",
      "DIPP recognized"
    ],
    "moat": "First Indian cybersecurity startup with TEC certification (mandatory for government procurement); Gartner Highest Rated Vendor in Network Firewall for 2 consecutive years; 60% cost reduction vs. multi-appliance setups; deep government client base creates reference selling; Indian origin resonates strongly in Middle East, Africa, South Asia markets",
    "tags": [
      "Network Security",
      "Firewall",
      "SD-WAN",
      "DLP",
      "Unified Security"
    ],
    "category": "Cyber"
  },
  {
    "name": "InstaSafe Technologies",
    "founded": 2012,
    "hq": "Bengaluru, India",
    "website": "https://instasafe.com",
    "oneLiner": "Zero Trust Network Access (ZTNA) and cloud-native security platform providing secure access to enterprise applications and infrastructure without traditional VPNs.",
    "description": "InstaSafe was founded in 2012 by three entrepreneurs\u2014Sandip Kumar Panda, Biju George, and Prashanth Guruswamy\u2014applying Zero Trust principles before the term became mainstream. Its cloud-delivered Security-as-a-Service platform enables organizations to provide secure remote access to critical business applications hosted on-premise, in the cloud, data centers, or hybrid environments for employees and branch offices, without requiring VPN infrastructure. The company leverages crowdsourced vulnerability discovery and offers subscription-based SaaS with rapid deployment. It partners with AWS, Ingram Micro, and Hitachi for distribution, and claims 574% YoY revenue growth in FY2021 with 120+ clients.",
    "tech": "Zero Trust Network Access (ZTNA); cloud-native Security-as-a-Service; Software-Defined Perimeter (SDP); multi-factor authentication; identity-based access controls; micro-segmentation; cloud-delivered security without VPN; policy-based management; crowdsourced vulnerability discovery",
    "problem": "Traditional VPN and perimeter-based security models are fundamentally broken in the hybrid/cloud-first world\u2014they grant excessive implicit trust, are complex to manage, and create security blind spots. InstaSafe applies Zero Trust to enable secure access regardless of where users or applications reside.",
    "products": [
      "InstaSafe Secure Access (ISA)",
      "Zero Trust Application Access",
      "Zero Trust Network Access",
      "InstaSafe Cloud Access"
    ],
    "founders": [
      {
        "name": "Sandip Kumar Panda",
        "title": "Co-Founder & CEO",
        "background": "Co-founded InstaSafe in 2012; cybersecurity and cloud security expertise"
      },
      {
        "name": "Biju George",
        "title": "Co-Founder",
        "background": "Co-founded InstaSafe in 2012; enterprise security background"
      },
      {
        "name": "Prashanth Guruswamy",
        "title": "Co-Founder",
        "background": "Co-founded InstaSafe in 2012; technology and product expertise"
      }
    ],
    "totalFunding": "~$2.7M (multiple rounds including HPE, NetApp Excellerator)",
    "fundingNum": 2.7,
    "latestRound": {
      "round_type": "Accelerator/Growth",
      "amount_usd": null,
      "date": "2021",
      "lead_investor": "Hewlett Packard Enterprise"
    },
    "investors": [
      "Hewlett Packard Enterprise (HPE)",
      "NetApp Excellerator",
      "ABM Knowledgeware",
      "Plan9",
      "CIO Angel Network"
    ],
    "leadInvestor": "Hewlett Packard Enterprise",
    "valuation": "Not publicly disclosed",
    "revenue": "Claimed 574% YoY revenue growth (FY2021); $2.7M total raised indicates early-stage revenue",
    "employees": "~50-100",
    "customers": [
      "120+ enterprise clients (2021)",
      "AWS (distribution partnership)",
      "Ingram Micro (distribution)",
      "Hitachi (partnership)",
      "Enterprise clients across financial services, IT/ITeS"
    ],
    "moat": "Early Zero Trust pioneer (2012) in India before ZTA became mainstream; cloud-delivered with rapid deployment; no-VPN architecture resonates with remote/hybrid workforce trends; HPE strategic backing provides enterprise customer access; subscription SaaS model with low TCO",
    "tags": [
      "Zero Trust",
      "ZTNA",
      "Network Access Control",
      "Cloud Security",
      "Remote Access"
    ],
    "category": "Cyber"
  },
  {
    "name": "Innefu Labs",
    "founded": 2010,
    "hq": "New Delhi, India",
    "website": "https://innefu.com",
    "oneLiner": "AI-driven national security and cybersecurity intelligence platform serving defense agencies, law enforcement, and Fortune 500 enterprises with predictive intelligence, OSINT, and digital forensics.",
    "description": "Innefu Labs (Series A funded, founded 2010) is one of India's earliest deep-tech AI security companies, building products for intelligence fusion, predictive policing, financial fraud analytics, and cybersecurity for national security agencies. Its Defense Intelligence Fusion Centre has been deployed across 50+ organizations, and it implemented Southeast Asia's largest intelligence fusion center in 2024-25. Innefu's products blend AI/ML with OSINT, digital forensics, video analytics, and behavioral biometrics to give law enforcement, defense, and BFSI clients actionable threat intelligence. With a 290-person team, it operates across India, Middle East, and Southeast Asia.",
    "tech": "AI/ML predictive intelligence; OSINT (Open Source Intelligence); Deep packet inspection; Digital forensics and incident response; Video and image analytics; Financial fraud analytics; Behavioral biometrics; Intelligence Fusion Centre technology; Ad-intelligence; Unified Authentication Platform",
    "problem": "National security agencies and large enterprises need to process vast amounts of unstructured data across social media, financial transactions, surveillance feeds, and cyber telemetry to detect threats\u2014Innefu builds AI-powered platforms that convert raw intelligence into actionable security insights.",
    "products": [
      "Defence Intelligence Fusion Centre",
      "Predictive Policing platform",
      "Open Source Intelligence (OSINT) platform",
      "Predictive Intelligence platform",
      "Video & Image Analytics",
      "Financial Fraud Analytics"
    ],
    "founders": [
      {
        "name": "Tarun Wig",
        "title": "Co-Founder & CEO",
        "background": "17+ years in cybersecurity; leads strategy, sales, and business growth; frequent speaker on AI in national security"
      },
      {
        "name": "Abhishek Sharma",
        "title": "Co-Founder & CTO",
        "background": "17+ years in software development, SAP advisory, and ERP implementation; leads technology, development, and delivery"
      }
    ],
    "totalFunding": "$2M Series A (IndiaNivesh Venture Capital Fund, April 2017); additional undisclosed rounds",
    "fundingNum": 2.0,
    "latestRound": {
      "round_type": "Series A",
      "amount_usd": 2000000,
      "date": "April 2017",
      "lead_investor": "IndiaNivesh Venture Capital Fund"
    },
    "investors": [
      "IndiaNivesh Venture Capital Fund"
    ],
    "leadInvestor": "IndiaNivesh Venture Capital Fund",
    "valuation": "Not publicly disclosed",
    "revenue": "Not publicly disclosed; 100+ installations; de-facto leader in AI for national security deployments in India",
    "employees": "~290",
    "customers": [
      "Indian Defence Forces",
      "Intelligence agencies",
      "Law Enforcement Agencies (LEAs)",
      "Financial Intelligence Units",
      "BFSI Fortune 500 companies",
      "100+ law enforcement & Fortune 500 companies across Middle East, Southeast Asia & Indian subcontinent"
    ],
    "moat": "15+ year head start in AI-for-national-security (founded 2010); government trust moat\u2014difficult for foreign vendors to displace in sovereign intelligence contexts; largest Intelligence Fusion Centre in Southeast Asia (2024); deep-tech AI expertise with 290-person specialized team; rare combination of cybersecurity + OSINT + biometrics + financial analytics",
    "tags": [
      "AI Security",
      "National Security",
      "OSINT",
      "Digital Forensics",
      "Threat Intelligence"
    ],
    "category": "Cyber"
  }
];
