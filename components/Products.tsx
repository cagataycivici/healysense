import AnimatedContainer from '@/components/AnimatedContainer';
import Image from 'next/image';

const Products = () => {
    const aortaSense = {
        name: 'AortaSense Pro™',
        description: 'Automated AI interpretation for aortic CT images, improving efficiency and reliability.',
        image: '/images/icon-aorta.png',
        fundedByTubitak: true,
        features: [
            { name: 'Aorta Segmentation', icon: '/images/icon-aorta-seg.png' },
            { name: 'Aortic Aneurysm', icon: '/images/icon-aorta-ane.png' },
            { name: 'Aortic Dissection', icon: '/images/icon-aorta-dis.png' },
            { name: 'Diameter Changes', icon: '/images/icon-aorta-dia.png' },
            { name: 'Calcification Volume', icon: '/images/icon-aorta-cal.png' }
        ]
    };

    const abdoXpertProducts = [
        { name: 'AcutePanaMaster™', image: '/images/icon-acute.png' },
        { name: 'AppendiXpert™', image: '/images/icon-appendi.png', fundedByTubitak: true },
        { name: 'CholeciAssist™', image: '/images/icon-choleci.png' },
        { name: 'DivertiSense™', image: '/images/icon-diverti.png' },
        { name: 'UreteralStoneSense™', image: '/images/icon-ureteral.png' }
    ];

    return (
        <div className="container pb-8 pt-16">
            <div className="flex flex-col items-center gap-6">
                <div
                    className="relative flex h-[72px] w-[72px] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-b from-[#F37021] to-[#FF8C42]"
                    style={{
                        boxShadow:
                            '0px 1px 2px 0px rgba(0,0,0,0.10), 0px 3px 3px 0px rgba(0,0,0,0.09), 0px 7px 4px 0px rgba(0,0,0,0.05), 0px 12px 5px 0px rgba(0,0,0,0.01), 0px 19px 5px 0px rgba(0,0,0,0.00), inset 0px 2px 3px 0px rgba(255,255,255,0.25)'
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="40" viewBox="0 0 24 40" fill="none">
                        <g clipPath="url(#clip0_7009_11660)">
                            <path d="M0.499817 6.66717V19.999L12.0465 13.3342V0.00012207L0.499817 6.66717Z" fill="white" />
                            <path d="M0.499817 33.3331L12.0465 26.6661V13.3343L0.499817 19.999V33.3331Z" fill="#FFE8D6" />
                            <path d="M23.5932 19.9988L12.0466 13.3341L0.499878 19.9988L12.0466 26.6659L23.5932 19.9988Z" fill="#F37021" />
                            <path d="M23.5932 19.9988L12.0466 13.3341L0.499878 19.9988L12.0466 26.6659L23.5932 19.9988Z" fill="white" fillOpacity="0.6" style={{ mixBlendMode: 'screen' }} />
                            <path d="M23.5932 6.66718L12.0466 13.3342V26.666L23.5932 19.999V6.66718Z" fill="#FFE8D6" />
                            <path d="M23.5932 33.3331V19.999L12.0466 26.6661V40.0002L23.5932 33.3331Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_7009_11660">
                                <rect width="23.0934" height="40" fill="white" transform="translate(0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <h1 className="text-center text-3xl font-semibold leading-tight text-surface-950 lg:text-6xl lg:leading-tight">
                        Redefining
                        <br />
                        Medical Image Analysis
                    </h1>
                    <p className="text-center text-lg font-normal leading-normal text-surface-500 lg:text-2xl">Reduced Interpretation Time ⋅ Optimized Patient Management ⋅ Enhanced Radiology Workflow</p>
                </div>
            </div>

            <div className="mt-10 flex flex-col items-center gap-10">
                <div className="flex items-center gap-4">
                    <div className="bg-surface-50/50 flex items-center rounded-full border border-surface-200 px-4 py-2 text-center shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                        <div className="text-center text-lg font-medium leading-normal text-surface-700">Thoracic CT</div>
                    </div>
                    <div className="bg-surface-50/50 flex items-center rounded-full border border-surface-200 px-4 py-2 text-center shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                        <div className="text-center text-lg font-medium leading-normal text-surface-700">Abdominal CT</div>
                    </div>
                    <div className="bg-surface-50/50 flex items-center rounded-full border border-surface-200 px-4 py-2 text-center shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                        <div className="text-center text-lg font-medium leading-normal text-surface-700">ECG Gated CT</div>
                    </div>
                </div>

                <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
                    {/* AortaSense Pro Card */}
                    <AnimatedContainer delay={100} className="relative flex min-h-[420px] flex-col gap-8 overflow-hidden rounded-[28px] bg-gradient-to-b from-primary-600 to-primary-500 p-8 lg:p-12">
                        <Image src="/images/products-grid.svg" alt="Products Grid" width={40} height={40} className="absolute left-0 top-0 h-80 w-80 opacity-20" />
                        <div className="flex flex-col items-center gap-8">
                            <div className="relative h-20 w-20 lg:h-24 lg:w-24">
                                <Image src={aortaSense.image} alt={aortaSense.name} fill className="object-contain drop-shadow-2xl" />
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <h3 className="text-center text-3xl font-bold leading-tight text-white lg:text-4xl">{aortaSense.name}</h3>
                                <p className="text-center text-lg font-normal leading-relaxed text-white/80 lg:max-w-md lg:text-xl">{aortaSense.description}</p>
                            </div>
                            {/* Removed Features List */}
                        </div>
                        {aortaSense.fundedByTubitak && (
                            <div className="mt-auto flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/10 px-6 py-4 backdrop-blur-md transition-all hover:bg-white/15">
                                <span className="text-base font-medium text-white/90">Funded by</span>
                                <Image src="/images/logo-tubitak.png" alt="TUBITAK" width={100} height={32} className="h-8 w-auto object-contain brightness-0 invert" />
                                <div className="h-4 w-[1px] bg-white/20" />
                                <span className="text-sm font-medium text-white/60">Project No: 7230344</span>
                            </div>
                        )}
                        <div className="pointer-events-none absolute bottom-0 right-0 z-20 h-full w-full opacity-10" style={{ background: 'radial-gradient(circle at bottom right, white 10%, transparent 70%)' }}></div>
                    </AnimatedContainer>

                    {/* AbdoXpert Suite Card */}
                    <AnimatedContainer delay={300} className="relative flex min-h-[420px] flex-col gap-8 overflow-hidden rounded-[28px] bg-gradient-to-b from-primary-600 to-primary-500 p-8 lg:p-12">
                        <Image src="/images/products-grid.svg" alt="Products Grid" width={40} height={40} className="absolute right-0 top-0 h-80 w-80 opacity-20" />
                        <div className="flex flex-col items-center gap-8">
                            <div className="relative h-20 w-20 lg:h-24 lg:w-24">
                                <Image src="/images/icon-abdoxpertsuite.png" alt="AbdoXpert Suite" fill className="object-contain drop-shadow-xl" />
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <h3 className="text-center text-3xl font-bold leading-tight text-white lg:text-4xl">AbdoXpert Suite™</h3>
                                <p className="text-center text-lg font-normal leading-relaxed text-white/80 lg:max-w-md lg:text-xl">
                                    Comprehensive AI-driven diagnostic suite for abdominal imaging, optimizing detection and analysis across multiple organs.
                                </p>
                            </div>
                            {/* Removed Sub-products List */}
                        </div>
                        <div className="mt-auto flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/10 px-6 py-4 backdrop-blur-md transition-all hover:bg-white/15">
                            <span className="text-base font-medium text-white/90">Funded by</span>
                            <Image src="/images/logo-tubitak.png" alt="TUBITAK" width={100} height={32} className="h-8 w-auto object-contain brightness-0 invert" />
                            <div className="h-4 w-[1px] bg-white/20" />
                            <span className="text-sm font-medium text-white/60">Project No: 7251157</span>
                        </div>
                        <div className="pointer-events-none absolute bottom-0 right-0 z-20 h-full w-full opacity-10" style={{ background: 'radial-gradient(circle at bottom left, white 10%, transparent 70%)' }}></div>
                    </AnimatedContainer>
                </div>
            </div>
        </div>
    );
};

export default Products;
