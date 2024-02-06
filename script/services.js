/* function to display services 
functionName: displayServices
add event listener to display which parks have a specific service */

import {getServices} from "./database.js"
import {getParkAreaServices} from "./database.js"
import { getParkAreas } from "./database.js";


const servicesList=getServices();
const parkAreaServicesList=getParkAreaServices();
const parkAreaList=getParkAreas();

export const displayServices=(parkAreaId)=>{
    let serviceHTML="<ul>"
    
    for(const parkService of parkAreaServicesList){
        if(parkService.parkAreaId===parkAreaId){
            let service=servicesList.find((service)=>service.id===parkService.serviceId)
            serviceHTML+=`<li data-type="service" data-serviceid="${service.id}" data-servicename="${service.name}">${service.name}</li>`
        }
    }

    serviceHTML+="</ul>"
    return serviceHTML
}

document.addEventListener("click",(serviceClickEvent)=>{
    const serviceElement=serviceClickEvent.target;
    if(serviceElement.dataset.type==="service"){
        let parkAreaNames=""
        for(const parkAreaWithService of parkAreaServicesList)
        {
            if(parkAreaWithService.serviceId===parseInt(serviceElement.dataset.serviceid)){ 
                for(const parkArea of parkAreaList){
                    if(parkArea.id===parkAreaWithService.parkAreaId){
                        parkAreaNames+=`\n${parkArea.name}`
                    }
                }
            }
        }
       
        window.alert(`${serviceElement.dataset.servicename} is available in : ${parkAreaNames}`)
    }
})