import AnimatedContainer from '@/components/AnimatedContainer';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import React from 'react';

const Contact = () => {
    return (
        <div className="container pb-[30rem] pt-16">
            <div className="relative mx-auto mb-96 rounded-3xl bg-main-gradient px-10 pb-40 pt-10 lg:mb-40 lg:max-w-none lg:rounded-4xl lg:p-20">
                <div className="lg:w-1/2">
                    <h1 className="title text-3xl !leading-tight lg:text-5xl">Ready to Integrate Our AI Solutions Into Your Workflow</h1>
                    <p className="mt-4 text-lg text-white/64 lg:text-xl">Start using the power of artificial intelligence to enrich your radiologic workflow.</p>
                </div>
                <AnimatedContainer className="mt-10 h-0 lg:absolute lg:right-14 lg:top-14 lg:mt-0">
                    <form className="mx-auto max-w-lg space-y-4 rounded-3xl bg-surface-0 p-6 shadow-blue-card dark:bg-surface-900 dark:shadow-black-card lg:w-[32rem] lg:rounded-4xl lg:p-8">
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-surface-500">Name</label>
                            <Input />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-surface-500">Email Address</label>
                            <Input />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-surface-500">Phone Number</label>
                            <Input />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-surface-500">Institution / Hospital / Company</label>
                            <Input />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-surface-700">Products</label>
                            <div className="flex flex-col gap-4">
                                <div className="inline-flex items-center justify-start gap-2">
                                    <div className="flex flex-1 items-center justify-start gap-[9.14px]">
                                        <Checkbox />
                                        <div className="flex-1 justify-start text-base font-normal leading-normal text-surface-700">AortaSense Pro</div>
                                    </div>
                                    <div className="flex flex-1 items-center justify-start gap-[9.14px]">
                                        <Checkbox />
                                        <div className="flex-1 justify-start text-base font-normal leading-normal text-surface-700">AcutePanaMaster</div>
                                    </div>
                                </div>
                                <div className="inline-flex items-center justify-start gap-2">
                                    <div className="flex flex-1 items-center justify-start gap-[9.14px]">
                                        <Checkbox />
                                        <div className="flex-1 justify-start text-base font-normal leading-normal text-surface-700">AppendiXpert</div>
                                    </div>
                                    <div className="flex flex-1 items-center justify-start gap-[9.14px]">
                                        <Checkbox />
                                        <div className="flex-1 justify-start text-base font-normal leading-normal text-surface-700">CholeciAssist</div>
                                    </div>
                                </div>
                                <div className="inline-flex items-center justify-start gap-2">
                                    <div className="flex flex-1 items-center justify-start gap-[9.14px]">
                                        <Checkbox />
                                        <div className="flex-1 justify-start text-base font-normal leading-normal text-surface-700">DivertiSense</div>
                                    </div>
                                    <div className="flex flex-1 items-center justify-start gap-[9.14px]">
                                        <Checkbox />
                                        <div className="flex-1 justify-start text-base font-normal leading-normal text-surface-700">UreteralStoneSense</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-surface-500">Message</label>
                            <Textarea />
                        </div>
                        <button className="button-gradient h-14 w-full" type="submit">
                            Book A Demo
                        </button>
                    </form>
                </AnimatedContainer>
            </div>
        </div>
    );
};

export default Contact;

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => {
    return <input className={cn('min-h-10 w-full rounded-full bg-transparent px-4 py-1 shadow-stroke outline-none dark:bg-surface-950', className)} {...props} />;
};

const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({ className, rows = 4, ...props }) => {
    return <textarea rows={rows} className={cn('min-h-10 w-full resize-none rounded-2xl bg-transparent p-3 shadow-stroke outline-none dark:bg-surface-950', className)} {...props} />;
};
