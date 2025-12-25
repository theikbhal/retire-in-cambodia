import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Where to Start? | Phnom Penh vs Siem Reap',
    description: 'Why you should start in the capital (Phnom Penh) to get the "madness" out of the way before relaxing in Siem Reap.',
};

export default function StartInCapitalPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-800 text-sm font-semibold mb-4">
                    Travel Strategy
                </span>
                <h1 className="text-4xl font-extrabold mb-6">Start in the Capital 🏙️</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <blockquote className="text-xl italic text-gray-700 border-l-4 border-indigo-500 pl-4 mb-6">
                        "I would always say start off in the capital because you're going to get the madness of a major city out of the way first."
                    </blockquote>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">The Logic</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Phnom Penh is the hub. It has the flights, the history (Killing Fields), and the energy.
                        By starting there, you:
                    </p>
                    <ul className="list-disc pl-5 space-y-3 text-gray-700 mb-6">
                        <li><strong>Get connected quickly:</strong> Major flight hubs and transport links.</li>
                        <li><strong>See the history:</strong> Understand the country's past at the museums.</li>
                        <li><strong>Appreciate the quiet later:</strong> After the "madness" of the capital, arriving in Siem Reap will feel like a breath of fresh air.</li>
                    </ul>

                    <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                        <h3 className="font-bold text-indigo-900 mb-2">Then Work Your Way Out</h3>
                        <p className="text-indigo-800 text-sm">
                            Once you're done with the capital, "work your way out of the cities." Head to Siem Reap for culture, or Kampot for the river life.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
