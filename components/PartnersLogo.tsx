'use client';
import Image from 'next/image';

interface Partner {
    name: string;
    image: string;
    link: string;
}

const PartnersLogo = ({ className = '' }: { className?: string }) => {
    const partners: Partner[] = [
        { name: 'TR AI', image: '/images/logo-trai.png', link: 'https://turkiye.ai/portfolio/healysense-as/' },
        { name: 'CyberWhiz', image: '/images/logo-cyberwhiz.png', link: 'https://www.cyberwhiz.co.uk/' },
        { name: 'Siemens Healthineers', image: '/images/logo-siemens-healthineers.png', link: 'https://www.siemens-healthineers.com/tr' },
        { name: 'Depark', image: '/images/logo-depark.png', link: 'https://www.depark.com/firmalar/healysense/' },
        { name: 'Workup', image: '/images/logo-workup.png', link: 'https://www.youtube.com/watch?v=EItbhiyksTg' },
        { name: 'Technology Initiative Badge', image: '/images/logo-technology-initiative-badge.png', link: 'https://drive.google.com/file/d/1BlD9aEL5iwoH_WliHQ1MOX8-8BUw4kyM/view' },
        { name: 'National Technology Initiative ', image: '/images/logo-national-technology-initiative.png', link: 'https://teknogirisim.sanayi.gov.tr/' }
    ];

    return (
        <div className={`container flex flex-col items-center justify-start gap-16 pb-8 pt-16 ${className}`}>
            <div className="flex flex-col items-center justify-start gap-6 self-stretch">
                <div
                    className="relative flex size-[72px] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-b from-[#F37021] to-[#FF8C42]"
                    style={{
                        boxShadow:
                            '0px 1px 2px 0px rgba(0,0,0,0.10), 0px 3px 3px 0px rgba(0,0,0,0.09), 0px 7px 4px 0px rgba(0,0,0,0.05), 0px 12px 5px 0px rgba(0,0,0,0.01), 0px 19px 5px 0px rgba(0,0,0,0.00), inset 0px 2px 3px 0px rgba(255,255,255,0.25)'
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" viewBox="0 0 40 32" fill="none">
                        <defs>
                            <linearGradient id="paint_back_partners" x1="20" y1="0" x2="20" y2="32" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" stopOpacity="0.5" />
                                <stop offset="1" stopColor="white" stopOpacity="0.2" />
                            </linearGradient>
                            <linearGradient id="paint_front_partners" x1="20" y1="0" x2="20" y2="32" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0.4" />
                            </linearGradient>
                        </defs>
                        {/* Left person */}
                        <circle cx="6" cy="9" r="4" fill="url(#paint_back_partners)" />
                        <path d="M6 14c-3.3 0-6 2.2-6 5v4c0 .5.4 1 1 1h10c.5 0 1-.5 1-1v-4c0-2.8-2.7-5-6-5z" fill="url(#paint_back_partners)" />
                        {/* Right person */}
                        <circle cx="34" cy="9" r="4" fill="url(#paint_back_partners)" />
                        <path d="M34 14c-3.3 0-6 2.2-6 5v4c0 .5.4 1 1 1h10c.5 0 1-.5 1-1v-4c0-2.8-2.7-5-6-5z" fill="url(#paint_back_partners)" />
                        {/* Center person (front) */}
                        <circle cx="20" cy="6" r="5" fill="url(#paint_front_partners)" />
                        <path d="M20 12c-4.4 0-8 2.7-8 6v5c0 .5.4 1 1 1h14c.5 0 1-.5 1-1v-5c0-3.3-3.6-6-8-6z" fill="url(#paint_front_partners)" />
                    </svg>
                </div>
                <div className="flex flex-col items-center justify-start gap-4 self-stretch">
                    <div className="self-stretch text-center text-3xl font-semibold leading-tight text-surface-950 lg:text-6xl lg:leading-tight">Partners</div>
                    <div className="justify-end self-stretch text-center text-lg font-normal leading-normal text-surface-500 lg:text-2xl lg:leading-normal">Collaborating with industry leaders and experts in their fields.</div>
                </div>
            </div>

            <div className="relative w-full overflow-hidden">
                {/* Gradient fade on edges */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

                <div className="marquee-container flex">
                    <div className="marquee-content flex items-center gap-16">
                        {partners.map((partner, index) => (
                            <a key={index} href={partner.link} target="_blank" rel="noopener noreferrer" className="group flex-shrink-0">
                                <Image
                                    src={partner.image}
                                    alt={partner.name}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="h-14 w-auto object-contain transition-all duration-300 [filter:brightness(0)_invert(0.78)_sepia(0)_saturate(0)] group-hover:filter-none"
                                />
                            </a>
                        ))}
                    </div>
                    <div className="marquee-content flex items-center gap-16" aria-hidden="true">
                        {partners.map((partner, index) => (
                            <a key={`dup-${index}`} href={partner.link} target="_blank" rel="noopener noreferrer" className="group flex-shrink-0" tabIndex={-1}>
                                <Image
                                    src={partner.image}
                                    alt={partner.name}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="h-14 w-auto object-contain transition-all duration-300 [filter:brightness(0)_invert(0.78)_sepia(0)_saturate(0)] group-hover:filter-none"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .marquee-container {
                    --gap: 4rem;
                    gap: var(--gap);
                }

                .marquee-content {
                    flex-shrink: 0;
                    animation: scroll 25s linear infinite;
                    will-change: transform;
                }

                @keyframes scroll {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(calc(-100% - var(--gap)));
                    }
                }
            `}</style>
        </div>
    );
};

export default PartnersLogo;
