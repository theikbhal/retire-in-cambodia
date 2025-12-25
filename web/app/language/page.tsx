import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Khmer Language | Do You Need to Speak It?',
    description: 'Navigating the language barrier in Cambodia. English prevalence and easy phrases.',
};

export default function LanguagePage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <h1 className="text-4xl font-extrabold mb-6">Language Barrier? 🗣️</h1>

                <div className="prose prose-lg text-gray-700 mb-8">
                    <h3 className="font-bold text-gray-900">In the City (Siem Reap / Phnom Penh)</h3>
                    <p>
                        "Not really." In the service industry (hotels, restaurants, tuk-tuks), English is widely spoken. Locals are eager to learn and practice with you.
                    </p>

                    <h3 className="font-bold text-gray-900 mt-6">In the Countryside</h3>
                    <p>
                        It gets harder, but as Dan says, <em>"Pointing's good fun."</em> A smile and some hand gestures go a long way.
                    </p>
                </div>

                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 mb-8">
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">Useful Phrases</h2>
                    <div className="grid gap-2">
                        <Phrase khmer="Sour Sdei" english="Hello (Informal)" />
                        <Phrase khmer="Chum Reap Sour" english="Hello (Formal)" />
                        <Phrase khmer="Arkun" english="Thank You" />
                        <Phrase khmer="Arkun Charan" english="Thank You Very Much" />
                        <Phrase khmer="Som Toos" english="Sorry / Excuse Me" />
                        <Phrase khmer="Choul Mouy!" english="Cheers!" />
                    </div>
                </div>
            </div>
        </main>
    );
}

function Phrase({ khmer, english }: { khmer: string, english: string }) {
    return (
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
            <span className="text-lg font-bold text-blue-700">{khmer}</span>
            <span className="text-gray-600 font-medium">{english}</span>
        </div>
    );
}
