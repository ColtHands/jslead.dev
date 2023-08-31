---
title: The curious case of Agents in AI, how to Auto GPT
date: 04.17.2023
visible: true
---

In AI, an intelligent agent (IA) is an independent entity, a computer program, a system which perceives, observes and operates upon its environment, makes decisions, takes actions to achieve a usually predefined goal(s).

### There are couple of classifications for these systems

* It has fixed or dynamic environment
* System waits for additional prompt or acts proactively
* It is a single or multi-agent system

## What is Auto-GPT?

[Auto GPT](https://github.com/Significant-Gravitas/Auto-GPT) is an experimental open source project that uses [GPT-4](https://openai.com/research/gpt-4) to act as IA ☝️. It can self-prompt to achieve a goal with little to no human intervention as possible. Which means, instead of providing a prompt and waiting for a responce just to give it prompt again, you provide it with a **task**, a **goal** and it will give promts toitself, analyzing it's own performance untill it reaches a set goal, or you shut it down.

Auto GPT can browse internet as GPT-4 as internet access. It can order food, plan and book flights, make a podcast, research complex topics. The bot has created [IndiepreneurGPT](https://twitter.com/En_GPT) twitter acout which it autmatically tweets from.

### A podcast

<iframe id="twitter-widget-0" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" class="" style="position: static; visibility: visible; width: 550px; height: 885px; display: block; flex-grow: 1;" title="Twitter Tweet" src="https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfbWl4ZWRfbWVkaWFfMTU4OTciOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd19leHBlcmltZW50c19jb29raWVfZXhwaXJhdGlvbiI6eyJidWNrZXQiOjEyMDk2MDAsInZlcnNpb24iOm51bGx9LCJ0ZndfZHVwbGljYXRlX3NjcmliZXNfdG9fc2V0dGluZ3MiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3ZpZGVvX2hsc19keW5hbWljX21hbmlmZXN0c18xNTA4MiI6eyJidWNrZXQiOiJ0cnVlX2JpdHJhdGUiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2xlZ2FjeV90aW1lbGluZV9zdW5zZXQiOnsiYnVja2V0Ijp0cnVlLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3R3ZWV0X2VkaXRfZnJvbnRlbmQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfX0%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1645898646762782735&amp;lang=en&amp;origin=https%3A%2F%2Fwww.makeuseof.com%2Fwhat-is-auto-gpt-how-differ-from-chatgpt%2F&amp;sessionId=38b95e2e9352dac9e23095307c523b87401d6d28&amp;siteScreenName=MUO_official&amp;theme=light&amp;widgetsVersion=aaf4084522e3a%3A1674595607486&amp;width=550px" data-tweet-id="1645898646762782735"></iframe>

### Automatic tweets

<iframe id="twitter-widget-0" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" class="" style="position: static; visibility: visible; width: 550px; height: 272px; display: block; flex-grow: 1;" title="Twitter Tweet" src="https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfbWl4ZWRfbWVkaWFfMTU4OTciOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd19leHBlcmltZW50c19jb29raWVfZXhwaXJhdGlvbiI6eyJidWNrZXQiOjEyMDk2MDAsInZlcnNpb24iOm51bGx9LCJ0ZndfZHVwbGljYXRlX3NjcmliZXNfdG9fc2V0dGluZ3MiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3ZpZGVvX2hsc19keW5hbWljX21hbmlmZXN0c18xNTA4MiI6eyJidWNrZXQiOiJ0cnVlX2JpdHJhdGUiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2xlZ2FjeV90aW1lbGluZV9zdW5zZXQiOnsiYnVja2V0Ijp0cnVlLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3R3ZWV0X2VkaXRfZnJvbnRlbmQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfX0%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1636567719892885505&amp;lang=en&amp;origin=https%3A%2F%2Fpublish.twitter.com%2F%3Fquery%3Dhttps%253A%252F%252Ftwitter.com%252FEn_GPT%252Fstatus%252F1636567719892885505%26widget%3DTweet&amp;sessionId=987d6b9f40f2292a7301555fe375bde3d18f3d37&amp;theme=light&amp;widgetsVersion=aaf4084522e3a%3A1674595607486&amp;width=550px" data-tweet-id="1636567719892885505"></iframe>

### Generative Agents: Interactive Simulacra of Human Behavior

Researchers just (7 Apr 2023) published a [paper](https://arxiv.org/abs/2304.03442) where 25 of those agents were put in a game. Those agents given some predefined backstories were acting as little humans. They were organizing Valentie's Day party, spread invitations to that party, ask eachother on dates and coordinate to show up for the party on time.

As time passes in the sandbox world, their behaviors evolve as these agents interact with each other and the world, build memories and relationships, and coordinate joint activities.

![Little GPT Humans](/images/auto-gpt-game-humans.jpg)

## How to install nad perform tasks with Auto GPT

### Installing Auto GPT on your machine

1. Database: *(Optional)*
   1. [Pinecone](https://www.pinecone.io/)
   2. [Milvus](https://milvus.io/)
   3. [Redis](https://redis.io/)
2. Install [python](https://www.python.org/)
3. Obtain [OpenAI API Key](https://platform.openai.com/account/api-keys)
4. Clone Auto GPT repository `git clone https://github.com/Significant-Gravitas/Auto-GPT.git`
5. Navigate to repo directory `cd Auto-GPT`
6. Switch to stable branch `git checkout stable`
7. Install dependencies `pip install -r requirements.txt`
8. Copy `.env.template` contents into `.env` with `cp .env.template .env` or just by copy-pasting.
9. Set `OPENAI_API_KEY` obtained from [OpenAI API Key](https://platform.openai.com/account/api-keys).
10. Launch Auto GPT `python -m autogpt` and kick on. (or in debug mode `python -m autogpt --debug`)

*NOTE: If youre getting `Reached rate limit, passing` error you need to add a paid plan and create a new API Key after you switched to paid plan (the price is really not that bad, with around 100 prompts and I'm barely scratching a dollar)*

### Using Auto GPT

Let's come up with a prompt for AutoGPT.

Resently, I needed to get a new pair of earbuds, my old ones are 5 years old and barely work. But the caveat is that I want the best sounding earbuds, sound quality is the key for me, and also i want to the best price for those earbuds.

Let's see what AutoGPT can come up with.

#### My prompts are

* AI Name: *Earbuds-Finder-GPT*
* Earbuds-Finder-GPT is: *an AI designed to search for the best sound earbuds and find the best price for those earbuds*
* My goals
  * Goal 1: Find earbuds with the best auido quality
  * Goal 2: Find the lowest price for said earbuds
* Im proceeding without correcting AutoGPT for 10 prompts

#### Output

1. It began collecting data from pcmag, tomsguide and other websites looking for the best earbuds
2. And so it found **Cambridge Audio Melomania 1 Plus earbuds**. Then it continued to look for the price
3. In the end it found [Cambridge Audio Melomania Touch Earbuds](https://www.amazon.com/Cambridge-Audio-Melomania-Wireless-Bluetooth/dp/B08KK94ZDG/ref=sr_1_1?keywords=Cambridge-Audio-Melomania-Bluetooth-Earphones&sr=8-1), which is actually different from what it originally was looking for

At the each of the step I've prompted AutoGPT to continue with what it thinks is the best with 5 prompts twice, so in the end `10+5+5` which costed me around 20 cents.

The both choices for earbuds are very questionable, maybe I haven't provided it enough prompt to find the best-best sound quality earbuds. I think AutoGTP and IA's need to prompt *us*, users to get the best result. Considering the experemental nature of AutoGPT this is expectable.

## Thoughts

Even though the AutoGPT is slow comparing to human, the answers are not exactly what you want them to be, but the speed those technologies are being developed at are crazy. AutoGTP has access to the internet and ability to continuosly prompt itself and you to get the best result and thats where it has it's power. The nature of AI is such that they're always learning and improving and the power here is very clear - automation. It's [scary](https://www.youtube.com/watch?v=g7YJIpkk7KM) and interesting what will AI become in the next years.

## Auto GPT alternatives

* [JARVIS](https://github.com/microsoft/JARVIS) - a Microsoft alternative to AutoGPT
* [Chaos GPT](https://twitter.com/chaos_gpt) - GPT with the sole goal of destroying humanity
* [Godmode](https://godmode.space/)
* [Agent GPT](https://agentgpt.reworkd.ai/)

## Resources used

* [What are agents in Artificial Intelligence?](https://www.educative.io/answers/what-are-agents-in-artificial-intelligence)
* [Types of AI Agents](https://www.javatpoint.com/types-of-ai-agents)
* [Agents in Artificial Intelligence](https://www.geeksforgeeks.org/agents-artificial-intelligence/)
* [What is Auto-GPT? Everything to know about the next powerful AI tool](https://www.zdnet.com/article/what-is-auto-gpt-everything-to-know-about-the-next-powerful-ai-tool/)
* [Generative Agents: Interactive Simulacra of Human Behavior](https://arxiv.org/abs/2304.03442)x