<template>
    <UiHeader></UiHeader>
    <NuxtLayout>
        <NuxtPage></NuxtPage>
    </NuxtLayout>
</template>

<script lang="ts" setup>
useHead({
    title: 'ColtHands - Aleksei Karpenko',
    link: [
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap' },
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
    font-family: 'Montserrat', sans-serif
    background: variables.$background-color
    color: black
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
    color: black

pre
    white-space: -o-pre-wrap
    white-space: -moz-pre-wrap
    white-space: -pre-wrap
    white-space: pre-wrap
    word-wrap: break-word
</style>