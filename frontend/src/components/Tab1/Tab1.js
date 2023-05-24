import  React ,{ useContext } from 'react';
import {TabContext} from '../Form/Form';
import './Tab1.css';
export default function Tab1() {
    const { changeHandler,tab1Data,handleNextTab}=useContext(TabContext);
    const {firstname,email,password,cpassword}=tab1Data
    const minDate = `${1923}-01-01`;
    const maxDate = `${2023}-05-16`;
    let isValid=true;
    // const validateForm=()=>{
        
    //     let errorMsg=' ';
    //     if (firstname.trim().length === 0) {
    //         isValid = false;
    //         errorMsg = 'First Name is required.';
    //       } else if (email.trim().length === 0) {
    //         isValid = false;
    //         errorMsg = 'Email is required.';
    //       } else if (password.trim().length === 0) {
    //         isValid = false;
    //         errorMsg = 'Password is required.';
    //       } else if (password !== cpassword) {
    //         isValid = false;
    //         errorMsg = 'Passwords do not match.';
    //       }
    //       return { isValid, errorMsg };
    // }
    return (
        <TabContext.Consumer>
            {value =>
                <div>   
                    <form >
                        <div>
                            {/* <label className="label">First Name: </label> */}
                            <input className='input' type="text" onChange={changeHandler} name="firstname" placeholder="First name" value={tab1Data.firstname} />
                        </div>
                        <div>
                            {/* <label className="label">Last Name: </label> */}
                            <input className='input' type="text" onChange={changeHandler} name="lastname" placeholder="Last name"  value={tab1Data.lastname} />
                        </div>
                        <div>
                            {/* <label className="label">DOB: </label> */}
                            <input className='input' type="date" onChange={changeHandler} name="dob" min={minDate} max={maxDate}  value={tab1Data.date} />
                        </div>
                        <div>
                            {/* <label className="label">Phone No: </label> */}
                            <input className='input' type="tel" onChange={changeHandler} name="phone" placeholder="Phone number"  value={tab1Data.phone} />
                        </div>
                        <div>
                            {/* <label className="label margin-class">Email: </label> */}
                            <input className='input' type="email" onChange={changeHandler} name="email" placeholder="Email"  value={tab1Data.email} />
                        </div>
                        <div>
                            <div>
                                {/* <label className="label">Password: </label> */}
                                <input className='input' type="password" onChange={changeHandler} name="password" placeholder="Password"  value={tab1Data.password} />
                            </div>
                            <div>
                                {/* <label className="label">Confirm Password: </label> */}
                                <input className='input' type="password" name="cpassword" onChange={changeHandler} placeholder="Confirm password"   value={tab1Data.cpassword}/>
                            </div>
                        </div>
                        {isValid ? null : <p>{tab1Data.errorMsg}</p>}
                        <button className="button" onClick={handleNextTab}>Next</button>
                    </form>
                    {/* <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        onClick={() => handleTabChange(1)}
                    /> */}
                </div>}
        </TabContext.Consumer>
    )
}