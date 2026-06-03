/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowUp, ArrowDown, Trash2, Eye, Sparkles, AlertCircle } from 'lucide-react';
import * as Icons from 'lucide-react';
import { SectionBlock, ColorPalette, FontConfig, BlockItem } from '../types';

interface CanvasRendererProps {
  blocks: SectionBlock[];
  activeBlockId: string | null;
  onSelectBlock: (id: string) => void;
  onReorderBlock: (idx: number, direction: 'up' | 'down') => void;
  onRemoveBlock: (id: string) => void;
  onUpdateBlock: (updated: SectionBlock) => void;
  palette: ColorPalette;
  font: FontConfig;
  viewportWidth: 'desktop' | 'tablet' | 'mobile';
  isPreviewMode: boolean;
}

// Helper to dynamically render Lucide icons Safely
export function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (Icons as any)[name] || Icons.HelpCircle;
  return <IconComponent className={className || 'w-4 h-4'} />;
}

export default function CanvasRenderer({
  blocks,
  activeBlockId,
  onSelectBlock,
  onReorderBlock,
  onRemoveBlock,
  onUpdateBlock,
  palette,
  font,
  viewportWidth,
  isPreviewMode,
}: CanvasRendererProps) {
  // Inline text editing state tracker
  const [inlineEdit, setInlineEdit] = useState<{
    blockId: string;
    field: string;
    itemId?: string;
  } | null>(null);

  // Set sizing limits based on viewport choice
  const viewportClasses = {
    desktop: 'w-full max-w-6xl min-h-[85vh]',
    tablet: 'w-[768px] min-h-[75vh]',
    mobile: 'w-[375px] min-h-[60vh]',
  }[viewportWidth];

  const handleInlineChange = (block: SectionBlock, field: string, value: string, itemId?: string) => {
    if (itemId) {
      const updatedItems = (block.items || []).map((it) =>
        it.id === itemId ? { ...it, [field]: value } : it
      );
      onUpdateBlock({ ...block, items: updatedItems });
    } else {
      onUpdateBlock({ ...block, [field]: value });
    }
  };

  const renderInlineText = (
    block: SectionBlock,
    field: string,
    value: string,
    elementClass: string,
    tag: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'button' = 'p',
    itemId?: string,
    customStyle?: React.CSSProperties
  ) => {
    const isEditing = inlineEdit?.blockId === block.id && inlineEdit?.field === field && inlineEdit?.itemId === itemId;

    if (isEditing && !isPreviewMode) {
      if (tag === 'p' || field === 'subtitle') {
        return (
          <textarea
            value={value}
            id={`inline-edit-area-${block.id}-${field}`}
            onChange={(e) => handleInlineChange(block, field, e.target.value, itemId)}
            onBlur={() => setInlineEdit(null)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                setInlineEdit(null);
              }
            }}
            style={customStyle}
            className="w-full bg-slate-800 text-slate-100 p-1.5 rounded focus:outline-none focus:ring-1 focus:ring-violet-400 font-sans text-xs"
            autoFocus
          />
        );
      }
      return (
        <input
          type="text"
          value={value}
          id={`inline-edit-input-${block.id}-${field}`}
          onChange={(e) => handleInlineChange(block, field, e.target.value, itemId)}
          onBlur={() => setInlineEdit(null)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setInlineEdit(null);
            }
          }}
          style={customStyle}
          className="bg-slate-800 text-slate-100 p-1.5 rounded focus:outline-none focus:ring-1 focus:ring-violet-400 w-full"
          autoFocus
        />
      );
    }

    const Tag = tag;
    const editableProps = isPreviewMode
      ? {}
      : {
          onDoubleClick: (e: React.MouseEvent) => {
            e.stopPropagation();
            setInlineEdit({ blockId: block.id, field, itemId });
          },
          title: 'Double-click to edit text',
        };

    return (
      <Tag
        {...editableProps}
        style={customStyle}
        className={`${elementClass} ${!isPreviewMode ? 'hover:outline-dashed hover:outline-1 hover:outline-violet-400/60 cursor-text transition-all rounded' : ''}`}
      >
        {value || <span className="text-red-400 italic">Empty Field</span>}
      </Tag>
    );
  };

  return (
    <div className={`mx-auto bg-white shadow-2xl transition-all duration-300 rounded-xl overflow-hidden border border-slate-200 ${viewportClasses}`} id="canvas-workspace">
      {/* Outer sandbox wrapper with Dynamic font constraints */}
      <div
        style={{
          fontFamily: font.familySans,
          '--font-display': font.familyDisplay,
        } as React.CSSProperties}
        className={`w-full h-full min-h-[60vh] ${palette.bgMain} ${palette.textMain} text-sm transition-colors duration-200 select-text flex flex-col`}
      >
        {blocks.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-12 text-center" id="canvas-empty-splash">
            <span className="p-3 bg-violet-950/20 border border-violet-800 rounded-2xl mb-4 text-violet-400 animate-bounce">
              <Eye className="w-6 h-6" />
            </span>
            <h3 className="text-sm font-semibold text-slate-300">Your Canvas is Empty</h3>
            <p className="text-xs text-slate-400 max-w-sm mt-1.5 leading-relaxed">
              Assemble your design using standard layout sections like Navbars, Heroes, and Features from the left library panel.
            </p>
          </div>
        ) : (
          blocks.map((block, index) => {
            const isSelected = activeBlockId === block.id;

            return (
              <div
                key={block.id}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectBlock(block.id);
                }}
                className={`group relative outline-none transition-all ${
                  isSelected && !isPreviewMode ? 'ring-2 ring-violet-500 ring-offset-2 ring-offset-[#0f111a] z-10' : ''
                }`}
              >
                {/* Visual block control handle overlays (only in edit/draft mode) */}
                {isSelected && !isPreviewMode && (
                  <div className="absolute right-4 top-4 flex items-center justify-end gap-1.5 z-20 bg-slate-900 border border-slate-800 text-slate-200 px-2 py-1.5 rounded-lg shadow-xl cursor-default select-none animate-in fade-in slide-in-from-top-2">
                    <span className="text-[9px] font-bold text-slate-400 mr-2 uppercase">
                      Block #{index + 1}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onReorderBlock(index, 'up');
                      }}
                      disabled={index === 0}
                      className="p-1 hover:bg-slate-800 rounded disabled:opacity-30 transition-colors"
                      title="Move Block Up"
                    >
                      <ArrowUp className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onReorderBlock(index, 'down');
                      }}
                      disabled={index === blocks.length - 1}
                      className="p-1 hover:bg-slate-800 rounded disabled:opacity-30 transition-colors"
                      title="Move Block Down"
                    >
                      <ArrowDown className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveBlock(block.id);
                      }}
                      className="p-1 text-red-400 hover:bg-red-950/40 rounded transition-colors"
                      title="Remove Block"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {/* Section layout rendering */}
                <div className={`transition-all ${isSelected && !isPreviewMode ? 'opacity-100 bg-slate-800/5' : ''}`}>
                  {/* Category NAVBAR */}
                  {block.type === 'navbar' && (
                    <nav className={`px-4 md:px-8 py-4 flex items-center justify-between border-b ${palette.border} ${palette.bgCard}`}>
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-violet-500" />
                        {renderInlineText(block, 'logoText', block.logoText || 'BrandName', 'font-sans font-bold text-lg', 'span')}
                      </div>

                      <div className="hidden md:flex items-center gap-6">
                        {(block.links || []).map((link, idx) => (
                          <a
                            key={link.id}
                            href={link.url}
                            onClick={(e) => e.preventDefault()}
                            className={`text-xs ${palette.textMuted} hover:${palette.textMain} transition-colors font-medium`}
                          >
                            {renderInlineText(
                              block,
                              `link-${idx}`,
                              link.label,
                              'inline-block',
                              'span',
                              link.id
                            )}
                          </a>
                        ))}
                      </div>

                      {block.primaryCta && (
                        <div>
                          {renderInlineText(
                            block,
                            'primaryCta',
                            block.primaryCta,
                            `text-xs font-semibold px-4 py-1.5 rounded-lg transition-all ${palette.primary}`,
                            'button'
                          )}
                        </div>
                      )}
                    </nav>
                  )}

                  {/* Category HERO */}
                  {block.type === 'hero' && (
                    <section className="px-6 md:px-12 py-16 md:py-24 max-w-5xl mx-auto flex flex-col justify-center">
                      {block.layoutId === 'hero-bold' || block.layoutId === 'hero-minimalist' ? (
                        <div className="text-center max-w-3xl mx-auto space-y-6">
                          {block.badge && (
                            <div className="inline-block">
                              {renderInlineText(
                                block,
                                'badge',
                                block.badge,
                                `text-[10px] font-bold tracking-widest uppercase border ${palette.border} px-3 py-1 rounded-full ${palette.accent} bg-slate-950/20`,
                                'span'
                              )}
                            </div>
                          )}

                          {renderInlineText(
                            block,
                            'title',
                            block.title,
                            'text-3xl md:text-5xl font-bold tracking-tight leading-tighter',
                            'h1',
                            undefined,
                            { fontFamily: font.familyDisplay }
                          )}

                          {block.subtitle &&
                            renderInlineText(
                              block,
                              'subtitle',
                              block.subtitle,
                              `text-sm md:text-base leading-relaxed ${palette.textMuted} max-w-2xl mx-auto`,
                              'p'
                            )}

                          <div className="flex items-center justify-center gap-3 pt-2">
                            {block.primaryCta &&
                              renderInlineText(
                                block,
                                'primaryCta',
                                block.primaryCta,
                                `text-xs font-semibold px-5  py-2.5 rounded-lg transition-all ${palette.primary}`,
                                'button'
                              )}
                            {block.secondaryCta &&
                              renderInlineText(
                                block,
                                'secondaryCta',
                                block.secondaryCta,
                                `text-xs font-medium px-5 py-2.5 rounded-lg transition-all ${palette.secondary}`,
                                'button'
                              )}
                          </div>

                          {block.imageUrl && (
                            <div className="pt-10">
                              <img
                                src={block.imageUrl}
                                alt="Dashboard Preview"
                                referrerPolicy="no-referrer"
                                className={`w-full max-h-[360px] object-cover rounded-xl shadow-2xl border ${palette.border}`}
                              />
                            </div>
                          )}
                        </div>
                      ) : (
                        // Split or Left Aligned Layout
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                          <div className="space-y-6">
                            {block.badge && (
                              <div className="inline-block">
                                {renderInlineText(
                                  block,
                                  'badge',
                                  block.badge,
                                  `text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded bg-slate-950/30 ${palette.accent}`,
                                  'span'
                                )}
                              </div>
                            )}

                            {renderInlineText(
                              block,
                              'title',
                              block.title,
                              'text-3xl md:text-4xl font-semibold tracking-tight leading-tight',
                              'h1',
                              undefined,
                              { fontFamily: font.familyDisplay }
                            )}

                            {block.subtitle &&
                              renderInlineText(
                                block,
                                'subtitle',
                                block.subtitle,
                                `text-xs md:text-sm leading-relaxed ${palette.textMuted}`,
                                'p'
                              )}

                            <div className="flex items-center gap-3 pt-1">
                              {block.primaryCta &&
                                renderInlineText(
                                  block,
                                  'primaryCta',
                                  block.primaryCta,
                                  `text-xs font-semibold px-5 py-2.5 rounded-lg transition-all ${palette.primary}`,
                                  'button'
                                )}
                              {block.secondaryCta &&
                                renderInlineText(
                                  block,
                                  'secondaryCta',
                                  block.secondaryCta,
                                  `text-xs font-semibold px-5 py-2.5 rounded-lg transition-all ${palette.secondary}`,
                                  'button'
                                )}
                            </div>
                          </div>

                          {block.imageUrl && (
                            <div className="relative">
                              <img
                                src={block.imageUrl}
                                alt="Side Graphic"
                                referrerPolicy="no-referrer"
                                className={`w-full h-[320px] object-cover rounded-xl shadow-xl border ${palette.border}`}
                              />
                            </div>
                          )}
                        </div>
                      )}
                    </section>
                  )}

                  {/* Category FEATURES */}
                  {block.type === 'features' && (
                    <section className="px-6 md:px-12 py-16 max-w-5xl mx-auto space-y-12" id="features">
                      <div className="text-center max-w-2xl mx-auto space-y-3">
                        {block.badge && (
                          <div className="inline-block">
                            {renderInlineText(
                              block,
                              'badge',
                              block.badge,
                              `text-[10px] font-bold tracking-widest uppercase ${palette.accent}`,
                              'span'
                            )}
                          </div>
                        )}
                        {renderInlineText(
                          block,
                          'title',
                          block.title,
                          'text-2xl md:text-3xl font-bold tracking-tight',
                          'h2',
                          undefined,
                          { fontFamily: font.familyDisplay }
                        )}
                        {block.subtitle &&
                          renderInlineText(
                            block,
                            'subtitle',
                            block.subtitle,
                            `text-xs text-slate-400 leading-relaxed ${palette.textMuted}`,
                            'p'
                          )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {(block.items || []).map((it) => (
                          <div
                            key={it.id}
                            className={`p-6 rounded-xl border ${palette.border} ${palette.bgCard} space-y-4`}
                          >
                            <div className="w-10 h-10 rounded-lg bg-slate-950/40 border border-slate-800 flex items-center justify-center text-violet-400">
                              <DynamicIcon name={it.icon || 'Cpu'} className="w-5 h-5 text-violet-400" />
                            </div>
                            <div className="space-y-1.5">
                              {renderInlineText(
                                block,
                                'title',
                                it.title || '',
                                'text-sm font-semibold text-slate-100',
                                'h3',
                                it.id
                              )}
                              {renderInlineText(
                                block,
                                'description',
                                it.description || '',
                                `text-xs leading-relaxed ${palette.textMuted}`,
                                'p',
                                it.id
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Category TESTIMONIALS */}
                  {block.type === 'testimonials' && (
                    <section className="px-6 md:px-12 py-16 max-w-5xl mx-auto space-y-12" id="testimonials">
                      <div className="text-center max-w-2xl mx-auto space-y-3">
                        {block.badge && (
                          <div className="inline-block">
                            {renderInlineText(
                              block,
                              'badge',
                              block.badge,
                              `text-[10px] font-bold tracking-widest uppercase ${palette.accent}`,
                              'span'
                            )}
                          </div>
                        )}
                        {renderInlineText(
                          block,
                          'title',
                          block.title,
                          'text-2xl md:text-3xl font-bold tracking-tight',
                          'h2',
                          undefined,
                          { fontFamily: font.familyDisplay }
                        )}
                        {block.subtitle &&
                          renderInlineText(
                            block,
                            'subtitle',
                            block.subtitle,
                            `text-xs leading-relaxed ${palette.textMuted}`,
                            'p'
                          )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {(block.items || []).map((it) => (
                          <div
                            key={it.id}
                            className={`p-6 rounded-xl border ${palette.border} ${palette.bgCard} flex flex-col justify-between space-y-6`}
                          >
                            {renderInlineText(
                              block,
                              'description',
                              it.description || '',
                              `text-xs md:text-sm italic leading-relaxed ${palette.textMuted}`,
                              'p',
                              it.id
                            )}

                            <div className="flex items-center gap-3">
                              {it.avatarUrl ? (
                                <img
                                  src={it.avatarUrl}
                                  alt={it.title}
                                  referrerPolicy="no-referrer"
                                  className="w-10 h-10 rounded-full object-cover border border-slate-700"
                                />
                              ) : (
                                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center font-bold text-xs">
                                  {it.title?.charAt(0) || 'U'}
                                </div>
                              )}
                              <div>
                                {renderInlineText(
                                  block,
                                  'title',
                                  it.title || 'User Name',
                                  'text-xs font-semibold text-slate-100 block',
                                  'span',
                                  it.id
                                )}
                                {renderInlineText(
                                  block,
                                  'role',
                                  it.role || 'Staff',
                                  'text-[10px] text-slate-500 block',
                                  'span',
                                  it.id
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Category PRICING */}
                  {block.type === 'pricing' && (
                    <section className="px-6 md:px-12 py-16 max-w-5xl mx-auto space-y-12" id="pricing">
                      <div className="text-center max-w-2xl mx-auto space-y-3">
                        {block.badge && (
                          <div className="inline-block">
                            {renderInlineText(
                              block,
                              'badge',
                              block.badge,
                              `text-[10px] font-bold tracking-widest uppercase ${palette.accent}`,
                              'span'
                            )}
                          </div>
                        )}
                        {renderInlineText(
                          block,
                          'title',
                          block.title,
                          'text-2xl md:text-3xl font-bold tracking-tight',
                          'h2',
                          undefined,
                          { fontFamily: font.familyDisplay }
                        )}
                        {block.subtitle &&
                          renderInlineText(
                            block,
                            'subtitle',
                            block.subtitle,
                            `text-xs leading-relaxed ${palette.textMuted}`,
                            'p'
                          )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        {(block.items || []).map((it) => {
                          const isPopular = it.isPopular;

                          return (
                            <div
                              key={it.id}
                              className={`p-8 rounded-2xl border flex flex-col justify-between relative transition-all ${
                                isPopular
                                  ? 'bg-[#121422] border-violet-500 shadow-2xl relative'
                                  : `${palette.border} ${palette.bgCard}`
                              }`}
                            >
                              {isPopular && (
                                <span className="absolute top-0 right-6 -translate-y-1/2 bg-violet-600 border border-violet-400 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                                  Popular Choice
                                </span>
                              )}

                              <div className="space-y-4">
                                <div>
                                  {renderInlineText(
                                    block,
                                    'title',
                                    it.title || 'Tier',
                                    'text-sm font-bold text-slate-100',
                                    'h3',
                                    it.id
                                  )}
                                  {renderInlineText(
                                    block,
                                    'description',
                                    it.description || '',
                                    'text-[11px] text-slate-400 mt-1 lines-2',
                                    'p',
                                    it.id
                                  )}
                                </div>

                                <div className="flex items-baseline gap-1.5 py-2 border-y border-slate-800/80">
                                  {renderInlineText(
                                    block,
                                    'price',
                                    it.price || '$0',
                                    'text-4xl font-extrabold text-slate-50 tracking-tight',
                                    'span',
                                    it.id
                                  )}
                                  {renderInlineText(
                                    block,
                                    'period',
                                    it.period || '',
                                    'text-[10px] text-slate-500 font-semibold',
                                    'span',
                                    it.id
                                  )}
                                </div>

                                <ul className="space-y-2 pt-2">
                                  {(it.features || []).map((feat, fidx) => (
                                    <li key={fidx} className="flex items-center gap-2 text-xs text-slate-300">
                                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                                      {feat}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="pt-6 mt-4">
                                <button
                                  className={`w-full text-center text-xs font-semibold py-2 rounded-lg transition-all ${
                                    isPopular
                                      ? 'bg-violet-600 hover:bg-violet-700 text-white shadow-lg'
                                      : `${palette.secondary}`
                                  }`}
                                >
                                  Subscribe Tier
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </section>
                  )}

                  {/* Category CONTACT */}
                  {block.type === 'contact' && (
                    <section className="px-6 md:px-12 py-16 max-w-4xl mx-auto space-y-10" id="contact">
                      <div className="text-center max-w-xl mx-auto space-y-3">
                        {renderInlineText(
                          block,
                          'title',
                          block.title,
                          'text-2xl md:text-3xl font-bold tracking-tight',
                          'h2',
                          undefined,
                          { fontFamily: font.familyDisplay }
                        )}
                        {block.subtitle &&
                          renderInlineText(
                            block,
                            'subtitle',
                            block.subtitle,
                            `text-xs leading-relaxed ${palette.textMuted}`,
                            'p'
                          )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Static Coordinates Details */}
                        <div className="space-y-5 p-6 bg-slate-950/40 border border-slate-800/60 rounded-xl flex flex-col justify-between">
                          <div className="space-y-3">
                            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest">Connect</h4>
                            <p className="text-[11px] text-slate-400 leading-normal">
                              We operate dynamically. Pop in an inquiry and our coordinators will reach out to address architecture needs promptly.
                            </p>
                          </div>

                          <div className="space-y-3 text-xs leading-normal">
                            {block.contactEmail && (
                              <div>
                                <span className="text-[10px] text-zinc-500 font-bold block">Inquiry Email</span>
                                <a
                                  href={`mailto:${block.contactEmail}`}
                                  onClick={(e) => e.preventDefault()}
                                  className="text-violet-400 select-all font-medium"
                                >
                                  {block.contactEmail}
                                </a>
                              </div>
                            )}

                            {block.contactAddress && (
                              <div>
                                <span className="text-[10px] text-zinc-500 font-bold block">Location</span>
                                <span className="text-slate-300 font-medium select-all">{block.contactAddress}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Quick Contact Form */}
                        <form onSubmit={(e) => e.preventDefault()} className="space-y-3.5 p-6 border border-slate-800 rounded-xl">
                          <div>
                            <input
                              type="text"
                              placeholder="Your full name"
                              className="w-full bg-slate-900 border border-slate-800 rounded p-2 text-xs text-slate-200 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                            />
                          </div>
                          <div>
                            <input
                              type="email"
                              placeholder="Inquiry email address"
                              className="w-full bg-slate-900 border border-slate-800 rounded p-2 text-xs text-slate-200 focus:outline-none focus:border-violet-500"
                            />
                          </div>
                          <div>
                            <textarea
                              placeholder="Describe your architecture requirements"
                              rows={3}
                              className="w-full bg-slate-900 border border-slate-800 rounded p-2 text-xs text-slate-200 focus:outline-none focus:border-violet-500 leading-normal"
                            />
                          </div>

                          <button
                            type="submit"
                            className={`w-full py-2 text-xs font-semibold rounded-lg transition-all ${palette.primary}`}
                          >
                            {block.primaryCta || 'Establish Access Channel'}
                          </button>
                        </form>
                      </div>
                    </section>
                  )}

                  {/* Category FOOTER */}
                  {block.type === 'footer' && (
                    <footer className={`px-4 md:px-8 py-8 md:py-12 border-t ${palette.border} ${palette.bgCard} mt-auto`}>
                      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-violet-500" />
                          {renderInlineText(
                            block,
                            'logoText',
                            block.logoText || 'Copyright © 2026',
                            'text-xs text-slate-400 font-medium',
                            'span'
                          )}
                        </div>

                        <div className="flex items-center gap-6">
                          {(block.links || []).map((link, idx) => (
                            <a
                              key={link.id}
                              href={link.url}
                              onClick={(e) => e.preventDefault()}
                              className={`text-xs ${palette.textMuted} hover:${palette.textMain} transition-colors font-medium`}
                            >
                              {renderInlineText(
                                block,
                                `link-${idx}`,
                                link.label,
                                'inline-block',
                                'span',
                                link.id
                              )}
                            </a>
                          ))}
                        </div>
                      </div>
                    </footer>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
