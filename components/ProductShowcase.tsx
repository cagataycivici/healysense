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
        <div className={`container z-30 hidden w-full items-start justify-between overflow-hidden p-6 lg:flex ${className}`}>
            {products.map((product, index) => (
                <div key={index} className="flex items-center justify-center gap-3">
                    <div className="relative h-10 w-10">
                        <Image src={product.image} alt={product.name} width={32} height={32} className="h-10 w-10 object-contain" />
                    </div>
                    <div className="text-lg font-semibold leading-normal text-white/90">{product.name}</div>
                </div>
            ))}
        </div>
    );
};

export default ProductShowcase;
