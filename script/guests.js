/*loop through database.guest display guest.fullName
functionName: displayGuest
*/
import { getGuests } from './scipt/database.js'

const guests = getGuests()

export const displayGuest = () => {
    let guestHTML = "<ul>"

    for (const guest of guests) {
        guestHTML += `<li> ${guest.fullName} </li>`
    }

    guestHTML += "</ul>"

    return guestHTML
}
