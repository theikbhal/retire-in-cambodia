import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Coconut Milk | The Winner Ingredient',
    description: 'Why coconut milk is the secret to Cambodian cuisine. "If you can add coconut milk, it is a winner."',
};

export default function CoconutMilkPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/food" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Food Guide
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-white border border-gray-200 text-gray-800 text-sm font-semibold mb-4">
                    Secret Ingredient
                </span>
                <h1 className="text-4xl font-extrabold mb-6">"If You Add Coconut Milk..." 🥥</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <div className="mb-8 text-center">
                        <blockquote className="text-2xl font-serif italic text-gray-800 mb-4">
                            "...it's a winner."
                        </blockquote>
                        <p className="text-gray-600">
                            - Dan, on the secret to his favorite Khmer dishes.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-gradient-to-r from-orange-50 to-white p-6 rounded-xl border border-orange-100">
                            <h2 className="text-xl font-bold text-gray-900 mb-2">Why It Works</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Cambodian cuisine uses coconut milk to create a rich, creamy texture without the heaviness of dairy or the oiliness of ghee.
                                It balances the spices (lemongrass, turmeric, chili) and adds a subtle sweetness.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Must-Try Coconut Dishes</h2>
                            <div className="grid gap-4">
                                <div className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg">
                                    <span className="text-2xl">🐟</span>
                                    <span className="font-bold">Fish Amok</span>
                                    <span className="text-gray-500 text-sm">- Steamed coconut curry mousse.</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg">
                                    <span className="text-2xl">🍜</span>
                                    <span className="font-bold">Nom Banh Chok</span>
                                    <span className="text-gray-500 text-sm">- Khmer noodles with green coconut fish gravy.</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg">
                                    <span className="text-2xl">🍛</span>
                                    <span className="font-bold">Khmer Chicken Curry</span>
                                    <span className="text-gray-500 text-sm">- (Kari Sach Moan) Rich red curry, served with baguette.</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg">
                                    <span className="text-2xl">🍌</span>
                                    <span className="font-bold">Chek Ktis</span>
                                    <span className="text-gray-500 text-sm">- Dessert: Bananas in tapioca and coconut milk.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
