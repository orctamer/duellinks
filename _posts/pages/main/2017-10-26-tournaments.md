---
layout: blog
date: 2018-05-02
title: Tournaments
author: Dkayed
image: /img/pages/mcs/thumbnail.png
category: page
sub-category: main
order: 3
comments: false
description: The Meta Championship Series is an opportunity for you to compete against the best Duel Links players in the world for fortune and fame! The tournament is always live streamed on Twitch so you can watch all the action as it happens!
keywords: mcs, meta championship, meta championship series, mcs info, next mcs, mcs time, mcs 6
permalink: /tournaments/
scripts: soon.min.js
styles: soon.min.css
---

{% assign countdown-data = site.data.countdowns.mcs %}
{% include countdown.html data=countdown-data %}

{% assign reports = site.posts | where: "category", "tournament" | where: "tournament", "Meta Championship Series" | where_exp: "item",
"item.hidden != true" | sort: "number" | reverse %}
{% assign last-report = reports | first %}

<div class="section">
    <h3 class="text-center">TOURNAMENT QUICKLINKS</h3>
    <hr style="width: 100px; border-color: #D8D8D8; margin-bottom: 8px;
    margin-top: 8px;">
    <hr style="width: 200px; border-color: #D8D8D8; margin-bottom: 8px;
    margin-top: 8px;">
    <hr style="width: 100px; border-color: #D8D8D8; margin-bottom: 8px;
    margin-top: 8px;">
    </div> 

* [Meta Champtionship Series](#mcs): monthly championship
* [Meta Weekly](#mw): weekly tournament
* [Anytime Tournament](#att): 24/7 cash duels
* [Giveaway Tournament](#ga): free, casual tournament!

---

<a href="#topladder"> 
![Top Player Ladder](/img/pages/community/banner-top-player-ladder.png)
</a>

---
<a name="mcs"></a>

<div class="section">
    <h3 class="text-center">META CHAMPIONSHIP SERIES</h3>
    <hr style="width: 100px; border-color: #D8D8D8; margin-bottom: 8px;
    margin-top: 8px;">
    <hr style="width: 200px; border-color: #D8D8D8; margin-bottom: 8px;
    margin-top: 8px;">
    <hr style="width: 100px; border-color: #D8D8D8; margin-bottom: 8px;
    margin-top: 8px;">
</div>


### The latest [Meta Championship Report - May 12th]({{last-report.url}}) is now available!

### About the Meta Championship series
The Meta Championship Series is Duel Links' largest and most competitive tournament held monthly for cash prizes. It's where the best players compete for the largest prize pool in Duel Links.

### How to Join 
You must first join the [Duel Links Meta Discord](/community/) in order to participate in the MCS.

### Total Prize Support Given Out: $20,144

Check out the [MCS Hall of Fame](/other/mcs-hall-of-fame) for informations on the top players that have competed in an MCS in the past as well all the generous sponsors!

<div class="section center">
    <h4>Here are all the past MCS reports</h4>
    <ul>
        {% for report in reports %}
            <li><a href="{{report.url}}">{{report.tournament | upcase}} #{{report.number}}</a></li>
        {% endfor %}
    </ul>     
</div>

---

<a name="mw"></a>

<div class="section">
    <h3 class="text-center">META WEEKLY TOURNAMENTS</h3>
    <hr style="width: 100px; border-color: #D8D8D8; margin-bottom: 8px;
    margin-top: 8px;">
    <hr style="width: 200px; border-color: #D8D8D8; margin-bottom: 8px;
    margin-top: 8px;">
    <hr style="width: 100px; border-color: #D8D8D8; margin-bottom: 8px;
    margin-top: 8px;">
</div>

[w75]
![](/img/content/tournaments/meta-weekly/banner.png)

### About the Meta Weekly
The Meta Weekly is a tournament that is held once a week, alternating between Tuesday 2pm EST and Wednesday 7pm EST. There is no player cap, nor is there a deadline to join - you can even join at the very last second!

Be sure to check out all the [previous meta weekly reports](/tournaments/meta-weekly/)

### How to Join 
Visit the [DuelLinksMeta](https://www.twitch.tv/duellinksmeta) Twitch or check out the [Community](/community/) page for more info!

### Format
* Best of 3 - Single Elimination
* 1 Deck with a 5 card side deck

---
<a name="att"></a>

<div class="section">
    <h3 class="text-center">ANYTIME TOURNAMENTS</h3>
    <hr style="width: 100px; border-color: #D8D8D8; margin-bottom: 8px;
    margin-top: 8px;">
    <hr style="width: 200px; border-color: #D8D8D8; margin-bottom: 8px;
    margin-top: 8px;">
    <hr style="width: 100px; border-color: #D8D8D8; margin-bottom: 8px;
    margin-top: 8px;">
</div>

![img](/img/logos/generic-tournament.jpg)


### About Anytime Tournaments
These tournaments run 24/7 within the discord. Once 8 people sign up to a tournament you are good to go!

### How to Join 
Visit the [DuelLinksMeta](https://www.twitch.tv/duellinksmeta) Twitch to subscribe or check out the [Community](/community/) page for more info! If you are already apart of the discord, simple type !enterticket anywhere in the Discord server while you have at least 1 Meta Ticket.

### Additional Information
* Entry fee is 1 meta ticket
* 8 Players signup with !enterticket to gain access to the anytime-tournament-room channel
* A mod is notified to create a challonge.com sign-up + a Duel Room
* Top 8, Top 4, then Finals are played
* 1st Place winner posts their decklist in the 1st-place-decks to be paid at the end of every week

---
<a name="ga"></a>

<div class="section">
    <h3 class="text-center">GIVEAWAY TOURNAMENTS</h3>
    <hr style="width: 100px; border-color: #D8D8D8; margin-bottom: 8px;
    margin-top: 8px;">
    <hr style="width: 200px; border-color: #D8D8D8; margin-bottom: 8px;
    margin-top: 8px;">
    <hr style="width: 100px; border-color: #D8D8D8; margin-bottom: 8px;
    margin-top: 8px;">
</div>

![img](/img/logos/giveaway.jpg)

### About the Giveaway Tournaments
Our stream holds special free tournaments for our twitch subscribers. We offer prizes such as tournament entry, promotional items and cash from our sponsors when avaliable. 

### How to join
Visit the [DuelLinksMeta](https://www.twitch.tv/duellinksmeta) Twitch or check out the [Community](/community/) page for more info on becoming a subscriber to support the channel and recieve your benefits.

### Format
* Casual best of 1
* Swiss (rounds determined upon player participation)
* No deck submission required. Play whatever deck you want and change it at any time durng the tournament.

-----

<a name="topladder"></a>
### Top Player Ladder: April 1st - June 31st (Season 2)

Points are awarded for MCS, Meta Weekly, and KC Cup performance. The top 16 players after a 3 month season become the [New Top Player Council](/top-player-council/)!

Updated 5/19/18

| Rank | Participant Name | Points |
|--|--|--|
|1|Billy Brake| 65 points|
|2| {#Jason} | 50 points|
|3|Eugen Heidt| 43 points|
|4|Stevie| 40 points|
|5|Grucius| 37 points|
|6|Yehhey| 35 points|
|7|Masarike|31 points|
|8-10| {#SirDillweed} | 30 points|
|8-10| {#Kwrowe} | 30 points|
|8-10|ShinySopheon|30 points|
|11-12|Sterben| 26 points|
|11-12| {#SkillShot} | 26 points|
|13-15|LoreRomaCCG| 24 points|
|13-15|MrCellophane| 24 points|
|13-15| {#Glading} | 24 points|
|16|SILENT POWER| 23 points|
|17|Look at god| 21 points|
|18-20|Gambler| 20 points|
|18-20|AndyTsang| 20 points|
|18-20|Jsanchghost| 20 points|
|21|pawapoke|19 point|
|22-23|Niceguy88| 18 points|
|22-23|Snyffus| 18 points|
|24|Nel|16 points|
|25|BlackGundam| 15 point|
|26-31|Taichi| 14 points|
|26-31|SDotAkuma| 14 points|
|26-31|PAchou| 14 points|
|26-31|Suguru| 14 points|
|26-31|M.Rida92| 14 points|
|26-31|BrendenBB| 14 points|
|32| {#Whilipino} | 13 points|
|33-38| {#Super Vegito} | 12 points|
|33-38|Luke Tyler| 12 points|
|33-38|Neg do Zap| 12 points|
|33-38| {#Cpt. Insano} | 12 points|
|33-38|HoCJackieB| 12 points|
|33-38|Serenity| 12 points|
|39-63|Tekumse| 10 points|
|39-63|Jayrabian| 10 points|
|39-63|DatAngryBaboon| 10 points|
|39-63|SilchasRuin| 10 points|
|39-63|Kiwi| 10 points|
|39-63|Alvd Freecs| 10 points|
|39-63|Aurora| 10 points|
|39-63|Artorias | 10 points|
|39-63|GabrielWars| 10 points|
|39-63|Greedosama| 10 points|
|39-63|Guizyduck| 10 points|
|39-63|Hextor| 10 points|
|39-63| {#Negative1} | 10 points|
|39-63|Koizumi| 10 points|
|39-63| {#MiguelJoker} | 10 points|
|39-63|ShootMyMantlet| 10 points|
|39-63|Peledones| 10 points|
|39-63|Suhnrysanti| 10 points|
|39-63| {#Machdragon} | 10 points|
|39-63| {#Kayoh} | 10 points|
|39-63|3K Two Oh| 10 points|
|39-63| FOREVER| 10 points|
|39-63|Vladis| 10 points|
|39-63|WayneKenoff| 10 points|
|39-63| {#Deadfun} | 10 points|
|64-66 |Just Desserts | 9 points|
|64-66|qbob2| 9 point|
|64-66|Yasser | 9 points|
|67-84|Vyzual| 8 points|
|67-84| {#Brenduke} | 8 points|
|67-84|DragonOTWest| 8 points|
|67-84|Regtrainer1| 8 points|
|67-84|Simon| 8 points|
|67-84|Nohara Hiroshi| 8 points|
|67-84|OPnerfME| 8 points|
|67-84|David B| 8 points|
|67-84|Mistilteinn| 8 points|
|67-84|SauceGod| 8 points|
|67-84|WALEEDSY| 8 points|
|67-84|Shu| 8 points|
|67-84| {#Xanxus} | 8 points|
|67-84|Alysium| 8 points|
|67-84|Xyldaz| 8 points|
|67-84|Sock90| 8 points|
|67-84|HidekiBro| 8 points|
|67-84| {#Whybona} | 8 points|
|85-86|Black Jesus | 7 points|
|85-86|FettyGuap | 7 points|
|87-97| DeadlyScarce | 5 points|
|87-97|Limitless95|5 points|
|87-97|Son_Luke | 5 points|
|87-97|CrossX| 5 points|
|87-97 | {#Kaki} | 5 points|
|87-97|lawofdeath| 5 points|
|87-97|Sasuke| 5 points|
|87-97|BlessRNG Shadowz| 4 points|
|87-97|Wowerer |4 points|
|87-97|monkeyboy44| 4 points|
|87-97|TristanP| 4 points|

### How to gain Meta points

#### Meta Championship Series
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

--------
Check out the [Season 1 Top Player Ladder](/tournaments/top-players/season-1/)

<hr style="border-color: #B5B5B5;">