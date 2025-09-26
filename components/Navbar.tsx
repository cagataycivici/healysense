'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

const Navbar: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className, ...props }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const pathname = usePathname();
    const router = useRouter();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavClick = (item: { label: string; sectionId: string }) => {
        setIsMobileMenuOpen(false);

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

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            if (menuRef.current && !menuRef.current.contains(target) && buttonRef.current && !buttonRef.current.contains(target)) {
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

    useEffect(() => {
        if (pathname === '/' && window.location.hash) {
            const sectionId = window.location.hash.substring(1);
            const element = document.getElementById(sectionId);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 100);
            }
        }
    }, [pathname]);

    return (
        <div className={cn('relative', className)} {...props}>
            <nav className="flex items-center justify-between self-stretch border-b border-white/10 px-4 py-6 lg:px-8">
                <Link href="/" className="flex items-center justify-center gap-[11.43px]">
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
                        <span className="text-[20px] font-extrabold uppercase tracking-wider text-white/60">healy</span>
                        <span className="text-[20px] font-extrabold uppercase tracking-wider text-white">sense</span>
                    </div>
                </Link>

                <div className="hidden items-start justify-start gap-6 backdrop-blur-[1.50px] lg:flex">
                    {navItems.map((item) =>
                        item.label === 'Home' ? (
                            <Link key={item.label} href="/" className="cursor-pointer text-xl font-medium leading-normal text-white/70 transition-colors hover:text-white">
                                {item.label}
                            </Link>
                        ) : (
                            <button key={item.label} onClick={() => handleNavClick(item)} className="cursor-pointer text-xl font-medium leading-normal text-white/70 transition-colors hover:text-white">
                                {item.label}
                            </button>
                        )
                    )}
                </div>

                <button ref={buttonRef} onClick={toggleMobileMenu} className="block text-white transition-colors hover:text-white/80 lg:hidden" aria-label="Toggle mobile menu">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </nav>

            {isMobileMenuOpen && (
                <div ref={menuRef} className="absolute left-0 right-0 top-full z-[100] border-b border-white/10 bg-black/95 backdrop-blur-sm lg:hidden">
                    <div className="flex flex-col px-4 py-4">
                        {navItems.map((item) =>
                            item.label === 'Home' ? (
                                <Link
                                    key={item.label}
                                    href="/"
                                    className="border-l-2 border-transparent px-4 py-4 text-left text-base font-medium text-white/70 transition-all hover:border-[#641BE1] hover:text-white"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <button key={item.label} onClick={() => handleNavClick(item)} className="border-l-2 border-transparent px-4 py-4 text-left text-base font-medium text-white/70 transition-all hover:border-[#641BE1] hover:text-white">
                                    {item.label}
                                </button>
                            )
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
