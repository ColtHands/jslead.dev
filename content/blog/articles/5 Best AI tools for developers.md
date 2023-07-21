---
title: 5 Best AI tools for developers
date: 06.24.2023
---

Recently, I see a lot of articles being posted about AI tools for developer. But it seems like majority of those are made not by developers themselves, but by writers, or marketers. Here I want to go over some AI tools that I or my colleagues use in day-to-day work.
I want for you to really get the sense of the tools that can make your life easier as an engineer and I hope you'll find some tool you haven't used/heard of.

You might see the pattern here, I prioritized not the specific tools, but ecosystems that make those tools so much more powerful.

## Github Copilot and GitHub Next

You might think Chat GPT would be number one, but believe me [Github Copilot](https://github.com/features/copilot) is the GOAT. [OpenAI Codex](https://openai.com/blog/openai-codex) is what powers github copilot and ot only there is code completion, but there is [Copilot Labs](https://githubnext.com/projects/copilot-labs/), that has code explanation, test generation and oh so great [code brushes](https://githubnext.com/projects/code-brushes/) where you can not only: "make code readable", "add types", or "fix bug". You can have your own custom code brush, what I mostly use this custom brush is for documenting my functions in [JSDoc](https://jsdoc.app/) format, just input "Generate JSDoc documentation for this function with @description, @example and @returns flags" and there you have it.

Not to mention theres upcoming Copilot [Voice](https://githubnext.com/projects/copilot-voice/), [Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat), [Docs](https://githubnext.com/projects/copilot-for-docs/), [CLI](https://githubnext.com/projects/copilot-cli/), [Pull Requests](https://githubnext.com/projects/copilot-for-pull-requests/) and [Copilot for your codebase](https://githubnext.com/projects/copilot-view/). Overall the [GitHub Next](https://githubnext.com/)'s scope of projects is oh-so promising,, with Microsoft and GitHub Next team(s) backing them up it's shaping to be an entire ecosystem for developers and engineers.

## Notion AI

There are so many AI-powered writing assistants available on the market, just have a look at [topai.tools section for writing](https://topai.tools/filter?t=writing). But [Notion AI](https://notion.so/ai) has a bunch of different features built in: summaries, translations, explanations, action points, grammar and spelling checks, and more. The most significant advantage and a drawback is that it is built into Notion. Nevertheless, it is worth trying out Notion and its AI tools, as even Microsoft is trying to emulate Notion's features and design with their own product, [Microsoft Loop](https://www.microsoft.com/en-us/microsoft-loop).

Yes, it's not a developer tool per-say, but it's such a useful tool on everything else there is: documentation, planning, summarizing meetings, generating simple code snippets, or mermaid charts and more.

## You.com

[You.com](https://you.com/) is a search engine specifically tailored to developers, it prioritizes documentation, stackoverflow, and other developer resources. Not that long ago you.com added AI assistant to their search engine, so you can ask questions and get answers from the web. But they didn't stop there, there's now [YouMagine](https://you.com/search?q=%40draw+a+cute+dog+in+space) an AI image generator, an AI image enhancer, code completion and others. Imagine you're using any search engine, but you get web results, AI chat-bot answer and related StackOverflow question **at the same time, in the same window**. The only downside - search results chat-bot answers are just not as good as Google's for example. It's all in one place and they are constantly adding new features, it's definitely worth checking out.

## Vercel Next Chat and Vercel AI SDK

Vercel just recently released [Vercel AI SDK](https://vercel.com/blog/introducing-the-vercel-ai-sdk) and built a template called [Next Chat](https://chat.vercel.ai/). The Vercel AI SDK is an [open source](https://github.com/vercel-labs/ai) lib that helps developers build conversational, streaming and chat like user interfaces with JavaScript, React/Next.js, Svelte/SvelteKit and soon Vue/Nuxt. I'm a big fan of "all tools in one place" as you can see and  Vercel AI SDK follows the same pattern here, it has [built-in LLM adaptors](https://vercel.com/blog/introducing-the-vercel-ai-sdk#built-in-llm-adapters) and supports OpenAI, Cohere, LangChain and Hugging Face interfaces. So that means you can use almost any "good" LLM you want within your project within a day.

On the [sdk.vercel.ai](https://sdk.vercel.ai/) page you can compare how different LLMs, it uses Next.js and the AI SDK itself under the hood. Which by itself is a great tool for developers that need to compare performance and outputs to prompts of different LLMs.

If you haven't, I encourage you to check out [Fireship video](https://www.youtube.com/watch?v=mG8UupGkbGo) guide and try it out for yourself.

![Vercel AI SDK prompt comparing](/images/Vercel-AI-SDK-prompt-compare.jpg "Vercel AI SDK prompt comparing")

## MindsDB

[MindsDB](https://mindsdb.com/) is an [open-source](https://github.com/mindsdb/mindsdb) server platform that helps developers build AI projects by abstracting Generative AI, LLMs as virtual [AI tables](https://www.youtube.com/watch?v=tnB4Y9T1E2k) with the help of other databases. It acts as an AI logic server between you and the data in your database. MindsDB is mostly a prediction platform, it basically combines AI with SQL queries. AI tables that MindsDB uses are ML models that are stored as a virtual tables.

It has [slack](https://mindsdb.com/joincommunity) community, and a very comprehensive community [tutorial list](https://docs.mindsdb.com/tutorials).

![MindsDB Flow](/images/MindsDB-flow.jpg "MindsDB Flow")

## Notable mentions

* [Open AI](https://openai.com/) - it's the GOAT, but there is way to much that was said about it and ChatGPT already, there's nothing to contribute here.
* [Amazon CodeWhisperer](https://aws.amazon.com/codewhisperer/) - it's great if you haven't tried anything yet, it has a free tier, it collects your data and just not as good as Copilot.
* [Tabnine](https://www.tabnine.com/) - uses same AI model as Copilot, but considering how much does Copilot offers, I can't recommend Tabnine as a first choice.
* [Replit GhostWriter](https://replit.com/site/ghostwriter) - as far as I know it only integrates with it's [repl.it](https://repl.it/) IDE, so it's not as versatile as Copilot.
* [Grammarly](https://app.grammarly.com/) - it's a great tool, it has some AI capabilities but it's not generative AI and not really for a developer.
* [Jasper](https://www.jasper.ai/) - probably the most versatile writing tool out there, but again there's Notion AI, that offers just more funtionality.
* [QuillBot](https://quillbot.com/) - great writing tool, but it doesn't have anything more than Notion AI already has.

## Summary

1. [Github Copilot](https://github.com/features/copilot) - the best code completion tool in the market right now, it's a part of [Github Next](https://githubnext.com/) which is becoming an ecosystem rather than just a tool.
2. [Notion AI](https://www.notion.so/product/ai) - AI-powered writing assistant, built into Notion, capable of summarizing, translating, explaining, checking grammar and spelling, and more.
3. [You.com](https://you.com/) - search engine specifically tailored to developers, it prioritizes documentation, stackoverflow, and other developer resources. It also has AI assistant, AI image generator, AI image enhancer, code completion and others.
4. [Vercel AI SDK](https://vercel.com/blog/introducing-the-vercel-ai-sdk) - very powerful SDK
5. [MindsDB](https://mindsdb.com/) - a server platform that help developers use AI with a database of your choice.
