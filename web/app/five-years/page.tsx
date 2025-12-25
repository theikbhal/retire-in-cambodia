import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Can You Live Here for 5 Years? | Long Term Living',
    description: 'Retirees discuss if they see themselves staying in Cambodia for the next 5 years. Stability and travel connections.',
};

export default function FiveYearsPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <h1 className="text-4xl font-extrabold mb-6">Can You Live Here for 5 Years? 🗓️</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <div className="text-center mb-8">
                        <span className="text-5xl font-bold text-green-600 block mb-2">"Definitely."</span>
                        <span className="text-xl text-gray-500">
                            "Definitely, 100%. Unless something tragically goes wrong, we'll be staying here."
                        </span>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                            <h2 className="text-xl font-bold text-indigo-900 mb-3">The "Heart of Asia" Strategy</h2>
                            <p className="text-indigo-800 leading-relaxed mb-4">
                                One major reason for staying long-term is Cambodia's central location. It serves as the perfect base camp for exploring the rest of Asia.
                            </p>
                            <ul className="grid grid-cols-2 gap-2 text-sm text-indigo-700 font-medium">
                                <li>✈️ 1hr to Bangkok (Thailand)</li>
                                <li>✈️ 1hr to Ho Chi Minh (Vietnam)</li>
                                <li>✈️ Direct to Singapore</li>
                                <li>✈️ Direct to Kuala Lumpur</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-gray-200">
                            <h2 className="text-xl font-bold text-gray-900 mb-2">Stability</h2>
                            <p className="text-gray-600">
                                Contrary to the belief that it's "wild" or "unstable", retirees find it remarkably stable.
                                The ER Visa is renewable indefinitely, meaning you don't live visa-run to visa-run. You can actually settle down.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
