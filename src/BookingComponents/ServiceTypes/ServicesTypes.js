import { useSelector } from "react-redux";
import dataServices from "../../data/dataServices";
import ServiceType from "./ServiceType";
import { getSelectedCategory } from "../../redux/servicesSlice";

const ServiceTypes = () => {
    const selectedCategory = useSelector(getSelectedCategory);
    return (
        <div>
            {dataServices
            .filter(service => {
                if (selectedCategory === "ALL") return true;
                return selectedCategory === service.category;
            })
            .map(service => 
                <ServiceType service = {service}/>
            )}
        </div>
    )
}
export default ServiceTypes;