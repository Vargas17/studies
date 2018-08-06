### Span and Div
Apply no meaning to content. Used to group chunks of html:

* `<span>`: in-line
* `<div>`: block-line

### Abbreviations, quotes, code, emphasis...

* `<em>`: traditionaly browsers display italics
* `<strong>`: "..." bold
* `<abbr>`: Used to markup abbreviation (the full text should be defined in the property `title`)
* `<blockquote>`: for multi-line quotation (`cite` attr to point origin)
* `<q>`: for shorter in-line quotation (`cite` attr to point origin)
* `<cite>`: tag to citings, used to define title of a work, for example
* `<code>`: represent any form of code
* `<var>`: variables
* `<samp>`: sample output
* `<kbd>`: user input
* `<pre>`: preformatted text: takes notice of aditional spaces and line breaks. Well used together with `<code>` for code formatting


### Metatags
Metatags don't change content, but are used to help search engines catalogue page info.

The `<meta>` can be used many times inside `<head>` and can contain the attributes `charset`, `name`, `http-equiv` and `content`

* name: The name attribute can be anything you like. The most commonly used names are `author`, `description`, and `keywords`.

* http-equiv: Can be used instead of `name` and will make an HTTP header for infos sent to the server. The value can be:

  * `content-type`: an encoding declaration, defining what character set is being used
  * `default-style`: the preferred stylesheet from a selection of link or style elements
  * `refresh`: which defines how often (in seconds) a page automatically refreshes or if it should automatically redirect to another page. Not great for accessibility.

Example of use
```html
<head>
    <title>Air conditioners? YEAH conditioners!</title>
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="3"><!--not recommended for sane people-->
    <meta name="description" content="This is my really, really, REALLY exciting web page about air conditioners">
<head>
```

### Tables

* `<table>`: defines a table
* `<tr>`: defines a table row
* `<td>`: defines a data cell
* `<th>`: defines a header cell

`colspan` and `rowspan` attributes spans cells to merge into one.

Code example:
```html
<table>
    <tr>
        <th>Column 1 heading</th>
        <th>Column 2 heading</th>
        <th>Column 3 heading</th>
    </tr>
    <tr>
        <td>Row 2, cell 1</td>
        <td colspan="2">Row 2, cell 2, also spanning Row 2, cell 3</td>
    </tr>
    <tr>
        <td rowspan="2">Row 3, cell 1, also spanning Row 4, cell 1</td>
        <td>Row 3, cell 2</td>
        <td>Row 3, cell 3</td>
    </tr>
    <tr>
        <td>Row 4, cell 2</td>
        <td>Row 4, cell 3</td>
    </tr>
</table>
```

### Lists

* `<ul>`: Unordered lists. Uses `<li>` (list items)
* `<ol>`: Ordered Lists. Uses `<li>` (list items)
* `<dl>`: Description Lists. Uses `<dt>` (terms) followed by `<dd>` (descriptions)

### Sectioning

* `<article>`: can be used to mark up a standalone section of content. This could be used just once, if you think of a blog post as an article, for example, or a number of times, if you imagine replicating a traditional newspaper page with numerous articles.
* `<section>`: represents a more general section and could be used to split up an article, or to represent chapters, for example
* `<header>`: header section
* `<footer>`: footer section
* `<aside>`: used to represent content that is related the content surrounding it.
* `<nav>`: used to mark up a group of navigation links