import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Recommended YouTube Channels | Siem Reap Vloggers',
    description: 'A list of diverse YouTube channels about living in Siem Reap. Real stories, cost of living updates, and city tours.',
};

export default function ChannelsPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-800 text-sm font-semibold mb-4">
                    Watch & Learn
                </span>
                <h1 className="text-4xl font-extrabold mb-8">Siem Reap YouTube Channels 📺</h1>

                <div className="space-y-6">
                    {/* Channel 1 */}
                    <a href="https://www.youtube.com/@TomTripsOut" target="_blank" rel="noopener noreferrer" className="block group">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 group-hover:shadow-md transition-all flex items-center gap-6">
                            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                                T
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 flex items-center gap-2">
                                    Tom Trips Out
                                    <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full font-normal">Highly Recommended</span>
                                </h2>
                                <p className="text-gray-600 mt-2">
                                    Authentic experiences, hidden gems, and real-life tips from Siem Reap and beyond.
                                    Great for seeing the "real" side of living here.
                                </p>
                            </div>
                            <div className="ml-auto text-gray-300 group-hover:text-red-500">
                                →
                            </div>
                        </div>
                    </a>

                    <div className="bg-gray-100 p-6 rounded-xl border border-gray-200 text-center">
                        <h3 className="font-bold text-gray-700 mb-2">More Channels Coming Soon</h3>
                        <p className="text-gray-500 text-sm">
                            We are constantly curating the best vloggers who provide accurate, up-to-date information on retiring in Cambodia.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
