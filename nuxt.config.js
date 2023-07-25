// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: false,
    build: {
        transpile: ['primevue']
    },
    css: ['primeicons/primeicons.css', 'primeflex/primeflex.scss', '@/assets/styles.scss']
});
