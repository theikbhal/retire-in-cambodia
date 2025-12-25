import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Don\'t Take It Seriously | The Local Mindset',
    description: 'Learning to lighten up. Why taking things too seriously is the quickest way to be unhappy in Cambodia.',
};

export default function DontWorryPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-pink-100 text-pink-800 text-sm font-semibold mb-4">
                    Attitude
                </span>
                <h1 className="text-4xl font-extrabold mb-6">Don't Take It Seriously 🤪</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                        "You can't take life too seriously here. If you do, you'll go mad."
                    </p>

                    <div className="space-y-6">
                        <div className="bg-pink-50 p-6 rounded-xl border border-pink-100">
                            <h2 className="text-xl font-bold text-pink-900 mb-2">Laugh It Off</h2>
                            <p className="text-pink-800 leading-relaxed">
                                Did the waiter bring you chicken instead of beef? Did the tuk-tuk driver get lost?
                                <br /><br />
                                <strong>Laugh.</strong> It's a funny story for later. Getting angry serves absolutely no purpose here. The Cambodian approach is to smile at mistakes, not punish them.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">The "Ah, Well" Philosophy</h2>
                            <p className="text-gray-700">
                                There is a prevailing sense of acceptence. It rains? Ah, well. Power cut? Ah, well.
                                Embracing this lightness of being is one of the healthiest things you can do for your blood pressure.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
