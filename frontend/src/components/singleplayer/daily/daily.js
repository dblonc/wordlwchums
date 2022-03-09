import { Axios } from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
class DailyPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            guessedWord: "",
            usedWords: [],
            isCorrect: false,
            guessNumber: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleGuesses = this.handleGuesses.bind(this)
    }

    handleChange(e){
        this.setState({
            guessedWord: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createGuess(this.state.guessedWord)
        this.state.usedWords.push(this.state.guessedWord)
        this.setState({
            guessNumber: this.state.guessNumber + 1
        })
    }

    handleGuesses(){
        if(this.state.guessNumber < 7){
            return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="text"></input> <button type="submit" >Submit</button>
            </form>)
        }else{
            return(
                <h1>YOU LOSE!</h1>
            )
        }
    }



    render(){
        return(
            <div>
                <h1>Daily Puzzle</h1>
                <div>
                    {this.handleGuesses()}
                    {/* <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange} type="text"></input> <button type="submit" >Submit</button>
                    </form> */}
                </div>

                <div>
                    <Link to={'/main'}>Back to main</Link>
                </div>
            </div>
        )
    }
}

export default DailyPage;