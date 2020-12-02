import React from "react";
import PropTypes from 'prop-types';
import styles from "./Section.module.css"

const Section = ({title, children}) => {
    return (
    <div className={styles.wrapper}>
        <section className={styles.section}>
            <h2 className={styles.title}>{title}</h2>
            {children}
        </section>
    </div>)
    }


Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default Section;