---
title: How to align types between Backend and Frontend Typescript applications
date: 07.30.2023
---

One of the topics I see **TypeScript** developers have confusion with, when developing a Fullstack application - is how to align types between Backend and Frontend applications.

Here I want to cover all of the common ways to do it, explain the pros and cons of each approach, and give you recommendation on which one to use in a specific situation.

## tRPC

If I'm starting a complex Fullstack application that might require WebSockets, long running tasks, db connections (basically application that has a lot of ambiguity) I would always go with [tRPC](https://trpc.io/), it's the best of Node.js, TypeScript and GraphQL worlds.

RPC - is short for "Remote Procedure Call". It is a way of calling functions on one computer (the server) from another computer (the client). tRPC uses _["Procedures"](https://trpc.io/docs/concepts)_, basically an abstraction from classic HTTP, so instead of endpoints you're calling functions.

Reusing types between tRPC server and client logic is dead simple (just take a look at [quickstart](https://trpc.io/docs/quickstart) on official docks):

**Create router and export AppRouter type**

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

**Use _AppRouter_ type on client**

```ts
// client.ts

import { createTRPCProxyClient } from '@trpc/client';
import type { AppRouter } from '../server';

const trpc = createTRPCProxyClient<AppRouter>({});
```

**Official example from tRPC docs**

<iframe
    loading="lazy"  
    width="100%"
    height="500px"
    style="border-radius: 5px;"
    src="https://stackblitz.com/github/trpc/trpc/tree/main/examples/minimal?embed=1&amp;file=client%2Findex.ts&amp;file=server%2Findex.ts&amp;hideNavigation=1&amp;terminalHeight=1&amp;showSidebar=0&amp;view=editor"
    frameborder="0">
</iframe>

**Pros**

* Easy to setup and use
* Very seamless typing
* Supports everything that you might need in a Fullstack application

**Cons**

* Abstractions are implicit and not obvious for a beginner
* Best works within one repository as a single project, it's not trivial to split tRPC app in one server and multiple clients, but at that point you're better off just publishing your types to npm registry, or using GraphQL.

## GraphQL

If you're developing an application in one single repository with GraphQL, I see no problem with sharing types.

But, if your Backend and Frontend live in different repositories, sharing types between them will require usage of a [GraphQL Code Generator](https://www.the-guild.dev/graphql/codegen), to generate types from `.graphql` schemas

There are [other ways](https://the-guild.dev/graphql/codegen/plugins/typescript/typescript) to build types, but my focus here on `.graphql` schemas, because they are language and framework agnostic and could be reused in any application regardless of programming language.

**Create GraphQL schema**

```graphql
type Query {
    hello: String,
}
```

**Install dependencies**

```bash
npm install -D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-resolvers
```

**Init config**

```bash
npx graphql-codegen init
```

**Script will ask you for a few inputs, here are the ones I used:**

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

**Run codegen**

```bash
npm run codegen
```

**Use types**

```ts
import type { Query } from './generated/graphql'
```

With this approach we've built types for our Backend server, but that doesn't mean we can't serve our GraphQL schemas and build them on the Frontend as well.

Other approach might be to build those types on server and then publish them to npm registry, and then use them in your Frontend application.

### Notable Services or packages

* [Apollo GraphQL](https://apollographql.com/) - Is the most popular GraphQL client, all in one package for building a complex application with a lot of data fetching, caching, and state management.
* [The Guild](https://the-guild.dev/) - group of open-source developers that develop packages related to our topic here: [GraphQL Code Generator](https://the-guild.dev/graphql/codegen) or [feTS](https://the-guild.dev/openapi/fets).
* [Graphbase](https://grafbase.com/) - product that takes multiple data sources (PostgreSQL, MongoDB, Stripe, Wordpress, etc) and combines them into a single GraphQL API, it has OpenAPI connector. It has auth, edge deployments and typesafety with TypeScript out of the box.

## OpenAPI

What I mean by that is using `openapi-typescript` package to build types from your OpenAPI schema, and then using those types in your Frontend application.

[What is OpenAPI](https://www.openapis.org/what-is-openapi)? It's a language agnostic specification for describing HTTP APIs with `.json` or `.yaml`.

Advantages here are that it's a _specifiaction_, and you can use **OpenAPI** with almost any programming language which is a very explicit API design pattern that facilitates documenting API requirements. From Frontend perspective it's a step above just publishing types to your `npm` registry, it can be done automatically, and you would only have to maintain the schemas.

**Create OpenAPI schema**

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

**Generate types**

```bash
npx openapi-typescript ./example.yml --output ./types.d.ts
```

**Use them**

```ts
import type { paths, components } from './types'
```

All those advantages are the disadvantages as well, you either use this standard or you don't. Sprinkling it into your code wont really do any good unless your thoughtful about your API design choices (same as using Vue with jsx and with template component's in the same project, you can do it, but that'll just create confusion), plus you'll need to build types each time you update your schema on backend, this happening async might introduce discrepancies between types.

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

This approach will utilize a json schema and package that will build that schema to types, we can take [json-schema-to-typescript](https://www.npmjs.com/package/json-schema-to-typescript) package and it works similarly to the examples above with OpenAPI or GraphQL: create a schema, install type-generator npm package, generate types, use them.

To be completely type-safe here however you would need validate your data against the schema on the server, build those to types and then use them on the client.

Main benefits here are that you might be using a service that you have little to no information about, or some legacy service where you need to type already existing API, but if you're starting a new application there are way better options to go about typing your applications.

A quick note on that Json schema has a robust ecosystem of [implementations](https://json-schema.org/implementations.html), one of them being an [online JSON to Typescript converter](https://app.quicktype.io/#l=schema).

Another notable packages for the client-side validation are [yup](https://www.npmjs.com/package/yup), [zod](https://zod.dev/) and [suretype](https://github.com/grantila/suretype).

## Ending thoughts

As you could see there are a lot of ways to share types between server and a client applications. All of the ones I've listed here have their own pros and cons, they all have their own specific ecosystem, meaning if you're using one, you are not really using the other.

It really depends on the requirements of your application and what experience your team has with all of the technologies listed here.

* If you don't know what kind of client you're going to have, will it be an SPA, or an SSR I would go with [tRPC](https://trpc.io/) because it bring end-to-end type-safety from the start and it will not limit your client side application.
* If you know that your server will be minimal and will not need any long-lived connections, or WebSockets the SSR framework is the way to go, it's the most simple and straightforward way to build a type-safe application.
* If you're server is going to live separately from the client, or will have multiple clients, I would go with GraphQL, it has a very robust ecosystem, not to mention it's a standard that emphasizes type-safe API design and is supported by all of the popular programming languages today.

### Notable libraries on the topic

* [Blitz.js](https://blitzjs.com/) - fullstack toolkit for [Next.js](https://nextjs.org/) where you can import your server code directly into the frontend.
* [t3.gg](https://create.t3.gg/) - is a web development stack including [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), Tailwind CSS, tRPC, Prisma and NextAuth
* [RedwoodJS](https://redwoodjs.com/) - fullstack framework for building _startups_, it (and i quote) weaves together the best parts of [React](https://reactjs.org/), [GraphQL](https://graphql.org/), [Prisma](https://www.prisma.io/), [TypeScript](https://www.typescriptlang.org/), [Jest](https://jestjs.io/) and [StoryBook](https://storybook.js.org/)
* [qwik](https://qwik.builder.io/) - a new, almost revolutionary approach for building web applications, it uses zero hydration technique to achieve insanely fast load times

If you feel like I've missed a topic, or made a mistake, please, feel free to ping me on [twitter](https://twitter.com/0xColtHands).
