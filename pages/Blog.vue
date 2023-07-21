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
.blog__posts
    margin: 0 auto
    max-width: 70ch

.blog__posts__post
    font-weight: 500
    line-height: 1.5rem
    padding: 1em
    border-bottom: 1.5px solid var(--gray-default)

hr
    border: 1px solid var(--gray-default)
    margin-top: 0
</style>