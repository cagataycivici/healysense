'use client';
import AnimatedContainer from '@/components/AnimatedContainer';
import Image from 'next/image';
import { useState } from 'react';

const VideoFeature = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const videos = [
        {
            id: 'dQw4w9WgXcQ', // Replace with actual video IDs
            title: 'Healysense Showreel',
            thumbnail: '/images/video-preview-1.jpg'
        },
        {
            id: 'jNQXAC9IVRw', // Replace with actual video IDs
            title: 'Product Overview',
            thumbnail: '/images/video-preview-2.jpg'
        },
        {
            id: 'M7lc1UVf-VE', // Replace with actual video IDs
            title: 'Technology Deep Dive',
            thumbnail: '/images/video-preview-3.jpg'
        }
    ];

    const loadVideo = () => {
        setIsVideoLoaded(true);
    };

    const handlePrev = () => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setIsVideoLoaded(false);

        setTimeout(() => {
            setCurrentVideoIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
            setIsTransitioning(false);
        }, 300);
    };

    const handleNext = () => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setIsVideoLoaded(false);

        setTimeout(() => {
            setCurrentVideoIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
            setIsTransitioning(false);
        }, 300);
    };

    const currentVideo = videos[currentVideoIndex];

    return (
        <div className="container pt-16 pb-8 flex flex-col justify-start items-center gap-16">
            {/* Header Section */}
            <div className="w-full flex flex-col justify-start items-center gap-4">
                <div
                    className="w-[72px] h-[72px] relative bg-gradient-to-b from-[#531EAF] to-[#641BE1] rounded-3xl flex items-center justify-center overflow-hidden"
                    style={{
                        boxShadow:
                            '0px 1px 2px 0px rgba(0,0,0,0.10), 0px 3px 3px 0px rgba(0,0,0,0.09), 0px 7px 4px 0px rgba(0,0,0,0.05), 0px 12px 5px 0px rgba(0,0,0,0.01), 0px 19px 5px 0px rgba(0,0,0,0.00), inset 0px 2px 3px 0px rgba(255,255,255,0.25)'
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                        <g filter="url(#filter0_d_7038_2051)">
                            <path
                                d="M37.7459 12.9214C38.5 15.8617 38.5 21.9997 38.5 21.9997C38.5 21.9997 38.5 28.1377 37.7459 31.078C37.3268 32.7032 36.1009 33.982 34.5482 34.4143C31.7284 35.1997 22 35.1997 22 35.1997C22 35.1997 12.2765 35.1997 9.45175 34.4143C7.8925 33.9754 6.6682 32.6983 6.25405 31.078C5.5 28.1377 5.5 21.9997 5.5 21.9997C5.5 21.9997 5.5 15.8617 6.25405 12.9214C6.67315 11.2961 7.8991 10.0174 9.45175 9.58508C12.2765 8.79968 22 8.79968 22 8.79968C22 8.79968 31.7284 8.79968 34.5482 9.58508C36.1075 10.024 37.3318 11.3011 37.7459 12.9214ZM18.7 27.7747L28.6 21.9997L18.7 16.2247V27.7747Z"
                                fill="url(#paint0_linear_7038_2051)"
                                shapeRendering="crispEdges"
                            />
                            <path
                                d="M22.1094 9.07507C22.181 9.07526 22.2866 9.07529 22.4219 9.07605C22.6928 9.07758 23.0833 9.08067 23.5605 9.08679C24.5153 9.09905 25.8174 9.12374 27.207 9.17273C28.5971 9.22174 30.0727 9.29524 31.375 9.40515C32.6834 9.51559 33.7971 9.66176 34.4746 9.85046V9.84949C35.9353 10.2609 37.0887 11.4606 37.4795 12.9891V12.9901C37.8487 14.4302 38.0366 16.6742 38.1309 18.577C38.1778 19.5244 38.2011 20.3806 38.2129 20.9999C38.2188 21.3094 38.2222 21.5596 38.2236 21.7323C38.2244 21.8187 38.2244 21.8862 38.2246 21.9315V22.0682C38.2244 22.1135 38.2244 22.1803 38.2236 22.2665C38.2222 22.4392 38.2188 22.6903 38.2129 22.9999C38.2011 23.6192 38.1778 24.4754 38.1309 25.4227C38.0425 27.2067 37.8721 29.2903 37.5469 30.7303L37.4795 31.0096C37.0836 32.5444 35.9278 33.7446 34.4746 34.1493C33.7971 34.338 32.6834 34.4842 31.375 34.5946C30.0727 34.7045 28.5971 34.778 27.207 34.827C25.8174 34.876 24.5153 34.8997 23.5605 34.912C23.0833 34.9181 22.6928 34.9212 22.4219 34.9227C22.2866 34.9235 22.181 34.9245 22.1094 34.9247H21.8906C21.819 34.9245 21.7134 34.9235 21.5781 34.9227C21.3074 34.9212 20.9173 34.9181 20.4404 34.912C19.4861 34.8997 18.1842 34.876 16.7949 34.827C15.4051 34.778 13.9295 34.7045 12.627 34.5946C11.3189 34.4842 10.2052 34.3379 9.52637 34.1493C8.06528 33.738 6.91132 32.5386 6.52051 31.0096C6.15121 29.5696 5.96345 27.3257 5.86914 25.4227C5.8222 24.4754 5.79886 23.6192 5.78711 22.9999C5.78124 22.6903 5.77783 22.4392 5.77637 22.2665C5.77564 22.1803 5.77557 22.1135 5.77539 22.0682V21.9315C5.77557 21.8862 5.77563 21.8187 5.77637 21.7323C5.77783 21.5596 5.78124 21.3094 5.78711 20.9999C5.79885 20.3806 5.82219 19.5244 5.86914 18.577C5.96344 16.6742 6.15126 14.4302 6.52051 12.9901C6.9163 11.4553 8.07214 10.2552 9.52539 9.85046C10.2042 9.66174 11.3184 9.51559 12.627 9.40515C13.9295 9.29523 15.4051 9.22174 16.7949 9.17273C18.1842 9.12374 19.4861 9.09905 20.4404 9.08679C20.9173 9.08067 21.3074 9.07758 21.5781 9.07605C21.7134 9.07529 21.819 9.07526 21.8906 9.07507H22.1094ZM18.4248 28.2538L18.8389 28.0126L28.7383 22.2372L29.1455 21.9999L28.7383 21.7626L18.8389 15.9872L18.4248 15.746V28.2538Z"
                                stroke="url(#paint1_linear_7038_2051)"
                                strokeWidth="0.55"
                                shapeRendering="crispEdges"
                            />
                        </g>
                        <defs>
                            <filter id="filter0_d_7038_2051" x="1.1" y="5.49968" width="41.8" height="35.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="1.1" />
                                <feGaussianBlur stdDeviation="2.2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7038_2051" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7038_2051" result="shape" />
                            </filter>
                            <linearGradient id="paint0_linear_7038_2051" x1="22" y1="9.12984" x2="22" y2="35.1997" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_7038_2051" x1="22" y1="8.79968" x2="22" y2="35.1997" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="0.586424" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>{' '}
                </div>
                <div className="self-stretch flex flex-col justify-start items-center gap-4">
                    <h1 className="text-3xl lg:text-6xl text-surface-950 font-semibold text-center leading-tight lg:leading-[65.62px]">Showreel</h1>
                    <p className="text-lg lg:text-2xl text-surface-500 font-normal text-center leading-loose">Behind the scenes of Healysense: innovation, expertise, and vision.</p>

                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-6 mt-6">
                        <button onClick={handlePrev} className="w-[5.5rem] h-12 shadow-stroke dark:shadow-none border-0 dark:border border-white/12 rounded-full hover:scale-105 transition-transform duration-200">
                            <i className="pi pi-arrow-left text-xl"></i>
                        </button>
                        <button onClick={handleNext} className="w-[5.5rem] h-12 shadow-stroke dark:shadow-none border-0 dark:border border-white/12 rounded-full hover:scale-105 transition-transform duration-200">
                            <i className="pi pi-arrow-right text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Video Section */}
            <AnimatedContainer
                className={`w-full max-w-[960px] h-[300px] lg:h-[540px] relative bg-black/10 rounded-[28px] overflow-hidden transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}
                style={{
                    boxShadow:
                        '0px 0px 1px 0px rgba(0,0,0,0.06), 0px 2px 2px 0px rgba(0,0,0,0.05), 0px 4px 3px 0px rgba(0,0,0,0.03), 0px 8px 3px 0px rgba(0,0,0,0.01), 0px 12px 3px 0px rgba(0,0,0,0.00), 0px 1px 1px 0px rgba(0,0,0,0.06), inset 0px -1px 1px 0px rgba(0,0,0,0.06)'
                }}
            >
                {!isVideoLoaded ? (
                    <>
                        {/* Video Thumbnail */}
                        <div className="absolute inset-0 cursor-pointer group transition-all duration-500" onClick={loadVideo}>
                            <Image src={currentVideo.thumbnail} alt={currentVideo.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 960px" />

                            {/* Play Button */}
                            <div
                                className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[82px] h-[82px] p-6 bg-white/10 rounded-full outline outline-1 outline-offset-[-1px] outline-white/30 flex justify-center items-center gap-[9.14px] overflow-hidden group-hover:scale-110 transition-all duration-300 ${
                                    isTransitioning ? 'opacity-0' : 'opacity-100'
                                }`}
                                style={{
                                    backdropFilter: 'blur(5px)'
                                }}
                            >
                                <div className="w-[40px] h-[40px] relative overflow-hidden">
                                    <div
                                        className="w-[28.40px] h-[33.15px] absolute left-[8.33px] top-[3.42px] bg-surface-0"
                                        style={{
                                            clipPath: 'polygon(0 0, 100% 50%, 0 100%)'
                                        }}
                                    ></div>
                                </div>
                            </div>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </>
                ) : (
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=1&rel=0&modestbranding=1`}
                        title={currentVideo.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className={`w-full h-full transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
                    ></iframe>
                )}

                {/* Transition Overlay */}
                {isTransitioning && (
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center">
                        <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    </div>
                )}
            </AnimatedContainer>
        </div>
    );
};

export default VideoFeature;
