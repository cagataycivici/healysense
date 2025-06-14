<script setup>
const handleMouseEnter = (event) => {
    event.target.style.background = 'linear-gradient(135deg, #5A23E7 0%, #9166FF 100%)';
};

const handleMouseLeave = (event) => {
    event.target.style.background = 'unset';
};
</script>

<template>
    <div class="grid pt-6 p-4" style="max-width: 1200px">
        <div class="col-12 md:col-6 lg:col-4">
            <div @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" class="flex flex-column gap-3 border-1 border-50 border-round-2xl p-5 h-full">
                <img src="/images/products/aortasensepro.png" alt="aortasense" class="align-self-start w-6rem h-6rem" />
                <span class="font-semibold text-white">AortaSense Pro</span>
                <span class="text-white ellipsis">Through the integration of AI technology and computing modules, we develop a hybrid system for the aorta that automates medical image
                    interpretation.</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-4">
            <div @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" class="flex flex-column gap-3 border-1 border-50 border-round-2xl p-5 h-full">
                <img src="/images/products/acutepanamaster.png" alt="acutepanamaster" class="align-self-start w-6rem h-6rem" />
                <span class="font-semibold text-white">AcutePanaMaster</span>
                <span class="text-white ellipsis">We are working on an AI-driven decision support system for acute pancreatitis that aims to harness the power of AI to provide accurate and reliable
                    information derived from CT images.</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-4">
            <div @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" class="flex flex-column gap-3 border-1 border-50 border-round-2xl text-white p-5 h-full">
                <img src="/images/products/appendixpert.png" alt="appendixpert" class="align-self-start w-6rem h-6rem" />
                <span class="font-semibold">AppendiXpert</span>
                <span>Advanced image analysis meets efficiency: AI-driven technology for Acute Appendicitis from CT scans.</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-4">
            <div @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" class="flex flex-column gap-3 border-1 border-50 border-round-2xl p-5 h-full">
                <img src="/images/products/choleciassist.png" alt="choleciassist" class="align-self-start w-6rem h-6rem" />
                <span class="font-semibold text-white">CholeciAssist</span>
                <span class="text-white ellipsis">Healysense leverages deep learning algorithms to extract insights from CT images and improve the diagnosis of Acute Cholecystitis. </span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-4">
            <div @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" class="flex flex-column gap-3 border-1 border-50 border-round-2xl p-5 h-full">
                <img src="/images/products/divertisenseicon.png" alt="divertisenseicon" class="align-self-start w-6rem h-6rem" />
                <span class="font-semibold text-white">DivertiSense</span>
                <span class="text-white ellipsis">Unleash Diagnostic Confidence: AI-driven decision support for Acute Diverticulitis from CT images.</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-4">
            <div @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" class="flex flex-column gap-3 border-1 border-50 border-round-2xl text-white p-5 h-full">
                <img src="/images/products/uretelarstonesense.png" alt="uretelarstonesense" class="align-self-start w-6rem h-6rem" />
                <span class="font-semibold text-white">UreteralStoneSense</span>
                <span class="text-white ellipsis">Utilizing deep learning algorithms and image analysis techniques to assist clinicians in accurate Kidney/Ureter Stone detection, localization and
                    characterization for personalized treatment strategies.
                </span>
            </div>
        </div>
    </div>
</template>
