'use client';
import AnimatedContainer from '@/components/AnimatedContainer';
import CirclePattern from '@/components/CirclePattern';
import ProductShowcase from '@/components/ProductShowcase';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

const Hero = () => {
    const isWide = true; // Fixed to wide layout
    return (
        <AnimatedContainer visibleClass="!slide-in-from-top-0" className={`${isWide ? 'bg-main-gradient overflow-hidden' : 'pt-6'}`}>
            <div className="container">
                <div className={`relative h-[58rem] lg:h-[50rem]  ${isWide ? '' : 'bg-main-gradient rounded-3xl lg:rounded-4xl overflow-hidden'}`}>
                    <div className="relative z-10">
                        <Navbar />
                        {/* Main Content Container - Side by Side Layout */}
                        <div className="lg:mt-24 px-6 pt-10 lg:px-0 lg:pt-0 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
                            {/* Left Side - Text Content */}
                            <div className="flex-1 flex flex-col lg:ml-20">
                                <h1 className="title lg:text-6xl text-3xl !leading-tight lg:text-left text-center mx-auto lg:mx-0 text-white/90 font-semibold leading-[65.62px]">
                                    Discover the Power of <br/>AI Driven Hybrid Solutions
                                </h1>
                                <p className="text-base lg:text-xl text-white/60 mt-6 max-w-[30rem] lg:text-left text-center mx-auto lg:mx-0 text-2xl font-normal leading-loose">
                                    Bridging human expertise and artificial intelligence for <br/>faster, safer diagnoses.
                                </p>
                                <button className="button-regular w-fit mt-8 mx-auto lg:mx-0">Book a Demo</button>
                            </div>

                            {/* Right Side - Statistics Cards */}
                            <div className="w-[340px] md:w-[360px] lg:w-[449px] mx-auto lg:mx-0 flex flex-col gap-2 relative z-5">
                                {/* Reduce Misdiagnosis Card */}
                                <div className="hero-stat-card self-stretch p-6 flex justify-start items-center gap-6 overflow-hidden">
                                    <div className="flex-1 text-white/90 text-xl lg:text-2xl font-semibold leading-loose">Reduce Misdiagnosis</div>
                                    <div className="flex justify-start items-center gap-2">
                                        <div className="hero-before-after-item w-16 lg:w-20 flex flex-col justify-center items-start overflow-hidden">
                                            <div className="hero-before-after-title self-stretch px-2 py-1 flex justify-center items-center">
                                                <div className="text-violet-800/70 text-sm lg:text-base font-semibold tracking-wide">BEFORE</div>
                                            </div>
                                            <div className="self-stretch p-2 bg-white/10 flex justify-center items-center">
                                                <div className="text-white text-lg lg:text-xl font-bold tracking-wide">&gt;35%</div>
                                            </div>
                                        </div>
                                        <div className="hero-before-after-item w-16 lg:w-20 flex flex-col justify-center items-start overflow-hidden">
                                            <div className="hero-before-after-title self-stretch px-2 py-1 flex justify-center items-center">
                                                <div className="text-violet-800/70 text-sm lg:text-base font-semibold tracking-wide">AFTER</div>
                                            </div>
                                            <div className="self-stretch p-2 bg-white/10 flex justify-center items-center">
                                                <div className="text-white text-lg lg:text-xl font-bold tracking-wide">&lt;3.5%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Generation Tendency Card */}
                                <div className="hero-stat-card self-stretch p-6 flex justify-start items-center gap-6 overflow-hidden">
                                    <div className="flex-1 text-white/90 text-xl lg:text-2xl font-semibold leading-loose">Generation Tendency for AI Tech in Health</div>
                                    <div className="flex justify-start items-center gap-2">
                                        <div className="hero-before-after-item w-16 lg:w-20 flex flex-col justify-center items-start overflow-hidden">
                                            <div className="hero-before-after-title self-stretch px-2 py-1 flex justify-center items-center">
                                                <div className="text-violet-800/70 text-sm lg:text-base font-semibold tracking-wide">BEFORE</div>
                                            </div>
                                            <div className="self-stretch p-2 bg-white/10 flex justify-center items-center">
                                                <div className="text-white text-lg lg:text-xl font-bold tracking-wide">&lt;50%</div>
                                            </div>
                                        </div>
                                        <div className="hero-before-after-item w-16 lg:w-20 flex flex-col justify-center items-start overflow-hidden">
                                            <div className="hero-before-after-title self-stretch px-2 py-1 flex justify-center items-center">
                                                <div className="text-violet-800/70 text-sm lg:text-base font-semibold tracking-wide">AFTER</div>
                                            </div>
                                            <div className="self-stretch p-2 bg-white/10 flex justify-center items-center">
                                                <div className="text-white text-lg lg:text-xl font-bold tracking-wide">>85%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Diagnostic Speed Card */}
                                <div className="hero-stat-card self-stretch p-6 flex justify-start items-center gap-6 overflow-hidden">
                                    <div className="flex-1 text-white/90 text-xl lg:text-2xl font-semibold leading-loose">Diagnostic Speed</div>
                                    <div className="flex justify-start items-center gap-2">
                                        <div className="hero-before-after-item w-16 lg:w-20 flex flex-col justify-center items-start overflow-hidden">
                                            <div className="hero-before-after-title self-stretch px-2 py-1 flex justify-center items-center">
                                                <div className="text-violet-800/70 text-sm lg:text-base font-semibold tracking-wide">BEFORE</div>
                                            </div>
                                            <div className="self-stretch p-2 bg-white/10 flex justify-center items-center">
                                                <div className="text-white text-lg lg:text-xl font-bold tracking-wide">3-6h</div>
                                            </div>
                                        </div>
                                        <div className="hero-before-after-item w-16 lg:w-20 flex flex-col justify-center items-start overflow-hidden">
                                            <div className="hero-before-after-title self-stretch px-2 py-1 flex justify-center items-center">
                                                <div className="text-violet-800/70 text-sm lg:text-base font-semibold tracking-wide">AFTER</div>
                                            </div>
                                            <div className="self-stretch p-2 bg-white/10 flex justify-center items-center">
                                                <div className="text-white text-lg lg:text-xl font-bold tracking-wide">&lt;10m</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ProductShowcase className="absolute bottom-8 left-1/2 transform -translate-x-1/2" />
                    <div className="absolute -right-[42rem] -bottom-[36rem] z-0">
                        <CirclePattern className="w-[72rem] lg:w-[80rem] -rotate-45" />
                    </div>
                </div>
            </div>
        </AnimatedContainer>
    );
};

export default Hero;
