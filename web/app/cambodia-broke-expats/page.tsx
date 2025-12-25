import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: '5 Ways Cambodia Broke Expats | The Dark Side of Expat Life',
    description: 'The honest truth: Cambodia won\'t save you. It\'s a mirror that reflects the effort you put in. 5 ways expats break themselves in Cambodia.',
};

export default function CambodiaBrokeExpatsPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-800 text-sm font-semibold mb-4">
                    Honest Truth
                </span>
                <h1 className="text-4xl font-extrabold mb-2">5 Ways Cambodia Broke Expats 💔</h1>
                <h2 className="text-xl text-gray-600 mb-8">The Other Side of How It Changed My Life</h2>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <div className="aspect-w-16 aspect-h-9 mb-8 overflow-hidden rounded-xl shadow-lg border border-gray-200">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/RWKbP65nCkg"
                            title="5 Ways Cambodia Broke Expats"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full object-cover"
                        ></iframe>
                    </div>

                    <div className="bg-gradient-to-r from-gray-700 to-gray-900 p-8 rounded-xl text-white mb-8">
                        <div className="text-center">
                            <div className="text-6xl mb-4">⚠️</div>
                            <h2 className="text-3xl font-bold mb-4">
                                The Balanced Perspective
                            </h2>
                            <p className="text-xl opacity-90">
                                Cambodia won't judge you. But it also won't save you. That part is totally on you.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* Introduction */}
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h2 className="text-2xl font-bold text-blue-900 mb-4">Why This Video Exists</h2>
                            <div className="space-y-3 text-blue-800">
                                <p>
                                    Most videos focus on the positive side of expat life - the growth, freedom, and joy. But after receiving angry comments and dislikes, the creator realized: <strong>some people don't want to hear the good stuff.</strong>
                                </p>
                                <p className="italic text-blue-700">
                                    "They've lived here longer. They know better. They see Cambodia through a lens that I no longer wear."
                                </p>
                                <p>
                                    This is the balanced side. The honest truth about what happens when expats come to Cambodia but never stop running, never heal, and never engage.
                                </p>
                            </div>
                        </div>

                        {/* Important Note */}
                        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                            <h3 className="font-bold text-yellow-900 mb-2">⚠️ Important Context</h3>
                            <p className="text-yellow-800 text-sm">
                                This describes a <strong>tiny minority</strong> of expats - but they're quite visible. The majority of expats in Cambodia are thriving, growing, and living meaningful lives.
                            </p>
                        </div>

                        {/* Way #1 */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1️⃣ They Came Running But Never Stopped to Heal</h2>

                            <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-4">
                                <h3 className="text-xl font-bold text-red-900 mb-3">The Truth About Why People Come</h3>
                                <p className="text-red-800 mb-3">
                                    Most people come to Cambodia because they're <strong>escaping something</strong>. Their life at home wasn't so fantastic that they needed to move to the other side of the world.
                                </p>
                                <div className="bg-white p-4 rounded-lg">
                                    <h4 className="font-bold text-red-900 mb-2">Common Reasons:</h4>
                                    <ul className="space-y-1 text-red-800 text-sm">
                                        <li>💼 Failed business</li>
                                        <li>💔 Relationship or divorce</li>
                                        <li>😰 Burnout</li>
                                        <li>😔 Isolation</li>
                                        <li>🤷 Sense that life isn't working anymore</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 mb-4">
                                <h3 className="text-xl font-bold text-purple-900 mb-3">Cambodia: The Perfect Place to Disappear</h3>
                                <div className="space-y-2 text-purple-800">
                                    <p>✅ No one asks why you're here</p>
                                    <p>✅ No one wants a CV</p>
                                    <p>✅ Freedom, peace, silence</p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-xl text-white">
                                <h3 className="text-xl font-bold mb-3">⚠️ The Problem</h3>
                                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm mb-3">
                                    <p className="font-bold mb-2">
                                        "If you never stop running, you will never give yourself an opportunity to heal."
                                    </p>
                                    <p className="text-sm">
                                        Cambodia gives you the space, but not the tools.
                                    </p>
                                </div>
                                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                                    <p className="text-sm italic">
                                        "The same demons will follow you here, albeit they'll be wearing flip-flops."
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gray-100 p-4 rounded-xl mt-4">
                                <h4 className="font-bold text-gray-900 mb-2">What Happens:</h4>
                                <ul className="space-y-1 text-gray-800 text-sm">
                                    <li>• They find the cheap apartment</li>
                                    <li>• They find the bar selling dollar beers</li>
                                    <li>• But they never truly find themselves</li>
                                    <li>• Over time, they become <strong>hollow</strong></li>
                                    <li>• They build walls around themselves</li>
                                    <li>• They get irritated easily, avoid eye contact, live in a fog</li>
                                </ul>
                            </div>
                        </div>

                        {/* Way #2 */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2️⃣ Confusing Freedom with Lack of Structure</h2>

                            <div className="bg-green-50 p-6 rounded-xl border border-green-100 mb-4">
                                <h3 className="text-xl font-bold text-green-900 mb-3">Cambodia's Incredible Freedom</h3>
                                <ul className="space-y-2 text-green-800 text-sm">
                                    <li>✅ Easy access to long-term visas</li>
                                    <li>✅ No one micromanaging you</li>
                                    <li>✅ Can start a business easily</li>
                                    <li>✅ Complete autonomy</li>
                                </ul>
                            </div>

                            <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-4">
                                <h3 className="text-xl font-bold text-red-900 mb-3">⚠️ But Freedom Can Become a Trap</h3>
                                <p className="text-red-800 mb-3">
                                    <strong>Without structure, people drift.</strong> When you've drifted long enough, you lose momentum and meaning.
                                </p>
                            </div>

                            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                                <h3 className="text-xl font-bold text-yellow-900 mb-3">The Daily Routine of a Broken Expat:</h3>
                                <div className="space-y-2 text-yellow-800 text-sm">
                                    <p>🛌 Wake up late</p>
                                    <p>☕ Coffee at exactly the same table, same coffee shop every day</p>
                                    <p>📱 Scroll Telegram chats and expat forums, arguing online</p>
                                    <p>🍺 Three or four beers before dinner (some before lunchtime)</p>
                                    <p>😤 Complain about everything:</p>
                                    <ul className="ml-6 space-y-1">
                                        <li>• Tuk-tuks</li>
                                        <li>• Weather</li>
                                        <li>• Rents</li>
                                        <li>• Bills</li>
                                        <li>• Government</li>
                                    </ul>
                                </div>
                                <div className="bg-yellow-100 p-3 rounded-lg mt-3">
                                    <p className="text-yellow-900 font-bold text-sm">
                                        "They're not living here. They're just floating. Not involved with culture, community, or even themselves."
                                    </p>
                                </div>
                            </div>

                            <div className="bg-blue-100 p-4 rounded-xl mt-4">
                                <p className="text-blue-900 italic">
                                    "What begins as peace can turn into sedation. Days blur, goals fade, weeks pass with nothing to show but empty beer bottles and keyboard arguments."
                                </p>
                            </div>
                        </div>

                        {/* Way #3 */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3️⃣ Confusing Time with Wisdom</h2>

                            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 mb-4">
                                <h3 className="text-xl font-bold text-purple-900 mb-3">The Dangerous Trap</h3>
                                <p className="text-purple-800 mb-3">
                                    Thinking the number of years you've lived in Cambodia translates to wisdom. <strong>It's just not true.</strong>
                                </p>
                            </div>

                            <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-4">
                                <h3 className="text-xl font-bold text-red-900 mb-3">Weaponizing Time</h3>
                                <p className="text-red-800 mb-3">
                                    People who've lived here 5, 10, 15, 20, even 30 years say things like:
                                </p>
                                <div className="space-y-2 text-red-700 text-sm">
                                    <p>💬 "You'll understand when you've been here longer."</p>
                                    <p>💬 "That's not how things really work."</p>
                                    <p>💬 "You're still naive."</p>
                                </div>
                            </div>

                            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                                <h3 className="text-xl font-bold text-orange-900 mb-3">But When You Look Closer...</h3>
                                <div className="bg-white p-4 rounded-lg mb-3">
                                    <p className="text-orange-800 mb-2">
                                        They're just <strong>stuck</strong>. Not growing, not evolving. Just repeating.
                                    </p>
                                    <ul className="space-y-1 text-orange-700 text-sm">
                                        <li>• Haven't bothered to learn Khmer</li>
                                        <li>• Not integrated</li>
                                        <li>• Angry at a country they no longer try to understand</li>
                                    </ul>
                                </div>
                                <div className="bg-orange-100 p-4 rounded-lg">
                                    <p className="text-orange-900 font-bold">
                                        "Time doesn't make you wise. Reflection does. Humility does. Being wrong does."
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-xl text-white">
                                <p className="text-lg font-bold mb-2">True Wisdom Comes From:</p>
                                <ul className="space-y-2">
                                    <li>✨ Curiosity</li>
                                    <li>✨ Listening</li>
                                    <li>✨ Engaging with the new (people, experiences, activities, routines)</li>
                                </ul>
                                <p className="text-sm mt-4 italic opacity-90">
                                    "The moment you stop doing these things, you stop being wise and start becoming bitter."
                                </p>
                            </div>
                        </div>

                        {/* Way #4 */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4️⃣ Giving Up on Culture and Connection</h2>

                            <div className="bg-teal-50 p-6 rounded-xl border border-teal-100 mb-4">
                                <h3 className="text-xl font-bold text-teal-900 mb-3">When the Honeymoon Period Fades</h3>
                                <p className="text-teal-800 mb-3">
                                    At some point (totally natural), the excitement about Cambodian culture fades a little.
                                </p>
                                <div className="bg-white p-4 rounded-lg">
                                    <h4 className="font-bold text-teal-900 mb-2">What Happens When You Stop:</h4>
                                    <ul className="space-y-1 text-teal-800 text-sm">
                                        <li>❌ Stop going to local markets</li>
                                        <li>❌ Stop learning local phrases</li>
                                        <li>❌ Stop trying to understand why things work the way they do</li>
                                        <li>❌ Stay in your expat bubble</li>
                                        <li>❌ Get frustrated with locals for not behaving like Westerners</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-4">
                                <h3 className="text-xl font-bold text-red-900 mb-3">⚠️ The Result</h3>
                                <p className="text-red-800 mb-3">
                                    "Cambodia becomes <strong>inconvenient</strong> rather than <strong>inspiring</strong>."
                                </p>
                            </div>

                            <div className="bg-gray-100 p-4 rounded-xl mb-4">
                                <h4 className="font-bold text-gray-900 mb-2">The Frightening Reality:</h4>
                                <p className="text-gray-800 text-sm mb-2">
                                    People who haven't been outside their neighborhood in months. Haven't spoken to a Cambodian unless it's:
                                </p>
                                <ul className="space-y-1 text-gray-700 text-sm ml-4">
                                    <li>• The food delivery guy</li>
                                    <li>• Arguing with the landlord about rent</li>
                                </ul>
                                <p className="text-gray-900 font-bold mt-3 text-sm">
                                    They isolate by choice, then blame the country for making them feel invisible.
                                </p>
                            </div>

                            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                <p className="text-green-900 font-bold text-lg mb-2">
                                    Remember:
                                </p>
                                <p className="text-green-800">
                                    "Cambodia never asked to be a version of your home country. The magic here is the difference, the unpredictability, seeing something for the very first time."
                                </p>
                                <p className="text-green-700 text-sm mt-3 italic">
                                    "If you treat Cambodia like a backdrop, it will never feel like home. It's not just where you are that matters - it's how you engage."
                                </p>
                            </div>
                        </div>

                        {/* Way #5 */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5️⃣ Resenting Hope in Others</h2>

                            <div className="bg-pink-50 p-6 rounded-xl border border-pink-100 mb-4">
                                <h3 className="text-xl font-bold text-pink-900 mb-3">💔 This One Hurts to Say</h3>
                                <p className="text-pink-800 mb-3">
                                    Some of the angriest, most toxic expats <strong>weren't always like that</strong>. They came here with light in their eyes, with hope.
                                </p>
                            </div>

                            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 mb-4">
                                <h3 className="text-xl font-bold text-orange-900 mb-3">What Broke Them:</h3>
                                <ul className="space-y-2 text-orange-800 text-sm">
                                    <li>💼 Failed business</li>
                                    <li>💔 Relationship or divorce</li>
                                    <li>💭 Dream that faded</li>
                                </ul>
                                <p className="text-orange-800 mt-3">
                                    Instead of learning, reflecting, and rebuilding, they became <strong>hard</strong>. They buried disappointment under sarcasm and superiority.
                                </p>
                            </div>

                            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                                <h3 className="text-xl font-bold text-red-900 mb-3">Now When They See Someone Positive...</h3>
                                <div className="space-y-2 text-red-800 text-sm">
                                    <p>😤 They lash out</p>
                                    <p>💬 They write obscenely angry comments</p>
                                    <p>👎 They hit dislike</p>
                                    <p>⬇️ They try to drag it down</p>
                                </div>
                                <div className="bg-red-100 p-4 rounded-lg mt-4">
                                    <p className="text-red-900 font-bold">
                                        Not because they hate Cambodia. It's because they can't stand to see other people still believing in it.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* The Mirror */}
                        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-8 rounded-xl text-white">
                            <h2 className="text-2xl font-bold mb-4">🪞 Cambodia is a Mirror</h2>
                            <div className="space-y-4">
                                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                                    <p className="font-bold mb-2">Cambodia Changed My Life Forever</p>
                                    <p className="text-sm">
                                        It gave me space, time, and perspective. It allowed me to get back to the person I wanted to be.
                                    </p>
                                </div>
                                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                                    <p className="font-bold mb-2">But It's Not Magic</p>
                                    <p className="text-sm">
                                        It's a mirror. It reflects back the effort you're putting into your life here.
                                    </p>
                                </div>
                                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                                    <p className="font-bold mb-2">I Could Have Ended Up Like Them</p>
                                    <p className="text-sm">
                                        Easily. But I caught myself early and rebuilt something meaningful.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Final Thought */}
                        <div className="bg-gradient-to-r from-gray-800 to-black p-8 rounded-xl text-white text-center">
                            <h2 className="text-3xl font-bold mb-4">Final Thought</h2>
                            <p className="text-2xl mb-4">
                                Cambodia won't judge you.
                            </p>
                            <p className="text-2xl mb-6">
                                But it also won't save you.
                            </p>
                            <p className="text-xl font-bold">
                                That part is totally on you.
                            </p>
                        </div>

                        {/* Related Links */}
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-bold text-gray-900 mb-4">The Positive Side of Cambodia</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <Link
                                    href="/peaceful"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-green-500 transition-colors"
                                >
                                    <h4 className="font-bold text-green-900 mb-1">A Peaceful Life</h4>
                                    <p className="text-gray-700 text-sm">Escaping the rat race</p>
                                </Link>
                                <Link
                                    href="/people"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
                                >
                                    <h4 className="font-bold text-blue-900 mb-1">The People</h4>
                                    <p className="text-gray-700 text-sm">Why they're rated 10/10</p>
                                </Link>
                                <Link
                                    href="/respect"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-purple-500 transition-colors"
                                >
                                    <h4 className="font-bold text-purple-900 mb-1">Respect Locals</h4>
                                    <p className="text-gray-700 text-sm">How to engage properly</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
