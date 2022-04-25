import React from 'react';
import { Link } from 'react-router-dom';
import './main.css'

class MainPage extends React.Component {

    render() {
        return (
            <div className="main-page">
                <h1 className="main-title">A Wordle Clone</h1>
               
               <Link to="/daily"><button className="main-buttons">
                    Daily
                </button></Link>

                <Link to="/multiplayer"><button className="main-buttons">
                    Multiplayer
                </button></Link>


            
            </div>
        );
    }
}

export default MainPage;