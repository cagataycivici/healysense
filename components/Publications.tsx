'use client';
import AnimatedContainer from '@/components/AnimatedContainer';
import Link from 'next/link';

const Publications = () => {
    const publications = [
        {
            number: 1,
            citation:
                'Giray Nuri Mavis, Berkay Ahmet Durmus, Semih Burhan, and Serhat Tozburun "Wavelet-informed pix2pix model with an FID-based loss function for confocal microscopy", Proc. SPIE 13937, Advances in Microscopic Imaging V, 139371B (18 December 2025); https://doi.org/10.1117/12.3098091',
            link: 'https://doi.org/10.1117/12.3098091'
        },
        {
            number: 2,
            citation:
                'Giray Nuri Mavis, Berkay Ahmet Durmus, Semih Burhan, and Serhat Tozburun "Wavelet-informed pix2pix model with an FID-based loss function for confocal microscopy", National Workshop on Optics, Electro-Optics and Photonics, İstanbul, Türkiye 2025 (12 September 2025)',
            link: 'https://www.fotonikcalistay.com/'
        },
        {
            number: 3,
            citation:
                'Giray Nuri Mavis, Berkay Ahmet Durmus, Semih Burhan, Dilek Nazli, Gunes Ozhan, and Serhat Tozburun "Conditional generative adversarial network-based image enhancement model for confocal microscopy", Proc. SPIE 13865, Computational Optical Imaging and Artificial Intelligence in Biomedical Sciences III, 138650C (5 March 2026); https://doi.org/10.1117/12.3079178',
            link: 'https://doi.org/10.1117/12.3079178'
        }
    ];

    return (
        <div className="bg-surface-50 py-16">
            <div className="container flex flex-col items-center justify-start gap-10">
                <div className="flex flex-col items-center gap-6">
                    <AnimatedContainer delay={0}>
                        <div
                            className="relative flex size-[72px] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-b from-[#F37021] to-[#FF8C42]"
                            style={{
                                boxShadow:
                                    '0px 1px 2px 0px rgba(0,0,0,0.10), 0px 3px 3px 0px rgba(0,0,0,0.09), 0px 7px 4px 0px rgba(0,0,0,0.05), 0px 12px 5px 0px rgba(0,0,0,0.01), 0px 19px 5px 0px rgba(0,0,0,0.00), inset 0px 2px 3px 0px rgba(255,255,255,0.25)'
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path
                                    d="M8.33325 5C7.41278 5 6.66659 5.74619 6.66659 6.66667V33.3333C6.66659 34.2538 7.41278 35 8.33325 35H31.6666C32.5871 35 33.3333 34.2538 33.3333 33.3333V13.3333L24.9999 5H8.33325Z"
                                    fill="url(#paint0_linear_pub)"
                                    stroke="url(#paint1_linear_pub)"
                                    strokeWidth="0.5"
                                />
                                <path d="M24.9999 5V11.6667C24.9999 12.5871 25.7461 13.3333 26.6666 13.3333H33.3333" fill="url(#paint2_linear_pub)" />
                                <path d="M24.9999 5V11.6667C24.9999 12.5871 25.7461 13.3333 26.6666 13.3333H33.3333" stroke="url(#paint3_linear_pub)" strokeWidth="0.5" />
                                <path d="M13.3333 20H26.6666" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                <path d="M13.3333 25H23.3333" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                <path d="M13.3333 30H19.9999" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_pub" x1="20" y1="5" x2="20" y2="35" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="white" />
                                        <stop offset="1" stopColor="white" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_pub" x1="20" y1="5" x2="20" y2="35" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="white" />
                                        <stop offset="0.6" stopColor="white" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_pub" x1="29" y1="5" x2="29" y2="13.3333" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="white" />
                                        <stop offset="1" stopColor="white" stopOpacity="0.5" />
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_pub" x1="29" y1="5" x2="29" y2="13.3333" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="white" />
                                        <stop offset="1" stopColor="white" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </AnimatedContainer>
                    <AnimatedContainer delay={100}>
                        <div className="text-center text-2xl font-semibold text-surface-950 lg:text-4xl">Research & Publications</div>
                    </AnimatedContainer>
                </div>

                <AnimatedContainer delay={200}>
                    <div className="relative max-w-4xl overflow-hidden rounded-[28px] bg-gradient-to-b from-violet-600 to-violet-500 p-6 shadow-blue-card sm:p-8">
                        <div className="flex flex-col gap-5">
                            {publications.map((pub, index) => (
                                <Link
                                    key={pub.number}
                                    href={pub.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group flex gap-3 transition-opacity hover:opacity-80 ${index !== publications.length - 1 ? 'border-b border-white/10 pb-5' : ''}`}
                                >
                                    <span className="shrink-0 font-semibold text-white">{pub.number}.</span>
                                    <p className="text-sm leading-relaxed text-white/80 sm:text-base">{pub.citation}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </AnimatedContainer>
            </div>
        </div>
    );
};

export default Publications;
