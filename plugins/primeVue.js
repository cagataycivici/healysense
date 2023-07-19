import PrimeVue from 'primevue/config';
import Ripple from 'primevue/ripple';
import StyleClass from 'primevue/styleclass';
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true });

    /*     nuxtApp.vueApp.directive('tooltip', Tooltip);
    nuxtApp.vueApp.directive('badge', BadgeDirective); */
    nuxtApp.vueApp.directive('ripple', Ripple);
    nuxtApp.vueApp.directive('styleclass', StyleClass);
});
