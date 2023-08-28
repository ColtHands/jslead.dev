<template>
    <section>
        <IndexRightBlogSectionHeader />
        <div v-for="(post, i) in articles" :key="i">
            <hr>
            <IndexRightBlogPost :post="post" />
        </div>
        <hr>
    </section>
</template>

<script lang="ts" setup>
import type { BlogPost } from '~~/utils/contentUtils'

const articles = await queryContent<BlogPost>('/blog/articles')
    .sort({ date: -1 })
    .find()
</script>

<style lang="sass" scoped>
@use '~~/styles/variables'

section
    overflow-y: auto
    overflow-x: hidden
    @media screen and (max-width: variables.$tablet-resolution)
        overflow: visible
        height: 100%
    hr
        border: 1px solid variables.$white
    a p
        display: inline-block
</style>