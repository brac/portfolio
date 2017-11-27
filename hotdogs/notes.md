Things to do:
  Make modals for every item
  Tidy up the JS

  Get blur and focus working
    The reason blue and focus were not working was because you were using event delegation and bubbling to delegate focus in and out events. Since that doesn't work you should have read the jQuery docs.

      Read the general events
      Read the docs page on the .on function
      Google How to do event delegation from scratch

  Placeholder for textarea text.

    Simple default text solution for text areas


  How to bind to DOMReady

    To bind to document ready just do the longhand:

```javascript
    $(document).ready(function(){
      $(selector).on('focusin', function(event){
        ...something...
      })
    })
```
  How to bind directly to elements

    To bind directly to an element, do:

```javascript
    $('selector').on(...SomeEvent.., function(event){
      // do the thing
      })
```

