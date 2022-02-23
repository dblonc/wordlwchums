import React from 'react';
import { Link } from 'react-router-dom';
class DailyPage extends React.Component{

    render(){
        return(
            <div>
                <h1>Daily Puzzle</h1>

                <Link to={'/main'}>Back to main</Link>

            </div>
        )
    }
}

export default DailyPage;