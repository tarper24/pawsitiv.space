---
categories: ["Help"]
date: 2023-01-27T12:00:00-06:00
description: ""
link: false
keywords: []
tags: ["Mastodon", "Glitch", "Social"]
title: "Understanding and Using Mastodon Glitch Edition"
paige:
  toc: true
---

Currently, Pawsitiv Space's [Social Space](https://social.pawsitiv.space) is running the "glitch-soc" fork of the Mastodon server, also known as Mastodon Glitch Edition.
In this post, we'll discuss both the Vanilla and Glitch Editions of Mastodon.
We'll try to keep this brief while still making the guide useful for all.

<!--more-->

Some of this content may be familiar to more experienced users, but I'm putting this together for the benefit of all those joining the community.
Feel free to jump around to any of the sections in this post.

## What is Mastodon?

Mastodon is a microblogging platform that is part of the wider Fediverse.
It draws similarities to Twitter, Reddit, and Email.

## What is the Fediverse?

The Fediverse is a collection of independent social media servers that are federated together.
This means that users on one server can interact with users on another server, and that servers can interact with each other.
Mastodon is only one platform in the Fediverse, and there are many others, including Pleroma, PeerTube, Pixelfed, and many more.

You can read more about the fediverse in [this guide](https://fediverse.info/).

## Reporting posts

To report a post on Mastodon, you can click the 3-dot menu button on a post and select report.
From there, you can select the reason for the report along with additional posts to include.
Next, you can specify more details for the report.
Please include any details you think may help a moderator understand and make a decision about your report.

If the report is against a user from another instance, you'll also have the option to forward an anonymized copy of the report to that other instance.
You should only do this if the post also violates that instances rules.

## Vanilla Edition Features

Check out the [official Mastodon documentation](https://docs.joinmastodon.org/) for a full breakdown of Mastodon and its features.
You can also check out other guides about Mastodon, including [An Increasingly Less-Brief Guide to Mastodon](https://github.com/joyeusenoelle/GuideToMastodon/blob/main/README.md), [Mastodon Help](https://mastodon.help/), or many other such guides you can find online.

Be aware that some information may be outdated in any guide about Mastodon or the wider Fediverse, including this one!
With that in mind, these guides are all a crucial piece of getting yourself up and running in no time.

### Local and Federated Timelines

The Local Timeline shows any public post by any user on your instance, except for replies.

The Federated Timeline shows any public post by any user on any instance that your instance is federated with.

### Post Visibility

When authoring a post, you can set it to be public, unlisted, followers only, or mentioned people only.

* Public posts are visible to anyone on the Fediverse, including users on other instances.
* Unlisted posts are visible to anyone on the Fediverse, but they will not appear in discovery tools like the Federated Timeline.
* Followers only posts are only visible to your followers.
* Mentioned people only posts are only visible to the people you mention in the post.\
  :exclamation: They are visible to every user that is mentioned in the post.

### Content Warnings

Content Warnings are a feature of Mastodon that allows you to put the main content of your post behind a warning.

### Sensitive Media

Like Twitter, Mastodon has the option to mark media as sensitive when attaching it to a post.

## Glitch Edition Features

For a full list of all the features that the Glitch Edition adds to Mastodon, check out [their docs](https://glitch-soc.github.io/docs/).
Mastodon Glitch Edition adds a lot of additional features, but we'll only be going over a few of the important ones here.

### Formatting

Glitch allows you to author posts in either plain text, Markdown, or HTML.
Be aware that not all software in the Fediverse supports or properly handles formatted posts.
This includes Vanilla Mastodon, which only has support for plain text posts.
If you want to ensure your posts are received as you intend across the wider Fediverse, stick to plain text posts.

To change which format you post with, you can either change the default under Preferences > Other, or you can enable the content-type button under App Settings > Compose Box.

### Local-Only Posts

Glitch has the option of local-only posts that do not automatically federate to other instances of the fediverse.
You can mark a post as local-only by toggling it on in the Advanced Options menu of the compose box, or ending your post with the :eye: emoji.

### Threaded Mode

Threaded mode in Glitch allows you to start a reply immediately after publishing a post.
It does not allow you to create a full thread of posts all at once, like Twitter's feature.
It can be enabled in the Advanced Options menu of the compose box.

### Hiding Follower Count

As a user, you can hide the follower count on your profile.
Enabling this feature will hide your follower count to you and to others.
We also have the option to hide all follower counts on our instance, but we have not enabled this feature.

### App Settings

Glitch has a lot of additional settings to customize your experience.
Some of these settings are within the Mastodon Preferences page, but many of them are in the App Settings modal.
The App Settings can be accessed by clicking the Cogs icon or the App Settings button.

## How To Access Pawsitiv's Social Space

Mastodon has an Open API, which means you can use third-party clients to access Pawsitiv's Social Space and not just the web interface.
For a non-exhaustive list of clients, check out [this page](https://joinmastodon.org/apps/).

### Web

You can access Pawsitiv's Social Space by going to [https://social.pawsitiv.space](https://social.pawsitiv.space).
There are also third-party clients that you can use to access Pawsitiv's Social Space:

* [Pinafore](https://pinafore.social/) - free
* [Halcyon](https://halcyon.social/) - free
* [Cuckoo+](https://cuckoo.social/) - free
* and many more!

### Desktop

You can also access Pawsitiv's Social Space from your desktop with the following clients:

* [Hyper-space](https://hyperspace.marquiskurt.net/) - free
* [Whalebird](https://whalebird.social/) - free
* [Sengi](https://nicolasconstant.github.io/sengi/) - free
* [Mast](https://apps.apple.com/app/mast-for-mastodon/id1437429129) - paid
* and many more!

### Mobile

#### Android

* [Mastodon](https://play.google.com/store/apps/details?id=org.joinmastodon.android) (Official app) - free
* [Tusky](https://play.google.com/store/apps/details?id=com.keylesspalace.tusky) - free
* [Subway Tooter](https://play.google.com/store/apps/details?id=jp.juggler.subwaytooter) - free
* [Fedilab](https://play.google.com/store/apps/details?id=app.fedilab.android) - paid
* and many more!

#### iOS

* [Mastodon](https://apps.apple.com/us/app/mastodon-for-iphone/id1571998974) (Official app) - free
* [iMast](https://apps.apple.com/us/app/imast/id1229461703) - free
* [Mast](https://apps.apple.com/us/app/mast-for-mastodon/id1437429129) - paid
* [Toot!](https://itunes.apple.com/app/toot/id1229021451?ls=1&mt=8) - paid
* and many more!
