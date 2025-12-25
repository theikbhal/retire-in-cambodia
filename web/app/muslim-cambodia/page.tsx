import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Muslims in Cambodia | The Cham Community',
    description: 'Understanding the Cham Muslim community in Cambodia. Halal food, mosques, and cultural integration.',
};

export default function MuslimPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl">🕌</span>
                    <h1 className="text-4xl font-extrabold">Muslims in Cambodia</h1>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100 mb-8">
                        <h2 className="text-xl font-bold text-emerald-900 mb-3">The Cham People</h2>
                        <p className="text-emerald-800 leading-relaxed">
                            The majority of Muslims in Cambodia belong to the <strong>Cham</strong> ethnic group. They are descendants of the ancient Kingdom of Champa. They have lived alongside the Khmer Buddhists for centuries in peace and harmony.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Mosques */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Mosques & Community</h2>
                            <p className="text-gray-700 mb-4">
                                There are beautiful mosques scattered throughout the country.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                <li><strong>Phnom Penh:</strong> The Al-Serkal Mosque (Grand Mosque) near Boeng Kak lake is the largest and most prominent.</li>
                                <li><strong>Villages:</strong> Many Cham communities live in clusters along the Mekong River (e.g., in Kampong Cham province).</li>
                            </ul>
                        </div>

                        {/* Halal Food */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Halal Food 🥩</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Finding Halal food is relatively easy in major cities.
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-700">
                                <li>
                                    <strong>Siem Reap:</strong> Several Halal restaurants exist, particularly in the Psar Leu area and near the mosques.
                                    Many Indian and Malaysian restaurants also serve Halal meat.
                                </li>
                                <li>
                                    <strong>Phnom Penh:</strong> A wide variety of Halal options, from local Cham cuisine to Middle Eastern food.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
