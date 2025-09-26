'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

const Navbar: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className, ...props }) => {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        setIsMobileMenuOpen(false);
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

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    return (
        <div className={cn('relative', className)} {...props}>
            <nav className="self-stretch py-6 border-b border-white/10 flex justify-between items-center px-4 lg:px-8">
                <Link href="/" className="flex justify-center items-center gap-[11.43px]">
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
                        <span className="text-white/60 text-[20px] font-extrabold uppercase tracking-wider">healy</span>
                        <span className="text-white text-[20px] font-extrabold uppercase tracking-wider">sense</span>
                    </div>
                </Link>

                <div className="hidden lg:flex backdrop-blur-[1.50px] justify-start items-start gap-6">
                    {navItems.map((item) => (
                        <button key={item.label} onClick={() => scrollToSection(item.sectionId)} className="text-xl font-medium leading-normal text-white/70 hover:text-white transition-colors cursor-pointer">
                            {item.label}
                        </button>
                    ))}
                </div>

                <button onClick={toggleMobileMenu} className="block lg:hidden text-white hover:text-white/80 transition-colors" aria-label="Toggle mobile menu">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </nav>

            {isMobileMenuOpen && (
                <div ref={menuRef} className="lg:hidden absolute left-0 right-0 top-full z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
                    <div className="flex flex-col px-4 py-4">
                        {navItems.map((item) => (
                            <button
                                key={item.label}
                                onClick={() => scrollToSection(item.sectionId)}
                                className="px-4 py-4 text-base font-medium border-l-2 border-transparent hover:border-white/20 hover:text-white transition-all text-white/70 text-left"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
