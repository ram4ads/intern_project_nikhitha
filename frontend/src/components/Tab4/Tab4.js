import React from 'react';
import Webcam from 'react-webcam';
import { useRef,useContext ,useState} from 'react';
import { TabContext } from '../Form/Form';

const Tab4=()=>{
    const webCamRef = useRef(null);
    const {handleNextTab,changeHandler,tab1Data,setTab1Data}=useContext(TabContext);
    const [capture, setCapture]=useState(null);
    const [validateCapture,setValidateCapture]=useState(true);
    const [selectedSize, setSelectedSize] = useState('default'); // State to store the selected size
   
    const handleCapture=()=>{
        const imageUrl=webCamRef.current.getScreenshot();
        setCapture(imageUrl);
        setValidateCapture(false);
        changeHandler({target: {name: "image",value:imageUrl}})
        setTab1Data({ ...tab1Data, image: imageUrl});
        console.log(imageUrl);
    }
    const handleReCapture=()=>{
        setValidateCapture(true);
        setCapture(null);
        if (webCamRef.current) {
      webCamRef.current.clear();
    }
    }
    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
      };
    
      // Helper function to get the width based on the selected size
      const getWidthForSize = () => {
        switch (selectedSize) {
          case 'small':
            return 320;
          case 'medium':
            return 640;
          case 'large':
            return 960;
          default:
            return 640; // Default width if no size is selected
        }
      };
      const getHeightForSize = () => {
        const width = getWidthForSize();
        switch (selectedSize) {
          case 'small':
            return Math.round((width * 3) / 4); // 4:3 aspect ratio
          case 'medium':
            return Math.round((width * 9) / 16); // 16:9 aspect ratio
          case 'large':
            return Math.round((width * 2) / 3); // 2:3 aspect ratio
          default:
            return Math.round((width * 9) / 16); // Default height if no size is selected (16:9 aspect ratio)
        }
      };
    return(
            <TabContext.Consumer>
                {value=>(
                <div>
                    {capture? ( <img src={capture} alt='Captured' height={250} width={300}/>):
                    (
                        validateCapture&&(
                            <div>
                                <Webcam audio={false} ref={webCamRef} height={getHeightForSize()} width={getWidthForSize()}/>
                            </div>
                        )
                    )}
            <center>
            {capture?
            (<button className='button' onClick={handleReCapture} >Recapture</button>):
            (<button className='button' onClick={handleCapture}>Capture</button>)
            
            }
            <select value={selectedSize} onChange={handleSizeChange}>
              <option value='default'>Default</option>
              <option value='small'>Small</option>
              <option value='medium'>Medium</option>
              <option value='large'>Large</option>
            </select>
            <button className='button' onClick={handleNextTab}>Next</button>
            </center>
            </div>)
                }
            </TabContext.Consumer>
        
    )
}
export default Tab4;