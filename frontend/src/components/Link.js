import React, { useContext } from "react"
import axios from 'axios';
import { ClickContext } from "../App";

export default function Link(){
    const {clickLink, setClickLink}= useContext(ClickContext)
    const {clickLink2,setClickLink2}=useContext(ClickContext)

    
    const handleLink1=()=>{
        setClickLink(clickLink+1)
        const result={
            link:'Link 1',
        }
        console.log(result);
        axios.post('http://localhost:5001/api/data', result)
        .then(res=>{
            console.log('successful')
        }).catch(error=>{
            console.log("error in frontend", error)
        })
    }
    const handleLink2=()=>{
        setClickLink2(clickLink2+1)
        
        const result={
            link:'Link 2',
        }
        console.log(result);
        axios.post('http://localhost:5001/api/data', result)
        .then(res=>{
            console.log('successful')
        }).catch(error=>{
            console.log("error in frontend", error)
        })
    }
    return(
        <ClickContext.Consumer>
            {value=>
            <div>
                <button onClick={handleLink1}>Link1 </button> <br/>
                <button onClick={handleLink2}>Link2 </button>
            </div>
            }
            
        </ClickContext.Consumer>
    )
}
