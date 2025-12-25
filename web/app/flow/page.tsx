import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Go With The Flow | The Cambodian Mindset',
    description: 'How to embrace the "Go With The Flow" attitude in Cambodia. Letting go of efficiency and enjoying the moment.',
};

export default function FlowPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-teal-100 text-teal-800 text-sm font-semibold mb-4">
                    Mindset
                </span>
                <h1 className="text-4xl font-extrabold mb-6">Just Go With The Flow 🌊</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <blockquote className="text-xl italic text-gray-700 border-l-4 border-teal-500 pl-4 mb-6">
                        "Go with the flow. If you order something and it's wrong, don't worry about it. It's cost you $2. Eat it, enjoy it, try something different."
                    </blockquote>

                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Western Efficiency vs. Cambodian Calm</h2>
                            <p className="text-gray-700 leading-relaxed">
                                In the West, we are obsessed with things being "right" and "on time".
                                In Cambodia, things are " sabay" (happy/fun) and relaxed.
                            </p>
                        </div>

                        <div className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                            <h3 className="font-bold text-teal-900 mb-2">The Moment You Let Go</h3>
                            <p className="text-teal-800 text-sm">
                                The moment you stop expecting Western standards is the moment you start actually enjoying your retirement.
                                Did the power go out for 20 minutes? Go sit outside and look at the stars.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
