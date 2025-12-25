import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'My First Time in Cambodia | Video Diary',
    description: 'A look at the first moments in Cambodia, featuring video experiences of arrival.',
};

export default function FirstTimeVideoPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-800 text-sm font-semibold mb-4">
                    Video Diary
                </span>
                <h1 className="text-4xl font-extrabold mb-6">My First Time in Cambodia 🎞️</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <p className="text-xl text-gray-700 leading-relaxed mb-8">
                        Seeing Cambodia for the first time is a mix of chaos, heat, and wonder.
                        Watch this documented experience of arriving and exploring for the first time.
                    </p>

                    <div className="aspect-w-16 aspect-h-9 mb-8 overflow-hidden rounded-xl shadow-lg border border-gray-200">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/ZrXMSiDjUE4"
                            title="My First Time in Cambodia"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full object-cover"
                        ></iframe>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <h2 className="text-xl font-bold text-gray-900 mb-2">What to Expect</h2>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>The heat hitting you the moment you leave the airport.</li>
                            <li>The smiling faces of tuk-tuk drivers.</li>
                            <li>The incredible architecture of the temples.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}
