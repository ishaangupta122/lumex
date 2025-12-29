import { HiSparkles, HiLightningBolt, HiCursorClick } from "react-icons/hi";
import { IconType } from "react-icons";

// ==================== COMPANY LOGOS ====================
export const companyLogosData = {
  companies: [
    {
      name: "Figma",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
      showName: true,
      smaller: true,
    },
    {
      name: "Dribbble",
      logo: "dribble.png",
      showName: true,
    },
    {
      name: "Framer",
      logo: "/framer.svg",
      showName: true,
      smaller: true,
    },
    {
      name: "Flux",
      logo: "https://img.icons8.com/color/96/lightning-bolt--v1.png",
      showName: true,
    },
    {
      name: "Material UI",
      logo: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg",
      showName: true,
      smaller: true,
    },
    {
      name: "Webflow",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29 19' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M28.8562 0.5L19.6486 18.5H11L14.8534 11.04H14.6805C11.5015 15.1668 6.7583 17.8835 0 18.5V11.1433C0 11.1433 4.32345 10.8879 6.86508 8.21575H0V0.500142H7.71561V6.84612L7.88878 6.84541L11.0417 0.500142H16.8768V6.80588L17.0499 6.8056L20.3211 0.5H28.8562Z' fill='%23146EF5'/%3E%3C/svg%3E",
      showName: true,
      smaller: true,
    },
    {
      name: "Canva",
      logo: "canva.svg",
      showName: false,
      smaller: true,
    },
    {
      name: "Sketch",
      logo: "https://cdn.worldvectorlogo.com/logos/sketch-2.svg",
      showName: true,
      smaller: true,
    },
  ],
  config: {
    baseSpeed: 90,
    slowSpeed: 30,
    heading: "Where design",
    highlightedHeading: "comes together",
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
  subheading:
    "Everything you need to design, prototype, and collaborate seamlessly.",
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
      value: "98%",
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
  subheading: "See what creative professionals are saying about Fluxion",
  testimonials: [
    {
      name: "Sarah Chen",
      role: "Product Designer",
      company: "Stripe",
      content:
        "Fluxion completely transformed how our team collaborates. The real-time features are incredible.",
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
      description: "Perfect for trying out Fluxion",
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
    "Join thousands of designers who've already made the switch to Fluxion.",
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
    name: "Fluxion",
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
  copyright: "© 2025 Fluxion. All rights reserved.",
};

// ==================== NAVBAR ====================
export const navbarData = {
  brand: "Fluxion",
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
    text: "Introducing Fluxion",
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
    text: "✦ ECOSYSTEM",
  },
  heading: "Your entire workflow,",
  highlightedHeading: "unified",
  subheading:
    "Fluxion bridges the gap between your favorite tools, transforming isolated apps into a connected ecosystem that amplifies your productivity.",
  integrationsLeft: [
    {
      name: "Figma",
      logo: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg",
      description:
        "Sync designs instantly and maintain a single source of truth.",
    },
    {
      name: "Slack",
      logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
      description:
        "Get real-time notifications and collaborate without context switching.",
    },
    {
      name: "Adobe XD",
      logo: "https://cdn.worldvectorlogo.com/logos/adobe-xd-1.svg",
      description: "Import assets directly from Creative Cloud applications.",
    },
    {
      name: "Notion",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
      description:
        "Turn project insights into living documentation automatically.",
    },
    {
      name: "Zoom",
      logo: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/zoom-icon.svg",
      description:
        "Present designs live and gather feedback in real-time meetings.",
    },
  ],
  integrationsRight: [
    {
      name: "GitHub",
      logo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
      description:
        "Bridge design and development with seamless version control.",
    },
    {
      name: "Dropbox",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 235.45 200'%3E%3Cpolygon fill='%230061FF' points='58.86 0 0 37.5 58.86 75 117.73 37.5 58.86 0'/%3E%3Cpolygon fill='%230061FF' points='176.59 0 117.73 37.5 176.59 75 235.45 37.5 176.59 0'/%3E%3Cpolygon fill='%230061FF' points='0 112.5 58.86 150 117.73 112.5 58.86 75 0 112.5'/%3E%3Cpolygon fill='%230061FF' points='176.59 75 117.73 112.5 176.59 150 235.45 112.5 176.59 75'/%3E%3Cpolygon fill='%230061FF' points='58.86 162.5 117.73 200 176.59 162.5 117.73 125 58.86 162.5'/%3E%3C/svg%3E",
      description: "Access and share assets instantly from your cloud storage.",
    },
    {
      name: "Asana",
      logo: "https://cdn.worldvectorlogo.com/logos/asana-logo.svg",
      description:
        "Manage design projects and tasks with seamless integration.",
    },
    {
      name: "Miro",
      logo: "https://cdn.worldvectorlogo.com/logos/miro-2.svg",
      description:
        "Collaborate visually with infinite canvas and whiteboarding.",
    },
    {
      name: "Linear",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' width='200' height='200' viewBox='0 0 100 100'%3E%3Cpath fill='%23222326' d='M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z'/%3E%3C/svg%3E",
      description:
        "Track issues and manage sprints with lightning-fast workflows.",
    },
  ],
  config: {
    cardHeight: 200,
    speed: 40,
  },
};
