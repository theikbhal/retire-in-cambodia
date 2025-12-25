import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Expat Community in Siem Reap | Social Life',
    description: 'Meeting people in Siem Reap. The friendly expat community, meetups, and social events.',
};

export default function ExpatPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <h1 className="text-4xl font-extrabold mb-6">The Expat Community 🌍</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                        "You get that bit of tourism, but you also get the expat community. So you're getting a bit of both. And it works. It gels very well together."
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">It's Easy to Make Friends</h2>
                    <p className="text-gray-600 mb-6">
                        Because Siem Reap is smaller than Phnom Penh, the community is tight-knit yet welcoming. It's not a lonely city. If you go to the same cafe twice, people will start to know your name.
                    </p>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                            <h3 className="font-bold text-purple-900 mb-1">Meetups</h3>
                            <p className="text-sm text-purple-800">
                                Regular social events, quiz nights, and charity runs happen weekly.
                            </p>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                            <h3 className="font-bold text-indigo-900 mb-1">Diverse Mix</h3>
                            <p className="text-sm text-indigo-800">
                                Retirees, NGO workers, teachers, and digital nomads all mix together.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
