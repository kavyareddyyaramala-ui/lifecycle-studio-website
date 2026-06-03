import express from "express";
import path from "path";
import fs from "fs";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";
import { DEFAULT_CHARTGPT_WEBSITE } from "./template";
import { LUXURY_PALETTES, getThemedStyleTagInner } from "./palettes";
const LEADS_FILE = path.join(process.cwd(), "leads.json");
const ANALYTICS_FILE = path.join(process.cwd(), "analytics.json");

// Helper utilities to load databases with elegant fallbacks
function readLeads(): any[] {
  try {
    if (fs.existsSync(LEADS_FILE)) {
      return JSON.parse(fs.readFileSync(LEADS_FILE, "utf-8"));
    }
  } catch (error) {
    console.error("Error reading leads database:", error);
  }
  const defaultLeads = [
    {
      id: "lead-1",
      name: "Sienna Vance",
      email: "sienna@lacerosebeauty.com",
      company: "Lace Rose Beauty",
      industry: "Beauty & Cosmetics",
      purpose: "Email Marketing",
      timestamp: new Date(Date.now() - 36 * 3600 * 1000).toISOString()
    },
    {
      id: "lead-2",
      name: "Arthur Pendelton",
      email: "arthur@purelyvital.co",
      company: "Purely Vital Supplements",
      industry: "Wellness & Routines",
      purpose: "Customer Retention",
      timestamp: new Date(Date.now() - 15 * 3600 * 1000).toISOString()
    }
  ];
  try {
    fs.writeFileSync(LEADS_FILE, JSON.stringify(defaultLeads, null, 2));
  } catch (e) {
    console.error("Failed to write initial leads:", e);
  }
  return defaultLeads;
}

function writeLeads(leads: any[]) {
  try {
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
  } catch (error) {
    console.error("Error writing leads database:", error);
  }
}

function readAnalytics(): any[] {
  try {
    if (fs.existsSync(ANALYTICS_FILE)) {
      return JSON.parse(fs.readFileSync(ANALYTICS_FILE, "utf-8"));
    }
  } catch (error) {
    console.error("Error reading analytics database:", error);
  }
  const defaultAnalytics = [
    { page: "/fullview", referrer: "LinkedIn", country: "United States", device: "Desktop", timestamp: new Date(Date.now() - 48 * 3600 * 1000).toISOString() },
    { page: "/fullview", referrer: "Direct", country: "United States", device: "Mobile", timestamp: new Date(Date.now() - 42 * 3600 * 1000).toISOString() },
    { page: "/fullview", referrer: "LinkedIn", country: "Canada", device: "Mobile", timestamp: new Date(Date.now() - 36 * 3600 * 1000).toISOString() },
    { page: "/fullview", referrer: "Google Search", country: "United Kingdom", device: "Desktop", timestamp: new Date(Date.now() - 28 * 3600 * 1000).toISOString() },
    { page: "/fullview", referrer: "Instagram", country: "Australia", device: "Tablet", timestamp: new Date(Date.now() - 18 * 3600 * 1000).toISOString() },
    { page: "/fullview", referrer: "LinkedIn", country: "United States", device: "Mobile", timestamp: new Date(Date.now() - 12 * 3600 * 1000).toISOString() },
    { page: "/fullview", referrer: "Google Search", country: "Germany", device: "Desktop", timestamp: new Date(Date.now() - 6 * 3600 * 1000).toISOString() }
  ];
  try {
    fs.writeFileSync(ANALYTICS_FILE, JSON.stringify(defaultAnalytics, null, 2));
  } catch (e) {
    console.error("Failed to write initial analytics:", e);
  }
  return defaultAnalytics;
}

function writeAnalytics(visits: any[]) {
  try {
    fs.writeFileSync(ANALYTICS_FILE, JSON.stringify(visits, null, 2));
  } catch (error) {
    console.error("Error writing analytics database:", error);
  }
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // State cache stores the user's custom layout code and active color palettes
  let globalState = {
    htmlCode: DEFAULT_CHARTGPT_WEBSITE,
    activePaletteId: "mykonos-olive-limestone"
  };

  // Configure JSON and urlencoded parsers with high boundaries for custom HTML uploads
  app.use(express.json({ limit: "15mb" }));
  app.use(express.urlencoded({ limit: "15mb", extended: true }));

  // API 1: Fetch active playground layout state
  app.get("/api/state", (req, res) => {
    res.json(globalState);
  });

  // API 2: Update active playground layout state (runs instantly from React as a non-blocking request)
  app.post("/api/state", (req, res) => {
    const { htmlCode, activePaletteId } = req.body;
    if (typeof htmlCode === "string") {
      globalState.htmlCode = htmlCode;
    }
    if (typeof activePaletteId === "string") {
      globalState.activePaletteId = activePaletteId;
    }
    res.json({ success: true, updated: globalState });
  });

  // API 3: Retrieve aggregated CRM Leads & visitor analytics
  app.get("/api/dashboard", (req, res) => {
    const leads = readLeads();
    const visits = readAnalytics();
    res.json({
      leads,
      visits
    });
  });

  // API 4: Capture premium inquiry submissions & notify user via simulated email trigger
  app.post("/api/leads", (req, res) => {
    const { name, email, company, industry, serviceInterested, biggestChallenge, monthlyRevenue } = req.body;
    
    if (!name || !email) {
      return res.status(400).json({ error: "Name and Email are required fields." });
    }

    const leads = readLeads();
    const newLead = {
      id: "lead-" + Date.now().toString(36),
      name,
      email,
      company: company || "Not Provided",
      industry: industry || "Not Provided",
      serviceInterested: serviceInterested || "Not Provided",
      biggestChallenge: biggestChallenge || "Not Provided",
      monthlyRevenue: monthlyRevenue || "Not Provided",
      timestamp: new Date().toISOString()
    };

    leads.unshift(newLead);
    writeLeads(leads);

    // Simulated immediate SMTP email dispatch to user's configured email address
    console.log("=================================================");
    console.log(`[SMTP] NEW INQUIRY DISPATCHED TO: Kavyareddy.yaramala@gmail.com`);
    console.log(`Subject: 🌟 New Premium Lead Captured - ${newLead.company}`);
    console.log(`Lead Details:`);
    console.log(`- Full Name: ${newLead.name}`);
    console.log(`- Email Address: ${newLead.email}`);
    console.log(`- Brand / Company: ${newLead.company}`);
    console.log(`- Industry Segment: ${newLead.industry}`);
    console.log(`- Service Interested In: ${newLead.serviceInterested}`);
    console.log(`- Biggest Challenge: ${newLead.biggestChallenge}`);
    console.log(`- Monthly Revenue: ${newLead.monthlyRevenue}`);
    console.log(`- Timestamp: ${newLead.timestamp}`);
    console.log("=================================================");

    res.json({ 
      success: true, 
      message: "Lead recorded and notification dispatched successfully.", 
      lead: newLead 
    });
  });

  // Lazy-initialization helper to connect safely and gracefully to Google GenAI matching guidelines
  let googleGenAIInstance: any = null;
  function getGoogleGenAIClient() {
    if (!googleGenAIInstance) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        console.warn("WARNING: GEMINI_API_KEY environment variable is not defined in Settings > Secrets. Chat functionality might fallback.");
      }
      googleGenAIInstance = new GoogleGenAI({
        apiKey: apiKey || "MOCK_KEY_FOR_LINT_PURPOSES",
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
    }
    return googleGenAIInstance;
  }

  // API 4.5: Chat with AI Strategist
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Invalid messages array format." });
      }

      // Safeguard: Slice history to prevent token issues
      const history = messages.slice(-12);

      // Map roles according to GenAI expectation ("user" and "model")
      const contents = history.map((msg: any) => ({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: msg.content || "" }]
      }));

      const aiClient = getGoogleGenAIClient();
      const response = await aiClient.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contents,
        config: {
          systemInstruction: "You are the 'MailBench AI Strategist', working alongside Retention Director Kavya. Your responses must be in simple, plain, easy-to-understand English. Always keep your replies extremely short, helpful, and interesting (maximum 2 to 3 concise bullet remarks or short sentences). Never write long blocks of text. If a customer chats without providing their business details, answer their questions simply, offer smart options, and casually ask for their details (name, company name, industry, or what they are looking for). If they provide details, highlight key ideas and suggest options. CRITICAL: At the very end of every single response, you must generate 2 to 3 short, inviting follow-up questions the user is likely to want to ask next, enclosed in brackets like: '[Suggest: What is a welcome series? | How to fix abandoned cart? | Book a call with Kavya]'. This lets the customer click them instead of typing. Keep the suggestions relevant to the conversation.",
          temperature: 0.6,
        }
      });

      const replyText = response.text || "Good day. I am currently evaluating optimization profiles. Please feel free to schedule a direct consult using our Discovery Booking interface.";
      res.json({ reply: replyText });
    } catch (err: any) {
      console.error("Gemini AI Chat Strategy Error:", err);
      res.status(500).json({ error: "My apologies. The AI strategy node is currently updating. Please use our discovery call calendar instead!" });
    }
  });

  // API 5: Log webpage visitor analytics events anonymously
  app.post("/api/analytics", (req, res) => {
    const { referrer, country, device, page } = req.body;
    const visits = readAnalytics();
    const newVisit = {
      page: page || "/fullview",
      referrer: referrer || "Direct",
      country: country || "United States",
      device: device || "Desktop",
      timestamp: new Date().toISOString()
    };
    visits.push(newVisit);
    writeAnalytics(visits);
    res.json({ success: true, registered: newVisit });
  });

  // API 6: Wipe leads for clean sandbox testing
  app.post("/api/leads/clear", (req, res) => {
    fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2));
    res.json({ success: true });
  });

  // Client Full-Screen/Smartphone Instant View Engine
  app.get("/fullview", (req, res) => {
    // Optional override via query string e.g., /fullview?palette=cosmic-indigo
    const queryPaletteId = req.query.palette as string;
    const activeId = queryPaletteId || globalState.activePaletteId;
    const palette = LUXURY_PALETTES.find(p => p.id === activeId) || LUXURY_PALETTES[0];

    // CSS styling rules
    const styleRules = getThemedStyleTagInner(palette);
    const themedStyle = `
    <style id="mailbench-color-repaint-overrides">
    ${styleRules}
    </style>
    `;

    let cleanCode = globalState.htmlCode.trim();
    if (!cleanCode) {
      cleanCode = DEFAULT_CHARTGPT_WEBSITE;
    }

    const includesTailwind = cleanCode.includes("tailwindcss") || cleanCode.includes("cdn.tailwindcss.com");
    const tailwindScriptTag = !includesTailwind 
      ? '<script src="https://cdn.tailwindcss.com"></script>\n<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">'
      : '';

    let compiledHTML = "";
    if (cleanCode.includes("<head>")) {
      compiledHTML = cleanCode.replace("<head>", `<head>\n    ${tailwindScriptTag}\n    ${themedStyle}`);
    } else if (cleanCode.includes("</head>")) {
      compiledHTML = cleanCode.replace("</head>", `    ${themedStyle}\n</head>`);
    } else {
      compiledHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Themed Complete View</title>
    ${tailwindScriptTag}
    ${themedStyle}
</head>
<body class="transition-colors duration-300">
    ${cleanCode}
</body>
</html>`;
    }

    res.setHeader("Content-Type", "text/html");
    res.send(compiledHTML);
  });

  // Vite framework middleware inside dev container
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express custom server listening on port ${PORT}`);
  });
}

startServer();
