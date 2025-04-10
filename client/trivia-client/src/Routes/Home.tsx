import { Link } from "react-router-dom";
import "../Home.css"

export const Home = () => {
    return (
        <div className="home-container">

            <h1 className="title">EL QUIZITO</h1>
            <div className="face-and-button">
                <div className="quizito-face">
                    <div className="hat"></div>
                    <div className="mouth"></div>
                </div>

                <Link to="/Categories">
                    <button className="play-button">PLAY</button>
                </Link>
            </div>
        </div>
    );
};
export default Home