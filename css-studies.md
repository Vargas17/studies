## Grouping

You can group selectors to apply a common style among them:

```css
h2, .thisOtherClass, .yetAnotherClass {
    color: red;
}
```

## Nesting

You can specify properties to selectors within other selectors:

```css
#top h1 {
    color: #ff0;
}
#top p {
    color: red;
    font-weight: bold;
}
```

## Pseudo Classes and Elements

Pseudo classes are bolted on to selectors to specify a state or relation to the selector. They take the form of `selector:pseudo_class { property: value; }`:
```css
a:active {
    color: red;
}
a:hover {
    color: blue;
}
```

Example of pseudo-classes/elements:

* `:link`: unvisited link
* `:visited`: visited link
* `:active`: something activated by the user
* `:hover`: user hoved with mouse
* `:focus`: user focused (e.g: clicked)
* `:first-child`: targets first descendant of an element
* `:first-letter`: applies to the first letter inside a box
* `:first-lelinetter`: applies to the first line inside a box
* `::before` and `::after`: the before and after pseudo elements are used in conjunction with the `content` property to place content either side of a box without touching the HTML.

## Specificity

If you have two (or more) conflicting CSS rules that point to the same element, there are some basic rules that a browser follows to determine which one is most specific to apply it.

You can give every ID selector (“#whatever”) a value of 100, every class selector (“.whatever”) a value of 10 and every HTML selector (“whatever”) a value of 1. Then you add them all up to have a specificity value:

* `p` has a specificity of 1 (1 HTML selector)
* `div p` has a specificity of 2 (2 HTML selectors, 1+1)
* `.tree` has a specificity of 10 (1 class selector)
* `div p.tree` has a specificity of 12 (2 HTML selectors + a class selector, 1+1+10)
* `#baobab` has a specificity of 100 (1 id selector)
* `body #content .alternative p` has a specificity of 112 (HTML selector + id selector + class selector + HTML selector, 1+100+10+1)

## Display

The most fundamental types of `display` are `inline`, `block` and `none`.

* `inline`: boxes that are displayed inline follow the flow of a line
* `block`: makes a box standalone, fitting the entire width of its containing box, with an effective line break before and after it
* `none`: doesn’t display a box at all, hiding it.

## Positioning

The `position` property is used to define whether a box is absolute, relative, static or fixed:

* `static`: is the default value and renders a box in the normal order of things, as they appear in the HTML.
* `relative`: is much like static but the box can be offset from its original position with the properties top, right, bottom and left.
* `absolute`: pulls a box out of the normal flow of the HTML. The absolute box can be placed anywhere on the page using top, right, bottom and left.
* `fixed`: behaves like absolute, but it will absolutely position a box in reference to the browser window as opposed to the web page, so fixed boxes should stay exactly where they are on the screen even when the page is scrolled.

## Floating

Floating a box will shift it to the right or left of a line, with surrounding content flowing around it.

Floating is normally used to shift around smaller chunks within a page, such as pushing a navigation link to the right of a container, but it can also be used with bigger chunks, such as navigation columns.

Using float, you can `float: left` or `float: right`.

Then, if you do not want the next box to wrap around the floating objects, you can apply the clear property:

* `clear: left` will clear left floated boxes
* `clear: right` will clear right floated boxes
* `clear: both` will clear both left and right floated boxes.

## Shadows

```css
box-shadow: 5px 5px 3px 1px #999
```

* The first value is the horizontal offset — how far the shadow is nudged to the right (or left if it’s negative)
* The second value is the vertical offset — how far the shadow is nudged downwards (or upwards if it’s negative)
* The third value is the blur radius — the higher the value the less sharp the shadow. (“0” being absolutely sharp). This is optional — omitting it is equivalent of setting “0”.
* The fourth value is the spread distance — the higher the value, the larger the shadow (“0” being the inherited size of the box). This is also optional — omitting it is equivalent of setting “0”.
* The fifth value is a color. That’s optional, too.

You can also apply shadows to the inside of a box by adding “inset” to the list:
`box-shadow: inset 0 0 7px 5px #ddd;`

You can also apply shadows to the outline of text with `text-shadow`.

## Selectors

### Universal selector

Using an asterisk (“ * ”), you can target everything in a page or within an element:
```css
* {
    margin: 0;
    padding: 0;
}
#contact * {
    display: block;
}
```

### Child selectors
A greater-than symbol (“>”) can be used to specify something that is a child of something else, that is, something *immediately nested* within something.
```css
#genus_examples > li { border: 1px solid red }
```

`#genus_examples li` would target all `li` inside `#genus_examples`.

With the ">", it targets only the direct childs (not grand childs, for example).

### Adjacent selectors
A plus sign (“+”) is used to target an adjacent sibling of an element, essentially, something *immediately following* something.
```css
h1 + p { font-weight: bold }
```
Only the first paragraph, that following the heading, will be made bold.

### Attribute selectors
Appending an attribute name enclosed in square brackets, to style something that simply contains a certain attribute. You can further specify that you want to style something with a specific *attribute value*.
```css
input[type=text] { width: 200px; }
```
You can also target more than one attribute at a time in a way similar to the following:
```css
input[type=text][disabled] { border: 1px solid #ccc }
```


## At-Rules
At-rules are clever huggers that encapsulate a bunch of CSS rules and apply them to something specific. They can be used to import other CSS files, apply CSS to a particular media, or embed uncommon fonts.

### Importing
This is used to bolt another stylesheet onto your existing one:
```css
@import url(morestyles.css);
```

### Targeting media types
@media can be used to apply styles to a specific media, such as print.
```css
@media print {
    body {
        font-size: 10pt;
        font-family: times, serif;
    }
}
```
You can use *media queries* to be more specific about what you want to target.
```css
@media screen and (max-width: 1000px) {
    #content { width: 100% }
}
@media screen and (orientation: landscape) {
    #nav { float: left }
}
@media (device-pixel-ratio: 2) {
    body { background: url(twiceasbig.png) }
}
@media screen and (min-device-height: 768px) and (max-device-width: 1024px) { /* */ }
@media screen and (resolution: 326dpi) { /* */ }
@media screen and (min-resolution: 96dpi) { /* */ }
@media screen and (device-aspect-ratio: 16/9) { /* */ }
```


### Embedding fonts
`@font-face` is widely used as a technique for embedding fonts in a web page so that a typeface can be used even if it isn’t sitting on the user’s computer.

```css
@font-face {
    font-family: "font of all knowledge";
    src: url(fontofallknowledge.woff);
    font-weight: 400;
}
p { font-family: "font of all knowledge", arial, sans-serif; }
```

## Shorthand properties
Some CSS properties allow a string of values, replacing the need for a number of properties. These are represented by values separated by spaces.

For example:
```css
p {
    margin-top: 1px;
    margin-right: 5px;
    margin-bottom: 10px;
    margin-left: 20px;
}
```

Can be summed up as:
```css
p {
    margin: 1px 5px 10px 20px;
}
```

## Transitions
Transitions allow you to easily animate parts of your design without the need of JavaScript.

The `transition` property is a shorthand property that combines the following properties (which can be used individually if you so choose):

* transition-property: which property (or properties) will transition.
* transition-duration: how long the transition takes.
* transition-timing-function: if the transition takes place at a constant speed or if it accelerates and decelerates.
* transition-delay: how long to wait until the transition takes place.

```css
a:link {
    transition: all .5s linear 0;
    color: hsl(36,50%,50%);
}
a:hover {
    color: hsl(36,100%,50%);
}
```

When the link is hovered over, the color will gradually change rather than suddenly switch. The transition property here is saying it wants all properties transitioned over half a second in a linear fashion with no delay.

## Transformations

You can manipulate the shape, size, and position of a box and its contents using the `transform` property.

Manipulating a box over two dimensions, transform can be used to rotate, skew, scale and translate a box and its contents.

```css
transform: rotate(-10deg) scale(2);
```

There’s one important aspect missing. If you are transforming a box, there is a further parameter involved: the origin of the transformation.
```css
transform-origin: 0 0;
```

## Box Model
The CSS box model is a set of rules that defines how every element in a web page is rendered. According to the box model, every element in a page is a rectangular box with at least a content, a width and a height.

![box model](https://pressupinc.com/wp-content/uploads/2014/01/box-model.png, "Box Model")

Margin is unique in that it doesn't affect the size of the box itself per se, but it affects other content interacting with the box.

The size of the box is calculated by the sum of its dimensions, the padding and the border.