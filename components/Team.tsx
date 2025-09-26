'use client';
import AnimatedContainer from '@/components/AnimatedContainer';
import useIsMobile from '@/lib/hooks/use-is-mobile';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const Team = () => {
    const isMobile = useIsMobile();
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [slideWidth, setSlideWidth] = useState(0);
    const [visibleItems, setVisibleItems] = useState(1);

    // Determine visible items based on screen size
    useEffect(() => {
        const updateVisibleItems = () => {
            const width = window.innerWidth;
            if (width < 1024) {
                // Mobile: 1 item visible
                setVisibleItems(1);
            } else if (width < 1536) {
                // lg to 2xl: 2 items visible
                setVisibleItems(2);
            } else {
                // 2xl+: Show all (static layout)
                setVisibleItems(3);
            }
        };

        updateVisibleItems();
        window.addEventListener('resize', updateVisibleItems);
        return () => window.removeEventListener('resize', updateVisibleItems);
    }, []);

    // Calculate slide width
    useEffect(() => {
        if (containerRef.current && visibleItems < 3) {
            const container = containerRef.current;
            const containerWidth = container.offsetWidth;

            if (visibleItems === 1) {
                // Mobile: Full width slides
                setSlideWidth(containerWidth);
            } else if (visibleItems === 2) {
                // lg-xl: Show 2 items with third partially visible
                // Each item takes 45% of container width
                setSlideWidth(containerWidth * 0.45);
            }
        }
    }, [visibleItems]);

    const handlePrev = () => {
        setCurrentIndex((prev) => {
            if (prev === 0) return startupTeamData.length - 1;
            return prev - 1;
        });
    };

    const handleNext = () => {
        setCurrentIndex((prev) => {
            if (prev === startupTeamData.length - 1) return 0;
            return prev + 1;
        });
    };

    // Calculate transform based on current index and visible items
    const getTransform = () => {
        if (visibleItems === 3) return 'translateX(0)';

        if (visibleItems === 1) {
            // Mobile: Simple slide by 100%
            return `translateX(-${currentIndex * 100}%)`;
        } else {
            // Desktop (2-item carousel): Slide by 50% to show 2 full items at a time
            // This means: 0%, -50%, -100% for 3 items total
            const slidePercentage = currentIndex * 50;
            return `translateX(-${slidePercentage}%)`;
        }
    };

    return (
        <AnimatedContainer className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-start gap-16 self-stretch px-4 py-32">
            {/* Header Section */}
            <div className="flex w-full flex-col items-center justify-start gap-4">
                <div
                    className="relative flex h-[72px] w-[72px] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-b from-[#531EAF] to-[#641BE1]"
                    style={{
                        boxShadow:
                            '0px 1px 2px 0px rgba(0,0,0,0.10), 0px 3px 3px 0px rgba(0,0,0,0.09), 0px 7px 4px 0px rgba(0,0,0,0.05), 0px 12px 5px 0px rgba(0,0,0,0.01), 0px 19px 5px 0px rgba(0,0,0,0.00), inset 0px 2px 3px 0px rgba(255,255,255,0.25)'
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="30" viewBox="0 0 37 30" fill="none">
                        <path
                            d="M10.7715 0C7.08959 0 4.10482 2.98477 4.10482 6.66667C4.10482 10.3486 7.08959 13.3333 10.7715 13.3333C14.4534 13.3333 17.4382 10.3486 17.4382 6.66667C17.4382 2.98477 14.4534 0 10.7715 0Z"
                            fill="url(#paint0_linear_7038_2385)"
                        />
                        <path
                            d="M25.7715 0C22.0896 0 19.1048 2.98477 19.1048 6.66667C19.1048 10.3486 22.0896 13.3333 25.7715 13.3333C29.4534 13.3333 32.4382 10.3486 32.4382 6.66667C32.4382 2.98477 29.4534 0 25.7715 0Z"
                            fill="url(#paint1_linear_7038_2385)"
                        />
                        <path
                            d="M21.1352 22.4766C19.102 17.6078 15.0146 15 10.772 15C6.5294 15 2.44198 17.6078 0.40876 22.4766C-0.316218 24.2126 -0.0210752 25.9304 0.855844 27.2632C0.981119 27.4536 1.11827 27.6361 1.26601 27.8097C2.4177 29.163 4.21442 30 6.13685 30H15.4071C17.3296 30 19.1263 29.163 20.278 27.8097C21.4599 26.4208 21.9638 24.4606 21.1352 22.4766Z"
                            fill="url(#paint2_linear_7038_2385)"
                        />
                        <path
                            d="M24.2111 21.1921C23.3983 19.2458 22.2988 17.56 20.9896 16.1705C22.4849 15.397 24.1167 15 25.7722 15C30.0147 15 34.1022 17.6078 36.1354 22.4766C36.9639 24.4606 36.4601 26.4208 35.2781 27.8097C34.1264 29.163 32.3297 30 30.4073 30H22.7909L22.8165 29.97C24.7087 27.7466 25.5815 24.4737 24.2111 21.1921Z"
                            fill="url(#paint3_linear_7038_2385)"
                        />
                        <defs>
                            <linearGradient id="paint0_linear_7038_2385" x1="18.2721" y1="0.375183" x2="18.2721" y2="30" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_7038_2385" x1="18.2721" y1="0.375183" x2="18.2721" y2="30" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_7038_2385" x1="18.2721" y1="0.375183" x2="18.2721" y2="30" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_7038_2385" x1="18.2721" y1="0.375183" x2="18.2721" y2="30" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="flex flex-col items-center justify-start gap-4 self-stretch">
                    <div className="justify-start self-stretch text-center text-3xl font-semibold leading-tight text-surface-950 lg:text-6xl lg:leading-[65.62px]">Meet Our Talented Team</div>
                </div>
            </div>

            <div className="mt-16 w-full">
                <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-16">
                    {/* Text Section */}
                    <div className="flex-1 lg:max-w-md">
                        <div className="text-center lg:text-left">
                            <span className="text-lg font-normal leading-normal text-surface-700 lg:text-2xl">Dedicated experts from different fields teamed up and created team. </span>
                            <br />
                            <br />
                            <span className="text-lg font-normal leading-normal text-surface-700 lg:text-2xl">They combine expertise in </span>
                            <span className="text-lg font-bold leading-normal text-surface-700 lg:text-2xl">radiology</span>
                            <span className="text-lg font-normal leading-normal text-surface-700 lg:text-2xl">, </span>
                            <span className="text-lg font-bold leading-normal text-surface-700 lg:text-2xl">artificial intelligence</span>
                            <span className="text-lg font-normal leading-normal text-surface-700 lg:text-2xl">, and </span>
                            <span className="text-lg font-bold leading-normal text-surface-700 lg:text-2xl">mathematics</span>
                            <span className="text-lg font-normal leading-normal text-surface-700 lg:text-2xl"> to develop revolutionary hybrid decision support systems.</span>
                            <br />
                            <br />
                            <span className="text-lg font-normal leading-normal text-surface-700 lg:text-2xl">Join our journey to redefine medical analysis and meet our team.</span>
                        </div>

                        {/* Navigation Buttons - Show on screens under 2xl */}
                        <div className="mt-8 flex items-center justify-center gap-6 2xl:hidden">
                            <button
                                onClick={handlePrev}
                                className="flex h-12 w-[5.5rem] items-center justify-center rounded-full border-0 border-white/12 bg-white shadow-stroke transition-transform duration-200 hover:scale-105 dark:border dark:bg-surface-800 dark:shadow-none"
                            >
                                <i className="pi pi-arrow-left text-xl text-surface-700 dark:text-white"></i>
                            </button>
                            <button
                                onClick={handleNext}
                                className="flex h-12 w-[5.5rem] items-center justify-center rounded-full border-0 border-white/12 bg-white shadow-stroke transition-transform duration-200 hover:scale-105 dark:border dark:bg-surface-800 dark:shadow-none"
                            >
                                <i className="pi pi-arrow-right text-xl text-surface-700 dark:text-white"></i>
                            </button>
                        </div>
                    </div>

                    {/* Custom Carousel Section */}
                    <div className="w-full flex-1">
                        {/* Custom Carousel for screens under 2xl */}
                        <div className={`${visibleItems === 3 ? 'hidden' : 'block'}`}>
                            <div
                                ref={containerRef}
                                className="relative"
                                style={{
                                    // Create viewport that shows 2 full items + partial 3rd
                                    width: visibleItems === 2 ? 'calc(100% + 6rem)' : '100%',
                                    overflow: 'hidden'
                                }}
                            >
                                <div
                                    className="flex transition-transform duration-300 ease-in-out"
                                    style={{
                                        transform: getTransform()
                                    }}
                                >
                                    {startupTeamData.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex-shrink-0"
                                            style={{
                                                width: visibleItems === 1 ? '100%' : '50%',
                                                minWidth: visibleItems === 1 ? '100%' : '50%',
                                                padding: visibleItems === 1 ? '0 0.5rem' : '0 0.5rem'
                                            }}
                                        >
                                            <AnimatedContainer
                                                delay={200 * index}
                                                className="group relative h-[500px] w-full overflow-hidden rounded-3xl shadow-blue-card lg:h-[400px] lg:rounded-4xl"
                                                style={{
                                                    maxWidth: '24.6rem',
                                                    margin: visibleItems === 1 ? '0 auto' : '0'
                                                }}
                                            >
                                                <Image className="object-cover" fill sizes="(max-width: 768px) 280px, (max-width: 1200px) 50vw, 33vw" src={item.image} alt="Startup Team Item" />
                                                <div className="absolute inset-0 flex flex-col items-start justify-end gap-4 overflow-hidden rounded-3xl bg-gradient-to-b from-black/0 to-black/70 p-8 opacity-0 transition-all group-hover:opacity-100 lg:rounded-4xl">
                                                    <div className="inline-flex items-start justify-start gap-[9.14px]">
                                                        <Link
                                                            href={item.facebook}
                                                            className="backdrop-blur-xs flex w-14 items-center justify-center gap-2 overflow-hidden rounded-full bg-white/5 px-4 py-2 outline outline-[0.50px] outline-offset-[-0.50px] outline-white/10"
                                                        >
                                                            <i className="pi pi-linkedin text-base text-white"></i>
                                                        </Link>
                                                        <Link
                                                            href={item.twitter}
                                                            className="backdrop-blur-xs flex w-14 items-center justify-center gap-2 overflow-hidden rounded-full bg-white/5 px-4 py-2 outline outline-[0.50px] outline-offset-[-0.50px] outline-white/10"
                                                        >
                                                            <i className="pi pi-twitter text-base text-white"></i>
                                                        </Link>
                                                    </div>
                                                    <div className="flex flex-col items-start justify-start gap-1 self-stretch">
                                                        <div className="justify-start self-stretch text-2xl font-semibold leading-loose text-white">{item.name}</div>
                                                        <div className="justify-start self-stretch text-lg font-normal leading-7 text-white">{item.role}</div>
                                                    </div>
                                                </div>
                                            </AnimatedContainer>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 2XL+: Show all 3 items in a static flex layout */}
                        <div className={`${visibleItems === 3 ? 'flex' : 'hidden'} flex-row justify-center gap-6`}>
                            {startupTeamData.map((item, index) => (
                                <AnimatedContainer key={index} delay={200 * index} className="group relative h-[400px] min-w-[18.6rem] max-w-[22rem] flex-1 overflow-hidden rounded-4xl shadow-blue-card">
                                    <Image className="object-cover" fill sizes="(max-width: 1200px) 50vw, 33vw" src={item.image} alt="Startup Team Item" />
                                    <div className="absolute inset-0 flex flex-col items-start justify-end gap-4 overflow-hidden rounded-4xl bg-gradient-to-b from-black/0 to-black/70 p-8 opacity-0 transition-all group-hover:opacity-100">
                                        <div className="inline-flex items-start justify-start gap-[9.14px]">
                                            <Link
                                                href={item.facebook}
                                                className="backdrop-blur-xs flex w-14 items-center justify-center gap-2 overflow-hidden rounded-full bg-white/5 px-4 py-2 outline outline-[0.50px] outline-offset-[-0.50px] outline-white/10"
                                            >
                                                <i className="pi pi-linkedin text-base text-white"></i>
                                            </Link>
                                            <Link
                                                href={item.twitter}
                                                className="backdrop-blur-xs flex w-14 items-center justify-center gap-2 overflow-hidden rounded-full bg-white/5 px-4 py-2 outline outline-[0.50px] outline-offset-[-0.50px] outline-white/10"
                                            >
                                                <i className="pi pi-twitter text-base text-white"></i>
                                            </Link>
                                        </div>
                                        <div className="flex flex-col items-start justify-start gap-1 self-stretch">
                                            <div className="justify-start self-stretch text-2xl font-semibold leading-loose text-white">{item.name}</div>
                                            <div className="justify-start self-stretch text-lg font-normal leading-7 text-white">{item.role}</div>
                                        </div>
                                    </div>
                                </AnimatedContainer>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedContainer>
    );
};

export default Team;

const startupTeamData = [
    {
        image: '/images/team-1.jpg',
        name: 'Serhat Tozburun',
        role: 'Founder',
        twitter: 'https://twitter.com/serhattozburun',
        facebook: 'https://linkedin.com/in/serhattozburun',
        github: 'x'
    },
    {
        image: '/images/team-2.jpg',
        name: 'Semih Burhan',
        role: 'COO & Data Scientist',
        twitter: 'https://twitter.com/semihburhan',
        facebook: 'https://linkedin.com/in/semihburhan',
        github: 'x'
    },
    {
        image: '/images/team-3.jpg',
        name: 'John Doe',
        role: 'Medical Advisor',
        twitter: 'https://twitter.com/johndoe',
        facebook: 'https://linkedin.com/in/johndoe',
        github: 'x'
    }
];
