<template>
    <NuxtLink to="/blog" class="blog-post-single-link">
        <UiSidebar title="Blog" />
    </NuxtLink>
    <div class="blog-post-single">
        <ContentDoc v-slot="{ doc }">
            <article class="blog-post-single-content">
                <ContentRenderer :value="doc">
                    <header>
                        <h1>{{doc.title}}</h1>
                    </header>

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
                </ContentRenderer>
                <div class="blog-post-single-share">
                    <BlogShareTwitter :title="doc.title" />
                    <BlogShareLinkedin :title="doc.title" :description="doc.description" />
                </div>
            </article>
        </ContentDoc>
    </div>
</template>

<script lang="ts" setup>
import { formatDate } from '@/utils/contentUtils'
</script>

<style lang="sass" scoped>
.blog-post-single
    display: flex
    flex-direction: column
    justify-content: space-between
    max-height: var(--body-height-minus-header)
    overflow-x: hidden
    overflow-y: auto
    &-share
        border-top: 3px solid var(--orange)
        padding: 10px
        margin-top: 30px
        margin-bottom: 10px
        gap: 20px
        display: flex
    &-link
        @media screen and (max-width: 768px)
            display: none
    &-content
        margin: 0 auto
        max-width: 960px
        @media screen and (max-width: 1024px)
            padding: 0 20px
            width: 800px
        @media screen and (max-width: 768px)
            padding: 0 20px
            width: calc(100% - 40px)
        h1
            font-size: 44px
            font-weight: 600
            margin: 30px 0 20px
            letter-spacing: -1px
        .date
            font-style: italic
            font-weight: 500
            color: #333
            margin-bottom: 10px
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
        font-size: 16px
        line-height: 18px
        font-weight: 500
        letter-spacing: 0.2px
    ul, ol
        margin-top: 5px
    ul > li,
    ol > li
        list-style: inside
        margin-bottom: 5px
        margin-left: 20px
    h2
        font-weight: 600
        font-size: 32px
        margin: 20px 0 10px
    h3
        font-weight: 600
        font-size: 24px
        margin: 20px 0 10px
    code
        background-color: var(--gray-lighter)
        border-radius: 5px
        padding: 2px 5px
        display: inline-block
        font-size: 16px
        color: var(--code-highlight)
        margin: 1px 0
    pre
        background-color: var(--gray-lighter)
        border-radius: 5px
        padding: 10px
        display: inline-block
        font-size: 16px
        code
            background-color: var(--gray-lighter)
    table
        margin: 0 auto
    table, th, td
        border: 1px solid black
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
    div.ARIA-Roles > table
        th, td
            &:nth-child(2), &:nth-child(3), &:nth-child(4)
                @media screen and (max-width: 768px)
                    display: none
        td
            code
                border-radius: 5px
                padding: 2px 5px
                font-size: 16px
                color: var(--code-highlight)
</style>