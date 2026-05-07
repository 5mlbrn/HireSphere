const SEED_JOBS = [
  {
    "id": 1,
    "title": "Frontend Developer",
    "company": "TechNova",
    "logo": "TN",
    "location": "Bangalore",
    "type": "Full-time",
    "mode": "Remote",
    "salary": "\u20b98 LPA",
    "experience": "1-3 years",
    "category": "Engineering",
    "tags": [
      "JavaScript",
      "React",
      "CSS"
    ],
    "posted": "2 days ago",
    "description": "Build delightful user interfaces using modern JavaScript and component libraries. Collaborate with designers and backend engineers to ship pixel-perfect features.",
    "responsibilities": [
      "Develop responsive UIs in HTML, CSS and JavaScript",
      "Integrate REST APIs using fetch and async/await",
      "Write clean, modular ES6+ code",
      "Participate in code reviews"
    ],
    "skills": [
      "JavaScript",
      "DOM",
      "CSS Grid",
      "REST APIs",
      "Git"
    ]
  },
  {
    "id": 2,
    "title": "Backend Engineer",
    "company": "Infosys",
    "logo": "IN",
    "location": "Pune",
    "type": "Full-time",
    "mode": "Hybrid",
    "salary": "\u20b912 LPA",
    "experience": "2-4 years",
    "category": "Engineering",
    "tags": [
      "Node.js",
      "MongoDB",
      "API"
    ],
    "posted": "5 days ago",
    "description": "Design and build scalable backend services that power our flagship products used by millions globally.",
    "responsibilities": [
      "Design REST APIs",
      "Optimize database queries",
      "Write unit tests",
      "Deploy services to cloud"
    ],
    "skills": [
      "Node.js",
      "Express",
      "MongoDB",
      "Docker"
    ]
  },
  {
    "id": 3,
    "title": "Full Stack Developer",
    "company": "TCS",
    "logo": "TC",
    "location": "Mumbai",
    "type": "Full-time",
    "mode": "On-site",
    "salary": "\u20b910 LPA",
    "experience": "2-5 years",
    "category": "Engineering",
    "tags": [
      "MERN",
      "JavaScript",
      "AWS"
    ],
    "posted": "1 day ago",
    "description": "Work across the stack on modern web applications for enterprise clients.",
    "responsibilities": [
      "Develop frontend and backend modules",
      "Mentor junior developers",
      "Translate requirements into specs"
    ],
    "skills": [
      "JavaScript",
      "React",
      "Node.js",
      "SQL"
    ]
  },
  {
    "id": 4,
    "title": "UI/UX Designer",
    "company": "Razorpay",
    "logo": "RP",
    "location": "Bangalore",
    "type": "Full-time",
    "mode": "Hybrid",
    "salary": "\u20b914 LPA",
    "experience": "3-6 years",
    "category": "Design",
    "tags": [
      "Figma",
      "Prototyping",
      "Research"
    ],
    "posted": "3 days ago",
    "description": "Craft intuitive product experiences that delight customers using research-driven design thinking.",
    "responsibilities": [
      "Create wireframes and prototypes",
      "Conduct user research",
      "Build design systems"
    ],
    "skills": [
      "Figma",
      "Adobe XD",
      "User Research"
    ]
  },
  {
    "id": 5,
    "title": "Data Analyst",
    "company": "Flipkart",
    "logo": "FK",
    "location": "Bangalore",
    "type": "Full-time",
    "mode": "On-site",
    "salary": "\u20b99 LPA",
    "experience": "1-3 years",
    "category": "Data",
    "tags": [
      "SQL",
      "Python",
      "Tableau"
    ],
    "posted": "1 week ago",
    "description": "Turn raw data into actionable insights that drive product and marketing decisions.",
    "responsibilities": [
      "Build dashboards",
      "Analyse user behaviour",
      "Present findings"
    ],
    "skills": [
      "SQL",
      "Python",
      "Excel",
      "Tableau"
    ]
  },
  {
    "id": 6,
    "title": "DevOps Engineer",
    "company": "Wipro",
    "logo": "WP",
    "location": "Hyderabad",
    "type": "Full-time",
    "mode": "Remote",
    "salary": "\u20b916 LPA",
    "experience": "3-5 years",
    "category": "Engineering",
    "tags": [
      "AWS",
      "Kubernetes",
      "CI/CD"
    ],
    "posted": "4 days ago",
    "description": "Automate infrastructure, build robust CI/CD pipelines and keep our systems running 24x7.",
    "responsibilities": [
      "Manage AWS infra",
      "Set up monitoring",
      "Automate deployments"
    ],
    "skills": [
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform"
    ]
  },
  {
    "id": 7,
    "title": "Mobile App Developer",
    "company": "Swiggy",
    "logo": "SW",
    "location": "Bangalore",
    "type": "Full-time",
    "mode": "Hybrid",
    "salary": "\u20b913 LPA",
    "experience": "2-4 years",
    "category": "Engineering",
    "tags": [
      "React Native",
      "iOS",
      "Android"
    ],
    "posted": "6 days ago",
    "description": "Build delightful mobile experiences for millions of customers ordering food daily.",
    "responsibilities": [
      "Develop cross-platform apps",
      "Optimize performance",
      "Integrate native modules"
    ],
    "skills": [
      "React Native",
      "JavaScript",
      "iOS",
      "Android"
    ]
  },
  {
    "id": 8,
    "title": "Product Manager",
    "company": "Zomato",
    "logo": "ZM",
    "location": "Gurgaon",
    "type": "Full-time",
    "mode": "On-site",
    "salary": "\u20b922 LPA",
    "experience": "4-7 years",
    "category": "Product",
    "tags": [
      "Strategy",
      "Roadmap",
      "Analytics"
    ],
    "posted": "2 days ago",
    "description": "Lead the vision and execution of key product areas in our consumer app.",
    "responsibilities": [
      "Define product roadmap",
      "Work with design and engineering",
      "Measure success metrics"
    ],
    "skills": [
      "Product Strategy",
      "SQL",
      "User Research"
    ]
  },
  {
    "id": 9,
    "title": "QA Engineer",
    "company": "Paytm",
    "logo": "PT",
    "location": "Noida",
    "type": "Full-time",
    "mode": "On-site",
    "salary": "\u20b97 LPA",
    "experience": "1-3 years",
    "category": "Engineering",
    "tags": [
      "Testing",
      "Selenium",
      "Automation"
    ],
    "posted": "1 day ago",
    "description": "Ensure quality of our payments product through manual and automated testing.",
    "responsibilities": [
      "Write test cases",
      "Automate regression suites",
      "File and triage bugs"
    ],
    "skills": [
      "Selenium",
      "Java",
      "TestNG"
    ]
  },
  {
    "id": 10,
    "title": "Cloud Architect",
    "company": "Microsoft",
    "logo": "MS",
    "location": "Hyderabad",
    "type": "Full-time",
    "mode": "Hybrid",
    "salary": "\u20b935 LPA",
    "experience": "6-10 years",
    "category": "Engineering",
    "tags": [
      "Azure",
      "Architecture",
      "Cloud"
    ],
    "posted": "1 week ago",
    "description": "Design large-scale cloud architectures for enterprise customers across the globe.",
    "responsibilities": [
      "Design cloud solutions",
      "Lead technical pre-sales",
      "Mentor junior architects"
    ],
    "skills": [
      "Azure",
      "AWS",
      "System Design"
    ]
  },
  {
    "id": 11,
    "title": "Machine Learning Engineer",
    "company": "Google",
    "logo": "GO",
    "location": "Bangalore",
    "type": "Full-time",
    "mode": "Hybrid",
    "salary": "\u20b940 LPA",
    "experience": "3-6 years",
    "category": "Data",
    "tags": [
      "ML",
      "Python",
      "TensorFlow"
    ],
    "posted": "3 days ago",
    "description": "Build ML systems that operate at planet scale to make products smarter.",
    "responsibilities": [
      "Train and deploy ML models",
      "Build data pipelines",
      "Conduct experiments"
    ],
    "skills": [
      "Python",
      "TensorFlow",
      "PyTorch",
      "MLOps"
    ]
  },
  {
    "id": 12,
    "title": "iOS Developer",
    "company": "Amazon",
    "logo": "AM",
    "location": "Bangalore",
    "type": "Full-time",
    "mode": "On-site",
    "salary": "\u20b918 LPA",
    "experience": "2-5 years",
    "category": "Engineering",
    "tags": [
      "Swift",
      "iOS",
      "Mobile"
    ],
    "posted": "5 days ago",
    "description": "Craft world-class iOS experiences for the Amazon shopping app.",
    "responsibilities": [
      "Build iOS features",
      "Optimize app performance",
      "Collaborate with design"
    ],
    "skills": [
      "Swift",
      "SwiftUI",
      "Xcode"
    ]
  },
  {
    "id": 13,
    "title": "Cybersecurity Analyst",
    "company": "HDFC Bank",
    "logo": "HD",
    "location": "Mumbai",
    "type": "Full-time",
    "mode": "On-site",
    "salary": "\u20b911 LPA",
    "experience": "2-4 years",
    "category": "Security",
    "tags": [
      "Security",
      "SIEM",
      "Audit"
    ],
    "posted": "2 days ago",
    "description": "Protect our banking infrastructure from emerging cyber threats.",
    "responsibilities": [
      "Monitor security events",
      "Conduct vulnerability assessments",
      "Respond to incidents"
    ],
    "skills": [
      "SIEM",
      "Networking",
      "Linux"
    ]
  },
  {
    "id": 14,
    "title": "Content Marketing Manager",
    "company": "Byju's",
    "logo": "BJ",
    "location": "Bangalore",
    "type": "Full-time",
    "mode": "Hybrid",
    "salary": "\u20b915 LPA",
    "experience": "3-5 years",
    "category": "Marketing",
    "tags": [
      "SEO",
      "Content",
      "Strategy"
    ],
    "posted": "1 week ago",
    "description": "Lead content strategy across blog, video and social channels.",
    "responsibilities": [
      "Build content calendar",
      "Manage writers",
      "Track SEO performance"
    ],
    "skills": [
      "SEO",
      "Copywriting",
      "Analytics"
    ]
  },
  {
    "id": 15,
    "title": "Graphic Designer",
    "company": "Myntra",
    "logo": "MY",
    "location": "Bangalore",
    "type": "Full-time",
    "mode": "On-site",
    "salary": "\u20b96 LPA",
    "experience": "1-3 years",
    "category": "Design",
    "tags": [
      "Photoshop",
      "Illustrator",
      "Branding"
    ],
    "posted": "4 days ago",
    "description": "Design creative assets across digital and print for fashion campaigns.",
    "responsibilities": [
      "Design social creatives",
      "Build brand assets",
      "Collaborate with marketing"
    ],
    "skills": [
      "Photoshop",
      "Illustrator",
      "Typography"
    ]
  },
  {
    "id": 16,
    "title": "HR Business Partner",
    "company": "Tata Group",
    "logo": "TT",
    "location": "Mumbai",
    "type": "Full-time",
    "mode": "On-site",
    "salary": "\u20b914 LPA",
    "experience": "5-8 years",
    "category": "HR",
    "tags": [
      "Recruiting",
      "L&D",
      "Strategy"
    ],
    "posted": "3 days ago",
    "description": "Be the strategic HR partner for our technology business unit.",
    "responsibilities": [
      "Drive HR strategy",
      "Manage talent reviews",
      "Coach managers"
    ],
    "skills": [
      "HR Strategy",
      "Communication",
      "Talent Management"
    ]
  },
  {
    "id": 17,
    "title": "Junior Web Developer",
    "company": "Zoho",
    "logo": "ZH",
    "location": "Chennai",
    "type": "Full-time",
    "mode": "On-site",
    "salary": "\u20b95 LPA",
    "experience": "0-1 years",
    "category": "Engineering",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "posted": "1 day ago",
    "description": "Kickstart your career building real-world web products with our developer team.",
    "responsibilities": [
      "Write HTML/CSS/JS",
      "Fix bugs and improve UX",
      "Learn from senior devs"
    ],
    "skills": [
      "HTML",
      "CSS",
      "JavaScript",
      "Git"
    ]
  },
  {
    "id": 18,
    "title": "Sales Executive",
    "company": "Reliance Jio",
    "logo": "RJ",
    "location": "Delhi",
    "type": "Full-time",
    "mode": "On-site",
    "salary": "\u20b96 LPA",
    "experience": "1-3 years",
    "category": "Sales",
    "tags": [
      "B2B",
      "CRM",
      "Enterprise"
    ],
    "posted": "5 days ago",
    "description": "Drive enterprise sales for our connectivity and cloud products.",
    "responsibilities": [
      "Generate leads",
      "Close enterprise deals",
      "Manage CRM"
    ],
    "skills": [
      "Communication",
      "CRM",
      "Negotiation"
    ]
  },
  {
    "id": 19,
    "title": "Finance Analyst",
    "company": "ICICI Bank",
    "logo": "IC",
    "location": "Mumbai",
    "type": "Full-time",
    "mode": "On-site",
    "salary": "\u20b910 LPA",
    "experience": "2-4 years",
    "category": "Finance",
    "tags": [
      "Excel",
      "Modelling",
      "Banking"
    ],
    "posted": "1 week ago",
    "description": "Analyse financial performance and build robust forecasting models.",
    "responsibilities": [
      "Build financial models",
      "Prepare reports",
      "Support strategy team"
    ],
    "skills": [
      "Excel",
      "Financial Modelling",
      "SQL"
    ]
  },
  {
    "id": 20,
    "title": "Game Developer",
    "company": "Dream11",
    "logo": "D1",
    "location": "Mumbai",
    "type": "Full-time",
    "mode": "Hybrid",
    "salary": "\u20b917 LPA",
    "experience": "2-5 years",
    "category": "Engineering",
    "tags": [
      "Unity",
      "C#",
      "Mobile Games"
    ],
    "posted": "2 days ago",
    "description": "Build engaging fantasy gaming experiences for millions of users.",
    "responsibilities": [
      "Develop game features",
      "Optimize performance",
      "Iterate on UX"
    ],
    "skills": [
      "Unity",
      "C#",
      "Game Design"
    ]
  },
  {
    "id": 21,
    "title": "AI Researcher",
    "company": "OpenAI India",
    "logo": "OA",
    "location": "Remote",
    "type": "Full-time",
    "mode": "Remote",
    "salary": "\u20b950 LPA",
    "experience": "5-10 years",
    "category": "Data",
    "tags": [
      "AI",
      "Research",
      "PyTorch"
    ],
    "posted": "3 days ago",
    "description": "Push the frontier of large language models and applied AI research.",
    "responsibilities": [
      "Conduct novel research",
      "Publish papers",
      "Build prototypes"
    ],
    "skills": [
      "Python",
      "PyTorch",
      "Research"
    ]
  },
  {
    "id": 22,
    "title": "Technical Writer",
    "company": "Atlassian",
    "logo": "AT",
    "location": "Bangalore",
    "type": "Full-time",
    "mode": "Remote",
    "salary": "\u20b912 LPA",
    "experience": "2-4 years",
    "category": "Content",
    "tags": [
      "Docs",
      "Markdown",
      "API"
    ],
    "posted": "6 days ago",
    "description": "Write developer-focused documentation that delights and educates.",
    "responsibilities": [
      "Author API docs",
      "Maintain knowledge base",
      "Collaborate with engineers"
    ],
    "skills": [
      "Writing",
      "Markdown",
      "API"
    ]
  },
  {
    "id": 23,
    "title": "Customer Support Lead",
    "company": "Ola",
    "logo": "OL",
    "location": "Bangalore",
    "type": "Full-time",
    "mode": "On-site",
    "salary": "\u20b99 LPA",
    "experience": "3-5 years",
    "category": "Operations",
    "tags": [
      "Support",
      "Leadership",
      "CX"
    ],
    "posted": "1 day ago",
    "description": "Lead a team of customer support agents delivering 5-star experiences.",
    "responsibilities": [
      "Manage support team",
      "Improve CX metrics",
      "Escalation handling"
    ],
    "skills": [
      "Leadership",
      "CRM",
      "Communication"
    ]
  },
  {
    "id": 24,
    "title": "Business Analyst Intern",
    "company": "Deloitte",
    "logo": "DL",
    "location": "Gurgaon",
    "type": "Internship",
    "mode": "On-site",
    "salary": "\u20b940K/month",
    "experience": "0-1 years",
    "category": "Consulting",
    "tags": [
      "Analytics",
      "Excel",
      "Internship"
    ],
    "posted": "2 days ago",
    "description": "Get a head-start on a consulting career working on real client engagements.",
    "responsibilities": [
      "Support analyst team",
      "Client research",
      "Build decks"
    ],
    "skills": [
      "PowerPoint",
      "Excel",
      "Communication"
    ]
  },
  {
    "id": 25,
    "title": "SEO Specialist",
    "company": "HDFC Life",
    "logo": "HL",
    "location": "Pune",
    "type": "Full-time",
    "mode": "Hybrid",
    "salary": "\u20b98 LPA",
    "experience": "2-4 years",
    "category": "Marketing",
    "tags": [
      "SEO",
      "Analytics",
      "Growth"
    ],
    "posted": "4 days ago",
    "description": "Drive organic traffic growth and build our search visibility.",
    "responsibilities": [
      "Keyword research",
      "On-page SEO",
      "Build link strategies"
    ],
    "skills": [
      "SEO",
      "Analytics",
      "Content"
    ]
  },
  {
    "id": 26,
    "title": "Blockchain Developer",
    "company": "CoinDCX",
    "logo": "CD",
    "location": "Bangalore",
    "type": "Full-time",
    "mode": "Remote",
    "salary": "\u20b920 LPA",
    "experience": "2-5 years",
    "category": "Engineering",
    "tags": [
      "Solidity",
      "Web3",
      "Ethereum"
    ],
    "posted": "1 week ago",
    "description": "Build smart contracts and Web3 features for India's leading crypto exchange.",
    "responsibilities": [
      "Write smart contracts",
      "Audit code",
      "Build dApps"
    ],
    "skills": [
      "Solidity",
      "Web3.js",
      "Ethereum"
    ]
  },
  {
    "id": 27,
    "title": "Video Editor",
    "company": "Hotstar",
    "logo": "HS",
    "location": "Mumbai",
    "type": "Contract",
    "mode": "On-site",
    "salary": "\u20b97 LPA",
    "experience": "1-4 years",
    "category": "Content",
    "tags": [
      "Premiere",
      "After Effects",
      "Editing"
    ],
    "posted": "3 days ago",
    "description": "Edit promotional and original content for our streaming platform.",
    "responsibilities": [
      "Edit videos",
      "Add motion graphics",
      "Collaborate with creatives"
    ],
    "skills": [
      "Premiere Pro",
      "After Effects",
      "Storytelling"
    ]
  },
  {
    "id": 28,
    "title": "Operations Manager",
    "company": "BigBasket",
    "logo": "BB",
    "location": "Bangalore",
    "type": "Full-time",
    "mode": "On-site",
    "salary": "\u20b913 LPA",
    "experience": "4-7 years",
    "category": "Operations",
    "tags": [
      "Logistics",
      "Supply Chain",
      "Leadership"
    ],
    "posted": "5 days ago",
    "description": "Run city operations for our grocery delivery business.",
    "responsibilities": [
      "Manage warehouse ops",
      "Lead delivery teams",
      "Drive efficiency"
    ],
    "skills": [
      "Operations",
      "Leadership",
      "Excel"
    ]
  },
  {
    "id": 29,
    "title": "Salesforce Developer",
    "company": "Accenture",
    "logo": "AC",
    "location": "Hyderabad",
    "type": "Full-time",
    "mode": "Hybrid",
    "salary": "\u20b914 LPA",
    "experience": "3-6 years",
    "category": "Engineering",
    "tags": [
      "Salesforce",
      "Apex",
      "CRM"
    ],
    "posted": "2 days ago",
    "description": "Configure and customise Salesforce for global enterprise clients.",
    "responsibilities": [
      "Develop Apex code",
      "Configure flows",
      "Integrate Salesforce"
    ],
    "skills": [
      "Salesforce",
      "Apex",
      "Lightning"
    ]
  },
  {
    "id": 30,
    "title": "Digital Marketing Executive",
    "company": "Nykaa",
    "logo": "NY",
    "location": "Mumbai",
    "type": "Full-time",
    "mode": "On-site",
    "salary": "\u20b96 LPA",
    "experience": "1-3 years",
    "category": "Marketing",
    "tags": [
      "Ads",
      "Social",
      "Growth"
    ],
    "posted": "1 day ago",
    "description": "Run digital campaigns across Meta, Google and emerging platforms.",
    "responsibilities": [
      "Run paid campaigns",
      "Track ROI",
      "Build creatives brief"
    ],
    "skills": [
      "Google Ads",
      "Meta Ads",
      "Analytics"
    ]
  },
  {
    "id": 31,
    "title": "Data Scientist",
    "company": "Reliance Industries",
    "logo": "RI",
    "location": "Mumbai",
    "type": "Full-time",
    "mode": "On-site",
    "salary": "\u20b925 LPA",
    "experience": "3-5 years",
    "category": "Data",
    "tags": [
      "Python",
      "Machine Learning",
      "SQL"
    ],
    "posted": "2 days ago",
    "description": "Apply advanced analytics and machine learning to solve complex business problems in the energy and retail sectors.",
    "responsibilities": [
      "Build predictive models",
      "Analyze large datasets",
      "Collaborate with business units"
    ],
    "skills": [
      "Python",
      "Scikit-learn",
      "Pandas",
      "SQL"
    ]
  },
  {
    "id": 32,
    "title": "Cloud Engineer",
    "company": "HCLTech",
    "logo": "HT",
    "location": "Noida",
    "type": "Full-time",
    "mode": "Hybrid",
    "salary": "\u20b915 LPA",
    "experience": "2-4 years",
    "category": "Engineering",
    "tags": [
      "AWS",
      "Azure",
      "Terraform"
    ],
    "posted": "4 days ago",
    "description": "Design and implement cloud infrastructure solutions for global enterprise clients.",
    "responsibilities": [
      "Manage cloud resources",
      "Automate infrastructure",
      "Ensure security compliance"
    ],
    "skills": [
      "AWS",
      "Terraform",
      "Linux",
      "Python"
    ]
  },
  {
    "id": 33,
    "title": "Product Designer",
    "company": "PhonePe",
    "logo": "PP",
    "location": "Bangalore",
    "type": "Full-time",
    "mode": "On-site",
    "salary": "\u20b918 LPA",
    "experience": "3-6 years",
    "category": "Design",
    "tags": [
      "UI/UX",
      "Figma",
      "Mobile"
    ],
    "posted": "1 day ago",
    "description": "Design seamless payment experiences for millions of users across India.",
    "responsibilities": [
      "Create user flows",
      "Design high-fidelity mockups",
      "Conduct usability testing"
    ],
    "skills": [
      "Figma",
      "Prototyping",
      "User Research"
    ]
  },
  {
    "id": 34,
    "title": "Marketing Manager",
    "company": "Airtel",
    "logo": "AT",
    "location": "Gurgaon",
    "type": "Full-time",
    "mode": "On-site",
    "salary": "\u20b920 LPA",
    "experience": "5-8 years",
    "category": "Marketing",
    "tags": [
      "Brand",
      "Digital",
      "Strategy"
    ],
    "posted": "3 days ago",
    "description": "Lead brand and performance marketing campaigns for our digital services.",
    "responsibilities": [
      "Develop marketing strategy",
      "Manage campaign budgets",
      "Analyze market trends"
    ],
    "skills": [
      "Digital Marketing",
      "Brand Management",
      "Analytics"
    ]
  },
  {
    "id": 35,
    "title": "Software Engineer",
    "company": "Freshworks",
    "logo": "FW",
    "location": "Chennai",
    "type": "Full-time",
    "mode": "Remote",
    "salary": "\u20b916 LPA",
    "experience": "2-4 years",
    "category": "Engineering",
    "tags": [
      "Ruby on Rails",
      "JavaScript",
      "AWS"
    ],
    "posted": "5 days ago",
    "description": "Build and scale SaaS products that help businesses provide great customer experiences.",
    "responsibilities": [
      "Develop backend features",
      "Maintain high code quality",
      "Work in an agile team"
    ],
    "skills": [
      "Ruby",
      "Rails",
      "JavaScript",
      "PostgreSQL"
    ]
  },
  {
    "id": 36,
    "title": "HR Manager",
    "company": "Larsen & Toubro",
    "logo": "LT",
    "location": "Mumbai",
    "type": "Full-time",
    "mode": "On-site",
    "salary": "\u20b912 LPA",
    "experience": "4-7 years",
    "category": "HR",
    "tags": [
      "Recruitment",
      "Employee Relations",
      "Policy"
    ],
    "posted": "1 week ago",
    "description": "Manage end-to-end HR functions for our engineering and construction divisions.",
    "responsibilities": [
      "Talent acquisition",
      "Employee engagement",
      "Performance management"
    ],
    "skills": [
      "HR Operations",
      "Communication",
      "Negotiation"
    ]
  },
  {
    "id": 37,
    "title": "Financial Controller",
    "company": "Adani Group",
    "logo": "AG",
    "location": "Ahmedabad",
    "type": "Full-time",
    "mode": "On-site",
    "salary": "\u20b930 LPA",
    "experience": "8-12 years",
    "category": "Finance",
    "tags": [
      "Audit",
      "Taxation",
      "Reporting"
    ],
    "posted": "2 days ago",
    "description": "Oversee financial operations and ensure regulatory compliance for our infrastructure projects.",
    "responsibilities": [
      "Financial planning",
      "Risk management",
      "Internal audits"
    ],
    "skills": [
      "Chartered Accountancy",
      "SAP",
      "Financial Analysis"
    ]
  },
  {
    "id": 38,
    "title": "Content Strategist",
    "company": "Unacademy",
    "logo": "UA",
    "location": "Bangalore",
    "type": "Full-time",
    "mode": "Hybrid",
    "salary": "\u20b914 LPA",
    "experience": "3-5 years",
    "category": "Content",
    "tags": [
      "Education",
      "Writing",
      "SEO"
    ],
    "posted": "4 days ago",
    "description": "Create and manage educational content strategy for our online learning platform.",
    "responsibilities": [
      "Content planning",
      "Editorial oversight",
      "SEO optimization"
    ],
    "skills": [
      "Content Writing",
      "SEO",
      "Project Management"
    ]
  },
  {
    "id": 39,
    "title": "Sales Director",
    "company": "Oyo Rooms",
    "logo": "OY",
    "location": "Gurgaon",
    "type": "Full-time",
    "mode": "On-site",
    "salary": "\u20b935 LPA",
    "experience": "10-15 years",
    "category": "Sales",
    "tags": [
      "Hospitality",
      "B2B",
      "Growth"
    ],
    "posted": "6 days ago",
    "description": "Drive global sales growth and manage key enterprise partnerships in the hospitality sector.",
    "responsibilities": [
      "Sales strategy",
      "Team leadership",
      "Revenue growth"
    ],
    "skills": [
      "Sales Management",
      "Negotiation",
      "Business Development"
    ]
  },
  {
    "id": 40,
    "title": "Security Engineer",
    "company": "Paytm",
    "logo": "PT",
    "location": "Noida",
    "type": "Full-time",
    "mode": "On-site",
    "salary": "\u20b922 LPA",
    "experience": "4-6 years",
    "category": "Security",
    "tags": [
      "AppSec",
      "Pentesting",
      "Cloud"
    ],
    "posted": "1 day ago",
    "description": "Ensure the security of our fintech platform through rigorous testing and architecture reviews.",
    "responsibilities": [
      "Vulnerability assessment",
      "Security audits",
      "Incident response"
    ],
    "skills": [
      "OWASP",
      "Python",
      "Network Security"
    ]
  },
  {
    "id": 41,
    "title": "Frontend Architect",
    "company": "MakeMyTrip",
    "logo": "MM",
    "location": "Gurgaon",
    "type": "Full-time",
    "mode": "Hybrid",
    "salary": "\u20b945 LPA",
    "experience": "8-12 years",
    "category": "Engineering",
    "tags": [
      "React",
      "Architecture",
      "Performance"
    ],
    "posted": "3 days ago",
    "description": "Define the frontend architecture for India's leading travel portal.",
    "responsibilities": [
      "Technical leadership",
      "Performance optimization",
      "Mentoring"
    ],
    "skills": [
      "React",
      "Next.js",
      "System Design"
    ]
  },
  {
    "id": 42,
    "title": "Operations Lead",
    "company": "Delhivery",
    "logo": "DV",
    "location": "Gurgaon",
    "type": "Full-time",
    "mode": "On-site",
    "salary": "\u20b918 LPA",
    "experience": "5-8 years",
    "category": "Operations",
    "tags": [
      "Logistics",
      "Supply Chain",
      "Last Mile"
    ],
    "posted": "5 days ago",
    "description": "Optimize last-mile delivery operations and manage large-scale logistics networks.",
    "responsibilities": [
      "Process improvement",
      "Team management",
      "Cost optimization"
    ],
    "skills": [
      "Operations Management",
      "Data Analysis",
      "Logistics"
    ]
  },
  {
    "id": 43,
    "title": "Legal Counsel",
    "company": "Infosys",
    "logo": "IN",
    "location": "Bangalore",
    "type": "Full-time",
    "mode": "On-site",
    "salary": "\u20b924 LPA",
    "experience": "6-10 years",
    "category": "Consulting",
    "tags": [
      "Corporate Law",
      "Contracts",
      "Compliance"
    ],
    "posted": "1 week ago",
    "description": "Provide legal advice on corporate matters and manage international contract negotiations.",
    "responsibilities": [
      "Contract drafting",
      "Legal compliance",
      "Risk assessment"
    ],
    "skills": [
      "Corporate Law",
      "Negotiation",
      "Legal Writing"
    ]
  },
  {
    "id": 44,
    "title": "Business Development Manager",
    "company": "Byju's",
    "logo": "BJ",
    "location": "Bangalore",
    "type": "Full-time",
    "mode": "On-site",
    "salary": "\u20b910 LPA",
    "experience": "2-4 years",
    "category": "Sales",
    "tags": [
      "EdTech",
      "Sales",
      "Leads"
    ],
    "posted": "2 days ago",
    "description": "Drive sales growth for our educational products through effective lead conversion.",
    "responsibilities": [
      "Lead generation",
      "Client meetings",
      "Sales closure"
    ],
    "skills": [
      "Communication",
      "Sales",
      "Persistence"
    ]
  },
  {
    "id": 45,
    "title": "UX Researcher",
    "company": "Zomato",
    "logo": "ZM",
    "location": "Gurgaon",
    "type": "Full-time",
    "mode": "Hybrid",
    "salary": "\u20b916 LPA",
    "experience": "3-5 years",
    "category": "Design",
    "tags": [
      "Research",
      "User Testing",
      "Insights"
    ],
    "posted": "4 days ago",
    "description": "Conduct deep user research to inform product decisions for our food delivery app.",
    "responsibilities": [
      "User interviews",
      "Usability testing",
      "Data synthesis"
    ],
    "skills": [
      "User Research",
      "Analysis",
      "Communication"
    ]
  },
  {
    "id": 46,
    "title": "Backend Developer",
    "company": "Postman",
    "logo": "PM",
    "location": "Bangalore",
    "type": "Full-time",
    "mode": "Remote",
    "salary": "\u20b928 LPA",
    "experience": "4-7 years",
    "category": "Engineering",
    "tags": [
      "Node.js",
      "Go",
      "APIs"
    ],
    "posted": "6 days ago",
    "description": "Build the backend services that power the world's leading API platform.",
    "responsibilities": [
      "API development",
      "System scaling",
      "Code reviews"
    ],
    "skills": [
      "Node.js",
      "Go",
      "Redis",
      "AWS"
    ]
  },
  {
    "id": 47,
    "title": "Social Media Manager",
    "company": "Nykaa",
    "logo": "NY",
    "location": "Mumbai",
    "type": "Full-time",
    "mode": "On-site",
    "salary": "\u20b99 LPA",
    "experience": "2-4 years",
    "category": "Marketing",
    "tags": [
      "Instagram",
      "Content",
      "Engagement"
    ],
    "posted": "1 day ago",
    "description": "Manage Nykaa's social media presence and drive community engagement.",
    "responsibilities": [
      "Content creation",
      "Community management",
      "Analytics tracking"
    ],
    "skills": [
      "Social Media",
      "Copywriting",
      "Creative Thinking"
    ]
  },
  {
    "id": 48,
    "title": "Data Engineer",
    "company": "Flipkart",
    "logo": "FK",
    "location": "Bangalore",
    "type": "Full-time",
    "mode": "On-site",
    "salary": "\u20b922 LPA",
    "experience": "3-6 years",
    "category": "Data",
    "tags": [
      "Spark",
      "Hadoop",
      "Python"
    ],
    "posted": "3 days ago",
    "description": "Build and maintain large-scale data pipelines for our e-commerce platform.",
    "responsibilities": [
      "ETL development",
      "Data warehousing",
      "Pipeline monitoring"
    ],
    "skills": [
      "Spark",
      "Python",
      "SQL",
      "Airflow"
    ]
  },
  {
    "id": 49,
    "title": "Customer Success Manager",
    "company": "Zoho",
    "logo": "ZH",
    "location": "Chennai",
    "type": "Full-time",
    "mode": "On-site",
    "salary": "\u20b912 LPA",
    "experience": "3-5 years",
    "category": "Operations",
    "tags": [
      "SaaS",
      "Retention",
      "Support"
    ],
    "posted": "5 days ago",
    "description": "Ensure our customers get the most value out of Zoho's suite of products.",
    "responsibilities": [
      "Customer onboarding",
      "Relationship management",
      "Churn reduction"
    ],
    "skills": [
      "Communication",
      "Problem Solving",
      "SaaS"
    ]
  },
  {
    "id": 50,
    "title": "Mobile Lead",
    "company": "Ola Electric",
    "logo": "OE",
    "location": "Bangalore",
    "type": "Full-time",
    "mode": "On-site",
    "salary": "\u20b932 LPA",
    "experience": "6-10 years",
    "category": "Engineering",
    "tags": [
      "Flutter",
      "iOS",
      "Android"
    ],
    "posted": "1 week ago",
    "description": "Lead the mobile development team for our electric vehicle ecosystem.",
    "responsibilities": [
      "Technical leadership",
      "App architecture",
      "Team mentoring"
    ],
    "skills": [
      "Flutter",
      "Dart",
      "Mobile Architecture"
    ]
  },
  {
    "id": 51,
    "title": "Public Relations Manager",
    "company": "Tata Motors",
    "logo": "TM",
    "location": "Mumbai",
    "type": "Full-time",
    "mode": "On-site",
    "salary": "\u20b918 LPA",
    "experience": "5-8 years",
    "category": "Marketing",
    "tags": [
      "PR",
      "Media",
      "Communications"
    ],
    "posted": "2 days ago",
    "description": "Manage media relations and corporate communications for our automotive brand.",
    "responsibilities": [
      "Press releases",
      "Media outreach",
      "Crisis management"
    ],
    "skills": [
      "PR",
      "Communication",
      "Media Relations"
    ]
  },
  {
    "id": 52,
    "title": "Full Stack Engineer",
    "company": "Groww",
    "logo": "GR",
    "location": "Bangalore",
    "type": "Full-time",
    "mode": "Hybrid",
    "salary": "\u20b924 LPA",
    "experience": "3-6 years",
    "category": "Engineering",
    "tags": [
      "React",
      "Node.js",
      "Fintech"
    ],
    "posted": "4 days ago",
    "description": "Build the future of investing in India with our high-performance web platform.",
    "responsibilities": [
      "Full stack development",
      "Feature ownership",
      "Unit testing"
    ],
    "skills": [
      "React",
      "Node.js",
      "MongoDB",
      "Redis"
    ]
  },
  {
    "id": 53,
    "title": "Accountant",
    "company": "Wipro",
    "logo": "WP",
    "location": "Bangalore",
    "type": "Full-time",
    "mode": "On-site",
    "salary": "\u20b98 LPA",
    "experience": "2-4 years",
    "category": "Finance",
    "tags": [
      "Accounting",
      "Tally",
      "GST"
    ],
    "posted": "6 days ago",
    "description": "Manage day-to-day accounting tasks and ensure GST compliance.",
    "responsibilities": [
      "Bookkeeping",
      "Tax filing",
      "Financial reporting"
    ],
    "skills": [
      "Accounting",
      "Tally",
      "Excel"
    ]
  },
  {
    "id": 54,
    "title": "QA Automation Engineer",
    "company": "Razorpay",
    "logo": "RP",
    "location": "Bangalore",
    "type": "Full-time",
    "mode": "Hybrid",
    "salary": "\u20b916 LPA",
    "experience": "3-5 years",
    "category": "Engineering",
    "tags": [
      "Selenium",
      "Java",
      "Testing"
    ],
    "posted": "1 day ago",
    "description": "Automate testing for our payment gateway and financial products.",
    "responsibilities": [
      "Test automation",
      "Framework development",
      "Bug tracking"
    ],
    "skills": [
      "Selenium",
      "Java",
      "TestNG",
      "Jenkins"
    ]
  },
  {
    "id": 55,
    "title": "Graphic Designer",
    "company": "Swiggy",
    "logo": "SW",
    "location": "Bangalore",
    "type": "Full-time",
    "mode": "On-site",
    "salary": "\u20b97 LPA",
    "experience": "1-3 years",
    "category": "Design",
    "tags": [
      "Illustrator",
      "Photoshop",
      "Creative"
    ],
    "posted": "3 days ago",
    "description": "Create eye-catching visuals for Swiggy's marketing campaigns.",
    "responsibilities": [
      "Graphic design",
      "Social media assets",
      "Brand consistency"
    ],
    "skills": [
      "Illustrator",
      "Photoshop",
      "Creativity"
    ]
  },
  {
    "id": 56,
    "title": "DevOps Lead",
    "company": "CoinSwitch",
    "logo": "CS",
    "location": "Bangalore",
    "type": "Full-time",
    "mode": "Remote",
    "salary": "\u20b935 LPA",
    "experience": "7-10 years",
    "category": "Engineering",
    "tags": [
      "Kubernetes",
      "AWS",
      "CI/CD"
    ],
    "posted": "5 days ago",
    "description": "Lead the DevOps team and manage the infrastructure for our crypto platform.",
    "responsibilities": [
      "Infrastructure strategy",
      "Team leadership",
      "Security"
    ],
    "skills": [
      "Kubernetes",
      "AWS",
      "Terraform",
      "Python"
    ]
  },
  {
    "id": 57,
    "title": "Content Writer",
    "company": "HDFC Bank",
    "logo": "HD",
    "location": "Mumbai",
    "type": "Full-time",
    "mode": "On-site",
    "salary": "\u20b96 LPA",
    "experience": "1-3 years",
    "category": "Content",
    "tags": [
      "Finance",
      "Writing",
      "Blog"
    ],
    "posted": "1 week ago",
    "description": "Write engaging financial content for HDFC Bank's blog and newsletters.",
    "responsibilities": [
      "Article writing",
      "Content research",
      "Editing"
    ],
    "skills": [
      "Writing",
      "Finance Knowledge",
      "SEO"
    ]
  },
  {
    "id": 58,
    "title": "Product Analyst",
    "company": "Dream11",
    "logo": "D1",
    "location": "Mumbai",
    "type": "Full-time",
    "mode": "Hybrid",
    "salary": "\u20b914 LPA",
    "experience": "2-4 years",
    "category": "Product",
    "tags": [
      "Analytics",
      "SQL",
      "Product"
    ],
    "posted": "2 days ago",
    "description": "Analyze user behavior and product metrics to drive growth for Dream11.",
    "responsibilities": [
      "Data analysis",
      "A/B testing",
      "Reporting"
    ],
    "skills": [
      "SQL",
      "Python",
      "Tableau",
      "Analytics"
    ]
  },
  {
    "id": 59,
    "title": "Sales Executive",
    "company": "Zomato",
    "logo": "ZM",
    "location": "Gurgaon",
    "type": "Full-time",
    "mode": "On-site",
    "salary": "\u20b95 LPA",
    "experience": "0-2 years",
    "category": "Sales",
    "tags": [
      "Sales",
      "Field",
      "Merchant"
    ],
    "posted": "4 days ago",
    "description": "Onboard new restaurants and manage merchant relationships for Zomato.",
    "responsibilities": [
      "Merchant onboarding",
      "Relationship management",
      "Sales targets"
    ],
    "skills": [
      "Communication",
      "Sales",
      "Negotiation"
    ]
  },
  {
    "id": 60,
    "title": "ML Engineer",
    "company": "Ola Electric",
    "logo": "OE",
    "location": "Bangalore",
    "type": "Full-time",
    "mode": "On-site",
    "salary": "\u20b926 LPA",
    "experience": "3-6 years",
    "category": "Data",
    "tags": [
      "ML",
      "Computer Vision",
      "Python"
    ],
    "posted": "6 days ago",
    "description": "Develop computer vision models for our autonomous driving initiatives.",
    "responsibilities": [
      "Model training",
      "Data collection",
      "Deployment"
    ],
    "skills": [
      "Python",
      "PyTorch",
      "OpenCV",
      "ML"
    ]
  }
];
