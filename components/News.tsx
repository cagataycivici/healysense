import AnimatedContainer from '@/components/AnimatedContainer';
import Image from 'next/image';
import Link from 'next/link';

const News = () => {
    const newsData = [
        {
            image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&w=370&h=217&fit=crop&crop=center',
            title: 'AI-Powered Medical Imaging: The Future of Diagnostics',
            description: 'Explore how artificial intelligence is revolutionizing medical imaging and improving diagnostic accuracy in healthcare.',
            author: {
                name: 'Dr. Sarah Mitchell',
                role: 'Radiologist',
                avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&w=40&h=40&fit=crop&crop=face'
            },
            link: 'https://www.nature.com/articles/s41591-021-01293-w'
        },
        {
            image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&w=370&h=217&fit=crop&crop=center',
            title: 'Hybrid Decision Support Systems in Healthcare',
            description: 'Learn about the latest developments in hybrid AI systems that combine human expertise with machine learning.',
            author: {
                name: 'Prof. Michael Chen',
                role: 'Data Scientist',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=40&h=40&fit=crop&crop=face'
            },
            link: 'https://www.nejm.org/doi/full/10.1056/NEJMra1814259'
        },
        {
            image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&w=370&h=217&fit=crop&crop=center',
            title: 'The Role of Mathematics in Medical AI',
            description: 'Discover how mathematical models and algorithms are transforming medical analysis and patient care.',
            author: {
                name: 'Dr. Emily Rodriguez',
                role: 'AI Researcher',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=40&h=40&fit=crop&crop=face'
            },
            link: 'https://www.sciencedirect.com/science/article/pii/S0895611121000148'
        }
    ];

    return (
        <div className="container pt-16 pb-8 flex flex-col justify-start items-center gap-16">
            {/* Header Section */}
            <div className="self-stretch flex flex-col justify-start items-center gap-6">
                <div
                    className="size-[72px] relative bg-gradient-to-b from-[#531EAF] to-[#641BE1] rounded-3xl overflow-hidden flex items-center justify-center"
                    style={{
                        boxShadow:
                            '0px 1px 2px 0px rgba(0,0,0,0.10), 0px 3px 3px 0px rgba(0,0,0,0.09), 0px 7px 4px 0px rgba(0,0,0,0.05), 0px 12px 5px 0px rgba(0,0,0,0.01), 0px 19px 5px 0px rgba(0,0,0,0.00), inset 0px 2px 3px 0px rgba(255,255,255,0.25)'
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <g clip-path="url(#clip0_7070_2036)">
                            <g filter="url(#filter0_d_7070_2036)">
                                <path
                                    d="M18.3327 13.3337C18.3327 9.65176 15.3479 6.66699 11.666 6.66699H1.66602V33.3337H14.9993C16.8403 33.3337 18.3327 34.826 18.3327 36.667V13.3337Z"
                                    fill="url(#paint0_linear_7070_2036)"
                                    shape-rendering="crispEdges"
                                />
                                <path d="M21.666 36.667C21.666 34.826 23.1584 33.3337 24.9993 33.3337H38.3327V6.66699H28.3327C24.6508 6.66699 21.666 9.65176 21.666 13.3337V36.667Z" fill="url(#paint1_linear_7070_2036)" shape-rendering="crispEdges" />
                                <path
                                    d="M11.666 6.91699C15.2098 6.91699 18.083 9.79016 18.083 13.334V34.8418C17.4588 33.7894 16.3114 33.084 14.999 33.084H1.91602V6.91699H11.666ZM28.333 6.91699H38.083V33.084H24.999C23.6872 33.0841 22.5403 33.789 21.916 34.8408V13.334C21.916 9.79016 24.7892 6.91699 28.333 6.91699Z"
                                    stroke="url(#paint2_linear_7070_2036)"
                                    stroke-width="0.5"
                                    shape-rendering="crispEdges"
                                />
                            </g>
                        </g>
                        <defs>
                            <filter id="filter0_d_7070_2036" x="-2.33398" y="3.66699" width="44.6667" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="1" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7070_2036" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7070_2036" result="shape" />
                            </filter>
                            <linearGradient id="paint0_linear_7070_2036" x1="19.9993" y1="7.04218" x2="19.9993" y2="36.667" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_7070_2036" x1="19.9993" y1="7.04218" x2="19.9993" y2="36.667" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_7070_2036" x1="19.9993" y1="6.66699" x2="19.9993" y2="36.667" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" />
                                <stop offset="0.586424" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                            <clipPath id="clip0_7070_2036">
                                <rect width="40" height="40" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="self-stretch flex flex-col justify-start items-center gap-4">
                    <div className="self-stretch text-center justify-end text-surface-950 text-3xl lg:text-6xl font-semibold leading-tight lg:leading-[65.62px]">News & Publications</div>
                    <div className="self-stretch text-center justify-end text-surface-500 text-lg lg:text-2xl font-normal leading-normal lg:leading-loose">Latest insights and research in medical AI technology</div>
                </div>
            </div>

            {/* News Grid */}
            <div className="self-stretch grid grid-cols-1 lg:grid-cols-3 gap-6">
                {newsData.map((item, index) => (
                    <AnimatedContainer key={index} delay={index * 100} className="flex-1 bg-surface-0 flex flex-col justify-start items-start gap-4 h-full">
                        <Link href={item.link} target="_blank" rel="noopener noreferrer" className="block w-full">
                            <Image className="self-stretch h-[217px] w-full relative rounded-2xl object-cover hover:scale-105 transition-transform duration-300" src={item.image} alt={item.title} width={370} height={217} />
                        </Link>
                        <div className="self-stretch flex flex-col justify-between items-start flex-1">
                            <div className="self-stretch p-3 flex flex-col justify-center items-start gap-2">
                                <Link href={item.link} target="_blank" rel="noopener noreferrer">
                                    <div className="self-stretch justify-start text-surface-950 text-xl font-medium leading-7 hover:text-[#641BE1] transition-colors cursor-pointer">{item.title}</div>
                                </Link>
                                <div className="self-stretch justify-start text-surface-500 text-lg font-normal leading-7">{item.description}</div>
                            </div>
                            <div className="self-stretch flex flex-col justify-center items-center gap-2 mt-auto">
                                <div className="self-stretch p-3 flex justify-start items-center gap-3">
                                    <Image className="w-[40px] h-[40px] relative rounded-full" src={item.author.avatar} alt={item.author.name} width={40} height={40} />
                                    <div className="flex-1 flex flex-col justify-center items-start gap-1">
                                        <div className="self-stretch justify-start text-surface-950 text-lg font-normal leading-7">{item.author.name}</div>
                                        <div className="self-stretch justify-start text-surface-500 text-base font-normal leading-normal">{item.author.role}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedContainer>
                ))}
            </div>
        </div>
    );
};

export default News;
