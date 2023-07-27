---
title: How to align types between Backend and Frontend Typescript applications
date: 07.23.2023
---

One of the problems I see developers have confusion with when structuring a Fullstack application - is how to align types between Backend and Frontend applications.

Here I want to cover all of the possible ways to do it, explain the pros and cons of each approach, and give you recommendation on which one to use in a specific situation. There are **two** main cases to consider: When you'r Backend and Frontend use different programming languages. And when they both use the same language.

## tRPC

If I'm starting a complex Fullstack application that might require WebSockets, long running tasks, db connections (basically application that has a lot of ambiguity) I would always go with [tRPC](https://trpc.io/), it's the best of Node.js, TypeScript and GraphQL worlds.

RPC - is short for "Remote Procedure Call". It is a way of calling functions on one computer (the server) from another computer (the client). tRPC uses _["Procedures"](https://trpc.io/docs/concepts)_, basically an abstraction from classic HTTP, so instead of endpoints you're calling functions.

Reusing types between tRPC server and client logic is dead simple (just take a look at [quickstart](https://trpc.io/docs/quickstart) on official docks):

#### 1. Create router and export AppRouter type

```ts
// server.ts

import { initTRPC, router } from '@trpc/server';

export const t = initTRPC.create();
export const router = t.router;

export const appRouter = router({
    // procedures
});

export type AppRouter = typeof appRouter;

```

#### 2. Use **AppRouter** type on client

```ts
// client.ts

import { createTRPCProxyClient } from '@trpc/client';
import type { AppRouter } from '../server';

const trpc = createTRPCProxyClient<AppRouter>({});
```

#### Official example from tRPC docs

<iframe
    loading="lazy"  
    width="100%"
    height="500px"
    style="border-radius: 5px;"
    src="https://stackblitz.com/github/trpc/trpc/tree/main/examples/minimal?embed=1&amp;file=client%2Findex.ts&amp;file=server%2Findex.ts&amp;hideNavigation=1&amp;terminalHeight=1&amp;showSidebar=0&amp;view=editor"
    frameborder="0">
</iframe>

#### Pros

* Easy to setup and use
* Very seamless typing
* Supports everything that you might need in a Fullstack application

#### Cons

* Abstractions are implicit and not obvious for a beginner
* Best works within one repository as a single project, it's not trivial to split tRPC app in one server and multiple clients, but at that point you're better off just publishing your types to npm registry and using GraphQL.

## GraphQL

Sharing types between Backend and Frontend that's using GraphQL is practically the same as using OpenAPI, you're using a `@graphql-codegen/cli` to build those `.graphql` schemas to types, and then using them in your Frontend application.

We'll be using [GraphQL Code Generator](https://www.the-guild.dev/graphql/codegen), to generate types from `.graphql` schemas. There are [other ways](https://the-guild.dev/graphql/codegen/plugins/typescript/typescript) to build types, but my focus here on `.graphql` schemas, because they are language and framework agnostic and could be reused in any application regardless of programming language.

1. Create GraphQL schema

```graphql
type Query {
    hello: String,
}
```

* Install dependencies

```bash
npm install -D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-resolvers
```

* Init config

```bash
npx graphql-codegen init
```

* Script will ask you for a few inputs, here are the ones I used:

```bash
? What type of application are you building? Backend - API or server
? Where is your schema?: (path or url) ./src/server/api/graphql/index.graphql
? Pick plugins: TypeScript (required by other typescript plugins), TypeScript Resolvers (strongly typed resolve functions)
? Where to write the output: src/generated/graphql.ts
? Do you want to generate an introspection file? No
? How to name the config file? codegen.ts
? What script in package.json should run the codegen? codegen
```

With these inputs script will generate a `codegen.ts` file in your root directory, and a `codegen` script in your `package.json`.

1. Run codegen

```bash
npm run codegen
```

5. Use types

```ts
import type { Query } from './generated/graphql'
```

With this approach we've built types for our Backend server, but that doesn't mean we can't serve our GraphQL schemas and build them on the Frontend as well.

Other approach might be to build those types on server and then publish them to npm registry, and then use them in your Frontend application.

## OpenAPI

What I mean by that is using `openapi-typescript` package to build types from your OpenAPI schema, and then using those types in your Frontend application.

[What is OpenAPI](https://www.openapis.org/what-is-openapi)? It's a language agnostic specification for describing HTTP APIs with `.json` or `.yaml`.

Advantages here are that it's a _standard_, you can use **OpenAPI** with almost any programming language and it's a very coherent API design pattern which facilitates documenting API requirements, from Frontend perspective it's a step above just publishing types to your `npm` registry, it can be done automatically, and you would only have to maintain schemas.

1. Create OpenAPI schema

```yaml
# example.yml

openapi: 3.0.3
info:
  title: Sample Bookstore API
  version: 1.0.0
paths:
  /books:
    get:
      summary: Get all books
      responses:
        '200':
          description: A list of books.

    post:
      summary: Add a new book
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                title: { type: string }
                author: { type: string }
components:
  schemas:
    Book:
      type: object
      properties:
        title: { type: string }
```

2. Generate types

```bash
npx openapi-typescript ./example.yml --output ./types.d.ts
```

3. Use them

```ts
import type { paths, components } from './types'
```

All those advantages are the disadvantages as well, you either use this standard or you don't. Sprinkling it into your code wont really do any good unless your thoughtful about your API design choices (same as using Vue with jsx and with template component's in the same project, you can do it, but that'll just create confusion), plus you'll need to build types each time you update your schema on backend, this happening async might introduce bugs.

## Jamstack and SSR

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

Since their popularisation with [Jekyll](https://jekyllrb.com/) and [Gatsby.js](http://gatsbyjs.org/) static site generators became my personal go-to when I need to create a type-safe website very quickly, path-based routing, auto-imports, ability to render [Markdown](https://content.nuxtjs.org/) files to html without worrying about compilers are just a small portion of features these frameworks have.

The only major con they have is that by design most of the SSR do not have a persistent server, so if you need to implement Websocket's, polling, cron jobs or any other long-running tasks I would highly discourage you from using them as you end up with a lot of hacks and workarounds. However it's really simple to make a database request, or a request to another API.

### Top frameworks

* [Next.js](https://nextjs.org/) - Is the GOAT atm, however a lot of other frameworks have it beat in performance, features, and DX.
* [Nuxt.js](https://nuxt.com/) - My personal favourite out of all of the frameworks, it's a perfect balance between features, performance, stability, and DX.
* [Svelte Kit](https://kit.svelte.dev/) - The rapidest of them all, it's a perfect choice for when you want to have fun, and have all the DX for yourself.

### Small example

1. Type `HelloWorld` is defined in `./types.d.ts`
2. This type is used in `./server/routes/hello.ts`
3. And also used in `app.vue`

<iframe
    width="100%"
    height="650"
    style="border: 1px solid rgba(0, 0, 0, 0.1); border-radius:5px;"
    src="https://codesandbox.io/p/sandbox/green-star-q3flfh?file=%2Fapp.vue%3A6%2C53&embed=1"
    allowfullscreen
>
</iframe>

## JSON Schema

This approach will utilize a json schema and [json-schema-to-typescript](https://www.npmjs.com/package/json-schema-to-typescript) package and will work just like examples above with OpenAPI or GraphQL: create a schema, install type-generator npm package, generate types, use them.

A quick not on that Json schema has a robust ecosystem of [implementations](https://json-schema.org/implementations.html), one of them being an [online JSON to Typescript converter](https://app.quicktype.io/#l=schema).

Main benefits here are that you might be using a service that you have little to no information about, or some legacy service where you need to type already existing API, but if you're starting a new application there are way better options to go about typing your applications.

## Monorepo

If you're having a single repository for your Backend and Frontend applications (which could be more than two), you could just reuse types between all of them.

With this approach you're spared the hassle of publishing types, you can just reuse them.

## Notable mentions

* [Blitz.js](https://blitzjs.com/)
* [t3.gg](https://create.t3.gg/)
* [RedwoodJS](https://redwoodjs.com/)
* [qwik](https://github.com/BuilderIO/qwik)
* [Protocol Buffers](https://developers.google.com/protocol-buffers)
* [Apache Thrift](https://thrift.apache.org/)
* [gRPC](https://grpc.io/)
* [FlatBuffers](https://google.github.io/flatbuffers/)
* [Cap'n Proto](https://capnproto.org)
