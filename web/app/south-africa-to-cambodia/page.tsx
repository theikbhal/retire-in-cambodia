import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Moving from South Africa to Cambodia | Celeste\'s Journey',
    description: 'How Celeste moved from South Africa to Cambodia. From high-stress construction entrepreneur to peaceful ESL teacher in Phnom Penh.',
};

export default function SouthAfricaToCambodiaPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-800 text-sm font-semibold mb-4">
                    Migration Story
                </span>
                <h1 className="text-4xl font-extrabold mb-2">From South Africa to Cambodia 🇿🇦 → 🇰🇭</h1>
                <h2 className="text-xl text-gray-600 mb-8">Celeste's Journey from Stress to Peace</h2>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <div className="aspect-w-16 aspect-h-9 mb-8 overflow-hidden rounded-xl shadow-lg border border-gray-200">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/hGvi7FizlME"
                            title="South Africa to Cambodia - Celeste's Story"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full object-cover"
                        ></iframe>
                    </div>

                    <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl border border-orange-100 mb-8">
                        <h2 className="text-xl font-bold text-orange-900 mb-3">Celeste's Background</h2>
                        <ul className="space-y-2 text-orange-800">
                            <li>🇿🇦 <strong>From:</strong> South Africa</li>
                            <li>💼 <strong>Previous Career:</strong> Construction entrepreneur (built houses)</li>
                            <li>👩‍👧‍👦 <strong>Family:</strong> Single mom raising 3 children</li>
                            <li>😰 <strong>Life Before:</strong> High-stress, constant problem-solving, proving herself in a man's world</li>
                            <li>📅 <strong>Moved to Cambodia:</strong> 3 years ago (was supposed to be 6 months!)</li>
                            <li>👨‍🏫 <strong>Now:</strong> Full-time ESL teacher & Head Teacher in Phnom Penh</li>
                        </ul>
                    </div>

                    <div className="space-y-8">
                        {/* Why She Left South Africa */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why She Left South Africa</h2>

                            <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-4">
                                <h3 className="text-xl font-bold text-red-900 mb-3">😰 The Stress of Western Life</h3>
                                <div className="space-y-3">
                                    <div className="bg-white p-4 rounded-lg">
                                        <h4 className="font-bold text-red-900 mb-2">💼 High-Intensity Career</h4>
                                        <p className="text-red-800 text-sm">
                                            "I was in construction, which was a very hard field for a woman. I built houses. It was constant problem-solving, making plans, staff to pay, dealing with banks."
                                        </p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg">
                                        <h4 className="font-bold text-red-900 mb-2">🏃 The Constant Chase</h4>
                                        <p className="text-red-800 text-sm">
                                            "We get so used to chasing, right? It's hard work and it's constant. Always chasing the white picket fence, the vehicle, the holidays."
                                        </p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg">
                                        <h4 className="font-bold text-red-900 mb-2">😨 Crime & Safety Concerns</h4>
                                        <p className="text-red-800 text-sm">
                                            "Coming from South Africa, it was highly stressful. There's these things I worried about in South Africa versus what I don't even consider in Cambodia. It's worlds apart."
                                        </p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg">
                                        <h4 className="font-bold text-red-900 mb-2">😔 COVID Impact</h4>
                                        <p className="text-red-800 text-sm">
                                            "COVID hit everybody hard. I had to close my doors on a few businesses. I was at my worst end and just needed a break."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* The Initial Plan */}
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h2 className="text-2xl font-bold text-blue-900 mb-4">The Original Plan</h2>
                            <div className="bg-white p-4 rounded-lg">
                                <p className="text-blue-800 mb-3">
                                    "Initially, it was a case of let me come over for <strong>6 months</strong> and see what it's like and see if I enjoy it."
                                </p>
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <p className="text-blue-900 font-bold text-sm">
                                        Family Connection: Her daughter had been in Cambodia for almost 10 years, and her mom was a teacher there.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* What Happened Instead */}
                        <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                            <h2 className="text-2xl font-bold text-green-900 mb-4">What Actually Happened</h2>
                            <div className="bg-white p-4 rounded-lg mb-4">
                                <p className="text-green-800 text-lg italic mb-3">
                                    "Cambodia just grows on you with such speed and so unexpectedly. It's three years later."
                                </p>
                                <p className="text-green-700 text-sm">
                                    "The last two or three days my daughter and I have had conversations about returning back to South Africa and we go like, 'Wow, things are so different. There's just something different about Cambodia.'"
                                </p>
                            </div>
                        </div>

                        {/* The Biggest Differences */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Biggest Differences</h2>

                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                                    <h3 className="text-xl font-bold text-red-900 mb-3">🇿🇦 Life in South Africa</h3>
                                    <ul className="space-y-2 text-red-800 text-sm">
                                        <li>❌ Constant stress & survival mode</li>
                                        <li>❌ High crime & safety concerns</li>
                                        <li>❌ Proving yourself constantly</li>
                                        <li>❌ Chasing status symbols</li>
                                        <li>❌ Living to work</li>
                                        <li>❌ Expensive everything</li>
                                        <li>❌ No time to breathe</li>
                                    </ul>
                                </div>
                                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                                    <h3 className="text-xl font-bold text-green-900 mb-3">🇰🇭 Life in Cambodia</h3>
                                    <ul className="space-y-2 text-green-800 text-sm">
                                        <li>✅ Calm & peaceful</li>
                                        <li>✅ No crime to worry about</li>
                                        <li>✅ No judgment</li>
                                        <li>✅ Status doesn't matter</li>
                                        <li>✅ Work to live</li>
                                        <li>✅ Incredibly affordable</li>
                                        <li>✅ Time to actually live</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* The Adjustment Period */}
                        <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                            <h2 className="text-2xl font-bold text-purple-900 mb-4">The Adjustment Period</h2>
                            <div className="bg-white p-4 rounded-lg mb-4">
                                <p className="text-purple-800 mb-3">
                                    <strong>First Month:</strong> "It was so weird for me. I couldn't understand what was going on. It was like a silence going over me."
                                </p>
                                <p className="text-purple-700 text-sm mb-3">
                                    "It's a nervous system adjustment where you're living in the survival mode of surviving crime, doing business, all these things to a society that's just... calm."
                                </p>
                            </div>
                            <div className="bg-purple-100 p-4 rounded-lg">
                                <p className="text-purple-900 font-bold text-sm">
                                    ⚠️ Important: "If you come in as a Westerner and you don't leave your ego and your pride at that border check, you're in trouble."
                                </p>
                            </div>
                        </div>

                        {/* About the People */}
                        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                            <h2 className="text-2xl font-bold text-yellow-900 mb-4">The People Changed Everything</h2>
                            <div className="space-y-3">
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-yellow-900 mb-2">😌 Calm & Kind</h3>
                                    <p className="text-yellow-800 text-sm">
                                        "The people are calm. They're kind people. There's no negative emotion in Cambodia."
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-yellow-900 mb-2">🙏 Respectful Culture</h3>
                                    <p className="text-yellow-800 text-sm">
                                        "If you come in here and you get upset and you raise your voice, you are going to embarrass yourself. People don't deal with those kinds of things."
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-yellow-900 mb-2">🌅 Work-Life Balance</h3>
                                    <p className="text-yellow-800 text-sm">
                                        "They work to live, they don't live to work. There's a colonial lifestyle where kids go to school in the morning, Khmer school in the afternoon. People go home, families get together, they rest."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* What She Gained */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">What She Gained in Cambodia</h2>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-blue-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-blue-900 mb-2">🧘 Peace of Mind</h3>
                                    <p className="text-blue-800 text-sm">
                                        "Once the adjustment is there, you start valuing your peace that you find within Cambodia."
                                    </p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-green-900 mb-2">💰 Financial Freedom</h3>
                                    <p className="text-green-800 text-sm">
                                        "I can live comfortably, save money, send money back home to my kids, and still afford wonderful holidays."
                                    </p>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-purple-900 mb-2">⏰ Time</h3>
                                    <p className="text-purple-800 text-sm">
                                        "You've got more time here than in Western society because we don't chase as much."
                                    </p>
                                </div>
                                <div className="bg-orange-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-orange-900 mb-2">🏃 Health & Fitness</h3>
                                    <p className="text-orange-800 text-sm">
                                        "We train a lot. We are runners. We go to the gym. We eat well to take care of our bodies."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Her New Life */}
                        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-100">
                            <h2 className="text-2xl font-bold text-teal-900 mb-4">Her New Life in Phnom Penh</h2>
                            <div className="space-y-3">
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-teal-900 mb-2">👨‍🏫 Career: ESL Teacher</h3>
                                    <p className="text-teal-800 text-sm mb-2">
                                        Full-time head teacher for 2+ years at the same school
                                    </p>
                                    <p className="text-teal-700 text-xs">
                                        Salary: $1,200-$2,000/month (unlicensed TEFL certified)
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-teal-900 mb-2">🏠 Living Situation</h3>
                                    <p className="text-teal-800 text-sm">
                                        Lives with her daughter, looking at apartments from $180-$400/month
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-teal-900 mb-2">💵 Monthly Budget</h3>
                                    <p className="text-teal-800 text-sm">
                                        Lives comfortably, eats well, trains regularly, travels monthly, and still sends money home to South Africa
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Her Reflections */}
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-8 rounded-xl text-white">
                            <h2 className="text-2xl font-bold mb-4">Celeste's Reflections</h2>
                            <div className="space-y-4">
                                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                                    <p className="mb-2 font-bold">On Stress:</p>
                                    <p className="text-sm italic">
                                        "If I ever really have to say that I've got any stress, that I'm worried about something, that I'm unhappy, that life is hard - those are things I had before. I cannot say any of those things here."
                                    </p>
                                </div>
                                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                                    <p className="mb-2 font-bold">On Money:</p>
                                    <p className="text-sm italic">
                                        "If life is difficult here, it's because you don't know how to manage yourself or manage the money that you earn. It really is the situation."
                                    </p>
                                </div>
                                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                                    <p className="mb-2 font-bold">On Holidays:</p>
                                    <p className="text-sm italic">
                                        "I can't tell you how many wonderful holidays I've had in the three years of living in Cambodia that has cost me next to nothing. I could not do that back home."
                                    </p>
                                </div>
                                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                                    <p className="mb-2 font-bold">For Others Considering the Move:</p>
                                    <p className="text-sm italic">
                                        "If you need a break from Western society to pull yourself towards yourself and just calm yourself again and find yourself, Cambodia is a great place to do it - cheaply and peacefully."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Practical Info */}
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-bold text-gray-900 mb-4">Want the Full Details?</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link
                                    href="/celeste-phnom-penh"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
                                >
                                    <h4 className="font-bold text-blue-900 mb-1">Full Phnom Penh Guide</h4>
                                    <p className="text-gray-700 text-sm">Rentals, teaching, costs, healthcare</p>
                                </Link>
                                <Link
                                    href="/phnom-penh"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-green-500 transition-colors"
                                >
                                    <h4 className="font-bold text-green-900 mb-1">Phnom Penh Overview</h4>
                                    <p className="text-gray-700 text-sm">Capital city guide</p>
                                </Link>
                                <Link
                                    href="/visa"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-purple-500 transition-colors"
                                >
                                    <h4 className="font-bold text-purple-900 mb-1">Visa Guide</h4>
                                    <p className="text-gray-700 text-sm">Work permits & visas</p>
                                </Link>
                                <Link
                                    href="/cost-of-living"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-orange-500 transition-colors"
                                >
                                    <h4 className="font-bold text-orange-900 mb-1">Cost of Living</h4>
                                    <p className="text-gray-700 text-sm">Budget breakdowns</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
