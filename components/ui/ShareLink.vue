<template>
    <a
        :href="props.url"
        data-size="large"
        target="_blank"
        style="text-decoration: none"
    >
        <IconXTwitter v-if="icon === 'twitter'" />
        <IconLinkedIn v-else-if="icon === 'linkedin'" />
        <span>{{props.title}}</span>
    </a>
</template>

<script lang="ts" setup>
type Props = {
    title: string
    url: string
    icon: 'twitter' | 'linkedin'
}
const props = defineProps<Props>()
</script>

<style lang="sass" scoped>
    i
        margin-right: 5px
</style>