import { RECEIVE_CURRENT_GUESS } from "../actions/game_actions";

const initialState ={
    isCorrect: false
}

export default function (state = initialState, action){
    switch (action.type){
        case RECEIVE_CURRENT_GUESS:
            
            return{
                ...state,
                isCorrect: action.guess
            };
            default:
                return state;
    }
}