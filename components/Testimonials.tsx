import AnimatedContainer from '@/components/AnimatedContainer';

import Image from 'next/image';

const Testimonials = () => {
    const testimonials = [
        {
            quote: 'With Healysense, I can access medical insights faster and more accurately than ever before. The platform makes image interpretation smoother and helps me focus more on my patients rather than repetitive tasks.',
            name: 'Canan Altay, MD',
            role: 'Radiologist',
            avatar: 'https://placehold.co/56x56'
        },
        {
            quote: "What excites me most about Healysense is its potential to transform healthcare at scale. It's not just another digital tool, it's a sustainable, data-driven solution built for real impact.",
            name: 'Cagatay Civici',
            role: 'Investor',
            avatar: 'https://placehold.co/56x56'
        },
        {
            quote: 'Healysense provides an invaluable layer of decision support. Its ability to process complex clinical data and highlight what truly matters empowers me to deliver more precise and personalized care.',
            name: 'Ender Ellidokuz, MD',
            role: 'Internal Medicine',
            avatar: 'https://placehold.co/56x56'
        },
        {
            quote: 'We created Healysense with a simple vision: to empower doctors and healthcare providers through hybrid AI solutions. Seeing it now improving patient outcomes and saving time for experts is the best validation of that mission.',
            name: 'Serhat Tozburun',
            role: 'Founder',
            avatar: 'https://placehold.co/56x56'
        },
        {
            quote: "As a radiologist, I need reliable tools that enhance diagnostic accuracy. Healysense has become an essential companion in my daily workflow, ensuring I don't miss critical details.",
            name: 'Anıl Sarı, MD',
            role: 'Radiologist',
            avatar: 'https://placehold.co/56x56'
        },
        {
            quote: "At Healysense, we combine cutting-edge AI with human expertise. The result is a platform that doesn't replace physicians but strengthens their decisions with confidence and clarity.",
            name: 'Semih Burhan',
            role: 'COO & Data Scientist',
            avatar: 'https://placehold.co/56x56'
        }
    ];

    return (
        <div className="self-stretch px-4 lg:px-[164.57px] pt-16 pb-8 bg-white flex flex-col justify-start items-center gap-14 container">
            {/* Header Section */}
            <div className="w-full max-w-[1152px] flex flex-col justify-start items-center gap-4">
                <div className="size-[72px] relative bg-gradient-to-b from-violet-800 to-violet-700 rounded-3xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] shadow-[0px_3px_3px_0px_rgba(0,0,0,0.09)] shadow-[0px_7px_4px_0px_rgba(0,0,0,0.05)] shadow-[0px_12px_5px_0px_rgba(0,0,0,0.01)] shadow-[0px_19px_5px_0px_rgba(0,0,0,0.00)] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.25)] overflow-hidden">
                    <div className="size-[40px] left-[16px] top-[16px] absolute overflow-hidden">
                        <div className="w-[35.90px] h-[30px] left-[1.60px] top-[5px] absolute bg-gradient-to-b from-white to-white/0" />
                    </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-center gap-4">
                    <div className="self-stretch text-center justify-start text-surface-950 text-3xl lg:text-6xl font-semibold leading-tight lg:leading-[65.62px]">Hear Healysense from Experts</div>
                </div>
            </div>

            {/* Testimonials Grid */}
            <div className="self-stretch flex justify-start items-start gap-6 overflow-hidden">
                {/* Column 1 */}
                <div className="flex-1 h-[615px] flex flex-col justify-start items-start gap-6">
                    {testimonials.slice(0, 2).map((testimonial, index) => (
                        <AnimatedContainer key={index} delay={index * 200} className="self-stretch flex-1 p-6 bg-white rounded-[28px] outline outline-1 outline-offset-[-1px] outline-surface-200 flex flex-col justify-start items-start gap-8">
                            <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-2">
                                <div className="size-[40px] relative overflow-hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <path
                                            d="M10.7287 26.6513C9.44125 25.2838 8.75 23.7501 8.75 21.2638C8.75 16.8888 11.8212 12.9676 16.2875 11.0288L17.4037 12.7513C13.235 15.0063 12.42 17.9326 12.095 19.7776C12.7662 19.4301 13.645 19.3088 14.5062 19.3888C16.7612 19.5976 18.5387 21.4488 18.5387 23.7501C18.5387 24.9104 18.0778 26.0232 17.2573 26.8437C16.4369 27.6641 15.3241 28.1251 14.1637 28.1251C12.8225 28.1251 11.54 27.5126 10.7287 26.6513ZM23.2287 26.6513C21.9412 25.2838 21.25 23.7501 21.25 21.2638C21.25 16.8888 24.3212 12.9676 28.7875 11.0288L29.9037 12.7513C25.735 15.0063 24.92 17.9326 24.595 19.7776C25.2662 19.4301 26.145 19.3088 27.0062 19.3888C29.2612 19.5976 31.0387 21.4488 31.0387 23.7501C31.0387 24.9104 30.5778 26.0232 29.7573 26.8437C28.9369 27.6641 27.8241 28.1251 26.6637 28.1251C25.3225 28.1251 24.04 27.5126 23.2287 26.6513Z"
                                            fill="#97A3B6"
                                        />
                                    </svg>
                                </div>
                                <div className="self-stretch flex-1 justify-start text-surface-600 text-lg font-normal leading-7">{testimonial.quote}</div>
                            </div>
                            <div className="self-stretch flex justify-start items-center gap-4">
                                <Image className="size-16 relative rounded-full outline outline-1 outline-surface-200" src={testimonial.avatar} alt={testimonial.name} width={64} height={64} />
                                <div className="flex-1 flex flex-col justify-center items-start gap-1">
                                    <div className="self-stretch justify-start text-surface-950 text-xl font-semibold leading-7">{testimonial.name}</div>
                                    <div className="self-stretch justify-start text-surface-600 text-lg font-normal leading-7">{testimonial.role}</div>
                                </div>
                            </div>
                        </AnimatedContainer>
                    ))}
                </div>

                {/* Column 2 */}
                <div className="flex-1 h-[615px] flex flex-col justify-start items-start gap-6">
                    {testimonials.slice(2, 4).map((testimonial, index) => (
                        <AnimatedContainer
                            key={index + 2}
                            delay={(index + 2) * 200}
                            className="self-stretch flex-1 p-6 bg-white rounded-[28px] outline outline-1 outline-offset-[-1px] outline-surface-200 flex flex-col justify-start items-start gap-8"
                        >
                            <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-2">
                                <div className="size-[40px] relative overflow-hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <path
                                            d="M10.7287 26.6513C9.44125 25.2838 8.75 23.7501 8.75 21.2638C8.75 16.8888 11.8212 12.9676 16.2875 11.0288L17.4037 12.7513C13.235 15.0063 12.42 17.9326 12.095 19.7776C12.7662 19.4301 13.645 19.3088 14.5062 19.3888C16.7612 19.5976 18.5387 21.4488 18.5387 23.7501C18.5387 24.9104 18.0778 26.0232 17.2573 26.8437C16.4369 27.6641 15.3241 28.1251 14.1637 28.1251C12.8225 28.1251 11.54 27.5126 10.7287 26.6513ZM23.2287 26.6513C21.9412 25.2838 21.25 23.7501 21.25 21.2638C21.25 16.8888 24.3212 12.9676 28.7875 11.0288L29.9037 12.7513C25.735 15.0063 24.92 17.9326 24.595 19.7776C25.2662 19.4301 26.145 19.3088 27.0062 19.3888C29.2612 19.5976 31.0387 21.4488 31.0387 23.7501C31.0387 24.9104 30.5778 26.0232 29.7573 26.8437C28.9369 27.6641 27.8241 28.1251 26.6637 28.1251C25.3225 28.1251 24.04 27.5126 23.2287 26.6513Z"
                                            fill="#97A3B6"
                                        />
                                    </svg>
                                </div>
                                <div className="self-stretch flex-1 justify-start text-surface-600 text-lg font-normal leading-7">{testimonial.quote}</div>
                            </div>
                            <div className="self-stretch flex justify-start items-center gap-4">
                                <Image className="size-16 rounded-full border border-surface-200" src={testimonial.avatar} alt={testimonial.name} width={64} height={64} />
                                <div className="flex-1 flex flex-col justify-center items-start gap-1">
                                    <div className="self-stretch justify-start text-surface-950 text-xl font-semibold leading-7">{testimonial.name}</div>
                                    <div className="self-stretch justify-start text-surface-600 text-lg font-normal leading-7">{testimonial.role}</div>
                                </div>
                            </div>
                        </AnimatedContainer>
                    ))}
                </div>

                {/* Column 3 */}
                <div className="flex-1 self-stretch flex flex-col justify-start items-start gap-6">
                    {testimonials.slice(4, 6).map((testimonial, index) => (
                        <AnimatedContainer
                            key={index + 4}
                            delay={(index + 4) * 200}
                            className="self-stretch flex-1 p-6 bg-white rounded-[28px] outline outline-1 outline-offset-[-1px] outline-surface-200 flex flex-col justify-start items-start gap-8"
                        >
                            <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-2">
                                <div className="size-[40px] relative overflow-hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <path
                                            d="M10.7287 26.6513C9.44125 25.2838 8.75 23.7501 8.75 21.2638C8.75 16.8888 11.8212 12.9676 16.2875 11.0288L17.4037 12.7513C13.235 15.0063 12.42 17.9326 12.095 19.7776C12.7662 19.4301 13.645 19.3088 14.5062 19.3888C16.7612 19.5976 18.5387 21.4488 18.5387 23.7501C18.5387 24.9104 18.0778 26.0232 17.2573 26.8437C16.4369 27.6641 15.3241 28.1251 14.1637 28.1251C12.8225 28.1251 11.54 27.5126 10.7287 26.6513ZM23.2287 26.6513C21.9412 25.2838 21.25 23.7501 21.25 21.2638C21.25 16.8888 24.3212 12.9676 28.7875 11.0288L29.9037 12.7513C25.735 15.0063 24.92 17.9326 24.595 19.7776C25.2662 19.4301 26.145 19.3088 27.0062 19.3888C29.2612 19.5976 31.0387 21.4488 31.0387 23.7501C31.0387 24.9104 30.5778 26.0232 29.7573 26.8437C28.9369 27.6641 27.8241 28.1251 26.6637 28.1251C25.3225 28.1251 24.04 27.5126 23.2287 26.6513Z"
                                            fill="#97A3B6"
                                        />
                                    </svg>
                                </div>
                                <div className="self-stretch flex-1 justify-start text-surface-600 text-lg font-normal leading-7">{testimonial.quote}</div>
                            </div>
                            <div className="self-stretch flex justify-start items-center gap-4">
                                <Image className="size-16 relative rounded-full outline outline-1 outline-surface-200" src={testimonial.avatar} alt={testimonial.name} width={64} height={64} />
                                <div className="flex-1 flex flex-col justify-center items-start gap-1">
                                    <div className="self-stretch justify-start text-surface-950 text-xl font-semibold leading-7">{testimonial.name}</div>
                                    <div className="self-stretch justify-start text-surface-600 text-lg font-normal leading-7">{testimonial.role}</div>
                                </div>
                            </div>
                        </AnimatedContainer>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
