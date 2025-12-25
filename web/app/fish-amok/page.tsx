import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Fish Amok | The National Dish of Cambodia',
    description: 'Everything you need to know about Fish Amok. A creamy, steamed fish curry that is the heart of Khmer cuisine.',
};

export default function FishAmokPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/food" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Food Guide
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-800 text-sm font-semibold mb-4">
                    National Dish
                </span>
                <h1 className="text-4xl font-extrabold mb-6">Fish Amok 🐟</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <div className="text-6xl text-center mb-6">🍛</div>
                    <blockquote className="text-xl italic text-gray-700 text-center mb-6">
                        "Fish Amok is one of my favorites. If you can add any dish with coconut milk, it's a winner in my eyes."
                    </blockquote>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">What is it?</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Fish Amok is a steam-cooked curry. It is <strong>not a soup</strong> and it is <strong>not fried</strong>.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
                        <li><strong>Base:</strong> Fresh river fish (usually snakehead fish/catfish)</li>
                        <li><strong>Sauce:</strong> Coconut milk, kroeung (Khmer curry paste), and egg</li>
                        <li><strong>Presentation:</strong> Traditionally steamed and served in a banana leaf bowl</li>
                        <li><strong>Flavor Profile:</strong> Creamy, fragrant, slightly sweet, non-spicy</li>
                    </ul>

                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                        <span className="font-bold text-orange-900 block mb-1">💡 Pro Tip</span>
                        <p className="text-orange-800 text-sm">
                            You can find this dish anywhere from street stalls ($2.00) to high-end restaurants ($8.00). The street version is often just as good!
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
