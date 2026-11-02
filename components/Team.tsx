'use client';
import AnimatedContainer from '@/components/AnimatedContainer';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback } from 'react';

const Team = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', containScroll: 'trimSnaps' });

    // wrap around at the ends, like the News and Showreel sliders
    const handlePrev = useCallback(() => {
        if (!emblaApi) return;
        if (emblaApi.canScrollPrev()) emblaApi.scrollPrev();
        else emblaApi.scrollTo(emblaApi.scrollSnapList().length - 1);
    }, [emblaApi]);

    const handleNext = useCallback(() => {
        if (!emblaApi) return;
        if (emblaApi.canScrollNext()) emblaApi.scrollNext();
        else emblaApi.scrollTo(0);
    }, [emblaApi]);

    return (
        <AnimatedContainer className="mx-auto flex w-full max-w-[1300px] flex-col items-center justify-start gap-16 self-stretch px-12 py-32">
            <div className="flex w-full flex-col items-center justify-start gap-4">
                <div
                    className="relative flex h-[72px] w-[72px] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-b from-[#F37021] to-[#FF8C42]"
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
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_7038_2385" x1="18.2721" y1="0.375183" x2="18.2721" y2="30" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_7038_2385" x1="18.2721" y1="0.375183" x2="18.2721" y2="30" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_7038_2385" x1="18.2721" y1="0.375183" x2="18.2721" y2="30" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="flex flex-col items-center justify-start gap-4 self-stretch">
                    <div className="justify-start self-stretch text-center text-3xl font-semibold leading-tight text-surface-950 lg:text-6xl lg:leading-tight">Meet Our Talented Team</div>
                </div>
            </div>

            <div className="mt-16 w-full">
                <div className="flex flex-col items-start gap-8 2xl:flex-row 2xl:gap-16">
                    <div className="mx-auto w-full max-w-3xl 2xl:mx-0 2xl:max-w-md 2xl:flex-shrink-0">
                        <div className="text-center 2xl:text-left">
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
                        <div className="mt-10 flex items-center justify-center gap-6 2xl:justify-start">
                            <button onClick={handlePrev} aria-label="Previous team member" className="h-12 w-[5.5rem] rounded-full border-0 border-white/12 shadow-stroke transition-transform duration-200 hover:bg-surface-100/20">
                                <i className="pi pi-arrow-left text-xl"></i>
                            </button>
                            <button onClick={handleNext} aria-label="Next team member" className="h-12 w-[5.5rem] rounded-full border-0 border-white/12 shadow-stroke transition-transform duration-200 hover:bg-surface-100/20">
                                <i className="pi pi-arrow-right text-xl"></i>
                            </button>
                        </div>
                    </div>

                    <div className="-my-6 w-full min-w-0 flex-1 overflow-hidden py-6" ref={emblaRef}>
                        <div className="flex gap-6 lg:gap-12">
                            {startupTeamData.map((item, index) => (
                                <div key={index} className="group relative h-[300px] w-[220px] flex-shrink-0 overflow-hidden rounded-[28px] shadow-blue-card sm:h-[372px] sm:w-[260px]">
                                    <Image className="object-cover" fill sizes="(max-width: 640px) 220px, 260px" src={item.image} alt={item.name} />
                                    <div className="absolute inset-0 flex flex-col items-start justify-end gap-4 overflow-hidden rounded-[28px] bg-gradient-to-b from-black/0 to-black/70 p-8 opacity-0 transition-all group-hover:opacity-100">
                                        <div className="inline-flex items-start justify-start gap-[9.14px]">
                                            <Link
                                                href={item.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${item.name} on LinkedIn`}
                                                className="backdrop-blur-xs flex w-14 items-center justify-center gap-2 overflow-hidden rounded-full bg-white/5 px-4 py-2 outline outline-[0.50px] outline-offset-[-0.50px] outline-white/10"
                                            >
                                                <i className="pi pi-linkedin text-base text-white"></i>
                                            </Link>
                                            {item.twitter && (
                                                <Link
                                                    href={item.twitter}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`${item.name} on X`}
                                                    className="backdrop-blur-xs flex w-14 items-center justify-center gap-2 overflow-hidden rounded-full bg-white/5 px-4 py-2 outline outline-[0.50px] outline-offset-[-0.50px] outline-white/10"
                                                >
                                                    <i className="pi pi-twitter text-base text-white"></i>
                                                </Link>
                                            )}
                                        </div>
                                        <div className="flex flex-col items-start justify-start gap-1 self-stretch">
                                            <div className="justify-start self-stretch text-2xl font-semibold leading-normal text-white">{item.name}</div>
                                            <div className="justify-start self-stretch text-lg font-normal leading-normal text-white">{item.role}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedContainer>
    );
};

export default Team;

type TeamMember = {
    image: string;
    name: string;
    role: string;
    linkedin: string;
    twitter?: string;
};

const startupTeamData: TeamMember[] = [
    {
        image: '/images/team-1.jpg',
        name: 'Çağatay Çivici',
        role: 'CEO & Co-Founder',
        twitter: 'https://x.com/cagataycivici',
        linkedin: 'https://www.linkedin.com/in/%C3%A7a%C4%9Fatay-%C3%A7ivici-1579b0129/'
    },
    {
        image: '/images/team-2.jpg',
        name: 'Canan Altay, MD',
        role: 'CSO',
        linkedin: 'https://www.linkedin.com/in/canan-altay-228b6467/'
    },
    {
        image: '/images/team-3.jpg',
        name: 'Serhat Tozburun, PhD',
        role: 'Co-Founder & CTO',
        twitter: 'https://x.com/SerhatTozburun',
        linkedin: 'https://www.linkedin.com/in/serhat-tozburun-39627946/'
    },
    {
        image: '/images/team-4.jpg',
        name: 'Semih Burhan',
        role: 'COO & Data Scientist',
        twitter: 'https://x.com/smhburhan',
        linkedin: 'https://www.linkedin.com/in/smhhburhan/'
    },
    {
        image: '/images/team-5.jpg',
        name: 'Berkay Durmuş',
        role: 'AI Engineer',
        twitter: 'https://x.com/bdurrmus',
        linkedin: 'https://www.linkedin.com/in/berkayahmetdurmus/'
    }
];
