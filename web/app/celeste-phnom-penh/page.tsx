import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Living in Phnom Penh Cambodia | $180 Apartments, Teaching ESL & Expat Freedom',
    description: 'Celeste shares her 3-year experience living in Phnom Penh. Rent from $180, teaching ESL for $1,200-$2,000/month, and total living costs around $700/month.',
};

export default function CelestePhnom PenhPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-800 text-sm font-semibold mb-4">
                    Expat Interview
                </span>
                <h1 className="text-4xl font-extrabold mb-2">Living in Phnom Penh 🏙️</h1>
                <h2 className="text-xl text-gray-600 mb-8">$180 Apartments, Teaching ESL & Expat Freedom</h2>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <div className="aspect-w-16 aspect-h-9 mb-8 overflow-hidden rounded-xl shadow-lg border border-gray-200">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/hGvi7FizlME"
                            title="Living in Cambodia - Phnom Penh Interview"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full object-cover"
                        ></iframe>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 mb-8">
                        <h2 className="text-xl font-bold text-blue-900 mb-3">About Celeste</h2>
                        <ul className="space-y-2 text-blue-800">
                            <li>🇿🇦 <strong>From:</strong> South Africa</li>
                            <li>📅 <strong>In Cambodia:</strong> 3 years</li>
                            <li>👨‍🏫 <strong>Occupation:</strong> Full-time ESL Teacher (Head Teacher)</li>
                            <li>👨‍👩‍👧 <strong>Family:</strong> Daughter has lived in Cambodia for 10 years</li>
                            <li>💼 <strong>Previous Life:</strong> Entrepreneur in construction (built houses)</li>
                        </ul>
                    </div>

                    <div className="space-y-8">
                        {/* Why She Stayed */}
                        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                            <h2 className="text-2xl font-bold text-yellow-900 mb-4">Why She Stayed in Cambodia</h2>
                            <div className="bg-white p-4 rounded-lg mb-4">
                                <p className="text-yellow-800 italic mb-3">
                                    "I was supposed to come for 6 months. It's been 3 years. Cambodia just grows on you with such speed and so unexpectedly."
                                </p>
                            </div>
                            <div className="space-y-3">
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-yellow-900 mb-2">🧘 The People Are Calm & Kind</h3>
                                    <p className="text-yellow-800 text-sm">
                                        "There's no negative emotion in Cambodia. The people are calm, kind, and they rest. They work to live, not live to work."
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-yellow-900 mb-2">🙏 Leave Your Ego at the Border</h3>
                                    <p className="text-yellow-800 text-sm">
                                        "If you come in as a Westerner and you don't leave your ego and pride at that border check, you're in trouble. People don't deal with raised voices or anger."
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-yellow-900 mb-2">😌 You Can Finally Breathe</h3>
                                    <p className="text-yellow-800 text-sm">
                                        "Coming from the Western world where I was chasing constantly, it was like a silence going over me. Status, cars, clothes - that doesn't matter here."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Teaching ESL */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Teaching ESL in Cambodia</h2>

                            <div className="bg-green-50 p-6 rounded-xl border border-green-100 mb-4">
                                <h3 className="text-xl font-bold text-green-900 mb-3">💰 Teacher Salaries</h3>
                                <div className="space-y-3">
                                    <div className="bg-white p-4 rounded-lg">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h4 className="font-bold text-green-900">Licensed Teachers</h4>
                                                <p className="text-green-700 text-sm">International/American/English/Australian schools</p>
                                            </div>
                                            <div className="text-2xl font-bold text-green-600">$2,000+</div>
                                        </div>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h4 className="font-bold text-green-900">TEFL Certified (Unlicensed)</h4>
                                                <p className="text-green-700 text-sm">Celeste's category - depending on experience</p>
                                            </div>
                                            <div className="text-2xl font-bold text-green-600">$1,200-$2,000</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-4">
                                <h3 className="text-xl font-bold text-blue-900 mb-3">📚 Celeste's Teaching Schedule</h3>
                                <ul className="space-y-2 text-blue-800">
                                    <li>🕗 <strong>Morning:</strong> 8am-11am (English, Math, Science, Art)</li>
                                    <li>☀️ <strong>Break:</strong> Kids go home or to Khmer school</li>
                                    <li>🕒 <strong>Afternoon:</strong> 3 hours of English class</li>
                                    <li>💼 <strong>Side Income:</strong> Private tutoring</li>
                                    <li>👩‍🏫 <strong>Position:</strong> Head Teacher (2+ years at same school)</li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                                <h3 className="text-xl font-bold text-purple-900 mb-3">🎓 Getting TEFL Certified</h3>
                                <div className="bg-white p-4 rounded-lg">
                                    <p className="text-purple-800 mb-2">
                                        <strong>Online TEFL:</strong> Cheapest option (what Celeste did)
                                    </p>
                                    <p className="text-purple-700 text-sm">
                                        Some people travel to Cambodia to get certified in person, but it's much more expensive. Online is the way to go!
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Apartment Rentals */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Apartment Rentals in Phnom Penh</h2>

                            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 mb-4">
                                <h3 className="text-xl font-bold text-orange-900 mb-3">🏠 How to Find Apartments</h3>
                                <div className="bg-white p-4 rounded-lg">
                                    <p className="text-orange-800 mb-2">
                                        <strong>Facebook!</strong> "A lot happens on Facebook in Cambodia."
                                    </p>
                                    <ul className="space-y-1 text-orange-700 text-sm">
                                        <li>✅ Facebook Marketplace</li>
                                        <li>✅ Agents advertise on Facebook</li>
                                        <li>✅ Communication moves to Telegram</li>
                                        <li>⚠️ Do due diligence - don't hand money to strangers!</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100">
                                <h3 className="text-xl font-bold text-indigo-900 mb-4">💵 Rental Price Ranges</h3>
                                <div className="space-y-3">
                                    <div className="bg-white p-4 rounded-lg">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h4 className="font-bold text-indigo-900">Budget Apartments</h4>
                                                <p className="text-indigo-700 text-sm">Basic, but you'll have AC!</p>
                                            </div>
                                            <div className="text-2xl font-bold text-indigo-600">$180-$250</div>
                                        </div>
                                        <p className="text-indigo-600 text-xs mt-2">
                                            ⚠️ Below $180, you probably won't have AC
                                        </p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg border-2 border-green-500">
                                        <div className="flex justify-between items-center mb-2">
                                            <div>
                                                <h4 className="font-bold text-green-900">Premium Apartments ⭐</h4>
                                                <p className="text-green-700 text-sm">Gym, pool, cleaning service, WiFi, parking, security</p>
                                            </div>
                                            <div className="text-2xl font-bold text-green-600">$350-$400</div>
                                        </div>
                                        <div className="bg-green-100 p-3 rounded-lg">
                                            <p className="text-green-900 text-sm font-bold">
                                                ✨ Includes: Rooftop pool, gym with views, weekly cleaning, WiFi, parking
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Monthly Budget Breakdown */}
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-8 rounded-xl text-white">
                            <h2 className="text-2xl font-bold mb-4">💰 Total Monthly Budget</h2>
                            <div className="bg-white/20 p-6 rounded-lg backdrop-blur-sm">
                                <p className="text-lg mb-4">
                                    <strong>All-in (rent, food, utilities, transport):</strong>
                                </p>
                                <div className="text-4xl font-bold mb-4">$700/month</div>
                                <p className="text-sm opacity-90">
                                    This includes a $350 apartment with pool/gym, healthy food, water, and tuk-tuk transport. Excludes visa costs.
                                </p>
                            </div>
                        </div>

                        {/* Utilities */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">⚡ Utilities & Bills</h2>
                            <div className="space-y-3">
                                <div className="bg-blue-50 p-4 rounded-lg flex justify-between items-center">
                                    <div>
                                        <h3 className="font-bold text-blue-900">Water</h3>
                                        <p className="text-blue-700 text-sm">Shower 4-5 times a day!</p>
                                    </div>
                                    <div className="text-2xl font-bold text-blue-600">$3-$5/mo</div>
                                </div>
                                <div className="bg-orange-50 p-4 rounded-lg flex justify-between items-center">
                                    <div>
                                        <h3 className="font-bold text-orange-900">Gas (Cooking)</h3>
                                        <p className="text-orange-700 text-sm">10L bottle, lasts 6 months!</p>
                                    </div>
                                    <div className="text-2xl font-bold text-orange-600">$13-$16</div>
                                </div>
                                <div className="bg-yellow-50 p-4 rounded-lg flex justify-between items-center">
                                    <div>
                                        <h3 className="font-bold text-yellow-900">Electricity</h3>
                                        <p className="text-yellow-700 text-sm">$0.25-$0.35/kWh (check your meter!)</p>
                                    </div>
                                    <div className="text-2xl font-bold text-yellow-600">$50-$200/mo</div>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg flex justify-between items-center">
                                    <div>
                                        <h3 className="font-bold text-green-900">Cell Phone</h3>
                                        <p className="text-green-700 text-sm">$6/month or $1/week</p>
                                    </div>
                                    <div className="text-2xl font-bold text-green-600">$6/mo</div>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-purple-900 mb-2">WiFi</h3>
                                    <p className="text-purple-800 text-sm">
                                        Usually <strong>included</strong> in most rentals! If not, people complain and landlords add it.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Food Costs */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">🍜 Food & Dining</h2>

                            <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-4">
                                <h3 className="text-xl font-bold text-red-900 mb-3">🛒 Groceries</h3>
                                <div className="bg-white p-4 rounded-lg mb-3">
                                    <p className="text-red-800 mb-2">
                                        <strong>Celeste & her daughter:</strong> $400/month for 2 people
                                    </p>
                                    <p className="text-red-700 text-sm mb-3">
                                        That's $200/person for LOTS of food (breakfast, snack, cooked lunch, snack, cooked dinner, plus baking!)
                                    </p>
                                    <div className="bg-red-100 p-3 rounded-lg">
                                        <p className="text-red-900 text-sm font-bold">
                                            "We eat clean, we train a lot (runners), and we LOVE food. We can't do this back home for the same money!"
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <p className="text-red-800 text-sm">
                                        <strong>Extreme budget:</strong> $0.52 for a packet of noodles if times are really hard
                                    </p>
                                    <p className="text-red-700 text-xs mt-1">
                                        Bottle of water: $0.20
                                    </p>
                                </div>
                            </div>

                            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                <h3 className="text-xl font-bold text-green-900 mb-3">🍽️ Eating Out</h3>
                                <div className="space-y-3">
                                    <div className="bg-white p-4 rounded-lg">
                                        <div className="flex justify-between items-center">
                                            <span className="text-green-900 font-bold">Street Food</span>
                                            <span className="text-2xl font-bold text-green-600">$1-$3</span>
                                        </div>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg">
                                        <div className="flex justify-between items-center">
                                            <span className="text-green-900 font-bold">Local Khmer Meal + Beer</span>
                                            <span className="text-2xl font-bold text-green-600">$2.50-$3.50</span>
                                        </div>
                                        <p className="text-green-700 text-xs mt-1">Beer: $0.75-$1.00 (happy hour)</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg">
                                        <div className="flex justify-between items-center">
                                            <span className="text-green-900 font-bold">Mid-Range Restaurant</span>
                                            <span className="text-2xl font-bold text-green-600">$5-$10</span>
                                        </div>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg">
                                        <div className="flex justify-between items-center">
                                            <span className="text-green-900 font-bold">Western Food (Pizza, etc.)</span>
                                            <span className="text-2xl font-bold text-green-600">$8-$20</span>
                                        </div>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg">
                                        <div className="flex justify-between items-center">
                                            <span className="text-green-900 font-bold">Korean BBQ (400g chicken + rice)</span>
                                            <span className="text-2xl font-bold text-green-600">$4.50</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-green-100 p-4 rounded-lg mt-4">
                                    <p className="text-green-900 text-sm font-bold">
                                        "You can feed yourself for $5 a night and have a decent meal with vegetables, meat, and rice."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Transportation */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">🚗 Transportation</h2>

                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div className="bg-blue-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-blue-900 mb-2">🛵 Rent a Moto</h3>
                                    <p className="text-2xl font-bold text-blue-600 mb-2">$70-$150/mo</p>
                                    <p className="text-blue-700 text-sm">125cc engine, pretty strong</p>
                                    <p className="text-blue-600 text-xs mt-2 italic">
                                        Celeste admits: "I should just buy one. I'm throwing money away!"
                                    </p>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-purple-900 mb-2">🛺 Tuk-Tuk (Grab)</h3>
                                    <p className="text-purple-800 text-sm">Quick and easy around town</p>
                                    <p className="text-purple-700 text-xs mt-2">
                                        No Uber in Cambodia, but Grab works great!
                                    </p>
                                </div>
                            </div>

                            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                                <h3 className="text-xl font-bold text-orange-900 mb-3">🚌 Travel to Other Cities</h3>
                                <div className="space-y-3">
                                    <div className="bg-white p-4 rounded-lg">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h4 className="font-bold text-orange-900">Phnom Penh → Siem Reap</h4>
                                                <p className="text-orange-700 text-sm">Night bus (11pm-2am), lie down, blanket, pillow, water</p>
                                            </div>
                                            <div className="text-2xl font-bold text-orange-600">$16-$19</div>
                                        </div>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h4 className="font-bold text-orange-900">Phnom Penh → Kampot/Kep</h4>
                                                <p className="text-orange-700 text-sm">3-hour VIP van (21-22 seater Hyundai)</p>
                                            </div>
                                            <div className="text-2xl font-bold text-orange-600">$9.50-$10</div>
                                        </div>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h4 className="font-bold text-orange-900">To the Islands</h4>
                                                <p className="text-orange-700 text-sm">Koh Rong, Koh Rong Sanloem</p>
                                            </div>
                                            <div className="text-2xl font-bold text-orange-600">$25-$35</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Visa Information */}
                        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                            <h2 className="text-2xl font-bold text-indigo-900 mb-4">🛂 Work Visa (For Teachers)</h2>
                            <div className="space-y-3">
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-indigo-900 mb-2">Required Documents:</h3>
                                    <ul className="space-y-1 text-indigo-800 text-sm">
                                        <li>✅ Employment letter from employer</li>
                                        <li>✅ Company's tax certificate/patent</li>
                                        <li>✅ Photo of ID</li>
                                        <li>✅ Register on FCPS app (electronic system)</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-bold text-indigo-900">6-Month Visa</span>
                                        <span className="text-xl font-bold text-indigo-600">$150-$175</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-indigo-900">12-Month Visa</span>
                                        <span className="text-xl font-bold text-indigo-600">$360-$380</span>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-indigo-900">Work Permit (Annual)</span>
                                        <span className="text-xl font-bold text-indigo-600">$190</span>
                                    </div>
                                    <p className="text-indigo-700 text-xs mt-2">
                                        ⚠️ Penalties if late: ~$500. Get it done on time!
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Healthcare */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">🏥 Healthcare</h2>
                            <div className="space-y-3">
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-green-900 mb-2">NSSF (Teachers)</h3>
                                    <p className="text-green-800 text-sm mb-2">
                                        National Social Security Fund - $3/month contribution
                                    </p>
                                    <p className="text-green-700 text-xs">
                                        Access to public hospitals. Walk in, get vitals checked, get meds, leave. Minimal cost.
                                    </p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-blue-900 mb-3">Private Healthcare Costs:</h3>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-blue-800">Doctor Visit</span>
                                            <span className="font-bold text-blue-600">$20-$50</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-blue-800">Specialist (General)</span>
                                            <span className="font-bold text-blue-600">$40-$80</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-blue-800">Teeth Cleaning</span>
                                            <span className="font-bold text-blue-600">$30</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-blue-800">Small Filling</span>
                                            <span className="font-bold text-blue-600">$10</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-blue-800">Eye Test + Glasses</span>
                                            <span className="font-bold text-blue-600">$60 (1 hour!)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-purple-900">Private Insurance</span>
                                        <span className="text-xl font-bold text-purple-600">$80-$200/mo</span>
                                    </div>
                                    <p className="text-purple-700 text-xs mt-2">Depending on coverage needs</p>
                                </div>
                            </div>
                        </div>

                        {/* Buying Property */}
                        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                            <h2 className="text-2xl font-bold text-yellow-900 mb-4">🏢 Buying Property (Condos)</h2>
                            <div className="bg-white p-4 rounded-lg mb-4">
                                <p className="text-yellow-800 mb-3">
                                    <strong>Example:</strong> $50,000-$60,000 one-bedroom condo
                                </p>
                                <div className="space-y-2 text-sm text-yellow-800">
                                    <p>💰 <strong>Down Payment:</strong> 10-20% ($5,000-$6,000)</p>
                                    <p>📅 <strong>Installments:</strong> $400-$600/month for 45 months</p>
                                    <p>✨ <strong>Interest-Free!</strong> No interest during installment period</p>
                                    <p>🏦 <strong>Final Payment:</strong> Lump sum after 45 months OR take developer loan (5-11.9% interest, 15 years)</p>
                                </div>
                            </div>
                            <div className="bg-yellow-100 p-3 rounded-lg">
                                <p className="text-yellow-900 text-sm font-bold">
                                    ⚠️ Celeste's advice: "If you're staying long-term, buy property. Don't rent. It's silly to rent."
                                </p>
                            </div>
                        </div>

                        {/* Things to Do */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">🎉 Things to Do in Phnom Penh</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-blue-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-blue-900 mb-2">🏃 Sports</h3>
                                    <ul className="space-y-1 text-blue-800 text-sm">
                                        <li>• Running (marathons, 5Ks, 12Ks)</li>
                                        <li>• Soccer</li>
                                        <li>• Badminton (very popular)</li>
                                        <li>• Paddle ball / Pickleball</li>
                                        <li>• Olympic Stadium access</li>
                                    </ul>
                                </div>
                                <div className="bg-green-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-green-900 mb-2">🎭 Culture & Social</h3>
                                    <ul className="space-y-1 text-green-800 text-sm">
                                        <li>• Temple visits</li>
                                        <li>• Food tours</li>
                                        <li>• Dancing groups</li>
                                        <li>• Expat meetups</li>
                                        <li>• Women's communities</li>
                                        <li>• Business communities</li>
                                        <li>• Language exchange</li>
                                        <li>• Book clubs</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-xl mt-4">
                                <p className="text-purple-800 text-sm italic">
                                    "You've got more time here than in Western society because we don't chase as much."
                                </p>
                            </div>
                        </div>

                        {/* Celeste's Final Wisdom */}
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-8 rounded-xl text-white">
                            <h2 className="text-2xl font-bold mb-4">Celeste's Final Thoughts</h2>
                            <div className="space-y-4">
                                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                                    <p className="mb-2 font-bold">💼 For Entrepreneurs:</p>
                                    <p className="text-sm">
                                        "Cambodia is developing at quite a speed. If you set things up and become a trendsetter, you can do really well. There's so much opportunity!"
                                    </p>
                                </div>
                                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                                    <p className="mb-2 font-bold">🧘 For Retirees:</p>
                                    <p className="text-sm">
                                        "If you want to retire and be peaceful, you can do it here cheaply and peacefully."
                                    </p>
                                </div>
                                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                                    <p className="mb-2 font-bold">🌍 For Everyone:</p>
                                    <p className="text-sm">
                                        "If you need a break from Western society to pull yourself towards yourself and find yourself, Cambodia is a great place to do it."
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
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
                                >
                                    <h4 className="font-bold text-blue-900 mb-1">Phnom Penh Guide</h4>
                                    <p className="text-gray-700 text-sm">Capital city overview</p>
                                </Link>
                                <Link
                                    href="/visa"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-green-500 transition-colors"
                                >
                                    <h4 className="font-bold text-green-900 mb-1">Visa Guide</h4>
                                    <p className="text-gray-700 text-sm">All visa types explained</p>
                                </Link>
                                <Link
                                    href="/cost-of-living"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-purple-500 transition-colors"
                                >
                                    <h4 className="font-bold text-purple-900 mb-1">Cost of Living</h4>
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
