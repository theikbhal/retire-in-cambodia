import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Slow Down: The Greatest Gift of Southeast Asia | Kelly\'s Philosophy',
    description: 'Kelly shares the greatest gift Southeast Asia offers: the ability to slow down, let go of the rush, and live in the moment. A mindset shift for a better life.',
};

export default function SlowDownPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-800 text-sm font-semibold mb-4">
                    Philosophy & Mindset
                </span>
                <h1 className="text-4xl font-extrabold mb-2">Slow Down 🧘</h1>
                <h2 className="text-xl text-gray-600 mb-8">The Greatest Gift Southeast Asia Can Give You</h2>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <div className="aspect-w-16 aspect-h-9 mb-8 overflow-hidden rounded-xl shadow-lg border border-gray-200">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/Wv1rYRILsTk"
                            title="Slow Down - The Greatest Gift of Southeast Asia"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full object-cover"
                        ></iframe>
                    </div>

                    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-100 mb-8">
                        <p className="text-teal-900 text-lg italic">
                            "Slowing down isn't falling behind. It's finally catching up with yourself." — Kelly
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Introduction */}
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h2 className="text-2xl font-bold text-blue-900 mb-3">The Greatest Gift</h2>
                            <p className="text-blue-800 leading-relaxed">
                                If you're willing to accept it, Southeast Asia offers you something precious: <strong>the ability to slow down your life</strong>. This isn't just a lifestyle change—it's a complete mindset shift.
                            </p>
                        </div>

                        {/* 1. Let Go of the Rush */}
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                            <h2 className="text-2xl font-bold text-purple-900 mb-4">1. Let Go of the Rush 🏃</h2>
                            <div className="bg-white p-4 rounded-lg mb-4">
                                <p className="text-purple-800 mb-3">
                                    Life doesn't follow strict schedules here. "Soon" can mean 10 minutes or half an hour. Your favorite cafe might close for 2-3 days without notice.
                                </p>
                                <p className="text-purple-700 italic">
                                    "Locals don't stress. They just smile. You can't change the things you can't change. It's really that simple."
                                </p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">✅</span>
                                    <p className="text-purple-800 text-sm">Stop fighting the pace → Start to relax</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">✅</span>
                                    <p className="text-purple-800 text-sm">Breathe easier</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">✅</span>
                                    <p className="text-purple-800 text-sm">Check your phone less</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">✅</span>
                                    <p className="text-purple-800 text-sm">Live in the moment</p>
                                </div>
                            </div>
                            <p className="text-purple-900 font-bold mt-4 text-center">
                                "Stop chasing time and live within it."
                            </p>
                        </div>

                        {/* 2. Redefine Stress */}
                        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl border border-orange-100">
                            <h2 className="text-2xl font-bold text-orange-900 mb-4">2. Redefine What Stress Is 💼</h2>
                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-red-900 mb-2">❌ Western Success</h3>
                                    <ul className="space-y-1 text-red-800 text-sm">
                                        <li>• High income</li>
                                        <li>• Job titles</li>
                                        <li>• Productivity</li>
                                        <li>• Possessions</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-green-900 mb-2">✅ Southeast Asian Success</h3>
                                    <ul className="space-y-1 text-green-800 text-sm">
                                        <li>• Morning walks</li>
                                        <li>• Time with family</li>
                                        <li>• Pride in small things</li>
                                        <li>• Peace of mind</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                                <p className="text-orange-800 mb-2">
                                    "Needing less brings more peace. Less means more."
                                </p>
                                <p className="text-orange-900 font-bold">
                                    Waking up without an alarm clock = true freedom! 🐓
                                </p>
                            </div>
                            <p className="text-orange-900 font-bold mt-4 text-center">
                                "True success is peace of mind, not a packed schedule."
                            </p>
                        </div>

                        {/* 3. Slow Living */}
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
                            <h2 className="text-2xl font-bold text-green-900 mb-4">3. Discover the Beauty of Slow Living 🌿</h2>
                            <p className="text-green-800 mb-4">
                                Everyday moments become experiences to savor:
                            </p>
                            <div className="space-y-3">
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-green-900 mb-1">☕ Sitting in a cafe along the river</h3>
                                    <p className="text-green-800 text-sm">Watching the world go by. Just relaxing.</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-green-900 mb-1">🍜 Taking your time eating</h3>
                                    <p className="text-green-800 text-sm">Enjoying and savoring that bowl of noodles.</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-green-900 mb-1">🛒 Walking through a market</h3>
                                    <p className="text-green-800 text-sm">Absorbing the sights (and maybe the smells... 😄).</p>
                                </div>
                            </div>
                            <p className="text-green-900 font-bold mt-4 text-center">
                                "Slow living doesn't mean being lazy. It means being present within yourself."
                            </p>
                        </div>

                        {/* 4. Practice Acceptance */}
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                            <h2 className="text-2xl font-bold text-blue-900 mb-4">4. Practice the Art of Acceptance 🙏</h2>
                            <p className="text-blue-800 mb-4">
                                Life in Southeast Asia teaches patience and adaptability. Things just happen:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-blue-900 mb-2">🌧️ Rainstorm?</h3>
                                    <p className="text-blue-800 text-sm">Stand under an awning, talk to someone next to you. Maybe invite them for coffee!</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-blue-900 mb-2">💡 Power goes out?</h3>
                                    <p className="text-blue-800 text-sm">Light some candles and enjoy it. It won't come back faster if you're upset.</p>
                                </div>
                            </div>
                            <p className="text-blue-900 font-bold mt-4 text-center">
                                "Learn to laugh at the inconveniences. Acceptance brings calm and freedom from constant control."
                            </p>
                        </div>

                        {/* 5. Build Your Own Rhythms */}
                        <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl border border-pink-100">
                            <h2 className="text-2xl font-bold text-pink-900 mb-4">5. Build Your Own Slow Rhythms 🌅</h2>
                            <p className="text-pink-800 mb-4">
                                Start peaceful routines that work for you:
                            </p>
                            <div className="grid md:grid-cols-2 gap-3">
                                <div className="bg-white p-3 rounded-lg">
                                    <p className="text-pink-800 text-sm">🚶 Morning walk before it gets too hot</p>
                                </div>
                                <div className="bg-white p-3 rounded-lg">
                                    <p className="text-pink-800 text-sm">😴 Afternoon nap (Kelly's favorite!)</p>
                                </div>
                                <div className="bg-white p-3 rounded-lg">
                                    <p className="text-pink-800 text-sm">🍳 Cooking instead of ordering out</p>
                                </div>
                                <div className="bg-white p-3 rounded-lg">
                                    <p className="text-pink-800 text-sm">🍻 Chatting with neighbors in the evening</p>
                                </div>
                            </div>
                            <p className="text-pink-900 font-bold mt-4 text-center">
                                "Live with the rhythm of the day, not the clock. Doing less sometimes feels like being more alive."
                            </p>
                        </div>

                        {/* 6. Appreciate Time */}
                        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border border-yellow-100">
                            <h2 className="text-2xl font-bold text-yellow-900 mb-4">6. Appreciate the Gift of Time ⏰</h2>
                            <p className="text-yellow-800 mb-4">
                                Southeast Asia gives you something precious: <strong>your time back</strong>. Not more hours, but those hours belong to YOU.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-start gap-3 bg-white p-3 rounded-lg">
                                    <span className="text-xl">🦎</span>
                                    <p className="text-yellow-800 text-sm">The sound of geckos at night</p>
                                </div>
                                <div className="flex items-start gap-3 bg-white p-3 rounded-lg">
                                    <span className="text-xl">🌧️</span>
                                    <p className="text-yellow-800 text-sm">The smell of rain hitting the tin roof (puts Kelly right to sleep!)</p>
                                </div>
                                <div className="flex items-start gap-3 bg-white p-3 rounded-lg">
                                    <span className="text-xl">😄</span>
                                    <p className="text-yellow-800 text-sm">The laughter of neighbors enjoying their life</p>
                                </div>
                            </div>
                            <p className="text-yellow-900 font-bold mt-4 text-center">
                                "Life isn't supposed to be a race. It's supposed to be lived and felt."
                            </p>
                        </div>

                        {/* The Real Lesson */}
                        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-8 rounded-xl text-white">
                            <h2 className="text-2xl font-bold mb-4 text-center">The Real Lesson 💡</h2>
                            <div className="space-y-4">
                                <p className="text-lg text-center">
                                    Slowing down is more than a lifestyle. <strong>It's a mindset shift.</strong>
                                </p>
                                <div className="bg-white/20 p-6 rounded-lg backdrop-blur-sm">
                                    <p className="mb-3">Stop equating busyness with worth.</p>
                                    <p className="mb-3">Slowness allows connection with others and with yourself.</p>
                                    <p className="mb-3">If you're sitting under a palm tree with iced tea wondering "Am I doing enough?"</p>
                                    <p className="text-xl font-bold">Yeah, you probably are. ✅</p>
                                </div>
                                <p className="text-center text-lg font-bold mt-6">
                                    "Peace comes from being, not doing."
                                </p>
                            </div>
                        </div>

                        {/* Kelly's Final Wisdom */}
                        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100 text-center">
                            <p className="text-emerald-900 text-xl font-bold mb-2">
                                "Slowing down isn't falling behind."
                            </p>
                            <p className="text-emerald-800 text-lg">
                                It's finally catching up with yourself.
                            </p>
                        </div>

                        {/* Related Content */}
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-bold text-gray-900 mb-4">More from Kelly's Journey</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <Link
                                    href="/five-reasons-kelly"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-green-500 transition-colors"
                                >
                                    <h4 className="font-bold text-green-900 mb-1">5 Reasons</h4>
                                    <p className="text-gray-700 text-sm">Why Kelly moved to Cambodia</p>
                                </Link>
                                <Link
                                    href="/kelly-apartment-tour"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
                                >
                                    <h4 className="font-bold text-blue-900 mb-1">Apartment Tour</h4>
                                    <p className="text-gray-700 text-sm">$300/month living space</p>
                                </Link>
                                <Link
                                    href="/autumn-in-asia-channel"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-orange-500 transition-colors"
                                >
                                    <h4 className="font-bold text-orange-900 mb-1">YouTube Channel</h4>
                                    <p className="text-gray-700 text-sm">Subscribe to Autumn in Asia</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
