'use client';
import React from 'react';
import { cn } from '@/lib/utils';

type AccordionItemProps = {
    title: string;
    content: string;
};

const AccordionItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & AccordionItemProps>(({ title, content, className, ...props }, ref) => {
    const contentRef = React.useRef<HTMLDivElement | null>(null);
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <div className={cn('overflow-hidden rounded-3xl border-0 px-6 shadow-stroke', className)} ref={ref} {...props}>
            <div onClick={handleClick} className={`transition-padding flex cursor-pointer select-none items-start gap-2 py-6 duration-200 ${isOpen ? 'pb-4' : 'pb-6'}`}>
                <h3 className="flex-1 text-xl font-semibold text-surface-950">{title}</h3>
                <span>
                    <i className={!isOpen ? 'pi pi-plus' : 'pi pi-minus' + ' text-sm text-surface-950'}></i>
                </span>
            </div>
            <div
                ref={contentRef}
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                    maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
                    opacity: isOpen ? `1` : '0',
                    transform: isOpen ? `scale(1)` : 'scale(0.98)'
                }}
            >
                <p className="pb-6 text-lg font-medium text-surface-500">{content}</p>
            </div>
        </div>
    );
});

AccordionItem.displayName = 'AccordionItem';

const Accordion = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, children, ...props }, ref) => {
    return (
        <div className={cn('flex flex-col gap-4', className)} ref={ref} {...props}>
            {children}
        </div>
    );
});
Accordion.displayName = 'Accordion';

export { Accordion, AccordionItem };
