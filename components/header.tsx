import { useState } from "react"
import { makeStyles, StylesContext } from '@material-ui/styles';
import Item from "./item";
import classes from '../styles/Home.module.css'

const Header = () => {
    return (
        <section className={classes.formstyles}>
            <h1>Caty Forden - The New You</h1>  
            <Item button={true}/>      
        </section>
    )

}

export default Header