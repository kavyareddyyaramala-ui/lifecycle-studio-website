/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Palette, Type, Check, RefreshCw } from 'lucide-react';
import { ColorPalette, FontConfig, ThemeStyle } from '../types';
import { FONTS, PALETTES } from '../templates';

interface ThemeEditorProps {
  themeStyle: ThemeStyle;
  onChangeStyle: (style: ThemeStyle) => void;
  paletteId: string;
  onChangePalette: (paletteId: string) => void;
  onResetToTemplate: () => void;
}

export default function ThemeEditor({
  themeStyle,
  onChangeStyle,
  paletteId,
  onChangePalette,
  onResetToTemplate,
}: ThemeEditorProps) {
  const activePalette = PALETTES.find((p) => p.id === paletteId) || PALETTES[0];
  const activeFont = FONTS.find((f) => f.id === themeStyle) || FONTS[0];

  return (
    <div className="space-y-6" id="theme-editor-container">
      {/* Structural Presets */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="text-xs font-medium uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Type className="w-3.5 h-3.5" /> Aesthetic Style
          </label>
          <button
            onClick={onResetToTemplate}
            className="text-[11px] text-violet-400 hover:text-violet-300 flex items-center gap-1 bg-slate-800/80 px-2 py-1 rounded transition-colors"
            title="Reload base layout theme config"
          >
            <RefreshCw className="w-3 h-3" /> Reset Palette
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {(['saas', 'minimalist', 'brutalist', 'editorial'] as ThemeStyle[]).map((style) => {
            const fontInfo = FONTS.find((f) => f.id === style) || FONTS[0];
            const isSelected = themeStyle === style;
            return (
              <button
                key={style}
                onClick={() => onChangeStyle(style)}
                id={`btn-style-${style}`}
                className={`p-3 text-left rounded-lg border transition-all ${
                  isSelected
                    ? 'bg-slate-800/90 border-violet-500 shadow-md shadow-violet-950/20'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="text-xs font-semibold text-slate-200 capitalize mb-0.5">{style}</div>
                <div className="text-[10px] text-slate-400 truncate filter-none">{fontInfo.name}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Handcrafted Color Palettes */}
      <div>
        <label className="text-xs font-medium uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-3">
          <Palette className="w-3.5 h-3.5" /> Visual Palette
        </label>
        <div className="space-y-2">
          {PALETTES.map((palette) => {
            const isSelected = paletteId === palette.id;
            return (
              <button
                key={palette.id}
                onClick={() => onChangePalette(palette.id)}
                id={`btn-palette-${palette.id}`}
                className={`w-full p-2.5 flex items-center justify-between rounded-lg border text-left transition-all ${
                  isSelected
                    ? 'bg-slate-800/90 border-violet-500'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="text-xs font-medium text-slate-200">{palette.name}</div>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="flex items-center gap-1 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800 text-[10px]">
                    {/* Visual Color Previews */}
                    <span
                      className={`inline-block w-2.5 h-2.5 rounded-full ${
                        palette.id === 'cosmic' || palette.id === 'classic-dark' ? 'bg-[#0f111a]' : 'bg-[#fafafa]'
                      } border border-slate-600`}
                    />
                    <span
                      className={`inline-block w-2.5 h-2.5 rounded-full ${
                        palette.id === 'brutal-cyan'
                          ? 'bg-cyan-300'
                          : palette.id === 'nordic'
                          ? 'bg-slate-900'
                          : palette.id === 'cosmic'
                          ? 'bg-violet-600'
                          : palette.id === 'classic-dark'
                          ? 'bg-white'
                          : 'bg-[#403b30]'
                      }`}
                    />
                  </span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-violet-400" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Info Notice */}
      <div className="p-3.5 bg-slate-900/80 border border-slate-800 rounded-lg text-xs leading-relaxed text-slate-400">
        <span className="font-medium text-slate-300">Design Tip:</span> We automatically couple typography choices (serifs, monospace, geometric) with standard layout configurations for crisp design rhythm. Try clicking different styles above!
      </div>
    </div>
  );
}
