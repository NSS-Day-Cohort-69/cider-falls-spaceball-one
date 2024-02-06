
import {displayParks} from './parkareas.js'
import {displayGuests} from './guests.js'

const parentHTMLElement = document.querySelector(".park-cards")
const parentHTMLElementTwo = document.querySelector(".guests")

parentHTMLElement.innerHTML = displayParks()
parentHTMLElementTwo.innerHTML = displayGuests()