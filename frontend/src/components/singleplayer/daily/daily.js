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
            guessNumber: 0,
            isDisabled: false,
            splitWord: [],
            flag: true
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleGuesses = this.handleGuesses.bind(this)
        this.listGuesses = this.listGuesses.bind(this)
        this.winState = this.winState.bind(this)
        this.letterBackground = this.letterBackground.bind(this)
    }

    handleChange(e){
        this.setState({
            guessedWord: e.target.value
        })
    }

    handleSubmit(e){
        debugger
        e.preventDefault();
        
        this.props.createGuess(this.state.guessedWord)
        this.state.usedWords.push(this.state.guessedWord)
        let split = this.state.guessedWord.toUpperCase().split()
        this.setState({
            guessNumber: this.state.guessNumber + 1,
            splitWord: this.state.guessedWord.toUpperCase().split(""),
            guessedWord: ""
            
        })
    }

    handleGuesses(){
        
        if(this.state.guessNumber < 6){
            return(
            <form onSubmit={this.handleSubmit}>
                    <input value={this.state.guessedWord} disabled={(this.state.isDisabled) ? "disabled" : ""} onChange={this.handleChange} type="text" ></input> <button disabled={(this.state.isDisabled) ? "disabled" : ""} type="submit" >Submit</button>
            </form>)
        }else{
            return(
                <h1>YOU LOSE!</h1>
            )
        }
    }


    letterBackground(word){
       let split = word.split("")
       console.log(split)
    //    return split.map((letter, index) => {
          
    //            <p className = "let1">{letter}</p>

          
    //    });

        return(
            <div>{word.toUpperCase()}</div>
        )
                
            

    }

    listGuesses(){
        
        return this.state.usedWords.map((word, index)=>
            <ul key ={index}>
               
                <li className="guesslist">{this.letterBackground(word)}</li>
              
            </ul>)
    }

    winState(){
        if(this.state.isCorrect === true){
         
            return(
                <h1>YOU WIN</h1>
            )
        }
    }

    componentDidUpdate(prevProps){
        // let flag = true
        // if(prevProps.isCorrect !== this.props.isCorrect && this.state.guessNumber !== 0){
        //     this.setState({
        //         isCorrect: true,
        //         isDisabled: true
        //     })
         
        // }
        if(this.state.flag === true){
            if(prevProps.isCorrect.includes("black")||prevProps.isCorrect.includes("yellow")){
                return 
            }else{
                this.setState({
                    isCorrect: true,
                    isDisabled: true,
                    flag: false
                })
            }
        }else{
            return
        }   
       
    }

    render(){
        return(
            <div>
                <h1>Daily Puzzle</h1>
                <div>
                    {this.listGuesses()}
                    {this.handleGuesses()}
                    {this.winState()}
                </div>

                <div>
                    <Link to={'/main'}>Back to main</Link>
                </div>
            </div>
        )
    }
}

export default DailyPage;