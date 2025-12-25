import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Wat Phnom & Clock Tower | Phnom Penh Landmarks',
    description: 'Visiting the famous Wat Phnom temple and the Central Clock Tower in Phnom Penh.',
};

export default function ClockTowerPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/phnom-penh" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Phnom Penh Guide
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-800 text-sm font-semibold mb-4">
                    Capital Landmarks
                </span>
                <h1 className="text-4xl font-extrabold mb-6">Wat Phnom & Clock Tower 🕰️</h1>

                <div className="space-y-8">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Wat Phnom</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The "Hill Temple" (Wat Phnom) is the tallest religious structure in the city and legendary founding place of Phnom Penh.
                            It is a center of prayer and celebration, especially during Khmer New Year.
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                            <span className="mr-2">📍</span> Located on a 27-meter high man-made hill.
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Clock Tower</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            A central landmark near Wat Phnom. It marks the heart of the city's historical district.
                            "You can go to the clock tower in the heart of Phnom Penh... there's loads to do in Phnom Penh."
                        </p>
                        <div className="bg-indigo-50 p-4 rounded-lg text-sm text-indigo-800">
                            It serves as a great navigation point when exploring the riverside or heading towards the Post Office square.
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
