<template>
    <div class="sidebar">
        <UiFlippingText :text="title" />
    </div>
</template>

<script lang="ts" setup>
defineProps<{ title: string }>()
</script>

<style lang="sass">
.sidebar
    float: left
    vertical-align: top
    height: var(--body-height-minus-header)
    position: relative
    width: 80px
    border-right: 1px solid black
    // background-color: var(--white)
    background: linear-gradient(0deg, #ffe4d6, #d5acf5)
    p
        font-size: 60px
        font-weight: 500
        text-transform: uppercase
        white-space: nowrap
        display: inline-block
        margin: 0
        padding: 0
        position: absolute
        top: 50%
        left: 50%
        transform: translateX(-50%) translateY(-50%) rotate(-90deg)
</style>