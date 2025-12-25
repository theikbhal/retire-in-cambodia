import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'London vs Siem Reap | Migration Story',
    description: 'Why a Londoner chose to move to Siem Reap. A comparison of stress, cost, and safety.',
};

export default function LondonComparisonPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-800 text-sm font-semibold mb-4">
                    Case Study: UK to KH
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
                    Moving from London to Siem Reap 🇬🇧 ➡️ 🇰🇭
                </h1>

                <div className="prose prose-lg text-gray-700 mb-8">
                    <p className="lead text-xl">
                        "I couldn't wait to move out of London because it was too busy. The idea of retiring is to enjoy the relaxed life."
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <ComparisonCard
                        title="Cost of Living"
                        london=">50% of wages go to mortgage/bills."
                        siemreap="Budget for entire month < UK mortgage cost."
                        winner="siemreap"
                    />

                    <ComparisonCard
                        title="Safety & Anxiety"
                        london="Always thinking: 'Are you going to get robbed?'"
                        siemreap="'Totally safe. Never felt unsafe once.' You don't worry."
                        winner="siemreap"
                    />

                    <ComparisonCard
                        title="Pace of Life"
                        london="Fast, frantic, busy."
                        siemreap="Relaxed. 'Go with the flow.'"
                        winner="siemreap"
                    />
                </div>

                <div className="mt-12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Why the Move?</h2>
                    <p className="text-gray-700 mb-4">
                        For Dan (an ex-chef from London), the move wasn't just about saving money. It was about escaping the "busy-ness" of Western capitals.
                    </p>
                    <p className="text-gray-700">
                        <em>"Phnom Penh is extremely busy... far too busy for me. Being a Londoner, I wanted the quiet. Siem Reap is that quiet."</em>
                    </p>
                </div>
            </div>
        </main>
    );
}

function ComparisonCard({ title, london, siemreap, winner }: { title: string, london: string, siemreap: string, winner: 'london' | 'siemreap' }) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                <h3 className="font-bold text-lg text-gray-900">{title}</h3>
            </div>
            <div className="p-6 flex-grow flex flex-col gap-4">
                <div>
                    <div className="text-xs font-bold text-indigo-500 uppercase tracking-wide mb-1">London 🇬🇧</div>
                    <p className="text-gray-600 text-sm">{london}</p>
                </div>
                <div className="border-t border-gray-100 pt-4">
                    <div className="text-xs font-bold text-green-600 uppercase tracking-wide mb-1">Siem Reap 🇰🇭</div>
                    <p className="text-gray-900 font-medium">{siemreap}</p>
                </div>
            </div>
        </div>
    );
}
