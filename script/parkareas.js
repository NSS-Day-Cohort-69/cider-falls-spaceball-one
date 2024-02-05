import {getParks, getGuests} from './script/database.js'

const parks = getParks()
const guests = getGuests()

export const displayPark = () => {
let parksHTML = '<section class="park-card">'
for(const park of parks) {
    parksHTML += `<div>
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





