import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'PassApp Cambodia | Ride-Hailing for Motorbikes & Tuk-Tuks',
    description: 'How to use PassApp in Cambodia for affordable transportation. Book motorbikes and tuk-tuks easily. Kelly uses it for $2 rides across town.',
};

export default function PassAppPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-800 text-sm font-semibold mb-4">
                    Transportation
                </span>
                <h1 className="text-4xl font-extrabold mb-6">PassApp Cambodia 🛵</h1>
                <h2 className="text-xl text-gray-600 mb-8">Affordable Ride-Hailing for Motorbikes & Tuk-Tuks</h2>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 mb-8">
                        <h2 className="text-xl font-bold text-green-900 mb-3">What is PassApp?</h2>
                        <p className="text-green-800 leading-relaxed">
                            PassApp is Cambodia's popular <strong>ride-hailing app</strong>, similar to Uber but designed specifically for Southeast Asian transportation. You can book motorbike taxis (remork motos) and tuk-tuks with just a few taps.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Kelly's Experience */}
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h2 className="text-xl font-bold text-blue-900 mb-3">Kelly's Experience</h2>
                            <div className="bg-white p-4 rounded-lg">
                                <p className="text-blue-800 mb-2">
                                    "We go about 3.5km and it costs me <strong>less than $2</strong> when we go to the club to go swimming."
                                </p>
                                <p className="text-blue-700 text-sm italic">
                                    It's a little three-wheel motorcycle, totally covered. You can fit 2-3 people in the back with the driver up front.
                                </p>
                            </div>
                        </div>

                        {/* Vehicle Types */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Vehicle Types Available</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-orange-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-orange-900 mb-2">🛵 Motorbike (Remork Moto)</h3>
                                    <p className="text-orange-800 text-sm mb-2">Three-wheel covered motorcycle</p>
                                    <ul className="text-orange-700 text-sm space-y-1">
                                        <li>• Fits 2-3 passengers</li>
                                        <li>• Cheapest option</li>
                                        <li>• Perfect for short trips</li>
                                        <li>• Protected from rain/sun</li>
                                    </ul>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-purple-900 mb-2">🛺 Tuk-Tuk</h3>
                                    <p className="text-purple-800 text-sm mb-2">Traditional open-air tuk-tuk</p>
                                    <ul className="text-purple-700 text-sm space-y-1">
                                        <li>• Fits 4-6 passengers</li>
                                        <li>• Slightly more expensive</li>
                                        <li>• Good for groups</li>
                                        <li>• Open-air experience</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Pricing */}
                        <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                            <h2 className="text-2xl font-bold text-green-900 mb-4">Typical Pricing in Siem Reap</h2>
                            <div className="space-y-3">
                                <div className="bg-white p-4 rounded-lg flex justify-between items-center">
                                    <div>
                                        <h3 className="font-bold text-green-900">Short Trip (1-2km)</h3>
                                        <p className="text-green-700 text-sm">Around town, nearby destinations</p>
                                    </div>
                                    <div className="text-2xl font-bold text-green-600">$1-$1.50</div>
                                </div>
                                <div className="bg-white p-4 rounded-lg flex justify-between items-center">
                                    <div>
                                        <h3 className="font-bold text-green-900">Medium Trip (3-5km)</h3>
                                        <p className="text-green-700 text-sm">Cross town, to markets</p>
                                    </div>
                                    <div className="text-2xl font-bold text-green-600">$2-$3</div>
                                </div>
                                <div className="bg-white p-4 rounded-lg flex justify-between items-center">
                                    <div>
                                        <h3 className="font-bold text-green-900">Longer Trip (5-10km)</h3>
                                        <p className="text-green-700 text-sm">Outskirts, temples, airport</p>
                                    </div>
                                    <div className="text-2xl font-bold text-green-600">$3-$5</div>
                                </div>
                            </div>
                            <p className="text-green-700 text-sm mt-4 italic">
                                Note: Prices may vary based on time of day and demand.
                            </p>
                        </div>

                        {/* How to Use */}
                        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                            <h2 className="text-2xl font-bold text-indigo-900 mb-4">How to Use PassApp</h2>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                                    <div>
                                        <h3 className="font-bold text-indigo-900">Download the App</h3>
                                        <p className="text-indigo-800 text-sm">Available on iOS and Android app stores</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                                    <div>
                                        <h3 className="font-bold text-indigo-900">Register</h3>
                                        <p className="text-indigo-800 text-sm">Use your phone number (local SIM recommended)</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                                    <div>
                                        <h3 className="font-bold text-indigo-900">Set Pickup & Destination</h3>
                                        <p className="text-indigo-800 text-sm">Enter your location and where you want to go</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                                    <div>
                                        <h3 className="font-bold text-indigo-900">Choose Vehicle Type</h3>
                                        <p className="text-indigo-800 text-sm">Motorbike or tuk-tuk</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">5</div>
                                    <div>
                                        <h3 className="font-bold text-indigo-900">Book & Pay</h3>
                                        <p className="text-indigo-800 text-sm">Cash payment to driver (some accept digital payment)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pros & Cons */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros & Cons</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-green-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-green-900 mb-3">✅ Advantages</h3>
                                    <ul className="space-y-2 text-green-800 text-sm">
                                        <li>• Very affordable</li>
                                        <li>• See price before booking</li>
                                        <li>• No haggling with drivers</li>
                                        <li>• Track your ride</li>
                                        <li>• Driver ratings for safety</li>
                                        <li>• Available 24/7</li>
                                    </ul>
                                </div>
                                <div className="bg-yellow-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-yellow-900 mb-3">⚠️ Considerations</h3>
                                    <ul className="space-y-2 text-yellow-800 text-sm">
                                        <li>• Need internet connection</li>
                                        <li>• Drivers may not speak English</li>
                                        <li>• Peak times = longer wait</li>
                                        <li>• Cash usually required</li>
                                        <li>• GPS can be inaccurate sometimes</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Tips */}
                        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                            <h2 className="text-xl font-bold text-yellow-900 mb-3">💡 Pro Tips</h2>
                            <ul className="space-y-2 text-yellow-800">
                                <li>✅ <strong>Get a local SIM card:</strong> Makes registration and booking easier</li>
                                <li>✅ <strong>Have small bills:</strong> Drivers often don't have change for large notes</li>
                                <li>✅ <strong>Screenshot your destination:</strong> Show driver if there's confusion</li>
                                <li>✅ <strong>Check the license plate:</strong> Make sure it matches the app</li>
                                <li>✅ <strong>Rate your driver:</strong> Helps maintain service quality</li>
                            </ul>
                        </div>

                        {/* Alternatives */}
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h2 className="text-xl font-bold text-gray-900 mb-3">Other Transportation Options</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/grab-cambodia" className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-green-500 transition-colors">
                                    <h3 className="font-bold text-green-900 mb-1">Grab</h3>
                                    <p className="text-gray-700 text-sm">Alternative ride-hailing app with cars</p>
                                </Link>
                                <Link href="/buying-motorbike" className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors">
                                    <h3 className="font-bold text-blue-900 mb-1">Buy a Motorbike</h3>
                                    <p className="text-gray-700 text-sm">Used bikes from $1,550</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
