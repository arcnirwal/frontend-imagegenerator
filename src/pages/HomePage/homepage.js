import Navbar from "../common/Navbar/navbar";
import "./homepage.css";

const HomePage = (props) => {
    return(
        <div> 
            <Navbar page="home"/>
            <div className="homepage-main-container">
            Hello! Thank you for using the AI image generator app. How can I assist you today? 
            </div>
        </div>
    )
}

export default HomePage;