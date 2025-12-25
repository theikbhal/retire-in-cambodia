import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Top Places to Visit in Cambodia',
    description: 'Beyond Siem Reap: Kampot, Kep, Battambang, and Sihanoukville.',
};

export default function PlacesToVisitPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <h1 className="text-4xl font-extrabold mb-8">Places to Visit 🗺️</h1>

                <div className="grid gap-6 md:grid-cols-2">
                    <PlaceCard
                        name="Siem Reap"
                        icon="🏛️"
                        desc="The cultural heart. Angkor Wat, great food, expat community. The best all-rounder for living."
                        status="must-visit"
                    />
                    <PlaceCard
                        name="Phnom Penh"
                        icon="🏙️"
                        desc="The capital. Killing Fields, Royal Palace. Chaotic but essential for history."
                        status="must-visit"
                    />
                    <PlaceCard
                        name="Kampot"
                        icon="river"
                        desc="Relaxed riverside town. 'We liked Kampot... that could be a nice place to live as well.' Famous for pepper and sunsets."
                        status="recommended"
                    />
                    <PlaceCard
                        name="Kep"
                        icon="🦀"
                        desc="Quiet coastal town famous for crab. 'Nice for a visit... but probably too small to live permanently.'"
                        status="day-trip"
                    />
                    <PlaceCard
                        name="Battambang"
                        icon="🚂"
                        desc="The artistic hub with the bamboo train. A quieter, more creative alternative city."
                        status="recommended"
                    />
                    <PlaceCard
                        name="Sihanoukville"
                        icon="🏗️"
                        desc="Formerly a beach paradise, now heavily developed with casinos. 'It's taken away the charm that it used to have.'"
                        status="avoid"
                    />
                </div>
            </div>
        </main>
    );
}

function PlaceCard({ name, desc, icon, status }: { name: string, desc: string, icon: string, status: string }) {
    const statusColors = {
        'must-visit': 'bg-green-100 text-green-800',
        'recommended': 'bg-blue-100 text-blue-800',
        'day-trip': 'bg-yellow-100 text-yellow-800',
        'avoid': 'bg-red-100 text-red-800',
    };

    const statusLabels = {
        'must-visit': 'Must Visit',
        'recommended': 'Recommended',
        'day-trip': 'Nice Day Trip',
        'avoid': 'Changed / Avoid',
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
                <div className="text-4xl">{icon === 'river' ? '🌊' : icon}</div>
                <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${statusColors[status as keyof typeof statusColors]}`}>
                    {statusLabels[status as keyof typeof statusLabels]}
                </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
            <p className="text-gray-600 text-sm flex-grow">{desc}</p>
        </div>
    );
}
