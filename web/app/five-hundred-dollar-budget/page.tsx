import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Retire on $500 USD per Month? | Extreme Budgeting',
    description: 'Is it possible to retire in Cambodia with just $500 a month? Watch this analysis.',
};

export default function FiveHundredDollarPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
                    ← Back to Home
                </Link>
                <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl">💸</span>
                    <h1 className="text-4xl font-extrabold">$500 USD Per Month?</h1>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <p className="text-xl text-gray-700 leading-relaxed mb-8">
                        Andrew Ma, an Australian expat living in Kampot for over 25 years, explains how he lives comfortably on a budget that seems impossible in the West.
                    </p>

                    <div className="aspect-w-16 aspect-h-9 mb-8 overflow-hidden rounded-xl shadow-lg border border-gray-200">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/OfD5JTWrirk"
                            title="Retire in Cambodia on $500 USD"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full object-cover"
                        ></iframe>
                    </div>

                    {/* Cost Breakdown based on Transcript */}
                    <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100 mb-8">
                        <h2 className="text-2xl font-bold text-emerald-900 mb-4">Andrew's Actual Costs (Kampot)</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <ul className="space-y-3 text-emerald-900">
                                    <li className="flex justify-between border-b border-emerald-200 pb-2">
                                        <span>Rent (His 1-Bed House):</span>
                                        <span className="font-bold">$80.00</span>
                                    </li>
                                    <li className="flex justify-between border-b border-emerald-200 pb-2">
                                        <span>Rent (Resort Bungalow):</span>
                                        <span className="font-bold">~$200.00</span>
                                    </li>
                                    <li className="flex justify-between border-b border-emerald-200 pb-2">
                                        <span>Electricity:</span>
                                        <span className="font-bold">$30 - $60</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="space-y-3 text-emerald-900">
                                    <li className="flex justify-between border-b border-emerald-200 pb-2">
                                        <span>Internet (Unlimited):</span>
                                        <span className="font-bold">$15.00</span>
                                    </li>
                                    <li className="flex justify-between border-b border-emerald-200 pb-2">
                                        <span>Mobile Data:</span>
                                        <span className="font-bold">$6.00</span>
                                    </li>
                                    <li className="flex justify-between border-b border-emerald-200 pb-2">
                                        <span>Water:</span>
                                        <span className="font-bold">$2 - $3</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-emerald-800 italic">
                            *Note: Andrew mentions he lives in the center of town. He advises avoiding real estate agents to get these local prices.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Full Conversation Transcript</h2>
                        <div className="h-96 overflow-y-auto bg-gray-50 p-6 rounded-lg text-sm text-gray-600 border border-gray-200 leading-relaxed font-mono">
                            <p className="font-bold mb-4">[Start of Transcript]</p>
                            <div className="space-y-4">
                                <p><strong>Host:</strong> All right. So, the next thing we're going to dive into is the rents. Is Kampot affordable, Andrew? Is it affordable? And tell us, you know, I mean, like you it looks like you got a fairly big place. I watched you walk through a couple hallways and um end up in in this back room. So, it looks like you got a pretty good place. What can you get a rental for there in Kampot?</p>

                                <p><strong>Andrew:</strong> If you want to live at a resort with a swimming pool, you can do it for 200 more or less here in Kampot. I live in a a one-bedroom lounge room, kitchen, bathroom house in the center of town a quiet lane between the river and the durian roundabout for those who know Kampot right in the heart of town. $80 a month for my rent.</p>

                                <p><strong>Host:</strong> All right. So, today we are heading over to one of my favorite countries. I love this place, Cambodia. With my friend Andrew Ma. Andrew, how are you?</p>

                                <p><strong>Andrew:</strong> I'm very good. Thank you. Happy to be here.</p>

                                <p><strong>Host:</strong> Yeah. Thanks for taking part in the podcast. I appreciate it. So, Andrew, just talking to you a little bit. We were talking off air before we started. You have such a fascinating life and um you're living in a very unique way... you've been over there for like 25 years. You're from Australia. So, let's start with your backstory. Where are you originally from?</p>

                                <p><strong>Andrew:</strong> Well, I grew up in a small town called Colac in Western Victoria, Australia... I worked for a few banks and then I ended up in the public service. I was married... we divorced and I was feeling a bit lost... jumped on a plane and headed off to Thailand. Met up with some Italian girls... went to Koh Phangan... got an email inviting me to Siem Reap. I thought, why not?</p>

                                <p>As soon as I landed, there was something in the air that really grabbed me. It was very authentic feeling here. And the smiles were there immediately... Thailand's a wonderful place, but they have mass tourism... It's a little bit like McDonald's vs a mom and pop shack.</p>

                                <p><strong>Andrew (on his bookshop):</strong> I lived at Sihanoukville for a year... eventually got a crate load of secondhand books, imported them to Cambodia and never looked back. Ended up with number two recommendation in Lonely Planet... until it became "New Macau"... 200 casinos in Sihanoukville now... prices became unaffordable during the boom... it's also become a scam center... so I moved here to Kampot.</p>

                                <p><strong>Host:</strong> Thinking about moving abroad... (Ad read)... So now you're in Kampot. How did you end up there?</p>

                                <p><strong>Andrew:</strong> There were a few options... Koh Kong is too small... Battambang is lovely but tough on business... Phnom Penh is not me. I like somewhere quiet and Kampot was really the only option apart from the islands.</p>

                                <p><strong>Host:</strong> What do people need to do to obtain a visa?</p>

                                <p><strong>Andrew:</strong> If you're over 55, it's very, very easy. For about $300 with no additional supporting paperwork, you can get a retirement visa at 55, no questions asked. Then renew it annually... No minimum income requirement at the moment.</p>

                                <p><strong>Host:</strong> Explain Kampot. What does it look like?</p>

                                <p><strong>Andrew:</strong> Kampot's got a history that goes back a long time... Indian influence... French colonial buildings... It's about 50,000 people. When Sihanoukville went to New Macau, a large proportion of expats moved here. So now we've got six or seven South Asian restaurants... Italian, American, Australian...</p>

                                <p><strong>Host:</strong> What is the climate like?</p>

                                <p><strong>Andrew:</strong> Two seasons: dry and green (wet). It might rain for an hour or two a day... I think the highest I've ever seen it here would be 34 degrees Celsius... Humidity is there but you get used to it. Mosquitoes... fan is enough to keep them away. Malaria is not a thing here (in town).</p>

                                <p><strong>Host:</strong> Health care?</p>

                                <p><strong>Andrew:</strong> You've got to have a diagnosis before you can get treated... I avoid the doctor thing unless they are attached to a laboratory. Lab tests are cheap.</p>

                                <p><strong>Host:</strong> Getting back to grocery costs...</p>

                                <p><strong>Andrew:</strong> I buy milk from Australia or Slovenia, simpler than Australia... You can get by on as little as $500 total living here. Room for $40, $8 electricity, $2 meals. Good restaurant meal is $3-$5.</p>

                                <p><strong>Host:</strong> Transport?</p>

                                <p><strong>Andrew:</strong> Grab apps... $1 - $1.25 for ride hail. Bus to Phnom Penh is $6. Private car $40-$50.</p>

                                <p><strong>Host:</strong> Fun?</p>

                                <p><strong>Andrew:</strong> Quiz nights... Temple on Fish Island... Cave temples... Kep beach (20 mins away)... Kayaking... Live music most nights (free with a 50 cent beer).</p>

                                <p><strong>Host:</strong> Language?</p>

                                <p><strong>Andrew:</strong> English is widely spoken because of the UN period... You do not have to learn Khmer, but it goes a long way. </p>

                                <p><strong>Host:</strong> Is there anything else?</p>

                                <p><strong>Andrew:</strong> I just can't say how wonderful Cambodia is... I've learned and grown so much. It's a very friendly place... Cambodians don't have resentment for the wars... they want to leave that behind. I'm proud of Cambodia.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
