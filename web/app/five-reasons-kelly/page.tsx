import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: '5 Reasons Kelly Moved to Siem Reap | Why Cambodia?',
    description: 'Kelly Osowski shares his 5 personal reasons for moving to Siem Reap, Cambodia: cost of living, weather, relaxing lifestyle, Khmer people, and new experiences.',
};

export default function FiveReasonsPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-800 text-sm font-semibold mb-4">
                    Personal Story
                </span>
                <h1 className="text-4xl font-extrabold mb-2">5 Reasons I Moved to Siem Reap 🍂</h1>
                <h2 className="text-xl text-gray-600 mb-8">Kelly's Personal Journey to Cambodia</h2>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <div className="aspect-w-16 aspect-h-9 mb-8 overflow-hidden rounded-xl shadow-lg border border-gray-200">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/iB9Z1T4vtpQ"
                            title="5 Reasons I moved to Siem Reap, Cambodia"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full object-cover"
                        ></iframe>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100 mb-8">
                        <p className="text-yellow-900 italic">
                            "I'm not going to tell you why <strong>you</strong> should move to Cambodia, but I'm going to tell you why <strong>I</strong> moved to Cambodia." — Kelly
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Reason 1: Cost of Living */}
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-4xl font-bold text-green-600">1</span>
                                <h2 className="text-2xl font-bold text-green-900">Cost of Living 💰</h2>
                            </div>
                            <p className="text-green-800 mb-4 font-bold">
                                "Your dollar goes a lot further. In the US, I'm a poor person. Here, I'm doing quite well."
                            </p>
                            <div className="bg-white p-4 rounded-lg">
                                <h3 className="font-bold text-green-900 mb-2">What This Means for Kelly:</h3>
                                <ul className="space-y-2 text-green-800 text-sm">
                                    <li>✅ <strong>Lives off Social Security:</strong> Very comfortably</li>
                                    <li>✅ <strong>Own Apartment:</strong> In the US, he'd have to rent a room with a "crazy cat lady"</li>
                                    <li>✅ <strong>Can Travel:</strong> Cambodia is a great hub for Southeast Asia (Singapore, KL, etc.)</li>
                                    <li>✅ <strong>Saves on Food:</strong> Shops at wet markets instead of Western supermarkets</li>
                                </ul>
                            </div>
                            <p className="text-green-700 text-sm mt-4 italic">
                                "I can live independently here. I can have my own apartment, take care of all my bills, and more."
                            </p>
                        </div>

                        {/* Reason 2: Weather */}
                        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl border border-orange-100">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-4xl font-bold text-orange-600">2</span>
                                <h2 className="text-2xl font-bold text-orange-900">The Weather ☀️</h2>
                            </div>
                            <p className="text-orange-800 mb-4 font-bold">
                                "I love the weather here. The only white I want underneath my feet is sand."
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-orange-900 mb-2">What He Loves:</h3>
                                    <ul className="space-y-1 text-orange-800 text-sm">
                                        <li>🌡️ Warm weather (hates cold)</li>
                                        <li>💨 Fans are usually enough</li>
                                        <li>💧 Likes the humidity (good for skin)</li>
                                        <li>🌧️ Warm rain during monsoons</li>
                                        <li>🌱 Everything blossoms after rain</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-orange-900 mb-2">Practical Tips:</h3>
                                    <ul className="space-y-1 text-orange-800 text-sm">
                                        <li>A good fan + breeze = comfortable</li>
                                        <li>AC at night for a few hours to cool down</li>
                                        <li>Rain usually 2 hours, not all day</li>
                                        <li>Do errands 10am-3pm to avoid rain</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Reason 3: Relaxing Lifestyle */}
                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-4xl font-bold text-blue-600">3</span>
                                <h2 className="text-2xl font-bold text-blue-900">Relaxing Lifestyle 🧘</h2>
                            </div>
                            <p className="text-blue-800 mb-4 font-bold">
                                "You're away from the rat race. It's calm and mellow."
                            </p>
                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-blue-900 mb-2">🏘️ Neighborhoods</h3>
                                    <p className="text-blue-800 text-sm">
                                        No "rich section" - mansions next to smaller houses. Move away from Pub Street and it's very quiet.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-blue-900 mb-2">😊 Calm & Mellow People</h3>
                                    <p className="text-blue-800 text-sm">
                                        Neighbors smile, say hi, stop to talk. Very friendly and warm.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-blue-900 mb-2">🚶 Convenience</h3>
                                    <p className="text-blue-800 text-sm">
                                        Everything within walking distance: mom & pop shops, wet market (3-4 mins), hospital (3 min walk). Anything else is max $3 by tuk-tuk.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-blue-900 mb-2">💬 Positive Conversations</h3>
                                    <p className="text-blue-800 text-sm">
                                        "People talk about positive things. Not the divided politics and negativity like in the US."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Reason 4: Khmer People */}
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-4xl font-bold text-purple-600">4</span>
                                <h2 className="text-2xl font-bold text-purple-900">The Khmer People 🤝</h2>
                            </div>
                            <p className="text-purple-800 mb-4 font-bold">
                                "They're great people. Very easygoing, friendly, helpful, trusting, and spiritual."
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-purple-900 mb-2">Characteristics:</h3>
                                    <ul className="space-y-1 text-purple-800 text-sm">
                                        <li>😊 Smile back when you smile</li>
                                        <li>🗣️ Say hello back</li>
                                        <li>🍜 Grandma brings bowls of fruit/noodles</li>
                                        <li>🗺️ Very helpful with directions</li>
                                        <li>💵 Trusting (will let you pay later if short)</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-purple-900 mb-2">Spirituality:</h3>
                                    <p className="text-purple-800 text-sm">
                                        "Very spiritual people. They show their beliefs in their daily actions and how they carry themselves. They try to be very nice people in general."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Reason 5: New Experiences */}
                        <div className="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-xl border border-red-100">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-4xl font-bold text-red-600">5</span>
                                <h2 className="text-2xl font-bold text-red-900">Experiencing New Things 🌏</h2>
                            </div>
                            <p className="text-red-800 mb-4 font-bold">
                                "That's very exciting!"
                            </p>
                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-red-900 mb-2">🍜 Food</h3>
                                    <p className="text-red-800 text-sm">
                                        All kinds of different foods. New fruits he never knew existed. (Kelly has to go slow due to Crohn's disease)
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-red-900 mb-2">🏞️ Countryside</h3>
                                    <p className="text-red-800 text-sm">
                                        Beautiful countryside. Villages are really fun. People are curious and have a different lifestyle.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-red-900 mb-2">🔨 Different Methods</h3>
                                    <p className="text-red-800 text-sm">
                                        "They get things done by necessity or tradition. Sometimes it's an easier way! (OSHA would have a heart attack in construction 😄)"
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-red-900 mb-2">🛕 Places to Explore</h3>
                                    <p className="text-red-800 text-sm">
                                        Beyond Angkor Wat: many ruins, small vibrant towns (10,000 people), pagodas, and spiritual sites.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-red-900 mb-2">🙏 Buddhism</h3>
                                    <p className="text-red-800 text-sm">
                                        "It's more of a spiritual belief, a way of life. Nice to see how they worship at pagodas."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Kelly's Message */}
                        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-8 rounded-xl text-white text-center">
                            <h2 className="text-2xl font-bold mb-3">Kelly's Final Thoughts</h2>
                            <p className="text-lg mb-4">
                                "If you're still here, you're my number one fan!"
                            </p>
                            <p className="text-sm opacity-90">
                                These are Kelly's personal reasons. Your reasons might be different, and that's okay. Do your research and find what works for you.
                            </p>
                        </div>

                        {/* Related Links */}
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-bold text-gray-900 mb-4">Learn More About Kelly's Life in Cambodia</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link
                                    href="/kelly-autumn-in-asia"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
                                >
                                    <h4 className="font-bold text-blue-900 mb-1">Full Interview</h4>
                                    <p className="text-gray-700 text-sm">Kelly's complete cost breakdown and healthcare story</p>
                                </Link>
                                <Link
                                    href="/autumn-in-asia-channel"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-orange-500 transition-colors"
                                >
                                    <h4 className="font-bold text-orange-900 mb-1">YouTube Channel</h4>
                                    <p className="text-gray-700 text-sm">Subscribe to Autumn in Asia for weekly videos</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
