import { connect } from 'react-redux';
import DailyPage  from './daily';
import { createGuess } from '../../../actions/game_actions';
import { withRouter } from 'react-router';

const mSTP = (state) => ({
    isCorrect: state.daily.isCorrect
});

const mDTP = (dispatch) => {
    return {
        createGuess: guess => dispatch(createGuess(guess))
    }
};

export default withRouter(connect(mSTP,mDTP)(DailyPage));