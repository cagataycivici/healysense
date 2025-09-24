'use client';
import Image from 'next/image';

const ProductShowcase = ({ className = '' }: { className?: string }) => {
    const products = [
        { name: 'AortaSense Pro', image: '/images/hero-product-1.png' },
        { name: 'AcutePanaMaster', image: '/images/hero-product-2.png' },
        { name: 'AppendiXpert', image: '/images/hero-product-3.png' },
        { name: 'CholeciAssist', image: '/images/hero-product-4.png' },
        { name: 'DivertiSense', image: '/images/hero-product-5.png' },
        { name: 'UreteralStoneSense', image: '/images/hero-product-6.png' }
    ];

    return (
        <div className={`w-full max-w-[1152px] p-6 hidden lg:flex justify-between items-start overflow-hidden ${className}`}>
            {products.map((product, index) => (
                <div key={index} className="flex justify-center items-center gap-3">
                    <div className="w-8 h-8 relative">
                        <Image src={product.image} alt={product.name} width={32} height={32} className="w-8 h-8 object-contain" />
                    </div>
                    <div className="text-white/60 text-lg font-semibold leading-7">{product.name}</div>
                </div>
            ))}
        </div>
    );
};

export default ProductShowcase;
