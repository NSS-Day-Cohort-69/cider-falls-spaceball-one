/*make a database for parkAreas, services, guests, parkAreaServices

functionName: get()
*/

const database = {
    guests: [
        {
            id: 1,
            fullName: "Olivia Rodriguez",
            parkAreaId: 1
        },
        {
            id: 2,
            fullName: "Ethan Hayes",
            parkAreaId: 2
        },
        {
            id: 3,
            fullName: "Isabella Martinez",
            parkAreaId: 3
        },
        {
            id: 4,
            fullName: "Liam Parker",
            parkAreaId: 4
        },
        {
            id: 5,
            fullName: "Sophia Nguyen",
            parkAreaId: 5
        },
        {
            id: 6,
            fullName: "Noah Thompson",
            parkAreaId: 6
        },
        {
            id: 7,
            fullName: "Ava Reynolds",
            parkAreaId: 1
        },
        {
            id: 8,
            fullName: "Jackson Patel",
            parkAreaId: 2
        },
        {
            id: 9,
            fullName: "Mia Sullivan",
            parkAreaId: 3
        },
        {
            id: 10,
            fullName: "Aiden Mitchell",
            parkAreaId: 4
        },
        {
            id: 11,
            fullName: "Harper Lewis",
            parkAreaId: 5
        },
        {
            id: 12,
            fullName: "Lucas Carter",
            parkAreaId: 6
        },
        {
            id: 13,
            fullName: "Amelia Turner",
            parkAreaId: 1
        },
        {
            id: 14,
            fullName: "Mason Williams",
            parkAreaId: 2,
        },
        {
            id: 15,
            fullName: "Evelyn Murphy",
            parkAreaId: 3
        },
        {
            id: 16,
            fullName: "Elijah Clark",
            parkAreaId: 4
        },
        {
            id: 17,
            fullName: "Grace Young",
            parkAreaId: 5
        },
        {
            id: 18,
            fullName: "Logan Adams",
            parkAreaId: 6
        },
        {
            id: 19,
            fullName: "Abigail Jenkins",
            parkAreaId: 1
        },
        {
            id: 20,
            fullName: "Caleb Foster",
            parkAreaId: 2
        }
    ],
    parkAreas: [
        {
            id: 1,
            name: "Lodge",
            location: "Northwest"
            
        },
        {
            id: 2,
            name: "Lost Wolf Hiking Trail",
            location: "Northern"
        },
        {
            id: 3,
            name: "Chamfort River",
            location: "Northeast"
            
        },
        {
            id: 4,
            name: "Gander River",
            location: "Southwest"
            
        },
        {
            id: 5,
            name: "Campgrounds",
            location: "Southern"
        },
        {
            id: 6,
            name: "Pine Bluff Trails",
            location: "Southeast"
            
            
        }
    ],
    services: [
        {
            id: 1,
            name: "Rafting"
        },
        {
            id: 2,
            name: "Canoeing"
        },
        {
            id: 3,
            name: "Fishing"
        },
        {
            id: 4,
            name: "Picnicking"
        },
        {
            id: 5,
            name: "Rock Climbing"
        },
        {
            id: 6,
            name: "Hotel"
        },
        {
            id: 7,
            name: "Restaurant"
        },
        {
            id: 8,
            name: "Lodging"
        },
        {
            id: 9,
            name: "Parking"
        },
        {
            id: 10,
            name: "Information"
        },
        {
            id: 11,
            name: "Zip Line"
        },
        {
            id: 12,
            name: "Hiking"
        }
    ],
    parkAreaServices: [
        {
            id: 1,
            parkAreaId: 1,
            serviceId: 1
        },
        {
            id: 2,
            parkAreaId: 1,
            serviceId: 2
        },
        {
            id: 3,
            parkAreaId: 1,
            serviceId: 3
        },
        {
            id: 4,
            parkAreaId: 2,
            serviceId: 12
        },
        {
            id: 5,
            parkAreaId: 2,
            serviceId: 4
        },
        {
            id: 6,
            parkAreaId: 2,
            serviceId: 5
        },
        {
            id: 7,
            parkAreaId: 3,
            serviceId: 6
        },
        {
            id: 8,
            parkAreaId: 3,
            serviceId: 9
        },
        {
            id: 9,
            parkAreaId: 3,
            serviceId: 10
        },
        {
            id: 10,
            parkAreaId: 3,
            serviceId: 4
        },
        {
            id: 11,
            parkAreaId: 4,
            serviceId: 3
        },
        {
            id: 12,
            parkAreaId: 4,
            serviceId: 12
        },
        {
            id: 13,
            parkAreaId: 5,
            serviceId: 10
        },
        {
            id: 14,
            parkAreaId: 5,
            serviceId: 8
        },
        {
            id: 15,
            parkAreaId: 5,
            serviceId: 9
        },
        {
            id: 16,
            parkAreaId: 6,
            serviceId: 12
        },
        {
            id: 17,
            parkAreaId: 6,
            serviceId: 4
        },
        {
            id: 18,
            parkAreaId: 6,
            serviceId: 11
        }
    ]
 
}


export const getGuests = () => {
    return database.guests.map(guests => ({...guests}))
}

export const getParkAreas = () => {
    return database.parkAreas.map(parkAreas =>({...parkAreas}))
}

export const getServices = () => {
    return database.services.map(services =>({...services}))
}

export const getParkAreaServices = () => {
    return database.parkAreaServices.map(parkAreaServices => ({...parkAreaServices}))
}