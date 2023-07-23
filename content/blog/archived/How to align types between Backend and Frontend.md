---
title: How to align types between Backend and Frontend
date: 07.23.2023
---

One of the problems I see developers have confusion with when structuring a Fullstack application - is how to align types between Backend and Frontend applications.

Here I want to cover all of the possible ways to do it, explain the pros and cons of each approach, and give you recommendation on which one to use in a specific situation. There are **two** main cases to consider: When you'r Backend and Frontend use different programming languages. And when they both use the same language.

## tRPC

If you're starting a new fullstack application with JavaScript 

**Pros**:
**Cons**:

## OpenAPI

**Pros**:
**Cons**:

## JSON Schema to TypeScript

**Pros**:
**Cons**:

## GraphQL

**Pros**:
**Cons**:

## Monorepo

**Pros**:
**Cons**:

## Just use Jamstack and SSRs

I will spare you details on [how Jamstack works](https://bejamas.io/blog/jamstack/) 🙃, but basically your application lives in the same project, each folder represents a different part of your application and types are reusable throughout.

Example, taken from [kit.svelte.dev](https://kit.svelte.dev/docs/project-structure):

```bash
my-project/
├ src/
│ ├ lib/
│ │ ├ server/
│ │ │ └ [your server-only lib files]
│ │ └ [your lib files]
│ ├ params/
│ │ └ [your param matchers]
│ ├ routes/
│ │ └ [your routes]
│ ├ app.html
│ ├ error.html
│ ├ hooks.client.js
│ └ hooks.server.js
├ static/
│ └ [your static assets]
├ tests/
│ └ [your tests]
├ package.json
├ svelte.config.js
├ tsconfig.json
└ vite.config.js
```

Since their popularisation with [Jekyll](https://jekyllrb.com/) and [Gatsby.js](http://gatsbyjs.org/) static site generators became my personal go-to when I need to create a type-safe website very quickly, path-based routing, auto-imports, ability to render [Markdown](https://content.nuxtjs.org/) files to html without worrying about compilers are just sprinkle of features these frameworks have.

The only major con they have is that by design most of the SSR do not have a persistent server, so if you need to implement Websocket's, polling, cron jobs or any other long-running tasks I would highly discourage you from using them as you end up with a lot of hacks and workarounds. However it's really simple to make a database request, or a request to another API.

Notable frameworks:

- [Next.js](https://nextjs.org/) - Is the GOAT atm, however a lot of other frameworks have it beat in performance, features, and DX.
- [Nuxt.js](https://nuxt.com/) - My personal favourite out of all of the frameworks, it's a perfect balance between features, performance, stability, and DX.
- [Svelte Kit](https://kit.svelte.dev/) - The rapidest of them all, it's a perfect choice for when you want to have fun, and have all the DX for yourself.

## Fullstack frameworks

<!-- Or a full stack framework like [Blitz.js](https://blitzjs.com/), or [t3.gg](https://create.t3.gg/), or [RedwoodJS](https://redwoodjs.com/), or  -->


## Ending thoughts

There are other _hardcore_ ways to align types between Backend and Frontend, like using [Protocol Buffers](https://developers.google.com/protocol-buffers) or [Apache Thrift](https://thrift.apache.org/), or even [gRPC](https://grpc.io/), or [FlatBuffers](https://google.github.io/flatbuffers/), or [Cap'n Proto](https://capnproto.org/). But I don't think they are worth the effort, unless you have a very specific use case.
