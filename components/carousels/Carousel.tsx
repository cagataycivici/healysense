'use client';
import React, { forwardRef, useImperativeHandle } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import { cn } from '@/lib/utils';

type PropType = {
    options?: EmblaOptionsType;
    height?: string;
    spacing?: string;
    size?: string;
    hideButtons?: boolean;
    hideMask?: boolean;
    refContainerClass?: string;
};

const Carousel = forwardRef<
    {
        onPrev: () => void;
        onNext: () => void;
    },
    React.HTMLAttributes<HTMLDivElement> & PropType
>((props, ref) => {
    const { options, children, className, refContainerClass, hideButtons = false, hideMask = false, height = '25rem', spacing = '1rem', size = '20%' } = props;

    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

    useImperativeHandle(ref, () => ({
        onPrev: onPrevButtonClick,
        onNext: onNextButtonClick
    }));

    return (
        <section
            className={cn('relative m-auto max-w-[88rem]', className)}
            style={
                {
                    '--slide-height': height,
                    '--slide-spacing': spacing,
                    '--slide-size': size
                } as React.CSSProperties
            }
        >
            {!hideMask ? (
                <>
                    <div className="pointer-events-none absolute left-0 z-10 h-full w-[25%] bg-[linear-gradient(to_right,white_12%,transparent_100%)]"></div>
                    <div className="pointer-events-none absolute right-0 z-10 h-full w-[25%] bg-[linear-gradient(to_left,white_12%,transparent_100%)]"></div>
                </>
            ) : null}
            <div className={cn('block', refContainerClass?.includes('overflow-visible') ? 'overflow-visible' : 'overflow-hidden', refContainerClass)} ref={emblaRef}>
                <div className="embla__container ml-[calc(var(--slide-spacing)*-1)] flex touch-pan-y touch-pinch-zoom py-4 [backface-visibility:hidden]">{children}</div>
            </div>
            {!hideButtons ? (
                <div className="mx-auto mt-8 flex w-fit items-center gap-6">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            ) : null}
        </section>
    );
});
Carousel.displayName = 'Carousel';
export default Carousel;

export const CarouselItem: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => {
    return (
        <div {...props} className={cn('min-w-0 flex-[0_0_var(--slide-size)] pl-[var(--slide-spacing)]', className)}>
            <div className="flex h-[var(--slide-height)] select-none items-center justify-center">{children}</div>
        </div>
    );
};
