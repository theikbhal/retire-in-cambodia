import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Relaxed Lifestyle | Retire in Cambodia',
    description: 'Living a stress-free life in Cambodia. Go with the flow and enjoy the moment.',
};

export default function RelaxPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <h1 className="text-4xl font-extrabold mb-6">The Art of Relaxation 🧘</h1>

                <div className="bg-blue-50 p-8 rounded-2xl mb-8">
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">"It's just so stress-free."</h2>
                    <p className="text-lg text-blue-800 leading-relaxed">
                        "You don't have to worry about anything really. As long as you've got money in the bank and your health is okay, you've got no problems."
                    </p>
                </div>

                <div className="space-y-8">
                    <Section
                        title="The Biggest Lesson: Don't Get Stressed"
                        content="Things don't always go to plan in Southeast Asia. The biggest lesson learned from years of travel? 'Don't get stressed... go with the flow.' Getting angry won't make a bus arrive faster."
                    />

                    <Section
                        title="The Meaning of Life?"
                        content="It's about having fun and living your life. Don't take things too seriously. There is no point crying over silly little things."
                    />

                    <Section
                        title="Safety & Comfort"
                        content="Feeling safe is key to relaxing. 'Totally safe. Never felt unsafe once,' says Dan. Neighbors help each other—people are friendly and honest."
                    />
                </div>
            </div>
        </main>
    );
}

function Section({ title, content }: { title: string, content: string }) {
    return (
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600">{content}</p>
        </div>
    );
}
