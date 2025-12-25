'use client';

import React, { useState } from 'react';

export default function GoogleSearch() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // Open Google search in new tab with site-specific search
            const searchUrl = `https://www.google.com/search?q=site:${window.location.hostname}+${encodeURIComponent(searchQuery)}`;
            window.open(searchUrl, '_blank');
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <form onSubmit={handleSearch} className="relative">
                <div className="flex items-center bg-white rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                    <div className="pl-5 pr-3">
                        <svg
                            className="w-5 h-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search this site..."
                        className="flex-1 py-3 px-2 bg-transparent outline-none text-gray-700 placeholder-gray-400"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors mr-1"
                    >
                        Search
                    </button>
                </div>
            </form>
            <p className="text-center text-xs text-gray-500 mt-2">
                Powered by Google Search
            </p>
        </div>
    );
}
