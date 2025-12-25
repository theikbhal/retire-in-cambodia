import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Opening a Bank Account | For Retirees',
    description: 'How retirees from the UK, Australia, and US can open a local bank account in Cambodia.',
};

export default function OpenAccountPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-800 text-sm font-semibold mb-4">
                    Financial Guide
                </span>
                <h1 className="text-4xl font-extrabold mb-6">Opening a Bank Account 📝</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                        Opening a bank account as a foreigner is surprisingly easy compared to other Asian countries like Thailand. You generally do <strong>not</strong> need a work permit if you are on a Retirement Visa.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">What You Need</h2>
                    <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100 mb-6">
                        <ul className="list-decimal pl-5 space-y-3 text-lg text-gray-800 font-medium">
                            <li><strong>Passport:</strong> Must be valid for at least 6 months.</li>
                            <li><strong>Valid Visa:</strong> A 6-month or 12-month ER (Retirement) or EB (Business) Visa.</li>
                            <li><strong>Rental Agreement:</strong> A lease agreement (housing contract) to prove your local address.</li>
                            <li><strong>Deposit:</strong> Usually $10 - $50 min initial deposit.</li>
                        </ul>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">The Process</h2>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-700 leading-relaxed">
                        <li>Walk into an ABA Bank branch (Central Market or Pub Street branches are good).</li>
                        <li>Take a ticket for "New Account".</li>
                        <li>Present your documents.</li>
                        <li>Download the app and get setup instantly.</li>
                        <li><strong>Card:</strong> You usually get your Visa/Mastercard debit card immediately or within 3-5 days.</li>
                    </ol>
                </div>
            </div>
        </main>
    );
}
