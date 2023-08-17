<template>
    <div
        :style="style"
        @mouseover="toggleAnimatedClassName"
    >
        <div class="primary" />
        <div class="secondary" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        size: {
            type: Number,
            default: 20
        }
    },
    computed: {
        style() {
            const sizeInPx = `${this.size}px`
            return {
                width: sizeInPx,
                height: sizeInPx
            }
        }
    },
    methods: {
        toggleAnimatedClassName() {
            this.$el.classList.toggle('animate')
        }
    }
})
</script>

<style lang="sass" scoped>
@use '~~/styles/variables'

div
    display: inline-block
    border-radius: 100%
    z-index: 0
    vertical-align: top
    transition: all 0.5s ease-in-out
    background-color: variables.$white
    .animate
        transform: rotateY(180deg)
        background-color: variables.$orange
</style>