'use client';
import AnimatedContainer from '@/components/AnimatedContainer';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const News = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3);
    const gap = 24; // gap-6 = 24px

    useEffect(() => {
        const handleResize = () => {
            setVisibleCount(window.innerWidth >= 1024 ? 3 : 1);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const newsData = [
        {
            image: '/images/shift-day.png',
            title: `Siemens Healthineers SHIFT Innovation Day 2025`,
            description: `SHIFT Innovation Day 2025 took place at the Innovation Center. Finalists including INCEPTO, M2Call, ScanLab, Healysense, Voximetry, RFiD Discovery | A Paragon ID company, Sweepin, Harness and @Medcase also showcased powerful solutions tackling real healthcare challenges. `,
            source: 'Siemens Healthineers',
            link: 'https://www.linkedin.com/feed/update/urn:li:activity:7379518334221860864/'
            // https://www.linkedin.com/posts/healysense_siemenshealthineers-healysense-shiftinnovationday2025-activity-7379907949512687616-QXzW
        },
        {
            image: 'https://cdn.webrazzi.com/uploads/2025/06/workup-astart-ilk-donem-216.png',
            title: `Anadolu Sigorta'nın Ana Destekçisi Olduğu Workup AStart Girişimcilik Programı'nın İlk Dönemi 9 Girişimle Başlıyor!`,
            description: `100. yılını kutlayan Anadolu Sigorta'nın ana destekçisi olduğu Workup AStart Girişimcilik Programı'nın ilk dönemi 9 girişimle başlıyor`,
            source: 'Webrazzi',
            link: 'https://webrazzi.com/2025/06/10/workup-astart-girisimcilik-programi-nin-ilk-donemi-9-girisimle-basliyor/'
        },
        {
            image: 'https://marketing.webassets.siemens-healthineers.com/d02b3af74ada6d25/0e952595fbcd/v/a9887fc87528/foiBulten.png',
            title: `Siemens Healthineers Türkiye’den ’’Future of’’ Serisi: Future of Imaging (FOI) Boğaziçi Üniversitesi’nde Gerçekleştirildi`,
            description: `Siemens Healthineers Türkiye, ülkemizin sağlık ekosistemini güçlendirmek ve sağlık girişimcilerini desteklemek üzere düzenlediği Future of Laboratories program serisinin ardından, görüntüleme teknolojilerinin geleceğine odaklanan Future of Imaging’i de hayata geçirdi. Boğaziçi Üniversitesi Biyomedikal Mühendisliği Enstitüsü iş birliği düzenlenen Future of Imaging (FOI)  Aralık ayında, Boğaziçi Üniversitesi Albert Long Hall'de gerçekleşti. Tıbbi görüntüleme alanındaki yenilikçi fikirlerin ve projelerin yarıştığı programda, aynı zamanda sağlık ekosisteminde görev yapan kilit paydaşların katılımıyla panel oturumları da gerçekleştirildi.`,
            source: 'Siemens Healthineers',
            link: 'https://www.siemens-healthineers.com/tr/basin/basin-bultenleri/foi-bogazici-universitesinde-gerceklesti'
        }
    ];

    const maxIndex = Math.max(0, newsData.length - visibleCount);

    // Reset currentIndex if it exceeds maxIndex after resize
    useEffect(() => {
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex);
        }
    }, [currentIndex, maxIndex]);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    };

    // Calculate translateX offset
    // Each slide moves by: (100% + gap) / visibleCount for lg, or (100% + gap) for mobile
    const slidePercent = currentIndex * (100 / visibleCount);
    const slideGapPx = currentIndex * (gap / visibleCount);

    return (
        <div className="container flex flex-col items-center justify-start gap-16 pb-8 pt-16">
            <div className="flex flex-col items-center justify-start gap-6 self-stretch">
                <div
                    className="relative flex size-[72px] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-b from-[#531EAF] to-[#641BE1]"
                    style={{
                        boxShadow:
                            '0px 1px 2px 0px rgba(0,0,0,0.10), 0px 3px 3px 0px rgba(0,0,0,0.09), 0px 7px 4px 0px rgba(0,0,0,0.05), 0px 12px 5px 0px rgba(0,0,0,0.01), 0px 19px 5px 0px rgba(0,0,0,0.00), inset 0px 2px 3px 0px rgba(255,255,255,0.25)'
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <g clipPath="url(#clip0_7070_2036)">
                            <g filter="url(#filter0_d_7070_2036)">
                                <path
                                    d="M18.3327 13.3337C18.3327 9.65176 15.3479 6.66699 11.666 6.66699H1.66602V33.3337H14.9993C16.8403 33.3337 18.3327 34.826 18.3327 36.667V13.3337Z"
                                    fill="url(#paint0_linear_7070_2036)"
                                    shapeRendering="crispEdges"
                                />
                                <path d="M21.666 36.667C21.666 34.826 23.1584 33.3337 24.9993 33.3337H38.3327V6.66699H28.3327C24.6508 6.66699 21.666 9.65176 21.666 13.3337V36.667Z" fill="url(#paint1_linear_7070_2036)" shapeRendering="crispEdges" />
                                <path
                                    d="M11.666 6.91699C15.2098 6.91699 18.083 9.79016 18.083 13.334V34.8418C17.4588 33.7894 16.3114 33.084 14.999 33.084H1.91602V6.91699H11.666ZM28.333 6.91699H38.083V33.084H24.999C23.6872 33.0841 22.5403 33.789 21.916 34.8408V13.334C21.916 9.79016 24.7892 6.91699 28.333 6.91699Z"
                                    stroke="url(#paint2_linear_7070_2036)"
                                    strokeWidth="0.5"
                                    shapeRendering="crispEdges"
                                />
                            </g>
                        </g>
                        <defs>
                            <filter id="filter0_d_7070_2036" x="-2.33398" y="3.66699" width="44.6667" height="38" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="1" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7070_2036" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7070_2036" result="shape" />
                            </filter>
                            <linearGradient id="paint0_linear_7070_2036" x1="19.9993" y1="7.04218" x2="19.9993" y2="36.667" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_7070_2036" x1="19.9993" y1="7.04218" x2="19.9993" y2="36.667" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_7070_2036" x1="19.9993" y1="6.66699" x2="19.9993" y2="36.667" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="0.586424" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                            <clipPath id="clip0_7070_2036">
                                <rect width="40" height="40" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="flex flex-col items-center justify-start gap-4 self-stretch">
                    <div className="justify-end self-stretch text-center text-3xl font-semibold leading-tight text-surface-950 lg:text-6xl lg:leading-tight">News</div>
                    <div className="justify-end self-stretch text-center text-lg font-normal leading-normal text-surface-500 lg:text-2xl lg:leading-normal">Latest insights in medical AI technology</div>
                </div>
                <div className="mt-6 flex items-center gap-6">
                    <button onClick={handlePrev} className="h-12 w-[5.5rem] rounded-full border-0 border-white/12 shadow-stroke transition-transform duration-200 hover:bg-surface-100/20">
                        <i className="pi pi-arrow-left text-xl"></i>
                    </button>
                    <button onClick={handleNext} className="h-12 w-[5.5rem] rounded-full border-0 border-white/12 shadow-stroke transition-transform duration-200 hover:bg-surface-100/20">
                        <i className="pi pi-arrow-right text-xl"></i>
                    </button>
                </div>
            </div>

            <div className="self-stretch overflow-hidden">
                <div className="flex gap-6 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(calc(-${slidePercent}% - ${slideGapPx}px))` }}>
                    {newsData.map((item, index) => (
                        <div key={index} className="w-full flex-shrink-0 lg:w-[calc((100%-48px)/3)]">
                            <AnimatedContainer delay={0} className="flex h-full flex-col items-start justify-start gap-4 bg-surface-0">
                                <Link href={item.link} target="_blank" rel="noopener noreferrer" className="block w-full">
                                    <Image className="relative h-[217px] w-full self-stretch rounded-2xl object-cover transition-transform duration-300 hover:scale-105" src={item.image} alt={item.title} width={370} height={217} />
                                </Link>
                                <div className="flex flex-1 flex-col items-start justify-between self-stretch">
                                    <div className="flex flex-col items-start justify-center gap-2 self-stretch p-3">
                                        <Link href={item.link} target="_blank" rel="noopener noreferrer">
                                            <div className="cursor-pointer justify-start self-stretch text-xl font-medium leading-normal text-surface-950 transition-colors hover:text-[#641BE1]">{item.title}</div>
                                        </Link>
                                        <div className="line-clamp-4 justify-start self-stretch text-lg font-normal leading-normal text-surface-500">{item.description}</div>
                                    </div>
                                    <div className="mt-auto flex flex-col items-center justify-center gap-2 self-stretch">
                                        <div className="flex items-center justify-start self-stretch p-3">
                                            <div className="justify-start self-stretch text-base font-medium leading-normal text-surface-500">{item.source}</div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedContainer>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default News;
