import AnimatedContainer from '@/components/AnimatedContainer';

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
        <div className="w-full px-4 lg:px-[164.57px] pt-16 lg:mt-40 pb-8 flex flex-col justify-end items-start gap-16">
            {/* Header Section */}
            <div className="w-full max-w-[1152px] mx-auto flex flex-col justify-start items-center gap-4">
                <div
                    className="w-[72px] h-[72px] relative bg-gradient-to-b from-violet-800 to-violet-700 rounded-3xl flex items-center justify-center overflow-hidden"
                    style={{
                        boxShadow:
                            '0px 1px 2px 0px rgba(0,0,0,0.10), 0px 3px 3px 0px rgba(0,0,0,0.09), 0px 7px 4px 0px rgba(0,0,0,0.05), 0px 12px 5px 0px rgba(0,0,0,0.01), 0px 19px 5px 0px rgba(0,0,0,0.00), inset 0px 2px 3px 0px rgba(255,255,255,0.25)'
                    }}
                ></div>
                <div className="self-stretch flex flex-col justify-start items-center gap-4">
                    <h1 className="text-3xl lg:text-6xl text-surface-950 font-semibold text-center leading-tight lg:leading-[65.62px]">Integration</h1>
                    <p className="text-lg lg:text-2xl text-surface-500 font-normal text-center leading-loose">Choose the integration method that fits your workflow.</p>
                </div>
            </div>

            {/* Integration Cards */}
            <div className="w-full max-w-[1152px] mx-auto flex flex-col lg:flex-row justify-start items-start gap-6">
                {integrations.map((integration, index) => (
                    <AnimatedContainer key={index} delay={index * 200} className="flex-1 w-full max-w-[370px] mx-auto flex flex-col justify-start items-center gap-4">
                        {/* Card Visual */}
                        <div
                            className="w-full h-[370px] bg-gradient-to-b from-violet-800 to-violet-700 rounded-[28px] overflow-hidden flex flex-col p-4 gap-4"
                            style={{
                                boxShadow:
                                    '0px 2px 5px 0px rgba(120,149,206,0.08), 0px 9px 9px -4px rgba(120,149,206,0.07), 0px 21px 13px -8px rgba(120,149,206,0.04), 0px 38px 15px -8px rgba(120,149,206,0.01), 0px 59px 16px -8px rgba(120,149,206,0.00)'
                            }}
                        >
                            {/* Tag */}
                            <div className="flex justify-center">
                                <div
                                    className="px-4 py-2 bg-white/20 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-white/20 flex justify-center items-center"
                                    style={{
                                        boxShadow: '0px 0.9999998807907104px 1.999999761581421px 0px rgba(18,18,23,0.05)'
                                    }}
                                >
                                    <div className="text-white text-lg font-medium leading-7 text-center">{integration.tag}</div>
                                </div>
                            </div>

                            {/* Placeholder for complex visual content - using simple placeholder */}
                            <div
                                className="flex-1 bg-white/10 rounded-[12px] flex items-center justify-center"
                                style={{
                                    boxShadow: '0px 12px 20px 0px rgba(0,0,0,0.06), inset 0px 2px 5px 0px rgba(255,255,255,0.06)',
                                    backdropFilter: 'blur(48px)'
                                }}
                            >
                                <div className="text-white/60 text-sm text-center">
                                    {integration.tag.includes('Marketplace') && 'Marketplace Interface'}
                                    {integration.tag.includes('Local') && 'Local Network Setup'}
                                    {integration.tag.includes('Cloud') && 'Cloud Services'}
                                </div>
                            </div>
                        </div>

                        {/* Card Content */}
                        <div className="self-stretch p-6 flex flex-col justify-start items-center gap-4">
                            <div className="self-stretch flex flex-col justify-start items-start gap-3">
                                <div className="self-stretch justify-start text-surface-950 text-2xl font-semibold">{integration.title}</div>
                            </div>
                            <div className="self-stretch justify-start text-surface-700 text-lg font-normal leading-7">{integration.description}</div>
                            <div className="self-stretch flex flex-col justify-start items-start gap-[13.71px]">
                                {integration.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="self-stretch flex justify-start items-center gap-3">
                                        <i className="pi pi-check-circle w-4 h-4 text-surface-500" style={{ fontSize: '16px' }}></i>
                                        <div className="flex-1 justify-start text-surface-500 text-lg font-normal leading-none">{feature}</div>
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
