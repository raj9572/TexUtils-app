import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
function App() {
 const [mode,setMode] = useState('light')
 const [text,setText] = useState(null)

const showAlert=(message,type)=>{
  setText({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setText(null)
  }, 1500);
}

   
  const  toggleMode=()=>{
       if(mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor='black'
        document.body.style.color='white'
        showAlert("dark mode is enable","success")

       }
       else{
        setMode('light')
        document.body.style.backgroundColor='white'
        document.body.style.color='black'
        showAlert("dark mode is desable","success")

       }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" about="AboutText" mode={mode} toggleMode={toggleMode}/>
      <Alert text = {text}/>
      <div className="container my-4">
      <Routes>
          <Route element={<About/> } path="/about"/>
          <Route element={<TextForm mode={mode} showAlert={showAlert}/> } path="/"/>
     </Routes>
        {/* <About mode={mode}/> */}
      
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
