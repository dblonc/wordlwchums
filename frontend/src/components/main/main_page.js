import React from 'react';
import { Link } from 'react-router-dom';

class MainPage extends React.Component {

    render() {
        return (
            <div>
                <h1>A Wordle Clone</h1>
               
               <Link to="/daily"><button>
                    Daily
                </button></Link>

                <Link to="/multiplayer"><button>
                    Multiplayer
                </button></Link>


                <footer>
                    Copyright &copy; 2022 Chirper
                </footer>
            </div>
        );
    }
}

export default MainPage;