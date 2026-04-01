import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts, BlogCategory } from '@/data/blogPosts';

export const metadata: Metadata = {
  title: 'Water Damage Blog | Expert Tips & Restoration Guides | Water Damage Champ',
  description: 'Expert water damage restoration tips, mold prevention guides, insurance advice, and industry insights from Water Damage Champ — serving California & Florida.',
};

const categoryColors: Record<string, string> = {
  'Water Damage': 'bg-blue-100 text-blue-800',
  'Mold': 'bg-green-100 text-green-800',
  'Fire': 'bg-red-100 text-red-800',
  'Sewage': 'bg-yellow-100 text-yellow-800',
  'Emergency': 'bg-orange-100 text-orange-800',
};

const categories: BlogCategory[] = ['Water Damage', 'Mold', 'Fire', 'Sewage', 'Emergency'];

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
  const featured = sorted[0];
  const rest = sorted.slice(1);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1a237e] to-[#0a1628] py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Water Damage Blog</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Expert guides on water damage restoration, mold remediation, fire recovery, and insurance — from IICRC-certified professionals serving California &amp; Florida.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-gray-200 bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-2">
          <span className="text-sm font-medium text-gray-500 self-center mr-2">Filter by topic:</span>
          {categories.map((cat) => (
            <span key={cat} className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full ${categoryColors[cat]}`}>
              {cat} ({blogPosts.filter((p) => p.category === cat).length})
            </span>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Featured Post */}
        <div className="mb-12">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Latest Article</h2>
          <Link href={`/blog/${featured.slug}`} className="group block bg-gradient-to-br from-[#1a237e] to-[#0a1628] rounded-2xl p-8 md:p-12 hover:shadow-2xl transition-shadow">
            <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${categoryColors[featured.category]}`}>
              {featured.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors leading-tight">
              {featured.title}
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl">
              {featured.metaDescription}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">
                {new Date(featured.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <span className="text-[#ff6600] font-semibold">Read article →</span>
            </div>
          </Link>
        </div>

        {/* All Posts Grid */}
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6">All Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <article key={post.slug} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-[#1a237e] transition-all flex flex-col">
              <div className="h-2 bg-gradient-to-r from-[#1a237e] to-[#2196f3]" />
              <div className="p-6 flex flex-col flex-1">
                <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 w-fit ${categoryColors[post.category]}`}>
                  {post.category}
                </span>
                <h2 className="text-lg font-bold text-gray-900 mb-3 leading-snug flex-1">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                  {post.metaDescription}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-400">
                    {new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <Link href={`/blog/${post.slug}`} className="text-[#ff6600] hover:text-[#e65100] text-sm font-semibold transition-colors">
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#1a237e] mb-3">Need Emergency Water Damage Help?</h2>
          <p className="text-gray-600 mb-6">Water Damage Champ responds 24/7 across California and Florida. IICRC-certified, free inspections.</p>
          <a href="tel:+18885109436" className="inline-block bg-[#ff6600] hover:bg-[#e65100] text-white font-bold px-8 py-3 rounded-lg transition-colors">
            Call (888) 510-9436
          </a>
        </div>
      </div>
    </div>
  );
}
