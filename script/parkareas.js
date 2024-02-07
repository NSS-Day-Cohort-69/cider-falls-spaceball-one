import {getParkAreas, getGuests} from './database.js'
import {displayServices} from './services.js'

const parks = getParkAreas()
const guests = getGuests()

export const displayParks = () => {
let parksHTML = ""
for(const park of parks) {
    parksHTML += `<div class="eachCard">
    <div class="${park.name}">
    <h1 class= "parkTitle" data-type="park" data-id="${park.id}">${park.name}</h1>
   
    <div>${displayServices(park.id)}</div>
    </div>
    </div>`
    }
    
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





