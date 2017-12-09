require 'jekyll'

module Jekyll
    class CardNameConverter < Converter
        safe :false
        priority :high

        def matches(ext)
            ext =~ /^\.(md|markdown)$/i
        end

        def output_ext(ext)
            ".html"
        end

        def convert(content)
            cardNames = Array.new
            decks = Array.new

            lastCardNameTagOpen = -1
            for i in 0...content.length
                currChar = content[i].chr
                if(currChar == "{")
                    lastCardNameTagOpen = i
                elsif (currChar == "}" && lastCardNameTagOpen >= 0)
                    tagContent = content[lastCardNameTagOpen + 1, i - lastCardNameTagOpen - 1]
                    cardNames.push(tagContent)

                    lastCardNameTagOpen = -1
                end
            end

            for i in 0...cardNames.size
                content.sub! '{' + cardNames[i] + '}', '<span class="card-hover" src="https://yugiohprices.com/api/card_image/' + cardNames[i] + '">' + cardNames[i] + '</span><span class="mobile"></span>'
            end

            # Call the standard Markdown converter
            site = Jekyll::Site.new(@config)
            mkconverter = site.find_converter_instance(Jekyll::Converters::Markdown)
            mkconverter.convert(content)
        end
    end
end