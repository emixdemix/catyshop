import { useEffect, useState } from "react"
import CountrySelection from "./countries"
import classes from '../styles/Home.module.css'
import { setDefaultResultOrder } from "dns"
import { useRouter } from "next/router"
import { FieldValue } from "./interfaces"

const FormInfo = () => {
    const [field, setField] = useState({} as FieldValue)
    const [error, setError] = useState(false)
    const router = useRouter()
    
    const setValue = (e: any) => {
        console.log(e.target.name)
        let f = {...field}
        f[e.target.name] = e.target.value
        setField(f)
        localStorage.setItem('personalinfo', JSON.stringify(f))
    }

    const validateEmail = (mail:string) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true)
        }
        
        return (false)
    }


    const validate = () => {
        if (!validateEmail(field['email'])) {
            setError(true) 
            return 
        }

        if (!field['name'] || !field['address'] || !field['city'] || !field['country']) {
            setError(true) 
            return
        }

        router.push('/pay')

    }

    useEffect(() => {
        const f = localStorage.getItem('personalinfo')
        if (f) {
            setField(JSON.parse(f))
        }
    }, [])
    return (
        <section className={classes.formstyles}>
            <div className={classes.inputbox} >
                <label htmlFor="email">Email</label>
                <input defaultValue={field.email} type="text" name="email" className={classes.inputstyle} onChange={(e) => setValue(e)}/>
            </div>

            <div className={classes.inputbox} >
                <label htmlFor="name">Full Name</label>
                <input defaultValue={field.name} type="text" name="name" className={classes.inputstyle} onChange={(e) => setValue(e)}/>
            </div>

            <div className={classes.inputbox} >
                <label htmlFor="address">Address</label>
                <input defaultValue={field.address} type="text" name="address" className={classes.inputstyle} onChange={(e) => setValue(e)}/>
            </div>

            <div className={classes.inputbox} >
                <label htmlFor="city">City & ZIP</label>
                <input defaultValue={field.city}  type="text" name="city" className={classes.inputstyle} onChange={(e) => setValue(e)}/>
            </div>

            <CountrySelection whenSelected={setValue} selected={field.country }/>

            <button className={classes.button} onClick={validate}>Submit</button>
        </section>
    )

}

export default FormInfo