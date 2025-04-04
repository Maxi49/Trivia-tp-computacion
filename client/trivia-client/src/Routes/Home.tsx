import { Link } from "react-router-dom";

export const Home = () => {
    return (<>
        <h1>Click en el boton play para jugar</h1>
        <Link to="/Categories"><button>Play</button></Link>

    </>)
};
export default Home