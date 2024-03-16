<template>
    <a
        :href="props.url"
        data-size="large"
        target="_blank"
        style="text-decoration: none"
    >
        <i :class="['fa-brands', props.icon]"></i>
        <span>{{props.title}}</span>
    </a>
</template>

<script lang="ts" setup>
type Props = {
    title: string
    url: string
    icon: `fa-${string}`
}
const props = defineProps<Props>()
</script>

<style lang="sass" scoped>
i
    margin-right: 5px
</style>