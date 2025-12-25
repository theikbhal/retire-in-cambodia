import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Living for Fun | The "Sabay" Culture',
    description: 'Whatever you do, make it fun. The Cambodian concept of "Sabay" and enjoying every day.',
};

export default function FunPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-800 text-sm font-semibold mb-4">
                    Lifestyle
                </span>
                <h1 className="text-4xl font-extrabold mb-6">Live Life Fun 🎉</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">The Concept of "Sabay"</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        In Khmer, <strong>"Sabay"</strong> means happy or fun. It is a core part of the culture.
                        If something isn't "sabay", why are you doing it?
                    </p>

                    <div className="grid gap-6">
                        <div className="border border-gray-200 p-6 rounded-xl">
                            <h3 className="font-bold text-lg text-gray-900 mb-2">Everyday Celebrations</h3>
                            <p className="text-gray-600">
                                You will see locals having picnics by the moat of Angkor Wat, singing karaoke at home, or just laughing in cafes.
                                Fun is not reserved for weekends; it's a daily requirement.
                            </p>
                        </div>

                        <div className="border border-gray-200 p-6 rounded-xl">
                            <h3 className="font-bold text-lg text-gray-900 mb-2">Retiree Social Life</h3>
                            <p className="text-gray-600">
                                Retirees embrace this too. "We have more fun here in a week than we had in a year back home."
                                From pool parties to quiz nights, the focus is on enjoyment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
