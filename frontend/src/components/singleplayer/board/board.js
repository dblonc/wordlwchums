import React from 'react';
import './board.css'
class Board extends React.Component {
    constructor(props){
        super(props);
     this.printBoard = this.printBoard.bind(this)
    }

    printBoard(){
        let times = 6 - this.props.guessNumber;

        if(times === 0){
            return null
        }else{

        return( [...Array(times -1)].map((e, i) => <div className="cur-guess" key={i} id="guess-word2">
            <div className="guess-tile">  </div>
            <div className="guess-tile">  </div>
            <div className="guess-tile">  </div>
            <div className="guess-tile">  </div>
            <div className="guess-tile">  </div>
        </div>))
        }
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
            </div>
        )
    }
}

export default Board;