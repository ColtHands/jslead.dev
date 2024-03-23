<template>
    <section>
        <div class="section-wrap">
            <IndexRightBlogSectionHeader />
            <div class="section-content">
                <div v-for="(post, i) in articles" :key="i">
                    <hr v-if="i > 0">
                    <IndexRightBlogPost :post="post" />
                </div>
            </div>
        </div>
        <div class="section-footprint"></div>
    </section>
</template>

<script lang="ts" setup>
const articles = await useBlogArticles()
</script>

<style lang="sass" scoped>
@use '~~/styles/variables'

section
    margin-right: 20px
    margin-left: 10px
    height: calc(100vh - 100px)
    position: relative
    @media screen and (max-width: variables.$tablet-resolution)
        overflow: visible
        height: 100%
    hr
        border: 1px solid variables.$white
    a p
        display: inline-block
    .section-wrap
        z-index: 2
        overflow-y: hidden
        overflow-x: hidden
        background: variables.$background-color
        border: 2px solid variables.$gray
        border-radius: 3px
        position: relative
        @media screen and (min-width: variables.$tablet-resolution)
            height: calc(100vh - 100px)
    .section-footprint
        position: absolute
        background: variables.$dark-orange
        width: calc(100% - 5px)
        height: 100%
        left: 10px
        top: 10px
        z-index: 1
        border: 2px solid variables.$gray
        border-radius: 3px
        @media screen and (max-width: variables.$tablet-resolution)
    .section-content
        overflow-y: auto
        overflow-x: hidden
        padding: 20px
        scrollbar-width: 10px
        @media screen and (min-width: variables.$tablet-resolution)
            height: calc(100vh - 100px)
</style>