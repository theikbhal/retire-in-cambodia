import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Hospitals & Healthcare | Coming Soon',
    description: 'Guide to medical facilities in Siem Reap.',
};

export default function HospitalsPage() {
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 font-sans text-center">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Healthcare Guide</h1>
                <p className="text-gray-500 mb-6">
                    We are currently verifying the contact details and insurance acceptance policies of local clinics.
                    <br /><br />
                    <span className="font-semibold text-gray-700">Coming Soon.</span>
                </p>
                <Link
                    href="/"
                    className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                >
                    Return Home
                </Link>
            </div>
        </main>
    );
}
