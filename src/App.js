import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Imagegrid from './Components/Imagegrid';
import Tablecomponent from './Components/Tablecomponent';
import { useState } from 'react'
import './Styles/index.css';

function App() {

 const [tableImageList, settableImageList] = useState([]);

 function handleAddChange(newValue) {

    settableImageList(prevItems => [...prevItems, newValue]);
  }


  function handleDeleteChange(deleteValue) {
    let deletedItem = tableImageList.filter(item => item.id !== deleteValue.id )

    settableImageList(deletedItem)

  }

  return (
    <>
    <div className="container">
    <h1> IProgrammer </h1>
    <Imagegrid imageList = {tableImageList} onAddChange={handleAddChange} onDeleteChange={handleDeleteChange}/>
    <Tablecomponent imageList = {tableImageList}/>
    </div>
    </>
  )
    
}

export default App;
