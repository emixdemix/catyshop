import { mergeClasses } from '@material-ui/styles';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { SlideImage } from './interfaces';
import classes from '../styles/Home.module.css'


const Slideshow = (params:any) => {
    const {slideImages} = params

    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage:SlideImage, index:number)=> {
          return (
            <div className={classes.eachSlideEffect} key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          )})} 
        </Slide>
      </div>
    )
}

export default Slideshow