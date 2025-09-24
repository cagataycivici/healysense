import { cn } from '@/lib/utils';
import React from 'react';
import AnimatedContainer from './AnimatedContainer';

type FooterProps = {
    image?: string;
    transparent?: boolean;
    noContainer?: boolean;
};

const Footer: React.FC<React.HTMLAttributes<HTMLElement> & FooterProps> = ({ className, image, transparent = false, noContainer, children, ...props }) => {
    return (
        <AnimatedContainer>
            <div
                className={cn(
                    'w-full flex justify-center px-4 lg:px-[164.57px] pt-8 pb-[164.57px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.06)] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.05)] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.03)] shadow-[0px_8px_3px_0px_rgba(0,0,0,0.01)] shadow-[0px_12px_3px_0px_rgba(0,0,0,0.00)] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.06)] shadow-[inset_0px_-1px_1px_0px_rgba(0,0,0,0.06)] overflow-hidden',
                    className
                )}
                {...props}
            >
                <div className="flex-1 p-8 bg-gradient-to-b from-violet-800 to-violet-700 rounded-[28px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.06)] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.05)] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.03)] shadow-[0px_8px_3px_0px_rgba(0,0,0,0.01)] shadow-[0px_12px_3px_0px_rgba(0,0,0,0.00)] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.06)] shadow-[inset_0px_-1px_1px_0px_rgba(0,0,0,0.06)] inline-flex flex-col justify-start items-start gap-8 overflow-hidden relative container">
                    {/* Decorative circles */}
                    <div className="absolute -top-[600px] -left-[600px] size-[1200px] opacity-50 bg-gradient-to-b from-white/5 to-white/0 rounded-full shadow-[0px_-18px_58px_0px_rgba(0,0,0,0.06)] border border-white" />
                    <div className="absolute -top-[500px] -left-[500px] size-[1000px] opacity-50 bg-gradient-to-b from-white/5 to-white/0 rounded-full shadow-[0px_-18px_58px_0px_rgba(0,0,0,0.06)] border border-white" />
                    <div className="absolute -top-[400px] -left-[400px] size-[800px] opacity-50 bg-gradient-to-b from-white/10 to-white/0 rounded-full shadow-[0px_-18px_58px_0px_rgba(0,0,0,0.06)] border border-white" />

                    <div className="self-stretch inline-flex justify-between items-start relative z-10">
                        <div className="inline-flex flex-col justify-start items-start gap-6">
                            <div className="inline-flex justify-center items-center gap-[6.27px]">
                                <div className="w-[23px] h-[40px] relative overflow-hidden">
                                    <div className="w-[11.50px] h-[20px] left-0 top-0 absolute bg-white" />
                                    <div className="w-[11.50px] h-[20px] left-0 top-[13.33px] absolute bg-violet-200" />
                                    <div className="w-[23px] h-[13.33px] left-0 top-[13.33px] absolute bg-violet-800" />
                                    <div className="w-[23px] h-[13.33px] left-0 top-[13.33px] absolute bg-blend-screen bg-white/60" />
                                    <div className="w-[11.50px] h-[20px] left-[11.50px] top-[6.67px] absolute bg-violet-200" />
                                    <div className="w-[11.50px] h-[20px] left-[11.50px] top-[20px] absolute bg-white" />
                                </div>
                                <div className="justify-center">
                                    <span className="text-white/60 text-base font-extrabold uppercase tracking-wide">healy</span>
                                    <span className="text-white text-base font-extrabold uppercase tracking-wide">sense</span>
                                </div>
                            </div>
                            <div className="flex flex-col justify-start items-start gap-2">
                                <div className="self-stretch justify-start text-white text-base font-normal leading-normal">DEPARK Nar Grup, Ofis: P2/2 Izmir/Turkiye</div>
                                <div className="self-stretch justify-start text-white text-base font-normal leading-normal">healysense@gmail.com</div>
                            </div>
                            <div className="inline-flex justify-start items-start gap-[9.14px]">
                                <div className="px-4 py-2 bg-white/5 rounded-[99px] outline outline-[0.50px] outline-offset-[-0.50px] outline-white/10 backdrop-blur-xs flex justify-start items-start gap-2 overflow-hidden">
                                    <div className="size-4 relative overflow-hidden">
                                        <div className="size-4 left-0 top-0 absolute bg-Surface-0" />
                                    </div>
                                </div>
                                <div className="px-4 py-2 bg-white/5 rounded-[99px] outline outline-[0.50px] outline-offset-[-0.50px] outline-white/10 backdrop-blur-xs flex justify-start items-start gap-2 overflow-hidden">
                                    <div className="size-4 relative overflow-hidden">
                                        <div className="w-4 h-[12.69px] left-0 top-[0.66px] absolute bg-Surface-0" />
                                    </div>
                                </div>
                                <div className="px-4 py-2 bg-white/5 rounded-[99px] outline outline-[0.50px] outline-offset-[-0.50px] outline-white/10 backdrop-blur-xs flex justify-start items-start gap-2 overflow-hidden">
                                    <div className="size-4 relative overflow-hidden">
                                        <div className="size-4 left-0 top-0 absolute bg-Surface-0" />
                                    </div>
                                </div>
                                <div className="px-4 py-2 bg-white/5 rounded-[99px] outline outline-[0.50px] outline-offset-[-0.50px] outline-white/10 backdrop-blur-xs flex justify-start items-start gap-2 overflow-hidden">
                                    <div className="size-4 relative overflow-hidden">
                                        <div className="w-4 h-[9.86px] left-0 top-[2.07px] absolute bg-Surface-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="backdrop-blur-[1.50px] flex justify-start items-start gap-6">
                            <div className="justify-end text-white/70 text-base font-medium leading-normal">Home</div>
                            <div className="justify-end text-white/70 text-base font-medium leading-normal">Solutions</div>
                            <div className="justify-end text-white/70 text-base font-medium leading-normal">Showreel</div>
                            <div className="justify-end text-white/70 text-base font-medium leading-normal">Integration</div>
                            <div className="justify-end text-white/70 text-base font-medium leading-normal">Team</div>
                            <div className="justify-end text-white/70 text-base font-medium leading-normal">Experts</div>
                            <div className="justify-end text-white/70 text-base font-medium leading-normal">FAQ</div>
                            <div className="justify-end text-white/70 text-base font-medium leading-normal">Book a Demo</div>
                        </div>
                    </div>
                    <div className="w-[1082px] h-0 outline outline-1 outline-offset-[-0.50px] outline-white/10 relative z-10" />
                    <div className="self-stretch inline-flex justify-center items-start gap-8 relative z-10">
                        <div className="justify-end text-white/70 text-base font-medium leading-normal">PDPL Policy</div>
                        <div className="justify-end text-white/70 text-base font-medium leading-normal">Information Security</div>
                        <div className="justify-end text-white/70 text-base font-medium leading-normal">Clarification Text</div>
                        <div className="justify-end text-white/70 text-base font-medium leading-normal">Storage & Disposal</div>
                    </div>
                </div>
            </div>
        </AnimatedContainer>
    );
};

export default Footer;

const socials = [
    {
        icon: 'pi pi-youtube',
        link: ''
    },
    {
        icon: 'pi pi-twitter',
        link: ''
    },
    {
        icon: 'pi pi-discord',
        link: ''
    }
];

const footerNavsData = [
    {
        title: 'Landings',
        items: [
            {
                label: 'Travel',
                to: '/pages/travel'
            },
            {
                label: 'SaaS',
                to: '/pages/saas'
            },
            {
                label: 'Startup',
                to: '/pages/startup'
            },
            {
                label: 'Enterprise',
                to: '/pages/enterprise'
            },
            {
                label: 'E-Learning',
                to: '/pages/e-learning'
            },
            {
                label: 'Real Estate',
                to: '/pages/real-estate'
            },
            {
                label: 'Logistics',
                to: '/pages/logistic'
            },
            {
                label: 'Agency',
                to: '/pages/agency'
            }
        ]
    },
    {
        title: 'Secondary Pages',
        items: [
            {
                label: 'About',
                to: '/second-pages/about'
            },
            {
                label: 'Pricing',
                to: '/second-pages/pricing'
            },
            {
                label: 'Blog',
                to: '/second-pages/blog'
            },
            {
                label: 'Blog Detail',
                to: '/second-pages/blog/detail'
            },
            {
                label: 'Contact',
                to: '/second-pages/contact'
            }
        ]
    },
    {
        title: 'Account Pages',
        items: [
            {
                label: 'Sign Up',
                to: '/second-pages/signup'
            },
            {
                label: 'Sign In',
                to: '/second-pages/signin'
            },
            {
                label: 'Error',
                to: '/second-pages/404'
            },
            {
                label: 'Password Reset',
                to: '/second-pages/reset-password'
            },
            {
                label: 'Account General',
                to: '/second-pages/account'
            }
        ]
    }
];
