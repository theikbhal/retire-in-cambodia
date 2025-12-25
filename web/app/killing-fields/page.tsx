import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'The Killing Fields (Choeung Ek) | History',
    description: 'Visiting Choeung Ek Genocidal Center given the history of the Khmer Rouge.',
};

export default function KillingFieldsPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/phnom-penh" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Phnom Penh Guide
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-gray-200 text-gray-800 text-sm font-semibold mb-4">
                    Historical Site
                </span>
                <h1 className="text-4xl font-extrabold mb-6">The Killing Fields (Choeung Ek) 🥀</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <blockquote className="text-xl italic text-gray-700 border-l-4 border-gray-500 pl-4 mb-6">
                        "It's extremely harrowing... the first thing you think of is obviously the history of the country... but you have to go."
                    </blockquote>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">The Experience</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Located about 15km from Phnom Penh, this was an execution site. Today, it is a peaceful memorial marked by a Buddhist stupa filled with skulls.
                    </p>

                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <span className="text-2xl">🎧</span>
                            <p className="text-gray-700 text-sm">
                                <strong>The Audio Tour is Essential:</strong> It is widely considered one of the best audio guides in the world, narrating the history as you walk the quiet paths.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-2xl">🕊️</span>
                            <p className="text-gray-700 text-sm">
                                <strong>Respectful Reflection:</strong> It serves as a reminder of the resilience of the Cambodian people.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
