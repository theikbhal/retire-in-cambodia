import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'A Message to Cambodia | Thank You',
    description: 'A message of gratitude from retirees to the people of Cambodia.',
};

export default function MessagePage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl">🇰🇭</span>
                    <h1 className="text-4xl font-extrabold">A Message to Cambodia</h1>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <blockquote className="text-2xl font-serif italic text-blue-900 mb-8 text-center leading-relaxed">
                        "Thank you for welcoming us into your country. We promise to respect your culture, your people, and your way of life."
                    </blockquote>

                    <div className="space-y-6">
                        <p className="text-gray-700 text-lg leading-relaxed">
                            To the people of Cambodia: You have opened your homes and hearts to us.
                            We are not here to change you. We are here to learn from you, to enjoy your beautiful country, and to live in peace alongside you.
                        </p>

                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex items-center gap-4">
                            <span className="text-2xl">🙏</span>
                            <span className="text-blue-900 font-bold text-xl">Arkun Charan (Thank You Very Much)</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
