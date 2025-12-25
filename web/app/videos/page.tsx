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
    'lTzOgqJgTxo',
    '9xYUb8cBWWY',
    '6gPrPQl2Oz4',
    '5-36Zy-4wIs',
    'GuufzgXA4i0',
    'T-b-Mek3288',
    'nRuCUFGZDkY',
    'lWhLbS8mdfY',
    'a2Ds6yMul_w',
    'OuN0N2lsMQ4',
    'zle5_D-f1oU',
    'iB9Z1T4vtpQ',
    'VQNRfHe8G78',
    'tvzYjj93piM',
    'LPSQOATnrVk',
    'WjulMYmwe70',
    'mN91hjqj2Gg',
    'YgAvVX3G2Kc',
    'T8eGhI7MtMI',
    'h2hmTSCGfSc',
    '3KuRHGAPIks',
    '5I2WyTJpwEM',
    'uIT39RniORA',
    'FPGTgL_b0sQ',
    'VMQmQeiC4zE',
    'ULlumdpYF8o',
    'GDm40ymHU0k',
    'JoM2km4uJeY',
    '15XvaYoCpCU',
    'ZnB6svCjaRU',
    'Of-Adlh-AD8',
    'xyHIYx4W6-w',
    'KR1vn4C7p0Q',
    '39XECnaSsdM',
    'nEA--6FUy0c',
    'h6d5VEx0VNQ',
    'iEBIquigoDI',
    'Z5bBXi0dBlo',
    '5hHv2MVUcso',
    'HKINKmSpUnM',
    'y5wUPUkwHMM',
    'fNcDzhAW_jw',
    'G3Y4ZAzLme0',
    'jKlR8VejRYM',
    'aa1mWuY_w4g',
    'oBWAZ1sGYhk',
    'bCs3NmWF7ds',
    'iIiHr26cswg',
    'gMd8u1VL9Xg',
    'weC-U-vdzog',
    'UIoBtQq5LTo',
    'tjVaKual5ZU',
    'VjHQnTE-3Q4',
    'hGvi7FizlME',
    'ycL88IOPBJM',
    'YR0_xpZQjE4',
    'kpGk2RH21YQ',
    'c5zoQTq__C8',
    'iEIMmHj6kdM',
    'DOTvlyvjTnU',
    '3_clyzPBNH4',
    'OfD5JTWrirk',
    'Z78n6lvd9Nc',
    'NgpdBZxSMBY',
    'JCk62ygRWhI',
    'fX8lbnyEaSQ',
    'o7Ip-UyY3JA',
    'BPhmN1-_opU',
    'tDwBwCdmEyY',
    'GkocbNCxMJw',
    '0r42iLGfU4o',
    'n8dF_pbXKdg',
    '6NrDJOs8khI',
    'Fc-GpBfR_UM',
    'BmqFg94dHes',
    'yY0K2w4zp-M',
    'kxZSaCCjw4Y',
    '2GXiWpbOwW8',
    'ktM5YrOO4QQ',
    'uiZRdzeHQgo',
    'ueJO5ARWoIs',
    'fsmtukV8ouk',
    'r_KIMZbqE0I',
    'nQ_nRWaHGug',
    'DYNsdFojguQ',
    'JPcTgoUrNoY',
    'JmxdSb4GAY4',
    'OEQDabaUb9g',
    '5pX2doybZRI',
    '6y9jxREU99U',
    'Eiy1rAJj3T8',
    'bk8oQaQg8fQ',
    'aM85xRqg4vU',
    '1HQbl1biw_U',
    'kXuk88P9iXk',
    'sinzWtx9ufo',
    'XL7MsnnCMbc',
    'cBcqpPPRQD8',
    'sNSg9J29Jog',
    '8pxJpauVz4E',
    'ffEosk_obXI',
    'QonizFfO0RE',
    'xQkAbzvt29E',
    'W0IWO4Gn-E8',
    'iii-g0KzRRM',
    'KUY-4_QgQhg',
    '1LkdMQ41eL4',
    'pv-Kw4fW_FI',
    'vKSNzIw4q9E',
    'IgeLQ75CI_Y',
    'Ft08o08ALlQ',
    'GiwOaEytq3E',
    'v2r0fFJi7pM',
    'f6QFFej_HmM',
    '710FZmO1QM0',
    'SB19iUf1B58',
    'is6WCgftZE0',
    'tiCsb_y1who',
    '1kSmAxA0Y0A',
    'FG4VCdY5u0w',
    'fnKxCPJkmGE',
    'mM75_fN3ERQ',
    'twkQZMWjb88',
    '7i5c8qSE1GI',
    '69-ECVKPF8I',
    'P4gPWHI76ac',
    'VY-oV7pDBbA',
    'QanOVns8law',
    '5GE8pow4ZJE',
    'HYQS0Ccrrqg',
    'IE6dqr0o6HM',
    'bIE7wHl3MkU',
    'Dpx2qfE3KO0',
    'Ks3EynLwarY',
    '6ONP01zyYoI',
    '0gg0muZCshQ',
    'urD03SGjMqQ',
    'GlSMahMNNj4',
    'ywpEhEWqm9g',
    'S0ko8Rztkpk',
    'houd5BjLsKI',
    'scB3LK_yLCU',
    '2PftCaL3cII',
    '245qZVllxRg',
    'TKrOFjGJlKY',
    'xXA38owf3Sk',
    'RxW922DL-Kk',
    'zy2sgRXSzfs',
    '2NAeg876VyE',
    'voIlrMkXeFE',
    'yhNI3pQ7Hj0',
    'WxPyqUj-wcU',
    'sAfG8DMIGXI',
    'Tv0Cd9FKXY4',
    'tRqG14pde84',
    'awuRY7I_GBY',
    '8EbLz6mOLSs',
    'Kj2HvYC-_OY',
    'k3-uPYPCrN0',
    'mkLEs83ehRU',
    'YnIAgZJ9PBU',
    'QCx6PNvaVuY',
    'Q07fFA1cNwM',
    'JnAMC_SwZs4',
    'sZHzIcLZMpQ',
    'Izoz71sqn8k',
    'X_vTR2P4EDk',
    'BfjZNs6pyuQ',
    '4WTqkBKN4u8',
    '7_WLlmgu3s8',
    '91Hx9d2hG1A',
    'n3G9XN77zHw',
    'fepFvY_qMzg',
    'd2iPoGuOB5U',
    'ALif-lFd9fI',
    'M77jW6IqrWo',
    'E0q-evbn-oI',
    'k3kBvdmZHHo',
    'aZVdE5TqvzM',
    'W7dy76j-bRc',
    'wJrulf0HxwQ',
    'KcdOc4Gt8KQ',
    '_GgEToLlkpE',
    'T-eN0NN72s8',
    'ooAmx8fmnmE',
    'F3w2XCbtrow',
    '2k4VTPIEf8U',
    'MCXS7VLzfeg',
    'r-Ftpt2elVE',
    '7UlWtycZmyM',
    'QkmYKjkMS4A',
    'W-d4FhxoTBE',
    'UHw3Br4lFjQ',
    '8O7NVdSqs0g',
    'uzKHqnUzpqM',
    'HuAYxA-kHxQ',
    'edAIVtKsgVU',
    'qDBRDAF3Paw',
    'OvYphx647LM',
    'sPK4njj8ywU',
    'Y-7ceZmjRiE',
    'gzEMYgCwwJs',
    'iJzIrADFO5I',
    'qQK2qbrO8qY',
    'OWBrNb_3x4o',
    'R6s9JA624iM',
    'Rh4NtK7Imqg',
    'hNjYhBvDsyg',
    'bkhVe2Vs9Sg',
    '4EnY2cvkzOI',
    'sv2NNREWirY',
    'G-5lS-1_G-k',
    'EceseG-rKks',
    'nBthfYHjUKw',
    'RrgzdzpYyD0',
    'CpntqMU9qIw',
    'NVoTCBqk7rk',
    'HLYI9ExXVkk',
    '3hV8eeyQZ68',
    '0r4GL-Gr3bk',
    'W7q1ePcxlAU',
    'Pm3GU4D_ey8',
    'VwGk4L6GuSE',
    'pAgUPnBUU_k',
    'c6aDAgzL1JI',
    'rACylEBmum8',
    'chGN2_XFzis',
    '9Cp3ZKS6iLw',
    'umma39jJwEQ',
    'YqR_sPm5Ex4',
    'LZLhSt320_w',
    'RcNfzlRTZrE',
    '1lpfrJiegq4',
    'eQHHY1WzWYA',
    'NvCfXkC0CWM',
    'L0c5GEveb2c',
    'Shed8-bYJ8A',
    'mNqFfLmv4fc',
    'QuhNRGHC8QQ',
    'yPrvFaEWBl4',
    '4tcRE7-QlX4',
    'b0Ges5OLR44',
    'Xgfal5zhnoE',
    '6xlrW-q26_w',
    'xkUZOEMMB_o',
    'Ms5w9xWpCu8',
    'ehyK5cDud7I',
    'BvHJqa8DyLg',
    'wUjQczk7MfM',
    'eBccepsAiMU',
    '037_AE2tRNU',
    'R4J2vICcYpQ',
    'MMeTEiZVGFg',
    '0C_Hs5G-s9E',
    'Ni87QY5dL64',
    'xd9_3jd-dwI',
    '3BJJ9NyoWwc',
    '51iamx3a0jo',
    'KbFcXC8xFW0',
    'AbHfgKOXhJw',
    'FrlsPtp9-n8',
    '3dDvx2le_AU',
    'p7659Y4ljRw',
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
