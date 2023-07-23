<template>
    <div id="logo">
        <NuxtLink to="/">
            ColtHands
        </NuxtLink>
    </div>
</template>

<style lang="sass">
#logo
    font-weight: 800
    display: inline-block
    position: relative
    z-index: 1
    margin-left: 10px
    font-size: 1.5rem
    a
        text-decoration: none
    &::before
        content: ''
        width: 2em
        height: 2em
        position: absolute
        border-radius: 100%
        display: inline-block
        vertical-align: middle
        background-color: var(--orange)
        z-index: -1
        top: -0.4em
        left: -0.65em
</style>