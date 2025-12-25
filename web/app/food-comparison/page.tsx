import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Cambodian Food vs Thai & Indian | Spice & Style',
    description: 'Comparing Khmer cuisine to Thai and Indian food. Less spice, more vegetables, and different cooking styles.',
};

export default function FoodComparisonPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/food" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Food Guide
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-800 text-sm font-semibold mb-4">
                    Culinary Comparison
                </span>
                <h1 className="text-4xl font-extrabold mb-6">Cambodia vs. Thai & Indian 🌶️</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <blockquote className="text-xl italic text-gray-700 border-l-4 border-orange-500 pl-4 mb-6">
                        "To me, it's a lot like Thai food but with less spice... they use a lot more vegetables as well."
                    </blockquote>

                    <div className="space-y-8">
                        {/* Spice Level */}
                        <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                            <h2 className="text-xl font-bold text-orange-900 mb-3">🔥 The Spice Factor</h2>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="bg-white p-4 rounded-lg">
                                    <span className="block font-bold text-gray-900 mb-1">Thai / Indian 🇹🇭 🇮🇳</span>
                                    <p className="text-gray-600">Often famous for intense chili heat that can overwhelm the palate if you aren't used to it.</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg border-2 border-green-400">
                                    <span className="block font-bold text-gray-900 mb-1">Cambodian 🇰🇭</span>
                                    <p className="text-gray-600">Focuses on <strong>fragrance</strong> over heat. Uses lemongrass, kaffir lime, and turmeric. Chili is usually served on the side.</p>
                                </div>
                            </div>
                        </div>

                        {/* Vegetables */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">🥦 Vegetable Usage</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Retirees often note that Khmer dishes incorporate <strong>more fresh vegetables</strong> than their neighbors.
                                It is very difficult to find a meal that doesn't include a healthy portion of greens, cucumbers, or herbs.
                            </p>
                        </div>

                        {/* Cooking Styles */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">🍳 Cooking Styles</h2>
                            <div className="space-y-4">
                                <div className="flex gap-4 items-start">
                                    <span className="text-2xl">🥩</span>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Meat Preparation</h3>
                                        <p className="text-gray-600">Typically marinated (like in Beef Lok Lak) or steamed (like Fish Amok). It is rarely "heavy" or oily.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <span className="text-2xl">🥥</span>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Sauces</h3>
                                        <p className="text-gray-600">Coconut milk is king. It creates creamy, rich textures without the heaviness of ghee (clarified butter) used in Indian cooking.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
