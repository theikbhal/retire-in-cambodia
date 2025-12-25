import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Our Favorite Foods | Retiree Top Picks',
    description: 'The top rated dishes by retirees living in Siem Reap.',
};

export default function FavoriteFoodPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <h1 className="text-4xl font-extrabold mb-6">Our Absolute Favorites 🏆</h1>

                <div className="prose prose-lg text-gray-700 mb-8">
                    <p>
                        "Also I love the noodle dishes... but I'm going to stick with two that I absolutely adore."
                    </p>
                </div>

                <div className="grid gap-6">
                    <Link href="/fish-amok" className="block group">
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-orange-400 hover:shadow-md transition-all flex items-center">
                            <div className="text-4xl mr-4 bg-orange-50 p-3 rounded-full group-hover:bg-orange-100">🐟</div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 group-hover:text-orange-600">Fish Amok</h2>
                                <p className="text-gray-600">The creamy national curry dish.</p>
                            </div>
                            <div className="ml-auto text-gray-300 group-hover:text-orange-400">→</div>
                        </div>
                    </Link>

                    <Link href="/beef-lok-lak" className="block group">
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-red-400 hover:shadow-md transition-all flex items-center">
                            <div className="text-4xl mr-4 bg-red-50 p-3 rounded-full group-hover:bg-red-100">🥩</div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 group-hover:text-red-600">Beef Lok Lak</h2>
                                <p className="text-gray-600">Tangy peppery beef stir fry.</p>
                            </div>
                            <div className="ml-auto text-gray-300 group-hover:text-red-400">→</div>
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
}
