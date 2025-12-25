import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Adventure Freaksss YouTube Channel | Budget Retirement Worldwide',
    description: 'Discover Adventure Freaksss - helping you find budget-friendly retirement destinations worldwide, including Cambodia.',
};

export default function AdventureFreaksssPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-800 text-sm font-semibold mb-4">
                    YouTube Channel
                </span>
                <h1 className="text-4xl font-extrabold mb-6">Adventure Freaksss 🎥</h1>
                <h2 className="text-xl text-gray-600 mb-8">Budget-Friendly Retirement Destinations Worldwide</h2>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    {/* Channel Embed */}
                    <div className="aspect-w-16 aspect-h-9 mb-8 overflow-hidden rounded-xl shadow-lg border border-gray-200">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/videoseries?list=UU@adventurefreaksss"
                            title="Adventure Freaksss YouTube Channel"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full object-cover"
                        ></iframe>
                    </div>

                    <div className="space-y-8">
                        {/* About the Channel */}
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h2 className="text-2xl font-bold text-blue-900 mb-3">About Adventure Freaksss</h2>
                            <p className="text-blue-800 leading-relaxed mb-4">
                                <strong>AdventureFreaksss.com</strong> specializes in assisting individuals in discovering budget-friendly retirement and living options across the globe.
                            </p>
                            <p className="text-blue-800 leading-relaxed">
                                The channel was founded to explore and unveil beautiful destinations worldwide where you can live comfortably at a <strong>fraction of the cost</strong> compared to your home country.
                            </p>
                        </div>

                        {/* Mission */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Their Mission</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-green-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-green-900 mb-1">🌍 Explore</h3>
                                    <p className="text-sm text-green-800">Discover hidden gems and affordable destinations worldwide.</p>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-purple-900 mb-1">🤝 Collaborate</h3>
                                    <p className="text-sm text-purple-800">Work with expats, experts, and locals for authentic insights.</p>
                                </div>
                                <div className="bg-orange-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-orange-900 mb-1">💰 Save</h3>
                                    <p className="text-sm text-orange-800">Help you find the perfect location that fits your budget.</p>
                                </div>
                            </div>
                        </div>

                        {/* How They Do It */}
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h2 className="text-xl font-bold text-gray-900 mb-3">How They Create Content</h2>
                            <ul className="space-y-2 text-gray-700">
                                <li>✅ <strong>Expat Interviews:</strong> Real stories from people living abroad (like Kelly Osowski in Siem Reap)</li>
                                <li>✅ <strong>Expert Insights:</strong> Collaborate with local experts and guides</li>
                                <li>✅ <strong>Extensive Research:</strong> Deep dives into visa requirements, costs, and lifestyle</li>
                                <li>✅ <strong>Budget Breakdowns:</strong> Detailed monthly cost analyses for each destination</li>
                            </ul>
                        </div>

                        {/* Cambodia Coverage */}
                        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                            <h2 className="text-2xl font-bold text-emerald-900 mb-3">Cambodia Coverage</h2>
                            <p className="text-emerald-800 mb-4">
                                Adventure Freaksss has featured extensive content on Cambodia, including:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-emerald-900 mb-2">Featured Interviews</h3>
                                    <ul className="list-disc pl-5 text-emerald-800 text-sm space-y-1">
                                        <li>Kelly Osowski (Siem Reap - $700/mo)</li>
                                        <li>Andrew Ma (Kampot - $500/mo)</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-emerald-900 mb-2">Topics Covered</h3>
                                    <ul className="list-disc pl-5 text-emerald-800 text-sm space-y-1">
                                        <li>Visa processes</li>
                                        <li>Healthcare costs</li>
                                        <li>Apartment hunting</li>
                                        <li>Daily living expenses</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Why Follow */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Why Follow Adventure Freaksss?</h2>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3 bg-yellow-50 p-4 rounded-lg">
                                    <span className="text-2xl">📊</span>
                                    <div>
                                        <h3 className="font-bold text-yellow-900">Real Numbers</h3>
                                        <p className="text-yellow-800 text-sm">Actual costs from real expats, not estimates.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-pink-50 p-4 rounded-lg">
                                    <span className="text-2xl">🎯</span>
                                    <div>
                                        <h3 className="font-bold text-pink-900">Practical Advice</h3>
                                        <p className="text-pink-800 text-sm">Step-by-step guides on visas, housing, and settling in.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-indigo-50 p-4 rounded-lg">
                                    <span className="text-2xl">🌏</span>
                                    <div>
                                        <h3 className="font-bold text-indigo-900">Global Coverage</h3>
                                        <p className="text-indigo-800 text-sm">Not just Cambodia - destinations across Asia, Latin America, and beyond.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Subscribe CTA */}
                        <div className="bg-gradient-to-r from-red-500 to-red-600 p-8 rounded-xl text-white text-center">
                            <h2 className="text-2xl font-bold mb-3">Subscribe to Adventure Freaksss</h2>
                            <p className="mb-6">Join the community and discover your perfect retirement destination!</p>
                            <a
                                href="https://www.youtube.com/@adventurefreaksss?sub_confirmation=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-white text-red-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
                            >
                                Subscribe on YouTube →
                            </a>
                        </div>

                        {/* Website */}
                        <div className="bg-gray-50 p-6 rounded-xl text-center">
                            <h3 className="font-bold text-gray-900 mb-2">Visit Their Website</h3>
                            <a
                                href="https://adventurefreaksss.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 font-medium"
                            >
                                AdventureFreaksss.com →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
