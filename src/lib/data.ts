import { HiSparkles, HiLightningBolt, HiCursorClick } from "react-icons/hi";
import { IconType } from "react-icons";

// ==================== COMPANY LOGOS ====================
export const companyLogosData = {
  companies: [
    { name: "Outside", logo: "🏔️" },
    { name: "APEX", logo: "✦" },
    { name: "Celestial", logo: "✧" },
    { name: "2TWICE", logo: "◆" },
    { name: "Quantum", logo: "⬢" },
    { name: "Stellar", logo: "★" },
    { name: "Nexus", logo: "◈" },
    { name: "Zenith", logo: "◊" },
  ],
  config: {
    baseSpeed: 80, // px per second
    slowSpeed: 30, // px per second on hover
    heading: "Already chosen by these market leaders",
  },
};

// ==================== FEATURES ====================
export interface Feature {
  icon: IconType;
  title: string;
  description: string;
  color: string;
  iconBg: string;
}

export const featuresData = {
  heading: "Built for",
  highlightedHeading: "modern creators",
  subheading: "Everything you need to design, prototype, and collaborate.",
  features: [
    {
      icon: HiSparkles,
      title: "Real-time Collaboration",
      description:
        "Work seamlessly with your team. See changes as they happen.",
      color: "from-purple-500/20 to-pink-500/20",
      iconBg: "bg-purple-500/10",
    },
    {
      icon: HiLightningBolt,
      title: "Lightning Fast",
      description: "Optimized performance that keeps up with your creativity.",
      color: "from-yellow-500/20 to-orange-500/20",
      iconBg: "bg-yellow-500/10",
    },
    {
      icon: HiCursorClick,
      title: "Intuitive Interface",
      description:
        "Everything you need, nothing you don't. Simple and powerful.",
      color: "from-green-500/20 to-emerald-500/20",
      iconBg: "bg-green-500/10",
    },
  ] as Feature[],
};

// ==================== SHOWCASE ====================
export const showcaseData = {
  badge: {
    text: "★ TRUSTED WORLDWIDE",
  },
  heading: "Join the",
  highlightedHeading: "creative revolution",
  subheading:
    "Thousands of creators worldwide trust us with their design workflow.",
  items: [
    {
      value: "10M+",
      label: "Active Creators",
      description: "Designers and teams worldwide",
      gradient: "from-purple-500 to-pink-500",
      icon: "👥",
    },
    {
      value: "99.9%",
      label: "Uptime SLA",
      description: "Always available when you need it",
      gradient: "from-green-400 to-emerald-500",
      icon: "⚡",
    },
    {
      value: "5000+",
      label: "Companies",
      description: "From startups to enterprises",
      gradient: "from-blue-500 to-cyan-500",
      icon: "🏢",
    },
  ],
};

// ==================== TESTIMONIALS ====================
export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export const testimonialsData = {
  heading: "Loved by",
  highlightedHeading: "designers",
  subheading: "See what creative professionals are saying about Lumex",
  testimonials: [
    {
      name: "Sarah Chen",
      role: "Product Designer",
      company: "Stripe",
      content:
        "Lumex completely transformed how our team collaborates. The real-time features are incredible.",
      avatar: "SC",
      rating: 5,
    },
    {
      name: "Michael Torres",
      role: "Creative Director",
      company: "Netflix",
      content:
        "Best design tool I've used in 10 years. Fast, intuitive, and powerful.",
      avatar: "MT",
      rating: 5,
    },
    {
      name: "Emily Johnson",
      role: "UX Lead",
      company: "Airbnb",
      content:
        "The keyboard shortcuts alone save me hours every week. This is the future of design.",
      avatar: "EJ",
      rating: 5,
    },
  ] as Testimonial[],
};

// ==================== PRICING ====================
export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}

export const pricingData = {
  heading: "Simple,",
  highlightedHeading: "transparent pricing",
  subheading: "Choose the perfect plan for your needs",
  plans: [
    {
      name: "Starter",
      price: "0",
      description: "Perfect for trying out Lumex",
      features: [
        "3 projects",
        "Basic collaboration",
        "Community support",
        "5GB storage",
      ],
      cta: "Start Free",
      popular: false,
    },
    {
      name: "Pro",
      price: "12",
      description: "For professional designers",
      features: [
        "Unlimited projects",
        "Advanced collaboration",
        "Priority support",
        "100GB storage",
        "Version history",
        "Custom domains",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Team",
      price: "39",
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Unlimited team members",
        "Admin controls",
        "1TB storage",
        "SSO & SAML",
        "Dedicated support",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ] as PricingPlan[],
};

// ==================== CTA ====================
export const ctaData = {
  heading: "Ready to revolutionize your workflow?",
  highlightedHeading: "revolutionize",
  subheading:
    "Join thousands of designers who've already made the switch to Lumex.",
  primaryButton: {
    text: "Start Free Trial",
    href: "#",
  },
  secondaryButton: {
    text: "Schedule Demo",
    href: "#",
  },
  features: ["No credit card required", "14-day free trial", "Cancel anytime"],
};

// ==================== FOOTER ====================
export const footerData = {
  brand: {
    name: "Lumex",
    tagline: "The future of creative collaboration",
  },
  links: {
    product: {
      title: "Product",
      items: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Security", href: "#" },
        { label: "Roadmap", href: "#" },
      ],
    },
    company: {
      title: "Company",
      items: [
        { label: "About", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
      ],
    },
    resources: {
      title: "Resources",
      items: [
        { label: "Documentation", href: "#" },
        { label: "Help Center", href: "#" },
        { label: "Community", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
    legal: {
      title: "Legal",
      items: [
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" },
        { label: "Cookie Policy", href: "#" },
        { label: "Licenses", href: "#" },
      ],
    },
  },
  social: [
    { name: "Twitter", href: "#", icon: "𝕏" },
    { name: "GitHub", href: "#", icon: "GitHub" },
    { name: "LinkedIn", href: "#", icon: "in" },
    { name: "Discord", href: "#", icon: "Discord" },
  ],
  copyright: "© 2025 Lumex. All rights reserved.",
};

// ==================== NAVBAR ====================
export const navbarData = {
  brand: "Lumex",
  navLinks: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  cta: {
    text: "Get Started",
    href: "#",
  },
};

// ==================== HERO ====================
export const heroData = {
  badge: {
    text: "Introducing Lumex",
  },
  heading: {
    main: "Design tools that",
    highlighted: "don't slow you down",
  },
  buttons: {
    primary: {
      text: "Get Started Free",
      href: "#",
    },
    secondary: {
      text: "Watch Demo",
      href: "#",
    },
  },
  stats: [
    { value: "10", suffix: "M+", label: "Active Users" },
    { value: "98", suffix: "%", label: "Uptime" },
    { value: "5000", suffix: "+", label: "Teams" },
    { value: "150", suffix: "+", label: "Countries" },
  ],
};

// ==================== INTEGRATIONS ====================
export const integrationsData = {
  badge: {
    text: "✦ INTEGRATIONS",
  },
  heading: "Plays well with",
  highlightedHeading: "others",
  subheading:
    "Layers seamlessly connects with your favorite tools, making it easy to plug into any workflow.",
  integrationsLeft: [
    {
      name: "Figma",
      icon: "🎨",
      description: "Figma is a collaborative interface design tool.",
    },
    {
      name: "Notion",
      icon: "📝",
      description: "Notion is an all-in-one workspace for notes and docs.",
    },
    {
      name: "Slack",
      icon: "💬",
      description: "Slack is a powerful team communication platform.",
    },
    {
      name: "GitHub",
      icon: "🐙",
      description: "GitHub is the leading platform for code collaboration.",
    },
  ],
  integrationsRight: [
    {
      name: "Linear",
      icon: "📊",
      description: "Linear is the issue tracking tool teams love to use.",
    },
    {
      name: "Dropbox",
      icon: "📦",
      description: "Dropbox keeps your files safe and accessible.",
    },
    {
      name: "Zoom",
      icon: "🎥",
      description: "Zoom connects teams with video conferencing.",
    },
    {
      name: "Trello",
      icon: "📋",
      description: "Trello organizes your projects into boards.",
    },
  ],
  config: {
    cardHeight: 200,
    speed: 40, // px per second
  },
};
