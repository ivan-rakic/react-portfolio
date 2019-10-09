import React from 'react';
import { connect } from 'react-redux';
import { showInstructions, hideInstructions } from '../actions/settings';

const Instructions = props => {
    const { displayInstructions, showInstructions, hideInstructions } = props;

    if (displayInstructions) {
        return (
            <div>
                <h3>Instructions</h3>
                <p>Welcome to Evens or Odds. The game goes on like this.</p>
                <p>The deck is shuffled. Then choose: will the next card be even or odd?</p>
                <p>Make a choice on every draw and see how many you got right.</p>
                <p>(Face cards do not count)</p>
                <br />
                <button onClick={hideInstructions}>Show Less</button>
            </div>
        );

    }

    return (
        <div>
            <h3>Instructions</h3>
            <p>Welcome to Evens or Odds. The game goes on like this...</p>
            <button onClick={showInstructions}>Read More</button>
        </div>
    )
}

const mapStateToProps = state => {
    return { displayInstructions: state.settings.displayInstructions };
}

const mapDispatchToProps = dispatch => {
    return {
        showInstructions: () => dispatch(showInstructions()),
        hideInstructions: () => dispatch(hideInstructions())
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Instructions);