'use client';
import AnimatedContainer from '@/components/AnimatedContainer';
import CirclePattern from '@/components/CirclePattern';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface PolicyData {
    title: string;
    description: string;
    lastUpdated: string;
    content: {
        overview: string;
        sections: Array<{
            title: string;
            content?: string;
            items?: string[];
        }>;
    };
}

const PolicyPage = () => {
    const params = useParams();
    const slug = params.slug as string;
    const [policyData, setPolicyData] = useState<PolicyData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPolicyData = async () => {
            try {
                const response = await fetch('/data/policies.json');
                const data = await response.json();

                if (data[slug]) {
                    setPolicyData(data[slug]);
                } else {
                    setError('Policy not found');
                }
            } catch (err) {
                setError('Failed to load policy data');
            } finally {
                setLoading(false);
            }
        };

        fetchPolicyData();
    }, [slug]);

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-white">
                <div className="text-lg text-gray-600">Loading...</div>
            </div>
        );
    }

    if (error || !policyData) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-white">
                <div className="text-lg text-gray-600">{error || 'Policy not found'}</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <AnimatedContainer visibleClass="!slide-in-from-top-0" className="relative bg-main-gradient">
                <div className="container">
                    <div className="relative h-auto pb-12 overflow-hidden">
                        <div className="relative z-10">
                            <Navbar />

                            <div className="flex flex-col items-center justify-center px-6 pt-10 lg:px-0 lg:pt-16">
                                <h1 className="title text-center text-4xl font-semibold !leading-tight text-white/90 lg:text-5xl">{policyData.title}</h1>
                                <p className="mt-4 text-center text-lg font-normal leading-normal text-white/60 lg:text-xl">{policyData.description}</p>
                            </div>
                        </div>

                        <div className="absolute -bottom-96 z-0">
                            <CirclePattern className="w-[120rem] -rotate-45 opacity-30 lg:w-[120rem]" />
                        </div>
                    </div>
                </div>
            </AnimatedContainer>

            <div className="container z-10 mx-auto px-6 py-16 lg:px-8">
                <div className="mx-auto max-w-4xl text-lg">
                    <div className="max-w-none">
                        <div className="text-gray-800">
                            <p className="mb-8 text-lg leading-relaxed">{policyData.content.overview}</p>

                            {policyData.content.sections.map((section, index) => (
                                <div key={index} className="mb-8">
                                    <h2 className="mb-4 text-2xl font-semibold text-gray-900">{section.title}</h2>
                                    {section.content && <p className="mb-6 leading-relaxed">{section.content}</p>}
                                    {section.items && (
                                        <ul className="mb-6 space-y-3">
                                            {section.items.map((item, itemIndex) => (
                                                <li key={itemIndex} className="flex items-start">
                                                    <span className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-600"></span>
                                                    <span className="leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}

                            <div className="mt-12 rounded-lg bg-gray-100 p-6">
                                <p className="text-base text-gray-600">
                                    Last updated:{' '}
                                    {new Date(policyData.lastUpdated).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default PolicyPage;
