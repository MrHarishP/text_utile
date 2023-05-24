// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import NAVBAR from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
function App() {

  const [mode, setMode] = useState("light"); // whether dark mode is enable or not 

  const [alert , setAlert] = useState(null); // here we create null alert which is showing that there is nothing to show 
  
  const showalert =(message , type)=> {
    setAlert({
      msg : message,
      type :type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () =>{

    if(mode ==="light"){

      setMode("dark");
      
      showalert("dark mode has been enable ", "success");
      document.body.style.background = "#05182c"; // when dark mode is on then the background color will became grey
    }
    else{
      setMode("light");

      showalert("light mode has been enable ", "success");
      document.body.style.background = "white"; // when the light mode is on then the background color will become white
    }
    // toggleMode()
    //console.log("->alert value",alert)
  }

  return (
    <>
      <NAVBAR title="Textutils" mode={mode} toggleMode={toggleMode} AboutText="About Us" />
      {/* {alert?<Alert alert ={alert}/>:''} */}
      <Alert alert ={alert}/>
      {/* <NAVBAR/> */}
      <div className="container my-3"mode ={mode}>
       {/* <About/> */}
       <TextForm showalert={showalert} heading="Enter Text Here For Analyze below" mode={mode}/>
      </div>
    </>
  );
}

export default App;
