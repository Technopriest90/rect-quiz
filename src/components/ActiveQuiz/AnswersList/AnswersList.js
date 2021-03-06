import React from 'react';
import classes from './AnswersList.css';
import AnswerItem from './AnswerItem/AnswerItem';

const AnswersList = props => (
    <ul className={classes.AnswersList}>
        {props.answers.map((answer, index) => {
            return <AnswerItem
                answer={answer}
                key={index}
                state={props.state ? props.state[answer.id] : null}
                onClickAnswer={props.onClickAnswer}/>
        })}
    </ul>
);

export default AnswersList;