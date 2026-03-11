import { cn } from '@/lib/utils';
import React from 'react';
import AnimatedContainer from './AnimatedContainer';
import { Accordion, AccordionItem } from './ui/accordion';
const FAQ: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
    return (
        <div className={cn('container flex flex-col items-center justify-start gap-14 pb-8 pt-16', className)} {...props}>
            <div className="flex flex-col items-center justify-start gap-6 self-stretch">
                <div
                    className="relative flex size-[72px] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-b from-[#F37021] to-[#FF8C42]"
                    style={{
                        boxShadow:
                            '0px 1px 2px 0px rgba(0,0,0,0.10), 0px 3px 3px 0px rgba(0,0,0,0.09), 0px 7px 4px 0px rgba(0,0,0,0.05), 0px 12px 5px 0px rgba(0,0,0,0.01), 0px 19px 5px 0px rgba(0,0,0,0.00), inset 0px 2px 3px 0px rgba(255,255,255,0.25)'
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path
                            d="M1.6975 25.8594H11.7969C18.2582 25.8594 23.5156 20.602 23.5156 14.1406C23.5156 7.6793 18.2582 2.42188 11.7969 2.42188C5.33555 2.42188 0 7.6793 0 14.1406C0 17.2294 1.29578 20.1774 3.44609 22.362L1.6975 25.8594ZM12.9688 21.1719H10.625V18.8281H12.9688V21.1719ZM11.7969 7.10938C14.3821 7.10938 16.4844 9.21164 16.4844 11.7969C16.4844 13.5478 15.5196 15.1409 13.9666 15.9522C13.351 16.2749 12.9688 16.9627 12.9688 17.6562H10.625C10.625 16.0289 11.4891 14.603 12.8795 13.8762C13.6577 13.4688 14.1406 12.6723 14.1406 11.7969C14.1406 10.5048 13.0889 9.45312 11.7969 9.45312C10.5048 9.45312 9.45312 10.5048 9.45312 11.7969H7.10938C7.10938 9.21164 9.21164 7.10938 11.7969 7.10938Z"
                            fill="url(#paint0_linear_7037_4530)"
                        />
                        <path
                            d="M25.8469 14.3862C25.7433 20.3324 21.9345 25.3776 16.6328 27.3284C17.3649 33.0912 22.2447 37.5781 28.203 37.5781H38.3024L36.5538 34.0808C38.7041 31.8962 39.9999 28.9481 39.9999 25.8594C39.9999 19.3873 34.6751 14.1406 28.203 14.1406C27.3966 14.1406 26.6088 14.2257 25.8469 14.3862ZM34.0624 29.375H24.6874V27.0312H34.0624V29.375ZM34.0624 24.6875H24.6874V22.3438H34.0624V24.6875Z"
                            fill="url(#paint1_linear_7037_4530)"
                        />
                        <defs>
                            <linearGradient id="paint0_linear_7037_4530" x1="11.7578" y1="2.71499" x2="11.7578" y2="25.8594" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_7037_4530" x1="28.3164" y1="14.4337" x2="28.3164" y2="37.5781" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="flex flex-col items-center justify-start gap-4 self-stretch">
                    <div className="justify-end self-stretch text-center text-3xl font-semibold leading-tight text-surface-950 lg:text-6xl lg:leading-tight">Frequently Asked Questions</div>
                    <div className="justify-end self-stretch text-center text-xl font-normal leading-normal text-surface-500 lg:text-2xl">Find quick answers to the most common questions.</div>
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
