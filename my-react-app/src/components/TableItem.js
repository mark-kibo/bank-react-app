import Button from 'react-bootstrap/Button';
import { useState } from 'react';


function TableItem({data, deleteData}){
    // store data id
    const [id, setId] = useState(data.id);
    console.log(data)
    function handleDelete(){
        deleteData(id)
    }

    return( 
    <tr>
        <td>{data.id}</td>
        <td>{data.date}</td>
        <td>{data.description}</td>
        <td>{data.category}</td>
        <td>{data.amount}</td>
        <td><Button onClick={handleDelete}variant='danger'>Delete</Button></td>
    </tr>
    )
}

export default TableItem;