import { cn } from '@/lib/utils';
import React from 'react';

/**
 * HealySense logo mark.
 * - `brand`: official purple tones (for light backgrounds, favicon).
 * - `light`: white tones (for purple/dark backgrounds such as navbar, footer, icon boxes).
 */
const PALETTES = {
    brand: { dark: '#5A23E7', mid: '#9166FF', light: '#A77AFF' },
    light: { dark: '#FFFFFF', mid: '#CDBBFF', light: '#E6DCFF' }
} as const;

type LogoMarkProps = React.SVGProps<SVGSVGElement> & { variant?: keyof typeof PALETTES };

export function LogoMark({ variant = 'light', className, ...props }: LogoMarkProps) {
    const c = PALETTES[variant];
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="40" viewBox="0 0 24 40" fill="none" aria-hidden="true" className={cn('shrink-0', className)} {...props}>
            <path d="M0.5 6.667V20L12.047 13.334V0L0.5 6.667Z" fill={c.dark} />
            <path d="M0.5 33.333L12.047 26.666V13.334L0.5 20V33.333Z" fill={c.mid} />
            <path d="M23.593 20L12.047 13.334L0.5 20L12.047 26.666L23.593 20Z" fill={c.light} />
            <path d="M23.593 6.667L12.047 13.334V26.666L23.593 20V6.667Z" fill={c.mid} />
            <path d="M23.593 33.333V20L12.047 26.666V40L23.593 33.333Z" fill={c.dark} />
        </svg>
    );
}

type LogoProps = React.HTMLAttributes<HTMLDivElement> & { size?: 'md' | 'lg' };

/** Logo mark + "HEALYSENSE" wordmark, for use on purple backgrounds. */
export function Logo({ size = 'lg', className, ...props }: LogoProps) {
    const text = size === 'lg' ? 'text-[20px] tracking-wider' : 'text-base tracking-wide';
    return (
        <div className={cn('flex items-center gap-3', className)} {...props}>
            <LogoMark className={size === 'lg' ? 'h-10 w-6' : 'h-9 w-[22px]'} />
            <div className={cn('font-extrabold uppercase leading-none', text)}>
                <span className="text-white/70">healy</span>
                <span className="text-white">sense</span>
            </div>
        </div>
    );
}
