import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Adapting to Cambodia\'s Heat | Like Florida, Arizona & Texas',
    description: 'You adapt to the heat in Cambodia. It\'s like South Florida, Arizona, or Texas. Thank God for AC! Tips from expats who love Cambodia despite the heat.',
};

export default function AdaptingToHeatPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-800 text-sm font-semibold mb-4">
                    Weather Guide
                </span>
                <h1 className="text-4xl font-extrabold mb-2">Adapting to Cambodia's Heat ☀️</h1>
                <h2 className="text-xl text-gray-600 mb-8">Like Florida, Arizona & Texas - You Get Used to It!</h2>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 p-8 rounded-xl text-white mb-8">
                        <div className="text-center">
                            <div className="text-6xl mb-4">🌡️</div>
                            <h2 className="text-3xl font-bold mb-4">
                                "You adapt to the heat."
                            </h2>
                            <p className="text-xl opacity-90">
                                Thank God for A/C! 🙏
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* The Reality */}
                        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                            <h2 className="text-2xl font-bold text-yellow-900 mb-4">The Truth About Cambodia's Heat</h2>
                            <div className="bg-white p-4 rounded-lg mb-4">
                                <p className="text-yellow-800 leading-relaxed mb-3">
                                    Yes, Cambodia is <strong>hot and humid</strong>. But here's the thing: <strong>you adapt</strong>. Just like people do in South Florida, Arizona, Texas, and other hot climates around the world.
                                </p>
                                <p className="text-yellow-700 text-sm italic">
                                    It's not about avoiding the heat - it's about learning to live with it comfortably.
                                </p>
                            </div>
                        </div>

                        {/* Comparison with Hot US States */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cambodia vs Hot US States</h2>

                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-blue-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-blue-900 mb-2">🌴 South Florida</h3>
                                    <p className="text-blue-800 text-sm mb-2">
                                        <strong>Summer:</strong> 85-95°F + humidity
                                    </p>
                                    <p className="text-blue-700 text-xs">
                                        "I'm from South Florida, same thing!" - Expat comment
                                    </p>
                                </div>
                                <div className="bg-orange-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-orange-900 mb-2">🌵 Arizona</h3>
                                    <p className="text-orange-800 text-sm mb-2">
                                        <strong>Summer:</strong> 100-115°F (dry heat)
                                    </p>
                                    <p className="text-orange-700 text-xs">
                                        "Arizona is very hot, too!"
                                    </p>
                                </div>
                                <div className="bg-red-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-red-900 mb-2">🤠 Texas</h3>
                                    <p className="text-red-800 text-sm mb-2">
                                        <strong>Summer:</strong> 95-105°F + humidity
                                    </p>
                                    <p className="text-red-700 text-xs">
                                        "Texas is very hot, too!"
                                    </p>
                                </div>
                            </div>

                            <div className="bg-green-50 p-4 rounded-xl mt-4">
                                <p className="text-green-900 font-bold text-center">
                                    🇰🇭 Cambodia: 85-95°F year-round with high humidity
                                </p>
                                <p className="text-green-700 text-sm text-center mt-2">
                                    If millions of people can live comfortably in Florida, Arizona, and Texas, you can adapt to Cambodia!
                                </p>
                            </div>
                        </div>

                        {/* How You Adapt */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">How You Adapt to the Heat</h2>

                            <div className="space-y-4">
                                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                    <h3 className="text-xl font-bold text-blue-900 mb-3">❄️ Air Conditioning is Your Best Friend</h3>
                                    <p className="text-blue-800 mb-3">
                                        <strong>"Thank God for A/C!"</strong> - Every expat in Cambodia
                                    </p>
                                    <div className="bg-white p-4 rounded-lg">
                                        <p className="text-blue-800 text-sm mb-2">
                                            Most apartments come with AC units. Even budget apartments at $180/month usually have at least one AC unit.
                                        </p>
                                        <p className="text-blue-700 text-xs">
                                            Electricity cost: $50-$200/month depending on usage (running AC 24/7 in hot season)
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                                    <h3 className="text-xl font-bold text-purple-900 mb-3">🌬️ Fans Are Everywhere</h3>
                                    <p className="text-purple-800 mb-2">
                                        Ceiling fans, standing fans, portable fans - Cambodians use fans strategically.
                                    </p>
                                    <div className="bg-white p-3 rounded-lg mt-3">
                                        <p className="text-purple-700 text-sm">
                                            Pro tip: Run AC to cool the room, then switch to fan to maintain comfort and save electricity.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                    <h3 className="text-xl font-bold text-green-900 mb-3">🚿 Multiple Showers Per Day</h3>
                                    <p className="text-green-800 mb-2">
                                        Celeste showers 4-5 times a day: Morning, lunchtime, after running, before bed, and when waking up.
                                    </p>
                                    <div className="bg-white p-3 rounded-lg mt-3">
                                        <p className="text-green-700 text-sm">
                                            Water bill: $3-$5/month even with frequent showers!
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                                    <h3 className="text-xl font-bold text-orange-900 mb-3">👕 Light, Breathable Clothing</h3>
                                    <p className="text-orange-800 mb-2">
                                        Cotton, linen, and moisture-wicking fabrics become your wardrobe staples.
                                    </p>
                                    <div className="bg-white p-3 rounded-lg mt-3">
                                        <p className="text-orange-700 text-sm">
                                            Locals wear light colors and loose-fitting clothes to stay cool.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-pink-50 p-6 rounded-xl border border-pink-100">
                                    <h3 className="text-xl font-bold text-pink-900 mb-3">💧 Stay Hydrated</h3>
                                    <p className="text-pink-800 mb-2">
                                        Bottled water costs $0.20. Drink constantly throughout the day.
                                    </p>
                                    <div className="bg-white p-3 rounded-lg mt-3">
                                        <p className="text-pink-700 text-sm">
                                            Coconut water, iced coffee, and fresh fruit juices are everywhere and cheap!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* The Dry Season Advantage */}
                        <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-100">
                            <h2 className="text-2xl font-bold text-cyan-900 mb-4">The Dry Season (November-February)</h2>
                            <div className="bg-white p-4 rounded-lg">
                                <p className="text-cyan-800 mb-3">
                                    <strong>Good news:</strong> December and January are actually quite pleasant! Temperatures drop to 75-85°F and humidity is lower.
                                </p>
                                <p className="text-cyan-700 text-sm mb-3">
                                    "When it's the dry season and over December, it's a bit cooler. Then we don't use the air con as much. A fan is sometimes enough." - Celeste
                                </p>
                                <div className="bg-cyan-100 p-3 rounded-lg">
                                    <p className="text-cyan-900 text-sm font-bold">
                                        💡 Pro tip: Run AC for a bit, switch it off, use the fan. Your electricity bill dips significantly!
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Lifestyle Adjustments */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Lifestyle Adjustments</h2>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-yellow-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-yellow-900 mb-2">🌅 Early Morning Activities</h3>
                                    <p className="text-yellow-800 text-sm">
                                        Locals exercise, run errands, and do outdoor activities before 10am when it's cooler.
                                    </p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-blue-900 mb-2">😴 Afternoon Rest</h3>
                                    <p className="text-blue-800 text-sm">
                                        The hottest part of the day (12pm-3pm) is perfect for indoor activities or naps.
                                    </p>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-purple-900 mb-2">🌙 Evening Outings</h3>
                                    <p className="text-purple-800 text-sm">
                                        Cambodian life comes alive in the evening when temperatures drop.
                                    </p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-green-900 mb-2">🏊 Pools & Water</h3>
                                    <p className="text-green-800 text-sm">
                                        Many apartments have rooftop pools. Celeste goes swimming at the club regularly.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* The Bottom Line */}
                        <div className="bg-gradient-to-r from-green-500 to-teal-500 p-8 rounded-xl text-white">
                            <h2 className="text-2xl font-bold mb-4">The Bottom Line</h2>
                            <div className="space-y-4">
                                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                                    <p className="mb-2 font-bold">🌡️ Yes, It's Hot</p>
                                    <p className="text-sm">
                                        Cambodia is tropical. It's hot and humid. That's just reality.
                                    </p>
                                </div>
                                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                                    <p className="mb-2 font-bold">✅ But You Adapt</p>
                                    <p className="text-sm">
                                        Just like millions of people in Florida, Arizona, Texas, and other hot places around the world.
                                    </p>
                                </div>
                                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                                    <p className="mb-2 font-bold">❄️ AC Makes It Manageable</p>
                                    <p className="text-sm">
                                        Modern air conditioning means you can be comfortable indoors whenever you want.
                                    </p>
                                </div>
                                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                                    <p className="mb-2 font-bold">❤️ It's Worth It</p>
                                    <p className="text-sm">
                                        "I love Cambodia" - Despite the heat, expats wouldn't trade it for anything.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Celeste's Take */}
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h2 className="text-xl font-bold text-blue-900 mb-3">Why Kelly Loves the Heat</h2>
                            <div className="bg-white p-4 rounded-lg">
                                <p className="text-blue-800 mb-3">
                                    "I love warm weather. I love humidity. I love warm monsoon rains. I <strong>hate</strong> cold weather."
                                </p>
                                <p className="text-blue-700 text-sm">
                                    For some people, the heat isn't a downside - it's actually a <strong>reason</strong> they moved to Cambodia!
                                </p>
                            </div>
                        </div>

                        {/* Related Links */}
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-bold text-gray-900 mb-4">More About Living in Cambodia</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <Link
                                    href="/weather"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-orange-500 transition-colors"
                                >
                                    <h4 className="font-bold text-orange-900 mb-1">Weather Guide</h4>
                                    <p className="text-gray-700 text-sm">3 seasons explained</p>
                                </Link>
                                <Link
                                    href="/celeste-phnom-penh"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
                                >
                                    <h4 className="font-bold text-blue-900 mb-1">Celeste's Story</h4>
                                    <p className="text-gray-700 text-sm">Living in Phnom Penh</p>
                                </Link>
                                <Link
                                    href="/five-reasons-kelly"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-green-500 transition-colors"
                                >
                                    <h4 className="font-bold text-green-900 mb-1">Kelly's 5 Reasons</h4>
                                    <p className="text-gray-700 text-sm">Why he loves the weather</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
