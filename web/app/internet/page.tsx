import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Internet & Mobile in Cambodia | Digital Nomad Guide',
    description: 'How to get SIM cards, fast WiFi, and work from cafes in Siem Reap.',
};

export default function InternetPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-4">
                    Stay Connected
                </span>
                <h1 className="text-4xl font-extrabold mb-6">Internet & Mobile 📶</h1>

                <div className="space-y-8">
                    {/* Section 1: Mobile SIMs */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">📱 Mobile Internet</h2>
                        <p className="text-gray-700 mb-4">
                            Data is incredibly cheap and fast (4G/LTE everywhere).
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                            <li><strong>Providers:</strong> Smart, Cellcard, Metfone.</li>
                            <li><strong>Cost:</strong> Approx. $1 per week for 10GB+ data.</li>
                            <li><strong>Where to buy:</strong> Any phone shop. Bring your passport.</li>
                        </ul>
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <h3 className="font-bold text-blue-900 mb-1">How to Recharge?</h3>
                            <p className="text-sm text-blue-800">
                                1. Buy a scratch card (available at every corner store).<br />
                                2. Dial the code on the card.<br />
                                3. Or use the provider's Mobile App (e.g., SmartNas app) to top up with a credit card.
                            </p>
                        </div>
                    </div>

                    {/* Section 2: Home Internet */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">🏠 Home WiFi</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Most rental apartments <strong>include WiFi</strong> in the rent.
                            If you need a dedicated fiber line, it costs about $20-$30/month for high speeds (30mbps+).
                        </p>
                    </div>

                    {/* Section 3: Cafe Internet */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">☕ Cafe Internet</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Siem Reap has a huge "Digital Nomad" culture. Almost every cafe has free, fast WiFi. You can sit with a $1.50 iced coffee and work for hours without anyone bothering you.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
