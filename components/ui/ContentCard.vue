<template>
    <div class="card">
        <div class="wrap">
            <div class="header">
                <slot name="header" />
            </div>
            <div class="content">
                <slot />
            </div>
        </div>
        <div class="footprint"></div>
    </div>
</template>

<style lang="sass" scoped>
@use '~~/styles/variables'

$spacing: 20px

.card
    height: calc(100vh - 100px)
    position: relative
    @media screen and (max-width: variables.$tablet-resolution)
        overflow: visible
        height: 100%
    hr
        border: 1px solid variables.$white
    a p
        display: inline-block
    .wrap
        z-index: 2
        overflow: hidden
        background: variables.$background-color
        border: 2px solid variables.$gray
        border-radius: 3px
        position: relative
        @media screen and (min-width: variables.$tablet-resolution)
            height: calc(100vh - 100px)
    .footprint
        position: absolute
        background: variables.$dark-orange
        width: calc(100% - 5px)
        height: 100%
        left: 10px
        top: 10px
        z-index: 1
        border: 2px solid variables.$gray
        border-radius: 3px
        @media screen and (max-width: variables.$tablet-resolution)
    .header
        width: calc(100% - 30px)
        padding: 0 $spacing
        background: gray
        height: 4.4rem
        display: flex
        align-items: center
        border-bottom: 1px solid variables.$white
        white-space: nowrap
        overflow: scroll
    .content
        overflow-y: auto
        overflow-x: hidden
        padding: $spacing
        scrollbar-width: 10px
        height: 100%
        @media screen and (min-width: variables.$tablet-resolution)
            height: calc(100vh - 200px)
</style>