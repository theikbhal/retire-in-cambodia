import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Expectation vs Reality | Retire in Cambodia',
    description: 'The honest truth about retiring in Cambodia. What people think vs what it is really like.',
};

export default function ExpectationsPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <h1 className="text-4xl font-extrabold mb-8">Expectation vs. Reality 🤔</h1>

                <div className="grid gap-6">
                    <ComparisonRow
                        topic="Cost of Living"
                        expectation="I'll examine every price tag and live on $300."
                        reality="You can live cheap, but imported wine and cheese will cost more than back home. Realistically $800+ is comfortable."
                    />
                    <ComparisonRow
                        topic="The Heat"
                        expectation="It's just like a warm summer day in Europe."
                        reality="It is unrelenting. You will sweat walking 10 minutes. AC is not a luxury, it is a necessity."
                    />
                    <ComparisonRow
                        topic="Healthcare"
                        expectation="I'll just fly to Bangkok for everything."
                        reality="Basic clinics in Siem Reap are good for cuts and flu. For heart attacks, you need insurance that covers air evacuation."
                    />
                    <ComparisonRow
                        topic="Safety"
                        expectation="It's a lawless wild west."
                        reality="It's incredibly safe for retirees. Violent crime is rare. The biggest danger is traffic accidents."
                    />
                </div>
            </div>
        </main>
    );
}

function ComparisonRow({ topic, expectation, reality }: { topic: string, expectation: string, reality: string }) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gray-100 px-6 py-3 border-b border-gray-200 font-bold text-gray-700">
                {topic}
            </div>
            <div className="grid md:grid-cols-2">
                <div className="p-6 border-b md:border-b-0 md:border-r border-gray-100">
                    <span className="block text-xs font-bold text-red-500 uppercase tracking-wide mb-2">Expectation</span>
                    <p className="text-gray-800 italic">"{expectation}"</p>
                </div>
                <div className="p-6 bg-blue-50/30">
                    <span className="block text-xs font-bold text-green-600 uppercase tracking-wide mb-2">Reality</span>
                    <p className="text-gray-800 font-medium">{reality}</p>
                </div>
            </div>
        </div>
    );
}
