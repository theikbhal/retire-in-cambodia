import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Retiring in Cambodia on $1,500/Month | Couple\'s 1-Month Journey',
    description: 'A couple traveled through Phnom Penh, Kampot, and Siem Reap on $1,220/month. Easy visas, friendly people, and affordable living. Full breakdown inside.',
};

export default function CoupleRetireCambodiaPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-800 text-sm font-semibold mb-4">
                    Couple's Journey
                </span>
                <h1 className="text-4xl font-extrabold mb-2">Retiring in Cambodia 🇰🇭</h1>
                <h2 className="text-xl text-gray-600 mb-8">$1,500/Month Budget | Phnom Penh, Kampot & Siem Reap</h2>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <div className="aspect-w-16 aspect-h-9 mb-8 overflow-hidden rounded-xl shadow-lg border border-gray-200">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/VQNRfHe8G78"
                            title="Retiring in Cambodia on $1500 a Month"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full object-cover"
                        ></iframe>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 mb-8">
                        <h2 className="text-xl font-bold text-green-900 mb-3">Their Story</h2>
                        <p className="text-green-800 mb-2">
                            A couple traveling full-time on <strong>$1,500/month</strong> spent 1 month exploring Cambodia.
                        </p>
                        <p className="text-green-700 text-sm">
                            They almost skipped Cambodia after watching scary videos about being a "walking ATM" and bag snatching. But they went anyway and found a place that actually wants you there!
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* The Easy Visa */}
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h2 className="text-2xl font-bold text-blue-900 mb-4">🛂 The Easy Visa</h2>
                            <div className="space-y-3">
                                <div className="bg-white p-4 rounded-lg">
                                    <div className="flex justify-between items-center mb-2">
                                        <div>
                                            <h3 className="font-bold text-blue-900">Retirement Visa (55+)</h3>
                                            <p className="text-blue-700 text-sm">Just prove you're over 55</p>
                                        </div>
                                        <div className="text-2xl font-bold text-blue-600">$300/year</div>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <div className="flex justify-between items-center mb-2">
                                        <div>
                                            <h3 className="font-bold text-blue-900">Business Permit (Under 55)</h3>
                                            <p className="text-blue-700 text-sm">Can start a business and work</p>
                                        </div>
                                        <div className="text-2xl font-bold text-blue-600">$500/year</div>
                                    </div>
                                    <p className="text-blue-600 text-xs mt-2">
                                        $300 base + $200 business permit
                                    </p>
                                </div>
                            </div>
                            <div className="bg-blue-100 p-4 rounded-lg mt-4">
                                <p className="text-blue-900 font-bold text-center">
                                    "It must be the easiest visa in the world to get long-term. You just pay your money, you get it!"
                                </p>
                            </div>
                        </div>

                        {/* Phnom Penh */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">🏙️ Phnom Penh - The Capital</h2>

                            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 mb-4">
                                <h3 className="text-xl font-bold text-purple-900 mb-3">About the City</h3>
                                <ul className="space-y-2 text-purple-800">
                                    <li>📍 <strong>Location:</strong> Banks of 3 rivers</li>
                                    <li>👥 <strong>Population:</strong> 2.3 million</li>
                                    <li>✨ <strong>Nickname:</strong> "Pearl of Asia"</li>
                                    <li>🏢 <strong>Vibe:</strong> Surprisingly modern with glassy towers, riverside parks, colonial buildings</li>
                                </ul>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div className="bg-green-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-green-900 mb-2">📱 Internet & SIM</h3>
                                    <p className="text-green-800 text-sm mb-2">
                                        <strong>Smart:</strong> In and out in 5 minutes, $10 each
                                    </p>
                                    <p className="text-green-700 text-xs">
                                        "Super fast 5G! WiFi readily available everywhere."
                                    </p>
                                </div>
                                <div className="bg-orange-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-orange-900 mb-2">💵 Currency</h3>
                                    <p className="text-orange-800 text-sm mb-2">
                                        Uses <strong>USD + Cambodian Riel</strong> simultaneously
                                    </p>
                                    <p className="text-orange-700 text-xs">
                                        ATMs give dollars. Pay with dollars, get riel in change. Most places take card anyway!
                                    </p>
                                </div>
                            </div>

                            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100 mb-4">
                                <h3 className="text-xl font-bold text-yellow-900 mb-3">🚕 Transportation</h3>
                                <div className="space-y-2">
                                    <div className="bg-white p-3 rounded-lg">
                                        <p className="text-yellow-800 mb-1">
                                            <strong>Tuk-Tuk (Grab app):</strong> $1 to almost anywhere in the city!
                                        </p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg">
                                        <p className="text-yellow-800 mb-1">
                                            <strong>Bus System:</strong> Available (Google Maps helps)
                                        </p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg">
                                        <p className="text-yellow-800 mb-1">
                                            <strong>Train:</strong> Goes to a few locations
                                        </p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg">
                                        <p className="text-yellow-800 mb-1">
                                            <strong>Long-Distance Buses:</strong> 5-hour trips to other cities
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-4">
                                <h3 className="text-xl font-bold text-red-900 mb-3">🍽️ Food & Dining</h3>
                                <div className="space-y-2">
                                    <div className="bg-white p-3 rounded-lg flex justify-between items-center">
                                        <span className="text-red-800">Good Western Meal</span>
                                        <span className="font-bold text-red-600">$6</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg flex justify-between items-center">
                                        <span className="text-red-800">Draft Beer (Street 172)</span>
                                        <span className="font-bold text-red-600">$0.75</span>
                                    </div>
                                </div>
                                <div className="bg-red-100 p-3 rounded-lg mt-3">
                                    <p className="text-red-900 text-sm">
                                        <strong>Street 172:</strong> Fantastic pubs, 75¢ beers, incredible European food, waitresses who remember you!
                                    </p>
                                </div>
                            </div>

                            <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                                <h3 className="text-xl font-bold text-indigo-900 mb-3">🏠 Their Apartment - $20/night</h3>
                                <ul className="space-y-2 text-indigo-800 text-sm">
                                    <li>✅ Big TV</li>
                                    <li>✅ Loads of windows (high up!)</li>
                                    <li>✅ Kitchen with stove & fridge</li>
                                    <li>✅ <strong>Oven!</strong> (Not common, but they were happy)</li>
                                    <li>✅ Nice big bed</li>
                                    <li>✅ Balcony with views</li>
                                    <li>✅ Desk & kitchen table</li>
                                    <li>✅ Good shower</li>
                                </ul>
                                <p className="text-indigo-700 text-sm mt-3 italic">
                                    "It's pretty awesome. $20 a night. Long-term would be even cheaper!"
                                </p>
                            </div>
                        </div>

                        {/* Kampot */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">🛶 Kampot - The Charming Riverside Town</h2>

                            <div className="bg-teal-50 p-6 rounded-xl border border-teal-100 mb-4">
                                <h3 className="text-xl font-bold text-teal-900 mb-3">About Kampot</h3>
                                <ul className="space-y-2 text-teal-800">
                                    <li>📍 <strong>Location:</strong> 150km southwest of Phnom Penh, near the ocean</li>
                                    <li>👥 <strong>Population:</strong> 50,000</li>
                                    <li>🌶️ <strong>Famous For:</strong> Kampot Pepper (used in best French kitchens worldwide!)</li>
                                    <li>🏘️ <strong>Vibe:</strong> Charming, sleepy riverside town, easy to walk everywhere</li>
                                    <li>👥 <strong>Expats:</strong> About 600 (you'll keep bumping into the same faces!)</li>
                                </ul>
                            </div>

                            <div className="bg-green-50 p-6 rounded-xl border border-green-100 mb-4">
                                <h3 className="text-xl font-bold text-green-900 mb-3">🔧 Infrastructure Upgrades</h3>
                                <p className="text-green-800 mb-2">
                                    Streets were a bit upheaved during their visit because they're <strong>fixing the town</strong>:
                                </p>
                                <ul className="space-y-1 text-green-700 text-sm">
                                    <li>✅ New electricity</li>
                                    <li>✅ Fiber optics</li>
                                    <li>✅ All the good things</li>
                                </ul>
                                <p className="text-green-900 font-bold mt-3">
                                    "It's a good time to get in Kampot. It really is!"
                                </p>
                            </div>

                            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 mb-4">
                                <h3 className="text-xl font-bold text-orange-900 mb-3">🍽️ Food in Kampot</h3>
                                <div className="space-y-2">
                                    <div className="bg-white p-3 rounded-lg">
                                        <p className="text-orange-800 font-bold mb-1">Sausage Rolls</p>
                                        <p className="text-orange-700 text-sm">Fantastic!</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg">
                                        <p className="text-orange-800 font-bold mb-1">Bangers & Mash</p>
                                        <p className="text-orange-700 text-sm">With a crack of that black pepper!</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg">
                                        <p className="text-orange-800 font-bold mb-1">Black Pepper Ice Cream</p>
                                        <p className="text-orange-700 text-sm">"So exotic!"</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg">
                                        <p className="text-orange-800 font-bold mb-1">Cambodian Spicy Salad</p>
                                        <p className="text-orange-700 text-sm">From a nice local lady on the edge of town</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-pink-50 p-6 rounded-xl border border-pink-100 mb-4">
                                <h3 className="text-xl font-bold text-pink-900 mb-3">🥭 Mangoes!</h3>
                                <p className="text-pink-800 mb-2">
                                    "So many different types and <strong>Cambodia has the sweetest variety</strong>."
                                </p>
                                <p className="text-pink-900 font-bold">
                                    "Cambodia definitely has the best mangoes!"
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-8 rounded-xl text-white mb-4">
                                <h3 className="text-2xl font-bold mb-4">🏠 Their Apartment - $8/night</h3>
                                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm mb-3">
                                    <p className="font-bold mb-2">Or $150/month long-term!</p>
                                    <ul className="space-y-1 text-sm">
                                        <li>✅ Massive fridge</li>
                                        <li>✅ Huge bed</li>
                                        <li>✅ Kettle & AC</li>
                                        <li>✅ Loads of space</li>
                                        <li>✅ Shared cooking area</li>
                                        <li>✅ River garden courtyard</li>
                                        <li>✅ Table outside</li>
                                    </ul>
                                </div>
                                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                                    <p className="text-sm italic">
                                        😂 Bonus: Free "rainy day pool" when unexpected shower flooded the bathroom! (They fixed it for future guests)
                                    </p>
                                </div>
                            </div>

                            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                                <h3 className="text-xl font-bold text-purple-900 mb-3">🗺️ Day Trips from Kampot</h3>
                                <ul className="space-y-2 text-purple-800 text-sm">
                                    <li>⛰️ Mountains with abandoned French villas (absolutely stunning)</li>
                                    <li>🏖️ Beach (not far)</li>
                                    <li>🦀 Kep (famous for crabs)</li>
                                </ul>
                            </div>
                        </div>

                        {/* Siem Reap */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">🏛️ Siem Reap - Gateway to Angkor Wat</h2>

                            <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-4">
                                <h3 className="text-xl font-bold text-red-900 mb-3">About Siem Reap</h3>
                                <ul className="space-y-2 text-red-800">
                                    <li>📍 <strong>Location:</strong> Northwestern Cambodia</li>
                                    <li>👥 <strong>Population:</strong> 250,000</li>
                                    <li>🏛️ <strong>Famous For:</strong> Angkor Wat (largest religious monument in the world, UNESCO site)</li>
                                    <li>🏙️ <strong>Surprise:</strong> "It's not just Angkor Wat! It's a real city!"</li>
                                </ul>
                            </div>

                            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100 mb-4">
                                <h3 className="text-xl font-bold text-yellow-900 mb-3">🍻 Pub Street & Sakan Road</h3>
                                <div className="space-y-3">
                                    <div className="bg-white p-4 rounded-lg">
                                        <h4 className="font-bold text-yellow-900 mb-2">Pub Street</h4>
                                        <p className="text-yellow-800 text-sm mb-1">
                                            <strong>Beer:</strong> $0.75
                                        </p>
                                        <p className="text-yellow-700 text-xs">
                                            Angkor What? Pub (unfortunately closed when they visited)
                                        </p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg border-2 border-green-500">
                                        <h4 className="font-bold text-green-900 mb-2">🌟 Sakan Road (Their Favorite!)</h4>
                                        <p className="text-green-800 text-sm mb-2">
                                            <strong>Beer:</strong> $0.50
                                        </p>
                                        <p className="text-green-700 text-xs mb-2">
                                            "50 cents! 50 cents! Happy hour, every hour, 24 hours!"
                                        </p>
                                        <p className="text-green-800 text-sm">
                                            Biggest selection of Cambodian, international, and Western foods. Ridiculously cheap!
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-4">
                                <h3 className="text-xl font-bold text-blue-900 mb-3">🛒 Angkor What? Supermarket</h3>
                                <p className="text-blue-800 mb-3">
                                    "The best supermarket! More variety even than Phnom Penh!"
                                </p>
                                <div className="bg-white p-4 rounded-lg">
                                    <p className="text-blue-800 text-sm mb-2">
                                        <strong>What they have:</strong>
                                    </p>
                                    <ul className="space-y-1 text-blue-700 text-sm">
                                        <li>✅ Iceland frozen foods</li>
                                        <li>✅ Bird's Eye freezes</li>
                                        <li>✅ Bangers</li>
                                        <li>✅ So much international food</li>
                                    </ul>
                                    <p className="text-blue-900 font-bold mt-3 text-sm">
                                        "You will not miss anything if you come from the UK or Australia!"
                                    </p>
                                </div>
                            </div>

                            <div className="bg-green-50 p-6 rounded-xl border border-green-100 mb-4">
                                <h3 className="text-xl font-bold text-green-900 mb-3">🌳 What Else?</h3>
                                <ul className="space-y-2 text-green-800 text-sm">
                                    <li>🌊 Nice river area</li>
                                    <li>🌙 Night market (every night!)</li>
                                    <li>🦇 Flying foxes in trees (might poop on your head - very lucky!)</li>
                                    <li>🏛️ Raffles Hotel (oldest wooden lift in Indochina!)</li>
                                    <li>🏞️ Lots of parks</li>
                                    <li>✈️ International airport</li>
                                    <li>🏥 Eye hospital & good healthcare</li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                                <h3 className="text-xl font-bold text-purple-900 mb-3">🚕 Transportation Note</h3>
                                <p className="text-purple-800 text-sm mb-2">
                                    Grab works great for tuk-tuks. But tuk-tuk drivers can get a bit pesky asking to take you on Angkor Wat trips for $5.
                                </p>
                                <p className="text-purple-700 text-xs">
                                    Just politely decline if you're not interested!
                                </p>
                            </div>
                        </div>

                        {/* What They Spent */}
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-8 rounded-xl text-white">
                            <h2 className="text-2xl font-bold mb-4">💰 What They Actually Spent</h2>
                            <div className="bg-white/20 p-6 rounded-lg backdrop-blur-sm mb-4">
                                <div className="text-center mb-4">
                                    <div className="text-5xl font-bold mb-2">$1,220</div>
                                    <p className="text-lg">For BOTH of them for 1 month</p>
                                </div>
                                <p className="text-sm mb-3">
                                    Note: They traveled a lot and have a food channel, so they ate out more than average!
                                </p>
                                <p className="text-sm italic">
                                    "We only cooked about 5 times. The food there is so good!"
                                </p>
                            </div>

                            <div className="bg-white/20 p-6 rounded-lg backdrop-blur-sm">
                                <h3 className="font-bold text-xl mb-3">If They Stayed in Siem Reap Long-Term:</h3>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span>Single Person</span>
                                        <span className="text-2xl font-bold">$415/mo</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Couple</span>
                                        <span className="text-2xl font-bold">$830/mo</span>
                                    </div>
                                </div>
                                <p className="text-sm mt-3 italic">
                                    With cooking at home and not traveling around constantly!
                                </p>
                            </div>
                        </div>

                        {/* Pros & Cons */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">⚖️ Pros & Cons of Retiring in Cambodia</h2>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                                    <h3 className="text-xl font-bold text-green-900 mb-4">✅ PROS</h3>
                                    <ul className="space-y-3 text-green-800">
                                        <li className="flex items-start">
                                            <span className="mr-2">🛂</span>
                                            <div>
                                                <strong>Easiest Visa Ever</strong>
                                                <p className="text-green-700 text-sm">Just pay and get it!</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2">😊</span>
                                            <div>
                                                <strong>Incredibly Friendly People</strong>
                                                <p className="text-green-700 text-sm">"Friendlier than the Thais!"</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2">🛒</span>
                                            <div>
                                                <strong>International Products Available</strong>
                                                <p className="text-green-700 text-sm">Foods, toiletries, everything</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2">💵</span>
                                            <div>
                                                <strong>Ridiculously Affordable</strong>
                                                <p className="text-green-700 text-sm">$830/month for a couple!</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                                    <h3 className="text-xl font-bold text-red-900 mb-4">❌ CONS</h3>
                                    <ul className="space-y-3 text-red-800">
                                        <li className="flex items-start">
                                            <span className="mr-2">🏥</span>
                                            <div>
                                                <strong>Healthcare Not as Good</strong>
                                                <p className="text-red-700 text-sm">But Thailand is close (ranked #8 globally)</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2">🛣️</span>
                                            <div>
                                                <strong>Limited Roads</strong>
                                                <p className="text-red-700 text-sm">Only 3-4 main roads, train goes to 2 places</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2">🛍️</span>
                                            <div>
                                                <strong>Not Much Shopping</strong>
                                                <p className="text-red-700 text-sm">No mall life for non-food items</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2">🌡️</span>
                                            <div>
                                                <strong>Hot & Rainy</strong>
                                                <p className="text-red-700 text-sm">Sweltering heat, buckets of rain</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Their Verdict */}
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-8 rounded-xl text-white">
                            <h2 className="text-2xl font-bold mb-4">🎯 Their Verdict</h2>
                            <div className="space-y-4">
                                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                                    <p className="font-bold mb-2">Where Would They Choose?</p>
                                    <p className="text-sm">
                                        "I think we would actually choose Siem Reap. I kind of like Kampot as well - it does have that charm. But Siem Reap for the complete balance!"
                                    </p>
                                </div>
                                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                                    <p className="font-bold mb-2">Would They Go Back?</p>
                                    <p className="text-lg">
                                        "Definitely. Sure. Cambodia absolutely surprised us!"
                                    </p>
                                </div>
                                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                                    <p className="font-bold mb-2">Final Thoughts:</p>
                                    <p className="text-sm italic">
                                        "We almost skipped Cambodia because of scary videos. But we found a place that actually wants you there. Friendly people, easy visas, and a place you could probably call home, at least for a while."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Related Links */}
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-bold text-gray-900 mb-4">More About Living in Cambodia</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <Link
                                    href="/phnom-penh"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-purple-500 transition-colors"
                                >
                                    <h4 className="font-bold text-purple-900 mb-1">Phnom Penh Guide</h4>
                                    <p className="text-gray-700 text-sm">Capital city details</p>
                                </Link>
                                <Link
                                    href="/kampot"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-teal-500 transition-colors"
                                >
                                    <h4 className="font-bold text-teal-900 mb-1">Kampot Guide</h4>
                                    <p className="text-gray-700 text-sm">Riverside charm & pepper</p>
                                </Link>
                                <Link
                                    href="/visa"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
                                >
                                    <h4 className="font-bold text-blue-900 mb-1">Visa Guide</h4>
                                    <p className="text-gray-700 text-sm">Easy visa options</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
