// jshint asi:true
document.addEventListener('DOMContentLoaded', function(event) {
  const elements = document.querySelectorAll('.project')

  elements.forEach(element => {
    const projectButton = element.querySelector('.project-button')
    const overlay = element.querySelector('.overlay')

    element.addEventListener('mouseover', function(e) {
      overlay.classList.add('overlay-show')
      projectButton.classList.add('project-button-show')
    })

    element.addEventListener('mouseout', function(e) {
      overlay.classList.remove('overlay-show')
      projectButton.classList.remove('project-button-show')
    })
  })
})