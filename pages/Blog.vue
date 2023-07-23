<template>
    <div>
        <UiSidebar title="Blog" />
        <div class="blog__posts">
            <ContentQuery v-slot="{ data }" :path="'/blog/articles'">
                <div v-for="(post, i) in sortBlogPostsByDate(data)" :key="i" class="blog__posts__post">
                    <IndexRightBlogPost :post="post" />
                </div>
            </ContentQuery>
        </div>
    </div>
</template>

<style scoped lang="sass">
@use '~~/styles/variables'

.blog
    &__posts
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
        border-bottom: 1.5px solid var(--gray-default)
    hr
        border: 1px solid var(--gray-default)
        margin-top: 0
</style>