import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Geography of Cambodia | Land of Water & Plains',
    description: 'Exploring the geography of Cambodia: The Mekong River, Tonle Sap Lake, Cardamom Mountains, and central plains.',
};

export default function GeographyPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-800 text-sm font-semibold mb-4">
                    The Land
                </span>
                <h1 className="text-4xl font-extrabold mb-6">Geography of Cambodia 🗺️</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <p className="text-xl text-gray-700 leading-relaxed mb-8">
                        Cambodia looks like a bowl. It has a vast central plain bordered by mountains, with the mighty Mekong River running right through it.
                    </p>

                    <div className="space-y-8">
                        {/* The Heart: Tonle Sap */}
                        <div className="flex gap-4 items-start">
                            <div className="text-3xl">🌊</div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-2">The Tonle Sap Lake</h2>
                                <p className="text-gray-700">
                                    The "Great Lake" is the beating heart of Cambodia. During the rainy season, the Mekong River forces the Tonle Sap river to <strong>flow backwards</strong>, expanding the lake to five times its size. This natural miracle provides most of the country's fish.
                                </p>
                            </div>
                        </div>

                        {/* The Plains */}
                        <div className="flex gap-4 items-start">
                            <div className="text-3xl">🌾</div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-2">The Central Plains</h2>
                                <p className="text-gray-700">
                                    Most of the population (and rice farming) lives in the flat central plains. This is why cities like Siem Reap and Phnom Penh are so flat—great for cycling!
                                </p>
                            </div>
                        </div>

                        {/* The Mountains */}
                        <div className="flex gap-4 items-start">
                            <div className="text-3xl">⛰️</div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-2">The Mountains</h2>
                                <p className="text-gray-700">
                                    <strong>Cardamom Mountains (Southwest):</strong> Dense rainforest and wildlife. <br />
                                    <strong>Dangrek Mountains (North):</strong> The border with Thailand.
                                </p>
                            </div>
                        </div>

                        {/* The Coast */}
                        <div className="flex gap-4 items-start">
                            <div className="text-3xl">🏖️</div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-2">The Coastline</h2>
                                <p className="text-gray-700">
                                    A short but beautiful 443km coastline on the Gulf of Thailand, home to towns like Kampot, Kep, and the islands (Koh Rong).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
