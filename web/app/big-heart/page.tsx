import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Welcome to Cambodia | Small Country, Big Heart 🇰🇭',
    description: 'Cambodia may be a small and poor country, but it has the biggest heart. Discover the warmth, kindness, and genuine hospitality of the Khmer people.',
};

export default function BigHeartPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-800 text-sm font-semibold mb-4">
                    Welcome Message
                </span>
                <h1 className="text-4xl font-extrabold mb-2">Welcome to Cambodia 🇰🇭</h1>
                <h2 className="text-2xl text-gray-600 mb-8">Small Country, Big Heart</h2>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <div className="bg-gradient-to-r from-red-500 to-blue-500 p-8 rounded-xl text-white mb-8">
                        <div className="text-center">
                            <div className="text-6xl mb-4">❤️</div>
                            <h2 className="text-3xl font-bold mb-4">
                                Cambodia is a small & poor country<br />but has a BIG HEART!
                            </h2>
                            <p className="text-xl opacity-90">
                                ស្វាគមន៍ (Svakom) - Welcome!
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* The Truth About Cambodia */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Beautiful Truth</h2>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <p className="text-blue-800 leading-relaxed mb-4">
                                    Yes, Cambodia is economically developing. Yes, it's one of the poorest countries in Southeast Asia. But what Cambodia lacks in material wealth, it more than makes up for in <strong>human warmth, genuine kindness, and authentic hospitality</strong>.
                                </p>
                                <p className="text-blue-700 text-sm italic">
                                    The Khmer people have hearts bigger than any bank account could measure.
                                </p>
                            </div>
                        </div>

                        {/* What Makes Cambodia Special */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Makes Cambodia's Heart So Big?</h2>

                            <div className="space-y-4">
                                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                    <h3 className="text-xl font-bold text-green-900 mb-3">🙏 Genuine Kindness</h3>
                                    <p className="text-green-800 mb-2">
                                        The Khmer people don't just smile at you - they <strong>genuinely care</strong> about your wellbeing. Their kindness isn't transactional; it comes from the heart.
                                    </p>
                                    <div className="bg-white p-3 rounded-lg mt-3">
                                        <p className="text-green-700 text-sm italic">
                                            "There's no negative emotion in Cambodia. The people are calm, kind, and they rest." - Celeste, South African expat
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                                    <h3 className="text-xl font-bold text-purple-900 mb-3">😊 Warm Smiles Everywhere</h3>
                                    <p className="text-purple-800 mb-2">
                                        Walk down any street in Cambodia and you'll be greeted with <strong>authentic smiles</strong>. Not forced. Not fake. Just pure, genuine warmth from people who are happy to see you.
                                    </p>
                                    <div className="bg-white p-3 rounded-lg mt-3">
                                        <p className="text-purple-700 text-sm">
                                            Even the street vendors, tuk-tuk drivers, and shop owners will remember you and greet you like an old friend.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                                    <h3 className="text-xl font-bold text-yellow-900 mb-3">🤝 Welcoming Spirit</h3>
                                    <p className="text-yellow-800 mb-2">
                                        Cambodia doesn't just <strong>tolerate</strong> foreigners - it <strong>welcomes</strong> them with open arms. You're not seen as a tourist or an outsider, but as a guest in their home.
                                    </p>
                                    <div className="bg-white p-3 rounded-lg mt-3">
                                        <p className="text-yellow-700 text-sm italic">
                                            "Thank you for speaking about Cambodia so everybody can know. Thank you for loving this country enough to want to speak about it." - Celeste's students
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                                    <h3 className="text-xl font-bold text-orange-900 mb-3">🙌 Helpful & Trusting</h3>
                                    <p className="text-orange-800 mb-2">
                                        Need help? Cambodians will go out of their way to assist you, even if they don't speak your language. They're <strong>trusting, helpful, and patient</strong>.
                                    </p>
                                    <div className="bg-white p-3 rounded-lg mt-3">
                                        <p className="text-orange-700 text-sm">
                                            Lost? Someone will walk you to your destination. Need directions? They'll pull out their phone and help you navigate.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-pink-50 p-6 rounded-xl border border-pink-100">
                                    <h3 className="text-xl font-bold text-pink-900 mb-3">🕊️ Peaceful & Calm</h3>
                                    <p className="text-pink-800 mb-2">
                                        Despite their difficult history, Cambodians have chosen <strong>peace over anger, forgiveness over resentment</strong>. Their calm demeanor is infectious.
                                    </p>
                                    <div className="bg-white p-3 rounded-lg mt-3">
                                        <p className="text-pink-700 text-sm italic">
                                            "They work to live, not live to work. Status, cars, clothes - that doesn't matter here."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Despite Poverty */}
                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100">
                            <h2 className="text-2xl font-bold text-indigo-900 mb-4">Despite Economic Challenges...</h2>
                            <div className="space-y-3">
                                <div className="bg-white p-4 rounded-lg">
                                    <p className="text-indigo-800 mb-2">
                                        <strong>They share what little they have.</strong>
                                    </p>
                                    <p className="text-indigo-700 text-sm">
                                        A street vendor making $5 a day will still offer you a smile and help you find your way.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <p className="text-indigo-800 mb-2">
                                        <strong>They prioritize relationships over possessions.</strong>
                                    </p>
                                    <p className="text-indigo-700 text-sm">
                                        Family time, community gatherings, and friendships matter more than material wealth.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <p className="text-indigo-800 mb-2">
                                        <strong>They find joy in simple things.</strong>
                                    </p>
                                    <p className="text-indigo-700 text-sm">
                                        A shared meal, a sunset, a conversation with neighbors - these are the treasures of Cambodian life.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* What Expats Say */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Expats Say About Cambodia's Heart</h2>

                            <div className="space-y-4">
                                <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                                    <p className="text-blue-800 italic mb-2">
                                        "The people are rated 10/10. They are calm, kind, and there's no negative emotion."
                                    </p>
                                    <p className="text-blue-600 text-sm">- Celeste, South Africa</p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-xl border-l-4 border-green-500">
                                    <p className="text-green-800 italic mb-2">
                                        "If you come in and you raise your voice, you will embarrass yourself. People don't deal with anger here."
                                    </p>
                                    <p className="text-green-600 text-sm">- Multiple expats</p>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-xl border-l-4 border-purple-500">
                                    <p className="text-purple-800 italic mb-2">
                                        "Cambodia just grows on you with such speed and so unexpectedly. There's just something different here."
                                    </p>
                                    <p className="text-purple-600 text-sm">- Long-term residents</p>
                                </div>
                            </div>
                        </div>

                        {/* The Cambodian Way */}
                        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                            <h2 className="text-2xl font-bold text-yellow-900 mb-4">The Cambodian Way of Life</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-yellow-900 mb-2">🌅 Morning Routine</h3>
                                    <p className="text-yellow-800 text-sm">
                                        Kids go to school, families eat together, neighbors chat over coffee
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-yellow-900 mb-2">☀️ Afternoon Rest</h3>
                                    <p className="text-yellow-800 text-sm">
                                        Families reunite, kids switch to Khmer school, people rest and recharge
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-yellow-900 mb-2">🌙 Evening Gathering</h3>
                                    <p className="text-yellow-800 text-sm">
                                        Street food, community time, laughter with neighbors
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-yellow-900 mb-2">🙏 Spiritual Life</h3>
                                    <p className="text-yellow-800 text-sm">
                                        Buddhism guides daily life with compassion and mindfulness
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* How to Respect the Big Heart */}
                        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                            <h2 className="text-2xl font-bold text-red-900 mb-4">How to Respect Cambodia's Big Heart</h2>
                            <div className="space-y-3">
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-red-900 mb-2">🙏 Leave Your Ego at the Border</h3>
                                    <p className="text-red-800 text-sm">
                                        Western pride and ego don't work here. Come with humility and openness.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-red-900 mb-2">😌 Stay Calm</h3>
                                    <p className="text-red-800 text-sm">
                                        Never raise your voice or show anger. Cambodians value peace and calm communication.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-red-900 mb-2">💝 Show Gratitude</h3>
                                    <p className="text-red-800 text-sm">
                                        A simple "aw-kohn" (thank you) goes a long way. Appreciate the kindness you receive.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-red-900 mb-2">🤝 Be Patient</h3>
                                    <p className="text-red-800 text-sm">
                                        Things move slower here. Embrace it. That's part of the charm.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* The Gift of Cambodia */}
                        <div className="bg-gradient-to-r from-pink-500 to-red-500 p-8 rounded-xl text-white">
                            <h2 className="text-2xl font-bold mb-4">The Gift Cambodia Gives You</h2>
                            <div className="space-y-4">
                                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                                    <p className="mb-2 font-bold">❤️ A Lesson in Kindness</p>
                                    <p className="text-sm">
                                        You'll learn that wealth isn't measured in dollars, but in the warmth of human connection.
                                    </p>
                                </div>
                                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                                    <p className="mb-2 font-bold">🧘 A Lesson in Peace</p>
                                    <p className="text-sm">
                                        You'll discover that a calm mind is worth more than a busy schedule.
                                    </p>
                                </div>
                                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                                    <p className="mb-2 font-bold">🙏 A Lesson in Gratitude</p>
                                    <p className="text-sm">
                                        You'll appreciate simple things: a smile, a shared meal, a moment of rest.
                                    </p>
                                </div>
                                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                                    <p className="mb-2 font-bold">🌍 A Lesson in Humanity</p>
                                    <p className="text-sm">
                                        You'll remember what it means to be human in a world that often forgets.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Final Message */}
                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-100 text-center">
                            <div className="text-5xl mb-4">🇰🇭</div>
                            <h2 className="text-2xl font-bold text-blue-900 mb-4">
                                Welcome to Cambodia
                            </h2>
                            <p className="text-blue-800 text-lg mb-4">
                                A small country with the <strong>biggest heart</strong> in Southeast Asia
                            </p>
                            <p className="text-blue-700 italic">
                                Come for the affordability. Stay for the people. Leave with a transformed heart.
                            </p>
                        </div>

                        {/* Related Links */}
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-bold text-gray-900 mb-4">Learn More About Cambodia's People</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <Link
                                    href="/people"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
                                >
                                    <h4 className="font-bold text-blue-900 mb-1">The People</h4>
                                    <p className="text-gray-700 text-sm">Why they're rated 10/10</p>
                                </Link>
                                <Link
                                    href="/friendly"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-green-500 transition-colors"
                                >
                                    <h4 className="font-bold text-green-900 mb-1">Friendly Locals</h4>
                                    <p className="text-gray-700 text-sm">Genuine warmth & smiles</p>
                                </Link>
                                <Link
                                    href="/respect"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-purple-500 transition-colors"
                                >
                                    <h4 className="font-bold text-purple-900 mb-1">Respect Locals</h4>
                                    <p className="text-gray-700 text-sm">Cultural do's and don'ts</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
