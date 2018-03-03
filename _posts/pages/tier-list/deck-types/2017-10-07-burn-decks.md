---
layout: blog
title: Burn Decks
author: Creative
category: page
sub-category: deck-type
deck-type: burn-decks
date: 2017-10-07
comments: false
description: In depth information about Burn decks.
permalink: /tier-list/burn-decks/
---

{% assign guide = site.data.deck-types.pages[{{page.deck-type}}] %}

{% include guides/guide.html guide=guide %}

{% include decktype_decks.html deckType=page.deck-type %}

{% include top-decks-season-archive.html %}