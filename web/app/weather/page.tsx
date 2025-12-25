import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Cambodia Weather Guide | Heat & Rainy Season',
    description: 'Everything you need to know about the tropical weather in Siem Reap. When to visit and how to handle the heat.',
};

export default function WeatherPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <h1 className="text-4xl font-extrabold mb-6">Weather Guide ☀️</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <blockquote className="text-xl italic text-gray-700 border-l-4 border-orange-500 pl-4 mb-6">
                        "The weather's nice... but be warned: It is unrelenting. AC is not a luxury here, it is a necessity."
                    </blockquote>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">The 3 Seasons</h2>
                    <div className="space-y-4">
                        <Season
                            name="Cool Season (Nov - Feb)"
                            temp="20°C - 30°C"
                            desc="The best time to be here. Dry, breezy, and pleasant. Nights can actually feel 'cool' enough for a light sweater."
                            status="best"
                        />
                        <Season
                            name="Hot Season (Mar - May)"
                            temp="35°C - 40°C+"
                            desc="Brutal heat. April is the hottest month. You will sweat walking from your door to a tuk-tuk. Stay near a pool."
                            status="warning"
                        />
                        <Season
                            name="Rainy Season (Jun - Oct)"
                            temp="25°C - 32°C"
                            desc="Monsoon rains usually last 1-2 hours in the afternoon. Everything turns lush green. It's actually a lovely time to live here as the dust settles."
                            status="ok"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}

function Season({ name, temp, desc, status }: { name: string, temp: string, desc: string, status: 'best' | 'warning' | 'ok' }) {
    const colors = {
        best: 'bg-green-50 border-green-200 text-green-900',
        warning: 'bg-red-50 border-red-200 text-red-900',
        ok: 'bg-blue-50 border-blue-200 text-blue-900'
    };

    return (
        <div className={`p-4 rounded-xl border ${colors[status]}`}>
            <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg">{name}</h3>
                <span className="font-bold">{temp}</span>
            </div>
            <p className="text-sm opacity-90">{desc}</p>
        </div>
    );
}
