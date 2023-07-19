<template>
    <div id="home" class="hidden lg:flex absolute z-1 right-0 bottom-0 left-0 parallax__layer__3 justify-content-center h-full top-0" style="margin-bottom: 300px">
        <div class="hidden lg:flex flex-column align-items-center justify-content-center">
            <h1 class="mb-0 text-7xl text-white">Discover the power of</h1>
            <h1 style="font-size: 15rem; background: linear-gradient(135deg, #5a23e7 0%, #9166ff 100%); background-clip: text; -webkit-background-clip: text; color: transparent">AI-DRIVEN</h1>
            <h1 class="mt-0 text-white text-7xl">Hybrid Solutions</h1>
        </div>
    </div>

    <div class="scroll-container hidden lg:block absolute top-0 right-0 bottom-0 left-0 parallax__layer__2">
        <img :draggable="false" src="/images/singleAsset.png" class="h-full w-full block absolute bottom-0" style="mix-blend-mode: screen; background: #000" />
    </div>

    <div class="block lg:hidden h-28rem bg-center bg-no-repeat bg-cover" style="background: url('/images/singleAsset.png')">
        <div class="flex justify-content-center align-items-center h-full">
            <div class="flex flex-column justify-content-center align-content-center">
                <h1 class="mb-0 text-lg text-white align-self-center">Discover the power of</h1>
                <h1 style="font-size: 4rem; background: linear-gradient(135deg, #5a23e7 0%, #9166ff 100%); background-clip: text; -webkit-background-clip: text; color: transparent">AI-DRIVEN</h1>
                <h1 class="mt-0 text-white text-lg align-self-center">Hybrid Solutions</h1>
            </div>
        </div>
    </div>
</template>

<style>
.scroll-container {
    overflow-y: scroll;
}

.rotate-180 {
    transform: rotate(180deg);
    transition: transform 0.3s ease;
}
</style>
