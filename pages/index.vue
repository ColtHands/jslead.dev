<template>
    <main>
        <section class="left-section">
            <h1>
                <UiFlippingText text="Aleksei &nbsp; Karpenko" />
            </h1>
            <h2>
                <UiFlippingText text="FullStack &nbsp; TypeScript &nbsp; Engineer" />
            </h2>
            <div class="intro">
                <p>
                    <b>Hey there</b>.
                    I've created this website to capture my thoughts and display my opinions to the public.
                </p>
                <p>
                    <b>If you're a recruiter.</b>
                    You can message me on my <NuxtLink :to="myLinkedInUrl" target="_blank">LinkedIn</NuxtLink>.
                </p>
                <p>
                    <b>If you're a developer.</b>
                    You can message me on <NuxtLink :to="myTwitterUrl" target="_blank">Twitter</NuxtLink>.
                </p>
            </div>
        </section>
        <IndexRightBlogSection />
    </main>
</template>

<script setup lang="ts">
const {
    myLinkedInUrl,
    myTwitterUrl,
} = useAppConfig()
</script>

<style lang="sass" scoped>
@use '~~/styles/variables'

main
    display: grid
    grid-template-columns: repeat(2, 1fr)
    height: variables.$body-height-minus-header
    section
        &.left-section
            padding: 1.25rem
            display: flex
            flex-direction: column
            height: 100%
        h1, h2
            margin: 0
            font-weight: 700
            letter-spacing: -1.8px
            text-transform: uppercase
        h1
            line-height: 3rem
            font-size: clamp(2rem, 4.5vw, 3.75rem)
            margin-left: 0
        h2
            font-size: clamp(1.5rem, 3vw, 1.875rem)
            margin-top: 0.65rem
        div.intro
            margin-top: 0.4rem
    @media screen and (max-width: variables.$tablet-resolution)
        overflow-y: scroll
        grid-template-columns: 1fr
        section
            border: none !important
            div.intro
                margin-top: 1.3rem
            h2
                margin-top: 0
                font-weight: 500
                letter-spacing: -1.2px
                font-size: clamp(1.25rem, 3vw, 1.5rem)
            div.intro
                margin-top: 0.65rem
</style>