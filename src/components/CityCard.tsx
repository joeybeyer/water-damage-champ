import Link from 'next/link';

interface CityCardProps {
  slug: string;
  name: string;
  state: string;
}

export default function CityCard({ slug, name, state }: CityCardProps) {
  return (
    <Link 
      href={`/locations/${slug}`}
      className="block bg-navy-800 border border-navy-700 rounded-xl p-4 hover:border-blue-500 transition-colors"
    >
      <h3 className="text-lg font-semibold hover:text-blue-500 transition-colors">
        {name}, {state}
      </h3>
      <p className="text-gray-400 text-sm mt-1">Water Damage Restoration →</p>
    </Link>
  );
}
