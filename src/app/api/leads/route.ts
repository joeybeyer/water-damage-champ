import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const DISPOSABLE_DOMAINS = new Set([
  'mailinator.com','tempmail.com','throwaway.email','guerrillamail.com',
  '10minutemail.com','trashmail.com','fakeinbox.com','getnada.com',
  'temp-mail.org','yopmail.com','sharklasers.com','maildrop.cc',
  'dispostable.com','tempail.com','tempr.email','guerrillamailblock.com',
  'grr.la','guerrillamail.info','guerrillamail.net','guerrillamail.org',
  'emailondeck.com','33mail.com','mailnesia.com','mailcatch.com',
  'discard.email','discardmail.com','mailexpire.com','throwam.com',
  'tmpmail.net','tmpmail.org','binkmail.com','suremail.info',
  'spamgourmet.com','mytemp.email','mohmal.com','tempmailo.com',
]);

function isDisposableEmail(email: string): boolean {
  const domain = email.split('@')[1]?.toLowerCase();
  return domain ? DISPOSABLE_DOMAINS.has(domain) : false;
}

function validatePhone(phone: string): { valid: boolean; reason: string } {
  const digits = phone.replace(/\D/g, '');
  if (digits.length < 10 || digits.length > 11) return { valid: false, reason: 'invalid_phone_length' };
  const areaCode = digits.length === 11 ? digits.substring(1, 4) : digits.substring(0, 3);
  if (areaCode.startsWith('0') || areaCode.startsWith('1')) return { valid: false, reason: 'invalid_area_code' };
  if (/^(\d)\1{9,}$/.test(digits)) return { valid: false, reason: 'repeated_digits' };
  if (digits.includes('1234567890') || digits.includes('0987654321')) return { valid: false, reason: 'sequential_digits' };
  if (digits.substring(digits.length - 7).startsWith('555')) return { valid: false, reason: 'fictional_number' };
  return { valid: true, reason: '' };
}

function validateName(name: string): { valid: boolean; reason: string } {
  if (name.length < 2) return { valid: false, reason: 'name_too_short' };
  if (/https?:\/\/|<|>/.test(name)) return { valid: false, reason: 'name_contains_url_or_html' };
  if (!/[aeiouAEIOU]/.test(name)) return { valid: false, reason: 'name_no_vowels' };
  if (/(.)\1{3,}/.test(name)) return { valid: false, reason: 'name_repeated_chars' };
  if (/^\d+$/.test(name)) return { valid: false, reason: 'name_only_numbers' };
  return { valid: true, reason: '' };
}

async function checkForSpam(body: Record<string, unknown>): Promise<{ isSpam: boolean; reasons: string[] }> {
  const reasons: string[] = [];
  if (body.honeypot && String(body.honeypot).trim() !== '') reasons.push('honeypot_filled');
  if (body.formTimestamp && (Date.now() - Number(body.formTimestamp) < 3000)) reasons.push('submitted_too_fast');
  if (body.email && isDisposableEmail(String(body.email))) reasons.push('disposable_email');
  if (body.phone) { const p = validatePhone(String(body.phone)); if (!p.valid) reasons.push(p.reason); }
  if (body.name) { const n = validateName(String(body.name)); if (!n.valid) reasons.push(n.reason); }
  try {
    if (body.email || body.phone) {
      const result = await db.execute({
        sql: `SELECT COUNT(*) as cnt FROM leads WHERE (email = ? OR phone = ?) AND created_at > datetime('now', '-24 hours')`,
        args: [String(body.email || ''), String(body.phone || '')],
      });
      if (Number(result.rows[0]?.cnt || 0) > 0) reasons.push('duplicate_submission');
    }
  } catch { /* DB error shouldn't block submission */ }
  return { isSpam: reasons.length > 0, reasons };
}

async function sendLeadNotification(lead: Record<string, string>) {
  try {
    await resend.emails.send({
      from: 'Water Damage Champ <leads@waterdamagechamp.com>',
      to: ['service@waterdamagechamp.com'],
      subject: `New Lead: ${lead.name} — ${lead.serviceType || 'Water Damage'} in ${lead.city || 'Unknown'}, ${lead.state || ''}`,
      html: `
        <h2>New Lead from Water Damage Champ</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${lead.name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:8px;border:1px solid #ddd;"><a href="tel:${lead.phone}">${lead.phone}</a></td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;"><a href="mailto:${lead.email}">${lead.email}</a></td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Service</td><td style="padding:8px;border:1px solid #ddd;">${lead.serviceType || 'Not specified'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Property</td><td style="padding:8px;border:1px solid #ddd;">${lead.propertyType || 'Not specified'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Location</td><td style="padding:8px;border:1px solid #ddd;">${lead.zip} — ${lead.city}, ${lead.state}</td></tr>
          <tr style="background:#f5f5f5;"><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Source Page</td><td style="padding:8px;border:1px solid #ddd;">${lead.source || 'Direct'}</td></tr>
          <tr style="background:#f5f5f5;"><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Referrer</td><td style="padding:8px;border:1px solid #ddd;">${lead.referrer || 'None'}</td></tr>
          <tr style="background:#f5f5f5;"><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">UTM Source</td><td style="padding:8px;border:1px solid #ddd;">${lead.utmSource || '—'}</td></tr>
          <tr style="background:#f5f5f5;"><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">UTM Medium</td><td style="padding:8px;border:1px solid #ddd;">${lead.utmMedium || '—'}</td></tr>
          <tr style="background:#f5f5f5;"><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">UTM Campaign</td><td style="padding:8px;border:1px solid #ddd;">${lead.utmCampaign || '—'}</td></tr>
        </table>
        <p style="margin-top:16px;color:#666;font-size:13px;">Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PT</p>
      `,
    });
  } catch (err) {
    console.error('Resend email error:', err);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const spamCheck = await checkForSpam(body);

    let utmSource = '', utmMedium = '', utmCampaign = '';
    try {
      if (body.source) {
        const url = new URL(String(body.source));
        utmSource = url.searchParams.get('utm_source') || '';
        utmMedium = url.searchParams.get('utm_medium') || '';
        utmCampaign = url.searchParams.get('utm_campaign') || '';
      }
    } catch { /* invalid URL */ }

    const result = await db.execute({
      sql: `INSERT INTO leads (name, email, phone, zip_code, city, state, service_type, property_type, message, source, referrer, utm_source, utm_medium, utm_campaign, spam, spam_reason)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      args: [
        String(body.name || ''), String(body.email || ''), String(body.phone || ''),
        String(body.zipCode || ''), String(body.city || ''), String(body.state || ''),
        String(body.serviceType || ''), String(body.propertyType || ''),
        String(body.message || ''), String(body.source || ''), String(body.referrer || ''),
        utmSource, utmMedium, utmCampaign,
        spamCheck.isSpam ? 1 : 0, spamCheck.isSpam ? spamCheck.reasons.join(', ') : null,
      ],
    });

    // Only email real leads
    if (!spamCheck.isSpam) {
      await sendLeadNotification({
        name: String(body.name || ''),
        email: String(body.email || ''),
        phone: String(body.phone || ''),
        zip: String(body.zipCode || ''),
        city: String(body.city || ''),
        state: String(body.state || ''),
        serviceType: String(body.serviceType || ''),
        propertyType: String(body.propertyType || ''),
        source: String(body.source || ''),
        referrer: String(body.referrer || ''),
        utmSource, utmMedium, utmCampaign,
      });
    } else {
      console.log(`Spam lead blocked: ${spamCheck.reasons.join(', ')}`);
    }

    // Always return success (silent spam handling)
    return NextResponse.json({ success: true, id: Number(result.lastInsertRowid) }, { status: 201 });
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json({ success: false, error: 'Something went wrong' }, { status: 500 });
  }
}
