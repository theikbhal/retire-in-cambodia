import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Adjust, Don\'t Stress | Travel Advice',
    description: 'Learning not to stress when things go wrong. Transport delays and adjusting your itinerary.',
};

export default function NoStressPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <h1 className="text-4xl font-extrabold mb-6">Adjust & Don't Stress 🧘</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <div className="mb-8">
                        <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 italic text-lg text-orange-900 mb-6">
                            "Getting angry about the bus being late isn't going to make the bus get here any quicker."
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">The "Itinerary" Trap</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Many people arrive with a rigid spreadsheet of what they will do at exactly 10:00 AM.
                            In Cambodia, this is a recipe for unhappiness.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <div className="bg-blue-100 p-2 rounded-lg text-2xl">🚌</div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg">Transport Delays</h3>
                                <p className="text-gray-600">A 4-hour journey might take 6 hours. A flat tire might happen. Use the time to read, sleep, or look out the window.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="bg-green-100 p-2 rounded-lg text-2xl">📅</div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg">Adjust the Plan</h3>
                                <p className="text-gray-600">If you miss a connection, just stay the night. You might discover a town you never intended to visit. That is often where the best memories are made.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
