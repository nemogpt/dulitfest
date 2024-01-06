import React from 'react'
import About from '../Components/About';
import Landing from '../Components/Landing';
import Discover from "../Components/Discover"
import "./Home.css"
function Home(){
    return (
        <div>
        <Landing/> {/*Landing photo */}
        <About/>{/*About festival 2-3 lines */}
        <Discover/>
        </div>

    );
}
export default Home;