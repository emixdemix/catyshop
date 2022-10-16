import { useState } from "react"
import { makeStyles, StylesContext } from '@material-ui/styles';
import Item from "./item";
import classes from '../styles/Home.module.css'

const Review = (params:any) => {
    const {shipping, fields} = params

    const goPay = (shipping:any, copies:number) => {
        if (window) {
            if(shipping === 'europe') {
                if (copies === 1) {
                    window.open('https://pay.sumup.io/b2c/XZY1KYBZNR', '_blank')
                } else {
                    window.open('https://pay.sumup.io/b2c/X1XJE0EV3W', '_blank')
                }
            } else {
                if (copies === 1) {
                    window.open('https://pay.sumup.io/b2c/XGILP0805O', '_blank')
                } else {
                    window.open('https://pay.sumup.io/b2c/XVZE967K5R', '_blank')
                }
            }
        } 
    }

    return (
        <section className={classes.formstyles}>
            <Item button={false} />
            <div className={classes.summary}>
                The New You book will be shipped to:
            </div>
            <div className={classes.summary}>
                <div>{fields['name']}</div>
                <div>{fields['address']}, {fields['city']}</div>
                <div>{fields['country']}</div>
            </div>
            <div className={classes.inputbox}>
               <button className={classes.button} onClick={() => goPay(shipping, 1)}>I Want One Copy</button>
               <button className={classes.button} onClick={() => goPay(shipping, 2)}>I Want Two Copies</button>
            </div>
        </section>
    )

}

export default Review