<template>
    <div class="sidebar">
        <UiFlippingText :text="title" />
    </div>
</template>

<script lang="ts" setup>
defineProps<{ title: string }>()
</script>

<style lang="sass" scoped>
@use '~~/styles/variables'

.sidebar
    float: left
    vertical-align: top
    position: relative
    width: variables.$sidebar-width
    background: variables.$background-color
    height: variables.$body-height-minus-header
    p
        font-size: 3.75rem
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