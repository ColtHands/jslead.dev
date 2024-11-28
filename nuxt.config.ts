export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@nuxthq/studio',
        '@nuxt/fonts'
    ],
    devtools: { enabled: false },
    app: {
        pageTransition: {
            name: 'page',
            mode: 'default'
        }
    },
    // vite: {
    //     css: {
    //         preprocessorOptions: {
    //             scss: {
    //                 quietDeps: true,
    //                 api: 'modern-compiler'
    //             }
    //         }
    //     }
    // },
    typescript: {
        strict: true
    },
    routeRules: {
        '/blog/**': { swr: true }
    },
    runtimeConfig: {
        public: {
            posthogPublicKey: 'phc_h4lVplILWIY7UlOfGIp9vjHlwHOA1697FEuiPAuwc2L',
            posthogHost: 'https://app.posthog.com'
        }
    },
    content: {
        highlight: {
            theme: 'github-dark'
        },
        markdown: {
            toc: {
                depth: 2,
                searchDepth: 2
            }
        }
    },
    compatibilityDate: '2024-11-28'
})