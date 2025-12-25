import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Retire at 55 | Visa Rules & Requirements',
    description: 'How to retire in Cambodia at 55. Visa rules, requirements, and why it is one of the easiest places to retire.',
};

export default function Retire55Page() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-800 text-sm font-semibold mb-4">
                    Visa Guide
                </span>
                <h1 className="text-4xl font-extrabold mb-6">Retiring at 55 👴👵</h1>

                <div className="prose prose-lg text-gray-700 mb-8">
                    <blockquote className="border-l-4 border-purple-500 pl-4 italic bg-white p-4 rounded-r-lg shadow-sm">
                        "It's got to be one of the best places to retire at 55 years of age... The visa situation was so, so good and so easy."
                    </blockquote>
                </div>

                <div className="grid gap-6">
                    <Card
                        title="The 55+ Rule"
                        icon="🎂"
                        content="Once you reach the age of 55, you qualify for the ER (Retirement) Visa extension. Unlike other countries, there are minimal financial hoops to jump through."
                    />

                    <Card
                        title="Ease of Access"
                        icon="✈️"
                        content="'Thailand, you have to have so much in the bank. Here was just turn up and go.' It is widely considered one of the easiest retirement visas in Southeast Asia."
                    />

                    <Card
                        title="Stability"
                        icon="🏛️"
                        content="Despite misconceptions about it being 'wild' or 'unstructured', retirees find Cambodia very structured and stable. It's a country ready to welcome you."
                    />
                </div>

                <div className="mt-12 bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                    <h3 className="font-bold text-yellow-900 mb-2">Important Note on Health</h3>
                    <p className="text-yellow-800">
                        "As long as you've got money in the bank and your health is okay, you've got no problems."
                        <br />
                        <span className="text-sm mt-2 block">
                            *Note: For serious medical issues, retirees often travel to nearby Bangkok, as advanced care in Cambodia is still developing.
                        </span>
                    </p>
                </div>
            </div>
        </main>
    );
}

function Card({ title, content, icon }: { title: string, content: string, icon: string }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start">
            <div className="text-3xl mr-4">{icon}</div>
            <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{content}</p>
            </div>
        </div>
    );
}
