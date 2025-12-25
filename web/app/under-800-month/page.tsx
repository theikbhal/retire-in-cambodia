import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Living in Cambodia for Under $800/Month | Complete Budget Breakdown',
    description: 'Detailed breakdown: $564/month for 2 people (food, utilities, transport) + $200 rent = $764 total. Teaching jobs pay $1,100-$1,200/month.',
};

export default function Under800MonthPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-800 text-sm font-semibold mb-4">
                    Budget Guide
                </span>
                <h1 className="text-4xl font-extrabold mb-2">Live Comfortably for Under $800/Month 💰</h1>
                <h2 className="text-xl text-gray-600 mb-8">Complete Budget Breakdown for 2 People in Phnom Penh</h2>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <div className="aspect-w-16 aspect-h-9 mb-8 overflow-hidden rounded-xl shadow-lg border border-gray-200">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/LPSQOATnrVk"
                            title="Living in Cambodia for Under $800 a Month"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full object-cover"
                        ></iframe>
                    </div>

                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-8 rounded-xl text-white mb-8 text-center">
                        <div className="text-5xl mb-4">💵</div>
                        <h2 className="text-4xl font-bold mb-4">$764/Month</h2>
                        <p className="text-xl mb-2">
                            For 2 People - All Expenses Covered!
                        </p>
                        <p className="text-sm opacity-90">
                            Food, rent, utilities, transport, internet, everything
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Quick Summary */}
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h2 className="text-2xl font-bold text-blue-900 mb-4">Quick Summary</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-blue-900 mb-2">Living Expenses (2 people)</h3>
                                    <p className="text-3xl font-bold text-blue-600">$564/mo</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-blue-900 mb-2">Rent (nice condo)</h3>
                                    <p className="text-3xl font-bold text-blue-600">$200/mo</p>
                                </div>
                            </div>
                            <div className="bg-green-100 p-4 rounded-lg mt-4">
                                <p className="text-green-900 font-bold text-center text-xl">
                                    Total: $764/month for 2 people!
                                </p>
                            </div>
                        </div>

                        {/* Detailed Budget Breakdown */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">💰 Complete Budget Breakdown (2 People)</h2>

                            <div className="space-y-3">
                                <div className="bg-orange-50 p-4 rounded-xl border-l-4 border-orange-500">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="font-bold text-orange-900">🍜 Food</h3>
                                            <p className="text-orange-700 text-sm">$100/week, cooking at home</p>
                                        </div>
                                        <div className="text-2xl font-bold text-orange-600">$400/mo</div>
                                    </div>
                                </div>

                                <div className="bg-purple-50 p-4 rounded-xl border-l-4 border-purple-500">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="font-bold text-purple-900">🏠 Rent</h3>
                                            <p className="text-purple-700 text-sm">Nice condo with pool/gym options</p>
                                        </div>
                                        <div className="text-2xl font-bold text-purple-600">$200/mo</div>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="font-bold text-blue-900">⚡ Power & Water</h3>
                                            <p className="text-blue-700 text-sm">Showering, laundry, dishes, etc.</p>
                                        </div>
                                        <div className="text-2xl font-bold text-blue-600">$55/mo</div>
                                    </div>
                                </div>

                                <div className="bg-green-50 p-4 rounded-xl border-l-4 border-green-500">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="font-bold text-green-900">☕ Coffee (1/day)</h3>
                                            <p className="text-green-700 text-sm">$1.50 latte from local shop</p>
                                        </div>
                                        <div className="text-2xl font-bold text-green-600">$45/mo</div>
                                    </div>
                                </div>

                                <div className="bg-cyan-50 p-4 rounded-xl border-l-4 border-cyan-500">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="font-bold text-cyan-900">📶 Internet</h3>
                                            <p className="text-cyan-700 text-sm">Fast, reliable (work from home quality)</p>
                                        </div>
                                        <div className="text-2xl font-bold text-cyan-600">$18/mo</div>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 p-4 rounded-xl border-l-4 border-yellow-500">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="font-bold text-yellow-900">🔥 Cooking Gas</h3>
                                            <p className="text-yellow-700 text-sm">12kg bottle lasts 4 months</p>
                                        </div>
                                        <div className="text-2xl font-bold text-yellow-600">$16/mo</div>
                                    </div>
                                </div>

                                <div className="bg-pink-50 p-4 rounded-xl border-l-4 border-pink-500">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="font-bold text-pink-900">🛵 Motorbike Gas</h3>
                                            <p className="text-pink-700 text-sm">$3/week</p>
                                        </div>
                                        <div className="text-2xl font-bold text-pink-600">$12/mo</div>
                                    </div>
                                </div>

                                <div className="bg-indigo-50 p-4 rounded-xl border-l-4 border-indigo-500">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="font-bold text-indigo-900">📱 Mobile Phone Data</h3>
                                            <p className="text-indigo-700 text-sm">$1/week per phone (32GB/month each!)</p>
                                        </div>
                                        <div className="text-2xl font-bold text-indigo-600">$8/mo</div>
                                    </div>
                                </div>

                                <div className="bg-teal-50 p-4 rounded-xl border-l-4 border-teal-500">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="font-bold text-teal-900">🧴 Bathroom Items</h3>
                                            <p className="text-teal-700 text-sm">Shampoo, female products, etc.</p>
                                        </div>
                                        <div className="text-2xl font-bold text-teal-600">$7/mo</div>
                                    </div>
                                </div>

                                <div className="bg-red-50 p-4 rounded-xl border-l-4 border-red-500">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="font-bold text-red-900">💧 Drinking Water</h3>
                                            <p className="text-red-700 text-sm">20L bottles, $1.25 each</p>
                                        </div>
                                        <div className="text-2xl font-bold text-red-600">$5/mo</div>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-gray-500">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="font-bold text-gray-900">💈 Haircut</h3>
                                            <p className="text-gray-700 text-sm">Monthly</p>
                                        </div>
                                        <div className="text-2xl font-bold text-gray-600">$3/mo</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 rounded-xl text-white mt-6">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-2xl font-bold">TOTAL (2 People)</h3>
                                    <div className="text-4xl font-bold">$764/mo</div>
                                </div>
                            </div>
                        </div>

                        {/* Food Prices */}
                        <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                            <h2 className="text-2xl font-bold text-orange-900 mb-4">🛒 Food Prices (Buying in Bulk)</h2>
                            <p className="text-orange-800 mb-4">
                                They buy from wholesalers to keep costs down. Here's what they pay:
                            </p>
                            <div className="grid md:grid-cols-2 gap-3">
                                <div className="bg-white p-3 rounded-lg">
                                    <div className="flex justify-between">
                                        <span className="text-orange-800">🍚 Rice (25kg bag)</span>
                                        <span className="font-bold text-orange-600">$24</span>
                                    </div>
                                </div>
                                <div className="bg-white p-3 rounded-lg">
                                    <div className="flex justify-between">
                                        <span className="text-orange-800">🍗 Chicken (boneless)</span>
                                        <span className="font-bold text-orange-600">$5/kg</span>
                                    </div>
                                </div>
                                <div className="bg-white p-3 rounded-lg">
                                    <div className="flex justify-between">
                                        <span className="text-orange-800">🍗 Chicken (with bones)</span>
                                        <span className="font-bold text-orange-600">$3.50/kg</span>
                                    </div>
                                </div>
                                <div className="bg-white p-3 rounded-lg">
                                    <div className="flex justify-between">
                                        <span className="text-orange-800">🥩 Beef</span>
                                        <span className="font-bold text-orange-600">$8/kg</span>
                                    </div>
                                </div>
                                <div className="bg-white p-3 rounded-lg">
                                    <div className="flex justify-between">
                                        <span className="text-orange-800">🥓 Pork</span>
                                        <span className="font-bold text-orange-600">$8/kg</span>
                                    </div>
                                </div>
                                <div className="bg-white p-3 rounded-lg">
                                    <div className="flex justify-between">
                                        <span className="text-orange-800">🦐 King Prawns</span>
                                        <span className="font-bold text-orange-600">$8/kg</span>
                                    </div>
                                </div>
                                <div className="bg-white p-3 rounded-lg">
                                    <div className="flex justify-between">
                                        <span className="text-orange-800">🥕 Vegetables</span>
                                        <span className="font-bold text-orange-600">$1-3/kg</span>
                                    </div>
                                </div>
                                <div className="bg-white p-3 rounded-lg">
                                    <div className="flex justify-between">
                                        <span className="text-orange-800">🍜 Fresh Noodles</span>
                                        <span className="font-bold text-orange-600">~$1/kg</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Rent Options */}
                        <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                            <h2 className="text-2xl font-bold text-purple-900 mb-4">🏠 Rent Options in Phnom Penh</h2>
                            <div className="space-y-3">
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-purple-900 mb-2">Budget Range</h3>
                                    <p className="text-purple-800 text-sm mb-2">
                                        Rent varies from <strong>$50/month to $15,000/month</strong> depending on what you want.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-purple-900 mb-2">Average Nice Condo: $150-$200/month</h3>
                                    <p className="text-purple-800 text-sm mb-2">
                                        Hundreds available on Facebook Marketplace. Many include:
                                    </p>
                                    <ul className="space-y-1 text-purple-700 text-sm ml-4">
                                        <li>✅ Swimming pool</li>
                                        <li>✅ Gym</li>
                                        <li>✅ Good areas (Toul Tom Poung/TTP, Toul Kork/TK, Sensok)</li>
                                        <li>✅ Areas foreigners like to live</li>
                                    </ul>
                                </div>
                                <div className="bg-purple-100 p-4 rounded-lg">
                                    <h3 className="font-bold text-purple-900 mb-2">💡 Better Idea: Buy!</h3>
                                    <p className="text-purple-800 text-sm mb-2">
                                        <strong>Seven Residences (Sensok):</strong>
                                    </p>
                                    <ul className="space-y-1 text-purple-700 text-sm ml-4">
                                        <li>✅ <strong>No deposit!</strong></li>
                                        <li>✅ $250/month repayments</li>
                                        <li>✅ Pool, gym, shops</li>
                                        <li>✅ Close to Aeon 2 & Makro supermarket</li>
                                        <li>✅ 35 minutes from city center</li>
                                    </ul>
                                    <p className="text-purple-900 font-bold mt-2 text-sm">
                                        Cambodia wants people to invest here!
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Teaching Jobs */}
                        <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                            <h2 className="text-2xl font-bold text-green-900 mb-4">👨‍🏫 Teaching Jobs (No Degree Required!)</h2>
                            <div className="bg-white p-4 rounded-lg mb-4">
                                <p className="text-green-800 mb-3">
                                    <strong>"They are screaming for native English speakers!"</strong>
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <h3 className="font-bold text-green-900 mb-2">💰 Salary (No Degree)</h3>
                                        <p className="text-3xl font-bold text-green-600 mb-2">$1,100-$1,200/mo</p>
                                        <p className="text-green-700 text-sm">
                                            Teaching at international schools
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-green-900 mb-2">💵 Savings Potential</h3>
                                        <p className="text-3xl font-bold text-green-600 mb-2">$300-$400/mo</p>
                                        <p className="text-green-700 text-sm">
                                            After all expenses for 2 people!
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-100 p-4 rounded-lg">
                                <h3 className="font-bold text-green-900 mb-2">What Schools Should Provide:</h3>
                                <ul className="space-y-1 text-green-800 text-sm">
                                    <li>✅ Work permit (paid by school)</li>
                                    <li>✅ Free medical card</li>
                                    <li>✅ Pension fund contributions</li>
                                    <li>✅ Some even reimburse visa costs</li>
                                </ul>
                                <p className="text-green-900 font-bold mt-3 text-sm">
                                    ⚠️ If they don't offer these, don't take the job - plenty of schools will!
                                </p>
                            </div>

                            <div className="bg-yellow-100 p-4 rounded-lg mt-4">
                                <p className="text-yellow-900 font-bold mb-2">With a Degree?</p>
                                <p className="text-yellow-800 text-sm">
                                    "The world's your oyster in Cambodia!" Even higher salaries and better benefits.
                                </p>
                            </div>
                        </div>

                        {/* Other Jobs */}
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h2 className="text-2xl font-bold text-blue-900 mb-4">💼 Other Job Options</h2>
                            <p className="text-blue-800 mb-3">
                                You don't have to be a teacher! Other industries hiring:
                            </p>
                            <div className="grid md:grid-cols-3 gap-3">
                                <div className="bg-white p-3 rounded-lg text-center">
                                    <div className="text-2xl mb-1">🏖️</div>
                                    <p className="font-bold text-blue-900 text-sm">Tourism</p>
                                </div>
                                <div className="bg-white p-3 rounded-lg text-center">
                                    <div className="text-2xl mb-1">💻</div>
                                    <p className="font-bold text-blue-900 text-sm">IT</p>
                                </div>
                                <div className="bg-white p-3 rounded-lg text-center">
                                    <div className="text-2xl mb-1">🏦</div>
                                    <p className="font-bold text-blue-900 text-sm">Banking</p>
                                </div>
                                <div className="bg-white p-3 rounded-lg text-center">
                                    <div className="text-2xl mb-1">⛏️</div>
                                    <p className="font-bold text-blue-900 text-sm">Mining</p>
                                </div>
                                <div className="bg-white p-3 rounded-lg text-center">
                                    <div className="text-2xl mb-1">🍺</div>
                                    <p className="font-bold text-blue-900 text-sm">Hospitality</p>
                                </div>
                                <div className="bg-white p-3 rounded-lg text-center">
                                    <div className="text-2xl mb-1">🏢</div>
                                    <p className="font-bold text-blue-900 text-sm">Business</p>
                                </div>
                            </div>
                        </div>

                        {/* Bonus Perks */}
                        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                            <h2 className="text-2xl font-bold text-yellow-900 mb-4">🎉 Bonus Perks of Living in Cambodia</h2>
                            <div className="space-y-3">
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-yellow-900 mb-2">🗓️ 26 Public Holidays/Year!</h3>
                                    <p className="text-yellow-800 text-sm">
                                        That's more than 2 per month! Way more than Western countries.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-yellow-900 mb-2">✈️ Close to Everything</h3>
                                    <p className="text-yellow-800 text-sm">
                                        Quick weekend trips to Thailand, Vietnam, Singapore, Malaysia - all nearby!
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <h3 className="font-bold text-yellow-900 mb-2">🍺 Cheap Entertainment</h3>
                                    <p className="text-yellow-800 text-sm">
                                        Beer: $0.50-$1.00 per can. Eating out is incredibly affordable.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Condo Owner Extras */}
                        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                            <h2 className="text-2xl font-bold text-indigo-900 mb-4">🏢 If You Own a Condo (Extra Costs)</h2>
                            <p className="text-indigo-800 mb-3 text-sm">
                                The couple in the video owns their condo, so they have these additional costs (renters don't):
                            </p>
                            <div className="space-y-2">
                                <div className="bg-white p-3 rounded-lg flex justify-between">
                                    <span className="text-indigo-800 text-sm">🔥 Fire Insurance</span>
                                    <span className="font-bold text-indigo-600">$5/mo</span>
                                </div>
                                <div className="bg-white p-3 rounded-lg flex justify-between">
                                    <span className="text-indigo-800 text-sm">🏢 Management Fee</span>
                                    <span className="font-bold text-indigo-600">$30/mo</span>
                                </div>
                                <div className="bg-white p-3 rounded-lg flex justify-between">
                                    <span className="text-indigo-800 text-sm">🅿️ Parking</span>
                                    <span className="font-bold text-indigo-600">$5/mo</span>
                                </div>
                                <div className="bg-white p-3 rounded-lg flex justify-between">
                                    <span className="text-indigo-800 text-sm">🏥 Health Insurance</span>
                                    <span className="font-bold text-indigo-600">$4/mo</span>
                                </div>
                                <div className="bg-white p-3 rounded-lg flex justify-between">
                                    <span className="text-indigo-800 text-sm">🛂 Visa (foreigner)</span>
                                    <span className="font-bold text-indigo-600">~$25/mo</span>
                                </div>
                                <div className="bg-white p-3 rounded-lg flex justify-between">
                                    <span className="text-indigo-800 text-sm">📺 VPN (for streaming)</span>
                                    <span className="font-bold text-indigo-600">$3/mo</span>
                                </div>
                            </div>
                        </div>

                        {/* Final Message */}
                        <div className="bg-gradient-to-r from-green-500 to-teal-500 p-8 rounded-xl text-white">
                            <h2 className="text-2xl font-bold mb-4">💬 Need Help Moving to Cambodia?</h2>
                            <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                                <p className="mb-3">
                                    The couple offers to help newcomers:
                                </p>
                                <ul className="space-y-2 text-sm">
                                    <li>✅ Show you around</li>
                                    <li>✅ Help find housing</li>
                                    <li>✅ Point you to job opportunities</li>
                                    <li>✅ Connect you with local contacts</li>
                                </ul>
                                <p className="mt-4 italic text-sm">
                                    "Cambodia is not what you all think it is. It's not dirt roads and shacks. Watch our videos to see the real Cambodia!"
                                </p>
                            </div>
                        </div>

                        {/* Related Links */}
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-bold text-gray-900 mb-4">More Budget Guides</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <Link
                                    href="/cost-of-living"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-green-500 transition-colors"
                                >
                                    <h4 className="font-bold text-green-900 mb-1">Cost of Living</h4>
                                    <p className="text-gray-700 text-sm">More budget breakdowns</p>
                                </Link>
                                <Link
                                    href="/couple-1500-month"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
                                >
                                    <h4 className="font-bold text-blue-900 mb-1">$1,500/Month Couple</h4>
                                    <p className="text-gray-700 text-sm">Another budget example</p>
                                </Link>
                                <Link
                                    href="/rent"
                                    className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-purple-500 transition-colors"
                                >
                                    <h4 className="font-bold text-purple-900 mb-1">Renting Guide</h4>
                                    <p className="text-gray-700 text-sm">Find apartments</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
