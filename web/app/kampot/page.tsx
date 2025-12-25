import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Kampot | Riverside Town Guide',
    description: 'Why Kampot is a favorite for retirees. Andrew Ma lives here for $80/month rent. River, mountains, and world-famous pepper.',
};

export default function KampotPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/places-to-visit" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Places to Visit
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-teal-100 text-teal-800 text-sm font-semibold mb-4">
                    Riverside Gem
                </span>
                <h1 className="text-4xl font-extrabold mb-6">Kampot 🛶</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <blockquote className="text-xl italic text-gray-700 border-l-4 border-teal-500 pl-4 mb-6">
                        "I live in the center of town in a quiet lane between the river and the durian roundabout. $80 a month for my rent." — Andrew Ma, 25-year resident
                    </blockquote>

                    <div className="space-y-8">
                        {/* Distance from Siem Reap */}
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h2 className="text-xl font-bold text-blue-900 mb-3">Distance from Siem Reap</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <div className="text-sm text-blue-600 font-bold">Straight Line</div>
                                    <div className="text-2xl font-bold text-blue-900">308 km</div>
                                    <div className="text-xs text-blue-700">(191 miles)</div>
                                </div>
                                <div>
                                    <div className="text-sm text-teal-600 font-bold">Driving (via Phnom Penh)</div>
                                    <div className="text-2xl font-bold text-teal-900">445-463 km</div>
                                    <div className="text-xs text-teal-700">(277-288 miles)</div>
                                </div>
                            </div>
                            <p className="text-blue-800 text-sm mt-3">
                                ⏱️ Travel time: ~6-7 hours by bus or private car
                            </p>
                        </div>

                        {/* The Vibe */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">The Vibe</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Kampot is famous for its laid-back riverside atmosphere. It has a large expat community (smaller than Siem Reap but very active).
                                It feels like a "sleepy colonial old town" with hipster cafes, bars, and a thriving creative scene.
                            </p>
                        </div>

                        {/* Population & History */}
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Facts</h2>
                            <ul className="space-y-2 text-gray-700">
                                <li>📍 <strong>Population:</strong> ~50,000 people</li>
                                <li>🏛️ <strong>History:</strong> French colonial architecture, Indian influence dating to 600 AD</li>
                                <li>🌶️ <strong>Famous For:</strong> Kampot Pepper (arguably the world's best)</li>
                                <li>🏖️ <strong>Beach Access:</strong> 20-30 mins to Kep beach</li>
                            </ul>
                        </div>

                        {/* What to Do */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">What to Do</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-teal-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-teal-900 mb-1">🏔️ Bokor Mountain</h3>
                                    <p className="text-sm text-teal-800">National park with cool climate and abandoned French colonial buildings.</p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-green-900 mb-1">🌶️ Pepper Farms</h3>
                                    <p className="text-sm text-green-800">Tour the farms producing world-famous Kampot Pepper.</p>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-purple-900 mb-1">🕌 Cave Temples</h3>
                                    <p className="text-sm text-purple-800">Shiva Hindu temples dating back to 600 AD.</p>
                                </div>
                                <div className="bg-yellow-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-yellow-900 mb-1">🎵 Live Music</h3>
                                    <p className="text-sm text-yellow-800">Free live music most nights (50 cent beers!).</p>
                                </div>
                            </div>
                        </div>

                        {/* Cost of Living */}
                        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                            <h2 className="text-xl font-bold text-emerald-900 mb-3">Cost of Living (Andrew Ma's Experience)</h2>
                            <ul className="space-y-2 text-emerald-800">
                                <li>🏠 <strong>Rent:</strong> $80/month (1-bed house in center) or $200 (resort bungalow)</li>
                                <li>⚡ <strong>Electricity:</strong> $30-$60/month</li>
                                <li>📶 <strong>Internet:</strong> $15/month (unlimited)</li>
                                <li>🍽️ <strong>Meals:</strong> $3-$5 at restaurants</li>
                                <li>💰 <strong>Total Living:</strong> $500-$1,000/month (all-in)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
