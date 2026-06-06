import React, { useState, useEffect } from 'react';
import { DEFAULT_CHARTGPT_WEBSITE } from './template';
import { LUXURY_PALETTES, getThemedStyleTagInner } from './palettes';

export default function App() {
  const [bodyHtml, setBodyHtml] = useState<string>('');

  useEffect(() => {
    // 1. Establish the color palette
    const activePalette = LUXURY_PALETTES.find(p => p.id === 'mykonos-olive-limestone') || LUXURY_PALETTES[0];

    // 2. Parse the HTML code to extract style tags, links, and body content
    const parser = new DOMParser();
    const doc = parser.parseFromString(DEFAULT_CHARTGPT_WEBSITE, 'text/html');

    // 3. Inject font stylesheets and static CSS blocks into parent document head
    const parentHead = document.head;
    const existingFonts = Array.from(parentHead.querySelectorAll('link[href*="google"]'));
    if (existingFonts.length === 0) {
      doc.head.querySelectorAll('link, style').forEach((node) => {
        // Do not copy the override style if it exists
        if (node.id === 'mailbench-color-repaint-overrides') return;
        
        const clonedNode = node.cloneNode(true);
        parentHead.appendChild(clonedNode);
      });
    }

    // 4. Inject specific color repaint overrides
    const styles = getThemedStyleTagInner(activePalette);
    let styleTag = document.getElementById('mailbench-color-repaint-overrides');
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = 'mailbench-color-repaint-overrides';
      parentHead.appendChild(styleTag);
    }
    styleTag.textContent = styles;

    // 5. Extract body HTML to load natively into modern React element tree
    const rawBody = doc.body.innerHTML;
    setBodyHtml(rawBody);
  }, []);

  useEffect(() => {
    if (!bodyHtml) return;

    // 6. Append dynamic scripts directly to document body to enable cyclers, anchors and form submissions
    const scriptTagId = 'mailbench-template-scripts';
    const existingScript = document.getElementById(scriptTagId);
    if (existingScript) existingScript.remove();

    const newScript = document.createElement('script');
    newScript.id = scriptTagId;

    const startIdx = DEFAULT_CHARTGPT_WEBSITE.indexOf('<script>');
    const endIdx = DEFAULT_CHARTGPT_WEBSITE.lastIndexOf('</script>');
    
    if (startIdx !== -1 && endIdx !== -1) {
      const scriptCode = DEFAULT_CHARTGPT_WEBSITE.substring(startIdx + 8, endIdx);
      newScript.textContent = scriptCode;
      document.body.appendChild(newScript);
    }

    // 7. Track simple visitor count
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path: '/' })
    }).catch(err => console.error("Analytics ping issue:", err));

  }, [bodyHtml]);

  return (
    <div 
      id="mailbench-native-container"
      dangerouslySetInnerHTML={{ __html: bodyHtml }} 
    />
  );
}
