import { cities } from '@/data/cities';
import ServiceCityPage, { getServiceCityMetadata } from '@/lib/ServiceCityPage';
import { Metadata } from 'next';

const SERVICE_SLUG = 'water-damage-restoration';

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  return getServiceCityMetadata(SERVICE_SLUG, params.city);
}

export default function Page({ params }: { params: { city: string } }) {
  return <ServiceCityPage serviceSlug={SERVICE_SLUG} citySlug={params.city} />;
}
