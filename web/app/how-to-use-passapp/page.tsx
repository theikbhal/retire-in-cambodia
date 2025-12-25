import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'How to Use PassApp in Cambodia | Step-by-Step Tutorial',
    description: 'Complete guide to using PassApp in Cambodia. Download, book rides, choose vehicles, and save money on transportation. Cheaper than street taxis!',
};

export default function HowToUsePassAppPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/passapp-cambodia" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to PassApp Guide
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-800 text-sm font-semibold mb-4">
                    Tutorial
                </span>
                <h1 className="text-4xl font-extrabold mb-2">How to Use PassApp 📱</h1>
                <h2 className="text-xl text-gray-600 mb-8">Step-by-Step Guide for Cambodia Transportation</h2>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <div className="aspect-w-16 aspect-h-9 mb-8 overflow-hidden rounded-xl shadow-lg border border-gray-200">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/REV2lE5i4_8"
                            title="How to Use PassApp - Cambodia Tutorial"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full object-cover"
                        ></iframe>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 mb-8">
                        <h2 className="text-xl font-bold text-green-900 mb-3">What is PassApp?</h2>
                        <p className="text-green-800 leading-relaxed">
                            PassApp is Cambodia's popular ride-hailing app, similar to Uber or Lyft. It's <strong>very efficient</strong>, has tons of drivers, and is <strong>cheaper than negotiating with street taxis</strong>.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Step-by-Step Guide */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Step-by-Step Tutorial</h2>

                            {/* Step 1 */}
                            <div className="mb-6 bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
                                    <h3 className="text-xl font-bold text-blue-900">Download PassApp</h3>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <p className="text-blue-800 mb-3">
                                        Go to your <strong>Play Store</strong> (Android) or <strong>App Store</strong> (iOS) and search for "PassApp".
                                    </p>
                                    <p className="text-blue-700 text-sm italic">
                                        💡 Pro Tip: Download and set up the app BEFORE you travel so everything's ready when you land!
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="mb-6 bg-purple-50 p-6 rounded-xl border border-purple-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
                                    <h3 className="text-xl font-bold text-purple-900">Open the App & Choose Vehicle Type</h3>
                                </div>
                                <div className="bg-white p-4 rounded-lg mb-3">
                                    <p className="text-purple-800 mb-3">
                                        Once you open PassApp, you'll see <strong>4 different vehicle options</strong>:
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        <div className="bg-purple-50 p-3 rounded-lg">
                                            <h4 className="font-bold text-purple-900 text-sm">🛵 Option 1: Motorbike</h4>
                                            <p className="text-purple-700 text-xs">Solo rider, fastest option</p>
                                        </div>
                                        <div className="bg-green-50 p-3 rounded-lg border-2 border-green-500">
                                            <h4 className="font-bold text-green-900 text-sm">🛵 Option 2: Rickshaw ⭐</h4>
                                            <p className="text-green-700 text-xs font-bold">CHEAPEST OPTION!</p>
                                        </div>
                                        <div className="bg-purple-50 p-3 rounded-lg">
                                            <h4 className="font-bold text-purple-900 text-sm">🛺 Option 3: Tuk-Tuk</h4>
                                            <p className="text-purple-700 text-xs">Traditional, fits groups</p>
                                        </div>
                                        <div className="bg-purple-50 p-3 rounded-lg">
                                            <h4 className="font-bold text-purple-900 text-sm">🚗 Option 4: Car</h4>
                                            <p className="text-purple-700 text-xs">Most comfortable, AC</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-green-100 p-3 rounded-lg border border-green-200">
                                    <p className="text-green-900 text-sm font-bold">
                                        ✅ Recommended: Choose "Rickshaw" for the best price!
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="mb-6 bg-orange-50 p-6 rounded-xl border border-orange-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
                                    <h3 className="text-xl font-bold text-orange-900">Set Your Pickup Location</h3>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <p className="text-orange-800 mb-2">
                                        The app will <strong>automatically detect your current location</strong> using GPS.
                                    </p>
                                    <p className="text-orange-700 text-sm">
                                        If it's not accurate, you can manually adjust the pin on the map.
                                    </p>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="mb-6 bg-teal-50 p-6 rounded-xl border border-teal-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">4</div>
                                    <h3 className="text-xl font-bold text-teal-900">Enter Your Destination</h3>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <p className="text-teal-800 mb-3">
                                        Click "Enter" and search for the location you want to go to.
                                    </p>
                                    <p className="text-teal-700 text-sm mb-3">
                                        Type the address, landmark, or business name. The app will show suggestions.
                                    </p>
                                    <div className="bg-teal-100 p-3 rounded-lg border border-teal-200">
                                        <p className="text-teal-900 text-sm font-bold">
                                            💰 The app will automatically show you the price quote!
                                        </p>
                                        <p className="text-teal-800 text-xs mt-1">
                                            Example: 5,600 Riels (about $1.40 USD)
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Step 5 */}
                            <div className="mb-6 bg-red-50 p-6 rounded-xl border border-red-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">5</div>
                                    <h3 className="text-xl font-bold text-red-900">Confirm Your Booking</h3>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <p className="text-red-800 mb-3">
                                        Click <strong>"Confirm Booking"</strong> at the bottom of the screen.
                                    </p>
                                    <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                                        <p className="text-green-900 text-sm font-bold mb-1">⚡ Super Fast!</p>
                                        <p className="text-green-800 text-xs">
                                            Usually, there are drivers on every corner. It takes <strong>less than 2 minutes</strong> for a driver to arrive!
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Step 6 */}
                            <div className="mb-6 bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">6</div>
                                    <h3 className="text-xl font-bold text-indigo-900">Wait for Driver (Usually Under 1 Minute!)</h3>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <p className="text-indigo-800 mb-3">
                                        Once a driver accepts, you'll see:
                                    </p>
                                    <ul className="space-y-2 text-indigo-700 text-sm">
                                        <li>✅ Driver's photo and name</li>
                                        <li>✅ Vehicle type and license plate</li>
                                        <li>✅ Live tracking showing driver's location</li>
                                        <li>✅ Estimated arrival time (usually less than 1 minute!)</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Step 7 */}
                            <div className="mb-6 bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-yellow-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">7</div>
                                    <h3 className="text-xl font-bold text-yellow-900">During the Ride</h3>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <p className="text-yellow-800 mb-3">
                                        You can leave the app open to <strong>track your route live</strong>.
                                    </p>
                                    <ul className="space-y-2 text-yellow-700 text-sm">
                                        <li>📍 See where you are in real-time</li>
                                        <li>🗺️ Driver has GPS navigation</li>
                                        <li>📱 Watch your progress to the destination</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Step 8 */}
                            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">8</div>
                                    <h3 className="text-xl font-bold text-green-900">Payment</h3>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <p className="text-green-800 mb-3">
                                        You have <strong>two payment options</strong>:
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                                            <h4 className="font-bold text-blue-900 mb-1">💳 Credit Card</h4>
                                            <p className="text-blue-800 text-sm">Connect your card in the app settings. Highly recommended to set up BEFORE you travel!</p>
                                        </div>
                                        <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                                            <h4 className="font-bold text-green-900 mb-1">💵 Cash</h4>
                                            <p className="text-green-800 text-sm">Pay the driver directly in Cambodian Riels or USD.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Airport Tip */}
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-8 rounded-xl text-white">
                            <h2 className="text-2xl font-bold mb-4">✈️ Airport Arrival Tip</h2>
                            <div className="bg-white/20 p-6 rounded-lg backdrop-blur-sm">
                                <p className="mb-3">
                                    When you land at <strong>Phnom Penh Airport</strong> or <strong>Siem Reap Airport</strong>:
                                </p>
                                <ol className="space-y-2 text-sm">
                                    <li>1️⃣ Connect to the airport WiFi</li>
                                    <li>2️⃣ Open PassApp</li>
                                    <li>3️⃣ Book a ride to your hotel</li>
                                    <li>4️⃣ Save money compared to airport taxis!</li>
                                </ol>
                            </div>
                        </div>

                        {/* Why Use PassApp */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Use PassApp?</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-green-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-green-900 mb-2">✅ Cheaper</h3>
                                    <p className="text-green-800 text-sm">More affordable than negotiating with street taxis</p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-blue-900 mb-2">✅ No Haggling</h3>
                                    <p className="text-blue-800 text-sm">Price is shown upfront - no surprises</p>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-purple-900 mb-2">✅ Fast</h3>
                                    <p className="text-purple-800 text-sm">Drivers arrive in less than 2 minutes</p>
                                </div>
                                <div className="bg-orange-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-orange-900 mb-2">✅ Safe</h3>
                                    <p className="text-orange-800 text-sm">Track your ride live, see driver info</p>
                                </div>
                            </div>
                        </div>

                        {/* Related Links */}
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-bold text-gray-900 mb-4">More Transportation Options</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <Link
                                    href="/passapp-cambodia"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-green-500 transition-colors"
                                >
                                    <h4 className="font-bold text-green-900 mb-1">PassApp Overview</h4>
                                    <p className="text-gray-700 text-sm">Pricing & vehicle types</p>
                                </Link>
                                <Link
                                    href="/grab-cambodia"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
                                >
                                    <h4 className="font-bold text-blue-900 mb-1">Grab Cambodia</h4>
                                    <p className="text-gray-700 text-sm">Alternative ride-hailing app</p>
                                </Link>
                                <Link
                                    href="/buying-motorbike"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-purple-500 transition-colors"
                                >
                                    <h4 className="font-bold text-purple-900 mb-1">Buy a Motorbike</h4>
                                    <p className="text-gray-700 text-sm">Long-term solution</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
