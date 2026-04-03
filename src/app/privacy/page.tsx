import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Water Damage Champ',
  description: 'Privacy Policy for Water Damage Champ. Learn how we collect, use, and protect your personal information.',
  alternates: { canonical: 'https://www.waterdamagechamp.com/privacy' },
};

export default function PrivacyPage() {
  const lastUpdated = 'April 2, 2026';

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4">
        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-[#1a237e]">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Privacy Policy</span>
        </nav>

        <h1 className="text-4xl font-bold text-[#1a237e] mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: {lastUpdated}</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-[#1a237e] mb-3">1. Introduction</h2>
            <p>Water Damage Champ (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website waterdamagechamp.com (the &ldquo;Site&rdquo;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our Site or contact us for services. Please read this policy carefully. If you disagree with its terms, please discontinue use of the Site.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a237e] mb-3">2. Information We Collect</h2>
            <p className="mb-3"><strong>Information you provide directly:</strong></p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Name, phone number, and email address when you submit a quote request or contact form</li>
              <li>ZIP code and service address to determine service availability</li>
              <li>Description of your water damage, mold, or restoration needs</li>
            </ul>
            <p className="mb-3"><strong>Information collected automatically:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>IP address, browser type, and operating system</li>
              <li>Pages visited, time spent on pages, and referring URLs</li>
              <li>Device identifiers and cookie data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a237e] mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Respond to your service inquiries and schedule estimates</li>
              <li>Dispatch restoration technicians to your property</li>
              <li>Process and coordinate insurance claims on your behalf</li>
              <li>Send service confirmations, updates, and follow-up communications</li>
              <li>Improve our website and service offerings</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a237e] mb-3">4. Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar tracking technologies (including Google Analytics and Google Tag Manager) to analyze site traffic and improve your experience. You can control cookie settings through your browser. Disabling cookies may limit certain site functionality.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a237e] mb-3">5. Sharing Your Information</h2>
            <p className="mb-3">We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Service partners:</strong> Licensed restoration technicians and subcontractors who perform work on your property</li>
              <li><strong>Insurance companies:</strong> When you authorize us to coordinate your claim</li>
              <li><strong>Service providers:</strong> Third-party vendors who assist with website hosting, analytics, and communications</li>
              <li><strong>Legal authorities:</strong> When required by law, court order, or to protect our rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a237e] mb-3">6. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Customer service records are typically retained for seven (7) years in accordance with contractor licensing requirements in California and Florida.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a237e] mb-3">7. California Privacy Rights (CCPA)</h2>
            <p className="mb-3">If you are a California resident, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Know what personal information we collect and how it is used</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of the sale of your personal information (we do not sell personal information)</li>
              <li>Non-discrimination for exercising your privacy rights</li>
            </ul>
            <p className="mt-3">To exercise these rights, contact us at <a href="mailto:service@waterdamagechamp.com" className="text-[#ff6600] hover:underline">service@waterdamagechamp.com</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a237e] mb-3">8. Security</h2>
            <p>We implement commercially reasonable security measures to protect your information. However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security of your data.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a237e] mb-3">9. Third-Party Links</h2>
            <p>Our Site may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a237e] mb-3">10. Children&apos;s Privacy</h2>
            <p>Our Site is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a237e] mb-3">11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of material changes by updating the &ldquo;Last updated&rdquo; date at the top of this page. Continued use of the Site after changes constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a237e] mb-3">12. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, contact us at:</p>
            <div className="mt-3 space-y-1">
              <p><strong>Water Damage Champ</strong></p>
              <p>5042 Wilshire Blvd #600, Los Angeles, CA 90036</p>
              <p>Email: <a href="mailto:service@waterdamagechamp.com" className="text-[#ff6600] hover:underline">service@waterdamagechamp.com</a></p>
              <p>Phone: <a href="tel:+18885109436" className="text-[#ff6600] hover:underline">(888) 510-9436</a></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
