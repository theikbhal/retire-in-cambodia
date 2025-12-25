import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Retire in Siem Reap, Cambodia | $800/mo Pension Lifestyle',
  description: 'A comprehensive guide for retirees planning to live in Siem Reap. Costs, healthcare, visas, and safety ratings.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* 1. Hero Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 shadow-sm">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold tracking-wide uppercase mb-4">
            Retirement Destination
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            Siem Reap, Cambodia <span className="text-4xl">🇰🇭</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            A calm, affordable retirement city where your pension actually works.
          </p>
          <div className="bg-green-50 border border-green-100 rounded-xl p-4 inline-block mb-8">
            <p className="text-green-800 font-medium">
              Estimated Monthly Cost: <span className="font-bold text-2xl">$800 – $1,000</span>
            </p>
          </div>
          <div>
            <Link
              href="/#pricing"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200 shadow-md transform hover:-translate-y-0.5"
            >
              Get Full Retirement Guide
            </Link>
          </div>
        </div>
      </section>

      {/* 2. NomadList-style Score Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4">
          City Scores
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ScoreCard label="Cost of Living" score={9.5} color="bg-green-500" />
          <ScoreCard label="Healthcare Access" score={6.5} color="bg-yellow-500" />
          <ScoreCard label="Visa Ease" score={9.0} color="bg-green-500" />
          <ScoreCard label="Safety & Peace" score={8.5} color="bg-blue-500" />
          <ScoreCard label="English Friendly" score={7.0} color="bg-blue-400" />
          <ScoreCard label="Heat Tolerance" score={5.0} color="bg-orange-500" />
        </div>
      </section>

      {/* 3. Monthly Budget Breakdown */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 my-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Monthly Budget Breakdown
        </h2>
        <div className="overflow-hidden">
          <table className="min-w-full text-left text-sm whitespace-nowrap">
            <thead className="uppercase tracking-wider border-b-2 border-gray-100">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium text-gray-500">Expense Category</th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-500 text-right">Estimated Cost (USD)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <BudgetRow label="Rent (1-Bedroom Apartment)" value="$350 – $450" />
              <BudgetRow label="Food (Groceries & Dining Out)" value="$180 – $250" />
              <BudgetRow label="Utilities & Internet" value="$50 – $80" />
              <BudgetRow label="Healthcare (Insurance/Out of pocket)" value="$60 – $120" />
              <BudgetRow label="Transport & Misc" value="$50" />
              <tr className="bg-blue-50/50">
                <td className="px-6 py-4 font-bold text-gray-900">TOTAL ESTIMATED</td>
                <td className="px-6 py-4 font-bold text-blue-700 text-right text-lg">$800 – $1,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Who this city is for / not for */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Good For */}
          <div className="bg-green-50 p-6 rounded-xl border border-green-100">
            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
              <span className="mr-2 text-2xl">✅</span> Good For
            </h3>
            <ul className="space-y-3">
              <ListItem text="Retirees with $800–$2,000 monthly pension" type="good" />
              <ListItem text="Calm, slow lifestyle seekers" type="good" />
              <ListItem text="Long-term residence planning" type="good" />
            </ul>
          </div>

          {/* Not Ideal For */}
          <div className="bg-red-50 p-6 rounded-xl border border-red-100">
            <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
              <span className="mr-2 text-2xl">❌</span> Not Ideal For
            </h3>
            <ul className="space-y-3">
              <ListItem text="Luxury lifestyle seekers" type="bad" />
              <ListItem text="People needing advanced emergency care nearby" type="bad" />
              <ListItem text="Those who dislike constant tropical heat" type="bad" />
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Why retirees choose Siem Reap */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Why retirees choose Siem Reap
        </h2>
        <ul className="space-y-4">
          <CheckBit text="Very low cost of living allow for a comfortable life on a small pension." />
          <CheckBit text="Friendly expat community with regular meetups and social events." />
          <CheckBit text="Simple long-term visas available for retirees (ER Visa)." />
          <CheckBit text="Slow pace of life, away from the bustle of Phnom Penh." />
          <CheckBit text="USD is widely accepted, making financial management easier." />
        </ul>
      </section>

      {/* 6. Pricing CTA */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to plan your move?</h2>
          <p className="text-slate-300 text-lg mb-8">
            Get our complete "Retire in Cambodia" guide with step-by-step visa instructions,
            verified landlord contacts, and healthcare navigation.
          </p>
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 inline-block max-w-md w-full mb-8 hover:border-blue-500 transition-colors">
            <div className="text-sm text-blue-400 font-bold uppercase tracking-wide mb-2">Lifetime Access</div>
            <div className="text-5xl font-bold mb-2">$100</div>
            <p className="text-slate-400 text-sm mb-6">One-time payment, no subscriptions</p>
            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-all transform active:scale-95">
              Unlock Full Access
            </button>
          </div>
          <p className="text-xs text-slate-500">Secure payment via Stripe</p>
        </div>
      </section>

      {/* 7. Footer disclaimer */}
      <footer className="py-8 px-4 text-center border-t border-gray-200 bg-gray-50">
        <p className="text-sm text-gray-500 max-w-2xl mx-auto">
          <strong>Disclaimer:</strong> This content is for educational purposes only. Visa rules and costs can change.
          Please verify all information independently before making financial or travel decisions.
        </p>
      </footer>
    </main>
  );
}

// Helper Components

function ScoreCard({ label, score, color }: { label: string, score: number, color: string }) {
  const widthPercentage = `${score * 10}%`;

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex flex-col justify-center">
      <div className="flex justify-between items-end mb-2">
        <span className="font-medium text-gray-700">{label}</span>
        <span className="font-bold text-gray-900">{score.toFixed(1)}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full ${color}`}
          style={{ width: widthPercentage }}
        ></div>
      </div>
    </div>
  );
}

function BudgetRow({ label, value }: { label: string, value: string }) {
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 text-gray-700 font-medium">{label}</td>
      <td className="px-6 py-4 text-gray-900 text-right">{value}</td>
    </tr>
  );
}

function ListItem({ text, type }: { text: string, type: 'good' | 'bad' }) {
  return (
    <li className="flex items-start">
      <span className={`mr-2 mt-1 ${type === 'good' ? 'text-green-600' : 'text-red-500'}`}>
        ●
      </span>
      <span className="text-gray-700">{text}</span>
    </li>
  );
}

function CheckBit({ text }: { text: string }) {
  return (
    <li className="flex items-start">
      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
        <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-lg text-gray-700">{text}</span>
    </li>
  );
}
