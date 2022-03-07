import { RECEIVE_CURRENT_GUESS } from "../actions/game_actions";

const initialState ={
    guessedWord: ""
}

export default function (state = initialState, action){
    switch (action.type){
        case RECEIVE_CURRENT_GUESS:
            debugger
            return{
                ...state,
                guessedWord: action.guess
            };
            default:
                return state;
    }
}