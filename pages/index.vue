<template>
    <main>
        <div class="left-section">
            <section class="section1">
                <UiFlippingText text="Aleksei &nbsp; Karpenko" />
                <UiFlippingText text="JavaScript &nbsp; Engineer" />
                <div class="intro">
                    <b>Hey there</b>.
                    I've created this website to capture my thoughts and display my opinions to the public.
                    <br>
                    Maybe you disagree with what I have to say, I'd love to hear your opinion.
                </div>
            </section>
            <section class="section4">
                <div class="section4__left">
                    <div>
                        <UiCircle :size="80" />
                        <UiCircle :size="80" />
                        <UiCircle :size="80" />
                    </div>
                    <div>
                        <UiCircle :size="80" />
                        <UiCircle :size="80" />
                    </div>
                </div>
                <div class="section4__right">
                    <div>
                        <UiCircle :size="40" />
                    </div>
                    <div>
                        <UiCircle :size="25" />
                        <UiCircle :size="25" />
                        <UiCircle :size="25" />
                        <UiCircle :size="25" />
                        <UiCircle :size="25" />
                        <UiCircle :size="25" />
                        <UiCircle :size="25" />
                        <UiCircle :size="25" />
                    </div>
                    <div>
                        <UiCircle :size="25" />
                        <UiCircle :size="25" />
                        <UiCircle :size="25" />
                        <UiCircle :size="25" />
                        <UiCircle :size="25" />
                        <UiCircle :size="25" />
                        <UiCircle :size="25" />
                        <UiCircle :size="25" />
                    </div>
                    <div>
                        <UiCircle :size="25" />
                        <UiCircle :size="25" />
                        <UiCircle :size="25" />
                        <UiCircle :size="25" />
                        <UiCircle :size="25" />
                        <UiCircle :size="25" />
                        <UiCircle :size="25" />
                        <UiCircle :size="25" />
                    </div>
                    <div>
                        <UiCircle :size="25" />
                        <UiCircle :size="25" />
                        <UiCircle :size="25" />
                        <UiCircle :size="25" />
                        <UiCircle :size="25" />
                        <UiCircle :size="25" />
                        <UiCircle :size="25" />
                        <UiCircle :size="25" />
                    </div>
                    <div>
                        <UiCircle :size="25" />
                        <UiCircle :size="25" />
                        <UiCircle :size="25" />
                        <UiCircle :size="25" />
                        <UiCircle :size="25" />
                        <UiCircle :size="25" />
                        <UiCircle :size="25" />
                        <UiCircle :size="25" />
                    </div>
                </div>
            </section>
        </div>
        <IndexRightBlogSection class="right-section" />
    </main>
</template>

<style lang="sass" scoped>
@use '~~/styles/variables'

main
    display: grid
    height: var(--body-height-minus-header)
    grid-template-columns: repeat(2, 1fr)
    @media screen and (max-width: variables.$tablet-resolution)
        height: auto
        grid-template-columns: 1fr
        .section4
            display: none
        section
            border: none !important
            &.section1
                height: auto
                div.intro
                    margin-top: 20px
    .left-section
        display: flex
        flex-direction: column
    section
        border: 1px solid black
        padding: 10px 20px
    .section1
        height: 50%
        display: flex
        align-content: center
        flex-direction: column
        p
            margin: 0
            font-weight: 700
            letter-spacing: -2px
            text-transform: uppercase
            &:first-child
                margin-left: 0
                font-size: 60px
            &:nth-child(2)
                font-size: 30px
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