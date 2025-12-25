import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Glenn and Sophanny | YouTube Channel - Living in Cambodia',
    description: 'Glenn (Australian) and Sophanny (Cambodian) share their life in Phnom Penh. Budget guides, apartment tours, and honest advice about living in Cambodia.',
};

export default function GlennAndSophannyPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-800 text-sm font-semibold mb-4">
                    YouTube Channel
                </span>
                <h1 className="text-4xl font-extrabold mb-2">Glenn and Sophanny 🇦🇺🇰🇭</h1>
                <h2 className="text-xl text-gray-600 mb-8">Living in Cambodia - Budget Guides & Real Life</h2>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    {/* Channel Header */}
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-8 rounded-xl text-white mb-8">
                        <div className="text-center">
                            <div className="text-6xl mb-4">🎥</div>
                            <h2 className="text-3xl font-bold mb-4">Glenn and Sophanny</h2>
                            <p className="text-xl mb-4">
                                Australian expat + Cambodian wife = Real life in Phnom Penh
                            </p>
                            <a
                                href="https://www.youtube.com/@glennandsophanny"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                            >
                                ▶️ Subscribe on YouTube
                            </a>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* About the Channel */}
                        <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                            <h2 className="text-2xl font-bold text-green-900 mb-4">About Glenn and Sophanny</h2>
                            <div className="space-y-3">
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-green-900 mb-2">👨 Glenn - Australian Expat</h3>
                                    <p className="text-green-800 text-sm">
                                        Former teacher, now working from home in Cambodia. Shares honest, detailed budget breakdowns and practical advice.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-green-900 mb-2">👩 Sophanny - Cambodian Local</h3>
                                    <p className="text-green-800 text-sm">
                                        Born and raised in Cambodia. Provides insider knowledge on local markets, culture, and how to live like a local.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-green-900 mb-2">💑 Together</h3>
                                    <p className="text-green-800 text-sm">
                                        They own their own condo in Phnom Penh and share the reality of expat life - the good, the practical, and the affordable.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Featured Video */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">🎬 Featured: Living Under $800/Month</h2>
                            <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-xl shadow-lg border border-gray-200">
                                <iframe
                                    width="100%"
                                    height="400"
                                    src="https://www.youtube.com/embed/LPSQOATnrVk"
                                    title="Living in Cambodia for Under $800 a Month"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full object-cover"
                                ></iframe>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-blue-900 mb-2">Video Highlights:</h3>
                                <ul className="space-y-1 text-blue-800 text-sm">
                                    <li>✅ Complete budget breakdown for 2 people</li>
                                    <li>✅ $564/month living expenses + $200 rent = $764 total</li>
                                    <li>✅ Food prices from wholesale markets</li>
                                    <li>✅ Teaching job salaries ($1,100-$1,200/month)</li>
                                    <li>✅ Condo buying options (no deposit, $250/month)</li>
                                    <li>✅ 26 public holidays per year!</li>
                                </ul>
                                <Link
                                    href="/under-800-month"
                                    className="inline-block mt-3 text-blue-700 hover:text-blue-900 font-semibold text-sm"
                                >
                                    → Read Full Breakdown
                                </Link>
                            </div>
                        </div>

                        {/* Channel Focus */}
                        <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                            <h2 className="text-2xl font-bold text-purple-900 mb-4">What They Cover</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-purple-900 mb-2">💰 Budget Guides</h3>
                                    <p className="text-purple-800 text-sm">
                                        Detailed spreadsheets showing exactly what they spend on food, utilities, transport, and everything else.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-purple-900 mb-2">🛒 Market Shopping</h3>
                                    <p className="text-purple-800 text-sm">
                                        How to shop like a local at wholesale markets. Real prices for rice, meat, vegetables, and more.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-purple-900 mb-2">🏠 Living Costs</h3>
                                    <p className="text-purple-800 text-sm">
                                        Rent options, condo ownership, utilities, internet, phone data - all the practical details.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-purple-900 mb-2">👨‍🏫 Job Opportunities</h3>
                                    <p className="text-purple-800 text-sm">
                                        Teaching jobs (with and without degrees), other industries hiring, salary expectations.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-purple-900 mb-2">🇰🇭 Local Insights</h3>
                                    <p className="text-purple-800 text-sm">
                                        Sophanny shares Cambodian culture, customs, and insider tips you won't find in tourist guides.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-purple-900 mb-2">💼 Work from Home</h3>
                                    <p className="text-purple-800 text-sm">
                                        Both work from home - they share internet quality, setup tips, and remote work life in Cambodia.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Why Follow Them */}
                        <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                            <h2 className="text-2xl font-bold text-orange-900 mb-4">Why Follow Glenn and Sophanny?</h2>
                            <div className="space-y-3">
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-orange-900 mb-2">📊 Actual Numbers</h3>
                                    <p className="text-orange-800 text-sm">
                                        Glenn keeps detailed spreadsheets of all their expenses. No guessing - just real data from real life.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-orange-900 mb-2">🇰🇭 Local Perspective</h3>
                                    <p className="text-orange-800 text-sm">
                                        Sophanny is Cambodian, so you get authentic local knowledge and connections you won't get from other expat channels.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-orange-900 mb-2">🤝 Willing to Help</h3>
                                    <p className="text-orange-800 text-sm">
                                        They actively offer to help newcomers: show you around, find housing, connect you with jobs and local contacts.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-orange-900 mb-2">💯 Honest & Practical</h3>
                                    <p className="text-orange-800 text-sm">
                                        No sugar-coating. They tell you what things actually cost, what works, and what doesn't.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Their Budget Philosophy */}
                        <div className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                            <h2 className="text-2xl font-bold text-teal-900 mb-4">Their Budget Philosophy</h2>
                            <div className="bg-white p-4 rounded-lg">
                                <div className="space-y-3 text-teal-800">
                                    <p className="italic">
                                        "If you're one of the millions of people out there in the Western world that are struggling to survive just living from week to week or barely even doing that, then stay with us."
                                    </p>
                                    <p>
                                        Glenn and Sophanny prove that you can live a <strong>comfortable life</strong> in Cambodia for under $800/month. Not just surviving - actually living well with:
                                    </p>
                                    <ul className="space-y-1 ml-4 text-sm">
                                        <li>✅ Good food (cooking at home)</li>
                                        <li>✅ Nice apartment (with pool/gym options)</li>
                                        <li>✅ Fast internet (work from home quality)</li>
                                        <li>✅ Daily coffee from a local shop</li>
                                        <li>✅ Motorbike for transport</li>
                                        <li>✅ All utilities covered</li>
                                    </ul>
                                    <p className="font-bold text-teal-900 mt-3">
                                        And if you teach English (no degree required), you'll save $300-$400/month!
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Channel Started Recently */}
                        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                            <h2 className="text-2xl font-bold text-yellow-900 mb-4">📅 New Channel - Growing Fast!</h2>
                            <div className="bg-white p-4 rounded-lg">
                                <p className="text-yellow-800 mb-2">
                                    Glenn started the YouTube channel just a few months ago, but he's already building a valuable collection of content.
                                </p>
                                <p className="text-yellow-700 text-sm italic">
                                    "I've only just started my YouTube channel in the last two months. I've been building a little collection of what people don't necessarily understand about Cambodia."
                                </p>
                            </div>
                        </div>

                        {/* Debunking Myths */}
                        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                            <h2 className="text-2xl font-bold text-red-900 mb-4">🚫 Debunking Cambodia Myths</h2>
                            <div className="bg-white p-4 rounded-lg">
                                <p className="text-red-800 mb-3">
                                    <strong>Glenn's Mission:</strong> Show people what Cambodia really is.
                                </p>
                                <p className="text-red-700 text-sm mb-3 italic">
                                    "A lot of people think it's dirt roads, living in humpy shacks, etc. Cambodia is not what you all think it is."
                                </p>
                                <p className="text-red-800 text-sm">
                                    Watch their videos to see modern condos, supermarkets, fast internet, good infrastructure, and affordable comfortable living.
                                </p>
                            </div>
                        </div>

                        {/* Subscribe CTA */}
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-8 rounded-xl text-white text-center">
                            <h2 className="text-2xl font-bold mb-4">Ready to Learn the Truth About Cambodia?</h2>
                            <p className="text-lg mb-6">
                                Join Glenn and Sophanny as they share real budgets, practical tips, and honest advice!
                            </p>
                            <div className="space-y-4">
                                <a
                                    href="https://www.youtube.com/@glennandsophanny"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-white text-blue-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-colors shadow-lg text-lg"
                                >
                                    ▶️ Subscribe on YouTube
                                </a>
                                <p className="text-sm opacity-90">
                                    New videos regularly with budget guides, market tours, and life in Phnom Penh!
                                </p>
                            </div>
                        </div>

                        {/* Related Content */}
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-bold text-gray-900 mb-4">Featured Content from Glenn & Sophanny</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link
                                    href="/under-800-month"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-green-500 transition-colors"
                                >
                                    <h4 className="font-bold text-green-900 mb-1">Under $800/Month Guide</h4>
                                    <p className="text-gray-700 text-sm">Complete budget breakdown</p>
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
                                    <p className="text-gray-700 text-sm">More budget comparisons</p>
                                </Link>
                                <Link
                                    href="/phnom-penh"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-orange-500 transition-colors"
                                >
                                    <h4 className="font-bold text-orange-900 mb-1">Phnom Penh Guide</h4>
                                    <p className="text-gray-700 text-sm">Living in the capital</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
