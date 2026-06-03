/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ColorPalette, FontConfig, WebsiteData, SectionBlock, SectionType } from './types';

export const FONTS: FontConfig[] = [
  {
    id: 'minimalist',
    name: 'Inter + Playfair Display',
    importUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,500;0,700;1,400&display=swap',
    familySans: 'var(--font-sans)',
    familyDisplay: '"Playfair Display", serif',
  },
  {
    id: 'saas',
    name: 'Outfit + Inter',
    importUrl: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Inter:wght@400;500&display=swap',
    familySans: 'var(--font-sans)',
    familyDisplay: '"Outfit", sans-serif',
  },
  {
    id: 'brutalist',
    name: 'Space Grotesk + JetBrains Mono',
    importUrl: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap',
    familySans: 'var(--font-mono)',
    familyDisplay: '"Space Grotesk", sans-serif',
  },
  {
    id: 'editorial',
    name: 'Lora + Merriweather',
    importUrl: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Merriweather:wght@300;400;700&display=swap',
    familySans: '"Lora", serif',
    familyDisplay: '"Merriweather", serif',
  }
];

export const PALETTES: ColorPalette[] = [
  {
    id: 'cosmic',
    name: 'Ink & Nebula (Dark)',
    bgMain: 'bg-[#0f111a]',
    bgCard: 'bg-[#151926]',
    textMain: 'text-slate-100',
    textMuted: 'text-slate-400',
    primary: 'bg-violet-600 hover:bg-violet-700 text-white',
    secondary: 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700',
    border: 'border-slate-800',
    accent: 'text-violet-400',
  },
  {
    id: 'nordic',
    name: 'Frost & Chalk (Light)',
    bgMain: 'bg-[#f4f6f8]',
    bgCard: 'bg-white',
    textMain: 'text-slate-900',
    textMuted: 'text-slate-500',
    primary: 'bg-slate-900 hover:bg-slate-800 text-white',
    secondary: 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-none',
    border: 'border-slate-200/80',
    accent: 'text-emerald-600',
  },
  {
    id: 'amber-editorial',
    name: 'Warm Parchment (Editorial)',
    bgMain: 'bg-[#fbf9f4]',
    bgCard: 'bg-white border border-[#eae6de]',
    textMain: 'text-[#1c1a17]',
    textMuted: 'text-[#6e685e]',
    primary: 'bg-[#403b30] hover:bg-[#2d2921] text-white',
    secondary: 'bg-[#f3edd3] hover:bg-[#eae1bf] text-[#403b30] border-none',
    border: 'border-[#eae6de]',
    accent: 'text-[#a3704c]',
  },
  {
    id: 'brutal-cyan',
    name: 'Neo-Volt (High Contrast)',
    bgMain: 'bg-[#fafafa]',
    bgCard: 'bg-white border-2 border-black shadow-[4px_4px_0px_#000]',
    textMain: 'text-black',
    textMuted: 'text-zinc-600',
    primary: 'bg-cyan-300 hover:bg-cyan-400 text-black border-2 border-black font-semibold',
    secondary: 'bg-white hover:bg-zinc-100 text-black border-2 border-black font-semibold',
    border: 'border-black',
    accent: 'text-pink-500',
  },
  {
    id: 'classic-dark',
    name: 'Bespoke Charcoal (Sleek)',
    bgMain: 'bg-[#09090b]',
    bgCard: 'bg-[#121214]',
    textMain: 'text-neutral-50',
    textMuted: 'text-neutral-400',
    primary: 'bg-white hover:bg-neutral-200 text-neutral-950',
    secondary: 'bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800',
    border: 'border-neutral-800',
    accent: 'text-amber-400',
  }
];

export const PRESET_WEBSITES: { [key: string]: WebsiteData } = {
  saas: {
    title: 'SaaS Platform Template',
    themeStyle: 'saas',
    paletteId: 'cosmic',
    blocks: [
      {
        id: 'nav-1',
        type: 'navbar',
        layoutId: 'navbar-simple',
        logoText: 'ScaleFlow',
        links: [
          { id: 'nl-1', label: 'Features', url: '#features' },
          { id: 'nl-2', label: 'Wall of Love', url: '#testimonials' },
          { id: 'nl-3', label: 'Pricing', url: '#pricing' },
        ],
        primaryCta: 'Start Free Trial',
      },
      {
        id: 'hero-1',
        type: 'hero',
        layoutId: 'hero-bold',
        badge: 'NEW: Automate workflows 10x faster',
        title: 'Accelerate your cloud operations with intelligence',
        subtitle: 'ScaleFlow acts as a fully managed developer command line, syncing environment configurations, container health, and production parameters instantly.',
        primaryCta: 'Start deployment now',
        secondaryCta: 'Schedule architecture review',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
      },
      {
        id: 'feat-1',
        type: 'features',
        layoutId: 'features-grid',
        badge: 'CAPABILITIES',
        title: 'Formidable dev infrastructure, simplified',
        subtitle: 'Everything you need to launch, scale, and secure complex serverless platforms without the infrastructure overhead.',
        items: [
          {
            id: 'fi-1',
            title: 'Dynamic Configuration Syncer',
            description: 'Synchronize environment files in real-time across regional edge services securely.',
            icon: 'Cpu',
          },
          {
            id: 'fi-2',
            title: 'Edge Performance Insights',
            description: 'Monitor latencies, cold-start bottlenecks, and request curves inside responsive graphs.',
            icon: 'Activity',
          },
          {
            id: 'fi-3',
            title: 'Automated Failover Systems',
            description: 'We automatically reroute network flows the millisecond a cluster encounters system instability.',
            icon: 'Shield',
          },
        ],
      },
      {
        id: 'test-1',
        type: 'testimonials',
        layoutId: 'testimonials-grid',
        badge: 'TESTIMONIALS',
        title: 'Vetted by world-class software developers',
        subtitle: 'See what engineering leaders and technical staff say about their visual setup and speed improvements.',
        items: [
          {
            id: 'ti-1',
            title: 'Amelia Chen',
            role: 'VP of Platform, NeonLab',
            description: 'Switching our cloud configuration manager to ScaleFlow saved our engineering group 18 hours per developer every single month.',
            avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
          },
          {
            id: 'ti-2',
            title: 'Marcus Thorne',
            role: 'DevOps Architect, CloudNative Group',
            description: 'The automated container health routing is completely bulletproof. We went through three regional outages without dropping a singular frame.',
            avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
          },
        ],
      },
      {
        id: 'price-1',
        type: 'pricing',
        layoutId: 'pricing-tiers',
        badge: 'HONEST PRICING',
        title: 'A tier for every workload scale',
        subtitle: 'Zero setup fees, no contractual lock-ins. Upgrade or downgrade your plan instantly within the panel.',
        items: [
          {
            id: 'pi-1',
            title: 'Developer Core',
            price: '$19',
            period: 'per month',
            description: 'Perfect for small teams, hobby products, and launching lightweight landing setups.',
            features: ['Up to 5 synced microservices', 'Global Edge CDN standard', 'Basic terminal analytics', '1-hour support queue'],
            isPopular: false,
          },
          {
            id: 'pi-2',
            title: 'Scale Pro',
            price: '$79',
            period: 'per month',
            description: 'Our most popular plan, fit for high production scale, active load balancers, and teams.',
            features: ['Unlimited microservice syncs', 'Multipath regional failovers', 'Advanced live telemetry', '24/7 designated Slack support', 'SSO/SAML integration'],
            isPopular: true,
          },
        ],
      },
      {
        id: 'contact-1',
        type: 'contact',
        layoutId: 'contact-split',
        title: 'Optimize your cloud today',
        subtitle: 'Get in touch with an infrastructure consultant to map out high-fidelity architecture diagrams.',
        contactEmail: 'consulting@scaleflow.io',
        contactAddress: '784 Tech Plaza, Suite 400, San Francisco CA',
        primaryCta: 'Submit Consultation Request',
      },
      {
        id: 'foot-1',
        type: 'footer',
        layoutId: 'footer-simple',
        logoText: 'ScaleFlow',
        links: [
          { id: 'fl-1', label: 'Privacy Policy', url: '#' },
          { id: 'fl-2', label: 'API Reference', url: '#' },
          { id: 'fl-3', label: 'Changelog', url: '#' },
        ],
      },
    ],
  },
  portfolio: {
    title: 'Personal Portfolio',
    themeStyle: 'editorial',
    paletteId: 'amber-editorial',
    blocks: [
      {
        id: 'nav-2',
        type: 'navbar',
        layoutId: 'navbar-simple',
        logoText: 'K. Reddy',
        links: [
          { id: 'nl-4', label: 'Selected Works', url: '#features' },
          { id: 'nl-5', label: 'Writings', url: '#blog' },
          { id: 'nl-6', label: 'Contact', url: '#contact' },
        ],
        primaryCta: 'Let\'s Chat',
      },
      {
        id: 'hero-2',
        type: 'hero',
        layoutId: 'hero-minimalist',
        badge: 'BASED IN SAN FRANCISCO',
        title: 'Designing timeless interface systems for complex software',
        subtitle: 'I am Kavya Reddy, an independent software architect and product designer. I help technical founders turn high-dimensional data systems into incredibly intuitive, elegant visual interfaces.',
        primaryCta: 'View Case Studies',
        secondaryCta: 'Read my background',
        imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000',
      },
      {
        id: 'feat-2',
        type: 'features',
        layoutId: 'features-rows',
        badge: 'SELECTED CASE STUDIES',
        title: 'Crafting clarity in high-density canvases',
        subtitle: 'A review of recent collaborations spanning telemetry dashboards, generative workspace editors, and trading terminals.',
        items: [
          {
            id: 'fi-4',
            title: 'Telemetry Pro - Spatial Network Viewer',
            description: 'Redesigned a distributed system monitoring grid, improving high-severity anomaly detection speeds by 34%.',
            icon: 'Eye',
          },
          {
            id: 'fi-5',
            title: 'Labyrinth - Generative Code Canvas',
            description: 'Established the component architecture, token design rules, and visual micro-interactions for a canvas-first code-generation editor.',
            icon: 'Compass',
          },
        ],
      },
      {
        id: 'test-2',
        type: 'testimonials',
        layoutId: 'testimonials-card',
        badge: 'KIND WORDS',
        title: 'Collaborator feedback',
        subtitle: 'Trust built through rigorous design execution, constant feedback loops, and pure engineering integrity.',
        items: [
          {
            id: 'ti-3',
            title: 'Elena Rostova',
            role: 'CEO, Labyrinth Systems',
            description: 'Kavya operates at the exact intersection of premium visual systems and frontend engineering. She didn\'t just give us Figma designs—she delivered clean, modular, highly declarative React structures that built beautifully.',
            avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
          },
        ],
      },
      {
        id: 'contact-2',
        type: 'contact',
        layoutId: 'contact-simple',
        title: 'Let\'s create something permanent',
        subtitle: 'I take on a limited number of design partnerships and consulting engagements every quarter. Drop me an email discussing your platform.',
        contactEmail: 'kavya@yaramala.design',
        contactAddress: 'Mission District, San Francisco, CA',
        primaryCta: 'Send Briefing Note',
      },
      {
        id: 'foot-2',
        type: 'footer',
        layoutId: 'footer-simple',
        logoText: 'Kavya Reddy © 2026',
        links: [
          { id: 'fl-4', label: 'GitHub', url: '#' },
          { id: 'fl-5', label: 'ReadCV', url: '#' },
          { id: 'fl-6', label: 'Email CV', url: '#' },
        ],
      },
    ],
  },
  brutalist: {
    title: 'Indie Creator Startup',
    themeStyle: 'brutalist',
    paletteId: 'brutal-cyan',
    blocks: [
      {
        id: 'nav-3',
        type: 'navbar',
        layoutId: 'navbar-simple',
        logoText: 'FOCUS_CUBE',
        links: [
          { id: 'nl-7', label: 'THE_SPECS', url: '#features' },
          { id: 'nl-8', label: 'GET_CUBE', url: '#pricing' },
        ],
        primaryCta: 'ORDER_NOW',
      },
      {
        id: 'hero-3',
        type: 'hero',
        layoutId: 'hero-split',
        badge: 'VERSION_3.0_RELEASED',
        title: 'RECLAIM_YOUR_ATTENTION_SPAN_NOW',
        subtitle: 'No notifications. No algorithms. Just a tactile, beautifully physical rotary timer that anchors your focus and completely blocks web-browsing distractions.',
        primaryCta: 'GRAB_YOUR_CUBE',
        secondaryCta: 'READ_DOCS',
        imageUrl: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=800',
      },
      {
        id: 'feat-3',
        type: 'features',
        layoutId: 'features-grid',
        badge: 'ENGINEERING_SPECS',
        title: 'TACTILE_PHYSICAL_CONTROLS',
        subtitle: 'Engineered for developers, writers, and digital creatives who are sick to death of digital notification sludge.',
        items: [
          {
            id: 'fi-6',
            title: '0.96IN CHROME OLED',
            description: 'A crisp, zero-glare screen displaying exclusively your countdown timer. No app icons, no colors.',
            icon: 'Cpu',
          },
          {
            id: 'fi-7',
            title: 'SOLID BRASS DIAL',
            description: 'Machined from aircraft brass blocks. Satisfying mechanical clicks you can physically feel.',
            icon: 'Zap',
          },
          {
            id: 'fi-8',
            title: 'ESP32 CONTROLLER',
            description: 'Fully open-source firmware. Write custom timer routines, connect to local MQTT ports.',
            icon: 'Terminal',
          },
        ],
      },
      {
        id: 'price-3',
        type: 'pricing',
        layoutId: 'pricing-tiers',
        badge: 'KIT_OPTIONS',
        title: 'SELECT_YOUR_BUILD',
        subtitle: 'Every kit contains premium machined parts, comprehensive visual assembly steps, and source codes.',
        items: [
          {
            id: 'pi-3',
            title: 'DIY_PCB_KIT',
            price: '$45',
            period: 'flat',
            description: 'Solder, assemble, and flash the code on your own ESP32 controller. Premium custom brass dial included.',
            features: ['ESP32 mainboard', 'Machined copper scroll-encoder', 'Full firmware schematic access', 'Discord access channel'],
            isPopular: false,
          },
          {
            id: 'pi-4',
            title: 'FOUNDRY_EDITION',
            price: '$129',
            period: 'flat',
            description: 'Fully assembled, calibrated, and packed in a sandblasted cosmic-grey aluminum enclosure.',
            features: ['Pre-assembled aircraft enclosure', 'Gilded connection cable', '1 year hardware swap guarantee', 'Limited metal badge serial-no.'],
            isPopular: true,
          },
        ],
      },
      {
        id: 'contact-3',
        type: 'contact',
        layoutId: 'contact-simple',
        title: 'SAY_HELLO',
        subtitle: 'Have bulk ordering queries or custom design questions? Leave an email with our core workshop loop.',
        contactEmail: 'cube@focus-foundry.net',
        contactAddress: 'Workshop 5, Pier 42, Port of SeattleWA',
        primaryCta: 'POST_INQUIRY',
      },
      {
        id: 'foot-3',
        type: 'footer',
        layoutId: 'footer-simple',
        logoText: 'FOUNDRY_SYSTEM_INTL',
        links: [
          { id: 'fl-7', label: 'SOURCE_CODE', url: '#' },
          { id: 'fl-8', label: 'FIRMWARE_LOGS', url: '#' },
        ],
      },
    ],
  },
};

export const NEW_BLOCK_TEMPLATES: { [key in SectionType]: SectionBlock[] } = {
  navbar: [
    {
      id: 'nav-temp-1',
      type: 'navbar',
      layoutId: 'navbar-simple',
      logoText: 'BrandName',
      links: [
        { id: 'nl-temp-1', label: 'Features', url: '#features' },
        { id: 'nl-temp-2', label: 'Pricing', url: '#pricing' },
      ],
      primaryCta: 'Get Started',
    }
  ],
  hero: [
    {
      id: 'hero-temp-1',
      type: 'hero',
      layoutId: 'hero-bold',
      badge: 'PROUDLY ANNOUNCING',
      title: 'Create outstanding web layouts instantly',
      subtitle: 'Customize typography, color styling, and content fields directly inside this visual responsive canvas draft.',
      primaryCta: 'Unlock Workspace',
      secondaryCta: 'Read the Docs',
      imageUrl: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=1000',
    },
    {
      id: 'hero-temp-2',
      type: 'hero',
      layoutId: 'hero-minimalist',
      badge: 'LATEST WORK',
      title: 'Simplicity is the ultimate sophistication',
      subtitle: 'Clean headlines matched with generous negative spaces to let your digital content breathe gracefully.',
      primaryCta: 'View Gallery',
      secondaryCta: 'Get in Touch',
      imageUrl: '',
    }
  ],
  features: [
    {
      id: 'feat-temp-1',
      type: 'features',
      layoutId: 'features-grid',
      badge: 'UNLIMITED ADVANTAGES',
      title: 'Built with purpose & precision',
      subtitle: 'Carefully engineered features that make digital system coordination quick, tactile, and easily reportable.',
      items: [
        {
          id: 'fi-temp-1',
          title: 'Secure Access Gateway',
          description: 'Control your production tokens, private configurations, and credentials safe from browser memory.',
          icon: 'Lock',
        },
        {
          id: 'fi-temp-2',
          title: 'Global Fast CDN',
          description: 'Cache elements automatically at over 200 edge datacenters across global network lines.',
          icon: 'Globe',
        },
        {
          id: 'fi-temp-3',
          title: 'Telemetry Analytics',
          description: 'A comprehensive log of request parameters, response limits, and telemetry charts.',
          icon: 'LineChart',
        }
      ],
    }
  ],
  testimonials: [
    {
      id: 'test-temp-1',
      type: 'testimonials',
      layoutId: 'testimonials-grid',
      badge: 'CUSTOMER REVIEWS',
      title: 'Endorsed by professional developers',
      subtitle: 'See how teams and independent builders scale and publish websites in real-time.',
      items: [
        {
          id: 'ti-temp-1',
          title: 'Sarah Lin',
          role: 'Founding Engineer, VoxelAI',
          description: 'This playground allows us to instantly visualize and draft layout components which are fully generated into clean Tailwind. It shaved days off our front-end workflow.',
          avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
        }
      ],
    }
  ],
  pricing: [
    {
      id: 'price-temp-1',
      type: 'pricing',
      layoutId: 'pricing-tiers',
      badge: 'TRANSPARENT VALUE',
      title: 'Flexible tiers for any workspace size',
      subtitle: 'Start crafting layout drafts completely free. Scale your features as your development team grows.',
      items: [
        {
          id: 'pi-temp-1',
          title: 'Hobby Stack',
          price: '$0',
          period: 'forever',
          description: 'Ideal to quickly test, sketch, and experiment with component layout grids.',
          features: ['Up to 3 section canvases', 'Standard SVG exports', 'Local browser caching'],
          isPopular: false,
        },
        {
          id: 'pi-temp-2',
          title: 'Creator Pro',
          price: '$29',
          period: 'per month',
          description: 'Awesome for production layouts, multi-grid files, and absolute design support systems.',
          features: ['Unlimited custom section exports', 'Production React code copying', 'Custom Google font pairs', 'Priority queue support'],
          isPopular: true,
        }
      ],
    }
  ],
  contact: [
    {
      id: 'contact-temp-1',
      type: 'contact',
      layoutId: 'contact-simple',
      title: 'Let\'s start your layout draft',
      subtitle: 'Drop us a conceptual brief. Our automated layout coordinators will respond within a business day.',
      contactEmail: 'hello@canvas-draft.io',
      contactAddress: 'Grid Building, Suite 3, Portland, OR',
      primaryCta: 'Establish Connection',
    }
  ],
  footer: [
    {
      id: 'foot-temp-1',
      type: 'footer',
      layoutId: 'footer-simple',
      logoText: 'DesignDraft © 2026',
      links: [
        { id: 'fl-temp-1', label: 'Privacy Policy', url: '#' },
        { id: 'fl-temp-2', label: 'Export Guide', url: '#' },
        { id: 'fl-temp-3', label: 'Contact Help', url: '#' },
      ],
    }
  ],
};
