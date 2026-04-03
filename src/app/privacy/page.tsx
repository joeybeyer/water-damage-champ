import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Water Damage Champ',
  description: 'Water Damage Champ privacy policy. Learn how we collect, use, and protect your personal information when you request water damage restoration services.',
  alternates: {
    canonical: '/privacy',
  },
};

const lastUpdated = 'April 2, 2026';
const companyName = 'Water Damage Champ';
const contactEmail = 'service@waterdamagechamp.com';
const contactPhone = '(888) 510-9436';
const address = '5042 Wilshire Blvd #600, Los Angeles, CA 90036';

const faqs = [
  {
    question: 'Does Water Damage Champ sell my personal information?',
    answer: 'No. Water Damage Champ does not sell, rent, or lease your personal information to third parties for any purpose, including marketing.',
  },
  {
    question: 'What information does Water Damage Champ collect when I request a quote?',
    answer: 'When you submit a quote request, we collect your name, phone number, email address, property address, ZIP code, and a description of your water damage situation. This information is used solely to respond to your service inquiry.',
  },
  {
    question: 'How does Water Damage Champ use my information for insurance claims?',
    answer: 'When you authorize Water Damage Champ to coordinate your insurance claim, we share relevant project documentation — including photos, moisture readings, and restoration scope — directly with your insurance carrier on your behalf.',
  },
  {
    question: 'How can California residents request deletion of their data?',
    answer: 'California residents can request deletion of their personal information under the CCPA by emailing service@waterdamagechamp.com or calling (888) 510-9436. We will respond to verified deletion requests within 45 days.',
  },
  {
    question: 'How long does Water Damage Champ retain customer records?',
    answer: 'Customer project records are typically retained for seven years in accordance with California contractor recordkeeping requirements. You may request access to or deletion of your records at any time by contacting us.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.waterdamagechamp.com' },
    { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: 'https://www.waterdamagechamp.com/privacy' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export default function PrivacyPage() {
  return (
    <main className="flex-grow">
      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1a237e] to-[#0a1628] py-14">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Privacy Policy</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Privacy Policy</h1>
          <p className="text-gray-300">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Key Takeaways — bullet summary at top for AI extraction */}
      <section className="py-8 bg-blue-50 border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold text-[#1a237e] mb-3">Key Takeaways</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              'Water Damage Champ never sells or rents your personal information',
              'Information collected is used only to respond to your service request',
              'Insurance claim coordination requires your explicit authorization',
              'California residents have CCPA rights including data deletion requests',
              'Contact service@waterdamagechamp.com for any privacy questions',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                <span className="text-[#ff6600] font-bold mt-0.5 shrink-0">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none text-gray-700">

            <p className="text-lg leading-relaxed mb-8">
              {companyName} ("we," "us," or "our") operates{' '}
              <a href="https://www.waterdamagechamp.com" className="text-[#1a237e] hover:text-[#ff6600]">
                waterdamagechamp.com
              </a>{' '}
              (the "Site"). This Privacy Policy explains how we collect, use, disclose, and safeguard
              your information when you visit our Site or contact us for restoration services.
            </p>

            <h2 className="text-2xl font-bold text-[#1a237e] mt-10 mb-4">1. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Information You Provide</h3>
            <p className="mb-4">We collect information you voluntarily provide when you:</p>
            <ul className="list-disc ml-6 mb-6 space-y-2">
              <li>Submit a quote request or contact form on our Site</li>
              <li>Call our emergency line or office number</li>
              <li>Email us directly</li>
              <li>Request a property inspection or restoration estimate</li>
            </ul>
            <p className="mb-6">
              This information may include your name, email address, phone number, property address,
              ZIP code, and a description of your damage or service need.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Information Collected Automatically</h3>
            <p className="mb-4">When you visit our Site, we automatically collect:</p>
            <ul className="list-disc ml-6 mb-6 space-y-2">
              <li>IP address and general geographic location</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on those pages</li>
              <li>Referring URL</li>
              <li>Device type and operating system</li>
            </ul>
            <p className="mb-6">
              We use Google Tag Manager and Google Analytics to help us understand how visitors use
              our Site. This data is aggregated and anonymized.
            </p>

            <h2 className="text-2xl font-bold text-[#1a237e] mt-10 mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc ml-6 mb-6 space-y-2">
              <li>Respond to your service inquiries and provide restoration estimates</li>
              <li>Schedule property inspections and coordinate restoration work</li>
              <li>Communicate with you about your project status</li>
              <li>Process and coordinate with your insurance company on your behalf</li>
              <li>Send service confirmations and follow-up communications</li>
              <li>Improve our Site content and user experience</li>
              <li>Comply with applicable laws and regulations</li>
            </ul>
            <p className="mb-6">
              We do not sell, rent, or lease your personal information to third parties for their
              marketing purposes.
            </p>

            <h2 className="text-2xl font-bold text-[#1a237e] mt-10 mb-4">3. How We Share Your Information</h2>
            <ul className="list-disc ml-6 mb-6 space-y-2">
              <li><strong>Service providers:</strong> Third-party vendors who assist us in operating our Site and delivering services (e.g., email delivery, CRM, scheduling software), contractually bound to keep your information confidential.</li>
              <li><strong>Insurance companies:</strong> When you authorize us to coordinate your insurance claim, we share relevant project documentation with your carrier.</li>
              <li><strong>Subcontractors:</strong> Licensed restoration subcontractors performing work at your property as part of your restoration project.</li>
              <li><strong>Legal requirements:</strong> When required by law, court order, or governmental authority.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1a237e] mt-10 mb-4">4. Cookies</h2>
            <p className="mb-6">
              Our Site uses cookies to improve your browsing experience and analyze Site usage. We use
              essential cookies (required for functionality), analytics cookies (Google Analytics),
              and marketing cookies (Google Ads). You can instruct your browser to refuse cookies,
              though some Site features may not function properly without them.
            </p>

            <h2 className="text-2xl font-bold text-[#1a237e] mt-10 mb-4">5. Data Security</h2>
            <p className="mb-6">
              We implement appropriate technical and organizational measures to protect your personal
              information. Our Site is served over HTTPS and all form submissions are encrypted in
              transit. No method of transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-[#1a237e] mt-10 mb-4">6. Data Retention</h2>
            <p className="mb-6">
              Customer project records are typically retained for seven years in accordance with
              California contractor recordkeeping requirements. Analytics data is retained for 26
              months. You may request access to or deletion of your records at any time.
            </p>

            <h2 className="text-2xl font-bold text-[#1a237e] mt-10 mb-4">7. California Privacy Rights (CCPA)</h2>
            <p className="mb-4">As a California resident, you have the right to:</p>
            <ul className="list-disc ml-6 mb-6 space-y-2">
              <li>Know what personal information we have collected about you</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of the sale of your personal information (we do not sell personal information)</li>
              <li>Non-discrimination for exercising your privacy rights</li>
            </ul>
            <p className="mb-6">
              To exercise your California privacy rights, contact us at{' '}
              <a href={`mailto:${contactEmail}`} className="text-[#1a237e] hover:text-[#ff6600]">{contactEmail}</a>{' '}
              or call <a href="tel:+18885109436" className="text-[#1a237e] hover:text-[#ff6600]">{contactPhone}</a>.
              We will respond to verified requests within 45 days.
            </p>

            <h2 className="text-2xl font-bold text-[#1a237e] mt-10 mb-4">8. Children's Privacy</h2>
            <p className="mb-6">
              Our Site is not directed to children under 13. We do not knowingly collect personal
              information from children under 13. If you believe we have inadvertently collected
              such information, please contact us immediately.
            </p>

            <h2 className="text-2xl font-bold text-[#1a237e] mt-10 mb-4">9. Changes to This Policy</h2>
            <p className="mb-6">
              We may update this Privacy Policy from time to time. Material changes will be posted
              on this page with an updated effective date. Continued use of the Site constitutes
              acceptance of the revised policy.
            </p>

            <h2 className="text-2xl font-bold text-[#1a237e] mt-10 mb-4">10. Contact Us</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
              <p className="font-semibold text-gray-900 mb-1">{companyName}</p>
              <p className="text-gray-700 mb-1">{address}</p>
              <p className="text-gray-700 mb-1">Email: <a href={`mailto:${contactEmail}`} className="text-[#1a237e] hover:text-[#ff6600]">{contactEmail}</a></p>
              <p className="text-gray-700">Phone: <a href="tel:+18885109436" className="text-[#1a237e] hover:text-[#ff6600]">{contactPhone}</a></p>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1a237e] mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <p className="text-gray-600">Have a water emergency? We respond 24/7.</p>
          <div className="flex gap-4">
            <Link href="/contact" className="bg-[#1a237e] hover:bg-[#0a1628] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
              Contact Us
            </Link>
            <a href="tel:+18885109436" className="bg-[#ff6600] hover:bg-[#e65100] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
              (888) 510-9436
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
