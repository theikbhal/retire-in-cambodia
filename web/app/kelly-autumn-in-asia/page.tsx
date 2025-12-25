import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Kelly Osowski - Autumn in Asia | Living in Siem Reap for $700/Month',
    description: 'Kelly Osowski shares his experience living in Siem Reap, Cambodia. $300 rent, $280 visa, and healthcare for $1,200 total.',
};

export default function KellyAutumnInAsiaPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-800 text-sm font-semibold mb-4">
                    Expat Interview
                </span>
                <h1 className="text-4xl font-extrabold mb-2">Kelly Osowski: Autumn in Asia 🎥</h1>
                <h2 className="text-xl text-gray-600 mb-8">Living in Siem Reap for Under $700/Month</h2>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <div className="aspect-w-16 aspect-h-9 mb-8 overflow-hidden rounded-xl shadow-lg border border-gray-200">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/Q07fFA1cNwM"
                            title="Kelly Osowski - Retire in Cambodia under $700"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full object-cover"
                        ></iframe>
                    </div>

                    <div className="space-y-8">
                        {/* Kelly's Background */}
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h2 className="text-2xl font-bold text-blue-900 mb-3">About Kelly</h2>
                            <ul className="space-y-2 text-blue-800">
                                <li>🎖️ <strong>Background:</strong> US Navy veteran (served in Southeast Asia in 1976)</li>
                                <li>📚 <strong>Education:</strong> Background in anthropology (loves immersive cultural studies)</li>
                                <li>🌏 <strong>Experience:</strong> 15-16 trips to Southeast Asia since 2015</li>
                                <li>📹 <strong>YouTube:</strong> "Autumn in Asia" channel documenting his life</li>
                                <li>🏠 <strong>Current Home:</strong> Siem Reap, Cambodia (135,000 population)</li>
                            </ul>
                        </div>

                        {/* Why Cambodia Over Thailand */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Why Cambodia Over Thailand?</h2>
                            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                                <p className="text-yellow-900 font-bold mb-2">"The immigration laws in Thailand will give you a headache. In Cambodia, it's so simple."</p>
                                <p className="text-yellow-800 text-sm">
                                    Kelly originally planned to stay in Thailand (Nonthaburi area near Bangkok) but found the visa process too complicated.
                                </p>
                            </div>
                        </div>

                        {/* Kelly's Apartment */}
                        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                            <h2 className="text-2xl font-bold text-emerald-900 mb-4">Kelly's 2-Bedroom Apartment</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-bold text-emerald-900 mb-2">Features</h3>
                                    <ul className="space-y-1 text-emerald-800 text-sm">
                                        <li>✅ 2 bedrooms</li>
                                        <li>✅ Rooftop terrace (4 flights up)</li>
                                        <li>✅ Garden & kids pool</li>
                                        <li>✅ Ceiling fans ("airplane propellers")</li>
                                        <li>✅ Air conditioning</li>
                                        <li>✅ Wet bathroom (Southeast Asian style)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-emerald-900 mb-2">Monthly Costs</h3>
                                    <ul className="space-y-2 text-emerald-800">
                                        <li className="flex justify-between border-b border-emerald-200 pb-1">
                                            <span>Rent:</span>
                                            <span className="font-bold">$300</span>
                                        </li>
                                        <li className="flex justify-between border-b border-emerald-200 pb-1">
                                            <span>Water:</span>
                                            <span className="font-bold">$2.50</span>
                                        </li>
                                        <li className="flex justify-between border-b border-emerald-200 pb-1">
                                            <span>Electricity:</span>
                                            <span className="font-bold">~$50</span>
                                        </li>
                                        <li className="flex justify-between border-b border-emerald-200 pb-1">
                                            <span>WiFi:</span>
                                            <span className="font-bold">Free</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="text-emerald-700 text-xs mt-4 italic">
                                *Note: Studio apartments available from $60/month. Nice 1-bedrooms with pool from $150-$200.
                            </p>
                        </div>

                        {/* Visa Process */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Visa Process (Super Simple!)</h2>
                            <div className="space-y-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-gray-900 mb-2">Step 1: E-Visa (Before Arrival)</h3>
                                    <p className="text-gray-700 text-sm">Apply online for electronic visa (not tourist visa). Cost: ~$35.</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-gray-900 mb-2">Step 2: 12-Month Extension (After Arrival)</h3>
                                    <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                                        <li>Go to any travel agency in Siem Reap</li>
                                        <li>Provide passport, address, thumbprint</li>
                                        <li>Cost: $280 + $10 agency fee</li>
                                        <li>Processing: 7-10 days</li>
                                        <li><strong>No paperwork, no background check, no health check, no bank check!</strong></li>
                                    </ul>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                                    <p className="text-green-900 font-bold">✅ Multiple Entry Visa</p>
                                    <p className="text-green-800 text-sm">You can leave and return to Cambodia as many times as you want during the 12 months.</p>
                                </div>
                            </div>
                        </div>

                        {/* Monthly Budget Breakdown */}
                        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                            <h2 className="text-2xl font-bold text-indigo-900 mb-4">Kelly's Monthly Budget</h2>
                            <div className="overflow-hidden border border-indigo-200 rounded-lg">
                                <table className="min-w-full divide-y divide-indigo-200">
                                    <thead className="bg-indigo-100">
                                        <tr>
                                            <th className="px-4 py-2 text-left text-xs font-medium text-indigo-700 uppercase">Category</th>
                                            <th className="px-4 py-2 text-left text-xs font-medium text-indigo-700 uppercase">Cost (USD)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-indigo-200 bg-white text-sm">
                                        <tr>
                                            <td className="px-4 py-2">Rent (2-bed apartment)</td>
                                            <td className="px-4 py-2 font-bold">$300</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2">Electricity</td>
                                            <td className="px-4 py-2 font-bold">$50</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2">Water</td>
                                            <td className="px-4 py-2 font-bold">$2.50</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2">Mobile SIM (60GB data)</td>
                                            <td className="px-4 py-2 font-bold">$6</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2">Groceries (cooking at home)</td>
                                            <td className="px-4 py-2 font-bold">$150-200</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2">Eating Out</td>
                                            <td className="px-4 py-2 font-bold">$70</td>
                                        </tr>
                                        <tr className="bg-indigo-50 font-bold">
                                            <td className="px-4 py-2">TOTAL</td>
                                            <td className="px-4 py-2">~$578-628</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Food Costs */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Food Costs</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-orange-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-orange-900 mb-2">🍜 Local Meals</h3>
                                    <ul className="space-y-1 text-orange-800 text-sm">
                                        <li>Bowl of noodles: $1.25-$1.50</li>
                                        <li>Lok Lak (beef dish): $2.50</li>
                                        <li>Rice (1 kg): $1</li>
                                        <li>Pork (1 kg): $2.75</li>
                                        <li>Shrimp (1 kg): $8</li>
                                    </ul>
                                </div>
                                <div className="bg-pink-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-pink-900 mb-2">🍺 Drinks</h3>
                                    <ul className="space-y-1 text-pink-800 text-sm">
                                        <li>Local beer (store): $0.63/can</li>
                                        <li>Beer at bar: $1.25/can</li>
                                        <li>Tap beer: $0.50-$0.60/glass</li>
                                        <li>Lunch + beer: ~$3 total</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Healthcare Story */}
                        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                            <h2 className="text-2xl font-bold text-red-900 mb-3">Healthcare: Kelly's Hospital Experience</h2>
                            <p className="text-red-800 mb-4">
                                Kelly spent <strong>3.5 days in the hospital</strong> with Crohn's disease complications, food poisoning, and intestinal blockage.
                            </p>
                            <div className="bg-white p-4 rounded-lg mb-4">
                                <h3 className="font-bold text-red-900 mb-2">What He Received:</h3>
                                <ul className="list-disc pl-5 text-red-800 text-sm space-y-1">
                                    <li>Private room ($30/night)</li>
                                    <li>IV drips and tech services ($15/day)</li>
                                    <li>Multiple ultrasounds</li>
                                    <li>CAT scan (different hospital)</li>
                                    <li>Ambulance transport (round trip)</li>
                                    <li>5 shots of morphine</li>
                                    <li>Medications and 2 cases of Ensure</li>
                                </ul>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                <p className="text-green-900 font-bold text-lg">Total Cost: $1,200</p>
                                <p className="text-green-800 text-sm">(Would be $25,000-$40,000 in the US)</p>
                            </div>
                            <p className="text-red-700 text-sm mt-4 italic">
                                "The quality of care and professionalism was better than I've ever experienced in my life. Doctors spoke English."
                            </p>
                        </div>

                        {/* Weather */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Weather & Climate</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-yellow-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-yellow-900 mb-2">🔥 Hot Season (April)</h3>
                                    <p className="text-yellow-800 text-sm">100-102°F (41-42°C). Kelly says April 2024 was the hottest he's experienced.</p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-xl">
                                    <h3 className="font-bold text-blue-900 mb-2">❄️ Cool Season (Dec-Jan)</h3>
                                    <p className="text-blue-800 text-sm">Highs: 85-86°F. Lows: 70-75°F. Very pleasant!</p>
                                </div>
                            </div>
                            <div className="bg-teal-50 p-4 rounded-xl mt-4">
                                <p className="text-teal-900 font-bold">💡 Kelly's Tip:</p>
                                <p className="text-teal-800 text-sm">Keep electrolytes up! Use Royal D packets (14 cents each) in water. Fans are enough most of the time.</p>
                            </div>
                        </div>

                        {/* Transportation */}
                        <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                            <h2 className="text-xl font-bold text-purple-900 mb-3">Transportation</h2>
                            <ul className="space-y-2 text-purple-800">
                                <li>🛵 <strong>Kelly's Motorbike:</strong> Honda Click 125 (used, 36k km) - $1,550</li>
                                <li>🚕 <strong>PassApp (like Uber):</strong> $2 for 3.5km ride</li>
                                <li>🛺 <strong>Tuk-Tuk:</strong> Max $3 anywhere in town</li>
                                <li>🚶 <strong>Walking:</strong> 5 mins to wet market, 4km to Western supermarkets</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
