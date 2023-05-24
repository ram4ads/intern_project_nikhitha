import React, { useRef,useContext } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import axios from 'axios';
import {TabContext} from '../Form/Form';
import './Tab3.css'
const Tab3 = () => {
    const signatureRef = useRef();
    const {tab1Data,setTab1Data,changeHandler, handleNextTab}=useContext(TabContext);
        const handleClear = () => {
            signatureRef.current.clear();
        };
    // const submitHandler = e => {
    //     e.preventDefault();
    //     // axios.post('http://localhost:5000/data', tab1Data).then(
    //     //     res => { alert(res.data) }
    //     // );
    //     const signatureDataURL = signatureRef.current.toDataURL()
    //     // setTab3Data(signatureDataURL)
    //      console.log(signatureDataURL);
    //     console.log(tab1Data);
    // }
    // const handleSave=(e)=>{
    //     e.preventDefault();
    //     const signatureDataURL = signatureRef.current.toDataURL()
    //     setSignatureData(signatureDataURL)
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(tab1Data)
        // const { isValid, errorMsg } = validateForm();
        // if (isValid) {
        // handleNextTab();
        // } else {
        // // Set the error message in tab1Data
        // changeHandler({ target: { name: 'errorMsg', value: errorMsg } });
        // }
        const signatureDataURL = signatureRef.current.toDataURL()
        console.log("sign: ",signatureDataURL)
        changeHandler({target: {name: "signature",value:signatureDataURL}})

        setTab1Data({ ...tab1Data, signature: signatureDataURL});
        
            axios.post('http://localhost:5000/data',tab1Data).then(
                res => { 
                    alert(res.data);
                 }
            ); 
    };
    const canvasStyles = {
        background: "white",
        borderRadius: '10px',
    }
    return (
        <TabContext.Consumer>
            {value=>    
        <div className='signatureContainer'>
            <SignatureCanvas ref={signatureRef} canvasProps={{ width: 500, height: 200, style: canvasStyles }} />
            <div className="buttoncontainer">
                <button onClick={handleClear} className='btn'>Clear</button> 
                <button className="btn" onClick={handleSubmit}>Submit</button>
                <button className="btn" onClick={handleNextTab}>Next</button> 
            </div>
        </div>
}
        </TabContext.Consumer>
    );
};

export default Tab3;