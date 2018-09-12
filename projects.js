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


  // elements.forEach(e => {
    // console.log(e)
  // })


  // const element = document.getElementById('miniappsThumb')
  // element.addEventListener('click', function(event) {
  //   const modal = document.getElementById('miniapps')
  //   modal.innerHTML = ''

  //   const node = document.createTextNode('Comming Soon!')
  //   const p = document.createElement('p')
  //   p.appendChild(node)
  //   modal.appendChild(p)
  // })
})