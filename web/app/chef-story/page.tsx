import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Dan\'s Story | From London Chef to Siem Reap Retiree',
    description: 'Meet Dan, an ex-chef from London who traded the high-pressure kitchen life for the relaxed foodie paradise of Siem Reap.',
};

export default function ChefStoryPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-800 text-sm font-semibold mb-4">
                    Expat Profile
                </span>
                <h1 className="text-4xl font-extrabold mb-6">The Ex-Chef from London 👨‍🍳</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="prose prose-lg text-gray-700">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Meet Dan</h2>
                            <p>
                                Dan spent years working as a chef in the high-pressure kitchens of London.
                                The noise, the stress, and the relentless pace of the city eventually took their toll.
                            </p>
                            <blockquote className="border-l-4 border-indigo-500 pl-4 italic bg-gray-50 p-4 rounded-r-lg my-6">
                                "I couldn't wait to move out of London because it was too busy... being a Londoner, I wanted the quiet."
                            </blockquote>
                            <p>
                                He didn't just want a cheaper life; he wanted a <strong>better</strong> life. He wanted to escape the "rat race" where half his wages went to a mortgage.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">A Chef's Perspective on Khmer Food</h3>
                            <p>
                                As a culinary professional, Dan's endorsement of Cambodian food carries weight. He doesn't just eat it; he appreciates the balance of flavors.
                            </p>
                            <ul className="list-disc pl-5 mt-4 space-y-2">
                                <li><strong>Favorite Ingredient:</strong> Coconut Milk ("If you can add coconut milk to any dish, it's a winner").</li>
                                <li><strong>Top Dish:</strong> Fish Amok (for its creamy texture) and Beef Lok Lak (for the pepper sauce).</li>
                                <li><strong>Dining Out:</strong> He admits he rarely cooks at home anymore because the local food is so high-quality and affordable.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
