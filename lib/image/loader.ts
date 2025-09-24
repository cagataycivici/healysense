import type { ImageLoaderProps } from 'next/image';

export default function myImageLoader({ src, width, quality }: ImageLoaderProps) {
    // Handle local images (starting with / or images/)
    if (src.startsWith('/images/') || src.startsWith('images/')) {
        return `${src}?w=${width}&q=${quality || 75}`;
    }

    // Handle other images through PrimeFaces CDN
    return `https://primefaces.org/cdn/templates/genesis/${src}?w=${width}&q=${quality || 75}`;
}
