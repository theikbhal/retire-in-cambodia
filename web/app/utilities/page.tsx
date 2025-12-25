import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Utilities in Cambodia | Electricity & Water',
    description: 'Guide to electricity costs, payment methods, and reliability in Siem Reap.',
};

export default function UtilitiesPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl">⚡</span>
                    <h1 className="text-4xl font-extrabold">Utilities</h1>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Electricity</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Electricity is one of the more expensive bills you will have. In rentals, you typically pay the landlord directly based on a meter reading.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                        <li><strong>Cost:</strong> Usually $0.20 - $0.25 per kWh.</li>
                        <li><strong>Bill Estimate:</strong> $50 - $100/mo depends heavily on Air Con usage.</li>
                        <li><strong>Reliability:</strong> Power cuts happen but are usually short.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Water</h2>
                    <p className="text-gray-700 leading-relaxed mb-2">
                        Water is very cheap, often just $2 - $5 per month.
                    </p>
                    <p className="text-red-600 text-sm font-bold">
                        ⚠️ Do not drink tap water. Always buy bottled water or use a filter.
                    </p>
                </div>
            </div>
        </main>
    );
}
