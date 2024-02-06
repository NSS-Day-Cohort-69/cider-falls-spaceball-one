/*loop through database.guest display guest.fullName
functionName: displayGuest
*/
import { getGuests } from './script/database.js'

const guests = getGuests()

export const displayGuests = () => {
    let guestHTML = "<section>"
    guestHTML = "<ul>"

    for (const guest of guests) {
        guestHTML += `<li> ${guest.fullName} </li>`
    }

    guestHTML += "</ul>"
    guestHTML += "</section>"
    return guestHTML
}
