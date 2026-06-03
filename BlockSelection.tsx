/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Plus, Menu, Layout, Layers, Heart, DollarSign, Mail, Copy } from 'lucide-react';
import { SectionType, SectionBlock } from '../types';
import { NEW_BLOCK_TEMPLATES } from '../templates';

interface BlockSelectionProps {
  onAddBlock: (block: SectionBlock) => void;
  existingBlockTypes: SectionType[];
}

interface BlockCategory {
  type: SectionType;
  label: string;
  description: string;
  icon: React.ComponentType<any>;
}

const CATEGORIES: BlockCategory[] = [
  {
    type: 'navbar',
    label: 'Navigation Bar',
    description: 'Header logo, quick page links, and responsive action button.',
    icon: Menu,
  },
  {
    type: 'hero',
    label: 'Hero Frame',
    description: 'Impactful display heading, intro summary, and calls to action.',
    icon: Layout,
  },
  {
    type: 'features',
    label: 'Feature Showcase',
    description: 'Interactive bento-style cards or alternating layout description grids.',
    icon: Layers,
  },
  {
    type: 'testimonials',
    label: 'Testimonials / Social Proof',
    description: 'Beautiful quote blocks, avatars, and review rankings for trust.',
    icon: Heart,
  },
  {
    type: 'pricing',
    label: 'Pricing Tables',
    description: 'Clear structural pricing cards with lists of core tier features.',
    icon: DollarSign,
  },
  {
    type: 'contact',
    label: 'Contact Details',
    description: 'Direct communication templates with custom email inputs and addresses.',
    icon: Mail,
  },
  {
    type: 'footer',
    label: 'Page Footer',
    description: 'Bottom logo branding, structural links, and copyright notices.',
    icon: Copy,
  },
];

export default function BlockSelection({ onAddBlock, existingBlockTypes }: BlockSelectionProps) {
  const handleAddDefault = (type: SectionType) => {
    const templates = NEW_BLOCK_TEMPLATES[type];
    if (templates && templates.length > 0) {
      // Clone the template to avoid cross-referencing state
      const template = templates[0];
      const newBlock: SectionBlock = {
        ...template,
        id: `${type}-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        items: template.items ? template.items.map((it) => ({ ...it })) : undefined,
        links: template.links ? template.links.map((li) => ({ ...li })) : undefined,
      };
      onAddBlock(newBlock);
    }
  };

  return (
    <div className="space-y-4" id="block-selection-container">
      <div className="text-xs font-medium uppercase tracking-wider text-slate-400 mb-2">
        Insert Site Sections
      </div>

      <div className="space-y-2 max-h-[calc(100vh-280px)] overflow-y-auto pr-1 select-none">
        {CATEGORIES.map((cat) => {
          const IconComponent = cat.icon;
          const isAlreadyPresent = existingBlockTypes.includes(cat.type);
          const isUniqueKind = cat.type === 'navbar' || cat.type === 'footer';
          const shouldDisable = isUniqueKind && isAlreadyPresent;

          return (
            <button
              key={cat.type}
              onClick={() => handleAddDefault(cat.type)}
              disabled={shouldDisable}
              id={`add-block-${cat.type}`}
              className={`w-full p-3 text-left rounded-lg border transition-all flex items-start gap-3.5 group relative ${
                shouldDisable
                  ? 'opacity-40 bg-slate-900/20 border-slate-800 cursor-not-allowed'
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80 hover:shadow-md'
              }`}
            >
              <div
                className={`p-2 rounded-lg border transition-colors ${
                  shouldDisable
                    ? 'bg-slate-900 border-slate-800 text-slate-600'
                    : 'bg-slate-800 border-slate-700 text-violet-400 group-hover:text-violet-300'
                }`}
              >
                <IconComponent className="w-4 h-4" />
              </div>

              <div className="flex-1 min-w-0 pr-6">
                <div className="text-xs font-semibold text-slate-200 flex items-center gap-1.5 label-title">
                  {cat.label}
                  {shouldDisable && (
                    <span className="text-[10px] font-normal text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">
                      Added
                    </span>
                  )}
                </div>
                <div className="text-[10px] text-slate-400 mt-1 leading-snug truncate-none line-clamp-2">
                  {cat.description}
                </div>
              </div>

              {!shouldDisable && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-violet-600 p-1 rounded-md shadow text-white">
                  <Plus className="w-3.5 h-3.5" />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
