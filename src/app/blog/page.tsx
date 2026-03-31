import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Water Damage Blog | Tips & Resources | Water Damage Champ',
  description: 'Expert water damage restoration tips, prevention guides, and industry insights from Water Damage Champ.',
};

export default function BlogPage() {
  const posts = [
    { title: '5 Signs of Hidden Water Damage in Your Home', slug: '#', date: 'March 2026', excerpt: 'Water damage isn\'t always visible. Learn the warning signs that could save you thousands in repairs.' },
    { title: 'What to Do in the First 24 Hours After Water Damage', slug: '#', date: 'March 2026', excerpt: 'Quick action is critical. Here\'s your step-by-step guide for the first day after discovering water damage.' },
    { title: 'Mold vs Mildew: How to Tell the Difference', slug: '#', date: 'February 2026', excerpt: 'Understanding the difference between mold and mildew can help you respond appropriately and protect your health.' },
    { title: 'Does Homeowner\'s Insurance Cover Water Damage?', slug: '#', date: 'February 2026', excerpt: 'Insurance coverage for water damage depends on the cause. Here\'s what\'s typically covered and what\'s not.' },
    { title: 'How to Prevent Basement Flooding', slug: '#', date: 'January 2026', excerpt: 'Proactive steps you can take to protect your basement from water intrusion and flooding.' },
    { title: 'The True Cost of Water Damage Restoration', slug: '#', date: 'January 2026', excerpt: 'What factors affect restoration costs and how to budget for unexpected water damage repairs.' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Water Damage Blog</h1>
        <p className="text-xl text-gray-600 mb-12">Expert tips, prevention guides, and restoration insights.</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article key={i} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-900 to-blue-700"></div>
              <div className="p-6">
                <span className="text-sm text-[#e65100] font-semibold">{post.date}</span>
                <h2 className="text-xl font-bold text-gray-900 mt-2 mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <span className="text-[#e65100] font-semibold">Coming Soon →</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
