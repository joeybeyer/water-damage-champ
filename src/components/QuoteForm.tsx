'use client';

import { useState, useEffect, useRef } from 'react';

interface ZipData {
  city: string;
  state: string;
}

const SERVICE_TYPES = [
  'Water Damage',
  'Flood/Storm Damage',
  'Mold Remediation',
  'Sewage Cleanup',
  'Fire/Smoke Damage',
  'Other',
];

const TESTIMONIALS = [
  {
    quote: 'They arrived at 3am and had the water extracted before sunrise. Insurance handled with zero hassle.',
    name: 'Michael R.',
    location: 'Los Angeles, CA',
  },
  {
    quote: 'Found mold behind our walls with thermal imaging, removed everything, and rebuilt it better. Highly recommend.',
    name: 'Sarah T.',
    location: 'Tampa, FL',
  },
  {
    quote: 'Basement flooded during a storm. They pumped it out, dried everything, and stopped any mold. True professionals.',
    name: 'David K.',
    location: 'San Diego, CA',
  },
];

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [zipError, setZipError] = useState('');
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const startTime = useRef(Date.now());

  // Form state
  const [zip, setZip] = useState('');
  const [zipData, setZipData] = useState<ZipData | null>(null);
  const [serviceType, setServiceType] = useState('');
  const [propertyType, setPropertyType] = useState('Residential');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  // Honeypot
  const [honeypot, setHoneypot] = useState('');

  useEffect(() => {
    if (!submitted) return;
    const t = setInterval(() => {
      setTestimonialIdx((i) => (i + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => clearInterval(t);
  }, [submitted]);

  async function lookupZip(value: string) {
    if (value.length !== 5 || !/^\d+$/.test(value)) {
      setZipData(null);
      return;
    }
    try {
      const res = await fetch(`https://api.zippopotam.us/us/${value}`);
      if (!res.ok) {
        setZipError('ZIP code not found. Please check and try again.');
        setZipData(null);
        return;
      }
      const data = await res.json();
      const place = data.places[0];
      setZipData({ city: place['place name'], state: place['state abbreviation'] });
      setZipError('');
    } catch {
      setZipError('Unable to verify ZIP. You can still proceed.');
    }
  }

  function handleZipChange(v: string) {
    const digits = v.replace(/\D/g, '').slice(0, 5);
    setZip(digits);
    if (digits.length === 5) lookupZip(digits);
    else setZipData(null);
  }

  function step1Valid() {
    return zip.length === 5 && !zipError;
  }

  function step2Valid() {
    return serviceType !== '';
  }

  function step3Valid() {
    return name.trim() !== '' && email.includes('@') && phone.replace(/\D/g, '').length >= 10;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!step3Valid()) return;
    // Bot checks (client-side, also checked server-side)
    if (honeypot !== '') return;
    if (Date.now() - startTime.current < 3000) return;
    setLoading(true);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          zipCode: zip,
          city: zipData?.city || '',
          state: zipData?.state || '',
          serviceType,
          propertyType,
          honeypot,
          formTimestamp: startTime.current,
          source: typeof window !== 'undefined' ? window.location.href : '',
          referrer: typeof document !== 'undefined' ? document.referrer : '',
        }),
      });
      if (!res.ok) throw new Error('Submission failed');
    } catch (err) {
      console.error('Lead submission error:', err);
      // Still show success (don't reveal issues to user)
    }
    setLoading(false);
    setSubmitted(true);
  }

  const stepDots = [1, 2, 3];

  if (submitted) {
    return (
      <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 max-w-md mx-auto">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-[#1a237e] text-xl font-bold mb-1">Request Received!</h3>
          <p className="text-gray-500 text-sm">A specialist will contact you shortly.</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-5">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">What happens next</p>
          <ol className="space-y-2">
            {[
              'Specialist reviews your request (within 15 min)',
              'We call to confirm details and ETA',
              'Crew dispatched — typically within 2-4 hours',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="w-5 h-5 bg-[#1a237e] text-white rounded-full text-xs flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-5 text-center">
          <p className="text-sm text-gray-600 mb-1">In a rush? Call us directly:</p>
          <a href="tel:+18885109436" className="text-lg font-bold text-[#ff6600] hover:text-[#e65100]">
            (888) 510-9436
          </a>
        </div>

        <div className="border-t border-gray-100 pt-4">
          <div className="transition-all duration-500">
            <p className="text-gray-700 italic text-sm mb-2">&ldquo;{TESTIMONIALS[testimonialIdx].quote}&rdquo;</p>
            <p className="text-xs font-semibold text-[#1a237e]">— {TESTIMONIALS[testimonialIdx].name}, {TESTIMONIALS[testimonialIdx].location}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 max-w-md mx-auto">
      <h3 className="text-[#1a237e] text-2xl font-bold text-center mb-1">Get a Free Quote</h3>
      <p className="text-gray-500 text-center text-sm mb-5">Ready to speak with an expert?</p>

      {/* Progress dots */}
      <div className="flex items-center justify-center gap-3 mb-6">
        {stepDots.map((s) => (
          <div key={s} className="flex items-center gap-1">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                s < step
                  ? 'bg-green-500 text-white'
                  : s === step
                  ? 'bg-[#1a237e] text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              {s < step ? '✓' : s}
            </div>
            {s < 3 && <div className={`w-8 h-0.5 ${s < step ? 'bg-green-500' : 'bg-gray-200'}`} />}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {/* Honeypot */}
        <input
          type="text"
          name="website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          className="hidden"
          tabIndex={-1}
          aria-hidden="true"
          autoComplete="off"
        />

        {/* Step 1: ZIP */}
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1 text-sm">Your ZIP Code</label>
              <input
                type="text"
                inputMode="numeric"
                maxLength={5}
                value={zip}
                onChange={(e) => handleZipChange(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a237e] focus:border-[#1a237e] outline-none text-gray-900 text-lg tracking-widest"
                placeholder="e.g. 90210"
                required
                autoFocus
              />
              {zipError && <p className="text-red-500 text-xs mt-1">{zipError}</p>}
              {zipData && (
                <p className="text-green-600 text-xs mt-1 font-medium">
                  ✓ {zipData.city}, {zipData.state}
                </p>
              )}
            </div>
            <button
              type="button"
              disabled={!step1Valid()}
              onClick={() => setStep(2)}
              className="w-full bg-[#ff6600] hover:bg-[#e65100] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-colors text-lg"
            >
              Continue
            </button>
          </div>
        )}

        {/* Step 2: Service type + property type */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1 text-sm">Service Needed</label>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a237e] focus:border-[#1a237e] outline-none text-gray-900"
                required
              >
                <option value="">Select a service...</option>
                {SERVICE_TYPES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">Property Type</label>
              <div className="flex gap-4">
                {['Residential', 'Commercial'].map((t) => (
                  <label key={t} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="propertyType"
                      value={t}
                      checked={propertyType === t}
                      onChange={() => setPropertyType(t)}
                      className="w-4 h-4 text-[#1a237e]"
                    />
                    <span className="ml-2 text-gray-700 text-sm">{t}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 border border-gray-300 text-gray-600 font-medium py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                type="button"
                disabled={!step2Valid()}
                onClick={() => setStep(3)}
                className="flex-1 bg-[#ff6600] hover:bg-[#e65100] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Contact info */}
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1 text-sm">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a237e] outline-none text-gray-900"
                placeholder="Your name"
                required
                autoFocus
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1 text-sm">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a237e] outline-none text-gray-900"
                placeholder="you@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1 text-sm">Phone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a237e] outline-none text-gray-900"
                placeholder="(888) 510-9436"
                required
              />
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-1/3 border border-gray-300 text-gray-600 font-medium py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={!step3Valid() || loading}
                className="flex-1 bg-[#ff6600] hover:bg-[#e65100] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Schedule Free Inspection'
                )}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
