import express from "express";
import path from "path";
import fs from "fs";
import nodemailer from "nodemailer";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";
import { DEFAULT_CHARTGPT_WEBSITE } from "./template";
import { LUXURY_PALETTES, getThemedStyleTagInner } from "./palettes";
import { EMAIL_MARKETING_AGENCY_HTML, KLAVIYO_AGENCY_HTML } from "./seoPages";

const LEADS_FILE = path.join(process.cwd(), "leads.json");
const ANALYTICS_FILE = path.join(process.cwd(), "analytics.json");

// Configure nodemailer transporter using environment variables with graceful fallback
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587", 10),
  secure: process.env.SMTP_SECURE === "true" || process.env.SMTP_PORT === "465",
  auth: {
    user: process.env.SMTP_USER || process.env.EMAIL_USER || "kavyareddy.yaramala@gmail.com",
    pass: process.env.SMTP_PASS || process.env.EMAIL_PASS || "",
  },
});

async function sendLeadEmail(lead: any) {
  try {
    const toEmail = process.env.LEAD_NOTIFY_EMAIL || "services@mail-bench.com";
    const mailOptions = {
      from: process.env.SMTP_FROM || `"MailBench Inbound" <${process.env.SMTP_USER || "no-reply@mailbenchagency.com"}>`,
      to: toEmail,
      subject: `🌟 New Premium Lead Captured - ${lead.company || lead.name}`,
      text: `New Lead Captured on MailBench:

Name: ${lead.name}
Email: ${lead.email}
Phone: ${lead.phone || "Not Provided"}
Company: ${lead.company || "Not Provided"}
Industry: ${lead.industry || "Not Provided"}
Service Interested: ${lead.serviceInterested || "Not Provided"}
Biggest Challenge: ${lead.biggestChallenge || "Not Provided"}
Monthly Revenue: ${lead.monthlyRevenue || "Not Provided"}
Timestamp: ${lead.timestamp}
`,
      html: `
        <div style="font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e1ddd4; border-radius: 16px; background: #fffaf3; color: #201b16;">
          <div style="border-bottom: 2px solid #bd8a5f; padding-bottom: 12px; margin-bottom: 18px;">
            <span style="font-size: 11px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: #6e4c38;">MailBench Inbound Notification</span>
            <h2 style="font-size: 22px; margin: 6px 0 0 0; color: #201b16;">New DTC Brand Inquiry</h2>
          </div>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr style="border-bottom: 1px solid #ede1d3;">
              <td style="padding: 10px 0; font-weight: 700; color: #71665b; width: 35%;">Full Name</td>
              <td style="padding: 10px 0; color: #201b16; font-weight: 600;">${lead.name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ede1d3;">
              <td style="padding: 10px 0; font-weight: 700; color: #71665b;">Email Address</td>
              <td style="padding: 10px 0; color: #201b16;"><a href="mailto:${lead.email}" style="color: #6e4c38; text-decoration: none; font-weight: 600;">${lead.email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #ede1d3;">
              <td style="padding: 10px 0; font-weight: 700; color: #71665b;">Phone</td>
              <td style="padding: 10px 0; color: #201b16;">${lead.phone || "Not Provided"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ede1d3;">
              <td style="padding: 10px 0; font-weight: 700; color: #71665b;">Company / Brand</td>
              <td style="padding: 10px 0; color: #201b16; font-weight: 600;">${lead.company || "Not Provided"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ede1d3;">
              <td style="padding: 10px 0; font-weight: 700; color: #71665b;">Industry Segment</td>
              <td style="padding: 10px 0; color: #201b16;">${lead.industry || "Not Provided"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ede1d3;">
              <td style="padding: 10px 0; font-weight: 700; color: #71665b;">Service Interested</td>
              <td style="padding: 10px 0; color: #201b16; font-weight: 600;">${lead.serviceInterested || "Not Provided"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ede1d3;">
              <td style="padding: 10px 0; font-weight: 700; color: #71665b;">Biggest Challenge</td>
              <td style="padding: 10px 0; color: #201b16;">${lead.biggestChallenge || "Not Provided"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ede1d3;">
              <td style="padding: 10px 0; font-weight: 700; color: #71665b;">Monthly Revenue</td>
              <td style="padding: 10px 0; color: #201b16;">${lead.monthlyRevenue || "Not Provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 700; color: #71665b;">Timestamp</td>
              <td style="padding: 10px 0; color: #9b8b7a; font-size: 12px;">${lead.timestamp}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e1ddd4; text-align: center; font-size: 12px; color: #9b8b7a;">
            Sent automatically by MailBench Agency Platform
          </div>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("[Nodemailer] Lead notification email delivered successfully:", info.messageId);
    return info;
  } catch (error) {
    console.error("[Nodemailer] Error sending lead notification email:", error);
    return null;
  }
}

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
      phone: "+1 (555) 349-2041",
      company: "Lace Rose Beauty",
      industry: "Beauty & Cosmetics",
      purpose: "Email Marketing",
      serviceInterested: "Klaviyo Flow Optimization",
      biggestChallenge: "Low welcome flow conversion rate",
      monthlyRevenue: "$50k - $100k",
      timestamp: new Date(Date.now() - 36 * 3600 * 1000).toISOString()
    },
    {
      id: "lead-2",
      name: "Arthur Pendelton",
      email: "arthur@purelyvital.co",
      phone: "+1 (555) 882-9103",
      company: "Purely Vital Supplements",
      industry: "Wellness & Routines",
      purpose: "Customer Retention",
      serviceInterested: "Full Retention Lifecycle",
      biggestChallenge: "Second purchase repeat rate drop-off",
      monthlyRevenue: "$100k - $250k",
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
  const PORT = Number(process.env.PORT) || 3000;

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

  // API 4: Capture premium inquiry submissions & notify user via nodemailer email delivery
  app.post("/api/leads", async (req, res) => {
    const { name, email, phone, company, industry, serviceInterested, biggestChallenge, monthlyRevenue } = req.body;
    
    if (!name || !email) {
      return res.status(400).json({ error: "Name and Email are required fields." });
    }

    const leads = readLeads();
    const newLead = {
      id: "lead-" + Date.now().toString(36),
      name,
      email,
      phone: phone || "Not Provided",
      company: company || "Not Provided",
      industry: industry || "Not Provided",
      serviceInterested: serviceInterested || "Not Provided",
      biggestChallenge: biggestChallenge || "Not Provided",
      monthlyRevenue: monthlyRevenue || "Not Provided",
      timestamp: new Date().toISOString()
    };

    leads.unshift(newLead);
    writeLeads(leads);

    // Actual email delivery via nodemailer
    await sendLeadEmail(newLead);

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

  // API 4.5: Chat with MailBench AI Strategist
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
          systemInstruction: "You are the 'MailBench AI Retention Strategist', representing MailBench (the premier Klaviyo Email & SMS Marketing agency for high-growth DTC ecommerce brands) working alongside Founder Kavya Reddy. Your responses must be in simple, plain, easy-to-understand English. Always keep your replies concise, consultative, and insightful (maximum 2 to 3 concise bullet remarks or short sentences). If a customer chats without providing their store or brand details, answer their questions clearly about DTC email/SMS flows (welcome series, abandoned checkout, browse abandonment, post-purchase, winbacks, VIP retention), and casually ask for their brand name, store URL, or monthly revenue stage. If they provide details, highlight high-impact retention opportunities. CRITICAL: At the very end of every single response, you must generate 2 to 3 short, clickable follow-up suggestions enclosed in brackets like: '[Suggest: What Klaviyo flows do we need? | How to increase repeat purchase rate? | Book a call with Kavya Reddy]'. Keep the suggestions relevant to the conversation.",
          temperature: 0.6,
        }
      });

      const replyText = response.text || "Hello! I am the MailBench Retention Strategist. We help DTC brands scale repeat revenue through high-converting Klaviyo email and SMS flows. How can I help your brand today?";
      res.json({ reply: replyText });
    } catch (err: any) {
      console.error("MailBench AI Chat Strategy Error:", err);
      res.status(500).json({ error: "My apologies. The MailBench strategy advisor is briefly reconnecting. Please feel free to book a direct discovery call with our team!" });
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

  // Shared Request Handler: Generates complete MailBench HTML with active theme
  const renderMailBenchHTML: express.RequestHandler = (req, res) => {
    // Optional override via query string e.g., /fullview?palette=mykonos-olive-limestone
    const queryPaletteId = req.query.palette as string;
    const activeId = queryPaletteId || globalState.activePaletteId;
    const palette = LUXURY_PALETTES.find(p => p.id === activeId) || LUXURY_PALETTES[0];

    // CSS styling rules
    const styleRules = getThemedStyleTagInner(palette);
    const themedStyle = `
    <style id="studio-color-repaint-overrides">
    ${styleRules}
    </style>
    `;

    let cleanCode = typeof globalState?.htmlCode === "string" ? globalState.htmlCode.trim() : "";
    if (!cleanCode) {
      cleanCode = DEFAULT_CHARTGPT_WEBSITE;
    }

    const includesTailwind = cleanCode.toLowerCase().includes("tailwindcss") || cleanCode.toLowerCase().includes("cdn.tailwindcss.com");
    const tailwindScriptTag = !includesTailwind 
      ? '<script src="https://cdn.tailwindcss.com"></script>\n<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">'
      : '';

    let compiledHTML = "";
    if (/<\/head>/i.test(cleanCode)) {
      compiledHTML = cleanCode.replace(/<\/head>/i, `    ${tailwindScriptTag}\n    ${themedStyle}\n</head>`);
    } else if (/<head>/i.test(cleanCode)) {
      compiledHTML = cleanCode.replace(/<head>/i, `<head>\n    ${tailwindScriptTag}\n    ${themedStyle}`);
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

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.send(compiledHTML);
  };

  // Helper to compile themed HTML for dedicated agency pages
  const compilePageHTML = (rawHtml: string, req: express.Request) => {
    const queryPaletteId = req.query.palette as string;
    const activeId = queryPaletteId || globalState.activePaletteId;
    const palette = LUXURY_PALETTES.find(p => p.id === activeId) || LUXURY_PALETTES[0];

    const styleRules = getThemedStyleTagInner(palette);
    const themedStyle = `
    <style id="studio-color-repaint-overrides">
    ${styleRules}
    </style>
    `;

    const includesTailwind = rawHtml.toLowerCase().includes("tailwindcss") || rawHtml.toLowerCase().includes("cdn.tailwindcss.com");
    const tailwindScriptTag = !includesTailwind 
      ? '<script src="https://cdn.tailwindcss.com"></script>\n<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">'
      : '';

    if (/<\/head>/i.test(rawHtml)) {
      return rawHtml.replace(/<\/head>/i, `    ${tailwindScriptTag}\n    ${themedStyle}\n</head>`);
    } else if (/<head>/i.test(rawHtml)) {
      return rawHtml.replace(/<head>/i, `<head>\n    ${tailwindScriptTag}\n    ${themedStyle}`);
    }
    return rawHtml;
  };

  const renderEmailMarketingAgencyHTML: express.RequestHandler = (req, res) => {
    const compiled = compilePageHTML(EMAIL_MARKETING_AGENCY_HTML, req);
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.send(compiled);
  };

  const renderKlaviyoAgencyHTML: express.RequestHandler = (req, res) => {
    const compiled = compilePageHTML(KLAVIYO_AGENCY_HTML, req);
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.send(compiled);
  };

  // Serve static files from public folder (robots.txt, sitemap.xml, etc.) in both dev & prod
  const publicPath = path.join(process.cwd(), "public");
  app.use(express.static(publicPath, { index: false }));

  app.get("/robots.txt", (req, res) => {
    res.type("text/plain");
    res.sendFile(path.join(publicPath, "robots.txt"));
  });

  app.get("/sitemap.xml", (req, res) => {
    res.type("application/xml");
    res.sendFile(path.join(publicPath, "sitemap.xml"));
  });

  // Client Full-Screen/Smartphone Instant View Engine & Direct Public Homepage
  app.get("/", renderMailBenchHTML);
  app.get("/fullview", renderMailBenchHTML);

  // Dedicated SEO Service Agency Pages (Complete Native HTML, No Iframes)
  app.get("/email-marketing-agency", renderEmailMarketingAgencyHTML);
  app.get("/klaviyo-agency", renderKlaviyoAgencyHTML);

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
