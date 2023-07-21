<template>
    <p>
        <span
            v-for="(char, i) in textAsAnArray"
            :key="i"
            @mouseenter="toggleAnimatedClassName"
        >{{char}}</span>
    </p>
</template>

<script lang="ts" scoped>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        text: {
            type: String,
            default: 'text'
        }
    },
    computed: {
        textAsAnArray() {
            return this.text.split('')
        }
    },
    methods: {
        toggleAnimatedClassName(e: MouseEvent) {
            const target = e.target as HTMLSpanElement
            target.classList.toggle('animated')
        }
    }
})
</script>

<style lang="sass" scoped>
p
    margin: 0
    padding: 0
    display: inline-block
    span
        transition: all 0.5s ease-in-out
        display: inline-block
        &.animated
            transform: rotateY(180deg)
</style>
