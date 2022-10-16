import { makeStyles } from "@material-ui/styles"
import classes from '../styles/Home.module.css'

const CountrySelection = (params:any) => {
    const { whenSelected, selected  } = params

    return (
        <div className={classes.inputbox} >
            <label htmlFor="country">Country</label>      
            <select id="country" name="country" className={classes.selectstyles} onChange={whenSelected}>
                <option value="Albania">Albania</option>
                <option value="Argentina">Argentina</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Belgium">Belgium</option>
                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                <option value="Brazil">Brazil</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Canada">Canada</option>
                <option value="Croatia">Croatia</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="Ireland">Ireland</option>
                <option value="Italy">Italy</option>
                <option value="Japan">Japan</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Mexico">Mexico</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Norway">Norway</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Romania">Romania</option>
                <option value="Russian Federation">Russian Federation</option>
                <option value="San Marino">San Marino</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Spain">Spain</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
            </select>
        </div>
    )
}
export default CountrySelection