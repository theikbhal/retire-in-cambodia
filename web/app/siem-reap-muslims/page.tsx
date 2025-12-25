import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Muslims in Siem Reap | 2,028 Cham Residents',
    description: 'Understanding the small but significant Muslim Cham community in Siem Reap province. Demographics, mosques, and Halal food.',
};

export default function SiemReapMuslimsPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-teal-100 text-teal-800 text-sm font-semibold mb-4">
                    Local Demographics
                </span>
                <h1 className="text-4xl font-extrabold mb-6">Muslims in Siem Reap Province 🕌</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-8">
                        <h2 className="text-xl font-bold text-blue-900 mb-3">The Numbers (2019 Census)</h2>
                        <p className="text-blue-800 leading-relaxed mb-4">
                            Siem Reap province has a small Muslim population, primarily ethnic <strong>Cham</strong>, estimated at about <strong>0.2%</strong> of the province's residents.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-lg">
                                <div className="text-sm text-blue-600 font-bold">Total Population</div>
                                <div className="text-2xl font-bold text-blue-900">1,014,234</div>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                                <div className="text-sm text-teal-600 font-bold">Muslim Population</div>
                                <div className="text-2xl font-bold text-teal-900">~2,028</div>
                                <div className="text-xs text-teal-700 mt-1">(0.2% of province)</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* Where They Live */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Where to Find the Community</h2>
                            <p className="text-gray-700 mb-4">
                                While small in number, the Cham community in Siem Reap is concentrated in specific areas:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                <li><strong>Psar Leu Area:</strong> The northern market district has a visible Muslim presence with small shops and eateries.</li>
                                <li><strong>Villages along National Road 6:</strong> Several Cham fishing villages exist along the road toward Phnom Penh.</li>
                                <li><strong>Near the Tonle Sap Lake:</strong> Traditional Cham communities live in floating villages and lakeside settlements.</li>
                            </ul>
                        </div>

                        {/* Mosques */}
                        <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-teal-500">
                            <h2 className="text-xl font-bold text-gray-900 mb-3">Mosques in Siem Reap</h2>
                            <p className="text-gray-700 mb-2">
                                There are a few small mosques serving the community:
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                                <li>Main mosque near <strong>Psar Leu</strong> (Northern Market)</li>
                                <li>Smaller prayer halls in the floating villages</li>
                            </ul>
                            <p className="text-gray-600 text-xs mt-3 italic">
                                Note: These are modest structures compared to the grand mosques in Phnom Penh.
                            </p>
                        </div>

                        {/* Halal Food */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Halal Food Options 🥘</h2>
                            <p className="text-gray-700 mb-4">
                                Despite the small Muslim population, Halal food is available due to the large number of Malaysian and Indonesian tourists visiting Angkor Wat.
                            </p>
                            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                                <h3 className="font-bold text-green-900 mb-2">Where to Eat</h3>
                                <ul className="list-disc pl-5 space-y-1 text-green-800 text-sm">
                                    <li><strong>Indian Restaurants:</strong> Many serve Halal meat (ask to confirm).</li>
                                    <li><strong>Malaysian/Indonesian Restaurants:</strong> Pub Street and Old Market areas have several options.</li>
                                    <li><strong>Local Cham Eateries:</strong> Small shops near Psar Leu serve traditional Cham dishes.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Visiting the Community */}
                        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                            <h2 className="text-xl font-bold text-yellow-900 mb-3">Visiting the Cham Community</h2>
                            <p className="text-yellow-800 text-sm">
                                If you're interested in connecting with the local Muslim community, consider:
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-1 text-yellow-900 text-sm">
                                <li>Visiting during <strong>Friday prayers</strong> (Jumu'ah) at the Psar Leu mosque</li>
                                <li>Taking a <strong>boat tour</strong> to the Tonle Sap floating villages where Cham families live</li>
                                <li>Shopping at Cham-owned businesses in the Psar Leu area</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
