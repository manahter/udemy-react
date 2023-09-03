import { useNavigate } from "react-router-dom";

function Mission() {
    const navigate = useNavigate();
    return (
        <>
        <div>Mission</div>
        {/* <button onClick={() => navigate('/')}>Geriye Git</button> */}
        {/* -1 -> Bir önceki sayfaya git demektir */}
        <button onClick={() => navigate(-1)}>Geriye Git</button>
        </>);
}

export default Mission;