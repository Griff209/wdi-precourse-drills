document.addEventListener("DOMContentLoaded", () => {
  
  document.getElementById("startParty").addEventListener("click", () => {
    loadPartyStyle()
    .then(loadBoomBox)
    .catch(error => document.querySelector('main').insertBefore(`<p>Error: ${error}</p>`))
  })

  document.getElementById("stopParty").addEventListener("click", () => {
    loadProStyle()
    .then(loadBoomBox)
    .then(unloadBoomBox)
    .catch(error => document.querySelector('main').insertBefore(`<p>Error: ${error}</p>`))
  })

  function loadPartyStyle() {
    document.getElementById("style").setAttribute('href', 'party.css')
      return Promise.resolve(true)
  }
  
  function loadProStyle() {
    document.getElementById("style").setAttribute('href', 'professional.css')
      return Promise.resolve(true)
  }
  
  function loadBoomBox() {
    let box
    if (!document.getElementById('boomBox')) {
      box = document.createElement('div')
      box.setAttribute('id', 'boomBox')
      box.innerHTML += `<audio controls><source src="https://ia802808.us.archive.org/29/items/01.OneMoreTime/01.%20One%20More%20Time.ogg" type="audio/ogg"></audio>`
      document.querySelector('main').appendChild(box)
    } else {
      box = document.getElementById('boomBox')
    } 
    return Promise.resolve(box)
  } 
  
  function unloadBoomBox(boomBox) {
    document.querySelector('main').removeChild(boomBox)
  }
})
