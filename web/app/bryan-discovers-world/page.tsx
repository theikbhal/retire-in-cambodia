import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Bryan Discovers World | YouTube Channel - Cambodia Travel & Retirement',
    description: 'Bryan Discovers World explores affordable retirement destinations worldwide. Featured: Retiring in Cambodia on $1,500/month. Subscribe for budget travel tips!',
};

export default function BryanDiscoversWorldPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-800 text-sm font-semibold mb-4">
                    YouTube Channel
                </span>
                <h1 className="text-4xl font-extrabold mb-2">Bryan Discovers World 🌍</h1>
                <h2 className="text-xl text-gray-600 mb-8">Affordable Retirement & Budget Travel Adventures</h2>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    {/* Channel Header */}
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 p-8 rounded-xl text-white mb-8">
                        <div className="text-center">
                            <div className="text-6xl mb-4">🎥</div>
                            <h2 className="text-3xl font-bold mb-4">Bryan Discovers World</h2>
                            <p className="text-xl mb-4">
                                Exploring the world's most affordable retirement destinations
                            </p>
                            <a
                                href="https://www.youtube.com/@BryanDiscoversWorld"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-white text-red-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                            >
                                ▶️ Subscribe on YouTube
                            </a>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* About the Channel */}
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h2 className="text-2xl font-bold text-blue-900 mb-4">About the Channel</h2>
                            <div className="space-y-3">
                                <p className="text-blue-800 leading-relaxed">
                                    Bryan Discovers World is a YouTube channel dedicated to helping retirees and budget travelers find <strong>affordable destinations</strong> around the globe. Bryan and his partner travel full-time, documenting their experiences and sharing honest, detailed breakdowns of costs, visas, and lifestyle.
                                </p>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-blue-900 mb-2">Channel Focus:</h3>
                                    <ul className="space-y-1 text-blue-800 text-sm">
                                        <li>💰 <strong>Budget Breakdowns:</strong> Real costs from real travelers</li>
                                        <li>🛂 <strong>Visa Information:</strong> Easy-to-understand visa guides</li>
                                        <li>🏠 <strong>Accommodation Tours:</strong> What you actually get for your money</li>
                                        <li>🍽️ <strong>Food & Dining:</strong> Local and Western food options</li>
                                        <li>🌍 <strong>Destination Comparisons:</strong> Pros and cons of each location</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Featured Video */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">🎬 Featured: Retiring in Cambodia</h2>
                            <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-xl shadow-lg border border-gray-200">
                                <iframe
                                    width="100%"
                                    height="400"
                                    src="https://www.youtube.com/embed/VQNRfHe8G78"
                                    title="Retiring in Cambodia on $1500 a Month"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full object-cover"
                                ></iframe>
                            </div>
                            <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                                <h3 className="font-bold text-green-900 mb-2">Video Highlights:</h3>
                                <ul className="space-y-1 text-green-800 text-sm">
                                    <li>✅ 1-month journey through Phnom Penh, Kampot & Siem Reap</li>
                                    <li>✅ Total spend: $1,220 for a couple</li>
                                    <li>✅ Easy visa options ($300-$500/year)</li>
                                    <li>✅ Apartment tours ($8-$20/night)</li>
                                    <li>✅ Honest pros & cons</li>
                                    <li>✅ Long-term budget estimate: $830/month for a couple</li>
                                </ul>
                                <Link
                                    href="/couple-1500-month"
                                    className="inline-block mt-3 text-green-700 hover:text-green-900 font-semibold text-sm"
                                >
                                    → Read Full Breakdown
                                </Link>
                            </div>
                        </div>

                        {/* Why Follow Bryan? */}
                        <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                            <h2 className="text-2xl font-bold text-purple-900 mb-4">Why Follow Bryan Discovers World?</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-purple-900 mb-2">💯 Honest Reviews</h3>
                                    <p className="text-purple-800 text-sm">
                                        No sugarcoating. Bryan shares the good, the bad, and the ugly about each destination.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-purple-900 mb-2">💰 Real Budgets</h3>
                                    <p className="text-purple-800 text-sm">
                                        Actual spending tracked and shared. No guesswork, just facts.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-purple-900 mb-2">🏠 Apartment Tours</h3>
                                    <p className="text-purple-800 text-sm">
                                        See exactly what you get for your money with detailed walkthroughs.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-purple-900 mb-2">🌍 Multiple Destinations</h3>
                                    <p className="text-purple-800 text-sm">
                                        Traveling full-time means constant new content from different countries.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Content Style */}
                        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                            <h2 className="text-2xl font-bold text-yellow-900 mb-4">What to Expect</h2>
                            <div className="space-y-3">
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-yellow-900 mb-2">🎥 Video Style</h3>
                                    <p className="text-yellow-800 text-sm">
                                        Casual, conversational, and informative. Bryan and his partner share their experiences like friends chatting over coffee.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-yellow-900 mb-2">📊 Data-Driven</h3>
                                    <p className="text-yellow-800 text-sm">
                                        Every video includes detailed cost breakdowns, price comparisons, and practical information you can use.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-yellow-900 mb-2">🍽️ Food Focus</h3>
                                    <p className="text-yellow-800 text-sm">
                                        They also run a food channel, so expect lots of delicious food content and restaurant recommendations!
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Target Audience */}
                        <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                            <h2 className="text-2xl font-bold text-orange-900 mb-4">Perfect For:</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-white p-4 rounded-lg text-center">
                                    <div className="text-3xl mb-2">👴</div>
                                    <h3 className="font-bold text-orange-900 mb-1">Retirees</h3>
                                    <p className="text-orange-800 text-sm">
                                        Looking for affordable places to stretch retirement savings
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg text-center">
                                    <div className="text-3xl mb-2">💻</div>
                                    <h3 className="font-bold text-orange-900 mb-1">Digital Nomads</h3>
                                    <p className="text-orange-800 text-sm">
                                        Seeking budget-friendly destinations with good internet
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg text-center">
                                    <div className="text-3xl mb-2">🌍</div>
                                    <h3 className="font-bold text-orange-900 mb-1">Slow Travelers</h3>
                                    <p className="text-orange-800 text-sm">
                                        Want to spend months exploring new cultures affordably
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Bryan's Approach */}
                        <div className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                            <h2 className="text-2xl font-bold text-teal-900 mb-4">Bryan's Travel Philosophy</h2>
                            <div className="bg-white p-4 rounded-lg">
                                <div className="space-y-3 text-teal-800">
                                    <p className="italic">
                                        "Have you ever looked at your retirement savings and thought, 'Well, that's probably not going to be enough'? We get you."
                                    </p>
                                    <p>
                                        Bryan and his partner prove that you <strong>can</strong> travel full-time on a modest budget. Their mission is to show that retirement abroad isn't just for the wealthy - it's accessible to anyone willing to be flexible and adventurous.
                                    </p>
                                    <p className="font-bold text-teal-900">
                                        Current Budget: $1,500/month for both of them, traveling full-time!
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Subscribe CTA */}
                        <div className="bg-gradient-to-r from-red-500 to-pink-500 p-8 rounded-xl text-white text-center">
                            <h2 className="text-2xl font-bold mb-4">Ready to Discover the World?</h2>
                            <p className="text-lg mb-6">
                                Join Bryan on his journey to find the world's most affordable retirement destinations!
                            </p>
                            <div className="space-y-4">
                                <a
                                    href="https://www.youtube.com/@BryanDiscoversWorld"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-white text-red-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-colors shadow-lg text-lg"
                                >
                                    ▶️ Subscribe on YouTube
                                </a>
                                <p className="text-sm opacity-90">
                                    New videos regularly featuring budget breakdowns, apartment tours, and honest destination reviews!
                                </p>
                            </div>
                        </div>

                        {/* Related Content */}
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-bold text-gray-900 mb-4">More Cambodia Content</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link
                                    href="/couple-1500-month"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-green-500 transition-colors"
                                >
                                    <h4 className="font-bold text-green-900 mb-1">Full Cambodia Breakdown</h4>
                                    <p className="text-gray-700 text-sm">Detailed guide from Bryan's video</p>
                                </Link>
                                <Link
                                    href="/channels"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
                                >
                                    <h4 className="font-bold text-blue-900 mb-1">More YouTube Channels</h4>
                                    <p className="text-gray-700 text-sm">Other Cambodia vloggers</p>
                                </Link>
                                <Link
                                    href="/cost-of-living"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-purple-500 transition-colors"
                                >
                                    <h4 className="font-bold text-purple-900 mb-1">Cost of Living</h4>
                                    <p className="text-gray-700 text-sm">Budget comparisons</p>
                                </Link>
                                <Link
                                    href="/visa"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-orange-500 transition-colors"
                                >
                                    <h4 className="font-bold text-orange-900 mb-1">Visa Guide</h4>
                                    <p className="text-gray-700 text-sm">Easy visa options</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
