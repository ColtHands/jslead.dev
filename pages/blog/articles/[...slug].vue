<template>
    <NuxtLink to="/" class="blog-post-single-link">
        <UiSidebar title="Blog" />
    </NuxtLink>

    <div class="blog-post-single">
        <ContentDoc v-slot="{ doc }">
            <article class="blog-post-single-content">
                <ContentRenderer :value="doc">
                    <UiContentCard>
                        <template #header>
                            <h1>{{doc.title}}</h1>
                        </template>

                        <template #default>
                            <p class="date">{{formatDate(doc.date)}}</p>

                            <div class="contents">
                                <p>Contents</p>
                                <ul>
                                    <li v-for="(e,i) in doc.body.toc.links" :key="i">
                                        <a :href="`#${e.id}`">{{e.text}}</a>
                                    </li>
                                </ul>
                            </div>

                            <ContentRendererMarkdown :value="doc" class="md" />

                            <div class="blog-post-single-share">
                                <BlogShareTwitter :title="doc.title" />
                                <BlogShareLinkedin :title="doc.title" :description="doc.description" />
                            </div>
                        </template>
                    </UiContentCard>
                </ContentRenderer>
            </article>
        </ContentDoc>
    </div>
</template>

<script lang="ts" setup>
import { formatDate } from '@/utils/contentUtils'
</script>

<style lang="sass" scoped>
@use '~~/styles/variables'

.blog-post-single
    display: flex
    flex-direction: column
    justify-content: space-between
    overflow-x: hidden
    overflow-y: auto
    height: variables.$body-height-minus-header
    &-share
        border-top: 3px solid variables.$orange
        padding: 10px
        margin-top: 2em
        margin-bottom: 10px
        gap: 20px
        display: flex
    &-link
        @media screen and (max-width: variables.$tablet-resolution)
            display: none
    &-content
        margin: 0 auto
        max-width: calc(70ch + 200px)
        font-size: 1.125rem
        @media screen and (max-width: 1024px)
            padding: 0 20px
            width: 800px
        @media screen and (max-width: variables.$tablet-resolution)
            padding: 0 20px
            width: calc(100% - 40px)
        h1
            font-size: 2rem
            font-weight: 600
            letter-spacing: -1px
            line-height: 3rem
        .date
            font-style: italic
            font-weight: 500
            color: gray
            margin: 10px 0
            font-size: 0.8em
        .contents
            background-color: #333
            padding: 10px
            display: inline-block
            color: #bebebe
            border-radius: 5px
            margin: 10px 0
            p
                text-align: center
                color: #aeaeae
                font-weight: 600
                font-size: 18px
            ul
                list-style: inside
                border: 1px solid #333
                li
                    line-height: 1.5em
                    a
                        color: #aeaeae
                        text-decoration: none
                    &::marker
                        content: "# "
                        color: #555

:deep(.md)
    a
        color: hsl(231 81% 27% / 1)
        text-decoration: underline
    h1, h2, h3, h4, h5, h6
        letter-spacing: -1px
        a
            color: black
            text-decoration: none
    p
        margin: 10px 0
    p, li
        @include variables.blogText
    ul, ol
        margin-top: 5px
    ul > li,
    ol > li
        list-style: inside
        margin-bottom: 5px
        margin-left: 20px
    h2
        font-weight: 600
        font-size: 2em
        margin: 20px 0 10px
    h3
        font-weight: 600
        font-size: 1.5em
        margin: 20px 0 10px
    code, pre
        background-color: variables.$gray
        border-radius: 5px
        display: inline-block
        font-size: 0.9em
    code
        padding: 2px 5px
        color: variables.$orange
        margin: 1px 0
    pre
        padding: 10px
    table
        margin: 0 auto
    table, th, td
        border: 1px solid variables.$gray
        border-collapse: collapse
        thead
            th
                padding: 10px 5px
                text-align: center
        tbody
            td
                font-weight: 400
                padding: 5px
                text-align: center
    iframe
        margin: 5px auto
    img
        margin: 5px auto
        width: 100%
        height: auto
        border-radius: 5px
    div.ARIA-Roles > table
        th, td
            &:nth-child(2), &:nth-child(3), &:nth-child(4)
                @media screen and (max-width: variables.$tablet-resolution)
                    display: none
        td
            code
                border-radius: 5px
                padding: 2px 5px
                font-size: 16px
                color: variables.$orange
</style>