let musicSrc = 'https://ia802808.us.archive.org/29/items/01.OneMoreTime/01.%20One%20More%20Time.ogg'
let boomBox = `<audio autoplay><source src=${musicSrc} type="audio/ogg"></audio>`

function loadPartyStyle() {
  let style = $("#style")
  style.attr('href', 'party.css')
}

function startParty() {
  loadPartyStyle()
  $('main').before(boomBox)
}
