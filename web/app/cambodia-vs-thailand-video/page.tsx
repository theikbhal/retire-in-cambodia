import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Cambodia Beats Thailand? | Retirement Analysis',
    description: 'Analysis of why Cambodia beats Thailand for American retirees in some aspects, but why it might not be the "Best" for everyone yet.',
};

export default function CambodiaVsThailandVideoPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-800 text-sm font-semibold mb-4">
                    Expert Analysis
                </span>
                <h1 className="text-3xl font-extrabold mb-6">Cambodia Beats Thailand... But is it the Best? 🤔</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <p className="text-xl text-gray-700 leading-relaxed mb-8">
                        A detailed breakdown of why Cambodia is winning over Thailand for many American retirees (easier visas, lower costs), but highlighting the infrastructure gaps that might keep it from being #1 just yet.
                    </p>

                    <div className="aspect-w-16 aspect-h-9 mb-8 overflow-hidden rounded-xl shadow-lg border border-gray-200">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/bHo37rnWaJc"
                            title="Cambodia Beats Thailand for American Retirees"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full object-cover"
                        ></iframe>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <h2 className="text-xl font-bold text-gray-900 mb-2">Key Comparison Points</h2>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li><strong>Visas:</strong> Cambodia wins easily (no income requirements for renewal).</li>
                            <li><strong>Cost:</strong> Cambodia is generally cheaper for housing.</li>
                            <li><strong>Healthcare:</strong> Thailand still wins on medical infrastructure.</li>
                            <li><strong>Infrastructure:</strong> Thailand has better roads/malls, but Cambodia is catching up fast.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}
