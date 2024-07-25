import { useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState("")
  const[num, setNum] = useState(1);
  const [updateArr, setUpdateArr] = useState([]);
  const [editArr, setEditArr] = useState([]);
  const [but, setBut] = useState("Add")

//This is used to write data in input field
  const Change = (value) => {
    setData(value);
  };

  //This is the main block used for adding data
  const Add = () => {
    
    if(data == "")                                         //this checks if data is writen or not in input field
       alert("Please add items!");

      else if(editArr == ""){                              // this is used to enter first data 
       const obj = {id: num, name: data}
       const Arr = [...updateArr, obj]
       setUpdateArr(Arr);
       setNum(num + 1);
       setData("");
      }

    else {                                                 // this is used to add more data 
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

  // To delete all the data
  const Del = () => {
    if (updateArr != "")                                      //we use "updateArr" cause we want to check that if data is present or not
      setUpdateArr([]);
    else 
      alert("No Data found!");
  }

  //To edit entered data
  const EditData = (id) => {
      updateArr.map((e) => {                                    //to search in array for the id of which the edit button is used
        if (e.id == id){
          var Edit = e.name;
          setData(Edit);
          setEditArr(e);
          setBut("save");
        }
    })
    
  }

  //To delete only single data
  const DeleteData = (id) =>{
    let ind = updateArr.indexOf((x) => { x.id == id })
    let rem = updateArr.splice(1,1);                            //"Splice" is used to delete or add data on a specific index or position
    setUpdateArr(rem);
  }
  

  return (
    <>
      <h1>Todo</h1>

      <input type="text" className = "input" placeholder='Write here...' style = {{height: "38px", width: "330px", fontSize: "20px"}}
      
      onInput = {(event) => Change(event.target.value)} value={data}/> &nbsp;


      <button className="btn" style={{backgroundColor: "blue", color: "white"}} onClick={() => Add()}>{but}</button> &nbsp;
      <button className="btn" style={{backgroundColor: "blue", color: "white"}} onClick={() => Del()}>Delete</button><br/><br/>
      {
        updateArr.map((e)=>{
          return(
            <div>
              {e.name} &nbsp;
              <button onClick= {()=> EditData(e.id)}>edit</button> &nbsp;
              <button onClick= {()=> DeleteData(e.id)}>delete</button> <br/><br/>
            </div>
          )
        })
      }
      
    </>
  )
}

export default App
