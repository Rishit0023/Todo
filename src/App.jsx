import { useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState("")
  const[num, setNum] = useState(1);
  const [updateArr, setUpdateArr] = useState([]);
  const [editArr, setEditArr] = useState([]);


  const Change = (value) => {
    setData(value);
  };

  const Add = () => {
    
    if(data == "")
       alert("Please add items!");

      else if(editArr == ""){
       const obj = {id: num, name: data}
       const Arr = [...updateArr, obj]
       setUpdateArr(Arr);
       setNum(num + 1);
       setData("");
      }

    else {
      let con = updateArr.map((e) => {
        if(e.id == editArr.id)
          e.name = data;
      })
      setUpdateArr(con);
      setEditArr("");
      setNum(num + 1);
      setData("");
    }

  };

  const Del = () => {
    if (updateArr != "")
      setUpdateArr([]);
    else 
      alert("No Data found!");
  }

  const EditData = () => {

  }

  const DeleteData = (id) =>{
    let ind = updateArr.indexOf((x) => { x.id == id })
    let rem = updateArr.splice(1,1);
    setUpdateArr(rem);
  }
  

  return (
    <>
      <h1>Todo</h1>

      <input type="text" className = "input" placeholder='Write here...' style = {{height: "38px", width: "330px", fontSize: "20px"}}
      
      onInput = {(event) => Change(event.target.value)} value={data}/> &nbsp;


      <button className="btn" style={{backgroundColor: "blue", color: "white"}} onClick={() => Add()}>Add</button> &nbsp;
      <button className="btn" style={{backgroundColor: "blue", color: "white"}} onClick={() => Del()}>Delete</button><br/><br/>
      {
        updateArr.map((e)=>{
          return(
            <div>
              {e.name} &nbsp;
              <button className = "edit" onClick= {()=> EditData(e.id)}>edit</button> &nbsp;
              <button className = "del"  onClick= {()=> DeleteData(e.id)}>delete</button>
            </div>
          )
        })
      }
      
    </>
  )
}

export default App
