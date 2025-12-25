import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Rating Cambodian People | Friendly & Honest',
    description: 'How retirees rate the local people of Cambodia. Honesty, friendliness, and helpfulness.',
};

export default function PeoplePage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <h1 className="text-4xl font-extrabold mb-6">The People: 10/10 🌟</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <p className="text-xl text-gray-700 italic border-l-4 border-yellow-400 pl-4 mb-6">
                        "Thai people, land of smiles, beautiful. There's just something about the Cambodian people... Very nice people. Very friendly. Very helpful."
                    </p>

                    <div className="space-y-6">
                        <Trait
                            title="Honesty"
                            desc="One expat shared a story of leaving a phone in a restaurant. 'The waiter ran after him... in some countries, you go back and they say sorry we don't know.'"
                            stars={5}
                        />
                        <Trait
                            title="Eagerness to Learn"
                            desc="'They want to learn from you if their English isn't very good. They want to talk to you... that improves them and makes it more welcoming.'"
                            stars={5}
                        />
                        <Trait
                            title="Helpfulness"
                            desc="Neighbors help each other. 'People are just amazing. Everyone helps each other backing cars out... just small things.'"
                            stars={5}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}

function Trait({ title, desc, stars }: { title: string, desc: string, stars: number }) {
    return (
        <div className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
            <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                <div className="text-yellow-400">{'★'.repeat(stars)}</div>
            </div>
            <p className="text-gray-600">{desc}</p>
        </div>
    );
}
