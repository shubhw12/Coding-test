import React from 'react'
import axios from 'axios'
import {useEffect , useState } from 'react'

function Imagegrid(props) {

    const [imageData , setimageData] = useState([]);

    const fetchImages = async() =>{
            
        await axios.get('https://jsonplaceholder.typicode.com/photos/')
       .then( (response) => {
           setimageData(response.data);
           
         })
         .catch( (error) => {
           console.log(error);
         })
    }

    useEffect(() => {
        fetchImages();
    }, [])

    const handleAddButtonClick = ( data ) =>{
        if( -1 === props.imageList.indexOf(data)){
            props.onAddChange(data)
        }else{
            props.onDeleteChange(data)
        }
    }   

    const imageMarkup  = Object.values(imageData).map((curelem , index )=>{

        if(index < 4 ){
            let rowCount = index%3 === 0;
            return(
                <>
                <div className="col">
                    <div className="imagecontainer g-col-4">
                    <img  src={curelem.url}></img>
                    <button className="btn" onClick={() => handleAddButtonClick(curelem)}>{ -1 !== props.imageList.indexOf(curelem) ? 'Remove from list' : 'Add to list'}</button>
                    </div> 
                    </div>
                </>
            )
        }
        
    })

    return (
        <>
        <div className="container">
            <div className= "row" >
                {imageMarkup}
            </div>
        </div>
        </>
    )
}

export default Imagegrid
