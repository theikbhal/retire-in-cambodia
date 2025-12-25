import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Buying a Motorbike in Siem Reap | Used Bikes Around $1,550',
    description: 'Guide to buying a used motorbike or scooter in Siem Reap, Cambodia. Kelly bought a Honda Click 125 with 36,000km for $1,550.',
};

export default function BuyingMotorbikePage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-4">
                    Transportation
                </span>
                <h1 className="text-4xl font-extrabold mb-6">Buying a Motorbike in Siem Reap 🛵</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100 mb-8">
                        <h2 className="text-xl font-bold text-green-900 mb-3">Kelly's Experience</h2>
                        <div className="bg-white p-4 rounded-lg">
                            <p className="text-green-800 mb-2">
                                <strong>Bike:</strong> Honda Click 125 (used)
                            </p>
                            <p className="text-green-800 mb-2">
                                <strong>Mileage:</strong> 36,000 kilometers when purchased
                            </p>
                            <p className="text-green-800 mb-2">
                                <strong>Price:</strong> $1,550 USD
                            </p>
                            <p className="text-green-700 text-sm mt-3 italic">
                                "It's gotten me through 6-7 day trips. Great for exploring Cambodia!"
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* Why Buy a Motorbike */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Why Buy a Motorbike?</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-blue-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-blue-900 mb-2">✅ Pros</h3>
                                    <ul className="space-y-1 text-blue-800 text-sm">
                                        <li>• Freedom to explore anytime</li>
                                        <li>• No waiting for tuk-tuks</li>
                                        <li>• Cheaper than daily rentals long-term</li>
                                        <li>• Perfect for day trips</li>
                                        <li>• Easy parking everywhere</li>
                                    </ul>
                                </div>
                                <div className="bg-yellow-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-yellow-900 mb-2">⚠️ Considerations</h3>
                                    <ul className="space-y-1 text-yellow-800 text-sm">
                                        <li>• Need to learn traffic rules</li>
                                        <li>• Maintenance costs</li>
                                        <li>• Hot weather riding</li>
                                        <li>• Rain during monsoon season</li>
                                        <li>• Reselling when you leave</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Price Ranges */}
                        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                            <h2 className="text-2xl font-bold text-indigo-900 mb-4">Price Ranges (Used Bikes)</h2>
                            <div className="space-y-3">
                                <div className="bg-white p-4 rounded-lg">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="font-bold text-indigo-900">Budget Bikes</h3>
                                            <p className="text-indigo-700 text-sm">Older models, higher mileage</p>
                                        </div>
                                        <div className="text-2xl font-bold text-indigo-600">$500-$1,000</div>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="font-bold text-indigo-900">Mid-Range (Kelly's Choice)</h3>
                                            <p className="text-indigo-700 text-sm">Good condition, moderate mileage</p>
                                        </div>
                                        <div className="text-2xl font-bold text-indigo-600">$1,200-$1,800</div>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="font-bold text-indigo-900">Nearly New</h3>
                                            <p className="text-indigo-700 text-sm">Low mileage, recent models</p>
                                        </div>
                                        <div className="text-2xl font-bold text-indigo-600">$2,000-$3,000</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Popular Models */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Popular Models in Cambodia</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-red-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-red-900 mb-2">🏍️ Honda Click 125</h3>
                                    <p className="text-red-800 text-sm">Reliable, good for long trips, easy to maintain. Kelly's choice!</p>
                                </div>
                                <div className="bg-orange-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-orange-900 mb-2">🏍️ Honda Wave</h3>
                                    <p className="text-orange-800 text-sm">Very popular, fuel-efficient, cheap parts.</p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-green-900 mb-2">🏍️ Yamaha Nouvo</h3>
                                    <p className="text-green-800 text-sm">Comfortable, automatic, good for city riding.</p>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-purple-900 mb-2">🏍️ Suzuki Smash</h3>
                                    <p className="text-purple-800 text-sm">Budget-friendly, easy to ride, widely available.</p>
                                </div>
                            </div>
                        </div>

                        {/* Where to Buy */}
                        <div className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                            <h2 className="text-xl font-bold text-teal-900 mb-3">Where to Buy in Siem Reap</h2>
                            <ul className="space-y-3 text-teal-800">
                                <li className="flex items-start gap-3">
                                    <span className="text-xl">🏪</span>
                                    <div>
                                        <strong>Motorbike Shops:</strong> Along Sivatha Boulevard and near Old Market. Ask around for recommendations.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-xl">👥</span>
                                    <div>
                                        <strong>Expat Groups:</strong> Facebook groups like "Siem Reap Expats" often have bikes for sale.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-xl">🔧</span>
                                    <div>
                                        <strong>Mechanics:</strong> Some mechanics sell refurbished bikes. Good option for reliability.
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Buying Tips */}
                        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                            <h2 className="text-xl font-bold text-yellow-900 mb-3">⚠️ Buying Tips</h2>
                            <ul className="space-y-2 text-yellow-800">
                                <li>✅ <strong>Test ride:</strong> Always test the bike before buying</li>
                                <li>✅ <strong>Check documents:</strong> Make sure the bike has proper registration</li>
                                <li>✅ <strong>Bring a mechanic:</strong> If possible, have someone knowledgeable check it</li>
                                <li>✅ <strong>Negotiate:</strong> Prices are usually negotiable</li>
                                <li>✅ <strong>Ask about history:</strong> Previous owners, accidents, repairs</li>
                                <li>✅ <strong>Check tires & brakes:</strong> These are expensive to replace</li>
                            </ul>
                        </div>

                        {/* Ongoing Costs */}
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h2 className="text-xl font-bold text-gray-900 mb-3">Ongoing Costs</h2>
                            <div className="space-y-2">
                                <div className="flex justify-between p-3 bg-white rounded-lg">
                                    <span className="text-gray-700">Fuel (per month)</span>
                                    <span className="font-bold text-gray-900">$20-$40</span>
                                </div>
                                <div className="flex justify-between p-3 bg-white rounded-lg">
                                    <span className="text-gray-700">Oil change (every 3 months)</span>
                                    <span className="font-bold text-gray-900">$5-$10</span>
                                </div>
                                <div className="flex justify-between p-3 bg-white rounded-lg">
                                    <span className="text-gray-700">Annual registration</span>
                                    <span className="font-bold text-gray-900">~$10</span>
                                </div>
                                <div className="flex justify-between p-3 bg-white rounded-lg">
                                    <span className="text-gray-700">Repairs (as needed)</span>
                                    <span className="font-bold text-gray-900">$10-$50</span>
                                </div>
                            </div>
                        </div>

                        {/* Alternatives */}
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h2 className="text-xl font-bold text-blue-900 mb-3">Not Ready to Buy?</h2>
                            <p className="text-blue-800 mb-4">Consider these alternatives:</p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/passapp-cambodia" className="block bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-blue-900 mb-1">PassApp</h3>
                                    <p className="text-blue-700 text-sm">Ride-hailing app for motorbikes and tuk-tuks</p>
                                </Link>
                                <Link href="/grab-cambodia" className="block bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-blue-900 mb-1">Grab</h3>
                                    <p className="text-blue-700 text-sm">Book cars, bikes, and tuk-tuks easily</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
