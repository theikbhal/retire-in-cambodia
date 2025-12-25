import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Banking in Siem Reap | ABA & ACLEDA',
    description: 'A guide to the major banks in Siem Reap. Why ABA Bank is the top choice for expats.',
};

export default function BankingPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl">🏦</span>
                    <h1 className="text-4xl font-extrabold">Banking in Siem Reap</h1>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">The Best Bank for Expats: ABA</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Almost every expat and retiree in Cambodia uses <strong>ABA Bank</strong>. Their mobile app is widely considered one of the best banking apps in the world (even better than Western banks).
                    </p>

                    <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-blue-900 mb-1">Why ABA?</h3>
                            <ul className="list-disc pl-5 text-sm text-blue-800 space-y-1">
                                <li><strong>QR Payments:</strong> You can pay for everything (coffee, tuk-tuks, groceries) by scanning a QR code. Cash is becoming less common.</li>
                                <li><strong>English Support:</strong> Staff speak excellent English.</li>
                                <li><strong>USD Accounts:</strong> You can hold your money in US Dollars.</li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-1">Other Options</h3>
                            <p className="text-sm text-gray-600">
                                <strong>ACLEDA</strong> and <strong>J Trust Royal</strong> are also reliable, but ABA dominates the daily payment market.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
