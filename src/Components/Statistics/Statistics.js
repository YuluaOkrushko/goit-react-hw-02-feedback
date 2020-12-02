import React from "react";
import PropTypes from 'prop-types';
import styles from "./Statisticrs.module.css"

const Statistics = ({good, neutral, bad, total}) => {
    return(
        <>
            <ul className={styles.list}>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
            </ul>
            <p className={styles.total}>Total: {total}</p>
            <p className={styles.feedback}>Positive feedback: {Math.round((good / total) * 100)}%</p>
        </>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
}

export default Statistics;