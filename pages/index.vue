<script setup>
import { ref } from 'vue';

const parallaxBody = ref(null);

const products = ref(null);
</script>

<template>
    <div class="surface-ground">
        <AppHeader />
        <div class="h-screen">
            <div style="perspective: 101px" class="h-screen overflow-x-hidden overflow-y-auto absolute top-0 left-0 right-0 bottom-0">
                <AppHero />
                <div ref="parallaxBody" class="lg:top-100 block absolute left-0 right-0 h-full z-2">
                    <div ref="products" class="pt-5" style="background-color: #000">
                        <AppProducts id="products" />
                        <div class="flex flex-column align-items-center">
                            <AppProductCards />
                            <AppAboutUs id="aboutus" />
                            <AppSolutions id="solutions" />
                            <AppTechnology id="technology" />
                            <AppFooter id="contactus" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
::placeholder {
    color: #fff;
}
</style>
