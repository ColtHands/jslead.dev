<template>
    <a
        class="linkedin-share-button"
        :href="linkedinShareUrl"
        data-size="large"
        target="_blank"
    >
        <i class="fa-brands fa-linkedin"></i>
        Share Via Linkedin
    </a>
</template>

<script setup lang="ts">
type Props = {
    title: string
    description: string
}
const props = defineProps<Props>()

const route = useRoute()
const currentPostURL = `https://colthands.dev${route.fullPath}`
const linkedinShareUrl = encodeURI(`https://www.linkedin.com/shareArticle?mini=true&url=${currentPostURL}&title=${props.title}&summary=${props.description}&source=${'colthands.dev'}`)
</script>