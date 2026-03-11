'use client';
import AnimatedContainer from '@/components/AnimatedContainer';
import CirclePattern from '@/components/CirclePattern';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

const Hero = () => {
    const isWide = true; // Fixed to wide layout

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
    return (
        <AnimatedContainer visibleClass="!slide-in-from-top-0" className={`${isWide ? 'overflow-hidden bg-main-gradient' : 'pt-6'}`}>
            <div className="container">
                <div className={`relative pb-10 lg:min-h-[50rem] lg:pb-0 ${isWide ? '' : 'overflow-hidden rounded-3xl bg-main-gradient lg:rounded-4xl'}`}>
                    <div className="relative z-10">
                        <Navbar />

                        <div className="flex flex-col gap-8 px-6 pt-10 lg:mt-24 lg:flex-row lg:items-center lg:gap-16 lg:px-0 lg:pt-0">
                            <div className="flex flex-1 flex-col lg:ml-2">
                                <h1 className="title mx-auto text-center text-5xl font-semibold !leading-tight text-white/90 lg:mx-0 lg:text-left lg:text-6xl">
                                    Discover the Power of <br />
                                    AI Driven Hybrid Solutions
                                </h1>
                                <p className="mx-auto mt-6 text-center text-xl font-normal leading-normal text-white/60 lg:mx-0 lg:text-left">
                                    Models have been comprehensively trained and validated on heterogeneous datasets covering emergency thoracic CT and abdominal CT scans.
                                </p>
                                <button onClick={() => scrollToSection('contact')} className="button-regular mx-auto mt-8 w-fit lg:mx-0">
                                    Book a Demo
                                </button>
                            </div>

                            <div className="relative z-5 mx-auto flex w-full max-w-[449px] flex-col gap-2 lg:mx-0">
                                <div className="hero-stat-card flex items-center justify-start gap-6 self-stretch overflow-hidden p-6">
                                    <div className="flex-1 text-xl font-semibold leading-normal text-white/90 lg:text-2xl">Diagnostic Speed</div>
                                    <div className="flex items-center justify-start gap-2">
                                        <div className="hero-before-after-item flex w-24 flex-col items-start justify-center overflow-hidden">
                                            <div className="flex items-center justify-center self-stretch bg-white/10 p-2">
                                                <div className="text-lg font-bold tracking-wide text-white lg:text-xl">&lt; 3m</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="hero-stat-card flex items-center justify-start gap-6 self-stretch overflow-hidden p-6">
                                    <div className="flex-1 text-xl font-semibold leading-normal text-white/90 lg:text-2xl">Reduce Misdiagnosis</div>
                                    <div className="flex items-center justify-start gap-2">
                                        <div className="hero-before-after-item flex w-24 flex-col items-start justify-center overflow-hidden">
                                            <div className="flex items-center justify-center self-stretch bg-white/10 p-2">
                                                <div className="text-lg font-bold tracking-wide text-white lg:text-xl">&lt; 3.5%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="hero-stat-card flex items-center justify-start gap-6 self-stretch overflow-hidden p-6">
                                    <div className="flex-1 text-xl font-semibold leading-normal text-white/90 lg:text-2xl">
                                        Generation Tendency for <br />
                                        AI Tech in Health
                                    </div>
                                    <div className="flex items-center justify-start gap-2">
                                        <div className="hero-before-after-item flex w-24 flex-col items-start justify-center overflow-hidden">
                                            <div className="flex items-center justify-center self-stretch bg-white/10 p-2">
                                                <div className="text-lg font-bold tracking-wide text-white lg:text-xl">&gt; 85%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative z-10 mt-8 px-6 lg:absolute lg:bottom-12 lg:left-1/2 lg:mt-0 lg:w-full lg:-translate-x-1/2 lg:px-0">
                        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-12">
                            {/* Funded by PrimeTek */}
                            <div className="flex items-center gap-5">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 p-2">
                                    <Image src="/images/primetek_logo.png" alt="PrimeTek" width={40} height={40} className="object-contain brightness-0 invert" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="whitespace-nowrap text-2xl font-bold text-white/90">Funded by</span>
                                    <span className="whitespace-nowrap text-base text-white/50">PrimeTek</span>
                                </div>
                            </div>
                            {/*CE Marked - uncomment when ready*/}
                            <div className="flex items-center gap-5">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                                        />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <span className="whitespace-nowrap text-2xl font-bold text-white/90">CE Marked</span>
                                    <span className="whitespace-nowrap text-base text-white/50">Marked Algorithms</span>
                                </div>
                            </div>
                            {/* PACS Integration */}
                            <div className="flex items-center gap-5">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
                                        />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <span className="whitespace-nowrap text-2xl font-bold text-white/90">PACS Integrated</span>
                                    <span className="whitespace-nowrap text-base text-white/50">Direct Integration</span>
                                </div>
                            </div>
                            {/* ISO Certification */}
                            <div className="flex items-center gap-5">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                                    <Image src="/images/iso.png" alt="ISO Certified" width={40} height={40} className="object-contain opacity-90 brightness-0 invert" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="whitespace-nowrap text-2xl font-bold text-white/90">ISO Certified</span>
                                    <span className="whitespace-nowrap text-base text-white/50">Certified Company</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l8 4v5c0 5.25-3.5 10.74-8 12-4.5-1.26-8-6.75-8-12V6l8-4z" />
                                        <circle cx="12" cy="10" r="2" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v4" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <span className="whitespace-nowrap text-2xl font-bold text-white/90">Cyber Secured</span>
                                    <span className="whitespace-nowrap text-base text-white/50">Tested for Security</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -bottom-[36rem] z-0">
                        <CirclePattern className="w-[120rem] -rotate-45 lg:w-[120rem]" />
                    </div>
                </div>
            </div>
        </AnimatedContainer>
    );
};

export default Hero;
