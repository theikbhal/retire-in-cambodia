import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Scooters & Bikes | Transport Guide',
    description: 'How to rent or buy a scooter in Siem Reap. Prices, safety, and rules.',
};

export default function ScooterPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl">🛵</span>
                    <h1 className="text-4xl font-extrabold">Scooters & Transport</h1>
                </div>

                <div className="space-y-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Renting a Scooter</h2>
                        <ul className="list-disc pl-5 space-y-3 text-gray-700">
                            <li><strong>Price:</strong> $50 - $70 per month (cheaper for long term).</li>
                            <li><strong>Deposit:</strong> Usually requires passport or cash deposit.</li>
                            <li><strong>Ease:</strong> Very easy. Rental shops are everywhere in town.</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Buying a Scooter</h2>
                        <p className="text-gray-700 mb-4">
                            If you stay long term, buying might make sense.
                        </p>
                        <ul className="list-disc pl-5 space-y-3 text-gray-700">
                            <li><strong>Used Automatic (Honda Click/Airblade):</strong> $500 - $900.</li>
                            <li><strong>New:</strong> $2000+.</li>
                            <li><strong>Resale:</strong> It is easy to sell it back when you leave.</li>
                        </ul>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                        <h3 className="font-bold text-orange-900 mb-2">⚠️ Safety & Police</h3>
                        <p className="text-sm text-orange-800">
                            Traffic flows differently here (fluid dynamics).
                            Always wear a helmet.
                            Technically you need a Cambodian Driver's License to be fully legal, though many ride without one. Police stops do happen—don't argue, pay the small fine (usually $2-$5) and move on.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
