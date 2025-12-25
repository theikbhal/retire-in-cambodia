import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Site Index | All Pages',
    description: 'A complete list of all pages and resources on the Retire in Cambodia website.',
};

// This list should be kept in sync with the homepage list
const ALL_PAGES = [
    { href: '/videos', label: '🎥 Video Gallery', description: 'Watch city tours and interviews' },
    { href: '/cost-of-living', label: '💸 Cost of Living', description: 'Real budget breakdown from UK retirees' },
    { href: '/five-hundred-dollar-budget', label: '📉 $500/Mo Budget', description: 'Is it actually possible?' },
    { href: '/rent', label: '🏠 Renting Guide', description: 'Apartment prices & landlord tips' },
    { href: '/what-we-like', label: '❤️ What We Like', description: 'Affordability, People, & Food' },
    { href: '/food', label: '🍜 Khmer Food', description: 'Fish Amok & Dining costs' },
    { href: '/coconut-milk', label: '🥥 The Secret Ingredient', description: '"If you add coconut milk..."' },
    { href: '/food-comparison', label: '🌶️ vs Thai & Indian', description: 'Less spice, more veg' },
    { href: '/message-to-cambodia', label: '💌 Message to Cambodia', description: 'Thank you for welcoming us' },
    { href: '/restaurants', label: '🍻 Eating & Drinking', description: 'Local spots vs Pub Street' },
    { href: '/favorites', label: '🏆 Favorite Dishes', description: 'Top rated food by expats' },
    { href: '/beef-lok-lak', label: '🥩 Beef Lok Lak', description: 'The famous pepper beef dish' },
    { href: '/fish-amok', label: '🐟 Fish Amok', description: 'The national curry dish' },
    { href: '/chef-story', label: '👨‍🍳 The London Chef', description: 'Dan\'s journey from UK to KH' },
    { href: '/before-you-come', label: '🛑 Before You Come', description: 'The #1 Rule: Respect' },
    { href: '/respect', label: '🙏 Respect Locals', description: 'Cultural do\'s and don\'ts' },
    { href: '/people', label: '🤝 The People', description: 'Why they are rated 10/10' },
    { href: '/muslim-cambodia', label: '🕌 Muslims in Cambodia', description: 'The Cham community & Halal food' },
    { href: '/muslim-community-stats', label: '📊 300,000 Muslims', description: 'Can you visit 1%?' },
    { href: '/siem-reap-muslims', label: '🕌 Muslims in Siem Reap', description: '2,028 Cham residents (0.2%)' },
    { href: '/friendly', label: '😊 Friendly Locals', description: 'Genuine warmth & smiles' },
    { href: '/learning-from-you', label: '📚 Learning Exchange', description: 'Helping locals practice English' },
    { href: '/smiles', label: '😊 Land of Smiles?', description: 'Cambodia vs Thailand' },
    { href: '/cambodia-vs-thailand-video', label: '🥊 Cambodia vs Thailand Video', description: 'Why it beats Thailand (mostly)' },
    { href: '/expat', label: '🌍 Expat Community', description: 'Making friends & social life' },
    { href: '/london-vs-siem-reap', label: '🇬🇧 vs 🇰🇭 Migration', description: 'Londoner Case Study' },
    { href: '/pros-cons', label: '⚖️ Pros & Cons', description: 'The good, the bad, and the ugly' },
    { href: '/weather', label: '☀️ Weather Guide', description: 'Handling the heat & 3 seasons' },
    { href: '/phnom-penh', label: '🏙️ Phnom Penh Guide', description: 'The bustling capital city' },
    { href: '/start-in-capital', label: '🛫 Travel Strategy', description: 'Why start in Phnom Penh?' },
    { href: '/places-to-visit', label: '🗺️ Places to Visit', description: 'Kampot, Kep, & Battambang' },
    { href: '/kampot', label: '🛶 Kampot Guide', description: 'Riverside chill & pepper' },
    { href: '/kep', label: '🦀 Kep Guide', description: 'Coastal crab market' },
    { href: '/s21-museum', label: '⛓️ S-21 Museum', description: 'Phnom Penh History' },
    { href: '/killing-fields', label: '🥀 The Killing Fields', description: 'Choeung Ek Memorial' },
    { href: '/clock-tower', label: '🕰️ Clock Tower', description: 'Wat Phnom & Landmarks' },
    { href: '/language', label: '🗣️ Language', description: 'Do you need to speak Khmer?' },
    { href: '/retire-55', label: '👴 Retire at 55', description: 'Visa rules & requirements made easy' },
    { href: '/five-years', label: '🗓️ 5 Year Plan', description: 'Is it a long-term home?' },
    { href: '/center-of-asia', label: '🌏 Center of Asia', description: 'The perfect travel base' },
    { href: '/11111km', label: '🕉️ 11,111 km Plan', description: 'Tirupati ⇄ Siem Reap Journey' },
    { href: '/geography', label: '🗺️ Geography', description: 'Mekong, Tonle Sap, & Mountains' },
    { href: '/rivers', label: '🌊 Rivers', description: 'Mekong, Tonle Sap, & Bassac' },
    { href: '/connectivity', label: '✈️ Flight Connectivity', description: '1hr to Bangkok, Vietnam, & more' },
    { href: '/flow', label: '🌊 Go With The Flow', description: 'Embracing the chaos' },
    { href: '/no-stress', label: '🧘 Adjust & Don\'t Stress', description: 'Handling delays & missed buses' },
    { href: '/dont-worry', label: '🤪 Don\'t Take It Seriously', description: 'Laughing at mistakes' },
    { href: '/fun', label: '🎉 Live Life Fun', description: 'The "Sabay" culture' },
    { href: '/living-life', label: '🌱 Actually Living Life', description: 'Existing vs Living' },
    { href: '/utilities', label: '⚡ Utilities', description: 'Electricity costs & Water' },
    { href: '/internet', label: '📶 Internet & Mobile', description: 'SIMs, WiFi, & Cafes' },
    { href: '/scooters', label: '🛵 Scooters', description: 'Rent vs Buy & Safety' },
    { href: '/peaceful', label: '🍃 A Peaceful Life', description: 'Escaping the rat race' },
    { href: '/quiet', label: '🤫 Quiet vs Busy', description: 'Why choose Siem Reap over Phnom Penh' },
    { href: '/relax', label: '🧘 The Relaxed Life', description: 'Stress-free living guide' },
    { href: '/first-time', label: '🆕 First Time Guide', description: 'Step-by-step arrival guide' },
    { href: '/first-time-video', label: '🎞️ My First Time Video', description: 'Watch the experience' },
    { href: '/expectations', label: '🤔 Expectation vs Reality', description: 'The honest truth about living here' },
    { href: '/hospitals', label: '🏥 Healthcare (Coming Soon)', description: 'Medical facilities guide' },
    { href: '/sitemap.xml', label: '🗺️ Sitemap.xml', description: 'Bot-friendly XML Sitemap' },
];

export default function SiteIndexPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-800 text-sm font-semibold mb-4">
                    Directory
                </span>
                <h1 className="text-4xl font-extrabold mb-6">Site Index 📂</h1>
                <p className="text-gray-600 mb-8">
                    A complete list of all {ALL_PAGES.length} pages available on this site.
                </p>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="divide-y divide-gray-100">
                        {ALL_PAGES.map((page) => (
                            <div key={page.href} className="p-4 hover:bg-gray-50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-2">
                                <div>
                                    <Link href={page.href} className="text-lg font-bold text-blue-600 hover:text-blue-800 block">
                                        {page.label}
                                    </Link>
                                    <p className="text-sm text-gray-500">{page.description}</p>
                                </div>
                                <div className="text-xs font-mono bg-gray-100 p-2 rounded text-gray-600 select-all">
                                    https://retire-in-cambodia.vercel.app{page.href}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
