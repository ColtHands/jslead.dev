<template>
    <h2>
        <NuxtLink to="/blog">
            <UiFlippingText text="Blog" />
        </NuxtLink>
    </h2>
</template>

<style lang="sass" scoped>
@use '~~/styles/variables'

h2
    font-size: 2.5rem
    text-transform: uppercase
</style>