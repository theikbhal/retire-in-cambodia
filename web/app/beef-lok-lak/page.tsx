import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Beef Lok Lak | Cambodia\'s Favorite Stir Fry',
    description: 'The famous tangy beef dish of Cambodia. Served with lime and pepper sauce.',
};

export default function BeefLokLakPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/food" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Food Guide
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-800 text-sm font-semibold mb-4">
                    Local Favorite
                </span>
                <h1 className="text-4xl font-extrabold mb-6">Beef Lok Lak 🥩</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <div className="text-6xl text-center mb-6">🥗</div>
                    <blockquote className="text-xl italic text-gray-700 text-center mb-6">
                        "I love the Beef Lok Lak... especially with the extra pepper that you get to throw over the beef. It is very unique to Cambodia."
                    </blockquote>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">What is it?</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Lok Lak is a stir-fried beef dish served with fresh vegetables (lettuce, cucumber, tomato) and rice.
                        The distinct flavor comes from the marinade and the dipping sauce.
                    </p>

                    <h3 className="text-lg font-bold text-gray-900 mb-2">The Secret Sauce of 'Pepper & Lime'</h3>
                    <p className="text-gray-600 mb-6">
                        The dish is always served with a small bowl of salt, crushed Kampot pepper, and fresh lime juice.
                        You dip the beef into this tangy mixture for an explosion of flavor.
                    </p>

                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                        <span className="font-bold text-red-900 block mb-1">🔥 Is it spicy?</span>
                        <p className="text-red-800 text-sm">
                            No! The black pepper provides a warmth, but it is not "chili hot". It is very palatable for Western tastes.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
