import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Teachers in Cambodia | Highly Respected as Second Parents',
    description: 'In Cambodia, teachers are highly respected and often regarded as second parents. Discover the honor and responsibility of teaching in Cambodian culture.',
};

export default function TeachersRespectedPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-4">
                    Teaching Culture
                </span>
                <h1 className="text-4xl font-extrabold mb-2">Teachers in Cambodia 👨‍🏫</h1>
                <h2 className="text-xl text-gray-600 mb-8">Highly Respected as Second Parents</h2>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-8 rounded-xl text-white mb-8">
                        <div className="text-center">
                            <div className="text-6xl mb-4">👨‍🏫</div>
                            <h2 className="text-3xl font-bold mb-4">
                                Teachers = Second Parents
                            </h2>
                            <p className="text-xl opacity-90">
                                គ្រូ (Kru) - Teacher (A title of deep respect)
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* The Honor of Teaching */}
                        <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                            <h2 className="text-2xl font-bold text-green-900 mb-4">The Honor of Being a Teacher</h2>
                            <div className="bg-white p-4 rounded-lg mb-4">
                                <p className="text-green-800 leading-relaxed mb-3">
                                    In Cambodian culture, teachers hold a position of <strong>extraordinary respect and honor</strong>. They are not just educators - they are considered <strong>second parents</strong> who shape the moral, intellectual, and spiritual development of children.
                                </p>
                                <p className="text-green-700 text-sm italic">
                                    The relationship between teacher and student goes far beyond the classroom.
                                </p>
                            </div>
                        </div>

                        {/* Why Teachers Are So Respected */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Teachers Are So Highly Respected</h2>

                            <div className="space-y-4">
                                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                    <h3 className="text-xl font-bold text-blue-900 mb-3">🙏 Buddhist Influence</h3>
                                    <p className="text-blue-800 mb-2">
                                        In Buddhist tradition, teachers are seen as <strong>guides on the path to enlightenment</strong>. They impart not just knowledge, but wisdom and moral values.
                                    </p>
                                    <div className="bg-white p-3 rounded-lg mt-3">
                                        <p className="text-blue-700 text-sm">
                                            Historically, monks were the primary teachers in Cambodia, and this reverence has carried over to all educators.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                                    <h3 className="text-xl font-bold text-purple-900 mb-3">👨‍👩‍👧 Second Parents</h3>
                                    <p className="text-purple-800 mb-2">
                                        Teachers are entrusted with children for a significant portion of their day. Parents view teachers as <strong>partners in raising their children</strong>.
                                    </p>
                                    <div className="bg-white p-3 rounded-lg mt-3">
                                        <p className="text-purple-700 text-sm italic">
                                            "Thank you, teacher. Thank you for teaching my child." - Common parent sentiment
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                                    <h3 className="text-xl font-bold text-orange-900 mb-3">📚 Gatekeepers of Knowledge</h3>
                                    <p className="text-orange-800 mb-2">
                                        Education is seen as the <strong>pathway out of poverty</strong>. Teachers hold the keys to a better future for Cambodian children.
                                    </p>
                                    <div className="bg-white p-3 rounded-lg mt-3">
                                        <p className="text-orange-700 text-sm">
                                            In a developing country, education is precious, and teachers are the ones who provide it.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-pink-50 p-6 rounded-xl border border-pink-100">
                                    <h3 className="text-xl font-bold text-pink-900 mb-3">🌟 Role Models</h3>
                                    <p className="text-pink-800 mb-2">
                                        Teachers are expected to be <strong>moral exemplars</strong> - demonstrating kindness, patience, wisdom, and integrity.
                                    </p>
                                    <div className="bg-white p-3 rounded-lg mt-3">
                                        <p className="text-pink-700 text-sm">
                                            Children look up to their teachers not just for academic guidance, but for life lessons.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* How Students Show Respect */}
                        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                            <h2 className="text-2xl font-bold text-yellow-900 mb-4">How Students Show Respect to Teachers</h2>
                            <div className="space-y-3">
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-yellow-900 mb-2">🙇 The Sampeah (Bow)</h3>
                                    <p className="text-yellow-800 text-sm">
                                        Students greet teachers with the traditional Sampeah - hands pressed together at chest level with a slight bow. The higher the hands, the more respect shown.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-yellow-900 mb-2">🗣️ Respectful Language</h3>
                                    <p className="text-yellow-800 text-sm">
                                        Students address teachers as "Kru" (teacher) or "Lok Kru" (Mr./Mrs. Teacher) - never by first name.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-yellow-900 mb-2">👂 Attentive Listening</h3>
                                    <p className="text-yellow-800 text-sm">
                                        Students sit quietly, listen carefully, and rarely interrupt. Talking back to a teacher is unthinkable.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-yellow-900 mb-2">🎁 Gifts & Gratitude</h3>
                                    <p className="text-yellow-800 text-sm">
                                        Students often bring small gifts to teachers - flowers, fruit, or handmade cards - as tokens of appreciation.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Celeste's Experience */}
                        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-100">
                            <h2 className="text-2xl font-bold text-teal-900 mb-4">Celeste's Experience as a Teacher</h2>
                            <div className="space-y-3">
                                <div className="bg-white p-4 rounded-lg">
                                    <p className="text-teal-800 italic mb-2">
                                        "The children in Cambodia are so eager to learn. These kids are bright. They love learning. They've just got this natural want to do good."
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <p className="text-teal-800 italic mb-2">
                                        "If you give a child a choice between playing outside and doing math, they choose math - happily!"
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <p className="text-teal-800 italic mb-2">
                                        "The kids said to me, 'Thank you, teacher. Thank you for speaking about Cambodia so everybody can know. Thank you for loving this country enough to want to speak about it.'"
                                    </p>
                                    <p className="text-teal-700 text-sm mt-2">
                                        This gratitude and appreciation is what makes teaching in Cambodia so humbling and rewarding.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* The Responsibility */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Responsibility of Being a Teacher</h2>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-red-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-red-900 mb-2">📖 Academic Excellence</h3>
                                    <p className="text-red-800 text-sm">
                                        Teachers are expected to provide quality education and help students succeed academically.
                                    </p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-blue-900 mb-2">🧭 Moral Guidance</h3>
                                    <p className="text-blue-800 text-sm">
                                        Teachers help shape students' character, teaching values like respect, honesty, and compassion.
                                    </p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-green-900 mb-2">🤝 Mentorship</h3>
                                    <p className="text-green-800 text-sm">
                                        Teachers provide guidance beyond the classroom, helping students navigate life challenges.
                                    </p>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-purple-900 mb-2">💝 Care & Compassion</h3>
                                    <p className="text-purple-800 text-sm">
                                        Teachers are expected to genuinely care about each student's wellbeing and success.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Teaching in Cambodia vs the West */}
                        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                            <h2 className="text-2xl font-bold text-indigo-900 mb-4">Teaching in Cambodia vs the West</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-indigo-900 mb-3">🇰🇭 Cambodia</h3>
                                    <ul className="space-y-2 text-indigo-800 text-sm">
                                        <li>✅ Students are respectful & attentive</li>
                                        <li>✅ Eager to learn</li>
                                        <li>✅ Teachers are honored</li>
                                        <li>✅ No defiance or authority issues</li>
                                        <li>✅ Parents support teachers</li>
                                        <li>✅ Gratitude is expressed openly</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-red-900 mb-3">🌍 Western Countries</h3>
                                    <ul className="space-y-2 text-red-800 text-sm">
                                        <li>❌ More behavioral challenges</li>
                                        <li>❌ Some students uninterested</li>
                                        <li>❌ Teachers often undervalued</li>
                                        <li>❌ Authority questioned</li>
                                        <li>❌ Parent-teacher conflicts</li>
                                        <li>❌ Less appreciation shown</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Why Teach in Cambodia */}
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-8 rounded-xl text-white">
                            <h2 className="text-2xl font-bold mb-4">Why Teaching in Cambodia is Special</h2>
                            <div className="space-y-4">
                                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                                    <p className="mb-2 font-bold">🎓 You're Making a Real Difference</p>
                                    <p className="text-sm">
                                        Education is the pathway out of poverty. You're literally changing lives.
                                    </p>
                                </div>
                                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                                    <p className="mb-2 font-bold">❤️ You're Genuinely Appreciated</p>
                                    <p className="text-sm">
                                        Students, parents, and the community value your work and show gratitude.
                                    </p>
                                </div>
                                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                                    <p className="mb-2 font-bold">🙏 You're Respected</p>
                                    <p className="text-sm">
                                        Your role as a teacher is honored and your authority is never questioned.
                                    </p>
                                </div>
                                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                                    <p className="mb-2 font-bold">😊 It's Truly Humbling</p>
                                    <p className="text-sm">
                                        The experience of teaching eager, grateful students transforms you as a person.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Final Thoughts */}
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100">
                            <h2 className="text-xl font-bold text-blue-900 mb-3">Celeste's Reflection</h2>
                            <div className="bg-white p-4 rounded-lg">
                                <p className="text-blue-800 italic mb-3">
                                    "I never thought my life would take this turn. But it's been such a humbling experience. The children are so eager to learn, so bright, and so appreciative."
                                </p>
                                <p className="text-blue-700 text-sm">
                                    "It's not about who you're speaking to or where you're going. It's purely: thank you for speaking about us. Thank you for loving this country enough to want to speak about it. That is what blows my mind."
                                </p>
                            </div>
                        </div>

                        {/* Related Links */}
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-bold text-gray-900 mb-4">Learn More About Teaching in Cambodia</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link
                                    href="/celeste-phnom-penh"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
                                >
                                    <h4 className="font-bold text-blue-900 mb-1">Celeste's Teaching Story</h4>
                                    <p className="text-gray-700 text-sm">ESL teacher in Phnom Penh</p>
                                </Link>
                                <Link
                                    href="/people"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-green-500 transition-colors"
                                >
                                    <h4 className="font-bold text-green-900 mb-1">The People</h4>
                                    <p className="text-gray-700 text-sm">Why Cambodians are rated 10/10</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
