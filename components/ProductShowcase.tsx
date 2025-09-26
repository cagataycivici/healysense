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
        <div className={`z-30 hidden w-full max-w-[1152px] items-start justify-between overflow-hidden p-6 lg:flex ${className}`}>
            {products.map((product, index) => (
                <div key={index} className="flex items-center justify-center gap-3">
                    <div className="relative h-8 w-8">
                        <Image src={product.image} alt={product.name} width={32} height={32} className="h-8 w-8 object-contain" />
                    </div>
                    <div className="text-lg font-semibold leading-7 text-white/60">{product.name}</div>
                </div>
            ))}
        </div>
    );
};

export default ProductShowcase;
