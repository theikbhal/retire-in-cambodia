import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Friendly People | The Warmest Welcome in Asia',
    description: 'Why Cambodian friendliness stands out even in Southeast Asia.',
};

export default function FriendlyPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-yellow-100 text-yellow-800 text-sm font-semibold mb-4">
                    Community & Culture
                </span>
                <h1 className="text-4xl font-extrabold mb-6">Unmatched Friendliness 🤝</h1>

                <div className="prose prose-lg text-gray-700 mb-8">
                    <p>
                        "Everybody is just very friendly. You smile at people, they smile back. It's really good."
                    </p>
                </div>

                <div className="space-y-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">More Than Just a Smile</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            In many tourist hubs, friendliness can feel like a sales tactic. In Cambodia, retirees report a deeper level of genuine warmth.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                            <li>Stunningly honest (returning lost items).</li>
                            <li>Helpful neighbors who look out for you.</li>
                            <li>A relaxed, non-pushy attitude in social interactions.</li>
                        </ul>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100 flex items-start">
                        <span className="text-3xl mr-4">💛</span>
                        <div>
                            <h3 className="font-bold text-yellow-900 mb-1">The "Vibe"</h3>
                            <p className="text-yellow-800 text-sm">
                                It creates a stress-free environment where you feel safe and supported. This social safety net is a huge reason why people stay for 5, 10, or 15 years.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
