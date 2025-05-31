import { fileURLToPath } from 'node:url'
import { defineConfig, devices } from '@playwright/test'
import type { ConfigOptions } from '@nuxt/test-utils/playwright'
import { isCI } from 'std-env'

const devicesToTest = [
    'Desktop Chrome',
    'iPhone 15',
    'iPhone 15 Landscape'
] satisfies Array<string | typeof devices[string]>

export default defineConfig<ConfigOptions>({
    testDir: './tests',
    fullyParallel: true,
    forbidOnly: !!isCI,
    retries: isCI ? 2 : 0,
    workers: isCI ? 1 : undefined,
    timeout: 60000,
    reporter: 'html',
    use: {
        trace: 'on-first-retry',
        nuxt: {
            rootDir: fileURLToPath(new URL('.', import.meta.url))
        }
    },
    projects: devicesToTest.map(p => typeof p === 'string' ? ({ name: p, use: devices[p] }) : p)
})
