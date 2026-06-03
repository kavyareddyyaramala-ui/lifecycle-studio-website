/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Settings, Plus, Trash2, ArrowRight, Sparkles, AlertCircle, Link, Image } from 'lucide-react';
import { SectionBlock, BlockItem } from '../types';

interface BlockConfiguratorProps {
  block: SectionBlock | null;
  onUpdateBlock: (updated: SectionBlock) => void;
  onRemoveBlock: (id: string) => void;
}

export default function BlockConfigurator({
  block,
  onUpdateBlock,
  onRemoveBlock,
}: BlockConfiguratorProps) {
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiTone, setAiTone] = useState('creative');
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiError, setAiError] = useState('');

  if (!block) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-6 text-center select-none" id="configurator-empty">
        <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 mb-3 animate-pulse">
          <Settings className="w-5 h-5" />
        </div>
        <div className="text-xs font-semibold text-slate-300">No Block Selected</div>
        <p className="text-[10px] text-slate-500 max-w-[200px] mt-1.5 leading-normal">
          Click on any section block or page link inside the preview canvas to configure its settings.
        </p>
      </div>
    );
  }

  const updateField = (key: keyof SectionBlock, value: any) => {
    onUpdateBlock({
      ...block,
      [key]: value,
    });
  };

  const updateItem = (itemId: string, updatedFields: Partial<BlockItem>) => {
    if (!block.items) return;
    const newItems = block.items.map((it) => (it.id === itemId ? { ...it, ...updatedFields } : it));
    updateField('items', newItems);
  };

  const addItem = () => {
    const list = block.items || [];
    const newItem: BlockItem = {
      id: `it-${Date.now()}`,
      title: 'New Feature Item',
      description: 'Fill in this detail with responsive descriptions.',
      icon: 'Cpu',
      role: 'Staff Role',
      price: '$49',
      period: 'per year',
      features: ['Core benefit specification'],
    };
    updateField('items', [...list, newItem]);
  };

  const removeItem = (itemId: string) => {
    if (!block.items) return;
    updateField('items', block.items.filter((it) => it.id !== itemId));
  };

  const handleAiRegenerate = async () => {
    if (!aiPrompt.trim()) {
      setAiError('Please describe your product/brand first.');
      return;
    }
    setIsGenerating(true);
    setAiError('');

    try {
      const response = await fetch('/api/generate-copy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: aiPrompt,
          tone: aiTone,
          blockType: block.type,
          currentTitle: block.title,
        }),
      });

      if (!response.ok) {
        throw new Error('An error occurred during text drafting.');
      }

      const data = await response.json();
      if (data && data.title) {
        const updated: SectionBlock = {
          ...block,
          title: data.title,
          subtitle: data.subtitle || block.subtitle,
        };

        if (data.items && block.items) {
          updated.items = block.items.map((it, idx) => {
            if (data.items[idx]) {
              return {
                ...it,
                title: data.items[idx].title || it.title,
                description: data.items[idx].description || it.description,
              };
            }
            return it;
          });
        }

        onUpdateBlock(updated);
        setAiPrompt('');
      } else {
        throw new Error('API returned empty or invalid structure.');
      }
    } catch (err: any) {
      console.error(err);
      // Fallback local intelligence generation based on topic triggers
      const fallbackTemplates: Record<string, any> = {
        saas: {
          title: `Seamless ${aiPrompt} for Modern Workflows`,
          subtitle: `Connect your entire system database with premium, automated visual synchronization in seconds. Crafted for builders who demand performance.`,
        },
        creative: {
          title: `Artisanal ${aiPrompt} For Visionary Brands`,
          subtitle: `We form elegant structures, typography curves, and customized landing palettes that showcase your project integrity.`,
        },
        bold: {
          title: `ACCELERATE_YOUR_${aiPrompt.toUpperCase()}_ENGINES`,
          subtitle: `STOP DECORATING WORKSPACES WITH OVER-ENGINEERED SLOP. EMPOWER YOUR TEAM WITH TACTILE HARDWARE AND FAST RESPONSIVE APPS.`,
        },
      };

      const fallbackType = aiTone === 'creative' ? 'creative' : aiTone === 'elegant' ? 'creative' : 'bold';
      const preset = fallbackTemplates[fallbackType] || fallbackTemplates.saas;

      const updated: SectionBlock = {
        ...block,
        title: preset.title,
        subtitle: preset.subtitle,
      };
      onUpdateBlock(updated);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="p-4 space-y-6 max-h-[calc(100vh-120px)] overflow-y-auto" id={`configurator-panel-${block.id}`}>
      {/* Header and Delete controls */}
      <div className="flex items-center justify-between pb-3.5 border-b border-slate-800">
        <div>
          <span className="text-[10px] font-semibold text-violet-400 bg-violet-950/50 border border-violet-800 px-2 py-0.5 rounded capitalize">
            {block.type} section
          </span>
          <h3 className="text-xs font-medium text-slate-200 mt-1">Section Properties</h3>
        </div>
        <button
          onClick={() => onRemoveBlock(block.id)}
          id="btn-delete-section"
          className="p-1.5 text-slate-500 hover:text-red-400 hover:bg-slate-900 rounded-lg transition-all"
          title="Delete this block from timeline"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      {/* Main text fields layout */}
      <div className="space-y-4">
        {/* Navigation specific inputs */}
        {block.type === 'navbar' && (
          <>
            <div>
              <label className="block text-[10px] font-medium text-slate-400 uppercase tracking-wider mb-1.5">
                Brand/Logo Text
              </label>
              <input
                type="text"
                value={block.logoText || ''}
                onChange={(e) => updateField('logoText', e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-violet-500 font-medium"
              />
            </div>

            <div>
              <label className="block text-[10px] font-medium text-slate-400 uppercase tracking-wider mb-1.5">
                Header Navigation Links
              </label>
              <div className="space-y-1.5">
                {(block.links || []).map((link, idx) => (
                  <div key={link.id} className="flex gap-1">
                    <input
                      type="text"
                      value={link.label}
                      onChange={(e) => {
                        const newLinks = [...(block.links || [])];
                        newLinks[idx] = { ...newLinks[idx], label: e.target.value };
                        updateField('links', newLinks);
                      }}
                      className="flex-1 bg-slate-900 border border-slate-800 rounded px-2 py-1 text-xs text-slate-200 focus:outline-none focus:border-violet-500"
                      placeholder="Label"
                    />
                    <input
                      type="text"
                      value={link.url}
                      onChange={(e) => {
                        const newLinks = [...(block.links || [])];
                        newLinks[idx] = { ...newLinks[idx], url: e.target.value };
                        updateField('links', newLinks);
                      }}
                      className="w-20 bg-slate-900 border border-slate-800 rounded px-2 py-1 text-xs text-slate-300 focus:outline-none focus:border-violet-500 font-mono text-[10px]"
                      placeholder="URL"
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Global textual fields (if not navbar or footer) */}
        {block.type !== 'navbar' && block.type !== 'footer' && (
          <>
            {block.badge !== undefined && (
              <div>
                <label className="block text-[10px] font-medium text-slate-400 uppercase tracking-wider mb-1.5">
                  Over-badge text
                </label>
                <input
                  type="text"
                  value={block.badge || ''}
                  onChange={(e) => updateField('badge', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-violet-500"
                />
              </div>
            )}

            <div>
              <label className="block text-[10px] font-medium text-slate-400 uppercase tracking-wider mb-1.5">
                Main Headline
              </label>
              <textarea
                value={block.title}
                onChange={(e) => updateField('title', e.target.value)}
                rows={3}
                className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-violet-500 leading-normal"
              />
            </div>

            {block.subtitle !== undefined && (
              <div>
                <label className="block text-[10px] font-medium text-slate-400 uppercase tracking-wider mb-1.5">
                  Structural Description
                </label>
                <textarea
                  value={block.subtitle || ''}
                  onChange={(e) => updateField('subtitle', e.target.value)}
                  rows={4}
                  className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-violet-500 leading-normal"
                />
              </div>
            )}
          </>
        )}

        {/* Calls to action buttons */}
        {block.primaryCta !== undefined && (
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-[10px] font-medium text-slate-400 uppercase tracking-wider mb-1">
                Primary Button
              </label>
              <input
                type="text"
                value={block.primaryCta || ''}
                onChange={(e) => updateField('primaryCta', e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded px-2 py-1 text-xs text-slate-200 focus:outline-none focus:border-violet-500"
              />
            </div>
            {block.secondaryCta !== undefined && (
              <div>
                <label className="block text-[10px] font-medium text-slate-400 uppercase tracking-wider mb-1">
                  Secondary Button
                </label>
                <input
                  type="text"
                  value={block.secondaryCta || ''}
                  onChange={(e) => updateField('secondaryCta', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded px-2 py-1 text-xs text-slate-200 focus:outline-none focus:border-violet-500"
                />
              </div>
            )}
          </div>
        )}

        {/* Image configurations (if hero block with visuals) */}
        {block.imageUrl !== undefined && (
          <div>
            <div className="flex items-center gap-1 text-[10px] font-medium text-slate-400 uppercase tracking-wider mb-1.5">
              <Image className="w-3 h-3 text-slate-400" /> Image Asset Link
            </div>
            <input
              type="text"
              value={block.imageUrl || ''}
              onChange={(e) => updateField('imageUrl', e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded px-2 py-1 text-xs text-slate-300 focus:outline-none focus:border-violet-500 font-mono text-[10px]"
              placeholder="Unsplash picture URL link"
            />
            {block.imageUrl && (
              <img
                src={block.imageUrl}
                alt="Mini Preview"
                referrerPolicy="no-referrer"
                className="mt-1.5 w-full h-16 object-cover rounded border border-slate-800"
              />
            )}
          </div>
        )}

        {/* Contact fields config */}
        {block.type === 'contact' && (
          <div className="p-3 bg-slate-950 rounded border border-slate-800 space-y-3">
            <div>
              <label className="block text-[10px] font-medium text-slate-400 uppercase tracking-wider mb-1">
                Contact Email Address
              </label>
              <input
                type="email"
                value={block.contactEmail || ''}
                onChange={(e) => updateField('contactEmail', e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded px-2 py-1 text-xs text-slate-200 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] font-medium text-slate-400 uppercase tracking-wider mb-1">
                Physical Workshop Location
              </label>
              <input
                type="text"
                value={block.contactAddress || ''}
                onChange={(e) => updateField('contactAddress', e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded px-2 py-1 text-xs text-slate-200 focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* List items, cards, feature tiles editing */}
        {block.items !== undefined && (
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <label className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">
                Cards / Item list ({block.items.length})
              </label>
              {block.items.length < 5 && (
                <button
                  onClick={addItem}
                  className="text-[10px] text-violet-400 hover:text-violet-300 flex items-center gap-0.5"
                >
                  <Plus className="w-3 h-3" /> Add item
                </button>
              )}
            </div>

            <div className="space-y-3">
              {block.items.map((it, idx) => (
                <div key={it.id} className="p-3 bg-slate-950 border border-slate-800 rounded space-y-2 relative group">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-slate-400">Card #{idx + 1}</span>
                    <button
                      onClick={() => removeItem(it.id)}
                      className="text-slate-600 hover:text-red-400 p-0.5 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div>
                    <input
                      type="text"
                      value={it.title || ''}
                      onChange={(e) => updateItem(it.id, { title: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded px-2 py-1 text-xs text-slate-200 focus:outline-none focus:border-violet-500 font-medium"
                      placeholder="Title"
                    />
                  </div>

                  <div>
                    <textarea
                      value={it.description || ''}
                      onChange={(e) => updateItem(it.id, { description: e.target.value })}
                      rows={2}
                      className="w-full bg-slate-900 border border-slate-800 rounded px-2 py-1 text-[11px] text-slate-300 focus:outline-none focus:border-violet-500 leading-normal"
                      placeholder="Description"
                    />
                  </div>

                  {it.price !== undefined && (
                    <div className="grid grid-cols-2 gap-1 bg-slate-900/50 p-1.5 rounded border border-slate-800/80">
                      <div>
                        <span className="text-[9px] text-slate-400 uppercase mb-0.5 block">Price</span>
                        <input
                          type="text"
                          value={it.price}
                          onChange={(e) => updateItem(it.id, { price: e.target.value })}
                          className="w-full bg-slate-900 border border-slate-800 rounded px-1.5 py-0.5 text-xs text-slate-200 focus:outline-none"
                        />
                      </div>
                      <div>
                        <span className="text-[9px] text-slate-400 uppercase mb-0.5 block">Frequency</span>
                        <input
                          type="text"
                          value={it.period}
                          onChange={(e) => updateItem(it.id, { period: e.target.value })}
                          className="w-full bg-slate-900 border border-slate-800 rounded px-1.5 py-0.5 text-xs text-slate-200 focus:outline-none"
                        />
                      </div>
                    </div>
                  )}

                  {it.role !== undefined && (
                    <div>
                      <input
                        type="text"
                        value={it.role}
                        onChange={(e) => updateItem(it.id, { role: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded px-2 py-1 text-[11px] text-slate-300 focus:outline-none"
                        placeholder="Company Role"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Specific */}
        {block.type === 'footer' && (
          <>
            <div>
              <label className="block text-[10px] font-medium text-slate-400 uppercase tracking-wider mb-1.5">
                Footer Copyright Text
              </label>
              <input
                type="text"
                value={block.logoText || ''}
                onChange={(e) => updateField('logoText', e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-violet-500"
              />
            </div>
          </>
        )}
      </div>

      {/* AI Content Copywriter */}
      {block.type !== 'navbar' && block.type !== 'footer' && (
        <div className="pt-4 mt-2 border-t border-slate-800">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-violet-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Gemini Copy Assistant
          </div>
          <div className="bg-slate-900/40 border border-slate-800 rounded-lg p-3 space-y-3.5">
            <div>
              <label className="block text-[9px] font-medium text-zinc-400 uppercase tracking-widest mb-1">
                Describe your brand / niche
              </label>
              <input
                type="text"
                placeholder="e.g., eco soap kit, minimalist keyboard"
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800/80 rounded px-2 py-1.5 text-xs text-slate-200 focus:outline-none placeholder-zinc-600"
              />
            </div>

            <div className="flex items-center justify-between gap-1">
              <div>
                <label className="text-[9px] font-medium text-zinc-400 uppercase tracking-widest block mb-1">
                  Tone Vibe
                </label>
                <select
                  value={aiTone}
                  onChange={(e) => setAiTone(e.target.value)}
                  className="bg-slate-950 border border-slate-800 text-[11px] rounded text-slate-300 py-1 px-1.5 focus:outline-none font-medium"
                >
                  <option value="saas">SaaS Technical</option>
                  <option value="creative">Creative Art</option>
                  <option value="bold">Bold Impact</option>
                  <option value="elegant">Warm Editorial</option>
                </select>
              </div>

              <button
                type="button"
                onClick={handleAiRegenerate}
                disabled={isGenerating}
                className="bg-violet-600 hover:bg-violet-700 disabled:opacity-50 text-white font-medium text-[11px] px-3 py-1.5 rounded flex items-center gap-1 mt-3.5 select-none"
              >
                {isGenerating ? (
                  <>
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-slate-300 border-t-transparent animate-spin" />
                    Drafting...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3 h-3" /> Draft Copy
                  </>
                )}
              </button>
            </div>

            {aiError && (
              <div className="text-[10px] text-amber-500 flex items-center gap-1 mt-1">
                <AlertCircle className="w-3 h-3 shrink-0" /> {aiError}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
