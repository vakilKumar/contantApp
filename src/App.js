import { useState } from "react";
import Add from "./component/Add";
import User from './component/User'

function App() {
  let [name, setName] = useState("");
  let[lname, setLname] = useState("");
  let [mobile, setMobile] = useState("");

  let [data, setData] = useState([]); 

   console.log(data);

  return (
    <div className="App">
      <Add  name={name}  setName={setName} lname={lname} setLname={setLname}  mobile={mobile}  setMobile={setMobile}
       data={data} setData={setData}/>
      {
        
      
      data.map((ele, key )=>{
        
        return  <User key={key} idx= {key} name={ele.name} setData={setData} lname={ele.lname} mobile={ele.mobile} data={data}/>
      }) 
      
      }
    </div>
  );
}

export default App;
