import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Peaceful Life in Cambodia | Stress-Free Living',
    description: 'Why retirees describe life in Cambodia as "peaceful" and "quiet". Escaping the rat race.',
};

export default function PeacefulPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl">🍃</span>
                    <h1 className="text-4xl font-extrabold">A Peaceful Life</h1>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <blockquote className="text-xl italic text-gray-700 border-l-4 border-green-500 pl-4 mb-6">
                        "It's nice and quiet. It's peaceful. You know, you don't have to worry about anything really."
                    </blockquote>

                    <div className="prose prose-lg text-gray-700">
                        <p>
                            For many retirees, the primary motivation to move is to escape the "rat race" of the West. London, New York, or Sydney can be frantic. Siem Reap is the antidote.
                        </p>
                        <p>
                            The pace of life is dictated by the sun and the seasons, not by a clock. Traffic (outside of peak school runs) is manageable, and the noise pollution is significantly lower than in neighboring capitals like Bangkok or Ho Chi Minh City.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
