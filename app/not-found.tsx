'use client';
import CirclePattern from '@/components/CirclePattern';
import Navbar from '@/components/Navbar';
import React from 'react';
import GenesisLogo from '@/components/icons/shapes/genesis-logo.svg';
import Link from 'next/link';
import AnimatedContainer from '@/components/AnimatedContainer';
const NotFoundPage = () => {
    const isWide = true; // Fixed to wide layout
    return (
        <AnimatedContainer className={isWide ? 'bg-main-gradient shadow-black-card' : 'pt-6'}>
            <div className="container">
                <div className={`relative min-h-[47rem] lg:h-[84rem] ${isWide ? '' : 'rounded-3xl bg-main-gradient shadow-black-card lg:rounded-4xl'}`}>
                    <div className="relative z-20">
                        <Navbar />
                        <div className="mt-8 flex flex-col items-center px-4 pb-20 lg:mt-24">
                            <GenesisLogo className="w-1/2 sm:w-1/4 lg:w-[396px]" />
                            <h1 className="title mt-4 text-center text-4xl font-semibold !leading-normal lg:mt-16 lg:text-6xl">Something gone wrong!</h1>
                            <p className="mt-4 text-center text-base text-white/64 lg:text-xl">The page you were looking for doesn’t exist.</p>
                            <Link href="/" className="button-regular mt-8 px-8">
                                Go to home{' '}
                            </Link>
                        </div>
                    </div>
                    <div className="absolute inset-0 overflow-hidden">
                        <CirclePattern className="absolute left-1/2 top-[36rem] w-full -translate-x-1/2 lg:top-[calc(100%-30rem)] lg:w-[82rem]" />
                    </div>
                </div>
            </div>
        </AnimatedContainer>
    );
};

export default NotFoundPage;
