import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Actually Living Life | Quality of Life',
    description: 'The difference between existing and living. Reclaiming your time and freedom in Cambodia.',
};

export default function LivingLifePage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-800 text-sm font-semibold mb-4">
                    Quality of Life
                </span>
                <h1 className="text-4xl font-extrabold mb-6">Actually Living Life 🌱</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <blockquote className="text-2xl font-serif text-gray-800 text-center italic mb-8">
                        "I'm not just existing anymore. I'm living."
                    </blockquote>

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">The "Western" Trap</h2>
                            <p className="text-gray-700">
                                Wake up. Commute. Work. Commute. Eat. Sleep. Repeat.<br />
                                For many, that was life before Cambodia. You were "surviving" to pay bills.
                            </p>
                        </div>

                        <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                            <h2 className="text-xl font-bold text-green-900 mb-3">The Cambodian Reality</h2>
                            <p className="text-green-800 mb-4">
                                Here, you have <strong>time</strong>.
                            </p>
                            <ul className="space-y-2 text-green-900">
                                <li>✓ Time to read that book.</li>
                                <li>✓ Time to learn a language.</li>
                                <li>✓ Time to sit in a cafe for 3 hours talking to a friend.</li>
                                <li>✓ Time to swim on a Tuesday afternoon.</li>
                            </ul>
                        </div>

                        <p className="text-gray-700 font-medium">
                            This is what retirement was supposed to be. And here, it actually is.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
