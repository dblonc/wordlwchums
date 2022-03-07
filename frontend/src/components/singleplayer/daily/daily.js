import { Axios } from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
class DailyPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            guessedWord: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // checkDailyWord(){
    //     Axios.post("http://localhost3000/daily", {user: "", text: ""}).then((res)=>{

    //     })
    // }

    handleChange(e){
        this.setState({
            guessedWord: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createGuess(this.state.guessedWord)
    }

    render(){
        return(
            <div>
                <h1>Daily Puzzle</h1>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange} type="text"></input> <button type="submit" >Submit</button>
                    </form>
                </div>

                <div>
                    <Link to={'/main'}>Back to main</Link>
                </div>
            </div>
        )
    }
}

export default DailyPage;