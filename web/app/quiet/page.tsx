import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Quiet Life in Siem Reap | Retire in Cambodia',
    description: 'Why retirees choose the quiet life of Siem Reap over the busy capital of Phnom Penh.',
};

export default function QuietPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <h1 className="text-4xl font-extrabold mb-6">A Quiet, Personal City 🍃</h1>

                <div className="prose prose-lg text-gray-700">
                    <p className="lead text-xl mb-8">
                        "Siem Reap is a lot quieter. It feels more personal here."
                    </p>

                    <div className="grid gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">Siem Reap vs. Phnom Penh</h3>
                            <p className="mb-4">
                                Phnom Penh is the capital—busy, rushed, and massive. Retirees like Dan & Alan found it "too busy" coming from London.
                            </p>
                            <p className="mb-4">
                                Siem Reap, by comparison, is laid back.
                                <span className="italic block mt-2 border-l-2 border-blue-400 pl-3">
                                    "There isn't such a rush here. It implies a slower pace of life where you don't have to worry."
                                </span>
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">The "Village" Feel</h3>
                            <p>
                                Despite being a city with international connection, it retains a small-town charm.
                                You can't get lost—literally. "We go out riding and get lost and we don't care because we'll find our way back," says Alan.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
