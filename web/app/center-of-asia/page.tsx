import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Center of Asia | The Perfect Basecamp',
    description: 'Cambodia is located in the heart of Southeast Asia, making it the perfect base for travel.',
};

export default function CenterOfAsiaPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-4">
                    Strategic Location
                </span>
                <h1 className="text-4xl font-extrabold mb-6">The Center of Asia 🌏</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                        "From Cambodia, we are in the center of Asia. It takes one hour to go to everywhere."
                    </p>

                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                        <h2 className="text-xl font-bold text-blue-900 mb-2">The Basecamp Strategy</h2>
                        <p className="text-blue-800 text-sm mb-4">
                            Many retirees choose Cambodia not just for the country itself, but for its position. You can live cheaply here ($800/mo) and use your savings to travel to more expensive destinations for weekend trips.
                        </p>
                        <Link href="/connectivity" className="text-blue-600 font-bold hover:underline">
                            Check Flight Connectivity →
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
