<template>
    <main>
        <div class="left-section">
            <section class="section1">
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
            <section class="section4">
            </section>
        </div>
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
    .left-section
        display: flex
        flex-direction: column
    section
        border: 1px solid variables.$white
        padding: 10px 20px
    .section1
        height: 50%
        display: flex
        align-content: center
        flex-direction: column
        div.intro
            font-weight: 500
            margin-top: auto
    .section4
        padding: 0
        position: relative
        height: 50%
        .section4__left
            position: absolute
            top: 0
            left: 0
        .section4__right
            position: absolute
            bottom: 0
            right: 0
</style>