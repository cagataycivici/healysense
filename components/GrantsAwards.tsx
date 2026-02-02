'use client';
import Image from 'next/image';

const GrantsAwards = () => {
    const grantsData = [
        {
            image: '/images/logo-tubitak.png',
            title: 'TUBITAK 1507 - 2023',
            text: 'AortaSense - Pro Project No: 7230344',
            type: 'Grant',
            imageScale: 0.6
        },
        {
            image: '/images/foi.png',
            title: 'Siemens Healthineers <br>Future of Imaging - 2024',
            text: 'Winner',
            type: 'Award'
        },
        {
            image: '/images/shift-day.png',
            title: 'Siemens Healthineers <br>SHIFT Day - 2025',
            text: 'Finalist',
            type: 'Award'
        },
        {
            image: '/images/logo-workup.png',
            title: 'Workup AStart - 2025',
            text: 'Acceleration Program Graduation',
            type: 'Award'
        },
        {
            image: '/images/logo-tubitak.png',
            title: 'TUBITAK 1507 - 2025',
            text: 'AppendiXpert - Project No: 7251157 ',
            type: 'Grant',
            imageScale: 0.6
        }
    ];

    const renderCard = (item: (typeof grantsData)[0], index: number, keyPrefix: string = '') => {
        const scale = item.imageScale || 1;
        const imageStyle = scale < 1 ? { transform: `scale(${scale})` } : undefined;

        return (
            <div key={`${keyPrefix}${index}`} className="w-[300px] flex-shrink-0 lg:w-[370px]">
                <div className="flex h-full flex-col items-start justify-start overflow-hidden rounded-2xl bg-surface-0 shadow-lg">
                    <div className="relative flex h-[200px] w-full items-center justify-center bg-white">
                        {item.image ? (
                            <Image className="h-full w-full object-contain" style={imageStyle} src={item.image} alt={item.title} width={370} height={200} />
                        ) : (
                            <div className="flex h-full w-full items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-surface-400">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                            </div>
                        )}
                    </div>
                    <div className="flex w-full flex-1 flex-col gap-3 p-5">
                        <div className="flex items-center gap-2">
                            <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${item.type === 'Grant' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'}`}>{item.type}</span>
                        </div>
                        <h3 className="text-lg font-semibold leading-tight text-surface-950" dangerouslySetInnerHTML={{ __html: item.title }} />
                        <p className="mt-auto text-base font-medium text-surface-500">{item.text}</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="container flex flex-col items-center justify-start gap-16 pb-8 pt-16">
            <div className="container flex flex-col items-center justify-start gap-6 self-stretch">
                <div
                    className="relative flex size-[72px] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-b from-[#531EAF] to-[#641BE1]"
                    style={{
                        boxShadow:
                            '0px 1px 2px 0px rgba(0,0,0,0.10), 0px 3px 3px 0px rgba(0,0,0,0.09), 0px 7px 4px 0px rgba(0,0,0,0.05), 0px 12px 5px 0px rgba(0,0,0,0.01), 0px 19px 5px 0px rgba(0,0,0,0.00), inset 0px 2px 3px 0px rgba(255,255,255,0.25)'
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <g filter="url(#filter_medal)">
                            <path d="M15 4V16L20 20L25 16V4" fill="url(#paint_ribbon)" stroke="url(#stroke_medal)" strokeWidth="0.5" shapeRendering="crispEdges" />
                            <circle cx="20" cy="26" r="10" fill="url(#paint_medal_circle)" stroke="url(#stroke_medal)" strokeWidth="0.5" shapeRendering="crispEdges" />
                            <circle cx="20" cy="26" r="6" stroke="url(#stroke_inner)" strokeWidth="0.5" fill="none" />
                        </g>
                        <defs>
                            <filter id="filter_medal" x="6" y="1" width="28" height="38" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="1" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                            </filter>
                            <linearGradient id="paint_ribbon" x1="20" y1="4" x2="20" y2="36" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint_medal_circle" x1="20" y1="16" x2="20" y2="36" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="stroke_medal" x1="20" y1="4" x2="20" y2="36" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="0.6" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="stroke_inner" x1="20" y1="20" x2="20" y2="32" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="flex flex-col items-center justify-start gap-4 self-stretch">
                    <div className="justify-end self-stretch text-center text-3xl font-semibold leading-tight text-surface-950 lg:text-6xl lg:leading-tight">Grants & Awards</div>
                    <div className="justify-end self-stretch text-center text-lg font-normal leading-normal text-surface-500 lg:text-2xl lg:leading-normal">Recognition for our innovation in healthcare</div>
                </div>
            </div>

            <div className="relative w-full overflow-hidden py-4">
                {/* Gradient fade on edges */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent lg:w-24" />
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent lg:w-24" />

                <div className="grants-marquee-container flex">
                    <div className="grants-marquee-content flex items-stretch gap-6">{grantsData.map((item, index) => renderCard(item, index))}</div>
                    <div className="grants-marquee-content flex items-stretch gap-6" aria-hidden="true">
                        {grantsData.map((item, index) => renderCard(item, index, 'dup-'))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .grants-marquee-container {
                    --gap: 1.5rem;
                    gap: var(--gap);
                }

                .grants-marquee-content {
                    flex-shrink: 0;
                    animation: grants-scroll 30s linear infinite;
                    will-change: transform;
                }

                @keyframes grants-scroll {
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

export default GrantsAwards;
