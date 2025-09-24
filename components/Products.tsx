import AnimatedContainer from '@/components/AnimatedContainer';
import Image from 'next/image';

const Products = () => {
    const products = [
        { name: 'AortaSense Pro', description: 'Through the integration of AI technology and computing modules, we develop a hybrid system for the aorta that automates medical image interpretation.', image: '/images/hero-product-1.png' },
        {
            name: 'AcutePanaMaster',
            description: 'We are working on an AI-driven decision support system for acute pancreatitis that aims to harness the power of AI to provide accurate and reliable information derived from CT images.',
            image: '/images/hero-product-2.png'
        },
        { name: 'AppendiXpert', description: 'Advanced image analysis meets efficiency: AI-driven technology for Acute Appendicitis from CT scans.', image: '/images/hero-product-3.png' },
        { name: 'CholeciAssist', description: 'Healysense leverages deep learning algorithms to extract insights from CT images and improve the diagnosis of Acute Cholecystitis.', image: '/images/hero-product-4.png' },
        { name: 'DivertiSense', description: 'Unleash Diagnostic Confidence: AI-driven decision support for Acute Diverticulitis from CT images.', image: '/images/hero-product-5.png' },
        {
            name: 'UreteralStoneSense',
            description: 'Utilizing deep learning algorithms and image analysis techniques to assist clinicians in accurate Kidney/Ureter Stone detection, localization and characterization for personalized treatment strategies.',
            image: '/images/hero-product-6.png'
        }
    ];

    return (
        <div className="w-full max-w-[1152px] mx-auto px-4 lg:mt-40 mt-24">
            <div className="flex flex-col items-center gap-6">
                <div
                    className="w-[72px] h-[72px] relative bg-gradient-to-b from-violet-800 to-violet-700 rounded-3xl flex items-center justify-center overflow-hidden"
                    style={{
                        boxShadow:
                            '0px 1px 2px 0px rgba(0,0,0,0.10), 0px 3px 3px 0px rgba(0,0,0,0.09), 0px 7px 4px 0px rgba(0,0,0,0.05), 0px 12px 5px 0px rgba(0,0,0,0.01), 0px 19px 5px 0px rgba(0,0,0,0.00), inset 0px 2px 3px 0px rgba(255,255,255,0.25)'
                    }}
                ></div>
                <div className="flex flex-col items-center gap-4">
                    <h1 className="text-3xl lg:text-6xl text-surface-950 font-semibold text-center leading-tight lg:leading-[65.62px]">
                        Redefining
                        <br />
                        Medical Image Analysis
                    </h1>
                    <p className="text-lg lg:text-2xl text-surface-500 font-normal text-center leading-loose">Reduced Interpretation Time ⋅ Optimized Patient Management ⋅ Enhanced Radiology Workflow</p>
                </div>
            </div>

            <div className="flex flex-col items-center gap-10 mt-10">
                {/* Category Tags */}
                <div className="flex items-center gap-4">
                    <div className="px-4 py-2 bg-surface-0 rounded-full shadow-[0px_1px_2px_0px_rgba(18,18,23,0.05)] border border-surface-200 flex items-center">
                        <div className="text-surface-950 text-lg font-normal leading-7">Vascular</div>
                    </div>
                    <div className="px-4 py-2 bg-surface-0 rounded-full shadow-[0px_1px_2px_0px_rgba(18,18,23,0.05)] border border-surface-200 flex items-center">
                        <div className="text-surface-950 text-lg font-normal leading-7">Abdominal</div>
                    </div>
                    <div className="px-4 py-2 bg-surface-0 rounded-full shadow-[0px_1px_2px_0px_rgba(18,18,23,0.05)] border border-surface-200 flex items-center">
                        <div className="text-surface-950 text-lg font-normal leading-7">Urological</div>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="w-full flex flex-col gap-6">
                    {/* First Row - 3 products */}
                    <div className="flex flex-col lg:flex-row gap-6">
                        {products.slice(0, 3).map((product, index) => (
                            <AnimatedContainer key={index} delay={index * 200} className="flex-1 p-8 relative bg-gradient-to-b from-violet-800 to-violet-700 rounded-[28px] flex flex-col gap-8 overflow-hidden">
                                <Image src="/images/products-grid.svg" alt="Products Grid" width={40} height={40} className="w-60 h-60 absolute top-0 left-0" />
                                <div className="flex flex-col items-center">
                                    <div
                                        className="w-24 h-24 relative bg-violet-950 rounded-3xl flex items-center justify-center overflow-hidden"
                                        style={{
                                            boxShadow: 'inset 0px -14.88px 12.48px -12.48px rgba(90,35,231,0.65), inset 0px -1.92px 1.44px -1.44px rgba(255,255,255,0.65), inset 0px 1.92px 1.44px -1.44px rgba(255,255,255,0.15)'
                                        }}
                                    >
                                        <Image src={product.image} alt={product.name} width={48} height={48} className="w-12 h-12 object-contain" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center gap-4">
                                    <h3 className="text-white/90 text-2xl font-semibold text-center leading-loose">{product.name}</h3>
                                    <p className="text-white/70 text-lg font-normal text-center leading-7">{product.description}</p>
                                </div>
                                <div className="absolute w-full h-full right-0 bottom-0 opacity-10 pointer-events-none z-20" style={{ background: 'radial-gradient(circle, white 10%, transparent 100%)' }}></div>
                            </AnimatedContainer>
                        ))}
                    </div>

                    {/* Second Row - 3 products */}
                    <div className="flex flex-col lg:flex-row gap-6">
                        {products.slice(3, 6).map((product, index) => (
                            <AnimatedContainer key={index + 3} delay={(index + 3) * 200} className="flex-1 p-8 relative bg-gradient-to-b from-violet-800 to-violet-700 rounded-[28px] flex flex-col gap-8 overflow-hidden">
                                <Image src="/images/products-grid.svg" alt="Products Grid" width={40} height={40} className="w-60 h-60 absolute top-0 left-0" />
                                <div className="flex flex-col items-center">
                                    <div
                                        className="w-24 h-24 relative bg-violet-950 rounded-3xl flex items-center justify-center overflow-hidden"
                                        style={{
                                            boxShadow: 'inset 0px -14.88px 12.48px -12.48px rgba(90,35,231,0.65), inset 0px -1.92px 1.44px -1.44px rgba(255,255,255,0.65), inset 0px 1.92px 1.44px -1.44px rgba(255,255,255,0.15)'
                                        }}
                                    >
                                        <Image src={product.image} alt={product.name} width={48} height={48} className="w-12 h-12 object-contain" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center gap-4">
                                    <h3 className="text-white/90 text-2xl font-semibold text-center leading-loose">{product.name}</h3>
                                    <p className="text-white/70 text-lg font-normal text-center leading-7">{product.description}</p>
                                </div>
                                <div className="absolute w-full h-full right-0 bottom-0 opacity-10 pointer-events-none z-20" style={{ background: 'radial-gradient(circle, white 10%, transparent 100%)' }}></div>
                            </AnimatedContainer>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
