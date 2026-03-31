'use client';

import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#1a2942] rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left bg-[#111d35] hover:bg-[#1a2942] transition-colors"
      >
        <span className="font-semibold">{question}</span>
        <svg 
          className={`w-5 h-5 text-[#2196f3] transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 bg-[#0a1628] text-gray-300">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

interface FAQSectionProps {
  faqs: { question: string; answer: string }[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section className="bg-[#111d35] rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}
