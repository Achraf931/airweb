// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        ["@pinia/nuxt", {
            autoImports: ["defineStore", "acceptHMRUpdate"]
        }],
        '@pinia-plugin-persistedstate/nuxt',
    ],
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
