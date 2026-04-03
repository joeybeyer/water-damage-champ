import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use | Water Damage Champ',
  description: 'Terms of Use for Water Damage Champ. Read the terms governing your use of our website and water damage restoration services in California and Florida.',
  alternates: {
    canonical: '/terms',
  },
};

const lastUpdated = 'April 2, 2026';
const companyName = 'Water Damage Champ';
const contactEmail = 'service@waterdamagechamp.com';
const contactPhone = '(888) 510-9436';

const faqs = [
  {
    question: 'Does submitting a quote form on waterdamagechamp.com create a service contract?',
    answer: 'No. Submitting a quote request or calling our number does not create a contractor-client relationship. A formal written service agreement must be signed before any restoration work begins.',
  },
  {
    question: 'Are the cost estimates shown on the Water Damage Champ website binding?',
    answer: 'No. Cost ranges and timelines shown on this Site are for general informational purposes only. Actual pricing is determined after an on-site inspection and is documented in a written estimate provided before work begins.',
  },
  {
    question: 'Can I use content from the Water Damage Champ website for my own site?',
    answer: 'No. All content on waterdamagechamp.com — including text, images, and logos — is protected by copyright. Reproducing, distributing, or creating derivative works from our content without written permission is prohibited.',
  },
  {
    question: 'What law governs disputes with Water Damage Champ?',
    answer: 'These Terms are governed by the laws of the State of California. Any disputes are subject to the exclusive jurisdiction of state and federal courts located in Los Angeles County, California.',
  },
  {
    question: 'How do I report a concern about the Water Damage Champ website?',
    answer: 'Contact us at service@waterdamagechamp.com or call (888) 510-9436. We take all concerns seriously and will respond promptly.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.waterdamagechamp.com' },
    { '@type': 'ListItem', position: 2, name: 'Terms of Use', item: 'https://www.waterdamagechamp.com/terms' },
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

export default function TermsPage() {
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
            <span className="text-white">Terms of Use</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Terms of Use</h1>
          <p className="text-gray-300">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Key Takeaways — bullet summary at top for AI extraction */}
      <section className="py-8 bg-blue-50 border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold text-[#1a237e] mb-3">Key Takeaways</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              'Use of this Site is for lawful purposes only',
              'Quote requests and phone calls do not create a binding service contract',
              'All Site content is protected by copyright — do not reproduce without permission',
              'Cost estimates on this Site are informational, not binding quotes',
              'Governing law is the State of California, Los Angeles County jurisdiction',
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
              Please read these Terms of Use ("Terms") carefully before using{' '}
              <a href="https://www.waterdamagechamp.com" className="text-[#1a237e] hover:text-[#ff6600]">
                waterdamagechamp.com
              </a>{' '}
              (the "Site") operated by {companyName} ("we," "us," or "our"). By accessing or using
              our Site, you agree to be bound by these Terms. If you do not agree, please do not
              use the Site.
            </p>

            <h2 className="text-2xl font-bold text-[#1a237e] mt-10 mb-4">1. Use of the Site</h2>
            <p className="mb-4">You may use our Site for lawful purposes only. You agree not to:</p>
            <ul className="list-disc ml-6 mb-6 space-y-2">
              <li>Use the Site in any way that violates applicable federal, state, or local laws</li>
              <li>Transmit any unsolicited or unauthorized advertising or promotional material</li>
              <li>Attempt to gain unauthorized access to any part of the Site or its related systems</li>
              <li>Use automated tools to scrape, crawl, or extract data from the Site without written permission</li>
              <li>Impersonate {companyName} or any of its employees or representatives</li>
              <li>Submit false, misleading, or fraudulent information through any contact forms</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1a237e] mt-10 mb-4">2. Services and Estimates</h2>
            <p className="mb-6">
              Information on this Site — including service descriptions, cost ranges, and restoration
              timelines — is for general informational purposes only and does not constitute a
              binding estimate or contract. Actual pricing and scope of work are determined following
              an on-site inspection and are subject to a written service agreement.
            </p>
            <p className="mb-6">
              Calling our phone number or submitting a quote request does not create a
              contractor-client relationship. A formal service agreement must be signed before any
              restoration work begins.
            </p>

            <h2 className="text-2xl font-bold text-[#1a237e] mt-10 mb-4">3. Intellectual Property</h2>
            <p className="mb-6">
              The Site and its entire contents — including text, images, logos, graphics, and code
              — are owned by {companyName} or its content suppliers and are protected by United
              States and international copyright, trademark, and intellectual property laws. You may
              not reproduce, distribute, modify, create derivative works, or exploit any content
              from this Site without our prior written consent.
            </p>

            <h2 className="text-2xl font-bold text-[#1a237e] mt-10 mb-4">4. Disclaimer of Warranties</h2>
            <p className="mb-6">
              THE SITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF
              ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SITE WILL BE
              UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
              Information on this Site is for general guidance only and should not be relied upon
              as professional advice for any specific property damage situation.
            </p>

            <h2 className="text-2xl font-bold text-[#1a237e] mt-10 mb-4">5. Limitation of Liability</h2>
            <p className="mb-6">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, {companyName.toUpperCase()} AND
              ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF
              THE SITE. Our total liability for any claims arising under these Terms shall not
              exceed one hundred dollars ($100).
            </p>

            <h2 className="text-2xl font-bold text-[#1a237e] mt-10 mb-4">6. Third-Party Links</h2>
            <p className="mb-6">
              Our Site may contain links to third-party websites. We have no control over the
              content of those sites and accept no responsibility for them or for any loss or
              damage that may arise from your use of them.
            </p>

            <h2 className="text-2xl font-bold text-[#1a237e] mt-10 mb-4">7. Privacy</h2>
            <p className="mb-6">
              Your use of the Site is also governed by our{' '}
              <Link href="/privacy" className="text-[#1a237e] hover:text-[#ff6600]">Privacy Policy</Link>,
              which is incorporated into these Terms by reference.
            </p>

            <h2 className="text-2xl font-bold text-[#1a237e] mt-10 mb-4">8. Governing Law</h2>
            <p className="mb-6">
              These Terms shall be governed by and construed in accordance with the laws of the
              State of California. Any disputes arising under these Terms shall be subject to the
              exclusive jurisdiction of the state and federal courts located in Los Angeles County,
              California.
            </p>

            <h2 className="text-2xl font-bold text-[#1a237e] mt-10 mb-4">9. Changes to These Terms</h2>
            <p className="mb-6">
              We reserve the right to modify these Terms at any time. Continued use of the Site
              after changes constitutes your acceptance of the revised Terms.
            </p>

            <h2 className="text-2xl font-bold text-[#1a237e] mt-10 mb-4">10. Contact Us</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
              <p className="font-semibold text-gray-900 mb-1">{companyName}</p>
              <p className="text-gray-700 mb-1">5042 Wilshire Blvd #600, Los Angeles, CA 90036</p>
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
