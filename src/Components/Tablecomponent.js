import React from 'react'

const Tablecomponent = (props) => {


    const tableMarkup  = props.imageList.map((curelem , index )=>{

        console.log(curelem);
            return(
                <>
               <tr>
            <th scope="row"><img  src={curelem.thumbnailUrl}></img></th>
            <td>{curelem.title}</td>
            <td>{curelem.id}</td>
            <td>{curelem.url}</td>
            <td>{curelem.thumbnailUrl}</td>
          </tr>
                </>
            )
        
        
    })
    console.log(props.imageList);
    return (
        <div className="container">
        <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">ID</th>
            <th scope="col"> URL</th>
            <th scope="col">Thumbnail URL</th>
            
          </tr>
        </thead>
        <tbody>
            {tableMarkup}
        </tbody>
      </table>
      </div>
    )
}

export default Tablecomponent
