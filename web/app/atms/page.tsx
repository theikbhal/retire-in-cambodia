import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'ATMs in Siem Reap | Cash Withdrawal',
    description: 'How to use ATMs in Siem Reap. Fees, limits, and USD vs Riel.',
};

export default function AtmPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <h1 className="text-4xl font-extrabold mb-6">ATMs & Cash 🏧</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">USD vs Riel</h2>
                            <p className="text-gray-700 mb-2">
                                Cambodia uses two currencies. Most ATMs dispense <strong>US Dollars ($)</strong>.
                            </p>
                            <p className="text-gray-600 text-sm italic">
                                Note: Recently, there is a push to use more Riel. Some ATMs now allow you to choose.
                                Small change (under $1 or $5) is always given in Riel.
                            </p>
                        </div>

                        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                            <h2 className="text-xl font-bold text-red-900 mb-3">⚠️ Withdrawal Fees</h2>
                            <p className="text-red-800 mb-2">
                                <strong>International Cards:</strong> If you use your UK/Aus/US card, local ATMs charge a fee of <strong>$4 - $6 per transaction</strong>.
                            </p>
                            <p className="text-red-800 text-sm font-bold">
                                Tip: Open a local ABA account and transfer money in bulk (via Wise or SWIFT) to avoid paying $5 every time you need lunch money.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Availability</h2>
                            <p className="text-gray-700">
                                ATMs are everywhere in Siem Reap. Every bank branch, most larger hotels, and many supermarkets have them. You will never be far from one.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
