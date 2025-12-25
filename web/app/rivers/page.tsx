import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Rivers of Cambodia | The Mekong & Tonle Sap',
    description: 'Exploring the major rivers of Cambodia: The mighty Mekong, the reversing Tonle Sap, and the Bassac.',
};

export default function RiversPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-4">
                    Natural Wonders
                </span>
                <h1 className="text-4xl font-extrabold mb-6">Rivers of Cambodia 🌊</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                        Water is life in Cambodia. The country's history, agriculture, and transport are all tied to its river systems.
                    </p>

                    <div className="space-y-8">
                        {/* The Mekong */}
                        <div className="border-l-4 border-blue-500 pl-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">The Mekong River</h2>
                            <p className="text-gray-700">
                                Twelfth longest river in the world. It enters from Laos in the north and flows rapidly south to Vietnam.
                                It is the superhighway of the country.
                            </p>
                            <div className="mt-2 text-sm text-blue-800 font-medium">
                                📍 Best seen in: Phnom Penh (Riverside), Kratie (Dolphins), and Kampong Cham.
                            </div>
                        </div>

                        {/* The Tonle Sap River */}
                        <div className="border-l-4 border-teal-500 pl-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">The Tonle Sap River</h2>
                            <p className="text-gray-700">
                                The only river in the world that <strong>flows backwards</strong> seasonally.
                                During the monsoon (May-Oct), the sheer volume of the Mekong pushes water *up* the Tonle Sap river into the lake.
                                In dry season (Nov-April), it reverses and drains back into the Mekong.
                            </p>
                        </div>

                        {/* The Bassac River */}
                        <div className="border-l-4 border-indigo-500 pl-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">The Bassac River</h2>
                            <p className="text-gray-700">
                                A distributary of the Tonle Sap and Mekong. It starts in Phnom Penh and flows south into Vietnam. It is vital for trade and wet-rice cultivation.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-bold text-gray-900 mb-2">Must-Do Activity: Sunset Cruise</h3>
                            <p className="text-gray-600 text-sm">
                                In Phnom Penh, take a $5 sunset boat ride at the "Chaktomuk" (Four Faces)—the intersection where the Upper Mekong, Lower Mekong, Tonle Sap, and Bassac rivers meet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
