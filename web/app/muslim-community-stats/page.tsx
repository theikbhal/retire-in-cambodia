import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: '300,000 Muslims in Cambodia | The 1% Challenge',
    description: 'Connecting with the Cham Muslim minority in Cambodia. A demographic breakdown and travel challenge.',
};

export default function MuslimStatsPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold mb-4">
                    Community & Demographics
                </span>
                <h1 className="text-4xl font-extrabold mb-6">300,000 People: The 1% Challenge 🕌</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <div className="bg-gray-100 p-6 rounded-xl border border-gray-200 mb-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-2">The Statistics (2019 Census)</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Cambodia has a small Muslim minority, primarily ethnic Cham and Malays. They make up about <strong>2%</strong> of the total population.
                        </p>
                        <div className="mt-4 text-4xl font-bold text-emerald-600">
                            ~311,000 People
                        </div>
                        <p className="text-sm text-gray-500 mt-1">Estimates range from 300k to 320k.</p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold text-gray-900">The "Can I Visit?" Breakdown</h2>
                        <p className="text-gray-700">
                            If you wanted to meet this community, here is what the math looks like.
                            Is it possible to connect with even 1% of them?
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                <div className="text-sm text-blue-600 font-bold uppercase">Total Population</div>
                                <div className="text-2xl font-bold text-blue-900">300,000</div>
                                <div className="text-xs text-blue-800 mt-1">100% of the Community</div>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                                <div className="text-sm text-green-600 font-bold uppercase">10% Goal</div>
                                <div className="text-2xl font-bold text-green-900">30,000</div>
                                <div className="text-xs text-green-800 mt-1">A large town's worth</div>
                            </div>
                            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                                <div className="text-sm text-yellow-600 font-bold uppercase">1% Goal</div>
                                <div className="text-2xl font-bold text-yellow-900">3,000</div>
                                <div className="text-xs text-yellow-800 mt-1">Doable! (A few large villages)</div>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                <div className="text-sm text-purple-600 font-bold uppercase">0.1% Goal</div>
                                <div className="text-2xl font-bold text-purple-900">300</div>
                                <div className="text-xs text-purple-800 mt-1">A single community event</div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-emerald-500">
                            <h3 className="font-bold text-gray-900 mb-2">How to Meet the 1% (3,000 People)</h3>
                            <p className="text-gray-700 mb-2">
                                You don't need to shake 3,000 hands. To "visit" 1% of the Muslim population, you simply need to spend time in the key Cham hubs:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                                <li><strong>Kampong Cham Province:</strong> The heartland of the Cham people. Visiting 2-3 major villages here would put you in contact with over 3,000 people.</li>
                                <li><strong>Russey Keo (Phnom Penh):</strong> The "Kilometer 9" area has a very high density of Muslims.</li>
                                <li><strong>Kampot:</strong> The salt fields and fishing villages often have Cham communities.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
