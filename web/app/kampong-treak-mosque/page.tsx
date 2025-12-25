import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Kampong Treak Mosque | Cham People in Kampot',
    description: 'Exploring the largest mosque in Kampot and the history of the Cham people, the largest ethnic minority in Cambodia.',
};

export default function KampongTreakMosquePage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold mb-4">
                    Cultural Heritage
                </span>
                <h1 className="text-4xl font-extrabold mb-6">Kampong Treak Mosque 🕌</h1>
                <h2 className="text-xl text-gray-600 mb-8">The Largest Mosque in Kampot</h2>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <div className="aspect-w-16 aspect-h-9 mb-8 overflow-hidden rounded-xl shadow-lg border border-gray-200">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/WTk0cj19gRY"
                            title="Kampong Treak Mosque - Cham People in Kampot"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full object-cover"
                        ></iframe>
                    </div>

                    <div className="space-y-8">
                        {/* The Cham People */}
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h2 className="text-2xl font-bold text-blue-900 mb-3">The Cham People</h2>
                            <p className="text-blue-800 leading-relaxed mb-4">
                                The Cham are the <strong>largest ethnic minority</strong> in Cambodia, with a population of approximately <strong>500,000-600,000</strong> (about 2% of the total population).
                            </p>
                            <div className="bg-white p-4 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Quick Facts</h3>
                                <ul className="list-disc pl-5 space-y-1 text-blue-800 text-sm">
                                    <li><strong>Language:</strong> Austronesian (related to Malay, Indonesian, Filipino)</li>
                                    <li><strong>Origin:</strong> Descended from the Kingdom of Champa (Central/Southern Vietnam)</li>
                                    <li><strong>Religion:</strong> 100% Muslim in Cambodia</li>
                                    <li><strong>Arrival in Cambodia:</strong> Refugees from the defeated Champa Empire (17th century)</li>
                                </ul>
                            </div>
                        </div>

                        {/* Historical Journey */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Historical Journey</h2>
                            <div className="space-y-4">
                                <div className="border-l-4 border-teal-500 pl-4">
                                    <h3 className="font-bold text-gray-900">1st Century CE</h3>
                                    <p className="text-gray-700 text-sm">Cham people established their homeland in Central and Southern Vietnam.</p>
                                </div>
                                <div className="border-l-4 border-green-500 pl-4">
                                    <h3 className="font-bold text-gray-900">~600 CE</h3>
                                    <p className="text-gray-700 text-sm">Contact with Indian traders → Adopted Hinduism, mixing it with pre-existing beliefs.</p>
                                </div>
                                <div className="border-l-4 border-yellow-500 pl-4">
                                    <h3 className="font-bold text-gray-900">11th Century</h3>
                                    <p className="text-gray-700 text-sm">Began converting to Islam in significant numbers.</p>
                                </div>
                                <div className="border-l-4 border-orange-500 pl-4">
                                    <h3 className="font-bold text-gray-900">Early 1600s</h3>
                                    <p className="text-gray-700 text-sm">Islam became the dominant religion among the Cham.</p>
                                </div>
                                <div className="border-l-4 border-red-500 pl-4">
                                    <h3 className="font-bold text-gray-900">17th Century</h3>
                                    <p className="text-gray-700 text-sm">Vietnamese conquered Champa → Most Cham fled to Cambodia.</p>
                                </div>
                            </div>
                        </div>

                        {/* The Mosque */}
                        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                            <h2 className="text-xl font-bold text-emerald-900 mb-3">Kampong Treak Mosque</h2>
                            <p className="text-emerald-800 mb-4">
                                This is the <strong>largest mosque in Kampot</strong>, serving the local Cham community. The neighborhood surrounding it is predominantly Cham.
                            </p>
                            <div className="bg-white p-4 rounded-lg">
                                <h3 className="font-bold text-emerald-900 mb-2">Features</h3>
                                <ul className="list-disc pl-5 space-y-1 text-emerald-800 text-sm">
                                    <li>Government school attached to the mosque</li>
                                    <li>Kuwaiti flag visible (possibly funded by Kuwait)</li>
                                    <li>Active community center for local Cham families</li>
                                </ul>
                            </div>
                        </div>

                        {/* Cultural Notes */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Cultural Integration</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-purple-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-purple-900 mb-1">📜 Writing System</h3>
                                    <p className="text-sm text-purple-800">Cham have their own script (Jawi), derived from Sanskrit or Arabic.</p>
                                </div>
                                <div className="bg-pink-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-pink-900 mb-1">👩‍👧 Matrilineal</h3>
                                    <p className="text-sm text-pink-800">Property inheritance follows the maternal line.</p>
                                </div>
                                <div className="bg-indigo-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-indigo-900 mb-1">🐟 Occupations</h3>
                                    <p className="text-sm text-indigo-800">Dominate fishing and beef industries (avoid pork).</p>
                                </div>
                                <div className="bg-teal-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-teal-900 mb-1">🧕 Visible Presence</h3>
                                    <p className="text-sm text-teal-800">Women wearing veils are typically Cham.</p>
                                </div>
                            </div>
                        </div>

                        {/* Khmer Rouge Era */}
                        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                            <h2 className="text-xl font-bold text-red-900 mb-3">⚠️ Persecution Under Khmer Rouge</h2>
                            <p className="text-red-800 text-sm leading-relaxed">
                                Like all ethnic minorities (except hill tribes), the Cham were severely persecuted. Many mosques were turned into pig sties, and they were forbidden from practicing their faith. Even Buddhism was considered a "foreign Indian import" by the regime.
                            </p>
                        </div>

                        {/* Visiting */}
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h2 className="text-xl font-bold text-gray-900 mb-3">Visiting the Mosque</h2>
                            <p className="text-gray-700 mb-3">
                                The mosque is located in the Kampong Treak neighborhood of Kampot. The entire area is predominantly Cham.
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                                <li>Dress modestly (cover shoulders and knees)</li>
                                <li>Remove shoes before entering</li>
                                <li>Visit during non-prayer times for a tour</li>
                                <li>Friday prayers (Jumu'ah) are the busiest time</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
