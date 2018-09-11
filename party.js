document.addEventListener("DOMContentLoaded", () => {
  
  document.getElementById("startParty")
  .addEventListener("click", () => {
    loadPartyStyle()
    .then(loadBoomBox)
    .catch(error => document.querySelector('main').insertBefore(`<p>Error: ${error}</p>`))
  })

  document.getElementById("stopParty")
  .addEventListener("click", () => {
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
    document.getElementById("style").setAttribute('href', 'pro.css')
      return Promise.resolve(true)
  }
  
  function unloadBoomBox(boomBox) {
    document.querySelector('main').removeChild(boomBox)
  }


  function loadBoomBox() {
    let box = document.getElementById('boomBox')
      ?  document.getElementById('boomBox')
      :  createBoomBox()

    return Promise.resolve(box)
  } 
  
  function createBoomBox() {
    const container = document.createElement('div')
    container.setAttribute('id', 'boomBox')
    container.innerHTML += `<audio controls><source src="https://ia802808.us.archive.org/29/items/01.OneMoreTime/01.%20One%20More%20Time.ogg" type="audio/ogg"></audio>`
    document.querySelector('main').appendChild(container)

    return container
  }
})