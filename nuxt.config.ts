/* eslint-disable camelcase */
import TerserPlugin from 'terser-webpack-plugin'

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
    webpack: {
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        compress: {
                            drop_console: true
                        }
                    }
                })
            ],
            splitChunks: {
                chunks: 'all',
                automaticNameDelimiter: '.',
                cacheGroups: {
                    vendors: {
                        name: 'vendors',
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10,
                        enforce: true,
                        reuseExistingChunk: true
                    }
                }
            }
        }
    },
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
