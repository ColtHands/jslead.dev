<template>
    <div>
        <UiSidebar title="Blog" class="blog__sidebar" />
        <div class="blog__posts">
            <div v-for="(post, i) in articles" :key="i" class="blog__posts__post">
                <IndexRightBlogPost :post="post" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { BlogPost } from '~~/utils/contentUtils'

const articles = await queryContent<BlogPost>('/blog/articles')
    .where({ visible: true })
    .sort({ date: -1 })
    .find()
</script>

<style lang="sass" scoped>
@use '~~/styles/variables'

.blog
    &__sidebar
        @media screen and (max-width: variables.$tablet-resolution)
            display: none
    &__posts
        @media screen and (max-width: variables.$tablet-resolution)
            padding: 1rem   
        margin: 0
        width: auto
        box-sizing: content-box-box
        max-height: calc(100vh - #{variables.$header-height})
        overflow-y: scroll
    &__posts__post
        @include variables.blogText
        padding: 1rem 0
        max-width: 70ch
        margin: 0 auto
        border-bottom: 1.5px solid variables.$white
    hr
        border: 1px solid variables.$white
        margin-top: 0
</style>