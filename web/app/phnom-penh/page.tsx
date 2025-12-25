import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Phnom Penh | The Capital City Guide',
    description: 'Guide to Phnom Penh for retirees. Why some choose it and why some avoid it.',
};

export default function PhnomPenhPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-800 text-sm font-semibold">
                        Capital City
                    </span>
                </div>
                <h1 className="text-4xl font-extrabold mb-6">Phnom Penh 🏙️</h1>

                <div className="mb-8">
                    <p className="text-xl text-gray-600 leading-relaxed">
                        The bustling, chaotic, and historic capital of Cambodia. While Siem Reap is the quiet village, Phnom Penh is the big city.
                    </p>
                </div>

                <div className="space-y-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-900 mb-3">Is it for Retirees?</h2>
                        <p className="text-gray-700 mb-4">
                            "We know capital cities can be very busy... Phnom Penh is extremely busy."
                        </p>
                        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 text-sm text-yellow-800">
                            <strong>Verdict:</strong> Many retirees prefer Siem Reap for the quiet life, but use Phnom Penh as an entry point or for specialised shopping/medical needs.
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-900 mb-3">Things to Do</h2>
                        <ul className="space-y-3">
                            <li className="flex gap-2">
                                <span>🏛️</span>
                                <span><strong>Killing Fields & S21 Museum:</strong> Harrowing but essential history.</span>
                            </li>
                            <li className="flex gap-2">
                                <span>🛍️</span>
                                <span><strong>Central Market & Russian Market:</strong> Huge markets for everything from car parts to clothes. (Watch out for food hygiene in some sections).</span>
                            </li>
                            <li className="flex gap-2">
                                <span>🌊</span>
                                <span><strong>Sisowath Quay:</strong> Beautiful riverside walks where the Mekong and Tonle Sap rivers meet.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-900 mb-3">Comparison to Siem Reap</h2>
                        <table className="w-full text-left text-sm">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="pb-2">Feature</th>
                                    <th className="pb-2 text-indigo-600">Phnom Penh</th>
                                    <th className="pb-2 text-green-600">Siem Reap</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr>
                                    <td className="py-2 text-gray-500">Pace</td>
                                    <td className="py-2 font-medium">Rushed, Busy</td>
                                    <td className="py-2 font-medium">Laid back, Quiet</td>
                                </tr>
                                <tr>
                                    <td className="py-2 text-gray-500">Traffic</td>
                                    <td className="py-2 font-medium">Heavy, Chaotic</td>
                                    <td className="py-2 font-medium">Manageable</td>
                                </tr>
                                <tr>
                                    <td className="py-2 text-gray-500">Community</td>
                                    <td className="py-2 font-medium">Big City Anonimity</td>
                                    <td className="py-2 font-medium">"Village" Feel</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}
