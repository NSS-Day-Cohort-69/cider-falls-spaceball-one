import {getParkAreas, getGuests} from './database.js'
import {displayServices} from './services.js'

const parks = getParkAreas()
const guests = getGuests()

export const displayParks = () => {
let parksHTML = '<section class="park-card">'
for(const park of parks) {
    parksHTML += `<div class="${park.id}">
    <h1 data-type="park" data-id="${park.id}">${park.name}</h1>
    <div>
    <div>${displayServices(park.id)}</div>`
    }
    parksHTML += '</section>'
    return parksHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        const parkId = itemClicked.dataset.id
        if (itemClicked.dataset.type === "park") {
            let guestCounter = 0
            for (const guest of guests) {
                if (parseInt(parkId) === guest.parkAreaId) {
                    guestCounter++
                }
            }
            window.alert(`There are ${guestCounter} guests in this area`)
        }
    }
)





