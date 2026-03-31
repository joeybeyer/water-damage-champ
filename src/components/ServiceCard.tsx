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
      className="block bg-[#111d35] border border-[#1a2942] rounded-xl p-6 hover:border-[#2196f3] hover:shadow-xl hover:shadow-blue-600/10 hover:scale-[1.02] transition-all duration-300 group"
    >
      <div className="w-12 h-12 bg-[#2196f3]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#2196f3]/30 transition-colors">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">{name}</h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{description}</p>
    </Link>
  );
}
