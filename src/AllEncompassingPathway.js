import { useNavigate } from "react-router";

function AllEncompassingPathway () {
    const navigate = useNavigate();
    return(
        <div>
            <h1>Pathway 1</h1>
            <button className="back" onClick={() => navigate(-1)}>Go back</button>
        </div>
    )
}
export default AllEncompassingPathway;
