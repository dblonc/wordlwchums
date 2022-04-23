import React from 'react';
import './board.css'
class Board extends React.Component {
    constructor(props){
        super(props);
     this.printBoard = this.printBoard.bind(this)
    }

    printBoard(){
        let times = 5 - this.props.guessNumber;
          
        // return(
        //     <div className="cur-guess" id="guess-word2">
        //         <div className="guess-tile">  </div>
        //         <div className="guess-tile">  </div>
        //         <div className="guess-tile">  </div>
        //         <div className="guess-tile">  </div>
        //         <div className="guess-tile">  </div>
        //     </div>
        // )
        return( [...Array(times)].map((e, i) => <div className="cur-guess" id="guess-word2">
            <div className="guess-tile">  </div>
            <div className="guess-tile">  </div>
            <div className="guess-tile">  </div>
            <div className="guess-tile">  </div>
            <div className="guess-tile">  </div>
        </div>))
    }

    render(){
        return(
            <div className="board">
                <div className="cur-guess" id="guess-word1">
                    <div className="guess-tile">{this.props.guessedWord[0]}  </div>
                    <div className="guess-tile">{this.props.guessedWord[1]}  </div>
                    <div className="guess-tile">{this.props.guessedWord[2]}  </div>
                    <div className="guess-tile">{this.props.guessedWord[3]}  </div>
                    <div className="guess-tile">{this.props.guessedWord[4]}  </div>
                </div>
                {this.printBoard()}

                {/* <div className="cur-guess" id="guess-word2">
                    <div className="guess-tile">  </div>
                    <div className="guess-tile">  </div>
                    <div className="guess-tile">  </div>
                    <div className="guess-tile">  </div>
                    <div className="guess-tile">  </div>
                </div>
                <div className="cur-guess" id="guess-word3">
                    <div className="guess-tile">  </div>
                    <div className="guess-tile">  </div>
                    <div className="guess-tile">  </div>
                    <div className="guess-tile">  </div>
                    <div className="guess-tile">  </div>
                </div>
                <div className="cur-guess" id="guess-word4">
                    <div className="guess-tile">  </div>
                    <div className="guess-tile">  </div>
                    <div className="guess-tile">  </div>
                    <div className="guess-tile">  </div>
                    <div className="guess-tile">  </div>
                </div>
                <div className="cur-guess" id="guess-word5">
                    <div className="guess-tile">  </div>
                    <div className="guess-tile">  </div>
                    <div className="guess-tile">  </div>
                    <div className="guess-tile">  </div>
                    <div className="guess-tile">  </div>
                </div> */}
            </div>
        )
    }
}

export default Board;