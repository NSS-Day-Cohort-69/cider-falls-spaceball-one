/*loop through database.guest display guest.fullName
functionName: displayGuest
*/
import { getGuests } from './database.js'

const guests = getGuests()

export const displayGuests = () => {
    let guestHTML = "<section><h1>Guest</h1>"
    guestHTML += "<ul>"

    for (const guest of guests) {
        guestHTML += `<li> ${guest.fullName} </li>`
    }

    guestHTML += "</ul>"
    guestHTML += "</section>"
    return guestHTML
}
