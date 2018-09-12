Warning on line 177
  - Is this bad? How bad is this?

Nested for loops
  - How to not use this ever again

Formatting werid
Trailing commas ok
gameboard.children, probably use querySelector

line 210: dont query the dom to the state
Your finding the same element, like line 34

Dont pull the class name off things, for the gameboard button

Give it a data-name or some custom class, so you don't have to parse
the DOM

Dont store things in a way you will have to mutate, put it in the way
that you will accessing it later.

Change the state to
this.state = [
  null, null, null,
  null, null, null,
  null, null, null,
]

setTimeout would be better as a CSS animation
Throw a classname that has the css animation that does the flash. You can have
a stetime out that takes the className off when it is done.
You can also listen for an animation end event.

You can find out what child number a node is from the parent.