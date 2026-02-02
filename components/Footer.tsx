'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import AnimatedContainer from './AnimatedContainer';
import CirclePattern from './CirclePattern';

type FooterProps = {
    image?: string;
    transparent?: boolean;
    noContainer?: boolean;
};

const Footer: React.FC<React.HTMLAttributes<HTMLElement> & FooterProps> = ({ className, ...props }) => {
    const pathname = usePathname();
    const router = useRouter();

    const handleNavClick = (item: { label: string; sectionId: string }) => {
        if (pathname === '/') {
            const element = document.getElementById(item.sectionId);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        } else {
            router.push(`/#${item.sectionId}`);
        }
    };

    const navItems = [
        { label: 'Home', sectionId: 'hero' },
        { label: 'Solutions', sectionId: 'solutions' },
        { label: 'Showreel', sectionId: 'showreel' },
        { label: 'Integration', sectionId: 'integration' },
        { label: 'Team', sectionId: 'team' },
        { label: 'Experts', sectionId: 'testimonials' },
        { label: 'News', sectionId: 'news' },
        { label: 'FAQ', sectionId: 'faq' },
        { label: 'Book a Demo', sectionId: 'contact' }
    ];

    return (
        <AnimatedContainer>
            <div className={cn('container w-full overflow-hidden px-4 pb-8 pt-16', className)} style={{}} {...props}>
                <div
                    className="relative inline-flex w-full flex-1 flex-col items-start justify-start gap-8 overflow-hidden rounded-[28px] bg-gradient-to-b from-[#531EAF] to-[#641BE1] p-8"
                    style={{
                        boxShadow:
                            '0px 0px 1px 0px rgba(0,0,0,0.06), 0px 2px 2px 0px rgba(0,0,0,0.05), 0px 4px 3px 0px rgba(0,0,0,0.03), 0px 8px 3px 0px rgba(0,0,0,0.01), 0px 12px 3px 0px rgba(0,0,0,0.00), 0px 1px 1px 0px rgba(0,0,0,0.06), inset 0px -1px 1px 0px rgba(0,0,0,0.06)'
                    }}
                >
                    {/* Circle Pattern Background */}
                    <CirclePattern className="absolute -left-[600px] -top-[600px] size-[1200px] opacity-50" />
                    <CirclePattern className="absolute -left-[500px] -top-[500px] size-[1000px] opacity-40" />
                    <CirclePattern className="absolute -left-[400px] -top-[400px] size-[800px] opacity-60" />

                    <div className="relative z-10 flex flex-col items-start justify-between gap-8 self-stretch lg:flex-row">
                        <div></div>
                        <div className="flex flex-col items-start justify-start gap-6">
                            <div className="inline-flex items-center justify-center gap-[6.27px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="40" viewBox="0 0 24 40" fill="none">
                                    <g clipPath="url(#clip0_7009_11660)">
                                        <path d="M0.499817 6.66717V19.999L12.0465 13.3342V0.00012207L0.499817 6.66717Z" fill="white" />
                                        <path d="M0.499817 33.3331L12.0465 26.6661V13.3343L0.499817 19.999V33.3331Z" fill="#DDD2EF" />
                                        <path d="M23.5932 19.9988L12.0466 13.3341L0.499878 19.9988L12.0466 26.6659L23.5932 19.9988Z" fill="#531FAE" />
                                        <path d="M23.5932 19.9988L12.0466 13.3341L0.499878 19.9988L12.0466 26.6659L23.5932 19.9988Z" fill="white" fillOpacity="0.6" style={{ mixBlendMode: 'screen' }} />
                                        <path d="M23.5932 6.66718L12.0466 13.3342V26.666L23.5932 19.999V6.66718Z" fill="#DDD2EF" />
                                        <path d="M23.5932 33.3331V19.999L12.0466 26.6661V40.0002L23.5932 33.3331Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_7009_11660">
                                            <rect width="23.0934" height="40" fill="white" transform="translate(0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div className="justify-center">
                                    <span className="text-base font-extrabold uppercase tracking-wide text-white/60">healy</span>
                                    <span className="text-base font-extrabold uppercase tracking-wide text-white">sense</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-2">
                                <div className="max-w-md justify-start self-stretch text-base font-normal leading-normal text-white">Dokuz Eylül Üniversitesi İnciraltı Yerleşkesi, DEPARK Nar Grup, Ofis:P2/E Balçova/İzmir/Türkiye</div>
                                <Link href="mailto:info@healysense.ai" className="justify-start self-stretch text-base font-normal leading-normal text-white transition-colors hover:text-white/70">
                                    info@healysense.ai
                                </Link>
                            </div>
                            <div className="inline-flex items-start justify-start gap-[9.14px]">
                                <Link
                                    href="https://linkedin.com/company/healysense"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="backdrop-blur-xs flex items-center justify-start gap-2 overflow-hidden rounded-[99px] bg-white/5 px-4 py-2 outline outline-[0.50px] outline-offset-[-0.50px] outline-white/10 transition-colors hover:bg-white/10"
                                >
                                    <i className="pi pi-linkedin text-base text-white"></i>
                                </Link>
                                <Link
                                    href="https://twitter.com/healysense"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="backdrop-blur-xs flex items-center justify-start gap-2 overflow-hidden rounded-[99px] bg-white/5 px-4 py-2 outline outline-[0.50px] outline-offset-[-0.50px] outline-white/10 transition-colors hover:bg-white/10"
                                >
                                    <i className="pi pi-twitter text-base text-white"></i>
                                </Link>
                                <Link
                                    href="https://www.instagram.com/healysenseai/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="backdrop-blur-xs flex items-center justify-start gap-2 overflow-hidden rounded-[99px] bg-white/5 px-4 py-2 outline outline-[0.50px] outline-offset-[-0.50px] outline-white/10 transition-colors hover:bg-white/10"
                                >
                                    <i className="pi pi-instagram text-base text-white"></i>
                                </Link>
                                <Link
                                    href="https://www.youtube.com/@Healysense"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="backdrop-blur-xs flex items-center justify-start gap-2 overflow-hidden rounded-[99px] bg-white/5 px-4 py-2 outline outline-[0.50px] outline-offset-[-0.50px] outline-white/10 transition-colors hover:bg-white/10"
                                >
                                    <i className="pi pi-youtube text-base text-white"></i>
                                </Link>
                                <Link
                                    href="mailto:info@healysense.ai"
                                    className="backdrop-blur-xs flex items-center justify-start gap-2 overflow-hidden rounded-[99px] bg-white/5 px-4 py-2 outline outline-[0.50px] outline-offset-[-0.50px] outline-white/10 transition-colors hover:bg-white/10"
                                >
                                    <i className="pi pi-envelope text-base text-white"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="grid w-full grid-cols-2 gap-4 backdrop-blur-[1.50px] lg:flex lg:w-auto lg:flex-wrap lg:items-start lg:justify-start lg:gap-6">
                            {navItems.map((item) =>
                                item.label === 'Home' ? (
                                    <Link key={item.label} href="/" className="cursor-pointer text-left text-base font-medium leading-normal text-white/70 transition-colors hover:text-white">
                                        {item.label}
                                    </Link>
                                ) : (
                                    <button key={item.label} onClick={() => handleNavClick(item)} className="cursor-pointer text-left text-base font-medium leading-normal text-white/70 transition-colors hover:text-white">
                                        {item.label}
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                    <div className="relative z-10 h-0 w-full outline outline-1 outline-offset-[-0.50px] outline-white/10" />
                    <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 self-stretch lg:gap-8">
                        <span className="text-base font-medium leading-normal text-white/70">© Copyright 2026 Healysense</span>
                        <div className="flex flex-wrap items-start justify-end gap-4 lg:gap-8">
                            <Link href="/policies/terms-of-use" className="cursor-pointer text-base font-medium leading-normal text-white/70 transition-colors hover:text-white">
                                Terms of Use
                            </Link>
                            <Link href="/policies/quality-compliance" className="cursor-pointer text-base font-medium leading-normal text-white/70 transition-colors hover:text-white">
                                Quality & Compliance Policy
                            </Link>
                            <Link href="/policies/information-security" className="cursor-pointer text-base font-medium leading-normal text-white/70 transition-colors hover:text-white">
                                Information Security
                            </Link>
                            <Link href="/policies/privacy" className="cursor-pointer text-base font-medium leading-normal text-white/70 transition-colors hover:text-white">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedContainer>
    );
};

export default Footer;
