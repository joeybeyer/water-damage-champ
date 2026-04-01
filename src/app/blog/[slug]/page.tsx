import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from '@/data/blogPosts';
import { services } from '@/data/services';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return { title: 'Not Found' };
  return {
    title: post.metaTitle,
    description: post.metaDescription,
  };
}

function renderContent(content: string) {
  const blocks = content.split('\n\n').filter((b) => b.trim());
  return blocks.map((block, i) => {
    if (block.startsWith('## ')) {
      return (
        <h2 key={i} className="text-2xl md:text-3xl font-bold text-[#1a237e] mt-10 mb-4">
          {block.replace('## ', '')}
        </h2>
      );
    }
    if (block.startsWith('### ')) {
      return (
        <h3 key={i} className="text-xl font-semibold text-[#1a237e] mt-8 mb-3">
          {block.replace('### ', '')}
        </h3>
      );
    }
    if (block.startsWith('<table')) {
      return (
        <div
          key={i}
          className="overflow-x-auto my-8 rounded-lg shadow"
          dangerouslySetInnerHTML={{ __html: block }}
        />
      );
    }
    if (block.startsWith('- ')) {
      const items = block.split('\n').filter((l) => l.startsWith('- '));
      return (
        <ul key={i} className="list-none space-y-2 my-4 ml-4">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-2 text-gray-700">
              <span className="text-[#ff6600] font-bold mt-0.5 shrink-0">•</span>
              <span>{item.replace('- ', '')}</span>
            </li>
          ))}
        </ul>
      );
    }
    return (
      <p key={i} className="text-gray-700 mb-4 leading-relaxed">
        {block}
      </p>
    );
  });
}

const categoryColors: Record<string, string> = {
  'Water Damage': 'bg-blue-100 text-blue-800',
  'Mold': 'bg-green-100 text-green-800',
  'Fire': 'bg-red-100 text-red-800',
  'Sewage': 'bg-yellow-100 text-yellow-800',
  'Emergency': 'bg-orange-100 text-orange-800',
};

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const relatedService = services.find((s) => s.slug === post.service);
  const relatedPosts = getRelatedPosts(post);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: { '@type': 'Organization', name: 'Water Damage Champ' },
    publisher: {
      '@type': 'Organization',
      name: 'Water Damage Champ',
      logo: { '@type': 'ImageObject', url: 'https://waterdamagechamp.com/images/logo112-1024x301.png' },
    },
    url: `https://waterdamagechamp.com/blog/${post.slug}`,
    description: post.metaDescription,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterdamagechamp.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://waterdamagechamp.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://waterdamagechamp.com/blog/${post.slug}` },
    ],
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1a237e] to-[#0a1628] py-14 md:py-18">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300 truncate">{post.title}</span>
          </nav>
          <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-700'}`}>
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>Water Damage Champ</span>
            <span>·</span>
            <span>{new Date(post.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="bg-blue-50 border-b border-blue-100 py-6">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-base font-bold text-[#1a237e] mb-3">Key Takeaways</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {post.keyTakeaways.map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                <span className="text-[#ff6600] font-bold mt-0.5 shrink-0">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* Service Link */}
          {relatedService && (
            <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <p className="text-sm text-gray-600">
                Need professional help?{' '}
                <Link href={`/${relatedService.slug}`} className="text-[#1a237e] font-semibold hover:underline">
                  Learn about our {relatedService.name} services →
                </Link>
              </p>
              <a href="tel:+18885109436" className="shrink-0 bg-[#ff6600] hover:bg-[#e65100] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
                Call (888) 510-9436
              </a>
            </div>
          )}

          {/* Article Content */}
          <article className="prose-custom">
            {renderContent(post.content)}
          </article>

          {/* CTA Banner */}
          <div className="mt-12 bg-[#1a237e] rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Need Help Right Now?</h2>
            <p className="text-gray-300 mb-6">Water Damage Champ responds 24/7 across California and Florida. Free inspection, direct insurance coordination.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+18885109436" className="inline-block bg-[#ff6600] hover:bg-[#e65100] text-white font-bold px-8 py-3 rounded-lg transition-colors">
                Call (888) 510-9436
              </a>
              <Link href="/contact" className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#1a237e] font-semibold px-8 py-3 rounded-lg transition-colors">
                Get Free Quote
              </Link>
            </div>
          </div>

          {/* FAQs */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#1a237e] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {post.faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-[#1a237e] mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedPosts.map((related) => (
                  <Link key={related.slug} href={`/blog/${related.slug}`} className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-[#1a237e] transition-all">
                    <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2 ${categoryColors[related.category] ?? 'bg-gray-100 text-gray-700'}`}>
                      {related.category}
                    </span>
                    <h3 className="font-semibold text-gray-900 text-sm leading-snug">{related.title}</h3>
                    <p className="text-[#ff6600] text-xs mt-2 font-medium">Read more →</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
