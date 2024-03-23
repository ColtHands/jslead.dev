<template>
    <main>
        <section class="left-section">
            <h1>
                <UiFlippingText text="Aleksei &nbsp; Karpenko" />
            </h1>
            <h2>
                <UiFlippingText text="Fullstack JavaScript &nbsp; Engineer" />
            </h2>
            <div class="intro">
                <b>Hey there</b>.
                I've created this website to capture my thoughts and display my opinions to the public.
                <br>
                Maybe you disagree with what I have to say, I'd love to hear your opinion.
            </div>
        </section>
        <IndexRightBlogSection class="right-section" />
    </main>
</template>

<style lang="sass" scoped>
@use '~~/styles/variables'

main
    display: grid
    grid-template-columns: repeat(2, 1fr)
    height: variables.$body-height-minus-header
    @media screen and (max-width: variables.$tablet-resolution)
        overflow-y: scroll
        grid-template-columns: 1fr
        .section4
            display: none
        section
            border: none !important
            &.section1
                div.intro
                    margin-top: 20px
    section
        border: 1px solid variables.$white
        padding: 10px 20px
        &.left-section
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
</style>