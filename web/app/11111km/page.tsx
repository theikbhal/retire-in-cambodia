import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: '11,111 km Journey | Tirupati to Siem Reap',
    description: 'A spiritual and cultural odyssey: Traveling from the Temple City of India (Tirupati) to the Temple City of Cambodia (Siem Reap).',
};

export default function ElevenThousandKmPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl">🕉️</span>
                    <span className="text-4xl">✈️</span>
                    <span className="text-4xl">🛕</span>
                </div>
                <h1 className="text-4xl font-extrabold mb-2">The 11,111 km Journey</h1>
                <h2 className="text-2xl font-semibold text-gray-600 mb-8">Tirupati 🇮🇳 ⇄ Siem Reap 🇰🇭</h2>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                        A bridge between two of the world's greatest temple cities:
                        <strong> Tirupati (Lord Venkateswara)</strong> and <strong>Angkor Wat (Lord Vishnu)</strong>.
                    </p>

                    <div className="space-y-8">
                        {/* The Plan */}
                        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                            <h3 className="font-bold text-indigo-900 mb-3 text-lg">The Plan: 4 Months to 1 Year</h3>
                            <p className="text-indigo-800 mb-4">
                                Dedicate 4 to 12 months living in the shadow of Angkor Wat, exploring the Hindu roots of the Khmer Empire, before returning home renewed.
                            </p>
                            <div className="grid grid-cols-2 gap-4 text-sm font-medium text-indigo-900">
                                <div className="bg-white/50 p-2 rounded">⏱️ Min Duration: 4 Months</div>
                                <div className="bg-white/50 p-2 rounded">📅 Max Duration: 1 Year (Renewable)</div>
                            </div>
                        </div>

                        {/* The Route */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">The Route 🗺️</h3>
                            <ol className="relative border-l border-gray-200 ml-3 space-y-6">
                                <li className="mb-4 ml-6">
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">1</span>
                                    <h4 className="font-bold text-gray-900">Start: Tirupati, India</h4>
                                    <p className="text-sm text-gray-600">Travel to Chennai International Airport (MAA) or Bengaluru (BLR).</p>
                                </li>
                                <li className="mb-4 ml-6">
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">2</span>
                                    <h4 className="font-bold text-gray-900">Fly to Bangkok (BKK/DMK)</h4>
                                    <p className="text-sm text-gray-600">Duration: ~4 hours. Cost: ₹12,000 - ₹20,000.</p>
                                </li>
                                <li className="mb-4 ml-6">
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">3</span>
                                    <h4 className="font-bold text-gray-900">Arrive: Siem Reap (SAI)</h4>
                                    <p className="text-sm text-gray-600">Short flight (1 hr) or Bus (8 hrs) from Bangkok.</p>
                                </li>
                                <li className="ml-6">
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">4</span>
                                    <h4 className="font-bold text-gray-900">Return</h4>
                                    <p className="text-sm text-gray-600">Retrace steps back to Tirupati after your stay.</p>
                                </li>
                            </ol>
                        </div>

                        {/* Total Trip Summary */}
                        <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                            <h3 className="font-bold text-green-900 mb-3 text-lg">Total Money & Time Needed</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-bold text-green-800 mb-1">💰 Total Money (1 Year)</h4>
                                    <p className="text-green-900 font-mono text-2xl">~₹8 Lakhs</p>
                                    <p className="text-green-700 text-xs">
                                        (₹62,500/mo Living x 12) + (₹50,000 Flights/Visas)
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-green-800 mb-1">⏱️ Travel Time</h4>
                                    <p className="text-green-900 font-mono text-2xl">~12 Hours</p>
                                    <p className="text-green-700 text-xs">
                                        Tirupati -> Chennai (3hr) -> Bangkok (4hr) -> Siem Reap (1hr) + Layovers
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* The Budget */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Estimated Budget (Per Month) 💰</h3>
                            <div className="overflow-hidden border border-gray-200 rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Item</th>
                                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Cost (USD)</th>
                                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Rupees (Approx)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white text-sm">
                                        <tr>
                                            <td className="px-4 py-2">Nice Apartment</td>
                                            <td className="px-4 py-2">$350</td>
                                            <td className="px-4 py-2">₹29,000</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2">Food & Drink</td>
                                            <td className="px-4 py-2">$300</td>
                                            <td className="px-4 py-2">₹25,000</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2">Visa & Misc</td>
                                            <td className="px-4 py-2">$100</td>
                                            <td className="px-4 py-2">₹8,500</td>
                                        </tr>
                                        <tr className="bg-green-50 font-bold">
                                            <td className="px-4 py-2">Total</td>
                                            <td className="px-4 py-2">$750</td>
                                            <td className="px-4 py-2">₹62,500</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">*Excluding flight tickets.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
