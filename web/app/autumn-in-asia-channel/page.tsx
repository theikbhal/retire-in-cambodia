import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Autumn in Asia YouTube Channel | Kelly Osowski\'s Expat Journey',
    description: 'Follow Kelly (Autumn) as he shares what it\'s really like to live in Cambodia and Southeast Asia. Weekly videos on expat life, cost of living, and local culture.',
};

export default function AutumnInAsiaChannelPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-800 text-sm font-semibold mb-4">
                    YouTube Channel
                </span>
                <h1 className="text-4xl font-extrabold mb-6">Autumn in Asia 🍂</h1>
                <h2 className="text-xl text-gray-600 mb-8">Kelly Osowski's Expat Life in Cambodia</h2>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    {/* Channel Embed */}
                    <div className="aspect-w-16 aspect-h-9 mb-8 overflow-hidden rounded-xl shadow-lg border border-gray-200">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/videoseries?list=UUc/AutumninAsia"
                            title="Autumn in Asia YouTube Channel"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full object-cover"
                        ></iframe>
                    </div>

                    <div className="space-y-8">
                        {/* About Kelly/Autumn */}
                        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl border border-orange-100">
                            <h2 className="text-2xl font-bold text-orange-900 mb-3">Welcome to Autumn in Asia</h2>
                            <p className="text-orange-800 leading-relaxed mb-4">
                                <strong>I'm Kelly (but you can call me Autumn)!</strong>
                            </p>
                            <p className="text-orange-800 leading-relaxed">
                                I share what it's <strong>really like</strong> to live, travel, and build a new life in Cambodia and Southeast Asia.
                            </p>
                        </div>

                        {/* Who Should Watch */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Is This Channel For You?</h2>
                            <p className="text-gray-700 mb-4">If you've ever dreamed about:</p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-blue-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-blue-900 mb-1">🌏 Moving Abroad</h3>
                                    <p className="text-sm text-blue-800">Becoming an expat and starting fresh in Southeast Asia.</p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-green-900 mb-1">🧘 Slowing Down</h3>
                                    <p className="text-sm text-green-800">Living a simpler, more peaceful life away from the rat race.</p>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-purple-900 mb-1">🗺️ Discovering Hidden Gems</h3>
                                    <p className="text-sm text-purple-800">Exploring hidden corners of Southeast Asia off the tourist trail.</p>
                                </div>
                                <div className="bg-pink-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-pink-900 mb-1">🤝 Cultural Adjustment</h3>
                                    <p className="text-sm text-pink-800">Learning how to adapt to a new culture and lifestyle.</p>
                                </div>
                            </div>
                            <p className="text-gray-700 mt-4 font-bold">— then you're in the right place.</p>
                        </div>

                        {/* Content Focus */}
                        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                            <h2 className="text-xl font-bold text-indigo-900 mb-3">What Kelly Posts About</h2>
                            <p className="text-indigo-800 mb-4">Weekly videos covering:</p>
                            <ul className="space-y-2 text-indigo-800">
                                <li>📹 <strong>Expat Life in Cambodia:</strong> Day-to-day living in Siem Reap</li>
                                <li>💰 <strong>Cost of Living:</strong> Real budgets and expenses (Kelly lives on ~$700/month)</li>
                                <li>🏛️ <strong>Local Culture:</strong> Wet markets, temples, festivals, and traditions</li>
                                <li>🛂 <strong>Practical Tips:</strong> Visas, healthcare, transportation, and settling in</li>
                                <li>🏠 <strong>Apartment Tours:</strong> What you can rent for $300/month</li>
                                <li>🍜 <strong>Food Adventures:</strong> Local cuisine and where to eat</li>
                            </ul>
                        </div>

                        {/* Kelly's Background */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">About Kelly</h2>
                            <div className="bg-gray-50 p-6 rounded-xl">
                                <ul className="space-y-2 text-gray-700">
                                    <li>🎖️ <strong>US Navy Veteran:</strong> First visited Southeast Asia in 1976</li>
                                    <li>📚 <strong>Anthropology Background:</strong> Loves immersive cultural studies</li>
                                    <li>🌏 <strong>Experienced Traveler:</strong> 15+ trips to Southeast Asia since 2015</li>
                                    <li>🏠 <strong>Current Home:</strong> Siem Reap, Cambodia (living since retirement)</li>
                                    <li>💼 <strong>Previous Life:</strong> Lived in Arizona, sold everything to move abroad</li>
                                </ul>
                            </div>
                        </div>

                        {/* Why Follow */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Why Follow Autumn in Asia?</h2>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3 bg-yellow-50 p-4 rounded-lg">
                                    <span className="text-2xl">💯</span>
                                    <div>
                                        <h3 className="font-bold text-yellow-900">Authentic & Honest</h3>
                                        <p className="text-yellow-800 text-sm">Kelly doesn't sugarcoat - he shares the good, the bad, and the real.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-teal-50 p-4 rounded-lg">
                                    <span className="text-2xl">🎥</span>
                                    <div>
                                        <h3 className="font-bold text-teal-900">Weekly Content</h3>
                                        <p className="text-teal-800 text-sm">Consistent uploads with fresh perspectives on expat life.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-red-50 p-4 rounded-lg">
                                    <span className="text-2xl">🤝</span>
                                    <div>
                                        <h3 className="font-bold text-red-900">Community Focused</h3>
                                        <p className="text-red-800 text-sm">Responds to comments and builds a supportive expat community.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Featured Content */}
                        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                            <h2 className="text-xl font-bold text-emerald-900 mb-3">Featured on This Site</h2>
                            <p className="text-emerald-800 mb-4">
                                Kelly was interviewed by Adventure Freaksss about his life in Siem Reap:
                            </p>
                            <Link
                                href="/kelly-autumn-in-asia"
                                className="inline-block bg-emerald-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-emerald-700 transition-colors"
                            >
                                Read Kelly's Full Interview →
                            </Link>
                        </div>

                        {/* Subscribe CTA */}
                        <div className="bg-gradient-to-r from-orange-500 to-red-500 p-8 rounded-xl text-white text-center">
                            <h2 className="text-2xl font-bold mb-3">Subscribe to Autumn in Asia</h2>
                            <p className="mb-6">Join Kelly's growing community of travelers, dreamers, and expats!</p>
                            <a
                                href="https://www.youtube.com/c/AutumninAsia?sub_confirmation=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
                            >
                                Subscribe on YouTube →
                            </a>
                        </div>

                        {/* Contact */}
                        <div className="bg-gray-50 p-6 rounded-xl text-center">
                            <h3 className="font-bold text-gray-900 mb-2">Contact Kelly</h3>
                            <p className="text-gray-700 text-sm mb-2">Have questions about living in Cambodia?</p>
                            <a
                                href="mailto:autumninasia@yahoo.com"
                                className="text-blue-600 hover:text-blue-800 font-medium"
                            >
                                autumninasia@yahoo.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
