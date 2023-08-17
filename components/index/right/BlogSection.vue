<template>
    <section>
        <IndexRightBlogSectionHeader />
        <ContentQuery v-slot="{ data }" :path="'/blog/articles'">
            <div v-for="(post, i) in sortBlogPostsByDate(data)" :key="i">
                <hr>
                <IndexRightBlogPost :post="post" />
            </div>
            <hr>
        </ContentQuery>
    </section>
</template>

<script lang="ts" setup>
import { sortBlogPostsByDate } from '~~/utils/contentUtils'
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
        border: 1px solid variables.$gray-default
    a p
        display: inline-block
</style>