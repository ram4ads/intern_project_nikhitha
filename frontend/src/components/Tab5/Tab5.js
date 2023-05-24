import React,{useRef} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Tab5=()=>{
    const recaptchaRef=useRef(null)
    const handleCaptcha=()=>{
        const recaptchValue= recaptchaRef.current.getValue();
        console.log(recaptchValue)
    }
    return(
        <div>
            
            <center>
            <ReCAPTCHA 
            sitekey='6LdJpx8mAAAAAKoLJztngFTpIjA8CAHuzD4P5S7Z'
            ref={recaptchaRef} onChange={handleCaptcha}/>
            <button className='button' type='submit'>submit</button>
            </center>
        </div>
    )
}
export default Tab5;