---
layout: blog
title: Dinosaur Control
author: pll
category: page
sub-category: deck-type
deck-type: dinos-control
date: 2017-12-06
comments: false
description: In depth information about Dinosaur Control decks.
permalink: /tier-list/dinos-control/ 
---

{% assign guide = site.data.deck-types.pages[{{page.deck-type}}] %}

{% include guides/guide.html guide=guide %}

{% include decktype_decks.html deckType=page.deck-type %}

{% include top-decks-season-archive.html %}