<template>
    <div>
        <!-- TODO Redesign this section to resemble blog section on /index page -->
        <UiSidebar title="Blog" class="blog__sidebar" />
        <div class="blog__posts">
            <div v-for="(post, i) in articles" :key="i" class="blog__posts__post">
                <hr v-if="i > 0" />
                <IndexRightBlogPost :post="post" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const articles = await useBlogArticles()
</script>

<style lang="sass" scoped>
@use '~~/styles/variables'

hr
    border: 1px solid variables.$white
    margin-top: 0

.blog
    &__sidebar
        @media screen and (max-width: variables.$tablet-resolution)
            display: none
    &__posts
        @media screen and (max-width: variables.$tablet-resolution)
            padding: 1em
        margin: 0
        width: auto
        box-sizing: content-box-box
        max-height: calc(100vh - #{variables.$header-height})
        overflow-y: scroll
    &__posts__post
        @include variables.blogText
        padding: 1em 0
        max-width: 70ch
        margin: 0 auto
</style>