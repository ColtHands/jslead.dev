<template>
    <UiShareLink
        title="Share via twitter"
        :url="twitterURL"
        icon="fa-twitter"
    />
</template>

<script lang="ts" setup>
type Props = { title: string }
const props = defineProps<Props>()
const route = useRoute()
const currentPostURL = `https://colthands.dev${route.fullPath}`
const twitterURL = encodeURI(`https://twitter.com/intent/tweet?text=${props.title}&url=${currentPostURL}`)
</script>
