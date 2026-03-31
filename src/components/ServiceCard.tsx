import Link from 'next/link';

interface ServiceCardProps {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export default function ServiceCard({ slug, name, description, icon }: ServiceCardProps) {
  return (
    <Link 
      href={`/${slug}`}
      className="block bg-navy-800 border border-navy-700 rounded-xl p-6 hover:border-blue-500 transition-colors group"
    >
      <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600/30 transition-colors">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">{name}</h3>
      <p className="text-gray-400">{description}</p>
    </Link>
  );
}
