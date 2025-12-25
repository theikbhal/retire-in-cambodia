import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Flight Connectivity | Direct Flights from Cambodia',
    description: 'Flight times and connections from Cambodia to Thailand, Vietnam, Laos, Singapore, Indonesia, and Malaysia.',
};

export default function ConnectivityPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/center-of-asia" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Center of Asia
                </Link>
                <h1 className="text-4xl font-extrabold mb-8">Flight Connectivity ✈️</h1>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="p-4 font-bold text-gray-900">Destination</th>
                                <th className="p-4 font-bold text-gray-900">Flight Time</th>
                                <th className="p-4 font-bold text-gray-900">Frequency</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <Row country="Thailand" city="Bangkok (BKK)" time="1 hr" freq="Daily (Many flights)" />
                            <Row country="Vietnam" city="Ho Chi Minh (SGN)" time="1 hr" freq="Daily" />
                            <Row country="Laos" city="Vientiane / Luang Prabang" time="1.5 hrs" freq="Regular" />
                            <Row country="Singapore" city="Singapore (SIN)" time="2 hrs" freq="Daily" />
                            <Row country="Malaysia" city="Kuala Lumpur (KUL)" time="2 hrs" freq="Daily" />
                            <Row country="Indonesia" city="Jakarta / Bali" time="3-4 hrs" freq="Connecting (usually via KL/BKK)" />
                        </tbody>
                    </table>
                </div>

                <div className="mt-8 bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                    <h3 className="font-bold text-yellow-900 mb-2">Note on Airports</h3>
                    <p className="text-yellow-800 text-sm">
                        Siem Reap has a brand new international airport (SAI). Phnom Penh (PNH) acts as the major commercial hub. Both offer excellent connectivity to the region.
                    </p>
                </div>
            </div>
        </main>
    );
}

function Row({ country, city, time, freq }: { country: string, city: string, time: string, freq: string }) {
    return (
        <tr className="hover:bg-gray-50 transition-colors">
            <td className="p-4">
                <span className="font-bold text-gray-900 block">{country}</span>
                <span className="text-sm text-gray-500">{city}</span>
            </td>
            <td className="p-4 text-gray-700">{time}</td>
            <td className="p-4 text-gray-700">{freq}</td>
        </tr>
    );
}
