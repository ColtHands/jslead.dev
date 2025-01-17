import { defineNuxtPlugin } from '#app'
import posthog from 'posthog-js'

export default defineNuxtPlugin(() => {
    const runtimeConfig = useRuntimeConfig()
    const posthogClient = posthog.init(runtimeConfig.public.posthogPublicKey, {
        api_host: runtimeConfig.public.posthogHost || 'https://us.i.posthog.com',
        capture_pageview: true,
        loaded: (posthog) => {
            if(import.meta.env.MODE === 'development') posthog.debug()
        }
    })

    return {
        provide: {
            posthog: () => posthogClient
        }
    }
})