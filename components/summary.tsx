import { useState } from "react"
import { makeStyles, StylesContext } from '@material-ui/styles';
import Item from "./item";
import classes from '../styles/Home.module.css'

const Summary = () => {
    return (
        <section className={classes.formstyles}>
            <Item button={false} />
            <div className={classes.summary}>
                Please fill out the form with all your information
            </div>
        </section>
    )

}

export default Summary