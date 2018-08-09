## Span and Div
Apply no meaning to content. Used to group chunks of html:

* `<span>`: in-line
* `<div>`: block-line

## Text meaning tags

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
* `<time>`: Used to give semantic value to time texts. Has an attribute `datetime` to specify a machine readable date and/or time
* `<mark>`: highlight text as if with a marker pen

## Metatags
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

## Tables

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

`<colgroup>` and `<col>` are used to define style trough a whole column, for example, without the need to target each individual cell.

Example:
```html
<table>
    <colgroup>
        <col>
        <col class="alternative">
        <col>
    </colgroup>
    <tr>
        <td>This</td>
        <td>That</td>
        <td>The other</td>
    </tr>
</table>
```

`<caption>` defines the caption and should be used straight after the opening table tag.

`<thead>`, `<tfoot>` and `<tbody>` allow you to separate the table into header, footer and body, which can be handy when dealing with larger tables.

## Lists

* `<ul>`: Unordered lists. Uses `<li>` (list items)
* `<ol>`: Ordered Lists. Uses `<li>` (list items)
* `<dl>`: Description Lists. Uses `<dt>` (terms) followed by `<dd>` (descriptions)

## Sectioning

* `<article>`: can be used to mark up a standalone section of content. This could be used just once, if you think of a blog post as an article, for example, or a number of times, if you imagine replicating a traditional newspaper page with numerous articles.
* `<section>`: represents a more general section and could be used to split up an article, or to represent chapters, for example
* `<header>`: header section
* `<footer>`: footer section
* `<aside>`: used to represent content that is related the content surrounding it.
* `<nav>`: used to mark up a group of navigation links

## Conditional comments

Comments that turn into normal html code when read by a certain navigator:

```html
<link href="everything.css" rel="stylesheet">
<!--[if IE]><link href="stupidie.css" rel="stylesheet"><![endif]-->
```

## Accessibility

* `title` attribute can be used at links to explain more details about it
* `accesskey` allow easier navigation by assigning keyboard shortcut to a link or input
* `tabindex` attribute allows you to define a logical tab order that 'overwrite' the HTML default linear order for links and inputs
* Each form field should have its own explicit label. The label tag sorts this out, with a `for` attribute that associates it to a form element
* `<fieldset>` and `<legend>`: You can group fields, for example name (first, last, middle, title etc.) or address (line 1, line 2, county, country, postal code, country etc.) using the fieldset tag. Within the field set, you can set a caption with the legend tag.
  * ```html
    <fieldset>
        <legend>Name</legend>
        <p>First name <input name="firstName"></p>
        <p>Last name <input name="lastName"></p>
    </fieldset>
    ```
* `<optgroup>`: groups options in a select box. It requires a label attribute, the value of which is displayed as a non-selectable pseudo-heading preceding that group in the drop-down list of visual browsers.
  * ```html
    <select name="country">
      <optgroup label="Africa">
          <option value="gam">Gambia</option>
          <option value="nam">Namibia</option>
      </optgroup>
      <optgroup label="Europe">
          <option value="fra">France</option>
          <option value="uk">UK</option>
      </optgroup>
    </select>
    ```

## Forms

HTML5 greatly advances form controls, with numerous additional input types:

* `search`: used for search query text box (`<input type="search">`)
* `tel`, `url`, `email`: You can use the :valid and :invalid CSS3 pseudo classes to style these fields depending on whether their content is considered valid. (`input[type=email]:valid`)
* `number`: simple text box that also allows a user to directly type in a number, or cycle through numbers, can have min and max values.
  * ```html
    <input type="number" name="quantity" step="2" min="20" max="30">
    ```
* `range`: alternative to the digits-in-a-text-box approach can be achieved using `type="range"`. By default, this should be displayed as a horizontal bar with a slider in the middle of it. Can have min and max as well
* Dates and times: there are several input types for it:
  * `type="datetime"`
  * `type="date"`
  * `type="month"`
  * `type="week"`
  * `type="time"`
  * `type="datetime-local"`
* `color`: designed to allow a user to select a color, sending a six-digit hex code as its value.
  * ```html
    <input name="color" type="color" value="#ff8800">
    ```

More input attributes:
* `placeholder`: is intended as a hint, rather than a label
* `autofocus`: you might want focus to land on a form field when a page loads
* `<datalist>`: list of suggestions that accompanies a text field:
  * ```html
    <input name="country" list="country_name">
    <datalist id="country_name">
      <option value="Afghanistan">
      <option value="Albania">
      <option value="Algeria">
    </datalist>
    ```

## Embedded Content

* `<video>`: This will embed a video, has some optional attributes:
  * `controls`: enable controls in the video
  * `autoplay`
  * `src`: video source
  * `width` and `height`
  * `muted`
  * `loop`
  * `poster`: specify a placeholder image for the video
  * Content that goes between the opening and closing video tags sere as fallback content
* `<audio>`: has the same structure as video tag and uses `src`, `controls`, `autoplay` and `loop` the same way
* `<canvas>`: designed to provide a canvas onto which JavaScript can be used to paint all manner of dynamic images such as graphs, animated sprites, or daft cat pictures