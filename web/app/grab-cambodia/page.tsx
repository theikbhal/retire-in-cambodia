import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Grab Cambodia | Book Cars, Bikes & Tuk-Tuks',
    description: 'How to use Grab in Cambodia for transportation. Book cars, motorbikes, and tuk-tuks easily. Available in Phnom Penh and Siem Reap.',
};

export default function GrabCambodiaPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold mb-4">
                    Transportation
                </span>
                <h1 className="text-4xl font-extrabold mb-6">Grab Cambodia 🚗</h1>
                <h2 className="text-xl text-gray-600 mb-8">Book Cars, Motorbikes & Tuk-Tuks</h2>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-xl border border-emerald-100 mb-8">
                        <h2 className="text-xl font-bold text-emerald-900 mb-3">What is Grab?</h2>
                        <p className="text-emerald-800 leading-relaxed mb-3">
                            Grab is Southeast Asia's leading <strong>super app</strong> for ride-hailing, food delivery, and digital payments. It's like Uber but specifically designed for the region.
                        </p>
                        <p className="text-emerald-700 text-sm">
                            Available in Phnom Penh, Siem Reap, and other major Cambodian cities.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Kelly's Experience */}
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h2 className="text-xl font-bold text-blue-900 mb-3">Kelly's Experience</h2>
                            <div className="bg-white p-4 rounded-lg">
                                <p className="text-blue-800 mb-2">
                                    "You can request <strong>cars and stuff</strong> with Grab. It's really convenient."
                                </p>
                                <p className="text-blue-700 text-sm italic">
                                    Kelly mentions Grab as an option alongside PassApp for getting around Siem Reap.
                                </p>
                            </div>
                        </div>

                        {/* Vehicle Types */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Vehicle Types Available</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-blue-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-blue-900 mb-2">🚗 GrabCar</h3>
                                    <p className="text-blue-800 text-sm mb-2">Private car with air conditioning</p>
                                    <ul className="text-blue-700 text-sm space-y-1">
                                        <li>• Fits 1-4 passengers</li>
                                        <li>• Most comfortable option</li>
                                        <li>• AC and privacy</li>
                                        <li>• Higher price</li>
                                    </ul>
                                </div>
                                <div className="bg-green-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-green-900 mb-2">🛵 GrabBike</h3>
                                    <p className="text-green-800 text-sm mb-2">Motorbike taxi</p>
                                    <ul className="text-green-700 text-sm space-y-1">
                                        <li>• Solo rider only</li>
                                        <li>• Cheapest option</li>
                                        <li>• Fast in traffic</li>
                                        <li>• Helmet provided</li>
                                    </ul>
                                </div>
                                <div className="bg-orange-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-orange-900 mb-2">🛺 GrabTuk</h3>
                                    <p className="text-orange-800 text-sm mb-2">Traditional tuk-tuk</p>
                                    <ul className="text-orange-700 text-sm space-y-1">
                                        <li>• Fits 2-6 passengers</li>
                                        <li>• Authentic experience</li>
                                        <li>• Good for groups</li>
                                        <li>• Mid-range price</li>
                                    </ul>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-purple-900 mb-2">🚙 GrabSUV</h3>
                                    <p className="text-purple-800 text-sm mb-2">Larger vehicle (limited availability)</p>
                                    <ul className="text-purple-700 text-sm space-y-1">
                                        <li>• Fits 5-7 passengers</li>
                                        <li>• Extra luggage space</li>
                                        <li>• Airport transfers</li>
                                        <li>• Premium pricing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Pricing Comparison */}
                        <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                            <h2 className="text-2xl font-bold text-green-900 mb-4">Typical Pricing (5km trip in Siem Reap)</h2>
                            <div className="space-y-3">
                                <div className="bg-white p-4 rounded-lg flex justify-between items-center">
                                    <div>
                                        <h3 className="font-bold text-green-900">GrabBike</h3>
                                        <p className="text-green-700 text-sm">Motorbike taxi</p>
                                    </div>
                                    <div className="text-2xl font-bold text-green-600">$1.50-$2.50</div>
                                </div>
                                <div className="bg-white p-4 rounded-lg flex justify-between items-center">
                                    <div>
                                        <h3 className="font-bold text-green-900">GrabTuk</h3>
                                        <p className="text-green-700 text-sm">Tuk-tuk</p>
                                    </div>
                                    <div className="text-2xl font-bold text-green-600">$2.50-$4</div>
                                </div>
                                <div className="bg-white p-4 rounded-lg flex justify-between items-center">
                                    <div>
                                        <h3 className="font-bold text-green-900">GrabCar</h3>
                                        <p className="text-green-700 text-sm">Private car</p>
                                    </div>
                                    <div className="text-2xl font-bold text-green-600">$4-$6</div>
                                </div>
                            </div>
                            <p className="text-green-700 text-sm mt-4 italic">
                                Note: Prices vary based on distance, time of day, and demand (surge pricing may apply).
                            </p>
                        </div>

                        {/* How to Use */}
                        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                            <h2 className="text-2xl font-bold text-indigo-900 mb-4">How to Use Grab</h2>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                                    <div>
                                        <h3 className="font-bold text-indigo-900">Download Grab App</h3>
                                        <p className="text-indigo-800 text-sm">Available on iOS and Android</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                                    <div>
                                        <h3 className="font-bold text-indigo-900">Register Account</h3>
                                        <p className="text-indigo-800 text-sm">Phone number + email (can use international number)</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                                    <div>
                                        <h3 className="font-bold text-indigo-900">Add Payment Method</h3>
                                        <p className="text-indigo-800 text-sm">Cash, credit card, or GrabPay wallet</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                                    <div>
                                        <h3 className="font-bold text-indigo-900">Enter Destination</h3>
                                        <p className="text-indigo-800 text-sm">Type address or drop pin on map</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">5</div>
                                    <div>
                                        <h3 className="font-bold text-indigo-900">Choose Vehicle & Book</h3>
                                        <p className="text-indigo-800 text-sm">See price estimate, then confirm booking</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Grab vs PassApp */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Grab vs PassApp</h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white rounded-lg overflow-hidden">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">Feature</th>
                                            <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">Grab</th>
                                            <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">PassApp</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-4 py-3 text-sm font-medium text-gray-900">Cars Available</td>
                                            <td className="px-4 py-3 text-sm text-green-600">✅ Yes</td>
                                            <td className="px-4 py-3 text-sm text-red-600">❌ No</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-sm font-medium text-gray-900">Motorbikes</td>
                                            <td className="px-4 py-3 text-sm text-green-600">✅ Yes</td>
                                            <td className="px-4 py-3 text-sm text-green-600">✅ Yes</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-sm font-medium text-gray-900">Tuk-Tuks</td>
                                            <td className="px-4 py-3 text-sm text-green-600">✅ Yes</td>
                                            <td className="px-4 py-3 text-sm text-green-600">✅ Yes</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-sm font-medium text-gray-900">Price</td>
                                            <td className="px-4 py-3 text-sm text-gray-700">Slightly higher</td>
                                            <td className="px-4 py-3 text-sm text-gray-700">Slightly cheaper</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-sm font-medium text-gray-900">Payment Options</td>
                                            <td className="px-4 py-3 text-sm text-gray-700">Cash, card, wallet</td>
                                            <td className="px-4 py-3 text-sm text-gray-700">Mostly cash</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-sm font-medium text-gray-900">Driver Availability</td>
                                            <td className="px-4 py-3 text-sm text-gray-700">Good in cities</td>
                                            <td className="px-4 py-3 text-sm text-gray-700">Very good</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Pros & Cons */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros & Cons</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-green-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-green-900 mb-3">✅ Advantages</h3>
                                    <ul className="space-y-2 text-green-800 text-sm">
                                        <li>• Car options available</li>
                                        <li>• Cashless payment accepted</li>
                                        <li>• International app (familiar interface)</li>
                                        <li>• Good customer support</li>
                                        <li>• Driver ratings & safety features</li>
                                        <li>• Promo codes & discounts</li>
                                    </ul>
                                </div>
                                <div className="bg-yellow-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-yellow-900 mb-3">⚠️ Considerations</h3>
                                    <ul className="space-y-2 text-yellow-800 text-sm">
                                        <li>• Slightly more expensive than PassApp</li>
                                        <li>• Surge pricing during peak times</li>
                                        <li>• Fewer drivers in rural areas</li>
                                        <li>• Requires internet connection</li>
                                        <li>• Some drivers prefer cash</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Tips */}
                        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                            <h2 className="text-xl font-bold text-yellow-900 mb-3">💡 Pro Tips</h2>
                            <ul className="space-y-2 text-yellow-800">
                                <li>✅ <strong>Check for promos:</strong> Grab often has discount codes for new users</li>
                                <li>✅ <strong>Save favorite locations:</strong> Home, work, gym for faster booking</li>
                                <li>✅ <strong>Share your trip:</strong> Send live location to friends/family for safety</li>
                                <li>✅ <strong>Rate drivers honestly:</strong> Helps maintain service quality</li>
                                <li>✅ <strong>Have cash backup:</strong> Not all drivers accept card payments</li>
                                <li>✅ <strong>Book in advance:</strong> Schedule rides for airport trips</li>
                            </ul>
                        </div>

                        {/* Other Options */}
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h2 className="text-xl font-bold text-gray-900 mb-3">Other Transportation Options</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/passapp-cambodia" className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-green-500 transition-colors">
                                    <h3 className="font-bold text-green-900 mb-1">PassApp</h3>
                                    <p className="text-gray-700 text-sm">Cheaper alternative for bikes & tuk-tuks</p>
                                </Link>
                                <Link href="/buying-motorbike" className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors">
                                    <h3 className="font-bold text-blue-900 mb-1">Buy a Motorbike</h3>
                                    <p className="text-gray-700 text-sm">Long-term solution from $1,550</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
