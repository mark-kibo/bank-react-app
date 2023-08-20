import Table from 'react-bootstrap/Table';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';




function App() {
  // nitialize data state
  const [transactiopns, setTransactions]=useState(null)

  // fetch my data from server
  useEffect(()=>{
    fetch("  http://localhost:3000/transactions")
    .then(res=>res.json())
    .then(data=>setTransactions(data))
  }, [])
  // show a prototype of a loader when data has not been fetched
  if(transactiopns===null){
    return <div>Loading...</div>
  }
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    );
  
}

export default App;
