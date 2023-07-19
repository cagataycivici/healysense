<script setup>
const navList = ref([
    {
        label: 'HOME',
        selector: '#home'
    },
    {
        label: 'PRODUCTS',
        selector: '#products'
    },
    {
        label: 'ABOUT US',
        selector: '#aboutus'
    },
    {
        label: 'SOLUTIONS',
        selector: '#solutions'
    },
    {
        label: 'TECHNOLOGY',
        selector: '#technology'
    }
]);

const scrollToElement = (selector) => {
    const element = document.querySelector(selector);

    element.scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>
    <div style="height: 68px; backdrop-filter: blur(17px)" class="flex justify-content-between align-items-center z-3 px-5 bg-black-alpha-40 top-0 w-full fixed">
        <div>
            <img src="/images/healysense-logo.svg" alt="" />
        </div>

        <a v-ripple class="p-ripple cursor-pointer block lg:hidden text-white" v-styleclass="{ selector: '@next', hideOnOutsideClick: true, enterClass: 'hidden', leaveToClass: 'hidden' }">
            <i class="pi pi-bars text-4xl"></i>
        </a>

        <div id="menu" class="align-items-center flex-grow-1 hidden lg:flex absolute lg:static w-full lg:px-0 z-3 shadow-2 lg:shadow-none fadein" style="top: 68px; right: 0%">
            <ul class="list-none p-3 lg:p-0 m-0 ml-auto flex lg:align-items-center select-none flex-column lg:flex-row cursor-pointer surface-0 lg:bg-transparent">
                <li v-for="list in navList" :key="list">
                    <a class="flex m-0 md:ml-5 px-0 py-3 text-900 line-height-3" v-styleclass="{ selector: '#menu', enterClass: 'hidden', leaveToClass: 'hidden' }" @click="scrollToElement(list.selector)">
                        <span>{{ list.label }}</span>
                    </a>
                </li>

                <li>
                    <button @click="scrollToElement('#contactus')" v-ripple class="text-0 contact-btn surface-900 text-0 m-0 mt-3 md:mt-0 md:ml-5">
                        <span class="text-0">CONTACT US</span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
.contact-btn {
    background: #9575cd;
    border: 0 none;
    padding: 0.571rem 0.75rem;
    font-size: 1rem;
    transition: background-color 0.2s, border-color 0.2s, color 0.2s, box-shadow 0.2s, background-size 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
    border-radius: 4px;
    cursor: pointer;

    span {
        font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;
        font-weight: 500;
    }
}
</style>
