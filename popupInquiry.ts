import nodemailer from 'nodemailer';
import express from 'express';
export const POPUP_RECIPIENT = 'services@mail-bench.com';
type PopupOptions = { env?: Record<string, string | undefined>; sendMail?: (message: any) => Promise<any>; now?: () => number };
export function createPopupInquiryHandler(options: PopupOptions = {}) {
  const env = options.env || process.env, now = options.now || Date.now;
  const attempts = new Map<string, { count: number; until: number }>();
  let transporter: any;
  return async (req: any, res: any) => {
    res.setHeader('Cache-Control', 'no-store');
    const body = req.body || {}, name = typeof body.name === 'string' ? body.name.trim() : '', company = typeof body.company === 'string' ? body.company.trim() : '', email = typeof body.email === 'string' ? body.email.trim() : '';
    if (body.website || !name || name.length > 120 || !company || company.length > 160 || email.length > 254 || !/^[^\s<>@]+@[^\s<>@]+\.[^\s<>@]+$/.test(email) || /[\r\n\0]/.test(name + company + email)) return res.status(400).json({ delivered: false, error: 'Check your name, company, and email.' });
    const key = req.ip || req.socket?.remoteAddress || 'unknown', time = now();
    if (attempts.size > 10000) for (const [ip, record] of attempts) if (record.until <= time) attempts.delete(ip);
    const record = attempts.get(key);
    if (record && record.until > time && record.count >= 5) { res.setHeader('Retry-After', String(Math.ceil((record.until - time) / 1000))); return res.status(429).json({ delivered: false, error: 'Please try again later.' }); }
    attempts.set(key, record && record.until > time ? { ...record, count: record.count + 1 } : { count: 1, until: time + 600000 });
    const host = env.SMTP_HOST, user = env.SMTP_USER, password = env.SMTP_PASS || env.SMTP_PASSWORD, from = env.SMTP_FROM || user;
    const port = Number(env.SMTP_PORT || 587);
    if (!from || /[\r\n\0]/.test(from) || (!options.sendMail && (!host || !user || !password || !Number.isInteger(port) || port < 1 || port > 65535))) return res.status(503).json({ delivered: false, error: 'Email service is not configured. Please email services@mail-bench.com.' });
    const fromAddress = (from.match(/<([^<>]+)>/)?.[1] || from).trim();
    if (!/^[^\s<>@]+@[^\s<>@]+\.[^\s<>@]+$/.test(fromAddress)) return res.status(503).json({ delivered: false, error: 'Email service is not configured.' });
    try {
      if (!options.sendMail && !transporter) transporter = nodemailer.createTransport({ host, port, secure: port === 465, requireTLS: port !== 465, auth: { user, pass: password }, connectionTimeout: 10000, greetingTimeout: 10000, socketTimeout: 15000, disableFileAccess: true, disableUrlAccess: true });
      const message = { from, to: POPUP_RECIPIENT, replyTo: email, envelope: { from: fromAddress, to: [POPUP_RECIPIENT] }, subject: 'New MailBench website inquiry', text: ['New website popup inquiry', '', 'Name: ' + name, 'Company: ' + company, 'Email: ' + email, '', 'Source: 10-second website popup'].join('\n') };
      const info = await (options.sendMail ? options.sendMail(message) : transporter.sendMail(message));
      const accepted = (info.accepted || []).map((item: any) => String(typeof item === 'string' ? item : item.address).toLowerCase());
      if (!accepted.includes(POPUP_RECIPIENT)) throw new Error('Notification recipient was not accepted');
      return res.status(200).json({ delivered: true });
    } catch { return res.status(503).json({ delivered: false, error: 'Unable to send your details. Please email services@mail-bench.com.' }); }
  };
}
export function installPopupInquiryRoute(app: any) {
  app.post('/api/popup-inquiries', express.json({ limit: '10kb' }), createPopupInquiryHandler());
}
