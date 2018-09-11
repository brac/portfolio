// jshint asi:true
document.addEventListener('DOMContentLoaded', function(event) {
  const element = document.getElementById('miniappsThumb')
  element.addEventListener('click', function(event) {
    const modal = document.getElementById('miniapps')
    modal.innerHTML = ''

    const node = document.createTextNode('Comming Soon!')
    const p = document.createElement('p')
    p.appendChild(node)
    modal.appendChild(p)
  })
})