// Main function
// =================
$(function() {
    var is_mobile = isMobile();

    if(is_mobile) {
        updatePopupsForMobile();
    }
    else {
        updatePopupsForDesktops();
    }
});

// Action handler functions
// ========================
$(window).resize( updateMobileInformation );

async function updateMobileInformation() {
    // Delay the update to sync with the page load
    await sleep(500);

    resizeCardInformation();
    resizeSkillInformation();
};

// Helper functions
// =================
function isMobile() {
    if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i) ) {
        return true;
    }
    else {
        return false;
    }
};

function updatePopupsForMobile() {
    // Update every card to display an image, whether in a deck or on a guide/article page
    $(".item a").each(function() {
        $(this).attr("href", "javascript:;").addClass("fancybox-card");
        $(this).attr("data-src", "#fancyboxCardDiv");
    });
    $(".markdown-item a").each(function() {
        $(this).attr("href", "javascript:;").addClass("fancybox-card");
        $(this).attr("data-src", "#fancyboxCardDiv");
    });

    // Update instances of skills/cards to conform for the fancybox plugin 
    $(".card-hover").each(function() {
        if($(this).attr('name') == 'skillPopup') {
            $(this).replaceWith($('<a class="fancybox-skill" data-src="#fancyboxSkillDiv" href="javascript:;">' + $(this).text() + '</a>'));    
        }
        else {
            $(this).replaceWith($('<a class="fancybox-card" data-src="#fancyboxCardDiv" href="javascript:;">' + $(this).text() + '</a>'));
        }
    })

    // Set the fancybox for card images
    $().fancybox({
        buttons: ['close'],
        selector: '.fancybox-card',
        smallBtn: false,
        afterShow: obtainCardInformation,
        afterClose: closeMobilePopup
    });

    // Set the fancybox for skill popups
    $().fancybox({
        buttons: ['close'],
        selector: '.fancybox-skill',
        smallBtn: false,
        afterShow: obtainSkillInformation,
        afterClose: closeMobilePopup
    });
};

function obtainSkillInformation( instance, current ) {
    // Obtain the skill
    var skill = $(current.opts.$orig).html();

    // Obtain the skill data
    let websiteLink = location.protocol + "//" + location.hostname;
    if(location.port){
        websiteLink += ":" + location.port;
    }
    axios.get(websiteLink + "/data/skillsChars.json").then( function( response ) {
        displaySkillInformation( response, skill, websiteLink );
    });
};

function displaySkillInformation( response, skill, websiteLink ) {
    // Slice the data
    let characterWhoUses = [];
    let exclusive = false;
    let desc = "No description available";
    let officialName = skill;
    for(var i = 0; i < response.data.length; i++){
        if(response.data[i].name.replace(/[^a-zA-Zα-ωΑ-Ω ]/g, "").toLowerCase() == skill.replace(/[^a-zA-Zα-ωΑ-Ω ]/g, "").toLowerCase()){
            officialName = response.data[i].name;
            desc = response.data[i].desc;
            exclusive = response.data[i].exclusive;
            characterWhoUses.push(response.data[i].character);

            if(exclusive == true) {
                break;
            }
        }
    }
    let portaitName = characterWhoUses[0].toLowerCase().replace(" ", "-");

    // Update and display the data
    $('#skillTitle').html(officialName);
    $('#skillDescription').html(desc);
    var exclusiveString = (exclusive == true ? 'Skill exclusive to ' + characterWhoUses[0] + '' : 'Skill can be used by different characters.');
    $('#skillExclusive').html(exclusiveString); 
    var characterString = websiteLink + "/img/characters/portrait-" + (exclusive == true ? portaitName : 'vagabond') + ".png";
    $('#characterImage').one("load", function() {
        resizeSkillInformation();

        $('.fancybox-loading').hide();
        $('#skillFancybox').removeClass('hideSkillContainer');
    });
    $('#characterImage').attr('src', characterString);    
};

function resizeSkillInformation() {
    // Style the image for large skill descriptions
    var containerHeight = $('#characterImageContainer').height();
    var difference = Math.floor(containerHeight - 146); // Default height of all pics are 146
    $('#characterImage').css('padding-top', Math.floor(difference/2) + 'px');
};

function obtainCardInformation( instance, current ) {
    // Obtain the card name
    var cardName = $(current.opts.$orig).html();
    if(cardName.includes("<img")) {
        cardName = $(current.opts.$orig).find('img').attr('src').replace("https://yugiohprices.com/api/card_image/", ""); 
        while(cardName.includes('+')) {
            cardName = cardName.replace("+", " ");
        }
    }

    // Obtain the card data
    let websiteLink = location.protocol + "//" + location.hostname;
    if(location.port){
        websiteLink += ":" + location.port;
    }
    let cardobtain = axios.get(websiteLink + "/data/cardObtain.json").then(function(r) {
        return r.data.filter(i => i.name == cardName)[0] || new Error('No Resource')
    });
    let cardinfo = axios.get("https://www.ygohub.com/api/card_info?name=" + cardName).then(function(r) {
        return r.data
    });
    Promise.all([cardobtain, cardinfo]).then(function(r) {
        displayCardInformation( r, websiteLink, cardName );
    });
};

function displayCardInformation( response, websiteLink, cardName ) {
    // Update and display the data
    if(response[0].rarity) {
        $('#cardRarity').attr('src', websiteLink + '/img/assets/' + response[0].rarity + '.png');
        $('#cardRarity').show();
    } 
    else {
        $('#cardRarity').hide();
    }
    $('#cardImage').one("load", function() {
        resizeCardInformation();

        $('.fancybox-loading').hide();
        $('#cardFancybox').removeClass('hideSkillContainer');
    });
    $('#cardImage').attr('src', "https://yugiohprices.com/api/card_image/" + cardName);
    $('#cardName').html(cardName);
    if(response[1].attribute) {
        $('#cardAttribute').html('Attribute: ' + response[1].attribute);
        $('#cardAttribute').show();
    } 
    else {
        $('#cardAttribute').hide();
    } 
    if(response[1].stars) {
        $('#cardLevel').html('Level: ' + response[1].stars);
        $('#cardLevel').show();
    } 
    else {
        $('#cardLevel').hide();
    }
    if(response[1].card.is_monster) {
        $('#cardType').html('<b>[ </b>' + response[1].card.species + ' / ' + response[1].card.monster_types.join(' / ') + '<b> ]</b>');
    }
    else {
        $('#cardType').html('<b>[ </b>' + response[1].card.type + ' / ' + response[1].card.property +  '<b> ]</b>');
    }
    if(response[1].has_materials) {
        $('#cardMaterials').html('<i>' + response[1].card.materials + '</i>');
        $('#cardMaterials').show();
    } 
    else {
        $('#cardMaterials').hide();
    }
    $('#cardText').html(response[1].card.text);
    $('#cardAttackDefense').html((response[1].card.attack ? "<b>ATK/ </b>" + response[1].card.attack : "") + " " + (response[1].card.defense ? "<b>DEF/ </b>" + response[1].card.defense : ""));
    $('#cardObtain').html(response[0].how ? response[0].how : 'Needs to be Added');    
};

function resizeCardInformation() {
    // Style the image for large card descriptions
    var containerHeight = $('#cardImageColumn').height();
    var difference = Math.floor(containerHeight - 200.5); // Default height of all pics combined are 200.5
    if($('#cardRarity').is(':visible')) {
        $('#cardRarity').css('padding-top', Math.floor(difference/2) + 'px');
    }
    else {
        $('#cardImage').css('padding-top', Math.floor(difference/2) + 'px');
    }
};

function closeMobilePopup() {
    $('#fancyboxSkillDiv').hide();
    $('#fancyboxCardDiv').hide();

    $('.fancybox-loading').show();
    
    $('#skillFancybox').addClass('hideSkillContainer'); 
    $('#cardFancybox').addClass('hideSkillContainer');

    $('#cardImage').css('padding-top', '');
    $('#cardRarity').css('padding-top', '');
};

function updatePopupsForDesktops() {
    let options =
    {
        style: { classes: 'qtip-dark qtip-shadow rounded' },
        show:  { 
            effect: function() { $(this).fadeIn(250); },
            event: false,
            solo: true
        },
        hide:  { 
            fixed: true, 
            effect: function() { $(this).fadeOut(250); },
            event: false 
        },
        position: { 
            my: 'center left', 
            to: 'center right', 
            adjust: { 
                method: 'flip', 
                y: -50, 
                x: 10 
            } 
        },
        content: { text: obtainTextForDesktops }        
    }

    // Manually show/hide the popup, as the listener for qtip
    // doesn't add the card/skill listeners correctly outside a deck
    $('.dcards').on('mouseenter', function() {
        var self = $(this);
        var events = {
            visible: function(event, api) {
                tooltipVisible(event, api, self, '.dcards');
            }
        }
        options.events = events;

        var tooltips = $(this).qtip(options);
        var api = tooltips.qtip('api');
        api.show();
    });
    $('body').on('mouseenter', '.card-hover', function() {
        var self = $(this);
        var events = {
            visible: function(event, api) {
                tooltipVisible(event, api, self, '.card-hover');
            }
        }
        options.events = events;

        // Add additional needed options for card-hover elements 
        options.style.tip = false;
        options.position.viewport = $('.container');
        options.position.adjust.method = 'shift';
        options.position.adjust.x = 0;
        options.position.adjust.y = 0;

        var tooltips = $(this).qtip(options);
        var api = tooltips.qtip('api');
        api.show();
    }); 
};

function obtainTextForDesktops( event, api ) {
    let websiteLink = location.protocol + "//" + location.hostname;
    if(location.port){
        websiteLink += ":" + location.port;
    }
    
    let type = $(this).attr('name');
    if(type == "cardPopup") {
        let name = $(this).attr('src');
        let cardobtain = axios.get(websiteLink + "/data/cardObtain.json").then(function(r) {
            let cardName = name.replace("https://yugiohprices.com/api/card_image/", "")
            return r.data.filter(i => i.name == cardName)[0] || new Error('No Resource')
        });
        let cardinfo = axios.get("https://www.ygohub.com/api/card_info?name=" + $(this).attr("src").replace("https://yugiohprices.com/api/card_image/", "")).then(function(r) {
            return r.data
        });
        Promise.all([cardobtain, cardinfo]).then(function(r) {
            api.set('content.text',
            `<div class="preview">
                ${ r[0].rarity ? `<img src="${websiteLink}/img/assets/${r[0].rarity}.png" style="margin-left: 69px;margin-top:20px;width: 60px;" />` : '<br>'}
                <img width="120px" src="${name}" style="margin-bottom: 20px" />
            </div>
                <div class="carddata"><b style="margin-bottom: .5rem;">${r[1].card.name}</b><br />
                    ${r[1].card.attribute ? "<p>Attribute: " + r[1].card.attribute : ""}
                    ${r[1].card.stars ? "Level: " + r[1].card.stars+"</p>"  : ""}
                    ${r[1].card.is_monster
                        ? '<p><b>[ </b>' + r[1].card.species + ' / ' + r[1].card.monster_types.join(' / ') + '<b> ]</b></p>'
                        : '<p><b>[ </b>' + r[1].card.type + ' / ' + r[1].card.property +  '<b> ]</b></p>'}
                    ${r[1].card.has_materials ? `<p><i>${r[1].card.materials}</i></p>` : ''}
                    <p>${r[1].card.text}</p>
                    <p>${r[1].card.attack ? "<b>ATK/ </b>" + r[1].card.attack : ""}
                    ${r[1].card.defense ? "<b>DEF/ </b>"+r[1].card.defense : ""}</p>
                    <p><u>How To Obtain</u></p>
                    ${ r[0].how ? `<p style="text-transform: capitalize">${r[0].how}</p>` : 'Needs to be Added'}
                </div>`)
        });
        return "Loading card...";
    }
    else if(type == "skillPopup") {
        let name = $(this).html();
        axios.get(websiteLink + "/data/skillsChars.json").then( function( response ) {
            displayTextForSkillOnDesktops(response, name, api, websiteLink);
        });
        return "Loading skill...";
    }
};  

function displayTextForSkillOnDesktops(r, name, api, websiteLink) {
    let characterWhoUses = [];
    let exclusive = false;
    let desc = "No description available";
    let officialName = name;

    for(var i = 0; i < r.data.length; i++) {
        if(r.data[i].name.replace(/[^a-zA-Zα-ωΑ-Ω ]/g, "").toLowerCase() == name.replace(/[^a-zA-Zα-ωΑ-Ω ]/g, "").toLowerCase()){
            officialName = r.data[i].name;
            desc = r.data[i].desc;
            exclusive = r.data[i].exclusive;
            characterWhoUses.push(r.data[i].character);

            if(exclusive == true)
                break;
        }
    }

    let portaitName = characterWhoUses[0].toLowerCase().replace(" ", "-");
    
    api.set('content.text',
    `<div class="previewSkill"><img src="${websiteLink}/img/characters/portrait-${exclusive == true ? portaitName : 'vagabond'}.png" /></div>
    <div class="skilldata">
        <b>${officialName}</b><br/>
        <p>${desc}</p>
        ${exclusive == true
                ? '<p>Skill exclusive to ' + characterWhoUses[0] + '.</p>'
                : '<p>Skill can be used by different characters.</p>'}
    </div>`);
};

async function tooltipVisible( event, api, self, className ) {
    $('#qtip-' + api.id).on('mouseleave', function() {
        var tooltips = self.qtip();
        tooltips.hide();
        $('body').off('mouseleave', className);
        $('body').off('click.tooltip.off');
    });
    $('body').on('click.tooltip.off', function() {
        var tooltips = self.qtip();
        tooltips.hide();
        $('body').off('mouseleave', className);
        $('body').off('click.tooltip.off');
    });

    // Delay the mouseleave initialization until the tip is fully visible (.5 second)
    await sleep(500);

    $('body').on('mouseleave', className, function() {
        var tooltips = self.qtip();
        tooltips.hide();
        $('body').off('mouseleave', className);
        $('body').off('click.tooltip.off');
    });
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};