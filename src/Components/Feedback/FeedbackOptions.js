import React from "react";
import styles from "./FeedbackOptions.module.css"

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return(
        <>
         {Object.keys(options).map((item)=> (
             <button className={styles.button} type="button" name={item}
             onClick={onLeaveFeedback}
             key={item}>{item}</button>
         ))}
        </>
    )

}

export default FeedbackOptions;