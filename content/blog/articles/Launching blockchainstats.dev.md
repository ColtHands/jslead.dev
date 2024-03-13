---
title: Launching blockchainstats.dev
date: 01.24.2024
visible: true
---

[Blockchainstats.dev](https://blockchainstats.dev) - a project that I've been working for quite some time.
This web app let's you figure out trends within blockchain related github repositories.

## Why not use GitHub API?

GitHub API only has up to date data, meaning it does not have historical data, so you won't be able to figure out if the project is trending right now, or was trending in the past.

## How it works?

Each day a script runs through a list of ~10,000 repositories, gets their data from GitHub API for that day and saves it into timeseries DB

* Stars
* Forks
* Open Issues

There are __not__ much data to track within a [repository](https://github.com/bitcoin/bitcoin), but unlike other niches (Rust, JavaScript) forks for example play an important role.

We all know bitcoin is number one. But did you know that for example that [hummingbot](https://www.blockchainstats.dev/projects/hummingbot/hummingbot) has been favourited and forked for the past month, or that [massa](https://www.blockchainstats.dev/projects/massalabs/massa) has peaked with favourites this past october.

![Massa project stats](/images/massa-stats.png)

## Key Takeaway

Ultimately this app can give you some additional info on a specific project regarding it's development, thus making better decisions when investing into that project whether that would be time, money or anything else.

Also feel free to [tweet](https://twitter.com/JavaScriptLead) or [open an issue](https://github.com/ColtHands/blockchainstats.dev) with any ideas for improvements or any problems you may have with this app. 🙂
