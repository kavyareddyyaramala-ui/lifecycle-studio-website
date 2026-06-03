/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ThemeStyle = 'minimalist' | 'brutalist' | 'saas' | 'editorial';

export interface FontConfig {
  id: string;
  name: string;
  importUrl: string;
  familySans: string;
  familyDisplay: string;
}

export interface ColorPalette {
  id: string;
  name: string;
  bgMain: string;
  bgCard: string;
  textMain: string;
  textMuted: string;
  primary: string; // hex or tailwind class
  secondary: string;
  border: string;
  accent: string;
}

export type SectionType = 'navbar' | 'hero' | 'features' | 'testimonials' | 'pricing' | 'contact' | 'footer';

export interface BlockItem {
  id: string;
  title?: string;
  description?: string;
  icon?: string; // Lucide icon identifier
  role?: string;
  price?: string;
  period?: string;
  features?: string[];
  isPopular?: boolean;
  avatarUrl?: string;
}

export interface SectionBlock {
  id: string;
  type: SectionType;
  layoutId: string; // e.g., 'navbar-simple', 'hero-bold', 'features-grid', 'pricing-tiers'
  badge?: string;
  title?: string;
  subtitle?: string;
  items?: BlockItem[];
  primaryCta?: string;
  secondaryCta?: string;
  imageUrl?: string;
  logoText?: string;
  links?: { label: string; url: string; id: string }[];
  contactEmail?: string;
  contactAddress?: string;
}

export interface WebsiteData {
  title: string;
  themeStyle: ThemeStyle;
  paletteId: string;
  blocks: SectionBlock[];
}
