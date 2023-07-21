<template>
    <div class="blog-post">
        <NuxtLink :to="props.post._path">
            <h3>{{props.post.title}}</h3>
        </NuxtLink>
        <p>{{props.post.description}}</p>
        <NuxtLink :to="props.post._path">
            <UiButton text="go to post" />
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
import type { BlogPost } from '~~/utils/contentUtils'

type Props = {
    post: BlogPost
}
const props = defineProps<Props>()
</script>

<style lang="sass" scoped>
@use '~~/styles/variables'

.blog-post
    display: flex
    flex-direction: column
    justify-content: space-between
    h3
        letter-spacing: -1px
        font-size: 24px
        line-height: 1.5
        font-weight: 700
    p
        @include variables.blogText
    p, a
        margin: 10px 0
    button
        margin-left: auto
        display: block
</style>