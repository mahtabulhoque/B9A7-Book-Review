
import "./Navbar";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Recipemenu from "./Components/Recipecart/Recipemenu";
import Sidebar from "./Components/Sidebar";
import { useState } from "react";


function App() {

  const [sidebar, setSidebar]=useState([]);

  const handleCook=(recipe)=>{
    setSidebar([...sidebar,recipe]);
  }
  console.log(sidebar);
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>


      <div className="grid grid-cols-12 my-4">
      <div className="col-span-7">
      <Recipemenu handleCook={handleCook}></Recipemenu>
      </div>
      <div className="col-span-5">
      <Sidebar sidebar={sidebar}></Sidebar>
      </div>
      </div>
    </div>
  );
}

export default App;
