import AnimatedContainer from '@/components/AnimatedContainer';
import Image from 'next/image';

const Products = () => {
    const products = [
        { name: 'AortaSense Pro', description: 'Automated AI interpretation for aortic CT images, improving efficiency and reliability.', image: '/images/icon-aorta.png' },
        {
            name: 'AcutePanaMaster',
            description: 'AI decision support for acute pancreatitis, delivering fast and accurate insights from CT scans.',
            image: '/images/icon-acute.png'
        },
        { name: 'AppendiXpert', description: 'Smart analysis of CT images to detect acute appendicitis with high precision.', image: '/images/icon-appendi.png' },
        { name: 'CholeciAssist', description: 'Deep learning–powered tool enhancing diagnosis of acute cholecystitis from CT images.', image: '/images/icon-choleci.png' },
        { name: 'DivertiSense', description: 'AI support for accurate detection and evaluation of acute diverticulitis.', image: '/images/icon-diverti.png' },
        {
            name: 'UreteralStoneSense',
            description: 'Advanced AI for kidney and ureter stone detection and localization.',
            image: '/images/icon-ureteral.png'
        }
    ];

    return (
        <div className="container pb-8 pt-16">
            <div className="flex flex-col items-center gap-6">
                <div
                    className="relative flex h-[72px] w-[72px] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-b from-[#531EAF] to-[#641BE1]"
                    style={{
                        boxShadow:
                            '0px 1px 2px 0px rgba(0,0,0,0.10), 0px 3px 3px 0px rgba(0,0,0,0.09), 0px 7px 4px 0px rgba(0,0,0,0.05), 0px 12px 5px 0px rgba(0,0,0,0.01), 0px 19px 5px 0px rgba(0,0,0,0.00), inset 0px 2px 3px 0px rgba(255,255,255,0.25)'
                    }}
                >
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
                    <div className="flex items-center rounded-full border border-surface-200 bg-surface-0 px-4 py-2 shadow-[0px_1px_2px_0px_rgba(18,18,23,0.05)]">
                        <div className="text-lg font-normal leading-normal text-surface-950">Thoracic CT</div>
                    </div>
                    <div className="flex items-center rounded-full border border-surface-200 bg-surface-0 px-4 py-2 shadow-[0px_1px_2px_0px_rgba(18,18,23,0.05)]">
                        <div className="text-lg font-normal leading-normal text-surface-950">Abdominal CT</div>
                    </div>
                    <div className="flex items-center rounded-full border border-surface-200 bg-surface-0 px-4 py-2 shadow-[0px_1px_2px_0px_rgba(18,18,23,0.05)]">
                        <div className="text-lg font-normal leading-normal text-surface-950">ECG Gated CT</div>
                    </div>
                </div>

                <div className="flex w-full flex-col gap-6">
                    <div className="flex flex-col gap-6 lg:flex-row">
                        {products.slice(0, 3).map((product, index) => (
                            <AnimatedContainer key={index} delay={index * 200} className="relative flex flex-1 flex-col gap-8 overflow-hidden rounded-[28px] bg-gradient-to-b from-violet-800 to-violet-700 p-8">
                                <Image src="/images/products-grid.svg" alt="Products Grid" width={40} height={40} className="absolute left-0 top-0 h-60 w-60" />
                                <div className="flex flex-col items-center">
                                    <Image src={product.image} alt={product.name} width={48} height={48} className="h-24 w-24 object-contain" />
                                </div>
                                <div className="flex flex-col items-center gap-4">
                                    <h3 className="text-center text-2xl font-semibold leading-normal text-white/90">{product.name}</h3>
                                    <p className="text-center text-lg font-normal leading-normal text-white/70">{product.description}</p>
                                </div>
                                <div className="pointer-events-none absolute bottom-0 right-0 z-20 h-full w-full opacity-10" style={{ background: 'radial-gradient(circle, white 10%, transparent 100%)' }}></div>
                            </AnimatedContainer>
                        ))}
                    </div>

                    <div className="flex flex-col gap-6 lg:flex-row">
                        {products.slice(3, 6).map((product, index) => (
                            <AnimatedContainer key={index + 3} delay={(index + 3) * 200} className="relative flex flex-1 flex-col gap-8 overflow-hidden rounded-[28px] bg-gradient-to-b from-violet-800 to-violet-700 p-8">
                                <Image src="/images/products-grid.svg" alt="Products Grid" width={40} height={40} className="absolute left-0 top-0 h-60 w-60" />
                                <div className="flex flex-col items-center">
                                    <Image src={product.image} alt={product.name} width={48} height={48} className="h-24 w-24 object-contain" />
                                </div>
                                <div className="flex flex-col items-center gap-4">
                                    <h3 className="text-center text-2xl font-semibold leading-normal text-white/90">{product.name}</h3>
                                    <p className="text-center text-lg font-normal leading-normal text-white/70">{product.description}</p>
                                </div>
                                <div className="pointer-events-none absolute bottom-0 right-0 z-20 h-full w-full opacity-10" style={{ background: 'radial-gradient(circle, white 10%, transparent 100%)' }}></div>
                            </AnimatedContainer>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
