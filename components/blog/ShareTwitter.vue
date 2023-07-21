<template>
    <a
        class="twitter-share-button"
        :href="twitterURL"
        data-size="large"
        target="_blank"
    >
        <i class="fa-brands fa-twitter"></i>
        Share Via Twitter
    </a>
</template>

<script lang="ts" setup>
type Props = { title: string }
const props = defineProps<Props>()
const route = useRoute()
const currentPostURL = `https://colthands.dev${route.fullPath}`
const twitterURL = encodeURI(`https://twitter.com/intent/tweet?text=${props.title}&url=${currentPostURL}`)
</script>
