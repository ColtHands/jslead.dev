<template>
    <header id="header">
        <UiHeaderLogo />
        <div id="menu">
            <NuxtLink
                v-if="shouldDisplayPortfolioLink"
                id="portfolio-link"
                target="_blank"
                to="https://www.notion.so/colthands/40e6bfd11ad34fabaa870fed6d77fc0e?v=6562fb2100234cbaaa208af798be2c70"
            >
                Portfolio
            </NuxtLink>
            <NuxtLink target="_blank" to="https://twitter.com/0xColtHands">
                <i class="fa-brands fa-twitter"></i>
            </NuxtLink>
            <NuxtLink target="_blank" to="https://github.com/ColtHands">
                <i class="fa-brands fa-github"></i>
            </NuxtLink>
            <NuxtLink target="_blank" to="https://www.linkedin.com/in/aleksey-karpenko/">
                <i class="fa-brands fa-linkedin"></i>
            </NuxtLink>
            <NuxtLink target="_blank" to="https://www.npmjs.com/~coldhands">
                <i class="fa-brands fa-npm"></i>
            </NuxtLink>
        </div>
    </header>
</template>

<script setup lang="ts">
const { $posthogClient } = useNuxtApp()
const shouldDisplayPortfolioLink = $posthogClient?.isFeatureEnabled('displayPortfolioLink')
</script>

<style lang="sass" scoped>
@use '~~/styles/variables'

$padding: 10px

header#header
    width: 100%
    background: linear-gradient(270deg, #ffe4d6, #d5acf5)
    height: variables.$header-height
    padding: $padding $padding*2
    display: flex
    align-items: center
    justify-content: space-between
    border-bottom: 1px solid black
    box-sizing: border-box
    #menu
        display: flex
        align-items: center
        justify-content: space-between
        flex-direction: row
        a
            text-decoration: none
            margin: 0 10px
            font-weight: 500
            display: flex
            align-items: center
            i
                font-size: 1.5rem
    @media screen and (max-width: 480px)
        #portfolio-link
            display: none
</style>