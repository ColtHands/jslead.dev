<template>
    <section>
        <UiContentCard>
            <template #header>
                <IndexRightBlogSectionHeader />
            </template>
            <template #default>
                <div class="section-content">
                    <div v-for="(post, i) in articles" :key="i">
                        <hr v-if="i > 0">
                        <IndexRightBlogPost :post="post" />
                    </div>
                </div>
            </template>
        </UiContentCard>
    </section>
</template>

<script lang="ts" setup>
const { data: articles } = await useBlogArticles()
</script>

<style lang="sass" scoped>
@use 'sass:math'
@use '~~/styles/variables'

$spacing: 20px

section
    padding-right: $spacing
    padding-left: math.div($spacing, 2)
    margin-right: $spacing
    margin-left: math.div($spacing, 2)
    position: relative
    @media screen and (max-width: variables.$tablet-resolution)
        overflow: visible
        height: 100%
        margin: 0
    hr
        border: 1px solid variables.$white
    a p
        display: inline-block
</style>