import {
  Activity,
  BarChart3,
  Bot,
  BrainCircuit,
  Building2,
  CheckCircle2,
  CloudCog,
  Code2,
  Database,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  Layers3,
  LineChart,
  LockKeyhole,
  LucideIcon,
  Network,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Truck,
  UsersRound,
} from "lucide-react";

export type IconItem = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

export const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Products", href: "/#products" },
  { label: "Industries", href: "/#industries" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/contact" },
];

export const services: IconItem[] = [
  {
    title: "Enterprise Software Development",
    icon: Building2,
    items: ["Business platforms", "Workflow automation", "System integrations"],
  },
  {
    title: "Web Applications",
    icon: Code2,
    items: ["SaaS products", "Customer portals", "Internal tools"],
  },
  {
    title: "Mobile Applications",
    icon: Smartphone,
    items: ["iOS and Android", "Cross-platform apps", "Realtime experiences"],
  },
  {
    title: "AI Solutions",
    icon: BrainCircuit,
    items: ["AI assistants", "Automation engines", "Predictive systems"],
  },
  {
    title: "Cloud and DevOps",
    icon: CloudCog,
    items: ["Cloud architecture", "CI/CD pipelines", "Infrastructure scaling"],
  },
  {
    title: "Data Analytics",
    icon: BarChart3,
    items: ["Executive dashboards", "BI platforms", "Data pipelines"],
  },
  {
    title: "Cybersecurity",
    icon: LockKeyhole,
    items: ["Secure architecture", "Access control", "Threat hardening"],
  },
  {
    title: "Educational Technology",
    icon: GraduationCap,
    items: ["Campus systems", "Learning platforms", "Student portals"],
  },
  {
    title: "Custom Software Development",
    icon: Layers3,
    items: ["Product strategy", "Dedicated teams", "Long-term support"],
  },
];

export const products = [
  {
    name: "Atlas Portal",
    description: "A complete digital operating system for academic institutions, student services, and campus administration.",
    signal: "Education OS",
  },
  {
    name: "Atlas ERP",
    description: "Enterprise resource planning for finance, operations, inventory, HR, approvals, and reporting.",
    signal: "Operations Core",
  },
  {
    name: "Atlas CRM",
    description: "Customer lifecycle management for sales teams, support teams, pipelines, and relationship intelligence.",
    signal: "Revenue Engine",
  },
  {
    name: "Atlas Analytics",
    description: "Realtime business intelligence dashboards that turn operational data into executive decisions.",
    signal: "Decision Layer",
  },
  {
    name: "Atlas AI",
    description: "AI copilots and automation systems that help teams analyze, respond, and execute faster.",
    signal: "AI Platform",
  },
];

export const industries = [
  { title: "Education", icon: GraduationCap },
  { title: "Healthcare", icon: HeartPulse },
  { title: "Finance", icon: Landmark },
  { title: "Retail", icon: ShoppingBag },
  { title: "Government", icon: Factory },
  { title: "Logistics", icon: Truck },
  { title: "Startups", icon: Rocket },
];

export const processSteps = [
  {
    title: "Discovery",
    description: "Clarify goals, users, workflows, risks, and the business outcome behind the software.",
  },
  {
    title: "Design",
    description: "Shape architecture, UX, product flows, data models, and delivery milestones.",
  },
  {
    title: "Development",
    description: "Build secure, maintainable products with modern engineering practices and fast iteration.",
  },
  {
    title: "Testing",
    description: "Validate performance, accessibility, usability, security, and business-critical behavior.",
  },
  {
    title: "Deployment",
    description: "Launch with CI/CD, observability, cloud infrastructure, and controlled rollout plans.",
  },
  {
    title: "Support",
    description: "Improve the platform continuously with monitoring, enhancements, and long-term care.",
  },
];

export const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "FastAPI",
  "PostgreSQL",
  "Docker",
  "AWS",
  "AI technologies",
];

export const reasons = [
  { title: "Secure", icon: ShieldCheck, text: "Security-first architecture, role-based access, audit trails, and deployment discipline." },
  { title: "Scalable", icon: Network, text: "Systems designed for growth, modularity, integration, and high-volume operations." },
  { title: "AI-powered", icon: Bot, text: "Intelligent automation, copilots, analytics, and agent-ready product experiences." },
  { title: "Modern architecture", icon: Database, text: "Cloud-native platforms with clean APIs, resilient data models, and observable services." },
  { title: "Fast delivery", icon: Activity, text: "Senior product execution that moves from strategy to production without unnecessary drag." },
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
  { value: "99.9%", label: "availability targets" },
  { value: "5+", label: "product lines" },
  { value: "24/7", label: "monitoring ready" },
  { value: "10x", label: "automation ambition" },
];

export const clientLogos = ["NOVA", "ORBIT", "AXIOM", "MERIDIAN", "HELIO", "QUANTUM"];

export const heroStats = [
  { label: "Systems shipped", value: "42" },
  { label: "Automations live", value: "180+" },
  { label: "Data events/day", value: "2.4M" },
];

export const moduleDetails = services.map((service) => ({
  title: service.title,
  icon: service.icon,
  benefit: service.items.join(", "),
}));

export const features = services;
export const gallery = products.map((product) => product.name);
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
  { label: "Production engineering", icon: CheckCircle2 },
  { label: "AI-native roadmaps", icon: Sparkles },
  { label: "Executive visibility", icon: LineChart },
];
