import React, { createContext, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import './Form.css';
import Tab1 from "../Tab1/Tab1";
import Tab2 from "../Tab2/Tab2";
import Tab3 from '../Tab3/Tab3';
import Tab4 from '../Tab4/Tab4';
import Tab5 from '../Tab5/Tab5';

export const TabContext = createContext();

const Form = () => {
  const [tab1Data, setTab1Data] = useState({
    firstname: '',
    lastname: '',
    dob: '',
    phone: '',
    email: '',
    password: '',
    cpassword: '',
    photo: null,
    signature: null,
    image:''
  });
  // let formIsValid=true;
  const [activeTab, setActiveTab] = useState(0); // State to keep track of active tab index

  const handleNextTab = () => {
    setActiveTab(prevTab => prevTab + 1); // Move to the next tab by incrementing the activeTab state
  };
  
  const changeHandler = e => {
    setTab1Data({ ...tab1Data, [e.target.name]: e.target.value });
  };

  return (
    <div className="tabs-container">
      <div className="row-container">
        <img className="image" alt="" src="https://media.istockphoto.com/id/1419386449/photo/3d-visualization-of-the-authorization-menu-on-a-smartphone.jpg?s=1024x1024&w=is&k=20&c=H2738AKL5N7Vqn1A0bBwmYDjqI0O-dg5-G7E_2m7h7o=" />
        <h1 className="heading">User Registration Form</h1>
      </div>
      <TabContext.Provider value={{ tab1Data, setTab1Data, changeHandler ,handleNextTab}}>
        <Tabs className="Tabs" selectedIndex={activeTab} onSelect={index => setActiveTab(index)}>
          <TabList>
            <Tab>Registration Form</Tab>
            <Tab>Upload Photo</Tab>
            <Tab>Signature</Tab>
            <Tab>Camera</Tab>
            <Tab>Captcha</Tab>
          </TabList>
          <TabPanel>
            <Tab1 />
          </TabPanel>
          <TabPanel>
            <Tab2 />
          </TabPanel>
          <TabPanel>
            <Tab3 />
          </TabPanel>
          <TabPanel>
            <Tab4 />
          </TabPanel>
          <TabPanel>
            <Tab5 />
          </TabPanel>
        </Tabs>
      </TabContext.Provider>
    </div>
  );
};

export default Form;









