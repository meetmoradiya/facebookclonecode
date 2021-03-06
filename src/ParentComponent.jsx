import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import Blog from './Blog'
import Child from './Child'

const ParentComponent = () => {
    const [importData , setImportData] = useState([]);
    
    const getData = (data)=>{
        setImportData(data)

    }
    
    return (
        <div>
            <Child data={getData} />
           <Blog fname={importData.firstname} lname={importData.lastname} mobile={importData.contact} /> 
           <FontAwesomeIcon icon={faHeart} />
        </div>
    )
}

export default ParentComponent;
