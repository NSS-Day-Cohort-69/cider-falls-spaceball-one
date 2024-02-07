/*loop through database.guest display guest.fullName
functionName: displayGuest
*/
import { getGuests } from './database.js'

const guests = getGuests()

export const displayGuests = () => {
    let guestHTML = `<h1 class="guestTitle">Guests</h1>`
    guestHTML += "<ul>"

    for (const guest of guests) {
        guestHTML += `<li class="guestsName"> ${guest.fullName} </li>`
    }

    guestHTML += "</ul>"
    return guestHTML
}
