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
      className="block bg-[#111d35] border border-[#1a2942] rounded-xl p-4 hover:border-[#2196f3] transition-colors"
    >
      <h3 className="text-lg font-semibold text-white hover:text-[#2196f3] transition-colors">
        {name}, {state}
      </h3>
      <p className="text-gray-400 text-sm mt-1">Water Damage Restoration →</p>
    </Link>
  );
}
