---
layout: blog
title: Control Decks
meta: Top Decks - Control Decks
author: Creative
date: 2017-10-07
comments: true
description: In depth information about Control Decks decks.
permalink: /topdecks/control-decks/
---

## {{page.title}}

<p class="text-muted"> {{page.description}} </p>

<div>
    <p>HERE COMES INFO ABOUT CONTROL DECKS</p>
    <p>how to play, strong points, weak points, key cards, replacements, combos, matchups, why in current tier?, ...</p>
</div>

<table class="table" style="margin-top: 2rem;" id="topDeckTable">
    <thead>
        <tr>
            <th>Deck Name</th>
            <th>Author</th>
            <th>Added</th>
        </tr>
    </thead>
    <tbody>
        {% for deck in site.data.decklists.control-decks %}
            <tr>
                <th>
                    <div class="row">
                        <div class="col-lg-1">
                            <div class="thumbnail">
                                <img src="https://yugiohprices.com/api/card_image/{{deck[1].main[0].name}}" class="portrait" />  
                            </div>
                        </div>
                        <div class="col-lg-11">
                            <a href="{{site.url}}/topdecks/control-decks/{{deck[1].name | downcase | replace: " ", "-" }}">{{deck[1].name}}</a>    
                        </div>
                    </div>
                </th>
                <th>{{deck[1].author}}</th>
                <th>{{deck[1].created}}</th>
            </tr>
        {% endfor %}
    </tbody>
</table>