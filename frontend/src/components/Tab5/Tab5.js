import React,{useContext, useRef} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { TabContext } from '../Form/Form';

const Tab5=()=>{
    const {handleNextTab}=useContext(TabContext)
    const recaptchaRef=useRef(null)
    const handleCaptcha=()=>{
        const recaptchValue= recaptchaRef.current.getValue();
        console.log(recaptchValue)
    }
    return(
        <TabContext.Consumer>
            {value=> 
        <div>
            
            <center>
            <ReCAPTCHA 
            sitekey='6LdJpx8mAAAAAKoLJztngFTpIjA8CAHuzD4P5S7Z'
            ref={recaptchaRef} onChange={handleCaptcha}/>
            <button className="btn" onClick={handleNextTab}>Next</button> 
            </center>
        </div>}
        </TabContext.Consumer>
    )
}
export default Tab5;