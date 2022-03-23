import { RECEIVE_CURRENT_GUESS } from "../actions/game_actions";

const initialState ={
    isCorrect: ["grey", "grey", "grey", "grey", "grey"]
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