import React, { useState, useEffect, useRef } from 'react';
import { DEFAULT_CHARTGPT_WEBSITE } from './template';
import { ColorPalette, LUXURY_PALETTES, getThemedStyleTagInner } from './palettes';

export default function App() {
  const [htmlCode] = useState<string>(DEFAULT_CHARTGPT_WEBSITE);
  const [activePalette] = useState<ColorPalette>(
    LUXURY_PALETTES.find(p => p.id === 'mykonos-olive-limestone') || LUXURY_PALETTES[0]
  );
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Auto-generate themed HTML with styling rules injected
  const getThemedStyleTag = (palette: ColorPalette) => {
    return `
    <style id="mailbench-color-repaint-overrides">
    ${getThemedStyleTagInner(palette)}
    </style>
    `;
  };

  // Compile full document matching with styles and auto-including tailwind playscripts
  const getCompiledDocHTML = () => {
    let cleanCode = htmlCode.trim();
    if (!cleanCode) return '';
    
    // Auto-Inject Tailwind if not present
    const includesTailwind = cleanCode.includes('tailwindcss') || cleanCode.includes('cdn.tailwindcss.com');
    const tailwindScriptTag = !includesTailwind 
      ? '<script src="https://cdn.tailwindcss.com"></script>\n<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">'
      : '';

    const themedStyle = getThemedStyleTag(activePalette);

    if (cleanCode.includes('</head>')) {
      return cleanCode.replace('</head>', `    ${tailwindScriptTag}\n    ${themedStyle}\n</head>`);
    } else if (cleanCode.includes('<head>')) {
      return cleanCode.replace('<head>', `<head>\n    ${tailwindScriptTag}\n    ${themedStyle}`);
    } else {
      return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MailBench — Luxury Lifecycle & Retention Space</title>
    ${tailwindScriptTag}
    ${themedStyle}
</head>
<body class="bg-slate-50 transition-colors duration-300">
    ${cleanCode}
</body>
</html>`;
    }
  };

  // Initial / HTML structure load hook
  useEffect(() => {
    if (iframeRef.current) {
      const compiled = getCompiledDocHTML();
      const doc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
      if (doc) {
        doc.open();
        doc.write(compiled);
        doc.close();
      }
    }
  }, [htmlCode]);

  // Surgical lag-free palette shift hook
  useEffect(() => {
    if (iframeRef.current) {
      const doc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
      if (doc) {
        const existingStyleTag = doc.getElementById('mailbench-color-repaint-overrides');
        if (existingStyleTag) {
          existingStyleTag.textContent = getThemedStyleTagInner(activePalette);
          return;
        }
      }
      
      const compiled = getCompiledDocHTML();
      if (doc) {
        doc.open();
        doc.write(compiled);
        doc.close();
      }
    }
  }, [activePalette]);

  return (
    <div style={{ margin: 0, padding: 0, overflow: 'hidden', width: '100vw', height: '100vh', backgroundColor: '#fffaf3' }}>
      <iframe
        id="live-themed-sandbox"
        ref={iframeRef}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block',
          margin: 0,
          padding: 0
        }}
        title="MailBench"
      />
    </div>
  );
}
