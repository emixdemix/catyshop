import { useState } from "react"
import book from './assets/book.jpg'
import book1 from './assets/book1.jpeg'
import book2 from './assets/book2.jpeg'
import book3 from './assets/book3.jpeg'
import classes from '../styles/Home.module.css'
import { CardActionArea } from "@material-ui/core"
import { useRouter } from 'next/router'
import { Cart, ItemValue, SlideImage } from "./interfaces"
import Slideshow from "./slideshow"

const bookImages:SlideImage[] = [
    {caption: "", url: book.src},
    {caption: "", url: book1.src},
    {caption: "", url: book2.src},
    {caption: "", url: book3.src}
]


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
            <div className={classes.slideStyle}>
             <Slideshow slideImages={bookImages} />
            </div>
            
           
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