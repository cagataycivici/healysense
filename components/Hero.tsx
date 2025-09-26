'use client';
import AnimatedContainer from '@/components/AnimatedContainer';
import CirclePattern from '@/components/CirclePattern';
import ProductShowcase from '@/components/ProductShowcase';
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
                <div className={`relative h-auto pb-20 lg:h-[50rem] ${isWide ? '' : 'overflow-hidden rounded-3xl bg-main-gradient lg:rounded-4xl'}`}>
                    <div className="relative z-10">
                        <Navbar />

                        <div className="flex flex-col gap-8 px-6 pt-10 lg:mt-24 lg:flex-row lg:items-center lg:gap-16 lg:px-0 lg:pt-0">
                            <div className="flex flex-1 flex-col lg:ml-2">
                                <h1 className="title mx-auto text-center text-5xl font-semibold !leading-tight text-white/90 lg:mx-0 lg:text-left lg:text-6xl">
                                    Discover the Power of <br />
                                    AI Driven Hybrid Solutions
                                </h1>
                                <p className="mx-auto mt-6 text-center text-xl font-normal leading-loose text-white/60 lg:mx-0 lg:text-left">
                                    Models have been comprehensively trained and validated on heterogeneous datasets covering emergency throacic CT and abdomninal CT scans.
                                </p>
                                <button onClick={() => scrollToSection('contact')} className="button-regular mx-auto mt-8 w-fit lg:mx-0">
                                    Book a Demo
                                </button>
                            </div>

                            <div className="relative z-5 mx-auto flex w-full max-w-[449px] flex-col gap-2 lg:mx-0">
                                <div className="hero-stat-card flex items-center justify-start gap-6 self-stretch overflow-hidden p-6">
                                    <div className="flex-1 text-xl font-semibold leading-loose text-white/90 lg:text-2xl">Diagnostic Speed</div>
                                    <div className="flex items-center justify-start gap-2">
                                        <div className="hero-before-after-item flex w-16 flex-col items-start justify-center overflow-hidden lg:w-24">
                                            <div className="flex items-center justify-center self-stretch bg-white/10 p-2">
                                                <div className="text-lg font-bold tracking-wide text-white lg:text-xl">&lt; 10m</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="hero-stat-card flex items-center justify-start gap-6 self-stretch overflow-hidden p-6">
                                    <div className="flex-1 text-xl font-semibold leading-loose text-white/90 lg:text-2xl">Reduce Misdiagnosis</div>
                                    <div className="flex items-center justify-start gap-2">
                                        <div className="hero-before-after-item flex w-16 flex-col items-start justify-center overflow-hidden lg:w-24">
                                            <div className="flex items-center justify-center self-stretch bg-white/10 p-2">
                                                <div className="text-lg font-bold tracking-wide text-white lg:text-xl">&lt; 3.5%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="hero-stat-card flex items-center justify-start gap-6 self-stretch overflow-hidden p-6">
                                    <div className="flex-1 text-xl font-semibold leading-loose text-white/90 lg:text-2xl">
                                        Generation Tendency for <br />
                                        AI Tech in Health
                                    </div>
                                    <div className="flex items-center justify-start gap-2">
                                        <div className="hero-before-after-item flex w-16 flex-col items-start justify-center overflow-hidden lg:w-24">
                                            <div className="flex items-center justify-center self-stretch bg-white/10 p-2">
                                                <div className="text-lg font-bold tracking-wide text-white lg:text-xl">&gt; 85%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ProductShowcase className="absolute bottom-8 left-1/2 -translate-x-1/2 transform" />
                    <div className="absolute -bottom-[36rem] z-0">
                        <CirclePattern className="w-[120rem] -rotate-45 lg:w-[120rem]" />
                    </div>
                </div>
            </div>
        </AnimatedContainer>
    );
};

export default Hero;
