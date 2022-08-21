# CSS Flexbox
Flex Layout is based on: flex-flow-directions
## Items can be laid out in either of the two directions:
- Horizontal rows
- Vertical row
## Main Components:
### Flex Container(Parent)
- display: flex -> enables flex context for all of its direct children
- flex-direction: row | column -> items will fit onto one line
- flex-wrap:(default: nowarp) | wrap
- flex-flow -> flex-direction + flex-wrap
- justify-content: flex-start | flex-end | center | space-between | - space-around | space-evenly -> the alignment along the main axis
- align-items: flex-start | flex-end | center | stretch | baseline -> the alignment along the cross axis
- align-content: flex-start | flex-end | center | stretch | space-between | space-around -> aligns a flex container’s lines within when there is extra space in the cross-axis
- gap, row-gap, column-gap: integer
### Flex Items(Children)
- order: unitless integer -> controls the order in which they appear in the flex container(default: 0, any number will override the 0)
- flex-grow: unitless integer -> a proportion that indicates what amount of the available space inside the flex container the item should take up
- flex-shrink: unitless integer -> ability for a flex item to shrink if necessary
- flex-basis: -> defines the default size of an element before the remaining space is distributed
If set to 0, the extra space around content isn’t factored in.
If set to auto, the extra space is distributed based on its flex-grow value.
- flex: flex-grow + flex-shrink + flex-basis(default: 0 1 auto)
- align-self: flex-start | flex-end | center | stretch | baseline -> allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.

#### Units:

##### Abdolute vs Relative Units

###### Absolute Units:
The same size regardless of the parent element or window size.

###### Relative Units:
Relative units are useful for styling responsive sites because they scale relative to the parent or window size (depending on the unit).