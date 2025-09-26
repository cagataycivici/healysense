import AnimatedContainer from '@/components/AnimatedContainer';
import Image from 'next/image';

const Integration = () => {
    const integrations = [
        {
            tag: 'Marketplace Integration',
            title: 'Reach Our Solutions Through Marketplace',
            description: 'Contact with marketplace and get our solutions integrated into your workflow in a flash.',
            features: ['Easy access', 'Ready to go integration']
        },
        {
            tag: 'Local Installation Integration',
            title: 'A Dedicated Machine Works In Your Workspace',
            description: 'We integrate our solutions into your local network to enhance your workflow.',
            features: ['On site setup', 'Secured in your control']
        },
        {
            tag: 'Cloud Base',
            title: 'Use Our Cloud Services Without Any Installation',
            description: 'Analyze your patients on demand with our cloud based option',
            features: ['Easy integration', 'Pay as you go', 'Secured with DICOM protocol']
        }
    ];

    return (
        <div className="container flex flex-col items-start justify-end gap-16 pb-8 pt-16">
            <div className="flex w-full flex-col items-center justify-start gap-4">
                <div
                    className="relative flex h-[72px] w-[72px] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-b from-[#531EAF] to-[#641BE1]"
                    style={{
                        boxShadow:
                            '0px 1px 2px 0px rgba(0,0,0,0.10), 0px 3px 3px 0px rgba(0,0,0,0.09), 0px 7px 4px 0px rgba(0,0,0,0.05), 0px 12px 5px 0px rgba(0,0,0,0.01), 0px 19px 5px 0px rgba(0,0,0,0.00), inset 0px 2px 3px 0px rgba(255,255,255,0.25)'
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="37" viewBox="0 0 43 37" fill="none">
                        <g filter="url(#filter0_d_7038_2389)">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5 10.6667C5 6.98477 7.98477 4 11.6667 4H31.6667C35.3486 4 38.3333 6.98477 38.3333 10.6667V15.6667H5V10.6667ZM12.5 9.83333C12.5 10.7538 11.7538 11.5 10.8333 11.5C9.91286 11.5 9.16667 10.7538 9.16667 9.83333C9.16667 8.91286 9.91286 8.16667 10.8333 8.16667C11.7538 8.16667 12.5 8.91286 12.5 9.83333Z"
                                fill="url(#paint0_linear_7038_2389)"
                                shapeRendering="crispEdges"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5 19H38.3333V24C38.3333 27.6819 35.3486 30.6667 31.6667 30.6667H11.6667C7.98477 30.6667 5 27.6819 5 24V19ZM12.5 24.8333C12.5 25.7538 11.7538 26.5 10.8333 26.5C9.91286 26.5 9.16667 25.7538 9.16667 24.8333C9.16667 23.9129 9.91286 23.1667 10.8333 23.1667C11.7538 23.1667 12.5 23.9129 12.5 24.8333Z"
                                fill="url(#paint1_linear_7038_2389)"
                                shapeRendering="crispEdges"
                            />
                            <path
                                d="M38.0586 19.2754V24C38.0586 27.5299 35.1969 30.3914 31.667 30.3916H11.667C8.13697 30.3916 5.27539 27.53 5.27539 24V19.2754H38.0586ZM10.833 22.8916C9.76091 22.8918 8.89178 23.7609 8.8916 24.833C8.8916 25.9053 9.7608 26.7752 10.833 26.7754C11.9054 26.7754 12.7754 25.9054 12.7754 24.833C12.7752 23.7608 11.9053 22.8916 10.833 22.8916ZM11.667 4.27539H31.667C35.1969 4.27557 38.0586 7.13708 38.0586 10.667V15.3916H5.27539V10.667C5.27539 7.13697 8.13697 4.27539 11.667 4.27539ZM10.833 7.8916C9.76091 7.89178 8.89178 8.76091 8.8916 9.83301C8.8916 10.9053 9.7608 11.7752 10.833 11.7754C11.9054 11.7754 12.7754 10.9054 12.7754 9.83301C12.7752 8.7608 11.9053 7.8916 10.833 7.8916Z"
                                stroke="url(#paint2_linear_7038_2389)"
                                strokeWidth="0.55"
                                shapeRendering="crispEdges"
                            />
                        </g>
                        <defs>
                            <filter id="filter0_d_7038_2389" x="0.6" y="0.7" width="42.1333" height="35.4667" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="1.1" />
                                <feGaussianBlur stdDeviation="2.2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7038_2389" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7038_2389" result="shape" />
                            </filter>
                            <linearGradient id="paint0_linear_7038_2389" x1="21.6667" y1="4.3335" x2="21.6667" y2="30.6667" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_7038_2389" x1="21.6667" y1="4.3335" x2="21.6667" y2="30.6667" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_7038_2389" x1="21.6667" y1="4" x2="21.6667" y2="30.6667" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="0.586424" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="flex flex-col items-center justify-start gap-4 self-stretch">
                    <h1 className="text-center text-3xl font-semibold leading-tight text-surface-950 lg:text-6xl lg:leading-tight">Integration</h1>
                    <p className="text-center text-lg font-normal leading-normal text-surface-500 lg:text-2xl">Choose the integration method that fits your workflow.</p>
                </div>
            </div>

            <div className="flex w-full flex-col items-start justify-start gap-6 lg:flex-row">
                {integrations.map((integration, index) => (
                    <AnimatedContainer key={index} delay={index * 200} className="mx-auto flex w-full flex-1 flex-col items-center justify-start gap-4">
                        <div
                            className="relative flex h-[370px] w-full flex-col overflow-hidden rounded-[28px] bg-gradient-to-b from-[#531EAF] to-[#641BE1]"
                            style={{
                                boxShadow:
                                    '0px 2px 5px 0px rgba(120,149,206,0.08), 0px 9px 9px -4px rgba(120,149,206,0.07), 0px 21px 13px -8px rgba(120,149,206,0.04), 0px 38px 15px -8px rgba(120,149,206,0.01), 0px 59px 16px -8px rgba(120,149,206,0.00)'
                            }}
                        >
                            <div className="relative z-10 flex justify-center p-4">
                                <div
                                    className="inline-flex items-start justify-start rounded-[999px] bg-white/20 px-4 py-2 outline outline-1 outline-offset-[-1px] outline-white/40"
                                    style={{
                                        boxShadow: '0px 0.9999998807907104px 1.999999761581421px 0px rgba(18,18,23,0.05)'
                                    }}
                                >
                                    <div className="justify-start text-lg font-medium leading-normal text-white">{integration.tag}</div>
                                </div>
                            </div>

                            {integration.tag.includes('Marketplace') ? (
                                /* Marketplace: 80% visible on desktop, full on mobile, positioned right-bottom */
                                <div className="absolute inset-0 flex items-end justify-end">
                                    <div className="relative bottom-[-20%] right-[-20%] h-full w-[180%] lg:bottom-0 lg:right-0 lg:w-[140%]">
                                        <Image src="/images/card-marketplace.png" alt="Marketplace Interface" fill className="object-contain object-bottom lg:object-right-bottom" sizes="(max-width: 1024px) 100vw, 120vw" />
                                    </div>
                                </div>
                            ) : integration.tag.includes('Local') ? (
                                /* Local Installation: full width and centered */
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative -top-2 h-full w-full">
                                        <Image src="/images/card-local.png" alt="Local Installation Interface" fill className="object-cover md:object-contain" sizes="(max-width: 1024px) 100vw, 50vw" />
                                    </div>
                                </div>
                            ) : (
                                /* Cloud Base: positioned -10% from bottom */
                                <div className="absolute inset-0 flex items-end justify-center" style={{ bottom: '-10%' }}>
                                    <div className="relative h-full w-9/12">
                                        <Image src="/images/card-cloud.png" alt="Cloud Services Interface" fill className="object-contain object-bottom" sizes="(max-width: 1024px) 100vw, 50vw" />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col items-center justify-start gap-4 self-stretch p-6">
                            <div className="flex flex-col items-start justify-start gap-3 self-stretch">
                                <div className="justify-start self-stretch text-2xl font-semibold text-surface-950">{integration.title}</div>
                            </div>
                            <div className="justify-start self-stretch text-lg font-normal leading-normal text-surface-700">{integration.description}</div>
                            <div className="flex flex-col items-start justify-start gap-[13.71px] self-stretch">
                                {integration.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-center justify-start gap-3 self-stretch">
                                        <i className="pi pi-check-circle h-4 w-4 text-surface-500" style={{ fontSize: '16px' }}></i>
                                        <div className="flex-1 justify-start text-lg font-normal leading-none text-surface-500">{feature}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedContainer>
                ))}
            </div>
        </div>
    );
};

export default Integration;
