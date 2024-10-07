import dataServices from "../../data/dataServices";
import ServiceType from "./ServiceType";

const ServiceTypes = () => {
    return (
        <div>
            {dataServices.map (service => 
                <ServiceType service = {service}/>
            )}
        </div>
    )
}
export default ServiceTypes;