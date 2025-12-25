import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Kampot | Riverside Town Guide',
    description: 'Why Kampot is a favorite for retirees who love the river, mountains, and pepper.',
};

export default function KampotPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/places-to-visit" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Places to Visit
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-teal-100 text-teal-800 text-sm font-semibold mb-4">
                    Riverside Gem
                </span>
                <h1 className="text-4xl font-extrabold mb-6">Kampot 🛶</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <blockquote className="text-xl italic text-gray-700 border-l-4 border-teal-500 pl-4 mb-6">
                        "We liked Kampot... I think that could be a nice place to live as well."
                    </blockquote>

                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">The Vibe</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Kampot is famous for its laid-back riverside atmosphere. It has a large expat community, though smaller than Siem Reap.
                                It feels like a "sleepy colonial old town" with hipster cafes and bars.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-teal-50 p-4 rounded-xl">
                                <h3 className="font-bold text-teal-900 mb-1">Bokor Mountain</h3>
                                <p className="text-sm text-teal-800">Famous national park with cool climate and abandoned French colonial buildings.</p>
                            </div>
                            <div className="bg-green-50 p-4 rounded-xl">
                                <h3 className="font-bold text-green-900 mb-1">Pepper Farms</h3>
                                <p className="text-sm text-green-800">Home to "Kampot Pepper", arguably the best pepper in the world.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
