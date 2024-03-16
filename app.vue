<template>
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
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' },
        { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
        { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
        {
            src: 'https://kit.fontawesome.com/1d54e15326.js',
            body: true
        }
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