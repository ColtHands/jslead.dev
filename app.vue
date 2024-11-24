<template>
    <NuxtLoadingIndicator />
    <UiHeader></UiHeader>
    <NuxtLayout>
        <NuxtPage></NuxtPage>
    </NuxtLayout>
</template>

<script lang="ts" setup>
useHead({
    title: 'Aleksei Karpenko - JavaScript Engineer',
    htmlAttrs: {
        lang: 'en'
    },
    meta: [
        { charset: 'utf-8' },
        { name: 'description', content: 'Aleksei Karpenko personal blog about Frontend trends, opinions, best-practices, patterns, management and leadership' }
    ],
    link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
        { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
})
</script>

<style lang="sass">
@use '~~/styles/variables'

html, body
    padding: 0
    margin: 0
    font-family: 'Hanken Grotesk', sans-serif
    background: variables.$background-color
    color: variables.$gray
    overflow: hidden

h1,
h2,
h3,
p,
ul,
ol,
pre
    margin: 0
    padding: 0

a
    color: variables.$gray

pre
    white-space: -o-pre-wrap
    white-space: -moz-pre-wrap
    white-space: -pre-wrap
    white-space: pre-wrap
    word-wrap: break-word

.page-enter-active,
.page-leave-active
    transition: all 0.4s

.page-enter-from,
.page-leave-to
    opacity: 0
    transform: translateX(100px)
</style>