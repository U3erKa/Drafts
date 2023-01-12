# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

Paragraph 1

Paragraph 2

Paragraph 1<br>
with line break using br

Paragraph 2\
with line break using \\

Paragraph 3  
with line break using double whitespace

I just love **bold text** 1.

I just love __bold text__ 2.

Love**is**bold

Italicized text 1 is the *cat's meow*.

Italicized text 2 is the _cat's meow_.

A*cat*meow

This text is ***really important*** 1.

This text is ___really important___ 2.

This text is __*really important*__ 3.

This text is **_really important_** 4.

This is really***very***important text

Blockquote with multiple paragraphs (they can be nested):
> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.

Unordered list 1

- First item
- Second item
- Third item
- Fourth item

Unordered list 2

* First item
* Second item
* Third item
* Fourth item

Unordered list 3

+ First item
+ Second item
+ Third item
    + Indented item
    + Indented item
+ Fourth item

- 1968\. A great year!
- I think 1969 was second best.

Nested ordered list

1. First item
2. Second item
3. Third item
4. Fourth item
    1. First subitem
    1. Second subitem
    1. Third subitem
    1. Fourth subitem

Unordered list inside ordered one

1. First item
2. Second item
3. Third item
    - Indented item
    - Indented item
4. Fourth item

Paragraph in list

* This is the first list item.
* Here's the second list item.

    I need to add another paragraph below the second list item.

* And here's the third list item.

Blockquote in list

* This is the first list item.
* Here's the second list item.

    > A blockquote would look great below the second list item.

* And here's the third list item.

Code in list, needs 8 whitespaces (normally 4)

1. Open the file.
2. Find the following code block on line 21:

        <html>
          <head>
            <title>Test</title>
          </head>

3. Update the title to match the name of your website.

Image in list

1. Open the file containing the Linux mascot.
2. Marvel at its beauty.

    ![Tux, the Linux mascot](/assets/images/tux.png)

3. Close the file.

Code

    <html>
      <head>
        <title>Test</title>
      </head>

At the command prompt, type `npm i`.

``Use `code` in your Markdown file.``

Fenced code block with syntax highlighting

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

***

Horizontal rules

---

My favorite search engine is [Duck Duck Go](https://duckduckgo.com "The best search engine for privacy").

___


Links

<https://www.markdownguide.org>

<fake@example.com>

I love supporting the **[EFF](https://eff.org)**.
This is the *[Markdown Guide](https://www.markdownguide.org)*.
See the section on [`code`](#code).

Reference link

In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends
of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to
eat: it was a [hobbit-hole][1], and that means comfort.

[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"

Image

![The San Juan Mountains are beautiful!](/assets/images/san-juan-mountains.jpg "San Juan Mountains")

Image with link

[![An old rock in the desert][img]][link]

[img]: /assets/images/shiprock.jpg "Shiprock, New Mexico by Beau Rogers"
[link]: https://www.flickr.com/photos/beaurogers/31833779864/in/photolist-Qv3rFw-34mt9F-a9Cmfy-5Ha3Zi-9msKdv-o3hgjr-hWpUte-4WMsJ1-KUQ8N-deshUb-vssBD-6CQci6-8AFCiD-zsJWT-nNfsgB-dPDwZJ-bn9JGn-5HtSXY-6CUhAL-a4UTXB-ugPum-KUPSo-fBLNm-6CUmpy-4WMsc9-8a7D3T-83KJev-6CQ2bK-nNusHJ-a78rQH-nw3NvT-7aq2qf-8wwBso-3nNceh-ugSKP-4mh4kh-bbeeqH-a7biME-q3PtTf-brFpgb-cg38zw-bXMZc-nJPELD-f58Lmo-bXMYG-bz8AAi-bxNtNT-bXMYi-bXMY6-bXMYv

[Heading IDs](#heading-ids)

### My Great Heading {#custom-id}

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.

