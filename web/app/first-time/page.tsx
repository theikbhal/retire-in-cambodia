import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'First Time in Siem Reap | Retire in Cambodia',
    description: 'A step-by-step guide for your first week in Siem Reap. What to do, where to eat, and how to settle in.',
};

export default function FirstTimePage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <h1 className="text-4xl font-extrabold mb-6">First Time Experience 🇰🇭</h1>
                <div className="space-y-8">
                    <Section
                        title="Day 1: Arrival & Settle In"
                        text="Take a verified taxi from SAI airport ($35 fixed). Check into your hotel. Don't worry about finding a long-term rental yet. Just relax and get used to the heat."
                    />
                    <Section
                        title="Get Connected"
                        text="Buy a Smart or Cellcard SIM at any corner store. $10 gets you unlimited data for a month. Download the 'PassApp' or 'Grab' app for taxis."
                    />
                    <Section
                        title="First Market Visit"
                        text="Visit 'Phsar Leu' for local prices or 'Angkor Market' for familiar western goods. Don't be afraid to haggle gently in traditional markets."
                    />
                </div>
            </div>
        </main>
    );
}

function Section({ title, text }: { title: string; text: string }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-3">{title}</h2>
            <p className="text-gray-600 leading-relaxed">{text}</p>
        </div>
    );
}
