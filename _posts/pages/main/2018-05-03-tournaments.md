---
layout: blog
date: 2018-03-05
title: Tournaments
author: Creative; unpreceden7ed; Dkayed; GiaJoestar
image: /img/pages/mcs/thumbnail.png
category: page
sub-category: main
order: 3
comments: false
description: All Duel Links Meta tournaments are explained here, including Meta Championship Series, Meta Weekly, Giveaway Tournament and Anytime Tournament. This page also contains the information for the Top Player Ladder.     
keywords: mcs, meta championship, meta championship series, mcs info, next mcs, mcs time, mcs 6, meta weekly, duel links tournament, give away tournament, giveaway tournament, anytime tournament, top player ladder  
permalink: /tournaments/
scripts: soon.min.js
styles: soon.min.css
---

{% assign countdown-data = site.data.countdowns.mcs %}
{% include countdown.html data=countdown-data %}

{% assign reports = site.posts | where: "category", "tournament" | where: "tournament", "Meta Championship Series" | where_exp: "item",
"item.hidden != true" | sort: "number" | reverse %}

## Meta Championship Series (MCS)

### How to Join 
You must join the Duel Links Meta discord in order to participate in the MCS, click [here](/community/) to join!

### About the Meta Championship Series
The Meta Championship Series is Duel Link's largest and most competitive tournament held monthly for cash prizes. It's where the best players compete for the largest prize pool in Duel Links.

### Total Prize Support given out: $20,144

---

<div class="section center">
    <h3>You can find all the past MCS reports here:</h3>
    <ul>
        {% for report in reports %}
            <li><a href="{{report.url}}">{{report.tournament | upcase}} #{{report.number}}</a></li>
        {% endfor %}
    </ul>     
</div>

---

#### Top players that have participated in the event:

| Player | Accomplishment | 
|:----------:|:----------:|
| Billy Brake | Multiple YCS Accomplishments |
| Andy Tsang | YCS Denver 2017 Winner |
| Steven De Lara's | YCS Chicago 2015 Winner |
| Elvis Vu | YCS Anaheim 2016 Winner |
| Eugen Heidt | 2014 EU Champion |
| Gunsblazing | Popular Youtuber |
| Tutpup | 2nd Worlds |
| Samson Yoshida | WCS Participant |
| Koizumi | WCS Participant |
| DGZO | WCS Participant |
| AceMVS/Alexis Rodriguez | YCS Seattle 2017 |
| Freshアラン | WCS Participant |
| NoNamedPARAO| WCS Participant |
| King Halo | 1st JPN KC Cup Feb 2017|
| TsunTsun | 2nd Global KC Cup |

#### Japanese OCG Champions that have participated in the event:

| Player | Accomplishment | 
|:----------:|:----------:|
| Darkking | 3rd Place Japan OCG Nationals |
| Satoshi Kato | Japan OCG National Champion |
| Nohara Hiroshi/野原ひろし | 3rd Japanese Qualifiers 2017 |
| Kiw'i | Japanese OCG Champion |
| Taro | Japanese OCG Champion |
| Linklink | 3rd Japanese OCG Nationals |

---

#### MCS Sponsor Hall of Fame:

| Sponsor | Total Donations |
|:-:|:-:|
| Justin Taylor | $2110.00 |
| xNight Raiderx | $1224.00 |
| Kempington | $1000.00 |
| {#Jonesy9027} | $512.00 |
| Nerdchic | $451.57 |
| ♠AP♠Valtheras | $340.00 |
| Chrisavz | $335.00 |
| JackpotBayBay | $305.00 |
| {#SirDillweed} | $300.00 |
| ShadyPenguinn | $250.00 |
| MAGPIE | $200.00 |
| Moonangle | $190.00 |
| O_keebz_O | $150.00 |
| Icedtea | $145.00 |
| Virus | $120.00 |
| Fetroch | $118.00 |
| Akatsured | $110.00 |
| {#Whilipino} | $105.00 |
| oh_heybobby | $105.00 |
| Dudley | $100.00 |
| WoooLaddd | $100.00 |
| Masked Hero Heart | $100.00 |
| MLM Man LM | $100.00 |
| Mellow | $100.00 |
| Giancarlos | $100.00 |
| Mahmoudtaha91 | $100.00 |
| ARCANUS | $100.00 |
| Notanillegal | $100.00 |
| GrandmasterAA | $100.00 |
| Cryaotic | $100.00 |
| KanminaSan | $100.00 |
| Ricky | $100.00 |
| {#Kazin_X} | $100.00 |
| Jaadgo | $100.00 |
| Jater | $100.00 |
| FrozenKingK0 | $100.00 |

---

![](/img/logos/generic-tournament.jpg)

## Anytime Tournaments

### About the Anytime Tournaments
These tournaments are meant to be ran at any time, independent of the stream being on or any particular day/time.

### How to Join
You must have access to the Discord. To gain access, see more information on the [Community](/community/) page. Once you have access, simply type !enterticket anywhere in the Discord server while you have at least 1 Meta Ticket. 

### Additional Information
* 8 Players signup with !enterticket to gain access to the _anytime-tournament-room_ channel
* A mod is notified to create a challonge.com sign-up + a Duel Room
* Top 8, Top 4, then Finals are played
* 1st Place winner posts their decklist in the _1st-place-decks_ to be paid at the end of every week   

---

![](/img/logos/meta-weekly.png)

## Meta Weekly 

### About the Meta Weekly
The Meta Weekly is a tournament that is held once a week, alternating between Tuesday 2pm EST and Wednesday 7pm EST. There is no player cap, nor is there a deadline to join - you can even join at the very last second!

Be sure to check out all the [previous Meta Weekly reports](/tournaments/meta-weekly/).

### How to Join
Visit the [DuelLinksMeta](https://www.twitch.tv/duellinksmeta) Twitch or check out the [Top Player](/discord/) page for more info!

### Format
- 101 Players
- Best of 3 - Single Elimination 
- 1 Deck with a 5 card Side Deck

---

![](/img/content/tournaments/giveaway/thumbnail.jpg)

## Giveaway Tournament

### About the Giveaway Tournament

This is a free, subscriber-only tournament.

### How to Join

To become a subscriber, check out the [Community](/community/) page

### Rules
* *Free* entry
* 1 main deck throughout the tournament
* 5 card side deck 
* Best of 3
* Single elimination

### Prizes
* 5 Meta weekly tickets *or* Lifetime Discord *or* Paid MCS VII invite
* **1st place**: 8 meta ladder points
* **2nd place**: 5 meta ladder points
* **Top 4**: 3 meta ladder points

---

<a name="topladder"></a>
### Top Player Ladder: April 1st - July 31st (Season 2)

Points are awarded for MCS, Meta Weekly, and KC Cup performance. The top 16 players after a 3 month season become the [New Top Player Council](/top-player-council/)!

| Rank | Participant Name | Points |
|--|--|--|
|1| {#Jason} | 50 points|
|2| {#SirDillweed} | 30 points|
|3|ShinySopheon|28 points|
|4|Grucius| 22 points|
|5-7|Gambler| 20 points|
|5-7|AndyTsang| 20 points|
|5-7|Look at god| 20 points|
|8-10|Niceguy88| 18 points|
|8-10|SILENT POWER| 18 points|
|8-10| {#SkillShot} | 18 points|
|11|MrCellophane| 16 points|
|12|Masarike|15 points|
|13-16|Taichi| 14 points|
|13-16|SDotAkuma| 14 points|
|13-16|PAchou| 14 points|
|13-16|M.Rida92| 14 points|
|17-19| {#Super Vegito} | 12 points|
|17-19|Billy Brake| 12 points|
|17-19|Sterben| 12 points|
|20-40|Tekumse| 10 points|
|20-40|LoreRomaCCG| 10 points|
|20-40|Jayrabian| 10 points|
|20-40|DatAngryBaboon| 10 points|
|20-40|SilchasRuin| 10 points|
|20-40|Kiwi| 10 points|
|20-40|Luke Tyler| 10 points|
|20-40|Alvd Freecs| 10 points|
|20-40|Aurora| 10 points|
|20-40|GabrielWars| 10 points|
|20-40|Greedosama| 10 points|
|20-40|Guizyduck| 10 points|
|20-40|Hextor| 10 points|
|20-40|Koizumi| 10 points|
|20-40| {#MiguelJoker} | 10 points|
|20-40|Peledones| 10 points|
|20-40|Suhnrysanti| 10 points|
|20-40| {#Whilipino} | 10 points|
|20-40|Yehhey| 10 points|
|20-40|3K Two Oh| 10 points|
|20-40| FOREVER| 10 points|
|41-54|Vladis| 8 points|
|41-54| {#Kwrowe} | 8 points|
|41-54|Vyzual| 8 points|
|41-54| {#Brenduke} | 8 points|
|41-54|Jsanchghost| 8 points|
|41-54|Eugen Heidt| 8 points|
|41-54|Regtrainer1| 8 points|
|41-54|Simon| 8 points|
|41-54|OPnerfME| 8 points|
|41-54| {#Cpt. Insano} | 8 points|
|41-54|WALEEDSY| 8 points|
|41-54|WayneKenoff| 8 points|
|41-54|Shu| 8 points|
|41-54|HidekiBro| 8 points|

### How to gain Meta points

#### MCS
* Top 32 =  8 points 
* Top 16 = 10 points 
* Top  8 = 14 points 
* Top  4 = 18 points 
* Second Place = 25 points 
* First Place  = 35 points

#### Meta Weekly / Give Away
* Top 16 = 2 points 
* Top  8 = 3 points 
* Top  4 = 5 points 
* Second Place =  8 points 
* First Place  = 12 points

#### KC Cup
* Top 10  = 20 points
* Top 100 = 10 points

Check out the [Season 1 Top Player Ladder](/tournaments/top-players/season-1/)