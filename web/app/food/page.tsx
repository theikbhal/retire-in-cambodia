import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Khmer Food Guide | Fish Amok & Lok Lak',
    description: 'A guide to Cambodian cuisine for retirees. Top dishes to try and why dining out is cheaper than cooking.',
};

export default function FoodPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-800 text-sm font-semibold mb-4">
                    Culinary Guide
                </span>
                <h1 className="text-4xl font-extrabold mb-6">Khmer Food 🍛</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Dining Out vs Cooking</h2>
                    <p className="text-gray-700 italic border-l-4 border-orange-400 pl-4">
                        "We eat out a lot. By the time you buy your ingredients, someone's made your lunch for you... it's because it's that cheap."
                    </p>
                    <p className="mt-4 text-gray-600">
                        Unlike the West, eating at local restaurants is often cheaper than buying groceries and cooking yourself. A full meal can cost as little as <strong>$2.50</strong>.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Must-Try Dishes</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    <DishCard
                        name="Fish Amok"
                        desc="A creamy curry steamed in banana leaves. Dan's favorite: 'If you can add any dish with coconut milk, it's a winner.'"
                        icon="🐟"
                    />
                    <DishCard
                        name="Beef Lok Lak"
                        desc="Stir-fried marinated beef served with a lime and pepper dipping sauce. Unique to Cambodia."
                        icon="🥩"
                    />
                    <DishCard
                        name="Noodle Soup (Kuy Teav)"
                        desc="The classic breakfast. Rice noodles in pork broth."
                        icon="🍜"
                    />
                    <DishCard
                        name="Fresh Coconut"
                        desc="Available everywhere on the street for $0.50 - $1.00."
                        icon="🥥"
                    />
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Is it Spicy?</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Generally, <strong>no</strong>. Compared to Thai or Indian food, Khmer food uses more fragrant herbs and spices (lemongrass, kaffir lime) rather than raw chili heat. You can always add chili yourself if you want!
                    </p>
                </div>
            </div>
        </main>
    );
}

function DishCard({ name, desc, icon }: { name: string, desc: string, icon: string }) {
    return (
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <div className="text-4xl mb-3">{icon}</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{name}</h3>
            <p className="text-gray-500 text-sm">{desc}</p>
        </div>
    );
}
