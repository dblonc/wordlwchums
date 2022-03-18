import { RECEIVE_CURRENT_GUESS } from "../actions/game_actions";

const initialState ={
    isCorrect: ["black", "black", "black", "black", "black"]
}

export default function (state = initialState, action){
    switch (action.type){
        case RECEIVE_CURRENT_GUESS:
            debugger
            return{
                ...state,
                isCorrect: action.guess
            };
            default:
                return state;
    }
}