import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Renting in Siem Reap | Housing Guide',
    description: 'A guide to renting apartments and houses in Siem Reap. Prices, contracts, and finding a landlord.',
};

export default function RentPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-800 text-sm font-semibold mb-4">
                    Housing Guide
                </span>
                <h1 className="text-4xl font-extrabold mb-6">Renting in Siem Reap 🏠</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Expect</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        "It's all very reasonable. Basically, our entire budget for a month for two of us is less than what we paid just for our mortgage in the UK."
                    </p>

                    <div className="space-y-6">
                        <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                            <span className="font-medium text-gray-600">Studio Apartment (Modern)</span>
                            <span className="font-bold text-green-600">$250 - $350</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                            <span className="font-medium text-gray-600">1-Bedroom Apartment</span>
                            <span className="font-bold text-green-600">$350 - $450</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                            <span className="font-medium text-gray-600">2-Bedroom Villa/House</span>
                            <span className="font-bold text-green-600">$500 - $800</span>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                        <h3 className="font-bold text-blue-900 mb-2">Landlords</h3>
                        <p className="text-blue-800 text-sm">
                            Landlords are often very friendly and helpful. Dan mentions his landlady has "been looking after us really well ever since we've been here."
                        </p>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                        <h3 className="font-bold text-orange-900 mb-2">Contracts</h3>
                        <p className="text-orange-800 text-sm">
                            Most rentals require a 1-month deposit and the first month's rent upfront. Lease terms are flexible, often starting at 6 months.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
