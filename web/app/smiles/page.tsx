import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Land of Smiles | Cambodian Hospitality',
    description: 'Comparing the "Land of Smiles" (Thailand) with the genuine warmth of Cambodia.',
};

export default function SmilesPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <h1 className="text-4xl font-extrabold mb-6">The Real Land of Smiles? 😊</h1>

                <div className="prose prose-lg text-gray-700 mb-8">
                    <blockquote className="border-l-4 border-yellow-400 pl-4 italic bg-white p-6 rounded-r-xl shadow-sm">
                        "Thai people, land of smiles, beautiful... But there's just something about the Cambodian people."
                    </blockquote>
                </div>

                <div className="space-y-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Genuine Warmth</h2>
                        <p className="text-gray-600 leading-relaxed">
                            While Thailand famously markets itself as the "Land of Smiles", many retirees find the smiles in Cambodia to be more <strong>genuine</strong> and less transactional.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Eager to Connect</h2>
                        <p className="text-gray-600 leading-relaxed">
                            "They want to talk to you. They want to understand you."
                            <br /><br />
                            Locals are often genuinely curious about your life and happy to practice English, creating a welcoming atmosphere that feels like home rather than just a tourist destination.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
