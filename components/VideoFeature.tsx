'use client';
import AnimatedContainer from '@/components/AnimatedContainer';
import { useState } from 'react';

const VideoFeature = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const youtubeVideoId = 'dQw4w9WgXcQ'; // Replace with actual video ID

    const openDialog = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <>
            <div className="w-full max-w-[1440px] mx-auto px-4 lg:mt-40 lg:px-[164.57px] pt-16 pb-8 flex flex-col justify-start items-center gap-16">
                {/* Header Section */}
                <div className="w-full max-w-[1152px] flex flex-col justify-start items-center gap-4">
                    <div
                        className="w-[72px] h-[72px] relative bg-gradient-to-b from-violet-800 to-violet-700 rounded-3xl flex items-center justify-center overflow-hidden"
                        style={{
                            boxShadow:
                                '0px 1px 2px 0px rgba(0,0,0,0.10), 0px 3px 3px 0px rgba(0,0,0,0.09), 0px 7px 4px 0px rgba(0,0,0,0.05), 0px 12px 5px 0px rgba(0,0,0,0.01), 0px 19px 5px 0px rgba(0,0,0,0.00), inset 0px 2px 3px 0px rgba(255,255,255,0.25)'
                        }}
                    >
                        <div className="w-[44px] h-[44px] relative overflow-hidden"></div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-center gap-4">
                        <h1 className="text-3xl lg:text-6xl text-surface-950 font-semibold text-center leading-tight lg:leading-[65.62px]">Showreel</h1>
                        <p className="text-lg lg:text-2xl text-surface-500 font-normal text-center leading-loose">Behind the scenes of Healysense: innovation, expertise, and vision.</p>
                    </div>
                </div>

                {/* Video Section */}
                <AnimatedContainer
                    className="w-full max-w-[960px] h-[300px] lg:h-[540px] relative bg-black/10 rounded-[28px] overflow-hidden cursor-pointer group"
                    style={{
                        boxShadow:
                            '0px 0px 1px 0px rgba(0,0,0,0.06), 0px 2px 2px 0px rgba(0,0,0,0.05), 0px 4px 3px 0px rgba(0,0,0,0.03), 0px 8px 3px 0px rgba(0,0,0,0.01), 0px 12px 3px 0px rgba(0,0,0,0.00), 0px 1px 1px 0px rgba(0,0,0,0.06), inset 0px -1px 1px 0px rgba(0,0,0,0.06)'
                    }}
                    onClick={openDialog}
                >
                    {/* Video Thumbnail - You can replace this with an actual video thumbnail */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 to-violet-700/40"></div>

                    {/* Play Button */}
                    <div
                        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[82px] h-[82px] p-6 bg-white/10 rounded-full outline outline-1 outline-offset-[-1px] outline-white/30 flex justify-center items-center gap-[9.14px] overflow-hidden group-hover:scale-110 transition-transform duration-300"
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
                </AnimatedContainer>
            </div>

            {/* Video Dialog */}
            {isDialogOpen && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeDialog}>
                    <div
                        className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
                        style={{
                            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.5)'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button onClick={closeDialog} className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {/* YouTube Video */}
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`}
                            title="Healysense Showreel"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    );
};

export default VideoFeature;
