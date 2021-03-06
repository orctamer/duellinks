---
layout: blog
title: Guides & Reviews
author: Creative
image: /img/pages/guides-and-reviews/thumbnail.jpg
category: page
sub-category: main
order: 6
comments: false
date: 2018-03-12 02:28:00 +0000
description: ADD PAGE DESCRIPTION HERE - 150 to 300 CHARS
keywords: new, new players, beginner, info, competitive, tournaments, deck types
permalink: /guides-and-reviews/
scripts: guides.js
---

{% include heading.html title=page.title %}

<div class="section">
  <div class="row button-row guides-filters">
    <div class="btn-wrapper col-6 col-sm-4 col-md-3">
      <div class="btn-decktype" data-filter="competitive">
        <img  class="decktype-card" src="/img/pages/guides-and-reviews/competitive.jpg"/>
        <span class="decktype-display">Competitive</span>
      </div>
    </div>
    <div class="btn-wrapper col-6 col-sm-4 col-md-3">
      <div class="btn-decktype" data-filter="deck-type">
        <img  class="decktype-card" src="/img/pages/guides-and-reviews/deck-type-guides.jpg"/>
        <span class="decktype-display">Deck Type Guides</span>
      </div>
    </div>
    <div class="btn-wrapper col-6 col-sm-4 col-md-3">
      <div class="btn-decktype" data-filter="new-players">
        <img  class="decktype-card" src="/img/pages/guides-and-reviews/new-players.jpg"/>
        <span class="decktype-display">New Players</span>
      </div>
    </div>
    <div class="btn-wrapper col-6 col-sm-4 col-md-3">
      <div class="btn-decktype" data-filter="review">
          <img  class="decktype-card" src="/img/pages/guides-and-reviews/reviews.jpg"/>
          <span class="decktype-display">Reviews</span>
      </div>
    </div>
  </div>
</div>

<div class="section">
  <table class="guides-table hover row-links">
      <thead>
        <tr>
          <th class="thumb-col"></th>
          <th class="title">Guide</th>
          <th class="category">Category</th>
          <th class="author">Author</th>
          <th class="modified">Last Modified</th>
        </tr>
      </thead>
      <tbody>
        {% for article in site.posts %}
          {% if article.category == 'guide' or article.category == 'review' %}
            {% if article.hide == null or article.hide == false %}
              {% if article.category == 'guide' %}
                {% assign category = article.sub-category %}
              {% else %}
                {% assign category = article.category %}
              {% endif %}
              <tr data-category="{{category}}">
                <td class="thumb-col">
                  <a href="{{article.url}}">
                    <div class="thumbnail">
                        <img src="{{article.image}}" class="portrait" />  
                    </div>
                  </a>
                </td>
                <td class="title"><a href="{{article.url}}">{{article.title}}</a></td>
                <td class="category"><a href="{{article.url}}">{{category | replace: "-", " " | capitalize_all }}</a></td>
                <td class="author"><a href="{{article.url}}">{{article.author}}</a></td>
                <td><a href="{{article.url}}">{{article.date | date: "%B %-d, %Y"}}</a></td>
              </tr>
            {% endif %}
          {% endif %}
        {% endfor %}
      </tbody>
  </table>
</div>

<div class="section guide-pagination">
  <nav>
    <ul class="pagination pages">      
    </ul>
    <ul class="pagination previous"> 
        <li class="page-item">
            <a class="page-link" data-page="first"><span class="fa fa-angle-double-left"></span></a>
        </li>
        <li class="page-item">
            <a class="page-link" data-page="previous"><span class="fa fa-angle-left"></span></a>
        </li>
    </ul>
    <ul class="pagination next">
        <li class="page-item">
            <a class="page-link" data-page="next"><span class="fa fa-angle-right"></span></a>
        </li>
        <li class="page-item">
            <a class="page-link" data-page="last"><span class="fa fa-angle-double-right"></span></a>
        </li>
    </ul>
  </nav>    
</div>