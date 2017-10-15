$(document).ready(function()
{
    InitializeViewModel();
    GetTopDecks();
});

function InitializeViewModel()
{
    TopDecksViewModel =
    {
        deckTypes: ko.observableArray(),
        filteredDecks: ko.observableArray(),
        filteredSkills: ko.observableArray(),

        filteredDecksByType: [],

        filterByType: function(decktype)
        {
            var newDecks = $.map($(TopDecksViewModel.deckTypes()).filter(function(){return this.id === decktype.id}), function(value, index){ return value.decks });
            var newSkills = RemoveDuplicates($.map(newDecks, function(value, index){ return value.skill }));
            
            TopDecksViewModel.filteredSkills(newSkills);

            if(newDecks.length !== 0)
                newDecks.sort(SortDecksByDate);
                
            TopDecksViewModel.filteredDecks(newDecks);
            filteredDecksByType = newDecks;
        },

        filterByTypeAndSkill: function(skill)
        {
            var newDecks = $(filteredDecksByType).filter(function(){return this.skill === skill});
            
            if(newDecks.length !== 0)
                newDecks.sort(SortDecksByDate);
                
            TopDecksViewModel.filteredDecks(newDecks);
        },

        deckTypeHasNewDecks: function(deckType)
        {
            var deckTypeHasNewDecks = false;

            $.each(deckType.decks, function(index, deck)
            {
                var creationDate = new Date(deck.created);
                creationDate.setDate(creationDate.getDate() + 3);

                if (creationDate >= new Date())
                {
                    deckTypeHasNewDecks = true;
                    return false;
                }
            });

            return deckTypeHasNewDecks;
        }
    };
    
    ko.applyBindings(TopDecksViewModel);
}

function GetTopDecks()
{
    $.getJSON( "/data/topdecks.json", function(data)
    {
        var defaultDecks = [];

        $.each(data,  function(index, decktype)
        {
            $.merge(defaultDecks, decktype.decks);
        });

        defaultDecks.sort(SortDecksByDate);

        TopDecksViewModel.filteredDecks(defaultDecks);

        TopDecksViewModel.deckTypes(data);
    });
}

function SortDecksByDate(a, b)
{
    return ((a.created < b.created) ? 1 : ((a.created > b.created) ? -1 : 0));
}

function RemoveDuplicates(array)
{
    return $.grep(array, function(elem, index)
    {
        return index === $.inArray(elem, array);
    });
}