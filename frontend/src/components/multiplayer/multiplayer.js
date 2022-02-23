import React from 'react';
import { Link } from 'react-router-dom';

class MultiplayerPage extends React.Component{

    render(){
        return(
            <div>
                <h1>Coming Soon!</h1>
                <Link to={'/main'}>Back to main</Link>
            </div>
        )
    }

}

export default MultiplayerPage;