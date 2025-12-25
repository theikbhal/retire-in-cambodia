import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Kelly\'s $300/Month Apartment Tour | Siem Reap, Cambodia',
    description: 'Full tour of Kelly Osowski\'s 2-bedroom apartment in Siem Reap for $300/month. Features rooftop terrace, fans in every room, and nature views.',
};

export default function KellyApartmentTourPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-yellow-100 text-yellow-800 text-sm font-semibold mb-4">
                    Apartment Tour
                </span>
                <h1 className="text-4xl font-extrabold mb-2">Kelly's New Apartment 🏠</h1>
                <h2 className="text-xl text-gray-600 mb-8">$300/Month in Siem Reap, Cambodia</h2>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <div className="aspect-w-16 aspect-h-9 mb-8 overflow-hidden rounded-xl shadow-lg border border-gray-200">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/8pMdHe7fvcc"
                            title="Kelly's Apartment Tour - Siem Reap, Cambodia"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full object-cover"
                        ></iframe>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-100 mb-8">
                        <h2 className="text-2xl font-bold text-green-900 mb-3">Quick Facts</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded-lg text-center">
                                <div className="text-3xl font-bold text-green-600">$300</div>
                                <div className="text-sm text-green-800">Per Month</div>
                            </div>
                            <div className="bg-white p-4 rounded-lg text-center">
                                <div className="text-3xl font-bold text-blue-600">2 Bed</div>
                                <div className="text-sm text-blue-800">Both with Storage</div>
                            </div>
                            <div className="bg-white p-4 rounded-lg text-center">
                                <div className="text-3xl font-bold text-purple-600">4 Floors</div>
                                <div className="text-sm text-purple-800">To Rooftop Terrace</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* How Kelly Found It */}
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h2 className="text-xl font-bold text-blue-900 mb-3">How He Found It</h2>
                            <p className="text-blue-800">
                                Kelly looked at only <strong>3 apartments</strong> before finding this one. It was the 4th place he viewed, and he "fell in love with it" immediately. The other places were either cheaper but dirty, or more expensive with a small pool but poor maintenance.
                            </p>
                        </div>

                        {/* Room-by-Room Tour */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Room-by-Room Tour</h2>

                            {/* Living Room */}
                            <div className="mb-6 bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl border border-orange-100">
                                <h3 className="text-xl font-bold text-orange-900 mb-3">🛋️ Living Room</h3>
                                <ul className="space-y-2 text-orange-800">
                                    <li>✅ Double door entry (two big yellow doors!)</li>
                                    <li>✅ Sofa and a couple chairs</li>
                                    <li>✅ Coffee table</li>
                                    <li>✅ Plants (that look "not too bad")</li>
                                    <li>✅ Curtains everywhere</li>
                                    <li>✅ <strong>Ceiling fan</strong> (Kelly's favorite feature!)</li>
                                </ul>
                            </div>

                            {/* Kitchen */}
                            <div className="mb-6 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
                                <h3 className="text-xl font-bold text-green-900 mb-3">🍳 Kitchen</h3>
                                <ul className="space-y-2 text-green-800">
                                    <li>✅ Breakfast/lunch/supper nook ("It's just a nook")</li>
                                    <li>✅ Washer</li>
                                    <li>✅ Refrigerator ("the old standby")</li>
                                    <li>✅ <strong>Nature views</strong> from the window</li>
                                    <li>⚠️ Not much room for pots and pans, but "we'll work it out"</li>
                                </ul>
                            </div>

                            {/* Dining Room */}
                            <div className="mb-6 bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                                <h3 className="text-xl font-bold text-purple-900 mb-3">🍽️ Dining Room</h3>
                                <ul className="space-y-2 text-purple-800">
                                    <li>✅ Dining table with 6 chairs</li>
                                    <li>✅ Separate from kitchen area</li>
                                    <li>🍈 Papaya tree visible from the back!</li>
                                </ul>
                            </div>

                            {/* Master Bedroom */}
                            <div className="mb-6 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="text-xl font-bold text-blue-900 mb-3">🛏️ Master Bedroom</h3>
                                <ul className="space-y-2 text-blue-800">
                                    <li>✅ Ceiling fan</li>
                                    <li>✅ Air conditioner</li>
                                    <li>✅ Big bed</li>
                                    <li>✅ Closet with storage (top and bottom)</li>
                                    <li>✅ Mood lights ("if I really need to get in the mood")</li>
                                    <li>✅ Space for another armoire if needed</li>
                                </ul>
                                <div className="mt-4 bg-white p-4 rounded-lg">
                                    <h4 className="font-bold text-blue-900 mb-2">🚿 Master Bathroom</h4>
                                    <p className="text-blue-800 text-sm">
                                        "Fancy looking Khmer style bathroom" with wash basin, hot water shower, and toilet. "Decorated looking good!"
                                    </p>
                                </div>
                            </div>

                            {/* Second Bedroom */}
                            <div className="mb-6 bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-xl border border-red-100">
                                <h3 className="text-xl font-bold text-red-900 mb-3">🛏️ Second Bedroom</h3>
                                <ul className="space-y-2 text-red-800">
                                    <li>✅ "Pretty close the same size as the first one"</li>
                                    <li>✅ Table (Kelly plans to use as computer desk)</li>
                                    <li>✅ Own access door</li>
                                    <li>✅ Storage and closet space</li>
                                    <li>✅ Own bathroom (similar to master)</li>
                                </ul>
                            </div>
                        </div>

                        {/* Special Features */}
                        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                            <h2 className="text-2xl font-bold text-indigo-900 mb-4">✨ Special Features</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-indigo-900 mb-2">💨 Fans Everywhere</h3>
                                    <p className="text-indigo-800 text-sm">
                                        "Fans in every room except the kitchen" - This was one of Kelly's selling points!
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-indigo-900 mb-2">📶 WiFi Repeater</h3>
                                    <p className="text-indigo-800 text-sm">
                                        WiFi repeater installed for strong signal throughout the apartment.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-indigo-900 mb-2">🌳 Nature Views</h3>
                                    <p className="text-indigo-800 text-sm">
                                        "A lot of nature around us" - surrounded by greenery and trees.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-indigo-900 mb-2">👕 Laundry Area</h3>
                                    <p className="text-indigo-800 text-sm">
                                        Place to hang laundry behind the apartment and on the rooftop.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Rooftop Terrace */}
                        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-8 rounded-xl text-white">
                            <h2 className="text-2xl font-bold mb-4">🌅 Rooftop Terrace (4 Flights Up!)</h2>
                            <div className="bg-white/20 p-6 rounded-lg backdrop-blur-sm">
                                <p className="mb-4">
                                    "Four flights later... yeah, four flights later, we go up to the roof."
                                </p>
                                <h3 className="font-bold mb-2">Kelly's Plans:</h3>
                                <ul className="space-y-2">
                                    <li>🪑 Invest in a couple of nice chairs</li>
                                    <li>🛏️ Place to put up a hammock (definitely!)</li>
                                    <li>☕ Enjoy sunrise with a cup of coffee</li>
                                    <li>🏋️ "Lose a little bit of weight" from climbing the stairs</li>
                                    <li>🌿 Some shade already available</li>
                                    <li>🌺 Beautiful plants (Kelly's daughter loves them)</li>
                                </ul>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h2 className="text-xl font-bold text-gray-900 mb-3">📍 Location</h2>
                            <p className="text-gray-700">
                                <strong>Just north of Siem Reap town center</strong> - "almost the outskirts of town, just north of Rim Road."
                            </p>
                            <p className="text-gray-600 text-sm mt-2">
                                Surrounded by nature but still close to everything you need.
                            </p>
                        </div>

                        {/* Kelly's Verdict */}
                        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                            <h2 className="text-xl font-bold text-emerald-900 mb-3">Kelly's Verdict</h2>
                            <p className="text-emerald-800 text-lg font-bold mb-2">
                                "This place was the best place we looked at."
                            </p>
                            <p className="text-emerald-700">
                                After viewing 4 apartments (some cheaper, some more expensive, one with a pool but dirty), Kelly fell in love with this one and signed immediately.
                            </p>
                        </div>

                        {/* Related Content */}
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-bold text-gray-900 mb-4">Learn More About Living in Siem Reap</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <Link
                                    href="/kelly-autumn-in-asia"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
                                >
                                    <h4 className="font-bold text-blue-900 mb-1">Full Budget</h4>
                                    <p className="text-gray-700 text-sm">Kelly's complete monthly costs</p>
                                </Link>
                                <Link
                                    href="/five-reasons-kelly"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-orange-500 transition-colors"
                                >
                                    <h4 className="font-bold text-orange-900 mb-1">5 Reasons</h4>
                                    <p className="text-gray-700 text-sm">Why Kelly moved to Cambodia</p>
                                </Link>
                                <Link
                                    href="/autumn-in-asia-channel"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-purple-500 transition-colors"
                                >
                                    <h4 className="font-bold text-purple-900 mb-1">YouTube</h4>
                                    <p className="text-gray-700 text-sm">Subscribe for more tours</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
