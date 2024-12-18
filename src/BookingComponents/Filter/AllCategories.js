import Filter from "./Filter";
const AllCategories = () => {
    return (
        <div>
            <h3>We are thrilled to assist you: Pick your service now!</h3>
            {["MAIN PRODUCTS", "TAILORED CONSULTATIONS", "ALL"].map((category, index) => 
            <Filter key = {index} category ={category}/>
            )}
        </div>
    )
}
export default AllCategories;