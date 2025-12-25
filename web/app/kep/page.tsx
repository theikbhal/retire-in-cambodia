import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Kep | Coastal Crab Market',
    description: 'A quiet coastal town famous for blue crab. Why it is a great day trip but maybe too small for living.',
};

export default function KepPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/places-to-visit" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Places to Visit
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-4">
                    Coastal Escape
                </span>
                <h1 className="text-4xl font-extrabold mb-6">Kep 🦀</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <blockquote className="text-xl italic text-gray-700 border-l-4 border-blue-500 pl-4 mb-6">
                        "Kep was nice, but it's probably too small... nice for a visit... you've got the mountain range and the national park."
                    </blockquote>

                    <div className="space-y-6">
                        <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                            <h2 className="text-xl font-bold text-orange-900 mb-2">The Crab Market</h2>
                            <p className="text-orange-900">
                                Kep is world-famous for its Crab Market. You can buy fresh blue crabs straight from the ocean and have them cooked with Kampot pepper right there.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">Living vs Visiting</h2>
                            <p className="text-gray-700 mb-4">
                                <strong>Verdict:</strong> It is generally considered too quiet for full-time living by many retirees who prefer the amenities of Siem Reap or Kampot.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                <li><strong>Pros:</strong> Ocean breeze, fresh seafood, total silence.</li>
                                <li><strong>Cons:</strong> "Too small", limited shopping/nightlife.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
