interface GroundingBoxProps {
  query: string;
  answer: string;
  bullets: string[];
  source: string;
}

export default function GroundingBox({ query, answer, bullets, source }: GroundingBoxProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Answer',
    name: query,
    text: answer,
    author: { '@type': 'Organization', name: 'Water Damage Champ' },
  };

  return (
    <>
      <section
        itemScope
        itemType="https://schema.org/Answer"
        className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6"
        aria-label={`Quick answer: ${query}`}
      >
        <h2 itemProp="name" className="text-lg font-bold text-[#1a237e] mb-2">
          {query}
        </h2>
        <p itemProp="text" className="text-gray-800 font-medium mb-4">
          <strong>{answer}</strong>
        </p>
        <ul className="space-y-1.5 mb-4">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-[#ff6600] font-bold mt-0.5 shrink-0">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <cite className="text-xs text-gray-500 not-italic block">{source}</cite>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
