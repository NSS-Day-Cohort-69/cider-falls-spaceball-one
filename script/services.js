/* function to display services 
functionName: displayServices
add event listener to display which parks have a specific service */

import {getServices} from "./database.js"
import {getParkAreaServices} from "./database.js"

const servicesList=getServices();
const parkAreaServicesList=getParkAreaServices();

const displayServices=(parkAreaId)=>{
    let serviceHTML="<ul>"
    
    for(const parkService of parkAreaServicesList){
        if(parkService.parkAreaId===parkAreaId){
            let service=servicesList.find((service)=>service.id===parkService.servicesId)
            serviceHTML+=`<li>${service.name}</li>`
        }
    }

    serviceHTML+="</ul>"
    return serviceHTML
}