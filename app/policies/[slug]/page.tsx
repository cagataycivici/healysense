'use client';
import AnimatedContainer from '@/components/AnimatedContainer';
import CirclePattern from '@/components/CirclePattern';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useParams } from 'next/navigation';

const PolicyPage = () => {
    const params = useParams();
    const slug = params.slug as string;

    const getPolicyTitle = (slug: string) => {
        switch (slug) {
            case 'pdpl':
                return 'PDPL Policy';
            case 'information-security':
                return 'Information Security';
            case 'clarification-text':
                return 'Clarification Text';
            case 'storage-disposal':
                return 'Storage & Disposal';
            default:
                return 'Policy';
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <AnimatedContainer visibleClass="!slide-in-from-top-0" className="overflow-hidden bg-main-gradient">
                <div className="container">
                    <div className="relative h-auto pb-12">
                        <div className="relative z-10">
                            <Navbar />

                            <div className="flex flex-col items-center justify-center px-6 pt-10 lg:px-0 lg:pt-16">
                                <h1 className="title text-center text-4xl font-semibold !leading-tight text-white/90 lg:text-5xl">{getPolicyTitle(slug)}</h1>
                                <p className="mt-4 text-center text-lg font-normal leading-normal text-white/60 lg:text-xl">Learn about our policies and commitments</p>
                            </div>
                        </div>

                        <div className="absolute -bottom-96 z-0">
                            <CirclePattern className="w-[120rem] -rotate-45 opacity-30 lg:w-[120rem]" />
                        </div>
                    </div>
                </div>
            </AnimatedContainer>

            <div className="container mx-auto px-6 py-16 lg:px-8">
                <div className="mx-auto max-w-4xl text-lg">
                    <div className="max-w-none">
                        <div className="text-gray-800">
                            <p className="mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </p>

                            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Policy Overview</h2>
                            <p className="mb-6">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>

                            <h3 className="mb-3 text-xl font-semibold text-gray-900">Key Points</h3>
                            <ul className="mb-6 space-y-2">
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                                <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco</li>
                                <li>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
                            </ul>

                            <h3 className="mb-3 text-xl font-semibold text-gray-900">Implementation</h3>
                            <p className="mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>

                            <h3 className="mb-3 text-xl font-semibold text-gray-900">Contact Information</h3>
                            <p className="mb-6">
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                            </p>

                            <div className="mt-8 rounded-lg bg-gray-100 p-6">
                                <p className="text-base text-gray-600">
                                    Last updated:{' '}
                                    {new Date().toLocaleDateString('en-US', {
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
