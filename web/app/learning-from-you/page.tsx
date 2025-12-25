import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Learning Exchange | They Want to Learn From You',
    description: 'How interacting with retirees helps locals learn English and culture.',
};

export default function LearningFromYouPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <h1 className="text-4xl font-extrabold mb-6">"They Want to Learn From You" 📚</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <blockquote className="text-xl italic text-gray-700 border-l-4 border-indigo-500 pl-4 mb-6">
                        "They want to learn from you if their English isn't very good... They want to talk to you. They want to understand you."
                    </blockquote>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">A Mutual Exchange</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        One of the most rewarding parts of retiring in Cambodia is the interaction with locals. It's not just a service transaction; it's an opportunity for connection.
                    </p>

                    <div className="grid gap-6">
                        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                            <h3 className="font-bold text-indigo-900 mb-2">Practicing English</h3>
                            <p className="text-indigo-800 text-sm">
                                Many young Cambodians serve in restaurants or drive tuk-tuks specifically to practice English with foreigners.
                                By simply chatting with them, you are helping them improve their skills and future job prospects.
                            </p>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-blue-900 mb-2">Cultural Curiosity</h3>
                            <p className="text-blue-800 text-sm">
                                "They want to learn as much as you want to learn about their culture."
                                It's a two-way street that makes retirees feel like welcome members of the community, not just visitors.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
