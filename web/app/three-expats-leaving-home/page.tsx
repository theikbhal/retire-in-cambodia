import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: '3 Western Expats on Leaving Home | Real Perspectives on Cambodia',
    description: 'What do Western expats REALLY think about leaving their home countries for Cambodia? Honest perspectives from three expats living in Siem Reap.',
};

export default function ThreeExpatsPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-teal-100 text-teal-800 text-sm font-semibold mb-4">
                    Expat Perspectives
                </span>
                <h1 className="text-4xl font-extrabold mb-2">What 3 Western Expats REALLY Think 💭</h1>
                <h2 className="text-xl text-gray-600 mb-8">About Leaving Home for Cambodia</h2>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <div className="aspect-w-16 aspect-h-9 mb-8 overflow-hidden rounded-xl shadow-lg border border-gray-200">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/KYCIbok45T8"
                            title="What 3 Western Expats REALLY Think About Leaving Home"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full object-cover"
                        ></iframe>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 mb-8">
                        <h2 className="text-xl font-bold text-blue-900 mb-3">About This Interview</h2>
                        <p className="text-blue-800 leading-relaxed">
                            Three Western expats living in Siem Reap, Cambodia share their <strong>honest, unfiltered thoughts</strong> about leaving their home countries, adapting to a new culture, and what they've learned along the way.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Why This Matters */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Watch This?</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-green-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-green-900 mb-2">💯 Honest Perspectives</h3>
                                    <p className="text-green-800 text-sm">Not just the highlights - the real challenges and rewards.</p>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-purple-900 mb-2">🌍 Different Backgrounds</h3>
                                    <p className="text-purple-800 text-sm">Three unique stories from different Western countries.</p>
                                </div>
                                <div className="bg-orange-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-orange-900 mb-2">🎯 Practical Insights</h3>
                                    <p className="text-orange-800 text-sm">What they wish they knew before moving.</p>
                                </div>
                            </div>
                        </div>

                        {/* Common Themes */}
                        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                            <h2 className="text-2xl font-bold text-yellow-900 mb-4">Common Themes from Expats</h2>
                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-yellow-900 mb-2">🏠 Leaving Home Isn't Easy</h3>
                                    <p className="text-yellow-800 text-sm">
                                        Most expats acknowledge the emotional difficulty of leaving family, friends, and familiar surroundings. But they also emphasize the personal growth that comes from stepping outside your comfort zone.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-yellow-900 mb-2">💰 Financial Freedom</h3>
                                    <p className="text-yellow-800 text-sm">
                                        A recurring theme: the ability to live comfortably on a modest income. Many couldn't afford their own apartment back home, but in Cambodia, they live well.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-yellow-900 mb-2">🧘 Quality of Life</h3>
                                    <p className="text-yellow-800 text-sm">
                                        Less stress, more time, better weather, and a slower pace of life are frequently mentioned as major improvements.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-yellow-900 mb-2">🤝 Welcoming Culture</h3>
                                    <p className="text-yellow-800 text-sm">
                                        The warmth and friendliness of Cambodian people consistently surprises and delights Western expats.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* What They Miss */}
                        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                            <h2 className="text-2xl font-bold text-red-900 mb-4">What Expats Miss About Home</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-red-900 mb-2">👨‍👩‍👧‍👦 Family & Friends</h3>
                                    <p className="text-red-800 text-sm">
                                        The #1 thing most expats miss. Video calls help, but it's not the same as being there in person.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-red-900 mb-2">🍕 Specific Foods</h3>
                                    <p className="text-red-800 text-sm">
                                        Certain comfort foods from home are hard to find or expensive to import.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-red-900 mb-2">🏥 Healthcare Standards</h3>
                                    <p className="text-red-800 text-sm">
                                        While affordable, some expats acknowledge Western healthcare is more advanced for serious conditions.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-red-900 mb-2">🗣️ Language Barrier</h3>
                                    <p className="text-red-800 text-sm">
                                        Not being able to communicate fluently can be frustrating at times.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* What They Don't Miss */}
                        <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                            <h2 className="text-2xl font-bold text-green-900 mb-4">What Expats DON'T Miss About Home</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-green-900 mb-2">💸 High Cost of Living</h3>
                                    <p className="text-green-800 text-sm">
                                        "I was poor back home. Here, I'm doing quite well."
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-green-900 mb-2">🐀 The Rat Race</h3>
                                    <p className="text-green-800 text-sm">
                                        Constant hustle, long commutes, and work-life imbalance.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-green-900 mb-2">❄️ Cold Weather</h3>
                                    <p className="text-green-800 text-sm">
                                        "The only white I want under my feet is sand."
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-green-900 mb-2">🗳️ Political Division</h3>
                                    <p className="text-green-800 text-sm">
                                        Escaping the negativity and divisive politics of Western countries.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Advice for Potential Expats */}
                        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                            <h2 className="text-2xl font-bold text-indigo-900 mb-4">Advice from Expats</h2>
                            <div className="space-y-3">
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-indigo-900 mb-1">✈️ Visit First</h3>
                                    <p className="text-indigo-800 text-sm">
                                        "Get boots on the ground. Don't just come for a vacation - spend real time here to see if it's for you."
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-indigo-900 mb-1">🧘 Be Flexible</h3>
                                    <p className="text-indigo-800 text-sm">
                                        "Go with the flow. Things work differently here, and that's okay."
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-indigo-900 mb-1">🙏 Show Respect</h3>
                                    <p className="text-indigo-800 text-sm">
                                        "Learn about the culture. Respect the people. You're a guest in their country."
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-indigo-900 mb-1">💰 Have a Financial Plan</h3>
                                    <p className="text-indigo-800 text-sm">
                                        "Know your budget. Cambodia is cheap, but you still need a plan."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Is It Worth It? */}
                        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-8 rounded-xl text-white text-center">
                            <h2 className="text-2xl font-bold mb-4">Is It Worth Leaving Home?</h2>
                            <p className="text-lg mb-4">
                                All three expats agree: <strong>Yes, absolutely.</strong>
                            </p>
                            <p className="text-sm opacity-90">
                                While they miss certain things about home, the benefits of living in Cambodia far outweigh the sacrifices. The freedom, affordability, and quality of life make it worth it.
                            </p>
                        </div>

                        {/* Related Content */}
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-bold text-gray-900 mb-4">More Expat Stories</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <Link
                                    href="/kelly-autumn-in-asia"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
                                >
                                    <h4 className="font-bold text-blue-900 mb-1">Kelly's Story</h4>
                                    <p className="text-gray-700 text-sm">Living on $700/month</p>
                                </Link>
                                <Link
                                    href="/five-hundred-dollar-budget"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-green-500 transition-colors"
                                >
                                    <h4 className="font-bold text-green-900 mb-1">Andrew's Story</h4>
                                    <p className="text-gray-700 text-sm">25 years in Cambodia</p>
                                </Link>
                                <Link
                                    href="/chef-story"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-orange-500 transition-colors"
                                >
                                    <h4 className="font-bold text-orange-900 mb-1">Dan's Story</h4>
                                    <p className="text-gray-700 text-sm">Ex-London chef</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
