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

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap");

:root {
    --gray300: #8D8D8D;
    --background: #9791a2;
    --gray-default: #262625;
    --gray-lighter: #363632;
    --orange: #933929;
    --code-highlight: #cf9825;
    --white: hsl(264deg 7.41% 74.49%);
    --body-height-minus-header: calc(100vh - 61px);
}

html, body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    background: var(--background);
    color: black;
}

h1,
h2,
h3,
p,
ul,
ol,
pre {
    margin: 0;
    padding: 0;
}

a {
    color: black;
}

pre {
    white-space: -o-pre-wrapp;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: pre-wrapp;
    word-wrap: break-word;
}
</style>