<template>
    <header id="header">
        <NuxtLink to="/" aria-label="Main page link logo">
            <UiHeaderLogo />
        </NuxtLink>
        <div id="menu">
            <NuxtLink
                v-if="shouldDisplayPortfolioFromQuery"
                id="portfolio-link"
                target="_blank"
                to="https://www.notion.so/colthands/40e6bfd11ad34fabaa870fed6d77fc0e?v=6562fb2100234cbaaa208af798be2c70"
            >
                Portfolio
            </NuxtLink>
            <NuxtLink target="_blank" to="https://twitter.com/JavaScriptLead" aria-label="Twitter link icon">
                <IconXTwitter />
            </NuxtLink>
            <NuxtLink target="_blank" to="https://github.com/ColtHands" aria-label="Github link icon">
                <IconGithub />
            </NuxtLink>
            <NuxtLink target="_blank" to="https://www.linkedin.com/in/aleksey-karpenko/" aria-label="Linkedin link icon">
                <IconLinkedIn />
            </NuxtLink>
            <NuxtLink target="_blank" to="https://www.npmjs.com/~coldhands" aria-label="NPM link icon">
                <IconNpm />
            </NuxtLink>
        </div>
    </header>
</template>

<script setup lang="ts">
const route = useRoute()
const shouldDisplayPortfolioFromQuery = route.query.displayPortfolio === 'true'
</script>

<style lang="sass" scoped>
@use '~~/styles/variables'

$padding: 10px

header#header
    width: 100%
    background: variables.$background-color
    height: variables.$header-height
    padding: $padding $padding*2
    display: flex
    align-items: center
    justify-content: space-between
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
            &:hover
                svg
                    fill: variables.$dark-orange
    @media screen and (max-width: 480px)
        #portfolio-link
            display: none
</style>