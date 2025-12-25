import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Local Restaurants & Bars | Siem Reap Guide',
    description: 'Where to eat and drink in Siem Reap. Avoiding tourist traps and finding local gems.',
};

export default function RestaurantPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-yellow-100 text-yellow-800 text-sm font-semibold mb-4">
                    Eating & Drinking
                </span>
                <h1 className="text-4xl font-extrabold mb-6">Local Spots vs. Pub Street 🍻</h1>

                <div className="space-y-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">The "Pub Street" Warning</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            "If you go onto Pub Street, the main tourist area, it's going to be more expensive because it's there for tourists."
                        </p>
                        <div className="bg-red-50 text-red-800 p-4 rounded-lg text-sm">
                            <strong>Expect to pay:</strong> $5.00+ for a meal, $1.50+ for a beer.
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Local Restaurants</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            "We eat and drink mostly in local restaurants... it's not expensive whatsoever."
                        </p>
                        <div className="bg-green-50 text-green-800 p-4 rounded-lg text-sm">
                            <strong>Expect to pay:</strong> $2.00 - $3.00 for a meal, $0.75 for a beer.
                        </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                        <h3 className="font-bold text-blue-900 mb-2">Finding Gems</h3>
                        <p className="text-blue-800 text-sm">
                            Don't be afraid of the "plastic chair" places. Often run by families, these serve the most authentic Khmer food. If it's busy with locals, it's good (and safe).
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
