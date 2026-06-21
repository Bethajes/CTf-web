import { Activity, ChartBar as BarChart3, Bot, BrainCircuit, Building2, CircleCheck as CheckCircle2, ChevronRight, CloudCog, Code as Code2, Cpu, Database, Factory, FileCheck, Fingerprint, FlaskConical, GraduationCap, HeartPulse, Landmark, Layers as Layers3, Library, ChartLine as LineChart, LockKeyhole, Monitor, Network, Rocket, School, ShieldCheck, ShoppingBag, Smartphone, Sparkles, Truck, UsersRound, Wallet } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Activity,
  BarChart3,
  Bot,
  BrainCircuit,
  Building2,
  CheckCircle2,
  ChevronRight,
  CloudCog,
  Code2,
  Cpu,
  Database,
  Factory,
  FileCheck,
  Fingerprint,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  Landmark,
  Layers3,
  Library,
  LineChart,
  LockKeyhole,
  Monitor,
  Network,
  Rocket,
  School,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Truck,
  UsersRound,
  Wallet,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] || CheckCircle2;
}

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Industries", href: "/#industries" },
  { label: "Technologies", href: "/#technologies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    title: "Enterprise Software Development",
    icon: "Building2",
    items: [
      "Business platforms",
      "Workflow automation",
      "System integrations",
      "Legacy modernization",
    ],
  },
  {
    title: "Web Applications",
    icon: "Code2",
    items: [
      "SaaS products",
      "Customer portals",
      "Internal tools",
      "Progressive web apps",
    ],
  },
  {
    title: "Mobile Applications",
    icon: "Smartphone",
    items: [
      "iOS and Android",
      "Cross-platform apps",
      "Realtime experiences",
      "Offline-first design",
    ],
  },
  {
    title: "AI Solutions",
    icon: "BrainCircuit",
    items: [
      "AI assistants",
      "Automation engines",
      "Predictive systems",
      "Natural language processing",
    ],
  },
  {
    title: "Cloud and DevOps",
    icon: "CloudCog",
    items: [
      "Cloud architecture",
      "CI/CD pipelines",
      "Infrastructure scaling",
      "Container orchestration",
    ],
  },
  {
    title: "Business Intelligence",
    icon: "BarChart3",
    items: [
      "Executive dashboards",
      "BI platforms",
      "Data pipelines",
      "Real-time analytics",
    ],
  },
  {
    title: "Cybersecurity",
    icon: "LockKeyhole",
    items: [
      "Secure architecture",
      "Access control",
      "Threat hardening",
      "Compliance frameworks",
    ],
  },
  {
    title: "Educational Technology",
    icon: "GraduationCap",
    items: [
      "Campus systems",
      "Learning platforms",
      "Student portals",
      "Digital transformation",
    ],
  },
  {
    title: "Digital Transformation Consulting",
    icon: "Rocket",
    items: [
      "Strategy workshops",
      "Process re-engineering",
      "Technology roadmaps",
      "Change management",
    ],
  },
  {
    title: "Custom Software Development",
    icon: "Layers3",
    items: [
      "Product strategy",
      "Dedicated teams",
      "Long-term support",
      "Iterative delivery",
    ],
  },
];

export const industries = [
  {
    title: "Education",
    icon: "GraduationCap",
    description:
      "Student portals, campus management, digital clearance, and learning platforms.",
    solutions: ["University Management", "E-Learning", "Student Portals"],
  },
  {
    title: "Healthcare",
    icon: "HeartPulse",
    description:
      "Patient management, telemedicine, health records, and compliance systems.",
    solutions: ["Patient Records", "Telemedicine", "Analytics"],
  },
  {
    title: "Finance",
    icon: "Landmark",
    description:
      "Banking platforms, payment systems, risk analytics, and regulatory tools.",
    solutions: ["Banking Systems", "Payment Gateways", "Risk Tools"],
  },
  {
    title: "Government",
    icon: "Factory",
    description:
      "Public service portals, permit systems, and secure inter-agency platforms.",
    solutions: ["Public Portals", "Permit Systems", "Secure Comms"],
  },
  {
    title: "Retail",
    icon: "ShoppingBag",
    description:
      "E-commerce, inventory management, POS integrations, and customer analytics.",
    solutions: ["E-commerce", "POS Systems", "Inventory"],
  },
  {
    title: "Logistics",
    icon: "Truck",
    description:
      "Fleet tracking, warehouse management, route optimization, and supply chain.",
    solutions: ["Fleet Tracking", "Warehousing", "Route Optimization"],
  },
  {
    title: "Startups",
    icon: "Rocket",
    description:
      "MVP development, rapid scaling, product strategy, and investor-ready platforms.",
    solutions: ["MVP Builds", "Growth Scaling", "Investor Decks"],
  },
  {
    title: "Large Enterprises",
    icon: "Building2",
    description:
      "ERP systems, enterprise integrations, and multi-department platforms.",
    solutions: ["ERP Systems", "Integrations", "Analytics"],
  },
];

export const processSteps = [
  {
    title: "Discovery",
    description:
      "Clarify goals, users, workflows, risks, and the business outcome behind the software.",
  },
  {
    title: "Strategy",
    description:
      "Define product vision, technology choices, team structure, and delivery milestones.",
  },
  {
    title: "Design",
    description:
      "Shape architecture, UX, product flows, data models, and delivery milestones.",
  },
  {
    title: "Development",
    description:
      "Build secure, maintainable products with modern engineering practices and fast iteration.",
  },
  {
    title: "Testing",
    description:
      "Validate performance, accessibility, usability, security, and business-critical behavior.",
  },
  {
    title: "Deployment",
    description:
      "Launch with CI/CD, observability, cloud infrastructure, and controlled rollout plans.",
  },
  {
    title: "Support",
    description:
      "Improve the platform continuously with monitoring, enhancements, and long-term care.",
  },
];

export const techStack = [
  { label: "React", category: "Frontend" },
  { label: "Next.js", category: "Frontend" },
  { label: "TypeScript", category: "Frontend" },
  { label: "Node.js", category: "Backend" },
  { label: "FastAPI", category: "Backend" },
  { label: "Python", category: "Backend" },
  { label: "PostgreSQL", category: "Databases" },
  { label: "MongoDB", category: "Databases" },
  { label: "Redis", category: "Databases" },
  { label: "AWS", category: "Cloud" },
  { label: "Azure", category: "Cloud" },
  { label: "Docker", category: "Cloud" },
  { label: "Kubernetes", category: "Cloud" },
  { label: "OpenAI APIs", category: "AI" },
  { label: "TensorFlow", category: "AI" },
  { label: "PyTorch", category: "AI" },
  { label: "LangChain", category: "AI" },
];

export const reasons = [
  {
    title: "Secure",
    icon: "ShieldCheck",
    text: "Security-first architecture, role-based access, audit trails, and deployment discipline.",
  },
  {
    title: "Scalable",
    icon: "Network",
    text: "Systems designed for growth, modularity, integration, and high-volume operations.",
  },
  {
    title: "AI-powered",
    icon: "Bot",
    text: "Intelligent automation, copilots, analytics, and agent-ready product experiences.",
  },
  {
    title: "Modern architecture",
    icon: "Database",
    text: "Cloud-native platforms with clean APIs, resilient data models, and observable services.",
  },
  {
    title: "Fast delivery",
    icon: "Activity",
    text: "Senior product execution that moves from strategy to production without unnecessary drag.",
  },
];

export const testimonials = [
  {
    quote:
      "CTF translated a complex operational challenge into a clean platform our teams could actually adopt. The engineering quality felt enterprise from day one.",
    name: "Maya Chen",
    role: "Chief Operations Officer, Northstar Group",
  },
  {
    quote:
      "Their team moves with unusual clarity. We got product strategy, architecture, AI integration, and deployment execution in one partner.",
    name: "Daniel Okafor",
    role: "Founder, HelioPay",
  },
  {
    quote:
      "Atlas Portal started as an education workflow project and became the backbone of our digital transformation roadmap.",
    name: "Dr. Selam Tesfaye",
    role: "Executive Director, Meridian College",
  },
];

export const metrics = [
  { value: "3,000+", label: "People Served Daily" },
  { value: "99.97%", label: "System Availability" },
  { value: "14", label: "Enterprise Solutions" },
  { value: "100%", label: "Client Satisfaction" },
];

export const clientLogos = ["NOVA", "ORBIT", "AXIOM", "MERIDIAN", "HELIO", "QUANTUM"];

export const heroStats = [
  { label: "Systems shipped", value: "14" },
  { label: "Automations live", value: "180+" },
  { label: "Data events/day", value: "2.4M" },
];

export const moduleDetails = services.map((service) => ({
  title: service.title,
  icon: service.icon,
  benefit: service.items.join(", "),
}));

export const features = services;
export const gallery = ["Atlas Portal", "Atlas ERP", "Atlas CRM", "Atlas Analytics", "Atlas AI"];
export const painPoints = reasons.map((reason) => ({ title: reason.title, icon: reason.icon }));

export const faqs = [
  {
    question: "What does CTF build?",
    answer:
      "Create Future Technologies builds enterprise software, SaaS platforms, AI solutions, cloud systems, data products, and digital transformation platforms across industries.",
  },
  {
    question: "Is Atlas Portal the only product?",
    answer:
      "No. Atlas Portal is one product in the Atlas portfolio, alongside Atlas ERP, Atlas CRM, Atlas Analytics, and Atlas AI.",
  },
  {
    question: "Can CTF work with existing systems?",
    answer:
      "Yes. CTF designs API-first integrations, migration plans, and modernization paths for companies with existing tools and legacy systems.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. CTF provides deployment support, monitoring, maintenance, product improvements, and long-term engineering partnership.",
  },
];

export const qualitySignals = [
  { label: "Production engineering", icon: "CheckCircle2" },
  { label: "AI-native roadmaps", icon: "Sparkles" },
  { label: "Executive visibility", icon: "LineChart" },
];

export type PortfolioProject = {
  title: string;
  description: string;
  image?: string[];
  features: string[];
  benefits: string[];
  badge?: string;
  icon: string;
};

export const featuredProjects: PortfolioProject[] = [
  {
    title: "AASTU Digital Clearance Management System",
    description:
      "A web-based platform that digitizes the student clearance process across multiple departments.",
    image: ["/images/c1.png", "/images/c2.png", "/images/c3.png", "/images/c4.png"],
    features: [
      "Multi-department approval workflow",
      "Student self-service portal",
      "Real-time clearance tracking",
      "Automated notifications",
      "Administrative reporting",
      "Digital record management",
      "Reduced paperwork",
    ],
    benefits: [
      "Faster graduation process",
      "Increased transparency",
      "Reduced administrative workload",
      "Paperless operations",
    ],
    badge: "Operational",
    icon: "FileCheck",
  },
  {
    title: "AASTU Laptop Security and Asset Management System",
    description:
      "A centralized platform for managing university-issued laptops and technology assets.",
    image: ["/images/l1.png", "/images/l3.png", "/images/lap2.png", "/images/l4.png"],
    features: [
      "Asset registration",
      "Assignment tracking",
      "Check-in/check-out workflows",
      "Maintenance tracking",
      "Audit logs",
      "Lost device reporting",
      "Analytics dashboards",
    ],
    benefits: [
      "Prevents asset loss",
      "Increases accountability",
      "Simplifies inventory management",
      "Improves utilization",
    ],
    badge: "Operational",
    icon: "Fingerprint",
  },
  {
    title: "University Management System",
    description:
      "An end-to-end platform managing the complete academic and administrative lifecycle of a college.",
    image: ["/images/u1.png", "/images/u3.png", "/images/u2.png", "/images/u4.png"],
    features: [
      "Admissions",
      "Student Information System",
      "Academic Management",
      "Finance and Billing",
      "Student Portal",
      "Faculty Portal",
      "Reporting and Analytics",
      "Communication System",
      "Document Management",
      "Security and Audit Logs",
    ],
    benefits: [
      "Complete digital transformation",
      "Reduced operational costs",
      "Improved student experience",
      "Better decision-making",
    ],
    badge: "Flagship Product",
    icon: "School",
  },
];

export type SolutionCard = {
  title: string;
  description: string;
  features: string[];
  icon: string;
  status: string;
};

export const additionalSolutions: SolutionCard[] = [
  {
    title: "Smart Attendance",
    description: "Biometric and digital attendance tracking.",
    features: ["Biometric", "Reports", "Notifications"],
    icon: "Fingerprint",
    status: "In Development",
  },
  {
    title: "Online Admission",
    description: "Admission portal with online examinations.",
    features: ["Applications", "Exams", "Auto-grading"],
    icon: "FileCheck",
    status: "In Development",
  },
  {
    title: "Alumni Network",
    description: "Engage alumni and manage donations.",
    features: ["Directory", "Events", "Donations"],
    icon: "UsersRound",
    status: "In Development",
  },
  {
    title: "Library System",
    description: "Digital catalog and lending workflows.",
    features: ["Catalog", "Lending", "Analytics"],
    icon: "Library",
    status: "In Development",
  },
  {
    title: "Hostel Management",
    description: "Room allocation and billing.",
    features: ["Rooms", "Maintenance", "Billing"],
    icon: "Building2",
    status: "In Development",
  },
];

export const timeline = [
  {
    year: "2025",
    title: "AASTU Digital Clearance Management System",
    description: "Digitized the student clearance process across all university departments.",
    icon: "FileCheck",
  },
  {
    year: "2025",
    title: "AASTU Laptop Security and Asset Management System",
    description: "Centralized tracking and security for university technology assets.",
    icon: "Fingerprint",
  },
  {
    year: "2026",
    title: "University Management System Platform",
    description: "Flagship end-to-end academic and administrative lifecycle platform.",
    icon: "School",
  },
  {
    year: "2026+",
    title: "Smart Campus Digital Transformation Solutions",
    description: "Expanding into AI-powered campus intelligence and IoT integrations.",
    icon: "Cpu",
  },
];

export const expertiseAreas = [
  {
    title: "Educational Workflows",
    icon: "GraduationCap",
    description: "Deep understanding of academic processes, student lifecycles, and campus operations.",
  },
  {
    title: "Large-Scale Database Systems",
    icon: "Database",
    description: "Designing high-performance data architectures that handle millions of records.",
  },
  {
    title: "Security & Access Control",
    icon: "LockKeyhole",
    description: "Role-based access, audit trails, encryption, and compliance-ready security.",
  },
  {
    title: "Workflow Automation",
    icon: "Bot",
    description: "Automating approvals, notifications, and repetitive administrative tasks.",
  },
  {
    title: "Asset Management",
    icon: "Fingerprint",
    description: "Tracking, securing, and optimizing technology and physical assets.",
  },
  {
    title: "Reporting & Analytics",
    icon: "BarChart3",
    description: "Transforming raw data into actionable insights for decision-makers.",
  },
  {
    title: "User Experience Design",
    icon: "UsersRound",
    description: "Crafting intuitive interfaces that reduce training time and increase adoption.",
  },
  {
    title: "Scalable Cloud Architecture",
    icon: "CloudCog",
    description: "Building resilient, auto-scaling infrastructure on AWS, Azure, and Kubernetes.",
  },
];
