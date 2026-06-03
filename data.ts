import { ColorPalette, FontConfig, SectionBlock } from './types';

export const LUXURY_PALETTES: ColorPalette[] = [
  {
    id: 'warm-alabaster',
    name: 'Warm Alabaster (Wellness Base)',
    bgMain: 'bg-[#FAF8F5]',
    bgCard: 'bg-white border border-[#E8DFD3]',
    textMain: 'text-[#1F1A15]',
    textMuted: 'text-[#7A6E5F]',
    primary: 'bg-[#3D3328] hover:bg-[#2A231A]/95 text-[#f7f5f0] shadow-sm',
    secondary: 'bg-[#F3EDE2] hover:bg-[#E8DFD3] text-[#3D3328] border border-[#DCD0C0]',
    border: 'border-[#E8DFD3]',
    accent: 'text-[#C58B58]',
  },
  {
    id: 'cosmic-dark',
    name: 'Cosmic Indigo (Cinematic Deep)',
    bgMain: 'bg-[#08090E]',
    bgCard: 'bg-[#101422] border border-sky-950/45',
    textMain: 'text-[#F1F5F9]',
    textMuted: 'text-[#94A9C4]',
    primary: 'bg-[#38BDF8] hover:bg-[#0EA5E9] text-[#08090E] font-medium shadow-md shadow-sky-950/30',
    secondary: 'bg-[#1E293B] hover:bg-[#334155] text-[#38BDF8] border border-sky-900/50',
    border: 'border-sky-950/60',
    accent: 'text-[#38BDF8]',
  },
  {
    id: 'editorial-ochre',
    name: 'Ebene & Ochre (Beauty Editorial)',
    bgMain: 'bg-[#F5ECE2]',
    bgCard: 'bg-white border border-[#DDD0C0]',
    textMain: 'text-[#201611]',
    textMuted: 'text-[#827164]',
    primary: 'bg-[#8F4E1B] hover:bg-[#723B11] text-white',
    secondary: 'bg-[#DDD0C0]/40 hover:bg-[#DDD0C0]/70 text-[#201611] border border-[#DDD0C0]',
    border: 'border-[#DDD0C0]',
    accent: 'text-[#8F4E1B]',
  },
  {
    id: 'minimal-slate',
    name: 'Minimalist Zinc (Modern Studio)',
    bgMain: 'bg-[#FAFAFA]',
    bgCard: 'bg-white border border-zinc-200/80',
    textMain: 'text-zinc-900',
    textMuted: 'text-zinc-500',
    primary: 'bg-zinc-900 hover:bg-zinc-800 text-white',
    secondary: 'bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-200',
    border: 'border-zinc-200',
    accent: 'text-zinc-600',
  },
  {
    id: 'forest-sage',
    name: 'Sage & Sand (Earthy Botanics)',
    bgMain: 'bg-[#F2F4F0]',
    bgCard: 'bg-white border border-[#CBD2C3]',
    textMain: 'text-[#1B291D]',
    textMuted: 'text-[#5E6B60]',
    primary: 'bg-[#293E2E] hover:bg-[#1C2C20] text-white shadow-sm',
    secondary: 'bg-[#E4ECE0] hover:bg-[#CBD2C3] text-[#1B291D]',
    border: 'border-[#CBD2C3]',
    accent: 'text-[#648F6C]',
  },
  {
    id: 'blossom-rose',
    name: 'Rosewood & Dusk (Serene Clay)',
    bgMain: 'bg-[#FAF4F2]',
    bgCard: 'bg-white border border-[#E6D4CE]',
    textMain: 'text-[#3A241B]',
    textMuted: 'text-[#806A61]',
    primary: 'bg-[#A35941] hover:bg-[#854530] text-white shadow-sm',
    secondary: 'bg-[#F2EAE6] hover:bg-[#E6D4CE] text-[#3A241B]',
    border: 'border-[#E6D4CE]',
    accent: 'text-[#A35941]',
  }
];

export const CUSTOM_FONTS: FontConfig[] = [
  {
    id: 'classic-garamond',
    name: 'Cormorant Garamond + DM Sans',
    importUrl: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=DM+Sans:wght@300;400;500;600&display=swap',
    familyDisplay: '"Cormorant Garamond", serif',
    familySans: '"DM Sans", system-ui, sans-serif'
  },
  {
    id: 'editorial-playfair',
    name: 'Playfair Display + Inter',
    importUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,500;0,600;1,400&display=swap',
    familyDisplay: '"Playfair Display", serif',
    familySans: '"Inter", sans-serif'
  }
];

export interface IndustryDetail {
  title: string;
  img: string;
  desc: string;
  items: string[];
  pills: string[];
}

export const INDUSTRY_DATA: Record<string, IndustryDetail> = {
  wellness: {
    title: 'Wellness Brands',
    img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80',
    desc: 'For supplement, fitness, yoga, wellness, and self-care brands that need trust-based communication and repeat customer routines.',
    items: [
      'Welcome sequences for new subscribers',
      'Educational emails that build subscription routines',
      'Intelligent reorder nudges and custom timing',
      'SMS updates for membership perks and special drops',
      'Retention post-purchase flows for recurring loyalty'
    ],
    pills: ['Trust-Building', '教育 sequence', 'Reorder Triggers', 'SMS Perks']
  },
  beauty: {
    title: 'Beauty Brands',
    img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80',
    desc: 'For makeup, cosmetics, salons, and beauty ecommerce brands that need strong launches, VIP campaigns, and polished customer journeys.',
    items: [
      'Seasonal product launch campaigns',
      'VIP early-access secret vaults',
      'Asymmetric abandoned checkout recovery',
      'SMS alerts for flash sales and drops',
      'Conversational product review requests'
    ],
    pills: ['VIP Access', 'New Collection Drops', 'Cart Recovery', 'Flash SMS']
  },
  skincare: {
    title: 'Skincare Brands',
    img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80',
    desc: 'For skincare brands where education, routine-building, and reorder timing matter. Customers need reminders, guidance, and trust.',
    items: [
      'Personalized routine builder campaigns',
      'Automated replenishment triggers based on average reorder times',
      'Before/after story threads that highlight results',
      'Post-purchase application best practices guides',
      'Win-back email campaigns for inactive consumers'
    ],
    pills: ['Routine Milestones', 'Auto Replenish', 'Before & After', 'Win-Back']
  },
  fashion: {
    title: 'Fashion Brands',
    img: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=700&q=80',
    desc: 'For fashion and apparel brands that rely on seasonal drops, collection launches, limited offers, and repeat customer attention.',
    items: [
      'Modern collection drop build-ups',
      'Back-in-stock text alert notifications',
      'Bespoke loyalty club tier invitations',
      'Editorial style lookup guides',
      'Browse abandonment reminders'
    ],
    pills: ['Seasonal Drops', 'Back In Stock', 'VIP Tiers', 'Lookbooks']
  },
  lifestyle: {
    title: 'Lifestyle Brands',
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=80',
    desc: 'For home, accessories, personal care, jewelry, and lifestyle brands that need storytelling-led email and SMS experiences.',
    items: [
      'Authentic brand storytelling newsletters',
      'Interactive gift guides for holidays',
      'Atmospheric community-building digests',
      'Nurturing product care instructions',
      'Dynamic recommendations based on browsing history'
    ],
    pills: ['Storytelling', 'Gift Guides', 'Care Guides', 'Personalized']
  },
  ecommerce: {
    title: 'Ecommerce Stores',
    img: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=700&q=80',
    desc: 'For online stores that need practical revenue systems: cart recovery, welcome flows, promotions, customer follow-ups, and repeat purchase journeys.',
    items: [
      'Welcome flow conversion sequences',
      'Multi-channel browse & checkout recovery',
      'Strategic transactional receipt triggers',
      'Incentivized subscriber list builders',
      'Continuous deliverability and click performance reviews'
    ],
    pills: ['Revenue Systems', 'List Building', 'Multi-Channel', 'CTR Boost']
  },
  luxury: {
    title: 'Luxury Consumer Brands',
    img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80',
    desc: 'For premium brands that need customer communication to feel elegant, high-trust, and aligned with a refined brand experience.',
    items: [
      'Exquisite bespoke copy and editorial layouts',
      'Personalized high-touch executive onboarding',
      'Exclusive private collection previews',
      'Sleek, atmospheric product announcements',
      'Highly tailored lifetime customer nurturing lines'
    ],
    pills: ['Bespoke Aesthetic', 'Private Previews', 'Lifetime Nurture', 'Editorial Code']
  }
};

export interface ServiceDetail {
  tag: string;
  title: string;
  desc: string;
  items: string[];
}

export const SERVICE_DATA: Record<string, ServiceDetail> = {
  email: {
    tag: 'Service 01',
    title: 'Email Marketing',
    desc: 'Strategic emails that help customers understand, trust, remember, and buy from your brand again.',
    items: [
      'Subscriber onboarding and welcome stories',
      'Engaging campaigns, announcements, and product news',
      'Strategic promotional structures without looking salesy',
      'Beautiful editorial templates engineered for instant readability',
      'Dynamic A/B testing of headlines and content structures'
    ]
  },
  sms: {
    tag: 'Service 02',
    title: 'SMS Marketing',
    desc: 'Short, timely text messages that help customers take action faster without feeling spammed.',
    items: [
      'High-priority abandoned cart sms nodes',
      'Time-locked flash sales and exclusive VIP previews',
      'Two-way conversational sms templates that customers actually reply to',
      'Delivery, restock, and drop notifications',
      'Smart segment triggers that exclude unengaged numbers'
    ]
  },
  flows: {
    tag: 'Service 03',
    title: 'Lifecycle Flows',
    desc: 'Automated email and SMS journeys that run in the background and guide customers through every stage.',
    items: [
      'Complete onboarding welcome sequence',
      'High-converting checkout abandonment branches',
      'Post-purchase trust-builders and routine support',
      'Automatic reorder replenishment schedules',
      'Win-back frameworks that reactivate cooling relationships'
    ]
  },
  campaigns: {
    tag: 'Service 04',
    title: 'Campaign Strategy',
    desc: 'A clear plan for what to send, when to send it, and which customers should receive each message.',
    items: [
      'Monthly communication calendar designs',
      'Advanced list segmentation loops inside Klaviyo & Postscript',
      'Rhythms that avoid email fatigue while sustaining top revenue',
      'Cohesive campaign alignments with physical product releases',
      'Competitor benchmark studies'
    ]
  },
  copy: {
    tag: 'Service 05',
    title: 'Copy & Design',
    desc: 'Email and SMS creative that is easy to read, on-brand, attractive, and built for engagement.',
    items: [
      'Poetic yet performance-minded copy',
      'Sleek display typographical hierarchies',
      'Mobile-optimized layouts that load instantly on 3G',
      'Authentic brand voice maps designed for emotional connect',
      'High contrast visual hierarchies'
    ]
  },
  performance: {
    tag: 'Service 06',
    title: 'Performance Optimization',
    desc: 'We track and improve the numbers that matter: opens, clicks, purchases, retention, and customer engagement.',
    items: [
      'Deep metrics audits (CTR, bounce-rates, segment decay)',
      'Spam filter prevention and inbox deliverability assurance',
      'Statistical A/B hypothesis models',
      'Conversion rate optimization on landing touchpoints',
      'Actionable executive summary dashboard updates'
    ]
  }
};

export const SEED_BLOCKS: SectionBlock[] = [
  {
    id: 'nav-block',
    type: 'navbar',
    layoutId: 'luxury-nav',
    logoText: 'MAILBENCH CX',
    links: [
      { id: 'l1', label: 'Services', url: '#services' },
      { id: 'l2', label: 'Target Clients', url: '#industries' },
      { id: 'l3', label: 'Flows', url: '#flows' },
      { id: 'l4', label: 'Results', url: '#results' },
      { id: 'l5', label: 'Process', url: '#process' },
    ],
    primaryCta: 'Book a Call',
  },
  {
    id: 'hero-block',
    type: 'hero',
    layoutId: 'hero-editorial',
    badge: 'PREMIUM EMAIL & SMS LIFECYCLE MAILBENCH',
    title: 'Turn one-time buyers into loyal customers.',
    subtitle: 'We help wellness, beauty, skincare, fashion, lifestyle, and ecommerce brands grow through clear email campaigns, smart SMS messages, and automated customer journeys.',
    primaryCta: 'Book a Strategy Call ->',
    secondaryCta: 'Explore Services',
    imageUrl: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'problems-block',
    type: 'features',
    layoutId: 'asymmetrical-pains',
    badge: 'THE PROBLEM WE SOLVE',
    title: 'Most brands work hard to get customers, then lose them because the follow-up is weak.',
    subtitle: 'Your customer journey should not stop after someone visits your site, joins your list, abandons their cart, or buys once.',
    items: [
      {
        id: 'p1',
        title: 'No welcome experience',
        description: 'New subscribers join your list, but they do not get a clear, warm introduction to your brand.',
        icon: 'Sparkles',
      },
      {
        id: 'p2',
        title: 'Abandoned carts are ignored',
        description: 'People show buying intent, leave, and never receive the right reminder to come back.',
        icon: 'MessageSquare',
      },
      {
        id: 'p3',
        title: 'Customers buy once and disappear',
        description: 'Without post-purchase and retention flows, repeat purchases become random instead of planned.',
        icon: 'Heart',
      },
      {
        id: 'p4',
        title: 'Email/SMS feels random',
        description: 'We turn scattered messages into a clear customer communication system.',
        icon: 'TrendingUp',
      }
    ]
  },
  {
    id: 'contact-block',
    type: 'contact',
    layoutId: 'luxury-consult',
    title: 'Let’s build customer communication that people actually want to receive.',
    subtitle: 'A clear email and SMS system can help your brand stay remembered, trusted, and chosen again.',
    contactEmail: 'services@mail-bench.com',
    contactAddress: 'California MailBench Hub, San Francisco CA',
    primaryCta: 'Request Partnership'
  }
];
