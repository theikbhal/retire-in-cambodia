import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Tuol Sleng (S21) Genius Museum | History',
    description: 'The harrowing history of the S-21 prison museum in Phnom Penh. Essential viewing for understanding Cambodia.',
};

export default function S21Page() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/phnom-penh" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Phnom Penh Guide
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-gray-200 text-gray-800 text-sm font-semibold mb-4">
                    Historical Site
                </span>
                <h1 className="text-4xl font-extrabold mb-6">Tuol Sleng (S-21) Museum ⛓️</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <blockquote className="text-xl italic text-gray-700 border-l-4 border-gray-500 pl-4 mb-6">
                        "We went to the S21 museum which was a converted school building... where they done a lot of torturing... very harrowing."
                    </blockquote>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">What is it?</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Originally a high school, this site was turned into Security Prison 21 (S-21) by the Khmer Rouge regime.
                        It is now a museum dedicated to preserving the memory of the victims.
                    </p>

                    <div className="bg-gray-100 p-6 rounded-xl">
                        <h3 className="font-bold text-gray-900 mb-2">Visitor Advice</h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li><strong>Audio Guide:</strong> Highly recommended. It guides you through the rooms with survivor stories.</li>
                            <li><strong>Respect:</strong> Dress modestly (shoulders/knees covered) and remain quiet.</li>
                            <li><strong>Timing:</strong> Allow 1.5 - 2 hours. It is emotionally heavy.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}
