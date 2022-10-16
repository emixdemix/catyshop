import { useState } from "react"
import book from './assets/book.jpeg'
import classes from '../styles/Home.module.css'
import { CardActionArea } from "@material-ui/core"
import { useRouter } from 'next/router'
import { Cart, ItemValue } from "./interfaces"



const Item = (params:any) => {
    const router = useRouter()

    const {button} = params
    const cart = (id:string) => {
        const cart = localStorage.getItem('cart')
        if (cart) {
            const parsed = JSON.parse(cart)
            const items = (parsed as ItemValue)
            if (items[id]) {
                items[id]++
            } else {
                items[id] = 1
            }
            localStorage.setItem('cart', JSON.stringify(items))
        } else {
            const item = {} as ItemValue
            item[id] = 1  
            localStorage.setItem('cart', JSON.stringify(item))
        }
        
        router.push('/cart')
    }

    return (
        <section className={classes.formstyles}>
            <img className={classes.thumbsUp} src={book.src} alt="The new you catalog" />
            <div className={classes.inputbox}>
                The New You catalog
            </div> 
            <div className={classes.inputbox}>
                Price: 20 Euro each + Shipping
            </div> 
            {
                button? 
                <div className={classes.inputbox}>
                    <button className={classes.cta} onClick={() => cart('TNY')}>Buy Now</button>
                </div> 
                :
                null
            }
            
        </section>
    )

}

export default Item