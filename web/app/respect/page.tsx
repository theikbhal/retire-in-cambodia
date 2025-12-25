import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Respect the Locals | Cultural Etiquette',
    description: 'How to show respect to Cambodian people. Cultural do\'s and don\'ts for retirees.',
};

export default function RespectPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-800 text-sm font-semibold mb-4">
                    Cultural Guide
                </span>
                <h1 className="text-4xl font-extrabold mb-6">Respect the Local People 🙏</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">"You're never going to change them."</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Cambodia has a deep, ancient culture. As a retiree/expat, you are a guest. The biggest mistake Westerners make is trying to impose their way of doing things.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                            <h3 className="font-bold text-red-900 mb-2">The Golden Rule: Don't Lose Your Temper</h3>
                            <p className="text-red-800 text-sm">
                                In Cambodian culture, showing anger causes you to "lose face". Yelling at a waiter or tuk-tuk driver will not get you what you want; it will only make them shut down. Stay calm and smile.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="border border-gray-200 p-4 rounded-lg">
                                <span className="text-2xl block mb-2">👚</span>
                                <h4 className="font-bold text-gray-900">Dress Modestly</h4>
                                <p className="text-sm text-gray-600">Especially in temples or rural areas. Shoulders and knees should be covered.</p>
                            </div>
                            <div className="border border-gray-200 p-4 rounded-lg">
                                <span className="text-2xl block mb-2">🚫</span>
                                <h4 className="font-bold text-gray-900">Don't Touch Heads</h4>
                                <p className="text-sm text-gray-600">The head is considered the most sacred part of the body. Never touch a local's head (even children).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
