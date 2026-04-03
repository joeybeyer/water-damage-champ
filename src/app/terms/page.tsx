import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use | Water Damage Champ',
  description: 'Terms of Use for Water Damage Champ. Please read these terms before using our website or services.',
  alternates: { canonical: 'https://www.waterdamagechamp.com/terms' },
};

export default function TermsPage() {
  const lastUpdated = 'April 2, 2026';

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4">
        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-[#1a237e]">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Terms of Use</span>
        </nav>

        <h1 className="text-4xl font-bold text-[#1a237e] mb-2">Terms of Use</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: {lastUpdated}</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-[#1a237e] mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using the website waterdamagechamp.com (the &ldquo;Site&rdquo;) operated by Water Damage Champ (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Site.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a237e] mb-3">2. Services Described</h2>
            <p>Water Damage Champ provides professional water damage restoration, mold remediation, fire damage restoration, sewage cleanup, and related services in California and Florida. Information on this Site is for general informational purposes. Actual service availability, pricing, and timelines are determined at the time of inspection and may vary based on property conditions.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a237e] mb-3">3. Use of the Site</h2>
            <p className="mb-3">You agree to use the Site only for lawful purposes. You may not:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Use the Site in any way that violates applicable laws or regulations</li>
              <li>Transmit unsolicited commercial communications</li>
              <li>Attempt to gain unauthorized access to any part of the Site or its systems</li>
              <li>Scrape, crawl, or harvest content from the Site without our express written consent</li>
              <li>Use the Site to impersonate any person or entity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a237e] mb-3">4. Quote Requests and Communications</h2>
            <p>By submitting a quote request or contact form on the Site, you consent to be contacted by Water Damage Champ via phone, email, or text message regarding your service inquiry. Standard carrier messaging and data rates may apply for text messages. You may opt out of text communications at any time by replying STOP.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a237e] mb-3">5. Intellectual Property</h2>
            <p>All content on the Site — including text, images, logos, graphics, and code — is the property of Water Damage Champ or its content suppliers and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a237e] mb-3">6. Disclaimer of Warranties</h2>
            <p>The Site and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a237e] mb-3">7. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Water Damage Champ shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Site or reliance on information contained herein. Our total liability to you for any claim arising from use of the Site shall not exceed $100.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a237e] mb-3">8. Service Terms</h2>
            <p>Separate written agreements govern any restoration or remediation services we provide. These Terms of Use apply to your use of the Site only and do not constitute a service contract. All service pricing, scope of work, and warranties are set forth in written estimates and contracts provided at the time of service.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a237e] mb-3">9. Third-Party Links</h2>
            <p>The Site may contain links to third-party websites for your convenience. These links do not constitute our endorsement of those sites. We have no control over the content or practices of third-party sites and accept no responsibility for them.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a237e] mb-3">10. Governing Law</h2>
            <p>These Terms of Use are governed by the laws of the State of California without regard to its conflict of law provisions. Any disputes arising under these terms shall be resolved in the state or federal courts located in Los Angeles County, California.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a237e] mb-3">11. Changes to These Terms</h2>
            <p>We reserve the right to update these Terms of Use at any time. We will indicate the date of the most recent update at the top of this page. Continued use of the Site after any changes constitutes your acceptance of the new terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a237e] mb-3">12. Contact Us</h2>
            <p>Questions about these Terms of Use may be directed to:</p>
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
