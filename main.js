// jshint asi:true
document.addEventListener('DOMContentLoaded', function(event) {
  const textElements = document.querySelectorAll('.list-inline-text')


  textElements.forEach(element => {
    element.addEventListener('mouseover', function(e) {
      e.target.classList.add('list-inline-text-show')
    })

    element.addEventListener('mouseout', function(e) {
      e.target.classList.remove('list-inline-text-show')
    })
  })
})