import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Pros & Cons of Retiring in Cambodia',
    description: 'An honest look at the advantages and disadvantages of retiring in Cambodia.',
};

export default function ProsConsPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <h1 className="text-4xl font-extrabold mb-8">Pros & Cons ⚖️</h1>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* PROS */}
                    <div className="bg-green-50/50 p-6 rounded-2xl border border-green-100">
                        <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                            <span className="bg-green-100 p-2 rounded-lg mr-3">👍</span> The Pros
                        </h2>
                        <ul className="space-y-4">
                            <ProItem title="Easy Visa (55+)" text="Get a retirement visa with usually just a passport and age proof. No massive bank balance requirements like Thailand." />
                            <ProItem title="Cost of Living" text="Live comfortably on $800-$1,000/month. Eating out is often cheaper than cooking." />
                            <ProItem title="Friendly Locals" text="Genuine warmth. Locals are eager to connect and honest (examples of returned lost items)." />
                            <ProItem title="Central Location" text="Perfect hub. Easy flights to Thailand, Vietnam, Laos, and Singapore." />
                        </ul>
                    </div>

                    {/* CONS */}
                    <div className="bg-red-50/50 p-6 rounded-2xl border border-red-100">
                        <h2 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
                            <span className="bg-red-100 p-2 rounded-lg mr-3">👎</span> The Cons
                        </h2>
                        <ul className="space-y-4">
                            <ConItem title="Healthcare Limitations" text="For serious ongoing issues or emergencies (like heart attacks), you often need to fly to Bangkok. Medical evacuation insurance is a must." />
                            <ConItem title="Traffic Accident Risk" text="While violent crime is low, road safety is the biggest danger. The traffic can be chaotic." />
                            <ConItem title="Language Barrier" text="In rural areas outside Siem Reap/Phnom Penh, English is scarce. 'Pointing is good fun.''" />
                            <ConItem title="Misconceptions" text="Your friends back home might still think it's a war zone or 'dirty third world country' (even if it's not)." />
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}

function ProItem({ title, text }: { title: string, text: string }) {
    return (
        <li className="flex items-start">
            <span className="text-green-500 font-bold mr-2">✓</span>
            <div>
                <span className="font-bold text-gray-900 block">{title}</span>
                <span className="text-gray-600 text-sm">{text}</span>
            </div>
        </li>
    );
}

function ConItem({ title, text }: { title: string, text: string }) {
    return (
        <li className="flex items-start">
            <span className="text-red-500 font-bold mr-2">✗</span>
            <div>
                <span className="font-bold text-gray-900 block">{title}</span>
                <span className="text-gray-600 text-sm">{text}</span>
            </div>
        </li>
    );
}
