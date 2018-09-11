document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("party").addEventListener("click", startParty)
})

function startParty() {
  loadPartyStyle()
    .then(loadBoomBox)
    .catch(error => document.querySelector('main').insertBefore(`<p>Error: ${error}</p>`))
}

function loadPartyStyle() {
  return Promise.resolve(document.getElementById("style")
    .setAttribute('href', 'party.css'))
}

function loadBoomBox() {
  const musicSrc = 'https://ia802808.us.archive.org/29/items/01.OneMoreTime/01.%20One%20More%20Time.ogg'
  const boomBox = `<audio autoplay><source src=${musicSrc} type="audio/ogg"></audio>`
  document.querySelector('main').insertBefore(boomBox)
} 

