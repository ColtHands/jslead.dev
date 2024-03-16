<template>
    <button>
        {{props.text}}
        <div class="sq">
            <i class="fa-solid fa-arrow-right-long"></i>
        </div>
    </button>
</template>

<script lang="ts" setup>
const props = defineProps<{ text: string }>()
</script>

<style lang="sass" scoped>
@use '~~/styles/variables'

button
    font-family: inherit
    padding: 6px 49px 6px 18px
    border: 1.5px solid variables.$gray
    border-radius: 2px
    box-shadow: 4px 4px 0 0 variables.$gray
    cursor: pointer
    background-color: variables.$white
    font-weight: 800
    text-transform: uppercase
    position: relative
    transition: all ease 100ms
    &::after
        content: ""
        width: calc(100% + 2px)
        height: calc(100% + 2px)
        position: absolute
        top: 3px
        left: 3.5px
        border-right: 1.5px solid variables.$white
        border-bottom: 1.5px solid variables.$white
        border-radius: 2px
        border-bottom-right-radius: 3px
        transition-delay: 50ms
    &:active
        transform: translate(4px, 4px)
        box-shadow: 0px 0px 0px 0px variables.$gray
        &::after
            border: 0px
    div.sq
        height: 100%
        width: 33px
        position: absolute
        right: 0
        top: 0
        background: variables.$orange
        font-weight: 800
        display: flex
        justify-content: center
        align-items: center
        font-size: 1.25em
</style>