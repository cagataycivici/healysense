import { cn } from '@/lib/utils';
import React from 'react';
import AnimatedContainer from './AnimatedContainer';
import { Accordion, AccordionItem } from './ui/accordion';
const FAQ: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
    return (
        <div className={cn('w-full max-w-[1440px] px-4 lg:px-[361.14px] pt-32 pb-[139.43px] mx-auto flex flex-col justify-start items-center gap-14', className)} {...props}>
            <div className="self-stretch flex flex-col justify-start items-center gap-6">
                <div className="size-[72px] relative bg-gradient-to-b from-violet-800 to-violet-700 rounded-3xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] shadow-[0px_3px_3px_0px_rgba(0,0,0,0.09)] shadow-[0px_7px_4px_0px_rgba(0,0,0,0.05)] shadow-[0px_12px_5px_0px_rgba(0,0,0,0.01)] shadow-[0px_19px_5px_0px_rgba(0,0,0,0.00)] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.25)] overflow-hidden">
                    <div className="size-[40px] left-[16px] top-[16px] absolute overflow-hidden">
                        <div className="w-[23.52px] h-[23.44px] left-0 top-[2.42px] absolute bg-gradient-to-b from-white to-white/0" />
                        <div className="w-[23.37px] h-[23.44px] left-[16.63px] top-[14.14px] absolute bg-gradient-to-b from-white to-white/0" />
                    </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-center gap-4">
                    <div className="self-stretch text-center justify-end text-surface-950 text-3xl lg:text-6xl font-semibold leading-tight lg:leading-[65.62px]">Frequently Asked Questions</div>
                    <div className="self-stretch text-center justify-end text-surface-500 text-xl lg:text-2xl font-normal leading-loose">Find quick answers to the most common questions.</div>
                </div>
            </div>
            <div className="self-stretch">
                <Accordion className="">
                    {faqData.map((item, index) => (
                        <AnimatedContainer key={index} delay={150 * index} visibleClass="!slide-in-from-top-20">
                            <AccordionItem {...item} />
                        </AnimatedContainer>
                    ))}
                </Accordion>
            </div>
        </div>
    );
};

export default FAQ;

const faqData = [
    {
        title: 'What clinical challenges does address?',
        content:
            'Healysense is designed to assist hospital networks and radiologists by leveraging AI to enhance both the efficiency and accuracy of medical image interpretation. Its outputs are intended to complement the clinician’s expertise—not replace it. The final interpretation and diagnosis always remain the responsibility of the healthcare professional.'
    },
    {
        title: 'How are results displayed?',
        content: 'Results are displayed through our intuitive interface with clear visualizations, confidence scores, and detailed annotations that help clinicians make informed decisions quickly and accurately.'
    }
];
