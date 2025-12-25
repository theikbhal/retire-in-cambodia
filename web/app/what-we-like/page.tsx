import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'What We Like About Cambodia | Retiree Opinions',
    description: 'Retirees share what they love most about living in Cambodia: affordability, people, and lifestyle.',
};

export default function WhatWeLikePage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <h1 className="text-4xl font-extrabold mb-6">What We Love About Cambodia ❤️</h1>

                <div className="space-y-8">
                    <Section
                        emoji="💰"
                        title="Affordability"
                        content="It's incomparable. 'When we lived in the UK, half of our wages went just on the mortgage and bills.' In Cambodia, a full comfortable lifestyle costs less than just the housing bill back home."
                    />

                    <Section
                        emoji="😊"
                        title="The People"
                        content="'Thai people have the land of smiles, but there is just something about Cambodian people.' They are described as incredibly friendly, honest (returning lost phones), and eager to learn English from you."
                    />

                    <Section
                        emoji="🧘"
                        title="Stress-Free Living"
                        content="The biggest draw is the lack of stress. 'You don't have to worry about anything really.' It is a place where you can retire at 55 and actually know your money will last."
                    />

                    <Section
                        emoji="🍜"
                        title="The Food Culture"
                        content="From Fish Amok to Beef Lok Lak, the food is unique. 'I love coconut milk... if you can add coconut milk to any dish, it's a winner.'"
                    />
                </div>
            </div>
        </main>
    );
}

function Section({ title, content, emoji }: { title: string, content: string, emoji: string }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
            <div className="text-4xl bg-gray-50 p-3 rounded-full">{emoji}</div>
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
                <p className="text-gray-600 leading-relaxed italic">"{content}"</p>
            </div>
        </div>
    );
}
