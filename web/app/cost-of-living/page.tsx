import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Cost of Living in Cambodia | Real Retiree Budget',
    description: 'Real cost breakdowns from British retirees living in Siem Reap. Rent, food, and monthly budgets.',
};

export default function CostOfLivingPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <h1 className="text-4xl font-extrabold mb-6">The Real Cost of Living 💸</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <blockquote className="text-xl italic text-gray-700 border-l-4 border-green-500 pl-4 mb-6">
                        "Basically, our entire budget for a month for two of us is less than what we paid just for our mortgage in the UK. It is so, so inexpensive."
                        <span className="block text-sm text-gray-500 font-semibold mt-2 not-italic">— Dan & Alan, Retirees from UK</span>
                    </blockquote>

                    <div className="space-y-6">
                        <CostItem
                            title="Rent & Housing"
                            price="Very Reasonable"
                            details="You can find high-quality living spaces for a fraction of Western prices. Landlords are generally helpful (like Dan's amazing landlady)."
                        />
                        <CostItem
                            title="Delicious Local Food"
                            price="$2.50 per meal"
                            details="Local favorites like 'Fish Amok' can cost as little as $2.50. Eating local is the key to massive savings."
                        />
                        <CostItem
                            title="Western Mortgage Comparison"
                            price="~50% Savings"
                            details="In the UK, half of their wages went to mortgage and bills. Here, a full month's lifestyle cost less than just the housing bill back home."
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}

function CostItem({ title, price, details }: { title: string, price: string, details: string }) {
    return (
        <div className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
            <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                <span className="text-green-600 font-bold bg-green-50 px-2 py-1 rounded">{price}</span>
            </div>
            <p className="text-gray-600">{details}</p>
        </div>
    );
}
