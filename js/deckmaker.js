var is_mobile = false;

$(function() {
  if ($(".stats").css("display") == "none") {
    is_mobile = true;
  }  else {
$(function() {
    $('.dcards').each(function() {
      let name = $(this).attr('src')
        $(this).qtip({
            style: {
                classes: 'qtip-dark qtip-shadow rounded'
            },
        show: {
            effect: function() {
                $(this).fadeTo(500, 1);
            }
        },
        hide: {
            effect: function() {
                $(this).fadeOut(200);
            }
        },
            position: {
        my: 'center left',
        to: 'center right',
              adjust: {
               y: -50
            }
    },
            content: {
                text: function(event, api) {
                    axios.get("https://www.ygohub.com/api/card_info?name=" + $(this).attr("src").replace("https://yugiohprices.com/api/card_image/", "")).then(function(r) {
                        api.set('content.text', `<div class="preview"><img width="120px" src="${name}" /></div><div class="carddata"><b>${r.data.card.name}</b><br />
${r.data.card.attribute ? "<p>Attribute: "+r.data.card.attribute : ""} ${r.data.card.stars ? "Level: " + r.data.card.stars+"</p>"  : ""}
${r.data.card.is_monster ? '<p><b>[ </b>'+ r.data.card.species + ' / ' + r.data.card.monster_types + '<b> ]</b></p>' : '<p><b>[ </b>' +r.data.card.type+ ' / ' + r.data.card.property +  '<b> ]</b></p>'}<p>${r.data.card.text}</p>
<p>${r.data.card.attack ? "<b>ATK/</b>"+r.data.card.attack : ""} ${r.data.card.defense ? "<b>DEF/</b>"+r.data.card.defense : ""}</p>
</div>`)
                    })
                    return "Loading card...";
                },
            }
        })
    })
})
  } 
}); 

$(function() {
  if (is_mobile == true) {
    $(".item a").each(function() {
      $(this).attr("href",$(this).find("img").attr("src")).addClass("fancybox");
      $(this).qtip('destroy')
    });
    $('.qtip').remove();
    $(".fancybox").fancybox();
  }
});

$(window).on("resize", function() {
  is_mobile = $(".stats").css("display") == "none";
  if (is_mobile == true) {
    $(".item a").each(function(index) {
      $(this).attr("href",$(this).find("img").attr("src")).addClass("fancybox").qtip('destroy');
      $(this).qtip('destroy');
    });
    $(".fancybox").fancybox();
  }
});