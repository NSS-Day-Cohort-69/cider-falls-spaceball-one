
import {displayParks} from './script/parkareas.js'
import {displayGuests} from './script/guests.js'

const parentHTMLElement = document.querySelector(".park-cards")
const parentHTMLElementTwo = document.querySelector(".guests")

parentHTMLElement.innerHTML = displayParks()
parentHTMLElementTwo.innerHTML = displayGuests()