import { Axios } from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
class DailyPage extends React.Component{

    checkDailyWord(){
        Axios.post("http://localhost3000/daily", {user: "", text: ""}).then((res)=>{

        })
    }

    render(){
        return(
            <div>
                <h1>Daily Puzzle</h1>
                <div>
                    <input type="text"></input> <button>Submit</button>
                </div>

                <div>
                    <Link to={'/main'}>Back to main</Link>
                </div>
            </div>
        )
    }
}

export default DailyPage;