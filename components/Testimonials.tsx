import AnimatedContainer from '@/components/AnimatedContainer';

import Image from 'next/image';

const Testimonials = () => {
    const testimonials = [
        {
            quote: 'With Healysense, I can access medical insights faster and more accurately than ever before. The platform makes image interpretation smoother and helps me focus more on my patients rather than repetitive tasks.',
            name: 'Canan Altay, MD',
            role: 'Radiologist',
            avatar: '/images/avatar-canan.jpg'
        },
        {
            quote: "What excites me most about Healysense is its potential to transform healthcare at scale. It's not just another digital tool, it's a sustainable, data-driven solution built for real impact.",
            name: 'Cagatay Civici',
            role: 'Investor',
            avatar: '/images/avatar-cagatay.jpg'
        },
        {
            quote: 'Healysense provides an invaluable layer of decision support. Its ability to process complex clinical data and highlight what truly matters empowers me to deliver more precise and personalized care.',
            name: 'Ender Ellidokuz, MD',
            role: 'Internal Medicine',
            avatar: '/images/avatar-ender.jpg'
        },
        {
            quote: 'We created Healysense with a simple vision: to empower doctors and healthcare providers through hybrid AI solutions. Seeing it now improving patient outcomes and saving time for experts is the best validation of that mission.',
            name: 'Serhat Tozburun',
            role: 'Founder',
            avatar: '/images/avatar-serhat.jpg'
        },
        {
            quote: "As a radiologist, I need reliable tools that enhance diagnostic accuracy. Healysense has become an essential companion in my daily workflow, ensuring I don't miss critical details.",
            name: 'Anıl Sarı, MD',
            role: 'Radiologist',
            avatar: '/images/avatar-anil.jpg'
        },
        {
            quote: "At Healysense, we combine cutting-edge AI with human expertise. The result is a platform that doesn't replace physicians but strengthens their decisions with confidence and clarity.",
            name: 'Semih Burhan',
            role: 'COO & Data Scientist',
            avatar: '/images/avatar-semih.jpg'
        }
    ];

    return (
        <div className="container pt-16 pb-8 bg-white flex flex-col justify-start items-center gap-14">
            <div className="w-full max-w-[1152px] flex flex-col justify-start items-center gap-4">
                <div
                    className="size-[72px] relative bg-gradient-to-b from-[#531EAF] to-[#641BE1] rounded-3xl overflow-hidden flex items-center justify-center"
                    style={{
                        boxShadow:
                            '0px 1px 2px 0px rgba(0,0,0,0.10), 0px 3px 3px 0px rgba(0,0,0,0.09), 0px 7px 4px 0px rgba(0,0,0,0.05), 0px 12px 5px 0px rgba(0,0,0,0.01), 0px 19px 5px 0px rgba(0,0,0,0.00), inset 0px 2px 3px 0px rgba(255,255,255,0.25)'
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path
                            d="M19.9976 5C25.1055 5 29.4807 6.31935 32.61 8.92819C35.7757 11.5674 37.4976 15.3891 37.4976 20C37.4976 24.6109 35.7757 28.4326 32.61 31.0718C29.4807 33.6807 25.1055 35 19.9976 35C17.2989 35 14.26 34.7508 11.5239 33.563C11.0587 33.823 10.4182 34.139 9.65757 34.4029C8.07221 34.9528 5.76268 35.3412 3.45083 34.2461L1.59668 33.3678L2.8362 31.7329C3.98353 30.2196 4.34509 29.0461 4.44522 28.2956C4.54159 27.5733 4.40667 27.1594 4.39103 27.1147L4.39213 27.1173C4.39213 27.1173 4.39114 27.1148 4.38967 27.1108L4.39103 27.1147C4.39103 27.1147 4.38928 27.1104 4.38779 27.1069L4.37499 27.0768L4.3537 27.0264C4.22606 26.7204 3.77443 25.6152 3.35195 24.2966C2.94653 23.0312 2.49764 21.3608 2.49764 20C2.49764 15.3891 4.21958 11.5674 7.38526 8.92819C10.5146 6.31935 14.8898 5 19.9976 5Z"
                            fill="url(#paint0_linear_7038_2365)"
                        />
                        <defs>
                            <linearGradient id="paint0_linear_7038_2365" x1="19.5472" y1="5.37518" x2="19.5472" y2="35" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="self-stretch flex flex-col justify-start items-center gap-4">
                    <div className="self-stretch text-center justify-start text-surface-950 text-3xl lg:text-6xl font-semibold leading-tight lg:leading-[65.62px]">Hear Healysense from Experts</div>
                </div>
            </div>

            {/* Testimonials Grid */}
            <div className="self-stretch grid grid-cols-1 lg:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                    <AnimatedContainer key={index} delay={index * 100} className="p-6 bg-white rounded-[28px] outline outline-1 outline-offset-[-1px] outline-surface-200 flex flex-col justify-between gap-8 h-full">
                        <div className="flex flex-col justify-start items-start gap-2 flex-1">
                            <div className="size-[40px] relative overflow-hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path
                                        d="M10.7287 26.6513C9.44125 25.2838 8.75 23.7501 8.75 21.2638C8.75 16.8888 11.8212 12.9676 16.2875 11.0288L17.4037 12.7513C13.235 15.0063 12.42 17.9326 12.095 19.7776C12.7662 19.4301 13.645 19.3088 14.5062 19.3888C16.7612 19.5976 18.5387 21.4488 18.5387 23.7501C18.5387 24.9104 18.0778 26.0232 17.2573 26.8437C16.4369 27.6641 15.3241 28.1251 14.1637 28.1251C12.8225 28.1251 11.54 27.5126 10.7287 26.6513ZM23.2287 26.6513C21.9412 25.2838 21.25 23.7501 21.25 21.2638C21.25 16.8888 24.3212 12.9676 28.7875 11.0288L29.9037 12.7513C25.735 15.0063 24.92 17.9326 24.595 19.7776C25.2662 19.4301 26.145 19.3088 27.0062 19.3888C29.2612 19.5976 31.0387 21.4488 31.0387 23.7501C31.0387 24.9104 30.5778 26.0232 29.7573 26.8437C28.9369 27.6641 27.8241 28.1251 26.6637 28.1251C25.3225 28.1251 24.04 27.5126 23.2287 26.6513Z"
                                        fill="#97A3B6"
                                    />
                                </svg>
                            </div>
                            <div className="flex-1 justify-start text-surface-600 text-lg font-normal leading-7">{testimonial.quote}</div>
                        </div>
                        <div className="flex justify-start items-center gap-4">
                            <Image className="size-16 rounded-full border border-surface-200" src={testimonial.avatar} alt={testimonial.name} width={64} height={64} />
                            <div className="flex-1 flex flex-col justify-center items-start gap-1">
                                <div className="justify-start text-surface-950 text-xl font-semibold leading-7">{testimonial.name}</div>
                                <div className="justify-start text-surface-600 text-lg font-normal leading-7">{testimonial.role}</div>
                            </div>
                        </div>
                    </AnimatedContainer>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
