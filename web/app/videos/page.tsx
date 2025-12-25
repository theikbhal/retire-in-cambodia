import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Retire in Cambodia - Video Gallery',
    description: 'Watch real stories, city tours, and cost of living breakdowns for retiring in Siem Reap, Cambodia.',
};

// ---------------------------------------------------------
// JUST ADD YOUTUBE VIDEO IDs HERE
// ---------------------------------------------------------
const VIDEO_IDS = [
    'VmwAcpzm--M',
    // 'Another_ID_Here',
];
// ---------------------------------------------------------

export default function VideosPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            {/* Header */}
            <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 shadow-sm">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                        <div className="mb-4 sm:mb-0 text-center sm:text-left">
                            <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-800 text-xs font-semibold tracking-wide uppercase mb-2">
                                Video Gallery
                            </span>
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                                Life in Siem Reap 🎥
                            </h1>
                            <p className="mt-2 text-lg text-gray-600 max-w-2xl">
                                See what daily life looks like. From market tours to apartment hunting.
                            </p>
                        </div>
                        <Link
                            href="/"
                            className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
                        >
                            ← Back to Overview
                        </Link>
                    </div>
                </div>
            </section>

            {/* Video Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {VIDEO_IDS.map((id) => (
                        <div key={id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-200">
                            <div className="relative w-full aspect-video bg-gray-200">
                                <iframe
                                    src={`https://www.youtube.com/embed/${id}`}
                                    title="YouTube video player"
                                    className="absolute top-0 left-0 w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    ))}

                    {/* Placeholder for when there are few videos */}
                    {VIDEO_IDS.length < 3 && (
                        <div className="bg-gray-100/50 rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-8 text-center h-full min-h-[250px]">
                            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-3">
                                <span className="text-2xl">🎬</span>
                            </div>
                            <p className="text-gray-500 font-medium">More videos coming soon</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-blue-600 py-16 px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Want to see more details?
                </h2>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                    Get the full breakdown of costs, visa requirements, and neighborhood guides in our comprehensive written guide.
                </p>
                <Link
                    href="/#pricing"
                    className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition shadow-lg"
                >
                    View Full Retirement Guide
                </Link>
            </section>
        </main>
    );
}
