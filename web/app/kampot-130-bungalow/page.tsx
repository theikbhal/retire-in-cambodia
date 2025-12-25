import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: '$130/Month Bungalow in Kampot Cambodia | Tom Trips Out Apartment Tour',
    description: 'Tom tours a beautiful $130/month bungalow in Kampot with fruit trees, garden, hot water, AC, and peaceful mountain views. 2km from downtown.',
};

export default function Kampot130BungalowPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-800 text-sm font-semibold mb-4">
                    Apartment Tour
                </span>
                <h1 className="text-4xl font-extrabold mb-2">$130/Month Bungalow in Kampot 🏡</h1>
                <h2 className="text-xl text-gray-600 mb-8">Beautiful Garden, Fruit Trees & Mountain Views</h2>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <div className="aspect-w-16 aspect-h-9 mb-8 overflow-hidden rounded-xl shadow-lg border border-gray-200">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/suyirozN0iY"
                            title="$130 Month Bungalow in Kampot Cambodia"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full object-cover"
                        ></iframe>
                    </div>

                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-8 rounded-xl text-white mb-8 text-center">
                        <div className="text-5xl mb-4">🏡</div>
                        <h2 className="text-3xl font-bold mb-4">$130/Month</h2>
                        <p className="text-xl">
                            Private bungalow with garden, fruit trees, and caring owners
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Quick Overview */}
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h2 className="text-2xl font-bold text-blue-900 mb-4">Quick Overview</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-blue-900 mb-2">💰 Monthly Rent</h3>
                                    <p className="text-3xl font-bold text-blue-600">$130</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-blue-900 mb-2">📍 Location</h3>
                                    <p className="text-blue-800">2.2km from downtown Kampot</p>
                                    <p className="text-blue-700 text-sm">Durian Roundabout area</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-blue-900 mb-2">👥 Best For</h3>
                                    <p className="text-blue-800">1-2 people</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-blue-900 mb-2">🏞️ Setting</h3>
                                    <p className="text-blue-800">Peaceful, mountain views</p>
                                </div>
                            </div>
                        </div>

                        {/* Inside the Bungalow */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">🏠 Inside the Bungalow</h2>

                            <div className="space-y-4">
                                <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                                    <h3 className="text-xl font-bold text-purple-900 mb-3">🛏️ Bedroom</h3>
                                    <ul className="space-y-2 text-purple-800 text-sm">
                                        <li>✅ One bed (good size)</li>
                                        <li>✅ Air conditioning</li>
                                        <li>✅ Wardrobe/hanging space for clothes</li>
                                        <li>✅ Small cabinet for storage</li>
                                        <li>✅ Small table</li>
                                    </ul>
                                </div>

                                <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                                    <h3 className="text-xl font-bold text-orange-900 mb-3">🍳 Kitchen Area</h3>
                                    <ul className="space-y-2 text-orange-800 text-sm">
                                        <li>✅ Fridge (provided)</li>
                                        <li>✅ Stove/cooktop</li>
                                        <li>✅ Cabinet for cooking supplies & storage</li>
                                        <li>✅ Dining table & chair</li>
                                        <li>✅ Good space for 1-2 people</li>
                                    </ul>
                                </div>

                                <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-100">
                                    <h3 className="text-xl font-bold text-cyan-900 mb-3">🚿 Bathroom</h3>
                                    <ul className="space-y-2 text-cyan-800 text-sm">
                                        <li>✅ <strong>Hot & cold water</strong></li>
                                        <li>✅ Shower</li>
                                        <li>✅ Mirror</li>
                                        <li>✅ Standard fixtures</li>
                                    </ul>
                                </div>

                                <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                                    <h3 className="text-xl font-bold text-yellow-900 mb-3">🏡 Outdoor Space</h3>
                                    <ul className="space-y-2 text-yellow-800 text-sm">
                                        <li>✅ Covered parking area (sheltered from rain)</li>
                                        <li>✅ Front yard with garden</li>
                                        <li>✅ Back yard space</li>
                                        <li>✅ Privacy from neighbors (solid separation wall)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* The Amazing Garden */}
                        <div className="bg-gradient-to-r from-green-50 to-lime-50 p-6 rounded-xl border border-green-100">
                            <h2 className="text-2xl font-bold text-green-900 mb-4">🌳 The Amazing Garden & Fruit Trees</h2>
                            <p className="text-green-800 mb-4">
                                The owner's mother is an avid gardener and has planted numerous fruit trees and plants around the property. <strong>You can harvest and eat the fruit!</strong>
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-green-900 mb-2">🌺 Front Yard:</h3>
                                    <ul className="space-y-1 text-green-800 text-sm">
                                        <li>• <strong>Jasmine Bush</strong> - Amazing smell at night!</li>
                                        <li>• <strong>Green Crab Tree</strong> - Already fruiting (2nd year)</li>
                                        <li>• <strong>Lemongrass</strong> - Repels mosquitoes, good smell</li>
                                        <li>• <strong>Aloe Vera</strong></li>
                                        <li>• <strong>Sunflowers</strong></li>
                                        <li>• <strong>Lime Tree</strong> - Small fruit (bigger than orange)</li>
                                        <li>• <strong>Chili Plants</strong></li>
                                    </ul>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-green-900 mb-2">🍌 Back Yard:</h3>
                                    <ul className="space-y-1 text-green-800 text-sm">
                                        <li>• <strong>Banana Tree</strong></li>
                                        <li>• <strong>Guava Tree</strong> (2 years old)</li>
                                        <li>• <strong>Papaya Trees</strong></li>
                                        <li>• <strong>Mango Tree</strong></li>
                                        <li>• <strong>Coconut Tree</strong></li>
                                        <li>• <strong>Lemon Tree</strong></li>
                                        <li>• <strong>Gourd/Pumpkin</strong> (when season is right)</li>
                                        <li>• Decorative trees</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-green-100 p-4 rounded-lg mt-4">
                                <p className="text-green-900 font-bold text-center">
                                    🌟 The owners take care of harvesting and maintaining all the trees. If you need fruit, they'll provide it to you!
                                </p>
                            </div>
                        </div>

                        {/* Special Features */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">✨ Special Features</h2>

                            <div className="space-y-3">
                                <div className="bg-pink-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-pink-900 mb-2">🌸 Night-Blooming Jasmine</h3>
                                    <p className="text-pink-800 text-sm">
                                        The jasmine bush blooms at night and fills the yard with an incredible fragrance. You can even taste the sweet flowers!
                                    </p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-blue-900 mb-2">🦟 Natural Mosquito Repellent</h3>
                                    <p className="text-blue-800 text-sm">
                                        Lemongrass planted around the property naturally repels mosquitoes while providing a pleasant aroma.
                                    </p>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-purple-900 mb-2">🏔️ Mountain Views</h3>
                                    <p className="text-purple-800 text-sm">
                                        Beautiful views of the mountains from the property. Peace and tranquility!
                                    </p>
                                </div>
                                <div className="bg-orange-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-orange-900 mb-2">🤝 Caring Owners</h3>
                                    <p className="text-orange-800 text-sm">
                                        The owner and his mother are gardening enthusiasts who genuinely care about the property and tenants. They'll help with anything you need!
                                    </p>
                                </div>
                                <div className="bg-teal-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-teal-900 mb-2">🔇 Privacy & Quiet</h3>
                                    <p className="text-teal-800 text-sm">
                                        Solid separation wall between units. You won't hear neighbors. Plus, there's buffer space with yards between front doors.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Location Details */}
                        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                            <h2 className="text-2xl font-bold text-indigo-900 mb-4">📍 Location & Neighborhood</h2>
                            <div className="space-y-3">
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-indigo-900 mb-2">Distance to Downtown:</h3>
                                    <p className="text-indigo-800 mb-2">
                                        <strong>2.2km driving distance</strong> from Durian Roundabout (downtown Kampot)
                                    </p>
                                    <p className="text-indigo-700 text-sm">
                                        About 1.5-1.7km as the crow flies, but road doesn't go straight - you have to go left then down. Takes 2-3 minutes by tuk-tuk or motorbike.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-indigo-900 mb-2">Neighborhood Vibe:</h3>
                                    <p className="text-indigo-800 text-sm mb-2">
                                        <strong>Very underdeveloped and peaceful.</strong> Not much around on this road.
                                    </p>
                                    <p className="text-indigo-700 text-sm">
                                        Elementary school behind the property (operates mornings only, summer break for a few months).
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-indigo-900 mb-2">Walkability:</h3>
                                    <p className="text-indigo-800 text-sm">
                                        Technically walkable to downtown (2km), but most people would prefer a tuk-tuk or motorbike.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Tom's Setup Plan */}
                        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                            <h2 className="text-2xl font-bold text-yellow-900 mb-4">🛋️ Tom's Furniture Plan</h2>
                            <p className="text-yellow-800 mb-4">
                                Tom planned to rearrange the space to make it more functional:
                            </p>
                            <ul className="space-y-2 text-yellow-800 text-sm">
                                <li>✅ Move fridge to create open nook space</li>
                                <li>✅ Move dining table to bedroom to use as desk</li>
                                <li>✅ Bring chair to main living area</li>
                                <li>✅ Buy small coffee table</li>
                                <li>✅ Buy small loveseat or two-seater couch</li>
                            </ul>
                            <p className="text-yellow-700 text-sm mt-3 italic">
                                "All I'll have to buy is a little coffee table and one more little tiny loveseat!"
                            </p>
                        </div>

                        {/* Pros & Cons */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">⚖️ Pros & Cons</h2>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                                    <h3 className="text-xl font-bold text-green-900 mb-4">✅ PROS</h3>
                                    <ul className="space-y-2 text-green-800 text-sm">
                                        <li>💰 <strong>Only $130/month!</strong></li>
                                        <li>🌳 <strong>Amazing garden with fruit trees</strong></li>
                                        <li>🍌 <strong>Free fruit from the property</strong></li>
                                        <li>🏔️ <strong>Beautiful mountain views</strong></li>
                                        <li>🔇 <strong>Peace & quiet</strong></li>
                                        <li>🤝 <strong>Caring, helpful owners</strong></li>
                                        <li>🌸 <strong>Jasmine fragrance at night</strong></li>
                                        <li>🦟 <strong>Natural mosquito repellent</strong></li>
                                        <li>❄️ <strong>Hot water & AC included</strong></li>
                                        <li>🚗 <strong>Covered parking</strong></li>
                                        <li>🔒 <strong>Privacy from neighbors</strong></li>
                                    </ul>
                                </div>

                                <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                                    <h3 className="text-xl font-bold text-red-900 mb-4">❌ CONS</h3>
                                    <ul className="space-y-2 text-red-800 text-sm">
                                        <li>📍 <strong>2.2km from downtown</strong> (not walkable for most)</li>
                                        <li>🛣️ <strong>Underdeveloped neighborhood</strong> (nothing nearby)</li>
                                        <li>🛵 <strong>Need tuk-tuk or motorbike</strong> to get around</li>
                                        <li>🏫 <strong>Elementary school nearby</strong> (could be noisy mornings)</li>
                                        <li>🪑 <strong>Need to buy some furniture</strong> (coffee table, loveseat)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Tom's Verdict */}
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-8 rounded-xl text-white">
                            <h2 className="text-2xl font-bold mb-4">🎯 Tom's Verdict</h2>
                            <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm mb-4">
                                <p className="text-lg italic mb-3">
                                    "I really like this place, actually. I had a really good vibe off those guys, too. Really good people."
                                </p>
                                <p className="text-sm">
                                    "I love having the mountain view and I love the peace and quiet and the tranquility. You can't have it both ways - if you want peace, you sacrifice being right downtown. But 2km isn't even that bad!"
                                </p>
                            </div>
                            <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                                <p className="font-bold text-center text-lg">
                                    Tom chose this bungalow! ✅
                                </p>
                            </div>
                        </div>

                        {/* Perfect For */}
                        <div className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                            <h2 className="text-2xl font-bold text-teal-900 mb-4">👥 Perfect For:</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-white p-4 rounded-lg text-center">
                                    <div className="text-3xl mb-2">🧘</div>
                                    <h3 className="font-bold text-teal-900 mb-1">Peace Seekers</h3>
                                    <p className="text-teal-800 text-sm">
                                        Want quiet, nature, and tranquility
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg text-center">
                                    <div className="text-3xl mb-2">🌱</div>
                                    <h3 className="font-bold text-teal-900 mb-1">Nature Lovers</h3>
                                    <p className="text-teal-800 text-sm">
                                        Appreciate gardens and fruit trees
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg text-center">
                                    <div className="text-3xl mb-2">💰</div>
                                    <h3 className="font-bold text-teal-900 mb-1">Budget Conscious</h3>
                                    <p className="text-teal-800 text-sm">
                                        Want great value for money
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Related Links */}
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-bold text-gray-900 mb-4">More About Kampot</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <Link
                                    href="/kampot"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-teal-500 transition-colors"
                                >
                                    <h4 className="font-bold text-teal-900 mb-1">Kampot Guide</h4>
                                    <p className="text-gray-700 text-sm">Riverside town overview</p>
                                </Link>
                                <Link
                                    href="/couple-1500-month"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-green-500 transition-colors"
                                >
                                    <h4 className="font-bold text-green-900 mb-1">Kampot Experience</h4>
                                    <p className="text-gray-700 text-sm">Another couple's stay</p>
                                </Link>
                                <Link
                                    href="/rent"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
                                >
                                    <h4 className="font-bold text-blue-900 mb-1">Renting Guide</h4>
                                    <p className="text-gray-700 text-sm">All about rentals</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
