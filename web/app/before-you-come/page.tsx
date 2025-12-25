import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'What You Must Know Before Coming | Essential Advice',
    description: 'The single most important piece of advice for newcomers to Cambodia: Respect.',
};

export default function BeforeYouComePage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-800 text-sm font-semibold mb-4">
                    Essential Reading
                </span>
                <h1 className="text-4xl font-extrabold mb-6">Before You Come 🛑</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">

                    <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                        <h2 className="text-2xl font-bold text-red-900 mb-3">#1 Rule: Respect</h2>
                        <blockquote className="text-xl italic text-red-800">
                            "The most important thing that you should do if you come to Cambodia is have respect for the people that live here. You're never going to change Cambodian people. And I wouldn't dream that anyone should."
                        </blockquote>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-gray-900">Key Takeaways</h3>

                        <div>
                            <h4 className="font-bold text-gray-800">Don't try to "fix" it</h4>
                            <p className="text-gray-600">
                                Things work differently here. Sometimes slower, sometimes more chaotic. Adapt to the country; don't expect the country to adapt to you.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold text-gray-800">Enjoy the Culture</h4>
                            <p className="text-gray-600">
                                "Come to the country, enjoy the culture, enjoy the people." Treat it as a privilege to live here, not a right to impose Western standards.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold text-gray-800">Go with the Flow</h4>
                            <p className="text-gray-600">
                                If a bus is late, getting angry "won't make the bus go any faster." The biggest lesson learned is to stop stressing and adjust your plans.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
