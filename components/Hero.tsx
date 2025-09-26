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
        <AnimatedContainer visibleClass="!slide-in-from-top-0" className={`${isWide ? 'bg-main-gradient overflow-hidden' : 'pt-6'}`}>
            <div className="container">
                <div className={`relative  h-auto lg:h-[50rem] pb-20  ${isWide ? '' : 'bg-main-gradient rounded-3xl lg:rounded-4xl overflow-hidden'}`}>
                    <div className="relative z-10">
                        <Navbar />
                
                        <div className="lg:mt-24 px-6 pt-10 lg:px-0 lg:pt-0 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
                            <div className="flex-1 flex flex-col lg:ml-2">
                                <h1 className="title lg:text-6xl text-5xl  !leading-tight lg:text-left text-center mx-auto lg:mx-0 text-white/90 font-semibold ">
                                    Discover the Power of <br/>AI Driven Hybrid Solutions
                                </h1>
                                <p className="text-xl text-white/60 mt-6  lg:text-left text-center mx-auto lg:mx-0  font-normal leading-loose">
                                    Models have been comprehensively trained and validated on heterogeneous datasets covering emergency throacic CT and abdomninal CT scans.
                                </p>
                                <button onClick={() => scrollToSection('contact')} className="button-regular w-fit mt-8 mx-auto lg:mx-0">Book a Demo</button>
                            </div>

                           
                            <div className="max-w-[449px] w-full mx-auto lg:mx-0 flex flex-col gap-2 relative z-5">
                           
                                <div className="hero-stat-card self-stretch p-6 flex justify-start items-center gap-6 overflow-hidden">
                                    <div className="flex-1 text-white/90 text-xl lg:text-2xl font-semibold leading-loose">Diagnostic Speed</div>
                                    <div className="flex justify-start items-center gap-2">
                                    <div className="hero-before-after-item w-16 lg:w-24 flex flex-col justify-center items-start overflow-hidden">
                                        <div className="self-stretch p-2 bg-white/10 flex justify-center items-center">
                                            <div className="text-white text-lg lg:text-xl font-bold tracking-wide">&lt; 10m</div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                        
                                <div className="hero-stat-card self-stretch p-6 flex justify-start items-center gap-6 overflow-hidden">
                                    <div className="flex-1 text-white/90 text-xl lg:text-2xl font-semibold leading-loose">Reduce Misdiagnosis</div>
                                    <div className="flex justify-start items-center gap-2">
                               
                                        <div className="hero-before-after-item w-16 lg:w-24 flex flex-col justify-center items-start overflow-hidden">
                                           
                                            <div className="self-stretch p-2 bg-white/10 flex justify-center items-center">
                                                <div className="text-white text-lg lg:text-xl font-bold tracking-wide">&lt; 3.5%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                       
                                <div className="hero-stat-card self-stretch p-6 flex justify-start items-center gap-6 overflow-hidden">
                                    <div className="flex-1 text-white/90 text-xl lg:text-2xl font-semibold leading-loose ">Generation Tendency for <br />AI Tech in Health</div>
                                    <div className="flex justify-start items-center gap-2">
                                       
                                        <div className="hero-before-after-item w-16 lg:w-24 flex flex-col justify-center items-start overflow-hidden">
                                         
                                            <div className="self-stretch p-2 bg-white/10 flex justify-center items-center">
                                                <div className="text-white text-lg lg:text-xl font-bold tracking-wide">> 85%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            
                            </div>
                        </div>
                    </div>

                    <ProductShowcase className="absolute bottom-8 left-1/2 transform -translate-x-1/2" />
                    <div className="absolute  -bottom-[36rem] z-0">
                        <CirclePattern className="w-[120rem] lg:w-[120rem] -rotate-45" />
                    </div>
                </div>
            </div>
        </AnimatedContainer>
    );
};

export default Hero;
